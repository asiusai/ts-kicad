// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * A microcontroller by Raspberry Pi, Dual ARM Cortex-M0+, 133MHz, no flash, 264KB SRAM, 8 PIO state machines, VQFN-56
 *
 * KiCad symbol: `MCU_RaspberryPi:RP2040`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm?P0.4mm?EP3.2x3.2mm*.
 * @see https://datasheets.raspberrypi.com/rp2040/rp2040-datasheet.pdf
 * Keywords: RPi Pico USB QSPI I2C UART SC0914.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP3.2x3.2mm.
 */
export class RP2040 extends Component.withPins({
  "IOVDD_1": "1",
  "GPIO0": "2",
  "GPIO1": "3",
  "GPIO2": "4",
  "GPIO3": "5",
  "GPIO4": "6",
  "GPIO5": "7",
  "GPIO6": "8",
  "GPIO7": "9",
  "IOVDD_10": "10",
  "GPIO8": "11",
  "GPIO9": "12",
  "GPIO10": "13",
  "GPIO11": "14",
  "GPIO12": "15",
  "GPIO13": "16",
  "GPIO14": "17",
  "GPIO15": "18",
  "TESTEN": "19",
  "XIN": "20",
  "XOUT": "21",
  "IOVDD_22": "22",
  "DVDD_23": "23",
  "SWCLK": "24",
  "SWDIO": "25",
  "RUN": "26",
  "GPIO16": "27",
  "GPIO17": "28",
  "GPIO18": "29",
  "GPIO19": "30",
  "GPIO20": "31",
  "GPIO21": "32",
  "IOVDD_33": "33",
  "GPIO22": "34",
  "GPIO23": "35",
  "GPIO24": "36",
  "GPIO25": "37",
  "GPIO26/ADC0": "38",
  "GPIO27/ADC1": "39",
  "GPIO28/ADC2": "40",
  "GPIO29/ADC3": "41",
  "IOVDD_42": "42",
  "ADC_AVDD": "43",
  "VREG_VIN": "44",
  "VREG_VOUT": "45",
  "USB_DM": "46",
  "USB_DP": "47",
  "USB_VDD": "48",
  "IOVDD_49": "49",
  "DVDD_50": "50",
  "QSPI_SD3": "51",
  "QSPI_SCLK": "52",
  "QSPI_SD0": "53",
  "QSPI_SD2": "54",
  "QSPI_SD1": "55",
  "~{QSPI_SS}": "56",
  "GND": "57",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IOVDD_1: "power_in", GPIO0: "bidirectional", GPIO1: "bidirectional", GPIO2: "bidirectional", GPIO3: "bidirectional", GPIO4: "bidirectional", GPIO5: "bidirectional", GPIO6: "bidirectional", GPIO7: "bidirectional", IOVDD_10: "passive", GPIO8: "bidirectional", GPIO9: "bidirectional", GPIO10: "bidirectional", GPIO11: "bidirectional", GPIO12: "bidirectional", GPIO13: "bidirectional", GPIO14: "bidirectional", GPIO15: "bidirectional", TESTEN: "input", XIN: "input", XOUT: "output", IOVDD_22: "passive", DVDD_23: "power_in", SWCLK: "input", SWDIO: "bidirectional", RUN: "input", GPIO16: "bidirectional", GPIO17: "bidirectional", GPIO18: "bidirectional", GPIO19: "bidirectional", GPIO20: "bidirectional", GPIO21: "bidirectional", IOVDD_33: "passive", GPIO22: "bidirectional", GPIO23: "bidirectional", GPIO24: "bidirectional", GPIO25: "bidirectional", "GPIO26/ADC0": "bidirectional", "GPIO27/ADC1": "bidirectional", "GPIO28/ADC2": "bidirectional", "GPIO29/ADC3": "bidirectional", IOVDD_42: "passive", ADC_AVDD: "power_in", VREG_VIN: "power_in", VREG_VOUT: "power_out", USB_DM: "bidirectional", USB_DP: "bidirectional", USB_VDD: "power_in", IOVDD_49: "passive", DVDD_50: "passive", QSPI_SD3: "bidirectional", QSPI_SCLK: "output", QSPI_SD0: "bidirectional", QSPI_SD2: "bidirectional", QSPI_SD1: "bidirectional", "~{QSPI_SS}": "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_RaspberryPi:RP2040";
  override referencePrefix = "U";
}

/**
 * A microcontroller by Raspberry Pi, dual CPU architecture (ARM Cortex-M33 / RISC-V Hazard3), 150MHz, no flash, 520KB SRAM, 12 PIO state machines, VQFN-60
 *
 * KiCad symbol: `MCU_RaspberryPi:RP2350A`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm?P0.4mm?EP3.4x3.4mm*.
 * @see https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf
 * Keywords: RPi Pico USB QSPI I2C UART ADC SC1509.
 * Default footprint: Package_DFN_QFN:QFN-60-1EP_7x7mm_P0.4mm_EP3.4x3.4mm.
 */
export class RP2350A extends Component.withPins({
  "DVDD_6": "6",
  "DVDD_39": "39",
  "VREG_AVDD": "46",
  "VREG_PGND": "47",
  "USB_OTP_VDD": "53",
  "QSPI_IOVDD": "54",
  "IOVDD_1": "1",
  "GPIO0": "2",
  "GPIO1": "3",
  "GPIO2": "4",
  "GPIO3": "5",
  "GPIO4": "7",
  "GPIO5": "8",
  "GPIO6": "9",
  "GPIO7": "10",
  "IOVDD_11": "11",
  "GPIO8": "12",
  "GPIO9": "13",
  "GPIO10": "14",
  "GPIO11": "15",
  "GPIO12": "16",
  "GPIO13": "17",
  "GPIO14": "18",
  "GPIO15": "19",
  "IOVDD_20": "20",
  "XIN": "21",
  "XOUT": "22",
  "DVDD_23": "23",
  "SWCLK": "24",
  "SWDIO": "25",
  "RUN": "26",
  "GPIO16": "27",
  "GPIO17": "28",
  "GPIO18": "29",
  "IOVDD_30": "30",
  "GPIO19": "31",
  "GPIO20": "32",
  "GPIO21": "33",
  "GPIO22": "34",
  "GPIO23": "35",
  "GPIO24": "36",
  "GPIO25": "37",
  "IOVDD_38": "38",
  "GPIO26/ADC0": "40",
  "GPIO27/ADC1": "41",
  "GPIO28/ADC2": "42",
  "GPIO29/ADC3": "43",
  "ADC_AVDD": "44",
  "IOVDD_45": "45",
  "VREG_LX": "48",
  "VREG_VIN": "49",
  "VREG_FB": "50",
  "USB_DM": "51",
  "USB_DP": "52",
  "QSPI_SD3": "55",
  "QSPI_SCLK": "56",
  "QSPI_SD0": "57",
  "QSPI_SD2": "58",
  "QSPI_SD1": "59",
  "~{QSPI_SS}": "60",
  "GND": "61",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DVDD_6: "power_in", DVDD_39: "passive", VREG_AVDD: "power_in", VREG_PGND: "power_in", USB_OTP_VDD: "power_in", QSPI_IOVDD: "power_in", IOVDD_1: "power_in", GPIO0: "bidirectional", GPIO1: "bidirectional", GPIO2: "bidirectional", GPIO3: "bidirectional", GPIO4: "bidirectional", GPIO5: "bidirectional", GPIO6: "bidirectional", GPIO7: "bidirectional", IOVDD_11: "passive", GPIO8: "bidirectional", GPIO9: "bidirectional", GPIO10: "bidirectional", GPIO11: "bidirectional", GPIO12: "bidirectional", GPIO13: "bidirectional", GPIO14: "bidirectional", GPIO15: "bidirectional", IOVDD_20: "passive", XIN: "input", XOUT: "output", DVDD_23: "passive", SWCLK: "input", SWDIO: "bidirectional", RUN: "input", GPIO16: "bidirectional", GPIO17: "bidirectional", GPIO18: "bidirectional", IOVDD_30: "passive", GPIO19: "bidirectional", GPIO20: "bidirectional", GPIO21: "bidirectional", GPIO22: "bidirectional", GPIO23: "bidirectional", GPIO24: "bidirectional", GPIO25: "bidirectional", IOVDD_38: "passive", "GPIO26/ADC0": "bidirectional", "GPIO27/ADC1": "bidirectional", "GPIO28/ADC2": "bidirectional", "GPIO29/ADC3": "bidirectional", ADC_AVDD: "power_in", IOVDD_45: "passive", VREG_LX: "power_out", VREG_VIN: "power_in", VREG_FB: "passive", USB_DM: "bidirectional", USB_DP: "bidirectional", QSPI_SD3: "bidirectional", QSPI_SCLK: "output", QSPI_SD0: "bidirectional", QSPI_SD2: "bidirectional", QSPI_SD1: "bidirectional", "~{QSPI_SS}": "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_RaspberryPi:RP2350A";
  override referencePrefix = "U";
}

/**
 * A microcontroller by Raspberry Pi, dual CPU architecture (ARM Cortex-M33 / RISC-V Hazard3), 150MHz, no flash, 520KB SRAM, 12 PIO state machines, VQFN-80
 *
 * KiCad symbol: `MCU_RaspberryPi:RP2350B`. Reference prefix: `U`.
 * Footprint filters: *QFN*10x10mm?P0.4mm?EP3.4x3.4mm*.
 * @see https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf
 * Keywords: RPi Pico USB QSPI I2C UART ADC SC1510.
 * Default footprint: Package_DFN_QFN:QFN-80-1EP_10x10mm_P0.4mm_EP3.4x3.4mm.
 */
export class RP2350B extends Component.withPins({
  "DVDD_10": "10",
  "GPIO30": "38",
  "GPIO31": "39",
  "GPIO32": "40",
  "GPIO33": "42",
  "GPIO34": "43",
  "GPIO35": "44",
  "GPIO36": "45",
  "GPIO37": "46",
  "GPIO38": "47",
  "GPIO39": "48",
  "GPIO40/ADC0": "49",
  "IOVDD_50": "50",
  "DVDD_51": "51",
  "GPIO41/ADC1": "52",
  "GPIO42/ADC2": "53",
  "GPIO43/ADC3": "54",
  "GPIO44/ADC4": "55",
  "GPIO45/ADC5": "56",
  "GPIO46/ADC6": "57",
  "GPIO47/ADC7": "58",
  "IOVDD_60": "60",
  "VREG_AVDD": "61",
  "VREG_PGND": "62",
  "USB_OTP_VDD": "68",
  "QSPI_IOVDD": "69",
  "IOVDD_76": "76",
  "GPIO4": "1",
  "GPIO5": "2",
  "GPIO6": "3",
  "GPIO7": "4",
  "IOVDD_5": "5",
  "GPIO8": "6",
  "GPIO9": "7",
  "GPIO10": "8",
  "GPIO11": "9",
  "GPIO12": "11",
  "GPIO13": "12",
  "GPIO14": "13",
  "GPIO15": "14",
  "IOVDD_15": "15",
  "GPIO16": "16",
  "GPIO17": "17",
  "GPIO18": "18",
  "GPIO19": "19",
  "GPIO20": "20",
  "GPIO21": "21",
  "GPIO22": "22",
  "GPIO23": "23",
  "IOVDD_24": "24",
  "GPIO24": "25",
  "GPIO25": "26",
  "GPIO26": "27",
  "GPIO27": "28",
  "IOVDD_29": "29",
  "XIN": "30",
  "XOUT": "31",
  "DVDD_32": "32",
  "SWCLK": "33",
  "SWDIO": "34",
  "RUN": "35",
  "GPIO28": "36",
  "GPIO29": "37",
  "IOVDD_41": "41",
  "ADC_AVDD": "59",
  "VREG_LX": "63",
  "VREG_VIN": "64",
  "VREG_FB": "65",
  "USB_DM": "66",
  "USB_DP": "67",
  "QSPI_SD3": "70",
  "QSPI_SCLK": "71",
  "QSPI_SD0": "72",
  "QSPI_SD2": "73",
  "QSPI_SD1": "74",
  "~{QSPI_SS}": "75",
  "GPIO0": "77",
  "GPIO1": "78",
  "GPIO2": "79",
  "GPIO3": "80",
  "GND": "81",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DVDD_10: "power_in", GPIO30: "bidirectional", GPIO31: "bidirectional", GPIO32: "bidirectional", GPIO33: "bidirectional", GPIO34: "bidirectional", GPIO35: "bidirectional", GPIO36: "bidirectional", GPIO37: "bidirectional", GPIO38: "bidirectional", GPIO39: "bidirectional", "GPIO40/ADC0": "bidirectional", IOVDD_50: "passive", DVDD_51: "passive", "GPIO41/ADC1": "bidirectional", "GPIO42/ADC2": "bidirectional", "GPIO43/ADC3": "bidirectional", "GPIO44/ADC4": "bidirectional", "GPIO45/ADC5": "bidirectional", "GPIO46/ADC6": "bidirectional", "GPIO47/ADC7": "bidirectional", IOVDD_60: "passive", VREG_AVDD: "power_in", VREG_PGND: "power_in", USB_OTP_VDD: "power_in", QSPI_IOVDD: "power_in", IOVDD_76: "passive", GPIO4: "bidirectional", GPIO5: "bidirectional", GPIO6: "bidirectional", GPIO7: "bidirectional", IOVDD_5: "power_in", GPIO8: "bidirectional", GPIO9: "bidirectional", GPIO10: "bidirectional", GPIO11: "bidirectional", GPIO12: "bidirectional", GPIO13: "bidirectional", GPIO14: "bidirectional", GPIO15: "bidirectional", IOVDD_15: "passive", GPIO16: "bidirectional", GPIO17: "bidirectional", GPIO18: "bidirectional", GPIO19: "bidirectional", GPIO20: "bidirectional", GPIO21: "bidirectional", GPIO22: "bidirectional", GPIO23: "bidirectional", IOVDD_24: "passive", GPIO24: "bidirectional", GPIO25: "bidirectional", GPIO26: "bidirectional", GPIO27: "bidirectional", IOVDD_29: "passive", XIN: "input", XOUT: "output", DVDD_32: "passive", SWCLK: "input", SWDIO: "bidirectional", RUN: "input", GPIO28: "bidirectional", GPIO29: "bidirectional", IOVDD_41: "passive", ADC_AVDD: "power_in", VREG_LX: "power_out", VREG_VIN: "power_in", VREG_FB: "passive", USB_DM: "bidirectional", USB_DP: "bidirectional", QSPI_SD3: "bidirectional", QSPI_SCLK: "output", QSPI_SD0: "bidirectional", QSPI_SD2: "bidirectional", QSPI_SD1: "bidirectional", "~{QSPI_SS}": "output", GPIO0: "bidirectional", GPIO1: "bidirectional", GPIO2: "bidirectional", GPIO3: "bidirectional", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_RaspberryPi:RP2350B";
  override referencePrefix = "U";
}

/**
 * A microcontroller by Raspberry Pi, dual CPU architecture (ARM Cortex-M33 / RISC-V Hazard3), 150MHz, 2MB flash, 520KB SRAM, 12 PIO state machines, VQFN-60
 *
 * KiCad symbol: `MCU_RaspberryPi:RP2354A`. Reference prefix: `U`.
 * Footprint filters: *QFN*7x7mm?P0.4mm?EP3.4x3.4mm*.
 * @see https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf
 * Keywords: RPi Pico USB QSPI I2C UART ADC SC1511.
 * Default footprint: Package_DFN_QFN:QFN-60-1EP_7x7mm_P0.4mm_EP3.4x3.4mm.
 */
export class RP2354A extends Component.withPins({
  "DVDD_6": "6",
  "DVDD_39": "39",
  "VREG_AVDD": "46",
  "VREG_PGND": "47",
  "USB_OTP_VDD": "53",
  "QSPI_IOVDD": "54",
  "IOVDD_1": "1",
  "GPIO0": "2",
  "GPIO1": "3",
  "GPIO2": "4",
  "GPIO3": "5",
  "GPIO4": "7",
  "GPIO5": "8",
  "GPIO6": "9",
  "GPIO7": "10",
  "IOVDD_11": "11",
  "GPIO8": "12",
  "GPIO9": "13",
  "GPIO10": "14",
  "GPIO11": "15",
  "GPIO12": "16",
  "GPIO13": "17",
  "GPIO14": "18",
  "GPIO15": "19",
  "IOVDD_20": "20",
  "XIN": "21",
  "XOUT": "22",
  "DVDD_23": "23",
  "SWCLK": "24",
  "SWDIO": "25",
  "RUN": "26",
  "GPIO16": "27",
  "GPIO17": "28",
  "GPIO18": "29",
  "IOVDD_30": "30",
  "GPIO19": "31",
  "GPIO20": "32",
  "GPIO21": "33",
  "GPIO22": "34",
  "GPIO23": "35",
  "GPIO24": "36",
  "GPIO25": "37",
  "IOVDD_38": "38",
  "GPIO26/ADC0": "40",
  "GPIO27/ADC1": "41",
  "GPIO28/ADC2": "42",
  "GPIO29/ADC3": "43",
  "ADC_AVDD": "44",
  "IOVDD_45": "45",
  "VREG_LX": "48",
  "VREG_VIN": "49",
  "VREG_FB": "50",
  "USB_DM": "51",
  "USB_DP": "52",
  "QSPI_SD3": "55",
  "QSPI_SCLK": "56",
  "QSPI_SD0": "57",
  "QSPI_SD2": "58",
  "QSPI_SD1": "59",
  "~{QSPI_SS}": "60",
  "GND": "61",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DVDD_6: "power_in", DVDD_39: "passive", VREG_AVDD: "power_in", VREG_PGND: "power_in", USB_OTP_VDD: "power_in", QSPI_IOVDD: "power_in", IOVDD_1: "power_in", GPIO0: "bidirectional", GPIO1: "bidirectional", GPIO2: "bidirectional", GPIO3: "bidirectional", GPIO4: "bidirectional", GPIO5: "bidirectional", GPIO6: "bidirectional", GPIO7: "bidirectional", IOVDD_11: "passive", GPIO8: "bidirectional", GPIO9: "bidirectional", GPIO10: "bidirectional", GPIO11: "bidirectional", GPIO12: "bidirectional", GPIO13: "bidirectional", GPIO14: "bidirectional", GPIO15: "bidirectional", IOVDD_20: "passive", XIN: "input", XOUT: "output", DVDD_23: "passive", SWCLK: "input", SWDIO: "bidirectional", RUN: "input", GPIO16: "bidirectional", GPIO17: "bidirectional", GPIO18: "bidirectional", IOVDD_30: "passive", GPIO19: "bidirectional", GPIO20: "bidirectional", GPIO21: "bidirectional", GPIO22: "bidirectional", GPIO23: "bidirectional", GPIO24: "bidirectional", GPIO25: "bidirectional", IOVDD_38: "passive", "GPIO26/ADC0": "bidirectional", "GPIO27/ADC1": "bidirectional", "GPIO28/ADC2": "bidirectional", "GPIO29/ADC3": "bidirectional", ADC_AVDD: "power_in", IOVDD_45: "passive", VREG_LX: "power_out", VREG_VIN: "power_in", VREG_FB: "passive", USB_DM: "bidirectional", USB_DP: "bidirectional", QSPI_SD3: "bidirectional", QSPI_SCLK: "output", QSPI_SD0: "bidirectional", QSPI_SD2: "bidirectional", QSPI_SD1: "bidirectional", "~{QSPI_SS}": "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_RaspberryPi:RP2354A";
  override referencePrefix = "U";
}

/**
 * A microcontroller by Raspberry Pi, dual CPU architecture (ARM Cortex-M33 / RISC-V Hazard3), 150MHz, 2MB flash, 520KB SRAM, 12 PIO state machines, VQFN-80
 *
 * KiCad symbol: `MCU_RaspberryPi:RP2354B`. Reference prefix: `U`.
 * Footprint filters: *QFN*10x10mm?P0.4mm?EP3.4x3.4mm*.
 * @see https://datasheets.raspberrypi.com/rp2350/rp2350-datasheet.pdf
 * Keywords: RPi Pico USB QSPI I2C UART ADC SC1512.
 * Default footprint: Package_DFN_QFN:QFN-80-1EP_10x10mm_P0.4mm_EP3.4x3.4mm.
 */
export class RP2354B extends Component.withPins({
  "DVDD_10": "10",
  "GPIO30": "38",
  "GPIO31": "39",
  "GPIO32": "40",
  "GPIO33": "42",
  "GPIO34": "43",
  "GPIO35": "44",
  "GPIO36": "45",
  "GPIO37": "46",
  "GPIO38": "47",
  "GPIO39": "48",
  "GPIO40/ADC0": "49",
  "IOVDD_50": "50",
  "DVDD_51": "51",
  "GPIO41/ADC1": "52",
  "GPIO42/ADC2": "53",
  "GPIO43/ADC3": "54",
  "GPIO44/ADC4": "55",
  "GPIO45/ADC5": "56",
  "GPIO46/ADC6": "57",
  "GPIO47/ADC7": "58",
  "IOVDD_60": "60",
  "VREG_AVDD": "61",
  "VREG_PGND": "62",
  "USB_OTP_VDD": "68",
  "QSPI_IOVDD": "69",
  "IOVDD_76": "76",
  "GPIO4": "1",
  "GPIO5": "2",
  "GPIO6": "3",
  "GPIO7": "4",
  "IOVDD_5": "5",
  "GPIO8": "6",
  "GPIO9": "7",
  "GPIO10": "8",
  "GPIO11": "9",
  "GPIO12": "11",
  "GPIO13": "12",
  "GPIO14": "13",
  "GPIO15": "14",
  "IOVDD_15": "15",
  "GPIO16": "16",
  "GPIO17": "17",
  "GPIO18": "18",
  "GPIO19": "19",
  "GPIO20": "20",
  "GPIO21": "21",
  "GPIO22": "22",
  "GPIO23": "23",
  "IOVDD_24": "24",
  "GPIO24": "25",
  "GPIO25": "26",
  "GPIO26": "27",
  "GPIO27": "28",
  "IOVDD_29": "29",
  "XIN": "30",
  "XOUT": "31",
  "DVDD_32": "32",
  "SWCLK": "33",
  "SWDIO": "34",
  "RUN": "35",
  "GPIO28": "36",
  "GPIO29": "37",
  "IOVDD_41": "41",
  "ADC_AVDD": "59",
  "VREG_LX": "63",
  "VREG_VIN": "64",
  "VREG_FB": "65",
  "USB_DM": "66",
  "USB_DP": "67",
  "QSPI_SD3": "70",
  "QSPI_SCLK": "71",
  "QSPI_SD0": "72",
  "QSPI_SD2": "73",
  "QSPI_SD1": "74",
  "~{QSPI_SS}": "75",
  "GPIO0": "77",
  "GPIO1": "78",
  "GPIO2": "79",
  "GPIO3": "80",
  "GND": "81",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DVDD_10: "power_in", GPIO30: "bidirectional", GPIO31: "bidirectional", GPIO32: "bidirectional", GPIO33: "bidirectional", GPIO34: "bidirectional", GPIO35: "bidirectional", GPIO36: "bidirectional", GPIO37: "bidirectional", GPIO38: "bidirectional", GPIO39: "bidirectional", "GPIO40/ADC0": "bidirectional", IOVDD_50: "passive", DVDD_51: "passive", "GPIO41/ADC1": "bidirectional", "GPIO42/ADC2": "bidirectional", "GPIO43/ADC3": "bidirectional", "GPIO44/ADC4": "bidirectional", "GPIO45/ADC5": "bidirectional", "GPIO46/ADC6": "bidirectional", "GPIO47/ADC7": "bidirectional", IOVDD_60: "passive", VREG_AVDD: "power_in", VREG_PGND: "power_in", USB_OTP_VDD: "power_in", QSPI_IOVDD: "power_in", IOVDD_76: "passive", GPIO4: "bidirectional", GPIO5: "bidirectional", GPIO6: "bidirectional", GPIO7: "bidirectional", IOVDD_5: "power_in", GPIO8: "bidirectional", GPIO9: "bidirectional", GPIO10: "bidirectional", GPIO11: "bidirectional", GPIO12: "bidirectional", GPIO13: "bidirectional", GPIO14: "bidirectional", GPIO15: "bidirectional", IOVDD_15: "passive", GPIO16: "bidirectional", GPIO17: "bidirectional", GPIO18: "bidirectional", GPIO19: "bidirectional", GPIO20: "bidirectional", GPIO21: "bidirectional", GPIO22: "bidirectional", GPIO23: "bidirectional", IOVDD_24: "passive", GPIO24: "bidirectional", GPIO25: "bidirectional", GPIO26: "bidirectional", GPIO27: "bidirectional", IOVDD_29: "passive", XIN: "input", XOUT: "output", DVDD_32: "passive", SWCLK: "input", SWDIO: "bidirectional", RUN: "input", GPIO28: "bidirectional", GPIO29: "bidirectional", IOVDD_41: "passive", ADC_AVDD: "power_in", VREG_LX: "power_out", VREG_VIN: "power_in", VREG_FB: "passive", USB_DM: "bidirectional", USB_DP: "bidirectional", QSPI_SD3: "bidirectional", QSPI_SCLK: "output", QSPI_SD0: "bidirectional", QSPI_SD2: "bidirectional", QSPI_SD1: "bidirectional", "~{QSPI_SS}": "output", GPIO0: "bidirectional", GPIO1: "bidirectional", GPIO2: "bidirectional", GPIO3: "bidirectional", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_RaspberryPi:RP2354B";
  override referencePrefix = "U";
}
