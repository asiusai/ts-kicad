// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 64 LEDs, I2C Interfaced LED Driver with Keyscan, TQFN-24
 *
 * KiCad symbol: `Interface_Expansion:AS1115-BQFT`. Reference prefix: `U`.
 * Footprint filters: TQFN*1EP*4x4mm*P0.5mm*PullBack*.
 * @see https://ams.com/documents/20143/36005/AS1115_DS000206_1-00.pdf/3d3e6d35-b184-1329-adf9-2d769eb2404f
 * Keywords: led driver i2c.
 * Default footprint: Package_DFN_QFN:TQFN-24-1EP_4x4mm_P0.5mm_EP2.8x2.8mm_PullBack_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS1115_BQFT extends Component.withPins({
  /** Physical pin 1: DIG2; open_collector. */
  "DIG2": "1",
  /** Physical pin 2: DIG3; open_collector. */
  "DIG3": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: DIG4; open_collector. */
  "DIG4": "4",
  /** Physical pin 5: DIG5; open_collector. */
  "DIG5": "5",
  /** Physical pin 6: DIG6; open_collector. */
  "DIG6": "6",
  /** Physical pin 7: DIG7; open_collector. */
  "DIG7": "7",
  /** Physical pin 8: KEYA; open_collector. */
  "KEYA": "8",
  /** Physical pin 9: KEYB; open_collector. */
  "KEYB": "9",
  /** Physical pin 10: ISET; passive. */
  "ISET": "10",
  /** Physical pin 11: SCL; input. */
  "SCL": "11",
  /** Physical pin 12: SEGA; output. */
  "SEGA": "12",
  /** Physical pin 13: SEGF; output. */
  "SEGF": "13",
  /** Physical pin 14: SEGB; output. */
  "SEGB": "14",
  /** Physical pin 15: SEGG; output. */
  "SEGG": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
  /** Physical pin 17: SEGC; output. */
  "SEGC": "17",
  /** Physical pin 18: SEGE; output. */
  "SEGE": "18",
  /** Physical pin 19: SEGDP; output. */
  "SEGDP": "19",
  /** Physical pin 20: SEGD; output. */
  "SEGD": "20",
  /** Physical pin 21: IRQ; open_collector. */
  "IRQ": "21",
  /** Physical pin 22: SDA; bidirectional. */
  "SDA": "22",
  /** Physical pin 23: DIG0; open_collector. */
  "DIG0": "23",
  /** Physical pin 24: DIG1; open_collector. */
  "DIG1": "24",
  /** Physical pin 25: EP; passive. */
  "EP": "25",
}) {
  override schema = "Interface_Expansion:AS1115-BQFT";
  override referencePrefix = "U";
}

/**
 * 64 LEDs, I2C Interfaced LED Driver with Keyscan, QSOP-24
 *
 * KiCad symbol: `Interface_Expansion:AS1115-BSST`. Reference prefix: `U`.
 * Footprint filters: QSOP*3.9x8.7m*P0.635mm*.
 * @see https://ams.com/documents/20143/36005/AS1115_DS000206_1-00.pdf/3d3e6d35-b184-1329-adf9-2d769eb2404f
 * Keywords: led driver i2c.
 * Default footprint: Package_SO:QSOP-24_3.9x8.7mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS1115_BSST extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: DIG0; open_collector. */
  "DIG0": "2",
  /** Physical pin 3: DIG1; open_collector. */
  "DIG1": "3",
  /** Physical pin 4: DIG2; open_collector. */
  "DIG2": "4",
  /** Physical pin 5: DIG3; open_collector. */
  "DIG3": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: DIG4; open_collector. */
  "DIG4": "7",
  /** Physical pin 8: DIG5; open_collector. */
  "DIG5": "8",
  /** Physical pin 9: DIG6; open_collector. */
  "DIG6": "9",
  /** Physical pin 10: DIG7; open_collector. */
  "DIG7": "10",
  /** Physical pin 11: KEYA; open_collector. */
  "KEYA": "11",
  /** Physical pin 12: KEYB; open_collector. */
  "KEYB": "12",
  /** Physical pin 13: ISET; passive. */
  "ISET": "13",
  /** Physical pin 14: SCL; input. */
  "SCL": "14",
  /** Physical pin 15: SEGA; output. */
  "SEGA": "15",
  /** Physical pin 16: SEGF; output. */
  "SEGF": "16",
  /** Physical pin 17: SEGB; output. */
  "SEGB": "17",
  /** Physical pin 18: SEGG; output. */
  "SEGG": "18",
  /** Physical pin 19: VDD; power_in. */
  "VDD": "19",
  /** Physical pin 20: SEGC; output. */
  "SEGC": "20",
  /** Physical pin 21: SEGE; output. */
  "SEGE": "21",
  /** Physical pin 22: SEGDP; output. */
  "SEGDP": "22",
  /** Physical pin 23: SEGD; output. */
  "SEGD": "23",
  /** Physical pin 24: IRQ; open_collector. */
  "IRQ": "24",
}) {
  override schema = "Interface_Expansion:AS1115-BSST";
  override referencePrefix = "U";
}

/**
 * 16 multi-function led driver and gpio controller with i2c interface
 *
 * KiCad symbol: `Interface_Expansion:AW9523B`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*EP2.7x2.7mm*.
 * @see https://cdn-shop.adafruit.com/product-files/4886/AW9523+English+Datasheet.pdf
 * Keywords: Port-Expander.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AW9523B extends Component.withPins({
  /** Physical pin 1: P1_0; bidirectional. */
  "P1_0": "1",
  /** Physical pin 2: P1_1; bidirectional. */
  "P1_1": "2",
  /** Physical pin 3: P1_2; bidirectional. */
  "P1_2": "3",
  /** Physical pin 4: P1_3; bidirectional. */
  "P1_3": "4",
  /** Physical pin 5: P0_0; bidirectional. */
  "P0_0": "5",
  /** Physical pin 6: P0_1; bidirectional. */
  "P0_1": "6",
  /** Physical pin 7: P0_2; bidirectional. */
  "P0_2": "7",
  /** Physical pin 8: P0_3; bidirectional. */
  "P0_3": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: P0_4; bidirectional. */
  "P0_4": "10",
  /** Physical pin 11: P0_5; bidirectional. */
  "P0_5": "11",
  /** Physical pin 12: P0_6; bidirectional. */
  "P0_6": "12",
  /** Physical pin 13: P0_7; bidirectional. */
  "P0_7": "13",
  /** Physical pin 14: P1_4; bidirectional. */
  "P1_4": "14",
  /** Physical pin 15: P1_5; bidirectional. */
  "P1_5": "15",
  /** Physical pin 16: P1_6; bidirectional. */
  "P1_6": "16",
  /** Physical pin 17: P1_7; bidirectional. */
  "P1_7": "17",
  /** Physical pin 18: AD0; input. */
  "AD0": "18",
  /** Physical pin 19: SCL; input. */
  "SCL": "19",
  /** Physical pin 20: SDA; bidirectional. */
  "SDA": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: ~{INT}; open_collector. */
  "~{INT}": "22",
  /** Physical pin 23: ~{RST}; input. */
  "~{RST}": "23",
  /** Physical pin 24: AD1; input. */
  "AD1": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "Interface_Expansion:AW9523B";
  override referencePrefix = "U";
}

/**
 * I2C to 1-Wire bridge, single-channel (master device), adjustable timing and sleep mode, WSON-8 (Maxim TDFN-8 / T823+1)
 *
 * KiCad symbol: `Interface_Expansion:DS2484Q`. Reference prefix: `U`.
 * Footprint filters: *WSON*3x2mm?P0.5mm?EP1.75x1.63mm*.
 * @see https://www.analog.com/DS2484/datasheet
 * Keywords: OneWire 1Wire Analog-Devices Maxim.
 * Default footprint: Package_DFN_QFN:Maxim_WSON-8-1EP_3x2mm_P0.5mm_EP1.75x1.63mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS2484Q extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: SDA; bidirectional. */
  "SDA": "2",
  /** Physical pin 3: ~{SLPZ}; input. */
  "~{SLPZ}": "3",
  /** Physical pin 4: N.C.; no_connect. */
  "N.C._4": "4",
  /** Physical pin 5: N.C.; no_connect. */
  "N.C._5": "5",
  /** Physical pin 6: V_{CC}; power_in. */
  "V_{CC}": "6",
  /** Physical pin 7: IO; bidirectional. */
  "IO": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: EP; passive. */
  "EP": "9",
}) {
  override schema = "Interface_Expansion:DS2484Q";
  override referencePrefix = "U";
}

/**
 * I2C to 1-Wire bridge, single-channel (master device), adjustable timing and sleep mode, SOT-23-6
 *
 * KiCad symbol: `Interface_Expansion:DS2484R`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/DS2484/datasheet
 * Keywords: OneWire 1Wire Analog-Devices Maxim.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS2484R extends Component.withPins({
  /** Physical pin 1: ~{SLPZ}; input. */
  "~{SLPZ}": "1",
  /** Physical pin 2: SDA; bidirectional. */
  "SDA": "2",
  /** Physical pin 3: SCL; input. */
  "SCL": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: IO; bidirectional. */
  "IO": "5",
  /** Physical pin 6: V_{CC}; power_in. */
  "V_{CC}": "6",
}) {
  override schema = "Interface_Expansion:DS2484R";
  override referencePrefix = "U";
}

/**
 * Pin-Selectable, 4-Channel, 2-Wire Multiplexer with Bus Buffers, SSOP-20
 *
 * KiCad symbol: `Interface_Expansion:LTC4314xGN`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x8.7mm*P0.635mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4314f.pdf
 * Keywords: I2C Multiplexer Buffer Level Shifter.
 * Default footprint: Package_SO:SSOP-20_3.9x8.7mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4314xGN extends Component.withPins({
  /** Physical pin 3: SCLOUT1; bidirectional. */
  "SCLOUT1": "3",
  /** Physical pin 1: DISCEN; input. */
  "DISCEN": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 4: SDAOUT1; bidirectional. */
  "SDAOUT1": "4",
  /** Physical pin 5: SDAIN; bidirectional. */
  "SDAIN": "5",
  /** Physical pin 6: SCLIN; bidirectional. */
  "SCLIN": "6",
  /** Physical pin 7: SCLOUT2; bidirectional. */
  "SCLOUT2": "7",
  /** Physical pin 8: SDAOUT2; bidirectional. */
  "SDAOUT2": "8",
  /** Physical pin 9: ENABLE4; input. */
  "ENABLE4": "9",
  /** Physical pin 10: ENABLE3; input. */
  "ENABLE3": "10",
  /** Physical pin 11: ENABLE2; input. */
  "ENABLE2": "11",
  /** Physical pin 12: ENABLE1; input. */
  "ENABLE1": "12",
  /** Physical pin 13: SCLOUT3; bidirectional. */
  "SCLOUT3": "13",
  /** Physical pin 14: SDAOUT3; bidirectional. */
  "SDAOUT3": "14",
  /** Physical pin 15: ~{FAULT}; open_collector. */
  "~{FAULT}": "15",
  /** Physical pin 16: VCC2; power_in. */
  "VCC2": "16",
  /** Physical pin 17: SCLOUT4; bidirectional. */
  "SCLOUT4": "17",
  /** Physical pin 18: SDAOUT4; bidirectional. */
  "SDAOUT4": "18",
  /** Physical pin 19: GND; power_in. */
  "GND": "19",
  /** Physical pin 20: ~{ACC}; input. */
  "~{ACC}": "20",
}) {
  override schema = "Interface_Expansion:LTC4314xGN";
  override referencePrefix = "U";
}

/**
 * Pin-Selectable, 4-Channel, 2-Wire Multiplexer with Bus Buffers, QFN-20
 *
 * KiCad symbol: `Interface_Expansion:LTC4314xUDC`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x4mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4314f.pdf
 * Keywords: I2C Multiplexer Buffer Level Shifter.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_3x4mm_P0.5mm_EP1.65x2.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4314xUDC extends Component.withPins({
  /** Physical pin 1: SCLOUT1; bidirectional. */
  "SCLOUT1": "1",
  /** Physical pin 2: SDAOUT1; bidirectional. */
  "SDAOUT1": "2",
  /** Physical pin 3: SDAIN; bidirectional. */
  "SDAIN": "3",
  /** Physical pin 4: SCLIN; bidirectional. */
  "SCLIN": "4",
  /** Physical pin 5: SCLOUT2; bidirectional. */
  "SCLOUT2": "5",
  /** Physical pin 6: SDAOUT2; bidirectional. */
  "SDAOUT2": "6",
  /** Physical pin 7: ENABLE4; input. */
  "ENABLE4": "7",
  /** Physical pin 8: ENABLE3; input. */
  "ENABLE3": "8",
  /** Physical pin 9: ENABLE2; input. */
  "ENABLE2": "9",
  /** Physical pin 10: ENABLE1; input. */
  "ENABLE1": "10",
  /** Physical pin 11: SCLOUT3; bidirectional. */
  "SCLOUT3": "11",
  /** Physical pin 12: SDAOUT3; bidirectional. */
  "SDAOUT3": "12",
  /** Physical pin 13: ~{FAULT}; open_collector. */
  "~{FAULT}": "13",
  /** Physical pin 14: VCC2; power_in. */
  "VCC2": "14",
  /** Physical pin 15: SCLOUT4; bidirectional. */
  "SCLOUT4": "15",
  /** Physical pin 16: SDAOUT4; bidirectional. */
  "SDAOUT4": "16",
  /** Physical pin 17: GND; power_in. */
  "GND": "17",
  /** Physical pin 18: ~{ACC}; input. */
  "~{ACC}": "18",
  /** Physical pin 19: DISCEN; input. */
  "DISCEN": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
  /** Physical pin 21: EP; passive. */
  "EP": "21",
}) {
  override schema = "Interface_Expansion:LTC4314xUDC";
  override referencePrefix = "U";
}

/**
 * Single I2C/SMBus Address-Translator, DFN-10
 *
 * KiCad symbol: `Interface_Expansion:LTC4316xDD`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4316fa.pdf
 * Keywords: I2C Translator 4kV-ESD Level-Shifter Hot-Swap.
 * Default footprint: Package_DFN_QFN:DFN-10-1EP_3x3mm_P0.5mm_EP1.65x2.38mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4316xDD extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: XORH; input. */
  "XORH": "2",
  /** Physical pin 3: XORL; input. */
  "XORL": "3",
  /** Physical pin 4: V_{CC}; power_in. */
  "V_{CC}": "4",
  /** Physical pin 5: ENABLE; input. */
  "ENABLE": "5",
  /** Physical pin 6: READY; open_collector. */
  "READY": "6",
  /** Physical pin 7: SDAIN; bidirectional. */
  "SDAIN": "7",
  /** Physical pin 8: SDAOUT; bidirectional. */
  "SDAOUT": "8",
  /** Physical pin 9: SCLOUT; output. */
  "SCLOUT": "9",
  /** Physical pin 10: SCLIN; input. */
  "SCLIN": "10",
  /** Physical pin 11: EP; passive. */
  "EP": "11",
}) {
  override schema = "Interface_Expansion:LTC4316xDD";
  override referencePrefix = "U";
}

/**
 * Dual I2C/SMBus Address-Translator, DFN-16
 *
 * KiCad symbol: `Interface_Expansion:LTC4317`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4317fa.pdf
 * Keywords: I2C Translator 4kV-ESD Level-Shifter Hot-Swap.
 * Default footprint: Package_DFN_QFN:DFN-16-1EP_3x5mm_P0.5mm_EP1.66x4.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4317 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: ENABLE2; input. */
  "ENABLE2": "2",
  /** Physical pin 3: XORH2; input. */
  "XORH2": "3",
  /** Physical pin 4: XORL2; input. */
  "XORL2": "4",
  /** Physical pin 5: XORH1; input. */
  "XORH1": "5",
  /** Physical pin 6: XORL1; input. */
  "XORL1": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: ENABLE1; input. */
  "ENABLE1": "8",
  /** Physical pin 9: READY2; open_collector. */
  "READY2": "9",
  /** Physical pin 10: READY1; open_collector. */
  "READY1": "10",
  /** Physical pin 11: SDAOUT2; bidirectional. */
  "SDAOUT2": "11",
  /** Physical pin 12: SDAIN; bidirectional. */
  "SDAIN": "12",
  /** Physical pin 13: SDAOUT1; bidirectional. */
  "SDAOUT1": "13",
  /** Physical pin 14: SCLOUT1; output. */
  "SCLOUT1": "14",
  /** Physical pin 15: SCLIN; input. */
  "SCLIN": "15",
  /** Physical pin 16: SCLOUT2; output. */
  "SCLOUT2": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
  override schema = "Interface_Expansion:LTC4317";
  override referencePrefix = "U";
}

/**
 * Ultra-Low Power Industrial, Octal, Digital Input Translator/Serializer, SPI interface, TSSOP-28
 *
 * KiCad symbol: `Interface_Expansion:MAX31910xUI`. Reference prefix: `U`.
 * Footprint filters: TSSOP*1EP*4.4x9.7mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/max31910.pdf
 * Keywords: SPI digital input serializer.
 * Default footprint: Package_SO:TSSOP-28-1EP_4.4x9.7mm_P0.65mm_EP2.85x6.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX31910xUI extends Component.withPins({
  /** Physical pin 1: DB0; input. */
  "DB0": "1",
  /** Physical pin 2: DB1; input. */
  "DB1": "2",
  /** Physical pin 3: IN1; input. */
  "IN1": "3",
  /** Physical pin 4: RT1; output. */
  "RT1": "4",
  /** Physical pin 5: IN2; input. */
  "IN2": "5",
  /** Physical pin 6: RT2; output. */
  "RT2": "6",
  /** Physical pin 7: IN3; input. */
  "IN3": "7",
  /** Physical pin 8: RT3; output. */
  "RT3": "8",
  /** Physical pin 9: IN4; input. */
  "IN4": "9",
  /** Physical pin 10: RT4; output. */
  "RT4": "10",
  /** Physical pin 11: IN5; input. */
  "IN5": "11",
  /** Physical pin 12: RT5; output. */
  "RT5": "12",
  /** Physical pin 13: RIREF; passive. */
  "RIREF": "13",
  /** Physical pin 14: V_{CC24V}; power_in. */
  "V_{CC24V}": "14",
  /** Physical pin 15: 5VOUT; power_out. */
  "5VOUT": "15",
  /** Physical pin 16: ~{FAULT}; open_collector. */
  "~{FAULT}": "16",
  /** Physical pin 17: RT6; output. */
  "RT6": "17",
  /** Physical pin 18: IN6; input. */
  "IN6": "18",
  /** Physical pin 19: RT7; output. */
  "RT7": "19",
  /** Physical pin 20: IN7; input. */
  "IN7": "20",
  /** Physical pin 21: RT8; output. */
  "RT8": "21",
  /** Physical pin 22: IN8; input. */
  "IN8": "22",
  /** Physical pin 23: SOUT; output. */
  "SOUT": "23",
  /** Physical pin 24: ~{CS}; input. */
  "~{CS}": "24",
  /** Physical pin 25: CLK; input. */
  "CLK": "25",
  /** Physical pin 26: MODESEL; input. */
  "MODESEL": "26",
  /** Physical pin 27: SIN; input. */
  "SIN": "27",
  /** Physical pin 28: GND; power_in. */
  "GND_28": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
}) {
  override schema = "Interface_Expansion:MAX31910xUI";
  override referencePrefix = "U";
}

/**
 * Industrial, Octal, Digital Input Translator/Serializer, SPI interface, TSSOP-28
 *
 * KiCad symbol: `Interface_Expansion:MAX31911xUI`. Reference prefix: `U`.
 * Footprint filters: TSSOP*1EP*4.4x9.7mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/max31911.pdf
 * Keywords: SPI digital input serializer.
 * Default footprint: Package_SO:TSSOP-28-1EP_4.4x9.7mm_P0.65mm_EP2.85x6.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX31911xUI extends Component.withPins({
  /** Physical pin 1: DB0; input. */
  "DB0": "1",
  /** Physical pin 2: DB1; input. */
  "DB1": "2",
  /** Physical pin 3: IN1; input. */
  "IN1": "3",
  /** Physical pin 4: RT1; output. */
  "RT1": "4",
  /** Physical pin 5: IN2; input. */
  "IN2": "5",
  /** Physical pin 6: RT2; output. */
  "RT2": "6",
  /** Physical pin 7: IN3; input. */
  "IN3": "7",
  /** Physical pin 8: RT3; output. */
  "RT3": "8",
  /** Physical pin 9: IN4; input. */
  "IN4": "9",
  /** Physical pin 10: RT4; output. */
  "RT4": "10",
  /** Physical pin 11: IN5; input. */
  "IN5": "11",
  /** Physical pin 12: RT5; output. */
  "RT5": "12",
  /** Physical pin 13: RIREF; passive. */
  "RIREF": "13",
  /** Physical pin 14: V_{CC24V}; power_in. */
  "V_{CC24V}": "14",
  /** Physical pin 15: 5VOUT; power_out. */
  "5VOUT": "15",
  /** Physical pin 16: ~{FAULT}; open_collector. */
  "~{FAULT}": "16",
  /** Physical pin 17: RT6; output. */
  "RT6": "17",
  /** Physical pin 18: IN6; input. */
  "IN6": "18",
  /** Physical pin 19: RT7; output. */
  "RT7": "19",
  /** Physical pin 20: IN7; input. */
  "IN7": "20",
  /** Physical pin 21: RT8; output. */
  "RT8": "21",
  /** Physical pin 22: IN8; input. */
  "IN8": "22",
  /** Physical pin 23: SOUT; output. */
  "SOUT": "23",
  /** Physical pin 24: ~{CS}; input. */
  "~{CS}": "24",
  /** Physical pin 25: CLK; input. */
  "CLK": "25",
  /** Physical pin 26: MODESEL; input. */
  "MODESEL": "26",
  /** Physical pin 27: SIN; input. */
  "SIN": "27",
  /** Physical pin 28: GND; power_in. */
  "GND_28": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
}) {
  override schema = "Interface_Expansion:MAX31911xUI";
  override referencePrefix = "U";
}

/**
 * Ultra-Low Power Industrial, Octal, Digital Input Translator/Serializer, 8 integrated energy-less LED drivers, SPI interface, TSSOP-28
 *
 * KiCad symbol: `Interface_Expansion:MAX31912xUI`. Reference prefix: `U`.
 * Footprint filters: TSSOP*1EP*4.4x9.7mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/max31912.pdf
 * Keywords: SPI digital input serializer.
 * Default footprint: Package_SO:TSSOP-28-1EP_4.4x9.7mm_P0.65mm_EP2.85x6.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX31912xUI extends Component.withPins({
  /** Physical pin 1: DB0; input. */
  "DB0": "1",
  /** Physical pin 2: DB1; input. */
  "DB1": "2",
  /** Physical pin 3: IN1; input. */
  "IN1": "3",
  /** Physical pin 4: RT1; output. */
  "RT1": "4",
  /** Physical pin 5: IN2; input. */
  "IN2": "5",
  /** Physical pin 6: RT2; output. */
  "RT2": "6",
  /** Physical pin 7: IN3; input. */
  "IN3": "7",
  /** Physical pin 8: RT3; output. */
  "RT3": "8",
  /** Physical pin 9: IN4; input. */
  "IN4": "9",
  /** Physical pin 10: RT4; output. */
  "RT4": "10",
  /** Physical pin 11: IN5; input. */
  "IN5": "11",
  /** Physical pin 12: RT5; output. */
  "RT5": "12",
  /** Physical pin 13: RIREF; passive. */
  "RIREF": "13",
  /** Physical pin 14: V_{CC24V}; power_in. */
  "V_{CC24V}": "14",
  /** Physical pin 15: 5VOUT; power_out. */
  "5VOUT": "15",
  /** Physical pin 16: ~{FAULT}; open_collector. */
  "~{FAULT}": "16",
  /** Physical pin 17: RT6; output. */
  "RT6": "17",
  /** Physical pin 18: IN6; input. */
  "IN6": "18",
  /** Physical pin 19: RT7; output. */
  "RT7": "19",
  /** Physical pin 20: IN7; input. */
  "IN7": "20",
  /** Physical pin 21: RT8; output. */
  "RT8": "21",
  /** Physical pin 22: IN8; input. */
  "IN8": "22",
  /** Physical pin 23: SOUT; output. */
  "SOUT": "23",
  /** Physical pin 24: ~{CS}; input. */
  "~{CS}": "24",
  /** Physical pin 25: CLK; input. */
  "CLK": "25",
  /** Physical pin 26: MODESEL; input. */
  "MODESEL": "26",
  /** Physical pin 27: SIN; input. */
  "SIN": "27",
  /** Physical pin 28: GND; power_in. */
  "GND_28": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
}) {
  override schema = "Interface_Expansion:MAX31912xUI";
  override referencePrefix = "U";
}

/**
 * Industrial, Octal, Digital Input Translator/Serializer, 8 integrated energy-less LED drivers, SPI interface, TSSOP-28
 *
 * KiCad symbol: `Interface_Expansion:MAX31913xUI`. Reference prefix: `U`.
 * Footprint filters: TSSOP*1EP*4.4x9.7mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/max31913.pdf
 * Keywords: SPI digital input serializer.
 * Default footprint: Package_SO:TSSOP-28-1EP_4.4x9.7mm_P0.65mm_EP2.85x6.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX31913xUI extends Component.withPins({
  /** Physical pin 1: DB0; input. */
  "DB0": "1",
  /** Physical pin 2: DB1; input. */
  "DB1": "2",
  /** Physical pin 3: IN1; input. */
  "IN1": "3",
  /** Physical pin 4: RT1; output. */
  "RT1": "4",
  /** Physical pin 5: IN2; input. */
  "IN2": "5",
  /** Physical pin 6: RT2; output. */
  "RT2": "6",
  /** Physical pin 7: IN3; input. */
  "IN3": "7",
  /** Physical pin 8: RT3; output. */
  "RT3": "8",
  /** Physical pin 9: IN4; input. */
  "IN4": "9",
  /** Physical pin 10: RT4; output. */
  "RT4": "10",
  /** Physical pin 11: IN5; input. */
  "IN5": "11",
  /** Physical pin 12: RT5; output. */
  "RT5": "12",
  /** Physical pin 13: RIREF; passive. */
  "RIREF": "13",
  /** Physical pin 14: V_{CC24V}; power_in. */
  "V_{CC24V}": "14",
  /** Physical pin 15: 5VOUT; power_out. */
  "5VOUT": "15",
  /** Physical pin 16: ~{FAULT}; open_collector. */
  "~{FAULT}": "16",
  /** Physical pin 17: RT6; output. */
  "RT6": "17",
  /** Physical pin 18: IN6; input. */
  "IN6": "18",
  /** Physical pin 19: RT7; output. */
  "RT7": "19",
  /** Physical pin 20: IN7; input. */
  "IN7": "20",
  /** Physical pin 21: RT8; output. */
  "RT8": "21",
  /** Physical pin 22: IN8; input. */
  "IN8": "22",
  /** Physical pin 23: SOUT; output. */
  "SOUT": "23",
  /** Physical pin 24: ~{CS}; input. */
  "~{CS}": "24",
  /** Physical pin 25: CLK; input. */
  "CLK": "25",
  /** Physical pin 26: MODESEL; input. */
  "MODESEL": "26",
  /** Physical pin 27: SIN; input. */
  "SIN": "27",
  /** Physical pin 28: GND; power_in. */
  "GND_28": "28",
  /** Physical pin 29: GND; passive. */
  "GND_29": "29",
}) {
  override schema = "Interface_Expansion:MAX31913xUI";
  override referencePrefix = "U";
}

/**
 * I2C Port Expander with 8 Push-Pull and 8 Open-Drain I/Os, QSOP-24
 *
 * KiCad symbol: `Interface_Expansion:MAX7325AEG+`. Reference prefix: `U`.
 * Footprint filters: QSOP*3.9x8.7*P0.635mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX7325.pdf
 * Keywords: Expander I2C Parallel Port GPIO Maxim.
 * Default footprint: Package_SO:QSOP-24_3.9x8.7mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX7325AEG_ extends Component.withPins({
  /** Physical pin 1: ~{INT}; open_collector. */
  "~{INT}": "1",
  /** Physical pin 2: ~{RST}; input. */
  "~{RST}": "2",
  /** Physical pin 3: AD2; input. */
  "AD2": "3",
  /** Physical pin 4: P0; bidirectional. */
  "P0": "4",
  /** Physical pin 5: P1; bidirectional. */
  "P1": "5",
  /** Physical pin 6: P2; bidirectional. */
  "P2": "6",
  /** Physical pin 7: P3; bidirectional. */
  "P3": "7",
  /** Physical pin 8: P4; bidirectional. */
  "P4": "8",
  /** Physical pin 9: P5; bidirectional. */
  "P5": "9",
  /** Physical pin 10: P6; bidirectional. */
  "P6": "10",
  /** Physical pin 11: P7; bidirectional. */
  "P7": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: O8; open_collector. */
  "O8": "13",
  /** Physical pin 14: O9; open_collector. */
  "O9": "14",
  /** Physical pin 15: O10; open_collector. */
  "O10": "15",
  /** Physical pin 16: O11; open_collector. */
  "O11": "16",
  /** Physical pin 17: O12; open_collector. */
  "O12": "17",
  /** Physical pin 18: O13; open_collector. */
  "O13": "18",
  /** Physical pin 19: O14; open_collector. */
  "O14": "19",
  /** Physical pin 20: O15; open_collector. */
  "O15": "20",
  /** Physical pin 21: AD0; input. */
  "AD0": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: V+; power_in. */
  "V+": "24",
}) {
  override schema = "Interface_Expansion:MAX7325AEG+";
  override referencePrefix = "U";
}

/**
 * 8-bit I/O expander, I2C, interrupts, QFN-20
 *
 * KiCad symbol: `Interface_Expansion:MCP23008-xML`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP23008-MCP23S08-Data-Sheet-20001919F.pdf
 * Keywords: I2C parallel port expander.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_4x4mm_P0.5mm_EP2.7x2.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP23008_xML extends Component.withPins({
  /** Physical pin 1: A2; input. */
  "A2": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A0; input. */
  "A0": "3",
  /** Physical pin 4: ~{RESET}; input. */
  "~{RESET}": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: INT; output. */
  "INT": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: GP0; bidirectional. */
  "GP0": "9",
  /** Physical pin 10: GP1; bidirectional. */
  "GP1": "10",
  /** Physical pin 11: GP2; bidirectional. */
  "GP2": "11",
  /** Physical pin 12: GP3; bidirectional. */
  "GP3": "12",
  /** Physical pin 13: GP4; bidirectional. */
  "GP4": "13",
  /** Physical pin 14: GP5; bidirectional. */
  "GP5": "14",
  /** Physical pin 15: GP6; bidirectional. */
  "GP6": "15",
  /** Physical pin 16: GP7; bidirectional. */
  "GP7": "16",
  /** Physical pin 17: VSS; power_in. */
  "VSS": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD": "18",
  /** Physical pin 19: SCL; input. */
  "SCL": "19",
  /** Physical pin 20: SDA; bidirectional. */
  "SDA": "20",
}) {
  override schema = "Interface_Expansion:MCP23008-xML";
  override referencePrefix = "U";
}

/**
 * 8-bit I/O expander, I2C, interrupts, PDIP-18
 *
 * KiCad symbol: `Interface_Expansion:MCP23008-xP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP23008-MCP23S08-Data-Sheet-20001919F.pdf
 * Keywords: I2C parallel port expander.
 * Default footprint: Package_DIP:DIP-18_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP23008_xP extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: SDA; bidirectional. */
  "SDA": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: A1; input. */
  "A1": "4",
  /** Physical pin 5: A0; input. */
  "A0": "5",
  /** Physical pin 6: ~{RESET}; input. */
  "~{RESET}": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: INT; output. */
  "INT": "8",
  /** Physical pin 9: VSS; power_in. */
  "VSS": "9",
  /** Physical pin 10: GP0; bidirectional. */
  "GP0": "10",
  /** Physical pin 11: GP1; bidirectional. */
  "GP1": "11",
  /** Physical pin 12: GP2; bidirectional. */
  "GP2": "12",
  /** Physical pin 13: GP3; bidirectional. */
  "GP3": "13",
  /** Physical pin 14: GP4; bidirectional. */
  "GP4": "14",
  /** Physical pin 15: GP5; bidirectional. */
  "GP5": "15",
  /** Physical pin 16: GP6; bidirectional. */
  "GP6": "16",
  /** Physical pin 17: GP7; bidirectional. */
  "GP7": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD": "18",
}) {
  override schema = "Interface_Expansion:MCP23008-xP";
  override referencePrefix = "U";
}

/**
 * 8-bit I/O expander, I2C, interrupts, SOIC-18
 *
 * KiCad symbol: `Interface_Expansion:MCP23008-xSO`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x11.6mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP23008-MCP23S08-Data-Sheet-20001919F.pdf
 * Keywords: I2C parallel port expander.
 * Default footprint: Package_SO:SOIC-18W_7.5x11.6mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP23008_xSO extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: SDA; bidirectional. */
  "SDA": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: A1; input. */
  "A1": "4",
  /** Physical pin 5: A0; input. */
  "A0": "5",
  /** Physical pin 6: ~{RESET}; input. */
  "~{RESET}": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: INT; output. */
  "INT": "8",
  /** Physical pin 9: VSS; power_in. */
  "VSS": "9",
  /** Physical pin 10: GP0; bidirectional. */
  "GP0": "10",
  /** Physical pin 11: GP1; bidirectional. */
  "GP1": "11",
  /** Physical pin 12: GP2; bidirectional. */
  "GP2": "12",
  /** Physical pin 13: GP3; bidirectional. */
  "GP3": "13",
  /** Physical pin 14: GP4; bidirectional. */
  "GP4": "14",
  /** Physical pin 15: GP5; bidirectional. */
  "GP5": "15",
  /** Physical pin 16: GP6; bidirectional. */
  "GP6": "16",
  /** Physical pin 17: GP7; bidirectional. */
  "GP7": "17",
  /** Physical pin 18: VDD; power_in. */
  "VDD": "18",
}) {
  override schema = "Interface_Expansion:MCP23008-xSO";
  override referencePrefix = "U";
}

/**
 * 8-bit I/O expander, I2C, interrupts, SSOP-20
 *
 * KiCad symbol: `Interface_Expansion:MCP23008-xSS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x7.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP23008-MCP23S08-Data-Sheet-20001919F.pdf
 * Keywords: I2C parallel port expander.
 * Default footprint: Package_SO:SSOP-20_5.3x7.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP23008_xSS extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: SDA; bidirectional. */
  "SDA": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: A1; input. */
  "A1": "4",
  /** Physical pin 5: A0; input. */
  "A0": "5",
  /** Physical pin 6: ~{RESET}; input. */
  "~{RESET}": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: INT; output. */
  "INT": "8",
  /** Physical pin 9: VSS; power_in. */
  "VSS": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: GP0; bidirectional. */
  "GP0": "12",
  /** Physical pin 13: GP1; bidirectional. */
  "GP1": "13",
  /** Physical pin 14: GP2; bidirectional. */
  "GP2": "14",
  /** Physical pin 15: GP3; bidirectional. */
  "GP3": "15",
  /** Physical pin 16: GP4; bidirectional. */
  "GP4": "16",
  /** Physical pin 17: GP5; bidirectional. */
  "GP5": "17",
  /** Physical pin 18: GP6; bidirectional. */
  "GP6": "18",
  /** Physical pin 19: GP7; bidirectional. */
  "GP7": "19",
  /** Physical pin 20: VDD; power_in. */
  "VDD": "20",
}) {
  override schema = "Interface_Expansion:MCP23008-xSS";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C, interrupts, w pull-ups, GPA7/GPB7 output only (https://microchip.my.site.com/s/article/GPA7---GPB7-Cannot-Be-Used-as-Inputs-In-MCP23017), QFN-28
 *
 * KiCad symbol: `Interface_Expansion:MCP23017x-x-ML`. Reference prefix: `U`.
 * Footprint filters: QFN*6x6mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MCP23017-Data-Sheet-DS20001952.pdf
 * Keywords: Microchip port-expander GPIO.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP23017x_x_ML extends Component.withPins({
  /** Physical pin 1: GPB4; bidirectional. */
  "GPB4": "1",
  /** Physical pin 2: GPB5; bidirectional. */
  "GPB5": "2",
  /** Physical pin 3: GPB6; bidirectional. */
  "GPB6": "3",
  /** Physical pin 4: GPB7; output. */
  "GPB7": "4",
  /** Physical pin 5: V_{DD}; power_in. */
  "V_{DD}": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: SCK; input. */
  "SCK": "8",
  /** Physical pin 9: SDA; bidirectional. */
  "SDA": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: A0; input. */
  "A0": "11",
  /** Physical pin 12: A1; input. */
  "A1": "12",
  /** Physical pin 13: A2; input. */
  "A2": "13",
  /** Physical pin 14: ~{RESET}; input. */
  "~{RESET}": "14",
  /** Physical pin 15: INTB; tri_state. */
  "INTB": "15",
  /** Physical pin 16: INTA; tri_state. */
  "INTA": "16",
  /** Physical pin 17: GPA0; bidirectional. */
  "GPA0": "17",
  /** Physical pin 18: GPA1; bidirectional. */
  "GPA1": "18",
  /** Physical pin 19: GPA2; bidirectional. */
  "GPA2": "19",
  /** Physical pin 20: GPA3; bidirectional. */
  "GPA3": "20",
  /** Physical pin 21: GPA4; bidirectional. */
  "GPA4": "21",
  /** Physical pin 22: GPA5; bidirectional. */
  "GPA5": "22",
  /** Physical pin 23: GPA6; bidirectional. */
  "GPA6": "23",
  /** Physical pin 24: GPA7; output. */
  "GPA7": "24",
  /** Physical pin 25: GPB0; bidirectional. */
  "GPB0": "25",
  /** Physical pin 26: GPB1; bidirectional. */
  "GPB1": "26",
  /** Physical pin 27: GPB2; bidirectional. */
  "GPB2": "27",
  /** Physical pin 28: GPB3; bidirectional. */
  "GPB3": "28",
  /** Physical pin 29: EP; passive. */
  "EP": "29",
}) {
  override schema = "Interface_Expansion:MCP23017x-x-ML";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C, interrupts, w pull-ups, GPA7/GPB7 output only (https://microchip.my.site.com/s/article/GPA7---GPB7-Cannot-Be-Used-as-Inputs-In-MCP23017),  SOIC-28
 *
 * KiCad symbol: `Interface_Expansion:MCP23017x-x-SO`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MCP23017-Data-Sheet-DS20001952.pdf
 * Keywords: Microchip port-expander GPIO.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP23017x_x_SO extends Component.withPins({
  /** Physical pin 1: GPB0; bidirectional. */
  "GPB0": "1",
  /** Physical pin 2: GPB1; bidirectional. */
  "GPB1": "2",
  /** Physical pin 3: GPB2; bidirectional. */
  "GPB2": "3",
  /** Physical pin 4: GPB3; bidirectional. */
  "GPB3": "4",
  /** Physical pin 5: GPB4; bidirectional. */
  "GPB4": "5",
  /** Physical pin 6: GPB5; bidirectional. */
  "GPB5": "6",
  /** Physical pin 7: GPB6; bidirectional. */
  "GPB6": "7",
  /** Physical pin 8: GPB7; output. */
  "GPB7": "8",
  /** Physical pin 9: V_{DD}; power_in. */
  "V_{DD}": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: SCK; input. */
  "SCK": "12",
  /** Physical pin 13: SDA; bidirectional. */
  "SDA": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: A0; input. */
  "A0": "15",
  /** Physical pin 16: A1; input. */
  "A1": "16",
  /** Physical pin 17: A2; input. */
  "A2": "17",
  /** Physical pin 18: ~{RESET}; input. */
  "~{RESET}": "18",
  /** Physical pin 19: INTB; tri_state. */
  "INTB": "19",
  /** Physical pin 20: INTA; tri_state. */
  "INTA": "20",
  /** Physical pin 21: GPA0; bidirectional. */
  "GPA0": "21",
  /** Physical pin 22: GPA1; bidirectional. */
  "GPA1": "22",
  /** Physical pin 23: GPA2; bidirectional. */
  "GPA2": "23",
  /** Physical pin 24: GPA3; bidirectional. */
  "GPA3": "24",
  /** Physical pin 25: GPA4; bidirectional. */
  "GPA4": "25",
  /** Physical pin 26: GPA5; bidirectional. */
  "GPA5": "26",
  /** Physical pin 27: GPA6; bidirectional. */
  "GPA6": "27",
  /** Physical pin 28: GPA7; output. */
  "GPA7": "28",
}) {
  override schema = "Interface_Expansion:MCP23017x-x-SO";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C, interrupts, w pull-ups, SPDIP-28
 *
 * KiCad symbol: `Interface_Expansion:MCP23017x-x-SP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MCP23017-Data-Sheet-DS20001952.pdf
 * Keywords: Microchip port-expander GPIO.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP23017x_x_SP extends Component.withPins({
  /** Physical pin 1: GPB0; bidirectional. */
  "GPB0": "1",
  /** Physical pin 2: GPB1; bidirectional. */
  "GPB1": "2",
  /** Physical pin 3: GPB2; bidirectional. */
  "GPB2": "3",
  /** Physical pin 4: GPB3; bidirectional. */
  "GPB3": "4",
  /** Physical pin 5: GPB4; bidirectional. */
  "GPB4": "5",
  /** Physical pin 6: GPB5; bidirectional. */
  "GPB5": "6",
  /** Physical pin 7: GPB6; bidirectional. */
  "GPB6": "7",
  /** Physical pin 8: GPB7; output. */
  "GPB7": "8",
  /** Physical pin 9: V_{DD}; power_in. */
  "V_{DD}": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: SCK; input. */
  "SCK": "12",
  /** Physical pin 13: SDA; bidirectional. */
  "SDA": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: A0; input. */
  "A0": "15",
  /** Physical pin 16: A1; input. */
  "A1": "16",
  /** Physical pin 17: A2; input. */
  "A2": "17",
  /** Physical pin 18: ~{RESET}; input. */
  "~{RESET}": "18",
  /** Physical pin 19: INTB; tri_state. */
  "INTB": "19",
  /** Physical pin 20: INTA; tri_state. */
  "INTA": "20",
  /** Physical pin 21: GPA0; bidirectional. */
  "GPA0": "21",
  /** Physical pin 22: GPA1; bidirectional. */
  "GPA1": "22",
  /** Physical pin 23: GPA2; bidirectional. */
  "GPA2": "23",
  /** Physical pin 24: GPA3; bidirectional. */
  "GPA3": "24",
  /** Physical pin 25: GPA4; bidirectional. */
  "GPA4": "25",
  /** Physical pin 26: GPA5; bidirectional. */
  "GPA5": "26",
  /** Physical pin 27: GPA6; bidirectional. */
  "GPA6": "27",
  /** Physical pin 28: GPA7; output. */
  "GPA7": "28",
}) {
  override schema = "Interface_Expansion:MCP23017x-x-SP";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C, interrupts, w pull-ups, SSOP-28
 *
 * KiCad symbol: `Interface_Expansion:MCP23017x-x-SS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MCP23017-Data-Sheet-DS20001952.pdf
 * Keywords: Microchip port-expander GPIO.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP23017x_x_SS extends Component.withPins({
  /** Physical pin 1: GPB0; bidirectional. */
  "GPB0": "1",
  /** Physical pin 2: GPB1; bidirectional. */
  "GPB1": "2",
  /** Physical pin 3: GPB2; bidirectional. */
  "GPB2": "3",
  /** Physical pin 4: GPB3; bidirectional. */
  "GPB3": "4",
  /** Physical pin 5: GPB4; bidirectional. */
  "GPB4": "5",
  /** Physical pin 6: GPB5; bidirectional. */
  "GPB5": "6",
  /** Physical pin 7: GPB6; bidirectional. */
  "GPB6": "7",
  /** Physical pin 8: GPB7; output. */
  "GPB7": "8",
  /** Physical pin 9: V_{DD}; power_in. */
  "V_{DD}": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: SCK; input. */
  "SCK": "12",
  /** Physical pin 13: SDA; bidirectional. */
  "SDA": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: A0; input. */
  "A0": "15",
  /** Physical pin 16: A1; input. */
  "A1": "16",
  /** Physical pin 17: A2; input. */
  "A2": "17",
  /** Physical pin 18: ~{RESET}; input. */
  "~{RESET}": "18",
  /** Physical pin 19: INTB; tri_state. */
  "INTB": "19",
  /** Physical pin 20: INTA; tri_state. */
  "INTA": "20",
  /** Physical pin 21: GPA0; bidirectional. */
  "GPA0": "21",
  /** Physical pin 22: GPA1; bidirectional. */
  "GPA1": "22",
  /** Physical pin 23: GPA2; bidirectional. */
  "GPA2": "23",
  /** Physical pin 24: GPA3; bidirectional. */
  "GPA3": "24",
  /** Physical pin 25: GPA4; bidirectional. */
  "GPA4": "25",
  /** Physical pin 26: GPA5; bidirectional. */
  "GPA5": "26",
  /** Physical pin 27: GPA6; bidirectional. */
  "GPA6": "27",
  /** Physical pin 28: GPA7; output. */
  "GPA7": "28",
}) {
  override schema = "Interface_Expansion:MCP23017x-x-SS";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C interface, open-drain outpus (with configurable pull-up resistors), 2 interrupt outputs, VQFN-24
 *
 * KiCad symbol: `Interface_Expansion:MCP23018x-x-MJ`. Reference prefix: `U`.
 * Footprint filters: *QFN*4x4mm?P0.5mm?EP2.6x2.6*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MCP23018-Data-Sheet-DS20002103.pdf
 * Keywords: Microchip port-expander GPIO MCP23018-E/MJ.
 * Default footprint: Package_DFN_QFN:HVQFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP23018x_x_MJ extends Component.withPins({
  /** Physical pin 1: GPB1; bidirectional. */
  "GPB1": "1",
  /** Physical pin 2: GPB2; bidirectional. */
  "GPB2": "2",
  /** Physical pin 3: GPB3; bidirectional. */
  "GPB3": "3",
  /** Physical pin 4: GPB4; bidirectional. */
  "GPB4": "4",
  /** Physical pin 5: GPB5; bidirectional. */
  "GPB5": "5",
  /** Physical pin 6: GPB6; bidirectional. */
  "GPB6": "6",
  /** Physical pin 7: GPB7; bidirectional. */
  "GPB7": "7",
  /** Physical pin 8: V_{DD}; power_in. */
  "V_{DD}": "8",
  /** Physical pin 9: SCL; input. */
  "SCL": "9",
  /** Physical pin 10: SDA; bidirectional. */
  "SDA": "10",
  /** Physical pin 11: ADDR; input. */
  "ADDR": "11",
  /** Physical pin 12: ~{RESET}; input. */
  "~{RESET}": "12",
  /** Physical pin 13: INTB; output. */
  "INTB": "13",
  /** Physical pin 14: INTA; output. */
  "INTA": "14",
  /** Physical pin 15: GPA0; bidirectional. */
  "GPA0": "15",
  /** Physical pin 16: GPA1; bidirectional. */
  "GPA1": "16",
  /** Physical pin 17: GPA2; bidirectional. */
  "GPA2": "17",
  /** Physical pin 18: GPA3; bidirectional. */
  "GPA3": "18",
  /** Physical pin 19: GPA4; bidirectional. */
  "GPA4": "19",
  /** Physical pin 20: GPA5; bidirectional. */
  "GPA5": "20",
  /** Physical pin 21: GPA6; bidirectional. */
  "GPA6": "21",
  /** Physical pin 22: GPA7; bidirectional. */
  "GPA7": "22",
  /** Physical pin 23: V_{SS}; power_in. */
  "V_{SS}": "23",
  /** Physical pin 24: GPB0; bidirectional. */
  "GPB0": "24",
  /** Physical pin 25: EP; passive. */
  "EP": "25",
}) {
  override schema = "Interface_Expansion:MCP23018x-x-MJ";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C interface, open-drain outpus (with configurable pull-up resistors), 2 interrupt outputs, SOIC-28
 *
 * KiCad symbol: `Interface_Expansion:MCP23018x-x-SO`. Reference prefix: `U`.
 * Footprint filters: *SOIC*7.5x17.9mm?P1.27mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MCP23018-Data-Sheet-DS20002103.pdf
 * Keywords: Microchip port-expander GPIO MCP23018-E/SO MCP23018T-E/SO.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP23018x_x_SO extends Component.withPins({
  /** Physical pin 1: V_{SS}; power_in. */
  "V_{SS}": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: GPB0; bidirectional. */
  "GPB0": "3",
  /** Physical pin 4: GPB1; bidirectional. */
  "GPB1": "4",
  /** Physical pin 5: GPB2; bidirectional. */
  "GPB2": "5",
  /** Physical pin 6: GPB3; bidirectional. */
  "GPB3": "6",
  /** Physical pin 7: GPB4; bidirectional. */
  "GPB4": "7",
  /** Physical pin 8: GPB5; bidirectional. */
  "GPB5": "8",
  /** Physical pin 9: GPB6; bidirectional. */
  "GPB6": "9",
  /** Physical pin 10: GPB7; bidirectional. */
  "GPB7": "10",
  /** Physical pin 11: V_{DD}; power_in. */
  "V_{DD}": "11",
  /** Physical pin 12: SCL; input. */
  "SCL": "12",
  /** Physical pin 13: SDA; bidirectional. */
  "SDA": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: ADDR; input. */
  "ADDR": "15",
  /** Physical pin 16: ~{RESET}; input. */
  "~{RESET}": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: INTB; output. */
  "INTB": "18",
  /** Physical pin 19: INTA; output. */
  "INTA": "19",
  /** Physical pin 20: GPA0; bidirectional. */
  "GPA0": "20",
  /** Physical pin 21: GPA1; bidirectional. */
  "GPA1": "21",
  /** Physical pin 22: GPA2; bidirectional. */
  "GPA2": "22",
  /** Physical pin 23: GPA3; bidirectional. */
  "GPA3": "23",
  /** Physical pin 24: GPA4; bidirectional. */
  "GPA4": "24",
  /** Physical pin 25: GPA5; bidirectional. */
  "GPA5": "25",
  /** Physical pin 26: GPA6; bidirectional. */
  "GPA6": "26",
  /** Physical pin 27: GPA7; bidirectional. */
  "GPA7": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
}) {
  override schema = "Interface_Expansion:MCP23018x-x-SO";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C interface, open-drain outpus (with configurable pull-up resistors), 2 interrupt outputs, DIP-28
 *
 * KiCad symbol: `Interface_Expansion:MCP23018x-x-SP`. Reference prefix: `U`.
 * Footprint filters: DIP*7.62mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MCP23018-Data-Sheet-DS20002103.pdf
 * Keywords: Microchip port-expander GPIO MCP23018-E/SP.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP23018x_x_SP extends Component.withPins({
  /** Physical pin 1: V_{SS}; power_in. */
  "V_{SS}": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: GPB0; bidirectional. */
  "GPB0": "3",
  /** Physical pin 4: GPB1; bidirectional. */
  "GPB1": "4",
  /** Physical pin 5: GPB2; bidirectional. */
  "GPB2": "5",
  /** Physical pin 6: GPB3; bidirectional. */
  "GPB3": "6",
  /** Physical pin 7: GPB4; bidirectional. */
  "GPB4": "7",
  /** Physical pin 8: GPB5; bidirectional. */
  "GPB5": "8",
  /** Physical pin 9: GPB6; bidirectional. */
  "GPB6": "9",
  /** Physical pin 10: GPB7; bidirectional. */
  "GPB7": "10",
  /** Physical pin 11: V_{DD}; power_in. */
  "V_{DD}": "11",
  /** Physical pin 12: SCL; input. */
  "SCL": "12",
  /** Physical pin 13: SDA; bidirectional. */
  "SDA": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: ADDR; input. */
  "ADDR": "15",
  /** Physical pin 16: ~{RESET}; input. */
  "~{RESET}": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: INTB; output. */
  "INTB": "18",
  /** Physical pin 19: INTA; output. */
  "INTA": "19",
  /** Physical pin 20: GPA0; bidirectional. */
  "GPA0": "20",
  /** Physical pin 21: GPA1; bidirectional. */
  "GPA1": "21",
  /** Physical pin 22: GPA2; bidirectional. */
  "GPA2": "22",
  /** Physical pin 23: GPA3; bidirectional. */
  "GPA3": "23",
  /** Physical pin 24: GPA4; bidirectional. */
  "GPA4": "24",
  /** Physical pin 25: GPA5; bidirectional. */
  "GPA5": "25",
  /** Physical pin 26: GPA6; bidirectional. */
  "GPA6": "26",
  /** Physical pin 27: GPA7; bidirectional. */
  "GPA7": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
}) {
  override schema = "Interface_Expansion:MCP23018x-x-SP";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C interface, open-drain outpus (with configurable pull-up resistors), 2 interrupt outputs, SSOP-24
 *
 * KiCad symbol: `Interface_Expansion:MCP23018x-x-SS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x8.2mm?P0.65mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MCP23018-Data-Sheet-DS20002103.pdf
 * Keywords: Microchip port-expander GPIO MCP23018-E/SSVAO MCP23018T-E/SSVAO.
 * Default footprint: Package_SO:SSOP-24_5.3x8.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP23018x_x_SS extends Component.withPins({
  /** Physical pin 1: V_{SS}; power_in. */
  "V_{SS}": "1",
  /** Physical pin 2: GPB0; bidirectional. */
  "GPB0": "2",
  /** Physical pin 3: GPB1; bidirectional. */
  "GPB1": "3",
  /** Physical pin 4: GPB2; bidirectional. */
  "GPB2": "4",
  /** Physical pin 5: GPB3; bidirectional. */
  "GPB3": "5",
  /** Physical pin 6: GPB4; bidirectional. */
  "GPB4": "6",
  /** Physical pin 7: GPB5; bidirectional. */
  "GPB5": "7",
  /** Physical pin 8: GPB6; bidirectional. */
  "GPB6": "8",
  /** Physical pin 9: GPB7; bidirectional. */
  "GPB7": "9",
  /** Physical pin 10: V_{DD}; power_in. */
  "V_{DD}": "10",
  /** Physical pin 11: SCL; input. */
  "SCL": "11",
  /** Physical pin 12: SDA; bidirectional. */
  "SDA": "12",
  /** Physical pin 13: ADDR; input. */
  "ADDR": "13",
  /** Physical pin 14: ~{RESET}; input. */
  "~{RESET}": "14",
  /** Physical pin 15: INTB; output. */
  "INTB": "15",
  /** Physical pin 16: INTA; output. */
  "INTA": "16",
  /** Physical pin 17: GPA0; bidirectional. */
  "GPA0": "17",
  /** Physical pin 18: GPA1; bidirectional. */
  "GPA1": "18",
  /** Physical pin 19: GPA2; bidirectional. */
  "GPA2": "19",
  /** Physical pin 20: GPA3; bidirectional. */
  "GPA3": "20",
  /** Physical pin 21: GPA4; bidirectional. */
  "GPA4": "21",
  /** Physical pin 22: GPA5; bidirectional. */
  "GPA5": "22",
  /** Physical pin 23: GPA6; bidirectional. */
  "GPA6": "23",
  /** Physical pin 24: GPA7; bidirectional. */
  "GPA7": "24",
}) {
  override schema = "Interface_Expansion:MCP23018x-x-SS";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, SPI, interrupts, w pull-ups, QFN-28
 *
 * KiCad symbol: `Interface_Expansion:MCP23S17x-x-ML`. Reference prefix: `U`.
 * Footprint filters: QFN*6x6mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001952C.pdf
 * Keywords: Microchip port-expander GPIO.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP23S17x_x_ML extends Component.withPins({
  /** Physical pin 1: GPB4; bidirectional. */
  "GPB4": "1",
  /** Physical pin 2: GPB5; bidirectional. */
  "GPB5": "2",
  /** Physical pin 3: GPB6; bidirectional. */
  "GPB6": "3",
  /** Physical pin 4: GPB7; bidirectional. */
  "GPB7": "4",
  /** Physical pin 5: V_{DD}; power_in. */
  "V_{DD}": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}": "6",
  /** Physical pin 7: ~{CS}; input. */
  "~{CS}": "7",
  /** Physical pin 8: SCK; input. */
  "SCK": "8",
  /** Physical pin 9: SI; input. */
  "SI": "9",
  /** Physical pin 10: SO; output. */
  "SO": "10",
  /** Physical pin 11: A0; input. */
  "A0": "11",
  /** Physical pin 12: A1; input. */
  "A1": "12",
  /** Physical pin 13: A2; input. */
  "A2": "13",
  /** Physical pin 14: ~{RESET}; input. */
  "~{RESET}": "14",
  /** Physical pin 15: INTB; tri_state. */
  "INTB": "15",
  /** Physical pin 16: INTA; tri_state. */
  "INTA": "16",
  /** Physical pin 17: GPA0; bidirectional. */
  "GPA0": "17",
  /** Physical pin 18: GPA1; bidirectional. */
  "GPA1": "18",
  /** Physical pin 19: GPA2; bidirectional. */
  "GPA2": "19",
  /** Physical pin 20: GPA3; bidirectional. */
  "GPA3": "20",
  /** Physical pin 21: GPA4; bidirectional. */
  "GPA4": "21",
  /** Physical pin 22: GPA5; bidirectional. */
  "GPA5": "22",
  /** Physical pin 23: GPA6; bidirectional. */
  "GPA6": "23",
  /** Physical pin 24: GPA7; bidirectional. */
  "GPA7": "24",
  /** Physical pin 25: GPB0; bidirectional. */
  "GPB0": "25",
  /** Physical pin 26: GPB1; bidirectional. */
  "GPB1": "26",
  /** Physical pin 27: GPB2; bidirectional. */
  "GPB2": "27",
  /** Physical pin 28: GPB3; bidirectional. */
  "GPB3": "28",
  /** Physical pin 29: EP; passive. */
  "EP": "29",
}) {
  override schema = "Interface_Expansion:MCP23S17x-x-ML";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, SPI, interrupts, w pull-ups, SOIC-28
 *
 * KiCad symbol: `Interface_Expansion:MCP23S17x-x-SO`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001952C.pdf
 * Keywords: Microchip port-expander GPIO.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP23S17x_x_SO extends Component.withPins({
  /** Physical pin 1: GPB0; bidirectional. */
  "GPB0": "1",
  /** Physical pin 2: GPB1; bidirectional. */
  "GPB1": "2",
  /** Physical pin 3: GPB2; bidirectional. */
  "GPB2": "3",
  /** Physical pin 4: GPB3; bidirectional. */
  "GPB3": "4",
  /** Physical pin 5: GPB4; bidirectional. */
  "GPB4": "5",
  /** Physical pin 6: GPB5; bidirectional. */
  "GPB5": "6",
  /** Physical pin 7: GPB6; bidirectional. */
  "GPB6": "7",
  /** Physical pin 8: GPB7; bidirectional. */
  "GPB7": "8",
  /** Physical pin 9: V_{DD}; power_in. */
  "V_{DD}": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}": "10",
  /** Physical pin 11: ~{CS}; input. */
  "~{CS}": "11",
  /** Physical pin 12: SCK; input. */
  "SCK": "12",
  /** Physical pin 13: SI; input. */
  "SI": "13",
  /** Physical pin 14: SO; output. */
  "SO": "14",
  /** Physical pin 15: A0; input. */
  "A0": "15",
  /** Physical pin 16: A1; input. */
  "A1": "16",
  /** Physical pin 17: A2; input. */
  "A2": "17",
  /** Physical pin 18: ~{RESET}; input. */
  "~{RESET}": "18",
  /** Physical pin 19: INTB; tri_state. */
  "INTB": "19",
  /** Physical pin 20: INTA; tri_state. */
  "INTA": "20",
  /** Physical pin 21: GPA0; bidirectional. */
  "GPA0": "21",
  /** Physical pin 22: GPA1; bidirectional. */
  "GPA1": "22",
  /** Physical pin 23: GPA2; bidirectional. */
  "GPA2": "23",
  /** Physical pin 24: GPA3; bidirectional. */
  "GPA3": "24",
  /** Physical pin 25: GPA4; bidirectional. */
  "GPA4": "25",
  /** Physical pin 26: GPA5; bidirectional. */
  "GPA5": "26",
  /** Physical pin 27: GPA6; bidirectional. */
  "GPA6": "27",
  /** Physical pin 28: GPA7; bidirectional. */
  "GPA7": "28",
}) {
  override schema = "Interface_Expansion:MCP23S17x-x-SO";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, SPI, interrupts, w pull-ups, SPDIP-28
 *
 * KiCad symbol: `Interface_Expansion:MCP23S17x-x-SP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/20001952C.pdf
 * Keywords: Microchip port-expander GPIO.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP23S17x_x_SP extends Component.withPins({
  /** Physical pin 1: GPB0; bidirectional. */
  "GPB0": "1",
  /** Physical pin 2: GPB1; bidirectional. */
  "GPB1": "2",
  /** Physical pin 3: GPB2; bidirectional. */
  "GPB2": "3",
  /** Physical pin 4: GPB3; bidirectional. */
  "GPB3": "4",
  /** Physical pin 5: GPB4; bidirectional. */
  "GPB4": "5",
  /** Physical pin 6: GPB5; bidirectional. */
  "GPB5": "6",
  /** Physical pin 7: GPB6; bidirectional. */
  "GPB6": "7",
  /** Physical pin 8: GPB7; bidirectional. */
  "GPB7": "8",
  /** Physical pin 9: V_{DD}; power_in. */
  "V_{DD}": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}": "10",
  /** Physical pin 11: ~{CS}; input. */
  "~{CS}": "11",
  /** Physical pin 12: SCK; input. */
  "SCK": "12",
  /** Physical pin 13: SI; input. */
  "SI": "13",
  /** Physical pin 14: SO; output. */
  "SO": "14",
  /** Physical pin 15: A0; input. */
  "A0": "15",
  /** Physical pin 16: A1; input. */
  "A1": "16",
  /** Physical pin 17: A2; input. */
  "A2": "17",
  /** Physical pin 18: ~{RESET}; input. */
  "~{RESET}": "18",
  /** Physical pin 19: INTB; tri_state. */
  "INTB": "19",
  /** Physical pin 20: INTA; tri_state. */
  "INTA": "20",
  /** Physical pin 21: GPA0; bidirectional. */
  "GPA0": "21",
  /** Physical pin 22: GPA1; bidirectional. */
  "GPA1": "22",
  /** Physical pin 23: GPA2; bidirectional. */
  "GPA2": "23",
  /** Physical pin 24: GPA3; bidirectional. */
  "GPA3": "24",
  /** Physical pin 25: GPA4; bidirectional. */
  "GPA4": "25",
  /** Physical pin 26: GPA5; bidirectional. */
  "GPA5": "26",
  /** Physical pin 27: GPA6; bidirectional. */
  "GPA6": "27",
  /** Physical pin 28: GPA7; bidirectional. */
  "GPA7": "28",
}) {
  override schema = "Interface_Expansion:MCP23S17x-x-SP";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, SPI, interrupts, w pull-ups, SSOP-28
 *
 * KiCad symbol: `Interface_Expansion:MCP23S17x-x-SS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x10.2mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001952C.pdf
 * Keywords: Microchip port-expander GPIO.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP23S17x_x_SS extends Component.withPins({
  /** Physical pin 1: GPB0; bidirectional. */
  "GPB0": "1",
  /** Physical pin 2: GPB1; bidirectional. */
  "GPB1": "2",
  /** Physical pin 3: GPB2; bidirectional. */
  "GPB2": "3",
  /** Physical pin 4: GPB3; bidirectional. */
  "GPB3": "4",
  /** Physical pin 5: GPB4; bidirectional. */
  "GPB4": "5",
  /** Physical pin 6: GPB5; bidirectional. */
  "GPB5": "6",
  /** Physical pin 7: GPB6; bidirectional. */
  "GPB6": "7",
  /** Physical pin 8: GPB7; bidirectional. */
  "GPB7": "8",
  /** Physical pin 9: V_{DD}; power_in. */
  "V_{DD}": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}": "10",
  /** Physical pin 11: ~{CS}; input. */
  "~{CS}": "11",
  /** Physical pin 12: SCK; input. */
  "SCK": "12",
  /** Physical pin 13: SI; input. */
  "SI": "13",
  /** Physical pin 14: SO; output. */
  "SO": "14",
  /** Physical pin 15: A0; input. */
  "A0": "15",
  /** Physical pin 16: A1; input. */
  "A1": "16",
  /** Physical pin 17: A2; input. */
  "A2": "17",
  /** Physical pin 18: ~{RESET}; input. */
  "~{RESET}": "18",
  /** Physical pin 19: INTB; tri_state. */
  "INTB": "19",
  /** Physical pin 20: INTA; tri_state. */
  "INTA": "20",
  /** Physical pin 21: GPA0; bidirectional. */
  "GPA0": "21",
  /** Physical pin 22: GPA1; bidirectional. */
  "GPA1": "22",
  /** Physical pin 23: GPA2; bidirectional. */
  "GPA2": "23",
  /** Physical pin 24: GPA3; bidirectional. */
  "GPA3": "24",
  /** Physical pin 25: GPA4; bidirectional. */
  "GPA4": "25",
  /** Physical pin 26: GPA5; bidirectional. */
  "GPA5": "26",
  /** Physical pin 27: GPA6; bidirectional. */
  "GPA6": "27",
  /** Physical pin 28: GPA7; bidirectional. */
  "GPA7": "28",
}) {
  override schema = "Interface_Expansion:MCP23S17x-x-SS";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, SPI interface, open-drain outpus (with configurable pull-up resistors), 1 interrupt output, VQFN-24
 *
 * KiCad symbol: `Interface_Expansion:MCP23S18x-x-MJ`. Reference prefix: `U`.
 * Footprint filters: *QFN*4x4mm?P0.5mm?EP2.6x2.6*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MCP23018-Data-Sheet-DS20002103.pdf
 * Keywords: Microchip port-expander GPIO MCP23S18-E/MJ.
 * Default footprint: Package_DFN_QFN:HVQFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP23S18x_x_MJ extends Component.withPins({
  /** Physical pin 1: GPB1; bidirectional. */
  "GPB1": "1",
  /** Physical pin 2: GPB2; bidirectional. */
  "GPB2": "2",
  /** Physical pin 3: GPB3; bidirectional. */
  "GPB3": "3",
  /** Physical pin 4: GPB4; bidirectional. */
  "GPB4": "4",
  /** Physical pin 5: GPB5; bidirectional. */
  "GPB5": "5",
  /** Physical pin 6: GPB6; bidirectional. */
  "GPB6": "6",
  /** Physical pin 7: GPB7; bidirectional. */
  "GPB7": "7",
  /** Physical pin 8: V_{DD}; power_in. */
  "V_{DD}": "8",
  /** Physical pin 9: ~{CS}; input. */
  "~{CS}": "9",
  /** Physical pin 10: SCK; input. */
  "SCK": "10",
  /** Physical pin 11: SI; input. */
  "SI": "11",
  /** Physical pin 12: SO; output. */
  "SO": "12",
  /** Physical pin 13: ~{RESET}; input. */
  "~{RESET}": "13",
  /** Physical pin 14: INTA; output. */
  "INTA": "14",
  /** Physical pin 15: GPA0; bidirectional. */
  "GPA0": "15",
  /** Physical pin 16: GPA1; bidirectional. */
  "GPA1": "16",
  /** Physical pin 17: GPA2; bidirectional. */
  "GPA2": "17",
  /** Physical pin 18: GPA3; bidirectional. */
  "GPA3": "18",
  /** Physical pin 19: GPA4; bidirectional. */
  "GPA4": "19",
  /** Physical pin 20: GPA5; bidirectional. */
  "GPA5": "20",
  /** Physical pin 21: GPA6; bidirectional. */
  "GPA6": "21",
  /** Physical pin 22: GPA7; bidirectional. */
  "GPA7": "22",
  /** Physical pin 23: V_{SS}; power_in. */
  "V_{SS}": "23",
  /** Physical pin 24: GPB0; bidirectional. */
  "GPB0": "24",
  /** Physical pin 25: EP; passive. */
  "EP": "25",
}) {
  override schema = "Interface_Expansion:MCP23S18x-x-MJ";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, SPI interface, open-drain outpus (with configurable pull-up resistors), 2 interrupt outputs, SOIC-28
 *
 * KiCad symbol: `Interface_Expansion:MCP23S18x-x-SO`. Reference prefix: `U`.
 * Footprint filters: *SOIC*7.5x17.9mm?P1.27mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MCP23018-Data-Sheet-DS20002103.pdf
 * Keywords: Microchip port-expander GPIO MCP23S18-E/SO MCP23S18T-E/SO.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP23S18x_x_SO extends Component.withPins({
  /** Physical pin 1: V_{SS}; power_in. */
  "V_{SS}": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: GPB0; bidirectional. */
  "GPB0": "3",
  /** Physical pin 4: GPB1; bidirectional. */
  "GPB1": "4",
  /** Physical pin 5: GPB2; bidirectional. */
  "GPB2": "5",
  /** Physical pin 6: GPB3; bidirectional. */
  "GPB3": "6",
  /** Physical pin 7: GPB4; bidirectional. */
  "GPB4": "7",
  /** Physical pin 8: GPB5; bidirectional. */
  "GPB5": "8",
  /** Physical pin 9: GPB6; bidirectional. */
  "GPB6": "9",
  /** Physical pin 10: GPB7; bidirectional. */
  "GPB7": "10",
  /** Physical pin 11: V_{DD}; power_in. */
  "V_{DD}": "11",
  /** Physical pin 12: ~{CS}; input. */
  "~{CS}": "12",
  /** Physical pin 13: SCK; input. */
  "SCK": "13",
  /** Physical pin 14: SI; input. */
  "SI": "14",
  /** Physical pin 15: SO; output. */
  "SO": "15",
  /** Physical pin 16: ~{RESET}; input. */
  "~{RESET}": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: INTB; output. */
  "INTB": "18",
  /** Physical pin 19: INTA; output. */
  "INTA": "19",
  /** Physical pin 20: GPA0; bidirectional. */
  "GPA0": "20",
  /** Physical pin 21: GPA1; bidirectional. */
  "GPA1": "21",
  /** Physical pin 22: GPA2; bidirectional. */
  "GPA2": "22",
  /** Physical pin 23: GPA3; bidirectional. */
  "GPA3": "23",
  /** Physical pin 24: GPA4; bidirectional. */
  "GPA4": "24",
  /** Physical pin 25: GPA5; bidirectional. */
  "GPA5": "25",
  /** Physical pin 26: GPA6; bidirectional. */
  "GPA6": "26",
  /** Physical pin 27: GPA7; bidirectional. */
  "GPA7": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
}) {
  override schema = "Interface_Expansion:MCP23S18x-x-SO";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, SPI interface, open-drain outpus (with configurable pull-up resistors), 2 interrupt outputs, DIP-28
 *
 * KiCad symbol: `Interface_Expansion:MCP23S18x-x-SP`. Reference prefix: `U`.
 * Footprint filters: DIP*7.62mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MCP23018-Data-Sheet-DS20002103.pdf
 * Keywords: Microchip port-expander GPIO MCP23S18-E/SP.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP23S18x_x_SP extends Component.withPins({
  /** Physical pin 1: V_{SS}; power_in. */
  "V_{SS}": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: GPB0; bidirectional. */
  "GPB0": "3",
  /** Physical pin 4: GPB1; bidirectional. */
  "GPB1": "4",
  /** Physical pin 5: GPB2; bidirectional. */
  "GPB2": "5",
  /** Physical pin 6: GPB3; bidirectional. */
  "GPB3": "6",
  /** Physical pin 7: GPB4; bidirectional. */
  "GPB4": "7",
  /** Physical pin 8: GPB5; bidirectional. */
  "GPB5": "8",
  /** Physical pin 9: GPB6; bidirectional. */
  "GPB6": "9",
  /** Physical pin 10: GPB7; bidirectional. */
  "GPB7": "10",
  /** Physical pin 11: V_{DD}; power_in. */
  "V_{DD}": "11",
  /** Physical pin 12: ~{CS}; input. */
  "~{CS}": "12",
  /** Physical pin 13: SCK; input. */
  "SCK": "13",
  /** Physical pin 14: SI; input. */
  "SI": "14",
  /** Physical pin 15: SO; output. */
  "SO": "15",
  /** Physical pin 16: ~{RESET}; input. */
  "~{RESET}": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: INTB; output. */
  "INTB": "18",
  /** Physical pin 19: INTA; output. */
  "INTA": "19",
  /** Physical pin 20: GPA0; bidirectional. */
  "GPA0": "20",
  /** Physical pin 21: GPA1; bidirectional. */
  "GPA1": "21",
  /** Physical pin 22: GPA2; bidirectional. */
  "GPA2": "22",
  /** Physical pin 23: GPA3; bidirectional. */
  "GPA3": "23",
  /** Physical pin 24: GPA4; bidirectional. */
  "GPA4": "24",
  /** Physical pin 25: GPA5; bidirectional. */
  "GPA5": "25",
  /** Physical pin 26: GPA6; bidirectional. */
  "GPA6": "26",
  /** Physical pin 27: GPA7; bidirectional. */
  "GPA7": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
}) {
  override schema = "Interface_Expansion:MCP23S18x-x-SP";
  override referencePrefix = "U";
}

/**
 * Dual I2C Bus Buffer, DIP8/SO8/TSSOP8
 *
 * KiCad symbol: `Interface_Expansion:P82B96`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SOIC*, SO*, TSSOP*.
 * @see http://www.nxp.com/docs/en/data-sheet/P82B96.pdf
 * Keywords: I2C Bus Buffer.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class P82B96 extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: RXD-SDA; input. */
  "RXD-SDA": "2",
  /** Physical pin 3: TXD-SDA; output. */
  "TXD-SDA": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: TXD-SCL; output. */
  "TXD-SCL": "5",
  /** Physical pin 6: RXD-SCL; input. */
  "RXD-SCL": "6",
  /** Physical pin 7: SCL; bidirectional. */
  "SCL": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Interface_Expansion:P82B96";
  override referencePrefix = "U";
}

/**
 * IO expander 40 GPIO, I2C 400kHz, Interrupt, Reset, OE, 2.3 - 5.5V, HVQFN-56
 *
 * KiCad symbol: `Interface_Expansion:PCA9506BS`. Reference prefix: `U`.
 * Footprint filters: *QFN*EP*8x8mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9505_9506.pdf
 * Keywords: I2C TWI IO expander.
 * Default footprint: Package_DFN_QFN:QFN-56-1EP_8x8mm_P0.5mm_EP4.3x4.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9506BS extends Component.withPins({
  /** Physical pin 1: IO0_4; bidirectional. */
  "IO0_4": "1",
  /** Physical pin 2: IO0_5; bidirectional. */
  "IO0_5": "2",
  /** Physical pin 3: IO0_6; bidirectional. */
  "IO0_6": "3",
  /** Physical pin 4: V_{SS}; power_in. */
  "V_{SS}_4": "4",
  /** Physical pin 5: IO0_7; bidirectional. */
  "IO0_7": "5",
  /** Physical pin 6: IO1_0; bidirectional. */
  "IO1_0": "6",
  /** Physical pin 7: IO1_1; bidirectional. */
  "IO1_1": "7",
  /** Physical pin 8: IO1_2; bidirectional. */
  "IO1_2": "8",
  /** Physical pin 9: IO1_3; bidirectional. */
  "IO1_3": "9",
  /** Physical pin 10: IO1_4; bidirectional. */
  "IO1_4": "10",
  /** Physical pin 11: V_{DD}; power_in. */
  "V_{DD}_11": "11",
  /** Physical pin 12: IO1_5; bidirectional. */
  "IO1_5": "12",
  /** Physical pin 13: IO1_6; bidirectional. */
  "IO1_6": "13",
  /** Physical pin 14: IO1_7; bidirectional. */
  "IO1_7": "14",
  /** Physical pin 15: IO2_0; bidirectional. */
  "IO2_0": "15",
  /** Physical pin 16: V_{SS}; passive. */
  "V_{SS}_16": "16",
  /** Physical pin 17: IO2_1; bidirectional. */
  "IO2_1": "17",
  /** Physical pin 18: IO2_2; bidirectional. */
  "IO2_2": "18",
  /** Physical pin 19: IO2_3; bidirectional. */
  "IO2_3": "19",
  /** Physical pin 20: A0; input. */
  "A0": "20",
  /** Physical pin 21: A1; input. */
  "A1": "21",
  /** Physical pin 22: A2; input. */
  "A2": "22",
  /** Physical pin 23: ~{OE}; input. */
  "~{OE}": "23",
  /** Physical pin 24: IO2_4; bidirectional. */
  "IO2_4": "24",
  /** Physical pin 25: IO2_5; bidirectional. */
  "IO2_5": "25",
  /** Physical pin 26: IO2_6; bidirectional. */
  "IO2_6": "26",
  /** Physical pin 27: V_{SS}; passive. */
  "V_{SS}_27": "27",
  /** Physical pin 28: IO2_7; bidirectional. */
  "IO2_7": "28",
  /** Physical pin 29: IO3_0; bidirectional. */
  "IO3_0": "29",
  /** Physical pin 30: IO3_1; bidirectional. */
  "IO3_1": "30",
  /** Physical pin 31: IO3_2; bidirectional. */
  "IO3_2": "31",
  /** Physical pin 32: V_{SS}; passive. */
  "V_{SS}_32": "32",
  /** Physical pin 33: IO3_3; bidirectional. */
  "IO3_3": "33",
  /** Physical pin 34: IO3_4; bidirectional. */
  "IO3_4": "34",
  /** Physical pin 35: IO3_5; bidirectional. */
  "IO3_5": "35",
  /** Physical pin 36: IO3_6; bidirectional. */
  "IO3_6": "36",
  /** Physical pin 37: IO3_7; bidirectional. */
  "IO3_7": "37",
  /** Physical pin 38: IO4_0; bidirectional. */
  "IO4_0": "38",
  /** Physical pin 39: V_{DD}; passive. */
  "V_{DD}_39": "39",
  /** Physical pin 40: IO4_1; bidirectional. */
  "IO4_1": "40",
  /** Physical pin 41: IO4_2; bidirectional. */
  "IO4_2": "41",
  /** Physical pin 42: IO4_3; bidirectional. */
  "IO4_3": "42",
  /** Physical pin 43: IO4_4; bidirectional. */
  "IO4_4": "43",
  /** Physical pin 44: V_{SS}; passive. */
  "V_{SS}_44": "44",
  /** Physical pin 45: IO4_5; bidirectional. */
  "IO4_5": "45",
  /** Physical pin 46: IO4_6; bidirectional. */
  "IO4_6": "46",
  /** Physical pin 47: IO4_7; bidirectional. */
  "IO4_7": "47",
  /** Physical pin 48: ~{INT}; open_collector. */
  "~{INT}": "48",
  /** Physical pin 49: ~{RESET}; input. */
  "~{RESET}": "49",
  /** Physical pin 50: SDA; bidirectional. */
  "SDA": "50",
  /** Physical pin 51: SCL; input. */
  "SCL": "51",
  /** Physical pin 52: IO0_0; bidirectional. */
  "IO0_0": "52",
  /** Physical pin 53: IO0_1; bidirectional. */
  "IO0_1": "53",
  /** Physical pin 54: IO0_2; bidirectional. */
  "IO0_2": "54",
  /** Physical pin 55: V_{SS}; passive. */
  "V_{SS}_55": "55",
  /** Physical pin 56: IO0_3; bidirectional. */
  "IO0_3": "56",
  /** Physical pin 57: V_{SS}; passive. */
  "V_{SS}_57": "57",
}) {
  override schema = "Interface_Expansion:PCA9506BS";
  override referencePrefix = "U";
}

/**
 * 5 channels I2C Hub, SO/TSSOP16
 *
 * KiCad symbol: `Interface_Expansion:PCA9516`. Reference prefix: `U`.
 * Footprint filters: SO*, SOIC*, TSSOP*.
 * @see http://www.nxp.com/docs/en/data-sheet/PCA9518.pdf
 * Keywords: I2C Hub.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9516 extends Component.withPins({
  /** Physical pin 1: SCL0; bidirectional. */
  "SCL0": "1",
  /** Physical pin 2: SDA0; bidirectional. */
  "SDA0": "2",
  /** Physical pin 3: SCL1; bidirectional. */
  "SCL1": "3",
  /** Physical pin 4: SDA1; bidirectional. */
  "SDA1": "4",
  /** Physical pin 5: EN1; input. */
  "EN1": "5",
  /** Physical pin 6: SCL2; bidirectional. */
  "SCL2": "6",
  /** Physical pin 7: SDA2; bidirectional. */
  "SDA2": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: EN2; input. */
  "EN2": "9",
  /** Physical pin 10: SCL3; bidirectional. */
  "SCL3": "10",
  /** Physical pin 11: SDA3; bidirectional. */
  "SDA3": "11",
  /** Physical pin 12: EN3; input. */
  "EN3": "12",
  /** Physical pin 13: SCL4; bidirectional. */
  "SCL4": "13",
  /** Physical pin 14: SDA4; bidirectional. */
  "SDA4": "14",
  /** Physical pin 15: EN4; input. */
  "EN4": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
  override schema = "Interface_Expansion:PCA9516";
  override referencePrefix = "U";
}

/**
 * 4-bit I2C-bus and SMBus IO port, SOIC-8
 *
 * KiCad symbol: `Interface_Expansion:PCA9536D`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/PCA9536.pdf
 * Keywords: i2c io port.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9536D extends Component.withPins({
  /** Physical pin 1: IO0; bidirectional. */
  "IO0": "1",
  /** Physical pin 2: IO1; bidirectional. */
  "IO1": "2",
  /** Physical pin 3: IO2; bidirectional. */
  "IO2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: IO3; bidirectional. */
  "IO3": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Interface_Expansion:PCA9536D";
  override referencePrefix = "U";
}

/**
 * 4-bit I2C-bus and SMBus IO port, TSSOP-8
 *
 * KiCad symbol: `Interface_Expansion:PCA9536DP`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.65mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/PCA9536.pdf
 * Keywords: i2c io port.
 * Default footprint: Package_SO:TSSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9536DP extends Component.withPins({
  /** Physical pin 1: IO0; bidirectional. */
  "IO0": "1",
  /** Physical pin 2: IO1; bidirectional. */
  "IO1": "2",
  /** Physical pin 3: IO2; bidirectional. */
  "IO2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: IO3; bidirectional. */
  "IO3": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Interface_Expansion:PCA9536DP";
  override referencePrefix = "U";
}

/**
 * 4-bit I2C-bus and SMBus IO port with interrupt and reset, TSSOP-10
 *
 * KiCad symbol: `Interface_Expansion:PCA9537`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9537.pdf
 * Keywords: i2c io port.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9537 extends Component.withPins({
  /** Physical pin 1: IO0; bidirectional. */
  "IO0": "1",
  /** Physical pin 2: IO1; bidirectional. */
  "IO1": "2",
  /** Physical pin 3: IO2; bidirectional. */
  "IO2": "3",
  /** Physical pin 4: IO3; bidirectional. */
  "IO3": "4",
  /** Physical pin 5: VSS; power_in. */
  "VSS": "5",
  /** Physical pin 6: ~{RESET}; input. */
  "~{RESET}": "6",
  /** Physical pin 7: ~{INT}; open_collector. */
  "~{INT}": "7",
  /** Physical pin 8: SCL; input. */
  "SCL": "8",
  /** Physical pin 9: SDA; bidirectional. */
  "SDA": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD": "10",
}) {
  override schema = "Interface_Expansion:PCA9537";
  override referencePrefix = "U";
}

/**
 * 8-bit I/O expander, I2C / SMBus interface, interrupt and reset pins, VQFN-16
 *
 * KiCad symbol: `Interface_Expansion:PCA9538BS`. Reference prefix: `U`.
 * Footprint filters: *VQFN*4x4mm?P0.65mm?EP2.1x2.1mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9538.pdf
 * Keywords: NXP IO-expander.
 * Default footprint: Package_DFN_QFN:NXP_VQFN-16-1EP_4x4mm_P0.65mm_EP2.1x2.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9538BS extends Component.withPins({
  /** Physical pin 1: ~{RESET}; input. */
  "~{RESET}": "1",
  /** Physical pin 2: IO0; bidirectional. */
  "IO0": "2",
  /** Physical pin 3: IO1; bidirectional. */
  "IO1": "3",
  /** Physical pin 4: IO2; bidirectional. */
  "IO2": "4",
  /** Physical pin 5: IO3; bidirectional. */
  "IO3": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}_6": "6",
  /** Physical pin 7: IO4; bidirectional. */
  "IO4": "7",
  /** Physical pin 8: IO5; bidirectional. */
  "IO5": "8",
  /** Physical pin 9: IO6; bidirectional. */
  "IO6": "9",
  /** Physical pin 10: IO7; bidirectional. */
  "IO7": "10",
  /** Physical pin 11: ~{INT}; open_collector. */
  "~{INT}": "11",
  /** Physical pin 12: SCL; input. */
  "SCL": "12",
  /** Physical pin 13: SDA; bidirectional. */
  "SDA": "13",
  /** Physical pin 14: V_{DD}; power_in. */
  "V_{DD}": "14",
  /** Physical pin 15: A0; input. */
  "A0": "15",
  /** Physical pin 16: A1; input. */
  "A1": "16",
  /** Physical pin 17: V_{SS}; passive. */
  "V_{SS}_17": "17",
}) {
  override schema = "Interface_Expansion:PCA9538BS";
  override referencePrefix = "U";
}

/**
 * 8-bit I/O expander, I2C / SMBus interface, interrupt and reset pins, SOIC-16
 *
 * KiCad symbol: `Interface_Expansion:PCA9538D`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x9.9mm?P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9538.pdf
 * Keywords: NXP IO-expander.
 * Default footprint: Package_SO:SO-16_3.9x9.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9538D extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: IO0; bidirectional. */
  "IO0": "4",
  /** Physical pin 5: IO1; bidirectional. */
  "IO1": "5",
  /** Physical pin 6: IO2; bidirectional. */
  "IO2": "6",
  /** Physical pin 7: IO3; bidirectional. */
  "IO3": "7",
  /** Physical pin 8: V_{SS}; power_in. */
  "V_{SS}": "8",
  /** Physical pin 9: IO4; bidirectional. */
  "IO4": "9",
  /** Physical pin 10: IO5; bidirectional. */
  "IO5": "10",
  /** Physical pin 11: IO6; bidirectional. */
  "IO6": "11",
  /** Physical pin 12: IO7; bidirectional. */
  "IO7": "12",
  /** Physical pin 13: ~{INT}; open_collector. */
  "~{INT}": "13",
  /** Physical pin 14: SCL; input. */
  "SCL": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: V_{DD}; power_in. */
  "V_{DD}": "16",
}) {
  override schema = "Interface_Expansion:PCA9538D";
  override referencePrefix = "U";
}

/**
 * 8-bit I/O expander, I2C / SMBus interface, interrupt and reset pins, TSSOP-16
 *
 * KiCad symbol: `Interface_Expansion:PCA9538PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm?P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9538.pdf
 * Keywords: NXP IO-expander.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9538PW extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: IO0; bidirectional. */
  "IO0": "4",
  /** Physical pin 5: IO1; bidirectional. */
  "IO1": "5",
  /** Physical pin 6: IO2; bidirectional. */
  "IO2": "6",
  /** Physical pin 7: IO3; bidirectional. */
  "IO3": "7",
  /** Physical pin 8: V_{SS}; power_in. */
  "V_{SS}": "8",
  /** Physical pin 9: IO4; bidirectional. */
  "IO4": "9",
  /** Physical pin 10: IO5; bidirectional. */
  "IO5": "10",
  /** Physical pin 11: IO6; bidirectional. */
  "IO6": "11",
  /** Physical pin 12: IO7; bidirectional. */
  "IO7": "12",
  /** Physical pin 13: ~{INT}; open_collector. */
  "~{INT}": "13",
  /** Physical pin 14: SCL; input. */
  "SCL": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: V_{DD}; power_in. */
  "V_{DD}": "16",
}) {
  override schema = "Interface_Expansion:PCA9538PW";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C / SMBus interface, interrupt and reset pins, VQFN-24
 *
 * KiCad symbol: `Interface_Expansion:PCA9539xBS`. Reference prefix: `U`.
 * Footprint filters: *VQFN*4x4mm?P0.5mm?EP2.1x2.1mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9539_PCA9539R.pdf
 * Keywords: NXP IO-expander PCA9539BS PCA9539RBS.
 * Default footprint: Package_DFN_QFN:HVQFN-24-1EP_4x4mm_P0.5mm_EP2.1x2.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9539xBS extends Component.withPins({
  /** Physical pin 1: IO0_0; bidirectional. */
  "IO0_0": "1",
  /** Physical pin 2: IO0_1; bidirectional. */
  "IO0_1": "2",
  /** Physical pin 3: IO0_2; bidirectional. */
  "IO0_2": "3",
  /** Physical pin 4: IO0_3; bidirectional. */
  "IO0_3": "4",
  /** Physical pin 5: IO0_4; bidirectional. */
  "IO0_4": "5",
  /** Physical pin 6: IO0_5; bidirectional. */
  "IO0_5": "6",
  /** Physical pin 7: IO0_6; bidirectional. */
  "IO0_6": "7",
  /** Physical pin 8: IO0_7; bidirectional. */
  "IO0_7": "8",
  /** Physical pin 9: V_{SS}; power_in. */
  "V_{SS}_9": "9",
  /** Physical pin 10: IO1_0; bidirectional. */
  "IO1_0": "10",
  /** Physical pin 11: IO1_1; bidirectional. */
  "IO1_1": "11",
  /** Physical pin 12: IO1_2; bidirectional. */
  "IO1_2": "12",
  /** Physical pin 13: IO1_3; bidirectional. */
  "IO1_3": "13",
  /** Physical pin 14: IO1_4; bidirectional. */
  "IO1_4": "14",
  /** Physical pin 15: IO1_5; bidirectional. */
  "IO1_5": "15",
  /** Physical pin 16: IO1_6; bidirectional. */
  "IO1_6": "16",
  /** Physical pin 17: IO1_7; bidirectional. */
  "IO1_7": "17",
  /** Physical pin 18: A0; input. */
  "A0": "18",
  /** Physical pin 19: SCL; input. */
  "SCL": "19",
  /** Physical pin 20: SDA; bidirectional. */
  "SDA": "20",
  /** Physical pin 21: V_{DD}; power_in. */
  "V_{DD}": "21",
  /** Physical pin 22: ~{INT}; open_collector. */
  "~{INT}": "22",
  /** Physical pin 23: A1; input. */
  "A1": "23",
  /** Physical pin 24: ~{RESET}; input. */
  "~{RESET}": "24",
  /** Physical pin 25: V_{SS}; passive. */
  "V_{SS}_25": "25",
}) {
  override schema = "Interface_Expansion:PCA9539xBS";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C / SMBus interface, interrupt and reset pins, SOIC-24
 *
 * KiCad symbol: `Interface_Expansion:PCA9539xD`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x15.4mm?P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9539_PCA9539R.pdf
 * Keywords: NXP IO-expander PCA9539D PCA9539RD.
 * Default footprint: Package_SO:SOIC-24W_7.5x15.4mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9539xD extends Component.withPins({
  /** Physical pin 1: ~{INT}; open_collector. */
  "~{INT}": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: IO0_0; bidirectional. */
  "IO0_0": "4",
  /** Physical pin 5: IO0_1; bidirectional. */
  "IO0_1": "5",
  /** Physical pin 6: IO0_2; bidirectional. */
  "IO0_2": "6",
  /** Physical pin 7: IO0_3; bidirectional. */
  "IO0_3": "7",
  /** Physical pin 8: IO0_4; bidirectional. */
  "IO0_4": "8",
  /** Physical pin 9: IO0_5; bidirectional. */
  "IO0_5": "9",
  /** Physical pin 10: IO0_6; bidirectional. */
  "IO0_6": "10",
  /** Physical pin 11: IO0_7; bidirectional. */
  "IO0_7": "11",
  /** Physical pin 12: V_{SS}; power_in. */
  "V_{SS}": "12",
  /** Physical pin 13: IO1_0; bidirectional. */
  "IO1_0": "13",
  /** Physical pin 14: IO1_1; bidirectional. */
  "IO1_1": "14",
  /** Physical pin 15: IO1_2; bidirectional. */
  "IO1_2": "15",
  /** Physical pin 16: IO1_3; bidirectional. */
  "IO1_3": "16",
  /** Physical pin 17: IO1_4; bidirectional. */
  "IO1_4": "17",
  /** Physical pin 18: IO1_5; bidirectional. */
  "IO1_5": "18",
  /** Physical pin 19: IO1_6; bidirectional. */
  "IO1_6": "19",
  /** Physical pin 20: IO1_7; bidirectional. */
  "IO1_7": "20",
  /** Physical pin 21: A0; input. */
  "A0": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: V_{DD}; power_in. */
  "V_{DD}": "24",
}) {
  override schema = "Interface_Expansion:PCA9539xD";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C / SMBus interface, interrupt and reset pins, TSSOP-24
 *
 * KiCad symbol: `Interface_Expansion:PCA9539xPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm?P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9539_PCA9539R.pdf
 * Keywords: NXP IO-expander PCA9539PW PCA9539RPW.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9539xPW extends Component.withPins({
  /** Physical pin 1: ~{INT}; open_collector. */
  "~{INT}": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: IO0_0; bidirectional. */
  "IO0_0": "4",
  /** Physical pin 5: IO0_1; bidirectional. */
  "IO0_1": "5",
  /** Physical pin 6: IO0_2; bidirectional. */
  "IO0_2": "6",
  /** Physical pin 7: IO0_3; bidirectional. */
  "IO0_3": "7",
  /** Physical pin 8: IO0_4; bidirectional. */
  "IO0_4": "8",
  /** Physical pin 9: IO0_5; bidirectional. */
  "IO0_5": "9",
  /** Physical pin 10: IO0_6; bidirectional. */
  "IO0_6": "10",
  /** Physical pin 11: IO0_7; bidirectional. */
  "IO0_7": "11",
  /** Physical pin 12: V_{SS}; power_in. */
  "V_{SS}": "12",
  /** Physical pin 13: IO1_0; bidirectional. */
  "IO1_0": "13",
  /** Physical pin 14: IO1_1; bidirectional. */
  "IO1_1": "14",
  /** Physical pin 15: IO1_2; bidirectional. */
  "IO1_2": "15",
  /** Physical pin 16: IO1_3; bidirectional. */
  "IO1_3": "16",
  /** Physical pin 17: IO1_4; bidirectional. */
  "IO1_4": "17",
  /** Physical pin 18: IO1_5; bidirectional. */
  "IO1_5": "18",
  /** Physical pin 19: IO1_6; bidirectional. */
  "IO1_6": "19",
  /** Physical pin 20: IO1_7; bidirectional. */
  "IO1_7": "20",
  /** Physical pin 21: A0; input. */
  "A0": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: V_{DD}; power_in. */
  "V_{DD}": "24",
}) {
  override schema = "Interface_Expansion:PCA9539xPW";
  override referencePrefix = "U";
}

/**
 * 4-channel I2C-bus multiplexer with interrupt logic, SOIC-20
 *
 * KiCad symbol: `Interface_Expansion:PCA9544AD`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/PCA9544A.pdf
 * Keywords: i2c multiplexer.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9544AD extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: ~{INT0}; input. */
  "~{INT0}": "4",
  /** Physical pin 5: SD0; bidirectional. */
  "SD0": "5",
  /** Physical pin 6: SC0; output. */
  "SC0": "6",
  /** Physical pin 7: ~{INT1}; input. */
  "~{INT1}": "7",
  /** Physical pin 8: SD1; bidirectional. */
  "SD1": "8",
  /** Physical pin 9: SC1; output. */
  "SC1": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS": "10",
  /** Physical pin 11: ~{INT2}; input. */
  "~{INT2}": "11",
  /** Physical pin 12: SD2; bidirectional. */
  "SD2": "12",
  /** Physical pin 13: SC2; output. */
  "SC2": "13",
  /** Physical pin 14: ~{INT3}; input. */
  "~{INT3}": "14",
  /** Physical pin 15: SD3; bidirectional. */
  "SD3": "15",
  /** Physical pin 16: SC3; output. */
  "SC3": "16",
  /** Physical pin 17: ~{INT}; open_collector. */
  "~{INT}": "17",
  /** Physical pin 18: SCL; input. */
  "SCL": "18",
  /** Physical pin 19: SDA; bidirectional. */
  "SDA": "19",
  /** Physical pin 20: VDD; power_in. */
  "VDD": "20",
}) {
  override schema = "Interface_Expansion:PCA9544AD";
  override referencePrefix = "U";
}

/**
 * 4-channel I2C-bus multiplexer with interrupt logic, TSSOP-20
 *
 * KiCad symbol: `Interface_Expansion:PCA9544APW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/PCA9544A.pdf
 * Keywords: i2c multiplexer.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9544APW extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: ~{INT0}; input. */
  "~{INT0}": "4",
  /** Physical pin 5: SD0; bidirectional. */
  "SD0": "5",
  /** Physical pin 6: SC0; output. */
  "SC0": "6",
  /** Physical pin 7: ~{INT1}; input. */
  "~{INT1}": "7",
  /** Physical pin 8: SD1; bidirectional. */
  "SD1": "8",
  /** Physical pin 9: SC1; output. */
  "SC1": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS": "10",
  /** Physical pin 11: ~{INT2}; input. */
  "~{INT2}": "11",
  /** Physical pin 12: SD2; bidirectional. */
  "SD2": "12",
  /** Physical pin 13: SC2; output. */
  "SC2": "13",
  /** Physical pin 14: ~{INT3}; input. */
  "~{INT3}": "14",
  /** Physical pin 15: SD3; bidirectional. */
  "SD3": "15",
  /** Physical pin 16: SC3; output. */
  "SC3": "16",
  /** Physical pin 17: ~{INT}; open_collector. */
  "~{INT}": "17",
  /** Physical pin 18: SCL; input. */
  "SCL": "18",
  /** Physical pin 19: SDA; bidirectional. */
  "SDA": "19",
  /** Physical pin 20: VDD; power_in. */
  "VDD": "20",
}) {
  override schema = "Interface_Expansion:PCA9544APW";
  override referencePrefix = "U";
}

/**
 * Low voltage 8-channel I2C switch with reset, HVQFN-24
 *
 * KiCad symbol: `Interface_Expansion:PCA9547BS`. Reference prefix: `U`.
 * Footprint filters: HVQFN*4x4mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9547.pdf
 * Keywords: Low voltage 8-channel I2C switch with reset.
 * Default footprint: Package_DFN_QFN:HVQFN-24-1EP_4x4mm_P0.5mm_EP2.1x2.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9547BS extends Component.withPins({
  /** Physical pin 1: SD0; bidirectional. */
  "SD0": "1",
  /** Physical pin 2: SC0; output. */
  "SC0": "2",
  /** Physical pin 3: SD1; bidirectional. */
  "SD1": "3",
  /** Physical pin 4: SC1; output. */
  "SC1": "4",
  /** Physical pin 5: SD2; bidirectional. */
  "SD2": "5",
  /** Physical pin 6: SC2; output. */
  "SC2": "6",
  /** Physical pin 7: SD3; bidirectional. */
  "SD3": "7",
  /** Physical pin 8: SC3; output. */
  "SC3": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: SD4; bidirectional. */
  "SD4": "10",
  /** Physical pin 11: SC4; output. */
  "SC4": "11",
  /** Physical pin 12: SD5; bidirectional. */
  "SD5": "12",
  /** Physical pin 13: SC5; output. */
  "SC5": "13",
  /** Physical pin 14: SD6; bidirectional. */
  "SD6": "14",
  /** Physical pin 15: SC6; output. */
  "SC6": "15",
  /** Physical pin 16: SD7; bidirectional. */
  "SD7": "16",
  /** Physical pin 17: SC7; output. */
  "SC7": "17",
  /** Physical pin 18: A2; input. */
  "A2": "18",
  /** Physical pin 19: SCL; input. */
  "SCL": "19",
  /** Physical pin 20: SDA; bidirectional. */
  "SDA": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: A0; input. */
  "A0": "22",
  /** Physical pin 23: A1; input. */
  "A1": "23",
  /** Physical pin 24: ~{RESET}; input. */
  "~{RESET}": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
  override schema = "Interface_Expansion:PCA9547BS";
  override referencePrefix = "U";
}

/**
 * Low voltage 8-channel I2C switch with reset, SSOP-24
 *
 * KiCad symbol: `Interface_Expansion:PCA9548ADB`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x8.2mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/pca9548a.pdf
 * Keywords: Low voltage 8-channel I2C switch with reset.
 * Default footprint: Package_SO:SSOP-24_5.3x8.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9548ADB extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: SD0; bidirectional. */
  "SD0": "4",
  /** Physical pin 5: SC0; output. */
  "SC0": "5",
  /** Physical pin 6: SD1; bidirectional. */
  "SD1": "6",
  /** Physical pin 7: SC1; output. */
  "SC1": "7",
  /** Physical pin 8: SD2; bidirectional. */
  "SD2": "8",
  /** Physical pin 9: SC2; output. */
  "SC2": "9",
  /** Physical pin 10: SD3; bidirectional. */
  "SD3": "10",
  /** Physical pin 11: SC3; output. */
  "SC3": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: SD4; bidirectional. */
  "SD4": "13",
  /** Physical pin 14: SC4; output. */
  "SC4": "14",
  /** Physical pin 15: SD5; bidirectional. */
  "SD5": "15",
  /** Physical pin 16: SC5; output. */
  "SC5": "16",
  /** Physical pin 17: SD6; bidirectional. */
  "SD6": "17",
  /** Physical pin 18: SC6; output. */
  "SC6": "18",
  /** Physical pin 19: SD7; bidirectional. */
  "SD7": "19",
  /** Physical pin 20: SC7; output. */
  "SC7": "20",
  /** Physical pin 21: A2; input. */
  "A2": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
}) {
  override schema = "Interface_Expansion:PCA9548ADB";
  override referencePrefix = "U";
}

/**
 * Low voltage 8-channel I2C switch with reset, SO-24
 *
 * KiCad symbol: `Interface_Expansion:PCA9547D`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x15.4mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9547.pdf
 * Keywords: Low voltage 8-channel I2C switch with reset.
 * Default footprint: Package_SO:SOIC-24W_7.5x15.4mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9547D extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: SD0; bidirectional. */
  "SD0": "4",
  /** Physical pin 5: SC0; output. */
  "SC0": "5",
  /** Physical pin 6: SD1; bidirectional. */
  "SD1": "6",
  /** Physical pin 7: SC1; output. */
  "SC1": "7",
  /** Physical pin 8: SD2; bidirectional. */
  "SD2": "8",
  /** Physical pin 9: SC2; output. */
  "SC2": "9",
  /** Physical pin 10: SD3; bidirectional. */
  "SD3": "10",
  /** Physical pin 11: SC3; output. */
  "SC3": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: SD4; bidirectional. */
  "SD4": "13",
  /** Physical pin 14: SC4; output. */
  "SC4": "14",
  /** Physical pin 15: SD5; bidirectional. */
  "SD5": "15",
  /** Physical pin 16: SC5; output. */
  "SC5": "16",
  /** Physical pin 17: SD6; bidirectional. */
  "SD6": "17",
  /** Physical pin 18: SC6; output. */
  "SC6": "18",
  /** Physical pin 19: SD7; bidirectional. */
  "SD7": "19",
  /** Physical pin 20: SC7; output. */
  "SC7": "20",
  /** Physical pin 21: A2; input. */
  "A2": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
}) {
  override schema = "Interface_Expansion:PCA9547D";
  override referencePrefix = "U";
}

/**
 * Low voltage 8-channel I2C switch with reset, TSSOP-24
 *
 * KiCad symbol: `Interface_Expansion:PCA9547PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9547.pdf
 * Keywords: Low voltage 8-channel I2C switch with reset.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9547PW extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: SD0; bidirectional. */
  "SD0": "4",
  /** Physical pin 5: SC0; output. */
  "SC0": "5",
  /** Physical pin 6: SD1; bidirectional. */
  "SD1": "6",
  /** Physical pin 7: SC1; output. */
  "SC1": "7",
  /** Physical pin 8: SD2; bidirectional. */
  "SD2": "8",
  /** Physical pin 9: SC2; output. */
  "SC2": "9",
  /** Physical pin 10: SD3; bidirectional. */
  "SD3": "10",
  /** Physical pin 11: SC3; output. */
  "SC3": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: SD4; bidirectional. */
  "SD4": "13",
  /** Physical pin 14: SC4; output. */
  "SC4": "14",
  /** Physical pin 15: SD5; bidirectional. */
  "SD5": "15",
  /** Physical pin 16: SC5; output. */
  "SC5": "16",
  /** Physical pin 17: SD6; bidirectional. */
  "SD6": "17",
  /** Physical pin 18: SC6; output. */
  "SC6": "18",
  /** Physical pin 19: SD7; bidirectional. */
  "SD7": "19",
  /** Physical pin 20: SC7; output. */
  "SC7": "20",
  /** Physical pin 21: A2; input. */
  "A2": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
}) {
  override schema = "Interface_Expansion:PCA9547PW";
  override referencePrefix = "U";
}

/**
 * Low voltage 8-channel I2C switch with reset, SOIC-24
 *
 * KiCad symbol: `Interface_Expansion:PCA9548ADW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x15.4mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/pca9548a.pdf
 * Keywords: Low voltage 8-channel I2C switch with reset.
 * Default footprint: Package_SO:SOIC-24W_7.5x15.4mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9548ADW extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: SD0; bidirectional. */
  "SD0": "4",
  /** Physical pin 5: SC0; output. */
  "SC0": "5",
  /** Physical pin 6: SD1; bidirectional. */
  "SD1": "6",
  /** Physical pin 7: SC1; output. */
  "SC1": "7",
  /** Physical pin 8: SD2; bidirectional. */
  "SD2": "8",
  /** Physical pin 9: SC2; output. */
  "SC2": "9",
  /** Physical pin 10: SD3; bidirectional. */
  "SD3": "10",
  /** Physical pin 11: SC3; output. */
  "SC3": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: SD4; bidirectional. */
  "SD4": "13",
  /** Physical pin 14: SC4; output. */
  "SC4": "14",
  /** Physical pin 15: SD5; bidirectional. */
  "SD5": "15",
  /** Physical pin 16: SC5; output. */
  "SC5": "16",
  /** Physical pin 17: SD6; bidirectional. */
  "SD6": "17",
  /** Physical pin 18: SC6; output. */
  "SC6": "18",
  /** Physical pin 19: SD7; bidirectional. */
  "SD7": "19",
  /** Physical pin 20: SC7; output. */
  "SC7": "20",
  /** Physical pin 21: A2; input. */
  "A2": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
}) {
  override schema = "Interface_Expansion:PCA9548ADW";
  override referencePrefix = "U";
}

/**
 * Low voltage 8-channel I2C switch with reset, TSSOP-24
 *
 * KiCad symbol: `Interface_Expansion:TCA9548APWR`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tca9548a.pdf
 * Keywords: Low voltage 8-channel I2C switch with reset.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9548APWR extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: SD0; bidirectional. */
  "SD0": "4",
  /** Physical pin 5: SC0; output. */
  "SC0": "5",
  /** Physical pin 6: SD1; bidirectional. */
  "SD1": "6",
  /** Physical pin 7: SC1; output. */
  "SC1": "7",
  /** Physical pin 8: SD2; bidirectional. */
  "SD2": "8",
  /** Physical pin 9: SC2; output. */
  "SC2": "9",
  /** Physical pin 10: SD3; bidirectional. */
  "SD3": "10",
  /** Physical pin 11: SC3; output. */
  "SC3": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: SD4; bidirectional. */
  "SD4": "13",
  /** Physical pin 14: SC4; output. */
  "SC4": "14",
  /** Physical pin 15: SD5; bidirectional. */
  "SD5": "15",
  /** Physical pin 16: SC5; output. */
  "SC5": "16",
  /** Physical pin 17: SD6; bidirectional. */
  "SD6": "17",
  /** Physical pin 18: SC6; output. */
  "SC6": "18",
  /** Physical pin 19: SD7; bidirectional. */
  "SD7": "19",
  /** Physical pin 20: SC7; output. */
  "SC7": "20",
  /** Physical pin 21: A2; input. */
  "A2": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
}) {
  override schema = "Interface_Expansion:TCA9548APWR";
  override referencePrefix = "U";
}

/**
 * Low voltage 8-channel I2C switch with reset, TSSOP-24
 *
 * KiCad symbol: `Interface_Expansion:PCA9548APW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/pca9548a.pdf
 * Keywords: Low voltage 8-channel I2C switch with reset.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9548APW extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: SD0; bidirectional. */
  "SD0": "4",
  /** Physical pin 5: SC0; output. */
  "SC0": "5",
  /** Physical pin 6: SD1; bidirectional. */
  "SD1": "6",
  /** Physical pin 7: SC1; output. */
  "SC1": "7",
  /** Physical pin 8: SD2; bidirectional. */
  "SD2": "8",
  /** Physical pin 9: SC2; output. */
  "SC2": "9",
  /** Physical pin 10: SD3; bidirectional. */
  "SD3": "10",
  /** Physical pin 11: SC3; output. */
  "SC3": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: SD4; bidirectional. */
  "SD4": "13",
  /** Physical pin 14: SC4; output. */
  "SC4": "14",
  /** Physical pin 15: SD5; bidirectional. */
  "SD5": "15",
  /** Physical pin 16: SC5; output. */
  "SC5": "16",
  /** Physical pin 17: SD6; bidirectional. */
  "SD6": "17",
  /** Physical pin 18: SC6; output. */
  "SC6": "18",
  /** Physical pin 19: SD7; bidirectional. */
  "SD7": "19",
  /** Physical pin 20: SC7; output. */
  "SC7": "20",
  /** Physical pin 21: A2; input. */
  "A2": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
}) {
  override schema = "Interface_Expansion:PCA9548APW";
  override referencePrefix = "U";
}

/**
 * Low voltage 8-channel I2C switch with reset, VQFN-24
 *
 * KiCad symbol: `Interface_Expansion:TCA9548AMRGER`. Reference prefix: `U`.
 * Footprint filters: Texas*RGE0024C*.
 * @see http://www.ti.com/lit/ds/symlink/tca9548a.pdf
 * Keywords: Low voltage 8-channel I2C switch with reset.
 * Default footprint: Package_DFN_QFN:Texas_RGE0024C_VQFN-24-1EP_4x4mm_P0.5mm_EP2.1x2.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9548AMRGER extends Component.withPins({
  /** Physical pin 1: SD0; bidirectional. */
  "SD0": "1",
  /** Physical pin 2: SC0; output. */
  "SC0": "2",
  /** Physical pin 3: SD1; bidirectional. */
  "SD1": "3",
  /** Physical pin 4: SC1; output. */
  "SC1": "4",
  /** Physical pin 5: SD2; bidirectional. */
  "SD2": "5",
  /** Physical pin 6: SC2; output. */
  "SC2": "6",
  /** Physical pin 7: SD3; bidirectional. */
  "SD3": "7",
  /** Physical pin 8: SC3; output. */
  "SC3": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: SD4; bidirectional. */
  "SD4": "10",
  /** Physical pin 11: SC4; output. */
  "SC4": "11",
  /** Physical pin 12: SD5; bidirectional. */
  "SD5": "12",
  /** Physical pin 13: SC5; output. */
  "SC5": "13",
  /** Physical pin 14: SD6; bidirectional. */
  "SD6": "14",
  /** Physical pin 15: SC6; output. */
  "SC6": "15",
  /** Physical pin 16: SD7; bidirectional. */
  "SD7": "16",
  /** Physical pin 17: SC7; output. */
  "SC7": "17",
  /** Physical pin 18: A2; input. */
  "A2": "18",
  /** Physical pin 19: SCL; input. */
  "SCL": "19",
  /** Physical pin 20: SDA; bidirectional. */
  "SDA": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: A0; input. */
  "A0": "22",
  /** Physical pin 23: A1; input. */
  "A1": "23",
  /** Physical pin 24: ~{RESET}; input. */
  "~{RESET}": "24",
  /** Physical pin 25: 1EP; no_connect. */
  "1EP": "25",
}) {
  override schema = "Interface_Expansion:TCA9548AMRGER";
  override referencePrefix = "U";
}

/**
 * Low voltage 8-channel I2C switch with reset, VQFN-24
 *
 * KiCad symbol: `Interface_Expansion:PCA9548ARGE`. Reference prefix: `U`.
 * Footprint filters: Texas*RGE0024C*.
 * @see http://www.ti.com/lit/ds/symlink/pca9548a.pdf
 * Keywords: Low voltage 8-channel I2C switch with reset.
 * Default footprint: Package_DFN_QFN:Texas_RGE0024C_VQFN-24-1EP_4x4mm_P0.5mm_EP2.1x2.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9548ARGE extends Component.withPins({
  /** Physical pin 1: SD0; bidirectional. */
  "SD0": "1",
  /** Physical pin 2: SC0; output. */
  "SC0": "2",
  /** Physical pin 3: SD1; bidirectional. */
  "SD1": "3",
  /** Physical pin 4: SC1; output. */
  "SC1": "4",
  /** Physical pin 5: SD2; bidirectional. */
  "SD2": "5",
  /** Physical pin 6: SC2; output. */
  "SC2": "6",
  /** Physical pin 7: SD3; bidirectional. */
  "SD3": "7",
  /** Physical pin 8: SC3; output. */
  "SC3": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: SD4; bidirectional. */
  "SD4": "10",
  /** Physical pin 11: SC4; output. */
  "SC4": "11",
  /** Physical pin 12: SD5; bidirectional. */
  "SD5": "12",
  /** Physical pin 13: SC5; output. */
  "SC5": "13",
  /** Physical pin 14: SD6; bidirectional. */
  "SD6": "14",
  /** Physical pin 15: SC6; output. */
  "SC6": "15",
  /** Physical pin 16: SD7; bidirectional. */
  "SD7": "16",
  /** Physical pin 17: SC7; output. */
  "SC7": "17",
  /** Physical pin 18: A2; input. */
  "A2": "18",
  /** Physical pin 19: SCL; input. */
  "SCL": "19",
  /** Physical pin 20: SDA; bidirectional. */
  "SDA": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: A0; input. */
  "A0": "22",
  /** Physical pin 23: A1; input. */
  "A1": "23",
  /** Physical pin 24: ~{RESET}; input. */
  "~{RESET}": "24",
  /** Physical pin 25: 1EP; no_connect. */
  "1EP": "25",
}) {
  override schema = "Interface_Expansion:PCA9548ARGE";
  override referencePrefix = "U";
}

/**
 * IO expander 16 GPIO, I2C 400kHz, Interrupt, 2.3 - 5.5V, SOIC-24
 *
 * KiCad symbol: `Interface_Expansion:PCA9555D`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x15.4mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9555.pdf
 * Keywords: I2C TWI IO expander.
 * Default footprint: Package_SO:SOIC-24W_7.5x15.4mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9555D extends Component.withPins({
  /** Physical pin 1: ~{INT}; open_collector. */
  "~{INT}": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: IO0_0; bidirectional. */
  "IO0_0": "4",
  /** Physical pin 5: IO0_1; bidirectional. */
  "IO0_1": "5",
  /** Physical pin 6: IO0_2; bidirectional. */
  "IO0_2": "6",
  /** Physical pin 7: IO0_3; bidirectional. */
  "IO0_3": "7",
  /** Physical pin 8: IO0_4; bidirectional. */
  "IO0_4": "8",
  /** Physical pin 9: IO0_5; bidirectional. */
  "IO0_5": "9",
  /** Physical pin 10: IO0_6; bidirectional. */
  "IO0_6": "10",
  /** Physical pin 11: IO0_7; bidirectional. */
  "IO0_7": "11",
  /** Physical pin 12: VSS; power_in. */
  "VSS": "12",
  /** Physical pin 13: IO1_0; bidirectional. */
  "IO1_0": "13",
  /** Physical pin 14: IO1_1; bidirectional. */
  "IO1_1": "14",
  /** Physical pin 15: IO1_2; bidirectional. */
  "IO1_2": "15",
  /** Physical pin 16: IO1_3; bidirectional. */
  "IO1_3": "16",
  /** Physical pin 17: IO1_4; bidirectional. */
  "IO1_4": "17",
  /** Physical pin 18: IO1_5; bidirectional. */
  "IO1_5": "18",
  /** Physical pin 19: IO1_6; bidirectional. */
  "IO1_6": "19",
  /** Physical pin 20: IO1_7; bidirectional. */
  "IO1_7": "20",
  /** Physical pin 21: A0; input. */
  "A0": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: VDD; power_in. */
  "VDD": "24",
}) {
  override schema = "Interface_Expansion:PCA9555D";
  override referencePrefix = "U";
}

/**
 * IO expander 16 GPIO, I2C 400kHz, Interrupt, 2.3 - 5.5V, SSOP-24
 *
 * KiCad symbol: `Interface_Expansion:PCA9555DB`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x8.2mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9555.pdf
 * Keywords: I2C TWI IO expander.
 * Default footprint: Package_SO:SSOP-24_5.3x8.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9555DB extends Component.withPins({
  /** Physical pin 1: ~{INT}; open_collector. */
  "~{INT}": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: IO0_0; bidirectional. */
  "IO0_0": "4",
  /** Physical pin 5: IO0_1; bidirectional. */
  "IO0_1": "5",
  /** Physical pin 6: IO0_2; bidirectional. */
  "IO0_2": "6",
  /** Physical pin 7: IO0_3; bidirectional. */
  "IO0_3": "7",
  /** Physical pin 8: IO0_4; bidirectional. */
  "IO0_4": "8",
  /** Physical pin 9: IO0_5; bidirectional. */
  "IO0_5": "9",
  /** Physical pin 10: IO0_6; bidirectional. */
  "IO0_6": "10",
  /** Physical pin 11: IO0_7; bidirectional. */
  "IO0_7": "11",
  /** Physical pin 12: VSS; power_in. */
  "VSS": "12",
  /** Physical pin 13: IO1_0; bidirectional. */
  "IO1_0": "13",
  /** Physical pin 14: IO1_1; bidirectional. */
  "IO1_1": "14",
  /** Physical pin 15: IO1_2; bidirectional. */
  "IO1_2": "15",
  /** Physical pin 16: IO1_3; bidirectional. */
  "IO1_3": "16",
  /** Physical pin 17: IO1_4; bidirectional. */
  "IO1_4": "17",
  /** Physical pin 18: IO1_5; bidirectional. */
  "IO1_5": "18",
  /** Physical pin 19: IO1_6; bidirectional. */
  "IO1_6": "19",
  /** Physical pin 20: IO1_7; bidirectional. */
  "IO1_7": "20",
  /** Physical pin 21: A0; input. */
  "A0": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: VDD; power_in. */
  "VDD": "24",
}) {
  override schema = "Interface_Expansion:PCA9555DB";
  override referencePrefix = "U";
}

/**
 * IO expander 16 GPIO, I2C 400kHz, Interrupt, 2.3 - 5.5V, TSSOP-24
 *
 * KiCad symbol: `Interface_Expansion:PCA9555PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9555.pdf
 * Keywords: I2C TWI IO expander.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9555PW extends Component.withPins({
  /** Physical pin 1: ~{INT}; open_collector. */
  "~{INT}": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: IO0_0; bidirectional. */
  "IO0_0": "4",
  /** Physical pin 5: IO0_1; bidirectional. */
  "IO0_1": "5",
  /** Physical pin 6: IO0_2; bidirectional. */
  "IO0_2": "6",
  /** Physical pin 7: IO0_3; bidirectional. */
  "IO0_3": "7",
  /** Physical pin 8: IO0_4; bidirectional. */
  "IO0_4": "8",
  /** Physical pin 9: IO0_5; bidirectional. */
  "IO0_5": "9",
  /** Physical pin 10: IO0_6; bidirectional. */
  "IO0_6": "10",
  /** Physical pin 11: IO0_7; bidirectional. */
  "IO0_7": "11",
  /** Physical pin 12: VSS; power_in. */
  "VSS": "12",
  /** Physical pin 13: IO1_0; bidirectional. */
  "IO1_0": "13",
  /** Physical pin 14: IO1_1; bidirectional. */
  "IO1_1": "14",
  /** Physical pin 15: IO1_2; bidirectional. */
  "IO1_2": "15",
  /** Physical pin 16: IO1_3; bidirectional. */
  "IO1_3": "16",
  /** Physical pin 17: IO1_4; bidirectional. */
  "IO1_4": "17",
  /** Physical pin 18: IO1_5; bidirectional. */
  "IO1_5": "18",
  /** Physical pin 19: IO1_6; bidirectional. */
  "IO1_6": "19",
  /** Physical pin 20: IO1_7; bidirectional. */
  "IO1_7": "20",
  /** Physical pin 21: A0; input. */
  "A0": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: VDD; power_in. */
  "VDD": "24",
}) {
  override schema = "Interface_Expansion:PCA9555PW";
  override referencePrefix = "U";
}

/**
 * 8-bit I2C-bus and SMBus I/O port with reset, HVQFN-16
 *
 * KiCad symbol: `Interface_Expansion:PCA9557BS`. Reference prefix: `U`.
 * Footprint filters: HVQFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9557.pdf
 * Keywords: SMBUS I2C Expander.
 * Default footprint: Package_DFN_QFN:HVQFN-16-1EP_3x3mm_P0.5mm_EP1.5x1.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9557BS extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: IO0; bidirectional. */
  "IO0": "4",
  /** Physical pin 5: IO1; bidirectional. */
  "IO1": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS": "6",
  /** Physical pin 7: IO2; bidirectional. */
  "IO2": "7",
  /** Physical pin 8: IO3; bidirectional. */
  "IO3": "8",
  /** Physical pin 9: IO4; bidirectional. */
  "IO4": "9",
  /** Physical pin 10: IO5; bidirectional. */
  "IO5": "10",
  /** Physical pin 11: IO6; bidirectional. */
  "IO6": "11",
  /** Physical pin 12: IO7; bidirectional. */
  "IO7": "12",
  /** Physical pin 13: ~{RESET}; input. */
  "~{RESET}": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
  /** Physical pin 15: SCL; input. */
  "SCL": "15",
  /** Physical pin 16: SDA; bidirectional. */
  "SDA": "16",
}) {
  override schema = "Interface_Expansion:PCA9557BS";
  override referencePrefix = "U";
}

/**
 * 8-bit I2C-bus and SMBus I/O port with reset, SO-16
 *
 * KiCad symbol: `Interface_Expansion:PCA9557D`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x9.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9557.pdf
 * Keywords: SMBUS I2C Expander.
 * Default footprint: Package_SO:SO-16_3.9x9.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9557D extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: SDA; bidirectional. */
  "SDA": "2",
  /** Physical pin 3: A0; input. */
  "A0": "3",
  /** Physical pin 4: A1; input. */
  "A1": "4",
  /** Physical pin 5: A2; input. */
  "A2": "5",
  /** Physical pin 6: IO0; bidirectional. */
  "IO0": "6",
  /** Physical pin 7: IO1; bidirectional. */
  "IO1": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS": "8",
  /** Physical pin 9: IO2; bidirectional. */
  "IO2": "9",
  /** Physical pin 10: IO3; bidirectional. */
  "IO3": "10",
  /** Physical pin 11: IO4; bidirectional. */
  "IO4": "11",
  /** Physical pin 12: IO5; bidirectional. */
  "IO5": "12",
  /** Physical pin 13: IO6; bidirectional. */
  "IO6": "13",
  /** Physical pin 14: IO7; bidirectional. */
  "IO7": "14",
  /** Physical pin 15: ~{RESET}; input. */
  "~{RESET}": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
  override schema = "Interface_Expansion:PCA9557D";
  override referencePrefix = "U";
}

/**
 * 8-bit I2C-bus and SMBus I/O port with reset, TSSOP-16
 *
 * KiCad symbol: `Interface_Expansion:PCA9557PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9557.pdf
 * Keywords: SMBUS I2C Expander.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9557PW extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: SDA; bidirectional. */
  "SDA": "2",
  /** Physical pin 3: A0; input. */
  "A0": "3",
  /** Physical pin 4: A1; input. */
  "A1": "4",
  /** Physical pin 5: A2; input. */
  "A2": "5",
  /** Physical pin 6: IO0; bidirectional. */
  "IO0": "6",
  /** Physical pin 7: IO1; bidirectional. */
  "IO1": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS": "8",
  /** Physical pin 9: IO2; bidirectional. */
  "IO2": "9",
  /** Physical pin 10: IO3; bidirectional. */
  "IO3": "10",
  /** Physical pin 11: IO4; bidirectional. */
  "IO4": "11",
  /** Physical pin 12: IO5; bidirectional. */
  "IO5": "12",
  /** Physical pin 13: IO6; bidirectional. */
  "IO6": "13",
  /** Physical pin 14: IO7; bidirectional. */
  "IO7": "14",
  /** Physical pin 15: ~{RESET}; input. */
  "~{RESET}": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
  override schema = "Interface_Expansion:PCA9557PW";
  override referencePrefix = "U";
}

/**
 * Ultra low voltage 8-channel I2C switch with reset, TSSOP-24
 *
 * KiCad symbol: `Interface_Expansion:PCA9847PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCA9847.pdf
 * Keywords: mux i2c switch.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCA9847PW extends Component.withPins({
  /** Physical pin 1: V_{DD1}; power_in. */
  "V_{DD1}": "1",
  /** Physical pin 2: A0; input. */
  "A0": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: SD0; bidirectional. */
  "SD0": "4",
  /** Physical pin 5: SC0; output. */
  "SC0": "5",
  /** Physical pin 6: SD1; bidirectional. */
  "SD1": "6",
  /** Physical pin 7: SC1; output. */
  "SC1": "7",
  /** Physical pin 8: SD2; bidirectional. */
  "SD2": "8",
  /** Physical pin 9: SC2; output. */
  "SC2": "9",
  /** Physical pin 10: SD3; bidirectional. */
  "SD3": "10",
  /** Physical pin 11: SC3; output. */
  "SC3": "11",
  /** Physical pin 12: V_{SS}; power_in. */
  "V_{SS}": "12",
  /** Physical pin 13: SD4; bidirectional. */
  "SD4": "13",
  /** Physical pin 14: SC4; output. */
  "SC4": "14",
  /** Physical pin 15: SD5; bidirectional. */
  "SD5": "15",
  /** Physical pin 16: SC5; output. */
  "SC5": "16",
  /** Physical pin 17: SD6; bidirectional. */
  "SD6": "17",
  /** Physical pin 18: SC6; output. */
  "SC6": "18",
  /** Physical pin 19: SD7; bidirectional. */
  "SD7": "19",
  /** Physical pin 20: SC7; output. */
  "SC7": "20",
  /** Physical pin 21: A1; input. */
  "A1": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: V_{DD2}; power_in. */
  "V_{DD2}": "24",
}) {
  override schema = "Interface_Expansion:PCA9847PW";
  override referencePrefix = "U";
}

/**
 * 8-bit I2C-bus/SMBus I/O expander, 100 / 400 kHz (standard / fast-mode), interrupt output, 1.65 - 5.5V supply, VQFN-16
 *
 * KiCad symbol: `Interface_Expansion:PCAL6408ABS`. Reference prefix: `U`.
 * Footprint filters: *VQFN*3x3mm*P0.5mm*EP1.6*x1.6*mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCAL6408A.pdf
 * Keywords: TWI two-wire-interface IO-expander GPIO.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.6x1.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCAL6408ABS extends Component.withPins({
  /** Physical pin 1: ~{RESET}; input. */
  "~{RESET}": "1",
  /** Physical pin 2: P0; bidirectional. */
  "P0": "2",
  /** Physical pin 3: P1; bidirectional. */
  "P1": "3",
  /** Physical pin 4: P2; bidirectional. */
  "P2": "4",
  /** Physical pin 5: P3; bidirectional. */
  "P3": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}_6": "6",
  /** Physical pin 7: P4; bidirectional. */
  "P4": "7",
  /** Physical pin 8: P5; bidirectional. */
  "P5": "8",
  /** Physical pin 9: P6; bidirectional. */
  "P6": "9",
  /** Physical pin 10: P7; bidirectional. */
  "P7": "10",
  /** Physical pin 11: ~{INT}; open_collector. */
  "~{INT}": "11",
  /** Physical pin 12: SCL; input. */
  "SCL": "12",
  /** Physical pin 13: SDA; bidirectional. */
  "SDA": "13",
  /** Physical pin 14: V_{DD(P)}; power_in. */
  "V_{DD(P)}": "14",
  /** Physical pin 15: V_{DD(I2C)}; power_in. */
  "V_{DD(I2C)}": "15",
  /** Physical pin 16: ADDR; input. */
  "ADDR": "16",
  /** Physical pin 17: V_{SS}; passive. */
  "V_{SS}_17": "17",
}) {
  override schema = "Interface_Expansion:PCAL6408ABS";
  override referencePrefix = "U";
}

/**
 * 8-bit I2C-bus/SMBus I/O expander, 100 / 400 kHz (standard / fast-mode), interrupt output, 1.65 - 5.5V supply, X1QFN-16
 *
 * KiCad symbol: `Interface_Expansion:PCAL6408AHK`. Reference prefix: `U`.
 * Footprint filters: *QFN*1.8x2.6mm*P0.4mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCAL6408A.pdf
 * Keywords: TWI two-wire-interface IO-expander GPIO.
 * Default footprint: Package_DFN_QFN:UQFN-16_1.8x2.6mm_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCAL6408AHK extends Component.withPins({
  /** Physical pin 1: ~{RESET}; input. */
  "~{RESET}": "1",
  /** Physical pin 2: P0; bidirectional. */
  "P0": "2",
  /** Physical pin 3: P1; bidirectional. */
  "P1": "3",
  /** Physical pin 4: P2; bidirectional. */
  "P2": "4",
  /** Physical pin 5: P3; bidirectional. */
  "P3": "5",
  /** Physical pin 6: V_{SS}; power_in. */
  "V_{SS}": "6",
  /** Physical pin 7: P4; bidirectional. */
  "P4": "7",
  /** Physical pin 8: P5; bidirectional. */
  "P5": "8",
  /** Physical pin 9: P6; bidirectional. */
  "P6": "9",
  /** Physical pin 10: P7; bidirectional. */
  "P7": "10",
  /** Physical pin 11: ~{INT}; open_collector. */
  "~{INT}": "11",
  /** Physical pin 12: SCL; input. */
  "SCL": "12",
  /** Physical pin 13: SDA; bidirectional. */
  "SDA": "13",
  /** Physical pin 14: V_{DD(P)}; power_in. */
  "V_{DD(P)}": "14",
  /** Physical pin 15: V_{DD(I2C)}; power_in. */
  "V_{DD(I2C)}": "15",
  /** Physical pin 16: ADDR; input. */
  "ADDR": "16",
}) {
  override schema = "Interface_Expansion:PCAL6408AHK";
  override referencePrefix = "U";
}

/**
 * 8-bit I2C-bus/SMBus I/O expander, 100 / 400 kHz (standard / fast-mode), interrupt output, 1.65 - 5.5V supply, TSSOP-16
 *
 * KiCad symbol: `Interface_Expansion:PCAL6408APW`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCAL6408A.pdf
 * Keywords: TWI two-wire-interface IO-expander GPIO.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCAL6408APW extends Component.withPins({
  /** Physical pin 1: V_{DD(I2C)}; power_in. */
  "V_{DD(I2C)}": "1",
  /** Physical pin 2: ADDR; input. */
  "ADDR": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: P0; bidirectional. */
  "P0": "4",
  /** Physical pin 5: P1; bidirectional. */
  "P1": "5",
  /** Physical pin 6: P2; bidirectional. */
  "P2": "6",
  /** Physical pin 7: P3; bidirectional. */
  "P3": "7",
  /** Physical pin 8: V_{SS}; power_in. */
  "V_{SS}": "8",
  /** Physical pin 9: P4; bidirectional. */
  "P4": "9",
  /** Physical pin 10: P5; bidirectional. */
  "P5": "10",
  /** Physical pin 11: P6; bidirectional. */
  "P6": "11",
  /** Physical pin 12: P7; bidirectional. */
  "P7": "12",
  /** Physical pin 13: ~{INT}; open_collector. */
  "~{INT}": "13",
  /** Physical pin 14: SCL; input. */
  "SCL": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: V_{DD(P)}; power_in. */
  "V_{DD(P)}": "16",
}) {
  override schema = "Interface_Expansion:PCAL6408APW";
  override referencePrefix = "U";
}

/**
 * IO expander 16 GPIO, I2C 400kHz, Interrupt, 1.65 - 5.5V, HWQFN-24
 *
 * KiCad symbol: `Interface_Expansion:PCAL6416AHF`. Reference prefix: `U`.
 * Footprint filters: *QFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCAL6416A.pdf
 * Keywords: I2C TWI IO expander.
 * Default footprint: Package_DFN_QFN:HVQFN-24-1EP_4x4mm_P0.5mm_EP2.1x2.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCAL6416AHF extends Component.withPins({
  /** Physical pin 1: P0_0; bidirectional. */
  "P0_0": "1",
  /** Physical pin 2: P0_1; bidirectional. */
  "P0_1": "2",
  /** Physical pin 3: P0_2; bidirectional. */
  "P0_2": "3",
  /** Physical pin 4: P0_3; bidirectional. */
  "P0_3": "4",
  /** Physical pin 5: P0_4; bidirectional. */
  "P0_4": "5",
  /** Physical pin 6: P0_5; bidirectional. */
  "P0_5": "6",
  /** Physical pin 7: P0_6; bidirectional. */
  "P0_6": "7",
  /** Physical pin 8: P0_7; bidirectional. */
  "P0_7": "8",
  /** Physical pin 9: V_{SS}; power_in. */
  "V_{SS}": "9",
  /** Physical pin 10: P1_0; bidirectional. */
  "P1_0": "10",
  /** Physical pin 11: P1_1; bidirectional. */
  "P1_1": "11",
  /** Physical pin 12: P1_2; bidirectional. */
  "P1_2": "12",
  /** Physical pin 13: P1_3; bidirectional. */
  "P1_3": "13",
  /** Physical pin 14: P1_4; bidirectional. */
  "P1_4": "14",
  /** Physical pin 15: P1_5; bidirectional. */
  "P1_5": "15",
  /** Physical pin 16: P1_6; bidirectional. */
  "P1_6": "16",
  /** Physical pin 17: P1_7; bidirectional. */
  "P1_7": "17",
  /** Physical pin 18: ADDR; input. */
  "ADDR": "18",
  /** Physical pin 19: SCL; input. */
  "SCL": "19",
  /** Physical pin 20: SDA; bidirectional. */
  "SDA": "20",
  /** Physical pin 21: V_{DD(P)}; power_in. */
  "V_{DD(P)}": "21",
  /** Physical pin 22: ~{INT}; open_collector. */
  "~{INT}": "22",
  /** Physical pin 23: V_{DD(I2C-bus)}; power_in. */
  "V_{DD(I2C-bus)}": "23",
  /** Physical pin 24: ~{RESET}; input. */
  "~{RESET}": "24",
  /** Physical pin 25: EP; passive. */
  "EP": "25",
}) {
  override schema = "Interface_Expansion:PCAL6416AHF";
  override referencePrefix = "U";
}

/**
 * IO expander 16 GPIO, I2C 400kHz, Interrupt, 1.65 - 5.5V, TSSOP-24
 *
 * KiCad symbol: `Interface_Expansion:PCAL6416APW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCAL6416A.pdf
 * Keywords: I2C TWI IO expander.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCAL6416APW extends Component.withPins({
  /** Physical pin 1: ~{INT}; open_collector. */
  "~{INT}": "1",
  /** Physical pin 2: VDD_I2C; power_in. */
  "VDD_I2C": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: P0_0; bidirectional. */
  "P0_0": "4",
  /** Physical pin 5: P0_1; bidirectional. */
  "P0_1": "5",
  /** Physical pin 6: P0_2; bidirectional. */
  "P0_2": "6",
  /** Physical pin 7: P0_3; bidirectional. */
  "P0_3": "7",
  /** Physical pin 8: P0_4; bidirectional. */
  "P0_4": "8",
  /** Physical pin 9: P0_5; bidirectional. */
  "P0_5": "9",
  /** Physical pin 10: P0_6; bidirectional. */
  "P0_6": "10",
  /** Physical pin 11: P0_7; bidirectional. */
  "P0_7": "11",
  /** Physical pin 12: VSS; power_in. */
  "VSS": "12",
  /** Physical pin 13: P1_0; bidirectional. */
  "P1_0": "13",
  /** Physical pin 14: P1_1; bidirectional. */
  "P1_1": "14",
  /** Physical pin 15: P1_2; bidirectional. */
  "P1_2": "15",
  /** Physical pin 16: P1_3; bidirectional. */
  "P1_3": "16",
  /** Physical pin 17: P1_4; bidirectional. */
  "P1_4": "17",
  /** Physical pin 18: P1_5; bidirectional. */
  "P1_5": "18",
  /** Physical pin 19: P1_6; bidirectional. */
  "P1_6": "19",
  /** Physical pin 20: P1_7; bidirectional. */
  "P1_7": "20",
  /** Physical pin 21: ADDR; input. */
  "ADDR": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: VDD_P; power_in. */
  "VDD_P": "24",
}) {
  override schema = "Interface_Expansion:PCAL6416APW";
  override referencePrefix = "U";
}

/**
 * Ultra low-voltage translating 34-bit Fm+ I2C-bus/SMBus I/O expander with Agile I/O features, interrupt output and reset
 *
 * KiCad symbol: `Interface_Expansion:PCAL6534EV`. Reference prefix: `U`.
 * Footprint filters: NXP*VFBGA*2.6x3mm*Layout6x7*P0.4mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCAL6534.pdf
 * Keywords: I2C TWI IO expander.
 * Default footprint: Package_BGA:NXP_VFBGA-42_2.6x3mm_Layout6x7_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCAL6534EV extends Component.withPins({
  /** Physical pin A1: V_{DD(I2C-bus)}; power_in. */
  "V_{DD(I2C-bus)}": "A1",
  /** Physical pin A2: SDA; bidirectional. */
  "SDA": "A2",
  /** Physical pin A3: SCL; input. */
  "SCL": "A3",
  /** Physical pin A4: ADDR; input. */
  "ADDR": "A4",
  /** Physical pin A5: ~{RESET}; input. */
  "~{RESET}": "A5",
  /** Physical pin A6: V_{DD(P)}; power_in. */
  "V_{DD(P)}": "A6",
  /** Physical pin B1: ~{INT}; open_collector. */
  "~{INT}": "B1",
  /** Physical pin B2: P0_1; bidirectional. */
  "P0_1": "B2",
  /** Physical pin B3: P0_2; bidirectional. */
  "P0_2": "B3",
  /** Physical pin B4: P4_1; bidirectional. */
  "P4_1": "B4",
  /** Physical pin B5: P4_0; bidirectional. */
  "P4_0": "B5",
  /** Physical pin B6: V_{SS}; power_in. */
  "V_{SS}": "B6",
  /** Physical pin C1: P0_0; bidirectional. */
  "P0_0": "C1",
  /** Physical pin C2: P0_4; bidirectional. */
  "P0_4": "C2",
  /** Physical pin C3: P0_5; bidirectional. */
  "P0_5": "C3",
  /** Physical pin C4: P3_7; bidirectional. */
  "P3_7": "C4",
  /** Physical pin C5: P3_5; bidirectional. */
  "P3_5": "C5",
  /** Physical pin C6: P3_6; bidirectional. */
  "P3_6": "C6",
  /** Physical pin D1: P0_3; bidirectional. */
  "P0_3": "D1",
  /** Physical pin D2: P0_7; bidirectional. */
  "P0_7": "D2",
  /** Physical pin D3: P1_0; bidirectional. */
  "P1_0": "D3",
  /** Physical pin D4: P3_4; bidirectional. */
  "P3_4": "D4",
  /** Physical pin D5: P3_2; bidirectional. */
  "P3_2": "D5",
  /** Physical pin D6: P3_3; bidirectional. */
  "P3_3": "D6",
  /** Physical pin E1: P0_6; bidirectional. */
  "P0_6": "E1",
  /** Physical pin E2: P1_2; bidirectional. */
  "P1_2": "E2",
  /** Physical pin E3: P2_0; bidirectional. */
  "P2_0": "E3",
  /** Physical pin E4: P3_1; bidirectional. */
  "P3_1": "E4",
  /** Physical pin E5: P2_7; bidirectional. */
  "P2_7": "E5",
  /** Physical pin E6: P3_0; bidirectional. */
  "P3_0": "E6",
  /** Physical pin F1: P1_1; bidirectional. */
  "P1_1": "F1",
  /** Physical pin F2: P1_5; bidirectional. */
  "P1_5": "F2",
  /** Physical pin F3: P1_7; bidirectional. */
  "P1_7": "F3",
  /** Physical pin F4: P2_1; bidirectional. */
  "P2_1": "F4",
  /** Physical pin F5: P2_6; bidirectional. */
  "P2_6": "F5",
  /** Physical pin F6: P2_5; bidirectional. */
  "P2_5": "F6",
  /** Physical pin G1: P1_3; bidirectional. */
  "P1_3": "G1",
  /** Physical pin G2: P1_4; bidirectional. */
  "P1_4": "G2",
  /** Physical pin G3: P1_6; bidirectional. */
  "P1_6": "G3",
  /** Physical pin G4: P2_2; bidirectional. */
  "P2_2": "G4",
  /** Physical pin G5: P2_3; bidirectional. */
  "P2_3": "G5",
  /** Physical pin G6: P2_4; bidirectional. */
  "P2_4": "G6",
}) {
  override schema = "Interface_Expansion:PCAL6534EV";
  override referencePrefix = "U";
}

/**
 * 8-bit I/O Expander, I2C / SMBus interface, interrupt output, fixed address bits 0b0100xxx, TSSOP-16 / SOIC-16
 *
 * KiCad symbol: `Interface_Expansion:TCA9534`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm?P0.65mm*, *SOIC*7.5x10.3mm?P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tca9534.pdf
 * Keywords: Texas-Instruments Port-Expander TCA9534DWR TCA9534DWT TCA9534PWR.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9534 extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: P0; bidirectional. */
  "P0": "4",
  /** Physical pin 5: P1; bidirectional. */
  "P1": "5",
  /** Physical pin 6: P2; bidirectional. */
  "P2": "6",
  /** Physical pin 7: P3; bidirectional. */
  "P3": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: P4; bidirectional. */
  "P4": "9",
  /** Physical pin 10: P5; bidirectional. */
  "P5": "10",
  /** Physical pin 11: P6; bidirectional. */
  "P6": "11",
  /** Physical pin 12: P7; bidirectional. */
  "P7": "12",
  /** Physical pin 13: ~{INT}; open_collector. */
  "~{INT}": "13",
  /** Physical pin 14: SCL; input. */
  "SCL": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
  override schema = "Interface_Expansion:TCA9534";
  override referencePrefix = "U";
}

/**
 * 8-bit I/O Expander, I2C interface, interrupt output, fixed address bits 0b0111xxx, DIP-16
 *
 * KiCad symbol: `Interface_Expansion:PCF8574AP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF8574_PCF8574A.pdf
 * Keywords: NXP Port-Expander.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCF8574AP extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: P0; bidirectional. */
  "P0": "4",
  /** Physical pin 5: P1; bidirectional. */
  "P1": "5",
  /** Physical pin 6: P2; bidirectional. */
  "P2": "6",
  /** Physical pin 7: P3; bidirectional. */
  "P3": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: P4; bidirectional. */
  "P4": "9",
  /** Physical pin 10: P5; bidirectional. */
  "P5": "10",
  /** Physical pin 11: P6; bidirectional. */
  "P6": "11",
  /** Physical pin 12: P7; bidirectional. */
  "P7": "12",
  /** Physical pin 13: ~{INT}; open_collector. */
  "~{INT}": "13",
  /** Physical pin 14: SCL; input. */
  "SCL": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
  override schema = "Interface_Expansion:PCF8574AP";
  override referencePrefix = "U";
}

/**
 * 8-bit I/O Expander, I2C interface, interrupt output, fixed address bits 0b0111xxx, SOIC-16
 *
 * KiCad symbol: `Interface_Expansion:PCF8574AT`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm?P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF8574_PCF8574A.pdf
 * Keywords: NXP Port-Expander.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCF8574AT extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: P0; bidirectional. */
  "P0": "4",
  /** Physical pin 5: P1; bidirectional. */
  "P1": "5",
  /** Physical pin 6: P2; bidirectional. */
  "P2": "6",
  /** Physical pin 7: P3; bidirectional. */
  "P3": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: P4; bidirectional. */
  "P4": "9",
  /** Physical pin 10: P5; bidirectional. */
  "P5": "10",
  /** Physical pin 11: P6; bidirectional. */
  "P6": "11",
  /** Physical pin 12: P7; bidirectional. */
  "P7": "12",
  /** Physical pin 13: ~{INT}; open_collector. */
  "~{INT}": "13",
  /** Physical pin 14: SCL; input. */
  "SCL": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
  override schema = "Interface_Expansion:PCF8574AT";
  override referencePrefix = "U";
}

/**
 * 8-bit I/O Expander, I2C interface, interrupt output, fixed address bits 0b0100xxx, SSOP-20
 *
 * KiCad symbol: `Interface_Expansion:PCF8574TS`. Reference prefix: `U`.
 * Footprint filters: SSOP*4.4x6.5mm?P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF8574_PCF8574A.pdf
 * Keywords: NXP Port-Expander.
 * Default footprint: Package_SO:SSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCF8574TS extends Component.withPins({
  /** Physical pin 1: ~{INT}; open_collector. */
  "~{INT}": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: A0; input. */
  "A0": "6",
  /** Physical pin 7: A1; input. */
  "A1": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: A2; input. */
  "A2": "9",
  /** Physical pin 10: P0; bidirectional. */
  "P0": "10",
  /** Physical pin 11: P1; bidirectional. */
  "P1": "11",
  /** Physical pin 12: P2; bidirectional. */
  "P2": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: P3; bidirectional. */
  "P3": "14",
  /** Physical pin 15: VSS; power_in. */
  "VSS": "15",
  /** Physical pin 16: P4; bidirectional. */
  "P4": "16",
  /** Physical pin 17: P5; bidirectional. */
  "P5": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: P6; bidirectional. */
  "P6": "19",
  /** Physical pin 20: P7; bidirectional. */
  "P7": "20",
}) {
  override schema = "Interface_Expansion:PCF8574TS";
  override referencePrefix = "U";
}

/**
 * 8-bit I/O Expander, I2C interface, interrupt output, fixed address bits 0b0111xxx, SSOP-20
 *
 * KiCad symbol: `Interface_Expansion:PCF8574ATS`. Reference prefix: `U`.
 * Footprint filters: SSOP*4.4x6.5mm?P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF8574_PCF8574A.pdf
 * Keywords: NXP Port-Expander.
 * Default footprint: Package_SO:SSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCF8574ATS extends Component.withPins({
  /** Physical pin 1: ~{INT}; open_collector. */
  "~{INT}": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: A0; input. */
  "A0": "6",
  /** Physical pin 7: A1; input. */
  "A1": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: A2; input. */
  "A2": "9",
  /** Physical pin 10: P0; bidirectional. */
  "P0": "10",
  /** Physical pin 11: P1; bidirectional. */
  "P1": "11",
  /** Physical pin 12: P2; bidirectional. */
  "P2": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: P3; bidirectional. */
  "P3": "14",
  /** Physical pin 15: VSS; power_in. */
  "VSS": "15",
  /** Physical pin 16: P4; bidirectional. */
  "P4": "16",
  /** Physical pin 17: P5; bidirectional. */
  "P5": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: P6; bidirectional. */
  "P6": "19",
  /** Physical pin 20: P7; bidirectional. */
  "P7": "20",
}) {
  override schema = "Interface_Expansion:PCF8574ATS";
  override referencePrefix = "U";
}

/**
 * 8-bit I/O Expander, I2C interface, interrupt output, fixed address bits 0b0100xxx, DIP-16
 *
 * KiCad symbol: `Interface_Expansion:PCF8574P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF8574_PCF8574A.pdf
 * Keywords: NXP Port-Expander.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCF8574P extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: P0; bidirectional. */
  "P0": "4",
  /** Physical pin 5: P1; bidirectional. */
  "P1": "5",
  /** Physical pin 6: P2; bidirectional. */
  "P2": "6",
  /** Physical pin 7: P3; bidirectional. */
  "P3": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: P4; bidirectional. */
  "P4": "9",
  /** Physical pin 10: P5; bidirectional. */
  "P5": "10",
  /** Physical pin 11: P6; bidirectional. */
  "P6": "11",
  /** Physical pin 12: P7; bidirectional. */
  "P7": "12",
  /** Physical pin 13: ~{INT}; open_collector. */
  "~{INT}": "13",
  /** Physical pin 14: SCL; input. */
  "SCL": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
  override schema = "Interface_Expansion:PCF8574P";
  override referencePrefix = "U";
}

/**
 * 8-bit I/O Expander, I2C interface, interrupt output, fixed address bits 0b0100xxx, SOIC-16
 *
 * KiCad symbol: `Interface_Expansion:PCF8574T`. Reference prefix: `U`.
 * Footprint filters: *SOIC*7.5x10.3mm?P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCF8574_PCF8574A.pdf
 * Keywords: NXP Port-Expander.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCF8574T extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: P0; bidirectional. */
  "P0": "4",
  /** Physical pin 5: P1; bidirectional. */
  "P1": "5",
  /** Physical pin 6: P2; bidirectional. */
  "P2": "6",
  /** Physical pin 7: P3; bidirectional. */
  "P3": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: P4; bidirectional. */
  "P4": "9",
  /** Physical pin 10: P5; bidirectional. */
  "P5": "10",
  /** Physical pin 11: P6; bidirectional. */
  "P6": "11",
  /** Physical pin 12: P7; bidirectional. */
  "P7": "12",
  /** Physical pin 13: ~{INT}; open_collector. */
  "~{INT}": "13",
  /** Physical pin 14: SCL; input. */
  "SCL": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
  override schema = "Interface_Expansion:PCF8574T";
  override referencePrefix = "U";
}

/**
 * 16 Bits Port/Expander to I2C Bus, SSOP-24
 *
 * KiCad symbol: `Interface_Expansion:PCF8575DBR`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x8.2mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/pcf8575.pdf
 * Keywords: I2C Expander.
 * Default footprint: Package_SO:SSOP-24_5.3x8.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCF8575DBR extends Component.withPins({
  /** Physical pin 1: ~{INT}; open_collector. */
  "~{INT}": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: P0; bidirectional. */
  "P0": "4",
  /** Physical pin 5: P1; bidirectional. */
  "P1": "5",
  /** Physical pin 6: P2; bidirectional. */
  "P2": "6",
  /** Physical pin 7: P3; bidirectional. */
  "P3": "7",
  /** Physical pin 8: P4; bidirectional. */
  "P4": "8",
  /** Physical pin 9: P5; bidirectional. */
  "P5": "9",
  /** Physical pin 10: P6; bidirectional. */
  "P6": "10",
  /** Physical pin 11: P7; bidirectional. */
  "P7": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: P10; bidirectional. */
  "P10": "13",
  /** Physical pin 14: P11; bidirectional. */
  "P11": "14",
  /** Physical pin 15: P12; bidirectional. */
  "P12": "15",
  /** Physical pin 16: P13; bidirectional. */
  "P13": "16",
  /** Physical pin 17: P14; bidirectional. */
  "P14": "17",
  /** Physical pin 18: P15; bidirectional. */
  "P15": "18",
  /** Physical pin 19: P16; bidirectional. */
  "P16": "19",
  /** Physical pin 20: P17; bidirectional. */
  "P17": "20",
  /** Physical pin 21: A0; input. */
  "A0": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
}) {
  override schema = "Interface_Expansion:PCF8575DBR";
  override referencePrefix = "U";
}

/**
 * I2C Bus Controller, DIP/SOIC-20
 *
 * KiCad symbol: `Interface_Expansion:PCF8584`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SOIC*.
 * @see http://www.nxp.com/docs/en/data-sheet/PCF8584.pdf
 * Keywords: I2C Bus.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCF8584 extends Component.withPins({
  /** Physical pin 1: CLK; input. */
  "CLK": "1",
  /** Physical pin 2: SDA; bidirectional. */
  "SDA": "2",
  /** Physical pin 3: SCL; bidirectional. */
  "SCL": "3",
  /** Physical pin 4: ~{IACK}; input. */
  "~{IACK}": "4",
  /** Physical pin 5: ~{INT}; output. */
  "~{INT}": "5",
  /** Physical pin 6: A0; input. */
  "A0": "6",
  /** Physical pin 7: D0; tri_state. */
  "D0": "7",
  /** Physical pin 8: D1; tri_state. */
  "D1": "8",
  /** Physical pin 9: D2; tri_state. */
  "D2": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS": "10",
  /** Physical pin 11: D3; tri_state. */
  "D3": "11",
  /** Physical pin 12: D4; tri_state. */
  "D4": "12",
  /** Physical pin 13: D5; tri_state. */
  "D5": "13",
  /** Physical pin 14: D6; tri_state. */
  "D6": "14",
  /** Physical pin 15: D7; tri_state. */
  "D7": "15",
  /** Physical pin 16: ~{RD}; passive. */
  "~{RD}": "16",
  /** Physical pin 17: ~{CS}; input. */
  "~{CS}": "17",
  /** Physical pin 18: ~{WR}; input. */
  "~{WR}": "18",
  /** Physical pin 19: ~{RST}; bidirectional. */
  "~{RST}": "19",
  /** Physical pin 20: VDD; power_in. */
  "VDD": "20",
}) {
  override schema = "Interface_Expansion:PCF8584";
  override referencePrefix = "U";
}

/**
 * 4ch ADC, 1 DAC, I2C Bus Interface, DIP/SOIC-16
 *
 * KiCad symbol: `Interface_Expansion:PCF8591`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SOIC*.
 * @see http://www.nxp.com/docs/en/data-sheet/PCF8591.pdf
 * Keywords: I2C ADC DAC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PCF8591 extends Component.withPins({
  /** Physical pin 1: AIN0; passive. */
  "AIN0": "1",
  /** Physical pin 2: AIN1; passive. */
  "AIN1": "2",
  /** Physical pin 3: AIN2; passive. */
  "AIN2": "3",
  /** Physical pin 4: AIN3; passive. */
  "AIN3": "4",
  /** Physical pin 5: A0; input. */
  "A0": "5",
  /** Physical pin 6: A1; input. */
  "A1": "6",
  /** Physical pin 7: A2; input. */
  "A2": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS": "8",
  /** Physical pin 9: SDA; bidirectional. */
  "SDA": "9",
  /** Physical pin 10: SCL; input. */
  "SCL": "10",
  /** Physical pin 11: OSC; bidirectional. */
  "OSC": "11",
  /** Physical pin 12: EXT; input. */
  "EXT": "12",
  /** Physical pin 13: AGND; power_out. */
  "AGND": "13",
  /** Physical pin 14: VREF; passive. */
  "VREF": "14",
  /** Physical pin 15: AOUT; passive. */
  "AOUT": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
  override schema = "Interface_Expansion:PCF8591";
  override referencePrefix = "U";
}

/**
 * SPI to I2C interface, 5 GPIO, +1.71 to +3.6V supply, TSSOP-16
 *
 * KiCad symbol: `Interface_Expansion:SC18IS604PW`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x5mm?P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/SC18IS604.pdf
 * Keywords: NXP bus-bridge.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SC18IS604PW extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: SCL; output. */
  "SCL": "2",
  /** Physical pin 3: ~{INT}; open_collector. */
  "~{INT}": "3",
  /** Physical pin 4: ~{RESET}; input. */
  "~{RESET}": "4",
  /** Physical pin 5: GPIO4; input. */
  "GPIO4": "5",
  /** Physical pin 6: GPIO3; bidirectional. */
  "GPIO3": "6",
  /** Physical pin 7: GPIO2; bidirectional. */
  "GPIO2": "7",
  /** Physical pin 8: ~{CS}; input. */
  "~{CS}": "8",
  /** Physical pin 9: GPIO0; bidirectional. */
  "GPIO0": "9",
  /** Physical pin 10: MOSI; input. */
  "MOSI": "10",
  /** Physical pin 11: SCLK; input. */
  "SCLK": "11",
  /** Physical pin 12: V_{DD}; power_in. */
  "V_{DD}": "12",
  /** Physical pin 13: V_{SS}; power_in. */
  "V_{SS}": "13",
  /** Physical pin 14: MISO; output. */
  "MISO": "14",
  /** Physical pin 15: VREFP; input. */
  "VREFP": "15",
  /** Physical pin 16: GPIO1; bidirectional. */
  "GPIO1": "16",
}) {
  override schema = "Interface_Expansion:SC18IS604PW";
  override referencePrefix = "U";
}

/**
 * I2C to SPI bridge, 1.71 to 3.6V supply, TSSOP-16
 *
 * KiCad symbol: `Interface_Expansion:SC18IS606PW`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x5mm?P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/SC18IS606.pdf
 * Keywords: NXP bus-bridge.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SC18IS606PW extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: ~{INT}; open_collector. */
  "~{INT}": "3",
  /** Physical pin 4: ~{RESET}; input. */
  "~{RESET}": "4",
  /** Physical pin 5: A2; input. */
  "A2": "5",
  /** Physical pin 6: A1; input. */
  "A1": "6",
  /** Physical pin 7: A0; input. */
  "A0": "7",
  /** Physical pin 8: ~{SS2}/GPIO2; bidirectional. */
  "~{SS2}/GPIO2": "8",
  /** Physical pin 9: ~{SS0}/GPIO0; bidirectional. */
  "~{SS0}/GPIO0": "9",
  /** Physical pin 10: MOSI; output. */
  "MOSI": "10",
  /** Physical pin 11: SPICLK; output. */
  "SPICLK": "11",
  /** Physical pin 12: V_{DD}; power_in. */
  "V_{DD}": "12",
  /** Physical pin 13: V_{SS}; power_in. */
  "V_{SS}": "13",
  /** Physical pin 14: MISO; input. */
  "MISO": "14",
  /** Physical pin 15: VREFP; input. */
  "VREFP": "15",
  /** Physical pin 16: ~{SS1}/GPIO1; bidirectional. */
  "~{SS1}/GPIO1": "16",
}) {
  override schema = "Interface_Expansion:SC18IS606PW";
  override referencePrefix = "U";
}

/**
 * IO expander 16 GPIO, I2C 400kHz, Interrupt, 1.65 - 3.6V, QFN-24
 *
 * KiCad symbol: `Interface_Expansion:STMPE1600`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.st.com/resource/en/datasheet/stmpe1600.pdf
 * Keywords: IO expander 16 GPIO.
 * Default footprint: Package_DFN_QFN:QFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STMPE1600 extends Component.withPins({
  /** Physical pin 1: GPIO_0; bidirectional. */
  "GPIO_0": "1",
  /** Physical pin 2: GPIO_1; bidirectional. */
  "GPIO_1": "2",
  /** Physical pin 3: GPIO_2; bidirectional. */
  "GPIO_2": "3",
  /** Physical pin 4: GPIO_3; bidirectional. */
  "GPIO_3": "4",
  /** Physical pin 5: GPIO_4; bidirectional. */
  "GPIO_4": "5",
  /** Physical pin 6: GPIO_5; bidirectional. */
  "GPIO_5": "6",
  /** Physical pin 7: GPIO_6; bidirectional. */
  "GPIO_6": "7",
  /** Physical pin 8: GPIO_7; bidirectional. */
  "GPIO_7": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: GPIO_8; bidirectional. */
  "GPIO_8": "10",
  /** Physical pin 11: GPIO_9; bidirectional. */
  "GPIO_9": "11",
  /** Physical pin 12: GPIO_10; bidirectional. */
  "GPIO_10": "12",
  /** Physical pin 13: GPIO_11; bidirectional. */
  "GPIO_11": "13",
  /** Physical pin 14: GPIO_12; bidirectional. */
  "GPIO_12": "14",
  /** Physical pin 15: GPIO_13; bidirectional. */
  "GPIO_13": "15",
  /** Physical pin 16: GPIO_14; bidirectional. */
  "GPIO_14": "16",
  /** Physical pin 17: GPIO_15; bidirectional. */
  "GPIO_15": "17",
  /** Physical pin 18: A0; input. */
  "A0": "18",
  /** Physical pin 19: SCL; input. */
  "SCL": "19",
  /** Physical pin 20: SDA; bidirectional. */
  "SDA": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: INT; output. */
  "INT": "22",
  /** Physical pin 23: A1; input. */
  "A1": "23",
  /** Physical pin 24: A2; input. */
  "A2": "24",
}) {
  override schema = "Interface_Expansion:STMPE1600";
  override referencePrefix = "U";
}

/**
 * Low-Voltage 8-bit I2C and SMBus I/O Expander, TSSOP-16
 *
 * KiCad symbol: `Interface_Expansion:TCA6408APW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm?P0.65mm*.
 * @see https://www.ti.com/lit/gpn/tca6408a
 * Keywords: Texas-Instruments.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA6408APW extends Component.withPins({
  /** Physical pin 1: V_{CCI}; power_in. */
  "V_{CCI}": "1",
  /** Physical pin 2: ADDR; input. */
  "ADDR": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: P0; bidirectional. */
  "P0": "4",
  /** Physical pin 5: P1; bidirectional. */
  "P1": "5",
  /** Physical pin 6: P2; bidirectional. */
  "P2": "6",
  /** Physical pin 7: P3; bidirectional. */
  "P3": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: P4; bidirectional. */
  "P4": "9",
  /** Physical pin 10: P5; bidirectional. */
  "P5": "10",
  /** Physical pin 11: P6; bidirectional. */
  "P6": "11",
  /** Physical pin 12: P7; bidirectional. */
  "P7": "12",
  /** Physical pin 13: ~{INT}; open_collector. */
  "~{INT}": "13",
  /** Physical pin 14: SCL; input. */
  "SCL": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: V_{CCP}; power_in. */
  "V_{CCP}": "16",
}) {
  override schema = "Interface_Expansion:TCA6408APW";
  override referencePrefix = "U";
}

/**
 * Low-Voltage 8-bit I2C and SMBus I/O Expander, VQFN-16
 *
 * KiCad symbol: `Interface_Expansion:TCA6408ARGT`. Reference prefix: `U`.
 * Footprint filters: *VQFN*3x3mm?P0.5mm?EP1.45x1.45mm*.
 * @see https://www.ti.com/lit/gpn/tca6408a
 * Keywords: Texas-Instruments.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.45x1.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA6408ARGT extends Component.withPins({
  /** Physical pin 1: ~{RESET}; input. */
  "~{RESET}": "1",
  /** Physical pin 2: P0; bidirectional. */
  "P0": "2",
  /** Physical pin 3: P1; bidirectional. */
  "P1": "3",
  /** Physical pin 4: P2; bidirectional. */
  "P2": "4",
  /** Physical pin 5: P3; bidirectional. */
  "P3": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: P4; bidirectional. */
  "P4": "7",
  /** Physical pin 8: P5; bidirectional. */
  "P5": "8",
  /** Physical pin 9: P6; bidirectional. */
  "P6": "9",
  /** Physical pin 10: P7; bidirectional. */
  "P7": "10",
  /** Physical pin 11: ~{INT}; open_collector. */
  "~{INT}": "11",
  /** Physical pin 12: SCL; input. */
  "SCL": "12",
  /** Physical pin 13: SDA; bidirectional. */
  "SDA": "13",
  /** Physical pin 14: V_{CCP}; power_in. */
  "V_{CCP}": "14",
  /** Physical pin 15: V_{CCI}; power_in. */
  "V_{CCI}": "15",
  /** Physical pin 16: ADDR; input. */
  "ADDR": "16",
  /** Physical pin 17: EPAD; passive. */
  "EPAD": "17",
}) {
  override schema = "Interface_Expansion:TCA6408ARGT";
  override referencePrefix = "U";
}

/**
 * Low-Voltage 8-bit I2C and SMBus I/O Expander, UQFN-16
 *
 * KiCad symbol: `Interface_Expansion:TCA6408ARSV`. Reference prefix: `U`.
 * Footprint filters: *UQFN*1.8x2.6mm?P0.4mm*.
 * @see https://www.ti.com/lit/gpn/tca6408a
 * Keywords: Texas-Instruments.
 * Default footprint: Package_DFN_QFN:UQFN-16_1.8x2.6mm_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA6408ARSV extends Component.withPins({
  /** Physical pin 1: ~{RESET}; input. */
  "~{RESET}": "1",
  /** Physical pin 2: P0; bidirectional. */
  "P0": "2",
  /** Physical pin 3: P1; bidirectional. */
  "P1": "3",
  /** Physical pin 4: P2; bidirectional. */
  "P2": "4",
  /** Physical pin 5: P3; bidirectional. */
  "P3": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: P4; bidirectional. */
  "P4": "7",
  /** Physical pin 8: P5; bidirectional. */
  "P5": "8",
  /** Physical pin 9: P6; bidirectional. */
  "P6": "9",
  /** Physical pin 10: P7; bidirectional. */
  "P7": "10",
  /** Physical pin 11: ~{INT}; open_collector. */
  "~{INT}": "11",
  /** Physical pin 12: SCL; input. */
  "SCL": "12",
  /** Physical pin 13: SDA; bidirectional. */
  "SDA": "13",
  /** Physical pin 14: V_{CCP}; power_in. */
  "V_{CCP}": "14",
  /** Physical pin 15: V_{CCI}; power_in. */
  "V_{CCI}": "15",
  /** Physical pin 16: ADDR; input. */
  "ADDR": "16",
}) {
  override schema = "Interface_Expansion:TCA6408ARSV";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C and SMBus interface, interrupts, w/o pull-ups, SSOP-24
 *
 * KiCad symbol: `Interface_Expansion:TCA9535DBR`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x8.2mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tca9535.pdf
 * Keywords: ti parallel port.
 * Default footprint: Package_SO:SSOP-24_5.3x8.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9535DBR extends Component.withPins({
  /** Physical pin 1: ~{INT}; open_collector. */
  "~{INT}": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: P00; bidirectional. */
  "P00": "4",
  /** Physical pin 5: P01; bidirectional. */
  "P01": "5",
  /** Physical pin 6: P02; bidirectional. */
  "P02": "6",
  /** Physical pin 7: P03; bidirectional. */
  "P03": "7",
  /** Physical pin 8: P04; bidirectional. */
  "P04": "8",
  /** Physical pin 9: P05; bidirectional. */
  "P05": "9",
  /** Physical pin 10: P06; bidirectional. */
  "P06": "10",
  /** Physical pin 11: P07; bidirectional. */
  "P07": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: P10; bidirectional. */
  "P10": "13",
  /** Physical pin 14: P11; bidirectional. */
  "P11": "14",
  /** Physical pin 15: P12; bidirectional. */
  "P12": "15",
  /** Physical pin 16: P13; bidirectional. */
  "P13": "16",
  /** Physical pin 17: P14; bidirectional. */
  "P14": "17",
  /** Physical pin 18: P15; bidirectional. */
  "P15": "18",
  /** Physical pin 19: P16; bidirectional. */
  "P16": "19",
  /** Physical pin 20: P17; bidirectional. */
  "P17": "20",
  /** Physical pin 21: A0; input. */
  "A0": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
}) {
  override schema = "Interface_Expansion:TCA9535DBR";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C and SMBus interface, interrupts, w/o pull-ups, SSOP-24
 *
 * KiCad symbol: `Interface_Expansion:TCA9535DBT`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x8.2mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tca9535.pdf
 * Keywords: ti parallel port.
 * Default footprint: Package_SO:SSOP-24_5.3x8.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9535DBT extends Component.withPins({
  /** Physical pin 1: ~{INT}; open_collector. */
  "~{INT}": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: P00; bidirectional. */
  "P00": "4",
  /** Physical pin 5: P01; bidirectional. */
  "P01": "5",
  /** Physical pin 6: P02; bidirectional. */
  "P02": "6",
  /** Physical pin 7: P03; bidirectional. */
  "P03": "7",
  /** Physical pin 8: P04; bidirectional. */
  "P04": "8",
  /** Physical pin 9: P05; bidirectional. */
  "P05": "9",
  /** Physical pin 10: P06; bidirectional. */
  "P06": "10",
  /** Physical pin 11: P07; bidirectional. */
  "P07": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: P10; bidirectional. */
  "P10": "13",
  /** Physical pin 14: P11; bidirectional. */
  "P11": "14",
  /** Physical pin 15: P12; bidirectional. */
  "P12": "15",
  /** Physical pin 16: P13; bidirectional. */
  "P13": "16",
  /** Physical pin 17: P14; bidirectional. */
  "P14": "17",
  /** Physical pin 18: P15; bidirectional. */
  "P15": "18",
  /** Physical pin 19: P16; bidirectional. */
  "P16": "19",
  /** Physical pin 20: P17; bidirectional. */
  "P17": "20",
  /** Physical pin 21: A0; input. */
  "A0": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
}) {
  override schema = "Interface_Expansion:TCA9535DBT";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C and SMBus interface, interrupts, w/o pull-ups, QFN-24
 *
 * KiCad symbol: `Interface_Expansion:TCA9535RGER`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tca9535.pdf
 * Keywords: ti parallel port.
 * Default footprint: Package_DFN_QFN:VQFN-24-1EP_4x4mm_P0.5mm_EP2.45x2.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9535RGER extends Component.withPins({
  /** Physical pin 1: P00; bidirectional. */
  "P00": "1",
  /** Physical pin 2: P01; bidirectional. */
  "P01": "2",
  /** Physical pin 3: P02; bidirectional. */
  "P02": "3",
  /** Physical pin 4: P03; bidirectional. */
  "P03": "4",
  /** Physical pin 5: P04; bidirectional. */
  "P04": "5",
  /** Physical pin 6: P05; bidirectional. */
  "P05": "6",
  /** Physical pin 7: P06; bidirectional. */
  "P06": "7",
  /** Physical pin 8: P07; bidirectional. */
  "P07": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: P10; bidirectional. */
  "P10": "10",
  /** Physical pin 11: P11; bidirectional. */
  "P11": "11",
  /** Physical pin 12: P12; bidirectional. */
  "P12": "12",
  /** Physical pin 13: P13; bidirectional. */
  "P13": "13",
  /** Physical pin 14: P14; bidirectional. */
  "P14": "14",
  /** Physical pin 15: P15; bidirectional. */
  "P15": "15",
  /** Physical pin 16: P16; bidirectional. */
  "P16": "16",
  /** Physical pin 17: P17; bidirectional. */
  "P17": "17",
  /** Physical pin 18: A0; input. */
  "A0": "18",
  /** Physical pin 19: SCL; input. */
  "SCL": "19",
  /** Physical pin 20: SDA; bidirectional. */
  "SDA": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: ~{INT}; open_collector. */
  "~{INT}": "22",
  /** Physical pin 23: A1; input. */
  "A1": "23",
  /** Physical pin 24: A2; input. */
  "A2": "24",
  /** Physical pin 25: EPAD; input. */
  "EPAD": "25",
}) {
  override schema = "Interface_Expansion:TCA9535RGER";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C and SMBus interface, interrupts, w/o pull-ups, QFN-24
 *
 * KiCad symbol: `Interface_Expansion:TCA9535MRGER`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tca9535.pdf
 * Keywords: ti parallel port.
 * Default footprint: Package_DFN_QFN:VQFN-24-1EP_4x4mm_P0.5mm_EP2.45x2.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9535MRGER extends Component.withPins({
  /** Physical pin 1: P00; bidirectional. */
  "P00": "1",
  /** Physical pin 2: P01; bidirectional. */
  "P01": "2",
  /** Physical pin 3: P02; bidirectional. */
  "P02": "3",
  /** Physical pin 4: P03; bidirectional. */
  "P03": "4",
  /** Physical pin 5: P04; bidirectional. */
  "P04": "5",
  /** Physical pin 6: P05; bidirectional. */
  "P05": "6",
  /** Physical pin 7: P06; bidirectional. */
  "P06": "7",
  /** Physical pin 8: P07; bidirectional. */
  "P07": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: P10; bidirectional. */
  "P10": "10",
  /** Physical pin 11: P11; bidirectional. */
  "P11": "11",
  /** Physical pin 12: P12; bidirectional. */
  "P12": "12",
  /** Physical pin 13: P13; bidirectional. */
  "P13": "13",
  /** Physical pin 14: P14; bidirectional. */
  "P14": "14",
  /** Physical pin 15: P15; bidirectional. */
  "P15": "15",
  /** Physical pin 16: P16; bidirectional. */
  "P16": "16",
  /** Physical pin 17: P17; bidirectional. */
  "P17": "17",
  /** Physical pin 18: A0; input. */
  "A0": "18",
  /** Physical pin 19: SCL; input. */
  "SCL": "19",
  /** Physical pin 20: SDA; bidirectional. */
  "SDA": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: ~{INT}; open_collector. */
  "~{INT}": "22",
  /** Physical pin 23: A1; input. */
  "A1": "23",
  /** Physical pin 24: A2; input. */
  "A2": "24",
  /** Physical pin 25: EPAD; input. */
  "EPAD": "25",
}) {
  override schema = "Interface_Expansion:TCA9535MRGER";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C and SMBus interface, interrupts, w/o pull-ups, TSSOP-24 package
 *
 * KiCad symbol: `Interface_Expansion:TCA9535PWR`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tca9535.pdf
 * Keywords: ti parallel port.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9535PWR extends Component.withPins({
  /** Physical pin 1: ~{INT}; open_collector. */
  "~{INT}": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: P00; bidirectional. */
  "P00": "4",
  /** Physical pin 5: P01; bidirectional. */
  "P01": "5",
  /** Physical pin 6: P02; bidirectional. */
  "P02": "6",
  /** Physical pin 7: P03; bidirectional. */
  "P03": "7",
  /** Physical pin 8: P04; bidirectional. */
  "P04": "8",
  /** Physical pin 9: P05; bidirectional. */
  "P05": "9",
  /** Physical pin 10: P06; bidirectional. */
  "P06": "10",
  /** Physical pin 11: P07; bidirectional. */
  "P07": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: P10; bidirectional. */
  "P10": "13",
  /** Physical pin 14: P11; bidirectional. */
  "P11": "14",
  /** Physical pin 15: P12; bidirectional. */
  "P12": "15",
  /** Physical pin 16: P13; bidirectional. */
  "P13": "16",
  /** Physical pin 17: P14; bidirectional. */
  "P14": "17",
  /** Physical pin 18: P15; bidirectional. */
  "P15": "18",
  /** Physical pin 19: P16; bidirectional. */
  "P16": "19",
  /** Physical pin 20: P17; bidirectional. */
  "P17": "20",
  /** Physical pin 21: A0; input. */
  "A0": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
}) {
  override schema = "Interface_Expansion:TCA9535PWR";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C and SMBus interface, interrupts, w/o pull-ups, QFN-24
 *
 * KiCad symbol: `Interface_Expansion:TCA9535RTWR`. Reference prefix: `U`.
 * Footprint filters: WQFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tca9535.pdf
 * Keywords: ti parallel port.
 * Default footprint: Package_DFN_QFN:WQFN-24-1EP_4x4mm_P0.5mm_EP2.45x2.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9535RTWR extends Component.withPins({
  /** Physical pin 1: P00; bidirectional. */
  "P00": "1",
  /** Physical pin 2: P01; bidirectional. */
  "P01": "2",
  /** Physical pin 3: P02; bidirectional. */
  "P02": "3",
  /** Physical pin 4: P03; bidirectional. */
  "P03": "4",
  /** Physical pin 5: P04; bidirectional. */
  "P04": "5",
  /** Physical pin 6: P05; bidirectional. */
  "P05": "6",
  /** Physical pin 7: P06; bidirectional. */
  "P06": "7",
  /** Physical pin 8: P07; bidirectional. */
  "P07": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: P10; bidirectional. */
  "P10": "10",
  /** Physical pin 11: P11; bidirectional. */
  "P11": "11",
  /** Physical pin 12: P12; bidirectional. */
  "P12": "12",
  /** Physical pin 13: P13; bidirectional. */
  "P13": "13",
  /** Physical pin 14: P14; bidirectional. */
  "P14": "14",
  /** Physical pin 15: P15; bidirectional. */
  "P15": "15",
  /** Physical pin 16: P16; bidirectional. */
  "P16": "16",
  /** Physical pin 17: P17; bidirectional. */
  "P17": "17",
  /** Physical pin 18: A0; input. */
  "A0": "18",
  /** Physical pin 19: SCL; input. */
  "SCL": "19",
  /** Physical pin 20: SDA; bidirectional. */
  "SDA": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: ~{INT}; open_collector. */
  "~{INT}": "22",
  /** Physical pin 23: A1; input. */
  "A1": "23",
  /** Physical pin 24: A2; input. */
  "A2": "24",
  /** Physical pin 25: EPAD; input. */
  "EPAD": "25",
}) {
  override schema = "Interface_Expansion:TCA9535RTWR";
  override referencePrefix = "U";
}

/**
 * I2C Hub, 4 Channels, Interrupts, TSSOP-20
 *
 * KiCad symbol: `Interface_Expansion:TCA9544A`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tca9544a.pdf
 * Keywords: I2C Hub.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9544A extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: ~{INT0}; input. */
  "~{INT0}": "4",
  /** Physical pin 5: SD0; bidirectional. */
  "SD0": "5",
  /** Physical pin 6: SC0; bidirectional. */
  "SC0": "6",
  /** Physical pin 7: ~{INT1}; input. */
  "~{INT1}": "7",
  /** Physical pin 8: SD1; bidirectional. */
  "SD1": "8",
  /** Physical pin 9: SC1; bidirectional. */
  "SC1": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: ~{INT2}; input. */
  "~{INT2}": "11",
  /** Physical pin 12: SD2; bidirectional. */
  "SD2": "12",
  /** Physical pin 13: SC2; bidirectional. */
  "SC2": "13",
  /** Physical pin 14: ~{INT3}; input. */
  "~{INT3}": "14",
  /** Physical pin 15: SD3; bidirectional. */
  "SD3": "15",
  /** Physical pin 16: SC3; bidirectional. */
  "SC3": "16",
  /** Physical pin 17: ~{INT}; open_collector. */
  "~{INT}": "17",
  /** Physical pin 18: SCL; bidirectional. */
  "SCL": "18",
  /** Physical pin 19: SDA; bidirectional. */
  "SDA": "19",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
}) {
  override schema = "Interface_Expansion:TCA9544A";
  override referencePrefix = "U";
}

/**
 * I2C SMBus Hub, 4 Channels, Reset, Multiple Addresses, SOIC-16
 *
 * KiCad symbol: `Interface_Expansion:TCA9546AD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/tca9546a.pdf
 * Keywords: Texas.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9546AD extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: SD0; bidirectional. */
  "SD0": "4",
  /** Physical pin 5: SC0; bidirectional. */
  "SC0": "5",
  /** Physical pin 6: SD1; bidirectional. */
  "SD1": "6",
  /** Physical pin 7: SC1; bidirectional. */
  "SC1": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: SD2; bidirectional. */
  "SD2": "9",
  /** Physical pin 10: SC2; bidirectional. */
  "SC2": "10",
  /** Physical pin 11: SD3; bidirectional. */
  "SD3": "11",
  /** Physical pin 12: SC3; bidirectional. */
  "SC3": "12",
  /** Physical pin 13: A2; input. */
  "A2": "13",
  /** Physical pin 14: SCL; bidirectional. */
  "SCL": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
  override schema = "Interface_Expansion:TCA9546AD";
  override referencePrefix = "U";
}

/**
 * I2C SMBus Hub, 4 Channels, Reset, Multiple Addresses,TSSOP-16
 *
 * KiCad symbol: `Interface_Expansion:TCA9546APW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tca9546a.pdf
 * Keywords: Texas.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9546APW extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: SD0; bidirectional. */
  "SD0": "4",
  /** Physical pin 5: SC0; bidirectional. */
  "SC0": "5",
  /** Physical pin 6: SD1; bidirectional. */
  "SD1": "6",
  /** Physical pin 7: SC1; bidirectional. */
  "SC1": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: SD2; bidirectional. */
  "SD2": "9",
  /** Physical pin 10: SC2; bidirectional. */
  "SC2": "10",
  /** Physical pin 11: SD3; bidirectional. */
  "SD3": "11",
  /** Physical pin 12: SC3; bidirectional. */
  "SC3": "12",
  /** Physical pin 13: A2; input. */
  "A2": "13",
  /** Physical pin 14: SCL; bidirectional. */
  "SCL": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
  override schema = "Interface_Expansion:TCA9546APW";
  override referencePrefix = "U";
}

/**
 * Low voltage 8-channel I2C switch with reset, QFN-24
 *
 * KiCad symbol: `Interface_Expansion:TCA9548ARGER`. Reference prefix: `U`.
 * Footprint filters: Texas*RGE0024C*.
 * @see http://www.ti.com/lit/ds/symlink/tca9548a.pdf
 * Keywords: Low voltage 8-channel I2C switch with reset.
 * Default footprint: Package_DFN_QFN:Texas_RGE0024C_VQFN-24-1EP_4x4mm_P0.5mm_EP2.1x2.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9548ARGER extends Component.withPins({
  /** Physical pin 1: SD0; bidirectional. */
  "SD0": "1",
  /** Physical pin 2: SC0; output. */
  "SC0": "2",
  /** Physical pin 3: SD1; bidirectional. */
  "SD1": "3",
  /** Physical pin 4: SC1; output. */
  "SC1": "4",
  /** Physical pin 5: SD2; bidirectional. */
  "SD2": "5",
  /** Physical pin 6: SC2; output. */
  "SC2": "6",
  /** Physical pin 7: SD3; bidirectional. */
  "SD3": "7",
  /** Physical pin 8: SC3; output. */
  "SC3": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: SD4; bidirectional. */
  "SD4": "10",
  /** Physical pin 11: SC4; output. */
  "SC4": "11",
  /** Physical pin 12: SD5; bidirectional. */
  "SD5": "12",
  /** Physical pin 13: SC5; output. */
  "SC5": "13",
  /** Physical pin 14: SD6; bidirectional. */
  "SD6": "14",
  /** Physical pin 15: SC6; output. */
  "SC6": "15",
  /** Physical pin 16: SD7; bidirectional. */
  "SD7": "16",
  /** Physical pin 17: SC7; output. */
  "SC7": "17",
  /** Physical pin 18: A2; input. */
  "A2": "18",
  /** Physical pin 19: SCL; input. */
  "SCL": "19",
  /** Physical pin 20: SDA; bidirectional. */
  "SDA": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: A0; input. */
  "A0": "22",
  /** Physical pin 23: A1; input. */
  "A1": "23",
  /** Physical pin 24: ~{RESET}; input. */
  "~{RESET}": "24",
  /** Physical pin 25: 1EP; no_connect. */
  "1EP": "25",
}) {
  override schema = "Interface_Expansion:TCA9548ARGER";
  override referencePrefix = "U";
}

/**
 * 8 Bit Port/Expander, I2C SMBUS, Interrupt output, SSOP-16
 *
 * KiCad symbol: `Interface_Expansion:TCA9554DB`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x6.2mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tca9554.pdf
 * Keywords: SMBUS I2C Expander.
 * Default footprint: Package_SO:SSOP-16_5.3x6.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9554DB extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: P0; bidirectional. */
  "P0": "4",
  /** Physical pin 5: P1; bidirectional. */
  "P1": "5",
  /** Physical pin 6: P2; bidirectional. */
  "P2": "6",
  /** Physical pin 7: P3; bidirectional. */
  "P3": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: P4; bidirectional. */
  "P4": "9",
  /** Physical pin 10: P5; bidirectional. */
  "P5": "10",
  /** Physical pin 11: P6; bidirectional. */
  "P6": "11",
  /** Physical pin 12: P7; bidirectional. */
  "P7": "12",
  /** Physical pin 13: ~{INT}; open_collector. */
  "~{INT}": "13",
  /** Physical pin 14: SCL; input. */
  "SCL": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
  override schema = "Interface_Expansion:TCA9554DB";
  override referencePrefix = "U";
}

/**
 * 8 Bit Port/Expander, I2C SMBUS, Interrupt output, SSOP-16
 *
 * KiCad symbol: `Interface_Expansion:TCA9554DBQ`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x4.9mm*P0.635mm*.
 * @see http://www.ti.com/lit/ds/symlink/tca9554.pdf
 * Keywords: SMBUS I2C Expander.
 * Default footprint: Package_SO:SSOP-16_3.9x4.9mm_P0.635mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9554DBQ extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: P0; bidirectional. */
  "P0": "4",
  /** Physical pin 5: P1; bidirectional. */
  "P1": "5",
  /** Physical pin 6: P2; bidirectional. */
  "P2": "6",
  /** Physical pin 7: P3; bidirectional. */
  "P3": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: P4; bidirectional. */
  "P4": "9",
  /** Physical pin 10: P5; bidirectional. */
  "P5": "10",
  /** Physical pin 11: P6; bidirectional. */
  "P6": "11",
  /** Physical pin 12: P7; bidirectional. */
  "P7": "12",
  /** Physical pin 13: ~{INT}; open_collector. */
  "~{INT}": "13",
  /** Physical pin 14: SCL; input. */
  "SCL": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
  override schema = "Interface_Expansion:TCA9554DBQ";
  override referencePrefix = "U";
}

/**
 * 8 Bit Port/Expander, I2C SMBUS, Interrupt output, SOIC-16
 *
 * KiCad symbol: `Interface_Expansion:TCA9554DW`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/tca9554.pdf
 * Keywords: SMBUS I2C Expander.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9554DW extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: P0; bidirectional. */
  "P0": "4",
  /** Physical pin 5: P1; bidirectional. */
  "P1": "5",
  /** Physical pin 6: P2; bidirectional. */
  "P2": "6",
  /** Physical pin 7: P3; bidirectional. */
  "P3": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: P4; bidirectional. */
  "P4": "9",
  /** Physical pin 10: P5; bidirectional. */
  "P5": "10",
  /** Physical pin 11: P6; bidirectional. */
  "P6": "11",
  /** Physical pin 12: P7; bidirectional. */
  "P7": "12",
  /** Physical pin 13: ~{INT}; open_collector. */
  "~{INT}": "13",
  /** Physical pin 14: SCL; input. */
  "SCL": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
  override schema = "Interface_Expansion:TCA9554DW";
  override referencePrefix = "U";
}

/**
 * 8 Bit Port/Expander, I2C SMBUS, Interrupt output, TSSOP-16
 *
 * KiCad symbol: `Interface_Expansion:TCA9554PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tca9554.pdf
 * Keywords: SMBUS I2C Expander.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9554PW extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: P0; bidirectional. */
  "P0": "4",
  /** Physical pin 5: P1; bidirectional. */
  "P1": "5",
  /** Physical pin 6: P2; bidirectional. */
  "P2": "6",
  /** Physical pin 7: P3; bidirectional. */
  "P3": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: P4; bidirectional. */
  "P4": "9",
  /** Physical pin 10: P5; bidirectional. */
  "P5": "10",
  /** Physical pin 11: P6; bidirectional. */
  "P6": "11",
  /** Physical pin 12: P7; bidirectional. */
  "P7": "12",
  /** Physical pin 13: ~{INT}; open_collector. */
  "~{INT}": "13",
  /** Physical pin 14: SCL; input. */
  "SCL": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
  override schema = "Interface_Expansion:TCA9554PW";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C and SMBus interface, interrupts, w/ pull-ups, SSOP-24
 *
 * KiCad symbol: `Interface_Expansion:TCA9555DBR`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x8.2mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tca9555.pdf
 * Keywords: ti parallel port.
 * Default footprint: Package_SO:SSOP-24_5.3x8.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9555DBR extends Component.withPins({
  /** Physical pin 1: ~{INT}; open_collector. */
  "~{INT}": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: P00; bidirectional. */
  "P00": "4",
  /** Physical pin 5: P01; bidirectional. */
  "P01": "5",
  /** Physical pin 6: P02; bidirectional. */
  "P02": "6",
  /** Physical pin 7: P03; bidirectional. */
  "P03": "7",
  /** Physical pin 8: P04; bidirectional. */
  "P04": "8",
  /** Physical pin 9: P05; bidirectional. */
  "P05": "9",
  /** Physical pin 10: P06; bidirectional. */
  "P06": "10",
  /** Physical pin 11: P07; bidirectional. */
  "P07": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: P10; bidirectional. */
  "P10": "13",
  /** Physical pin 14: P11; bidirectional. */
  "P11": "14",
  /** Physical pin 15: P12; bidirectional. */
  "P12": "15",
  /** Physical pin 16: P13; bidirectional. */
  "P13": "16",
  /** Physical pin 17: P14; bidirectional. */
  "P14": "17",
  /** Physical pin 18: P15; bidirectional. */
  "P15": "18",
  /** Physical pin 19: P16; bidirectional. */
  "P16": "19",
  /** Physical pin 20: P17; bidirectional. */
  "P17": "20",
  /** Physical pin 21: A0; input. */
  "A0": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
}) {
  override schema = "Interface_Expansion:TCA9555DBR";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C and SMBus interface, interrupts, w/ pull-ups, SSOP-24
 *
 * KiCad symbol: `Interface_Expansion:TCA9555DBT`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x8.2mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tca9555.pdf
 * Keywords: ti parallel port.
 * Default footprint: Package_SO:SSOP-24_5.3x8.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9555DBT extends Component.withPins({
  /** Physical pin 1: ~{INT}; open_collector. */
  "~{INT}": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: P00; bidirectional. */
  "P00": "4",
  /** Physical pin 5: P01; bidirectional. */
  "P01": "5",
  /** Physical pin 6: P02; bidirectional. */
  "P02": "6",
  /** Physical pin 7: P03; bidirectional. */
  "P03": "7",
  /** Physical pin 8: P04; bidirectional. */
  "P04": "8",
  /** Physical pin 9: P05; bidirectional. */
  "P05": "9",
  /** Physical pin 10: P06; bidirectional. */
  "P06": "10",
  /** Physical pin 11: P07; bidirectional. */
  "P07": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: P10; bidirectional. */
  "P10": "13",
  /** Physical pin 14: P11; bidirectional. */
  "P11": "14",
  /** Physical pin 15: P12; bidirectional. */
  "P12": "15",
  /** Physical pin 16: P13; bidirectional. */
  "P13": "16",
  /** Physical pin 17: P14; bidirectional. */
  "P14": "17",
  /** Physical pin 18: P15; bidirectional. */
  "P15": "18",
  /** Physical pin 19: P16; bidirectional. */
  "P16": "19",
  /** Physical pin 20: P17; bidirectional. */
  "P17": "20",
  /** Physical pin 21: A0; input. */
  "A0": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
}) {
  override schema = "Interface_Expansion:TCA9555DBT";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C and SMBus interface, interrupts, w/ pull-ups, TSSOP-24 package
 *
 * KiCad symbol: `Interface_Expansion:TCA9555PWR`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/tca9555.pdf
 * Keywords: ti parallel port.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9555PWR extends Component.withPins({
  /** Physical pin 1: ~{INT}; open_collector. */
  "~{INT}": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: P00; bidirectional. */
  "P00": "4",
  /** Physical pin 5: P01; bidirectional. */
  "P01": "5",
  /** Physical pin 6: P02; bidirectional. */
  "P02": "6",
  /** Physical pin 7: P03; bidirectional. */
  "P03": "7",
  /** Physical pin 8: P04; bidirectional. */
  "P04": "8",
  /** Physical pin 9: P05; bidirectional. */
  "P05": "9",
  /** Physical pin 10: P06; bidirectional. */
  "P06": "10",
  /** Physical pin 11: P07; bidirectional. */
  "P07": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: P10; bidirectional. */
  "P10": "13",
  /** Physical pin 14: P11; bidirectional. */
  "P11": "14",
  /** Physical pin 15: P12; bidirectional. */
  "P12": "15",
  /** Physical pin 16: P13; bidirectional. */
  "P13": "16",
  /** Physical pin 17: P14; bidirectional. */
  "P14": "17",
  /** Physical pin 18: P15; bidirectional. */
  "P15": "18",
  /** Physical pin 19: P16; bidirectional. */
  "P16": "19",
  /** Physical pin 20: P17; bidirectional. */
  "P17": "20",
  /** Physical pin 21: A0; input. */
  "A0": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
}) {
  override schema = "Interface_Expansion:TCA9555PWR";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C and SMBus interface, interrupts, w/ pull-ups, QFN-24
 *
 * KiCad symbol: `Interface_Expansion:TCA9555RGER`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tca9555.pdf
 * Keywords: ti parallel port.
 * Default footprint: Package_DFN_QFN:VQFN-24-1EP_4x4mm_P0.5mm_EP2.45x2.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9555RGER extends Component.withPins({
  /** Physical pin 1: P00; bidirectional. */
  "P00": "1",
  /** Physical pin 2: P01; bidirectional. */
  "P01": "2",
  /** Physical pin 3: P02; bidirectional. */
  "P02": "3",
  /** Physical pin 4: P03; bidirectional. */
  "P03": "4",
  /** Physical pin 5: P04; bidirectional. */
  "P04": "5",
  /** Physical pin 6: P05; bidirectional. */
  "P05": "6",
  /** Physical pin 7: P06; bidirectional. */
  "P06": "7",
  /** Physical pin 8: P07; bidirectional. */
  "P07": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: P10; bidirectional. */
  "P10": "10",
  /** Physical pin 11: P11; bidirectional. */
  "P11": "11",
  /** Physical pin 12: P12; bidirectional. */
  "P12": "12",
  /** Physical pin 13: P13; bidirectional. */
  "P13": "13",
  /** Physical pin 14: P14; bidirectional. */
  "P14": "14",
  /** Physical pin 15: P15; bidirectional. */
  "P15": "15",
  /** Physical pin 16: P16; bidirectional. */
  "P16": "16",
  /** Physical pin 17: P17; bidirectional. */
  "P17": "17",
  /** Physical pin 18: A0; input. */
  "A0": "18",
  /** Physical pin 19: SCL; input. */
  "SCL": "19",
  /** Physical pin 20: SDA; bidirectional. */
  "SDA": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: ~{INT}; open_collector. */
  "~{INT}": "22",
  /** Physical pin 23: A1; input. */
  "A1": "23",
  /** Physical pin 24: A2; input. */
  "A2": "24",
  /** Physical pin 25: EPAD; input. */
  "EPAD": "25",
}) {
  override schema = "Interface_Expansion:TCA9555RGER";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C and SMBus interface, interrupts, w/ pull-ups, QFN-24
 *
 * KiCad symbol: `Interface_Expansion:TCA9555RTWR`. Reference prefix: `U`.
 * Footprint filters: WQFN*1EP*4x4mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tca9555.pdf
 * Keywords: ti parallel port.
 * Default footprint: Package_DFN_QFN:WQFN-24-1EP_4x4mm_P0.5mm_EP2.45x2.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCA9555RTWR extends Component.withPins({
  /** Physical pin 1: P00; bidirectional. */
  "P00": "1",
  /** Physical pin 2: P01; bidirectional. */
  "P01": "2",
  /** Physical pin 3: P02; bidirectional. */
  "P02": "3",
  /** Physical pin 4: P03; bidirectional. */
  "P03": "4",
  /** Physical pin 5: P04; bidirectional. */
  "P04": "5",
  /** Physical pin 6: P05; bidirectional. */
  "P05": "6",
  /** Physical pin 7: P06; bidirectional. */
  "P06": "7",
  /** Physical pin 8: P07; bidirectional. */
  "P07": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: P10; bidirectional. */
  "P10": "10",
  /** Physical pin 11: P11; bidirectional. */
  "P11": "11",
  /** Physical pin 12: P12; bidirectional. */
  "P12": "12",
  /** Physical pin 13: P13; bidirectional. */
  "P13": "13",
  /** Physical pin 14: P14; bidirectional. */
  "P14": "14",
  /** Physical pin 15: P15; bidirectional. */
  "P15": "15",
  /** Physical pin 16: P16; bidirectional. */
  "P16": "16",
  /** Physical pin 17: P17; bidirectional. */
  "P17": "17",
  /** Physical pin 18: A0; input. */
  "A0": "18",
  /** Physical pin 19: SCL; input. */
  "SCL": "19",
  /** Physical pin 20: SDA; bidirectional. */
  "SDA": "20",
  /** Physical pin 21: VCC; power_in. */
  "VCC": "21",
  /** Physical pin 22: ~{INT}; open_collector. */
  "~{INT}": "22",
  /** Physical pin 23: A1; input. */
  "A1": "23",
  /** Physical pin 24: A2; input. */
  "A2": "24",
  /** Physical pin 25: EPAD; input. */
  "EPAD": "25",
}) {
  override schema = "Interface_Expansion:TCA9555RTWR";
  override referencePrefix = "U";
}

/**
 * 8-bit I2C/SMBus I/O expander, 100 / 400 / 1000 kHz (standard / fast-mode / fast-mode-plus), interrupt output, 1.08 - 3.6V supply, TSSOP-16
 *
 * KiCad symbol: `Interface_Expansion:TCAL6408PW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm?P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tcal6408.pdf
 * Keywords: Texas-Instruments IO-expander GPIO.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCAL6408PW extends Component.withPins({
  /** Physical pin 1: V_{CCI}; power_in. */
  "V_{CCI}": "1",
  /** Physical pin 2: ADDR; input. */
  "ADDR": "2",
  /** Physical pin 3: ~{RESET}; input. */
  "~{RESET}": "3",
  /** Physical pin 4: P0; bidirectional. */
  "P0": "4",
  /** Physical pin 5: P1; bidirectional. */
  "P1": "5",
  /** Physical pin 6: P2; bidirectional. */
  "P2": "6",
  /** Physical pin 7: P3; bidirectional. */
  "P3": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: P4; bidirectional. */
  "P4": "9",
  /** Physical pin 10: P5; bidirectional. */
  "P5": "10",
  /** Physical pin 11: P6; bidirectional. */
  "P6": "11",
  /** Physical pin 12: P7; bidirectional. */
  "P7": "12",
  /** Physical pin 13: ~{INT}; open_collector. */
  "~{INT}": "13",
  /** Physical pin 14: SCL; input. */
  "SCL": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: V_{CCP}; power_in. */
  "V_{CCP}": "16",
}) {
  override schema = "Interface_Expansion:TCAL6408PW";
  override referencePrefix = "U";
}

/**
 * 8-bit I2C/SMBus I/O expander, 100 / 400 / 1000 kHz (standard / fast-mode / fast-mode-plus), interrupt output, 1.08 - 3.6V supply, UQFN-16
 *
 * KiCad symbol: `Interface_Expansion:TCAL6408RSV`. Reference prefix: `U`.
 * Footprint filters: *UQFN*1.8x2.6mm?P0.4mm*.
 * @see https://www.ti.com/lit/ds/symlink/tcal6408.pdf
 * Keywords: Texas-Instruments IO-expander GPIO.
 * Default footprint: Package_DFN_QFN:UQFN-16_1.8x2.6mm_P0.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TCAL6408RSV extends Component.withPins({
  /** Physical pin 1: ~{RESET}; input. */
  "~{RESET}": "1",
  /** Physical pin 2: P0; bidirectional. */
  "P0": "2",
  /** Physical pin 3: P1; bidirectional. */
  "P1": "3",
  /** Physical pin 4: P2; bidirectional. */
  "P2": "4",
  /** Physical pin 5: P3; bidirectional. */
  "P3": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: P4; bidirectional. */
  "P4": "7",
  /** Physical pin 8: P5; bidirectional. */
  "P5": "8",
  /** Physical pin 9: P6; bidirectional. */
  "P6": "9",
  /** Physical pin 10: P7; bidirectional. */
  "P7": "10",
  /** Physical pin 11: ~{INT}; open_collector. */
  "~{INT}": "11",
  /** Physical pin 12: SCL; input. */
  "SCL": "12",
  /** Physical pin 13: SDA; bidirectional. */
  "SDA": "13",
  /** Physical pin 14: V_{CCP}; power_in. */
  "V_{CCP}": "14",
  /** Physical pin 15: V_{CCI}; power_in. */
  "V_{CCI}": "15",
  /** Physical pin 16: ADDR; input. */
  "ADDR": "16",
}) {
  override schema = "Interface_Expansion:TCAL6408RSV";
  override referencePrefix = "U";
}

/**
 * Power Logic 8-bit Shift Register, DIP-8/SOIC-8
 *
 * KiCad symbol: `Interface_Expansion:TPIC6595`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/tpic6595.pdf
 * Keywords: shift register 8bit.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPIC6595 extends Component.withPins({
  /** Physical pin 1: PGND; power_in. */
  "PGND_1": "1",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: SER_IN; input. */
  "SER_IN": "3",
  /** Physical pin 4: DRAIN0; open_collector. */
  "DRAIN0": "4",
  /** Physical pin 5: DRAIN1; open_collector. */
  "DRAIN1": "5",
  /** Physical pin 6: DRAIN2; open_collector. */
  "DRAIN2": "6",
  /** Physical pin 7: DRAIN3; open_collector. */
  "DRAIN3": "7",
  /** Physical pin 8: ~{SRCLR}; input. */
  "~{SRCLR}": "8",
  /** Physical pin 9: ~{G}; input. */
  "~{G}": "9",
  /** Physical pin 10: PGND; passive. */
  "PGND_10": "10",
  /** Physical pin 11: PGND; passive. */
  "PGND_11": "11",
  /** Physical pin 12: RCLK; input. */
  "RCLK": "12",
  /** Physical pin 13: SRCK; input. */
  "SRCK": "13",
  /** Physical pin 14: DRAIN4; open_collector. */
  "DRAIN4": "14",
  /** Physical pin 15: DRAIN5; open_collector. */
  "DRAIN5": "15",
  /** Physical pin 16: DRAIN6; open_collector. */
  "DRAIN6": "16",
  /** Physical pin 17: DRAIN7; open_collector. */
  "DRAIN7": "17",
  /** Physical pin 18: SER_OUT; output. */
  "SER_OUT": "18",
  /** Physical pin 19: LGND; power_in. */
  "LGND": "19",
  /** Physical pin 20: PGND; passive. */
  "PGND_20": "20",
}) {
  override schema = "Interface_Expansion:TPIC6595";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C and SMBus interface, interrupts, w/ optional pull-ups, TSSOP-24 package
 *
 * KiCad symbol: `Interface_Expansion:XRA1201IG24`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see https://maxlinear-assets.azureedge.net/web/documents/xra1201.pdf
 * Keywords: IO expander i2c.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XRA1201IG24 extends Component.withPins({
  /** Physical pin 1: ~{INT}; open_collector. */
  "~{INT}": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: P0; bidirectional. */
  "P0": "4",
  /** Physical pin 5: P1; bidirectional. */
  "P1": "5",
  /** Physical pin 6: P2; bidirectional. */
  "P2": "6",
  /** Physical pin 7: P3; bidirectional. */
  "P3": "7",
  /** Physical pin 8: P4; bidirectional. */
  "P4": "8",
  /** Physical pin 9: P5; bidirectional. */
  "P5": "9",
  /** Physical pin 10: P6; bidirectional. */
  "P6": "10",
  /** Physical pin 11: P7; bidirectional. */
  "P7": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: P8; bidirectional. */
  "P8": "13",
  /** Physical pin 14: P9; bidirectional. */
  "P9": "14",
  /** Physical pin 15: P10; bidirectional. */
  "P10": "15",
  /** Physical pin 16: P11; bidirectional. */
  "P11": "16",
  /** Physical pin 17: P12; bidirectional. */
  "P12": "17",
  /** Physical pin 18: P13; bidirectional. */
  "P13": "18",
  /** Physical pin 19: P14; bidirectional. */
  "P14": "19",
  /** Physical pin 20: P15; bidirectional. */
  "P15": "20",
  /** Physical pin 21: A0; input. */
  "A0": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
}) {
  override schema = "Interface_Expansion:XRA1201IG24";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C and SMBus interface, interrupts, w/ optional pull-ups, QFN-24 package
 *
 * KiCad symbol: `Interface_Expansion:XRA1201IL24`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*4x4mm*P0.5mm*.
 * @see https://maxlinear-assets.azureedge.net/web/documents/xra1201.pdf
 * Keywords: IO expander i2c.
 * Default footprint: Package_DFN_QFN:VQFN-24-1EP_4x4mm_P0.5mm_EP2.45x2.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XRA1201IL24 extends Component.withPins({
  /** Physical pin 1: ~{INT}; open_collector. */
  "~{INT}": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: P0; bidirectional. */
  "P0": "4",
  /** Physical pin 5: P1; bidirectional. */
  "P1": "5",
  /** Physical pin 6: P2; bidirectional. */
  "P2": "6",
  /** Physical pin 7: P3; bidirectional. */
  "P3": "7",
  /** Physical pin 8: P4; bidirectional. */
  "P4": "8",
  /** Physical pin 9: P5; bidirectional. */
  "P5": "9",
  /** Physical pin 10: P6; bidirectional. */
  "P6": "10",
  /** Physical pin 11: P7; bidirectional. */
  "P7": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: P8; bidirectional. */
  "P8": "13",
  /** Physical pin 14: P9; bidirectional. */
  "P9": "14",
  /** Physical pin 15: P10; bidirectional. */
  "P10": "15",
  /** Physical pin 16: P11; bidirectional. */
  "P11": "16",
  /** Physical pin 17: P12; bidirectional. */
  "P12": "17",
  /** Physical pin 18: P13; bidirectional. */
  "P13": "18",
  /** Physical pin 19: P14; bidirectional. */
  "P14": "19",
  /** Physical pin 20: P15; bidirectional. */
  "P15": "20",
  /** Physical pin 21: A0; input. */
  "A0": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
  /** Physical pin 25: EPAD; power_in. */
  "EPAD": "25",
}) {
  override schema = "Interface_Expansion:XRA1201IL24";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C and SMBus interface, interrupts, w/ pull-ups, TSSOP-24 package
 *
 * KiCad symbol: `Interface_Expansion:XRA1201PIG24`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x7.8mm*P0.65mm*.
 * @see https://maxlinear-assets.azureedge.net/web/documents/xra1201.pdf
 * Keywords: IO expander i2c.
 * Default footprint: Package_SO:TSSOP-24_4.4x7.8mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XRA1201PIG24 extends Component.withPins({
  /** Physical pin 1: ~{INT}; open_collector. */
  "~{INT}": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: P0; bidirectional. */
  "P0": "4",
  /** Physical pin 5: P1; bidirectional. */
  "P1": "5",
  /** Physical pin 6: P2; bidirectional. */
  "P2": "6",
  /** Physical pin 7: P3; bidirectional. */
  "P3": "7",
  /** Physical pin 8: P4; bidirectional. */
  "P4": "8",
  /** Physical pin 9: P5; bidirectional. */
  "P5": "9",
  /** Physical pin 10: P6; bidirectional. */
  "P6": "10",
  /** Physical pin 11: P7; bidirectional. */
  "P7": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: P8; bidirectional. */
  "P8": "13",
  /** Physical pin 14: P9; bidirectional. */
  "P9": "14",
  /** Physical pin 15: P10; bidirectional. */
  "P10": "15",
  /** Physical pin 16: P11; bidirectional. */
  "P11": "16",
  /** Physical pin 17: P12; bidirectional. */
  "P12": "17",
  /** Physical pin 18: P13; bidirectional. */
  "P13": "18",
  /** Physical pin 19: P14; bidirectional. */
  "P14": "19",
  /** Physical pin 20: P15; bidirectional. */
  "P15": "20",
  /** Physical pin 21: A0; input. */
  "A0": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
}) {
  override schema = "Interface_Expansion:XRA1201PIG24";
  override referencePrefix = "U";
}

/**
 * 16-bit I/O expander, I2C and SMBus interface, interrupts, w/ pull-ups, QFN-24 package
 *
 * KiCad symbol: `Interface_Expansion:XRA1201PIL24`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*4x4mm*P0.5mm*.
 * @see https://maxlinear-assets.azureedge.net/web/documents/xra1201.pdf
 * Keywords: IO expander i2c.
 * Default footprint: Package_DFN_QFN:VQFN-24-1EP_4x4mm_P0.5mm_EP2.45x2.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XRA1201PIL24 extends Component.withPins({
  /** Physical pin 1: ~{INT}; open_collector. */
  "~{INT}": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: P0; bidirectional. */
  "P0": "4",
  /** Physical pin 5: P1; bidirectional. */
  "P1": "5",
  /** Physical pin 6: P2; bidirectional. */
  "P2": "6",
  /** Physical pin 7: P3; bidirectional. */
  "P3": "7",
  /** Physical pin 8: P4; bidirectional. */
  "P4": "8",
  /** Physical pin 9: P5; bidirectional. */
  "P5": "9",
  /** Physical pin 10: P6; bidirectional. */
  "P6": "10",
  /** Physical pin 11: P7; bidirectional. */
  "P7": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: P8; bidirectional. */
  "P8": "13",
  /** Physical pin 14: P9; bidirectional. */
  "P9": "14",
  /** Physical pin 15: P10; bidirectional. */
  "P10": "15",
  /** Physical pin 16: P11; bidirectional. */
  "P11": "16",
  /** Physical pin 17: P12; bidirectional. */
  "P12": "17",
  /** Physical pin 18: P13; bidirectional. */
  "P13": "18",
  /** Physical pin 19: P14; bidirectional. */
  "P14": "19",
  /** Physical pin 20: P15; bidirectional. */
  "P15": "20",
  /** Physical pin 21: A0; input. */
  "A0": "21",
  /** Physical pin 22: SCL; input. */
  "SCL": "22",
  /** Physical pin 23: SDA; bidirectional. */
  "SDA": "23",
  /** Physical pin 24: VCC; power_in. */
  "VCC": "24",
  /** Physical pin 25: EPAD; power_in. */
  "EPAD": "25",
}) {
  override schema = "Interface_Expansion:XRA1201PIL24";
  override referencePrefix = "U";
}

