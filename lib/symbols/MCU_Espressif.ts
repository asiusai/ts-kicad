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
 */
export class ESP32_C3 extends Component.withPins({
  "LNA_IN": "1",
  "VDD3P3_2": "2",
  "VDD3P3_3": "3",
  "XTAL_32K_P": "4",
  "XTAL_32K_N": "5",
  "GPIO2": "6",
  "CHIP_EN": "7",
  "GPIO3": "8",
  "MTMS": "9",
  "MTDI": "10",
  "VDD3P3_RTC": "11",
  "MTCK": "12",
  "MTDO": "13",
  "GPIO8": "14",
  "GPIO9": "15",
  "GPIO10": "16",
  "VDD3P3_CPU": "17",
  "VDD_SPI": "18",
  "SPIHD": "19",
  "SPIWP": "20",
  "SPICS0": "21",
  "SPICLK": "22",
  "SPID": "23",
  "SPIQ": "24",
  "GPIO18": "25",
  "GPIO19": "26",
  "U0RXD": "27",
  "U0TXD": "28",
  "XTAL_N": "29",
  "XTAL_P": "30",
  "VDDA_31": "31",
  "VDDA_32": "32",
  "GND": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { LNA_IN: "bidirectional", VDD3P3_2: "power_in", VDD3P3_3: "passive", XTAL_32K_P: "bidirectional", XTAL_32K_N: "bidirectional", GPIO2: "bidirectional", CHIP_EN: "bidirectional", GPIO3: "bidirectional", MTMS: "bidirectional", MTDI: "bidirectional", VDD3P3_RTC: "power_in", MTCK: "bidirectional", MTDO: "bidirectional", GPIO8: "bidirectional", GPIO9: "bidirectional", GPIO10: "bidirectional", VDD3P3_CPU: "power_in", VDD_SPI: "power_out", SPIHD: "bidirectional", SPIWP: "bidirectional", SPICS0: "bidirectional", SPICLK: "bidirectional", SPID: "bidirectional", SPIQ: "bidirectional", GPIO18: "bidirectional", GPIO19: "bidirectional", U0RXD: "bidirectional", U0TXD: "bidirectional", XTAL_N: "bidirectional", XTAL_P: "bidirectional", VDDA_31: "power_in", VDDA_32: "passive", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ESP32_PICO_D4 extends Component.withPins({
  "VDDA_1": "1",
  "LNA_IN": "2",
  "VDDA3P3_3": "3",
  "VDDA3P3_4": "4",
  "SENSOR_VP": "5",
  "SENSOR_CAPP": "6",
  "SENSOR_CAPN": "7",
  "SENSOR_VN": "8",
  "EN": "9",
  "IO34": "10",
  "IO35": "11",
  "IO32": "12",
  "IO33": "13",
  "IO25": "14",
  "IO26": "15",
  "IO27": "16",
  "IO14": "17",
  "IO12": "18",
  "VDD3P3_RTC": "19",
  "IO13": "20",
  "IO15": "21",
  "IO2": "22",
  "IO0": "23",
  "IO4": "24",
  "IO16": "25",
  "VDD_SDIO": "26",
  "IO17": "27",
  "SD2/IO9": "28",
  "SD3/IO10": "29",
  "CMD": "30",
  "CLK": "31",
  "SD0": "32",
  "SD1": "33",
  "IO5": "34",
  "IO18": "35",
  "IO23": "36",
  "VDD3P3_CPU": "37",
  "IO19": "38",
  "IO22": "39",
  "U0RXD/IO3": "40",
  "U0TXD/IO1": "41",
  "IO21": "42",
  "VDDA_43": "43",
  "XTAL_N_NC": "44",
  "XTAL_P_NC": "45",
  "VDDA_46": "46",
  "CAP2_NC": "47",
  "CAP1_NC": "48",
  "GND": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDDA_1: "power_in", LNA_IN: "bidirectional", VDDA3P3_3: "power_in", VDDA3P3_4: "passive", SENSOR_VP: "input", SENSOR_CAPP: "input", SENSOR_CAPN: "input", SENSOR_VN: "input", EN: "input", IO34: "input", IO35: "input", IO32: "bidirectional", IO33: "bidirectional", IO25: "bidirectional", IO26: "bidirectional", IO27: "bidirectional", IO14: "bidirectional", IO12: "bidirectional", VDD3P3_RTC: "power_in", IO13: "bidirectional", IO15: "bidirectional", IO2: "bidirectional", IO0: "bidirectional", IO4: "bidirectional", IO16: "bidirectional", VDD_SDIO: "power_out", IO17: "bidirectional", "SD2/IO9": "bidirectional", "SD3/IO10": "bidirectional", CMD: "bidirectional", CLK: "bidirectional", SD0: "bidirectional", SD1: "bidirectional", IO5: "bidirectional", IO18: "bidirectional", IO23: "bidirectional", VDD3P3_CPU: "power_in", IO19: "bidirectional", IO22: "bidirectional", "U0RXD/IO3": "bidirectional", "U0TXD/IO1": "bidirectional", IO21: "bidirectional", VDDA_43: "passive", XTAL_N_NC: "no_connect", XTAL_P_NC: "no_connect", VDDA_46: "passive", CAP2_NC: "no_connect", CAP1_NC: "no_connect", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ESP32_PICO_V3 extends Component.withPins({
  "VDDA_1": "1",
  "LNA_IN": "2",
  "VDDA3P3_3": "3",
  "VDDA3P3_4": "4",
  "SENSOR_VP": "5",
  "SENSOR_CAPP": "6",
  "SENSOR_CAPN": "7",
  "SENSOR_VN": "8",
  "EN": "9",
  "IO34": "10",
  "IO35": "11",
  "IO32": "12",
  "IO33": "13",
  "IO25": "14",
  "IO26": "15",
  "IO27": "16",
  "IO14": "17",
  "IO12": "18",
  "VDD3P3_RTC": "19",
  "IO13": "20",
  "IO15": "21",
  "IO2": "22",
  "IO0": "23",
  "IO4": "24",
  "VDD_SDIO": "26",
  "SD2/IO9": "28",
  "SD3/IO10": "29",
  "CMD": "30",
  "CLK": "31",
  "IO5": "34",
  "VDD3P3_CPU": "37",
  "IO19": "38",
  "IO22": "39",
  "U0RXD/IO3": "40",
  "U0TXD/IO1": "41",
  "IO21": "42",
  "VDDA_43": "43",
  "XTAL_N_NC": "44",
  "XTAL_P_NC": "45",
  "VDDA_46": "46",
  "CAP2_NC": "47",
  "CAP1_NC": "48",
  "GND": "49",
  "NC_25": "25",
  "IO20": "27",
  "SD0/IO7": "32",
  "IO8": "33",
  "NC_35": "35",
  "NC_36": "36",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDDA_1: "power_in", LNA_IN: "bidirectional", VDDA3P3_3: "power_in", VDDA3P3_4: "passive", SENSOR_VP: "input", SENSOR_CAPP: "input", SENSOR_CAPN: "input", SENSOR_VN: "input", EN: "input", IO34: "input", IO35: "input", IO32: "bidirectional", IO33: "bidirectional", IO25: "bidirectional", IO26: "bidirectional", IO27: "bidirectional", IO14: "bidirectional", IO12: "bidirectional", VDD3P3_RTC: "power_in", IO13: "bidirectional", IO15: "bidirectional", IO2: "bidirectional", IO0: "bidirectional", IO4: "bidirectional", VDD_SDIO: "power_out", "SD2/IO9": "bidirectional", "SD3/IO10": "bidirectional", CMD: "bidirectional", CLK: "bidirectional", IO5: "bidirectional", VDD3P3_CPU: "power_in", IO19: "bidirectional", IO22: "bidirectional", "U0RXD/IO3": "bidirectional", "U0TXD/IO1": "bidirectional", IO21: "bidirectional", VDDA_43: "passive", XTAL_N_NC: "no_connect", XTAL_P_NC: "no_connect", VDDA_46: "passive", CAP2_NC: "no_connect", CAP1_NC: "no_connect", GND: "power_in", NC_25: "no_connect", IO20: "bidirectional", "SD0/IO7": "bidirectional", IO8: "bidirectional", NC_35: "no_connect", NC_36: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class ESP32_PICO_V3_02 extends Component.withPins({
  "VDDA_1": "1",
  "LNA_IN": "2",
  "VDDA3P3_3": "3",
  "VDDA3P3_4": "4",
  "SENSOR_VP": "5",
  "SENSOR_CAPP": "6",
  "SENSOR_CAPN": "7",
  "SENSOR_VN": "8",
  "EN": "9",
  "IO34": "10",
  "IO35": "11",
  "IO32": "12",
  "IO33": "13",
  "IO25": "14",
  "IO26": "15",
  "IO27": "16",
  "IO14": "17",
  "IO12": "18",
  "VDD3P3_RTC": "19",
  "IO13": "20",
  "IO15": "21",
  "IO2": "22",
  "IO0": "23",
  "IO4": "24",
  "VDD_SDIO": "26",
  "CMD": "30",
  "CLK": "31",
  "IO5": "34",
  "VDD3P3_CPU": "37",
  "IO19": "38",
  "IO22": "39",
  "U0RXD/IO3": "40",
  "U0TXD/IO1": "41",
  "IO21": "42",
  "VDDA_43": "43",
  "XTAL_N_NC": "44",
  "XTAL_P_NC": "45",
  "VDDA_46": "46",
  "CAP2_NC": "47",
  "CAP1_NC": "48",
  "GND": "49",
  "NC_25": "25",
  "IO20": "27",
  "IO9/PSRAM-~{CS}": "28",
  "IO10/PSRAM-CLK": "29",
  "SD0/IO7": "32",
  "IO8": "33",
  "NC_35": "35",
  "NC_36": "36",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDDA_1: "power_in", LNA_IN: "bidirectional", VDDA3P3_3: "power_in", VDDA3P3_4: "passive", SENSOR_VP: "input", SENSOR_CAPP: "input", SENSOR_CAPN: "input", SENSOR_VN: "input", EN: "input", IO34: "input", IO35: "input", IO32: "bidirectional", IO33: "bidirectional", IO25: "bidirectional", IO26: "bidirectional", IO27: "bidirectional", IO14: "bidirectional", IO12: "bidirectional", VDD3P3_RTC: "power_in", IO13: "bidirectional", IO15: "bidirectional", IO2: "bidirectional", IO0: "bidirectional", IO4: "bidirectional", VDD_SDIO: "power_out", CMD: "bidirectional", CLK: "bidirectional", IO5: "bidirectional", VDD3P3_CPU: "power_in", IO19: "bidirectional", IO22: "bidirectional", "U0RXD/IO3": "bidirectional", "U0TXD/IO1": "bidirectional", IO21: "bidirectional", VDDA_43: "passive", XTAL_N_NC: "no_connect", XTAL_P_NC: "no_connect", VDDA_46: "passive", CAP2_NC: "no_connect", CAP1_NC: "no_connect", GND: "power_in", NC_25: "no_connect", IO20: "bidirectional", "IO9/PSRAM-~{CS}": "bidirectional", "IO10/PSRAM-CLK": "bidirectional", "SD0/IO7": "bidirectional", IO8: "bidirectional", NC_35: "no_connect", NC_36: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class ESP32_S2 extends Component.withPins({
  "VDDA_1": "1",
  "LNA_IN": "2",
  "VDD3P3_3": "3",
  "VDD3P3_4": "4",
  "GPIO0": "5",
  "GPIO1": "6",
  "GPIO2": "7",
  "GPIO3": "8",
  "GPIO4": "9",
  "GPIO5": "10",
  "GPIO6": "11",
  "GPIO7": "12",
  "GPIO8": "13",
  "GPIO9": "14",
  "GPIO10": "15",
  "GPIO11": "16",
  "GPIO12": "17",
  "GPIO13": "18",
  "GPIO14": "19",
  "VDD3P3_RTC": "20",
  "XTAL_32K_P": "21",
  "XTAL_32K_N": "22",
  "DAC_1": "23",
  "DAC_2": "24",
  "GPIO19/USB_D-": "25",
  "GPIO20/USB_D+": "26",
  "VDD3P3_RTC_IO": "27",
  "GPIO21": "28",
  "SPICS1": "29",
  "VDD_SPI": "30",
  "SPIHD": "31",
  "SPIWP": "32",
  "SPICS0": "33",
  "SPICLK": "34",
  "SPIQ": "35",
  "SPID": "36",
  "GPIO33": "37",
  "GPIO34": "38",
  "GPIO35": "39",
  "GPIO36": "40",
  "GPIO37": "41",
  "GPIO38": "42",
  "MTCK": "43",
  "MTD0": "44",
  "VDD3P3_CPU": "45",
  "MDTI": "46",
  "MTMS": "47",
  "U0TXD": "48",
  "U0RXD": "49",
  "GPIO45": "50",
  "VDDA_51": "51",
  "XTAL_N": "52",
  "XTAL_P": "53",
  "VDDA_54": "54",
  "GPIO46": "55",
  "CHIP_PU": "56",
  "GND": "57",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDDA_1: "power_in", LNA_IN: "bidirectional", VDD3P3_3: "power_in", VDD3P3_4: "passive", GPIO0: "bidirectional", GPIO1: "bidirectional", GPIO2: "bidirectional", GPIO3: "bidirectional", GPIO4: "bidirectional", GPIO5: "bidirectional", GPIO6: "bidirectional", GPIO7: "bidirectional", GPIO8: "bidirectional", GPIO9: "bidirectional", GPIO10: "bidirectional", GPIO11: "bidirectional", GPIO12: "bidirectional", GPIO13: "bidirectional", GPIO14: "bidirectional", VDD3P3_RTC: "power_in", XTAL_32K_P: "passive", XTAL_32K_N: "passive", DAC_1: "bidirectional", DAC_2: "bidirectional", "GPIO19/USB_D-": "bidirectional", "GPIO20/USB_D+": "bidirectional", VDD3P3_RTC_IO: "power_in", GPIO21: "bidirectional", SPICS1: "bidirectional", VDD_SPI: "power_out", SPIHD: "bidirectional", SPIWP: "bidirectional", SPICS0: "bidirectional", SPICLK: "bidirectional", SPIQ: "bidirectional", SPID: "bidirectional", GPIO33: "bidirectional", GPIO34: "bidirectional", GPIO35: "bidirectional", GPIO36: "bidirectional", GPIO37: "bidirectional", GPIO38: "bidirectional", MTCK: "bidirectional", MTD0: "bidirectional", VDD3P3_CPU: "power_in", MDTI: "bidirectional", MTMS: "bidirectional", U0TXD: "bidirectional", U0RXD: "bidirectional", GPIO45: "bidirectional", VDDA_51: "passive", XTAL_N: "output", XTAL_P: "input", VDDA_54: "passive", GPIO46: "input", CHIP_PU: "input", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ESP32_S3 extends Component.withPins({
  "SPICLK_N": "36",
  "MTDO": "45",
  "GPIO45": "51",
  "VDDA_56": "56",
  "LNA_IN": "1",
  "VDD3P3_2": "2",
  "VDD3P3_3": "3",
  "CHIP_PU": "4",
  "GPIO0": "5",
  "GPIO1": "6",
  "GPIO2": "7",
  "GPIO3": "8",
  "GPIO4": "9",
  "GPIO5": "10",
  "GPIO6": "11",
  "GPIO7": "12",
  "GPIO8": "13",
  "GPIO9": "14",
  "GPIO10": "15",
  "GPIO11": "16",
  "GPIO12": "17",
  "GPIO13": "18",
  "GPIO14": "19",
  "VDD3P3_RTC": "20",
  "XTAL_32K_P": "21",
  "XTAL_32K_N": "22",
  "GPIO17": "23",
  "GPIO18": "24",
  "GPIO19/USB_D-": "25",
  "GPIO20/USB_D+": "26",
  "GPIO21": "27",
  "SPICS1": "28",
  "VDD_SPI": "29",
  "SPIHD": "30",
  "SPIWP": "31",
  "SPICS0": "32",
  "SPICLK": "33",
  "SPIQ": "34",
  "SPID": "35",
  "SPICLK_P": "37",
  "GPIO33": "38",
  "GPIO34": "39",
  "GPIO35": "40",
  "GPIO36": "41",
  "GPIO37": "42",
  "GPIO38": "43",
  "MTCK": "44",
  "VDD3P3_CPU": "46",
  "MTDI": "47",
  "MTMS": "48",
  "U0TXD": "49",
  "U0RXD": "50",
  "GPIO46": "52",
  "XTAL_N": "53",
  "XTAL_P": "54",
  "VDDA_55": "55",
  "GND": "57",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SPICLK_N: "bidirectional", MTDO: "bidirectional", GPIO45: "bidirectional", VDDA_56: "passive", LNA_IN: "bidirectional", VDD3P3_2: "power_in", VDD3P3_3: "passive", CHIP_PU: "input", GPIO0: "bidirectional", GPIO1: "bidirectional", GPIO2: "bidirectional", GPIO3: "bidirectional", GPIO4: "bidirectional", GPIO5: "bidirectional", GPIO6: "bidirectional", GPIO7: "bidirectional", GPIO8: "bidirectional", GPIO9: "bidirectional", GPIO10: "bidirectional", GPIO11: "bidirectional", GPIO12: "bidirectional", GPIO13: "bidirectional", GPIO14: "bidirectional", VDD3P3_RTC: "power_in", XTAL_32K_P: "passive", XTAL_32K_N: "passive", GPIO17: "bidirectional", GPIO18: "bidirectional", "GPIO19/USB_D-": "bidirectional", "GPIO20/USB_D+": "bidirectional", GPIO21: "bidirectional", SPICS1: "bidirectional", VDD_SPI: "power_in", SPIHD: "bidirectional", SPIWP: "bidirectional", SPICS0: "bidirectional", SPICLK: "bidirectional", SPIQ: "bidirectional", SPID: "bidirectional", SPICLK_P: "bidirectional", GPIO33: "bidirectional", GPIO34: "bidirectional", GPIO35: "bidirectional", GPIO36: "bidirectional", GPIO37: "bidirectional", GPIO38: "bidirectional", MTCK: "bidirectional", VDD3P3_CPU: "power_in", MTDI: "bidirectional", MTMS: "bidirectional", U0TXD: "bidirectional", U0RXD: "bidirectional", GPIO46: "bidirectional", XTAL_N: "output", XTAL_P: "input", VDDA_55: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ESP8266EX extends Component.withPins({
  "VDDA_1": "1",
  "LNA": "2",
  "VDD3P3_3": "3",
  "VDD3P3_4": "4",
  "VDD_RTC": "5",
  "TOUT": "6",
  "CHIP_PU": "7",
  "XPD_DCDC": "8",
  "MTMS": "9",
  "MTDI": "10",
  "VDDPST_11": "11",
  "MTCK": "12",
  "MTDO": "13",
  "GPIO2": "14",
  "GPIO0": "15",
  "GPIO4": "16",
  "VDDPST_17": "17",
  "SDIO_DATA_2": "18",
  "SDIO_DATA_3": "19",
  "SDIO_CMD": "20",
  "SDIO_CLK": "21",
  "SDIO_DATA_0": "22",
  "SDIO_DATA_1": "23",
  "GPIO5": "24",
  "U0RXD": "25",
  "U0TXD": "26",
  "XTAL_OUT": "27",
  "XTAL_IN": "28",
  "VDDD": "29",
  "VDDA_30": "30",
  "RES12K": "31",
  "~{EXT_RSTB}": "32",
  "GND": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDDA_1: "power_in", LNA: "bidirectional", VDD3P3_3: "power_in", VDD3P3_4: "power_in", VDD_RTC: "power_in", TOUT: "input", CHIP_PU: "input", XPD_DCDC: "bidirectional", MTMS: "bidirectional", MTDI: "bidirectional", VDDPST_11: "power_in", MTCK: "bidirectional", MTDO: "bidirectional", GPIO2: "bidirectional", GPIO0: "bidirectional", GPIO4: "bidirectional", VDDPST_17: "power_in", SDIO_DATA_2: "bidirectional", SDIO_DATA_3: "bidirectional", SDIO_CMD: "bidirectional", SDIO_CLK: "bidirectional", SDIO_DATA_0: "bidirectional", SDIO_DATA_1: "bidirectional", GPIO5: "bidirectional", U0RXD: "bidirectional", U0TXD: "bidirectional", XTAL_OUT: "bidirectional", XTAL_IN: "bidirectional", VDDD: "power_in", VDDA_30: "power_in", RES12K: "input", "~{EXT_RSTB}": "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Espressif:ESP8266EX";
  override referencePrefix = "U";
}
