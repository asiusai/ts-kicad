// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 192KB flash, 24KB RAM, 20 GPIO, VFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB05KZVx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb05kz.pdf
 * Keywords: Arm Cortex-M0+ STM32WB0 STM32WBx5.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.7x3.7mm.
 */
export class STM32WB05KZVx extends Component.withPins({
  "PB3": "1",
  "PB2": "2",
  "PB1": "3",
  "PB0": "4",
  "PA3": "5",
  "PA2": "6",
  "PA1": "7",
  "PA0": "8",
  "PA8": "9",
  "PA9": "10",
  "PA10": "11",
  "PA11": "12",
  "VDD_13": "13",
  "RF1": "14",
  "VDDRF": "15",
  "OSCOUT": "16",
  "OSCIN": "17",
  "PB15": "18",
  "PB14": "19",
  "PB13": "20",
  "PB12": "21",
  "PB7": "22",
  "PB6": "23",
  "VDDSD": "24",
  "VLXSD": "25",
  "VSSSD": "26",
  "VFBSD": "27",
  "VDDA_VCAP": "28",
  "RSTN": "29",
  "PB5": "30",
  "PB4": "31",
  "VDD_32": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB3: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDD_13: "power_in", RF1: "bidirectional", VDDRF: "power_in", OSCOUT: "bidirectional", OSCIN: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", PB12: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", VDDSD: "power_in", VLXSD: "power_in", VSSSD: "power_in", VFBSD: "input", VDDA_VCAP: "power_in", RSTN: "power_in", PB5: "bidirectional", PB4: "bidirectional", VDD_32: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB05KZVx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 32KB RAM, 20 GPIO, VFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB06KCVx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb06kc.pdf
 * Keywords: Arm Cortex-M0+ STM32WB0 STM32WBx6.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.7x3.7mm.
 */
export class STM32WB06KCVx extends Component.withPins({
  "PB3": "1",
  "PB2": "2",
  "PB1": "3",
  "PB0": "4",
  "PA11": "5",
  "PA10": "6",
  "PA9": "7",
  "PA8": "8",
  "PA0": "9",
  "PA1": "10",
  "PA2": "11",
  "PA3": "12",
  "VDD_13": "13",
  "RF1": "14",
  "VDDRF": "15",
  "OSCOUT": "16",
  "OSCIN": "17",
  "PB15": "18",
  "PB14": "19",
  "PB13": "20",
  "PB12": "21",
  "VFBSD": "22",
  "VSSSD": "23",
  "VLXSD": "24",
  "VDDSD": "25",
  "RSTN": "26",
  "VDDA_VCAP": "27",
  "PB7": "28",
  "PB6": "29",
  "PB5": "30",
  "PB4": "31",
  "VDD_32": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB3: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PA11: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA8: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VDD_13: "power_in", RF1: "bidirectional", VDDRF: "power_in", OSCOUT: "bidirectional", OSCIN: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", PB12: "bidirectional", VFBSD: "input", VSSSD: "power_in", VLXSD: "power_in", VDDSD: "power_in", RSTN: "power_in", VDDA_VCAP: "power_in", PB7: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PB4: "bidirectional", VDD_32: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB06KCVx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 256KB flash, 64KB RAM, 20 GPIO, VFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB07KCVx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb07kc.pdf
 * Keywords: Arm Cortex-M0+ STM32WB0 STM32WBx7.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.7x3.7mm.
 */
export class STM32WB07KCVx extends Component.withPins({
  "PB3": "1",
  "PB2": "2",
  "PB1": "3",
  "PB0": "4",
  "PA11": "5",
  "PA10": "6",
  "PA9": "7",
  "PA8": "8",
  "PA0": "9",
  "PA1": "10",
  "PA2": "11",
  "PA3": "12",
  "VDD_13": "13",
  "RF1": "14",
  "VDDRF": "15",
  "OSCOUT": "16",
  "OSCIN": "17",
  "PB15": "18",
  "PB14": "19",
  "PB13": "20",
  "PB12": "21",
  "VFBSD": "22",
  "VSSSD": "23",
  "VLXSD": "24",
  "VDDSD": "25",
  "RSTN": "26",
  "VDDA_VCAP": "27",
  "PB7": "28",
  "PB6": "29",
  "PB5": "30",
  "PB4": "31",
  "VDD_32": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB3: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PA11: "bidirectional", PA10: "bidirectional", PA9: "bidirectional", PA8: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VDD_13: "power_in", RF1: "bidirectional", VDDRF: "power_in", OSCOUT: "bidirectional", OSCIN: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", PB12: "bidirectional", VFBSD: "input", VSSSD: "power_in", VLXSD: "power_in", VDDSD: "power_in", RSTN: "power_in", VDDA_VCAP: "power_in", PB7: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PB4: "bidirectional", VDD_32: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB07KCVx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M0+ MCU, 512KB flash, 64KB RAM, 20 GPIO, VFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB09KEVx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb09ke.pdf
 * Keywords: Arm Cortex-M0+ STM32WB0 STM32WBx9.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.7x3.7mm.
 */
export class STM32WB09KEVx extends Component.withPins({
  "PB3": "1",
  "PB2": "2",
  "PB1": "3",
  "PB0": "4",
  "PA3": "5",
  "PA2": "6",
  "PA1": "7",
  "PA0": "8",
  "PA8": "9",
  "PA9": "10",
  "PA10": "11",
  "PA11": "12",
  "VDD_13": "13",
  "RF1": "14",
  "VDDRF": "15",
  "OSCOUT": "16",
  "OSCIN": "17",
  "PB15": "18",
  "PB14": "19",
  "PB13": "20",
  "PB12": "21",
  "PB7": "22",
  "PB6": "23",
  "VDDSD": "24",
  "VLXSD": "25",
  "VSSSD": "26",
  "VFBSD": "27",
  "VDDA_VCAP": "28",
  "RSTN": "29",
  "PB5": "30",
  "PB4": "31",
  "VDD_32": "32",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB3: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDD_13: "power_in", RF1: "bidirectional", VDDRF: "power_in", OSCOUT: "bidirectional", OSCIN: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", PB12: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", VDDSD: "power_in", VLXSD: "power_in", VSSSD: "power_in", VFBSD: "input", VDDA_VCAP: "power_in", RSTN: "power_in", PB5: "bidirectional", PB4: "bidirectional", VDD_32: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB09KEVx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 320KB flash, 48KB RAM, 64 MHz, 2.0-3.6V, 30 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB10CCUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb10cc.pdf
 * Keywords: Arm Cortex-M4 STM32WB STM32WBx0 Value Line.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WB10CCUx extends Component.withPins({
  "VBAT": "1",
  "PC14": "2",
  "PC15": "3",
  "PH3": "4",
  "PB8": "5",
  "PB9": "6",
  "NRST(PB11)": "7",
  "VDDA": "8",
  "PA0": "9",
  "PA1": "10",
  "PA2": "11",
  "PA3": "12",
  "PA4": "13",
  "PA5": "14",
  "PA6": "15",
  "PA7": "16",
  "PA8": "17",
  "PA9": "18",
  "PB2": "19",
  "VDD_20": "20",
  "RF1": "21",
  "VSSRF": "22",
  "VDDRF": "23",
  "OSC_OUT": "24",
  "OSC_IN": "25",
  "AT0": "26",
  "AT1": "27",
  "PB0": "28",
  "PB1": "29",
  "PE4": "30",
  "VDD_31": "31",
  "VSS_32": "32",
  "VDD_33": "33",
  "VDD_34": "34",
  "VDD_35": "35",
  "PA10": "36",
  "PA11": "37",
  "PA12": "38",
  "PA13": "39",
  "VDD_40": "40",
  "PA14": "41",
  "PA15": "42",
  "PB3": "43",
  "PB4": "44",
  "PB5": "45",
  "PB6": "46",
  "PB7": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC14: "bidirectional", PC15: "bidirectional", PH3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", "NRST(PB11)": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PB2: "bidirectional", VDD_20: "power_in", RF1: "bidirectional", VSSRF: "power_in", VDDRF: "power_in", OSC_OUT: "input", OSC_IN: "input", AT0: "no_connect", AT1: "no_connect", PB0: "bidirectional", PB1: "bidirectional", PE4: "bidirectional", VDD_31: "power_in", VSS_32: "power_in", VDD_33: "power_in", VDD_34: "power_in", VDD_35: "power_in", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_40: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB10CCUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 320KB flash, 48KB RAM, 64 MHz, 1.71-3.6V, 30 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB15CCUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb15cc.pdf
 * Keywords: Arm Cortex-M4 STM32WB STM32WBx5.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WB15CCUx extends Component.withPins({
  "VBAT": "1",
  "PC14": "2",
  "PC15": "3",
  "PH3": "4",
  "PB8": "5",
  "PB9": "6",
  "NRST(PB11)": "7",
  "VDDA": "8",
  "PA0": "9",
  "PA1": "10",
  "PA2": "11",
  "PA3": "12",
  "PA4": "13",
  "PA5": "14",
  "PA6": "15",
  "PA7": "16",
  "PA8": "17",
  "PA9": "18",
  "PB2": "19",
  "VDD_20": "20",
  "RF1": "21",
  "VSSRF": "22",
  "VDDRF": "23",
  "OSC_OUT": "24",
  "OSC_IN": "25",
  "AT0": "26",
  "AT1": "27",
  "PB0": "28",
  "PB1": "29",
  "PE4": "30",
  "VFBSMPS": "31",
  "VSSSMPS": "32",
  "VLXSMPS": "33",
  "VDDSMPS": "34",
  "VDD_35": "35",
  "PA10": "36",
  "PA11": "37",
  "PA12": "38",
  "PA13": "39",
  "VDD_40": "40",
  "PA14": "41",
  "PA15": "42",
  "PB3": "43",
  "PB4": "44",
  "PB5": "45",
  "PB6": "46",
  "PB7": "47",
  "VDD_48": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC14: "bidirectional", PC15: "bidirectional", PH3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", "NRST(PB11)": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PB2: "bidirectional", VDD_20: "power_in", RF1: "bidirectional", VSSRF: "power_in", VDDRF: "power_in", OSC_OUT: "input", OSC_IN: "input", AT0: "no_connect", AT1: "no_connect", PB0: "bidirectional", PB1: "bidirectional", PE4: "bidirectional", VFBSMPS: "input", VSSSMPS: "power_in", VLXSMPS: "power_in", VDDSMPS: "power_in", VDD_35: "power_in", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_40: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", VDD_48: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB15CCUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 320KB flash, 48KB RAM, 64 MHz, 1.71-3.6V, 36 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB15CCUxE`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb15cc.pdf
 * Keywords: Arm Cortex-M4 STM32WB STM32WBx5.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WB15CCUxE extends Component.withPins({
  "PC14": "1",
  "PC15": "2",
  "PB10": "3",
  "PH3": "4",
  "PB8": "5",
  "PB9": "6",
  "NRST(PB11)": "7",
  "VDDA": "8",
  "PA0": "9",
  "PA1": "10",
  "PA2": "11",
  "PA3": "12",
  "PB12": "13",
  "PA4": "14",
  "PA5": "15",
  "PA6": "16",
  "PA7": "17",
  "PA8": "18",
  "PA9": "19",
  "PB2": "20",
  "VDD_21": "21",
  "RF1": "22",
  "VDDRF": "23",
  "OSC_OUT": "24",
  "OSC_IN": "25",
  "AT0": "26",
  "AT1": "27",
  "PB0": "28",
  "PB1": "29",
  "PB13": "30",
  "PE4": "31",
  "VFBSMPS": "32",
  "VDDSMPS": "33",
  "PB14": "34",
  "PB15": "35",
  "PA10": "36",
  "PA11": "37",
  "PA12": "38",
  "PA13": "39",
  "PC1": "40",
  "PA14": "41",
  "PA15": "42",
  "PB3": "43",
  "PB4": "44",
  "PB5": "45",
  "PB6": "46",
  "PB7": "47",
  "VDD_48": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC14: "bidirectional", PC15: "bidirectional", PB10: "bidirectional", PH3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", "NRST(PB11)": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PB12: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PB2: "bidirectional", VDD_21: "power_in", RF1: "bidirectional", VDDRF: "power_in", OSC_OUT: "input", OSC_IN: "input", AT0: "no_connect", AT1: "no_connect", PB0: "bidirectional", PB1: "bidirectional", PB13: "bidirectional", PE4: "bidirectional", VFBSMPS: "input", VDDSMPS: "power_in", PB14: "bidirectional", PB15: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PC1: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", VDD_48: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB15CCUxE";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 320KB flash, 48KB RAM, 64 MHz, 1.71-3.6V, 26 GPIO, WLCSP49
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB15CCYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*3.3x3.38mm*Layout7x7*P0.4mm*Offcenter*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb15cc.pdf
 * Keywords: Arm Cortex-M4 STM32WB STM32WBx5.
 * Default footprint: Package_CSP:ST_WLCSP-49_3.3x3.38mm_Layout7x7_P0.4mm_Offcenter.
 */
export class STM32WB15CCYx extends Component.withPins({
  "VDDSMPS": "A1",
  "PA11": "A2",
  "PA12": "A3",
  "VDD_A4": "A4",
  "PB5": "A5",
  "PB7": "A6",
  "PC14": "A7",
  "VLXSMPS": "B1",
  "PA13": "B2",
  "PA14": "B3",
  "PB4": "B4",
  "PB6": "B5",
  "PH3": "B6",
  "PC15": "B7",
  "VSSSMPS": "C1",
  "PA10": "C2",
  "VSS_C3": "C3",
  "PA0": "C4",
  "VBAT": "C5",
  "PB8": "C6",
  "NRST(PB11)": "C7",
  "VDD_D1": "D1",
  "VFBSMPS": "D2",
  "PA9": "D3",
  "PA5": "D4",
  "PA3": "D5",
  "VSS_D6": "D6",
  "VDD_D7": "D7",
  "PB1": "E1",
  "PB0": "E2",
  "AT0": "E3",
  "PB2": "E4",
  "PA7": "E5",
  "PA2": "E6",
  "VDDA": "E7",
  "OSC_IN": "F1",
  "OSC_OUT": "F2",
  "AT1": "F3",
  "VSSRF_F4": "F4",
  "VSS_F5": "F5",
  "PA6": "F6",
  "PA1": "F7",
  "VSSRF_G1": "G1",
  "VDDRF": "G2",
  "VSSRF_G3": "G3",
  "RF1": "G4",
  "VDD_G5": "G5",
  "PA8": "G6",
  "PA4": "G7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDSMPS: "power_in", PA11: "bidirectional", PA12: "bidirectional", VDD_A4: "power_in", PB5: "bidirectional", PB7: "bidirectional", PC14: "bidirectional", VLXSMPS: "power_in", PA13: "bidirectional", PA14: "bidirectional", PB4: "bidirectional", PB6: "bidirectional", PH3: "bidirectional", PC15: "bidirectional", VSSSMPS: "power_in", PA10: "bidirectional", VSS_C3: "power_in", PA0: "bidirectional", VBAT: "power_in", PB8: "bidirectional", "NRST(PB11)": "input", VDD_D1: "power_in", VFBSMPS: "input", PA9: "bidirectional", PA5: "bidirectional", PA3: "bidirectional", VSS_D6: "passive", VDD_D7: "power_in", PB1: "bidirectional", PB0: "bidirectional", AT0: "no_connect", PB2: "bidirectional", PA7: "bidirectional", PA2: "bidirectional", VDDA: "power_in", OSC_IN: "input", OSC_OUT: "input", AT1: "no_connect", VSSRF_F4: "power_in", VSS_F5: "passive", PA6: "bidirectional", PA1: "bidirectional", VSSRF_G1: "passive", VDDRF: "power_in", VSSRF_G3: "passive", RF1: "bidirectional", VDD_G5: "power_in", PA8: "bidirectional", PA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB15CCYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 512KB flash, 96KB RAM, 30 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB30CEUxA`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb30ce.pdf
 * Keywords: Arm Cortex-M4 STM32WB STM32WBx0 Value Line.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WB30CEUxA extends Component.withPins({
  "VBAT": "1",
  "PC14": "2",
  "PC15": "3",
  "PH3": "4",
  "PB8": "5",
  "PB9": "6",
  "NRST": "7",
  "VDDA": "8",
  "PA0": "9",
  "PA1": "10",
  "PA2": "11",
  "PA3": "12",
  "PA4": "13",
  "PA5": "14",
  "PA6": "15",
  "PA7": "16",
  "PA8": "17",
  "PA9": "18",
  "PB2": "19",
  "VDD_20": "20",
  "RF1": "21",
  "VSSRF": "22",
  "VDDRF": "23",
  "OSC_OUT": "24",
  "OSC_IN": "25",
  "AT0": "26",
  "AT1": "27",
  "PB0": "28",
  "PB1": "29",
  "PE4": "30",
  "VDD_31": "31",
  "VSS_32": "32",
  "VDD_33": "33",
  "VDD_34": "34",
  "VDD_35": "35",
  "PA10": "36",
  "PA11": "37",
  "PA12": "38",
  "PA13": "39",
  "VDD_40": "40",
  "PA14": "41",
  "PA15": "42",
  "PB3": "43",
  "PB4": "44",
  "PB5": "45",
  "PB6": "46",
  "PB7": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC14: "bidirectional", PC15: "bidirectional", PH3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PB2: "bidirectional", VDD_20: "power_in", RF1: "bidirectional", VSSRF: "power_in", VDDRF: "power_in", OSC_OUT: "input", OSC_IN: "input", AT0: "no_connect", AT1: "no_connect", PB0: "bidirectional", PB1: "bidirectional", PE4: "bidirectional", VDD_31: "power_in", VSS_32: "power_in", VDD_33: "power_in", VDD_34: "power_in", VDD_35: "power_in", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_40: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB30CEUxA";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256-512KB flash, 96KB RAM, 30 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB35C_C-E_UxA`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb35cc.pdf
 * Keywords: Arm Cortex-M4 STM32WB STM32WBx5.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WB35C_C_E_UxA extends Component.withPins({
  "VBAT": "1",
  "PC14": "2",
  "PC15": "3",
  "PH3": "4",
  "PB8": "5",
  "PB9": "6",
  "NRST": "7",
  "VDDA": "8",
  "PA0": "9",
  "PA1": "10",
  "PA2": "11",
  "PA3": "12",
  "PA4": "13",
  "PA5": "14",
  "PA6": "15",
  "PA7": "16",
  "PA8": "17",
  "PA9": "18",
  "PB2": "19",
  "VDD_20": "20",
  "RF1": "21",
  "VSSRF": "22",
  "VDDRF": "23",
  "OSC_OUT": "24",
  "OSC_IN": "25",
  "AT0": "26",
  "AT1": "27",
  "PB0": "28",
  "PB1": "29",
  "PE4": "30",
  "VFBSMPS": "31",
  "VSSSMPS": "32",
  "VLXSMPS": "33",
  "VDDSMPS": "34",
  "VDD_35": "35",
  "PA10": "36",
  "PA11": "37",
  "PA12": "38",
  "PA13": "39",
  "VDDUSB": "40",
  "PA14": "41",
  "PA15": "42",
  "PB3": "43",
  "PB4": "44",
  "PB5": "45",
  "PB6": "46",
  "PB7": "47",
  "VDD_48": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC14: "bidirectional", PC15: "bidirectional", PH3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PB2: "bidirectional", VDD_20: "power_in", RF1: "bidirectional", VSSRF: "power_in", VDDRF: "power_in", OSC_OUT: "input", OSC_IN: "input", AT0: "no_connect", AT1: "no_connect", PB0: "bidirectional", PB1: "bidirectional", PE4: "bidirectional", VFBSMPS: "input", VSSSMPS: "power_in", VLXSMPS: "power_in", VDDSMPS: "power_in", VDD_35: "power_in", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", VDD_48: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB35C_C-E_UxA";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 96KB RAM, 30 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB35CCUxA`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb35cc.pdf
 * Keywords: Arm Cortex-M4 STM32WB STM32WBx5.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WB35CCUxA extends Component.withPins({
  "VBAT": "1",
  "PC14": "2",
  "PC15": "3",
  "PH3": "4",
  "PB8": "5",
  "PB9": "6",
  "NRST": "7",
  "VDDA": "8",
  "PA0": "9",
  "PA1": "10",
  "PA2": "11",
  "PA3": "12",
  "PA4": "13",
  "PA5": "14",
  "PA6": "15",
  "PA7": "16",
  "PA8": "17",
  "PA9": "18",
  "PB2": "19",
  "VDD_20": "20",
  "RF1": "21",
  "VSSRF": "22",
  "VDDRF": "23",
  "OSC_OUT": "24",
  "OSC_IN": "25",
  "AT0": "26",
  "AT1": "27",
  "PB0": "28",
  "PB1": "29",
  "PE4": "30",
  "VFBSMPS": "31",
  "VSSSMPS": "32",
  "VLXSMPS": "33",
  "VDDSMPS": "34",
  "VDD_35": "35",
  "PA10": "36",
  "PA11": "37",
  "PA12": "38",
  "PA13": "39",
  "VDDUSB": "40",
  "PA14": "41",
  "PA15": "42",
  "PB3": "43",
  "PB4": "44",
  "PB5": "45",
  "PB6": "46",
  "PB7": "47",
  "VDD_48": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC14: "bidirectional", PC15: "bidirectional", PH3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PB2: "bidirectional", VDD_20: "power_in", RF1: "bidirectional", VSSRF: "power_in", VDDRF: "power_in", OSC_OUT: "input", OSC_IN: "input", AT0: "no_connect", AT1: "no_connect", PB0: "bidirectional", PB1: "bidirectional", PE4: "bidirectional", VFBSMPS: "input", VSSSMPS: "power_in", VLXSMPS: "power_in", VDDSMPS: "power_in", VDD_35: "power_in", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", VDD_48: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB35CCUxA";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 512KB flash, 96KB RAM, 30 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB35CEUxA`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb35ce.pdf
 * Keywords: Arm Cortex-M4 STM32WB STM32WBx5.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WB35CEUxA extends Component.withPins({
  "VBAT": "1",
  "PC14": "2",
  "PC15": "3",
  "PH3": "4",
  "PB8": "5",
  "PB9": "6",
  "NRST": "7",
  "VDDA": "8",
  "PA0": "9",
  "PA1": "10",
  "PA2": "11",
  "PA3": "12",
  "PA4": "13",
  "PA5": "14",
  "PA6": "15",
  "PA7": "16",
  "PA8": "17",
  "PA9": "18",
  "PB2": "19",
  "VDD_20": "20",
  "RF1": "21",
  "VSSRF": "22",
  "VDDRF": "23",
  "OSC_OUT": "24",
  "OSC_IN": "25",
  "AT0": "26",
  "AT1": "27",
  "PB0": "28",
  "PB1": "29",
  "PE4": "30",
  "VFBSMPS": "31",
  "VSSSMPS": "32",
  "VLXSMPS": "33",
  "VDDSMPS": "34",
  "VDD_35": "35",
  "PA10": "36",
  "PA11": "37",
  "PA12": "38",
  "PA13": "39",
  "VDDUSB": "40",
  "PA14": "41",
  "PA15": "42",
  "PB3": "43",
  "PB4": "44",
  "PB5": "45",
  "PB6": "46",
  "PB7": "47",
  "VDD_48": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC14: "bidirectional", PC15: "bidirectional", PH3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PB2: "bidirectional", VDD_20: "power_in", RF1: "bidirectional", VSSRF: "power_in", VDDRF: "power_in", OSC_OUT: "input", OSC_IN: "input", AT0: "no_connect", AT1: "no_connect", PB0: "bidirectional", PB1: "bidirectional", PE4: "bidirectional", VFBSMPS: "input", VSSSMPS: "power_in", VLXSMPS: "power_in", VDDSMPS: "power_in", VDD_35: "power_in", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", VDD_48: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB35CEUxA";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 1024KB flash, 128KB RAM, 64 MHz, 2.0-3.6V, 30 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB50CGUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb50cg.pdf
 * Keywords: Arm Cortex-M4 STM32WB STM32WBx0 Value Line.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WB50CGUx extends Component.withPins({
  "VBAT": "1",
  "PC14": "2",
  "PC15": "3",
  "PH3": "4",
  "PB8": "5",
  "PB9": "6",
  "NRST": "7",
  "VDDA": "8",
  "PA0": "9",
  "PA1": "10",
  "PA2": "11",
  "PA3": "12",
  "PA4": "13",
  "PA5": "14",
  "PA6": "15",
  "PA7": "16",
  "PA8": "17",
  "PA9": "18",
  "PB2": "19",
  "VDD_20": "20",
  "RF1": "21",
  "VSSRF": "22",
  "VDDRF": "23",
  "OSC_OUT": "24",
  "OSC_IN": "25",
  "AT0": "26",
  "AT1": "27",
  "PB0": "28",
  "PB1": "29",
  "PE4": "30",
  "VDD_31": "31",
  "VSS_32": "32",
  "VDD_33": "33",
  "VDD_34": "34",
  "VDD_35": "35",
  "PA10": "36",
  "PA11": "37",
  "PA12": "38",
  "PA13": "39",
  "VDD_40": "40",
  "PA14": "41",
  "PA15": "42",
  "PB3": "43",
  "PB4": "44",
  "PB5": "45",
  "PB6": "46",
  "PB7": "47",
  "VDD_48": "48",
  "VSS_49": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC14: "bidirectional", PC15: "bidirectional", PH3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PB2: "bidirectional", VDD_20: "power_in", RF1: "bidirectional", VSSRF: "power_in", VDDRF: "power_in", OSC_OUT: "input", OSC_IN: "input", AT0: "no_connect", AT1: "no_connect", PB0: "bidirectional", PB1: "bidirectional", PE4: "bidirectional", VDD_31: "power_in", VSS_32: "power_in", VDD_33: "power_in", VDD_34: "power_in", VDD_35: "power_in", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDD_40: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", VDD_48: "power_in", VSS_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB50CGUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 128KB RAM, 64 MHz, 1.71-3.6V, 30 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB55CCUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb55cc.pdf
 * Keywords: Arm Cortex-M4 STM32WB STM32WBx5.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WB55CCUx extends Component.withPins({
  "VBAT": "1",
  "PC14": "2",
  "PC15": "3",
  "PH3": "4",
  "PB8": "5",
  "PB9": "6",
  "NRST": "7",
  "VDDA": "8",
  "PA0": "9",
  "PA1": "10",
  "PA2": "11",
  "PA3": "12",
  "PA4": "13",
  "PA5": "14",
  "PA6": "15",
  "PA7": "16",
  "PA8": "17",
  "PA9": "18",
  "PB2": "19",
  "VDD_20": "20",
  "RF1": "21",
  "VSSRF": "22",
  "VDDRF": "23",
  "OSC_OUT": "24",
  "OSC_IN": "25",
  "AT0": "26",
  "AT1": "27",
  "PB0": "28",
  "PB1": "29",
  "PE4": "30",
  "VFBSMPS": "31",
  "VSSSMPS": "32",
  "VLXSMPS": "33",
  "VDDSMPS": "34",
  "VDD_35": "35",
  "PA10": "36",
  "PA11": "37",
  "PA12": "38",
  "PA13": "39",
  "VDDUSB": "40",
  "PA14": "41",
  "PA15": "42",
  "PB3": "43",
  "PB4": "44",
  "PB5": "45",
  "PB6": "46",
  "PB7": "47",
  "VDD_48": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC14: "bidirectional", PC15: "bidirectional", PH3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PB2: "bidirectional", VDD_20: "power_in", RF1: "bidirectional", VSSRF: "power_in", VDDRF: "power_in", OSC_OUT: "input", OSC_IN: "input", AT0: "no_connect", AT1: "no_connect", PB0: "bidirectional", PB1: "bidirectional", PE4: "bidirectional", VFBSMPS: "input", VSSSMPS: "power_in", VLXSMPS: "power_in", VDDSMPS: "power_in", VDD_35: "power_in", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", VDD_48: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB55CCUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 512KB flash, 256KB RAM, 64 MHz, 1.71-3.6V, 30 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB55CEUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb55ce.pdf
 * Keywords: Arm Cortex-M4 STM32WB STM32WBx5.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WB55CEUx extends Component.withPins({
  "VBAT": "1",
  "PC14": "2",
  "PC15": "3",
  "PH3": "4",
  "PB8": "5",
  "PB9": "6",
  "NRST": "7",
  "VDDA": "8",
  "PA0": "9",
  "PA1": "10",
  "PA2": "11",
  "PA3": "12",
  "PA4": "13",
  "PA5": "14",
  "PA6": "15",
  "PA7": "16",
  "PA8": "17",
  "PA9": "18",
  "PB2": "19",
  "VDD_20": "20",
  "RF1": "21",
  "VSSRF": "22",
  "VDDRF": "23",
  "OSC_OUT": "24",
  "OSC_IN": "25",
  "AT0": "26",
  "AT1": "27",
  "PB0": "28",
  "PB1": "29",
  "PE4": "30",
  "VFBSMPS": "31",
  "VSSSMPS": "32",
  "VLXSMPS": "33",
  "VDDSMPS": "34",
  "VDD_35": "35",
  "PA10": "36",
  "PA11": "37",
  "PA12": "38",
  "PA13": "39",
  "VDDUSB": "40",
  "PA14": "41",
  "PA15": "42",
  "PB3": "43",
  "PB4": "44",
  "PB5": "45",
  "PB6": "46",
  "PB7": "47",
  "VDD_48": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC14: "bidirectional", PC15: "bidirectional", PH3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PB2: "bidirectional", VDD_20: "power_in", RF1: "bidirectional", VSSRF: "power_in", VDDRF: "power_in", OSC_OUT: "input", OSC_IN: "input", AT0: "no_connect", AT1: "no_connect", PB0: "bidirectional", PB1: "bidirectional", PE4: "bidirectional", VFBSMPS: "input", VSSSMPS: "power_in", VLXSMPS: "power_in", VDDSMPS: "power_in", VDD_35: "power_in", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", VDD_48: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB55CEUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 1024KB flash, 256KB RAM, 64 MHz, 1.71-3.6V, 30 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB55CGUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb55cg.pdf
 * Keywords: Arm Cortex-M4 STM32WB STM32WBx5.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WB55CGUx extends Component.withPins({
  "VBAT": "1",
  "PC14": "2",
  "PC15": "3",
  "PH3": "4",
  "PB8": "5",
  "PB9": "6",
  "NRST": "7",
  "VDDA": "8",
  "PA0": "9",
  "PA1": "10",
  "PA2": "11",
  "PA3": "12",
  "PA4": "13",
  "PA5": "14",
  "PA6": "15",
  "PA7": "16",
  "PA8": "17",
  "PA9": "18",
  "PB2": "19",
  "VDD_20": "20",
  "RF1": "21",
  "VSSRF": "22",
  "VDDRF": "23",
  "OSC_OUT": "24",
  "OSC_IN": "25",
  "AT0": "26",
  "AT1": "27",
  "PB0": "28",
  "PB1": "29",
  "PE4": "30",
  "VFBSMPS": "31",
  "VSSSMPS": "32",
  "VLXSMPS": "33",
  "VDDSMPS": "34",
  "VDD_35": "35",
  "PA10": "36",
  "PA11": "37",
  "PA12": "38",
  "PA13": "39",
  "VDDUSB": "40",
  "PA14": "41",
  "PA15": "42",
  "PB3": "43",
  "PB4": "44",
  "PB5": "45",
  "PB6": "46",
  "PB7": "47",
  "VDD_48": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC14: "bidirectional", PC15: "bidirectional", PH3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", NRST: "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PB2: "bidirectional", VDD_20: "power_in", RF1: "bidirectional", VSSRF: "power_in", VDDRF: "power_in", OSC_OUT: "input", OSC_IN: "input", AT0: "no_connect", AT1: "no_connect", PB0: "bidirectional", PB1: "bidirectional", PE4: "bidirectional", VFBSMPS: "input", VSSSMPS: "power_in", VLXSMPS: "power_in", VDDSMPS: "power_in", VDD_35: "power_in", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", VDD_48: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB55CGUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 128KB RAM, 64 MHz, 1.71-3.6V, 49 GPIO, VFQFPN68
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB55RCVx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.4mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb55rc.pdf
 * Keywords: Arm Cortex-M4 STM32WB STM32WBx5.
 * Default footprint: Package_DFN_QFN:QFN-68-1EP_8x8mm_P0.4mm_EP6.4x6.4mm.
 */
export class STM32WB55RCVx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH3": "5",
  "PB8": "6",
  "PB9": "7",
  "NRST": "8",
  "PC0": "9",
  "PC1": "10",
  "PC2": "11",
  "PC3": "12",
  "VREF+": "13",
  "VDDA": "14",
  "PA0": "15",
  "PA1": "16",
  "PA2": "17",
  "PA3": "18",
  "PA4": "19",
  "PA5": "20",
  "PA6": "21",
  "PA7": "22",
  "PA8": "23",
  "PA9": "24",
  "PC4": "25",
  "PC5": "26",
  "PB2": "27",
  "PB10": "28",
  "PB11": "29",
  "VDD_30": "30",
  "RF1": "31",
  "VSSRF": "32",
  "VDDRF": "33",
  "OSC_OUT": "34",
  "OSC_IN": "35",
  "AT0": "36",
  "AT1": "37",
  "PB0": "38",
  "PB1": "39",
  "PE4": "40",
  "VFBSMPS": "41",
  "VSSSMPS": "42",
  "VLXSMPS": "43",
  "VDDSMPS": "44",
  "VDD_45": "45",
  "PB12": "46",
  "PB13": "47",
  "PB14": "48",
  "PB15": "49",
  "PC6": "50",
  "PA10": "51",
  "PA11": "52",
  "PA12": "53",
  "PA13": "54",
  "VDDUSB": "55",
  "PA14": "56",
  "PA15": "57",
  "PC10": "58",
  "PC11": "59",
  "PC12": "60",
  "PD0": "61",
  "PD1": "62",
  "PB3": "63",
  "PB4": "64",
  "PB5": "65",
  "PB6": "66",
  "PB7": "67",
  "VDD_68": "68",
  "VSS": "69",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VDD_30: "power_in", RF1: "bidirectional", VSSRF: "power_in", VDDRF: "power_in", OSC_OUT: "input", OSC_IN: "input", AT0: "no_connect", AT1: "no_connect", PB0: "bidirectional", PB1: "bidirectional", PE4: "bidirectional", VFBSMPS: "input", VSSSMPS: "power_in", VLXSMPS: "power_in", VDDSMPS: "power_in", VDD_45: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", VDD_68: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB55RCVx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 512KB flash, 256KB RAM, 64 MHz, 1.71-3.6V, 49 GPIO, VFQFPN68
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB55REVx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.4mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb55re.pdf
 * Keywords: Arm Cortex-M4 STM32WB STM32WBx5.
 * Default footprint: Package_DFN_QFN:QFN-68-1EP_8x8mm_P0.4mm_EP6.4x6.4mm.
 */
export class STM32WB55REVx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH3": "5",
  "PB8": "6",
  "PB9": "7",
  "NRST": "8",
  "PC0": "9",
  "PC1": "10",
  "PC2": "11",
  "PC3": "12",
  "VREF+": "13",
  "VDDA": "14",
  "PA0": "15",
  "PA1": "16",
  "PA2": "17",
  "PA3": "18",
  "PA4": "19",
  "PA5": "20",
  "PA6": "21",
  "PA7": "22",
  "PA8": "23",
  "PA9": "24",
  "PC4": "25",
  "PC5": "26",
  "PB2": "27",
  "PB10": "28",
  "PB11": "29",
  "VDD_30": "30",
  "RF1": "31",
  "VSSRF": "32",
  "VDDRF": "33",
  "OSC_OUT": "34",
  "OSC_IN": "35",
  "AT0": "36",
  "AT1": "37",
  "PB0": "38",
  "PB1": "39",
  "PE4": "40",
  "VFBSMPS": "41",
  "VSSSMPS": "42",
  "VLXSMPS": "43",
  "VDDSMPS": "44",
  "VDD_45": "45",
  "PB12": "46",
  "PB13": "47",
  "PB14": "48",
  "PB15": "49",
  "PC6": "50",
  "PA10": "51",
  "PA11": "52",
  "PA12": "53",
  "PA13": "54",
  "VDDUSB": "55",
  "PA14": "56",
  "PA15": "57",
  "PC10": "58",
  "PC11": "59",
  "PC12": "60",
  "PD0": "61",
  "PD1": "62",
  "PB3": "63",
  "PB4": "64",
  "PB5": "65",
  "PB6": "66",
  "PB7": "67",
  "VDD_68": "68",
  "VSS": "69",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VDD_30: "power_in", RF1: "bidirectional", VSSRF: "power_in", VDDRF: "power_in", OSC_OUT: "input", OSC_IN: "input", AT0: "no_connect", AT1: "no_connect", PB0: "bidirectional", PB1: "bidirectional", PE4: "bidirectional", VFBSMPS: "input", VSSSMPS: "power_in", VLXSMPS: "power_in", VDDSMPS: "power_in", VDD_45: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", VDD_68: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB55REVx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 1024KB flash, 256KB RAM, 64 MHz, 1.71-3.6V, 49 GPIO, VFQFPN68
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB55RGVx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*8x8mm*P0.4mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb55rg.pdf
 * Keywords: Arm Cortex-M4 STM32WB STM32WBx5.
 * Default footprint: Package_DFN_QFN:QFN-68-1EP_8x8mm_P0.4mm_EP6.4x6.4mm.
 */
export class STM32WB55RGVx extends Component.withPins({
  "VBAT": "1",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "PH3": "5",
  "PB8": "6",
  "PB9": "7",
  "NRST": "8",
  "PC0": "9",
  "PC1": "10",
  "PC2": "11",
  "PC3": "12",
  "VREF+": "13",
  "VDDA": "14",
  "PA0": "15",
  "PA1": "16",
  "PA2": "17",
  "PA3": "18",
  "PA4": "19",
  "PA5": "20",
  "PA6": "21",
  "PA7": "22",
  "PA8": "23",
  "PA9": "24",
  "PC4": "25",
  "PC5": "26",
  "PB2": "27",
  "PB10": "28",
  "PB11": "29",
  "VDD_30": "30",
  "RF1": "31",
  "VSSRF": "32",
  "VDDRF": "33",
  "OSC_OUT": "34",
  "OSC_IN": "35",
  "AT0": "36",
  "AT1": "37",
  "PB0": "38",
  "PB1": "39",
  "PE4": "40",
  "VFBSMPS": "41",
  "VSSSMPS": "42",
  "VLXSMPS": "43",
  "VDDSMPS": "44",
  "VDD_45": "45",
  "PB12": "46",
  "PB13": "47",
  "PB14": "48",
  "PB15": "49",
  "PC6": "50",
  "PA10": "51",
  "PA11": "52",
  "PA12": "53",
  "PA13": "54",
  "VDDUSB": "55",
  "PA14": "56",
  "PA15": "57",
  "PC10": "58",
  "PC11": "59",
  "PC12": "60",
  "PD0": "61",
  "PD1": "62",
  "PB3": "63",
  "PB4": "64",
  "PB5": "65",
  "PB6": "66",
  "PB7": "67",
  "VDD_68": "68",
  "VSS": "69",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", PH3: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", NRST: "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", "VREF+": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VDD_30: "power_in", RF1: "bidirectional", VSSRF: "power_in", VDDRF: "power_in", OSC_OUT: "input", OSC_IN: "input", AT0: "no_connect", AT1: "no_connect", PB0: "bidirectional", PB1: "bidirectional", PE4: "bidirectional", VFBSMPS: "input", VSSSMPS: "power_in", VLXSMPS: "power_in", VDDSMPS: "power_in", VDD_45: "power_in", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VDDUSB: "power_in", PA14: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", VDD_68: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB55RGVx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 128KB RAM, 64 MHz, 1.71-3.6V, 72 GPIO, UFBGA129
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB55VCQx`. Reference prefix: `U`.
 * Footprint filters: ST*UFBGA*7x7mm*Layout13x13*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb55vc.pdf
 * Keywords: Arm Cortex-M4 STM32WB STM32WBx5.
 * Default footprint: Package_BGA:ST_UFBGA-129_7x7mm_Layout13x13_P0.5mm.
 */
export class STM32WB55VCQx extends Component.withPins({
  "PE1": "A1",
  "PB6": "A2",
  "PB5": "A3",
  "PD5": "A6",
  "PD10": "A7",
  "VDDCAP_A8": "A8",
  "PA13": "A11",
  "VDDUSB": "A12",
  "PA12": "A13",
  "PE2": "B1",
  "PE0": "B2",
  "PB4": "B3",
  "PD12": "B4",
  "PD11": "B5",
  "PD8": "B6",
  "PD2": "B7",
  "VSS_B8": "B8",
  "PC10": "B9",
  "PC12": "B10",
  "PD0": "B11",
  "VSS_B12": "B12",
  "PA11": "B13",
  "PD13": "C1",
  "PD15": "C2",
  "PB7": "C3",
  "PB3": "C4",
  "PD7": "C5",
  "PD4": "C6",
  "PD1": "C7",
  "PC11": "C8",
  "PA15": "C9",
  "PA14": "C10",
  "VSS_C11": "C11",
  "PA10": "C12",
  "PC9": "C13",
  "VBAT": "D2",
  "PD14": "D3",
  "PD9": "D4",
  "PD6": "D6",
  "PD3": "D8",
  "PC6": "D10",
  "PC8": "D11",
  "PC7": "D12",
  "PC15": "E2",
  "PC14": "E3",
  "VSS_E5": "E5",
  "VSS_E7": "E7",
  "VSS_E9": "E9",
  "PB14": "E11",
  "PB13": "E12",
  "PH0": "F1",
  "VDDCAP_F2": "F2",
  "VSS_F3": "F3",
  "PC13": "F4",
  "VDD_F6": "F6",
  "VDD_F8": "F8",
  "PB15": "F10",
  "VLXSMPS_F11": "F11",
  "VDDSMPS_F12": "F12",
  "VDDSMPS_F13": "F13",
  "PH3": "G1",
  "PH1": "G2",
  "PB8": "G3",
  "VSS_G5": "G5",
  "VDD_G7": "G7",
  "VSS_G9": "G9",
  "VLXSMPS_G11": "G11",
  "VSSSMPS_G12": "G12",
  "VSSSMPS_G13": "G13",
  "PC1": "H1",
  "NRST": "H2",
  "PC0": "H3",
  "PB9": "H4",
  "VDD_H6": "H6",
  "VDD_H8": "H8",
  "PB12": "H10",
  "VFBSMPS": "H11",
  "PE3": "H12",
  "PE4": "H13",
  "PC2": "J2",
  "PC3": "J3",
  "VSS_J5": "J5",
  "VSS_J7": "J7",
  "VSS_J9": "J9",
  "VSS_J11": "J11",
  "VDDCAP_J12": "J12",
  "VSSA": "K2",
  "VDDA": "K3",
  "VSS_K4": "K4",
  "VSS_K6": "K6",
  "VSSRF_K8": "K8",
  "VSSRF_K10": "K10",
  "AT0": "K11",
  "AT1": "K12",
  "VREF+": "L1",
  "PA1": "L2",
  "PA4": "L3",
  "PA9": "L4",
  "PC5": "L5",
  "PB10": "L6",
  "VSSRF_L7": "L7",
  "VSSRF_L8": "L8",
  "VSSRF_L9": "L9",
  "VSSRF_L10": "L10",
  "VSSRF_L11": "L11",
  "PB1": "L12",
  "PB0": "L13",
  "PA0": "M1",
  "PA3": "M2",
  "PA6": "M3",
  "PA8": "M4",
  "PC4": "M5",
  "PB11": "M6",
  "VSS_M7": "M7",
  "VSSRF_M8": "M8",
  "RF1": "M9",
  "VSSRF_M10": "M10",
  "VSSRF_M11": "M11",
  "VSSRF_M12": "M12",
  "OSC_IN": "M13",
  "PA2": "N1",
  "PA5": "N2",
  "PA7": "N3",
  "PB2": "N6",
  "VDDCAP_N7": "N7",
  "VSSRF_N8": "N8",
  "VSSRF_N11": "N11",
  "VDDRF": "N12",
  "OSC_OUT": "N13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE1: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PD5: "bidirectional", PD10: "bidirectional", VDDCAP_A8: "power_in", PA13: "bidirectional", VDDUSB: "power_in", PA12: "bidirectional", PE2: "bidirectional", PE0: "bidirectional", PB4: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD8: "bidirectional", PD2: "bidirectional", VSS_B8: "power_in", PC10: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", VSS_B12: "passive", PA11: "bidirectional", PD13: "bidirectional", PD15: "bidirectional", PB7: "bidirectional", PB3: "bidirectional", PD7: "bidirectional", PD4: "bidirectional", PD1: "bidirectional", PC11: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", VSS_C11: "passive", PA10: "bidirectional", PC9: "bidirectional", VBAT: "power_in", PD14: "bidirectional", PD9: "bidirectional", PD6: "bidirectional", PD3: "bidirectional", PC6: "bidirectional", PC8: "bidirectional", PC7: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", VSS_E5: "passive", VSS_E7: "passive", VSS_E9: "passive", PB14: "bidirectional", PB13: "bidirectional", PH0: "bidirectional", VDDCAP_F2: "power_in", VSS_F3: "passive", PC13: "bidirectional", VDD_F6: "power_in", VDD_F8: "power_in", PB15: "bidirectional", VLXSMPS_F11: "power_in", VDDSMPS_F12: "power_in", VDDSMPS_F13: "power_in", PH3: "bidirectional", PH1: "bidirectional", PB8: "bidirectional", VSS_G5: "passive", VDD_G7: "power_in", VSS_G9: "passive", VLXSMPS_G11: "power_in", VSSSMPS_G12: "power_in", VSSSMPS_G13: "passive", PC1: "bidirectional", NRST: "input", PC0: "bidirectional", PB9: "bidirectional", VDD_H6: "power_in", VDD_H8: "power_in", PB12: "bidirectional", VFBSMPS: "input", PE3: "bidirectional", PE4: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSS_J5: "passive", VSS_J7: "passive", VSS_J9: "passive", VSS_J11: "passive", VDDCAP_J12: "power_in", VSSA: "power_in", VDDA: "power_in", VSS_K4: "passive", VSS_K6: "passive", VSSRF_K8: "power_in", VSSRF_K10: "passive", AT0: "no_connect", AT1: "no_connect", "VREF+": "input", PA1: "bidirectional", PA4: "bidirectional", PA9: "bidirectional", PC5: "bidirectional", PB10: "bidirectional", VSSRF_L7: "passive", VSSRF_L8: "passive", VSSRF_L9: "passive", VSSRF_L10: "passive", VSSRF_L11: "passive", PB1: "bidirectional", PB0: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PA8: "bidirectional", PC4: "bidirectional", PB11: "bidirectional", VSS_M7: "passive", VSSRF_M8: "passive", RF1: "bidirectional", VSSRF_M10: "passive", VSSRF_M11: "passive", VSSRF_M12: "passive", OSC_IN: "input", PA2: "bidirectional", PA5: "bidirectional", PA7: "bidirectional", PB2: "bidirectional", VDDCAP_N7: "power_in", VSSRF_N8: "passive", VSSRF_N11: "passive", VDDRF: "power_in", OSC_OUT: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB55VCQx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 128KB RAM, 64 MHz, 1.71-3.6V, 72 GPIO, WLCSP100
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB55VCYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*4.4x4.38mm*Layout10x10*P0.4mm*Offcenter*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb55vc.pdf
 * Keywords: Arm Cortex-M4 STM32WB STM32WBx5.
 * Default footprint: Package_CSP:ST_WLCSP-100_4.4x4.38mm_Layout10x10_P0.4mm_Offcenter.
 */
export class STM32WB55VCYx extends Component.withPins({
  "PA11": "A1",
  "PA12": "A2",
  "PA14": "A3",
  "PA15": "A4",
  "PA13": "A5",
  "PC10": "A6",
  "PD2": "A7",
  "PD7": "A8",
  "PB3": "A9",
  "VDD_A10": "A10",
  "VDD_B1": "B1",
  "VSS_B2": "B2",
  "VDDUSB": "B3",
  "PC9": "B4",
  "PA10": "B5",
  "PC11": "B6",
  "PD5": "B7",
  "PD12": "B8",
  "VSS_B9": "B9",
  "PE1": "B10",
  "PB13": "C1",
  "PD3": "C2",
  "PD1": "C3",
  "PD0": "C4",
  "PC12": "C5",
  "PD6": "C6",
  "PB4": "C7",
  "PE0": "C8",
  "PD13": "C9",
  "VBAT": "C10",
  "VDDSMPS": "D1",
  "PC6": "D2",
  "PD4": "D3",
  "PD8": "D4",
  "PD9": "D5",
  "PB5": "D6",
  "PB7": "D7",
  "PD14": "D8",
  "PC15": "D9",
  "PC14": "D10",
  "VLXSMPS": "E1",
  "PB14": "E2",
  "PC7": "E3",
  "PD10": "E4",
  "PD11": "E5",
  "PE2": "E6",
  "PD15": "E7",
  "PH3": "E8",
  "PH1": "E9",
  "PH0": "E10",
  "VSSSMPS": "F1",
  "VFBSMPS": "F2",
  "PB15": "F3",
  "PC8": "F4",
  "PB6": "F5",
  "PA2": "F6",
  "PB8": "F7",
  "PC0": "F8",
  "NRST": "F9",
  "PB9": "F10",
  "PE4": "G1",
  "PE3": "G2",
  "PB12": "G3",
  "PC4": "G4",
  "PC13": "G5",
  "PA1": "G6",
  "PA0": "G7",
  "PC1": "G8",
  "PC2": "G9",
  "PC3": "G10",
  "PB1": "H1",
  "PB0": "H2",
  "AT0": "H3",
  "AT1": "H4",
  "PC5": "H5",
  "PA7": "H6",
  "PA6": "H7",
  "VREF+": "H8",
  "VDDA": "H9",
  "VSSA": "H10",
  "OSC_IN": "J1",
  "OSC_OUT": "J2",
  "VDDRF": "J3",
  "VSSRF_J4": "J4",
  "VSS_J5": "J5",
  "PB11": "J6",
  "PA8": "J7",
  "PA3": "J8",
  "VSS_J9": "J9",
  "VDD_J10": "J10",
  "VSSRF_K1": "K1",
  "VSSRF_K2": "K2",
  "VSSRF_K3": "K3",
  "RF1": "K4",
  "VDD_K5": "K5",
  "PB10": "K6",
  "PB2": "K7",
  "PA9": "K8",
  "PA5": "K9",
  "PA4": "K10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA11: "bidirectional", PA12: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA13: "bidirectional", PC10: "bidirectional", PD2: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", VDD_A10: "power_in", VDD_B1: "power_in", VSS_B2: "power_in", VDDUSB: "power_in", PC9: "bidirectional", PA10: "bidirectional", PC11: "bidirectional", PD5: "bidirectional", PD12: "bidirectional", VSS_B9: "passive", PE1: "bidirectional", PB13: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PD0: "bidirectional", PC12: "bidirectional", PD6: "bidirectional", PB4: "bidirectional", PE0: "bidirectional", PD13: "bidirectional", VBAT: "power_in", VDDSMPS: "power_in", PC6: "bidirectional", PD4: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PB5: "bidirectional", PB7: "bidirectional", PD14: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", VLXSMPS: "power_in", PB14: "bidirectional", PC7: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PE2: "bidirectional", PD15: "bidirectional", PH3: "bidirectional", PH1: "bidirectional", PH0: "bidirectional", VSSSMPS: "power_in", VFBSMPS: "input", PB15: "bidirectional", PC8: "bidirectional", PB6: "bidirectional", PA2: "bidirectional", PB8: "bidirectional", PC0: "bidirectional", NRST: "input", PB9: "bidirectional", PE4: "bidirectional", PE3: "bidirectional", PB12: "bidirectional", PC4: "bidirectional", PC13: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", AT0: "no_connect", AT1: "no_connect", PC5: "bidirectional", PA7: "bidirectional", PA6: "bidirectional", "VREF+": "input", VDDA: "power_in", VSSA: "power_in", OSC_IN: "input", OSC_OUT: "input", VDDRF: "power_in", VSSRF_J4: "power_in", VSS_J5: "passive", PB11: "bidirectional", PA8: "bidirectional", PA3: "bidirectional", VSS_J9: "passive", VDD_J10: "power_in", VSSRF_K1: "passive", VSSRF_K2: "passive", VSSRF_K3: "passive", RF1: "bidirectional", VDD_K5: "power_in", PB10: "bidirectional", PB2: "bidirectional", PA9: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB55VCYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 512KB flash, 256KB RAM, 64 MHz, 1.71-3.6V, 72 GPIO, UFBGA129
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB55VEQx`. Reference prefix: `U`.
 * Footprint filters: ST*UFBGA*7x7mm*Layout13x13*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb55ve.pdf
 * Keywords: Arm Cortex-M4 STM32WB STM32WBx5.
 * Default footprint: Package_BGA:ST_UFBGA-129_7x7mm_Layout13x13_P0.5mm.
 */
export class STM32WB55VEQx extends Component.withPins({
  "PE1": "A1",
  "PB6": "A2",
  "PB5": "A3",
  "PD5": "A6",
  "PD10": "A7",
  "VDDCAP_A8": "A8",
  "PA13": "A11",
  "VDDUSB": "A12",
  "PA12": "A13",
  "PE2": "B1",
  "PE0": "B2",
  "PB4": "B3",
  "PD12": "B4",
  "PD11": "B5",
  "PD8": "B6",
  "PD2": "B7",
  "VSS_B8": "B8",
  "PC10": "B9",
  "PC12": "B10",
  "PD0": "B11",
  "VSS_B12": "B12",
  "PA11": "B13",
  "PD13": "C1",
  "PD15": "C2",
  "PB7": "C3",
  "PB3": "C4",
  "PD7": "C5",
  "PD4": "C6",
  "PD1": "C7",
  "PC11": "C8",
  "PA15": "C9",
  "PA14": "C10",
  "VSS_C11": "C11",
  "PA10": "C12",
  "PC9": "C13",
  "VBAT": "D2",
  "PD14": "D3",
  "PD9": "D4",
  "PD6": "D6",
  "PD3": "D8",
  "PC6": "D10",
  "PC8": "D11",
  "PC7": "D12",
  "PC15": "E2",
  "PC14": "E3",
  "VSS_E5": "E5",
  "VSS_E7": "E7",
  "VSS_E9": "E9",
  "PB14": "E11",
  "PB13": "E12",
  "PH0": "F1",
  "VDDCAP_F2": "F2",
  "VSS_F3": "F3",
  "PC13": "F4",
  "VDD_F6": "F6",
  "VDD_F8": "F8",
  "PB15": "F10",
  "VLXSMPS_F11": "F11",
  "VDDSMPS_F12": "F12",
  "VDDSMPS_F13": "F13",
  "PH3": "G1",
  "PH1": "G2",
  "PB8": "G3",
  "VSS_G5": "G5",
  "VDD_G7": "G7",
  "VSS_G9": "G9",
  "VLXSMPS_G11": "G11",
  "VSSSMPS_G12": "G12",
  "VSSSMPS_G13": "G13",
  "PC1": "H1",
  "NRST": "H2",
  "PC0": "H3",
  "PB9": "H4",
  "VDD_H6": "H6",
  "VDD_H8": "H8",
  "PB12": "H10",
  "VFBSMPS": "H11",
  "PE3": "H12",
  "PE4": "H13",
  "PC2": "J2",
  "PC3": "J3",
  "VSS_J5": "J5",
  "VSS_J7": "J7",
  "VSS_J9": "J9",
  "VSS_J11": "J11",
  "VDDCAP_J12": "J12",
  "VSSA": "K2",
  "VDDA": "K3",
  "VSS_K4": "K4",
  "VSS_K6": "K6",
  "VSSRF_K8": "K8",
  "VSSRF_K10": "K10",
  "AT0": "K11",
  "AT1": "K12",
  "VREF+": "L1",
  "PA1": "L2",
  "PA4": "L3",
  "PA9": "L4",
  "PC5": "L5",
  "PB10": "L6",
  "VSSRF_L7": "L7",
  "VSSRF_L8": "L8",
  "VSSRF_L9": "L9",
  "VSSRF_L10": "L10",
  "VSSRF_L11": "L11",
  "PB1": "L12",
  "PB0": "L13",
  "PA0": "M1",
  "PA3": "M2",
  "PA6": "M3",
  "PA8": "M4",
  "PC4": "M5",
  "PB11": "M6",
  "VSS_M7": "M7",
  "VSSRF_M8": "M8",
  "RF1": "M9",
  "VSSRF_M10": "M10",
  "VSSRF_M11": "M11",
  "VSSRF_M12": "M12",
  "OSC_IN": "M13",
  "PA2": "N1",
  "PA5": "N2",
  "PA7": "N3",
  "PB2": "N6",
  "VDDCAP_N7": "N7",
  "VSSRF_N8": "N8",
  "VSSRF_N11": "N11",
  "VDDRF": "N12",
  "OSC_OUT": "N13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE1: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PD5: "bidirectional", PD10: "bidirectional", VDDCAP_A8: "power_in", PA13: "bidirectional", VDDUSB: "power_in", PA12: "bidirectional", PE2: "bidirectional", PE0: "bidirectional", PB4: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD8: "bidirectional", PD2: "bidirectional", VSS_B8: "power_in", PC10: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", VSS_B12: "passive", PA11: "bidirectional", PD13: "bidirectional", PD15: "bidirectional", PB7: "bidirectional", PB3: "bidirectional", PD7: "bidirectional", PD4: "bidirectional", PD1: "bidirectional", PC11: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", VSS_C11: "passive", PA10: "bidirectional", PC9: "bidirectional", VBAT: "power_in", PD14: "bidirectional", PD9: "bidirectional", PD6: "bidirectional", PD3: "bidirectional", PC6: "bidirectional", PC8: "bidirectional", PC7: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", VSS_E5: "passive", VSS_E7: "passive", VSS_E9: "passive", PB14: "bidirectional", PB13: "bidirectional", PH0: "bidirectional", VDDCAP_F2: "power_in", VSS_F3: "passive", PC13: "bidirectional", VDD_F6: "power_in", VDD_F8: "power_in", PB15: "bidirectional", VLXSMPS_F11: "power_in", VDDSMPS_F12: "power_in", VDDSMPS_F13: "power_in", PH3: "bidirectional", PH1: "bidirectional", PB8: "bidirectional", VSS_G5: "passive", VDD_G7: "power_in", VSS_G9: "passive", VLXSMPS_G11: "power_in", VSSSMPS_G12: "power_in", VSSSMPS_G13: "passive", PC1: "bidirectional", NRST: "input", PC0: "bidirectional", PB9: "bidirectional", VDD_H6: "power_in", VDD_H8: "power_in", PB12: "bidirectional", VFBSMPS: "input", PE3: "bidirectional", PE4: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSS_J5: "passive", VSS_J7: "passive", VSS_J9: "passive", VSS_J11: "passive", VDDCAP_J12: "power_in", VSSA: "power_in", VDDA: "power_in", VSS_K4: "passive", VSS_K6: "passive", VSSRF_K8: "power_in", VSSRF_K10: "passive", AT0: "no_connect", AT1: "no_connect", "VREF+": "input", PA1: "bidirectional", PA4: "bidirectional", PA9: "bidirectional", PC5: "bidirectional", PB10: "bidirectional", VSSRF_L7: "passive", VSSRF_L8: "passive", VSSRF_L9: "passive", VSSRF_L10: "passive", VSSRF_L11: "passive", PB1: "bidirectional", PB0: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PA8: "bidirectional", PC4: "bidirectional", PB11: "bidirectional", VSS_M7: "passive", VSSRF_M8: "passive", RF1: "bidirectional", VSSRF_M10: "passive", VSSRF_M11: "passive", VSSRF_M12: "passive", OSC_IN: "input", PA2: "bidirectional", PA5: "bidirectional", PA7: "bidirectional", PB2: "bidirectional", VDDCAP_N7: "power_in", VSSRF_N8: "passive", VSSRF_N11: "passive", VDDRF: "power_in", OSC_OUT: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB55VEQx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 512KB flash, 256KB RAM, 64 MHz, 1.71-3.6V, 72 GPIO, WLCSP100
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB55VEYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*4.4x4.38mm*Layout10x10*P0.4mm*Offcenter*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb55ve.pdf
 * Keywords: Arm Cortex-M4 STM32WB STM32WBx5.
 * Default footprint: Package_CSP:ST_WLCSP-100_4.4x4.38mm_Layout10x10_P0.4mm_Offcenter.
 */
export class STM32WB55VEYx extends Component.withPins({
  "PA11": "A1",
  "PA12": "A2",
  "PA14": "A3",
  "PA15": "A4",
  "PA13": "A5",
  "PC10": "A6",
  "PD2": "A7",
  "PD7": "A8",
  "PB3": "A9",
  "VDD_A10": "A10",
  "VDD_B1": "B1",
  "VSS_B2": "B2",
  "VDDUSB": "B3",
  "PC9": "B4",
  "PA10": "B5",
  "PC11": "B6",
  "PD5": "B7",
  "PD12": "B8",
  "VSS_B9": "B9",
  "PE1": "B10",
  "PB13": "C1",
  "PD3": "C2",
  "PD1": "C3",
  "PD0": "C4",
  "PC12": "C5",
  "PD6": "C6",
  "PB4": "C7",
  "PE0": "C8",
  "PD13": "C9",
  "VBAT": "C10",
  "VDDSMPS": "D1",
  "PC6": "D2",
  "PD4": "D3",
  "PD8": "D4",
  "PD9": "D5",
  "PB5": "D6",
  "PB7": "D7",
  "PD14": "D8",
  "PC15": "D9",
  "PC14": "D10",
  "VLXSMPS": "E1",
  "PB14": "E2",
  "PC7": "E3",
  "PD10": "E4",
  "PD11": "E5",
  "PE2": "E6",
  "PD15": "E7",
  "PH3": "E8",
  "PH1": "E9",
  "PH0": "E10",
  "VSSSMPS": "F1",
  "VFBSMPS": "F2",
  "PB15": "F3",
  "PC8": "F4",
  "PB6": "F5",
  "PA2": "F6",
  "PB8": "F7",
  "PC0": "F8",
  "NRST": "F9",
  "PB9": "F10",
  "PE4": "G1",
  "PE3": "G2",
  "PB12": "G3",
  "PC4": "G4",
  "PC13": "G5",
  "PA1": "G6",
  "PA0": "G7",
  "PC1": "G8",
  "PC2": "G9",
  "PC3": "G10",
  "PB1": "H1",
  "PB0": "H2",
  "AT0": "H3",
  "AT1": "H4",
  "PC5": "H5",
  "PA7": "H6",
  "PA6": "H7",
  "VREF+": "H8",
  "VDDA": "H9",
  "VSSA": "H10",
  "OSC_IN": "J1",
  "OSC_OUT": "J2",
  "VDDRF": "J3",
  "VSSRF_J4": "J4",
  "VSS_J5": "J5",
  "PB11": "J6",
  "PA8": "J7",
  "PA3": "J8",
  "VSS_J9": "J9",
  "VDD_J10": "J10",
  "VSSRF_K1": "K1",
  "VSSRF_K2": "K2",
  "VSSRF_K3": "K3",
  "RF1": "K4",
  "VDD_K5": "K5",
  "PB10": "K6",
  "PB2": "K7",
  "PA9": "K8",
  "PA5": "K9",
  "PA4": "K10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA11: "bidirectional", PA12: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA13: "bidirectional", PC10: "bidirectional", PD2: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", VDD_A10: "power_in", VDD_B1: "power_in", VSS_B2: "power_in", VDDUSB: "power_in", PC9: "bidirectional", PA10: "bidirectional", PC11: "bidirectional", PD5: "bidirectional", PD12: "bidirectional", VSS_B9: "passive", PE1: "bidirectional", PB13: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PD0: "bidirectional", PC12: "bidirectional", PD6: "bidirectional", PB4: "bidirectional", PE0: "bidirectional", PD13: "bidirectional", VBAT: "power_in", VDDSMPS: "power_in", PC6: "bidirectional", PD4: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PB5: "bidirectional", PB7: "bidirectional", PD14: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", VLXSMPS: "power_in", PB14: "bidirectional", PC7: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PE2: "bidirectional", PD15: "bidirectional", PH3: "bidirectional", PH1: "bidirectional", PH0: "bidirectional", VSSSMPS: "power_in", VFBSMPS: "input", PB15: "bidirectional", PC8: "bidirectional", PB6: "bidirectional", PA2: "bidirectional", PB8: "bidirectional", PC0: "bidirectional", NRST: "input", PB9: "bidirectional", PE4: "bidirectional", PE3: "bidirectional", PB12: "bidirectional", PC4: "bidirectional", PC13: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", AT0: "no_connect", AT1: "no_connect", PC5: "bidirectional", PA7: "bidirectional", PA6: "bidirectional", "VREF+": "input", VDDA: "power_in", VSSA: "power_in", OSC_IN: "input", OSC_OUT: "input", VDDRF: "power_in", VSSRF_J4: "power_in", VSS_J5: "passive", PB11: "bidirectional", PA8: "bidirectional", PA3: "bidirectional", VSS_J9: "passive", VDD_J10: "power_in", VSSRF_K1: "passive", VSSRF_K2: "passive", VSSRF_K3: "passive", RF1: "bidirectional", VDD_K5: "power_in", PB10: "bidirectional", PB2: "bidirectional", PA9: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB55VEYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 1024KB flash, 256KB RAM, 64 MHz, 1.71-3.6V, 72 GPIO, UFBGA129
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB55VGQx`. Reference prefix: `U`.
 * Footprint filters: ST*UFBGA*7x7mm*Layout13x13*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb55vg.pdf
 * Keywords: Arm Cortex-M4 STM32WB STM32WBx5.
 * Default footprint: Package_BGA:ST_UFBGA-129_7x7mm_Layout13x13_P0.5mm.
 */
export class STM32WB55VGQx extends Component.withPins({
  "PE1": "A1",
  "PB6": "A2",
  "PB5": "A3",
  "PD5": "A6",
  "PD10": "A7",
  "VDDCAP_A8": "A8",
  "PA13": "A11",
  "VDDUSB": "A12",
  "PA12": "A13",
  "PE2": "B1",
  "PE0": "B2",
  "PB4": "B3",
  "PD12": "B4",
  "PD11": "B5",
  "PD8": "B6",
  "PD2": "B7",
  "VSS_B8": "B8",
  "PC10": "B9",
  "PC12": "B10",
  "PD0": "B11",
  "VSS_B12": "B12",
  "PA11": "B13",
  "PD13": "C1",
  "PD15": "C2",
  "PB7": "C3",
  "PB3": "C4",
  "PD7": "C5",
  "PD4": "C6",
  "PD1": "C7",
  "PC11": "C8",
  "PA15": "C9",
  "PA14": "C10",
  "VSS_C11": "C11",
  "PA10": "C12",
  "PC9": "C13",
  "VBAT": "D2",
  "PD14": "D3",
  "PD9": "D4",
  "PD6": "D6",
  "PD3": "D8",
  "PC6": "D10",
  "PC8": "D11",
  "PC7": "D12",
  "PC15": "E2",
  "PC14": "E3",
  "VSS_E5": "E5",
  "VSS_E7": "E7",
  "VSS_E9": "E9",
  "PB14": "E11",
  "PB13": "E12",
  "PH0": "F1",
  "VDDCAP_F2": "F2",
  "VSS_F3": "F3",
  "PC13": "F4",
  "VDD_F6": "F6",
  "VDD_F8": "F8",
  "PB15": "F10",
  "VLXSMPS_F11": "F11",
  "VDDSMPS_F12": "F12",
  "VDDSMPS_F13": "F13",
  "PH3": "G1",
  "PH1": "G2",
  "PB8": "G3",
  "VSS_G5": "G5",
  "VDD_G7": "G7",
  "VSS_G9": "G9",
  "VLXSMPS_G11": "G11",
  "VSSSMPS_G12": "G12",
  "VSSSMPS_G13": "G13",
  "PC1": "H1",
  "NRST": "H2",
  "PC0": "H3",
  "PB9": "H4",
  "VDD_H6": "H6",
  "VDD_H8": "H8",
  "PB12": "H10",
  "VFBSMPS": "H11",
  "PE3": "H12",
  "PE4": "H13",
  "PC2": "J2",
  "PC3": "J3",
  "VSS_J5": "J5",
  "VSS_J7": "J7",
  "VSS_J9": "J9",
  "VSS_J11": "J11",
  "VDDCAP_J12": "J12",
  "VSSA": "K2",
  "VDDA": "K3",
  "VSS_K4": "K4",
  "VSS_K6": "K6",
  "VSSRF_K8": "K8",
  "VSSRF_K10": "K10",
  "AT0": "K11",
  "AT1": "K12",
  "VREF+": "L1",
  "PA1": "L2",
  "PA4": "L3",
  "PA9": "L4",
  "PC5": "L5",
  "PB10": "L6",
  "VSSRF_L7": "L7",
  "VSSRF_L8": "L8",
  "VSSRF_L9": "L9",
  "VSSRF_L10": "L10",
  "VSSRF_L11": "L11",
  "PB1": "L12",
  "PB0": "L13",
  "PA0": "M1",
  "PA3": "M2",
  "PA6": "M3",
  "PA8": "M4",
  "PC4": "M5",
  "PB11": "M6",
  "VSS_M7": "M7",
  "VSSRF_M8": "M8",
  "RF1": "M9",
  "VSSRF_M10": "M10",
  "VSSRF_M11": "M11",
  "VSSRF_M12": "M12",
  "OSC_IN": "M13",
  "PA2": "N1",
  "PA5": "N2",
  "PA7": "N3",
  "PB2": "N6",
  "VDDCAP_N7": "N7",
  "VSSRF_N8": "N8",
  "VSSRF_N11": "N11",
  "VDDRF": "N12",
  "OSC_OUT": "N13",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE1: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", PD5: "bidirectional", PD10: "bidirectional", VDDCAP_A8: "power_in", PA13: "bidirectional", VDDUSB: "power_in", PA12: "bidirectional", PE2: "bidirectional", PE0: "bidirectional", PB4: "bidirectional", PD12: "bidirectional", PD11: "bidirectional", PD8: "bidirectional", PD2: "bidirectional", VSS_B8: "power_in", PC10: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", VSS_B12: "passive", PA11: "bidirectional", PD13: "bidirectional", PD15: "bidirectional", PB7: "bidirectional", PB3: "bidirectional", PD7: "bidirectional", PD4: "bidirectional", PD1: "bidirectional", PC11: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", VSS_C11: "passive", PA10: "bidirectional", PC9: "bidirectional", VBAT: "power_in", PD14: "bidirectional", PD9: "bidirectional", PD6: "bidirectional", PD3: "bidirectional", PC6: "bidirectional", PC8: "bidirectional", PC7: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", VSS_E5: "passive", VSS_E7: "passive", VSS_E9: "passive", PB14: "bidirectional", PB13: "bidirectional", PH0: "bidirectional", VDDCAP_F2: "power_in", VSS_F3: "passive", PC13: "bidirectional", VDD_F6: "power_in", VDD_F8: "power_in", PB15: "bidirectional", VLXSMPS_F11: "power_in", VDDSMPS_F12: "power_in", VDDSMPS_F13: "power_in", PH3: "bidirectional", PH1: "bidirectional", PB8: "bidirectional", VSS_G5: "passive", VDD_G7: "power_in", VSS_G9: "passive", VLXSMPS_G11: "power_in", VSSSMPS_G12: "power_in", VSSSMPS_G13: "passive", PC1: "bidirectional", NRST: "input", PC0: "bidirectional", PB9: "bidirectional", VDD_H6: "power_in", VDD_H8: "power_in", PB12: "bidirectional", VFBSMPS: "input", PE3: "bidirectional", PE4: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", VSS_J5: "passive", VSS_J7: "passive", VSS_J9: "passive", VSS_J11: "passive", VDDCAP_J12: "power_in", VSSA: "power_in", VDDA: "power_in", VSS_K4: "passive", VSS_K6: "passive", VSSRF_K8: "power_in", VSSRF_K10: "passive", AT0: "no_connect", AT1: "no_connect", "VREF+": "input", PA1: "bidirectional", PA4: "bidirectional", PA9: "bidirectional", PC5: "bidirectional", PB10: "bidirectional", VSSRF_L7: "passive", VSSRF_L8: "passive", VSSRF_L9: "passive", VSSRF_L10: "passive", VSSRF_L11: "passive", PB1: "bidirectional", PB0: "bidirectional", PA0: "bidirectional", PA3: "bidirectional", PA6: "bidirectional", PA8: "bidirectional", PC4: "bidirectional", PB11: "bidirectional", VSS_M7: "passive", VSSRF_M8: "passive", RF1: "bidirectional", VSSRF_M10: "passive", VSSRF_M11: "passive", VSSRF_M12: "passive", OSC_IN: "input", PA2: "bidirectional", PA5: "bidirectional", PA7: "bidirectional", PB2: "bidirectional", VDDCAP_N7: "power_in", VSSRF_N8: "passive", VSSRF_N11: "passive", VDDRF: "power_in", OSC_OUT: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB55VGQx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 1024KB flash, 256KB RAM, 64 MHz, 1.71-3.6V, 72 GPIO, WLCSP100
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB55VGYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*4.4x4.38mm*Layout10x10*P0.4mm*Offcenter*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb55vg.pdf
 * Keywords: Arm Cortex-M4 STM32WB STM32WBx5.
 * Default footprint: Package_CSP:ST_WLCSP-100_4.4x4.38mm_Layout10x10_P0.4mm_Offcenter.
 */
export class STM32WB55VGYx extends Component.withPins({
  "PA11": "A1",
  "PA12": "A2",
  "PA14": "A3",
  "PA15": "A4",
  "PA13": "A5",
  "PC10": "A6",
  "PD2": "A7",
  "PD7": "A8",
  "PB3": "A9",
  "VDD_A10": "A10",
  "VDD_B1": "B1",
  "VSS_B2": "B2",
  "VDDUSB": "B3",
  "PC9": "B4",
  "PA10": "B5",
  "PC11": "B6",
  "PD5": "B7",
  "PD12": "B8",
  "VSS_B9": "B9",
  "PE1": "B10",
  "PB13": "C1",
  "PD3": "C2",
  "PD1": "C3",
  "PD0": "C4",
  "PC12": "C5",
  "PD6": "C6",
  "PB4": "C7",
  "PE0": "C8",
  "PD13": "C9",
  "VBAT": "C10",
  "VDDSMPS": "D1",
  "PC6": "D2",
  "PD4": "D3",
  "PD8": "D4",
  "PD9": "D5",
  "PB5": "D6",
  "PB7": "D7",
  "PD14": "D8",
  "PC15": "D9",
  "PC14": "D10",
  "VLXSMPS": "E1",
  "PB14": "E2",
  "PC7": "E3",
  "PD10": "E4",
  "PD11": "E5",
  "PE2": "E6",
  "PD15": "E7",
  "PH3": "E8",
  "PH1": "E9",
  "PH0": "E10",
  "VSSSMPS": "F1",
  "VFBSMPS": "F2",
  "PB15": "F3",
  "PC8": "F4",
  "PB6": "F5",
  "PA2": "F6",
  "PB8": "F7",
  "PC0": "F8",
  "NRST": "F9",
  "PB9": "F10",
  "PE4": "G1",
  "PE3": "G2",
  "PB12": "G3",
  "PC4": "G4",
  "PC13": "G5",
  "PA1": "G6",
  "PA0": "G7",
  "PC1": "G8",
  "PC2": "G9",
  "PC3": "G10",
  "PB1": "H1",
  "PB0": "H2",
  "AT0": "H3",
  "AT1": "H4",
  "PC5": "H5",
  "PA7": "H6",
  "PA6": "H7",
  "VREF+": "H8",
  "VDDA": "H9",
  "VSSA": "H10",
  "OSC_IN": "J1",
  "OSC_OUT": "J2",
  "VDDRF": "J3",
  "VSSRF_J4": "J4",
  "VSS_J5": "J5",
  "PB11": "J6",
  "PA8": "J7",
  "PA3": "J8",
  "VSS_J9": "J9",
  "VDD_J10": "J10",
  "VSSRF_K1": "K1",
  "VSSRF_K2": "K2",
  "VSSRF_K3": "K3",
  "RF1": "K4",
  "VDD_K5": "K5",
  "PB10": "K6",
  "PB2": "K7",
  "PA9": "K8",
  "PA5": "K9",
  "PA4": "K10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA11: "bidirectional", PA12: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA13: "bidirectional", PC10: "bidirectional", PD2: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", VDD_A10: "power_in", VDD_B1: "power_in", VSS_B2: "power_in", VDDUSB: "power_in", PC9: "bidirectional", PA10: "bidirectional", PC11: "bidirectional", PD5: "bidirectional", PD12: "bidirectional", VSS_B9: "passive", PE1: "bidirectional", PB13: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PD0: "bidirectional", PC12: "bidirectional", PD6: "bidirectional", PB4: "bidirectional", PE0: "bidirectional", PD13: "bidirectional", VBAT: "power_in", VDDSMPS: "power_in", PC6: "bidirectional", PD4: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PB5: "bidirectional", PB7: "bidirectional", PD14: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", VLXSMPS: "power_in", PB14: "bidirectional", PC7: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PE2: "bidirectional", PD15: "bidirectional", PH3: "bidirectional", PH1: "bidirectional", PH0: "bidirectional", VSSSMPS: "power_in", VFBSMPS: "input", PB15: "bidirectional", PC8: "bidirectional", PB6: "bidirectional", PA2: "bidirectional", PB8: "bidirectional", PC0: "bidirectional", NRST: "input", PB9: "bidirectional", PE4: "bidirectional", PE3: "bidirectional", PB12: "bidirectional", PC4: "bidirectional", PC13: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", AT0: "no_connect", AT1: "no_connect", PC5: "bidirectional", PA7: "bidirectional", PA6: "bidirectional", "VREF+": "input", VDDA: "power_in", VSSA: "power_in", OSC_IN: "input", OSC_OUT: "input", VDDRF: "power_in", VSSRF_J4: "power_in", VSS_J5: "passive", PB11: "bidirectional", PA8: "bidirectional", PA3: "bidirectional", VSS_J9: "passive", VDD_J10: "power_in", VSSRF_K1: "passive", VSSRF_K2: "passive", VSSRF_K3: "passive", RF1: "bidirectional", VDD_K5: "power_in", PB10: "bidirectional", PB2: "bidirectional", PA9: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB55VGYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 640KB flash, 256KB RAM, 64 MHz, 1.71-3.6V, 72 GPIO, WLCSP100
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WB55VYYx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*4.4x4.38mm*Layout10x10*P0.4mm*Offcenter*.
 * @see https://www.st.com/resource/en/datasheet/stm32wb55vy.pdf
 * Keywords: Arm Cortex-M4 STM32WB STM32WBx5.
 * Default footprint: Package_CSP:ST_WLCSP-100_4.4x4.38mm_Layout10x10_P0.4mm_Offcenter.
 */
export class STM32WB55VYYx extends Component.withPins({
  "PA11": "A1",
  "PA12": "A2",
  "PA14": "A3",
  "PA15": "A4",
  "PA13": "A5",
  "PC10": "A6",
  "PD2": "A7",
  "PD7": "A8",
  "PB3": "A9",
  "VDD_A10": "A10",
  "VDD_B1": "B1",
  "VSS_B2": "B2",
  "VDDUSB": "B3",
  "PC9": "B4",
  "PA10": "B5",
  "PC11": "B6",
  "PD5": "B7",
  "PD12": "B8",
  "VSS_B9": "B9",
  "PE1": "B10",
  "PB13": "C1",
  "PD3": "C2",
  "PD1": "C3",
  "PD0": "C4",
  "PC12": "C5",
  "PD6": "C6",
  "PB4": "C7",
  "PE0": "C8",
  "PD13": "C9",
  "VBAT": "C10",
  "VDDSMPS": "D1",
  "PC6": "D2",
  "PD4": "D3",
  "PD8": "D4",
  "PD9": "D5",
  "PB5": "D6",
  "PB7": "D7",
  "PD14": "D8",
  "PC15": "D9",
  "PC14": "D10",
  "VLXSMPS": "E1",
  "PB14": "E2",
  "PC7": "E3",
  "PD10": "E4",
  "PD11": "E5",
  "PE2": "E6",
  "PD15": "E7",
  "PH3": "E8",
  "PH1": "E9",
  "PH0": "E10",
  "VSSSMPS": "F1",
  "VFBSMPS": "F2",
  "PB15": "F3",
  "PC8": "F4",
  "PB6": "F5",
  "PA2": "F6",
  "PB8": "F7",
  "PC0": "F8",
  "NRST": "F9",
  "PB9": "F10",
  "PE4": "G1",
  "PE3": "G2",
  "PB12": "G3",
  "PC4": "G4",
  "PC13": "G5",
  "PA1": "G6",
  "PA0": "G7",
  "PC1": "G8",
  "PC2": "G9",
  "PC3": "G10",
  "PB1": "H1",
  "PB0": "H2",
  "AT0": "H3",
  "AT1": "H4",
  "PC5": "H5",
  "PA7": "H6",
  "PA6": "H7",
  "VREF+": "H8",
  "VDDA": "H9",
  "VSSA": "H10",
  "OSC_IN": "J1",
  "OSC_OUT": "J2",
  "VDDRF": "J3",
  "VSSRF_J4": "J4",
  "VSS_J5": "J5",
  "PB11": "J6",
  "PA8": "J7",
  "PA3": "J8",
  "VSS_J9": "J9",
  "VDD_J10": "J10",
  "VSSRF_K1": "K1",
  "VSSRF_K2": "K2",
  "VSSRF_K3": "K3",
  "RF1": "K4",
  "VDD_K5": "K5",
  "PB10": "K6",
  "PB2": "K7",
  "PA9": "K8",
  "PA5": "K9",
  "PA4": "K10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA11: "bidirectional", PA12: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA13: "bidirectional", PC10: "bidirectional", PD2: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", VDD_A10: "power_in", VDD_B1: "power_in", VSS_B2: "power_in", VDDUSB: "power_in", PC9: "bidirectional", PA10: "bidirectional", PC11: "bidirectional", PD5: "bidirectional", PD12: "bidirectional", VSS_B9: "passive", PE1: "bidirectional", PB13: "bidirectional", PD3: "bidirectional", PD1: "bidirectional", PD0: "bidirectional", PC12: "bidirectional", PD6: "bidirectional", PB4: "bidirectional", PE0: "bidirectional", PD13: "bidirectional", VBAT: "power_in", VDDSMPS: "power_in", PC6: "bidirectional", PD4: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PB5: "bidirectional", PB7: "bidirectional", PD14: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", VLXSMPS: "power_in", PB14: "bidirectional", PC7: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PE2: "bidirectional", PD15: "bidirectional", PH3: "bidirectional", PH1: "bidirectional", PH0: "bidirectional", VSSSMPS: "power_in", VFBSMPS: "input", PB15: "bidirectional", PC8: "bidirectional", PB6: "bidirectional", PA2: "bidirectional", PB8: "bidirectional", PC0: "bidirectional", NRST: "input", PB9: "bidirectional", PE4: "bidirectional", PE3: "bidirectional", PB12: "bidirectional", PC4: "bidirectional", PC13: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", AT0: "no_connect", AT1: "no_connect", PC5: "bidirectional", PA7: "bidirectional", PA6: "bidirectional", "VREF+": "input", VDDA: "power_in", VSSA: "power_in", OSC_IN: "input", OSC_OUT: "input", VDDRF: "power_in", VSSRF_J4: "power_in", VSS_J5: "passive", PB11: "bidirectional", PA8: "bidirectional", PA3: "bidirectional", VSS_J9: "passive", VDD_J10: "power_in", VSSRF_K1: "passive", VSSRF_K2: "passive", VSSRF_K3: "passive", RF1: "bidirectional", VDD_K5: "power_in", PB10: "bidirectional", PB2: "bidirectional", PA9: "bidirectional", PA5: "bidirectional", PA4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WB55VYYx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M33 MCU, 512KB flash, 96KB RAM, 100 MHz, 1.71-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WBA52CEUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wba52ce.pdf
 * Keywords: Arm Cortex-M33 STM32WBA STM32WBAx2.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WBA52CEUx extends Component.withPins({
  "PB12": "1",
  "PB11": "2",
  "PA8": "3",
  "PA7": "4",
  "PA6": "5",
  "VDDA": "6",
  "PA5": "7",
  "PA3": "8",
  "PB10": "9",
  "PA2": "10",
  "VDD_11": "11",
  "PA1": "12",
  "PA0": "13",
  "PB9": "14",
  "PB8": "15",
  "PC15": "16",
  "PC14": "17",
  "PC13": "18",
  "PB7": "19",
  "PB6": "20",
  "PB5": "21",
  "VDD_22": "22",
  "PB4": "23",
  "PB3": "24",
  "PA15": "25",
  "PA14": "26",
  "PA13": "27",
  "PA12": "28",
  "PA11": "29",
  "PB2": "30",
  "PB1": "31",
  "PB0": "32",
  "PB15": "33",
  "PH3": "34",
  "VDD_35": "35",
  "NRST": "36",
  "RF": "37",
  "VDDHPA": "38",
  "VDDRF": "39",
  "OSC_OUT": "40",
  "OSC_IN": "41",
  "VDDRFPA": "42",
  "VDD_43": "43",
  "VCAP": "44",
  "PA10": "45",
  "PA9": "46",
  "PB14": "47",
  "PB13": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB12: "bidirectional", PB11: "bidirectional", PA8: "bidirectional", PA7: "bidirectional", PA6: "bidirectional", VDDA: "power_in", PA5: "bidirectional", PA3: "bidirectional", PB10: "bidirectional", PA2: "bidirectional", VDD_11: "power_in", PA1: "bidirectional", PA0: "bidirectional", PB9: "bidirectional", PB8: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", PC13: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", VDD_22: "power_in", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PA11: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PB15: "bidirectional", PH3: "bidirectional", VDD_35: "power_in", NRST: "input", RF: "bidirectional", VDDHPA: "power_in", VDDRF: "power_in", OSC_OUT: "input", OSC_IN: "input", VDDRFPA: "power_in", VDD_43: "power_in", VCAP: "power_out", PA10: "bidirectional", PA9: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WBA52CEUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M33 MCU, 1024KB flash, 128KB RAM, 100 MHz, 1.71-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WBA52CGUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wba52cg.pdf
 * Keywords: Arm Cortex-M33 STM32WBA STM32WBAx2.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WBA52CGUx extends Component.withPins({
  "PB12": "1",
  "PB11": "2",
  "PA8": "3",
  "PA7": "4",
  "PA6": "5",
  "VDDA": "6",
  "PA5": "7",
  "PA3": "8",
  "PB10": "9",
  "PA2": "10",
  "VDD_11": "11",
  "PA1": "12",
  "PA0": "13",
  "PB9": "14",
  "PB8": "15",
  "PC15": "16",
  "PC14": "17",
  "PC13": "18",
  "PB7": "19",
  "PB6": "20",
  "PB5": "21",
  "VDD_22": "22",
  "PB4": "23",
  "PB3": "24",
  "PA15": "25",
  "PA14": "26",
  "PA13": "27",
  "PA12": "28",
  "PA11": "29",
  "PB2": "30",
  "PB1": "31",
  "PB0": "32",
  "PB15": "33",
  "PH3": "34",
  "VDD_35": "35",
  "NRST": "36",
  "RF": "37",
  "VDDHPA": "38",
  "VDDRF": "39",
  "OSC_OUT": "40",
  "OSC_IN": "41",
  "VDDRFPA": "42",
  "VDD_43": "43",
  "VCAP": "44",
  "PA10": "45",
  "PA9": "46",
  "PB14": "47",
  "PB13": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB12: "bidirectional", PB11: "bidirectional", PA8: "bidirectional", PA7: "bidirectional", PA6: "bidirectional", VDDA: "power_in", PA5: "bidirectional", PA3: "bidirectional", PB10: "bidirectional", PA2: "bidirectional", VDD_11: "power_in", PA1: "bidirectional", PA0: "bidirectional", PB9: "bidirectional", PB8: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", PC13: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", VDD_22: "power_in", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PA11: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PB15: "bidirectional", PH3: "bidirectional", VDD_35: "power_in", NRST: "input", RF: "bidirectional", VDDHPA: "power_in", VDDRF: "power_in", OSC_OUT: "input", OSC_IN: "input", VDDRFPA: "power_in", VDD_43: "power_in", VCAP: "power_out", PA10: "bidirectional", PA9: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WBA52CGUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M33 MCU, 512KB flash, 96KB RAM, 100 MHz, 1.71-3.6V, 22 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WBA52KEUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wba52ke.pdf
 * Keywords: Arm Cortex-M33 STM32WBA STM32WBAx2.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32WBA52KEUx extends Component.withPins({
  "PB12": "1",
  "PA8": "2",
  "PA7": "3",
  "PA6": "4",
  "VDDA": "5",
  "PA5": "6",
  "PA2": "7",
  "PA1": "8",
  "PA0": "9",
  "PB9": "10",
  "PB8": "11",
  "PC15": "12",
  "PC14": "13",
  "VDD_14": "14",
  "PB4": "15",
  "PB3": "16",
  "PA15": "17",
  "PA14": "18",
  "PA13": "19",
  "PA12": "20",
  "PB15": "21",
  "PH3": "22",
  "VDD_23": "23",
  "NRST": "24",
  "RF": "25",
  "VDDHPA": "26",
  "VDDRF": "27",
  "OSC_OUT": "28",
  "OSC_IN": "29",
  "VDDRFPA": "30",
  "VDD_31": "31",
  "VCAP": "32",
  "VSS": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB12: "bidirectional", PA8: "bidirectional", PA7: "bidirectional", PA6: "bidirectional", VDDA: "power_in", PA5: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", PB9: "bidirectional", PB8: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", VDD_14: "power_in", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PB15: "bidirectional", PH3: "bidirectional", VDD_23: "power_in", NRST: "input", RF: "bidirectional", VDDHPA: "power_in", VDDRF: "power_in", OSC_OUT: "input", OSC_IN: "input", VDDRFPA: "power_in", VDD_31: "power_in", VCAP: "power_out", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WBA52KEUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M33 MCU, 1024KB flash, 128KB RAM, 100 MHz, 1.71-3.6V, 22 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WBA52KGUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wba52kg.pdf
 * Keywords: Arm Cortex-M33 STM32WBA STM32WBAx2.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32WBA52KGUx extends Component.withPins({
  "PB12": "1",
  "PA8": "2",
  "PA7": "3",
  "PA6": "4",
  "VDDA": "5",
  "PA5": "6",
  "PA2": "7",
  "PA1": "8",
  "PA0": "9",
  "PB9": "10",
  "PB8": "11",
  "PC15": "12",
  "PC14": "13",
  "VDD_14": "14",
  "PB4": "15",
  "PB3": "16",
  "PA15": "17",
  "PA14": "18",
  "PA13": "19",
  "PA12": "20",
  "PB15": "21",
  "PH3": "22",
  "VDD_23": "23",
  "NRST": "24",
  "RF": "25",
  "VDDHPA": "26",
  "VDDRF": "27",
  "OSC_OUT": "28",
  "OSC_IN": "29",
  "VDDRFPA": "30",
  "VDD_31": "31",
  "VCAP": "32",
  "VSS": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB12: "bidirectional", PA8: "bidirectional", PA7: "bidirectional", PA6: "bidirectional", VDDA: "power_in", PA5: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", PB9: "bidirectional", PB8: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", VDD_14: "power_in", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PB15: "bidirectional", PH3: "bidirectional", VDD_23: "power_in", NRST: "input", RF: "bidirectional", VDDHPA: "power_in", VDDRF: "power_in", OSC_OUT: "input", OSC_IN: "input", VDDRFPA: "power_in", VDD_31: "power_in", VCAP: "power_out", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WBA52KGUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M33 MCU, 512KB flash, 96KB RAM, 100 MHz, 1.71-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WBA54CEUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wba54ce.pdf
 * Keywords: Arm Cortex-M33 STM32WBA STM32WBAx4.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WBA54CEUx extends Component.withPins({
  "PB12": "1",
  "PB11": "2",
  "PA8": "3",
  "PA7": "4",
  "PA6": "5",
  "VDDA": "6",
  "PA5": "7",
  "PA3": "8",
  "PB10": "9",
  "PA2": "10",
  "VDD_11": "11",
  "PA1": "12",
  "PA0": "13",
  "PB9": "14",
  "PB8": "15",
  "PC15": "16",
  "PC14": "17",
  "PC13": "18",
  "PB7": "19",
  "PB6": "20",
  "PB5": "21",
  "VDD_22": "22",
  "PB4": "23",
  "PB3": "24",
  "PA15": "25",
  "PA14": "26",
  "PA13": "27",
  "PA12": "28",
  "PA11": "29",
  "PB2": "30",
  "PB1": "31",
  "PB0": "32",
  "PB15": "33",
  "PH3": "34",
  "VDD_35": "35",
  "NRST": "36",
  "RF": "37",
  "VDDHPA": "38",
  "VDDRF": "39",
  "OSC_OUT": "40",
  "OSC_IN": "41",
  "VDDRFPA": "42",
  "VDD_43": "43",
  "VCAP": "44",
  "PA10": "45",
  "PA9": "46",
  "PB14": "47",
  "PB13": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB12: "bidirectional", PB11: "bidirectional", PA8: "bidirectional", PA7: "bidirectional", PA6: "bidirectional", VDDA: "power_in", PA5: "bidirectional", PA3: "bidirectional", PB10: "bidirectional", PA2: "bidirectional", VDD_11: "power_in", PA1: "bidirectional", PA0: "bidirectional", PB9: "bidirectional", PB8: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", PC13: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", VDD_22: "power_in", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PA11: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PB15: "bidirectional", PH3: "bidirectional", VDD_35: "power_in", NRST: "input", RF: "bidirectional", VDDHPA: "power_in", VDDRF: "power_in", OSC_OUT: "input", OSC_IN: "input", VDDRFPA: "power_in", VDD_43: "power_in", VCAP: "power_out", PA10: "bidirectional", PA9: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WBA54CEUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M33 MCU, 1024KB flash, 128KB RAM, 100 MHz, 1.71-3.6V, 37 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WBA54CGUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wba54cg.pdf
 * Keywords: Arm Cortex-M33 STM32WBA STM32WBAx4.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WBA54CGUx extends Component.withPins({
  "PB12": "1",
  "PB11": "2",
  "PA8": "3",
  "PA7": "4",
  "PA6": "5",
  "VDDA": "6",
  "PA5": "7",
  "PA3": "8",
  "PB10": "9",
  "PA2": "10",
  "VDD_11": "11",
  "PA1": "12",
  "PA0": "13",
  "PB9": "14",
  "PB8": "15",
  "PC15": "16",
  "PC14": "17",
  "PC13": "18",
  "PB7": "19",
  "PB6": "20",
  "PB5": "21",
  "VDD_22": "22",
  "PB4": "23",
  "PB3": "24",
  "PA15": "25",
  "PA14": "26",
  "PA13": "27",
  "PA12": "28",
  "PA11": "29",
  "PB2": "30",
  "PB1": "31",
  "PB0": "32",
  "PB15": "33",
  "PH3": "34",
  "VDD_35": "35",
  "NRST": "36",
  "RF": "37",
  "VDDHPA": "38",
  "VDDRF": "39",
  "OSC_OUT": "40",
  "OSC_IN": "41",
  "VDDRFPA": "42",
  "VDD_43": "43",
  "VCAP": "44",
  "PA10": "45",
  "PA9": "46",
  "PB14": "47",
  "PB13": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB12: "bidirectional", PB11: "bidirectional", PA8: "bidirectional", PA7: "bidirectional", PA6: "bidirectional", VDDA: "power_in", PA5: "bidirectional", PA3: "bidirectional", PB10: "bidirectional", PA2: "bidirectional", VDD_11: "power_in", PA1: "bidirectional", PA0: "bidirectional", PB9: "bidirectional", PB8: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", PC13: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", VDD_22: "power_in", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PA11: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PB15: "bidirectional", PH3: "bidirectional", VDD_35: "power_in", NRST: "input", RF: "bidirectional", VDDHPA: "power_in", VDDRF: "power_in", OSC_OUT: "input", OSC_IN: "input", VDDRFPA: "power_in", VDD_43: "power_in", VCAP: "power_out", PA10: "bidirectional", PA9: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WBA54CGUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M33 MCU, 512KB flash, 96KB RAM, 100 MHz, 1.71-3.6V, 22 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WBA54KEUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wba54ke.pdf
 * Keywords: Arm Cortex-M33 STM32WBA STM32WBAx4.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32WBA54KEUx extends Component.withPins({
  "PB12": "1",
  "PA8": "2",
  "PA7": "3",
  "PA6": "4",
  "VDDA": "5",
  "PA5": "6",
  "PA2": "7",
  "PA1": "8",
  "PA0": "9",
  "PB9": "10",
  "PB8": "11",
  "PC15": "12",
  "PC14": "13",
  "VDD_14": "14",
  "PB4": "15",
  "PB3": "16",
  "PA15": "17",
  "PA14": "18",
  "PA13": "19",
  "PA12": "20",
  "PB15": "21",
  "PH3": "22",
  "VDD_23": "23",
  "NRST": "24",
  "RF": "25",
  "VDDHPA": "26",
  "VDDRF": "27",
  "OSC_OUT": "28",
  "OSC_IN": "29",
  "VDDRFPA": "30",
  "VDD_31": "31",
  "VCAP": "32",
  "VSS": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB12: "bidirectional", PA8: "bidirectional", PA7: "bidirectional", PA6: "bidirectional", VDDA: "power_in", PA5: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", PB9: "bidirectional", PB8: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", VDD_14: "power_in", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PB15: "bidirectional", PH3: "bidirectional", VDD_23: "power_in", NRST: "input", RF: "bidirectional", VDDHPA: "power_in", VDDRF: "power_in", OSC_OUT: "input", OSC_IN: "input", VDDRFPA: "power_in", VDD_31: "power_in", VCAP: "power_out", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WBA54KEUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M33 MCU, 1024KB flash, 128KB RAM, 100 MHz, 1.71-3.6V, 22 GPIO, UFQFPN32
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WBA54KGUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wba54kg.pdf
 * Keywords: Arm Cortex-M33 STM32WBA STM32WBAx4.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 */
export class STM32WBA54KGUx extends Component.withPins({
  "PB12": "1",
  "PA8": "2",
  "PA7": "3",
  "PA6": "4",
  "VDDA": "5",
  "PA5": "6",
  "PA2": "7",
  "PA1": "8",
  "PA0": "9",
  "PB9": "10",
  "PB8": "11",
  "PC15": "12",
  "PC14": "13",
  "VDD_14": "14",
  "PB4": "15",
  "PB3": "16",
  "PA15": "17",
  "PA14": "18",
  "PA13": "19",
  "PA12": "20",
  "PB15": "21",
  "PH3": "22",
  "VDD_23": "23",
  "NRST": "24",
  "RF": "25",
  "VDDHPA": "26",
  "VDDRF": "27",
  "OSC_OUT": "28",
  "OSC_IN": "29",
  "VDDRFPA": "30",
  "VDD_31": "31",
  "VCAP": "32",
  "VSS": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB12: "bidirectional", PA8: "bidirectional", PA7: "bidirectional", PA6: "bidirectional", VDDA: "power_in", PA5: "bidirectional", PA2: "bidirectional", PA1: "bidirectional", PA0: "bidirectional", PB9: "bidirectional", PB8: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", VDD_14: "power_in", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PB15: "bidirectional", PH3: "bidirectional", VDD_23: "power_in", NRST: "input", RF: "bidirectional", VDDHPA: "power_in", VDDRF: "power_in", OSC_OUT: "input", OSC_IN: "input", VDDRFPA: "power_in", VDD_31: "power_in", VCAP: "power_out", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WBA54KGUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M33 MCU, 512KB flash, 96KB RAM, 100 MHz, 1.71-3.6V, 33 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WBA55CEUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wba55ce.pdf
 * Keywords: Arm Cortex-M33 STM32WBA STM32WBAx5.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WBA55CEUx extends Component.withPins({
  "VSSSMPS": "1",
  "VDDSMPS": "2",
  "VLXSMPS": "3",
  "PB12": "4",
  "PA8": "5",
  "PA7": "6",
  "PA6": "7",
  "VDDA": "8",
  "PA5": "9",
  "PA2": "10",
  "VDD_11": "11",
  "PA1": "12",
  "PA0": "13",
  "PB9": "14",
  "PB8": "15",
  "PC15": "16",
  "PC14": "17",
  "PC13": "18",
  "PB7": "19",
  "PB6": "20",
  "PB5": "21",
  "VDD_22": "22",
  "PB4": "23",
  "PB3": "24",
  "PA15": "25",
  "PA14": "26",
  "PA13": "27",
  "PA12": "28",
  "PA11": "29",
  "PB2": "30",
  "PB1": "31",
  "PB0": "32",
  "PB15": "33",
  "PH3": "34",
  "VDD_35": "35",
  "NRST": "36",
  "RF": "37",
  "VDDHPA": "38",
  "VDDANA": "39",
  "VDDRF": "40",
  "OSC_OUT": "41",
  "OSC_IN": "42",
  "VDDRFPA": "43",
  "VDD_44": "44",
  "VDD11": "45",
  "PA10": "46",
  "PA9": "47",
  "PB14": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSSSMPS: "power_in", VDDSMPS: "power_in", VLXSMPS: "power_in", PB12: "bidirectional", PA8: "bidirectional", PA7: "bidirectional", PA6: "bidirectional", VDDA: "power_in", PA5: "bidirectional", PA2: "bidirectional", VDD_11: "power_in", PA1: "bidirectional", PA0: "bidirectional", PB9: "bidirectional", PB8: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", PC13: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", VDD_22: "power_in", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PA11: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PB15: "bidirectional", PH3: "bidirectional", VDD_35: "power_in", NRST: "input", RF: "bidirectional", VDDHPA: "power_in", VDDANA: "power_in", VDDRF: "power_in", OSC_OUT: "input", OSC_IN: "input", VDDRFPA: "power_in", VDD_44: "power_in", VDD11: "power_in", PA10: "bidirectional", PA9: "bidirectional", PB14: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WBA55CEUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M33 MCU, 1024KB flash, 128KB RAM, 100 MHz, 1.71-3.6V, 33 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WBA55CGUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wba55cg.pdf
 * Keywords: Arm Cortex-M33 STM32WBA STM32WBAx5.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WBA55CGUx extends Component.withPins({
  "VSSSMPS": "1",
  "VDDSMPS": "2",
  "VLXSMPS": "3",
  "PB12": "4",
  "PA8": "5",
  "PA7": "6",
  "PA6": "7",
  "VDDA": "8",
  "PA5": "9",
  "PA2": "10",
  "VDD_11": "11",
  "PA1": "12",
  "PA0": "13",
  "PB9": "14",
  "PB8": "15",
  "PC15": "16",
  "PC14": "17",
  "PC13": "18",
  "PB7": "19",
  "PB6": "20",
  "PB5": "21",
  "VDD_22": "22",
  "PB4": "23",
  "PB3": "24",
  "PA15": "25",
  "PA14": "26",
  "PA13": "27",
  "PA12": "28",
  "PA11": "29",
  "PB2": "30",
  "PB1": "31",
  "PB0": "32",
  "PB15": "33",
  "PH3": "34",
  "VDD_35": "35",
  "NRST": "36",
  "RF": "37",
  "VDDHPA": "38",
  "VDDANA": "39",
  "VDDRF": "40",
  "OSC_OUT": "41",
  "OSC_IN": "42",
  "VDDRFPA": "43",
  "VDD_44": "44",
  "VDD11": "45",
  "PA10": "46",
  "PA9": "47",
  "PB14": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSSSMPS: "power_in", VDDSMPS: "power_in", VLXSMPS: "power_in", PB12: "bidirectional", PA8: "bidirectional", PA7: "bidirectional", PA6: "bidirectional", VDDA: "power_in", PA5: "bidirectional", PA2: "bidirectional", VDD_11: "power_in", PA1: "bidirectional", PA0: "bidirectional", PB9: "bidirectional", PB8: "bidirectional", PC15: "bidirectional", PC14: "bidirectional", PC13: "bidirectional", PB7: "bidirectional", PB6: "bidirectional", PB5: "bidirectional", VDD_22: "power_in", PB4: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", PA11: "bidirectional", PB2: "bidirectional", PB1: "bidirectional", PB0: "bidirectional", PB15: "bidirectional", PH3: "bidirectional", VDD_35: "power_in", NRST: "input", RF: "bidirectional", VDDHPA: "power_in", VDDANA: "power_in", VDDRF: "power_in", OSC_OUT: "input", OSC_IN: "input", VDDRFPA: "power_in", VDD_44: "power_in", VDD11: "power_in", PA10: "bidirectional", PA9: "bidirectional", PB14: "bidirectional", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WBA55CGUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M33 MCU, 1024KB flash, 128KB RAM, 100 MHz, 1.71-3.6V, 20 GPIO, WLCSP41
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WBA55HGFx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*2.98x2.76mm*Layout13x7*P0.4mm*Stagger*.
 * @see https://www.st.com/resource/en/datasheet/stm32wba55hg.pdf
 * Keywords: STM32WBA STM32WBAx5.
 * Default footprint: Package_CSP:ST_WLCSP-41_2.98x2.76mm_Layout13x7_P0.4mm_Stagger.
 */
export class STM32WBA55HGFx extends Component.withPins({
  "VDDRF": "A6",
  "OSC_IN": "A8",
  "VDD_A10": "A10",
  "VSSSMPS": "A12",
  "VDDANA": "B5",
  "OSC_OUT": "B7",
  "VSS_B9": "B9",
  "VDD11": "B11",
  "VDDSMPS": "B13",
  "RF": "C2",
  "VDDHPA": "C4",
  "VDDRFPA": "C6",
  "PH3": "C8",
  "PB12": "C10",
  "VLXSMPS": "C12",
  "VSSRF_D1": "D1",
  "VSSRF_D3": "D3",
  "VSSRF_D5": "D5",
  "PA8": "D7",
  "PA6": "D9",
  "PA7": "D11",
  "VSSA": "D13",
  "NRST": "E2",
  "PB15": "E4",
  "PA12": "E6",
  "PA13": "E8",
  "PA1": "E10",
  "VDDA": "E12",
  "PA14": "F1",
  "PA15": "F3",
  "PB4": "F5",
  "PC15": "F7",
  "PB9": "F9",
  "PA2": "F11",
  "PA5": "F13",
  "PB3": "G2",
  "VDD_G4": "G4",
  "VSS_G6": "G6",
  "PC14": "G8",
  "PB8": "G10",
  "PA0": "G12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDRF: "power_in", OSC_IN: "input", VDD_A10: "power_in", VSSSMPS: "power_in", VDDANA: "power_in", OSC_OUT: "output", VSS_B9: "power_in", VDD11: "power_in", VDDSMPS: "power_in", RF: "bidirectional", VDDHPA: "power_in", VDDRFPA: "power_in", PH3: "bidirectional", PB12: "bidirectional", VLXSMPS: "power_in", VSSRF_D1: "power_in", VSSRF_D3: "power_in", VSSRF_D5: "power_in", PA8: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", VSSA: "power_in", NRST: "input", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA1: "bidirectional", VDDA: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB4: "bidirectional", PC15: "bidirectional", PB9: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB3: "bidirectional", VDD_G4: "power_in", VSS_G6: "power_in", PC14: "bidirectional", PB8: "bidirectional", PA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WBA55HGFx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M33 MCU, 512KB flash, 96KB RAM, 100 MHz, 1.71-3.6V, 20 GPIO, WLCSP41
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WBA55HEFx`. Reference prefix: `U`.
 * Footprint filters: ST*WLCSP*2.98x2.76mm*Layout13x7*P0.4mm*Stagger*.
 * @see https://www.st.com/resource/en/datasheet/stm32wba55he.pdf
 * Keywords: STM32WBA STM32WBAx5.
 * Default footprint: Package_CSP:ST_WLCSP-41_2.98x2.76mm_Layout13x7_P0.4mm_Stagger.
 */
export class STM32WBA55HEFx extends Component.withPins({
  "VDDRF": "A6",
  "OSC_IN": "A8",
  "VDD_A10": "A10",
  "VSSSMPS": "A12",
  "VDDANA": "B5",
  "OSC_OUT": "B7",
  "VSS_B9": "B9",
  "VDD11": "B11",
  "VDDSMPS": "B13",
  "RF": "C2",
  "VDDHPA": "C4",
  "VDDRFPA": "C6",
  "PH3": "C8",
  "PB12": "C10",
  "VLXSMPS": "C12",
  "VSSRF_D1": "D1",
  "VSSRF_D3": "D3",
  "VSSRF_D5": "D5",
  "PA8": "D7",
  "PA6": "D9",
  "PA7": "D11",
  "VSSA": "D13",
  "NRST": "E2",
  "PB15": "E4",
  "PA12": "E6",
  "PA13": "E8",
  "PA1": "E10",
  "VDDA": "E12",
  "PA14": "F1",
  "PA15": "F3",
  "PB4": "F5",
  "PC15": "F7",
  "PB9": "F9",
  "PA2": "F11",
  "PA5": "F13",
  "PB3": "G2",
  "VDD_G4": "G4",
  "VSS_G6": "G6",
  "PC14": "G8",
  "PB8": "G10",
  "PA0": "G12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDRF: "power_in", OSC_IN: "input", VDD_A10: "power_in", VSSSMPS: "power_in", VDDANA: "power_in", OSC_OUT: "output", VSS_B9: "power_in", VDD11: "power_in", VDDSMPS: "power_in", RF: "bidirectional", VDDHPA: "power_in", VDDRFPA: "power_in", PH3: "bidirectional", PB12: "bidirectional", VLXSMPS: "power_in", VSSRF_D1: "power_in", VSSRF_D3: "power_in", VSSRF_D5: "power_in", PA8: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", VSSA: "power_in", NRST: "input", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA1: "bidirectional", VDDA: "power_in", PA14: "bidirectional", PA15: "bidirectional", PB4: "bidirectional", PC15: "bidirectional", PB9: "bidirectional", PA2: "bidirectional", PA5: "bidirectional", PB3: "bidirectional", VDD_G4: "power_in", VSS_G6: "power_in", PC14: "bidirectional", PB8: "bidirectional", PA0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WBA55HEFx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M33 MCU, 512KB flash, 96KB RAM, 100 MHz, 1.71-3.6V, 37 GPIO, UFBGA59
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WBA55UEIx`. Reference prefix: `U`.
 * Footprint filters: ST*UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wba55ue.pdf
 * Keywords: Arm Cortex-M33 STM32WBA STM32WBAx5.
 * Default footprint: Package_BGA:ST_UFBGA-59_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32WBA55UEIx extends Component.withPins({
  "VSSSMPS": "A1",
  "PB14": "A2",
  "PA10": "A3",
  "VDDRFPA": "A4",
  "OSC_OUT": "A5",
  "VDDRF": "A6",
  "VSSRF_A7": "A7",
  "RF": "A8",
  "VDDSMPS": "B1",
  "PB13": "B2",
  "PA9": "B3",
  "VDDHPA": "B4",
  "OSC_IN": "B5",
  "VDDANA": "B6",
  "VSSRF_B7": "B7",
  "NRST": "B8",
  "VLXSMPS": "C1",
  "PB12": "C2",
  "VDD11": "C3",
  "VDD_C6": "C6",
  "PH3": "C7",
  "PB15": "C8",
  "PA8": "D1",
  "PB11": "D2",
  "VSS_D4": "D4",
  "VDD_D5": "D5",
  "VSS_D6": "D6",
  "PB0": "D7",
  "PB1": "D8",
  "PA6": "E1",
  "PA7": "E2",
  "VSS_E3": "E3",
  "VDD_E4": "E4",
  "VSS_E5": "E5",
  "PB2": "E7",
  "PA11": "E8",
  "VDDA": "F1",
  "VSSA": "F2",
  "PA5": "F3",
  "VDD_F5": "F5",
  "PA14": "F6",
  "PA12": "F7",
  "PA13": "F8",
  "PA4": "G1",
  "PA3": "G2",
  "PA2": "G3",
  "PC15": "G4",
  "PC13": "G5",
  "PB6": "G6",
  "PB3": "G7",
  "PA15": "G8",
  "PA0": "H1",
  "PA1": "H2",
  "PB9": "H3",
  "PC14": "H4",
  "PB8": "H5",
  "PB7": "H6",
  "PB5": "H7",
  "PB4": "H8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSSSMPS: "power_in", PB14: "bidirectional", PA10: "bidirectional", VDDRFPA: "power_in", OSC_OUT: "input", VDDRF: "power_in", VSSRF_A7: "power_in", RF: "bidirectional", VDDSMPS: "power_in", PB13: "bidirectional", PA9: "bidirectional", VDDHPA: "power_in", OSC_IN: "input", VDDANA: "power_in", VSSRF_B7: "passive", NRST: "input", VLXSMPS: "power_in", PB12: "bidirectional", VDD11: "power_in", VDD_C6: "power_in", PH3: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PB11: "bidirectional", VSS_D4: "power_in", VDD_D5: "power_in", VSS_D6: "passive", PB0: "bidirectional", PB1: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", VSS_E3: "passive", VDD_E4: "power_in", VSS_E5: "passive", PB2: "bidirectional", PA11: "bidirectional", VDDA: "power_in", VSSA: "power_in", PA5: "bidirectional", VDD_F5: "power_in", PA14: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA4: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", PC15: "bidirectional", PC13: "bidirectional", PB6: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PB9: "bidirectional", PC14: "bidirectional", PB8: "bidirectional", PB7: "bidirectional", PB5: "bidirectional", PB4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WBA55UEIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M33 MCU, 1024KB flash, 128KB RAM, 100 MHz, 1.71-3.6V, 37 GPIO, UFBGA59
 *
 * KiCad symbol: `MCU_ST_STM32WB:STM32WBA55UGIx`. Reference prefix: `U`.
 * Footprint filters: ST*UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wba55ug.pdf
 * Keywords: Arm Cortex-M33 STM32WBA STM32WBAx5.
 * Default footprint: Package_BGA:ST_UFBGA-59_5x5mm_Layout8x8_P0.5mm.
 */
export class STM32WBA55UGIx extends Component.withPins({
  "VSSSMPS": "A1",
  "PB14": "A2",
  "PA10": "A3",
  "VDDRFPA": "A4",
  "OSC_OUT": "A5",
  "VDDRF": "A6",
  "VSSRF_A7": "A7",
  "RF": "A8",
  "VDDSMPS": "B1",
  "PB13": "B2",
  "PA9": "B3",
  "VDDHPA": "B4",
  "OSC_IN": "B5",
  "VDDANA": "B6",
  "VSSRF_B7": "B7",
  "NRST": "B8",
  "VLXSMPS": "C1",
  "PB12": "C2",
  "VDD11": "C3",
  "VDD_C6": "C6",
  "PH3": "C7",
  "PB15": "C8",
  "PA8": "D1",
  "PB11": "D2",
  "VSS_D4": "D4",
  "VDD_D5": "D5",
  "VSS_D6": "D6",
  "PB0": "D7",
  "PB1": "D8",
  "PA6": "E1",
  "PA7": "E2",
  "VSS_E3": "E3",
  "VDD_E4": "E4",
  "VSS_E5": "E5",
  "PB2": "E7",
  "PA11": "E8",
  "VDDA": "F1",
  "VSSA": "F2",
  "PA5": "F3",
  "VDD_F5": "F5",
  "PA14": "F6",
  "PA12": "F7",
  "PA13": "F8",
  "PA4": "G1",
  "PA3": "G2",
  "PA2": "G3",
  "PC15": "G4",
  "PC13": "G5",
  "PB6": "G6",
  "PB3": "G7",
  "PA15": "G8",
  "PA0": "H1",
  "PA1": "H2",
  "PB9": "H3",
  "PC14": "H4",
  "PB8": "H5",
  "PB7": "H6",
  "PB5": "H7",
  "PB4": "H8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSSSMPS: "power_in", PB14: "bidirectional", PA10: "bidirectional", VDDRFPA: "power_in", OSC_OUT: "input", VDDRF: "power_in", VSSRF_A7: "power_in", RF: "bidirectional", VDDSMPS: "power_in", PB13: "bidirectional", PA9: "bidirectional", VDDHPA: "power_in", OSC_IN: "input", VDDANA: "power_in", VSSRF_B7: "passive", NRST: "input", VLXSMPS: "power_in", PB12: "bidirectional", VDD11: "power_in", VDD_C6: "power_in", PH3: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PB11: "bidirectional", VSS_D4: "power_in", VDD_D5: "power_in", VSS_D6: "passive", PB0: "bidirectional", PB1: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", VSS_E3: "passive", VDD_E4: "power_in", VSS_E5: "passive", PB2: "bidirectional", PA11: "bidirectional", VDDA: "power_in", VSSA: "power_in", PA5: "bidirectional", VDD_F5: "power_in", PA14: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA4: "bidirectional", PA3: "bidirectional", PA2: "bidirectional", PC15: "bidirectional", PC13: "bidirectional", PB6: "bidirectional", PB3: "bidirectional", PA15: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PB9: "bidirectional", PC14: "bidirectional", PB8: "bidirectional", PB7: "bidirectional", PB5: "bidirectional", PB4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WB:STM32WBA55UGIx";
  override referencePrefix = "U";
}
