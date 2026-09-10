// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 12KB RAM, 39 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U031C6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u031c6.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32U031C6Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "PF2": "7",
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
  "PF3": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U031C6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 12KB RAM, 39 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U031C6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u031c6.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32U031C6Ux extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "PF2": "7",
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
  "PF3": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U031C6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 12KB RAM, 39 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U031C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u031c8.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32U031C8Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "PF2": "7",
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
  "PF3": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U031C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 12KB RAM, 39 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U031C8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u031c8.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32U031C8Ux extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "PF2": "7",
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
  "PF3": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDD_36: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U031C8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 12KB RAM, 17 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U031F4Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u031f4.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32U031F4Px extends Component.withPins({
  "PB8/PB9": "1",
  "VSS": "2",
  "VDD": "3",
  "PC14": "4",
  "PC15": "5",
  "PF2": "6",
  "VDDA": "7",
  "PA0": "8",
  "PA1/PA2": "9",
  "PA3/PA4": "10",
  "PA5/PA6": "11",
  "PA7/PB0": "12",
  "PB1": "13",
  "PA8/PA9/PA10": "14",
  "PA11": "15",
  "PA12": "16",
  "PA13": "17",
  "PA14/PB4/PB5/PB6": "18",
  "PB7": "19",
  "PF3": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PB8/PB9": "bidirectional", VSS: "power_in", VDD: "power_in", PC14: "bidirectional", PC15: "bidirectional", PF2: "bidirectional", VDDA: "power_in", PA0: "bidirectional", "PA1/PA2": "bidirectional", "PA3/PA4": "bidirectional", "PA5/PA6": "bidirectional", "PA7/PB0": "bidirectional", PB1: "bidirectional", "PA8/PA9/PA10": "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", "PA14/PB4/PB5/PB6": "bidirectional", PB7: "bidirectional", PF3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U031F4Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 12KB RAM, 17 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U031F6Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u031f6.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32U031F6Px extends Component.withPins({
  "PB8/PB9": "1",
  "VSS": "2",
  "VDD": "3",
  "PC14": "4",
  "PC15": "5",
  "PF2": "6",
  "VDDA": "7",
  "PA0": "8",
  "PA1/PA2": "9",
  "PA3/PA4": "10",
  "PA5/PA6": "11",
  "PA7/PB0": "12",
  "PB1": "13",
  "PA8/PA9/PA10": "14",
  "PA11": "15",
  "PA12": "16",
  "PA13": "17",
  "PA14/PB4/PB5/PB6": "18",
  "PB7": "19",
  "PF3": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PB8/PB9": "bidirectional", VSS: "power_in", VDD: "power_in", PC14: "bidirectional", PC15: "bidirectional", PF2: "bidirectional", VDDA: "power_in", PA0: "bidirectional", "PA1/PA2": "bidirectional", "PA3/PA4": "bidirectional", "PA5/PA6": "bidirectional", "PA7/PB0": "bidirectional", PB1: "bidirectional", "PA8/PA9/PA10": "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", "PA14/PB4/PB5/PB6": "bidirectional", PB7: "bidirectional", PF3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U031F6Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 12KB RAM, 17 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U031F8Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u031f8.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32U031F8Px extends Component.withPins({
  "PB8/PB9": "1",
  "VSS": "2",
  "VDD": "3",
  "PC14": "4",
  "PC15": "5",
  "PF2": "6",
  "VDDA": "7",
  "PA0": "8",
  "PA1/PA2": "9",
  "PA3/PA4": "10",
  "PA5/PA6": "11",
  "PA7/PB0": "12",
  "PB1": "13",
  "PA8/PA9/PA10": "14",
  "PA11": "15",
  "PA12": "16",
  "PA13": "17",
  "PA14/PB4/PB5/PB6": "18",
  "PB7": "19",
  "PF3": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "PB8/PB9": "bidirectional", VSS: "power_in", VDD: "power_in", PC14: "bidirectional", PC15: "bidirectional", PF2: "bidirectional", VDDA: "power_in", PA0: "bidirectional", "PA1/PA2": "bidirectional", "PA3/PA4": "bidirectional", "PA5/PA6": "bidirectional", "PA7/PB0": "bidirectional", PB1: "bidirectional", "PA8/PA9/PA10": "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", "PA14/PB4/PB5/PB6": "bidirectional", PB7: "bidirectional", PF3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U031F8Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 12KB RAM, 24 GPIO, WLCSP27
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U031G6Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*2.34x2.55mm*Layout9x6*P0.4mm*Stagger*.
 * @see https://www.st.com/resource/en/datasheet/stm32u031g6.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x1.
 * Default footprint: Package_CSP:ST_WLCSP-27_2.34x2.55mm_Layout9x6_P0.4mm_Stagger.
 */
export class STM32U031G6Yx extends Component.withPins({
  "PB6": "A2",
  "PB7": "A4",
  "PF3": "A6",
  "VSS": "A8",
  "PA14": "B1",
  "PB5": "B3",
  "PA12": "B5",
  "VDD": "B7",
  "PC14": "B9",
  "PA13": "C2",
  "PA11": "C4",
  "PA0": "C6",
  "PC15": "C8",
  "PA10": "D1",
  "PA9": "D3",
  "PA6": "D5",
  "PA1": "D7",
  "PF2": "D9",
  "PA8": "E2",
  "PA7": "E4",
  "PA5": "E6",
  "PA2": "E8",
  "PB1": "F1",
  "PB0": "F3",
  "PA4": "F5",
  "PA3": "F7",
  "VDDA": "F9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", VSS: "power_in", PA14: "bidirectional", PB5: "bidirectional", PA12: "bidirectional", VDD: "power_in", PC14: "bidirectional", PA13: "bidirectional", PA11: "bidirectional", PA0: "bidirectional", PC15: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA6: "bidirectional", PA1: "bidirectional", PF2: "bidirectional", PA8: "bidirectional", PA7: "bidirectional", PA5: "bidirectional", PA2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PA4: "bidirectional", PA3: "bidirectional", VDDA: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U031G6Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 12KB RAM, 24 GPIO, WLCSP27
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U031G8Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*2.34x2.55mm*Layout9x6*P0.4mm*Stagger*.
 * @see https://www.st.com/resource/en/datasheet/stm32u031g8.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x1.
 * Default footprint: Package_CSP:ST_WLCSP-27_2.34x2.55mm_Layout9x6_P0.4mm_Stagger.
 */
export class STM32U031G8Yx extends Component.withPins({
  "PB6": "A2",
  "PB7": "A4",
  "PF3": "A6",
  "VSS": "A8",
  "PA14": "B1",
  "PB5": "B3",
  "PA12": "B5",
  "VDD": "B7",
  "PC14": "B9",
  "PA13": "C2",
  "PA11": "C4",
  "PA0": "C6",
  "PC15": "C8",
  "PA10": "D1",
  "PA9": "D3",
  "PA6": "D5",
  "PA1": "D7",
  "PF2": "D9",
  "PA8": "E2",
  "PA7": "E4",
  "PA5": "E6",
  "PA2": "E8",
  "PB1": "F1",
  "PB0": "F3",
  "PA4": "F5",
  "PA3": "F7",
  "VDDA": "F9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", VSS: "power_in", PA14: "bidirectional", PB5: "bidirectional", PA12: "bidirectional", VDD: "power_in", PC14: "bidirectional", PA13: "bidirectional", PA11: "bidirectional", PA0: "bidirectional", PC15: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA6: "bidirectional", PA1: "bidirectional", PF2: "bidirectional", PA8: "bidirectional", PA7: "bidirectional", PA5: "bidirectional", PA2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PA4: "bidirectional", PA3: "bidirectional", VDDA: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U031G8Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 12KB RAM, 27 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U031K4Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u031k4.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32U031K4Ux extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
  "PF2": "4",
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
  "PF3": "31",
  "VSS_32": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", PF2: "bidirectional", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", VSS_32: "passive", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U031K4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 12KB RAM, 27 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U031K6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u031k6.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32U031K6Ux extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
  "PF2": "4",
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
  "PF3": "31",
  "VSS_32": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", PF2: "bidirectional", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", VSS_32: "passive", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U031K6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 12KB RAM, 27 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U031K8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u031k8.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32U031K8Ux extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
  "PF2": "4",
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
  "PF3": "31",
  "VSS_32": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", PF2: "bidirectional", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", VSS_32: "passive", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U031K8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 12KB RAM, 53 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U031R6Ix`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u031r6.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x1.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32U031R6Ix extends Component.withPins({
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
  "PF3": "B4",
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
  "PF2": "E1",
  "PC1": "E2",
  "PC0": "E3",
  "VDD_E4": "E4",
  "VDD_E5": "E5",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VBAT: "power_in", PB8: "bidirectional", PF3: "bidirectional", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PF0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PF1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDD_E6: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U031R6Ix";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 12KB RAM, 53 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U031R6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u031r6.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32U031R6Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "PF2": "7",
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
  "PF3": "60",
  "PB8": "61",
  "PB9": "62",
  "VSS_63": "63",
  "VDD_64": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U031R6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 12KB RAM, 53 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U031R8Ix`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u031r8.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x1.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32U031R8Ix extends Component.withPins({
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
  "PF3": "B4",
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
  "PF2": "E1",
  "PC1": "E2",
  "PC0": "E3",
  "VDD_E4": "E4",
  "VDD_E5": "E5",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VBAT: "power_in", PB8: "bidirectional", PF3: "bidirectional", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PF0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PF1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDD_E5: "power_in", VDD_E6: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U031R8Ix";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 12KB RAM, 53 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U031R8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u031r8.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32U031R8Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "PF2": "7",
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
  "PF3": "60",
  "PB8": "61",
  "PB9": "62",
  "VSS_63": "63",
  "VDD_64": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDD_48: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U031R8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 40KB RAM, 39 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U073C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u073c8.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32U073C8Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "PF2": "7",
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
  "VDDUSB": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PF3": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U073C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 40KB RAM, 39 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U073C8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u073c8.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32U073C8Ux extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "PF2": "7",
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
  "VDDUSB": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PF3": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U073C8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 40KB RAM, 39 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U073CBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u073cb.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32U073CBTx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "PF2": "7",
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
  "VDDUSB": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PF3": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U073CBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 40KB RAM, 39 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U073CBUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u073cb.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32U073CBUx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "PF2": "7",
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
  "VDDUSB": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PF3": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U073CBUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 40KB RAM, 56 MHz, 39 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U073CCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u073cc.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32U073CCTx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "PF2": "7",
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
  "VDDUSB": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PF3": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U073CCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 40KB RAM, 56 MHz, 39 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U073CCUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u073cc.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32U073CCUx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "PF2": "7",
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
  "VDDUSB": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PF3": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U073CCUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 40KB RAM, 33 GPIO, WLCSP42
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U073H8Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*2.93x2.82mm*Layout12x7*P0.4mm*Stagger*.
 * @see https://www.st.com/resource/en/datasheet/stm32u073h8.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_CSP:ST_WLCSP-42_2.93x2.82mm_Layout12x7_P0.4mm_Stagger.
 */
export class STM32U073H8Yx extends Component.withPins({
  "VSS_A2": "A2",
  "PA15": "A4",
  "PB5": "A6",
  "PB7": "A8",
  "PB8": "A10",
  "VSS_A12": "A12",
  "VDDUSB": "B1",
  "PA13": "B3",
  "PB3": "B5",
  "PB6": "B7",
  "VBAT": "B9",
  "VDD_B11": "B11",
  "PA12": "C2",
  "PA9": "C4",
  "PB4": "C6",
  "PF3": "C8",
  "PC15": "C10",
  "PC14": "C12",
  "PA11": "D1",
  "PA8": "D3",
  "PA14": "D5",
  "PC13": "D7",
  "PF1": "D9",
  "PF0": "D11",
  "PA10": "E2",
  "PA5": "E4",
  "PA3": "E6",
  "PA1": "E8",
  "VSSA": "E10",
  "PF2": "E12",
  "VSS_F1": "F1",
  "PB1": "F3",
  "PB0": "F5",
  "PA7": "F7",
  "PA0": "F9",
  "VDDA": "F11",
  "VDD_G2": "G2",
  "PB10": "G4",
  "PB2": "G6",
  "PA6": "G8",
  "PA4": "G10",
  "PA2": "G12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS_A2: "power_in", PA15: "bidirectional", PB5: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_A12: "passive", VDDUSB: "power_in", PA13: "bidirectional", PB3: "bidirectional", PB6: "bidirectional", VBAT: "power_in", VDD_B11: "power_in", PA12: "bidirectional", PA9: "bidirectional", PB4: "bidirectional", PF3: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", PA11: "bidirectional", PA8: "bidirectional", PA14: "bidirectional", PC13: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", PA10: "bidirectional", PA5: "bidirectional", PA3: "bidirectional", PA1: "bidirectional", VSSA: "power_in", PF2: "bidirectional", VSS_F1: "passive", PB1: "bidirectional", PB0: "bidirectional", PA7: "bidirectional", PA0: "bidirectional", VDDA: "power_in", VDD_G2: "power_in", PB10: "bidirectional", PB2: "bidirectional", PA6: "bidirectional", PA4: "bidirectional", PA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U073H8Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 40KB RAM, 33 GPIO, WLCSP42
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U073HBYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*2.93x2.82mm*Layout12x7*P0.4mm*Stagger*.
 * @see https://www.st.com/resource/en/datasheet/stm32u073hb.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_CSP:ST_WLCSP-42_2.93x2.82mm_Layout12x7_P0.4mm_Stagger.
 */
export class STM32U073HBYx extends Component.withPins({
  "VSS_A2": "A2",
  "PA15": "A4",
  "PB5": "A6",
  "PB7": "A8",
  "PB8": "A10",
  "VSS_A12": "A12",
  "VDDUSB": "B1",
  "PA13": "B3",
  "PB3": "B5",
  "PB6": "B7",
  "VBAT": "B9",
  "VDD_B11": "B11",
  "PA12": "C2",
  "PA9": "C4",
  "PB4": "C6",
  "PF3": "C8",
  "PC15": "C10",
  "PC14": "C12",
  "PA11": "D1",
  "PA8": "D3",
  "PA14": "D5",
  "PC13": "D7",
  "PF1": "D9",
  "PF0": "D11",
  "PA10": "E2",
  "PA5": "E4",
  "PA3": "E6",
  "PA1": "E8",
  "VSSA": "E10",
  "PF2": "E12",
  "VSS_F1": "F1",
  "PB1": "F3",
  "PB0": "F5",
  "PA7": "F7",
  "PA0": "F9",
  "VDDA": "F11",
  "VDD_G2": "G2",
  "PB10": "G4",
  "PB2": "G6",
  "PA6": "G8",
  "PA4": "G10",
  "PA2": "G12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS_A2: "power_in", PA15: "bidirectional", PB5: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_A12: "passive", VDDUSB: "power_in", PA13: "bidirectional", PB3: "bidirectional", PB6: "bidirectional", VBAT: "power_in", VDD_B11: "power_in", PA12: "bidirectional", PA9: "bidirectional", PB4: "bidirectional", PF3: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", PA11: "bidirectional", PA8: "bidirectional", PA14: "bidirectional", PC13: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", PA10: "bidirectional", PA5: "bidirectional", PA3: "bidirectional", PA1: "bidirectional", VSSA: "power_in", PF2: "bidirectional", VSS_F1: "passive", PB1: "bidirectional", PB0: "bidirectional", PA7: "bidirectional", PA0: "bidirectional", VDDA: "power_in", VDD_G2: "power_in", PB10: "bidirectional", PB2: "bidirectional", PA6: "bidirectional", PA4: "bidirectional", PA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U073HBYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 40KB RAM, 33 GPIO, WLCSP42
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U073HCYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*2.93x2.82mm*Layout12x7*P0.4mm*Stagger*.
 * @see https://www.st.com/resource/en/datasheet/stm32u073hc.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_CSP:ST_WLCSP-42_2.93x2.82mm_Layout12x7_P0.4mm_Stagger.
 */
export class STM32U073HCYx extends Component.withPins({
  "VSS_A2": "A2",
  "PA15": "A4",
  "PB5": "A6",
  "PB7": "A8",
  "PB8": "A10",
  "VSS_A12": "A12",
  "VDDUSB": "B1",
  "PA13": "B3",
  "PB3": "B5",
  "PB6": "B7",
  "VBAT": "B9",
  "VDD_B11": "B11",
  "PA12": "C2",
  "PA9": "C4",
  "PB4": "C6",
  "PF3": "C8",
  "PC15": "C10",
  "PC14": "C12",
  "PA11": "D1",
  "PA8": "D3",
  "PA14": "D5",
  "PC13": "D7",
  "PF1": "D9",
  "PF0": "D11",
  "PA10": "E2",
  "PA5": "E4",
  "PA3": "E6",
  "PA1": "E8",
  "VSSA": "E10",
  "PF2": "E12",
  "VSS_F1": "F1",
  "PB1": "F3",
  "PB0": "F5",
  "PA7": "F7",
  "PA0": "F9",
  "VDDA": "F11",
  "VDD_G2": "G2",
  "PB10": "G4",
  "PB2": "G6",
  "PA6": "G8",
  "PA4": "G10",
  "PA2": "G12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS_A2: "power_in", PA15: "bidirectional", PB5: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_A12: "passive", VDDUSB: "power_in", PA13: "bidirectional", PB3: "bidirectional", PB6: "bidirectional", VBAT: "power_in", VDD_B11: "power_in", PA12: "bidirectional", PA9: "bidirectional", PB4: "bidirectional", PF3: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", PA11: "bidirectional", PA8: "bidirectional", PA14: "bidirectional", PC13: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", PA10: "bidirectional", PA5: "bidirectional", PA3: "bidirectional", PA1: "bidirectional", VSSA: "power_in", PF2: "bidirectional", VSS_F1: "passive", PB1: "bidirectional", PB0: "bidirectional", PA7: "bidirectional", PA0: "bidirectional", VDDA: "power_in", VDD_G2: "power_in", PB10: "bidirectional", PB2: "bidirectional", PA6: "bidirectional", PA4: "bidirectional", PA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U073HCYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 40KB RAM, 27 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U073K8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u073k8.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32U073K8Ux extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
  "PF2": "4",
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
  "PF3": "31",
  "VSS_32": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", PF2: "bidirectional", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", VSS_32: "passive", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U073K8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 40KB RAM, 27 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U073KBUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u073kb.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32U073KBUx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
  "PF2": "4",
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
  "PF3": "31",
  "VSS_32": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", PF2: "bidirectional", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", VSS_32: "passive", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U073KBUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 40KB RAM, 56 MHz, 27 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U073KCUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u073kc.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32U073KCUx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
  "PF2": "4",
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
  "PF3": "31",
  "VSS_32": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", PF2: "bidirectional", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", VSS_32: "passive", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U073KCUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 40KB RAM, 69 GPIO, UFBGA81
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U073M8Ix`. Reference prefix: `U`.
 * Footprint filters: ST*UFBGA*5x5mm*Layout9x9*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u073m8.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_BGA:ST_UFBGA-81_5x5mm_Layout9x9_P0.5mm.
 */
export class STM32U073M8Ix extends Component.withPins({
  "PB8": "A1",
  "PF3": "A2",
  "PB4": "A3",
  "PB5": "A4",
  "PD4": "A5",
  "PD0": "A6",
  "PC12": "A7",
  "PC10": "A8",
  "PA15": "A9",
  "VBAT": "B1",
  "PB9": "B2",
  "PB7": "B3",
  "PB6": "B4",
  "PD6": "B5",
  "PD1": "B6",
  "PC11": "B7",
  "PA14": "B8",
  "PA13": "B9",
  "PC15": "C1",
  "PC14": "C2",
  "PE3": "C3",
  "PB3": "C4",
  "PD5": "C5",
  "PD2": "C6",
  "VDDUSB": "C7",
  "PA12": "C8",
  "PA11": "C9",
  "PF1": "D1",
  "PF0": "D2",
  "VDD_D3": "D3",
  "VSS_D4": "D4",
  "PD3": "D5",
  "VSS_D6": "D6",
  "PA9": "D7",
  "PA10": "D8",
  "PC9": "D9",
  "PC0": "E1",
  "PF2": "E2",
  "PC13": "E3",
  "PA1": "E4",
  "PC8": "E5",
  "PC7": "E6",
  "PA8": "E7",
  "PC6": "E8",
  "PD13": "E9",
  "PC1": "F1",
  "PC2": "F2",
  "PA0": "F3",
  "VSS_F4": "F4",
  "PB0": "F5",
  "VSS_F6": "F6",
  "PB15": "F7",
  "PD11": "F8",
  "PD12": "F9",
  "PC3": "G1",
  "VSSA": "G2",
  "VDD_G3": "G3",
  "PC5": "G4",
  "PE7": "G5",
  "PE8": "G6",
  "VDD_G7": "G7",
  "PD9": "G8",
  "PD10": "G9",
  "VREF+": "H1",
  "PA2": "H2",
  "PA5": "H3",
  "PA7": "H4",
  "PB1": "H5",
  "PE9": "H6",
  "PB11": "H7",
  "PB13": "H8",
  "PD8": "H9",
  "VDDA": "J1",
  "PA3": "J2",
  "PA4": "J3",
  "PA6": "J4",
  "PC4": "J5",
  "PB2": "J6",
  "PB10": "J7",
  "PB12": "J8",
  "PB14": "J9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB8: "bidirectional", PF3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PD4: "bidirectional", PD0: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA15: "bidirectional", VBAT: "power_in", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD1: "bidirectional", PC11: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", PE3: "bidirectional", PB3: "bidirectional", PD5: "bidirectional", PD2: "bidirectional", VDDUSB: "power_in", PA12: "bidirectional", PA11: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", VDD_D3: "power_in", VSS_D4: "power_in", PD3: "bidirectional", VSS_D6: "passive", PA9: "bidirectional", PA10: "bidirectional", PC9: "bidirectional", PC0: "bidirectional", PF2: "bidirectional", PC13: "bidirectional", PA1: "bidirectional", PC8: "bidirectional", PC7: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", PD13: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PA0: "bidirectional", VSS_F4: "passive", PB0: "bidirectional", VSS_F6: "passive", PB15: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDD_G3: "power_in", PC5: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", VDD_G7: "power_in", PD9: "bidirectional", PD10: "bidirectional", "VREF+": "input", PA2: "bidirectional", PA5: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", PE9: "bidirectional", PB11: "bidirectional", PB13: "bidirectional", PD8: "bidirectional", VDDA: "power_in", PA3: "bidirectional", PA4: "bidirectional", PA6: "bidirectional", PC4: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB12: "bidirectional", PB14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U073M8Ix";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 40KB RAM, 68 GPIO, LQFP80
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U073M8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*12x12mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u073m8.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_QFP:LQFP-80_12x12mm_P0.5mm.
 */
export class STM32U073M8Tx extends Component.withPins({
  "VSS_1": "1",
  "VDD_2": "2",
  "VBAT": "3",
  "PC13": "4",
  "PC14": "5",
  "PC15": "6",
  "PF0": "7",
  "PF1": "8",
  "PF2": "9",
  "PC0": "10",
  "PC1": "11",
  "PC2": "12",
  "PC3": "13",
  "VSSA": "14",
  "VREF+": "15",
  "VDDA": "16",
  "PA0": "17",
  "PA1": "18",
  "PA2": "19",
  "PA3": "20",
  "VSS_21": "21",
  "VDD_22": "22",
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
  "PB10": "35",
  "PB11": "36",
  "VSS_37": "37",
  "VDD_38": "38",
  "PB12": "39",
  "PB13": "40",
  "PB14": "41",
  "PB15": "42",
  "PD8": "43",
  "PD9": "44",
  "PD10": "45",
  "PD11": "46",
  "PD12": "47",
  "PD13": "48",
  "PC6": "49",
  "PC7": "50",
  "PC8": "51",
  "PC9": "52",
  "PA8": "53",
  "PA9": "54",
  "PA10": "55",
  "PA11": "56",
  "PA12": "57",
  "PA13": "58",
  "VSS_59": "59",
  "VDDUSB": "60",
  "PA14": "61",
  "PA15": "62",
  "PC10": "63",
  "PC11": "64",
  "PC12": "65",
  "PD0": "66",
  "PD1": "67",
  "PD2": "68",
  "PD3": "69",
  "PD4": "70",
  "PD5": "71",
  "PD6": "72",
  "PB3": "73",
  "PB4": "74",
  "PB5": "75",
  "PB6": "76",
  "PB7": "77",
  "PF3": "78",
  "PB8": "79",
  "PB9": "80",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS_1: "power_in", VDD_2: "power_in", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_21: "passive", VDD_22: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_37: "passive", VDD_38: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_59: "passive", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U073M8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 40KB RAM, 69 GPIO, UFBGA81
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U073MBIx`. Reference prefix: `U`.
 * Footprint filters: ST*UFBGA*5x5mm*Layout9x9*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u073mb.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_BGA:ST_UFBGA-81_5x5mm_Layout9x9_P0.5mm.
 */
export class STM32U073MBIx extends Component.withPins({
  "PB8": "A1",
  "PF3": "A2",
  "PB4": "A3",
  "PB5": "A4",
  "PD4": "A5",
  "PD0": "A6",
  "PC12": "A7",
  "PC10": "A8",
  "PA15": "A9",
  "VBAT": "B1",
  "PB9": "B2",
  "PB7": "B3",
  "PB6": "B4",
  "PD6": "B5",
  "PD1": "B6",
  "PC11": "B7",
  "PA14": "B8",
  "PA13": "B9",
  "PC15": "C1",
  "PC14": "C2",
  "PE3": "C3",
  "PB3": "C4",
  "PD5": "C5",
  "PD2": "C6",
  "VDDUSB": "C7",
  "PA12": "C8",
  "PA11": "C9",
  "PF1": "D1",
  "PF0": "D2",
  "VDD_D3": "D3",
  "VSS_D4": "D4",
  "PD3": "D5",
  "VSS_D6": "D6",
  "PA9": "D7",
  "PA10": "D8",
  "PC9": "D9",
  "PC0": "E1",
  "PF2": "E2",
  "PC13": "E3",
  "PA1": "E4",
  "PC8": "E5",
  "PC7": "E6",
  "PA8": "E7",
  "PC6": "E8",
  "PD13": "E9",
  "PC1": "F1",
  "PC2": "F2",
  "PA0": "F3",
  "VSS_F4": "F4",
  "PB0": "F5",
  "VSS_F6": "F6",
  "PB15": "F7",
  "PD11": "F8",
  "PD12": "F9",
  "PC3": "G1",
  "VSSA": "G2",
  "VDD_G3": "G3",
  "PC5": "G4",
  "PE7": "G5",
  "PE8": "G6",
  "VDD_G7": "G7",
  "PD9": "G8",
  "PD10": "G9",
  "VREF+": "H1",
  "PA2": "H2",
  "PA5": "H3",
  "PA7": "H4",
  "PB1": "H5",
  "PE9": "H6",
  "PB11": "H7",
  "PB13": "H8",
  "PD8": "H9",
  "VDDA": "J1",
  "PA3": "J2",
  "PA4": "J3",
  "PA6": "J4",
  "PC4": "J5",
  "PB2": "J6",
  "PB10": "J7",
  "PB12": "J8",
  "PB14": "J9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB8: "bidirectional", PF3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PD4: "bidirectional", PD0: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA15: "bidirectional", VBAT: "power_in", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD1: "bidirectional", PC11: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", PE3: "bidirectional", PB3: "bidirectional", PD5: "bidirectional", PD2: "bidirectional", VDDUSB: "power_in", PA12: "bidirectional", PA11: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", VDD_D3: "power_in", VSS_D4: "power_in", PD3: "bidirectional", VSS_D6: "passive", PA9: "bidirectional", PA10: "bidirectional", PC9: "bidirectional", PC0: "bidirectional", PF2: "bidirectional", PC13: "bidirectional", PA1: "bidirectional", PC8: "bidirectional", PC7: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", PD13: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PA0: "bidirectional", VSS_F4: "passive", PB0: "bidirectional", VSS_F6: "passive", PB15: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDD_G3: "power_in", PC5: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", VDD_G7: "power_in", PD9: "bidirectional", PD10: "bidirectional", "VREF+": "input", PA2: "bidirectional", PA5: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", PE9: "bidirectional", PB11: "bidirectional", PB13: "bidirectional", PD8: "bidirectional", VDDA: "power_in", PA3: "bidirectional", PA4: "bidirectional", PA6: "bidirectional", PC4: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB12: "bidirectional", PB14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U073MBIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 40KB RAM, 68 GPIO, LQFP80
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U073MBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*12x12mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u073mb.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_QFP:LQFP-80_12x12mm_P0.5mm.
 */
export class STM32U073MBTx extends Component.withPins({
  "VSS_1": "1",
  "VDD_2": "2",
  "VBAT": "3",
  "PC13": "4",
  "PC14": "5",
  "PC15": "6",
  "PF0": "7",
  "PF1": "8",
  "PF2": "9",
  "PC0": "10",
  "PC1": "11",
  "PC2": "12",
  "PC3": "13",
  "VSSA": "14",
  "VREF+": "15",
  "VDDA": "16",
  "PA0": "17",
  "PA1": "18",
  "PA2": "19",
  "PA3": "20",
  "VSS_21": "21",
  "VDD_22": "22",
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
  "PB10": "35",
  "PB11": "36",
  "VSS_37": "37",
  "VDD_38": "38",
  "PB12": "39",
  "PB13": "40",
  "PB14": "41",
  "PB15": "42",
  "PD8": "43",
  "PD9": "44",
  "PD10": "45",
  "PD11": "46",
  "PD12": "47",
  "PD13": "48",
  "PC6": "49",
  "PC7": "50",
  "PC8": "51",
  "PC9": "52",
  "PA8": "53",
  "PA9": "54",
  "PA10": "55",
  "PA11": "56",
  "PA12": "57",
  "PA13": "58",
  "VSS_59": "59",
  "VDDUSB": "60",
  "PA14": "61",
  "PA15": "62",
  "PC10": "63",
  "PC11": "64",
  "PC12": "65",
  "PD0": "66",
  "PD1": "67",
  "PD2": "68",
  "PD3": "69",
  "PD4": "70",
  "PD5": "71",
  "PD6": "72",
  "PB3": "73",
  "PB4": "74",
  "PB5": "75",
  "PB6": "76",
  "PB7": "77",
  "PF3": "78",
  "PB8": "79",
  "PB9": "80",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS_1: "power_in", VDD_2: "power_in", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_21: "passive", VDD_22: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_37: "passive", VDD_38: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_59: "passive", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U073MBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 40KB RAM, 56 MHz, 69 GPIO, UFBGA81
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U073MCIx`. Reference prefix: `U`.
 * Footprint filters: ST*UFBGA*5x5mm*Layout9x9*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u073mc.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_BGA:ST_UFBGA-81_5x5mm_Layout9x9_P0.5mm.
 */
export class STM32U073MCIx extends Component.withPins({
  "PB8": "A1",
  "PF3": "A2",
  "PB4": "A3",
  "PB5": "A4",
  "PD4": "A5",
  "PD0": "A6",
  "PC12": "A7",
  "PC10": "A8",
  "PA15": "A9",
  "VBAT": "B1",
  "PB9": "B2",
  "PB7": "B3",
  "PB6": "B4",
  "PD6": "B5",
  "PD1": "B6",
  "PC11": "B7",
  "PA14": "B8",
  "PA13": "B9",
  "PC15": "C1",
  "PC14": "C2",
  "PE3": "C3",
  "PB3": "C4",
  "PD5": "C5",
  "PD2": "C6",
  "VDDUSB": "C7",
  "PA12": "C8",
  "PA11": "C9",
  "PF1": "D1",
  "PF0": "D2",
  "VDD_D3": "D3",
  "VSS_D4": "D4",
  "PD3": "D5",
  "VSS_D6": "D6",
  "PA9": "D7",
  "PA10": "D8",
  "PC9": "D9",
  "PC0": "E1",
  "PF2": "E2",
  "PC13": "E3",
  "PA1": "E4",
  "PC8": "E5",
  "PC7": "E6",
  "PA8": "E7",
  "PC6": "E8",
  "PD13": "E9",
  "PC1": "F1",
  "PC2": "F2",
  "PA0": "F3",
  "VSS_F4": "F4",
  "PB0": "F5",
  "VSS_F6": "F6",
  "PB15": "F7",
  "PD11": "F8",
  "PD12": "F9",
  "PC3": "G1",
  "VSSA": "G2",
  "VDD_G3": "G3",
  "PC5": "G4",
  "PE7": "G5",
  "PE8": "G6",
  "VDD_G7": "G7",
  "PD9": "G8",
  "PD10": "G9",
  "VREF+": "H1",
  "PA2": "H2",
  "PA5": "H3",
  "PA7": "H4",
  "PB1": "H5",
  "PE9": "H6",
  "PB11": "H7",
  "PB13": "H8",
  "PD8": "H9",
  "VDDA": "J1",
  "PA3": "J2",
  "PA4": "J3",
  "PA6": "J4",
  "PC4": "J5",
  "PB2": "J6",
  "PB10": "J7",
  "PB12": "J8",
  "PB14": "J9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB8: "bidirectional", PF3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PD4: "bidirectional", PD0: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA15: "bidirectional", VBAT: "power_in", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD1: "bidirectional", PC11: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", PE3: "bidirectional", PB3: "bidirectional", PD5: "bidirectional", PD2: "bidirectional", VDDUSB: "power_in", PA12: "bidirectional", PA11: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", VDD_D3: "power_in", VSS_D4: "power_in", PD3: "bidirectional", VSS_D6: "passive", PA9: "bidirectional", PA10: "bidirectional", PC9: "bidirectional", PC0: "bidirectional", PF2: "bidirectional", PC13: "bidirectional", PA1: "bidirectional", PC8: "bidirectional", PC7: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", PD13: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PA0: "bidirectional", VSS_F4: "passive", PB0: "bidirectional", VSS_F6: "passive", PB15: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDD_G3: "power_in", PC5: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", VDD_G7: "power_in", PD9: "bidirectional", PD10: "bidirectional", "VREF+": "input", PA2: "bidirectional", PA5: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", PE9: "bidirectional", PB11: "bidirectional", PB13: "bidirectional", PD8: "bidirectional", VDDA: "power_in", PA3: "bidirectional", PA4: "bidirectional", PA6: "bidirectional", PC4: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB12: "bidirectional", PB14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U073MCIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 40KB RAM, 56 MHz, 68 GPIO, LQFP80
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U073MCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*12x12mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u073mc.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_QFP:LQFP-80_12x12mm_P0.5mm.
 */
export class STM32U073MCTx extends Component.withPins({
  "VSS_1": "1",
  "VDD_2": "2",
  "VBAT": "3",
  "PC13": "4",
  "PC14": "5",
  "PC15": "6",
  "PF0": "7",
  "PF1": "8",
  "PF2": "9",
  "PC0": "10",
  "PC1": "11",
  "PC2": "12",
  "PC3": "13",
  "VSSA": "14",
  "VREF+": "15",
  "VDDA": "16",
  "PA0": "17",
  "PA1": "18",
  "PA2": "19",
  "PA3": "20",
  "VSS_21": "21",
  "VDD_22": "22",
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
  "PB10": "35",
  "PB11": "36",
  "VSS_37": "37",
  "VDD_38": "38",
  "PB12": "39",
  "PB13": "40",
  "PB14": "41",
  "PB15": "42",
  "PD8": "43",
  "PD9": "44",
  "PD10": "45",
  "PD11": "46",
  "PD12": "47",
  "PD13": "48",
  "PC6": "49",
  "PC7": "50",
  "PC8": "51",
  "PC9": "52",
  "PA8": "53",
  "PA9": "54",
  "PA10": "55",
  "PA11": "56",
  "PA12": "57",
  "PA13": "58",
  "VSS_59": "59",
  "VDDUSB": "60",
  "PA14": "61",
  "PA15": "62",
  "PC10": "63",
  "PC11": "64",
  "PC12": "65",
  "PD0": "66",
  "PD1": "67",
  "PD2": "68",
  "PD3": "69",
  "PD4": "70",
  "PD5": "71",
  "PD6": "72",
  "PB3": "73",
  "PB4": "74",
  "PB5": "75",
  "PB6": "76",
  "PB7": "77",
  "PF3": "78",
  "PB8": "79",
  "PB9": "80",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS_1: "power_in", VDD_2: "power_in", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_21: "passive", VDD_22: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_37: "passive", VDD_38: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_59: "passive", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U073MCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 40KB RAM, 53 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U073R8Ix`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u073r8.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32U073R8Ix extends Component.withPins({
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
  "PF3": "B4",
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
  "PF2": "E1",
  "PC1": "E2",
  "PC0": "E3",
  "VDD_E4": "E4",
  "VDDUSB": "E5",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VBAT: "power_in", PB8: "bidirectional", PF3: "bidirectional", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PF0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PF1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDDUSB: "power_in", VDD_E6: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U073R8Ix";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 40KB RAM, 53 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U073R8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u073r8.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32U073R8Tx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "PF2": "7",
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
  "VDDUSB": "48",
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
  "PF3": "60",
  "PB8": "61",
  "PB9": "62",
  "VSS_63": "63",
  "VDD_64": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U073R8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 40KB RAM, 53 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U073RBIx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u073rb.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32U073RBIx extends Component.withPins({
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
  "PF3": "B4",
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
  "PF2": "E1",
  "PC1": "E2",
  "PC0": "E3",
  "VDD_E4": "E4",
  "VDDUSB": "E5",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VBAT: "power_in", PB8: "bidirectional", PF3: "bidirectional", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PF0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PF1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDDUSB: "power_in", VDD_E6: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U073RBIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 40KB RAM, 53 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U073RBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u073rb.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32U073RBTx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "PF2": "7",
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
  "VDDUSB": "48",
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
  "PF3": "60",
  "PB8": "61",
  "PB9": "62",
  "VSS_63": "63",
  "VDD_64": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U073RBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 40KB RAM, 53 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U073RCIx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u073rc.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32U073RCIx extends Component.withPins({
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
  "PF3": "B4",
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
  "PF2": "E1",
  "PC1": "E2",
  "PC0": "E3",
  "VDD_E4": "E4",
  "VDDUSB": "E5",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VBAT: "power_in", PB8: "bidirectional", PF3: "bidirectional", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PF0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PF1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDDUSB: "power_in", VDD_E6: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U073RCIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 40KB RAM, 56 MHz, 53 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U073RCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u073rc.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32U073RCTx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "PF2": "7",
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
  "VDDUSB": "48",
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
  "PF3": "60",
  "PB8": "61",
  "PB9": "62",
  "VSS_63": "63",
  "VDD_64": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U073RCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 40KB RAM, 39 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U083CCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u083cc.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32U083CCTx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "PF2": "7",
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
  "VDDUSB": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PF3": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U083CCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 40KB RAM, 39 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U083CCUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u083cc.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32U083CCUx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "PF2": "7",
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
  "VDDUSB": "36",
  "PA14": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PF3": "44",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_23: "power_in", VDD_24: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_35: "passive", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U083CCUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 40KB RAM, 33 GPIO, WLCSP42
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U083HCYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*2.93x2.82mm*Layout12x7*P0.4mm*Stagger*.
 * @see https://www.st.com/resource/en/datasheet/stm32u083hc.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_CSP:ST_WLCSP-42_2.93x2.82mm_Layout12x7_P0.4mm_Stagger.
 */
export class STM32U083HCYx extends Component.withPins({
  "VSS_A2": "A2",
  "PA15": "A4",
  "PB5": "A6",
  "PB7": "A8",
  "PB8": "A10",
  "VSS_A12": "A12",
  "VDDUSB": "B1",
  "PA13": "B3",
  "PB3": "B5",
  "PB6": "B7",
  "VBAT": "B9",
  "VDD_B11": "B11",
  "PA12": "C2",
  "PA9": "C4",
  "PB4": "C6",
  "PF3": "C8",
  "PC15": "C10",
  "PC14": "C12",
  "PA11": "D1",
  "PA8": "D3",
  "PA14": "D5",
  "PC13": "D7",
  "PF1": "D9",
  "PF0": "D11",
  "PA10": "E2",
  "PA5": "E4",
  "PA3": "E6",
  "PA1": "E8",
  "VSSA": "E10",
  "PF2": "E12",
  "VSS_F1": "F1",
  "PB1": "F3",
  "PB0": "F5",
  "PA7": "F7",
  "PA0": "F9",
  "VDDA": "F11",
  "VDD_G2": "G2",
  "PB10": "G4",
  "PB2": "G6",
  "PA6": "G8",
  "PA4": "G10",
  "PA2": "G12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS_A2: "power_in", PA15: "bidirectional", PB5: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_A12: "passive", VDDUSB: "power_in", PA13: "bidirectional", PB3: "bidirectional", PB6: "bidirectional", VBAT: "power_in", VDD_B11: "power_in", PA12: "bidirectional", PA9: "bidirectional", PB4: "bidirectional", PF3: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", PA11: "bidirectional", PA8: "bidirectional", PA14: "bidirectional", PC13: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", PA10: "bidirectional", PA5: "bidirectional", PA3: "bidirectional", PA1: "bidirectional", VSSA: "power_in", PF2: "bidirectional", VSS_F1: "passive", PB1: "bidirectional", PB0: "bidirectional", PA7: "bidirectional", PA0: "bidirectional", VDDA: "power_in", VDD_G2: "power_in", PB10: "bidirectional", PB2: "bidirectional", PA6: "bidirectional", PA4: "bidirectional", PA2: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U083HCYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 40KB RAM, 56 MHz, 27 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U083KCUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u083kc.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32U083KCUx extends Component.withPins({
  "VDD_1": "1",
  "PC14": "2",
  "PC15": "3",
  "PF2": "4",
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
  "PF3": "31",
  "VSS_32": "32",
  "VSS_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", PC14: "bidirectional", PC15: "bidirectional", PF2: "bidirectional", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD_17: "power_in", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", VSS_32: "passive", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U083KCUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 40KB RAM, 69 GPIO, UFBGA81
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U083MCIx`. Reference prefix: `U`.
 * Footprint filters: ST*UFBGA*5x5mm*Layout9x9*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u083mc.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_BGA:ST_UFBGA-81_5x5mm_Layout9x9_P0.5mm.
 */
export class STM32U083MCIx extends Component.withPins({
  "PB8": "A1",
  "PF3": "A2",
  "PB4": "A3",
  "PB5": "A4",
  "PD4": "A5",
  "PD0": "A6",
  "PC12": "A7",
  "PC10": "A8",
  "PA15": "A9",
  "VBAT": "B1",
  "PB9": "B2",
  "PB7": "B3",
  "PB6": "B4",
  "PD6": "B5",
  "PD1": "B6",
  "PC11": "B7",
  "PA14": "B8",
  "PA13": "B9",
  "PC15": "C1",
  "PC14": "C2",
  "PE3": "C3",
  "PB3": "C4",
  "PD5": "C5",
  "PD2": "C6",
  "VDDUSB": "C7",
  "PA12": "C8",
  "PA11": "C9",
  "PF1": "D1",
  "PF0": "D2",
  "VDD_D3": "D3",
  "VSS_D4": "D4",
  "PD3": "D5",
  "VSS_D6": "D6",
  "PA9": "D7",
  "PA10": "D8",
  "PC9": "D9",
  "PC0": "E1",
  "PF2": "E2",
  "PC13": "E3",
  "PA1": "E4",
  "PC8": "E5",
  "PC7": "E6",
  "PA8": "E7",
  "PC6": "E8",
  "PD13": "E9",
  "PC1": "F1",
  "PC2": "F2",
  "PA0": "F3",
  "VSS_F4": "F4",
  "PB0": "F5",
  "VSS_F6": "F6",
  "PB15": "F7",
  "PD11": "F8",
  "PD12": "F9",
  "PC3": "G1",
  "VSSA": "G2",
  "VDD_G3": "G3",
  "PC5": "G4",
  "PE7": "G5",
  "PE8": "G6",
  "VDD_G7": "G7",
  "PD9": "G8",
  "PD10": "G9",
  "VREF+": "H1",
  "PA2": "H2",
  "PA5": "H3",
  "PA7": "H4",
  "PB1": "H5",
  "PE9": "H6",
  "PB11": "H7",
  "PB13": "H8",
  "PD8": "H9",
  "VDDA": "J1",
  "PA3": "J2",
  "PA4": "J3",
  "PA6": "J4",
  "PC4": "J5",
  "PB2": "J6",
  "PB10": "J7",
  "PB12": "J8",
  "PB14": "J9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB8: "bidirectional", PF3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PD4: "bidirectional", PD0: "bidirectional", PC12: "bidirectional", PC10: "bidirectional", PA15: "bidirectional", VBAT: "power_in", PB9: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD1: "bidirectional", PC11: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", PE3: "bidirectional", PB3: "bidirectional", PD5: "bidirectional", PD2: "bidirectional", VDDUSB: "power_in", PA12: "bidirectional", PA11: "bidirectional", PF1: "bidirectional", PF0: "bidirectional", VDD_D3: "power_in", VSS_D4: "power_in", PD3: "bidirectional", VSS_D6: "passive", PA9: "bidirectional", PA10: "bidirectional", PC9: "bidirectional", PC0: "bidirectional", PF2: "bidirectional", PC13: "bidirectional", PA1: "bidirectional", PC8: "bidirectional", PC7: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", PD13: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PA0: "bidirectional", VSS_F4: "passive", PB0: "bidirectional", VSS_F6: "passive", PB15: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDD_G3: "power_in", PC5: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", VDD_G7: "power_in", PD9: "bidirectional", PD10: "bidirectional", "VREF+": "input", PA2: "bidirectional", PA5: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", PE9: "bidirectional", PB11: "bidirectional", PB13: "bidirectional", PD8: "bidirectional", VDDA: "power_in", PA3: "bidirectional", PA4: "bidirectional", PA6: "bidirectional", PC4: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB12: "bidirectional", PB14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U083MCIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 40KB RAM, 68 GPIO, LQFP80
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U083MCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*12x12mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u083mc.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_QFP:LQFP-80_12x12mm_P0.5mm.
 */
export class STM32U083MCTx extends Component.withPins({
  "VSS_1": "1",
  "VDD_2": "2",
  "VBAT": "3",
  "PC13": "4",
  "PC14": "5",
  "PC15": "6",
  "PF0": "7",
  "PF1": "8",
  "PF2": "9",
  "PC0": "10",
  "PC1": "11",
  "PC2": "12",
  "PC3": "13",
  "VSSA": "14",
  "VREF+": "15",
  "VDDA": "16",
  "PA0": "17",
  "PA1": "18",
  "PA2": "19",
  "PA3": "20",
  "VSS_21": "21",
  "VDD_22": "22",
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
  "PB10": "35",
  "PB11": "36",
  "VSS_37": "37",
  "VDD_38": "38",
  "PB12": "39",
  "PB13": "40",
  "PB14": "41",
  "PB15": "42",
  "PD8": "43",
  "PD9": "44",
  "PD10": "45",
  "PD11": "46",
  "PD12": "47",
  "PD13": "48",
  "PC6": "49",
  "PC7": "50",
  "PC8": "51",
  "PC9": "52",
  "PA8": "53",
  "PA9": "54",
  "PA10": "55",
  "PA11": "56",
  "PA12": "57",
  "PA13": "58",
  "VSS_59": "59",
  "VDDUSB": "60",
  "PA14": "61",
  "PA15": "62",
  "PC10": "63",
  "PC11": "64",
  "PC12": "65",
  "PD0": "66",
  "PD1": "67",
  "PD2": "68",
  "PD3": "69",
  "PD4": "70",
  "PD5": "71",
  "PD6": "72",
  "PB3": "73",
  "PB4": "74",
  "PB5": "75",
  "PB6": "76",
  "PB7": "77",
  "PF3": "78",
  "PB8": "79",
  "PB9": "80",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS_1: "power_in", VDD_2: "power_in", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_21: "passive", VDD_22: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_37: "passive", VDD_38: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_59: "passive", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U083MCTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 40KB RAM, 53 GPIO, UFBGA64
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U083RCIx`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u083rc.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32U083RCIx extends Component.withPins({
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
  "PF3": "B4",
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
  "PF2": "E1",
  "PC1": "E2",
  "PC0": "E3",
  "VDD_E4": "E4",
  "VDDUSB": "E5",
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
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PC15: "bidirectional", VBAT: "power_in", PB8: "bidirectional", PF3: "bidirectional", PD2: "bidirectional", PC11: "bidirectional", PC10: "bidirectional", PA12: "bidirectional", PF0: "bidirectional", VSS_C2: "power_in", PB7: "bidirectional", PB5: "bidirectional", PC12: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA11: "bidirectional", PF1: "bidirectional", VDD_D2: "power_in", PB6: "bidirectional", VSS_D4: "passive", VSS_D5: "passive", VSS_D6: "passive", PA8: "bidirectional", PC9: "bidirectional", PF2: "bidirectional", PC1: "bidirectional", PC0: "bidirectional", VDD_E4: "power_in", VDDUSB: "power_in", VDD_E6: "power_in", PC7: "bidirectional", PC8: "bidirectional", VSSA: "power_in", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB0: "bidirectional", PC6: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", VDDA: "power_in", PA1: "bidirectional", PA4: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U083RCIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 40KB RAM, 53 GPIO, LQFP64
 *
 * KiCad symbol: `MCU_ST_STM32U0:STM32U083RCTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32u083rc.pdf
 * Keywords: Arm Cortex-M0+ STM32U0 STM32U0x3.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32U083RCTx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PF0": "5",
  "PF1": "6",
  "PF2": "7",
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
  "VDDUSB": "48",
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
  "PF3": "60",
  "PB8": "61",
  "PB9": "62",
  "VSS_63": "63",
  "VDD_64": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSSA: "power_in", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_18: "power_in", VDD_19: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", VDD_32: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VSS_47: "passive", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PF3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VDD_64: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32U0:STM32U083RCTx";
  override referencePrefix = "U";
}
