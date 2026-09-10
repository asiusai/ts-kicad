// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * SAM L21 Microchip SMART ARM-based Flash MCU, 48Mhz, 32K Flash, 4K SRAM, TQFP-32
 *
 * KiCad symbol: `MCU_Microchip_SAML:ATSAML21E15B-AUT`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.8mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MCU32/ProductDocuments/DataSheets/SAM-L21-Family-Data-Sheet-DS60001477.pdf
 * Keywords: 32-bit ARM Cortex-M0+ Microcontroller.
 * Default footprint: Package_QFP:TQFP-32_7x7mm_P0.8mm.
 */
export class ATSAML21E15B_AUT extends Component.withPins({
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
  "VDDCORE": "27",
  "GND_28": "28",
  "VSW": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_in", GND_28: "passive", VSW: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAML:ATSAML21E15B-AUT";
  override referencePrefix = "U";
}

/**
 * SAM L21 Microchip SMART ARM-based Flash MCU, 48Mhz, 32K Flash, 4K SRAM, VQFN-32
 *
 * KiCad symbol: `MCU_Microchip_SAML:ATSAML21E15B-MUT`. Reference prefix: `U`.
 * Footprint filters: *QFN*5x5mm*P0.5mm*EP3.6*x3.6*mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MCU32/ProductDocuments/DataSheets/SAM-L21-Family-Data-Sheet-DS60001477.pdf
 * Keywords: 32-bit ARM Cortex-M0+ Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 */
export class ATSAML21E15B_MUT extends Component.withPins({
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
  "VDDCORE": "27",
  "GND_28": "28",
  "VSW": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
  "GND_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_in", GND_28: "passive", VSW: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", GND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAML:ATSAML21E15B-MUT";
  override referencePrefix = "U";
}

/**
 * SAM L21 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash, 8K SRAM, TQFP-32
 *
 * KiCad symbol: `MCU_Microchip_SAML:ATSAML21E16B-AUT`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.8mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MCU32/ProductDocuments/DataSheets/SAM-L21-Family-Data-Sheet-DS60001477.pdf
 * Keywords: 32-bit ARM Cortex-M0+ Microcontroller.
 * Default footprint: Package_QFP:TQFP-32_7x7mm_P0.8mm.
 */
export class ATSAML21E16B_AUT extends Component.withPins({
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
  "VDDCORE": "27",
  "GND_28": "28",
  "VSW": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_in", GND_28: "passive", VSW: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAML:ATSAML21E16B-AUT";
  override referencePrefix = "U";
}

/**
 * SAM L21 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash, 8K SRAM, VQFN-32
 *
 * KiCad symbol: `MCU_Microchip_SAML:ATSAML21E16B-MUT`. Reference prefix: `U`.
 * Footprint filters: *QFN*5x5mm*P0.5mm*EP3.6*x3.6*mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MCU32/ProductDocuments/DataSheets/SAM-L21-Family-Data-Sheet-DS60001477.pdf
 * Keywords: 32-bit ARM Cortex-M0+ Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 */
export class ATSAML21E16B_MUT extends Component.withPins({
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
  "VDDCORE": "27",
  "GND_28": "28",
  "VSW": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
  "GND_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_in", GND_28: "passive", VSW: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", GND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAML:ATSAML21E16B-MUT";
  override referencePrefix = "U";
}

/**
 * SAM L21 Microchip SMART ARM-based Flash MCU, 48Mhz, 128K Flash, 16K SRAM, TQFP-32
 *
 * KiCad symbol: `MCU_Microchip_SAML:ATSAML21E17B-AUT`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.8mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MCU32/ProductDocuments/DataSheets/SAM-L21-Family-Data-Sheet-DS60001477.pdf
 * Keywords: 32-bit ARM Cortex-M0+ Microcontroller.
 * Default footprint: Package_QFP:TQFP-32_7x7mm_P0.8mm.
 */
export class ATSAML21E17B_AUT extends Component.withPins({
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
  "VDDCORE": "27",
  "GND_28": "28",
  "VSW": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_in", GND_28: "passive", VSW: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAML:ATSAML21E17B-AUT";
  override referencePrefix = "U";
}

/**
 * SAM L21 Microchip SMART ARM-based Flash MCU, 48Mhz, 128K Flash, 16K SRAM, VQFN-32
 *
 * KiCad symbol: `MCU_Microchip_SAML:ATSAML21E17B-MUT`. Reference prefix: `U`.
 * Footprint filters: *QFN*5x5mm*P0.5mm*EP3.6*x3.6*mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MCU32/ProductDocuments/DataSheets/SAM-L21-Family-Data-Sheet-DS60001477.pdf
 * Keywords: 32-bit ARM Cortex-M0+ Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 */
export class ATSAML21E17B_MUT extends Component.withPins({
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
  "VDDCORE": "27",
  "GND_28": "28",
  "VSW": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
  "GND_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_in", GND_28: "passive", VSW: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", GND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAML:ATSAML21E17B-MUT";
  override referencePrefix = "U";
}

/**
 * SAM L21 Microchip SMART ARM-based Flash MCU, 48Mhz, 256K Flash, 32K SRAM, TQFP-32
 *
 * KiCad symbol: `MCU_Microchip_SAML:ATSAML21E18B-AUT`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.8mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MCU32/ProductDocuments/DataSheets/SAM-L21-Family-Data-Sheet-DS60001477.pdf
 * Keywords: 32-bit ARM Cortex-M0+ Microcontroller.
 * Default footprint: Package_QFP:TQFP-32_7x7mm_P0.8mm.
 */
export class ATSAML21E18B_AUT extends Component.withPins({
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
  "VDDCORE": "27",
  "GND_28": "28",
  "VSW": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_in", GND_28: "passive", VSW: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAML:ATSAML21E18B-AUT";
  override referencePrefix = "U";
}

/**
 * SAM L21 Microchip SMART ARM-based Flash MCU, 48Mhz, 256K Flash, 32K SRAM, VQFN-32
 *
 * KiCad symbol: `MCU_Microchip_SAML:ATSAML21E18B-MUT`. Reference prefix: `U`.
 * Footprint filters: *QFN*5x5mm*P0.5mm*EP3.6*x3.6*mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MCU32/ProductDocuments/DataSheets/SAM-L21-Family-Data-Sheet-DS60001477.pdf
 * Keywords: 32-bit ARM Cortex-M0+ Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 */
export class ATSAML21E18B_MUT extends Component.withPins({
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
  "VDDCORE": "27",
  "GND_28": "28",
  "VSW": "29",
  "VDDIN": "30",
  "PA30": "31",
  "PA31": "32",
  "GND_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", VDDANA: "power_in", GND_10: "power_in", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_in", GND_28: "passive", VSW: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", GND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAML:ATSAML21E18B-MUT";
  override referencePrefix = "U";
}

/**
 * SAM L21 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash, 8K SRAM, TQFP-48
 *
 * KiCad symbol: `MCU_Microchip_SAML:ATSAML21G16B-AUT`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MCU32/ProductDocuments/DataSheets/SAM-L21-Family-Data-Sheet-DS60001477.pdf
 * Keywords: 32-bit ARM Cortex-M0+ Microcontroller.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class ATSAML21G16B_AUT extends Component.withPins({
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
  "VDDCORE": "41",
  "GND_42": "42",
  "VSW": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "passive", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_in", GND_42: "passive", VSW: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAML:ATSAML21G16B-AUT";
  override referencePrefix = "U";
}

/**
 * SAM L21 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash, 8K SRAM, VQFN-48
 *
 * KiCad symbol: `MCU_Microchip_SAML:ATSAML21G16B-MUT`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.5mm*EP5.15x5.15mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MCU32/ProductDocuments/DataSheets/SAM-L21-Family-Data-Sheet-DS60001477.pdf
 * Keywords: 32-bit ARM Cortex-M0+ Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class ATSAML21G16B_MUT extends Component.withPins({
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
  "VDDCORE": "41",
  "GND_42": "42",
  "VSW": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
  "GND_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "passive", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_in", GND_42: "passive", VSW: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", GND_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAML:ATSAML21G16B-MUT";
  override referencePrefix = "U";
}

/**
 * SAM L21 Microchip SMART ARM-based Flash MCU, 48Mhz, 128K Flash, 16K SRAM, TQFP-48
 *
 * KiCad symbol: `MCU_Microchip_SAML:ATSAML21G17B-AUT`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MCU32/ProductDocuments/DataSheets/SAM-L21-Family-Data-Sheet-DS60001477.pdf
 * Keywords: 32-bit ARM Cortex-M0+ Microcontroller.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class ATSAML21G17B_AUT extends Component.withPins({
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
  "VDDCORE": "41",
  "GND_42": "42",
  "VSW": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "passive", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_in", GND_42: "passive", VSW: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAML:ATSAML21G17B-AUT";
  override referencePrefix = "U";
}

/**
 * SAM L21 Microchip SMART ARM-based Flash MCU, 48Mhz, 128K Flash, 16K SRAM, VQFN-48
 *
 * KiCad symbol: `MCU_Microchip_SAML:ATSAML21G17B-MUT`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.5mm*EP5.15x5.15mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MCU32/ProductDocuments/DataSheets/SAM-L21-Family-Data-Sheet-DS60001477.pdf
 * Keywords: 32-bit ARM Cortex-M0+ Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class ATSAML21G17B_MUT extends Component.withPins({
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
  "VDDCORE": "41",
  "GND_42": "42",
  "VSW": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
  "GND_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "passive", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_in", GND_42: "passive", VSW: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", GND_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAML:ATSAML21G17B-MUT";
  override referencePrefix = "U";
}

/**
 * SAM L21 Microchip SMART ARM-based Flash MCU, 48Mhz, 256K Flash, 32K SRAM, TQFP-48
 *
 * KiCad symbol: `MCU_Microchip_SAML:ATSAML21G18B-AUT`. Reference prefix: `U`.
 * Footprint filters: TQFP*7x7mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MCU32/ProductDocuments/DataSheets/SAM-L21-Family-Data-Sheet-DS60001477.pdf
 * Keywords: 32-bit ARM Cortex-M0+ Microcontroller.
 * Default footprint: Package_QFP:TQFP-48_7x7mm_P0.5mm.
 */
export class ATSAML21G18B_AUT extends Component.withPins({
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
  "VDDCORE": "41",
  "GND_42": "42",
  "VSW": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "passive", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_in", GND_42: "passive", VSW: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAML:ATSAML21G18B-AUT";
  override referencePrefix = "U";
}

/**
 * SAM L21 Microchip SMART ARM-based Flash MCU, 48Mhz, 256K Flash, 32K SRAM, VQFN-48
 *
 * KiCad symbol: `MCU_Microchip_SAML:ATSAML21G18B-MUT`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm*P0.5mm*EP5.15x5.15mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MCU32/ProductDocuments/DataSheets/SAM-L21-Family-Data-Sheet-DS60001477.pdf
 * Keywords: 32-bit ARM Cortex-M0+ Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class ATSAML21G18B_MUT extends Component.withPins({
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
  "VDDCORE": "41",
  "GND_42": "42",
  "VSW": "43",
  "VDDIN": "44",
  "PA30": "45",
  "PA31": "46",
  "PB02": "47",
  "PB03": "48",
  "GND_49": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_17: "power_in", GND_18: "power_in", PB10: "bidirectional", PB11: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_35: "passive", VDDIO_36: "passive", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_in", GND_42: "passive", VSW: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", GND_49: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAML:ATSAML21G18B-MUT";
  override referencePrefix = "U";
}

/**
 * SAM L21 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash, 8K SRAM, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_SAML:ATSAML21J16B-AUT`. Reference prefix: `U`.
 * Footprint filters: TQFP*64*10x10mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MCU32/ProductDocuments/DataSheets/SAM-L21-Family-Data-Sheet-DS60001477.pdf
 * Keywords: 32-bit ARM Cortex-M0+ Microcontroller.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class ATSAML21J16B_AUT extends Component.withPins({
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
  "VDDCORE": "53",
  "GND_54": "54",
  "VSW": "55",
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
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_21: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "passive", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "passive", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_in", GND_54: "passive", VSW: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAML:ATSAML21J16B-AUT";
  override referencePrefix = "U";
}

/**
 * SAM L21 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash, 8K SRAM, VQFN-64
 *
 * KiCad symbol: `MCU_Microchip_SAML:ATSAML21J16B-MUT`. Reference prefix: `U`.
 * Footprint filters: *QFN*9x9mm*P0.5mm*EP4.7*x4.7*mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MCU32/ProductDocuments/DataSheets/SAM-L21-Family-Data-Sheet-DS60001477.pdf
 * Keywords: 32-bit ARM Cortex-M0+ Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP4.7x4.7mm.
 */
export class ATSAML21J16B_MUT extends Component.withPins({
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
  "VDDCORE": "53",
  "GND_54": "54",
  "VSW": "55",
  "VDDIN": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
  "PB03": "64",
  "GND_65": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_21: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "passive", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "passive", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_in", GND_54: "passive", VSW: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", GND_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAML:ATSAML21J16B-MUT";
  override referencePrefix = "U";
}

/**
 * SAM L21 Microchip SMART ARM-based Flash MCU, 48Mhz, 128K Flash, 16K SRAM, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_SAML:ATSAML21J17B-AUT`. Reference prefix: `U`.
 * Footprint filters: TQFP*64*10x10mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MCU32/ProductDocuments/DataSheets/SAM-L21-Family-Data-Sheet-DS60001477.pdf
 * Keywords: 32-bit ARM Cortex-M0+ Microcontroller.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class ATSAML21J17B_AUT extends Component.withPins({
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
  "VDDCORE": "53",
  "GND_54": "54",
  "VSW": "55",
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
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_21: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "passive", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "passive", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_in", GND_54: "passive", VSW: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAML:ATSAML21J17B-AUT";
  override referencePrefix = "U";
}

/**
 * SAM L21 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash, 8K SRAM, VQFN-64
 *
 * KiCad symbol: `MCU_Microchip_SAML:ATSAML21J17B-MUT`. Reference prefix: `U`.
 * Footprint filters: *QFN*9x9mm*P0.5mm*EP4.7*x4.7*mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MCU32/ProductDocuments/DataSheets/SAM-L21-Family-Data-Sheet-DS60001477.pdf
 * Keywords: 32-bit ARM Cortex-M0+ Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP4.7x4.7mm.
 */
export class ATSAML21J17B_MUT extends Component.withPins({
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
  "VDDCORE": "53",
  "GND_54": "54",
  "VSW": "55",
  "VDDIN": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
  "PB03": "64",
  "GND_65": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_21: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "passive", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "passive", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_in", GND_54: "passive", VSW: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", GND_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAML:ATSAML21J17B-MUT";
  override referencePrefix = "U";
}

/**
 * SAM L21 Microchip SMART ARM-based Flash MCU, 48Mhz, 256K Flash, 32K SRAM, TQFP-64
 *
 * KiCad symbol: `MCU_Microchip_SAML:ATSAML21J18B-AUT`. Reference prefix: `U`.
 * Footprint filters: TQFP*64*10x10mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MCU32/ProductDocuments/DataSheets/SAM-L21-Family-Data-Sheet-DS60001477.pdf
 * Keywords: 32-bit ARM Cortex-M0+ Microcontroller.
 * Default footprint: Package_QFP:TQFP-64_10x10mm_P0.5mm.
 */
export class ATSAML21J18B_AUT extends Component.withPins({
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
  "VDDCORE": "53",
  "GND_54": "54",
  "VSW": "55",
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
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_21: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "passive", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "passive", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_in", GND_54: "passive", VSW: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAML:ATSAML21J18B-AUT";
  override referencePrefix = "U";
}

/**
 * SAM L21 Microchip SMART ARM-based Flash MCU, 48Mhz, 64K Flash, 8K SRAM, VQFN-64
 *
 * KiCad symbol: `MCU_Microchip_SAML:ATSAML21J18B-MUT`. Reference prefix: `U`.
 * Footprint filters: *QFN*9x9mm*P0.5mm*EP4.7*x4.7*mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MCU32/ProductDocuments/DataSheets/SAM-L21-Family-Data-Sheet-DS60001477.pdf
 * Keywords: 32-bit ARM Cortex-M0+ Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP4.7x4.7mm.
 */
export class ATSAML21J18B_MUT extends Component.withPins({
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
  "VDDCORE": "53",
  "GND_54": "54",
  "VSW": "55",
  "VDDIN": "56",
  "PA30": "57",
  "PA31": "58",
  "PB30": "59",
  "PB31": "60",
  "PB00": "61",
  "PB01": "62",
  "PB02": "63",
  "PB03": "64",
  "GND_65": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PA00: "bidirectional", PA01: "bidirectional", PA02: "bidirectional", PA03: "bidirectional", PB04: "bidirectional", PB05: "bidirectional", GNDANA: "power_in", VDDANA: "power_in", PB06: "bidirectional", PB07: "bidirectional", PB08: "bidirectional", PB09: "bidirectional", PA04: "bidirectional", PA05: "bidirectional", PA06: "bidirectional", PA07: "bidirectional", PA08: "bidirectional", PA09: "bidirectional", PA10: "bidirectional", PA11: "bidirectional", VDDIO_21: "power_in", GND_22: "power_in", PB10: "bidirectional", PB11: "bidirectional", PB12: "bidirectional", PB13: "bidirectional", PB14: "bidirectional", PB15: "bidirectional", PA12: "bidirectional", PA13: "bidirectional", PA14: "bidirectional", PA15: "bidirectional", GND_33: "passive", VDDIO_34: "passive", PA16: "bidirectional", PA17: "bidirectional", PA18: "bidirectional", PA19: "bidirectional", PB16: "bidirectional", PB17: "bidirectional", PA20: "bidirectional", PA21: "bidirectional", PA22: "bidirectional", PA23: "bidirectional", PA24: "bidirectional", PA25: "bidirectional", GND_47: "passive", VDDIO_48: "passive", PB22: "bidirectional", PB23: "bidirectional", PA27: "bidirectional", "~{RESET}": "input", VDDCORE: "power_in", GND_54: "passive", VSW: "power_out", VDDIN: "power_in", PA30: "bidirectional", PA31: "bidirectional", PB30: "bidirectional", PB31: "bidirectional", PB00: "bidirectional", PB01: "bidirectional", PB02: "bidirectional", PB03: "bidirectional", GND_65: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_SAML:ATSAML21J18B-MUT";
  override referencePrefix = "U";
}
