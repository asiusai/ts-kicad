// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 128-1024KB flash, 64-128KB RAM, 120 MHz, 1.8-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F205R_B-C-E-F-G_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f205rb.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F205R_B_C_E_F_G_Tx extends Component.withPins({
  /** Physical pin 1: VBAT; power_in. */
  "VBAT": "1",
  /** Physical pin 2: PC13; bidirectional. */
  "PC13": "2",
  /** Physical pin 3: PC14; bidirectional. */
  "PC14": "3",
  /** Physical pin 4: PC15; bidirectional. */
  "PC15": "4",
  /** Physical pin 5: PH0; bidirectional. */
  "PH0": "5",
  /** Physical pin 6: PH1; bidirectional. */
  "PH1": "6",
  /** Physical pin 7: NRST; input. */
  "NRST": "7",
  /** Physical pin 8: PC0; bidirectional. */
  "PC0": "8",
  /** Physical pin 9: PC1; bidirectional. */
  "PC1": "9",
  /** Physical pin 10: PC2; bidirectional. */
  "PC2": "10",
  /** Physical pin 11: PC3; bidirectional. */
  "PC3": "11",
  /** Physical pin 12: VSSA; power_in. */
  "VSSA": "12",
  /** Physical pin 13: VDDA; power_in. */
  "VDDA": "13",
  /** Physical pin 14: PA0; bidirectional. */
  "PA0": "14",
  /** Physical pin 15: PA1; bidirectional. */
  "PA1": "15",
  /** Physical pin 16: PA2; bidirectional. */
  "PA2": "16",
  /** Physical pin 17: PA3; bidirectional. */
  "PA3": "17",
  /** Physical pin 18: VSS; power_in. */
  "VSS_18": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: PA4; bidirectional. */
  "PA4": "20",
  /** Physical pin 21: PA5; bidirectional. */
  "PA5": "21",
  /** Physical pin 22: PA6; bidirectional. */
  "PA6": "22",
  /** Physical pin 23: PA7; bidirectional. */
  "PA7": "23",
  /** Physical pin 24: PC4; bidirectional. */
  "PC4": "24",
  /** Physical pin 25: PC5; bidirectional. */
  "PC5": "25",
  /** Physical pin 26: PB0; bidirectional. */
  "PB0": "26",
  /** Physical pin 27: PB1; bidirectional. */
  "PB1": "27",
  /** Physical pin 28: PB2; bidirectional. */
  "PB2": "28",
  /** Physical pin 29: PB10; bidirectional. */
  "PB10": "29",
  /** Physical pin 30: PB11; bidirectional. */
  "PB11": "30",
  /** Physical pin 31: VCAP_1; power_out. */
  "VCAP_1": "31",
  /** Physical pin 32: VDD; power_in. */
  "VDD_32": "32",
  /** Physical pin 33: PB12; bidirectional. */
  "PB12": "33",
  /** Physical pin 34: PB13; bidirectional. */
  "PB13": "34",
  /** Physical pin 35: PB14; bidirectional. */
  "PB14": "35",
  /** Physical pin 36: PB15; bidirectional. */
  "PB15": "36",
  /** Physical pin 37: PC6; bidirectional. */
  "PC6": "37",
  /** Physical pin 38: PC7; bidirectional. */
  "PC7": "38",
  /** Physical pin 39: PC8; bidirectional. */
  "PC8": "39",
  /** Physical pin 40: PC9; bidirectional. */
  "PC9": "40",
  /** Physical pin 41: PA8; bidirectional. */
  "PA8": "41",
  /** Physical pin 42: PA9; bidirectional. */
  "PA9": "42",
  /** Physical pin 43: PA10; bidirectional. */
  "PA10": "43",
  /** Physical pin 44: PA11; bidirectional. */
  "PA11": "44",
  /** Physical pin 45: PA12; bidirectional. */
  "PA12": "45",
  /** Physical pin 46: PA13; bidirectional. */
  "PA13": "46",
  /** Physical pin 47: VCAP_2; power_out. */
  "VCAP_2": "47",
  /** Physical pin 48: VDD; power_in. */
  "VDD_48": "48",
  /** Physical pin 49: PA14; bidirectional. */
  "PA14": "49",
  /** Physical pin 50: PA15; bidirectional. */
  "PA15": "50",
  /** Physical pin 51: PC10; bidirectional. */
  "PC10": "51",
  /** Physical pin 52: PC11; bidirectional. */
  "PC11": "52",
  /** Physical pin 53: PC12; bidirectional. */
  "PC12": "53",
  /** Physical pin 54: PD2; bidirectional. */
  "PD2": "54",
  /** Physical pin 55: PB3; bidirectional. */
  "PB3": "55",
  /** Physical pin 56: PB4; bidirectional. */
  "PB4": "56",
  /** Physical pin 57: PB5; bidirectional. */
  "PB5": "57",
  /** Physical pin 58: PB6; bidirectional. */
  "PB6": "58",
  /** Physical pin 59: PB7; bidirectional. */
  "PB7": "59",
  /** Physical pin 60: BOOT0; input. */
  "BOOT0": "60",
  /** Physical pin 61: PB8; bidirectional. */
  "PB8": "61",
  /** Physical pin 62: PB9; bidirectional. */
  "PB9": "62",
  /** Physical pin 63: VSS; passive. */
  "VSS_63": "63",
  /** Physical pin 64: VDD; power_in. */
  "VDD_64": "64",
}) {
  override schema = "MCU_ST_STM32F2:STM32F205R_B-C-E-F-G_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 128KB flash, 64KB RAM, 120 MHz, 1.8-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F205RBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f205rb.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F205RBTx extends Component.withPins({
  /** Physical pin 1: VBAT; power_in. */
  "VBAT": "1",
  /** Physical pin 2: PC13; bidirectional. */
  "PC13": "2",
  /** Physical pin 3: PC14; bidirectional. */
  "PC14": "3",
  /** Physical pin 4: PC15; bidirectional. */
  "PC15": "4",
  /** Physical pin 5: PH0; bidirectional. */
  "PH0": "5",
  /** Physical pin 6: PH1; bidirectional. */
  "PH1": "6",
  /** Physical pin 7: NRST; input. */
  "NRST": "7",
  /** Physical pin 8: PC0; bidirectional. */
  "PC0": "8",
  /** Physical pin 9: PC1; bidirectional. */
  "PC1": "9",
  /** Physical pin 10: PC2; bidirectional. */
  "PC2": "10",
  /** Physical pin 11: PC3; bidirectional. */
  "PC3": "11",
  /** Physical pin 12: VSSA; power_in. */
  "VSSA": "12",
  /** Physical pin 13: VDDA; power_in. */
  "VDDA": "13",
  /** Physical pin 14: PA0; bidirectional. */
  "PA0": "14",
  /** Physical pin 15: PA1; bidirectional. */
  "PA1": "15",
  /** Physical pin 16: PA2; bidirectional. */
  "PA2": "16",
  /** Physical pin 17: PA3; bidirectional. */
  "PA3": "17",
  /** Physical pin 18: VSS; power_in. */
  "VSS_18": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: PA4; bidirectional. */
  "PA4": "20",
  /** Physical pin 21: PA5; bidirectional. */
  "PA5": "21",
  /** Physical pin 22: PA6; bidirectional. */
  "PA6": "22",
  /** Physical pin 23: PA7; bidirectional. */
  "PA7": "23",
  /** Physical pin 24: PC4; bidirectional. */
  "PC4": "24",
  /** Physical pin 25: PC5; bidirectional. */
  "PC5": "25",
  /** Physical pin 26: PB0; bidirectional. */
  "PB0": "26",
  /** Physical pin 27: PB1; bidirectional. */
  "PB1": "27",
  /** Physical pin 28: PB2; bidirectional. */
  "PB2": "28",
  /** Physical pin 29: PB10; bidirectional. */
  "PB10": "29",
  /** Physical pin 30: PB11; bidirectional. */
  "PB11": "30",
  /** Physical pin 31: VCAP_1; power_out. */
  "VCAP_1": "31",
  /** Physical pin 32: VDD; power_in. */
  "VDD_32": "32",
  /** Physical pin 33: PB12; bidirectional. */
  "PB12": "33",
  /** Physical pin 34: PB13; bidirectional. */
  "PB13": "34",
  /** Physical pin 35: PB14; bidirectional. */
  "PB14": "35",
  /** Physical pin 36: PB15; bidirectional. */
  "PB15": "36",
  /** Physical pin 37: PC6; bidirectional. */
  "PC6": "37",
  /** Physical pin 38: PC7; bidirectional. */
  "PC7": "38",
  /** Physical pin 39: PC8; bidirectional. */
  "PC8": "39",
  /** Physical pin 40: PC9; bidirectional. */
  "PC9": "40",
  /** Physical pin 41: PA8; bidirectional. */
  "PA8": "41",
  /** Physical pin 42: PA9; bidirectional. */
  "PA9": "42",
  /** Physical pin 43: PA10; bidirectional. */
  "PA10": "43",
  /** Physical pin 44: PA11; bidirectional. */
  "PA11": "44",
  /** Physical pin 45: PA12; bidirectional. */
  "PA12": "45",
  /** Physical pin 46: PA13; bidirectional. */
  "PA13": "46",
  /** Physical pin 47: VCAP_2; power_out. */
  "VCAP_2": "47",
  /** Physical pin 48: VDD; power_in. */
  "VDD_48": "48",
  /** Physical pin 49: PA14; bidirectional. */
  "PA14": "49",
  /** Physical pin 50: PA15; bidirectional. */
  "PA15": "50",
  /** Physical pin 51: PC10; bidirectional. */
  "PC10": "51",
  /** Physical pin 52: PC11; bidirectional. */
  "PC11": "52",
  /** Physical pin 53: PC12; bidirectional. */
  "PC12": "53",
  /** Physical pin 54: PD2; bidirectional. */
  "PD2": "54",
  /** Physical pin 55: PB3; bidirectional. */
  "PB3": "55",
  /** Physical pin 56: PB4; bidirectional. */
  "PB4": "56",
  /** Physical pin 57: PB5; bidirectional. */
  "PB5": "57",
  /** Physical pin 58: PB6; bidirectional. */
  "PB6": "58",
  /** Physical pin 59: PB7; bidirectional. */
  "PB7": "59",
  /** Physical pin 60: BOOT0; input. */
  "BOOT0": "60",
  /** Physical pin 61: PB8; bidirectional. */
  "PB8": "61",
  /** Physical pin 62: PB9; bidirectional. */
  "PB9": "62",
  /** Physical pin 63: VSS; passive. */
  "VSS_63": "63",
  /** Physical pin 64: VDD; power_in. */
  "VDD_64": "64",
}) {
  override schema = "MCU_ST_STM32F2:STM32F205RBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 256KB flash, 96KB RAM, 120 MHz, 1.8-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F205RCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f205rc.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F205RCTx extends Component.withPins({
  /** Physical pin 1: VBAT; power_in. */
  "VBAT": "1",
  /** Physical pin 2: PC13; bidirectional. */
  "PC13": "2",
  /** Physical pin 3: PC14; bidirectional. */
  "PC14": "3",
  /** Physical pin 4: PC15; bidirectional. */
  "PC15": "4",
  /** Physical pin 5: PH0; bidirectional. */
  "PH0": "5",
  /** Physical pin 6: PH1; bidirectional. */
  "PH1": "6",
  /** Physical pin 7: NRST; input. */
  "NRST": "7",
  /** Physical pin 8: PC0; bidirectional. */
  "PC0": "8",
  /** Physical pin 9: PC1; bidirectional. */
  "PC1": "9",
  /** Physical pin 10: PC2; bidirectional. */
  "PC2": "10",
  /** Physical pin 11: PC3; bidirectional. */
  "PC3": "11",
  /** Physical pin 12: VSSA; power_in. */
  "VSSA": "12",
  /** Physical pin 13: VDDA; power_in. */
  "VDDA": "13",
  /** Physical pin 14: PA0; bidirectional. */
  "PA0": "14",
  /** Physical pin 15: PA1; bidirectional. */
  "PA1": "15",
  /** Physical pin 16: PA2; bidirectional. */
  "PA2": "16",
  /** Physical pin 17: PA3; bidirectional. */
  "PA3": "17",
  /** Physical pin 18: VSS; power_in. */
  "VSS_18": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: PA4; bidirectional. */
  "PA4": "20",
  /** Physical pin 21: PA5; bidirectional. */
  "PA5": "21",
  /** Physical pin 22: PA6; bidirectional. */
  "PA6": "22",
  /** Physical pin 23: PA7; bidirectional. */
  "PA7": "23",
  /** Physical pin 24: PC4; bidirectional. */
  "PC4": "24",
  /** Physical pin 25: PC5; bidirectional. */
  "PC5": "25",
  /** Physical pin 26: PB0; bidirectional. */
  "PB0": "26",
  /** Physical pin 27: PB1; bidirectional. */
  "PB1": "27",
  /** Physical pin 28: PB2; bidirectional. */
  "PB2": "28",
  /** Physical pin 29: PB10; bidirectional. */
  "PB10": "29",
  /** Physical pin 30: PB11; bidirectional. */
  "PB11": "30",
  /** Physical pin 31: VCAP_1; power_out. */
  "VCAP_1": "31",
  /** Physical pin 32: VDD; power_in. */
  "VDD_32": "32",
  /** Physical pin 33: PB12; bidirectional. */
  "PB12": "33",
  /** Physical pin 34: PB13; bidirectional. */
  "PB13": "34",
  /** Physical pin 35: PB14; bidirectional. */
  "PB14": "35",
  /** Physical pin 36: PB15; bidirectional. */
  "PB15": "36",
  /** Physical pin 37: PC6; bidirectional. */
  "PC6": "37",
  /** Physical pin 38: PC7; bidirectional. */
  "PC7": "38",
  /** Physical pin 39: PC8; bidirectional. */
  "PC8": "39",
  /** Physical pin 40: PC9; bidirectional. */
  "PC9": "40",
  /** Physical pin 41: PA8; bidirectional. */
  "PA8": "41",
  /** Physical pin 42: PA9; bidirectional. */
  "PA9": "42",
  /** Physical pin 43: PA10; bidirectional. */
  "PA10": "43",
  /** Physical pin 44: PA11; bidirectional. */
  "PA11": "44",
  /** Physical pin 45: PA12; bidirectional. */
  "PA12": "45",
  /** Physical pin 46: PA13; bidirectional. */
  "PA13": "46",
  /** Physical pin 47: VCAP_2; power_out. */
  "VCAP_2": "47",
  /** Physical pin 48: VDD; power_in. */
  "VDD_48": "48",
  /** Physical pin 49: PA14; bidirectional. */
  "PA14": "49",
  /** Physical pin 50: PA15; bidirectional. */
  "PA15": "50",
  /** Physical pin 51: PC10; bidirectional. */
  "PC10": "51",
  /** Physical pin 52: PC11; bidirectional. */
  "PC11": "52",
  /** Physical pin 53: PC12; bidirectional. */
  "PC12": "53",
  /** Physical pin 54: PD2; bidirectional. */
  "PD2": "54",
  /** Physical pin 55: PB3; bidirectional. */
  "PB3": "55",
  /** Physical pin 56: PB4; bidirectional. */
  "PB4": "56",
  /** Physical pin 57: PB5; bidirectional. */
  "PB5": "57",
  /** Physical pin 58: PB6; bidirectional. */
  "PB6": "58",
  /** Physical pin 59: PB7; bidirectional. */
  "PB7": "59",
  /** Physical pin 60: BOOT0; input. */
  "BOOT0": "60",
  /** Physical pin 61: PB8; bidirectional. */
  "PB8": "61",
  /** Physical pin 62: PB9; bidirectional. */
  "PB9": "62",
  /** Physical pin 63: VSS; passive. */
  "VSS_63": "63",
  /** Physical pin 64: VDD; power_in. */
  "VDD_64": "64",
}) {
  override schema = "MCU_ST_STM32F2:STM32F205RCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 512KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F205RETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f205re.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F205RETx extends Component.withPins({
  /** Physical pin 1: VBAT; power_in. */
  "VBAT": "1",
  /** Physical pin 2: PC13; bidirectional. */
  "PC13": "2",
  /** Physical pin 3: PC14; bidirectional. */
  "PC14": "3",
  /** Physical pin 4: PC15; bidirectional. */
  "PC15": "4",
  /** Physical pin 5: PH0; bidirectional. */
  "PH0": "5",
  /** Physical pin 6: PH1; bidirectional. */
  "PH1": "6",
  /** Physical pin 7: NRST; input. */
  "NRST": "7",
  /** Physical pin 8: PC0; bidirectional. */
  "PC0": "8",
  /** Physical pin 9: PC1; bidirectional. */
  "PC1": "9",
  /** Physical pin 10: PC2; bidirectional. */
  "PC2": "10",
  /** Physical pin 11: PC3; bidirectional. */
  "PC3": "11",
  /** Physical pin 12: VSSA; power_in. */
  "VSSA": "12",
  /** Physical pin 13: VDDA; power_in. */
  "VDDA": "13",
  /** Physical pin 14: PA0; bidirectional. */
  "PA0": "14",
  /** Physical pin 15: PA1; bidirectional. */
  "PA1": "15",
  /** Physical pin 16: PA2; bidirectional. */
  "PA2": "16",
  /** Physical pin 17: PA3; bidirectional. */
  "PA3": "17",
  /** Physical pin 18: VSS; power_in. */
  "VSS_18": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: PA4; bidirectional. */
  "PA4": "20",
  /** Physical pin 21: PA5; bidirectional. */
  "PA5": "21",
  /** Physical pin 22: PA6; bidirectional. */
  "PA6": "22",
  /** Physical pin 23: PA7; bidirectional. */
  "PA7": "23",
  /** Physical pin 24: PC4; bidirectional. */
  "PC4": "24",
  /** Physical pin 25: PC5; bidirectional. */
  "PC5": "25",
  /** Physical pin 26: PB0; bidirectional. */
  "PB0": "26",
  /** Physical pin 27: PB1; bidirectional. */
  "PB1": "27",
  /** Physical pin 28: PB2; bidirectional. */
  "PB2": "28",
  /** Physical pin 29: PB10; bidirectional. */
  "PB10": "29",
  /** Physical pin 30: PB11; bidirectional. */
  "PB11": "30",
  /** Physical pin 31: VCAP_1; power_out. */
  "VCAP_1": "31",
  /** Physical pin 32: VDD; power_in. */
  "VDD_32": "32",
  /** Physical pin 33: PB12; bidirectional. */
  "PB12": "33",
  /** Physical pin 34: PB13; bidirectional. */
  "PB13": "34",
  /** Physical pin 35: PB14; bidirectional. */
  "PB14": "35",
  /** Physical pin 36: PB15; bidirectional. */
  "PB15": "36",
  /** Physical pin 37: PC6; bidirectional. */
  "PC6": "37",
  /** Physical pin 38: PC7; bidirectional. */
  "PC7": "38",
  /** Physical pin 39: PC8; bidirectional. */
  "PC8": "39",
  /** Physical pin 40: PC9; bidirectional. */
  "PC9": "40",
  /** Physical pin 41: PA8; bidirectional. */
  "PA8": "41",
  /** Physical pin 42: PA9; bidirectional. */
  "PA9": "42",
  /** Physical pin 43: PA10; bidirectional. */
  "PA10": "43",
  /** Physical pin 44: PA11; bidirectional. */
  "PA11": "44",
  /** Physical pin 45: PA12; bidirectional. */
  "PA12": "45",
  /** Physical pin 46: PA13; bidirectional. */
  "PA13": "46",
  /** Physical pin 47: VCAP_2; power_out. */
  "VCAP_2": "47",
  /** Physical pin 48: VDD; power_in. */
  "VDD_48": "48",
  /** Physical pin 49: PA14; bidirectional. */
  "PA14": "49",
  /** Physical pin 50: PA15; bidirectional. */
  "PA15": "50",
  /** Physical pin 51: PC10; bidirectional. */
  "PC10": "51",
  /** Physical pin 52: PC11; bidirectional. */
  "PC11": "52",
  /** Physical pin 53: PC12; bidirectional. */
  "PC12": "53",
  /** Physical pin 54: PD2; bidirectional. */
  "PD2": "54",
  /** Physical pin 55: PB3; bidirectional. */
  "PB3": "55",
  /** Physical pin 56: PB4; bidirectional. */
  "PB4": "56",
  /** Physical pin 57: PB5; bidirectional. */
  "PB5": "57",
  /** Physical pin 58: PB6; bidirectional. */
  "PB6": "58",
  /** Physical pin 59: PB7; bidirectional. */
  "PB7": "59",
  /** Physical pin 60: BOOT0; input. */
  "BOOT0": "60",
  /** Physical pin 61: PB8; bidirectional. */
  "PB8": "61",
  /** Physical pin 62: PB9; bidirectional. */
  "PB9": "62",
  /** Physical pin 63: VSS; passive. */
  "VSS_63": "63",
  /** Physical pin 64: VDD; power_in. */
  "VDD_64": "64",
}) {
  override schema = "MCU_ST_STM32F2:STM32F205RETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 512-1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 51 GPIO, WLCSP66
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F205R_E-G_Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die411*.
 * @see https://www.st.com/resource/en/datasheet/stm32f205re.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_CSP:ST_WLCSP-66_Die411.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F205R_E_G_Yx extends Component.withPins({
  /** Physical pin A1: PA14; bidirectional. */
  "PA14": "A1",
  /** Physical pin A2: PA15; bidirectional. */
  "PA15": "A2",
  /** Physical pin A3: PC12; bidirectional. */
  "PC12": "A3",
  /** Physical pin A4: PB3; bidirectional. */
  "PB3": "A4",
  /** Physical pin A5: PB5; bidirectional. */
  "PB5": "A5",
  /** Physical pin A6: PB7; bidirectional. */
  "PB7": "A6",
  /** Physical pin A7: PB9; bidirectional. */
  "PB9": "A7",
  /** Physical pin A8: VDD; power_in. */
  "VDD_A8": "A8",
  /** Physical pin A9: VBAT; power_in. */
  "VBAT": "A9",
  /** Physical pin B1: VSS; power_in. */
  "VSS_B1": "B1",
  /** Physical pin B2: PA13; bidirectional. */
  "PA13": "B2",
  /** Physical pin B3: PC10; bidirectional. */
  "PC10": "B3",
  /** Physical pin B4: PB4; bidirectional. */
  "PB4": "B4",
  /** Physical pin B5: PB6; bidirectional. */
  "PB6": "B5",
  /** Physical pin B6: BOOT0; input. */
  "BOOT0": "B6",
  /** Physical pin B7: PB8; bidirectional. */
  "PB8": "B7",
  /** Physical pin B8: PC13; bidirectional. */
  "PC13": "B8",
  /** Physical pin B9: PC14; bidirectional. */
  "PC14": "B9",
  /** Physical pin C1: PA12; bidirectional. */
  "PA12": "C1",
  /** Physical pin C2: VCAP_2; power_out. */
  "VCAP_2": "C2",
  /** Physical pin C3: PC11; bidirectional. */
  "PC11": "C3",
  /** Physical pin C7: PD2; bidirectional. */
  "PD2": "C7",
  /** Physical pin C8: IRROFF; input. */
  "IRROFF": "C8",
  /** Physical pin C9: PC15; bidirectional. */
  "PC15": "C9",
  /** Physical pin D1: PC9; bidirectional. */
  "PC9": "D1",
  /** Physical pin D2: PA11; bidirectional. */
  "PA11": "D2",
  /** Physical pin D3: PA10; bidirectional. */
  "PA10": "D3",
  /** Physical pin D7: PC2; bidirectional. */
  "PC2": "D7",
  /** Physical pin D8: VSS; passive. */
  "VSS_D8": "D8",
  /** Physical pin D9: VDD; power_in. */
  "VDD_D9": "D9",
  /** Physical pin E1: VDD; power_in. */
  "VDD_E1": "E1",
  /** Physical pin E2: PA8; bidirectional. */
  "PA8": "E2",
  /** Physical pin E3: PA9; bidirectional. */
  "PA9": "E3",
  /** Physical pin E7: PA0; bidirectional. */
  "PA0": "E7",
  /** Physical pin E8: NRST; input. */
  "NRST": "E8",
  /** Physical pin E9: PH0; bidirectional. */
  "PH0": "E9",
  /** Physical pin F1: VSS; passive. */
  "VSS_F1": "F1",
  /** Physical pin F2: PC7; bidirectional. */
  "PC7": "F2",
  /** Physical pin F3: PC8; bidirectional. */
  "PC8": "F3",
  /** Physical pin F7: VREF+; input. */
  "VREF+": "F7",
  /** Physical pin F8: PC1; bidirectional. */
  "PC1": "F8",
  /** Physical pin F9: PH1; bidirectional. */
  "PH1": "F9",
  /** Physical pin G1: PB15; bidirectional. */
  "PB15": "G1",
  /** Physical pin G2: PC6; bidirectional. */
  "PC6": "G2",
  /** Physical pin G3: PC5; bidirectional. */
  "PC5": "G3",
  /** Physical pin G7: PA3; bidirectional. */
  "PA3": "G7",
  /** Physical pin G8: PC3; bidirectional. */
  "PC3": "G8",
  /** Physical pin G9: PC0; bidirectional. */
  "PC0": "G9",
  /** Physical pin H1: PB14; bidirectional. */
  "PB14": "H1",
  /** Physical pin H2: PB13; bidirectional. */
  "PB13": "H2",
  /** Physical pin H3: PB10; bidirectional. */
  "PB10": "H3",
  /** Physical pin H4: PC4; bidirectional. */
  "PC4": "H4",
  /** Physical pin H5: PA6; bidirectional. */
  "PA6": "H5",
  /** Physical pin H6: PA5; bidirectional. */
  "PA5": "H6",
  /** Physical pin H7: REGOFF; input. */
  "REGOFF": "H7",
  /** Physical pin H8: PA1; bidirectional. */
  "PA1": "H8",
  /** Physical pin H9: VSS; passive. */
  "VSS_H9": "H9",
  /** Physical pin J1: PB12; bidirectional. */
  "PB12": "J1",
  /** Physical pin J2: PB11; bidirectional. */
  "PB11": "J2",
  /** Physical pin J3: VCAP_1; power_out. */
  "VCAP_1": "J3",
  /** Physical pin J4: PB2; bidirectional. */
  "PB2": "J4",
  /** Physical pin J5: PB1; bidirectional. */
  "PB1": "J5",
  /** Physical pin J6: PB0; bidirectional. */
  "PB0": "J6",
  /** Physical pin J7: PA7; bidirectional. */
  "PA7": "J7",
  /** Physical pin J8: PA4; bidirectional. */
  "PA4": "J8",
  /** Physical pin J9: PA2; bidirectional. */
  "PA2": "J9",
}) {
  override schema = "MCU_ST_STM32F2:STM32F205R_E-G_Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 512KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 51 GPIO, WLCSP66
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F205REYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die411*.
 * @see https://www.st.com/resource/en/datasheet/stm32f205re.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_CSP:ST_WLCSP-66_Die411.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F205REYx extends Component.withPins({
  /** Physical pin A1: PA14; bidirectional. */
  "PA14": "A1",
  /** Physical pin A2: PA15; bidirectional. */
  "PA15": "A2",
  /** Physical pin A3: PC12; bidirectional. */
  "PC12": "A3",
  /** Physical pin A4: PB3; bidirectional. */
  "PB3": "A4",
  /** Physical pin A5: PB5; bidirectional. */
  "PB5": "A5",
  /** Physical pin A6: PB7; bidirectional. */
  "PB7": "A6",
  /** Physical pin A7: PB9; bidirectional. */
  "PB9": "A7",
  /** Physical pin A8: VDD; power_in. */
  "VDD_A8": "A8",
  /** Physical pin A9: VBAT; power_in. */
  "VBAT": "A9",
  /** Physical pin B1: VSS; power_in. */
  "VSS_B1": "B1",
  /** Physical pin B2: PA13; bidirectional. */
  "PA13": "B2",
  /** Physical pin B3: PC10; bidirectional. */
  "PC10": "B3",
  /** Physical pin B4: PB4; bidirectional. */
  "PB4": "B4",
  /** Physical pin B5: PB6; bidirectional. */
  "PB6": "B5",
  /** Physical pin B6: BOOT0; input. */
  "BOOT0": "B6",
  /** Physical pin B7: PB8; bidirectional. */
  "PB8": "B7",
  /** Physical pin B8: PC13; bidirectional. */
  "PC13": "B8",
  /** Physical pin B9: PC14; bidirectional. */
  "PC14": "B9",
  /** Physical pin C1: PA12; bidirectional. */
  "PA12": "C1",
  /** Physical pin C2: VCAP_2; power_out. */
  "VCAP_2": "C2",
  /** Physical pin C3: PC11; bidirectional. */
  "PC11": "C3",
  /** Physical pin C7: PD2; bidirectional. */
  "PD2": "C7",
  /** Physical pin C8: IRROFF; input. */
  "IRROFF": "C8",
  /** Physical pin C9: PC15; bidirectional. */
  "PC15": "C9",
  /** Physical pin D1: PC9; bidirectional. */
  "PC9": "D1",
  /** Physical pin D2: PA11; bidirectional. */
  "PA11": "D2",
  /** Physical pin D3: PA10; bidirectional. */
  "PA10": "D3",
  /** Physical pin D7: PC2; bidirectional. */
  "PC2": "D7",
  /** Physical pin D8: VSS; passive. */
  "VSS_D8": "D8",
  /** Physical pin D9: VDD; power_in. */
  "VDD_D9": "D9",
  /** Physical pin E1: VDD; power_in. */
  "VDD_E1": "E1",
  /** Physical pin E2: PA8; bidirectional. */
  "PA8": "E2",
  /** Physical pin E3: PA9; bidirectional. */
  "PA9": "E3",
  /** Physical pin E7: PA0; bidirectional. */
  "PA0": "E7",
  /** Physical pin E8: NRST; input. */
  "NRST": "E8",
  /** Physical pin E9: PH0; bidirectional. */
  "PH0": "E9",
  /** Physical pin F1: VSS; passive. */
  "VSS_F1": "F1",
  /** Physical pin F2: PC7; bidirectional. */
  "PC7": "F2",
  /** Physical pin F3: PC8; bidirectional. */
  "PC8": "F3",
  /** Physical pin F7: VREF+; input. */
  "VREF+": "F7",
  /** Physical pin F8: PC1; bidirectional. */
  "PC1": "F8",
  /** Physical pin F9: PH1; bidirectional. */
  "PH1": "F9",
  /** Physical pin G1: PB15; bidirectional. */
  "PB15": "G1",
  /** Physical pin G2: PC6; bidirectional. */
  "PC6": "G2",
  /** Physical pin G3: PC5; bidirectional. */
  "PC5": "G3",
  /** Physical pin G7: PA3; bidirectional. */
  "PA3": "G7",
  /** Physical pin G8: PC3; bidirectional. */
  "PC3": "G8",
  /** Physical pin G9: PC0; bidirectional. */
  "PC0": "G9",
  /** Physical pin H1: PB14; bidirectional. */
  "PB14": "H1",
  /** Physical pin H2: PB13; bidirectional. */
  "PB13": "H2",
  /** Physical pin H3: PB10; bidirectional. */
  "PB10": "H3",
  /** Physical pin H4: PC4; bidirectional. */
  "PC4": "H4",
  /** Physical pin H5: PA6; bidirectional. */
  "PA6": "H5",
  /** Physical pin H6: PA5; bidirectional. */
  "PA5": "H6",
  /** Physical pin H7: REGOFF; input. */
  "REGOFF": "H7",
  /** Physical pin H8: PA1; bidirectional. */
  "PA1": "H8",
  /** Physical pin H9: VSS; passive. */
  "VSS_H9": "H9",
  /** Physical pin J1: PB12; bidirectional. */
  "PB12": "J1",
  /** Physical pin J2: PB11; bidirectional. */
  "PB11": "J2",
  /** Physical pin J3: VCAP_1; power_out. */
  "VCAP_1": "J3",
  /** Physical pin J4: PB2; bidirectional. */
  "PB2": "J4",
  /** Physical pin J5: PB1; bidirectional. */
  "PB1": "J5",
  /** Physical pin J6: PB0; bidirectional. */
  "PB0": "J6",
  /** Physical pin J7: PA7; bidirectional. */
  "PA7": "J7",
  /** Physical pin J8: PA4; bidirectional. */
  "PA4": "J8",
  /** Physical pin J9: PA2; bidirectional. */
  "PA2": "J9",
}) {
  override schema = "MCU_ST_STM32F2:STM32F205REYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 768KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F205RFTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f205rf.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F205RFTx extends Component.withPins({
  /** Physical pin 1: VBAT; power_in. */
  "VBAT": "1",
  /** Physical pin 2: PC13; bidirectional. */
  "PC13": "2",
  /** Physical pin 3: PC14; bidirectional. */
  "PC14": "3",
  /** Physical pin 4: PC15; bidirectional. */
  "PC15": "4",
  /** Physical pin 5: PH0; bidirectional. */
  "PH0": "5",
  /** Physical pin 6: PH1; bidirectional. */
  "PH1": "6",
  /** Physical pin 7: NRST; input. */
  "NRST": "7",
  /** Physical pin 8: PC0; bidirectional. */
  "PC0": "8",
  /** Physical pin 9: PC1; bidirectional. */
  "PC1": "9",
  /** Physical pin 10: PC2; bidirectional. */
  "PC2": "10",
  /** Physical pin 11: PC3; bidirectional. */
  "PC3": "11",
  /** Physical pin 12: VSSA; power_in. */
  "VSSA": "12",
  /** Physical pin 13: VDDA; power_in. */
  "VDDA": "13",
  /** Physical pin 14: PA0; bidirectional. */
  "PA0": "14",
  /** Physical pin 15: PA1; bidirectional. */
  "PA1": "15",
  /** Physical pin 16: PA2; bidirectional. */
  "PA2": "16",
  /** Physical pin 17: PA3; bidirectional. */
  "PA3": "17",
  /** Physical pin 18: VSS; power_in. */
  "VSS_18": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: PA4; bidirectional. */
  "PA4": "20",
  /** Physical pin 21: PA5; bidirectional. */
  "PA5": "21",
  /** Physical pin 22: PA6; bidirectional. */
  "PA6": "22",
  /** Physical pin 23: PA7; bidirectional. */
  "PA7": "23",
  /** Physical pin 24: PC4; bidirectional. */
  "PC4": "24",
  /** Physical pin 25: PC5; bidirectional. */
  "PC5": "25",
  /** Physical pin 26: PB0; bidirectional. */
  "PB0": "26",
  /** Physical pin 27: PB1; bidirectional. */
  "PB1": "27",
  /** Physical pin 28: PB2; bidirectional. */
  "PB2": "28",
  /** Physical pin 29: PB10; bidirectional. */
  "PB10": "29",
  /** Physical pin 30: PB11; bidirectional. */
  "PB11": "30",
  /** Physical pin 31: VCAP_1; power_out. */
  "VCAP_1": "31",
  /** Physical pin 32: VDD; power_in. */
  "VDD_32": "32",
  /** Physical pin 33: PB12; bidirectional. */
  "PB12": "33",
  /** Physical pin 34: PB13; bidirectional. */
  "PB13": "34",
  /** Physical pin 35: PB14; bidirectional. */
  "PB14": "35",
  /** Physical pin 36: PB15; bidirectional. */
  "PB15": "36",
  /** Physical pin 37: PC6; bidirectional. */
  "PC6": "37",
  /** Physical pin 38: PC7; bidirectional. */
  "PC7": "38",
  /** Physical pin 39: PC8; bidirectional. */
  "PC8": "39",
  /** Physical pin 40: PC9; bidirectional. */
  "PC9": "40",
  /** Physical pin 41: PA8; bidirectional. */
  "PA8": "41",
  /** Physical pin 42: PA9; bidirectional. */
  "PA9": "42",
  /** Physical pin 43: PA10; bidirectional. */
  "PA10": "43",
  /** Physical pin 44: PA11; bidirectional. */
  "PA11": "44",
  /** Physical pin 45: PA12; bidirectional. */
  "PA12": "45",
  /** Physical pin 46: PA13; bidirectional. */
  "PA13": "46",
  /** Physical pin 47: VCAP_2; power_out. */
  "VCAP_2": "47",
  /** Physical pin 48: VDD; power_in. */
  "VDD_48": "48",
  /** Physical pin 49: PA14; bidirectional. */
  "PA14": "49",
  /** Physical pin 50: PA15; bidirectional. */
  "PA15": "50",
  /** Physical pin 51: PC10; bidirectional. */
  "PC10": "51",
  /** Physical pin 52: PC11; bidirectional. */
  "PC11": "52",
  /** Physical pin 53: PC12; bidirectional. */
  "PC12": "53",
  /** Physical pin 54: PD2; bidirectional. */
  "PD2": "54",
  /** Physical pin 55: PB3; bidirectional. */
  "PB3": "55",
  /** Physical pin 56: PB4; bidirectional. */
  "PB4": "56",
  /** Physical pin 57: PB5; bidirectional. */
  "PB5": "57",
  /** Physical pin 58: PB6; bidirectional. */
  "PB6": "58",
  /** Physical pin 59: PB7; bidirectional. */
  "PB7": "59",
  /** Physical pin 60: BOOT0; input. */
  "BOOT0": "60",
  /** Physical pin 61: PB8; bidirectional. */
  "PB8": "61",
  /** Physical pin 62: PB9; bidirectional. */
  "PB9": "62",
  /** Physical pin 63: VSS; passive. */
  "VSS_63": "63",
  /** Physical pin 64: VDD; power_in. */
  "VDD_64": "64",
}) {
  override schema = "MCU_ST_STM32F2:STM32F205RFTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 51 GPIO, EWLCSP66
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F205RGEx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die411*.
 * @see https://www.st.com/resource/en/datasheet/stm32f205rg.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_CSP:ST_WLCSP-66_Die411.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F205RGEx extends Component.withPins({
  /** Physical pin A1: PA14; bidirectional. */
  "PA14": "A1",
  /** Physical pin A2: PA15; bidirectional. */
  "PA15": "A2",
  /** Physical pin A3: PC12; bidirectional. */
  "PC12": "A3",
  /** Physical pin A4: PB3; bidirectional. */
  "PB3": "A4",
  /** Physical pin A5: PB5; bidirectional. */
  "PB5": "A5",
  /** Physical pin A6: PB7; bidirectional. */
  "PB7": "A6",
  /** Physical pin A7: PB9; bidirectional. */
  "PB9": "A7",
  /** Physical pin A8: VDD; power_in. */
  "VDD_A8": "A8",
  /** Physical pin A9: VBAT; power_in. */
  "VBAT": "A9",
  /** Physical pin B1: VSS; power_in. */
  "VSS_B1": "B1",
  /** Physical pin B2: PA13; bidirectional. */
  "PA13": "B2",
  /** Physical pin B3: PC10; bidirectional. */
  "PC10": "B3",
  /** Physical pin B4: PB4; bidirectional. */
  "PB4": "B4",
  /** Physical pin B5: PB6; bidirectional. */
  "PB6": "B5",
  /** Physical pin B6: BOOT0; input. */
  "BOOT0": "B6",
  /** Physical pin B7: PB8; bidirectional. */
  "PB8": "B7",
  /** Physical pin B8: PC13; bidirectional. */
  "PC13": "B8",
  /** Physical pin B9: PC14; bidirectional. */
  "PC14": "B9",
  /** Physical pin C1: PA12; bidirectional. */
  "PA12": "C1",
  /** Physical pin C2: VCAP_2; power_out. */
  "VCAP_2": "C2",
  /** Physical pin C3: PC11; bidirectional. */
  "PC11": "C3",
  /** Physical pin C7: PD2; bidirectional. */
  "PD2": "C7",
  /** Physical pin C8: IRROFF; input. */
  "IRROFF": "C8",
  /** Physical pin C9: PC15; bidirectional. */
  "PC15": "C9",
  /** Physical pin D1: PC9; bidirectional. */
  "PC9": "D1",
  /** Physical pin D2: PA11; bidirectional. */
  "PA11": "D2",
  /** Physical pin D3: PA10; bidirectional. */
  "PA10": "D3",
  /** Physical pin D7: PC2; bidirectional. */
  "PC2": "D7",
  /** Physical pin D8: VSS; passive. */
  "VSS_D8": "D8",
  /** Physical pin D9: VDD; power_in. */
  "VDD_D9": "D9",
  /** Physical pin E1: VDD; power_in. */
  "VDD_E1": "E1",
  /** Physical pin E2: PA8; bidirectional. */
  "PA8": "E2",
  /** Physical pin E3: PA9; bidirectional. */
  "PA9": "E3",
  /** Physical pin E7: PA0; bidirectional. */
  "PA0": "E7",
  /** Physical pin E8: NRST; input. */
  "NRST": "E8",
  /** Physical pin E9: PH0; bidirectional. */
  "PH0": "E9",
  /** Physical pin F1: VSS; passive. */
  "VSS_F1": "F1",
  /** Physical pin F2: PC7; bidirectional. */
  "PC7": "F2",
  /** Physical pin F3: PC8; bidirectional. */
  "PC8": "F3",
  /** Physical pin F7: VREF+; input. */
  "VREF+": "F7",
  /** Physical pin F8: PC1; bidirectional. */
  "PC1": "F8",
  /** Physical pin F9: PH1; bidirectional. */
  "PH1": "F9",
  /** Physical pin G1: PB15; bidirectional. */
  "PB15": "G1",
  /** Physical pin G2: PC6; bidirectional. */
  "PC6": "G2",
  /** Physical pin G3: PC5; bidirectional. */
  "PC5": "G3",
  /** Physical pin G7: PA3; bidirectional. */
  "PA3": "G7",
  /** Physical pin G8: PC3; bidirectional. */
  "PC3": "G8",
  /** Physical pin G9: PC0; bidirectional. */
  "PC0": "G9",
  /** Physical pin H1: PB14; bidirectional. */
  "PB14": "H1",
  /** Physical pin H2: PB13; bidirectional. */
  "PB13": "H2",
  /** Physical pin H3: PB10; bidirectional. */
  "PB10": "H3",
  /** Physical pin H4: PC4; bidirectional. */
  "PC4": "H4",
  /** Physical pin H5: PA6; bidirectional. */
  "PA6": "H5",
  /** Physical pin H6: PA5; bidirectional. */
  "PA5": "H6",
  /** Physical pin H7: REGOFF; input. */
  "REGOFF": "H7",
  /** Physical pin H8: PA1; bidirectional. */
  "PA1": "H8",
  /** Physical pin H9: VSS; passive. */
  "VSS_H9": "H9",
  /** Physical pin J1: PB12; bidirectional. */
  "PB12": "J1",
  /** Physical pin J2: PB11; bidirectional. */
  "PB11": "J2",
  /** Physical pin J3: VCAP_1; power_out. */
  "VCAP_1": "J3",
  /** Physical pin J4: PB2; bidirectional. */
  "PB2": "J4",
  /** Physical pin J5: PB1; bidirectional. */
  "PB1": "J5",
  /** Physical pin J6: PB0; bidirectional. */
  "PB0": "J6",
  /** Physical pin J7: PA7; bidirectional. */
  "PA7": "J7",
  /** Physical pin J8: PA4; bidirectional. */
  "PA4": "J8",
  /** Physical pin J9: PA2; bidirectional. */
  "PA2": "J9",
}) {
  override schema = "MCU_ST_STM32F2:STM32F205RGEx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F205RGTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f205rg.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F205RGTx extends Component.withPins({
  /** Physical pin 1: VBAT; power_in. */
  "VBAT": "1",
  /** Physical pin 2: PC13; bidirectional. */
  "PC13": "2",
  /** Physical pin 3: PC14; bidirectional. */
  "PC14": "3",
  /** Physical pin 4: PC15; bidirectional. */
  "PC15": "4",
  /** Physical pin 5: PH0; bidirectional. */
  "PH0": "5",
  /** Physical pin 6: PH1; bidirectional. */
  "PH1": "6",
  /** Physical pin 7: NRST; input. */
  "NRST": "7",
  /** Physical pin 8: PC0; bidirectional. */
  "PC0": "8",
  /** Physical pin 9: PC1; bidirectional. */
  "PC1": "9",
  /** Physical pin 10: PC2; bidirectional. */
  "PC2": "10",
  /** Physical pin 11: PC3; bidirectional. */
  "PC3": "11",
  /** Physical pin 12: VSSA; power_in. */
  "VSSA": "12",
  /** Physical pin 13: VDDA; power_in. */
  "VDDA": "13",
  /** Physical pin 14: PA0; bidirectional. */
  "PA0": "14",
  /** Physical pin 15: PA1; bidirectional. */
  "PA1": "15",
  /** Physical pin 16: PA2; bidirectional. */
  "PA2": "16",
  /** Physical pin 17: PA3; bidirectional. */
  "PA3": "17",
  /** Physical pin 18: VSS; power_in. */
  "VSS_18": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: PA4; bidirectional. */
  "PA4": "20",
  /** Physical pin 21: PA5; bidirectional. */
  "PA5": "21",
  /** Physical pin 22: PA6; bidirectional. */
  "PA6": "22",
  /** Physical pin 23: PA7; bidirectional. */
  "PA7": "23",
  /** Physical pin 24: PC4; bidirectional. */
  "PC4": "24",
  /** Physical pin 25: PC5; bidirectional. */
  "PC5": "25",
  /** Physical pin 26: PB0; bidirectional. */
  "PB0": "26",
  /** Physical pin 27: PB1; bidirectional. */
  "PB1": "27",
  /** Physical pin 28: PB2; bidirectional. */
  "PB2": "28",
  /** Physical pin 29: PB10; bidirectional. */
  "PB10": "29",
  /** Physical pin 30: PB11; bidirectional. */
  "PB11": "30",
  /** Physical pin 31: VCAP_1; power_out. */
  "VCAP_1": "31",
  /** Physical pin 32: VDD; power_in. */
  "VDD_32": "32",
  /** Physical pin 33: PB12; bidirectional. */
  "PB12": "33",
  /** Physical pin 34: PB13; bidirectional. */
  "PB13": "34",
  /** Physical pin 35: PB14; bidirectional. */
  "PB14": "35",
  /** Physical pin 36: PB15; bidirectional. */
  "PB15": "36",
  /** Physical pin 37: PC6; bidirectional. */
  "PC6": "37",
  /** Physical pin 38: PC7; bidirectional. */
  "PC7": "38",
  /** Physical pin 39: PC8; bidirectional. */
  "PC8": "39",
  /** Physical pin 40: PC9; bidirectional. */
  "PC9": "40",
  /** Physical pin 41: PA8; bidirectional. */
  "PA8": "41",
  /** Physical pin 42: PA9; bidirectional. */
  "PA9": "42",
  /** Physical pin 43: PA10; bidirectional. */
  "PA10": "43",
  /** Physical pin 44: PA11; bidirectional. */
  "PA11": "44",
  /** Physical pin 45: PA12; bidirectional. */
  "PA12": "45",
  /** Physical pin 46: PA13; bidirectional. */
  "PA13": "46",
  /** Physical pin 47: VCAP_2; power_out. */
  "VCAP_2": "47",
  /** Physical pin 48: VDD; power_in. */
  "VDD_48": "48",
  /** Physical pin 49: PA14; bidirectional. */
  "PA14": "49",
  /** Physical pin 50: PA15; bidirectional. */
  "PA15": "50",
  /** Physical pin 51: PC10; bidirectional. */
  "PC10": "51",
  /** Physical pin 52: PC11; bidirectional. */
  "PC11": "52",
  /** Physical pin 53: PC12; bidirectional. */
  "PC12": "53",
  /** Physical pin 54: PD2; bidirectional. */
  "PD2": "54",
  /** Physical pin 55: PB3; bidirectional. */
  "PB3": "55",
  /** Physical pin 56: PB4; bidirectional. */
  "PB4": "56",
  /** Physical pin 57: PB5; bidirectional. */
  "PB5": "57",
  /** Physical pin 58: PB6; bidirectional. */
  "PB6": "58",
  /** Physical pin 59: PB7; bidirectional. */
  "PB7": "59",
  /** Physical pin 60: BOOT0; input. */
  "BOOT0": "60",
  /** Physical pin 61: PB8; bidirectional. */
  "PB8": "61",
  /** Physical pin 62: PB9; bidirectional. */
  "PB9": "62",
  /** Physical pin 63: VSS; passive. */
  "VSS_63": "63",
  /** Physical pin 64: VDD; power_in. */
  "VDD_64": "64",
}) {
  override schema = "MCU_ST_STM32F2:STM32F205RGTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 51 GPIO, WLCSP66
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F205RGYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*Die411*.
 * @see https://www.st.com/resource/en/datasheet/stm32f205rg.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_CSP:ST_WLCSP-66_Die411.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F205RGYx extends Component.withPins({
  /** Physical pin A1: PA14; bidirectional. */
  "PA14": "A1",
  /** Physical pin A2: PA15; bidirectional. */
  "PA15": "A2",
  /** Physical pin A3: PC12; bidirectional. */
  "PC12": "A3",
  /** Physical pin A4: PB3; bidirectional. */
  "PB3": "A4",
  /** Physical pin A5: PB5; bidirectional. */
  "PB5": "A5",
  /** Physical pin A6: PB7; bidirectional. */
  "PB7": "A6",
  /** Physical pin A7: PB9; bidirectional. */
  "PB9": "A7",
  /** Physical pin A8: VDD; power_in. */
  "VDD_A8": "A8",
  /** Physical pin A9: VBAT; power_in. */
  "VBAT": "A9",
  /** Physical pin B1: VSS; power_in. */
  "VSS_B1": "B1",
  /** Physical pin B2: PA13; bidirectional. */
  "PA13": "B2",
  /** Physical pin B3: PC10; bidirectional. */
  "PC10": "B3",
  /** Physical pin B4: PB4; bidirectional. */
  "PB4": "B4",
  /** Physical pin B5: PB6; bidirectional. */
  "PB6": "B5",
  /** Physical pin B6: BOOT0; input. */
  "BOOT0": "B6",
  /** Physical pin B7: PB8; bidirectional. */
  "PB8": "B7",
  /** Physical pin B8: PC13; bidirectional. */
  "PC13": "B8",
  /** Physical pin B9: PC14; bidirectional. */
  "PC14": "B9",
  /** Physical pin C1: PA12; bidirectional. */
  "PA12": "C1",
  /** Physical pin C2: VCAP_2; power_out. */
  "VCAP_2": "C2",
  /** Physical pin C3: PC11; bidirectional. */
  "PC11": "C3",
  /** Physical pin C7: PD2; bidirectional. */
  "PD2": "C7",
  /** Physical pin C8: IRROFF; input. */
  "IRROFF": "C8",
  /** Physical pin C9: PC15; bidirectional. */
  "PC15": "C9",
  /** Physical pin D1: PC9; bidirectional. */
  "PC9": "D1",
  /** Physical pin D2: PA11; bidirectional. */
  "PA11": "D2",
  /** Physical pin D3: PA10; bidirectional. */
  "PA10": "D3",
  /** Physical pin D7: PC2; bidirectional. */
  "PC2": "D7",
  /** Physical pin D8: VSS; passive. */
  "VSS_D8": "D8",
  /** Physical pin D9: VDD; power_in. */
  "VDD_D9": "D9",
  /** Physical pin E1: VDD; power_in. */
  "VDD_E1": "E1",
  /** Physical pin E2: PA8; bidirectional. */
  "PA8": "E2",
  /** Physical pin E3: PA9; bidirectional. */
  "PA9": "E3",
  /** Physical pin E7: PA0; bidirectional. */
  "PA0": "E7",
  /** Physical pin E8: NRST; input. */
  "NRST": "E8",
  /** Physical pin E9: PH0; bidirectional. */
  "PH0": "E9",
  /** Physical pin F1: VSS; passive. */
  "VSS_F1": "F1",
  /** Physical pin F2: PC7; bidirectional. */
  "PC7": "F2",
  /** Physical pin F3: PC8; bidirectional. */
  "PC8": "F3",
  /** Physical pin F7: VREF+; input. */
  "VREF+": "F7",
  /** Physical pin F8: PC1; bidirectional. */
  "PC1": "F8",
  /** Physical pin F9: PH1; bidirectional. */
  "PH1": "F9",
  /** Physical pin G1: PB15; bidirectional. */
  "PB15": "G1",
  /** Physical pin G2: PC6; bidirectional. */
  "PC6": "G2",
  /** Physical pin G3: PC5; bidirectional. */
  "PC5": "G3",
  /** Physical pin G7: PA3; bidirectional. */
  "PA3": "G7",
  /** Physical pin G8: PC3; bidirectional. */
  "PC3": "G8",
  /** Physical pin G9: PC0; bidirectional. */
  "PC0": "G9",
  /** Physical pin H1: PB14; bidirectional. */
  "PB14": "H1",
  /** Physical pin H2: PB13; bidirectional. */
  "PB13": "H2",
  /** Physical pin H3: PB10; bidirectional. */
  "PB10": "H3",
  /** Physical pin H4: PC4; bidirectional. */
  "PC4": "H4",
  /** Physical pin H5: PA6; bidirectional. */
  "PA6": "H5",
  /** Physical pin H6: PA5; bidirectional. */
  "PA5": "H6",
  /** Physical pin H7: REGOFF; input. */
  "REGOFF": "H7",
  /** Physical pin H8: PA1; bidirectional. */
  "PA1": "H8",
  /** Physical pin H9: VSS; passive. */
  "VSS_H9": "H9",
  /** Physical pin J1: PB12; bidirectional. */
  "PB12": "J1",
  /** Physical pin J2: PB11; bidirectional. */
  "PB11": "J2",
  /** Physical pin J3: VCAP_1; power_out. */
  "VCAP_1": "J3",
  /** Physical pin J4: PB2; bidirectional. */
  "PB2": "J4",
  /** Physical pin J5: PB1; bidirectional. */
  "PB1": "J5",
  /** Physical pin J6: PB0; bidirectional. */
  "PB0": "J6",
  /** Physical pin J7: PA7; bidirectional. */
  "PA7": "J7",
  /** Physical pin J8: PA4; bidirectional. */
  "PA4": "J8",
  /** Physical pin J9: PA2; bidirectional. */
  "PA2": "J9",
}) {
  override schema = "MCU_ST_STM32F2:STM32F205RGYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 128-1024KB flash, 64-128KB RAM, 120 MHz, 1.8-3.6V, 82 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F205V_B-C-E-F-G_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f205vb.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F205V_B_C_E_F_G_Tx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: PH0; bidirectional. */
  "PH0": "12",
  /** Physical pin 13: PH1; bidirectional. */
  "PH1": "13",
  /** Physical pin 14: NRST; input. */
  "NRST": "14",
  /** Physical pin 15: PC0; bidirectional. */
  "PC0": "15",
  /** Physical pin 16: PC1; bidirectional. */
  "PC1": "16",
  /** Physical pin 17: PC2; bidirectional. */
  "PC2": "17",
  /** Physical pin 18: PC3; bidirectional. */
  "PC3": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: VSSA; power_in. */
  "VSSA": "20",
  /** Physical pin 21: VREF+; input. */
  "VREF+": "21",
  /** Physical pin 22: VDDA; power_in. */
  "VDDA": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: PA1; bidirectional. */
  "PA1": "24",
  /** Physical pin 25: PA2; bidirectional. */
  "PA2": "25",
  /** Physical pin 26: PA3; bidirectional. */
  "PA3": "26",
  /** Physical pin 27: VSS; passive. */
  "VSS_27": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: PA4; bidirectional. */
  "PA4": "29",
  /** Physical pin 30: PA5; bidirectional. */
  "PA5": "30",
  /** Physical pin 31: PA6; bidirectional. */
  "PA6": "31",
  /** Physical pin 32: PA7; bidirectional. */
  "PA7": "32",
  /** Physical pin 33: PC4; bidirectional. */
  "PC4": "33",
  /** Physical pin 34: PC5; bidirectional. */
  "PC5": "34",
  /** Physical pin 35: PB0; bidirectional. */
  "PB0": "35",
  /** Physical pin 36: PB1; bidirectional. */
  "PB1": "36",
  /** Physical pin 37: PB2; bidirectional. */
  "PB2": "37",
  /** Physical pin 38: PE7; bidirectional. */
  "PE7": "38",
  /** Physical pin 39: PE8; bidirectional. */
  "PE8": "39",
  /** Physical pin 40: PE9; bidirectional. */
  "PE9": "40",
  /** Physical pin 41: PE10; bidirectional. */
  "PE10": "41",
  /** Physical pin 42: PE11; bidirectional. */
  "PE11": "42",
  /** Physical pin 43: PE12; bidirectional. */
  "PE12": "43",
  /** Physical pin 44: PE13; bidirectional. */
  "PE13": "44",
  /** Physical pin 45: PE14; bidirectional. */
  "PE14": "45",
  /** Physical pin 46: PE15; bidirectional. */
  "PE15": "46",
  /** Physical pin 47: PB10; bidirectional. */
  "PB10": "47",
  /** Physical pin 48: PB11; bidirectional. */
  "PB11": "48",
  /** Physical pin 49: VCAP_1; power_out. */
  "VCAP_1": "49",
  /** Physical pin 50: VDD; power_in. */
  "VDD_50": "50",
  /** Physical pin 51: PB12; bidirectional. */
  "PB12": "51",
  /** Physical pin 52: PB13; bidirectional. */
  "PB13": "52",
  /** Physical pin 53: PB14; bidirectional. */
  "PB14": "53",
  /** Physical pin 54: PB15; bidirectional. */
  "PB15": "54",
  /** Physical pin 55: PD8; bidirectional. */
  "PD8": "55",
  /** Physical pin 56: PD9; bidirectional. */
  "PD9": "56",
  /** Physical pin 57: PD10; bidirectional. */
  "PD10": "57",
  /** Physical pin 58: PD11; bidirectional. */
  "PD11": "58",
  /** Physical pin 59: PD12; bidirectional. */
  "PD12": "59",
  /** Physical pin 60: PD13; bidirectional. */
  "PD13": "60",
  /** Physical pin 61: PD14; bidirectional. */
  "PD14": "61",
  /** Physical pin 62: PD15; bidirectional. */
  "PD15": "62",
  /** Physical pin 63: PC6; bidirectional. */
  "PC6": "63",
  /** Physical pin 64: PC7; bidirectional. */
  "PC7": "64",
  /** Physical pin 65: PC8; bidirectional. */
  "PC8": "65",
  /** Physical pin 66: PC9; bidirectional. */
  "PC9": "66",
  /** Physical pin 67: PA8; bidirectional. */
  "PA8": "67",
  /** Physical pin 68: PA9; bidirectional. */
  "PA9": "68",
  /** Physical pin 69: PA10; bidirectional. */
  "PA10": "69",
  /** Physical pin 70: PA11; bidirectional. */
  "PA11": "70",
  /** Physical pin 71: PA12; bidirectional. */
  "PA12": "71",
  /** Physical pin 72: PA13; bidirectional. */
  "PA13": "72",
  /** Physical pin 73: VCAP_2; power_out. */
  "VCAP_2": "73",
  /** Physical pin 74: VSS; passive. */
  "VSS_74": "74",
  /** Physical pin 75: VDD; power_in. */
  "VDD_75": "75",
  /** Physical pin 76: PA14; bidirectional. */
  "PA14": "76",
  /** Physical pin 77: PA15; bidirectional. */
  "PA15": "77",
  /** Physical pin 78: PC10; bidirectional. */
  "PC10": "78",
  /** Physical pin 79: PC11; bidirectional. */
  "PC11": "79",
  /** Physical pin 80: PC12; bidirectional. */
  "PC12": "80",
  /** Physical pin 81: PD0; bidirectional. */
  "PD0": "81",
  /** Physical pin 82: PD1; bidirectional. */
  "PD1": "82",
  /** Physical pin 83: PD2; bidirectional. */
  "PD2": "83",
  /** Physical pin 84: PD3; bidirectional. */
  "PD3": "84",
  /** Physical pin 85: PD4; bidirectional. */
  "PD4": "85",
  /** Physical pin 86: PD5; bidirectional. */
  "PD5": "86",
  /** Physical pin 87: PD6; bidirectional. */
  "PD6": "87",
  /** Physical pin 88: PD7; bidirectional. */
  "PD7": "88",
  /** Physical pin 89: PB3; bidirectional. */
  "PB3": "89",
  /** Physical pin 90: PB4; bidirectional. */
  "PB4": "90",
  /** Physical pin 91: PB5; bidirectional. */
  "PB5": "91",
  /** Physical pin 92: PB6; bidirectional. */
  "PB6": "92",
  /** Physical pin 93: PB7; bidirectional. */
  "PB7": "93",
  /** Physical pin 94: BOOT0; input. */
  "BOOT0": "94",
  /** Physical pin 95: PB8; bidirectional. */
  "PB8": "95",
  /** Physical pin 96: PB9; bidirectional. */
  "PB9": "96",
  /** Physical pin 97: PE0; bidirectional. */
  "PE0": "97",
  /** Physical pin 98: PE1; bidirectional. */
  "PE1": "98",
  /** Physical pin 99: RFU; no_connect. */
  "RFU": "99",
  /** Physical pin 100: VDD; power_in. */
  "VDD_100": "100",
}) {
  override schema = "MCU_ST_STM32F2:STM32F205V_B-C-E-F-G_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 128KB flash, 64KB RAM, 120 MHz, 1.8-3.6V, 82 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F205VBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f205vb.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F205VBTx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: PH0; bidirectional. */
  "PH0": "12",
  /** Physical pin 13: PH1; bidirectional. */
  "PH1": "13",
  /** Physical pin 14: NRST; input. */
  "NRST": "14",
  /** Physical pin 15: PC0; bidirectional. */
  "PC0": "15",
  /** Physical pin 16: PC1; bidirectional. */
  "PC1": "16",
  /** Physical pin 17: PC2; bidirectional. */
  "PC2": "17",
  /** Physical pin 18: PC3; bidirectional. */
  "PC3": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: VSSA; power_in. */
  "VSSA": "20",
  /** Physical pin 21: VREF+; input. */
  "VREF+": "21",
  /** Physical pin 22: VDDA; power_in. */
  "VDDA": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: PA1; bidirectional. */
  "PA1": "24",
  /** Physical pin 25: PA2; bidirectional. */
  "PA2": "25",
  /** Physical pin 26: PA3; bidirectional. */
  "PA3": "26",
  /** Physical pin 27: VSS; passive. */
  "VSS_27": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: PA4; bidirectional. */
  "PA4": "29",
  /** Physical pin 30: PA5; bidirectional. */
  "PA5": "30",
  /** Physical pin 31: PA6; bidirectional. */
  "PA6": "31",
  /** Physical pin 32: PA7; bidirectional. */
  "PA7": "32",
  /** Physical pin 33: PC4; bidirectional. */
  "PC4": "33",
  /** Physical pin 34: PC5; bidirectional. */
  "PC5": "34",
  /** Physical pin 35: PB0; bidirectional. */
  "PB0": "35",
  /** Physical pin 36: PB1; bidirectional. */
  "PB1": "36",
  /** Physical pin 37: PB2; bidirectional. */
  "PB2": "37",
  /** Physical pin 38: PE7; bidirectional. */
  "PE7": "38",
  /** Physical pin 39: PE8; bidirectional. */
  "PE8": "39",
  /** Physical pin 40: PE9; bidirectional. */
  "PE9": "40",
  /** Physical pin 41: PE10; bidirectional. */
  "PE10": "41",
  /** Physical pin 42: PE11; bidirectional. */
  "PE11": "42",
  /** Physical pin 43: PE12; bidirectional. */
  "PE12": "43",
  /** Physical pin 44: PE13; bidirectional. */
  "PE13": "44",
  /** Physical pin 45: PE14; bidirectional. */
  "PE14": "45",
  /** Physical pin 46: PE15; bidirectional. */
  "PE15": "46",
  /** Physical pin 47: PB10; bidirectional. */
  "PB10": "47",
  /** Physical pin 48: PB11; bidirectional. */
  "PB11": "48",
  /** Physical pin 49: VCAP_1; power_out. */
  "VCAP_1": "49",
  /** Physical pin 50: VDD; power_in. */
  "VDD_50": "50",
  /** Physical pin 51: PB12; bidirectional. */
  "PB12": "51",
  /** Physical pin 52: PB13; bidirectional. */
  "PB13": "52",
  /** Physical pin 53: PB14; bidirectional. */
  "PB14": "53",
  /** Physical pin 54: PB15; bidirectional. */
  "PB15": "54",
  /** Physical pin 55: PD8; bidirectional. */
  "PD8": "55",
  /** Physical pin 56: PD9; bidirectional. */
  "PD9": "56",
  /** Physical pin 57: PD10; bidirectional. */
  "PD10": "57",
  /** Physical pin 58: PD11; bidirectional. */
  "PD11": "58",
  /** Physical pin 59: PD12; bidirectional. */
  "PD12": "59",
  /** Physical pin 60: PD13; bidirectional. */
  "PD13": "60",
  /** Physical pin 61: PD14; bidirectional. */
  "PD14": "61",
  /** Physical pin 62: PD15; bidirectional. */
  "PD15": "62",
  /** Physical pin 63: PC6; bidirectional. */
  "PC6": "63",
  /** Physical pin 64: PC7; bidirectional. */
  "PC7": "64",
  /** Physical pin 65: PC8; bidirectional. */
  "PC8": "65",
  /** Physical pin 66: PC9; bidirectional. */
  "PC9": "66",
  /** Physical pin 67: PA8; bidirectional. */
  "PA8": "67",
  /** Physical pin 68: PA9; bidirectional. */
  "PA9": "68",
  /** Physical pin 69: PA10; bidirectional. */
  "PA10": "69",
  /** Physical pin 70: PA11; bidirectional. */
  "PA11": "70",
  /** Physical pin 71: PA12; bidirectional. */
  "PA12": "71",
  /** Physical pin 72: PA13; bidirectional. */
  "PA13": "72",
  /** Physical pin 73: VCAP_2; power_out. */
  "VCAP_2": "73",
  /** Physical pin 74: VSS; passive. */
  "VSS_74": "74",
  /** Physical pin 75: VDD; power_in. */
  "VDD_75": "75",
  /** Physical pin 76: PA14; bidirectional. */
  "PA14": "76",
  /** Physical pin 77: PA15; bidirectional. */
  "PA15": "77",
  /** Physical pin 78: PC10; bidirectional. */
  "PC10": "78",
  /** Physical pin 79: PC11; bidirectional. */
  "PC11": "79",
  /** Physical pin 80: PC12; bidirectional. */
  "PC12": "80",
  /** Physical pin 81: PD0; bidirectional. */
  "PD0": "81",
  /** Physical pin 82: PD1; bidirectional. */
  "PD1": "82",
  /** Physical pin 83: PD2; bidirectional. */
  "PD2": "83",
  /** Physical pin 84: PD3; bidirectional. */
  "PD3": "84",
  /** Physical pin 85: PD4; bidirectional. */
  "PD4": "85",
  /** Physical pin 86: PD5; bidirectional. */
  "PD5": "86",
  /** Physical pin 87: PD6; bidirectional. */
  "PD6": "87",
  /** Physical pin 88: PD7; bidirectional. */
  "PD7": "88",
  /** Physical pin 89: PB3; bidirectional. */
  "PB3": "89",
  /** Physical pin 90: PB4; bidirectional. */
  "PB4": "90",
  /** Physical pin 91: PB5; bidirectional. */
  "PB5": "91",
  /** Physical pin 92: PB6; bidirectional. */
  "PB6": "92",
  /** Physical pin 93: PB7; bidirectional. */
  "PB7": "93",
  /** Physical pin 94: BOOT0; input. */
  "BOOT0": "94",
  /** Physical pin 95: PB8; bidirectional. */
  "PB8": "95",
  /** Physical pin 96: PB9; bidirectional. */
  "PB9": "96",
  /** Physical pin 97: PE0; bidirectional. */
  "PE0": "97",
  /** Physical pin 98: PE1; bidirectional. */
  "PE1": "98",
  /** Physical pin 99: RFU; no_connect. */
  "RFU": "99",
  /** Physical pin 100: VDD; power_in. */
  "VDD_100": "100",
}) {
  override schema = "MCU_ST_STM32F2:STM32F205VBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 256KB flash, 96KB RAM, 120 MHz, 1.8-3.6V, 82 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F205VCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f205vc.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F205VCTx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: PH0; bidirectional. */
  "PH0": "12",
  /** Physical pin 13: PH1; bidirectional. */
  "PH1": "13",
  /** Physical pin 14: NRST; input. */
  "NRST": "14",
  /** Physical pin 15: PC0; bidirectional. */
  "PC0": "15",
  /** Physical pin 16: PC1; bidirectional. */
  "PC1": "16",
  /** Physical pin 17: PC2; bidirectional. */
  "PC2": "17",
  /** Physical pin 18: PC3; bidirectional. */
  "PC3": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: VSSA; power_in. */
  "VSSA": "20",
  /** Physical pin 21: VREF+; input. */
  "VREF+": "21",
  /** Physical pin 22: VDDA; power_in. */
  "VDDA": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: PA1; bidirectional. */
  "PA1": "24",
  /** Physical pin 25: PA2; bidirectional. */
  "PA2": "25",
  /** Physical pin 26: PA3; bidirectional. */
  "PA3": "26",
  /** Physical pin 27: VSS; passive. */
  "VSS_27": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: PA4; bidirectional. */
  "PA4": "29",
  /** Physical pin 30: PA5; bidirectional. */
  "PA5": "30",
  /** Physical pin 31: PA6; bidirectional. */
  "PA6": "31",
  /** Physical pin 32: PA7; bidirectional. */
  "PA7": "32",
  /** Physical pin 33: PC4; bidirectional. */
  "PC4": "33",
  /** Physical pin 34: PC5; bidirectional. */
  "PC5": "34",
  /** Physical pin 35: PB0; bidirectional. */
  "PB0": "35",
  /** Physical pin 36: PB1; bidirectional. */
  "PB1": "36",
  /** Physical pin 37: PB2; bidirectional. */
  "PB2": "37",
  /** Physical pin 38: PE7; bidirectional. */
  "PE7": "38",
  /** Physical pin 39: PE8; bidirectional. */
  "PE8": "39",
  /** Physical pin 40: PE9; bidirectional. */
  "PE9": "40",
  /** Physical pin 41: PE10; bidirectional. */
  "PE10": "41",
  /** Physical pin 42: PE11; bidirectional. */
  "PE11": "42",
  /** Physical pin 43: PE12; bidirectional. */
  "PE12": "43",
  /** Physical pin 44: PE13; bidirectional. */
  "PE13": "44",
  /** Physical pin 45: PE14; bidirectional. */
  "PE14": "45",
  /** Physical pin 46: PE15; bidirectional. */
  "PE15": "46",
  /** Physical pin 47: PB10; bidirectional. */
  "PB10": "47",
  /** Physical pin 48: PB11; bidirectional. */
  "PB11": "48",
  /** Physical pin 49: VCAP_1; power_out. */
  "VCAP_1": "49",
  /** Physical pin 50: VDD; power_in. */
  "VDD_50": "50",
  /** Physical pin 51: PB12; bidirectional. */
  "PB12": "51",
  /** Physical pin 52: PB13; bidirectional. */
  "PB13": "52",
  /** Physical pin 53: PB14; bidirectional. */
  "PB14": "53",
  /** Physical pin 54: PB15; bidirectional. */
  "PB15": "54",
  /** Physical pin 55: PD8; bidirectional. */
  "PD8": "55",
  /** Physical pin 56: PD9; bidirectional. */
  "PD9": "56",
  /** Physical pin 57: PD10; bidirectional. */
  "PD10": "57",
  /** Physical pin 58: PD11; bidirectional. */
  "PD11": "58",
  /** Physical pin 59: PD12; bidirectional. */
  "PD12": "59",
  /** Physical pin 60: PD13; bidirectional. */
  "PD13": "60",
  /** Physical pin 61: PD14; bidirectional. */
  "PD14": "61",
  /** Physical pin 62: PD15; bidirectional. */
  "PD15": "62",
  /** Physical pin 63: PC6; bidirectional. */
  "PC6": "63",
  /** Physical pin 64: PC7; bidirectional. */
  "PC7": "64",
  /** Physical pin 65: PC8; bidirectional. */
  "PC8": "65",
  /** Physical pin 66: PC9; bidirectional. */
  "PC9": "66",
  /** Physical pin 67: PA8; bidirectional. */
  "PA8": "67",
  /** Physical pin 68: PA9; bidirectional. */
  "PA9": "68",
  /** Physical pin 69: PA10; bidirectional. */
  "PA10": "69",
  /** Physical pin 70: PA11; bidirectional. */
  "PA11": "70",
  /** Physical pin 71: PA12; bidirectional. */
  "PA12": "71",
  /** Physical pin 72: PA13; bidirectional. */
  "PA13": "72",
  /** Physical pin 73: VCAP_2; power_out. */
  "VCAP_2": "73",
  /** Physical pin 74: VSS; passive. */
  "VSS_74": "74",
  /** Physical pin 75: VDD; power_in. */
  "VDD_75": "75",
  /** Physical pin 76: PA14; bidirectional. */
  "PA14": "76",
  /** Physical pin 77: PA15; bidirectional. */
  "PA15": "77",
  /** Physical pin 78: PC10; bidirectional. */
  "PC10": "78",
  /** Physical pin 79: PC11; bidirectional. */
  "PC11": "79",
  /** Physical pin 80: PC12; bidirectional. */
  "PC12": "80",
  /** Physical pin 81: PD0; bidirectional. */
  "PD0": "81",
  /** Physical pin 82: PD1; bidirectional. */
  "PD1": "82",
  /** Physical pin 83: PD2; bidirectional. */
  "PD2": "83",
  /** Physical pin 84: PD3; bidirectional. */
  "PD3": "84",
  /** Physical pin 85: PD4; bidirectional. */
  "PD4": "85",
  /** Physical pin 86: PD5; bidirectional. */
  "PD5": "86",
  /** Physical pin 87: PD6; bidirectional. */
  "PD6": "87",
  /** Physical pin 88: PD7; bidirectional. */
  "PD7": "88",
  /** Physical pin 89: PB3; bidirectional. */
  "PB3": "89",
  /** Physical pin 90: PB4; bidirectional. */
  "PB4": "90",
  /** Physical pin 91: PB5; bidirectional. */
  "PB5": "91",
  /** Physical pin 92: PB6; bidirectional. */
  "PB6": "92",
  /** Physical pin 93: PB7; bidirectional. */
  "PB7": "93",
  /** Physical pin 94: BOOT0; input. */
  "BOOT0": "94",
  /** Physical pin 95: PB8; bidirectional. */
  "PB8": "95",
  /** Physical pin 96: PB9; bidirectional. */
  "PB9": "96",
  /** Physical pin 97: PE0; bidirectional. */
  "PE0": "97",
  /** Physical pin 98: PE1; bidirectional. */
  "PE1": "98",
  /** Physical pin 99: RFU; no_connect. */
  "RFU": "99",
  /** Physical pin 100: VDD; power_in. */
  "VDD_100": "100",
}) {
  override schema = "MCU_ST_STM32F2:STM32F205VCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 512KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 82 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F205VETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f205ve.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F205VETx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: PH0; bidirectional. */
  "PH0": "12",
  /** Physical pin 13: PH1; bidirectional. */
  "PH1": "13",
  /** Physical pin 14: NRST; input. */
  "NRST": "14",
  /** Physical pin 15: PC0; bidirectional. */
  "PC0": "15",
  /** Physical pin 16: PC1; bidirectional. */
  "PC1": "16",
  /** Physical pin 17: PC2; bidirectional. */
  "PC2": "17",
  /** Physical pin 18: PC3; bidirectional. */
  "PC3": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: VSSA; power_in. */
  "VSSA": "20",
  /** Physical pin 21: VREF+; input. */
  "VREF+": "21",
  /** Physical pin 22: VDDA; power_in. */
  "VDDA": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: PA1; bidirectional. */
  "PA1": "24",
  /** Physical pin 25: PA2; bidirectional. */
  "PA2": "25",
  /** Physical pin 26: PA3; bidirectional. */
  "PA3": "26",
  /** Physical pin 27: VSS; passive. */
  "VSS_27": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: PA4; bidirectional. */
  "PA4": "29",
  /** Physical pin 30: PA5; bidirectional. */
  "PA5": "30",
  /** Physical pin 31: PA6; bidirectional. */
  "PA6": "31",
  /** Physical pin 32: PA7; bidirectional. */
  "PA7": "32",
  /** Physical pin 33: PC4; bidirectional. */
  "PC4": "33",
  /** Physical pin 34: PC5; bidirectional. */
  "PC5": "34",
  /** Physical pin 35: PB0; bidirectional. */
  "PB0": "35",
  /** Physical pin 36: PB1; bidirectional. */
  "PB1": "36",
  /** Physical pin 37: PB2; bidirectional. */
  "PB2": "37",
  /** Physical pin 38: PE7; bidirectional. */
  "PE7": "38",
  /** Physical pin 39: PE8; bidirectional. */
  "PE8": "39",
  /** Physical pin 40: PE9; bidirectional. */
  "PE9": "40",
  /** Physical pin 41: PE10; bidirectional. */
  "PE10": "41",
  /** Physical pin 42: PE11; bidirectional. */
  "PE11": "42",
  /** Physical pin 43: PE12; bidirectional. */
  "PE12": "43",
  /** Physical pin 44: PE13; bidirectional. */
  "PE13": "44",
  /** Physical pin 45: PE14; bidirectional. */
  "PE14": "45",
  /** Physical pin 46: PE15; bidirectional. */
  "PE15": "46",
  /** Physical pin 47: PB10; bidirectional. */
  "PB10": "47",
  /** Physical pin 48: PB11; bidirectional. */
  "PB11": "48",
  /** Physical pin 49: VCAP_1; power_out. */
  "VCAP_1": "49",
  /** Physical pin 50: VDD; power_in. */
  "VDD_50": "50",
  /** Physical pin 51: PB12; bidirectional. */
  "PB12": "51",
  /** Physical pin 52: PB13; bidirectional. */
  "PB13": "52",
  /** Physical pin 53: PB14; bidirectional. */
  "PB14": "53",
  /** Physical pin 54: PB15; bidirectional. */
  "PB15": "54",
  /** Physical pin 55: PD8; bidirectional. */
  "PD8": "55",
  /** Physical pin 56: PD9; bidirectional. */
  "PD9": "56",
  /** Physical pin 57: PD10; bidirectional. */
  "PD10": "57",
  /** Physical pin 58: PD11; bidirectional. */
  "PD11": "58",
  /** Physical pin 59: PD12; bidirectional. */
  "PD12": "59",
  /** Physical pin 60: PD13; bidirectional. */
  "PD13": "60",
  /** Physical pin 61: PD14; bidirectional. */
  "PD14": "61",
  /** Physical pin 62: PD15; bidirectional. */
  "PD15": "62",
  /** Physical pin 63: PC6; bidirectional. */
  "PC6": "63",
  /** Physical pin 64: PC7; bidirectional. */
  "PC7": "64",
  /** Physical pin 65: PC8; bidirectional. */
  "PC8": "65",
  /** Physical pin 66: PC9; bidirectional. */
  "PC9": "66",
  /** Physical pin 67: PA8; bidirectional. */
  "PA8": "67",
  /** Physical pin 68: PA9; bidirectional. */
  "PA9": "68",
  /** Physical pin 69: PA10; bidirectional. */
  "PA10": "69",
  /** Physical pin 70: PA11; bidirectional. */
  "PA11": "70",
  /** Physical pin 71: PA12; bidirectional. */
  "PA12": "71",
  /** Physical pin 72: PA13; bidirectional. */
  "PA13": "72",
  /** Physical pin 73: VCAP_2; power_out. */
  "VCAP_2": "73",
  /** Physical pin 74: VSS; passive. */
  "VSS_74": "74",
  /** Physical pin 75: VDD; power_in. */
  "VDD_75": "75",
  /** Physical pin 76: PA14; bidirectional. */
  "PA14": "76",
  /** Physical pin 77: PA15; bidirectional. */
  "PA15": "77",
  /** Physical pin 78: PC10; bidirectional. */
  "PC10": "78",
  /** Physical pin 79: PC11; bidirectional. */
  "PC11": "79",
  /** Physical pin 80: PC12; bidirectional. */
  "PC12": "80",
  /** Physical pin 81: PD0; bidirectional. */
  "PD0": "81",
  /** Physical pin 82: PD1; bidirectional. */
  "PD1": "82",
  /** Physical pin 83: PD2; bidirectional. */
  "PD2": "83",
  /** Physical pin 84: PD3; bidirectional. */
  "PD3": "84",
  /** Physical pin 85: PD4; bidirectional. */
  "PD4": "85",
  /** Physical pin 86: PD5; bidirectional. */
  "PD5": "86",
  /** Physical pin 87: PD6; bidirectional. */
  "PD6": "87",
  /** Physical pin 88: PD7; bidirectional. */
  "PD7": "88",
  /** Physical pin 89: PB3; bidirectional. */
  "PB3": "89",
  /** Physical pin 90: PB4; bidirectional. */
  "PB4": "90",
  /** Physical pin 91: PB5; bidirectional. */
  "PB5": "91",
  /** Physical pin 92: PB6; bidirectional. */
  "PB6": "92",
  /** Physical pin 93: PB7; bidirectional. */
  "PB7": "93",
  /** Physical pin 94: BOOT0; input. */
  "BOOT0": "94",
  /** Physical pin 95: PB8; bidirectional. */
  "PB8": "95",
  /** Physical pin 96: PB9; bidirectional. */
  "PB9": "96",
  /** Physical pin 97: PE0; bidirectional. */
  "PE0": "97",
  /** Physical pin 98: PE1; bidirectional. */
  "PE1": "98",
  /** Physical pin 99: RFU; no_connect. */
  "RFU": "99",
  /** Physical pin 100: VDD; power_in. */
  "VDD_100": "100",
}) {
  override schema = "MCU_ST_STM32F2:STM32F205VETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 768KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 82 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F205VFTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f205vf.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F205VFTx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: PH0; bidirectional. */
  "PH0": "12",
  /** Physical pin 13: PH1; bidirectional. */
  "PH1": "13",
  /** Physical pin 14: NRST; input. */
  "NRST": "14",
  /** Physical pin 15: PC0; bidirectional. */
  "PC0": "15",
  /** Physical pin 16: PC1; bidirectional. */
  "PC1": "16",
  /** Physical pin 17: PC2; bidirectional. */
  "PC2": "17",
  /** Physical pin 18: PC3; bidirectional. */
  "PC3": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: VSSA; power_in. */
  "VSSA": "20",
  /** Physical pin 21: VREF+; input. */
  "VREF+": "21",
  /** Physical pin 22: VDDA; power_in. */
  "VDDA": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: PA1; bidirectional. */
  "PA1": "24",
  /** Physical pin 25: PA2; bidirectional. */
  "PA2": "25",
  /** Physical pin 26: PA3; bidirectional. */
  "PA3": "26",
  /** Physical pin 27: VSS; passive. */
  "VSS_27": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: PA4; bidirectional. */
  "PA4": "29",
  /** Physical pin 30: PA5; bidirectional. */
  "PA5": "30",
  /** Physical pin 31: PA6; bidirectional. */
  "PA6": "31",
  /** Physical pin 32: PA7; bidirectional. */
  "PA7": "32",
  /** Physical pin 33: PC4; bidirectional. */
  "PC4": "33",
  /** Physical pin 34: PC5; bidirectional. */
  "PC5": "34",
  /** Physical pin 35: PB0; bidirectional. */
  "PB0": "35",
  /** Physical pin 36: PB1; bidirectional. */
  "PB1": "36",
  /** Physical pin 37: PB2; bidirectional. */
  "PB2": "37",
  /** Physical pin 38: PE7; bidirectional. */
  "PE7": "38",
  /** Physical pin 39: PE8; bidirectional. */
  "PE8": "39",
  /** Physical pin 40: PE9; bidirectional. */
  "PE9": "40",
  /** Physical pin 41: PE10; bidirectional. */
  "PE10": "41",
  /** Physical pin 42: PE11; bidirectional. */
  "PE11": "42",
  /** Physical pin 43: PE12; bidirectional. */
  "PE12": "43",
  /** Physical pin 44: PE13; bidirectional. */
  "PE13": "44",
  /** Physical pin 45: PE14; bidirectional. */
  "PE14": "45",
  /** Physical pin 46: PE15; bidirectional. */
  "PE15": "46",
  /** Physical pin 47: PB10; bidirectional. */
  "PB10": "47",
  /** Physical pin 48: PB11; bidirectional. */
  "PB11": "48",
  /** Physical pin 49: VCAP_1; power_out. */
  "VCAP_1": "49",
  /** Physical pin 50: VDD; power_in. */
  "VDD_50": "50",
  /** Physical pin 51: PB12; bidirectional. */
  "PB12": "51",
  /** Physical pin 52: PB13; bidirectional. */
  "PB13": "52",
  /** Physical pin 53: PB14; bidirectional. */
  "PB14": "53",
  /** Physical pin 54: PB15; bidirectional. */
  "PB15": "54",
  /** Physical pin 55: PD8; bidirectional. */
  "PD8": "55",
  /** Physical pin 56: PD9; bidirectional. */
  "PD9": "56",
  /** Physical pin 57: PD10; bidirectional. */
  "PD10": "57",
  /** Physical pin 58: PD11; bidirectional. */
  "PD11": "58",
  /** Physical pin 59: PD12; bidirectional. */
  "PD12": "59",
  /** Physical pin 60: PD13; bidirectional. */
  "PD13": "60",
  /** Physical pin 61: PD14; bidirectional. */
  "PD14": "61",
  /** Physical pin 62: PD15; bidirectional. */
  "PD15": "62",
  /** Physical pin 63: PC6; bidirectional. */
  "PC6": "63",
  /** Physical pin 64: PC7; bidirectional. */
  "PC7": "64",
  /** Physical pin 65: PC8; bidirectional. */
  "PC8": "65",
  /** Physical pin 66: PC9; bidirectional. */
  "PC9": "66",
  /** Physical pin 67: PA8; bidirectional. */
  "PA8": "67",
  /** Physical pin 68: PA9; bidirectional. */
  "PA9": "68",
  /** Physical pin 69: PA10; bidirectional. */
  "PA10": "69",
  /** Physical pin 70: PA11; bidirectional. */
  "PA11": "70",
  /** Physical pin 71: PA12; bidirectional. */
  "PA12": "71",
  /** Physical pin 72: PA13; bidirectional. */
  "PA13": "72",
  /** Physical pin 73: VCAP_2; power_out. */
  "VCAP_2": "73",
  /** Physical pin 74: VSS; passive. */
  "VSS_74": "74",
  /** Physical pin 75: VDD; power_in. */
  "VDD_75": "75",
  /** Physical pin 76: PA14; bidirectional. */
  "PA14": "76",
  /** Physical pin 77: PA15; bidirectional. */
  "PA15": "77",
  /** Physical pin 78: PC10; bidirectional. */
  "PC10": "78",
  /** Physical pin 79: PC11; bidirectional. */
  "PC11": "79",
  /** Physical pin 80: PC12; bidirectional. */
  "PC12": "80",
  /** Physical pin 81: PD0; bidirectional. */
  "PD0": "81",
  /** Physical pin 82: PD1; bidirectional. */
  "PD1": "82",
  /** Physical pin 83: PD2; bidirectional. */
  "PD2": "83",
  /** Physical pin 84: PD3; bidirectional. */
  "PD3": "84",
  /** Physical pin 85: PD4; bidirectional. */
  "PD4": "85",
  /** Physical pin 86: PD5; bidirectional. */
  "PD5": "86",
  /** Physical pin 87: PD6; bidirectional. */
  "PD6": "87",
  /** Physical pin 88: PD7; bidirectional. */
  "PD7": "88",
  /** Physical pin 89: PB3; bidirectional. */
  "PB3": "89",
  /** Physical pin 90: PB4; bidirectional. */
  "PB4": "90",
  /** Physical pin 91: PB5; bidirectional. */
  "PB5": "91",
  /** Physical pin 92: PB6; bidirectional. */
  "PB6": "92",
  /** Physical pin 93: PB7; bidirectional. */
  "PB7": "93",
  /** Physical pin 94: BOOT0; input. */
  "BOOT0": "94",
  /** Physical pin 95: PB8; bidirectional. */
  "PB8": "95",
  /** Physical pin 96: PB9; bidirectional. */
  "PB9": "96",
  /** Physical pin 97: PE0; bidirectional. */
  "PE0": "97",
  /** Physical pin 98: PE1; bidirectional. */
  "PE1": "98",
  /** Physical pin 99: RFU; no_connect. */
  "RFU": "99",
  /** Physical pin 100: VDD; power_in. */
  "VDD_100": "100",
}) {
  override schema = "MCU_ST_STM32F2:STM32F205VFTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 82 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F205VGTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f205vg.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F205VGTx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: PH0; bidirectional. */
  "PH0": "12",
  /** Physical pin 13: PH1; bidirectional. */
  "PH1": "13",
  /** Physical pin 14: NRST; input. */
  "NRST": "14",
  /** Physical pin 15: PC0; bidirectional. */
  "PC0": "15",
  /** Physical pin 16: PC1; bidirectional. */
  "PC1": "16",
  /** Physical pin 17: PC2; bidirectional. */
  "PC2": "17",
  /** Physical pin 18: PC3; bidirectional. */
  "PC3": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: VSSA; power_in. */
  "VSSA": "20",
  /** Physical pin 21: VREF+; input. */
  "VREF+": "21",
  /** Physical pin 22: VDDA; power_in. */
  "VDDA": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: PA1; bidirectional. */
  "PA1": "24",
  /** Physical pin 25: PA2; bidirectional. */
  "PA2": "25",
  /** Physical pin 26: PA3; bidirectional. */
  "PA3": "26",
  /** Physical pin 27: VSS; passive. */
  "VSS_27": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: PA4; bidirectional. */
  "PA4": "29",
  /** Physical pin 30: PA5; bidirectional. */
  "PA5": "30",
  /** Physical pin 31: PA6; bidirectional. */
  "PA6": "31",
  /** Physical pin 32: PA7; bidirectional. */
  "PA7": "32",
  /** Physical pin 33: PC4; bidirectional. */
  "PC4": "33",
  /** Physical pin 34: PC5; bidirectional. */
  "PC5": "34",
  /** Physical pin 35: PB0; bidirectional. */
  "PB0": "35",
  /** Physical pin 36: PB1; bidirectional. */
  "PB1": "36",
  /** Physical pin 37: PB2; bidirectional. */
  "PB2": "37",
  /** Physical pin 38: PE7; bidirectional. */
  "PE7": "38",
  /** Physical pin 39: PE8; bidirectional. */
  "PE8": "39",
  /** Physical pin 40: PE9; bidirectional. */
  "PE9": "40",
  /** Physical pin 41: PE10; bidirectional. */
  "PE10": "41",
  /** Physical pin 42: PE11; bidirectional. */
  "PE11": "42",
  /** Physical pin 43: PE12; bidirectional. */
  "PE12": "43",
  /** Physical pin 44: PE13; bidirectional. */
  "PE13": "44",
  /** Physical pin 45: PE14; bidirectional. */
  "PE14": "45",
  /** Physical pin 46: PE15; bidirectional. */
  "PE15": "46",
  /** Physical pin 47: PB10; bidirectional. */
  "PB10": "47",
  /** Physical pin 48: PB11; bidirectional. */
  "PB11": "48",
  /** Physical pin 49: VCAP_1; power_out. */
  "VCAP_1": "49",
  /** Physical pin 50: VDD; power_in. */
  "VDD_50": "50",
  /** Physical pin 51: PB12; bidirectional. */
  "PB12": "51",
  /** Physical pin 52: PB13; bidirectional. */
  "PB13": "52",
  /** Physical pin 53: PB14; bidirectional. */
  "PB14": "53",
  /** Physical pin 54: PB15; bidirectional. */
  "PB15": "54",
  /** Physical pin 55: PD8; bidirectional. */
  "PD8": "55",
  /** Physical pin 56: PD9; bidirectional. */
  "PD9": "56",
  /** Physical pin 57: PD10; bidirectional. */
  "PD10": "57",
  /** Physical pin 58: PD11; bidirectional. */
  "PD11": "58",
  /** Physical pin 59: PD12; bidirectional. */
  "PD12": "59",
  /** Physical pin 60: PD13; bidirectional. */
  "PD13": "60",
  /** Physical pin 61: PD14; bidirectional. */
  "PD14": "61",
  /** Physical pin 62: PD15; bidirectional. */
  "PD15": "62",
  /** Physical pin 63: PC6; bidirectional. */
  "PC6": "63",
  /** Physical pin 64: PC7; bidirectional. */
  "PC7": "64",
  /** Physical pin 65: PC8; bidirectional. */
  "PC8": "65",
  /** Physical pin 66: PC9; bidirectional. */
  "PC9": "66",
  /** Physical pin 67: PA8; bidirectional. */
  "PA8": "67",
  /** Physical pin 68: PA9; bidirectional. */
  "PA9": "68",
  /** Physical pin 69: PA10; bidirectional. */
  "PA10": "69",
  /** Physical pin 70: PA11; bidirectional. */
  "PA11": "70",
  /** Physical pin 71: PA12; bidirectional. */
  "PA12": "71",
  /** Physical pin 72: PA13; bidirectional. */
  "PA13": "72",
  /** Physical pin 73: VCAP_2; power_out. */
  "VCAP_2": "73",
  /** Physical pin 74: VSS; passive. */
  "VSS_74": "74",
  /** Physical pin 75: VDD; power_in. */
  "VDD_75": "75",
  /** Physical pin 76: PA14; bidirectional. */
  "PA14": "76",
  /** Physical pin 77: PA15; bidirectional. */
  "PA15": "77",
  /** Physical pin 78: PC10; bidirectional. */
  "PC10": "78",
  /** Physical pin 79: PC11; bidirectional. */
  "PC11": "79",
  /** Physical pin 80: PC12; bidirectional. */
  "PC12": "80",
  /** Physical pin 81: PD0; bidirectional. */
  "PD0": "81",
  /** Physical pin 82: PD1; bidirectional. */
  "PD1": "82",
  /** Physical pin 83: PD2; bidirectional. */
  "PD2": "83",
  /** Physical pin 84: PD3; bidirectional. */
  "PD3": "84",
  /** Physical pin 85: PD4; bidirectional. */
  "PD4": "85",
  /** Physical pin 86: PD5; bidirectional. */
  "PD5": "86",
  /** Physical pin 87: PD6; bidirectional. */
  "PD6": "87",
  /** Physical pin 88: PD7; bidirectional. */
  "PD7": "88",
  /** Physical pin 89: PB3; bidirectional. */
  "PB3": "89",
  /** Physical pin 90: PB4; bidirectional. */
  "PB4": "90",
  /** Physical pin 91: PB5; bidirectional. */
  "PB5": "91",
  /** Physical pin 92: PB6; bidirectional. */
  "PB6": "92",
  /** Physical pin 93: PB7; bidirectional. */
  "PB7": "93",
  /** Physical pin 94: BOOT0; input. */
  "BOOT0": "94",
  /** Physical pin 95: PB8; bidirectional. */
  "PB8": "95",
  /** Physical pin 96: PB9; bidirectional. */
  "PB9": "96",
  /** Physical pin 97: PE0; bidirectional. */
  "PE0": "97",
  /** Physical pin 98: PE1; bidirectional. */
  "PE1": "98",
  /** Physical pin 99: RFU; no_connect. */
  "RFU": "99",
  /** Physical pin 100: VDD; power_in. */
  "VDD_100": "100",
}) {
  override schema = "MCU_ST_STM32F2:STM32F205VGTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 256-1024KB flash, 96-128KB RAM, 120 MHz, 1.8-3.6V, 114 GPIO, LQFP144
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F205Z_C-E-F-G_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f205zc.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F205Z_C_E_F_G_Tx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: PF0; bidirectional. */
  "PF0": "10",
  /** Physical pin 11: PF1; bidirectional. */
  "PF1": "11",
  /** Physical pin 12: PF2; bidirectional. */
  "PF2": "12",
  /** Physical pin 13: PF3; bidirectional. */
  "PF3": "13",
  /** Physical pin 14: PF4; bidirectional. */
  "PF4": "14",
  /** Physical pin 15: PF5; bidirectional. */
  "PF5": "15",
  /** Physical pin 16: VSS; power_in. */
  "VSS_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: PF6; bidirectional. */
  "PF6": "18",
  /** Physical pin 19: PF7; bidirectional. */
  "PF7": "19",
  /** Physical pin 20: PF8; bidirectional. */
  "PF8": "20",
  /** Physical pin 21: PF9; bidirectional. */
  "PF9": "21",
  /** Physical pin 22: PF10; bidirectional. */
  "PF10": "22",
  /** Physical pin 23: PH0; bidirectional. */
  "PH0": "23",
  /** Physical pin 24: PH1; bidirectional. */
  "PH1": "24",
  /** Physical pin 25: NRST; input. */
  "NRST": "25",
  /** Physical pin 26: PC0; bidirectional. */
  "PC0": "26",
  /** Physical pin 27: PC1; bidirectional. */
  "PC1": "27",
  /** Physical pin 28: PC2; bidirectional. */
  "PC2": "28",
  /** Physical pin 29: PC3; bidirectional. */
  "PC3": "29",
  /** Physical pin 30: VDD; power_in. */
  "VDD_30": "30",
  /** Physical pin 31: VSSA; power_in. */
  "VSSA": "31",
  /** Physical pin 32: VREF+; input. */
  "VREF+": "32",
  /** Physical pin 33: VDDA; power_in. */
  "VDDA": "33",
  /** Physical pin 34: PA0; bidirectional. */
  "PA0": "34",
  /** Physical pin 35: PA1; bidirectional. */
  "PA1": "35",
  /** Physical pin 36: PA2; bidirectional. */
  "PA2": "36",
  /** Physical pin 37: PA3; bidirectional. */
  "PA3": "37",
  /** Physical pin 38: VSS; passive. */
  "VSS_38": "38",
  /** Physical pin 39: VDD; power_in. */
  "VDD_39": "39",
  /** Physical pin 40: PA4; bidirectional. */
  "PA4": "40",
  /** Physical pin 41: PA5; bidirectional. */
  "PA5": "41",
  /** Physical pin 42: PA6; bidirectional. */
  "PA6": "42",
  /** Physical pin 43: PA7; bidirectional. */
  "PA7": "43",
  /** Physical pin 44: PC4; bidirectional. */
  "PC4": "44",
  /** Physical pin 45: PC5; bidirectional. */
  "PC5": "45",
  /** Physical pin 46: PB0; bidirectional. */
  "PB0": "46",
  /** Physical pin 47: PB1; bidirectional. */
  "PB1": "47",
  /** Physical pin 48: PB2; bidirectional. */
  "PB2": "48",
  /** Physical pin 49: PF11; bidirectional. */
  "PF11": "49",
  /** Physical pin 50: PF12; bidirectional. */
  "PF12": "50",
  /** Physical pin 51: VSS; passive. */
  "VSS_51": "51",
  /** Physical pin 52: VDD; power_in. */
  "VDD_52": "52",
  /** Physical pin 53: PF13; bidirectional. */
  "PF13": "53",
  /** Physical pin 54: PF14; bidirectional. */
  "PF14": "54",
  /** Physical pin 55: PF15; bidirectional. */
  "PF15": "55",
  /** Physical pin 56: PG0; bidirectional. */
  "PG0": "56",
  /** Physical pin 57: PG1; bidirectional. */
  "PG1": "57",
  /** Physical pin 58: PE7; bidirectional. */
  "PE7": "58",
  /** Physical pin 59: PE8; bidirectional. */
  "PE8": "59",
  /** Physical pin 60: PE9; bidirectional. */
  "PE9": "60",
  /** Physical pin 61: VSS; passive. */
  "VSS_61": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: PE10; bidirectional. */
  "PE10": "63",
  /** Physical pin 64: PE11; bidirectional. */
  "PE11": "64",
  /** Physical pin 65: PE12; bidirectional. */
  "PE12": "65",
  /** Physical pin 66: PE13; bidirectional. */
  "PE13": "66",
  /** Physical pin 67: PE14; bidirectional. */
  "PE14": "67",
  /** Physical pin 68: PE15; bidirectional. */
  "PE15": "68",
  /** Physical pin 69: PB10; bidirectional. */
  "PB10": "69",
  /** Physical pin 70: PB11; bidirectional. */
  "PB11": "70",
  /** Physical pin 71: VCAP_1; power_out. */
  "VCAP_1": "71",
  /** Physical pin 72: VDD; power_in. */
  "VDD_72": "72",
  /** Physical pin 73: PB12; bidirectional. */
  "PB12": "73",
  /** Physical pin 74: PB13; bidirectional. */
  "PB13": "74",
  /** Physical pin 75: PB14; bidirectional. */
  "PB14": "75",
  /** Physical pin 76: PB15; bidirectional. */
  "PB15": "76",
  /** Physical pin 77: PD8; bidirectional. */
  "PD8": "77",
  /** Physical pin 78: PD9; bidirectional. */
  "PD9": "78",
  /** Physical pin 79: PD10; bidirectional. */
  "PD10": "79",
  /** Physical pin 80: PD11; bidirectional. */
  "PD11": "80",
  /** Physical pin 81: PD12; bidirectional. */
  "PD12": "81",
  /** Physical pin 82: PD13; bidirectional. */
  "PD13": "82",
  /** Physical pin 83: VSS; passive. */
  "VSS_83": "83",
  /** Physical pin 84: VDD; power_in. */
  "VDD_84": "84",
  /** Physical pin 85: PD14; bidirectional. */
  "PD14": "85",
  /** Physical pin 86: PD15; bidirectional. */
  "PD15": "86",
  /** Physical pin 87: PG2; bidirectional. */
  "PG2": "87",
  /** Physical pin 88: PG3; bidirectional. */
  "PG3": "88",
  /** Physical pin 89: PG4; bidirectional. */
  "PG4": "89",
  /** Physical pin 90: PG5; bidirectional. */
  "PG5": "90",
  /** Physical pin 91: PG6; bidirectional. */
  "PG6": "91",
  /** Physical pin 92: PG7; bidirectional. */
  "PG7": "92",
  /** Physical pin 93: PG8; bidirectional. */
  "PG8": "93",
  /** Physical pin 94: VSS; passive. */
  "VSS_94": "94",
  /** Physical pin 95: VDD; power_in. */
  "VDD_95": "95",
  /** Physical pin 96: PC6; bidirectional. */
  "PC6": "96",
  /** Physical pin 97: PC7; bidirectional. */
  "PC7": "97",
  /** Physical pin 98: PC8; bidirectional. */
  "PC8": "98",
  /** Physical pin 99: PC9; bidirectional. */
  "PC9": "99",
  /** Physical pin 100: PA8; bidirectional. */
  "PA8": "100",
  /** Physical pin 101: PA9; bidirectional. */
  "PA9": "101",
  /** Physical pin 102: PA10; bidirectional. */
  "PA10": "102",
  /** Physical pin 103: PA11; bidirectional. */
  "PA11": "103",
  /** Physical pin 104: PA12; bidirectional. */
  "PA12": "104",
  /** Physical pin 105: PA13; bidirectional. */
  "PA13": "105",
  /** Physical pin 106: VCAP_2; power_out. */
  "VCAP_2": "106",
  /** Physical pin 107: VSS; passive. */
  "VSS_107": "107",
  /** Physical pin 108: VDD; power_in. */
  "VDD_108": "108",
  /** Physical pin 109: PA14; bidirectional. */
  "PA14": "109",
  /** Physical pin 110: PA15; bidirectional. */
  "PA15": "110",
  /** Physical pin 111: PC10; bidirectional. */
  "PC10": "111",
  /** Physical pin 112: PC11; bidirectional. */
  "PC11": "112",
  /** Physical pin 113: PC12; bidirectional. */
  "PC12": "113",
  /** Physical pin 114: PD0; bidirectional. */
  "PD0": "114",
  /** Physical pin 115: PD1; bidirectional. */
  "PD1": "115",
  /** Physical pin 116: PD2; bidirectional. */
  "PD2": "116",
  /** Physical pin 117: PD3; bidirectional. */
  "PD3": "117",
  /** Physical pin 118: PD4; bidirectional. */
  "PD4": "118",
  /** Physical pin 119: PD5; bidirectional. */
  "PD5": "119",
  /** Physical pin 120: VSS; passive. */
  "VSS_120": "120",
  /** Physical pin 121: VDD; power_in. */
  "VDD_121": "121",
  /** Physical pin 122: PD6; bidirectional. */
  "PD6": "122",
  /** Physical pin 123: PD7; bidirectional. */
  "PD7": "123",
  /** Physical pin 124: PG9; bidirectional. */
  "PG9": "124",
  /** Physical pin 125: PG10; bidirectional. */
  "PG10": "125",
  /** Physical pin 126: PG11; bidirectional. */
  "PG11": "126",
  /** Physical pin 127: PG12; bidirectional. */
  "PG12": "127",
  /** Physical pin 128: PG13; bidirectional. */
  "PG13": "128",
  /** Physical pin 129: PG14; bidirectional. */
  "PG14": "129",
  /** Physical pin 130: VSS; passive. */
  "VSS_130": "130",
  /** Physical pin 131: VDD; power_in. */
  "VDD_131": "131",
  /** Physical pin 132: PG15; bidirectional. */
  "PG15": "132",
  /** Physical pin 133: PB3; bidirectional. */
  "PB3": "133",
  /** Physical pin 134: PB4; bidirectional. */
  "PB4": "134",
  /** Physical pin 135: PB5; bidirectional. */
  "PB5": "135",
  /** Physical pin 136: PB6; bidirectional. */
  "PB6": "136",
  /** Physical pin 137: PB7; bidirectional. */
  "PB7": "137",
  /** Physical pin 138: BOOT0; input. */
  "BOOT0": "138",
  /** Physical pin 139: PB8; bidirectional. */
  "PB8": "139",
  /** Physical pin 140: PB9; bidirectional. */
  "PB9": "140",
  /** Physical pin 141: PE0; bidirectional. */
  "PE0": "141",
  /** Physical pin 142: PE1; bidirectional. */
  "PE1": "142",
  /** Physical pin 143: RFU; no_connect. */
  "RFU": "143",
  /** Physical pin 144: VDD; power_in. */
  "VDD_144": "144",
}) {
  override schema = "MCU_ST_STM32F2:STM32F205Z_C-E-F-G_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 256KB flash, 96KB RAM, 120 MHz, 1.8-3.6V, 114 GPIO, LQFP144
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F205ZCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f205zc.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F205ZCTx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: PF0; bidirectional. */
  "PF0": "10",
  /** Physical pin 11: PF1; bidirectional. */
  "PF1": "11",
  /** Physical pin 12: PF2; bidirectional. */
  "PF2": "12",
  /** Physical pin 13: PF3; bidirectional. */
  "PF3": "13",
  /** Physical pin 14: PF4; bidirectional. */
  "PF4": "14",
  /** Physical pin 15: PF5; bidirectional. */
  "PF5": "15",
  /** Physical pin 16: VSS; power_in. */
  "VSS_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: PF6; bidirectional. */
  "PF6": "18",
  /** Physical pin 19: PF7; bidirectional. */
  "PF7": "19",
  /** Physical pin 20: PF8; bidirectional. */
  "PF8": "20",
  /** Physical pin 21: PF9; bidirectional. */
  "PF9": "21",
  /** Physical pin 22: PF10; bidirectional. */
  "PF10": "22",
  /** Physical pin 23: PH0; bidirectional. */
  "PH0": "23",
  /** Physical pin 24: PH1; bidirectional. */
  "PH1": "24",
  /** Physical pin 25: NRST; input. */
  "NRST": "25",
  /** Physical pin 26: PC0; bidirectional. */
  "PC0": "26",
  /** Physical pin 27: PC1; bidirectional. */
  "PC1": "27",
  /** Physical pin 28: PC2; bidirectional. */
  "PC2": "28",
  /** Physical pin 29: PC3; bidirectional. */
  "PC3": "29",
  /** Physical pin 30: VDD; power_in. */
  "VDD_30": "30",
  /** Physical pin 31: VSSA; power_in. */
  "VSSA": "31",
  /** Physical pin 32: VREF+; input. */
  "VREF+": "32",
  /** Physical pin 33: VDDA; power_in. */
  "VDDA": "33",
  /** Physical pin 34: PA0; bidirectional. */
  "PA0": "34",
  /** Physical pin 35: PA1; bidirectional. */
  "PA1": "35",
  /** Physical pin 36: PA2; bidirectional. */
  "PA2": "36",
  /** Physical pin 37: PA3; bidirectional. */
  "PA3": "37",
  /** Physical pin 38: VSS; passive. */
  "VSS_38": "38",
  /** Physical pin 39: VDD; power_in. */
  "VDD_39": "39",
  /** Physical pin 40: PA4; bidirectional. */
  "PA4": "40",
  /** Physical pin 41: PA5; bidirectional. */
  "PA5": "41",
  /** Physical pin 42: PA6; bidirectional. */
  "PA6": "42",
  /** Physical pin 43: PA7; bidirectional. */
  "PA7": "43",
  /** Physical pin 44: PC4; bidirectional. */
  "PC4": "44",
  /** Physical pin 45: PC5; bidirectional. */
  "PC5": "45",
  /** Physical pin 46: PB0; bidirectional. */
  "PB0": "46",
  /** Physical pin 47: PB1; bidirectional. */
  "PB1": "47",
  /** Physical pin 48: PB2; bidirectional. */
  "PB2": "48",
  /** Physical pin 49: PF11; bidirectional. */
  "PF11": "49",
  /** Physical pin 50: PF12; bidirectional. */
  "PF12": "50",
  /** Physical pin 51: VSS; passive. */
  "VSS_51": "51",
  /** Physical pin 52: VDD; power_in. */
  "VDD_52": "52",
  /** Physical pin 53: PF13; bidirectional. */
  "PF13": "53",
  /** Physical pin 54: PF14; bidirectional. */
  "PF14": "54",
  /** Physical pin 55: PF15; bidirectional. */
  "PF15": "55",
  /** Physical pin 56: PG0; bidirectional. */
  "PG0": "56",
  /** Physical pin 57: PG1; bidirectional. */
  "PG1": "57",
  /** Physical pin 58: PE7; bidirectional. */
  "PE7": "58",
  /** Physical pin 59: PE8; bidirectional. */
  "PE8": "59",
  /** Physical pin 60: PE9; bidirectional. */
  "PE9": "60",
  /** Physical pin 61: VSS; passive. */
  "VSS_61": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: PE10; bidirectional. */
  "PE10": "63",
  /** Physical pin 64: PE11; bidirectional. */
  "PE11": "64",
  /** Physical pin 65: PE12; bidirectional. */
  "PE12": "65",
  /** Physical pin 66: PE13; bidirectional. */
  "PE13": "66",
  /** Physical pin 67: PE14; bidirectional. */
  "PE14": "67",
  /** Physical pin 68: PE15; bidirectional. */
  "PE15": "68",
  /** Physical pin 69: PB10; bidirectional. */
  "PB10": "69",
  /** Physical pin 70: PB11; bidirectional. */
  "PB11": "70",
  /** Physical pin 71: VCAP_1; power_out. */
  "VCAP_1": "71",
  /** Physical pin 72: VDD; power_in. */
  "VDD_72": "72",
  /** Physical pin 73: PB12; bidirectional. */
  "PB12": "73",
  /** Physical pin 74: PB13; bidirectional. */
  "PB13": "74",
  /** Physical pin 75: PB14; bidirectional. */
  "PB14": "75",
  /** Physical pin 76: PB15; bidirectional. */
  "PB15": "76",
  /** Physical pin 77: PD8; bidirectional. */
  "PD8": "77",
  /** Physical pin 78: PD9; bidirectional. */
  "PD9": "78",
  /** Physical pin 79: PD10; bidirectional. */
  "PD10": "79",
  /** Physical pin 80: PD11; bidirectional. */
  "PD11": "80",
  /** Physical pin 81: PD12; bidirectional. */
  "PD12": "81",
  /** Physical pin 82: PD13; bidirectional. */
  "PD13": "82",
  /** Physical pin 83: VSS; passive. */
  "VSS_83": "83",
  /** Physical pin 84: VDD; power_in. */
  "VDD_84": "84",
  /** Physical pin 85: PD14; bidirectional. */
  "PD14": "85",
  /** Physical pin 86: PD15; bidirectional. */
  "PD15": "86",
  /** Physical pin 87: PG2; bidirectional. */
  "PG2": "87",
  /** Physical pin 88: PG3; bidirectional. */
  "PG3": "88",
  /** Physical pin 89: PG4; bidirectional. */
  "PG4": "89",
  /** Physical pin 90: PG5; bidirectional. */
  "PG5": "90",
  /** Physical pin 91: PG6; bidirectional. */
  "PG6": "91",
  /** Physical pin 92: PG7; bidirectional. */
  "PG7": "92",
  /** Physical pin 93: PG8; bidirectional. */
  "PG8": "93",
  /** Physical pin 94: VSS; passive. */
  "VSS_94": "94",
  /** Physical pin 95: VDD; power_in. */
  "VDD_95": "95",
  /** Physical pin 96: PC6; bidirectional. */
  "PC6": "96",
  /** Physical pin 97: PC7; bidirectional. */
  "PC7": "97",
  /** Physical pin 98: PC8; bidirectional. */
  "PC8": "98",
  /** Physical pin 99: PC9; bidirectional. */
  "PC9": "99",
  /** Physical pin 100: PA8; bidirectional. */
  "PA8": "100",
  /** Physical pin 101: PA9; bidirectional. */
  "PA9": "101",
  /** Physical pin 102: PA10; bidirectional. */
  "PA10": "102",
  /** Physical pin 103: PA11; bidirectional. */
  "PA11": "103",
  /** Physical pin 104: PA12; bidirectional. */
  "PA12": "104",
  /** Physical pin 105: PA13; bidirectional. */
  "PA13": "105",
  /** Physical pin 106: VCAP_2; power_out. */
  "VCAP_2": "106",
  /** Physical pin 107: VSS; passive. */
  "VSS_107": "107",
  /** Physical pin 108: VDD; power_in. */
  "VDD_108": "108",
  /** Physical pin 109: PA14; bidirectional. */
  "PA14": "109",
  /** Physical pin 110: PA15; bidirectional. */
  "PA15": "110",
  /** Physical pin 111: PC10; bidirectional. */
  "PC10": "111",
  /** Physical pin 112: PC11; bidirectional. */
  "PC11": "112",
  /** Physical pin 113: PC12; bidirectional. */
  "PC12": "113",
  /** Physical pin 114: PD0; bidirectional. */
  "PD0": "114",
  /** Physical pin 115: PD1; bidirectional. */
  "PD1": "115",
  /** Physical pin 116: PD2; bidirectional. */
  "PD2": "116",
  /** Physical pin 117: PD3; bidirectional. */
  "PD3": "117",
  /** Physical pin 118: PD4; bidirectional. */
  "PD4": "118",
  /** Physical pin 119: PD5; bidirectional. */
  "PD5": "119",
  /** Physical pin 120: VSS; passive. */
  "VSS_120": "120",
  /** Physical pin 121: VDD; power_in. */
  "VDD_121": "121",
  /** Physical pin 122: PD6; bidirectional. */
  "PD6": "122",
  /** Physical pin 123: PD7; bidirectional. */
  "PD7": "123",
  /** Physical pin 124: PG9; bidirectional. */
  "PG9": "124",
  /** Physical pin 125: PG10; bidirectional. */
  "PG10": "125",
  /** Physical pin 126: PG11; bidirectional. */
  "PG11": "126",
  /** Physical pin 127: PG12; bidirectional. */
  "PG12": "127",
  /** Physical pin 128: PG13; bidirectional. */
  "PG13": "128",
  /** Physical pin 129: PG14; bidirectional. */
  "PG14": "129",
  /** Physical pin 130: VSS; passive. */
  "VSS_130": "130",
  /** Physical pin 131: VDD; power_in. */
  "VDD_131": "131",
  /** Physical pin 132: PG15; bidirectional. */
  "PG15": "132",
  /** Physical pin 133: PB3; bidirectional. */
  "PB3": "133",
  /** Physical pin 134: PB4; bidirectional. */
  "PB4": "134",
  /** Physical pin 135: PB5; bidirectional. */
  "PB5": "135",
  /** Physical pin 136: PB6; bidirectional. */
  "PB6": "136",
  /** Physical pin 137: PB7; bidirectional. */
  "PB7": "137",
  /** Physical pin 138: BOOT0; input. */
  "BOOT0": "138",
  /** Physical pin 139: PB8; bidirectional. */
  "PB8": "139",
  /** Physical pin 140: PB9; bidirectional. */
  "PB9": "140",
  /** Physical pin 141: PE0; bidirectional. */
  "PE0": "141",
  /** Physical pin 142: PE1; bidirectional. */
  "PE1": "142",
  /** Physical pin 143: RFU; no_connect. */
  "RFU": "143",
  /** Physical pin 144: VDD; power_in. */
  "VDD_144": "144",
}) {
  override schema = "MCU_ST_STM32F2:STM32F205ZCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 512KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 114 GPIO, LQFP144
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F205ZETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f205ze.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F205ZETx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: PF0; bidirectional. */
  "PF0": "10",
  /** Physical pin 11: PF1; bidirectional. */
  "PF1": "11",
  /** Physical pin 12: PF2; bidirectional. */
  "PF2": "12",
  /** Physical pin 13: PF3; bidirectional. */
  "PF3": "13",
  /** Physical pin 14: PF4; bidirectional. */
  "PF4": "14",
  /** Physical pin 15: PF5; bidirectional. */
  "PF5": "15",
  /** Physical pin 16: VSS; power_in. */
  "VSS_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: PF6; bidirectional. */
  "PF6": "18",
  /** Physical pin 19: PF7; bidirectional. */
  "PF7": "19",
  /** Physical pin 20: PF8; bidirectional. */
  "PF8": "20",
  /** Physical pin 21: PF9; bidirectional. */
  "PF9": "21",
  /** Physical pin 22: PF10; bidirectional. */
  "PF10": "22",
  /** Physical pin 23: PH0; bidirectional. */
  "PH0": "23",
  /** Physical pin 24: PH1; bidirectional. */
  "PH1": "24",
  /** Physical pin 25: NRST; input. */
  "NRST": "25",
  /** Physical pin 26: PC0; bidirectional. */
  "PC0": "26",
  /** Physical pin 27: PC1; bidirectional. */
  "PC1": "27",
  /** Physical pin 28: PC2; bidirectional. */
  "PC2": "28",
  /** Physical pin 29: PC3; bidirectional. */
  "PC3": "29",
  /** Physical pin 30: VDD; power_in. */
  "VDD_30": "30",
  /** Physical pin 31: VSSA; power_in. */
  "VSSA": "31",
  /** Physical pin 32: VREF+; input. */
  "VREF+": "32",
  /** Physical pin 33: VDDA; power_in. */
  "VDDA": "33",
  /** Physical pin 34: PA0; bidirectional. */
  "PA0": "34",
  /** Physical pin 35: PA1; bidirectional. */
  "PA1": "35",
  /** Physical pin 36: PA2; bidirectional. */
  "PA2": "36",
  /** Physical pin 37: PA3; bidirectional. */
  "PA3": "37",
  /** Physical pin 38: VSS; passive. */
  "VSS_38": "38",
  /** Physical pin 39: VDD; power_in. */
  "VDD_39": "39",
  /** Physical pin 40: PA4; bidirectional. */
  "PA4": "40",
  /** Physical pin 41: PA5; bidirectional. */
  "PA5": "41",
  /** Physical pin 42: PA6; bidirectional. */
  "PA6": "42",
  /** Physical pin 43: PA7; bidirectional. */
  "PA7": "43",
  /** Physical pin 44: PC4; bidirectional. */
  "PC4": "44",
  /** Physical pin 45: PC5; bidirectional. */
  "PC5": "45",
  /** Physical pin 46: PB0; bidirectional. */
  "PB0": "46",
  /** Physical pin 47: PB1; bidirectional. */
  "PB1": "47",
  /** Physical pin 48: PB2; bidirectional. */
  "PB2": "48",
  /** Physical pin 49: PF11; bidirectional. */
  "PF11": "49",
  /** Physical pin 50: PF12; bidirectional. */
  "PF12": "50",
  /** Physical pin 51: VSS; passive. */
  "VSS_51": "51",
  /** Physical pin 52: VDD; power_in. */
  "VDD_52": "52",
  /** Physical pin 53: PF13; bidirectional. */
  "PF13": "53",
  /** Physical pin 54: PF14; bidirectional. */
  "PF14": "54",
  /** Physical pin 55: PF15; bidirectional. */
  "PF15": "55",
  /** Physical pin 56: PG0; bidirectional. */
  "PG0": "56",
  /** Physical pin 57: PG1; bidirectional. */
  "PG1": "57",
  /** Physical pin 58: PE7; bidirectional. */
  "PE7": "58",
  /** Physical pin 59: PE8; bidirectional. */
  "PE8": "59",
  /** Physical pin 60: PE9; bidirectional. */
  "PE9": "60",
  /** Physical pin 61: VSS; passive. */
  "VSS_61": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: PE10; bidirectional. */
  "PE10": "63",
  /** Physical pin 64: PE11; bidirectional. */
  "PE11": "64",
  /** Physical pin 65: PE12; bidirectional. */
  "PE12": "65",
  /** Physical pin 66: PE13; bidirectional. */
  "PE13": "66",
  /** Physical pin 67: PE14; bidirectional. */
  "PE14": "67",
  /** Physical pin 68: PE15; bidirectional. */
  "PE15": "68",
  /** Physical pin 69: PB10; bidirectional. */
  "PB10": "69",
  /** Physical pin 70: PB11; bidirectional. */
  "PB11": "70",
  /** Physical pin 71: VCAP_1; power_out. */
  "VCAP_1": "71",
  /** Physical pin 72: VDD; power_in. */
  "VDD_72": "72",
  /** Physical pin 73: PB12; bidirectional. */
  "PB12": "73",
  /** Physical pin 74: PB13; bidirectional. */
  "PB13": "74",
  /** Physical pin 75: PB14; bidirectional. */
  "PB14": "75",
  /** Physical pin 76: PB15; bidirectional. */
  "PB15": "76",
  /** Physical pin 77: PD8; bidirectional. */
  "PD8": "77",
  /** Physical pin 78: PD9; bidirectional. */
  "PD9": "78",
  /** Physical pin 79: PD10; bidirectional. */
  "PD10": "79",
  /** Physical pin 80: PD11; bidirectional. */
  "PD11": "80",
  /** Physical pin 81: PD12; bidirectional. */
  "PD12": "81",
  /** Physical pin 82: PD13; bidirectional. */
  "PD13": "82",
  /** Physical pin 83: VSS; passive. */
  "VSS_83": "83",
  /** Physical pin 84: VDD; power_in. */
  "VDD_84": "84",
  /** Physical pin 85: PD14; bidirectional. */
  "PD14": "85",
  /** Physical pin 86: PD15; bidirectional. */
  "PD15": "86",
  /** Physical pin 87: PG2; bidirectional. */
  "PG2": "87",
  /** Physical pin 88: PG3; bidirectional. */
  "PG3": "88",
  /** Physical pin 89: PG4; bidirectional. */
  "PG4": "89",
  /** Physical pin 90: PG5; bidirectional. */
  "PG5": "90",
  /** Physical pin 91: PG6; bidirectional. */
  "PG6": "91",
  /** Physical pin 92: PG7; bidirectional. */
  "PG7": "92",
  /** Physical pin 93: PG8; bidirectional. */
  "PG8": "93",
  /** Physical pin 94: VSS; passive. */
  "VSS_94": "94",
  /** Physical pin 95: VDD; power_in. */
  "VDD_95": "95",
  /** Physical pin 96: PC6; bidirectional. */
  "PC6": "96",
  /** Physical pin 97: PC7; bidirectional. */
  "PC7": "97",
  /** Physical pin 98: PC8; bidirectional. */
  "PC8": "98",
  /** Physical pin 99: PC9; bidirectional. */
  "PC9": "99",
  /** Physical pin 100: PA8; bidirectional. */
  "PA8": "100",
  /** Physical pin 101: PA9; bidirectional. */
  "PA9": "101",
  /** Physical pin 102: PA10; bidirectional. */
  "PA10": "102",
  /** Physical pin 103: PA11; bidirectional. */
  "PA11": "103",
  /** Physical pin 104: PA12; bidirectional. */
  "PA12": "104",
  /** Physical pin 105: PA13; bidirectional. */
  "PA13": "105",
  /** Physical pin 106: VCAP_2; power_out. */
  "VCAP_2": "106",
  /** Physical pin 107: VSS; passive. */
  "VSS_107": "107",
  /** Physical pin 108: VDD; power_in. */
  "VDD_108": "108",
  /** Physical pin 109: PA14; bidirectional. */
  "PA14": "109",
  /** Physical pin 110: PA15; bidirectional. */
  "PA15": "110",
  /** Physical pin 111: PC10; bidirectional. */
  "PC10": "111",
  /** Physical pin 112: PC11; bidirectional. */
  "PC11": "112",
  /** Physical pin 113: PC12; bidirectional. */
  "PC12": "113",
  /** Physical pin 114: PD0; bidirectional. */
  "PD0": "114",
  /** Physical pin 115: PD1; bidirectional. */
  "PD1": "115",
  /** Physical pin 116: PD2; bidirectional. */
  "PD2": "116",
  /** Physical pin 117: PD3; bidirectional. */
  "PD3": "117",
  /** Physical pin 118: PD4; bidirectional. */
  "PD4": "118",
  /** Physical pin 119: PD5; bidirectional. */
  "PD5": "119",
  /** Physical pin 120: VSS; passive. */
  "VSS_120": "120",
  /** Physical pin 121: VDD; power_in. */
  "VDD_121": "121",
  /** Physical pin 122: PD6; bidirectional. */
  "PD6": "122",
  /** Physical pin 123: PD7; bidirectional. */
  "PD7": "123",
  /** Physical pin 124: PG9; bidirectional. */
  "PG9": "124",
  /** Physical pin 125: PG10; bidirectional. */
  "PG10": "125",
  /** Physical pin 126: PG11; bidirectional. */
  "PG11": "126",
  /** Physical pin 127: PG12; bidirectional. */
  "PG12": "127",
  /** Physical pin 128: PG13; bidirectional. */
  "PG13": "128",
  /** Physical pin 129: PG14; bidirectional. */
  "PG14": "129",
  /** Physical pin 130: VSS; passive. */
  "VSS_130": "130",
  /** Physical pin 131: VDD; power_in. */
  "VDD_131": "131",
  /** Physical pin 132: PG15; bidirectional. */
  "PG15": "132",
  /** Physical pin 133: PB3; bidirectional. */
  "PB3": "133",
  /** Physical pin 134: PB4; bidirectional. */
  "PB4": "134",
  /** Physical pin 135: PB5; bidirectional. */
  "PB5": "135",
  /** Physical pin 136: PB6; bidirectional. */
  "PB6": "136",
  /** Physical pin 137: PB7; bidirectional. */
  "PB7": "137",
  /** Physical pin 138: BOOT0; input. */
  "BOOT0": "138",
  /** Physical pin 139: PB8; bidirectional. */
  "PB8": "139",
  /** Physical pin 140: PB9; bidirectional. */
  "PB9": "140",
  /** Physical pin 141: PE0; bidirectional. */
  "PE0": "141",
  /** Physical pin 142: PE1; bidirectional. */
  "PE1": "142",
  /** Physical pin 143: RFU; no_connect. */
  "RFU": "143",
  /** Physical pin 144: VDD; power_in. */
  "VDD_144": "144",
}) {
  override schema = "MCU_ST_STM32F2:STM32F205ZETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 768KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 114 GPIO, LQFP144
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F205ZFTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f205zf.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F205ZFTx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: PF0; bidirectional. */
  "PF0": "10",
  /** Physical pin 11: PF1; bidirectional. */
  "PF1": "11",
  /** Physical pin 12: PF2; bidirectional. */
  "PF2": "12",
  /** Physical pin 13: PF3; bidirectional. */
  "PF3": "13",
  /** Physical pin 14: PF4; bidirectional. */
  "PF4": "14",
  /** Physical pin 15: PF5; bidirectional. */
  "PF5": "15",
  /** Physical pin 16: VSS; power_in. */
  "VSS_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: PF6; bidirectional. */
  "PF6": "18",
  /** Physical pin 19: PF7; bidirectional. */
  "PF7": "19",
  /** Physical pin 20: PF8; bidirectional. */
  "PF8": "20",
  /** Physical pin 21: PF9; bidirectional. */
  "PF9": "21",
  /** Physical pin 22: PF10; bidirectional. */
  "PF10": "22",
  /** Physical pin 23: PH0; bidirectional. */
  "PH0": "23",
  /** Physical pin 24: PH1; bidirectional. */
  "PH1": "24",
  /** Physical pin 25: NRST; input. */
  "NRST": "25",
  /** Physical pin 26: PC0; bidirectional. */
  "PC0": "26",
  /** Physical pin 27: PC1; bidirectional. */
  "PC1": "27",
  /** Physical pin 28: PC2; bidirectional. */
  "PC2": "28",
  /** Physical pin 29: PC3; bidirectional. */
  "PC3": "29",
  /** Physical pin 30: VDD; power_in. */
  "VDD_30": "30",
  /** Physical pin 31: VSSA; power_in. */
  "VSSA": "31",
  /** Physical pin 32: VREF+; input. */
  "VREF+": "32",
  /** Physical pin 33: VDDA; power_in. */
  "VDDA": "33",
  /** Physical pin 34: PA0; bidirectional. */
  "PA0": "34",
  /** Physical pin 35: PA1; bidirectional. */
  "PA1": "35",
  /** Physical pin 36: PA2; bidirectional. */
  "PA2": "36",
  /** Physical pin 37: PA3; bidirectional. */
  "PA3": "37",
  /** Physical pin 38: VSS; passive. */
  "VSS_38": "38",
  /** Physical pin 39: VDD; power_in. */
  "VDD_39": "39",
  /** Physical pin 40: PA4; bidirectional. */
  "PA4": "40",
  /** Physical pin 41: PA5; bidirectional. */
  "PA5": "41",
  /** Physical pin 42: PA6; bidirectional. */
  "PA6": "42",
  /** Physical pin 43: PA7; bidirectional. */
  "PA7": "43",
  /** Physical pin 44: PC4; bidirectional. */
  "PC4": "44",
  /** Physical pin 45: PC5; bidirectional. */
  "PC5": "45",
  /** Physical pin 46: PB0; bidirectional. */
  "PB0": "46",
  /** Physical pin 47: PB1; bidirectional. */
  "PB1": "47",
  /** Physical pin 48: PB2; bidirectional. */
  "PB2": "48",
  /** Physical pin 49: PF11; bidirectional. */
  "PF11": "49",
  /** Physical pin 50: PF12; bidirectional. */
  "PF12": "50",
  /** Physical pin 51: VSS; passive. */
  "VSS_51": "51",
  /** Physical pin 52: VDD; power_in. */
  "VDD_52": "52",
  /** Physical pin 53: PF13; bidirectional. */
  "PF13": "53",
  /** Physical pin 54: PF14; bidirectional. */
  "PF14": "54",
  /** Physical pin 55: PF15; bidirectional. */
  "PF15": "55",
  /** Physical pin 56: PG0; bidirectional. */
  "PG0": "56",
  /** Physical pin 57: PG1; bidirectional. */
  "PG1": "57",
  /** Physical pin 58: PE7; bidirectional. */
  "PE7": "58",
  /** Physical pin 59: PE8; bidirectional. */
  "PE8": "59",
  /** Physical pin 60: PE9; bidirectional. */
  "PE9": "60",
  /** Physical pin 61: VSS; passive. */
  "VSS_61": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: PE10; bidirectional. */
  "PE10": "63",
  /** Physical pin 64: PE11; bidirectional. */
  "PE11": "64",
  /** Physical pin 65: PE12; bidirectional. */
  "PE12": "65",
  /** Physical pin 66: PE13; bidirectional. */
  "PE13": "66",
  /** Physical pin 67: PE14; bidirectional. */
  "PE14": "67",
  /** Physical pin 68: PE15; bidirectional. */
  "PE15": "68",
  /** Physical pin 69: PB10; bidirectional. */
  "PB10": "69",
  /** Physical pin 70: PB11; bidirectional. */
  "PB11": "70",
  /** Physical pin 71: VCAP_1; power_out. */
  "VCAP_1": "71",
  /** Physical pin 72: VDD; power_in. */
  "VDD_72": "72",
  /** Physical pin 73: PB12; bidirectional. */
  "PB12": "73",
  /** Physical pin 74: PB13; bidirectional. */
  "PB13": "74",
  /** Physical pin 75: PB14; bidirectional. */
  "PB14": "75",
  /** Physical pin 76: PB15; bidirectional. */
  "PB15": "76",
  /** Physical pin 77: PD8; bidirectional. */
  "PD8": "77",
  /** Physical pin 78: PD9; bidirectional. */
  "PD9": "78",
  /** Physical pin 79: PD10; bidirectional. */
  "PD10": "79",
  /** Physical pin 80: PD11; bidirectional. */
  "PD11": "80",
  /** Physical pin 81: PD12; bidirectional. */
  "PD12": "81",
  /** Physical pin 82: PD13; bidirectional. */
  "PD13": "82",
  /** Physical pin 83: VSS; passive. */
  "VSS_83": "83",
  /** Physical pin 84: VDD; power_in. */
  "VDD_84": "84",
  /** Physical pin 85: PD14; bidirectional. */
  "PD14": "85",
  /** Physical pin 86: PD15; bidirectional. */
  "PD15": "86",
  /** Physical pin 87: PG2; bidirectional. */
  "PG2": "87",
  /** Physical pin 88: PG3; bidirectional. */
  "PG3": "88",
  /** Physical pin 89: PG4; bidirectional. */
  "PG4": "89",
  /** Physical pin 90: PG5; bidirectional. */
  "PG5": "90",
  /** Physical pin 91: PG6; bidirectional. */
  "PG6": "91",
  /** Physical pin 92: PG7; bidirectional. */
  "PG7": "92",
  /** Physical pin 93: PG8; bidirectional. */
  "PG8": "93",
  /** Physical pin 94: VSS; passive. */
  "VSS_94": "94",
  /** Physical pin 95: VDD; power_in. */
  "VDD_95": "95",
  /** Physical pin 96: PC6; bidirectional. */
  "PC6": "96",
  /** Physical pin 97: PC7; bidirectional. */
  "PC7": "97",
  /** Physical pin 98: PC8; bidirectional. */
  "PC8": "98",
  /** Physical pin 99: PC9; bidirectional. */
  "PC9": "99",
  /** Physical pin 100: PA8; bidirectional. */
  "PA8": "100",
  /** Physical pin 101: PA9; bidirectional. */
  "PA9": "101",
  /** Physical pin 102: PA10; bidirectional. */
  "PA10": "102",
  /** Physical pin 103: PA11; bidirectional. */
  "PA11": "103",
  /** Physical pin 104: PA12; bidirectional. */
  "PA12": "104",
  /** Physical pin 105: PA13; bidirectional. */
  "PA13": "105",
  /** Physical pin 106: VCAP_2; power_out. */
  "VCAP_2": "106",
  /** Physical pin 107: VSS; passive. */
  "VSS_107": "107",
  /** Physical pin 108: VDD; power_in. */
  "VDD_108": "108",
  /** Physical pin 109: PA14; bidirectional. */
  "PA14": "109",
  /** Physical pin 110: PA15; bidirectional. */
  "PA15": "110",
  /** Physical pin 111: PC10; bidirectional. */
  "PC10": "111",
  /** Physical pin 112: PC11; bidirectional. */
  "PC11": "112",
  /** Physical pin 113: PC12; bidirectional. */
  "PC12": "113",
  /** Physical pin 114: PD0; bidirectional. */
  "PD0": "114",
  /** Physical pin 115: PD1; bidirectional. */
  "PD1": "115",
  /** Physical pin 116: PD2; bidirectional. */
  "PD2": "116",
  /** Physical pin 117: PD3; bidirectional. */
  "PD3": "117",
  /** Physical pin 118: PD4; bidirectional. */
  "PD4": "118",
  /** Physical pin 119: PD5; bidirectional. */
  "PD5": "119",
  /** Physical pin 120: VSS; passive. */
  "VSS_120": "120",
  /** Physical pin 121: VDD; power_in. */
  "VDD_121": "121",
  /** Physical pin 122: PD6; bidirectional. */
  "PD6": "122",
  /** Physical pin 123: PD7; bidirectional. */
  "PD7": "123",
  /** Physical pin 124: PG9; bidirectional. */
  "PG9": "124",
  /** Physical pin 125: PG10; bidirectional. */
  "PG10": "125",
  /** Physical pin 126: PG11; bidirectional. */
  "PG11": "126",
  /** Physical pin 127: PG12; bidirectional. */
  "PG12": "127",
  /** Physical pin 128: PG13; bidirectional. */
  "PG13": "128",
  /** Physical pin 129: PG14; bidirectional. */
  "PG14": "129",
  /** Physical pin 130: VSS; passive. */
  "VSS_130": "130",
  /** Physical pin 131: VDD; power_in. */
  "VDD_131": "131",
  /** Physical pin 132: PG15; bidirectional. */
  "PG15": "132",
  /** Physical pin 133: PB3; bidirectional. */
  "PB3": "133",
  /** Physical pin 134: PB4; bidirectional. */
  "PB4": "134",
  /** Physical pin 135: PB5; bidirectional. */
  "PB5": "135",
  /** Physical pin 136: PB6; bidirectional. */
  "PB6": "136",
  /** Physical pin 137: PB7; bidirectional. */
  "PB7": "137",
  /** Physical pin 138: BOOT0; input. */
  "BOOT0": "138",
  /** Physical pin 139: PB8; bidirectional. */
  "PB8": "139",
  /** Physical pin 140: PB9; bidirectional. */
  "PB9": "140",
  /** Physical pin 141: PE0; bidirectional. */
  "PE0": "141",
  /** Physical pin 142: PE1; bidirectional. */
  "PE1": "142",
  /** Physical pin 143: RFU; no_connect. */
  "RFU": "143",
  /** Physical pin 144: VDD; power_in. */
  "VDD_144": "144",
}) {
  override schema = "MCU_ST_STM32F2:STM32F205ZFTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 114 GPIO, LQFP144
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F205ZGTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f205zg.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F205ZGTx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: PF0; bidirectional. */
  "PF0": "10",
  /** Physical pin 11: PF1; bidirectional. */
  "PF1": "11",
  /** Physical pin 12: PF2; bidirectional. */
  "PF2": "12",
  /** Physical pin 13: PF3; bidirectional. */
  "PF3": "13",
  /** Physical pin 14: PF4; bidirectional. */
  "PF4": "14",
  /** Physical pin 15: PF5; bidirectional. */
  "PF5": "15",
  /** Physical pin 16: VSS; power_in. */
  "VSS_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: PF6; bidirectional. */
  "PF6": "18",
  /** Physical pin 19: PF7; bidirectional. */
  "PF7": "19",
  /** Physical pin 20: PF8; bidirectional. */
  "PF8": "20",
  /** Physical pin 21: PF9; bidirectional. */
  "PF9": "21",
  /** Physical pin 22: PF10; bidirectional. */
  "PF10": "22",
  /** Physical pin 23: PH0; bidirectional. */
  "PH0": "23",
  /** Physical pin 24: PH1; bidirectional. */
  "PH1": "24",
  /** Physical pin 25: NRST; input. */
  "NRST": "25",
  /** Physical pin 26: PC0; bidirectional. */
  "PC0": "26",
  /** Physical pin 27: PC1; bidirectional. */
  "PC1": "27",
  /** Physical pin 28: PC2; bidirectional. */
  "PC2": "28",
  /** Physical pin 29: PC3; bidirectional. */
  "PC3": "29",
  /** Physical pin 30: VDD; power_in. */
  "VDD_30": "30",
  /** Physical pin 31: VSSA; power_in. */
  "VSSA": "31",
  /** Physical pin 32: VREF+; input. */
  "VREF+": "32",
  /** Physical pin 33: VDDA; power_in. */
  "VDDA": "33",
  /** Physical pin 34: PA0; bidirectional. */
  "PA0": "34",
  /** Physical pin 35: PA1; bidirectional. */
  "PA1": "35",
  /** Physical pin 36: PA2; bidirectional. */
  "PA2": "36",
  /** Physical pin 37: PA3; bidirectional. */
  "PA3": "37",
  /** Physical pin 38: VSS; passive. */
  "VSS_38": "38",
  /** Physical pin 39: VDD; power_in. */
  "VDD_39": "39",
  /** Physical pin 40: PA4; bidirectional. */
  "PA4": "40",
  /** Physical pin 41: PA5; bidirectional. */
  "PA5": "41",
  /** Physical pin 42: PA6; bidirectional. */
  "PA6": "42",
  /** Physical pin 43: PA7; bidirectional. */
  "PA7": "43",
  /** Physical pin 44: PC4; bidirectional. */
  "PC4": "44",
  /** Physical pin 45: PC5; bidirectional. */
  "PC5": "45",
  /** Physical pin 46: PB0; bidirectional. */
  "PB0": "46",
  /** Physical pin 47: PB1; bidirectional. */
  "PB1": "47",
  /** Physical pin 48: PB2; bidirectional. */
  "PB2": "48",
  /** Physical pin 49: PF11; bidirectional. */
  "PF11": "49",
  /** Physical pin 50: PF12; bidirectional. */
  "PF12": "50",
  /** Physical pin 51: VSS; passive. */
  "VSS_51": "51",
  /** Physical pin 52: VDD; power_in. */
  "VDD_52": "52",
  /** Physical pin 53: PF13; bidirectional. */
  "PF13": "53",
  /** Physical pin 54: PF14; bidirectional. */
  "PF14": "54",
  /** Physical pin 55: PF15; bidirectional. */
  "PF15": "55",
  /** Physical pin 56: PG0; bidirectional. */
  "PG0": "56",
  /** Physical pin 57: PG1; bidirectional. */
  "PG1": "57",
  /** Physical pin 58: PE7; bidirectional. */
  "PE7": "58",
  /** Physical pin 59: PE8; bidirectional. */
  "PE8": "59",
  /** Physical pin 60: PE9; bidirectional. */
  "PE9": "60",
  /** Physical pin 61: VSS; passive. */
  "VSS_61": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: PE10; bidirectional. */
  "PE10": "63",
  /** Physical pin 64: PE11; bidirectional. */
  "PE11": "64",
  /** Physical pin 65: PE12; bidirectional. */
  "PE12": "65",
  /** Physical pin 66: PE13; bidirectional. */
  "PE13": "66",
  /** Physical pin 67: PE14; bidirectional. */
  "PE14": "67",
  /** Physical pin 68: PE15; bidirectional. */
  "PE15": "68",
  /** Physical pin 69: PB10; bidirectional. */
  "PB10": "69",
  /** Physical pin 70: PB11; bidirectional. */
  "PB11": "70",
  /** Physical pin 71: VCAP_1; power_out. */
  "VCAP_1": "71",
  /** Physical pin 72: VDD; power_in. */
  "VDD_72": "72",
  /** Physical pin 73: PB12; bidirectional. */
  "PB12": "73",
  /** Physical pin 74: PB13; bidirectional. */
  "PB13": "74",
  /** Physical pin 75: PB14; bidirectional. */
  "PB14": "75",
  /** Physical pin 76: PB15; bidirectional. */
  "PB15": "76",
  /** Physical pin 77: PD8; bidirectional. */
  "PD8": "77",
  /** Physical pin 78: PD9; bidirectional. */
  "PD9": "78",
  /** Physical pin 79: PD10; bidirectional. */
  "PD10": "79",
  /** Physical pin 80: PD11; bidirectional. */
  "PD11": "80",
  /** Physical pin 81: PD12; bidirectional. */
  "PD12": "81",
  /** Physical pin 82: PD13; bidirectional. */
  "PD13": "82",
  /** Physical pin 83: VSS; passive. */
  "VSS_83": "83",
  /** Physical pin 84: VDD; power_in. */
  "VDD_84": "84",
  /** Physical pin 85: PD14; bidirectional. */
  "PD14": "85",
  /** Physical pin 86: PD15; bidirectional. */
  "PD15": "86",
  /** Physical pin 87: PG2; bidirectional. */
  "PG2": "87",
  /** Physical pin 88: PG3; bidirectional. */
  "PG3": "88",
  /** Physical pin 89: PG4; bidirectional. */
  "PG4": "89",
  /** Physical pin 90: PG5; bidirectional. */
  "PG5": "90",
  /** Physical pin 91: PG6; bidirectional. */
  "PG6": "91",
  /** Physical pin 92: PG7; bidirectional. */
  "PG7": "92",
  /** Physical pin 93: PG8; bidirectional. */
  "PG8": "93",
  /** Physical pin 94: VSS; passive. */
  "VSS_94": "94",
  /** Physical pin 95: VDD; power_in. */
  "VDD_95": "95",
  /** Physical pin 96: PC6; bidirectional. */
  "PC6": "96",
  /** Physical pin 97: PC7; bidirectional. */
  "PC7": "97",
  /** Physical pin 98: PC8; bidirectional. */
  "PC8": "98",
  /** Physical pin 99: PC9; bidirectional. */
  "PC9": "99",
  /** Physical pin 100: PA8; bidirectional. */
  "PA8": "100",
  /** Physical pin 101: PA9; bidirectional. */
  "PA9": "101",
  /** Physical pin 102: PA10; bidirectional. */
  "PA10": "102",
  /** Physical pin 103: PA11; bidirectional. */
  "PA11": "103",
  /** Physical pin 104: PA12; bidirectional. */
  "PA12": "104",
  /** Physical pin 105: PA13; bidirectional. */
  "PA13": "105",
  /** Physical pin 106: VCAP_2; power_out. */
  "VCAP_2": "106",
  /** Physical pin 107: VSS; passive. */
  "VSS_107": "107",
  /** Physical pin 108: VDD; power_in. */
  "VDD_108": "108",
  /** Physical pin 109: PA14; bidirectional. */
  "PA14": "109",
  /** Physical pin 110: PA15; bidirectional. */
  "PA15": "110",
  /** Physical pin 111: PC10; bidirectional. */
  "PC10": "111",
  /** Physical pin 112: PC11; bidirectional. */
  "PC11": "112",
  /** Physical pin 113: PC12; bidirectional. */
  "PC12": "113",
  /** Physical pin 114: PD0; bidirectional. */
  "PD0": "114",
  /** Physical pin 115: PD1; bidirectional. */
  "PD1": "115",
  /** Physical pin 116: PD2; bidirectional. */
  "PD2": "116",
  /** Physical pin 117: PD3; bidirectional. */
  "PD3": "117",
  /** Physical pin 118: PD4; bidirectional. */
  "PD4": "118",
  /** Physical pin 119: PD5; bidirectional. */
  "PD5": "119",
  /** Physical pin 120: VSS; passive. */
  "VSS_120": "120",
  /** Physical pin 121: VDD; power_in. */
  "VDD_121": "121",
  /** Physical pin 122: PD6; bidirectional. */
  "PD6": "122",
  /** Physical pin 123: PD7; bidirectional. */
  "PD7": "123",
  /** Physical pin 124: PG9; bidirectional. */
  "PG9": "124",
  /** Physical pin 125: PG10; bidirectional. */
  "PG10": "125",
  /** Physical pin 126: PG11; bidirectional. */
  "PG11": "126",
  /** Physical pin 127: PG12; bidirectional. */
  "PG12": "127",
  /** Physical pin 128: PG13; bidirectional. */
  "PG13": "128",
  /** Physical pin 129: PG14; bidirectional. */
  "PG14": "129",
  /** Physical pin 130: VSS; passive. */
  "VSS_130": "130",
  /** Physical pin 131: VDD; power_in. */
  "VDD_131": "131",
  /** Physical pin 132: PG15; bidirectional. */
  "PG15": "132",
  /** Physical pin 133: PB3; bidirectional. */
  "PB3": "133",
  /** Physical pin 134: PB4; bidirectional. */
  "PB4": "134",
  /** Physical pin 135: PB5; bidirectional. */
  "PB5": "135",
  /** Physical pin 136: PB6; bidirectional. */
  "PB6": "136",
  /** Physical pin 137: PB7; bidirectional. */
  "PB7": "137",
  /** Physical pin 138: BOOT0; input. */
  "BOOT0": "138",
  /** Physical pin 139: PB8; bidirectional. */
  "PB8": "139",
  /** Physical pin 140: PB9; bidirectional. */
  "PB9": "140",
  /** Physical pin 141: PE0; bidirectional. */
  "PE0": "141",
  /** Physical pin 142: PE1; bidirectional. */
  "PE1": "142",
  /** Physical pin 143: RFU; no_connect. */
  "RFU": "143",
  /** Physical pin 144: VDD; power_in. */
  "VDD_144": "144",
}) {
  override schema = "MCU_ST_STM32F2:STM32F205ZGTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 256-1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 140 GPIO, UFBGA176
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F207I_C-E-F-G_Hx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*10x10mm*Layout15x15*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f207ic.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_BGA:UFBGA-201_10x10mm_Layout15x15_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F207I_C_E_F_G_Hx extends Component.withPins({
  /** Physical pin A1: PE3; bidirectional. */
  "PE3": "A1",
  /** Physical pin A2: PE2; bidirectional. */
  "PE2": "A2",
  /** Physical pin A3: PE1; bidirectional. */
  "PE1": "A3",
  /** Physical pin A4: PE0; bidirectional. */
  "PE0": "A4",
  /** Physical pin A5: PB8; bidirectional. */
  "PB8": "A5",
  /** Physical pin A6: PB5; bidirectional. */
  "PB5": "A6",
  /** Physical pin A7: PG14; bidirectional. */
  "PG14": "A7",
  /** Physical pin A8: PG13; bidirectional. */
  "PG13": "A8",
  /** Physical pin A9: PB4; bidirectional. */
  "PB4": "A9",
  /** Physical pin A10: PB3; bidirectional. */
  "PB3": "A10",
  /** Physical pin A11: PD7; bidirectional. */
  "PD7": "A11",
  /** Physical pin A12: PC12; bidirectional. */
  "PC12": "A12",
  /** Physical pin A13: PA15; bidirectional. */
  "PA15": "A13",
  /** Physical pin A14: PA14; bidirectional. */
  "PA14": "A14",
  /** Physical pin A15: PA13; bidirectional. */
  "PA13": "A15",
  /** Physical pin B1: PE4; bidirectional. */
  "PE4": "B1",
  /** Physical pin B2: PE5; bidirectional. */
  "PE5": "B2",
  /** Physical pin B3: PE6; bidirectional. */
  "PE6": "B3",
  /** Physical pin B4: PB9; bidirectional. */
  "PB9": "B4",
  /** Physical pin B5: PB7; bidirectional. */
  "PB7": "B5",
  /** Physical pin B6: PB6; bidirectional. */
  "PB6": "B6",
  /** Physical pin B7: PG15; bidirectional. */
  "PG15": "B7",
  /** Physical pin B8: PG12; bidirectional. */
  "PG12": "B8",
  /** Physical pin B9: PG11; bidirectional. */
  "PG11": "B9",
  /** Physical pin B10: PG10; bidirectional. */
  "PG10": "B10",
  /** Physical pin B11: PD6; bidirectional. */
  "PD6": "B11",
  /** Physical pin B12: PD0; bidirectional. */
  "PD0": "B12",
  /** Physical pin B13: PC11; bidirectional. */
  "PC11": "B13",
  /** Physical pin B14: PC10; bidirectional. */
  "PC10": "B14",
  /** Physical pin B15: PA12; bidirectional. */
  "PA12": "B15",
  /** Physical pin C1: VBAT; power_in. */
  "VBAT": "C1",
  /** Physical pin C2: PI7; bidirectional. */
  "PI7": "C2",
  /** Physical pin C3: PI6; bidirectional. */
  "PI6": "C3",
  /** Physical pin C4: PI5; bidirectional. */
  "PI5": "C4",
  /** Physical pin C5: VDD; power_in. */
  "VDD_C5": "C5",
  /** Physical pin C6: RFU; no_connect. */
  "RFU": "C6",
  /** Physical pin C7: VDD; power_in. */
  "VDD_C7": "C7",
  /** Physical pin C8: VDD; power_in. */
  "VDD_C8": "C8",
  /** Physical pin C9: VDD; power_in. */
  "VDD_C9": "C9",
  /** Physical pin C10: PG9; bidirectional. */
  "PG9": "C10",
  /** Physical pin C11: PD5; bidirectional. */
  "PD5": "C11",
  /** Physical pin C12: PD1; bidirectional. */
  "PD1": "C12",
  /** Physical pin C13: PI3; bidirectional. */
  "PI3": "C13",
  /** Physical pin C14: PI2; bidirectional. */
  "PI2": "C14",
  /** Physical pin C15: PA11; bidirectional. */
  "PA11": "C15",
  /** Physical pin D1: PC13; bidirectional. */
  "PC13": "D1",
  /** Physical pin D2: PI8; bidirectional. */
  "PI8": "D2",
  /** Physical pin D3: PI9; bidirectional. */
  "PI9": "D3",
  /** Physical pin D4: PI4; bidirectional. */
  "PI4": "D4",
  /** Physical pin D5: VSS; power_in. */
  "VSS_D5": "D5",
  /** Physical pin D6: BOOT0; input. */
  "BOOT0": "D6",
  /** Physical pin D7: VSS; passive. */
  "VSS_D7": "D7",
  /** Physical pin D8: VSS; passive. */
  "VSS_D8": "D8",
  /** Physical pin D9: VSS; passive. */
  "VSS_D9": "D9",
  /** Physical pin D10: PD4; bidirectional. */
  "PD4": "D10",
  /** Physical pin D11: PD3; bidirectional. */
  "PD3": "D11",
  /** Physical pin D12: PD2; bidirectional. */
  "PD2": "D12",
  /** Physical pin D13: PH15; bidirectional. */
  "PH15": "D13",
  /** Physical pin D14: PI1; bidirectional. */
  "PI1": "D14",
  /** Physical pin D15: PA10; bidirectional. */
  "PA10": "D15",
  /** Physical pin E1: PC14; bidirectional. */
  "PC14": "E1",
  /** Physical pin E2: PF0; bidirectional. */
  "PF0": "E2",
  /** Physical pin E3: PI10; bidirectional. */
  "PI10": "E3",
  /** Physical pin E4: PI11; bidirectional. */
  "PI11": "E4",
  /** Physical pin E12: PH13; bidirectional. */
  "PH13": "E12",
  /** Physical pin E13: PH14; bidirectional. */
  "PH14": "E13",
  /** Physical pin E14: PI0; bidirectional. */
  "PI0": "E14",
  /** Physical pin E15: PA9; bidirectional. */
  "PA9": "E15",
  /** Physical pin F1: PC15; bidirectional. */
  "PC15": "F1",
  /** Physical pin F2: VSS; passive. */
  "VSS_F2": "F2",
  /** Physical pin F3: VDD; power_in. */
  "VDD_F3": "F3",
  /** Physical pin F4: PH2; bidirectional. */
  "PH2": "F4",
  /** Physical pin F6: VSS; passive. */
  "VSS_F6": "F6",
  /** Physical pin F7: VSS; passive. */
  "VSS_F7": "F7",
  /** Physical pin F8: VSS; passive. */
  "VSS_F8": "F8",
  /** Physical pin F9: VSS; passive. */
  "VSS_F9": "F9",
  /** Physical pin F10: VSS; passive. */
  "VSS_F10": "F10",
  /** Physical pin F12: VSS; passive. */
  "VSS_F12": "F12",
  /** Physical pin F13: VCAP_2; power_out. */
  "VCAP_2": "F13",
  /** Physical pin F14: PC9; bidirectional. */
  "PC9": "F14",
  /** Physical pin F15: PA8; bidirectional. */
  "PA8": "F15",
  /** Physical pin G1: PH0; bidirectional. */
  "PH0": "G1",
  /** Physical pin G2: VSS; passive. */
  "VSS_G2": "G2",
  /** Physical pin G3: VDD; power_in. */
  "VDD_G3": "G3",
  /** Physical pin G4: PH3; bidirectional. */
  "PH3": "G4",
  /** Physical pin G6: VSS; passive. */
  "VSS_G6": "G6",
  /** Physical pin G7: VSS; passive. */
  "VSS_G7": "G7",
  /** Physical pin G8: VSS; passive. */
  "VSS_G8": "G8",
  /** Physical pin G9: VSS; passive. */
  "VSS_G9": "G9",
  /** Physical pin G10: VSS; passive. */
  "VSS_G10": "G10",
  /** Physical pin G12: VSS; passive. */
  "VSS_G12": "G12",
  /** Physical pin G13: VDD; power_in. */
  "VDD_G13": "G13",
  /** Physical pin G14: PC8; bidirectional. */
  "PC8": "G14",
  /** Physical pin G15: PC7; bidirectional. */
  "PC7": "G15",
  /** Physical pin H1: PH1; bidirectional. */
  "PH1": "H1",
  /** Physical pin H2: PF2; bidirectional. */
  "PF2": "H2",
  /** Physical pin H3: PF1; bidirectional. */
  "PF1": "H3",
  /** Physical pin H4: PH4; bidirectional. */
  "PH4": "H4",
  /** Physical pin H6: VSS; passive. */
  "VSS_H6": "H6",
  /** Physical pin H7: VSS; passive. */
  "VSS_H7": "H7",
  /** Physical pin H8: VSS; passive. */
  "VSS_H8": "H8",
  /** Physical pin H9: VSS; passive. */
  "VSS_H9": "H9",
  /** Physical pin H10: VSS; passive. */
  "VSS_H10": "H10",
  /** Physical pin H12: VSS; passive. */
  "VSS_H12": "H12",
  /** Physical pin H13: VDD; power_in. */
  "VDD_H13": "H13",
  /** Physical pin H14: PG8; bidirectional. */
  "PG8": "H14",
  /** Physical pin H15: PC6; bidirectional. */
  "PC6": "H15",
  /** Physical pin J1: NRST; input. */
  "NRST": "J1",
  /** Physical pin J2: PF3; bidirectional. */
  "PF3": "J2",
  /** Physical pin J3: PF4; bidirectional. */
  "PF4": "J3",
  /** Physical pin J4: PH5; bidirectional. */
  "PH5": "J4",
  /** Physical pin J6: VSS; passive. */
  "VSS_J6": "J6",
  /** Physical pin J7: VSS; passive. */
  "VSS_J7": "J7",
  /** Physical pin J8: VSS; passive. */
  "VSS_J8": "J8",
  /** Physical pin J9: VSS; passive. */
  "VSS_J9": "J9",
  /** Physical pin J10: VSS; passive. */
  "VSS_J10": "J10",
  /** Physical pin J12: VDD; power_in. */
  "VDD_J12": "J12",
  /** Physical pin J13: VDD; power_in. */
  "VDD_J13": "J13",
  /** Physical pin J14: PG7; bidirectional. */
  "PG7": "J14",
  /** Physical pin J15: PG6; bidirectional. */
  "PG6": "J15",
  /** Physical pin K1: PF7; bidirectional. */
  "PF7": "K1",
  /** Physical pin K2: PF6; bidirectional. */
  "PF6": "K2",
  /** Physical pin K3: PF5; bidirectional. */
  "PF5": "K3",
  /** Physical pin K4: VDD; power_in. */
  "VDD_K4": "K4",
  /** Physical pin K6: VSS; passive. */
  "VSS_K6": "K6",
  /** Physical pin K7: VSS; passive. */
  "VSS_K7": "K7",
  /** Physical pin K8: VSS; passive. */
  "VSS_K8": "K8",
  /** Physical pin K9: VSS; passive. */
  "VSS_K9": "K9",
  /** Physical pin K10: VSS; passive. */
  "VSS_K10": "K10",
  /** Physical pin K12: PH12; bidirectional. */
  "PH12": "K12",
  /** Physical pin K13: PG5; bidirectional. */
  "PG5": "K13",
  /** Physical pin K14: PG4; bidirectional. */
  "PG4": "K14",
  /** Physical pin K15: PG3; bidirectional. */
  "PG3": "K15",
  /** Physical pin L1: PF10; bidirectional. */
  "PF10": "L1",
  /** Physical pin L2: PF9; bidirectional. */
  "PF9": "L2",
  /** Physical pin L3: PF8; bidirectional. */
  "PF8": "L3",
  /** Physical pin L4: REGOFF; input. */
  "REGOFF": "L4",
  /** Physical pin L12: PH11; bidirectional. */
  "PH11": "L12",
  /** Physical pin L13: PH10; bidirectional. */
  "PH10": "L13",
  /** Physical pin L14: PD15; bidirectional. */
  "PD15": "L14",
  /** Physical pin L15: PG2; bidirectional. */
  "PG2": "L15",
  /** Physical pin M1: VSSA; power_in. */
  "VSSA": "M1",
  /** Physical pin M2: PC0; bidirectional. */
  "PC0": "M2",
  /** Physical pin M3: PC1; bidirectional. */
  "PC1": "M3",
  /** Physical pin M4: PC2; bidirectional. */
  "PC2": "M4",
  /** Physical pin M5: PC3; bidirectional. */
  "PC3": "M5",
  /** Physical pin M6: PB2; bidirectional. */
  "PB2": "M6",
  /** Physical pin M7: PG1; bidirectional. */
  "PG1": "M7",
  /** Physical pin M8: VSS; passive. */
  "VSS_M8": "M8",
  /** Physical pin M9: VSS; passive. */
  "VSS_M9": "M9",
  /** Physical pin M10: VCAP_1; power_out. */
  "VCAP_1": "M10",
  /** Physical pin M11: PH6; bidirectional. */
  "PH6": "M11",
  /** Physical pin M12: PH8; bidirectional. */
  "PH8": "M12",
  /** Physical pin M13: PH9; bidirectional. */
  "PH9": "M13",
  /** Physical pin M14: PD14; bidirectional. */
  "PD14": "M14",
  /** Physical pin M15: PD13; bidirectional. */
  "PD13": "M15",
  /** Physical pin N1: VREF-; input. */
  "VREF-": "N1",
  /** Physical pin N2: PA1; bidirectional. */
  "PA1": "N2",
  /** Physical pin N3: PA0; bidirectional. */
  "PA0": "N3",
  /** Physical pin N4: PA4; bidirectional. */
  "PA4": "N4",
  /** Physical pin N5: PC4; bidirectional. */
  "PC4": "N5",
  /** Physical pin N6: PF13; bidirectional. */
  "PF13": "N6",
  /** Physical pin N7: PG0; bidirectional. */
  "PG0": "N7",
  /** Physical pin N8: VDD; power_in. */
  "VDD_N8": "N8",
  /** Physical pin N9: VDD; power_in. */
  "VDD_N9": "N9",
  /** Physical pin N10: VDD; power_in. */
  "VDD_N10": "N10",
  /** Physical pin N11: PE13; bidirectional. */
  "PE13": "N11",
  /** Physical pin N12: PH7; bidirectional. */
  "PH7": "N12",
  /** Physical pin N13: PD12; bidirectional. */
  "PD12": "N13",
  /** Physical pin N14: PD11; bidirectional. */
  "PD11": "N14",
  /** Physical pin N15: PD10; bidirectional. */
  "PD10": "N15",
  /** Physical pin P1: VREF+; input. */
  "VREF+": "P1",
  /** Physical pin P2: PA2; bidirectional. */
  "PA2": "P2",
  /** Physical pin P3: PA6; bidirectional. */
  "PA6": "P3",
  /** Physical pin P4: PA5; bidirectional. */
  "PA5": "P4",
  /** Physical pin P5: PC5; bidirectional. */
  "PC5": "P5",
  /** Physical pin P6: PF12; bidirectional. */
  "PF12": "P6",
  /** Physical pin P7: PF15; bidirectional. */
  "PF15": "P7",
  /** Physical pin P8: PE8; bidirectional. */
  "PE8": "P8",
  /** Physical pin P9: PE9; bidirectional. */
  "PE9": "P9",
  /** Physical pin P10: PE11; bidirectional. */
  "PE11": "P10",
  /** Physical pin P11: PE14; bidirectional. */
  "PE14": "P11",
  /** Physical pin P12: PB12; bidirectional. */
  "PB12": "P12",
  /** Physical pin P13: PB13; bidirectional. */
  "PB13": "P13",
  /** Physical pin P14: PD9; bidirectional. */
  "PD9": "P14",
  /** Physical pin P15: PD8; bidirectional. */
  "PD8": "P15",
  /** Physical pin R1: VDDA; power_in. */
  "VDDA": "R1",
  /** Physical pin R2: PA3; bidirectional. */
  "PA3": "R2",
  /** Physical pin R3: PA7; bidirectional. */
  "PA7": "R3",
  /** Physical pin R4: PB1; bidirectional. */
  "PB1": "R4",
  /** Physical pin R5: PB0; bidirectional. */
  "PB0": "R5",
  /** Physical pin R6: PF11; bidirectional. */
  "PF11": "R6",
  /** Physical pin R7: PF14; bidirectional. */
  "PF14": "R7",
  /** Physical pin R8: PE7; bidirectional. */
  "PE7": "R8",
  /** Physical pin R9: PE10; bidirectional. */
  "PE10": "R9",
  /** Physical pin R10: PE12; bidirectional. */
  "PE12": "R10",
  /** Physical pin R11: PE15; bidirectional. */
  "PE15": "R11",
  /** Physical pin R12: PB10; bidirectional. */
  "PB10": "R12",
  /** Physical pin R13: PB11; bidirectional. */
  "PB11": "R13",
  /** Physical pin R14: PB14; bidirectional. */
  "PB14": "R14",
  /** Physical pin R15: PB15; bidirectional. */
  "PB15": "R15",
}) {
  override schema = "MCU_ST_STM32F2:STM32F207I_C-E-F-G_Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 256KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 140 GPIO, UFBGA176
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F207ICHx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*10x10mm*Layout15x15*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f207ic.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_BGA:UFBGA-201_10x10mm_Layout15x15_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F207ICHx extends Component.withPins({
  /** Physical pin A1: PE3; bidirectional. */
  "PE3": "A1",
  /** Physical pin A2: PE2; bidirectional. */
  "PE2": "A2",
  /** Physical pin A3: PE1; bidirectional. */
  "PE1": "A3",
  /** Physical pin A4: PE0; bidirectional. */
  "PE0": "A4",
  /** Physical pin A5: PB8; bidirectional. */
  "PB8": "A5",
  /** Physical pin A6: PB5; bidirectional. */
  "PB5": "A6",
  /** Physical pin A7: PG14; bidirectional. */
  "PG14": "A7",
  /** Physical pin A8: PG13; bidirectional. */
  "PG13": "A8",
  /** Physical pin A9: PB4; bidirectional. */
  "PB4": "A9",
  /** Physical pin A10: PB3; bidirectional. */
  "PB3": "A10",
  /** Physical pin A11: PD7; bidirectional. */
  "PD7": "A11",
  /** Physical pin A12: PC12; bidirectional. */
  "PC12": "A12",
  /** Physical pin A13: PA15; bidirectional. */
  "PA15": "A13",
  /** Physical pin A14: PA14; bidirectional. */
  "PA14": "A14",
  /** Physical pin A15: PA13; bidirectional. */
  "PA13": "A15",
  /** Physical pin B1: PE4; bidirectional. */
  "PE4": "B1",
  /** Physical pin B2: PE5; bidirectional. */
  "PE5": "B2",
  /** Physical pin B3: PE6; bidirectional. */
  "PE6": "B3",
  /** Physical pin B4: PB9; bidirectional. */
  "PB9": "B4",
  /** Physical pin B5: PB7; bidirectional. */
  "PB7": "B5",
  /** Physical pin B6: PB6; bidirectional. */
  "PB6": "B6",
  /** Physical pin B7: PG15; bidirectional. */
  "PG15": "B7",
  /** Physical pin B8: PG12; bidirectional. */
  "PG12": "B8",
  /** Physical pin B9: PG11; bidirectional. */
  "PG11": "B9",
  /** Physical pin B10: PG10; bidirectional. */
  "PG10": "B10",
  /** Physical pin B11: PD6; bidirectional. */
  "PD6": "B11",
  /** Physical pin B12: PD0; bidirectional. */
  "PD0": "B12",
  /** Physical pin B13: PC11; bidirectional. */
  "PC11": "B13",
  /** Physical pin B14: PC10; bidirectional. */
  "PC10": "B14",
  /** Physical pin B15: PA12; bidirectional. */
  "PA12": "B15",
  /** Physical pin C1: VBAT; power_in. */
  "VBAT": "C1",
  /** Physical pin C2: PI7; bidirectional. */
  "PI7": "C2",
  /** Physical pin C3: PI6; bidirectional. */
  "PI6": "C3",
  /** Physical pin C4: PI5; bidirectional. */
  "PI5": "C4",
  /** Physical pin C5: VDD; power_in. */
  "VDD_C5": "C5",
  /** Physical pin C6: RFU; no_connect. */
  "RFU": "C6",
  /** Physical pin C7: VDD; power_in. */
  "VDD_C7": "C7",
  /** Physical pin C8: VDD; power_in. */
  "VDD_C8": "C8",
  /** Physical pin C9: VDD; power_in. */
  "VDD_C9": "C9",
  /** Physical pin C10: PG9; bidirectional. */
  "PG9": "C10",
  /** Physical pin C11: PD5; bidirectional. */
  "PD5": "C11",
  /** Physical pin C12: PD1; bidirectional. */
  "PD1": "C12",
  /** Physical pin C13: PI3; bidirectional. */
  "PI3": "C13",
  /** Physical pin C14: PI2; bidirectional. */
  "PI2": "C14",
  /** Physical pin C15: PA11; bidirectional. */
  "PA11": "C15",
  /** Physical pin D1: PC13; bidirectional. */
  "PC13": "D1",
  /** Physical pin D2: PI8; bidirectional. */
  "PI8": "D2",
  /** Physical pin D3: PI9; bidirectional. */
  "PI9": "D3",
  /** Physical pin D4: PI4; bidirectional. */
  "PI4": "D4",
  /** Physical pin D5: VSS; power_in. */
  "VSS_D5": "D5",
  /** Physical pin D6: BOOT0; input. */
  "BOOT0": "D6",
  /** Physical pin D7: VSS; passive. */
  "VSS_D7": "D7",
  /** Physical pin D8: VSS; passive. */
  "VSS_D8": "D8",
  /** Physical pin D9: VSS; passive. */
  "VSS_D9": "D9",
  /** Physical pin D10: PD4; bidirectional. */
  "PD4": "D10",
  /** Physical pin D11: PD3; bidirectional. */
  "PD3": "D11",
  /** Physical pin D12: PD2; bidirectional. */
  "PD2": "D12",
  /** Physical pin D13: PH15; bidirectional. */
  "PH15": "D13",
  /** Physical pin D14: PI1; bidirectional. */
  "PI1": "D14",
  /** Physical pin D15: PA10; bidirectional. */
  "PA10": "D15",
  /** Physical pin E1: PC14; bidirectional. */
  "PC14": "E1",
  /** Physical pin E2: PF0; bidirectional. */
  "PF0": "E2",
  /** Physical pin E3: PI10; bidirectional. */
  "PI10": "E3",
  /** Physical pin E4: PI11; bidirectional. */
  "PI11": "E4",
  /** Physical pin E12: PH13; bidirectional. */
  "PH13": "E12",
  /** Physical pin E13: PH14; bidirectional. */
  "PH14": "E13",
  /** Physical pin E14: PI0; bidirectional. */
  "PI0": "E14",
  /** Physical pin E15: PA9; bidirectional. */
  "PA9": "E15",
  /** Physical pin F1: PC15; bidirectional. */
  "PC15": "F1",
  /** Physical pin F2: VSS; passive. */
  "VSS_F2": "F2",
  /** Physical pin F3: VDD; power_in. */
  "VDD_F3": "F3",
  /** Physical pin F4: PH2; bidirectional. */
  "PH2": "F4",
  /** Physical pin F6: VSS; passive. */
  "VSS_F6": "F6",
  /** Physical pin F7: VSS; passive. */
  "VSS_F7": "F7",
  /** Physical pin F8: VSS; passive. */
  "VSS_F8": "F8",
  /** Physical pin F9: VSS; passive. */
  "VSS_F9": "F9",
  /** Physical pin F10: VSS; passive. */
  "VSS_F10": "F10",
  /** Physical pin F12: VSS; passive. */
  "VSS_F12": "F12",
  /** Physical pin F13: VCAP_2; power_out. */
  "VCAP_2": "F13",
  /** Physical pin F14: PC9; bidirectional. */
  "PC9": "F14",
  /** Physical pin F15: PA8; bidirectional. */
  "PA8": "F15",
  /** Physical pin G1: PH0; bidirectional. */
  "PH0": "G1",
  /** Physical pin G2: VSS; passive. */
  "VSS_G2": "G2",
  /** Physical pin G3: VDD; power_in. */
  "VDD_G3": "G3",
  /** Physical pin G4: PH3; bidirectional. */
  "PH3": "G4",
  /** Physical pin G6: VSS; passive. */
  "VSS_G6": "G6",
  /** Physical pin G7: VSS; passive. */
  "VSS_G7": "G7",
  /** Physical pin G8: VSS; passive. */
  "VSS_G8": "G8",
  /** Physical pin G9: VSS; passive. */
  "VSS_G9": "G9",
  /** Physical pin G10: VSS; passive. */
  "VSS_G10": "G10",
  /** Physical pin G12: VSS; passive. */
  "VSS_G12": "G12",
  /** Physical pin G13: VDD; power_in. */
  "VDD_G13": "G13",
  /** Physical pin G14: PC8; bidirectional. */
  "PC8": "G14",
  /** Physical pin G15: PC7; bidirectional. */
  "PC7": "G15",
  /** Physical pin H1: PH1; bidirectional. */
  "PH1": "H1",
  /** Physical pin H2: PF2; bidirectional. */
  "PF2": "H2",
  /** Physical pin H3: PF1; bidirectional. */
  "PF1": "H3",
  /** Physical pin H4: PH4; bidirectional. */
  "PH4": "H4",
  /** Physical pin H6: VSS; passive. */
  "VSS_H6": "H6",
  /** Physical pin H7: VSS; passive. */
  "VSS_H7": "H7",
  /** Physical pin H8: VSS; passive. */
  "VSS_H8": "H8",
  /** Physical pin H9: VSS; passive. */
  "VSS_H9": "H9",
  /** Physical pin H10: VSS; passive. */
  "VSS_H10": "H10",
  /** Physical pin H12: VSS; passive. */
  "VSS_H12": "H12",
  /** Physical pin H13: VDD; power_in. */
  "VDD_H13": "H13",
  /** Physical pin H14: PG8; bidirectional. */
  "PG8": "H14",
  /** Physical pin H15: PC6; bidirectional. */
  "PC6": "H15",
  /** Physical pin J1: NRST; input. */
  "NRST": "J1",
  /** Physical pin J2: PF3; bidirectional. */
  "PF3": "J2",
  /** Physical pin J3: PF4; bidirectional. */
  "PF4": "J3",
  /** Physical pin J4: PH5; bidirectional. */
  "PH5": "J4",
  /** Physical pin J6: VSS; passive. */
  "VSS_J6": "J6",
  /** Physical pin J7: VSS; passive. */
  "VSS_J7": "J7",
  /** Physical pin J8: VSS; passive. */
  "VSS_J8": "J8",
  /** Physical pin J9: VSS; passive. */
  "VSS_J9": "J9",
  /** Physical pin J10: VSS; passive. */
  "VSS_J10": "J10",
  /** Physical pin J12: VDD; power_in. */
  "VDD_J12": "J12",
  /** Physical pin J13: VDD; power_in. */
  "VDD_J13": "J13",
  /** Physical pin J14: PG7; bidirectional. */
  "PG7": "J14",
  /** Physical pin J15: PG6; bidirectional. */
  "PG6": "J15",
  /** Physical pin K1: PF7; bidirectional. */
  "PF7": "K1",
  /** Physical pin K2: PF6; bidirectional. */
  "PF6": "K2",
  /** Physical pin K3: PF5; bidirectional. */
  "PF5": "K3",
  /** Physical pin K4: VDD; power_in. */
  "VDD_K4": "K4",
  /** Physical pin K6: VSS; passive. */
  "VSS_K6": "K6",
  /** Physical pin K7: VSS; passive. */
  "VSS_K7": "K7",
  /** Physical pin K8: VSS; passive. */
  "VSS_K8": "K8",
  /** Physical pin K9: VSS; passive. */
  "VSS_K9": "K9",
  /** Physical pin K10: VSS; passive. */
  "VSS_K10": "K10",
  /** Physical pin K12: PH12; bidirectional. */
  "PH12": "K12",
  /** Physical pin K13: PG5; bidirectional. */
  "PG5": "K13",
  /** Physical pin K14: PG4; bidirectional. */
  "PG4": "K14",
  /** Physical pin K15: PG3; bidirectional. */
  "PG3": "K15",
  /** Physical pin L1: PF10; bidirectional. */
  "PF10": "L1",
  /** Physical pin L2: PF9; bidirectional. */
  "PF9": "L2",
  /** Physical pin L3: PF8; bidirectional. */
  "PF8": "L3",
  /** Physical pin L4: REGOFF; input. */
  "REGOFF": "L4",
  /** Physical pin L12: PH11; bidirectional. */
  "PH11": "L12",
  /** Physical pin L13: PH10; bidirectional. */
  "PH10": "L13",
  /** Physical pin L14: PD15; bidirectional. */
  "PD15": "L14",
  /** Physical pin L15: PG2; bidirectional. */
  "PG2": "L15",
  /** Physical pin M1: VSSA; power_in. */
  "VSSA": "M1",
  /** Physical pin M2: PC0; bidirectional. */
  "PC0": "M2",
  /** Physical pin M3: PC1; bidirectional. */
  "PC1": "M3",
  /** Physical pin M4: PC2; bidirectional. */
  "PC2": "M4",
  /** Physical pin M5: PC3; bidirectional. */
  "PC3": "M5",
  /** Physical pin M6: PB2; bidirectional. */
  "PB2": "M6",
  /** Physical pin M7: PG1; bidirectional. */
  "PG1": "M7",
  /** Physical pin M8: VSS; passive. */
  "VSS_M8": "M8",
  /** Physical pin M9: VSS; passive. */
  "VSS_M9": "M9",
  /** Physical pin M10: VCAP_1; power_out. */
  "VCAP_1": "M10",
  /** Physical pin M11: PH6; bidirectional. */
  "PH6": "M11",
  /** Physical pin M12: PH8; bidirectional. */
  "PH8": "M12",
  /** Physical pin M13: PH9; bidirectional. */
  "PH9": "M13",
  /** Physical pin M14: PD14; bidirectional. */
  "PD14": "M14",
  /** Physical pin M15: PD13; bidirectional. */
  "PD13": "M15",
  /** Physical pin N1: VREF-; input. */
  "VREF-": "N1",
  /** Physical pin N2: PA1; bidirectional. */
  "PA1": "N2",
  /** Physical pin N3: PA0; bidirectional. */
  "PA0": "N3",
  /** Physical pin N4: PA4; bidirectional. */
  "PA4": "N4",
  /** Physical pin N5: PC4; bidirectional. */
  "PC4": "N5",
  /** Physical pin N6: PF13; bidirectional. */
  "PF13": "N6",
  /** Physical pin N7: PG0; bidirectional. */
  "PG0": "N7",
  /** Physical pin N8: VDD; power_in. */
  "VDD_N8": "N8",
  /** Physical pin N9: VDD; power_in. */
  "VDD_N9": "N9",
  /** Physical pin N10: VDD; power_in. */
  "VDD_N10": "N10",
  /** Physical pin N11: PE13; bidirectional. */
  "PE13": "N11",
  /** Physical pin N12: PH7; bidirectional. */
  "PH7": "N12",
  /** Physical pin N13: PD12; bidirectional. */
  "PD12": "N13",
  /** Physical pin N14: PD11; bidirectional. */
  "PD11": "N14",
  /** Physical pin N15: PD10; bidirectional. */
  "PD10": "N15",
  /** Physical pin P1: VREF+; input. */
  "VREF+": "P1",
  /** Physical pin P2: PA2; bidirectional. */
  "PA2": "P2",
  /** Physical pin P3: PA6; bidirectional. */
  "PA6": "P3",
  /** Physical pin P4: PA5; bidirectional. */
  "PA5": "P4",
  /** Physical pin P5: PC5; bidirectional. */
  "PC5": "P5",
  /** Physical pin P6: PF12; bidirectional. */
  "PF12": "P6",
  /** Physical pin P7: PF15; bidirectional. */
  "PF15": "P7",
  /** Physical pin P8: PE8; bidirectional. */
  "PE8": "P8",
  /** Physical pin P9: PE9; bidirectional. */
  "PE9": "P9",
  /** Physical pin P10: PE11; bidirectional. */
  "PE11": "P10",
  /** Physical pin P11: PE14; bidirectional. */
  "PE14": "P11",
  /** Physical pin P12: PB12; bidirectional. */
  "PB12": "P12",
  /** Physical pin P13: PB13; bidirectional. */
  "PB13": "P13",
  /** Physical pin P14: PD9; bidirectional. */
  "PD9": "P14",
  /** Physical pin P15: PD8; bidirectional. */
  "PD8": "P15",
  /** Physical pin R1: VDDA; power_in. */
  "VDDA": "R1",
  /** Physical pin R2: PA3; bidirectional. */
  "PA3": "R2",
  /** Physical pin R3: PA7; bidirectional. */
  "PA7": "R3",
  /** Physical pin R4: PB1; bidirectional. */
  "PB1": "R4",
  /** Physical pin R5: PB0; bidirectional. */
  "PB0": "R5",
  /** Physical pin R6: PF11; bidirectional. */
  "PF11": "R6",
  /** Physical pin R7: PF14; bidirectional. */
  "PF14": "R7",
  /** Physical pin R8: PE7; bidirectional. */
  "PE7": "R8",
  /** Physical pin R9: PE10; bidirectional. */
  "PE10": "R9",
  /** Physical pin R10: PE12; bidirectional. */
  "PE12": "R10",
  /** Physical pin R11: PE15; bidirectional. */
  "PE15": "R11",
  /** Physical pin R12: PB10; bidirectional. */
  "PB10": "R12",
  /** Physical pin R13: PB11; bidirectional. */
  "PB11": "R13",
  /** Physical pin R14: PB14; bidirectional. */
  "PB14": "R14",
  /** Physical pin R15: PB15; bidirectional. */
  "PB15": "R15",
}) {
  override schema = "MCU_ST_STM32F2:STM32F207ICHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 256-1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 140 GPIO, LQFP176
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F207I_C-E-F-G_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*24x24mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f207ic.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_QFP:LQFP-176_24x24mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F207I_C_E_F_G_Tx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PI8; bidirectional. */
  "PI8": "7",
  /** Physical pin 8: PC13; bidirectional. */
  "PC13": "8",
  /** Physical pin 9: PC14; bidirectional. */
  "PC14": "9",
  /** Physical pin 10: PC15; bidirectional. */
  "PC15": "10",
  /** Physical pin 11: PI9; bidirectional. */
  "PI9": "11",
  /** Physical pin 12: PI10; bidirectional. */
  "PI10": "12",
  /** Physical pin 13: PI11; bidirectional. */
  "PI11": "13",
  /** Physical pin 14: VSS; power_in. */
  "VSS_14": "14",
  /** Physical pin 15: VDD; power_in. */
  "VDD_15": "15",
  /** Physical pin 16: PF0; bidirectional. */
  "PF0": "16",
  /** Physical pin 17: PF1; bidirectional. */
  "PF1": "17",
  /** Physical pin 18: PF2; bidirectional. */
  "PF2": "18",
  /** Physical pin 19: PF3; bidirectional. */
  "PF3": "19",
  /** Physical pin 20: PF4; bidirectional. */
  "PF4": "20",
  /** Physical pin 21: PF5; bidirectional. */
  "PF5": "21",
  /** Physical pin 22: VSS; passive. */
  "VSS_22": "22",
  /** Physical pin 23: VDD; power_in. */
  "VDD_23": "23",
  /** Physical pin 24: PF6; bidirectional. */
  "PF6": "24",
  /** Physical pin 25: PF7; bidirectional. */
  "PF7": "25",
  /** Physical pin 26: PF8; bidirectional. */
  "PF8": "26",
  /** Physical pin 27: PF9; bidirectional. */
  "PF9": "27",
  /** Physical pin 28: PF10; bidirectional. */
  "PF10": "28",
  /** Physical pin 29: PH0; bidirectional. */
  "PH0": "29",
  /** Physical pin 30: PH1; bidirectional. */
  "PH1": "30",
  /** Physical pin 31: NRST; input. */
  "NRST": "31",
  /** Physical pin 32: PC0; bidirectional. */
  "PC0": "32",
  /** Physical pin 33: PC1; bidirectional. */
  "PC1": "33",
  /** Physical pin 34: PC2; bidirectional. */
  "PC2": "34",
  /** Physical pin 35: PC3; bidirectional. */
  "PC3": "35",
  /** Physical pin 36: VDD; power_in. */
  "VDD_36": "36",
  /** Physical pin 37: VSSA; power_in. */
  "VSSA": "37",
  /** Physical pin 38: VREF+; input. */
  "VREF+": "38",
  /** Physical pin 39: VDDA; power_in. */
  "VDDA": "39",
  /** Physical pin 40: PA0; bidirectional. */
  "PA0": "40",
  /** Physical pin 41: PA1; bidirectional. */
  "PA1": "41",
  /** Physical pin 42: PA2; bidirectional. */
  "PA2": "42",
  /** Physical pin 43: PH2; bidirectional. */
  "PH2": "43",
  /** Physical pin 44: PH3; bidirectional. */
  "PH3": "44",
  /** Physical pin 45: PH4; bidirectional. */
  "PH4": "45",
  /** Physical pin 46: PH5; bidirectional. */
  "PH5": "46",
  /** Physical pin 47: PA3; bidirectional. */
  "PA3": "47",
  /** Physical pin 48: VSS; passive. */
  "VSS_48": "48",
  /** Physical pin 49: VDD; power_in. */
  "VDD_49": "49",
  /** Physical pin 50: PA4; bidirectional. */
  "PA4": "50",
  /** Physical pin 51: PA5; bidirectional. */
  "PA5": "51",
  /** Physical pin 52: PA6; bidirectional. */
  "PA6": "52",
  /** Physical pin 53: PA7; bidirectional. */
  "PA7": "53",
  /** Physical pin 54: PC4; bidirectional. */
  "PC4": "54",
  /** Physical pin 55: PC5; bidirectional. */
  "PC5": "55",
  /** Physical pin 56: PB0; bidirectional. */
  "PB0": "56",
  /** Physical pin 57: PB1; bidirectional. */
  "PB1": "57",
  /** Physical pin 58: PB2; bidirectional. */
  "PB2": "58",
  /** Physical pin 59: PF11; bidirectional. */
  "PF11": "59",
  /** Physical pin 60: PF12; bidirectional. */
  "PF12": "60",
  /** Physical pin 61: VSS; passive. */
  "VSS_61": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: PF13; bidirectional. */
  "PF13": "63",
  /** Physical pin 64: PF14; bidirectional. */
  "PF14": "64",
  /** Physical pin 65: PF15; bidirectional. */
  "PF15": "65",
  /** Physical pin 66: PG0; bidirectional. */
  "PG0": "66",
  /** Physical pin 67: PG1; bidirectional. */
  "PG1": "67",
  /** Physical pin 68: PE7; bidirectional. */
  "PE7": "68",
  /** Physical pin 69: PE8; bidirectional. */
  "PE8": "69",
  /** Physical pin 70: PE9; bidirectional. */
  "PE9": "70",
  /** Physical pin 71: VSS; passive. */
  "VSS_71": "71",
  /** Physical pin 72: VDD; power_in. */
  "VDD_72": "72",
  /** Physical pin 73: PE10; bidirectional. */
  "PE10": "73",
  /** Physical pin 74: PE11; bidirectional. */
  "PE11": "74",
  /** Physical pin 75: PE12; bidirectional. */
  "PE12": "75",
  /** Physical pin 76: PE13; bidirectional. */
  "PE13": "76",
  /** Physical pin 77: PE14; bidirectional. */
  "PE14": "77",
  /** Physical pin 78: PE15; bidirectional. */
  "PE15": "78",
  /** Physical pin 79: PB10; bidirectional. */
  "PB10": "79",
  /** Physical pin 80: PB11; bidirectional. */
  "PB11": "80",
  /** Physical pin 81: VCAP_1; power_out. */
  "VCAP_1": "81",
  /** Physical pin 82: VDD; power_in. */
  "VDD_82": "82",
  /** Physical pin 83: PH6; bidirectional. */
  "PH6": "83",
  /** Physical pin 84: PH7; bidirectional. */
  "PH7": "84",
  /** Physical pin 85: PH8; bidirectional. */
  "PH8": "85",
  /** Physical pin 86: PH9; bidirectional. */
  "PH9": "86",
  /** Physical pin 87: PH10; bidirectional. */
  "PH10": "87",
  /** Physical pin 88: PH11; bidirectional. */
  "PH11": "88",
  /** Physical pin 89: PH12; bidirectional. */
  "PH12": "89",
  /** Physical pin 90: VSS; passive. */
  "VSS_90": "90",
  /** Physical pin 91: VDD; power_in. */
  "VDD_91": "91",
  /** Physical pin 92: PB12; bidirectional. */
  "PB12": "92",
  /** Physical pin 93: PB13; bidirectional. */
  "PB13": "93",
  /** Physical pin 94: PB14; bidirectional. */
  "PB14": "94",
  /** Physical pin 95: PB15; bidirectional. */
  "PB15": "95",
  /** Physical pin 96: PD8; bidirectional. */
  "PD8": "96",
  /** Physical pin 97: PD9; bidirectional. */
  "PD9": "97",
  /** Physical pin 98: PD10; bidirectional. */
  "PD10": "98",
  /** Physical pin 99: PD11; bidirectional. */
  "PD11": "99",
  /** Physical pin 100: PD12; bidirectional. */
  "PD12": "100",
  /** Physical pin 101: PD13; bidirectional. */
  "PD13": "101",
  /** Physical pin 102: VSS; passive. */
  "VSS_102": "102",
  /** Physical pin 103: VDD; power_in. */
  "VDD_103": "103",
  /** Physical pin 104: PD14; bidirectional. */
  "PD14": "104",
  /** Physical pin 105: PD15; bidirectional. */
  "PD15": "105",
  /** Physical pin 106: PG2; bidirectional. */
  "PG2": "106",
  /** Physical pin 107: PG3; bidirectional. */
  "PG3": "107",
  /** Physical pin 108: PG4; bidirectional. */
  "PG4": "108",
  /** Physical pin 109: PG5; bidirectional. */
  "PG5": "109",
  /** Physical pin 110: PG6; bidirectional. */
  "PG6": "110",
  /** Physical pin 111: PG7; bidirectional. */
  "PG7": "111",
  /** Physical pin 112: PG8; bidirectional. */
  "PG8": "112",
  /** Physical pin 113: VSS; passive. */
  "VSS_113": "113",
  /** Physical pin 114: VDD; power_in. */
  "VDD_114": "114",
  /** Physical pin 115: PC6; bidirectional. */
  "PC6": "115",
  /** Physical pin 116: PC7; bidirectional. */
  "PC7": "116",
  /** Physical pin 117: PC8; bidirectional. */
  "PC8": "117",
  /** Physical pin 118: PC9; bidirectional. */
  "PC9": "118",
  /** Physical pin 119: PA8; bidirectional. */
  "PA8": "119",
  /** Physical pin 120: PA9; bidirectional. */
  "PA9": "120",
  /** Physical pin 121: PA10; bidirectional. */
  "PA10": "121",
  /** Physical pin 122: PA11; bidirectional. */
  "PA11": "122",
  /** Physical pin 123: PA12; bidirectional. */
  "PA12": "123",
  /** Physical pin 124: PA13; bidirectional. */
  "PA13": "124",
  /** Physical pin 125: VCAP_2; power_out. */
  "VCAP_2": "125",
  /** Physical pin 126: VSS; passive. */
  "VSS_126": "126",
  /** Physical pin 127: VDD; power_in. */
  "VDD_127": "127",
  /** Physical pin 128: PH13; bidirectional. */
  "PH13": "128",
  /** Physical pin 129: PH14; bidirectional. */
  "PH14": "129",
  /** Physical pin 130: PH15; bidirectional. */
  "PH15": "130",
  /** Physical pin 131: PI0; bidirectional. */
  "PI0": "131",
  /** Physical pin 132: PI1; bidirectional. */
  "PI1": "132",
  /** Physical pin 133: PI2; bidirectional. */
  "PI2": "133",
  /** Physical pin 134: PI3; bidirectional. */
  "PI3": "134",
  /** Physical pin 135: VSS; passive. */
  "VSS_135": "135",
  /** Physical pin 136: VDD; power_in. */
  "VDD_136": "136",
  /** Physical pin 137: PA14; bidirectional. */
  "PA14": "137",
  /** Physical pin 138: PA15; bidirectional. */
  "PA15": "138",
  /** Physical pin 139: PC10; bidirectional. */
  "PC10": "139",
  /** Physical pin 140: PC11; bidirectional. */
  "PC11": "140",
  /** Physical pin 141: PC12; bidirectional. */
  "PC12": "141",
  /** Physical pin 142: PD0; bidirectional. */
  "PD0": "142",
  /** Physical pin 143: PD1; bidirectional. */
  "PD1": "143",
  /** Physical pin 144: PD2; bidirectional. */
  "PD2": "144",
  /** Physical pin 145: PD3; bidirectional. */
  "PD3": "145",
  /** Physical pin 146: PD4; bidirectional. */
  "PD4": "146",
  /** Physical pin 147: PD5; bidirectional. */
  "PD5": "147",
  /** Physical pin 148: VSS; passive. */
  "VSS_148": "148",
  /** Physical pin 149: VDD; power_in. */
  "VDD_149": "149",
  /** Physical pin 150: PD6; bidirectional. */
  "PD6": "150",
  /** Physical pin 151: PD7; bidirectional. */
  "PD7": "151",
  /** Physical pin 152: PG9; bidirectional. */
  "PG9": "152",
  /** Physical pin 153: PG10; bidirectional. */
  "PG10": "153",
  /** Physical pin 154: PG11; bidirectional. */
  "PG11": "154",
  /** Physical pin 155: PG12; bidirectional. */
  "PG12": "155",
  /** Physical pin 156: PG13; bidirectional. */
  "PG13": "156",
  /** Physical pin 157: PG14; bidirectional. */
  "PG14": "157",
  /** Physical pin 158: VSS; passive. */
  "VSS_158": "158",
  /** Physical pin 159: VDD; power_in. */
  "VDD_159": "159",
  /** Physical pin 160: PG15; bidirectional. */
  "PG15": "160",
  /** Physical pin 161: PB3; bidirectional. */
  "PB3": "161",
  /** Physical pin 162: PB4; bidirectional. */
  "PB4": "162",
  /** Physical pin 163: PB5; bidirectional. */
  "PB5": "163",
  /** Physical pin 164: PB6; bidirectional. */
  "PB6": "164",
  /** Physical pin 165: PB7; bidirectional. */
  "PB7": "165",
  /** Physical pin 166: BOOT0; input. */
  "BOOT0": "166",
  /** Physical pin 167: PB8; bidirectional. */
  "PB8": "167",
  /** Physical pin 168: PB9; bidirectional. */
  "PB9": "168",
  /** Physical pin 169: PE0; bidirectional. */
  "PE0": "169",
  /** Physical pin 170: PE1; bidirectional. */
  "PE1": "170",
  /** Physical pin 171: RFU; no_connect. */
  "RFU": "171",
  /** Physical pin 172: VDD; power_in. */
  "VDD_172": "172",
  /** Physical pin 173: PI4; bidirectional. */
  "PI4": "173",
  /** Physical pin 174: PI5; bidirectional. */
  "PI5": "174",
  /** Physical pin 175: PI6; bidirectional. */
  "PI6": "175",
  /** Physical pin 176: PI7; bidirectional. */
  "PI7": "176",
}) {
  override schema = "MCU_ST_STM32F2:STM32F207I_C-E-F-G_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 256KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 140 GPIO, LQFP176
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F207ICTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*24x24mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f207ic.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_QFP:LQFP-176_24x24mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F207ICTx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PI8; bidirectional. */
  "PI8": "7",
  /** Physical pin 8: PC13; bidirectional. */
  "PC13": "8",
  /** Physical pin 9: PC14; bidirectional. */
  "PC14": "9",
  /** Physical pin 10: PC15; bidirectional. */
  "PC15": "10",
  /** Physical pin 11: PI9; bidirectional. */
  "PI9": "11",
  /** Physical pin 12: PI10; bidirectional. */
  "PI10": "12",
  /** Physical pin 13: PI11; bidirectional. */
  "PI11": "13",
  /** Physical pin 14: VSS; power_in. */
  "VSS_14": "14",
  /** Physical pin 15: VDD; power_in. */
  "VDD_15": "15",
  /** Physical pin 16: PF0; bidirectional. */
  "PF0": "16",
  /** Physical pin 17: PF1; bidirectional. */
  "PF1": "17",
  /** Physical pin 18: PF2; bidirectional. */
  "PF2": "18",
  /** Physical pin 19: PF3; bidirectional. */
  "PF3": "19",
  /** Physical pin 20: PF4; bidirectional. */
  "PF4": "20",
  /** Physical pin 21: PF5; bidirectional. */
  "PF5": "21",
  /** Physical pin 22: VSS; passive. */
  "VSS_22": "22",
  /** Physical pin 23: VDD; power_in. */
  "VDD_23": "23",
  /** Physical pin 24: PF6; bidirectional. */
  "PF6": "24",
  /** Physical pin 25: PF7; bidirectional. */
  "PF7": "25",
  /** Physical pin 26: PF8; bidirectional. */
  "PF8": "26",
  /** Physical pin 27: PF9; bidirectional. */
  "PF9": "27",
  /** Physical pin 28: PF10; bidirectional. */
  "PF10": "28",
  /** Physical pin 29: PH0; bidirectional. */
  "PH0": "29",
  /** Physical pin 30: PH1; bidirectional. */
  "PH1": "30",
  /** Physical pin 31: NRST; input. */
  "NRST": "31",
  /** Physical pin 32: PC0; bidirectional. */
  "PC0": "32",
  /** Physical pin 33: PC1; bidirectional. */
  "PC1": "33",
  /** Physical pin 34: PC2; bidirectional. */
  "PC2": "34",
  /** Physical pin 35: PC3; bidirectional. */
  "PC3": "35",
  /** Physical pin 36: VDD; power_in. */
  "VDD_36": "36",
  /** Physical pin 37: VSSA; power_in. */
  "VSSA": "37",
  /** Physical pin 38: VREF+; input. */
  "VREF+": "38",
  /** Physical pin 39: VDDA; power_in. */
  "VDDA": "39",
  /** Physical pin 40: PA0; bidirectional. */
  "PA0": "40",
  /** Physical pin 41: PA1; bidirectional. */
  "PA1": "41",
  /** Physical pin 42: PA2; bidirectional. */
  "PA2": "42",
  /** Physical pin 43: PH2; bidirectional. */
  "PH2": "43",
  /** Physical pin 44: PH3; bidirectional. */
  "PH3": "44",
  /** Physical pin 45: PH4; bidirectional. */
  "PH4": "45",
  /** Physical pin 46: PH5; bidirectional. */
  "PH5": "46",
  /** Physical pin 47: PA3; bidirectional. */
  "PA3": "47",
  /** Physical pin 48: VSS; passive. */
  "VSS_48": "48",
  /** Physical pin 49: VDD; power_in. */
  "VDD_49": "49",
  /** Physical pin 50: PA4; bidirectional. */
  "PA4": "50",
  /** Physical pin 51: PA5; bidirectional. */
  "PA5": "51",
  /** Physical pin 52: PA6; bidirectional. */
  "PA6": "52",
  /** Physical pin 53: PA7; bidirectional. */
  "PA7": "53",
  /** Physical pin 54: PC4; bidirectional. */
  "PC4": "54",
  /** Physical pin 55: PC5; bidirectional. */
  "PC5": "55",
  /** Physical pin 56: PB0; bidirectional. */
  "PB0": "56",
  /** Physical pin 57: PB1; bidirectional. */
  "PB1": "57",
  /** Physical pin 58: PB2; bidirectional. */
  "PB2": "58",
  /** Physical pin 59: PF11; bidirectional. */
  "PF11": "59",
  /** Physical pin 60: PF12; bidirectional. */
  "PF12": "60",
  /** Physical pin 61: VSS; passive. */
  "VSS_61": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: PF13; bidirectional. */
  "PF13": "63",
  /** Physical pin 64: PF14; bidirectional. */
  "PF14": "64",
  /** Physical pin 65: PF15; bidirectional. */
  "PF15": "65",
  /** Physical pin 66: PG0; bidirectional. */
  "PG0": "66",
  /** Physical pin 67: PG1; bidirectional. */
  "PG1": "67",
  /** Physical pin 68: PE7; bidirectional. */
  "PE7": "68",
  /** Physical pin 69: PE8; bidirectional. */
  "PE8": "69",
  /** Physical pin 70: PE9; bidirectional. */
  "PE9": "70",
  /** Physical pin 71: VSS; passive. */
  "VSS_71": "71",
  /** Physical pin 72: VDD; power_in. */
  "VDD_72": "72",
  /** Physical pin 73: PE10; bidirectional. */
  "PE10": "73",
  /** Physical pin 74: PE11; bidirectional. */
  "PE11": "74",
  /** Physical pin 75: PE12; bidirectional. */
  "PE12": "75",
  /** Physical pin 76: PE13; bidirectional. */
  "PE13": "76",
  /** Physical pin 77: PE14; bidirectional. */
  "PE14": "77",
  /** Physical pin 78: PE15; bidirectional. */
  "PE15": "78",
  /** Physical pin 79: PB10; bidirectional. */
  "PB10": "79",
  /** Physical pin 80: PB11; bidirectional. */
  "PB11": "80",
  /** Physical pin 81: VCAP_1; power_out. */
  "VCAP_1": "81",
  /** Physical pin 82: VDD; power_in. */
  "VDD_82": "82",
  /** Physical pin 83: PH6; bidirectional. */
  "PH6": "83",
  /** Physical pin 84: PH7; bidirectional. */
  "PH7": "84",
  /** Physical pin 85: PH8; bidirectional. */
  "PH8": "85",
  /** Physical pin 86: PH9; bidirectional. */
  "PH9": "86",
  /** Physical pin 87: PH10; bidirectional. */
  "PH10": "87",
  /** Physical pin 88: PH11; bidirectional. */
  "PH11": "88",
  /** Physical pin 89: PH12; bidirectional. */
  "PH12": "89",
  /** Physical pin 90: VSS; passive. */
  "VSS_90": "90",
  /** Physical pin 91: VDD; power_in. */
  "VDD_91": "91",
  /** Physical pin 92: PB12; bidirectional. */
  "PB12": "92",
  /** Physical pin 93: PB13; bidirectional. */
  "PB13": "93",
  /** Physical pin 94: PB14; bidirectional. */
  "PB14": "94",
  /** Physical pin 95: PB15; bidirectional. */
  "PB15": "95",
  /** Physical pin 96: PD8; bidirectional. */
  "PD8": "96",
  /** Physical pin 97: PD9; bidirectional. */
  "PD9": "97",
  /** Physical pin 98: PD10; bidirectional. */
  "PD10": "98",
  /** Physical pin 99: PD11; bidirectional. */
  "PD11": "99",
  /** Physical pin 100: PD12; bidirectional. */
  "PD12": "100",
  /** Physical pin 101: PD13; bidirectional. */
  "PD13": "101",
  /** Physical pin 102: VSS; passive. */
  "VSS_102": "102",
  /** Physical pin 103: VDD; power_in. */
  "VDD_103": "103",
  /** Physical pin 104: PD14; bidirectional. */
  "PD14": "104",
  /** Physical pin 105: PD15; bidirectional. */
  "PD15": "105",
  /** Physical pin 106: PG2; bidirectional. */
  "PG2": "106",
  /** Physical pin 107: PG3; bidirectional. */
  "PG3": "107",
  /** Physical pin 108: PG4; bidirectional. */
  "PG4": "108",
  /** Physical pin 109: PG5; bidirectional. */
  "PG5": "109",
  /** Physical pin 110: PG6; bidirectional. */
  "PG6": "110",
  /** Physical pin 111: PG7; bidirectional. */
  "PG7": "111",
  /** Physical pin 112: PG8; bidirectional. */
  "PG8": "112",
  /** Physical pin 113: VSS; passive. */
  "VSS_113": "113",
  /** Physical pin 114: VDD; power_in. */
  "VDD_114": "114",
  /** Physical pin 115: PC6; bidirectional. */
  "PC6": "115",
  /** Physical pin 116: PC7; bidirectional. */
  "PC7": "116",
  /** Physical pin 117: PC8; bidirectional. */
  "PC8": "117",
  /** Physical pin 118: PC9; bidirectional. */
  "PC9": "118",
  /** Physical pin 119: PA8; bidirectional. */
  "PA8": "119",
  /** Physical pin 120: PA9; bidirectional. */
  "PA9": "120",
  /** Physical pin 121: PA10; bidirectional. */
  "PA10": "121",
  /** Physical pin 122: PA11; bidirectional. */
  "PA11": "122",
  /** Physical pin 123: PA12; bidirectional. */
  "PA12": "123",
  /** Physical pin 124: PA13; bidirectional. */
  "PA13": "124",
  /** Physical pin 125: VCAP_2; power_out. */
  "VCAP_2": "125",
  /** Physical pin 126: VSS; passive. */
  "VSS_126": "126",
  /** Physical pin 127: VDD; power_in. */
  "VDD_127": "127",
  /** Physical pin 128: PH13; bidirectional. */
  "PH13": "128",
  /** Physical pin 129: PH14; bidirectional. */
  "PH14": "129",
  /** Physical pin 130: PH15; bidirectional. */
  "PH15": "130",
  /** Physical pin 131: PI0; bidirectional. */
  "PI0": "131",
  /** Physical pin 132: PI1; bidirectional. */
  "PI1": "132",
  /** Physical pin 133: PI2; bidirectional. */
  "PI2": "133",
  /** Physical pin 134: PI3; bidirectional. */
  "PI3": "134",
  /** Physical pin 135: VSS; passive. */
  "VSS_135": "135",
  /** Physical pin 136: VDD; power_in. */
  "VDD_136": "136",
  /** Physical pin 137: PA14; bidirectional. */
  "PA14": "137",
  /** Physical pin 138: PA15; bidirectional. */
  "PA15": "138",
  /** Physical pin 139: PC10; bidirectional. */
  "PC10": "139",
  /** Physical pin 140: PC11; bidirectional. */
  "PC11": "140",
  /** Physical pin 141: PC12; bidirectional. */
  "PC12": "141",
  /** Physical pin 142: PD0; bidirectional. */
  "PD0": "142",
  /** Physical pin 143: PD1; bidirectional. */
  "PD1": "143",
  /** Physical pin 144: PD2; bidirectional. */
  "PD2": "144",
  /** Physical pin 145: PD3; bidirectional. */
  "PD3": "145",
  /** Physical pin 146: PD4; bidirectional. */
  "PD4": "146",
  /** Physical pin 147: PD5; bidirectional. */
  "PD5": "147",
  /** Physical pin 148: VSS; passive. */
  "VSS_148": "148",
  /** Physical pin 149: VDD; power_in. */
  "VDD_149": "149",
  /** Physical pin 150: PD6; bidirectional. */
  "PD6": "150",
  /** Physical pin 151: PD7; bidirectional. */
  "PD7": "151",
  /** Physical pin 152: PG9; bidirectional. */
  "PG9": "152",
  /** Physical pin 153: PG10; bidirectional. */
  "PG10": "153",
  /** Physical pin 154: PG11; bidirectional. */
  "PG11": "154",
  /** Physical pin 155: PG12; bidirectional. */
  "PG12": "155",
  /** Physical pin 156: PG13; bidirectional. */
  "PG13": "156",
  /** Physical pin 157: PG14; bidirectional. */
  "PG14": "157",
  /** Physical pin 158: VSS; passive. */
  "VSS_158": "158",
  /** Physical pin 159: VDD; power_in. */
  "VDD_159": "159",
  /** Physical pin 160: PG15; bidirectional. */
  "PG15": "160",
  /** Physical pin 161: PB3; bidirectional. */
  "PB3": "161",
  /** Physical pin 162: PB4; bidirectional. */
  "PB4": "162",
  /** Physical pin 163: PB5; bidirectional. */
  "PB5": "163",
  /** Physical pin 164: PB6; bidirectional. */
  "PB6": "164",
  /** Physical pin 165: PB7; bidirectional. */
  "PB7": "165",
  /** Physical pin 166: BOOT0; input. */
  "BOOT0": "166",
  /** Physical pin 167: PB8; bidirectional. */
  "PB8": "167",
  /** Physical pin 168: PB9; bidirectional. */
  "PB9": "168",
  /** Physical pin 169: PE0; bidirectional. */
  "PE0": "169",
  /** Physical pin 170: PE1; bidirectional. */
  "PE1": "170",
  /** Physical pin 171: RFU; no_connect. */
  "RFU": "171",
  /** Physical pin 172: VDD; power_in. */
  "VDD_172": "172",
  /** Physical pin 173: PI4; bidirectional. */
  "PI4": "173",
  /** Physical pin 174: PI5; bidirectional. */
  "PI5": "174",
  /** Physical pin 175: PI6; bidirectional. */
  "PI6": "175",
  /** Physical pin 176: PI7; bidirectional. */
  "PI7": "176",
}) {
  override schema = "MCU_ST_STM32F2:STM32F207ICTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 512KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 140 GPIO, UFBGA176
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F207IEHx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*10x10mm*Layout15x15*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f207ie.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_BGA:UFBGA-201_10x10mm_Layout15x15_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F207IEHx extends Component.withPins({
  /** Physical pin A1: PE3; bidirectional. */
  "PE3": "A1",
  /** Physical pin A2: PE2; bidirectional. */
  "PE2": "A2",
  /** Physical pin A3: PE1; bidirectional. */
  "PE1": "A3",
  /** Physical pin A4: PE0; bidirectional. */
  "PE0": "A4",
  /** Physical pin A5: PB8; bidirectional. */
  "PB8": "A5",
  /** Physical pin A6: PB5; bidirectional. */
  "PB5": "A6",
  /** Physical pin A7: PG14; bidirectional. */
  "PG14": "A7",
  /** Physical pin A8: PG13; bidirectional. */
  "PG13": "A8",
  /** Physical pin A9: PB4; bidirectional. */
  "PB4": "A9",
  /** Physical pin A10: PB3; bidirectional. */
  "PB3": "A10",
  /** Physical pin A11: PD7; bidirectional. */
  "PD7": "A11",
  /** Physical pin A12: PC12; bidirectional. */
  "PC12": "A12",
  /** Physical pin A13: PA15; bidirectional. */
  "PA15": "A13",
  /** Physical pin A14: PA14; bidirectional. */
  "PA14": "A14",
  /** Physical pin A15: PA13; bidirectional. */
  "PA13": "A15",
  /** Physical pin B1: PE4; bidirectional. */
  "PE4": "B1",
  /** Physical pin B2: PE5; bidirectional. */
  "PE5": "B2",
  /** Physical pin B3: PE6; bidirectional. */
  "PE6": "B3",
  /** Physical pin B4: PB9; bidirectional. */
  "PB9": "B4",
  /** Physical pin B5: PB7; bidirectional. */
  "PB7": "B5",
  /** Physical pin B6: PB6; bidirectional. */
  "PB6": "B6",
  /** Physical pin B7: PG15; bidirectional. */
  "PG15": "B7",
  /** Physical pin B8: PG12; bidirectional. */
  "PG12": "B8",
  /** Physical pin B9: PG11; bidirectional. */
  "PG11": "B9",
  /** Physical pin B10: PG10; bidirectional. */
  "PG10": "B10",
  /** Physical pin B11: PD6; bidirectional. */
  "PD6": "B11",
  /** Physical pin B12: PD0; bidirectional. */
  "PD0": "B12",
  /** Physical pin B13: PC11; bidirectional. */
  "PC11": "B13",
  /** Physical pin B14: PC10; bidirectional. */
  "PC10": "B14",
  /** Physical pin B15: PA12; bidirectional. */
  "PA12": "B15",
  /** Physical pin C1: VBAT; power_in. */
  "VBAT": "C1",
  /** Physical pin C2: PI7; bidirectional. */
  "PI7": "C2",
  /** Physical pin C3: PI6; bidirectional. */
  "PI6": "C3",
  /** Physical pin C4: PI5; bidirectional. */
  "PI5": "C4",
  /** Physical pin C5: VDD; power_in. */
  "VDD_C5": "C5",
  /** Physical pin C6: RFU; no_connect. */
  "RFU": "C6",
  /** Physical pin C7: VDD; power_in. */
  "VDD_C7": "C7",
  /** Physical pin C8: VDD; power_in. */
  "VDD_C8": "C8",
  /** Physical pin C9: VDD; power_in. */
  "VDD_C9": "C9",
  /** Physical pin C10: PG9; bidirectional. */
  "PG9": "C10",
  /** Physical pin C11: PD5; bidirectional. */
  "PD5": "C11",
  /** Physical pin C12: PD1; bidirectional. */
  "PD1": "C12",
  /** Physical pin C13: PI3; bidirectional. */
  "PI3": "C13",
  /** Physical pin C14: PI2; bidirectional. */
  "PI2": "C14",
  /** Physical pin C15: PA11; bidirectional. */
  "PA11": "C15",
  /** Physical pin D1: PC13; bidirectional. */
  "PC13": "D1",
  /** Physical pin D2: PI8; bidirectional. */
  "PI8": "D2",
  /** Physical pin D3: PI9; bidirectional. */
  "PI9": "D3",
  /** Physical pin D4: PI4; bidirectional. */
  "PI4": "D4",
  /** Physical pin D5: VSS; power_in. */
  "VSS_D5": "D5",
  /** Physical pin D6: BOOT0; input. */
  "BOOT0": "D6",
  /** Physical pin D7: VSS; passive. */
  "VSS_D7": "D7",
  /** Physical pin D8: VSS; passive. */
  "VSS_D8": "D8",
  /** Physical pin D9: VSS; passive. */
  "VSS_D9": "D9",
  /** Physical pin D10: PD4; bidirectional. */
  "PD4": "D10",
  /** Physical pin D11: PD3; bidirectional. */
  "PD3": "D11",
  /** Physical pin D12: PD2; bidirectional. */
  "PD2": "D12",
  /** Physical pin D13: PH15; bidirectional. */
  "PH15": "D13",
  /** Physical pin D14: PI1; bidirectional. */
  "PI1": "D14",
  /** Physical pin D15: PA10; bidirectional. */
  "PA10": "D15",
  /** Physical pin E1: PC14; bidirectional. */
  "PC14": "E1",
  /** Physical pin E2: PF0; bidirectional. */
  "PF0": "E2",
  /** Physical pin E3: PI10; bidirectional. */
  "PI10": "E3",
  /** Physical pin E4: PI11; bidirectional. */
  "PI11": "E4",
  /** Physical pin E12: PH13; bidirectional. */
  "PH13": "E12",
  /** Physical pin E13: PH14; bidirectional. */
  "PH14": "E13",
  /** Physical pin E14: PI0; bidirectional. */
  "PI0": "E14",
  /** Physical pin E15: PA9; bidirectional. */
  "PA9": "E15",
  /** Physical pin F1: PC15; bidirectional. */
  "PC15": "F1",
  /** Physical pin F2: VSS; passive. */
  "VSS_F2": "F2",
  /** Physical pin F3: VDD; power_in. */
  "VDD_F3": "F3",
  /** Physical pin F4: PH2; bidirectional. */
  "PH2": "F4",
  /** Physical pin F6: VSS; passive. */
  "VSS_F6": "F6",
  /** Physical pin F7: VSS; passive. */
  "VSS_F7": "F7",
  /** Physical pin F8: VSS; passive. */
  "VSS_F8": "F8",
  /** Physical pin F9: VSS; passive. */
  "VSS_F9": "F9",
  /** Physical pin F10: VSS; passive. */
  "VSS_F10": "F10",
  /** Physical pin F12: VSS; passive. */
  "VSS_F12": "F12",
  /** Physical pin F13: VCAP_2; power_out. */
  "VCAP_2": "F13",
  /** Physical pin F14: PC9; bidirectional. */
  "PC9": "F14",
  /** Physical pin F15: PA8; bidirectional. */
  "PA8": "F15",
  /** Physical pin G1: PH0; bidirectional. */
  "PH0": "G1",
  /** Physical pin G2: VSS; passive. */
  "VSS_G2": "G2",
  /** Physical pin G3: VDD; power_in. */
  "VDD_G3": "G3",
  /** Physical pin G4: PH3; bidirectional. */
  "PH3": "G4",
  /** Physical pin G6: VSS; passive. */
  "VSS_G6": "G6",
  /** Physical pin G7: VSS; passive. */
  "VSS_G7": "G7",
  /** Physical pin G8: VSS; passive. */
  "VSS_G8": "G8",
  /** Physical pin G9: VSS; passive. */
  "VSS_G9": "G9",
  /** Physical pin G10: VSS; passive. */
  "VSS_G10": "G10",
  /** Physical pin G12: VSS; passive. */
  "VSS_G12": "G12",
  /** Physical pin G13: VDD; power_in. */
  "VDD_G13": "G13",
  /** Physical pin G14: PC8; bidirectional. */
  "PC8": "G14",
  /** Physical pin G15: PC7; bidirectional. */
  "PC7": "G15",
  /** Physical pin H1: PH1; bidirectional. */
  "PH1": "H1",
  /** Physical pin H2: PF2; bidirectional. */
  "PF2": "H2",
  /** Physical pin H3: PF1; bidirectional. */
  "PF1": "H3",
  /** Physical pin H4: PH4; bidirectional. */
  "PH4": "H4",
  /** Physical pin H6: VSS; passive. */
  "VSS_H6": "H6",
  /** Physical pin H7: VSS; passive. */
  "VSS_H7": "H7",
  /** Physical pin H8: VSS; passive. */
  "VSS_H8": "H8",
  /** Physical pin H9: VSS; passive. */
  "VSS_H9": "H9",
  /** Physical pin H10: VSS; passive. */
  "VSS_H10": "H10",
  /** Physical pin H12: VSS; passive. */
  "VSS_H12": "H12",
  /** Physical pin H13: VDD; power_in. */
  "VDD_H13": "H13",
  /** Physical pin H14: PG8; bidirectional. */
  "PG8": "H14",
  /** Physical pin H15: PC6; bidirectional. */
  "PC6": "H15",
  /** Physical pin J1: NRST; input. */
  "NRST": "J1",
  /** Physical pin J2: PF3; bidirectional. */
  "PF3": "J2",
  /** Physical pin J3: PF4; bidirectional. */
  "PF4": "J3",
  /** Physical pin J4: PH5; bidirectional. */
  "PH5": "J4",
  /** Physical pin J6: VSS; passive. */
  "VSS_J6": "J6",
  /** Physical pin J7: VSS; passive. */
  "VSS_J7": "J7",
  /** Physical pin J8: VSS; passive. */
  "VSS_J8": "J8",
  /** Physical pin J9: VSS; passive. */
  "VSS_J9": "J9",
  /** Physical pin J10: VSS; passive. */
  "VSS_J10": "J10",
  /** Physical pin J12: VDD; power_in. */
  "VDD_J12": "J12",
  /** Physical pin J13: VDD; power_in. */
  "VDD_J13": "J13",
  /** Physical pin J14: PG7; bidirectional. */
  "PG7": "J14",
  /** Physical pin J15: PG6; bidirectional. */
  "PG6": "J15",
  /** Physical pin K1: PF7; bidirectional. */
  "PF7": "K1",
  /** Physical pin K2: PF6; bidirectional. */
  "PF6": "K2",
  /** Physical pin K3: PF5; bidirectional. */
  "PF5": "K3",
  /** Physical pin K4: VDD; power_in. */
  "VDD_K4": "K4",
  /** Physical pin K6: VSS; passive. */
  "VSS_K6": "K6",
  /** Physical pin K7: VSS; passive. */
  "VSS_K7": "K7",
  /** Physical pin K8: VSS; passive. */
  "VSS_K8": "K8",
  /** Physical pin K9: VSS; passive. */
  "VSS_K9": "K9",
  /** Physical pin K10: VSS; passive. */
  "VSS_K10": "K10",
  /** Physical pin K12: PH12; bidirectional. */
  "PH12": "K12",
  /** Physical pin K13: PG5; bidirectional. */
  "PG5": "K13",
  /** Physical pin K14: PG4; bidirectional. */
  "PG4": "K14",
  /** Physical pin K15: PG3; bidirectional. */
  "PG3": "K15",
  /** Physical pin L1: PF10; bidirectional. */
  "PF10": "L1",
  /** Physical pin L2: PF9; bidirectional. */
  "PF9": "L2",
  /** Physical pin L3: PF8; bidirectional. */
  "PF8": "L3",
  /** Physical pin L4: REGOFF; input. */
  "REGOFF": "L4",
  /** Physical pin L12: PH11; bidirectional. */
  "PH11": "L12",
  /** Physical pin L13: PH10; bidirectional. */
  "PH10": "L13",
  /** Physical pin L14: PD15; bidirectional. */
  "PD15": "L14",
  /** Physical pin L15: PG2; bidirectional. */
  "PG2": "L15",
  /** Physical pin M1: VSSA; power_in. */
  "VSSA": "M1",
  /** Physical pin M2: PC0; bidirectional. */
  "PC0": "M2",
  /** Physical pin M3: PC1; bidirectional. */
  "PC1": "M3",
  /** Physical pin M4: PC2; bidirectional. */
  "PC2": "M4",
  /** Physical pin M5: PC3; bidirectional. */
  "PC3": "M5",
  /** Physical pin M6: PB2; bidirectional. */
  "PB2": "M6",
  /** Physical pin M7: PG1; bidirectional. */
  "PG1": "M7",
  /** Physical pin M8: VSS; passive. */
  "VSS_M8": "M8",
  /** Physical pin M9: VSS; passive. */
  "VSS_M9": "M9",
  /** Physical pin M10: VCAP_1; power_out. */
  "VCAP_1": "M10",
  /** Physical pin M11: PH6; bidirectional. */
  "PH6": "M11",
  /** Physical pin M12: PH8; bidirectional. */
  "PH8": "M12",
  /** Physical pin M13: PH9; bidirectional. */
  "PH9": "M13",
  /** Physical pin M14: PD14; bidirectional. */
  "PD14": "M14",
  /** Physical pin M15: PD13; bidirectional. */
  "PD13": "M15",
  /** Physical pin N1: VREF-; input. */
  "VREF-": "N1",
  /** Physical pin N2: PA1; bidirectional. */
  "PA1": "N2",
  /** Physical pin N3: PA0; bidirectional. */
  "PA0": "N3",
  /** Physical pin N4: PA4; bidirectional. */
  "PA4": "N4",
  /** Physical pin N5: PC4; bidirectional. */
  "PC4": "N5",
  /** Physical pin N6: PF13; bidirectional. */
  "PF13": "N6",
  /** Physical pin N7: PG0; bidirectional. */
  "PG0": "N7",
  /** Physical pin N8: VDD; power_in. */
  "VDD_N8": "N8",
  /** Physical pin N9: VDD; power_in. */
  "VDD_N9": "N9",
  /** Physical pin N10: VDD; power_in. */
  "VDD_N10": "N10",
  /** Physical pin N11: PE13; bidirectional. */
  "PE13": "N11",
  /** Physical pin N12: PH7; bidirectional. */
  "PH7": "N12",
  /** Physical pin N13: PD12; bidirectional. */
  "PD12": "N13",
  /** Physical pin N14: PD11; bidirectional. */
  "PD11": "N14",
  /** Physical pin N15: PD10; bidirectional. */
  "PD10": "N15",
  /** Physical pin P1: VREF+; input. */
  "VREF+": "P1",
  /** Physical pin P2: PA2; bidirectional. */
  "PA2": "P2",
  /** Physical pin P3: PA6; bidirectional. */
  "PA6": "P3",
  /** Physical pin P4: PA5; bidirectional. */
  "PA5": "P4",
  /** Physical pin P5: PC5; bidirectional. */
  "PC5": "P5",
  /** Physical pin P6: PF12; bidirectional. */
  "PF12": "P6",
  /** Physical pin P7: PF15; bidirectional. */
  "PF15": "P7",
  /** Physical pin P8: PE8; bidirectional. */
  "PE8": "P8",
  /** Physical pin P9: PE9; bidirectional. */
  "PE9": "P9",
  /** Physical pin P10: PE11; bidirectional. */
  "PE11": "P10",
  /** Physical pin P11: PE14; bidirectional. */
  "PE14": "P11",
  /** Physical pin P12: PB12; bidirectional. */
  "PB12": "P12",
  /** Physical pin P13: PB13; bidirectional. */
  "PB13": "P13",
  /** Physical pin P14: PD9; bidirectional. */
  "PD9": "P14",
  /** Physical pin P15: PD8; bidirectional. */
  "PD8": "P15",
  /** Physical pin R1: VDDA; power_in. */
  "VDDA": "R1",
  /** Physical pin R2: PA3; bidirectional. */
  "PA3": "R2",
  /** Physical pin R3: PA7; bidirectional. */
  "PA7": "R3",
  /** Physical pin R4: PB1; bidirectional. */
  "PB1": "R4",
  /** Physical pin R5: PB0; bidirectional. */
  "PB0": "R5",
  /** Physical pin R6: PF11; bidirectional. */
  "PF11": "R6",
  /** Physical pin R7: PF14; bidirectional. */
  "PF14": "R7",
  /** Physical pin R8: PE7; bidirectional. */
  "PE7": "R8",
  /** Physical pin R9: PE10; bidirectional. */
  "PE10": "R9",
  /** Physical pin R10: PE12; bidirectional. */
  "PE12": "R10",
  /** Physical pin R11: PE15; bidirectional. */
  "PE15": "R11",
  /** Physical pin R12: PB10; bidirectional. */
  "PB10": "R12",
  /** Physical pin R13: PB11; bidirectional. */
  "PB11": "R13",
  /** Physical pin R14: PB14; bidirectional. */
  "PB14": "R14",
  /** Physical pin R15: PB15; bidirectional. */
  "PB15": "R15",
}) {
  override schema = "MCU_ST_STM32F2:STM32F207IEHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 512KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 140 GPIO, LQFP176
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F207IETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*24x24mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f207ie.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_QFP:LQFP-176_24x24mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F207IETx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PI8; bidirectional. */
  "PI8": "7",
  /** Physical pin 8: PC13; bidirectional. */
  "PC13": "8",
  /** Physical pin 9: PC14; bidirectional. */
  "PC14": "9",
  /** Physical pin 10: PC15; bidirectional. */
  "PC15": "10",
  /** Physical pin 11: PI9; bidirectional. */
  "PI9": "11",
  /** Physical pin 12: PI10; bidirectional. */
  "PI10": "12",
  /** Physical pin 13: PI11; bidirectional. */
  "PI11": "13",
  /** Physical pin 14: VSS; power_in. */
  "VSS_14": "14",
  /** Physical pin 15: VDD; power_in. */
  "VDD_15": "15",
  /** Physical pin 16: PF0; bidirectional. */
  "PF0": "16",
  /** Physical pin 17: PF1; bidirectional. */
  "PF1": "17",
  /** Physical pin 18: PF2; bidirectional. */
  "PF2": "18",
  /** Physical pin 19: PF3; bidirectional. */
  "PF3": "19",
  /** Physical pin 20: PF4; bidirectional. */
  "PF4": "20",
  /** Physical pin 21: PF5; bidirectional. */
  "PF5": "21",
  /** Physical pin 22: VSS; passive. */
  "VSS_22": "22",
  /** Physical pin 23: VDD; power_in. */
  "VDD_23": "23",
  /** Physical pin 24: PF6; bidirectional. */
  "PF6": "24",
  /** Physical pin 25: PF7; bidirectional. */
  "PF7": "25",
  /** Physical pin 26: PF8; bidirectional. */
  "PF8": "26",
  /** Physical pin 27: PF9; bidirectional. */
  "PF9": "27",
  /** Physical pin 28: PF10; bidirectional. */
  "PF10": "28",
  /** Physical pin 29: PH0; bidirectional. */
  "PH0": "29",
  /** Physical pin 30: PH1; bidirectional. */
  "PH1": "30",
  /** Physical pin 31: NRST; input. */
  "NRST": "31",
  /** Physical pin 32: PC0; bidirectional. */
  "PC0": "32",
  /** Physical pin 33: PC1; bidirectional. */
  "PC1": "33",
  /** Physical pin 34: PC2; bidirectional. */
  "PC2": "34",
  /** Physical pin 35: PC3; bidirectional. */
  "PC3": "35",
  /** Physical pin 36: VDD; power_in. */
  "VDD_36": "36",
  /** Physical pin 37: VSSA; power_in. */
  "VSSA": "37",
  /** Physical pin 38: VREF+; input. */
  "VREF+": "38",
  /** Physical pin 39: VDDA; power_in. */
  "VDDA": "39",
  /** Physical pin 40: PA0; bidirectional. */
  "PA0": "40",
  /** Physical pin 41: PA1; bidirectional. */
  "PA1": "41",
  /** Physical pin 42: PA2; bidirectional. */
  "PA2": "42",
  /** Physical pin 43: PH2; bidirectional. */
  "PH2": "43",
  /** Physical pin 44: PH3; bidirectional. */
  "PH3": "44",
  /** Physical pin 45: PH4; bidirectional. */
  "PH4": "45",
  /** Physical pin 46: PH5; bidirectional. */
  "PH5": "46",
  /** Physical pin 47: PA3; bidirectional. */
  "PA3": "47",
  /** Physical pin 48: VSS; passive. */
  "VSS_48": "48",
  /** Physical pin 49: VDD; power_in. */
  "VDD_49": "49",
  /** Physical pin 50: PA4; bidirectional. */
  "PA4": "50",
  /** Physical pin 51: PA5; bidirectional. */
  "PA5": "51",
  /** Physical pin 52: PA6; bidirectional. */
  "PA6": "52",
  /** Physical pin 53: PA7; bidirectional. */
  "PA7": "53",
  /** Physical pin 54: PC4; bidirectional. */
  "PC4": "54",
  /** Physical pin 55: PC5; bidirectional. */
  "PC5": "55",
  /** Physical pin 56: PB0; bidirectional. */
  "PB0": "56",
  /** Physical pin 57: PB1; bidirectional. */
  "PB1": "57",
  /** Physical pin 58: PB2; bidirectional. */
  "PB2": "58",
  /** Physical pin 59: PF11; bidirectional. */
  "PF11": "59",
  /** Physical pin 60: PF12; bidirectional. */
  "PF12": "60",
  /** Physical pin 61: VSS; passive. */
  "VSS_61": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: PF13; bidirectional. */
  "PF13": "63",
  /** Physical pin 64: PF14; bidirectional. */
  "PF14": "64",
  /** Physical pin 65: PF15; bidirectional. */
  "PF15": "65",
  /** Physical pin 66: PG0; bidirectional. */
  "PG0": "66",
  /** Physical pin 67: PG1; bidirectional. */
  "PG1": "67",
  /** Physical pin 68: PE7; bidirectional. */
  "PE7": "68",
  /** Physical pin 69: PE8; bidirectional. */
  "PE8": "69",
  /** Physical pin 70: PE9; bidirectional. */
  "PE9": "70",
  /** Physical pin 71: VSS; passive. */
  "VSS_71": "71",
  /** Physical pin 72: VDD; power_in. */
  "VDD_72": "72",
  /** Physical pin 73: PE10; bidirectional. */
  "PE10": "73",
  /** Physical pin 74: PE11; bidirectional. */
  "PE11": "74",
  /** Physical pin 75: PE12; bidirectional. */
  "PE12": "75",
  /** Physical pin 76: PE13; bidirectional. */
  "PE13": "76",
  /** Physical pin 77: PE14; bidirectional. */
  "PE14": "77",
  /** Physical pin 78: PE15; bidirectional. */
  "PE15": "78",
  /** Physical pin 79: PB10; bidirectional. */
  "PB10": "79",
  /** Physical pin 80: PB11; bidirectional. */
  "PB11": "80",
  /** Physical pin 81: VCAP_1; power_out. */
  "VCAP_1": "81",
  /** Physical pin 82: VDD; power_in. */
  "VDD_82": "82",
  /** Physical pin 83: PH6; bidirectional. */
  "PH6": "83",
  /** Physical pin 84: PH7; bidirectional. */
  "PH7": "84",
  /** Physical pin 85: PH8; bidirectional. */
  "PH8": "85",
  /** Physical pin 86: PH9; bidirectional. */
  "PH9": "86",
  /** Physical pin 87: PH10; bidirectional. */
  "PH10": "87",
  /** Physical pin 88: PH11; bidirectional. */
  "PH11": "88",
  /** Physical pin 89: PH12; bidirectional. */
  "PH12": "89",
  /** Physical pin 90: VSS; passive. */
  "VSS_90": "90",
  /** Physical pin 91: VDD; power_in. */
  "VDD_91": "91",
  /** Physical pin 92: PB12; bidirectional. */
  "PB12": "92",
  /** Physical pin 93: PB13; bidirectional. */
  "PB13": "93",
  /** Physical pin 94: PB14; bidirectional. */
  "PB14": "94",
  /** Physical pin 95: PB15; bidirectional. */
  "PB15": "95",
  /** Physical pin 96: PD8; bidirectional. */
  "PD8": "96",
  /** Physical pin 97: PD9; bidirectional. */
  "PD9": "97",
  /** Physical pin 98: PD10; bidirectional. */
  "PD10": "98",
  /** Physical pin 99: PD11; bidirectional. */
  "PD11": "99",
  /** Physical pin 100: PD12; bidirectional. */
  "PD12": "100",
  /** Physical pin 101: PD13; bidirectional. */
  "PD13": "101",
  /** Physical pin 102: VSS; passive. */
  "VSS_102": "102",
  /** Physical pin 103: VDD; power_in. */
  "VDD_103": "103",
  /** Physical pin 104: PD14; bidirectional. */
  "PD14": "104",
  /** Physical pin 105: PD15; bidirectional. */
  "PD15": "105",
  /** Physical pin 106: PG2; bidirectional. */
  "PG2": "106",
  /** Physical pin 107: PG3; bidirectional. */
  "PG3": "107",
  /** Physical pin 108: PG4; bidirectional. */
  "PG4": "108",
  /** Physical pin 109: PG5; bidirectional. */
  "PG5": "109",
  /** Physical pin 110: PG6; bidirectional. */
  "PG6": "110",
  /** Physical pin 111: PG7; bidirectional. */
  "PG7": "111",
  /** Physical pin 112: PG8; bidirectional. */
  "PG8": "112",
  /** Physical pin 113: VSS; passive. */
  "VSS_113": "113",
  /** Physical pin 114: VDD; power_in. */
  "VDD_114": "114",
  /** Physical pin 115: PC6; bidirectional. */
  "PC6": "115",
  /** Physical pin 116: PC7; bidirectional. */
  "PC7": "116",
  /** Physical pin 117: PC8; bidirectional. */
  "PC8": "117",
  /** Physical pin 118: PC9; bidirectional. */
  "PC9": "118",
  /** Physical pin 119: PA8; bidirectional. */
  "PA8": "119",
  /** Physical pin 120: PA9; bidirectional. */
  "PA9": "120",
  /** Physical pin 121: PA10; bidirectional. */
  "PA10": "121",
  /** Physical pin 122: PA11; bidirectional. */
  "PA11": "122",
  /** Physical pin 123: PA12; bidirectional. */
  "PA12": "123",
  /** Physical pin 124: PA13; bidirectional. */
  "PA13": "124",
  /** Physical pin 125: VCAP_2; power_out. */
  "VCAP_2": "125",
  /** Physical pin 126: VSS; passive. */
  "VSS_126": "126",
  /** Physical pin 127: VDD; power_in. */
  "VDD_127": "127",
  /** Physical pin 128: PH13; bidirectional. */
  "PH13": "128",
  /** Physical pin 129: PH14; bidirectional. */
  "PH14": "129",
  /** Physical pin 130: PH15; bidirectional. */
  "PH15": "130",
  /** Physical pin 131: PI0; bidirectional. */
  "PI0": "131",
  /** Physical pin 132: PI1; bidirectional. */
  "PI1": "132",
  /** Physical pin 133: PI2; bidirectional. */
  "PI2": "133",
  /** Physical pin 134: PI3; bidirectional. */
  "PI3": "134",
  /** Physical pin 135: VSS; passive. */
  "VSS_135": "135",
  /** Physical pin 136: VDD; power_in. */
  "VDD_136": "136",
  /** Physical pin 137: PA14; bidirectional. */
  "PA14": "137",
  /** Physical pin 138: PA15; bidirectional. */
  "PA15": "138",
  /** Physical pin 139: PC10; bidirectional. */
  "PC10": "139",
  /** Physical pin 140: PC11; bidirectional. */
  "PC11": "140",
  /** Physical pin 141: PC12; bidirectional. */
  "PC12": "141",
  /** Physical pin 142: PD0; bidirectional. */
  "PD0": "142",
  /** Physical pin 143: PD1; bidirectional. */
  "PD1": "143",
  /** Physical pin 144: PD2; bidirectional. */
  "PD2": "144",
  /** Physical pin 145: PD3; bidirectional. */
  "PD3": "145",
  /** Physical pin 146: PD4; bidirectional. */
  "PD4": "146",
  /** Physical pin 147: PD5; bidirectional. */
  "PD5": "147",
  /** Physical pin 148: VSS; passive. */
  "VSS_148": "148",
  /** Physical pin 149: VDD; power_in. */
  "VDD_149": "149",
  /** Physical pin 150: PD6; bidirectional. */
  "PD6": "150",
  /** Physical pin 151: PD7; bidirectional. */
  "PD7": "151",
  /** Physical pin 152: PG9; bidirectional. */
  "PG9": "152",
  /** Physical pin 153: PG10; bidirectional. */
  "PG10": "153",
  /** Physical pin 154: PG11; bidirectional. */
  "PG11": "154",
  /** Physical pin 155: PG12; bidirectional. */
  "PG12": "155",
  /** Physical pin 156: PG13; bidirectional. */
  "PG13": "156",
  /** Physical pin 157: PG14; bidirectional. */
  "PG14": "157",
  /** Physical pin 158: VSS; passive. */
  "VSS_158": "158",
  /** Physical pin 159: VDD; power_in. */
  "VDD_159": "159",
  /** Physical pin 160: PG15; bidirectional. */
  "PG15": "160",
  /** Physical pin 161: PB3; bidirectional. */
  "PB3": "161",
  /** Physical pin 162: PB4; bidirectional. */
  "PB4": "162",
  /** Physical pin 163: PB5; bidirectional. */
  "PB5": "163",
  /** Physical pin 164: PB6; bidirectional. */
  "PB6": "164",
  /** Physical pin 165: PB7; bidirectional. */
  "PB7": "165",
  /** Physical pin 166: BOOT0; input. */
  "BOOT0": "166",
  /** Physical pin 167: PB8; bidirectional. */
  "PB8": "167",
  /** Physical pin 168: PB9; bidirectional. */
  "PB9": "168",
  /** Physical pin 169: PE0; bidirectional. */
  "PE0": "169",
  /** Physical pin 170: PE1; bidirectional. */
  "PE1": "170",
  /** Physical pin 171: RFU; no_connect. */
  "RFU": "171",
  /** Physical pin 172: VDD; power_in. */
  "VDD_172": "172",
  /** Physical pin 173: PI4; bidirectional. */
  "PI4": "173",
  /** Physical pin 174: PI5; bidirectional. */
  "PI5": "174",
  /** Physical pin 175: PI6; bidirectional. */
  "PI6": "175",
  /** Physical pin 176: PI7; bidirectional. */
  "PI7": "176",
}) {
  override schema = "MCU_ST_STM32F2:STM32F207IETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 768KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 140 GPIO, UFBGA176
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F207IFHx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*10x10mm*Layout15x15*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f207if.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_BGA:UFBGA-201_10x10mm_Layout15x15_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F207IFHx extends Component.withPins({
  /** Physical pin A1: PE3; bidirectional. */
  "PE3": "A1",
  /** Physical pin A2: PE2; bidirectional. */
  "PE2": "A2",
  /** Physical pin A3: PE1; bidirectional. */
  "PE1": "A3",
  /** Physical pin A4: PE0; bidirectional. */
  "PE0": "A4",
  /** Physical pin A5: PB8; bidirectional. */
  "PB8": "A5",
  /** Physical pin A6: PB5; bidirectional. */
  "PB5": "A6",
  /** Physical pin A7: PG14; bidirectional. */
  "PG14": "A7",
  /** Physical pin A8: PG13; bidirectional. */
  "PG13": "A8",
  /** Physical pin A9: PB4; bidirectional. */
  "PB4": "A9",
  /** Physical pin A10: PB3; bidirectional. */
  "PB3": "A10",
  /** Physical pin A11: PD7; bidirectional. */
  "PD7": "A11",
  /** Physical pin A12: PC12; bidirectional. */
  "PC12": "A12",
  /** Physical pin A13: PA15; bidirectional. */
  "PA15": "A13",
  /** Physical pin A14: PA14; bidirectional. */
  "PA14": "A14",
  /** Physical pin A15: PA13; bidirectional. */
  "PA13": "A15",
  /** Physical pin B1: PE4; bidirectional. */
  "PE4": "B1",
  /** Physical pin B2: PE5; bidirectional. */
  "PE5": "B2",
  /** Physical pin B3: PE6; bidirectional. */
  "PE6": "B3",
  /** Physical pin B4: PB9; bidirectional. */
  "PB9": "B4",
  /** Physical pin B5: PB7; bidirectional. */
  "PB7": "B5",
  /** Physical pin B6: PB6; bidirectional. */
  "PB6": "B6",
  /** Physical pin B7: PG15; bidirectional. */
  "PG15": "B7",
  /** Physical pin B8: PG12; bidirectional. */
  "PG12": "B8",
  /** Physical pin B9: PG11; bidirectional. */
  "PG11": "B9",
  /** Physical pin B10: PG10; bidirectional. */
  "PG10": "B10",
  /** Physical pin B11: PD6; bidirectional. */
  "PD6": "B11",
  /** Physical pin B12: PD0; bidirectional. */
  "PD0": "B12",
  /** Physical pin B13: PC11; bidirectional. */
  "PC11": "B13",
  /** Physical pin B14: PC10; bidirectional. */
  "PC10": "B14",
  /** Physical pin B15: PA12; bidirectional. */
  "PA12": "B15",
  /** Physical pin C1: VBAT; power_in. */
  "VBAT": "C1",
  /** Physical pin C2: PI7; bidirectional. */
  "PI7": "C2",
  /** Physical pin C3: PI6; bidirectional. */
  "PI6": "C3",
  /** Physical pin C4: PI5; bidirectional. */
  "PI5": "C4",
  /** Physical pin C5: VDD; power_in. */
  "VDD_C5": "C5",
  /** Physical pin C6: RFU; no_connect. */
  "RFU": "C6",
  /** Physical pin C7: VDD; power_in. */
  "VDD_C7": "C7",
  /** Physical pin C8: VDD; power_in. */
  "VDD_C8": "C8",
  /** Physical pin C9: VDD; power_in. */
  "VDD_C9": "C9",
  /** Physical pin C10: PG9; bidirectional. */
  "PG9": "C10",
  /** Physical pin C11: PD5; bidirectional. */
  "PD5": "C11",
  /** Physical pin C12: PD1; bidirectional. */
  "PD1": "C12",
  /** Physical pin C13: PI3; bidirectional. */
  "PI3": "C13",
  /** Physical pin C14: PI2; bidirectional. */
  "PI2": "C14",
  /** Physical pin C15: PA11; bidirectional. */
  "PA11": "C15",
  /** Physical pin D1: PC13; bidirectional. */
  "PC13": "D1",
  /** Physical pin D2: PI8; bidirectional. */
  "PI8": "D2",
  /** Physical pin D3: PI9; bidirectional. */
  "PI9": "D3",
  /** Physical pin D4: PI4; bidirectional. */
  "PI4": "D4",
  /** Physical pin D5: VSS; power_in. */
  "VSS_D5": "D5",
  /** Physical pin D6: BOOT0; input. */
  "BOOT0": "D6",
  /** Physical pin D7: VSS; passive. */
  "VSS_D7": "D7",
  /** Physical pin D8: VSS; passive. */
  "VSS_D8": "D8",
  /** Physical pin D9: VSS; passive. */
  "VSS_D9": "D9",
  /** Physical pin D10: PD4; bidirectional. */
  "PD4": "D10",
  /** Physical pin D11: PD3; bidirectional. */
  "PD3": "D11",
  /** Physical pin D12: PD2; bidirectional. */
  "PD2": "D12",
  /** Physical pin D13: PH15; bidirectional. */
  "PH15": "D13",
  /** Physical pin D14: PI1; bidirectional. */
  "PI1": "D14",
  /** Physical pin D15: PA10; bidirectional. */
  "PA10": "D15",
  /** Physical pin E1: PC14; bidirectional. */
  "PC14": "E1",
  /** Physical pin E2: PF0; bidirectional. */
  "PF0": "E2",
  /** Physical pin E3: PI10; bidirectional. */
  "PI10": "E3",
  /** Physical pin E4: PI11; bidirectional. */
  "PI11": "E4",
  /** Physical pin E12: PH13; bidirectional. */
  "PH13": "E12",
  /** Physical pin E13: PH14; bidirectional. */
  "PH14": "E13",
  /** Physical pin E14: PI0; bidirectional. */
  "PI0": "E14",
  /** Physical pin E15: PA9; bidirectional. */
  "PA9": "E15",
  /** Physical pin F1: PC15; bidirectional. */
  "PC15": "F1",
  /** Physical pin F2: VSS; passive. */
  "VSS_F2": "F2",
  /** Physical pin F3: VDD; power_in. */
  "VDD_F3": "F3",
  /** Physical pin F4: PH2; bidirectional. */
  "PH2": "F4",
  /** Physical pin F6: VSS; passive. */
  "VSS_F6": "F6",
  /** Physical pin F7: VSS; passive. */
  "VSS_F7": "F7",
  /** Physical pin F8: VSS; passive. */
  "VSS_F8": "F8",
  /** Physical pin F9: VSS; passive. */
  "VSS_F9": "F9",
  /** Physical pin F10: VSS; passive. */
  "VSS_F10": "F10",
  /** Physical pin F12: VSS; passive. */
  "VSS_F12": "F12",
  /** Physical pin F13: VCAP_2; power_out. */
  "VCAP_2": "F13",
  /** Physical pin F14: PC9; bidirectional. */
  "PC9": "F14",
  /** Physical pin F15: PA8; bidirectional. */
  "PA8": "F15",
  /** Physical pin G1: PH0; bidirectional. */
  "PH0": "G1",
  /** Physical pin G2: VSS; passive. */
  "VSS_G2": "G2",
  /** Physical pin G3: VDD; power_in. */
  "VDD_G3": "G3",
  /** Physical pin G4: PH3; bidirectional. */
  "PH3": "G4",
  /** Physical pin G6: VSS; passive. */
  "VSS_G6": "G6",
  /** Physical pin G7: VSS; passive. */
  "VSS_G7": "G7",
  /** Physical pin G8: VSS; passive. */
  "VSS_G8": "G8",
  /** Physical pin G9: VSS; passive. */
  "VSS_G9": "G9",
  /** Physical pin G10: VSS; passive. */
  "VSS_G10": "G10",
  /** Physical pin G12: VSS; passive. */
  "VSS_G12": "G12",
  /** Physical pin G13: VDD; power_in. */
  "VDD_G13": "G13",
  /** Physical pin G14: PC8; bidirectional. */
  "PC8": "G14",
  /** Physical pin G15: PC7; bidirectional. */
  "PC7": "G15",
  /** Physical pin H1: PH1; bidirectional. */
  "PH1": "H1",
  /** Physical pin H2: PF2; bidirectional. */
  "PF2": "H2",
  /** Physical pin H3: PF1; bidirectional. */
  "PF1": "H3",
  /** Physical pin H4: PH4; bidirectional. */
  "PH4": "H4",
  /** Physical pin H6: VSS; passive. */
  "VSS_H6": "H6",
  /** Physical pin H7: VSS; passive. */
  "VSS_H7": "H7",
  /** Physical pin H8: VSS; passive. */
  "VSS_H8": "H8",
  /** Physical pin H9: VSS; passive. */
  "VSS_H9": "H9",
  /** Physical pin H10: VSS; passive. */
  "VSS_H10": "H10",
  /** Physical pin H12: VSS; passive. */
  "VSS_H12": "H12",
  /** Physical pin H13: VDD; power_in. */
  "VDD_H13": "H13",
  /** Physical pin H14: PG8; bidirectional. */
  "PG8": "H14",
  /** Physical pin H15: PC6; bidirectional. */
  "PC6": "H15",
  /** Physical pin J1: NRST; input. */
  "NRST": "J1",
  /** Physical pin J2: PF3; bidirectional. */
  "PF3": "J2",
  /** Physical pin J3: PF4; bidirectional. */
  "PF4": "J3",
  /** Physical pin J4: PH5; bidirectional. */
  "PH5": "J4",
  /** Physical pin J6: VSS; passive. */
  "VSS_J6": "J6",
  /** Physical pin J7: VSS; passive. */
  "VSS_J7": "J7",
  /** Physical pin J8: VSS; passive. */
  "VSS_J8": "J8",
  /** Physical pin J9: VSS; passive. */
  "VSS_J9": "J9",
  /** Physical pin J10: VSS; passive. */
  "VSS_J10": "J10",
  /** Physical pin J12: VDD; power_in. */
  "VDD_J12": "J12",
  /** Physical pin J13: VDD; power_in. */
  "VDD_J13": "J13",
  /** Physical pin J14: PG7; bidirectional. */
  "PG7": "J14",
  /** Physical pin J15: PG6; bidirectional. */
  "PG6": "J15",
  /** Physical pin K1: PF7; bidirectional. */
  "PF7": "K1",
  /** Physical pin K2: PF6; bidirectional. */
  "PF6": "K2",
  /** Physical pin K3: PF5; bidirectional. */
  "PF5": "K3",
  /** Physical pin K4: VDD; power_in. */
  "VDD_K4": "K4",
  /** Physical pin K6: VSS; passive. */
  "VSS_K6": "K6",
  /** Physical pin K7: VSS; passive. */
  "VSS_K7": "K7",
  /** Physical pin K8: VSS; passive. */
  "VSS_K8": "K8",
  /** Physical pin K9: VSS; passive. */
  "VSS_K9": "K9",
  /** Physical pin K10: VSS; passive. */
  "VSS_K10": "K10",
  /** Physical pin K12: PH12; bidirectional. */
  "PH12": "K12",
  /** Physical pin K13: PG5; bidirectional. */
  "PG5": "K13",
  /** Physical pin K14: PG4; bidirectional. */
  "PG4": "K14",
  /** Physical pin K15: PG3; bidirectional. */
  "PG3": "K15",
  /** Physical pin L1: PF10; bidirectional. */
  "PF10": "L1",
  /** Physical pin L2: PF9; bidirectional. */
  "PF9": "L2",
  /** Physical pin L3: PF8; bidirectional. */
  "PF8": "L3",
  /** Physical pin L4: REGOFF; input. */
  "REGOFF": "L4",
  /** Physical pin L12: PH11; bidirectional. */
  "PH11": "L12",
  /** Physical pin L13: PH10; bidirectional. */
  "PH10": "L13",
  /** Physical pin L14: PD15; bidirectional. */
  "PD15": "L14",
  /** Physical pin L15: PG2; bidirectional. */
  "PG2": "L15",
  /** Physical pin M1: VSSA; power_in. */
  "VSSA": "M1",
  /** Physical pin M2: PC0; bidirectional. */
  "PC0": "M2",
  /** Physical pin M3: PC1; bidirectional. */
  "PC1": "M3",
  /** Physical pin M4: PC2; bidirectional. */
  "PC2": "M4",
  /** Physical pin M5: PC3; bidirectional. */
  "PC3": "M5",
  /** Physical pin M6: PB2; bidirectional. */
  "PB2": "M6",
  /** Physical pin M7: PG1; bidirectional. */
  "PG1": "M7",
  /** Physical pin M8: VSS; passive. */
  "VSS_M8": "M8",
  /** Physical pin M9: VSS; passive. */
  "VSS_M9": "M9",
  /** Physical pin M10: VCAP_1; power_out. */
  "VCAP_1": "M10",
  /** Physical pin M11: PH6; bidirectional. */
  "PH6": "M11",
  /** Physical pin M12: PH8; bidirectional. */
  "PH8": "M12",
  /** Physical pin M13: PH9; bidirectional. */
  "PH9": "M13",
  /** Physical pin M14: PD14; bidirectional. */
  "PD14": "M14",
  /** Physical pin M15: PD13; bidirectional. */
  "PD13": "M15",
  /** Physical pin N1: VREF-; input. */
  "VREF-": "N1",
  /** Physical pin N2: PA1; bidirectional. */
  "PA1": "N2",
  /** Physical pin N3: PA0; bidirectional. */
  "PA0": "N3",
  /** Physical pin N4: PA4; bidirectional. */
  "PA4": "N4",
  /** Physical pin N5: PC4; bidirectional. */
  "PC4": "N5",
  /** Physical pin N6: PF13; bidirectional. */
  "PF13": "N6",
  /** Physical pin N7: PG0; bidirectional. */
  "PG0": "N7",
  /** Physical pin N8: VDD; power_in. */
  "VDD_N8": "N8",
  /** Physical pin N9: VDD; power_in. */
  "VDD_N9": "N9",
  /** Physical pin N10: VDD; power_in. */
  "VDD_N10": "N10",
  /** Physical pin N11: PE13; bidirectional. */
  "PE13": "N11",
  /** Physical pin N12: PH7; bidirectional. */
  "PH7": "N12",
  /** Physical pin N13: PD12; bidirectional. */
  "PD12": "N13",
  /** Physical pin N14: PD11; bidirectional. */
  "PD11": "N14",
  /** Physical pin N15: PD10; bidirectional. */
  "PD10": "N15",
  /** Physical pin P1: VREF+; input. */
  "VREF+": "P1",
  /** Physical pin P2: PA2; bidirectional. */
  "PA2": "P2",
  /** Physical pin P3: PA6; bidirectional. */
  "PA6": "P3",
  /** Physical pin P4: PA5; bidirectional. */
  "PA5": "P4",
  /** Physical pin P5: PC5; bidirectional. */
  "PC5": "P5",
  /** Physical pin P6: PF12; bidirectional. */
  "PF12": "P6",
  /** Physical pin P7: PF15; bidirectional. */
  "PF15": "P7",
  /** Physical pin P8: PE8; bidirectional. */
  "PE8": "P8",
  /** Physical pin P9: PE9; bidirectional. */
  "PE9": "P9",
  /** Physical pin P10: PE11; bidirectional. */
  "PE11": "P10",
  /** Physical pin P11: PE14; bidirectional. */
  "PE14": "P11",
  /** Physical pin P12: PB12; bidirectional. */
  "PB12": "P12",
  /** Physical pin P13: PB13; bidirectional. */
  "PB13": "P13",
  /** Physical pin P14: PD9; bidirectional. */
  "PD9": "P14",
  /** Physical pin P15: PD8; bidirectional. */
  "PD8": "P15",
  /** Physical pin R1: VDDA; power_in. */
  "VDDA": "R1",
  /** Physical pin R2: PA3; bidirectional. */
  "PA3": "R2",
  /** Physical pin R3: PA7; bidirectional. */
  "PA7": "R3",
  /** Physical pin R4: PB1; bidirectional. */
  "PB1": "R4",
  /** Physical pin R5: PB0; bidirectional. */
  "PB0": "R5",
  /** Physical pin R6: PF11; bidirectional. */
  "PF11": "R6",
  /** Physical pin R7: PF14; bidirectional. */
  "PF14": "R7",
  /** Physical pin R8: PE7; bidirectional. */
  "PE7": "R8",
  /** Physical pin R9: PE10; bidirectional. */
  "PE10": "R9",
  /** Physical pin R10: PE12; bidirectional. */
  "PE12": "R10",
  /** Physical pin R11: PE15; bidirectional. */
  "PE15": "R11",
  /** Physical pin R12: PB10; bidirectional. */
  "PB10": "R12",
  /** Physical pin R13: PB11; bidirectional. */
  "PB11": "R13",
  /** Physical pin R14: PB14; bidirectional. */
  "PB14": "R14",
  /** Physical pin R15: PB15; bidirectional. */
  "PB15": "R15",
}) {
  override schema = "MCU_ST_STM32F2:STM32F207IFHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 768KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 140 GPIO, LQFP176
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F207IFTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*24x24mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f207if.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_QFP:LQFP-176_24x24mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F207IFTx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PI8; bidirectional. */
  "PI8": "7",
  /** Physical pin 8: PC13; bidirectional. */
  "PC13": "8",
  /** Physical pin 9: PC14; bidirectional. */
  "PC14": "9",
  /** Physical pin 10: PC15; bidirectional. */
  "PC15": "10",
  /** Physical pin 11: PI9; bidirectional. */
  "PI9": "11",
  /** Physical pin 12: PI10; bidirectional. */
  "PI10": "12",
  /** Physical pin 13: PI11; bidirectional. */
  "PI11": "13",
  /** Physical pin 14: VSS; power_in. */
  "VSS_14": "14",
  /** Physical pin 15: VDD; power_in. */
  "VDD_15": "15",
  /** Physical pin 16: PF0; bidirectional. */
  "PF0": "16",
  /** Physical pin 17: PF1; bidirectional. */
  "PF1": "17",
  /** Physical pin 18: PF2; bidirectional. */
  "PF2": "18",
  /** Physical pin 19: PF3; bidirectional. */
  "PF3": "19",
  /** Physical pin 20: PF4; bidirectional. */
  "PF4": "20",
  /** Physical pin 21: PF5; bidirectional. */
  "PF5": "21",
  /** Physical pin 22: VSS; passive. */
  "VSS_22": "22",
  /** Physical pin 23: VDD; power_in. */
  "VDD_23": "23",
  /** Physical pin 24: PF6; bidirectional. */
  "PF6": "24",
  /** Physical pin 25: PF7; bidirectional. */
  "PF7": "25",
  /** Physical pin 26: PF8; bidirectional. */
  "PF8": "26",
  /** Physical pin 27: PF9; bidirectional. */
  "PF9": "27",
  /** Physical pin 28: PF10; bidirectional. */
  "PF10": "28",
  /** Physical pin 29: PH0; bidirectional. */
  "PH0": "29",
  /** Physical pin 30: PH1; bidirectional. */
  "PH1": "30",
  /** Physical pin 31: NRST; input. */
  "NRST": "31",
  /** Physical pin 32: PC0; bidirectional. */
  "PC0": "32",
  /** Physical pin 33: PC1; bidirectional. */
  "PC1": "33",
  /** Physical pin 34: PC2; bidirectional. */
  "PC2": "34",
  /** Physical pin 35: PC3; bidirectional. */
  "PC3": "35",
  /** Physical pin 36: VDD; power_in. */
  "VDD_36": "36",
  /** Physical pin 37: VSSA; power_in. */
  "VSSA": "37",
  /** Physical pin 38: VREF+; input. */
  "VREF+": "38",
  /** Physical pin 39: VDDA; power_in. */
  "VDDA": "39",
  /** Physical pin 40: PA0; bidirectional. */
  "PA0": "40",
  /** Physical pin 41: PA1; bidirectional. */
  "PA1": "41",
  /** Physical pin 42: PA2; bidirectional. */
  "PA2": "42",
  /** Physical pin 43: PH2; bidirectional. */
  "PH2": "43",
  /** Physical pin 44: PH3; bidirectional. */
  "PH3": "44",
  /** Physical pin 45: PH4; bidirectional. */
  "PH4": "45",
  /** Physical pin 46: PH5; bidirectional. */
  "PH5": "46",
  /** Physical pin 47: PA3; bidirectional. */
  "PA3": "47",
  /** Physical pin 48: VSS; passive. */
  "VSS_48": "48",
  /** Physical pin 49: VDD; power_in. */
  "VDD_49": "49",
  /** Physical pin 50: PA4; bidirectional. */
  "PA4": "50",
  /** Physical pin 51: PA5; bidirectional. */
  "PA5": "51",
  /** Physical pin 52: PA6; bidirectional. */
  "PA6": "52",
  /** Physical pin 53: PA7; bidirectional. */
  "PA7": "53",
  /** Physical pin 54: PC4; bidirectional. */
  "PC4": "54",
  /** Physical pin 55: PC5; bidirectional. */
  "PC5": "55",
  /** Physical pin 56: PB0; bidirectional. */
  "PB0": "56",
  /** Physical pin 57: PB1; bidirectional. */
  "PB1": "57",
  /** Physical pin 58: PB2; bidirectional. */
  "PB2": "58",
  /** Physical pin 59: PF11; bidirectional. */
  "PF11": "59",
  /** Physical pin 60: PF12; bidirectional. */
  "PF12": "60",
  /** Physical pin 61: VSS; passive. */
  "VSS_61": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: PF13; bidirectional. */
  "PF13": "63",
  /** Physical pin 64: PF14; bidirectional. */
  "PF14": "64",
  /** Physical pin 65: PF15; bidirectional. */
  "PF15": "65",
  /** Physical pin 66: PG0; bidirectional. */
  "PG0": "66",
  /** Physical pin 67: PG1; bidirectional. */
  "PG1": "67",
  /** Physical pin 68: PE7; bidirectional. */
  "PE7": "68",
  /** Physical pin 69: PE8; bidirectional. */
  "PE8": "69",
  /** Physical pin 70: PE9; bidirectional. */
  "PE9": "70",
  /** Physical pin 71: VSS; passive. */
  "VSS_71": "71",
  /** Physical pin 72: VDD; power_in. */
  "VDD_72": "72",
  /** Physical pin 73: PE10; bidirectional. */
  "PE10": "73",
  /** Physical pin 74: PE11; bidirectional. */
  "PE11": "74",
  /** Physical pin 75: PE12; bidirectional. */
  "PE12": "75",
  /** Physical pin 76: PE13; bidirectional. */
  "PE13": "76",
  /** Physical pin 77: PE14; bidirectional. */
  "PE14": "77",
  /** Physical pin 78: PE15; bidirectional. */
  "PE15": "78",
  /** Physical pin 79: PB10; bidirectional. */
  "PB10": "79",
  /** Physical pin 80: PB11; bidirectional. */
  "PB11": "80",
  /** Physical pin 81: VCAP_1; power_out. */
  "VCAP_1": "81",
  /** Physical pin 82: VDD; power_in. */
  "VDD_82": "82",
  /** Physical pin 83: PH6; bidirectional. */
  "PH6": "83",
  /** Physical pin 84: PH7; bidirectional. */
  "PH7": "84",
  /** Physical pin 85: PH8; bidirectional. */
  "PH8": "85",
  /** Physical pin 86: PH9; bidirectional. */
  "PH9": "86",
  /** Physical pin 87: PH10; bidirectional. */
  "PH10": "87",
  /** Physical pin 88: PH11; bidirectional. */
  "PH11": "88",
  /** Physical pin 89: PH12; bidirectional. */
  "PH12": "89",
  /** Physical pin 90: VSS; passive. */
  "VSS_90": "90",
  /** Physical pin 91: VDD; power_in. */
  "VDD_91": "91",
  /** Physical pin 92: PB12; bidirectional. */
  "PB12": "92",
  /** Physical pin 93: PB13; bidirectional. */
  "PB13": "93",
  /** Physical pin 94: PB14; bidirectional. */
  "PB14": "94",
  /** Physical pin 95: PB15; bidirectional. */
  "PB15": "95",
  /** Physical pin 96: PD8; bidirectional. */
  "PD8": "96",
  /** Physical pin 97: PD9; bidirectional. */
  "PD9": "97",
  /** Physical pin 98: PD10; bidirectional. */
  "PD10": "98",
  /** Physical pin 99: PD11; bidirectional. */
  "PD11": "99",
  /** Physical pin 100: PD12; bidirectional. */
  "PD12": "100",
  /** Physical pin 101: PD13; bidirectional. */
  "PD13": "101",
  /** Physical pin 102: VSS; passive. */
  "VSS_102": "102",
  /** Physical pin 103: VDD; power_in. */
  "VDD_103": "103",
  /** Physical pin 104: PD14; bidirectional. */
  "PD14": "104",
  /** Physical pin 105: PD15; bidirectional. */
  "PD15": "105",
  /** Physical pin 106: PG2; bidirectional. */
  "PG2": "106",
  /** Physical pin 107: PG3; bidirectional. */
  "PG3": "107",
  /** Physical pin 108: PG4; bidirectional. */
  "PG4": "108",
  /** Physical pin 109: PG5; bidirectional. */
  "PG5": "109",
  /** Physical pin 110: PG6; bidirectional. */
  "PG6": "110",
  /** Physical pin 111: PG7; bidirectional. */
  "PG7": "111",
  /** Physical pin 112: PG8; bidirectional. */
  "PG8": "112",
  /** Physical pin 113: VSS; passive. */
  "VSS_113": "113",
  /** Physical pin 114: VDD; power_in. */
  "VDD_114": "114",
  /** Physical pin 115: PC6; bidirectional. */
  "PC6": "115",
  /** Physical pin 116: PC7; bidirectional. */
  "PC7": "116",
  /** Physical pin 117: PC8; bidirectional. */
  "PC8": "117",
  /** Physical pin 118: PC9; bidirectional. */
  "PC9": "118",
  /** Physical pin 119: PA8; bidirectional. */
  "PA8": "119",
  /** Physical pin 120: PA9; bidirectional. */
  "PA9": "120",
  /** Physical pin 121: PA10; bidirectional. */
  "PA10": "121",
  /** Physical pin 122: PA11; bidirectional. */
  "PA11": "122",
  /** Physical pin 123: PA12; bidirectional. */
  "PA12": "123",
  /** Physical pin 124: PA13; bidirectional. */
  "PA13": "124",
  /** Physical pin 125: VCAP_2; power_out. */
  "VCAP_2": "125",
  /** Physical pin 126: VSS; passive. */
  "VSS_126": "126",
  /** Physical pin 127: VDD; power_in. */
  "VDD_127": "127",
  /** Physical pin 128: PH13; bidirectional. */
  "PH13": "128",
  /** Physical pin 129: PH14; bidirectional. */
  "PH14": "129",
  /** Physical pin 130: PH15; bidirectional. */
  "PH15": "130",
  /** Physical pin 131: PI0; bidirectional. */
  "PI0": "131",
  /** Physical pin 132: PI1; bidirectional. */
  "PI1": "132",
  /** Physical pin 133: PI2; bidirectional. */
  "PI2": "133",
  /** Physical pin 134: PI3; bidirectional. */
  "PI3": "134",
  /** Physical pin 135: VSS; passive. */
  "VSS_135": "135",
  /** Physical pin 136: VDD; power_in. */
  "VDD_136": "136",
  /** Physical pin 137: PA14; bidirectional. */
  "PA14": "137",
  /** Physical pin 138: PA15; bidirectional. */
  "PA15": "138",
  /** Physical pin 139: PC10; bidirectional. */
  "PC10": "139",
  /** Physical pin 140: PC11; bidirectional. */
  "PC11": "140",
  /** Physical pin 141: PC12; bidirectional. */
  "PC12": "141",
  /** Physical pin 142: PD0; bidirectional. */
  "PD0": "142",
  /** Physical pin 143: PD1; bidirectional. */
  "PD1": "143",
  /** Physical pin 144: PD2; bidirectional. */
  "PD2": "144",
  /** Physical pin 145: PD3; bidirectional. */
  "PD3": "145",
  /** Physical pin 146: PD4; bidirectional. */
  "PD4": "146",
  /** Physical pin 147: PD5; bidirectional. */
  "PD5": "147",
  /** Physical pin 148: VSS; passive. */
  "VSS_148": "148",
  /** Physical pin 149: VDD; power_in. */
  "VDD_149": "149",
  /** Physical pin 150: PD6; bidirectional. */
  "PD6": "150",
  /** Physical pin 151: PD7; bidirectional. */
  "PD7": "151",
  /** Physical pin 152: PG9; bidirectional. */
  "PG9": "152",
  /** Physical pin 153: PG10; bidirectional. */
  "PG10": "153",
  /** Physical pin 154: PG11; bidirectional. */
  "PG11": "154",
  /** Physical pin 155: PG12; bidirectional. */
  "PG12": "155",
  /** Physical pin 156: PG13; bidirectional. */
  "PG13": "156",
  /** Physical pin 157: PG14; bidirectional. */
  "PG14": "157",
  /** Physical pin 158: VSS; passive. */
  "VSS_158": "158",
  /** Physical pin 159: VDD; power_in. */
  "VDD_159": "159",
  /** Physical pin 160: PG15; bidirectional. */
  "PG15": "160",
  /** Physical pin 161: PB3; bidirectional. */
  "PB3": "161",
  /** Physical pin 162: PB4; bidirectional. */
  "PB4": "162",
  /** Physical pin 163: PB5; bidirectional. */
  "PB5": "163",
  /** Physical pin 164: PB6; bidirectional. */
  "PB6": "164",
  /** Physical pin 165: PB7; bidirectional. */
  "PB7": "165",
  /** Physical pin 166: BOOT0; input. */
  "BOOT0": "166",
  /** Physical pin 167: PB8; bidirectional. */
  "PB8": "167",
  /** Physical pin 168: PB9; bidirectional. */
  "PB9": "168",
  /** Physical pin 169: PE0; bidirectional. */
  "PE0": "169",
  /** Physical pin 170: PE1; bidirectional. */
  "PE1": "170",
  /** Physical pin 171: RFU; no_connect. */
  "RFU": "171",
  /** Physical pin 172: VDD; power_in. */
  "VDD_172": "172",
  /** Physical pin 173: PI4; bidirectional. */
  "PI4": "173",
  /** Physical pin 174: PI5; bidirectional. */
  "PI5": "174",
  /** Physical pin 175: PI6; bidirectional. */
  "PI6": "175",
  /** Physical pin 176: PI7; bidirectional. */
  "PI7": "176",
}) {
  override schema = "MCU_ST_STM32F2:STM32F207IFTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 140 GPIO, UFBGA176
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F207IGHx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*10x10mm*Layout15x15*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f207ig.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_BGA:UFBGA-201_10x10mm_Layout15x15_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F207IGHx extends Component.withPins({
  /** Physical pin A1: PE3; bidirectional. */
  "PE3": "A1",
  /** Physical pin A2: PE2; bidirectional. */
  "PE2": "A2",
  /** Physical pin A3: PE1; bidirectional. */
  "PE1": "A3",
  /** Physical pin A4: PE0; bidirectional. */
  "PE0": "A4",
  /** Physical pin A5: PB8; bidirectional. */
  "PB8": "A5",
  /** Physical pin A6: PB5; bidirectional. */
  "PB5": "A6",
  /** Physical pin A7: PG14; bidirectional. */
  "PG14": "A7",
  /** Physical pin A8: PG13; bidirectional. */
  "PG13": "A8",
  /** Physical pin A9: PB4; bidirectional. */
  "PB4": "A9",
  /** Physical pin A10: PB3; bidirectional. */
  "PB3": "A10",
  /** Physical pin A11: PD7; bidirectional. */
  "PD7": "A11",
  /** Physical pin A12: PC12; bidirectional. */
  "PC12": "A12",
  /** Physical pin A13: PA15; bidirectional. */
  "PA15": "A13",
  /** Physical pin A14: PA14; bidirectional. */
  "PA14": "A14",
  /** Physical pin A15: PA13; bidirectional. */
  "PA13": "A15",
  /** Physical pin B1: PE4; bidirectional. */
  "PE4": "B1",
  /** Physical pin B2: PE5; bidirectional. */
  "PE5": "B2",
  /** Physical pin B3: PE6; bidirectional. */
  "PE6": "B3",
  /** Physical pin B4: PB9; bidirectional. */
  "PB9": "B4",
  /** Physical pin B5: PB7; bidirectional. */
  "PB7": "B5",
  /** Physical pin B6: PB6; bidirectional. */
  "PB6": "B6",
  /** Physical pin B7: PG15; bidirectional. */
  "PG15": "B7",
  /** Physical pin B8: PG12; bidirectional. */
  "PG12": "B8",
  /** Physical pin B9: PG11; bidirectional. */
  "PG11": "B9",
  /** Physical pin B10: PG10; bidirectional. */
  "PG10": "B10",
  /** Physical pin B11: PD6; bidirectional. */
  "PD6": "B11",
  /** Physical pin B12: PD0; bidirectional. */
  "PD0": "B12",
  /** Physical pin B13: PC11; bidirectional. */
  "PC11": "B13",
  /** Physical pin B14: PC10; bidirectional. */
  "PC10": "B14",
  /** Physical pin B15: PA12; bidirectional. */
  "PA12": "B15",
  /** Physical pin C1: VBAT; power_in. */
  "VBAT": "C1",
  /** Physical pin C2: PI7; bidirectional. */
  "PI7": "C2",
  /** Physical pin C3: PI6; bidirectional. */
  "PI6": "C3",
  /** Physical pin C4: PI5; bidirectional. */
  "PI5": "C4",
  /** Physical pin C5: VDD; power_in. */
  "VDD_C5": "C5",
  /** Physical pin C6: RFU; no_connect. */
  "RFU": "C6",
  /** Physical pin C7: VDD; power_in. */
  "VDD_C7": "C7",
  /** Physical pin C8: VDD; power_in. */
  "VDD_C8": "C8",
  /** Physical pin C9: VDD; power_in. */
  "VDD_C9": "C9",
  /** Physical pin C10: PG9; bidirectional. */
  "PG9": "C10",
  /** Physical pin C11: PD5; bidirectional. */
  "PD5": "C11",
  /** Physical pin C12: PD1; bidirectional. */
  "PD1": "C12",
  /** Physical pin C13: PI3; bidirectional. */
  "PI3": "C13",
  /** Physical pin C14: PI2; bidirectional. */
  "PI2": "C14",
  /** Physical pin C15: PA11; bidirectional. */
  "PA11": "C15",
  /** Physical pin D1: PC13; bidirectional. */
  "PC13": "D1",
  /** Physical pin D2: PI8; bidirectional. */
  "PI8": "D2",
  /** Physical pin D3: PI9; bidirectional. */
  "PI9": "D3",
  /** Physical pin D4: PI4; bidirectional. */
  "PI4": "D4",
  /** Physical pin D5: VSS; power_in. */
  "VSS_D5": "D5",
  /** Physical pin D6: BOOT0; input. */
  "BOOT0": "D6",
  /** Physical pin D7: VSS; passive. */
  "VSS_D7": "D7",
  /** Physical pin D8: VSS; passive. */
  "VSS_D8": "D8",
  /** Physical pin D9: VSS; passive. */
  "VSS_D9": "D9",
  /** Physical pin D10: PD4; bidirectional. */
  "PD4": "D10",
  /** Physical pin D11: PD3; bidirectional. */
  "PD3": "D11",
  /** Physical pin D12: PD2; bidirectional. */
  "PD2": "D12",
  /** Physical pin D13: PH15; bidirectional. */
  "PH15": "D13",
  /** Physical pin D14: PI1; bidirectional. */
  "PI1": "D14",
  /** Physical pin D15: PA10; bidirectional. */
  "PA10": "D15",
  /** Physical pin E1: PC14; bidirectional. */
  "PC14": "E1",
  /** Physical pin E2: PF0; bidirectional. */
  "PF0": "E2",
  /** Physical pin E3: PI10; bidirectional. */
  "PI10": "E3",
  /** Physical pin E4: PI11; bidirectional. */
  "PI11": "E4",
  /** Physical pin E12: PH13; bidirectional. */
  "PH13": "E12",
  /** Physical pin E13: PH14; bidirectional. */
  "PH14": "E13",
  /** Physical pin E14: PI0; bidirectional. */
  "PI0": "E14",
  /** Physical pin E15: PA9; bidirectional. */
  "PA9": "E15",
  /** Physical pin F1: PC15; bidirectional. */
  "PC15": "F1",
  /** Physical pin F2: VSS; passive. */
  "VSS_F2": "F2",
  /** Physical pin F3: VDD; power_in. */
  "VDD_F3": "F3",
  /** Physical pin F4: PH2; bidirectional. */
  "PH2": "F4",
  /** Physical pin F6: VSS; passive. */
  "VSS_F6": "F6",
  /** Physical pin F7: VSS; passive. */
  "VSS_F7": "F7",
  /** Physical pin F8: VSS; passive. */
  "VSS_F8": "F8",
  /** Physical pin F9: VSS; passive. */
  "VSS_F9": "F9",
  /** Physical pin F10: VSS; passive. */
  "VSS_F10": "F10",
  /** Physical pin F12: VSS; passive. */
  "VSS_F12": "F12",
  /** Physical pin F13: VCAP_2; power_out. */
  "VCAP_2": "F13",
  /** Physical pin F14: PC9; bidirectional. */
  "PC9": "F14",
  /** Physical pin F15: PA8; bidirectional. */
  "PA8": "F15",
  /** Physical pin G1: PH0; bidirectional. */
  "PH0": "G1",
  /** Physical pin G2: VSS; passive. */
  "VSS_G2": "G2",
  /** Physical pin G3: VDD; power_in. */
  "VDD_G3": "G3",
  /** Physical pin G4: PH3; bidirectional. */
  "PH3": "G4",
  /** Physical pin G6: VSS; passive. */
  "VSS_G6": "G6",
  /** Physical pin G7: VSS; passive. */
  "VSS_G7": "G7",
  /** Physical pin G8: VSS; passive. */
  "VSS_G8": "G8",
  /** Physical pin G9: VSS; passive. */
  "VSS_G9": "G9",
  /** Physical pin G10: VSS; passive. */
  "VSS_G10": "G10",
  /** Physical pin G12: VSS; passive. */
  "VSS_G12": "G12",
  /** Physical pin G13: VDD; power_in. */
  "VDD_G13": "G13",
  /** Physical pin G14: PC8; bidirectional. */
  "PC8": "G14",
  /** Physical pin G15: PC7; bidirectional. */
  "PC7": "G15",
  /** Physical pin H1: PH1; bidirectional. */
  "PH1": "H1",
  /** Physical pin H2: PF2; bidirectional. */
  "PF2": "H2",
  /** Physical pin H3: PF1; bidirectional. */
  "PF1": "H3",
  /** Physical pin H4: PH4; bidirectional. */
  "PH4": "H4",
  /** Physical pin H6: VSS; passive. */
  "VSS_H6": "H6",
  /** Physical pin H7: VSS; passive. */
  "VSS_H7": "H7",
  /** Physical pin H8: VSS; passive. */
  "VSS_H8": "H8",
  /** Physical pin H9: VSS; passive. */
  "VSS_H9": "H9",
  /** Physical pin H10: VSS; passive. */
  "VSS_H10": "H10",
  /** Physical pin H12: VSS; passive. */
  "VSS_H12": "H12",
  /** Physical pin H13: VDD; power_in. */
  "VDD_H13": "H13",
  /** Physical pin H14: PG8; bidirectional. */
  "PG8": "H14",
  /** Physical pin H15: PC6; bidirectional. */
  "PC6": "H15",
  /** Physical pin J1: NRST; input. */
  "NRST": "J1",
  /** Physical pin J2: PF3; bidirectional. */
  "PF3": "J2",
  /** Physical pin J3: PF4; bidirectional. */
  "PF4": "J3",
  /** Physical pin J4: PH5; bidirectional. */
  "PH5": "J4",
  /** Physical pin J6: VSS; passive. */
  "VSS_J6": "J6",
  /** Physical pin J7: VSS; passive. */
  "VSS_J7": "J7",
  /** Physical pin J8: VSS; passive. */
  "VSS_J8": "J8",
  /** Physical pin J9: VSS; passive. */
  "VSS_J9": "J9",
  /** Physical pin J10: VSS; passive. */
  "VSS_J10": "J10",
  /** Physical pin J12: VDD; power_in. */
  "VDD_J12": "J12",
  /** Physical pin J13: VDD; power_in. */
  "VDD_J13": "J13",
  /** Physical pin J14: PG7; bidirectional. */
  "PG7": "J14",
  /** Physical pin J15: PG6; bidirectional. */
  "PG6": "J15",
  /** Physical pin K1: PF7; bidirectional. */
  "PF7": "K1",
  /** Physical pin K2: PF6; bidirectional. */
  "PF6": "K2",
  /** Physical pin K3: PF5; bidirectional. */
  "PF5": "K3",
  /** Physical pin K4: VDD; power_in. */
  "VDD_K4": "K4",
  /** Physical pin K6: VSS; passive. */
  "VSS_K6": "K6",
  /** Physical pin K7: VSS; passive. */
  "VSS_K7": "K7",
  /** Physical pin K8: VSS; passive. */
  "VSS_K8": "K8",
  /** Physical pin K9: VSS; passive. */
  "VSS_K9": "K9",
  /** Physical pin K10: VSS; passive. */
  "VSS_K10": "K10",
  /** Physical pin K12: PH12; bidirectional. */
  "PH12": "K12",
  /** Physical pin K13: PG5; bidirectional. */
  "PG5": "K13",
  /** Physical pin K14: PG4; bidirectional. */
  "PG4": "K14",
  /** Physical pin K15: PG3; bidirectional. */
  "PG3": "K15",
  /** Physical pin L1: PF10; bidirectional. */
  "PF10": "L1",
  /** Physical pin L2: PF9; bidirectional. */
  "PF9": "L2",
  /** Physical pin L3: PF8; bidirectional. */
  "PF8": "L3",
  /** Physical pin L4: REGOFF; input. */
  "REGOFF": "L4",
  /** Physical pin L12: PH11; bidirectional. */
  "PH11": "L12",
  /** Physical pin L13: PH10; bidirectional. */
  "PH10": "L13",
  /** Physical pin L14: PD15; bidirectional. */
  "PD15": "L14",
  /** Physical pin L15: PG2; bidirectional. */
  "PG2": "L15",
  /** Physical pin M1: VSSA; power_in. */
  "VSSA": "M1",
  /** Physical pin M2: PC0; bidirectional. */
  "PC0": "M2",
  /** Physical pin M3: PC1; bidirectional. */
  "PC1": "M3",
  /** Physical pin M4: PC2; bidirectional. */
  "PC2": "M4",
  /** Physical pin M5: PC3; bidirectional. */
  "PC3": "M5",
  /** Physical pin M6: PB2; bidirectional. */
  "PB2": "M6",
  /** Physical pin M7: PG1; bidirectional. */
  "PG1": "M7",
  /** Physical pin M8: VSS; passive. */
  "VSS_M8": "M8",
  /** Physical pin M9: VSS; passive. */
  "VSS_M9": "M9",
  /** Physical pin M10: VCAP_1; power_out. */
  "VCAP_1": "M10",
  /** Physical pin M11: PH6; bidirectional. */
  "PH6": "M11",
  /** Physical pin M12: PH8; bidirectional. */
  "PH8": "M12",
  /** Physical pin M13: PH9; bidirectional. */
  "PH9": "M13",
  /** Physical pin M14: PD14; bidirectional. */
  "PD14": "M14",
  /** Physical pin M15: PD13; bidirectional. */
  "PD13": "M15",
  /** Physical pin N1: VREF-; input. */
  "VREF-": "N1",
  /** Physical pin N2: PA1; bidirectional. */
  "PA1": "N2",
  /** Physical pin N3: PA0; bidirectional. */
  "PA0": "N3",
  /** Physical pin N4: PA4; bidirectional. */
  "PA4": "N4",
  /** Physical pin N5: PC4; bidirectional. */
  "PC4": "N5",
  /** Physical pin N6: PF13; bidirectional. */
  "PF13": "N6",
  /** Physical pin N7: PG0; bidirectional. */
  "PG0": "N7",
  /** Physical pin N8: VDD; power_in. */
  "VDD_N8": "N8",
  /** Physical pin N9: VDD; power_in. */
  "VDD_N9": "N9",
  /** Physical pin N10: VDD; power_in. */
  "VDD_N10": "N10",
  /** Physical pin N11: PE13; bidirectional. */
  "PE13": "N11",
  /** Physical pin N12: PH7; bidirectional. */
  "PH7": "N12",
  /** Physical pin N13: PD12; bidirectional. */
  "PD12": "N13",
  /** Physical pin N14: PD11; bidirectional. */
  "PD11": "N14",
  /** Physical pin N15: PD10; bidirectional. */
  "PD10": "N15",
  /** Physical pin P1: VREF+; input. */
  "VREF+": "P1",
  /** Physical pin P2: PA2; bidirectional. */
  "PA2": "P2",
  /** Physical pin P3: PA6; bidirectional. */
  "PA6": "P3",
  /** Physical pin P4: PA5; bidirectional. */
  "PA5": "P4",
  /** Physical pin P5: PC5; bidirectional. */
  "PC5": "P5",
  /** Physical pin P6: PF12; bidirectional. */
  "PF12": "P6",
  /** Physical pin P7: PF15; bidirectional. */
  "PF15": "P7",
  /** Physical pin P8: PE8; bidirectional. */
  "PE8": "P8",
  /** Physical pin P9: PE9; bidirectional. */
  "PE9": "P9",
  /** Physical pin P10: PE11; bidirectional. */
  "PE11": "P10",
  /** Physical pin P11: PE14; bidirectional. */
  "PE14": "P11",
  /** Physical pin P12: PB12; bidirectional. */
  "PB12": "P12",
  /** Physical pin P13: PB13; bidirectional. */
  "PB13": "P13",
  /** Physical pin P14: PD9; bidirectional. */
  "PD9": "P14",
  /** Physical pin P15: PD8; bidirectional. */
  "PD8": "P15",
  /** Physical pin R1: VDDA; power_in. */
  "VDDA": "R1",
  /** Physical pin R2: PA3; bidirectional. */
  "PA3": "R2",
  /** Physical pin R3: PA7; bidirectional. */
  "PA7": "R3",
  /** Physical pin R4: PB1; bidirectional. */
  "PB1": "R4",
  /** Physical pin R5: PB0; bidirectional. */
  "PB0": "R5",
  /** Physical pin R6: PF11; bidirectional. */
  "PF11": "R6",
  /** Physical pin R7: PF14; bidirectional. */
  "PF14": "R7",
  /** Physical pin R8: PE7; bidirectional. */
  "PE7": "R8",
  /** Physical pin R9: PE10; bidirectional. */
  "PE10": "R9",
  /** Physical pin R10: PE12; bidirectional. */
  "PE12": "R10",
  /** Physical pin R11: PE15; bidirectional. */
  "PE15": "R11",
  /** Physical pin R12: PB10; bidirectional. */
  "PB10": "R12",
  /** Physical pin R13: PB11; bidirectional. */
  "PB11": "R13",
  /** Physical pin R14: PB14; bidirectional. */
  "PB14": "R14",
  /** Physical pin R15: PB15; bidirectional. */
  "PB15": "R15",
}) {
  override schema = "MCU_ST_STM32F2:STM32F207IGHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 140 GPIO, LQFP176
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F207IGTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*24x24mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f207ig.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_QFP:LQFP-176_24x24mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F207IGTx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PI8; bidirectional. */
  "PI8": "7",
  /** Physical pin 8: PC13; bidirectional. */
  "PC13": "8",
  /** Physical pin 9: PC14; bidirectional. */
  "PC14": "9",
  /** Physical pin 10: PC15; bidirectional. */
  "PC15": "10",
  /** Physical pin 11: PI9; bidirectional. */
  "PI9": "11",
  /** Physical pin 12: PI10; bidirectional. */
  "PI10": "12",
  /** Physical pin 13: PI11; bidirectional. */
  "PI11": "13",
  /** Physical pin 14: VSS; power_in. */
  "VSS_14": "14",
  /** Physical pin 15: VDD; power_in. */
  "VDD_15": "15",
  /** Physical pin 16: PF0; bidirectional. */
  "PF0": "16",
  /** Physical pin 17: PF1; bidirectional. */
  "PF1": "17",
  /** Physical pin 18: PF2; bidirectional. */
  "PF2": "18",
  /** Physical pin 19: PF3; bidirectional. */
  "PF3": "19",
  /** Physical pin 20: PF4; bidirectional. */
  "PF4": "20",
  /** Physical pin 21: PF5; bidirectional. */
  "PF5": "21",
  /** Physical pin 22: VSS; passive. */
  "VSS_22": "22",
  /** Physical pin 23: VDD; power_in. */
  "VDD_23": "23",
  /** Physical pin 24: PF6; bidirectional. */
  "PF6": "24",
  /** Physical pin 25: PF7; bidirectional. */
  "PF7": "25",
  /** Physical pin 26: PF8; bidirectional. */
  "PF8": "26",
  /** Physical pin 27: PF9; bidirectional. */
  "PF9": "27",
  /** Physical pin 28: PF10; bidirectional. */
  "PF10": "28",
  /** Physical pin 29: PH0; bidirectional. */
  "PH0": "29",
  /** Physical pin 30: PH1; bidirectional. */
  "PH1": "30",
  /** Physical pin 31: NRST; input. */
  "NRST": "31",
  /** Physical pin 32: PC0; bidirectional. */
  "PC0": "32",
  /** Physical pin 33: PC1; bidirectional. */
  "PC1": "33",
  /** Physical pin 34: PC2; bidirectional. */
  "PC2": "34",
  /** Physical pin 35: PC3; bidirectional. */
  "PC3": "35",
  /** Physical pin 36: VDD; power_in. */
  "VDD_36": "36",
  /** Physical pin 37: VSSA; power_in. */
  "VSSA": "37",
  /** Physical pin 38: VREF+; input. */
  "VREF+": "38",
  /** Physical pin 39: VDDA; power_in. */
  "VDDA": "39",
  /** Physical pin 40: PA0; bidirectional. */
  "PA0": "40",
  /** Physical pin 41: PA1; bidirectional. */
  "PA1": "41",
  /** Physical pin 42: PA2; bidirectional. */
  "PA2": "42",
  /** Physical pin 43: PH2; bidirectional. */
  "PH2": "43",
  /** Physical pin 44: PH3; bidirectional. */
  "PH3": "44",
  /** Physical pin 45: PH4; bidirectional. */
  "PH4": "45",
  /** Physical pin 46: PH5; bidirectional. */
  "PH5": "46",
  /** Physical pin 47: PA3; bidirectional. */
  "PA3": "47",
  /** Physical pin 48: VSS; passive. */
  "VSS_48": "48",
  /** Physical pin 49: VDD; power_in. */
  "VDD_49": "49",
  /** Physical pin 50: PA4; bidirectional. */
  "PA4": "50",
  /** Physical pin 51: PA5; bidirectional. */
  "PA5": "51",
  /** Physical pin 52: PA6; bidirectional. */
  "PA6": "52",
  /** Physical pin 53: PA7; bidirectional. */
  "PA7": "53",
  /** Physical pin 54: PC4; bidirectional. */
  "PC4": "54",
  /** Physical pin 55: PC5; bidirectional. */
  "PC5": "55",
  /** Physical pin 56: PB0; bidirectional. */
  "PB0": "56",
  /** Physical pin 57: PB1; bidirectional. */
  "PB1": "57",
  /** Physical pin 58: PB2; bidirectional. */
  "PB2": "58",
  /** Physical pin 59: PF11; bidirectional. */
  "PF11": "59",
  /** Physical pin 60: PF12; bidirectional. */
  "PF12": "60",
  /** Physical pin 61: VSS; passive. */
  "VSS_61": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: PF13; bidirectional. */
  "PF13": "63",
  /** Physical pin 64: PF14; bidirectional. */
  "PF14": "64",
  /** Physical pin 65: PF15; bidirectional. */
  "PF15": "65",
  /** Physical pin 66: PG0; bidirectional. */
  "PG0": "66",
  /** Physical pin 67: PG1; bidirectional. */
  "PG1": "67",
  /** Physical pin 68: PE7; bidirectional. */
  "PE7": "68",
  /** Physical pin 69: PE8; bidirectional. */
  "PE8": "69",
  /** Physical pin 70: PE9; bidirectional. */
  "PE9": "70",
  /** Physical pin 71: VSS; passive. */
  "VSS_71": "71",
  /** Physical pin 72: VDD; power_in. */
  "VDD_72": "72",
  /** Physical pin 73: PE10; bidirectional. */
  "PE10": "73",
  /** Physical pin 74: PE11; bidirectional. */
  "PE11": "74",
  /** Physical pin 75: PE12; bidirectional. */
  "PE12": "75",
  /** Physical pin 76: PE13; bidirectional. */
  "PE13": "76",
  /** Physical pin 77: PE14; bidirectional. */
  "PE14": "77",
  /** Physical pin 78: PE15; bidirectional. */
  "PE15": "78",
  /** Physical pin 79: PB10; bidirectional. */
  "PB10": "79",
  /** Physical pin 80: PB11; bidirectional. */
  "PB11": "80",
  /** Physical pin 81: VCAP_1; power_out. */
  "VCAP_1": "81",
  /** Physical pin 82: VDD; power_in. */
  "VDD_82": "82",
  /** Physical pin 83: PH6; bidirectional. */
  "PH6": "83",
  /** Physical pin 84: PH7; bidirectional. */
  "PH7": "84",
  /** Physical pin 85: PH8; bidirectional. */
  "PH8": "85",
  /** Physical pin 86: PH9; bidirectional. */
  "PH9": "86",
  /** Physical pin 87: PH10; bidirectional. */
  "PH10": "87",
  /** Physical pin 88: PH11; bidirectional. */
  "PH11": "88",
  /** Physical pin 89: PH12; bidirectional. */
  "PH12": "89",
  /** Physical pin 90: VSS; passive. */
  "VSS_90": "90",
  /** Physical pin 91: VDD; power_in. */
  "VDD_91": "91",
  /** Physical pin 92: PB12; bidirectional. */
  "PB12": "92",
  /** Physical pin 93: PB13; bidirectional. */
  "PB13": "93",
  /** Physical pin 94: PB14; bidirectional. */
  "PB14": "94",
  /** Physical pin 95: PB15; bidirectional. */
  "PB15": "95",
  /** Physical pin 96: PD8; bidirectional. */
  "PD8": "96",
  /** Physical pin 97: PD9; bidirectional. */
  "PD9": "97",
  /** Physical pin 98: PD10; bidirectional. */
  "PD10": "98",
  /** Physical pin 99: PD11; bidirectional. */
  "PD11": "99",
  /** Physical pin 100: PD12; bidirectional. */
  "PD12": "100",
  /** Physical pin 101: PD13; bidirectional. */
  "PD13": "101",
  /** Physical pin 102: VSS; passive. */
  "VSS_102": "102",
  /** Physical pin 103: VDD; power_in. */
  "VDD_103": "103",
  /** Physical pin 104: PD14; bidirectional. */
  "PD14": "104",
  /** Physical pin 105: PD15; bidirectional. */
  "PD15": "105",
  /** Physical pin 106: PG2; bidirectional. */
  "PG2": "106",
  /** Physical pin 107: PG3; bidirectional. */
  "PG3": "107",
  /** Physical pin 108: PG4; bidirectional. */
  "PG4": "108",
  /** Physical pin 109: PG5; bidirectional. */
  "PG5": "109",
  /** Physical pin 110: PG6; bidirectional. */
  "PG6": "110",
  /** Physical pin 111: PG7; bidirectional. */
  "PG7": "111",
  /** Physical pin 112: PG8; bidirectional. */
  "PG8": "112",
  /** Physical pin 113: VSS; passive. */
  "VSS_113": "113",
  /** Physical pin 114: VDD; power_in. */
  "VDD_114": "114",
  /** Physical pin 115: PC6; bidirectional. */
  "PC6": "115",
  /** Physical pin 116: PC7; bidirectional. */
  "PC7": "116",
  /** Physical pin 117: PC8; bidirectional. */
  "PC8": "117",
  /** Physical pin 118: PC9; bidirectional. */
  "PC9": "118",
  /** Physical pin 119: PA8; bidirectional. */
  "PA8": "119",
  /** Physical pin 120: PA9; bidirectional. */
  "PA9": "120",
  /** Physical pin 121: PA10; bidirectional. */
  "PA10": "121",
  /** Physical pin 122: PA11; bidirectional. */
  "PA11": "122",
  /** Physical pin 123: PA12; bidirectional. */
  "PA12": "123",
  /** Physical pin 124: PA13; bidirectional. */
  "PA13": "124",
  /** Physical pin 125: VCAP_2; power_out. */
  "VCAP_2": "125",
  /** Physical pin 126: VSS; passive. */
  "VSS_126": "126",
  /** Physical pin 127: VDD; power_in. */
  "VDD_127": "127",
  /** Physical pin 128: PH13; bidirectional. */
  "PH13": "128",
  /** Physical pin 129: PH14; bidirectional. */
  "PH14": "129",
  /** Physical pin 130: PH15; bidirectional. */
  "PH15": "130",
  /** Physical pin 131: PI0; bidirectional. */
  "PI0": "131",
  /** Physical pin 132: PI1; bidirectional. */
  "PI1": "132",
  /** Physical pin 133: PI2; bidirectional. */
  "PI2": "133",
  /** Physical pin 134: PI3; bidirectional. */
  "PI3": "134",
  /** Physical pin 135: VSS; passive. */
  "VSS_135": "135",
  /** Physical pin 136: VDD; power_in. */
  "VDD_136": "136",
  /** Physical pin 137: PA14; bidirectional. */
  "PA14": "137",
  /** Physical pin 138: PA15; bidirectional. */
  "PA15": "138",
  /** Physical pin 139: PC10; bidirectional. */
  "PC10": "139",
  /** Physical pin 140: PC11; bidirectional. */
  "PC11": "140",
  /** Physical pin 141: PC12; bidirectional. */
  "PC12": "141",
  /** Physical pin 142: PD0; bidirectional. */
  "PD0": "142",
  /** Physical pin 143: PD1; bidirectional. */
  "PD1": "143",
  /** Physical pin 144: PD2; bidirectional. */
  "PD2": "144",
  /** Physical pin 145: PD3; bidirectional. */
  "PD3": "145",
  /** Physical pin 146: PD4; bidirectional. */
  "PD4": "146",
  /** Physical pin 147: PD5; bidirectional. */
  "PD5": "147",
  /** Physical pin 148: VSS; passive. */
  "VSS_148": "148",
  /** Physical pin 149: VDD; power_in. */
  "VDD_149": "149",
  /** Physical pin 150: PD6; bidirectional. */
  "PD6": "150",
  /** Physical pin 151: PD7; bidirectional. */
  "PD7": "151",
  /** Physical pin 152: PG9; bidirectional. */
  "PG9": "152",
  /** Physical pin 153: PG10; bidirectional. */
  "PG10": "153",
  /** Physical pin 154: PG11; bidirectional. */
  "PG11": "154",
  /** Physical pin 155: PG12; bidirectional. */
  "PG12": "155",
  /** Physical pin 156: PG13; bidirectional. */
  "PG13": "156",
  /** Physical pin 157: PG14; bidirectional. */
  "PG14": "157",
  /** Physical pin 158: VSS; passive. */
  "VSS_158": "158",
  /** Physical pin 159: VDD; power_in. */
  "VDD_159": "159",
  /** Physical pin 160: PG15; bidirectional. */
  "PG15": "160",
  /** Physical pin 161: PB3; bidirectional. */
  "PB3": "161",
  /** Physical pin 162: PB4; bidirectional. */
  "PB4": "162",
  /** Physical pin 163: PB5; bidirectional. */
  "PB5": "163",
  /** Physical pin 164: PB6; bidirectional. */
  "PB6": "164",
  /** Physical pin 165: PB7; bidirectional. */
  "PB7": "165",
  /** Physical pin 166: BOOT0; input. */
  "BOOT0": "166",
  /** Physical pin 167: PB8; bidirectional. */
  "PB8": "167",
  /** Physical pin 168: PB9; bidirectional. */
  "PB9": "168",
  /** Physical pin 169: PE0; bidirectional. */
  "PE0": "169",
  /** Physical pin 170: PE1; bidirectional. */
  "PE1": "170",
  /** Physical pin 171: RFU; no_connect. */
  "RFU": "171",
  /** Physical pin 172: VDD; power_in. */
  "VDD_172": "172",
  /** Physical pin 173: PI4; bidirectional. */
  "PI4": "173",
  /** Physical pin 174: PI5; bidirectional. */
  "PI5": "174",
  /** Physical pin 175: PI6; bidirectional. */
  "PI6": "175",
  /** Physical pin 176: PI7; bidirectional. */
  "PI7": "176",
}) {
  override schema = "MCU_ST_STM32F2:STM32F207IGTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 256-1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 82 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F207V_C-E-F-G_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f207vc.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F207V_C_E_F_G_Tx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: PH0; bidirectional. */
  "PH0": "12",
  /** Physical pin 13: PH1; bidirectional. */
  "PH1": "13",
  /** Physical pin 14: NRST; input. */
  "NRST": "14",
  /** Physical pin 15: PC0; bidirectional. */
  "PC0": "15",
  /** Physical pin 16: PC1; bidirectional. */
  "PC1": "16",
  /** Physical pin 17: PC2; bidirectional. */
  "PC2": "17",
  /** Physical pin 18: PC3; bidirectional. */
  "PC3": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: VSSA; power_in. */
  "VSSA": "20",
  /** Physical pin 21: VREF+; input. */
  "VREF+": "21",
  /** Physical pin 22: VDDA; power_in. */
  "VDDA": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: PA1; bidirectional. */
  "PA1": "24",
  /** Physical pin 25: PA2; bidirectional. */
  "PA2": "25",
  /** Physical pin 26: PA3; bidirectional. */
  "PA3": "26",
  /** Physical pin 27: VSS; passive. */
  "VSS_27": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: PA4; bidirectional. */
  "PA4": "29",
  /** Physical pin 30: PA5; bidirectional. */
  "PA5": "30",
  /** Physical pin 31: PA6; bidirectional. */
  "PA6": "31",
  /** Physical pin 32: PA7; bidirectional. */
  "PA7": "32",
  /** Physical pin 33: PC4; bidirectional. */
  "PC4": "33",
  /** Physical pin 34: PC5; bidirectional. */
  "PC5": "34",
  /** Physical pin 35: PB0; bidirectional. */
  "PB0": "35",
  /** Physical pin 36: PB1; bidirectional. */
  "PB1": "36",
  /** Physical pin 37: PB2; bidirectional. */
  "PB2": "37",
  /** Physical pin 38: PE7; bidirectional. */
  "PE7": "38",
  /** Physical pin 39: PE8; bidirectional. */
  "PE8": "39",
  /** Physical pin 40: PE9; bidirectional. */
  "PE9": "40",
  /** Physical pin 41: PE10; bidirectional. */
  "PE10": "41",
  /** Physical pin 42: PE11; bidirectional. */
  "PE11": "42",
  /** Physical pin 43: PE12; bidirectional. */
  "PE12": "43",
  /** Physical pin 44: PE13; bidirectional. */
  "PE13": "44",
  /** Physical pin 45: PE14; bidirectional. */
  "PE14": "45",
  /** Physical pin 46: PE15; bidirectional. */
  "PE15": "46",
  /** Physical pin 47: PB10; bidirectional. */
  "PB10": "47",
  /** Physical pin 48: PB11; bidirectional. */
  "PB11": "48",
  /** Physical pin 49: VCAP_1; power_out. */
  "VCAP_1": "49",
  /** Physical pin 50: VDD; power_in. */
  "VDD_50": "50",
  /** Physical pin 51: PB12; bidirectional. */
  "PB12": "51",
  /** Physical pin 52: PB13; bidirectional. */
  "PB13": "52",
  /** Physical pin 53: PB14; bidirectional. */
  "PB14": "53",
  /** Physical pin 54: PB15; bidirectional. */
  "PB15": "54",
  /** Physical pin 55: PD8; bidirectional. */
  "PD8": "55",
  /** Physical pin 56: PD9; bidirectional. */
  "PD9": "56",
  /** Physical pin 57: PD10; bidirectional. */
  "PD10": "57",
  /** Physical pin 58: PD11; bidirectional. */
  "PD11": "58",
  /** Physical pin 59: PD12; bidirectional. */
  "PD12": "59",
  /** Physical pin 60: PD13; bidirectional. */
  "PD13": "60",
  /** Physical pin 61: PD14; bidirectional. */
  "PD14": "61",
  /** Physical pin 62: PD15; bidirectional. */
  "PD15": "62",
  /** Physical pin 63: PC6; bidirectional. */
  "PC6": "63",
  /** Physical pin 64: PC7; bidirectional. */
  "PC7": "64",
  /** Physical pin 65: PC8; bidirectional. */
  "PC8": "65",
  /** Physical pin 66: PC9; bidirectional. */
  "PC9": "66",
  /** Physical pin 67: PA8; bidirectional. */
  "PA8": "67",
  /** Physical pin 68: PA9; bidirectional. */
  "PA9": "68",
  /** Physical pin 69: PA10; bidirectional. */
  "PA10": "69",
  /** Physical pin 70: PA11; bidirectional. */
  "PA11": "70",
  /** Physical pin 71: PA12; bidirectional. */
  "PA12": "71",
  /** Physical pin 72: PA13; bidirectional. */
  "PA13": "72",
  /** Physical pin 73: VCAP_2; power_out. */
  "VCAP_2": "73",
  /** Physical pin 74: VSS; passive. */
  "VSS_74": "74",
  /** Physical pin 75: VDD; power_in. */
  "VDD_75": "75",
  /** Physical pin 76: PA14; bidirectional. */
  "PA14": "76",
  /** Physical pin 77: PA15; bidirectional. */
  "PA15": "77",
  /** Physical pin 78: PC10; bidirectional. */
  "PC10": "78",
  /** Physical pin 79: PC11; bidirectional. */
  "PC11": "79",
  /** Physical pin 80: PC12; bidirectional. */
  "PC12": "80",
  /** Physical pin 81: PD0; bidirectional. */
  "PD0": "81",
  /** Physical pin 82: PD1; bidirectional. */
  "PD1": "82",
  /** Physical pin 83: PD2; bidirectional. */
  "PD2": "83",
  /** Physical pin 84: PD3; bidirectional. */
  "PD3": "84",
  /** Physical pin 85: PD4; bidirectional. */
  "PD4": "85",
  /** Physical pin 86: PD5; bidirectional. */
  "PD5": "86",
  /** Physical pin 87: PD6; bidirectional. */
  "PD6": "87",
  /** Physical pin 88: PD7; bidirectional. */
  "PD7": "88",
  /** Physical pin 89: PB3; bidirectional. */
  "PB3": "89",
  /** Physical pin 90: PB4; bidirectional. */
  "PB4": "90",
  /** Physical pin 91: PB5; bidirectional. */
  "PB5": "91",
  /** Physical pin 92: PB6; bidirectional. */
  "PB6": "92",
  /** Physical pin 93: PB7; bidirectional. */
  "PB7": "93",
  /** Physical pin 94: BOOT0; input. */
  "BOOT0": "94",
  /** Physical pin 95: PB8; bidirectional. */
  "PB8": "95",
  /** Physical pin 96: PB9; bidirectional. */
  "PB9": "96",
  /** Physical pin 97: PE0; bidirectional. */
  "PE0": "97",
  /** Physical pin 98: PE1; bidirectional. */
  "PE1": "98",
  /** Physical pin 99: RFU; no_connect. */
  "RFU": "99",
  /** Physical pin 100: VDD; power_in. */
  "VDD_100": "100",
}) {
  override schema = "MCU_ST_STM32F2:STM32F207V_C-E-F-G_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 256KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 82 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F207VCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f207vc.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F207VCTx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: PH0; bidirectional. */
  "PH0": "12",
  /** Physical pin 13: PH1; bidirectional. */
  "PH1": "13",
  /** Physical pin 14: NRST; input. */
  "NRST": "14",
  /** Physical pin 15: PC0; bidirectional. */
  "PC0": "15",
  /** Physical pin 16: PC1; bidirectional. */
  "PC1": "16",
  /** Physical pin 17: PC2; bidirectional. */
  "PC2": "17",
  /** Physical pin 18: PC3; bidirectional. */
  "PC3": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: VSSA; power_in. */
  "VSSA": "20",
  /** Physical pin 21: VREF+; input. */
  "VREF+": "21",
  /** Physical pin 22: VDDA; power_in. */
  "VDDA": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: PA1; bidirectional. */
  "PA1": "24",
  /** Physical pin 25: PA2; bidirectional. */
  "PA2": "25",
  /** Physical pin 26: PA3; bidirectional. */
  "PA3": "26",
  /** Physical pin 27: VSS; passive. */
  "VSS_27": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: PA4; bidirectional. */
  "PA4": "29",
  /** Physical pin 30: PA5; bidirectional. */
  "PA5": "30",
  /** Physical pin 31: PA6; bidirectional. */
  "PA6": "31",
  /** Physical pin 32: PA7; bidirectional. */
  "PA7": "32",
  /** Physical pin 33: PC4; bidirectional. */
  "PC4": "33",
  /** Physical pin 34: PC5; bidirectional. */
  "PC5": "34",
  /** Physical pin 35: PB0; bidirectional. */
  "PB0": "35",
  /** Physical pin 36: PB1; bidirectional. */
  "PB1": "36",
  /** Physical pin 37: PB2; bidirectional. */
  "PB2": "37",
  /** Physical pin 38: PE7; bidirectional. */
  "PE7": "38",
  /** Physical pin 39: PE8; bidirectional. */
  "PE8": "39",
  /** Physical pin 40: PE9; bidirectional. */
  "PE9": "40",
  /** Physical pin 41: PE10; bidirectional. */
  "PE10": "41",
  /** Physical pin 42: PE11; bidirectional. */
  "PE11": "42",
  /** Physical pin 43: PE12; bidirectional. */
  "PE12": "43",
  /** Physical pin 44: PE13; bidirectional. */
  "PE13": "44",
  /** Physical pin 45: PE14; bidirectional. */
  "PE14": "45",
  /** Physical pin 46: PE15; bidirectional. */
  "PE15": "46",
  /** Physical pin 47: PB10; bidirectional. */
  "PB10": "47",
  /** Physical pin 48: PB11; bidirectional. */
  "PB11": "48",
  /** Physical pin 49: VCAP_1; power_out. */
  "VCAP_1": "49",
  /** Physical pin 50: VDD; power_in. */
  "VDD_50": "50",
  /** Physical pin 51: PB12; bidirectional. */
  "PB12": "51",
  /** Physical pin 52: PB13; bidirectional. */
  "PB13": "52",
  /** Physical pin 53: PB14; bidirectional. */
  "PB14": "53",
  /** Physical pin 54: PB15; bidirectional. */
  "PB15": "54",
  /** Physical pin 55: PD8; bidirectional. */
  "PD8": "55",
  /** Physical pin 56: PD9; bidirectional. */
  "PD9": "56",
  /** Physical pin 57: PD10; bidirectional. */
  "PD10": "57",
  /** Physical pin 58: PD11; bidirectional. */
  "PD11": "58",
  /** Physical pin 59: PD12; bidirectional. */
  "PD12": "59",
  /** Physical pin 60: PD13; bidirectional. */
  "PD13": "60",
  /** Physical pin 61: PD14; bidirectional. */
  "PD14": "61",
  /** Physical pin 62: PD15; bidirectional. */
  "PD15": "62",
  /** Physical pin 63: PC6; bidirectional. */
  "PC6": "63",
  /** Physical pin 64: PC7; bidirectional. */
  "PC7": "64",
  /** Physical pin 65: PC8; bidirectional. */
  "PC8": "65",
  /** Physical pin 66: PC9; bidirectional. */
  "PC9": "66",
  /** Physical pin 67: PA8; bidirectional. */
  "PA8": "67",
  /** Physical pin 68: PA9; bidirectional. */
  "PA9": "68",
  /** Physical pin 69: PA10; bidirectional. */
  "PA10": "69",
  /** Physical pin 70: PA11; bidirectional. */
  "PA11": "70",
  /** Physical pin 71: PA12; bidirectional. */
  "PA12": "71",
  /** Physical pin 72: PA13; bidirectional. */
  "PA13": "72",
  /** Physical pin 73: VCAP_2; power_out. */
  "VCAP_2": "73",
  /** Physical pin 74: VSS; passive. */
  "VSS_74": "74",
  /** Physical pin 75: VDD; power_in. */
  "VDD_75": "75",
  /** Physical pin 76: PA14; bidirectional. */
  "PA14": "76",
  /** Physical pin 77: PA15; bidirectional. */
  "PA15": "77",
  /** Physical pin 78: PC10; bidirectional. */
  "PC10": "78",
  /** Physical pin 79: PC11; bidirectional. */
  "PC11": "79",
  /** Physical pin 80: PC12; bidirectional. */
  "PC12": "80",
  /** Physical pin 81: PD0; bidirectional. */
  "PD0": "81",
  /** Physical pin 82: PD1; bidirectional. */
  "PD1": "82",
  /** Physical pin 83: PD2; bidirectional. */
  "PD2": "83",
  /** Physical pin 84: PD3; bidirectional. */
  "PD3": "84",
  /** Physical pin 85: PD4; bidirectional. */
  "PD4": "85",
  /** Physical pin 86: PD5; bidirectional. */
  "PD5": "86",
  /** Physical pin 87: PD6; bidirectional. */
  "PD6": "87",
  /** Physical pin 88: PD7; bidirectional. */
  "PD7": "88",
  /** Physical pin 89: PB3; bidirectional. */
  "PB3": "89",
  /** Physical pin 90: PB4; bidirectional. */
  "PB4": "90",
  /** Physical pin 91: PB5; bidirectional. */
  "PB5": "91",
  /** Physical pin 92: PB6; bidirectional. */
  "PB6": "92",
  /** Physical pin 93: PB7; bidirectional. */
  "PB7": "93",
  /** Physical pin 94: BOOT0; input. */
  "BOOT0": "94",
  /** Physical pin 95: PB8; bidirectional. */
  "PB8": "95",
  /** Physical pin 96: PB9; bidirectional. */
  "PB9": "96",
  /** Physical pin 97: PE0; bidirectional. */
  "PE0": "97",
  /** Physical pin 98: PE1; bidirectional. */
  "PE1": "98",
  /** Physical pin 99: RFU; no_connect. */
  "RFU": "99",
  /** Physical pin 100: VDD; power_in. */
  "VDD_100": "100",
}) {
  override schema = "MCU_ST_STM32F2:STM32F207VCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 512KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 82 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F207VETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f207ve.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F207VETx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: PH0; bidirectional. */
  "PH0": "12",
  /** Physical pin 13: PH1; bidirectional. */
  "PH1": "13",
  /** Physical pin 14: NRST; input. */
  "NRST": "14",
  /** Physical pin 15: PC0; bidirectional. */
  "PC0": "15",
  /** Physical pin 16: PC1; bidirectional. */
  "PC1": "16",
  /** Physical pin 17: PC2; bidirectional. */
  "PC2": "17",
  /** Physical pin 18: PC3; bidirectional. */
  "PC3": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: VSSA; power_in. */
  "VSSA": "20",
  /** Physical pin 21: VREF+; input. */
  "VREF+": "21",
  /** Physical pin 22: VDDA; power_in. */
  "VDDA": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: PA1; bidirectional. */
  "PA1": "24",
  /** Physical pin 25: PA2; bidirectional. */
  "PA2": "25",
  /** Physical pin 26: PA3; bidirectional. */
  "PA3": "26",
  /** Physical pin 27: VSS; passive. */
  "VSS_27": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: PA4; bidirectional. */
  "PA4": "29",
  /** Physical pin 30: PA5; bidirectional. */
  "PA5": "30",
  /** Physical pin 31: PA6; bidirectional. */
  "PA6": "31",
  /** Physical pin 32: PA7; bidirectional. */
  "PA7": "32",
  /** Physical pin 33: PC4; bidirectional. */
  "PC4": "33",
  /** Physical pin 34: PC5; bidirectional. */
  "PC5": "34",
  /** Physical pin 35: PB0; bidirectional. */
  "PB0": "35",
  /** Physical pin 36: PB1; bidirectional. */
  "PB1": "36",
  /** Physical pin 37: PB2; bidirectional. */
  "PB2": "37",
  /** Physical pin 38: PE7; bidirectional. */
  "PE7": "38",
  /** Physical pin 39: PE8; bidirectional. */
  "PE8": "39",
  /** Physical pin 40: PE9; bidirectional. */
  "PE9": "40",
  /** Physical pin 41: PE10; bidirectional. */
  "PE10": "41",
  /** Physical pin 42: PE11; bidirectional. */
  "PE11": "42",
  /** Physical pin 43: PE12; bidirectional. */
  "PE12": "43",
  /** Physical pin 44: PE13; bidirectional. */
  "PE13": "44",
  /** Physical pin 45: PE14; bidirectional. */
  "PE14": "45",
  /** Physical pin 46: PE15; bidirectional. */
  "PE15": "46",
  /** Physical pin 47: PB10; bidirectional. */
  "PB10": "47",
  /** Physical pin 48: PB11; bidirectional. */
  "PB11": "48",
  /** Physical pin 49: VCAP_1; power_out. */
  "VCAP_1": "49",
  /** Physical pin 50: VDD; power_in. */
  "VDD_50": "50",
  /** Physical pin 51: PB12; bidirectional. */
  "PB12": "51",
  /** Physical pin 52: PB13; bidirectional. */
  "PB13": "52",
  /** Physical pin 53: PB14; bidirectional. */
  "PB14": "53",
  /** Physical pin 54: PB15; bidirectional. */
  "PB15": "54",
  /** Physical pin 55: PD8; bidirectional. */
  "PD8": "55",
  /** Physical pin 56: PD9; bidirectional. */
  "PD9": "56",
  /** Physical pin 57: PD10; bidirectional. */
  "PD10": "57",
  /** Physical pin 58: PD11; bidirectional. */
  "PD11": "58",
  /** Physical pin 59: PD12; bidirectional. */
  "PD12": "59",
  /** Physical pin 60: PD13; bidirectional. */
  "PD13": "60",
  /** Physical pin 61: PD14; bidirectional. */
  "PD14": "61",
  /** Physical pin 62: PD15; bidirectional. */
  "PD15": "62",
  /** Physical pin 63: PC6; bidirectional. */
  "PC6": "63",
  /** Physical pin 64: PC7; bidirectional. */
  "PC7": "64",
  /** Physical pin 65: PC8; bidirectional. */
  "PC8": "65",
  /** Physical pin 66: PC9; bidirectional. */
  "PC9": "66",
  /** Physical pin 67: PA8; bidirectional. */
  "PA8": "67",
  /** Physical pin 68: PA9; bidirectional. */
  "PA9": "68",
  /** Physical pin 69: PA10; bidirectional. */
  "PA10": "69",
  /** Physical pin 70: PA11; bidirectional. */
  "PA11": "70",
  /** Physical pin 71: PA12; bidirectional. */
  "PA12": "71",
  /** Physical pin 72: PA13; bidirectional. */
  "PA13": "72",
  /** Physical pin 73: VCAP_2; power_out. */
  "VCAP_2": "73",
  /** Physical pin 74: VSS; passive. */
  "VSS_74": "74",
  /** Physical pin 75: VDD; power_in. */
  "VDD_75": "75",
  /** Physical pin 76: PA14; bidirectional. */
  "PA14": "76",
  /** Physical pin 77: PA15; bidirectional. */
  "PA15": "77",
  /** Physical pin 78: PC10; bidirectional. */
  "PC10": "78",
  /** Physical pin 79: PC11; bidirectional. */
  "PC11": "79",
  /** Physical pin 80: PC12; bidirectional. */
  "PC12": "80",
  /** Physical pin 81: PD0; bidirectional. */
  "PD0": "81",
  /** Physical pin 82: PD1; bidirectional. */
  "PD1": "82",
  /** Physical pin 83: PD2; bidirectional. */
  "PD2": "83",
  /** Physical pin 84: PD3; bidirectional. */
  "PD3": "84",
  /** Physical pin 85: PD4; bidirectional. */
  "PD4": "85",
  /** Physical pin 86: PD5; bidirectional. */
  "PD5": "86",
  /** Physical pin 87: PD6; bidirectional. */
  "PD6": "87",
  /** Physical pin 88: PD7; bidirectional. */
  "PD7": "88",
  /** Physical pin 89: PB3; bidirectional. */
  "PB3": "89",
  /** Physical pin 90: PB4; bidirectional. */
  "PB4": "90",
  /** Physical pin 91: PB5; bidirectional. */
  "PB5": "91",
  /** Physical pin 92: PB6; bidirectional. */
  "PB6": "92",
  /** Physical pin 93: PB7; bidirectional. */
  "PB7": "93",
  /** Physical pin 94: BOOT0; input. */
  "BOOT0": "94",
  /** Physical pin 95: PB8; bidirectional. */
  "PB8": "95",
  /** Physical pin 96: PB9; bidirectional. */
  "PB9": "96",
  /** Physical pin 97: PE0; bidirectional. */
  "PE0": "97",
  /** Physical pin 98: PE1; bidirectional. */
  "PE1": "98",
  /** Physical pin 99: RFU; no_connect. */
  "RFU": "99",
  /** Physical pin 100: VDD; power_in. */
  "VDD_100": "100",
}) {
  override schema = "MCU_ST_STM32F2:STM32F207VETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 768KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 82 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F207VFTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f207vf.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F207VFTx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: PH0; bidirectional. */
  "PH0": "12",
  /** Physical pin 13: PH1; bidirectional. */
  "PH1": "13",
  /** Physical pin 14: NRST; input. */
  "NRST": "14",
  /** Physical pin 15: PC0; bidirectional. */
  "PC0": "15",
  /** Physical pin 16: PC1; bidirectional. */
  "PC1": "16",
  /** Physical pin 17: PC2; bidirectional. */
  "PC2": "17",
  /** Physical pin 18: PC3; bidirectional. */
  "PC3": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: VSSA; power_in. */
  "VSSA": "20",
  /** Physical pin 21: VREF+; input. */
  "VREF+": "21",
  /** Physical pin 22: VDDA; power_in. */
  "VDDA": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: PA1; bidirectional. */
  "PA1": "24",
  /** Physical pin 25: PA2; bidirectional. */
  "PA2": "25",
  /** Physical pin 26: PA3; bidirectional. */
  "PA3": "26",
  /** Physical pin 27: VSS; passive. */
  "VSS_27": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: PA4; bidirectional. */
  "PA4": "29",
  /** Physical pin 30: PA5; bidirectional. */
  "PA5": "30",
  /** Physical pin 31: PA6; bidirectional. */
  "PA6": "31",
  /** Physical pin 32: PA7; bidirectional. */
  "PA7": "32",
  /** Physical pin 33: PC4; bidirectional. */
  "PC4": "33",
  /** Physical pin 34: PC5; bidirectional. */
  "PC5": "34",
  /** Physical pin 35: PB0; bidirectional. */
  "PB0": "35",
  /** Physical pin 36: PB1; bidirectional. */
  "PB1": "36",
  /** Physical pin 37: PB2; bidirectional. */
  "PB2": "37",
  /** Physical pin 38: PE7; bidirectional. */
  "PE7": "38",
  /** Physical pin 39: PE8; bidirectional. */
  "PE8": "39",
  /** Physical pin 40: PE9; bidirectional. */
  "PE9": "40",
  /** Physical pin 41: PE10; bidirectional. */
  "PE10": "41",
  /** Physical pin 42: PE11; bidirectional. */
  "PE11": "42",
  /** Physical pin 43: PE12; bidirectional. */
  "PE12": "43",
  /** Physical pin 44: PE13; bidirectional. */
  "PE13": "44",
  /** Physical pin 45: PE14; bidirectional. */
  "PE14": "45",
  /** Physical pin 46: PE15; bidirectional. */
  "PE15": "46",
  /** Physical pin 47: PB10; bidirectional. */
  "PB10": "47",
  /** Physical pin 48: PB11; bidirectional. */
  "PB11": "48",
  /** Physical pin 49: VCAP_1; power_out. */
  "VCAP_1": "49",
  /** Physical pin 50: VDD; power_in. */
  "VDD_50": "50",
  /** Physical pin 51: PB12; bidirectional. */
  "PB12": "51",
  /** Physical pin 52: PB13; bidirectional. */
  "PB13": "52",
  /** Physical pin 53: PB14; bidirectional. */
  "PB14": "53",
  /** Physical pin 54: PB15; bidirectional. */
  "PB15": "54",
  /** Physical pin 55: PD8; bidirectional. */
  "PD8": "55",
  /** Physical pin 56: PD9; bidirectional. */
  "PD9": "56",
  /** Physical pin 57: PD10; bidirectional. */
  "PD10": "57",
  /** Physical pin 58: PD11; bidirectional. */
  "PD11": "58",
  /** Physical pin 59: PD12; bidirectional. */
  "PD12": "59",
  /** Physical pin 60: PD13; bidirectional. */
  "PD13": "60",
  /** Physical pin 61: PD14; bidirectional. */
  "PD14": "61",
  /** Physical pin 62: PD15; bidirectional. */
  "PD15": "62",
  /** Physical pin 63: PC6; bidirectional. */
  "PC6": "63",
  /** Physical pin 64: PC7; bidirectional. */
  "PC7": "64",
  /** Physical pin 65: PC8; bidirectional. */
  "PC8": "65",
  /** Physical pin 66: PC9; bidirectional. */
  "PC9": "66",
  /** Physical pin 67: PA8; bidirectional. */
  "PA8": "67",
  /** Physical pin 68: PA9; bidirectional. */
  "PA9": "68",
  /** Physical pin 69: PA10; bidirectional. */
  "PA10": "69",
  /** Physical pin 70: PA11; bidirectional. */
  "PA11": "70",
  /** Physical pin 71: PA12; bidirectional. */
  "PA12": "71",
  /** Physical pin 72: PA13; bidirectional. */
  "PA13": "72",
  /** Physical pin 73: VCAP_2; power_out. */
  "VCAP_2": "73",
  /** Physical pin 74: VSS; passive. */
  "VSS_74": "74",
  /** Physical pin 75: VDD; power_in. */
  "VDD_75": "75",
  /** Physical pin 76: PA14; bidirectional. */
  "PA14": "76",
  /** Physical pin 77: PA15; bidirectional. */
  "PA15": "77",
  /** Physical pin 78: PC10; bidirectional. */
  "PC10": "78",
  /** Physical pin 79: PC11; bidirectional. */
  "PC11": "79",
  /** Physical pin 80: PC12; bidirectional. */
  "PC12": "80",
  /** Physical pin 81: PD0; bidirectional. */
  "PD0": "81",
  /** Physical pin 82: PD1; bidirectional. */
  "PD1": "82",
  /** Physical pin 83: PD2; bidirectional. */
  "PD2": "83",
  /** Physical pin 84: PD3; bidirectional. */
  "PD3": "84",
  /** Physical pin 85: PD4; bidirectional. */
  "PD4": "85",
  /** Physical pin 86: PD5; bidirectional. */
  "PD5": "86",
  /** Physical pin 87: PD6; bidirectional. */
  "PD6": "87",
  /** Physical pin 88: PD7; bidirectional. */
  "PD7": "88",
  /** Physical pin 89: PB3; bidirectional. */
  "PB3": "89",
  /** Physical pin 90: PB4; bidirectional. */
  "PB4": "90",
  /** Physical pin 91: PB5; bidirectional. */
  "PB5": "91",
  /** Physical pin 92: PB6; bidirectional. */
  "PB6": "92",
  /** Physical pin 93: PB7; bidirectional. */
  "PB7": "93",
  /** Physical pin 94: BOOT0; input. */
  "BOOT0": "94",
  /** Physical pin 95: PB8; bidirectional. */
  "PB8": "95",
  /** Physical pin 96: PB9; bidirectional. */
  "PB9": "96",
  /** Physical pin 97: PE0; bidirectional. */
  "PE0": "97",
  /** Physical pin 98: PE1; bidirectional. */
  "PE1": "98",
  /** Physical pin 99: RFU; no_connect. */
  "RFU": "99",
  /** Physical pin 100: VDD; power_in. */
  "VDD_100": "100",
}) {
  override schema = "MCU_ST_STM32F2:STM32F207VFTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 82 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F207VGTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f207vg.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F207VGTx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: PH0; bidirectional. */
  "PH0": "12",
  /** Physical pin 13: PH1; bidirectional. */
  "PH1": "13",
  /** Physical pin 14: NRST; input. */
  "NRST": "14",
  /** Physical pin 15: PC0; bidirectional. */
  "PC0": "15",
  /** Physical pin 16: PC1; bidirectional. */
  "PC1": "16",
  /** Physical pin 17: PC2; bidirectional. */
  "PC2": "17",
  /** Physical pin 18: PC3; bidirectional. */
  "PC3": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: VSSA; power_in. */
  "VSSA": "20",
  /** Physical pin 21: VREF+; input. */
  "VREF+": "21",
  /** Physical pin 22: VDDA; power_in. */
  "VDDA": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: PA1; bidirectional. */
  "PA1": "24",
  /** Physical pin 25: PA2; bidirectional. */
  "PA2": "25",
  /** Physical pin 26: PA3; bidirectional. */
  "PA3": "26",
  /** Physical pin 27: VSS; passive. */
  "VSS_27": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: PA4; bidirectional. */
  "PA4": "29",
  /** Physical pin 30: PA5; bidirectional. */
  "PA5": "30",
  /** Physical pin 31: PA6; bidirectional. */
  "PA6": "31",
  /** Physical pin 32: PA7; bidirectional. */
  "PA7": "32",
  /** Physical pin 33: PC4; bidirectional. */
  "PC4": "33",
  /** Physical pin 34: PC5; bidirectional. */
  "PC5": "34",
  /** Physical pin 35: PB0; bidirectional. */
  "PB0": "35",
  /** Physical pin 36: PB1; bidirectional. */
  "PB1": "36",
  /** Physical pin 37: PB2; bidirectional. */
  "PB2": "37",
  /** Physical pin 38: PE7; bidirectional. */
  "PE7": "38",
  /** Physical pin 39: PE8; bidirectional. */
  "PE8": "39",
  /** Physical pin 40: PE9; bidirectional. */
  "PE9": "40",
  /** Physical pin 41: PE10; bidirectional. */
  "PE10": "41",
  /** Physical pin 42: PE11; bidirectional. */
  "PE11": "42",
  /** Physical pin 43: PE12; bidirectional. */
  "PE12": "43",
  /** Physical pin 44: PE13; bidirectional. */
  "PE13": "44",
  /** Physical pin 45: PE14; bidirectional. */
  "PE14": "45",
  /** Physical pin 46: PE15; bidirectional. */
  "PE15": "46",
  /** Physical pin 47: PB10; bidirectional. */
  "PB10": "47",
  /** Physical pin 48: PB11; bidirectional. */
  "PB11": "48",
  /** Physical pin 49: VCAP_1; power_out. */
  "VCAP_1": "49",
  /** Physical pin 50: VDD; power_in. */
  "VDD_50": "50",
  /** Physical pin 51: PB12; bidirectional. */
  "PB12": "51",
  /** Physical pin 52: PB13; bidirectional. */
  "PB13": "52",
  /** Physical pin 53: PB14; bidirectional. */
  "PB14": "53",
  /** Physical pin 54: PB15; bidirectional. */
  "PB15": "54",
  /** Physical pin 55: PD8; bidirectional. */
  "PD8": "55",
  /** Physical pin 56: PD9; bidirectional. */
  "PD9": "56",
  /** Physical pin 57: PD10; bidirectional. */
  "PD10": "57",
  /** Physical pin 58: PD11; bidirectional. */
  "PD11": "58",
  /** Physical pin 59: PD12; bidirectional. */
  "PD12": "59",
  /** Physical pin 60: PD13; bidirectional. */
  "PD13": "60",
  /** Physical pin 61: PD14; bidirectional. */
  "PD14": "61",
  /** Physical pin 62: PD15; bidirectional. */
  "PD15": "62",
  /** Physical pin 63: PC6; bidirectional. */
  "PC6": "63",
  /** Physical pin 64: PC7; bidirectional. */
  "PC7": "64",
  /** Physical pin 65: PC8; bidirectional. */
  "PC8": "65",
  /** Physical pin 66: PC9; bidirectional. */
  "PC9": "66",
  /** Physical pin 67: PA8; bidirectional. */
  "PA8": "67",
  /** Physical pin 68: PA9; bidirectional. */
  "PA9": "68",
  /** Physical pin 69: PA10; bidirectional. */
  "PA10": "69",
  /** Physical pin 70: PA11; bidirectional. */
  "PA11": "70",
  /** Physical pin 71: PA12; bidirectional. */
  "PA12": "71",
  /** Physical pin 72: PA13; bidirectional. */
  "PA13": "72",
  /** Physical pin 73: VCAP_2; power_out. */
  "VCAP_2": "73",
  /** Physical pin 74: VSS; passive. */
  "VSS_74": "74",
  /** Physical pin 75: VDD; power_in. */
  "VDD_75": "75",
  /** Physical pin 76: PA14; bidirectional. */
  "PA14": "76",
  /** Physical pin 77: PA15; bidirectional. */
  "PA15": "77",
  /** Physical pin 78: PC10; bidirectional. */
  "PC10": "78",
  /** Physical pin 79: PC11; bidirectional. */
  "PC11": "79",
  /** Physical pin 80: PC12; bidirectional. */
  "PC12": "80",
  /** Physical pin 81: PD0; bidirectional. */
  "PD0": "81",
  /** Physical pin 82: PD1; bidirectional. */
  "PD1": "82",
  /** Physical pin 83: PD2; bidirectional. */
  "PD2": "83",
  /** Physical pin 84: PD3; bidirectional. */
  "PD3": "84",
  /** Physical pin 85: PD4; bidirectional. */
  "PD4": "85",
  /** Physical pin 86: PD5; bidirectional. */
  "PD5": "86",
  /** Physical pin 87: PD6; bidirectional. */
  "PD6": "87",
  /** Physical pin 88: PD7; bidirectional. */
  "PD7": "88",
  /** Physical pin 89: PB3; bidirectional. */
  "PB3": "89",
  /** Physical pin 90: PB4; bidirectional. */
  "PB4": "90",
  /** Physical pin 91: PB5; bidirectional. */
  "PB5": "91",
  /** Physical pin 92: PB6; bidirectional. */
  "PB6": "92",
  /** Physical pin 93: PB7; bidirectional. */
  "PB7": "93",
  /** Physical pin 94: BOOT0; input. */
  "BOOT0": "94",
  /** Physical pin 95: PB8; bidirectional. */
  "PB8": "95",
  /** Physical pin 96: PB9; bidirectional. */
  "PB9": "96",
  /** Physical pin 97: PE0; bidirectional. */
  "PE0": "97",
  /** Physical pin 98: PE1; bidirectional. */
  "PE1": "98",
  /** Physical pin 99: RFU; no_connect. */
  "RFU": "99",
  /** Physical pin 100: VDD; power_in. */
  "VDD_100": "100",
}) {
  override schema = "MCU_ST_STM32F2:STM32F207VGTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 256-1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 114 GPIO, LQFP144
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F207Z_C-E-F-G_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f207zc.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F207Z_C_E_F_G_Tx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: PF0; bidirectional. */
  "PF0": "10",
  /** Physical pin 11: PF1; bidirectional. */
  "PF1": "11",
  /** Physical pin 12: PF2; bidirectional. */
  "PF2": "12",
  /** Physical pin 13: PF3; bidirectional. */
  "PF3": "13",
  /** Physical pin 14: PF4; bidirectional. */
  "PF4": "14",
  /** Physical pin 15: PF5; bidirectional. */
  "PF5": "15",
  /** Physical pin 16: VSS; power_in. */
  "VSS_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: PF6; bidirectional. */
  "PF6": "18",
  /** Physical pin 19: PF7; bidirectional. */
  "PF7": "19",
  /** Physical pin 20: PF8; bidirectional. */
  "PF8": "20",
  /** Physical pin 21: PF9; bidirectional. */
  "PF9": "21",
  /** Physical pin 22: PF10; bidirectional. */
  "PF10": "22",
  /** Physical pin 23: PH0; bidirectional. */
  "PH0": "23",
  /** Physical pin 24: PH1; bidirectional. */
  "PH1": "24",
  /** Physical pin 25: NRST; input. */
  "NRST": "25",
  /** Physical pin 26: PC0; bidirectional. */
  "PC0": "26",
  /** Physical pin 27: PC1; bidirectional. */
  "PC1": "27",
  /** Physical pin 28: PC2; bidirectional. */
  "PC2": "28",
  /** Physical pin 29: PC3; bidirectional. */
  "PC3": "29",
  /** Physical pin 30: VDD; power_in. */
  "VDD_30": "30",
  /** Physical pin 31: VSSA; power_in. */
  "VSSA": "31",
  /** Physical pin 32: VREF+; input. */
  "VREF+": "32",
  /** Physical pin 33: VDDA; power_in. */
  "VDDA": "33",
  /** Physical pin 34: PA0; bidirectional. */
  "PA0": "34",
  /** Physical pin 35: PA1; bidirectional. */
  "PA1": "35",
  /** Physical pin 36: PA2; bidirectional. */
  "PA2": "36",
  /** Physical pin 37: PA3; bidirectional. */
  "PA3": "37",
  /** Physical pin 38: VSS; passive. */
  "VSS_38": "38",
  /** Physical pin 39: VDD; power_in. */
  "VDD_39": "39",
  /** Physical pin 40: PA4; bidirectional. */
  "PA4": "40",
  /** Physical pin 41: PA5; bidirectional. */
  "PA5": "41",
  /** Physical pin 42: PA6; bidirectional. */
  "PA6": "42",
  /** Physical pin 43: PA7; bidirectional. */
  "PA7": "43",
  /** Physical pin 44: PC4; bidirectional. */
  "PC4": "44",
  /** Physical pin 45: PC5; bidirectional. */
  "PC5": "45",
  /** Physical pin 46: PB0; bidirectional. */
  "PB0": "46",
  /** Physical pin 47: PB1; bidirectional. */
  "PB1": "47",
  /** Physical pin 48: PB2; bidirectional. */
  "PB2": "48",
  /** Physical pin 49: PF11; bidirectional. */
  "PF11": "49",
  /** Physical pin 50: PF12; bidirectional. */
  "PF12": "50",
  /** Physical pin 51: VSS; passive. */
  "VSS_51": "51",
  /** Physical pin 52: VDD; power_in. */
  "VDD_52": "52",
  /** Physical pin 53: PF13; bidirectional. */
  "PF13": "53",
  /** Physical pin 54: PF14; bidirectional. */
  "PF14": "54",
  /** Physical pin 55: PF15; bidirectional. */
  "PF15": "55",
  /** Physical pin 56: PG0; bidirectional. */
  "PG0": "56",
  /** Physical pin 57: PG1; bidirectional. */
  "PG1": "57",
  /** Physical pin 58: PE7; bidirectional. */
  "PE7": "58",
  /** Physical pin 59: PE8; bidirectional. */
  "PE8": "59",
  /** Physical pin 60: PE9; bidirectional. */
  "PE9": "60",
  /** Physical pin 61: VSS; passive. */
  "VSS_61": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: PE10; bidirectional. */
  "PE10": "63",
  /** Physical pin 64: PE11; bidirectional. */
  "PE11": "64",
  /** Physical pin 65: PE12; bidirectional. */
  "PE12": "65",
  /** Physical pin 66: PE13; bidirectional. */
  "PE13": "66",
  /** Physical pin 67: PE14; bidirectional. */
  "PE14": "67",
  /** Physical pin 68: PE15; bidirectional. */
  "PE15": "68",
  /** Physical pin 69: PB10; bidirectional. */
  "PB10": "69",
  /** Physical pin 70: PB11; bidirectional. */
  "PB11": "70",
  /** Physical pin 71: VCAP_1; power_out. */
  "VCAP_1": "71",
  /** Physical pin 72: VDD; power_in. */
  "VDD_72": "72",
  /** Physical pin 73: PB12; bidirectional. */
  "PB12": "73",
  /** Physical pin 74: PB13; bidirectional. */
  "PB13": "74",
  /** Physical pin 75: PB14; bidirectional. */
  "PB14": "75",
  /** Physical pin 76: PB15; bidirectional. */
  "PB15": "76",
  /** Physical pin 77: PD8; bidirectional. */
  "PD8": "77",
  /** Physical pin 78: PD9; bidirectional. */
  "PD9": "78",
  /** Physical pin 79: PD10; bidirectional. */
  "PD10": "79",
  /** Physical pin 80: PD11; bidirectional. */
  "PD11": "80",
  /** Physical pin 81: PD12; bidirectional. */
  "PD12": "81",
  /** Physical pin 82: PD13; bidirectional. */
  "PD13": "82",
  /** Physical pin 83: VSS; passive. */
  "VSS_83": "83",
  /** Physical pin 84: VDD; power_in. */
  "VDD_84": "84",
  /** Physical pin 85: PD14; bidirectional. */
  "PD14": "85",
  /** Physical pin 86: PD15; bidirectional. */
  "PD15": "86",
  /** Physical pin 87: PG2; bidirectional. */
  "PG2": "87",
  /** Physical pin 88: PG3; bidirectional. */
  "PG3": "88",
  /** Physical pin 89: PG4; bidirectional. */
  "PG4": "89",
  /** Physical pin 90: PG5; bidirectional. */
  "PG5": "90",
  /** Physical pin 91: PG6; bidirectional. */
  "PG6": "91",
  /** Physical pin 92: PG7; bidirectional. */
  "PG7": "92",
  /** Physical pin 93: PG8; bidirectional. */
  "PG8": "93",
  /** Physical pin 94: VSS; passive. */
  "VSS_94": "94",
  /** Physical pin 95: VDD; power_in. */
  "VDD_95": "95",
  /** Physical pin 96: PC6; bidirectional. */
  "PC6": "96",
  /** Physical pin 97: PC7; bidirectional. */
  "PC7": "97",
  /** Physical pin 98: PC8; bidirectional. */
  "PC8": "98",
  /** Physical pin 99: PC9; bidirectional. */
  "PC9": "99",
  /** Physical pin 100: PA8; bidirectional. */
  "PA8": "100",
  /** Physical pin 101: PA9; bidirectional. */
  "PA9": "101",
  /** Physical pin 102: PA10; bidirectional. */
  "PA10": "102",
  /** Physical pin 103: PA11; bidirectional. */
  "PA11": "103",
  /** Physical pin 104: PA12; bidirectional. */
  "PA12": "104",
  /** Physical pin 105: PA13; bidirectional. */
  "PA13": "105",
  /** Physical pin 106: VCAP_2; power_out. */
  "VCAP_2": "106",
  /** Physical pin 107: VSS; passive. */
  "VSS_107": "107",
  /** Physical pin 108: VDD; power_in. */
  "VDD_108": "108",
  /** Physical pin 109: PA14; bidirectional. */
  "PA14": "109",
  /** Physical pin 110: PA15; bidirectional. */
  "PA15": "110",
  /** Physical pin 111: PC10; bidirectional. */
  "PC10": "111",
  /** Physical pin 112: PC11; bidirectional. */
  "PC11": "112",
  /** Physical pin 113: PC12; bidirectional. */
  "PC12": "113",
  /** Physical pin 114: PD0; bidirectional. */
  "PD0": "114",
  /** Physical pin 115: PD1; bidirectional. */
  "PD1": "115",
  /** Physical pin 116: PD2; bidirectional. */
  "PD2": "116",
  /** Physical pin 117: PD3; bidirectional. */
  "PD3": "117",
  /** Physical pin 118: PD4; bidirectional. */
  "PD4": "118",
  /** Physical pin 119: PD5; bidirectional. */
  "PD5": "119",
  /** Physical pin 120: VSS; passive. */
  "VSS_120": "120",
  /** Physical pin 121: VDD; power_in. */
  "VDD_121": "121",
  /** Physical pin 122: PD6; bidirectional. */
  "PD6": "122",
  /** Physical pin 123: PD7; bidirectional. */
  "PD7": "123",
  /** Physical pin 124: PG9; bidirectional. */
  "PG9": "124",
  /** Physical pin 125: PG10; bidirectional. */
  "PG10": "125",
  /** Physical pin 126: PG11; bidirectional. */
  "PG11": "126",
  /** Physical pin 127: PG12; bidirectional. */
  "PG12": "127",
  /** Physical pin 128: PG13; bidirectional. */
  "PG13": "128",
  /** Physical pin 129: PG14; bidirectional. */
  "PG14": "129",
  /** Physical pin 130: VSS; passive. */
  "VSS_130": "130",
  /** Physical pin 131: VDD; power_in. */
  "VDD_131": "131",
  /** Physical pin 132: PG15; bidirectional. */
  "PG15": "132",
  /** Physical pin 133: PB3; bidirectional. */
  "PB3": "133",
  /** Physical pin 134: PB4; bidirectional. */
  "PB4": "134",
  /** Physical pin 135: PB5; bidirectional. */
  "PB5": "135",
  /** Physical pin 136: PB6; bidirectional. */
  "PB6": "136",
  /** Physical pin 137: PB7; bidirectional. */
  "PB7": "137",
  /** Physical pin 138: BOOT0; input. */
  "BOOT0": "138",
  /** Physical pin 139: PB8; bidirectional. */
  "PB8": "139",
  /** Physical pin 140: PB9; bidirectional. */
  "PB9": "140",
  /** Physical pin 141: PE0; bidirectional. */
  "PE0": "141",
  /** Physical pin 142: PE1; bidirectional. */
  "PE1": "142",
  /** Physical pin 143: RFU; no_connect. */
  "RFU": "143",
  /** Physical pin 144: VDD; power_in. */
  "VDD_144": "144",
}) {
  override schema = "MCU_ST_STM32F2:STM32F207Z_C-E-F-G_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 256KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 114 GPIO, LQFP144
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F207ZCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f207zc.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F207ZCTx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: PF0; bidirectional. */
  "PF0": "10",
  /** Physical pin 11: PF1; bidirectional. */
  "PF1": "11",
  /** Physical pin 12: PF2; bidirectional. */
  "PF2": "12",
  /** Physical pin 13: PF3; bidirectional. */
  "PF3": "13",
  /** Physical pin 14: PF4; bidirectional. */
  "PF4": "14",
  /** Physical pin 15: PF5; bidirectional. */
  "PF5": "15",
  /** Physical pin 16: VSS; power_in. */
  "VSS_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: PF6; bidirectional. */
  "PF6": "18",
  /** Physical pin 19: PF7; bidirectional. */
  "PF7": "19",
  /** Physical pin 20: PF8; bidirectional. */
  "PF8": "20",
  /** Physical pin 21: PF9; bidirectional. */
  "PF9": "21",
  /** Physical pin 22: PF10; bidirectional. */
  "PF10": "22",
  /** Physical pin 23: PH0; bidirectional. */
  "PH0": "23",
  /** Physical pin 24: PH1; bidirectional. */
  "PH1": "24",
  /** Physical pin 25: NRST; input. */
  "NRST": "25",
  /** Physical pin 26: PC0; bidirectional. */
  "PC0": "26",
  /** Physical pin 27: PC1; bidirectional. */
  "PC1": "27",
  /** Physical pin 28: PC2; bidirectional. */
  "PC2": "28",
  /** Physical pin 29: PC3; bidirectional. */
  "PC3": "29",
  /** Physical pin 30: VDD; power_in. */
  "VDD_30": "30",
  /** Physical pin 31: VSSA; power_in. */
  "VSSA": "31",
  /** Physical pin 32: VREF+; input. */
  "VREF+": "32",
  /** Physical pin 33: VDDA; power_in. */
  "VDDA": "33",
  /** Physical pin 34: PA0; bidirectional. */
  "PA0": "34",
  /** Physical pin 35: PA1; bidirectional. */
  "PA1": "35",
  /** Physical pin 36: PA2; bidirectional. */
  "PA2": "36",
  /** Physical pin 37: PA3; bidirectional. */
  "PA3": "37",
  /** Physical pin 38: VSS; passive. */
  "VSS_38": "38",
  /** Physical pin 39: VDD; power_in. */
  "VDD_39": "39",
  /** Physical pin 40: PA4; bidirectional. */
  "PA4": "40",
  /** Physical pin 41: PA5; bidirectional. */
  "PA5": "41",
  /** Physical pin 42: PA6; bidirectional. */
  "PA6": "42",
  /** Physical pin 43: PA7; bidirectional. */
  "PA7": "43",
  /** Physical pin 44: PC4; bidirectional. */
  "PC4": "44",
  /** Physical pin 45: PC5; bidirectional. */
  "PC5": "45",
  /** Physical pin 46: PB0; bidirectional. */
  "PB0": "46",
  /** Physical pin 47: PB1; bidirectional. */
  "PB1": "47",
  /** Physical pin 48: PB2; bidirectional. */
  "PB2": "48",
  /** Physical pin 49: PF11; bidirectional. */
  "PF11": "49",
  /** Physical pin 50: PF12; bidirectional. */
  "PF12": "50",
  /** Physical pin 51: VSS; passive. */
  "VSS_51": "51",
  /** Physical pin 52: VDD; power_in. */
  "VDD_52": "52",
  /** Physical pin 53: PF13; bidirectional. */
  "PF13": "53",
  /** Physical pin 54: PF14; bidirectional. */
  "PF14": "54",
  /** Physical pin 55: PF15; bidirectional. */
  "PF15": "55",
  /** Physical pin 56: PG0; bidirectional. */
  "PG0": "56",
  /** Physical pin 57: PG1; bidirectional. */
  "PG1": "57",
  /** Physical pin 58: PE7; bidirectional. */
  "PE7": "58",
  /** Physical pin 59: PE8; bidirectional. */
  "PE8": "59",
  /** Physical pin 60: PE9; bidirectional. */
  "PE9": "60",
  /** Physical pin 61: VSS; passive. */
  "VSS_61": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: PE10; bidirectional. */
  "PE10": "63",
  /** Physical pin 64: PE11; bidirectional. */
  "PE11": "64",
  /** Physical pin 65: PE12; bidirectional. */
  "PE12": "65",
  /** Physical pin 66: PE13; bidirectional. */
  "PE13": "66",
  /** Physical pin 67: PE14; bidirectional. */
  "PE14": "67",
  /** Physical pin 68: PE15; bidirectional. */
  "PE15": "68",
  /** Physical pin 69: PB10; bidirectional. */
  "PB10": "69",
  /** Physical pin 70: PB11; bidirectional. */
  "PB11": "70",
  /** Physical pin 71: VCAP_1; power_out. */
  "VCAP_1": "71",
  /** Physical pin 72: VDD; power_in. */
  "VDD_72": "72",
  /** Physical pin 73: PB12; bidirectional. */
  "PB12": "73",
  /** Physical pin 74: PB13; bidirectional. */
  "PB13": "74",
  /** Physical pin 75: PB14; bidirectional. */
  "PB14": "75",
  /** Physical pin 76: PB15; bidirectional. */
  "PB15": "76",
  /** Physical pin 77: PD8; bidirectional. */
  "PD8": "77",
  /** Physical pin 78: PD9; bidirectional. */
  "PD9": "78",
  /** Physical pin 79: PD10; bidirectional. */
  "PD10": "79",
  /** Physical pin 80: PD11; bidirectional. */
  "PD11": "80",
  /** Physical pin 81: PD12; bidirectional. */
  "PD12": "81",
  /** Physical pin 82: PD13; bidirectional. */
  "PD13": "82",
  /** Physical pin 83: VSS; passive. */
  "VSS_83": "83",
  /** Physical pin 84: VDD; power_in. */
  "VDD_84": "84",
  /** Physical pin 85: PD14; bidirectional. */
  "PD14": "85",
  /** Physical pin 86: PD15; bidirectional. */
  "PD15": "86",
  /** Physical pin 87: PG2; bidirectional. */
  "PG2": "87",
  /** Physical pin 88: PG3; bidirectional. */
  "PG3": "88",
  /** Physical pin 89: PG4; bidirectional. */
  "PG4": "89",
  /** Physical pin 90: PG5; bidirectional. */
  "PG5": "90",
  /** Physical pin 91: PG6; bidirectional. */
  "PG6": "91",
  /** Physical pin 92: PG7; bidirectional. */
  "PG7": "92",
  /** Physical pin 93: PG8; bidirectional. */
  "PG8": "93",
  /** Physical pin 94: VSS; passive. */
  "VSS_94": "94",
  /** Physical pin 95: VDD; power_in. */
  "VDD_95": "95",
  /** Physical pin 96: PC6; bidirectional. */
  "PC6": "96",
  /** Physical pin 97: PC7; bidirectional. */
  "PC7": "97",
  /** Physical pin 98: PC8; bidirectional. */
  "PC8": "98",
  /** Physical pin 99: PC9; bidirectional. */
  "PC9": "99",
  /** Physical pin 100: PA8; bidirectional. */
  "PA8": "100",
  /** Physical pin 101: PA9; bidirectional. */
  "PA9": "101",
  /** Physical pin 102: PA10; bidirectional. */
  "PA10": "102",
  /** Physical pin 103: PA11; bidirectional. */
  "PA11": "103",
  /** Physical pin 104: PA12; bidirectional. */
  "PA12": "104",
  /** Physical pin 105: PA13; bidirectional. */
  "PA13": "105",
  /** Physical pin 106: VCAP_2; power_out. */
  "VCAP_2": "106",
  /** Physical pin 107: VSS; passive. */
  "VSS_107": "107",
  /** Physical pin 108: VDD; power_in. */
  "VDD_108": "108",
  /** Physical pin 109: PA14; bidirectional. */
  "PA14": "109",
  /** Physical pin 110: PA15; bidirectional. */
  "PA15": "110",
  /** Physical pin 111: PC10; bidirectional. */
  "PC10": "111",
  /** Physical pin 112: PC11; bidirectional. */
  "PC11": "112",
  /** Physical pin 113: PC12; bidirectional. */
  "PC12": "113",
  /** Physical pin 114: PD0; bidirectional. */
  "PD0": "114",
  /** Physical pin 115: PD1; bidirectional. */
  "PD1": "115",
  /** Physical pin 116: PD2; bidirectional. */
  "PD2": "116",
  /** Physical pin 117: PD3; bidirectional. */
  "PD3": "117",
  /** Physical pin 118: PD4; bidirectional. */
  "PD4": "118",
  /** Physical pin 119: PD5; bidirectional. */
  "PD5": "119",
  /** Physical pin 120: VSS; passive. */
  "VSS_120": "120",
  /** Physical pin 121: VDD; power_in. */
  "VDD_121": "121",
  /** Physical pin 122: PD6; bidirectional. */
  "PD6": "122",
  /** Physical pin 123: PD7; bidirectional. */
  "PD7": "123",
  /** Physical pin 124: PG9; bidirectional. */
  "PG9": "124",
  /** Physical pin 125: PG10; bidirectional. */
  "PG10": "125",
  /** Physical pin 126: PG11; bidirectional. */
  "PG11": "126",
  /** Physical pin 127: PG12; bidirectional. */
  "PG12": "127",
  /** Physical pin 128: PG13; bidirectional. */
  "PG13": "128",
  /** Physical pin 129: PG14; bidirectional. */
  "PG14": "129",
  /** Physical pin 130: VSS; passive. */
  "VSS_130": "130",
  /** Physical pin 131: VDD; power_in. */
  "VDD_131": "131",
  /** Physical pin 132: PG15; bidirectional. */
  "PG15": "132",
  /** Physical pin 133: PB3; bidirectional. */
  "PB3": "133",
  /** Physical pin 134: PB4; bidirectional. */
  "PB4": "134",
  /** Physical pin 135: PB5; bidirectional. */
  "PB5": "135",
  /** Physical pin 136: PB6; bidirectional. */
  "PB6": "136",
  /** Physical pin 137: PB7; bidirectional. */
  "PB7": "137",
  /** Physical pin 138: BOOT0; input. */
  "BOOT0": "138",
  /** Physical pin 139: PB8; bidirectional. */
  "PB8": "139",
  /** Physical pin 140: PB9; bidirectional. */
  "PB9": "140",
  /** Physical pin 141: PE0; bidirectional. */
  "PE0": "141",
  /** Physical pin 142: PE1; bidirectional. */
  "PE1": "142",
  /** Physical pin 143: RFU; no_connect. */
  "RFU": "143",
  /** Physical pin 144: VDD; power_in. */
  "VDD_144": "144",
}) {
  override schema = "MCU_ST_STM32F2:STM32F207ZCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 512KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 114 GPIO, LQFP144
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F207ZETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f207ze.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F207ZETx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: PF0; bidirectional. */
  "PF0": "10",
  /** Physical pin 11: PF1; bidirectional. */
  "PF1": "11",
  /** Physical pin 12: PF2; bidirectional. */
  "PF2": "12",
  /** Physical pin 13: PF3; bidirectional. */
  "PF3": "13",
  /** Physical pin 14: PF4; bidirectional. */
  "PF4": "14",
  /** Physical pin 15: PF5; bidirectional. */
  "PF5": "15",
  /** Physical pin 16: VSS; power_in. */
  "VSS_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: PF6; bidirectional. */
  "PF6": "18",
  /** Physical pin 19: PF7; bidirectional. */
  "PF7": "19",
  /** Physical pin 20: PF8; bidirectional. */
  "PF8": "20",
  /** Physical pin 21: PF9; bidirectional. */
  "PF9": "21",
  /** Physical pin 22: PF10; bidirectional. */
  "PF10": "22",
  /** Physical pin 23: PH0; bidirectional. */
  "PH0": "23",
  /** Physical pin 24: PH1; bidirectional. */
  "PH1": "24",
  /** Physical pin 25: NRST; input. */
  "NRST": "25",
  /** Physical pin 26: PC0; bidirectional. */
  "PC0": "26",
  /** Physical pin 27: PC1; bidirectional. */
  "PC1": "27",
  /** Physical pin 28: PC2; bidirectional. */
  "PC2": "28",
  /** Physical pin 29: PC3; bidirectional. */
  "PC3": "29",
  /** Physical pin 30: VDD; power_in. */
  "VDD_30": "30",
  /** Physical pin 31: VSSA; power_in. */
  "VSSA": "31",
  /** Physical pin 32: VREF+; input. */
  "VREF+": "32",
  /** Physical pin 33: VDDA; power_in. */
  "VDDA": "33",
  /** Physical pin 34: PA0; bidirectional. */
  "PA0": "34",
  /** Physical pin 35: PA1; bidirectional. */
  "PA1": "35",
  /** Physical pin 36: PA2; bidirectional. */
  "PA2": "36",
  /** Physical pin 37: PA3; bidirectional. */
  "PA3": "37",
  /** Physical pin 38: VSS; passive. */
  "VSS_38": "38",
  /** Physical pin 39: VDD; power_in. */
  "VDD_39": "39",
  /** Physical pin 40: PA4; bidirectional. */
  "PA4": "40",
  /** Physical pin 41: PA5; bidirectional. */
  "PA5": "41",
  /** Physical pin 42: PA6; bidirectional. */
  "PA6": "42",
  /** Physical pin 43: PA7; bidirectional. */
  "PA7": "43",
  /** Physical pin 44: PC4; bidirectional. */
  "PC4": "44",
  /** Physical pin 45: PC5; bidirectional. */
  "PC5": "45",
  /** Physical pin 46: PB0; bidirectional. */
  "PB0": "46",
  /** Physical pin 47: PB1; bidirectional. */
  "PB1": "47",
  /** Physical pin 48: PB2; bidirectional. */
  "PB2": "48",
  /** Physical pin 49: PF11; bidirectional. */
  "PF11": "49",
  /** Physical pin 50: PF12; bidirectional. */
  "PF12": "50",
  /** Physical pin 51: VSS; passive. */
  "VSS_51": "51",
  /** Physical pin 52: VDD; power_in. */
  "VDD_52": "52",
  /** Physical pin 53: PF13; bidirectional. */
  "PF13": "53",
  /** Physical pin 54: PF14; bidirectional. */
  "PF14": "54",
  /** Physical pin 55: PF15; bidirectional. */
  "PF15": "55",
  /** Physical pin 56: PG0; bidirectional. */
  "PG0": "56",
  /** Physical pin 57: PG1; bidirectional. */
  "PG1": "57",
  /** Physical pin 58: PE7; bidirectional. */
  "PE7": "58",
  /** Physical pin 59: PE8; bidirectional. */
  "PE8": "59",
  /** Physical pin 60: PE9; bidirectional. */
  "PE9": "60",
  /** Physical pin 61: VSS; passive. */
  "VSS_61": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: PE10; bidirectional. */
  "PE10": "63",
  /** Physical pin 64: PE11; bidirectional. */
  "PE11": "64",
  /** Physical pin 65: PE12; bidirectional. */
  "PE12": "65",
  /** Physical pin 66: PE13; bidirectional. */
  "PE13": "66",
  /** Physical pin 67: PE14; bidirectional. */
  "PE14": "67",
  /** Physical pin 68: PE15; bidirectional. */
  "PE15": "68",
  /** Physical pin 69: PB10; bidirectional. */
  "PB10": "69",
  /** Physical pin 70: PB11; bidirectional. */
  "PB11": "70",
  /** Physical pin 71: VCAP_1; power_out. */
  "VCAP_1": "71",
  /** Physical pin 72: VDD; power_in. */
  "VDD_72": "72",
  /** Physical pin 73: PB12; bidirectional. */
  "PB12": "73",
  /** Physical pin 74: PB13; bidirectional. */
  "PB13": "74",
  /** Physical pin 75: PB14; bidirectional. */
  "PB14": "75",
  /** Physical pin 76: PB15; bidirectional. */
  "PB15": "76",
  /** Physical pin 77: PD8; bidirectional. */
  "PD8": "77",
  /** Physical pin 78: PD9; bidirectional. */
  "PD9": "78",
  /** Physical pin 79: PD10; bidirectional. */
  "PD10": "79",
  /** Physical pin 80: PD11; bidirectional. */
  "PD11": "80",
  /** Physical pin 81: PD12; bidirectional. */
  "PD12": "81",
  /** Physical pin 82: PD13; bidirectional. */
  "PD13": "82",
  /** Physical pin 83: VSS; passive. */
  "VSS_83": "83",
  /** Physical pin 84: VDD; power_in. */
  "VDD_84": "84",
  /** Physical pin 85: PD14; bidirectional. */
  "PD14": "85",
  /** Physical pin 86: PD15; bidirectional. */
  "PD15": "86",
  /** Physical pin 87: PG2; bidirectional. */
  "PG2": "87",
  /** Physical pin 88: PG3; bidirectional. */
  "PG3": "88",
  /** Physical pin 89: PG4; bidirectional. */
  "PG4": "89",
  /** Physical pin 90: PG5; bidirectional. */
  "PG5": "90",
  /** Physical pin 91: PG6; bidirectional. */
  "PG6": "91",
  /** Physical pin 92: PG7; bidirectional. */
  "PG7": "92",
  /** Physical pin 93: PG8; bidirectional. */
  "PG8": "93",
  /** Physical pin 94: VSS; passive. */
  "VSS_94": "94",
  /** Physical pin 95: VDD; power_in. */
  "VDD_95": "95",
  /** Physical pin 96: PC6; bidirectional. */
  "PC6": "96",
  /** Physical pin 97: PC7; bidirectional. */
  "PC7": "97",
  /** Physical pin 98: PC8; bidirectional. */
  "PC8": "98",
  /** Physical pin 99: PC9; bidirectional. */
  "PC9": "99",
  /** Physical pin 100: PA8; bidirectional. */
  "PA8": "100",
  /** Physical pin 101: PA9; bidirectional. */
  "PA9": "101",
  /** Physical pin 102: PA10; bidirectional. */
  "PA10": "102",
  /** Physical pin 103: PA11; bidirectional. */
  "PA11": "103",
  /** Physical pin 104: PA12; bidirectional. */
  "PA12": "104",
  /** Physical pin 105: PA13; bidirectional. */
  "PA13": "105",
  /** Physical pin 106: VCAP_2; power_out. */
  "VCAP_2": "106",
  /** Physical pin 107: VSS; passive. */
  "VSS_107": "107",
  /** Physical pin 108: VDD; power_in. */
  "VDD_108": "108",
  /** Physical pin 109: PA14; bidirectional. */
  "PA14": "109",
  /** Physical pin 110: PA15; bidirectional. */
  "PA15": "110",
  /** Physical pin 111: PC10; bidirectional. */
  "PC10": "111",
  /** Physical pin 112: PC11; bidirectional. */
  "PC11": "112",
  /** Physical pin 113: PC12; bidirectional. */
  "PC12": "113",
  /** Physical pin 114: PD0; bidirectional. */
  "PD0": "114",
  /** Physical pin 115: PD1; bidirectional. */
  "PD1": "115",
  /** Physical pin 116: PD2; bidirectional. */
  "PD2": "116",
  /** Physical pin 117: PD3; bidirectional. */
  "PD3": "117",
  /** Physical pin 118: PD4; bidirectional. */
  "PD4": "118",
  /** Physical pin 119: PD5; bidirectional. */
  "PD5": "119",
  /** Physical pin 120: VSS; passive. */
  "VSS_120": "120",
  /** Physical pin 121: VDD; power_in. */
  "VDD_121": "121",
  /** Physical pin 122: PD6; bidirectional. */
  "PD6": "122",
  /** Physical pin 123: PD7; bidirectional. */
  "PD7": "123",
  /** Physical pin 124: PG9; bidirectional. */
  "PG9": "124",
  /** Physical pin 125: PG10; bidirectional. */
  "PG10": "125",
  /** Physical pin 126: PG11; bidirectional. */
  "PG11": "126",
  /** Physical pin 127: PG12; bidirectional. */
  "PG12": "127",
  /** Physical pin 128: PG13; bidirectional. */
  "PG13": "128",
  /** Physical pin 129: PG14; bidirectional. */
  "PG14": "129",
  /** Physical pin 130: VSS; passive. */
  "VSS_130": "130",
  /** Physical pin 131: VDD; power_in. */
  "VDD_131": "131",
  /** Physical pin 132: PG15; bidirectional. */
  "PG15": "132",
  /** Physical pin 133: PB3; bidirectional. */
  "PB3": "133",
  /** Physical pin 134: PB4; bidirectional. */
  "PB4": "134",
  /** Physical pin 135: PB5; bidirectional. */
  "PB5": "135",
  /** Physical pin 136: PB6; bidirectional. */
  "PB6": "136",
  /** Physical pin 137: PB7; bidirectional. */
  "PB7": "137",
  /** Physical pin 138: BOOT0; input. */
  "BOOT0": "138",
  /** Physical pin 139: PB8; bidirectional. */
  "PB8": "139",
  /** Physical pin 140: PB9; bidirectional. */
  "PB9": "140",
  /** Physical pin 141: PE0; bidirectional. */
  "PE0": "141",
  /** Physical pin 142: PE1; bidirectional. */
  "PE1": "142",
  /** Physical pin 143: RFU; no_connect. */
  "RFU": "143",
  /** Physical pin 144: VDD; power_in. */
  "VDD_144": "144",
}) {
  override schema = "MCU_ST_STM32F2:STM32F207ZETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 768KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 114 GPIO, LQFP144
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F207ZFTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f207zf.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F207ZFTx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: PF0; bidirectional. */
  "PF0": "10",
  /** Physical pin 11: PF1; bidirectional. */
  "PF1": "11",
  /** Physical pin 12: PF2; bidirectional. */
  "PF2": "12",
  /** Physical pin 13: PF3; bidirectional. */
  "PF3": "13",
  /** Physical pin 14: PF4; bidirectional. */
  "PF4": "14",
  /** Physical pin 15: PF5; bidirectional. */
  "PF5": "15",
  /** Physical pin 16: VSS; power_in. */
  "VSS_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: PF6; bidirectional. */
  "PF6": "18",
  /** Physical pin 19: PF7; bidirectional. */
  "PF7": "19",
  /** Physical pin 20: PF8; bidirectional. */
  "PF8": "20",
  /** Physical pin 21: PF9; bidirectional. */
  "PF9": "21",
  /** Physical pin 22: PF10; bidirectional. */
  "PF10": "22",
  /** Physical pin 23: PH0; bidirectional. */
  "PH0": "23",
  /** Physical pin 24: PH1; bidirectional. */
  "PH1": "24",
  /** Physical pin 25: NRST; input. */
  "NRST": "25",
  /** Physical pin 26: PC0; bidirectional. */
  "PC0": "26",
  /** Physical pin 27: PC1; bidirectional. */
  "PC1": "27",
  /** Physical pin 28: PC2; bidirectional. */
  "PC2": "28",
  /** Physical pin 29: PC3; bidirectional. */
  "PC3": "29",
  /** Physical pin 30: VDD; power_in. */
  "VDD_30": "30",
  /** Physical pin 31: VSSA; power_in. */
  "VSSA": "31",
  /** Physical pin 32: VREF+; input. */
  "VREF+": "32",
  /** Physical pin 33: VDDA; power_in. */
  "VDDA": "33",
  /** Physical pin 34: PA0; bidirectional. */
  "PA0": "34",
  /** Physical pin 35: PA1; bidirectional. */
  "PA1": "35",
  /** Physical pin 36: PA2; bidirectional. */
  "PA2": "36",
  /** Physical pin 37: PA3; bidirectional. */
  "PA3": "37",
  /** Physical pin 38: VSS; passive. */
  "VSS_38": "38",
  /** Physical pin 39: VDD; power_in. */
  "VDD_39": "39",
  /** Physical pin 40: PA4; bidirectional. */
  "PA4": "40",
  /** Physical pin 41: PA5; bidirectional. */
  "PA5": "41",
  /** Physical pin 42: PA6; bidirectional. */
  "PA6": "42",
  /** Physical pin 43: PA7; bidirectional. */
  "PA7": "43",
  /** Physical pin 44: PC4; bidirectional. */
  "PC4": "44",
  /** Physical pin 45: PC5; bidirectional. */
  "PC5": "45",
  /** Physical pin 46: PB0; bidirectional. */
  "PB0": "46",
  /** Physical pin 47: PB1; bidirectional. */
  "PB1": "47",
  /** Physical pin 48: PB2; bidirectional. */
  "PB2": "48",
  /** Physical pin 49: PF11; bidirectional. */
  "PF11": "49",
  /** Physical pin 50: PF12; bidirectional. */
  "PF12": "50",
  /** Physical pin 51: VSS; passive. */
  "VSS_51": "51",
  /** Physical pin 52: VDD; power_in. */
  "VDD_52": "52",
  /** Physical pin 53: PF13; bidirectional. */
  "PF13": "53",
  /** Physical pin 54: PF14; bidirectional. */
  "PF14": "54",
  /** Physical pin 55: PF15; bidirectional. */
  "PF15": "55",
  /** Physical pin 56: PG0; bidirectional. */
  "PG0": "56",
  /** Physical pin 57: PG1; bidirectional. */
  "PG1": "57",
  /** Physical pin 58: PE7; bidirectional. */
  "PE7": "58",
  /** Physical pin 59: PE8; bidirectional. */
  "PE8": "59",
  /** Physical pin 60: PE9; bidirectional. */
  "PE9": "60",
  /** Physical pin 61: VSS; passive. */
  "VSS_61": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: PE10; bidirectional. */
  "PE10": "63",
  /** Physical pin 64: PE11; bidirectional. */
  "PE11": "64",
  /** Physical pin 65: PE12; bidirectional. */
  "PE12": "65",
  /** Physical pin 66: PE13; bidirectional. */
  "PE13": "66",
  /** Physical pin 67: PE14; bidirectional. */
  "PE14": "67",
  /** Physical pin 68: PE15; bidirectional. */
  "PE15": "68",
  /** Physical pin 69: PB10; bidirectional. */
  "PB10": "69",
  /** Physical pin 70: PB11; bidirectional. */
  "PB11": "70",
  /** Physical pin 71: VCAP_1; power_out. */
  "VCAP_1": "71",
  /** Physical pin 72: VDD; power_in. */
  "VDD_72": "72",
  /** Physical pin 73: PB12; bidirectional. */
  "PB12": "73",
  /** Physical pin 74: PB13; bidirectional. */
  "PB13": "74",
  /** Physical pin 75: PB14; bidirectional. */
  "PB14": "75",
  /** Physical pin 76: PB15; bidirectional. */
  "PB15": "76",
  /** Physical pin 77: PD8; bidirectional. */
  "PD8": "77",
  /** Physical pin 78: PD9; bidirectional. */
  "PD9": "78",
  /** Physical pin 79: PD10; bidirectional. */
  "PD10": "79",
  /** Physical pin 80: PD11; bidirectional. */
  "PD11": "80",
  /** Physical pin 81: PD12; bidirectional. */
  "PD12": "81",
  /** Physical pin 82: PD13; bidirectional. */
  "PD13": "82",
  /** Physical pin 83: VSS; passive. */
  "VSS_83": "83",
  /** Physical pin 84: VDD; power_in. */
  "VDD_84": "84",
  /** Physical pin 85: PD14; bidirectional. */
  "PD14": "85",
  /** Physical pin 86: PD15; bidirectional. */
  "PD15": "86",
  /** Physical pin 87: PG2; bidirectional. */
  "PG2": "87",
  /** Physical pin 88: PG3; bidirectional. */
  "PG3": "88",
  /** Physical pin 89: PG4; bidirectional. */
  "PG4": "89",
  /** Physical pin 90: PG5; bidirectional. */
  "PG5": "90",
  /** Physical pin 91: PG6; bidirectional. */
  "PG6": "91",
  /** Physical pin 92: PG7; bidirectional. */
  "PG7": "92",
  /** Physical pin 93: PG8; bidirectional. */
  "PG8": "93",
  /** Physical pin 94: VSS; passive. */
  "VSS_94": "94",
  /** Physical pin 95: VDD; power_in. */
  "VDD_95": "95",
  /** Physical pin 96: PC6; bidirectional. */
  "PC6": "96",
  /** Physical pin 97: PC7; bidirectional. */
  "PC7": "97",
  /** Physical pin 98: PC8; bidirectional. */
  "PC8": "98",
  /** Physical pin 99: PC9; bidirectional. */
  "PC9": "99",
  /** Physical pin 100: PA8; bidirectional. */
  "PA8": "100",
  /** Physical pin 101: PA9; bidirectional. */
  "PA9": "101",
  /** Physical pin 102: PA10; bidirectional. */
  "PA10": "102",
  /** Physical pin 103: PA11; bidirectional. */
  "PA11": "103",
  /** Physical pin 104: PA12; bidirectional. */
  "PA12": "104",
  /** Physical pin 105: PA13; bidirectional. */
  "PA13": "105",
  /** Physical pin 106: VCAP_2; power_out. */
  "VCAP_2": "106",
  /** Physical pin 107: VSS; passive. */
  "VSS_107": "107",
  /** Physical pin 108: VDD; power_in. */
  "VDD_108": "108",
  /** Physical pin 109: PA14; bidirectional. */
  "PA14": "109",
  /** Physical pin 110: PA15; bidirectional. */
  "PA15": "110",
  /** Physical pin 111: PC10; bidirectional. */
  "PC10": "111",
  /** Physical pin 112: PC11; bidirectional. */
  "PC11": "112",
  /** Physical pin 113: PC12; bidirectional. */
  "PC12": "113",
  /** Physical pin 114: PD0; bidirectional. */
  "PD0": "114",
  /** Physical pin 115: PD1; bidirectional. */
  "PD1": "115",
  /** Physical pin 116: PD2; bidirectional. */
  "PD2": "116",
  /** Physical pin 117: PD3; bidirectional. */
  "PD3": "117",
  /** Physical pin 118: PD4; bidirectional. */
  "PD4": "118",
  /** Physical pin 119: PD5; bidirectional. */
  "PD5": "119",
  /** Physical pin 120: VSS; passive. */
  "VSS_120": "120",
  /** Physical pin 121: VDD; power_in. */
  "VDD_121": "121",
  /** Physical pin 122: PD6; bidirectional. */
  "PD6": "122",
  /** Physical pin 123: PD7; bidirectional. */
  "PD7": "123",
  /** Physical pin 124: PG9; bidirectional. */
  "PG9": "124",
  /** Physical pin 125: PG10; bidirectional. */
  "PG10": "125",
  /** Physical pin 126: PG11; bidirectional. */
  "PG11": "126",
  /** Physical pin 127: PG12; bidirectional. */
  "PG12": "127",
  /** Physical pin 128: PG13; bidirectional. */
  "PG13": "128",
  /** Physical pin 129: PG14; bidirectional. */
  "PG14": "129",
  /** Physical pin 130: VSS; passive. */
  "VSS_130": "130",
  /** Physical pin 131: VDD; power_in. */
  "VDD_131": "131",
  /** Physical pin 132: PG15; bidirectional. */
  "PG15": "132",
  /** Physical pin 133: PB3; bidirectional. */
  "PB3": "133",
  /** Physical pin 134: PB4; bidirectional. */
  "PB4": "134",
  /** Physical pin 135: PB5; bidirectional. */
  "PB5": "135",
  /** Physical pin 136: PB6; bidirectional. */
  "PB6": "136",
  /** Physical pin 137: PB7; bidirectional. */
  "PB7": "137",
  /** Physical pin 138: BOOT0; input. */
  "BOOT0": "138",
  /** Physical pin 139: PB8; bidirectional. */
  "PB8": "139",
  /** Physical pin 140: PB9; bidirectional. */
  "PB9": "140",
  /** Physical pin 141: PE0; bidirectional. */
  "PE0": "141",
  /** Physical pin 142: PE1; bidirectional. */
  "PE1": "142",
  /** Physical pin 143: RFU; no_connect. */
  "RFU": "143",
  /** Physical pin 144: VDD; power_in. */
  "VDD_144": "144",
}) {
  override schema = "MCU_ST_STM32F2:STM32F207ZFTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 114 GPIO, LQFP144
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F207ZGTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f207zg.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F207ZGTx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: PF0; bidirectional. */
  "PF0": "10",
  /** Physical pin 11: PF1; bidirectional. */
  "PF1": "11",
  /** Physical pin 12: PF2; bidirectional. */
  "PF2": "12",
  /** Physical pin 13: PF3; bidirectional. */
  "PF3": "13",
  /** Physical pin 14: PF4; bidirectional. */
  "PF4": "14",
  /** Physical pin 15: PF5; bidirectional. */
  "PF5": "15",
  /** Physical pin 16: VSS; power_in. */
  "VSS_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: PF6; bidirectional. */
  "PF6": "18",
  /** Physical pin 19: PF7; bidirectional. */
  "PF7": "19",
  /** Physical pin 20: PF8; bidirectional. */
  "PF8": "20",
  /** Physical pin 21: PF9; bidirectional. */
  "PF9": "21",
  /** Physical pin 22: PF10; bidirectional. */
  "PF10": "22",
  /** Physical pin 23: PH0; bidirectional. */
  "PH0": "23",
  /** Physical pin 24: PH1; bidirectional. */
  "PH1": "24",
  /** Physical pin 25: NRST; input. */
  "NRST": "25",
  /** Physical pin 26: PC0; bidirectional. */
  "PC0": "26",
  /** Physical pin 27: PC1; bidirectional. */
  "PC1": "27",
  /** Physical pin 28: PC2; bidirectional. */
  "PC2": "28",
  /** Physical pin 29: PC3; bidirectional. */
  "PC3": "29",
  /** Physical pin 30: VDD; power_in. */
  "VDD_30": "30",
  /** Physical pin 31: VSSA; power_in. */
  "VSSA": "31",
  /** Physical pin 32: VREF+; input. */
  "VREF+": "32",
  /** Physical pin 33: VDDA; power_in. */
  "VDDA": "33",
  /** Physical pin 34: PA0; bidirectional. */
  "PA0": "34",
  /** Physical pin 35: PA1; bidirectional. */
  "PA1": "35",
  /** Physical pin 36: PA2; bidirectional. */
  "PA2": "36",
  /** Physical pin 37: PA3; bidirectional. */
  "PA3": "37",
  /** Physical pin 38: VSS; passive. */
  "VSS_38": "38",
  /** Physical pin 39: VDD; power_in. */
  "VDD_39": "39",
  /** Physical pin 40: PA4; bidirectional. */
  "PA4": "40",
  /** Physical pin 41: PA5; bidirectional. */
  "PA5": "41",
  /** Physical pin 42: PA6; bidirectional. */
  "PA6": "42",
  /** Physical pin 43: PA7; bidirectional. */
  "PA7": "43",
  /** Physical pin 44: PC4; bidirectional. */
  "PC4": "44",
  /** Physical pin 45: PC5; bidirectional. */
  "PC5": "45",
  /** Physical pin 46: PB0; bidirectional. */
  "PB0": "46",
  /** Physical pin 47: PB1; bidirectional. */
  "PB1": "47",
  /** Physical pin 48: PB2; bidirectional. */
  "PB2": "48",
  /** Physical pin 49: PF11; bidirectional. */
  "PF11": "49",
  /** Physical pin 50: PF12; bidirectional. */
  "PF12": "50",
  /** Physical pin 51: VSS; passive. */
  "VSS_51": "51",
  /** Physical pin 52: VDD; power_in. */
  "VDD_52": "52",
  /** Physical pin 53: PF13; bidirectional. */
  "PF13": "53",
  /** Physical pin 54: PF14; bidirectional. */
  "PF14": "54",
  /** Physical pin 55: PF15; bidirectional. */
  "PF15": "55",
  /** Physical pin 56: PG0; bidirectional. */
  "PG0": "56",
  /** Physical pin 57: PG1; bidirectional. */
  "PG1": "57",
  /** Physical pin 58: PE7; bidirectional. */
  "PE7": "58",
  /** Physical pin 59: PE8; bidirectional. */
  "PE8": "59",
  /** Physical pin 60: PE9; bidirectional. */
  "PE9": "60",
  /** Physical pin 61: VSS; passive. */
  "VSS_61": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: PE10; bidirectional. */
  "PE10": "63",
  /** Physical pin 64: PE11; bidirectional. */
  "PE11": "64",
  /** Physical pin 65: PE12; bidirectional. */
  "PE12": "65",
  /** Physical pin 66: PE13; bidirectional. */
  "PE13": "66",
  /** Physical pin 67: PE14; bidirectional. */
  "PE14": "67",
  /** Physical pin 68: PE15; bidirectional. */
  "PE15": "68",
  /** Physical pin 69: PB10; bidirectional. */
  "PB10": "69",
  /** Physical pin 70: PB11; bidirectional. */
  "PB11": "70",
  /** Physical pin 71: VCAP_1; power_out. */
  "VCAP_1": "71",
  /** Physical pin 72: VDD; power_in. */
  "VDD_72": "72",
  /** Physical pin 73: PB12; bidirectional. */
  "PB12": "73",
  /** Physical pin 74: PB13; bidirectional. */
  "PB13": "74",
  /** Physical pin 75: PB14; bidirectional. */
  "PB14": "75",
  /** Physical pin 76: PB15; bidirectional. */
  "PB15": "76",
  /** Physical pin 77: PD8; bidirectional. */
  "PD8": "77",
  /** Physical pin 78: PD9; bidirectional. */
  "PD9": "78",
  /** Physical pin 79: PD10; bidirectional. */
  "PD10": "79",
  /** Physical pin 80: PD11; bidirectional. */
  "PD11": "80",
  /** Physical pin 81: PD12; bidirectional. */
  "PD12": "81",
  /** Physical pin 82: PD13; bidirectional. */
  "PD13": "82",
  /** Physical pin 83: VSS; passive. */
  "VSS_83": "83",
  /** Physical pin 84: VDD; power_in. */
  "VDD_84": "84",
  /** Physical pin 85: PD14; bidirectional. */
  "PD14": "85",
  /** Physical pin 86: PD15; bidirectional. */
  "PD15": "86",
  /** Physical pin 87: PG2; bidirectional. */
  "PG2": "87",
  /** Physical pin 88: PG3; bidirectional. */
  "PG3": "88",
  /** Physical pin 89: PG4; bidirectional. */
  "PG4": "89",
  /** Physical pin 90: PG5; bidirectional. */
  "PG5": "90",
  /** Physical pin 91: PG6; bidirectional. */
  "PG6": "91",
  /** Physical pin 92: PG7; bidirectional. */
  "PG7": "92",
  /** Physical pin 93: PG8; bidirectional. */
  "PG8": "93",
  /** Physical pin 94: VSS; passive. */
  "VSS_94": "94",
  /** Physical pin 95: VDD; power_in. */
  "VDD_95": "95",
  /** Physical pin 96: PC6; bidirectional. */
  "PC6": "96",
  /** Physical pin 97: PC7; bidirectional. */
  "PC7": "97",
  /** Physical pin 98: PC8; bidirectional. */
  "PC8": "98",
  /** Physical pin 99: PC9; bidirectional. */
  "PC9": "99",
  /** Physical pin 100: PA8; bidirectional. */
  "PA8": "100",
  /** Physical pin 101: PA9; bidirectional. */
  "PA9": "101",
  /** Physical pin 102: PA10; bidirectional. */
  "PA10": "102",
  /** Physical pin 103: PA11; bidirectional. */
  "PA11": "103",
  /** Physical pin 104: PA12; bidirectional. */
  "PA12": "104",
  /** Physical pin 105: PA13; bidirectional. */
  "PA13": "105",
  /** Physical pin 106: VCAP_2; power_out. */
  "VCAP_2": "106",
  /** Physical pin 107: VSS; passive. */
  "VSS_107": "107",
  /** Physical pin 108: VDD; power_in. */
  "VDD_108": "108",
  /** Physical pin 109: PA14; bidirectional. */
  "PA14": "109",
  /** Physical pin 110: PA15; bidirectional. */
  "PA15": "110",
  /** Physical pin 111: PC10; bidirectional. */
  "PC10": "111",
  /** Physical pin 112: PC11; bidirectional. */
  "PC11": "112",
  /** Physical pin 113: PC12; bidirectional. */
  "PC12": "113",
  /** Physical pin 114: PD0; bidirectional. */
  "PD0": "114",
  /** Physical pin 115: PD1; bidirectional. */
  "PD1": "115",
  /** Physical pin 116: PD2; bidirectional. */
  "PD2": "116",
  /** Physical pin 117: PD3; bidirectional. */
  "PD3": "117",
  /** Physical pin 118: PD4; bidirectional. */
  "PD4": "118",
  /** Physical pin 119: PD5; bidirectional. */
  "PD5": "119",
  /** Physical pin 120: VSS; passive. */
  "VSS_120": "120",
  /** Physical pin 121: VDD; power_in. */
  "VDD_121": "121",
  /** Physical pin 122: PD6; bidirectional. */
  "PD6": "122",
  /** Physical pin 123: PD7; bidirectional. */
  "PD7": "123",
  /** Physical pin 124: PG9; bidirectional. */
  "PG9": "124",
  /** Physical pin 125: PG10; bidirectional. */
  "PG10": "125",
  /** Physical pin 126: PG11; bidirectional. */
  "PG11": "126",
  /** Physical pin 127: PG12; bidirectional. */
  "PG12": "127",
  /** Physical pin 128: PG13; bidirectional. */
  "PG13": "128",
  /** Physical pin 129: PG14; bidirectional. */
  "PG14": "129",
  /** Physical pin 130: VSS; passive. */
  "VSS_130": "130",
  /** Physical pin 131: VDD; power_in. */
  "VDD_131": "131",
  /** Physical pin 132: PG15; bidirectional. */
  "PG15": "132",
  /** Physical pin 133: PB3; bidirectional. */
  "PB3": "133",
  /** Physical pin 134: PB4; bidirectional. */
  "PB4": "134",
  /** Physical pin 135: PB5; bidirectional. */
  "PB5": "135",
  /** Physical pin 136: PB6; bidirectional. */
  "PB6": "136",
  /** Physical pin 137: PB7; bidirectional. */
  "PB7": "137",
  /** Physical pin 138: BOOT0; input. */
  "BOOT0": "138",
  /** Physical pin 139: PB8; bidirectional. */
  "PB8": "139",
  /** Physical pin 140: PB9; bidirectional. */
  "PB9": "140",
  /** Physical pin 141: PE0; bidirectional. */
  "PE0": "141",
  /** Physical pin 142: PE1; bidirectional. */
  "PE1": "142",
  /** Physical pin 143: RFU; no_connect. */
  "RFU": "143",
  /** Physical pin 144: VDD; power_in. */
  "VDD_144": "144",
}) {
  override schema = "MCU_ST_STM32F2:STM32F207ZGTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 512-1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F215R_E-G_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f215re.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F215R_E_G_Tx extends Component.withPins({
  /** Physical pin 1: VBAT; power_in. */
  "VBAT": "1",
  /** Physical pin 2: PC13; bidirectional. */
  "PC13": "2",
  /** Physical pin 3: PC14; bidirectional. */
  "PC14": "3",
  /** Physical pin 4: PC15; bidirectional. */
  "PC15": "4",
  /** Physical pin 5: PH0; bidirectional. */
  "PH0": "5",
  /** Physical pin 6: PH1; bidirectional. */
  "PH1": "6",
  /** Physical pin 7: NRST; input. */
  "NRST": "7",
  /** Physical pin 8: PC0; bidirectional. */
  "PC0": "8",
  /** Physical pin 9: PC1; bidirectional. */
  "PC1": "9",
  /** Physical pin 10: PC2; bidirectional. */
  "PC2": "10",
  /** Physical pin 11: PC3; bidirectional. */
  "PC3": "11",
  /** Physical pin 12: VSSA; power_in. */
  "VSSA": "12",
  /** Physical pin 13: VDDA; power_in. */
  "VDDA": "13",
  /** Physical pin 14: PA0; bidirectional. */
  "PA0": "14",
  /** Physical pin 15: PA1; bidirectional. */
  "PA1": "15",
  /** Physical pin 16: PA2; bidirectional. */
  "PA2": "16",
  /** Physical pin 17: PA3; bidirectional. */
  "PA3": "17",
  /** Physical pin 18: VSS; power_in. */
  "VSS_18": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: PA4; bidirectional. */
  "PA4": "20",
  /** Physical pin 21: PA5; bidirectional. */
  "PA5": "21",
  /** Physical pin 22: PA6; bidirectional. */
  "PA6": "22",
  /** Physical pin 23: PA7; bidirectional. */
  "PA7": "23",
  /** Physical pin 24: PC4; bidirectional. */
  "PC4": "24",
  /** Physical pin 25: PC5; bidirectional. */
  "PC5": "25",
  /** Physical pin 26: PB0; bidirectional. */
  "PB0": "26",
  /** Physical pin 27: PB1; bidirectional. */
  "PB1": "27",
  /** Physical pin 28: PB2; bidirectional. */
  "PB2": "28",
  /** Physical pin 29: PB10; bidirectional. */
  "PB10": "29",
  /** Physical pin 30: PB11; bidirectional. */
  "PB11": "30",
  /** Physical pin 31: VCAP_1; power_out. */
  "VCAP_1": "31",
  /** Physical pin 32: VDD; power_in. */
  "VDD_32": "32",
  /** Physical pin 33: PB12; bidirectional. */
  "PB12": "33",
  /** Physical pin 34: PB13; bidirectional. */
  "PB13": "34",
  /** Physical pin 35: PB14; bidirectional. */
  "PB14": "35",
  /** Physical pin 36: PB15; bidirectional. */
  "PB15": "36",
  /** Physical pin 37: PC6; bidirectional. */
  "PC6": "37",
  /** Physical pin 38: PC7; bidirectional. */
  "PC7": "38",
  /** Physical pin 39: PC8; bidirectional. */
  "PC8": "39",
  /** Physical pin 40: PC9; bidirectional. */
  "PC9": "40",
  /** Physical pin 41: PA8; bidirectional. */
  "PA8": "41",
  /** Physical pin 42: PA9; bidirectional. */
  "PA9": "42",
  /** Physical pin 43: PA10; bidirectional. */
  "PA10": "43",
  /** Physical pin 44: PA11; bidirectional. */
  "PA11": "44",
  /** Physical pin 45: PA12; bidirectional. */
  "PA12": "45",
  /** Physical pin 46: PA13; bidirectional. */
  "PA13": "46",
  /** Physical pin 47: VCAP_2; power_out. */
  "VCAP_2": "47",
  /** Physical pin 48: VDD; power_in. */
  "VDD_48": "48",
  /** Physical pin 49: PA14; bidirectional. */
  "PA14": "49",
  /** Physical pin 50: PA15; bidirectional. */
  "PA15": "50",
  /** Physical pin 51: PC10; bidirectional. */
  "PC10": "51",
  /** Physical pin 52: PC11; bidirectional. */
  "PC11": "52",
  /** Physical pin 53: PC12; bidirectional. */
  "PC12": "53",
  /** Physical pin 54: PD2; bidirectional. */
  "PD2": "54",
  /** Physical pin 55: PB3; bidirectional. */
  "PB3": "55",
  /** Physical pin 56: PB4; bidirectional. */
  "PB4": "56",
  /** Physical pin 57: PB5; bidirectional. */
  "PB5": "57",
  /** Physical pin 58: PB6; bidirectional. */
  "PB6": "58",
  /** Physical pin 59: PB7; bidirectional. */
  "PB7": "59",
  /** Physical pin 60: BOOT0; input. */
  "BOOT0": "60",
  /** Physical pin 61: PB8; bidirectional. */
  "PB8": "61",
  /** Physical pin 62: PB9; bidirectional. */
  "PB9": "62",
  /** Physical pin 63: VSS; passive. */
  "VSS_63": "63",
  /** Physical pin 64: VDD; power_in. */
  "VDD_64": "64",
}) {
  override schema = "MCU_ST_STM32F2:STM32F215R_E-G_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 512KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F215RETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f215re.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F215RETx extends Component.withPins({
  /** Physical pin 1: VBAT; power_in. */
  "VBAT": "1",
  /** Physical pin 2: PC13; bidirectional. */
  "PC13": "2",
  /** Physical pin 3: PC14; bidirectional. */
  "PC14": "3",
  /** Physical pin 4: PC15; bidirectional. */
  "PC15": "4",
  /** Physical pin 5: PH0; bidirectional. */
  "PH0": "5",
  /** Physical pin 6: PH1; bidirectional. */
  "PH1": "6",
  /** Physical pin 7: NRST; input. */
  "NRST": "7",
  /** Physical pin 8: PC0; bidirectional. */
  "PC0": "8",
  /** Physical pin 9: PC1; bidirectional. */
  "PC1": "9",
  /** Physical pin 10: PC2; bidirectional. */
  "PC2": "10",
  /** Physical pin 11: PC3; bidirectional. */
  "PC3": "11",
  /** Physical pin 12: VSSA; power_in. */
  "VSSA": "12",
  /** Physical pin 13: VDDA; power_in. */
  "VDDA": "13",
  /** Physical pin 14: PA0; bidirectional. */
  "PA0": "14",
  /** Physical pin 15: PA1; bidirectional. */
  "PA1": "15",
  /** Physical pin 16: PA2; bidirectional. */
  "PA2": "16",
  /** Physical pin 17: PA3; bidirectional. */
  "PA3": "17",
  /** Physical pin 18: VSS; power_in. */
  "VSS_18": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: PA4; bidirectional. */
  "PA4": "20",
  /** Physical pin 21: PA5; bidirectional. */
  "PA5": "21",
  /** Physical pin 22: PA6; bidirectional. */
  "PA6": "22",
  /** Physical pin 23: PA7; bidirectional. */
  "PA7": "23",
  /** Physical pin 24: PC4; bidirectional. */
  "PC4": "24",
  /** Physical pin 25: PC5; bidirectional. */
  "PC5": "25",
  /** Physical pin 26: PB0; bidirectional. */
  "PB0": "26",
  /** Physical pin 27: PB1; bidirectional. */
  "PB1": "27",
  /** Physical pin 28: PB2; bidirectional. */
  "PB2": "28",
  /** Physical pin 29: PB10; bidirectional. */
  "PB10": "29",
  /** Physical pin 30: PB11; bidirectional. */
  "PB11": "30",
  /** Physical pin 31: VCAP_1; power_out. */
  "VCAP_1": "31",
  /** Physical pin 32: VDD; power_in. */
  "VDD_32": "32",
  /** Physical pin 33: PB12; bidirectional. */
  "PB12": "33",
  /** Physical pin 34: PB13; bidirectional. */
  "PB13": "34",
  /** Physical pin 35: PB14; bidirectional. */
  "PB14": "35",
  /** Physical pin 36: PB15; bidirectional. */
  "PB15": "36",
  /** Physical pin 37: PC6; bidirectional. */
  "PC6": "37",
  /** Physical pin 38: PC7; bidirectional. */
  "PC7": "38",
  /** Physical pin 39: PC8; bidirectional. */
  "PC8": "39",
  /** Physical pin 40: PC9; bidirectional. */
  "PC9": "40",
  /** Physical pin 41: PA8; bidirectional. */
  "PA8": "41",
  /** Physical pin 42: PA9; bidirectional. */
  "PA9": "42",
  /** Physical pin 43: PA10; bidirectional. */
  "PA10": "43",
  /** Physical pin 44: PA11; bidirectional. */
  "PA11": "44",
  /** Physical pin 45: PA12; bidirectional. */
  "PA12": "45",
  /** Physical pin 46: PA13; bidirectional. */
  "PA13": "46",
  /** Physical pin 47: VCAP_2; power_out. */
  "VCAP_2": "47",
  /** Physical pin 48: VDD; power_in. */
  "VDD_48": "48",
  /** Physical pin 49: PA14; bidirectional. */
  "PA14": "49",
  /** Physical pin 50: PA15; bidirectional. */
  "PA15": "50",
  /** Physical pin 51: PC10; bidirectional. */
  "PC10": "51",
  /** Physical pin 52: PC11; bidirectional. */
  "PC11": "52",
  /** Physical pin 53: PC12; bidirectional. */
  "PC12": "53",
  /** Physical pin 54: PD2; bidirectional. */
  "PD2": "54",
  /** Physical pin 55: PB3; bidirectional. */
  "PB3": "55",
  /** Physical pin 56: PB4; bidirectional. */
  "PB4": "56",
  /** Physical pin 57: PB5; bidirectional. */
  "PB5": "57",
  /** Physical pin 58: PB6; bidirectional. */
  "PB6": "58",
  /** Physical pin 59: PB7; bidirectional. */
  "PB7": "59",
  /** Physical pin 60: BOOT0; input. */
  "BOOT0": "60",
  /** Physical pin 61: PB8; bidirectional. */
  "PB8": "61",
  /** Physical pin 62: PB9; bidirectional. */
  "PB9": "62",
  /** Physical pin 63: VSS; passive. */
  "VSS_63": "63",
  /** Physical pin 64: VDD; power_in. */
  "VDD_64": "64",
}) {
  override schema = "MCU_ST_STM32F2:STM32F215RETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 51 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F215RGTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f215rg.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F215RGTx extends Component.withPins({
  /** Physical pin 1: VBAT; power_in. */
  "VBAT": "1",
  /** Physical pin 2: PC13; bidirectional. */
  "PC13": "2",
  /** Physical pin 3: PC14; bidirectional. */
  "PC14": "3",
  /** Physical pin 4: PC15; bidirectional. */
  "PC15": "4",
  /** Physical pin 5: PH0; bidirectional. */
  "PH0": "5",
  /** Physical pin 6: PH1; bidirectional. */
  "PH1": "6",
  /** Physical pin 7: NRST; input. */
  "NRST": "7",
  /** Physical pin 8: PC0; bidirectional. */
  "PC0": "8",
  /** Physical pin 9: PC1; bidirectional. */
  "PC1": "9",
  /** Physical pin 10: PC2; bidirectional. */
  "PC2": "10",
  /** Physical pin 11: PC3; bidirectional. */
  "PC3": "11",
  /** Physical pin 12: VSSA; power_in. */
  "VSSA": "12",
  /** Physical pin 13: VDDA; power_in. */
  "VDDA": "13",
  /** Physical pin 14: PA0; bidirectional. */
  "PA0": "14",
  /** Physical pin 15: PA1; bidirectional. */
  "PA1": "15",
  /** Physical pin 16: PA2; bidirectional. */
  "PA2": "16",
  /** Physical pin 17: PA3; bidirectional. */
  "PA3": "17",
  /** Physical pin 18: VSS; power_in. */
  "VSS_18": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: PA4; bidirectional. */
  "PA4": "20",
  /** Physical pin 21: PA5; bidirectional. */
  "PA5": "21",
  /** Physical pin 22: PA6; bidirectional. */
  "PA6": "22",
  /** Physical pin 23: PA7; bidirectional. */
  "PA7": "23",
  /** Physical pin 24: PC4; bidirectional. */
  "PC4": "24",
  /** Physical pin 25: PC5; bidirectional. */
  "PC5": "25",
  /** Physical pin 26: PB0; bidirectional. */
  "PB0": "26",
  /** Physical pin 27: PB1; bidirectional. */
  "PB1": "27",
  /** Physical pin 28: PB2; bidirectional. */
  "PB2": "28",
  /** Physical pin 29: PB10; bidirectional. */
  "PB10": "29",
  /** Physical pin 30: PB11; bidirectional. */
  "PB11": "30",
  /** Physical pin 31: VCAP_1; power_out. */
  "VCAP_1": "31",
  /** Physical pin 32: VDD; power_in. */
  "VDD_32": "32",
  /** Physical pin 33: PB12; bidirectional. */
  "PB12": "33",
  /** Physical pin 34: PB13; bidirectional. */
  "PB13": "34",
  /** Physical pin 35: PB14; bidirectional. */
  "PB14": "35",
  /** Physical pin 36: PB15; bidirectional. */
  "PB15": "36",
  /** Physical pin 37: PC6; bidirectional. */
  "PC6": "37",
  /** Physical pin 38: PC7; bidirectional. */
  "PC7": "38",
  /** Physical pin 39: PC8; bidirectional. */
  "PC8": "39",
  /** Physical pin 40: PC9; bidirectional. */
  "PC9": "40",
  /** Physical pin 41: PA8; bidirectional. */
  "PA8": "41",
  /** Physical pin 42: PA9; bidirectional. */
  "PA9": "42",
  /** Physical pin 43: PA10; bidirectional. */
  "PA10": "43",
  /** Physical pin 44: PA11; bidirectional. */
  "PA11": "44",
  /** Physical pin 45: PA12; bidirectional. */
  "PA12": "45",
  /** Physical pin 46: PA13; bidirectional. */
  "PA13": "46",
  /** Physical pin 47: VCAP_2; power_out. */
  "VCAP_2": "47",
  /** Physical pin 48: VDD; power_in. */
  "VDD_48": "48",
  /** Physical pin 49: PA14; bidirectional. */
  "PA14": "49",
  /** Physical pin 50: PA15; bidirectional. */
  "PA15": "50",
  /** Physical pin 51: PC10; bidirectional. */
  "PC10": "51",
  /** Physical pin 52: PC11; bidirectional. */
  "PC11": "52",
  /** Physical pin 53: PC12; bidirectional. */
  "PC12": "53",
  /** Physical pin 54: PD2; bidirectional. */
  "PD2": "54",
  /** Physical pin 55: PB3; bidirectional. */
  "PB3": "55",
  /** Physical pin 56: PB4; bidirectional. */
  "PB4": "56",
  /** Physical pin 57: PB5; bidirectional. */
  "PB5": "57",
  /** Physical pin 58: PB6; bidirectional. */
  "PB6": "58",
  /** Physical pin 59: PB7; bidirectional. */
  "PB7": "59",
  /** Physical pin 60: BOOT0; input. */
  "BOOT0": "60",
  /** Physical pin 61: PB8; bidirectional. */
  "PB8": "61",
  /** Physical pin 62: PB9; bidirectional. */
  "PB9": "62",
  /** Physical pin 63: VSS; passive. */
  "VSS_63": "63",
  /** Physical pin 64: VDD; power_in. */
  "VDD_64": "64",
}) {
  override schema = "MCU_ST_STM32F2:STM32F215RGTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 512-1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 82 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F215V_E-G_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f215ve.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F215V_E_G_Tx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: PH0; bidirectional. */
  "PH0": "12",
  /** Physical pin 13: PH1; bidirectional. */
  "PH1": "13",
  /** Physical pin 14: NRST; input. */
  "NRST": "14",
  /** Physical pin 15: PC0; bidirectional. */
  "PC0": "15",
  /** Physical pin 16: PC1; bidirectional. */
  "PC1": "16",
  /** Physical pin 17: PC2; bidirectional. */
  "PC2": "17",
  /** Physical pin 18: PC3; bidirectional. */
  "PC3": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: VSSA; power_in. */
  "VSSA": "20",
  /** Physical pin 21: VREF+; input. */
  "VREF+": "21",
  /** Physical pin 22: VDDA; power_in. */
  "VDDA": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: PA1; bidirectional. */
  "PA1": "24",
  /** Physical pin 25: PA2; bidirectional. */
  "PA2": "25",
  /** Physical pin 26: PA3; bidirectional. */
  "PA3": "26",
  /** Physical pin 27: VSS; passive. */
  "VSS_27": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: PA4; bidirectional. */
  "PA4": "29",
  /** Physical pin 30: PA5; bidirectional. */
  "PA5": "30",
  /** Physical pin 31: PA6; bidirectional. */
  "PA6": "31",
  /** Physical pin 32: PA7; bidirectional. */
  "PA7": "32",
  /** Physical pin 33: PC4; bidirectional. */
  "PC4": "33",
  /** Physical pin 34: PC5; bidirectional. */
  "PC5": "34",
  /** Physical pin 35: PB0; bidirectional. */
  "PB0": "35",
  /** Physical pin 36: PB1; bidirectional. */
  "PB1": "36",
  /** Physical pin 37: PB2; bidirectional. */
  "PB2": "37",
  /** Physical pin 38: PE7; bidirectional. */
  "PE7": "38",
  /** Physical pin 39: PE8; bidirectional. */
  "PE8": "39",
  /** Physical pin 40: PE9; bidirectional. */
  "PE9": "40",
  /** Physical pin 41: PE10; bidirectional. */
  "PE10": "41",
  /** Physical pin 42: PE11; bidirectional. */
  "PE11": "42",
  /** Physical pin 43: PE12; bidirectional. */
  "PE12": "43",
  /** Physical pin 44: PE13; bidirectional. */
  "PE13": "44",
  /** Physical pin 45: PE14; bidirectional. */
  "PE14": "45",
  /** Physical pin 46: PE15; bidirectional. */
  "PE15": "46",
  /** Physical pin 47: PB10; bidirectional. */
  "PB10": "47",
  /** Physical pin 48: PB11; bidirectional. */
  "PB11": "48",
  /** Physical pin 49: VCAP_1; power_out. */
  "VCAP_1": "49",
  /** Physical pin 50: VDD; power_in. */
  "VDD_50": "50",
  /** Physical pin 51: PB12; bidirectional. */
  "PB12": "51",
  /** Physical pin 52: PB13; bidirectional. */
  "PB13": "52",
  /** Physical pin 53: PB14; bidirectional. */
  "PB14": "53",
  /** Physical pin 54: PB15; bidirectional. */
  "PB15": "54",
  /** Physical pin 55: PD8; bidirectional. */
  "PD8": "55",
  /** Physical pin 56: PD9; bidirectional. */
  "PD9": "56",
  /** Physical pin 57: PD10; bidirectional. */
  "PD10": "57",
  /** Physical pin 58: PD11; bidirectional. */
  "PD11": "58",
  /** Physical pin 59: PD12; bidirectional. */
  "PD12": "59",
  /** Physical pin 60: PD13; bidirectional. */
  "PD13": "60",
  /** Physical pin 61: PD14; bidirectional. */
  "PD14": "61",
  /** Physical pin 62: PD15; bidirectional. */
  "PD15": "62",
  /** Physical pin 63: PC6; bidirectional. */
  "PC6": "63",
  /** Physical pin 64: PC7; bidirectional. */
  "PC7": "64",
  /** Physical pin 65: PC8; bidirectional. */
  "PC8": "65",
  /** Physical pin 66: PC9; bidirectional. */
  "PC9": "66",
  /** Physical pin 67: PA8; bidirectional. */
  "PA8": "67",
  /** Physical pin 68: PA9; bidirectional. */
  "PA9": "68",
  /** Physical pin 69: PA10; bidirectional. */
  "PA10": "69",
  /** Physical pin 70: PA11; bidirectional. */
  "PA11": "70",
  /** Physical pin 71: PA12; bidirectional. */
  "PA12": "71",
  /** Physical pin 72: PA13; bidirectional. */
  "PA13": "72",
  /** Physical pin 73: VCAP_2; power_out. */
  "VCAP_2": "73",
  /** Physical pin 74: VSS; passive. */
  "VSS_74": "74",
  /** Physical pin 75: VDD; power_in. */
  "VDD_75": "75",
  /** Physical pin 76: PA14; bidirectional. */
  "PA14": "76",
  /** Physical pin 77: PA15; bidirectional. */
  "PA15": "77",
  /** Physical pin 78: PC10; bidirectional. */
  "PC10": "78",
  /** Physical pin 79: PC11; bidirectional. */
  "PC11": "79",
  /** Physical pin 80: PC12; bidirectional. */
  "PC12": "80",
  /** Physical pin 81: PD0; bidirectional. */
  "PD0": "81",
  /** Physical pin 82: PD1; bidirectional. */
  "PD1": "82",
  /** Physical pin 83: PD2; bidirectional. */
  "PD2": "83",
  /** Physical pin 84: PD3; bidirectional. */
  "PD3": "84",
  /** Physical pin 85: PD4; bidirectional. */
  "PD4": "85",
  /** Physical pin 86: PD5; bidirectional. */
  "PD5": "86",
  /** Physical pin 87: PD6; bidirectional. */
  "PD6": "87",
  /** Physical pin 88: PD7; bidirectional. */
  "PD7": "88",
  /** Physical pin 89: PB3; bidirectional. */
  "PB3": "89",
  /** Physical pin 90: PB4; bidirectional. */
  "PB4": "90",
  /** Physical pin 91: PB5; bidirectional. */
  "PB5": "91",
  /** Physical pin 92: PB6; bidirectional. */
  "PB6": "92",
  /** Physical pin 93: PB7; bidirectional. */
  "PB7": "93",
  /** Physical pin 94: BOOT0; input. */
  "BOOT0": "94",
  /** Physical pin 95: PB8; bidirectional. */
  "PB8": "95",
  /** Physical pin 96: PB9; bidirectional. */
  "PB9": "96",
  /** Physical pin 97: PE0; bidirectional. */
  "PE0": "97",
  /** Physical pin 98: PE1; bidirectional. */
  "PE1": "98",
  /** Physical pin 99: RFU; no_connect. */
  "RFU": "99",
  /** Physical pin 100: VDD; power_in. */
  "VDD_100": "100",
}) {
  override schema = "MCU_ST_STM32F2:STM32F215V_E-G_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 512KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 82 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F215VETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f215ve.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F215VETx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: PH0; bidirectional. */
  "PH0": "12",
  /** Physical pin 13: PH1; bidirectional. */
  "PH1": "13",
  /** Physical pin 14: NRST; input. */
  "NRST": "14",
  /** Physical pin 15: PC0; bidirectional. */
  "PC0": "15",
  /** Physical pin 16: PC1; bidirectional. */
  "PC1": "16",
  /** Physical pin 17: PC2; bidirectional. */
  "PC2": "17",
  /** Physical pin 18: PC3; bidirectional. */
  "PC3": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: VSSA; power_in. */
  "VSSA": "20",
  /** Physical pin 21: VREF+; input. */
  "VREF+": "21",
  /** Physical pin 22: VDDA; power_in. */
  "VDDA": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: PA1; bidirectional. */
  "PA1": "24",
  /** Physical pin 25: PA2; bidirectional. */
  "PA2": "25",
  /** Physical pin 26: PA3; bidirectional. */
  "PA3": "26",
  /** Physical pin 27: VSS; passive. */
  "VSS_27": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: PA4; bidirectional. */
  "PA4": "29",
  /** Physical pin 30: PA5; bidirectional. */
  "PA5": "30",
  /** Physical pin 31: PA6; bidirectional. */
  "PA6": "31",
  /** Physical pin 32: PA7; bidirectional. */
  "PA7": "32",
  /** Physical pin 33: PC4; bidirectional. */
  "PC4": "33",
  /** Physical pin 34: PC5; bidirectional. */
  "PC5": "34",
  /** Physical pin 35: PB0; bidirectional. */
  "PB0": "35",
  /** Physical pin 36: PB1; bidirectional. */
  "PB1": "36",
  /** Physical pin 37: PB2; bidirectional. */
  "PB2": "37",
  /** Physical pin 38: PE7; bidirectional. */
  "PE7": "38",
  /** Physical pin 39: PE8; bidirectional. */
  "PE8": "39",
  /** Physical pin 40: PE9; bidirectional. */
  "PE9": "40",
  /** Physical pin 41: PE10; bidirectional. */
  "PE10": "41",
  /** Physical pin 42: PE11; bidirectional. */
  "PE11": "42",
  /** Physical pin 43: PE12; bidirectional. */
  "PE12": "43",
  /** Physical pin 44: PE13; bidirectional. */
  "PE13": "44",
  /** Physical pin 45: PE14; bidirectional. */
  "PE14": "45",
  /** Physical pin 46: PE15; bidirectional. */
  "PE15": "46",
  /** Physical pin 47: PB10; bidirectional. */
  "PB10": "47",
  /** Physical pin 48: PB11; bidirectional. */
  "PB11": "48",
  /** Physical pin 49: VCAP_1; power_out. */
  "VCAP_1": "49",
  /** Physical pin 50: VDD; power_in. */
  "VDD_50": "50",
  /** Physical pin 51: PB12; bidirectional. */
  "PB12": "51",
  /** Physical pin 52: PB13; bidirectional. */
  "PB13": "52",
  /** Physical pin 53: PB14; bidirectional. */
  "PB14": "53",
  /** Physical pin 54: PB15; bidirectional. */
  "PB15": "54",
  /** Physical pin 55: PD8; bidirectional. */
  "PD8": "55",
  /** Physical pin 56: PD9; bidirectional. */
  "PD9": "56",
  /** Physical pin 57: PD10; bidirectional. */
  "PD10": "57",
  /** Physical pin 58: PD11; bidirectional. */
  "PD11": "58",
  /** Physical pin 59: PD12; bidirectional. */
  "PD12": "59",
  /** Physical pin 60: PD13; bidirectional. */
  "PD13": "60",
  /** Physical pin 61: PD14; bidirectional. */
  "PD14": "61",
  /** Physical pin 62: PD15; bidirectional. */
  "PD15": "62",
  /** Physical pin 63: PC6; bidirectional. */
  "PC6": "63",
  /** Physical pin 64: PC7; bidirectional. */
  "PC7": "64",
  /** Physical pin 65: PC8; bidirectional. */
  "PC8": "65",
  /** Physical pin 66: PC9; bidirectional. */
  "PC9": "66",
  /** Physical pin 67: PA8; bidirectional. */
  "PA8": "67",
  /** Physical pin 68: PA9; bidirectional. */
  "PA9": "68",
  /** Physical pin 69: PA10; bidirectional. */
  "PA10": "69",
  /** Physical pin 70: PA11; bidirectional. */
  "PA11": "70",
  /** Physical pin 71: PA12; bidirectional. */
  "PA12": "71",
  /** Physical pin 72: PA13; bidirectional. */
  "PA13": "72",
  /** Physical pin 73: VCAP_2; power_out. */
  "VCAP_2": "73",
  /** Physical pin 74: VSS; passive. */
  "VSS_74": "74",
  /** Physical pin 75: VDD; power_in. */
  "VDD_75": "75",
  /** Physical pin 76: PA14; bidirectional. */
  "PA14": "76",
  /** Physical pin 77: PA15; bidirectional. */
  "PA15": "77",
  /** Physical pin 78: PC10; bidirectional. */
  "PC10": "78",
  /** Physical pin 79: PC11; bidirectional. */
  "PC11": "79",
  /** Physical pin 80: PC12; bidirectional. */
  "PC12": "80",
  /** Physical pin 81: PD0; bidirectional. */
  "PD0": "81",
  /** Physical pin 82: PD1; bidirectional. */
  "PD1": "82",
  /** Physical pin 83: PD2; bidirectional. */
  "PD2": "83",
  /** Physical pin 84: PD3; bidirectional. */
  "PD3": "84",
  /** Physical pin 85: PD4; bidirectional. */
  "PD4": "85",
  /** Physical pin 86: PD5; bidirectional. */
  "PD5": "86",
  /** Physical pin 87: PD6; bidirectional. */
  "PD6": "87",
  /** Physical pin 88: PD7; bidirectional. */
  "PD7": "88",
  /** Physical pin 89: PB3; bidirectional. */
  "PB3": "89",
  /** Physical pin 90: PB4; bidirectional. */
  "PB4": "90",
  /** Physical pin 91: PB5; bidirectional. */
  "PB5": "91",
  /** Physical pin 92: PB6; bidirectional. */
  "PB6": "92",
  /** Physical pin 93: PB7; bidirectional. */
  "PB7": "93",
  /** Physical pin 94: BOOT0; input. */
  "BOOT0": "94",
  /** Physical pin 95: PB8; bidirectional. */
  "PB8": "95",
  /** Physical pin 96: PB9; bidirectional. */
  "PB9": "96",
  /** Physical pin 97: PE0; bidirectional. */
  "PE0": "97",
  /** Physical pin 98: PE1; bidirectional. */
  "PE1": "98",
  /** Physical pin 99: RFU; no_connect. */
  "RFU": "99",
  /** Physical pin 100: VDD; power_in. */
  "VDD_100": "100",
}) {
  override schema = "MCU_ST_STM32F2:STM32F215VETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 82 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F215VGTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f215vg.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F215VGTx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: PH0; bidirectional. */
  "PH0": "12",
  /** Physical pin 13: PH1; bidirectional. */
  "PH1": "13",
  /** Physical pin 14: NRST; input. */
  "NRST": "14",
  /** Physical pin 15: PC0; bidirectional. */
  "PC0": "15",
  /** Physical pin 16: PC1; bidirectional. */
  "PC1": "16",
  /** Physical pin 17: PC2; bidirectional. */
  "PC2": "17",
  /** Physical pin 18: PC3; bidirectional. */
  "PC3": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: VSSA; power_in. */
  "VSSA": "20",
  /** Physical pin 21: VREF+; input. */
  "VREF+": "21",
  /** Physical pin 22: VDDA; power_in. */
  "VDDA": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: PA1; bidirectional. */
  "PA1": "24",
  /** Physical pin 25: PA2; bidirectional. */
  "PA2": "25",
  /** Physical pin 26: PA3; bidirectional. */
  "PA3": "26",
  /** Physical pin 27: VSS; passive. */
  "VSS_27": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: PA4; bidirectional. */
  "PA4": "29",
  /** Physical pin 30: PA5; bidirectional. */
  "PA5": "30",
  /** Physical pin 31: PA6; bidirectional. */
  "PA6": "31",
  /** Physical pin 32: PA7; bidirectional. */
  "PA7": "32",
  /** Physical pin 33: PC4; bidirectional. */
  "PC4": "33",
  /** Physical pin 34: PC5; bidirectional. */
  "PC5": "34",
  /** Physical pin 35: PB0; bidirectional. */
  "PB0": "35",
  /** Physical pin 36: PB1; bidirectional. */
  "PB1": "36",
  /** Physical pin 37: PB2; bidirectional. */
  "PB2": "37",
  /** Physical pin 38: PE7; bidirectional. */
  "PE7": "38",
  /** Physical pin 39: PE8; bidirectional. */
  "PE8": "39",
  /** Physical pin 40: PE9; bidirectional. */
  "PE9": "40",
  /** Physical pin 41: PE10; bidirectional. */
  "PE10": "41",
  /** Physical pin 42: PE11; bidirectional. */
  "PE11": "42",
  /** Physical pin 43: PE12; bidirectional. */
  "PE12": "43",
  /** Physical pin 44: PE13; bidirectional. */
  "PE13": "44",
  /** Physical pin 45: PE14; bidirectional. */
  "PE14": "45",
  /** Physical pin 46: PE15; bidirectional. */
  "PE15": "46",
  /** Physical pin 47: PB10; bidirectional. */
  "PB10": "47",
  /** Physical pin 48: PB11; bidirectional. */
  "PB11": "48",
  /** Physical pin 49: VCAP_1; power_out. */
  "VCAP_1": "49",
  /** Physical pin 50: VDD; power_in. */
  "VDD_50": "50",
  /** Physical pin 51: PB12; bidirectional. */
  "PB12": "51",
  /** Physical pin 52: PB13; bidirectional. */
  "PB13": "52",
  /** Physical pin 53: PB14; bidirectional. */
  "PB14": "53",
  /** Physical pin 54: PB15; bidirectional. */
  "PB15": "54",
  /** Physical pin 55: PD8; bidirectional. */
  "PD8": "55",
  /** Physical pin 56: PD9; bidirectional. */
  "PD9": "56",
  /** Physical pin 57: PD10; bidirectional. */
  "PD10": "57",
  /** Physical pin 58: PD11; bidirectional. */
  "PD11": "58",
  /** Physical pin 59: PD12; bidirectional. */
  "PD12": "59",
  /** Physical pin 60: PD13; bidirectional. */
  "PD13": "60",
  /** Physical pin 61: PD14; bidirectional. */
  "PD14": "61",
  /** Physical pin 62: PD15; bidirectional. */
  "PD15": "62",
  /** Physical pin 63: PC6; bidirectional. */
  "PC6": "63",
  /** Physical pin 64: PC7; bidirectional. */
  "PC7": "64",
  /** Physical pin 65: PC8; bidirectional. */
  "PC8": "65",
  /** Physical pin 66: PC9; bidirectional. */
  "PC9": "66",
  /** Physical pin 67: PA8; bidirectional. */
  "PA8": "67",
  /** Physical pin 68: PA9; bidirectional. */
  "PA9": "68",
  /** Physical pin 69: PA10; bidirectional. */
  "PA10": "69",
  /** Physical pin 70: PA11; bidirectional. */
  "PA11": "70",
  /** Physical pin 71: PA12; bidirectional. */
  "PA12": "71",
  /** Physical pin 72: PA13; bidirectional. */
  "PA13": "72",
  /** Physical pin 73: VCAP_2; power_out. */
  "VCAP_2": "73",
  /** Physical pin 74: VSS; passive. */
  "VSS_74": "74",
  /** Physical pin 75: VDD; power_in. */
  "VDD_75": "75",
  /** Physical pin 76: PA14; bidirectional. */
  "PA14": "76",
  /** Physical pin 77: PA15; bidirectional. */
  "PA15": "77",
  /** Physical pin 78: PC10; bidirectional. */
  "PC10": "78",
  /** Physical pin 79: PC11; bidirectional. */
  "PC11": "79",
  /** Physical pin 80: PC12; bidirectional. */
  "PC12": "80",
  /** Physical pin 81: PD0; bidirectional. */
  "PD0": "81",
  /** Physical pin 82: PD1; bidirectional. */
  "PD1": "82",
  /** Physical pin 83: PD2; bidirectional. */
  "PD2": "83",
  /** Physical pin 84: PD3; bidirectional. */
  "PD3": "84",
  /** Physical pin 85: PD4; bidirectional. */
  "PD4": "85",
  /** Physical pin 86: PD5; bidirectional. */
  "PD5": "86",
  /** Physical pin 87: PD6; bidirectional. */
  "PD6": "87",
  /** Physical pin 88: PD7; bidirectional. */
  "PD7": "88",
  /** Physical pin 89: PB3; bidirectional. */
  "PB3": "89",
  /** Physical pin 90: PB4; bidirectional. */
  "PB4": "90",
  /** Physical pin 91: PB5; bidirectional. */
  "PB5": "91",
  /** Physical pin 92: PB6; bidirectional. */
  "PB6": "92",
  /** Physical pin 93: PB7; bidirectional. */
  "PB7": "93",
  /** Physical pin 94: BOOT0; input. */
  "BOOT0": "94",
  /** Physical pin 95: PB8; bidirectional. */
  "PB8": "95",
  /** Physical pin 96: PB9; bidirectional. */
  "PB9": "96",
  /** Physical pin 97: PE0; bidirectional. */
  "PE0": "97",
  /** Physical pin 98: PE1; bidirectional. */
  "PE1": "98",
  /** Physical pin 99: RFU; no_connect. */
  "RFU": "99",
  /** Physical pin 100: VDD; power_in. */
  "VDD_100": "100",
}) {
  override schema = "MCU_ST_STM32F2:STM32F215VGTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 512-1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 114 GPIO, LQFP144
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F215Z_E-G_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f215ze.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F215Z_E_G_Tx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: PF0; bidirectional. */
  "PF0": "10",
  /** Physical pin 11: PF1; bidirectional. */
  "PF1": "11",
  /** Physical pin 12: PF2; bidirectional. */
  "PF2": "12",
  /** Physical pin 13: PF3; bidirectional. */
  "PF3": "13",
  /** Physical pin 14: PF4; bidirectional. */
  "PF4": "14",
  /** Physical pin 15: PF5; bidirectional. */
  "PF5": "15",
  /** Physical pin 16: VSS; power_in. */
  "VSS_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: PF6; bidirectional. */
  "PF6": "18",
  /** Physical pin 19: PF7; bidirectional. */
  "PF7": "19",
  /** Physical pin 20: PF8; bidirectional. */
  "PF8": "20",
  /** Physical pin 21: PF9; bidirectional. */
  "PF9": "21",
  /** Physical pin 22: PF10; bidirectional. */
  "PF10": "22",
  /** Physical pin 23: PH0; bidirectional. */
  "PH0": "23",
  /** Physical pin 24: PH1; bidirectional. */
  "PH1": "24",
  /** Physical pin 25: NRST; input. */
  "NRST": "25",
  /** Physical pin 26: PC0; bidirectional. */
  "PC0": "26",
  /** Physical pin 27: PC1; bidirectional. */
  "PC1": "27",
  /** Physical pin 28: PC2; bidirectional. */
  "PC2": "28",
  /** Physical pin 29: PC3; bidirectional. */
  "PC3": "29",
  /** Physical pin 30: VDD; power_in. */
  "VDD_30": "30",
  /** Physical pin 31: VSSA; power_in. */
  "VSSA": "31",
  /** Physical pin 32: VREF+; input. */
  "VREF+": "32",
  /** Physical pin 33: VDDA; power_in. */
  "VDDA": "33",
  /** Physical pin 34: PA0; bidirectional. */
  "PA0": "34",
  /** Physical pin 35: PA1; bidirectional. */
  "PA1": "35",
  /** Physical pin 36: PA2; bidirectional. */
  "PA2": "36",
  /** Physical pin 37: PA3; bidirectional. */
  "PA3": "37",
  /** Physical pin 38: VSS; passive. */
  "VSS_38": "38",
  /** Physical pin 39: VDD; power_in. */
  "VDD_39": "39",
  /** Physical pin 40: PA4; bidirectional. */
  "PA4": "40",
  /** Physical pin 41: PA5; bidirectional. */
  "PA5": "41",
  /** Physical pin 42: PA6; bidirectional. */
  "PA6": "42",
  /** Physical pin 43: PA7; bidirectional. */
  "PA7": "43",
  /** Physical pin 44: PC4; bidirectional. */
  "PC4": "44",
  /** Physical pin 45: PC5; bidirectional. */
  "PC5": "45",
  /** Physical pin 46: PB0; bidirectional. */
  "PB0": "46",
  /** Physical pin 47: PB1; bidirectional. */
  "PB1": "47",
  /** Physical pin 48: PB2; bidirectional. */
  "PB2": "48",
  /** Physical pin 49: PF11; bidirectional. */
  "PF11": "49",
  /** Physical pin 50: PF12; bidirectional. */
  "PF12": "50",
  /** Physical pin 51: VSS; passive. */
  "VSS_51": "51",
  /** Physical pin 52: VDD; power_in. */
  "VDD_52": "52",
  /** Physical pin 53: PF13; bidirectional. */
  "PF13": "53",
  /** Physical pin 54: PF14; bidirectional. */
  "PF14": "54",
  /** Physical pin 55: PF15; bidirectional. */
  "PF15": "55",
  /** Physical pin 56: PG0; bidirectional. */
  "PG0": "56",
  /** Physical pin 57: PG1; bidirectional. */
  "PG1": "57",
  /** Physical pin 58: PE7; bidirectional. */
  "PE7": "58",
  /** Physical pin 59: PE8; bidirectional. */
  "PE8": "59",
  /** Physical pin 60: PE9; bidirectional. */
  "PE9": "60",
  /** Physical pin 61: VSS; passive. */
  "VSS_61": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: PE10; bidirectional. */
  "PE10": "63",
  /** Physical pin 64: PE11; bidirectional. */
  "PE11": "64",
  /** Physical pin 65: PE12; bidirectional. */
  "PE12": "65",
  /** Physical pin 66: PE13; bidirectional. */
  "PE13": "66",
  /** Physical pin 67: PE14; bidirectional. */
  "PE14": "67",
  /** Physical pin 68: PE15; bidirectional. */
  "PE15": "68",
  /** Physical pin 69: PB10; bidirectional. */
  "PB10": "69",
  /** Physical pin 70: PB11; bidirectional. */
  "PB11": "70",
  /** Physical pin 71: VCAP_1; power_out. */
  "VCAP_1": "71",
  /** Physical pin 72: VDD; power_in. */
  "VDD_72": "72",
  /** Physical pin 73: PB12; bidirectional. */
  "PB12": "73",
  /** Physical pin 74: PB13; bidirectional. */
  "PB13": "74",
  /** Physical pin 75: PB14; bidirectional. */
  "PB14": "75",
  /** Physical pin 76: PB15; bidirectional. */
  "PB15": "76",
  /** Physical pin 77: PD8; bidirectional. */
  "PD8": "77",
  /** Physical pin 78: PD9; bidirectional. */
  "PD9": "78",
  /** Physical pin 79: PD10; bidirectional. */
  "PD10": "79",
  /** Physical pin 80: PD11; bidirectional. */
  "PD11": "80",
  /** Physical pin 81: PD12; bidirectional. */
  "PD12": "81",
  /** Physical pin 82: PD13; bidirectional. */
  "PD13": "82",
  /** Physical pin 83: VSS; passive. */
  "VSS_83": "83",
  /** Physical pin 84: VDD; power_in. */
  "VDD_84": "84",
  /** Physical pin 85: PD14; bidirectional. */
  "PD14": "85",
  /** Physical pin 86: PD15; bidirectional. */
  "PD15": "86",
  /** Physical pin 87: PG2; bidirectional. */
  "PG2": "87",
  /** Physical pin 88: PG3; bidirectional. */
  "PG3": "88",
  /** Physical pin 89: PG4; bidirectional. */
  "PG4": "89",
  /** Physical pin 90: PG5; bidirectional. */
  "PG5": "90",
  /** Physical pin 91: PG6; bidirectional. */
  "PG6": "91",
  /** Physical pin 92: PG7; bidirectional. */
  "PG7": "92",
  /** Physical pin 93: PG8; bidirectional. */
  "PG8": "93",
  /** Physical pin 94: VSS; passive. */
  "VSS_94": "94",
  /** Physical pin 95: VDD; power_in. */
  "VDD_95": "95",
  /** Physical pin 96: PC6; bidirectional. */
  "PC6": "96",
  /** Physical pin 97: PC7; bidirectional. */
  "PC7": "97",
  /** Physical pin 98: PC8; bidirectional. */
  "PC8": "98",
  /** Physical pin 99: PC9; bidirectional. */
  "PC9": "99",
  /** Physical pin 100: PA8; bidirectional. */
  "PA8": "100",
  /** Physical pin 101: PA9; bidirectional. */
  "PA9": "101",
  /** Physical pin 102: PA10; bidirectional. */
  "PA10": "102",
  /** Physical pin 103: PA11; bidirectional. */
  "PA11": "103",
  /** Physical pin 104: PA12; bidirectional. */
  "PA12": "104",
  /** Physical pin 105: PA13; bidirectional. */
  "PA13": "105",
  /** Physical pin 106: VCAP_2; power_out. */
  "VCAP_2": "106",
  /** Physical pin 107: VSS; passive. */
  "VSS_107": "107",
  /** Physical pin 108: VDD; power_in. */
  "VDD_108": "108",
  /** Physical pin 109: PA14; bidirectional. */
  "PA14": "109",
  /** Physical pin 110: PA15; bidirectional. */
  "PA15": "110",
  /** Physical pin 111: PC10; bidirectional. */
  "PC10": "111",
  /** Physical pin 112: PC11; bidirectional. */
  "PC11": "112",
  /** Physical pin 113: PC12; bidirectional. */
  "PC12": "113",
  /** Physical pin 114: PD0; bidirectional. */
  "PD0": "114",
  /** Physical pin 115: PD1; bidirectional. */
  "PD1": "115",
  /** Physical pin 116: PD2; bidirectional. */
  "PD2": "116",
  /** Physical pin 117: PD3; bidirectional. */
  "PD3": "117",
  /** Physical pin 118: PD4; bidirectional. */
  "PD4": "118",
  /** Physical pin 119: PD5; bidirectional. */
  "PD5": "119",
  /** Physical pin 120: VSS; passive. */
  "VSS_120": "120",
  /** Physical pin 121: VDD; power_in. */
  "VDD_121": "121",
  /** Physical pin 122: PD6; bidirectional. */
  "PD6": "122",
  /** Physical pin 123: PD7; bidirectional. */
  "PD7": "123",
  /** Physical pin 124: PG9; bidirectional. */
  "PG9": "124",
  /** Physical pin 125: PG10; bidirectional. */
  "PG10": "125",
  /** Physical pin 126: PG11; bidirectional. */
  "PG11": "126",
  /** Physical pin 127: PG12; bidirectional. */
  "PG12": "127",
  /** Physical pin 128: PG13; bidirectional. */
  "PG13": "128",
  /** Physical pin 129: PG14; bidirectional. */
  "PG14": "129",
  /** Physical pin 130: VSS; passive. */
  "VSS_130": "130",
  /** Physical pin 131: VDD; power_in. */
  "VDD_131": "131",
  /** Physical pin 132: PG15; bidirectional. */
  "PG15": "132",
  /** Physical pin 133: PB3; bidirectional. */
  "PB3": "133",
  /** Physical pin 134: PB4; bidirectional. */
  "PB4": "134",
  /** Physical pin 135: PB5; bidirectional. */
  "PB5": "135",
  /** Physical pin 136: PB6; bidirectional. */
  "PB6": "136",
  /** Physical pin 137: PB7; bidirectional. */
  "PB7": "137",
  /** Physical pin 138: BOOT0; input. */
  "BOOT0": "138",
  /** Physical pin 139: PB8; bidirectional. */
  "PB8": "139",
  /** Physical pin 140: PB9; bidirectional. */
  "PB9": "140",
  /** Physical pin 141: PE0; bidirectional. */
  "PE0": "141",
  /** Physical pin 142: PE1; bidirectional. */
  "PE1": "142",
  /** Physical pin 143: RFU; no_connect. */
  "RFU": "143",
  /** Physical pin 144: VDD; power_in. */
  "VDD_144": "144",
}) {
  override schema = "MCU_ST_STM32F2:STM32F215Z_E-G_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 512KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 114 GPIO, LQFP144
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F215ZETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f215ze.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F215ZETx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: PF0; bidirectional. */
  "PF0": "10",
  /** Physical pin 11: PF1; bidirectional. */
  "PF1": "11",
  /** Physical pin 12: PF2; bidirectional. */
  "PF2": "12",
  /** Physical pin 13: PF3; bidirectional. */
  "PF3": "13",
  /** Physical pin 14: PF4; bidirectional. */
  "PF4": "14",
  /** Physical pin 15: PF5; bidirectional. */
  "PF5": "15",
  /** Physical pin 16: VSS; power_in. */
  "VSS_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: PF6; bidirectional. */
  "PF6": "18",
  /** Physical pin 19: PF7; bidirectional. */
  "PF7": "19",
  /** Physical pin 20: PF8; bidirectional. */
  "PF8": "20",
  /** Physical pin 21: PF9; bidirectional. */
  "PF9": "21",
  /** Physical pin 22: PF10; bidirectional. */
  "PF10": "22",
  /** Physical pin 23: PH0; bidirectional. */
  "PH0": "23",
  /** Physical pin 24: PH1; bidirectional. */
  "PH1": "24",
  /** Physical pin 25: NRST; input. */
  "NRST": "25",
  /** Physical pin 26: PC0; bidirectional. */
  "PC0": "26",
  /** Physical pin 27: PC1; bidirectional. */
  "PC1": "27",
  /** Physical pin 28: PC2; bidirectional. */
  "PC2": "28",
  /** Physical pin 29: PC3; bidirectional. */
  "PC3": "29",
  /** Physical pin 30: VDD; power_in. */
  "VDD_30": "30",
  /** Physical pin 31: VSSA; power_in. */
  "VSSA": "31",
  /** Physical pin 32: VREF+; input. */
  "VREF+": "32",
  /** Physical pin 33: VDDA; power_in. */
  "VDDA": "33",
  /** Physical pin 34: PA0; bidirectional. */
  "PA0": "34",
  /** Physical pin 35: PA1; bidirectional. */
  "PA1": "35",
  /** Physical pin 36: PA2; bidirectional. */
  "PA2": "36",
  /** Physical pin 37: PA3; bidirectional. */
  "PA3": "37",
  /** Physical pin 38: VSS; passive. */
  "VSS_38": "38",
  /** Physical pin 39: VDD; power_in. */
  "VDD_39": "39",
  /** Physical pin 40: PA4; bidirectional. */
  "PA4": "40",
  /** Physical pin 41: PA5; bidirectional. */
  "PA5": "41",
  /** Physical pin 42: PA6; bidirectional. */
  "PA6": "42",
  /** Physical pin 43: PA7; bidirectional. */
  "PA7": "43",
  /** Physical pin 44: PC4; bidirectional. */
  "PC4": "44",
  /** Physical pin 45: PC5; bidirectional. */
  "PC5": "45",
  /** Physical pin 46: PB0; bidirectional. */
  "PB0": "46",
  /** Physical pin 47: PB1; bidirectional. */
  "PB1": "47",
  /** Physical pin 48: PB2; bidirectional. */
  "PB2": "48",
  /** Physical pin 49: PF11; bidirectional. */
  "PF11": "49",
  /** Physical pin 50: PF12; bidirectional. */
  "PF12": "50",
  /** Physical pin 51: VSS; passive. */
  "VSS_51": "51",
  /** Physical pin 52: VDD; power_in. */
  "VDD_52": "52",
  /** Physical pin 53: PF13; bidirectional. */
  "PF13": "53",
  /** Physical pin 54: PF14; bidirectional. */
  "PF14": "54",
  /** Physical pin 55: PF15; bidirectional. */
  "PF15": "55",
  /** Physical pin 56: PG0; bidirectional. */
  "PG0": "56",
  /** Physical pin 57: PG1; bidirectional. */
  "PG1": "57",
  /** Physical pin 58: PE7; bidirectional. */
  "PE7": "58",
  /** Physical pin 59: PE8; bidirectional. */
  "PE8": "59",
  /** Physical pin 60: PE9; bidirectional. */
  "PE9": "60",
  /** Physical pin 61: VSS; passive. */
  "VSS_61": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: PE10; bidirectional. */
  "PE10": "63",
  /** Physical pin 64: PE11; bidirectional. */
  "PE11": "64",
  /** Physical pin 65: PE12; bidirectional. */
  "PE12": "65",
  /** Physical pin 66: PE13; bidirectional. */
  "PE13": "66",
  /** Physical pin 67: PE14; bidirectional. */
  "PE14": "67",
  /** Physical pin 68: PE15; bidirectional. */
  "PE15": "68",
  /** Physical pin 69: PB10; bidirectional. */
  "PB10": "69",
  /** Physical pin 70: PB11; bidirectional. */
  "PB11": "70",
  /** Physical pin 71: VCAP_1; power_out. */
  "VCAP_1": "71",
  /** Physical pin 72: VDD; power_in. */
  "VDD_72": "72",
  /** Physical pin 73: PB12; bidirectional. */
  "PB12": "73",
  /** Physical pin 74: PB13; bidirectional. */
  "PB13": "74",
  /** Physical pin 75: PB14; bidirectional. */
  "PB14": "75",
  /** Physical pin 76: PB15; bidirectional. */
  "PB15": "76",
  /** Physical pin 77: PD8; bidirectional. */
  "PD8": "77",
  /** Physical pin 78: PD9; bidirectional. */
  "PD9": "78",
  /** Physical pin 79: PD10; bidirectional. */
  "PD10": "79",
  /** Physical pin 80: PD11; bidirectional. */
  "PD11": "80",
  /** Physical pin 81: PD12; bidirectional. */
  "PD12": "81",
  /** Physical pin 82: PD13; bidirectional. */
  "PD13": "82",
  /** Physical pin 83: VSS; passive. */
  "VSS_83": "83",
  /** Physical pin 84: VDD; power_in. */
  "VDD_84": "84",
  /** Physical pin 85: PD14; bidirectional. */
  "PD14": "85",
  /** Physical pin 86: PD15; bidirectional. */
  "PD15": "86",
  /** Physical pin 87: PG2; bidirectional. */
  "PG2": "87",
  /** Physical pin 88: PG3; bidirectional. */
  "PG3": "88",
  /** Physical pin 89: PG4; bidirectional. */
  "PG4": "89",
  /** Physical pin 90: PG5; bidirectional. */
  "PG5": "90",
  /** Physical pin 91: PG6; bidirectional. */
  "PG6": "91",
  /** Physical pin 92: PG7; bidirectional. */
  "PG7": "92",
  /** Physical pin 93: PG8; bidirectional. */
  "PG8": "93",
  /** Physical pin 94: VSS; passive. */
  "VSS_94": "94",
  /** Physical pin 95: VDD; power_in. */
  "VDD_95": "95",
  /** Physical pin 96: PC6; bidirectional. */
  "PC6": "96",
  /** Physical pin 97: PC7; bidirectional. */
  "PC7": "97",
  /** Physical pin 98: PC8; bidirectional. */
  "PC8": "98",
  /** Physical pin 99: PC9; bidirectional. */
  "PC9": "99",
  /** Physical pin 100: PA8; bidirectional. */
  "PA8": "100",
  /** Physical pin 101: PA9; bidirectional. */
  "PA9": "101",
  /** Physical pin 102: PA10; bidirectional. */
  "PA10": "102",
  /** Physical pin 103: PA11; bidirectional. */
  "PA11": "103",
  /** Physical pin 104: PA12; bidirectional. */
  "PA12": "104",
  /** Physical pin 105: PA13; bidirectional. */
  "PA13": "105",
  /** Physical pin 106: VCAP_2; power_out. */
  "VCAP_2": "106",
  /** Physical pin 107: VSS; passive. */
  "VSS_107": "107",
  /** Physical pin 108: VDD; power_in. */
  "VDD_108": "108",
  /** Physical pin 109: PA14; bidirectional. */
  "PA14": "109",
  /** Physical pin 110: PA15; bidirectional. */
  "PA15": "110",
  /** Physical pin 111: PC10; bidirectional. */
  "PC10": "111",
  /** Physical pin 112: PC11; bidirectional. */
  "PC11": "112",
  /** Physical pin 113: PC12; bidirectional. */
  "PC12": "113",
  /** Physical pin 114: PD0; bidirectional. */
  "PD0": "114",
  /** Physical pin 115: PD1; bidirectional. */
  "PD1": "115",
  /** Physical pin 116: PD2; bidirectional. */
  "PD2": "116",
  /** Physical pin 117: PD3; bidirectional. */
  "PD3": "117",
  /** Physical pin 118: PD4; bidirectional. */
  "PD4": "118",
  /** Physical pin 119: PD5; bidirectional. */
  "PD5": "119",
  /** Physical pin 120: VSS; passive. */
  "VSS_120": "120",
  /** Physical pin 121: VDD; power_in. */
  "VDD_121": "121",
  /** Physical pin 122: PD6; bidirectional. */
  "PD6": "122",
  /** Physical pin 123: PD7; bidirectional. */
  "PD7": "123",
  /** Physical pin 124: PG9; bidirectional. */
  "PG9": "124",
  /** Physical pin 125: PG10; bidirectional. */
  "PG10": "125",
  /** Physical pin 126: PG11; bidirectional. */
  "PG11": "126",
  /** Physical pin 127: PG12; bidirectional. */
  "PG12": "127",
  /** Physical pin 128: PG13; bidirectional. */
  "PG13": "128",
  /** Physical pin 129: PG14; bidirectional. */
  "PG14": "129",
  /** Physical pin 130: VSS; passive. */
  "VSS_130": "130",
  /** Physical pin 131: VDD; power_in. */
  "VDD_131": "131",
  /** Physical pin 132: PG15; bidirectional. */
  "PG15": "132",
  /** Physical pin 133: PB3; bidirectional. */
  "PB3": "133",
  /** Physical pin 134: PB4; bidirectional. */
  "PB4": "134",
  /** Physical pin 135: PB5; bidirectional. */
  "PB5": "135",
  /** Physical pin 136: PB6; bidirectional. */
  "PB6": "136",
  /** Physical pin 137: PB7; bidirectional. */
  "PB7": "137",
  /** Physical pin 138: BOOT0; input. */
  "BOOT0": "138",
  /** Physical pin 139: PB8; bidirectional. */
  "PB8": "139",
  /** Physical pin 140: PB9; bidirectional. */
  "PB9": "140",
  /** Physical pin 141: PE0; bidirectional. */
  "PE0": "141",
  /** Physical pin 142: PE1; bidirectional. */
  "PE1": "142",
  /** Physical pin 143: RFU; no_connect. */
  "RFU": "143",
  /** Physical pin 144: VDD; power_in. */
  "VDD_144": "144",
}) {
  override schema = "MCU_ST_STM32F2:STM32F215ZETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 114 GPIO, LQFP144
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F215ZGTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f215zg.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x5.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F215ZGTx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: PF0; bidirectional. */
  "PF0": "10",
  /** Physical pin 11: PF1; bidirectional. */
  "PF1": "11",
  /** Physical pin 12: PF2; bidirectional. */
  "PF2": "12",
  /** Physical pin 13: PF3; bidirectional. */
  "PF3": "13",
  /** Physical pin 14: PF4; bidirectional. */
  "PF4": "14",
  /** Physical pin 15: PF5; bidirectional. */
  "PF5": "15",
  /** Physical pin 16: VSS; power_in. */
  "VSS_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: PF6; bidirectional. */
  "PF6": "18",
  /** Physical pin 19: PF7; bidirectional. */
  "PF7": "19",
  /** Physical pin 20: PF8; bidirectional. */
  "PF8": "20",
  /** Physical pin 21: PF9; bidirectional. */
  "PF9": "21",
  /** Physical pin 22: PF10; bidirectional. */
  "PF10": "22",
  /** Physical pin 23: PH0; bidirectional. */
  "PH0": "23",
  /** Physical pin 24: PH1; bidirectional. */
  "PH1": "24",
  /** Physical pin 25: NRST; input. */
  "NRST": "25",
  /** Physical pin 26: PC0; bidirectional. */
  "PC0": "26",
  /** Physical pin 27: PC1; bidirectional. */
  "PC1": "27",
  /** Physical pin 28: PC2; bidirectional. */
  "PC2": "28",
  /** Physical pin 29: PC3; bidirectional. */
  "PC3": "29",
  /** Physical pin 30: VDD; power_in. */
  "VDD_30": "30",
  /** Physical pin 31: VSSA; power_in. */
  "VSSA": "31",
  /** Physical pin 32: VREF+; input. */
  "VREF+": "32",
  /** Physical pin 33: VDDA; power_in. */
  "VDDA": "33",
  /** Physical pin 34: PA0; bidirectional. */
  "PA0": "34",
  /** Physical pin 35: PA1; bidirectional. */
  "PA1": "35",
  /** Physical pin 36: PA2; bidirectional. */
  "PA2": "36",
  /** Physical pin 37: PA3; bidirectional. */
  "PA3": "37",
  /** Physical pin 38: VSS; passive. */
  "VSS_38": "38",
  /** Physical pin 39: VDD; power_in. */
  "VDD_39": "39",
  /** Physical pin 40: PA4; bidirectional. */
  "PA4": "40",
  /** Physical pin 41: PA5; bidirectional. */
  "PA5": "41",
  /** Physical pin 42: PA6; bidirectional. */
  "PA6": "42",
  /** Physical pin 43: PA7; bidirectional. */
  "PA7": "43",
  /** Physical pin 44: PC4; bidirectional. */
  "PC4": "44",
  /** Physical pin 45: PC5; bidirectional. */
  "PC5": "45",
  /** Physical pin 46: PB0; bidirectional. */
  "PB0": "46",
  /** Physical pin 47: PB1; bidirectional. */
  "PB1": "47",
  /** Physical pin 48: PB2; bidirectional. */
  "PB2": "48",
  /** Physical pin 49: PF11; bidirectional. */
  "PF11": "49",
  /** Physical pin 50: PF12; bidirectional. */
  "PF12": "50",
  /** Physical pin 51: VSS; passive. */
  "VSS_51": "51",
  /** Physical pin 52: VDD; power_in. */
  "VDD_52": "52",
  /** Physical pin 53: PF13; bidirectional. */
  "PF13": "53",
  /** Physical pin 54: PF14; bidirectional. */
  "PF14": "54",
  /** Physical pin 55: PF15; bidirectional. */
  "PF15": "55",
  /** Physical pin 56: PG0; bidirectional. */
  "PG0": "56",
  /** Physical pin 57: PG1; bidirectional. */
  "PG1": "57",
  /** Physical pin 58: PE7; bidirectional. */
  "PE7": "58",
  /** Physical pin 59: PE8; bidirectional. */
  "PE8": "59",
  /** Physical pin 60: PE9; bidirectional. */
  "PE9": "60",
  /** Physical pin 61: VSS; passive. */
  "VSS_61": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: PE10; bidirectional. */
  "PE10": "63",
  /** Physical pin 64: PE11; bidirectional. */
  "PE11": "64",
  /** Physical pin 65: PE12; bidirectional. */
  "PE12": "65",
  /** Physical pin 66: PE13; bidirectional. */
  "PE13": "66",
  /** Physical pin 67: PE14; bidirectional. */
  "PE14": "67",
  /** Physical pin 68: PE15; bidirectional. */
  "PE15": "68",
  /** Physical pin 69: PB10; bidirectional. */
  "PB10": "69",
  /** Physical pin 70: PB11; bidirectional. */
  "PB11": "70",
  /** Physical pin 71: VCAP_1; power_out. */
  "VCAP_1": "71",
  /** Physical pin 72: VDD; power_in. */
  "VDD_72": "72",
  /** Physical pin 73: PB12; bidirectional. */
  "PB12": "73",
  /** Physical pin 74: PB13; bidirectional. */
  "PB13": "74",
  /** Physical pin 75: PB14; bidirectional. */
  "PB14": "75",
  /** Physical pin 76: PB15; bidirectional. */
  "PB15": "76",
  /** Physical pin 77: PD8; bidirectional. */
  "PD8": "77",
  /** Physical pin 78: PD9; bidirectional. */
  "PD9": "78",
  /** Physical pin 79: PD10; bidirectional. */
  "PD10": "79",
  /** Physical pin 80: PD11; bidirectional. */
  "PD11": "80",
  /** Physical pin 81: PD12; bidirectional. */
  "PD12": "81",
  /** Physical pin 82: PD13; bidirectional. */
  "PD13": "82",
  /** Physical pin 83: VSS; passive. */
  "VSS_83": "83",
  /** Physical pin 84: VDD; power_in. */
  "VDD_84": "84",
  /** Physical pin 85: PD14; bidirectional. */
  "PD14": "85",
  /** Physical pin 86: PD15; bidirectional. */
  "PD15": "86",
  /** Physical pin 87: PG2; bidirectional. */
  "PG2": "87",
  /** Physical pin 88: PG3; bidirectional. */
  "PG3": "88",
  /** Physical pin 89: PG4; bidirectional. */
  "PG4": "89",
  /** Physical pin 90: PG5; bidirectional. */
  "PG5": "90",
  /** Physical pin 91: PG6; bidirectional. */
  "PG6": "91",
  /** Physical pin 92: PG7; bidirectional. */
  "PG7": "92",
  /** Physical pin 93: PG8; bidirectional. */
  "PG8": "93",
  /** Physical pin 94: VSS; passive. */
  "VSS_94": "94",
  /** Physical pin 95: VDD; power_in. */
  "VDD_95": "95",
  /** Physical pin 96: PC6; bidirectional. */
  "PC6": "96",
  /** Physical pin 97: PC7; bidirectional. */
  "PC7": "97",
  /** Physical pin 98: PC8; bidirectional. */
  "PC8": "98",
  /** Physical pin 99: PC9; bidirectional. */
  "PC9": "99",
  /** Physical pin 100: PA8; bidirectional. */
  "PA8": "100",
  /** Physical pin 101: PA9; bidirectional. */
  "PA9": "101",
  /** Physical pin 102: PA10; bidirectional. */
  "PA10": "102",
  /** Physical pin 103: PA11; bidirectional. */
  "PA11": "103",
  /** Physical pin 104: PA12; bidirectional. */
  "PA12": "104",
  /** Physical pin 105: PA13; bidirectional. */
  "PA13": "105",
  /** Physical pin 106: VCAP_2; power_out. */
  "VCAP_2": "106",
  /** Physical pin 107: VSS; passive. */
  "VSS_107": "107",
  /** Physical pin 108: VDD; power_in. */
  "VDD_108": "108",
  /** Physical pin 109: PA14; bidirectional. */
  "PA14": "109",
  /** Physical pin 110: PA15; bidirectional. */
  "PA15": "110",
  /** Physical pin 111: PC10; bidirectional. */
  "PC10": "111",
  /** Physical pin 112: PC11; bidirectional. */
  "PC11": "112",
  /** Physical pin 113: PC12; bidirectional. */
  "PC12": "113",
  /** Physical pin 114: PD0; bidirectional. */
  "PD0": "114",
  /** Physical pin 115: PD1; bidirectional. */
  "PD1": "115",
  /** Physical pin 116: PD2; bidirectional. */
  "PD2": "116",
  /** Physical pin 117: PD3; bidirectional. */
  "PD3": "117",
  /** Physical pin 118: PD4; bidirectional. */
  "PD4": "118",
  /** Physical pin 119: PD5; bidirectional. */
  "PD5": "119",
  /** Physical pin 120: VSS; passive. */
  "VSS_120": "120",
  /** Physical pin 121: VDD; power_in. */
  "VDD_121": "121",
  /** Physical pin 122: PD6; bidirectional. */
  "PD6": "122",
  /** Physical pin 123: PD7; bidirectional. */
  "PD7": "123",
  /** Physical pin 124: PG9; bidirectional. */
  "PG9": "124",
  /** Physical pin 125: PG10; bidirectional. */
  "PG10": "125",
  /** Physical pin 126: PG11; bidirectional. */
  "PG11": "126",
  /** Physical pin 127: PG12; bidirectional. */
  "PG12": "127",
  /** Physical pin 128: PG13; bidirectional. */
  "PG13": "128",
  /** Physical pin 129: PG14; bidirectional. */
  "PG14": "129",
  /** Physical pin 130: VSS; passive. */
  "VSS_130": "130",
  /** Physical pin 131: VDD; power_in. */
  "VDD_131": "131",
  /** Physical pin 132: PG15; bidirectional. */
  "PG15": "132",
  /** Physical pin 133: PB3; bidirectional. */
  "PB3": "133",
  /** Physical pin 134: PB4; bidirectional. */
  "PB4": "134",
  /** Physical pin 135: PB5; bidirectional. */
  "PB5": "135",
  /** Physical pin 136: PB6; bidirectional. */
  "PB6": "136",
  /** Physical pin 137: PB7; bidirectional. */
  "PB7": "137",
  /** Physical pin 138: BOOT0; input. */
  "BOOT0": "138",
  /** Physical pin 139: PB8; bidirectional. */
  "PB8": "139",
  /** Physical pin 140: PB9; bidirectional. */
  "PB9": "140",
  /** Physical pin 141: PE0; bidirectional. */
  "PE0": "141",
  /** Physical pin 142: PE1; bidirectional. */
  "PE1": "142",
  /** Physical pin 143: RFU; no_connect. */
  "RFU": "143",
  /** Physical pin 144: VDD; power_in. */
  "VDD_144": "144",
}) {
  override schema = "MCU_ST_STM32F2:STM32F215ZGTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 512-1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 140 GPIO, UFBGA176
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F217I_E-G_Hx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*10x10mm*Layout15x15*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f217ie.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_BGA:UFBGA-201_10x10mm_Layout15x15_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F217I_E_G_Hx extends Component.withPins({
  /** Physical pin A1: PE3; bidirectional. */
  "PE3": "A1",
  /** Physical pin A2: PE2; bidirectional. */
  "PE2": "A2",
  /** Physical pin A3: PE1; bidirectional. */
  "PE1": "A3",
  /** Physical pin A4: PE0; bidirectional. */
  "PE0": "A4",
  /** Physical pin A5: PB8; bidirectional. */
  "PB8": "A5",
  /** Physical pin A6: PB5; bidirectional. */
  "PB5": "A6",
  /** Physical pin A7: PG14; bidirectional. */
  "PG14": "A7",
  /** Physical pin A8: PG13; bidirectional. */
  "PG13": "A8",
  /** Physical pin A9: PB4; bidirectional. */
  "PB4": "A9",
  /** Physical pin A10: PB3; bidirectional. */
  "PB3": "A10",
  /** Physical pin A11: PD7; bidirectional. */
  "PD7": "A11",
  /** Physical pin A12: PC12; bidirectional. */
  "PC12": "A12",
  /** Physical pin A13: PA15; bidirectional. */
  "PA15": "A13",
  /** Physical pin A14: PA14; bidirectional. */
  "PA14": "A14",
  /** Physical pin A15: PA13; bidirectional. */
  "PA13": "A15",
  /** Physical pin B1: PE4; bidirectional. */
  "PE4": "B1",
  /** Physical pin B2: PE5; bidirectional. */
  "PE5": "B2",
  /** Physical pin B3: PE6; bidirectional. */
  "PE6": "B3",
  /** Physical pin B4: PB9; bidirectional. */
  "PB9": "B4",
  /** Physical pin B5: PB7; bidirectional. */
  "PB7": "B5",
  /** Physical pin B6: PB6; bidirectional. */
  "PB6": "B6",
  /** Physical pin B7: PG15; bidirectional. */
  "PG15": "B7",
  /** Physical pin B8: PG12; bidirectional. */
  "PG12": "B8",
  /** Physical pin B9: PG11; bidirectional. */
  "PG11": "B9",
  /** Physical pin B10: PG10; bidirectional. */
  "PG10": "B10",
  /** Physical pin B11: PD6; bidirectional. */
  "PD6": "B11",
  /** Physical pin B12: PD0; bidirectional. */
  "PD0": "B12",
  /** Physical pin B13: PC11; bidirectional. */
  "PC11": "B13",
  /** Physical pin B14: PC10; bidirectional. */
  "PC10": "B14",
  /** Physical pin B15: PA12; bidirectional. */
  "PA12": "B15",
  /** Physical pin C1: VBAT; power_in. */
  "VBAT": "C1",
  /** Physical pin C2: PI7; bidirectional. */
  "PI7": "C2",
  /** Physical pin C3: PI6; bidirectional. */
  "PI6": "C3",
  /** Physical pin C4: PI5; bidirectional. */
  "PI5": "C4",
  /** Physical pin C5: VDD; power_in. */
  "VDD_C5": "C5",
  /** Physical pin C6: RFU; no_connect. */
  "RFU": "C6",
  /** Physical pin C7: VDD; power_in. */
  "VDD_C7": "C7",
  /** Physical pin C8: VDD; power_in. */
  "VDD_C8": "C8",
  /** Physical pin C9: VDD; power_in. */
  "VDD_C9": "C9",
  /** Physical pin C10: PG9; bidirectional. */
  "PG9": "C10",
  /** Physical pin C11: PD5; bidirectional. */
  "PD5": "C11",
  /** Physical pin C12: PD1; bidirectional. */
  "PD1": "C12",
  /** Physical pin C13: PI3; bidirectional. */
  "PI3": "C13",
  /** Physical pin C14: PI2; bidirectional. */
  "PI2": "C14",
  /** Physical pin C15: PA11; bidirectional. */
  "PA11": "C15",
  /** Physical pin D1: PC13; bidirectional. */
  "PC13": "D1",
  /** Physical pin D2: PI8; bidirectional. */
  "PI8": "D2",
  /** Physical pin D3: PI9; bidirectional. */
  "PI9": "D3",
  /** Physical pin D4: PI4; bidirectional. */
  "PI4": "D4",
  /** Physical pin D5: VSS; power_in. */
  "VSS_D5": "D5",
  /** Physical pin D6: BOOT0; input. */
  "BOOT0": "D6",
  /** Physical pin D7: VSS; passive. */
  "VSS_D7": "D7",
  /** Physical pin D8: VSS; passive. */
  "VSS_D8": "D8",
  /** Physical pin D9: VSS; passive. */
  "VSS_D9": "D9",
  /** Physical pin D10: PD4; bidirectional. */
  "PD4": "D10",
  /** Physical pin D11: PD3; bidirectional. */
  "PD3": "D11",
  /** Physical pin D12: PD2; bidirectional. */
  "PD2": "D12",
  /** Physical pin D13: PH15; bidirectional. */
  "PH15": "D13",
  /** Physical pin D14: PI1; bidirectional. */
  "PI1": "D14",
  /** Physical pin D15: PA10; bidirectional. */
  "PA10": "D15",
  /** Physical pin E1: PC14; bidirectional. */
  "PC14": "E1",
  /** Physical pin E2: PF0; bidirectional. */
  "PF0": "E2",
  /** Physical pin E3: PI10; bidirectional. */
  "PI10": "E3",
  /** Physical pin E4: PI11; bidirectional. */
  "PI11": "E4",
  /** Physical pin E12: PH13; bidirectional. */
  "PH13": "E12",
  /** Physical pin E13: PH14; bidirectional. */
  "PH14": "E13",
  /** Physical pin E14: PI0; bidirectional. */
  "PI0": "E14",
  /** Physical pin E15: PA9; bidirectional. */
  "PA9": "E15",
  /** Physical pin F1: PC15; bidirectional. */
  "PC15": "F1",
  /** Physical pin F2: VSS; passive. */
  "VSS_F2": "F2",
  /** Physical pin F3: VDD; power_in. */
  "VDD_F3": "F3",
  /** Physical pin F4: PH2; bidirectional. */
  "PH2": "F4",
  /** Physical pin F6: VSS; passive. */
  "VSS_F6": "F6",
  /** Physical pin F7: VSS; passive. */
  "VSS_F7": "F7",
  /** Physical pin F8: VSS; passive. */
  "VSS_F8": "F8",
  /** Physical pin F9: VSS; passive. */
  "VSS_F9": "F9",
  /** Physical pin F10: VSS; passive. */
  "VSS_F10": "F10",
  /** Physical pin F12: VSS; passive. */
  "VSS_F12": "F12",
  /** Physical pin F13: VCAP_2; power_out. */
  "VCAP_2": "F13",
  /** Physical pin F14: PC9; bidirectional. */
  "PC9": "F14",
  /** Physical pin F15: PA8; bidirectional. */
  "PA8": "F15",
  /** Physical pin G1: PH0; bidirectional. */
  "PH0": "G1",
  /** Physical pin G2: VSS; passive. */
  "VSS_G2": "G2",
  /** Physical pin G3: VDD; power_in. */
  "VDD_G3": "G3",
  /** Physical pin G4: PH3; bidirectional. */
  "PH3": "G4",
  /** Physical pin G6: VSS; passive. */
  "VSS_G6": "G6",
  /** Physical pin G7: VSS; passive. */
  "VSS_G7": "G7",
  /** Physical pin G8: VSS; passive. */
  "VSS_G8": "G8",
  /** Physical pin G9: VSS; passive. */
  "VSS_G9": "G9",
  /** Physical pin G10: VSS; passive. */
  "VSS_G10": "G10",
  /** Physical pin G12: VSS; passive. */
  "VSS_G12": "G12",
  /** Physical pin G13: VDD; power_in. */
  "VDD_G13": "G13",
  /** Physical pin G14: PC8; bidirectional. */
  "PC8": "G14",
  /** Physical pin G15: PC7; bidirectional. */
  "PC7": "G15",
  /** Physical pin H1: PH1; bidirectional. */
  "PH1": "H1",
  /** Physical pin H2: PF2; bidirectional. */
  "PF2": "H2",
  /** Physical pin H3: PF1; bidirectional. */
  "PF1": "H3",
  /** Physical pin H4: PH4; bidirectional. */
  "PH4": "H4",
  /** Physical pin H6: VSS; passive. */
  "VSS_H6": "H6",
  /** Physical pin H7: VSS; passive. */
  "VSS_H7": "H7",
  /** Physical pin H8: VSS; passive. */
  "VSS_H8": "H8",
  /** Physical pin H9: VSS; passive. */
  "VSS_H9": "H9",
  /** Physical pin H10: VSS; passive. */
  "VSS_H10": "H10",
  /** Physical pin H12: VSS; passive. */
  "VSS_H12": "H12",
  /** Physical pin H13: VDD; power_in. */
  "VDD_H13": "H13",
  /** Physical pin H14: PG8; bidirectional. */
  "PG8": "H14",
  /** Physical pin H15: PC6; bidirectional. */
  "PC6": "H15",
  /** Physical pin J1: NRST; input. */
  "NRST": "J1",
  /** Physical pin J2: PF3; bidirectional. */
  "PF3": "J2",
  /** Physical pin J3: PF4; bidirectional. */
  "PF4": "J3",
  /** Physical pin J4: PH5; bidirectional. */
  "PH5": "J4",
  /** Physical pin J6: VSS; passive. */
  "VSS_J6": "J6",
  /** Physical pin J7: VSS; passive. */
  "VSS_J7": "J7",
  /** Physical pin J8: VSS; passive. */
  "VSS_J8": "J8",
  /** Physical pin J9: VSS; passive. */
  "VSS_J9": "J9",
  /** Physical pin J10: VSS; passive. */
  "VSS_J10": "J10",
  /** Physical pin J12: VDD; power_in. */
  "VDD_J12": "J12",
  /** Physical pin J13: VDD; power_in. */
  "VDD_J13": "J13",
  /** Physical pin J14: PG7; bidirectional. */
  "PG7": "J14",
  /** Physical pin J15: PG6; bidirectional. */
  "PG6": "J15",
  /** Physical pin K1: PF7; bidirectional. */
  "PF7": "K1",
  /** Physical pin K2: PF6; bidirectional. */
  "PF6": "K2",
  /** Physical pin K3: PF5; bidirectional. */
  "PF5": "K3",
  /** Physical pin K4: VDD; power_in. */
  "VDD_K4": "K4",
  /** Physical pin K6: VSS; passive. */
  "VSS_K6": "K6",
  /** Physical pin K7: VSS; passive. */
  "VSS_K7": "K7",
  /** Physical pin K8: VSS; passive. */
  "VSS_K8": "K8",
  /** Physical pin K9: VSS; passive. */
  "VSS_K9": "K9",
  /** Physical pin K10: VSS; passive. */
  "VSS_K10": "K10",
  /** Physical pin K12: PH12; bidirectional. */
  "PH12": "K12",
  /** Physical pin K13: PG5; bidirectional. */
  "PG5": "K13",
  /** Physical pin K14: PG4; bidirectional. */
  "PG4": "K14",
  /** Physical pin K15: PG3; bidirectional. */
  "PG3": "K15",
  /** Physical pin L1: PF10; bidirectional. */
  "PF10": "L1",
  /** Physical pin L2: PF9; bidirectional. */
  "PF9": "L2",
  /** Physical pin L3: PF8; bidirectional. */
  "PF8": "L3",
  /** Physical pin L4: REGOFF; input. */
  "REGOFF": "L4",
  /** Physical pin L12: PH11; bidirectional. */
  "PH11": "L12",
  /** Physical pin L13: PH10; bidirectional. */
  "PH10": "L13",
  /** Physical pin L14: PD15; bidirectional. */
  "PD15": "L14",
  /** Physical pin L15: PG2; bidirectional. */
  "PG2": "L15",
  /** Physical pin M1: VSSA; power_in. */
  "VSSA": "M1",
  /** Physical pin M2: PC0; bidirectional. */
  "PC0": "M2",
  /** Physical pin M3: PC1; bidirectional. */
  "PC1": "M3",
  /** Physical pin M4: PC2; bidirectional. */
  "PC2": "M4",
  /** Physical pin M5: PC3; bidirectional. */
  "PC3": "M5",
  /** Physical pin M6: PB2; bidirectional. */
  "PB2": "M6",
  /** Physical pin M7: PG1; bidirectional. */
  "PG1": "M7",
  /** Physical pin M8: VSS; passive. */
  "VSS_M8": "M8",
  /** Physical pin M9: VSS; passive. */
  "VSS_M9": "M9",
  /** Physical pin M10: VCAP_1; power_out. */
  "VCAP_1": "M10",
  /** Physical pin M11: PH6; bidirectional. */
  "PH6": "M11",
  /** Physical pin M12: PH8; bidirectional. */
  "PH8": "M12",
  /** Physical pin M13: PH9; bidirectional. */
  "PH9": "M13",
  /** Physical pin M14: PD14; bidirectional. */
  "PD14": "M14",
  /** Physical pin M15: PD13; bidirectional. */
  "PD13": "M15",
  /** Physical pin N1: VREF-; input. */
  "VREF-": "N1",
  /** Physical pin N2: PA1; bidirectional. */
  "PA1": "N2",
  /** Physical pin N3: PA0; bidirectional. */
  "PA0": "N3",
  /** Physical pin N4: PA4; bidirectional. */
  "PA4": "N4",
  /** Physical pin N5: PC4; bidirectional. */
  "PC4": "N5",
  /** Physical pin N6: PF13; bidirectional. */
  "PF13": "N6",
  /** Physical pin N7: PG0; bidirectional. */
  "PG0": "N7",
  /** Physical pin N8: VDD; power_in. */
  "VDD_N8": "N8",
  /** Physical pin N9: VDD; power_in. */
  "VDD_N9": "N9",
  /** Physical pin N10: VDD; power_in. */
  "VDD_N10": "N10",
  /** Physical pin N11: PE13; bidirectional. */
  "PE13": "N11",
  /** Physical pin N12: PH7; bidirectional. */
  "PH7": "N12",
  /** Physical pin N13: PD12; bidirectional. */
  "PD12": "N13",
  /** Physical pin N14: PD11; bidirectional. */
  "PD11": "N14",
  /** Physical pin N15: PD10; bidirectional. */
  "PD10": "N15",
  /** Physical pin P1: VREF+; input. */
  "VREF+": "P1",
  /** Physical pin P2: PA2; bidirectional. */
  "PA2": "P2",
  /** Physical pin P3: PA6; bidirectional. */
  "PA6": "P3",
  /** Physical pin P4: PA5; bidirectional. */
  "PA5": "P4",
  /** Physical pin P5: PC5; bidirectional. */
  "PC5": "P5",
  /** Physical pin P6: PF12; bidirectional. */
  "PF12": "P6",
  /** Physical pin P7: PF15; bidirectional. */
  "PF15": "P7",
  /** Physical pin P8: PE8; bidirectional. */
  "PE8": "P8",
  /** Physical pin P9: PE9; bidirectional. */
  "PE9": "P9",
  /** Physical pin P10: PE11; bidirectional. */
  "PE11": "P10",
  /** Physical pin P11: PE14; bidirectional. */
  "PE14": "P11",
  /** Physical pin P12: PB12; bidirectional. */
  "PB12": "P12",
  /** Physical pin P13: PB13; bidirectional. */
  "PB13": "P13",
  /** Physical pin P14: PD9; bidirectional. */
  "PD9": "P14",
  /** Physical pin P15: PD8; bidirectional. */
  "PD8": "P15",
  /** Physical pin R1: VDDA; power_in. */
  "VDDA": "R1",
  /** Physical pin R2: PA3; bidirectional. */
  "PA3": "R2",
  /** Physical pin R3: PA7; bidirectional. */
  "PA7": "R3",
  /** Physical pin R4: PB1; bidirectional. */
  "PB1": "R4",
  /** Physical pin R5: PB0; bidirectional. */
  "PB0": "R5",
  /** Physical pin R6: PF11; bidirectional. */
  "PF11": "R6",
  /** Physical pin R7: PF14; bidirectional. */
  "PF14": "R7",
  /** Physical pin R8: PE7; bidirectional. */
  "PE7": "R8",
  /** Physical pin R9: PE10; bidirectional. */
  "PE10": "R9",
  /** Physical pin R10: PE12; bidirectional. */
  "PE12": "R10",
  /** Physical pin R11: PE15; bidirectional. */
  "PE15": "R11",
  /** Physical pin R12: PB10; bidirectional. */
  "PB10": "R12",
  /** Physical pin R13: PB11; bidirectional. */
  "PB11": "R13",
  /** Physical pin R14: PB14; bidirectional. */
  "PB14": "R14",
  /** Physical pin R15: PB15; bidirectional. */
  "PB15": "R15",
}) {
  override schema = "MCU_ST_STM32F2:STM32F217I_E-G_Hx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 512KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 140 GPIO, UFBGA176
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F217IEHx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*10x10mm*Layout15x15*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f217ie.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_BGA:UFBGA-201_10x10mm_Layout15x15_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F217IEHx extends Component.withPins({
  /** Physical pin A1: PE3; bidirectional. */
  "PE3": "A1",
  /** Physical pin A2: PE2; bidirectional. */
  "PE2": "A2",
  /** Physical pin A3: PE1; bidirectional. */
  "PE1": "A3",
  /** Physical pin A4: PE0; bidirectional. */
  "PE0": "A4",
  /** Physical pin A5: PB8; bidirectional. */
  "PB8": "A5",
  /** Physical pin A6: PB5; bidirectional. */
  "PB5": "A6",
  /** Physical pin A7: PG14; bidirectional. */
  "PG14": "A7",
  /** Physical pin A8: PG13; bidirectional. */
  "PG13": "A8",
  /** Physical pin A9: PB4; bidirectional. */
  "PB4": "A9",
  /** Physical pin A10: PB3; bidirectional. */
  "PB3": "A10",
  /** Physical pin A11: PD7; bidirectional. */
  "PD7": "A11",
  /** Physical pin A12: PC12; bidirectional. */
  "PC12": "A12",
  /** Physical pin A13: PA15; bidirectional. */
  "PA15": "A13",
  /** Physical pin A14: PA14; bidirectional. */
  "PA14": "A14",
  /** Physical pin A15: PA13; bidirectional. */
  "PA13": "A15",
  /** Physical pin B1: PE4; bidirectional. */
  "PE4": "B1",
  /** Physical pin B2: PE5; bidirectional. */
  "PE5": "B2",
  /** Physical pin B3: PE6; bidirectional. */
  "PE6": "B3",
  /** Physical pin B4: PB9; bidirectional. */
  "PB9": "B4",
  /** Physical pin B5: PB7; bidirectional. */
  "PB7": "B5",
  /** Physical pin B6: PB6; bidirectional. */
  "PB6": "B6",
  /** Physical pin B7: PG15; bidirectional. */
  "PG15": "B7",
  /** Physical pin B8: PG12; bidirectional. */
  "PG12": "B8",
  /** Physical pin B9: PG11; bidirectional. */
  "PG11": "B9",
  /** Physical pin B10: PG10; bidirectional. */
  "PG10": "B10",
  /** Physical pin B11: PD6; bidirectional. */
  "PD6": "B11",
  /** Physical pin B12: PD0; bidirectional. */
  "PD0": "B12",
  /** Physical pin B13: PC11; bidirectional. */
  "PC11": "B13",
  /** Physical pin B14: PC10; bidirectional. */
  "PC10": "B14",
  /** Physical pin B15: PA12; bidirectional. */
  "PA12": "B15",
  /** Physical pin C1: VBAT; power_in. */
  "VBAT": "C1",
  /** Physical pin C2: PI7; bidirectional. */
  "PI7": "C2",
  /** Physical pin C3: PI6; bidirectional. */
  "PI6": "C3",
  /** Physical pin C4: PI5; bidirectional. */
  "PI5": "C4",
  /** Physical pin C5: VDD; power_in. */
  "VDD_C5": "C5",
  /** Physical pin C6: RFU; no_connect. */
  "RFU": "C6",
  /** Physical pin C7: VDD; power_in. */
  "VDD_C7": "C7",
  /** Physical pin C8: VDD; power_in. */
  "VDD_C8": "C8",
  /** Physical pin C9: VDD; power_in. */
  "VDD_C9": "C9",
  /** Physical pin C10: PG9; bidirectional. */
  "PG9": "C10",
  /** Physical pin C11: PD5; bidirectional. */
  "PD5": "C11",
  /** Physical pin C12: PD1; bidirectional. */
  "PD1": "C12",
  /** Physical pin C13: PI3; bidirectional. */
  "PI3": "C13",
  /** Physical pin C14: PI2; bidirectional. */
  "PI2": "C14",
  /** Physical pin C15: PA11; bidirectional. */
  "PA11": "C15",
  /** Physical pin D1: PC13; bidirectional. */
  "PC13": "D1",
  /** Physical pin D2: PI8; bidirectional. */
  "PI8": "D2",
  /** Physical pin D3: PI9; bidirectional. */
  "PI9": "D3",
  /** Physical pin D4: PI4; bidirectional. */
  "PI4": "D4",
  /** Physical pin D5: VSS; power_in. */
  "VSS_D5": "D5",
  /** Physical pin D6: BOOT0; input. */
  "BOOT0": "D6",
  /** Physical pin D7: VSS; passive. */
  "VSS_D7": "D7",
  /** Physical pin D8: VSS; passive. */
  "VSS_D8": "D8",
  /** Physical pin D9: VSS; passive. */
  "VSS_D9": "D9",
  /** Physical pin D10: PD4; bidirectional. */
  "PD4": "D10",
  /** Physical pin D11: PD3; bidirectional. */
  "PD3": "D11",
  /** Physical pin D12: PD2; bidirectional. */
  "PD2": "D12",
  /** Physical pin D13: PH15; bidirectional. */
  "PH15": "D13",
  /** Physical pin D14: PI1; bidirectional. */
  "PI1": "D14",
  /** Physical pin D15: PA10; bidirectional. */
  "PA10": "D15",
  /** Physical pin E1: PC14; bidirectional. */
  "PC14": "E1",
  /** Physical pin E2: PF0; bidirectional. */
  "PF0": "E2",
  /** Physical pin E3: PI10; bidirectional. */
  "PI10": "E3",
  /** Physical pin E4: PI11; bidirectional. */
  "PI11": "E4",
  /** Physical pin E12: PH13; bidirectional. */
  "PH13": "E12",
  /** Physical pin E13: PH14; bidirectional. */
  "PH14": "E13",
  /** Physical pin E14: PI0; bidirectional. */
  "PI0": "E14",
  /** Physical pin E15: PA9; bidirectional. */
  "PA9": "E15",
  /** Physical pin F1: PC15; bidirectional. */
  "PC15": "F1",
  /** Physical pin F2: VSS; passive. */
  "VSS_F2": "F2",
  /** Physical pin F3: VDD; power_in. */
  "VDD_F3": "F3",
  /** Physical pin F4: PH2; bidirectional. */
  "PH2": "F4",
  /** Physical pin F6: VSS; passive. */
  "VSS_F6": "F6",
  /** Physical pin F7: VSS; passive. */
  "VSS_F7": "F7",
  /** Physical pin F8: VSS; passive. */
  "VSS_F8": "F8",
  /** Physical pin F9: VSS; passive. */
  "VSS_F9": "F9",
  /** Physical pin F10: VSS; passive. */
  "VSS_F10": "F10",
  /** Physical pin F12: VSS; passive. */
  "VSS_F12": "F12",
  /** Physical pin F13: VCAP_2; power_out. */
  "VCAP_2": "F13",
  /** Physical pin F14: PC9; bidirectional. */
  "PC9": "F14",
  /** Physical pin F15: PA8; bidirectional. */
  "PA8": "F15",
  /** Physical pin G1: PH0; bidirectional. */
  "PH0": "G1",
  /** Physical pin G2: VSS; passive. */
  "VSS_G2": "G2",
  /** Physical pin G3: VDD; power_in. */
  "VDD_G3": "G3",
  /** Physical pin G4: PH3; bidirectional. */
  "PH3": "G4",
  /** Physical pin G6: VSS; passive. */
  "VSS_G6": "G6",
  /** Physical pin G7: VSS; passive. */
  "VSS_G7": "G7",
  /** Physical pin G8: VSS; passive. */
  "VSS_G8": "G8",
  /** Physical pin G9: VSS; passive. */
  "VSS_G9": "G9",
  /** Physical pin G10: VSS; passive. */
  "VSS_G10": "G10",
  /** Physical pin G12: VSS; passive. */
  "VSS_G12": "G12",
  /** Physical pin G13: VDD; power_in. */
  "VDD_G13": "G13",
  /** Physical pin G14: PC8; bidirectional. */
  "PC8": "G14",
  /** Physical pin G15: PC7; bidirectional. */
  "PC7": "G15",
  /** Physical pin H1: PH1; bidirectional. */
  "PH1": "H1",
  /** Physical pin H2: PF2; bidirectional. */
  "PF2": "H2",
  /** Physical pin H3: PF1; bidirectional. */
  "PF1": "H3",
  /** Physical pin H4: PH4; bidirectional. */
  "PH4": "H4",
  /** Physical pin H6: VSS; passive. */
  "VSS_H6": "H6",
  /** Physical pin H7: VSS; passive. */
  "VSS_H7": "H7",
  /** Physical pin H8: VSS; passive. */
  "VSS_H8": "H8",
  /** Physical pin H9: VSS; passive. */
  "VSS_H9": "H9",
  /** Physical pin H10: VSS; passive. */
  "VSS_H10": "H10",
  /** Physical pin H12: VSS; passive. */
  "VSS_H12": "H12",
  /** Physical pin H13: VDD; power_in. */
  "VDD_H13": "H13",
  /** Physical pin H14: PG8; bidirectional. */
  "PG8": "H14",
  /** Physical pin H15: PC6; bidirectional. */
  "PC6": "H15",
  /** Physical pin J1: NRST; input. */
  "NRST": "J1",
  /** Physical pin J2: PF3; bidirectional. */
  "PF3": "J2",
  /** Physical pin J3: PF4; bidirectional. */
  "PF4": "J3",
  /** Physical pin J4: PH5; bidirectional. */
  "PH5": "J4",
  /** Physical pin J6: VSS; passive. */
  "VSS_J6": "J6",
  /** Physical pin J7: VSS; passive. */
  "VSS_J7": "J7",
  /** Physical pin J8: VSS; passive. */
  "VSS_J8": "J8",
  /** Physical pin J9: VSS; passive. */
  "VSS_J9": "J9",
  /** Physical pin J10: VSS; passive. */
  "VSS_J10": "J10",
  /** Physical pin J12: VDD; power_in. */
  "VDD_J12": "J12",
  /** Physical pin J13: VDD; power_in. */
  "VDD_J13": "J13",
  /** Physical pin J14: PG7; bidirectional. */
  "PG7": "J14",
  /** Physical pin J15: PG6; bidirectional. */
  "PG6": "J15",
  /** Physical pin K1: PF7; bidirectional. */
  "PF7": "K1",
  /** Physical pin K2: PF6; bidirectional. */
  "PF6": "K2",
  /** Physical pin K3: PF5; bidirectional. */
  "PF5": "K3",
  /** Physical pin K4: VDD; power_in. */
  "VDD_K4": "K4",
  /** Physical pin K6: VSS; passive. */
  "VSS_K6": "K6",
  /** Physical pin K7: VSS; passive. */
  "VSS_K7": "K7",
  /** Physical pin K8: VSS; passive. */
  "VSS_K8": "K8",
  /** Physical pin K9: VSS; passive. */
  "VSS_K9": "K9",
  /** Physical pin K10: VSS; passive. */
  "VSS_K10": "K10",
  /** Physical pin K12: PH12; bidirectional. */
  "PH12": "K12",
  /** Physical pin K13: PG5; bidirectional. */
  "PG5": "K13",
  /** Physical pin K14: PG4; bidirectional. */
  "PG4": "K14",
  /** Physical pin K15: PG3; bidirectional. */
  "PG3": "K15",
  /** Physical pin L1: PF10; bidirectional. */
  "PF10": "L1",
  /** Physical pin L2: PF9; bidirectional. */
  "PF9": "L2",
  /** Physical pin L3: PF8; bidirectional. */
  "PF8": "L3",
  /** Physical pin L4: REGOFF; input. */
  "REGOFF": "L4",
  /** Physical pin L12: PH11; bidirectional. */
  "PH11": "L12",
  /** Physical pin L13: PH10; bidirectional. */
  "PH10": "L13",
  /** Physical pin L14: PD15; bidirectional. */
  "PD15": "L14",
  /** Physical pin L15: PG2; bidirectional. */
  "PG2": "L15",
  /** Physical pin M1: VSSA; power_in. */
  "VSSA": "M1",
  /** Physical pin M2: PC0; bidirectional. */
  "PC0": "M2",
  /** Physical pin M3: PC1; bidirectional. */
  "PC1": "M3",
  /** Physical pin M4: PC2; bidirectional. */
  "PC2": "M4",
  /** Physical pin M5: PC3; bidirectional. */
  "PC3": "M5",
  /** Physical pin M6: PB2; bidirectional. */
  "PB2": "M6",
  /** Physical pin M7: PG1; bidirectional. */
  "PG1": "M7",
  /** Physical pin M8: VSS; passive. */
  "VSS_M8": "M8",
  /** Physical pin M9: VSS; passive. */
  "VSS_M9": "M9",
  /** Physical pin M10: VCAP_1; power_out. */
  "VCAP_1": "M10",
  /** Physical pin M11: PH6; bidirectional. */
  "PH6": "M11",
  /** Physical pin M12: PH8; bidirectional. */
  "PH8": "M12",
  /** Physical pin M13: PH9; bidirectional. */
  "PH9": "M13",
  /** Physical pin M14: PD14; bidirectional. */
  "PD14": "M14",
  /** Physical pin M15: PD13; bidirectional. */
  "PD13": "M15",
  /** Physical pin N1: VREF-; input. */
  "VREF-": "N1",
  /** Physical pin N2: PA1; bidirectional. */
  "PA1": "N2",
  /** Physical pin N3: PA0; bidirectional. */
  "PA0": "N3",
  /** Physical pin N4: PA4; bidirectional. */
  "PA4": "N4",
  /** Physical pin N5: PC4; bidirectional. */
  "PC4": "N5",
  /** Physical pin N6: PF13; bidirectional. */
  "PF13": "N6",
  /** Physical pin N7: PG0; bidirectional. */
  "PG0": "N7",
  /** Physical pin N8: VDD; power_in. */
  "VDD_N8": "N8",
  /** Physical pin N9: VDD; power_in. */
  "VDD_N9": "N9",
  /** Physical pin N10: VDD; power_in. */
  "VDD_N10": "N10",
  /** Physical pin N11: PE13; bidirectional. */
  "PE13": "N11",
  /** Physical pin N12: PH7; bidirectional. */
  "PH7": "N12",
  /** Physical pin N13: PD12; bidirectional. */
  "PD12": "N13",
  /** Physical pin N14: PD11; bidirectional. */
  "PD11": "N14",
  /** Physical pin N15: PD10; bidirectional. */
  "PD10": "N15",
  /** Physical pin P1: VREF+; input. */
  "VREF+": "P1",
  /** Physical pin P2: PA2; bidirectional. */
  "PA2": "P2",
  /** Physical pin P3: PA6; bidirectional. */
  "PA6": "P3",
  /** Physical pin P4: PA5; bidirectional. */
  "PA5": "P4",
  /** Physical pin P5: PC5; bidirectional. */
  "PC5": "P5",
  /** Physical pin P6: PF12; bidirectional. */
  "PF12": "P6",
  /** Physical pin P7: PF15; bidirectional. */
  "PF15": "P7",
  /** Physical pin P8: PE8; bidirectional. */
  "PE8": "P8",
  /** Physical pin P9: PE9; bidirectional. */
  "PE9": "P9",
  /** Physical pin P10: PE11; bidirectional. */
  "PE11": "P10",
  /** Physical pin P11: PE14; bidirectional. */
  "PE14": "P11",
  /** Physical pin P12: PB12; bidirectional. */
  "PB12": "P12",
  /** Physical pin P13: PB13; bidirectional. */
  "PB13": "P13",
  /** Physical pin P14: PD9; bidirectional. */
  "PD9": "P14",
  /** Physical pin P15: PD8; bidirectional. */
  "PD8": "P15",
  /** Physical pin R1: VDDA; power_in. */
  "VDDA": "R1",
  /** Physical pin R2: PA3; bidirectional. */
  "PA3": "R2",
  /** Physical pin R3: PA7; bidirectional. */
  "PA7": "R3",
  /** Physical pin R4: PB1; bidirectional. */
  "PB1": "R4",
  /** Physical pin R5: PB0; bidirectional. */
  "PB0": "R5",
  /** Physical pin R6: PF11; bidirectional. */
  "PF11": "R6",
  /** Physical pin R7: PF14; bidirectional. */
  "PF14": "R7",
  /** Physical pin R8: PE7; bidirectional. */
  "PE7": "R8",
  /** Physical pin R9: PE10; bidirectional. */
  "PE10": "R9",
  /** Physical pin R10: PE12; bidirectional. */
  "PE12": "R10",
  /** Physical pin R11: PE15; bidirectional. */
  "PE15": "R11",
  /** Physical pin R12: PB10; bidirectional. */
  "PB10": "R12",
  /** Physical pin R13: PB11; bidirectional. */
  "PB11": "R13",
  /** Physical pin R14: PB14; bidirectional. */
  "PB14": "R14",
  /** Physical pin R15: PB15; bidirectional. */
  "PB15": "R15",
}) {
  override schema = "MCU_ST_STM32F2:STM32F217IEHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 512-1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 140 GPIO, LQFP176
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F217I_E-G_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*24x24mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f217ie.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_QFP:LQFP-176_24x24mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F217I_E_G_Tx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PI8; bidirectional. */
  "PI8": "7",
  /** Physical pin 8: PC13; bidirectional. */
  "PC13": "8",
  /** Physical pin 9: PC14; bidirectional. */
  "PC14": "9",
  /** Physical pin 10: PC15; bidirectional. */
  "PC15": "10",
  /** Physical pin 11: PI9; bidirectional. */
  "PI9": "11",
  /** Physical pin 12: PI10; bidirectional. */
  "PI10": "12",
  /** Physical pin 13: PI11; bidirectional. */
  "PI11": "13",
  /** Physical pin 14: VSS; power_in. */
  "VSS_14": "14",
  /** Physical pin 15: VDD; power_in. */
  "VDD_15": "15",
  /** Physical pin 16: PF0; bidirectional. */
  "PF0": "16",
  /** Physical pin 17: PF1; bidirectional. */
  "PF1": "17",
  /** Physical pin 18: PF2; bidirectional. */
  "PF2": "18",
  /** Physical pin 19: PF3; bidirectional. */
  "PF3": "19",
  /** Physical pin 20: PF4; bidirectional. */
  "PF4": "20",
  /** Physical pin 21: PF5; bidirectional. */
  "PF5": "21",
  /** Physical pin 22: VSS; passive. */
  "VSS_22": "22",
  /** Physical pin 23: VDD; power_in. */
  "VDD_23": "23",
  /** Physical pin 24: PF6; bidirectional. */
  "PF6": "24",
  /** Physical pin 25: PF7; bidirectional. */
  "PF7": "25",
  /** Physical pin 26: PF8; bidirectional. */
  "PF8": "26",
  /** Physical pin 27: PF9; bidirectional. */
  "PF9": "27",
  /** Physical pin 28: PF10; bidirectional. */
  "PF10": "28",
  /** Physical pin 29: PH0; bidirectional. */
  "PH0": "29",
  /** Physical pin 30: PH1; bidirectional. */
  "PH1": "30",
  /** Physical pin 31: NRST; input. */
  "NRST": "31",
  /** Physical pin 32: PC0; bidirectional. */
  "PC0": "32",
  /** Physical pin 33: PC1; bidirectional. */
  "PC1": "33",
  /** Physical pin 34: PC2; bidirectional. */
  "PC2": "34",
  /** Physical pin 35: PC3; bidirectional. */
  "PC3": "35",
  /** Physical pin 36: VDD; power_in. */
  "VDD_36": "36",
  /** Physical pin 37: VSSA; power_in. */
  "VSSA": "37",
  /** Physical pin 38: VREF+; input. */
  "VREF+": "38",
  /** Physical pin 39: VDDA; power_in. */
  "VDDA": "39",
  /** Physical pin 40: PA0; bidirectional. */
  "PA0": "40",
  /** Physical pin 41: PA1; bidirectional. */
  "PA1": "41",
  /** Physical pin 42: PA2; bidirectional. */
  "PA2": "42",
  /** Physical pin 43: PH2; bidirectional. */
  "PH2": "43",
  /** Physical pin 44: PH3; bidirectional. */
  "PH3": "44",
  /** Physical pin 45: PH4; bidirectional. */
  "PH4": "45",
  /** Physical pin 46: PH5; bidirectional. */
  "PH5": "46",
  /** Physical pin 47: PA3; bidirectional. */
  "PA3": "47",
  /** Physical pin 48: VSS; passive. */
  "VSS_48": "48",
  /** Physical pin 49: VDD; power_in. */
  "VDD_49": "49",
  /** Physical pin 50: PA4; bidirectional. */
  "PA4": "50",
  /** Physical pin 51: PA5; bidirectional. */
  "PA5": "51",
  /** Physical pin 52: PA6; bidirectional. */
  "PA6": "52",
  /** Physical pin 53: PA7; bidirectional. */
  "PA7": "53",
  /** Physical pin 54: PC4; bidirectional. */
  "PC4": "54",
  /** Physical pin 55: PC5; bidirectional. */
  "PC5": "55",
  /** Physical pin 56: PB0; bidirectional. */
  "PB0": "56",
  /** Physical pin 57: PB1; bidirectional. */
  "PB1": "57",
  /** Physical pin 58: PB2; bidirectional. */
  "PB2": "58",
  /** Physical pin 59: PF11; bidirectional. */
  "PF11": "59",
  /** Physical pin 60: PF12; bidirectional. */
  "PF12": "60",
  /** Physical pin 61: VSS; passive. */
  "VSS_61": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: PF13; bidirectional. */
  "PF13": "63",
  /** Physical pin 64: PF14; bidirectional. */
  "PF14": "64",
  /** Physical pin 65: PF15; bidirectional. */
  "PF15": "65",
  /** Physical pin 66: PG0; bidirectional. */
  "PG0": "66",
  /** Physical pin 67: PG1; bidirectional. */
  "PG1": "67",
  /** Physical pin 68: PE7; bidirectional. */
  "PE7": "68",
  /** Physical pin 69: PE8; bidirectional. */
  "PE8": "69",
  /** Physical pin 70: PE9; bidirectional. */
  "PE9": "70",
  /** Physical pin 71: VSS; passive. */
  "VSS_71": "71",
  /** Physical pin 72: VDD; power_in. */
  "VDD_72": "72",
  /** Physical pin 73: PE10; bidirectional. */
  "PE10": "73",
  /** Physical pin 74: PE11; bidirectional. */
  "PE11": "74",
  /** Physical pin 75: PE12; bidirectional. */
  "PE12": "75",
  /** Physical pin 76: PE13; bidirectional. */
  "PE13": "76",
  /** Physical pin 77: PE14; bidirectional. */
  "PE14": "77",
  /** Physical pin 78: PE15; bidirectional. */
  "PE15": "78",
  /** Physical pin 79: PB10; bidirectional. */
  "PB10": "79",
  /** Physical pin 80: PB11; bidirectional. */
  "PB11": "80",
  /** Physical pin 81: VCAP_1; power_out. */
  "VCAP_1": "81",
  /** Physical pin 82: VDD; power_in. */
  "VDD_82": "82",
  /** Physical pin 83: PH6; bidirectional. */
  "PH6": "83",
  /** Physical pin 84: PH7; bidirectional. */
  "PH7": "84",
  /** Physical pin 85: PH8; bidirectional. */
  "PH8": "85",
  /** Physical pin 86: PH9; bidirectional. */
  "PH9": "86",
  /** Physical pin 87: PH10; bidirectional. */
  "PH10": "87",
  /** Physical pin 88: PH11; bidirectional. */
  "PH11": "88",
  /** Physical pin 89: PH12; bidirectional. */
  "PH12": "89",
  /** Physical pin 90: VSS; passive. */
  "VSS_90": "90",
  /** Physical pin 91: VDD; power_in. */
  "VDD_91": "91",
  /** Physical pin 92: PB12; bidirectional. */
  "PB12": "92",
  /** Physical pin 93: PB13; bidirectional. */
  "PB13": "93",
  /** Physical pin 94: PB14; bidirectional. */
  "PB14": "94",
  /** Physical pin 95: PB15; bidirectional. */
  "PB15": "95",
  /** Physical pin 96: PD8; bidirectional. */
  "PD8": "96",
  /** Physical pin 97: PD9; bidirectional. */
  "PD9": "97",
  /** Physical pin 98: PD10; bidirectional. */
  "PD10": "98",
  /** Physical pin 99: PD11; bidirectional. */
  "PD11": "99",
  /** Physical pin 100: PD12; bidirectional. */
  "PD12": "100",
  /** Physical pin 101: PD13; bidirectional. */
  "PD13": "101",
  /** Physical pin 102: VSS; passive. */
  "VSS_102": "102",
  /** Physical pin 103: VDD; power_in. */
  "VDD_103": "103",
  /** Physical pin 104: PD14; bidirectional. */
  "PD14": "104",
  /** Physical pin 105: PD15; bidirectional. */
  "PD15": "105",
  /** Physical pin 106: PG2; bidirectional. */
  "PG2": "106",
  /** Physical pin 107: PG3; bidirectional. */
  "PG3": "107",
  /** Physical pin 108: PG4; bidirectional. */
  "PG4": "108",
  /** Physical pin 109: PG5; bidirectional. */
  "PG5": "109",
  /** Physical pin 110: PG6; bidirectional. */
  "PG6": "110",
  /** Physical pin 111: PG7; bidirectional. */
  "PG7": "111",
  /** Physical pin 112: PG8; bidirectional. */
  "PG8": "112",
  /** Physical pin 113: VSS; passive. */
  "VSS_113": "113",
  /** Physical pin 114: VDD; power_in. */
  "VDD_114": "114",
  /** Physical pin 115: PC6; bidirectional. */
  "PC6": "115",
  /** Physical pin 116: PC7; bidirectional. */
  "PC7": "116",
  /** Physical pin 117: PC8; bidirectional. */
  "PC8": "117",
  /** Physical pin 118: PC9; bidirectional. */
  "PC9": "118",
  /** Physical pin 119: PA8; bidirectional. */
  "PA8": "119",
  /** Physical pin 120: PA9; bidirectional. */
  "PA9": "120",
  /** Physical pin 121: PA10; bidirectional. */
  "PA10": "121",
  /** Physical pin 122: PA11; bidirectional. */
  "PA11": "122",
  /** Physical pin 123: PA12; bidirectional. */
  "PA12": "123",
  /** Physical pin 124: PA13; bidirectional. */
  "PA13": "124",
  /** Physical pin 125: VCAP_2; power_out. */
  "VCAP_2": "125",
  /** Physical pin 126: VSS; passive. */
  "VSS_126": "126",
  /** Physical pin 127: VDD; power_in. */
  "VDD_127": "127",
  /** Physical pin 128: PH13; bidirectional. */
  "PH13": "128",
  /** Physical pin 129: PH14; bidirectional. */
  "PH14": "129",
  /** Physical pin 130: PH15; bidirectional. */
  "PH15": "130",
  /** Physical pin 131: PI0; bidirectional. */
  "PI0": "131",
  /** Physical pin 132: PI1; bidirectional. */
  "PI1": "132",
  /** Physical pin 133: PI2; bidirectional. */
  "PI2": "133",
  /** Physical pin 134: PI3; bidirectional. */
  "PI3": "134",
  /** Physical pin 135: VSS; passive. */
  "VSS_135": "135",
  /** Physical pin 136: VDD; power_in. */
  "VDD_136": "136",
  /** Physical pin 137: PA14; bidirectional. */
  "PA14": "137",
  /** Physical pin 138: PA15; bidirectional. */
  "PA15": "138",
  /** Physical pin 139: PC10; bidirectional. */
  "PC10": "139",
  /** Physical pin 140: PC11; bidirectional. */
  "PC11": "140",
  /** Physical pin 141: PC12; bidirectional. */
  "PC12": "141",
  /** Physical pin 142: PD0; bidirectional. */
  "PD0": "142",
  /** Physical pin 143: PD1; bidirectional. */
  "PD1": "143",
  /** Physical pin 144: PD2; bidirectional. */
  "PD2": "144",
  /** Physical pin 145: PD3; bidirectional. */
  "PD3": "145",
  /** Physical pin 146: PD4; bidirectional. */
  "PD4": "146",
  /** Physical pin 147: PD5; bidirectional. */
  "PD5": "147",
  /** Physical pin 148: VSS; passive. */
  "VSS_148": "148",
  /** Physical pin 149: VDD; power_in. */
  "VDD_149": "149",
  /** Physical pin 150: PD6; bidirectional. */
  "PD6": "150",
  /** Physical pin 151: PD7; bidirectional. */
  "PD7": "151",
  /** Physical pin 152: PG9; bidirectional. */
  "PG9": "152",
  /** Physical pin 153: PG10; bidirectional. */
  "PG10": "153",
  /** Physical pin 154: PG11; bidirectional. */
  "PG11": "154",
  /** Physical pin 155: PG12; bidirectional. */
  "PG12": "155",
  /** Physical pin 156: PG13; bidirectional. */
  "PG13": "156",
  /** Physical pin 157: PG14; bidirectional. */
  "PG14": "157",
  /** Physical pin 158: VSS; passive. */
  "VSS_158": "158",
  /** Physical pin 159: VDD; power_in. */
  "VDD_159": "159",
  /** Physical pin 160: PG15; bidirectional. */
  "PG15": "160",
  /** Physical pin 161: PB3; bidirectional. */
  "PB3": "161",
  /** Physical pin 162: PB4; bidirectional. */
  "PB4": "162",
  /** Physical pin 163: PB5; bidirectional. */
  "PB5": "163",
  /** Physical pin 164: PB6; bidirectional. */
  "PB6": "164",
  /** Physical pin 165: PB7; bidirectional. */
  "PB7": "165",
  /** Physical pin 166: BOOT0; input. */
  "BOOT0": "166",
  /** Physical pin 167: PB8; bidirectional. */
  "PB8": "167",
  /** Physical pin 168: PB9; bidirectional. */
  "PB9": "168",
  /** Physical pin 169: PE0; bidirectional. */
  "PE0": "169",
  /** Physical pin 170: PE1; bidirectional. */
  "PE1": "170",
  /** Physical pin 171: RFU; no_connect. */
  "RFU": "171",
  /** Physical pin 172: VDD; power_in. */
  "VDD_172": "172",
  /** Physical pin 173: PI4; bidirectional. */
  "PI4": "173",
  /** Physical pin 174: PI5; bidirectional. */
  "PI5": "174",
  /** Physical pin 175: PI6; bidirectional. */
  "PI6": "175",
  /** Physical pin 176: PI7; bidirectional. */
  "PI7": "176",
}) {
  override schema = "MCU_ST_STM32F2:STM32F217I_E-G_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 512KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 140 GPIO, LQFP176
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F217IETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*24x24mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f217ie.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_QFP:LQFP-176_24x24mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F217IETx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PI8; bidirectional. */
  "PI8": "7",
  /** Physical pin 8: PC13; bidirectional. */
  "PC13": "8",
  /** Physical pin 9: PC14; bidirectional. */
  "PC14": "9",
  /** Physical pin 10: PC15; bidirectional. */
  "PC15": "10",
  /** Physical pin 11: PI9; bidirectional. */
  "PI9": "11",
  /** Physical pin 12: PI10; bidirectional. */
  "PI10": "12",
  /** Physical pin 13: PI11; bidirectional. */
  "PI11": "13",
  /** Physical pin 14: VSS; power_in. */
  "VSS_14": "14",
  /** Physical pin 15: VDD; power_in. */
  "VDD_15": "15",
  /** Physical pin 16: PF0; bidirectional. */
  "PF0": "16",
  /** Physical pin 17: PF1; bidirectional. */
  "PF1": "17",
  /** Physical pin 18: PF2; bidirectional. */
  "PF2": "18",
  /** Physical pin 19: PF3; bidirectional. */
  "PF3": "19",
  /** Physical pin 20: PF4; bidirectional. */
  "PF4": "20",
  /** Physical pin 21: PF5; bidirectional. */
  "PF5": "21",
  /** Physical pin 22: VSS; passive. */
  "VSS_22": "22",
  /** Physical pin 23: VDD; power_in. */
  "VDD_23": "23",
  /** Physical pin 24: PF6; bidirectional. */
  "PF6": "24",
  /** Physical pin 25: PF7; bidirectional. */
  "PF7": "25",
  /** Physical pin 26: PF8; bidirectional. */
  "PF8": "26",
  /** Physical pin 27: PF9; bidirectional. */
  "PF9": "27",
  /** Physical pin 28: PF10; bidirectional. */
  "PF10": "28",
  /** Physical pin 29: PH0; bidirectional. */
  "PH0": "29",
  /** Physical pin 30: PH1; bidirectional. */
  "PH1": "30",
  /** Physical pin 31: NRST; input. */
  "NRST": "31",
  /** Physical pin 32: PC0; bidirectional. */
  "PC0": "32",
  /** Physical pin 33: PC1; bidirectional. */
  "PC1": "33",
  /** Physical pin 34: PC2; bidirectional. */
  "PC2": "34",
  /** Physical pin 35: PC3; bidirectional. */
  "PC3": "35",
  /** Physical pin 36: VDD; power_in. */
  "VDD_36": "36",
  /** Physical pin 37: VSSA; power_in. */
  "VSSA": "37",
  /** Physical pin 38: VREF+; input. */
  "VREF+": "38",
  /** Physical pin 39: VDDA; power_in. */
  "VDDA": "39",
  /** Physical pin 40: PA0; bidirectional. */
  "PA0": "40",
  /** Physical pin 41: PA1; bidirectional. */
  "PA1": "41",
  /** Physical pin 42: PA2; bidirectional. */
  "PA2": "42",
  /** Physical pin 43: PH2; bidirectional. */
  "PH2": "43",
  /** Physical pin 44: PH3; bidirectional. */
  "PH3": "44",
  /** Physical pin 45: PH4; bidirectional. */
  "PH4": "45",
  /** Physical pin 46: PH5; bidirectional. */
  "PH5": "46",
  /** Physical pin 47: PA3; bidirectional. */
  "PA3": "47",
  /** Physical pin 48: VSS; passive. */
  "VSS_48": "48",
  /** Physical pin 49: VDD; power_in. */
  "VDD_49": "49",
  /** Physical pin 50: PA4; bidirectional. */
  "PA4": "50",
  /** Physical pin 51: PA5; bidirectional. */
  "PA5": "51",
  /** Physical pin 52: PA6; bidirectional. */
  "PA6": "52",
  /** Physical pin 53: PA7; bidirectional. */
  "PA7": "53",
  /** Physical pin 54: PC4; bidirectional. */
  "PC4": "54",
  /** Physical pin 55: PC5; bidirectional. */
  "PC5": "55",
  /** Physical pin 56: PB0; bidirectional. */
  "PB0": "56",
  /** Physical pin 57: PB1; bidirectional. */
  "PB1": "57",
  /** Physical pin 58: PB2; bidirectional. */
  "PB2": "58",
  /** Physical pin 59: PF11; bidirectional. */
  "PF11": "59",
  /** Physical pin 60: PF12; bidirectional. */
  "PF12": "60",
  /** Physical pin 61: VSS; passive. */
  "VSS_61": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: PF13; bidirectional. */
  "PF13": "63",
  /** Physical pin 64: PF14; bidirectional. */
  "PF14": "64",
  /** Physical pin 65: PF15; bidirectional. */
  "PF15": "65",
  /** Physical pin 66: PG0; bidirectional. */
  "PG0": "66",
  /** Physical pin 67: PG1; bidirectional. */
  "PG1": "67",
  /** Physical pin 68: PE7; bidirectional. */
  "PE7": "68",
  /** Physical pin 69: PE8; bidirectional. */
  "PE8": "69",
  /** Physical pin 70: PE9; bidirectional. */
  "PE9": "70",
  /** Physical pin 71: VSS; passive. */
  "VSS_71": "71",
  /** Physical pin 72: VDD; power_in. */
  "VDD_72": "72",
  /** Physical pin 73: PE10; bidirectional. */
  "PE10": "73",
  /** Physical pin 74: PE11; bidirectional. */
  "PE11": "74",
  /** Physical pin 75: PE12; bidirectional. */
  "PE12": "75",
  /** Physical pin 76: PE13; bidirectional. */
  "PE13": "76",
  /** Physical pin 77: PE14; bidirectional. */
  "PE14": "77",
  /** Physical pin 78: PE15; bidirectional. */
  "PE15": "78",
  /** Physical pin 79: PB10; bidirectional. */
  "PB10": "79",
  /** Physical pin 80: PB11; bidirectional. */
  "PB11": "80",
  /** Physical pin 81: VCAP_1; power_out. */
  "VCAP_1": "81",
  /** Physical pin 82: VDD; power_in. */
  "VDD_82": "82",
  /** Physical pin 83: PH6; bidirectional. */
  "PH6": "83",
  /** Physical pin 84: PH7; bidirectional. */
  "PH7": "84",
  /** Physical pin 85: PH8; bidirectional. */
  "PH8": "85",
  /** Physical pin 86: PH9; bidirectional. */
  "PH9": "86",
  /** Physical pin 87: PH10; bidirectional. */
  "PH10": "87",
  /** Physical pin 88: PH11; bidirectional. */
  "PH11": "88",
  /** Physical pin 89: PH12; bidirectional. */
  "PH12": "89",
  /** Physical pin 90: VSS; passive. */
  "VSS_90": "90",
  /** Physical pin 91: VDD; power_in. */
  "VDD_91": "91",
  /** Physical pin 92: PB12; bidirectional. */
  "PB12": "92",
  /** Physical pin 93: PB13; bidirectional. */
  "PB13": "93",
  /** Physical pin 94: PB14; bidirectional. */
  "PB14": "94",
  /** Physical pin 95: PB15; bidirectional. */
  "PB15": "95",
  /** Physical pin 96: PD8; bidirectional. */
  "PD8": "96",
  /** Physical pin 97: PD9; bidirectional. */
  "PD9": "97",
  /** Physical pin 98: PD10; bidirectional. */
  "PD10": "98",
  /** Physical pin 99: PD11; bidirectional. */
  "PD11": "99",
  /** Physical pin 100: PD12; bidirectional. */
  "PD12": "100",
  /** Physical pin 101: PD13; bidirectional. */
  "PD13": "101",
  /** Physical pin 102: VSS; passive. */
  "VSS_102": "102",
  /** Physical pin 103: VDD; power_in. */
  "VDD_103": "103",
  /** Physical pin 104: PD14; bidirectional. */
  "PD14": "104",
  /** Physical pin 105: PD15; bidirectional. */
  "PD15": "105",
  /** Physical pin 106: PG2; bidirectional. */
  "PG2": "106",
  /** Physical pin 107: PG3; bidirectional. */
  "PG3": "107",
  /** Physical pin 108: PG4; bidirectional. */
  "PG4": "108",
  /** Physical pin 109: PG5; bidirectional. */
  "PG5": "109",
  /** Physical pin 110: PG6; bidirectional. */
  "PG6": "110",
  /** Physical pin 111: PG7; bidirectional. */
  "PG7": "111",
  /** Physical pin 112: PG8; bidirectional. */
  "PG8": "112",
  /** Physical pin 113: VSS; passive. */
  "VSS_113": "113",
  /** Physical pin 114: VDD; power_in. */
  "VDD_114": "114",
  /** Physical pin 115: PC6; bidirectional. */
  "PC6": "115",
  /** Physical pin 116: PC7; bidirectional. */
  "PC7": "116",
  /** Physical pin 117: PC8; bidirectional. */
  "PC8": "117",
  /** Physical pin 118: PC9; bidirectional. */
  "PC9": "118",
  /** Physical pin 119: PA8; bidirectional. */
  "PA8": "119",
  /** Physical pin 120: PA9; bidirectional. */
  "PA9": "120",
  /** Physical pin 121: PA10; bidirectional. */
  "PA10": "121",
  /** Physical pin 122: PA11; bidirectional. */
  "PA11": "122",
  /** Physical pin 123: PA12; bidirectional. */
  "PA12": "123",
  /** Physical pin 124: PA13; bidirectional. */
  "PA13": "124",
  /** Physical pin 125: VCAP_2; power_out. */
  "VCAP_2": "125",
  /** Physical pin 126: VSS; passive. */
  "VSS_126": "126",
  /** Physical pin 127: VDD; power_in. */
  "VDD_127": "127",
  /** Physical pin 128: PH13; bidirectional. */
  "PH13": "128",
  /** Physical pin 129: PH14; bidirectional. */
  "PH14": "129",
  /** Physical pin 130: PH15; bidirectional. */
  "PH15": "130",
  /** Physical pin 131: PI0; bidirectional. */
  "PI0": "131",
  /** Physical pin 132: PI1; bidirectional. */
  "PI1": "132",
  /** Physical pin 133: PI2; bidirectional. */
  "PI2": "133",
  /** Physical pin 134: PI3; bidirectional. */
  "PI3": "134",
  /** Physical pin 135: VSS; passive. */
  "VSS_135": "135",
  /** Physical pin 136: VDD; power_in. */
  "VDD_136": "136",
  /** Physical pin 137: PA14; bidirectional. */
  "PA14": "137",
  /** Physical pin 138: PA15; bidirectional. */
  "PA15": "138",
  /** Physical pin 139: PC10; bidirectional. */
  "PC10": "139",
  /** Physical pin 140: PC11; bidirectional. */
  "PC11": "140",
  /** Physical pin 141: PC12; bidirectional. */
  "PC12": "141",
  /** Physical pin 142: PD0; bidirectional. */
  "PD0": "142",
  /** Physical pin 143: PD1; bidirectional. */
  "PD1": "143",
  /** Physical pin 144: PD2; bidirectional. */
  "PD2": "144",
  /** Physical pin 145: PD3; bidirectional. */
  "PD3": "145",
  /** Physical pin 146: PD4; bidirectional. */
  "PD4": "146",
  /** Physical pin 147: PD5; bidirectional. */
  "PD5": "147",
  /** Physical pin 148: VSS; passive. */
  "VSS_148": "148",
  /** Physical pin 149: VDD; power_in. */
  "VDD_149": "149",
  /** Physical pin 150: PD6; bidirectional. */
  "PD6": "150",
  /** Physical pin 151: PD7; bidirectional. */
  "PD7": "151",
  /** Physical pin 152: PG9; bidirectional. */
  "PG9": "152",
  /** Physical pin 153: PG10; bidirectional. */
  "PG10": "153",
  /** Physical pin 154: PG11; bidirectional. */
  "PG11": "154",
  /** Physical pin 155: PG12; bidirectional. */
  "PG12": "155",
  /** Physical pin 156: PG13; bidirectional. */
  "PG13": "156",
  /** Physical pin 157: PG14; bidirectional. */
  "PG14": "157",
  /** Physical pin 158: VSS; passive. */
  "VSS_158": "158",
  /** Physical pin 159: VDD; power_in. */
  "VDD_159": "159",
  /** Physical pin 160: PG15; bidirectional. */
  "PG15": "160",
  /** Physical pin 161: PB3; bidirectional. */
  "PB3": "161",
  /** Physical pin 162: PB4; bidirectional. */
  "PB4": "162",
  /** Physical pin 163: PB5; bidirectional. */
  "PB5": "163",
  /** Physical pin 164: PB6; bidirectional. */
  "PB6": "164",
  /** Physical pin 165: PB7; bidirectional. */
  "PB7": "165",
  /** Physical pin 166: BOOT0; input. */
  "BOOT0": "166",
  /** Physical pin 167: PB8; bidirectional. */
  "PB8": "167",
  /** Physical pin 168: PB9; bidirectional. */
  "PB9": "168",
  /** Physical pin 169: PE0; bidirectional. */
  "PE0": "169",
  /** Physical pin 170: PE1; bidirectional. */
  "PE1": "170",
  /** Physical pin 171: RFU; no_connect. */
  "RFU": "171",
  /** Physical pin 172: VDD; power_in. */
  "VDD_172": "172",
  /** Physical pin 173: PI4; bidirectional. */
  "PI4": "173",
  /** Physical pin 174: PI5; bidirectional. */
  "PI5": "174",
  /** Physical pin 175: PI6; bidirectional. */
  "PI6": "175",
  /** Physical pin 176: PI7; bidirectional. */
  "PI7": "176",
}) {
  override schema = "MCU_ST_STM32F2:STM32F217IETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 140 GPIO, UFBGA176
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F217IGHx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*10x10mm*Layout15x15*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f217ig.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_BGA:UFBGA-201_10x10mm_Layout15x15_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F217IGHx extends Component.withPins({
  /** Physical pin A1: PE3; bidirectional. */
  "PE3": "A1",
  /** Physical pin A2: PE2; bidirectional. */
  "PE2": "A2",
  /** Physical pin A3: PE1; bidirectional. */
  "PE1": "A3",
  /** Physical pin A4: PE0; bidirectional. */
  "PE0": "A4",
  /** Physical pin A5: PB8; bidirectional. */
  "PB8": "A5",
  /** Physical pin A6: PB5; bidirectional. */
  "PB5": "A6",
  /** Physical pin A7: PG14; bidirectional. */
  "PG14": "A7",
  /** Physical pin A8: PG13; bidirectional. */
  "PG13": "A8",
  /** Physical pin A9: PB4; bidirectional. */
  "PB4": "A9",
  /** Physical pin A10: PB3; bidirectional. */
  "PB3": "A10",
  /** Physical pin A11: PD7; bidirectional. */
  "PD7": "A11",
  /** Physical pin A12: PC12; bidirectional. */
  "PC12": "A12",
  /** Physical pin A13: PA15; bidirectional. */
  "PA15": "A13",
  /** Physical pin A14: PA14; bidirectional. */
  "PA14": "A14",
  /** Physical pin A15: PA13; bidirectional. */
  "PA13": "A15",
  /** Physical pin B1: PE4; bidirectional. */
  "PE4": "B1",
  /** Physical pin B2: PE5; bidirectional. */
  "PE5": "B2",
  /** Physical pin B3: PE6; bidirectional. */
  "PE6": "B3",
  /** Physical pin B4: PB9; bidirectional. */
  "PB9": "B4",
  /** Physical pin B5: PB7; bidirectional. */
  "PB7": "B5",
  /** Physical pin B6: PB6; bidirectional. */
  "PB6": "B6",
  /** Physical pin B7: PG15; bidirectional. */
  "PG15": "B7",
  /** Physical pin B8: PG12; bidirectional. */
  "PG12": "B8",
  /** Physical pin B9: PG11; bidirectional. */
  "PG11": "B9",
  /** Physical pin B10: PG10; bidirectional. */
  "PG10": "B10",
  /** Physical pin B11: PD6; bidirectional. */
  "PD6": "B11",
  /** Physical pin B12: PD0; bidirectional. */
  "PD0": "B12",
  /** Physical pin B13: PC11; bidirectional. */
  "PC11": "B13",
  /** Physical pin B14: PC10; bidirectional. */
  "PC10": "B14",
  /** Physical pin B15: PA12; bidirectional. */
  "PA12": "B15",
  /** Physical pin C1: VBAT; power_in. */
  "VBAT": "C1",
  /** Physical pin C2: PI7; bidirectional. */
  "PI7": "C2",
  /** Physical pin C3: PI6; bidirectional. */
  "PI6": "C3",
  /** Physical pin C4: PI5; bidirectional. */
  "PI5": "C4",
  /** Physical pin C5: VDD; power_in. */
  "VDD_C5": "C5",
  /** Physical pin C6: RFU; no_connect. */
  "RFU": "C6",
  /** Physical pin C7: VDD; power_in. */
  "VDD_C7": "C7",
  /** Physical pin C8: VDD; power_in. */
  "VDD_C8": "C8",
  /** Physical pin C9: VDD; power_in. */
  "VDD_C9": "C9",
  /** Physical pin C10: PG9; bidirectional. */
  "PG9": "C10",
  /** Physical pin C11: PD5; bidirectional. */
  "PD5": "C11",
  /** Physical pin C12: PD1; bidirectional. */
  "PD1": "C12",
  /** Physical pin C13: PI3; bidirectional. */
  "PI3": "C13",
  /** Physical pin C14: PI2; bidirectional. */
  "PI2": "C14",
  /** Physical pin C15: PA11; bidirectional. */
  "PA11": "C15",
  /** Physical pin D1: PC13; bidirectional. */
  "PC13": "D1",
  /** Physical pin D2: PI8; bidirectional. */
  "PI8": "D2",
  /** Physical pin D3: PI9; bidirectional. */
  "PI9": "D3",
  /** Physical pin D4: PI4; bidirectional. */
  "PI4": "D4",
  /** Physical pin D5: VSS; power_in. */
  "VSS_D5": "D5",
  /** Physical pin D6: BOOT0; input. */
  "BOOT0": "D6",
  /** Physical pin D7: VSS; passive. */
  "VSS_D7": "D7",
  /** Physical pin D8: VSS; passive. */
  "VSS_D8": "D8",
  /** Physical pin D9: VSS; passive. */
  "VSS_D9": "D9",
  /** Physical pin D10: PD4; bidirectional. */
  "PD4": "D10",
  /** Physical pin D11: PD3; bidirectional. */
  "PD3": "D11",
  /** Physical pin D12: PD2; bidirectional. */
  "PD2": "D12",
  /** Physical pin D13: PH15; bidirectional. */
  "PH15": "D13",
  /** Physical pin D14: PI1; bidirectional. */
  "PI1": "D14",
  /** Physical pin D15: PA10; bidirectional. */
  "PA10": "D15",
  /** Physical pin E1: PC14; bidirectional. */
  "PC14": "E1",
  /** Physical pin E2: PF0; bidirectional. */
  "PF0": "E2",
  /** Physical pin E3: PI10; bidirectional. */
  "PI10": "E3",
  /** Physical pin E4: PI11; bidirectional. */
  "PI11": "E4",
  /** Physical pin E12: PH13; bidirectional. */
  "PH13": "E12",
  /** Physical pin E13: PH14; bidirectional. */
  "PH14": "E13",
  /** Physical pin E14: PI0; bidirectional. */
  "PI0": "E14",
  /** Physical pin E15: PA9; bidirectional. */
  "PA9": "E15",
  /** Physical pin F1: PC15; bidirectional. */
  "PC15": "F1",
  /** Physical pin F2: VSS; passive. */
  "VSS_F2": "F2",
  /** Physical pin F3: VDD; power_in. */
  "VDD_F3": "F3",
  /** Physical pin F4: PH2; bidirectional. */
  "PH2": "F4",
  /** Physical pin F6: VSS; passive. */
  "VSS_F6": "F6",
  /** Physical pin F7: VSS; passive. */
  "VSS_F7": "F7",
  /** Physical pin F8: VSS; passive. */
  "VSS_F8": "F8",
  /** Physical pin F9: VSS; passive. */
  "VSS_F9": "F9",
  /** Physical pin F10: VSS; passive. */
  "VSS_F10": "F10",
  /** Physical pin F12: VSS; passive. */
  "VSS_F12": "F12",
  /** Physical pin F13: VCAP_2; power_out. */
  "VCAP_2": "F13",
  /** Physical pin F14: PC9; bidirectional. */
  "PC9": "F14",
  /** Physical pin F15: PA8; bidirectional. */
  "PA8": "F15",
  /** Physical pin G1: PH0; bidirectional. */
  "PH0": "G1",
  /** Physical pin G2: VSS; passive. */
  "VSS_G2": "G2",
  /** Physical pin G3: VDD; power_in. */
  "VDD_G3": "G3",
  /** Physical pin G4: PH3; bidirectional. */
  "PH3": "G4",
  /** Physical pin G6: VSS; passive. */
  "VSS_G6": "G6",
  /** Physical pin G7: VSS; passive. */
  "VSS_G7": "G7",
  /** Physical pin G8: VSS; passive. */
  "VSS_G8": "G8",
  /** Physical pin G9: VSS; passive. */
  "VSS_G9": "G9",
  /** Physical pin G10: VSS; passive. */
  "VSS_G10": "G10",
  /** Physical pin G12: VSS; passive. */
  "VSS_G12": "G12",
  /** Physical pin G13: VDD; power_in. */
  "VDD_G13": "G13",
  /** Physical pin G14: PC8; bidirectional. */
  "PC8": "G14",
  /** Physical pin G15: PC7; bidirectional. */
  "PC7": "G15",
  /** Physical pin H1: PH1; bidirectional. */
  "PH1": "H1",
  /** Physical pin H2: PF2; bidirectional. */
  "PF2": "H2",
  /** Physical pin H3: PF1; bidirectional. */
  "PF1": "H3",
  /** Physical pin H4: PH4; bidirectional. */
  "PH4": "H4",
  /** Physical pin H6: VSS; passive. */
  "VSS_H6": "H6",
  /** Physical pin H7: VSS; passive. */
  "VSS_H7": "H7",
  /** Physical pin H8: VSS; passive. */
  "VSS_H8": "H8",
  /** Physical pin H9: VSS; passive. */
  "VSS_H9": "H9",
  /** Physical pin H10: VSS; passive. */
  "VSS_H10": "H10",
  /** Physical pin H12: VSS; passive. */
  "VSS_H12": "H12",
  /** Physical pin H13: VDD; power_in. */
  "VDD_H13": "H13",
  /** Physical pin H14: PG8; bidirectional. */
  "PG8": "H14",
  /** Physical pin H15: PC6; bidirectional. */
  "PC6": "H15",
  /** Physical pin J1: NRST; input. */
  "NRST": "J1",
  /** Physical pin J2: PF3; bidirectional. */
  "PF3": "J2",
  /** Physical pin J3: PF4; bidirectional. */
  "PF4": "J3",
  /** Physical pin J4: PH5; bidirectional. */
  "PH5": "J4",
  /** Physical pin J6: VSS; passive. */
  "VSS_J6": "J6",
  /** Physical pin J7: VSS; passive. */
  "VSS_J7": "J7",
  /** Physical pin J8: VSS; passive. */
  "VSS_J8": "J8",
  /** Physical pin J9: VSS; passive. */
  "VSS_J9": "J9",
  /** Physical pin J10: VSS; passive. */
  "VSS_J10": "J10",
  /** Physical pin J12: VDD; power_in. */
  "VDD_J12": "J12",
  /** Physical pin J13: VDD; power_in. */
  "VDD_J13": "J13",
  /** Physical pin J14: PG7; bidirectional. */
  "PG7": "J14",
  /** Physical pin J15: PG6; bidirectional. */
  "PG6": "J15",
  /** Physical pin K1: PF7; bidirectional. */
  "PF7": "K1",
  /** Physical pin K2: PF6; bidirectional. */
  "PF6": "K2",
  /** Physical pin K3: PF5; bidirectional. */
  "PF5": "K3",
  /** Physical pin K4: VDD; power_in. */
  "VDD_K4": "K4",
  /** Physical pin K6: VSS; passive. */
  "VSS_K6": "K6",
  /** Physical pin K7: VSS; passive. */
  "VSS_K7": "K7",
  /** Physical pin K8: VSS; passive. */
  "VSS_K8": "K8",
  /** Physical pin K9: VSS; passive. */
  "VSS_K9": "K9",
  /** Physical pin K10: VSS; passive. */
  "VSS_K10": "K10",
  /** Physical pin K12: PH12; bidirectional. */
  "PH12": "K12",
  /** Physical pin K13: PG5; bidirectional. */
  "PG5": "K13",
  /** Physical pin K14: PG4; bidirectional. */
  "PG4": "K14",
  /** Physical pin K15: PG3; bidirectional. */
  "PG3": "K15",
  /** Physical pin L1: PF10; bidirectional. */
  "PF10": "L1",
  /** Physical pin L2: PF9; bidirectional. */
  "PF9": "L2",
  /** Physical pin L3: PF8; bidirectional. */
  "PF8": "L3",
  /** Physical pin L4: REGOFF; input. */
  "REGOFF": "L4",
  /** Physical pin L12: PH11; bidirectional. */
  "PH11": "L12",
  /** Physical pin L13: PH10; bidirectional. */
  "PH10": "L13",
  /** Physical pin L14: PD15; bidirectional. */
  "PD15": "L14",
  /** Physical pin L15: PG2; bidirectional. */
  "PG2": "L15",
  /** Physical pin M1: VSSA; power_in. */
  "VSSA": "M1",
  /** Physical pin M2: PC0; bidirectional. */
  "PC0": "M2",
  /** Physical pin M3: PC1; bidirectional. */
  "PC1": "M3",
  /** Physical pin M4: PC2; bidirectional. */
  "PC2": "M4",
  /** Physical pin M5: PC3; bidirectional. */
  "PC3": "M5",
  /** Physical pin M6: PB2; bidirectional. */
  "PB2": "M6",
  /** Physical pin M7: PG1; bidirectional. */
  "PG1": "M7",
  /** Physical pin M8: VSS; passive. */
  "VSS_M8": "M8",
  /** Physical pin M9: VSS; passive. */
  "VSS_M9": "M9",
  /** Physical pin M10: VCAP_1; power_out. */
  "VCAP_1": "M10",
  /** Physical pin M11: PH6; bidirectional. */
  "PH6": "M11",
  /** Physical pin M12: PH8; bidirectional. */
  "PH8": "M12",
  /** Physical pin M13: PH9; bidirectional. */
  "PH9": "M13",
  /** Physical pin M14: PD14; bidirectional. */
  "PD14": "M14",
  /** Physical pin M15: PD13; bidirectional. */
  "PD13": "M15",
  /** Physical pin N1: VREF-; input. */
  "VREF-": "N1",
  /** Physical pin N2: PA1; bidirectional. */
  "PA1": "N2",
  /** Physical pin N3: PA0; bidirectional. */
  "PA0": "N3",
  /** Physical pin N4: PA4; bidirectional. */
  "PA4": "N4",
  /** Physical pin N5: PC4; bidirectional. */
  "PC4": "N5",
  /** Physical pin N6: PF13; bidirectional. */
  "PF13": "N6",
  /** Physical pin N7: PG0; bidirectional. */
  "PG0": "N7",
  /** Physical pin N8: VDD; power_in. */
  "VDD_N8": "N8",
  /** Physical pin N9: VDD; power_in. */
  "VDD_N9": "N9",
  /** Physical pin N10: VDD; power_in. */
  "VDD_N10": "N10",
  /** Physical pin N11: PE13; bidirectional. */
  "PE13": "N11",
  /** Physical pin N12: PH7; bidirectional. */
  "PH7": "N12",
  /** Physical pin N13: PD12; bidirectional. */
  "PD12": "N13",
  /** Physical pin N14: PD11; bidirectional. */
  "PD11": "N14",
  /** Physical pin N15: PD10; bidirectional. */
  "PD10": "N15",
  /** Physical pin P1: VREF+; input. */
  "VREF+": "P1",
  /** Physical pin P2: PA2; bidirectional. */
  "PA2": "P2",
  /** Physical pin P3: PA6; bidirectional. */
  "PA6": "P3",
  /** Physical pin P4: PA5; bidirectional. */
  "PA5": "P4",
  /** Physical pin P5: PC5; bidirectional. */
  "PC5": "P5",
  /** Physical pin P6: PF12; bidirectional. */
  "PF12": "P6",
  /** Physical pin P7: PF15; bidirectional. */
  "PF15": "P7",
  /** Physical pin P8: PE8; bidirectional. */
  "PE8": "P8",
  /** Physical pin P9: PE9; bidirectional. */
  "PE9": "P9",
  /** Physical pin P10: PE11; bidirectional. */
  "PE11": "P10",
  /** Physical pin P11: PE14; bidirectional. */
  "PE14": "P11",
  /** Physical pin P12: PB12; bidirectional. */
  "PB12": "P12",
  /** Physical pin P13: PB13; bidirectional. */
  "PB13": "P13",
  /** Physical pin P14: PD9; bidirectional. */
  "PD9": "P14",
  /** Physical pin P15: PD8; bidirectional. */
  "PD8": "P15",
  /** Physical pin R1: VDDA; power_in. */
  "VDDA": "R1",
  /** Physical pin R2: PA3; bidirectional. */
  "PA3": "R2",
  /** Physical pin R3: PA7; bidirectional. */
  "PA7": "R3",
  /** Physical pin R4: PB1; bidirectional. */
  "PB1": "R4",
  /** Physical pin R5: PB0; bidirectional. */
  "PB0": "R5",
  /** Physical pin R6: PF11; bidirectional. */
  "PF11": "R6",
  /** Physical pin R7: PF14; bidirectional. */
  "PF14": "R7",
  /** Physical pin R8: PE7; bidirectional. */
  "PE7": "R8",
  /** Physical pin R9: PE10; bidirectional. */
  "PE10": "R9",
  /** Physical pin R10: PE12; bidirectional. */
  "PE12": "R10",
  /** Physical pin R11: PE15; bidirectional. */
  "PE15": "R11",
  /** Physical pin R12: PB10; bidirectional. */
  "PB10": "R12",
  /** Physical pin R13: PB11; bidirectional. */
  "PB11": "R13",
  /** Physical pin R14: PB14; bidirectional. */
  "PB14": "R14",
  /** Physical pin R15: PB15; bidirectional. */
  "PB15": "R15",
}) {
  override schema = "MCU_ST_STM32F2:STM32F217IGHx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 140 GPIO, LQFP176
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F217IGTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*24x24mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f217ig.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_QFP:LQFP-176_24x24mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F217IGTx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PI8; bidirectional. */
  "PI8": "7",
  /** Physical pin 8: PC13; bidirectional. */
  "PC13": "8",
  /** Physical pin 9: PC14; bidirectional. */
  "PC14": "9",
  /** Physical pin 10: PC15; bidirectional. */
  "PC15": "10",
  /** Physical pin 11: PI9; bidirectional. */
  "PI9": "11",
  /** Physical pin 12: PI10; bidirectional. */
  "PI10": "12",
  /** Physical pin 13: PI11; bidirectional. */
  "PI11": "13",
  /** Physical pin 14: VSS; power_in. */
  "VSS_14": "14",
  /** Physical pin 15: VDD; power_in. */
  "VDD_15": "15",
  /** Physical pin 16: PF0; bidirectional. */
  "PF0": "16",
  /** Physical pin 17: PF1; bidirectional. */
  "PF1": "17",
  /** Physical pin 18: PF2; bidirectional. */
  "PF2": "18",
  /** Physical pin 19: PF3; bidirectional. */
  "PF3": "19",
  /** Physical pin 20: PF4; bidirectional. */
  "PF4": "20",
  /** Physical pin 21: PF5; bidirectional. */
  "PF5": "21",
  /** Physical pin 22: VSS; passive. */
  "VSS_22": "22",
  /** Physical pin 23: VDD; power_in. */
  "VDD_23": "23",
  /** Physical pin 24: PF6; bidirectional. */
  "PF6": "24",
  /** Physical pin 25: PF7; bidirectional. */
  "PF7": "25",
  /** Physical pin 26: PF8; bidirectional. */
  "PF8": "26",
  /** Physical pin 27: PF9; bidirectional. */
  "PF9": "27",
  /** Physical pin 28: PF10; bidirectional. */
  "PF10": "28",
  /** Physical pin 29: PH0; bidirectional. */
  "PH0": "29",
  /** Physical pin 30: PH1; bidirectional. */
  "PH1": "30",
  /** Physical pin 31: NRST; input. */
  "NRST": "31",
  /** Physical pin 32: PC0; bidirectional. */
  "PC0": "32",
  /** Physical pin 33: PC1; bidirectional. */
  "PC1": "33",
  /** Physical pin 34: PC2; bidirectional. */
  "PC2": "34",
  /** Physical pin 35: PC3; bidirectional. */
  "PC3": "35",
  /** Physical pin 36: VDD; power_in. */
  "VDD_36": "36",
  /** Physical pin 37: VSSA; power_in. */
  "VSSA": "37",
  /** Physical pin 38: VREF+; input. */
  "VREF+": "38",
  /** Physical pin 39: VDDA; power_in. */
  "VDDA": "39",
  /** Physical pin 40: PA0; bidirectional. */
  "PA0": "40",
  /** Physical pin 41: PA1; bidirectional. */
  "PA1": "41",
  /** Physical pin 42: PA2; bidirectional. */
  "PA2": "42",
  /** Physical pin 43: PH2; bidirectional. */
  "PH2": "43",
  /** Physical pin 44: PH3; bidirectional. */
  "PH3": "44",
  /** Physical pin 45: PH4; bidirectional. */
  "PH4": "45",
  /** Physical pin 46: PH5; bidirectional. */
  "PH5": "46",
  /** Physical pin 47: PA3; bidirectional. */
  "PA3": "47",
  /** Physical pin 48: VSS; passive. */
  "VSS_48": "48",
  /** Physical pin 49: VDD; power_in. */
  "VDD_49": "49",
  /** Physical pin 50: PA4; bidirectional. */
  "PA4": "50",
  /** Physical pin 51: PA5; bidirectional. */
  "PA5": "51",
  /** Physical pin 52: PA6; bidirectional. */
  "PA6": "52",
  /** Physical pin 53: PA7; bidirectional. */
  "PA7": "53",
  /** Physical pin 54: PC4; bidirectional. */
  "PC4": "54",
  /** Physical pin 55: PC5; bidirectional. */
  "PC5": "55",
  /** Physical pin 56: PB0; bidirectional. */
  "PB0": "56",
  /** Physical pin 57: PB1; bidirectional. */
  "PB1": "57",
  /** Physical pin 58: PB2; bidirectional. */
  "PB2": "58",
  /** Physical pin 59: PF11; bidirectional. */
  "PF11": "59",
  /** Physical pin 60: PF12; bidirectional. */
  "PF12": "60",
  /** Physical pin 61: VSS; passive. */
  "VSS_61": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: PF13; bidirectional. */
  "PF13": "63",
  /** Physical pin 64: PF14; bidirectional. */
  "PF14": "64",
  /** Physical pin 65: PF15; bidirectional. */
  "PF15": "65",
  /** Physical pin 66: PG0; bidirectional. */
  "PG0": "66",
  /** Physical pin 67: PG1; bidirectional. */
  "PG1": "67",
  /** Physical pin 68: PE7; bidirectional. */
  "PE7": "68",
  /** Physical pin 69: PE8; bidirectional. */
  "PE8": "69",
  /** Physical pin 70: PE9; bidirectional. */
  "PE9": "70",
  /** Physical pin 71: VSS; passive. */
  "VSS_71": "71",
  /** Physical pin 72: VDD; power_in. */
  "VDD_72": "72",
  /** Physical pin 73: PE10; bidirectional. */
  "PE10": "73",
  /** Physical pin 74: PE11; bidirectional. */
  "PE11": "74",
  /** Physical pin 75: PE12; bidirectional. */
  "PE12": "75",
  /** Physical pin 76: PE13; bidirectional. */
  "PE13": "76",
  /** Physical pin 77: PE14; bidirectional. */
  "PE14": "77",
  /** Physical pin 78: PE15; bidirectional. */
  "PE15": "78",
  /** Physical pin 79: PB10; bidirectional. */
  "PB10": "79",
  /** Physical pin 80: PB11; bidirectional. */
  "PB11": "80",
  /** Physical pin 81: VCAP_1; power_out. */
  "VCAP_1": "81",
  /** Physical pin 82: VDD; power_in. */
  "VDD_82": "82",
  /** Physical pin 83: PH6; bidirectional. */
  "PH6": "83",
  /** Physical pin 84: PH7; bidirectional. */
  "PH7": "84",
  /** Physical pin 85: PH8; bidirectional. */
  "PH8": "85",
  /** Physical pin 86: PH9; bidirectional. */
  "PH9": "86",
  /** Physical pin 87: PH10; bidirectional. */
  "PH10": "87",
  /** Physical pin 88: PH11; bidirectional. */
  "PH11": "88",
  /** Physical pin 89: PH12; bidirectional. */
  "PH12": "89",
  /** Physical pin 90: VSS; passive. */
  "VSS_90": "90",
  /** Physical pin 91: VDD; power_in. */
  "VDD_91": "91",
  /** Physical pin 92: PB12; bidirectional. */
  "PB12": "92",
  /** Physical pin 93: PB13; bidirectional. */
  "PB13": "93",
  /** Physical pin 94: PB14; bidirectional. */
  "PB14": "94",
  /** Physical pin 95: PB15; bidirectional. */
  "PB15": "95",
  /** Physical pin 96: PD8; bidirectional. */
  "PD8": "96",
  /** Physical pin 97: PD9; bidirectional. */
  "PD9": "97",
  /** Physical pin 98: PD10; bidirectional. */
  "PD10": "98",
  /** Physical pin 99: PD11; bidirectional. */
  "PD11": "99",
  /** Physical pin 100: PD12; bidirectional. */
  "PD12": "100",
  /** Physical pin 101: PD13; bidirectional. */
  "PD13": "101",
  /** Physical pin 102: VSS; passive. */
  "VSS_102": "102",
  /** Physical pin 103: VDD; power_in. */
  "VDD_103": "103",
  /** Physical pin 104: PD14; bidirectional. */
  "PD14": "104",
  /** Physical pin 105: PD15; bidirectional. */
  "PD15": "105",
  /** Physical pin 106: PG2; bidirectional. */
  "PG2": "106",
  /** Physical pin 107: PG3; bidirectional. */
  "PG3": "107",
  /** Physical pin 108: PG4; bidirectional. */
  "PG4": "108",
  /** Physical pin 109: PG5; bidirectional. */
  "PG5": "109",
  /** Physical pin 110: PG6; bidirectional. */
  "PG6": "110",
  /** Physical pin 111: PG7; bidirectional. */
  "PG7": "111",
  /** Physical pin 112: PG8; bidirectional. */
  "PG8": "112",
  /** Physical pin 113: VSS; passive. */
  "VSS_113": "113",
  /** Physical pin 114: VDD; power_in. */
  "VDD_114": "114",
  /** Physical pin 115: PC6; bidirectional. */
  "PC6": "115",
  /** Physical pin 116: PC7; bidirectional. */
  "PC7": "116",
  /** Physical pin 117: PC8; bidirectional. */
  "PC8": "117",
  /** Physical pin 118: PC9; bidirectional. */
  "PC9": "118",
  /** Physical pin 119: PA8; bidirectional. */
  "PA8": "119",
  /** Physical pin 120: PA9; bidirectional. */
  "PA9": "120",
  /** Physical pin 121: PA10; bidirectional. */
  "PA10": "121",
  /** Physical pin 122: PA11; bidirectional. */
  "PA11": "122",
  /** Physical pin 123: PA12; bidirectional. */
  "PA12": "123",
  /** Physical pin 124: PA13; bidirectional. */
  "PA13": "124",
  /** Physical pin 125: VCAP_2; power_out. */
  "VCAP_2": "125",
  /** Physical pin 126: VSS; passive. */
  "VSS_126": "126",
  /** Physical pin 127: VDD; power_in. */
  "VDD_127": "127",
  /** Physical pin 128: PH13; bidirectional. */
  "PH13": "128",
  /** Physical pin 129: PH14; bidirectional. */
  "PH14": "129",
  /** Physical pin 130: PH15; bidirectional. */
  "PH15": "130",
  /** Physical pin 131: PI0; bidirectional. */
  "PI0": "131",
  /** Physical pin 132: PI1; bidirectional. */
  "PI1": "132",
  /** Physical pin 133: PI2; bidirectional. */
  "PI2": "133",
  /** Physical pin 134: PI3; bidirectional. */
  "PI3": "134",
  /** Physical pin 135: VSS; passive. */
  "VSS_135": "135",
  /** Physical pin 136: VDD; power_in. */
  "VDD_136": "136",
  /** Physical pin 137: PA14; bidirectional. */
  "PA14": "137",
  /** Physical pin 138: PA15; bidirectional. */
  "PA15": "138",
  /** Physical pin 139: PC10; bidirectional. */
  "PC10": "139",
  /** Physical pin 140: PC11; bidirectional. */
  "PC11": "140",
  /** Physical pin 141: PC12; bidirectional. */
  "PC12": "141",
  /** Physical pin 142: PD0; bidirectional. */
  "PD0": "142",
  /** Physical pin 143: PD1; bidirectional. */
  "PD1": "143",
  /** Physical pin 144: PD2; bidirectional. */
  "PD2": "144",
  /** Physical pin 145: PD3; bidirectional. */
  "PD3": "145",
  /** Physical pin 146: PD4; bidirectional. */
  "PD4": "146",
  /** Physical pin 147: PD5; bidirectional. */
  "PD5": "147",
  /** Physical pin 148: VSS; passive. */
  "VSS_148": "148",
  /** Physical pin 149: VDD; power_in. */
  "VDD_149": "149",
  /** Physical pin 150: PD6; bidirectional. */
  "PD6": "150",
  /** Physical pin 151: PD7; bidirectional. */
  "PD7": "151",
  /** Physical pin 152: PG9; bidirectional. */
  "PG9": "152",
  /** Physical pin 153: PG10; bidirectional. */
  "PG10": "153",
  /** Physical pin 154: PG11; bidirectional. */
  "PG11": "154",
  /** Physical pin 155: PG12; bidirectional. */
  "PG12": "155",
  /** Physical pin 156: PG13; bidirectional. */
  "PG13": "156",
  /** Physical pin 157: PG14; bidirectional. */
  "PG14": "157",
  /** Physical pin 158: VSS; passive. */
  "VSS_158": "158",
  /** Physical pin 159: VDD; power_in. */
  "VDD_159": "159",
  /** Physical pin 160: PG15; bidirectional. */
  "PG15": "160",
  /** Physical pin 161: PB3; bidirectional. */
  "PB3": "161",
  /** Physical pin 162: PB4; bidirectional. */
  "PB4": "162",
  /** Physical pin 163: PB5; bidirectional. */
  "PB5": "163",
  /** Physical pin 164: PB6; bidirectional. */
  "PB6": "164",
  /** Physical pin 165: PB7; bidirectional. */
  "PB7": "165",
  /** Physical pin 166: BOOT0; input. */
  "BOOT0": "166",
  /** Physical pin 167: PB8; bidirectional. */
  "PB8": "167",
  /** Physical pin 168: PB9; bidirectional. */
  "PB9": "168",
  /** Physical pin 169: PE0; bidirectional. */
  "PE0": "169",
  /** Physical pin 170: PE1; bidirectional. */
  "PE1": "170",
  /** Physical pin 171: RFU; no_connect. */
  "RFU": "171",
  /** Physical pin 172: VDD; power_in. */
  "VDD_172": "172",
  /** Physical pin 173: PI4; bidirectional. */
  "PI4": "173",
  /** Physical pin 174: PI5; bidirectional. */
  "PI5": "174",
  /** Physical pin 175: PI6; bidirectional. */
  "PI6": "175",
  /** Physical pin 176: PI7; bidirectional. */
  "PI7": "176",
}) {
  override schema = "MCU_ST_STM32F2:STM32F217IGTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 512-1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 82 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F217V_E-G_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f217ve.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F217V_E_G_Tx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: PH0; bidirectional. */
  "PH0": "12",
  /** Physical pin 13: PH1; bidirectional. */
  "PH1": "13",
  /** Physical pin 14: NRST; input. */
  "NRST": "14",
  /** Physical pin 15: PC0; bidirectional. */
  "PC0": "15",
  /** Physical pin 16: PC1; bidirectional. */
  "PC1": "16",
  /** Physical pin 17: PC2; bidirectional. */
  "PC2": "17",
  /** Physical pin 18: PC3; bidirectional. */
  "PC3": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: VSSA; power_in. */
  "VSSA": "20",
  /** Physical pin 21: VREF+; input. */
  "VREF+": "21",
  /** Physical pin 22: VDDA; power_in. */
  "VDDA": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: PA1; bidirectional. */
  "PA1": "24",
  /** Physical pin 25: PA2; bidirectional. */
  "PA2": "25",
  /** Physical pin 26: PA3; bidirectional. */
  "PA3": "26",
  /** Physical pin 27: VSS; passive. */
  "VSS_27": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: PA4; bidirectional. */
  "PA4": "29",
  /** Physical pin 30: PA5; bidirectional. */
  "PA5": "30",
  /** Physical pin 31: PA6; bidirectional. */
  "PA6": "31",
  /** Physical pin 32: PA7; bidirectional. */
  "PA7": "32",
  /** Physical pin 33: PC4; bidirectional. */
  "PC4": "33",
  /** Physical pin 34: PC5; bidirectional. */
  "PC5": "34",
  /** Physical pin 35: PB0; bidirectional. */
  "PB0": "35",
  /** Physical pin 36: PB1; bidirectional. */
  "PB1": "36",
  /** Physical pin 37: PB2; bidirectional. */
  "PB2": "37",
  /** Physical pin 38: PE7; bidirectional. */
  "PE7": "38",
  /** Physical pin 39: PE8; bidirectional. */
  "PE8": "39",
  /** Physical pin 40: PE9; bidirectional. */
  "PE9": "40",
  /** Physical pin 41: PE10; bidirectional. */
  "PE10": "41",
  /** Physical pin 42: PE11; bidirectional. */
  "PE11": "42",
  /** Physical pin 43: PE12; bidirectional. */
  "PE12": "43",
  /** Physical pin 44: PE13; bidirectional. */
  "PE13": "44",
  /** Physical pin 45: PE14; bidirectional. */
  "PE14": "45",
  /** Physical pin 46: PE15; bidirectional. */
  "PE15": "46",
  /** Physical pin 47: PB10; bidirectional. */
  "PB10": "47",
  /** Physical pin 48: PB11; bidirectional. */
  "PB11": "48",
  /** Physical pin 49: VCAP_1; power_out. */
  "VCAP_1": "49",
  /** Physical pin 50: VDD; power_in. */
  "VDD_50": "50",
  /** Physical pin 51: PB12; bidirectional. */
  "PB12": "51",
  /** Physical pin 52: PB13; bidirectional. */
  "PB13": "52",
  /** Physical pin 53: PB14; bidirectional. */
  "PB14": "53",
  /** Physical pin 54: PB15; bidirectional. */
  "PB15": "54",
  /** Physical pin 55: PD8; bidirectional. */
  "PD8": "55",
  /** Physical pin 56: PD9; bidirectional. */
  "PD9": "56",
  /** Physical pin 57: PD10; bidirectional. */
  "PD10": "57",
  /** Physical pin 58: PD11; bidirectional. */
  "PD11": "58",
  /** Physical pin 59: PD12; bidirectional. */
  "PD12": "59",
  /** Physical pin 60: PD13; bidirectional. */
  "PD13": "60",
  /** Physical pin 61: PD14; bidirectional. */
  "PD14": "61",
  /** Physical pin 62: PD15; bidirectional. */
  "PD15": "62",
  /** Physical pin 63: PC6; bidirectional. */
  "PC6": "63",
  /** Physical pin 64: PC7; bidirectional. */
  "PC7": "64",
  /** Physical pin 65: PC8; bidirectional. */
  "PC8": "65",
  /** Physical pin 66: PC9; bidirectional. */
  "PC9": "66",
  /** Physical pin 67: PA8; bidirectional. */
  "PA8": "67",
  /** Physical pin 68: PA9; bidirectional. */
  "PA9": "68",
  /** Physical pin 69: PA10; bidirectional. */
  "PA10": "69",
  /** Physical pin 70: PA11; bidirectional. */
  "PA11": "70",
  /** Physical pin 71: PA12; bidirectional. */
  "PA12": "71",
  /** Physical pin 72: PA13; bidirectional. */
  "PA13": "72",
  /** Physical pin 73: VCAP_2; power_out. */
  "VCAP_2": "73",
  /** Physical pin 74: VSS; passive. */
  "VSS_74": "74",
  /** Physical pin 75: VDD; power_in. */
  "VDD_75": "75",
  /** Physical pin 76: PA14; bidirectional. */
  "PA14": "76",
  /** Physical pin 77: PA15; bidirectional. */
  "PA15": "77",
  /** Physical pin 78: PC10; bidirectional. */
  "PC10": "78",
  /** Physical pin 79: PC11; bidirectional. */
  "PC11": "79",
  /** Physical pin 80: PC12; bidirectional. */
  "PC12": "80",
  /** Physical pin 81: PD0; bidirectional. */
  "PD0": "81",
  /** Physical pin 82: PD1; bidirectional. */
  "PD1": "82",
  /** Physical pin 83: PD2; bidirectional. */
  "PD2": "83",
  /** Physical pin 84: PD3; bidirectional. */
  "PD3": "84",
  /** Physical pin 85: PD4; bidirectional. */
  "PD4": "85",
  /** Physical pin 86: PD5; bidirectional. */
  "PD5": "86",
  /** Physical pin 87: PD6; bidirectional. */
  "PD6": "87",
  /** Physical pin 88: PD7; bidirectional. */
  "PD7": "88",
  /** Physical pin 89: PB3; bidirectional. */
  "PB3": "89",
  /** Physical pin 90: PB4; bidirectional. */
  "PB4": "90",
  /** Physical pin 91: PB5; bidirectional. */
  "PB5": "91",
  /** Physical pin 92: PB6; bidirectional. */
  "PB6": "92",
  /** Physical pin 93: PB7; bidirectional. */
  "PB7": "93",
  /** Physical pin 94: BOOT0; input. */
  "BOOT0": "94",
  /** Physical pin 95: PB8; bidirectional. */
  "PB8": "95",
  /** Physical pin 96: PB9; bidirectional. */
  "PB9": "96",
  /** Physical pin 97: PE0; bidirectional. */
  "PE0": "97",
  /** Physical pin 98: PE1; bidirectional. */
  "PE1": "98",
  /** Physical pin 99: RFU; no_connect. */
  "RFU": "99",
  /** Physical pin 100: VDD; power_in. */
  "VDD_100": "100",
}) {
  override schema = "MCU_ST_STM32F2:STM32F217V_E-G_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 512KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 82 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F217VETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f217ve.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F217VETx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: PH0; bidirectional. */
  "PH0": "12",
  /** Physical pin 13: PH1; bidirectional. */
  "PH1": "13",
  /** Physical pin 14: NRST; input. */
  "NRST": "14",
  /** Physical pin 15: PC0; bidirectional. */
  "PC0": "15",
  /** Physical pin 16: PC1; bidirectional. */
  "PC1": "16",
  /** Physical pin 17: PC2; bidirectional. */
  "PC2": "17",
  /** Physical pin 18: PC3; bidirectional. */
  "PC3": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: VSSA; power_in. */
  "VSSA": "20",
  /** Physical pin 21: VREF+; input. */
  "VREF+": "21",
  /** Physical pin 22: VDDA; power_in. */
  "VDDA": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: PA1; bidirectional. */
  "PA1": "24",
  /** Physical pin 25: PA2; bidirectional. */
  "PA2": "25",
  /** Physical pin 26: PA3; bidirectional. */
  "PA3": "26",
  /** Physical pin 27: VSS; passive. */
  "VSS_27": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: PA4; bidirectional. */
  "PA4": "29",
  /** Physical pin 30: PA5; bidirectional. */
  "PA5": "30",
  /** Physical pin 31: PA6; bidirectional. */
  "PA6": "31",
  /** Physical pin 32: PA7; bidirectional. */
  "PA7": "32",
  /** Physical pin 33: PC4; bidirectional. */
  "PC4": "33",
  /** Physical pin 34: PC5; bidirectional. */
  "PC5": "34",
  /** Physical pin 35: PB0; bidirectional. */
  "PB0": "35",
  /** Physical pin 36: PB1; bidirectional. */
  "PB1": "36",
  /** Physical pin 37: PB2; bidirectional. */
  "PB2": "37",
  /** Physical pin 38: PE7; bidirectional. */
  "PE7": "38",
  /** Physical pin 39: PE8; bidirectional. */
  "PE8": "39",
  /** Physical pin 40: PE9; bidirectional. */
  "PE9": "40",
  /** Physical pin 41: PE10; bidirectional. */
  "PE10": "41",
  /** Physical pin 42: PE11; bidirectional. */
  "PE11": "42",
  /** Physical pin 43: PE12; bidirectional. */
  "PE12": "43",
  /** Physical pin 44: PE13; bidirectional. */
  "PE13": "44",
  /** Physical pin 45: PE14; bidirectional. */
  "PE14": "45",
  /** Physical pin 46: PE15; bidirectional. */
  "PE15": "46",
  /** Physical pin 47: PB10; bidirectional. */
  "PB10": "47",
  /** Physical pin 48: PB11; bidirectional. */
  "PB11": "48",
  /** Physical pin 49: VCAP_1; power_out. */
  "VCAP_1": "49",
  /** Physical pin 50: VDD; power_in. */
  "VDD_50": "50",
  /** Physical pin 51: PB12; bidirectional. */
  "PB12": "51",
  /** Physical pin 52: PB13; bidirectional. */
  "PB13": "52",
  /** Physical pin 53: PB14; bidirectional. */
  "PB14": "53",
  /** Physical pin 54: PB15; bidirectional. */
  "PB15": "54",
  /** Physical pin 55: PD8; bidirectional. */
  "PD8": "55",
  /** Physical pin 56: PD9; bidirectional. */
  "PD9": "56",
  /** Physical pin 57: PD10; bidirectional. */
  "PD10": "57",
  /** Physical pin 58: PD11; bidirectional. */
  "PD11": "58",
  /** Physical pin 59: PD12; bidirectional. */
  "PD12": "59",
  /** Physical pin 60: PD13; bidirectional. */
  "PD13": "60",
  /** Physical pin 61: PD14; bidirectional. */
  "PD14": "61",
  /** Physical pin 62: PD15; bidirectional. */
  "PD15": "62",
  /** Physical pin 63: PC6; bidirectional. */
  "PC6": "63",
  /** Physical pin 64: PC7; bidirectional. */
  "PC7": "64",
  /** Physical pin 65: PC8; bidirectional. */
  "PC8": "65",
  /** Physical pin 66: PC9; bidirectional. */
  "PC9": "66",
  /** Physical pin 67: PA8; bidirectional. */
  "PA8": "67",
  /** Physical pin 68: PA9; bidirectional. */
  "PA9": "68",
  /** Physical pin 69: PA10; bidirectional. */
  "PA10": "69",
  /** Physical pin 70: PA11; bidirectional. */
  "PA11": "70",
  /** Physical pin 71: PA12; bidirectional. */
  "PA12": "71",
  /** Physical pin 72: PA13; bidirectional. */
  "PA13": "72",
  /** Physical pin 73: VCAP_2; power_out. */
  "VCAP_2": "73",
  /** Physical pin 74: VSS; passive. */
  "VSS_74": "74",
  /** Physical pin 75: VDD; power_in. */
  "VDD_75": "75",
  /** Physical pin 76: PA14; bidirectional. */
  "PA14": "76",
  /** Physical pin 77: PA15; bidirectional. */
  "PA15": "77",
  /** Physical pin 78: PC10; bidirectional. */
  "PC10": "78",
  /** Physical pin 79: PC11; bidirectional. */
  "PC11": "79",
  /** Physical pin 80: PC12; bidirectional. */
  "PC12": "80",
  /** Physical pin 81: PD0; bidirectional. */
  "PD0": "81",
  /** Physical pin 82: PD1; bidirectional. */
  "PD1": "82",
  /** Physical pin 83: PD2; bidirectional. */
  "PD2": "83",
  /** Physical pin 84: PD3; bidirectional. */
  "PD3": "84",
  /** Physical pin 85: PD4; bidirectional. */
  "PD4": "85",
  /** Physical pin 86: PD5; bidirectional. */
  "PD5": "86",
  /** Physical pin 87: PD6; bidirectional. */
  "PD6": "87",
  /** Physical pin 88: PD7; bidirectional. */
  "PD7": "88",
  /** Physical pin 89: PB3; bidirectional. */
  "PB3": "89",
  /** Physical pin 90: PB4; bidirectional. */
  "PB4": "90",
  /** Physical pin 91: PB5; bidirectional. */
  "PB5": "91",
  /** Physical pin 92: PB6; bidirectional. */
  "PB6": "92",
  /** Physical pin 93: PB7; bidirectional. */
  "PB7": "93",
  /** Physical pin 94: BOOT0; input. */
  "BOOT0": "94",
  /** Physical pin 95: PB8; bidirectional. */
  "PB8": "95",
  /** Physical pin 96: PB9; bidirectional. */
  "PB9": "96",
  /** Physical pin 97: PE0; bidirectional. */
  "PE0": "97",
  /** Physical pin 98: PE1; bidirectional. */
  "PE1": "98",
  /** Physical pin 99: RFU; no_connect. */
  "RFU": "99",
  /** Physical pin 100: VDD; power_in. */
  "VDD_100": "100",
}) {
  override schema = "MCU_ST_STM32F2:STM32F217VETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 82 GPIO, LQFP100
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F217VGTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f217vg.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F217VGTx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD_11": "11",
  /** Physical pin 12: PH0; bidirectional. */
  "PH0": "12",
  /** Physical pin 13: PH1; bidirectional. */
  "PH1": "13",
  /** Physical pin 14: NRST; input. */
  "NRST": "14",
  /** Physical pin 15: PC0; bidirectional. */
  "PC0": "15",
  /** Physical pin 16: PC1; bidirectional. */
  "PC1": "16",
  /** Physical pin 17: PC2; bidirectional. */
  "PC2": "17",
  /** Physical pin 18: PC3; bidirectional. */
  "PC3": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD_19": "19",
  /** Physical pin 20: VSSA; power_in. */
  "VSSA": "20",
  /** Physical pin 21: VREF+; input. */
  "VREF+": "21",
  /** Physical pin 22: VDDA; power_in. */
  "VDDA": "22",
  /** Physical pin 23: PA0; bidirectional. */
  "PA0": "23",
  /** Physical pin 24: PA1; bidirectional. */
  "PA1": "24",
  /** Physical pin 25: PA2; bidirectional. */
  "PA2": "25",
  /** Physical pin 26: PA3; bidirectional. */
  "PA3": "26",
  /** Physical pin 27: VSS; passive. */
  "VSS_27": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: PA4; bidirectional. */
  "PA4": "29",
  /** Physical pin 30: PA5; bidirectional. */
  "PA5": "30",
  /** Physical pin 31: PA6; bidirectional. */
  "PA6": "31",
  /** Physical pin 32: PA7; bidirectional. */
  "PA7": "32",
  /** Physical pin 33: PC4; bidirectional. */
  "PC4": "33",
  /** Physical pin 34: PC5; bidirectional. */
  "PC5": "34",
  /** Physical pin 35: PB0; bidirectional. */
  "PB0": "35",
  /** Physical pin 36: PB1; bidirectional. */
  "PB1": "36",
  /** Physical pin 37: PB2; bidirectional. */
  "PB2": "37",
  /** Physical pin 38: PE7; bidirectional. */
  "PE7": "38",
  /** Physical pin 39: PE8; bidirectional. */
  "PE8": "39",
  /** Physical pin 40: PE9; bidirectional. */
  "PE9": "40",
  /** Physical pin 41: PE10; bidirectional. */
  "PE10": "41",
  /** Physical pin 42: PE11; bidirectional. */
  "PE11": "42",
  /** Physical pin 43: PE12; bidirectional. */
  "PE12": "43",
  /** Physical pin 44: PE13; bidirectional. */
  "PE13": "44",
  /** Physical pin 45: PE14; bidirectional. */
  "PE14": "45",
  /** Physical pin 46: PE15; bidirectional. */
  "PE15": "46",
  /** Physical pin 47: PB10; bidirectional. */
  "PB10": "47",
  /** Physical pin 48: PB11; bidirectional. */
  "PB11": "48",
  /** Physical pin 49: VCAP_1; power_out. */
  "VCAP_1": "49",
  /** Physical pin 50: VDD; power_in. */
  "VDD_50": "50",
  /** Physical pin 51: PB12; bidirectional. */
  "PB12": "51",
  /** Physical pin 52: PB13; bidirectional. */
  "PB13": "52",
  /** Physical pin 53: PB14; bidirectional. */
  "PB14": "53",
  /** Physical pin 54: PB15; bidirectional. */
  "PB15": "54",
  /** Physical pin 55: PD8; bidirectional. */
  "PD8": "55",
  /** Physical pin 56: PD9; bidirectional. */
  "PD9": "56",
  /** Physical pin 57: PD10; bidirectional. */
  "PD10": "57",
  /** Physical pin 58: PD11; bidirectional. */
  "PD11": "58",
  /** Physical pin 59: PD12; bidirectional. */
  "PD12": "59",
  /** Physical pin 60: PD13; bidirectional. */
  "PD13": "60",
  /** Physical pin 61: PD14; bidirectional. */
  "PD14": "61",
  /** Physical pin 62: PD15; bidirectional. */
  "PD15": "62",
  /** Physical pin 63: PC6; bidirectional. */
  "PC6": "63",
  /** Physical pin 64: PC7; bidirectional. */
  "PC7": "64",
  /** Physical pin 65: PC8; bidirectional. */
  "PC8": "65",
  /** Physical pin 66: PC9; bidirectional. */
  "PC9": "66",
  /** Physical pin 67: PA8; bidirectional. */
  "PA8": "67",
  /** Physical pin 68: PA9; bidirectional. */
  "PA9": "68",
  /** Physical pin 69: PA10; bidirectional. */
  "PA10": "69",
  /** Physical pin 70: PA11; bidirectional. */
  "PA11": "70",
  /** Physical pin 71: PA12; bidirectional. */
  "PA12": "71",
  /** Physical pin 72: PA13; bidirectional. */
  "PA13": "72",
  /** Physical pin 73: VCAP_2; power_out. */
  "VCAP_2": "73",
  /** Physical pin 74: VSS; passive. */
  "VSS_74": "74",
  /** Physical pin 75: VDD; power_in. */
  "VDD_75": "75",
  /** Physical pin 76: PA14; bidirectional. */
  "PA14": "76",
  /** Physical pin 77: PA15; bidirectional. */
  "PA15": "77",
  /** Physical pin 78: PC10; bidirectional. */
  "PC10": "78",
  /** Physical pin 79: PC11; bidirectional. */
  "PC11": "79",
  /** Physical pin 80: PC12; bidirectional. */
  "PC12": "80",
  /** Physical pin 81: PD0; bidirectional. */
  "PD0": "81",
  /** Physical pin 82: PD1; bidirectional. */
  "PD1": "82",
  /** Physical pin 83: PD2; bidirectional. */
  "PD2": "83",
  /** Physical pin 84: PD3; bidirectional. */
  "PD3": "84",
  /** Physical pin 85: PD4; bidirectional. */
  "PD4": "85",
  /** Physical pin 86: PD5; bidirectional. */
  "PD5": "86",
  /** Physical pin 87: PD6; bidirectional. */
  "PD6": "87",
  /** Physical pin 88: PD7; bidirectional. */
  "PD7": "88",
  /** Physical pin 89: PB3; bidirectional. */
  "PB3": "89",
  /** Physical pin 90: PB4; bidirectional. */
  "PB4": "90",
  /** Physical pin 91: PB5; bidirectional. */
  "PB5": "91",
  /** Physical pin 92: PB6; bidirectional. */
  "PB6": "92",
  /** Physical pin 93: PB7; bidirectional. */
  "PB7": "93",
  /** Physical pin 94: BOOT0; input. */
  "BOOT0": "94",
  /** Physical pin 95: PB8; bidirectional. */
  "PB8": "95",
  /** Physical pin 96: PB9; bidirectional. */
  "PB9": "96",
  /** Physical pin 97: PE0; bidirectional. */
  "PE0": "97",
  /** Physical pin 98: PE1; bidirectional. */
  "PE1": "98",
  /** Physical pin 99: RFU; no_connect. */
  "RFU": "99",
  /** Physical pin 100: VDD; power_in. */
  "VDD_100": "100",
}) {
  override schema = "MCU_ST_STM32F2:STM32F217VGTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 512-1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 114 GPIO, LQFP144
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F217Z_E-G_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f217ze.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F217Z_E_G_Tx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: PF0; bidirectional. */
  "PF0": "10",
  /** Physical pin 11: PF1; bidirectional. */
  "PF1": "11",
  /** Physical pin 12: PF2; bidirectional. */
  "PF2": "12",
  /** Physical pin 13: PF3; bidirectional. */
  "PF3": "13",
  /** Physical pin 14: PF4; bidirectional. */
  "PF4": "14",
  /** Physical pin 15: PF5; bidirectional. */
  "PF5": "15",
  /** Physical pin 16: VSS; power_in. */
  "VSS_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: PF6; bidirectional. */
  "PF6": "18",
  /** Physical pin 19: PF7; bidirectional. */
  "PF7": "19",
  /** Physical pin 20: PF8; bidirectional. */
  "PF8": "20",
  /** Physical pin 21: PF9; bidirectional. */
  "PF9": "21",
  /** Physical pin 22: PF10; bidirectional. */
  "PF10": "22",
  /** Physical pin 23: PH0; bidirectional. */
  "PH0": "23",
  /** Physical pin 24: PH1; bidirectional. */
  "PH1": "24",
  /** Physical pin 25: NRST; input. */
  "NRST": "25",
  /** Physical pin 26: PC0; bidirectional. */
  "PC0": "26",
  /** Physical pin 27: PC1; bidirectional. */
  "PC1": "27",
  /** Physical pin 28: PC2; bidirectional. */
  "PC2": "28",
  /** Physical pin 29: PC3; bidirectional. */
  "PC3": "29",
  /** Physical pin 30: VDD; power_in. */
  "VDD_30": "30",
  /** Physical pin 31: VSSA; power_in. */
  "VSSA": "31",
  /** Physical pin 32: VREF+; input. */
  "VREF+": "32",
  /** Physical pin 33: VDDA; power_in. */
  "VDDA": "33",
  /** Physical pin 34: PA0; bidirectional. */
  "PA0": "34",
  /** Physical pin 35: PA1; bidirectional. */
  "PA1": "35",
  /** Physical pin 36: PA2; bidirectional. */
  "PA2": "36",
  /** Physical pin 37: PA3; bidirectional. */
  "PA3": "37",
  /** Physical pin 38: VSS; passive. */
  "VSS_38": "38",
  /** Physical pin 39: VDD; power_in. */
  "VDD_39": "39",
  /** Physical pin 40: PA4; bidirectional. */
  "PA4": "40",
  /** Physical pin 41: PA5; bidirectional. */
  "PA5": "41",
  /** Physical pin 42: PA6; bidirectional. */
  "PA6": "42",
  /** Physical pin 43: PA7; bidirectional. */
  "PA7": "43",
  /** Physical pin 44: PC4; bidirectional. */
  "PC4": "44",
  /** Physical pin 45: PC5; bidirectional. */
  "PC5": "45",
  /** Physical pin 46: PB0; bidirectional. */
  "PB0": "46",
  /** Physical pin 47: PB1; bidirectional. */
  "PB1": "47",
  /** Physical pin 48: PB2; bidirectional. */
  "PB2": "48",
  /** Physical pin 49: PF11; bidirectional. */
  "PF11": "49",
  /** Physical pin 50: PF12; bidirectional. */
  "PF12": "50",
  /** Physical pin 51: VSS; passive. */
  "VSS_51": "51",
  /** Physical pin 52: VDD; power_in. */
  "VDD_52": "52",
  /** Physical pin 53: PF13; bidirectional. */
  "PF13": "53",
  /** Physical pin 54: PF14; bidirectional. */
  "PF14": "54",
  /** Physical pin 55: PF15; bidirectional. */
  "PF15": "55",
  /** Physical pin 56: PG0; bidirectional. */
  "PG0": "56",
  /** Physical pin 57: PG1; bidirectional. */
  "PG1": "57",
  /** Physical pin 58: PE7; bidirectional. */
  "PE7": "58",
  /** Physical pin 59: PE8; bidirectional. */
  "PE8": "59",
  /** Physical pin 60: PE9; bidirectional. */
  "PE9": "60",
  /** Physical pin 61: VSS; passive. */
  "VSS_61": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: PE10; bidirectional. */
  "PE10": "63",
  /** Physical pin 64: PE11; bidirectional. */
  "PE11": "64",
  /** Physical pin 65: PE12; bidirectional. */
  "PE12": "65",
  /** Physical pin 66: PE13; bidirectional. */
  "PE13": "66",
  /** Physical pin 67: PE14; bidirectional. */
  "PE14": "67",
  /** Physical pin 68: PE15; bidirectional. */
  "PE15": "68",
  /** Physical pin 69: PB10; bidirectional. */
  "PB10": "69",
  /** Physical pin 70: PB11; bidirectional. */
  "PB11": "70",
  /** Physical pin 71: VCAP_1; power_out. */
  "VCAP_1": "71",
  /** Physical pin 72: VDD; power_in. */
  "VDD_72": "72",
  /** Physical pin 73: PB12; bidirectional. */
  "PB12": "73",
  /** Physical pin 74: PB13; bidirectional. */
  "PB13": "74",
  /** Physical pin 75: PB14; bidirectional. */
  "PB14": "75",
  /** Physical pin 76: PB15; bidirectional. */
  "PB15": "76",
  /** Physical pin 77: PD8; bidirectional. */
  "PD8": "77",
  /** Physical pin 78: PD9; bidirectional. */
  "PD9": "78",
  /** Physical pin 79: PD10; bidirectional. */
  "PD10": "79",
  /** Physical pin 80: PD11; bidirectional. */
  "PD11": "80",
  /** Physical pin 81: PD12; bidirectional. */
  "PD12": "81",
  /** Physical pin 82: PD13; bidirectional. */
  "PD13": "82",
  /** Physical pin 83: VSS; passive. */
  "VSS_83": "83",
  /** Physical pin 84: VDD; power_in. */
  "VDD_84": "84",
  /** Physical pin 85: PD14; bidirectional. */
  "PD14": "85",
  /** Physical pin 86: PD15; bidirectional. */
  "PD15": "86",
  /** Physical pin 87: PG2; bidirectional. */
  "PG2": "87",
  /** Physical pin 88: PG3; bidirectional. */
  "PG3": "88",
  /** Physical pin 89: PG4; bidirectional. */
  "PG4": "89",
  /** Physical pin 90: PG5; bidirectional. */
  "PG5": "90",
  /** Physical pin 91: PG6; bidirectional. */
  "PG6": "91",
  /** Physical pin 92: PG7; bidirectional. */
  "PG7": "92",
  /** Physical pin 93: PG8; bidirectional. */
  "PG8": "93",
  /** Physical pin 94: VSS; passive. */
  "VSS_94": "94",
  /** Physical pin 95: VDD; power_in. */
  "VDD_95": "95",
  /** Physical pin 96: PC6; bidirectional. */
  "PC6": "96",
  /** Physical pin 97: PC7; bidirectional. */
  "PC7": "97",
  /** Physical pin 98: PC8; bidirectional. */
  "PC8": "98",
  /** Physical pin 99: PC9; bidirectional. */
  "PC9": "99",
  /** Physical pin 100: PA8; bidirectional. */
  "PA8": "100",
  /** Physical pin 101: PA9; bidirectional. */
  "PA9": "101",
  /** Physical pin 102: PA10; bidirectional. */
  "PA10": "102",
  /** Physical pin 103: PA11; bidirectional. */
  "PA11": "103",
  /** Physical pin 104: PA12; bidirectional. */
  "PA12": "104",
  /** Physical pin 105: PA13; bidirectional. */
  "PA13": "105",
  /** Physical pin 106: VCAP_2; power_out. */
  "VCAP_2": "106",
  /** Physical pin 107: VSS; passive. */
  "VSS_107": "107",
  /** Physical pin 108: VDD; power_in. */
  "VDD_108": "108",
  /** Physical pin 109: PA14; bidirectional. */
  "PA14": "109",
  /** Physical pin 110: PA15; bidirectional. */
  "PA15": "110",
  /** Physical pin 111: PC10; bidirectional. */
  "PC10": "111",
  /** Physical pin 112: PC11; bidirectional. */
  "PC11": "112",
  /** Physical pin 113: PC12; bidirectional. */
  "PC12": "113",
  /** Physical pin 114: PD0; bidirectional. */
  "PD0": "114",
  /** Physical pin 115: PD1; bidirectional. */
  "PD1": "115",
  /** Physical pin 116: PD2; bidirectional. */
  "PD2": "116",
  /** Physical pin 117: PD3; bidirectional. */
  "PD3": "117",
  /** Physical pin 118: PD4; bidirectional. */
  "PD4": "118",
  /** Physical pin 119: PD5; bidirectional. */
  "PD5": "119",
  /** Physical pin 120: VSS; passive. */
  "VSS_120": "120",
  /** Physical pin 121: VDD; power_in. */
  "VDD_121": "121",
  /** Physical pin 122: PD6; bidirectional. */
  "PD6": "122",
  /** Physical pin 123: PD7; bidirectional. */
  "PD7": "123",
  /** Physical pin 124: PG9; bidirectional. */
  "PG9": "124",
  /** Physical pin 125: PG10; bidirectional. */
  "PG10": "125",
  /** Physical pin 126: PG11; bidirectional. */
  "PG11": "126",
  /** Physical pin 127: PG12; bidirectional. */
  "PG12": "127",
  /** Physical pin 128: PG13; bidirectional. */
  "PG13": "128",
  /** Physical pin 129: PG14; bidirectional. */
  "PG14": "129",
  /** Physical pin 130: VSS; passive. */
  "VSS_130": "130",
  /** Physical pin 131: VDD; power_in. */
  "VDD_131": "131",
  /** Physical pin 132: PG15; bidirectional. */
  "PG15": "132",
  /** Physical pin 133: PB3; bidirectional. */
  "PB3": "133",
  /** Physical pin 134: PB4; bidirectional. */
  "PB4": "134",
  /** Physical pin 135: PB5; bidirectional. */
  "PB5": "135",
  /** Physical pin 136: PB6; bidirectional. */
  "PB6": "136",
  /** Physical pin 137: PB7; bidirectional. */
  "PB7": "137",
  /** Physical pin 138: BOOT0; input. */
  "BOOT0": "138",
  /** Physical pin 139: PB8; bidirectional. */
  "PB8": "139",
  /** Physical pin 140: PB9; bidirectional. */
  "PB9": "140",
  /** Physical pin 141: PE0; bidirectional. */
  "PE0": "141",
  /** Physical pin 142: PE1; bidirectional. */
  "PE1": "142",
  /** Physical pin 143: RFU; no_connect. */
  "RFU": "143",
  /** Physical pin 144: VDD; power_in. */
  "VDD_144": "144",
}) {
  override schema = "MCU_ST_STM32F2:STM32F217Z_E-G_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 512KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 114 GPIO, LQFP144
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F217ZETx`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f217ze.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F217ZETx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: PF0; bidirectional. */
  "PF0": "10",
  /** Physical pin 11: PF1; bidirectional. */
  "PF1": "11",
  /** Physical pin 12: PF2; bidirectional. */
  "PF2": "12",
  /** Physical pin 13: PF3; bidirectional. */
  "PF3": "13",
  /** Physical pin 14: PF4; bidirectional. */
  "PF4": "14",
  /** Physical pin 15: PF5; bidirectional. */
  "PF5": "15",
  /** Physical pin 16: VSS; power_in. */
  "VSS_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: PF6; bidirectional. */
  "PF6": "18",
  /** Physical pin 19: PF7; bidirectional. */
  "PF7": "19",
  /** Physical pin 20: PF8; bidirectional. */
  "PF8": "20",
  /** Physical pin 21: PF9; bidirectional. */
  "PF9": "21",
  /** Physical pin 22: PF10; bidirectional. */
  "PF10": "22",
  /** Physical pin 23: PH0; bidirectional. */
  "PH0": "23",
  /** Physical pin 24: PH1; bidirectional. */
  "PH1": "24",
  /** Physical pin 25: NRST; input. */
  "NRST": "25",
  /** Physical pin 26: PC0; bidirectional. */
  "PC0": "26",
  /** Physical pin 27: PC1; bidirectional. */
  "PC1": "27",
  /** Physical pin 28: PC2; bidirectional. */
  "PC2": "28",
  /** Physical pin 29: PC3; bidirectional. */
  "PC3": "29",
  /** Physical pin 30: VDD; power_in. */
  "VDD_30": "30",
  /** Physical pin 31: VSSA; power_in. */
  "VSSA": "31",
  /** Physical pin 32: VREF+; input. */
  "VREF+": "32",
  /** Physical pin 33: VDDA; power_in. */
  "VDDA": "33",
  /** Physical pin 34: PA0; bidirectional. */
  "PA0": "34",
  /** Physical pin 35: PA1; bidirectional. */
  "PA1": "35",
  /** Physical pin 36: PA2; bidirectional. */
  "PA2": "36",
  /** Physical pin 37: PA3; bidirectional. */
  "PA3": "37",
  /** Physical pin 38: VSS; passive. */
  "VSS_38": "38",
  /** Physical pin 39: VDD; power_in. */
  "VDD_39": "39",
  /** Physical pin 40: PA4; bidirectional. */
  "PA4": "40",
  /** Physical pin 41: PA5; bidirectional. */
  "PA5": "41",
  /** Physical pin 42: PA6; bidirectional. */
  "PA6": "42",
  /** Physical pin 43: PA7; bidirectional. */
  "PA7": "43",
  /** Physical pin 44: PC4; bidirectional. */
  "PC4": "44",
  /** Physical pin 45: PC5; bidirectional. */
  "PC5": "45",
  /** Physical pin 46: PB0; bidirectional. */
  "PB0": "46",
  /** Physical pin 47: PB1; bidirectional. */
  "PB1": "47",
  /** Physical pin 48: PB2; bidirectional. */
  "PB2": "48",
  /** Physical pin 49: PF11; bidirectional. */
  "PF11": "49",
  /** Physical pin 50: PF12; bidirectional. */
  "PF12": "50",
  /** Physical pin 51: VSS; passive. */
  "VSS_51": "51",
  /** Physical pin 52: VDD; power_in. */
  "VDD_52": "52",
  /** Physical pin 53: PF13; bidirectional. */
  "PF13": "53",
  /** Physical pin 54: PF14; bidirectional. */
  "PF14": "54",
  /** Physical pin 55: PF15; bidirectional. */
  "PF15": "55",
  /** Physical pin 56: PG0; bidirectional. */
  "PG0": "56",
  /** Physical pin 57: PG1; bidirectional. */
  "PG1": "57",
  /** Physical pin 58: PE7; bidirectional. */
  "PE7": "58",
  /** Physical pin 59: PE8; bidirectional. */
  "PE8": "59",
  /** Physical pin 60: PE9; bidirectional. */
  "PE9": "60",
  /** Physical pin 61: VSS; passive. */
  "VSS_61": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: PE10; bidirectional. */
  "PE10": "63",
  /** Physical pin 64: PE11; bidirectional. */
  "PE11": "64",
  /** Physical pin 65: PE12; bidirectional. */
  "PE12": "65",
  /** Physical pin 66: PE13; bidirectional. */
  "PE13": "66",
  /** Physical pin 67: PE14; bidirectional. */
  "PE14": "67",
  /** Physical pin 68: PE15; bidirectional. */
  "PE15": "68",
  /** Physical pin 69: PB10; bidirectional. */
  "PB10": "69",
  /** Physical pin 70: PB11; bidirectional. */
  "PB11": "70",
  /** Physical pin 71: VCAP_1; power_out. */
  "VCAP_1": "71",
  /** Physical pin 72: VDD; power_in. */
  "VDD_72": "72",
  /** Physical pin 73: PB12; bidirectional. */
  "PB12": "73",
  /** Physical pin 74: PB13; bidirectional. */
  "PB13": "74",
  /** Physical pin 75: PB14; bidirectional. */
  "PB14": "75",
  /** Physical pin 76: PB15; bidirectional. */
  "PB15": "76",
  /** Physical pin 77: PD8; bidirectional. */
  "PD8": "77",
  /** Physical pin 78: PD9; bidirectional. */
  "PD9": "78",
  /** Physical pin 79: PD10; bidirectional. */
  "PD10": "79",
  /** Physical pin 80: PD11; bidirectional. */
  "PD11": "80",
  /** Physical pin 81: PD12; bidirectional. */
  "PD12": "81",
  /** Physical pin 82: PD13; bidirectional. */
  "PD13": "82",
  /** Physical pin 83: VSS; passive. */
  "VSS_83": "83",
  /** Physical pin 84: VDD; power_in. */
  "VDD_84": "84",
  /** Physical pin 85: PD14; bidirectional. */
  "PD14": "85",
  /** Physical pin 86: PD15; bidirectional. */
  "PD15": "86",
  /** Physical pin 87: PG2; bidirectional. */
  "PG2": "87",
  /** Physical pin 88: PG3; bidirectional. */
  "PG3": "88",
  /** Physical pin 89: PG4; bidirectional. */
  "PG4": "89",
  /** Physical pin 90: PG5; bidirectional. */
  "PG5": "90",
  /** Physical pin 91: PG6; bidirectional. */
  "PG6": "91",
  /** Physical pin 92: PG7; bidirectional. */
  "PG7": "92",
  /** Physical pin 93: PG8; bidirectional. */
  "PG8": "93",
  /** Physical pin 94: VSS; passive. */
  "VSS_94": "94",
  /** Physical pin 95: VDD; power_in. */
  "VDD_95": "95",
  /** Physical pin 96: PC6; bidirectional. */
  "PC6": "96",
  /** Physical pin 97: PC7; bidirectional. */
  "PC7": "97",
  /** Physical pin 98: PC8; bidirectional. */
  "PC8": "98",
  /** Physical pin 99: PC9; bidirectional. */
  "PC9": "99",
  /** Physical pin 100: PA8; bidirectional. */
  "PA8": "100",
  /** Physical pin 101: PA9; bidirectional. */
  "PA9": "101",
  /** Physical pin 102: PA10; bidirectional. */
  "PA10": "102",
  /** Physical pin 103: PA11; bidirectional. */
  "PA11": "103",
  /** Physical pin 104: PA12; bidirectional. */
  "PA12": "104",
  /** Physical pin 105: PA13; bidirectional. */
  "PA13": "105",
  /** Physical pin 106: VCAP_2; power_out. */
  "VCAP_2": "106",
  /** Physical pin 107: VSS; passive. */
  "VSS_107": "107",
  /** Physical pin 108: VDD; power_in. */
  "VDD_108": "108",
  /** Physical pin 109: PA14; bidirectional. */
  "PA14": "109",
  /** Physical pin 110: PA15; bidirectional. */
  "PA15": "110",
  /** Physical pin 111: PC10; bidirectional. */
  "PC10": "111",
  /** Physical pin 112: PC11; bidirectional. */
  "PC11": "112",
  /** Physical pin 113: PC12; bidirectional. */
  "PC12": "113",
  /** Physical pin 114: PD0; bidirectional. */
  "PD0": "114",
  /** Physical pin 115: PD1; bidirectional. */
  "PD1": "115",
  /** Physical pin 116: PD2; bidirectional. */
  "PD2": "116",
  /** Physical pin 117: PD3; bidirectional. */
  "PD3": "117",
  /** Physical pin 118: PD4; bidirectional. */
  "PD4": "118",
  /** Physical pin 119: PD5; bidirectional. */
  "PD5": "119",
  /** Physical pin 120: VSS; passive. */
  "VSS_120": "120",
  /** Physical pin 121: VDD; power_in. */
  "VDD_121": "121",
  /** Physical pin 122: PD6; bidirectional. */
  "PD6": "122",
  /** Physical pin 123: PD7; bidirectional. */
  "PD7": "123",
  /** Physical pin 124: PG9; bidirectional. */
  "PG9": "124",
  /** Physical pin 125: PG10; bidirectional. */
  "PG10": "125",
  /** Physical pin 126: PG11; bidirectional. */
  "PG11": "126",
  /** Physical pin 127: PG12; bidirectional. */
  "PG12": "127",
  /** Physical pin 128: PG13; bidirectional. */
  "PG13": "128",
  /** Physical pin 129: PG14; bidirectional. */
  "PG14": "129",
  /** Physical pin 130: VSS; passive. */
  "VSS_130": "130",
  /** Physical pin 131: VDD; power_in. */
  "VDD_131": "131",
  /** Physical pin 132: PG15; bidirectional. */
  "PG15": "132",
  /** Physical pin 133: PB3; bidirectional. */
  "PB3": "133",
  /** Physical pin 134: PB4; bidirectional. */
  "PB4": "134",
  /** Physical pin 135: PB5; bidirectional. */
  "PB5": "135",
  /** Physical pin 136: PB6; bidirectional. */
  "PB6": "136",
  /** Physical pin 137: PB7; bidirectional. */
  "PB7": "137",
  /** Physical pin 138: BOOT0; input. */
  "BOOT0": "138",
  /** Physical pin 139: PB8; bidirectional. */
  "PB8": "139",
  /** Physical pin 140: PB9; bidirectional. */
  "PB9": "140",
  /** Physical pin 141: PE0; bidirectional. */
  "PE0": "141",
  /** Physical pin 142: PE1; bidirectional. */
  "PE1": "142",
  /** Physical pin 143: RFU; no_connect. */
  "RFU": "143",
  /** Physical pin 144: VDD; power_in. */
  "VDD_144": "144",
}) {
  override schema = "MCU_ST_STM32F2:STM32F217ZETx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M3 MCU, 1024KB flash, 128KB RAM, 120 MHz, 1.8-3.6V, 114 GPIO, LQFP144
 *
 * KiCad symbol: `MCU_ST_STM32F2:STM32F217ZGTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*20x20mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32f217zg.pdf
 * Keywords: Arm Cortex-M3 STM32F2 STM32F2x7.
 * Default footprint: Package_QFP:LQFP-144_20x20mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STM32F217ZGTx extends Component.withPins({
  /** Physical pin 1: PE2; bidirectional. */
  "PE2": "1",
  /** Physical pin 2: PE3; bidirectional. */
  "PE3": "2",
  /** Physical pin 3: PE4; bidirectional. */
  "PE4": "3",
  /** Physical pin 4: PE5; bidirectional. */
  "PE5": "4",
  /** Physical pin 5: PE6; bidirectional. */
  "PE6": "5",
  /** Physical pin 6: VBAT; power_in. */
  "VBAT": "6",
  /** Physical pin 7: PC13; bidirectional. */
  "PC13": "7",
  /** Physical pin 8: PC14; bidirectional. */
  "PC14": "8",
  /** Physical pin 9: PC15; bidirectional. */
  "PC15": "9",
  /** Physical pin 10: PF0; bidirectional. */
  "PF0": "10",
  /** Physical pin 11: PF1; bidirectional. */
  "PF1": "11",
  /** Physical pin 12: PF2; bidirectional. */
  "PF2": "12",
  /** Physical pin 13: PF3; bidirectional. */
  "PF3": "13",
  /** Physical pin 14: PF4; bidirectional. */
  "PF4": "14",
  /** Physical pin 15: PF5; bidirectional. */
  "PF5": "15",
  /** Physical pin 16: VSS; power_in. */
  "VSS_16": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD_17": "17",
  /** Physical pin 18: PF6; bidirectional. */
  "PF6": "18",
  /** Physical pin 19: PF7; bidirectional. */
  "PF7": "19",
  /** Physical pin 20: PF8; bidirectional. */
  "PF8": "20",
  /** Physical pin 21: PF9; bidirectional. */
  "PF9": "21",
  /** Physical pin 22: PF10; bidirectional. */
  "PF10": "22",
  /** Physical pin 23: PH0; bidirectional. */
  "PH0": "23",
  /** Physical pin 24: PH1; bidirectional. */
  "PH1": "24",
  /** Physical pin 25: NRST; input. */
  "NRST": "25",
  /** Physical pin 26: PC0; bidirectional. */
  "PC0": "26",
  /** Physical pin 27: PC1; bidirectional. */
  "PC1": "27",
  /** Physical pin 28: PC2; bidirectional. */
  "PC2": "28",
  /** Physical pin 29: PC3; bidirectional. */
  "PC3": "29",
  /** Physical pin 30: VDD; power_in. */
  "VDD_30": "30",
  /** Physical pin 31: VSSA; power_in. */
  "VSSA": "31",
  /** Physical pin 32: VREF+; input. */
  "VREF+": "32",
  /** Physical pin 33: VDDA; power_in. */
  "VDDA": "33",
  /** Physical pin 34: PA0; bidirectional. */
  "PA0": "34",
  /** Physical pin 35: PA1; bidirectional. */
  "PA1": "35",
  /** Physical pin 36: PA2; bidirectional. */
  "PA2": "36",
  /** Physical pin 37: PA3; bidirectional. */
  "PA3": "37",
  /** Physical pin 38: VSS; passive. */
  "VSS_38": "38",
  /** Physical pin 39: VDD; power_in. */
  "VDD_39": "39",
  /** Physical pin 40: PA4; bidirectional. */
  "PA4": "40",
  /** Physical pin 41: PA5; bidirectional. */
  "PA5": "41",
  /** Physical pin 42: PA6; bidirectional. */
  "PA6": "42",
  /** Physical pin 43: PA7; bidirectional. */
  "PA7": "43",
  /** Physical pin 44: PC4; bidirectional. */
  "PC4": "44",
  /** Physical pin 45: PC5; bidirectional. */
  "PC5": "45",
  /** Physical pin 46: PB0; bidirectional. */
  "PB0": "46",
  /** Physical pin 47: PB1; bidirectional. */
  "PB1": "47",
  /** Physical pin 48: PB2; bidirectional. */
  "PB2": "48",
  /** Physical pin 49: PF11; bidirectional. */
  "PF11": "49",
  /** Physical pin 50: PF12; bidirectional. */
  "PF12": "50",
  /** Physical pin 51: VSS; passive. */
  "VSS_51": "51",
  /** Physical pin 52: VDD; power_in. */
  "VDD_52": "52",
  /** Physical pin 53: PF13; bidirectional. */
  "PF13": "53",
  /** Physical pin 54: PF14; bidirectional. */
  "PF14": "54",
  /** Physical pin 55: PF15; bidirectional. */
  "PF15": "55",
  /** Physical pin 56: PG0; bidirectional. */
  "PG0": "56",
  /** Physical pin 57: PG1; bidirectional. */
  "PG1": "57",
  /** Physical pin 58: PE7; bidirectional. */
  "PE7": "58",
  /** Physical pin 59: PE8; bidirectional. */
  "PE8": "59",
  /** Physical pin 60: PE9; bidirectional. */
  "PE9": "60",
  /** Physical pin 61: VSS; passive. */
  "VSS_61": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: PE10; bidirectional. */
  "PE10": "63",
  /** Physical pin 64: PE11; bidirectional. */
  "PE11": "64",
  /** Physical pin 65: PE12; bidirectional. */
  "PE12": "65",
  /** Physical pin 66: PE13; bidirectional. */
  "PE13": "66",
  /** Physical pin 67: PE14; bidirectional. */
  "PE14": "67",
  /** Physical pin 68: PE15; bidirectional. */
  "PE15": "68",
  /** Physical pin 69: PB10; bidirectional. */
  "PB10": "69",
  /** Physical pin 70: PB11; bidirectional. */
  "PB11": "70",
  /** Physical pin 71: VCAP_1; power_out. */
  "VCAP_1": "71",
  /** Physical pin 72: VDD; power_in. */
  "VDD_72": "72",
  /** Physical pin 73: PB12; bidirectional. */
  "PB12": "73",
  /** Physical pin 74: PB13; bidirectional. */
  "PB13": "74",
  /** Physical pin 75: PB14; bidirectional. */
  "PB14": "75",
  /** Physical pin 76: PB15; bidirectional. */
  "PB15": "76",
  /** Physical pin 77: PD8; bidirectional. */
  "PD8": "77",
  /** Physical pin 78: PD9; bidirectional. */
  "PD9": "78",
  /** Physical pin 79: PD10; bidirectional. */
  "PD10": "79",
  /** Physical pin 80: PD11; bidirectional. */
  "PD11": "80",
  /** Physical pin 81: PD12; bidirectional. */
  "PD12": "81",
  /** Physical pin 82: PD13; bidirectional. */
  "PD13": "82",
  /** Physical pin 83: VSS; passive. */
  "VSS_83": "83",
  /** Physical pin 84: VDD; power_in. */
  "VDD_84": "84",
  /** Physical pin 85: PD14; bidirectional. */
  "PD14": "85",
  /** Physical pin 86: PD15; bidirectional. */
  "PD15": "86",
  /** Physical pin 87: PG2; bidirectional. */
  "PG2": "87",
  /** Physical pin 88: PG3; bidirectional. */
  "PG3": "88",
  /** Physical pin 89: PG4; bidirectional. */
  "PG4": "89",
  /** Physical pin 90: PG5; bidirectional. */
  "PG5": "90",
  /** Physical pin 91: PG6; bidirectional. */
  "PG6": "91",
  /** Physical pin 92: PG7; bidirectional. */
  "PG7": "92",
  /** Physical pin 93: PG8; bidirectional. */
  "PG8": "93",
  /** Physical pin 94: VSS; passive. */
  "VSS_94": "94",
  /** Physical pin 95: VDD; power_in. */
  "VDD_95": "95",
  /** Physical pin 96: PC6; bidirectional. */
  "PC6": "96",
  /** Physical pin 97: PC7; bidirectional. */
  "PC7": "97",
  /** Physical pin 98: PC8; bidirectional. */
  "PC8": "98",
  /** Physical pin 99: PC9; bidirectional. */
  "PC9": "99",
  /** Physical pin 100: PA8; bidirectional. */
  "PA8": "100",
  /** Physical pin 101: PA9; bidirectional. */
  "PA9": "101",
  /** Physical pin 102: PA10; bidirectional. */
  "PA10": "102",
  /** Physical pin 103: PA11; bidirectional. */
  "PA11": "103",
  /** Physical pin 104: PA12; bidirectional. */
  "PA12": "104",
  /** Physical pin 105: PA13; bidirectional. */
  "PA13": "105",
  /** Physical pin 106: VCAP_2; power_out. */
  "VCAP_2": "106",
  /** Physical pin 107: VSS; passive. */
  "VSS_107": "107",
  /** Physical pin 108: VDD; power_in. */
  "VDD_108": "108",
  /** Physical pin 109: PA14; bidirectional. */
  "PA14": "109",
  /** Physical pin 110: PA15; bidirectional. */
  "PA15": "110",
  /** Physical pin 111: PC10; bidirectional. */
  "PC10": "111",
  /** Physical pin 112: PC11; bidirectional. */
  "PC11": "112",
  /** Physical pin 113: PC12; bidirectional. */
  "PC12": "113",
  /** Physical pin 114: PD0; bidirectional. */
  "PD0": "114",
  /** Physical pin 115: PD1; bidirectional. */
  "PD1": "115",
  /** Physical pin 116: PD2; bidirectional. */
  "PD2": "116",
  /** Physical pin 117: PD3; bidirectional. */
  "PD3": "117",
  /** Physical pin 118: PD4; bidirectional. */
  "PD4": "118",
  /** Physical pin 119: PD5; bidirectional. */
  "PD5": "119",
  /** Physical pin 120: VSS; passive. */
  "VSS_120": "120",
  /** Physical pin 121: VDD; power_in. */
  "VDD_121": "121",
  /** Physical pin 122: PD6; bidirectional. */
  "PD6": "122",
  /** Physical pin 123: PD7; bidirectional. */
  "PD7": "123",
  /** Physical pin 124: PG9; bidirectional. */
  "PG9": "124",
  /** Physical pin 125: PG10; bidirectional. */
  "PG10": "125",
  /** Physical pin 126: PG11; bidirectional. */
  "PG11": "126",
  /** Physical pin 127: PG12; bidirectional. */
  "PG12": "127",
  /** Physical pin 128: PG13; bidirectional. */
  "PG13": "128",
  /** Physical pin 129: PG14; bidirectional. */
  "PG14": "129",
  /** Physical pin 130: VSS; passive. */
  "VSS_130": "130",
  /** Physical pin 131: VDD; power_in. */
  "VDD_131": "131",
  /** Physical pin 132: PG15; bidirectional. */
  "PG15": "132",
  /** Physical pin 133: PB3; bidirectional. */
  "PB3": "133",
  /** Physical pin 134: PB4; bidirectional. */
  "PB4": "134",
  /** Physical pin 135: PB5; bidirectional. */
  "PB5": "135",
  /** Physical pin 136: PB6; bidirectional. */
  "PB6": "136",
  /** Physical pin 137: PB7; bidirectional. */
  "PB7": "137",
  /** Physical pin 138: BOOT0; input. */
  "BOOT0": "138",
  /** Physical pin 139: PB8; bidirectional. */
  "PB8": "139",
  /** Physical pin 140: PB9; bidirectional. */
  "PB9": "140",
  /** Physical pin 141: PE0; bidirectional. */
  "PE0": "141",
  /** Physical pin 142: PE1; bidirectional. */
  "PE1": "142",
  /** Physical pin 143: RFU; no_connect. */
  "RFU": "143",
  /** Physical pin 144: VDD; power_in. */
  "VDD_144": "144",
}) {
  override schema = "MCU_ST_STM32F2:STM32F217ZGTx";
  override referencePrefix = "U";
}

