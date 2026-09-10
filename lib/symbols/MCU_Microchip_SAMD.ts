// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * ARM Cortex-M0+ MCU, 48MHz, 8KB Flash, 4KB RAM, 2.4-3.6V, 12 GPIO, SOIC-14
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD09C13A-SS`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-42414-SAM-D09_Datasheet.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class ATSAMD09C13A_SS extends Component.withPins({
  "PA05": "1",
  "PA08/XIN": "2",
  "PA09/XOUT": "3",
  "PA14": "4",
  "PA15": "5",
  "PA28/~{RST}": "6",
  "PA30/SWCLK": "7",
  "PA31/SWDIO": "8",
  "PA24": "9",
  "PA25": "10",
  "GND": "11",
  "VDD": "12",
  "PA02": "13",
  "PA04": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA05: "bidirectional", "PA08/XIN": "bidirectional", "PA09/XOUT": "bidirectional", PA14: "bidirectional", PA15: "bidirectional", "PA28/~{RST}": "bidirectional", "PA30/SWCLK": "bidirectional", "PA31/SWDIO": "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND: "power_in", VDD: "power_in", PA02: "bidirectional", PA04: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD09C13A-SS";
  override referencePrefix = "U";
}

/**
 * ARM Cortex-M0+ MCU, 48MHz, 16KB Flash, 4KB RAM, 2.4-3.6V, 22 GPIO, QFN-24
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD09D14A-M`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-42414-SAM-D09_Datasheet.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class ATSAMD09D14A_M extends Component.withPins({
  "PA02": "1",
  "PA03": "2",
  "PA04": "3",
  "PA05": "4",
  "PA06": "5",
  "PA07": "6",
  "PA08/XIN": "7",
  "PA09/XOUT": "8",
  "PA10": "9",
  "PA11": "10",
  "PA14": "11",
  "PA15": "12",
  "PA16": "13",
  "PA17": "14",
  "PA22": "15",
  "PA23": "16",
  "PA27": "17",
  "PA28/~{RST}": "18",
  "PA30/SWCLK": "19",
  "PA31/SWDIO": "20",
  "PA24": "21",
  "PA25": "22",
  "GND": "23",
  "VDD": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", "PA08/XIN": "bidirectional", "PA09/XOUT": "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA27: "bidirectional", "PA28/~{RST}": "bidirectional", "PA30/SWCLK": "bidirectional", "PA31/SWDIO": "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD09D14A-M";
  override referencePrefix = "U";
}

/**
 * ARM Cortex-M0+ MCU, 48MHz, 8KB Flash, 4KB RAM, 1.6-3.6V, 12 GPIO, SOIC-14
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD10C13A-SS`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-42242-SAM-D10_Datasheet.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class ATSAMD10C13A_SS extends Component.withPins({
  "PA05": "1",
  "PA08/XIN": "2",
  "PA09/XOUT": "3",
  "PA14": "4",
  "PA15": "5",
  "PA28/~{RST}": "6",
  "PA30/SWCLK": "7",
  "PA31/SWDIO": "8",
  "PA24": "9",
  "PA25": "10",
  "GND": "11",
  "VDD": "12",
  "PA02": "13",
  "PA04": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA05: "bidirectional", "PA08/XIN": "bidirectional", "PA09/XOUT": "bidirectional", PA14: "bidirectional", PA15: "bidirectional", "PA28/~{RST}": "bidirectional", "PA30/SWCLK": "bidirectional", "PA31/SWDIO": "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND: "power_in", VDD: "power_in", PA02: "bidirectional", PA04: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD10C13A-SS";
  override referencePrefix = "U";
}

/**
 * ARM Cortex-M0+ MCU, 48MHz, 16KB Flash, 4KB RAM, 1.6-3.6V, 12 GPIO, SOIC-14
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD10C14A-SS`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-42242-SAM-D10_Datasheet.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class ATSAMD10C14A_SS extends Component.withPins({
  "PA05": "1",
  "PA08/XIN": "2",
  "PA09/XOUT": "3",
  "PA14": "4",
  "PA15": "5",
  "PA28/~{RST}": "6",
  "PA30/SWCLK": "7",
  "PA31/SWDIO": "8",
  "PA24": "9",
  "PA25": "10",
  "GND": "11",
  "VDD": "12",
  "PA02": "13",
  "PA04": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA05: "bidirectional", "PA08/XIN": "bidirectional", "PA09/XOUT": "bidirectional", PA14: "bidirectional", PA15: "bidirectional", "PA28/~{RST}": "bidirectional", "PA30/SWCLK": "bidirectional", "PA31/SWDIO": "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND: "power_in", VDD: "power_in", PA02: "bidirectional", PA04: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD10C14A-SS";
  override referencePrefix = "U";
}

/**
 * ARM Cortex-M0+ MCU, 48MHz, 8KB Flash, 4KB RAM, 1.6-3.6V, 22 GPIO, QFN-24
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD10D13A-M`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-42242-SAM-D10_Datasheet.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class ATSAMD10D13A_M extends Component.withPins({
  "PA02": "1",
  "PA03": "2",
  "PA04": "3",
  "PA05": "4",
  "PA06": "5",
  "PA07": "6",
  "PA08/XIN": "7",
  "PA09/XOUT": "8",
  "PA10": "9",
  "PA11": "10",
  "PA14": "11",
  "PA15": "12",
  "PA16": "13",
  "PA17": "14",
  "PA22": "15",
  "PA23": "16",
  "PA27": "17",
  "PA28/~{RST}": "18",
  "PA30/SWCLK": "19",
  "PA31/SWDIO": "20",
  "PA24": "21",
  "PA25": "22",
  "GND": "23",
  "VDD": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", "PA08/XIN": "bidirectional", "PA09/XOUT": "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA27: "bidirectional", "PA28/~{RST}": "bidirectional", "PA30/SWCLK": "bidirectional", "PA31/SWDIO": "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD10D13A-M";
  override referencePrefix = "U";
}

/**
 * ARM Cortex-M0+ MCU, 48MHz, 8KB Flash, 4KB RAM, 1.6-3.6V, 18 GPIO, SOIC-20
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD10D13A-SS`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-42242-SAM-D10_Datasheet.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class ATSAMD10D13A_SS extends Component.withPins({
  "PA05": "1",
  "PA06": "2",
  "PA07": "3",
  "PA08/XIN": "4",
  "PA09/XOUT": "5",
  "PA14": "6",
  "PA15": "7",
  "PA16": "8",
  "PA22": "9",
  "PA23": "10",
  "PA28/~{RST}": "11",
  "PA30/SWCLK": "12",
  "PA31/SWDIO": "13",
  "PA24": "14",
  "PA25": "15",
  "GND": "16",
  "VDD": "17",
  "PA02": "18",
  "PA03": "19",
  "PA04": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", "PA08/XIN": "bidirectional", "PA09/XOUT": "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", "PA28/~{RST}": "bidirectional", "PA30/SWCLK": "bidirectional", "PA31/SWDIO": "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND: "power_in", VDD: "power_in", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD10D13A-SS";
  override referencePrefix = "U";
}

/**
 * ARM Cortex-M0+ MCU, 48MHz, 16KB Flash, 4KB RAM, 1.6-3.6V, 22 GPIO, QFN-24
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD10D14A-M`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-42242-SAM-D10_Datasheet.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class ATSAMD10D14A_M extends Component.withPins({
  "PA02": "1",
  "PA03": "2",
  "PA04": "3",
  "PA05": "4",
  "PA06": "5",
  "PA07": "6",
  "PA08/XIN": "7",
  "PA09/XOUT": "8",
  "PA10": "9",
  "PA11": "10",
  "PA14": "11",
  "PA15": "12",
  "PA16": "13",
  "PA17": "14",
  "PA22": "15",
  "PA23": "16",
  "PA27": "17",
  "PA28/~{RST}": "18",
  "PA30/SWCLK": "19",
  "PA31/SWDIO": "20",
  "PA24": "21",
  "PA25": "22",
  "GND": "23",
  "VDD": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", "PA08/XIN": "bidirectional", "PA09/XOUT": "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA27: "bidirectional", "PA28/~{RST}": "bidirectional", "PA30/SWCLK": "bidirectional", "PA31/SWDIO": "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD10D14A-M";
  override referencePrefix = "U";
}

/**
 * ARM Cortex-M0+ MCU, 48MHz, 16KB Flash, 4KB RAM, 1.6-3.6V, 18 GPIO, SOIC-20
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD10D14A-SS`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-42242-SAM-D10_Datasheet.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class ATSAMD10D14A_SS extends Component.withPins({
  "PA05": "1",
  "PA06": "2",
  "PA07": "3",
  "PA08/XIN": "4",
  "PA09/XOUT": "5",
  "PA14": "6",
  "PA15": "7",
  "PA16": "8",
  "PA22": "9",
  "PA23": "10",
  "PA28/~{RST}": "11",
  "PA30/SWCLK": "12",
  "PA31/SWDIO": "13",
  "PA24": "14",
  "PA25": "15",
  "GND": "16",
  "VDD": "17",
  "PA02": "18",
  "PA03": "19",
  "PA04": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", "PA08/XIN": "bidirectional", "PA09/XOUT": "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", "PA28/~{RST}": "bidirectional", "PA30/SWCLK": "bidirectional", "PA31/SWDIO": "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND: "power_in", VDD: "power_in", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD10D14A-SS";
  override referencePrefix = "U";
}

/**
 * ARM Cortex-M0+ MCU, 48MHz, 16KB Flash, 4KB RAM, 1.6-3.6V, 18 GPIO, WLCSP-20
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD10D14A-U`. Reference prefix: `U`.
 * Footprint filters: WLCSP*1.934x2.434mm*Layout4x5*P0.4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-42242-SAM-D10_Datasheet.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_CSP:WLCSP-20_1.934x2.434mm_Layout4x5_P0.4mm.
 */
export class ATSAMD10D14A_U extends Component.withPins({
  "PA02": "A1",
  "PA03": "A2",
  "PA04": "A3",
  "PA06": "A4",
  "VDD": "B1",
  "PA05": "B2",
  "PA07": "B3",
  "PA08/XIN": "B4",
  "PA25": "C1",
  "GND": "C2",
  "PA16": "C3",
  "PA09/XOUT": "C4",
  "PA24": "D1",
  "PA30/SWCLK": "D2",
  "PA23": "D3",
  "PA14": "D4",
  "PA31/SWDIO": "E1",
  "PA28/~{RST}": "E2",
  "PA22": "E3",
  "PA15": "E4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA06: "bidirectional", VDD: "power_in", PA05: "bidirectional", PA07: "bidirectional", "PA08/XIN": "bidirectional", PA25: "bidirectional", GND: "power_in", PA16: "bidirectional", "PA09/XOUT": "bidirectional", PA24: "bidirectional", "PA30/SWCLK": "bidirectional", PA23: "bidirectional", PA14: "bidirectional", "PA31/SWDIO": "bidirectional", "PA28/~{RST}": "bidirectional", PA22: "bidirectional", PA15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD10D14A-U";
  override referencePrefix = "U";
}

/**
 * ARM Cortex-M0+ MCU, 48MHz, 16KB Flash, 4KB RAM, 1.6-3.6V, 18 GPIO, SOIC-14
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD11C14A-SS`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-42363-SAM-D11_Datasheet.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class ATSAMD11C14A_SS extends Component.withPins({
  "PA05": "1",
  "PA08/XIN": "2",
  "PA09/XOUT": "3",
  "PA14": "4",
  "PA15": "5",
  "PA28/~{RST}": "6",
  "PA30/SWCLK": "7",
  "PA31/SWDIO": "8",
  "PA24": "9",
  "PA25": "10",
  "GND": "11",
  "VDD": "12",
  "PA02": "13",
  "PA04": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA05: "bidirectional", "PA08/XIN": "bidirectional", "PA09/XOUT": "bidirectional", PA14: "bidirectional", PA15: "bidirectional", "PA28/~{RST}": "bidirectional", "PA30/SWCLK": "bidirectional", "PA31/SWDIO": "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND: "power_in", VDD: "power_in", PA02: "bidirectional", PA04: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD11C14A-SS";
  override referencePrefix = "U";
}

/**
 * ARM Cortex-M0+ MCU, 48MHz, 16KB Flash, 4KB RAM, 1.6-3.6V, 22 GPIO, QFN-24
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD11D14A-M`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-42363-SAM-D11_Datasheet.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class ATSAMD11D14A_M extends Component.withPins({
  "PA02": "1",
  "PA03": "2",
  "PA04": "3",
  "PA05": "4",
  "PA06": "5",
  "PA07": "6",
  "PA08/XIN": "7",
  "PA09/XOUT": "8",
  "PA10": "9",
  "PA11": "10",
  "PA14": "11",
  "PA15": "12",
  "PA16": "13",
  "PA17": "14",
  "PA22": "15",
  "PA23": "16",
  "PA27": "17",
  "PA28/~{RST}": "18",
  "PA30/SWCLK": "19",
  "PA31/SWDIO": "20",
  "PA24": "21",
  "PA25": "22",
  "GND": "23",
  "VDD": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", "PA08/XIN": "bidirectional", "PA09/XOUT": "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA27: "bidirectional", "PA28/~{RST}": "bidirectional", "PA30/SWCLK": "bidirectional", "PA31/SWDIO": "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD11D14A-M";
  override referencePrefix = "U";
}

/**
 * ARM Cortex-M0+ MCU, 48MHz, 16KB Flash, 4KB RAM, 1.6-3.6V, 18 GPIO, SOIC-20
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD11D14A-SS`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-42363-SAM-D11_Datasheet.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 */
export class ATSAMD11D14A_SS extends Component.withPins({
  "PA05": "1",
  "PA06": "2",
  "PA07": "3",
  "PA08/XIN": "4",
  "PA09/XOUT": "5",
  "PA14": "6",
  "PA15": "7",
  "PA16": "8",
  "PA22": "9",
  "PA23": "10",
  "PA28/~{RST}": "11",
  "PA30/SWCLK": "12",
  "PA31/SWDIO": "13",
  "PA24": "14",
  "PA25": "15",
  "GND": "16",
  "VDD": "17",
  "PA02": "18",
  "PA03": "19",
  "PA04": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", "PA08/XIN": "bidirectional", "PA09/XOUT": "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", "PA28/~{RST}": "bidirectional", "PA30/SWCLK": "bidirectional", "PA31/SWDIO": "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND: "power_in", VDD: "power_in", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD11D14A-SS";
  override referencePrefix = "U";
}

/**
 * ARM Cortex-M0+ MCU, 48MHz, 16KB Flash, 4KB RAM, 1.6-3.6V, 18 GPIO, WLCSP-20
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD11D14A-U`. Reference prefix: `U`.
 * Footprint filters: WLCSP*1.934x2.434mm*Layout4x5*P0.4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-42363-SAM-D11_Datasheet.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_CSP:WLCSP-20_1.934x2.434mm_Layout4x5_P0.4mm.
 */
export class ATSAMD11D14A_U extends Component.withPins({
  "PA02": "A1",
  "PA03": "A2",
  "PA04": "A3",
  "PA06": "A4",
  "VDD": "B1",
  "PA05": "B2",
  "PA07": "B3",
  "PA08/XIN": "B4",
  "PA25": "C1",
  "GND": "C2",
  "PA16": "C3",
  "PA09/XOUT": "C4",
  "PA24": "D1",
  "PA30/SWCLK": "D2",
  "PA23": "D3",
  "PA14": "D4",
  "PA31/SWDIO": "E1",
  "PA28/~{RST}": "E2",
  "PA22": "E3",
  "PA15": "E4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA06: "bidirectional", VDD: "power_in", PA05: "bidirectional", PA07: "bidirectional", "PA08/XIN": "bidirectional", PA25: "bidirectional", GND: "power_in", PA16: "bidirectional", "PA09/XOUT": "bidirectional", PA24: "bidirectional", "PA30/SWCLK": "bidirectional", PA23: "bidirectional", PA14: "bidirectional", "PA31/SWDIO": "bidirectional", "PA28/~{RST}": "bidirectional", PA22: "bidirectional", PA15: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD11D14A-U";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 32K Flash, 4K SRAM, TQFP-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21E15A-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-32_7x7mm_P0.8mm.
 */
export class ATSAMD21E15A_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "PA27": "25",
  "~{RESET}": "26",
  "PA28": "27",
  "GND_28": "28",
  "VDDCORE": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_28: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21E15A-A";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 32K Flash, 4K SRAM, QFN-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21E15A-M`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 */
export class ATSAMD21E15A_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "PA27": "25",
  "~{RESET}": "26",
  "PA28": "27",
  "GND_28": "28",
  "VDDCORE": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
  "EP": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_28: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21E15A-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 32K Flash w/ 1K RWW, 4K SRAM, TQFP-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21E15B-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-32_7x7mm_P0.8mm.
 */
export class ATSAMD21E15B_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "PA27": "25",
  "~{RESET}": "26",
  "PA28": "27",
  "GND_28": "28",
  "VDDCORE": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_28: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21E15B-A";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 32K Flash w/ 1K RWW, 4K SRAM, QFN-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21E15B-M`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 */
export class ATSAMD21E15B_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "PA27": "25",
  "~{RESET}": "26",
  "PA28": "27",
  "GND_28": "28",
  "VDDCORE": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
  "EP": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_28: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21E15B-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 32K Flash w/ 1K RWW, 4K SRAM, Pinout Optimized for Analog & PWM, TQFP-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21E15L-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-32_7x7mm_P0.8mm.
 */
export class ATSAMD21E15L_A extends Component.withPins({
  "PA02": "1",
  "PA03": "2",
  "PB04": "3",
  "PB05": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDIO/VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "~{RESET}": "25",
  "GND_26": "26",
  "VDDCORE": "27",
  "VDDIO": "28",
  "PA30": "29",
  "PA31": "30",
  "PB02": "31",
  "PB03": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", "VDDIO/VDDANA": "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", "~{RESET}": "input", GND_26: "passive", VDDCORE: "power_out", VDDIO: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21E15L-A";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 32K Flash w/ 1K RWW, 4K SRAM, Pinout Optimized for Analog & PWM, QFN-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21E15L-M`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 */
export class ATSAMD21E15L_M extends Component.withPins({
  "PA02": "1",
  "PA03": "2",
  "PB04": "3",
  "PB05": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDIO/VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "~{RESET}": "25",
  "GND_26": "26",
  "VDDCORE": "27",
  "VDDIO": "28",
  "PA30": "29",
  "PA31": "30",
  "PB02": "31",
  "PB03": "32",
  "EP": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", "VDDIO/VDDANA": "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", "~{RESET}": "input", GND_26: "passive", VDDCORE: "power_out", VDDIO: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21E15L-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash, 8K SRAM, TQFP-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21E16A-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-32_7x7mm_P0.8mm.
 */
export class ATSAMD21E16A_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "PA27": "25",
  "~{RESET}": "26",
  "PA28": "27",
  "GND_28": "28",
  "VDDCORE": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_28: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21E16A-A";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash, 8K SRAM, QFN-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21E16A-M`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 */
export class ATSAMD21E16A_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "PA27": "25",
  "~{RESET}": "26",
  "PA28": "27",
  "GND_28": "28",
  "VDDCORE": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
  "EP": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_28: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21E16A-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash w/ 2K RWW, 8K SRAM, TQFP-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21E16B-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-32_7x7mm_P0.8mm.
 */
export class ATSAMD21E16B_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "PA27": "25",
  "~{RESET}": "26",
  "PA28": "27",
  "GND_28": "28",
  "VDDCORE": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_28: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21E16B-A";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash w/ 2K RWW, 8K SRAM, QFN-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21E16B-M`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 */
export class ATSAMD21E16B_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "PA27": "25",
  "~{RESET}": "26",
  "PA28": "27",
  "GND_28": "28",
  "VDDCORE": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
  "EP": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_28: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21E16B-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash w/ 2K RWW, 8K SRAM, Pinout Optimized for Analog & PWM, TQFP-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21E16L-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-32_7x7mm_P0.8mm.
 */
export class ATSAMD21E16L_A extends Component.withPins({
  "PA02": "1",
  "PA03": "2",
  "PB04": "3",
  "PB05": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDIO/VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "~{RESET}": "25",
  "GND_26": "26",
  "VDDCORE": "27",
  "VDDIO": "28",
  "PA30": "29",
  "PA31": "30",
  "PB02": "31",
  "PB03": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", "VDDIO/VDDANA": "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", "~{RESET}": "input", GND_26: "passive", VDDCORE: "power_out", VDDIO: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21E16L-A";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash w/ 2K RWW, 8K SRAM, Pinout Optimized for Analog & PWM, QFN-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21E16L-M`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 */
export class ATSAMD21E16L_M extends Component.withPins({
  "PA02": "1",
  "PA03": "2",
  "PB04": "3",
  "PB05": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDIO/VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "~{RESET}": "25",
  "GND_26": "26",
  "VDDCORE": "27",
  "VDDIO": "28",
  "PA30": "29",
  "PA31": "30",
  "PB02": "31",
  "PB03": "32",
  "EP": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", "VDDIO/VDDANA": "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", "~{RESET}": "input", GND_26: "passive", VDDCORE: "power_out", VDDIO: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21E16L-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 128K Flash, 16K SRAM, TQFP-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21E17A-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-32_7x7mm_P0.8mm.
 */
export class ATSAMD21E17A_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "PA27": "25",
  "~{RESET}": "26",
  "PA28": "27",
  "GND_28": "28",
  "VDDCORE": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_28: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21E17A-A";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 128K Flash, 16K SRAM, QFN-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21E17A-M`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 */
export class ATSAMD21E17A_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "PA27": "25",
  "~{RESET}": "26",
  "PA28": "27",
  "GND_28": "28",
  "VDDCORE": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
  "EP": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_28: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21E17A-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 128K Flash w/ 4K RWW, 16K SRAM, TQFP-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21E17D-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-32_7x7mm_P0.8mm.
 */
export class ATSAMD21E17D_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "PA27": "25",
  "~{RESET}": "26",
  "PA28": "27",
  "GND_28": "28",
  "VDDCORE": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_28: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21E17D-A";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 128K Flash w/ 4K RWW, 16K SRAM, QFN-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21E17D-M`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 */
export class ATSAMD21E17D_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "PA27": "25",
  "~{RESET}": "26",
  "PA28": "27",
  "GND_28": "28",
  "VDDCORE": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
  "EP": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_28: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21E17D-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 128K Flash w/ 4K RWW, 16K SRAM, Pinout Optimized for Analog & PWM, TQFP-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21E17L-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-32_7x7mm_P0.8mm.
 */
export class ATSAMD21E17L_A extends Component.withPins({
  "PA02": "1",
  "PA03": "2",
  "PB04": "3",
  "PB05": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDIO/VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "~{RESET}": "25",
  "GND_26": "26",
  "VDDCORE": "27",
  "VDDIO": "28",
  "PA30": "29",
  "PA31": "30",
  "PB02": "31",
  "PB03": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", "VDDIO/VDDANA": "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", "~{RESET}": "input", GND_26: "passive", VDDCORE: "power_out", VDDIO: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21E17L-A";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 128K Flash w/ 4K RWW, 16K SRAM, Pinout Optimized for Analog & PWM, QFN-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21E17L-M`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 */
export class ATSAMD21E17L_M extends Component.withPins({
  "PA02": "1",
  "PA03": "2",
  "PB04": "3",
  "PB05": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDIO/VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "~{RESET}": "25",
  "GND_26": "26",
  "VDDCORE": "27",
  "VDDIO": "28",
  "PA30": "29",
  "PA31": "30",
  "PB02": "31",
  "PB03": "32",
  "EP": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", "VDDIO/VDDANA": "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", "~{RESET}": "input", GND_26: "passive", VDDCORE: "power_out", VDDIO: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21E17L-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 256K Flash, 32K SRAM, TQFP-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21E18A-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-32_7x7mm_P0.8mm.
 */
export class ATSAMD21E18A_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "PA27": "25",
  "~{RESET}": "26",
  "PA28": "27",
  "GND_28": "28",
  "VDDCORE": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_28: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21E18A-A";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 256K Flash, 32K SRAM, QFN-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21E18A-M`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 */
export class ATSAMD21E18A_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "PA27": "25",
  "~{RESET}": "26",
  "PA28": "27",
  "GND_28": "28",
  "VDDCORE": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
  "EP": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_28: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21E18A-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 32K Flash, 4K SRAM, TQFP-48
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21G15A-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class ATSAMD21G15A_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "GNDANA": "5",
  "VDDANA": "6",
  "PB08": "7",
  "PB09": "8",
  "PA04": "9",
  "PA05": "10",
  "PA06": "11",
  "PA07": "12",
  "PA08": "13",
  "PA09": "14",
  "PA10": "15",
  "PA11": "16",
  "VDDIO_17": "17",
  "GND_18": "18",
  "PB10": "19",
  "PB11": "20",
  "PA12": "21",
  "PA13": "22",
  "PA14": "23",
  "PA15": "24",
  "PA16": "25",
  "PA17": "26",
  "PA18": "27",
  "PA19": "28",
  "PA20": "29",
  "PA21": "30",
  "PA22": "31",
  "PA23": "32",
  "PA24": "33",
  "PA25": "34",
  "GND_35": "35",
  "VDDIO_36": "36",
  "PB22": "37",
  "PB23": "38",
  "PA27": "39",
  "~{RESET}": "40",
  "PA28": "41",
  "GND_42": "42",
  "VDDCORE": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_42: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21G15A-A";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 32K Flash, 4K SRAM, QFN-48
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21G15A-M`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class ATSAMD21G15A_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "GNDANA": "5",
  "VDDANA": "6",
  "PB08": "7",
  "PB09": "8",
  "PA04": "9",
  "PA05": "10",
  "PA06": "11",
  "PA07": "12",
  "PA08": "13",
  "PA09": "14",
  "PA10": "15",
  "PA11": "16",
  "VDDIO_17": "17",
  "GND_18": "18",
  "PB10": "19",
  "PB11": "20",
  "PA12": "21",
  "PA13": "22",
  "PA14": "23",
  "PA15": "24",
  "PA16": "25",
  "PA17": "26",
  "PA18": "27",
  "PA19": "28",
  "PA20": "29",
  "PA21": "30",
  "PA22": "31",
  "PA23": "32",
  "PA24": "33",
  "PA25": "34",
  "GND_35": "35",
  "VDDIO_36": "36",
  "PB22": "37",
  "PB23": "38",
  "PA27": "39",
  "~{RESET}": "40",
  "PA28": "41",
  "GND_42": "42",
  "VDDCORE": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
  "EP": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_42: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21G15A-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 32K Flash w/ 1K RWW, 4K SRAM, TQFP-48
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21G15B-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class ATSAMD21G15B_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "GNDANA": "5",
  "VDDANA": "6",
  "PB08": "7",
  "PB09": "8",
  "PA04": "9",
  "PA05": "10",
  "PA06": "11",
  "PA07": "12",
  "PA08": "13",
  "PA09": "14",
  "PA10": "15",
  "PA11": "16",
  "VDDIO_17": "17",
  "GND_18": "18",
  "PB10": "19",
  "PB11": "20",
  "PA12": "21",
  "PA13": "22",
  "PA14": "23",
  "PA15": "24",
  "PA16": "25",
  "PA17": "26",
  "PA18": "27",
  "PA19": "28",
  "PA20": "29",
  "PA21": "30",
  "PA22": "31",
  "PA23": "32",
  "PA24": "33",
  "PA25": "34",
  "GND_35": "35",
  "VDDIO_36": "36",
  "PB22": "37",
  "PB23": "38",
  "PA27": "39",
  "~{RESET}": "40",
  "PA28": "41",
  "GND_42": "42",
  "VDDCORE": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_42: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21G15B-A";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 32K Flash w/ 1K RWW, 4K SRAM, QFN-48
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21G15B-M`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class ATSAMD21G15B_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "GNDANA": "5",
  "VDDANA": "6",
  "PB08": "7",
  "PB09": "8",
  "PA04": "9",
  "PA05": "10",
  "PA06": "11",
  "PA07": "12",
  "PA08": "13",
  "PA09": "14",
  "PA10": "15",
  "PA11": "16",
  "VDDIO_17": "17",
  "GND_18": "18",
  "PB10": "19",
  "PB11": "20",
  "PA12": "21",
  "PA13": "22",
  "PA14": "23",
  "PA15": "24",
  "PA16": "25",
  "PA17": "26",
  "PA18": "27",
  "PA19": "28",
  "PA20": "29",
  "PA21": "30",
  "PA22": "31",
  "PA23": "32",
  "PA24": "33",
  "PA25": "34",
  "GND_35": "35",
  "VDDIO_36": "36",
  "PB22": "37",
  "PB23": "38",
  "PA27": "39",
  "~{RESET}": "40",
  "PA28": "41",
  "GND_42": "42",
  "VDDCORE": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
  "EP": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_42: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21G15B-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash, 8K SRAM, TQFP-48
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21G16A-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class ATSAMD21G16A_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "GNDANA": "5",
  "VDDANA": "6",
  "PB08": "7",
  "PB09": "8",
  "PA04": "9",
  "PA05": "10",
  "PA06": "11",
  "PA07": "12",
  "PA08": "13",
  "PA09": "14",
  "PA10": "15",
  "PA11": "16",
  "VDDIO_17": "17",
  "GND_18": "18",
  "PB10": "19",
  "PB11": "20",
  "PA12": "21",
  "PA13": "22",
  "PA14": "23",
  "PA15": "24",
  "PA16": "25",
  "PA17": "26",
  "PA18": "27",
  "PA19": "28",
  "PA20": "29",
  "PA21": "30",
  "PA22": "31",
  "PA23": "32",
  "PA24": "33",
  "PA25": "34",
  "GND_35": "35",
  "VDDIO_36": "36",
  "PB22": "37",
  "PB23": "38",
  "PA27": "39",
  "~{RESET}": "40",
  "PA28": "41",
  "GND_42": "42",
  "VDDCORE": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_42: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21G16A-A";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash, 8K SRAM, QFN-48
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21G16A-M`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class ATSAMD21G16A_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "GNDANA": "5",
  "VDDANA": "6",
  "PB08": "7",
  "PB09": "8",
  "PA04": "9",
  "PA05": "10",
  "PA06": "11",
  "PA07": "12",
  "PA08": "13",
  "PA09": "14",
  "PA10": "15",
  "PA11": "16",
  "VDDIO_17": "17",
  "GND_18": "18",
  "PB10": "19",
  "PB11": "20",
  "PA12": "21",
  "PA13": "22",
  "PA14": "23",
  "PA15": "24",
  "PA16": "25",
  "PA17": "26",
  "PA18": "27",
  "PA19": "28",
  "PA20": "29",
  "PA21": "30",
  "PA22": "31",
  "PA23": "32",
  "PA24": "33",
  "PA25": "34",
  "GND_35": "35",
  "VDDIO_36": "36",
  "PB22": "37",
  "PB23": "38",
  "PA27": "39",
  "~{RESET}": "40",
  "PA28": "41",
  "GND_42": "42",
  "VDDCORE": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
  "EP": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_42: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21G16A-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash w/ 2K RWW, 8K SRAM, TQFP-48
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21G16B-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class ATSAMD21G16B_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "GNDANA": "5",
  "VDDANA": "6",
  "PB08": "7",
  "PB09": "8",
  "PA04": "9",
  "PA05": "10",
  "PA06": "11",
  "PA07": "12",
  "PA08": "13",
  "PA09": "14",
  "PA10": "15",
  "PA11": "16",
  "VDDIO_17": "17",
  "GND_18": "18",
  "PB10": "19",
  "PB11": "20",
  "PA12": "21",
  "PA13": "22",
  "PA14": "23",
  "PA15": "24",
  "PA16": "25",
  "PA17": "26",
  "PA18": "27",
  "PA19": "28",
  "PA20": "29",
  "PA21": "30",
  "PA22": "31",
  "PA23": "32",
  "PA24": "33",
  "PA25": "34",
  "GND_35": "35",
  "VDDIO_36": "36",
  "PB22": "37",
  "PB23": "38",
  "PA27": "39",
  "~{RESET}": "40",
  "PA28": "41",
  "GND_42": "42",
  "VDDCORE": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_42: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21G16B-A";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash w/ 2K RWW, 8K SRAM, QFN-48
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21G16B-M`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class ATSAMD21G16B_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "GNDANA": "5",
  "VDDANA": "6",
  "PB08": "7",
  "PB09": "8",
  "PA04": "9",
  "PA05": "10",
  "PA06": "11",
  "PA07": "12",
  "PA08": "13",
  "PA09": "14",
  "PA10": "15",
  "PA11": "16",
  "VDDIO_17": "17",
  "GND_18": "18",
  "PB10": "19",
  "PB11": "20",
  "PA12": "21",
  "PA13": "22",
  "PA14": "23",
  "PA15": "24",
  "PA16": "25",
  "PA17": "26",
  "PA18": "27",
  "PA19": "28",
  "PA20": "29",
  "PA21": "30",
  "PA22": "31",
  "PA23": "32",
  "PA24": "33",
  "PA25": "34",
  "GND_35": "35",
  "VDDIO_36": "36",
  "PB22": "37",
  "PB23": "38",
  "PA27": "39",
  "~{RESET}": "40",
  "PA28": "41",
  "GND_42": "42",
  "VDDCORE": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
  "EP": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_42: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21G16B-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash w/ 2K RWW, 8K SRAM, Pinout Optimized for Analog & PWM, QFN-48
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21G16L-M`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class ATSAMD21G16L_M extends Component.withPins({
  "PA02": "1",
  "PA03": "2",
  "PB04": "3",
  "PB05": "4",
  "GNDANA": "5",
  "VDDANA": "6",
  "PB08": "7",
  "PB09": "8",
  "PA04": "9",
  "PA05": "10",
  "PA06": "11",
  "PA07": "12",
  "PA08": "13",
  "PA09": "14",
  "PA10": "15",
  "PA11": "16",
  "VDDIO_17": "17",
  "GND_18": "18",
  "PB10": "19",
  "PB11": "20",
  "PA12": "21",
  "PA13": "22",
  "PA14": "23",
  "PA15": "24",
  "PA16": "25",
  "PA17": "26",
  "PA18": "27",
  "PA19": "28",
  "PA20": "29",
  "PA21": "30",
  "PA22": "31",
  "PA23": "32",
  "PA24": "33",
  "PA25": "34",
  "GND_35": "35",
  "VDDIO_36": "36",
  "PA27": "37",
  "~{RESET}": "38",
  "PA28": "39",
  "GND_40": "40",
  "VDDCORE": "41",
  "VDDIN": "42",
  "PA30": "43",
  "PA31": "44",
  "PB00": "45",
  "PB01": "46",
  "PB02": "47",
  "PB03": "48",
  "EP": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "power_in", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_40: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21G16L-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 128K Flash, 16K SRAM, TQFP-48
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21G17A-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class ATSAMD21G17A_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "GNDANA": "5",
  "VDDANA": "6",
  "PB08": "7",
  "PB09": "8",
  "PA04": "9",
  "PA05": "10",
  "PA06": "11",
  "PA07": "12",
  "PA08": "13",
  "PA09": "14",
  "PA10": "15",
  "PA11": "16",
  "VDDIO_17": "17",
  "GND_18": "18",
  "PB10": "19",
  "PB11": "20",
  "PA12": "21",
  "PA13": "22",
  "PA14": "23",
  "PA15": "24",
  "PA16": "25",
  "PA17": "26",
  "PA18": "27",
  "PA19": "28",
  "PA20": "29",
  "PA21": "30",
  "PA22": "31",
  "PA23": "32",
  "PA24": "33",
  "PA25": "34",
  "GND_35": "35",
  "VDDIO_36": "36",
  "PB22": "37",
  "PB23": "38",
  "PA27": "39",
  "~{RESET}": "40",
  "PA28": "41",
  "GND_42": "42",
  "VDDCORE": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_42: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21G17A-A";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 128K Flash, 16K SRAM, QFN-48
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21G17A-M`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class ATSAMD21G17A_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "GNDANA": "5",
  "VDDANA": "6",
  "PB08": "7",
  "PB09": "8",
  "PA04": "9",
  "PA05": "10",
  "PA06": "11",
  "PA07": "12",
  "PA08": "13",
  "PA09": "14",
  "PA10": "15",
  "PA11": "16",
  "VDDIO_17": "17",
  "GND_18": "18",
  "PB10": "19",
  "PB11": "20",
  "PA12": "21",
  "PA13": "22",
  "PA14": "23",
  "PA15": "24",
  "PA16": "25",
  "PA17": "26",
  "PA18": "27",
  "PA19": "28",
  "PA20": "29",
  "PA21": "30",
  "PA22": "31",
  "PA23": "32",
  "PA24": "33",
  "PA25": "34",
  "GND_35": "35",
  "VDDIO_36": "36",
  "PB22": "37",
  "PB23": "38",
  "PA27": "39",
  "~{RESET}": "40",
  "PA28": "41",
  "GND_42": "42",
  "VDDCORE": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
  "EP": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_42: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21G17A-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 128K Flash w/ 4K RWW, 16K SRAM, TQFP-48
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21G17D-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class ATSAMD21G17D_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "GNDANA": "5",
  "VDDANA": "6",
  "PB08": "7",
  "PB09": "8",
  "PA04": "9",
  "PA05": "10",
  "PA06": "11",
  "PA07": "12",
  "PA08": "13",
  "PA09": "14",
  "PA10": "15",
  "PA11": "16",
  "VDDIO_17": "17",
  "GND_18": "18",
  "PB10": "19",
  "PB11": "20",
  "PA12": "21",
  "PA13": "22",
  "PA14": "23",
  "PA15": "24",
  "PA16": "25",
  "PA17": "26",
  "PA18": "27",
  "PA19": "28",
  "PA20": "29",
  "PA21": "30",
  "PA22": "31",
  "PA23": "32",
  "PA24": "33",
  "PA25": "34",
  "GND_35": "35",
  "VDDIO_36": "36",
  "PB22": "37",
  "PB23": "38",
  "PA27": "39",
  "~{RESET}": "40",
  "PA28": "41",
  "GND_42": "42",
  "VDDCORE": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_42: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21G17D-A";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 128K Flash w/ 4K RWW, 16K SRAM, QFN-48
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21G17D-M`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class ATSAMD21G17D_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "GNDANA": "5",
  "VDDANA": "6",
  "PB08": "7",
  "PB09": "8",
  "PA04": "9",
  "PA05": "10",
  "PA06": "11",
  "PA07": "12",
  "PA08": "13",
  "PA09": "14",
  "PA10": "15",
  "PA11": "16",
  "VDDIO_17": "17",
  "GND_18": "18",
  "PB10": "19",
  "PB11": "20",
  "PA12": "21",
  "PA13": "22",
  "PA14": "23",
  "PA15": "24",
  "PA16": "25",
  "PA17": "26",
  "PA18": "27",
  "PA19": "28",
  "PA20": "29",
  "PA21": "30",
  "PA22": "31",
  "PA23": "32",
  "PA24": "33",
  "PA25": "34",
  "GND_35": "35",
  "VDDIO_36": "36",
  "PB22": "37",
  "PB23": "38",
  "PA27": "39",
  "~{RESET}": "40",
  "PA28": "41",
  "GND_42": "42",
  "VDDCORE": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
  "EP": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_42: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21G17D-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 128K Flash w/ 4K RWW, 16K SRAM, Pinout Optimized for Analog & PWM, QFN-48
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21G17L-M`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class ATSAMD21G17L_M extends Component.withPins({
  "PA02": "1",
  "PA03": "2",
  "PB04": "3",
  "PB05": "4",
  "GNDANA": "5",
  "VDDANA": "6",
  "PB08": "7",
  "PB09": "8",
  "PA04": "9",
  "PA05": "10",
  "PA06": "11",
  "PA07": "12",
  "PA08": "13",
  "PA09": "14",
  "PA10": "15",
  "PA11": "16",
  "VDDIO_17": "17",
  "GND_18": "18",
  "PB10": "19",
  "PB11": "20",
  "PA12": "21",
  "PA13": "22",
  "PA14": "23",
  "PA15": "24",
  "PA16": "25",
  "PA17": "26",
  "PA18": "27",
  "PA19": "28",
  "PA20": "29",
  "PA21": "30",
  "PA22": "31",
  "PA23": "32",
  "PA24": "33",
  "PA25": "34",
  "GND_35": "35",
  "VDDIO_36": "36",
  "PA27": "37",
  "~{RESET}": "38",
  "PA28": "39",
  "GND_40": "40",
  "VDDCORE": "41",
  "VDDIN": "42",
  "PA30": "43",
  "PA31": "44",
  "PB00": "45",
  "PB01": "46",
  "PB02": "47",
  "PB03": "48",
  "EP": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "power_in", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_40: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21G17L-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 256K Flash, 32K SRAM, TQFP-48
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21G18A-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class ATSAMD21G18A_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "GNDANA": "5",
  "VDDANA": "6",
  "PB08": "7",
  "PB09": "8",
  "PA04": "9",
  "PA05": "10",
  "PA06": "11",
  "PA07": "12",
  "PA08": "13",
  "PA09": "14",
  "PA10": "15",
  "PA11": "16",
  "VDDIO_17": "17",
  "GND_18": "18",
  "PB10": "19",
  "PB11": "20",
  "PA12": "21",
  "PA13": "22",
  "PA14": "23",
  "PA15": "24",
  "PA16": "25",
  "PA17": "26",
  "PA18": "27",
  "PA19": "28",
  "PA20": "29",
  "PA21": "30",
  "PA22": "31",
  "PA23": "32",
  "PA24": "33",
  "PA25": "34",
  "GND_35": "35",
  "VDDIO_36": "36",
  "PB22": "37",
  "PB23": "38",
  "PA27": "39",
  "~{RESET}": "40",
  "PA28": "41",
  "GND_42": "42",
  "VDDCORE": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_42: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21G18A-A";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 256K Flash, 32K SRAM, QFN-48
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21G18A-M`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class ATSAMD21G18A_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "GNDANA": "5",
  "VDDANA": "6",
  "PB08": "7",
  "PB09": "8",
  "PA04": "9",
  "PA05": "10",
  "PA06": "11",
  "PA07": "12",
  "PA08": "13",
  "PA09": "14",
  "PA10": "15",
  "PA11": "16",
  "VDDIO_17": "17",
  "GND_18": "18",
  "PB10": "19",
  "PB11": "20",
  "PA12": "21",
  "PA13": "22",
  "PA14": "23",
  "PA15": "24",
  "PA16": "25",
  "PA17": "26",
  "PA18": "27",
  "PA19": "28",
  "PA20": "29",
  "PA21": "30",
  "PA22": "31",
  "PA23": "32",
  "PA24": "33",
  "PA25": "34",
  "GND_35": "35",
  "VDDIO_36": "36",
  "PB22": "37",
  "PB23": "38",
  "PA27": "39",
  "~{RESET}": "40",
  "PA28": "41",
  "GND_42": "42",
  "VDDCORE": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
  "EP": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_42: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21G18A-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 32K Flash, 4K SRAM, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21J15A-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class ATSAMD21J15A_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PB04": "5",
  "PB05": "6",
  "GNDANA": "7",
  "VDDANA": "8",
  "PB06": "9",
  "PB07": "10",
  "PB08": "11",
  "PB09": "12",
  "PA04": "13",
  "PA05": "14",
  "PA06": "15",
  "PA07": "16",
  "PA08": "17",
  "PA09": "18",
  "PA10": "19",
  "PA11": "20",
  "VDDIO_21": "21",
  "GND_22": "22",
  "PB10": "23",
  "PB11": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA12": "29",
  "PA13": "30",
  "PA14": "31",
  "PA15": "32",
  "GND_33": "33",
  "VDDIO_34": "34",
  "PA16": "35",
  "PA17": "36",
  "PA18": "37",
  "PA19": "38",
  "PB16": "39",
  "PB17": "40",
  "PA20": "41",
  "PA21": "42",
  "PA22": "43",
  "PA23": "44",
  "PA24": "45",
  "PA25": "46",
  "GND_47": "47",
  "VDDIO_48": "48",
  "PB22": "49",
  "PB23": "50",
  "PA27": "51",
  "~{RESET}": "52",
  "PA28": "53",
  "GND_54": "54",
  "VDDCORE": "55",
  "VDDIN": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
  "PB03": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_21: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "power_in", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_54: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21J15A-A";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 32K Flash, 4K SRAM, QFN-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21J15A-M`. Reference prefix: `U`.
 * Footprint filters: QFN*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP4.7x4.7mm.
 */
export class ATSAMD21J15A_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PB04": "5",
  "PB05": "6",
  "GNDANA": "7",
  "VDDANA": "8",
  "PB06": "9",
  "PB07": "10",
  "PB08": "11",
  "PB09": "12",
  "PA04": "13",
  "PA05": "14",
  "PA06": "15",
  "PA07": "16",
  "PA08": "17",
  "PA09": "18",
  "PA10": "19",
  "PA11": "20",
  "VDDIO_21": "21",
  "GND_22": "22",
  "PB10": "23",
  "PB11": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA12": "29",
  "PA13": "30",
  "PA14": "31",
  "PA15": "32",
  "GND_33": "33",
  "VDDIO_34": "34",
  "PA16": "35",
  "PA17": "36",
  "PA18": "37",
  "PA19": "38",
  "PB16": "39",
  "PB17": "40",
  "PA20": "41",
  "PA21": "42",
  "PA22": "43",
  "PA23": "44",
  "PA24": "45",
  "PA25": "46",
  "GND_47": "47",
  "VDDIO_48": "48",
  "PB22": "49",
  "PB23": "50",
  "PA27": "51",
  "~{RESET}": "52",
  "PA28": "53",
  "GND_54": "54",
  "VDDCORE": "55",
  "VDDIN": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
  "PB03": "64",
  "EP": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_21: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "power_in", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_54: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21J15A-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 32K Flash w/ 1K RWW, 4K SRAM, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21J15B-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class ATSAMD21J15B_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PB04": "5",
  "PB05": "6",
  "GNDANA": "7",
  "VDDANA": "8",
  "PB06": "9",
  "PB07": "10",
  "PB08": "11",
  "PB09": "12",
  "PA04": "13",
  "PA05": "14",
  "PA06": "15",
  "PA07": "16",
  "PA08": "17",
  "PA09": "18",
  "PA10": "19",
  "PA11": "20",
  "VDDIO_21": "21",
  "GND_22": "22",
  "PB10": "23",
  "PB11": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA12": "29",
  "PA13": "30",
  "PA14": "31",
  "PA15": "32",
  "GND_33": "33",
  "VDDIO_34": "34",
  "PA16": "35",
  "PA17": "36",
  "PA18": "37",
  "PA19": "38",
  "PB16": "39",
  "PB17": "40",
  "PA20": "41",
  "PA21": "42",
  "PA22": "43",
  "PA23": "44",
  "PA24": "45",
  "PA25": "46",
  "GND_47": "47",
  "VDDIO_48": "48",
  "PB22": "49",
  "PB23": "50",
  "PA27": "51",
  "~{RESET}": "52",
  "PA28": "53",
  "GND_54": "54",
  "VDDCORE": "55",
  "VDDIN": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
  "PB03": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_21: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "power_in", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_54: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21J15B-A";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 32K Flash w/ 1K RWW, 4K SRAM, UFBGA-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21J15B-C`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class ATSAMD21J15B_C extends Component.withPins({
  "PB02": "A1",
  "PB01": "A2",
  "VDDIN": "A3",
  "VDDCORE": "A4",
  "GND_A5": "A5",
  "PA28": "A6",
  "PB23": "A7",
  "PB22": "A8",
  "PA00": "B1",
  "PB00": "B2",
  "PB31": "B3",
  "PA31": "B4",
  "PA30": "B5",
  "~{RESET}": "B6",
  "PA27": "B7",
  "VDDIO_B8": "B8",
  "PA01": "C1",
  "PB03": "C2",
  "PA02": "C3",
  "PB30": "C4",
  "PA21": "C5",
  "PA22": "C6",
  "PA23": "C7",
  "GND_C8": "C8",
  "GNDANA": "D1",
  "PB04": "D2",
  "PA03": "D3",
  "PB05": "D4",
  "PB17": "D5",
  "PA20": "D6",
  "PB16": "D7",
  "PA25": "D8",
  "VDDANA": "E1",
  "PB08": "E2",
  "PB07": "E3",
  "PB06": "E4",
  "PB11": "E5",
  "PB15": "E6",
  "PA19": "E7",
  "PA24": "E8",
  "PA04": "F1",
  "PA05": "F2",
  "PA10": "F3",
  "PB09": "F4",
  "PB12": "F5",
  "PA12": "F6",
  "PA18": "F7",
  "PA17": "F8",
  "PA07": "G1",
  "PA06": "G2",
  "PA11": "G3",
  "PB10": "G4",
  "PB13": "G5",
  "PA13": "G6",
  "PA16": "G7",
  "VDDIO_G8": "G8",
  "PA08": "H1",
  "PA09": "H2",
  "VDDIO_H3": "H3",
  "GND_H4": "H4",
  "PB14": "H5",
  "PA14": "H6",
  "PA15": "H7",
  "GND_H8": "H8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB02: "bidirectional", PB01: "bidirectional", VDDIN: "power_in", VDDCORE: "power_out", GND_A5: "power_in", PA28: "bidirectional", PB23: "bidirectional", PB22: "bidirectional", PA00: "bidirectional", PB00: "bidirectional", PB31: "bidirectional", PA31: "bidirectional", PA30: "bidirectional", "~{RESET}": "input", PA27: "bidirectional", VDDIO_B8: "power_in", PA01: "bidirectional", PB03: "bidirectional", PA02: "bidirectional", PB30: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", GND_C8: "passive", GNDANA: "power_in", PB04: "bidirectional", PA03: "bidirectional", PB05: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PB16: "bidirectional", PA25: "bidirectional", VDDANA: "power_in", PB08: "bidirectional", PB07: "bidirectional", PB06: "bidirectional", PB11: "bidirectional", PB15: "bidirectional", PA19: "bidirectional", PA24: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA10: "bidirectional", PB09: "bidirectional", PB12: "bidirectional", PA12: "bidirectional", PA18: "bidirectional", PA17: "bidirectional", PA07: "bidirectional", PA06: "bidirectional", PA11: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", PA13: "bidirectional", PA16: "bidirectional", VDDIO_G8: "power_in", PA08: "bidirectional", PA09: "bidirectional", VDDIO_H3: "power_in", GND_H4: "passive", PB14: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_H8: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21J15B-C";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 32K Flash w/ 1K RWW, 4K SRAM, QFN-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21J15B-M`. Reference prefix: `U`.
 * Footprint filters: QFN*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP4.7x4.7mm.
 */
export class ATSAMD21J15B_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PB04": "5",
  "PB05": "6",
  "GNDANA": "7",
  "VDDANA": "8",
  "PB06": "9",
  "PB07": "10",
  "PB08": "11",
  "PB09": "12",
  "PA04": "13",
  "PA05": "14",
  "PA06": "15",
  "PA07": "16",
  "PA08": "17",
  "PA09": "18",
  "PA10": "19",
  "PA11": "20",
  "VDDIO_21": "21",
  "GND_22": "22",
  "PB10": "23",
  "PB11": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA12": "29",
  "PA13": "30",
  "PA14": "31",
  "PA15": "32",
  "GND_33": "33",
  "VDDIO_34": "34",
  "PA16": "35",
  "PA17": "36",
  "PA18": "37",
  "PA19": "38",
  "PB16": "39",
  "PB17": "40",
  "PA20": "41",
  "PA21": "42",
  "PA22": "43",
  "PA23": "44",
  "PA24": "45",
  "PA25": "46",
  "GND_47": "47",
  "VDDIO_48": "48",
  "PB22": "49",
  "PB23": "50",
  "PA27": "51",
  "~{RESET}": "52",
  "PA28": "53",
  "GND_54": "54",
  "VDDCORE": "55",
  "VDDIN": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
  "PB03": "64",
  "EP": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_21: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "power_in", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_54: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21J15B-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash, 8K SRAM, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21J16A-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class ATSAMD21J16A_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PB04": "5",
  "PB05": "6",
  "GNDANA": "7",
  "VDDANA": "8",
  "PB06": "9",
  "PB07": "10",
  "PB08": "11",
  "PB09": "12",
  "PA04": "13",
  "PA05": "14",
  "PA06": "15",
  "PA07": "16",
  "PA08": "17",
  "PA09": "18",
  "PA10": "19",
  "PA11": "20",
  "VDDIO_21": "21",
  "GND_22": "22",
  "PB10": "23",
  "PB11": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA12": "29",
  "PA13": "30",
  "PA14": "31",
  "PA15": "32",
  "GND_33": "33",
  "VDDIO_34": "34",
  "PA16": "35",
  "PA17": "36",
  "PA18": "37",
  "PA19": "38",
  "PB16": "39",
  "PB17": "40",
  "PA20": "41",
  "PA21": "42",
  "PA22": "43",
  "PA23": "44",
  "PA24": "45",
  "PA25": "46",
  "GND_47": "47",
  "VDDIO_48": "48",
  "PB22": "49",
  "PB23": "50",
  "PA27": "51",
  "~{RESET}": "52",
  "PA28": "53",
  "GND_54": "54",
  "VDDCORE": "55",
  "VDDIN": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
  "PB03": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_21: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "power_in", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_54: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21J16A-A";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash, 8K SRAM, QFN-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21J16A-M`. Reference prefix: `U`.
 * Footprint filters: QFN*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP4.7x4.7mm.
 */
export class ATSAMD21J16A_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PB04": "5",
  "PB05": "6",
  "GNDANA": "7",
  "VDDANA": "8",
  "PB06": "9",
  "PB07": "10",
  "PB08": "11",
  "PB09": "12",
  "PA04": "13",
  "PA05": "14",
  "PA06": "15",
  "PA07": "16",
  "PA08": "17",
  "PA09": "18",
  "PA10": "19",
  "PA11": "20",
  "VDDIO_21": "21",
  "GND_22": "22",
  "PB10": "23",
  "PB11": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA12": "29",
  "PA13": "30",
  "PA14": "31",
  "PA15": "32",
  "GND_33": "33",
  "VDDIO_34": "34",
  "PA16": "35",
  "PA17": "36",
  "PA18": "37",
  "PA19": "38",
  "PB16": "39",
  "PB17": "40",
  "PA20": "41",
  "PA21": "42",
  "PA22": "43",
  "PA23": "44",
  "PA24": "45",
  "PA25": "46",
  "GND_47": "47",
  "VDDIO_48": "48",
  "PB22": "49",
  "PB23": "50",
  "PA27": "51",
  "~{RESET}": "52",
  "PA28": "53",
  "GND_54": "54",
  "VDDCORE": "55",
  "VDDIN": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
  "PB03": "64",
  "EP": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_21: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "power_in", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_54: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21J16A-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash w/ 2K RWW, 8K SRAM, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21J16B-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class ATSAMD21J16B_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PB04": "5",
  "PB05": "6",
  "GNDANA": "7",
  "VDDANA": "8",
  "PB06": "9",
  "PB07": "10",
  "PB08": "11",
  "PB09": "12",
  "PA04": "13",
  "PA05": "14",
  "PA06": "15",
  "PA07": "16",
  "PA08": "17",
  "PA09": "18",
  "PA10": "19",
  "PA11": "20",
  "VDDIO_21": "21",
  "GND_22": "22",
  "PB10": "23",
  "PB11": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA12": "29",
  "PA13": "30",
  "PA14": "31",
  "PA15": "32",
  "GND_33": "33",
  "VDDIO_34": "34",
  "PA16": "35",
  "PA17": "36",
  "PA18": "37",
  "PA19": "38",
  "PB16": "39",
  "PB17": "40",
  "PA20": "41",
  "PA21": "42",
  "PA22": "43",
  "PA23": "44",
  "PA24": "45",
  "PA25": "46",
  "GND_47": "47",
  "VDDIO_48": "48",
  "PB22": "49",
  "PB23": "50",
  "PA27": "51",
  "~{RESET}": "52",
  "PA28": "53",
  "GND_54": "54",
  "VDDCORE": "55",
  "VDDIN": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
  "PB03": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_21: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "power_in", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_54: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21J16B-A";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash w/ 2K RWW, 8K SRAM, UFBGA-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21J16B-C`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class ATSAMD21J16B_C extends Component.withPins({
  "PB02": "A1",
  "PB01": "A2",
  "VDDIN": "A3",
  "VDDCORE": "A4",
  "GND_A5": "A5",
  "PA28": "A6",
  "PB23": "A7",
  "PB22": "A8",
  "PA00": "B1",
  "PB00": "B2",
  "PB31": "B3",
  "PA31": "B4",
  "PA30": "B5",
  "~{RESET}": "B6",
  "PA27": "B7",
  "VDDIO_B8": "B8",
  "PA01": "C1",
  "PB03": "C2",
  "PA02": "C3",
  "PB30": "C4",
  "PA21": "C5",
  "PA22": "C6",
  "PA23": "C7",
  "GND_C8": "C8",
  "GNDANA": "D1",
  "PB04": "D2",
  "PA03": "D3",
  "PB05": "D4",
  "PB17": "D5",
  "PA20": "D6",
  "PB16": "D7",
  "PA25": "D8",
  "VDDANA": "E1",
  "PB08": "E2",
  "PB07": "E3",
  "PB06": "E4",
  "PB11": "E5",
  "PB15": "E6",
  "PA19": "E7",
  "PA24": "E8",
  "PA04": "F1",
  "PA05": "F2",
  "PA10": "F3",
  "PB09": "F4",
  "PB12": "F5",
  "PA12": "F6",
  "PA18": "F7",
  "PA17": "F8",
  "PA07": "G1",
  "PA06": "G2",
  "PA11": "G3",
  "PB10": "G4",
  "PB13": "G5",
  "PA13": "G6",
  "PA16": "G7",
  "VDDIO_G8": "G8",
  "PA08": "H1",
  "PA09": "H2",
  "VDDIO_H3": "H3",
  "GND_H4": "H4",
  "PB14": "H5",
  "PA14": "H6",
  "PA15": "H7",
  "GND_H8": "H8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB02: "bidirectional", PB01: "bidirectional", VDDIN: "power_in", VDDCORE: "power_out", GND_A5: "power_in", PA28: "bidirectional", PB23: "bidirectional", PB22: "bidirectional", PA00: "bidirectional", PB00: "bidirectional", PB31: "bidirectional", PA31: "bidirectional", PA30: "bidirectional", "~{RESET}": "input", PA27: "bidirectional", VDDIO_B8: "power_in", PA01: "bidirectional", PB03: "bidirectional", PA02: "bidirectional", PB30: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", GND_C8: "passive", GNDANA: "power_in", PB04: "bidirectional", PA03: "bidirectional", PB05: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PB16: "bidirectional", PA25: "bidirectional", VDDANA: "power_in", PB08: "bidirectional", PB07: "bidirectional", PB06: "bidirectional", PB11: "bidirectional", PB15: "bidirectional", PA19: "bidirectional", PA24: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA10: "bidirectional", PB09: "bidirectional", PB12: "bidirectional", PA12: "bidirectional", PA18: "bidirectional", PA17: "bidirectional", PA07: "bidirectional", PA06: "bidirectional", PA11: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", PA13: "bidirectional", PA16: "bidirectional", VDDIO_G8: "power_in", PA08: "bidirectional", PA09: "bidirectional", VDDIO_H3: "power_in", GND_H4: "passive", PB14: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_H8: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21J16B-C";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash w/ 2K RWW, 8K SRAM, QFN-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21J16B-M`. Reference prefix: `U`.
 * Footprint filters: QFN*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP4.7x4.7mm.
 */
export class ATSAMD21J16B_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PB04": "5",
  "PB05": "6",
  "GNDANA": "7",
  "VDDANA": "8",
  "PB06": "9",
  "PB07": "10",
  "PB08": "11",
  "PB09": "12",
  "PA04": "13",
  "PA05": "14",
  "PA06": "15",
  "PA07": "16",
  "PA08": "17",
  "PA09": "18",
  "PA10": "19",
  "PA11": "20",
  "VDDIO_21": "21",
  "GND_22": "22",
  "PB10": "23",
  "PB11": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA12": "29",
  "PA13": "30",
  "PA14": "31",
  "PA15": "32",
  "GND_33": "33",
  "VDDIO_34": "34",
  "PA16": "35",
  "PA17": "36",
  "PA18": "37",
  "PA19": "38",
  "PB16": "39",
  "PB17": "40",
  "PA20": "41",
  "PA21": "42",
  "PA22": "43",
  "PA23": "44",
  "PA24": "45",
  "PA25": "46",
  "GND_47": "47",
  "VDDIO_48": "48",
  "PB22": "49",
  "PB23": "50",
  "PA27": "51",
  "~{RESET}": "52",
  "PA28": "53",
  "GND_54": "54",
  "VDDCORE": "55",
  "VDDIN": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
  "PB03": "64",
  "EP": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_21: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "power_in", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_54: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21J16B-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 128K Flash, 16K SRAM, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21J17A-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class ATSAMD21J17A_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PB04": "5",
  "PB05": "6",
  "GNDANA": "7",
  "VDDANA": "8",
  "PB06": "9",
  "PB07": "10",
  "PB08": "11",
  "PB09": "12",
  "PA04": "13",
  "PA05": "14",
  "PA06": "15",
  "PA07": "16",
  "PA08": "17",
  "PA09": "18",
  "PA10": "19",
  "PA11": "20",
  "VDDIO_21": "21",
  "GND_22": "22",
  "PB10": "23",
  "PB11": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA12": "29",
  "PA13": "30",
  "PA14": "31",
  "PA15": "32",
  "GND_33": "33",
  "VDDIO_34": "34",
  "PA16": "35",
  "PA17": "36",
  "PA18": "37",
  "PA19": "38",
  "PB16": "39",
  "PB17": "40",
  "PA20": "41",
  "PA21": "42",
  "PA22": "43",
  "PA23": "44",
  "PA24": "45",
  "PA25": "46",
  "GND_47": "47",
  "VDDIO_48": "48",
  "PB22": "49",
  "PB23": "50",
  "PA27": "51",
  "~{RESET}": "52",
  "PA28": "53",
  "GND_54": "54",
  "VDDCORE": "55",
  "VDDIN": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
  "PB03": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_21: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "power_in", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_54: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21J17A-A";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 128K Flash, 16K SRAM, QFN-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21J17A-M`. Reference prefix: `U`.
 * Footprint filters: QFN*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP4.7x4.7mm.
 */
export class ATSAMD21J17A_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PB04": "5",
  "PB05": "6",
  "GNDANA": "7",
  "VDDANA": "8",
  "PB06": "9",
  "PB07": "10",
  "PB08": "11",
  "PB09": "12",
  "PA04": "13",
  "PA05": "14",
  "PA06": "15",
  "PA07": "16",
  "PA08": "17",
  "PA09": "18",
  "PA10": "19",
  "PA11": "20",
  "VDDIO_21": "21",
  "GND_22": "22",
  "PB10": "23",
  "PB11": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA12": "29",
  "PA13": "30",
  "PA14": "31",
  "PA15": "32",
  "GND_33": "33",
  "VDDIO_34": "34",
  "PA16": "35",
  "PA17": "36",
  "PA18": "37",
  "PA19": "38",
  "PB16": "39",
  "PB17": "40",
  "PA20": "41",
  "PA21": "42",
  "PA22": "43",
  "PA23": "44",
  "PA24": "45",
  "PA25": "46",
  "GND_47": "47",
  "VDDIO_48": "48",
  "PB22": "49",
  "PB23": "50",
  "PA27": "51",
  "~{RESET}": "52",
  "PA28": "53",
  "GND_54": "54",
  "VDDCORE": "55",
  "VDDIN": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
  "PB03": "64",
  "EP": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_21: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "power_in", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_54: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21J17A-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 128K Flash w/ 4K RWW, 16K SRAM, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21J17D-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class ATSAMD21J17D_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PB04": "5",
  "PB05": "6",
  "GNDANA": "7",
  "VDDANA": "8",
  "PB06": "9",
  "PB07": "10",
  "PB08": "11",
  "PB09": "12",
  "PA04": "13",
  "PA05": "14",
  "PA06": "15",
  "PA07": "16",
  "PA08": "17",
  "PA09": "18",
  "PA10": "19",
  "PA11": "20",
  "VDDIO_21": "21",
  "GND_22": "22",
  "PB10": "23",
  "PB11": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA12": "29",
  "PA13": "30",
  "PA14": "31",
  "PA15": "32",
  "GND_33": "33",
  "VDDIO_34": "34",
  "PA16": "35",
  "PA17": "36",
  "PA18": "37",
  "PA19": "38",
  "PB16": "39",
  "PB17": "40",
  "PA20": "41",
  "PA21": "42",
  "PA22": "43",
  "PA23": "44",
  "PA24": "45",
  "PA25": "46",
  "GND_47": "47",
  "VDDIO_48": "48",
  "PB22": "49",
  "PB23": "50",
  "PA27": "51",
  "~{RESET}": "52",
  "PA28": "53",
  "GND_54": "54",
  "VDDCORE": "55",
  "VDDIN": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
  "PB03": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_21: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "power_in", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_54: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21J17D-A";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 128K Flash w/ 4K RWW, 16K SRAM, UFBGA-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21J17D-C`. Reference prefix: `U`.
 * Footprint filters: UFBGA*5x5mm*Layout8x8*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_BGA:UFBGA-64_5x5mm_Layout8x8_P0.5mm.
 */
export class ATSAMD21J17D_C extends Component.withPins({
  "PB02": "A1",
  "PB01": "A2",
  "VDDIN": "A3",
  "VDDCORE": "A4",
  "GND_A5": "A5",
  "PA28": "A6",
  "PB23": "A7",
  "PB22": "A8",
  "PA00": "B1",
  "PB00": "B2",
  "PB31": "B3",
  "PA31": "B4",
  "PA30": "B5",
  "~{RESET}": "B6",
  "PA27": "B7",
  "VDDIO_B8": "B8",
  "PA01": "C1",
  "PB03": "C2",
  "PA02": "C3",
  "PB30": "C4",
  "PA21": "C5",
  "PA22": "C6",
  "PA23": "C7",
  "GND_C8": "C8",
  "GNDANA": "D1",
  "PB04": "D2",
  "PA03": "D3",
  "PB05": "D4",
  "PB17": "D5",
  "PA20": "D6",
  "PB16": "D7",
  "PA25": "D8",
  "VDDANA": "E1",
  "PB08": "E2",
  "PB07": "E3",
  "PB06": "E4",
  "PB11": "E5",
  "PB15": "E6",
  "PA19": "E7",
  "PA24": "E8",
  "PA04": "F1",
  "PA05": "F2",
  "PA10": "F3",
  "PB09": "F4",
  "PB12": "F5",
  "PA12": "F6",
  "PA18": "F7",
  "PA17": "F8",
  "PA07": "G1",
  "PA06": "G2",
  "PA11": "G3",
  "PB10": "G4",
  "PB13": "G5",
  "PA13": "G6",
  "PA16": "G7",
  "VDDIO_G8": "G8",
  "PA08": "H1",
  "PA09": "H2",
  "VDDIO_H3": "H3",
  "GND_H4": "H4",
  "PB14": "H5",
  "PA14": "H6",
  "PA15": "H7",
  "GND_H8": "H8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB02: "bidirectional", PB01: "bidirectional", VDDIN: "power_in", VDDCORE: "power_out", GND_A5: "power_in", PA28: "bidirectional", PB23: "bidirectional", PB22: "bidirectional", PA00: "bidirectional", PB00: "bidirectional", PB31: "bidirectional", PA31: "bidirectional", PA30: "bidirectional", "~{RESET}": "input", PA27: "bidirectional", VDDIO_B8: "power_in", PA01: "bidirectional", PB03: "bidirectional", PA02: "bidirectional", PB30: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", GND_C8: "passive", GNDANA: "power_in", PB04: "bidirectional", PA03: "bidirectional", PB05: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PB16: "bidirectional", PA25: "bidirectional", VDDANA: "power_in", PB08: "bidirectional", PB07: "bidirectional", PB06: "bidirectional", PB11: "bidirectional", PB15: "bidirectional", PA19: "bidirectional", PA24: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA10: "bidirectional", PB09: "bidirectional", PB12: "bidirectional", PA12: "bidirectional", PA18: "bidirectional", PA17: "bidirectional", PA07: "bidirectional", PA06: "bidirectional", PA11: "bidirectional", PB10: "bidirectional", PB13: "bidirectional", PA13: "bidirectional", PA16: "bidirectional", VDDIO_G8: "power_in", PA08: "bidirectional", PA09: "bidirectional", VDDIO_H3: "power_in", GND_H4: "passive", PB14: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_H8: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21J17D-C";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 128K Flash w/ 4K RWW, 16K SRAM, QFN-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21J17D-M`. Reference prefix: `U`.
 * Footprint filters: QFN*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP4.7x4.7mm.
 */
export class ATSAMD21J17D_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PB04": "5",
  "PB05": "6",
  "GNDANA": "7",
  "VDDANA": "8",
  "PB06": "9",
  "PB07": "10",
  "PB08": "11",
  "PB09": "12",
  "PA04": "13",
  "PA05": "14",
  "PA06": "15",
  "PA07": "16",
  "PA08": "17",
  "PA09": "18",
  "PA10": "19",
  "PA11": "20",
  "VDDIO_21": "21",
  "GND_22": "22",
  "PB10": "23",
  "PB11": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA12": "29",
  "PA13": "30",
  "PA14": "31",
  "PA15": "32",
  "GND_33": "33",
  "VDDIO_34": "34",
  "PA16": "35",
  "PA17": "36",
  "PA18": "37",
  "PA19": "38",
  "PB16": "39",
  "PB17": "40",
  "PA20": "41",
  "PA21": "42",
  "PA22": "43",
  "PA23": "44",
  "PA24": "45",
  "PA25": "46",
  "GND_47": "47",
  "VDDIO_48": "48",
  "PB22": "49",
  "PB23": "50",
  "PA27": "51",
  "~{RESET}": "52",
  "PA28": "53",
  "GND_54": "54",
  "VDDCORE": "55",
  "VDDIN": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
  "PB03": "64",
  "EP": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_21: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "power_in", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_54: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21J17D-M";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 256K Flash, 32K SRAM, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21J18A-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class ATSAMD21J18A_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PB04": "5",
  "PB05": "6",
  "GNDANA": "7",
  "VDDANA": "8",
  "PB06": "9",
  "PB07": "10",
  "PB08": "11",
  "PB09": "12",
  "PA04": "13",
  "PA05": "14",
  "PA06": "15",
  "PA07": "16",
  "PA08": "17",
  "PA09": "18",
  "PA10": "19",
  "PA11": "20",
  "VDDIO_21": "21",
  "GND_22": "22",
  "PB10": "23",
  "PB11": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA12": "29",
  "PA13": "30",
  "PA14": "31",
  "PA15": "32",
  "GND_33": "33",
  "VDDIO_34": "34",
  "PA16": "35",
  "PA17": "36",
  "PA18": "37",
  "PA19": "38",
  "PB16": "39",
  "PB17": "40",
  "PA20": "41",
  "PA21": "42",
  "PA22": "43",
  "PA23": "44",
  "PA24": "45",
  "PA25": "46",
  "GND_47": "47",
  "VDDIO_48": "48",
  "PB22": "49",
  "PB23": "50",
  "PA27": "51",
  "~{RESET}": "52",
  "PA28": "53",
  "GND_54": "54",
  "VDDCORE": "55",
  "VDDIN": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
  "PB03": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_21: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "power_in", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_54: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21J18A-A";
  override referencePrefix = "U";
}

/**
 * SAM D21 Microchip SMART ARM-based Flash MCU, 48Mhz, 256K Flash, 32K SRAM, QFN-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD21J18A-M`. Reference prefix: `U`.
 * Footprint filters: QFN*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP4.7x4.7mm.
 */
export class ATSAMD21J18A_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PB04": "5",
  "PB05": "6",
  "GNDANA": "7",
  "VDDANA": "8",
  "PB06": "9",
  "PB07": "10",
  "PB08": "11",
  "PB09": "12",
  "PA04": "13",
  "PA05": "14",
  "PA06": "15",
  "PA07": "16",
  "PA08": "17",
  "PA09": "18",
  "PA10": "19",
  "PA11": "20",
  "VDDIO_21": "21",
  "GND_22": "22",
  "PB10": "23",
  "PB11": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA12": "29",
  "PA13": "30",
  "PA14": "31",
  "PA15": "32",
  "GND_33": "33",
  "VDDIO_34": "34",
  "PA16": "35",
  "PA17": "36",
  "PA18": "37",
  "PA19": "38",
  "PB16": "39",
  "PB17": "40",
  "PA20": "41",
  "PA21": "42",
  "PA22": "43",
  "PA23": "44",
  "PA24": "45",
  "PA25": "46",
  "GND_47": "47",
  "VDDIO_48": "48",
  "PB22": "49",
  "PB23": "50",
  "PA27": "51",
  "~{RESET}": "52",
  "PA28": "53",
  "GND_54": "54",
  "VDDCORE": "55",
  "VDDIN": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
  "PB03": "64",
  "EP": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_21: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "power_in", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_54: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD21J18A-M";
  override referencePrefix = "U";
}

/**
 * SAM D51 Microchip SMART ARM Cortex-M4F-based MCU, 256K Flash, 128K SRAM, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD51J18A-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001507E.pdf
 * Keywords: 32-bit ARM Cortex-M4F MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class ATSAMD51J18A_A extends Component.withPins({
  "PB03": "64",
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PB04": "5",
  "PB05": "6",
  "GNDANA": "7",
  "VDDANA": "8",
  "PB06": "9",
  "PB07": "10",
  "PB08": "11",
  "PB09": "12",
  "PA04": "13",
  "PA05": "14",
  "PA06": "15",
  "PA07": "16",
  "PA08": "17",
  "PA09": "18",
  "PA10": "19",
  "PA11": "20",
  "VDDIOB": "21",
  "GND_22": "22",
  "PB10": "23",
  "PB11": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA12": "29",
  "PA13": "30",
  "PA14": "31",
  "PA15": "32",
  "GND_33": "33",
  "VDDIO_34": "34",
  "PA16": "35",
  "PA17": "36",
  "PA18": "37",
  "PA19": "38",
  "PB16": "39",
  "PB17": "40",
  "PA20": "41",
  "PA21": "42",
  "PA22": "43",
  "PA23": "44",
  "PA24": "45",
  "PA25": "46",
  "GND_47": "47",
  "VDDIO_48": "48",
  "PB22": "49",
  "PB23": "50",
  "PA27": "51",
  "~{RESET}": "52",
  "VDDCORE": "53",
  "GND_54": "54",
  "VSW": "55",
  "VDDIO_56": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB03: "bidirectional", PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIOB: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "power_in", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_out", GND_54: "passive", VSW: "power_in", VDDIO_56: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD51J18A-A";
  override referencePrefix = "U";
}

/**
 * SAM D51 Microchip SMART ARM Cortex-M4F-based MCU, 256K Flash, 128K SRAM, VQFN-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD51J18A-M`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001507E.pdf
 * Keywords: 32-bit ARM Cortex-M4F MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP4.7x4.7mm.
 */
export class ATSAMD51J18A_M extends Component.withPins({
  "PB03": "64",
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PB04": "5",
  "PB05": "6",
  "GNDANA": "7",
  "VDDANA": "8",
  "PB06": "9",
  "PB07": "10",
  "PB08": "11",
  "PB09": "12",
  "PA04": "13",
  "PA05": "14",
  "PA06": "15",
  "PA07": "16",
  "PA08": "17",
  "PA09": "18",
  "PA10": "19",
  "PA11": "20",
  "VDDIOB": "21",
  "GND_22": "22",
  "PB10": "23",
  "PB11": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA12": "29",
  "PA13": "30",
  "PA14": "31",
  "PA15": "32",
  "GND_33": "33",
  "VDDIO_34": "34",
  "PA16": "35",
  "PA17": "36",
  "PA18": "37",
  "PA19": "38",
  "PB16": "39",
  "PB17": "40",
  "PA20": "41",
  "PA21": "42",
  "PA22": "43",
  "PA23": "44",
  "PA24": "45",
  "PA25": "46",
  "GND_47": "47",
  "VDDIO_48": "48",
  "PB22": "49",
  "PB23": "50",
  "PA27": "51",
  "~{RESET}": "52",
  "VDDCORE": "53",
  "GND_54": "54",
  "VSW": "55",
  "VDDIO_56": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
  "GND_65": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB03: "bidirectional", PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIOB: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "power_in", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_out", GND_54: "passive", VSW: "power_in", VDDIO_56: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", GND_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD51J18A-M";
  override referencePrefix = "U";
}

/**
 * SAM D51 Microchip SMART ARM Cortex-M4F-based MCU, 512K Flash, 192K SRAM, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD51J19A-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001507E.pdf
 * Keywords: 32-bit ARM Cortex-M4F MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class ATSAMD51J19A_A extends Component.withPins({
  "PB03": "64",
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PB04": "5",
  "PB05": "6",
  "GNDANA": "7",
  "VDDANA": "8",
  "PB06": "9",
  "PB07": "10",
  "PB08": "11",
  "PB09": "12",
  "PA04": "13",
  "PA05": "14",
  "PA06": "15",
  "PA07": "16",
  "PA08": "17",
  "PA09": "18",
  "PA10": "19",
  "PA11": "20",
  "VDDIOB": "21",
  "GND_22": "22",
  "PB10": "23",
  "PB11": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA12": "29",
  "PA13": "30",
  "PA14": "31",
  "PA15": "32",
  "GND_33": "33",
  "VDDIO_34": "34",
  "PA16": "35",
  "PA17": "36",
  "PA18": "37",
  "PA19": "38",
  "PB16": "39",
  "PB17": "40",
  "PA20": "41",
  "PA21": "42",
  "PA22": "43",
  "PA23": "44",
  "PA24": "45",
  "PA25": "46",
  "GND_47": "47",
  "VDDIO_48": "48",
  "PB22": "49",
  "PB23": "50",
  "PA27": "51",
  "~{RESET}": "52",
  "VDDCORE": "53",
  "GND_54": "54",
  "VSW": "55",
  "VDDIO_56": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB03: "bidirectional", PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIOB: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "power_in", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_out", GND_54: "passive", VSW: "power_in", VDDIO_56: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD51J19A-A";
  override referencePrefix = "U";
}

/**
 * SAM D51 Microchip SMART ARM Cortex-M4F-based MCU, 512K Flash, 192K SRAM, VQFN-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD51J19A-M`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001507E.pdf
 * Keywords: 32-bit ARM Cortex-M4F MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP4.7x4.7mm.
 */
export class ATSAMD51J19A_M extends Component.withPins({
  "PB03": "64",
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PB04": "5",
  "PB05": "6",
  "GNDANA": "7",
  "VDDANA": "8",
  "PB06": "9",
  "PB07": "10",
  "PB08": "11",
  "PB09": "12",
  "PA04": "13",
  "PA05": "14",
  "PA06": "15",
  "PA07": "16",
  "PA08": "17",
  "PA09": "18",
  "PA10": "19",
  "PA11": "20",
  "VDDIOB": "21",
  "GND_22": "22",
  "PB10": "23",
  "PB11": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA12": "29",
  "PA13": "30",
  "PA14": "31",
  "PA15": "32",
  "GND_33": "33",
  "VDDIO_34": "34",
  "PA16": "35",
  "PA17": "36",
  "PA18": "37",
  "PA19": "38",
  "PB16": "39",
  "PB17": "40",
  "PA20": "41",
  "PA21": "42",
  "PA22": "43",
  "PA23": "44",
  "PA24": "45",
  "PA25": "46",
  "GND_47": "47",
  "VDDIO_48": "48",
  "PB22": "49",
  "PB23": "50",
  "PA27": "51",
  "~{RESET}": "52",
  "VDDCORE": "53",
  "GND_54": "54",
  "VSW": "55",
  "VDDIO_56": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
  "GND_65": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB03: "bidirectional", PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIOB: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "power_in", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_out", GND_54: "passive", VSW: "power_in", VDDIO_56: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", GND_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD51J19A-M";
  override referencePrefix = "U";
}

/**
 * SAM D51 Microchip SMART ARM Cortex-M4F-based MCU, 1024K Flash, 256K SRAM, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD51J20A-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001507E.pdf
 * Keywords: 32-bit ARM Cortex-M4F MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class ATSAMD51J20A_A extends Component.withPins({
  "PB03": "64",
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PB04": "5",
  "PB05": "6",
  "GNDANA": "7",
  "VDDANA": "8",
  "PB06": "9",
  "PB07": "10",
  "PB08": "11",
  "PB09": "12",
  "PA04": "13",
  "PA05": "14",
  "PA06": "15",
  "PA07": "16",
  "PA08": "17",
  "PA09": "18",
  "PA10": "19",
  "PA11": "20",
  "VDDIOB": "21",
  "GND_22": "22",
  "PB10": "23",
  "PB11": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA12": "29",
  "PA13": "30",
  "PA14": "31",
  "PA15": "32",
  "GND_33": "33",
  "VDDIO_34": "34",
  "PA16": "35",
  "PA17": "36",
  "PA18": "37",
  "PA19": "38",
  "PB16": "39",
  "PB17": "40",
  "PA20": "41",
  "PA21": "42",
  "PA22": "43",
  "PA23": "44",
  "PA24": "45",
  "PA25": "46",
  "GND_47": "47",
  "VDDIO_48": "48",
  "PB22": "49",
  "PB23": "50",
  "PA27": "51",
  "~{RESET}": "52",
  "VDDCORE": "53",
  "GND_54": "54",
  "VSW": "55",
  "VDDIO_56": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB03: "bidirectional", PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIOB: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "power_in", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_out", GND_54: "passive", VSW: "power_in", VDDIO_56: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD51J20A-A";
  override referencePrefix = "U";
}

/**
 * SAM D51 Microchip SMART ARM Cortex-M4F-based MCU, 1024K Flash, 256K SRAM, VQFN-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMD51J20A-M`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001507E.pdf
 * Keywords: 32-bit ARM Cortex-M4F MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP4.7x4.7mm.
 */
export class ATSAMD51J20A_M extends Component.withPins({
  "PB03": "64",
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PB04": "5",
  "PB05": "6",
  "GNDANA": "7",
  "VDDANA": "8",
  "PB06": "9",
  "PB07": "10",
  "PB08": "11",
  "PB09": "12",
  "PA04": "13",
  "PA05": "14",
  "PA06": "15",
  "PA07": "16",
  "PA08": "17",
  "PA09": "18",
  "PA10": "19",
  "PA11": "20",
  "VDDIOB": "21",
  "GND_22": "22",
  "PB10": "23",
  "PB11": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA12": "29",
  "PA13": "30",
  "PA14": "31",
  "PA15": "32",
  "GND_33": "33",
  "VDDIO_34": "34",
  "PA16": "35",
  "PA17": "36",
  "PA18": "37",
  "PA19": "38",
  "PB16": "39",
  "PB17": "40",
  "PA20": "41",
  "PA21": "42",
  "PA22": "43",
  "PA23": "44",
  "PA24": "45",
  "PA25": "46",
  "GND_47": "47",
  "VDDIO_48": "48",
  "PB22": "49",
  "PB23": "50",
  "PA27": "51",
  "~{RESET}": "52",
  "VDDCORE": "53",
  "GND_54": "54",
  "VSW": "55",
  "VDDIO_56": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
  "GND_65": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PB03: "bidirectional", PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIOB: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "power_in", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_out", GND_54: "passive", VSW: "power_in", VDDIO_56: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", GND_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMD51J20A-M";
  override referencePrefix = "U";
}

/**
 * SAM DA1 Microchip SMART ARM-based Flash MCU, 48Mhz, 16K Flash w/ 0.5K RWW, 4K SRAM, TQFP-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMDA1E14B-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-32_7x7mm_P0.8mm.
 */
export class ATSAMDA1E14B_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "PA27": "25",
  "~{RESET}": "26",
  "PA28": "27",
  "GND_28": "28",
  "VDDCORE": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_28: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMDA1E14B-A";
  override referencePrefix = "U";
}

/**
 * SAM DA1 Microchip SMART ARM-based Flash MCU, 48Mhz, 16K Flash w/ 0.5K RWW, 4K SRAM, QFN-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMDA1E14B-M`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 */
export class ATSAMDA1E14B_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "PA27": "25",
  "~{RESET}": "26",
  "PA28": "27",
  "GND_28": "28",
  "VDDCORE": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
  "EP": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_28: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMDA1E14B-M";
  override referencePrefix = "U";
}

/**
 * SAM DA1 Microchip SMART ARM-based Flash MCU, 48Mhz, 32K Flash w/ 1K RWW, 4K SRAM, TQFP-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMDA1E15B-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-32_7x7mm_P0.8mm.
 */
export class ATSAMDA1E15B_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "PA27": "25",
  "~{RESET}": "26",
  "PA28": "27",
  "GND_28": "28",
  "VDDCORE": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_28: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMDA1E15B-A";
  override referencePrefix = "U";
}

/**
 * SAM DA1 Microchip SMART ARM-based Flash MCU, 48Mhz, 32K Flash w/ 1K RWW, 4K SRAM, QFN-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMDA1E15B-M`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 */
export class ATSAMDA1E15B_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "PA27": "25",
  "~{RESET}": "26",
  "PA28": "27",
  "GND_28": "28",
  "VDDCORE": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
  "EP": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_28: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMDA1E15B-M";
  override referencePrefix = "U";
}

/**
 * SAM DA1 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash w/ 2K RWW, 8K SRAM, TQFP-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMDA1E16B-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-32_7x7mm_P0.8mm.
 */
export class ATSAMDA1E16B_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "PA27": "25",
  "~{RESET}": "26",
  "PA28": "27",
  "GND_28": "28",
  "VDDCORE": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_28: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMDA1E16B-A";
  override referencePrefix = "U";
}

/**
 * SAM DA1 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash w/ 2K RWW, 8K SRAM, QFN-32
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMDA1E16B-M`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 */
export class ATSAMDA1E16B_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PA04": "5",
  "PA05": "6",
  "PA06": "7",
  "PA07": "8",
  "VDDANA": "9",
  "GND_10": "10",
  "PA08": "11",
  "PA09": "12",
  "PA10": "13",
  "PA11": "14",
  "PA14": "15",
  "PA15": "16",
  "PA16": "17",
  "PA17": "18",
  "PA18": "19",
  "PA19": "20",
  "PA22": "21",
  "PA23": "22",
  "PA24": "23",
  "PA25": "24",
  "PA27": "25",
  "~{RESET}": "26",
  "PA28": "27",
  "GND_28": "28",
  "VDDCORE": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
  "EP": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_28: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMDA1E16B-M";
  override referencePrefix = "U";
}

/**
 * SAM DA1 Microchip SMART ARM-based Flash MCU, 48Mhz, 16K Flash w/ 0.5K RWW, 4K SRAM, TQFP-48
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMDA1G14B-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class ATSAMDA1G14B_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "GNDANA": "5",
  "VDDANA": "6",
  "PB08": "7",
  "PB09": "8",
  "PA04": "9",
  "PA05": "10",
  "PA06": "11",
  "PA07": "12",
  "PA08": "13",
  "PA09": "14",
  "PA10": "15",
  "PA11": "16",
  "VDDIO_17": "17",
  "GND_18": "18",
  "PB10": "19",
  "PB11": "20",
  "PA12": "21",
  "PA13": "22",
  "PA14": "23",
  "PA15": "24",
  "PA16": "25",
  "PA17": "26",
  "PA18": "27",
  "PA19": "28",
  "PA20": "29",
  "PA21": "30",
  "PA22": "31",
  "PA23": "32",
  "PA24": "33",
  "PA25": "34",
  "GND_35": "35",
  "VDDIO_36": "36",
  "PB22": "37",
  "PB23": "38",
  "PA27": "39",
  "~{RESET}": "40",
  "PA28": "41",
  "GND_42": "42",
  "VDDCORE": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_42: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMDA1G14B-A";
  override referencePrefix = "U";
}

/**
 * SAM DA1 Microchip SMART ARM-based Flash MCU, 48Mhz, 16K Flash w/ 0.5K RWW, 4K SRAM, QFN-48
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMDA1G14B-M`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class ATSAMDA1G14B_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "GNDANA": "5",
  "VDDANA": "6",
  "PB08": "7",
  "PB09": "8",
  "PA04": "9",
  "PA05": "10",
  "PA06": "11",
  "PA07": "12",
  "PA08": "13",
  "PA09": "14",
  "PA10": "15",
  "PA11": "16",
  "VDDIO_17": "17",
  "GND_18": "18",
  "PB10": "19",
  "PB11": "20",
  "PA12": "21",
  "PA13": "22",
  "PA14": "23",
  "PA15": "24",
  "PA16": "25",
  "PA17": "26",
  "PA18": "27",
  "PA19": "28",
  "PA20": "29",
  "PA21": "30",
  "PA22": "31",
  "PA23": "32",
  "PA24": "33",
  "PA25": "34",
  "GND_35": "35",
  "VDDIO_36": "36",
  "PB22": "37",
  "PB23": "38",
  "PA27": "39",
  "~{RESET}": "40",
  "PA28": "41",
  "GND_42": "42",
  "VDDCORE": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
  "EP": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_42: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMDA1G14B-M";
  override referencePrefix = "U";
}

/**
 * SAM DA1 Microchip SMART ARM-based Flash MCU, 48Mhz, 32K Flash w/ 1K RWW, 4K SRAM, TQFP-48
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMDA1G15B-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class ATSAMDA1G15B_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "GNDANA": "5",
  "VDDANA": "6",
  "PB08": "7",
  "PB09": "8",
  "PA04": "9",
  "PA05": "10",
  "PA06": "11",
  "PA07": "12",
  "PA08": "13",
  "PA09": "14",
  "PA10": "15",
  "PA11": "16",
  "VDDIO_17": "17",
  "GND_18": "18",
  "PB10": "19",
  "PB11": "20",
  "PA12": "21",
  "PA13": "22",
  "PA14": "23",
  "PA15": "24",
  "PA16": "25",
  "PA17": "26",
  "PA18": "27",
  "PA19": "28",
  "PA20": "29",
  "PA21": "30",
  "PA22": "31",
  "PA23": "32",
  "PA24": "33",
  "PA25": "34",
  "GND_35": "35",
  "VDDIO_36": "36",
  "PB22": "37",
  "PB23": "38",
  "PA27": "39",
  "~{RESET}": "40",
  "PA28": "41",
  "GND_42": "42",
  "VDDCORE": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_42: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMDA1G15B-A";
  override referencePrefix = "U";
}

/**
 * SAM DA1 Microchip SMART ARM-based Flash MCU, 48Mhz, 32K Flash w/ 1K RWW, 4K SRAM, QFN-48
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMDA1G15B-M`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class ATSAMDA1G15B_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "GNDANA": "5",
  "VDDANA": "6",
  "PB08": "7",
  "PB09": "8",
  "PA04": "9",
  "PA05": "10",
  "PA06": "11",
  "PA07": "12",
  "PA08": "13",
  "PA09": "14",
  "PA10": "15",
  "PA11": "16",
  "VDDIO_17": "17",
  "GND_18": "18",
  "PB10": "19",
  "PB11": "20",
  "PA12": "21",
  "PA13": "22",
  "PA14": "23",
  "PA15": "24",
  "PA16": "25",
  "PA17": "26",
  "PA18": "27",
  "PA19": "28",
  "PA20": "29",
  "PA21": "30",
  "PA22": "31",
  "PA23": "32",
  "PA24": "33",
  "PA25": "34",
  "GND_35": "35",
  "VDDIO_36": "36",
  "PB22": "37",
  "PB23": "38",
  "PA27": "39",
  "~{RESET}": "40",
  "PA28": "41",
  "GND_42": "42",
  "VDDCORE": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
  "EP": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_42: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMDA1G15B-M";
  override referencePrefix = "U";
}

/**
 * SAM DA1 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash w/ 2K RWW, 8K SRAM, TQFP-48
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMDA1G16B-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class ATSAMDA1G16B_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "GNDANA": "5",
  "VDDANA": "6",
  "PB08": "7",
  "PB09": "8",
  "PA04": "9",
  "PA05": "10",
  "PA06": "11",
  "PA07": "12",
  "PA08": "13",
  "PA09": "14",
  "PA10": "15",
  "PA11": "16",
  "VDDIO_17": "17",
  "GND_18": "18",
  "PB10": "19",
  "PB11": "20",
  "PA12": "21",
  "PA13": "22",
  "PA14": "23",
  "PA15": "24",
  "PA16": "25",
  "PA17": "26",
  "PA18": "27",
  "PA19": "28",
  "PA20": "29",
  "PA21": "30",
  "PA22": "31",
  "PA23": "32",
  "PA24": "33",
  "PA25": "34",
  "GND_35": "35",
  "VDDIO_36": "36",
  "PB22": "37",
  "PB23": "38",
  "PA27": "39",
  "~{RESET}": "40",
  "PA28": "41",
  "GND_42": "42",
  "VDDCORE": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_42: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMDA1G16B-A";
  override referencePrefix = "U";
}

/**
 * SAM DA1 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash w/ 2K RWW, 8K SRAM, QFN-48
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMDA1G16B-M`. Reference prefix: `U`.
 * Footprint filters: QFN*7x7mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class ATSAMDA1G16B_M extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "GNDANA": "5",
  "VDDANA": "6",
  "PB08": "7",
  "PB09": "8",
  "PA04": "9",
  "PA05": "10",
  "PA06": "11",
  "PA07": "12",
  "PA08": "13",
  "PA09": "14",
  "PA10": "15",
  "PA11": "16",
  "VDDIO_17": "17",
  "GND_18": "18",
  "PB10": "19",
  "PB11": "20",
  "PA12": "21",
  "PA13": "22",
  "PA14": "23",
  "PA15": "24",
  "PA16": "25",
  "PA17": "26",
  "PA18": "27",
  "PA19": "28",
  "PA20": "29",
  "PA21": "30",
  "PA22": "31",
  "PA23": "32",
  "PA24": "33",
  "PA25": "34",
  "GND_35": "35",
  "VDDIO_36": "36",
  "PB22": "37",
  "PB23": "38",
  "PA27": "39",
  "~{RESET}": "40",
  "PA28": "41",
  "GND_42": "42",
  "VDDCORE": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
  "EP": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_42: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMDA1G16B-M";
  override referencePrefix = "U";
}

/**
 * SAM DA1 Microchip SMART ARM-based Flash MCU, 48Mhz, 16K Flash w/ 0.5K RWW, 4K SRAM, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMDA1J14B-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class ATSAMDA1J14B_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PB04": "5",
  "PB05": "6",
  "GNDANA": "7",
  "VDDANA": "8",
  "PB06": "9",
  "PB07": "10",
  "PB08": "11",
  "PB09": "12",
  "PA04": "13",
  "PA05": "14",
  "PA06": "15",
  "PA07": "16",
  "PA08": "17",
  "PA09": "18",
  "PA10": "19",
  "PA11": "20",
  "VDDIO_21": "21",
  "GND_22": "22",
  "PB10": "23",
  "PB11": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA12": "29",
  "PA13": "30",
  "PA14": "31",
  "PA15": "32",
  "GND_33": "33",
  "VDDIO_34": "34",
  "PA16": "35",
  "PA17": "36",
  "PA18": "37",
  "PA19": "38",
  "PB16": "39",
  "PB17": "40",
  "PA20": "41",
  "PA21": "42",
  "PA22": "43",
  "PA23": "44",
  "PA24": "45",
  "PA25": "46",
  "GND_47": "47",
  "VDDIO_48": "48",
  "PB22": "49",
  "PB23": "50",
  "PA27": "51",
  "~{RESET}": "52",
  "PA28": "53",
  "GND_54": "54",
  "VDDCORE": "55",
  "VDDIN": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
  "PB03": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_21: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "power_in", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_54: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMDA1J14B-A";
  override referencePrefix = "U";
}

/**
 * SAM DA1 Microchip SMART ARM-based Flash MCU, 48Mhz, 32K Flash w/ 1K RWW, 4K SRAM, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMDA1J15B-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class ATSAMDA1J15B_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PB04": "5",
  "PB05": "6",
  "GNDANA": "7",
  "VDDANA": "8",
  "PB06": "9",
  "PB07": "10",
  "PB08": "11",
  "PB09": "12",
  "PA04": "13",
  "PA05": "14",
  "PA06": "15",
  "PA07": "16",
  "PA08": "17",
  "PA09": "18",
  "PA10": "19",
  "PA11": "20",
  "VDDIO_21": "21",
  "GND_22": "22",
  "PB10": "23",
  "PB11": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA12": "29",
  "PA13": "30",
  "PA14": "31",
  "PA15": "32",
  "GND_33": "33",
  "VDDIO_34": "34",
  "PA16": "35",
  "PA17": "36",
  "PA18": "37",
  "PA19": "38",
  "PB16": "39",
  "PB17": "40",
  "PA20": "41",
  "PA21": "42",
  "PA22": "43",
  "PA23": "44",
  "PA24": "45",
  "PA25": "46",
  "GND_47": "47",
  "VDDIO_48": "48",
  "PB22": "49",
  "PB23": "50",
  "PA27": "51",
  "~{RESET}": "52",
  "PA28": "53",
  "GND_54": "54",
  "VDDCORE": "55",
  "VDDIN": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
  "PB03": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_21: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "power_in", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_54: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMDA1J15B-A";
  override referencePrefix = "U";
}

/**
 * SAM DA1 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash w/ 2K RWW, 8K SRAM, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_SAMD:ATSAMDA1J16B-A`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/SAM_D21_DA1_Family_Data%20Sheet_DS40001882E.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class ATSAMDA1J16B_A extends Component.withPins({
  "PA00": "1",
  "PA01": "2",
  "PA02": "3",
  "PA03": "4",
  "PB04": "5",
  "PB05": "6",
  "GNDANA": "7",
  "VDDANA": "8",
  "PB06": "9",
  "PB07": "10",
  "PB08": "11",
  "PB09": "12",
  "PA04": "13",
  "PA05": "14",
  "PA06": "15",
  "PA07": "16",
  "PA08": "17",
  "PA09": "18",
  "PA10": "19",
  "PA11": "20",
  "VDDIO_21": "21",
  "GND_22": "22",
  "PB10": "23",
  "PB11": "24",
  "PB12": "25",
  "PB13": "26",
  "PB14": "27",
  "PB15": "28",
  "PA12": "29",
  "PA13": "30",
  "PA14": "31",
  "PA15": "32",
  "GND_33": "33",
  "VDDIO_34": "34",
  "PA16": "35",
  "PA17": "36",
  "PA18": "37",
  "PA19": "38",
  "PB16": "39",
  "PB17": "40",
  "PA20": "41",
  "PA21": "42",
  "PA22": "43",
  "PA23": "44",
  "PA24": "45",
  "PA25": "46",
  "GND_47": "47",
  "VDDIO_48": "48",
  "PB22": "49",
  "PB23": "50",
  "PA27": "51",
  "~{RESET}": "52",
  "PA28": "53",
  "GND_54": "54",
  "VDDCORE": "55",
  "VDDIN": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
  "PB03": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_21: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "power_in", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "power_in", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", PA28: "bidirectional", GND_54: "passive", VDDCORE: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAMD:ATSAMDA1J16B-A";
  override referencePrefix = "U";
}
