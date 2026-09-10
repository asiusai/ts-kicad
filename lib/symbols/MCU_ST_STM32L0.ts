// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.8-3.6V, 38 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L010C6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l010c6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x0 Value Line.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L010C6Tx extends Component.withPins({
  "PC0": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC0: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L010C6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 2KB RAM, 32 MHz, 1.8-3.6V, 16 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L010F4Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l010f4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x0 Value Line.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32L010F4Px extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L010F4Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 2KB RAM, 32 MHz, 1.8-3.6V, 26 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L010K4Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l010k4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x0 Value Line.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L010K4Tx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  "PB9": "31",
  "VSS_32": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L010K4Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.8-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L010K8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l010k8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x0 Value Line.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L010K8Tx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L010K8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.8-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L010R8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l010r8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x0 Value Line.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32L010R8Tx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L010R8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.8-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L010RBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l010rb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x0 Value Line.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32L010RBTx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L010RBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 8-16KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 11 GPIO, TSSOP14
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L011D_3-4_Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l011d3.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class STM32L011D_3_4_Px extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "NRST": "4",
  "PA0": "5",
  "PA1": "6",
  "PA4": "7",
  "PA7": "8",
  "VSS": "9",
  "VDD": "10",
  "PA9": "11",
  "PA10": "12",
  "PA13": "13",
  "PA14": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", PA0: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", VSS: "power_in", VDD: "power_in", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L011D_3-4_Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 8KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 11 GPIO, TSSOP14
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L011D3Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l011d3.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class STM32L011D3Px extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "NRST": "4",
  "PA0": "5",
  "PA1": "6",
  "PA4": "7",
  "PA7": "8",
  "VSS": "9",
  "VDD": "10",
  "PA9": "11",
  "PA10": "12",
  "PA13": "13",
  "PA14": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", PA0: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", VSS: "power_in", VDD: "power_in", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L011D3Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 11 GPIO, TSSOP14
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L011D4Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l011d4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class STM32L011D4Px extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "NRST": "4",
  "PA0": "5",
  "PA1": "6",
  "PA4": "7",
  "PA7": "8",
  "VSS": "9",
  "VDD": "10",
  "PA9": "11",
  "PA10": "12",
  "PA13": "13",
  "PA14": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", PA0: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", VSS: "power_in", VDD: "power_in", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L011D4Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 8-16KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 21 GPIO, WLCSP25
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L011E_3-4_Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die457*.
 * @see https://www.st.com/resource/en/datasheet/stm32l011e3.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_CSP:ST_WLCSP-25_Die457.
 */
export class STM32L011E_3_4_Yx extends Component.withPins({
  "PA13": "A1",
  "PA14": "A2",
  "PB6": "A3",
  "PB7": "A4",
  "PB9": "A5",
  "PA9": "B1",
  "PB3": "B2",
  "PA4": "B3",
  "PA1": "B4",
  "PC14": "B5",
  "PA8": "C1",
  "PA10": "C2",
  "PA7": "C3",
  "VDDA": "C4",
  "PC15": "C5",
  "VDD": "D1",
  "PB1": "D2",
  "PA5": "D3",
  "PA2": "D4",
  "NRST": "D5",
  "VSS": "E1",
  "PB0": "E2",
  "PA6": "E3",
  "PA3": "E4",
  "PA0": "E5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA13: "bidirectional", PA14: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", PA9: "bidirectional", PB3: "bidirectional", PA4: "bidirectional", PA1: "bidirectional", PC14: "bidirectional", PA8: "bidirectional", PA10: "bidirectional", PA7: "bidirectional", VDDA: "power_in", PC15: "bidirectional", VDD: "power_in", PB1: "bidirectional", PA5: "bidirectional", PA2: "bidirectional", NRST: "input", VSS: "power_in", PB0: "bidirectional", PA6: "bidirectional", PA3: "bidirectional", PA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L011E_3-4_Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 8KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 21 GPIO, WLCSP25
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L011E3Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die457*.
 * @see https://www.st.com/resource/en/datasheet/stm32l011e3.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_CSP:ST_WLCSP-25_Die457.
 */
export class STM32L011E3Yx extends Component.withPins({
  "PA13": "A1",
  "PA14": "A2",
  "PB6": "A3",
  "PB7": "A4",
  "PB9": "A5",
  "PA9": "B1",
  "PB3": "B2",
  "PA4": "B3",
  "PA1": "B4",
  "PC14": "B5",
  "PA8": "C1",
  "PA10": "C2",
  "PA7": "C3",
  "VDDA": "C4",
  "PC15": "C5",
  "VDD": "D1",
  "PB1": "D2",
  "PA5": "D3",
  "PA2": "D4",
  "NRST": "D5",
  "VSS": "E1",
  "PB0": "E2",
  "PA6": "E3",
  "PA3": "E4",
  "PA0": "E5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA13: "bidirectional", PA14: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", PA9: "bidirectional", PB3: "bidirectional", PA4: "bidirectional", PA1: "bidirectional", PC14: "bidirectional", PA8: "bidirectional", PA10: "bidirectional", PA7: "bidirectional", VDDA: "power_in", PC15: "bidirectional", VDD: "power_in", PB1: "bidirectional", PA5: "bidirectional", PA2: "bidirectional", NRST: "input", VSS: "power_in", PB0: "bidirectional", PA6: "bidirectional", PA3: "bidirectional", PA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L011E3Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 21 GPIO, WLCSP25
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L011E4Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die457*.
 * @see https://www.st.com/resource/en/datasheet/stm32l011e4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_CSP:ST_WLCSP-25_Die457.
 */
export class STM32L011E4Yx extends Component.withPins({
  "PA13": "A1",
  "PA14": "A2",
  "PB6": "A3",
  "PB7": "A4",
  "PB9": "A5",
  "PA9": "B1",
  "PB3": "B2",
  "PA4": "B3",
  "PA1": "B4",
  "PC14": "B5",
  "PA8": "C1",
  "PA10": "C2",
  "PA7": "C3",
  "VDDA": "C4",
  "PC15": "C5",
  "VDD": "D1",
  "PB1": "D2",
  "PA5": "D3",
  "PA2": "D4",
  "NRST": "D5",
  "VSS": "E1",
  "PB0": "E2",
  "PA6": "E3",
  "PA3": "E4",
  "PA0": "E5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA13: "bidirectional", PA14: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", PA9: "bidirectional", PB3: "bidirectional", PA4: "bidirectional", PA1: "bidirectional", PC14: "bidirectional", PA8: "bidirectional", PA10: "bidirectional", PA7: "bidirectional", VDDA: "power_in", PC15: "bidirectional", VDD: "power_in", PB1: "bidirectional", PA5: "bidirectional", PA2: "bidirectional", NRST: "input", VSS: "power_in", PB0: "bidirectional", PA6: "bidirectional", PA3: "bidirectional", PA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L011E4Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 8-16KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 16 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L011F_3-4_Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l011f3.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32L011F_3_4_Px extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L011F_3-4_Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 8KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 16 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L011F3Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l011f3.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32L011F3Px extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L011F3Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 8-16KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 16 GPIO, UFQFPN20
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L011F_3-4_Ux`. Reference prefix: `U`.
 * Footprint filters: ST*UFQFPN*3x3mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l011f3.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:ST_UFQFPN-20_3x3mm_P0.5mm.
 */
export class STM32L011F_3_4_Ux extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "NRST": "3",
  "VDDA": "4",
  "PA0": "5",
  "PA1": "6",
  "PA4": "7",
  "PA5": "8",
  "PA6": "9",
  "PA7": "10",
  "PB1": "11",
  "VSS": "12",
  "VDD": "13",
  "PA9": "14",
  "PA10": "15",
  "PA13": "16",
  "PA14": "17",
  "PB6": "18",
  "PB7": "19",
  "PB9": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L011F_3-4_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 8KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 16 GPIO, UFQFPN20
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L011F3Ux`. Reference prefix: `U`.
 * Footprint filters: ST*UFQFPN*3x3mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l011f3.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:ST_UFQFPN-20_3x3mm_P0.5mm.
 */
export class STM32L011F3Ux extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "NRST": "3",
  "VDDA": "4",
  "PA0": "5",
  "PA1": "6",
  "PA4": "7",
  "PA5": "8",
  "PA6": "9",
  "PA7": "10",
  "PB1": "11",
  "VSS": "12",
  "VDD": "13",
  "PA9": "14",
  "PA10": "15",
  "PA13": "16",
  "PA14": "17",
  "PB6": "18",
  "PB7": "19",
  "PB9": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L011F3Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 16 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L011F4Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l011f4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32L011F4Px extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L011F4Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 16 GPIO, UFQFPN20
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L011F4Ux`. Reference prefix: `U`.
 * Footprint filters: ST*UFQFPN*3x3mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l011f4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:ST_UFQFPN-20_3x3mm_P0.5mm.
 */
export class STM32L011F4Ux extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "NRST": "3",
  "VDDA": "4",
  "PA0": "5",
  "PA1": "6",
  "PA4": "7",
  "PA5": "8",
  "PA6": "9",
  "PA7": "10",
  "PB1": "11",
  "VSS": "12",
  "VDD": "13",
  "PA9": "14",
  "PA10": "15",
  "PA13": "16",
  "PA14": "17",
  "PB6": "18",
  "PB7": "19",
  "PB9": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L011F4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 8-16KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 24 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L011G_3-4_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l011g3.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32L011G_3_4_Ux extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L011G_3-4_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 8KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 24 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L011G3Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l011g3.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32L011G3Ux extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L011G3Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 24 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L011G4Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l011g4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32L011G4Ux extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L011G4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 8-16KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 26 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L011K_3-4_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l011k3.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L011K_3_4_Tx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  "PB9": "31",
  "VSS_32": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L011K_3-4_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 8KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 26 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L011K3Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l011k3.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L011K3Tx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  "PB9": "31",
  "VSS_32": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L011K3Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 8-16KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 28 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L011K_3-4_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l011k3.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L011K_3_4_Ux extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  "PB9": "31",
  "PB8": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L011K_3-4_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 8KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 28 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L011K3Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l011k3.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L011K3Ux extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  "PB9": "31",
  "PB8": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L011K3Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 26 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L011K4Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l011k4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L011K4Tx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  "PB9": "31",
  "VSS_32": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L011K4Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 28 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L011K4Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l011k4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L011K4Ux extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  "PB9": "31",
  "PB8": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L011K4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 11 GPIO, TSSOP14
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L021D4Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l021d4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class STM32L021D4Px extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
  "NRST": "4",
  "PA0": "5",
  "PA1": "6",
  "PA4": "7",
  "PA7": "8",
  "VSS": "9",
  "VDD": "10",
  "PA9": "11",
  "PA10": "12",
  "PA13": "13",
  "PA14": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", PA0: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", VSS: "power_in", VDD: "power_in", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L021D4Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 2KB RAM, 16 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L021F4Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l021f4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32L021F4Px extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L021F4Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 16 GPIO, UFQFPN20
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L021F4Ux`. Reference prefix: `U`.
 * Footprint filters: ST*UFQFPN*3x3mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l021f4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:ST_UFQFPN-20_3x3mm_P0.5mm.
 */
export class STM32L021F4Ux extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "NRST": "3",
  "VDDA": "4",
  "PA0": "5",
  "PA1": "6",
  "PA4": "7",
  "PA5": "8",
  "PA6": "9",
  "PA7": "10",
  "PB1": "11",
  "VSS": "12",
  "VDD": "13",
  "PA9": "14",
  "PA10": "15",
  "PA13": "16",
  "PA14": "17",
  "PB6": "18",
  "PB7": "19",
  "PB9": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L021F4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 24 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L021G4Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l021g4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32L021G4Ux extends Component.withPins({
  "PB9": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L021G4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 2KB RAM, 32 MHz, 1.65-3.6V, 26 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L021K4Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l021k4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L021K4Tx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  "PB9": "31",
  "VSS_32": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L021K4Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 2KB RAM, 28 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L021K4Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l021k4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L021K4Ux extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  "PB9": "31",
  "PB8": "32",
  "VSS": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L021K4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16-32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 38 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L031C_4-6_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l031c4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L031C_4_6_Tx extends Component.withPins({
  "PC0": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC0: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L031C_4-6_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 38 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L031C4Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l031c4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L031C4Tx extends Component.withPins({
  "PC0": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC0: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L031C4Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16-32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 38 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L031C_4-6_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l031c4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L031C_4_6_Ux extends Component.withPins({
  "PC0": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC0: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L031C_4-6_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 38 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L031C4Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l031c4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L031C4Ux extends Component.withPins({
  "PC0": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC0: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L031C4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 38 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L031C6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l031c6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L031C6Tx extends Component.withPins({
  "PC0": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC0: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L031C6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 38 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L031C6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l031c6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L031C6Ux extends Component.withPins({
  "PC0": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC0: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L031C6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16-32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 20 GPIO, WLCSP25
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L031E_4-6_Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die425*.
 * @see https://www.st.com/resource/en/datasheet/stm32l031e4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_CSP:ST_WLCSP-25_Die425.
 */
export class STM32L031E_4_6_Yx extends Component.withPins({
  "PA13": "A1",
  "PA14": "A2",
  "PB6": "A3",
  "PB7": "A4",
  "BOOT0": "A5",
  "PA9": "B1",
  "PB3": "B2",
  "PA4": "B3",
  "PA1": "B4",
  "PC14": "B5",
  "PA8": "C1",
  "PA10": "C2",
  "PA7": "C3",
  "VDDA": "C4",
  "PC15": "C5",
  "VDD": "D1",
  "PB1": "D2",
  "PA5": "D3",
  "PA2": "D4",
  "NRST": "D5",
  "VSSA": "E1",
  "PB0": "E2",
  "PA6": "E3",
  "PA3": "E4",
  "PA0": "E5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA13: "bidirectional", PA14: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PA9: "bidirectional", PB3: "bidirectional", PA4: "bidirectional", PA1: "bidirectional", PC14: "bidirectional", PA8: "bidirectional", PA10: "bidirectional", PA7: "bidirectional", VDDA: "power_in", PC15: "bidirectional", VDD: "power_in", PB1: "bidirectional", PA5: "bidirectional", PA2: "bidirectional", NRST: "input", VSSA: "power_in", PB0: "bidirectional", PA6: "bidirectional", PA3: "bidirectional", PA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L031E_4-6_Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 20 GPIO, WLCSP25
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L031E4Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die425*.
 * @see https://www.st.com/resource/en/datasheet/stm32l031e4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_CSP:ST_WLCSP-25_Die425.
 */
export class STM32L031E4Yx extends Component.withPins({
  "PA13": "A1",
  "PA14": "A2",
  "PB6": "A3",
  "PB7": "A4",
  "BOOT0": "A5",
  "PA9": "B1",
  "PB3": "B2",
  "PA4": "B3",
  "PA1": "B4",
  "PC14": "B5",
  "PA8": "C1",
  "PA10": "C2",
  "PA7": "C3",
  "VDDA": "C4",
  "PC15": "C5",
  "VDD": "D1",
  "PB1": "D2",
  "PA5": "D3",
  "PA2": "D4",
  "NRST": "D5",
  "VSSA": "E1",
  "PB0": "E2",
  "PA6": "E3",
  "PA3": "E4",
  "PA0": "E5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA13: "bidirectional", PA14: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PA9: "bidirectional", PB3: "bidirectional", PA4: "bidirectional", PA1: "bidirectional", PC14: "bidirectional", PA8: "bidirectional", PA10: "bidirectional", PA7: "bidirectional", VDDA: "power_in", PC15: "bidirectional", VDD: "power_in", PB1: "bidirectional", PA5: "bidirectional", PA2: "bidirectional", NRST: "input", VSSA: "power_in", PB0: "bidirectional", PA6: "bidirectional", PA3: "bidirectional", PA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L031E4Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 20 GPIO, WLCSP25
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L031E6Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die425*.
 * @see https://www.st.com/resource/en/datasheet/stm32l031e6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_CSP:ST_WLCSP-25_Die425.
 */
export class STM32L031E6Yx extends Component.withPins({
  "PA13": "A1",
  "PA14": "A2",
  "PB6": "A3",
  "PB7": "A4",
  "BOOT0": "A5",
  "PA9": "B1",
  "PB3": "B2",
  "PA4": "B3",
  "PA1": "B4",
  "PC14": "B5",
  "PA8": "C1",
  "PA10": "C2",
  "PA7": "C3",
  "VDDA": "C4",
  "PC15": "C5",
  "VDD": "D1",
  "PB1": "D2",
  "PA5": "D3",
  "PA2": "D4",
  "NRST": "D5",
  "VSSA": "E1",
  "PB0": "E2",
  "PA6": "E3",
  "PA3": "E4",
  "PA0": "E5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA13: "bidirectional", PA14: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PA9: "bidirectional", PB3: "bidirectional", PA4: "bidirectional", PA1: "bidirectional", PC14: "bidirectional", PA8: "bidirectional", PA10: "bidirectional", PA7: "bidirectional", VDDA: "power_in", PC15: "bidirectional", VDD: "power_in", PB1: "bidirectional", PA5: "bidirectional", PA2: "bidirectional", NRST: "input", VSSA: "power_in", PB0: "bidirectional", PA6: "bidirectional", PA3: "bidirectional", PA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L031E6Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16-32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 15 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L031F_4-6_Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l031f4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32L031F_4_6_Px extends Component.withPins({
  "BOOT0": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BOOT0: "input", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L031F_4-6_Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 15 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L031F4Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l031f4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32L031F4Px extends Component.withPins({
  "BOOT0": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BOOT0: "input", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L031F4Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 15 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L031F6Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l031f6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32L031F6Px extends Component.withPins({
  "BOOT0": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BOOT0: "input", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L031F6Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16-32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 21 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L031G_4-6_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l031g4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32L031G_4_6_Ux extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  "PA13": "21",
  "PA14": "22",
  "PA15": "23",
  "PB3": "24",
  "PB6": "25",
  "PB7": "26",
  "BOOT0": "27",
  "VSS_28": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_28: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L031G_4-6_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 21 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L031G4Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l031g4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32L031G4Ux extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  "PA13": "21",
  "PA14": "22",
  "PA15": "23",
  "PB3": "24",
  "PB6": "25",
  "PB7": "26",
  "BOOT0": "27",
  "VSS_28": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_28: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L031G4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 21 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L031G6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l031g6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32L031G6Ux extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  "PA13": "21",
  "PA14": "22",
  "PA15": "23",
  "PB3": "24",
  "PB6": "25",
  "PB7": "26",
  "BOOT0": "27",
  "VSS_28": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_28: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L031G6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 23 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L031G6UxS`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l031g6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32L031G6UxS extends Component.withPins({
  "BOOT0": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BOOT0: "input", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L031G6UxS";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16-32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L031K_4-6_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l031k4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L031K_4_6_Tx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L031K_4-6_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L031K4Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l031k4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L031K4Tx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L031K4Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16-32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 27 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L031K_4-6_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l031k4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L031K_4_6_Ux extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L031K_4-6_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 27 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L031K4Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l031k4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L031K4Ux extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L031K4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L031K6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l031k6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L031K6Tx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L031K6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 27 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L031K6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l031k6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L031K6Ux extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L031K6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16-32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 38 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L041C_4-6_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l041c4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L041C_4_6_Tx extends Component.withPins({
  "PC0": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC0: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L041C_4-6_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 38 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L041C4Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l041c4.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L041C4Tx extends Component.withPins({
  "PC0": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC0: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L041C4Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 38 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L041C6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l041c6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L041C6Tx extends Component.withPins({
  "PC0": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC0: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L041C6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 38 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L041C6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l041c6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L041C6Ux extends Component.withPins({
  "PC0": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC0: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L041C6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 20 GPIO, WLCSP25
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L041E6Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die425*.
 * @see https://www.st.com/resource/en/datasheet/stm32l041e6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_CSP:ST_WLCSP-25_Die425.
 */
export class STM32L041E6Yx extends Component.withPins({
  "PA13": "A1",
  "PA14": "A2",
  "PB6": "A3",
  "PB7": "A4",
  "BOOT0": "A5",
  "PA9": "B1",
  "PB3": "B2",
  "PA4": "B3",
  "PA1": "B4",
  "PC14": "B5",
  "PA8": "C1",
  "PA10": "C2",
  "PA7": "C3",
  "VDDA": "C4",
  "PC15": "C5",
  "VDD": "D1",
  "PB1": "D2",
  "PA5": "D3",
  "PA2": "D4",
  "NRST": "D5",
  "VSSA": "E1",
  "PB0": "E2",
  "PA6": "E3",
  "PA3": "E4",
  "PA0": "E5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA13: "bidirectional", PA14: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PA9: "bidirectional", PB3: "bidirectional", PA4: "bidirectional", PA1: "bidirectional", PC14: "bidirectional", PA8: "bidirectional", PA10: "bidirectional", PA7: "bidirectional", VDDA: "power_in", PC15: "bidirectional", VDD: "power_in", PB1: "bidirectional", PA5: "bidirectional", PA2: "bidirectional", NRST: "input", VSSA: "power_in", PB0: "bidirectional", PA6: "bidirectional", PA3: "bidirectional", PA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L041E6Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 15 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L041F6Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l041f6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32L041F6Px extends Component.withPins({
  "BOOT0": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BOOT0: "input", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L041F6Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 21 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L041G6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l041g6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32L041G6Ux extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  "PA13": "21",
  "PA14": "22",
  "PA15": "23",
  "PB3": "24",
  "PB6": "25",
  "PB7": "26",
  "BOOT0": "27",
  "VSS_28": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_28: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L041G6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 23 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L041G6UxS`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l041g6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32L041G6UxS extends Component.withPins({
  "BOOT0": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BOOT0: "input", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L041G6UxS";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L041K6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l041k6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L041K6Tx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L041K6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 27 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L041K6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l041k6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L041K6Ux extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L041K6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L051C_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l051c6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L051C_6_8_Tx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L051C_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L051C6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l051c6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L051C6Tx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L051C6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L051C_6-8_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l051c6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L051C_6_8_Ux extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L051C_6-8_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L051C6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l051c6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L051C6Ux extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L051C6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L051C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l051c8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L051C8Tx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L051C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L051C8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l051c8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L051C8Ux extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L051C8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L051K_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l051k6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L051K_6_8_Tx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L051K_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L051K6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l051k6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L051K6Tx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L051K6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 27 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L051K_6-8_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l051k6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L051K_6_8_Ux extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L051K_6-8_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 27 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L051K6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l051k6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L051K6Ux extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L051K6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L051K8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l051k8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L051K8Tx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L051K8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 27 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L051K8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l051k8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L051K8Ux extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L051K8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, TFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L051R_6-8_Hx`. Reference prefix: `U`.
 * Footprint filters: TFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l051r6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_BGA:TFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L051R_6_8_Hx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VDD_B2": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VDDIO2": "E5",
  "VDD_E6": "E6",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VDD_B2: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDDIO2: "power_in", VDD_E6: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L051R_6-8_Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, TFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L051R6Hx`. Reference prefix: `U`.
 * Footprint filters: TFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l051r6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_BGA:TFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L051R6Hx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VDD_B2": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VDDIO2": "E5",
  "VDD_E6": "E6",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VDD_B2: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDDIO2: "power_in", VDD_E6: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L051R6Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L051R_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l051r6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32L051R_6_8_Tx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L051R_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L051R6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l051r6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32L051R6Tx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L051R6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, TFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L051R8Hx`. Reference prefix: `U`.
 * Footprint filters: TFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l051r8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_BGA:TFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L051R8Hx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VDD_B2": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VDDIO2": "E5",
  "VDD_E6": "E6",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VDD_B2: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDDIO2: "power_in", VDD_E6: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L051R8Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L051R8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l051r8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32L051R8Tx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L051R8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 29 GPIO, WLCSP36
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L051T_6-8_Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die417*.
 * @see https://www.st.com/resource/en/datasheet/stm32l051t6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_CSP:ST_WLCSP-36_Die417.
 */
export class STM32L051T_6_8_Yx extends Component.withPins({
  "PA13": "A1",
  "PA15": "A2",
  "PB4": "A3",
  "PB7": "A4",
  "VDD_A5": "A5",
  "PC14": "A6",
  "PA12": "B1",
  "PA14": "B2",
  "PB3": "B3",
  "PB6": "B4",
  "PB8": "B5",
  "PC15": "B6",
  "PA10": "C1",
  "PA11": "C2",
  "PB1": "C3",
  "PB5": "C4",
  "BOOT0": "C5",
  "NRST": "C6",
  "PA9": "D1",
  "PB11": "D2",
  "PB0": "D3",
  "PA0": "D4",
  "VDDA": "D5",
  "VSS": "D6",
  "PA8": "E1",
  "PB10": "E2",
  "PA6": "E3",
  "PA4": "E4",
  "PA2": "E5",
  "VREF+": "E6",
  "VDD_F1": "F1",
  "PB2": "F2",
  "PA7": "F3",
  "PA5": "F4",
  "PA3": "F5",
  "PA1": "F6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA13: "bidirectional", PA15: "bidirectional", PB4: "bidirectional", PB7: "bidirectional", VDD_A5: "power_in", PC14: "bidirectional", PA12: "bidirectional", PA14: "bidirectional", PB3: "bidirectional", PB6: "bidirectional", PB8: "bidirectional", PC15: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PB1: "bidirectional", PB5: "bidirectional", BOOT0: "input", NRST: "input", PA9: "bidirectional", PB11: "bidirectional", PB0: "bidirectional", PA0: "bidirectional", VDDA: "power_in", VSS: "power_in", PA8: "bidirectional", PB10: "bidirectional", PA6: "bidirectional", PA4: "bidirectional", PA2: "bidirectional", "VREF+": "input", VDD_F1: "power_in", PB2: "bidirectional", PA7: "bidirectional", PA5: "bidirectional", PA3: "bidirectional", PA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L051T_6-8_Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 29 GPIO, WLCSP36
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L051T6Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die417*.
 * @see https://www.st.com/resource/en/datasheet/stm32l051t6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_CSP:ST_WLCSP-36_Die417.
 */
export class STM32L051T6Yx extends Component.withPins({
  "PA13": "A1",
  "PA15": "A2",
  "PB4": "A3",
  "PB7": "A4",
  "VDD_A5": "A5",
  "PC14": "A6",
  "PA12": "B1",
  "PA14": "B2",
  "PB3": "B3",
  "PB6": "B4",
  "PB8": "B5",
  "PC15": "B6",
  "PA10": "C1",
  "PA11": "C2",
  "PB1": "C3",
  "PB5": "C4",
  "BOOT0": "C5",
  "NRST": "C6",
  "PA9": "D1",
  "PB11": "D2",
  "PB0": "D3",
  "PA0": "D4",
  "VDDA": "D5",
  "VSS": "D6",
  "PA8": "E1",
  "PB10": "E2",
  "PA6": "E3",
  "PA4": "E4",
  "PA2": "E5",
  "VREF+": "E6",
  "VDD_F1": "F1",
  "PB2": "F2",
  "PA7": "F3",
  "PA5": "F4",
  "PA3": "F5",
  "PA1": "F6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA13: "bidirectional", PA15: "bidirectional", PB4: "bidirectional", PB7: "bidirectional", VDD_A5: "power_in", PC14: "bidirectional", PA12: "bidirectional", PA14: "bidirectional", PB3: "bidirectional", PB6: "bidirectional", PB8: "bidirectional", PC15: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PB1: "bidirectional", PB5: "bidirectional", BOOT0: "input", NRST: "input", PA9: "bidirectional", PB11: "bidirectional", PB0: "bidirectional", PA0: "bidirectional", VDDA: "power_in", VSS: "power_in", PA8: "bidirectional", PB10: "bidirectional", PA6: "bidirectional", PA4: "bidirectional", PA2: "bidirectional", "VREF+": "input", VDD_F1: "power_in", PB2: "bidirectional", PA7: "bidirectional", PA5: "bidirectional", PA3: "bidirectional", PA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L051T6Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 29 GPIO, WLCSP36
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L051T8Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die417*.
 * @see https://www.st.com/resource/en/datasheet/stm32l051t8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_CSP:ST_WLCSP-36_Die417.
 */
export class STM32L051T8Yx extends Component.withPins({
  "PA13": "A1",
  "PA15": "A2",
  "PB4": "A3",
  "PB7": "A4",
  "VDD_A5": "A5",
  "PC14": "A6",
  "PA12": "B1",
  "PA14": "B2",
  "PB3": "B3",
  "PB6": "B4",
  "PB8": "B5",
  "PC15": "B6",
  "PA10": "C1",
  "PA11": "C2",
  "PB1": "C3",
  "PB5": "C4",
  "BOOT0": "C5",
  "NRST": "C6",
  "PA9": "D1",
  "PB11": "D2",
  "PB0": "D3",
  "PA0": "D4",
  "VDDA": "D5",
  "VSS": "D6",
  "PA8": "E1",
  "PB10": "E2",
  "PA6": "E3",
  "PA4": "E4",
  "PA2": "E5",
  "VREF+": "E6",
  "VDD_F1": "F1",
  "PB2": "F2",
  "PA7": "F3",
  "PA5": "F4",
  "PA3": "F5",
  "PA1": "F6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA13: "bidirectional", PA15: "bidirectional", PB4: "bidirectional", PB7: "bidirectional", VDD_A5: "power_in", PC14: "bidirectional", PA12: "bidirectional", PA14: "bidirectional", PB3: "bidirectional", PB6: "bidirectional", PB8: "bidirectional", PC15: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PB1: "bidirectional", PB5: "bidirectional", BOOT0: "input", NRST: "input", PA9: "bidirectional", PB11: "bidirectional", PB0: "bidirectional", PA0: "bidirectional", VDDA: "power_in", VSS: "power_in", PA8: "bidirectional", PB10: "bidirectional", PA6: "bidirectional", PA4: "bidirectional", PA2: "bidirectional", "VREF+": "input", VDD_F1: "power_in", PB2: "bidirectional", PA7: "bidirectional", PA5: "bidirectional", PA3: "bidirectional", PA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L051T8Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L052C_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l052c6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L052C_6_8_Tx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L052C_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L052C6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l052c6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L052C6Tx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L052C6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L052C_6-8_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l052c6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L052C_6_8_Ux extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L052C_6-8_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L052C6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l052c6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L052C6Ux extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L052C6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L052C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l052c8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L052C8Tx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L052C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L052C8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l052c8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L052C8Ux extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L052C8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L052K_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l052k6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L052K_6_8_Tx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L052K_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L052K6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l052k6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L052K6Tx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L052K6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 27 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L052K_6-8_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l052k6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L052K_6_8_Ux extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L052K_6-8_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 27 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L052K6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l052k6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L052K6Ux extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L052K6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L052K8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l052k8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L052K8Tx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L052K8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 27 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L052K8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l052k8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L052K8Ux extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L052K8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, TFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L052R_6-8_Hx`. Reference prefix: `U`.
 * Footprint filters: TFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l052r6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_BGA:TFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L052R_6_8_Hx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VDD_B2": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VDD_USB": "E6",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VDD_B2: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDD_USB: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L052R_6-8_Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, TFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L052R6Hx`. Reference prefix: `U`.
 * Footprint filters: TFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l052r6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_BGA:TFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L052R6Hx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VDD_B2": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VDD_USB": "E6",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VDD_B2: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDD_USB: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L052R6Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L052R_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l052r6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32L052R_6_8_Tx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "48",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L052R_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L052R6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l052r6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32L052R6Tx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "48",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L052R6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, TFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L052R8Hx`. Reference prefix: `U`.
 * Footprint filters: TFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l052r8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_BGA:TFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L052R8Hx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VDD_B2": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VDD_USB": "E6",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VDD_B2: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDD_USB: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L052R8Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L052R8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l052r8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32L052R8Tx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "48",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L052R8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 29 GPIO, WLCSP36
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L052T_6-8_Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die417*.
 * @see https://www.st.com/resource/en/datasheet/stm32l052t6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_CSP:ST_WLCSP-36_Die417.
 */
export class STM32L052T_6_8_Yx extends Component.withPins({
  "PA13": "A1",
  "PA15": "A2",
  "PB4": "A3",
  "PB7": "A4",
  "VDD_A5": "A5",
  "PC14": "A6",
  "PA12": "B1",
  "PA14": "B2",
  "PB3": "B3",
  "PB6": "B4",
  "PB8": "B5",
  "PC15": "B6",
  "PA10": "C1",
  "PA11": "C2",
  "PB1": "C3",
  "PB5": "C4",
  "BOOT0": "C5",
  "NRST": "C6",
  "PA9": "D1",
  "PB11": "D2",
  "PB0": "D3",
  "PA0": "D4",
  "VDDA": "D5",
  "VSS": "D6",
  "PA8": "E1",
  "PB10": "E2",
  "PA6": "E3",
  "PA4": "E4",
  "PA2": "E5",
  "VREF+": "E6",
  "VDD_F1": "F1",
  "PB2": "F2",
  "PA7": "F3",
  "PA5": "F4",
  "PA3": "F5",
  "PA1": "F6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA13: "bidirectional", PA15: "bidirectional", PB4: "bidirectional", PB7: "bidirectional", VDD_A5: "power_in", PC14: "bidirectional", PA12: "bidirectional", PA14: "bidirectional", PB3: "bidirectional", PB6: "bidirectional", PB8: "bidirectional", PC15: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PB1: "bidirectional", PB5: "bidirectional", BOOT0: "input", NRST: "input", PA9: "bidirectional", PB11: "bidirectional", PB0: "bidirectional", PA0: "bidirectional", VDDA: "power_in", VSS: "power_in", PA8: "bidirectional", PB10: "bidirectional", PA6: "bidirectional", PA4: "bidirectional", PA2: "bidirectional", "VREF+": "input", VDD_F1: "power_in", PB2: "bidirectional", PA7: "bidirectional", PA5: "bidirectional", PA3: "bidirectional", PA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L052T_6-8_Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 29 GPIO, WLCSP36
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L052T6Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die417*.
 * @see https://www.st.com/resource/en/datasheet/stm32l052t6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_CSP:ST_WLCSP-36_Die417.
 */
export class STM32L052T6Yx extends Component.withPins({
  "PA13": "A1",
  "PA15": "A2",
  "PB4": "A3",
  "PB7": "A4",
  "VDD_A5": "A5",
  "PC14": "A6",
  "PA12": "B1",
  "PA14": "B2",
  "PB3": "B3",
  "PB6": "B4",
  "PB8": "B5",
  "PC15": "B6",
  "PA10": "C1",
  "PA11": "C2",
  "PB1": "C3",
  "PB5": "C4",
  "BOOT0": "C5",
  "NRST": "C6",
  "PA9": "D1",
  "PB11": "D2",
  "PB0": "D3",
  "PA0": "D4",
  "VDDA": "D5",
  "VSS": "D6",
  "PA8": "E1",
  "PB10": "E2",
  "PA6": "E3",
  "PA4": "E4",
  "PA2": "E5",
  "VREF+": "E6",
  "VDD_F1": "F1",
  "PB2": "F2",
  "PA7": "F3",
  "PA5": "F4",
  "PA3": "F5",
  "PA1": "F6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA13: "bidirectional", PA15: "bidirectional", PB4: "bidirectional", PB7: "bidirectional", VDD_A5: "power_in", PC14: "bidirectional", PA12: "bidirectional", PA14: "bidirectional", PB3: "bidirectional", PB6: "bidirectional", PB8: "bidirectional", PC15: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PB1: "bidirectional", PB5: "bidirectional", BOOT0: "input", NRST: "input", PA9: "bidirectional", PB11: "bidirectional", PB0: "bidirectional", PA0: "bidirectional", VDDA: "power_in", VSS: "power_in", PA8: "bidirectional", PB10: "bidirectional", PA6: "bidirectional", PA4: "bidirectional", PA2: "bidirectional", "VREF+": "input", VDD_F1: "power_in", PB2: "bidirectional", PA7: "bidirectional", PA5: "bidirectional", PA3: "bidirectional", PA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L052T6Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 29 GPIO, WLCSP36
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L052T8Fx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die417*.
 * @see https://www.st.com/resource/en/datasheet/stm32l052t8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_CSP:ST_WLCSP-36_Die417.
 */
export class STM32L052T8Fx extends Component.withPins({
  "PA13": "A1",
  "PA15": "A2",
  "PB4": "A3",
  "PB7": "A4",
  "VDD_A5": "A5",
  "PC14": "A6",
  "PA12": "B1",
  "PA14": "B2",
  "PB3": "B3",
  "PB6": "B4",
  "PB8": "B5",
  "PC15": "B6",
  "PA10": "C1",
  "PA11": "C2",
  "PB1": "C3",
  "PB5": "C4",
  "BOOT0": "C5",
  "NRST": "C6",
  "PA9": "D1",
  "PB11": "D2",
  "PB0": "D3",
  "PA0": "D4",
  "VDDA": "D5",
  "VSS": "D6",
  "PA8": "E1",
  "PB10": "E2",
  "PA6": "E3",
  "PA4": "E4",
  "PA2": "E5",
  "VREF+": "E6",
  "VDD_F1": "F1",
  "PB2": "F2",
  "PA7": "F3",
  "PA5": "F4",
  "PA3": "F5",
  "PA1": "F6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA13: "bidirectional", PA15: "bidirectional", PB4: "bidirectional", PB7: "bidirectional", VDD_A5: "power_in", PC14: "bidirectional", PA12: "bidirectional", PA14: "bidirectional", PB3: "bidirectional", PB6: "bidirectional", PB8: "bidirectional", PC15: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PB1: "bidirectional", PB5: "bidirectional", BOOT0: "input", NRST: "input", PA9: "bidirectional", PB11: "bidirectional", PB0: "bidirectional", PA0: "bidirectional", VDDA: "power_in", VSS: "power_in", PA8: "bidirectional", PB10: "bidirectional", PA6: "bidirectional", PA4: "bidirectional", PA2: "bidirectional", "VREF+": "input", VDD_F1: "power_in", PB2: "bidirectional", PA7: "bidirectional", PA5: "bidirectional", PA3: "bidirectional", PA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L052T8Fx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 29 GPIO, WLCSP36
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L052T8Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die417*.
 * @see https://www.st.com/resource/en/datasheet/stm32l052t8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_CSP:ST_WLCSP-36_Die417.
 */
export class STM32L052T8Yx extends Component.withPins({
  "PA13": "A1",
  "PA15": "A2",
  "PB4": "A3",
  "PB7": "A4",
  "VDD_A5": "A5",
  "PC14": "A6",
  "PA12": "B1",
  "PA14": "B2",
  "PB3": "B3",
  "PB6": "B4",
  "PB8": "B5",
  "PC15": "B6",
  "PA10": "C1",
  "PA11": "C2",
  "PB1": "C3",
  "PB5": "C4",
  "BOOT0": "C5",
  "NRST": "C6",
  "PA9": "D1",
  "PB11": "D2",
  "PB0": "D3",
  "PA0": "D4",
  "VDDA": "D5",
  "VSS": "D6",
  "PA8": "E1",
  "PB10": "E2",
  "PA6": "E3",
  "PA4": "E4",
  "PA2": "E5",
  "VREF+": "E6",
  "VDD_F1": "F1",
  "PB2": "F2",
  "PA7": "F3",
  "PA5": "F4",
  "PA3": "F5",
  "PA1": "F6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA13: "bidirectional", PA15: "bidirectional", PB4: "bidirectional", PB7: "bidirectional", VDD_A5: "power_in", PC14: "bidirectional", PA12: "bidirectional", PA14: "bidirectional", PB3: "bidirectional", PB6: "bidirectional", PB8: "bidirectional", PC15: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PB1: "bidirectional", PB5: "bidirectional", BOOT0: "input", NRST: "input", PA9: "bidirectional", PB11: "bidirectional", PB0: "bidirectional", PA0: "bidirectional", VDDA: "power_in", VSS: "power_in", PA8: "bidirectional", PB10: "bidirectional", PA6: "bidirectional", PA4: "bidirectional", PA2: "bidirectional", "VREF+": "input", VDD_F1: "power_in", PB2: "bidirectional", PA7: "bidirectional", PA5: "bidirectional", PA3: "bidirectional", PA1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L052T8Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L053C_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l053c6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L053C_6_8_Tx extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L053C_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L053C6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l053c6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L053C6Tx extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L053C6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L053C_6-8_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l053c6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L053C_6_8_Ux extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L053C_6-8_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L053C6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l053c6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L053C6Ux extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L053C6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L053C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l053c8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L053C8Tx extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L053C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L053C8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l053c8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L053C8Ux extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L053C8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, TFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L053R_6-8_Hx`. Reference prefix: `U`.
 * Footprint filters: TFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l053r6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_BGA:TFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L053R_6_8_Hx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VLCD": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VDD_USB": "E6",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VLCD: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDD_USB: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L053R_6-8_Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, TFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L053R6Hx`. Reference prefix: `U`.
 * Footprint filters: TFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l053r6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_BGA:TFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L053R6Hx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VLCD": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VDD_USB": "E6",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VLCD: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDD_USB: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L053R6Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32-64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L053R_6-8_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l053r6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32L053R_6_8_Tx extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "48",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L053R_6-8_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L053R6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l053r6.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32L053R6Tx extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "48",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L053R6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, TFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L053R8Hx`. Reference prefix: `U`.
 * Footprint filters: TFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l053r8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_BGA:TFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L053R8Hx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VLCD": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VDD_USB": "E6",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VLCD: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDD_USB: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L053R8Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L053R8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l053r8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32L053R8Tx extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "48",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L053R8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L062C8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l062c8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L062C8Ux extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L062C8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L062K8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l062k8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L062K8Tx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L062K8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 27 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L062K8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l062k8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L062K8Ux extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L062K8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L063C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l063c8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L063C8Tx extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L063C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L063C8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l063c8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L063C8Ux extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L063C8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 8KB RAM, 32 MHz, 1.65-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L063R8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l063r8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32L063R8Tx extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "48",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L063R8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071c8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L071C8Tx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071C8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071c8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L071C8Ux extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071C8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071C_B-Z_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071cb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L071C_B_Z_Tx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071C_B-Z_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071CBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071cb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L071CBTx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071CBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071C_B-Z_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071cb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L071C_B_Z_Ux extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071C_B-Z_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071CBUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071cb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L071CBUx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071CBUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 40 GPIO, WLCSP49
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071C_B-Z_Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die447*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071cb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_CSP:ST_WLCSP-49_Die447.
 */
export class STM32L071C_B_Z_Yx extends Component.withPins({
  "VDDIO2": "A1",
  "PA15": "A2",
  "PB3": "A3",
  "PB5": "A4",
  "BOOT0": "A5",
  "PB9": "A6",
  "VDD_A7": "A7",
  "PA12": "B1",
  "PA14": "B2",
  "PB4": "B3",
  "PB6": "B4",
  "PB8": "B5",
  "VDD_B6": "B6",
  "PC13": "B7",
  "PA10": "C1",
  "PA13": "C2",
  "PB7": "C3",
  "PC1": "C4",
  "PC0": "C5",
  "PC14": "C6",
  "PC15": "C7",
  "PA8": "D1",
  "PA11": "D2",
  "PB1": "D3",
  "VSS": "D4",
  "NRST": "D5",
  "PH0": "D6",
  "PH1": "D7",
  "PB15": "E1",
  "PA9": "E2",
  "PB2": "E3",
  "PA1": "E4",
  "PA0": "E5",
  "VREF+": "E6",
  "PC2": "E7",
  "PB14": "F1",
  "PB13": "F2",
  "PB11": "F3",
  "PA7": "F4",
  "PA4": "F5",
  "PA2": "F6",
  "VDDA": "F7",
  "PB12": "G1",
  "VDD_G2": "G2",
  "PB10": "G3",
  "PB0": "G4",
  "PA6": "G5",
  "PA5": "G6",
  "PA3": "G7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDDIO2: "power_in", PA15: "bidirectional", PB3: "bidirectional", PB5: "bidirectional", BOOT0: "input", PB9: "bidirectional", VDD_A7: "power_in", PA12: "bidirectional", PA14: "bidirectional", PB4: "bidirectional", PB6: "bidirectional", PB8: "bidirectional", VDD_B6: "power_in", PC13: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PB7: "bidirectional", PC1: "bidirectional", PC0: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PA8: "bidirectional", PA11: "bidirectional", PB1: "bidirectional", VSS: "power_in", NRST: "input", PH0: "bidirectional", PH1: "bidirectional", PB15: "bidirectional", PA9: "bidirectional", PB2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", "VREF+": "input", PC2: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", PB11: "bidirectional", PA7: "bidirectional", PA4: "bidirectional", PA2: "bidirectional", VDDA: "power_in", PB12: "bidirectional", VDD_G2: "power_in", PB10: "bidirectional", PB0: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071C_B-Z_Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 40 GPIO, WLCSP49
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071CBYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die447*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071cb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_CSP:ST_WLCSP-49_Die447.
 */
export class STM32L071CBYx extends Component.withPins({
  "VDDIO2": "A1",
  "PA15": "A2",
  "PB3": "A3",
  "PB5": "A4",
  "BOOT0": "A5",
  "PB9": "A6",
  "VDD_A7": "A7",
  "PA12": "B1",
  "PA14": "B2",
  "PB4": "B3",
  "PB6": "B4",
  "PB8": "B5",
  "VDD_B6": "B6",
  "PC13": "B7",
  "PA10": "C1",
  "PA13": "C2",
  "PB7": "C3",
  "PC1": "C4",
  "PC0": "C5",
  "PC14": "C6",
  "PC15": "C7",
  "PA8": "D1",
  "PA11": "D2",
  "PB1": "D3",
  "VSS": "D4",
  "NRST": "D5",
  "PH0": "D6",
  "PH1": "D7",
  "PB15": "E1",
  "PA9": "E2",
  "PB2": "E3",
  "PA1": "E4",
  "PA0": "E5",
  "VREF+": "E6",
  "PC2": "E7",
  "PB14": "F1",
  "PB13": "F2",
  "PB11": "F3",
  "PA7": "F4",
  "PA4": "F5",
  "PA2": "F6",
  "VDDA": "F7",
  "PB12": "G1",
  "VDD_G2": "G2",
  "PB10": "G3",
  "PB0": "G4",
  "PA6": "G5",
  "PA5": "G6",
  "PA3": "G7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDDIO2: "power_in", PA15: "bidirectional", PB3: "bidirectional", PB5: "bidirectional", BOOT0: "input", PB9: "bidirectional", VDD_A7: "power_in", PA12: "bidirectional", PA14: "bidirectional", PB4: "bidirectional", PB6: "bidirectional", PB8: "bidirectional", VDD_B6: "power_in", PC13: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PB7: "bidirectional", PC1: "bidirectional", PC0: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PA8: "bidirectional", PA11: "bidirectional", PB1: "bidirectional", VSS: "power_in", NRST: "input", PH0: "bidirectional", PH1: "bidirectional", PB15: "bidirectional", PA9: "bidirectional", PB2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", "VREF+": "input", PC2: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", PB11: "bidirectional", PA7: "bidirectional", PA4: "bidirectional", PA2: "bidirectional", VDDA: "power_in", PB12: "bidirectional", VDD_G2: "power_in", PB10: "bidirectional", PB0: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071CBYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071CZTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071cz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L071CZTx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071CZTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071CZUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071cz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L071CZUx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071CZUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 40 GPIO, WLCSP49
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071CZYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die447*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071cz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_CSP:ST_WLCSP-49_Die447.
 */
export class STM32L071CZYx extends Component.withPins({
  "VDDIO2": "A1",
  "PA15": "A2",
  "PB3": "A3",
  "PB5": "A4",
  "BOOT0": "A5",
  "PB9": "A6",
  "VDD_A7": "A7",
  "PA12": "B1",
  "PA14": "B2",
  "PB4": "B3",
  "PB6": "B4",
  "PB8": "B5",
  "VDD_B6": "B6",
  "PC13": "B7",
  "PA10": "C1",
  "PA13": "C2",
  "PB7": "C3",
  "PC1": "C4",
  "PC0": "C5",
  "PC14": "C6",
  "PC15": "C7",
  "PA8": "D1",
  "PA11": "D2",
  "PB1": "D3",
  "VSS": "D4",
  "NRST": "D5",
  "PH0": "D6",
  "PH1": "D7",
  "PB15": "E1",
  "PA9": "E2",
  "PB2": "E3",
  "PA1": "E4",
  "PA0": "E5",
  "VREF+": "E6",
  "PC2": "E7",
  "PB14": "F1",
  "PB13": "F2",
  "PB11": "F3",
  "PA7": "F4",
  "PA4": "F5",
  "PA2": "F6",
  "VDDA": "F7",
  "PB12": "G1",
  "VDD_G2": "G2",
  "PB10": "G3",
  "PB0": "G4",
  "PA6": "G5",
  "PA5": "G6",
  "PA3": "G7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDDIO2: "power_in", PA15: "bidirectional", PB3: "bidirectional", PB5: "bidirectional", BOOT0: "input", PB9: "bidirectional", VDD_A7: "power_in", PA12: "bidirectional", PA14: "bidirectional", PB4: "bidirectional", PB6: "bidirectional", PB8: "bidirectional", VDD_B6: "power_in", PC13: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PB7: "bidirectional", PC1: "bidirectional", PC0: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PA8: "bidirectional", PA11: "bidirectional", PB1: "bidirectional", VSS: "power_in", NRST: "input", PH0: "bidirectional", PH1: "bidirectional", PB15: "bidirectional", PA9: "bidirectional", PB2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", "VREF+": "input", PC2: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", PB11: "bidirectional", PA7: "bidirectional", PA4: "bidirectional", PA2: "bidirectional", VDDA: "power_in", PB12: "bidirectional", VDD_G2: "power_in", PB10: "bidirectional", PB0: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071CZYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 23 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071K8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071k8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L071K8Ux extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "NRST": "3",
  "VSSA": "4",
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
  "VDDIO2": "24",
  "PA14": "25",
  "PB4": "26",
  "PB5": "27",
  "PB6": "28",
  "PB7": "29",
  "BOOT0": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDDIO2: "power_in", PA14: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_31: "passive", VDD_32: "power_in", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071K8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071K_B-Z_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071kb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L071K_B_Z_Tx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071K_B-Z_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071KBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071kb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L071KBTx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071KBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 23 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071K_B-Z_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071kb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L071K_B_Z_Ux extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "NRST": "3",
  "VSSA": "4",
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
  "VDDIO2": "24",
  "PA14": "25",
  "PB4": "26",
  "PB5": "27",
  "PB6": "28",
  "PB7": "29",
  "BOOT0": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDDIO2: "power_in", PA14: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_31: "passive", VDD_32: "power_in", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071K_B-Z_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 23 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071KBUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071kb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L071KBUx extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "NRST": "3",
  "VSSA": "4",
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
  "VDDIO2": "24",
  "PA14": "25",
  "PB4": "26",
  "PB5": "27",
  "PB6": "28",
  "PB7": "29",
  "BOOT0": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDDIO2: "power_in", PA14: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_31: "passive", VDD_32: "power_in", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071KBUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071KZTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071kz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L071KZTx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071KZTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 23 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071KZUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071kz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L071KZUx extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "NRST": "3",
  "VSSA": "4",
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
  "VDDIO2": "24",
  "PA14": "25",
  "PB4": "26",
  "PB5": "27",
  "PB6": "28",
  "PB7": "29",
  "BOOT0": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDDIO2: "power_in", PA14: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_31: "passive", VDD_32: "power_in", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071KZUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, TFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071R_B-Z_Hx`. Reference prefix: `U`.
 * Footprint filters: TFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071rb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_BGA:TFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L071R_B_Z_Hx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VDD_B2": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VDD_B2: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDDIO2: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071R_B-Z_Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, TFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071RBHx`. Reference prefix: `U`.
 * Footprint filters: TFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071rb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_BGA:TFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L071RBHx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VDD_B2": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VDD_B2: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDDIO2: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071RBHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071R_B-Z_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071rb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32L071R_B_Z_Tx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071R_B-Z_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071RBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071rb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32L071RBTx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071RBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, TFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071RZHx`. Reference prefix: `U`.
 * Footprint filters: TFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071rz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_BGA:TFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L071RZHx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VDD_B2": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VDD_B2: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDDIO2: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071RZHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071RZTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071rz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32L071RZTx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071RZTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 20KB RAM, 84 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071V8Ix`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071v8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32L071V8Ix extends Component.withPins({
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
  "VDD_C11": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VDD_E2": "E2",
  "VSS_E3": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PH0": "F1",
  "PH9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PH1": "G1",
  "PH10": "G2",
  "VDDIO2": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "VSSA": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VREF-": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", VDD_C11: "power_in", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VDD_E2: "power_in", VSS_E3: "passive", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PH0: "bidirectional", PH9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PH1: "bidirectional", PH10: "bidirectional", VDDIO2: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", VSSA: "power_in", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", "VREF-": "input", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071V8Ix";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071V8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071v8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32L071V8Tx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VDD_6": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PH9": "10",
  "PH10": "11",
  "PH0": "12",
  "PH1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "VSSA": "19",
  "VREF-": "20",
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
  "VDD_73": "73",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VDD_6: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH9: "bidirectional", PH10: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF-": "input", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_73: "power_in", VSS_74: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071V8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 84 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071V_B-Z_Ix`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071vb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32L071V_B_Z_Ix extends Component.withPins({
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
  "VDD_C11": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VDD_E2": "E2",
  "VSS_E3": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PH0": "F1",
  "PH9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PH1": "G1",
  "PH10": "G2",
  "VDDIO2": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "VSSA": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VREF-": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", VDD_C11: "power_in", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VDD_E2: "power_in", VSS_E3: "passive", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PH0: "bidirectional", PH9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PH1: "bidirectional", PH10: "bidirectional", VDDIO2: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", VSSA: "power_in", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", "VREF-": "input", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071V_B-Z_Ix";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 84 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071VBIx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071vb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32L071VBIx extends Component.withPins({
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
  "VDD_C11": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VDD_E2": "E2",
  "VSS_E3": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PH0": "F1",
  "PH9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PH1": "G1",
  "PH10": "G2",
  "VDDIO2": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "VSSA": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VREF-": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", VDD_C11: "power_in", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VDD_E2: "power_in", VSS_E3: "passive", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PH0: "bidirectional", PH9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PH1: "bidirectional", PH10: "bidirectional", VDDIO2: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", VSSA: "power_in", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", "VREF-": "input", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071VBIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071V_B-Z_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071vb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32L071V_B_Z_Tx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VDD_6": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PH9": "10",
  "PH10": "11",
  "PH0": "12",
  "PH1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "VSSA": "19",
  "VREF-": "20",
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
  "VDD_73": "73",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VDD_6: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH9: "bidirectional", PH10: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF-": "input", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_73: "power_in", VSS_74: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071V_B-Z_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071VBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071vb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32L071VBTx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VDD_6": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PH9": "10",
  "PH10": "11",
  "PH0": "12",
  "PH1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "VSSA": "19",
  "VREF-": "20",
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
  "VDD_73": "73",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VDD_6: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH9: "bidirectional", PH10: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF-": "input", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_73: "power_in", VSS_74: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071VBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 84 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071VZIx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071vz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32L071VZIx extends Component.withPins({
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
  "VDD_C11": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VDD_E2": "E2",
  "VSS_E3": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PH0": "F1",
  "PH9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PH1": "G1",
  "PH10": "G2",
  "VDDIO2": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "VSSA": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VREF-": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", VDD_C11: "power_in", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VDD_E2: "power_in", VSS_E3: "passive", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PH0: "bidirectional", PH9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PH1: "bidirectional", PH10: "bidirectional", VDDIO2: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", VSSA: "power_in", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", "VREF-": "input", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071VZIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L071VZTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l071vz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32L071VZTx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VDD_6": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PH9": "10",
  "PH10": "11",
  "PH0": "12",
  "PH1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "VSSA": "19",
  "VREF-": "20",
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
  "VDD_73": "73",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VDD_6: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH9: "bidirectional", PH10: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF-": "input", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_73: "power_in", VSS_74: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L071VZTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072C_B-Z_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072cb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L072C_B_Z_Tx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072C_B-Z_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072CBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072cb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L072CBTx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072CBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072C_B-Z_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072cb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L072C_B_Z_Ux extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072C_B-Z_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072CBUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072cb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L072CBUx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072CBUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 40 GPIO, WLCSP49
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072C_B-Z_Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die447*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072cb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_CSP:ST_WLCSP-49_Die447.
 */
export class STM32L072C_B_Z_Yx extends Component.withPins({
  "VDD_USB": "A1",
  "PA15": "A2",
  "PB3": "A3",
  "PB5": "A4",
  "BOOT0": "A5",
  "PB9": "A6",
  "VDD_A7": "A7",
  "PA12": "B1",
  "PA14": "B2",
  "PB4": "B3",
  "PB6": "B4",
  "PB8": "B5",
  "VDD_B6": "B6",
  "PC13": "B7",
  "PA10": "C1",
  "PA13": "C2",
  "PB7": "C3",
  "PC1": "C4",
  "PC0": "C5",
  "PC14": "C6",
  "PC15": "C7",
  "PA8": "D1",
  "PA11": "D2",
  "PB1": "D3",
  "VSS": "D4",
  "NRST": "D5",
  "PH0": "D6",
  "PH1": "D7",
  "PB15": "E1",
  "PA9": "E2",
  "PB2": "E3",
  "PA1": "E4",
  "PA0": "E5",
  "VREF+": "E6",
  "PC2": "E7",
  "PB14": "F1",
  "PB13": "F2",
  "PB11": "F3",
  "PA7": "F4",
  "PA4": "F5",
  "PA2": "F6",
  "VDDA": "F7",
  "PB12": "G1",
  "VDD_G2": "G2",
  "PB10": "G3",
  "PB0": "G4",
  "PA6": "G5",
  "PA5": "G6",
  "PA3": "G7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_USB: "power_in", PA15: "bidirectional", PB3: "bidirectional", PB5: "bidirectional", BOOT0: "input", PB9: "bidirectional", VDD_A7: "power_in", PA12: "bidirectional", PA14: "bidirectional", PB4: "bidirectional", PB6: "bidirectional", PB8: "bidirectional", VDD_B6: "power_in", PC13: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PB7: "bidirectional", PC1: "bidirectional", PC0: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PA8: "bidirectional", PA11: "bidirectional", PB1: "bidirectional", VSS: "power_in", NRST: "input", PH0: "bidirectional", PH1: "bidirectional", PB15: "bidirectional", PA9: "bidirectional", PB2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", "VREF+": "input", PC2: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", PB11: "bidirectional", PA7: "bidirectional", PA4: "bidirectional", PA2: "bidirectional", VDDA: "power_in", PB12: "bidirectional", VDD_G2: "power_in", PB10: "bidirectional", PB0: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072C_B-Z_Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 40 GPIO, WLCSP49
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072CBYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die447*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072cb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_CSP:ST_WLCSP-49_Die447.
 */
export class STM32L072CBYx extends Component.withPins({
  "VDD_USB": "A1",
  "PA15": "A2",
  "PB3": "A3",
  "PB5": "A4",
  "BOOT0": "A5",
  "PB9": "A6",
  "VDD_A7": "A7",
  "PA12": "B1",
  "PA14": "B2",
  "PB4": "B3",
  "PB6": "B4",
  "PB8": "B5",
  "VDD_B6": "B6",
  "PC13": "B7",
  "PA10": "C1",
  "PA13": "C2",
  "PB7": "C3",
  "PC1": "C4",
  "PC0": "C5",
  "PC14": "C6",
  "PC15": "C7",
  "PA8": "D1",
  "PA11": "D2",
  "PB1": "D3",
  "VSS": "D4",
  "NRST": "D5",
  "PH0": "D6",
  "PH1": "D7",
  "PB15": "E1",
  "PA9": "E2",
  "PB2": "E3",
  "PA1": "E4",
  "PA0": "E5",
  "VREF+": "E6",
  "PC2": "E7",
  "PB14": "F1",
  "PB13": "F2",
  "PB11": "F3",
  "PA7": "F4",
  "PA4": "F5",
  "PA2": "F6",
  "VDDA": "F7",
  "PB12": "G1",
  "VDD_G2": "G2",
  "PB10": "G3",
  "PB0": "G4",
  "PA6": "G5",
  "PA5": "G6",
  "PA3": "G7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_USB: "power_in", PA15: "bidirectional", PB3: "bidirectional", PB5: "bidirectional", BOOT0: "input", PB9: "bidirectional", VDD_A7: "power_in", PA12: "bidirectional", PA14: "bidirectional", PB4: "bidirectional", PB6: "bidirectional", PB8: "bidirectional", VDD_B6: "power_in", PC13: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PB7: "bidirectional", PC1: "bidirectional", PC0: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PA8: "bidirectional", PA11: "bidirectional", PB1: "bidirectional", VSS: "power_in", NRST: "input", PH0: "bidirectional", PH1: "bidirectional", PB15: "bidirectional", PA9: "bidirectional", PB2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", "VREF+": "input", PC2: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", PB11: "bidirectional", PA7: "bidirectional", PA4: "bidirectional", PA2: "bidirectional", VDDA: "power_in", PB12: "bidirectional", VDD_G2: "power_in", PB10: "bidirectional", PB0: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072CBYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 40 GPIO, EWLCSP49
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072CZEx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die447*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072cz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_CSP:ST_WLCSP-49_Die447.
 */
export class STM32L072CZEx extends Component.withPins({
  "VDD_USB": "A1",
  "PA15": "A2",
  "PB3": "A3",
  "PB5": "A4",
  "BOOT0": "A5",
  "PB9": "A6",
  "VDD_A7": "A7",
  "PA12": "B1",
  "PA14": "B2",
  "PB4": "B3",
  "PB6": "B4",
  "PB8": "B5",
  "VDD_B6": "B6",
  "PC13": "B7",
  "PA10": "C1",
  "PA13": "C2",
  "PB7": "C3",
  "PC1": "C4",
  "PC0": "C5",
  "PC14": "C6",
  "PC15": "C7",
  "PA8": "D1",
  "PA11": "D2",
  "PB1": "D3",
  "VSS": "D4",
  "NRST": "D5",
  "PH0": "D6",
  "PH1": "D7",
  "PB15": "E1",
  "PA9": "E2",
  "PB2": "E3",
  "PA1": "E4",
  "PA0": "E5",
  "VREF+": "E6",
  "PC2": "E7",
  "PB14": "F1",
  "PB13": "F2",
  "PB11": "F3",
  "PA7": "F4",
  "PA4": "F5",
  "PA2": "F6",
  "VDDA": "F7",
  "PB12": "G1",
  "VDD_G2": "G2",
  "PB10": "G3",
  "PB0": "G4",
  "PA6": "G5",
  "PA5": "G6",
  "PA3": "G7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_USB: "power_in", PA15: "bidirectional", PB3: "bidirectional", PB5: "bidirectional", BOOT0: "input", PB9: "bidirectional", VDD_A7: "power_in", PA12: "bidirectional", PA14: "bidirectional", PB4: "bidirectional", PB6: "bidirectional", PB8: "bidirectional", VDD_B6: "power_in", PC13: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PB7: "bidirectional", PC1: "bidirectional", PC0: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PA8: "bidirectional", PA11: "bidirectional", PB1: "bidirectional", VSS: "power_in", NRST: "input", PH0: "bidirectional", PH1: "bidirectional", PB15: "bidirectional", PA9: "bidirectional", PB2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", "VREF+": "input", PC2: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", PB11: "bidirectional", PA7: "bidirectional", PA4: "bidirectional", PA2: "bidirectional", VDDA: "power_in", PB12: "bidirectional", VDD_G2: "power_in", PB10: "bidirectional", PB0: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072CZEx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072CZTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072cz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L072CZTx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072CZTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072CZUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072cz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L072CZUx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072CZUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 40 GPIO, WLCSP49
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072CZYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die447*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072cz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_CSP:ST_WLCSP-49_Die447.
 */
export class STM32L072CZYx extends Component.withPins({
  "VDD_USB": "A1",
  "PA15": "A2",
  "PB3": "A3",
  "PB5": "A4",
  "BOOT0": "A5",
  "PB9": "A6",
  "VDD_A7": "A7",
  "PA12": "B1",
  "PA14": "B2",
  "PB4": "B3",
  "PB6": "B4",
  "PB8": "B5",
  "VDD_B6": "B6",
  "PC13": "B7",
  "PA10": "C1",
  "PA13": "C2",
  "PB7": "C3",
  "PC1": "C4",
  "PC0": "C5",
  "PC14": "C6",
  "PC15": "C7",
  "PA8": "D1",
  "PA11": "D2",
  "PB1": "D3",
  "VSS": "D4",
  "NRST": "D5",
  "PH0": "D6",
  "PH1": "D7",
  "PB15": "E1",
  "PA9": "E2",
  "PB2": "E3",
  "PA1": "E4",
  "PA0": "E5",
  "VREF+": "E6",
  "PC2": "E7",
  "PB14": "F1",
  "PB13": "F2",
  "PB11": "F3",
  "PA7": "F4",
  "PA4": "F5",
  "PA2": "F6",
  "VDDA": "F7",
  "PB12": "G1",
  "VDD_G2": "G2",
  "PB10": "G3",
  "PB0": "G4",
  "PA6": "G5",
  "PA5": "G6",
  "PA3": "G7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_USB: "power_in", PA15: "bidirectional", PB3: "bidirectional", PB5: "bidirectional", BOOT0: "input", PB9: "bidirectional", VDD_A7: "power_in", PA12: "bidirectional", PA14: "bidirectional", PB4: "bidirectional", PB6: "bidirectional", PB8: "bidirectional", VDD_B6: "power_in", PC13: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PB7: "bidirectional", PC1: "bidirectional", PC0: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PA8: "bidirectional", PA11: "bidirectional", PB1: "bidirectional", VSS: "power_in", NRST: "input", PH0: "bidirectional", PH1: "bidirectional", PB15: "bidirectional", PA9: "bidirectional", PB2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", "VREF+": "input", PC2: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", PB11: "bidirectional", PA7: "bidirectional", PA4: "bidirectional", PA2: "bidirectional", VDDA: "power_in", PB12: "bidirectional", VDD_G2: "power_in", PB10: "bidirectional", PB0: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072CZYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072K_B-Z_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072kb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L072K_B_Z_Tx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072K_B-Z_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072KBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072kb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L072KBTx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072KBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 23 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072K_B-Z_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072kb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L072K_B_Z_Ux extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "NRST": "3",
  "VSSA": "4",
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
  "VDD_USB": "24",
  "PA14": "25",
  "PB4": "26",
  "PB5": "27",
  "PB6": "28",
  "PB7": "29",
  "BOOT0": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_USB: "power_in", PA14: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_31: "passive", VDD_32: "power_in", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072K_B-Z_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 23 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072KBUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072kb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L072KBUx extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "NRST": "3",
  "VSSA": "4",
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
  "VDD_USB": "24",
  "PA14": "25",
  "PB4": "26",
  "PB5": "27",
  "PB6": "28",
  "PB7": "29",
  "BOOT0": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_USB: "power_in", PA14: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_31: "passive", VDD_32: "power_in", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072KBUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072KZTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072kz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L072KZTx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072KZTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 23 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072KZUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072kz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L072KZUx extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "NRST": "3",
  "VSSA": "4",
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
  "VDD_USB": "24",
  "PA14": "25",
  "PB4": "26",
  "PB5": "27",
  "PB6": "28",
  "PB7": "29",
  "BOOT0": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_USB: "power_in", PA14: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_31: "passive", VDD_32: "power_in", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072KZUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, TFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072R_B-Z_Hx`. Reference prefix: `U`.
 * Footprint filters: TFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072rb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_BGA:TFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L072R_B_Z_Hx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VDD_B2": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VDD_USB": "E6",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VDD_B2: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDD_USB: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072R_B-Z_Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, TFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072RBHx`. Reference prefix: `U`.
 * Footprint filters: TFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072rb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_BGA:TFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L072RBHx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VDD_B2": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VDD_USB": "E6",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VDD_B2: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDD_USB: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072RBHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072R_B-Z_Ix`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072rb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L072R_B_Z_Ix extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VDD_B2": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VDD_USB": "E6",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VDD_B2: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDD_USB: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072R_B-Z_Ix";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072RBIx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072rb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L072RBIx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VDD_B2": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VDD_USB": "E6",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VDD_B2: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDD_USB: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072RBIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072R_B-Z_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072rb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32L072R_B_Z_Tx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "48",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072R_B-Z_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072RBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072rb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32L072RBTx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "48",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072RBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, TFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072RZHx`. Reference prefix: `U`.
 * Footprint filters: TFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072rz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_BGA:TFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L072RZHx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VDD_B2": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VDD_USB": "E6",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VDD_B2: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDD_USB: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072RZHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072RZIx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072rz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L072RZIx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VDD_B2": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VDD_USB": "E6",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VDD_B2: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDD_USB: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072RZIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072RZTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072rz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32L072RZTx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "48",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072RZTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072V8Ix`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072v8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32L072V8Ix extends Component.withPins({
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
  "VDD_C11": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VDD_E2": "E2",
  "VSS_E3": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PH0": "F1",
  "PH9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PH1": "G1",
  "PH10": "G2",
  "VDD_USB": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "VSSA": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VREF-": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", VDD_C11: "power_in", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VDD_E2: "power_in", VSS_E3: "passive", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PH0: "bidirectional", PH9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PH1: "bidirectional", PH10: "bidirectional", VDD_USB: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", VSSA: "power_in", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", "VREF-": "input", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072V8Ix";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072V8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072v8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32L072V8Tx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VDD_6": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PH9": "10",
  "PH10": "11",
  "PH0": "12",
  "PH1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "VSSA": "19",
  "VREF-": "20",
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
  "VDD_73": "73",
  "VSS_74": "74",
  "VDD_USB": "75",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VDD_6: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH9: "bidirectional", PH10: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF-": "input", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_73: "power_in", VSS_74: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072V8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072V_B-Z_Ix`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072vb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32L072V_B_Z_Ix extends Component.withPins({
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
  "VDD_C11": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VDD_E2": "E2",
  "VSS_E3": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PH0": "F1",
  "PH9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PH1": "G1",
  "PH10": "G2",
  "VDD_USB": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "VSSA": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VREF-": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", VDD_C11: "power_in", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VDD_E2: "power_in", VSS_E3: "passive", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PH0: "bidirectional", PH9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PH1: "bidirectional", PH10: "bidirectional", VDD_USB: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", VSSA: "power_in", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", "VREF-": "input", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072V_B-Z_Ix";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072VBIx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072vb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32L072VBIx extends Component.withPins({
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
  "VDD_C11": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VDD_E2": "E2",
  "VSS_E3": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PH0": "F1",
  "PH9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PH1": "G1",
  "PH10": "G2",
  "VDD_USB": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "VSSA": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VREF-": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", VDD_C11: "power_in", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VDD_E2: "power_in", VSS_E3: "passive", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PH0: "bidirectional", PH9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PH1: "bidirectional", PH10: "bidirectional", VDD_USB: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", VSSA: "power_in", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", "VREF-": "input", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072VBIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072V_B-Z_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072vb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32L072V_B_Z_Tx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VDD_6": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PH9": "10",
  "PH10": "11",
  "PH0": "12",
  "PH1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "VSSA": "19",
  "VREF-": "20",
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
  "VDD_73": "73",
  "VSS_74": "74",
  "VDD_USB": "75",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VDD_6: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH9: "bidirectional", PH10: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF-": "input", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_73: "power_in", VSS_74: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072V_B-Z_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072VBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072vb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32L072VBTx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VDD_6": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PH9": "10",
  "PH10": "11",
  "PH0": "12",
  "PH1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "VSSA": "19",
  "VREF-": "20",
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
  "VDD_73": "73",
  "VSS_74": "74",
  "VDD_USB": "75",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VDD_6: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH9: "bidirectional", PH10: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF-": "input", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_73: "power_in", VSS_74: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072VBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072VZIx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072vz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32L072VZIx extends Component.withPins({
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
  "VDD_C11": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VDD_E2": "E2",
  "VSS_E3": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PH0": "F1",
  "PH9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PH1": "G1",
  "PH10": "G2",
  "VDD_USB": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "VSSA": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VREF-": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", VDD_C11: "power_in", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VDD_E2: "power_in", VSS_E3: "passive", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PH0: "bidirectional", PH9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PH1: "bidirectional", PH10: "bidirectional", VDD_USB: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", VSSA: "power_in", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", "VREF-": "input", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072VZIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L072VZTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l072vz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32L072VZTx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VDD_6": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PH9": "10",
  "PH10": "11",
  "PH0": "12",
  "PH1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "VSSA": "19",
  "VREF-": "20",
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
  "VDD_73": "73",
  "VSS_74": "74",
  "VDD_USB": "75",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VDD_6: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH9: "bidirectional", PH10: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF-": "input", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_73: "power_in", VSS_74: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L072VZTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L073C_B-Z_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l073cb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L073C_B_Z_Tx extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L073C_B-Z_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L073CBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l073cb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L073CBTx extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L073CBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L073C_B-Z_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l073cb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L073C_B_Z_Ux extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L073C_B-Z_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L073CBUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l073cb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L073CBUx extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L073CBUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L073CZTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l073cz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L073CZTx extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L073CZTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L073CZUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l073cz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L073CZUx extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L073CZUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 40 GPIO, WLCSP49
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L073CZYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die447*.
 * @see https://www.st.com/resource/en/datasheet/stm32l073cz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_CSP:ST_WLCSP-49_Die447.
 */
export class STM32L073CZYx extends Component.withPins({
  "VDD_USB": "A1",
  "PA15": "A2",
  "PB3": "A3",
  "PB5": "A4",
  "BOOT0": "A5",
  "PB9": "A6",
  "VDD_A7": "A7",
  "PA12": "B1",
  "PA14": "B2",
  "PB4": "B3",
  "PB6": "B4",
  "PB8": "B5",
  "VLCD": "B6",
  "PC13": "B7",
  "PA10": "C1",
  "PA13": "C2",
  "PB7": "C3",
  "PC1": "C4",
  "PC0": "C5",
  "PC14": "C6",
  "PC15": "C7",
  "PA8": "D1",
  "PA11": "D2",
  "PB1": "D3",
  "VSS": "D4",
  "NRST": "D5",
  "PH0": "D6",
  "PH1": "D7",
  "PB15": "E1",
  "PA9": "E2",
  "PB2": "E3",
  "PA1": "E4",
  "PA0": "E5",
  "VREF+": "E6",
  "PC2": "E7",
  "PB14": "F1",
  "PB13": "F2",
  "PB11": "F3",
  "PA7": "F4",
  "PA4": "F5",
  "PA2": "F6",
  "VDDA": "F7",
  "PB12": "G1",
  "VDD_G2": "G2",
  "PB10": "G3",
  "PB0": "G4",
  "PA6": "G5",
  "PA5": "G6",
  "PA3": "G7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_USB: "power_in", PA15: "bidirectional", PB3: "bidirectional", PB5: "bidirectional", BOOT0: "input", PB9: "bidirectional", VDD_A7: "power_in", PA12: "bidirectional", PA14: "bidirectional", PB4: "bidirectional", PB6: "bidirectional", PB8: "bidirectional", VLCD: "power_in", PC13: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PB7: "bidirectional", PC1: "bidirectional", PC0: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PA8: "bidirectional", PA11: "bidirectional", PB1: "bidirectional", VSS: "power_in", NRST: "input", PH0: "bidirectional", PH1: "bidirectional", PB15: "bidirectional", PA9: "bidirectional", PB2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", "VREF+": "input", PC2: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", PB11: "bidirectional", PA7: "bidirectional", PA4: "bidirectional", PA2: "bidirectional", VDDA: "power_in", PB12: "bidirectional", VDD_G2: "power_in", PB10: "bidirectional", PB0: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L073CZYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, TFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L073R_B-Z_Hx`. Reference prefix: `U`.
 * Footprint filters: TFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l073rb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_BGA:TFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L073R_B_Z_Hx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VLCD": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VDD_USB": "E6",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VLCD: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDD_USB: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L073R_B-Z_Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, TFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L073RBHx`. Reference prefix: `U`.
 * Footprint filters: TFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l073rb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_BGA:TFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L073RBHx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VLCD": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VDD_USB": "E6",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VLCD: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDD_USB: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L073RBHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L073R_B-Z_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l073rb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32L073R_B_Z_Tx extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "48",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L073R_B-Z_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L073RBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l073rb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32L073RBTx extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "48",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L073RBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, TFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L073RZHx`. Reference prefix: `U`.
 * Footprint filters: TFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l073rz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_BGA:TFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L073RZHx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VLCD": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VDD_USB": "E6",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VLCD: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDD_USB: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L073RZHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L073RZIx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l073rz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L073RZIx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VLCD": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VDD_USB": "E6",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VLCD: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDD_USB: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L073RZIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L073RZTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l073rz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32L073RZTx extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "48",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L073RZTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 20KB RAM, 84 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L073V8Ix`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l073v8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32L073V8Ix extends Component.withPins({
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
  "VDD_C11": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VLCD": "E2",
  "VSS_E3": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PH0": "F1",
  "PH9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PH1": "G1",
  "PH10": "G2",
  "VDD_USB": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "VSSA": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VREF-": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", VDD_C11: "power_in", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VLCD: "power_in", VSS_E3: "passive", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PH0: "bidirectional", PH9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PH1: "bidirectional", PH10: "bidirectional", VDD_USB: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", VSSA: "power_in", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", "VREF-": "input", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L073V8Ix";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L073V8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l073v8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32L073V8Tx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VLCD": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PH9": "10",
  "PH10": "11",
  "PH0": "12",
  "PH1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "VSSA": "19",
  "VREF-": "20",
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
  "VDD_73": "73",
  "VSS_74": "74",
  "VDD_USB": "75",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH9: "bidirectional", PH10: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF-": "input", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_73: "power_in", VSS_74: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L073V8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L073V_B-Z_Ix`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l073vb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32L073V_B_Z_Ix extends Component.withPins({
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
  "VDD_C11": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VLCD": "E2",
  "VSS_E3": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PH0": "F1",
  "PH9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PH1": "G1",
  "PH10": "G2",
  "VDD_USB": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "VSSA": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VREF-": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", VDD_C11: "power_in", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VLCD: "power_in", VSS_E3: "passive", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PH0: "bidirectional", PH9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PH1: "bidirectional", PH10: "bidirectional", VDD_USB: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", VSSA: "power_in", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", "VREF-": "input", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L073V_B-Z_Ix";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L073VBIx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l073vb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32L073VBIx extends Component.withPins({
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
  "VDD_C11": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VLCD": "E2",
  "VSS_E3": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PH0": "F1",
  "PH9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PH1": "G1",
  "PH10": "G2",
  "VDD_USB": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "VSSA": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VREF-": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", VDD_C11: "power_in", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VLCD: "power_in", VSS_E3: "passive", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PH0: "bidirectional", PH9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PH1: "bidirectional", PH10: "bidirectional", VDD_USB: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", VSSA: "power_in", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", "VREF-": "input", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L073VBIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L073V_B-Z_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l073vb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32L073V_B_Z_Tx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VLCD": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PH9": "10",
  "PH10": "11",
  "PH0": "12",
  "PH1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "VSSA": "19",
  "VREF-": "20",
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
  "VDD_73": "73",
  "VSS_74": "74",
  "VDD_USB": "75",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH9: "bidirectional", PH10: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF-": "input", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_73: "power_in", VSS_74: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L073V_B-Z_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L073VBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l073vb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32L073VBTx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VLCD": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PH9": "10",
  "PH10": "11",
  "PH0": "12",
  "PH1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "VSSA": "19",
  "VREF-": "20",
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
  "VDD_73": "73",
  "VSS_74": "74",
  "VDD_USB": "75",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH9: "bidirectional", PH10: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF-": "input", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_73: "power_in", VSS_74: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L073VBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L073VZIx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l073vz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32L073VZIx extends Component.withPins({
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
  "VDD_C11": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VLCD": "E2",
  "VSS_E3": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PH0": "F1",
  "PH9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PH1": "G1",
  "PH10": "G2",
  "VDD_USB": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "VSSA": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VREF-": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", VDD_C11: "power_in", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VLCD: "power_in", VSS_E3: "passive", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PH0: "bidirectional", PH9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PH1: "bidirectional", PH10: "bidirectional", VDD_USB: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", VSSA: "power_in", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", "VREF-": "input", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L073VZIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L073VZTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l073vz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32L073VZTx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VLCD": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PH9": "10",
  "PH10": "11",
  "PH0": "12",
  "PH1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "VSSA": "19",
  "VREF-": "20",
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
  "VDD_73": "73",
  "VSS_74": "74",
  "VDD_USB": "75",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH9: "bidirectional", PH10: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF-": "input", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_73: "power_in", VSS_74: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L073VZTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L081C_B-Z_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l081cb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L081C_B_Z_Tx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L081C_B-Z_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L081CBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l081cb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L081CBTx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L081CBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L081CZTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l081cz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L081CZTx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L081CZTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L081CZUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l081cz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L081CZUx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDIO2: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L081CZUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L081KZTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l081kz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L081KZTx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L081KZTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 23 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L081KZUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l081kz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L081KZUx extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "NRST": "3",
  "VSSA": "4",
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
  "VDDIO2": "24",
  "PA14": "25",
  "PB4": "26",
  "PB5": "27",
  "PB6": "28",
  "PB7": "29",
  "BOOT0": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDDIO2: "power_in", PA14: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_31: "passive", VDD_32: "power_in", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L081KZUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L082CZUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l082cz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L082CZUx extends Component.withPins({
  "VDD_1": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L082CZUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 40 GPIO, WLCSP49
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L082CZYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die447*.
 * @see https://www.st.com/resource/en/datasheet/stm32l082cz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_CSP:ST_WLCSP-49_Die447.
 */
export class STM32L082CZYx extends Component.withPins({
  "VDD_USB": "A1",
  "PA15": "A2",
  "PB3": "A3",
  "PB5": "A4",
  "BOOT0": "A5",
  "PB9": "A6",
  "VDD_A7": "A7",
  "PA12": "B1",
  "PA14": "B2",
  "PB4": "B3",
  "PB6": "B4",
  "PB8": "B5",
  "VDD_B6": "B6",
  "PC13": "B7",
  "PA10": "C1",
  "PA13": "C2",
  "PB7": "C3",
  "PC1": "C4",
  "PC0": "C5",
  "PC14": "C6",
  "PC15": "C7",
  "PA8": "D1",
  "PA11": "D2",
  "PB1": "D3",
  "VSS": "D4",
  "NRST": "D5",
  "PH0": "D6",
  "PH1": "D7",
  "PB15": "E1",
  "PA9": "E2",
  "PB2": "E3",
  "PA1": "E4",
  "PA0": "E5",
  "VREF+": "E6",
  "PC2": "E7",
  "PB14": "F1",
  "PB13": "F2",
  "PB11": "F3",
  "PA7": "F4",
  "PA4": "F5",
  "PA2": "F6",
  "VDDA": "F7",
  "PB12": "G1",
  "VDD_G2": "G2",
  "PB10": "G3",
  "PB0": "G4",
  "PA6": "G5",
  "PA5": "G6",
  "PA3": "G7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_USB: "power_in", PA15: "bidirectional", PB3: "bidirectional", PB5: "bidirectional", BOOT0: "input", PB9: "bidirectional", VDD_A7: "power_in", PA12: "bidirectional", PA14: "bidirectional", PB4: "bidirectional", PB6: "bidirectional", PB8: "bidirectional", VDD_B6: "power_in", PC13: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", PB7: "bidirectional", PC1: "bidirectional", PC0: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PA8: "bidirectional", PA11: "bidirectional", PB1: "bidirectional", VSS: "power_in", NRST: "input", PH0: "bidirectional", PH1: "bidirectional", PB15: "bidirectional", PA9: "bidirectional", PB2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", "VREF+": "input", PC2: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", PB11: "bidirectional", PA7: "bidirectional", PA4: "bidirectional", PA2: "bidirectional", VDDA: "power_in", PB12: "bidirectional", VDD_G2: "power_in", PB10: "bidirectional", PB0: "bidirectional", PA6: "bidirectional", PA5: "bidirectional", PA3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L082CZYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L082K_B-Z_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l082kb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L082K_B_Z_Tx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L082K_B-Z_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L082KBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l082kb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L082KBTx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L082KBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 23 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L082K_B-Z_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l082kb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L082K_B_Z_Ux extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "NRST": "3",
  "VSSA": "4",
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
  "VDD_USB": "24",
  "PA14": "25",
  "PB4": "26",
  "PB5": "27",
  "PB6": "28",
  "PB7": "29",
  "BOOT0": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_USB: "power_in", PA14: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_31: "passive", VDD_32: "power_in", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L082K_B-Z_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 23 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L082KBUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l082kb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L082KBUx extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "NRST": "3",
  "VSSA": "4",
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
  "VDD_USB": "24",
  "PA14": "25",
  "PB4": "26",
  "PB5": "27",
  "PB6": "28",
  "PB7": "29",
  "BOOT0": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_USB: "power_in", PA14: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_31: "passive", VDD_32: "power_in", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L082KBUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 25 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L082KZTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l082kz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32L082KZTx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_32: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L082KZTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 23 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L082KZUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l082kz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x2.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32L082KZUx extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "NRST": "3",
  "VSSA": "4",
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
  "VDD_USB": "24",
  "PA14": "25",
  "PB4": "26",
  "PB5": "27",
  "PB6": "28",
  "PB7": "29",
  "BOOT0": "30",
  "VSS_31": "31",
  "VDD_32": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_USB: "power_in", PA14: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", VSS_31: "passive", VDD_32: "power_in", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L082KZUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L083C_B-Z_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l083cb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L083C_B_Z_Tx extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L083C_B-Z_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L083CBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l083cb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L083CBTx extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L083CBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L083CZTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l083cz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32L083CZTx extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L083CZTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L083CZUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l083cz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32L083CZUx extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "36",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L083CZUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, TFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L083R_B-Z_Hx`. Reference prefix: `U`.
 * Footprint filters: TFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l083rb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_BGA:TFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L083R_B_Z_Hx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VLCD": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VDD_USB": "E6",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VLCD: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDD_USB: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L083R_B-Z_Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, TFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L083RBHx`. Reference prefix: `U`.
 * Footprint filters: TFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l083rb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_BGA:TFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L083RBHx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VLCD": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VDD_USB": "E6",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VLCD: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDD_USB: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L083RBHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L083R_B-Z_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l083rb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32L083R_B_Z_Tx extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "48",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L083R_B-Z_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L083RBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l083rb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32L083RBTx extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "48",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L083RBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 50 GPIO, TFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L083RZHx`. Reference prefix: `U`.
 * Footprint filters: TFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l083rz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_BGA:TFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32L083RZHx extends Component.withPins({
  "PC14": "A1",
  "PC13": "A2",
  "PB9": "A3",
  "PB4": "A4",
  "PB3": "A5",
  "PA15": "A6",
  "PA14": "A7",
  "PA13": "A8",
  "PC15": "B1",
  "VLCD": "B2",
  "PB8": "B3",
  "BOOT0": "B4",
  "PD2": "B5",
  "PC11": "B6",
  "PC10": "B7",
  "PA12": "B8",
  "PH0": "C1",
  "VSS_C2": "C2",
  "PB7": "C3",
  "PB5": "C4",
  "PC12": "C5",
  "PA10": "C6",
  "PA9": "C7",
  "PA11": "C8",
  "PH1": "D1",
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
  "VDD_USB": "E6",
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
  "VREF+": "G1",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VLCD: "power_in", PB8: "bidirectional", BOOT0: "input", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PH0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PH1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", NRST: "input", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDD_USB: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L083RZHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L083RZTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l083rz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32L083RZTx extends Component.withPins({
  "VLCD": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH0": "5",
  "PH1": "6",
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
  "VDD_USB": "48",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L083RZTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 20KB RAM, 84 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L083V8Ix`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l083v8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32L083V8Ix extends Component.withPins({
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
  "VDD_C11": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VLCD": "E2",
  "VSS_E3": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PH0": "F1",
  "PH9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PH1": "G1",
  "PH10": "G2",
  "VDD_USB": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "VSSA": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VREF-": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", VDD_C11: "power_in", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VLCD: "power_in", VSS_E3: "passive", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PH0: "bidirectional", PH9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PH1: "bidirectional", PH10: "bidirectional", VDD_USB: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", VSSA: "power_in", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", "VREF-": "input", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L083V8Ix";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L083V8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l083v8.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32L083V8Tx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VLCD": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PH9": "10",
  "PH10": "11",
  "PH0": "12",
  "PH1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "VSSA": "19",
  "VREF-": "20",
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
  "VDD_73": "73",
  "VSS_74": "74",
  "VDD_USB": "75",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH9: "bidirectional", PH10: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF-": "input", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_73: "power_in", VSS_74: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L083V8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L083V_B-Z_Ix`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l083vb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32L083V_B_Z_Ix extends Component.withPins({
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
  "VDD_C11": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VLCD": "E2",
  "VSS_E3": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PH0": "F1",
  "PH9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PH1": "G1",
  "PH10": "G2",
  "VDD_USB": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "VSSA": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VREF-": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", VDD_C11: "power_in", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VLCD: "power_in", VSS_E3: "passive", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PH0: "bidirectional", PH9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PH1: "bidirectional", PH10: "bidirectional", VDD_USB: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", VSSA: "power_in", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", "VREF-": "input", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L083V_B-Z_Ix";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L083VBIx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l083vb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32L083VBIx extends Component.withPins({
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
  "VDD_C11": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VLCD": "E2",
  "VSS_E3": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PH0": "F1",
  "PH9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PH1": "G1",
  "PH10": "G2",
  "VDD_USB": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "VSSA": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VREF-": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", VDD_C11: "power_in", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VLCD: "power_in", VSS_E3: "passive", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PH0: "bidirectional", PH9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PH1: "bidirectional", PH10: "bidirectional", VDD_USB: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", VSSA: "power_in", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", "VREF-": "input", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L083VBIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128-192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L083V_B-Z_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l083vb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32L083V_B_Z_Tx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VLCD": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PH9": "10",
  "PH10": "11",
  "PH0": "12",
  "PH1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "VSSA": "19",
  "VREF-": "20",
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
  "VDD_73": "73",
  "VSS_74": "74",
  "VDD_USB": "75",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH9: "bidirectional", PH10: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF-": "input", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_73: "power_in", VSS_74: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L083V_B-Z_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L083VBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l083vb.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32L083VBTx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VLCD": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PH9": "10",
  "PH10": "11",
  "PH0": "12",
  "PH1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "VSSA": "19",
  "VREF-": "20",
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
  "VDD_73": "73",
  "VSS_74": "74",
  "VDD_USB": "75",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH9: "bidirectional", PH10: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF-": "input", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_73: "power_in", VSS_74: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L083VBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, UFBGA100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L083VZIx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*7x7mm*Layout12x12*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l083vz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_BGA:UFBGA-100_7x7mm_Layout12x12_P0.5mm.
 */
export class STM32L083VZIx extends Component.withPins({
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
  "VDD_C11": "C11",
  "PA10": "C12",
  "PC14": "D1",
  "PE6": "D2",
  "VSS_D3": "D3",
  "PA9": "D10",
  "PA8": "D11",
  "PC9": "D12",
  "PC15": "E1",
  "VLCD": "E2",
  "VSS_E3": "E3",
  "PC8": "E10",
  "PC7": "E11",
  "PC6": "E12",
  "PH0": "F1",
  "PH9": "F2",
  "VSS_F11": "F11",
  "VSS_F12": "F12",
  "PH1": "G1",
  "PH10": "G2",
  "VDD_USB": "G11",
  "VDD_G12": "G12",
  "PC0": "H1",
  "NRST": "H2",
  "VDD_H3": "H3",
  "PD15": "H10",
  "PD14": "H11",
  "PD13": "H12",
  "VSSA": "J1",
  "PC1": "J2",
  "PC2": "J3",
  "PD12": "J10",
  "PD11": "J11",
  "PD10": "J12",
  "VREF-": "K1",
  "PC3": "K2",
  "PA2": "K3",
  "PA5": "K4",
  "PC4": "K5",
  "PD9": "K8",
  "PD8": "K9",
  "PB15": "K10",
  "PB14": "K11",
  "PB13": "K12",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE3: "bidirectional", PE1: "bidirectional", PB8: "bidirectional", BOOT0: "input", PD7: "bidirectional", PD5: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PE4: "bidirectional", PE2: "bidirectional", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD4: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA11: "bidirectional", PC13: "bidirectional", PE5: "bidirectional", PE0: "bidirectional", VDD_C4: "power_in", PB5: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC11: "bidirectional", VDD_C11: "power_in", PA10: "bidirectional", PC14: "bidirectional", PE6: "bidirectional", VSS_D3: "power_in", PA9: "bidirectional", PA8: "bidirectional", PC9: "bidirectional", PC15: "bidirectional", VLCD: "power_in", VSS_E3: "passive", PC8: "bidirectional", PC7: "bidirectional", PC6: "bidirectional", PH0: "bidirectional", PH9: "bidirectional", VSS_F11: "passive", VSS_F12: "passive", PH1: "bidirectional", PH10: "bidirectional", VDD_USB: "power_in", VDD_G12: "power_in", PC0: "bidirectional", NRST: "input", VDD_H3: "power_in", PD15: "bidirectional", PD14: "bidirectional", PD13: "bidirectional", VSSA: "power_in", PC1: "bidirectional", PC2: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD10: "bidirectional", "VREF-": "input", PC3: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PC4: "bidirectional", PD9: "bidirectional", PD8: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", "VREF+": "input", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PE8: "bidirectional", PE10: "bidirectional", PE12: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PE7: "bidirectional", PE9: "bidirectional", PE11: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L083VZIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 20KB RAM, 32 MHz, 1.65-3.6V, 84 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32L0:STM32L083VZTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32l083vz.pdf
 * Keywords: Arm Cortex-M0+ STM32L0 STM32L0x3.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class STM32L083VZTx extends Component.withPins({
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "VLCD": "6",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "PH9": "10",
  "PH10": "11",
  "PH0": "12",
  "PH1": "13",
  "NRST": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
  "VSSA": "19",
  "VREF-": "20",
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
  "VDD_73": "73",
  "VSS_74": "74",
  "VDD_USB": "75",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", VLCD: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH9: "bidirectional", PH10: "bidirectional", PH0: "bidirectional", PH1: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF-": "input", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "power_in", VDD_28: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", VDD_50: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_73: "power_in", VSS_74: "passive", VDD_USB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VDD_100: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32L0:STM32L083VZTx";
  override referencePrefix = "U";
}
