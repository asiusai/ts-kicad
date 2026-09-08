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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RP2040 extends Component.withPins({
  /** Physical pin 1: IOVDD; power_in. */
  "IOVDD_1": "1",
  /** Physical pin 2: GPIO0; bidirectional. */
  "GPIO0": "2",
  /** Physical pin 3: GPIO1; bidirectional. */
  "GPIO1": "3",
  /** Physical pin 4: GPIO2; bidirectional. */
  "GPIO2": "4",
  /** Physical pin 5: GPIO3; bidirectional. */
  "GPIO3": "5",
  /** Physical pin 6: GPIO4; bidirectional. */
  "GPIO4": "6",
  /** Physical pin 7: GPIO5; bidirectional. */
  "GPIO5": "7",
  /** Physical pin 8: GPIO6; bidirectional. */
  "GPIO6": "8",
  /** Physical pin 9: GPIO7; bidirectional. */
  "GPIO7": "9",
  /** Physical pin 10: IOVDD; passive. */
  "IOVDD_10": "10",
  /** Physical pin 11: GPIO8; bidirectional. */
  "GPIO8": "11",
  /** Physical pin 12: GPIO9; bidirectional. */
  "GPIO9": "12",
  /** Physical pin 13: GPIO10; bidirectional. */
  "GPIO10": "13",
  /** Physical pin 14: GPIO11; bidirectional. */
  "GPIO11": "14",
  /** Physical pin 15: GPIO12; bidirectional. */
  "GPIO12": "15",
  /** Physical pin 16: GPIO13; bidirectional. */
  "GPIO13": "16",
  /** Physical pin 17: GPIO14; bidirectional. */
  "GPIO14": "17",
  /** Physical pin 18: GPIO15; bidirectional. */
  "GPIO15": "18",
  /** Physical pin 19: TESTEN; input. */
  "TESTEN": "19",
  /** Physical pin 20: XIN; input. */
  "XIN": "20",
  /** Physical pin 21: XOUT; output. */
  "XOUT": "21",
  /** Physical pin 22: IOVDD; passive. */
  "IOVDD_22": "22",
  /** Physical pin 23: DVDD; power_in. */
  "DVDD_23": "23",
  /** Physical pin 24: SWCLK; input. */
  "SWCLK": "24",
  /** Physical pin 25: SWDIO; bidirectional. */
  "SWDIO": "25",
  /** Physical pin 26: RUN; input. */
  "RUN": "26",
  /** Physical pin 27: GPIO16; bidirectional. */
  "GPIO16": "27",
  /** Physical pin 28: GPIO17; bidirectional. */
  "GPIO17": "28",
  /** Physical pin 29: GPIO18; bidirectional. */
  "GPIO18": "29",
  /** Physical pin 30: GPIO19; bidirectional. */
  "GPIO19": "30",
  /** Physical pin 31: GPIO20; bidirectional. */
  "GPIO20": "31",
  /** Physical pin 32: GPIO21; bidirectional. */
  "GPIO21": "32",
  /** Physical pin 33: IOVDD; passive. */
  "IOVDD_33": "33",
  /** Physical pin 34: GPIO22; bidirectional. */
  "GPIO22": "34",
  /** Physical pin 35: GPIO23; bidirectional. */
  "GPIO23": "35",
  /** Physical pin 36: GPIO24; bidirectional. */
  "GPIO24": "36",
  /** Physical pin 37: GPIO25; bidirectional. */
  "GPIO25": "37",
  /** Physical pin 38: GPIO26/ADC0; bidirectional. */
  "GPIO26/ADC0": "38",
  /** Physical pin 39: GPIO27/ADC1; bidirectional. */
  "GPIO27/ADC1": "39",
  /** Physical pin 40: GPIO28/ADC2; bidirectional. */
  "GPIO28/ADC2": "40",
  /** Physical pin 41: GPIO29/ADC3; bidirectional. */
  "GPIO29/ADC3": "41",
  /** Physical pin 42: IOVDD; passive. */
  "IOVDD_42": "42",
  /** Physical pin 43: ADC_AVDD; power_in. */
  "ADC_AVDD": "43",
  /** Physical pin 44: VREG_VIN; power_in. */
  "VREG_VIN": "44",
  /** Physical pin 45: VREG_VOUT; power_out. */
  "VREG_VOUT": "45",
  /** Physical pin 46: USB_DM; bidirectional. */
  "USB_DM": "46",
  /** Physical pin 47: USB_DP; bidirectional. */
  "USB_DP": "47",
  /** Physical pin 48: USB_VDD; power_in. */
  "USB_VDD": "48",
  /** Physical pin 49: IOVDD; passive. */
  "IOVDD_49": "49",
  /** Physical pin 50: DVDD; passive. */
  "DVDD_50": "50",
  /** Physical pin 51: QSPI_SD3; bidirectional. */
  "QSPI_SD3": "51",
  /** Physical pin 52: QSPI_SCLK; output. */
  "QSPI_SCLK": "52",
  /** Physical pin 53: QSPI_SD0; bidirectional. */
  "QSPI_SD0": "53",
  /** Physical pin 54: QSPI_SD2; bidirectional. */
  "QSPI_SD2": "54",
  /** Physical pin 55: QSPI_SD1; bidirectional. */
  "QSPI_SD1": "55",
  /** Physical pin 56: ~{QSPI_SS}; output. */
  "~{QSPI_SS}": "56",
  /** Physical pin 57: GND; power_in. */
  "GND": "57",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RP2350A extends Component.withPins({
  /** Physical pin 6: DVDD; power_in. */
  "DVDD_6": "6",
  /** Physical pin 39: DVDD; passive. */
  "DVDD_39": "39",
  /** Physical pin 46: VREG_AVDD; power_in. */
  "VREG_AVDD": "46",
  /** Physical pin 47: VREG_PGND; power_in. */
  "VREG_PGND": "47",
  /** Physical pin 53: USB_OTP_VDD; power_in. */
  "USB_OTP_VDD": "53",
  /** Physical pin 54: QSPI_IOVDD; power_in. */
  "QSPI_IOVDD": "54",
  /** Physical pin 1: IOVDD; power_in. */
  "IOVDD_1": "1",
  /** Physical pin 2: GPIO0; bidirectional. */
  "GPIO0": "2",
  /** Physical pin 3: GPIO1; bidirectional. */
  "GPIO1": "3",
  /** Physical pin 4: GPIO2; bidirectional. */
  "GPIO2": "4",
  /** Physical pin 5: GPIO3; bidirectional. */
  "GPIO3": "5",
  /** Physical pin 7: GPIO4; bidirectional. */
  "GPIO4": "7",
  /** Physical pin 8: GPIO5; bidirectional. */
  "GPIO5": "8",
  /** Physical pin 9: GPIO6; bidirectional. */
  "GPIO6": "9",
  /** Physical pin 10: GPIO7; bidirectional. */
  "GPIO7": "10",
  /** Physical pin 11: IOVDD; passive. */
  "IOVDD_11": "11",
  /** Physical pin 12: GPIO8; bidirectional. */
  "GPIO8": "12",
  /** Physical pin 13: GPIO9; bidirectional. */
  "GPIO9": "13",
  /** Physical pin 14: GPIO10; bidirectional. */
  "GPIO10": "14",
  /** Physical pin 15: GPIO11; bidirectional. */
  "GPIO11": "15",
  /** Physical pin 16: GPIO12; bidirectional. */
  "GPIO12": "16",
  /** Physical pin 17: GPIO13; bidirectional. */
  "GPIO13": "17",
  /** Physical pin 18: GPIO14; bidirectional. */
  "GPIO14": "18",
  /** Physical pin 19: GPIO15; bidirectional. */
  "GPIO15": "19",
  /** Physical pin 20: IOVDD; passive. */
  "IOVDD_20": "20",
  /** Physical pin 21: XIN; input. */
  "XIN": "21",
  /** Physical pin 22: XOUT; output. */
  "XOUT": "22",
  /** Physical pin 23: DVDD; passive. */
  "DVDD_23": "23",
  /** Physical pin 24: SWCLK; input. */
  "SWCLK": "24",
  /** Physical pin 25: SWDIO; bidirectional. */
  "SWDIO": "25",
  /** Physical pin 26: RUN; input. */
  "RUN": "26",
  /** Physical pin 27: GPIO16; bidirectional. */
  "GPIO16": "27",
  /** Physical pin 28: GPIO17; bidirectional. */
  "GPIO17": "28",
  /** Physical pin 29: GPIO18; bidirectional. */
  "GPIO18": "29",
  /** Physical pin 30: IOVDD; passive. */
  "IOVDD_30": "30",
  /** Physical pin 31: GPIO19; bidirectional. */
  "GPIO19": "31",
  /** Physical pin 32: GPIO20; bidirectional. */
  "GPIO20": "32",
  /** Physical pin 33: GPIO21; bidirectional. */
  "GPIO21": "33",
  /** Physical pin 34: GPIO22; bidirectional. */
  "GPIO22": "34",
  /** Physical pin 35: GPIO23; bidirectional. */
  "GPIO23": "35",
  /** Physical pin 36: GPIO24; bidirectional. */
  "GPIO24": "36",
  /** Physical pin 37: GPIO25; bidirectional. */
  "GPIO25": "37",
  /** Physical pin 38: IOVDD; passive. */
  "IOVDD_38": "38",
  /** Physical pin 40: GPIO26/ADC0; bidirectional. */
  "GPIO26/ADC0": "40",
  /** Physical pin 41: GPIO27/ADC1; bidirectional. */
  "GPIO27/ADC1": "41",
  /** Physical pin 42: GPIO28/ADC2; bidirectional. */
  "GPIO28/ADC2": "42",
  /** Physical pin 43: GPIO29/ADC3; bidirectional. */
  "GPIO29/ADC3": "43",
  /** Physical pin 44: ADC_AVDD; power_in. */
  "ADC_AVDD": "44",
  /** Physical pin 45: IOVDD; passive. */
  "IOVDD_45": "45",
  /** Physical pin 48: VREG_LX; power_out. */
  "VREG_LX": "48",
  /** Physical pin 49: VREG_VIN; power_in. */
  "VREG_VIN": "49",
  /** Physical pin 50: VREG_FB; passive. */
  "VREG_FB": "50",
  /** Physical pin 51: USB_DM; bidirectional. */
  "USB_DM": "51",
  /** Physical pin 52: USB_DP; bidirectional. */
  "USB_DP": "52",
  /** Physical pin 55: QSPI_SD3; bidirectional. */
  "QSPI_SD3": "55",
  /** Physical pin 56: QSPI_SCLK; output. */
  "QSPI_SCLK": "56",
  /** Physical pin 57: QSPI_SD0; bidirectional. */
  "QSPI_SD0": "57",
  /** Physical pin 58: QSPI_SD2; bidirectional. */
  "QSPI_SD2": "58",
  /** Physical pin 59: QSPI_SD1; bidirectional. */
  "QSPI_SD1": "59",
  /** Physical pin 60: ~{QSPI_SS}; output. */
  "~{QSPI_SS}": "60",
  /** Physical pin 61: GND; power_in. */
  "GND": "61",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RP2350B extends Component.withPins({
  /** Physical pin 10: DVDD; power_in. */
  "DVDD_10": "10",
  /** Physical pin 38: GPIO30; bidirectional. */
  "GPIO30": "38",
  /** Physical pin 39: GPIO31; bidirectional. */
  "GPIO31": "39",
  /** Physical pin 40: GPIO32; bidirectional. */
  "GPIO32": "40",
  /** Physical pin 42: GPIO33; bidirectional. */
  "GPIO33": "42",
  /** Physical pin 43: GPIO34; bidirectional. */
  "GPIO34": "43",
  /** Physical pin 44: GPIO35; bidirectional. */
  "GPIO35": "44",
  /** Physical pin 45: GPIO36; bidirectional. */
  "GPIO36": "45",
  /** Physical pin 46: GPIO37; bidirectional. */
  "GPIO37": "46",
  /** Physical pin 47: GPIO38; bidirectional. */
  "GPIO38": "47",
  /** Physical pin 48: GPIO39; bidirectional. */
  "GPIO39": "48",
  /** Physical pin 49: GPIO40/ADC0; bidirectional. */
  "GPIO40/ADC0": "49",
  /** Physical pin 50: IOVDD; passive. */
  "IOVDD_50": "50",
  /** Physical pin 51: DVDD; passive. */
  "DVDD_51": "51",
  /** Physical pin 52: GPIO41/ADC1; bidirectional. */
  "GPIO41/ADC1": "52",
  /** Physical pin 53: GPIO42/ADC2; bidirectional. */
  "GPIO42/ADC2": "53",
  /** Physical pin 54: GPIO43/ADC3; bidirectional. */
  "GPIO43/ADC3": "54",
  /** Physical pin 55: GPIO44/ADC4; bidirectional. */
  "GPIO44/ADC4": "55",
  /** Physical pin 56: GPIO45/ADC5; bidirectional. */
  "GPIO45/ADC5": "56",
  /** Physical pin 57: GPIO46/ADC6; bidirectional. */
  "GPIO46/ADC6": "57",
  /** Physical pin 58: GPIO47/ADC7; bidirectional. */
  "GPIO47/ADC7": "58",
  /** Physical pin 60: IOVDD; passive. */
  "IOVDD_60": "60",
  /** Physical pin 61: VREG_AVDD; power_in. */
  "VREG_AVDD": "61",
  /** Physical pin 62: VREG_PGND; power_in. */
  "VREG_PGND": "62",
  /** Physical pin 68: USB_OTP_VDD; power_in. */
  "USB_OTP_VDD": "68",
  /** Physical pin 69: QSPI_IOVDD; power_in. */
  "QSPI_IOVDD": "69",
  /** Physical pin 76: IOVDD; passive. */
  "IOVDD_76": "76",
  /** Physical pin 1: GPIO4; bidirectional. */
  "GPIO4": "1",
  /** Physical pin 2: GPIO5; bidirectional. */
  "GPIO5": "2",
  /** Physical pin 3: GPIO6; bidirectional. */
  "GPIO6": "3",
  /** Physical pin 4: GPIO7; bidirectional. */
  "GPIO7": "4",
  /** Physical pin 5: IOVDD; power_in. */
  "IOVDD_5": "5",
  /** Physical pin 6: GPIO8; bidirectional. */
  "GPIO8": "6",
  /** Physical pin 7: GPIO9; bidirectional. */
  "GPIO9": "7",
  /** Physical pin 8: GPIO10; bidirectional. */
  "GPIO10": "8",
  /** Physical pin 9: GPIO11; bidirectional. */
  "GPIO11": "9",
  /** Physical pin 11: GPIO12; bidirectional. */
  "GPIO12": "11",
  /** Physical pin 12: GPIO13; bidirectional. */
  "GPIO13": "12",
  /** Physical pin 13: GPIO14; bidirectional. */
  "GPIO14": "13",
  /** Physical pin 14: GPIO15; bidirectional. */
  "GPIO15": "14",
  /** Physical pin 15: IOVDD; passive. */
  "IOVDD_15": "15",
  /** Physical pin 16: GPIO16; bidirectional. */
  "GPIO16": "16",
  /** Physical pin 17: GPIO17; bidirectional. */
  "GPIO17": "17",
  /** Physical pin 18: GPIO18; bidirectional. */
  "GPIO18": "18",
  /** Physical pin 19: GPIO19; bidirectional. */
  "GPIO19": "19",
  /** Physical pin 20: GPIO20; bidirectional. */
  "GPIO20": "20",
  /** Physical pin 21: GPIO21; bidirectional. */
  "GPIO21": "21",
  /** Physical pin 22: GPIO22; bidirectional. */
  "GPIO22": "22",
  /** Physical pin 23: GPIO23; bidirectional. */
  "GPIO23": "23",
  /** Physical pin 24: IOVDD; passive. */
  "IOVDD_24": "24",
  /** Physical pin 25: GPIO24; bidirectional. */
  "GPIO24": "25",
  /** Physical pin 26: GPIO25; bidirectional. */
  "GPIO25": "26",
  /** Physical pin 27: GPIO26; bidirectional. */
  "GPIO26": "27",
  /** Physical pin 28: GPIO27; bidirectional. */
  "GPIO27": "28",
  /** Physical pin 29: IOVDD; passive. */
  "IOVDD_29": "29",
  /** Physical pin 30: XIN; input. */
  "XIN": "30",
  /** Physical pin 31: XOUT; output. */
  "XOUT": "31",
  /** Physical pin 32: DVDD; passive. */
  "DVDD_32": "32",
  /** Physical pin 33: SWCLK; input. */
  "SWCLK": "33",
  /** Physical pin 34: SWDIO; bidirectional. */
  "SWDIO": "34",
  /** Physical pin 35: RUN; input. */
  "RUN": "35",
  /** Physical pin 36: GPIO28; bidirectional. */
  "GPIO28": "36",
  /** Physical pin 37: GPIO29; bidirectional. */
  "GPIO29": "37",
  /** Physical pin 41: IOVDD; passive. */
  "IOVDD_41": "41",
  /** Physical pin 59: ADC_AVDD; power_in. */
  "ADC_AVDD": "59",
  /** Physical pin 63: VREG_LX; power_out. */
  "VREG_LX": "63",
  /** Physical pin 64: VREG_VIN; power_in. */
  "VREG_VIN": "64",
  /** Physical pin 65: VREG_FB; passive. */
  "VREG_FB": "65",
  /** Physical pin 66: USB_DM; bidirectional. */
  "USB_DM": "66",
  /** Physical pin 67: USB_DP; bidirectional. */
  "USB_DP": "67",
  /** Physical pin 70: QSPI_SD3; bidirectional. */
  "QSPI_SD3": "70",
  /** Physical pin 71: QSPI_SCLK; output. */
  "QSPI_SCLK": "71",
  /** Physical pin 72: QSPI_SD0; bidirectional. */
  "QSPI_SD0": "72",
  /** Physical pin 73: QSPI_SD2; bidirectional. */
  "QSPI_SD2": "73",
  /** Physical pin 74: QSPI_SD1; bidirectional. */
  "QSPI_SD1": "74",
  /** Physical pin 75: ~{QSPI_SS}; output. */
  "~{QSPI_SS}": "75",
  /** Physical pin 77: GPIO0; bidirectional. */
  "GPIO0": "77",
  /** Physical pin 78: GPIO1; bidirectional. */
  "GPIO1": "78",
  /** Physical pin 79: GPIO2; bidirectional. */
  "GPIO2": "79",
  /** Physical pin 80: GPIO3; bidirectional. */
  "GPIO3": "80",
  /** Physical pin 81: GND; power_in. */
  "GND": "81",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RP2354A extends Component.withPins({
  /** Physical pin 6: DVDD; power_in. */
  "DVDD_6": "6",
  /** Physical pin 39: DVDD; passive. */
  "DVDD_39": "39",
  /** Physical pin 46: VREG_AVDD; power_in. */
  "VREG_AVDD": "46",
  /** Physical pin 47: VREG_PGND; power_in. */
  "VREG_PGND": "47",
  /** Physical pin 53: USB_OTP_VDD; power_in. */
  "USB_OTP_VDD": "53",
  /** Physical pin 54: QSPI_IOVDD; power_in. */
  "QSPI_IOVDD": "54",
  /** Physical pin 1: IOVDD; power_in. */
  "IOVDD_1": "1",
  /** Physical pin 2: GPIO0; bidirectional. */
  "GPIO0": "2",
  /** Physical pin 3: GPIO1; bidirectional. */
  "GPIO1": "3",
  /** Physical pin 4: GPIO2; bidirectional. */
  "GPIO2": "4",
  /** Physical pin 5: GPIO3; bidirectional. */
  "GPIO3": "5",
  /** Physical pin 7: GPIO4; bidirectional. */
  "GPIO4": "7",
  /** Physical pin 8: GPIO5; bidirectional. */
  "GPIO5": "8",
  /** Physical pin 9: GPIO6; bidirectional. */
  "GPIO6": "9",
  /** Physical pin 10: GPIO7; bidirectional. */
  "GPIO7": "10",
  /** Physical pin 11: IOVDD; passive. */
  "IOVDD_11": "11",
  /** Physical pin 12: GPIO8; bidirectional. */
  "GPIO8": "12",
  /** Physical pin 13: GPIO9; bidirectional. */
  "GPIO9": "13",
  /** Physical pin 14: GPIO10; bidirectional. */
  "GPIO10": "14",
  /** Physical pin 15: GPIO11; bidirectional. */
  "GPIO11": "15",
  /** Physical pin 16: GPIO12; bidirectional. */
  "GPIO12": "16",
  /** Physical pin 17: GPIO13; bidirectional. */
  "GPIO13": "17",
  /** Physical pin 18: GPIO14; bidirectional. */
  "GPIO14": "18",
  /** Physical pin 19: GPIO15; bidirectional. */
  "GPIO15": "19",
  /** Physical pin 20: IOVDD; passive. */
  "IOVDD_20": "20",
  /** Physical pin 21: XIN; input. */
  "XIN": "21",
  /** Physical pin 22: XOUT; output. */
  "XOUT": "22",
  /** Physical pin 23: DVDD; passive. */
  "DVDD_23": "23",
  /** Physical pin 24: SWCLK; input. */
  "SWCLK": "24",
  /** Physical pin 25: SWDIO; bidirectional. */
  "SWDIO": "25",
  /** Physical pin 26: RUN; input. */
  "RUN": "26",
  /** Physical pin 27: GPIO16; bidirectional. */
  "GPIO16": "27",
  /** Physical pin 28: GPIO17; bidirectional. */
  "GPIO17": "28",
  /** Physical pin 29: GPIO18; bidirectional. */
  "GPIO18": "29",
  /** Physical pin 30: IOVDD; passive. */
  "IOVDD_30": "30",
  /** Physical pin 31: GPIO19; bidirectional. */
  "GPIO19": "31",
  /** Physical pin 32: GPIO20; bidirectional. */
  "GPIO20": "32",
  /** Physical pin 33: GPIO21; bidirectional. */
  "GPIO21": "33",
  /** Physical pin 34: GPIO22; bidirectional. */
  "GPIO22": "34",
  /** Physical pin 35: GPIO23; bidirectional. */
  "GPIO23": "35",
  /** Physical pin 36: GPIO24; bidirectional. */
  "GPIO24": "36",
  /** Physical pin 37: GPIO25; bidirectional. */
  "GPIO25": "37",
  /** Physical pin 38: IOVDD; passive. */
  "IOVDD_38": "38",
  /** Physical pin 40: GPIO26/ADC0; bidirectional. */
  "GPIO26/ADC0": "40",
  /** Physical pin 41: GPIO27/ADC1; bidirectional. */
  "GPIO27/ADC1": "41",
  /** Physical pin 42: GPIO28/ADC2; bidirectional. */
  "GPIO28/ADC2": "42",
  /** Physical pin 43: GPIO29/ADC3; bidirectional. */
  "GPIO29/ADC3": "43",
  /** Physical pin 44: ADC_AVDD; power_in. */
  "ADC_AVDD": "44",
  /** Physical pin 45: IOVDD; passive. */
  "IOVDD_45": "45",
  /** Physical pin 48: VREG_LX; power_out. */
  "VREG_LX": "48",
  /** Physical pin 49: VREG_VIN; power_in. */
  "VREG_VIN": "49",
  /** Physical pin 50: VREG_FB; passive. */
  "VREG_FB": "50",
  /** Physical pin 51: USB_DM; bidirectional. */
  "USB_DM": "51",
  /** Physical pin 52: USB_DP; bidirectional. */
  "USB_DP": "52",
  /** Physical pin 55: QSPI_SD3; bidirectional. */
  "QSPI_SD3": "55",
  /** Physical pin 56: QSPI_SCLK; output. */
  "QSPI_SCLK": "56",
  /** Physical pin 57: QSPI_SD0; bidirectional. */
  "QSPI_SD0": "57",
  /** Physical pin 58: QSPI_SD2; bidirectional. */
  "QSPI_SD2": "58",
  /** Physical pin 59: QSPI_SD1; bidirectional. */
  "QSPI_SD1": "59",
  /** Physical pin 60: ~{QSPI_SS}; output. */
  "~{QSPI_SS}": "60",
  /** Physical pin 61: GND; power_in. */
  "GND": "61",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RP2354B extends Component.withPins({
  /** Physical pin 10: DVDD; power_in. */
  "DVDD_10": "10",
  /** Physical pin 38: GPIO30; bidirectional. */
  "GPIO30": "38",
  /** Physical pin 39: GPIO31; bidirectional. */
  "GPIO31": "39",
  /** Physical pin 40: GPIO32; bidirectional. */
  "GPIO32": "40",
  /** Physical pin 42: GPIO33; bidirectional. */
  "GPIO33": "42",
  /** Physical pin 43: GPIO34; bidirectional. */
  "GPIO34": "43",
  /** Physical pin 44: GPIO35; bidirectional. */
  "GPIO35": "44",
  /** Physical pin 45: GPIO36; bidirectional. */
  "GPIO36": "45",
  /** Physical pin 46: GPIO37; bidirectional. */
  "GPIO37": "46",
  /** Physical pin 47: GPIO38; bidirectional. */
  "GPIO38": "47",
  /** Physical pin 48: GPIO39; bidirectional. */
  "GPIO39": "48",
  /** Physical pin 49: GPIO40/ADC0; bidirectional. */
  "GPIO40/ADC0": "49",
  /** Physical pin 50: IOVDD; passive. */
  "IOVDD_50": "50",
  /** Physical pin 51: DVDD; passive. */
  "DVDD_51": "51",
  /** Physical pin 52: GPIO41/ADC1; bidirectional. */
  "GPIO41/ADC1": "52",
  /** Physical pin 53: GPIO42/ADC2; bidirectional. */
  "GPIO42/ADC2": "53",
  /** Physical pin 54: GPIO43/ADC3; bidirectional. */
  "GPIO43/ADC3": "54",
  /** Physical pin 55: GPIO44/ADC4; bidirectional. */
  "GPIO44/ADC4": "55",
  /** Physical pin 56: GPIO45/ADC5; bidirectional. */
  "GPIO45/ADC5": "56",
  /** Physical pin 57: GPIO46/ADC6; bidirectional. */
  "GPIO46/ADC6": "57",
  /** Physical pin 58: GPIO47/ADC7; bidirectional. */
  "GPIO47/ADC7": "58",
  /** Physical pin 60: IOVDD; passive. */
  "IOVDD_60": "60",
  /** Physical pin 61: VREG_AVDD; power_in. */
  "VREG_AVDD": "61",
  /** Physical pin 62: VREG_PGND; power_in. */
  "VREG_PGND": "62",
  /** Physical pin 68: USB_OTP_VDD; power_in. */
  "USB_OTP_VDD": "68",
  /** Physical pin 69: QSPI_IOVDD; power_in. */
  "QSPI_IOVDD": "69",
  /** Physical pin 76: IOVDD; passive. */
  "IOVDD_76": "76",
  /** Physical pin 1: GPIO4; bidirectional. */
  "GPIO4": "1",
  /** Physical pin 2: GPIO5; bidirectional. */
  "GPIO5": "2",
  /** Physical pin 3: GPIO6; bidirectional. */
  "GPIO6": "3",
  /** Physical pin 4: GPIO7; bidirectional. */
  "GPIO7": "4",
  /** Physical pin 5: IOVDD; power_in. */
  "IOVDD_5": "5",
  /** Physical pin 6: GPIO8; bidirectional. */
  "GPIO8": "6",
  /** Physical pin 7: GPIO9; bidirectional. */
  "GPIO9": "7",
  /** Physical pin 8: GPIO10; bidirectional. */
  "GPIO10": "8",
  /** Physical pin 9: GPIO11; bidirectional. */
  "GPIO11": "9",
  /** Physical pin 11: GPIO12; bidirectional. */
  "GPIO12": "11",
  /** Physical pin 12: GPIO13; bidirectional. */
  "GPIO13": "12",
  /** Physical pin 13: GPIO14; bidirectional. */
  "GPIO14": "13",
  /** Physical pin 14: GPIO15; bidirectional. */
  "GPIO15": "14",
  /** Physical pin 15: IOVDD; passive. */
  "IOVDD_15": "15",
  /** Physical pin 16: GPIO16; bidirectional. */
  "GPIO16": "16",
  /** Physical pin 17: GPIO17; bidirectional. */
  "GPIO17": "17",
  /** Physical pin 18: GPIO18; bidirectional. */
  "GPIO18": "18",
  /** Physical pin 19: GPIO19; bidirectional. */
  "GPIO19": "19",
  /** Physical pin 20: GPIO20; bidirectional. */
  "GPIO20": "20",
  /** Physical pin 21: GPIO21; bidirectional. */
  "GPIO21": "21",
  /** Physical pin 22: GPIO22; bidirectional. */
  "GPIO22": "22",
  /** Physical pin 23: GPIO23; bidirectional. */
  "GPIO23": "23",
  /** Physical pin 24: IOVDD; passive. */
  "IOVDD_24": "24",
  /** Physical pin 25: GPIO24; bidirectional. */
  "GPIO24": "25",
  /** Physical pin 26: GPIO25; bidirectional. */
  "GPIO25": "26",
  /** Physical pin 27: GPIO26; bidirectional. */
  "GPIO26": "27",
  /** Physical pin 28: GPIO27; bidirectional. */
  "GPIO27": "28",
  /** Physical pin 29: IOVDD; passive. */
  "IOVDD_29": "29",
  /** Physical pin 30: XIN; input. */
  "XIN": "30",
  /** Physical pin 31: XOUT; output. */
  "XOUT": "31",
  /** Physical pin 32: DVDD; passive. */
  "DVDD_32": "32",
  /** Physical pin 33: SWCLK; input. */
  "SWCLK": "33",
  /** Physical pin 34: SWDIO; bidirectional. */
  "SWDIO": "34",
  /** Physical pin 35: RUN; input. */
  "RUN": "35",
  /** Physical pin 36: GPIO28; bidirectional. */
  "GPIO28": "36",
  /** Physical pin 37: GPIO29; bidirectional. */
  "GPIO29": "37",
  /** Physical pin 41: IOVDD; passive. */
  "IOVDD_41": "41",
  /** Physical pin 59: ADC_AVDD; power_in. */
  "ADC_AVDD": "59",
  /** Physical pin 63: VREG_LX; power_out. */
  "VREG_LX": "63",
  /** Physical pin 64: VREG_VIN; power_in. */
  "VREG_VIN": "64",
  /** Physical pin 65: VREG_FB; passive. */
  "VREG_FB": "65",
  /** Physical pin 66: USB_DM; bidirectional. */
  "USB_DM": "66",
  /** Physical pin 67: USB_DP; bidirectional. */
  "USB_DP": "67",
  /** Physical pin 70: QSPI_SD3; bidirectional. */
  "QSPI_SD3": "70",
  /** Physical pin 71: QSPI_SCLK; output. */
  "QSPI_SCLK": "71",
  /** Physical pin 72: QSPI_SD0; bidirectional. */
  "QSPI_SD0": "72",
  /** Physical pin 73: QSPI_SD2; bidirectional. */
  "QSPI_SD2": "73",
  /** Physical pin 74: QSPI_SD1; bidirectional. */
  "QSPI_SD1": "74",
  /** Physical pin 75: ~{QSPI_SS}; output. */
  "~{QSPI_SS}": "75",
  /** Physical pin 77: GPIO0; bidirectional. */
  "GPIO0": "77",
  /** Physical pin 78: GPIO1; bidirectional. */
  "GPIO1": "78",
  /** Physical pin 79: GPIO2; bidirectional. */
  "GPIO2": "79",
  /** Physical pin 80: GPIO3; bidirectional. */
  "GPIO3": "80",
  /** Physical pin 81: GND; power_in. */
  "GND": "81",
}) {
  override schema = "MCU_RaspberryPi:RP2354B";
  override referencePrefix = "U";
}

