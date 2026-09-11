// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * CH32V003 series are industrial-grade general-purpose microcontrollers designed based on 32-bit RISC-V instruction set and architecture. It adopts QingKe V2A core, RV32EC instruction set, and supports 2 levels of interrupt nesting. The series are mounted with rich peripheral interfaces and function modules. Its internal organizational structure meets the low-cost and low-power embedded application scenarios.
 *
 * KiCad symbol: `MCU_WCH_RiscV:CH32V003AxMx`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9x9.9mm*P1.27mm*.
 * @see https://www.wch-ic.com/products/CH32V003.html
 * Keywords: RISC-V WCH MCU microcontroller.
 * Default footprint: Package_SO:STC_SOP-16_3.9x9.9mm_P1.27mm.
 */
export class CH32V003AxMx extends Component.withPins({
  "PC1": "1",
  "PC2": "2",
  "PC3": "3",
  "PC4": "4",
  "PC6": "5",
  "PC7": "6",
  "PD1": "7",
  "PD4": "8",
  "PD5": "9",
  "PD6": "10",
  "PD7": "11",
  "PA1": "12",
  "PA2": "13",
  "VSS": "14",
  "VDD": "15",
  "PC0": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD1: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", VSS: "power_in", VDD: "power_in", PC0: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_WCH_RiscV:CH32V003AxMx";
  override referencePrefix = "U";
}

/**
 * CH32V003 series are industrial-grade general-purpose microcontrollers designed based on 32-bit RISC-V instruction set and architecture. It adopts QingKe V2A core, RV32EC instruction set, and supports 2 levels of interrupt nesting. The series are mounted with rich peripheral interfaces and function modules. Its internal organizational structure meets the low-cost and low-power embedded application scenarios.
 *
 * KiCad symbol: `MCU_WCH_RiscV:CH32V003FxPx`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.wch-ic.com/products/CH32V003.html
 * Keywords: microcontroller wch RISC-V.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class CH32V003FxPx extends Component.withPins({
  "PD4": "1",
  "PD5": "2",
  "PD6": "3",
  "PD7": "4",
  "PA1": "5",
  "PA2": "6",
  "VSS": "7",
  "PD0": "8",
  "VDD": "9",
  "PC0": "10",
  "PC1": "11",
  "PC2": "12",
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
    super({ ...opts, pinTypes: { PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", VSS: "power_in", PD0: "bidirectional", VDD: "power_in", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_WCH_RiscV:CH32V003FxPx";
  override referencePrefix = "U";
}

/**
 * CH32V003 series are industrial-grade general-purpose microcontrollers designed based on 32-bit RISC-V instruction set and architecture. It adopts QingKe V2A core, RV32EC instruction set, and supports 2 levels of interrupt nesting. The series are mounted with rich peripheral interfaces and function modules. Its internal organizational structure meets the low-cost and low-power embedded application scenarios.
 *
 * KiCad symbol: `MCU_WCH_RiscV:CH32V003FxUx`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.4mm*EP1.65x1.65mm*.
 * @see https://www.wch-ic.com/products/CH32V003.html
 * Keywords: microcontroller wch RISC-V.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_3x3mm_P0.4mm_EP1.65x1.65mm.
 */
export class CH32V003FxUx extends Component.withPins({
  "PD7": "1",
  "PA1": "2",
  "PA2": "3",
  "VSS_4": "4",
  "PD0": "5",
  "VDD": "6",
  "PC0": "7",
  "PC1": "8",
  "PC2": "9",
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
  "VSS_21": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PD7: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", VSS_4: "power_in", PD0: "bidirectional", VDD: "power_in", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", VSS_21: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_WCH_RiscV:CH32V003FxUx";
  override referencePrefix = "U";
}

/**
 * CH32V003 series are industrial-grade general-purpose microcontrollers designed based on 32-bit RISC-V instruction set and architecture. It adopts QingKe V2A core, RV32EC instruction set, and supports 2 levels of interrupt nesting. The series are mounted with rich peripheral interfaces and function modules. Its internal organizational structure meets the low-cost and low-power embedded application scenarios. JEITA SOIC-8 (SOP-8)
 *
 * KiCad symbol: `MCU_WCH_RiscV:CH32V003JxMx`. Reference prefix: `U`.
 * Footprint filters: JEITA?SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.wch-ic.com/products/CH32V003.html
 * Keywords: microcontroller wch RISC-V.
 * Default footprint: Package_SO:JEITA_SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class CH32V003JxMx extends Component.withPins({
  "PD6/PA1": "1",
  "VSS": "2",
  "PA2": "3",
  "VDD": "4",
  "PC1": "5",
  "PC2": "6",
  "PC4": "7",
  "PD1/PD4/PD5": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PD6/PA1": "bidirectional", VSS: "power_in", PA2: "bidirectional", VDD: "power_in", PC1: "bidirectional", PC2: "bidirectional", PC4: "bidirectional", "PD1/PD4/PD5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_WCH_RiscV:CH32V003JxMx";
  override referencePrefix = "U";
}

/**
 * QingKe 32-bit RISC-V core, 48MHz, 32KB Flash, 6KB RAM, 11 GPIO, UQFN-12
 *
 * KiCad symbol: `MCU_WCH_RiscV:CH32V005D6U6`. Reference prefix: `U`.
 * Footprint filters: *UQFN*2x2mm?P0.4mm?EP1.1*x1.1*mm*.
 * @see https://www.wch-ic.com/downloads/CH32V006DS0_PDF.html
 * Keywords: WCH WinChipHead Nanjing-Qinheng-Microelectronics ADC I2C SPI USART microcontroller MCU.
 * Default footprint: Package_DFN_QFN:UQFN-12-1EP_2x2mm_P0.4mm_EP1.1x1.1mm.
 */
export class CH32V005D6U6 extends Component.withPins({
  "VDD": "4",
  "VSS": "13",
  "PA1": "1",
  "PA2": "2",
  "PD0": "3",
  "PC0": "5",
  "PC3": "6",
  "PC4": "7",
  "PC6": "8",
  "PC7": "9",
  "PD1": "10",
  "PD4": "11",
  "PD7": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", VSS: "power_in", PA1: "bidirectional", PA2: "bidirectional", PD0: "bidirectional", PC0: "bidirectional", PC3: "bidirectional", PC4: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PD1: "bidirectional", PD4: "bidirectional", PD7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_WCH_RiscV:CH32V005D6U6";
  override referencePrefix = "U";
}

/**
 * The CH32V203 is an industrial-grade enhanced low-power general-purpose MCU based on 32-bit RISC-V core.
 *
 * KiCad symbol: `MCU_WCH_RiscV:CH32V203CxTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.wch-ic.com/products/CH32V203.html
 * Keywords: RISC-V WCH MCU.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class CH32V203CxTx extends Component.withPins({
  "VBAT": "1",
  "VSSA": "8",
  "VDDA": "9",
  "VSS_23": "23",
  "VDD_VIO": "24",
  "BOOT0": "44",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "OSC_IN": "5",
  "OSC_OUT": "6",
  "~{RST}": "7",
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
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "SWDIO": "34",
  "VSS_35": "35",
  "VDD_36": "36",
  "SWCLK": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", VSSA: "power_in", VDDA: "power_in", VSS_23: "power_in", VDD_VIO: "power_in", BOOT0: "input", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", OSC_IN: "bidirectional", OSC_OUT: "bidirectional", "~{RST}": "input", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", SWDIO: "bidirectional", VSS_35: "passive", VDD_36: "power_in", SWCLK: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_WCH_RiscV:CH32V203CxTx";
  override referencePrefix = "U";
}

/**
 * The CH32V203 is an industrial-grade enhanced low-power general-purpose MCU based on 32-bit RISC-V core.
 *
 * KiCad symbol: `MCU_WCH_RiscV:CH32V203F6P6`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.wch-ic.com/products/CH32V203.html
 * Keywords: RISC-V WCH MCU.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class CH32V203F6P6 extends Component.withPins({
  "BOOT0": "1",
  "OSC_IN": "2",
  "OSC_OUT": "3",
  "~{RST}": "4",
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
  "PA11": "17",
  "PA12": "18",
  "SWDIO": "19",
  "SWCLK": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BOOT0: "bidirectional", OSC_IN: "bidirectional", OSC_OUT: "bidirectional", "~{RST}": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB1: "bidirectional", VSS: "power_in", VDD: "power_in", PA11: "bidirectional", PA12: "bidirectional", SWDIO: "bidirectional", SWCLK: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_WCH_RiscV:CH32V203F6P6";
  override referencePrefix = "U";
}

/**
 * NanjingQinheng WCH RISC-V MCU, 32-64KB flash, 10-20KB RAM, 144 MHz, 2.4-3.6V, 24 GPIO, ADC, OpAmp, CAN, USB, WQFN-28
 *
 * KiCad symbol: `MCU_WCH_RiscV:CH32V203GxUx`. Reference prefix: `U`.
 * Footprint filters: *QFN*4x4mm*P0.4mm*EP2.7x2.7*.
 * @see https://www.wch-ic.com/downloads/CH32V203DS0_PDF.html
 * Keywords: RISCV WCH MCU.
 * Default footprint: Package_DFN_QFN:WQFN-28-1EP_4x4mm_P0.4mm_EP2.7x2.7mm.
 */
export class CH32V203GxUx extends Component.withPins({
  "BOOT0/PB8": "1",
  "OSC_IN/PD0": "2",
  "OSC_OUT/PD1": "3",
  "~{RST}": "4",
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
  "VDD": "17",
  "PA9": "18",
  "PA10/PA11/USB_D-": "19",
  "PA12/USB_D+": "20",
  "PA13/SWDIO": "21",
  "PA14/SWCLK": "22",
  "PA15": "23",
  "PB3": "24",
  "PB4": "25",
  "PB5": "26",
  "PB6": "27",
  "PB7": "28",
  "VSS_29": "29",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "BOOT0/PB8": "bidirectional", "OSC_IN/PD0": "bidirectional", "OSC_OUT/PD1": "bidirectional", "~{RST}": "input", VDDA: "power_in", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", VSS_16: "power_in", VDD: "power_in", PA9: "bidirectional", "PA10/PA11/USB_D-": "bidirectional", "PA12/USB_D+": "bidirectional", "PA13/SWDIO": "bidirectional", "PA14/SWCLK": "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", VSS_29: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_WCH_RiscV:CH32V203GxUx";
  override referencePrefix = "U";
}

/**
 * The CH32V303/5/7 is an connectivity MCUs based on 32-bit RISC-V core.
 *
 * KiCad symbol: `MCU_WCH_RiscV:CH32V30xCxTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see http://www.wch-ic.com/products/CH32V307.html?
 * Keywords: RISC-V WCH MCU.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class CH32V30xCxTx extends Component.withPins({
  "VBAT": "1",
  "VSSA": "8",
  "VDDA": "9",
  "VSS_23": "23",
  "VDD_24": "24",
  "BOOT0": "44",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "OSC_IN": "5",
  "OSC_OUT": "6",
  "~{RST}": "7",
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
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA8": "29",
  "PA9": "30",
  "PA10": "31",
  "PA11": "32",
  "PA12": "33",
  "SWDIO": "34",
  "VSS_35": "35",
  "VDD_36": "36",
  "SWCLK": "37",
  "PA15": "38",
  "PB3": "39",
  "PB4": "40",
  "PB5": "41",
  "PB6": "42",
  "PB7": "43",
  "PB8": "45",
  "PB9": "46",
  "VSS_47": "47",
  "VDD_48": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", VSSA: "power_in", VDDA: "power_in", VSS_23: "power_in", VDD_24: "power_in", BOOT0: "input", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", OSC_IN: "bidirectional", OSC_OUT: "bidirectional", "~{RST}": "input", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", SWDIO: "bidirectional", VSS_35: "passive", VDD_36: "passive", SWCLK: "bidirectional", PA15: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", VSS_47: "passive", VDD_48: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_WCH_RiscV:CH32V30xCxTx";
  override referencePrefix = "U";
}

/**
 * The CH32V303/5/7 is an connectivity MCUs based on 32-bit RISC-V core.
 *
 * KiCad symbol: `MCU_WCH_RiscV:CH32V30xFxPx`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.wch-ic.com/products/CH32V307.html?
 * Keywords: RISC-V WCH MCU.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 */
export class CH32V30xFxPx extends Component.withPins({
  "~{RST}": "1",
  "PA1/PA5": "2",
  "PB10": "3",
  "PB11": "4",
  "PB12": "5",
  "PB13": "6",
  "PB14": "7",
  "PB15": "8",
  "PC6": "9",
  "PC7": "10",
  "PC8": "11",
  "PA8/PC9": "12",
  "SWDIO": "13",
  "VDD33": "14",
  "SWCLK": "15",
  "PB6": "16",
  "PB7": "17",
  "VSS": "18",
  "OSC_IN": "19",
  "OSC_OUT": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RST}": "input", "PA1/PA5": "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", "PA8/PC9": "bidirectional", SWDIO: "bidirectional", VDD33: "power_in", SWCLK: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", VSS: "power_in", OSC_IN: "bidirectional", OSC_OUT: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_WCH_RiscV:CH32V30xFxPx";
  override referencePrefix = "U";
}

/**
 * The CH32V303/5/7 is an connectivity MCUs based on 32-bit RISC-V core.
 *
 * KiCad symbol: `MCU_WCH_RiscV:CH32V30xRxTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*10x10mm*P0.5mm*.
 * @see http://www.wch-ic.com/products/CH32V307.html?
 * Keywords: RISC-V WCH MCU.
 * Default footprint: Package_QFP:LQFP-64_10x10mm_P0.5mm.
 */
export class CH32V30xRxTx extends Component.withPins({
  "VBAT": "1",
  "VSSA": "12",
  "VDDA": "13",
  "VSS_18": "18",
  "VDD_19": "19",
  "VIO_32": "32",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "OSC_IN": "5",
  "OSC_OUT": "6",
  "~{RST}": "7",
  "PC0": "8",
  "PC1": "9",
  "PC2": "10",
  "PC3": "11",
  "PA0": "14",
  "PA1": "15",
  "PA2": "16",
  "PA3": "17",
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
  "SWDIO": "46",
  "VSS_47": "47",
  "VDD_48": "48",
  "SWCLK": "49",
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
  "VIO_64": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", VSSA: "power_in", VDDA: "power_in", VSS_18: "power_in", VDD_19: "power_in", VIO_32: "power_in", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", OSC_IN: "bidirectional", OSC_OUT: "bidirectional", "~{RST}": "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_31: "passive", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", SWDIO: "bidirectional", VSS_47: "passive", VDD_48: "passive", SWCLK: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", VSS_63: "passive", VIO_64: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_WCH_RiscV:CH32V30xRxTx";
  override referencePrefix = "U";
}

/**
 * The CH32V303/5/7 is an connectivity MCUs based on 32-bit RISC-V core.
 *
 * KiCad symbol: `MCU_WCH_RiscV:CH32V30xVxTx`. Reference prefix: `U`.
 * Footprint filters: LQFP*14x14mm*P0.5mm*.
 * @see http://www.wch-ic.com/products/CH32V307.html?
 * Keywords: RISC-V WCH MCU.
 * Default footprint: Package_QFP:LQFP-100_14x14mm_P0.5mm.
 */
export class CH32V30xVxTx extends Component.withPins({
  "VBAT": "6",
  "VSS_10": "10",
  "VDD_11": "11",
  "OSC_IN": "12",
  "OSC_OUT": "13",
  "VSSA": "19",
  "VREF-": "20",
  "VREF+": "21",
  "VDDA": "22",
  "VIO_50": "50",
  "PE2": "1",
  "PE3": "2",
  "PE4": "3",
  "PE5": "4",
  "PE6": "5",
  "PC13": "7",
  "PC14": "8",
  "PC15": "9",
  "~{RST}": "14",
  "PC0": "15",
  "PC1": "16",
  "PC2": "17",
  "PC3": "18",
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
  "SWDIO": "72",
  "NC": "73",
  "VSS_74": "74",
  "VDD_75": "75",
  "SWCLK": "76",
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
  "VIO_100": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", VSS_10: "power_in", VDD_11: "power_in", OSC_IN: "bidirectional", OSC_OUT: "bidirectional", VSSA: "power_in", "VREF-": "input", "VREF+": "input", VDDA: "power_in", VIO_50: "power_in", PE2: "bidirectional", PE3: "bidirectional", PE4: "bidirectional", PE5: "bidirectional", PE6: "bidirectional", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", "~{RST}": "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", VSS_27: "passive", VDD_28: "passive", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PE7: "bidirectional", PE8: "bidirectional", PE9: "bidirectional", PE10: "bidirectional", PE11: "bidirectional", PE12: "bidirectional", PE13: "bidirectional", PE14: "bidirectional", PE15: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VSS_49: "passive", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PD8: "bidirectional", PD9: "bidirectional", PD10: "bidirectional", PD11: "bidirectional", PD12: "bidirectional", PD13: "bidirectional", PD14: "bidirectional", PD15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", SWDIO: "bidirectional", NC: "no_connect", VSS_74: "passive", VDD_75: "passive", SWCLK: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD0: "bidirectional", PD1: "bidirectional", PD2: "bidirectional", PD3: "bidirectional", PD4: "bidirectional", PD5: "bidirectional", PD6: "bidirectional", PD7: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", BOOT0: "input", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", PE1: "bidirectional", VSS_99: "passive", VIO_100: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_WCH_RiscV:CH32V30xVxTx";
  override referencePrefix = "U";
}

/**
 * The CH32V303/5/7 is an connectivity MCUs based on 32-bit RISC-V core.
 *
 * KiCad symbol: `MCU_WCH_RiscV:CH32V30xWxUx`. Reference prefix: `U`.
 * Footprint filters: QFN*8x8mm*P0.4mm*.
 * @see http://www.wch-ic.com/products/CH32V307.html?
 * Keywords: RISC-V WCH MCU.
 * Default footprint: Package_DFN_QFN:QFN-68-1EP_8x8mm_P0.4mm_EP6.4x6.4mm.
 */
export class CH32V30xWxUx extends Component.withPins({
  "VBAT": "1",
  "VSSA": "12",
  "VDDA": "13",
  "VIO_17": "17",
  "VSS_18": "18",
  "VDD_32": "32",
  "BOOT0": "63",
  "PC13": "2",
  "PC14": "3",
  "PC15": "4",
  "OSC_IN": "5",
  "OSC_OUT": "6",
  "~{RST}": "7",
  "PC0": "8",
  "PC1": "9",
  "PC2": "10",
  "PC3": "11",
  "PA0": "14",
  "PA1": "15",
  "PA2": "16",
  "PA3": "19",
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
  "VIO_31": "31",
  "PD8": "33",
  "PD9": "34",
  "PB12": "35",
  "PB13": "36",
  "PB14": "37",
  "PB15": "38",
  "PC6": "39",
  "PC7": "40",
  "PC8": "41",
  "PC9": "42",
  "PA8": "43",
  "PA9": "44",
  "PA10": "45",
  "PA11": "46",
  "PA12": "47",
  "SWDIO": "48",
  "VSS_49": "49",
  "VDD_50": "50",
  "VIO_51": "51",
  "SWCLK": "52",
  "PA15": "53",
  "PC10": "54",
  "PC11": "55",
  "PC12": "56",
  "PD2": "57",
  "PB3": "58",
  "PB4": "59",
  "PB5": "60",
  "PB6": "61",
  "PB7": "62",
  "PB8": "64",
  "PB9": "65",
  "PE0": "66",
  "VIO_67": "67",
  "VDD_68": "68",
  "VSS_69": "69",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VBAT: "power_in", VSSA: "power_in", VDDA: "power_in", VIO_17: "power_in", VSS_18: "power_in", VDD_32: "power_in", BOOT0: "input", PC13: "bidirectional", PC14: "bidirectional", PC15: "bidirectional", OSC_IN: "bidirectional", OSC_OUT: "bidirectional", "~{RST}": "input", PC0: "bidirectional", PC1: "bidirectional", PC2: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PC4: "bidirectional", PC5: "bidirectional", PB0: "bidirectional", PB1: "bidirectional", PB2: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", VIO_31: "passive", PD8: "bidirectional", PD9: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PC6: "bidirectional", PC7: "bidirectional", PC8: "bidirectional", PC9: "bidirectional", PA8: "bidirectional", PA9: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA12: "bidirectional", SWDIO: "bidirectional", VSS_49: "passive", VDD_50: "passive", VIO_51: "passive", SWCLK: "bidirectional", PA15: "bidirectional", PC10: "bidirectional", PC11: "bidirectional", PC12: "bidirectional", PD2: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB5: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PE0: "bidirectional", VIO_67: "passive", VDD_68: "passive", VSS_69: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_WCH_RiscV:CH32V30xWxUx";
  override referencePrefix = "U";
}

/**
 * 48MHz RISC-V MCU with USB PD phy (Sink, Source, DRP), USB 2.0 Full speed phy (Host, Device), 20KB RAM, 62KB Flash, WQFN-28
 *
 * KiCad symbol: `MCU_WCH_RiscV:CH32X035G8U6`. Reference prefix: `U`.
 * Footprint filters: *QFN*4x4mm*P0.4mm*EP2.7x2.7*.
 * @see https://www.wch-ic.com/downloads/CH32X035DS0_PDF.html
 * Keywords: microcontroller WCH Type-C.
 * Default footprint: Package_DFN_QFN:WQFN-28-1EP_4x4mm_P0.4mm_EP2.7x2.7mm.
 */
export class CH32X035G8U6 extends Component.withPins({
  "PC15/CC2": "1",
  "VDD": "2",
  "PC0": "3",
  "PC3": "4",
  "PA0": "5",
  "PA1": "6",
  "PA2": "7",
  "PA3": "8",
  "PA4": "9",
  "PA5": "10",
  "PA6": "11",
  "PA7": "12",
  "PB0": "13",
  "PB3": "14",
  "PB4": "15",
  "PB6": "17",
  "PB7": "18",
  "PB8": "19",
  "PB9": "20",
  "PB10": "21",
  "PB11": "22",
  "PB12": "23",
  "PC19/DCK": "24",
  "PC18/DIO": "25",
  "PC11/PC16/UDM": "26",
  "PC10/PC17/UDP": "27",
  "PC14/CC1": "28",
  "GND": "29",
  "PB1/PB5": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PC15/CC2": "bidirectional", VDD: "power_in", PC0: "bidirectional", PC3: "bidirectional", PA0: "bidirectional", PA1: "bidirectional", PA2: "bidirectional", PA3: "bidirectional", PA4: "bidirectional", PA5: "bidirectional", PA6: "bidirectional", PA7: "bidirectional", PB0: "bidirectional", PB3: "bidirectional", PB4: "bidirectional", PB6: "bidirectional", PB7: "bidirectional", PB8: "bidirectional", PB9: "bidirectional", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", "PC19/DCK": "bidirectional", "PC18/DIO": "bidirectional", "PC11/PC16/UDM": "bidirectional", "PC10/PC17/UDP": "bidirectional", "PC14/CC1": "bidirectional", GND: "power_in", "PB1/PB5": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_WCH_RiscV:CH32X035G8U6";
  override referencePrefix = "U";
}

/**
 * RISC-V core Bluetooth LE 5.4 MCU, USB 2.0 host / device, segment LCD driver, SPI, I2C / SMBus, 4 UART, 12-bit ADC, touch-key detection module, WQFN-28
 *
 * KiCad symbol: `MCU_WCH_RiscV:CH592F`. Reference prefix: `U`.
 * Footprint filters: *QFN*4x4mm?P0.4mm?EP2.7*x2.7*mm*.
 * @see https://www.wch-ic.com/downloads/CH592DS1_PDF.html
 * Keywords: WCH WinChipHead microcontroller Bluetooth-Low-Energy BLE.
 * Default footprint: Package_DFN_QFN:WQFN-28-1EP_4x4mm_P0.4mm_EP2.7x2.7mm.
 */
export class CH592F extends Component.withPins({
  "PA11": "1",
  "PA10": "2",
  "VDCID": "3",
  "VSW": "4",
  "VDD33/VIO33": "5",
  "PA8": "6",
  "PA9": "7",
  "PB15": "8",
  "PB14": "9",
  "PB13": "10",
  "PB12": "11",
  "PB11": "12",
  "PB10": "13",
  "PB7": "14",
  "PB4": "15",
  "PB23": "16",
  "PB22": "17",
  "~{X32MO}": "18",
  "X32MI": "19",
  "VINTA": "20",
  "ANT": "21",
  "VDCIA": "22",
  "PA4": "23",
  "PA5": "24",
  "PA15": "25",
  "PA14": "26",
  "PA13": "27",
  "PA12": "28",
  "GND": "29",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PA11: "bidirectional", PA10: "bidirectional", VDCID: "passive", VSW: "passive", "VDD33/VIO33": "power_in", PA8: "bidirectional", PA9: "bidirectional", PB15: "bidirectional", PB14: "bidirectional", PB13: "bidirectional", PB12: "bidirectional", PB11: "bidirectional", PB10: "bidirectional", PB7: "bidirectional", PB4: "bidirectional", PB23: "bidirectional", PB22: "bidirectional", "~{X32MO}": "output", X32MI: "input", VINTA: "passive", ANT: "bidirectional", VDCIA: "passive", PA4: "bidirectional", PA5: "bidirectional", PA15: "bidirectional", PA14: "bidirectional", PA13: "bidirectional", PA12: "bidirectional", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_WCH_RiscV:CH592F";
  override referencePrefix = "U";
}
