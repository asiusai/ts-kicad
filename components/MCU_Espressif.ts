// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * RF Module, ESP32 SoC, RISC-V, WiFi 802.11b/n/g, Bluetooth LE 5, QFN32
 *
 * KiCad symbol: `MCU_Espressif:ESP32-C3`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*EP3.7x3.7mm*.
 * @see https://www.espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf
 * Keywords: WiFi BLE ESP32 Espressif.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.7x3.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP32_C3 extends Component.withPins({
  /** Physical pin 1: LNA_IN; bidirectional. */
  "LNA_IN": "1",
  /** Physical pin 2: VDD3P3; power_in. */
  "VDD3P3_2": "2",
  /** Physical pin 3: VDD3P3; passive. */
  "VDD3P3_3": "3",
  /** Physical pin 4: XTAL_32K_P; bidirectional. */
  "XTAL_32K_P": "4",
  /** Physical pin 5: XTAL_32K_N; bidirectional. */
  "XTAL_32K_N": "5",
  /** Physical pin 6: GPIO2; bidirectional. */
  "GPIO2": "6",
  /** Physical pin 7: CHIP_EN; bidirectional. */
  "CHIP_EN": "7",
  /** Physical pin 8: GPIO3; bidirectional. */
  "GPIO3": "8",
  /** Physical pin 9: MTMS; bidirectional. */
  "MTMS": "9",
  /** Physical pin 10: MTDI; bidirectional. */
  "MTDI": "10",
  /** Physical pin 11: VDD3P3_RTC; power_in. */
  "VDD3P3_RTC": "11",
  /** Physical pin 12: MTCK; bidirectional. */
  "MTCK": "12",
  /** Physical pin 13: MTDO; bidirectional. */
  "MTDO": "13",
  /** Physical pin 14: GPIO8; bidirectional. */
  "GPIO8": "14",
  /** Physical pin 15: GPIO9; bidirectional. */
  "GPIO9": "15",
  /** Physical pin 16: GPIO10; bidirectional. */
  "GPIO10": "16",
  /** Physical pin 17: VDD3P3_CPU; power_in. */
  "VDD3P3_CPU": "17",
  /** Physical pin 18: VDD_SPI; power_out. */
  "VDD_SPI": "18",
  /** Physical pin 19: SPIHD; bidirectional. */
  "SPIHD": "19",
  /** Physical pin 20: SPIWP; bidirectional. */
  "SPIWP": "20",
  /** Physical pin 21: SPICS0; bidirectional. */
  "SPICS0": "21",
  /** Physical pin 22: SPICLK; bidirectional. */
  "SPICLK": "22",
  /** Physical pin 23: SPID; bidirectional. */
  "SPID": "23",
  /** Physical pin 24: SPIQ; bidirectional. */
  "SPIQ": "24",
  /** Physical pin 25: GPIO18; bidirectional. */
  "GPIO18": "25",
  /** Physical pin 26: GPIO19; bidirectional. */
  "GPIO19": "26",
  /** Physical pin 27: U0RXD; bidirectional. */
  "U0RXD": "27",
  /** Physical pin 28: U0TXD; bidirectional. */
  "U0TXD": "28",
  /** Physical pin 29: XTAL_N; bidirectional. */
  "XTAL_N": "29",
  /** Physical pin 30: XTAL_P; bidirectional. */
  "XTAL_P": "30",
  /** Physical pin 31: VDDA; power_in. */
  "VDDA_31": "31",
  /** Physical pin 32: VDDA; passive. */
  "VDDA_32": "32",
  /** Physical pin 33: GND; power_in. */
  "GND": "33",
}) {
  override schema = "MCU_Espressif:ESP32-C3";
  override referencePrefix = "U";
}

/**
 * RF Module, ESP32 SoC, 4MB In-Package flash, Wi-Fi 802.11b/g/n, Bluetooth, BLE, 32-bit, 3.0-3.6V, external antenna, QFN-48
 *
 * KiCad symbol: `MCU_Espressif:ESP32-PICO-D4`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.espressif.com/sites/default/files/documentation/esp32-pico_series_datasheet_en.pdf
 * Keywords: RF Radio BT ESP ESP32 Espressif external antenna.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.3x5.3mm.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP32_PICO_D4 extends Component.withPins({
  /** Physical pin 1: VDDA; power_in. */
  "VDDA_1": "1",
  /** Physical pin 2: LNA_IN; bidirectional. */
  "LNA_IN": "2",
  /** Physical pin 3: VDDA3P3; power_in. */
  "VDDA3P3_3": "3",
  /** Physical pin 4: VDDA3P3; passive. */
  "VDDA3P3_4": "4",
  /** Physical pin 5: SENSOR_VP; input. */
  "SENSOR_VP": "5",
  /** Physical pin 6: SENSOR_CAPP; input. */
  "SENSOR_CAPP": "6",
  /** Physical pin 7: SENSOR_CAPN; input. */
  "SENSOR_CAPN": "7",
  /** Physical pin 8: SENSOR_VN; input. */
  "SENSOR_VN": "8",
  /** Physical pin 9: EN; input. */
  "EN": "9",
  /** Physical pin 10: IO34; input. */
  "IO34": "10",
  /** Physical pin 11: IO35; input. */
  "IO35": "11",
  /** Physical pin 12: IO32; bidirectional. */
  "IO32": "12",
  /** Physical pin 13: IO33; bidirectional. */
  "IO33": "13",
  /** Physical pin 14: IO25; bidirectional. */
  "IO25": "14",
  /** Physical pin 15: IO26; bidirectional. */
  "IO26": "15",
  /** Physical pin 16: IO27; bidirectional. */
  "IO27": "16",
  /** Physical pin 17: IO14; bidirectional. */
  "IO14": "17",
  /** Physical pin 18: IO12; bidirectional. */
  "IO12": "18",
  /** Physical pin 19: VDD3P3_RTC; power_in. */
  "VDD3P3_RTC": "19",
  /** Physical pin 20: IO13; bidirectional. */
  "IO13": "20",
  /** Physical pin 21: IO15; bidirectional. */
  "IO15": "21",
  /** Physical pin 22: IO2; bidirectional. */
  "IO2": "22",
  /** Physical pin 23: IO0; bidirectional. */
  "IO0": "23",
  /** Physical pin 24: IO4; bidirectional. */
  "IO4": "24",
  /** Physical pin 25: IO16; bidirectional. */
  "IO16": "25",
  /** Physical pin 26: VDD_SDIO; power_out. */
  "VDD_SDIO": "26",
  /** Physical pin 27: IO17; bidirectional. */
  "IO17": "27",
  /** Physical pin 28: SD2/IO9; bidirectional. */
  "SD2/IO9": "28",
  /** Physical pin 29: SD3/IO10; bidirectional. */
  "SD3/IO10": "29",
  /** Physical pin 30: CMD; bidirectional. */
  "CMD": "30",
  /** Physical pin 31: CLK; bidirectional. */
  "CLK": "31",
  /** Physical pin 32: SD0; bidirectional. */
  "SD0": "32",
  /** Physical pin 33: SD1; bidirectional. */
  "SD1": "33",
  /** Physical pin 34: IO5; bidirectional. */
  "IO5": "34",
  /** Physical pin 35: IO18; bidirectional. */
  "IO18": "35",
  /** Physical pin 36: IO23; bidirectional. */
  "IO23": "36",
  /** Physical pin 37: VDD3P3_CPU; power_in. */
  "VDD3P3_CPU": "37",
  /** Physical pin 38: IO19; bidirectional. */
  "IO19": "38",
  /** Physical pin 39: IO22; bidirectional. */
  "IO22": "39",
  /** Physical pin 40: U0RXD/IO3; bidirectional. */
  "U0RXD/IO3": "40",
  /** Physical pin 41: U0TXD/IO1; bidirectional. */
  "U0TXD/IO1": "41",
  /** Physical pin 42: IO21; bidirectional. */
  "IO21": "42",
  /** Physical pin 43: VDDA; passive. */
  "VDDA_43": "43",
  /** Physical pin 44: XTAL_N_NC; no_connect. */
  "XTAL_N_NC": "44",
  /** Physical pin 45: XTAL_P_NC; no_connect. */
  "XTAL_P_NC": "45",
  /** Physical pin 46: VDDA; passive. */
  "VDDA_46": "46",
  /** Physical pin 47: CAP2_NC; no_connect. */
  "CAP2_NC": "47",
  /** Physical pin 48: CAP1_NC; no_connect. */
  "CAP1_NC": "48",
  /** Physical pin 49: GND; power_in. */
  "GND": "49",
}) {
  override schema = "MCU_Espressif:ESP32-PICO-D4";
  override referencePrefix = "U";
}

/**
 * RF Module, ESP32 SoC, 4MB In-Package flash, Wi-Fi 802.11b/g/n, Bluetooth, BLE, 32-bit, 3.0-3.6V, external antenna, QFN-48
 *
 * KiCad symbol: `MCU_Espressif:ESP32-PICO-V3`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.espressif.com/sites/default/files/documentation/esp32-pico_series_datasheet_en.pdf
 * Keywords: RF Radio BT ESP ESP32 Espressif external antenna.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.3x5.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP32_PICO_V3 extends Component.withPins({
  /** Physical pin 1: VDDA; power_in. */
  "VDDA_1": "1",
  /** Physical pin 2: LNA_IN; bidirectional. */
  "LNA_IN": "2",
  /** Physical pin 3: VDDA3P3; power_in. */
  "VDDA3P3_3": "3",
  /** Physical pin 4: VDDA3P3; passive. */
  "VDDA3P3_4": "4",
  /** Physical pin 5: SENSOR_VP; input. */
  "SENSOR_VP": "5",
  /** Physical pin 6: SENSOR_CAPP; input. */
  "SENSOR_CAPP": "6",
  /** Physical pin 7: SENSOR_CAPN; input. */
  "SENSOR_CAPN": "7",
  /** Physical pin 8: SENSOR_VN; input. */
  "SENSOR_VN": "8",
  /** Physical pin 9: EN; input. */
  "EN": "9",
  /** Physical pin 10: IO34; input. */
  "IO34": "10",
  /** Physical pin 11: IO35; input. */
  "IO35": "11",
  /** Physical pin 12: IO32; bidirectional. */
  "IO32": "12",
  /** Physical pin 13: IO33; bidirectional. */
  "IO33": "13",
  /** Physical pin 14: IO25; bidirectional. */
  "IO25": "14",
  /** Physical pin 15: IO26; bidirectional. */
  "IO26": "15",
  /** Physical pin 16: IO27; bidirectional. */
  "IO27": "16",
  /** Physical pin 17: IO14; bidirectional. */
  "IO14": "17",
  /** Physical pin 18: IO12; bidirectional. */
  "IO12": "18",
  /** Physical pin 19: VDD3P3_RTC; power_in. */
  "VDD3P3_RTC": "19",
  /** Physical pin 20: IO13; bidirectional. */
  "IO13": "20",
  /** Physical pin 21: IO15; bidirectional. */
  "IO15": "21",
  /** Physical pin 22: IO2; bidirectional. */
  "IO2": "22",
  /** Physical pin 23: IO0; bidirectional. */
  "IO0": "23",
  /** Physical pin 24: IO4; bidirectional. */
  "IO4": "24",
  /** Physical pin 26: VDD_SDIO; power_out. */
  "VDD_SDIO": "26",
  /** Physical pin 28: SD2/IO9; bidirectional. */
  "SD2/IO9": "28",
  /** Physical pin 29: SD3/IO10; bidirectional. */
  "SD3/IO10": "29",
  /** Physical pin 30: CMD; bidirectional. */
  "CMD": "30",
  /** Physical pin 31: CLK; bidirectional. */
  "CLK": "31",
  /** Physical pin 34: IO5; bidirectional. */
  "IO5": "34",
  /** Physical pin 37: VDD3P3_CPU; power_in. */
  "VDD3P3_CPU": "37",
  /** Physical pin 38: IO19; bidirectional. */
  "IO19": "38",
  /** Physical pin 39: IO22; bidirectional. */
  "IO22": "39",
  /** Physical pin 40: U0RXD/IO3; bidirectional. */
  "U0RXD/IO3": "40",
  /** Physical pin 41: U0TXD/IO1; bidirectional. */
  "U0TXD/IO1": "41",
  /** Physical pin 42: IO21; bidirectional. */
  "IO21": "42",
  /** Physical pin 43: VDDA; passive. */
  "VDDA_43": "43",
  /** Physical pin 44: XTAL_N_NC; no_connect. */
  "XTAL_N_NC": "44",
  /** Physical pin 45: XTAL_P_NC; no_connect. */
  "XTAL_P_NC": "45",
  /** Physical pin 46: VDDA; passive. */
  "VDDA_46": "46",
  /** Physical pin 47: CAP2_NC; no_connect. */
  "CAP2_NC": "47",
  /** Physical pin 48: CAP1_NC; no_connect. */
  "CAP1_NC": "48",
  /** Physical pin 49: GND; power_in. */
  "GND": "49",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 27: IO20; bidirectional. */
  "IO20": "27",
  /** Physical pin 32: SD0/IO7; bidirectional. */
  "SD0/IO7": "32",
  /** Physical pin 33: IO8; bidirectional. */
  "IO8": "33",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
}) {
  override schema = "MCU_Espressif:ESP32-PICO-V3";
  override referencePrefix = "U";
}

/**
 * RF Module, ESP32 SoC, 8MB In-Package flash, 2MB In-Package PSRAM, Wi-Fi 802.11b/g/n, Bluetooth, BLE, 32-bit, 3.0-3.6V, external antenna, QFN-48
 *
 * KiCad symbol: `MCU_Espressif:ESP32-PICO-V3-02`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.espressif.com/sites/default/files/documentation/esp32-pico_series_datasheet_en.pdf
 * Keywords: RF Radio BT ESP ESP32 Espressif external antenna.
 * Default footprint: Package_DFN_QFN:QFN-48-1EP_7x7mm_P0.5mm_EP5.3x5.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP32_PICO_V3_02 extends Component.withPins({
  /** Physical pin 1: VDDA; power_in. */
  "VDDA_1": "1",
  /** Physical pin 2: LNA_IN; bidirectional. */
  "LNA_IN": "2",
  /** Physical pin 3: VDDA3P3; power_in. */
  "VDDA3P3_3": "3",
  /** Physical pin 4: VDDA3P3; passive. */
  "VDDA3P3_4": "4",
  /** Physical pin 5: SENSOR_VP; input. */
  "SENSOR_VP": "5",
  /** Physical pin 6: SENSOR_CAPP; input. */
  "SENSOR_CAPP": "6",
  /** Physical pin 7: SENSOR_CAPN; input. */
  "SENSOR_CAPN": "7",
  /** Physical pin 8: SENSOR_VN; input. */
  "SENSOR_VN": "8",
  /** Physical pin 9: EN; input. */
  "EN": "9",
  /** Physical pin 10: IO34; input. */
  "IO34": "10",
  /** Physical pin 11: IO35; input. */
  "IO35": "11",
  /** Physical pin 12: IO32; bidirectional. */
  "IO32": "12",
  /** Physical pin 13: IO33; bidirectional. */
  "IO33": "13",
  /** Physical pin 14: IO25; bidirectional. */
  "IO25": "14",
  /** Physical pin 15: IO26; bidirectional. */
  "IO26": "15",
  /** Physical pin 16: IO27; bidirectional. */
  "IO27": "16",
  /** Physical pin 17: IO14; bidirectional. */
  "IO14": "17",
  /** Physical pin 18: IO12; bidirectional. */
  "IO12": "18",
  /** Physical pin 19: VDD3P3_RTC; power_in. */
  "VDD3P3_RTC": "19",
  /** Physical pin 20: IO13; bidirectional. */
  "IO13": "20",
  /** Physical pin 21: IO15; bidirectional. */
  "IO15": "21",
  /** Physical pin 22: IO2; bidirectional. */
  "IO2": "22",
  /** Physical pin 23: IO0; bidirectional. */
  "IO0": "23",
  /** Physical pin 24: IO4; bidirectional. */
  "IO4": "24",
  /** Physical pin 26: VDD_SDIO; power_out. */
  "VDD_SDIO": "26",
  /** Physical pin 30: CMD; bidirectional. */
  "CMD": "30",
  /** Physical pin 31: CLK; bidirectional. */
  "CLK": "31",
  /** Physical pin 34: IO5; bidirectional. */
  "IO5": "34",
  /** Physical pin 37: VDD3P3_CPU; power_in. */
  "VDD3P3_CPU": "37",
  /** Physical pin 38: IO19; bidirectional. */
  "IO19": "38",
  /** Physical pin 39: IO22; bidirectional. */
  "IO22": "39",
  /** Physical pin 40: U0RXD/IO3; bidirectional. */
  "U0RXD/IO3": "40",
  /** Physical pin 41: U0TXD/IO1; bidirectional. */
  "U0TXD/IO1": "41",
  /** Physical pin 42: IO21; bidirectional. */
  "IO21": "42",
  /** Physical pin 43: VDDA; passive. */
  "VDDA_43": "43",
  /** Physical pin 44: XTAL_N_NC; no_connect. */
  "XTAL_N_NC": "44",
  /** Physical pin 45: XTAL_P_NC; no_connect. */
  "XTAL_P_NC": "45",
  /** Physical pin 46: VDDA; passive. */
  "VDDA_46": "46",
  /** Physical pin 47: CAP2_NC; no_connect. */
  "CAP2_NC": "47",
  /** Physical pin 48: CAP1_NC; no_connect. */
  "CAP1_NC": "48",
  /** Physical pin 49: GND; power_in. */
  "GND": "49",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 27: IO20; bidirectional. */
  "IO20": "27",
  /** Physical pin 28: IO9/PSRAM-~{CS}; bidirectional. */
  "IO9/PSRAM-~{CS}": "28",
  /** Physical pin 29: IO10/PSRAM-CLK; bidirectional. */
  "IO10/PSRAM-CLK": "29",
  /** Physical pin 32: SD0/IO7; bidirectional. */
  "SD0/IO7": "32",
  /** Physical pin 33: IO8; bidirectional. */
  "IO8": "33",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
}) {
  override schema = "MCU_Espressif:ESP32-PICO-V3-02";
  override referencePrefix = "U";
}

/**
 * Microcontroller, Wi-Fi 802.11b/g/n, Bluetooth, 32bit
 *
 * KiCad symbol: `MCU_Espressif:ESP32-S2`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see https://www.espressif.com/sites/default/files/documentation/esp32-s2_datasheet_en.pdf
 * Keywords: Microcontroller Wi-Fi BT ESP ESP32 Espressif.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP4x4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP32_S2 extends Component.withPins({
  /** Physical pin 1: VDDA; power_in. */
  "VDDA_1": "1",
  /** Physical pin 2: LNA_IN; bidirectional. */
  "LNA_IN": "2",
  /** Physical pin 3: VDD3P3; power_in. */
  "VDD3P3_3": "3",
  /** Physical pin 4: VDD3P3; passive. */
  "VDD3P3_4": "4",
  /** Physical pin 5: GPIO0; bidirectional. */
  "GPIO0": "5",
  /** Physical pin 6: GPIO1; bidirectional. */
  "GPIO1": "6",
  /** Physical pin 7: GPIO2; bidirectional. */
  "GPIO2": "7",
  /** Physical pin 8: GPIO3; bidirectional. */
  "GPIO3": "8",
  /** Physical pin 9: GPIO4; bidirectional. */
  "GPIO4": "9",
  /** Physical pin 10: GPIO5; bidirectional. */
  "GPIO5": "10",
  /** Physical pin 11: GPIO6; bidirectional. */
  "GPIO6": "11",
  /** Physical pin 12: GPIO7; bidirectional. */
  "GPIO7": "12",
  /** Physical pin 13: GPIO8; bidirectional. */
  "GPIO8": "13",
  /** Physical pin 14: GPIO9; bidirectional. */
  "GPIO9": "14",
  /** Physical pin 15: GPIO10; bidirectional. */
  "GPIO10": "15",
  /** Physical pin 16: GPIO11; bidirectional. */
  "GPIO11": "16",
  /** Physical pin 17: GPIO12; bidirectional. */
  "GPIO12": "17",
  /** Physical pin 18: GPIO13; bidirectional. */
  "GPIO13": "18",
  /** Physical pin 19: GPIO14; bidirectional. */
  "GPIO14": "19",
  /** Physical pin 20: VDD3P3_RTC; power_in. */
  "VDD3P3_RTC": "20",
  /** Physical pin 21: XTAL_32K_P; passive. */
  "XTAL_32K_P": "21",
  /** Physical pin 22: XTAL_32K_N; passive. */
  "XTAL_32K_N": "22",
  /** Physical pin 23: DAC_1; bidirectional. */
  "DAC_1": "23",
  /** Physical pin 24: DAC_2; bidirectional. */
  "DAC_2": "24",
  /** Physical pin 25: GPIO19/USB_D-; bidirectional. */
  "GPIO19/USB_D-": "25",
  /** Physical pin 26: GPIO20/USB_D+; bidirectional. */
  "GPIO20/USB_D+": "26",
  /** Physical pin 27: VDD3P3_RTC_IO; power_in. */
  "VDD3P3_RTC_IO": "27",
  /** Physical pin 28: GPIO21; bidirectional. */
  "GPIO21": "28",
  /** Physical pin 29: SPICS1; bidirectional. */
  "SPICS1": "29",
  /** Physical pin 30: VDD_SPI; power_out. */
  "VDD_SPI": "30",
  /** Physical pin 31: SPIHD; bidirectional. */
  "SPIHD": "31",
  /** Physical pin 32: SPIWP; bidirectional. */
  "SPIWP": "32",
  /** Physical pin 33: SPICS0; bidirectional. */
  "SPICS0": "33",
  /** Physical pin 34: SPICLK; bidirectional. */
  "SPICLK": "34",
  /** Physical pin 35: SPIQ; bidirectional. */
  "SPIQ": "35",
  /** Physical pin 36: SPID; bidirectional. */
  "SPID": "36",
  /** Physical pin 37: GPIO33; bidirectional. */
  "GPIO33": "37",
  /** Physical pin 38: GPIO34; bidirectional. */
  "GPIO34": "38",
  /** Physical pin 39: GPIO35; bidirectional. */
  "GPIO35": "39",
  /** Physical pin 40: GPIO36; bidirectional. */
  "GPIO36": "40",
  /** Physical pin 41: GPIO37; bidirectional. */
  "GPIO37": "41",
  /** Physical pin 42: GPIO38; bidirectional. */
  "GPIO38": "42",
  /** Physical pin 43: MTCK; bidirectional. */
  "MTCK": "43",
  /** Physical pin 44: MTD0; bidirectional. */
  "MTD0": "44",
  /** Physical pin 45: VDD3P3_CPU; power_in. */
  "VDD3P3_CPU": "45",
  /** Physical pin 46: MDTI; bidirectional. */
  "MDTI": "46",
  /** Physical pin 47: MTMS; bidirectional. */
  "MTMS": "47",
  /** Physical pin 48: U0TXD; bidirectional. */
  "U0TXD": "48",
  /** Physical pin 49: U0RXD; bidirectional. */
  "U0RXD": "49",
  /** Physical pin 50: GPIO45; bidirectional. */
  "GPIO45": "50",
  /** Physical pin 51: VDDA; passive. */
  "VDDA_51": "51",
  /** Physical pin 52: XTAL_N; output. */
  "XTAL_N": "52",
  /** Physical pin 53: XTAL_P; input. */
  "XTAL_P": "53",
  /** Physical pin 54: VDDA; passive. */
  "VDDA_54": "54",
  /** Physical pin 55: GPIO46; input. */
  "GPIO46": "55",
  /** Physical pin 56: CHIP_PU; input. */
  "CHIP_PU": "56",
  /** Physical pin 57: GND; power_in. */
  "GND": "57",
}) {
  override schema = "MCU_Espressif:ESP32-S2";
  override referencePrefix = "U";
}

/**
 * Microcontroller, Wi-Fi 802.11b/g/n, Bluetooth, 32bit
 *
 * KiCad symbol: `MCU_Espressif:ESP32-S3`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.4mm*.
 * @see https://www.espressif.com/sites/default/files/documentation/esp32-s3_datasheet_en.pdf
 * Keywords: Microcontroller Wi-Fi BT ESP ESP32 Espressif.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_7x7mm_P0.4mm_EP4x4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP32_S3 extends Component.withPins({
  /** Physical pin 36: SPICLK_N; bidirectional. */
  "SPICLK_N": "36",
  /** Physical pin 45: MTDO; bidirectional. */
  "MTDO": "45",
  /** Physical pin 51: GPIO45; bidirectional. */
  "GPIO45": "51",
  /** Physical pin 56: VDDA; passive. */
  "VDDA_56": "56",
  /** Physical pin 1: LNA_IN; bidirectional. */
  "LNA_IN": "1",
  /** Physical pin 2: VDD3P3; power_in. */
  "VDD3P3_2": "2",
  /** Physical pin 3: VDD3P3; passive. */
  "VDD3P3_3": "3",
  /** Physical pin 4: CHIP_PU; input. */
  "CHIP_PU": "4",
  /** Physical pin 5: GPIO0; bidirectional. */
  "GPIO0": "5",
  /** Physical pin 6: GPIO1; bidirectional. */
  "GPIO1": "6",
  /** Physical pin 7: GPIO2; bidirectional. */
  "GPIO2": "7",
  /** Physical pin 8: GPIO3; bidirectional. */
  "GPIO3": "8",
  /** Physical pin 9: GPIO4; bidirectional. */
  "GPIO4": "9",
  /** Physical pin 10: GPIO5; bidirectional. */
  "GPIO5": "10",
  /** Physical pin 11: GPIO6; bidirectional. */
  "GPIO6": "11",
  /** Physical pin 12: GPIO7; bidirectional. */
  "GPIO7": "12",
  /** Physical pin 13: GPIO8; bidirectional. */
  "GPIO8": "13",
  /** Physical pin 14: GPIO9; bidirectional. */
  "GPIO9": "14",
  /** Physical pin 15: GPIO10; bidirectional. */
  "GPIO10": "15",
  /** Physical pin 16: GPIO11; bidirectional. */
  "GPIO11": "16",
  /** Physical pin 17: GPIO12; bidirectional. */
  "GPIO12": "17",
  /** Physical pin 18: GPIO13; bidirectional. */
  "GPIO13": "18",
  /** Physical pin 19: GPIO14; bidirectional. */
  "GPIO14": "19",
  /** Physical pin 20: VDD3P3_RTC; power_in. */
  "VDD3P3_RTC": "20",
  /** Physical pin 21: XTAL_32K_P; passive. */
  "XTAL_32K_P": "21",
  /** Physical pin 22: XTAL_32K_N; passive. */
  "XTAL_32K_N": "22",
  /** Physical pin 23: GPIO17; bidirectional. */
  "GPIO17": "23",
  /** Physical pin 24: GPIO18; bidirectional. */
  "GPIO18": "24",
  /** Physical pin 25: GPIO19/USB_D-; bidirectional. */
  "GPIO19/USB_D-": "25",
  /** Physical pin 26: GPIO20/USB_D+; bidirectional. */
  "GPIO20/USB_D+": "26",
  /** Physical pin 27: GPIO21; bidirectional. */
  "GPIO21": "27",
  /** Physical pin 28: SPICS1; bidirectional. */
  "SPICS1": "28",
  /** Physical pin 29: VDD_SPI; power_in. */
  "VDD_SPI": "29",
  /** Physical pin 30: SPIHD; bidirectional. */
  "SPIHD": "30",
  /** Physical pin 31: SPIWP; bidirectional. */
  "SPIWP": "31",
  /** Physical pin 32: SPICS0; bidirectional. */
  "SPICS0": "32",
  /** Physical pin 33: SPICLK; bidirectional. */
  "SPICLK": "33",
  /** Physical pin 34: SPIQ; bidirectional. */
  "SPIQ": "34",
  /** Physical pin 35: SPID; bidirectional. */
  "SPID": "35",
  /** Physical pin 37: SPICLK_P; bidirectional. */
  "SPICLK_P": "37",
  /** Physical pin 38: GPIO33; bidirectional. */
  "GPIO33": "38",
  /** Physical pin 39: GPIO34; bidirectional. */
  "GPIO34": "39",
  /** Physical pin 40: GPIO35; bidirectional. */
  "GPIO35": "40",
  /** Physical pin 41: GPIO36; bidirectional. */
  "GPIO36": "41",
  /** Physical pin 42: GPIO37; bidirectional. */
  "GPIO37": "42",
  /** Physical pin 43: GPIO38; bidirectional. */
  "GPIO38": "43",
  /** Physical pin 44: MTCK; bidirectional. */
  "MTCK": "44",
  /** Physical pin 46: VDD3P3_CPU; power_in. */
  "VDD3P3_CPU": "46",
  /** Physical pin 47: MTDI; bidirectional. */
  "MTDI": "47",
  /** Physical pin 48: MTMS; bidirectional. */
  "MTMS": "48",
  /** Physical pin 49: U0TXD; bidirectional. */
  "U0TXD": "49",
  /** Physical pin 50: U0RXD; bidirectional. */
  "U0RXD": "50",
  /** Physical pin 52: GPIO46; bidirectional. */
  "GPIO46": "52",
  /** Physical pin 53: XTAL_N; output. */
  "XTAL_N": "53",
  /** Physical pin 54: XTAL_P; input. */
  "XTAL_P": "54",
  /** Physical pin 55: VDDA; power_in. */
  "VDDA_55": "55",
  /** Physical pin 57: GND; power_in. */
  "GND": "57",
}) {
  override schema = "MCU_Espressif:ESP32-S3";
  override referencePrefix = "U";
}

/**
 * Highly integrated Wi-Fi SoC, QFN-32
 *
 * KiCad symbol: `MCU_Espressif:ESP8266EX`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see http://espressif.com/sites/default/files/documentation/0a-esp8266ex_datasheet_en.pdf
 * Keywords: wifi soc.
 * Default footprint: Package_DFN_QFN:QFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ESP8266EX extends Component.withPins({
  /** Physical pin 1: VDDA; power_in. */
  "VDDA_1": "1",
  /** Physical pin 2: LNA; bidirectional. */
  "LNA": "2",
  /** Physical pin 3: VDD3P3; power_in. */
  "VDD3P3_3": "3",
  /** Physical pin 4: VDD3P3; power_in. */
  "VDD3P3_4": "4",
  /** Physical pin 5: VDD_RTC; power_in. */
  "VDD_RTC": "5",
  /** Physical pin 6: TOUT; input. */
  "TOUT": "6",
  /** Physical pin 7: CHIP_PU; input. */
  "CHIP_PU": "7",
  /** Physical pin 8: XPD_DCDC; bidirectional. */
  "XPD_DCDC": "8",
  /** Physical pin 9: MTMS; bidirectional. */
  "MTMS": "9",
  /** Physical pin 10: MTDI; bidirectional. */
  "MTDI": "10",
  /** Physical pin 11: VDDPST; power_in. */
  "VDDPST_11": "11",
  /** Physical pin 12: MTCK; bidirectional. */
  "MTCK": "12",
  /** Physical pin 13: MTDO; bidirectional. */
  "MTDO": "13",
  /** Physical pin 14: GPIO2; bidirectional. */
  "GPIO2": "14",
  /** Physical pin 15: GPIO0; bidirectional. */
  "GPIO0": "15",
  /** Physical pin 16: GPIO4; bidirectional. */
  "GPIO4": "16",
  /** Physical pin 17: VDDPST; power_in. */
  "VDDPST_17": "17",
  /** Physical pin 18: SDIO_DATA_2; bidirectional. */
  "SDIO_DATA_2": "18",
  /** Physical pin 19: SDIO_DATA_3; bidirectional. */
  "SDIO_DATA_3": "19",
  /** Physical pin 20: SDIO_CMD; bidirectional. */
  "SDIO_CMD": "20",
  /** Physical pin 21: SDIO_CLK; bidirectional. */
  "SDIO_CLK": "21",
  /** Physical pin 22: SDIO_DATA_0; bidirectional. */
  "SDIO_DATA_0": "22",
  /** Physical pin 23: SDIO_DATA_1; bidirectional. */
  "SDIO_DATA_1": "23",
  /** Physical pin 24: GPIO5; bidirectional. */
  "GPIO5": "24",
  /** Physical pin 25: U0RXD; bidirectional. */
  "U0RXD": "25",
  /** Physical pin 26: U0TXD; bidirectional. */
  "U0TXD": "26",
  /** Physical pin 27: XTAL_OUT; bidirectional. */
  "XTAL_OUT": "27",
  /** Physical pin 28: XTAL_IN; bidirectional. */
  "XTAL_IN": "28",
  /** Physical pin 29: VDDD; power_in. */
  "VDDD": "29",
  /** Physical pin 30: VDDA; power_in. */
  "VDDA_30": "30",
  /** Physical pin 31: RES12K; input. */
  "RES12K": "31",
  /** Physical pin 32: ~{EXT_RSTB}; input. */
  "~{EXT_RSTB}": "32",
  /** Physical pin 33: GND; power_in. */
  "GND": "33",
}) {
  override schema = "MCU_Espressif:ESP8266EX";
  override referencePrefix = "U";
}

