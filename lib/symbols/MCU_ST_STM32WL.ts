// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 64KB RAM, 48 MHz, 1.8-3.6V, 29 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WL:STM32WL54CCUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wl54cc.pdf
 * Keywords: Arm Cortex-M4 STM32WL STM32WL5x.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WL54CCUx extends Component.withPins({
  "PB3": "1",
  "PB4": "2",
  "PB5": "3",
  "PB6": "4",
  "PB7": "5",
  "PB8": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "VDD_11": "11",
  "PA4": "12",
  "PA5": "13",
  "PA6": "14",
  "PA7": "15",
  "PA8": "16",
  "PA9": "17",
  "NRST": "18",
  "PH3": "19",
  "RFI_P": "20",
  "RFI_N": "21",
  "RFO_LP": "22",
  "RFO_HP": "23",
  "VR_PA": "24",
  "VDDPA": "25",
  "OSC_IN": "26",
  "OSC_OUT": "27",
  "VDDRF": "28",
  "VDDRF1V55": "29",
  "PB0": "30",
  "PB2": "31",
  "PB12": "32",
  "PA10": "33",
  "PA11": "34",
  "PA12": "35",
  "PA13": "36",
  "VBAT": "37",
  "PC13": "38",
  "PC14": "39",
  "PC15": "40",
  "VDDA": "41",
  "PA14": "42",
  "PA15": "43",
  "VDD_44": "44",
  "VFBSMPS": "45",
  "VDDSMPS": "46",
  "VLXSMPS": "47",
  "VSSSMPS": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VDD_11: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", NRST: "input", PH3: "bidirectional", RFI_P: "bidirectional", RFI_N: "bidirectional", RFO_LP: "bidirectional", RFO_HP: "bidirectional", VR_PA: "power_in", VDDPA: "power_in", OSC_IN: "input", OSC_OUT: "input", VDDRF: "power_in", VDDRF1V55: "power_in", PB0: "bidirectional", PB2: "bidirectional", PB12: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDDA: "power_in", PA14: "bidirectional", PA15: "bidirectional", VDD_44: "power_in", VFBSMPS: "input", VDDSMPS: "power_in", VLXSMPS: "power_in", VSSSMPS: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WL:STM32WL54CCUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 64KB RAM, 48 MHz, 1.8-3.6V, 43 GPIO, UFBGA73
 *
 * KiCad symbol: `MCU_ST_STM32WL:STM32WL54JCIx`. Reference prefix: `U`.
 * Footprint filters: ST*UFBGA*5x5mm*Layout9x9*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wl54jc.pdf
 * Keywords: Arm Cortex-M4 STM32WL STM32WL5x.
 * Default footprint: Package_BGA:ST_UFBGA-73_5x5mm_Layout9x9_P0.5mm.
 */
export class STM32WL54JCIx extends Component.withPins({
  "VSSSMPS": "A1",
  "VDDSMPS": "A2",
  "PA14": "A4",
  "VDDA": "A5",
  "VDD_A7": "A7",
  "VBAT": "A8",
  "PA12": "A9",
  "VLXSMPS": "B1",
  "VFBSMPS": "B2",
  "PA15": "B3",
  "PB15": "B4",
  "VREF+": "B5",
  "PC14": "B6",
  "VSS_B7": "B7",
  "PA13": "B8",
  "PA11": "B9",
  "PB3": "C1",
  "PB4": "C2",
  "PB7": "C3",
  "PB9": "C4",
  "PC15": "C5",
  "PB14": "C6",
  "PC13": "C7",
  "PA10": "C8",
  "PB5": "D2",
  "PB8": "D3",
  "PC2": "D4",
  "PC3": "D5",
  "PA0": "D6",
  "PB13": "D7",
  "PB2": "D8",
  "VSS_D9": "D9",
  "PB6": "E1",
  "VDD_E2": "E2",
  "VSS_E3": "E3",
  "PC5": "E4",
  "PA9": "E5",
  "PB12": "E6",
  "PB1": "E7",
  "VDDRF": "E8",
  "VDD_E9": "E9",
  "PC1": "F1",
  "PC0": "F2",
  "PC4": "F3",
  "PA6": "F4",
  "NRST": "F5",
  "PB0": "F6",
  "VDDRF1V55": "F7",
  "OSC_OUT": "F8",
  "PC6": "G2",
  "PA1": "G3",
  "PB11": "G4",
  "VSS_G5": "G5",
  "VSSRF_G6": "G6",
  "VSSRF_G7": "G7",
  "VSSRF_G8": "G8",
  "OSC_IN": "G9",
  "PA3": "H1",
  "PA2": "H2",
  "PA7": "H3",
  "PB10": "H4",
  "VDD_H5": "H5",
  "VSSRF_H6": "H6",
  "RFI_N": "H7",
  "VDDPA": "H8",
  "VR_PA": "H9",
  "PA4": "J1",
  "PA5": "J2",
  "PA8": "J3",
  "PH3": "J5",
  "RFI_P": "J6",
  "RFO_LP": "J8",
  "RFO_HP": "J9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSSSMPS: "power_in", VDDSMPS: "power_in", PA14: "bidirectional", VDDA: "power_in", VDD_A7: "power_in", VBAT: "power_in", PA12: "bidirectional", VLXSMPS: "power_in", VFBSMPS: "input", PA15: "bidirectional", PB15: "bidirectional", "VREF+": "input", PC14: "bidirectional", VSS_B7: "power_in", PA13: "bidirectional", PA11: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", PC15: "bidirectional", PB14: "bidirectional", PC13: "bidirectional", PA10: "bidirectional", PB5: "bidirectional", PB8: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PB13: "bidirectional", PB2: "bidirectional", VSS_D9: "passive", PB6: "bidirectional", VDD_E2: "power_in", VSS_E3: "passive", PC5: "bidirectional", PA9: "bidirectional", PB12: "bidirectional", PB1: "bidirectional", VDDRF: "power_in", VDD_E9: "power_in", PC1: "bidirectional", PC0: "bidirectional", PC4: "bidirectional", PA6: "bidirectional", NRST: "input", PB0: "bidirectional", VDDRF1V55: "power_in", OSC_OUT: "input", PC6: "bidirectional", PA1: "bidirectional", PB11: "bidirectional", VSS_G5: "passive", VSSRF_G6: "power_in", VSSRF_G7: "passive", VSSRF_G8: "passive", OSC_IN: "input", PA3: "bidirectional", PA2: "bidirectional", PA7: "bidirectional", PB10: "bidirectional", VDD_H5: "power_in", VSSRF_H6: "passive", RFI_N: "bidirectional", VDDPA: "power_in", VR_PA: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA8: "bidirectional", PH3: "bidirectional", RFI_P: "bidirectional", RFO_LP: "bidirectional", RFO_HP: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WL:STM32WL54JCIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 64KB RAM, 48 MHz, 1.8-3.6V, 29 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WL:STM32WL55CCUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wl55cc.pdf
 * Keywords: Arm Cortex-M4 STM32WL STM32WL5x.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WL55CCUx extends Component.withPins({
  "PB3": "1",
  "PB4": "2",
  "PB5": "3",
  "PB6": "4",
  "PB7": "5",
  "PB8": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "VDD_11": "11",
  "PA4": "12",
  "PA5": "13",
  "PA6": "14",
  "PA7": "15",
  "PA8": "16",
  "PA9": "17",
  "NRST": "18",
  "PH3": "19",
  "RFI_P": "20",
  "RFI_N": "21",
  "RFO_LP": "22",
  "RFO_HP": "23",
  "VR_PA": "24",
  "VDDPA": "25",
  "OSC_IN": "26",
  "OSC_OUT": "27",
  "VDDRF": "28",
  "VDDRF1V55": "29",
  "PB0": "30",
  "PB2": "31",
  "PB12": "32",
  "PA10": "33",
  "PA11": "34",
  "PA12": "35",
  "PA13": "36",
  "VBAT": "37",
  "PC13": "38",
  "PC14": "39",
  "PC15": "40",
  "VDDA": "41",
  "PA14": "42",
  "PA15": "43",
  "VDD_44": "44",
  "VFBSMPS": "45",
  "VDDSMPS": "46",
  "VLXSMPS": "47",
  "VSSSMPS": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VDD_11: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", NRST: "input", PH3: "bidirectional", RFI_P: "bidirectional", RFI_N: "bidirectional", RFO_LP: "bidirectional", RFO_HP: "bidirectional", VR_PA: "power_in", VDDPA: "power_in", OSC_IN: "input", OSC_OUT: "input", VDDRF: "power_in", VDDRF1V55: "power_in", PB0: "bidirectional", PB2: "bidirectional", PB12: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDDA: "power_in", PA14: "bidirectional", PA15: "bidirectional", VDD_44: "power_in", VFBSMPS: "input", VDDSMPS: "power_in", VLXSMPS: "power_in", VSSSMPS: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WL:STM32WL55CCUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 64KB RAM, 48 MHz, 1.8-3.6V, 43 GPIO, UFBGA73
 *
 * KiCad symbol: `MCU_ST_STM32WL:STM32WL55JCIx`. Reference prefix: `U`.
 * Footprint filters: ST*UFBGA*5x5mm*Layout9x9*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wl55jc.pdf
 * Keywords: Arm Cortex-M4 STM32WL STM32WL5x.
 * Default footprint: Package_BGA:ST_UFBGA-73_5x5mm_Layout9x9_P0.5mm.
 */
export class STM32WL55JCIx extends Component.withPins({
  "VSSSMPS": "A1",
  "VDDSMPS": "A2",
  "PA14": "A4",
  "VDDA": "A5",
  "VDD_A7": "A7",
  "VBAT": "A8",
  "PA12": "A9",
  "VLXSMPS": "B1",
  "VFBSMPS": "B2",
  "PA15": "B3",
  "PB15": "B4",
  "VREF+": "B5",
  "PC14": "B6",
  "VSS_B7": "B7",
  "PA13": "B8",
  "PA11": "B9",
  "PB3": "C1",
  "PB4": "C2",
  "PB7": "C3",
  "PB9": "C4",
  "PC15": "C5",
  "PB14": "C6",
  "PC13": "C7",
  "PA10": "C8",
  "PB5": "D2",
  "PB8": "D3",
  "PC2": "D4",
  "PC3": "D5",
  "PA0": "D6",
  "PB13": "D7",
  "PB2": "D8",
  "VSS_D9": "D9",
  "PB6": "E1",
  "VDD_E2": "E2",
  "VSS_E3": "E3",
  "PC5": "E4",
  "PA9": "E5",
  "PB12": "E6",
  "PB1": "E7",
  "VDDRF": "E8",
  "VDD_E9": "E9",
  "PC1": "F1",
  "PC0": "F2",
  "PC4": "F3",
  "PA6": "F4",
  "NRST": "F5",
  "PB0": "F6",
  "VDDRF1V55": "F7",
  "OSC_OUT": "F8",
  "PC6": "G2",
  "PA1": "G3",
  "PB11": "G4",
  "VSS_G5": "G5",
  "VSSRF_G6": "G6",
  "VSSRF_G7": "G7",
  "VSSRF_G8": "G8",
  "OSC_IN": "G9",
  "PA3": "H1",
  "PA2": "H2",
  "PA7": "H3",
  "PB10": "H4",
  "VDD_H5": "H5",
  "VSSRF_H6": "H6",
  "RFI_N": "H7",
  "VDDPA": "H8",
  "VR_PA": "H9",
  "PA4": "J1",
  "PA5": "J2",
  "PA8": "J3",
  "PH3": "J5",
  "RFI_P": "J6",
  "RFO_LP": "J8",
  "RFO_HP": "J9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSSSMPS: "power_in", VDDSMPS: "power_in", PA14: "bidirectional", VDDA: "power_in", VDD_A7: "power_in", VBAT: "power_in", PA12: "bidirectional", VLXSMPS: "power_in", VFBSMPS: "input", PA15: "bidirectional", PB15: "bidirectional", "VREF+": "input", PC14: "bidirectional", VSS_B7: "power_in", PA13: "bidirectional", PA11: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", PC15: "bidirectional", PB14: "bidirectional", PC13: "bidirectional", PA10: "bidirectional", PB5: "bidirectional", PB8: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PB13: "bidirectional", PB2: "bidirectional", VSS_D9: "passive", PB6: "bidirectional", VDD_E2: "power_in", VSS_E3: "passive", PC5: "bidirectional", PA9: "bidirectional", PB12: "bidirectional", PB1: "bidirectional", VDDRF: "power_in", VDD_E9: "power_in", PC1: "bidirectional", PC0: "bidirectional", PC4: "bidirectional", PA6: "bidirectional", NRST: "input", PB0: "bidirectional", VDDRF1V55: "power_in", OSC_OUT: "input", PC6: "bidirectional", PA1: "bidirectional", PB11: "bidirectional", VSS_G5: "passive", VSSRF_G6: "power_in", VSSRF_G7: "passive", VSSRF_G8: "passive", OSC_IN: "input", PA3: "bidirectional", PA2: "bidirectional", PA7: "bidirectional", PB10: "bidirectional", VDD_H5: "power_in", VSSRF_H6: "passive", RFI_N: "bidirectional", VDDPA: "power_in", VR_PA: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA8: "bidirectional", PH3: "bidirectional", RFI_P: "bidirectional", RFO_LP: "bidirectional", RFO_HP: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WL:STM32WL55JCIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 20KB RAM, 48 MHz, 1.8-3.6V, 29 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WL:STM32WLE4C8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wle4c8.pdf
 * Keywords: Arm Cortex-M4 STM32WL STM32WLEx.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WLE4C8Ux extends Component.withPins({
  "PB3": "1",
  "PB4": "2",
  "PB5": "3",
  "PB6": "4",
  "PB7": "5",
  "PB8": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "VDD_11": "11",
  "PA4": "12",
  "PA5": "13",
  "PA6": "14",
  "PA7": "15",
  "PA8": "16",
  "PA9": "17",
  "NRST": "18",
  "PH3": "19",
  "RFI_P": "20",
  "RFI_N": "21",
  "RFO_LP": "22",
  "RFO_HP": "23",
  "VR_PA": "24",
  "VDDPA": "25",
  "OSC_IN": "26",
  "OSC_OUT": "27",
  "VDDRF": "28",
  "VDDRF1V55": "29",
  "PB0": "30",
  "PB2": "31",
  "PB12": "32",
  "PA10": "33",
  "PA11": "34",
  "PA12": "35",
  "PA13": "36",
  "VBAT": "37",
  "PC13": "38",
  "PC14": "39",
  "PC15": "40",
  "VDDA": "41",
  "PA14": "42",
  "PA15": "43",
  "VDD_44": "44",
  "VFBSMPS": "45",
  "VDDSMPS": "46",
  "VLXSMPS": "47",
  "VSSSMPS": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VDD_11: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", NRST: "input", PH3: "bidirectional", RFI_P: "bidirectional", RFI_N: "bidirectional", RFO_LP: "bidirectional", RFO_HP: "bidirectional", VR_PA: "power_in", VDDPA: "power_in", OSC_IN: "input", OSC_OUT: "input", VDDRF: "power_in", VDDRF1V55: "power_in", PB0: "bidirectional", PB2: "bidirectional", PB12: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDDA: "power_in", PA14: "bidirectional", PA15: "bidirectional", VDD_44: "power_in", VFBSMPS: "input", VDDSMPS: "power_in", VLXSMPS: "power_in", VSSSMPS: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WL:STM32WLE4C8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 128KB flash, 48KB RAM, 48 MHz, 1.8-3.6V, 29 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WL:STM32WLE4CBUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wle4cb.pdf
 * Keywords: Arm Cortex-M4 STM32WL STM32WLEx.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WLE4CBUx extends Component.withPins({
  "PB3": "1",
  "PB4": "2",
  "PB5": "3",
  "PB6": "4",
  "PB7": "5",
  "PB8": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "VDD_11": "11",
  "PA4": "12",
  "PA5": "13",
  "PA6": "14",
  "PA7": "15",
  "PA8": "16",
  "PA9": "17",
  "NRST": "18",
  "PH3": "19",
  "RFI_P": "20",
  "RFI_N": "21",
  "RFO_LP": "22",
  "RFO_HP": "23",
  "VR_PA": "24",
  "VDDPA": "25",
  "OSC_IN": "26",
  "OSC_OUT": "27",
  "VDDRF": "28",
  "VDDRF1V55": "29",
  "PB0": "30",
  "PB2": "31",
  "PB12": "32",
  "PA10": "33",
  "PA11": "34",
  "PA12": "35",
  "PA13": "36",
  "VBAT": "37",
  "PC13": "38",
  "PC14": "39",
  "PC15": "40",
  "VDDA": "41",
  "PA14": "42",
  "PA15": "43",
  "VDD_44": "44",
  "VFBSMPS": "45",
  "VDDSMPS": "46",
  "VLXSMPS": "47",
  "VSSSMPS": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VDD_11: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", NRST: "input", PH3: "bidirectional", RFI_P: "bidirectional", RFI_N: "bidirectional", RFO_LP: "bidirectional", RFO_HP: "bidirectional", VR_PA: "power_in", VDDPA: "power_in", OSC_IN: "input", OSC_OUT: "input", VDDRF: "power_in", VDDRF1V55: "power_in", PB0: "bidirectional", PB2: "bidirectional", PB12: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDDA: "power_in", PA14: "bidirectional", PA15: "bidirectional", VDD_44: "power_in", VFBSMPS: "input", VDDSMPS: "power_in", VLXSMPS: "power_in", VSSSMPS: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WL:STM32WLE4CBUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 64KB RAM, 48 MHz, 1.8-3.6V, 29 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WL:STM32WLE4CCUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wle4cc.pdf
 * Keywords: Arm Cortex-M4 STM32WL STM32WLEx.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WLE4CCUx extends Component.withPins({
  "PB3": "1",
  "PB4": "2",
  "PB5": "3",
  "PB6": "4",
  "PB7": "5",
  "PB8": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "VDD_11": "11",
  "PA4": "12",
  "PA5": "13",
  "PA6": "14",
  "PA7": "15",
  "PA8": "16",
  "PA9": "17",
  "NRST": "18",
  "PH3": "19",
  "RFI_P": "20",
  "RFI_N": "21",
  "RFO_LP": "22",
  "RFO_HP": "23",
  "VR_PA": "24",
  "VDDPA": "25",
  "OSC_IN": "26",
  "OSC_OUT": "27",
  "VDDRF": "28",
  "VDDRF1V55": "29",
  "PB0": "30",
  "PB2": "31",
  "PB12": "32",
  "PA10": "33",
  "PA11": "34",
  "PA12": "35",
  "PA13": "36",
  "VBAT": "37",
  "PC13": "38",
  "PC14": "39",
  "PC15": "40",
  "VDDA": "41",
  "PA14": "42",
  "PA15": "43",
  "VDD_44": "44",
  "VFBSMPS": "45",
  "VDDSMPS": "46",
  "VLXSMPS": "47",
  "VSSSMPS": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VDD_11: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", NRST: "input", PH3: "bidirectional", RFI_P: "bidirectional", RFI_N: "bidirectional", RFO_LP: "bidirectional", RFO_HP: "bidirectional", VR_PA: "power_in", VDDPA: "power_in", OSC_IN: "input", OSC_OUT: "input", VDDRF: "power_in", VDDRF1V55: "power_in", PB0: "bidirectional", PB2: "bidirectional", PB12: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDDA: "power_in", PA14: "bidirectional", PA15: "bidirectional", VDD_44: "power_in", VFBSMPS: "input", VDDSMPS: "power_in", VLXSMPS: "power_in", VSSSMPS: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WL:STM32WLE4CCUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 20KB RAM, 48 MHz, 1.8-3.6V, 43 GPIO, UFBGA73
 *
 * KiCad symbol: `MCU_ST_STM32WL:STM32WLE4J8Ix`. Reference prefix: `U`.
 * Footprint filters: ST*UFBGA*5x5mm*Layout9x9*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wle4j8.pdf
 * Keywords: Arm Cortex-M4 STM32WL STM32WLEx.
 * Default footprint: Package_BGA:ST_UFBGA-73_5x5mm_Layout9x9_P0.5mm.
 */
export class STM32WLE4J8Ix extends Component.withPins({
  "VSSSMPS": "A1",
  "VDDSMPS": "A2",
  "PA14": "A4",
  "VDDA": "A5",
  "VDD_A7": "A7",
  "VBAT": "A8",
  "PA12": "A9",
  "VLXSMPS": "B1",
  "VFBSMPS": "B2",
  "PA15": "B3",
  "PB15": "B4",
  "VREF+": "B5",
  "PC14": "B6",
  "VSS_B7": "B7",
  "PA13": "B8",
  "PA11": "B9",
  "PB3": "C1",
  "PB4": "C2",
  "PB7": "C3",
  "PB9": "C4",
  "PC15": "C5",
  "PB14": "C6",
  "PC13": "C7",
  "PA10": "C8",
  "PB5": "D2",
  "PB8": "D3",
  "PC2": "D4",
  "PC3": "D5",
  "PA0": "D6",
  "PB13": "D7",
  "PB2": "D8",
  "VSS_D9": "D9",
  "PB6": "E1",
  "VDD_E2": "E2",
  "VSS_E3": "E3",
  "PC5": "E4",
  "PA9": "E5",
  "PB12": "E6",
  "PB1": "E7",
  "VDDRF": "E8",
  "VDD_E9": "E9",
  "PC1": "F1",
  "PC0": "F2",
  "PC4": "F3",
  "PA6": "F4",
  "NRST": "F5",
  "PB0": "F6",
  "VDDRF1V55": "F7",
  "OSC_OUT": "F8",
  "PC6": "G2",
  "PA1": "G3",
  "PB11": "G4",
  "VSS_G5": "G5",
  "VSSRF_G6": "G6",
  "VSSRF_G7": "G7",
  "VSSRF_G8": "G8",
  "OSC_IN": "G9",
  "PA3": "H1",
  "PA2": "H2",
  "PA7": "H3",
  "PB10": "H4",
  "VDD_H5": "H5",
  "VSSRF_H6": "H6",
  "RFI_N": "H7",
  "VDDPA": "H8",
  "VR_PA": "H9",
  "PA4": "J1",
  "PA5": "J2",
  "PA8": "J3",
  "PH3": "J5",
  "RFI_P": "J6",
  "RFO_LP": "J8",
  "RFO_HP": "J9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSSSMPS: "power_in", VDDSMPS: "power_in", PA14: "bidirectional", VDDA: "power_in", VDD_A7: "power_in", VBAT: "power_in", PA12: "bidirectional", VLXSMPS: "power_in", VFBSMPS: "input", PA15: "bidirectional", PB15: "bidirectional", "VREF+": "input", PC14: "bidirectional", VSS_B7: "power_in", PA13: "bidirectional", PA11: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", PC15: "bidirectional", PB14: "bidirectional", PC13: "bidirectional", PA10: "bidirectional", PB5: "bidirectional", PB8: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PB13: "bidirectional", PB2: "bidirectional", VSS_D9: "passive", PB6: "bidirectional", VDD_E2: "power_in", VSS_E3: "passive", PC5: "bidirectional", PA9: "bidirectional", PB12: "bidirectional", PB1: "bidirectional", VDDRF: "power_in", VDD_E9: "power_in", PC1: "bidirectional", PC0: "bidirectional", PC4: "bidirectional", PA6: "bidirectional", NRST: "input", PB0: "bidirectional", VDDRF1V55: "power_in", OSC_OUT: "input", PC6: "bidirectional", PA1: "bidirectional", PB11: "bidirectional", VSS_G5: "passive", VSSRF_G6: "power_in", VSSRF_G7: "passive", VSSRF_G8: "passive", OSC_IN: "input", PA3: "bidirectional", PA2: "bidirectional", PA7: "bidirectional", PB10: "bidirectional", VDD_H5: "power_in", VSSRF_H6: "passive", RFI_N: "bidirectional", VDDPA: "power_in", VR_PA: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA8: "bidirectional", PH3: "bidirectional", RFI_P: "bidirectional", RFO_LP: "bidirectional", RFO_HP: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WL:STM32WLE4J8Ix";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 128KB flash, 48KB RAM, 48 MHz, 1.8-3.6V, 43 GPIO, UFBGA73
 *
 * KiCad symbol: `MCU_ST_STM32WL:STM32WLE4JBIx`. Reference prefix: `U`.
 * Footprint filters: ST*UFBGA*5x5mm*Layout9x9*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wle4jb.pdf
 * Keywords: Arm Cortex-M4 STM32WL STM32WLEx.
 * Default footprint: Package_BGA:ST_UFBGA-73_5x5mm_Layout9x9_P0.5mm.
 */
export class STM32WLE4JBIx extends Component.withPins({
  "VSSSMPS": "A1",
  "VDDSMPS": "A2",
  "PA14": "A4",
  "VDDA": "A5",
  "VDD_A7": "A7",
  "VBAT": "A8",
  "PA12": "A9",
  "VLXSMPS": "B1",
  "VFBSMPS": "B2",
  "PA15": "B3",
  "PB15": "B4",
  "VREF+": "B5",
  "PC14": "B6",
  "VSS_B7": "B7",
  "PA13": "B8",
  "PA11": "B9",
  "PB3": "C1",
  "PB4": "C2",
  "PB7": "C3",
  "PB9": "C4",
  "PC15": "C5",
  "PB14": "C6",
  "PC13": "C7",
  "PA10": "C8",
  "PB5": "D2",
  "PB8": "D3",
  "PC2": "D4",
  "PC3": "D5",
  "PA0": "D6",
  "PB13": "D7",
  "PB2": "D8",
  "VSS_D9": "D9",
  "PB6": "E1",
  "VDD_E2": "E2",
  "VSS_E3": "E3",
  "PC5": "E4",
  "PA9": "E5",
  "PB12": "E6",
  "PB1": "E7",
  "VDDRF": "E8",
  "VDD_E9": "E9",
  "PC1": "F1",
  "PC0": "F2",
  "PC4": "F3",
  "PA6": "F4",
  "NRST": "F5",
  "PB0": "F6",
  "VDDRF1V55": "F7",
  "OSC_OUT": "F8",
  "PC6": "G2",
  "PA1": "G3",
  "PB11": "G4",
  "VSS_G5": "G5",
  "VSSRF_G6": "G6",
  "VSSRF_G7": "G7",
  "VSSRF_G8": "G8",
  "OSC_IN": "G9",
  "PA3": "H1",
  "PA2": "H2",
  "PA7": "H3",
  "PB10": "H4",
  "VDD_H5": "H5",
  "VSSRF_H6": "H6",
  "RFI_N": "H7",
  "VDDPA": "H8",
  "VR_PA": "H9",
  "PA4": "J1",
  "PA5": "J2",
  "PA8": "J3",
  "PH3": "J5",
  "RFI_P": "J6",
  "RFO_LP": "J8",
  "RFO_HP": "J9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSSSMPS: "power_in", VDDSMPS: "power_in", PA14: "bidirectional", VDDA: "power_in", VDD_A7: "power_in", VBAT: "power_in", PA12: "bidirectional", VLXSMPS: "power_in", VFBSMPS: "input", PA15: "bidirectional", PB15: "bidirectional", "VREF+": "input", PC14: "bidirectional", VSS_B7: "power_in", PA13: "bidirectional", PA11: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", PC15: "bidirectional", PB14: "bidirectional", PC13: "bidirectional", PA10: "bidirectional", PB5: "bidirectional", PB8: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PB13: "bidirectional", PB2: "bidirectional", VSS_D9: "passive", PB6: "bidirectional", VDD_E2: "power_in", VSS_E3: "passive", PC5: "bidirectional", PA9: "bidirectional", PB12: "bidirectional", PB1: "bidirectional", VDDRF: "power_in", VDD_E9: "power_in", PC1: "bidirectional", PC0: "bidirectional", PC4: "bidirectional", PA6: "bidirectional", NRST: "input", PB0: "bidirectional", VDDRF1V55: "power_in", OSC_OUT: "input", PC6: "bidirectional", PA1: "bidirectional", PB11: "bidirectional", VSS_G5: "passive", VSSRF_G6: "power_in", VSSRF_G7: "passive", VSSRF_G8: "passive", OSC_IN: "input", PA3: "bidirectional", PA2: "bidirectional", PA7: "bidirectional", PB10: "bidirectional", VDD_H5: "power_in", VSSRF_H6: "passive", RFI_N: "bidirectional", VDDPA: "power_in", VR_PA: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA8: "bidirectional", PH3: "bidirectional", RFI_P: "bidirectional", RFO_LP: "bidirectional", RFO_HP: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WL:STM32WLE4JBIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 64KB RAM, 48 MHz, 1.8-3.6V, 43 GPIO, UFBGA73
 *
 * KiCad symbol: `MCU_ST_STM32WL:STM32WLE4JCIx`. Reference prefix: `U`.
 * Footprint filters: ST*UFBGA*5x5mm*Layout9x9*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wle4jc.pdf
 * Keywords: Arm Cortex-M4 STM32WL STM32WLEx.
 * Default footprint: Package_BGA:ST_UFBGA-73_5x5mm_Layout9x9_P0.5mm.
 */
export class STM32WLE4JCIx extends Component.withPins({
  "VSSSMPS": "A1",
  "VDDSMPS": "A2",
  "PA14": "A4",
  "VDDA": "A5",
  "VDD_A7": "A7",
  "VBAT": "A8",
  "PA12": "A9",
  "VLXSMPS": "B1",
  "VFBSMPS": "B2",
  "PA15": "B3",
  "PB15": "B4",
  "VREF+": "B5",
  "PC14": "B6",
  "VSS_B7": "B7",
  "PA13": "B8",
  "PA11": "B9",
  "PB3": "C1",
  "PB4": "C2",
  "PB7": "C3",
  "PB9": "C4",
  "PC15": "C5",
  "PB14": "C6",
  "PC13": "C7",
  "PA10": "C8",
  "PB5": "D2",
  "PB8": "D3",
  "PC2": "D4",
  "PC3": "D5",
  "PA0": "D6",
  "PB13": "D7",
  "PB2": "D8",
  "VSS_D9": "D9",
  "PB6": "E1",
  "VDD_E2": "E2",
  "VSS_E3": "E3",
  "PC5": "E4",
  "PA9": "E5",
  "PB12": "E6",
  "PB1": "E7",
  "VDDRF": "E8",
  "VDD_E9": "E9",
  "PC1": "F1",
  "PC0": "F2",
  "PC4": "F3",
  "PA6": "F4",
  "NRST": "F5",
  "PB0": "F6",
  "VDDRF1V55": "F7",
  "OSC_OUT": "F8",
  "PC6": "G2",
  "PA1": "G3",
  "PB11": "G4",
  "VSS_G5": "G5",
  "VSSRF_G6": "G6",
  "VSSRF_G7": "G7",
  "VSSRF_G8": "G8",
  "OSC_IN": "G9",
  "PA3": "H1",
  "PA2": "H2",
  "PA7": "H3",
  "PB10": "H4",
  "VDD_H5": "H5",
  "VSSRF_H6": "H6",
  "RFI_N": "H7",
  "VDDPA": "H8",
  "VR_PA": "H9",
  "PA4": "J1",
  "PA5": "J2",
  "PA8": "J3",
  "PH3": "J5",
  "RFI_P": "J6",
  "RFO_LP": "J8",
  "RFO_HP": "J9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSSSMPS: "power_in", VDDSMPS: "power_in", PA14: "bidirectional", VDDA: "power_in", VDD_A7: "power_in", VBAT: "power_in", PA12: "bidirectional", VLXSMPS: "power_in", VFBSMPS: "input", PA15: "bidirectional", PB15: "bidirectional", "VREF+": "input", PC14: "bidirectional", VSS_B7: "power_in", PA13: "bidirectional", PA11: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", PC15: "bidirectional", PB14: "bidirectional", PC13: "bidirectional", PA10: "bidirectional", PB5: "bidirectional", PB8: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PB13: "bidirectional", PB2: "bidirectional", VSS_D9: "passive", PB6: "bidirectional", VDD_E2: "power_in", VSS_E3: "passive", PC5: "bidirectional", PA9: "bidirectional", PB12: "bidirectional", PB1: "bidirectional", VDDRF: "power_in", VDD_E9: "power_in", PC1: "bidirectional", PC0: "bidirectional", PC4: "bidirectional", PA6: "bidirectional", NRST: "input", PB0: "bidirectional", VDDRF1V55: "power_in", OSC_OUT: "input", PC6: "bidirectional", PA1: "bidirectional", PB11: "bidirectional", VSS_G5: "passive", VSSRF_G6: "power_in", VSSRF_G7: "passive", VSSRF_G8: "passive", OSC_IN: "input", PA3: "bidirectional", PA2: "bidirectional", PA7: "bidirectional", PB10: "bidirectional", VDD_H5: "power_in", VSSRF_H6: "passive", RFI_N: "bidirectional", VDDPA: "power_in", VR_PA: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA8: "bidirectional", PH3: "bidirectional", RFI_P: "bidirectional", RFO_LP: "bidirectional", RFO_HP: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WL:STM32WLE4JCIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 20KB RAM, 48 MHz, 1.8-3.6V, 29 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WL:STM32WLE5C8Ux`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wle5c8.pdf
 * Keywords: Arm Cortex-M4 STM32WL STM32WLEx.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WLE5C8Ux extends Component.withPins({
  "PB3": "1",
  "PB4": "2",
  "PB5": "3",
  "PB6": "4",
  "PB7": "5",
  "PB8": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "VDD_11": "11",
  "PA4": "12",
  "PA5": "13",
  "PA6": "14",
  "PA7": "15",
  "PA8": "16",
  "PA9": "17",
  "NRST": "18",
  "PH3": "19",
  "RFI_P": "20",
  "RFI_N": "21",
  "RFO_LP": "22",
  "RFO_HP": "23",
  "VR_PA": "24",
  "VDDPA": "25",
  "OSC_IN": "26",
  "OSC_OUT": "27",
  "VDDRF": "28",
  "VDDRF1V55": "29",
  "PB0": "30",
  "PB2": "31",
  "PB12": "32",
  "PA10": "33",
  "PA11": "34",
  "PA12": "35",
  "PA13": "36",
  "VBAT": "37",
  "PC13": "38",
  "PC14": "39",
  "PC15": "40",
  "VDDA": "41",
  "PA14": "42",
  "PA15": "43",
  "VDD_44": "44",
  "VFBSMPS": "45",
  "VDDSMPS": "46",
  "VLXSMPS": "47",
  "VSSSMPS": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VDD_11: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", NRST: "input", PH3: "bidirectional", RFI_P: "bidirectional", RFI_N: "bidirectional", RFO_LP: "bidirectional", RFO_HP: "bidirectional", VR_PA: "power_in", VDDPA: "power_in", OSC_IN: "input", OSC_OUT: "input", VDDRF: "power_in", VDDRF1V55: "power_in", PB0: "bidirectional", PB2: "bidirectional", PB12: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDDA: "power_in", PA14: "bidirectional", PA15: "bidirectional", VDD_44: "power_in", VFBSMPS: "input", VDDSMPS: "power_in", VLXSMPS: "power_in", VSSSMPS: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WL:STM32WLE5C8Ux";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 128KB flash, 48KB RAM, 48 MHz, 1.8-3.6V, 29 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WL:STM32WLE5CBUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wle5cb.pdf
 * Keywords: Arm Cortex-M4 STM32WL STM32WLEx.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WLE5CBUx extends Component.withPins({
  "PB3": "1",
  "PB4": "2",
  "PB5": "3",
  "PB6": "4",
  "PB7": "5",
  "PB8": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "VDD_11": "11",
  "PA4": "12",
  "PA5": "13",
  "PA6": "14",
  "PA7": "15",
  "PA8": "16",
  "PA9": "17",
  "NRST": "18",
  "PH3": "19",
  "RFI_P": "20",
  "RFI_N": "21",
  "RFO_LP": "22",
  "RFO_HP": "23",
  "VR_PA": "24",
  "VDDPA": "25",
  "OSC_IN": "26",
  "OSC_OUT": "27",
  "VDDRF": "28",
  "VDDRF1V55": "29",
  "PB0": "30",
  "PB2": "31",
  "PB12": "32",
  "PA10": "33",
  "PA11": "34",
  "PA12": "35",
  "PA13": "36",
  "VBAT": "37",
  "PC13": "38",
  "PC14": "39",
  "PC15": "40",
  "VDDA": "41",
  "PA14": "42",
  "PA15": "43",
  "VDD_44": "44",
  "VFBSMPS": "45",
  "VDDSMPS": "46",
  "VLXSMPS": "47",
  "VSSSMPS": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VDD_11: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", NRST: "input", PH3: "bidirectional", RFI_P: "bidirectional", RFI_N: "bidirectional", RFO_LP: "bidirectional", RFO_HP: "bidirectional", VR_PA: "power_in", VDDPA: "power_in", OSC_IN: "input", OSC_OUT: "input", VDDRF: "power_in", VDDRF1V55: "power_in", PB0: "bidirectional", PB2: "bidirectional", PB12: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDDA: "power_in", PA14: "bidirectional", PA15: "bidirectional", VDD_44: "power_in", VFBSMPS: "input", VDDSMPS: "power_in", VLXSMPS: "power_in", VSSSMPS: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WL:STM32WLE5CBUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 64KB RAM, 48 MHz, 1.8-3.6V, 29 GPIO, UFQFPN48
 *
 * KiCad symbol: `MCU_ST_STM32WL:STM32WLE5CCUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wle5cc.pdf
 * Keywords: Arm Cortex-M4 STM32WL STM32WLEx.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.6x5.6mm.
 */
export class STM32WLE5CCUx extends Component.withPins({
  "PB3": "1",
  "PB4": "2",
  "PB5": "3",
  "PB6": "4",
  "PB7": "5",
  "PB8": "6",
  "PA0": "7",
  "PA1": "8",
  "PA2": "9",
  "PA3": "10",
  "VDD_11": "11",
  "PA4": "12",
  "PA5": "13",
  "PA6": "14",
  "PA7": "15",
  "PA8": "16",
  "PA9": "17",
  "NRST": "18",
  "PH3": "19",
  "RFI_P": "20",
  "RFI_N": "21",
  "RFO_LP": "22",
  "RFO_HP": "23",
  "VR_PA": "24",
  "VDDPA": "25",
  "OSC_IN": "26",
  "OSC_OUT": "27",
  "VDDRF": "28",
  "VDDRF1V55": "29",
  "PB0": "30",
  "PB2": "31",
  "PB12": "32",
  "PA10": "33",
  "PA11": "34",
  "PA12": "35",
  "PA13": "36",
  "VBAT": "37",
  "PC13": "38",
  "PC14": "39",
  "PC15": "40",
  "VDDA": "41",
  "PA14": "42",
  "PA15": "43",
  "VDD_44": "44",
  "VFBSMPS": "45",
  "VDDSMPS": "46",
  "VLXSMPS": "47",
  "VSSSMPS": "48",
  "VSS": "49",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VDD_11: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", NRST: "input", PH3: "bidirectional", RFI_P: "bidirectional", RFI_N: "bidirectional", RFO_LP: "bidirectional", RFO_HP: "bidirectional", VR_PA: "power_in", VDDPA: "power_in", OSC_IN: "input", OSC_OUT: "input", VDDRF: "power_in", VDDRF1V55: "power_in", PB0: "bidirectional", PB2: "bidirectional", PB12: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", VBAT: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", VDDA: "power_in", PA14: "bidirectional", PA15: "bidirectional", VDD_44: "power_in", VFBSMPS: "input", VDDSMPS: "power_in", VLXSMPS: "power_in", VSSSMPS: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WL:STM32WLE5CCUx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 64KB flash, 20KB RAM, 48 MHz, 1.8-3.6V, 43 GPIO, UFBGA73
 *
 * KiCad symbol: `MCU_ST_STM32WL:STM32WLE5J8Ix`. Reference prefix: `U`.
 * Footprint filters: ST*UFBGA*5x5mm*Layout9x9*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wle5j8.pdf
 * Keywords: Arm Cortex-M4 STM32WL STM32WLEx.
 * Default footprint: Package_BGA:ST_UFBGA-73_5x5mm_Layout9x9_P0.5mm.
 */
export class STM32WLE5J8Ix extends Component.withPins({
  "VSSSMPS": "A1",
  "VDDSMPS": "A2",
  "PA14": "A4",
  "VDDA": "A5",
  "VDD_A7": "A7",
  "VBAT": "A8",
  "PA12": "A9",
  "VLXSMPS": "B1",
  "VFBSMPS": "B2",
  "PA15": "B3",
  "PB15": "B4",
  "VREF+": "B5",
  "PC14": "B6",
  "VSS_B7": "B7",
  "PA13": "B8",
  "PA11": "B9",
  "PB3": "C1",
  "PB4": "C2",
  "PB7": "C3",
  "PB9": "C4",
  "PC15": "C5",
  "PB14": "C6",
  "PC13": "C7",
  "PA10": "C8",
  "PB5": "D2",
  "PB8": "D3",
  "PC2": "D4",
  "PC3": "D5",
  "PA0": "D6",
  "PB13": "D7",
  "PB2": "D8",
  "VSS_D9": "D9",
  "PB6": "E1",
  "VDD_E2": "E2",
  "VSS_E3": "E3",
  "PC5": "E4",
  "PA9": "E5",
  "PB12": "E6",
  "PB1": "E7",
  "VDDRF": "E8",
  "VDD_E9": "E9",
  "PC1": "F1",
  "PC0": "F2",
  "PC4": "F3",
  "PA6": "F4",
  "NRST": "F5",
  "PB0": "F6",
  "VDDRF1V55": "F7",
  "OSC_OUT": "F8",
  "PC6": "G2",
  "PA1": "G3",
  "PB11": "G4",
  "VSS_G5": "G5",
  "VSSRF_G6": "G6",
  "VSSRF_G7": "G7",
  "VSSRF_G8": "G8",
  "OSC_IN": "G9",
  "PA3": "H1",
  "PA2": "H2",
  "PA7": "H3",
  "PB10": "H4",
  "VDD_H5": "H5",
  "VSSRF_H6": "H6",
  "RFI_N": "H7",
  "VDDPA": "H8",
  "VR_PA": "H9",
  "PA4": "J1",
  "PA5": "J2",
  "PA8": "J3",
  "PH3": "J5",
  "RFI_P": "J6",
  "RFO_LP": "J8",
  "RFO_HP": "J9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSSSMPS: "power_in", VDDSMPS: "power_in", PA14: "bidirectional", VDDA: "power_in", VDD_A7: "power_in", VBAT: "power_in", PA12: "bidirectional", VLXSMPS: "power_in", VFBSMPS: "input", PA15: "bidirectional", PB15: "bidirectional", "VREF+": "input", PC14: "bidirectional", VSS_B7: "power_in", PA13: "bidirectional", PA11: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", PC15: "bidirectional", PB14: "bidirectional", PC13: "bidirectional", PA10: "bidirectional", PB5: "bidirectional", PB8: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PB13: "bidirectional", PB2: "bidirectional", VSS_D9: "passive", PB6: "bidirectional", VDD_E2: "power_in", VSS_E3: "passive", PC5: "bidirectional", PA9: "bidirectional", PB12: "bidirectional", PB1: "bidirectional", VDDRF: "power_in", VDD_E9: "power_in", PC1: "bidirectional", PC0: "bidirectional", PC4: "bidirectional", PA6: "bidirectional", NRST: "input", PB0: "bidirectional", VDDRF1V55: "power_in", OSC_OUT: "input", PC6: "bidirectional", PA1: "bidirectional", PB11: "bidirectional", VSS_G5: "passive", VSSRF_G6: "power_in", VSSRF_G7: "passive", VSSRF_G8: "passive", OSC_IN: "input", PA3: "bidirectional", PA2: "bidirectional", PA7: "bidirectional", PB10: "bidirectional", VDD_H5: "power_in", VSSRF_H6: "passive", RFI_N: "bidirectional", VDDPA: "power_in", VR_PA: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA8: "bidirectional", PH3: "bidirectional", RFI_P: "bidirectional", RFO_LP: "bidirectional", RFO_HP: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WL:STM32WLE5J8Ix";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 128KB flash, 48KB RAM, 48 MHz, 1.8-3.6V, 43 GPIO, UFBGA73
 *
 * KiCad symbol: `MCU_ST_STM32WL:STM32WLE5JBIx`. Reference prefix: `U`.
 * Footprint filters: ST*UFBGA*5x5mm*Layout9x9*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wle5jb.pdf
 * Keywords: Arm Cortex-M4 STM32WL STM32WLEx.
 * Default footprint: Package_BGA:ST_UFBGA-73_5x5mm_Layout9x9_P0.5mm.
 */
export class STM32WLE5JBIx extends Component.withPins({
  "VSSSMPS": "A1",
  "VDDSMPS": "A2",
  "PA14": "A4",
  "VDDA": "A5",
  "VDD_A7": "A7",
  "VBAT": "A8",
  "PA12": "A9",
  "VLXSMPS": "B1",
  "VFBSMPS": "B2",
  "PA15": "B3",
  "PB15": "B4",
  "VREF+": "B5",
  "PC14": "B6",
  "VSS_B7": "B7",
  "PA13": "B8",
  "PA11": "B9",
  "PB3": "C1",
  "PB4": "C2",
  "PB7": "C3",
  "PB9": "C4",
  "PC15": "C5",
  "PB14": "C6",
  "PC13": "C7",
  "PA10": "C8",
  "PB5": "D2",
  "PB8": "D3",
  "PC2": "D4",
  "PC3": "D5",
  "PA0": "D6",
  "PB13": "D7",
  "PB2": "D8",
  "VSS_D9": "D9",
  "PB6": "E1",
  "VDD_E2": "E2",
  "VSS_E3": "E3",
  "PC5": "E4",
  "PA9": "E5",
  "PB12": "E6",
  "PB1": "E7",
  "VDDRF": "E8",
  "VDD_E9": "E9",
  "PC1": "F1",
  "PC0": "F2",
  "PC4": "F3",
  "PA6": "F4",
  "NRST": "F5",
  "PB0": "F6",
  "VDDRF1V55": "F7",
  "OSC_OUT": "F8",
  "PC6": "G2",
  "PA1": "G3",
  "PB11": "G4",
  "VSS_G5": "G5",
  "VSSRF_G6": "G6",
  "VSSRF_G7": "G7",
  "VSSRF_G8": "G8",
  "OSC_IN": "G9",
  "PA3": "H1",
  "PA2": "H2",
  "PA7": "H3",
  "PB10": "H4",
  "VDD_H5": "H5",
  "VSSRF_H6": "H6",
  "RFI_N": "H7",
  "VDDPA": "H8",
  "VR_PA": "H9",
  "PA4": "J1",
  "PA5": "J2",
  "PA8": "J3",
  "PH3": "J5",
  "RFI_P": "J6",
  "RFO_LP": "J8",
  "RFO_HP": "J9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSSSMPS: "power_in", VDDSMPS: "power_in", PA14: "bidirectional", VDDA: "power_in", VDD_A7: "power_in", VBAT: "power_in", PA12: "bidirectional", VLXSMPS: "power_in", VFBSMPS: "input", PA15: "bidirectional", PB15: "bidirectional", "VREF+": "input", PC14: "bidirectional", VSS_B7: "power_in", PA13: "bidirectional", PA11: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", PC15: "bidirectional", PB14: "bidirectional", PC13: "bidirectional", PA10: "bidirectional", PB5: "bidirectional", PB8: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PB13: "bidirectional", PB2: "bidirectional", VSS_D9: "passive", PB6: "bidirectional", VDD_E2: "power_in", VSS_E3: "passive", PC5: "bidirectional", PA9: "bidirectional", PB12: "bidirectional", PB1: "bidirectional", VDDRF: "power_in", VDD_E9: "power_in", PC1: "bidirectional", PC0: "bidirectional", PC4: "bidirectional", PA6: "bidirectional", NRST: "input", PB0: "bidirectional", VDDRF1V55: "power_in", OSC_OUT: "input", PC6: "bidirectional", PA1: "bidirectional", PB11: "bidirectional", VSS_G5: "passive", VSSRF_G6: "power_in", VSSRF_G7: "passive", VSSRF_G8: "passive", OSC_IN: "input", PA3: "bidirectional", PA2: "bidirectional", PA7: "bidirectional", PB10: "bidirectional", VDD_H5: "power_in", VSSRF_H6: "passive", RFI_N: "bidirectional", VDDPA: "power_in", VR_PA: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA8: "bidirectional", PH3: "bidirectional", RFI_P: "bidirectional", RFO_LP: "bidirectional", RFO_HP: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WL:STM32WLE5JBIx";
  override referencePrefix = "U";
}

/**
 * STMicroelectronics Arm Cortex-M4 MCU, 256KB flash, 64KB RAM, 48 MHz, 1.8-3.6V, 43 GPIO, UFBGA73
 *
 * KiCad symbol: `MCU_ST_STM32WL:STM32WLE5JCIx`. Reference prefix: `U`.
 * Footprint filters: ST*UFBGA*5x5mm*Layout9x9*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/stm32wle5jc.pdf
 * Keywords: Arm Cortex-M4 STM32WL STM32WLEx.
 * Default footprint: Package_BGA:ST_UFBGA-73_5x5mm_Layout9x9_P0.5mm.
 */
export class STM32WLE5JCIx extends Component.withPins({
  "VSSSMPS": "A1",
  "VDDSMPS": "A2",
  "PA14": "A4",
  "VDDA": "A5",
  "VDD_A7": "A7",
  "VBAT": "A8",
  "PA12": "A9",
  "VLXSMPS": "B1",
  "VFBSMPS": "B2",
  "PA15": "B3",
  "PB15": "B4",
  "VREF+": "B5",
  "PC14": "B6",
  "VSS_B7": "B7",
  "PA13": "B8",
  "PA11": "B9",
  "PB3": "C1",
  "PB4": "C2",
  "PB7": "C3",
  "PB9": "C4",
  "PC15": "C5",
  "PB14": "C6",
  "PC13": "C7",
  "PA10": "C8",
  "PB5": "D2",
  "PB8": "D3",
  "PC2": "D4",
  "PC3": "D5",
  "PA0": "D6",
  "PB13": "D7",
  "PB2": "D8",
  "VSS_D9": "D9",
  "PB6": "E1",
  "VDD_E2": "E2",
  "VSS_E3": "E3",
  "PC5": "E4",
  "PA9": "E5",
  "PB12": "E6",
  "PB1": "E7",
  "VDDRF": "E8",
  "VDD_E9": "E9",
  "PC1": "F1",
  "PC0": "F2",
  "PC4": "F3",
  "PA6": "F4",
  "NRST": "F5",
  "PB0": "F6",
  "VDDRF1V55": "F7",
  "OSC_OUT": "F8",
  "PC6": "G2",
  "PA1": "G3",
  "PB11": "G4",
  "VSS_G5": "G5",
  "VSSRF_G6": "G6",
  "VSSRF_G7": "G7",
  "VSSRF_G8": "G8",
  "OSC_IN": "G9",
  "PA3": "H1",
  "PA2": "H2",
  "PA7": "H3",
  "PB10": "H4",
  "VDD_H5": "H5",
  "VSSRF_H6": "H6",
  "RFI_N": "H7",
  "VDDPA": "H8",
  "VR_PA": "H9",
  "PA4": "J1",
  "PA5": "J2",
  "PA8": "J3",
  "PH3": "J5",
  "RFI_P": "J6",
  "RFO_LP": "J8",
  "RFO_HP": "J9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSSSMPS: "power_in", VDDSMPS: "power_in", PA14: "bidirectional", VDDA: "power_in", VDD_A7: "power_in", VBAT: "power_in", PA12: "bidirectional", VLXSMPS: "power_in", VFBSMPS: "input", PA15: "bidirectional", PB15: "bidirectional", "VREF+": "input", PC14: "bidirectional", VSS_B7: "power_in", PA13: "bidirectional", PA11: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB7: "bidirectional", PB9: "bidirectional", PC15: "bidirectional", PB14: "bidirectional", PC13: "bidirectional", PA10: "bidirectional", PB5: "bidirectional", PB8: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PB13: "bidirectional", PB2: "bidirectional", VSS_D9: "passive", PB6: "bidirectional", VDD_E2: "power_in", VSS_E3: "passive", PC5: "bidirectional", PA9: "bidirectional", PB12: "bidirectional", PB1: "bidirectional", VDDRF: "power_in", VDD_E9: "power_in", PC1: "bidirectional", PC0: "bidirectional", PC4: "bidirectional", PA6: "bidirectional", NRST: "input", PB0: "bidirectional", VDDRF1V55: "power_in", OSC_OUT: "input", PC6: "bidirectional", PA1: "bidirectional", PB11: "bidirectional", VSS_G5: "passive", VSSRF_G6: "power_in", VSSRF_G7: "passive", VSSRF_G8: "passive", OSC_IN: "input", PA3: "bidirectional", PA2: "bidirectional", PA7: "bidirectional", PB10: "bidirectional", VDD_H5: "power_in", VSSRF_H6: "passive", RFI_N: "bidirectional", VDDPA: "power_in", VR_PA: "power_in", PA4: "bidirectional", PA5: "bidirectional", PA8: "bidirectional", PH3: "bidirectional", RFI_P: "bidirectional", RFO_LP: "bidirectional", RFO_HP: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_ST_STM32WL:STM32WLE5JCIx";
  override referencePrefix = "U";
}
