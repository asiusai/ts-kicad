// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 64 MHz, 2.0-3.6V, 43 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G030C_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g030c6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x0 Value line.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G030C_6_8_Tx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "NRST": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G030C_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 64 MHz, 2.0-3.6V, 43 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G030C6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g030c6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x0 Value line.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G030C6Tx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "NRST": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G030C6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 64 MHz, 2.0-3.6V, 43 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G030C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g030c8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x0 Value line.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G030C8Tx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "NRST": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G030C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 64 MHz, 2.0-3.6V, 17 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G030F6Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g030f6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x0 Value line.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32G030F6Px extends Component.withPins({
  "PB7/PB8": "1",
  "PB9/PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "NRST": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PA8/PB0/PB1/PB2": "15",
  "PA9/PA11": "16",
  "PA10/PA12": "17",
  "PA13": "18",
  "PA14/PA15": "19",
  "PB3/PB4/PB5/PB6": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PB7/PB8": "bidirectional", "PB9/PC14": "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", NRST: "input", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "PA8/PB0/PB1/PB2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", "PA14/PA15": "bidirectional", "PB3/PB4/PB5/PB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G030F6Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 64 MHz, 2.0-3.6V, 6 GPIO, SO8N
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G030J6Mx`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g030j6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x0 Value line.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class STM32G030J6Mx extends Component.withPins({
  "PB7/PB8/PB9/PC14": "1",
  "VDD": "2",
  "VSS": "3",
  "NRST/PA0/PA1/PA2": "4",
  "PA8/PA9/PA11/PB0/PB1": "5",
  "PA10/PA12": "6",
  "PA13": "7",
  "PA14/PA15/PB5/PB6": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PB7/PB8/PB9/PC14": "bidirectional", VDD: "power_in", VSS: "power_in", "NRST/PA0/PA1/PA2": "input", "PA8/PA9/PA11/PB0/PB1": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", "PA14/PA15/PB5/PB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G030J6Mx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 64 MHz, 2.0-3.6V, 29 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G030K_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g030k6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x0 Value line.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G030K_6_8_Tx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "NRST": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", NRST: "input", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G030K_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 64 MHz, 2.0-3.6V, 29 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G030K6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g030k6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x0 Value line.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G030K6Tx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "NRST": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", NRST: "input", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G030K6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 64 MHz, 2.0-3.6V, 29 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G030K8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g030k8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x0 Value line.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G030K8Tx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "NRST": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", NRST: "input", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G030K8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16-64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031C_4-6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031c4.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G031C_4_6_8_Tx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031C_4-6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031C4Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031c4.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G031C4Tx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031C4Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16-64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031C_4-6-8_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031c4.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G031C_4_6_8_Ux extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031C_4-6-8_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031C4Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031c4.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G031C4Ux extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031C4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031C6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031c6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G031C6Tx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031C6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031C6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031c6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G031C6Ux extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031C6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031c8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G031C8Tx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031C8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031c8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G031C8Ux extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031C8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16-64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 18 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031F_4-6-8_Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031f4.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32G031F_4_6_8_Px extends Component.withPins({
  "PB7/PB8": "1",
  "PB9/PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PA8/PB0/PB1/PB2": "15",
  "PA9/PA11": "16",
  "PA10/PA12": "17",
  "PA13": "18",
  "PA14/PA15": "19",
  "PB3/PB4/PB5/PB6": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PB7/PB8": "bidirectional", "PB9/PC14": "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "PA8/PB0/PB1/PB2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", "PA14/PA15": "bidirectional", "PB3/PB4/PB5/PB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031F_4-6-8_Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 18 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031F4Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031f4.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32G031F4Px extends Component.withPins({
  "PB7/PB8": "1",
  "PB9/PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PA8/PB0/PB1/PB2": "15",
  "PA9/PA11": "16",
  "PA10/PA12": "17",
  "PA13": "18",
  "PA14/PA15": "19",
  "PB3/PB4/PB5/PB6": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PB7/PB8": "bidirectional", "PB9/PC14": "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "PA8/PB0/PB1/PB2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", "PA14/PA15": "bidirectional", "PB3/PB4/PB5/PB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031F4Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 18 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031F6Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031f6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32G031F6Px extends Component.withPins({
  "PB7/PB8": "1",
  "PB9/PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PA8/PB0/PB1/PB2": "15",
  "PA9/PA11": "16",
  "PA10/PA12": "17",
  "PA13": "18",
  "PA14/PA15": "19",
  "PB3/PB4/PB5/PB6": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PB7/PB8": "bidirectional", "PB9/PC14": "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "PA8/PB0/PB1/PB2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", "PA14/PA15": "bidirectional", "PB3/PB4/PB5/PB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031F6Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 18 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031F8Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031f8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32G031F8Px extends Component.withPins({
  "PB7/PB8": "1",
  "PB9/PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PA8/PB0/PB1/PB2": "15",
  "PA9/PA11": "16",
  "PA10/PA12": "17",
  "PA13": "18",
  "PA14/PA15": "19",
  "PB3/PB4/PB5/PB6": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PB7/PB8": "bidirectional", "PB9/PC14": "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "PA8/PB0/PB1/PB2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", "PA14/PA15": "bidirectional", "PB3/PB4/PB5/PB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031F8Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16-64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 26 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031G_4-6-8_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031g4.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32G031G_4_6_8_Ux extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "VDD": "3",
  "VSS": "4",
  "PF2": "5",
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
  "PA8": "16",
  "PC6": "17",
  "PA9/PA11": "18",
  "PA10/PA12": "19",
  "PA13": "20",
  "PA14": "21",
  "PA15": "22",
  "PB3": "23",
  "PB4": "24",
  "PB5": "25",
  "PB6": "26",
  "PB7": "27",
  "PB8": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031G_4-6-8_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 26 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031G4Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031g4.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32G031G4Ux extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "VDD": "3",
  "VSS": "4",
  "PF2": "5",
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
  "PA8": "16",
  "PC6": "17",
  "PA9/PA11": "18",
  "PA10/PA12": "19",
  "PA13": "20",
  "PA14": "21",
  "PA15": "22",
  "PB3": "23",
  "PB4": "24",
  "PB5": "25",
  "PB6": "26",
  "PB7": "27",
  "PB8": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031G4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 26 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031G6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031g6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32G031G6Ux extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "VDD": "3",
  "VSS": "4",
  "PF2": "5",
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
  "PA8": "16",
  "PC6": "17",
  "PA9/PA11": "18",
  "PA10/PA12": "19",
  "PA13": "20",
  "PA14": "21",
  "PA15": "22",
  "PB3": "23",
  "PB4": "24",
  "PB5": "25",
  "PB6": "26",
  "PB7": "27",
  "PB8": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031G6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 26 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031G8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031g8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32G031G8Ux extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "VDD": "3",
  "VSS": "4",
  "PF2": "5",
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
  "PA8": "16",
  "PC6": "17",
  "PA9/PA11": "18",
  "PA10/PA12": "19",
  "PA13": "20",
  "PA14": "21",
  "PA15": "22",
  "PB3": "23",
  "PB4": "24",
  "PB5": "25",
  "PB6": "26",
  "PB7": "27",
  "PB8": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031G8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16-32KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 6 GPIO, SO8N
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031J_4-6_Mx`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031j4.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class STM32G031J_4_6_Mx extends Component.withPins({
  "PB7/PB8/PB9/PC14": "1",
  "VDD": "2",
  "VSS": "3",
  "PA0/PA1/PA2/PF2": "4",
  "PA8/PA9/PA11/PB0/PB1": "5",
  "PA10/PA12": "6",
  "PA13": "7",
  "PA14/PA15/PB5/PB6": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PB7/PB8/PB9/PC14": "bidirectional", VDD: "power_in", VSS: "power_in", "PA0/PA1/PA2/PF2": "bidirectional", "PA8/PA9/PA11/PB0/PB1": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", "PA14/PA15/PB5/PB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031J_4-6_Mx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 6 GPIO, SO8N
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031J4Mx`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031j4.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class STM32G031J4Mx extends Component.withPins({
  "PB7/PB8/PB9/PC14": "1",
  "VDD": "2",
  "VSS": "3",
  "PA0/PA1/PA2/PF2": "4",
  "PA8/PA9/PA11/PB0/PB1": "5",
  "PA10/PA12": "6",
  "PA13": "7",
  "PA14/PA15/PB5/PB6": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PB7/PB8/PB9/PC14": "bidirectional", VDD: "power_in", VSS: "power_in", "PA0/PA1/PA2/PF2": "bidirectional", "PA8/PA9/PA11/PB0/PB1": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", "PA14/PA15/PB5/PB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031J4Mx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 6 GPIO, SO8N
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031J6Mx`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031j6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class STM32G031J6Mx extends Component.withPins({
  "PB7/PB8/PB9/PC14": "1",
  "VDD": "2",
  "VSS": "3",
  "PA0/PA1/PA2/PF2": "4",
  "PA8/PA9/PA11/PB0/PB1": "5",
  "PA10/PA12": "6",
  "PA13": "7",
  "PA14/PA15/PB5/PB6": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PB7/PB8/PB9/PC14": "bidirectional", VDD: "power_in", VSS: "power_in", "PA0/PA1/PA2/PF2": "bidirectional", "PA8/PA9/PA11/PB0/PB1": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", "PA14/PA15/PB5/PB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031J6Mx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16-64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031K_4-6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031k4.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G031K_4_6_8_Tx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031K_4-6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031K4Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031k4.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G031K4Tx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031K4Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16-64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031K_4-6-8_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031k4.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G031K_4_6_8_Ux extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031K_4-6-8_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031K4Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031k4.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G031K4Ux extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031K4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031K6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031k6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G031K6Tx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031K6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031K6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031k6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G031K6Ux extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031K6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031K8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031k8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G031K8Tx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031K8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031K8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031k8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G031K8Ux extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031K8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 16 GPIO, WLCSP18
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G031Y8Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*1.86x2.14mm*Layout7x5*P0.4mm*Stagger*.
 * @see https://www.st.com/resource/en/datasheet/stm32g031y8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_CSP:ST_WLCSP-18_1.86x2.14mm_Layout7x5_P0.4mm_Stagger.
 */
export class STM32G031Y8Yx extends Component.withPins({
  "PA13": "A1",
  "PA14/PA15": "A3",
  "PB7/PB8": "A5",
  "PC15": "A7",
  "PA10/PA12": "B2",
  "PB3/PB4/PB5/PB6": "B4",
  "PB9/PC14": "B6",
  "PA9/PA11": "C1",
  "PA5": "C3",
  "PA1": "C5",
  "VDD": "C7",
  "PA7": "D2",
  "PA3/PA4": "D4",
  "VSS": "D6",
  "PA8/PB0/PB1/PB2": "E1",
  "PA6": "E3",
  "PA2": "E5",
  "PA0/PF2": "E7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA13: "bidirectional", "PA14/PA15": "bidirectional", "PB7/PB8": "bidirectional", PC15: "bidirectional", "PA10/PA12": "bidirectional", "PB3/PB4/PB5/PB6": "bidirectional", "PB9/PC14": "bidirectional", "PA9/PA11": "bidirectional", PA5: "bidirectional", PA1: "bidirectional", VDD: "power_in", PA7: "bidirectional", "PA3/PA4": "bidirectional", VSS: "power_in", "PA8/PB0/PB1/PB2": "bidirectional", PA6: "bidirectional", PA2: "bidirectional", "PA0/PF2": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G031Y8Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G041C_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g041c6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G041C_6_8_Tx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G041C_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G041C6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g041c6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G041C6Tx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G041C6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G041C_6-8_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g041c6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G041C_6_8_Ux extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G041C_6-8_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G041C6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g041c6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G041C6Ux extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G041C6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G041C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g041c8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G041C8Tx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G041C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G041C8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g041c8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G041C8Ux extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G041C8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 18 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G041F_6-8_Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g041f6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32G041F_6_8_Px extends Component.withPins({
  "PB7/PB8": "1",
  "PB9/PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PA8/PB0/PB1/PB2": "15",
  "PA9/PA11": "16",
  "PA10/PA12": "17",
  "PA13": "18",
  "PA14/PA15": "19",
  "PB3/PB4/PB5/PB6": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PB7/PB8": "bidirectional", "PB9/PC14": "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "PA8/PB0/PB1/PB2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", "PA14/PA15": "bidirectional", "PB3/PB4/PB5/PB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G041F_6-8_Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 18 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G041F6Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g041f6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32G041F6Px extends Component.withPins({
  "PB7/PB8": "1",
  "PB9/PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PA8/PB0/PB1/PB2": "15",
  "PA9/PA11": "16",
  "PA10/PA12": "17",
  "PA13": "18",
  "PA14/PA15": "19",
  "PB3/PB4/PB5/PB6": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PB7/PB8": "bidirectional", "PB9/PC14": "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "PA8/PB0/PB1/PB2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", "PA14/PA15": "bidirectional", "PB3/PB4/PB5/PB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G041F6Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 18 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G041F8Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g041f8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32G041F8Px extends Component.withPins({
  "PB7/PB8": "1",
  "PB9/PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PA8/PB0/PB1/PB2": "15",
  "PA9/PA11": "16",
  "PA10/PA12": "17",
  "PA13": "18",
  "PA14/PA15": "19",
  "PB3/PB4/PB5/PB6": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PB7/PB8": "bidirectional", "PB9/PC14": "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "PA8/PB0/PB1/PB2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", "PA14/PA15": "bidirectional", "PB3/PB4/PB5/PB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G041F8Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 26 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G041G_6-8_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g041g6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32G041G_6_8_Ux extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "VDD": "3",
  "VSS": "4",
  "PF2": "5",
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
  "PA8": "16",
  "PC6": "17",
  "PA9/PA11": "18",
  "PA10/PA12": "19",
  "PA13": "20",
  "PA14": "21",
  "PA15": "22",
  "PB3": "23",
  "PB4": "24",
  "PB5": "25",
  "PB6": "26",
  "PB7": "27",
  "PB8": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G041G_6-8_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 26 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G041G6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g041g6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32G041G6Ux extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "VDD": "3",
  "VSS": "4",
  "PF2": "5",
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
  "PA8": "16",
  "PC6": "17",
  "PA9/PA11": "18",
  "PA10/PA12": "19",
  "PA13": "20",
  "PA14": "21",
  "PA15": "22",
  "PB3": "23",
  "PB4": "24",
  "PB5": "25",
  "PB6": "26",
  "PB7": "27",
  "PB8": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G041G6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 26 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G041G8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g041g8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32G041G8Ux extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "VDD": "3",
  "VSS": "4",
  "PF2": "5",
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
  "PA8": "16",
  "PC6": "17",
  "PA9/PA11": "18",
  "PA10/PA12": "19",
  "PA13": "20",
  "PA14": "21",
  "PA15": "22",
  "PB3": "23",
  "PB4": "24",
  "PB5": "25",
  "PB6": "26",
  "PB7": "27",
  "PB8": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G041G8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 6 GPIO, SO8N
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G041J6Mx`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g041j6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class STM32G041J6Mx extends Component.withPins({
  "PB7/PB8/PB9/PC14": "1",
  "VDD": "2",
  "VSS": "3",
  "PA0/PA1/PA2/PF2": "4",
  "PA8/PA9/PA11/PB0/PB1": "5",
  "PA10/PA12": "6",
  "PA13": "7",
  "PA14/PA15/PB5/PB6": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PB7/PB8/PB9/PC14": "bidirectional", VDD: "power_in", VSS: "power_in", "PA0/PA1/PA2/PF2": "bidirectional", "PA8/PA9/PA11/PB0/PB1": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", "PA14/PA15/PB5/PB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G041J6Mx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G041K_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g041k6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G041K_6_8_Tx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G041K_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G041K6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g041k6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G041K6Tx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G041K6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G041K_6-8_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g041k6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G041K_6_8_Ux extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G041K_6-8_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G041K6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g041k6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G041K6Ux extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G041K6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G041K8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g041k8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G041K8Tx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G041K8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G041K8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g041k8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G041K8Ux extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G041K8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 64 MHz, 1.7-3.6V, 16 GPIO, WLCSP18
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G041Y8Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*1.86x2.14mm*Layout7x5*P0.4mm*Stagger*.
 * @see https://www.st.com/resource/en/datasheet/stm32g041y8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_CSP:ST_WLCSP-18_1.86x2.14mm_Layout7x5_P0.4mm_Stagger.
 */
export class STM32G041Y8Yx extends Component.withPins({
  "PA13": "A1",
  "PA14/PA15": "A3",
  "PB7/PB8": "A5",
  "PC15": "A7",
  "PA10/PA12": "B2",
  "PB3/PB4/PB5/PB6": "B4",
  "PB9/PC14": "B6",
  "PA9/PA11": "C1",
  "PA5": "C3",
  "PA1": "C5",
  "VDD": "C7",
  "PA7": "D2",
  "PA3/PA4": "D4",
  "VSS": "D6",
  "PA8/PB0/PB1/PB2": "E1",
  "PA6": "E3",
  "PA2": "E5",
  "PA0/PF2": "E7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA13: "bidirectional", "PA14/PA15": "bidirectional", "PB7/PB8": "bidirectional", PC15: "bidirectional", "PA10/PA12": "bidirectional", "PB3/PB4/PB5/PB6": "bidirectional", "PB9/PC14": "bidirectional", "PA9/PA11": "bidirectional", PA5: "bidirectional", PA1: "bidirectional", VDD: "power_in", PA7: "bidirectional", "PA3/PA4": "bidirectional", VSS: "power_in", "PA8/PB0/PB1/PB2": "bidirectional", PA6: "bidirectional", PA2: "bidirectional", "PA0/PF2": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G041Y8Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 18KB RAM, 64 MHz, 2.0-3.6V, 44 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G050C6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g050c6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x0 Value line.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G050C6Tx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G050C6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 18KB RAM, 64 MHz, 2.0-3.6V, 44 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G050C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g050c8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x0 Value line.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G050C8Tx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G050C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 18KB RAM, 64 MHz, 2.0-3.6V, 18 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G050F6Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g050f6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x0 Value line.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32G050F6Px extends Component.withPins({
  "PB7/PB8": "1",
  "PB9/PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PA8/PB0/PB1/PB2": "15",
  "PA9/PA11": "16",
  "PA10/PA12": "17",
  "PA13": "18",
  "PA14/PA15": "19",
  "PB3/PB4/PB5/PB6": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PB7/PB8": "bidirectional", "PB9/PC14": "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "PA8/PB0/PB1/PB2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", "PA14/PA15": "bidirectional", "PB3/PB4/PB5/PB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G050F6Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 18KB RAM, 64 MHz, 2.0-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G050K6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g050k6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x0 Value line.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G050K6Tx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G050K6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 18KB RAM, 64 MHz, 2.0-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G050K8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g050k8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x0 Value line.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G050K8Tx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G050K8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G051C_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g051c6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G051C_6_8_Tx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G051C_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G051C6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g051c6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G051C6Tx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G051C6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G051C_6-8_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g051c6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G051C_6_8_Ux extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G051C_6-8_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G051C6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g051c6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G051C6Ux extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G051C6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G051C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g051c8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G051C8Tx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G051C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G051C8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g051c8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G051C8Ux extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G051C8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 18 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G051F_6-8_Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g051f6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32G051F_6_8_Px extends Component.withPins({
  "PB7/PB8": "1",
  "PB9/PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PA8/PB0/PB1/PB2": "15",
  "PA9/PA11": "16",
  "PA10/PA12": "17",
  "PA13": "18",
  "PA14/PA15": "19",
  "PB3/PB4/PB5/PB6": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PB7/PB8": "bidirectional", "PB9/PC14": "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "PA8/PB0/PB1/PB2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", "PA14/PA15": "bidirectional", "PB3/PB4/PB5/PB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G051F_6-8_Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 18 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G051F6Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g051f6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32G051F6Px extends Component.withPins({
  "PB7/PB8": "1",
  "PB9/PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PA8/PB0/PB1/PB2": "15",
  "PA9/PA11": "16",
  "PA10/PA12": "17",
  "PA13": "18",
  "PA14/PA15": "19",
  "PB3/PB4/PB5/PB6": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PB7/PB8": "bidirectional", "PB9/PC14": "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "PA8/PB0/PB1/PB2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", "PA14/PA15": "bidirectional", "PB3/PB4/PB5/PB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G051F6Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 18 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G051F8Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g051f8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32G051F8Px extends Component.withPins({
  "PB7/PB8": "1",
  "PB9/PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PA8/PB0/PB1/PB2": "15",
  "PA9/PA11": "16",
  "PA10/PA12": "17",
  "PA13": "18",
  "PA14/PA15": "19",
  "PB3/PB4/PB5/PB6": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PB7/PB8": "bidirectional", "PB9/PC14": "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "PA8/PB0/PB1/PB2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", "PA14/PA15": "bidirectional", "PB3/PB4/PB5/PB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G051F8Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 18 GPIO, WLCSP20
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G051F8Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*1.94x2.4mm*Layout4x5*P0.4mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g051f8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_CSP:ST_WLCSP-20_1.94x2.4mm_Layout4x5_P0.4mm.
 */
export class STM32G051F8Yx extends Component.withPins({
  "PA10/PA12": "A1",
  "PB3/PB4/PB5/PB6": "A2",
  "PB7/PB8": "A3",
  "PB9/PC14": "A4",
  "PA9/PA11": "B1",
  "PA13": "B2",
  "PA14/PA15": "B3",
  "PC15": "B4",
  "PA6": "C1",
  "PA3": "C2",
  "PA0": "C3",
  "VDD": "C4",
  "PA7": "D1",
  "PA5": "D2",
  "PA1": "D3",
  "VSS": "D4",
  "PA8/PB0/PB1/PB2": "E1",
  "PA4": "E2",
  "PA2": "E3",
  "PF2": "E4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PA10/PA12": "bidirectional", "PB3/PB4/PB5/PB6": "bidirectional", "PB7/PB8": "bidirectional", "PB9/PC14": "bidirectional", "PA9/PA11": "bidirectional", PA13: "bidirectional", "PA14/PA15": "bidirectional", PC15: "bidirectional", PA6: "bidirectional", PA3: "bidirectional", PA0: "bidirectional", VDD: "power_in", PA7: "bidirectional", PA5: "bidirectional", PA1: "bidirectional", VSS: "power_in", "PA8/PB0/PB1/PB2": "bidirectional", PA4: "bidirectional", PA2: "bidirectional", PF2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G051F8Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 26 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G051G_6-8_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g051g6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32G051G_6_8_Ux extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "VDD": "3",
  "VSS": "4",
  "PF2": "5",
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
  "PA8": "16",
  "PC6": "17",
  "PA9/PA11": "18",
  "PA10/PA12": "19",
  "PA13": "20",
  "PA14": "21",
  "PA15": "22",
  "PB3": "23",
  "PB4": "24",
  "PB5": "25",
  "PB6": "26",
  "PB7": "27",
  "PB8": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G051G_6-8_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 26 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G051G6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g051g6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32G051G6Ux extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "VDD": "3",
  "VSS": "4",
  "PF2": "5",
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
  "PA8": "16",
  "PC6": "17",
  "PA9/PA11": "18",
  "PA10/PA12": "19",
  "PA13": "20",
  "PA14": "21",
  "PA15": "22",
  "PB3": "23",
  "PB4": "24",
  "PB5": "25",
  "PB6": "26",
  "PB7": "27",
  "PB8": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G051G6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 26 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G051G8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g051g8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32G051G8Ux extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "VDD": "3",
  "VSS": "4",
  "PF2": "5",
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
  "PA8": "16",
  "PC6": "17",
  "PA9/PA11": "18",
  "PA10/PA12": "19",
  "PA13": "20",
  "PA14": "21",
  "PA15": "22",
  "PB3": "23",
  "PB4": "24",
  "PB5": "25",
  "PB6": "26",
  "PB7": "27",
  "PB8": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G051G8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G051K_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g051k6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G051K_6_8_Tx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G051K_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G051K6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g051k6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G051K6Tx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G051K6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G051K_6-8_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g051k6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G051K_6_8_Ux extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G051K_6-8_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G051K6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g051k6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G051K6Ux extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G051K6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G051K8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g051k8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G051K8Tx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G051K8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G051K8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g051k8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G051K8Ux extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G051K8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G061C_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g061c6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G061C_6_8_Tx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G061C_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G061C6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g061c6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G061C6Tx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G061C6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G061C_6-8_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g061c6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G061C_6_8_Ux extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G061C_6-8_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G061C6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g061c6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G061C6Ux extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G061C6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G061C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g061c8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G061C8Tx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G061C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G061C8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g061c8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G061C8Ux extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G061C8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 18 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G061F_6-8_Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g061f6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32G061F_6_8_Px extends Component.withPins({
  "PB7/PB8": "1",
  "PB9/PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PA8/PB0/PB1/PB2": "15",
  "PA9/PA11": "16",
  "PA10/PA12": "17",
  "PA13": "18",
  "PA14/PA15": "19",
  "PB3/PB4/PB5/PB6": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PB7/PB8": "bidirectional", "PB9/PC14": "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "PA8/PB0/PB1/PB2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", "PA14/PA15": "bidirectional", "PB3/PB4/PB5/PB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G061F_6-8_Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 18 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G061F6Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g061f6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32G061F6Px extends Component.withPins({
  "PB7/PB8": "1",
  "PB9/PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PA8/PB0/PB1/PB2": "15",
  "PA9/PA11": "16",
  "PA10/PA12": "17",
  "PA13": "18",
  "PA14/PA15": "19",
  "PB3/PB4/PB5/PB6": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PB7/PB8": "bidirectional", "PB9/PC14": "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "PA8/PB0/PB1/PB2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", "PA14/PA15": "bidirectional", "PB3/PB4/PB5/PB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G061F6Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 18 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G061F8Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g061f8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32G061F8Px extends Component.withPins({
  "PB7/PB8": "1",
  "PB9/PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PA8/PB0/PB1/PB2": "15",
  "PA9/PA11": "16",
  "PA10/PA12": "17",
  "PA13": "18",
  "PA14/PA15": "19",
  "PB3/PB4/PB5/PB6": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PB7/PB8": "bidirectional", "PB9/PC14": "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", "PA8/PB0/PB1/PB2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", "PA14/PA15": "bidirectional", "PB3/PB4/PB5/PB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G061F8Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 18 GPIO, WLCSP20
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G061F8Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*1.94x2.4mm*Layout4x5*P0.4mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g061f8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_CSP:ST_WLCSP-20_1.94x2.4mm_Layout4x5_P0.4mm.
 */
export class STM32G061F8Yx extends Component.withPins({
  "PA10/PA12": "A1",
  "PB3/PB4/PB5/PB6": "A2",
  "PB7/PB8": "A3",
  "PB9/PC14": "A4",
  "PA9/PA11": "B1",
  "PA13": "B2",
  "PA14/PA15": "B3",
  "PC15": "B4",
  "PA6": "C1",
  "PA3": "C2",
  "PA0": "C3",
  "VDD": "C4",
  "PA7": "D1",
  "PA5": "D2",
  "PA1": "D3",
  "VSS": "D4",
  "PA8/PB0/PB1/PB2": "E1",
  "PA4": "E2",
  "PA2": "E3",
  "PF2": "E4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PA10/PA12": "bidirectional", "PB3/PB4/PB5/PB6": "bidirectional", "PB7/PB8": "bidirectional", "PB9/PC14": "bidirectional", "PA9/PA11": "bidirectional", PA13: "bidirectional", "PA14/PA15": "bidirectional", PC15: "bidirectional", PA6: "bidirectional", PA3: "bidirectional", PA0: "bidirectional", VDD: "power_in", PA7: "bidirectional", PA5: "bidirectional", PA1: "bidirectional", VSS: "power_in", "PA8/PB0/PB1/PB2": "bidirectional", PA4: "bidirectional", PA2: "bidirectional", PF2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G061F8Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 26 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G061G_6-8_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g061g6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32G061G_6_8_Ux extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "VDD": "3",
  "VSS": "4",
  "PF2": "5",
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
  "PA8": "16",
  "PC6": "17",
  "PA9/PA11": "18",
  "PA10/PA12": "19",
  "PA13": "20",
  "PA14": "21",
  "PA15": "22",
  "PB3": "23",
  "PB4": "24",
  "PB5": "25",
  "PB6": "26",
  "PB7": "27",
  "PB8": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G061G_6-8_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 26 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G061G6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g061g6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32G061G6Ux extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "VDD": "3",
  "VSS": "4",
  "PF2": "5",
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
  "PA8": "16",
  "PC6": "17",
  "PA9/PA11": "18",
  "PA10/PA12": "19",
  "PA13": "20",
  "PA14": "21",
  "PA15": "22",
  "PB3": "23",
  "PB4": "24",
  "PB5": "25",
  "PB6": "26",
  "PB7": "27",
  "PB8": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G061G6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 26 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G061G8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g061g8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32G061G8Ux extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "VDD": "3",
  "VSS": "4",
  "PF2": "5",
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
  "PA8": "16",
  "PC6": "17",
  "PA9/PA11": "18",
  "PA10/PA12": "19",
  "PA13": "20",
  "PA14": "21",
  "PA15": "22",
  "PB3": "23",
  "PB4": "24",
  "PB5": "25",
  "PB6": "26",
  "PB7": "27",
  "PB8": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G061G8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G061K_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g061k6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G061K_6_8_Tx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G061K_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G061K6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g061k6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G061K6Tx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G061K6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G061K_6-8_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g061k6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G061K_6_8_Ux extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G061K_6-8_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G061K6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g061k6.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G061K6Ux extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G061K6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G061K8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g061k8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G061K8Tx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G061K8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 18KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G061K8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g061k8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G061K8Ux extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G061K8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 36KB RAM, 64 MHz, 2.0-3.6V, 43 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G070CBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g070cb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x0 Value line.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G070CBTx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "NRST": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G070CBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 36KB RAM, 64 MHz, 2.0-3.6V, 29 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G070KBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g070kb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x0 Value line.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G070KBTx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "NRST": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", NRST: "input", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G070KBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 36KB RAM, 64 MHz, 2.0-3.6V, 59 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G070RBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g070rb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x0 Value line.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32G070RBTx extends Component.withPins({
  "PC11": "1",
  "PC12": "2",
  "PC13": "3",
  "PC14": "4",
  "PC15": "5",
  "VBAT": "6",
  "VREF+": "7",
  "VDD": "8",
  "VSS": "9",
  "PF0": "10",
  "PF1": "11",
  "NRST": "12",
  "PC0": "13",
  "PC1": "14",
  "PC2": "15",
  "PC3": "16",
  "PA0": "17",
  "PA1": "18",
  "PA2": "19",
  "PA3": "20",
  "PA4": "21",
  "PA5": "22",
  "PA6": "23",
  "PA7": "24",
  "PC4": "25",
  "PC5": "26",
  "PB0": "27",
  "PB1": "28",
  "PB2": "29",
  "PB10": "30",
  "PB11": "31",
  "PB12": "32",
  "PB13": "33",
  "PB14": "34",
  "PB15": "35",
  "PA8": "36",
  "NC/PA9": "37",
  "PC6": "38",
  "PC7": "39",
  "PD8": "40",
  "PD9": "41",
  "NC/PA10": "42",
  "PA9/PA11": "43",
  "PA10/PA12": "44",
  "PA13": "45",
  "PA14": "46",
  "PA15": "47",
  "PC8": "48",
  "PC9": "49",
  "PD0": "50",
  "PD1": "51",
  "PD2": "52",
  "PD3": "53",
  "PD4": "54",
  "PD5": "55",
  "PD6": "56",
  "PB3": "57",
  "PB4": "58",
  "PB5": "59",
  "PB6": "60",
  "PB7": "61",
  "PB8": "62",
  "PB9": "63",
  "PC10": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PC10: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G070RBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 36KB RAM, 64 MHz, 1.7-3.6V, 23 GPIO, WLCSP25
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G071EBYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*2.3x2.48mm*Layout5x5*P0.4mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g071eb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_CSP:ST_WLCSP-25_2.3x2.48mm_Layout5x5_P0.4mm.
 */
export class STM32G071EBYx extends Component.withPins({
  "PA15": "A1",
  "PA14": "A2",
  "PB5": "A3",
  "PB7": "A4",
  "PC14": "A5",
  "PA10/PA12": "B1",
  "PA13": "B2",
  "PB6": "B3",
  "PB8": "B4",
  "PC15": "B5",
  "PA9/PA11": "C1",
  "PA6": "C2",
  "PA3": "C3",
  "PA0": "C4",
  "VDD": "C5",
  "PA8": "D1",
  "PA7": "D2",
  "PA4": "D3",
  "PA1": "D4",
  "VSS": "D5",
  "PB1": "E1",
  "PB0": "E2",
  "PA5": "E3",
  "PA2": "E4",
  "PF2": "E5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA15: "bidirectional", PA14: "bidirectional", PB5: "bidirectional", PB7: "bidirectional", PC14: "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PB6: "bidirectional", PB8: "bidirectional", PC15: "bidirectional", "PA9/PA11": "bidirectional", PA6: "bidirectional", PA3: "bidirectional", PA0: "bidirectional", VDD: "power_in", PA8: "bidirectional", PA7: "bidirectional", PA4: "bidirectional", PA1: "bidirectional", VSS: "power_in", PB1: "bidirectional", PB0: "bidirectional", PA5: "bidirectional", PA2: "bidirectional", PF2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G071EBYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64-128KB flash, 36KB RAM, 64 MHz, 1.7-3.6V, 26 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G071G_8-B_UxN`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g071g8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32G071G_8_B_UxN extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "VDD": "3",
  "VSS": "4",
  "PF2": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB15": "15",
  "PA8": "16",
  "PC6": "17",
  "PA9/PA11": "18",
  "PA10/PA12": "19",
  "PA13": "20",
  "PA14": "21",
  "PD0": "22",
  "PD1": "23",
  "PD2": "24",
  "PD3": "25",
  "PB6": "26",
  "PB7": "27",
  "PB8": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G071G_8-B_UxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 36KB RAM, 64 MHz, 1.7-3.6V, 26 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G071G8UxN`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g071g8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32G071G8UxN extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "VDD": "3",
  "VSS": "4",
  "PF2": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB15": "15",
  "PA8": "16",
  "PC6": "17",
  "PA9/PA11": "18",
  "PA10/PA12": "19",
  "PA13": "20",
  "PA14": "21",
  "PD0": "22",
  "PD1": "23",
  "PD2": "24",
  "PD3": "25",
  "PB6": "26",
  "PB7": "27",
  "PB8": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G071G8UxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 36KB RAM, 64 MHz, 1.7-3.6V, 26 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G071GBUxN`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g071gb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32G071GBUxN extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "VDD": "3",
  "VSS": "4",
  "PF2": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB15": "15",
  "PA8": "16",
  "PC6": "17",
  "PA9/PA11": "18",
  "PA10/PA12": "19",
  "PA13": "20",
  "PA14": "21",
  "PD0": "22",
  "PD1": "23",
  "PD2": "24",
  "PD3": "25",
  "PB6": "26",
  "PB7": "27",
  "PB8": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G071GBUxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64-128KB flash, 36KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G071K_8-B_TxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g071k8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G071K_8_B_TxN extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB15": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "PC6": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G071K_8-B_TxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 36KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G071K8TxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g071k8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G071K8TxN extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB15": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "PC6": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G071K8TxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64-128KB flash, 36KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G071K_8-B_UxN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g071k8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G071K_8_B_UxN extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB15": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "PC6": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G071K_8-B_UxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 36KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G071K8UxN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g071k8.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G071K8UxN extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB15": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "PC6": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G071K8UxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 36KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G071KBTxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g071kb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G071KBTxN extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB15": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "PC6": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G071KBTxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 36KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G071KBUxN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g071kb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G071KBUxN extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB15": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "PC6": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G071KBUxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 36KB RAM, 64 MHz, 1.7-3.6V, 60 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G071RBIx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g071rb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32G071RBIx extends Component.withPins({
  "PC11": "A1",
  "PC10": "A2",
  "PB7": "A3",
  "PB6": "A4",
  "PD6": "A5",
  "PD2": "A6",
  "PD0": "A7",
  "PC8": "A8",
  "PC15": "B1",
  "PC12": "B2",
  "PB8": "B3",
  "PB3": "B4",
  "PD5": "B5",
  "PD1": "B6",
  "PC9": "B7",
  "PA10/PA12": "B8",
  "PC14": "C1",
  "PC13": "C2",
  "PB9": "C3",
  "PB4": "C4",
  "PD4": "C5",
  "PA15": "C6",
  "PA14": "C7",
  "PA9/PA11": "C8",
  "VDD": "D1",
  "VREF+": "D2",
  "VBAT": "D3",
  "PB5": "D4",
  "PD3": "D5",
  "PA10/UCPD1_DBCC2": "D6",
  "PA13": "D7",
  "PD9": "D8",
  "VSS": "E1",
  "PF2": "E2",
  "PC0": "E3",
  "PA7": "E4",
  "PC7": "E5",
  "PA9/UCPD1_DBCC1": "E6",
  "PC6": "E7",
  "PD8": "E8",
  "PF0": "F1",
  "PC1": "F2",
  "PA3": "F3",
  "PA6": "F4",
  "PB0": "F5",
  "PB14": "F6",
  "PB15": "F7",
  "PA8": "F8",
  "PF1": "G1",
  "PC2": "G2",
  "PA2": "G3",
  "PA5": "G4",
  "PB1": "G5",
  "PB10": "G6",
  "PB12": "G7",
  "PB13": "G8",
  "PC3": "H1",
  "PA0": "H2",
  "PA1": "H3",
  "PA4": "H4",
  "PC4": "H5",
  "PC5": "H6",
  "PB2": "H7",
  "PB11": "H8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC10: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC8: "bidirectional", PC15: "bidirectional", PC12: "bidirectional", PB8: "bidirectional", PB3: "bidirectional", PD5: "bidirectional", PD1: "bidirectional", PC9: "bidirectional", "PA10/PA12": "bidirectional", PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PD4: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", "PA9/PA11": "bidirectional", VDD: "power_in", "VREF+": "input", VBAT: "power_in", PB5: "bidirectional", PD3: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", PA13: "bidirectional", PD9: "bidirectional", VSS: "power_in", PF2: "bidirectional", PC0: "bidirectional", PA7: "bidirectional", PC7: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PD8: "bidirectional", PF0: "bidirectional", PC1: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB0: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PF1: "bidirectional", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB1: "bidirectional", PB10: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PB11: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G071RBIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 36KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G081CBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g081cb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G081CBTx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G081CBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 36KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G081CBUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g081cb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G081CBUx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G081CBUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 36KB RAM, 64 MHz, 1.7-3.6V, 23 GPIO, WLCSP25
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G081EBYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*2.3x2.48mm*Layout5x5*P0.4mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g081eb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_CSP:ST_WLCSP-25_2.3x2.48mm_Layout5x5_P0.4mm.
 */
export class STM32G081EBYx extends Component.withPins({
  "PA15": "A1",
  "PA14": "A2",
  "PB5": "A3",
  "PB7": "A4",
  "PC14": "A5",
  "PA10/PA12": "B1",
  "PA13": "B2",
  "PB6": "B3",
  "PB8": "B4",
  "PC15": "B5",
  "PA9/PA11": "C1",
  "PA6": "C2",
  "PA3": "C3",
  "PA0": "C4",
  "VDD": "C5",
  "PA8": "D1",
  "PA7": "D2",
  "PA4": "D3",
  "PA1": "D4",
  "VSS": "D5",
  "PB1": "E1",
  "PB0": "E2",
  "PA5": "E3",
  "PA2": "E4",
  "PF2": "E5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA15: "bidirectional", PA14: "bidirectional", PB5: "bidirectional", PB7: "bidirectional", PC14: "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PB6: "bidirectional", PB8: "bidirectional", PC15: "bidirectional", "PA9/PA11": "bidirectional", PA6: "bidirectional", PA3: "bidirectional", PA0: "bidirectional", VDD: "power_in", PA8: "bidirectional", PA7: "bidirectional", PA4: "bidirectional", PA1: "bidirectional", VSS: "power_in", PB1: "bidirectional", PB0: "bidirectional", PA5: "bidirectional", PA2: "bidirectional", PF2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G081EBYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 36KB RAM, 64 MHz, 1.7-3.6V, 26 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G081GBUx`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g081gb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32G081GBUx extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "VDD": "3",
  "VSS": "4",
  "PF2": "5",
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
  "PA8": "16",
  "PC6": "17",
  "PA9/PA11": "18",
  "PA10/PA12": "19",
  "PA13": "20",
  "PA14": "21",
  "PA15": "22",
  "PB3": "23",
  "PB4": "24",
  "PB5": "25",
  "PB6": "26",
  "PB7": "27",
  "PB8": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G081GBUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 36KB RAM, 64 MHz, 1.7-3.6V, 26 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G081GBUxN`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g081gb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32G081GBUxN extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "VDD": "3",
  "VSS": "4",
  "PF2": "5",
  "PA0": "6",
  "PA1": "7",
  "PA2": "8",
  "PA3": "9",
  "PA4": "10",
  "PA5": "11",
  "PA6": "12",
  "PA7": "13",
  "PB0": "14",
  "PB15": "15",
  "PA8": "16",
  "PC6": "17",
  "PA9/PA11": "18",
  "PA10/PA12": "19",
  "PA13": "20",
  "PA14": "21",
  "PD0": "22",
  "PD1": "23",
  "PD2": "24",
  "PD3": "25",
  "PB6": "26",
  "PB7": "27",
  "PB8": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G081GBUxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 36KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G081KBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g081kb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G081KBTx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G081KBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 36KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G081KBTxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g081kb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G081KBTxN extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB15": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "PC6": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G081KBTxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 36KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G081KBUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g081kb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G081KBUx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G081KBUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 36KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G081KBUxN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g081kb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G081KBUxN extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB15": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "PC6": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G081KBUxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 36KB RAM, 64 MHz, 1.7-3.6V, 60 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G081RBIx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g081rb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32G081RBIx extends Component.withPins({
  "PC11": "A1",
  "PC10": "A2",
  "PB7": "A3",
  "PB6": "A4",
  "PD6": "A5",
  "PD2": "A6",
  "PD0": "A7",
  "PC8": "A8",
  "PC15": "B1",
  "PC12": "B2",
  "PB8": "B3",
  "PB3": "B4",
  "PD5": "B5",
  "PD1": "B6",
  "PC9": "B7",
  "PA10/PA12": "B8",
  "PC14": "C1",
  "PC13": "C2",
  "PB9": "C3",
  "PB4": "C4",
  "PD4": "C5",
  "PA15": "C6",
  "PA14": "C7",
  "PA9/PA11": "C8",
  "VDD": "D1",
  "VREF+": "D2",
  "VBAT": "D3",
  "PB5": "D4",
  "PD3": "D5",
  "PA10/UCPD1_DBCC2": "D6",
  "PA13": "D7",
  "PD9": "D8",
  "VSS": "E1",
  "PF2": "E2",
  "PC0": "E3",
  "PA7": "E4",
  "PC7": "E5",
  "PA9/UCPD1_DBCC1": "E6",
  "PC6": "E7",
  "PD8": "E8",
  "PF0": "F1",
  "PC1": "F2",
  "PA3": "F3",
  "PA6": "F4",
  "PB0": "F5",
  "PB14": "F6",
  "PB15": "F7",
  "PA8": "F8",
  "PF1": "G1",
  "PC2": "G2",
  "PA2": "G3",
  "PA5": "G4",
  "PB1": "G5",
  "PB10": "G6",
  "PB12": "G7",
  "PB13": "G8",
  "PC3": "H1",
  "PA0": "H2",
  "PA1": "H3",
  "PA4": "H4",
  "PC4": "H5",
  "PC5": "H6",
  "PB2": "H7",
  "PB11": "H8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC10: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC8: "bidirectional", PC15: "bidirectional", PC12: "bidirectional", PB8: "bidirectional", PB3: "bidirectional", PD5: "bidirectional", PD1: "bidirectional", PC9: "bidirectional", "PA10/PA12": "bidirectional", PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PD4: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", "PA9/PA11": "bidirectional", VDD: "power_in", "VREF+": "input", VBAT: "power_in", PB5: "bidirectional", PD3: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", PA13: "bidirectional", PD9: "bidirectional", VSS: "power_in", PF2: "bidirectional", PC0: "bidirectional", PA7: "bidirectional", PC7: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PD8: "bidirectional", PF0: "bidirectional", PC1: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB0: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PF1: "bidirectional", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB1: "bidirectional", PB10: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PB11: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G081RBIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 36KB RAM, 64 MHz, 1.7-3.6V, 60 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G081RBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g081rb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32G081RBTx extends Component.withPins({
  "PC11": "1",
  "PC12": "2",
  "PC13": "3",
  "PC14": "4",
  "PC15": "5",
  "VBAT": "6",
  "VREF+": "7",
  "VDD": "8",
  "VSS": "9",
  "PF0": "10",
  "PF1": "11",
  "PF2": "12",
  "PC0": "13",
  "PC1": "14",
  "PC2": "15",
  "PC3": "16",
  "PA0": "17",
  "PA1": "18",
  "PA2": "19",
  "PA3": "20",
  "PA4": "21",
  "PA5": "22",
  "PA6": "23",
  "PA7": "24",
  "PC4": "25",
  "PC5": "26",
  "PB0": "27",
  "PB1": "28",
  "PB2": "29",
  "PB10": "30",
  "PB11": "31",
  "PB12": "32",
  "PB13": "33",
  "PB14": "34",
  "PB15": "35",
  "PA8": "36",
  "PA9/UCPD1_DBCC1": "37",
  "PC6": "38",
  "PC7": "39",
  "PD8": "40",
  "PD9": "41",
  "PA10/UCPD1_DBCC2": "42",
  "PA9/PA11": "43",
  "PA10/PA12": "44",
  "PA13": "45",
  "PA14": "46",
  "PA15": "47",
  "PC8": "48",
  "PC9": "49",
  "PD0": "50",
  "PD1": "51",
  "PD2": "52",
  "PD3": "53",
  "PD4": "54",
  "PD5": "55",
  "PD6": "56",
  "PB3": "57",
  "PB4": "58",
  "PB5": "59",
  "PB6": "60",
  "PB7": "61",
  "PB8": "62",
  "PB9": "63",
  "PC10": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PC10: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G081RBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 2.0-3.6V, 43 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B0CETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b0ce.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x0 Value line.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G0B0CETx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "NRST": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "NC/PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "NC/PA10": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B0CETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 2.0-3.6V, 29 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B0KETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b0ke.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x0 Value line.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G0B0KETx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "NRST": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "NC/PA9": "19",
  "PC6": "20",
  "NC/PA10": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", NRST: "input", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B0KETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 2.0-3.6V, 59 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B0RETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b0re.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x0 Value line.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32G0B0RETx extends Component.withPins({
  "PC11": "1",
  "PC12": "2",
  "PC13": "3",
  "PC14": "4",
  "PC15": "5",
  "VBAT": "6",
  "VREF+": "7",
  "VDD": "8",
  "VSS": "9",
  "PF0": "10",
  "PF1": "11",
  "NRST": "12",
  "PC0": "13",
  "PC1": "14",
  "PC2": "15",
  "PC3": "16",
  "PA0": "17",
  "PA1": "18",
  "PA2": "19",
  "PA3": "20",
  "PA4": "21",
  "PA5": "22",
  "PA6": "23",
  "PA7": "24",
  "PC4": "25",
  "PC5": "26",
  "PB0": "27",
  "PB1": "28",
  "PB2": "29",
  "PB10": "30",
  "PB11": "31",
  "PB12": "32",
  "PB13": "33",
  "PB14": "34",
  "PB15": "35",
  "PA8": "36",
  "NC/PA9": "37",
  "PC6": "38",
  "PC7": "39",
  "PD8": "40",
  "PD9": "41",
  "NC/PA10": "42",
  "PA9/PA11": "43",
  "PA10/PA12": "44",
  "PA13": "45",
  "PA14": "46",
  "PA15": "47",
  "PC8": "48",
  "PC9": "49",
  "PD0": "50",
  "PD1": "51",
  "PD2": "52",
  "PD3": "53",
  "PD4": "54",
  "PD5": "55",
  "PD6": "56",
  "PB3": "57",
  "PB4": "58",
  "PB5": "59",
  "PB6": "60",
  "PB7": "61",
  "PB8": "62",
  "PB9": "63",
  "PC10": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PC10: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B0RETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 2.0-3.6V, 93 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B0VETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b0ve.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x0 Value line.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32G0B0VETx extends Component.withPins({
  "PB9": "1",
  "PC10": "2",
  "PC11": "3",
  "PE4": "4",
  "PE5": "5",
  "PE6": "6",
  "PC12": "7",
  "PC13": "8",
  "PC14": "9",
  "PC15": "10",
  "VBAT": "11",
  "VREF+": "12",
  "VDD_13": "13",
  "VSS_14": "14",
  "PF0": "15",
  "PF1": "16",
  "NRST": "17",
  "PF3": "18",
  "PF4": "19",
  "PF5": "20",
  "PC0": "21",
  "PC1": "22",
  "PC2": "23",
  "PC3": "24",
  "PA0": "25",
  "PA1": "26",
  "PA2": "27",
  "PA3": "28",
  "PA4": "29",
  "PA5": "30",
  "PA6": "31",
  "PA7": "32",
  "PC4": "33",
  "PC5": "34",
  "PB0": "35",
  "PB1": "36",
  "PB2": "37",
  "PF6": "38",
  "PF7": "39",
  "PE7": "40",
  "PE8": "41",
  "PE9": "42",
  "PE10": "43",
  "PE11": "44",
  "PE12": "45",
  "PE13": "46",
  "PE14": "47",
  "PE15": "48",
  "PB10": "49",
  "PB11": "50",
  "PB12": "51",
  "PB13": "52",
  "PB14": "53",
  "PB15": "54",
  "PA8": "55",
  "NC/PA9": "56",
  "PC6": "57",
  "PC7": "58",
  "PD8": "59",
  "PD9": "60",
  "PD10": "61",
  "PD11": "62",
  "VSS_63": "63",
  "VDD_64": "64",
  "PD12": "65",
  "PD13": "66",
  "PD14": "67",
  "PD15": "68",
  "NC/PA10": "69",
  "PA9/PA11": "70",
  "PA10/PA12": "71",
  "PF8": "72",
  "PA13": "73",
  "PA14": "74",
  "PA15": "75",
  "PC8": "76",
  "PC9": "77",
  "PD0": "78",
  "PD1": "79",
  "PD2": "80",
  "PD3": "81",
  "PD4": "82",
  "PD5": "83",
  "PD6": "84",
  "PD7": "85",
  "PF9": "86",
  "PF10": "87",
  "PF11": "88",
  "PF12": "89",
  "PF13": "90",
  "PB3": "91",
  "PB4": "92",
  "PB5": "93",
  "PE0": "94",
  "PE1": "95",
  "PE2": "96",
  "PE3": "97",
  "PB6": "98",
  "PB7": "99",
  "PB8": "100",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_13: "power_in", VSS_14: "power_in", PF0: "bidirectional", PF1: "bidirectional", NRST: "input", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "NC/PA9": "no_connect", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", VSS_63: "passive", VDD_64: "power_in", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", "NC/PA10": "no_connect", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PF8: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF11: "bidirectional", PF12: "bidirectional", PF13: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B0VETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1C_B-C-E_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1cb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G0B1C_B_C_E_Tx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1C_B-C-E_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1CBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1cb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G0B1CBTx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1CBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 42 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1C_B-C-E_TxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1cb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G0B1C_B_C_E_TxN extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD_6": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "VSS_30": "30",
  "VDD_31": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_6: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VSS_30: "passive", VDD_31: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1C_B-C-E_TxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 42 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1CBTxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1cb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G0B1CBTxN extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD_6": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "VSS_30": "30",
  "VDD_31": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_6: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VSS_30: "passive", VDD_31: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1CBTxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1C_B-C-E_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1cb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G0B1C_B_C_E_Ux extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1C_B-C-E_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1CBUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1cb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G0B1CBUx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1CBUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 42 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1C_B-C-E_UxN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1cb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G0B1C_B_C_E_UxN extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD_6": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "VSS_30": "30",
  "VDD_31": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_6: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VSS_30: "passive", VDD_31: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1C_B-C-E_UxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 42 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1CBUxN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1cb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G0B1CBUxN extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD_6": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "VSS_30": "30",
  "VDD_31": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_6: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VSS_30: "passive", VDD_31: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1CBUxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1CCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1cc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G0B1CCTx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1CCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 42 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1CCTxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1cc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G0B1CCTxN extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD_6": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "VSS_30": "30",
  "VDD_31": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_6: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VSS_30: "passive", VDD_31: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1CCTxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1CCUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1cc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G0B1CCUx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1CCUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 42 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1CCUxN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1cc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G0B1CCUxN extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD_6": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "VSS_30": "30",
  "VDD_31": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_6: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VSS_30: "passive", VDD_31: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1CCUxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1CETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1ce.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G0B1CETx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1CETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 42 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1CETxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1ce.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G0B1CETxN extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD_6": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "VSS_30": "30",
  "VDD_31": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_6: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VSS_30: "passive", VDD_31: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1CETxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1CEUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1ce.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G0B1CEUx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1CEUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 42 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1CEUxN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1ce.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G0B1CEUxN extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD_6": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "VSS_30": "30",
  "VDD_31": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_6: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VSS_30: "passive", VDD_31: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1CEUxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1K_B-C-E_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1kb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G0B1K_B_C_E_Tx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "PC6": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1K_B-C-E_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1KBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1kb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G0B1KBTx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "PC6": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1KBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 29 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1K_B-C-E_TxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1kb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G0B1K_B_C_E_TxN extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD_4": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB15": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "VDD_20": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD_4: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VDD_20: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1K_B-C-E_TxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 29 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1KBTxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1kb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G0B1KBTxN extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD_4": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB15": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "VDD_20": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD_4: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VDD_20: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1KBTxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1K_B-C-E_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1kb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G0B1K_B_C_E_Ux extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "PC6": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1K_B-C-E_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1KBUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1kb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G0B1KBUx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "PC6": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1KBUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 29 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1K_B-C-E_UxN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1kb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G0B1K_B_C_E_UxN extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD_4": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB15": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "VDD_20": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD_4: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VDD_20: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1K_B-C-E_UxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 29 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1KBUxN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1kb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G0B1KBUxN extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD_4": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB15": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "VDD_20": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD_4: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VDD_20: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1KBUxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1KCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1kc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G0B1KCTx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "PC6": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1KCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 29 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1KCTxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1kc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G0B1KCTxN extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD_4": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB15": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "VDD_20": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD_4: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VDD_20: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1KCTxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1KCUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1kc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G0B1KCUx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "PC6": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1KCUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 29 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1KCUxN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1kc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G0B1KCUxN extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD_4": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB15": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "VDD_20": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD_4: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VDD_20: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1KCUxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1KETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1ke.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G0B1KETx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "PC6": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1KETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 29 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1KETxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1ke.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G0B1KETxN extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD_4": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB15": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "VDD_20": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD_4: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VDD_20: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1KETxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1KEUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1ke.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G0B1KEUx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "PC6": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1KEUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 29 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1KEUxN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1ke.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G0B1KEUxN extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD_4": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB15": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "VDD_20": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD_4: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VDD_20: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1KEUxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 74 GPIO, LQFP80
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1M_B-C-E_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*12x12mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1mb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-80_12x12mm_P0.5mm.
 */
export class STM32G0B1M_B_C_E_Tx extends Component.withPins({
  "PB9": "1",
  "PC10": "2",
  "PC11": "3",
  "PC12": "4",
  "PC13": "5",
  "PC14": "6",
  "PC15": "7",
  "VBAT": "8",
  "VREF+": "9",
  "VDD_10": "10",
  "VSS_11": "11",
  "PF0": "12",
  "PF1": "13",
  "PF2": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "PA0": "19",
  "PA1": "20",
  "PA2": "21",
  "PA3": "22",
  "PA4": "23",
  "PA5": "24",
  "PA6": "25",
  "PA7": "26",
  "PC4": "27",
  "PC5": "28",
  "PB0": "29",
  "PB1": "30",
  "PB2": "31",
  "PE7": "32",
  "PE8": "33",
  "PE9": "34",
  "PE10": "35",
  "PB10": "36",
  "PB11": "37",
  "PB12": "38",
  "PB13": "39",
  "PB14": "40",
  "PB15": "41",
  "PA8": "42",
  "PA9/UCPD1_DBCC1": "43",
  "PC6": "44",
  "PC7": "45",
  "PD8": "46",
  "PD9": "47",
  "PD10": "48",
  "PD11": "49",
  "VSS_50": "50",
  "VDD_51": "51",
  "PD12": "52",
  "PD13": "53",
  "PD14": "54",
  "PD15": "55",
  "PA10/UCPD1_DBCC2": "56",
  "PA9/PA11": "57",
  "PA10/PA12": "58",
  "PA13": "59",
  "PA14": "60",
  "PA15": "61",
  "PC8": "62",
  "PC9": "63",
  "PD0": "64",
  "PD1": "65",
  "PD2": "66",
  "PD3": "67",
  "PD4": "68",
  "PD5": "69",
  "PD6": "70",
  "PD7": "71",
  "PB3": "72",
  "PB4": "73",
  "PB5": "74",
  "PE0": "75",
  "PE1": "76",
  "PE3": "77",
  "PB6": "78",
  "PB7": "79",
  "PB8": "80",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_10: "power_in", VSS_11: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", VSS_50: "passive", VDD_51: "power_in", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", PE3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1M_B-C-E_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 74 GPIO, LQFP80
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1MBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*12x12mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1mb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-80_12x12mm_P0.5mm.
 */
export class STM32G0B1MBTx extends Component.withPins({
  "PB9": "1",
  "PC10": "2",
  "PC11": "3",
  "PC12": "4",
  "PC13": "5",
  "PC14": "6",
  "PC15": "7",
  "VBAT": "8",
  "VREF+": "9",
  "VDD_10": "10",
  "VSS_11": "11",
  "PF0": "12",
  "PF1": "13",
  "PF2": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "PA0": "19",
  "PA1": "20",
  "PA2": "21",
  "PA3": "22",
  "PA4": "23",
  "PA5": "24",
  "PA6": "25",
  "PA7": "26",
  "PC4": "27",
  "PC5": "28",
  "PB0": "29",
  "PB1": "30",
  "PB2": "31",
  "PE7": "32",
  "PE8": "33",
  "PE9": "34",
  "PE10": "35",
  "PB10": "36",
  "PB11": "37",
  "PB12": "38",
  "PB13": "39",
  "PB14": "40",
  "PB15": "41",
  "PA8": "42",
  "PA9/UCPD1_DBCC1": "43",
  "PC6": "44",
  "PC7": "45",
  "PD8": "46",
  "PD9": "47",
  "PD10": "48",
  "PD11": "49",
  "VSS_50": "50",
  "VDD_51": "51",
  "PD12": "52",
  "PD13": "53",
  "PD14": "54",
  "PD15": "55",
  "PA10/UCPD1_DBCC2": "56",
  "PA9/PA11": "57",
  "PA10/PA12": "58",
  "PA13": "59",
  "PA14": "60",
  "PA15": "61",
  "PC8": "62",
  "PC9": "63",
  "PD0": "64",
  "PD1": "65",
  "PD2": "66",
  "PD3": "67",
  "PD4": "68",
  "PD5": "69",
  "PD6": "70",
  "PD7": "71",
  "PB3": "72",
  "PB4": "73",
  "PB5": "74",
  "PE0": "75",
  "PE1": "76",
  "PE3": "77",
  "PB6": "78",
  "PB7": "79",
  "PB8": "80",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_10: "power_in", VSS_11: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", VSS_50: "passive", VDD_51: "power_in", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", PE3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1MBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 74 GPIO, LQFP80
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1MCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*12x12mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1mc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-80_12x12mm_P0.5mm.
 */
export class STM32G0B1MCTx extends Component.withPins({
  "PB9": "1",
  "PC10": "2",
  "PC11": "3",
  "PC12": "4",
  "PC13": "5",
  "PC14": "6",
  "PC15": "7",
  "VBAT": "8",
  "VREF+": "9",
  "VDD_10": "10",
  "VSS_11": "11",
  "PF0": "12",
  "PF1": "13",
  "PF2": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "PA0": "19",
  "PA1": "20",
  "PA2": "21",
  "PA3": "22",
  "PA4": "23",
  "PA5": "24",
  "PA6": "25",
  "PA7": "26",
  "PC4": "27",
  "PC5": "28",
  "PB0": "29",
  "PB1": "30",
  "PB2": "31",
  "PE7": "32",
  "PE8": "33",
  "PE9": "34",
  "PE10": "35",
  "PB10": "36",
  "PB11": "37",
  "PB12": "38",
  "PB13": "39",
  "PB14": "40",
  "PB15": "41",
  "PA8": "42",
  "PA9/UCPD1_DBCC1": "43",
  "PC6": "44",
  "PC7": "45",
  "PD8": "46",
  "PD9": "47",
  "PD10": "48",
  "PD11": "49",
  "VSS_50": "50",
  "VDD_51": "51",
  "PD12": "52",
  "PD13": "53",
  "PD14": "54",
  "PD15": "55",
  "PA10/UCPD1_DBCC2": "56",
  "PA9/PA11": "57",
  "PA10/PA12": "58",
  "PA13": "59",
  "PA14": "60",
  "PA15": "61",
  "PC8": "62",
  "PC9": "63",
  "PD0": "64",
  "PD1": "65",
  "PD2": "66",
  "PD3": "67",
  "PD4": "68",
  "PD5": "69",
  "PD6": "70",
  "PD7": "71",
  "PB3": "72",
  "PB4": "73",
  "PB5": "74",
  "PE0": "75",
  "PE1": "76",
  "PE3": "77",
  "PB6": "78",
  "PB7": "79",
  "PB8": "80",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_10: "power_in", VSS_11: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", VSS_50: "passive", VDD_51: "power_in", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", PE3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1MCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 74 GPIO, LQFP80
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1METx`. Reference prefix: `U`.
 * Footprint filters: LQFP*12x12mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1me.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-80_12x12mm_P0.5mm.
 */
export class STM32G0B1METx extends Component.withPins({
  "PB9": "1",
  "PC10": "2",
  "PC11": "3",
  "PC12": "4",
  "PC13": "5",
  "PC14": "6",
  "PC15": "7",
  "VBAT": "8",
  "VREF+": "9",
  "VDD_10": "10",
  "VSS_11": "11",
  "PF0": "12",
  "PF1": "13",
  "PF2": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "PA0": "19",
  "PA1": "20",
  "PA2": "21",
  "PA3": "22",
  "PA4": "23",
  "PA5": "24",
  "PA6": "25",
  "PA7": "26",
  "PC4": "27",
  "PC5": "28",
  "PB0": "29",
  "PB1": "30",
  "PB2": "31",
  "PE7": "32",
  "PE8": "33",
  "PE9": "34",
  "PE10": "35",
  "PB10": "36",
  "PB11": "37",
  "PB12": "38",
  "PB13": "39",
  "PB14": "40",
  "PB15": "41",
  "PA8": "42",
  "PA9/UCPD1_DBCC1": "43",
  "PC6": "44",
  "PC7": "45",
  "PD8": "46",
  "PD9": "47",
  "PD10": "48",
  "PD11": "49",
  "VSS_50": "50",
  "VDD_51": "51",
  "PD12": "52",
  "PD13": "53",
  "PD14": "54",
  "PD15": "55",
  "PA10/UCPD1_DBCC2": "56",
  "PA9/PA11": "57",
  "PA10/PA12": "58",
  "PA13": "59",
  "PA14": "60",
  "PA15": "61",
  "PC8": "62",
  "PC9": "63",
  "PD0": "64",
  "PD1": "65",
  "PD2": "66",
  "PD3": "67",
  "PD4": "68",
  "PD5": "69",
  "PD6": "70",
  "PD7": "71",
  "PB3": "72",
  "PB4": "73",
  "PB5": "74",
  "PE0": "75",
  "PE1": "76",
  "PE3": "77",
  "PB6": "78",
  "PB7": "79",
  "PB8": "80",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_10: "power_in", VSS_11: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", VSS_50: "passive", VDD_51: "power_in", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", PE3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1METx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 46 GPIO, WLCSP52
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1NEYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*3.09x3.15mm*Layout13x8*P0.4mm*Stagger*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1ne.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_CSP:ST_WLCSP-52_3.09x3.15mm_Layout13x8_P0.4mm_Stagger.
 */
export class STM32G0B1NEYx extends Component.withPins({
  "PA15": "A2",
  "PD0": "A4",
  "PD3": "A6",
  "PB3": "A8",
  "PB5": "A10",
  "PB8": "A12",
  "PA10/PA12": "B1",
  "PA13": "B3",
  "PA14": "B5",
  "PD2": "B7",
  "PB4": "B9",
  "PC13": "B11",
  "PC14": "B13",
  "PA9/PA11": "C2",
  "PA10/UCPD1_DBCC2": "C4",
  "PD1": "C6",
  "PB6": "C8",
  "VBAT": "C10",
  "PC15": "C12",
  "VDD_D1": "D1",
  "PC7": "D3",
  "PC6": "D5",
  "PB7": "D7",
  "PB9": "D9",
  "VREF+": "D11",
  "VDD_D13": "D13",
  "VSS_E2": "E2",
  "PA9/UCPD1_DBCC1": "E4",
  "PB12": "E6",
  "PA2": "E8",
  "PA1": "E10",
  "VSS_E12": "E12",
  "PA8": "F1",
  "PB15": "F3",
  "PB11": "F5",
  "PA6": "F7",
  "PA5": "F9",
  "PF2": "F11",
  "PF0": "F13",
  "PB14": "G2",
  "PB2": "G4",
  "PC5": "G6",
  "PC4": "G8",
  "PA4": "G10",
  "PF1": "G12",
  "PB13": "H1",
  "PB10": "H3",
  "PB1": "H5",
  "PB0": "H7",
  "PA7": "H9",
  "PA3": "H11",
  "PA0": "H13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA15: "bidirectional", PD0: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB5: "bidirectional", PB8: "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD2: "bidirectional", PB4: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", "PA9/PA11": "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", PD1: "bidirectional", PB6: "bidirectional", VBAT: "power_in", PC15: "bidirectional", VDD_D1: "power_in", PC7: "bidirectional", PC6: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", "VREF+": "input", VDD_D13: "power_in", VSS_E2: "power_in", "PA9/UCPD1_DBCC1": "bidirectional", PB12: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", VSS_E12: "passive", PA8: "bidirectional", PB15: "bidirectional", PB11: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PF2: "bidirectional", PF0: "bidirectional", PB14: "bidirectional", PB2: "bidirectional", PC5: "bidirectional", PC4: "bidirectional", PA4: "bidirectional", PF1: "bidirectional", PB13: "bidirectional", PB10: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PA7: "bidirectional", PA3: "bidirectional", PA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1NEYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 58 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1R_B-C-E_IxN`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1rb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32G0B1R_B_C_E_IxN extends Component.withPins({
  "PC11": "A1",
  "PC10": "A2",
  "PB7": "A3",
  "PB6": "A4",
  "PD6": "A5",
  "PD2": "A6",
  "PD0": "A7",
  "PC8": "A8",
  "PC15": "B1",
  "PC12": "B2",
  "PB8": "B3",
  "PB3": "B4",
  "PD5": "B5",
  "PD1": "B6",
  "PC9": "B7",
  "PA10/PA12": "B8",
  "PC14": "C1",
  "PC13": "C2",
  "PB9": "C3",
  "PB4": "C4",
  "PD4": "C5",
  "PA15": "C6",
  "PA14": "C7",
  "PA9/PA11": "C8",
  "VDD_D1": "D1",
  "VREF+": "D2",
  "VBAT": "D3",
  "PB5": "D4",
  "PD3": "D5",
  "PA10/UCPD1_DBCC2": "D6",
  "PA13": "D7",
  "VDD_D8": "D8",
  "VSS_E1": "E1",
  "PF2": "E2",
  "PC0": "E3",
  "PA7": "E4",
  "PC7": "E5",
  "PA9/UCPD1_DBCC1": "E6",
  "PC6": "E7",
  "VSS_E8": "E8",
  "PF0": "F1",
  "PC1": "F2",
  "PA3": "F3",
  "PA6": "F4",
  "PB0": "F5",
  "PB14": "F6",
  "PB15": "F7",
  "PA8": "F8",
  "PF1": "G1",
  "PC2": "G2",
  "PA2": "G3",
  "PA5": "G4",
  "PB1": "G5",
  "PB10": "G6",
  "PB12": "G7",
  "PB13": "G8",
  "PC3": "H1",
  "PA0": "H2",
  "PA1": "H3",
  "PA4": "H4",
  "PC4": "H5",
  "PC5": "H6",
  "PB2": "H7",
  "PB11": "H8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC10: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC8: "bidirectional", PC15: "bidirectional", PC12: "bidirectional", PB8: "bidirectional", PB3: "bidirectional", PD5: "bidirectional", PD1: "bidirectional", PC9: "bidirectional", "PA10/PA12": "bidirectional", PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PD4: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", "PA9/PA11": "bidirectional", VDD_D1: "power_in", "VREF+": "input", VBAT: "power_in", PB5: "bidirectional", PD3: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", PA13: "bidirectional", VDD_D8: "power_in", VSS_E1: "power_in", PF2: "bidirectional", PC0: "bidirectional", PA7: "bidirectional", PC7: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", VSS_E8: "passive", PF0: "bidirectional", PC1: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB0: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PF1: "bidirectional", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB1: "bidirectional", PB10: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PB11: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1R_B-C-E_IxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 58 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1RBIxN`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1rb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32G0B1RBIxN extends Component.withPins({
  "PC11": "A1",
  "PC10": "A2",
  "PB7": "A3",
  "PB6": "A4",
  "PD6": "A5",
  "PD2": "A6",
  "PD0": "A7",
  "PC8": "A8",
  "PC15": "B1",
  "PC12": "B2",
  "PB8": "B3",
  "PB3": "B4",
  "PD5": "B5",
  "PD1": "B6",
  "PC9": "B7",
  "PA10/PA12": "B8",
  "PC14": "C1",
  "PC13": "C2",
  "PB9": "C3",
  "PB4": "C4",
  "PD4": "C5",
  "PA15": "C6",
  "PA14": "C7",
  "PA9/PA11": "C8",
  "VDD_D1": "D1",
  "VREF+": "D2",
  "VBAT": "D3",
  "PB5": "D4",
  "PD3": "D5",
  "PA10/UCPD1_DBCC2": "D6",
  "PA13": "D7",
  "VDD_D8": "D8",
  "VSS_E1": "E1",
  "PF2": "E2",
  "PC0": "E3",
  "PA7": "E4",
  "PC7": "E5",
  "PA9/UCPD1_DBCC1": "E6",
  "PC6": "E7",
  "VSS_E8": "E8",
  "PF0": "F1",
  "PC1": "F2",
  "PA3": "F3",
  "PA6": "F4",
  "PB0": "F5",
  "PB14": "F6",
  "PB15": "F7",
  "PA8": "F8",
  "PF1": "G1",
  "PC2": "G2",
  "PA2": "G3",
  "PA5": "G4",
  "PB1": "G5",
  "PB10": "G6",
  "PB12": "G7",
  "PB13": "G8",
  "PC3": "H1",
  "PA0": "H2",
  "PA1": "H3",
  "PA4": "H4",
  "PC4": "H5",
  "PC5": "H6",
  "PB2": "H7",
  "PB11": "H8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC10: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC8: "bidirectional", PC15: "bidirectional", PC12: "bidirectional", PB8: "bidirectional", PB3: "bidirectional", PD5: "bidirectional", PD1: "bidirectional", PC9: "bidirectional", "PA10/PA12": "bidirectional", PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PD4: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", "PA9/PA11": "bidirectional", VDD_D1: "power_in", "VREF+": "input", VBAT: "power_in", PB5: "bidirectional", PD3: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", PA13: "bidirectional", VDD_D8: "power_in", VSS_E1: "power_in", PF2: "bidirectional", PC0: "bidirectional", PA7: "bidirectional", PC7: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", VSS_E8: "passive", PF0: "bidirectional", PC1: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB0: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PF1: "bidirectional", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB1: "bidirectional", PB10: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PB11: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1RBIxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 60 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1R_B-C-E_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1rb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32G0B1R_B_C_E_Tx extends Component.withPins({
  "PC11": "1",
  "PC12": "2",
  "PC13": "3",
  "PC14": "4",
  "PC15": "5",
  "VBAT": "6",
  "VREF+": "7",
  "VDD": "8",
  "VSS": "9",
  "PF0": "10",
  "PF1": "11",
  "PF2": "12",
  "PC0": "13",
  "PC1": "14",
  "PC2": "15",
  "PC3": "16",
  "PA0": "17",
  "PA1": "18",
  "PA2": "19",
  "PA3": "20",
  "PA4": "21",
  "PA5": "22",
  "PA6": "23",
  "PA7": "24",
  "PC4": "25",
  "PC5": "26",
  "PB0": "27",
  "PB1": "28",
  "PB2": "29",
  "PB10": "30",
  "PB11": "31",
  "PB12": "32",
  "PB13": "33",
  "PB14": "34",
  "PB15": "35",
  "PA8": "36",
  "PA9/UCPD1_DBCC1": "37",
  "PC6": "38",
  "PC7": "39",
  "PD8": "40",
  "PD9": "41",
  "PA10/UCPD1_DBCC2": "42",
  "PA9/PA11": "43",
  "PA10/PA12": "44",
  "PA13": "45",
  "PA14": "46",
  "PA15": "47",
  "PC8": "48",
  "PC9": "49",
  "PD0": "50",
  "PD1": "51",
  "PD2": "52",
  "PD3": "53",
  "PD4": "54",
  "PD5": "55",
  "PD6": "56",
  "PB3": "57",
  "PB4": "58",
  "PB5": "59",
  "PB6": "60",
  "PB7": "61",
  "PB8": "62",
  "PB9": "63",
  "PC10": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PC10: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1R_B-C-E_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 60 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1RBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1rb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32G0B1RBTx extends Component.withPins({
  "PC11": "1",
  "PC12": "2",
  "PC13": "3",
  "PC14": "4",
  "PC15": "5",
  "VBAT": "6",
  "VREF+": "7",
  "VDD": "8",
  "VSS": "9",
  "PF0": "10",
  "PF1": "11",
  "PF2": "12",
  "PC0": "13",
  "PC1": "14",
  "PC2": "15",
  "PC3": "16",
  "PA0": "17",
  "PA1": "18",
  "PA2": "19",
  "PA3": "20",
  "PA4": "21",
  "PA5": "22",
  "PA6": "23",
  "PA7": "24",
  "PC4": "25",
  "PC5": "26",
  "PB0": "27",
  "PB1": "28",
  "PB2": "29",
  "PB10": "30",
  "PB11": "31",
  "PB12": "32",
  "PB13": "33",
  "PB14": "34",
  "PB15": "35",
  "PA8": "36",
  "PA9/UCPD1_DBCC1": "37",
  "PC6": "38",
  "PC7": "39",
  "PD8": "40",
  "PD9": "41",
  "PA10/UCPD1_DBCC2": "42",
  "PA9/PA11": "43",
  "PA10/PA12": "44",
  "PA13": "45",
  "PA14": "46",
  "PA15": "47",
  "PC8": "48",
  "PC9": "49",
  "PD0": "50",
  "PD1": "51",
  "PD2": "52",
  "PD3": "53",
  "PD4": "54",
  "PD5": "55",
  "PD6": "56",
  "PB3": "57",
  "PB4": "58",
  "PB5": "59",
  "PB6": "60",
  "PB7": "61",
  "PB8": "62",
  "PB9": "63",
  "PC10": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PC10: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1RBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 58 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1R_B-C-E_TxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1rb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32G0B1R_B_C_E_TxN extends Component.withPins({
  "PC11": "1",
  "PC12": "2",
  "PC13": "3",
  "PC14": "4",
  "PC15": "5",
  "VBAT": "6",
  "VREF+": "7",
  "VDD_8": "8",
  "VSS_9": "9",
  "PF0": "10",
  "PF1": "11",
  "PF2": "12",
  "PC0": "13",
  "PC1": "14",
  "PC2": "15",
  "PC3": "16",
  "PA0": "17",
  "PA1": "18",
  "PA2": "19",
  "PA3": "20",
  "PA4": "21",
  "PA5": "22",
  "PA6": "23",
  "PA7": "24",
  "PC4": "25",
  "PC5": "26",
  "PB0": "27",
  "PB1": "28",
  "PB2": "29",
  "PB10": "30",
  "PB11": "31",
  "PB12": "32",
  "PB13": "33",
  "PB14": "34",
  "PB15": "35",
  "PA8": "36",
  "PA9/UCPD1_DBCC1": "37",
  "PC6": "38",
  "PC7": "39",
  "VSS_40": "40",
  "VDD_41": "41",
  "PA10/UCPD1_DBCC2": "42",
  "PA9/PA11": "43",
  "PA10/PA12": "44",
  "PA13": "45",
  "PA14": "46",
  "PA15": "47",
  "PC8": "48",
  "PC9": "49",
  "PD0": "50",
  "PD1": "51",
  "PD2": "52",
  "PD3": "53",
  "PD4": "54",
  "PD5": "55",
  "PD6": "56",
  "PB3": "57",
  "PB4": "58",
  "PB5": "59",
  "PB6": "60",
  "PB7": "61",
  "PB8": "62",
  "PB9": "63",
  "PC10": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_8: "power_in", VSS_9: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", VSS_40: "passive", VDD_41: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PC10: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1R_B-C-E_TxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 58 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1RBTxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1rb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32G0B1RBTxN extends Component.withPins({
  "PC11": "1",
  "PC12": "2",
  "PC13": "3",
  "PC14": "4",
  "PC15": "5",
  "VBAT": "6",
  "VREF+": "7",
  "VDD_8": "8",
  "VSS_9": "9",
  "PF0": "10",
  "PF1": "11",
  "PF2": "12",
  "PC0": "13",
  "PC1": "14",
  "PC2": "15",
  "PC3": "16",
  "PA0": "17",
  "PA1": "18",
  "PA2": "19",
  "PA3": "20",
  "PA4": "21",
  "PA5": "22",
  "PA6": "23",
  "PA7": "24",
  "PC4": "25",
  "PC5": "26",
  "PB0": "27",
  "PB1": "28",
  "PB2": "29",
  "PB10": "30",
  "PB11": "31",
  "PB12": "32",
  "PB13": "33",
  "PB14": "34",
  "PB15": "35",
  "PA8": "36",
  "PA9/UCPD1_DBCC1": "37",
  "PC6": "38",
  "PC7": "39",
  "VSS_40": "40",
  "VDD_41": "41",
  "PA10/UCPD1_DBCC2": "42",
  "PA9/PA11": "43",
  "PA10/PA12": "44",
  "PA13": "45",
  "PA14": "46",
  "PA15": "47",
  "PC8": "48",
  "PC9": "49",
  "PD0": "50",
  "PD1": "51",
  "PD2": "52",
  "PD3": "53",
  "PD4": "54",
  "PD5": "55",
  "PD6": "56",
  "PB3": "57",
  "PB4": "58",
  "PB5": "59",
  "PB6": "60",
  "PB7": "61",
  "PB8": "62",
  "PB9": "63",
  "PC10": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_8: "power_in", VSS_9: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", VSS_40: "passive", VDD_41: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PC10: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1RBTxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 58 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1RCIxN`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1rc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32G0B1RCIxN extends Component.withPins({
  "PC11": "A1",
  "PC10": "A2",
  "PB7": "A3",
  "PB6": "A4",
  "PD6": "A5",
  "PD2": "A6",
  "PD0": "A7",
  "PC8": "A8",
  "PC15": "B1",
  "PC12": "B2",
  "PB8": "B3",
  "PB3": "B4",
  "PD5": "B5",
  "PD1": "B6",
  "PC9": "B7",
  "PA10/PA12": "B8",
  "PC14": "C1",
  "PC13": "C2",
  "PB9": "C3",
  "PB4": "C4",
  "PD4": "C5",
  "PA15": "C6",
  "PA14": "C7",
  "PA9/PA11": "C8",
  "VDD_D1": "D1",
  "VREF+": "D2",
  "VBAT": "D3",
  "PB5": "D4",
  "PD3": "D5",
  "PA10/UCPD1_DBCC2": "D6",
  "PA13": "D7",
  "VDD_D8": "D8",
  "VSS_E1": "E1",
  "PF2": "E2",
  "PC0": "E3",
  "PA7": "E4",
  "PC7": "E5",
  "PA9/UCPD1_DBCC1": "E6",
  "PC6": "E7",
  "VSS_E8": "E8",
  "PF0": "F1",
  "PC1": "F2",
  "PA3": "F3",
  "PA6": "F4",
  "PB0": "F5",
  "PB14": "F6",
  "PB15": "F7",
  "PA8": "F8",
  "PF1": "G1",
  "PC2": "G2",
  "PA2": "G3",
  "PA5": "G4",
  "PB1": "G5",
  "PB10": "G6",
  "PB12": "G7",
  "PB13": "G8",
  "PC3": "H1",
  "PA0": "H2",
  "PA1": "H3",
  "PA4": "H4",
  "PC4": "H5",
  "PC5": "H6",
  "PB2": "H7",
  "PB11": "H8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC10: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC8: "bidirectional", PC15: "bidirectional", PC12: "bidirectional", PB8: "bidirectional", PB3: "bidirectional", PD5: "bidirectional", PD1: "bidirectional", PC9: "bidirectional", "PA10/PA12": "bidirectional", PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PD4: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", "PA9/PA11": "bidirectional", VDD_D1: "power_in", "VREF+": "input", VBAT: "power_in", PB5: "bidirectional", PD3: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", PA13: "bidirectional", VDD_D8: "power_in", VSS_E1: "power_in", PF2: "bidirectional", PC0: "bidirectional", PA7: "bidirectional", PC7: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", VSS_E8: "passive", PF0: "bidirectional", PC1: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB0: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PF1: "bidirectional", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB1: "bidirectional", PB10: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PB11: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1RCIxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 60 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1RCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1rc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32G0B1RCTx extends Component.withPins({
  "PC11": "1",
  "PC12": "2",
  "PC13": "3",
  "PC14": "4",
  "PC15": "5",
  "VBAT": "6",
  "VREF+": "7",
  "VDD": "8",
  "VSS": "9",
  "PF0": "10",
  "PF1": "11",
  "PF2": "12",
  "PC0": "13",
  "PC1": "14",
  "PC2": "15",
  "PC3": "16",
  "PA0": "17",
  "PA1": "18",
  "PA2": "19",
  "PA3": "20",
  "PA4": "21",
  "PA5": "22",
  "PA6": "23",
  "PA7": "24",
  "PC4": "25",
  "PC5": "26",
  "PB0": "27",
  "PB1": "28",
  "PB2": "29",
  "PB10": "30",
  "PB11": "31",
  "PB12": "32",
  "PB13": "33",
  "PB14": "34",
  "PB15": "35",
  "PA8": "36",
  "PA9/UCPD1_DBCC1": "37",
  "PC6": "38",
  "PC7": "39",
  "PD8": "40",
  "PD9": "41",
  "PA10/UCPD1_DBCC2": "42",
  "PA9/PA11": "43",
  "PA10/PA12": "44",
  "PA13": "45",
  "PA14": "46",
  "PA15": "47",
  "PC8": "48",
  "PC9": "49",
  "PD0": "50",
  "PD1": "51",
  "PD2": "52",
  "PD3": "53",
  "PD4": "54",
  "PD5": "55",
  "PD6": "56",
  "PB3": "57",
  "PB4": "58",
  "PB5": "59",
  "PB6": "60",
  "PB7": "61",
  "PB8": "62",
  "PB9": "63",
  "PC10": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PC10: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1RCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 58 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1RCTxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1rc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32G0B1RCTxN extends Component.withPins({
  "PC11": "1",
  "PC12": "2",
  "PC13": "3",
  "PC14": "4",
  "PC15": "5",
  "VBAT": "6",
  "VREF+": "7",
  "VDD_8": "8",
  "VSS_9": "9",
  "PF0": "10",
  "PF1": "11",
  "PF2": "12",
  "PC0": "13",
  "PC1": "14",
  "PC2": "15",
  "PC3": "16",
  "PA0": "17",
  "PA1": "18",
  "PA2": "19",
  "PA3": "20",
  "PA4": "21",
  "PA5": "22",
  "PA6": "23",
  "PA7": "24",
  "PC4": "25",
  "PC5": "26",
  "PB0": "27",
  "PB1": "28",
  "PB2": "29",
  "PB10": "30",
  "PB11": "31",
  "PB12": "32",
  "PB13": "33",
  "PB14": "34",
  "PB15": "35",
  "PA8": "36",
  "PA9/UCPD1_DBCC1": "37",
  "PC6": "38",
  "PC7": "39",
  "VSS_40": "40",
  "VDD_41": "41",
  "PA10/UCPD1_DBCC2": "42",
  "PA9/PA11": "43",
  "PA10/PA12": "44",
  "PA13": "45",
  "PA14": "46",
  "PA15": "47",
  "PC8": "48",
  "PC9": "49",
  "PD0": "50",
  "PD1": "51",
  "PD2": "52",
  "PD3": "53",
  "PD4": "54",
  "PD5": "55",
  "PD6": "56",
  "PB3": "57",
  "PB4": "58",
  "PB5": "59",
  "PB6": "60",
  "PB7": "61",
  "PB8": "62",
  "PB9": "63",
  "PC10": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_8: "power_in", VSS_9: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", VSS_40: "passive", VDD_41: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PC10: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1RCTxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 58 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1REIxN`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1re.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32G0B1REIxN extends Component.withPins({
  "PC11": "A1",
  "PC10": "A2",
  "PB7": "A3",
  "PB6": "A4",
  "PD6": "A5",
  "PD2": "A6",
  "PD0": "A7",
  "PC8": "A8",
  "PC15": "B1",
  "PC12": "B2",
  "PB8": "B3",
  "PB3": "B4",
  "PD5": "B5",
  "PD1": "B6",
  "PC9": "B7",
  "PA10/PA12": "B8",
  "PC14": "C1",
  "PC13": "C2",
  "PB9": "C3",
  "PB4": "C4",
  "PD4": "C5",
  "PA15": "C6",
  "PA14": "C7",
  "PA9/PA11": "C8",
  "VDD_D1": "D1",
  "VREF+": "D2",
  "VBAT": "D3",
  "PB5": "D4",
  "PD3": "D5",
  "PA10/UCPD1_DBCC2": "D6",
  "PA13": "D7",
  "VDD_D8": "D8",
  "VSS_E1": "E1",
  "PF2": "E2",
  "PC0": "E3",
  "PA7": "E4",
  "PC7": "E5",
  "PA9/UCPD1_DBCC1": "E6",
  "PC6": "E7",
  "VSS_E8": "E8",
  "PF0": "F1",
  "PC1": "F2",
  "PA3": "F3",
  "PA6": "F4",
  "PB0": "F5",
  "PB14": "F6",
  "PB15": "F7",
  "PA8": "F8",
  "PF1": "G1",
  "PC2": "G2",
  "PA2": "G3",
  "PA5": "G4",
  "PB1": "G5",
  "PB10": "G6",
  "PB12": "G7",
  "PB13": "G8",
  "PC3": "H1",
  "PA0": "H2",
  "PA1": "H3",
  "PA4": "H4",
  "PC4": "H5",
  "PC5": "H6",
  "PB2": "H7",
  "PB11": "H8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC10: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC8: "bidirectional", PC15: "bidirectional", PC12: "bidirectional", PB8: "bidirectional", PB3: "bidirectional", PD5: "bidirectional", PD1: "bidirectional", PC9: "bidirectional", "PA10/PA12": "bidirectional", PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PD4: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", "PA9/PA11": "bidirectional", VDD_D1: "power_in", "VREF+": "input", VBAT: "power_in", PB5: "bidirectional", PD3: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", PA13: "bidirectional", VDD_D8: "power_in", VSS_E1: "power_in", PF2: "bidirectional", PC0: "bidirectional", PA7: "bidirectional", PC7: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", VSS_E8: "passive", PF0: "bidirectional", PC1: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB0: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PF1: "bidirectional", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB1: "bidirectional", PB10: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PB11: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1REIxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 60 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1RETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1re.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32G0B1RETx extends Component.withPins({
  "PC11": "1",
  "PC12": "2",
  "PC13": "3",
  "PC14": "4",
  "PC15": "5",
  "VBAT": "6",
  "VREF+": "7",
  "VDD": "8",
  "VSS": "9",
  "PF0": "10",
  "PF1": "11",
  "PF2": "12",
  "PC0": "13",
  "PC1": "14",
  "PC2": "15",
  "PC3": "16",
  "PA0": "17",
  "PA1": "18",
  "PA2": "19",
  "PA3": "20",
  "PA4": "21",
  "PA5": "22",
  "PA6": "23",
  "PA7": "24",
  "PC4": "25",
  "PC5": "26",
  "PB0": "27",
  "PB1": "28",
  "PB2": "29",
  "PB10": "30",
  "PB11": "31",
  "PB12": "32",
  "PB13": "33",
  "PB14": "34",
  "PB15": "35",
  "PA8": "36",
  "PA9/UCPD1_DBCC1": "37",
  "PC6": "38",
  "PC7": "39",
  "PD8": "40",
  "PD9": "41",
  "PA10/UCPD1_DBCC2": "42",
  "PA9/PA11": "43",
  "PA10/PA12": "44",
  "PA13": "45",
  "PA14": "46",
  "PA15": "47",
  "PC8": "48",
  "PC9": "49",
  "PD0": "50",
  "PD1": "51",
  "PD2": "52",
  "PD3": "53",
  "PD4": "54",
  "PD5": "55",
  "PD6": "56",
  "PB3": "57",
  "PB4": "58",
  "PB5": "59",
  "PB6": "60",
  "PB7": "61",
  "PB8": "62",
  "PB9": "63",
  "PC10": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PC10: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1RETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 58 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1RETxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1re.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32G0B1RETxN extends Component.withPins({
  "PC11": "1",
  "PC12": "2",
  "PC13": "3",
  "PC14": "4",
  "PC15": "5",
  "VBAT": "6",
  "VREF+": "7",
  "VDD_8": "8",
  "VSS_9": "9",
  "PF0": "10",
  "PF1": "11",
  "PF2": "12",
  "PC0": "13",
  "PC1": "14",
  "PC2": "15",
  "PC3": "16",
  "PA0": "17",
  "PA1": "18",
  "PA2": "19",
  "PA3": "20",
  "PA4": "21",
  "PA5": "22",
  "PA6": "23",
  "PA7": "24",
  "PC4": "25",
  "PC5": "26",
  "PB0": "27",
  "PB1": "28",
  "PB2": "29",
  "PB10": "30",
  "PB11": "31",
  "PB12": "32",
  "PB13": "33",
  "PB14": "34",
  "PB15": "35",
  "PA8": "36",
  "PA9/UCPD1_DBCC1": "37",
  "PC6": "38",
  "PC7": "39",
  "VSS_40": "40",
  "VDD_41": "41",
  "PA10/UCPD1_DBCC2": "42",
  "PA9/PA11": "43",
  "PA10/PA12": "44",
  "PA13": "45",
  "PA14": "46",
  "PA15": "47",
  "PC8": "48",
  "PC9": "49",
  "PD0": "50",
  "PD1": "51",
  "PD2": "52",
  "PD3": "53",
  "PD4": "54",
  "PD5": "55",
  "PD6": "56",
  "PB3": "57",
  "PB4": "58",
  "PB5": "59",
  "PB6": "60",
  "PB7": "61",
  "PB8": "62",
  "PB9": "63",
  "PC10": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_8: "power_in", VSS_9: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", VSS_40: "passive", VDD_41: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PC10: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1RETxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 94 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1V_B-C-E_Ix`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1vb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32G0B1V_B_C_E_Ix extends Component.withPins({
  "PB8": "A1",
  "PE3": "A2",
  "PE2": "A3",
  "PE0": "A4",
  "PB3": "A5",
  "PF13": "A6",
  "PF11": "A7",
  "PF9": "A8",
  "PD6": "A9",
  "PD5": "A10",
  "PD2": "A11",
  "PC9": "A12",
  "PC11": "B1",
  "PC10": "B2",
  "PB7": "B3",
  "PE1": "B4",
  "PB4": "B5",
  "PF12": "B6",
  "PF10": "B7",
  "PD7": "B8",
  "PD4": "B9",
  "PD0": "B10",
  "PA15": "B11",
  "PA14": "B12",
  "PE6": "C1",
  "PE4": "C2",
  "PB9": "C3",
  "PB6": "C4",
  "PB5": "C5",
  "PD3": "C8",
  "PD1": "C9",
  "PC8": "C10",
  "PA13": "C11",
  "PA10/PA12": "C12",
  "PC14": "D1",
  "PC12": "D2",
  "PE5": "D3",
  "PF8": "D10",
  "PD15": "D11",
  "PA9/PA11": "D12",
  "PC15": "E1",
  "VBAT": "E2",
  "PC13": "E3",
  "PA10/UCPD1_DBCC2": "E10",
  "PD14": "E11",
  "PD13": "E12",
  "VDD_F1": "F1",
  "VREF+": "F2",
  "PD12": "F11",
  "VDD_F12": "F12",
  "VSS_G1": "G1",
  "PF2": "G2",
  "PD11": "G11",
  "VSS_G12": "G12",
  "PF0": "H1",
  "PF4": "H2",
  "PF3": "H3",
  "PA9/UCPD1_DBCC1": "H10",
  "PD9": "H11",
  "PD10": "H12",
  "PF1": "J1",
  "PF5": "J2",
  "PC1": "J3",
  "PB15": "J10",
  "PC6": "J11",
  "PD8": "J12",
  "PC0": "K1",
  "PC2": "K2",
  "PA0": "K3",
  "PA3": "K4",
  "PA7": "K5",
  "PE9": "K8",
  "PE14": "K9",
  "PB12": "K10",
  "PB14": "K11",
  "PC7": "K12",
  "PC3": "L1",
  "PA1": "L2",
  "PA4": "L3",
  "PC4": "L4",
  "PB0": "L5",
  "PB2": "L6",
  "PF7": "L7",
  "PE10": "L8",
  "PE12": "L9",
  "PE15": "L10",
  "PB11": "L11",
  "PA8": "L12",
  "PA2": "M1",
  "PA5": "M2",
  "PA6": "M3",
  "PC5": "M4",
  "PB1": "M5",
  "PF6": "M6",
  "PE7": "M7",
  "PE8": "M8",
  "PE11": "M9",
  "PE13": "M10",
  "PB10": "M11",
  "PB13": "M12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB8: "bidirectional", PE3: "bidirectional", PE2: "bidirectional", PE0: "bidirectional", PB3: "bidirectional", PF13: "bidirectional", PF11: "bidirectional", PF9: "bidirectional", PD6: "bidirectional", PD5: "bidirectional", PD2: "bidirectional", PC9: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PB7: "bidirectional", PE1: "bidirectional", PB4: "bidirectional", PF12: "bidirectional", PF10: "bidirectional", PD7: "bidirectional", PD4: "bidirectional", PD0: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PE6: "bidirectional", PE4: "bidirectional", PB9: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC8: "bidirectional", PA13: "bidirectional", "PA10/PA12": "bidirectional", PC14: "bidirectional", PC12: "bidirectional", PE5: "bidirectional", PF8: "bidirectional", PD15: "bidirectional", "PA9/PA11": "bidirectional", PC15: "bidirectional", VBAT: "power_in", PC13: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", PD14: "bidirectional", PD13: "bidirectional", VDD_F1: "power_in", "VREF+": "input", PD12: "bidirectional", VDD_F12: "power_in", VSS_G1: "power_in", PF2: "bidirectional", PD11: "bidirectional", VSS_G12: "passive", PF0: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PF1: "bidirectional", PF5: "bidirectional", PC1: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PD8: "bidirectional", PC0: "bidirectional", PC2: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA7: "bidirectional", PE9: "bidirectional", PE14: "bidirectional", PB12: "bidirectional", PB14: "bidirectional", PC7: "bidirectional", PC3: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PC4: "bidirectional", PB0: "bidirectional", PB2: "bidirectional", PF7: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PE15: "bidirectional", PB11: "bidirectional", PA8: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB1: "bidirectional", PF6: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1V_B-C-E_Ix";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 94 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1VBIx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1vb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32G0B1VBIx extends Component.withPins({
  "PB8": "A1",
  "PE3": "A2",
  "PE2": "A3",
  "PE0": "A4",
  "PB3": "A5",
  "PF13": "A6",
  "PF11": "A7",
  "PF9": "A8",
  "PD6": "A9",
  "PD5": "A10",
  "PD2": "A11",
  "PC9": "A12",
  "PC11": "B1",
  "PC10": "B2",
  "PB7": "B3",
  "PE1": "B4",
  "PB4": "B5",
  "PF12": "B6",
  "PF10": "B7",
  "PD7": "B8",
  "PD4": "B9",
  "PD0": "B10",
  "PA15": "B11",
  "PA14": "B12",
  "PE6": "C1",
  "PE4": "C2",
  "PB9": "C3",
  "PB6": "C4",
  "PB5": "C5",
  "PD3": "C8",
  "PD1": "C9",
  "PC8": "C10",
  "PA13": "C11",
  "PA10/PA12": "C12",
  "PC14": "D1",
  "PC12": "D2",
  "PE5": "D3",
  "PF8": "D10",
  "PD15": "D11",
  "PA9/PA11": "D12",
  "PC15": "E1",
  "VBAT": "E2",
  "PC13": "E3",
  "PA10/UCPD1_DBCC2": "E10",
  "PD14": "E11",
  "PD13": "E12",
  "VDD_F1": "F1",
  "VREF+": "F2",
  "PD12": "F11",
  "VDD_F12": "F12",
  "VSS_G1": "G1",
  "PF2": "G2",
  "PD11": "G11",
  "VSS_G12": "G12",
  "PF0": "H1",
  "PF4": "H2",
  "PF3": "H3",
  "PA9/UCPD1_DBCC1": "H10",
  "PD9": "H11",
  "PD10": "H12",
  "PF1": "J1",
  "PF5": "J2",
  "PC1": "J3",
  "PB15": "J10",
  "PC6": "J11",
  "PD8": "J12",
  "PC0": "K1",
  "PC2": "K2",
  "PA0": "K3",
  "PA3": "K4",
  "PA7": "K5",
  "PE9": "K8",
  "PE14": "K9",
  "PB12": "K10",
  "PB14": "K11",
  "PC7": "K12",
  "PC3": "L1",
  "PA1": "L2",
  "PA4": "L3",
  "PC4": "L4",
  "PB0": "L5",
  "PB2": "L6",
  "PF7": "L7",
  "PE10": "L8",
  "PE12": "L9",
  "PE15": "L10",
  "PB11": "L11",
  "PA8": "L12",
  "PA2": "M1",
  "PA5": "M2",
  "PA6": "M3",
  "PC5": "M4",
  "PB1": "M5",
  "PF6": "M6",
  "PE7": "M7",
  "PE8": "M8",
  "PE11": "M9",
  "PE13": "M10",
  "PB10": "M11",
  "PB13": "M12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB8: "bidirectional", PE3: "bidirectional", PE2: "bidirectional", PE0: "bidirectional", PB3: "bidirectional", PF13: "bidirectional", PF11: "bidirectional", PF9: "bidirectional", PD6: "bidirectional", PD5: "bidirectional", PD2: "bidirectional", PC9: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PB7: "bidirectional", PE1: "bidirectional", PB4: "bidirectional", PF12: "bidirectional", PF10: "bidirectional", PD7: "bidirectional", PD4: "bidirectional", PD0: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PE6: "bidirectional", PE4: "bidirectional", PB9: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC8: "bidirectional", PA13: "bidirectional", "PA10/PA12": "bidirectional", PC14: "bidirectional", PC12: "bidirectional", PE5: "bidirectional", PF8: "bidirectional", PD15: "bidirectional", "PA9/PA11": "bidirectional", PC15: "bidirectional", VBAT: "power_in", PC13: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", PD14: "bidirectional", PD13: "bidirectional", VDD_F1: "power_in", "VREF+": "input", PD12: "bidirectional", VDD_F12: "power_in", VSS_G1: "power_in", PF2: "bidirectional", PD11: "bidirectional", VSS_G12: "passive", PF0: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PF1: "bidirectional", PF5: "bidirectional", PC1: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PD8: "bidirectional", PC0: "bidirectional", PC2: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA7: "bidirectional", PE9: "bidirectional", PE14: "bidirectional", PB12: "bidirectional", PB14: "bidirectional", PC7: "bidirectional", PC3: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PC4: "bidirectional", PB0: "bidirectional", PB2: "bidirectional", PF7: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PE15: "bidirectional", PB11: "bidirectional", PA8: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB1: "bidirectional", PF6: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1VBIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 94 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1V_B-C-E_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1vb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32G0B1V_B_C_E_Tx extends Component.withPins({
  "PB9": "1",
  "PC10": "2",
  "PC11": "3",
  "PE4": "4",
  "PE5": "5",
  "PE6": "6",
  "PC12": "7",
  "PC13": "8",
  "PC14": "9",
  "PC15": "10",
  "VBAT": "11",
  "VREF+": "12",
  "VDD_13": "13",
  "VSS_14": "14",
  "PF0": "15",
  "PF1": "16",
  "PF2": "17",
  "PF3": "18",
  "PF4": "19",
  "PF5": "20",
  "PC0": "21",
  "PC1": "22",
  "PC2": "23",
  "PC3": "24",
  "PA0": "25",
  "PA1": "26",
  "PA2": "27",
  "PA3": "28",
  "PA4": "29",
  "PA5": "30",
  "PA6": "31",
  "PA7": "32",
  "PC4": "33",
  "PC5": "34",
  "PB0": "35",
  "PB1": "36",
  "PB2": "37",
  "PF6": "38",
  "PF7": "39",
  "PE7": "40",
  "PE8": "41",
  "PE9": "42",
  "PE10": "43",
  "PE11": "44",
  "PE12": "45",
  "PE13": "46",
  "PE14": "47",
  "PE15": "48",
  "PB10": "49",
  "PB11": "50",
  "PB12": "51",
  "PB13": "52",
  "PB14": "53",
  "PB15": "54",
  "PA8": "55",
  "PA9/UCPD1_DBCC1": "56",
  "PC6": "57",
  "PC7": "58",
  "PD8": "59",
  "PD9": "60",
  "PD10": "61",
  "PD11": "62",
  "VSS_63": "63",
  "VDD_64": "64",
  "PD12": "65",
  "PD13": "66",
  "PD14": "67",
  "PD15": "68",
  "PA10/UCPD1_DBCC2": "69",
  "PA9/PA11": "70",
  "PA10/PA12": "71",
  "PF8": "72",
  "PA13": "73",
  "PA14": "74",
  "PA15": "75",
  "PC8": "76",
  "PC9": "77",
  "PD0": "78",
  "PD1": "79",
  "PD2": "80",
  "PD3": "81",
  "PD4": "82",
  "PD5": "83",
  "PD6": "84",
  "PD7": "85",
  "PF9": "86",
  "PF10": "87",
  "PF11": "88",
  "PF12": "89",
  "PF13": "90",
  "PB3": "91",
  "PB4": "92",
  "PB5": "93",
  "PE0": "94",
  "PE1": "95",
  "PE2": "96",
  "PE3": "97",
  "PB6": "98",
  "PB7": "99",
  "PB8": "100",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_13: "power_in", VSS_14: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", VSS_63: "passive", VDD_64: "power_in", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PF8: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF11: "bidirectional", PF12: "bidirectional", PF13: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1V_B-C-E_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 94 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1VBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1vb.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32G0B1VBTx extends Component.withPins({
  "PB9": "1",
  "PC10": "2",
  "PC11": "3",
  "PE4": "4",
  "PE5": "5",
  "PE6": "6",
  "PC12": "7",
  "PC13": "8",
  "PC14": "9",
  "PC15": "10",
  "VBAT": "11",
  "VREF+": "12",
  "VDD_13": "13",
  "VSS_14": "14",
  "PF0": "15",
  "PF1": "16",
  "PF2": "17",
  "PF3": "18",
  "PF4": "19",
  "PF5": "20",
  "PC0": "21",
  "PC1": "22",
  "PC2": "23",
  "PC3": "24",
  "PA0": "25",
  "PA1": "26",
  "PA2": "27",
  "PA3": "28",
  "PA4": "29",
  "PA5": "30",
  "PA6": "31",
  "PA7": "32",
  "PC4": "33",
  "PC5": "34",
  "PB0": "35",
  "PB1": "36",
  "PB2": "37",
  "PF6": "38",
  "PF7": "39",
  "PE7": "40",
  "PE8": "41",
  "PE9": "42",
  "PE10": "43",
  "PE11": "44",
  "PE12": "45",
  "PE13": "46",
  "PE14": "47",
  "PE15": "48",
  "PB10": "49",
  "PB11": "50",
  "PB12": "51",
  "PB13": "52",
  "PB14": "53",
  "PB15": "54",
  "PA8": "55",
  "PA9/UCPD1_DBCC1": "56",
  "PC6": "57",
  "PC7": "58",
  "PD8": "59",
  "PD9": "60",
  "PD10": "61",
  "PD11": "62",
  "VSS_63": "63",
  "VDD_64": "64",
  "PD12": "65",
  "PD13": "66",
  "PD14": "67",
  "PD15": "68",
  "PA10/UCPD1_DBCC2": "69",
  "PA9/PA11": "70",
  "PA10/PA12": "71",
  "PF8": "72",
  "PA13": "73",
  "PA14": "74",
  "PA15": "75",
  "PC8": "76",
  "PC9": "77",
  "PD0": "78",
  "PD1": "79",
  "PD2": "80",
  "PD3": "81",
  "PD4": "82",
  "PD5": "83",
  "PD6": "84",
  "PD7": "85",
  "PF9": "86",
  "PF10": "87",
  "PF11": "88",
  "PF12": "89",
  "PF13": "90",
  "PB3": "91",
  "PB4": "92",
  "PB5": "93",
  "PE0": "94",
  "PE1": "95",
  "PE2": "96",
  "PE3": "97",
  "PB6": "98",
  "PB7": "99",
  "PB8": "100",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_13: "power_in", VSS_14: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", VSS_63: "passive", VDD_64: "power_in", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PF8: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF11: "bidirectional", PF12: "bidirectional", PF13: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1VBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 94 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1VCIx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1vc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32G0B1VCIx extends Component.withPins({
  "PB8": "A1",
  "PE3": "A2",
  "PE2": "A3",
  "PE0": "A4",
  "PB3": "A5",
  "PF13": "A6",
  "PF11": "A7",
  "PF9": "A8",
  "PD6": "A9",
  "PD5": "A10",
  "PD2": "A11",
  "PC9": "A12",
  "PC11": "B1",
  "PC10": "B2",
  "PB7": "B3",
  "PE1": "B4",
  "PB4": "B5",
  "PF12": "B6",
  "PF10": "B7",
  "PD7": "B8",
  "PD4": "B9",
  "PD0": "B10",
  "PA15": "B11",
  "PA14": "B12",
  "PE6": "C1",
  "PE4": "C2",
  "PB9": "C3",
  "PB6": "C4",
  "PB5": "C5",
  "PD3": "C8",
  "PD1": "C9",
  "PC8": "C10",
  "PA13": "C11",
  "PA10/PA12": "C12",
  "PC14": "D1",
  "PC12": "D2",
  "PE5": "D3",
  "PF8": "D10",
  "PD15": "D11",
  "PA9/PA11": "D12",
  "PC15": "E1",
  "VBAT": "E2",
  "PC13": "E3",
  "PA10/UCPD1_DBCC2": "E10",
  "PD14": "E11",
  "PD13": "E12",
  "VDD_F1": "F1",
  "VREF+": "F2",
  "PD12": "F11",
  "VDD_F12": "F12",
  "VSS_G1": "G1",
  "PF2": "G2",
  "PD11": "G11",
  "VSS_G12": "G12",
  "PF0": "H1",
  "PF4": "H2",
  "PF3": "H3",
  "PA9/UCPD1_DBCC1": "H10",
  "PD9": "H11",
  "PD10": "H12",
  "PF1": "J1",
  "PF5": "J2",
  "PC1": "J3",
  "PB15": "J10",
  "PC6": "J11",
  "PD8": "J12",
  "PC0": "K1",
  "PC2": "K2",
  "PA0": "K3",
  "PA3": "K4",
  "PA7": "K5",
  "PE9": "K8",
  "PE14": "K9",
  "PB12": "K10",
  "PB14": "K11",
  "PC7": "K12",
  "PC3": "L1",
  "PA1": "L2",
  "PA4": "L3",
  "PC4": "L4",
  "PB0": "L5",
  "PB2": "L6",
  "PF7": "L7",
  "PE10": "L8",
  "PE12": "L9",
  "PE15": "L10",
  "PB11": "L11",
  "PA8": "L12",
  "PA2": "M1",
  "PA5": "M2",
  "PA6": "M3",
  "PC5": "M4",
  "PB1": "M5",
  "PF6": "M6",
  "PE7": "M7",
  "PE8": "M8",
  "PE11": "M9",
  "PE13": "M10",
  "PB10": "M11",
  "PB13": "M12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB8: "bidirectional", PE3: "bidirectional", PE2: "bidirectional", PE0: "bidirectional", PB3: "bidirectional", PF13: "bidirectional", PF11: "bidirectional", PF9: "bidirectional", PD6: "bidirectional", PD5: "bidirectional", PD2: "bidirectional", PC9: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PB7: "bidirectional", PE1: "bidirectional", PB4: "bidirectional", PF12: "bidirectional", PF10: "bidirectional", PD7: "bidirectional", PD4: "bidirectional", PD0: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PE6: "bidirectional", PE4: "bidirectional", PB9: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC8: "bidirectional", PA13: "bidirectional", "PA10/PA12": "bidirectional", PC14: "bidirectional", PC12: "bidirectional", PE5: "bidirectional", PF8: "bidirectional", PD15: "bidirectional", "PA9/PA11": "bidirectional", PC15: "bidirectional", VBAT: "power_in", PC13: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", PD14: "bidirectional", PD13: "bidirectional", VDD_F1: "power_in", "VREF+": "input", PD12: "bidirectional", VDD_F12: "power_in", VSS_G1: "power_in", PF2: "bidirectional", PD11: "bidirectional", VSS_G12: "passive", PF0: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PF1: "bidirectional", PF5: "bidirectional", PC1: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PD8: "bidirectional", PC0: "bidirectional", PC2: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA7: "bidirectional", PE9: "bidirectional", PE14: "bidirectional", PB12: "bidirectional", PB14: "bidirectional", PC7: "bidirectional", PC3: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PC4: "bidirectional", PB0: "bidirectional", PB2: "bidirectional", PF7: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PE15: "bidirectional", PB11: "bidirectional", PA8: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB1: "bidirectional", PF6: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1VCIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 94 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1VCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1vc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32G0B1VCTx extends Component.withPins({
  "PB9": "1",
  "PC10": "2",
  "PC11": "3",
  "PE4": "4",
  "PE5": "5",
  "PE6": "6",
  "PC12": "7",
  "PC13": "8",
  "PC14": "9",
  "PC15": "10",
  "VBAT": "11",
  "VREF+": "12",
  "VDD_13": "13",
  "VSS_14": "14",
  "PF0": "15",
  "PF1": "16",
  "PF2": "17",
  "PF3": "18",
  "PF4": "19",
  "PF5": "20",
  "PC0": "21",
  "PC1": "22",
  "PC2": "23",
  "PC3": "24",
  "PA0": "25",
  "PA1": "26",
  "PA2": "27",
  "PA3": "28",
  "PA4": "29",
  "PA5": "30",
  "PA6": "31",
  "PA7": "32",
  "PC4": "33",
  "PC5": "34",
  "PB0": "35",
  "PB1": "36",
  "PB2": "37",
  "PF6": "38",
  "PF7": "39",
  "PE7": "40",
  "PE8": "41",
  "PE9": "42",
  "PE10": "43",
  "PE11": "44",
  "PE12": "45",
  "PE13": "46",
  "PE14": "47",
  "PE15": "48",
  "PB10": "49",
  "PB11": "50",
  "PB12": "51",
  "PB13": "52",
  "PB14": "53",
  "PB15": "54",
  "PA8": "55",
  "PA9/UCPD1_DBCC1": "56",
  "PC6": "57",
  "PC7": "58",
  "PD8": "59",
  "PD9": "60",
  "PD10": "61",
  "PD11": "62",
  "VSS_63": "63",
  "VDD_64": "64",
  "PD12": "65",
  "PD13": "66",
  "PD14": "67",
  "PD15": "68",
  "PA10/UCPD1_DBCC2": "69",
  "PA9/PA11": "70",
  "PA10/PA12": "71",
  "PF8": "72",
  "PA13": "73",
  "PA14": "74",
  "PA15": "75",
  "PC8": "76",
  "PC9": "77",
  "PD0": "78",
  "PD1": "79",
  "PD2": "80",
  "PD3": "81",
  "PD4": "82",
  "PD5": "83",
  "PD6": "84",
  "PD7": "85",
  "PF9": "86",
  "PF10": "87",
  "PF11": "88",
  "PF12": "89",
  "PF13": "90",
  "PB3": "91",
  "PB4": "92",
  "PB5": "93",
  "PE0": "94",
  "PE1": "95",
  "PE2": "96",
  "PE3": "97",
  "PB6": "98",
  "PB7": "99",
  "PB8": "100",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_13: "power_in", VSS_14: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", VSS_63: "passive", VDD_64: "power_in", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PF8: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF11: "bidirectional", PF12: "bidirectional", PF13: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1VCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 94 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1VEIx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1ve.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32G0B1VEIx extends Component.withPins({
  "PB8": "A1",
  "PE3": "A2",
  "PE2": "A3",
  "PE0": "A4",
  "PB3": "A5",
  "PF13": "A6",
  "PF11": "A7",
  "PF9": "A8",
  "PD6": "A9",
  "PD5": "A10",
  "PD2": "A11",
  "PC9": "A12",
  "PC11": "B1",
  "PC10": "B2",
  "PB7": "B3",
  "PE1": "B4",
  "PB4": "B5",
  "PF12": "B6",
  "PF10": "B7",
  "PD7": "B8",
  "PD4": "B9",
  "PD0": "B10",
  "PA15": "B11",
  "PA14": "B12",
  "PE6": "C1",
  "PE4": "C2",
  "PB9": "C3",
  "PB6": "C4",
  "PB5": "C5",
  "PD3": "C8",
  "PD1": "C9",
  "PC8": "C10",
  "PA13": "C11",
  "PA10/PA12": "C12",
  "PC14": "D1",
  "PC12": "D2",
  "PE5": "D3",
  "PF8": "D10",
  "PD15": "D11",
  "PA9/PA11": "D12",
  "PC15": "E1",
  "VBAT": "E2",
  "PC13": "E3",
  "PA10/UCPD1_DBCC2": "E10",
  "PD14": "E11",
  "PD13": "E12",
  "VDD_F1": "F1",
  "VREF+": "F2",
  "PD12": "F11",
  "VDD_F12": "F12",
  "VSS_G1": "G1",
  "PF2": "G2",
  "PD11": "G11",
  "VSS_G12": "G12",
  "PF0": "H1",
  "PF4": "H2",
  "PF3": "H3",
  "PA9/UCPD1_DBCC1": "H10",
  "PD9": "H11",
  "PD10": "H12",
  "PF1": "J1",
  "PF5": "J2",
  "PC1": "J3",
  "PB15": "J10",
  "PC6": "J11",
  "PD8": "J12",
  "PC0": "K1",
  "PC2": "K2",
  "PA0": "K3",
  "PA3": "K4",
  "PA7": "K5",
  "PE9": "K8",
  "PE14": "K9",
  "PB12": "K10",
  "PB14": "K11",
  "PC7": "K12",
  "PC3": "L1",
  "PA1": "L2",
  "PA4": "L3",
  "PC4": "L4",
  "PB0": "L5",
  "PB2": "L6",
  "PF7": "L7",
  "PE10": "L8",
  "PE12": "L9",
  "PE15": "L10",
  "PB11": "L11",
  "PA8": "L12",
  "PA2": "M1",
  "PA5": "M2",
  "PA6": "M3",
  "PC5": "M4",
  "PB1": "M5",
  "PF6": "M6",
  "PE7": "M7",
  "PE8": "M8",
  "PE11": "M9",
  "PE13": "M10",
  "PB10": "M11",
  "PB13": "M12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB8: "bidirectional", PE3: "bidirectional", PE2: "bidirectional", PE0: "bidirectional", PB3: "bidirectional", PF13: "bidirectional", PF11: "bidirectional", PF9: "bidirectional", PD6: "bidirectional", PD5: "bidirectional", PD2: "bidirectional", PC9: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PB7: "bidirectional", PE1: "bidirectional", PB4: "bidirectional", PF12: "bidirectional", PF10: "bidirectional", PD7: "bidirectional", PD4: "bidirectional", PD0: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PE6: "bidirectional", PE4: "bidirectional", PB9: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC8: "bidirectional", PA13: "bidirectional", "PA10/PA12": "bidirectional", PC14: "bidirectional", PC12: "bidirectional", PE5: "bidirectional", PF8: "bidirectional", PD15: "bidirectional", "PA9/PA11": "bidirectional", PC15: "bidirectional", VBAT: "power_in", PC13: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", PD14: "bidirectional", PD13: "bidirectional", VDD_F1: "power_in", "VREF+": "input", PD12: "bidirectional", VDD_F12: "power_in", VSS_G1: "power_in", PF2: "bidirectional", PD11: "bidirectional", VSS_G12: "passive", PF0: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PF1: "bidirectional", PF5: "bidirectional", PC1: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PD8: "bidirectional", PC0: "bidirectional", PC2: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA7: "bidirectional", PE9: "bidirectional", PE14: "bidirectional", PB12: "bidirectional", PB14: "bidirectional", PC7: "bidirectional", PC3: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PC4: "bidirectional", PB0: "bidirectional", PB2: "bidirectional", PF7: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PE15: "bidirectional", PB11: "bidirectional", PA8: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB1: "bidirectional", PF6: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1VEIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 94 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0B1VETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0b1ve.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32G0B1VETx extends Component.withPins({
  "PB9": "1",
  "PC10": "2",
  "PC11": "3",
  "PE4": "4",
  "PE5": "5",
  "PE6": "6",
  "PC12": "7",
  "PC13": "8",
  "PC14": "9",
  "PC15": "10",
  "VBAT": "11",
  "VREF+": "12",
  "VDD_13": "13",
  "VSS_14": "14",
  "PF0": "15",
  "PF1": "16",
  "PF2": "17",
  "PF3": "18",
  "PF4": "19",
  "PF5": "20",
  "PC0": "21",
  "PC1": "22",
  "PC2": "23",
  "PC3": "24",
  "PA0": "25",
  "PA1": "26",
  "PA2": "27",
  "PA3": "28",
  "PA4": "29",
  "PA5": "30",
  "PA6": "31",
  "PA7": "32",
  "PC4": "33",
  "PC5": "34",
  "PB0": "35",
  "PB1": "36",
  "PB2": "37",
  "PF6": "38",
  "PF7": "39",
  "PE7": "40",
  "PE8": "41",
  "PE9": "42",
  "PE10": "43",
  "PE11": "44",
  "PE12": "45",
  "PE13": "46",
  "PE14": "47",
  "PE15": "48",
  "PB10": "49",
  "PB11": "50",
  "PB12": "51",
  "PB13": "52",
  "PB14": "53",
  "PB15": "54",
  "PA8": "55",
  "PA9/UCPD1_DBCC1": "56",
  "PC6": "57",
  "PC7": "58",
  "PD8": "59",
  "PD9": "60",
  "PD10": "61",
  "PD11": "62",
  "VSS_63": "63",
  "VDD_64": "64",
  "PD12": "65",
  "PD13": "66",
  "PD14": "67",
  "PD15": "68",
  "PA10/UCPD1_DBCC2": "69",
  "PA9/PA11": "70",
  "PA10/PA12": "71",
  "PF8": "72",
  "PA13": "73",
  "PA14": "74",
  "PA15": "75",
  "PC8": "76",
  "PC9": "77",
  "PD0": "78",
  "PD1": "79",
  "PD2": "80",
  "PD3": "81",
  "PD4": "82",
  "PD5": "83",
  "PD6": "84",
  "PD7": "85",
  "PF9": "86",
  "PF10": "87",
  "PF11": "88",
  "PF12": "89",
  "PF13": "90",
  "PB3": "91",
  "PB4": "92",
  "PB5": "93",
  "PE0": "94",
  "PE1": "95",
  "PE2": "96",
  "PE3": "97",
  "PB6": "98",
  "PB7": "99",
  "PB8": "100",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_13: "power_in", VSS_14: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", VSS_63: "passive", VDD_64: "power_in", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PF8: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF11: "bidirectional", PF12: "bidirectional", PF13: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0B1VETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1C_C-E_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1cc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G0C1C_C_E_Tx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1C_C-E_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1CCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1cc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G0C1CCTx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1CCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 42 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1C_C-E_TxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1cc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G0C1C_C_E_TxN extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD_6": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "VSS_30": "30",
  "VDD_31": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_6: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VSS_30: "passive", VDD_31: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1C_C-E_TxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 42 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1CCTxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1cc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G0C1CCTxN extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD_6": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "VSS_30": "30",
  "VDD_31": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_6: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VSS_30: "passive", VDD_31: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1CCTxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1C_C-E_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1cc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G0C1C_C_E_Ux extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1C_C-E_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1CCUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1cc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G0C1CCUx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1CCUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 42 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1C_C-E_UxN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1cc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G0C1C_C_E_UxN extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD_6": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "VSS_30": "30",
  "VDD_31": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_6: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VSS_30: "passive", VDD_31: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1C_C-E_UxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 42 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1CCUxN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1cc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G0C1CCUxN extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD_6": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "VSS_30": "30",
  "VDD_31": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_6: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VSS_30: "passive", VDD_31: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1CCUxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1CETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1ce.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G0C1CETx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1CETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 42 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1CETxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1ce.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32G0C1CETxN extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD_6": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "VSS_30": "30",
  "VDD_31": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_6: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VSS_30: "passive", VDD_31: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1CETxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 44 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1CEUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1ce.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G0C1CEUx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1CEUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 42 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1CEUxN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1ce.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32G0C1CEUxN extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "VBAT": "4",
  "VREF+": "5",
  "VDD_6": "6",
  "VSS_7": "7",
  "PF0": "8",
  "PF1": "9",
  "PF2": "10",
  "PA0": "11",
  "PA1": "12",
  "PA2": "13",
  "PA3": "14",
  "PA4": "15",
  "PA5": "16",
  "PA6": "17",
  "PA7": "18",
  "PB0": "19",
  "PB1": "20",
  "PB2": "21",
  "PB10": "22",
  "PB11": "23",
  "PB12": "24",
  "PB13": "25",
  "PB14": "26",
  "PB15": "27",
  "PA8": "28",
  "PA9/UCPD1_DBCC1": "29",
  "VSS_30": "30",
  "VDD_31": "31",
  "PA10/UCPD1_DBCC2": "32",
  "PA9/PA11": "33",
  "PA10/PA12": "34",
  "PA13": "35",
  "PA14": "36",
  "PA15": "37",
  "PD0": "38",
  "PD1": "39",
  "PD2": "40",
  "PD3": "41",
  "PB3": "42",
  "PB4": "43",
  "PB5": "44",
  "PB6": "45",
  "PB7": "46",
  "PB8": "47",
  "PB9": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_6: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VSS_30: "passive", VDD_31: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1CEUxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1K_C-E_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1kc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G0C1K_C_E_Tx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "PC6": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1K_C-E_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1KCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1kc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G0C1KCTx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "PC6": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1KCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 29 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1K_C-E_TxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1kc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G0C1K_C_E_TxN extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD_4": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB15": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "VDD_20": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD_4: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VDD_20: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1K_C-E_TxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 29 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1KCTxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1kc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G0C1KCTxN extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD_4": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB15": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "VDD_20": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD_4: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VDD_20: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1KCTxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1K_C-E_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1kc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G0C1K_C_E_Ux extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "PC6": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1K_C-E_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1KCUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1kc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G0C1KCUx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "PC6": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1KCUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 29 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1K_C-E_UxN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1kc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G0C1K_C_E_UxN extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD_4": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB15": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "VDD_20": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD_4: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VDD_20: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1K_C-E_UxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 29 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1KCUxN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1kc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G0C1KCUxN extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD_4": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB15": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "VDD_20": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD_4: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VDD_20: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1KCUxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1KETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1ke.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G0C1KETx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "PC6": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1KETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 29 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1KETxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1ke.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32G0C1KETxN extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD_4": "4",
  "VSS": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB15": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "VDD_20": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD_4: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VDD_20: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1KETxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1KEUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1ke.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G0C1KEUx extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB2": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "PC6": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PA15": "26",
  "PB3": "27",
  "PB4": "28",
  "PB5": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1KEUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 29 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1KEUxN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1ke.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32G0C1KEUxN extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "VDD_4": "4",
  "VSS_5": "5",
  "PF2": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "PA4": "11",
  "PA5": "12",
  "PA6": "13",
  "PA7": "14",
  "PB0": "15",
  "PB1": "16",
  "PB15": "17",
  "PA8": "18",
  "PA9/UCPD1_DBCC1": "19",
  "VDD_20": "20",
  "PA10/UCPD1_DBCC2": "21",
  "PA9/PA11": "22",
  "PA10/PA12": "23",
  "PA13": "24",
  "PA14": "25",
  "PD0": "26",
  "PD1": "27",
  "PD2": "28",
  "PD3": "29",
  "PB6": "30",
  "PB7": "31",
  "PB8": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD_4: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", VDD_20: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1KEUxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 74 GPIO, LQFP80
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1M_C-E_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*12x12mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1mc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-80_12x12mm_P0.5mm.
 */
export class STM32G0C1M_C_E_Tx extends Component.withPins({
  "PB9": "1",
  "PC10": "2",
  "PC11": "3",
  "PC12": "4",
  "PC13": "5",
  "PC14": "6",
  "PC15": "7",
  "VBAT": "8",
  "VREF+": "9",
  "VDD_10": "10",
  "VSS_11": "11",
  "PF0": "12",
  "PF1": "13",
  "PF2": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "PA0": "19",
  "PA1": "20",
  "PA2": "21",
  "PA3": "22",
  "PA4": "23",
  "PA5": "24",
  "PA6": "25",
  "PA7": "26",
  "PC4": "27",
  "PC5": "28",
  "PB0": "29",
  "PB1": "30",
  "PB2": "31",
  "PE7": "32",
  "PE8": "33",
  "PE9": "34",
  "PE10": "35",
  "PB10": "36",
  "PB11": "37",
  "PB12": "38",
  "PB13": "39",
  "PB14": "40",
  "PB15": "41",
  "PA8": "42",
  "PA9/UCPD1_DBCC1": "43",
  "PC6": "44",
  "PC7": "45",
  "PD8": "46",
  "PD9": "47",
  "PD10": "48",
  "PD11": "49",
  "VSS_50": "50",
  "VDD_51": "51",
  "PD12": "52",
  "PD13": "53",
  "PD14": "54",
  "PD15": "55",
  "PA10/UCPD1_DBCC2": "56",
  "PA9/PA11": "57",
  "PA10/PA12": "58",
  "PA13": "59",
  "PA14": "60",
  "PA15": "61",
  "PC8": "62",
  "PC9": "63",
  "PD0": "64",
  "PD1": "65",
  "PD2": "66",
  "PD3": "67",
  "PD4": "68",
  "PD5": "69",
  "PD6": "70",
  "PD7": "71",
  "PB3": "72",
  "PB4": "73",
  "PB5": "74",
  "PE0": "75",
  "PE1": "76",
  "PE3": "77",
  "PB6": "78",
  "PB7": "79",
  "PB8": "80",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_10: "power_in", VSS_11: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", VSS_50: "passive", VDD_51: "power_in", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", PE3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1M_C-E_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 74 GPIO, LQFP80
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1MCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*12x12mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1mc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-80_12x12mm_P0.5mm.
 */
export class STM32G0C1MCTx extends Component.withPins({
  "PB9": "1",
  "PC10": "2",
  "PC11": "3",
  "PC12": "4",
  "PC13": "5",
  "PC14": "6",
  "PC15": "7",
  "VBAT": "8",
  "VREF+": "9",
  "VDD_10": "10",
  "VSS_11": "11",
  "PF0": "12",
  "PF1": "13",
  "PF2": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "PA0": "19",
  "PA1": "20",
  "PA2": "21",
  "PA3": "22",
  "PA4": "23",
  "PA5": "24",
  "PA6": "25",
  "PA7": "26",
  "PC4": "27",
  "PC5": "28",
  "PB0": "29",
  "PB1": "30",
  "PB2": "31",
  "PE7": "32",
  "PE8": "33",
  "PE9": "34",
  "PE10": "35",
  "PB10": "36",
  "PB11": "37",
  "PB12": "38",
  "PB13": "39",
  "PB14": "40",
  "PB15": "41",
  "PA8": "42",
  "PA9/UCPD1_DBCC1": "43",
  "PC6": "44",
  "PC7": "45",
  "PD8": "46",
  "PD9": "47",
  "PD10": "48",
  "PD11": "49",
  "VSS_50": "50",
  "VDD_51": "51",
  "PD12": "52",
  "PD13": "53",
  "PD14": "54",
  "PD15": "55",
  "PA10/UCPD1_DBCC2": "56",
  "PA9/PA11": "57",
  "PA10/PA12": "58",
  "PA13": "59",
  "PA14": "60",
  "PA15": "61",
  "PC8": "62",
  "PC9": "63",
  "PD0": "64",
  "PD1": "65",
  "PD2": "66",
  "PD3": "67",
  "PD4": "68",
  "PD5": "69",
  "PD6": "70",
  "PD7": "71",
  "PB3": "72",
  "PB4": "73",
  "PB5": "74",
  "PE0": "75",
  "PE1": "76",
  "PE3": "77",
  "PB6": "78",
  "PB7": "79",
  "PB8": "80",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_10: "power_in", VSS_11: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", VSS_50: "passive", VDD_51: "power_in", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", PE3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1MCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 74 GPIO, LQFP80
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1METx`. Reference prefix: `U`.
 * Footprint filters: LQFP*12x12mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1me.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-80_12x12mm_P0.5mm.
 */
export class STM32G0C1METx extends Component.withPins({
  "PB9": "1",
  "PC10": "2",
  "PC11": "3",
  "PC12": "4",
  "PC13": "5",
  "PC14": "6",
  "PC15": "7",
  "VBAT": "8",
  "VREF+": "9",
  "VDD_10": "10",
  "VSS_11": "11",
  "PF0": "12",
  "PF1": "13",
  "PF2": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "PA0": "19",
  "PA1": "20",
  "PA2": "21",
  "PA3": "22",
  "PA4": "23",
  "PA5": "24",
  "PA6": "25",
  "PA7": "26",
  "PC4": "27",
  "PC5": "28",
  "PB0": "29",
  "PB1": "30",
  "PB2": "31",
  "PE7": "32",
  "PE8": "33",
  "PE9": "34",
  "PE10": "35",
  "PB10": "36",
  "PB11": "37",
  "PB12": "38",
  "PB13": "39",
  "PB14": "40",
  "PB15": "41",
  "PA8": "42",
  "PA9/UCPD1_DBCC1": "43",
  "PC6": "44",
  "PC7": "45",
  "PD8": "46",
  "PD9": "47",
  "PD10": "48",
  "PD11": "49",
  "VSS_50": "50",
  "VDD_51": "51",
  "PD12": "52",
  "PD13": "53",
  "PD14": "54",
  "PD15": "55",
  "PA10/UCPD1_DBCC2": "56",
  "PA9/PA11": "57",
  "PA10/PA12": "58",
  "PA13": "59",
  "PA14": "60",
  "PA15": "61",
  "PC8": "62",
  "PC9": "63",
  "PD0": "64",
  "PD1": "65",
  "PD2": "66",
  "PD3": "67",
  "PD4": "68",
  "PD5": "69",
  "PD6": "70",
  "PD7": "71",
  "PB3": "72",
  "PB4": "73",
  "PB5": "74",
  "PE0": "75",
  "PE1": "76",
  "PE3": "77",
  "PB6": "78",
  "PB7": "79",
  "PB8": "80",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_10: "power_in", VSS_11: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", VSS_50: "passive", VDD_51: "power_in", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", PE3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1METx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 46 GPIO, WLCSP52
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1NEYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*3.09x3.15mm*Layout13x8*P0.4mm*Stagger*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1ne.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_CSP:ST_WLCSP-52_3.09x3.15mm_Layout13x8_P0.4mm_Stagger.
 */
export class STM32G0C1NEYx extends Component.withPins({
  "PA15": "A2",
  "PD0": "A4",
  "PD3": "A6",
  "PB3": "A8",
  "PB5": "A10",
  "PB8": "A12",
  "PA10/PA12": "B1",
  "PA13": "B3",
  "PA14": "B5",
  "PD2": "B7",
  "PB4": "B9",
  "PC13": "B11",
  "PC14": "B13",
  "PA9/PA11": "C2",
  "PA10/UCPD1_DBCC2": "C4",
  "PD1": "C6",
  "PB6": "C8",
  "VBAT": "C10",
  "PC15": "C12",
  "VDD_D1": "D1",
  "PC7": "D3",
  "PC6": "D5",
  "PB7": "D7",
  "PB9": "D9",
  "VREF+": "D11",
  "VDD_D13": "D13",
  "VSS_E2": "E2",
  "PA9/UCPD1_DBCC1": "E4",
  "PB12": "E6",
  "PA2": "E8",
  "PA1": "E10",
  "VSS_E12": "E12",
  "PA8": "F1",
  "PB15": "F3",
  "PB11": "F5",
  "PA6": "F7",
  "PA5": "F9",
  "PF2": "F11",
  "PF0": "F13",
  "PB14": "G2",
  "PB2": "G4",
  "PC5": "G6",
  "PC4": "G8",
  "PA4": "G10",
  "PF1": "G12",
  "PB13": "H1",
  "PB10": "H3",
  "PB1": "H5",
  "PB0": "H7",
  "PA7": "H9",
  "PA3": "H11",
  "PA0": "H13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA15: "bidirectional", PD0: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB5: "bidirectional", PB8: "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PD2: "bidirectional", PB4: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", "PA9/PA11": "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", PD1: "bidirectional", PB6: "bidirectional", VBAT: "power_in", PC15: "bidirectional", VDD_D1: "power_in", PC7: "bidirectional", PC6: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", "VREF+": "input", VDD_D13: "power_in", VSS_E2: "power_in", "PA9/UCPD1_DBCC1": "bidirectional", PB12: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", VSS_E12: "passive", PA8: "bidirectional", PB15: "bidirectional", PB11: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PF2: "bidirectional", PF0: "bidirectional", PB14: "bidirectional", PB2: "bidirectional", PC5: "bidirectional", PC4: "bidirectional", PA4: "bidirectional", PF1: "bidirectional", PB13: "bidirectional", PB10: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PA7: "bidirectional", PA3: "bidirectional", PA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1NEYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 58 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1R_C-E_IxN`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1rc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32G0C1R_C_E_IxN extends Component.withPins({
  "PC11": "A1",
  "PC10": "A2",
  "PB7": "A3",
  "PB6": "A4",
  "PD6": "A5",
  "PD2": "A6",
  "PD0": "A7",
  "PC8": "A8",
  "PC15": "B1",
  "PC12": "B2",
  "PB8": "B3",
  "PB3": "B4",
  "PD5": "B5",
  "PD1": "B6",
  "PC9": "B7",
  "PA10/PA12": "B8",
  "PC14": "C1",
  "PC13": "C2",
  "PB9": "C3",
  "PB4": "C4",
  "PD4": "C5",
  "PA15": "C6",
  "PA14": "C7",
  "PA9/PA11": "C8",
  "VDD_D1": "D1",
  "VREF+": "D2",
  "VBAT": "D3",
  "PB5": "D4",
  "PD3": "D5",
  "PA10/UCPD1_DBCC2": "D6",
  "PA13": "D7",
  "VDD_D8": "D8",
  "VSS_E1": "E1",
  "PF2": "E2",
  "PC0": "E3",
  "PA7": "E4",
  "PC7": "E5",
  "PA9/UCPD1_DBCC1": "E6",
  "PC6": "E7",
  "VSS_E8": "E8",
  "PF0": "F1",
  "PC1": "F2",
  "PA3": "F3",
  "PA6": "F4",
  "PB0": "F5",
  "PB14": "F6",
  "PB15": "F7",
  "PA8": "F8",
  "PF1": "G1",
  "PC2": "G2",
  "PA2": "G3",
  "PA5": "G4",
  "PB1": "G5",
  "PB10": "G6",
  "PB12": "G7",
  "PB13": "G8",
  "PC3": "H1",
  "PA0": "H2",
  "PA1": "H3",
  "PA4": "H4",
  "PC4": "H5",
  "PC5": "H6",
  "PB2": "H7",
  "PB11": "H8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC10: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC8: "bidirectional", PC15: "bidirectional", PC12: "bidirectional", PB8: "bidirectional", PB3: "bidirectional", PD5: "bidirectional", PD1: "bidirectional", PC9: "bidirectional", "PA10/PA12": "bidirectional", PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PD4: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", "PA9/PA11": "bidirectional", VDD_D1: "power_in", "VREF+": "input", VBAT: "power_in", PB5: "bidirectional", PD3: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", PA13: "bidirectional", VDD_D8: "power_in", VSS_E1: "power_in", PF2: "bidirectional", PC0: "bidirectional", PA7: "bidirectional", PC7: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", VSS_E8: "passive", PF0: "bidirectional", PC1: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB0: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PF1: "bidirectional", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB1: "bidirectional", PB10: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PB11: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1R_C-E_IxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 58 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1RCIxN`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1rc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32G0C1RCIxN extends Component.withPins({
  "PC11": "A1",
  "PC10": "A2",
  "PB7": "A3",
  "PB6": "A4",
  "PD6": "A5",
  "PD2": "A6",
  "PD0": "A7",
  "PC8": "A8",
  "PC15": "B1",
  "PC12": "B2",
  "PB8": "B3",
  "PB3": "B4",
  "PD5": "B5",
  "PD1": "B6",
  "PC9": "B7",
  "PA10/PA12": "B8",
  "PC14": "C1",
  "PC13": "C2",
  "PB9": "C3",
  "PB4": "C4",
  "PD4": "C5",
  "PA15": "C6",
  "PA14": "C7",
  "PA9/PA11": "C8",
  "VDD_D1": "D1",
  "VREF+": "D2",
  "VBAT": "D3",
  "PB5": "D4",
  "PD3": "D5",
  "PA10/UCPD1_DBCC2": "D6",
  "PA13": "D7",
  "VDD_D8": "D8",
  "VSS_E1": "E1",
  "PF2": "E2",
  "PC0": "E3",
  "PA7": "E4",
  "PC7": "E5",
  "PA9/UCPD1_DBCC1": "E6",
  "PC6": "E7",
  "VSS_E8": "E8",
  "PF0": "F1",
  "PC1": "F2",
  "PA3": "F3",
  "PA6": "F4",
  "PB0": "F5",
  "PB14": "F6",
  "PB15": "F7",
  "PA8": "F8",
  "PF1": "G1",
  "PC2": "G2",
  "PA2": "G3",
  "PA5": "G4",
  "PB1": "G5",
  "PB10": "G6",
  "PB12": "G7",
  "PB13": "G8",
  "PC3": "H1",
  "PA0": "H2",
  "PA1": "H3",
  "PA4": "H4",
  "PC4": "H5",
  "PC5": "H6",
  "PB2": "H7",
  "PB11": "H8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC10: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC8: "bidirectional", PC15: "bidirectional", PC12: "bidirectional", PB8: "bidirectional", PB3: "bidirectional", PD5: "bidirectional", PD1: "bidirectional", PC9: "bidirectional", "PA10/PA12": "bidirectional", PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PD4: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", "PA9/PA11": "bidirectional", VDD_D1: "power_in", "VREF+": "input", VBAT: "power_in", PB5: "bidirectional", PD3: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", PA13: "bidirectional", VDD_D8: "power_in", VSS_E1: "power_in", PF2: "bidirectional", PC0: "bidirectional", PA7: "bidirectional", PC7: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", VSS_E8: "passive", PF0: "bidirectional", PC1: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB0: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PF1: "bidirectional", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB1: "bidirectional", PB10: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PB11: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1RCIxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 60 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1R_C-E_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1rc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32G0C1R_C_E_Tx extends Component.withPins({
  "PC11": "1",
  "PC12": "2",
  "PC13": "3",
  "PC14": "4",
  "PC15": "5",
  "VBAT": "6",
  "VREF+": "7",
  "VDD": "8",
  "VSS": "9",
  "PF0": "10",
  "PF1": "11",
  "PF2": "12",
  "PC0": "13",
  "PC1": "14",
  "PC2": "15",
  "PC3": "16",
  "PA0": "17",
  "PA1": "18",
  "PA2": "19",
  "PA3": "20",
  "PA4": "21",
  "PA5": "22",
  "PA6": "23",
  "PA7": "24",
  "PC4": "25",
  "PC5": "26",
  "PB0": "27",
  "PB1": "28",
  "PB2": "29",
  "PB10": "30",
  "PB11": "31",
  "PB12": "32",
  "PB13": "33",
  "PB14": "34",
  "PB15": "35",
  "PA8": "36",
  "PA9/UCPD1_DBCC1": "37",
  "PC6": "38",
  "PC7": "39",
  "PD8": "40",
  "PD9": "41",
  "PA10/UCPD1_DBCC2": "42",
  "PA9/PA11": "43",
  "PA10/PA12": "44",
  "PA13": "45",
  "PA14": "46",
  "PA15": "47",
  "PC8": "48",
  "PC9": "49",
  "PD0": "50",
  "PD1": "51",
  "PD2": "52",
  "PD3": "53",
  "PD4": "54",
  "PD5": "55",
  "PD6": "56",
  "PB3": "57",
  "PB4": "58",
  "PB5": "59",
  "PB6": "60",
  "PB7": "61",
  "PB8": "62",
  "PB9": "63",
  "PC10": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PC10: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1R_C-E_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 60 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1RCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1rc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32G0C1RCTx extends Component.withPins({
  "PC11": "1",
  "PC12": "2",
  "PC13": "3",
  "PC14": "4",
  "PC15": "5",
  "VBAT": "6",
  "VREF+": "7",
  "VDD": "8",
  "VSS": "9",
  "PF0": "10",
  "PF1": "11",
  "PF2": "12",
  "PC0": "13",
  "PC1": "14",
  "PC2": "15",
  "PC3": "16",
  "PA0": "17",
  "PA1": "18",
  "PA2": "19",
  "PA3": "20",
  "PA4": "21",
  "PA5": "22",
  "PA6": "23",
  "PA7": "24",
  "PC4": "25",
  "PC5": "26",
  "PB0": "27",
  "PB1": "28",
  "PB2": "29",
  "PB10": "30",
  "PB11": "31",
  "PB12": "32",
  "PB13": "33",
  "PB14": "34",
  "PB15": "35",
  "PA8": "36",
  "PA9/UCPD1_DBCC1": "37",
  "PC6": "38",
  "PC7": "39",
  "PD8": "40",
  "PD9": "41",
  "PA10/UCPD1_DBCC2": "42",
  "PA9/PA11": "43",
  "PA10/PA12": "44",
  "PA13": "45",
  "PA14": "46",
  "PA15": "47",
  "PC8": "48",
  "PC9": "49",
  "PD0": "50",
  "PD1": "51",
  "PD2": "52",
  "PD3": "53",
  "PD4": "54",
  "PD5": "55",
  "PD6": "56",
  "PB3": "57",
  "PB4": "58",
  "PB5": "59",
  "PB6": "60",
  "PB7": "61",
  "PB8": "62",
  "PB9": "63",
  "PC10": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PC10: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1RCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 58 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1R_C-E_TxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1rc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32G0C1R_C_E_TxN extends Component.withPins({
  "PC11": "1",
  "PC12": "2",
  "PC13": "3",
  "PC14": "4",
  "PC15": "5",
  "VBAT": "6",
  "VREF+": "7",
  "VDD_8": "8",
  "VSS_9": "9",
  "PF0": "10",
  "PF1": "11",
  "PF2": "12",
  "PC0": "13",
  "PC1": "14",
  "PC2": "15",
  "PC3": "16",
  "PA0": "17",
  "PA1": "18",
  "PA2": "19",
  "PA3": "20",
  "PA4": "21",
  "PA5": "22",
  "PA6": "23",
  "PA7": "24",
  "PC4": "25",
  "PC5": "26",
  "PB0": "27",
  "PB1": "28",
  "PB2": "29",
  "PB10": "30",
  "PB11": "31",
  "PB12": "32",
  "PB13": "33",
  "PB14": "34",
  "PB15": "35",
  "PA8": "36",
  "PA9/UCPD1_DBCC1": "37",
  "PC6": "38",
  "PC7": "39",
  "VSS_40": "40",
  "VDD_41": "41",
  "PA10/UCPD1_DBCC2": "42",
  "PA9/PA11": "43",
  "PA10/PA12": "44",
  "PA13": "45",
  "PA14": "46",
  "PA15": "47",
  "PC8": "48",
  "PC9": "49",
  "PD0": "50",
  "PD1": "51",
  "PD2": "52",
  "PD3": "53",
  "PD4": "54",
  "PD5": "55",
  "PD6": "56",
  "PB3": "57",
  "PB4": "58",
  "PB5": "59",
  "PB6": "60",
  "PB7": "61",
  "PB8": "62",
  "PB9": "63",
  "PC10": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_8: "power_in", VSS_9: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", VSS_40: "passive", VDD_41: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PC10: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1R_C-E_TxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 58 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1RCTxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1rc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32G0C1RCTxN extends Component.withPins({
  "PC11": "1",
  "PC12": "2",
  "PC13": "3",
  "PC14": "4",
  "PC15": "5",
  "VBAT": "6",
  "VREF+": "7",
  "VDD_8": "8",
  "VSS_9": "9",
  "PF0": "10",
  "PF1": "11",
  "PF2": "12",
  "PC0": "13",
  "PC1": "14",
  "PC2": "15",
  "PC3": "16",
  "PA0": "17",
  "PA1": "18",
  "PA2": "19",
  "PA3": "20",
  "PA4": "21",
  "PA5": "22",
  "PA6": "23",
  "PA7": "24",
  "PC4": "25",
  "PC5": "26",
  "PB0": "27",
  "PB1": "28",
  "PB2": "29",
  "PB10": "30",
  "PB11": "31",
  "PB12": "32",
  "PB13": "33",
  "PB14": "34",
  "PB15": "35",
  "PA8": "36",
  "PA9/UCPD1_DBCC1": "37",
  "PC6": "38",
  "PC7": "39",
  "VSS_40": "40",
  "VDD_41": "41",
  "PA10/UCPD1_DBCC2": "42",
  "PA9/PA11": "43",
  "PA10/PA12": "44",
  "PA13": "45",
  "PA14": "46",
  "PA15": "47",
  "PC8": "48",
  "PC9": "49",
  "PD0": "50",
  "PD1": "51",
  "PD2": "52",
  "PD3": "53",
  "PD4": "54",
  "PD5": "55",
  "PD6": "56",
  "PB3": "57",
  "PB4": "58",
  "PB5": "59",
  "PB6": "60",
  "PB7": "61",
  "PB8": "62",
  "PB9": "63",
  "PC10": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_8: "power_in", VSS_9: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", VSS_40: "passive", VDD_41: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PC10: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1RCTxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 58 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1REIxN`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1re.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32G0C1REIxN extends Component.withPins({
  "PC11": "A1",
  "PC10": "A2",
  "PB7": "A3",
  "PB6": "A4",
  "PD6": "A5",
  "PD2": "A6",
  "PD0": "A7",
  "PC8": "A8",
  "PC15": "B1",
  "PC12": "B2",
  "PB8": "B3",
  "PB3": "B4",
  "PD5": "B5",
  "PD1": "B6",
  "PC9": "B7",
  "PA10/PA12": "B8",
  "PC14": "C1",
  "PC13": "C2",
  "PB9": "C3",
  "PB4": "C4",
  "PD4": "C5",
  "PA15": "C6",
  "PA14": "C7",
  "PA9/PA11": "C8",
  "VDD_D1": "D1",
  "VREF+": "D2",
  "VBAT": "D3",
  "PB5": "D4",
  "PD3": "D5",
  "PA10/UCPD1_DBCC2": "D6",
  "PA13": "D7",
  "VDD_D8": "D8",
  "VSS_E1": "E1",
  "PF2": "E2",
  "PC0": "E3",
  "PA7": "E4",
  "PC7": "E5",
  "PA9/UCPD1_DBCC1": "E6",
  "PC6": "E7",
  "VSS_E8": "E8",
  "PF0": "F1",
  "PC1": "F2",
  "PA3": "F3",
  "PA6": "F4",
  "PB0": "F5",
  "PB14": "F6",
  "PB15": "F7",
  "PA8": "F8",
  "PF1": "G1",
  "PC2": "G2",
  "PA2": "G3",
  "PA5": "G4",
  "PB1": "G5",
  "PB10": "G6",
  "PB12": "G7",
  "PB13": "G8",
  "PC3": "H1",
  "PA0": "H2",
  "PA1": "H3",
  "PA4": "H4",
  "PC4": "H5",
  "PC5": "H6",
  "PB2": "H7",
  "PB11": "H8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC10: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC8: "bidirectional", PC15: "bidirectional", PC12: "bidirectional", PB8: "bidirectional", PB3: "bidirectional", PD5: "bidirectional", PD1: "bidirectional", PC9: "bidirectional", "PA10/PA12": "bidirectional", PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PD4: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", "PA9/PA11": "bidirectional", VDD_D1: "power_in", "VREF+": "input", VBAT: "power_in", PB5: "bidirectional", PD3: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", PA13: "bidirectional", VDD_D8: "power_in", VSS_E1: "power_in", PF2: "bidirectional", PC0: "bidirectional", PA7: "bidirectional", PC7: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", VSS_E8: "passive", PF0: "bidirectional", PC1: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB0: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PF1: "bidirectional", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB1: "bidirectional", PB10: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PB11: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1REIxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 60 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1RETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1re.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32G0C1RETx extends Component.withPins({
  "PC11": "1",
  "PC12": "2",
  "PC13": "3",
  "PC14": "4",
  "PC15": "5",
  "VBAT": "6",
  "VREF+": "7",
  "VDD": "8",
  "VSS": "9",
  "PF0": "10",
  "PF1": "11",
  "PF2": "12",
  "PC0": "13",
  "PC1": "14",
  "PC2": "15",
  "PC3": "16",
  "PA0": "17",
  "PA1": "18",
  "PA2": "19",
  "PA3": "20",
  "PA4": "21",
  "PA5": "22",
  "PA6": "23",
  "PA7": "24",
  "PC4": "25",
  "PC5": "26",
  "PB0": "27",
  "PB1": "28",
  "PB2": "29",
  "PB10": "30",
  "PB11": "31",
  "PB12": "32",
  "PB13": "33",
  "PB14": "34",
  "PB15": "35",
  "PA8": "36",
  "PA9/UCPD1_DBCC1": "37",
  "PC6": "38",
  "PC7": "39",
  "PD8": "40",
  "PD9": "41",
  "PA10/UCPD1_DBCC2": "42",
  "PA9/PA11": "43",
  "PA10/PA12": "44",
  "PA13": "45",
  "PA14": "46",
  "PA15": "47",
  "PC8": "48",
  "PC9": "49",
  "PD0": "50",
  "PD1": "51",
  "PD2": "52",
  "PD3": "53",
  "PD4": "54",
  "PD5": "55",
  "PD6": "56",
  "PB3": "57",
  "PB4": "58",
  "PB5": "59",
  "PB6": "60",
  "PB7": "61",
  "PB8": "62",
  "PB9": "63",
  "PC10": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PC10: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1RETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 58 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1RETxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1re.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32G0C1RETxN extends Component.withPins({
  "PC11": "1",
  "PC12": "2",
  "PC13": "3",
  "PC14": "4",
  "PC15": "5",
  "VBAT": "6",
  "VREF+": "7",
  "VDD_8": "8",
  "VSS_9": "9",
  "PF0": "10",
  "PF1": "11",
  "PF2": "12",
  "PC0": "13",
  "PC1": "14",
  "PC2": "15",
  "PC3": "16",
  "PA0": "17",
  "PA1": "18",
  "PA2": "19",
  "PA3": "20",
  "PA4": "21",
  "PA5": "22",
  "PA6": "23",
  "PA7": "24",
  "PC4": "25",
  "PC5": "26",
  "PB0": "27",
  "PB1": "28",
  "PB2": "29",
  "PB10": "30",
  "PB11": "31",
  "PB12": "32",
  "PB13": "33",
  "PB14": "34",
  "PB15": "35",
  "PA8": "36",
  "PA9/UCPD1_DBCC1": "37",
  "PC6": "38",
  "PC7": "39",
  "VSS_40": "40",
  "VDD_41": "41",
  "PA10/UCPD1_DBCC2": "42",
  "PA9/PA11": "43",
  "PA10/PA12": "44",
  "PA13": "45",
  "PA14": "46",
  "PA15": "47",
  "PC8": "48",
  "PC9": "49",
  "PD0": "50",
  "PD1": "51",
  "PD2": "52",
  "PD3": "53",
  "PD4": "54",
  "PD5": "55",
  "PD6": "56",
  "PB3": "57",
  "PB4": "58",
  "PB5": "59",
  "PB6": "60",
  "PB7": "61",
  "PB8": "62",
  "PB9": "63",
  "PC10": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_8: "power_in", VSS_9: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", VSS_40: "passive", VDD_41: "power_in", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PC10: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1RETxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 94 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1V_C-E_Ix`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1vc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32G0C1V_C_E_Ix extends Component.withPins({
  "PB8": "A1",
  "PE3": "A2",
  "PE2": "A3",
  "PE0": "A4",
  "PB3": "A5",
  "PF13": "A6",
  "PF11": "A7",
  "PF9": "A8",
  "PD6": "A9",
  "PD5": "A10",
  "PD2": "A11",
  "PC9": "A12",
  "PC11": "B1",
  "PC10": "B2",
  "PB7": "B3",
  "PE1": "B4",
  "PB4": "B5",
  "PF12": "B6",
  "PF10": "B7",
  "PD7": "B8",
  "PD4": "B9",
  "PD0": "B10",
  "PA15": "B11",
  "PA14": "B12",
  "PE6": "C1",
  "PE4": "C2",
  "PB9": "C3",
  "PB6": "C4",
  "PB5": "C5",
  "PD3": "C8",
  "PD1": "C9",
  "PC8": "C10",
  "PA13": "C11",
  "PA10/PA12": "C12",
  "PC14": "D1",
  "PC12": "D2",
  "PE5": "D3",
  "PF8": "D10",
  "PD15": "D11",
  "PA9/PA11": "D12",
  "PC15": "E1",
  "VBAT": "E2",
  "PC13": "E3",
  "PA10/UCPD1_DBCC2": "E10",
  "PD14": "E11",
  "PD13": "E12",
  "VDD_F1": "F1",
  "VREF+": "F2",
  "PD12": "F11",
  "VDD_F12": "F12",
  "VSS_G1": "G1",
  "PF2": "G2",
  "PD11": "G11",
  "VSS_G12": "G12",
  "PF0": "H1",
  "PF4": "H2",
  "PF3": "H3",
  "PA9/UCPD1_DBCC1": "H10",
  "PD9": "H11",
  "PD10": "H12",
  "PF1": "J1",
  "PF5": "J2",
  "PC1": "J3",
  "PB15": "J10",
  "PC6": "J11",
  "PD8": "J12",
  "PC0": "K1",
  "PC2": "K2",
  "PA0": "K3",
  "PA3": "K4",
  "PA7": "K5",
  "PE9": "K8",
  "PE14": "K9",
  "PB12": "K10",
  "PB14": "K11",
  "PC7": "K12",
  "PC3": "L1",
  "PA1": "L2",
  "PA4": "L3",
  "PC4": "L4",
  "PB0": "L5",
  "PB2": "L6",
  "PF7": "L7",
  "PE10": "L8",
  "PE12": "L9",
  "PE15": "L10",
  "PB11": "L11",
  "PA8": "L12",
  "PA2": "M1",
  "PA5": "M2",
  "PA6": "M3",
  "PC5": "M4",
  "PB1": "M5",
  "PF6": "M6",
  "PE7": "M7",
  "PE8": "M8",
  "PE11": "M9",
  "PE13": "M10",
  "PB10": "M11",
  "PB13": "M12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB8: "bidirectional", PE3: "bidirectional", PE2: "bidirectional", PE0: "bidirectional", PB3: "bidirectional", PF13: "bidirectional", PF11: "bidirectional", PF9: "bidirectional", PD6: "bidirectional", PD5: "bidirectional", PD2: "bidirectional", PC9: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PB7: "bidirectional", PE1: "bidirectional", PB4: "bidirectional", PF12: "bidirectional", PF10: "bidirectional", PD7: "bidirectional", PD4: "bidirectional", PD0: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PE6: "bidirectional", PE4: "bidirectional", PB9: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC8: "bidirectional", PA13: "bidirectional", "PA10/PA12": "bidirectional", PC14: "bidirectional", PC12: "bidirectional", PE5: "bidirectional", PF8: "bidirectional", PD15: "bidirectional", "PA9/PA11": "bidirectional", PC15: "bidirectional", VBAT: "power_in", PC13: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", PD14: "bidirectional", PD13: "bidirectional", VDD_F1: "power_in", "VREF+": "input", PD12: "bidirectional", VDD_F12: "power_in", VSS_G1: "power_in", PF2: "bidirectional", PD11: "bidirectional", VSS_G12: "passive", PF0: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PF1: "bidirectional", PF5: "bidirectional", PC1: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PD8: "bidirectional", PC0: "bidirectional", PC2: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA7: "bidirectional", PE9: "bidirectional", PE14: "bidirectional", PB12: "bidirectional", PB14: "bidirectional", PC7: "bidirectional", PC3: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PC4: "bidirectional", PB0: "bidirectional", PB2: "bidirectional", PF7: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PE15: "bidirectional", PB11: "bidirectional", PA8: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB1: "bidirectional", PF6: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1V_C-E_Ix";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 94 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1VCIx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1vc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32G0C1VCIx extends Component.withPins({
  "PB8": "A1",
  "PE3": "A2",
  "PE2": "A3",
  "PE0": "A4",
  "PB3": "A5",
  "PF13": "A6",
  "PF11": "A7",
  "PF9": "A8",
  "PD6": "A9",
  "PD5": "A10",
  "PD2": "A11",
  "PC9": "A12",
  "PC11": "B1",
  "PC10": "B2",
  "PB7": "B3",
  "PE1": "B4",
  "PB4": "B5",
  "PF12": "B6",
  "PF10": "B7",
  "PD7": "B8",
  "PD4": "B9",
  "PD0": "B10",
  "PA15": "B11",
  "PA14": "B12",
  "PE6": "C1",
  "PE4": "C2",
  "PB9": "C3",
  "PB6": "C4",
  "PB5": "C5",
  "PD3": "C8",
  "PD1": "C9",
  "PC8": "C10",
  "PA13": "C11",
  "PA10/PA12": "C12",
  "PC14": "D1",
  "PC12": "D2",
  "PE5": "D3",
  "PF8": "D10",
  "PD15": "D11",
  "PA9/PA11": "D12",
  "PC15": "E1",
  "VBAT": "E2",
  "PC13": "E3",
  "PA10/UCPD1_DBCC2": "E10",
  "PD14": "E11",
  "PD13": "E12",
  "VDD_F1": "F1",
  "VREF+": "F2",
  "PD12": "F11",
  "VDD_F12": "F12",
  "VSS_G1": "G1",
  "PF2": "G2",
  "PD11": "G11",
  "VSS_G12": "G12",
  "PF0": "H1",
  "PF4": "H2",
  "PF3": "H3",
  "PA9/UCPD1_DBCC1": "H10",
  "PD9": "H11",
  "PD10": "H12",
  "PF1": "J1",
  "PF5": "J2",
  "PC1": "J3",
  "PB15": "J10",
  "PC6": "J11",
  "PD8": "J12",
  "PC0": "K1",
  "PC2": "K2",
  "PA0": "K3",
  "PA3": "K4",
  "PA7": "K5",
  "PE9": "K8",
  "PE14": "K9",
  "PB12": "K10",
  "PB14": "K11",
  "PC7": "K12",
  "PC3": "L1",
  "PA1": "L2",
  "PA4": "L3",
  "PC4": "L4",
  "PB0": "L5",
  "PB2": "L6",
  "PF7": "L7",
  "PE10": "L8",
  "PE12": "L9",
  "PE15": "L10",
  "PB11": "L11",
  "PA8": "L12",
  "PA2": "M1",
  "PA5": "M2",
  "PA6": "M3",
  "PC5": "M4",
  "PB1": "M5",
  "PF6": "M6",
  "PE7": "M7",
  "PE8": "M8",
  "PE11": "M9",
  "PE13": "M10",
  "PB10": "M11",
  "PB13": "M12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB8: "bidirectional", PE3: "bidirectional", PE2: "bidirectional", PE0: "bidirectional", PB3: "bidirectional", PF13: "bidirectional", PF11: "bidirectional", PF9: "bidirectional", PD6: "bidirectional", PD5: "bidirectional", PD2: "bidirectional", PC9: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PB7: "bidirectional", PE1: "bidirectional", PB4: "bidirectional", PF12: "bidirectional", PF10: "bidirectional", PD7: "bidirectional", PD4: "bidirectional", PD0: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PE6: "bidirectional", PE4: "bidirectional", PB9: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC8: "bidirectional", PA13: "bidirectional", "PA10/PA12": "bidirectional", PC14: "bidirectional", PC12: "bidirectional", PE5: "bidirectional", PF8: "bidirectional", PD15: "bidirectional", "PA9/PA11": "bidirectional", PC15: "bidirectional", VBAT: "power_in", PC13: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", PD14: "bidirectional", PD13: "bidirectional", VDD_F1: "power_in", "VREF+": "input", PD12: "bidirectional", VDD_F12: "power_in", VSS_G1: "power_in", PF2: "bidirectional", PD11: "bidirectional", VSS_G12: "passive", PF0: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PF1: "bidirectional", PF5: "bidirectional", PC1: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PD8: "bidirectional", PC0: "bidirectional", PC2: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA7: "bidirectional", PE9: "bidirectional", PE14: "bidirectional", PB12: "bidirectional", PB14: "bidirectional", PC7: "bidirectional", PC3: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PC4: "bidirectional", PB0: "bidirectional", PB2: "bidirectional", PF7: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PE15: "bidirectional", PB11: "bidirectional", PA8: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB1: "bidirectional", PF6: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1VCIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256-512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 94 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1V_C-E_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1vc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32G0C1V_C_E_Tx extends Component.withPins({
  "PB9": "1",
  "PC10": "2",
  "PC11": "3",
  "PE4": "4",
  "PE5": "5",
  "PE6": "6",
  "PC12": "7",
  "PC13": "8",
  "PC14": "9",
  "PC15": "10",
  "VBAT": "11",
  "VREF+": "12",
  "VDD_13": "13",
  "VSS_14": "14",
  "PF0": "15",
  "PF1": "16",
  "PF2": "17",
  "PF3": "18",
  "PF4": "19",
  "PF5": "20",
  "PC0": "21",
  "PC1": "22",
  "PC2": "23",
  "PC3": "24",
  "PA0": "25",
  "PA1": "26",
  "PA2": "27",
  "PA3": "28",
  "PA4": "29",
  "PA5": "30",
  "PA6": "31",
  "PA7": "32",
  "PC4": "33",
  "PC5": "34",
  "PB0": "35",
  "PB1": "36",
  "PB2": "37",
  "PF6": "38",
  "PF7": "39",
  "PE7": "40",
  "PE8": "41",
  "PE9": "42",
  "PE10": "43",
  "PE11": "44",
  "PE12": "45",
  "PE13": "46",
  "PE14": "47",
  "PE15": "48",
  "PB10": "49",
  "PB11": "50",
  "PB12": "51",
  "PB13": "52",
  "PB14": "53",
  "PB15": "54",
  "PA8": "55",
  "PA9/UCPD1_DBCC1": "56",
  "PC6": "57",
  "PC7": "58",
  "PD8": "59",
  "PD9": "60",
  "PD10": "61",
  "PD11": "62",
  "VSS_63": "63",
  "VDD_64": "64",
  "PD12": "65",
  "PD13": "66",
  "PD14": "67",
  "PD15": "68",
  "PA10/UCPD1_DBCC2": "69",
  "PA9/PA11": "70",
  "PA10/PA12": "71",
  "PF8": "72",
  "PA13": "73",
  "PA14": "74",
  "PA15": "75",
  "PC8": "76",
  "PC9": "77",
  "PD0": "78",
  "PD1": "79",
  "PD2": "80",
  "PD3": "81",
  "PD4": "82",
  "PD5": "83",
  "PD6": "84",
  "PD7": "85",
  "PF9": "86",
  "PF10": "87",
  "PF11": "88",
  "PF12": "89",
  "PF13": "90",
  "PB3": "91",
  "PB4": "92",
  "PB5": "93",
  "PE0": "94",
  "PE1": "95",
  "PE2": "96",
  "PE3": "97",
  "PB6": "98",
  "PB7": "99",
  "PB8": "100",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_13: "power_in", VSS_14: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", VSS_63: "passive", VDD_64: "power_in", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PF8: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF11: "bidirectional", PF12: "bidirectional", PF13: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1V_C-E_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 94 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1VCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1vc.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32G0C1VCTx extends Component.withPins({
  "PB9": "1",
  "PC10": "2",
  "PC11": "3",
  "PE4": "4",
  "PE5": "5",
  "PE6": "6",
  "PC12": "7",
  "PC13": "8",
  "PC14": "9",
  "PC15": "10",
  "VBAT": "11",
  "VREF+": "12",
  "VDD_13": "13",
  "VSS_14": "14",
  "PF0": "15",
  "PF1": "16",
  "PF2": "17",
  "PF3": "18",
  "PF4": "19",
  "PF5": "20",
  "PC0": "21",
  "PC1": "22",
  "PC2": "23",
  "PC3": "24",
  "PA0": "25",
  "PA1": "26",
  "PA2": "27",
  "PA3": "28",
  "PA4": "29",
  "PA5": "30",
  "PA6": "31",
  "PA7": "32",
  "PC4": "33",
  "PC5": "34",
  "PB0": "35",
  "PB1": "36",
  "PB2": "37",
  "PF6": "38",
  "PF7": "39",
  "PE7": "40",
  "PE8": "41",
  "PE9": "42",
  "PE10": "43",
  "PE11": "44",
  "PE12": "45",
  "PE13": "46",
  "PE14": "47",
  "PE15": "48",
  "PB10": "49",
  "PB11": "50",
  "PB12": "51",
  "PB13": "52",
  "PB14": "53",
  "PB15": "54",
  "PA8": "55",
  "PA9/UCPD1_DBCC1": "56",
  "PC6": "57",
  "PC7": "58",
  "PD8": "59",
  "PD9": "60",
  "PD10": "61",
  "PD11": "62",
  "VSS_63": "63",
  "VDD_64": "64",
  "PD12": "65",
  "PD13": "66",
  "PD14": "67",
  "PD15": "68",
  "PA10/UCPD1_DBCC2": "69",
  "PA9/PA11": "70",
  "PA10/PA12": "71",
  "PF8": "72",
  "PA13": "73",
  "PA14": "74",
  "PA15": "75",
  "PC8": "76",
  "PC9": "77",
  "PD0": "78",
  "PD1": "79",
  "PD2": "80",
  "PD3": "81",
  "PD4": "82",
  "PD5": "83",
  "PD6": "84",
  "PD7": "85",
  "PF9": "86",
  "PF10": "87",
  "PF11": "88",
  "PF12": "89",
  "PF13": "90",
  "PB3": "91",
  "PB4": "92",
  "PB5": "93",
  "PE0": "94",
  "PE1": "95",
  "PE2": "96",
  "PE3": "97",
  "PB6": "98",
  "PB7": "99",
  "PB8": "100",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_13: "power_in", VSS_14: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", VSS_63: "passive", VDD_64: "power_in", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PF8: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF11: "bidirectional", PF12: "bidirectional", PF13: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1VCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 94 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1VEIx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1ve.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32G0C1VEIx extends Component.withPins({
  "PB8": "A1",
  "PE3": "A2",
  "PE2": "A3",
  "PE0": "A4",
  "PB3": "A5",
  "PF13": "A6",
  "PF11": "A7",
  "PF9": "A8",
  "PD6": "A9",
  "PD5": "A10",
  "PD2": "A11",
  "PC9": "A12",
  "PC11": "B1",
  "PC10": "B2",
  "PB7": "B3",
  "PE1": "B4",
  "PB4": "B5",
  "PF12": "B6",
  "PF10": "B7",
  "PD7": "B8",
  "PD4": "B9",
  "PD0": "B10",
  "PA15": "B11",
  "PA14": "B12",
  "PE6": "C1",
  "PE4": "C2",
  "PB9": "C3",
  "PB6": "C4",
  "PB5": "C5",
  "PD3": "C8",
  "PD1": "C9",
  "PC8": "C10",
  "PA13": "C11",
  "PA10/PA12": "C12",
  "PC14": "D1",
  "PC12": "D2",
  "PE5": "D3",
  "PF8": "D10",
  "PD15": "D11",
  "PA9/PA11": "D12",
  "PC15": "E1",
  "VBAT": "E2",
  "PC13": "E3",
  "PA10/UCPD1_DBCC2": "E10",
  "PD14": "E11",
  "PD13": "E12",
  "VDD_F1": "F1",
  "VREF+": "F2",
  "PD12": "F11",
  "VDD_F12": "F12",
  "VSS_G1": "G1",
  "PF2": "G2",
  "PD11": "G11",
  "VSS_G12": "G12",
  "PF0": "H1",
  "PF4": "H2",
  "PF3": "H3",
  "PA9/UCPD1_DBCC1": "H10",
  "PD9": "H11",
  "PD10": "H12",
  "PF1": "J1",
  "PF5": "J2",
  "PC1": "J3",
  "PB15": "J10",
  "PC6": "J11",
  "PD8": "J12",
  "PC0": "K1",
  "PC2": "K2",
  "PA0": "K3",
  "PA3": "K4",
  "PA7": "K5",
  "PE9": "K8",
  "PE14": "K9",
  "PB12": "K10",
  "PB14": "K11",
  "PC7": "K12",
  "PC3": "L1",
  "PA1": "L2",
  "PA4": "L3",
  "PC4": "L4",
  "PB0": "L5",
  "PB2": "L6",
  "PF7": "L7",
  "PE10": "L8",
  "PE12": "L9",
  "PE15": "L10",
  "PB11": "L11",
  "PA8": "L12",
  "PA2": "M1",
  "PA5": "M2",
  "PA6": "M3",
  "PC5": "M4",
  "PB1": "M5",
  "PF6": "M6",
  "PE7": "M7",
  "PE8": "M8",
  "PE11": "M9",
  "PE13": "M10",
  "PB10": "M11",
  "PB13": "M12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB8: "bidirectional", PE3: "bidirectional", PE2: "bidirectional", PE0: "bidirectional", PB3: "bidirectional", PF13: "bidirectional", PF11: "bidirectional", PF9: "bidirectional", PD6: "bidirectional", PD5: "bidirectional", PD2: "bidirectional", PC9: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PB7: "bidirectional", PE1: "bidirectional", PB4: "bidirectional", PF12: "bidirectional", PF10: "bidirectional", PD7: "bidirectional", PD4: "bidirectional", PD0: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PE6: "bidirectional", PE4: "bidirectional", PB9: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC8: "bidirectional", PA13: "bidirectional", "PA10/PA12": "bidirectional", PC14: "bidirectional", PC12: "bidirectional", PE5: "bidirectional", PF8: "bidirectional", PD15: "bidirectional", "PA9/PA11": "bidirectional", PC15: "bidirectional", VBAT: "power_in", PC13: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", PD14: "bidirectional", PD13: "bidirectional", VDD_F1: "power_in", "VREF+": "input", PD12: "bidirectional", VDD_F12: "power_in", VSS_G1: "power_in", PF2: "bidirectional", PD11: "bidirectional", VSS_G12: "passive", PF0: "bidirectional", PF4: "bidirectional", PF3: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PF1: "bidirectional", PF5: "bidirectional", PC1: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PD8: "bidirectional", PC0: "bidirectional", PC2: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA7: "bidirectional", PE9: "bidirectional", PE14: "bidirectional", PB12: "bidirectional", PB14: "bidirectional", PC7: "bidirectional", PC3: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PC4: "bidirectional", PB0: "bidirectional", PB2: "bidirectional", PF7: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PE15: "bidirectional", PB11: "bidirectional", PA8: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB1: "bidirectional", PF6: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1VEIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 144KB RAM, 64 MHz, 1.7-3.6V, 94 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32G0:STM32G0C1VETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32g0c1ve.pdf
 * Keywords: Arm Cortex-M0+ STM32G0 STM32G0x1.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32G0C1VETx extends Component.withPins({
  "PB9": "1",
  "PC10": "2",
  "PC11": "3",
  "PE4": "4",
  "PE5": "5",
  "PE6": "6",
  "PC12": "7",
  "PC13": "8",
  "PC14": "9",
  "PC15": "10",
  "VBAT": "11",
  "VREF+": "12",
  "VDD_13": "13",
  "VSS_14": "14",
  "PF0": "15",
  "PF1": "16",
  "PF2": "17",
  "PF3": "18",
  "PF4": "19",
  "PF5": "20",
  "PC0": "21",
  "PC1": "22",
  "PC2": "23",
  "PC3": "24",
  "PA0": "25",
  "PA1": "26",
  "PA2": "27",
  "PA3": "28",
  "PA4": "29",
  "PA5": "30",
  "PA6": "31",
  "PA7": "32",
  "PC4": "33",
  "PC5": "34",
  "PB0": "35",
  "PB1": "36",
  "PB2": "37",
  "PF6": "38",
  "PF7": "39",
  "PE7": "40",
  "PE8": "41",
  "PE9": "42",
  "PE10": "43",
  "PE11": "44",
  "PE12": "45",
  "PE13": "46",
  "PE14": "47",
  "PE15": "48",
  "PB10": "49",
  "PB11": "50",
  "PB12": "51",
  "PB13": "52",
  "PB14": "53",
  "PB15": "54",
  "PA8": "55",
  "PA9/UCPD1_DBCC1": "56",
  "PC6": "57",
  "PC7": "58",
  "PD8": "59",
  "PD9": "60",
  "PD10": "61",
  "PD11": "62",
  "VSS_63": "63",
  "VDD_64": "64",
  "PD12": "65",
  "PD13": "66",
  "PD14": "67",
  "PD15": "68",
  "PA10/UCPD1_DBCC2": "69",
  "PA9/PA11": "70",
  "PA10/PA12": "71",
  "PF8": "72",
  "PA13": "73",
  "PA14": "74",
  "PA15": "75",
  "PC8": "76",
  "PC9": "77",
  "PD0": "78",
  "PD1": "79",
  "PD2": "80",
  "PD3": "81",
  "PD4": "82",
  "PD5": "83",
  "PD6": "84",
  "PD7": "85",
  "PF9": "86",
  "PF10": "87",
  "PF11": "88",
  "PF12": "89",
  "PF13": "90",
  "PB3": "91",
  "PB4": "92",
  "PB5": "93",
  "PE0": "94",
  "PE1": "95",
  "PE2": "96",
  "PE3": "97",
  "PB6": "98",
  "PB7": "99",
  "PB8": "100",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VBAT: "power_in", "VREF+": "input", VDD_13: "power_in", VSS_14: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PF3: "bidirectional", PF4: "bidirectional", PF5: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PF6: "bidirectional", PF7: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", "PA9/UCPD1_DBCC1": "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", VSS_63: "passive", VDD_64: "power_in", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", "PA10/UCPD1_DBCC2": "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PF8: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PF9: "bidirectional", PF10: "bidirectional", PF11: "bidirectional", PF12: "bidirectional", PF13: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", PE2: "bidirectional", PE3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32G0:STM32G0C1VETx";
  override referencePrefix = "U";
}
