// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 10 GPIO, WLCSP12
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C011D6Yx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*1.7x1.42mm*Layout4x6*P0.35mm*Stagger*.
 * @see https://www.st.com/resource/en/datasheet/stm32c011d6.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_CSP:ST_WLCSP-12_1.7x1.42mm_Layout4x6_P0.35mm_Stagger.
 */
export class STM32C011D6Yx extends Component.withPins({
  "PB6": "A2",
  "PC15": "A4",
  "PA13": "B1",
  "PC14": "B3",
  "PA14": "C2",
  "VDD": "C4",
  "PA8/PA9/PA11": "D1",
  "PB7": "D3",
  "PA7/PA10/PA12": "E2",
  "VSS": "E4",
  "PA3/PA4/PA5/PA6": "F1",
  "PA0/PA1/PA2/PF2": "F3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB6: "bidirectional", PC15: "bidirectional", PA13: "bidirectional", PC14: "bidirectional", PA14: "bidirectional", VDD: "power_in", "PA8/PA9/PA11": "bidirectional", PB7: "bidirectional", "PA7/PA10/PA12": "bidirectional", VSS: "power_in", "PA3/PA4/PA5/PA6": "bidirectional", "PA0/PA1/PA2/PF2": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C011D6Yx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16-32KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 18 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C011F_4-6_Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c011f4.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32C011F_4_6_Px extends Component.withPins({
  "PB7": "1",
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
  "PA8": "15",
  "PA9/PA11": "16",
  "PA10/PA12": "17",
  "PA13": "18",
  "PA14": "19",
  "PB6": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB7: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PB6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C011F_4-6_Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 18 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C011F4Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c011f4.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32C011F4Px extends Component.withPins({
  "PB7": "1",
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
  "PA8": "15",
  "PA9/PA11": "16",
  "PA10/PA12": "17",
  "PA13": "18",
  "PA14": "19",
  "PB6": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB7: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PB6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C011F4Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16-32KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 18 GPIO, UFQFPN20
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C011F_4-6_Ux`. Reference prefix: `U`.
 * Footprint filters: ST*UFQFPN*3x3mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c011f4.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_DFN_QFN:ST_UFQFPN-20_3x3mm_P0.5mm.
 */
export class STM32C011F_4_6_Ux extends Component.withPins({
  "PC15": "1",
  "VDD": "2",
  "VSS": "3",
  "PF2": "4",
  "PA0": "5",
  "PA1": "6",
  "PA2": "7",
  "PA3": "8",
  "PA4": "9",
  "PA5": "10",
  "PA6": "11",
  "PA7": "12",
  "PA8": "13",
  "PA9/PA11": "14",
  "PA10/PA12": "15",
  "PA13": "16",
  "PA14": "17",
  "PB6": "18",
  "PB7": "19",
  "PC14": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PC14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C011F_4-6_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 18 GPIO, UFQFPN20
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C011F4Ux`. Reference prefix: `U`.
 * Footprint filters: ST*UFQFPN*3x3mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c011f4.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_DFN_QFN:ST_UFQFPN-20_3x3mm_P0.5mm.
 */
export class STM32C011F4Ux extends Component.withPins({
  "PC15": "1",
  "VDD": "2",
  "VSS": "3",
  "PF2": "4",
  "PA0": "5",
  "PA1": "6",
  "PA2": "7",
  "PA3": "8",
  "PA4": "9",
  "PA5": "10",
  "PA6": "11",
  "PA7": "12",
  "PA8": "13",
  "PA9/PA11": "14",
  "PA10/PA12": "15",
  "PA13": "16",
  "PA14": "17",
  "PB6": "18",
  "PB7": "19",
  "PC14": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PC14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C011F4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 18 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C011F6Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c011f6.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32C011F6Px extends Component.withPins({
  "PB7": "1",
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
  "PA8": "15",
  "PA9/PA11": "16",
  "PA10/PA12": "17",
  "PA13": "18",
  "PA14": "19",
  "PB6": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB7: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PB6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C011F6Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 18 GPIO, UFQFPN20
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C011F6Ux`. Reference prefix: `U`.
 * Footprint filters: ST*UFQFPN*3x3mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c011f6.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_DFN_QFN:ST_UFQFPN-20_3x3mm_P0.5mm.
 */
export class STM32C011F6Ux extends Component.withPins({
  "PC15": "1",
  "VDD": "2",
  "VSS": "3",
  "PF2": "4",
  "PA0": "5",
  "PA1": "6",
  "PA2": "7",
  "PA3": "8",
  "PA4": "9",
  "PA5": "10",
  "PA6": "11",
  "PA7": "12",
  "PA8": "13",
  "PA9/PA11": "14",
  "PA10/PA12": "15",
  "PA13": "16",
  "PA14": "17",
  "PB6": "18",
  "PB7": "19",
  "PC14": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PC14: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C011F6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16-32KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 6 GPIO, SO8N
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C011J_4-6_Mx`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c011j4.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class STM32C011J_4_6_Mx extends Component.withPins({
  "PB7/PC14": "1",
  "VDD": "2",
  "VSS": "3",
  "PA0/PA1/PA2/PF2": "4",
  "PA8/PA9/PA11": "5",
  "PA10/PA12": "6",
  "PA13": "7",
  "PA14/PB6/PC15": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PB7/PC14": "bidirectional", VDD: "power_in", VSS: "power_in", "PA0/PA1/PA2/PF2": "bidirectional", "PA8/PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", "PA14/PB6/PC15": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C011J_4-6_Mx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 6 GPIO, SO8N
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C011J4Mx`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c011j4.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class STM32C011J4Mx extends Component.withPins({
  "PB7/PC14": "1",
  "VDD": "2",
  "VSS": "3",
  "PA0/PA1/PA2/PF2": "4",
  "PA8/PA9/PA11": "5",
  "PA10/PA12": "6",
  "PA13": "7",
  "PA14/PB6/PC15": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PB7/PC14": "bidirectional", VDD: "power_in", VSS: "power_in", "PA0/PA1/PA2/PF2": "bidirectional", "PA8/PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", "PA14/PB6/PC15": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C011J4Mx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 6KB RAM, 48 MHz, 2.0-3.6V, 6 GPIO, SO8N
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C011J6Mx`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c011j6.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class STM32C011J6Mx extends Component.withPins({
  "PB7/PC14": "1",
  "VDD": "2",
  "VSS": "3",
  "PA0/PA1/PA2/PF2": "4",
  "PA8/PA9/PA11": "5",
  "PA10/PA12": "6",
  "PA13": "7",
  "PA14/PB6/PC15": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PB7/PC14": "bidirectional", VDD: "power_in", VSS: "power_in", "PA0/PA1/PA2/PF2": "bidirectional", "PA8/PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", "PA14/PB6/PC15": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C011J6Mx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16-32KB flash, 12KB RAM, 48 MHz, 2.0-3.6V, 45 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C031C_4-6_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c031c4.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32C031C_4_6_Tx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "PF3": "4",
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
  "PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10": "32",
  "PA11": "33",
  "PA12": "34",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF3: "bidirectional", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C031C_4-6_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 12KB RAM, 48 MHz, 2.0-3.6V, 45 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C031C4Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c031c4.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32C031C4Tx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "PF3": "4",
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
  "PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10": "32",
  "PA11": "33",
  "PA12": "34",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF3: "bidirectional", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C031C4Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16-32KB flash, 12KB RAM, 48 MHz, 2.0-3.6V, 45 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C031C_4-6_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c031c4.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32C031C_4_6_Ux extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "PF3": "4",
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
  "PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10": "32",
  "PA11": "33",
  "PA12": "34",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF3: "bidirectional", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C031C_4-6_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 12KB RAM, 48 MHz, 2.0-3.6V, 45 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C031C4Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c031c4.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32C031C4Ux extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "PF3": "4",
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
  "PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10": "32",
  "PA11": "33",
  "PA12": "34",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF3: "bidirectional", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C031C4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 12KB RAM, 48 MHz, 2.0-3.6V, 45 GPIO, LQFP48
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C031C6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c031c6.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32C031C6Tx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "PF3": "4",
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
  "PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10": "32",
  "PA11": "33",
  "PA12": "34",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF3: "bidirectional", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C031C6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 12KB RAM, 48 MHz, 2.0-3.6V, 45 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C031C6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c031c6.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32C031C6Ux extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "PF3": "4",
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
  "PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10": "32",
  "PA11": "33",
  "PA12": "34",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF3: "bidirectional", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C031C6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16-32KB flash, 12KB RAM, 48 MHz, 2.0-3.6V, 18 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C031F_4-6_Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c031f4.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32C031F_4_6_Px extends Component.withPins({
  "PB7": "1",
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
  "PA8": "15",
  "PA9/PA11": "16",
  "PA10/PA12": "17",
  "PA13": "18",
  "PA14": "19",
  "PB6": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB7: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PB6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C031F_4-6_Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 12KB RAM, 48 MHz, 2.0-3.6V, 18 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C031F4Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c031f4.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32C031F4Px extends Component.withPins({
  "PB7": "1",
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
  "PA8": "15",
  "PA9/PA11": "16",
  "PA10/PA12": "17",
  "PA13": "18",
  "PA14": "19",
  "PB6": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB7: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PB6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C031F4Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 12KB RAM, 48 MHz, 2.0-3.6V, 18 GPIO, TSSOP20
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C031F6Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c031f6.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32C031F6Px extends Component.withPins({
  "PB7": "1",
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
  "PA8": "15",
  "PA9/PA11": "16",
  "PA10/PA12": "17",
  "PA13": "18",
  "PA14": "19",
  "PB6": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB7: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", "PA9/PA11": "bidirectional", "PA10/PA12": "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PB6: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C031F6Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16-32KB flash, 12KB RAM, 48 MHz, 2.0-3.6V, 26 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C031G_4-6_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c031g4.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32C031G_4_6_Ux extends Component.withPins({
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
  "PA11": "18",
  "PA12": "19",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C031G_4-6_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 12KB RAM, 48 MHz, 2.0-3.6V, 26 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C031G4Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c031g4.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32C031G4Ux extends Component.withPins({
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
  "PA11": "18",
  "PA12": "19",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C031G4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 12KB RAM, 48 MHz, 2.0-3.6V, 26 GPIO, UFQFPN28
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C031G6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c031g6.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32C031G6Ux extends Component.withPins({
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
  "PA11": "18",
  "PA12": "19",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C031G6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16-32KB flash, 12KB RAM, 48 MHz, 2.0-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C031K_4-6_Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c031k4.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32C031K_4_6_Tx extends Component.withPins({
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
  "PA9": "19",
  "PC6": "20",
  "PA10": "21",
  "PA11": "22",
  "PA12": "23",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C031K_4-6_Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 12KB RAM, 48 MHz, 2.0-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C031K4Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c031k4.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32C031K4Tx extends Component.withPins({
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
  "PA9": "19",
  "PC6": "20",
  "PA10": "21",
  "PA11": "22",
  "PA12": "23",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C031K4Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16-32KB flash, 12KB RAM, 48 MHz, 2.0-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C031K_4-6_Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c031k4.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32C031K_4_6_Ux extends Component.withPins({
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
  "PA9": "19",
  "PC6": "20",
  "PA10": "21",
  "PA11": "22",
  "PA12": "23",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C031K_4-6_Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 16KB flash, 12KB RAM, 48 MHz, 2.0-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C031K4Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c031k4.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32C031K4Ux extends Component.withPins({
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
  "PA9": "19",
  "PC6": "20",
  "PA10": "21",
  "PA11": "22",
  "PA12": "23",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C031K4Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 12KB RAM, 48 MHz, 2.0-3.6V, 30 GPIO, LQFP32
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C031K6Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c031k6.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32C031K6Tx extends Component.withPins({
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
  "PA9": "19",
  "PC6": "20",
  "PA10": "21",
  "PA11": "22",
  "PA12": "23",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C031K6Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 32KB flash, 12KB RAM, 48 MHz, 2.0-3.6V, 30 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C031K6Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c031k6.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32C031K6Ux extends Component.withPins({
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
  "PA9": "19",
  "PC6": "20",
  "PA10": "21",
  "PA11": "22",
  "PA12": "23",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C031K6Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 24KB RAM, 45 GPIO, LQFP48_GP
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071C8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071c8.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32C071C8Tx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "PF3": "4",
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
  "PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10": "32",
  "PA11": "33",
  "PA12": "34",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF3: "bidirectional", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071C8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 24KB RAM, 43 GPIO, LQFP48_N
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071C8TxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071c8.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32C071C8TxN extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "PF3": "4",
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
  "PA9": "29",
  "VSS_30": "30",
  "VDDIO2": "31",
  "PA10": "32",
  "PA11": "33",
  "PA12": "34",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF3: "bidirectional", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", VSS_30: "passive", VDDIO2: "power_in", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071C8TxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 24KB RAM, 45 GPIO, UFQFPN48_GP
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071C8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071c8.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32C071C8Ux extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "PF3": "4",
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
  "PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10": "32",
  "PA11": "33",
  "PA12": "34",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF3: "bidirectional", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071C8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 24KB RAM, 43 GPIO, UFQFPN48_N
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071C8UxN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071c8.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32C071C8UxN extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "PF3": "4",
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
  "PA9": "29",
  "VSS_30": "30",
  "VDDIO2": "31",
  "PA10": "32",
  "PA11": "33",
  "PA12": "34",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF3: "bidirectional", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", VSS_30: "passive", VDDIO2: "power_in", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071C8UxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 24KB RAM, 45 GPIO, LQFP48_GP
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071CBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071cb.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32C071CBTx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "PF3": "4",
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
  "PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10": "32",
  "PA11": "33",
  "PA12": "34",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF3: "bidirectional", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071CBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 24KB RAM, 43 GPIO, LQFP48_N
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071CBTxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071cb.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class STM32C071CBTxN extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "PF3": "4",
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
  "PA9": "29",
  "VSS_30": "30",
  "VDDIO2": "31",
  "PA10": "32",
  "PA11": "33",
  "PA12": "34",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF3: "bidirectional", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", VSS_30: "passive", VDDIO2: "power_in", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071CBTxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 24KB RAM, 45 GPIO, UFQFPN48_GP
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071CBUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071cb.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32C071CBUx extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "PF3": "4",
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
  "PA9": "29",
  "PC6": "30",
  "PC7": "31",
  "PA10": "32",
  "PA11": "33",
  "PA12": "34",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF3: "bidirectional", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071CBUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 24KB RAM, 43 GPIO, UFQFPN48_N
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071CBUxN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071cb.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32C071CBUxN extends Component.withPins({
  "PC13": "1",
  "PC14": "2",
  "PC15": "3",
  "PF3": "4",
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
  "PA9": "29",
  "VSS_30": "30",
  "VDDIO2": "31",
  "PA10": "32",
  "PA11": "33",
  "PA12": "34",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF3: "bidirectional", "VREF+": "input", VDD: "power_in", VSS_7: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", VSS_30: "passive", VDDIO2: "power_in", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071CBUxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 24KB RAM, 18 GPIO, TSSOP20_GP
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071F8Px`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071f8.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32C071F8Px extends Component.withPins({
  "PB7/PB8": "1",
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
  "PA8": "15",
  "PA11": "16",
  "PA12": "17",
  "PA13": "18",
  "PA14/PA15": "19",
  "PB3/PB4/PB5/PB6": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PB7/PB8": "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", "PA14/PA15": "bidirectional", "PB3/PB4/PB5/PB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071F8Px";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 24KB RAM, 17 GPIO, TSSOP20_N
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071F8PxN`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071f8.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32C071F8PxN extends Component.withPins({
  "PB7/PB8": "1",
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
  "PA8": "14",
  "VDDIO2": "15",
  "PA11": "16",
  "PA12": "17",
  "PA13": "18",
  "PA14/PA15": "19",
  "PB3/PB4/PB5/PB6": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PB7/PB8": "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA8: "bidirectional", VDDIO2: "power_in", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", "PA14/PA15": "bidirectional", "PB3/PB4/PB5/PB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071F8PxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 24KB RAM, 18 GPIO, TSSOP20_GP
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071FBPx`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071fb.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32C071FBPx extends Component.withPins({
  "PB7/PB8": "1",
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
  "PA8": "15",
  "PA11": "16",
  "PA12": "17",
  "PA13": "18",
  "PA14/PA15": "19",
  "PB3/PB4/PB5/PB6": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PB7/PB8": "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", "PA14/PA15": "bidirectional", "PB3/PB4/PB5/PB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071FBPx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 24KB RAM, 17 GPIO, TSSOP20_N
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071FBPxN`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071fb.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class STM32C071FBPxN extends Component.withPins({
  "PB7/PB8": "1",
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
  "PA8": "14",
  "VDDIO2": "15",
  "PA11": "16",
  "PA12": "17",
  "PA13": "18",
  "PA14/PA15": "19",
  "PB3/PB4/PB5/PB6": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PB7/PB8": "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA8: "bidirectional", VDDIO2: "power_in", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", "PA14/PA15": "bidirectional", "PB3/PB4/PB5/PB6": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071FBPxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 24KB RAM, 26 GPIO, UFQFPN28_GP
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071G8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071g8.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32C071G8Ux extends Component.withPins({
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
  "PA11": "18",
  "PA12": "19",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071G8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 24KB RAM, 25 GPIO, UFQFPN28_N
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071G8UxN`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071g8.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32C071G8UxN extends Component.withPins({
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
  "VDDIO2": "17",
  "PA11": "18",
  "PA12": "19",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PA8: "bidirectional", VDDIO2: "power_in", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071G8UxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 24KB RAM, 26 GPIO, UFQFPN28_GP
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071GBUx`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071gb.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32C071GBUx extends Component.withPins({
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
  "PA11": "18",
  "PA12": "19",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PA8: "bidirectional", PC6: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071GBUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 24KB RAM, 25 GPIO, UFQFPN28_N
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071GBUxN`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071gb.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_DFN_QFN:QFN-28_4x4mm_P0.5mm.
 */
export class STM32C071GBUxN extends Component.withPins({
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
  "VDDIO2": "17",
  "PA11": "18",
  "PA12": "19",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PA8: "bidirectional", VDDIO2: "power_in", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071GBUxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 24KB RAM, 30 GPIO, LQFP32_GP
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071K8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071k8.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32C071K8Tx extends Component.withPins({
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
  "PA9": "19",
  "PC6": "20",
  "PA10": "21",
  "PA11": "22",
  "PA12": "23",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071K8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 24KB RAM, 29 GPIO, LQFP32_N
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071K8TxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071k8.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32C071K8TxN extends Component.withPins({
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
  "PA9": "19",
  "VDDIO2": "20",
  "PA10": "21",
  "PA11": "22",
  "PA12": "23",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", VDDIO2: "power_in", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071K8TxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 24KB RAM, 30 GPIO, UFQFPN32_GP
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071K8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071k8.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32C071K8Ux extends Component.withPins({
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
  "PA9": "19",
  "PC6": "20",
  "PA10": "21",
  "PA11": "22",
  "PA12": "23",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071K8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 24KB RAM, 29 GPIO, UFQFPN32_N
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071K8UxN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071k8.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32C071K8UxN extends Component.withPins({
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
  "PA9": "19",
  "VDDIO2": "20",
  "PA10": "21",
  "PA11": "22",
  "PA12": "23",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", VDDIO2: "power_in", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071K8UxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 24KB RAM, 30 GPIO, LQFP32_GP
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071KBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071kb.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32C071KBTx extends Component.withPins({
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
  "PA9": "19",
  "PC6": "20",
  "PA10": "21",
  "PA11": "22",
  "PA12": "23",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071KBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 24KB RAM, 29 GPIO, LQFP32_N
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071KBTxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.8mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071kb.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_QFP:LQFP-32_7x7mm_P0.8mm.
 */
export class STM32C071KBTxN extends Component.withPins({
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
  "PA9": "19",
  "VDDIO2": "20",
  "PA10": "21",
  "PA11": "22",
  "PA12": "23",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", VDDIO2: "power_in", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071KBTxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 24KB RAM, 30 GPIO, UFQFPN32_GP
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071KBUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071kb.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32C071KBUx extends Component.withPins({
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
  "PA9": "19",
  "PC6": "20",
  "PA10": "21",
  "PA11": "22",
  "PA12": "23",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071KBUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 24KB RAM, 29 GPIO, UFQFPN32_N
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071KBUxN`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071kb.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32C071KBUxN extends Component.withPins({
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
  "PA9": "19",
  "VDDIO2": "20",
  "PA10": "21",
  "PA11": "22",
  "PA12": "23",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB9: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDD: "power_in", VSS_5: "power_in", PF2: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", VDDIO2: "power_in", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", VSS_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071KBUxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 24KB RAM, 61 GPIO, LQFP64_GP
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071R8Tx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071r8.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32C071R8Tx extends Component.withPins({
  "PC11": "1",
  "PC12": "2",
  "PC13": "3",
  "PC14": "4",
  "PC15": "5",
  "PF3": "6",
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
  "PA9": "37",
  "PC6": "38",
  "PC7": "39",
  "PD8": "40",
  "PD9": "41",
  "PA10": "42",
  "PA11": "43",
  "PA12": "44",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF3: "bidirectional", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PC10: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071R8Tx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 64KB flash, 24KB RAM, 59 GPIO, LQFP64_N
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071R8TxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071r8.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32C071R8TxN extends Component.withPins({
  "PC11": "1",
  "PC12": "2",
  "PC13": "3",
  "PC14": "4",
  "PC15": "5",
  "PF3": "6",
  "VREF+": "7",
  "VDD": "8",
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
  "PA9": "37",
  "PC6": "38",
  "PC7": "39",
  "VSS_40": "40",
  "VDDIO2": "41",
  "PA10": "42",
  "PA11": "43",
  "PA12": "44",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF3: "bidirectional", "VREF+": "input", VDD: "power_in", VSS_9: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", VSS_40: "passive", VDDIO2: "power_in", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PC10: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071R8TxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 24KB RAM, 59 GPIO, UFBGA64_N
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071RBIxN`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071rb.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32C071RBIxN extends Component.withPins({
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
  "PA12": "B8",
  "PC14": "C1",
  "PC13": "C2",
  "PB9": "C3",
  "PB4": "C4",
  "PD4": "C5",
  "PA15": "C6",
  "PA14": "C7",
  "PA11": "C8",
  "VDD": "D1",
  "VREF+": "D2",
  "PF3": "D3",
  "PB5": "D4",
  "PD3": "D5",
  "PA10": "D6",
  "PA13": "D7",
  "VDDIO2": "D8",
  "VSS_E1": "E1",
  "PF2": "E2",
  "PC0": "E3",
  "PA7": "E4",
  "PC7": "E5",
  "PA9": "E6",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC10: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PD6: "bidirectional", PD2: "bidirectional", PD0: "bidirectional", PC8: "bidirectional", PC15: "bidirectional", PC12: "bidirectional", PB8: "bidirectional", PB3: "bidirectional", PD5: "bidirectional", PD1: "bidirectional", PC9: "bidirectional", PA12: "bidirectional", PC14: "bidirectional", PC13: "bidirectional", PB9: "bidirectional", PB4: "bidirectional", PD4: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA11: "bidirectional", VDD: "power_in", "VREF+": "input", PF3: "bidirectional", PB5: "bidirectional", PD3: "bidirectional", PA10: "bidirectional", PA13: "bidirectional", VDDIO2: "power_in", VSS_E1: "power_in", PF2: "bidirectional", PC0: "bidirectional", PA7: "bidirectional", PC7: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", VSS_E8: "passive", PF0: "bidirectional", PC1: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PB0: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PF1: "bidirectional", PC2: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB1: "bidirectional", PB10: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA4: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PB11: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071RBIxN";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 24KB RAM, 61 GPIO, LQFP64_GP
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071RBTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071rb.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32C071RBTx extends Component.withPins({
  "PC11": "1",
  "PC12": "2",
  "PC13": "3",
  "PC14": "4",
  "PC15": "5",
  "PF3": "6",
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
  "PA9": "37",
  "PC6": "38",
  "PC7": "39",
  "PD8": "40",
  "PD9": "41",
  "PA10": "42",
  "PA11": "43",
  "PA12": "44",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF3: "bidirectional", "VREF+": "input", VDD: "power_in", VSS: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PC10: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071RBTx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 128KB flash, 24KB RAM, 59 GPIO, LQFP64_N
 *
 * KiCad symbol: `MCU_ST_STM32C0:STM32C071RBTxN`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32c071rb.pdf
 * Keywords: Arm Cortex-M0+ STM32C0 STM32C0x1.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class STM32C071RBTxN extends Component.withPins({
  "PC11": "1",
  "PC12": "2",
  "PC13": "3",
  "PC14": "4",
  "PC15": "5",
  "PF3": "6",
  "VREF+": "7",
  "VDD": "8",
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
  "PA9": "37",
  "PC6": "38",
  "PC7": "39",
  "VSS_40": "40",
  "VDDIO2": "41",
  "PA10": "42",
  "PA11": "43",
  "PA12": "44",
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
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC11: "bidirectional", PC12: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PF3: "bidirectional", "VREF+": "input", VDD: "power_in", VSS_9: "power_in", PF0: "bidirectional", PF1: "bidirectional", PF2: "bidirectional", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", VSS_40: "passive", VDDIO2: "power_in", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PC10: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32C0:STM32C071RBTxN";
  override referencePrefix = "U";
}
