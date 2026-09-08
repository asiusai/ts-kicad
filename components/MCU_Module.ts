// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Microcontroller module with ATmega32u4 MCU and bluetooth
 *
 * KiCad symbol: `MCU_Module:Adafruit_Feather_32u4_BluefruitLE`. Reference prefix: `A`.
 * Footprint filters: Adafruit*Feather*.
 * @see https://cdn-learn.adafruit.com/downloads/pdf/adafruit-feather-32u4-bluefruit-le.pdf
 * Keywords: Adafruit feather microcontroller module USB AVR ATmega32U4  Bluetooth BLE.
 * Default footprint: Module:Adafruit_Feather.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Adafruit_Feather_32u4_BluefruitLE extends Component.withPins({
  /** Physical pin 1: ~{RESET}; input. */
  "~{RESET}": "1",
  /** Physical pin 2: 3V3; power_in. */
  "3V3": "2",
  /** Physical pin 3: AREF; input. */
  "AREF": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: A0; bidirectional. */
  "A0": "5",
  /** Physical pin 6: A1; bidirectional. */
  "A1": "6",
  /** Physical pin 7: A2; bidirectional. */
  "A2": "7",
  /** Physical pin 8: A3; bidirectional. */
  "A3": "8",
  /** Physical pin 9: A4; bidirectional. */
  "A4": "9",
  /** Physical pin 10: A5; bidirectional. */
  "A5": "10",
  /** Physical pin 11: SCK/D15; bidirectional. */
  "SCK/D15": "11",
  /** Physical pin 12: MOSI/D16; bidirectional. */
  "MOSI/D16": "12",
  /** Physical pin 13: MISO/D14; bidirectional. */
  "MISO/D14": "13",
  /** Physical pin 14: RX/D0; bidirectional. */
  "RX/D0": "14",
  /** Physical pin 15: TX/D1; bidirectional. */
  "TX/D1": "15",
  /** Physical pin 16: ~{DFU}; input. */
  "~{DFU}": "16",
  /** Physical pin 17: SDA/D2; bidirectional. */
  "SDA/D2": "17",
  /** Physical pin 18: SCL/D3; bidirectional. */
  "SCL/D3": "18",
  /** Physical pin 19: D5; bidirectional. */
  "D5": "19",
  /** Physical pin 20: D6; bidirectional. */
  "D6": "20",
  /** Physical pin 21: D9; bidirectional. */
  "D9": "21",
  /** Physical pin 22: D10; bidirectional. */
  "D10": "22",
  /** Physical pin 23: D11; bidirectional. */
  "D11": "23",
  /** Physical pin 24: D12; bidirectional. */
  "D12": "24",
  /** Physical pin 25: D13; bidirectional. */
  "D13": "25",
  /** Physical pin 26: USB; power_in. */
  "USB": "26",
  /** Physical pin 27: EN; input. */
  "EN": "27",
  /** Physical pin 28: VBAT; power_in. */
  "VBAT": "28",
}) {
  override schema = "MCU_Module:Adafruit_Feather_32u4_BluefruitLE";
  override referencePrefix = "A";
}

/**
 * Microcontroller module in various flavor, generic symbol
 *
 * KiCad symbol: `MCU_Module:Adafruit_Feather_Generic`. Reference prefix: `A`.
 * Footprint filters: Adafruit*Feather*.
 * @see https://cdn-learn.adafruit.com/downloads/pdf/adafruit-feather.pdf
 * Keywords: Adafruit feather microcontroller module.
 * Default footprint: Module:Adafruit_Feather.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Adafruit_Feather_Generic extends Component.withPins({
  /** Physical pin 1: ~{RESET}; input. */
  "~{RESET}": "1",
  /** Physical pin 2: 3V3; power_in. */
  "3V3": "2",
  /** Physical pin 3: AREF; input. */
  "AREF": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: A0; bidirectional. */
  "A0": "5",
  /** Physical pin 6: A1; bidirectional. */
  "A1": "6",
  /** Physical pin 7: A2; bidirectional. */
  "A2": "7",
  /** Physical pin 8: A3; bidirectional. */
  "A3": "8",
  /** Physical pin 9: A4; bidirectional. */
  "A4": "9",
  /** Physical pin 10: A5; bidirectional. */
  "A5": "10",
  /** Physical pin 11: SCK; bidirectional. */
  "SCK": "11",
  /** Physical pin 12: MOSI; bidirectional. */
  "MOSI": "12",
  /** Physical pin 13: MISO; bidirectional. */
  "MISO": "13",
  /** Physical pin 14: RX; bidirectional. */
  "RX": "14",
  /** Physical pin 15: TX; bidirectional. */
  "TX": "15",
  /** Physical pin 16: SPARE; bidirectional. */
  "SPARE": "16",
  /** Physical pin 17: SDA; bidirectional. */
  "SDA": "17",
  /** Physical pin 18: SCL; bidirectional. */
  "SCL": "18",
  /** Physical pin 19: D0; bidirectional. */
  "D0": "19",
  /** Physical pin 20: D1; bidirectional. */
  "D1": "20",
  /** Physical pin 21: D2; bidirectional. */
  "D2": "21",
  /** Physical pin 22: D3; bidirectional. */
  "D3": "22",
  /** Physical pin 23: D4; bidirectional. */
  "D4": "23",
  /** Physical pin 24: D5; bidirectional. */
  "D5": "24",
  /** Physical pin 25: D6; bidirectional. */
  "D6": "25",
  /** Physical pin 26: USB; power_in. */
  "USB": "26",
  /** Physical pin 27: EN; input. */
  "EN": "27",
  /** Physical pin 28: VBAT; power_in. */
  "VBAT": "28",
}) {
  override schema = "MCU_Module:Adafruit_Feather_Generic";
  override referencePrefix = "A";
}

/**
 * Microcontroller module with ESP32 MCU
 *
 * KiCad symbol: `MCU_Module:Adafruit_Feather_HUZZAH32_ESP32`. Reference prefix: `A`.
 * Footprint filters: Adafruit*Feather*.
 * @see https://cdn-learn.adafruit.com/downloads/pdf/adafruit-huzzah32-esp32-feather.pdf
 * Keywords: Adafruit feather microcontroller module USB.
 * Default footprint: Module:Adafruit_Feather.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Adafruit_Feather_HUZZAH32_ESP32 extends Component.withPins({
  /** Physical pin 1: ~{RESET}; input. */
  "~{RESET}": "1",
  /** Physical pin 2: 3V3; power_in. */
  "3V3": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DAC2/A0; bidirectional. */
  "DAC2/A0": "5",
  /** Physical pin 6: DAC1/A1; bidirectional. */
  "DAC1/A1": "6",
  /** Physical pin 7: I34/A2; bidirectional. */
  "I34/A2": "7",
  /** Physical pin 8: I39/A3; bidirectional. */
  "I39/A3": "8",
  /** Physical pin 9: IO36/A4; bidirectional. */
  "IO36/A4": "9",
  /** Physical pin 10: IO4/A5; bidirectional. */
  "IO4/A5": "10",
  /** Physical pin 11: SCK/IO5; bidirectional. */
  "SCK/IO5": "11",
  /** Physical pin 12: MOSI/IO18; bidirectional. */
  "MOSI/IO18": "12",
  /** Physical pin 13: MISO/IO19; bidirectional. */
  "MISO/IO19": "13",
  /** Physical pin 14: RX/IO16; bidirectional. */
  "RX/IO16": "14",
  /** Physical pin 15: TX/IO17; bidirectional. */
  "TX/IO17": "15",
  /** Physical pin 16: IO21; bidirectional. */
  "IO21": "16",
  /** Physical pin 17: SDA/IO23; bidirectional. */
  "SDA/IO23": "17",
  /** Physical pin 18: SCL/IO22; bidirectional. */
  "SCL/IO22": "18",
  /** Physical pin 19: A6/IO14; bidirectional. */
  "A6/IO14": "19",
  /** Physical pin 20: A7/IO32; bidirectional. */
  "A7/IO32": "20",
  /** Physical pin 21: A8/IO15; bidirectional. */
  "A8/IO15": "21",
  /** Physical pin 22: A9/IO33; bidirectional. */
  "A9/IO33": "22",
  /** Physical pin 23: A10/IO27; bidirectional. */
  "A10/IO27": "23",
  /** Physical pin 24: A11/IO12; bidirectional. */
  "A11/IO12": "24",
  /** Physical pin 25: A12/IO13; bidirectional. */
  "A12/IO13": "25",
  /** Physical pin 26: USB; power_in. */
  "USB": "26",
  /** Physical pin 27: EN; input. */
  "EN": "27",
  /** Physical pin 28: VBAT; power_in. */
  "VBAT": "28",
}) {
  override schema = "MCU_Module:Adafruit_Feather_HUZZAH32_ESP32";
  override referencePrefix = "A";
}

/**
 * Microcontroller module with ESP8266 MCU
 *
 * KiCad symbol: `MCU_Module:Adafruit_Feather_HUZZAH_ESP8266`. Reference prefix: `A`.
 * Footprint filters: Adafruit*Feather*.
 * @see https://cdn-learn.adafruit.com/downloads/pdf/adafruit-feather-huzzah-esp8266.pdf
 * Keywords: Adafruit feather microcontroller module USB.
 * Default footprint: Module:Adafruit_Feather.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Adafruit_Feather_HUZZAH_ESP8266 extends Component.withPins({
  /** Physical pin 1: ~{RESET}; input. */
  "~{RESET}": "1",
  /** Physical pin 2: 3V3; power_in. */
  "3V3": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: ADC; bidirectional. */
  "ADC": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: SCK/IO14; bidirectional. */
  "SCK/IO14": "11",
  /** Physical pin 12: MOSI/IO13; bidirectional. */
  "MOSI/IO13": "12",
  /** Physical pin 13: MISO/IO12; bidirectional. */
  "MISO/IO12": "13",
  /** Physical pin 14: RX/IO3; bidirectional. */
  "RX/IO3": "14",
  /** Physical pin 15: TX/IO1; bidirectional. */
  "TX/IO1": "15",
  /** Physical pin 16: CH_PD; bidirectional. */
  "CH_PD": "16",
  /** Physical pin 17: SDA/IO4; bidirectional. */
  "SDA/IO4": "17",
  /** Physical pin 18: SCL/IO5; bidirectional. */
  "SCL/IO5": "18",
  /** Physical pin 19: IO2; bidirectional. */
  "IO2": "19",
  /** Physical pin 20: IO16; bidirectional. */
  "IO16": "20",
  /** Physical pin 21: IO0; bidirectional. */
  "IO0": "21",
  /** Physical pin 22: IO15; bidirectional. */
  "IO15": "22",
  /** Physical pin 23: IO13/MOSI; bidirectional. */
  "IO13/MOSI": "23",
  /** Physical pin 24: IO12/MISO; bidirectional. */
  "IO12/MISO": "24",
  /** Physical pin 25: IO14/SCK; bidirectional. */
  "IO14/SCK": "25",
  /** Physical pin 26: USB; power_in. */
  "USB": "26",
  /** Physical pin 27: EN; input. */
  "EN": "27",
  /** Physical pin 28: VBAT; power_in. */
  "VBAT": "28",
}) {
  override schema = "MCU_Module:Adafruit_Feather_HUZZAH_ESP8266";
  override referencePrefix = "A";
}

/**
 * Microcontroller module with SAMD21 Cortex-M0 MCU
 *
 * KiCad symbol: `MCU_Module:Adafruit_Feather_M0_Basic_Proto`. Reference prefix: `A`.
 * Footprint filters: Adafruit*Feather*.
 * @see https://cdn-learn.adafruit.com/downloads/pdf/adafruit-feather-m0-basic-proto.pdf
 * Keywords: Adafruit feather microcontroller module USB M0 SAMD21.
 * Default footprint: Module:Adafruit_Feather.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Adafruit_Feather_M0_Basic_Proto extends Component.withPins({
  /** Physical pin 1: ~{RESET}; input. */
  "~{RESET}": "1",
  /** Physical pin 2: 3V3; power_in. */
  "3V3": "2",
  /** Physical pin 3: AREF; input. */
  "AREF": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: DAC0/A0; bidirectional. */
  "DAC0/A0": "5",
  /** Physical pin 6: A1; bidirectional. */
  "A1": "6",
  /** Physical pin 7: A2; bidirectional. */
  "A2": "7",
  /** Physical pin 8: A3; bidirectional. */
  "A3": "8",
  /** Physical pin 9: A4; bidirectional. */
  "A4": "9",
  /** Physical pin 10: A5; bidirectional. */
  "A5": "10",
  /** Physical pin 11: SCK/D24; bidirectional. */
  "SCK/D24": "11",
  /** Physical pin 12: MOSI/D23; bidirectional. */
  "MOSI/D23": "12",
  /** Physical pin 13: MISO/D22; bidirectional. */
  "MISO/D22": "13",
  /** Physical pin 14: RX/D0; bidirectional. */
  "RX/D0": "14",
  /** Physical pin 15: TX/D1; bidirectional. */
  "TX/D1": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: SDA/D20; bidirectional. */
  "SDA/D20": "17",
  /** Physical pin 18: SCL/D21; bidirectional. */
  "SCL/D21": "18",
  /** Physical pin 19: D5; bidirectional. */
  "D5": "19",
  /** Physical pin 20: D6; bidirectional. */
  "D6": "20",
  /** Physical pin 21: D9; bidirectional. */
  "D9": "21",
  /** Physical pin 22: D10; bidirectional. */
  "D10": "22",
  /** Physical pin 23: D11; bidirectional. */
  "D11": "23",
  /** Physical pin 24: D12; bidirectional. */
  "D12": "24",
  /** Physical pin 25: D13; bidirectional. */
  "D13": "25",
  /** Physical pin 26: USB; power_in. */
  "USB": "26",
  /** Physical pin 27: EN; input. */
  "EN": "27",
  /** Physical pin 28: VBAT; power_in. */
  "VBAT": "28",
}) {
  override schema = "MCU_Module:Adafruit_Feather_M0_Basic_Proto";
  override referencePrefix = "A";
}

/**
 * Microcontroller module with SAMD21 Cortex-M0 MCU and SD card reader
 *
 * KiCad symbol: `MCU_Module:Adafruit_Feather_M0_Adalogger`. Reference prefix: `A`.
 * Footprint filters: Adafruit*Feather*.
 * @see https://cdn-learn.adafruit.com/downloads/pdf/adafruit-feather-m0-adalogger.pdf
 * Keywords: Adafruit feather microcontroller module USB SD.
 * Default footprint: Module:Adafruit_Feather.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Adafruit_Feather_M0_Adalogger extends Component.withPins({
  /** Physical pin 1: ~{RESET}; input. */
  "~{RESET}": "1",
  /** Physical pin 2: 3V3; power_in. */
  "3V3": "2",
  /** Physical pin 3: AREF; input. */
  "AREF": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: DAC0/A0; bidirectional. */
  "DAC0/A0": "5",
  /** Physical pin 6: A1; bidirectional. */
  "A1": "6",
  /** Physical pin 7: A2; bidirectional. */
  "A2": "7",
  /** Physical pin 8: A3; bidirectional. */
  "A3": "8",
  /** Physical pin 9: A4; bidirectional. */
  "A4": "9",
  /** Physical pin 10: A5; bidirectional. */
  "A5": "10",
  /** Physical pin 11: SCK/D24; bidirectional. */
  "SCK/D24": "11",
  /** Physical pin 12: MOSI/D23; bidirectional. */
  "MOSI/D23": "12",
  /** Physical pin 13: MISO/D22; bidirectional. */
  "MISO/D22": "13",
  /** Physical pin 14: RX/D0; bidirectional. */
  "RX/D0": "14",
  /** Physical pin 15: TX/D1; bidirectional. */
  "TX/D1": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: SDA/D20; bidirectional. */
  "SDA/D20": "17",
  /** Physical pin 18: SCL/D21; bidirectional. */
  "SCL/D21": "18",
  /** Physical pin 19: D5; bidirectional. */
  "D5": "19",
  /** Physical pin 20: D6; bidirectional. */
  "D6": "20",
  /** Physical pin 21: D9; bidirectional. */
  "D9": "21",
  /** Physical pin 22: D10; bidirectional. */
  "D10": "22",
  /** Physical pin 23: D11; bidirectional. */
  "D11": "23",
  /** Physical pin 24: D12; bidirectional. */
  "D12": "24",
  /** Physical pin 25: D13; bidirectional. */
  "D13": "25",
  /** Physical pin 26: USB; power_in. */
  "USB": "26",
  /** Physical pin 27: EN; input. */
  "EN": "27",
  /** Physical pin 28: VBAT; power_in. */
  "VBAT": "28",
}) {
  override schema = "MCU_Module:Adafruit_Feather_M0_Adalogger";
  override referencePrefix = "A";
}

/**
 * Microcontroller module with SAMD21 Cortex-M0 MCU and bluetooth
 *
 * KiCad symbol: `MCU_Module:Adafruit_Feather_M0_BluefruitLE`. Reference prefix: `A`.
 * Footprint filters: Adafruit*Feather*.
 * @see https://cdn-learn.adafruit.com/downloads/pdf/adafruit-feather-m0-bluefruit-le.pdf
 * Keywords: Adafruit feather microcontroller module USB M0 SAMD21 Bluetooth BLE.
 * Default footprint: Module:Adafruit_Feather.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Adafruit_Feather_M0_BluefruitLE extends Component.withPins({
  /** Physical pin 1: ~{RESET}; input. */
  "~{RESET}": "1",
  /** Physical pin 2: 3V3; power_in. */
  "3V3": "2",
  /** Physical pin 3: AREF; input. */
  "AREF": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DAC0/A0; bidirectional. */
  "DAC0/A0": "5",
  /** Physical pin 6: A1; bidirectional. */
  "A1": "6",
  /** Physical pin 7: A2; bidirectional. */
  "A2": "7",
  /** Physical pin 8: A3; bidirectional. */
  "A3": "8",
  /** Physical pin 9: A4; bidirectional. */
  "A4": "9",
  /** Physical pin 10: A5; bidirectional. */
  "A5": "10",
  /** Physical pin 11: SCK/D24; bidirectional. */
  "SCK/D24": "11",
  /** Physical pin 12: MOSI/D23; bidirectional. */
  "MOSI/D23": "12",
  /** Physical pin 13: MISO/D22; bidirectional. */
  "MISO/D22": "13",
  /** Physical pin 14: RX/D0; bidirectional. */
  "RX/D0": "14",
  /** Physical pin 15: TX/D1; bidirectional. */
  "TX/D1": "15",
  /** Physical pin 16: ~{DFU}; input. */
  "~{DFU}": "16",
  /** Physical pin 17: SDA/D20; bidirectional. */
  "SDA/D20": "17",
  /** Physical pin 18: SCL/D21; bidirectional. */
  "SCL/D21": "18",
  /** Physical pin 19: D5; bidirectional. */
  "D5": "19",
  /** Physical pin 20: D6; bidirectional. */
  "D6": "20",
  /** Physical pin 21: D9; bidirectional. */
  "D9": "21",
  /** Physical pin 22: D10; bidirectional. */
  "D10": "22",
  /** Physical pin 23: D11; bidirectional. */
  "D11": "23",
  /** Physical pin 24: D12; bidirectional. */
  "D12": "24",
  /** Physical pin 25: D13; bidirectional. */
  "D13": "25",
  /** Physical pin 26: USB; power_in. */
  "USB": "26",
  /** Physical pin 27: EN; input. */
  "EN": "27",
  /** Physical pin 28: VBAT; power_in. */
  "VBAT": "28",
}) {
  override schema = "MCU_Module:Adafruit_Feather_M0_BluefruitLE";
  override referencePrefix = "A";
}

/**
 * Microcontroller module with SAMD21 Cortex-M0 MCU and SPI Flash
 *
 * KiCad symbol: `MCU_Module:Adafruit_Feather_M0_Express`. Reference prefix: `A`.
 * Footprint filters: Adafruit*Feather*.
 * @see https://cdn-learn.adafruit.com/downloads/pdf/adafruit-feather-m0-express-designed-for-circuit-python-circuitpython.pdf
 * Keywords: Adafruit feather microcontroller module USB SPI Flash CircuitPython.
 * Default footprint: Module:Adafruit_Feather.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Adafruit_Feather_M0_Express extends Component.withPins({
  /** Physical pin 1: ~{RESET}; input. */
  "~{RESET}": "1",
  /** Physical pin 2: 3V3; power_in. */
  "3V3": "2",
  /** Physical pin 3: AREF; input. */
  "AREF": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: DAC0/A0; bidirectional. */
  "DAC0/A0": "5",
  /** Physical pin 6: A1; bidirectional. */
  "A1": "6",
  /** Physical pin 7: A2; bidirectional. */
  "A2": "7",
  /** Physical pin 8: A3; bidirectional. */
  "A3": "8",
  /** Physical pin 9: A4; bidirectional. */
  "A4": "9",
  /** Physical pin 10: A5; bidirectional. */
  "A5": "10",
  /** Physical pin 11: SCK/D24; bidirectional. */
  "SCK/D24": "11",
  /** Physical pin 12: MOSI/D23; bidirectional. */
  "MOSI/D23": "12",
  /** Physical pin 13: MISO/D22; bidirectional. */
  "MISO/D22": "13",
  /** Physical pin 14: RX/D0; bidirectional. */
  "RX/D0": "14",
  /** Physical pin 15: TX/D1; bidirectional. */
  "TX/D1": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: SDA/D20; bidirectional. */
  "SDA/D20": "17",
  /** Physical pin 18: SCL/D21; bidirectional. */
  "SCL/D21": "18",
  /** Physical pin 19: D5; bidirectional. */
  "D5": "19",
  /** Physical pin 20: D6; bidirectional. */
  "D6": "20",
  /** Physical pin 21: D9; bidirectional. */
  "D9": "21",
  /** Physical pin 22: D10; bidirectional. */
  "D10": "22",
  /** Physical pin 23: D11; bidirectional. */
  "D11": "23",
  /** Physical pin 24: D12; bidirectional. */
  "D12": "24",
  /** Physical pin 25: D13; bidirectional. */
  "D13": "25",
  /** Physical pin 26: USB; power_in. */
  "USB": "26",
  /** Physical pin 27: EN; input. */
  "EN": "27",
  /** Physical pin 28: VBAT; power_in. */
  "VBAT": "28",
}) {
  override schema = "MCU_Module:Adafruit_Feather_M0_Express";
  override referencePrefix = "A";
}

/**
 * Microcontroller module with SAMD21 Cortex-M0 MCU and RFM69HCW Radio
 *
 * KiCad symbol: `MCU_Module:Adafruit_Feather_M0_RFM69HCW_Packet_Radio`. Reference prefix: `A`.
 * Footprint filters: Adafruit*Feather*.
 * @see https://cdn-learn.adafruit.com/downloads/pdf/adafruit-feather-m0-radio-with-rfm69-packet-radio.pdf
 * Keywords: Adafruit feather microcontroller module USB M0 SAMD21 Radio.
 * Default footprint: Module:Adafruit_Feather_M0_RFM.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Adafruit_Feather_M0_RFM69HCW_Packet_Radio extends Component.withPins({
  /** Physical pin 1: ~{RESET}; input. */
  "~{RESET}": "1",
  /** Physical pin 2: 3V3; power_in. */
  "3V3": "2",
  /** Physical pin 3: AREF; input. */
  "AREF": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DAC0/A0; bidirectional. */
  "DAC0/A0": "5",
  /** Physical pin 6: A1; bidirectional. */
  "A1": "6",
  /** Physical pin 7: A2; bidirectional. */
  "A2": "7",
  /** Physical pin 8: A3; bidirectional. */
  "A3": "8",
  /** Physical pin 9: A4; bidirectional. */
  "A4": "9",
  /** Physical pin 10: A5; bidirectional. */
  "A5": "10",
  /** Physical pin 11: SCK/D24; bidirectional. */
  "SCK/D24": "11",
  /** Physical pin 12: MOSI/D23; bidirectional. */
  "MOSI/D23": "12",
  /** Physical pin 13: MISO/D22; bidirectional. */
  "MISO/D22": "13",
  /** Physical pin 14: RX/D0; bidirectional. */
  "RX/D0": "14",
  /** Physical pin 15: TX/D1; bidirectional. */
  "TX/D1": "15",
  /** Physical pin 16: DIO1; bidirectional. */
  "DIO1": "16",
  /** Physical pin 17: SDA/D20; bidirectional. */
  "SDA/D20": "17",
  /** Physical pin 18: SCL/D21; bidirectional. */
  "SCL/D21": "18",
  /** Physical pin 19: D5; bidirectional. */
  "D5": "19",
  /** Physical pin 20: D6; bidirectional. */
  "D6": "20",
  /** Physical pin 21: D9; bidirectional. */
  "D9": "21",
  /** Physical pin 22: D10; bidirectional. */
  "D10": "22",
  /** Physical pin 23: D11; bidirectional. */
  "D11": "23",
  /** Physical pin 24: D12; bidirectional. */
  "D12": "24",
  /** Physical pin 25: D13; bidirectional. */
  "D13": "25",
  /** Physical pin 26: USB; power_in. */
  "USB": "26",
  /** Physical pin 27: EN; input. */
  "EN": "27",
  /** Physical pin 28: VBAT; power_in. */
  "VBAT": "28",
  /** Physical pin 29: ANT; bidirectional. */
  "ANT": "29",
  /** Physical pin 30: DIO5; bidirectional. */
  "DIO5": "30",
  /** Physical pin 31: DIO3; bidirectional. */
  "DIO3": "31",
  /** Physical pin 32: DIO2; bidirectional. */
  "DIO2": "32",
}) {
  override schema = "MCU_Module:Adafruit_Feather_M0_RFM69HCW_Packet_Radio";
  override referencePrefix = "A";
}

/**
 * Microcontroller module with SAMD21 Cortex-M0 MCU and RFM9x Radio
 *
 * KiCad symbol: `MCU_Module:Adafruit_Feather_M0_RFM9x_LoRa_Radio`. Reference prefix: `A`.
 * Footprint filters: Adafruit*Feather*.
 * @see https://cdn-learn.adafruit.com/downloads/pdf/adafruit-feather-m0-radio-with-lora-radio-module.pdf
 * Keywords: Adafruit feather microcontroller module USB M0 SAMD21 LoRa Radio.
 * Default footprint: Module:Adafruit_Feather_M0_RFM.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Adafruit_Feather_M0_RFM9x_LoRa_Radio extends Component.withPins({
  /** Physical pin 1: ~{RESET}; input. */
  "~{RESET}": "1",
  /** Physical pin 2: 3V3; power_in. */
  "3V3": "2",
  /** Physical pin 3: AREF; input. */
  "AREF": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DAC0/A0; bidirectional. */
  "DAC0/A0": "5",
  /** Physical pin 6: A1; bidirectional. */
  "A1": "6",
  /** Physical pin 7: A2; bidirectional. */
  "A2": "7",
  /** Physical pin 8: A3; bidirectional. */
  "A3": "8",
  /** Physical pin 9: A4; bidirectional. */
  "A4": "9",
  /** Physical pin 10: A5; bidirectional. */
  "A5": "10",
  /** Physical pin 11: SCK/D24; bidirectional. */
  "SCK/D24": "11",
  /** Physical pin 12: MOSI/D23; bidirectional. */
  "MOSI/D23": "12",
  /** Physical pin 13: MISO/D22; bidirectional. */
  "MISO/D22": "13",
  /** Physical pin 14: RX/D0; bidirectional. */
  "RX/D0": "14",
  /** Physical pin 15: TX/D1; bidirectional. */
  "TX/D1": "15",
  /** Physical pin 16: DIO1; bidirectional. */
  "DIO1": "16",
  /** Physical pin 17: SDA/D20; bidirectional. */
  "SDA/D20": "17",
  /** Physical pin 18: SCL/D21; bidirectional. */
  "SCL/D21": "18",
  /** Physical pin 19: D5; bidirectional. */
  "D5": "19",
  /** Physical pin 20: D6; bidirectional. */
  "D6": "20",
  /** Physical pin 21: D9; bidirectional. */
  "D9": "21",
  /** Physical pin 22: D10; bidirectional. */
  "D10": "22",
  /** Physical pin 23: D11; bidirectional. */
  "D11": "23",
  /** Physical pin 24: D12; bidirectional. */
  "D12": "24",
  /** Physical pin 25: D13; bidirectional. */
  "D13": "25",
  /** Physical pin 26: USB; power_in. */
  "USB": "26",
  /** Physical pin 27: EN; input. */
  "EN": "27",
  /** Physical pin 28: VBAT; power_in. */
  "VBAT": "28",
  /** Physical pin 29: ANT; bidirectional. */
  "ANT": "29",
  /** Physical pin 30: DIO5; bidirectional. */
  "DIO5": "30",
  /** Physical pin 31: DIO3; bidirectional. */
  "DIO3": "31",
  /** Physical pin 32: DIO2; bidirectional. */
  "DIO2": "32",
}) {
  override schema = "MCU_Module:Adafruit_Feather_M0_RFM9x_LoRa_Radio";
  override referencePrefix = "A";
}

/**
 * Microcontroller module with SAMD21 Cortex-M0 MCU and ATWINC1500 Wifi
 *
 * KiCad symbol: `MCU_Module:Adafruit_Feather_M0_Wifi`. Reference prefix: `A`.
 * Footprint filters: Adafruit*Feather*.
 * @see https://cdn-learn.adafruit.com/downloads/pdf/adafruit-feather-m0-wifi-atwinc1500.pdf
 * Keywords: Adafruit feather microcontroller module USB M0 SAMD21 Wifi ATWINC1500.
 * Default footprint: Module:Adafruit_Feather_M0_Wifi.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Adafruit_Feather_M0_Wifi extends Component.withPins({
  /** Physical pin 1: ~{RESET}; input. */
  "~{RESET}": "1",
  /** Physical pin 2: 3V3; power_in. */
  "3V3": "2",
  /** Physical pin 3: AREF; input. */
  "AREF": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: DAC0/A0; bidirectional. */
  "DAC0/A0": "5",
  /** Physical pin 6: A1; bidirectional. */
  "A1": "6",
  /** Physical pin 7: A2; bidirectional. */
  "A2": "7",
  /** Physical pin 8: A3; bidirectional. */
  "A3": "8",
  /** Physical pin 9: A4; bidirectional. */
  "A4": "9",
  /** Physical pin 10: A5; bidirectional. */
  "A5": "10",
  /** Physical pin 11: SCK/D24; bidirectional. */
  "SCK/D24": "11",
  /** Physical pin 12: MOSI/D23; bidirectional. */
  "MOSI/D23": "12",
  /** Physical pin 13: MISO/D22; bidirectional. */
  "MISO/D22": "13",
  /** Physical pin 14: RX/D0; bidirectional. */
  "RX/D0": "14",
  /** Physical pin 15: TX/D1; bidirectional. */
  "TX/D1": "15",
  /** Physical pin 16: WAKE; input. */
  "WAKE": "16",
  /** Physical pin 17: SDA/D20; bidirectional. */
  "SDA/D20": "17",
  /** Physical pin 18: SCL/D21; bidirectional. */
  "SCL/D21": "18",
  /** Physical pin 19: D5; bidirectional. */
  "D5": "19",
  /** Physical pin 20: D6; bidirectional. */
  "D6": "20",
  /** Physical pin 21: D9; bidirectional. */
  "D9": "21",
  /** Physical pin 22: D10; bidirectional. */
  "D10": "22",
  /** Physical pin 23: D11; bidirectional. */
  "D11": "23",
  /** Physical pin 24: D12; bidirectional. */
  "D12": "24",
  /** Physical pin 25: D13; bidirectional. */
  "D13": "25",
  /** Physical pin 26: USB; power_in. */
  "USB": "26",
  /** Physical pin 27: EN; input. */
  "EN": "27",
  /** Physical pin 28: VBAT; power_in. */
  "VBAT": "28",
}) {
  override schema = "MCU_Module:Adafruit_Feather_M0_Wifi";
  override referencePrefix = "A";
}

/**
 * Microcontroller module with STM32F205 Cortex-M3 MCU and BCM43362 Wifi
 *
 * KiCad symbol: `MCU_Module:Adafruit_Feather_WICED_Wifi`. Reference prefix: `A`.
 * Footprint filters: Adafruit*Feather*.
 * @see https://cdn-learn.adafruit.com/downloads/pdf/introducing-the-adafruit-wiced-feather-wifi.pdf
 * Keywords: Adafruit feather microcontroller module USB M3 STM32F205 Wifi.
 * Default footprint: Module:Adafruit_Feather_WICED.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Adafruit_Feather_WICED_Wifi extends Component.withPins({
  /** Physical pin 1: ~{RESET}; input. */
  "~{RESET}": "1",
  /** Physical pin 2: 3V3; power_in. */
  "3V3": "2",
  /** Physical pin 3: VRTC; power_in. */
  "VRTC": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: WAKE/A0; bidirectional. */
  "WAKE/A0": "5",
  /** Physical pin 6: C3; bidirectional. */
  "C3": "6",
  /** Physical pin 7: C2; bidirectional. */
  "C2": "7",
  /** Physical pin 8: A3; bidirectional. */
  "A3": "8",
  /** Physical pin 9: A2; bidirectional. */
  "A2": "9",
  /** Physical pin 10: A1; bidirectional. */
  "A1": "10",
  /** Physical pin 11: SCK/A5; bidirectional. */
  "SCK/A5": "11",
  /** Physical pin 12: MOSI/A7; bidirectional. */
  "MOSI/A7": "12",
  /** Physical pin 13: MISO/A6; bidirectional. */
  "MISO/A6": "13",
  /** Physical pin 14: RX/A10; bidirectional. */
  "RX/A10": "14",
  /** Physical pin 15: TX/A9; bidirectional. */
  "TX/A9": "15",
  /** Physical pin 16: SCK3/DFU; bidirectional. */
  "SCK3/DFU": "16",
  /** Physical pin 17: SDA/B7; bidirectional. */
  "SDA/B7": "17",
  /** Physical pin 18: SCL/B6; bidirectional. */
  "SCL/B6": "18",
  /** Physical pin 19: C5; bidirectional. */
  "C5": "19",
  /** Physical pin 20: C7; bidirectional. */
  "C7": "20",
  /** Physical pin 21: A15; bidirectional. */
  "A15": "21",
  /** Physical pin 22: B4/MISO3; bidirectional. */
  "B4/MISO3": "22",
  /** Physical pin 23: A4/CS; bidirectional. */
  "A4/CS": "23",
  /** Physical pin 24: SWDIO; bidirectional. */
  "SWDIO": "24",
  /** Physical pin 25: B5/MOSI3; bidirectional. */
  "B5/MOSI3": "25",
  /** Physical pin 26: USB; power_in. */
  "USB": "26",
  /** Physical pin 27: EN; input. */
  "EN": "27",
  /** Physical pin 28: VBAT; power_in. */
  "VBAT": "28",
  /** Physical pin 29: SWCLK; bidirectional. */
  "SWCLK": "29",
}) {
  override schema = "MCU_Module:Adafruit_Feather_WICED_Wifi";
  override referencePrefix = "A";
}

/**
 * 32-bit microcontroller module with WiFi
 *
 * KiCad symbol: `MCU_Module:Adafruit_HUZZAH_ESP8266_breakout`. Reference prefix: `A`.
 * Footprint filters: Adafruit*HUZZAH*ESP8266*breakout*, Adafruit*HUZZAH*ESP8266*breakout*WithMountingHoles*.
 * @see https://www.adafruit.com/product/2471
 * Keywords: ESP8266 WiFi microcontroller.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Adafruit_HUZZAH_ESP8266_breakout extends Component.withPins({
  /** Physical pin 16: 0; bidirectional. */
  "0": "16",
  /** Physical pin 15: 2; bidirectional. */
  "2": "15",
  /** Physical pin 17: 4; bidirectional. */
  "4": "17",
  /** Physical pin 18: 5; bidirectional. */
  "5": "18",
  /** Physical pin 6: 12; bidirectional. */
  "12": "6",
  /** Physical pin 7: 13; bidirectional. */
  "13": "7",
  /** Physical pin 5: 14; bidirectional. */
  "14": "5",
  /** Physical pin 14: 15; bidirectional. */
  "15": "14",
  /** Physical pin 4: 16; bidirectional. */
  "16": "4",
  /** Physical pin 1: ~{RST}; input. */
  "~{RST}": "1",
  /** Physical pin 2: A; input. */
  "A": "2",
  /** Physical pin 3: EN; input. */
  "EN": "3",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
  /** Physical pin 9: VBat; power_in. */
  "VBat": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: GND; power_in. */
  "GND_11": "11",
  /** Physical pin 12: LDO; input. */
  "LDO": "12",
  /** Physical pin 13: 3V; power_out. */
  "3V": "13",
  /** Physical pin 19: RX; input. */
  "RX": "19",
  /** Physical pin 20: TX; output. */
  "TX": "20",
}) {
  override schema = "MCU_Module:Adafruit_HUZZAH_ESP8266_breakout";
  override referencePrefix = "A";
}

/**
 * Arduino LEONARDO Microcontroller Module
 *
 * KiCad symbol: `MCU_Module:Arduino_Leonardo`. Reference prefix: `A`.
 * Footprint filters: Arduino*UNO*R3*.
 * @see https://www.arduino.cc/en/Main/ArduinoBoardLeonardo
 * Keywords: Arduino LEONARDO Microcontroller Module Atmel AVR USB.
 * Default footprint: Module:Arduino_UNO_R3.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Arduino_Leonardo extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: IOREF; output. */
  "IOREF": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: 3V3; power_out. */
  "3V3": "4",
  /** Physical pin 5: +5V; power_out. */
  "+5V": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: VIN; power_in. */
  "VIN": "8",
  /** Physical pin 9: A0; bidirectional. */
  "A0": "9",
  /** Physical pin 10: A1; bidirectional. */
  "A1": "10",
  /** Physical pin 11: A2; bidirectional. */
  "A2": "11",
  /** Physical pin 12: A3; bidirectional. */
  "A3": "12",
  /** Physical pin 13: A4; bidirectional. */
  "A4": "13",
  /** Physical pin 14: A5; bidirectional. */
  "A5": "14",
  /** Physical pin 15: D0/RX; bidirectional. */
  "D0/RX": "15",
  /** Physical pin 16: D1/TX; bidirectional. */
  "D1/TX": "16",
  /** Physical pin 17: D2/SDA; bidirectional. */
  "D2/SDA": "17",
  /** Physical pin 18: D3/SCL; bidirectional. */
  "D3/SCL": "18",
  /** Physical pin 19: D4; bidirectional. */
  "D4": "19",
  /** Physical pin 20: D5; bidirectional. */
  "D5": "20",
  /** Physical pin 21: D6; bidirectional. */
  "D6": "21",
  /** Physical pin 22: D7; bidirectional. */
  "D7": "22",
  /** Physical pin 23: D8; bidirectional. */
  "D8": "23",
  /** Physical pin 24: D9; bidirectional. */
  "D9": "24",
  /** Physical pin 25: D10; bidirectional. */
  "D10": "25",
  /** Physical pin 26: D11; bidirectional. */
  "D11": "26",
  /** Physical pin 27: D12; bidirectional. */
  "D12": "27",
  /** Physical pin 28: D13; bidirectional. */
  "D13": "28",
  /** Physical pin 29: GND; power_in. */
  "GND_29": "29",
  /** Physical pin 30: AREF; input. */
  "AREF": "30",
  /** Physical pin 31: SDA/D2; bidirectional. */
  "SDA/D2": "31",
  /** Physical pin 32: SCL/D3; bidirectional. */
  "SCL/D3": "32",
}) {
  override schema = "MCU_Module:Arduino_Leonardo";
  override referencePrefix = "A";
}

/**
 * Arduino Nano board based on the ESP32-S3 with a dual-core 240 MHz processor, 384 kB ROM, 512 kB SRAM. Operates at 3.3V, with 5V USB-C® input and 6-21V VIN. Features Wi-Fi®, Bluetooth® LE, digital and analog pins, and supports SPI, I2C, UART, I2S, and CAN.
 *
 * KiCad symbol: `MCU_Module:Arduino_Nano_ESP32`. Reference prefix: `A`.
 * Footprint filters: Arduino*Nano*.
 * @see https://docs.arduino.cc/resources/datasheets/ABX00083-datasheet.pdf
 * Keywords: Arduino Nano ESP32.
 * Default footprint: Module:Arduino_Nano.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Arduino_Nano_ESP32 extends Component.withPins({
  /** Physical pin 1: D1/TX; bidirectional. */
  "D1/TX": "1",
  /** Physical pin 2: D0/RX; bidirectional. */
  "D0/RX": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: D2; bidirectional. */
  "D2": "5",
  /** Physical pin 6: D3; bidirectional. */
  "D3": "6",
  /** Physical pin 7: D4; bidirectional. */
  "D4": "7",
  /** Physical pin 8: D5; bidirectional. */
  "D5": "8",
  /** Physical pin 9: D6; bidirectional. */
  "D6": "9",
  /** Physical pin 10: D7; bidirectional. */
  "D7": "10",
  /** Physical pin 11: D8; bidirectional. */
  "D8": "11",
  /** Physical pin 12: D9; bidirectional. */
  "D9": "12",
  /** Physical pin 13: D10/CS; bidirectional. */
  "D10/CS": "13",
  /** Physical pin 14: D11/COPI; bidirectional. */
  "D11/COPI": "14",
  /** Physical pin 15: D12/CIPO; bidirectional. */
  "D12/CIPO": "15",
  /** Physical pin 16: D13/SCK; bidirectional. */
  "D13/SCK": "16",
  /** Physical pin 17: 3V3; power_out. */
  "3V3": "17",
  /** Physical pin 18: B0; bidirectional. */
  "B0": "18",
  /** Physical pin 19: A0; bidirectional. */
  "A0": "19",
  /** Physical pin 20: A1; bidirectional. */
  "A1": "20",
  /** Physical pin 21: A2; bidirectional. */
  "A2": "21",
  /** Physical pin 22: A3; bidirectional. */
  "A3": "22",
  /** Physical pin 23: SDA/A4; bidirectional. */
  "SDA/A4": "23",
  /** Physical pin 24: SCL/A5; bidirectional. */
  "SCL/A5": "24",
  /** Physical pin 25: A6; bidirectional. */
  "A6": "25",
  /** Physical pin 26: A7; bidirectional. */
  "A7": "26",
  /** Physical pin 27: VUSB/5V; power_out. */
  "VUSB/5V": "27",
  /** Physical pin 28: B1; bidirectional. */
  "B1": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: VIN; power_in. */
  "VIN": "30",
}) {
  override schema = "MCU_Module:Arduino_Nano_ESP32";
  override referencePrefix = "A";
}

/**
 * Arduino Nano Every
 *
 * KiCad symbol: `MCU_Module:Arduino_Nano_Every`. Reference prefix: `A`.
 * Footprint filters: Arduino*Nano*.
 * @see https://content.arduino.cc/assets/NANOEveryV3.0_sch.pdf
 * Keywords: Arduino nano microcontroller module USB UPDI AATMega4809 AVR.
 * Default footprint: Module:Arduino_Nano.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Arduino_Nano_Every extends Component.withPins({
  /** Physical pin 1: TX1; bidirectional. */
  "TX1": "1",
  /** Physical pin 2: RX1; bidirectional. */
  "RX1": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: D2; bidirectional. */
  "D2": "5",
  /** Physical pin 6: D3; bidirectional. */
  "D3": "6",
  /** Physical pin 7: D4; bidirectional. */
  "D4": "7",
  /** Physical pin 8: D5; bidirectional. */
  "D5": "8",
  /** Physical pin 9: D6; bidirectional. */
  "D6": "9",
  /** Physical pin 10: D7; bidirectional. */
  "D7": "10",
  /** Physical pin 11: D8; bidirectional. */
  "D8": "11",
  /** Physical pin 12: D9; bidirectional. */
  "D9": "12",
  /** Physical pin 13: D10; bidirectional. */
  "D10": "13",
  /** Physical pin 14: MOSI; bidirectional. */
  "MOSI": "14",
  /** Physical pin 15: MISO; bidirectional. */
  "MISO": "15",
  /** Physical pin 16: SCK; bidirectional. */
  "SCK": "16",
  /** Physical pin 17: 3V3; power_out. */
  "3V3": "17",
  /** Physical pin 18: AREF; input. */
  "AREF": "18",
  /** Physical pin 19: A0; bidirectional. */
  "A0": "19",
  /** Physical pin 20: A1; bidirectional. */
  "A1": "20",
  /** Physical pin 21: A2; bidirectional. */
  "A2": "21",
  /** Physical pin 22: A3; bidirectional. */
  "A3": "22",
  /** Physical pin 23: SDA/A4; bidirectional. */
  "SDA/A4": "23",
  /** Physical pin 24: SCL/A5; bidirectional. */
  "SCL/A5": "24",
  /** Physical pin 25: A6; bidirectional. */
  "A6": "25",
  /** Physical pin 26: A7; bidirectional. */
  "A7": "26",
  /** Physical pin 27: +5V; power_out. */
  "+5V": "27",
  /** Physical pin 28: ~{RESET}; input. */
  "~{RESET}_28": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: VIN; power_in. */
  "VIN": "30",
}) {
  override schema = "MCU_Module:Arduino_Nano_Every";
  override referencePrefix = "A";
}

/**
 * Arduino Nano board based on the RP2040 microcontroller with a dual-core 133 MHz ARM Cortex-M0+ processor, 264 kB SRAM, and up to 16 MB flash memory. Operates at 3.3V, with 5V Micro USB input and 4-20V VIN. Features Wi-Fi®, Bluetooth® LE, digital and analog pins, and supports SPI, I2C, UART, and PIO. Includes a 6-axis IMU, RGB LED, microphone, and cryptographic chip for secure communication.
 *
 * KiCad symbol: `MCU_Module:Arduino_Nano_RP2040_Connect`. Reference prefix: `A`.
 * Footprint filters: Arduino*Nano*.
 * @see https://docs.arduino.cc/resources/datasheets/ABX00053-datasheet.pdf
 * Keywords: Raspberry Pi MCU.
 * Default footprint: Module:Arduino_Nano.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Arduino_Nano_RP2040_Connect extends Component.withPins({
  /** Physical pin 1: D1/TX; bidirectional. */
  "D1/TX": "1",
  /** Physical pin 2: D0/RX; bidirectional. */
  "D0/RX": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: D2; bidirectional. */
  "D2": "5",
  /** Physical pin 6: D3; bidirectional. */
  "D3": "6",
  /** Physical pin 7: D4; bidirectional. */
  "D4": "7",
  /** Physical pin 8: D5; bidirectional. */
  "D5": "8",
  /** Physical pin 9: D6; bidirectional. */
  "D6": "9",
  /** Physical pin 10: D7; bidirectional. */
  "D7": "10",
  /** Physical pin 11: D8; bidirectional. */
  "D8": "11",
  /** Physical pin 12: D9; bidirectional. */
  "D9": "12",
  /** Physical pin 13: D10/CS; bidirectional. */
  "D10/CS": "13",
  /** Physical pin 14: D11/COPI; bidirectional. */
  "D11/COPI": "14",
  /** Physical pin 15: D12/CIPO; bidirectional. */
  "D12/CIPO": "15",
  /** Physical pin 16: D13/SCK; bidirectional. */
  "D13/SCK": "16",
  /** Physical pin 17: 3V3; power_out. */
  "3V3": "17",
  /** Physical pin 18: REF; passive. */
  "REF": "18",
  /** Physical pin 19: A0; bidirectional. */
  "A0": "19",
  /** Physical pin 20: A1; bidirectional. */
  "A1": "20",
  /** Physical pin 21: A2; bidirectional. */
  "A2": "21",
  /** Physical pin 22: A3; bidirectional. */
  "A3": "22",
  /** Physical pin 23: SDA/A4; bidirectional. */
  "SDA/A4": "23",
  /** Physical pin 24: SCL/A5; bidirectional. */
  "SCL/A5": "24",
  /** Physical pin 25: A6; bidirectional. */
  "A6": "25",
  /** Physical pin 26: A7; bidirectional. */
  "A7": "26",
  /** Physical pin 27: VUSB/5V; power_out. */
  "VUSB/5V": "27",
  /** Physical pin 28: REC; input. */
  "REC": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: VIN; power_in. */
  "VIN": "30",
}) {
  override schema = "MCU_Module:Arduino_Nano_RP2040_Connect";
  override referencePrefix = "A";
}

/**
 * Arduino Nano v2.x
 *
 * KiCad symbol: `MCU_Module:Arduino_Nano_v2.x`. Reference prefix: `A`.
 * Footprint filters: Arduino*Nano*.
 * @see https://www.arduino.cc/en/uploads/Main/ArduinoNanoManual23.pdf
 * Keywords: Arduino nano microcontroller module USB.
 * Default footprint: Module:Arduino_Nano.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Arduino_Nano_v2_x extends Component.withPins({
  /** Physical pin 1: D1/TX; bidirectional. */
  "D1/TX": "1",
  /** Physical pin 2: D0/RX; bidirectional. */
  "D0/RX": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: D2; bidirectional. */
  "D2": "5",
  /** Physical pin 6: D3; bidirectional. */
  "D3": "6",
  /** Physical pin 7: D4; bidirectional. */
  "D4": "7",
  /** Physical pin 8: D5; bidirectional. */
  "D5": "8",
  /** Physical pin 9: D6; bidirectional. */
  "D6": "9",
  /** Physical pin 10: D7; bidirectional. */
  "D7": "10",
  /** Physical pin 11: D8; bidirectional. */
  "D8": "11",
  /** Physical pin 12: D9; bidirectional. */
  "D9": "12",
  /** Physical pin 13: D10; bidirectional. */
  "D10": "13",
  /** Physical pin 14: D11; bidirectional. */
  "D11": "14",
  /** Physical pin 15: D12; bidirectional. */
  "D12": "15",
  /** Physical pin 16: D13; bidirectional. */
  "D13": "16",
  /** Physical pin 17: 3V3; power_out. */
  "3V3": "17",
  /** Physical pin 18: AREF; input. */
  "AREF": "18",
  /** Physical pin 19: A0; bidirectional. */
  "A0": "19",
  /** Physical pin 20: A1; bidirectional. */
  "A1": "20",
  /** Physical pin 21: A2; bidirectional. */
  "A2": "21",
  /** Physical pin 22: A3; bidirectional. */
  "A3": "22",
  /** Physical pin 23: A4; bidirectional. */
  "A4": "23",
  /** Physical pin 24: A5; bidirectional. */
  "A5": "24",
  /** Physical pin 25: A6; bidirectional. */
  "A6": "25",
  /** Physical pin 26: A7; bidirectional. */
  "A7": "26",
  /** Physical pin 27: +5V; power_out. */
  "+5V": "27",
  /** Physical pin 28: ~{RESET}; input. */
  "~{RESET}_28": "28",
  /** Physical pin 29: GND; power_in. */
  "GND_29": "29",
  /** Physical pin 30: VIN; power_in. */
  "VIN": "30",
}) {
  override schema = "MCU_Module:Arduino_Nano_v2.x";
  override referencePrefix = "A";
}

/**
 * Arduino Nano v3.x
 *
 * KiCad symbol: `MCU_Module:Arduino_Nano_v3.x`. Reference prefix: `A`.
 * Footprint filters: Arduino*Nano*.
 * @see http://www.mouser.com/pdfdocs/Gravitech_Arduino_Nano3_0.pdf
 * Keywords: Arduino nano microcontroller module USB.
 * Default footprint: Module:Arduino_Nano.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Arduino_Nano_v3_x extends Component.withPins({
  /** Physical pin 1: D1/TX; bidirectional. */
  "D1/TX": "1",
  /** Physical pin 2: D0/RX; bidirectional. */
  "D0/RX": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: D2; bidirectional. */
  "D2": "5",
  /** Physical pin 6: D3; bidirectional. */
  "D3": "6",
  /** Physical pin 7: D4; bidirectional. */
  "D4": "7",
  /** Physical pin 8: D5; bidirectional. */
  "D5": "8",
  /** Physical pin 9: D6; bidirectional. */
  "D6": "9",
  /** Physical pin 10: D7; bidirectional. */
  "D7": "10",
  /** Physical pin 11: D8; bidirectional. */
  "D8": "11",
  /** Physical pin 12: D9; bidirectional. */
  "D9": "12",
  /** Physical pin 13: D10; bidirectional. */
  "D10": "13",
  /** Physical pin 14: D11; bidirectional. */
  "D11": "14",
  /** Physical pin 15: D12; bidirectional. */
  "D12": "15",
  /** Physical pin 16: D13; bidirectional. */
  "D13": "16",
  /** Physical pin 17: 3V3; power_out. */
  "3V3": "17",
  /** Physical pin 18: AREF; input. */
  "AREF": "18",
  /** Physical pin 19: A0; bidirectional. */
  "A0": "19",
  /** Physical pin 20: A1; bidirectional. */
  "A1": "20",
  /** Physical pin 21: A2; bidirectional. */
  "A2": "21",
  /** Physical pin 22: A3; bidirectional. */
  "A3": "22",
  /** Physical pin 23: A4; bidirectional. */
  "A4": "23",
  /** Physical pin 24: A5; bidirectional. */
  "A5": "24",
  /** Physical pin 25: A6; bidirectional. */
  "A6": "25",
  /** Physical pin 26: A7; bidirectional. */
  "A7": "26",
  /** Physical pin 27: +5V; power_out. */
  "+5V": "27",
  /** Physical pin 28: ~{RESET}; input. */
  "~{RESET}_28": "28",
  /** Physical pin 29: GND; power_in. */
  "GND_29": "29",
  /** Physical pin 30: VIN; power_in. */
  "VIN": "30",
}) {
  override schema = "MCU_Module:Arduino_Nano_v3.x";
  override referencePrefix = "A";
}

/**
 * Arduino UNO Microcontroller Module, release 2
 *
 * KiCad symbol: `MCU_Module:Arduino_UNO_R2`. Reference prefix: `A`.
 * Footprint filters: Arduino*UNO*R2*.
 * @see https://www.arduino.cc/en/Main/arduinoBoardUno
 * Keywords: Arduino UNO R3 Microcontroller Module Atmel AVR USB.
 * Default footprint: Module:Arduino_UNO_R2.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Arduino_UNO_R2 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: IOREF; output. */
  "IOREF": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: 3V3; power_out. */
  "3V3": "4",
  /** Physical pin 5: +5V; power_out. */
  "+5V": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: VIN; power_in. */
  "VIN": "8",
  /** Physical pin 9: A0; bidirectional. */
  "A0": "9",
  /** Physical pin 10: A1; bidirectional. */
  "A1": "10",
  /** Physical pin 11: A2; bidirectional. */
  "A2": "11",
  /** Physical pin 12: A3; bidirectional. */
  "A3": "12",
  /** Physical pin 13: SDA/A4; bidirectional. */
  "SDA/A4": "13",
  /** Physical pin 14: SCL/A5; bidirectional. */
  "SCL/A5": "14",
  /** Physical pin 15: D0/RX; bidirectional. */
  "D0/RX": "15",
  /** Physical pin 16: D1/TX; bidirectional. */
  "D1/TX": "16",
  /** Physical pin 17: D2; bidirectional. */
  "D2": "17",
  /** Physical pin 18: D3; bidirectional. */
  "D3": "18",
  /** Physical pin 19: D4; bidirectional. */
  "D4": "19",
  /** Physical pin 20: D5; bidirectional. */
  "D5": "20",
  /** Physical pin 21: D6; bidirectional. */
  "D6": "21",
  /** Physical pin 22: D7; bidirectional. */
  "D7": "22",
  /** Physical pin 23: D8; bidirectional. */
  "D8": "23",
  /** Physical pin 24: D9; bidirectional. */
  "D9": "24",
  /** Physical pin 25: D10; bidirectional. */
  "D10": "25",
  /** Physical pin 26: D11; bidirectional. */
  "D11": "26",
  /** Physical pin 27: D12; bidirectional. */
  "D12": "27",
  /** Physical pin 28: D13; bidirectional. */
  "D13": "28",
  /** Physical pin 29: GND; power_in. */
  "GND_29": "29",
  /** Physical pin 30: AREF; input. */
  "AREF": "30",
}) {
  override schema = "MCU_Module:Arduino_UNO_R2";
  override referencePrefix = "A";
}

/**
 * Arduino UNO Microcontroller Module, release 3
 *
 * KiCad symbol: `MCU_Module:Arduino_UNO_R3`. Reference prefix: `A`.
 * Footprint filters: Arduino*UNO*R3*.
 * @see https://www.arduino.cc/en/Main/arduinoBoardUno
 * Keywords: Arduino UNO R3 Microcontroller Module Atmel AVR USB.
 * Default footprint: Module:Arduino_UNO_R3.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Arduino_UNO_R3 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: IOREF; output. */
  "IOREF": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: 3V3; power_out. */
  "3V3": "4",
  /** Physical pin 5: +5V; power_out. */
  "+5V": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: VIN; power_in. */
  "VIN": "8",
  /** Physical pin 9: A0; bidirectional. */
  "A0": "9",
  /** Physical pin 10: A1; bidirectional. */
  "A1": "10",
  /** Physical pin 11: A2; bidirectional. */
  "A2": "11",
  /** Physical pin 12: A3; bidirectional. */
  "A3": "12",
  /** Physical pin 13: SDA/A4; bidirectional. */
  "SDA/A4_13": "13",
  /** Physical pin 14: SCL/A5; bidirectional. */
  "SCL/A5_14": "14",
  /** Physical pin 15: D0/RX; bidirectional. */
  "D0/RX": "15",
  /** Physical pin 16: D1/TX; bidirectional. */
  "D1/TX": "16",
  /** Physical pin 17: D2; bidirectional. */
  "D2": "17",
  /** Physical pin 18: D3; bidirectional. */
  "D3": "18",
  /** Physical pin 19: D4; bidirectional. */
  "D4": "19",
  /** Physical pin 20: D5; bidirectional. */
  "D5": "20",
  /** Physical pin 21: D6; bidirectional. */
  "D6": "21",
  /** Physical pin 22: D7; bidirectional. */
  "D7": "22",
  /** Physical pin 23: D8; bidirectional. */
  "D8": "23",
  /** Physical pin 24: D9; bidirectional. */
  "D9": "24",
  /** Physical pin 25: D10; bidirectional. */
  "D10": "25",
  /** Physical pin 26: D11; bidirectional. */
  "D11": "26",
  /** Physical pin 27: D12; bidirectional. */
  "D12": "27",
  /** Physical pin 28: D13; bidirectional. */
  "D13": "28",
  /** Physical pin 29: GND; power_in. */
  "GND_29": "29",
  /** Physical pin 30: AREF; input. */
  "AREF": "30",
  /** Physical pin 31: SDA/A4; bidirectional. */
  "SDA/A4_31": "31",
  /** Physical pin 32: SCL/A5; bidirectional. */
  "SCL/A5_32": "32",
}) {
  override schema = "MCU_Module:Arduino_UNO_R3";
  override referencePrefix = "A";
}

/**
 * NextThingCo C.H.I.P. Module
 *
 * KiCad symbol: `MCU_Module:CHIP`. Reference prefix: `U`.
 * Footprint filters: MODULE*NEXTTHINGCO*CHIP*.
 * @see https://github.com/NextThingCo/CHIP-Hardware/tree/master/CHIP%5Bv1_0%5D
 * Keywords: nextthingco chip module.
 * Default footprint: Module:MODULE_NEXTTHINGCO_CHIP.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CHIP extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: CHG-IN; power_in. */
  "CHG-IN": "2",
  /** Physical pin 3: +5V; power_out. */
  "+5V_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: +3.3V; power_out. */
  "+3.3V_5": "5",
  /** Physical pin 6: TS; input. */
  "TS": "6",
  /** Physical pin 7: +1.8V; power_out. */
  "+1.8V": "7",
  /** Physical pin 8: BAT; power_in. */
  "BAT": "8",
  /** Physical pin 9: PB16/TWI1-SDA; bidirectional. */
  "PB16/TWI1-SDA": "9",
  /** Physical pin 10: ~{POWER-ON}; input. */
  "~{POWER-ON}": "10",
  /** Physical pin 11: PB15/TWI1-SCK; bidirectional. */
  "PB15/TWI1-SCK": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: X1; input. */
  "X1": "13",
  /** Physical pin 14: X2; input. */
  "X2": "14",
  /** Physical pin 15: Y1; input. */
  "Y1": "15",
  /** Physical pin 16: Y2; input. */
  "Y2": "16",
  /** Physical pin 17: PD2/LCD-D2; bidirectional. */
  "PD2/LCD-D2": "17",
  /** Physical pin 18: PB2/PWM0; bidirectional. */
  "PB2/PWM0": "18",
  /** Physical pin 19: PD4/LCD-D4; bidirectional. */
  "PD4/LCD-D4": "19",
  /** Physical pin 20: PD3/LCD-D3; bidirectional. */
  "PD3/LCD-D3": "20",
  /** Physical pin 21: PD6/LCD-D6; bidirectional. */
  "PD6/LCD-D6": "21",
  /** Physical pin 22: PD5/LCD-D5; bidirectional. */
  "PD5/LCD-D5": "22",
  /** Physical pin 23: PD10/LCD-D10; bidirectional. */
  "PD10/LCD-D10": "23",
  /** Physical pin 24: PD7/LCD-D7; bidirectional. */
  "PD7/LCD-D7": "24",
  /** Physical pin 25: PD12/LCD-D12; bidirectional. */
  "PD12/LCD-D12": "25",
  /** Physical pin 26: PD11/LCD-D11; bidirectional. */
  "PD11/LCD-D11": "26",
  /** Physical pin 27: PD14/LCD-D14; bidirectional. */
  "PD14/LCD-D14": "27",
  /** Physical pin 28: PD13/LCD-D13; bidirectional. */
  "PD13/LCD-D13": "28",
  /** Physical pin 29: PD18/LCD-D18; bidirectional. */
  "PD18/LCD-D18": "29",
  /** Physical pin 30: PD15/LCD-D15; bidirectional. */
  "PD15/LCD-D15": "30",
  /** Physical pin 31: PD20/LCD-D20; bidirectional. */
  "PD20/LCD-D20": "31",
  /** Physical pin 32: PD19/LCD-D19; bidirectional. */
  "PD19/LCD-D19": "32",
  /** Physical pin 33: PD22/LCD-D22; bidirectional. */
  "PD22/LCD-D22": "33",
  /** Physical pin 34: PD21/LCD-D21; bidirectional. */
  "PD21/LCD-D21": "34",
  /** Physical pin 35: PD24/LCD-CLK; bidirectional. */
  "PD24/LCD-CLK": "35",
  /** Physical pin 36: PD23/LCD-D23; bidirectional. */
  "PD23/LCD-D23": "36",
  /** Physical pin 37: PD27/LCD-VSYNC; bidirectional. */
  "PD27/LCD-VSYNC": "37",
  /** Physical pin 38: PD26/LCD-HSYNC; bidirectional. */
  "PD26/LCD-HSYNC": "38",
  /** Physical pin 39: GND; power_in. */
  "GND_39": "39",
  /** Physical pin 40: PD25/LCD-DE; bidirectional. */
  "PD25/LCD-DE": "40",
  /** Physical pin 41: GND; power_in. */
  "GND_41": "41",
  /** Physical pin 42: +5V; power_out. */
  "+5V_42": "42",
  /** Physical pin 43: PG3/UART1-TX; bidirectional. */
  "PG3/UART1-TX": "43",
  /** Physical pin 44: HPL; output. */
  "HPL": "44",
  /** Physical pin 45: PG4/UART1-RX; input. */
  "PG4/UART1-RX": "45",
  /** Physical pin 46: HPCOM; output. */
  "HPCOM": "46",
  /** Physical pin 47: ~{FEL}; input. */
  "~{FEL}": "47",
  /** Physical pin 48: HPR; output. */
  "HPR": "48",
  /** Physical pin 49: +3.3V; power_out. */
  "+3.3V_49": "49",
  /** Physical pin 50: MICM; power_out. */
  "MICM": "50",
  /** Physical pin 51: LRADC; power_out. */
  "LRADC": "51",
  /** Physical pin 52: MICIN1; input. */
  "MICIN1": "52",
  /** Physical pin 53: XIO-P0; bidirectional. */
  "XIO-P0": "53",
  /** Physical pin 54: XIO-P1; bidirectional. */
  "XIO-P1": "54",
  /** Physical pin 55: XIO-P2; bidirectional. */
  "XIO-P2": "55",
  /** Physical pin 56: XIO-P3; bidirectional. */
  "XIO-P3": "56",
  /** Physical pin 57: XIO-P4; bidirectional. */
  "XIO-P4": "57",
  /** Physical pin 58: XIO-P5; bidirectional. */
  "XIO-P5": "58",
  /** Physical pin 59: XIO-P6; bidirectional. */
  "XIO-P6": "59",
  /** Physical pin 60: XIO-P7; bidirectional. */
  "XIO-P7": "60",
  /** Physical pin 61: GND; power_in. */
  "GND_61": "61",
  /** Physical pin 62: GND; power_in. */
  "GND_62": "62",
  /** Physical pin 63: PG1/AP-EINT1; bidirectional. */
  "PG1/AP-EINT1": "63",
  /** Physical pin 64: PB3/AP-EINT3; bidirectional. */
  "PB3/AP-EINT3": "64",
  /** Physical pin 65: PB18/TWI2-SDA; bidirectional. */
  "PB18/TWI2-SDA": "65",
  /** Physical pin 66: PB17/TWI2-SCK; bidirectional. */
  "PB17/TWI2-SCK": "66",
  /** Physical pin 67: PE0/CSI-PCLK/SPI2-CS0; bidirectional. */
  "PE0/CSI-PCLK/SPI2-CS0": "67",
  /** Physical pin 68: PE1/CSI-MCLK/SPI2-CLK; bidirectional. */
  "PE1/CSI-MCLK/SPI2-CLK": "68",
  /** Physical pin 69: PE2/CSI-HSYNC/SPI2-MOSI; bidirectional. */
  "PE2/CSI-HSYNC/SPI2-MOSI": "69",
  /** Physical pin 70: PE3/CSI-VSYNC/SPI2-MISO; bidirectional. */
  "PE3/CSI-VSYNC/SPI2-MISO": "70",
  /** Physical pin 71: PE4/CSI-D0; bidirectional. */
  "PE4/CSI-D0": "71",
  /** Physical pin 72: PE5/CSI-D1; bidirectional. */
  "PE5/CSI-D1": "72",
  /** Physical pin 73: PE6/CSI-D2; bidirectional. */
  "PE6/CSI-D2": "73",
  /** Physical pin 74: PE7/CSI-D3; bidirectional. */
  "PE7/CSI-D3": "74",
  /** Physical pin 75: PE8/CSI-D4; bidirectional. */
  "PE8/CSI-D4": "75",
  /** Physical pin 76: PE9/CSI-D5; bidirectional. */
  "PE9/CSI-D5": "76",
  /** Physical pin 77: PE10/CSI-D6; bidirectional. */
  "PE10/CSI-D6": "77",
  /** Physical pin 78: PE11/CSI-D7; bidirectional. */
  "PE11/CSI-D7": "78",
  /** Physical pin 79: GND; power_in. */
  "GND_79": "79",
  /** Physical pin 80: GND; power_in. */
  "GND_80": "80",
}) {
  override schema = "MCU_Module:CHIP";
  override referencePrefix = "U";
}

/**
 * NextThingCo C.H.I.P. Pro Module
 *
 * KiCad symbol: `MCU_Module:CHIP-PRO`. Reference prefix: `U`.
 * Footprint filters: MODULE*NEXTTHINGCO*CHIPPRO*.
 * @see https://github.com/NextThingCo/CHIP_Pro-Hardware/blob/master/Datasheets/CHIP_PRO_Datasheet_v1.0.pdf
 * Keywords: nextthingco chip pro module.
 * Default footprint: Module:MODULE_NEXTTHINGCO_CHIPPRO.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CHIP_PRO extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: +3.3V; power_out. */
  "+3.3V": "2",
  /** Physical pin 3: IPSOUT; power_out. */
  "IPSOUT": "3",
  /** Physical pin 4: CHG-IN; power_in. */
  "CHG-IN": "4",
  /** Physical pin 5: ~{POWER-ON}; input. */
  "~{POWER-ON}": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: TS; input. */
  "TS": "7",
  /** Physical pin 8: BAT; power_in. */
  "BAT": "8",
  /** Physical pin 9: PB2/SPDIF-DO/PWM0; bidirectional. */
  "PB2/SPDIF-DO/PWM0": "9",
  /** Physical pin 10: PG13/EINT13/PWM1; bidirectional. */
  "PG13/EINT13/PWM1": "10",
  /** Physical pin 11: PB16/TWI1-SDA; bidirectional. */
  "PB16/TWI1-SDA": "11",
  /** Physical pin 12: PB15/TWI1-SCK; bidirectional. */
  "PB15/TWI1-SCK": "12",
  /** Physical pin 13: PD2/UART2-TX; bidirectional. */
  "PD2/UART2-TX": "13",
  /** Physical pin 14: PD3/UART2-RX; bidirectional. */
  "PD3/UART2-RX": "14",
  /** Physical pin 15: PD4/UART2-CTS; bidirectional. */
  "PD4/UART2-CTS": "15",
  /** Physical pin 16: PD5/UART2-RTS; bidirectional. */
  "PD5/UART2-RTS": "16",
  /** Physical pin 17: GND; power_in. */
  "GND_17": "17",
  /** Physical pin 18: HPL; output. */
  "HPL": "18",
  /** Physical pin 19: HPCOM; output. */
  "HPCOM": "19",
  /** Physical pin 20: HPR; output. */
  "HPR": "20",
  /** Physical pin 21: PB5/I2S-MCLK; bidirectional. */
  "PB5/I2S-MCLK": "21",
  /** Physical pin 22: PB6/I2S-BCLK; bidirectional. */
  "PB6/I2S-BCLK": "22",
  /** Physical pin 23: PB7/I2S-LCLK; bidirectional. */
  "PB7/I2S-LCLK": "23",
  /** Physical pin 24: PB8/I2S-DO; bidirectional. */
  "PB8/I2S-DO": "24",
  /** Physical pin 25: PB9/I2S-DI; bidirectional. */
  "PB9/I2S-DI": "25",
  /** Physical pin 26: AGND; power_in. */
  "AGND": "26",
  /** Physical pin 27: MICIN1; input. */
  "MICIN1": "27",
  /** Physical pin 28: MICIN2; input. */
  "MICIN2": "28",
  /** Physical pin 29: VMIC; unspecified. */
  "VMIC": "29",
  /** Physical pin 30: PE11/CSI-D7; bidirectional. */
  "PE11/CSI-D7": "30",
  /** Physical pin 31: PE10/CSI-D6; bidirectional. */
  "PE10/CSI-D6": "31",
  /** Physical pin 32: PE9/CSI-D5; bidirectional. */
  "PE9/CSI-D5": "32",
  /** Physical pin 33: PE8/CSI-D4; bidirectional. */
  "PE8/CSI-D4": "33",
  /** Physical pin 34: PE7/CSI-D3; bidirectional. */
  "PE7/CSI-D3": "34",
  /** Physical pin 35: PE6/CSI-D2; bidirectional. */
  "PE6/CSI-D2": "35",
  /** Physical pin 36: PE5/CSI-D1; bidirectional. */
  "PE5/CSI-D1": "36",
  /** Physical pin 37: PE4/CSI-D0; bidirectional. */
  "PE4/CSI-D0": "37",
  /** Physical pin 38: PE3/CSI-VSYNC/SPI2-MISO; bidirectional. */
  "PE3/CSI-VSYNC/SPI2-MISO": "38",
  /** Physical pin 39: PE2/CSI-HSYNC/SPI2-MOSI; bidirectional. */
  "PE2/CSI-HSYNC/SPI2-MOSI": "39",
  /** Physical pin 40: PE1/CSI-MCLK/SPI2-CLK; bidirectional. */
  "PE1/CSI-MCLK/SPI2-CLK": "40",
  /** Physical pin 41: PE0/CSI-PCLK/SPI2-CS0; bidirectional. */
  "PE0/CSI-PCLK/SPI2-CS0": "41",
  /** Physical pin 42: LRADC0; power_out. */
  "LRADC0": "42",
  /** Physical pin 43: PG4/UART1-RX; input. */
  "PG4/UART1-RX": "43",
  /** Physical pin 44: PG3/UART1-TX; bidirectional. */
  "PG3/UART1-TX": "44",
  /** Physical pin 45: GND; power_in. */
  "GND_45": "45",
  /** Physical pin 46: GND; power_in. */
  "GND_46": "46",
  /** Physical pin 47: USB1-D+; bidirectional. */
  "USB1-D+": "47",
  /** Physical pin 48: USB1-D-; bidirectional. */
  "USB1-D-": "48",
  /** Physical pin 49: GND; power_in. */
  "GND_49": "49",
  /** Physical pin 50: VBUS; power_in. */
  "VBUS": "50",
  /** Physical pin 51: USB0-D+; bidirectional. */
  "USB0-D+": "51",
  /** Physical pin 52: USB0-D-; bidirectional. */
  "USB0-D-": "52",
  /** Physical pin 53: GND; power_in. */
  "GND_53": "53",
}) {
  override schema = "MCU_Module:CHIP-PRO";
  override referencePrefix = "U";
}

/**
 * Qualcomm AR9331, 16MB Flash, 64MB RAM, USB, Serial, Ethernet, GPIO, OpenWRT, industrial SoM computer
 *
 * KiCad symbol: `MCU_Module:Carambola2`. Reference prefix: `U`.
 * Footprint filters: Carambola2*.
 * @see https://www.8devices.com/media/products/carambola2/downloads/carambola2-datasheet.pdf
 * Keywords: carambola, 8devices, openwrt, board, wlan.
 * Default footprint: Module:Carambola2.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Carambola2 extends Component.withPins({
  /** Physical pin 1: SPDIF_OUT/GPIO_23; bidirectional. */
  "SPDIF_OUT/GPIO_23": "1",
  /** Physical pin 2: I2S_MICIN/SLIC_DATA_IN/GPIO_22; bidirectional. */
  "I2S_MICIN/SLIC_DATA_IN/GPIO_22": "2",
  /** Physical pin 3: I2S_MCK/SLIC_DATA_OUT/GPIO_21; bidirectional. */
  "I2S_MCK/SLIC_DATA_OUT/GPIO_21": "3",
  /** Physical pin 4: I2S_WS/SLIC_FS_IN/GPIO_20; bidirectional. */
  "I2S_WS/SLIC_FS_IN/GPIO_20": "4",
  /** Physical pin 5: I2S_WS/SLIC_FS_OUT/GPIO_19; bidirectional. */
  "I2S_WS/SLIC_FS_OUT/GPIO_19": "5",
  /** Physical pin 6: I2S_CK/SLIK_CLK/GPIO_18; bidirectional. */
  "I2S_CK/SLIK_CLK/GPIO_18": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: ETH1_RXP; input. */
  "ETH1_RXP": "8",
  /** Physical pin 9: ETH1_RXM; input. */
  "ETH1_RXM": "9",
  /** Physical pin 10: ETH1_TXP; output. */
  "ETH1_TXP": "10",
  /** Physical pin 11: ETH1_TXM; output. */
  "ETH1_TXM": "11",
  /** Physical pin 12: ETH0_RXP; input. */
  "ETH0_RXP": "12",
  /** Physical pin 13: ETH0_RXM; input. */
  "ETH0_RXM": "13",
  /** Physical pin 14: ETH0_TXP; output. */
  "ETH0_TXP": "14",
  /** Physical pin 15: ETH0_TXM; output. */
  "ETH0_TXM": "15",
  /** Physical pin 16: SPI_MOSI/GPIO_4; bidirectional. */
  "SPI_MOSI/GPIO_4": "16",
  /** Physical pin 17: SPI_CLK/GPIO_3; bidirectional. */
  "SPI_CLK/GPIO_3": "17",
  /** Physical pin 18: SPI_MISO/GPIO_5; bidirectional. */
  "SPI_MISO/GPIO_5": "18",
  /** Physical pin 19: SPI_CS0/GPIO_2; bidirectional. */
  "SPI_CS0/GPIO_2": "19",
  /** Physical pin 20: USB_D+; bidirectional. */
  "USB_D+": "20",
  /** Physical pin 21: USB_D-; bidirectional. */
  "USB_D-": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
  /** Physical pin 23: GPIO_11/UART_RTS/I2S_MCK/JS/~{SOFT_RESET}; output. */
  "GPIO_11/UART_RTS/I2S_MCK/JS/~{SOFT_RESET}": "23",
  /** Physical pin 24: GPIO_12/UART_CTS/I2S_MCIN; input. */
  "GPIO_12/UART_CTS/I2S_MCIN": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
  /** Physical pin 26: ANTENNA; passive. */
  "ANTENNA": "26",
  /** Physical pin 27: GND; passive. */
  "GND_27": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: ~{RESET}; input. */
  "~{RESET}": "33",
  /** Physical pin 34: GND; passive. */
  "GND_34": "34",
  /** Physical pin 35: LED6/GPIO_17; bidirectional. */
  "LED6/GPIO_17": "35",
  /** Physical pin 36: LED5/GPIO_16; bidirectional. */
  "LED5/GPIO_16": "36",
  /** Physical pin 37: LED4/GPIO_15; bidirectional. */
  "LED4/GPIO_15": "37",
  /** Physical pin 38: LED3/ETH0_LED/GPIO_14; bidirectional. */
  "LED3/ETH0_LED/GPIO_14": "38",
  /** Physical pin 39: LED2/ETH1_LED/GPIO_13; bidirectional. */
  "LED2/ETH1_LED/GPIO_13": "39",
  /** Physical pin 40: LED1/GPIO_1; bidirectional. */
  "LED1/GPIO_1": "40",
  /** Physical pin 41: LED0/WLAN_LED/GPIO_0; bidirectional. */
  "LED0/WLAN_LED/GPIO_0": "41",
  /** Physical pin 42: GND; passive. */
  "GND_42": "42",
  /** Physical pin 43: GPIO_9/UART_RX/SPI_CS_1; bidirectional. */
  "GPIO_9/UART_RX/SPI_CS_1": "43",
  /** Physical pin 44: GPIO_10/UART_TX/SPI_CS_2; bidirectional. */
  "GPIO_10/UART_TX/SPI_CS_2": "44",
  /** Physical pin 45: GND; passive. */
  "GND_45": "45",
  /** Physical pin 46: GND; passive. */
  "GND_46": "46",
  /** Physical pin 47: GND; passive. */
  "GND_47": "47",
  /** Physical pin 48: GND; passive. */
  "GND_48": "48",
  /** Physical pin 49: GND; passive. */
  "GND_49": "49",
  /** Physical pin 50: +3VD; power_in. */
  "+3VD_50": "50",
  /** Physical pin 51: +3VD; power_in. */
  "+3VD_51": "51",
  /** Physical pin 52: +2VD; power_out. */
  "+2VD": "52",
}) {
  override schema = "MCU_Module:Carambola2";
  override referencePrefix = "U";
}

/**
 * Daisy is an embedded platform for music.
 *
 * KiCad symbol: `MCU_Module:Electrosmith_Daisy_Seed_Rev4`. Reference prefix: `A`.
 * Footprint filters: Electrosmith*Daisy*Seed*.
 * @see https://static1.squarespace.com/static/58d03fdc1b10e3bf442567b8/t/6227e6236f02fb68d1577146/1646781988478/Daisy_Seed_datasheet_v1.0.3.pdf
 * Keywords: Electrosmith Daisy Seed Microcontroller Module ARM Cortex-M7.
 * Default footprint: Module:Electrosmith_Daisy_Seed.
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Electrosmith_Daisy_Seed_Rev4 extends Component.withPins({
  /** Physical pin 1: USB_ID; bidirectional. */
  "USB_ID": "1",
  /** Physical pin 2: SD_DATA_3; bidirectional. */
  "SD_DATA_3": "2",
  /** Physical pin 3: SD_DATA_2; bidirectional. */
  "SD_DATA_2": "3",
  /** Physical pin 4: SD_DATA_1; bidirectional. */
  "SD_DATA_1": "4",
  /** Physical pin 5: SD_DATA_0; bidirectional. */
  "SD_DATA_0": "5",
  /** Physical pin 6: SD_CMD; bidirectional. */
  "SD_CMD": "6",
  /** Physical pin 7: SD_CLK; bidirectional. */
  "SD_CLK": "7",
  /** Physical pin 8: SPI1_CS; bidirectional. */
  "SPI1_CS": "8",
  /** Physical pin 9: SPI1_SCK; bidirectional. */
  "SPI1_SCK": "9",
  /** Physical pin 10: SPI1_POCI; bidirectional. */
  "SPI1_POCI": "10",
  /** Physical pin 11: SPI1_PICO; bidirectional. */
  "SPI1_PICO": "11",
  /** Physical pin 12: I2C1_SCL; bidirectional. */
  "I2C1_SCL": "12",
  /** Physical pin 13: I2C1_SDA; bidirectional. */
  "I2C1_SDA": "13",
  /** Physical pin 14: USART1_TX; bidirectional. */
  "USART1_TX": "14",
  /** Physical pin 15: USART1_RX; bidirectional. */
  "USART1_RX": "15",
  /** Physical pin 16: AUDIO_IN_1; input. */
  "AUDIO_IN_1": "16",
  /** Physical pin 17: AUDIO_IN_2; input. */
  "AUDIO_IN_2": "17",
  /** Physical pin 18: AUDIO_OUT_1; output. */
  "AUDIO_OUT_1": "18",
  /** Physical pin 19: AUDIO_OUT_2; output. */
  "AUDIO_OUT_2": "19",
  /** Physical pin 20: AGND; power_in. */
  "AGND": "20",
  /** Physical pin 21: 3V3_A; power_out. */
  "3V3_A": "21",
  /** Physical pin 22: ADC_0; bidirectional. */
  "ADC_0": "22",
  /** Physical pin 23: ADC_1; bidirectional. */
  "ADC_1": "23",
  /** Physical pin 24: ADC_2; bidirectional. */
  "ADC_2": "24",
  /** Physical pin 25: ADC_3; bidirectional. */
  "ADC_3": "25",
  /** Physical pin 26: ADC_4; bidirectional. */
  "ADC_4": "26",
  /** Physical pin 27: ADC_5; bidirectional. */
  "ADC_5": "27",
  /** Physical pin 28: ADC_6; bidirectional. */
  "ADC_6": "28",
  /** Physical pin 29: DAC_OUT2; bidirectional. */
  "DAC_OUT2": "29",
  /** Physical pin 30: DAC_OUT1; bidirectional. */
  "DAC_OUT1": "30",
  /** Physical pin 31: SAI2_MCLK; bidirectional. */
  "SAI2_MCLK": "31",
  /** Physical pin 32: SAI2_SD_B; bidirectional. */
  "SAI2_SD_B": "32",
  /** Physical pin 33: SAI2_SD_A; bidirectional. */
  "SAI2_SD_A": "33",
  /** Physical pin 34: SAI2_FS; bidirectional. */
  "SAI2_FS": "34",
  /** Physical pin 35: SAI2_SCK; bidirectional. */
  "SAI2_SCK": "35",
  /** Physical pin 36: USB_D_-; bidirectional. */
  "USB_D_-": "36",
  /** Physical pin 37: USB_D_+; bidirectional. */
  "USB_D_+": "37",
  /** Physical pin 38: 3V3_D; power_out. */
  "3V3_D": "38",
  /** Physical pin 39: VIN; power_in. */
  "VIN": "39",
  /** Physical pin 40: DGND; power_in. */
  "DGND": "40",
}) {
  override schema = "MCU_Module:Electrosmith_Daisy_Seed_Rev4";
  override referencePrefix = "A";
}

/**
 * Portable multi-tool for pentesters and geeks in a toy-like body, 13 GPIO, USB to UART/SPI/I2C bridge/converter, Serial Wire Debug interface (SWD), 2.54 mm pin header connector
 *
 * KiCad symbol: `MCU_Module:Flipper_Zero`. Reference prefix: `A`.
 * Footprint filters: *Flipper?Zero*.
 * @see https://docs.flipper.net/development
 * Keywords: Microcontroller Module STM32 NFC RFID IR RF Bluetooth-LE-5.4 1-Wire ADC SMBus.
 * Default footprint: Module:Flipper_Zero_Angled.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Flipper_Zero extends Component.withPins({
  /** Physical pin 1: 5V; power_out. */
  "5V": "1",
  /** Physical pin 9: 3.3V; power_out. */
  "3.3V": "9",
  /** Physical pin 2: SPI1.MOSI; bidirectional. */
  "SPI1.MOSI": "2",
  /** Physical pin 3: SPI1.MISO; bidirectional. */
  "SPI1.MISO": "3",
  /** Physical pin 4: ~{SPI1.CS}; bidirectional. */
  "~{SPI1.CS}": "4",
  /** Physical pin 5: SPI1.SCK; bidirectional. */
  "SPI1.SCK": "5",
  /** Physical pin 6: ~{I2C3.SMBA}; open_collector. */
  "~{I2C3.SMBA}": "6",
  /** Physical pin 7: PC3; bidirectional. */
  "PC3": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 10: SWCLK; output. */
  "SWCLK": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: SWDIO; bidirectional. */
  "SWDIO": "12",
  /** Physical pin 13: USART1.TX; output. */
  "USART1.TX": "13",
  /** Physical pin 14: USART1.RX; input. */
  "USART1.RX": "14",
  /** Physical pin 15: I2C3.SDA; bidirectional. */
  "I2C3.SDA": "15",
  /** Physical pin 16: I2C3.SCL; bidirectional. */
  "I2C3.SCL": "16",
  /** Physical pin 17: 1W(iBTN); bidirectional. */
  "1W(iBTN)": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
}) {
  override schema = "MCU_Module:Flipper_Zero";
  override referencePrefix = "A";
}

/**
 * Edge TPU, 4 TOPS, 2W, 120-LGA
 *
 * KiCad symbol: `MCU_Module:Google_Coral`. Reference prefix: `U`.
 * Footprint filters: Google*Coral*SMT*TPU*Module*.
 * @see https://coral.ai/static/files/Coral-Accelerator-Module-datasheet.pdf
 * Keywords: TPU Coral.
 * Default footprint: Module:Google_Coral_SMT_TPU_Module.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Google_Coral extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 10: PCIE_REFCLK_N; input. */
  "PCIE_REFCLK_N": "10",
  /** Physical pin 11: PCIE_REFCLK_P; input. */
  "PCIE_REFCLK_P": "11",
  /** Physical pin 13: USB2_D_P; bidirectional. */
  "USB2_D_P": "13",
  /** Physical pin 14: USB2_D_N; bidirectional. */
  "USB2_D_N": "14",
  /** Physical pin 37: PGOOD4; output. */
  "PGOOD4": "37",
  /** Physical pin 53: PMIC_EN; input. */
  "PMIC_EN": "53",
  /** Physical pin 54: AON; power_in. */
  "AON": "54",
  /** Physical pin 56: VIN; power_in. */
  "VIN_56": "56",
  /** Physical pin 76: RST_L; input. */
  "RST_L": "76",
  /** Physical pin 77: INTR; output. */
  "INTR": "77",
  /** Physical pin 78: CLKREQ_L; bidirectional. */
  "CLKREQ_L": "78",
  /** Physical pin 82: SD_ALARM; output. */
  "SD_ALARM": "82",
  /** Physical pin 83: USB_SEL; input. */
  "USB_SEL": "83",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: PCIE_TX_N; output. */
  "PCIE_TX_N": "4",
  /** Physical pin 5: PCIE_TX_P; output. */
  "PCIE_TX_P": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: PCIE_RX_P; input. */
  "PCIE_RX_P": "7",
  /** Physical pin 8: PCIE_RX_N; input. */
  "PCIE_RX_N": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: GND; passive. */
  "GND_21": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: GND; passive. */
  "GND_24": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 27: GND; passive. */
  "GND_27": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: GND; passive. */
  "GND_30": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
  /** Physical pin 34: GND; passive. */
  "GND_34": "34",
  /** Physical pin 35: GND; passive. */
  "GND_35": "35",
  /** Physical pin 36: GND; passive. */
  "GND_36": "36",
  /** Physical pin 38: GND; passive. */
  "GND_38": "38",
  /** Physical pin 39: GND; passive. */
  "GND_39": "39",
  /** Physical pin 40: GND; passive. */
  "GND_40": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
  /** Physical pin 42: GND; passive. */
  "GND_42": "42",
  /** Physical pin 43: GND; passive. */
  "GND_43": "43",
  /** Physical pin 44: GND; passive. */
  "GND_44": "44",
  /** Physical pin 45: GND; passive. */
  "GND_45": "45",
  /** Physical pin 46: GND; passive. */
  "GND_46": "46",
  /** Physical pin 47: GND; passive. */
  "GND_47": "47",
  /** Physical pin 48: GND; passive. */
  "GND_48": "48",
  /** Physical pin 49: RESERVED; no_connect. */
  "RESERVED_49": "49",
  /** Physical pin 50: RESERVED; no_connect. */
  "RESERVED_50": "50",
  /** Physical pin 51: GND; passive. */
  "GND_51": "51",
  /** Physical pin 52: RESERVED; no_connect. */
  "RESERVED_52": "52",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 57: VIN; passive. */
  "VIN_57": "57",
  /** Physical pin 58: VIN; passive. */
  "VIN_58": "58",
  /** Physical pin 59: VIN; passive. */
  "VIN_59": "59",
  /** Physical pin 60: VIN; passive. */
  "VIN_60": "60",
  /** Physical pin 61: VIN; passive. */
  "VIN_61": "61",
  /** Physical pin 62: VIN; passive. */
  "VIN_62": "62",
  /** Physical pin 63: VIN; passive. */
  "VIN_63": "63",
  /** Physical pin 64: VIN; passive. */
  "VIN_64": "64",
  /** Physical pin 65: VIN; passive. */
  "VIN_65": "65",
  /** Physical pin 66: VIN; passive. */
  "VIN_66": "66",
  /** Physical pin 67: VIN; passive. */
  "VIN_67": "67",
  /** Physical pin 68: GND; passive. */
  "GND_68": "68",
  /** Physical pin 69: GND; passive. */
  "GND_69": "69",
  /** Physical pin 70: GND; passive. */
  "GND_70": "70",
  /** Physical pin 71: GND; passive. */
  "GND_71": "71",
  /** Physical pin 72: GND; passive. */
  "GND_72": "72",
  /** Physical pin 73: GND; passive. */
  "GND_73": "73",
  /** Physical pin 74: GND; passive. */
  "GND_74": "74",
  /** Physical pin 75: GND; passive. */
  "GND_75": "75",
  /** Physical pin 79: GND; passive. */
  "GND_79": "79",
  /** Physical pin 80: GND; passive. */
  "GND_80": "80",
  /** Physical pin 81: GND; passive. */
  "GND_81": "81",
  /** Physical pin 84: RESERVED; no_connect. */
  "RESERVED_84": "84",
  /** Physical pin 85: RESERVED; no_connect. */
  "RESERVED_85": "85",
  /** Physical pin 86: GND; passive. */
  "GND_86": "86",
  /** Physical pin 87: GND; passive. */
  "GND_87": "87",
  /** Physical pin 88: GND; passive. */
  "GND_88": "88",
  /** Physical pin 89: GND; passive. */
  "GND_89": "89",
  /** Physical pin 90: GND; passive. */
  "GND_90": "90",
  /** Physical pin 91: GND; passive. */
  "GND_91": "91",
  /** Physical pin 92: GND; passive. */
  "GND_92": "92",
  /** Physical pin 93: GND; passive. */
  "GND_93": "93",
  /** Physical pin 94: GND; passive. */
  "GND_94": "94",
  /** Physical pin 95: GND; passive. */
  "GND_95": "95",
  /** Physical pin 96: GND; passive. */
  "GND_96": "96",
  /** Physical pin 97: GND; passive. */
  "GND_97": "97",
  /** Physical pin 98: GND; passive. */
  "GND_98": "98",
  /** Physical pin 99: GND; passive. */
  "GND_99": "99",
  /** Physical pin 100: GND; passive. */
  "GND_100": "100",
  /** Physical pin 101: GND; passive. */
  "GND_101": "101",
  /** Physical pin 102: GND; passive. */
  "GND_102": "102",
  /** Physical pin 103: GND; passive. */
  "GND_103": "103",
  /** Physical pin 104: GND; passive. */
  "GND_104": "104",
  /** Physical pin 105: GND; passive. */
  "GND_105": "105",
  /** Physical pin 106: GND; passive. */
  "GND_106": "106",
  /** Physical pin 107: GND; passive. */
  "GND_107": "107",
  /** Physical pin 108: GND; passive. */
  "GND_108": "108",
  /** Physical pin 109: GND; passive. */
  "GND_109": "109",
  /** Physical pin 110: GND; passive. */
  "GND_110": "110",
  /** Physical pin 111: GND; passive. */
  "GND_111": "111",
  /** Physical pin 112: GND; passive. */
  "GND_112": "112",
  /** Physical pin 113: GND; passive. */
  "GND_113": "113",
  /** Physical pin 114: GND; passive. */
  "GND_114": "114",
  /** Physical pin 115: GND; passive. */
  "GND_115": "115",
  /** Physical pin 116: GND; passive. */
  "GND_116": "116",
  /** Physical pin 117: GND; passive. */
  "GND_117": "117",
  /** Physical pin 118: GND; passive. */
  "GND_118": "118",
  /** Physical pin 119: GND; passive. */
  "GND_119": "119",
  /** Physical pin 120: GND; passive. */
  "GND_120": "120",
}) {
  override schema = "MCU_Module:Google_Coral";
  override referencePrefix = "U";
}

/**
 * Maple Mini Microcontroller Module by LeafLabs
 *
 * KiCad symbol: `MCU_Module:Maple_Mini`. Reference prefix: `A`.
 * Footprint filters: Maple*Mini*.
 * @see http://docs.leaflabs.com/static.leaflabs.com/pub/leaflabs/maple-docs/0.0.12/hardware/maple-mini.html
 * Keywords: Maple Mini Microcontroller Module LeafLabs STM32 STM32F103.
 * Default footprint: Module:Maple_Mini.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Maple_Mini extends Component.withPins({
  /** Physical pin 1: VCC; power_in. */
  "VCC": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: BUT/D32; bidirectional. */
  "BUT/D32": "3",
  /** Physical pin 4: SCL1/D15; bidirectional. */
  "SCL1/D15": "4",
  /** Physical pin 5: SDA1/D16; bidirectional. */
  "SDA1/D16": "5",
  /** Physical pin 6: D17; bidirectional. */
  "D17": "6",
  /** Physical pin 7: D18; bidirectional. */
  "D18": "7",
  /** Physical pin 8: D19; bidirectional. */
  "D19": "8",
  /** Physical pin 9: D20; bidirectional. */
  "D20": "9",
  /** Physical pin 10: D21; bidirectional. */
  "D21": "10",
  /** Physical pin 11: D22; bidirectional. */
  "D22": "11",
  /** Physical pin 12: D23; bidirectional. */
  "D23": "12",
  /** Physical pin 13: D24; bidirectional. */
  "D24": "13",
  /** Physical pin 14: RX1/D25; bidirectional. */
  "RX1/D25": "14",
  /** Physical pin 15: TX1/D26; bidirectional. */
  "TX1/D26": "15",
  /** Physical pin 16: D27; bidirectional. */
  "D27": "16",
  /** Physical pin 17: MOSI2/D28; bidirectional. */
  "MOSI2/D28": "17",
  /** Physical pin 18: MISO2/D29; bidirectional. */
  "MISO2/D29": "18",
  /** Physical pin 19: SCK2/D30; bidirectional. */
  "SCK2/D30": "19",
  /** Physical pin 20: SS2/D31; bidirectional. */
  "SS2/D31": "20",
  /** Physical pin 21: VIN; power_in. */
  "VIN": "21",
  /** Physical pin 22: D0/SDA2; bidirectional. */
  "D0/SDA2": "22",
  /** Physical pin 23: D1/SCL2; bidirectional. */
  "D1/SCL2": "23",
  /** Physical pin 24: D2; bidirectional. */
  "D2": "24",
  /** Physical pin 25: D3; bidirectional. */
  "D3": "25",
  /** Physical pin 26: D4/MOSI1; bidirectional. */
  "D4/MOSI1": "26",
  /** Physical pin 27: D5/MISO1; bidirectional. */
  "D5/MISO1": "27",
  /** Physical pin 28: D6/SCK1; bidirectional. */
  "D6/SCK1": "28",
  /** Physical pin 29: D7/SS1; bidirectional. */
  "D7/SS1": "29",
  /** Physical pin 30: D8/RX2; bidirectional. */
  "D8/RX2": "30",
  /** Physical pin 31: D9/TX2; bidirectional. */
  "D9/TX2": "31",
  /** Physical pin 32: D10; bidirectional. */
  "D10": "32",
  /** Physical pin 33: D11; bidirectional. */
  "D11": "33",
  /** Physical pin 34: ~{RESET}; input. */
  "~{RESET}": "34",
  /** Physical pin 35: D12; bidirectional. */
  "D12": "35",
  /** Physical pin 36: D13; bidirectional. */
  "D13": "36",
  /** Physical pin 37: D14; bidirectional. */
  "D14": "37",
  /** Physical pin 38: VBAT; power_in. */
  "VBAT": "38",
  /** Physical pin 39: AV-; output. */
  "AV-": "39",
  /** Physical pin 40: AV+; output. */
  "AV+": "40",
}) {
  override schema = "MCU_Module:Maple_Mini";
  override referencePrefix = "A";
}

/**
 * Nucleo 144 Development Board with STM32F429ZIT6 MCU, 256kB RAM, 1Mb FLASH
 *
 * KiCad symbol: `MCU_Module:NUCLEO144-F429ZI`. Reference prefix: `U`.
 * Footprint filters: ST*Morpho*Connector*144*STLink*.
 * @see http://www.st.com/content/ccc/resource/technical/document/data_brief/group0/7b/df/1d/e9/64/55/43/8d/DM00247910/files/DM00247910.pdf/jcr:content/translations/en.DM00247910.pdf
 * Keywords: STM32 Nucleo ST.
 * Default footprint: Module:ST_Morpho_Connector_144_STLink.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NUCLEO144_F429ZI extends Component.withPins({
  /** Physical pin 1: PC10; bidirectional. */
  "PC10": "1",
  /** Physical pin 2: PC11; bidirectional. */
  "PC11": "2",
  /** Physical pin 3: PC12; bidirectional. */
  "PC12": "3",
  /** Physical pin 4: PD2; bidirectional. */
  "PD2": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: E5V; power_in. */
  "E5V": "6",
  /** Physical pin 7: ~{BOOT0}; input. */
  "~{BOOT0}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: PF6; bidirectional. */
  "PF6": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: PF7; bidirectional. */
  "PF7": "11",
  /** Physical pin 12: IOREF; power_in. */
  "IOREF": "12",
  /** Physical pin 13: TMS/PA13; bidirectional. */
  "TMS/PA13": "13",
  /** Physical pin 14: ~{RST}; input. */
  "~{RST}": "14",
  /** Physical pin 15: TCK/PA14; bidirectional. */
  "TCK/PA14": "15",
  /** Physical pin 16: +3V3; power_in. */
  "+3V3": "16",
  /** Physical pin 17: PA15; bidirectional. */
  "PA15": "17",
  /** Physical pin 18: +5V; power_in. */
  "+5V": "18",
  /** Physical pin 19: GND; power_in. */
  "GND_19": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: LD2/PB7; bidirectional. */
  "LD2/PB7": "21",
  /** Physical pin 22: GND; power_in. */
  "GND_22": "22",
  /** Physical pin 23: BT/PC13; bidirectional. */
  "BT/PC13": "23",
  /** Physical pin 24: VIN; power_in. */
  "VIN": "24",
  /** Physical pin 25: RTC_CRYSTAL/PC14; bidirectional. */
  "RTC_CRYSTAL/PC14": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: RTC_CRYSTAL/PC15; bidirectional. */
  "RTC_CRYSTAL/PC15": "27",
  /** Physical pin 28: PA0; bidirectional. */
  "PA0": "28",
  /** Physical pin 29: PH0; bidirectional. */
  "PH0": "29",
  /** Physical pin 30: ETH_REF_CLK/PA1; bidirectional. */
  "ETH_REF_CLK/PA1": "30",
  /** Physical pin 31: PH1; bidirectional. */
  "PH1": "31",
  /** Physical pin 32: PA4; bidirectional. */
  "PA4": "32",
  /** Physical pin 33: VBAT; power_in. */
  "VBAT": "33",
  /** Physical pin 34: PB0; bidirectional. */
  "PB0": "34",
  /** Physical pin 35: PC2; bidirectional. */
  "PC2": "35",
  /** Physical pin 36: ETH_MDC/PC1; bidirectional. */
  "ETH_MDC/PC1": "36",
  /** Physical pin 37: PC3; bidirectional. */
  "PC3": "37",
  /** Physical pin 38: PC0; bidirectional. */
  "PC0": "38",
  /** Physical pin 39: PD4; bidirectional. */
  "PD4": "39",
  /** Physical pin 40: PD3; bidirectional. */
  "PD3": "40",
  /** Physical pin 41: PD5; bidirectional. */
  "PD5": "41",
  /** Physical pin 42: PG2; bidirectional. */
  "PG2": "42",
  /** Physical pin 43: PD6; bidirectional. */
  "PD6": "43",
  /** Physical pin 44: PG3; bidirectional. */
  "PG3": "44",
  /** Physical pin 45: PD7; bidirectional. */
  "PD7": "45",
  /** Physical pin 46: PE2; bidirectional. */
  "PE2": "46",
  /** Physical pin 47: PE3; bidirectional. */
  "PE3": "47",
  /** Physical pin 48: PE4; bidirectional. */
  "PE4": "48",
  /** Physical pin 49: GND; power_in. */
  "GND_49": "49",
  /** Physical pin 50: PE5; bidirectional. */
  "PE5": "50",
  /** Physical pin 51: PF1; bidirectional. */
  "PF1": "51",
  /** Physical pin 52: PF2; bidirectional. */
  "PF2": "52",
  /** Physical pin 53: PF0; bidirectional. */
  "PF0": "53",
  /** Physical pin 54: PF8; bidirectional. */
  "PF8": "54",
  /** Physical pin 55: PD1; bidirectional. */
  "PD1": "55",
  /** Physical pin 56: PF9; bidirectional. */
  "PF9": "56",
  /** Physical pin 57: PD0; bidirectional. */
  "PD0": "57",
  /** Physical pin 58: PG1; bidirectional. */
  "PG1": "58",
  /** Physical pin 59: PG0; bidirectional. */
  "PG0": "59",
  /** Physical pin 60: GND; power_in. */
  "GND_60": "60",
  /** Physical pin 61: PE1; bidirectional. */
  "PE1": "61",
  /** Physical pin 62: PE6; bidirectional. */
  "PE6": "62",
  /** Physical pin 63: PG9; bidirectional. */
  "PG9": "63",
  /** Physical pin 64: PG15; bidirectional. */
  "PG15": "64",
  /** Physical pin 65: PG12; bidirectional. */
  "PG12": "65",
  /** Physical pin 66: PG10; bidirectional. */
  "PG10": "66",
  /** Physical pin 67: NC; no_connect. */
  "NC_67": "67",
  /** Physical pin 68: PG13/ETH_TXD0; bidirectional. */
  "PG13/ETH_TXD0": "68",
  /** Physical pin 69: STLINK_RX/PD9; bidirectional. */
  "STLINK_RX/PD9": "69",
  /** Physical pin 70: PG11/ETH_TX_EN; bidirectional. */
  "PG11/ETH_TX_EN": "70",
  /** Physical pin 71: GND; power_in. */
  "GND_71": "71",
  /** Physical pin 72: GND; power_in. */
  "GND_72": "72",
  /** Physical pin 73: PC9; bidirectional. */
  "PC9": "73",
  /** Physical pin 74: PC8; bidirectional. */
  "PC8": "74",
  /** Physical pin 75: PB8; bidirectional. */
  "PB8": "75",
  /** Physical pin 76: PC6; bidirectional. */
  "PC6": "76",
  /** Physical pin 77: PB9; bidirectional. */
  "PB9": "77",
  /** Physical pin 78: ETH_RXD1/PC5; bidirectional. */
  "ETH_RXD1/PC5": "78",
  /** Physical pin 79: AVDD; power_in. */
  "AVDD": "79",
  /** Physical pin 80: U5V; power_in. */
  "U5V": "80",
  /** Physical pin 81: GND; power_in. */
  "GND_81": "81",
  /** Physical pin 82: STLINK_TX/PD8; bidirectional. */
  "STLINK_TX/PD8": "82",
  /** Physical pin 83: PA5; bidirectional. */
  "PA5": "83",
  /** Physical pin 84: USB_DP/PA12; bidirectional. */
  "USB_DP/PA12": "84",
  /** Physical pin 85: PA6; bidirectional. */
  "PA6": "85",
  /** Physical pin 86: USB_DM/PA11; bidirectional. */
  "USB_DM/PA11": "86",
  /** Physical pin 87: ETH_CRS_DV/PA7; bidirectional. */
  "ETH_CRS_DV/PA7": "87",
  /** Physical pin 88: PB12; bidirectional. */
  "PB12": "88",
  /** Physical pin 89: PB6; bidirectional. */
  "PB6": "89",
  /** Physical pin 90: PB11; bidirectional. */
  "PB11": "90",
  /** Physical pin 91: PC7; bidirectional. */
  "PC7": "91",
  /** Physical pin 92: GND; power_in. */
  "GND_92": "92",
  /** Physical pin 93: USB_VBUS/PA9; bidirectional. */
  "USB_VBUS/PA9": "93",
  /** Physical pin 94: PB2; bidirectional. */
  "PB2": "94",
  /** Physical pin 95: USB_SOF/PA8; bidirectional. */
  "USB_SOF/PA8": "95",
  /** Physical pin 96: PB1; bidirectional. */
  "PB1": "96",
  /** Physical pin 97: PB10; bidirectional. */
  "PB10": "97",
  /** Physical pin 98: PB15; bidirectional. */
  "PB15": "98",
  /** Physical pin 99: PB4; bidirectional. */
  "PB4": "99",
  /** Physical pin 100: LD3/PB14; bidirectional. */
  "LD3/PB14": "100",
  /** Physical pin 101: PB5; bidirectional. */
  "PB5": "101",
  /** Physical pin 102: ETH_TXD1/PB13; bidirectional. */
  "ETH_TXD1/PB13": "102",
  /** Physical pin 103: SWO/PB3; bidirectional. */
  "SWO/PB3": "103",
  /** Physical pin 104: AGND; power_in. */
  "AGND": "104",
  /** Physical pin 105: USB_ID/PA10; bidirectional. */
  "USB_ID/PA10": "105",
  /** Physical pin 106: ETH_RXD0/PC4; bidirectional. */
  "ETH_RXD0/PC4": "106",
  /** Physical pin 107: ETH_MDIO/PA2; bidirectional. */
  "ETH_MDIO/PA2": "107",
  /** Physical pin 108: PF5; bidirectional. */
  "PF5": "108",
  /** Physical pin 109: PA3; bidirectional. */
  "PA3": "109",
  /** Physical pin 110: PF4; bidirectional. */
  "PF4": "110",
  /** Physical pin 111: GND; power_in. */
  "GND_111": "111",
  /** Physical pin 112: PE8; bidirectional. */
  "PE8": "112",
  /** Physical pin 113: PD13; bidirectional. */
  "PD13": "113",
  /** Physical pin 114: PF10; bidirectional. */
  "PF10": "114",
  /** Physical pin 115: PD12; bidirectional. */
  "PD12": "115",
  /** Physical pin 116: PE7; bidirectional. */
  "PE7": "116",
  /** Physical pin 117: PD11; bidirectional. */
  "PD11": "117",
  /** Physical pin 118: PD14; bidirectional. */
  "PD14": "118",
  /** Physical pin 119: PE10; bidirectional. */
  "PE10": "119",
  /** Physical pin 120: PD15; bidirectional. */
  "PD15": "120",
  /** Physical pin 121: PE12; bidirectional. */
  "PE12": "121",
  /** Physical pin 122: PF14; bidirectional. */
  "PF14": "122",
  /** Physical pin 123: PE14; bidirectional. */
  "PE14": "123",
  /** Physical pin 124: PE9; bidirectional. */
  "PE9": "124",
  /** Physical pin 125: PE15; bidirectional. */
  "PE15": "125",
  /** Physical pin 126: GND; power_in. */
  "GND_126": "126",
  /** Physical pin 127: PE13; bidirectional. */
  "PE13": "127",
  /** Physical pin 128: PE11; bidirectional. */
  "PE11": "128",
  /** Physical pin 129: PF13; bidirectional. */
  "PF13": "129",
  /** Physical pin 130: PF3; bidirectional. */
  "PF3": "130",
  /** Physical pin 131: PF12; bidirectional. */
  "PF12": "131",
  /** Physical pin 132: PF15; bidirectional. */
  "PF15": "132",
  /** Physical pin 133: PG14; bidirectional. */
  "PG14": "133",
  /** Physical pin 134: PF11; bidirectional. */
  "PF11": "134",
  /** Physical pin 135: GND; power_in. */
  "GND_135": "135",
  /** Physical pin 136: PE0; bidirectional. */
  "PE0": "136",
  /** Physical pin 137: PD10; bidirectional. */
  "PD10": "137",
  /** Physical pin 138: PG8; bidirectional. */
  "PG8": "138",
  /** Physical pin 139: PG7/USB_GPIO_IN; bidirectional. */
  "PG7/USB_GPIO_IN": "139",
  /** Physical pin 140: PG5; bidirectional. */
  "PG5": "140",
  /** Physical pin 141: PG4; bidirectional. */
  "PG4": "141",
  /** Physical pin 142: PG6/USB_GPIO_OUT; bidirectional. */
  "PG6/USB_GPIO_OUT": "142",
  /** Physical pin 143: GND; power_in. */
  "GND_143": "143",
  /** Physical pin 144: GND; power_in. */
  "GND_144": "144",
}) {
  override schema = "MCU_Module:NUCLEO144-F429ZI";
  override referencePrefix = "U";
}

/**
 * Nucleo 144 Development Board with STM32F207ZGT6 MCU, 128+4Kb RAM, 1Mb FLASH
 *
 * KiCad symbol: `MCU_Module:NUCLEO144-F207ZG`. Reference prefix: `U`.
 * Footprint filters: ST*Morpho*Connector*144*STLink*.
 * @see https://www.st.com/resource/en/user_manual/dm00244518-stm32-nucleo144-boards-stmicroelectronics.pdf
 * Keywords: STM32 Nucleo ST.
 * Default footprint: Module:ST_Morpho_Connector_144_STLink.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NUCLEO144_F207ZG extends Component.withPins({
  /** Physical pin 1: PC10; bidirectional. */
  "PC10": "1",
  /** Physical pin 2: PC11; bidirectional. */
  "PC11": "2",
  /** Physical pin 3: PC12; bidirectional. */
  "PC12": "3",
  /** Physical pin 4: PD2; bidirectional. */
  "PD2": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: E5V; power_in. */
  "E5V": "6",
  /** Physical pin 7: ~{BOOT0}; input. */
  "~{BOOT0}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: PF6; bidirectional. */
  "PF6": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: PF7; bidirectional. */
  "PF7": "11",
  /** Physical pin 12: IOREF; power_in. */
  "IOREF": "12",
  /** Physical pin 13: TMS/PA13; bidirectional. */
  "TMS/PA13": "13",
  /** Physical pin 14: ~{RST}; input. */
  "~{RST}": "14",
  /** Physical pin 15: TCK/PA14; bidirectional. */
  "TCK/PA14": "15",
  /** Physical pin 16: +3V3; power_in. */
  "+3V3": "16",
  /** Physical pin 17: PA15; bidirectional. */
  "PA15": "17",
  /** Physical pin 18: +5V; power_in. */
  "+5V": "18",
  /** Physical pin 19: GND; power_in. */
  "GND_19": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: LD2/PB7; bidirectional. */
  "LD2/PB7": "21",
  /** Physical pin 22: GND; power_in. */
  "GND_22": "22",
  /** Physical pin 23: BT/PC13; bidirectional. */
  "BT/PC13": "23",
  /** Physical pin 24: VIN; power_in. */
  "VIN": "24",
  /** Physical pin 25: RTC_CRYSTAL/PC14; bidirectional. */
  "RTC_CRYSTAL/PC14": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: RTC_CRYSTAL/PC15; bidirectional. */
  "RTC_CRYSTAL/PC15": "27",
  /** Physical pin 28: PA0; bidirectional. */
  "PA0": "28",
  /** Physical pin 29: PH0; bidirectional. */
  "PH0": "29",
  /** Physical pin 30: ETH_REF_CLK/PA1; bidirectional. */
  "ETH_REF_CLK/PA1": "30",
  /** Physical pin 31: PH1; bidirectional. */
  "PH1": "31",
  /** Physical pin 32: PA4; bidirectional. */
  "PA4": "32",
  /** Physical pin 33: VBAT; power_in. */
  "VBAT": "33",
  /** Physical pin 34: PB0; bidirectional. */
  "PB0": "34",
  /** Physical pin 35: PC2; bidirectional. */
  "PC2": "35",
  /** Physical pin 36: ETH_MDC/PC1; bidirectional. */
  "ETH_MDC/PC1": "36",
  /** Physical pin 37: PC3; bidirectional. */
  "PC3": "37",
  /** Physical pin 38: PC0; bidirectional. */
  "PC0": "38",
  /** Physical pin 39: PD4; bidirectional. */
  "PD4": "39",
  /** Physical pin 40: PD3; bidirectional. */
  "PD3": "40",
  /** Physical pin 41: PD5; bidirectional. */
  "PD5": "41",
  /** Physical pin 42: PG2; bidirectional. */
  "PG2": "42",
  /** Physical pin 43: PD6; bidirectional. */
  "PD6": "43",
  /** Physical pin 44: PG3; bidirectional. */
  "PG3": "44",
  /** Physical pin 45: PD7; bidirectional. */
  "PD7": "45",
  /** Physical pin 46: PE2; bidirectional. */
  "PE2": "46",
  /** Physical pin 47: PE3; bidirectional. */
  "PE3": "47",
  /** Physical pin 48: PE4; bidirectional. */
  "PE4": "48",
  /** Physical pin 49: GND; power_in. */
  "GND_49": "49",
  /** Physical pin 50: PE5; bidirectional. */
  "PE5": "50",
  /** Physical pin 51: PF1; bidirectional. */
  "PF1": "51",
  /** Physical pin 52: PF2; bidirectional. */
  "PF2": "52",
  /** Physical pin 53: PF0; bidirectional. */
  "PF0": "53",
  /** Physical pin 54: PF8; bidirectional. */
  "PF8": "54",
  /** Physical pin 55: PD1; bidirectional. */
  "PD1": "55",
  /** Physical pin 56: PF9; bidirectional. */
  "PF9": "56",
  /** Physical pin 57: PD0; bidirectional. */
  "PD0": "57",
  /** Physical pin 58: PG1; bidirectional. */
  "PG1": "58",
  /** Physical pin 59: PG0; bidirectional. */
  "PG0": "59",
  /** Physical pin 60: GND; power_in. */
  "GND_60": "60",
  /** Physical pin 61: PE1; bidirectional. */
  "PE1": "61",
  /** Physical pin 62: PE6; bidirectional. */
  "PE6": "62",
  /** Physical pin 63: PG9; bidirectional. */
  "PG9": "63",
  /** Physical pin 64: PG15; bidirectional. */
  "PG15": "64",
  /** Physical pin 65: PG12; bidirectional. */
  "PG12": "65",
  /** Physical pin 66: PG10; bidirectional. */
  "PG10": "66",
  /** Physical pin 67: NC; no_connect. */
  "NC_67": "67",
  /** Physical pin 68: PG13/ETH_TXD0; bidirectional. */
  "PG13/ETH_TXD0": "68",
  /** Physical pin 69: STLINK_RX/PD9; bidirectional. */
  "STLINK_RX/PD9": "69",
  /** Physical pin 70: PG11/ETH_TX_EN; bidirectional. */
  "PG11/ETH_TX_EN": "70",
  /** Physical pin 71: GND; power_in. */
  "GND_71": "71",
  /** Physical pin 72: GND; power_in. */
  "GND_72": "72",
  /** Physical pin 73: PC9; bidirectional. */
  "PC9": "73",
  /** Physical pin 74: PC8; bidirectional. */
  "PC8": "74",
  /** Physical pin 75: PB8; bidirectional. */
  "PB8": "75",
  /** Physical pin 76: PC6; bidirectional. */
  "PC6": "76",
  /** Physical pin 77: PB9; bidirectional. */
  "PB9": "77",
  /** Physical pin 78: ETH_RXD1/PC5; bidirectional. */
  "ETH_RXD1/PC5": "78",
  /** Physical pin 79: AVDD; power_in. */
  "AVDD": "79",
  /** Physical pin 80: U5V; power_in. */
  "U5V": "80",
  /** Physical pin 81: GND; power_in. */
  "GND_81": "81",
  /** Physical pin 82: STLINK_TX/PD8; bidirectional. */
  "STLINK_TX/PD8": "82",
  /** Physical pin 83: PA5; bidirectional. */
  "PA5": "83",
  /** Physical pin 84: USB_DP/PA12; bidirectional. */
  "USB_DP/PA12": "84",
  /** Physical pin 85: PA6; bidirectional. */
  "PA6": "85",
  /** Physical pin 86: USB_DM/PA11; bidirectional. */
  "USB_DM/PA11": "86",
  /** Physical pin 87: ETH_CRS_DV/PA7; bidirectional. */
  "ETH_CRS_DV/PA7": "87",
  /** Physical pin 88: PB12; bidirectional. */
  "PB12": "88",
  /** Physical pin 89: PB6; bidirectional. */
  "PB6": "89",
  /** Physical pin 90: PB11; bidirectional. */
  "PB11": "90",
  /** Physical pin 91: PC7; bidirectional. */
  "PC7": "91",
  /** Physical pin 92: GND; power_in. */
  "GND_92": "92",
  /** Physical pin 93: USB_VBUS/PA9; bidirectional. */
  "USB_VBUS/PA9": "93",
  /** Physical pin 94: PB2; bidirectional. */
  "PB2": "94",
  /** Physical pin 95: USB_SOF/PA8; bidirectional. */
  "USB_SOF/PA8": "95",
  /** Physical pin 96: PB1; bidirectional. */
  "PB1": "96",
  /** Physical pin 97: PB10; bidirectional. */
  "PB10": "97",
  /** Physical pin 98: PB15; bidirectional. */
  "PB15": "98",
  /** Physical pin 99: PB4; bidirectional. */
  "PB4": "99",
  /** Physical pin 100: LD3/PB14; bidirectional. */
  "LD3/PB14": "100",
  /** Physical pin 101: PB5; bidirectional. */
  "PB5": "101",
  /** Physical pin 102: ETH_TXD1/PB13; bidirectional. */
  "ETH_TXD1/PB13": "102",
  /** Physical pin 103: SWO/PB3; bidirectional. */
  "SWO/PB3": "103",
  /** Physical pin 104: AGND; power_in. */
  "AGND": "104",
  /** Physical pin 105: USB_ID/PA10; bidirectional. */
  "USB_ID/PA10": "105",
  /** Physical pin 106: ETH_RXD0/PC4; bidirectional. */
  "ETH_RXD0/PC4": "106",
  /** Physical pin 107: ETH_MDIO/PA2; bidirectional. */
  "ETH_MDIO/PA2": "107",
  /** Physical pin 108: PF5; bidirectional. */
  "PF5": "108",
  /** Physical pin 109: PA3; bidirectional. */
  "PA3": "109",
  /** Physical pin 110: PF4; bidirectional. */
  "PF4": "110",
  /** Physical pin 111: GND; power_in. */
  "GND_111": "111",
  /** Physical pin 112: PE8; bidirectional. */
  "PE8": "112",
  /** Physical pin 113: PD13; bidirectional. */
  "PD13": "113",
  /** Physical pin 114: PF10; bidirectional. */
  "PF10": "114",
  /** Physical pin 115: PD12; bidirectional. */
  "PD12": "115",
  /** Physical pin 116: PE7; bidirectional. */
  "PE7": "116",
  /** Physical pin 117: PD11; bidirectional. */
  "PD11": "117",
  /** Physical pin 118: PD14; bidirectional. */
  "PD14": "118",
  /** Physical pin 119: PE10; bidirectional. */
  "PE10": "119",
  /** Physical pin 120: PD15; bidirectional. */
  "PD15": "120",
  /** Physical pin 121: PE12; bidirectional. */
  "PE12": "121",
  /** Physical pin 122: PF14; bidirectional. */
  "PF14": "122",
  /** Physical pin 123: PE14; bidirectional. */
  "PE14": "123",
  /** Physical pin 124: PE9; bidirectional. */
  "PE9": "124",
  /** Physical pin 125: PE15; bidirectional. */
  "PE15": "125",
  /** Physical pin 126: GND; power_in. */
  "GND_126": "126",
  /** Physical pin 127: PE13; bidirectional. */
  "PE13": "127",
  /** Physical pin 128: PE11; bidirectional. */
  "PE11": "128",
  /** Physical pin 129: PF13; bidirectional. */
  "PF13": "129",
  /** Physical pin 130: PF3; bidirectional. */
  "PF3": "130",
  /** Physical pin 131: PF12; bidirectional. */
  "PF12": "131",
  /** Physical pin 132: PF15; bidirectional. */
  "PF15": "132",
  /** Physical pin 133: PG14; bidirectional. */
  "PG14": "133",
  /** Physical pin 134: PF11; bidirectional. */
  "PF11": "134",
  /** Physical pin 135: GND; power_in. */
  "GND_135": "135",
  /** Physical pin 136: PE0; bidirectional. */
  "PE0": "136",
  /** Physical pin 137: PD10; bidirectional. */
  "PD10": "137",
  /** Physical pin 138: PG8; bidirectional. */
  "PG8": "138",
  /** Physical pin 139: PG7/USB_GPIO_IN; bidirectional. */
  "PG7/USB_GPIO_IN": "139",
  /** Physical pin 140: PG5; bidirectional. */
  "PG5": "140",
  /** Physical pin 141: PG4; bidirectional. */
  "PG4": "141",
  /** Physical pin 142: PG6/USB_GPIO_OUT; bidirectional. */
  "PG6/USB_GPIO_OUT": "142",
  /** Physical pin 143: GND; power_in. */
  "GND_143": "143",
  /** Physical pin 144: GND; power_in. */
  "GND_144": "144",
}) {
  override schema = "MCU_Module:NUCLEO144-F207ZG";
  override referencePrefix = "U";
}

/**
 * Nucleo 144 Development Board with STM32F412ZGT6 MCU, 256kB RAM, 1Mb FLASH
 *
 * KiCad symbol: `MCU_Module:NUCLEO144-F412ZG`. Reference prefix: `U`.
 * Footprint filters: ST*Morpho*Connector*144*STLink*.
 * @see https://www.st.com/resource/en/user_manual/dm00244518-stm32-nucleo144-boards-stmicroelectronics.pdf
 * Keywords: STM32 Nucleo ST.
 * Default footprint: Module:ST_Morpho_Connector_144_STLink.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NUCLEO144_F412ZG extends Component.withPins({
  /** Physical pin 1: PC10; bidirectional. */
  "PC10": "1",
  /** Physical pin 2: PC11; bidirectional. */
  "PC11": "2",
  /** Physical pin 3: PC12; bidirectional. */
  "PC12": "3",
  /** Physical pin 4: PD2; bidirectional. */
  "PD2": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: E5V; power_in. */
  "E5V": "6",
  /** Physical pin 7: ~{BOOT0}; input. */
  "~{BOOT0}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: PF6; bidirectional. */
  "PF6": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: PF7; bidirectional. */
  "PF7": "11",
  /** Physical pin 12: IOREF; power_in. */
  "IOREF": "12",
  /** Physical pin 13: TMS/PA13; bidirectional. */
  "TMS/PA13": "13",
  /** Physical pin 14: ~{RST}; input. */
  "~{RST}": "14",
  /** Physical pin 15: TCK/PA14; bidirectional. */
  "TCK/PA14": "15",
  /** Physical pin 16: +3V3; power_in. */
  "+3V3": "16",
  /** Physical pin 17: PA15; bidirectional. */
  "PA15": "17",
  /** Physical pin 18: +5V; power_in. */
  "+5V": "18",
  /** Physical pin 19: GND; power_in. */
  "GND_19": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: LD2/PB7; bidirectional. */
  "LD2/PB7": "21",
  /** Physical pin 22: GND; power_in. */
  "GND_22": "22",
  /** Physical pin 23: BT/PC13; bidirectional. */
  "BT/PC13": "23",
  /** Physical pin 24: VIN; power_in. */
  "VIN": "24",
  /** Physical pin 25: RTC_CRYSTAL/PC14; bidirectional. */
  "RTC_CRYSTAL/PC14": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: RTC_CRYSTAL/PC15; bidirectional. */
  "RTC_CRYSTAL/PC15": "27",
  /** Physical pin 28: PA0; bidirectional. */
  "PA0": "28",
  /** Physical pin 29: PH0; bidirectional. */
  "PH0": "29",
  /** Physical pin 30: ETH_REF_CLK/PA1; bidirectional. */
  "ETH_REF_CLK/PA1": "30",
  /** Physical pin 31: PH1; bidirectional. */
  "PH1": "31",
  /** Physical pin 32: PA4; bidirectional. */
  "PA4": "32",
  /** Physical pin 33: VBAT; power_in. */
  "VBAT": "33",
  /** Physical pin 34: PB0; bidirectional. */
  "PB0": "34",
  /** Physical pin 35: PC2; bidirectional. */
  "PC2": "35",
  /** Physical pin 36: ETH_MDC/PC1; bidirectional. */
  "ETH_MDC/PC1": "36",
  /** Physical pin 37: PC3; bidirectional. */
  "PC3": "37",
  /** Physical pin 38: PC0; bidirectional. */
  "PC0": "38",
  /** Physical pin 39: PD4; bidirectional. */
  "PD4": "39",
  /** Physical pin 40: PD3; bidirectional. */
  "PD3": "40",
  /** Physical pin 41: PD5; bidirectional. */
  "PD5": "41",
  /** Physical pin 42: PG2; bidirectional. */
  "PG2": "42",
  /** Physical pin 43: PD6; bidirectional. */
  "PD6": "43",
  /** Physical pin 44: PG3; bidirectional. */
  "PG3": "44",
  /** Physical pin 45: PD7; bidirectional. */
  "PD7": "45",
  /** Physical pin 46: PE2; bidirectional. */
  "PE2": "46",
  /** Physical pin 47: PE3; bidirectional. */
  "PE3": "47",
  /** Physical pin 48: PE4; bidirectional. */
  "PE4": "48",
  /** Physical pin 49: GND; power_in. */
  "GND_49": "49",
  /** Physical pin 50: PE5; bidirectional. */
  "PE5": "50",
  /** Physical pin 51: PF1; bidirectional. */
  "PF1": "51",
  /** Physical pin 52: PF2; bidirectional. */
  "PF2": "52",
  /** Physical pin 53: PF0; bidirectional. */
  "PF0": "53",
  /** Physical pin 54: PF8; bidirectional. */
  "PF8": "54",
  /** Physical pin 55: PD1; bidirectional. */
  "PD1": "55",
  /** Physical pin 56: PF9; bidirectional. */
  "PF9": "56",
  /** Physical pin 57: PD0; bidirectional. */
  "PD0": "57",
  /** Physical pin 58: PG1; bidirectional. */
  "PG1": "58",
  /** Physical pin 59: PG0; bidirectional. */
  "PG0": "59",
  /** Physical pin 60: GND; power_in. */
  "GND_60": "60",
  /** Physical pin 61: PE1; bidirectional. */
  "PE1": "61",
  /** Physical pin 62: PE6; bidirectional. */
  "PE6": "62",
  /** Physical pin 63: PG9; bidirectional. */
  "PG9": "63",
  /** Physical pin 64: PG15; bidirectional. */
  "PG15": "64",
  /** Physical pin 65: PG12; bidirectional. */
  "PG12": "65",
  /** Physical pin 66: PG10; bidirectional. */
  "PG10": "66",
  /** Physical pin 67: NC; no_connect. */
  "NC_67": "67",
  /** Physical pin 68: PG13/ETH_TXD0; bidirectional. */
  "PG13/ETH_TXD0": "68",
  /** Physical pin 69: STLINK_RX/PD9; bidirectional. */
  "STLINK_RX/PD9": "69",
  /** Physical pin 70: PG11/ETH_TX_EN; bidirectional. */
  "PG11/ETH_TX_EN": "70",
  /** Physical pin 71: GND; power_in. */
  "GND_71": "71",
  /** Physical pin 72: GND; power_in. */
  "GND_72": "72",
  /** Physical pin 73: PC9; bidirectional. */
  "PC9": "73",
  /** Physical pin 74: PC8; bidirectional. */
  "PC8": "74",
  /** Physical pin 75: PB8; bidirectional. */
  "PB8": "75",
  /** Physical pin 76: PC6; bidirectional. */
  "PC6": "76",
  /** Physical pin 77: PB9; bidirectional. */
  "PB9": "77",
  /** Physical pin 78: ETH_RXD1/PC5; bidirectional. */
  "ETH_RXD1/PC5": "78",
  /** Physical pin 79: AVDD; power_in. */
  "AVDD": "79",
  /** Physical pin 80: U5V; power_in. */
  "U5V": "80",
  /** Physical pin 81: GND; power_in. */
  "GND_81": "81",
  /** Physical pin 82: STLINK_TX/PD8; bidirectional. */
  "STLINK_TX/PD8": "82",
  /** Physical pin 83: PA5; bidirectional. */
  "PA5": "83",
  /** Physical pin 84: USB_DP/PA12; bidirectional. */
  "USB_DP/PA12": "84",
  /** Physical pin 85: PA6; bidirectional. */
  "PA6": "85",
  /** Physical pin 86: USB_DM/PA11; bidirectional. */
  "USB_DM/PA11": "86",
  /** Physical pin 87: ETH_CRS_DV/PA7; bidirectional. */
  "ETH_CRS_DV/PA7": "87",
  /** Physical pin 88: PB12; bidirectional. */
  "PB12": "88",
  /** Physical pin 89: PB6; bidirectional. */
  "PB6": "89",
  /** Physical pin 90: PB11; bidirectional. */
  "PB11": "90",
  /** Physical pin 91: PC7; bidirectional. */
  "PC7": "91",
  /** Physical pin 92: GND; power_in. */
  "GND_92": "92",
  /** Physical pin 93: USB_VBUS/PA9; bidirectional. */
  "USB_VBUS/PA9": "93",
  /** Physical pin 94: PB2; bidirectional. */
  "PB2": "94",
  /** Physical pin 95: USB_SOF/PA8; bidirectional. */
  "USB_SOF/PA8": "95",
  /** Physical pin 96: PB1; bidirectional. */
  "PB1": "96",
  /** Physical pin 97: PB10; bidirectional. */
  "PB10": "97",
  /** Physical pin 98: PB15; bidirectional. */
  "PB15": "98",
  /** Physical pin 99: PB4; bidirectional. */
  "PB4": "99",
  /** Physical pin 100: LD3/PB14; bidirectional. */
  "LD3/PB14": "100",
  /** Physical pin 101: PB5; bidirectional. */
  "PB5": "101",
  /** Physical pin 102: ETH_TXD1/PB13; bidirectional. */
  "ETH_TXD1/PB13": "102",
  /** Physical pin 103: SWO/PB3; bidirectional. */
  "SWO/PB3": "103",
  /** Physical pin 104: AGND; power_in. */
  "AGND": "104",
  /** Physical pin 105: USB_ID/PA10; bidirectional. */
  "USB_ID/PA10": "105",
  /** Physical pin 106: ETH_RXD0/PC4; bidirectional. */
  "ETH_RXD0/PC4": "106",
  /** Physical pin 107: ETH_MDIO/PA2; bidirectional. */
  "ETH_MDIO/PA2": "107",
  /** Physical pin 108: PF5; bidirectional. */
  "PF5": "108",
  /** Physical pin 109: PA3; bidirectional. */
  "PA3": "109",
  /** Physical pin 110: PF4; bidirectional. */
  "PF4": "110",
  /** Physical pin 111: GND; power_in. */
  "GND_111": "111",
  /** Physical pin 112: PE8; bidirectional. */
  "PE8": "112",
  /** Physical pin 113: PD13; bidirectional. */
  "PD13": "113",
  /** Physical pin 114: PF10; bidirectional. */
  "PF10": "114",
  /** Physical pin 115: PD12; bidirectional. */
  "PD12": "115",
  /** Physical pin 116: PE7; bidirectional. */
  "PE7": "116",
  /** Physical pin 117: PD11; bidirectional. */
  "PD11": "117",
  /** Physical pin 118: PD14; bidirectional. */
  "PD14": "118",
  /** Physical pin 119: PE10; bidirectional. */
  "PE10": "119",
  /** Physical pin 120: PD15; bidirectional. */
  "PD15": "120",
  /** Physical pin 121: PE12; bidirectional. */
  "PE12": "121",
  /** Physical pin 122: PF14; bidirectional. */
  "PF14": "122",
  /** Physical pin 123: PE14; bidirectional. */
  "PE14": "123",
  /** Physical pin 124: PE9; bidirectional. */
  "PE9": "124",
  /** Physical pin 125: PE15; bidirectional. */
  "PE15": "125",
  /** Physical pin 126: GND; power_in. */
  "GND_126": "126",
  /** Physical pin 127: PE13; bidirectional. */
  "PE13": "127",
  /** Physical pin 128: PE11; bidirectional. */
  "PE11": "128",
  /** Physical pin 129: PF13; bidirectional. */
  "PF13": "129",
  /** Physical pin 130: PF3; bidirectional. */
  "PF3": "130",
  /** Physical pin 131: PF12; bidirectional. */
  "PF12": "131",
  /** Physical pin 132: PF15; bidirectional. */
  "PF15": "132",
  /** Physical pin 133: PG14; bidirectional. */
  "PG14": "133",
  /** Physical pin 134: PF11; bidirectional. */
  "PF11": "134",
  /** Physical pin 135: GND; power_in. */
  "GND_135": "135",
  /** Physical pin 136: PE0; bidirectional. */
  "PE0": "136",
  /** Physical pin 137: PD10; bidirectional. */
  "PD10": "137",
  /** Physical pin 138: PG8; bidirectional. */
  "PG8": "138",
  /** Physical pin 139: PG7/USB_GPIO_IN; bidirectional. */
  "PG7/USB_GPIO_IN": "139",
  /** Physical pin 140: PG5; bidirectional. */
  "PG5": "140",
  /** Physical pin 141: PG4; bidirectional. */
  "PG4": "141",
  /** Physical pin 142: PG6/USB_GPIO_OUT; bidirectional. */
  "PG6/USB_GPIO_OUT": "142",
  /** Physical pin 143: GND; power_in. */
  "GND_143": "143",
  /** Physical pin 144: GND; power_in. */
  "GND_144": "144",
}) {
  override schema = "MCU_Module:NUCLEO144-F412ZG";
  override referencePrefix = "U";
}

/**
 * Nucleo 144 Development Board with STM32F413ZHT6 MCU, 320kB RAM, 1.5Mb FLASH
 *
 * KiCad symbol: `MCU_Module:NUCLEO144-F413ZH`. Reference prefix: `U`.
 * Footprint filters: ST*Morpho*Connector*144*STLink*.
 * @see https://www.st.com/resource/en/user_manual/dm00244518-stm32-nucleo144-boards-stmicroelectronics.pdf
 * Keywords: STM32 Nucleo ST.
 * Default footprint: Module:ST_Morpho_Connector_144_STLink.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NUCLEO144_F413ZH extends Component.withPins({
  /** Physical pin 1: PC10; bidirectional. */
  "PC10": "1",
  /** Physical pin 2: PC11; bidirectional. */
  "PC11": "2",
  /** Physical pin 3: PC12; bidirectional. */
  "PC12": "3",
  /** Physical pin 4: PD2; bidirectional. */
  "PD2": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: E5V; power_in. */
  "E5V": "6",
  /** Physical pin 7: ~{BOOT0}; input. */
  "~{BOOT0}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: PF6; bidirectional. */
  "PF6": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: PF7; bidirectional. */
  "PF7": "11",
  /** Physical pin 12: IOREF; power_in. */
  "IOREF": "12",
  /** Physical pin 13: TMS/PA13; bidirectional. */
  "TMS/PA13": "13",
  /** Physical pin 14: ~{RST}; input. */
  "~{RST}": "14",
  /** Physical pin 15: TCK/PA14; bidirectional. */
  "TCK/PA14": "15",
  /** Physical pin 16: +3V3; power_in. */
  "+3V3": "16",
  /** Physical pin 17: PA15; bidirectional. */
  "PA15": "17",
  /** Physical pin 18: +5V; power_in. */
  "+5V": "18",
  /** Physical pin 19: GND; power_in. */
  "GND_19": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: LD2/PB7; bidirectional. */
  "LD2/PB7": "21",
  /** Physical pin 22: GND; power_in. */
  "GND_22": "22",
  /** Physical pin 23: BT/PC13; bidirectional. */
  "BT/PC13": "23",
  /** Physical pin 24: VIN; power_in. */
  "VIN": "24",
  /** Physical pin 25: RTC_CRYSTAL/PC14; bidirectional. */
  "RTC_CRYSTAL/PC14": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: RTC_CRYSTAL/PC15; bidirectional. */
  "RTC_CRYSTAL/PC15": "27",
  /** Physical pin 28: PA0; bidirectional. */
  "PA0": "28",
  /** Physical pin 29: PH0; bidirectional. */
  "PH0": "29",
  /** Physical pin 30: ETH_REF_CLK/PA1; bidirectional. */
  "ETH_REF_CLK/PA1": "30",
  /** Physical pin 31: PH1; bidirectional. */
  "PH1": "31",
  /** Physical pin 32: PA4; bidirectional. */
  "PA4": "32",
  /** Physical pin 33: VBAT; power_in. */
  "VBAT": "33",
  /** Physical pin 34: PB0; bidirectional. */
  "PB0": "34",
  /** Physical pin 35: PC2; bidirectional. */
  "PC2": "35",
  /** Physical pin 36: ETH_MDC/PC1; bidirectional. */
  "ETH_MDC/PC1": "36",
  /** Physical pin 37: PC3; bidirectional. */
  "PC3": "37",
  /** Physical pin 38: PC0; bidirectional. */
  "PC0": "38",
  /** Physical pin 39: PD4; bidirectional. */
  "PD4": "39",
  /** Physical pin 40: PD3; bidirectional. */
  "PD3": "40",
  /** Physical pin 41: PD5; bidirectional. */
  "PD5": "41",
  /** Physical pin 42: PG2; bidirectional. */
  "PG2": "42",
  /** Physical pin 43: PD6; bidirectional. */
  "PD6": "43",
  /** Physical pin 44: PG3; bidirectional. */
  "PG3": "44",
  /** Physical pin 45: PD7; bidirectional. */
  "PD7": "45",
  /** Physical pin 46: PE2; bidirectional. */
  "PE2": "46",
  /** Physical pin 47: PE3; bidirectional. */
  "PE3": "47",
  /** Physical pin 48: PE4; bidirectional. */
  "PE4": "48",
  /** Physical pin 49: GND; power_in. */
  "GND_49": "49",
  /** Physical pin 50: PE5; bidirectional. */
  "PE5": "50",
  /** Physical pin 51: PF1; bidirectional. */
  "PF1": "51",
  /** Physical pin 52: PF2; bidirectional. */
  "PF2": "52",
  /** Physical pin 53: PF0; bidirectional. */
  "PF0": "53",
  /** Physical pin 54: PF8; bidirectional. */
  "PF8": "54",
  /** Physical pin 55: PD1; bidirectional. */
  "PD1": "55",
  /** Physical pin 56: PF9; bidirectional. */
  "PF9": "56",
  /** Physical pin 57: PD0; bidirectional. */
  "PD0": "57",
  /** Physical pin 58: PG1; bidirectional. */
  "PG1": "58",
  /** Physical pin 59: PG0; bidirectional. */
  "PG0": "59",
  /** Physical pin 60: GND; power_in. */
  "GND_60": "60",
  /** Physical pin 61: PE1; bidirectional. */
  "PE1": "61",
  /** Physical pin 62: PE6; bidirectional. */
  "PE6": "62",
  /** Physical pin 63: PG9; bidirectional. */
  "PG9": "63",
  /** Physical pin 64: PG15; bidirectional. */
  "PG15": "64",
  /** Physical pin 65: PG12; bidirectional. */
  "PG12": "65",
  /** Physical pin 66: PG10; bidirectional. */
  "PG10": "66",
  /** Physical pin 67: NC; no_connect. */
  "NC_67": "67",
  /** Physical pin 68: PG13/ETH_TXD0; bidirectional. */
  "PG13/ETH_TXD0": "68",
  /** Physical pin 69: STLINK_RX/PD9; bidirectional. */
  "STLINK_RX/PD9": "69",
  /** Physical pin 70: PG11/ETH_TX_EN; bidirectional. */
  "PG11/ETH_TX_EN": "70",
  /** Physical pin 71: GND; power_in. */
  "GND_71": "71",
  /** Physical pin 72: GND; power_in. */
  "GND_72": "72",
  /** Physical pin 73: PC9; bidirectional. */
  "PC9": "73",
  /** Physical pin 74: PC8; bidirectional. */
  "PC8": "74",
  /** Physical pin 75: PB8; bidirectional. */
  "PB8": "75",
  /** Physical pin 76: PC6; bidirectional. */
  "PC6": "76",
  /** Physical pin 77: PB9; bidirectional. */
  "PB9": "77",
  /** Physical pin 78: ETH_RXD1/PC5; bidirectional. */
  "ETH_RXD1/PC5": "78",
  /** Physical pin 79: AVDD; power_in. */
  "AVDD": "79",
  /** Physical pin 80: U5V; power_in. */
  "U5V": "80",
  /** Physical pin 81: GND; power_in. */
  "GND_81": "81",
  /** Physical pin 82: STLINK_TX/PD8; bidirectional. */
  "STLINK_TX/PD8": "82",
  /** Physical pin 83: PA5; bidirectional. */
  "PA5": "83",
  /** Physical pin 84: USB_DP/PA12; bidirectional. */
  "USB_DP/PA12": "84",
  /** Physical pin 85: PA6; bidirectional. */
  "PA6": "85",
  /** Physical pin 86: USB_DM/PA11; bidirectional. */
  "USB_DM/PA11": "86",
  /** Physical pin 87: ETH_CRS_DV/PA7; bidirectional. */
  "ETH_CRS_DV/PA7": "87",
  /** Physical pin 88: PB12; bidirectional. */
  "PB12": "88",
  /** Physical pin 89: PB6; bidirectional. */
  "PB6": "89",
  /** Physical pin 90: PB11; bidirectional. */
  "PB11": "90",
  /** Physical pin 91: PC7; bidirectional. */
  "PC7": "91",
  /** Physical pin 92: GND; power_in. */
  "GND_92": "92",
  /** Physical pin 93: USB_VBUS/PA9; bidirectional. */
  "USB_VBUS/PA9": "93",
  /** Physical pin 94: PB2; bidirectional. */
  "PB2": "94",
  /** Physical pin 95: USB_SOF/PA8; bidirectional. */
  "USB_SOF/PA8": "95",
  /** Physical pin 96: PB1; bidirectional. */
  "PB1": "96",
  /** Physical pin 97: PB10; bidirectional. */
  "PB10": "97",
  /** Physical pin 98: PB15; bidirectional. */
  "PB15": "98",
  /** Physical pin 99: PB4; bidirectional. */
  "PB4": "99",
  /** Physical pin 100: LD3/PB14; bidirectional. */
  "LD3/PB14": "100",
  /** Physical pin 101: PB5; bidirectional. */
  "PB5": "101",
  /** Physical pin 102: ETH_TXD1/PB13; bidirectional. */
  "ETH_TXD1/PB13": "102",
  /** Physical pin 103: SWO/PB3; bidirectional. */
  "SWO/PB3": "103",
  /** Physical pin 104: AGND; power_in. */
  "AGND": "104",
  /** Physical pin 105: USB_ID/PA10; bidirectional. */
  "USB_ID/PA10": "105",
  /** Physical pin 106: ETH_RXD0/PC4; bidirectional. */
  "ETH_RXD0/PC4": "106",
  /** Physical pin 107: ETH_MDIO/PA2; bidirectional. */
  "ETH_MDIO/PA2": "107",
  /** Physical pin 108: PF5; bidirectional. */
  "PF5": "108",
  /** Physical pin 109: PA3; bidirectional. */
  "PA3": "109",
  /** Physical pin 110: PF4; bidirectional. */
  "PF4": "110",
  /** Physical pin 111: GND; power_in. */
  "GND_111": "111",
  /** Physical pin 112: PE8; bidirectional. */
  "PE8": "112",
  /** Physical pin 113: PD13; bidirectional. */
  "PD13": "113",
  /** Physical pin 114: PF10; bidirectional. */
  "PF10": "114",
  /** Physical pin 115: PD12; bidirectional. */
  "PD12": "115",
  /** Physical pin 116: PE7; bidirectional. */
  "PE7": "116",
  /** Physical pin 117: PD11; bidirectional. */
  "PD11": "117",
  /** Physical pin 118: PD14; bidirectional. */
  "PD14": "118",
  /** Physical pin 119: PE10; bidirectional. */
  "PE10": "119",
  /** Physical pin 120: PD15; bidirectional. */
  "PD15": "120",
  /** Physical pin 121: PE12; bidirectional. */
  "PE12": "121",
  /** Physical pin 122: PF14; bidirectional. */
  "PF14": "122",
  /** Physical pin 123: PE14; bidirectional. */
  "PE14": "123",
  /** Physical pin 124: PE9; bidirectional. */
  "PE9": "124",
  /** Physical pin 125: PE15; bidirectional. */
  "PE15": "125",
  /** Physical pin 126: GND; power_in. */
  "GND_126": "126",
  /** Physical pin 127: PE13; bidirectional. */
  "PE13": "127",
  /** Physical pin 128: PE11; bidirectional. */
  "PE11": "128",
  /** Physical pin 129: PF13; bidirectional. */
  "PF13": "129",
  /** Physical pin 130: PF3; bidirectional. */
  "PF3": "130",
  /** Physical pin 131: PF12; bidirectional. */
  "PF12": "131",
  /** Physical pin 132: PF15; bidirectional. */
  "PF15": "132",
  /** Physical pin 133: PG14; bidirectional. */
  "PG14": "133",
  /** Physical pin 134: PF11; bidirectional. */
  "PF11": "134",
  /** Physical pin 135: GND; power_in. */
  "GND_135": "135",
  /** Physical pin 136: PE0; bidirectional. */
  "PE0": "136",
  /** Physical pin 137: PD10; bidirectional. */
  "PD10": "137",
  /** Physical pin 138: PG8; bidirectional. */
  "PG8": "138",
  /** Physical pin 139: PG7/USB_GPIO_IN; bidirectional. */
  "PG7/USB_GPIO_IN": "139",
  /** Physical pin 140: PG5; bidirectional. */
  "PG5": "140",
  /** Physical pin 141: PG4; bidirectional. */
  "PG4": "141",
  /** Physical pin 142: PG6/USB_GPIO_OUT; bidirectional. */
  "PG6/USB_GPIO_OUT": "142",
  /** Physical pin 143: GND; power_in. */
  "GND_143": "143",
  /** Physical pin 144: GND; power_in. */
  "GND_144": "144",
}) {
  override schema = "MCU_Module:NUCLEO144-F413ZH";
  override referencePrefix = "U";
}

/**
 * Nucleo 144 Development Board with STM32F439ZIT6 MCU, 256kB RAM, 2Mb FLASH
 *
 * KiCad symbol: `MCU_Module:NUCLEO144-F439ZI`. Reference prefix: `U`.
 * Footprint filters: ST*Morpho*Connector*144*STLink*.
 * @see https://www.st.com/resource/en/user_manual/dm00244518-stm32-nucleo144-boards-stmicroelectronics.pdf
 * Keywords: STM32 Nucleo ST.
 * Default footprint: Module:ST_Morpho_Connector_144_STLink.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NUCLEO144_F439ZI extends Component.withPins({
  /** Physical pin 1: PC10; bidirectional. */
  "PC10": "1",
  /** Physical pin 2: PC11; bidirectional. */
  "PC11": "2",
  /** Physical pin 3: PC12; bidirectional. */
  "PC12": "3",
  /** Physical pin 4: PD2; bidirectional. */
  "PD2": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: E5V; power_in. */
  "E5V": "6",
  /** Physical pin 7: ~{BOOT0}; input. */
  "~{BOOT0}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: PF6; bidirectional. */
  "PF6": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: PF7; bidirectional. */
  "PF7": "11",
  /** Physical pin 12: IOREF; power_in. */
  "IOREF": "12",
  /** Physical pin 13: TMS/PA13; bidirectional. */
  "TMS/PA13": "13",
  /** Physical pin 14: ~{RST}; input. */
  "~{RST}": "14",
  /** Physical pin 15: TCK/PA14; bidirectional. */
  "TCK/PA14": "15",
  /** Physical pin 16: +3V3; power_in. */
  "+3V3": "16",
  /** Physical pin 17: PA15; bidirectional. */
  "PA15": "17",
  /** Physical pin 18: +5V; power_in. */
  "+5V": "18",
  /** Physical pin 19: GND; power_in. */
  "GND_19": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: LD2/PB7; bidirectional. */
  "LD2/PB7": "21",
  /** Physical pin 22: GND; power_in. */
  "GND_22": "22",
  /** Physical pin 23: BT/PC13; bidirectional. */
  "BT/PC13": "23",
  /** Physical pin 24: VIN; power_in. */
  "VIN": "24",
  /** Physical pin 25: RTC_CRYSTAL/PC14; bidirectional. */
  "RTC_CRYSTAL/PC14": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: RTC_CRYSTAL/PC15; bidirectional. */
  "RTC_CRYSTAL/PC15": "27",
  /** Physical pin 28: PA0; bidirectional. */
  "PA0": "28",
  /** Physical pin 29: PH0; bidirectional. */
  "PH0": "29",
  /** Physical pin 30: ETH_REF_CLK/PA1; bidirectional. */
  "ETH_REF_CLK/PA1": "30",
  /** Physical pin 31: PH1; bidirectional. */
  "PH1": "31",
  /** Physical pin 32: PA4; bidirectional. */
  "PA4": "32",
  /** Physical pin 33: VBAT; power_in. */
  "VBAT": "33",
  /** Physical pin 34: PB0; bidirectional. */
  "PB0": "34",
  /** Physical pin 35: PC2; bidirectional. */
  "PC2": "35",
  /** Physical pin 36: ETH_MDC/PC1; bidirectional. */
  "ETH_MDC/PC1": "36",
  /** Physical pin 37: PC3; bidirectional. */
  "PC3": "37",
  /** Physical pin 38: PC0; bidirectional. */
  "PC0": "38",
  /** Physical pin 39: PD4; bidirectional. */
  "PD4": "39",
  /** Physical pin 40: PD3; bidirectional. */
  "PD3": "40",
  /** Physical pin 41: PD5; bidirectional. */
  "PD5": "41",
  /** Physical pin 42: PG2; bidirectional. */
  "PG2": "42",
  /** Physical pin 43: PD6; bidirectional. */
  "PD6": "43",
  /** Physical pin 44: PG3; bidirectional. */
  "PG3": "44",
  /** Physical pin 45: PD7; bidirectional. */
  "PD7": "45",
  /** Physical pin 46: PE2; bidirectional. */
  "PE2": "46",
  /** Physical pin 47: PE3; bidirectional. */
  "PE3": "47",
  /** Physical pin 48: PE4; bidirectional. */
  "PE4": "48",
  /** Physical pin 49: GND; power_in. */
  "GND_49": "49",
  /** Physical pin 50: PE5; bidirectional. */
  "PE5": "50",
  /** Physical pin 51: PF1; bidirectional. */
  "PF1": "51",
  /** Physical pin 52: PF2; bidirectional. */
  "PF2": "52",
  /** Physical pin 53: PF0; bidirectional. */
  "PF0": "53",
  /** Physical pin 54: PF8; bidirectional. */
  "PF8": "54",
  /** Physical pin 55: PD1; bidirectional. */
  "PD1": "55",
  /** Physical pin 56: PF9; bidirectional. */
  "PF9": "56",
  /** Physical pin 57: PD0; bidirectional. */
  "PD0": "57",
  /** Physical pin 58: PG1; bidirectional. */
  "PG1": "58",
  /** Physical pin 59: PG0; bidirectional. */
  "PG0": "59",
  /** Physical pin 60: GND; power_in. */
  "GND_60": "60",
  /** Physical pin 61: PE1; bidirectional. */
  "PE1": "61",
  /** Physical pin 62: PE6; bidirectional. */
  "PE6": "62",
  /** Physical pin 63: PG9; bidirectional. */
  "PG9": "63",
  /** Physical pin 64: PG15; bidirectional. */
  "PG15": "64",
  /** Physical pin 65: PG12; bidirectional. */
  "PG12": "65",
  /** Physical pin 66: PG10; bidirectional. */
  "PG10": "66",
  /** Physical pin 67: NC; no_connect. */
  "NC_67": "67",
  /** Physical pin 68: PG13/ETH_TXD0; bidirectional. */
  "PG13/ETH_TXD0": "68",
  /** Physical pin 69: STLINK_RX/PD9; bidirectional. */
  "STLINK_RX/PD9": "69",
  /** Physical pin 70: PG11/ETH_TX_EN; bidirectional. */
  "PG11/ETH_TX_EN": "70",
  /** Physical pin 71: GND; power_in. */
  "GND_71": "71",
  /** Physical pin 72: GND; power_in. */
  "GND_72": "72",
  /** Physical pin 73: PC9; bidirectional. */
  "PC9": "73",
  /** Physical pin 74: PC8; bidirectional. */
  "PC8": "74",
  /** Physical pin 75: PB8; bidirectional. */
  "PB8": "75",
  /** Physical pin 76: PC6; bidirectional. */
  "PC6": "76",
  /** Physical pin 77: PB9; bidirectional. */
  "PB9": "77",
  /** Physical pin 78: ETH_RXD1/PC5; bidirectional. */
  "ETH_RXD1/PC5": "78",
  /** Physical pin 79: AVDD; power_in. */
  "AVDD": "79",
  /** Physical pin 80: U5V; power_in. */
  "U5V": "80",
  /** Physical pin 81: GND; power_in. */
  "GND_81": "81",
  /** Physical pin 82: STLINK_TX/PD8; bidirectional. */
  "STLINK_TX/PD8": "82",
  /** Physical pin 83: PA5; bidirectional. */
  "PA5": "83",
  /** Physical pin 84: USB_DP/PA12; bidirectional. */
  "USB_DP/PA12": "84",
  /** Physical pin 85: PA6; bidirectional. */
  "PA6": "85",
  /** Physical pin 86: USB_DM/PA11; bidirectional. */
  "USB_DM/PA11": "86",
  /** Physical pin 87: ETH_CRS_DV/PA7; bidirectional. */
  "ETH_CRS_DV/PA7": "87",
  /** Physical pin 88: PB12; bidirectional. */
  "PB12": "88",
  /** Physical pin 89: PB6; bidirectional. */
  "PB6": "89",
  /** Physical pin 90: PB11; bidirectional. */
  "PB11": "90",
  /** Physical pin 91: PC7; bidirectional. */
  "PC7": "91",
  /** Physical pin 92: GND; power_in. */
  "GND_92": "92",
  /** Physical pin 93: USB_VBUS/PA9; bidirectional. */
  "USB_VBUS/PA9": "93",
  /** Physical pin 94: PB2; bidirectional. */
  "PB2": "94",
  /** Physical pin 95: USB_SOF/PA8; bidirectional. */
  "USB_SOF/PA8": "95",
  /** Physical pin 96: PB1; bidirectional. */
  "PB1": "96",
  /** Physical pin 97: PB10; bidirectional. */
  "PB10": "97",
  /** Physical pin 98: PB15; bidirectional. */
  "PB15": "98",
  /** Physical pin 99: PB4; bidirectional. */
  "PB4": "99",
  /** Physical pin 100: LD3/PB14; bidirectional. */
  "LD3/PB14": "100",
  /** Physical pin 101: PB5; bidirectional. */
  "PB5": "101",
  /** Physical pin 102: ETH_TXD1/PB13; bidirectional. */
  "ETH_TXD1/PB13": "102",
  /** Physical pin 103: SWO/PB3; bidirectional. */
  "SWO/PB3": "103",
  /** Physical pin 104: AGND; power_in. */
  "AGND": "104",
  /** Physical pin 105: USB_ID/PA10; bidirectional. */
  "USB_ID/PA10": "105",
  /** Physical pin 106: ETH_RXD0/PC4; bidirectional. */
  "ETH_RXD0/PC4": "106",
  /** Physical pin 107: ETH_MDIO/PA2; bidirectional. */
  "ETH_MDIO/PA2": "107",
  /** Physical pin 108: PF5; bidirectional. */
  "PF5": "108",
  /** Physical pin 109: PA3; bidirectional. */
  "PA3": "109",
  /** Physical pin 110: PF4; bidirectional. */
  "PF4": "110",
  /** Physical pin 111: GND; power_in. */
  "GND_111": "111",
  /** Physical pin 112: PE8; bidirectional. */
  "PE8": "112",
  /** Physical pin 113: PD13; bidirectional. */
  "PD13": "113",
  /** Physical pin 114: PF10; bidirectional. */
  "PF10": "114",
  /** Physical pin 115: PD12; bidirectional. */
  "PD12": "115",
  /** Physical pin 116: PE7; bidirectional. */
  "PE7": "116",
  /** Physical pin 117: PD11; bidirectional. */
  "PD11": "117",
  /** Physical pin 118: PD14; bidirectional. */
  "PD14": "118",
  /** Physical pin 119: PE10; bidirectional. */
  "PE10": "119",
  /** Physical pin 120: PD15; bidirectional. */
  "PD15": "120",
  /** Physical pin 121: PE12; bidirectional. */
  "PE12": "121",
  /** Physical pin 122: PF14; bidirectional. */
  "PF14": "122",
  /** Physical pin 123: PE14; bidirectional. */
  "PE14": "123",
  /** Physical pin 124: PE9; bidirectional. */
  "PE9": "124",
  /** Physical pin 125: PE15; bidirectional. */
  "PE15": "125",
  /** Physical pin 126: GND; power_in. */
  "GND_126": "126",
  /** Physical pin 127: PE13; bidirectional. */
  "PE13": "127",
  /** Physical pin 128: PE11; bidirectional. */
  "PE11": "128",
  /** Physical pin 129: PF13; bidirectional. */
  "PF13": "129",
  /** Physical pin 130: PF3; bidirectional. */
  "PF3": "130",
  /** Physical pin 131: PF12; bidirectional. */
  "PF12": "131",
  /** Physical pin 132: PF15; bidirectional. */
  "PF15": "132",
  /** Physical pin 133: PG14; bidirectional. */
  "PG14": "133",
  /** Physical pin 134: PF11; bidirectional. */
  "PF11": "134",
  /** Physical pin 135: GND; power_in. */
  "GND_135": "135",
  /** Physical pin 136: PE0; bidirectional. */
  "PE0": "136",
  /** Physical pin 137: PD10; bidirectional. */
  "PD10": "137",
  /** Physical pin 138: PG8; bidirectional. */
  "PG8": "138",
  /** Physical pin 139: PG7/USB_GPIO_IN; bidirectional. */
  "PG7/USB_GPIO_IN": "139",
  /** Physical pin 140: PG5; bidirectional. */
  "PG5": "140",
  /** Physical pin 141: PG4; bidirectional. */
  "PG4": "141",
  /** Physical pin 142: PG6/USB_GPIO_OUT; bidirectional. */
  "PG6/USB_GPIO_OUT": "142",
  /** Physical pin 143: GND; power_in. */
  "GND_143": "143",
  /** Physical pin 144: GND; power_in. */
  "GND_144": "144",
}) {
  override schema = "MCU_Module:NUCLEO144-F439ZI";
  override referencePrefix = "U";
}

/**
 * Nucleo 144 Development Board with STM32F446ZET6 MCU, 128kB RAM, 512Kb FLASH
 *
 * KiCad symbol: `MCU_Module:NUCLEO144-F446ZE`. Reference prefix: `U`.
 * Footprint filters: ST*Morpho*Connector*144*STLink*.
 * @see https://www.st.com/resource/en/user_manual/dm00244518-stm32-nucleo144-boards-stmicroelectronics.pdf
 * Keywords: STM32 Nucleo ST.
 * Default footprint: Module:ST_Morpho_Connector_144_STLink.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NUCLEO144_F446ZE extends Component.withPins({
  /** Physical pin 1: PC10; bidirectional. */
  "PC10": "1",
  /** Physical pin 2: PC11; bidirectional. */
  "PC11": "2",
  /** Physical pin 3: PC12; bidirectional. */
  "PC12": "3",
  /** Physical pin 4: PD2; bidirectional. */
  "PD2": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: E5V; power_in. */
  "E5V": "6",
  /** Physical pin 7: ~{BOOT0}; input. */
  "~{BOOT0}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: PF6; bidirectional. */
  "PF6": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: PF7; bidirectional. */
  "PF7": "11",
  /** Physical pin 12: IOREF; power_in. */
  "IOREF": "12",
  /** Physical pin 13: TMS/PA13; bidirectional. */
  "TMS/PA13": "13",
  /** Physical pin 14: ~{RST}; input. */
  "~{RST}": "14",
  /** Physical pin 15: TCK/PA14; bidirectional. */
  "TCK/PA14": "15",
  /** Physical pin 16: +3V3; power_in. */
  "+3V3": "16",
  /** Physical pin 17: PA15; bidirectional. */
  "PA15": "17",
  /** Physical pin 18: +5V; power_in. */
  "+5V": "18",
  /** Physical pin 19: GND; power_in. */
  "GND_19": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: LD2/PB7; bidirectional. */
  "LD2/PB7": "21",
  /** Physical pin 22: GND; power_in. */
  "GND_22": "22",
  /** Physical pin 23: BT/PC13; bidirectional. */
  "BT/PC13": "23",
  /** Physical pin 24: VIN; power_in. */
  "VIN": "24",
  /** Physical pin 25: RTC_CRYSTAL/PC14; bidirectional. */
  "RTC_CRYSTAL/PC14": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: RTC_CRYSTAL/PC15; bidirectional. */
  "RTC_CRYSTAL/PC15": "27",
  /** Physical pin 28: PA0; bidirectional. */
  "PA0": "28",
  /** Physical pin 29: PH0; bidirectional. */
  "PH0": "29",
  /** Physical pin 30: ETH_REF_CLK/PA1; bidirectional. */
  "ETH_REF_CLK/PA1": "30",
  /** Physical pin 31: PH1; bidirectional. */
  "PH1": "31",
  /** Physical pin 32: PA4; bidirectional. */
  "PA4": "32",
  /** Physical pin 33: VBAT; power_in. */
  "VBAT": "33",
  /** Physical pin 34: PB0; bidirectional. */
  "PB0": "34",
  /** Physical pin 35: PC2; bidirectional. */
  "PC2": "35",
  /** Physical pin 36: ETH_MDC/PC1; bidirectional. */
  "ETH_MDC/PC1": "36",
  /** Physical pin 37: PC3; bidirectional. */
  "PC3": "37",
  /** Physical pin 38: PC0; bidirectional. */
  "PC0": "38",
  /** Physical pin 39: PD4; bidirectional. */
  "PD4": "39",
  /** Physical pin 40: PD3; bidirectional. */
  "PD3": "40",
  /** Physical pin 41: PD5; bidirectional. */
  "PD5": "41",
  /** Physical pin 42: PG2; bidirectional. */
  "PG2": "42",
  /** Physical pin 43: PD6; bidirectional. */
  "PD6": "43",
  /** Physical pin 44: PG3; bidirectional. */
  "PG3": "44",
  /** Physical pin 45: PD7; bidirectional. */
  "PD7": "45",
  /** Physical pin 46: PE2; bidirectional. */
  "PE2": "46",
  /** Physical pin 47: PE3; bidirectional. */
  "PE3": "47",
  /** Physical pin 48: PE4; bidirectional. */
  "PE4": "48",
  /** Physical pin 49: GND; power_in. */
  "GND_49": "49",
  /** Physical pin 50: PE5; bidirectional. */
  "PE5": "50",
  /** Physical pin 51: PF1; bidirectional. */
  "PF1": "51",
  /** Physical pin 52: PF2; bidirectional. */
  "PF2": "52",
  /** Physical pin 53: PF0; bidirectional. */
  "PF0": "53",
  /** Physical pin 54: PF8; bidirectional. */
  "PF8": "54",
  /** Physical pin 55: PD1; bidirectional. */
  "PD1": "55",
  /** Physical pin 56: PF9; bidirectional. */
  "PF9": "56",
  /** Physical pin 57: PD0; bidirectional. */
  "PD0": "57",
  /** Physical pin 58: PG1; bidirectional. */
  "PG1": "58",
  /** Physical pin 59: PG0; bidirectional. */
  "PG0": "59",
  /** Physical pin 60: GND; power_in. */
  "GND_60": "60",
  /** Physical pin 61: PE1; bidirectional. */
  "PE1": "61",
  /** Physical pin 62: PE6; bidirectional. */
  "PE6": "62",
  /** Physical pin 63: PG9; bidirectional. */
  "PG9": "63",
  /** Physical pin 64: PG15; bidirectional. */
  "PG15": "64",
  /** Physical pin 65: PG12; bidirectional. */
  "PG12": "65",
  /** Physical pin 66: PG10; bidirectional. */
  "PG10": "66",
  /** Physical pin 67: NC; no_connect. */
  "NC_67": "67",
  /** Physical pin 68: PG13/ETH_TXD0; bidirectional. */
  "PG13/ETH_TXD0": "68",
  /** Physical pin 69: STLINK_RX/PD9; bidirectional. */
  "STLINK_RX/PD9": "69",
  /** Physical pin 70: PG11/ETH_TX_EN; bidirectional. */
  "PG11/ETH_TX_EN": "70",
  /** Physical pin 71: GND; power_in. */
  "GND_71": "71",
  /** Physical pin 72: GND; power_in. */
  "GND_72": "72",
  /** Physical pin 73: PC9; bidirectional. */
  "PC9": "73",
  /** Physical pin 74: PC8; bidirectional. */
  "PC8": "74",
  /** Physical pin 75: PB8; bidirectional. */
  "PB8": "75",
  /** Physical pin 76: PC6; bidirectional. */
  "PC6": "76",
  /** Physical pin 77: PB9; bidirectional. */
  "PB9": "77",
  /** Physical pin 78: ETH_RXD1/PC5; bidirectional. */
  "ETH_RXD1/PC5": "78",
  /** Physical pin 79: AVDD; power_in. */
  "AVDD": "79",
  /** Physical pin 80: U5V; power_in. */
  "U5V": "80",
  /** Physical pin 81: GND; power_in. */
  "GND_81": "81",
  /** Physical pin 82: STLINK_TX/PD8; bidirectional. */
  "STLINK_TX/PD8": "82",
  /** Physical pin 83: PA5; bidirectional. */
  "PA5": "83",
  /** Physical pin 84: USB_DP/PA12; bidirectional. */
  "USB_DP/PA12": "84",
  /** Physical pin 85: PA6; bidirectional. */
  "PA6": "85",
  /** Physical pin 86: USB_DM/PA11; bidirectional. */
  "USB_DM/PA11": "86",
  /** Physical pin 87: ETH_CRS_DV/PA7; bidirectional. */
  "ETH_CRS_DV/PA7": "87",
  /** Physical pin 88: PB12; bidirectional. */
  "PB12": "88",
  /** Physical pin 89: PB6; bidirectional. */
  "PB6": "89",
  /** Physical pin 90: PB11; bidirectional. */
  "PB11": "90",
  /** Physical pin 91: PC7; bidirectional. */
  "PC7": "91",
  /** Physical pin 92: GND; power_in. */
  "GND_92": "92",
  /** Physical pin 93: USB_VBUS/PA9; bidirectional. */
  "USB_VBUS/PA9": "93",
  /** Physical pin 94: PB2; bidirectional. */
  "PB2": "94",
  /** Physical pin 95: USB_SOF/PA8; bidirectional. */
  "USB_SOF/PA8": "95",
  /** Physical pin 96: PB1; bidirectional. */
  "PB1": "96",
  /** Physical pin 97: PB10; bidirectional. */
  "PB10": "97",
  /** Physical pin 98: PB15; bidirectional. */
  "PB15": "98",
  /** Physical pin 99: PB4; bidirectional. */
  "PB4": "99",
  /** Physical pin 100: LD3/PB14; bidirectional. */
  "LD3/PB14": "100",
  /** Physical pin 101: PB5; bidirectional. */
  "PB5": "101",
  /** Physical pin 102: ETH_TXD1/PB13; bidirectional. */
  "ETH_TXD1/PB13": "102",
  /** Physical pin 103: SWO/PB3; bidirectional. */
  "SWO/PB3": "103",
  /** Physical pin 104: AGND; power_in. */
  "AGND": "104",
  /** Physical pin 105: USB_ID/PA10; bidirectional. */
  "USB_ID/PA10": "105",
  /** Physical pin 106: ETH_RXD0/PC4; bidirectional. */
  "ETH_RXD0/PC4": "106",
  /** Physical pin 107: ETH_MDIO/PA2; bidirectional. */
  "ETH_MDIO/PA2": "107",
  /** Physical pin 108: PF5; bidirectional. */
  "PF5": "108",
  /** Physical pin 109: PA3; bidirectional. */
  "PA3": "109",
  /** Physical pin 110: PF4; bidirectional. */
  "PF4": "110",
  /** Physical pin 111: GND; power_in. */
  "GND_111": "111",
  /** Physical pin 112: PE8; bidirectional. */
  "PE8": "112",
  /** Physical pin 113: PD13; bidirectional. */
  "PD13": "113",
  /** Physical pin 114: PF10; bidirectional. */
  "PF10": "114",
  /** Physical pin 115: PD12; bidirectional. */
  "PD12": "115",
  /** Physical pin 116: PE7; bidirectional. */
  "PE7": "116",
  /** Physical pin 117: PD11; bidirectional. */
  "PD11": "117",
  /** Physical pin 118: PD14; bidirectional. */
  "PD14": "118",
  /** Physical pin 119: PE10; bidirectional. */
  "PE10": "119",
  /** Physical pin 120: PD15; bidirectional. */
  "PD15": "120",
  /** Physical pin 121: PE12; bidirectional. */
  "PE12": "121",
  /** Physical pin 122: PF14; bidirectional. */
  "PF14": "122",
  /** Physical pin 123: PE14; bidirectional. */
  "PE14": "123",
  /** Physical pin 124: PE9; bidirectional. */
  "PE9": "124",
  /** Physical pin 125: PE15; bidirectional. */
  "PE15": "125",
  /** Physical pin 126: GND; power_in. */
  "GND_126": "126",
  /** Physical pin 127: PE13; bidirectional. */
  "PE13": "127",
  /** Physical pin 128: PE11; bidirectional. */
  "PE11": "128",
  /** Physical pin 129: PF13; bidirectional. */
  "PF13": "129",
  /** Physical pin 130: PF3; bidirectional. */
  "PF3": "130",
  /** Physical pin 131: PF12; bidirectional. */
  "PF12": "131",
  /** Physical pin 132: PF15; bidirectional. */
  "PF15": "132",
  /** Physical pin 133: PG14; bidirectional. */
  "PG14": "133",
  /** Physical pin 134: PF11; bidirectional. */
  "PF11": "134",
  /** Physical pin 135: GND; power_in. */
  "GND_135": "135",
  /** Physical pin 136: PE0; bidirectional. */
  "PE0": "136",
  /** Physical pin 137: PD10; bidirectional. */
  "PD10": "137",
  /** Physical pin 138: PG8; bidirectional. */
  "PG8": "138",
  /** Physical pin 139: PG7/USB_GPIO_IN; bidirectional. */
  "PG7/USB_GPIO_IN": "139",
  /** Physical pin 140: PG5; bidirectional. */
  "PG5": "140",
  /** Physical pin 141: PG4; bidirectional. */
  "PG4": "141",
  /** Physical pin 142: PG6/USB_GPIO_OUT; bidirectional. */
  "PG6/USB_GPIO_OUT": "142",
  /** Physical pin 143: GND; power_in. */
  "GND_143": "143",
  /** Physical pin 144: GND; power_in. */
  "GND_144": "144",
}) {
  override schema = "MCU_Module:NUCLEO144-F446ZE";
  override referencePrefix = "U";
}

/**
 * Nucleo 144 Development Board with STM32F722ZET6 MCU, 256kB RAM, 512Kb FLASH
 *
 * KiCad symbol: `MCU_Module:NUCLEO144-F722ZE`. Reference prefix: `U`.
 * Footprint filters: ST*Morpho*Connector*144*STLink*.
 * @see https://www.st.com/resource/en/user_manual/dm00244518-stm32-nucleo144-boards-stmicroelectronics.pdf
 * Keywords: STM32 Nucleo ST.
 * Default footprint: Module:ST_Morpho_Connector_144_STLink.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NUCLEO144_F722ZE extends Component.withPins({
  /** Physical pin 1: PC10; bidirectional. */
  "PC10": "1",
  /** Physical pin 2: PC11; bidirectional. */
  "PC11": "2",
  /** Physical pin 3: PC12; bidirectional. */
  "PC12": "3",
  /** Physical pin 4: PD2; bidirectional. */
  "PD2": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: E5V; power_in. */
  "E5V": "6",
  /** Physical pin 7: ~{BOOT0}; input. */
  "~{BOOT0}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: PF6; bidirectional. */
  "PF6": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: PF7; bidirectional. */
  "PF7": "11",
  /** Physical pin 12: IOREF; power_in. */
  "IOREF": "12",
  /** Physical pin 13: TMS/PA13; bidirectional. */
  "TMS/PA13": "13",
  /** Physical pin 14: ~{RST}; input. */
  "~{RST}": "14",
  /** Physical pin 15: TCK/PA14; bidirectional. */
  "TCK/PA14": "15",
  /** Physical pin 16: +3V3; power_in. */
  "+3V3": "16",
  /** Physical pin 17: PA15; bidirectional. */
  "PA15": "17",
  /** Physical pin 18: +5V; power_in. */
  "+5V": "18",
  /** Physical pin 19: GND; power_in. */
  "GND_19": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: LD2/PB7; bidirectional. */
  "LD2/PB7": "21",
  /** Physical pin 22: GND; power_in. */
  "GND_22": "22",
  /** Physical pin 23: BT/PC13; bidirectional. */
  "BT/PC13": "23",
  /** Physical pin 24: VIN; power_in. */
  "VIN": "24",
  /** Physical pin 25: RTC_CRYSTAL/PC14; bidirectional. */
  "RTC_CRYSTAL/PC14": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: RTC_CRYSTAL/PC15; bidirectional. */
  "RTC_CRYSTAL/PC15": "27",
  /** Physical pin 28: PA0; bidirectional. */
  "PA0": "28",
  /** Physical pin 29: PH0; bidirectional. */
  "PH0": "29",
  /** Physical pin 30: ETH_REF_CLK/PA1; bidirectional. */
  "ETH_REF_CLK/PA1": "30",
  /** Physical pin 31: PH1; bidirectional. */
  "PH1": "31",
  /** Physical pin 32: PA4; bidirectional. */
  "PA4": "32",
  /** Physical pin 33: VBAT; power_in. */
  "VBAT": "33",
  /** Physical pin 34: PB0; bidirectional. */
  "PB0": "34",
  /** Physical pin 35: PC2; bidirectional. */
  "PC2": "35",
  /** Physical pin 36: ETH_MDC/PC1; bidirectional. */
  "ETH_MDC/PC1": "36",
  /** Physical pin 37: PC3; bidirectional. */
  "PC3": "37",
  /** Physical pin 38: PC0; bidirectional. */
  "PC0": "38",
  /** Physical pin 39: PD4; bidirectional. */
  "PD4": "39",
  /** Physical pin 40: PD3; bidirectional. */
  "PD3": "40",
  /** Physical pin 41: PD5; bidirectional. */
  "PD5": "41",
  /** Physical pin 42: PG2; bidirectional. */
  "PG2": "42",
  /** Physical pin 43: PD6; bidirectional. */
  "PD6": "43",
  /** Physical pin 44: PG3; bidirectional. */
  "PG3": "44",
  /** Physical pin 45: PD7; bidirectional. */
  "PD7": "45",
  /** Physical pin 46: PE2; bidirectional. */
  "PE2": "46",
  /** Physical pin 47: PE3; bidirectional. */
  "PE3": "47",
  /** Physical pin 48: PE4; bidirectional. */
  "PE4": "48",
  /** Physical pin 49: GND; power_in. */
  "GND_49": "49",
  /** Physical pin 50: PE5; bidirectional. */
  "PE5": "50",
  /** Physical pin 51: PF1; bidirectional. */
  "PF1": "51",
  /** Physical pin 52: PF2; bidirectional. */
  "PF2": "52",
  /** Physical pin 53: PF0; bidirectional. */
  "PF0": "53",
  /** Physical pin 54: PF8; bidirectional. */
  "PF8": "54",
  /** Physical pin 55: PD1; bidirectional. */
  "PD1": "55",
  /** Physical pin 56: PF9; bidirectional. */
  "PF9": "56",
  /** Physical pin 57: PD0; bidirectional. */
  "PD0": "57",
  /** Physical pin 58: PG1; bidirectional. */
  "PG1": "58",
  /** Physical pin 59: PG0; bidirectional. */
  "PG0": "59",
  /** Physical pin 60: GND; power_in. */
  "GND_60": "60",
  /** Physical pin 61: PE1; bidirectional. */
  "PE1": "61",
  /** Physical pin 62: PE6; bidirectional. */
  "PE6": "62",
  /** Physical pin 63: PG9; bidirectional. */
  "PG9": "63",
  /** Physical pin 64: PG15; bidirectional. */
  "PG15": "64",
  /** Physical pin 65: PG12; bidirectional. */
  "PG12": "65",
  /** Physical pin 66: PG10; bidirectional. */
  "PG10": "66",
  /** Physical pin 67: NC; no_connect. */
  "NC_67": "67",
  /** Physical pin 68: PG13/ETH_TXD0; bidirectional. */
  "PG13/ETH_TXD0": "68",
  /** Physical pin 69: STLINK_RX/PD9; bidirectional. */
  "STLINK_RX/PD9": "69",
  /** Physical pin 70: PG11/ETH_TX_EN; bidirectional. */
  "PG11/ETH_TX_EN": "70",
  /** Physical pin 71: GND; power_in. */
  "GND_71": "71",
  /** Physical pin 72: GND; power_in. */
  "GND_72": "72",
  /** Physical pin 73: PC9; bidirectional. */
  "PC9": "73",
  /** Physical pin 74: PC8; bidirectional. */
  "PC8": "74",
  /** Physical pin 75: PB8; bidirectional. */
  "PB8": "75",
  /** Physical pin 76: PC6; bidirectional. */
  "PC6": "76",
  /** Physical pin 77: PB9; bidirectional. */
  "PB9": "77",
  /** Physical pin 78: ETH_RXD1/PC5; bidirectional. */
  "ETH_RXD1/PC5": "78",
  /** Physical pin 79: AVDD; power_in. */
  "AVDD": "79",
  /** Physical pin 80: U5V; power_in. */
  "U5V": "80",
  /** Physical pin 81: GND; power_in. */
  "GND_81": "81",
  /** Physical pin 82: STLINK_TX/PD8; bidirectional. */
  "STLINK_TX/PD8": "82",
  /** Physical pin 83: PA5; bidirectional. */
  "PA5": "83",
  /** Physical pin 84: USB_DP/PA12; bidirectional. */
  "USB_DP/PA12": "84",
  /** Physical pin 85: PA6; bidirectional. */
  "PA6": "85",
  /** Physical pin 86: USB_DM/PA11; bidirectional. */
  "USB_DM/PA11": "86",
  /** Physical pin 87: ETH_CRS_DV/PA7; bidirectional. */
  "ETH_CRS_DV/PA7": "87",
  /** Physical pin 88: PB12; bidirectional. */
  "PB12": "88",
  /** Physical pin 89: PB6; bidirectional. */
  "PB6": "89",
  /** Physical pin 90: PB11; bidirectional. */
  "PB11": "90",
  /** Physical pin 91: PC7; bidirectional. */
  "PC7": "91",
  /** Physical pin 92: GND; power_in. */
  "GND_92": "92",
  /** Physical pin 93: USB_VBUS/PA9; bidirectional. */
  "USB_VBUS/PA9": "93",
  /** Physical pin 94: PB2; bidirectional. */
  "PB2": "94",
  /** Physical pin 95: USB_SOF/PA8; bidirectional. */
  "USB_SOF/PA8": "95",
  /** Physical pin 96: PB1; bidirectional. */
  "PB1": "96",
  /** Physical pin 97: PB10; bidirectional. */
  "PB10": "97",
  /** Physical pin 98: PB15; bidirectional. */
  "PB15": "98",
  /** Physical pin 99: PB4; bidirectional. */
  "PB4": "99",
  /** Physical pin 100: LD3/PB14; bidirectional. */
  "LD3/PB14": "100",
  /** Physical pin 101: PB5; bidirectional. */
  "PB5": "101",
  /** Physical pin 102: ETH_TXD1/PB13; bidirectional. */
  "ETH_TXD1/PB13": "102",
  /** Physical pin 103: SWO/PB3; bidirectional. */
  "SWO/PB3": "103",
  /** Physical pin 104: AGND; power_in. */
  "AGND": "104",
  /** Physical pin 105: USB_ID/PA10; bidirectional. */
  "USB_ID/PA10": "105",
  /** Physical pin 106: ETH_RXD0/PC4; bidirectional. */
  "ETH_RXD0/PC4": "106",
  /** Physical pin 107: ETH_MDIO/PA2; bidirectional. */
  "ETH_MDIO/PA2": "107",
  /** Physical pin 108: PF5; bidirectional. */
  "PF5": "108",
  /** Physical pin 109: PA3; bidirectional. */
  "PA3": "109",
  /** Physical pin 110: PF4; bidirectional. */
  "PF4": "110",
  /** Physical pin 111: GND; power_in. */
  "GND_111": "111",
  /** Physical pin 112: PE8; bidirectional. */
  "PE8": "112",
  /** Physical pin 113: PD13; bidirectional. */
  "PD13": "113",
  /** Physical pin 114: PF10; bidirectional. */
  "PF10": "114",
  /** Physical pin 115: PD12; bidirectional. */
  "PD12": "115",
  /** Physical pin 116: PE7; bidirectional. */
  "PE7": "116",
  /** Physical pin 117: PD11; bidirectional. */
  "PD11": "117",
  /** Physical pin 118: PD14; bidirectional. */
  "PD14": "118",
  /** Physical pin 119: PE10; bidirectional. */
  "PE10": "119",
  /** Physical pin 120: PD15; bidirectional. */
  "PD15": "120",
  /** Physical pin 121: PE12; bidirectional. */
  "PE12": "121",
  /** Physical pin 122: PF14; bidirectional. */
  "PF14": "122",
  /** Physical pin 123: PE14; bidirectional. */
  "PE14": "123",
  /** Physical pin 124: PE9; bidirectional. */
  "PE9": "124",
  /** Physical pin 125: PE15; bidirectional. */
  "PE15": "125",
  /** Physical pin 126: GND; power_in. */
  "GND_126": "126",
  /** Physical pin 127: PE13; bidirectional. */
  "PE13": "127",
  /** Physical pin 128: PE11; bidirectional. */
  "PE11": "128",
  /** Physical pin 129: PF13; bidirectional. */
  "PF13": "129",
  /** Physical pin 130: PF3; bidirectional. */
  "PF3": "130",
  /** Physical pin 131: PF12; bidirectional. */
  "PF12": "131",
  /** Physical pin 132: PF15; bidirectional. */
  "PF15": "132",
  /** Physical pin 133: PG14; bidirectional. */
  "PG14": "133",
  /** Physical pin 134: PF11; bidirectional. */
  "PF11": "134",
  /** Physical pin 135: GND; power_in. */
  "GND_135": "135",
  /** Physical pin 136: PE0; bidirectional. */
  "PE0": "136",
  /** Physical pin 137: PD10; bidirectional. */
  "PD10": "137",
  /** Physical pin 138: PG8; bidirectional. */
  "PG8": "138",
  /** Physical pin 139: PG7/USB_GPIO_IN; bidirectional. */
  "PG7/USB_GPIO_IN": "139",
  /** Physical pin 140: PG5; bidirectional. */
  "PG5": "140",
  /** Physical pin 141: PG4; bidirectional. */
  "PG4": "141",
  /** Physical pin 142: PG6/USB_GPIO_OUT; bidirectional. */
  "PG6/USB_GPIO_OUT": "142",
  /** Physical pin 143: GND; power_in. */
  "GND_143": "143",
  /** Physical pin 144: GND; power_in. */
  "GND_144": "144",
}) {
  override schema = "MCU_Module:NUCLEO144-F722ZE";
  override referencePrefix = "U";
}

/**
 * Nucleo 144 Development Board with STM32F746ZG MCU, 256kB RAM, 1Mb FLASH
 *
 * KiCad symbol: `MCU_Module:NUCLEO144-F746ZG`. Reference prefix: `U`.
 * Footprint filters: ST*Morpho*Connector*144*STLink*.
 * @see https://www.st.com/resource/en/user_manual/dm00244518-stm32-nucleo144-boards-stmicroelectronics.pdf
 * Keywords: STM32 Nucleo ST.
 * Default footprint: Module:ST_Morpho_Connector_144_STLink.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NUCLEO144_F746ZG extends Component.withPins({
  /** Physical pin 1: PC10; bidirectional. */
  "PC10": "1",
  /** Physical pin 2: PC11; bidirectional. */
  "PC11": "2",
  /** Physical pin 3: PC12; bidirectional. */
  "PC12": "3",
  /** Physical pin 4: PD2; bidirectional. */
  "PD2": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: E5V; power_in. */
  "E5V": "6",
  /** Physical pin 7: ~{BOOT0}; input. */
  "~{BOOT0}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: PF6; bidirectional. */
  "PF6": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: PF7; bidirectional. */
  "PF7": "11",
  /** Physical pin 12: IOREF; power_in. */
  "IOREF": "12",
  /** Physical pin 13: TMS/PA13; bidirectional. */
  "TMS/PA13": "13",
  /** Physical pin 14: ~{RST}; input. */
  "~{RST}": "14",
  /** Physical pin 15: TCK/PA14; bidirectional. */
  "TCK/PA14": "15",
  /** Physical pin 16: +3V3; power_in. */
  "+3V3": "16",
  /** Physical pin 17: PA15; bidirectional. */
  "PA15": "17",
  /** Physical pin 18: +5V; power_in. */
  "+5V": "18",
  /** Physical pin 19: GND; power_in. */
  "GND_19": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: LD2/PB7; bidirectional. */
  "LD2/PB7": "21",
  /** Physical pin 22: GND; power_in. */
  "GND_22": "22",
  /** Physical pin 23: BT/PC13; bidirectional. */
  "BT/PC13": "23",
  /** Physical pin 24: VIN; power_in. */
  "VIN": "24",
  /** Physical pin 25: RTC_CRYSTAL/PC14; bidirectional. */
  "RTC_CRYSTAL/PC14": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: RTC_CRYSTAL/PC15; bidirectional. */
  "RTC_CRYSTAL/PC15": "27",
  /** Physical pin 28: PA0; bidirectional. */
  "PA0": "28",
  /** Physical pin 29: PH0; bidirectional. */
  "PH0": "29",
  /** Physical pin 30: ETH_REF_CLK/PA1; bidirectional. */
  "ETH_REF_CLK/PA1": "30",
  /** Physical pin 31: PH1; bidirectional. */
  "PH1": "31",
  /** Physical pin 32: PA4; bidirectional. */
  "PA4": "32",
  /** Physical pin 33: VBAT; power_in. */
  "VBAT": "33",
  /** Physical pin 34: PB0; bidirectional. */
  "PB0": "34",
  /** Physical pin 35: PC2; bidirectional. */
  "PC2": "35",
  /** Physical pin 36: ETH_MDC/PC1; bidirectional. */
  "ETH_MDC/PC1": "36",
  /** Physical pin 37: PC3; bidirectional. */
  "PC3": "37",
  /** Physical pin 38: PC0; bidirectional. */
  "PC0": "38",
  /** Physical pin 39: PD4; bidirectional. */
  "PD4": "39",
  /** Physical pin 40: PD3; bidirectional. */
  "PD3": "40",
  /** Physical pin 41: PD5; bidirectional. */
  "PD5": "41",
  /** Physical pin 42: PG2; bidirectional. */
  "PG2": "42",
  /** Physical pin 43: PD6; bidirectional. */
  "PD6": "43",
  /** Physical pin 44: PG3; bidirectional. */
  "PG3": "44",
  /** Physical pin 45: PD7; bidirectional. */
  "PD7": "45",
  /** Physical pin 46: PE2; bidirectional. */
  "PE2": "46",
  /** Physical pin 47: PE3; bidirectional. */
  "PE3": "47",
  /** Physical pin 48: PE4; bidirectional. */
  "PE4": "48",
  /** Physical pin 49: GND; power_in. */
  "GND_49": "49",
  /** Physical pin 50: PE5; bidirectional. */
  "PE5": "50",
  /** Physical pin 51: PF1; bidirectional. */
  "PF1": "51",
  /** Physical pin 52: PF2; bidirectional. */
  "PF2": "52",
  /** Physical pin 53: PF0; bidirectional. */
  "PF0": "53",
  /** Physical pin 54: PF8; bidirectional. */
  "PF8": "54",
  /** Physical pin 55: PD1; bidirectional. */
  "PD1": "55",
  /** Physical pin 56: PF9; bidirectional. */
  "PF9": "56",
  /** Physical pin 57: PD0; bidirectional. */
  "PD0": "57",
  /** Physical pin 58: PG1; bidirectional. */
  "PG1": "58",
  /** Physical pin 59: PG0; bidirectional. */
  "PG0": "59",
  /** Physical pin 60: GND; power_in. */
  "GND_60": "60",
  /** Physical pin 61: PE1; bidirectional. */
  "PE1": "61",
  /** Physical pin 62: PE6; bidirectional. */
  "PE6": "62",
  /** Physical pin 63: PG9; bidirectional. */
  "PG9": "63",
  /** Physical pin 64: PG15; bidirectional. */
  "PG15": "64",
  /** Physical pin 65: PG12; bidirectional. */
  "PG12": "65",
  /** Physical pin 66: PG10; bidirectional. */
  "PG10": "66",
  /** Physical pin 67: NC; no_connect. */
  "NC_67": "67",
  /** Physical pin 68: PG13/ETH_TXD0; bidirectional. */
  "PG13/ETH_TXD0": "68",
  /** Physical pin 69: STLINK_RX/PD9; bidirectional. */
  "STLINK_RX/PD9": "69",
  /** Physical pin 70: PG11/ETH_TX_EN; bidirectional. */
  "PG11/ETH_TX_EN": "70",
  /** Physical pin 71: GND; power_in. */
  "GND_71": "71",
  /** Physical pin 72: GND; power_in. */
  "GND_72": "72",
  /** Physical pin 73: PC9; bidirectional. */
  "PC9": "73",
  /** Physical pin 74: PC8; bidirectional. */
  "PC8": "74",
  /** Physical pin 75: PB8; bidirectional. */
  "PB8": "75",
  /** Physical pin 76: PC6; bidirectional. */
  "PC6": "76",
  /** Physical pin 77: PB9; bidirectional. */
  "PB9": "77",
  /** Physical pin 78: ETH_RXD1/PC5; bidirectional. */
  "ETH_RXD1/PC5": "78",
  /** Physical pin 79: AVDD; power_in. */
  "AVDD": "79",
  /** Physical pin 80: U5V; power_in. */
  "U5V": "80",
  /** Physical pin 81: GND; power_in. */
  "GND_81": "81",
  /** Physical pin 82: STLINK_TX/PD8; bidirectional. */
  "STLINK_TX/PD8": "82",
  /** Physical pin 83: PA5; bidirectional. */
  "PA5": "83",
  /** Physical pin 84: USB_DP/PA12; bidirectional. */
  "USB_DP/PA12": "84",
  /** Physical pin 85: PA6; bidirectional. */
  "PA6": "85",
  /** Physical pin 86: USB_DM/PA11; bidirectional. */
  "USB_DM/PA11": "86",
  /** Physical pin 87: ETH_CRS_DV/PA7; bidirectional. */
  "ETH_CRS_DV/PA7": "87",
  /** Physical pin 88: PB12; bidirectional. */
  "PB12": "88",
  /** Physical pin 89: PB6; bidirectional. */
  "PB6": "89",
  /** Physical pin 90: PB11; bidirectional. */
  "PB11": "90",
  /** Physical pin 91: PC7; bidirectional. */
  "PC7": "91",
  /** Physical pin 92: GND; power_in. */
  "GND_92": "92",
  /** Physical pin 93: USB_VBUS/PA9; bidirectional. */
  "USB_VBUS/PA9": "93",
  /** Physical pin 94: PB2; bidirectional. */
  "PB2": "94",
  /** Physical pin 95: USB_SOF/PA8; bidirectional. */
  "USB_SOF/PA8": "95",
  /** Physical pin 96: PB1; bidirectional. */
  "PB1": "96",
  /** Physical pin 97: PB10; bidirectional. */
  "PB10": "97",
  /** Physical pin 98: PB15; bidirectional. */
  "PB15": "98",
  /** Physical pin 99: PB4; bidirectional. */
  "PB4": "99",
  /** Physical pin 100: LD3/PB14; bidirectional. */
  "LD3/PB14": "100",
  /** Physical pin 101: PB5; bidirectional. */
  "PB5": "101",
  /** Physical pin 102: ETH_TXD1/PB13; bidirectional. */
  "ETH_TXD1/PB13": "102",
  /** Physical pin 103: SWO/PB3; bidirectional. */
  "SWO/PB3": "103",
  /** Physical pin 104: AGND; power_in. */
  "AGND": "104",
  /** Physical pin 105: USB_ID/PA10; bidirectional. */
  "USB_ID/PA10": "105",
  /** Physical pin 106: ETH_RXD0/PC4; bidirectional. */
  "ETH_RXD0/PC4": "106",
  /** Physical pin 107: ETH_MDIO/PA2; bidirectional. */
  "ETH_MDIO/PA2": "107",
  /** Physical pin 108: PF5; bidirectional. */
  "PF5": "108",
  /** Physical pin 109: PA3; bidirectional. */
  "PA3": "109",
  /** Physical pin 110: PF4; bidirectional. */
  "PF4": "110",
  /** Physical pin 111: GND; power_in. */
  "GND_111": "111",
  /** Physical pin 112: PE8; bidirectional. */
  "PE8": "112",
  /** Physical pin 113: PD13; bidirectional. */
  "PD13": "113",
  /** Physical pin 114: PF10; bidirectional. */
  "PF10": "114",
  /** Physical pin 115: PD12; bidirectional. */
  "PD12": "115",
  /** Physical pin 116: PE7; bidirectional. */
  "PE7": "116",
  /** Physical pin 117: PD11; bidirectional. */
  "PD11": "117",
  /** Physical pin 118: PD14; bidirectional. */
  "PD14": "118",
  /** Physical pin 119: PE10; bidirectional. */
  "PE10": "119",
  /** Physical pin 120: PD15; bidirectional. */
  "PD15": "120",
  /** Physical pin 121: PE12; bidirectional. */
  "PE12": "121",
  /** Physical pin 122: PF14; bidirectional. */
  "PF14": "122",
  /** Physical pin 123: PE14; bidirectional. */
  "PE14": "123",
  /** Physical pin 124: PE9; bidirectional. */
  "PE9": "124",
  /** Physical pin 125: PE15; bidirectional. */
  "PE15": "125",
  /** Physical pin 126: GND; power_in. */
  "GND_126": "126",
  /** Physical pin 127: PE13; bidirectional. */
  "PE13": "127",
  /** Physical pin 128: PE11; bidirectional. */
  "PE11": "128",
  /** Physical pin 129: PF13; bidirectional. */
  "PF13": "129",
  /** Physical pin 130: PF3; bidirectional. */
  "PF3": "130",
  /** Physical pin 131: PF12; bidirectional. */
  "PF12": "131",
  /** Physical pin 132: PF15; bidirectional. */
  "PF15": "132",
  /** Physical pin 133: PG14; bidirectional. */
  "PG14": "133",
  /** Physical pin 134: PF11; bidirectional. */
  "PF11": "134",
  /** Physical pin 135: GND; power_in. */
  "GND_135": "135",
  /** Physical pin 136: PE0; bidirectional. */
  "PE0": "136",
  /** Physical pin 137: PD10; bidirectional. */
  "PD10": "137",
  /** Physical pin 138: PG8; bidirectional. */
  "PG8": "138",
  /** Physical pin 139: PG7/USB_GPIO_IN; bidirectional. */
  "PG7/USB_GPIO_IN": "139",
  /** Physical pin 140: PG5; bidirectional. */
  "PG5": "140",
  /** Physical pin 141: PG4; bidirectional. */
  "PG4": "141",
  /** Physical pin 142: PG6/USB_GPIO_OUT; bidirectional. */
  "PG6/USB_GPIO_OUT": "142",
  /** Physical pin 143: GND; power_in. */
  "GND_143": "143",
  /** Physical pin 144: GND; power_in. */
  "GND_144": "144",
}) {
  override schema = "MCU_Module:NUCLEO144-F746ZG";
  override referencePrefix = "U";
}

/**
 * Nucleo 144 Development Board with STM32F756ZGT6 MCU, 320kB RAM, 1Mb FLASH
 *
 * KiCad symbol: `MCU_Module:NUCLEO144-F756ZG`. Reference prefix: `U`.
 * Footprint filters: ST*Morpho*Connector*144*STLink*.
 * @see https://www.st.com/resource/en/user_manual/dm00244518-stm32-nucleo144-boards-stmicroelectronics.pdf
 * Keywords: STM32 Nucleo ST.
 * Default footprint: Module:ST_Morpho_Connector_144_STLink.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NUCLEO144_F756ZG extends Component.withPins({
  /** Physical pin 1: PC10; bidirectional. */
  "PC10": "1",
  /** Physical pin 2: PC11; bidirectional. */
  "PC11": "2",
  /** Physical pin 3: PC12; bidirectional. */
  "PC12": "3",
  /** Physical pin 4: PD2; bidirectional. */
  "PD2": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: E5V; power_in. */
  "E5V": "6",
  /** Physical pin 7: ~{BOOT0}; input. */
  "~{BOOT0}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: PF6; bidirectional. */
  "PF6": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: PF7; bidirectional. */
  "PF7": "11",
  /** Physical pin 12: IOREF; power_in. */
  "IOREF": "12",
  /** Physical pin 13: TMS/PA13; bidirectional. */
  "TMS/PA13": "13",
  /** Physical pin 14: ~{RST}; input. */
  "~{RST}": "14",
  /** Physical pin 15: TCK/PA14; bidirectional. */
  "TCK/PA14": "15",
  /** Physical pin 16: +3V3; power_in. */
  "+3V3": "16",
  /** Physical pin 17: PA15; bidirectional. */
  "PA15": "17",
  /** Physical pin 18: +5V; power_in. */
  "+5V": "18",
  /** Physical pin 19: GND; power_in. */
  "GND_19": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: LD2/PB7; bidirectional. */
  "LD2/PB7": "21",
  /** Physical pin 22: GND; power_in. */
  "GND_22": "22",
  /** Physical pin 23: BT/PC13; bidirectional. */
  "BT/PC13": "23",
  /** Physical pin 24: VIN; power_in. */
  "VIN": "24",
  /** Physical pin 25: RTC_CRYSTAL/PC14; bidirectional. */
  "RTC_CRYSTAL/PC14": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: RTC_CRYSTAL/PC15; bidirectional. */
  "RTC_CRYSTAL/PC15": "27",
  /** Physical pin 28: PA0; bidirectional. */
  "PA0": "28",
  /** Physical pin 29: PH0; bidirectional. */
  "PH0": "29",
  /** Physical pin 30: ETH_REF_CLK/PA1; bidirectional. */
  "ETH_REF_CLK/PA1": "30",
  /** Physical pin 31: PH1; bidirectional. */
  "PH1": "31",
  /** Physical pin 32: PA4; bidirectional. */
  "PA4": "32",
  /** Physical pin 33: VBAT; power_in. */
  "VBAT": "33",
  /** Physical pin 34: PB0; bidirectional. */
  "PB0": "34",
  /** Physical pin 35: PC2; bidirectional. */
  "PC2": "35",
  /** Physical pin 36: ETH_MDC/PC1; bidirectional. */
  "ETH_MDC/PC1": "36",
  /** Physical pin 37: PC3; bidirectional. */
  "PC3": "37",
  /** Physical pin 38: PC0; bidirectional. */
  "PC0": "38",
  /** Physical pin 39: PD4; bidirectional. */
  "PD4": "39",
  /** Physical pin 40: PD3; bidirectional. */
  "PD3": "40",
  /** Physical pin 41: PD5; bidirectional. */
  "PD5": "41",
  /** Physical pin 42: PG2; bidirectional. */
  "PG2": "42",
  /** Physical pin 43: PD6; bidirectional. */
  "PD6": "43",
  /** Physical pin 44: PG3; bidirectional. */
  "PG3": "44",
  /** Physical pin 45: PD7; bidirectional. */
  "PD7": "45",
  /** Physical pin 46: PE2; bidirectional. */
  "PE2": "46",
  /** Physical pin 47: PE3; bidirectional. */
  "PE3": "47",
  /** Physical pin 48: PE4; bidirectional. */
  "PE4": "48",
  /** Physical pin 49: GND; power_in. */
  "GND_49": "49",
  /** Physical pin 50: PE5; bidirectional. */
  "PE5": "50",
  /** Physical pin 51: PF1; bidirectional. */
  "PF1": "51",
  /** Physical pin 52: PF2; bidirectional. */
  "PF2": "52",
  /** Physical pin 53: PF0; bidirectional. */
  "PF0": "53",
  /** Physical pin 54: PF8; bidirectional. */
  "PF8": "54",
  /** Physical pin 55: PD1; bidirectional. */
  "PD1": "55",
  /** Physical pin 56: PF9; bidirectional. */
  "PF9": "56",
  /** Physical pin 57: PD0; bidirectional. */
  "PD0": "57",
  /** Physical pin 58: PG1; bidirectional. */
  "PG1": "58",
  /** Physical pin 59: PG0; bidirectional. */
  "PG0": "59",
  /** Physical pin 60: GND; power_in. */
  "GND_60": "60",
  /** Physical pin 61: PE1; bidirectional. */
  "PE1": "61",
  /** Physical pin 62: PE6; bidirectional. */
  "PE6": "62",
  /** Physical pin 63: PG9; bidirectional. */
  "PG9": "63",
  /** Physical pin 64: PG15; bidirectional. */
  "PG15": "64",
  /** Physical pin 65: PG12; bidirectional. */
  "PG12": "65",
  /** Physical pin 66: PG10; bidirectional. */
  "PG10": "66",
  /** Physical pin 67: NC; no_connect. */
  "NC_67": "67",
  /** Physical pin 68: PG13/ETH_TXD0; bidirectional. */
  "PG13/ETH_TXD0": "68",
  /** Physical pin 69: STLINK_RX/PD9; bidirectional. */
  "STLINK_RX/PD9": "69",
  /** Physical pin 70: PG11/ETH_TX_EN; bidirectional. */
  "PG11/ETH_TX_EN": "70",
  /** Physical pin 71: GND; power_in. */
  "GND_71": "71",
  /** Physical pin 72: GND; power_in. */
  "GND_72": "72",
  /** Physical pin 73: PC9; bidirectional. */
  "PC9": "73",
  /** Physical pin 74: PC8; bidirectional. */
  "PC8": "74",
  /** Physical pin 75: PB8; bidirectional. */
  "PB8": "75",
  /** Physical pin 76: PC6; bidirectional. */
  "PC6": "76",
  /** Physical pin 77: PB9; bidirectional. */
  "PB9": "77",
  /** Physical pin 78: ETH_RXD1/PC5; bidirectional. */
  "ETH_RXD1/PC5": "78",
  /** Physical pin 79: AVDD; power_in. */
  "AVDD": "79",
  /** Physical pin 80: U5V; power_in. */
  "U5V": "80",
  /** Physical pin 81: GND; power_in. */
  "GND_81": "81",
  /** Physical pin 82: STLINK_TX/PD8; bidirectional. */
  "STLINK_TX/PD8": "82",
  /** Physical pin 83: PA5; bidirectional. */
  "PA5": "83",
  /** Physical pin 84: USB_DP/PA12; bidirectional. */
  "USB_DP/PA12": "84",
  /** Physical pin 85: PA6; bidirectional. */
  "PA6": "85",
  /** Physical pin 86: USB_DM/PA11; bidirectional. */
  "USB_DM/PA11": "86",
  /** Physical pin 87: ETH_CRS_DV/PA7; bidirectional. */
  "ETH_CRS_DV/PA7": "87",
  /** Physical pin 88: PB12; bidirectional. */
  "PB12": "88",
  /** Physical pin 89: PB6; bidirectional. */
  "PB6": "89",
  /** Physical pin 90: PB11; bidirectional. */
  "PB11": "90",
  /** Physical pin 91: PC7; bidirectional. */
  "PC7": "91",
  /** Physical pin 92: GND; power_in. */
  "GND_92": "92",
  /** Physical pin 93: USB_VBUS/PA9; bidirectional. */
  "USB_VBUS/PA9": "93",
  /** Physical pin 94: PB2; bidirectional. */
  "PB2": "94",
  /** Physical pin 95: USB_SOF/PA8; bidirectional. */
  "USB_SOF/PA8": "95",
  /** Physical pin 96: PB1; bidirectional. */
  "PB1": "96",
  /** Physical pin 97: PB10; bidirectional. */
  "PB10": "97",
  /** Physical pin 98: PB15; bidirectional. */
  "PB15": "98",
  /** Physical pin 99: PB4; bidirectional. */
  "PB4": "99",
  /** Physical pin 100: LD3/PB14; bidirectional. */
  "LD3/PB14": "100",
  /** Physical pin 101: PB5; bidirectional. */
  "PB5": "101",
  /** Physical pin 102: ETH_TXD1/PB13; bidirectional. */
  "ETH_TXD1/PB13": "102",
  /** Physical pin 103: SWO/PB3; bidirectional. */
  "SWO/PB3": "103",
  /** Physical pin 104: AGND; power_in. */
  "AGND": "104",
  /** Physical pin 105: USB_ID/PA10; bidirectional. */
  "USB_ID/PA10": "105",
  /** Physical pin 106: ETH_RXD0/PC4; bidirectional. */
  "ETH_RXD0/PC4": "106",
  /** Physical pin 107: ETH_MDIO/PA2; bidirectional. */
  "ETH_MDIO/PA2": "107",
  /** Physical pin 108: PF5; bidirectional. */
  "PF5": "108",
  /** Physical pin 109: PA3; bidirectional. */
  "PA3": "109",
  /** Physical pin 110: PF4; bidirectional. */
  "PF4": "110",
  /** Physical pin 111: GND; power_in. */
  "GND_111": "111",
  /** Physical pin 112: PE8; bidirectional. */
  "PE8": "112",
  /** Physical pin 113: PD13; bidirectional. */
  "PD13": "113",
  /** Physical pin 114: PF10; bidirectional. */
  "PF10": "114",
  /** Physical pin 115: PD12; bidirectional. */
  "PD12": "115",
  /** Physical pin 116: PE7; bidirectional. */
  "PE7": "116",
  /** Physical pin 117: PD11; bidirectional. */
  "PD11": "117",
  /** Physical pin 118: PD14; bidirectional. */
  "PD14": "118",
  /** Physical pin 119: PE10; bidirectional. */
  "PE10": "119",
  /** Physical pin 120: PD15; bidirectional. */
  "PD15": "120",
  /** Physical pin 121: PE12; bidirectional. */
  "PE12": "121",
  /** Physical pin 122: PF14; bidirectional. */
  "PF14": "122",
  /** Physical pin 123: PE14; bidirectional. */
  "PE14": "123",
  /** Physical pin 124: PE9; bidirectional. */
  "PE9": "124",
  /** Physical pin 125: PE15; bidirectional. */
  "PE15": "125",
  /** Physical pin 126: GND; power_in. */
  "GND_126": "126",
  /** Physical pin 127: PE13; bidirectional. */
  "PE13": "127",
  /** Physical pin 128: PE11; bidirectional. */
  "PE11": "128",
  /** Physical pin 129: PF13; bidirectional. */
  "PF13": "129",
  /** Physical pin 130: PF3; bidirectional. */
  "PF3": "130",
  /** Physical pin 131: PF12; bidirectional. */
  "PF12": "131",
  /** Physical pin 132: PF15; bidirectional. */
  "PF15": "132",
  /** Physical pin 133: PG14; bidirectional. */
  "PG14": "133",
  /** Physical pin 134: PF11; bidirectional. */
  "PF11": "134",
  /** Physical pin 135: GND; power_in. */
  "GND_135": "135",
  /** Physical pin 136: PE0; bidirectional. */
  "PE0": "136",
  /** Physical pin 137: PD10; bidirectional. */
  "PD10": "137",
  /** Physical pin 138: PG8; bidirectional. */
  "PG8": "138",
  /** Physical pin 139: PG7/USB_GPIO_IN; bidirectional. */
  "PG7/USB_GPIO_IN": "139",
  /** Physical pin 140: PG5; bidirectional. */
  "PG5": "140",
  /** Physical pin 141: PG4; bidirectional. */
  "PG4": "141",
  /** Physical pin 142: PG6/USB_GPIO_OUT; bidirectional. */
  "PG6/USB_GPIO_OUT": "142",
  /** Physical pin 143: GND; power_in. */
  "GND_143": "143",
  /** Physical pin 144: GND; power_in. */
  "GND_144": "144",
}) {
  override schema = "MCU_Module:NUCLEO144-F756ZG";
  override referencePrefix = "U";
}

/**
 * Nucleo 144 Development Board with STM32F767ZIT6 MCU, 512kB RAM, 2Mb FLASH
 *
 * KiCad symbol: `MCU_Module:NUCLEO144-F767ZI`. Reference prefix: `U`.
 * Footprint filters: ST*Morpho*Connector*144*STLink*.
 * @see https://www.st.com/resource/en/user_manual/dm00244518-stm32-nucleo144-boards-stmicroelectronics.pdf
 * Keywords: STM32 Nucleo ST.
 * Default footprint: Module:ST_Morpho_Connector_144_STLink.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NUCLEO144_F767ZI extends Component.withPins({
  /** Physical pin 1: PC10; bidirectional. */
  "PC10": "1",
  /** Physical pin 2: PC11; bidirectional. */
  "PC11": "2",
  /** Physical pin 3: PC12; bidirectional. */
  "PC12": "3",
  /** Physical pin 4: PD2; bidirectional. */
  "PD2": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: E5V; power_in. */
  "E5V": "6",
  /** Physical pin 7: ~{BOOT0}; input. */
  "~{BOOT0}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: PF6; bidirectional. */
  "PF6": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: PF7; bidirectional. */
  "PF7": "11",
  /** Physical pin 12: IOREF; power_in. */
  "IOREF": "12",
  /** Physical pin 13: TMS/PA13; bidirectional. */
  "TMS/PA13": "13",
  /** Physical pin 14: ~{RST}; input. */
  "~{RST}": "14",
  /** Physical pin 15: TCK/PA14; bidirectional. */
  "TCK/PA14": "15",
  /** Physical pin 16: +3V3; power_in. */
  "+3V3": "16",
  /** Physical pin 17: PA15; bidirectional. */
  "PA15": "17",
  /** Physical pin 18: +5V; power_in. */
  "+5V": "18",
  /** Physical pin 19: GND; power_in. */
  "GND_19": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: LD2/PB7; bidirectional. */
  "LD2/PB7": "21",
  /** Physical pin 22: GND; power_in. */
  "GND_22": "22",
  /** Physical pin 23: BT/PC13; bidirectional. */
  "BT/PC13": "23",
  /** Physical pin 24: VIN; power_in. */
  "VIN": "24",
  /** Physical pin 25: RTC_CRYSTAL/PC14; bidirectional. */
  "RTC_CRYSTAL/PC14": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: RTC_CRYSTAL/PC15; bidirectional. */
  "RTC_CRYSTAL/PC15": "27",
  /** Physical pin 28: PA0; bidirectional. */
  "PA0": "28",
  /** Physical pin 29: PH0; bidirectional. */
  "PH0": "29",
  /** Physical pin 30: ETH_REF_CLK/PA1; bidirectional. */
  "ETH_REF_CLK/PA1": "30",
  /** Physical pin 31: PH1; bidirectional. */
  "PH1": "31",
  /** Physical pin 32: PA4; bidirectional. */
  "PA4": "32",
  /** Physical pin 33: VBAT; power_in. */
  "VBAT": "33",
  /** Physical pin 34: PB0; bidirectional. */
  "PB0": "34",
  /** Physical pin 35: PC2; bidirectional. */
  "PC2": "35",
  /** Physical pin 36: ETH_MDC/PC1; bidirectional. */
  "ETH_MDC/PC1": "36",
  /** Physical pin 37: PC3; bidirectional. */
  "PC3": "37",
  /** Physical pin 38: PC0; bidirectional. */
  "PC0": "38",
  /** Physical pin 39: PD4; bidirectional. */
  "PD4": "39",
  /** Physical pin 40: PD3; bidirectional. */
  "PD3": "40",
  /** Physical pin 41: PD5; bidirectional. */
  "PD5": "41",
  /** Physical pin 42: PG2; bidirectional. */
  "PG2": "42",
  /** Physical pin 43: PD6; bidirectional. */
  "PD6": "43",
  /** Physical pin 44: PG3; bidirectional. */
  "PG3": "44",
  /** Physical pin 45: PD7; bidirectional. */
  "PD7": "45",
  /** Physical pin 46: PE2; bidirectional. */
  "PE2": "46",
  /** Physical pin 47: PE3; bidirectional. */
  "PE3": "47",
  /** Physical pin 48: PE4; bidirectional. */
  "PE4": "48",
  /** Physical pin 49: GND; power_in. */
  "GND_49": "49",
  /** Physical pin 50: PE5; bidirectional. */
  "PE5": "50",
  /** Physical pin 51: PF1; bidirectional. */
  "PF1": "51",
  /** Physical pin 52: PF2; bidirectional. */
  "PF2": "52",
  /** Physical pin 53: PF0; bidirectional. */
  "PF0": "53",
  /** Physical pin 54: PF8; bidirectional. */
  "PF8": "54",
  /** Physical pin 55: PD1; bidirectional. */
  "PD1": "55",
  /** Physical pin 56: PF9; bidirectional. */
  "PF9": "56",
  /** Physical pin 57: PD0; bidirectional. */
  "PD0": "57",
  /** Physical pin 58: PG1; bidirectional. */
  "PG1": "58",
  /** Physical pin 59: PG0; bidirectional. */
  "PG0": "59",
  /** Physical pin 60: GND; power_in. */
  "GND_60": "60",
  /** Physical pin 61: PE1; bidirectional. */
  "PE1": "61",
  /** Physical pin 62: PE6; bidirectional. */
  "PE6": "62",
  /** Physical pin 63: PG9; bidirectional. */
  "PG9": "63",
  /** Physical pin 64: PG15; bidirectional. */
  "PG15": "64",
  /** Physical pin 65: PG12; bidirectional. */
  "PG12": "65",
  /** Physical pin 66: PG10; bidirectional. */
  "PG10": "66",
  /** Physical pin 67: NC; no_connect. */
  "NC_67": "67",
  /** Physical pin 68: PG13/ETH_TXD0; bidirectional. */
  "PG13/ETH_TXD0": "68",
  /** Physical pin 69: STLINK_RX/PD9; bidirectional. */
  "STLINK_RX/PD9": "69",
  /** Physical pin 70: PG11/ETH_TX_EN; bidirectional. */
  "PG11/ETH_TX_EN": "70",
  /** Physical pin 71: GND; power_in. */
  "GND_71": "71",
  /** Physical pin 72: GND; power_in. */
  "GND_72": "72",
  /** Physical pin 73: PC9; bidirectional. */
  "PC9": "73",
  /** Physical pin 74: PC8; bidirectional. */
  "PC8": "74",
  /** Physical pin 75: PB8; bidirectional. */
  "PB8": "75",
  /** Physical pin 76: PC6; bidirectional. */
  "PC6": "76",
  /** Physical pin 77: PB9; bidirectional. */
  "PB9": "77",
  /** Physical pin 78: ETH_RXD1/PC5; bidirectional. */
  "ETH_RXD1/PC5": "78",
  /** Physical pin 79: AVDD; power_in. */
  "AVDD": "79",
  /** Physical pin 80: U5V; power_in. */
  "U5V": "80",
  /** Physical pin 81: GND; power_in. */
  "GND_81": "81",
  /** Physical pin 82: STLINK_TX/PD8; bidirectional. */
  "STLINK_TX/PD8": "82",
  /** Physical pin 83: PA5; bidirectional. */
  "PA5": "83",
  /** Physical pin 84: USB_DP/PA12; bidirectional. */
  "USB_DP/PA12": "84",
  /** Physical pin 85: PA6; bidirectional. */
  "PA6": "85",
  /** Physical pin 86: USB_DM/PA11; bidirectional. */
  "USB_DM/PA11": "86",
  /** Physical pin 87: ETH_CRS_DV/PA7; bidirectional. */
  "ETH_CRS_DV/PA7": "87",
  /** Physical pin 88: PB12; bidirectional. */
  "PB12": "88",
  /** Physical pin 89: PB6; bidirectional. */
  "PB6": "89",
  /** Physical pin 90: PB11; bidirectional. */
  "PB11": "90",
  /** Physical pin 91: PC7; bidirectional. */
  "PC7": "91",
  /** Physical pin 92: GND; power_in. */
  "GND_92": "92",
  /** Physical pin 93: USB_VBUS/PA9; bidirectional. */
  "USB_VBUS/PA9": "93",
  /** Physical pin 94: PB2; bidirectional. */
  "PB2": "94",
  /** Physical pin 95: USB_SOF/PA8; bidirectional. */
  "USB_SOF/PA8": "95",
  /** Physical pin 96: PB1; bidirectional. */
  "PB1": "96",
  /** Physical pin 97: PB10; bidirectional. */
  "PB10": "97",
  /** Physical pin 98: PB15; bidirectional. */
  "PB15": "98",
  /** Physical pin 99: PB4; bidirectional. */
  "PB4": "99",
  /** Physical pin 100: LD3/PB14; bidirectional. */
  "LD3/PB14": "100",
  /** Physical pin 101: PB5; bidirectional. */
  "PB5": "101",
  /** Physical pin 102: ETH_TXD1/PB13; bidirectional. */
  "ETH_TXD1/PB13": "102",
  /** Physical pin 103: SWO/PB3; bidirectional. */
  "SWO/PB3": "103",
  /** Physical pin 104: AGND; power_in. */
  "AGND": "104",
  /** Physical pin 105: USB_ID/PA10; bidirectional. */
  "USB_ID/PA10": "105",
  /** Physical pin 106: ETH_RXD0/PC4; bidirectional. */
  "ETH_RXD0/PC4": "106",
  /** Physical pin 107: ETH_MDIO/PA2; bidirectional. */
  "ETH_MDIO/PA2": "107",
  /** Physical pin 108: PF5; bidirectional. */
  "PF5": "108",
  /** Physical pin 109: PA3; bidirectional. */
  "PA3": "109",
  /** Physical pin 110: PF4; bidirectional. */
  "PF4": "110",
  /** Physical pin 111: GND; power_in. */
  "GND_111": "111",
  /** Physical pin 112: PE8; bidirectional. */
  "PE8": "112",
  /** Physical pin 113: PD13; bidirectional. */
  "PD13": "113",
  /** Physical pin 114: PF10; bidirectional. */
  "PF10": "114",
  /** Physical pin 115: PD12; bidirectional. */
  "PD12": "115",
  /** Physical pin 116: PE7; bidirectional. */
  "PE7": "116",
  /** Physical pin 117: PD11; bidirectional. */
  "PD11": "117",
  /** Physical pin 118: PD14; bidirectional. */
  "PD14": "118",
  /** Physical pin 119: PE10; bidirectional. */
  "PE10": "119",
  /** Physical pin 120: PD15; bidirectional. */
  "PD15": "120",
  /** Physical pin 121: PE12; bidirectional. */
  "PE12": "121",
  /** Physical pin 122: PF14; bidirectional. */
  "PF14": "122",
  /** Physical pin 123: PE14; bidirectional. */
  "PE14": "123",
  /** Physical pin 124: PE9; bidirectional. */
  "PE9": "124",
  /** Physical pin 125: PE15; bidirectional. */
  "PE15": "125",
  /** Physical pin 126: GND; power_in. */
  "GND_126": "126",
  /** Physical pin 127: PE13; bidirectional. */
  "PE13": "127",
  /** Physical pin 128: PE11; bidirectional. */
  "PE11": "128",
  /** Physical pin 129: PF13; bidirectional. */
  "PF13": "129",
  /** Physical pin 130: PF3; bidirectional. */
  "PF3": "130",
  /** Physical pin 131: PF12; bidirectional. */
  "PF12": "131",
  /** Physical pin 132: PF15; bidirectional. */
  "PF15": "132",
  /** Physical pin 133: PG14; bidirectional. */
  "PG14": "133",
  /** Physical pin 134: PF11; bidirectional. */
  "PF11": "134",
  /** Physical pin 135: GND; power_in. */
  "GND_135": "135",
  /** Physical pin 136: PE0; bidirectional. */
  "PE0": "136",
  /** Physical pin 137: PD10; bidirectional. */
  "PD10": "137",
  /** Physical pin 138: PG8; bidirectional. */
  "PG8": "138",
  /** Physical pin 139: PG7/USB_GPIO_IN; bidirectional. */
  "PG7/USB_GPIO_IN": "139",
  /** Physical pin 140: PG5; bidirectional. */
  "PG5": "140",
  /** Physical pin 141: PG4; bidirectional. */
  "PG4": "141",
  /** Physical pin 142: PG6/USB_GPIO_OUT; bidirectional. */
  "PG6/USB_GPIO_OUT": "142",
  /** Physical pin 143: GND; power_in. */
  "GND_143": "143",
  /** Physical pin 144: GND; power_in. */
  "GND_144": "144",
}) {
  override schema = "MCU_Module:NUCLEO144-F767ZI";
  override referencePrefix = "U";
}

/**
 * Nucleo 144 Development Board with STM32H743ZIT6 MCU, 1024kB RAM, 2Mb FLASH
 *
 * KiCad symbol: `MCU_Module:NUCLEO144-H743ZI`. Reference prefix: `U`.
 * Footprint filters: ST*Morpho*Connector*144*STLink*.
 * @see https://www.st.com/resource/en/user_manual/dm00244518-stm32-nucleo144-boards-stmicroelectronics.pdf
 * Keywords: STM32 Nucleo ST.
 * Default footprint: Module:ST_Morpho_Connector_144_STLink.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NUCLEO144_H743ZI extends Component.withPins({
  /** Physical pin 1: PC10; bidirectional. */
  "PC10": "1",
  /** Physical pin 2: PC11; bidirectional. */
  "PC11": "2",
  /** Physical pin 3: PC12; bidirectional. */
  "PC12": "3",
  /** Physical pin 4: PD2; bidirectional. */
  "PD2": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: E5V; power_in. */
  "E5V": "6",
  /** Physical pin 7: ~{BOOT0}; input. */
  "~{BOOT0}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: PF6; bidirectional. */
  "PF6": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: PF7; bidirectional. */
  "PF7": "11",
  /** Physical pin 12: IOREF; power_in. */
  "IOREF": "12",
  /** Physical pin 13: TMS/PA13; bidirectional. */
  "TMS/PA13": "13",
  /** Physical pin 14: ~{RST}; input. */
  "~{RST}": "14",
  /** Physical pin 15: TCK/PA14; bidirectional. */
  "TCK/PA14": "15",
  /** Physical pin 16: +3V3; power_in. */
  "+3V3": "16",
  /** Physical pin 17: PA15; bidirectional. */
  "PA15": "17",
  /** Physical pin 18: +5V; power_in. */
  "+5V": "18",
  /** Physical pin 19: GND; power_in. */
  "GND_19": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: LD2/PB7; bidirectional. */
  "LD2/PB7": "21",
  /** Physical pin 22: GND; power_in. */
  "GND_22": "22",
  /** Physical pin 23: BT/PC13; bidirectional. */
  "BT/PC13": "23",
  /** Physical pin 24: VIN; power_in. */
  "VIN": "24",
  /** Physical pin 25: RTC_CRYSTAL/PC14; bidirectional. */
  "RTC_CRYSTAL/PC14": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: RTC_CRYSTAL/PC15; bidirectional. */
  "RTC_CRYSTAL/PC15": "27",
  /** Physical pin 28: PA0; bidirectional. */
  "PA0": "28",
  /** Physical pin 29: PH0; bidirectional. */
  "PH0": "29",
  /** Physical pin 30: ETH_REF_CLK/PA1; bidirectional. */
  "ETH_REF_CLK/PA1": "30",
  /** Physical pin 31: PH1; bidirectional. */
  "PH1": "31",
  /** Physical pin 32: PA4; bidirectional. */
  "PA4": "32",
  /** Physical pin 33: VBAT; power_in. */
  "VBAT": "33",
  /** Physical pin 34: PB0; bidirectional. */
  "PB0": "34",
  /** Physical pin 35: PC2; bidirectional. */
  "PC2": "35",
  /** Physical pin 36: ETH_MDC/PC1; bidirectional. */
  "ETH_MDC/PC1": "36",
  /** Physical pin 37: PC3; bidirectional. */
  "PC3": "37",
  /** Physical pin 38: PC0; bidirectional. */
  "PC0": "38",
  /** Physical pin 39: PD4; bidirectional. */
  "PD4": "39",
  /** Physical pin 40: PD3; bidirectional. */
  "PD3": "40",
  /** Physical pin 41: PD5; bidirectional. */
  "PD5": "41",
  /** Physical pin 42: PG2; bidirectional. */
  "PG2": "42",
  /** Physical pin 43: PD6; bidirectional. */
  "PD6": "43",
  /** Physical pin 44: PG3; bidirectional. */
  "PG3": "44",
  /** Physical pin 45: PD7; bidirectional. */
  "PD7": "45",
  /** Physical pin 46: PE2; bidirectional. */
  "PE2": "46",
  /** Physical pin 47: PE3; bidirectional. */
  "PE3": "47",
  /** Physical pin 48: PE4; bidirectional. */
  "PE4": "48",
  /** Physical pin 49: GND; power_in. */
  "GND_49": "49",
  /** Physical pin 50: PE5; bidirectional. */
  "PE5": "50",
  /** Physical pin 51: PF1; bidirectional. */
  "PF1": "51",
  /** Physical pin 52: PF2; bidirectional. */
  "PF2": "52",
  /** Physical pin 53: PF0; bidirectional. */
  "PF0": "53",
  /** Physical pin 54: PF8; bidirectional. */
  "PF8": "54",
  /** Physical pin 55: PD1; bidirectional. */
  "PD1": "55",
  /** Physical pin 56: PF9; bidirectional. */
  "PF9": "56",
  /** Physical pin 57: PD0; bidirectional. */
  "PD0": "57",
  /** Physical pin 58: PG1; bidirectional. */
  "PG1": "58",
  /** Physical pin 59: PG0; bidirectional. */
  "PG0": "59",
  /** Physical pin 60: GND; power_in. */
  "GND_60": "60",
  /** Physical pin 61: PE1; bidirectional. */
  "PE1": "61",
  /** Physical pin 62: PE6; bidirectional. */
  "PE6": "62",
  /** Physical pin 63: PG9; bidirectional. */
  "PG9": "63",
  /** Physical pin 64: PG15; bidirectional. */
  "PG15": "64",
  /** Physical pin 65: PG12; bidirectional. */
  "PG12": "65",
  /** Physical pin 66: PG10; bidirectional. */
  "PG10": "66",
  /** Physical pin 67: NC; no_connect. */
  "NC_67": "67",
  /** Physical pin 68: PG13/ETH_TXD0; bidirectional. */
  "PG13/ETH_TXD0": "68",
  /** Physical pin 69: STLINK_RX/PD9; bidirectional. */
  "STLINK_RX/PD9": "69",
  /** Physical pin 70: PG11/ETH_TX_EN; bidirectional. */
  "PG11/ETH_TX_EN": "70",
  /** Physical pin 71: GND; power_in. */
  "GND_71": "71",
  /** Physical pin 72: GND; power_in. */
  "GND_72": "72",
  /** Physical pin 73: PC9; bidirectional. */
  "PC9": "73",
  /** Physical pin 74: PC8; bidirectional. */
  "PC8": "74",
  /** Physical pin 75: PB8; bidirectional. */
  "PB8": "75",
  /** Physical pin 76: PC6; bidirectional. */
  "PC6": "76",
  /** Physical pin 77: PB9; bidirectional. */
  "PB9": "77",
  /** Physical pin 78: ETH_RXD1/PC5; bidirectional. */
  "ETH_RXD1/PC5": "78",
  /** Physical pin 79: AVDD; power_in. */
  "AVDD": "79",
  /** Physical pin 80: U5V; power_in. */
  "U5V": "80",
  /** Physical pin 81: GND; power_in. */
  "GND_81": "81",
  /** Physical pin 82: STLINK_TX/PD8; bidirectional. */
  "STLINK_TX/PD8": "82",
  /** Physical pin 83: PA5; bidirectional. */
  "PA5": "83",
  /** Physical pin 84: USB_DP/PA12; bidirectional. */
  "USB_DP/PA12": "84",
  /** Physical pin 85: PA6; bidirectional. */
  "PA6": "85",
  /** Physical pin 86: USB_DM/PA11; bidirectional. */
  "USB_DM/PA11": "86",
  /** Physical pin 87: ETH_CRS_DV/PA7; bidirectional. */
  "ETH_CRS_DV/PA7": "87",
  /** Physical pin 88: PB12; bidirectional. */
  "PB12": "88",
  /** Physical pin 89: PB6; bidirectional. */
  "PB6": "89",
  /** Physical pin 90: PB11; bidirectional. */
  "PB11": "90",
  /** Physical pin 91: PC7; bidirectional. */
  "PC7": "91",
  /** Physical pin 92: GND; power_in. */
  "GND_92": "92",
  /** Physical pin 93: USB_VBUS/PA9; bidirectional. */
  "USB_VBUS/PA9": "93",
  /** Physical pin 94: PB2; bidirectional. */
  "PB2": "94",
  /** Physical pin 95: USB_SOF/PA8; bidirectional. */
  "USB_SOF/PA8": "95",
  /** Physical pin 96: PB1; bidirectional. */
  "PB1": "96",
  /** Physical pin 97: PB10; bidirectional. */
  "PB10": "97",
  /** Physical pin 98: PB15; bidirectional. */
  "PB15": "98",
  /** Physical pin 99: PB4; bidirectional. */
  "PB4": "99",
  /** Physical pin 100: LD3/PB14; bidirectional. */
  "LD3/PB14": "100",
  /** Physical pin 101: PB5; bidirectional. */
  "PB5": "101",
  /** Physical pin 102: ETH_TXD1/PB13; bidirectional. */
  "ETH_TXD1/PB13": "102",
  /** Physical pin 103: SWO/PB3; bidirectional. */
  "SWO/PB3": "103",
  /** Physical pin 104: AGND; power_in. */
  "AGND": "104",
  /** Physical pin 105: USB_ID/PA10; bidirectional. */
  "USB_ID/PA10": "105",
  /** Physical pin 106: ETH_RXD0/PC4; bidirectional. */
  "ETH_RXD0/PC4": "106",
  /** Physical pin 107: ETH_MDIO/PA2; bidirectional. */
  "ETH_MDIO/PA2": "107",
  /** Physical pin 108: PF5; bidirectional. */
  "PF5": "108",
  /** Physical pin 109: PA3; bidirectional. */
  "PA3": "109",
  /** Physical pin 110: PF4; bidirectional. */
  "PF4": "110",
  /** Physical pin 111: GND; power_in. */
  "GND_111": "111",
  /** Physical pin 112: PE8; bidirectional. */
  "PE8": "112",
  /** Physical pin 113: PD13; bidirectional. */
  "PD13": "113",
  /** Physical pin 114: PF10; bidirectional. */
  "PF10": "114",
  /** Physical pin 115: PD12; bidirectional. */
  "PD12": "115",
  /** Physical pin 116: PE7; bidirectional. */
  "PE7": "116",
  /** Physical pin 117: PD11; bidirectional. */
  "PD11": "117",
  /** Physical pin 118: PD14; bidirectional. */
  "PD14": "118",
  /** Physical pin 119: PE10; bidirectional. */
  "PE10": "119",
  /** Physical pin 120: PD15; bidirectional. */
  "PD15": "120",
  /** Physical pin 121: PE12; bidirectional. */
  "PE12": "121",
  /** Physical pin 122: PF14; bidirectional. */
  "PF14": "122",
  /** Physical pin 123: PE14; bidirectional. */
  "PE14": "123",
  /** Physical pin 124: PE9; bidirectional. */
  "PE9": "124",
  /** Physical pin 125: PE15; bidirectional. */
  "PE15": "125",
  /** Physical pin 126: GND; power_in. */
  "GND_126": "126",
  /** Physical pin 127: PE13; bidirectional. */
  "PE13": "127",
  /** Physical pin 128: PE11; bidirectional. */
  "PE11": "128",
  /** Physical pin 129: PF13; bidirectional. */
  "PF13": "129",
  /** Physical pin 130: PF3; bidirectional. */
  "PF3": "130",
  /** Physical pin 131: PF12; bidirectional. */
  "PF12": "131",
  /** Physical pin 132: PF15; bidirectional. */
  "PF15": "132",
  /** Physical pin 133: PG14; bidirectional. */
  "PG14": "133",
  /** Physical pin 134: PF11; bidirectional. */
  "PF11": "134",
  /** Physical pin 135: GND; power_in. */
  "GND_135": "135",
  /** Physical pin 136: PE0; bidirectional. */
  "PE0": "136",
  /** Physical pin 137: PD10; bidirectional. */
  "PD10": "137",
  /** Physical pin 138: PG8; bidirectional. */
  "PG8": "138",
  /** Physical pin 139: PG7/USB_GPIO_IN; bidirectional. */
  "PG7/USB_GPIO_IN": "139",
  /** Physical pin 140: PG5; bidirectional. */
  "PG5": "140",
  /** Physical pin 141: PG4; bidirectional. */
  "PG4": "141",
  /** Physical pin 142: PG6/USB_GPIO_OUT; bidirectional. */
  "PG6/USB_GPIO_OUT": "142",
  /** Physical pin 143: GND; power_in. */
  "GND_143": "143",
  /** Physical pin 144: GND; power_in. */
  "GND_144": "144",
}) {
  override schema = "MCU_Module:NUCLEO144-H743ZI";
  override referencePrefix = "U";
}

/**
 * Nucleo 64 Development Board with STM32F411RET6 MCU, 128kB RAM, 512KB FLASH
 *
 * KiCad symbol: `MCU_Module:NUCLEO64-F411RE`. Reference prefix: `U`.
 * Footprint filters: ST*Morpho*Connector*144*STLink*.
 * @see http://www.st.com/st-web-ui/static/active/en/resource/technical/document/data_brief/DM00105918.pdf
 * Keywords: STM32 Nucleo ST.
 * Default footprint: Module:ST_Morpho_Connector_144_STLink.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NUCLEO64_F411RE extends Component.withPins({
  /** Physical pin 1: PC10; bidirectional. */
  "PC10": "1",
  /** Physical pin 2: PC11; bidirectional. */
  "PC11": "2",
  /** Physical pin 3: PC12; bidirectional. */
  "PC12": "3",
  /** Physical pin 4: PD2; bidirectional. */
  "PD2": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: E5V; power_in. */
  "E5V": "6",
  /** Physical pin 7: ~{BOOT0}; input. */
  "~{BOOT0}": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: IOREF; power_in. */
  "IOREF": "12",
  /** Physical pin 13: STLINK_TMS/PA13; bidirectional. */
  "STLINK_TMS/PA13": "13",
  /** Physical pin 14: ~{RESET}; input. */
  "~{RESET}": "14",
  /** Physical pin 15: STLINK_TCK/PA14; bidirectional. */
  "STLINK_TCK/PA14": "15",
  /** Physical pin 16: +3V3; power_in. */
  "+3V3": "16",
  /** Physical pin 17: PA15; bidirectional. */
  "PA15": "17",
  /** Physical pin 18: +5V; power_in. */
  "+5V": "18",
  /** Physical pin 19: GND; power_in. */
  "GND_19": "19",
  /** Physical pin 20: GND; power_in. */
  "GND_20": "20",
  /** Physical pin 21: PB7; bidirectional. */
  "PB7": "21",
  /** Physical pin 22: GND; power_in. */
  "GND_22": "22",
  /** Physical pin 23: PC13; bidirectional. */
  "PC13": "23",
  /** Physical pin 24: VIN; power_in. */
  "VIN": "24",
  /** Physical pin 25: PC14; bidirectional. */
  "PC14": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: PC15; bidirectional. */
  "PC15": "27",
  /** Physical pin 28: PA0; bidirectional. */
  "PA0": "28",
  /** Physical pin 29: PH0; bidirectional. */
  "PH0": "29",
  /** Physical pin 30: PA1; bidirectional. */
  "PA1": "30",
  /** Physical pin 31: PH1; bidirectional. */
  "PH1": "31",
  /** Physical pin 32: PA4; bidirectional. */
  "PA4": "32",
  /** Physical pin 33: VBAT; power_in. */
  "VBAT": "33",
  /** Physical pin 34: PB0; bidirectional. */
  "PB0": "34",
  /** Physical pin 35: PC2; bidirectional. */
  "PC2": "35",
  /** Physical pin 36: PC1; bidirectional. */
  "PC1": "36",
  /** Physical pin 37: PC3; bidirectional. */
  "PC3": "37",
  /** Physical pin 38: PC0; bidirectional. */
  "PC0": "38",
  /** Physical pin 39: PC9; bidirectional. */
  "PC9": "39",
  /** Physical pin 40: PC8; bidirectional. */
  "PC8": "40",
  /** Physical pin 41: PB8; bidirectional. */
  "PB8": "41",
  /** Physical pin 42: PC6; bidirectional. */
  "PC6": "42",
  /** Physical pin 43: PB9; bidirectional. */
  "PB9": "43",
  /** Physical pin 44: PC5; bidirectional. */
  "PC5": "44",
  /** Physical pin 45: AVDD; power_in. */
  "AVDD": "45",
  /** Physical pin 46: U5V; power_in. */
  "U5V": "46",
  /** Physical pin 47: GND; power_in. */
  "GND_47": "47",
  /** Physical pin 48: NC; no_connect. */
  "NC_48": "48",
  /** Physical pin 49: PA5; bidirectional. */
  "PA5": "49",
  /** Physical pin 50: PA12; bidirectional. */
  "PA12": "50",
  /** Physical pin 51: PA6; bidirectional. */
  "PA6": "51",
  /** Physical pin 52: PA11; bidirectional. */
  "PA11": "52",
  /** Physical pin 53: PA7; bidirectional. */
  "PA7": "53",
  /** Physical pin 54: PB12; bidirectional. */
  "PB12": "54",
  /** Physical pin 55: PB6; bidirectional. */
  "PB6": "55",
  /** Physical pin 56: NC; no_connect. */
  "NC_56": "56",
  /** Physical pin 57: PC7; bidirectional. */
  "PC7": "57",
  /** Physical pin 58: GND; power_in. */
  "GND_58": "58",
  /** Physical pin 59: PA9; bidirectional. */
  "PA9": "59",
  /** Physical pin 60: PB2; bidirectional. */
  "PB2": "60",
  /** Physical pin 61: PA8; bidirectional. */
  "PA8": "61",
  /** Physical pin 62: PB1; bidirectional. */
  "PB1": "62",
  /** Physical pin 63: PB10; bidirectional. */
  "PB10": "63",
  /** Physical pin 64: PB15; bidirectional. */
  "PB15": "64",
  /** Physical pin 65: PB4; bidirectional. */
  "PB4": "65",
  /** Physical pin 66: PB14; bidirectional. */
  "PB14": "66",
  /** Physical pin 67: PB5; bidirectional. */
  "PB5": "67",
  /** Physical pin 68: PB13; bidirectional. */
  "PB13": "68",
  /** Physical pin 69: STLINK_SWO/PB3; bidirectional. */
  "STLINK_SWO/PB3": "69",
  /** Physical pin 70: AGND; power_in. */
  "AGND": "70",
  /** Physical pin 71: PA10; bidirectional. */
  "PA10": "71",
  /** Physical pin 72: PC4; bidirectional. */
  "PC4": "72",
  /** Physical pin 73: STLINK_UART_TX/PA2; bidirectional. */
  "STLINK_UART_TX/PA2": "73",
  /** Physical pin 74: NC; no_connect. */
  "NC_74": "74",
  /** Physical pin 75: STLINK_UART_RX/PA3; bidirectional. */
  "STLINK_UART_RX/PA3": "75",
  /** Physical pin 76: NC; no_connect. */
  "NC_76": "76",
  /** Physical pin 77: GND; power_in. */
  "GND_77": "77",
  /** Physical pin 78: GND; power_in. */
  "GND_78": "78",
  /** Physical pin 79: GND; power_in. */
  "GND_79": "79",
  /** Physical pin 80: GND; power_in. */
  "GND_80": "80",
}) {
  override schema = "MCU_Module:NUCLEO64-F411RE";
  override referencePrefix = "U";
}

/**
 * Armadeus Systems i.MX6UL based single board computer, SODIMM
 *
 * KiCad symbol: `MCU_Module:OPOS6UL`. Reference prefix: `U`.
 * Footprint filters: *SODIMM*.
 * @see http://www.opossom.com/_downloads/opos6ul/documentation/datasheet_opos6ul.pdf
 * Keywords: armadeus systems opos6ul sbc som compute module.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPOS6UL extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: USB_OTG2_DN; bidirectional. */
  "USB_OTG2_DN": "3",
  /** Physical pin 4: TAMPER9; bidirectional. */
  "TAMPER9": "4",
  /** Physical pin 5: USB_OTG2_DP; bidirectional. */
  "USB_OTG2_DP": "5",
  /** Physical pin 6: TAMPER8; bidirectional. */
  "TAMPER8": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: TAMPER7; bidirectional. */
  "TAMPER7": "8",
  /** Physical pin 9: USB_OTG2_VBUS; power_in. */
  "USB_OTG2_VBUS": "9",
  /** Physical pin 10: TAMPER6; bidirectional. */
  "TAMPER6": "10",
  /** Physical pin 11: USB_OTG1_VBUS; power_in. */
  "USB_OTG1_VBUS": "11",
  /** Physical pin 12: TAMPER5; bidirectional. */
  "TAMPER5": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: TAMPER4; bidirectional. */
  "TAMPER4": "14",
  /** Physical pin 15: USB_OTG1_DN; bidirectional. */
  "USB_OTG1_DN": "15",
  /** Physical pin 16: TAMPER3; bidirectional. */
  "TAMPER3": "16",
  /** Physical pin 17: USB_OTG1_DP; bidirectional. */
  "USB_OTG1_DP": "17",
  /** Physical pin 18: TAMPER2; bidirectional. */
  "TAMPER2": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: TAMPER1; bidirectional. */
  "TAMPER1": "20",
  /** Physical pin 21: ETH_TXP; bidirectional. */
  "ETH_TXP": "21",
  /** Physical pin 22: TAMPER0; bidirectional. */
  "TAMPER0": "22",
  /** Physical pin 23: ETH_TXN; bidirectional. */
  "ETH_TXN": "23",
  /** Physical pin 24: GND; passive. */
  "GND_24": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
  /** Physical pin 26: JTAG_TMS; bidirectional. */
  "JTAG_TMS": "26",
  /** Physical pin 27: ETH_RXP; bidirectional. */
  "ETH_RXP": "27",
  /** Physical pin 28: JTAG_TDO; bidirectional. */
  "JTAG_TDO": "28",
  /** Physical pin 29: ETH_RXN; bidirectional. */
  "ETH_RXN": "29",
  /** Physical pin 30: JTAG_TDI; bidirectional. */
  "JTAG_TDI": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: JTAG_TRST; bidirectional. */
  "JTAG_TRST": "32",
  /** Physical pin 33: ETH_LED1; output. */
  "ETH_LED1": "33",
  /** Physical pin 34: JTAG_TCK; bidirectional. */
  "JTAG_TCK": "34",
  /** Physical pin 35: ETH_LED2; output. */
  "ETH_LED2": "35",
  /** Physical pin 36: GND; passive. */
  "GND_36": "36",
  /** Physical pin 37: GND; passive. */
  "GND_37": "37",
  /** Physical pin 38: GPIO0; bidirectional. */
  "GPIO0": "38",
  /** Physical pin 39: UART2_CTS_B; bidirectional. */
  "UART2_CTS_B": "39",
  /** Physical pin 40: GPIO5; bidirectional. */
  "GPIO5": "40",
  /** Physical pin 41: UART2_RTS_B; bidirectional. */
  "UART2_RTS_B": "41",
  /** Physical pin 42: GPIO8; bidirectional. */
  "GPIO8": "42",
  /** Physical pin 43: UART2_TX; bidirectional. */
  "UART2_TX": "43",
  /** Physical pin 44: GPIO9; bidirectional. */
  "GPIO9": "44",
  /** Physical pin 45: UART2_RX; bidirectional. */
  "UART2_RX": "45",
  /** Physical pin 46: GND; passive. */
  "GND_46": "46",
  /** Physical pin 47: GND; passive. */
  "GND_47": "47",
  /** Physical pin 48: UART1_RTS_B; bidirectional. */
  "UART1_RTS_B": "48",
  /** Physical pin 49: UART3_CTS_B; bidirectional. */
  "UART3_CTS_B": "49",
  /** Physical pin 50: UART1_CTS_B; bidirectional. */
  "UART1_CTS_B": "50",
  /** Physical pin 51: UART3_RTS_B; bidirectional. */
  "UART3_RTS_B": "51",
  /** Physical pin 52: UART1_TX; bidirectional. */
  "UART1_TX": "52",
  /** Physical pin 53: UART3_RX; bidirectional. */
  "UART3_RX": "53",
  /** Physical pin 54: UART1_RX; bidirectional. */
  "UART1_RX": "54",
  /** Physical pin 55: UART3_TX; bidirectional. */
  "UART3_TX": "55",
  /** Physical pin 56: GND; passive. */
  "GND_56": "56",
  /** Physical pin 57: GND; passive. */
  "GND_57": "57",
  /** Physical pin 58: NC; no_connect. */
  "NC_58": "58",
  /** Physical pin 59: UART4_TX; bidirectional. */
  "UART4_TX": "59",
  /** Physical pin 60: NC; no_connect. */
  "NC_60": "60",
  /** Physical pin 61: UART4_RX; bidirectional. */
  "UART4_RX": "61",
  /** Physical pin 62: GND; passive. */
  "GND_62": "62",
  /** Physical pin 63: UART5_TX; bidirectional. */
  "UART5_TX": "63",
  /** Physical pin 64: AIN1/YNLR; bidirectional. */
  "AIN1/YNLR": "64",
  /** Physical pin 65: UART5_RX; bidirectional. */
  "UART5_RX": "65",
  /** Physical pin 66: AIN2/YPLL; bidirectional. */
  "AIN2/YPLL": "66",
  /** Physical pin 67: GND; passive. */
  "GND_67": "67",
  /** Physical pin 68: AIN3/XNUR; bidirectional. */
  "AIN3/XNUR": "68",
  /** Physical pin 69: ENET_MDIO; bidirectional. */
  "ENET_MDIO": "69",
  /** Physical pin 70: AIN4/XPUL; bidirectional. */
  "AIN4/XPUL": "70",
  /** Physical pin 71: ENET_MDC; bidirectional. */
  "ENET_MDC": "71",
  /** Physical pin 72: GND; passive. */
  "GND_72": "72",
  /** Physical pin 73: ENET2_TX_CLK; bidirectional. */
  "ENET2_TX_CLK": "73",
  /** Physical pin 74: LCD_D16; bidirectional. */
  "LCD_D16": "74",
  /** Physical pin 75: GND; passive. */
  "GND_75": "75",
  /** Physical pin 76: LCD_D15; bidirectional. */
  "LCD_D15": "76",
  /** Physical pin 77: ENET2_RX_ER; bidirectional. */
  "ENET2_RX_ER": "77",
  /** Physical pin 78: LCD_D14; bidirectional. */
  "LCD_D14": "78",
  /** Physical pin 79: ENET2_RXDATA0; bidirectional. */
  "ENET2_RXDATA0": "79",
  /** Physical pin 80: LCD_D13; bidirectional. */
  "LCD_D13": "80",
  /** Physical pin 81: ENET2_RXDATA1; bidirectional. */
  "ENET2_RXDATA1": "81",
  /** Physical pin 82: GND; passive. */
  "GND_82": "82",
  /** Physical pin 83: ENET2_RX_EN; bidirectional. */
  "ENET2_RX_EN": "83",
  /** Physical pin 84: LCD_D12; bidirectional. */
  "LCD_D12": "84",
  /** Physical pin 85: ENET2_TX_EN; bidirectional. */
  "ENET2_TX_EN": "85",
  /** Physical pin 86: LCD_D11; bidirectional. */
  "LCD_D11": "86",
  /** Physical pin 87: ENET2_TXDATA0; bidirectional. */
  "ENET2_TXDATA0": "87",
  /** Physical pin 88: LCD_D10; bidirectional. */
  "LCD_D10": "88",
  /** Physical pin 89: ENET2_TXDATA1; bidirectional. */
  "ENET2_TXDATA1": "89",
  /** Physical pin 90: LCD_D9; bidirectional. */
  "LCD_D9": "90",
  /** Physical pin 91: GND; passive. */
  "GND_91": "91",
  /** Physical pin 92: GND; passive. */
  "GND_92": "92",
  /** Physical pin 93: LCD_D23; bidirectional. */
  "LCD_D23": "93",
  /** Physical pin 94: LCD_D8; bidirectional. */
  "LCD_D8": "94",
  /** Physical pin 95: LCD_D22; bidirectional. */
  "LCD_D22": "95",
  /** Physical pin 96: LCD_D7; bidirectional. */
  "LCD_D7": "96",
  /** Physical pin 97: LCD_D21; bidirectional. */
  "LCD_D21": "97",
  /** Physical pin 98: LCD_D6; bidirectional. */
  "LCD_D6": "98",
  /** Physical pin 99: LCD_D20; bidirectional. */
  "LCD_D20": "99",
  /** Physical pin 100: LCD_D5; bidirectional. */
  "LCD_D5": "100",
  /** Physical pin 101: LCD_D19; bidirectional. */
  "LCD_D19": "101",
  /** Physical pin 102: GND; passive. */
  "GND_102": "102",
  /** Physical pin 103: LCD_D18; bidirectional. */
  "LCD_D18": "103",
  /** Physical pin 104: LCD_D4; bidirectional. */
  "LCD_D4": "104",
  /** Physical pin 105: LCD_D17; bidirectional. */
  "LCD_D17": "105",
  /** Physical pin 106: LCD_D3; bidirectional. */
  "LCD_D3": "106",
  /** Physical pin 107: GND; passive. */
  "GND_107": "107",
  /** Physical pin 108: LCD_D2; bidirectional. */
  "LCD_D2": "108",
  /** Physical pin 109: NAND_WE_B; bidirectional. */
  "NAND_WE_B": "109",
  /** Physical pin 110: LCD_D1; bidirectional. */
  "LCD_D1": "110",
  /** Physical pin 111: NAND_RE_B; bidirectional. */
  "NAND_RE_B": "111",
  /** Physical pin 112: LCD_D0; bidirectional. */
  "LCD_D0": "112",
  /** Physical pin 113: NAND_DATA01; bidirectional. */
  "NAND_DATA01": "113",
  /** Physical pin 114: GND; passive. */
  "GND_114": "114",
  /** Physical pin 115: NAND_DATA_02; bidirectional. */
  "NAND_DATA_02": "115",
  /** Physical pin 116: LCD_HSYNC; bidirectional. */
  "LCD_HSYNC": "116",
  /** Physical pin 117: NAND_DATA03; bidirectional. */
  "NAND_DATA03": "117",
  /** Physical pin 118: LCD_RESET; bidirectional. */
  "LCD_RESET": "118",
  /** Physical pin 119: NAND_DATA04; bidirectional. */
  "NAND_DATA04": "119",
  /** Physical pin 120: LCD_VSYNC; bidirectional. */
  "LCD_VSYNC": "120",
  /** Physical pin 121: NAND_DATA05; bidirectional. */
  "NAND_DATA05": "121",
  /** Physical pin 122: GND; passive. */
  "GND_122": "122",
  /** Physical pin 123: NAND_DATA06; bidirectional. */
  "NAND_DATA06": "123",
  /** Physical pin 124: LCD_DOTCLK; bidirectional. */
  "LCD_DOTCLK": "124",
  /** Physical pin 125: NAND_DATA07; bidirectional. */
  "NAND_DATA07": "125",
  /** Physical pin 126: GND; passive. */
  "GND_126": "126",
  /** Physical pin 127: NAND_ALE; bidirectional. */
  "NAND_ALE": "127",
  /** Physical pin 128: LCD_ENABLE; bidirectional. */
  "LCD_ENABLE": "128",
  /** Physical pin 129: GND; passive. */
  "GND_129": "129",
  /** Physical pin 130: NC; no_connect. */
  "NC_130": "130",
  /** Physical pin 131: CSI_D7; bidirectional. */
  "CSI_D7": "131",
  /** Physical pin 132: NC; no_connect. */
  "NC_132": "132",
  /** Physical pin 133: CSI_D6; bidirectional. */
  "CSI_D6": "133",
  /** Physical pin 134: NC; no_connect. */
  "NC_134": "134",
  /** Physical pin 135: CSI_D5; bidirectional. */
  "CSI_D5": "135",
  /** Physical pin 136: NC; no_connect. */
  "NC_136": "136",
  /** Physical pin 137: CSI_D4; bidirectional. */
  "CSI_D4": "137",
  /** Physical pin 138: NC; no_connect. */
  "NC_138": "138",
  /** Physical pin 139: CSI_D3; bidirectional. */
  "CSI_D3": "139",
  /** Physical pin 140: NC; no_connect. */
  "NC_140": "140",
  /** Physical pin 141: CSI_D2; bidirectional. */
  "CSI_D2": "141",
  /** Physical pin 142: NC; no_connect. */
  "NC_142": "142",
  /** Physical pin 143: CSI_D1; bidirectional. */
  "CSI_D1": "143",
  /** Physical pin 144: NC; no_connect. */
  "NC_144": "144",
  /** Physical pin 145: CSI_D0; bidirectional. */
  "CSI_D0": "145",
  /** Physical pin 146: NC; no_connect. */
  "NC_146": "146",
  /** Physical pin 147: CSI_VSYNC; bidirectional. */
  "CSI_VSYNC": "147",
  /** Physical pin 148: NC; no_connect. */
  "NC_148": "148",
  /** Physical pin 149: CSI_HSYNC; bidirectional. */
  "CSI_HSYNC": "149",
  /** Physical pin 150: NC; no_connect. */
  "NC_150": "150",
  /** Physical pin 151: GND; passive. */
  "GND_151": "151",
  /** Physical pin 152: NC; no_connect. */
  "NC_152": "152",
  /** Physical pin 153: CSI_PIXCLK; bidirectional. */
  "CSI_PIXCLK": "153",
  /** Physical pin 154: NC; no_connect. */
  "NC_154": "154",
  /** Physical pin 155: GND; passive. */
  "GND_155": "155",
  /** Physical pin 156: NC; no_connect. */
  "NC_156": "156",
  /** Physical pin 157: CSI_MCLK; bidirectional. */
  "CSI_MCLK": "157",
  /** Physical pin 158: NC; no_connect. */
  "NC_158": "158",
  /** Physical pin 159: GND; passive. */
  "GND_159": "159",
  /** Physical pin 160: NC; no_connect. */
  "NC_160": "160",
  /** Physical pin 161: NC; no_connect. */
  "NC_161": "161",
  /** Physical pin 162: NC; no_connect. */
  "NC_162": "162",
  /** Physical pin 163: NC; no_connect. */
  "NC_163": "163",
  /** Physical pin 164: NC; no_connect. */
  "NC_164": "164",
  /** Physical pin 165: NC; no_connect. */
  "NC_165": "165",
  /** Physical pin 166: NC; no_connect. */
  "NC_166": "166",
  /** Physical pin 167: NC; no_connect. */
  "NC_167": "167",
  /** Physical pin 168: NC; no_connect. */
  "NC_168": "168",
  /** Physical pin 169: NC; no_connect. */
  "NC_169": "169",
  /** Physical pin 170: NC; no_connect. */
  "NC_170": "170",
  /** Physical pin 171: NC; no_connect. */
  "NC_171": "171",
  /** Physical pin 172: NC; no_connect. */
  "NC_172": "172",
  /** Physical pin 173: NC; no_connect. */
  "NC_173": "173",
  /** Physical pin 174: NC; no_connect. */
  "NC_174": "174",
  /** Physical pin 175: NC; no_connect. */
  "NC_175": "175",
  /** Physical pin 176: NC; no_connect. */
  "NC_176": "176",
  /** Physical pin 177: NC; no_connect. */
  "NC_177": "177",
  /** Physical pin 178: NC; no_connect. */
  "NC_178": "178",
  /** Physical pin 179: NC; no_connect. */
  "NC_179": "179",
  /** Physical pin 180: NC; no_connect. */
  "NC_180": "180",
  /** Physical pin 181: NC; no_connect. */
  "NC_181": "181",
  /** Physical pin 182: NC; no_connect. */
  "NC_182": "182",
  /** Physical pin 183: NC; no_connect. */
  "NC_183": "183",
  /** Physical pin 184: NC; no_connect. */
  "NC_184": "184",
  /** Physical pin 185: NC; no_connect. */
  "NC_185": "185",
  /** Physical pin 186: NC; no_connect. */
  "NC_186": "186",
  /** Physical pin 187: NC; no_connect. */
  "NC_187": "187",
  /** Physical pin 188: NC; no_connect. */
  "NC_188": "188",
  /** Physical pin 189: NC; no_connect. */
  "NC_189": "189",
  /** Physical pin 190: NC; no_connect. */
  "NC_190": "190",
  /** Physical pin 191: NC; no_connect. */
  "NC_191": "191",
  /** Physical pin 192: NC; no_connect. */
  "NC_192": "192",
  /** Physical pin 193: NC; no_connect. */
  "NC_193": "193",
  /** Physical pin 194: NC; no_connect. */
  "NC_194": "194",
  /** Physical pin 195: NC; no_connect. */
  "NC_195": "195",
  /** Physical pin 196: NC; no_connect. */
  "NC_196": "196",
  /** Physical pin 197: POR_B; input. */
  "POR_B": "197",
  /** Physical pin 198: BOOT_MODE0; input. */
  "BOOT_MODE0": "198",
  /** Physical pin 199: ON/OFF; input. */
  "ON/OFF": "199",
  /** Physical pin 200: BOOT_MODE1; input. */
  "BOOT_MODE1": "200",
  /** Physical pin 201: +3V3; power_in. */
  "+3V3_201": "201",
  /** Physical pin 202: +3V3; passive. */
  "+3V3_202": "202",
  /** Physical pin 203: +3V3; passive. */
  "+3V3_203": "203",
  /** Physical pin 204: +3V3; passive. */
  "+3V3_204": "204",
}) {
  override schema = "MCU_Module:OPOS6UL";
  override referencePrefix = "U";
}

/**
 * NXP i.MX6ULL/i.MX6UL, 256 or 512 MB RAM, industrial SoM computer, M.2M (NGFF)
 *
 * KiCad symbol: `MCU_Module:OPOS6UL_NANO`. Reference prefix: `U`.
 * Footprint filters: *M.2*.
 * @see http://www.opossom.com/_downloads/opos6ul_nano/datasheet_opos6ul_nano.pdf
 * Keywords: opos6ul compute module.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPOS6UL_NANO extends Component.withPins({
  /** Physical pin 1: +3V3; power_in. */
  "+3V3_1": "1",
  /** Physical pin 2: +3V3; passive. */
  "+3V3_2": "2",
  /** Physical pin 3: VSNVS; power_in. */
  "VSNVS": "3",
  /** Physical pin 4: ~{POR_B}; input. */
  "~{POR_B}": "4",
  /** Physical pin 5: USB_OTG1_VBUS; power_in. */
  "USB_OTG1_VBUS": "5",
  /** Physical pin 6: USB_OTG2_DN; bidirectional. */
  "USB_OTG2_DN": "6",
  /** Physical pin 7: USB_OTG1_DN; bidirectional. */
  "USB_OTG1_DN": "7",
  /** Physical pin 8: USB_OTG2_DP; bidirectional. */
  "USB_OTG2_DP": "8",
  /** Physical pin 9: USB_OTG1_DP; bidirectional. */
  "USB_OTG1_DP": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: GPIO9; bidirectional. */
  "GPIO9": "12",
  /** Physical pin 13: GPIO8; bidirectional. */
  "GPIO8": "13",
  /** Physical pin 14: UART4_RX; bidirectional. */
  "UART4_RX": "14",
  /** Physical pin 15: GPIO3; bidirectional. */
  "GPIO3": "15",
  /** Physical pin 16: UART4_TX; bidirectional. */
  "UART4_TX": "16",
  /** Physical pin 17: UART1_RX; bidirectional. */
  "UART1_RX": "17",
  /** Physical pin 18: UART5_RX; bidirectional. */
  "UART5_RX": "18",
  /** Physical pin 19: UART1_TX; bidirectional. */
  "UART1_TX": "19",
  /** Physical pin 20: UART5_TX; bidirectional. */
  "UART5_TX": "20",
  /** Physical pin 21: UART2_RX; bidirectional. */
  "UART2_RX": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
  /** Physical pin 23: UART2_TX; bidirectional. */
  "UART2_TX": "23",
  /** Physical pin 24: LCD_D1; bidirectional. */
  "LCD_D1": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
  /** Physical pin 26: LCD_D3; bidirectional. */
  "LCD_D3": "26",
  /** Physical pin 27: LCD_D0; bidirectional. */
  "LCD_D0": "27",
  /** Physical pin 28: LCD_D5; bidirectional. */
  "LCD_D5": "28",
  /** Physical pin 29: LCD_D2; bidirectional. */
  "LCD_D2": "29",
  /** Physical pin 30: LCD_D7; bidirectional. */
  "LCD_D7": "30",
  /** Physical pin 31: LCD_D4; bidirectional. */
  "LCD_D4": "31",
  /** Physical pin 32: LCD_D9; bidirectional. */
  "LCD_D9": "32",
  /** Physical pin 33: LCD_D6; bidirectional. */
  "LCD_D6": "33",
  /** Physical pin 34: LCD_D11; bidirectional. */
  "LCD_D11": "34",
  /** Physical pin 35: LCD_D8; bidirectional. */
  "LCD_D8": "35",
  /** Physical pin 36: LCD_D13; bidirectional. */
  "LCD_D13": "36",
  /** Physical pin 37: LCD_D10; bidirectional. */
  "LCD_D10": "37",
  /** Physical pin 38: LCD_D15; bidirectional. */
  "LCD_D15": "38",
  /** Physical pin 39: LCD_D12; bidirectional. */
  "LCD_D12": "39",
  /** Physical pin 40: LCD_D17; bidirectional. */
  "LCD_D17": "40",
  /** Physical pin 41: LCD_D14; bidirectional. */
  "LCD_D14": "41",
  /** Physical pin 42: LCD_HSYNC; bidirectional. */
  "LCD_HSYNC": "42",
  /** Physical pin 43: LCD_D16; bidirectional. */
  "LCD_D16": "43",
  /** Physical pin 44: LCD_VSYNC; bidirectional. */
  "LCD_VSYNC": "44",
  /** Physical pin 45: GND; passive. */
  "GND_45": "45",
  /** Physical pin 46: LCD_ENABLE; bidirectional. */
  "LCD_ENABLE": "46",
  /** Physical pin 47: LCD_DOTCLK; bidirectional. */
  "LCD_DOTCLK": "47",
  /** Physical pin 48: CSI_HSYNC; bidirectional. */
  "CSI_HSYNC": "48",
  /** Physical pin 49: GND; passive. */
  "GND_49": "49",
  /** Physical pin 50: CSI_VSYNC; bidirectional. */
  "CSI_VSYNC": "50",
  /** Physical pin 51: CSI_PIXCLK; bidirectional. */
  "CSI_PIXCLK": "51",
  /** Physical pin 52: CSI_D1; bidirectional. */
  "CSI_D1": "52",
  /** Physical pin 53: CSI_MCLK; bidirectional. */
  "CSI_MCLK": "53",
  /** Physical pin 54: CSI_D3; bidirectional. */
  "CSI_D3": "54",
  /** Physical pin 55: CSI_D0; bidirectional. */
  "CSI_D0": "55",
  /** Physical pin 56: CSI_D5; bidirectional. */
  "CSI_D5": "56",
  /** Physical pin 57: CSI_D2; bidirectional. */
  "CSI_D2": "57",
  /** Physical pin 58: CSI_D7; bidirectional. */
  "CSI_D7": "58",
  /** Physical pin 67: CSI_D4; bidirectional. */
  "CSI_D4": "67",
  /** Physical pin 68: ETH_LED1; output. */
  "ETH_LED1": "68",
  /** Physical pin 69: CSI_D6; bidirectional. */
  "CSI_D6": "69",
  /** Physical pin 70: ETH_LED2; output. */
  "ETH_LED2": "70",
  /** Physical pin 71: GND; passive. */
  "GND_71": "71",
  /** Physical pin 72: ETH_RXP; input. */
  "ETH_RXP": "72",
  /** Physical pin 73: ETH_TXP; output. */
  "ETH_TXP": "73",
  /** Physical pin 74: ETH_RXN; input. */
  "ETH_RXN": "74",
  /** Physical pin 75: ETH_TXN; output. */
  "ETH_TXN": "75",
}) {
  override schema = "MCU_Module:OPOS6UL_NANO";
  override referencePrefix = "U";
}

/**
 * ESP8266 development board
 *
 * KiCad symbol: `MCU_Module:Olimex_MOD-WIFI-ESP8266-DEV`. Reference prefix: `U`.
 * Footprint filters: *MOD?WIFI?ESP8266?DEV*.
 * @see https://raw.githubusercontent.com/OLIMEX/ESP8266/master/HARDWARE/MOD-WIFI-ESP8266-DEV/MOD-WiFi-ESP8266-DEV%20revision%20B2/MOD-WiFi-ESP8266-DEV_Rev_B2.pdf
 * Keywords: ESP8266.
 * Default footprint: Module:Olimex_MOD-WIFI-ESP8266-DEV.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Olimex_MOD_WIFI_ESP8266_DEV extends Component.withPins({
  /** Physical pin 1: 3.3V; power_in. */
  "3.3V": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: GPIO1; bidirectional. */
  "GPIO1": "3",
  /** Physical pin 4: GPIO3; bidirectional. */
  "GPIO3": "4",
  /** Physical pin 5: SD_CLK; unspecified. */
  "SD_CLK": "5",
  /** Physical pin 6: SD_D2; unspecified. */
  "SD_D2": "6",
  /** Physical pin 7: SD_D1; unspecified. */
  "SD_D1": "7",
  /** Physical pin 8: SD_CMD; unspecified. */
  "SD_CMD": "8",
  /** Physical pin 9: SD_D0; unspecified. */
  "SD_D0": "9",
  /** Physical pin 10: SD_D3; unspecified. */
  "SD_D3": "10",
  /** Physical pin 11: GPIO5; bidirectional. */
  "GPIO5": "11",
  /** Physical pin 12: ADC; unspecified. */
  "ADC": "12",
  /** Physical pin 13: RSTB; input. */
  "RSTB": "13",
  /** Physical pin 14: CHIP_E; unspecified. */
  "CHIP_E": "14",
  /** Physical pin 15: GPIO16; bidirectional. */
  "GPIO16": "15",
  /** Physical pin 16: GPIO12; bidirectional. */
  "GPIO12": "16",
  /** Physical pin 17: GPIO14; bidirectional. */
  "GPIO14": "17",
  /** Physical pin 18: GPIO13; bidirectional. */
  "GPIO13": "18",
  /** Physical pin 19: GPIO15; bidirectional. */
  "GPIO15": "19",
  /** Physical pin 20: GPIO-2; bidirectional. */
  "GPIO-2": "20",
  /** Physical pin 21: GPIO-0; bidirectional. */
  "GPIO-0": "21",
  /** Physical pin 22: GPIO4; bidirectional. */
  "GPIO4": "22",
}) {
  override schema = "MCU_Module:Olimex_MOD-WIFI-ESP8266-DEV";
  override referencePrefix = "U";
}

/**
 * Iot Computer Module by Onion
 *
 * KiCad symbol: `MCU_Module:Omega2+`. Reference prefix: `U`.
 * Footprint filters: Onion*Omega2+*.
 * @see https://docs.onion.io/omega2-docs/omega2p.html
 * Keywords: onion omega module.
 * Default footprint: Module:Onion_Omega2+.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Omega2_ extends Component.withPins({
  /** Physical pin 2: 11; bidirectional. */
  "11": "2",
  /** Physical pin 7: 15; bidirectional. */
  "15": "7",
  /** Physical pin 6: 16; bidirectional. */
  "16": "6",
  /** Physical pin 5: 17; bidirectional. */
  "17": "5",
  /** Physical pin 20: 18; bidirectional. */
  "18": "20",
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 3: 3/I2S_CLK; bidirectional. */
  "3/I2S_CLK": "3",
  /** Physical pin 4: 2/I2S_WS; bidirectional. */
  "2/I2S_WS": "4",
  /** Physical pin 8: SER1_RX/46; bidirectional. */
  "SER1_RX/46": "8",
  /** Physical pin 9: SER1_TX/45; bidirectional. */
  "SER1_TX/45": "9",
  /** Physical pin 10: 9/SPI_MISO; bidirectional. */
  "9/SPI_MISO": "10",
  /** Physical pin 11: 8/SPI_MOSI; bidirectional. */
  "8/SPI_MOSI": "11",
  /** Physical pin 12: 7/SPI_CLK; bidirectional. */
  "7/SPI_CLK": "12",
  /** Physical pin 13: 6/SPI_CS1; bidirectional. */
  "6/SPI_CS1": "13",
  /** Physical pin 14: 1/I2S_SDO; bidirectional. */
  "1/I2S_SDO": "14",
  /** Physical pin 15: 0/I2S_SDI; bidirectional. */
  "0/I2S_SDI": "15",
  /** Physical pin 16: ~{RST}; input. */
  "~{RST}": "16",
  /** Physical pin 17: I2C_SDA/5; bidirectional. */
  "I2C_SDA/5": "17",
  /** Physical pin 18: I2C_SCL/4; bidirectional. */
  "I2C_SCL/4": "18",
  /** Physical pin 19: 19; bidirectional. */
  "P19": "19",
  /** Physical pin 21: ETH_RX+; input. */
  "ETH_RX+": "21",
  /** Physical pin 22: ETH_RX-; input. */
  "ETH_RX-": "22",
  /** Physical pin 23: ETH_TX+; output. */
  "ETH_TX+": "23",
  /** Physical pin 24: ETH_TX-; output. */
  "ETH_TX-": "24",
  /** Physical pin 25: 3.3V_VOUT; power_out. */
  "3.3V_VOUT": "25",
  /** Physical pin 26: FW_RST/38; bidirectional. */
  "FW_RST/38": "26",
  /** Physical pin 27: SER0_TX/12; bidirectional. */
  "SER0_TX/12": "27",
  /** Physical pin 28: SER0_RX/13; bidirectional. */
  "SER0_RX/13": "28",
  /** Physical pin 29: USB_D-; bidirectional. */
  "USB_D-": "29",
  /** Physical pin 30: USB_D+; bidirectional. */
  "USB_D+": "30",
  /** Physical pin 31: 3.3V_VIN; power_in. */
  "3.3V_VIN": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
}) {
  override schema = "MCU_Module:Omega2+";
  override referencePrefix = "U";
}

/**
 * Iot Computer Module by Onion, 64MB RAM, 16MB FLASH
 *
 * KiCad symbol: `MCU_Module:Omega2S`. Reference prefix: `U`.
 * Footprint filters: Onion*Omega2S*.
 * @see https://github.com/OnionIoT/Omega2/raw/master/Documents/Omega2S%20Datasheet.pdf
 * Keywords: onion omega module.
 * Default footprint: Module:Onion_Omega2S.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Omega2S extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GPIO_36/~{PERST}; bidirectional. */
  "GPIO_36/~{PERST}": "2",
  /** Physical pin 3: GPIO_37/REFCLK; bidirectional. */
  "GPIO_37/REFCLK": "3",
  /** Physical pin 4: SW_RST/GPIO_38; bidirectional. */
  "SW_RST/GPIO_38": "4",
  /** Physical pin 5: ~{HW_RST}; input. */
  "~{HW_RST}": "5",
  /** Physical pin 6: GPIO_39/LINK4; bidirectional. */
  "GPIO_39/LINK4": "6",
  /** Physical pin 7: GPIO_40/LINK3; bidirectional. */
  "GPIO_40/LINK3": "7",
  /** Physical pin 8: 3.3V; power_in. */
  "3.3V_8": "8",
  /** Physical pin 9: 3.3V; power_in. */
  "3.3V_9": "9",
  /** Physical pin 10: PCIE_TXN0; output. */
  "PCIE_TXN0": "10",
  /** Physical pin 11: PCIE_TXP0; output. */
  "PCIE_TXP0": "11",
  /** Physical pin 12: PCIE_RXP0; input. */
  "PCIE_RXP0": "12",
  /** Physical pin 13: PCIE_RXN0; input. */
  "PCIE_RXN0": "13",
  /** Physical pin 14: PCIE_CKN0; output. */
  "PCIE_CKN0": "14",
  /** Physical pin 15: PCIE_CKP0; output. */
  "PCIE_CKP0": "15",
  /** Physical pin 16: GPIO_41; bidirectional. */
  "GPIO_41": "16",
  /** Physical pin 17: GPIO_42; bidirectional. */
  "GPIO_42": "17",
  /** Physical pin 18: GPIO_43; bidirectional. */
  "GPIO_43": "18",
  /** Physical pin 19: GPIO_44/~{WLED}; bidirectional. */
  "GPIO_44/~{WLED}": "19",
  /** Physical pin 20: UART_TXD1/GPIO_45; bidirectional. */
  "UART_TXD1/GPIO_45": "20",
  /** Physical pin 21: UART_RXD1/GPIO_46; bidirectional. */
  "UART_RXD1/GPIO_46": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: WIFI_RF; passive. */
  "WIFI_RF": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
  /** Physical pin 26: GPIO_0/I2S_SDI; bidirectional. */
  "GPIO_0/I2S_SDI": "26",
  /** Physical pin 27: GPIO_1/I2S_SD0; bidirectional. */
  "GPIO_1/I2S_SD0": "27",
  /** Physical pin 28: GPIO_2/I2S_WS; bidirectional. */
  "GPIO_2/I2S_WS": "28",
  /** Physical pin 29: GPIO_3/I2S_CLK; bidirectional. */
  "GPIO_3/I2S_CLK": "29",
  /** Physical pin 30: I2C_SCLK/GPIO_4; bidirectional. */
  "I2C_SCLK/GPIO_4": "30",
  /** Physical pin 31: I2C_SDA/GPIO_5; bidirectional. */
  "I2C_SDA/GPIO_5": "31",
  /** Physical pin 32: VDD_FLASH; power_in. */
  "VDD_FLASH": "32",
  /** Physical pin 33: SPI_CS1; output. */
  "SPI_CS1": "33",
  /** Physical pin 34: SPI_CLK; output. */
  "SPI_CLK": "34",
  /** Physical pin 35: SPI_MISO; input. */
  "SPI_MISO": "35",
  /** Physical pin 36: SPI_MOSI; output. */
  "SPI_MOSI": "36",
  /** Physical pin 37: SPI_CS0; output. */
  "SPI_CS0": "37",
  /** Physical pin 38: GPIO_11; bidirectional. */
  "GPIO_11": "38",
  /** Physical pin 39: UART_TXD0/GPIO_12; bidirectional. */
  "UART_TXD0/GPIO_12": "39",
  /** Physical pin 40: UART_RXD0/GPIO_13; bidirectional. */
  "UART_RXD0/GPIO_13": "40",
  /** Physical pin 41: RXI_P0; input. */
  "RXI_P0": "41",
  /** Physical pin 42: RXI_N0; input. */
  "RXI_N0": "42",
  /** Physical pin 43: TXO_P0; output. */
  "TXO_P0": "43",
  /** Physical pin 44: TX0_N0; output. */
  "TX0_N0": "44",
  /** Physical pin 45: GPIO_14; bidirectional. */
  "GPIO_14": "45",
  /** Physical pin 46: GPIO_15; bidirectional. */
  "GPIO_15": "46",
  /** Physical pin 47: GPIO_16; bidirectional. */
  "GPIO_16": "47",
  /** Physical pin 48: GPIO_17; bidirectional. */
  "GPIO_17": "48",
  /** Physical pin 49: GPIO_18/PWM_CH0; bidirectional. */
  "GPIO_18/PWM_CH0": "49",
  /** Physical pin 50: GPIO_19/PWM_CH1; bidirectional. */
  "GPIO_19/PWM_CH1": "50",
  /** Physical pin 51: UART_TXD2/PWM_CH2/GPIO_20; bidirectional. */
  "UART_TXD2/PWM_CH2/GPIO_20": "51",
  /** Physical pin 52: UART_RXD2/PWM_CH3/GPIO_21; bidirectional. */
  "UART_RXD2/PWM_CH3/GPIO_21": "52",
  /** Physical pin 53: SD_WP/GPIO_22; bidirectional. */
  "SD_WP/GPIO_22": "53",
  /** Physical pin 54: SD_CD/GPIO_23; bidirectional. */
  "SD_CD/GPIO_23": "54",
  /** Physical pin 55: SD_D1/GPIO_24; bidirectional. */
  "SD_D1/GPIO_24": "55",
  /** Physical pin 56: SD_D0/GPIO_25; bidirectional. */
  "SD_D0/GPIO_25": "56",
  /** Physical pin 57: SD_CLK/GPIO_26; bidirectional. */
  "SD_CLK/GPIO_26": "57",
  /** Physical pin 58: SD_CMD/GPIO_27; bidirectional. */
  "SD_CMD/GPIO_27": "58",
  /** Physical pin 59: SD_D3/GPIO_28; bidirectional. */
  "SD_D3/GPIO_28": "59",
  /** Physical pin 60: SD_D2/GPIO_29; bidirectional. */
  "SD_D2/GPIO_29": "60",
  /** Physical pin 61: USB_DP; bidirectional. */
  "USB_DP": "61",
  /** Physical pin 62: USB_DM; bidirectional. */
  "USB_DM": "62",
  /** Physical pin 63: GND; passive. */
  "GND_63": "63",
  /** Physical pin 64: GND; passive. */
  "GND_64": "64",
}) {
  override schema = "MCU_Module:Omega2S";
  override referencePrefix = "U";
}

/**
 * Iot Computer Module by Onion, 128MB RAM, 32MB FLASH
 *
 * KiCad symbol: `MCU_Module:Omega2S+`. Reference prefix: `U`.
 * Footprint filters: Onion*Omega2S*.
 * @see https://github.com/OnionIoT/Omega2/raw/master/Documents/Omega2S%20Datasheet.pdf
 * Keywords: onion omega module.
 * Default footprint: Module:Onion_Omega2S.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Omega2S_ extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GPIO_36/~{PERST}; bidirectional. */
  "GPIO_36/~{PERST}": "2",
  /** Physical pin 3: GPIO_37/REFCLK; bidirectional. */
  "GPIO_37/REFCLK": "3",
  /** Physical pin 4: SW_RST/GPIO_38; bidirectional. */
  "SW_RST/GPIO_38": "4",
  /** Physical pin 5: ~{HW_RST}; input. */
  "~{HW_RST}": "5",
  /** Physical pin 6: GPIO_39/LINK4; bidirectional. */
  "GPIO_39/LINK4": "6",
  /** Physical pin 7: GPIO_40/LINK3; bidirectional. */
  "GPIO_40/LINK3": "7",
  /** Physical pin 8: 3.3V; power_in. */
  "3.3V_8": "8",
  /** Physical pin 9: 3.3V; power_in. */
  "3.3V_9": "9",
  /** Physical pin 10: PCIE_TXN0; output. */
  "PCIE_TXN0": "10",
  /** Physical pin 11: PCIE_TXP0; output. */
  "PCIE_TXP0": "11",
  /** Physical pin 12: PCIE_RXP0; input. */
  "PCIE_RXP0": "12",
  /** Physical pin 13: PCIE_RXN0; input. */
  "PCIE_RXN0": "13",
  /** Physical pin 14: PCIE_CKN0; output. */
  "PCIE_CKN0": "14",
  /** Physical pin 15: PCIE_CKP0; output. */
  "PCIE_CKP0": "15",
  /** Physical pin 16: GPIO_41; bidirectional. */
  "GPIO_41": "16",
  /** Physical pin 17: GPIO_42; bidirectional. */
  "GPIO_42": "17",
  /** Physical pin 18: GPIO_43; bidirectional. */
  "GPIO_43": "18",
  /** Physical pin 19: GPIO_44/~{WLED}; bidirectional. */
  "GPIO_44/~{WLED}": "19",
  /** Physical pin 20: UART_TXD1/GPIO_45; bidirectional. */
  "UART_TXD1/GPIO_45": "20",
  /** Physical pin 21: UART_RXD1/GPIO_46; bidirectional. */
  "UART_RXD1/GPIO_46": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: WIFI_RF; passive. */
  "WIFI_RF": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
  /** Physical pin 26: GPIO_0/I2S_SDI; bidirectional. */
  "GPIO_0/I2S_SDI": "26",
  /** Physical pin 27: GPIO_1/I2S_SD0; bidirectional. */
  "GPIO_1/I2S_SD0": "27",
  /** Physical pin 28: GPIO_2/I2S_WS; bidirectional. */
  "GPIO_2/I2S_WS": "28",
  /** Physical pin 29: GPIO_3/I2S_CLK; bidirectional. */
  "GPIO_3/I2S_CLK": "29",
  /** Physical pin 30: I2C_SCLK/GPIO_4; bidirectional. */
  "I2C_SCLK/GPIO_4": "30",
  /** Physical pin 31: I2C_SDA/GPIO_5; bidirectional. */
  "I2C_SDA/GPIO_5": "31",
  /** Physical pin 32: VDD_FLASH; power_in. */
  "VDD_FLASH": "32",
  /** Physical pin 33: SPI_CS1; output. */
  "SPI_CS1": "33",
  /** Physical pin 34: SPI_CLK; output. */
  "SPI_CLK": "34",
  /** Physical pin 35: SPI_MISO; input. */
  "SPI_MISO": "35",
  /** Physical pin 36: SPI_MOSI; output. */
  "SPI_MOSI": "36",
  /** Physical pin 37: SPI_CS0; output. */
  "SPI_CS0": "37",
  /** Physical pin 38: GPIO_11; bidirectional. */
  "GPIO_11": "38",
  /** Physical pin 39: UART_TXD0/GPIO_12; bidirectional. */
  "UART_TXD0/GPIO_12": "39",
  /** Physical pin 40: UART_RXD0/GPIO_13; bidirectional. */
  "UART_RXD0/GPIO_13": "40",
  /** Physical pin 41: RXI_P0; input. */
  "RXI_P0": "41",
  /** Physical pin 42: RXI_N0; input. */
  "RXI_N0": "42",
  /** Physical pin 43: TXO_P0; output. */
  "TXO_P0": "43",
  /** Physical pin 44: TX0_N0; output. */
  "TX0_N0": "44",
  /** Physical pin 45: GPIO_14; bidirectional. */
  "GPIO_14": "45",
  /** Physical pin 46: GPIO_15; bidirectional. */
  "GPIO_15": "46",
  /** Physical pin 47: GPIO_16; bidirectional. */
  "GPIO_16": "47",
  /** Physical pin 48: GPIO_17; bidirectional. */
  "GPIO_17": "48",
  /** Physical pin 49: GPIO_18/PWM_CH0; bidirectional. */
  "GPIO_18/PWM_CH0": "49",
  /** Physical pin 50: GPIO_19/PWM_CH1; bidirectional. */
  "GPIO_19/PWM_CH1": "50",
  /** Physical pin 51: UART_TXD2/PWM_CH2/GPIO_20; bidirectional. */
  "UART_TXD2/PWM_CH2/GPIO_20": "51",
  /** Physical pin 52: UART_RXD2/PWM_CH3/GPIO_21; bidirectional. */
  "UART_RXD2/PWM_CH3/GPIO_21": "52",
  /** Physical pin 53: SD_WP/GPIO_22; bidirectional. */
  "SD_WP/GPIO_22": "53",
  /** Physical pin 54: SD_CD/GPIO_23; bidirectional. */
  "SD_CD/GPIO_23": "54",
  /** Physical pin 55: SD_D1/GPIO_24; bidirectional. */
  "SD_D1/GPIO_24": "55",
  /** Physical pin 56: SD_D0/GPIO_25; bidirectional. */
  "SD_D0/GPIO_25": "56",
  /** Physical pin 57: SD_CLK/GPIO_26; bidirectional. */
  "SD_CLK/GPIO_26": "57",
  /** Physical pin 58: SD_CMD/GPIO_27; bidirectional. */
  "SD_CMD/GPIO_27": "58",
  /** Physical pin 59: SD_D3/GPIO_28; bidirectional. */
  "SD_D3/GPIO_28": "59",
  /** Physical pin 60: SD_D2/GPIO_29; bidirectional. */
  "SD_D2/GPIO_29": "60",
  /** Physical pin 61: USB_DP; bidirectional. */
  "USB_DP": "61",
  /** Physical pin 62: USB_DM; bidirectional. */
  "USB_DM": "62",
  /** Physical pin 63: GND; passive. */
  "GND_63": "63",
  /** Physical pin 64: GND; passive. */
  "GND_64": "64",
}) {
  override schema = "MCU_Module:Omega2S+";
  override referencePrefix = "U";
}

/**
 * Singleboard computer with ARM Cortex-A8 1GHz, 512MB RAM
 *
 * KiCad symbol: `MCU_Module:PocketBeagle`. Reference prefix: `U`.
 * Footprint filters: BeagleBoard*PocketBeagle*.
 * @see https://github.com/beagleboard/pocketbeagle/wiki/System-Reference-Manual
 * Keywords: beagleboard pocketbeagle.
 * Default footprint: Module:BeagleBoard_PocketBeagle.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PocketBeagle extends Component.withPins({
  /** Physical pin 1: VIN; power_in. */
  "VIN": "1",
  /** Physical pin 2: AIN6/GPIO87; bidirectional. */
  "AIN6/GPIO87": "2",
  /** Physical pin 3: USB1.DRVVBUS; output. */
  "USB1.DRVVBUS": "3",
  /** Physical pin 4: GPIO89; bidirectional. */
  "GPIO89": "4",
  /** Physical pin 5: USB1.VBUS; input. */
  "USB1.VBUS": "5",
  /** Physical pin 6: SPI0.CS; bidirectional. */
  "SPI0.CS": "6",
  /** Physical pin 7: USB1.VIN; power_in. */
  "USB1.VIN": "7",
  /** Physical pin 8: SPI0.CLK; bidirectional. */
  "SPI0.CLK": "8",
  /** Physical pin 9: USB1.D-; bidirectional. */
  "USB1.D-": "9",
  /** Physical pin 10: SPI0.MISO; bidirectional. */
  "SPI0.MISO": "10",
  /** Physical pin 11: USB1.D+; bidirectional. */
  "USB1.D+": "11",
  /** Physical pin 12: SPI0.MOSI; bidirectional. */
  "SPI0.MOSI": "12",
  /** Physical pin 13: USB1.ID; input. */
  "USB1.ID": "13",
  /** Physical pin 14: 3.3V; power_out. */
  "3.3V_14": "14",
  /** Physical pin 15: GND; power_in. */
  "GND_15": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
  /** Physical pin 17: AIN.VREF-; power_in. */
  "AIN.VREF-": "17",
  /** Physical pin 18: AIN.VREF+; power_in. */
  "AIN.VREF+": "18",
  /** Physical pin 19: AIN0(1.8V); input. */
  "AIN0(1.8V)": "19",
  /** Physical pin 20: GPIO20; bidirectional. */
  "GPIO20": "20",
  /** Physical pin 21: AIN1(1.8V); input. */
  "AIN1(1.8V)": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
  /** Physical pin 23: AIN2(1.8V); input. */
  "AIN2(1.8V)": "23",
  /** Physical pin 24: VOUT; power_out. */
  "VOUT_24": "24",
  /** Physical pin 25: AIN3(1.8V); input. */
  "AIN3(1.8V)": "25",
  /** Physical pin 26: I2C2.SDA; bidirectional. */
  "I2C2.SDA": "26",
  /** Physical pin 27: AIN4(1.8V); input. */
  "AIN4(1.8V)": "27",
  /** Physical pin 28: I2C2.SCL; bidirectional. */
  "I2C2.SCL": "28",
  /** Physical pin 29: PRU0.7; bidirectional. */
  "PRU0.7": "29",
  /** Physical pin 30: UART0.TX; bidirectional. */
  "UART0.TX": "30",
  /** Physical pin 31: PRU0.4; bidirectional. */
  "PRU0.4": "31",
  /** Physical pin 32: UART0.RX; bidirectional. */
  "UART0.RX": "32",
  /** Physical pin 33: PRU0.1; bidirectional. */
  "PRU0.1": "33",
  /** Physical pin 34: GPIO26; bidirectional. */
  "GPIO26": "34",
  /** Physical pin 35: PRU1.10; bidirectional. */
  "PRU1.10": "35",
  /** Physical pin 36: PWM0A; bidirectional. */
  "PWM0A": "36",
  /** Physical pin 37: PWM1A; bidirectional. */
  "PWM1A": "37",
  /** Physical pin 38: GPIO59; bidirectional. */
  "GPIO59": "38",
  /** Physical pin 39: GPIO23; bidirectional. */
  "GPIO23": "39",
  /** Physical pin 40: GPIO58; bidirectional. */
  "GPIO58": "40",
  /** Physical pin 41: UART4.RX; bidirectional. */
  "UART4.RX": "41",
  /** Physical pin 42: GPIO57; bidirectional. */
  "GPIO57": "42",
  /** Physical pin 43: UART4.TX; bidirectional. */
  "UART4.TX": "43",
  /** Physical pin 44: GPIO60; bidirectional. */
  "GPIO60": "44",
  /** Physical pin 45: I2C1.SCL; bidirectional. */
  "I2C1.SCL": "45",
  /** Physical pin 46: GPIO52; bidirectional. */
  "GPIO52": "46",
  /** Physical pin 47: I2C1.SDA; bidirectional. */
  "I2C1.SDA": "47",
  /** Physical pin 48: PWR.BTN; input. */
  "PWR.BTN": "48",
  /** Physical pin 49: VOUT; power_out. */
  "VOUT_49": "49",
  /** Physical pin 50: BAT.VIN; power_in. */
  "BAT.VIN": "50",
  /** Physical pin 51: GND; passive. */
  "GND_51": "51",
  /** Physical pin 52: BAT.TEMP; passive. */
  "BAT.TEMP": "52",
  /** Physical pin 53: GPIO65; bidirectional. */
  "GPIO65": "53",
  /** Physical pin 54: GPIO47; bidirectional. */
  "GPIO47": "54",
  /** Physical pin 55: GPIO27; bidirectional. */
  "GPIO27": "55",
  /** Physical pin 56: GPIO64; bidirectional. */
  "GPIO64": "56",
  /** Physical pin 57: GND; passive. */
  "GND_57": "57",
  /** Physical pin 58: GPIO46; bidirectional. */
  "GPIO46": "58",
  /** Physical pin 59: 3.3V; power_out. */
  "3.3V_59": "59",
  /** Physical pin 60: GPIO48; bidirectional. */
  "GPIO48": "60",
  /** Physical pin 61: SPI1.MOSI; bidirectional. */
  "SPI1.MOSI": "61",
  /** Physical pin 62: ~{RESET}; input. */
  "~{RESET}": "62",
  /** Physical pin 63: SPI1.MISO; bidirectional. */
  "SPI1.MISO": "63",
  /** Physical pin 64: PRU0.6; bidirectional. */
  "PRU0.6": "64",
  /** Physical pin 65: SPI1.CLK; bidirectional. */
  "SPI1.CLK": "65",
  /** Physical pin 66: PRU0.3; bidirectional. */
  "PRU0.3": "66",
  /** Physical pin 67: SPI1.CS; bidirectional. */
  "SPI1.CS": "67",
  /** Physical pin 68: PRU0.2; bidirectional. */
  "PRU0.2": "68",
  /** Physical pin 69: GPIO45; bidirectional. */
  "GPIO45": "69",
  /** Physical pin 70: PRU0.5; bidirectional. */
  "PRU0.5": "70",
  /** Physical pin 71: AIN5(3.3V); input. */
  "AIN5(3.3V)": "71",
  /** Physical pin 72: AIN7(1.8V); input. */
  "AIN7(1.8V)": "72",
}) {
  override schema = "MCU_Module:PocketBeagle";
  override referencePrefix = "U";
}

/**
 * BCM2835 Broadcom 700 MZ single core, 512 MB RAM 4 GB eMMC, industrial SoM computer
 *
 * KiCad symbol: `MCU_Module:RaspberryPi-CM1`. Reference prefix: `U`.
 * Footprint filters: *SODIMM*.
 * @see https://www.raspberrypi.org/documentation/hardware/computemodule/datasheets/rpi_DATA_CM_1p0.pdf
 * Keywords: raspberry pi compute module.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RaspberryPi_CM1 extends Component.withPins({
  /** Physical pin 1: GND; passive. */
  "GND_1": "1",
  /** Physical pin 2: ~{EMMC_DISABLE}; input. */
  "~{EMMC_DISABLE}": "2",
  /** Physical pin 3: GPIO0; bidirectional. */
  "GPIO0": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: GPIO1; bidirectional. */
  "GPIO1": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: GPIO2; bidirectional. */
  "GPIO2": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: GPIO3; bidirectional. */
  "GPIO3": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: GPIO4; bidirectional. */
  "GPIO4": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: GPIO5; bidirectional. */
  "GPIO5": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: GPIO6; bidirectional. */
  "GPIO6": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: GPIO7; bidirectional. */
  "GPIO7": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 27: GPIO8; bidirectional. */
  "GPIO8": "27",
  /** Physical pin 28: GPIO28; bidirectional. */
  "GPIO28": "28",
  /** Physical pin 29: GPIO9; bidirectional. */
  "GPIO9": "29",
  /** Physical pin 30: GPIO29; bidirectional. */
  "GPIO29": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: GPIO10; bidirectional. */
  "GPIO10": "33",
  /** Physical pin 34: GPIO30; bidirectional. */
  "GPIO30": "34",
  /** Physical pin 35: GPIO11; bidirectional. */
  "GPIO11": "35",
  /** Physical pin 36: GPIO31; bidirectional. */
  "GPIO31": "36",
  /** Physical pin 37: GND; passive. */
  "GND_37": "37",
  /** Physical pin 38: GND; passive. */
  "GND_38": "38",
  /** Physical pin 39: GPIO0-27_VDD; passive. */
  "GPIO0-27_VDD_39": "39",
  /** Physical pin 40: GPIO0-27_VDD; power_in. */
  "GPIO0-27_VDD_40": "40",
  /** Physical pin 41: GPIO28-45_VDD; passive. */
  "GPIO28-45_VDD_41": "41",
  /** Physical pin 42: GPIO28-45_VDD; power_in. */
  "GPIO28-45_VDD_42": "42",
  /** Physical pin 43: GND; passive. */
  "GND_43": "43",
  /** Physical pin 44: GND; passive. */
  "GND_44": "44",
  /** Physical pin 45: GPIO12; bidirectional. */
  "GPIO12": "45",
  /** Physical pin 46: GPIO32; bidirectional. */
  "GPIO32": "46",
  /** Physical pin 47: GPIO13; bidirectional. */
  "GPIO13": "47",
  /** Physical pin 48: GPIO33; bidirectional. */
  "GPIO33": "48",
  /** Physical pin 49: GND; passive. */
  "GND_49": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: GPIO14; bidirectional. */
  "GPIO14": "51",
  /** Physical pin 52: GPIO34; bidirectional. */
  "GPIO34": "52",
  /** Physical pin 53: GPIO15; bidirectional. */
  "GPIO15": "53",
  /** Physical pin 54: GPIO35; bidirectional. */
  "GPIO35": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: GND; passive. */
  "GND_56": "56",
  /** Physical pin 57: GPIO16; bidirectional. */
  "GPIO16": "57",
  /** Physical pin 58: GPIO36; bidirectional. */
  "GPIO36": "58",
  /** Physical pin 59: GPIO17; bidirectional. */
  "GPIO17": "59",
  /** Physical pin 60: GPIO37; bidirectional. */
  "GPIO37": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: GND; passive. */
  "GND_62": "62",
  /** Physical pin 63: GPIO18; bidirectional. */
  "GPIO18": "63",
  /** Physical pin 64: GPIO38; bidirectional. */
  "GPIO38": "64",
  /** Physical pin 65: GPIO19; bidirectional. */
  "GPIO19": "65",
  /** Physical pin 66: GPIO39; bidirectional. */
  "GPIO39": "66",
  /** Physical pin 67: GND; passive. */
  "GND_67": "67",
  /** Physical pin 68: GND; passive. */
  "GND_68": "68",
  /** Physical pin 69: GPIO20; bidirectional. */
  "GPIO20": "69",
  /** Physical pin 70: GPIO40; bidirectional. */
  "GPIO40": "70",
  /** Physical pin 71: GPIO21; bidirectional. */
  "GPIO21": "71",
  /** Physical pin 72: GPIO41; bidirectional. */
  "GPIO41": "72",
  /** Physical pin 73: GND; passive. */
  "GND_73": "73",
  /** Physical pin 74: GND; passive. */
  "GND_74": "74",
  /** Physical pin 75: GPIO22; bidirectional. */
  "GPIO22": "75",
  /** Physical pin 76: GPIO42; bidirectional. */
  "GPIO42": "76",
  /** Physical pin 77: GPIO23; bidirectional. */
  "GPIO23": "77",
  /** Physical pin 78: GPIO43; bidirectional. */
  "GPIO43": "78",
  /** Physical pin 79: GND; passive. */
  "GND_79": "79",
  /** Physical pin 80: GND; passive. */
  "GND_80": "80",
  /** Physical pin 81: GPIO24; bidirectional. */
  "GPIO24": "81",
  /** Physical pin 82: GPIO44; bidirectional. */
  "GPIO44": "82",
  /** Physical pin 83: GPIO25; bidirectional. */
  "GPIO25": "83",
  /** Physical pin 84: GPIO45; bidirectional. */
  "GPIO45": "84",
  /** Physical pin 85: GND; passive. */
  "GND_85": "85",
  /** Physical pin 86: GND; passive. */
  "GND_86": "86",
  /** Physical pin 87: GPIO26; bidirectional. */
  "GPIO26": "87",
  /** Physical pin 88: GPIO46_1V8; bidirectional. */
  "GPIO46_1V8": "88",
  /** Physical pin 89: GPIO27; bidirectional. */
  "GPIO27": "89",
  /** Physical pin 90: GPIO47_1V8; bidirectional. */
  "GPIO47_1V8": "90",
  /** Physical pin 91: GND; passive. */
  "GND_91": "91",
  /** Physical pin 92: GND; passive. */
  "GND_92": "92",
  /** Physical pin 93: DSI0_DN1; output. */
  "DSI0_DN1": "93",
  /** Physical pin 94: DSI1_DP0; output. */
  "DSI1_DP0": "94",
  /** Physical pin 95: DSI0_DP1; output. */
  "DSI0_DP1": "95",
  /** Physical pin 96: DSI1_DN0; output. */
  "DSI1_DN0": "96",
  /** Physical pin 97: GND; passive. */
  "GND_97": "97",
  /** Physical pin 98: GND; passive. */
  "GND_98": "98",
  /** Physical pin 99: DSI0_DN0; output. */
  "DSI0_DN0": "99",
  /** Physical pin 100: DSI1_CP; output. */
  "DSI1_CP": "100",
  /** Physical pin 101: DSI0_DP0; output. */
  "DSI0_DP0": "101",
  /** Physical pin 102: DSI1_CN; output. */
  "DSI1_CN": "102",
  /** Physical pin 103: GND; passive. */
  "GND_103": "103",
  /** Physical pin 104: GND; passive. */
  "GND_104": "104",
  /** Physical pin 105: DSI0_CN; output. */
  "DSI0_CN": "105",
  /** Physical pin 106: DSI1_DP3; output. */
  "DSI1_DP3": "106",
  /** Physical pin 107: DSI0_CP; output. */
  "DSI0_CP": "107",
  /** Physical pin 108: DSI1_DN3; output. */
  "DSI1_DN3": "108",
  /** Physical pin 109: GND; passive. */
  "GND_109": "109",
  /** Physical pin 110: GND; passive. */
  "GND_110": "110",
  /** Physical pin 111: HDMI_CLK_N; output. */
  "HDMI_CLK_N": "111",
  /** Physical pin 112: DSI1_DP2; output. */
  "DSI1_DP2": "112",
  /** Physical pin 113: HDMI_CLK_P; output. */
  "HDMI_CLK_P": "113",
  /** Physical pin 114: DSI1_DN2; output. */
  "DSI1_DN2": "114",
  /** Physical pin 115: GND; passive. */
  "GND_115": "115",
  /** Physical pin 116: GND; passive. */
  "GND_116": "116",
  /** Physical pin 117: HDMI_D0_N; output. */
  "HDMI_D0_N": "117",
  /** Physical pin 118: DSI1_DP1; output. */
  "DSI1_DP1": "118",
  /** Physical pin 119: HDMI_D0_P; output. */
  "HDMI_D0_P": "119",
  /** Physical pin 120: DSI1_DN1; output. */
  "DSI1_DN1": "120",
  /** Physical pin 121: GND; passive. */
  "GND_121": "121",
  /** Physical pin 122: GND; passive. */
  "GND_122": "122",
  /** Physical pin 123: HDMI_D1_N; output. */
  "HDMI_D1_N": "123",
  /** Physical pin 124: NC; no_connect. */
  "NC_124": "124",
  /** Physical pin 125: HDMI_D1_P; output. */
  "HDMI_D1_P": "125",
  /** Physical pin 126: NC; no_connect. */
  "NC_126": "126",
  /** Physical pin 127: GND; passive. */
  "GND_127": "127",
  /** Physical pin 128: NC; no_connect. */
  "NC_128": "128",
  /** Physical pin 129: HDMI_D2_N; output. */
  "HDMI_D2_N": "129",
  /** Physical pin 130: NC; no_connect. */
  "NC_130": "130",
  /** Physical pin 131: HDMI_D2_P; output. */
  "HDMI_D2_P": "131",
  /** Physical pin 132: NC; no_connect. */
  "NC_132": "132",
  /** Physical pin 133: GND; passive. */
  "GND_133": "133",
  /** Physical pin 134: GND; passive. */
  "GND_134": "134",
  /** Physical pin 135: CAM1_DP3; input. */
  "CAM1_DP3": "135",
  /** Physical pin 136: CAM0_DP0; input. */
  "CAM0_DP0": "136",
  /** Physical pin 137: CAM1_DN3; input. */
  "CAM1_DN3": "137",
  /** Physical pin 138: CAM0_DN0; input. */
  "CAM0_DN0": "138",
  /** Physical pin 139: GND; passive. */
  "GND_139": "139",
  /** Physical pin 140: GND; passive. */
  "GND_140": "140",
  /** Physical pin 141: CAM1_DP2; input. */
  "CAM1_DP2": "141",
  /** Physical pin 142: CAM0_CP; input. */
  "CAM0_CP": "142",
  /** Physical pin 143: CAM1_DN2; input. */
  "CAM1_DN2": "143",
  /** Physical pin 144: CAM0_CN; input. */
  "CAM0_CN": "144",
  /** Physical pin 145: GND; passive. */
  "GND_145": "145",
  /** Physical pin 146: GND; passive. */
  "GND_146": "146",
  /** Physical pin 147: CAM1_CP; input. */
  "CAM1_CP": "147",
  /** Physical pin 148: CAM0_DP1; input. */
  "CAM0_DP1": "148",
  /** Physical pin 149: CAM1_CN; input. */
  "CAM1_CN": "149",
  /** Physical pin 150: CAM0_DN1; input. */
  "CAM0_DN1": "150",
  /** Physical pin 151: GND; passive. */
  "GND_151": "151",
  /** Physical pin 152: GND; passive. */
  "GND_152": "152",
  /** Physical pin 153: CAM1_DP1; input. */
  "CAM1_DP1": "153",
  /** Physical pin 154: NC; no_connect. */
  "NC_154": "154",
  /** Physical pin 155: CAM1_DN1; input. */
  "CAM1_DN1": "155",
  /** Physical pin 156: NC; no_connect. */
  "NC_156": "156",
  /** Physical pin 157: GND; passive. */
  "GND_157": "157",
  /** Physical pin 158: NC; no_connect. */
  "NC_158": "158",
  /** Physical pin 159: CAM1_DP0; input. */
  "CAM1_DP0": "159",
  /** Physical pin 160: NC; no_connect. */
  "NC_160": "160",
  /** Physical pin 161: CAM1_DN0; input. */
  "CAM1_DN0": "161",
  /** Physical pin 162: NC; no_connect. */
  "NC_162": "162",
  /** Physical pin 163: GND; passive. */
  "GND_163": "163",
  /** Physical pin 164: GND; passive. */
  "GND_164": "164",
  /** Physical pin 165: USB_DP; bidirectional. */
  "USB_DP": "165",
  /** Physical pin 166: TVDAC; output. */
  "TVDAC": "166",
  /** Physical pin 167: USB_DM; bidirectional. */
  "USB_DM": "167",
  /** Physical pin 168: USB_OTGID; passive. */
  "USB_OTGID": "168",
  /** Physical pin 169: GND; passive. */
  "GND_169": "169",
  /** Physical pin 170: GND; passive. */
  "GND_170": "170",
  /** Physical pin 171: HDMI_CEC; bidirectional. */
  "HDMI_CEC": "171",
  /** Physical pin 172: ~{VC_TRST}; input. */
  "~{VC_TRST}": "172",
  /** Physical pin 173: HDMI_SDA; bidirectional. */
  "HDMI_SDA": "173",
  /** Physical pin 174: VC_TDI; input. */
  "VC_TDI": "174",
  /** Physical pin 175: HDMI_SCL; bidirectional. */
  "HDMI_SCL": "175",
  /** Physical pin 176: VC_TMS; input. */
  "VC_TMS": "176",
  /** Physical pin 177: RUN; input. */
  "RUN": "177",
  /** Physical pin 178: VC_TDO; output. */
  "VC_TDO": "178",
  /** Physical pin 179: VDD_CORE_(DO_NOT_CONNECT); no_connect. */
  "VDD_CORE_(DO_NOT_CONNECT)": "179",
  /** Physical pin 180: VC_TCK; input. */
  "VC_TCK": "180",
  /** Physical pin 181: GND; passive. */
  "GND_181": "181",
  /** Physical pin 182: GND; passive. */
  "GND_182": "182",
  /** Physical pin 183: 1V8; passive. */
  "1V8_183": "183",
  /** Physical pin 184: 1V8; passive. */
  "1V8_184": "184",
  /** Physical pin 185: 1V8; passive. */
  "1V8_185": "185",
  /** Physical pin 186: 1V8; power_in. */
  "1V8_186": "186",
  /** Physical pin 187: GND; passive. */
  "GND_187": "187",
  /** Physical pin 188: GND; passive. */
  "GND_188": "188",
  /** Physical pin 189: VDAC; passive. */
  "VDAC_189": "189",
  /** Physical pin 190: VDAC; power_in. */
  "VDAC_190": "190",
  /** Physical pin 191: 3V3; passive. */
  "3V3_191": "191",
  /** Physical pin 192: 3V3; passive. */
  "3V3_192": "192",
  /** Physical pin 193: 3V3; passive. */
  "3V3_193": "193",
  /** Physical pin 194: 3V3; power_in. */
  "3V3_194": "194",
  /** Physical pin 195: GND; passive. */
  "GND_195": "195",
  /** Physical pin 196: GND; power_out. */
  "GND_196": "196",
  /** Physical pin 197: VBAT; passive. */
  "VBAT_197": "197",
  /** Physical pin 198: VBAT; passive. */
  "VBAT_198": "198",
  /** Physical pin 199: VBAT; passive. */
  "VBAT_199": "199",
  /** Physical pin 200: VBAT; power_in. */
  "VBAT_200": "200",
}) {
  override schema = "MCU_Module:RaspberryPi-CM1";
  override referencePrefix = "U";
}

/**
 * BCM2837B0 Broadcom 1.2 GHZ quad core, 1 GB RAM 8/16/32 GB eMMC, industrial SoM computer
 *
 * KiCad symbol: `MCU_Module:RaspberryPi-CM3+`. Reference prefix: `U`.
 * Footprint filters: *SODIMM*.
 * @see https://www.raspberrypi.org/documentation/hardware/computemodule/datasheets/rpi_DATA_CM3plus_1p0.pdf
 * Keywords: raspberry pi compute module.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RaspberryPi_CM3_ extends Component.withPins({
  /** Physical pin 1: GND; passive. */
  "GND_1": "1",
  /** Physical pin 2: ~{EMMC_DISABLE}; input. */
  "~{EMMC_DISABLE}": "2",
  /** Physical pin 3: GPIO0; bidirectional. */
  "GPIO0": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: GPIO1; bidirectional. */
  "GPIO1": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GPIO2; bidirectional. */
  "GPIO2": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: GPIO3; bidirectional. */
  "GPIO3": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: GPIO4; bidirectional. */
  "GPIO4": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: GPIO5; bidirectional. */
  "GPIO5": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: GPIO6; bidirectional. */
  "GPIO6": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: GPIO7; bidirectional. */
  "GPIO7": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 27: GPIO8; bidirectional. */
  "GPIO8": "27",
  /** Physical pin 28: GPIO28; bidirectional. */
  "GPIO28": "28",
  /** Physical pin 29: GPIO9; bidirectional. */
  "GPIO9": "29",
  /** Physical pin 30: GPIO29; bidirectional. */
  "GPIO29": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: GPIO10; bidirectional. */
  "GPIO10": "33",
  /** Physical pin 34: GPIO30; bidirectional. */
  "GPIO30": "34",
  /** Physical pin 35: GPIO11; bidirectional. */
  "GPIO11": "35",
  /** Physical pin 36: GPIO31; bidirectional. */
  "GPIO31": "36",
  /** Physical pin 37: GND; passive. */
  "GND_37": "37",
  /** Physical pin 38: GND; passive. */
  "GND_38": "38",
  /** Physical pin 39: GPIO0-27_VDD; passive. */
  "GPIO0-27_VDD_39": "39",
  /** Physical pin 40: GPIO0-27_VDD; power_in. */
  "GPIO0-27_VDD_40": "40",
  /** Physical pin 41: GPIO28-45_VDD; passive. */
  "GPIO28-45_VDD_41": "41",
  /** Physical pin 42: GPIO28-45_VDD; power_in. */
  "GPIO28-45_VDD_42": "42",
  /** Physical pin 43: GND; passive. */
  "GND_43": "43",
  /** Physical pin 44: GND; passive. */
  "GND_44": "44",
  /** Physical pin 45: GPIO12; bidirectional. */
  "GPIO12": "45",
  /** Physical pin 46: GPIO32; bidirectional. */
  "GPIO32": "46",
  /** Physical pin 47: GPIO13; bidirectional. */
  "GPIO13": "47",
  /** Physical pin 48: GPIO33; bidirectional. */
  "GPIO33": "48",
  /** Physical pin 49: GND; passive. */
  "GND_49": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: GPIO14; bidirectional. */
  "GPIO14": "51",
  /** Physical pin 52: GPIO34; bidirectional. */
  "GPIO34": "52",
  /** Physical pin 53: GPIO15; bidirectional. */
  "GPIO15": "53",
  /** Physical pin 54: GPIO35; bidirectional. */
  "GPIO35": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: GND; passive. */
  "GND_56": "56",
  /** Physical pin 57: GPIO16; bidirectional. */
  "GPIO16": "57",
  /** Physical pin 58: GPIO36; bidirectional. */
  "GPIO36": "58",
  /** Physical pin 59: GPIO17; bidirectional. */
  "GPIO17": "59",
  /** Physical pin 60: GPIO37; bidirectional. */
  "GPIO37": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: GND; passive. */
  "GND_62": "62",
  /** Physical pin 63: GPIO18; bidirectional. */
  "GPIO18": "63",
  /** Physical pin 64: GPIO38; bidirectional. */
  "GPIO38": "64",
  /** Physical pin 65: GPIO19; bidirectional. */
  "GPIO19": "65",
  /** Physical pin 66: GPIO39; bidirectional. */
  "GPIO39": "66",
  /** Physical pin 67: GND; passive. */
  "GND_67": "67",
  /** Physical pin 68: GND; passive. */
  "GND_68": "68",
  /** Physical pin 69: GPIO20; bidirectional. */
  "GPIO20": "69",
  /** Physical pin 70: GPIO40; bidirectional. */
  "GPIO40": "70",
  /** Physical pin 71: GPIO21; bidirectional. */
  "GPIO21": "71",
  /** Physical pin 72: GPIO41; bidirectional. */
  "GPIO41": "72",
  /** Physical pin 73: GND; passive. */
  "GND_73": "73",
  /** Physical pin 74: GND; passive. */
  "GND_74": "74",
  /** Physical pin 75: GPIO22; bidirectional. */
  "GPIO22": "75",
  /** Physical pin 76: GPIO42; bidirectional. */
  "GPIO42": "76",
  /** Physical pin 77: GPIO23; bidirectional. */
  "GPIO23": "77",
  /** Physical pin 78: GPIO43; bidirectional. */
  "GPIO43": "78",
  /** Physical pin 79: GND; passive. */
  "GND_79": "79",
  /** Physical pin 80: GND; passive. */
  "GND_80": "80",
  /** Physical pin 81: GPIO24; bidirectional. */
  "GPIO24": "81",
  /** Physical pin 82: GPIO44; bidirectional. */
  "GPIO44": "82",
  /** Physical pin 83: GPIO25; bidirectional. */
  "GPIO25": "83",
  /** Physical pin 84: GPIO45; bidirectional. */
  "GPIO45": "84",
  /** Physical pin 85: GND; passive. */
  "GND_85": "85",
  /** Physical pin 86: GND; passive. */
  "GND_86": "86",
  /** Physical pin 87: GPIO26; bidirectional. */
  "GPIO26": "87",
  /** Physical pin 88: HDMI_HPD_N_1V8; input. */
  "HDMI_HPD_N_1V8": "88",
  /** Physical pin 89: GPIO27; bidirectional. */
  "GPIO27": "89",
  /** Physical pin 90: EMMC_EN_N_1V8; output. */
  "EMMC_EN_N_1V8": "90",
  /** Physical pin 91: GND; passive. */
  "GND_91": "91",
  /** Physical pin 92: GND; passive. */
  "GND_92": "92",
  /** Physical pin 93: DSI0_DN1; output. */
  "DSI0_DN1": "93",
  /** Physical pin 94: DSI1_DP0; output. */
  "DSI1_DP0": "94",
  /** Physical pin 95: DSI0_DP1; output. */
  "DSI0_DP1": "95",
  /** Physical pin 96: DSI1_DN0; output. */
  "DSI1_DN0": "96",
  /** Physical pin 97: GND; passive. */
  "GND_97": "97",
  /** Physical pin 98: GND; passive. */
  "GND_98": "98",
  /** Physical pin 99: DSI0_DN0; output. */
  "DSI0_DN0": "99",
  /** Physical pin 100: DSI1_CP; output. */
  "DSI1_CP": "100",
  /** Physical pin 101: DSI0_DP0; output. */
  "DSI0_DP0": "101",
  /** Physical pin 102: DSI1_CN; output. */
  "DSI1_CN": "102",
  /** Physical pin 103: GND; passive. */
  "GND_103": "103",
  /** Physical pin 104: GND; passive. */
  "GND_104": "104",
  /** Physical pin 105: DSI0_CN; output. */
  "DSI0_CN": "105",
  /** Physical pin 106: DSI1_DP3; output. */
  "DSI1_DP3": "106",
  /** Physical pin 107: DSI0_CP; output. */
  "DSI0_CP": "107",
  /** Physical pin 108: DSI1_DN3; output. */
  "DSI1_DN3": "108",
  /** Physical pin 109: GND; passive. */
  "GND_109": "109",
  /** Physical pin 110: GND; passive. */
  "GND_110": "110",
  /** Physical pin 111: HDMI_CLK_N; output. */
  "HDMI_CLK_N": "111",
  /** Physical pin 112: DSI1_DP2; output. */
  "DSI1_DP2": "112",
  /** Physical pin 113: HDMI_CLK_P; output. */
  "HDMI_CLK_P": "113",
  /** Physical pin 114: DSI1_DN2; output. */
  "DSI1_DN2": "114",
  /** Physical pin 115: GND; passive. */
  "GND_115": "115",
  /** Physical pin 116: GND; passive. */
  "GND_116": "116",
  /** Physical pin 117: HDMI_D0_N; output. */
  "HDMI_D0_N": "117",
  /** Physical pin 118: DSI1_DP1; output. */
  "DSI1_DP1": "118",
  /** Physical pin 119: HDMI_D0_P; output. */
  "HDMI_D0_P": "119",
  /** Physical pin 120: DSI1_DN1; output. */
  "DSI1_DN1": "120",
  /** Physical pin 121: GND; passive. */
  "GND_121": "121",
  /** Physical pin 122: GND; passive. */
  "GND_122": "122",
  /** Physical pin 123: HDMI_D1_N; output. */
  "HDMI_D1_N": "123",
  /** Physical pin 124: NC; no_connect. */
  "NC_124": "124",
  /** Physical pin 125: HDMI_D1_P; output. */
  "HDMI_D1_P": "125",
  /** Physical pin 126: NC; no_connect. */
  "NC_126": "126",
  /** Physical pin 127: GND; passive. */
  "GND_127": "127",
  /** Physical pin 128: NC; no_connect. */
  "NC_128": "128",
  /** Physical pin 129: HDMI_D2_N; output. */
  "HDMI_D2_N": "129",
  /** Physical pin 130: NC; no_connect. */
  "NC_130": "130",
  /** Physical pin 131: HDMI_D2_P; output. */
  "HDMI_D2_P": "131",
  /** Physical pin 132: NC; no_connect. */
  "NC_132": "132",
  /** Physical pin 133: GND; passive. */
  "GND_133": "133",
  /** Physical pin 134: GND; passive. */
  "GND_134": "134",
  /** Physical pin 135: CAM1_DP3; input. */
  "CAM1_DP3": "135",
  /** Physical pin 136: CAM0_DP0; input. */
  "CAM0_DP0": "136",
  /** Physical pin 137: CAM1_DN3; input. */
  "CAM1_DN3": "137",
  /** Physical pin 138: CAM0_DN0; input. */
  "CAM0_DN0": "138",
  /** Physical pin 139: GND; passive. */
  "GND_139": "139",
  /** Physical pin 140: GND; passive. */
  "GND_140": "140",
  /** Physical pin 141: CAM1_DP2; input. */
  "CAM1_DP2": "141",
  /** Physical pin 142: CAM0_CP; input. */
  "CAM0_CP": "142",
  /** Physical pin 143: CAM1_DN2; input. */
  "CAM1_DN2": "143",
  /** Physical pin 144: CAM0_CN; input. */
  "CAM0_CN": "144",
  /** Physical pin 145: GND; passive. */
  "GND_145": "145",
  /** Physical pin 146: GND; passive. */
  "GND_146": "146",
  /** Physical pin 147: CAM1_CP; input. */
  "CAM1_CP": "147",
  /** Physical pin 148: CAM0_DP1; input. */
  "CAM0_DP1": "148",
  /** Physical pin 149: CAM1_CN; input. */
  "CAM1_CN": "149",
  /** Physical pin 150: CAM0_DN1; input. */
  "CAM0_DN1": "150",
  /** Physical pin 151: GND; passive. */
  "GND_151": "151",
  /** Physical pin 152: GND; passive. */
  "GND_152": "152",
  /** Physical pin 153: CAM1_DP1; input. */
  "CAM1_DP1": "153",
  /** Physical pin 154: NC; no_connect. */
  "NC_154": "154",
  /** Physical pin 155: CAM1_DN1; input. */
  "CAM1_DN1": "155",
  /** Physical pin 156: NC; no_connect. */
  "NC_156": "156",
  /** Physical pin 157: GND; passive. */
  "GND_157": "157",
  /** Physical pin 158: NC; no_connect. */
  "NC_158": "158",
  /** Physical pin 159: CAM1_DP0; input. */
  "CAM1_DP0": "159",
  /** Physical pin 160: NC; no_connect. */
  "NC_160": "160",
  /** Physical pin 161: CAM1_DN0; input. */
  "CAM1_DN0": "161",
  /** Physical pin 162: NC; no_connect. */
  "NC_162": "162",
  /** Physical pin 163: GND; passive. */
  "GND_163": "163",
  /** Physical pin 164: GND; passive. */
  "GND_164": "164",
  /** Physical pin 165: USB_DP; bidirectional. */
  "USB_DP": "165",
  /** Physical pin 166: TVDAC; output. */
  "TVDAC": "166",
  /** Physical pin 167: USB_DM; bidirectional. */
  "USB_DM": "167",
  /** Physical pin 168: USB_OTGID; passive. */
  "USB_OTGID": "168",
  /** Physical pin 169: GND; passive. */
  "GND_169": "169",
  /** Physical pin 170: GND; passive. */
  "GND_170": "170",
  /** Physical pin 171: HDMI_CEC; bidirectional. */
  "HDMI_CEC": "171",
  /** Physical pin 172: ~{VC_TRST}; input. */
  "~{VC_TRST}": "172",
  /** Physical pin 173: HDMI_SDA; bidirectional. */
  "HDMI_SDA": "173",
  /** Physical pin 174: VC_TDI; input. */
  "VC_TDI": "174",
  /** Physical pin 175: HDMI_SCL; bidirectional. */
  "HDMI_SCL": "175",
  /** Physical pin 176: VC_TMS; input. */
  "VC_TMS": "176",
  /** Physical pin 177: RUN; input. */
  "RUN": "177",
  /** Physical pin 178: VC_TDO; output. */
  "VC_TDO": "178",
  /** Physical pin 179: VDD_CORE_(DO_NOT_CONNECT); no_connect. */
  "VDD_CORE_(DO_NOT_CONNECT)": "179",
  /** Physical pin 180: VC_TCK; input. */
  "VC_TCK": "180",
  /** Physical pin 181: GND; passive. */
  "GND_181": "181",
  /** Physical pin 182: GND; passive. */
  "GND_182": "182",
  /** Physical pin 183: 1V8; passive. */
  "1V8_183": "183",
  /** Physical pin 184: 1V8; passive. */
  "1V8_184": "184",
  /** Physical pin 185: 1V8; passive. */
  "1V8_185": "185",
  /** Physical pin 186: 1V8; power_in. */
  "1V8_186": "186",
  /** Physical pin 187: GND; passive. */
  "GND_187": "187",
  /** Physical pin 188: GND; passive. */
  "GND_188": "188",
  /** Physical pin 189: VDAC; passive. */
  "VDAC_189": "189",
  /** Physical pin 190: VDAC; power_in. */
  "VDAC_190": "190",
  /** Physical pin 191: 3V3; passive. */
  "3V3_191": "191",
  /** Physical pin 192: 3V3; passive. */
  "3V3_192": "192",
  /** Physical pin 193: 3V3; passive. */
  "3V3_193": "193",
  /** Physical pin 194: 3V3; power_in. */
  "3V3_194": "194",
  /** Physical pin 195: GND; passive. */
  "GND_195": "195",
  /** Physical pin 196: GND; power_out. */
  "GND_196": "196",
  /** Physical pin 197: VBAT; passive. */
  "VBAT_197": "197",
  /** Physical pin 198: VBAT; passive. */
  "VBAT_198": "198",
  /** Physical pin 199: VBAT; passive. */
  "VBAT_199": "199",
  /** Physical pin 200: VBAT; power_in. */
  "VBAT_200": "200",
}) {
  override schema = "MCU_Module:RaspberryPi-CM3+";
  override referencePrefix = "U";
}

/**
 * BCM2837 Broadcom 1.2 GHZ quad core, 1 GB RAM 4 GB eMMC,  industrial SoM computer
 *
 * KiCad symbol: `MCU_Module:RaspberryPi-CM3`. Reference prefix: `U`.
 * Footprint filters: *SODIMM*.
 * @see https://www.raspberrypi.org/documentation/hardware/computemodule/datasheets/rpi_DATA_CM_1p0.pdf
 * Keywords: raspberry pi compute module.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RaspberryPi_CM3 extends Component.withPins({
  /** Physical pin 1: GND; passive. */
  "GND_1": "1",
  /** Physical pin 2: ~{EMMC_DISABLE}; input. */
  "~{EMMC_DISABLE}": "2",
  /** Physical pin 3: GPIO0; bidirectional. */
  "GPIO0": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: GPIO1; bidirectional. */
  "GPIO1": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GPIO2; bidirectional. */
  "GPIO2": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: GPIO3; bidirectional. */
  "GPIO3": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: GPIO4; bidirectional. */
  "GPIO4": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: GPIO5; bidirectional. */
  "GPIO5": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: GPIO6; bidirectional. */
  "GPIO6": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: GPIO7; bidirectional. */
  "GPIO7": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 27: GPIO8; bidirectional. */
  "GPIO8": "27",
  /** Physical pin 28: GPIO28; bidirectional. */
  "GPIO28": "28",
  /** Physical pin 29: GPIO9; bidirectional. */
  "GPIO9": "29",
  /** Physical pin 30: GPIO29; bidirectional. */
  "GPIO29": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: GPIO10; bidirectional. */
  "GPIO10": "33",
  /** Physical pin 34: GPIO30; bidirectional. */
  "GPIO30": "34",
  /** Physical pin 35: GPIO11; bidirectional. */
  "GPIO11": "35",
  /** Physical pin 36: GPIO31; bidirectional. */
  "GPIO31": "36",
  /** Physical pin 37: GND; passive. */
  "GND_37": "37",
  /** Physical pin 38: GND; passive. */
  "GND_38": "38",
  /** Physical pin 39: GPIO0-27_VDD; passive. */
  "GPIO0-27_VDD_39": "39",
  /** Physical pin 40: GPIO0-27_VDD; power_in. */
  "GPIO0-27_VDD_40": "40",
  /** Physical pin 41: GPIO28-45_VDD; passive. */
  "GPIO28-45_VDD_41": "41",
  /** Physical pin 42: GPIO28-45_VDD; power_in. */
  "GPIO28-45_VDD_42": "42",
  /** Physical pin 43: GND; passive. */
  "GND_43": "43",
  /** Physical pin 44: GND; passive. */
  "GND_44": "44",
  /** Physical pin 45: GPIO12; bidirectional. */
  "GPIO12": "45",
  /** Physical pin 46: GPIO32; bidirectional. */
  "GPIO32": "46",
  /** Physical pin 47: GPIO13; bidirectional. */
  "GPIO13": "47",
  /** Physical pin 48: GPIO33; bidirectional. */
  "GPIO33": "48",
  /** Physical pin 49: GND; passive. */
  "GND_49": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: GPIO14; bidirectional. */
  "GPIO14": "51",
  /** Physical pin 52: GPIO34; bidirectional. */
  "GPIO34": "52",
  /** Physical pin 53: GPIO15; bidirectional. */
  "GPIO15": "53",
  /** Physical pin 54: GPIO35; bidirectional. */
  "GPIO35": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: GND; passive. */
  "GND_56": "56",
  /** Physical pin 57: GPIO16; bidirectional. */
  "GPIO16": "57",
  /** Physical pin 58: GPIO36; bidirectional. */
  "GPIO36": "58",
  /** Physical pin 59: GPIO17; bidirectional. */
  "GPIO17": "59",
  /** Physical pin 60: GPIO37; bidirectional. */
  "GPIO37": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: GND; passive. */
  "GND_62": "62",
  /** Physical pin 63: GPIO18; bidirectional. */
  "GPIO18": "63",
  /** Physical pin 64: GPIO38; bidirectional. */
  "GPIO38": "64",
  /** Physical pin 65: GPIO19; bidirectional. */
  "GPIO19": "65",
  /** Physical pin 66: GPIO39; bidirectional. */
  "GPIO39": "66",
  /** Physical pin 67: GND; passive. */
  "GND_67": "67",
  /** Physical pin 68: GND; passive. */
  "GND_68": "68",
  /** Physical pin 69: GPIO20; bidirectional. */
  "GPIO20": "69",
  /** Physical pin 70: GPIO40; bidirectional. */
  "GPIO40": "70",
  /** Physical pin 71: GPIO21; bidirectional. */
  "GPIO21": "71",
  /** Physical pin 72: GPIO41; bidirectional. */
  "GPIO41": "72",
  /** Physical pin 73: GND; passive. */
  "GND_73": "73",
  /** Physical pin 74: GND; passive. */
  "GND_74": "74",
  /** Physical pin 75: GPIO22; bidirectional. */
  "GPIO22": "75",
  /** Physical pin 76: GPIO42; bidirectional. */
  "GPIO42": "76",
  /** Physical pin 77: GPIO23; bidirectional. */
  "GPIO23": "77",
  /** Physical pin 78: GPIO43; bidirectional. */
  "GPIO43": "78",
  /** Physical pin 79: GND; passive. */
  "GND_79": "79",
  /** Physical pin 80: GND; passive. */
  "GND_80": "80",
  /** Physical pin 81: GPIO24; bidirectional. */
  "GPIO24": "81",
  /** Physical pin 82: GPIO44; bidirectional. */
  "GPIO44": "82",
  /** Physical pin 83: GPIO25; bidirectional. */
  "GPIO25": "83",
  /** Physical pin 84: GPIO45; bidirectional. */
  "GPIO45": "84",
  /** Physical pin 85: GND; passive. */
  "GND_85": "85",
  /** Physical pin 86: GND; passive. */
  "GND_86": "86",
  /** Physical pin 87: GPIO26; bidirectional. */
  "GPIO26": "87",
  /** Physical pin 88: HDMI_HPD_N_1V8; input. */
  "HDMI_HPD_N_1V8": "88",
  /** Physical pin 89: GPIO27; bidirectional. */
  "GPIO27": "89",
  /** Physical pin 90: EMMC_EN_N_1V8; output. */
  "EMMC_EN_N_1V8": "90",
  /** Physical pin 91: GND; passive. */
  "GND_91": "91",
  /** Physical pin 92: GND; passive. */
  "GND_92": "92",
  /** Physical pin 93: DSI0_DN1; output. */
  "DSI0_DN1": "93",
  /** Physical pin 94: DSI1_DP0; output. */
  "DSI1_DP0": "94",
  /** Physical pin 95: DSI0_DP1; output. */
  "DSI0_DP1": "95",
  /** Physical pin 96: DSI1_DN0; output. */
  "DSI1_DN0": "96",
  /** Physical pin 97: GND; passive. */
  "GND_97": "97",
  /** Physical pin 98: GND; passive. */
  "GND_98": "98",
  /** Physical pin 99: DSI0_DN0; output. */
  "DSI0_DN0": "99",
  /** Physical pin 100: DSI1_CP; output. */
  "DSI1_CP": "100",
  /** Physical pin 101: DSI0_DP0; output. */
  "DSI0_DP0": "101",
  /** Physical pin 102: DSI1_CN; output. */
  "DSI1_CN": "102",
  /** Physical pin 103: GND; passive. */
  "GND_103": "103",
  /** Physical pin 104: GND; passive. */
  "GND_104": "104",
  /** Physical pin 105: DSI0_CN; output. */
  "DSI0_CN": "105",
  /** Physical pin 106: DSI1_DP3; output. */
  "DSI1_DP3": "106",
  /** Physical pin 107: DSI0_CP; output. */
  "DSI0_CP": "107",
  /** Physical pin 108: DSI1_DN3; output. */
  "DSI1_DN3": "108",
  /** Physical pin 109: GND; passive. */
  "GND_109": "109",
  /** Physical pin 110: GND; passive. */
  "GND_110": "110",
  /** Physical pin 111: HDMI_CLK_N; output. */
  "HDMI_CLK_N": "111",
  /** Physical pin 112: DSI1_DP2; output. */
  "DSI1_DP2": "112",
  /** Physical pin 113: HDMI_CLK_P; output. */
  "HDMI_CLK_P": "113",
  /** Physical pin 114: DSI1_DN2; output. */
  "DSI1_DN2": "114",
  /** Physical pin 115: GND; passive. */
  "GND_115": "115",
  /** Physical pin 116: GND; passive. */
  "GND_116": "116",
  /** Physical pin 117: HDMI_D0_N; output. */
  "HDMI_D0_N": "117",
  /** Physical pin 118: DSI1_DP1; output. */
  "DSI1_DP1": "118",
  /** Physical pin 119: HDMI_D0_P; output. */
  "HDMI_D0_P": "119",
  /** Physical pin 120: DSI1_DN1; output. */
  "DSI1_DN1": "120",
  /** Physical pin 121: GND; passive. */
  "GND_121": "121",
  /** Physical pin 122: GND; passive. */
  "GND_122": "122",
  /** Physical pin 123: HDMI_D1_N; output. */
  "HDMI_D1_N": "123",
  /** Physical pin 124: NC; no_connect. */
  "NC_124": "124",
  /** Physical pin 125: HDMI_D1_P; output. */
  "HDMI_D1_P": "125",
  /** Physical pin 126: NC; no_connect. */
  "NC_126": "126",
  /** Physical pin 127: GND; passive. */
  "GND_127": "127",
  /** Physical pin 128: NC; no_connect. */
  "NC_128": "128",
  /** Physical pin 129: HDMI_D2_N; output. */
  "HDMI_D2_N": "129",
  /** Physical pin 130: NC; no_connect. */
  "NC_130": "130",
  /** Physical pin 131: HDMI_D2_P; output. */
  "HDMI_D2_P": "131",
  /** Physical pin 132: NC; no_connect. */
  "NC_132": "132",
  /** Physical pin 133: GND; passive. */
  "GND_133": "133",
  /** Physical pin 134: GND; passive. */
  "GND_134": "134",
  /** Physical pin 135: CAM1_DP3; input. */
  "CAM1_DP3": "135",
  /** Physical pin 136: CAM0_DP0; input. */
  "CAM0_DP0": "136",
  /** Physical pin 137: CAM1_DN3; input. */
  "CAM1_DN3": "137",
  /** Physical pin 138: CAM0_DN0; input. */
  "CAM0_DN0": "138",
  /** Physical pin 139: GND; passive. */
  "GND_139": "139",
  /** Physical pin 140: GND; passive. */
  "GND_140": "140",
  /** Physical pin 141: CAM1_DP2; input. */
  "CAM1_DP2": "141",
  /** Physical pin 142: CAM0_CP; input. */
  "CAM0_CP": "142",
  /** Physical pin 143: CAM1_DN2; input. */
  "CAM1_DN2": "143",
  /** Physical pin 144: CAM0_CN; input. */
  "CAM0_CN": "144",
  /** Physical pin 145: GND; passive. */
  "GND_145": "145",
  /** Physical pin 146: GND; passive. */
  "GND_146": "146",
  /** Physical pin 147: CAM1_CP; input. */
  "CAM1_CP": "147",
  /** Physical pin 148: CAM0_DP1; input. */
  "CAM0_DP1": "148",
  /** Physical pin 149: CAM1_CN; input. */
  "CAM1_CN": "149",
  /** Physical pin 150: CAM0_DN1; input. */
  "CAM0_DN1": "150",
  /** Physical pin 151: GND; passive. */
  "GND_151": "151",
  /** Physical pin 152: GND; passive. */
  "GND_152": "152",
  /** Physical pin 153: CAM1_DP1; input. */
  "CAM1_DP1": "153",
  /** Physical pin 154: NC; no_connect. */
  "NC_154": "154",
  /** Physical pin 155: CAM1_DN1; input. */
  "CAM1_DN1": "155",
  /** Physical pin 156: NC; no_connect. */
  "NC_156": "156",
  /** Physical pin 157: GND; passive. */
  "GND_157": "157",
  /** Physical pin 158: NC; no_connect. */
  "NC_158": "158",
  /** Physical pin 159: CAM1_DP0; input. */
  "CAM1_DP0": "159",
  /** Physical pin 160: NC; no_connect. */
  "NC_160": "160",
  /** Physical pin 161: CAM1_DN0; input. */
  "CAM1_DN0": "161",
  /** Physical pin 162: NC; no_connect. */
  "NC_162": "162",
  /** Physical pin 163: GND; passive. */
  "GND_163": "163",
  /** Physical pin 164: GND; passive. */
  "GND_164": "164",
  /** Physical pin 165: USB_DP; bidirectional. */
  "USB_DP": "165",
  /** Physical pin 166: TVDAC; output. */
  "TVDAC": "166",
  /** Physical pin 167: USB_DM; bidirectional. */
  "USB_DM": "167",
  /** Physical pin 168: USB_OTGID; passive. */
  "USB_OTGID": "168",
  /** Physical pin 169: GND; passive. */
  "GND_169": "169",
  /** Physical pin 170: GND; passive. */
  "GND_170": "170",
  /** Physical pin 171: HDMI_CEC; bidirectional. */
  "HDMI_CEC": "171",
  /** Physical pin 172: ~{VC_TRST}; input. */
  "~{VC_TRST}": "172",
  /** Physical pin 173: HDMI_SDA; bidirectional. */
  "HDMI_SDA": "173",
  /** Physical pin 174: VC_TDI; input. */
  "VC_TDI": "174",
  /** Physical pin 175: HDMI_SCL; bidirectional. */
  "HDMI_SCL": "175",
  /** Physical pin 176: VC_TMS; input. */
  "VC_TMS": "176",
  /** Physical pin 177: RUN; input. */
  "RUN": "177",
  /** Physical pin 178: VC_TDO; output. */
  "VC_TDO": "178",
  /** Physical pin 179: VDD_CORE_(DO_NOT_CONNECT); no_connect. */
  "VDD_CORE_(DO_NOT_CONNECT)": "179",
  /** Physical pin 180: VC_TCK; input. */
  "VC_TCK": "180",
  /** Physical pin 181: GND; passive. */
  "GND_181": "181",
  /** Physical pin 182: GND; passive. */
  "GND_182": "182",
  /** Physical pin 183: 1V8; passive. */
  "1V8_183": "183",
  /** Physical pin 184: 1V8; passive. */
  "1V8_184": "184",
  /** Physical pin 185: 1V8; passive. */
  "1V8_185": "185",
  /** Physical pin 186: 1V8; power_in. */
  "1V8_186": "186",
  /** Physical pin 187: GND; passive. */
  "GND_187": "187",
  /** Physical pin 188: GND; passive. */
  "GND_188": "188",
  /** Physical pin 189: VDAC; passive. */
  "VDAC_189": "189",
  /** Physical pin 190: VDAC; power_in. */
  "VDAC_190": "190",
  /** Physical pin 191: 3V3; passive. */
  "3V3_191": "191",
  /** Physical pin 192: 3V3; passive. */
  "3V3_192": "192",
  /** Physical pin 193: 3V3; passive. */
  "3V3_193": "193",
  /** Physical pin 194: 3V3; power_in. */
  "3V3_194": "194",
  /** Physical pin 195: GND; passive. */
  "GND_195": "195",
  /** Physical pin 196: GND; power_out. */
  "GND_196": "196",
  /** Physical pin 197: VBAT; passive. */
  "VBAT_197": "197",
  /** Physical pin 198: VBAT; passive. */
  "VBAT_198": "198",
  /** Physical pin 199: VBAT; passive. */
  "VBAT_199": "199",
  /** Physical pin 200: VBAT; power_in. */
  "VBAT_200": "200",
}) {
  override schema = "MCU_Module:RaspberryPi-CM3";
  override referencePrefix = "U";
}

/**
 * BCM2837B0 Broadcom 1.2 GHZ quad core, 1 GB RAM, industrial SoM computer
 *
 * KiCad symbol: `MCU_Module:RaspberryPi-CM3+L`. Reference prefix: `U`.
 * Footprint filters: *SODIMM*.
 * @see https://www.raspberrypi.org/documentation/hardware/computemodule/datasheets/rpi_DATA_CM3plus_1p0.pdf
 * Keywords: raspberry pi compute module.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RaspberryPi_CM3_L extends Component.withPins({
  /** Physical pin 1: GND; passive. */
  "GND_1": "1",
  /** Physical pin 2: ~{EMMC_DISABLE}; input. */
  "~{EMMC_DISABLE}": "2",
  /** Physical pin 3: GPIO0; bidirectional. */
  "GPIO0": "3",
  /** Physical pin 4: SDX_VDD; passive. */
  "SDX_VDD_4": "4",
  /** Physical pin 5: GPIO1; bidirectional. */
  "GPIO1": "5",
  /** Physical pin 6: SDX_VDD; power_in. */
  "SDX_VDD_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GPIO2; bidirectional. */
  "GPIO2": "9",
  /** Physical pin 10: SDX_CLK; output. */
  "SDX_CLK": "10",
  /** Physical pin 11: GPIO3; bidirectional. */
  "GPIO3": "11",
  /** Physical pin 12: SDX_CMD; bidirectional. */
  "SDX_CMD": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: GPIO4; bidirectional. */
  "GPIO4": "15",
  /** Physical pin 16: SDX_D0; bidirectional. */
  "SDX_D0": "16",
  /** Physical pin 17: GPIO5; bidirectional. */
  "GPIO5": "17",
  /** Physical pin 18: SDX_D1; bidirectional. */
  "SDX_D1": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: GPIO6; bidirectional. */
  "GPIO6": "21",
  /** Physical pin 22: SDX_D2; bidirectional. */
  "SDX_D2": "22",
  /** Physical pin 23: GPIO7; bidirectional. */
  "GPIO7": "23",
  /** Physical pin 24: SDX_D3; bidirectional. */
  "SDX_D3": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 27: GPIO8; bidirectional. */
  "GPIO8": "27",
  /** Physical pin 28: GPIO28; bidirectional. */
  "GPIO28": "28",
  /** Physical pin 29: GPIO9; bidirectional. */
  "GPIO9": "29",
  /** Physical pin 30: GPIO29; bidirectional. */
  "GPIO29": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: GPIO10; bidirectional. */
  "GPIO10": "33",
  /** Physical pin 34: GPIO30; bidirectional. */
  "GPIO30": "34",
  /** Physical pin 35: GPIO11; bidirectional. */
  "GPIO11": "35",
  /** Physical pin 36: GPIO31; bidirectional. */
  "GPIO31": "36",
  /** Physical pin 37: GND; passive. */
  "GND_37": "37",
  /** Physical pin 38: GND; passive. */
  "GND_38": "38",
  /** Physical pin 39: GPIO0-27_VDD; passive. */
  "GPIO0-27_VDD_39": "39",
  /** Physical pin 40: GPIO0-27_VDD; power_in. */
  "GPIO0-27_VDD_40": "40",
  /** Physical pin 41: GPIO28-45_VDD; passive. */
  "GPIO28-45_VDD_41": "41",
  /** Physical pin 42: GPIO28-45_VDD; power_in. */
  "GPIO28-45_VDD_42": "42",
  /** Physical pin 43: GND; passive. */
  "GND_43": "43",
  /** Physical pin 44: GND; passive. */
  "GND_44": "44",
  /** Physical pin 45: GPIO12; bidirectional. */
  "GPIO12": "45",
  /** Physical pin 46: GPIO32; bidirectional. */
  "GPIO32": "46",
  /** Physical pin 47: GPIO13; bidirectional. */
  "GPIO13": "47",
  /** Physical pin 48: GPIO33; bidirectional. */
  "GPIO33": "48",
  /** Physical pin 49: GND; passive. */
  "GND_49": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: GPIO14; bidirectional. */
  "GPIO14": "51",
  /** Physical pin 52: GPIO34; bidirectional. */
  "GPIO34": "52",
  /** Physical pin 53: GPIO15; bidirectional. */
  "GPIO15": "53",
  /** Physical pin 54: GPIO35; bidirectional. */
  "GPIO35": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: GND; passive. */
  "GND_56": "56",
  /** Physical pin 57: GPIO16; bidirectional. */
  "GPIO16": "57",
  /** Physical pin 58: GPIO36; bidirectional. */
  "GPIO36": "58",
  /** Physical pin 59: GPIO17; bidirectional. */
  "GPIO17": "59",
  /** Physical pin 60: GPIO37; bidirectional. */
  "GPIO37": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: GND; passive. */
  "GND_62": "62",
  /** Physical pin 63: GPIO18; bidirectional. */
  "GPIO18": "63",
  /** Physical pin 64: GPIO38; bidirectional. */
  "GPIO38": "64",
  /** Physical pin 65: GPIO19; bidirectional. */
  "GPIO19": "65",
  /** Physical pin 66: GPIO39; bidirectional. */
  "GPIO39": "66",
  /** Physical pin 67: GND; passive. */
  "GND_67": "67",
  /** Physical pin 68: GND; passive. */
  "GND_68": "68",
  /** Physical pin 69: GPIO20; bidirectional. */
  "GPIO20": "69",
  /** Physical pin 70: GPIO40; bidirectional. */
  "GPIO40": "70",
  /** Physical pin 71: GPIO21; bidirectional. */
  "GPIO21": "71",
  /** Physical pin 72: GPIO41; bidirectional. */
  "GPIO41": "72",
  /** Physical pin 73: GND; passive. */
  "GND_73": "73",
  /** Physical pin 74: GND; passive. */
  "GND_74": "74",
  /** Physical pin 75: GPIO22; bidirectional. */
  "GPIO22": "75",
  /** Physical pin 76: GPIO42; bidirectional. */
  "GPIO42": "76",
  /** Physical pin 77: GPIO23; bidirectional. */
  "GPIO23": "77",
  /** Physical pin 78: GPIO43; bidirectional. */
  "GPIO43": "78",
  /** Physical pin 79: GND; passive. */
  "GND_79": "79",
  /** Physical pin 80: GND; passive. */
  "GND_80": "80",
  /** Physical pin 81: GPIO24; bidirectional. */
  "GPIO24": "81",
  /** Physical pin 82: GPIO44; bidirectional. */
  "GPIO44": "82",
  /** Physical pin 83: GPIO25; bidirectional. */
  "GPIO25": "83",
  /** Physical pin 84: GPIO45; bidirectional. */
  "GPIO45": "84",
  /** Physical pin 85: GND; passive. */
  "GND_85": "85",
  /** Physical pin 86: GND; passive. */
  "GND_86": "86",
  /** Physical pin 87: GPIO26; bidirectional. */
  "GPIO26": "87",
  /** Physical pin 88: HDMI_HPD_N_1V8; input. */
  "HDMI_HPD_N_1V8": "88",
  /** Physical pin 89: GPIO27; bidirectional. */
  "GPIO27": "89",
  /** Physical pin 90: EMMC_EN_N_1V8; output. */
  "EMMC_EN_N_1V8": "90",
  /** Physical pin 91: GND; passive. */
  "GND_91": "91",
  /** Physical pin 92: GND; passive. */
  "GND_92": "92",
  /** Physical pin 93: DSI0_DN1; output. */
  "DSI0_DN1": "93",
  /** Physical pin 94: DSI1_DP0; output. */
  "DSI1_DP0": "94",
  /** Physical pin 95: DSI0_DP1; output. */
  "DSI0_DP1": "95",
  /** Physical pin 96: DSI1_DN0; output. */
  "DSI1_DN0": "96",
  /** Physical pin 97: GND; passive. */
  "GND_97": "97",
  /** Physical pin 98: GND; passive. */
  "GND_98": "98",
  /** Physical pin 99: DSI0_DN0; output. */
  "DSI0_DN0": "99",
  /** Physical pin 100: DSI1_CP; output. */
  "DSI1_CP": "100",
  /** Physical pin 101: DSI0_DP0; output. */
  "DSI0_DP0": "101",
  /** Physical pin 102: DSI1_CN; output. */
  "DSI1_CN": "102",
  /** Physical pin 103: GND; passive. */
  "GND_103": "103",
  /** Physical pin 104: GND; passive. */
  "GND_104": "104",
  /** Physical pin 105: DSI0_CN; output. */
  "DSI0_CN": "105",
  /** Physical pin 106: DSI1_DP3; output. */
  "DSI1_DP3": "106",
  /** Physical pin 107: DSI0_CP; output. */
  "DSI0_CP": "107",
  /** Physical pin 108: DSI1_DN3; output. */
  "DSI1_DN3": "108",
  /** Physical pin 109: GND; passive. */
  "GND_109": "109",
  /** Physical pin 110: GND; passive. */
  "GND_110": "110",
  /** Physical pin 111: HDMI_CLK_N; output. */
  "HDMI_CLK_N": "111",
  /** Physical pin 112: DSI1_DP2; output. */
  "DSI1_DP2": "112",
  /** Physical pin 113: HDMI_CLK_P; output. */
  "HDMI_CLK_P": "113",
  /** Physical pin 114: DSI1_DN2; output. */
  "DSI1_DN2": "114",
  /** Physical pin 115: GND; passive. */
  "GND_115": "115",
  /** Physical pin 116: GND; passive. */
  "GND_116": "116",
  /** Physical pin 117: HDMI_D0_N; output. */
  "HDMI_D0_N": "117",
  /** Physical pin 118: DSI1_DP1; output. */
  "DSI1_DP1": "118",
  /** Physical pin 119: HDMI_D0_P; output. */
  "HDMI_D0_P": "119",
  /** Physical pin 120: DSI1_DN1; output. */
  "DSI1_DN1": "120",
  /** Physical pin 121: GND; passive. */
  "GND_121": "121",
  /** Physical pin 122: GND; passive. */
  "GND_122": "122",
  /** Physical pin 123: HDMI_D1_N; output. */
  "HDMI_D1_N": "123",
  /** Physical pin 124: NC; no_connect. */
  "NC_124": "124",
  /** Physical pin 125: HDMI_D1_P; output. */
  "HDMI_D1_P": "125",
  /** Physical pin 126: NC; no_connect. */
  "NC_126": "126",
  /** Physical pin 127: GND; passive. */
  "GND_127": "127",
  /** Physical pin 128: NC; no_connect. */
  "NC_128": "128",
  /** Physical pin 129: HDMI_D2_N; output. */
  "HDMI_D2_N": "129",
  /** Physical pin 130: NC; no_connect. */
  "NC_130": "130",
  /** Physical pin 131: HDMI_D2_P; output. */
  "HDMI_D2_P": "131",
  /** Physical pin 132: NC; no_connect. */
  "NC_132": "132",
  /** Physical pin 133: GND; passive. */
  "GND_133": "133",
  /** Physical pin 134: GND; passive. */
  "GND_134": "134",
  /** Physical pin 135: CAM1_DP3; input. */
  "CAM1_DP3": "135",
  /** Physical pin 136: CAM0_DP0; input. */
  "CAM0_DP0": "136",
  /** Physical pin 137: CAM1_DN3; input. */
  "CAM1_DN3": "137",
  /** Physical pin 138: CAM0_DN0; input. */
  "CAM0_DN0": "138",
  /** Physical pin 139: GND; passive. */
  "GND_139": "139",
  /** Physical pin 140: GND; passive. */
  "GND_140": "140",
  /** Physical pin 141: CAM1_DP2; input. */
  "CAM1_DP2": "141",
  /** Physical pin 142: CAM0_CP; input. */
  "CAM0_CP": "142",
  /** Physical pin 143: CAM1_DN2; input. */
  "CAM1_DN2": "143",
  /** Physical pin 144: CAM0_CN; input. */
  "CAM0_CN": "144",
  /** Physical pin 145: GND; passive. */
  "GND_145": "145",
  /** Physical pin 146: GND; passive. */
  "GND_146": "146",
  /** Physical pin 147: CAM1_CP; input. */
  "CAM1_CP": "147",
  /** Physical pin 148: CAM0_DP1; input. */
  "CAM0_DP1": "148",
  /** Physical pin 149: CAM1_CN; input. */
  "CAM1_CN": "149",
  /** Physical pin 150: CAM0_DN1; input. */
  "CAM0_DN1": "150",
  /** Physical pin 151: GND; passive. */
  "GND_151": "151",
  /** Physical pin 152: GND; passive. */
  "GND_152": "152",
  /** Physical pin 153: CAM1_DP1; input. */
  "CAM1_DP1": "153",
  /** Physical pin 154: NC; no_connect. */
  "NC_154": "154",
  /** Physical pin 155: CAM1_DN1; input. */
  "CAM1_DN1": "155",
  /** Physical pin 156: NC; no_connect. */
  "NC_156": "156",
  /** Physical pin 157: GND; passive. */
  "GND_157": "157",
  /** Physical pin 158: NC; no_connect. */
  "NC_158": "158",
  /** Physical pin 159: CAM1_DP0; input. */
  "CAM1_DP0": "159",
  /** Physical pin 160: NC; no_connect. */
  "NC_160": "160",
  /** Physical pin 161: CAM1_DN0; input. */
  "CAM1_DN0": "161",
  /** Physical pin 162: NC; no_connect. */
  "NC_162": "162",
  /** Physical pin 163: GND; passive. */
  "GND_163": "163",
  /** Physical pin 164: GND; passive. */
  "GND_164": "164",
  /** Physical pin 165: USB_DP; bidirectional. */
  "USB_DP": "165",
  /** Physical pin 166: TVDAC; output. */
  "TVDAC": "166",
  /** Physical pin 167: USB_DM; bidirectional. */
  "USB_DM": "167",
  /** Physical pin 168: USB_OTGID; passive. */
  "USB_OTGID": "168",
  /** Physical pin 169: GND; passive. */
  "GND_169": "169",
  /** Physical pin 170: GND; passive. */
  "GND_170": "170",
  /** Physical pin 171: HDMI_CEC; bidirectional. */
  "HDMI_CEC": "171",
  /** Physical pin 172: ~{VC_TRST}; input. */
  "~{VC_TRST}": "172",
  /** Physical pin 173: HDMI_SDA; bidirectional. */
  "HDMI_SDA": "173",
  /** Physical pin 174: VC_TDI; input. */
  "VC_TDI": "174",
  /** Physical pin 175: HDMI_SCL; bidirectional. */
  "HDMI_SCL": "175",
  /** Physical pin 176: VC_TMS; input. */
  "VC_TMS": "176",
  /** Physical pin 177: RUN; input. */
  "RUN": "177",
  /** Physical pin 178: VC_TDO; output. */
  "VC_TDO": "178",
  /** Physical pin 179: VDD_CORE_(DO_NOT_CONNECT); no_connect. */
  "VDD_CORE_(DO_NOT_CONNECT)": "179",
  /** Physical pin 180: VC_TCK; input. */
  "VC_TCK": "180",
  /** Physical pin 181: GND; passive. */
  "GND_181": "181",
  /** Physical pin 182: GND; passive. */
  "GND_182": "182",
  /** Physical pin 183: 1V8; passive. */
  "1V8_183": "183",
  /** Physical pin 184: 1V8; passive. */
  "1V8_184": "184",
  /** Physical pin 185: 1V8; passive. */
  "1V8_185": "185",
  /** Physical pin 186: 1V8; power_in. */
  "1V8_186": "186",
  /** Physical pin 187: GND; passive. */
  "GND_187": "187",
  /** Physical pin 188: GND; passive. */
  "GND_188": "188",
  /** Physical pin 189: VDAC; passive. */
  "VDAC_189": "189",
  /** Physical pin 190: VDAC; power_in. */
  "VDAC_190": "190",
  /** Physical pin 191: 3V3; passive. */
  "3V3_191": "191",
  /** Physical pin 192: 3V3; passive. */
  "3V3_192": "192",
  /** Physical pin 193: 3V3; passive. */
  "3V3_193": "193",
  /** Physical pin 194: 3V3; power_in. */
  "3V3_194": "194",
  /** Physical pin 195: GND; passive. */
  "GND_195": "195",
  /** Physical pin 196: GND; power_out. */
  "GND_196": "196",
  /** Physical pin 197: VBAT; passive. */
  "VBAT_197": "197",
  /** Physical pin 198: VBAT; passive. */
  "VBAT_198": "198",
  /** Physical pin 199: VBAT; passive. */
  "VBAT_199": "199",
  /** Physical pin 200: VBAT; power_in. */
  "VBAT_200": "200",
}) {
  override schema = "MCU_Module:RaspberryPi-CM3+L";
  override referencePrefix = "U";
}

/**
 * BCM2837 Broadcom 1.2 GHZ quad core, 1 GB RAM, industrial SoM computer
 *
 * KiCad symbol: `MCU_Module:RaspberryPi-CM3-L`. Reference prefix: `U`.
 * Footprint filters: *SODIMM*.
 * @see https://www.raspberrypi.org/documentation/hardware/computemodule/datasheets/rpi_DATA_CM_1p0.pdf
 * Keywords: raspberry pi compute module.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCU_Module_RaspberryPi_CM3_L extends Component.withPins({
  /** Physical pin 1: GND; passive. */
  "GND_1": "1",
  /** Physical pin 2: ~{EMMC_DISABLE}; input. */
  "~{EMMC_DISABLE}": "2",
  /** Physical pin 3: GPIO0; bidirectional. */
  "GPIO0": "3",
  /** Physical pin 4: SDX_VDD; passive. */
  "SDX_VDD_4": "4",
  /** Physical pin 5: GPIO1; bidirectional. */
  "GPIO1": "5",
  /** Physical pin 6: SDX_VDD; power_in. */
  "SDX_VDD_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GPIO2; bidirectional. */
  "GPIO2": "9",
  /** Physical pin 10: SDX_CLK; output. */
  "SDX_CLK": "10",
  /** Physical pin 11: GPIO3; bidirectional. */
  "GPIO3": "11",
  /** Physical pin 12: SDX_CMD; bidirectional. */
  "SDX_CMD": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: GPIO4; bidirectional. */
  "GPIO4": "15",
  /** Physical pin 16: SDX_D0; bidirectional. */
  "SDX_D0": "16",
  /** Physical pin 17: GPIO5; bidirectional. */
  "GPIO5": "17",
  /** Physical pin 18: SDX_D1; bidirectional. */
  "SDX_D1": "18",
  /** Physical pin 19: GND; passive. */
  "GND_19": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: GPIO6; bidirectional. */
  "GPIO6": "21",
  /** Physical pin 22: SDX_D2; bidirectional. */
  "SDX_D2": "22",
  /** Physical pin 23: GPIO7; bidirectional. */
  "GPIO7": "23",
  /** Physical pin 24: SDX_D3; bidirectional. */
  "SDX_D3": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 27: GPIO8; bidirectional. */
  "GPIO8": "27",
  /** Physical pin 28: GPIO28; bidirectional. */
  "GPIO28": "28",
  /** Physical pin 29: GPIO9; bidirectional. */
  "GPIO9": "29",
  /** Physical pin 30: GPIO29; bidirectional. */
  "GPIO29": "30",
  /** Physical pin 31: GND; passive. */
  "GND_31": "31",
  /** Physical pin 32: GND; passive. */
  "GND_32": "32",
  /** Physical pin 33: GPIO10; bidirectional. */
  "GPIO10": "33",
  /** Physical pin 34: GPIO30; bidirectional. */
  "GPIO30": "34",
  /** Physical pin 35: GPIO11; bidirectional. */
  "GPIO11": "35",
  /** Physical pin 36: GPIO31; bidirectional. */
  "GPIO31": "36",
  /** Physical pin 37: GND; passive. */
  "GND_37": "37",
  /** Physical pin 38: GND; passive. */
  "GND_38": "38",
  /** Physical pin 39: GPIO0-27_VDD; passive. */
  "GPIO0-27_VDD_39": "39",
  /** Physical pin 40: GPIO0-27_VDD; power_in. */
  "GPIO0-27_VDD_40": "40",
  /** Physical pin 41: GPIO28-45_VDD; passive. */
  "GPIO28-45_VDD_41": "41",
  /** Physical pin 42: GPIO28-45_VDD; power_in. */
  "GPIO28-45_VDD_42": "42",
  /** Physical pin 43: GND; passive. */
  "GND_43": "43",
  /** Physical pin 44: GND; passive. */
  "GND_44": "44",
  /** Physical pin 45: GPIO12; bidirectional. */
  "GPIO12": "45",
  /** Physical pin 46: GPIO32; bidirectional. */
  "GPIO32": "46",
  /** Physical pin 47: GPIO13; bidirectional. */
  "GPIO13": "47",
  /** Physical pin 48: GPIO33; bidirectional. */
  "GPIO33": "48",
  /** Physical pin 49: GND; passive. */
  "GND_49": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: GPIO14; bidirectional. */
  "GPIO14": "51",
  /** Physical pin 52: GPIO34; bidirectional. */
  "GPIO34": "52",
  /** Physical pin 53: GPIO15; bidirectional. */
  "GPIO15": "53",
  /** Physical pin 54: GPIO35; bidirectional. */
  "GPIO35": "54",
  /** Physical pin 55: GND; passive. */
  "GND_55": "55",
  /** Physical pin 56: GND; passive. */
  "GND_56": "56",
  /** Physical pin 57: GPIO16; bidirectional. */
  "GPIO16": "57",
  /** Physical pin 58: GPIO36; bidirectional. */
  "GPIO36": "58",
  /** Physical pin 59: GPIO17; bidirectional. */
  "GPIO17": "59",
  /** Physical pin 60: GPIO37; bidirectional. */
  "GPIO37": "60",
  /** Physical pin 61: GND; passive. */
  "GND_61": "61",
  /** Physical pin 62: GND; passive. */
  "GND_62": "62",
  /** Physical pin 63: GPIO18; bidirectional. */
  "GPIO18": "63",
  /** Physical pin 64: GPIO38; bidirectional. */
  "GPIO38": "64",
  /** Physical pin 65: GPIO19; bidirectional. */
  "GPIO19": "65",
  /** Physical pin 66: GPIO39; bidirectional. */
  "GPIO39": "66",
  /** Physical pin 67: GND; passive. */
  "GND_67": "67",
  /** Physical pin 68: GND; passive. */
  "GND_68": "68",
  /** Physical pin 69: GPIO20; bidirectional. */
  "GPIO20": "69",
  /** Physical pin 70: GPIO40; bidirectional. */
  "GPIO40": "70",
  /** Physical pin 71: GPIO21; bidirectional. */
  "GPIO21": "71",
  /** Physical pin 72: GPIO41; bidirectional. */
  "GPIO41": "72",
  /** Physical pin 73: GND; passive. */
  "GND_73": "73",
  /** Physical pin 74: GND; passive. */
  "GND_74": "74",
  /** Physical pin 75: GPIO22; bidirectional. */
  "GPIO22": "75",
  /** Physical pin 76: GPIO42; bidirectional. */
  "GPIO42": "76",
  /** Physical pin 77: GPIO23; bidirectional. */
  "GPIO23": "77",
  /** Physical pin 78: GPIO43; bidirectional. */
  "GPIO43": "78",
  /** Physical pin 79: GND; passive. */
  "GND_79": "79",
  /** Physical pin 80: GND; passive. */
  "GND_80": "80",
  /** Physical pin 81: GPIO24; bidirectional. */
  "GPIO24": "81",
  /** Physical pin 82: GPIO44; bidirectional. */
  "GPIO44": "82",
  /** Physical pin 83: GPIO25; bidirectional. */
  "GPIO25": "83",
  /** Physical pin 84: GPIO45; bidirectional. */
  "GPIO45": "84",
  /** Physical pin 85: GND; passive. */
  "GND_85": "85",
  /** Physical pin 86: GND; passive. */
  "GND_86": "86",
  /** Physical pin 87: GPIO26; bidirectional. */
  "GPIO26": "87",
  /** Physical pin 88: HDMI_HPD_N_1V8; input. */
  "HDMI_HPD_N_1V8": "88",
  /** Physical pin 89: GPIO27; bidirectional. */
  "GPIO27": "89",
  /** Physical pin 90: EMMC_EN_N_1V8; output. */
  "EMMC_EN_N_1V8": "90",
  /** Physical pin 91: GND; passive. */
  "GND_91": "91",
  /** Physical pin 92: GND; passive. */
  "GND_92": "92",
  /** Physical pin 93: DSI0_DN1; output. */
  "DSI0_DN1": "93",
  /** Physical pin 94: DSI1_DP0; output. */
  "DSI1_DP0": "94",
  /** Physical pin 95: DSI0_DP1; output. */
  "DSI0_DP1": "95",
  /** Physical pin 96: DSI1_DN0; output. */
  "DSI1_DN0": "96",
  /** Physical pin 97: GND; passive. */
  "GND_97": "97",
  /** Physical pin 98: GND; passive. */
  "GND_98": "98",
  /** Physical pin 99: DSI0_DN0; output. */
  "DSI0_DN0": "99",
  /** Physical pin 100: DSI1_CP; output. */
  "DSI1_CP": "100",
  /** Physical pin 101: DSI0_DP0; output. */
  "DSI0_DP0": "101",
  /** Physical pin 102: DSI1_CN; output. */
  "DSI1_CN": "102",
  /** Physical pin 103: GND; passive. */
  "GND_103": "103",
  /** Physical pin 104: GND; passive. */
  "GND_104": "104",
  /** Physical pin 105: DSI0_CN; output. */
  "DSI0_CN": "105",
  /** Physical pin 106: DSI1_DP3; output. */
  "DSI1_DP3": "106",
  /** Physical pin 107: DSI0_CP; output. */
  "DSI0_CP": "107",
  /** Physical pin 108: DSI1_DN3; output. */
  "DSI1_DN3": "108",
  /** Physical pin 109: GND; passive. */
  "GND_109": "109",
  /** Physical pin 110: GND; passive. */
  "GND_110": "110",
  /** Physical pin 111: HDMI_CLK_N; output. */
  "HDMI_CLK_N": "111",
  /** Physical pin 112: DSI1_DP2; output. */
  "DSI1_DP2": "112",
  /** Physical pin 113: HDMI_CLK_P; output. */
  "HDMI_CLK_P": "113",
  /** Physical pin 114: DSI1_DN2; output. */
  "DSI1_DN2": "114",
  /** Physical pin 115: GND; passive. */
  "GND_115": "115",
  /** Physical pin 116: GND; passive. */
  "GND_116": "116",
  /** Physical pin 117: HDMI_D0_N; output. */
  "HDMI_D0_N": "117",
  /** Physical pin 118: DSI1_DP1; output. */
  "DSI1_DP1": "118",
  /** Physical pin 119: HDMI_D0_P; output. */
  "HDMI_D0_P": "119",
  /** Physical pin 120: DSI1_DN1; output. */
  "DSI1_DN1": "120",
  /** Physical pin 121: GND; passive. */
  "GND_121": "121",
  /** Physical pin 122: GND; passive. */
  "GND_122": "122",
  /** Physical pin 123: HDMI_D1_N; output. */
  "HDMI_D1_N": "123",
  /** Physical pin 124: NC; no_connect. */
  "NC_124": "124",
  /** Physical pin 125: HDMI_D1_P; output. */
  "HDMI_D1_P": "125",
  /** Physical pin 126: NC; no_connect. */
  "NC_126": "126",
  /** Physical pin 127: GND; passive. */
  "GND_127": "127",
  /** Physical pin 128: NC; no_connect. */
  "NC_128": "128",
  /** Physical pin 129: HDMI_D2_N; output. */
  "HDMI_D2_N": "129",
  /** Physical pin 130: NC; no_connect. */
  "NC_130": "130",
  /** Physical pin 131: HDMI_D2_P; output. */
  "HDMI_D2_P": "131",
  /** Physical pin 132: NC; no_connect. */
  "NC_132": "132",
  /** Physical pin 133: GND; passive. */
  "GND_133": "133",
  /** Physical pin 134: GND; passive. */
  "GND_134": "134",
  /** Physical pin 135: CAM1_DP3; input. */
  "CAM1_DP3": "135",
  /** Physical pin 136: CAM0_DP0; input. */
  "CAM0_DP0": "136",
  /** Physical pin 137: CAM1_DN3; input. */
  "CAM1_DN3": "137",
  /** Physical pin 138: CAM0_DN0; input. */
  "CAM0_DN0": "138",
  /** Physical pin 139: GND; passive. */
  "GND_139": "139",
  /** Physical pin 140: GND; passive. */
  "GND_140": "140",
  /** Physical pin 141: CAM1_DP2; input. */
  "CAM1_DP2": "141",
  /** Physical pin 142: CAM0_CP; input. */
  "CAM0_CP": "142",
  /** Physical pin 143: CAM1_DN2; input. */
  "CAM1_DN2": "143",
  /** Physical pin 144: CAM0_CN; input. */
  "CAM0_CN": "144",
  /** Physical pin 145: GND; passive. */
  "GND_145": "145",
  /** Physical pin 146: GND; passive. */
  "GND_146": "146",
  /** Physical pin 147: CAM1_CP; input. */
  "CAM1_CP": "147",
  /** Physical pin 148: CAM0_DP1; input. */
  "CAM0_DP1": "148",
  /** Physical pin 149: CAM1_CN; input. */
  "CAM1_CN": "149",
  /** Physical pin 150: CAM0_DN1; input. */
  "CAM0_DN1": "150",
  /** Physical pin 151: GND; passive. */
  "GND_151": "151",
  /** Physical pin 152: GND; passive. */
  "GND_152": "152",
  /** Physical pin 153: CAM1_DP1; input. */
  "CAM1_DP1": "153",
  /** Physical pin 154: NC; no_connect. */
  "NC_154": "154",
  /** Physical pin 155: CAM1_DN1; input. */
  "CAM1_DN1": "155",
  /** Physical pin 156: NC; no_connect. */
  "NC_156": "156",
  /** Physical pin 157: GND; passive. */
  "GND_157": "157",
  /** Physical pin 158: NC; no_connect. */
  "NC_158": "158",
  /** Physical pin 159: CAM1_DP0; input. */
  "CAM1_DP0": "159",
  /** Physical pin 160: NC; no_connect. */
  "NC_160": "160",
  /** Physical pin 161: CAM1_DN0; input. */
  "CAM1_DN0": "161",
  /** Physical pin 162: NC; no_connect. */
  "NC_162": "162",
  /** Physical pin 163: GND; passive. */
  "GND_163": "163",
  /** Physical pin 164: GND; passive. */
  "GND_164": "164",
  /** Physical pin 165: USB_DP; bidirectional. */
  "USB_DP": "165",
  /** Physical pin 166: TVDAC; output. */
  "TVDAC": "166",
  /** Physical pin 167: USB_DM; bidirectional. */
  "USB_DM": "167",
  /** Physical pin 168: USB_OTGID; passive. */
  "USB_OTGID": "168",
  /** Physical pin 169: GND; passive. */
  "GND_169": "169",
  /** Physical pin 170: GND; passive. */
  "GND_170": "170",
  /** Physical pin 171: HDMI_CEC; bidirectional. */
  "HDMI_CEC": "171",
  /** Physical pin 172: ~{VC_TRST}; input. */
  "~{VC_TRST}": "172",
  /** Physical pin 173: HDMI_SDA; bidirectional. */
  "HDMI_SDA": "173",
  /** Physical pin 174: VC_TDI; input. */
  "VC_TDI": "174",
  /** Physical pin 175: HDMI_SCL; bidirectional. */
  "HDMI_SCL": "175",
  /** Physical pin 176: VC_TMS; input. */
  "VC_TMS": "176",
  /** Physical pin 177: RUN; input. */
  "RUN": "177",
  /** Physical pin 178: VC_TDO; output. */
  "VC_TDO": "178",
  /** Physical pin 179: VDD_CORE_(DO_NOT_CONNECT); no_connect. */
  "VDD_CORE_(DO_NOT_CONNECT)": "179",
  /** Physical pin 180: VC_TCK; input. */
  "VC_TCK": "180",
  /** Physical pin 181: GND; passive. */
  "GND_181": "181",
  /** Physical pin 182: GND; passive. */
  "GND_182": "182",
  /** Physical pin 183: 1V8; passive. */
  "1V8_183": "183",
  /** Physical pin 184: 1V8; passive. */
  "1V8_184": "184",
  /** Physical pin 185: 1V8; passive. */
  "1V8_185": "185",
  /** Physical pin 186: 1V8; power_in. */
  "1V8_186": "186",
  /** Physical pin 187: GND; passive. */
  "GND_187": "187",
  /** Physical pin 188: GND; passive. */
  "GND_188": "188",
  /** Physical pin 189: VDAC; passive. */
  "VDAC_189": "189",
  /** Physical pin 190: VDAC; power_in. */
  "VDAC_190": "190",
  /** Physical pin 191: 3V3; passive. */
  "3V3_191": "191",
  /** Physical pin 192: 3V3; passive. */
  "3V3_192": "192",
  /** Physical pin 193: 3V3; passive. */
  "3V3_193": "193",
  /** Physical pin 194: 3V3; power_in. */
  "3V3_194": "194",
  /** Physical pin 195: GND; passive. */
  "GND_195": "195",
  /** Physical pin 196: GND; power_out. */
  "GND_196": "196",
  /** Physical pin 197: VBAT; passive. */
  "VBAT_197": "197",
  /** Physical pin 198: VBAT; passive. */
  "VBAT_198": "198",
  /** Physical pin 199: VBAT; passive. */
  "VBAT_199": "199",
  /** Physical pin 200: VBAT; power_in. */
  "VBAT_200": "200",
}) {
  override schema = "MCU_Module:RaspberryPi-CM3-L";
  override referencePrefix = "U";
}

/**
 * Versatile and inexpensive microcontroller module powered by RP2040 dual-core Arm Cortex-M0+ processor up to 133 MHz, 264kB SRAM, 2MB QSPI flash; also supports Raspberry Pi Pico 2
 *
 * KiCad symbol: `MCU_Module:RaspberryPi_Pico`. Reference prefix: `A`.
 * Footprint filters: RaspberryPi?Pico?Common*, RaspberryPi?Pico?SMD*.
 * @see https://datasheets.raspberrypi.com/pico/pico-datasheet.pdf
 * Keywords: RP2350A M33 RISC-V Hazard3 usb.
 * Default footprint: Module:RaspberryPi_Pico_Common_Unspecified.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RaspberryPi_Pico extends Component.withPins({
  /** Physical pin 1: GPIO0; bidirectional. */
  "GPIO0": "1",
  /** Physical pin 2: GPIO1; bidirectional. */
  "GPIO1": "2",
  /** Physical pin 3: GND; power_out. */
  "GND_3": "3",
  /** Physical pin 4: GPIO2; bidirectional. */
  "GPIO2": "4",
  /** Physical pin 5: GPIO3; bidirectional. */
  "GPIO3": "5",
  /** Physical pin 6: GPIO4; bidirectional. */
  "GPIO4": "6",
  /** Physical pin 7: GPIO5; bidirectional. */
  "GPIO5": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GPIO6; bidirectional. */
  "GPIO6": "9",
  /** Physical pin 10: GPIO7; bidirectional. */
  "GPIO7": "10",
  /** Physical pin 11: GPIO8; bidirectional. */
  "GPIO8": "11",
  /** Physical pin 12: GPIO9; bidirectional. */
  "GPIO9": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: GPIO10; bidirectional. */
  "GPIO10": "14",
  /** Physical pin 15: GPIO11; bidirectional. */
  "GPIO11": "15",
  /** Physical pin 16: GPIO12; bidirectional. */
  "GPIO12": "16",
  /** Physical pin 17: GPIO13; bidirectional. */
  "GPIO13": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: GPIO14; bidirectional. */
  "GPIO14": "19",
  /** Physical pin 20: GPIO15; bidirectional. */
  "GPIO15": "20",
  /** Physical pin 21: GPIO16; bidirectional. */
  "GPIO16": "21",
  /** Physical pin 22: GPIO17; bidirectional. */
  "GPIO17": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: GPIO18; bidirectional. */
  "GPIO18": "24",
  /** Physical pin 25: GPIO19; bidirectional. */
  "GPIO19": "25",
  /** Physical pin 26: GPIO20; bidirectional. */
  "GPIO20": "26",
  /** Physical pin 27: GPIO21; bidirectional. */
  "GPIO21": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: GPIO22; bidirectional. */
  "GPIO22": "29",
  /** Physical pin 30: RUN; passive. */
  "RUN": "30",
  /** Physical pin 31: GPIO26_ADC0; bidirectional. */
  "GPIO26_ADC0": "31",
  /** Physical pin 32: GPIO27_ADC1; bidirectional. */
  "GPIO27_ADC1": "32",
  /** Physical pin 33: AGND; power_out. */
  "AGND": "33",
  /** Physical pin 34: GPIO28_ADC2; bidirectional. */
  "GPIO28_ADC2": "34",
  /** Physical pin 35: ADC_VREF; power_in. */
  "ADC_VREF": "35",
  /** Physical pin 36: 3V3; power_out. */
  "3V3": "36",
  /** Physical pin 37: 3V3_EN; passive. */
  "3V3_EN": "37",
  /** Physical pin 38: GND; passive. */
  "GND_38": "38",
  /** Physical pin 39: VSYS; power_in. */
  "VSYS": "39",
  /** Physical pin 40: VBUS; power_out. */
  "VBUS": "40",
}) {
  override schema = "MCU_Module:RaspberryPi_Pico";
  override referencePrefix = "A";
}

/**
 * Versatile and inexpensive microcontroller module (with debug pins) powered by RP2040 dual-core Arm Cortex-M0+ processor up to 133 MHz, 264kB SRAM, 2MB QSPI flash; also supports Raspberry Pi Pico 2
 *
 * KiCad symbol: `MCU_Module:RaspberryPi_Pico_Debug`. Reference prefix: `A`.
 * Footprint filters: RaspberryPi?Pico?SMD*.
 * @see https://datasheets.raspberrypi.com/pico/pico-datasheet.pdf
 * Keywords: RP2350A M33 RISC-V Hazard3 usb swd.
 * Default footprint: Module:RaspberryPi_Pico_SMD_HandSolder.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RaspberryPi_Pico_Debug extends Component.withPins({
  /** Physical pin 1: GPIO0; bidirectional. */
  "GPIO0": "1",
  /** Physical pin 2: GPIO1; bidirectional. */
  "GPIO1": "2",
  /** Physical pin 3: GND; power_out. */
  "GND_3": "3",
  /** Physical pin 4: GPIO2; bidirectional. */
  "GPIO2": "4",
  /** Physical pin 5: GPIO3; bidirectional. */
  "GPIO3": "5",
  /** Physical pin 6: GPIO4; bidirectional. */
  "GPIO4": "6",
  /** Physical pin 7: GPIO5; bidirectional. */
  "GPIO5": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GPIO6; bidirectional. */
  "GPIO6": "9",
  /** Physical pin 10: GPIO7; bidirectional. */
  "GPIO7": "10",
  /** Physical pin 11: GPIO8; bidirectional. */
  "GPIO8": "11",
  /** Physical pin 12: GPIO9; bidirectional. */
  "GPIO9": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: GPIO10; bidirectional. */
  "GPIO10": "14",
  /** Physical pin 15: GPIO11; bidirectional. */
  "GPIO11": "15",
  /** Physical pin 16: GPIO12; bidirectional. */
  "GPIO12": "16",
  /** Physical pin 17: GPIO13; bidirectional. */
  "GPIO13": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: GPIO14; bidirectional. */
  "GPIO14": "19",
  /** Physical pin 20: GPIO15; bidirectional. */
  "GPIO15": "20",
  /** Physical pin 21: GPIO16; bidirectional. */
  "GPIO16": "21",
  /** Physical pin 22: GPIO17; bidirectional. */
  "GPIO17": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: GPIO18; bidirectional. */
  "GPIO18": "24",
  /** Physical pin 25: GPIO19; bidirectional. */
  "GPIO19": "25",
  /** Physical pin 26: GPIO20; bidirectional. */
  "GPIO20": "26",
  /** Physical pin 27: GPIO21; bidirectional. */
  "GPIO21": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: GPIO22; bidirectional. */
  "GPIO22": "29",
  /** Physical pin 30: RUN; passive. */
  "RUN": "30",
  /** Physical pin 31: GPIO26_ADC0; bidirectional. */
  "GPIO26_ADC0": "31",
  /** Physical pin 32: GPIO27_ADC1; bidirectional. */
  "GPIO27_ADC1": "32",
  /** Physical pin 33: AGND; power_out. */
  "AGND": "33",
  /** Physical pin 34: GPIO28_ADC2; bidirectional. */
  "GPIO28_ADC2": "34",
  /** Physical pin 35: ADC_VREF; power_in. */
  "ADC_VREF": "35",
  /** Physical pin 36: 3V3; power_out. */
  "3V3": "36",
  /** Physical pin 37: 3V3_EN; passive. */
  "3V3_EN": "37",
  /** Physical pin 38: GND; passive. */
  "GND_38": "38",
  /** Physical pin 39: VSYS; power_in. */
  "VSYS": "39",
  /** Physical pin 40: VBUS; power_out. */
  "VBUS": "40",
  /** Physical pin D1: SWCLK; input. */
  "SWCLK": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: SWDIO; bidirectional. */
  "SWDIO": "D3",
}) {
  override schema = "MCU_Module:RaspberryPi_Pico_Debug";
  override referencePrefix = "A";
}

/**
 * Versatile and inexpensive microcontroller module (with full pinout for test point and debug connections) powered by RP2040 dual-core Arm Cortex-M0+ processor up to 133 MHz, 264kB SRAM, 2MB QSPI flash; also supports Raspberry Pi Pico 2
 *
 * KiCad symbol: `MCU_Module:RaspberryPi_Pico_Extensive`. Reference prefix: `A`.
 * Footprint filters: RaspberryPi?Pico?SMD.
 * @see https://datasheets.raspberrypi.com/pico/pico-datasheet.pdf
 * Keywords: RP2350A M33 RISC-V Hazard3 usb swd.
 * Default footprint: Module:RaspberryPi_Pico_SMD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RaspberryPi_Pico_Extensive extends Component.withPins({
  /** Physical pin 1: GPIO0; bidirectional. */
  "GPIO0": "1",
  /** Physical pin 2: GPIO1; bidirectional. */
  "GPIO1": "2",
  /** Physical pin 3: GND; power_out. */
  "GND_3": "3",
  /** Physical pin 4: GPIO2; bidirectional. */
  "GPIO2": "4",
  /** Physical pin 5: GPIO3; bidirectional. */
  "GPIO3": "5",
  /** Physical pin 6: GPIO4; bidirectional. */
  "GPIO4": "6",
  /** Physical pin 7: GPIO5; bidirectional. */
  "GPIO5": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GPIO6; bidirectional. */
  "GPIO6": "9",
  /** Physical pin 10: GPIO7; bidirectional. */
  "GPIO7": "10",
  /** Physical pin 11: GPIO8; bidirectional. */
  "GPIO8": "11",
  /** Physical pin 12: GPIO9; bidirectional. */
  "GPIO9": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: GPIO10; bidirectional. */
  "GPIO10": "14",
  /** Physical pin 15: GPIO11; bidirectional. */
  "GPIO11": "15",
  /** Physical pin 16: GPIO12; bidirectional. */
  "GPIO12": "16",
  /** Physical pin 17: GPIO13; bidirectional. */
  "GPIO13": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: GPIO14; bidirectional. */
  "GPIO14": "19",
  /** Physical pin 20: GPIO15; bidirectional. */
  "GPIO15": "20",
  /** Physical pin 21: GPIO16; bidirectional. */
  "GPIO16": "21",
  /** Physical pin 22: GPIO17; bidirectional. */
  "GPIO17": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: GPIO18; bidirectional. */
  "GPIO18": "24",
  /** Physical pin 25: GPIO19; bidirectional. */
  "GPIO19": "25",
  /** Physical pin 26: GPIO20; bidirectional. */
  "GPIO20": "26",
  /** Physical pin 27: GPIO21; bidirectional. */
  "GPIO21": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: GPIO22; bidirectional. */
  "GPIO22": "29",
  /** Physical pin 30: RUN; passive. */
  "RUN": "30",
  /** Physical pin 31: GPIO26_ADC0; bidirectional. */
  "GPIO26_ADC0": "31",
  /** Physical pin 32: GPIO27_ADC1; bidirectional. */
  "GPIO27_ADC1": "32",
  /** Physical pin 33: AGND; power_out. */
  "AGND": "33",
  /** Physical pin 34: GPIO28_ADC2; bidirectional. */
  "GPIO28_ADC2": "34",
  /** Physical pin 35: ADC_VREF; power_in. */
  "ADC_VREF": "35",
  /** Physical pin 36: 3V3; power_out. */
  "3V3": "36",
  /** Physical pin 37: 3V3_EN; passive. */
  "3V3_EN": "37",
  /** Physical pin 38: GND; passive. */
  "GND_38": "38",
  /** Physical pin 39: VSYS; power_in. */
  "VSYS": "39",
  /** Physical pin 40: VBUS; power_out. */
  "VBUS": "40",
  /** Physical pin D1: SWCLK; input. */
  "SWCLK": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: SWDIO; bidirectional. */
  "SWDIO": "D3",
  /** Physical pin TP1: USB_GND; power_out. */
  "USB_GND": "TP1",
  /** Physical pin TP2: USB_DM; bidirectional. */
  "USB_DM": "TP2",
  /** Physical pin TP3: USB_DP; bidirectional. */
  "USB_DP": "TP3",
  /** Physical pin TP4: ~{SMPS_PS}; no_connect. */
  "~{SMPS_PS}": "TP4",
  /** Physical pin TP5: LED_OUT; output. */
  "LED_OUT": "TP5",
  /** Physical pin TP6: ~{BOOTSEL}; input. */
  "~{BOOTSEL}": "TP6",
}) {
  override schema = "MCU_Module:RaspberryPi_Pico_Extensive";
  override referencePrefix = "A";
}

/**
 * Versatile and inexpensive wireless microcontroller module powered by RP2040 dual-core Arm Cortex-M0+ processor up to 133 MHz, 264kB SRAM, 2MB QSPI flash, Infineon CYW43439 2.4GHz 802.11n wireless LAN; also supports Raspberry Pi Pico 2 W
 *
 * KiCad symbol: `MCU_Module:RaspberryPi_Pico_W`. Reference prefix: `A`.
 * Footprint filters: RaspberryPi?Pico?Common*, RaspberryPi?Pico?W?SMD*.
 * @see https://datasheets.raspberrypi.com/picow/pico-w-datasheet.pdf
 * Keywords: RP2350A M33 RISC-V Hazard3 usb wifi bluetooth.
 * Default footprint: Module:RaspberryPi_Pico_W_SMD_HandSolder.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RaspberryPi_Pico_W extends Component.withPins({
  /** Physical pin 1: GPIO0; bidirectional. */
  "GPIO0": "1",
  /** Physical pin 2: GPIO1; bidirectional. */
  "GPIO1": "2",
  /** Physical pin 3: GND; power_out. */
  "GND_3": "3",
  /** Physical pin 4: GPIO2; bidirectional. */
  "GPIO2": "4",
  /** Physical pin 5: GPIO3; bidirectional. */
  "GPIO3": "5",
  /** Physical pin 6: GPIO4; bidirectional. */
  "GPIO4": "6",
  /** Physical pin 7: GPIO5; bidirectional. */
  "GPIO5": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GPIO6; bidirectional. */
  "GPIO6": "9",
  /** Physical pin 10: GPIO7; bidirectional. */
  "GPIO7": "10",
  /** Physical pin 11: GPIO8; bidirectional. */
  "GPIO8": "11",
  /** Physical pin 12: GPIO9; bidirectional. */
  "GPIO9": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: GPIO10; bidirectional. */
  "GPIO10": "14",
  /** Physical pin 15: GPIO11; bidirectional. */
  "GPIO11": "15",
  /** Physical pin 16: GPIO12; bidirectional. */
  "GPIO12": "16",
  /** Physical pin 17: GPIO13; bidirectional. */
  "GPIO13": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: GPIO14; bidirectional. */
  "GPIO14": "19",
  /** Physical pin 20: GPIO15; bidirectional. */
  "GPIO15": "20",
  /** Physical pin 21: GPIO16; bidirectional. */
  "GPIO16": "21",
  /** Physical pin 22: GPIO17; bidirectional. */
  "GPIO17": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: GPIO18; bidirectional. */
  "GPIO18": "24",
  /** Physical pin 25: GPIO19; bidirectional. */
  "GPIO19": "25",
  /** Physical pin 26: GPIO20; bidirectional. */
  "GPIO20": "26",
  /** Physical pin 27: GPIO21; bidirectional. */
  "GPIO21": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: GPIO22; bidirectional. */
  "GPIO22": "29",
  /** Physical pin 30: RUN; passive. */
  "RUN": "30",
  /** Physical pin 31: GPIO26_ADC0; bidirectional. */
  "GPIO26_ADC0": "31",
  /** Physical pin 32: GPIO27_ADC1; bidirectional. */
  "GPIO27_ADC1": "32",
  /** Physical pin 33: AGND; power_out. */
  "AGND": "33",
  /** Physical pin 34: GPIO28_ADC2; bidirectional. */
  "GPIO28_ADC2": "34",
  /** Physical pin 35: ADC_VREF; power_in. */
  "ADC_VREF": "35",
  /** Physical pin 36: 3V3; power_out. */
  "3V3": "36",
  /** Physical pin 37: 3V3_EN; passive. */
  "3V3_EN": "37",
  /** Physical pin 38: GND; passive. */
  "GND_38": "38",
  /** Physical pin 39: VSYS; power_in. */
  "VSYS": "39",
  /** Physical pin 40: VBUS; power_out. */
  "VBUS": "40",
}) {
  override schema = "MCU_Module:RaspberryPi_Pico_W";
  override referencePrefix = "A";
}

/**
 * Versatile and inexpensive wireless microcontroller module (with debug pins) powered by RP2040 dual-core Arm Cortex-M0+ processor up to 133 MHz, 264kB SRAM, 2MB QSPI flash, Infineon CYW43439 2.4GHz 802.11n wireless LAN; also supports Raspberry Pi Pico 2 W
 *
 * KiCad symbol: `MCU_Module:RaspberryPi_Pico_W_Debug`. Reference prefix: `A`.
 * Footprint filters: RaspberryPi?Pico?W?SMD*.
 * @see https://datasheets.raspberrypi.com/picow/pico-w-datasheet.pdf
 * Keywords: RP2350A M33 RISC-V Hazard3 usb swd wifi bluetooth.
 * Default footprint: Module:RaspberryPi_Pico_W_SMD_HandSolder.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RaspberryPi_Pico_W_Debug extends Component.withPins({
  /** Physical pin 1: GPIO0; bidirectional. */
  "GPIO0": "1",
  /** Physical pin 2: GPIO1; bidirectional. */
  "GPIO1": "2",
  /** Physical pin 3: GND; power_out. */
  "GND_3": "3",
  /** Physical pin 4: GPIO2; bidirectional. */
  "GPIO2": "4",
  /** Physical pin 5: GPIO3; bidirectional. */
  "GPIO3": "5",
  /** Physical pin 6: GPIO4; bidirectional. */
  "GPIO4": "6",
  /** Physical pin 7: GPIO5; bidirectional. */
  "GPIO5": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GPIO6; bidirectional. */
  "GPIO6": "9",
  /** Physical pin 10: GPIO7; bidirectional. */
  "GPIO7": "10",
  /** Physical pin 11: GPIO8; bidirectional. */
  "GPIO8": "11",
  /** Physical pin 12: GPIO9; bidirectional. */
  "GPIO9": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: GPIO10; bidirectional. */
  "GPIO10": "14",
  /** Physical pin 15: GPIO11; bidirectional. */
  "GPIO11": "15",
  /** Physical pin 16: GPIO12; bidirectional. */
  "GPIO12": "16",
  /** Physical pin 17: GPIO13; bidirectional. */
  "GPIO13": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: GPIO14; bidirectional. */
  "GPIO14": "19",
  /** Physical pin 20: GPIO15; bidirectional. */
  "GPIO15": "20",
  /** Physical pin 21: GPIO16; bidirectional. */
  "GPIO16": "21",
  /** Physical pin 22: GPIO17; bidirectional. */
  "GPIO17": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: GPIO18; bidirectional. */
  "GPIO18": "24",
  /** Physical pin 25: GPIO19; bidirectional. */
  "GPIO19": "25",
  /** Physical pin 26: GPIO20; bidirectional. */
  "GPIO20": "26",
  /** Physical pin 27: GPIO21; bidirectional. */
  "GPIO21": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: GPIO22; bidirectional. */
  "GPIO22": "29",
  /** Physical pin 30: RUN; passive. */
  "RUN": "30",
  /** Physical pin 31: GPIO26_ADC0; bidirectional. */
  "GPIO26_ADC0": "31",
  /** Physical pin 32: GPIO27_ADC1; bidirectional. */
  "GPIO27_ADC1": "32",
  /** Physical pin 33: AGND; power_out. */
  "AGND": "33",
  /** Physical pin 34: GPIO28_ADC2; bidirectional. */
  "GPIO28_ADC2": "34",
  /** Physical pin 35: ADC_VREF; power_in. */
  "ADC_VREF": "35",
  /** Physical pin 36: 3V3; power_out. */
  "3V3": "36",
  /** Physical pin 37: 3V3_EN; passive. */
  "3V3_EN": "37",
  /** Physical pin 38: GND; passive. */
  "GND_38": "38",
  /** Physical pin 39: VSYS; power_in. */
  "VSYS": "39",
  /** Physical pin 40: VBUS; power_out. */
  "VBUS": "40",
  /** Physical pin D1: SWCLK; input. */
  "SWCLK": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: SWDIO; bidirectional. */
  "SWDIO": "D3",
}) {
  override schema = "MCU_Module:RaspberryPi_Pico_W_Debug";
  override referencePrefix = "A";
}

/**
 * Versatile and inexpensive wireless microcontroller module (with full pinout for test point and debug connections) powered by RP2040 dual-core Arm Cortex-M0+ processor up to 133 MHz, 264kB SRAM, 2MB QSPI flash, Infineon CYW43439 2.4GHz 802.11n wireless LAN; also supports Raspberry Pi Pico 2 W
 *
 * KiCad symbol: `MCU_Module:RaspberryPi_Pico_W_Extensive`. Reference prefix: `A`.
 * Footprint filters: RaspberryPi?Pico?W?SMD.
 * @see https://datasheets.raspberrypi.com/picow/pico-w-datasheet.pdf
 * Keywords: RP2350A M33 RISC-V Hazard3 usb swd wifi bluetooth.
 * Default footprint: Module:RaspberryPi_Pico_W_SMD.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RaspberryPi_Pico_W_Extensive extends Component.withPins({
  /** Physical pin 1: GPIO0; bidirectional. */
  "GPIO0": "1",
  /** Physical pin 2: GPIO1; bidirectional. */
  "GPIO1": "2",
  /** Physical pin 3: GND; power_out. */
  "GND_3": "3",
  /** Physical pin 4: GPIO2; bidirectional. */
  "GPIO2": "4",
  /** Physical pin 5: GPIO3; bidirectional. */
  "GPIO3": "5",
  /** Physical pin 6: GPIO4; bidirectional. */
  "GPIO4": "6",
  /** Physical pin 7: GPIO5; bidirectional. */
  "GPIO5": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GPIO6; bidirectional. */
  "GPIO6": "9",
  /** Physical pin 10: GPIO7; bidirectional. */
  "GPIO7": "10",
  /** Physical pin 11: GPIO8; bidirectional. */
  "GPIO8": "11",
  /** Physical pin 12: GPIO9; bidirectional. */
  "GPIO9": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: GPIO10; bidirectional. */
  "GPIO10": "14",
  /** Physical pin 15: GPIO11; bidirectional. */
  "GPIO11": "15",
  /** Physical pin 16: GPIO12; bidirectional. */
  "GPIO12": "16",
  /** Physical pin 17: GPIO13; bidirectional. */
  "GPIO13": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 19: GPIO14; bidirectional. */
  "GPIO14": "19",
  /** Physical pin 20: GPIO15; bidirectional. */
  "GPIO15": "20",
  /** Physical pin 21: GPIO16; bidirectional. */
  "GPIO16": "21",
  /** Physical pin 22: GPIO17; bidirectional. */
  "GPIO17": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: GPIO18; bidirectional. */
  "GPIO18": "24",
  /** Physical pin 25: GPIO19; bidirectional. */
  "GPIO19": "25",
  /** Physical pin 26: GPIO20; bidirectional. */
  "GPIO20": "26",
  /** Physical pin 27: GPIO21; bidirectional. */
  "GPIO21": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: GPIO22; bidirectional. */
  "GPIO22": "29",
  /** Physical pin 30: RUN; passive. */
  "RUN": "30",
  /** Physical pin 31: GPIO26_ADC0; bidirectional. */
  "GPIO26_ADC0": "31",
  /** Physical pin 32: GPIO27_ADC1; bidirectional. */
  "GPIO27_ADC1": "32",
  /** Physical pin 33: AGND; power_out. */
  "AGND": "33",
  /** Physical pin 34: GPIO28_ADC2; bidirectional. */
  "GPIO28_ADC2": "34",
  /** Physical pin 35: ADC_VREF; power_in. */
  "ADC_VREF": "35",
  /** Physical pin 36: 3V3; power_out. */
  "3V3": "36",
  /** Physical pin 37: 3V3_EN; passive. */
  "3V3_EN": "37",
  /** Physical pin 38: GND; passive. */
  "GND_38": "38",
  /** Physical pin 39: VSYS; power_in. */
  "VSYS": "39",
  /** Physical pin 40: VBUS; power_out. */
  "VBUS": "40",
  /** Physical pin D1: SWCLK; input. */
  "SWCLK": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: SWDIO; bidirectional. */
  "SWDIO": "D3",
  /** Physical pin TP1: USB_GND; power_out. */
  "USB_GND": "TP1",
  /** Physical pin TP2: USB_DM; bidirectional. */
  "USB_DM": "TP2",
  /** Physical pin TP3: USB_DP; bidirectional. */
  "USB_DP": "TP3",
  /** Physical pin TP4: ~{SMPS_PS}; no_connect. */
  "~{SMPS_PS}": "TP4",
  /** Physical pin TP5: LED_OUT; output. */
  "LED_OUT": "TP5",
  /** Physical pin TP6: ~{BOOTSEL}; input. */
  "~{BOOTSEL}": "TP6",
}) {
  override schema = "MCU_Module:RaspberryPi_Pico_W_Extensive";
  override referencePrefix = "A";
}

/**
 * AI accelerated RISC-V microcontroller
 *
 * KiCad symbol: `MCU_Module:Sipeed-M1`. Reference prefix: `U`.
 * Footprint filters: Sipeed?*M1*.
 * @see https://dl.sipeed.com/MAIX/HDK/Sipeed-M1&M1W/Specifications
 * Keywords: AI Kendryte K210 RISC-V.
 * Default footprint: Module:Sipeed-M1.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Sipeed_M1 extends Component.withPins({
  /** Physical pin 1: IO0/JTAG_TCK; bidirectional. */
  "IO0/JTAG_TCK": "1",
  /** Physical pin 2: IO1/JTAG_TDI; bidirectional. */
  "IO1/JTAG_TDI": "2",
  /** Physical pin 3: IO2/JTAG_TMS; bidirectional. */
  "IO2/JTAG_TMS": "3",
  /** Physical pin 4: IO3/JTAG_TDO; bidirectional. */
  "IO3/JTAG_TDO": "4",
  /** Physical pin 5: IO4/ISP_Rx; bidirectional. */
  "IO4/ISP_Rx": "5",
  /** Physical pin 6: IO5/ISP_Tx; bidirectional. */
  "IO5/ISP_Tx": "6",
  /** Physical pin 7: IO6; bidirectional. */
  "IO6": "7",
  /** Physical pin 8: IO7; bidirectional. */
  "IO7": "8",
  /** Physical pin 9: IO8; bidirectional. */
  "IO8": "9",
  /** Physical pin 10: IO9; bidirectional. */
  "IO9": "10",
  /** Physical pin 11: IO10; bidirectional. */
  "IO10": "11",
  /** Physical pin 12: IO11; bidirectional. */
  "IO11": "12",
  /** Physical pin 13: IO12; bidirectional. */
  "IO12": "13",
  /** Physical pin 14: IO13; bidirectional. */
  "IO13": "14",
  /** Physical pin 15: IO14; bidirectional. */
  "IO14": "15",
  /** Physical pin 16: IO15; bidirectional. */
  "IO15": "16",
  /** Physical pin 17: IO16/BOOT; bidirectional. */
  "IO16/BOOT": "17",
  /** Physical pin 18: IO17; bidirectional. */
  "IO17": "18",
  /** Physical pin 19: IO18; bidirectional. */
  "IO18": "19",
  /** Physical pin 20: IO19; bidirectional. */
  "IO19": "20",
  /** Physical pin 21: IO20; bidirectional. */
  "IO20": "21",
  /** Physical pin 22: IO21; bidirectional. */
  "IO21": "22",
  /** Physical pin 23: IO22; bidirectional. */
  "IO22": "23",
  /** Physical pin 24: IO23; bidirectional. */
  "IO23": "24",
  /** Physical pin 25: IO24; bidirectional. */
  "IO24": "25",
  /** Physical pin 26: IO25; bidirectional. */
  "IO25": "26",
  /** Physical pin 27: IO26; bidirectional. */
  "IO26": "27",
  /** Physical pin 28: IO27; bidirectional. */
  "IO27": "28",
  /** Physical pin 29: IO28; bidirectional. */
  "IO28": "29",
  /** Physical pin 30: IO29; bidirectional. */
  "IO29": "30",
  /** Physical pin 31: IO30; bidirectional. */
  "IO30": "31",
  /** Physical pin 32: IO31; bidirectional. */
  "IO31": "32",
  /** Physical pin 33: IO32; bidirectional. */
  "IO32": "33",
  /** Physical pin 34: IO33; bidirectional. */
  "IO33": "34",
  /** Physical pin 35: IO34; bidirectional. */
  "IO34": "35",
  /** Physical pin 36: IO35; bidirectional. */
  "IO35": "36",
  /** Physical pin 37: IO36; bidirectional. */
  "IO36": "37",
  /** Physical pin 38: IO37; bidirectional. */
  "IO37": "38",
  /** Physical pin 39: IO38; bidirectional. */
  "IO38": "39",
  /** Physical pin 40: IO39; bidirectional. */
  "IO39": "40",
  /** Physical pin 41: IO40; bidirectional. */
  "IO40": "41",
  /** Physical pin 42: IO41; bidirectional. */
  "IO41": "42",
  /** Physical pin 43: IO42; bidirectional. */
  "IO42": "43",
  /** Physical pin 44: IO43; bidirectional. */
  "IO43": "44",
  /** Physical pin 45: IO44; bidirectional. */
  "IO44": "45",
  /** Physical pin 46: IO45; bidirectional. */
  "IO45": "46",
  /** Physical pin 47: IO46; bidirectional. */
  "IO46": "47",
  /** Physical pin 48: IO47; bidirectional. */
  "IO47": "48",
  /** Physical pin 49: GND; power_in. */
  "GND_49": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: 5V; power_in. */
  "5V_51": "51",
  /** Physical pin 52: 5V; passive. */
  "5V_52": "52",
  /** Physical pin 53: 1V8; power_out. */
  "1V8": "53",
  /** Physical pin 54: 3V3; power_out. */
  "3V3": "54",
  /** Physical pin 55: RST; input. */
  "RST": "55",
  /** Physical pin 56: LCD_D7; bidirectional. */
  "LCD_D7": "56",
  /** Physical pin 57: LCD_D6; bidirectional. */
  "LCD_D6": "57",
  /** Physical pin 58: LCD_D5; bidirectional. */
  "LCD_D5": "58",
  /** Physical pin 59: LCD_D4; bidirectional. */
  "LCD_D4": "59",
  /** Physical pin 60: LCD_D3; bidirectional. */
  "LCD_D3": "60",
  /** Physical pin 61: LCD_D2; bidirectional. */
  "LCD_D2": "61",
  /** Physical pin 62: LCD_D1; bidirectional. */
  "LCD_D1": "62",
  /** Physical pin 63: LCD_D0; bidirectional. */
  "LCD_D0": "63",
  /** Physical pin 64: DVP_D7; bidirectional. */
  "DVP_D7": "64",
  /** Physical pin 65: DVP_D6; bidirectional. */
  "DVP_D6": "65",
  /** Physical pin 66: DVP_D5; bidirectional. */
  "DVP_D5": "66",
  /** Physical pin 67: DVP_D4; bidirectional. */
  "DVP_D4": "67",
  /** Physical pin 68: DVP_D3; bidirectional. */
  "DVP_D3": "68",
  /** Physical pin 69: DVP_D2; bidirectional. */
  "DVP_D2": "69",
  /** Physical pin 70: DVP_D1; bidirectional. */
  "DVP_D1": "70",
  /** Physical pin 71: DVP_D0; bidirectional. */
  "DVP_D0": "71",
  /** Physical pin 72: GND; passive. */
  "GND_72": "72",
}) {
  override schema = "MCU_Module:Sipeed-M1";
  override referencePrefix = "U";
}

/**
 * AI Accelerated RISC-V MCU with WiFi
 *
 * KiCad symbol: `MCU_Module:Sipeed-M1W`. Reference prefix: `U`.
 * Footprint filters: Sipeed?*M1W*.
 * @see https://dl.sipeed.com/MAIX/HDK/Sipeed-M1&M1W/Specifications
 * Keywords: WiFi K210 Kendryte.
 * Default footprint: Module:Sipeed-M1W.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Sipeed_M1W extends Component.withPins({
  /** Physical pin 1: IO0/JTAG_TCK; bidirectional. */
  "IO0/JTAG_TCK": "1",
  /** Physical pin 2: IO1/JTAG_TDI; bidirectional. */
  "IO1/JTAG_TDI": "2",
  /** Physical pin 3: IO2/JTAG_TMS; bidirectional. */
  "IO2/JTAG_TMS": "3",
  /** Physical pin 4: IO3/JTAG_TDO; bidirectional. */
  "IO3/JTAG_TDO": "4",
  /** Physical pin 5: IO4/ISP_RX; bidirectional. */
  "IO4/ISP_RX": "5",
  /** Physical pin 6: IO5/ISP_TX; bidirectional. */
  "IO5/ISP_TX": "6",
  /** Physical pin 7: IO6; bidirectional. */
  "IO6": "7",
  /** Physical pin 8: IO7; bidirectional. */
  "IO7": "8",
  /** Physical pin 9: IO8; bidirectional. */
  "IO8": "9",
  /** Physical pin 10: IO9; bidirectional. */
  "IO9": "10",
  /** Physical pin 11: IO10; bidirectional. */
  "IO10": "11",
  /** Physical pin 12: IO11; bidirectional. */
  "IO11": "12",
  /** Physical pin 13: IO12; bidirectional. */
  "IO12": "13",
  /** Physical pin 14: IO13; bidirectional. */
  "IO13": "14",
  /** Physical pin 15: IO14; bidirectional. */
  "IO14": "15",
  /** Physical pin 16: IO15; bidirectional. */
  "IO15": "16",
  /** Physical pin 17: IO16/BOOT; bidirectional. */
  "IO16/BOOT": "17",
  /** Physical pin 18: IO17; bidirectional. */
  "IO17": "18",
  /** Physical pin 19: IO18; bidirectional. */
  "IO18": "19",
  /** Physical pin 20: IO19; bidirectional. */
  "IO19": "20",
  /** Physical pin 21: IO20; bidirectional. */
  "IO20": "21",
  /** Physical pin 22: IO21; bidirectional. */
  "IO21": "22",
  /** Physical pin 23: IO22; bidirectional. */
  "IO22": "23",
  /** Physical pin 24: IO23; bidirectional. */
  "IO23": "24",
  /** Physical pin 25: IO24; bidirectional. */
  "IO24": "25",
  /** Physical pin 26: IO25; bidirectional. */
  "IO25": "26",
  /** Physical pin 27: IO26; bidirectional. */
  "IO26": "27",
  /** Physical pin 28: IO27; bidirectional. */
  "IO27": "28",
  /** Physical pin 29: IO28; bidirectional. */
  "IO28": "29",
  /** Physical pin 30: IO29; bidirectional. */
  "IO29": "30",
  /** Physical pin 31: IO30; bidirectional. */
  "IO30": "31",
  /** Physical pin 32: IO31; bidirectional. */
  "IO31": "32",
  /** Physical pin 33: IO32; bidirectional. */
  "IO32": "33",
  /** Physical pin 34: IO33; bidirectional. */
  "IO33": "34",
  /** Physical pin 35: IO34; bidirectional. */
  "IO34": "35",
  /** Physical pin 36: IO35; bidirectional. */
  "IO35": "36",
  /** Physical pin 37: IO36; bidirectional. */
  "IO36": "37",
  /** Physical pin 38: IO37; bidirectional. */
  "IO37": "38",
  /** Physical pin 39: IO38; bidirectional. */
  "IO38": "39",
  /** Physical pin 40: IO39; bidirectional. */
  "IO39": "40",
  /** Physical pin 41: IO40; bidirectional. */
  "IO40": "41",
  /** Physical pin 42: IO41; bidirectional. */
  "IO41": "42",
  /** Physical pin 43: IO42; bidirectional. */
  "IO42": "43",
  /** Physical pin 44: IO43; bidirectional. */
  "IO43": "44",
  /** Physical pin 45: IO44; bidirectional. */
  "IO44": "45",
  /** Physical pin 46: IO45; bidirectional. */
  "IO45": "46",
  /** Physical pin 47: IO46; bidirectional. */
  "IO46": "47",
  /** Physical pin 48: IO47; bidirectional. */
  "IO47": "48",
  /** Physical pin 49: GND; power_in. */
  "GND_49": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: 5V; power_in. */
  "5V_51": "51",
  /** Physical pin 52: 5V; passive. */
  "5V_52": "52",
  /** Physical pin 53: 1V8; power_out. */
  "1V8": "53",
  /** Physical pin 54: 3V3; power_out. */
  "3V3": "54",
  /** Physical pin 55: RST; input. */
  "RST": "55",
  /** Physical pin 56: LCD_D7; bidirectional. */
  "LCD_D7": "56",
  /** Physical pin 57: LCD_D6; bidirectional. */
  "LCD_D6": "57",
  /** Physical pin 58: LCD_D5; bidirectional. */
  "LCD_D5": "58",
  /** Physical pin 59: LCD_D4; bidirectional. */
  "LCD_D4": "59",
  /** Physical pin 60: LCD_D3; bidirectional. */
  "LCD_D3": "60",
  /** Physical pin 61: LCD_D2; bidirectional. */
  "LCD_D2": "61",
  /** Physical pin 62: LCD_D1; bidirectional. */
  "LCD_D1": "62",
  /** Physical pin 63: LCD_D0; bidirectional. */
  "LCD_D0": "63",
  /** Physical pin 64: DVP_D7; bidirectional. */
  "DVP_D7": "64",
  /** Physical pin 65: DVP_D6; bidirectional. */
  "DVP_D6": "65",
  /** Physical pin 66: DVP_D5; bidirectional. */
  "DVP_D5": "66",
  /** Physical pin 67: DVP_D4; bidirectional. */
  "DVP_D4": "67",
  /** Physical pin 68: DVP_D3; bidirectional. */
  "DVP_D3": "68",
  /** Physical pin 69: DVP_D2; bidirectional. */
  "DVP_D2": "69",
  /** Physical pin 70: DVP_D1; bidirectional. */
  "DVP_D1": "70",
  /** Physical pin 71: DVP_D0; bidirectional. */
  "DVP_D0": "71",
  /** Physical pin 72: GND; passive. */
  "GND_72": "72",
}) {
  override schema = "MCU_Module:Sipeed-M1W";
  override referencePrefix = "U";
}

/**
 * i.MX6-UL NXP ARM Cortex-A7 696MHz single core industrial SoM computer
 *
 * KiCad symbol: `MCU_Module:VisionSOM-6UL`. Reference prefix: `U`.
 * Footprint filters: *SODIMM*.
 * @see https://wiki.somlabs.com/extensions/JZPDFGen/pdf/VisionSOM-6UL%20Datasheet%20and%20Pinout-41.pdf
 * Keywords: somlabs module.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class VisionSOM_6UL extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: PMIC-STBY-REQ; output. */
  "PMIC-STBY-REQ": "3",
  /** Physical pin 4: ~{MX6-POR-B}; input. */
  "~{MX6-POR-B}": "4",
  /** Physical pin 5: PMIC-ON-REQ; output. */
  "PMIC-ON-REQ": "5",
  /** Physical pin 6: VDD-SNVS-3V3; power_in. */
  "VDD-SNVS-3V3": "6",
  /** Physical pin 7: BOOT-MODE1; input. */
  "BOOT-MODE1": "7",
  /** Physical pin 8: VDD-COIN-3V; power_in. */
  "VDD-COIN-3V": "8",
  /** Physical pin 9: BOOT-MODE0; input. */
  "BOOT-MODE0": "9",
  /** Physical pin 10: SNVS-TAMPER9; bidirectional. */
  "SNVS-TAMPER9": "10",
  /** Physical pin 11: USB-OTG2-VBUS; input. */
  "USB-OTG2-VBUS": "11",
  /** Physical pin 12: SNVS-TAMPER5; bidirectional. */
  "SNVS-TAMPER5": "12",
  /** Physical pin 13: USB-OTG1-VBUS; input. */
  "USB-OTG1-VBUS": "13",
  /** Physical pin 14: ONOFF; input. */
  "ONOFF": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: ~{POR-B}; input. */
  "~{POR-B}": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: SNVS-TAMPER8; bidirectional. */
  "SNVS-TAMPER8": "18",
  /** Physical pin 19: USB-OTG2-DP; bidirectional. */
  "USB-OTG2-DP": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: USB-OTG2-DN; bidirectional. */
  "USB-OTG2-DN": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: SNVS-TAMPER7; bidirectional. */
  "SNVS-TAMPER7": "24",
  /** Physical pin 25: USB-OTG1-DP; bidirectional. */
  "USB-OTG1-DP": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 27: USB-OTG1-DN; bidirectional. */
  "USB-OTG1-DN": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: SNVS-TAMPER4; bidirectional. */
  "SNVS-TAMPER4": "30",
  /** Physical pin 31: ~{USB-OTG1-CHD}; open_collector. */
  "~{USB-OTG1-CHD}": "31",
  /** Physical pin 32: SNVS-TAMPER1; bidirectional. */
  "SNVS-TAMPER1": "32",
  /** Physical pin 33: JTAG-MOD; bidirectional. */
  "JTAG-MOD": "33",
  /** Physical pin 34: SNVS-TAMPER3; bidirectional. */
  "SNVS-TAMPER3": "34",
  /** Physical pin 35: GND; passive. */
  "GND_35": "35",
  /** Physical pin 36: SNVS-TAMPER0; bidirectional. */
  "SNVS-TAMPER0": "36",
  /** Physical pin 37: CLK1-N; bidirectional. */
  "CLK1-N": "37",
  /** Physical pin 38: GND; passive. */
  "GND_38": "38",
  /** Physical pin 39: CLK1-P; bidirectional. */
  "CLK1-P": "39",
  /** Physical pin 40: GND; passive. */
  "GND_40": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
  /** Physical pin 42: SNVS-TAMPER6; bidirectional. */
  "SNVS-TAMPER6": "42",
  /** Physical pin 43: JTAG-TDI; bidirectional. */
  "JTAG-TDI": "43",
  /** Physical pin 44: SNVS-TAMPER2; bidirectional. */
  "SNVS-TAMPER2": "44",
  /** Physical pin 45: GPIO-8; bidirectional. */
  "GPIO-8": "45",
  /** Physical pin 46: JTAG-TMS; bidirectional. */
  "JTAG-TMS": "46",
  /** Physical pin 47: GPIO-4; bidirectional. */
  "GPIO-4": "47",
  /** Physical pin 48: ~{JTAG-TRST}; bidirectional. */
  "~{JTAG-TRST}": "48",
  /** Physical pin 49: GPIO-5; bidirectional. */
  "GPIO-5": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: GND; passive. */
  "GND_51": "51",
  /** Physical pin 52: JTAG-TDO; bidirectional. */
  "JTAG-TDO": "52",
  /** Physical pin 53: GPIO-7; bidirectional. */
  "GPIO-7": "53",
  /** Physical pin 54: JTAG-TCK; bidirectional. */
  "JTAG-TCK": "54",
  /** Physical pin 55: GPIO-3; bidirectional. */
  "GPIO-3": "55",
  /** Physical pin 56: GPIO-9; bidirectional. */
  "GPIO-9": "56",
  /** Physical pin 57: UART1-TXD; bidirectional. */
  "UART1-TXD": "57",
  /** Physical pin 58: GPIO-2; bidirectional. */
  "GPIO-2": "58",
  /** Physical pin 59: GND; passive. */
  "GND_59": "59",
  /** Physical pin 60: GND; passive. */
  "GND_60": "60",
  /** Physical pin 61: GPIO-6; bidirectional. */
  "GPIO-6": "61",
  /** Physical pin 62: GPIO-1; bidirectional. */
  "GPIO-1": "62",
  /** Physical pin 63: UART1-RXD; bidirectional. */
  "UART1-RXD": "63",
  /** Physical pin 64: GPIO-0; bidirectional. */
  "GPIO-0": "64",
  /** Physical pin 65: UART2-TXD; bidirectional. */
  "UART2-TXD": "65",
  /** Physical pin 66: UART1-CTS; bidirectional. */
  "UART1-CTS": "66",
  /** Physical pin 67: UART2-RXD; bidirectional. */
  "UART2-RXD": "67",
  /** Physical pin 68: UART5-RXD; bidirectional. */
  "UART5-RXD": "68",
  /** Physical pin 69: UART3-TXD; bidirectional. */
  "UART3-TXD": "69",
  /** Physical pin 70: GND; passive. */
  "GND_70": "70",
  /** Physical pin 71: GND; passive. */
  "GND_71": "71",
  /** Physical pin 72: UART2-CTS; bidirectional. */
  "UART2-CTS": "72",
  /** Physical pin 73: UART3-RXD; bidirectional. */
  "UART3-RXD": "73",
  /** Physical pin 74: UART1-RTS; bidirectional. */
  "UART1-RTS": "74",
  /** Physical pin 75: UART4-TXD; bidirectional. */
  "UART4-TXD": "75",
  /** Physical pin 76: UART3-CTS; bidirectional. */
  "UART3-CTS": "76",
  /** Physical pin 77: UART4-RXD; bidirectional. */
  "UART4-RXD": "77",
  /** Physical pin 78: UART2-RTS; bidirectional. */
  "UART2-RTS": "78",
  /** Physical pin 79: UART5-TXD; bidirectional. */
  "UART5-TXD": "79",
  /** Physical pin 80: UART3-RTS; bidirectional. */
  "UART3-RTS": "80",
  /** Physical pin 81: GND; passive. */
  "GND_81": "81",
  /** Physical pin 82: GND; passive. */
  "GND_82": "82",
  /** Physical pin 83: NC; no_connect. */
  "NC_83": "83",
  /** Physical pin 84: GND; passive. */
  "GND_84": "84",
  /** Physical pin 85: +3.3VOUT; power_out. */
  "+3.3VOUT_85": "85",
  /** Physical pin 86: NC; no_connect. */
  "NC_86": "86",
  /** Physical pin 87: +3.3VOUT; passive. */
  "+3.3VOUT_87": "87",
  /** Physical pin 88: +3.3VOUT; passive. */
  "+3.3VOUT_88": "88",
  /** Physical pin 89: +3.3VOUT; passive. */
  "+3.3VOUT_89": "89",
  /** Physical pin 90: +3.3VOUT; passive. */
  "+3.3VOUT_90": "90",
  /** Physical pin 91: +3.3VOUT; passive. */
  "+3.3VOUT_91": "91",
  /** Physical pin 92: +3.3VOUT; passive. */
  "+3.3VOUT_92": "92",
  /** Physical pin 93: +3.3VOUT; passive. */
  "+3.3VOUT_93": "93",
  /** Physical pin 94: NC; no_connect. */
  "NC_94": "94",
  /** Physical pin 95: NC; no_connect. */
  "NC_95": "95",
  /** Physical pin 96: +5VIN; power_in. */
  "+5VIN_96": "96",
  /** Physical pin 97: ENET1-RXD0; bidirectional. */
  "ENET1-RXD0": "97",
  /** Physical pin 98: +5VIN; passive. */
  "+5VIN_98": "98",
  /** Physical pin 99: ENET1-RXD1; bidirectional. */
  "ENET1-RXD1": "99",
  /** Physical pin 100: +5VIN; passive. */
  "+5VIN_100": "100",
  /** Physical pin 101: ENET1-CRS-DV; bidirectional. */
  "ENET1-CRS-DV": "101",
  /** Physical pin 102: +5VIN; passive. */
  "+5VIN_102": "102",
  /** Physical pin 103: GND; passive. */
  "GND_103": "103",
  /** Physical pin 104: +5VIN; passive. */
  "+5VIN_104": "104",
  /** Physical pin 105: ENET2-TX-CLK; bidirectional. */
  "ENET2-TX-CLK": "105",
  /** Physical pin 106: +5VIN; passive. */
  "+5VIN_106": "106",
  /** Physical pin 107: GND; passive. */
  "GND_107": "107",
  /** Physical pin 108: +5VIN; passive. */
  "+5VIN_108": "108",
  /** Physical pin 109: ENET2-RXER; bidirectional. */
  "ENET2-RXER": "109",
  /** Physical pin 110: +5VIN; passive. */
  "+5VIN_110": "110",
  /** Physical pin 111: ENET2-RXD0; bidirectional. */
  "ENET2-RXD0": "111",
  /** Physical pin 112: +5VIN; passive. */
  "+5VIN_112": "112",
  /** Physical pin 113: ENET2-RXD1; bidirectional. */
  "ENET2-RXD1": "113",
  /** Physical pin 114: ENET1-TXEN; bidirectional. */
  "ENET1-TXEN": "114",
  /** Physical pin 115: GND; passive. */
  "GND_115": "115",
  /** Physical pin 116: GND; passive. */
  "GND_116": "116",
  /** Physical pin 117: ENET2-CRS-DV; bidirectional. */
  "ENET2-CRS-DV": "117",
  /** Physical pin 118: ENET1-TX-CLK; bidirectional. */
  "ENET1-TX-CLK": "118",
  /** Physical pin 119: ENET2-TXD1; bidirectional. */
  "ENET2-TXD1": "119",
  /** Physical pin 120: GND; passive. */
  "GND_120": "120",
  /** Physical pin 121: ENET2-TXEN; bidirectional. */
  "ENET2-TXEN": "121",
  /** Physical pin 122: ENET1-TXD0; bidirectional. */
  "ENET1-TXD0": "122",
  /** Physical pin 123: ENET2-TXD0; bidirectional. */
  "ENET2-TXD0": "123",
  /** Physical pin 124: ENET1-TXD1; bidirectional. */
  "ENET1-TXD1": "124",
  /** Physical pin 125: GND; passive. */
  "GND_125": "125",
  /** Physical pin 126: ENET1-RXER; bidirectional. */
  "ENET1-RXER": "126",
  /** Physical pin 127: GND; passive. */
  "GND_127": "127",
  /** Physical pin 128: GND; passive. */
  "GND_128": "128",
  /** Physical pin 129: LCD-DATA21; bidirectional. */
  "LCD-DATA21": "129",
  /** Physical pin 130: GND; passive. */
  "GND_130": "130",
  /** Physical pin 131: LCD-DATA22; bidirectional. */
  "LCD-DATA22": "131",
  /** Physical pin 132: GND; passive. */
  "GND_132": "132",
  /** Physical pin 133: LCD-DATA17; bidirectional. */
  "LCD-DATA17": "133",
  /** Physical pin 134: LCD-DATA23; bidirectional. */
  "LCD-DATA23": "134",
  /** Physical pin 135: GND; passive. */
  "GND_135": "135",
  /** Physical pin 136: GND; passive. */
  "GND_136": "136",
  /** Physical pin 137: LCD-DATA18; bidirectional. */
  "LCD-DATA18": "137",
  /** Physical pin 138: LCD-DATA19; bidirectional. */
  "LCD-DATA19": "138",
  /** Physical pin 139: LCD-DATA13; bidirectional. */
  "LCD-DATA13": "139",
  /** Physical pin 140: LCD-DATA20; bidirectional. */
  "LCD-DATA20": "140",
  /** Physical pin 141: LCD-DATA14; bidirectional. */
  "LCD-DATA14": "141",
  /** Physical pin 142: LCD-DATA15; bidirectional. */
  "LCD-DATA15": "142",
  /** Physical pin 143: LCD-DATA8; bidirectional. */
  "LCD-DATA8": "143",
  /** Physical pin 144: LCD-DATA16; bidirectional. */
  "LCD-DATA16": "144",
  /** Physical pin 145: LCD-DATA9; bidirectional. */
  "LCD-DATA9": "145",
  /** Physical pin 146: GND; passive. */
  "GND_146": "146",
  /** Physical pin 147: GND; passive. */
  "GND_147": "147",
  /** Physical pin 148: LCD-DATA11; bidirectional. */
  "LCD-DATA11": "148",
  /** Physical pin 149: LCD-DATA5; bidirectional. */
  "LCD-DATA5": "149",
  /** Physical pin 150: LCD-DATA12; bidirectional. */
  "LCD-DATA12": "150",
  /** Physical pin 151: LCD-DATA6; bidirectional. */
  "LCD-DATA6": "151",
  /** Physical pin 152: LCD-DATA10; bidirectional. */
  "LCD-DATA10": "152",
  /** Physical pin 153: LCD-DATA0; bidirectional. */
  "LCD-DATA0": "153",
  /** Physical pin 154: LCD-DATA3; bidirectional. */
  "LCD-DATA3": "154",
  /** Physical pin 155: LCD-DATA1; bidirectional. */
  "LCD-DATA1": "155",
  /** Physical pin 156: GND; passive. */
  "GND_156": "156",
  /** Physical pin 157: LCD-RESET; bidirectional. */
  "LCD-RESET": "157",
  /** Physical pin 158: LCD-DATA4; bidirectional. */
  "LCD-DATA4": "158",
  /** Physical pin 159: GND; passive. */
  "GND_159": "159",
  /** Physical pin 160: LCD-HSYNC; bidirectional. */
  "LCD-HSYNC": "160",
  /** Physical pin 161: LCD-CLK; bidirectional. */
  "LCD-CLK": "161",
  /** Physical pin 162: LCD-VSYNC; bidirectional. */
  "LCD-VSYNC": "162",
  /** Physical pin 163: LCD-ENABLE; bidirectional. */
  "LCD-ENABLE": "163",
  /** Physical pin 164: LCD-DATA2; bidirectional. */
  "LCD-DATA2": "164",
  /** Physical pin 165: GND; passive. */
  "GND_165": "165",
  /** Physical pin 166: LCD-DATA7; bidirectional. */
  "LCD-DATA7": "166",
  /** Physical pin 167: SDIO1-D0; bidirectional. */
  "SDIO1-D0": "167",
  /** Physical pin 168: GND; passive. */
  "GND_168": "168",
  /** Physical pin 169: SDIO1-D3; bidirectional. */
  "SDIO1-D3": "169",
  /** Physical pin 170: GND; passive. */
  "GND_170": "170",
  /** Physical pin 171: SDIO1-D1; bidirectional. */
  "SDIO1-D1": "171",
  /** Physical pin 172: GND; passive. */
  "GND_172": "172",
  /** Physical pin 173: SDIO1-CMD; bidirectional. */
  "SDIO1-CMD": "173",
  /** Physical pin 174: GND; passive. */
  "GND_174": "174",
  /** Physical pin 175: SDIO1-D2; bidirectional. */
  "SDIO1-D2": "175",
  /** Physical pin 176: GND; passive. */
  "GND_176": "176",
  /** Physical pin 177: GND; passive. */
  "GND_177": "177",
  /** Physical pin 178: GND; passive. */
  "GND_178": "178",
  /** Physical pin 179: SDIO1-CLK; bidirectional. */
  "SDIO1-CLK": "179",
  /** Physical pin 180: GND; passive. */
  "GND_180": "180",
  /** Physical pin 181: GND; passive. */
  "GND_181": "181",
  /** Physical pin 182: GND; passive. */
  "GND_182": "182",
  /** Physical pin 183: CSI-PIXCLK; bidirectional. */
  "CSI-PIXCLK": "183",
  /** Physical pin 184: GND; passive. */
  "GND_184": "184",
  /** Physical pin 185: GND; passive. */
  "GND_185": "185",
  /** Physical pin 186: CSI-DATA6; bidirectional. */
  "CSI-DATA6": "186",
  /** Physical pin 187: CSI-MCLK; bidirectional. */
  "CSI-MCLK": "187",
  /** Physical pin 188: CSI-DATA7; bidirectional. */
  "CSI-DATA7": "188",
  /** Physical pin 189: GND; passive. */
  "GND_189": "189",
  /** Physical pin 190: CSI-DATA5; bidirectional. */
  "CSI-DATA5": "190",
  /** Physical pin 191: CSI-DATA4; bidirectional. */
  "CSI-DATA4": "191",
  /** Physical pin 192: CSI-DATA3; bidirectional. */
  "CSI-DATA3": "192",
  /** Physical pin 193: CSI-DATA1; bidirectional. */
  "CSI-DATA1": "193",
  /** Physical pin 194: CSI-DATA2; bidirectional. */
  "CSI-DATA2": "194",
  /** Physical pin 195: CSI-DATA0; bidirectional. */
  "CSI-DATA0": "195",
  /** Physical pin 196: CSI-VREF; passive. */
  "CSI-VREF": "196",
  /** Physical pin 197: CSI-HSYNC; bidirectional. */
  "CSI-HSYNC": "197",
  /** Physical pin 198: CSI-VSYNC; bidirectional. */
  "CSI-VSYNC": "198",
  /** Physical pin 199: GND; passive. */
  "GND_199": "199",
  /** Physical pin 200: GND; passive. */
  "GND_200": "200",
}) {
  override schema = "MCU_Module:VisionSOM-6UL";
  override referencePrefix = "U";
}

/**
 * i.MX6-ULL NXP ARM Cortex-A7 900MHz single core industrial SoM computer
 *
 * KiCad symbol: `MCU_Module:VisionSOM-6ULL`. Reference prefix: `U`.
 * Footprint filters: *SODIMM*.
 * @see https://wiki.somlabs.com/extensions/JZPDFGen/pdf/VisionSOM-6ULL%20Datasheet%20and%20Pinout-21.pdf
 * Keywords: somlabs module.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class VisionSOM_6ULL extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: PMIC-STBY-REQ; output. */
  "PMIC-STBY-REQ": "3",
  /** Physical pin 4: ~{MX6-POR-B}; input. */
  "~{MX6-POR-B}": "4",
  /** Physical pin 5: PMIC-ON-REQ; output. */
  "PMIC-ON-REQ": "5",
  /** Physical pin 6: VDD-SNVS-3V3; power_in. */
  "VDD-SNVS-3V3": "6",
  /** Physical pin 7: BOOT-MODE1; input. */
  "BOOT-MODE1": "7",
  /** Physical pin 8: VDD-COIN-3V; power_in. */
  "VDD-COIN-3V": "8",
  /** Physical pin 9: BOOT-MODE0; input. */
  "BOOT-MODE0": "9",
  /** Physical pin 10: SNVS-TAMPER9; bidirectional. */
  "SNVS-TAMPER9": "10",
  /** Physical pin 11: USB-OTG2-VBUS; input. */
  "USB-OTG2-VBUS": "11",
  /** Physical pin 12: SNVS-TAMPER5; bidirectional. */
  "SNVS-TAMPER5": "12",
  /** Physical pin 13: USB-OTG1-VBUS; input. */
  "USB-OTG1-VBUS": "13",
  /** Physical pin 14: ONOFF; input. */
  "ONOFF": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: ~{POR-B}; input. */
  "~{POR-B}": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: SNVS-TAMPER8; bidirectional. */
  "SNVS-TAMPER8": "18",
  /** Physical pin 19: USB-OTG2-DP; bidirectional. */
  "USB-OTG2-DP": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: USB-OTG2-DN; bidirectional. */
  "USB-OTG2-DN": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: SNVS-TAMPER7; bidirectional. */
  "SNVS-TAMPER7": "24",
  /** Physical pin 25: USB-OTG1-DP; bidirectional. */
  "USB-OTG1-DP": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 27: USB-OTG1-DN; bidirectional. */
  "USB-OTG1-DN": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: SNVS-TAMPER4; bidirectional. */
  "SNVS-TAMPER4": "30",
  /** Physical pin 31: ~{USB-OTG1-CHD}; open_collector. */
  "~{USB-OTG1-CHD}": "31",
  /** Physical pin 32: SNVS-TAMPER1; bidirectional. */
  "SNVS-TAMPER1": "32",
  /** Physical pin 33: JTAG-MOD; bidirectional. */
  "JTAG-MOD": "33",
  /** Physical pin 34: SNVS-TAMPER3; bidirectional. */
  "SNVS-TAMPER3": "34",
  /** Physical pin 35: GND; passive. */
  "GND_35": "35",
  /** Physical pin 36: SNVS-TAMPER0; bidirectional. */
  "SNVS-TAMPER0": "36",
  /** Physical pin 37: CLK1-N; bidirectional. */
  "CLK1-N": "37",
  /** Physical pin 38: GND; passive. */
  "GND_38": "38",
  /** Physical pin 39: CLK1-P; bidirectional. */
  "CLK1-P": "39",
  /** Physical pin 40: GND; passive. */
  "GND_40": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
  /** Physical pin 42: SNVS-TAMPER6; bidirectional. */
  "SNVS-TAMPER6": "42",
  /** Physical pin 43: JTAG-TDI; bidirectional. */
  "JTAG-TDI": "43",
  /** Physical pin 44: SNVS-TAMPER2; bidirectional. */
  "SNVS-TAMPER2": "44",
  /** Physical pin 45: GPIO-8; bidirectional. */
  "GPIO-8": "45",
  /** Physical pin 46: JTAG-TMS; bidirectional. */
  "JTAG-TMS": "46",
  /** Physical pin 47: GPIO-4; bidirectional. */
  "GPIO-4": "47",
  /** Physical pin 48: ~{JTAG-TRST}; bidirectional. */
  "~{JTAG-TRST}": "48",
  /** Physical pin 49: GPIO-5; bidirectional. */
  "GPIO-5": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: GND; passive. */
  "GND_51": "51",
  /** Physical pin 52: JTAG-TDO; bidirectional. */
  "JTAG-TDO": "52",
  /** Physical pin 53: GPIO-7; bidirectional. */
  "GPIO-7": "53",
  /** Physical pin 54: JTAG-TCK; bidirectional. */
  "JTAG-TCK": "54",
  /** Physical pin 55: GPIO-3; bidirectional. */
  "GPIO-3": "55",
  /** Physical pin 56: GPIO-9; bidirectional. */
  "GPIO-9": "56",
  /** Physical pin 57: UART1-TXD; bidirectional. */
  "UART1-TXD": "57",
  /** Physical pin 58: GPIO-2; bidirectional. */
  "GPIO-2": "58",
  /** Physical pin 59: GND; passive. */
  "GND_59": "59",
  /** Physical pin 60: GND; passive. */
  "GND_60": "60",
  /** Physical pin 61: GPIO-6; bidirectional. */
  "GPIO-6": "61",
  /** Physical pin 62: GPIO-1; bidirectional. */
  "GPIO-1": "62",
  /** Physical pin 63: UART1-RXD; bidirectional. */
  "UART1-RXD": "63",
  /** Physical pin 64: GPIO-0; bidirectional. */
  "GPIO-0": "64",
  /** Physical pin 65: UART2-TXD; bidirectional. */
  "UART2-TXD": "65",
  /** Physical pin 66: UART1-CTS; bidirectional. */
  "UART1-CTS": "66",
  /** Physical pin 67: UART2-RXD; bidirectional. */
  "UART2-RXD": "67",
  /** Physical pin 68: UART5-RXD; bidirectional. */
  "UART5-RXD": "68",
  /** Physical pin 69: UART3-TXD; bidirectional. */
  "UART3-TXD": "69",
  /** Physical pin 70: GND; passive. */
  "GND_70": "70",
  /** Physical pin 71: GND; passive. */
  "GND_71": "71",
  /** Physical pin 72: UART2-CTS; bidirectional. */
  "UART2-CTS": "72",
  /** Physical pin 73: UART3-RXD; bidirectional. */
  "UART3-RXD": "73",
  /** Physical pin 74: UART1-RTS; bidirectional. */
  "UART1-RTS": "74",
  /** Physical pin 75: UART4-TXD; bidirectional. */
  "UART4-TXD": "75",
  /** Physical pin 76: UART3-CTS; bidirectional. */
  "UART3-CTS": "76",
  /** Physical pin 77: UART4-RXD; bidirectional. */
  "UART4-RXD": "77",
  /** Physical pin 78: UART2-RTS; bidirectional. */
  "UART2-RTS": "78",
  /** Physical pin 79: UART5-TXD; bidirectional. */
  "UART5-TXD": "79",
  /** Physical pin 80: UART3-RTS; bidirectional. */
  "UART3-RTS": "80",
  /** Physical pin 81: GND; passive. */
  "GND_81": "81",
  /** Physical pin 82: GND; passive. */
  "GND_82": "82",
  /** Physical pin 83: NC; no_connect. */
  "NC_83": "83",
  /** Physical pin 84: GND; passive. */
  "GND_84": "84",
  /** Physical pin 85: +3.3VOUT; power_out. */
  "+3.3VOUT_85": "85",
  /** Physical pin 86: NC; no_connect. */
  "NC_86": "86",
  /** Physical pin 87: +3.3VOUT; passive. */
  "+3.3VOUT_87": "87",
  /** Physical pin 88: +3.3VOUT; passive. */
  "+3.3VOUT_88": "88",
  /** Physical pin 89: +3.3VOUT; passive. */
  "+3.3VOUT_89": "89",
  /** Physical pin 90: +3.3VOUT; passive. */
  "+3.3VOUT_90": "90",
  /** Physical pin 91: +3.3VOUT; passive. */
  "+3.3VOUT_91": "91",
  /** Physical pin 92: +3.3VOUT; passive. */
  "+3.3VOUT_92": "92",
  /** Physical pin 93: +3.3VOUT; passive. */
  "+3.3VOUT_93": "93",
  /** Physical pin 94: NC; no_connect. */
  "NC_94": "94",
  /** Physical pin 95: NC; no_connect. */
  "NC_95": "95",
  /** Physical pin 96: +5VIN; power_in. */
  "+5VIN_96": "96",
  /** Physical pin 97: ENET1-RXD0; bidirectional. */
  "ENET1-RXD0": "97",
  /** Physical pin 98: +5VIN; passive. */
  "+5VIN_98": "98",
  /** Physical pin 99: ENET1-RXD1; bidirectional. */
  "ENET1-RXD1": "99",
  /** Physical pin 100: +5VIN; passive. */
  "+5VIN_100": "100",
  /** Physical pin 101: ENET1-CRS-DV; bidirectional. */
  "ENET1-CRS-DV": "101",
  /** Physical pin 102: +5VIN; passive. */
  "+5VIN_102": "102",
  /** Physical pin 103: GND; passive. */
  "GND_103": "103",
  /** Physical pin 104: +5VIN; passive. */
  "+5VIN_104": "104",
  /** Physical pin 105: ENET2-TX-CLK; bidirectional. */
  "ENET2-TX-CLK": "105",
  /** Physical pin 106: +5VIN; passive. */
  "+5VIN_106": "106",
  /** Physical pin 107: GND; passive. */
  "GND_107": "107",
  /** Physical pin 108: +5VIN; passive. */
  "+5VIN_108": "108",
  /** Physical pin 109: ENET2-RXER; bidirectional. */
  "ENET2-RXER": "109",
  /** Physical pin 110: +5VIN; passive. */
  "+5VIN_110": "110",
  /** Physical pin 111: ENET2-RXD0; bidirectional. */
  "ENET2-RXD0": "111",
  /** Physical pin 112: +5VIN; passive. */
  "+5VIN_112": "112",
  /** Physical pin 113: ENET2-RXD1; bidirectional. */
  "ENET2-RXD1": "113",
  /** Physical pin 114: ENET1-TXEN; bidirectional. */
  "ENET1-TXEN": "114",
  /** Physical pin 115: GND; passive. */
  "GND_115": "115",
  /** Physical pin 116: GND; passive. */
  "GND_116": "116",
  /** Physical pin 117: ENET2-CRS-DV; bidirectional. */
  "ENET2-CRS-DV": "117",
  /** Physical pin 118: ENET1-TX-CLK; bidirectional. */
  "ENET1-TX-CLK": "118",
  /** Physical pin 119: ENET2-TXD1; bidirectional. */
  "ENET2-TXD1": "119",
  /** Physical pin 120: GND; passive. */
  "GND_120": "120",
  /** Physical pin 121: ENET2-TXEN; bidirectional. */
  "ENET2-TXEN": "121",
  /** Physical pin 122: ENET1-TXD0; bidirectional. */
  "ENET1-TXD0": "122",
  /** Physical pin 123: ENET2-TXD0; bidirectional. */
  "ENET2-TXD0": "123",
  /** Physical pin 124: ENET1-TXD1; bidirectional. */
  "ENET1-TXD1": "124",
  /** Physical pin 125: GND; passive. */
  "GND_125": "125",
  /** Physical pin 126: ENET1-RXER; bidirectional. */
  "ENET1-RXER": "126",
  /** Physical pin 127: GND; passive. */
  "GND_127": "127",
  /** Physical pin 128: GND; passive. */
  "GND_128": "128",
  /** Physical pin 129: LCD-DATA21; bidirectional. */
  "LCD-DATA21": "129",
  /** Physical pin 130: GND; passive. */
  "GND_130": "130",
  /** Physical pin 131: LCD-DATA22; bidirectional. */
  "LCD-DATA22": "131",
  /** Physical pin 132: GND; passive. */
  "GND_132": "132",
  /** Physical pin 133: LCD-DATA17; bidirectional. */
  "LCD-DATA17": "133",
  /** Physical pin 134: LCD-DATA23; bidirectional. */
  "LCD-DATA23": "134",
  /** Physical pin 135: GND; passive. */
  "GND_135": "135",
  /** Physical pin 136: GND; passive. */
  "GND_136": "136",
  /** Physical pin 137: LCD-DATA18; bidirectional. */
  "LCD-DATA18": "137",
  /** Physical pin 138: LCD-DATA19; bidirectional. */
  "LCD-DATA19": "138",
  /** Physical pin 139: LCD-DATA13; bidirectional. */
  "LCD-DATA13": "139",
  /** Physical pin 140: LCD-DATA20; bidirectional. */
  "LCD-DATA20": "140",
  /** Physical pin 141: LCD-DATA14; bidirectional. */
  "LCD-DATA14": "141",
  /** Physical pin 142: LCD-DATA15; bidirectional. */
  "LCD-DATA15": "142",
  /** Physical pin 143: LCD-DATA8; bidirectional. */
  "LCD-DATA8": "143",
  /** Physical pin 144: LCD-DATA16; bidirectional. */
  "LCD-DATA16": "144",
  /** Physical pin 145: LCD-DATA9; bidirectional. */
  "LCD-DATA9": "145",
  /** Physical pin 146: GND; passive. */
  "GND_146": "146",
  /** Physical pin 147: GND; passive. */
  "GND_147": "147",
  /** Physical pin 148: LCD-DATA11; bidirectional. */
  "LCD-DATA11": "148",
  /** Physical pin 149: LCD-DATA5; bidirectional. */
  "LCD-DATA5": "149",
  /** Physical pin 150: LCD-DATA12; bidirectional. */
  "LCD-DATA12": "150",
  /** Physical pin 151: LCD-DATA6; bidirectional. */
  "LCD-DATA6": "151",
  /** Physical pin 152: LCD-DATA10; bidirectional. */
  "LCD-DATA10": "152",
  /** Physical pin 153: LCD-DATA0; bidirectional. */
  "LCD-DATA0": "153",
  /** Physical pin 154: LCD-DATA3; bidirectional. */
  "LCD-DATA3": "154",
  /** Physical pin 155: LCD-DATA1; bidirectional. */
  "LCD-DATA1": "155",
  /** Physical pin 156: GND; passive. */
  "GND_156": "156",
  /** Physical pin 157: LCD-RESET; bidirectional. */
  "LCD-RESET": "157",
  /** Physical pin 158: LCD-DATA4; bidirectional. */
  "LCD-DATA4": "158",
  /** Physical pin 159: GND; passive. */
  "GND_159": "159",
  /** Physical pin 160: LCD-HSYNC; bidirectional. */
  "LCD-HSYNC": "160",
  /** Physical pin 161: LCD-CLK; bidirectional. */
  "LCD-CLK": "161",
  /** Physical pin 162: LCD-VSYNC; bidirectional. */
  "LCD-VSYNC": "162",
  /** Physical pin 163: LCD-ENABLE; bidirectional. */
  "LCD-ENABLE": "163",
  /** Physical pin 164: LCD-DATA2; bidirectional. */
  "LCD-DATA2": "164",
  /** Physical pin 165: GND; passive. */
  "GND_165": "165",
  /** Physical pin 166: LCD-DATA7; bidirectional. */
  "LCD-DATA7": "166",
  /** Physical pin 167: SDIO1-D0; bidirectional. */
  "SDIO1-D0": "167",
  /** Physical pin 168: GND; passive. */
  "GND_168": "168",
  /** Physical pin 169: SDIO1-D3; bidirectional. */
  "SDIO1-D3": "169",
  /** Physical pin 170: GND; passive. */
  "GND_170": "170",
  /** Physical pin 171: SDIO1-D1; bidirectional. */
  "SDIO1-D1": "171",
  /** Physical pin 172: GND; passive. */
  "GND_172": "172",
  /** Physical pin 173: SDIO1-CMD; bidirectional. */
  "SDIO1-CMD": "173",
  /** Physical pin 174: GND; passive. */
  "GND_174": "174",
  /** Physical pin 175: SDIO1-D2; bidirectional. */
  "SDIO1-D2": "175",
  /** Physical pin 176: GND; passive. */
  "GND_176": "176",
  /** Physical pin 177: GND; passive. */
  "GND_177": "177",
  /** Physical pin 178: GND; passive. */
  "GND_178": "178",
  /** Physical pin 179: SDIO1-CLK; bidirectional. */
  "SDIO1-CLK": "179",
  /** Physical pin 180: GND; passive. */
  "GND_180": "180",
  /** Physical pin 181: GND; passive. */
  "GND_181": "181",
  /** Physical pin 182: GND; passive. */
  "GND_182": "182",
  /** Physical pin 183: CSI-PIXCLK; bidirectional. */
  "CSI-PIXCLK": "183",
  /** Physical pin 184: GND; passive. */
  "GND_184": "184",
  /** Physical pin 185: GND; passive. */
  "GND_185": "185",
  /** Physical pin 186: CSI-DATA6; bidirectional. */
  "CSI-DATA6": "186",
  /** Physical pin 187: CSI-MCLK; bidirectional. */
  "CSI-MCLK": "187",
  /** Physical pin 188: CSI-DATA7; bidirectional. */
  "CSI-DATA7": "188",
  /** Physical pin 189: GND; passive. */
  "GND_189": "189",
  /** Physical pin 190: CSI-DATA5; bidirectional. */
  "CSI-DATA5": "190",
  /** Physical pin 191: CSI-DATA4; bidirectional. */
  "CSI-DATA4": "191",
  /** Physical pin 192: CSI-DATA3; bidirectional. */
  "CSI-DATA3": "192",
  /** Physical pin 193: CSI-DATA1; bidirectional. */
  "CSI-DATA1": "193",
  /** Physical pin 194: CSI-DATA2; bidirectional. */
  "CSI-DATA2": "194",
  /** Physical pin 195: CSI-DATA0; bidirectional. */
  "CSI-DATA0": "195",
  /** Physical pin 196: CSI-VREF; passive. */
  "CSI-VREF": "196",
  /** Physical pin 197: CSI-HSYNC; bidirectional. */
  "CSI-HSYNC": "197",
  /** Physical pin 198: CSI-VSYNC; bidirectional. */
  "CSI-VSYNC": "198",
  /** Physical pin 199: GND; passive. */
  "GND_199": "199",
  /** Physical pin 200: GND; passive. */
  "GND_200": "200",
}) {
  override schema = "MCU_Module:VisionSOM-6ULL";
  override referencePrefix = "U";
}

/**
 * i.MX-RT NXP ARM Cortex-M7 528MHz single core industrial SoM computer
 *
 * KiCad symbol: `MCU_Module:VisionSOM-RT`. Reference prefix: `U`.
 * Footprint filters: *SODIMM*.
 * @see https://wiki.somlabs.com/index.php/VisionSOM-RT_Datasheet_and_Pinout
 * Keywords: somlabs module.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class VisionSOM_RT extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: PMIC-STBY-REQ; output. */
  "PMIC-STBY-REQ": "3",
  /** Physical pin 4: ~{MX6-POR-B}; input. */
  "~{MX6-POR-B}": "4",
  /** Physical pin 5: PMIC-ON-REQ; output. */
  "PMIC-ON-REQ": "5",
  /** Physical pin 6: VDD-SNVS-3V3; power_in. */
  "VDD-SNVS-3V3": "6",
  /** Physical pin 7: BOOT-MODE1; input. */
  "BOOT-MODE1": "7",
  /** Physical pin 8: VDD-COIN-3V; power_in. */
  "VDD-COIN-3V": "8",
  /** Physical pin 9: BOOT-MODE0; input. */
  "BOOT-MODE0": "9",
  /** Physical pin 10: SNVS-TAMPER9; bidirectional. */
  "SNVS-TAMPER9": "10",
  /** Physical pin 11: USB-OTG2-VBUS; input. */
  "USB-OTG2-VBUS": "11",
  /** Physical pin 12: SNVS-TAMPER5; bidirectional. */
  "SNVS-TAMPER5": "12",
  /** Physical pin 13: USB-OTG1-VBUS; input. */
  "USB-OTG1-VBUS": "13",
  /** Physical pin 14: ONOFF; input. */
  "ONOFF": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: ~{POR-B}; input. */
  "~{POR-B}": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: SNVS-TAMPER8; bidirectional. */
  "SNVS-TAMPER8": "18",
  /** Physical pin 19: USB-OTG2-DP; bidirectional. */
  "USB-OTG2-DP": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: USB-OTG2-DN; bidirectional. */
  "USB-OTG2-DN": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: SNVS-TAMPER7; bidirectional. */
  "SNVS-TAMPER7": "24",
  /** Physical pin 25: USB-OTG1-DP; bidirectional. */
  "USB-OTG1-DP": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 27: USB-OTG1-DN; bidirectional. */
  "USB-OTG1-DN": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: SNVS-TAMPER4; bidirectional. */
  "SNVS-TAMPER4": "30",
  /** Physical pin 31: ~{USB-OTG1-CHD}; open_collector. */
  "~{USB-OTG1-CHD}": "31",
  /** Physical pin 32: SNVS-TAMPER1; bidirectional. */
  "SNVS-TAMPER1": "32",
  /** Physical pin 33: JTAG-MOD; bidirectional. */
  "JTAG-MOD": "33",
  /** Physical pin 34: SNVS-TAMPER3; bidirectional. */
  "SNVS-TAMPER3": "34",
  /** Physical pin 35: GND; passive. */
  "GND_35": "35",
  /** Physical pin 36: SNVS-TAMPER0; bidirectional. */
  "SNVS-TAMPER0": "36",
  /** Physical pin 37: CLK1-N; bidirectional. */
  "CLK1-N": "37",
  /** Physical pin 38: GND; passive. */
  "GND_38": "38",
  /** Physical pin 39: CLK1-P; bidirectional. */
  "CLK1-P": "39",
  /** Physical pin 40: GND; passive. */
  "GND_40": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
  /** Physical pin 42: SNVS-TAMPER6; bidirectional. */
  "SNVS-TAMPER6": "42",
  /** Physical pin 43: JTAG-TDI; bidirectional. */
  "JTAG-TDI": "43",
  /** Physical pin 44: SNVS-TAMPER2; bidirectional. */
  "SNVS-TAMPER2": "44",
  /** Physical pin 45: GPIO-8; bidirectional. */
  "GPIO-8": "45",
  /** Physical pin 46: JTAG-TMS; bidirectional. */
  "JTAG-TMS": "46",
  /** Physical pin 47: GPIO-4; bidirectional. */
  "GPIO-4": "47",
  /** Physical pin 48: ~{JTAG-TRST}; bidirectional. */
  "~{JTAG-TRST}": "48",
  /** Physical pin 49: GPIO-5; bidirectional. */
  "GPIO-5": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: GND; passive. */
  "GND_51": "51",
  /** Physical pin 52: JTAG-TDO; bidirectional. */
  "JTAG-TDO": "52",
  /** Physical pin 53: GPIO-7; bidirectional. */
  "GPIO-7": "53",
  /** Physical pin 54: JTAG-TCK; bidirectional. */
  "JTAG-TCK": "54",
  /** Physical pin 55: GPIO-3; bidirectional. */
  "GPIO-3": "55",
  /** Physical pin 56: GPIO-9; bidirectional. */
  "GPIO-9": "56",
  /** Physical pin 57: UART1-TXD; bidirectional. */
  "UART1-TXD": "57",
  /** Physical pin 58: GPIO-2; bidirectional. */
  "GPIO-2": "58",
  /** Physical pin 59: GND; passive. */
  "GND_59": "59",
  /** Physical pin 60: GND; passive. */
  "GND_60": "60",
  /** Physical pin 61: GPIO-6; bidirectional. */
  "GPIO-6": "61",
  /** Physical pin 62: GPIO-1; bidirectional. */
  "GPIO-1": "62",
  /** Physical pin 63: UART1-RXD; bidirectional. */
  "UART1-RXD": "63",
  /** Physical pin 64: GPIO-0; bidirectional. */
  "GPIO-0": "64",
  /** Physical pin 65: UART2-TXD; bidirectional. */
  "UART2-TXD": "65",
  /** Physical pin 66: UART1-CTS; bidirectional. */
  "UART1-CTS": "66",
  /** Physical pin 67: UART2-RXD; bidirectional. */
  "UART2-RXD": "67",
  /** Physical pin 68: UART5-RXD; bidirectional. */
  "UART5-RXD": "68",
  /** Physical pin 69: UART3-TXD; bidirectional. */
  "UART3-TXD": "69",
  /** Physical pin 70: GND; passive. */
  "GND_70": "70",
  /** Physical pin 71: GND; passive. */
  "GND_71": "71",
  /** Physical pin 72: UART2-CTS; bidirectional. */
  "UART2-CTS": "72",
  /** Physical pin 73: UART3-RXD; bidirectional. */
  "UART3-RXD": "73",
  /** Physical pin 74: UART1-RTS; bidirectional. */
  "UART1-RTS": "74",
  /** Physical pin 75: UART4-TXD; bidirectional. */
  "UART4-TXD": "75",
  /** Physical pin 76: UART3-CTS; bidirectional. */
  "UART3-CTS": "76",
  /** Physical pin 77: UART4-RXD; bidirectional. */
  "UART4-RXD": "77",
  /** Physical pin 78: UART2-RTS; bidirectional. */
  "UART2-RTS": "78",
  /** Physical pin 79: UART5-TXD; bidirectional. */
  "UART5-TXD": "79",
  /** Physical pin 80: UART3-RTS; bidirectional. */
  "UART3-RTS": "80",
  /** Physical pin 81: GND; passive. */
  "GND_81": "81",
  /** Physical pin 82: GND; passive. */
  "GND_82": "82",
  /** Physical pin 83: NC; no_connect. */
  "NC_83": "83",
  /** Physical pin 84: GND; passive. */
  "GND_84": "84",
  /** Physical pin 85: +3.3VOUT; power_out. */
  "+3.3VOUT_85": "85",
  /** Physical pin 86: NC; no_connect. */
  "NC_86": "86",
  /** Physical pin 87: +3.3VOUT; passive. */
  "+3.3VOUT_87": "87",
  /** Physical pin 88: +3.3VOUT; passive. */
  "+3.3VOUT_88": "88",
  /** Physical pin 89: +3.3VOUT; passive. */
  "+3.3VOUT_89": "89",
  /** Physical pin 90: +3.3VOUT; passive. */
  "+3.3VOUT_90": "90",
  /** Physical pin 91: +3.3VOUT; passive. */
  "+3.3VOUT_91": "91",
  /** Physical pin 92: +3.3VOUT; passive. */
  "+3.3VOUT_92": "92",
  /** Physical pin 93: +3.3VOUT; passive. */
  "+3.3VOUT_93": "93",
  /** Physical pin 94: NC; no_connect. */
  "NC_94": "94",
  /** Physical pin 95: NC; no_connect. */
  "NC_95": "95",
  /** Physical pin 96: +5VIN; power_in. */
  "+5VIN_96": "96",
  /** Physical pin 97: ENET1-RXD0; bidirectional. */
  "ENET1-RXD0": "97",
  /** Physical pin 98: +5VIN; passive. */
  "+5VIN_98": "98",
  /** Physical pin 99: ENET1-RXD1; bidirectional. */
  "ENET1-RXD1": "99",
  /** Physical pin 100: +5VIN; passive. */
  "+5VIN_100": "100",
  /** Physical pin 101: ENET1-CRS-DV; bidirectional. */
  "ENET1-CRS-DV": "101",
  /** Physical pin 102: +5VIN; passive. */
  "+5VIN_102": "102",
  /** Physical pin 103: GND; passive. */
  "GND_103": "103",
  /** Physical pin 104: +5VIN; passive. */
  "+5VIN_104": "104",
  /** Physical pin 105: ENET2-TX-CLK; bidirectional. */
  "ENET2-TX-CLK": "105",
  /** Physical pin 106: +5VIN; passive. */
  "+5VIN_106": "106",
  /** Physical pin 107: GND; passive. */
  "GND_107": "107",
  /** Physical pin 108: +5VIN; passive. */
  "+5VIN_108": "108",
  /** Physical pin 109: ENET2-RXER; bidirectional. */
  "ENET2-RXER": "109",
  /** Physical pin 110: +5VIN; passive. */
  "+5VIN_110": "110",
  /** Physical pin 111: ENET2-RXD0; bidirectional. */
  "ENET2-RXD0": "111",
  /** Physical pin 112: +5VIN; passive. */
  "+5VIN_112": "112",
  /** Physical pin 113: ENET2-RXD1; bidirectional. */
  "ENET2-RXD1": "113",
  /** Physical pin 114: ENET1-TXEN; bidirectional. */
  "ENET1-TXEN": "114",
  /** Physical pin 115: GND; passive. */
  "GND_115": "115",
  /** Physical pin 116: GND; passive. */
  "GND_116": "116",
  /** Physical pin 117: ENET2-CRS-DV; bidirectional. */
  "ENET2-CRS-DV": "117",
  /** Physical pin 118: ENET1-TX-CLK; bidirectional. */
  "ENET1-TX-CLK": "118",
  /** Physical pin 119: ENET2-TXD1; bidirectional. */
  "ENET2-TXD1": "119",
  /** Physical pin 120: GND; passive. */
  "GND_120": "120",
  /** Physical pin 121: ENET2-TXEN; bidirectional. */
  "ENET2-TXEN": "121",
  /** Physical pin 122: ENET1-TXD0; bidirectional. */
  "ENET1-TXD0": "122",
  /** Physical pin 123: ENET2-TXD0; bidirectional. */
  "ENET2-TXD0": "123",
  /** Physical pin 124: ENET1-TXD1; bidirectional. */
  "ENET1-TXD1": "124",
  /** Physical pin 125: GND; passive. */
  "GND_125": "125",
  /** Physical pin 126: ENET1-RXER; bidirectional. */
  "ENET1-RXER": "126",
  /** Physical pin 127: GND; passive. */
  "GND_127": "127",
  /** Physical pin 128: GND; passive. */
  "GND_128": "128",
  /** Physical pin 129: LCD-DATA21; bidirectional. */
  "LCD-DATA21": "129",
  /** Physical pin 130: GND; passive. */
  "GND_130": "130",
  /** Physical pin 131: LCD-DATA22; bidirectional. */
  "LCD-DATA22": "131",
  /** Physical pin 132: GND; passive. */
  "GND_132": "132",
  /** Physical pin 133: LCD-DATA17; bidirectional. */
  "LCD-DATA17": "133",
  /** Physical pin 134: LCD-DATA23; bidirectional. */
  "LCD-DATA23": "134",
  /** Physical pin 135: GND; passive. */
  "GND_135": "135",
  /** Physical pin 136: GND; passive. */
  "GND_136": "136",
  /** Physical pin 137: LCD-DATA18; bidirectional. */
  "LCD-DATA18": "137",
  /** Physical pin 138: LCD-DATA19; bidirectional. */
  "LCD-DATA19": "138",
  /** Physical pin 139: LCD-DATA13; bidirectional. */
  "LCD-DATA13": "139",
  /** Physical pin 140: LCD-DATA20; bidirectional. */
  "LCD-DATA20": "140",
  /** Physical pin 141: LCD-DATA14; bidirectional. */
  "LCD-DATA14": "141",
  /** Physical pin 142: LCD-DATA15; bidirectional. */
  "LCD-DATA15": "142",
  /** Physical pin 143: LCD-DATA8; bidirectional. */
  "LCD-DATA8": "143",
  /** Physical pin 144: LCD-DATA16; bidirectional. */
  "LCD-DATA16": "144",
  /** Physical pin 145: LCD-DATA9; bidirectional. */
  "LCD-DATA9": "145",
  /** Physical pin 146: GND; passive. */
  "GND_146": "146",
  /** Physical pin 147: GND; passive. */
  "GND_147": "147",
  /** Physical pin 148: LCD-DATA11; bidirectional. */
  "LCD-DATA11": "148",
  /** Physical pin 149: LCD-DATA5; bidirectional. */
  "LCD-DATA5": "149",
  /** Physical pin 150: LCD-DATA12; bidirectional. */
  "LCD-DATA12": "150",
  /** Physical pin 151: LCD-DATA6; bidirectional. */
  "LCD-DATA6": "151",
  /** Physical pin 152: LCD-DATA10; bidirectional. */
  "LCD-DATA10": "152",
  /** Physical pin 153: LCD-DATA0; bidirectional. */
  "LCD-DATA0": "153",
  /** Physical pin 154: LCD-DATA3; bidirectional. */
  "LCD-DATA3": "154",
  /** Physical pin 155: LCD-DATA1; bidirectional. */
  "LCD-DATA1": "155",
  /** Physical pin 156: GND; passive. */
  "GND_156": "156",
  /** Physical pin 157: LCD-RESET; bidirectional. */
  "LCD-RESET": "157",
  /** Physical pin 158: LCD-DATA4; bidirectional. */
  "LCD-DATA4": "158",
  /** Physical pin 159: GND; passive. */
  "GND_159": "159",
  /** Physical pin 160: LCD-HSYNC; bidirectional. */
  "LCD-HSYNC": "160",
  /** Physical pin 161: LCD-CLK; bidirectional. */
  "LCD-CLK": "161",
  /** Physical pin 162: LCD-VSYNC; bidirectional. */
  "LCD-VSYNC": "162",
  /** Physical pin 163: LCD-ENABLE; bidirectional. */
  "LCD-ENABLE": "163",
  /** Physical pin 164: LCD-DATA2; bidirectional. */
  "LCD-DATA2": "164",
  /** Physical pin 165: GND; passive. */
  "GND_165": "165",
  /** Physical pin 166: LCD-DATA7; bidirectional. */
  "LCD-DATA7": "166",
  /** Physical pin 167: SDIO1-D0; bidirectional. */
  "SDIO1-D0": "167",
  /** Physical pin 168: GND; passive. */
  "GND_168": "168",
  /** Physical pin 169: SDIO1-D3; bidirectional. */
  "SDIO1-D3": "169",
  /** Physical pin 170: GND; passive. */
  "GND_170": "170",
  /** Physical pin 171: SDIO1-D1; bidirectional. */
  "SDIO1-D1": "171",
  /** Physical pin 172: GND; passive. */
  "GND_172": "172",
  /** Physical pin 173: SDIO1-CMD; bidirectional. */
  "SDIO1-CMD": "173",
  /** Physical pin 174: GND; passive. */
  "GND_174": "174",
  /** Physical pin 175: SDIO1-D2; bidirectional. */
  "SDIO1-D2": "175",
  /** Physical pin 176: NC; no_connect. */
  "NC_176": "176",
  /** Physical pin 177: GND; passive. */
  "GND_177": "177",
  /** Physical pin 178: NC; no_connect. */
  "NC_178": "178",
  /** Physical pin 179: SDIO1-CLK; bidirectional. */
  "SDIO1-CLK": "179",
  /** Physical pin 180: NC; no_connect. */
  "NC_180": "180",
  /** Physical pin 181: GND; passive. */
  "GND_181": "181",
  /** Physical pin 182: NC; no_connect. */
  "NC_182": "182",
  /** Physical pin 183: NC; no_connect. */
  "NC_183": "183",
  /** Physical pin 184: GND; passive. */
  "GND_184": "184",
  /** Physical pin 185: GND; passive. */
  "GND_185": "185",
  /** Physical pin 186: NC; no_connect. */
  "NC_186": "186",
  /** Physical pin 187: NC; no_connect. */
  "NC_187": "187",
  /** Physical pin 188: NC; no_connect. */
  "NC_188": "188",
  /** Physical pin 189: GND; passive. */
  "GND_189": "189",
  /** Physical pin 190: NC; no_connect. */
  "NC_190": "190",
  /** Physical pin 191: NC; no_connect. */
  "NC_191": "191",
  /** Physical pin 192: NC; no_connect. */
  "NC_192": "192",
  /** Physical pin 193: NC; no_connect. */
  "NC_193": "193",
  /** Physical pin 194: NC; no_connect. */
  "NC_194": "194",
  /** Physical pin 195: NC; no_connect. */
  "NC_195": "195",
  /** Physical pin 196: NC; no_connect. */
  "NC_196": "196",
  /** Physical pin 197: NC; no_connect. */
  "NC_197": "197",
  /** Physical pin 198: NC; no_connect. */
  "NC_198": "198",
  /** Physical pin 199: GND; passive. */
  "GND_199": "199",
  /** Physical pin 200: GND; passive. */
  "GND_200": "200",
}) {
  override schema = "MCU_Module:VisionSOM-RT";
  override referencePrefix = "U";
}

/**
 * STM32MP1 STMicroelectronics ARM Cortex-A7 800MHz single/dual core + ARM Cortex-M4 209MHz single core industrial SoM computer
 *
 * KiCad symbol: `MCU_Module:VisionSOM-STM32MP1`. Reference prefix: `U`.
 * Footprint filters: *SODIMM*.
 * @see https://wiki.somlabs.com/index.php/VisionSOM-STM32MP1_Datasheet_and_Pinout
 * Keywords: somlabs module.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class VisionSOM_STM32MP1 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: PWR-LP; output. */
  "PWR-LP": "3",
  /** Physical pin 4: ~{STM32-NRST}; input. */
  "~{STM32-NRST}": "4",
  /** Physical pin 5: PWR-ON; output. */
  "PWR-ON": "5",
  /** Physical pin 6: VDD-3V3; power_in. */
  "VDD-3V3": "6",
  /** Physical pin 7: BOOT1; input. */
  "BOOT1": "7",
  /** Physical pin 8: VDD-COIN-3V; power_in. */
  "VDD-COIN-3V": "8",
  /** Physical pin 9: BOOT0; input. */
  "BOOT0": "9",
  /** Physical pin 10: BOOT2; input. */
  "BOOT2": "10",
  /** Physical pin 11: USB-OTG1-VBUS; input. */
  "USB-OTG1-VBUS": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: USB-OTG1-DP; bidirectional. */
  "USB-OTG1-DP": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: USB-OTG1-DN; bidirectional. */
  "USB-OTG1-DN": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
  /** Physical pin 23: GND; passive. */
  "GND_23": "23",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: USB-OTG2-DP; bidirectional. */
  "USB-OTG2-DP": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 27: USB-OTG2-DN; bidirectional. */
  "USB-OTG2-DN": "27",
  /** Physical pin 28: GND; passive. */
  "GND_28": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
  /** Physical pin 30: NC; no_connect. */
  "NC_30": "30",
  /** Physical pin 31: NC; no_connect. */
  "NC_31": "31",
  /** Physical pin 32: NC; no_connect. */
  "NC_32": "32",
  /** Physical pin 33: NC; no_connect. */
  "NC_33": "33",
  /** Physical pin 34: NC; no_connect. */
  "NC_34": "34",
  /** Physical pin 35: GND; passive. */
  "GND_35": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: NC; no_connect. */
  "NC_37": "37",
  /** Physical pin 38: GND; passive. */
  "GND_38": "38",
  /** Physical pin 39: NC; no_connect. */
  "NC_39": "39",
  /** Physical pin 40: GND; passive. */
  "GND_40": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
  /** Physical pin 42: NC; no_connect. */
  "NC_42": "42",
  /** Physical pin 43: JTAG-TDI; bidirectional. */
  "JTAG-TDI": "43",
  /** Physical pin 44: NC; no_connect. */
  "NC_44": "44",
  /** Physical pin 45: GPIO-PG10; bidirectional. */
  "GPIO-PG10": "45",
  /** Physical pin 46: JTAG-TMS; bidirectional. */
  "JTAG-TMS": "46",
  /** Physical pin 47: GPIO-PC3; bidirectional. */
  "GPIO-PC3": "47",
  /** Physical pin 48: ~{JTAG-RST}; bidirectional. */
  "~{JTAG-RST}": "48",
  /** Physical pin 49: GPIO-PD13; bidirectional. */
  "GPIO-PD13": "49",
  /** Physical pin 50: GND; passive. */
  "GND_50": "50",
  /** Physical pin 51: GND; passive. */
  "GND_51": "51",
  /** Physical pin 52: JTAG-TDO; bidirectional. */
  "JTAG-TDO": "52",
  /** Physical pin 53: ENET1-MDC; bidirectional. */
  "ENET1-MDC": "53",
  /** Physical pin 54: JTAG-TCK; bidirectional. */
  "JTAG-TCK": "54",
  /** Physical pin 55: GPIO-PC0; bidirectional. */
  "GPIO-PC0": "55",
  /** Physical pin 56: GPIO-PB7; bidirectional. */
  "GPIO-PB7": "56",
  /** Physical pin 57: UART8-TXD; bidirectional. */
  "UART8-TXD": "57",
  /** Physical pin 58: GPIO-PB1; bidirectional. */
  "GPIO-PB1": "58",
  /** Physical pin 59: GND; passive. */
  "GND_59": "59",
  /** Physical pin 60: GND; passive. */
  "GND_60": "60",
  /** Physical pin 61: ENET1-MDIO; bidirectional. */
  "ENET1-MDIO": "61",
  /** Physical pin 62: GPIO-PA0; bidirectional. */
  "GPIO-PA0": "62",
  /** Physical pin 63: UART8-RXD; bidirectional. */
  "UART8-RXD": "63",
  /** Physical pin 64: GPIO-PF10; bidirectional. */
  "GPIO-PF10": "64",
  /** Physical pin 65: USART3-TXD; bidirectional. */
  "USART3-TXD": "65",
  /** Physical pin 66: UART8-CTS; bidirectional. */
  "UART8-CTS": "66",
  /** Physical pin 67: USART3-RXD; bidirectional. */
  "USART3-RXD": "67",
  /** Physical pin 68: USART6-RXD; bidirectional. */
  "USART6-RXD": "68",
  /** Physical pin 69: USART1-RXD; bidirectional. */
  "USART1-RXD": "69",
  /** Physical pin 70: GND; passive. */
  "GND_70": "70",
  /** Physical pin 71: GND; passive. */
  "GND_71": "71",
  /** Physical pin 72: USART3-CTS; bidirectional. */
  "USART3-CTS": "72",
  /** Physical pin 73: USART1-TXD; bidirectional. */
  "USART1-TXD": "73",
  /** Physical pin 74: UART8-RTS; bidirectional. */
  "UART8-RTS": "74",
  /** Physical pin 75: UART4-TXD; bidirectional. */
  "UART4-TXD": "75",
  /** Physical pin 76: USART1-CTS; bidirectional. */
  "USART1-CTS": "76",
  /** Physical pin 77: UART4-RXD; bidirectional. */
  "UART4-RXD": "77",
  /** Physical pin 78: USART3-RTS; bidirectional. */
  "USART3-RTS": "78",
  /** Physical pin 79: USART6-TXD; bidirectional. */
  "USART6-TXD": "79",
  /** Physical pin 80: USART1-RTS; bidirectional. */
  "USART1-RTS": "80",
  /** Physical pin 81: GND; passive. */
  "GND_81": "81",
  /** Physical pin 82: GND; passive. */
  "GND_82": "82",
  /** Physical pin 83: NC; no_connect. */
  "NC_83": "83",
  /** Physical pin 84: GND; passive. */
  "GND_84": "84",
  /** Physical pin 85: VOUT-3V3; power_out. */
  "VOUT-3V3_85": "85",
  /** Physical pin 86: NC; no_connect. */
  "NC_86": "86",
  /** Physical pin 87: VOUT-3V3; passive. */
  "VOUT-3V3_87": "87",
  /** Physical pin 88: VOUT-3V3; passive. */
  "VOUT-3V3_88": "88",
  /** Physical pin 89: VOUT-3V3; passive. */
  "VOUT-3V3_89": "89",
  /** Physical pin 90: VOUT-3V3; passive. */
  "VOUT-3V3_90": "90",
  /** Physical pin 91: VOUT-3V3; passive. */
  "VOUT-3V3_91": "91",
  /** Physical pin 92: VOUT-3V3; passive. */
  "VOUT-3V3_92": "92",
  /** Physical pin 93: VOUT-3V3; passive. */
  "VOUT-3V3_93": "93",
  /** Physical pin 94: NC; no_connect. */
  "NC_94": "94",
  /** Physical pin 95: NC; no_connect. */
  "NC_95": "95",
  /** Physical pin 96: VDD-5V; power_in. */
  "VDD-5V_96": "96",
  /** Physical pin 97: ENET1-RXD0; bidirectional. */
  "ENET1-RXD0": "97",
  /** Physical pin 98: VDD-5V; passive. */
  "VDD-5V_98": "98",
  /** Physical pin 99: ENET1-RXD1; bidirectional. */
  "ENET1-RXD1": "99",
  /** Physical pin 100: VDD-5V; passive. */
  "VDD-5V_100": "100",
  /** Physical pin 101: ENET1-CRS-DV; bidirectional. */
  "ENET1-CRS-DV": "101",
  /** Physical pin 102: VDD-5V; passive. */
  "VDD-5V_102": "102",
  /** Physical pin 103: GND; passive. */
  "GND_103": "103",
  /** Physical pin 104: VDD-5V; passive. */
  "VDD-5V_104": "104",
  /** Physical pin 105: NC; no_connect. */
  "NC_105": "105",
  /** Physical pin 106: VDD-5V; passive. */
  "VDD-5V_106": "106",
  /** Physical pin 107: GND; passive. */
  "GND_107": "107",
  /** Physical pin 108: VDD-5V; passive. */
  "VDD-5V_108": "108",
  /** Physical pin 109: GPIO-PG12; bidirectional. */
  "GPIO-PG12": "109",
  /** Physical pin 110: VDD-5V; passive. */
  "VDD-5V_110": "110",
  /** Physical pin 111: GPIO-PD15; bidirectional. */
  "GPIO-PD15": "111",
  /** Physical pin 112: VDD-5V; passive. */
  "VDD-5V_112": "112",
  /** Physical pin 113: GPIO-PA13; bidirectional. */
  "GPIO-PA13": "113",
  /** Physical pin 114: ENET1-TXD-EN; bidirectional. */
  "ENET1-TXD-EN": "114",
  /** Physical pin 115: GND; passive. */
  "GND_115": "115",
  /** Physical pin 116: GND; passive. */
  "GND_116": "116",
  /** Physical pin 117: GPIO-PA14; bidirectional. */
  "GPIO-PA14": "117",
  /** Physical pin 118: ENET1-CLK; bidirectional. */
  "ENET1-CLK": "118",
  /** Physical pin 119: GPIO-PC2; bidirectional. */
  "GPIO-PC2": "119",
  /** Physical pin 120: GND; passive. */
  "GND_120": "120",
  /** Physical pin 121: GPIO-PE2; bidirectional. */
  "GPIO-PE2": "121",
  /** Physical pin 122: ENET1-TXD0; bidirectional. */
  "ENET1-TXD0": "122",
  /** Physical pin 123: NC; no_connect. */
  "NC_123": "123",
  /** Physical pin 124: ENET1-TXD1; bidirectional. */
  "ENET1-TXD1": "124",
  /** Physical pin 125: GND; passive. */
  "GND_125": "125",
  /** Physical pin 126: NC; no_connect. */
  "NC_126": "126",
  /** Physical pin 127: GND; passive. */
  "GND_127": "127",
  /** Physical pin 128: GND; passive. */
  "GND_128": "128",
  /** Physical pin 129: LCD-R5; bidirectional. */
  "LCD-R5": "129",
  /** Physical pin 130: GND; passive. */
  "GND_130": "130",
  /** Physical pin 131: LCD-R6; bidirectional. */
  "LCD-R6": "131",
  /** Physical pin 132: GND; passive. */
  "GND_132": "132",
  /** Physical pin 133: GND; passive. */
  "GND_133": "133",
  /** Physical pin 134: LCD-R7; bidirectional. */
  "LCD-R7": "134",
  /** Physical pin 135: GND; passive. */
  "GND_135": "135",
  /** Physical pin 136: GND; passive. */
  "GND_136": "136",
  /** Physical pin 137: LCD-R2; bidirectional. */
  "LCD-R2": "137",
  /** Physical pin 138: LCD-R3; bidirectional. */
  "LCD-R3": "138",
  /** Physical pin 139: LCD-G5; bidirectional. */
  "LCD-G5": "139",
  /** Physical pin 140: LCD-R4; bidirectional. */
  "LCD-R4": "140",
  /** Physical pin 141: LCD-G6; bidirectional. */
  "LCD-G6": "141",
  /** Physical pin 142: LCD-G7; bidirectional. */
  "LCD-G7": "142",
  /** Physical pin 143: GND; passive. */
  "GND_143": "143",
  /** Physical pin 144: GND; passive. */
  "GND_144": "144",
  /** Physical pin 145: GND; passive. */
  "GND_145": "145",
  /** Physical pin 146: GND; passive. */
  "GND_146": "146",
  /** Physical pin 147: GND; passive. */
  "GND_147": "147",
  /** Physical pin 148: LCD-G3; bidirectional. */
  "LCD-G3": "148",
  /** Physical pin 149: LCD-B5; bidirectional. */
  "LCD-B5": "149",
  /** Physical pin 150: LCD-G4; bidirectional. */
  "LCD-G4": "150",
  /** Physical pin 151: LCD-B6; bidirectional. */
  "LCD-B6": "151",
  /** Physical pin 152: LCD-G2; bidirectional. */
  "LCD-G2": "152",
  /** Physical pin 153: GND; passive. */
  "GND_153": "153",
  /** Physical pin 154: LCD-B3; bidirectional. */
  "LCD-B3": "154",
  /** Physical pin 155: GND; passive. */
  "GND_155": "155",
  /** Physical pin 156: GND; passive. */
  "GND_156": "156",
  /** Physical pin 157: GPIO-PA1; bidirectional. */
  "GPIO-PA1": "157",
  /** Physical pin 158: LCD-B4; bidirectional. */
  "LCD-B4": "158",
  /** Physical pin 159: GND; passive. */
  "GND_159": "159",
  /** Physical pin 160: LCD-HSYNC; bidirectional. */
  "LCD-HSYNC": "160",
  /** Physical pin 161: LCD-CLK; bidirectional. */
  "LCD-CLK": "161",
  /** Physical pin 162: LCD-VSYNC; bidirectional. */
  "LCD-VSYNC": "162",
  /** Physical pin 163: LCD-DE; bidirectional. */
  "LCD-DE": "163",
  /** Physical pin 164: LCD-B2; bidirectional. */
  "LCD-B2": "164",
  /** Physical pin 165: GND; passive. */
  "GND_165": "165",
  /** Physical pin 166: LCD-B7; bidirectional. */
  "LCD-B7": "166",
  /** Physical pin 167: SD2-DATA0; bidirectional. */
  "SD2-DATA0": "167",
  /** Physical pin 168: GND; passive. */
  "GND_168": "168",
  /** Physical pin 169: SD2-DATA3; bidirectional. */
  "SD2-DATA3": "169",
  /** Physical pin 170: GND; passive. */
  "GND_170": "170",
  /** Physical pin 171: SD2-DATA1; bidirectional. */
  "SD2-DATA1": "171",
  /** Physical pin 172: GND; passive. */
  "GND_172": "172",
  /** Physical pin 173: SD2-CMD; bidirectional. */
  "SD2-CMD": "173",
  /** Physical pin 174: GND; passive. */
  "GND_174": "174",
  /** Physical pin 175: SD2-DATA2; bidirectional. */
  "SD2-DATA2": "175",
  /** Physical pin 176: GND; passive. */
  "GND_176": "176",
  /** Physical pin 177: GND; passive. */
  "GND_177": "177",
  /** Physical pin 178: GND; passive. */
  "GND_178": "178",
  /** Physical pin 179: SD2-CLK; bidirectional. */
  "SD2-CLK": "179",
  /** Physical pin 180: GND; passive. */
  "GND_180": "180",
  /** Physical pin 181: GND; passive. */
  "GND_181": "181",
  /** Physical pin 182: GND; passive. */
  "GND_182": "182",
  /** Physical pin 183: NC; no_connect. */
  "NC_183": "183",
  /** Physical pin 184: GND; passive. */
  "GND_184": "184",
  /** Physical pin 185: GND; passive. */
  "GND_185": "185",
  /** Physical pin 186: DSI-D0N; bidirectional. */
  "DSI-D0N": "186",
  /** Physical pin 187: NC; no_connect. */
  "NC_187": "187",
  /** Physical pin 188: DSI-D0P; bidirectional. */
  "DSI-D0P": "188",
  /** Physical pin 189: GND; passive. */
  "GND_189": "189",
  /** Physical pin 190: NC; no_connect. */
  "NC_190": "190",
  /** Physical pin 191: NC; no_connect. */
  "NC_191": "191",
  /** Physical pin 192: DSI-D1N; bidirectional. */
  "DSI-D1N": "192",
  /** Physical pin 193: DSI-CK-N; bidirectional. */
  "DSI-CK-N": "193",
  /** Physical pin 194: DSI-D1P; bidirectional. */
  "DSI-D1P": "194",
  /** Physical pin 195: DSI-CK-P; bidirectional. */
  "DSI-CK-P": "195",
  /** Physical pin 196: NC; no_connect. */
  "NC_196": "196",
  /** Physical pin 197: NC; no_connect. */
  "NC_197": "197",
  /** Physical pin 198: NC; no_connect. */
  "NC_198": "198",
  /** Physical pin 199: GND; passive. */
  "GND_199": "199",
  /** Physical pin 200: GND; passive. */
  "GND_200": "200",
}) {
  override schema = "MCU_Module:VisionSOM-STM32MP1";
  override referencePrefix = "U";
}

