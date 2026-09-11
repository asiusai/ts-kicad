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
 */
export class AS1115_BQFT extends Component.withPins({
  "DIG2": "1",
  "DIG3": "2",
  "GND": "3",
  "DIG4": "4",
  "DIG5": "5",
  "DIG6": "6",
  "DIG7": "7",
  "KEYA": "8",
  "KEYB": "9",
  "ISET": "10",
  "SCL": "11",
  "SEGA": "12",
  "SEGF": "13",
  "SEGB": "14",
  "SEGG": "15",
  "VDD": "16",
  "SEGC": "17",
  "SEGE": "18",
  "SEGDP": "19",
  "SEGD": "20",
  "IRQ": "21",
  "SDA": "22",
  "DIG0": "23",
  "DIG1": "24",
  "EP": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG2: "open_collector", DIG3: "open_collector", GND: "power_in", DIG4: "open_collector", DIG5: "open_collector", DIG6: "open_collector", DIG7: "open_collector", KEYA: "open_collector", KEYB: "open_collector", ISET: "passive", SCL: "input", SEGA: "output", SEGF: "output", SEGB: "output", SEGG: "output", VDD: "power_in", SEGC: "output", SEGE: "output", SEGDP: "output", SEGD: "output", IRQ: "open_collector", SDA: "bidirectional", DIG0: "open_collector", DIG1: "open_collector", EP: "passive", ...opts.pinTypes } });
  }
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
 */
export class AS1115_BSST extends Component.withPins({
  "SDA": "1",
  "DIG0": "2",
  "DIG1": "3",
  "DIG2": "4",
  "DIG3": "5",
  "GND": "6",
  "DIG4": "7",
  "DIG5": "8",
  "DIG6": "9",
  "DIG7": "10",
  "KEYA": "11",
  "KEYB": "12",
  "ISET": "13",
  "SCL": "14",
  "SEGA": "15",
  "SEGF": "16",
  "SEGB": "17",
  "SEGG": "18",
  "VDD": "19",
  "SEGC": "20",
  "SEGE": "21",
  "SEGDP": "22",
  "SEGD": "23",
  "IRQ": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", DIG0: "open_collector", DIG1: "open_collector", DIG2: "open_collector", DIG3: "open_collector", GND: "power_in", DIG4: "open_collector", DIG5: "open_collector", DIG6: "open_collector", DIG7: "open_collector", KEYA: "open_collector", KEYB: "open_collector", ISET: "passive", SCL: "input", SEGA: "output", SEGF: "output", SEGB: "output", SEGG: "output", VDD: "power_in", SEGC: "output", SEGE: "output", SEGDP: "output", SEGD: "output", IRQ: "open_collector", ...opts.pinTypes } });
  }
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
 */
export class AW9523B extends Component.withPins({
  "P1_0": "1",
  "P1_1": "2",
  "P1_2": "3",
  "P1_3": "4",
  "P0_0": "5",
  "P0_1": "6",
  "P0_2": "7",
  "P0_3": "8",
  "GND_9": "9",
  "P0_4": "10",
  "P0_5": "11",
  "P0_6": "12",
  "P0_7": "13",
  "P1_4": "14",
  "P1_5": "15",
  "P1_6": "16",
  "P1_7": "17",
  "AD0": "18",
  "SCL": "19",
  "SDA": "20",
  "VCC": "21",
  "~{INT}": "22",
  "~{RST}": "23",
  "AD1": "24",
  "GND_25": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1_0: "bidirectional", P1_1: "bidirectional", P1_2: "bidirectional", P1_3: "bidirectional", P0_0: "bidirectional", P0_1: "bidirectional", P0_2: "bidirectional", P0_3: "bidirectional", GND_9: "power_in", P0_4: "bidirectional", P0_5: "bidirectional", P0_6: "bidirectional", P0_7: "bidirectional", P1_4: "bidirectional", P1_5: "bidirectional", P1_6: "bidirectional", P1_7: "bidirectional", AD0: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", "~{INT}": "open_collector", "~{RST}": "input", AD1: "input", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class DS2484Q extends Component.withPins({
  "SCL": "1",
  "SDA": "2",
  "~{SLPZ}": "3",
  "N.C._4": "4",
  "N.C._5": "5",
  "V_{CC}": "6",
  "IO": "7",
  "GND": "8",
  "EP": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCL: "input", SDA: "bidirectional", "~{SLPZ}": "input", "N.C._4": "no_connect", "N.C._5": "no_connect", "V_{CC}": "power_in", IO: "bidirectional", GND: "power_in", EP: "passive", ...opts.pinTypes } });
  }
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
 */
export class DS2484R extends Component.withPins({
  "~{SLPZ}": "1",
  "SDA": "2",
  "SCL": "3",
  "GND": "4",
  "IO": "5",
  "V_{CC}": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{SLPZ}": "input", SDA: "bidirectional", SCL: "input", GND: "power_in", IO: "bidirectional", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class LTC4314xGN extends Component.withPins({
  "SCLOUT1": "3",
  "DISCEN": "1",
  "VCC": "2",
  "SDAOUT1": "4",
  "SDAIN": "5",
  "SCLIN": "6",
  "SCLOUT2": "7",
  "SDAOUT2": "8",
  "ENABLE4": "9",
  "ENABLE3": "10",
  "ENABLE2": "11",
  "ENABLE1": "12",
  "SCLOUT3": "13",
  "SDAOUT3": "14",
  "~{FAULT}": "15",
  "VCC2": "16",
  "SCLOUT4": "17",
  "SDAOUT4": "18",
  "GND": "19",
  "~{ACC}": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCLOUT1: "bidirectional", DISCEN: "input", VCC: "power_in", SDAOUT1: "bidirectional", SDAIN: "bidirectional", SCLIN: "bidirectional", SCLOUT2: "bidirectional", SDAOUT2: "bidirectional", ENABLE4: "input", ENABLE3: "input", ENABLE2: "input", ENABLE1: "input", SCLOUT3: "bidirectional", SDAOUT3: "bidirectional", "~{FAULT}": "open_collector", VCC2: "power_in", SCLOUT4: "bidirectional", SDAOUT4: "bidirectional", GND: "power_in", "~{ACC}": "input", ...opts.pinTypes } });
  }
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
 */
export class LTC4314xUDC extends Component.withPins({
  "SCLOUT1": "1",
  "SDAOUT1": "2",
  "SDAIN": "3",
  "SCLIN": "4",
  "SCLOUT2": "5",
  "SDAOUT2": "6",
  "ENABLE4": "7",
  "ENABLE3": "8",
  "ENABLE2": "9",
  "ENABLE1": "10",
  "SCLOUT3": "11",
  "SDAOUT3": "12",
  "~{FAULT}": "13",
  "VCC2": "14",
  "SCLOUT4": "15",
  "SDAOUT4": "16",
  "GND": "17",
  "~{ACC}": "18",
  "DISCEN": "19",
  "VCC": "20",
  "EP": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCLOUT1: "bidirectional", SDAOUT1: "bidirectional", SDAIN: "bidirectional", SCLIN: "bidirectional", SCLOUT2: "bidirectional", SDAOUT2: "bidirectional", ENABLE4: "input", ENABLE3: "input", ENABLE2: "input", ENABLE1: "input", SCLOUT3: "bidirectional", SDAOUT3: "bidirectional", "~{FAULT}": "open_collector", VCC2: "power_in", SCLOUT4: "bidirectional", SDAOUT4: "bidirectional", GND: "power_in", "~{ACC}": "input", DISCEN: "input", VCC: "power_in", EP: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC4316xDD extends Component.withPins({
  "GND": "1",
  "XORH": "2",
  "XORL": "3",
  "V_{CC}": "4",
  "ENABLE": "5",
  "READY": "6",
  "SDAIN": "7",
  "SDAOUT": "8",
  "SCLOUT": "9",
  "SCLIN": "10",
  "EP": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", XORH: "input", XORL: "input", "V_{CC}": "power_in", ENABLE: "input", READY: "open_collector", SDAIN: "bidirectional", SDAOUT: "bidirectional", SCLOUT: "output", SCLIN: "input", EP: "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC4317 extends Component.withPins({
  "GND": "1",
  "ENABLE2": "2",
  "XORH2": "3",
  "XORL2": "4",
  "XORH1": "5",
  "XORL1": "6",
  "VCC": "7",
  "ENABLE1": "8",
  "READY2": "9",
  "READY1": "10",
  "SDAOUT2": "11",
  "SDAIN": "12",
  "SDAOUT1": "13",
  "SCLOUT1": "14",
  "SCLIN": "15",
  "SCLOUT2": "16",
  "EP": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", ENABLE2: "input", XORH2: "input", XORL2: "input", XORH1: "input", XORL1: "input", VCC: "power_in", ENABLE1: "input", READY2: "open_collector", READY1: "open_collector", SDAOUT2: "bidirectional", SDAIN: "bidirectional", SDAOUT1: "bidirectional", SCLOUT1: "output", SCLIN: "input", SCLOUT2: "output", EP: "passive", ...opts.pinTypes } });
  }
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
 */
export class MAX31910xUI extends Component.withPins({
  "DB0": "1",
  "DB1": "2",
  "IN1": "3",
  "RT1": "4",
  "IN2": "5",
  "RT2": "6",
  "IN3": "7",
  "RT3": "8",
  "IN4": "9",
  "RT4": "10",
  "IN5": "11",
  "RT5": "12",
  "RIREF": "13",
  "V_{CC24V}": "14",
  "5VOUT": "15",
  "~{FAULT}": "16",
  "RT6": "17",
  "IN6": "18",
  "RT7": "19",
  "IN7": "20",
  "RT8": "21",
  "IN8": "22",
  "SOUT": "23",
  "~{CS}": "24",
  "CLK": "25",
  "MODESEL": "26",
  "SIN": "27",
  "GND_28": "28",
  "GND_29": "29",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DB0: "input", DB1: "input", IN1: "input", RT1: "output", IN2: "input", RT2: "output", IN3: "input", RT3: "output", IN4: "input", RT4: "output", IN5: "input", RT5: "output", RIREF: "passive", "V_{CC24V}": "power_in", "5VOUT": "power_out", "~{FAULT}": "open_collector", RT6: "output", IN6: "input", RT7: "output", IN7: "input", RT8: "output", IN8: "input", SOUT: "output", "~{CS}": "input", CLK: "input", MODESEL: "input", SIN: "input", GND_28: "power_in", GND_29: "passive", ...opts.pinTypes } });
  }
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
 */
export class MAX31911xUI extends Component.withPins({
  "DB0": "1",
  "DB1": "2",
  "IN1": "3",
  "RT1": "4",
  "IN2": "5",
  "RT2": "6",
  "IN3": "7",
  "RT3": "8",
  "IN4": "9",
  "RT4": "10",
  "IN5": "11",
  "RT5": "12",
  "RIREF": "13",
  "V_{CC24V}": "14",
  "5VOUT": "15",
  "~{FAULT}": "16",
  "RT6": "17",
  "IN6": "18",
  "RT7": "19",
  "IN7": "20",
  "RT8": "21",
  "IN8": "22",
  "SOUT": "23",
  "~{CS}": "24",
  "CLK": "25",
  "MODESEL": "26",
  "SIN": "27",
  "GND_28": "28",
  "GND_29": "29",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DB0: "input", DB1: "input", IN1: "input", RT1: "output", IN2: "input", RT2: "output", IN3: "input", RT3: "output", IN4: "input", RT4: "output", IN5: "input", RT5: "output", RIREF: "passive", "V_{CC24V}": "power_in", "5VOUT": "power_out", "~{FAULT}": "open_collector", RT6: "output", IN6: "input", RT7: "output", IN7: "input", RT8: "output", IN8: "input", SOUT: "output", "~{CS}": "input", CLK: "input", MODESEL: "input", SIN: "input", GND_28: "power_in", GND_29: "passive", ...opts.pinTypes } });
  }
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
 */
export class MAX31912xUI extends Component.withPins({
  "DB0": "1",
  "DB1": "2",
  "IN1": "3",
  "RT1": "4",
  "IN2": "5",
  "RT2": "6",
  "IN3": "7",
  "RT3": "8",
  "IN4": "9",
  "RT4": "10",
  "IN5": "11",
  "RT5": "12",
  "RIREF": "13",
  "V_{CC24V}": "14",
  "5VOUT": "15",
  "~{FAULT}": "16",
  "RT6": "17",
  "IN6": "18",
  "RT7": "19",
  "IN7": "20",
  "RT8": "21",
  "IN8": "22",
  "SOUT": "23",
  "~{CS}": "24",
  "CLK": "25",
  "MODESEL": "26",
  "SIN": "27",
  "GND_28": "28",
  "GND_29": "29",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DB0: "input", DB1: "input", IN1: "input", RT1: "output", IN2: "input", RT2: "output", IN3: "input", RT3: "output", IN4: "input", RT4: "output", IN5: "input", RT5: "output", RIREF: "passive", "V_{CC24V}": "power_in", "5VOUT": "power_out", "~{FAULT}": "open_collector", RT6: "output", IN6: "input", RT7: "output", IN7: "input", RT8: "output", IN8: "input", SOUT: "output", "~{CS}": "input", CLK: "input", MODESEL: "input", SIN: "input", GND_28: "power_in", GND_29: "passive", ...opts.pinTypes } });
  }
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
 */
export class MAX31913xUI extends Component.withPins({
  "DB0": "1",
  "DB1": "2",
  "IN1": "3",
  "RT1": "4",
  "IN2": "5",
  "RT2": "6",
  "IN3": "7",
  "RT3": "8",
  "IN4": "9",
  "RT4": "10",
  "IN5": "11",
  "RT5": "12",
  "RIREF": "13",
  "V_{CC24V}": "14",
  "5VOUT": "15",
  "~{FAULT}": "16",
  "RT6": "17",
  "IN6": "18",
  "RT7": "19",
  "IN7": "20",
  "RT8": "21",
  "IN8": "22",
  "SOUT": "23",
  "~{CS}": "24",
  "CLK": "25",
  "MODESEL": "26",
  "SIN": "27",
  "GND_28": "28",
  "GND_29": "29",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DB0: "input", DB1: "input", IN1: "input", RT1: "output", IN2: "input", RT2: "output", IN3: "input", RT3: "output", IN4: "input", RT4: "output", IN5: "input", RT5: "output", RIREF: "passive", "V_{CC24V}": "power_in", "5VOUT": "power_out", "~{FAULT}": "open_collector", RT6: "output", IN6: "input", RT7: "output", IN7: "input", RT8: "output", IN8: "input", SOUT: "output", "~{CS}": "input", CLK: "input", MODESEL: "input", SIN: "input", GND_28: "power_in", GND_29: "passive", ...opts.pinTypes } });
  }
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
 */
export class MAX7325AEG_ extends Component.withPins({
  "~{INT}": "1",
  "~{RST}": "2",
  "AD2": "3",
  "P0": "4",
  "P1": "5",
  "P2": "6",
  "P3": "7",
  "P4": "8",
  "P5": "9",
  "P6": "10",
  "P7": "11",
  "GND": "12",
  "O8": "13",
  "O9": "14",
  "O10": "15",
  "O11": "16",
  "O12": "17",
  "O13": "18",
  "O14": "19",
  "O15": "20",
  "AD0": "21",
  "SCL": "22",
  "SDA": "23",
  "V+": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{INT}": "open_collector", "~{RST}": "input", AD2: "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", GND: "power_in", O8: "open_collector", O9: "open_collector", O10: "open_collector", O11: "open_collector", O12: "open_collector", O13: "open_collector", O14: "open_collector", O15: "open_collector", AD0: "input", SCL: "input", SDA: "bidirectional", "V+": "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP23008_xML extends Component.withPins({
  "A2": "1",
  "A1": "2",
  "A0": "3",
  "~{RESET}": "4",
  "NC_5": "5",
  "NC_6": "6",
  "INT": "7",
  "NC_8": "8",
  "GP0": "9",
  "GP1": "10",
  "GP2": "11",
  "GP3": "12",
  "GP4": "13",
  "GP5": "14",
  "GP6": "15",
  "GP7": "16",
  "VSS": "17",
  "VDD": "18",
  "SCL": "19",
  "SDA": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A2: "input", A1: "input", A0: "input", "~{RESET}": "input", NC_5: "no_connect", NC_6: "no_connect", INT: "output", NC_8: "no_connect", GP0: "bidirectional", GP1: "bidirectional", GP2: "bidirectional", GP3: "bidirectional", GP4: "bidirectional", GP5: "bidirectional", GP6: "bidirectional", GP7: "bidirectional", VSS: "power_in", VDD: "power_in", SCL: "input", SDA: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class MCP23008_xP extends Component.withPins({
  "SCL": "1",
  "SDA": "2",
  "A2": "3",
  "A1": "4",
  "A0": "5",
  "~{RESET}": "6",
  "NC": "7",
  "INT": "8",
  "VSS": "9",
  "GP0": "10",
  "GP1": "11",
  "GP2": "12",
  "GP3": "13",
  "GP4": "14",
  "GP5": "15",
  "GP6": "16",
  "GP7": "17",
  "VDD": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCL: "input", SDA: "bidirectional", A2: "input", A1: "input", A0: "input", "~{RESET}": "input", NC: "no_connect", INT: "output", VSS: "power_in", GP0: "bidirectional", GP1: "bidirectional", GP2: "bidirectional", GP3: "bidirectional", GP4: "bidirectional", GP5: "bidirectional", GP6: "bidirectional", GP7: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP23008_xSO extends Component.withPins({
  "SCL": "1",
  "SDA": "2",
  "A2": "3",
  "A1": "4",
  "A0": "5",
  "~{RESET}": "6",
  "NC": "7",
  "INT": "8",
  "VSS": "9",
  "GP0": "10",
  "GP1": "11",
  "GP2": "12",
  "GP3": "13",
  "GP4": "14",
  "GP5": "15",
  "GP6": "16",
  "GP7": "17",
  "VDD": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCL: "input", SDA: "bidirectional", A2: "input", A1: "input", A0: "input", "~{RESET}": "input", NC: "no_connect", INT: "output", VSS: "power_in", GP0: "bidirectional", GP1: "bidirectional", GP2: "bidirectional", GP3: "bidirectional", GP4: "bidirectional", GP5: "bidirectional", GP6: "bidirectional", GP7: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP23008_xSS extends Component.withPins({
  "SCL": "1",
  "SDA": "2",
  "A2": "3",
  "A1": "4",
  "A0": "5",
  "~{RESET}": "6",
  "NC_7": "7",
  "INT": "8",
  "VSS": "9",
  "NC_10": "10",
  "NC_11": "11",
  "GP0": "12",
  "GP1": "13",
  "GP2": "14",
  "GP3": "15",
  "GP4": "16",
  "GP5": "17",
  "GP6": "18",
  "GP7": "19",
  "VDD": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCL: "input", SDA: "bidirectional", A2: "input", A1: "input", A0: "input", "~{RESET}": "input", NC_7: "no_connect", INT: "output", VSS: "power_in", NC_10: "no_connect", NC_11: "no_connect", GP0: "bidirectional", GP1: "bidirectional", GP2: "bidirectional", GP3: "bidirectional", GP4: "bidirectional", GP5: "bidirectional", GP6: "bidirectional", GP7: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MCP23017x_x_ML extends Component.withPins({
  "GPB4": "1",
  "GPB5": "2",
  "GPB6": "3",
  "GPB7": "4",
  "V_{DD}": "5",
  "V_{SS}": "6",
  "NC_7": "7",
  "SCK": "8",
  "SDA": "9",
  "NC_10": "10",
  "A0": "11",
  "A1": "12",
  "A2": "13",
  "~{RESET}": "14",
  "INTB": "15",
  "INTA": "16",
  "GPA0": "17",
  "GPA1": "18",
  "GPA2": "19",
  "GPA3": "20",
  "GPA4": "21",
  "GPA5": "22",
  "GPA6": "23",
  "GPA7": "24",
  "GPB0": "25",
  "GPB1": "26",
  "GPB2": "27",
  "GPB3": "28",
  "EP": "29",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GPB4: "bidirectional", GPB5: "bidirectional", GPB6: "bidirectional", GPB7: "output", "V_{DD}": "power_in", "V_{SS}": "power_in", NC_7: "no_connect", SCK: "input", SDA: "bidirectional", NC_10: "no_connect", A0: "input", A1: "input", A2: "input", "~{RESET}": "input", INTB: "tri_state", INTA: "tri_state", GPA0: "bidirectional", GPA1: "bidirectional", GPA2: "bidirectional", GPA3: "bidirectional", GPA4: "bidirectional", GPA5: "bidirectional", GPA6: "bidirectional", GPA7: "output", GPB0: "bidirectional", GPB1: "bidirectional", GPB2: "bidirectional", GPB3: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
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
 */
export class MCP23017x_x_SO extends Component.withPins({
  "GPB0": "1",
  "GPB1": "2",
  "GPB2": "3",
  "GPB3": "4",
  "GPB4": "5",
  "GPB5": "6",
  "GPB6": "7",
  "GPB7": "8",
  "V_{DD}": "9",
  "V_{SS}": "10",
  "NC_11": "11",
  "SCK": "12",
  "SDA": "13",
  "NC_14": "14",
  "A0": "15",
  "A1": "16",
  "A2": "17",
  "~{RESET}": "18",
  "INTB": "19",
  "INTA": "20",
  "GPA0": "21",
  "GPA1": "22",
  "GPA2": "23",
  "GPA3": "24",
  "GPA4": "25",
  "GPA5": "26",
  "GPA6": "27",
  "GPA7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GPB0: "bidirectional", GPB1: "bidirectional", GPB2: "bidirectional", GPB3: "bidirectional", GPB4: "bidirectional", GPB5: "bidirectional", GPB6: "bidirectional", GPB7: "output", "V_{DD}": "power_in", "V_{SS}": "power_in", NC_11: "no_connect", SCK: "input", SDA: "bidirectional", NC_14: "no_connect", A0: "input", A1: "input", A2: "input", "~{RESET}": "input", INTB: "tri_state", INTA: "tri_state", GPA0: "bidirectional", GPA1: "bidirectional", GPA2: "bidirectional", GPA3: "bidirectional", GPA4: "bidirectional", GPA5: "bidirectional", GPA6: "bidirectional", GPA7: "output", ...opts.pinTypes } });
  }
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
 */
export class MCP23017x_x_SP extends Component.withPins({
  "GPB0": "1",
  "GPB1": "2",
  "GPB2": "3",
  "GPB3": "4",
  "GPB4": "5",
  "GPB5": "6",
  "GPB6": "7",
  "GPB7": "8",
  "V_{DD}": "9",
  "V_{SS}": "10",
  "NC_11": "11",
  "SCK": "12",
  "SDA": "13",
  "NC_14": "14",
  "A0": "15",
  "A1": "16",
  "A2": "17",
  "~{RESET}": "18",
  "INTB": "19",
  "INTA": "20",
  "GPA0": "21",
  "GPA1": "22",
  "GPA2": "23",
  "GPA3": "24",
  "GPA4": "25",
  "GPA5": "26",
  "GPA6": "27",
  "GPA7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GPB0: "bidirectional", GPB1: "bidirectional", GPB2: "bidirectional", GPB3: "bidirectional", GPB4: "bidirectional", GPB5: "bidirectional", GPB6: "bidirectional", GPB7: "output", "V_{DD}": "power_in", "V_{SS}": "power_in", NC_11: "no_connect", SCK: "input", SDA: "bidirectional", NC_14: "no_connect", A0: "input", A1: "input", A2: "input", "~{RESET}": "input", INTB: "tri_state", INTA: "tri_state", GPA0: "bidirectional", GPA1: "bidirectional", GPA2: "bidirectional", GPA3: "bidirectional", GPA4: "bidirectional", GPA5: "bidirectional", GPA6: "bidirectional", GPA7: "output", ...opts.pinTypes } });
  }
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
 */
export class MCP23017x_x_SS extends Component.withPins({
  "GPB0": "1",
  "GPB1": "2",
  "GPB2": "3",
  "GPB3": "4",
  "GPB4": "5",
  "GPB5": "6",
  "GPB6": "7",
  "GPB7": "8",
  "V_{DD}": "9",
  "V_{SS}": "10",
  "NC_11": "11",
  "SCK": "12",
  "SDA": "13",
  "NC_14": "14",
  "A0": "15",
  "A1": "16",
  "A2": "17",
  "~{RESET}": "18",
  "INTB": "19",
  "INTA": "20",
  "GPA0": "21",
  "GPA1": "22",
  "GPA2": "23",
  "GPA3": "24",
  "GPA4": "25",
  "GPA5": "26",
  "GPA6": "27",
  "GPA7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GPB0: "bidirectional", GPB1: "bidirectional", GPB2: "bidirectional", GPB3: "bidirectional", GPB4: "bidirectional", GPB5: "bidirectional", GPB6: "bidirectional", GPB7: "output", "V_{DD}": "power_in", "V_{SS}": "power_in", NC_11: "no_connect", SCK: "input", SDA: "bidirectional", NC_14: "no_connect", A0: "input", A1: "input", A2: "input", "~{RESET}": "input", INTB: "tri_state", INTA: "tri_state", GPA0: "bidirectional", GPA1: "bidirectional", GPA2: "bidirectional", GPA3: "bidirectional", GPA4: "bidirectional", GPA5: "bidirectional", GPA6: "bidirectional", GPA7: "output", ...opts.pinTypes } });
  }
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
 */
export class MCP23018x_x_MJ extends Component.withPins({
  "GPB1": "1",
  "GPB2": "2",
  "GPB3": "3",
  "GPB4": "4",
  "GPB5": "5",
  "GPB6": "6",
  "GPB7": "7",
  "V_{DD}": "8",
  "SCL": "9",
  "SDA": "10",
  "ADDR": "11",
  "~{RESET}": "12",
  "INTB": "13",
  "INTA": "14",
  "GPA0": "15",
  "GPA1": "16",
  "GPA2": "17",
  "GPA3": "18",
  "GPA4": "19",
  "GPA5": "20",
  "GPA6": "21",
  "GPA7": "22",
  "V_{SS}": "23",
  "GPB0": "24",
  "EP": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GPB1: "bidirectional", GPB2: "bidirectional", GPB3: "bidirectional", GPB4: "bidirectional", GPB5: "bidirectional", GPB6: "bidirectional", GPB7: "bidirectional", "V_{DD}": "power_in", SCL: "input", SDA: "bidirectional", ADDR: "input", "~{RESET}": "input", INTB: "output", INTA: "output", GPA0: "bidirectional", GPA1: "bidirectional", GPA2: "bidirectional", GPA3: "bidirectional", GPA4: "bidirectional", GPA5: "bidirectional", GPA6: "bidirectional", GPA7: "bidirectional", "V_{SS}": "power_in", GPB0: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
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
 */
export class MCP23018x_x_SO extends Component.withPins({
  "V_{SS}": "1",
  "NC_2": "2",
  "GPB0": "3",
  "GPB1": "4",
  "GPB2": "5",
  "GPB3": "6",
  "GPB4": "7",
  "GPB5": "8",
  "GPB6": "9",
  "GPB7": "10",
  "V_{DD}": "11",
  "SCL": "12",
  "SDA": "13",
  "NC_14": "14",
  "ADDR": "15",
  "~{RESET}": "16",
  "NC_17": "17",
  "INTB": "18",
  "INTA": "19",
  "GPA0": "20",
  "GPA1": "21",
  "GPA2": "22",
  "GPA3": "23",
  "GPA4": "24",
  "GPA5": "25",
  "GPA6": "26",
  "GPA7": "27",
  "NC_28": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{SS}": "power_in", NC_2: "no_connect", GPB0: "bidirectional", GPB1: "bidirectional", GPB2: "bidirectional", GPB3: "bidirectional", GPB4: "bidirectional", GPB5: "bidirectional", GPB6: "bidirectional", GPB7: "bidirectional", "V_{DD}": "power_in", SCL: "input", SDA: "bidirectional", NC_14: "no_connect", ADDR: "input", "~{RESET}": "input", NC_17: "no_connect", INTB: "output", INTA: "output", GPA0: "bidirectional", GPA1: "bidirectional", GPA2: "bidirectional", GPA3: "bidirectional", GPA4: "bidirectional", GPA5: "bidirectional", GPA6: "bidirectional", GPA7: "bidirectional", NC_28: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class MCP23018x_x_SP extends Component.withPins({
  "V_{SS}": "1",
  "NC_2": "2",
  "GPB0": "3",
  "GPB1": "4",
  "GPB2": "5",
  "GPB3": "6",
  "GPB4": "7",
  "GPB5": "8",
  "GPB6": "9",
  "GPB7": "10",
  "V_{DD}": "11",
  "SCL": "12",
  "SDA": "13",
  "NC_14": "14",
  "ADDR": "15",
  "~{RESET}": "16",
  "NC_17": "17",
  "INTB": "18",
  "INTA": "19",
  "GPA0": "20",
  "GPA1": "21",
  "GPA2": "22",
  "GPA3": "23",
  "GPA4": "24",
  "GPA5": "25",
  "GPA6": "26",
  "GPA7": "27",
  "NC_28": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{SS}": "power_in", NC_2: "no_connect", GPB0: "bidirectional", GPB1: "bidirectional", GPB2: "bidirectional", GPB3: "bidirectional", GPB4: "bidirectional", GPB5: "bidirectional", GPB6: "bidirectional", GPB7: "bidirectional", "V_{DD}": "power_in", SCL: "input", SDA: "bidirectional", NC_14: "no_connect", ADDR: "input", "~{RESET}": "input", NC_17: "no_connect", INTB: "output", INTA: "output", GPA0: "bidirectional", GPA1: "bidirectional", GPA2: "bidirectional", GPA3: "bidirectional", GPA4: "bidirectional", GPA5: "bidirectional", GPA6: "bidirectional", GPA7: "bidirectional", NC_28: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class MCP23018x_x_SS extends Component.withPins({
  "V_{SS}": "1",
  "GPB0": "2",
  "GPB1": "3",
  "GPB2": "4",
  "GPB3": "5",
  "GPB4": "6",
  "GPB5": "7",
  "GPB6": "8",
  "GPB7": "9",
  "V_{DD}": "10",
  "SCL": "11",
  "SDA": "12",
  "ADDR": "13",
  "~{RESET}": "14",
  "INTB": "15",
  "INTA": "16",
  "GPA0": "17",
  "GPA1": "18",
  "GPA2": "19",
  "GPA3": "20",
  "GPA4": "21",
  "GPA5": "22",
  "GPA6": "23",
  "GPA7": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{SS}": "power_in", GPB0: "bidirectional", GPB1: "bidirectional", GPB2: "bidirectional", GPB3: "bidirectional", GPB4: "bidirectional", GPB5: "bidirectional", GPB6: "bidirectional", GPB7: "bidirectional", "V_{DD}": "power_in", SCL: "input", SDA: "bidirectional", ADDR: "input", "~{RESET}": "input", INTB: "output", INTA: "output", GPA0: "bidirectional", GPA1: "bidirectional", GPA2: "bidirectional", GPA3: "bidirectional", GPA4: "bidirectional", GPA5: "bidirectional", GPA6: "bidirectional", GPA7: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class MCP23S17x_x_ML extends Component.withPins({
  "GPB4": "1",
  "GPB5": "2",
  "GPB6": "3",
  "GPB7": "4",
  "V_{DD}": "5",
  "V_{SS}": "6",
  "~{CS}": "7",
  "SCK": "8",
  "SI": "9",
  "SO": "10",
  "A0": "11",
  "A1": "12",
  "A2": "13",
  "~{RESET}": "14",
  "INTB": "15",
  "INTA": "16",
  "GPA0": "17",
  "GPA1": "18",
  "GPA2": "19",
  "GPA3": "20",
  "GPA4": "21",
  "GPA5": "22",
  "GPA6": "23",
  "GPA7": "24",
  "GPB0": "25",
  "GPB1": "26",
  "GPB2": "27",
  "GPB3": "28",
  "EP": "29",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GPB4: "bidirectional", GPB5: "bidirectional", GPB6: "bidirectional", GPB7: "bidirectional", "V_{DD}": "power_in", "V_{SS}": "power_in", "~{CS}": "input", SCK: "input", SI: "input", SO: "output", A0: "input", A1: "input", A2: "input", "~{RESET}": "input", INTB: "tri_state", INTA: "tri_state", GPA0: "bidirectional", GPA1: "bidirectional", GPA2: "bidirectional", GPA3: "bidirectional", GPA4: "bidirectional", GPA5: "bidirectional", GPA6: "bidirectional", GPA7: "bidirectional", GPB0: "bidirectional", GPB1: "bidirectional", GPB2: "bidirectional", GPB3: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
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
 */
export class MCP23S17x_x_SO extends Component.withPins({
  "GPB0": "1",
  "GPB1": "2",
  "GPB2": "3",
  "GPB3": "4",
  "GPB4": "5",
  "GPB5": "6",
  "GPB6": "7",
  "GPB7": "8",
  "V_{DD}": "9",
  "V_{SS}": "10",
  "~{CS}": "11",
  "SCK": "12",
  "SI": "13",
  "SO": "14",
  "A0": "15",
  "A1": "16",
  "A2": "17",
  "~{RESET}": "18",
  "INTB": "19",
  "INTA": "20",
  "GPA0": "21",
  "GPA1": "22",
  "GPA2": "23",
  "GPA3": "24",
  "GPA4": "25",
  "GPA5": "26",
  "GPA6": "27",
  "GPA7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GPB0: "bidirectional", GPB1: "bidirectional", GPB2: "bidirectional", GPB3: "bidirectional", GPB4: "bidirectional", GPB5: "bidirectional", GPB6: "bidirectional", GPB7: "bidirectional", "V_{DD}": "power_in", "V_{SS}": "power_in", "~{CS}": "input", SCK: "input", SI: "input", SO: "output", A0: "input", A1: "input", A2: "input", "~{RESET}": "input", INTB: "tri_state", INTA: "tri_state", GPA0: "bidirectional", GPA1: "bidirectional", GPA2: "bidirectional", GPA3: "bidirectional", GPA4: "bidirectional", GPA5: "bidirectional", GPA6: "bidirectional", GPA7: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class MCP23S17x_x_SP extends Component.withPins({
  "GPB0": "1",
  "GPB1": "2",
  "GPB2": "3",
  "GPB3": "4",
  "GPB4": "5",
  "GPB5": "6",
  "GPB6": "7",
  "GPB7": "8",
  "V_{DD}": "9",
  "V_{SS}": "10",
  "~{CS}": "11",
  "SCK": "12",
  "SI": "13",
  "SO": "14",
  "A0": "15",
  "A1": "16",
  "A2": "17",
  "~{RESET}": "18",
  "INTB": "19",
  "INTA": "20",
  "GPA0": "21",
  "GPA1": "22",
  "GPA2": "23",
  "GPA3": "24",
  "GPA4": "25",
  "GPA5": "26",
  "GPA6": "27",
  "GPA7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GPB0: "bidirectional", GPB1: "bidirectional", GPB2: "bidirectional", GPB3: "bidirectional", GPB4: "bidirectional", GPB5: "bidirectional", GPB6: "bidirectional", GPB7: "bidirectional", "V_{DD}": "power_in", "V_{SS}": "power_in", "~{CS}": "input", SCK: "input", SI: "input", SO: "output", A0: "input", A1: "input", A2: "input", "~{RESET}": "input", INTB: "tri_state", INTA: "tri_state", GPA0: "bidirectional", GPA1: "bidirectional", GPA2: "bidirectional", GPA3: "bidirectional", GPA4: "bidirectional", GPA5: "bidirectional", GPA6: "bidirectional", GPA7: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class MCP23S17x_x_SS extends Component.withPins({
  "GPB0": "1",
  "GPB1": "2",
  "GPB2": "3",
  "GPB3": "4",
  "GPB4": "5",
  "GPB5": "6",
  "GPB6": "7",
  "GPB7": "8",
  "V_{DD}": "9",
  "V_{SS}": "10",
  "~{CS}": "11",
  "SCK": "12",
  "SI": "13",
  "SO": "14",
  "A0": "15",
  "A1": "16",
  "A2": "17",
  "~{RESET}": "18",
  "INTB": "19",
  "INTA": "20",
  "GPA0": "21",
  "GPA1": "22",
  "GPA2": "23",
  "GPA3": "24",
  "GPA4": "25",
  "GPA5": "26",
  "GPA6": "27",
  "GPA7": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GPB0: "bidirectional", GPB1: "bidirectional", GPB2: "bidirectional", GPB3: "bidirectional", GPB4: "bidirectional", GPB5: "bidirectional", GPB6: "bidirectional", GPB7: "bidirectional", "V_{DD}": "power_in", "V_{SS}": "power_in", "~{CS}": "input", SCK: "input", SI: "input", SO: "output", A0: "input", A1: "input", A2: "input", "~{RESET}": "input", INTB: "tri_state", INTA: "tri_state", GPA0: "bidirectional", GPA1: "bidirectional", GPA2: "bidirectional", GPA3: "bidirectional", GPA4: "bidirectional", GPA5: "bidirectional", GPA6: "bidirectional", GPA7: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class MCP23S18x_x_MJ extends Component.withPins({
  "GPB1": "1",
  "GPB2": "2",
  "GPB3": "3",
  "GPB4": "4",
  "GPB5": "5",
  "GPB6": "6",
  "GPB7": "7",
  "V_{DD}": "8",
  "~{CS}": "9",
  "SCK": "10",
  "SI": "11",
  "SO": "12",
  "~{RESET}": "13",
  "INTA": "14",
  "GPA0": "15",
  "GPA1": "16",
  "GPA2": "17",
  "GPA3": "18",
  "GPA4": "19",
  "GPA5": "20",
  "GPA6": "21",
  "GPA7": "22",
  "V_{SS}": "23",
  "GPB0": "24",
  "EP": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GPB1: "bidirectional", GPB2: "bidirectional", GPB3: "bidirectional", GPB4: "bidirectional", GPB5: "bidirectional", GPB6: "bidirectional", GPB7: "bidirectional", "V_{DD}": "power_in", "~{CS}": "input", SCK: "input", SI: "input", SO: "output", "~{RESET}": "input", INTA: "output", GPA0: "bidirectional", GPA1: "bidirectional", GPA2: "bidirectional", GPA3: "bidirectional", GPA4: "bidirectional", GPA5: "bidirectional", GPA6: "bidirectional", GPA7: "bidirectional", "V_{SS}": "power_in", GPB0: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
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
 */
export class MCP23S18x_x_SO extends Component.withPins({
  "V_{SS}": "1",
  "NC_2": "2",
  "GPB0": "3",
  "GPB1": "4",
  "GPB2": "5",
  "GPB3": "6",
  "GPB4": "7",
  "GPB5": "8",
  "GPB6": "9",
  "GPB7": "10",
  "V_{DD}": "11",
  "~{CS}": "12",
  "SCK": "13",
  "SI": "14",
  "SO": "15",
  "~{RESET}": "16",
  "NC_17": "17",
  "INTB": "18",
  "INTA": "19",
  "GPA0": "20",
  "GPA1": "21",
  "GPA2": "22",
  "GPA3": "23",
  "GPA4": "24",
  "GPA5": "25",
  "GPA6": "26",
  "GPA7": "27",
  "NC_28": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{SS}": "power_in", NC_2: "no_connect", GPB0: "bidirectional", GPB1: "bidirectional", GPB2: "bidirectional", GPB3: "bidirectional", GPB4: "bidirectional", GPB5: "bidirectional", GPB6: "bidirectional", GPB7: "bidirectional", "V_{DD}": "power_in", "~{CS}": "input", SCK: "input", SI: "input", SO: "output", "~{RESET}": "input", NC_17: "no_connect", INTB: "output", INTA: "output", GPA0: "bidirectional", GPA1: "bidirectional", GPA2: "bidirectional", GPA3: "bidirectional", GPA4: "bidirectional", GPA5: "bidirectional", GPA6: "bidirectional", GPA7: "bidirectional", NC_28: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class MCP23S18x_x_SP extends Component.withPins({
  "V_{SS}": "1",
  "NC_2": "2",
  "GPB0": "3",
  "GPB1": "4",
  "GPB2": "5",
  "GPB3": "6",
  "GPB4": "7",
  "GPB5": "8",
  "GPB6": "9",
  "GPB7": "10",
  "V_{DD}": "11",
  "~{CS}": "12",
  "SCK": "13",
  "SI": "14",
  "SO": "15",
  "~{RESET}": "16",
  "NC_17": "17",
  "INTB": "18",
  "INTA": "19",
  "GPA0": "20",
  "GPA1": "21",
  "GPA2": "22",
  "GPA3": "23",
  "GPA4": "24",
  "GPA5": "25",
  "GPA6": "26",
  "GPA7": "27",
  "NC_28": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{SS}": "power_in", NC_2: "no_connect", GPB0: "bidirectional", GPB1: "bidirectional", GPB2: "bidirectional", GPB3: "bidirectional", GPB4: "bidirectional", GPB5: "bidirectional", GPB6: "bidirectional", GPB7: "bidirectional", "V_{DD}": "power_in", "~{CS}": "input", SCK: "input", SI: "input", SO: "output", "~{RESET}": "input", NC_17: "no_connect", INTB: "output", INTA: "output", GPA0: "bidirectional", GPA1: "bidirectional", GPA2: "bidirectional", GPA3: "bidirectional", GPA4: "bidirectional", GPA5: "bidirectional", GPA6: "bidirectional", GPA7: "bidirectional", NC_28: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class P82B96 extends Component.withPins({
  "SDA": "1",
  "RXD-SDA": "2",
  "TXD-SDA": "3",
  "GND": "4",
  "TXD-SCL": "5",
  "RXD-SCL": "6",
  "SCL": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", "RXD-SDA": "input", "TXD-SDA": "output", GND: "power_in", "TXD-SCL": "output", "RXD-SCL": "input", SCL: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCA9506BS extends Component.withPins({
  "IO0_4": "1",
  "IO0_5": "2",
  "IO0_6": "3",
  "V_{SS}_4": "4",
  "IO0_7": "5",
  "IO1_0": "6",
  "IO1_1": "7",
  "IO1_2": "8",
  "IO1_3": "9",
  "IO1_4": "10",
  "V_{DD}_11": "11",
  "IO1_5": "12",
  "IO1_6": "13",
  "IO1_7": "14",
  "IO2_0": "15",
  "V_{SS}_16": "16",
  "IO2_1": "17",
  "IO2_2": "18",
  "IO2_3": "19",
  "A0": "20",
  "A1": "21",
  "A2": "22",
  "~{OE}": "23",
  "IO2_4": "24",
  "IO2_5": "25",
  "IO2_6": "26",
  "V_{SS}_27": "27",
  "IO2_7": "28",
  "IO3_0": "29",
  "IO3_1": "30",
  "IO3_2": "31",
  "V_{SS}_32": "32",
  "IO3_3": "33",
  "IO3_4": "34",
  "IO3_5": "35",
  "IO3_6": "36",
  "IO3_7": "37",
  "IO4_0": "38",
  "V_{DD}_39": "39",
  "IO4_1": "40",
  "IO4_2": "41",
  "IO4_3": "42",
  "IO4_4": "43",
  "V_{SS}_44": "44",
  "IO4_5": "45",
  "IO4_6": "46",
  "IO4_7": "47",
  "~{INT}": "48",
  "~{RESET}": "49",
  "SDA": "50",
  "SCL": "51",
  "IO0_0": "52",
  "IO0_1": "53",
  "IO0_2": "54",
  "V_{SS}_55": "55",
  "IO0_3": "56",
  "V_{SS}_57": "57",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IO0_4: "bidirectional", IO0_5: "bidirectional", IO0_6: "bidirectional", "V_{SS}_4": "power_in", IO0_7: "bidirectional", IO1_0: "bidirectional", IO1_1: "bidirectional", IO1_2: "bidirectional", IO1_3: "bidirectional", IO1_4: "bidirectional", "V_{DD}_11": "power_in", IO1_5: "bidirectional", IO1_6: "bidirectional", IO1_7: "bidirectional", IO2_0: "bidirectional", "V_{SS}_16": "passive", IO2_1: "bidirectional", IO2_2: "bidirectional", IO2_3: "bidirectional", A0: "input", A1: "input", A2: "input", "~{OE}": "input", IO2_4: "bidirectional", IO2_5: "bidirectional", IO2_6: "bidirectional", "V_{SS}_27": "passive", IO2_7: "bidirectional", IO3_0: "bidirectional", IO3_1: "bidirectional", IO3_2: "bidirectional", "V_{SS}_32": "passive", IO3_3: "bidirectional", IO3_4: "bidirectional", IO3_5: "bidirectional", IO3_6: "bidirectional", IO3_7: "bidirectional", IO4_0: "bidirectional", "V_{DD}_39": "passive", IO4_1: "bidirectional", IO4_2: "bidirectional", IO4_3: "bidirectional", IO4_4: "bidirectional", "V_{SS}_44": "passive", IO4_5: "bidirectional", IO4_6: "bidirectional", IO4_7: "bidirectional", "~{INT}": "open_collector", "~{RESET}": "input", SDA: "bidirectional", SCL: "input", IO0_0: "bidirectional", IO0_1: "bidirectional", IO0_2: "bidirectional", "V_{SS}_55": "passive", IO0_3: "bidirectional", "V_{SS}_57": "passive", ...opts.pinTypes } });
  }
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
 */
export class PCA9516 extends Component.withPins({
  "SCL0": "1",
  "SDA0": "2",
  "SCL1": "3",
  "SDA1": "4",
  "EN1": "5",
  "SCL2": "6",
  "SDA2": "7",
  "GND": "8",
  "EN2": "9",
  "SCL3": "10",
  "SDA3": "11",
  "EN3": "12",
  "SCL4": "13",
  "SDA4": "14",
  "EN4": "15",
  "VCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCL0: "bidirectional", SDA0: "bidirectional", SCL1: "bidirectional", SDA1: "bidirectional", EN1: "input", SCL2: "bidirectional", SDA2: "bidirectional", GND: "power_in", EN2: "input", SCL3: "bidirectional", SDA3: "bidirectional", EN3: "input", SCL4: "bidirectional", SDA4: "bidirectional", EN4: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCA9536D extends Component.withPins({
  "IO0": "1",
  "IO1": "2",
  "IO2": "3",
  "VSS": "4",
  "IO3": "5",
  "SCL": "6",
  "SDA": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IO0: "bidirectional", IO1: "bidirectional", IO2: "bidirectional", VSS: "power_in", IO3: "bidirectional", SCL: "input", SDA: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCA9536DP extends Component.withPins({
  "IO0": "1",
  "IO1": "2",
  "IO2": "3",
  "VSS": "4",
  "IO3": "5",
  "SCL": "6",
  "SDA": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IO0: "bidirectional", IO1: "bidirectional", IO2: "bidirectional", VSS: "power_in", IO3: "bidirectional", SCL: "input", SDA: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCA9537 extends Component.withPins({
  "IO0": "1",
  "IO1": "2",
  "IO2": "3",
  "IO3": "4",
  "VSS": "5",
  "~{RESET}": "6",
  "~{INT}": "7",
  "SCL": "8",
  "SDA": "9",
  "VDD": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IO0: "bidirectional", IO1: "bidirectional", IO2: "bidirectional", IO3: "bidirectional", VSS: "power_in", "~{RESET}": "input", "~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCA9538BS extends Component.withPins({
  "~{RESET}": "1",
  "IO0": "2",
  "IO1": "3",
  "IO2": "4",
  "IO3": "5",
  "V_{SS}_6": "6",
  "IO4": "7",
  "IO5": "8",
  "IO6": "9",
  "IO7": "10",
  "~{INT}": "11",
  "SCL": "12",
  "SDA": "13",
  "V_{DD}": "14",
  "A0": "15",
  "A1": "16",
  "V_{SS}_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RESET}": "input", IO0: "bidirectional", IO1: "bidirectional", IO2: "bidirectional", IO3: "bidirectional", "V_{SS}_6": "power_in", IO4: "bidirectional", IO5: "bidirectional", IO6: "bidirectional", IO7: "bidirectional", "~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", "V_{DD}": "power_in", A0: "input", A1: "input", "V_{SS}_17": "passive", ...opts.pinTypes } });
  }
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
 */
export class PCA9538D extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "~{RESET}": "3",
  "IO0": "4",
  "IO1": "5",
  "IO2": "6",
  "IO3": "7",
  "V_{SS}": "8",
  "IO4": "9",
  "IO5": "10",
  "IO6": "11",
  "IO7": "12",
  "~{INT}": "13",
  "SCL": "14",
  "SDA": "15",
  "V_{DD}": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", "~{RESET}": "input", IO0: "bidirectional", IO1: "bidirectional", IO2: "bidirectional", IO3: "bidirectional", "V_{SS}": "power_in", IO4: "bidirectional", IO5: "bidirectional", IO6: "bidirectional", IO7: "bidirectional", "~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCA9538PW extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "~{RESET}": "3",
  "IO0": "4",
  "IO1": "5",
  "IO2": "6",
  "IO3": "7",
  "V_{SS}": "8",
  "IO4": "9",
  "IO5": "10",
  "IO6": "11",
  "IO7": "12",
  "~{INT}": "13",
  "SCL": "14",
  "SDA": "15",
  "V_{DD}": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", "~{RESET}": "input", IO0: "bidirectional", IO1: "bidirectional", IO2: "bidirectional", IO3: "bidirectional", "V_{SS}": "power_in", IO4: "bidirectional", IO5: "bidirectional", IO6: "bidirectional", IO7: "bidirectional", "~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCA9539xBS extends Component.withPins({
  "IO0_0": "1",
  "IO0_1": "2",
  "IO0_2": "3",
  "IO0_3": "4",
  "IO0_4": "5",
  "IO0_5": "6",
  "IO0_6": "7",
  "IO0_7": "8",
  "V_{SS}_9": "9",
  "IO1_0": "10",
  "IO1_1": "11",
  "IO1_2": "12",
  "IO1_3": "13",
  "IO1_4": "14",
  "IO1_5": "15",
  "IO1_6": "16",
  "IO1_7": "17",
  "A0": "18",
  "SCL": "19",
  "SDA": "20",
  "V_{DD}": "21",
  "~{INT}": "22",
  "A1": "23",
  "~{RESET}": "24",
  "V_{SS}_25": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IO0_0: "bidirectional", IO0_1: "bidirectional", IO0_2: "bidirectional", IO0_3: "bidirectional", IO0_4: "bidirectional", IO0_5: "bidirectional", IO0_6: "bidirectional", IO0_7: "bidirectional", "V_{SS}_9": "power_in", IO1_0: "bidirectional", IO1_1: "bidirectional", IO1_2: "bidirectional", IO1_3: "bidirectional", IO1_4: "bidirectional", IO1_5: "bidirectional", IO1_6: "bidirectional", IO1_7: "bidirectional", A0: "input", SCL: "input", SDA: "bidirectional", "V_{DD}": "power_in", "~{INT}": "open_collector", A1: "input", "~{RESET}": "input", "V_{SS}_25": "passive", ...opts.pinTypes } });
  }
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
 */
export class PCA9539xD extends Component.withPins({
  "~{INT}": "1",
  "A1": "2",
  "~{RESET}": "3",
  "IO0_0": "4",
  "IO0_1": "5",
  "IO0_2": "6",
  "IO0_3": "7",
  "IO0_4": "8",
  "IO0_5": "9",
  "IO0_6": "10",
  "IO0_7": "11",
  "V_{SS}": "12",
  "IO1_0": "13",
  "IO1_1": "14",
  "IO1_2": "15",
  "IO1_3": "16",
  "IO1_4": "17",
  "IO1_5": "18",
  "IO1_6": "19",
  "IO1_7": "20",
  "A0": "21",
  "SCL": "22",
  "SDA": "23",
  "V_{DD}": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{INT}": "open_collector", A1: "input", "~{RESET}": "input", IO0_0: "bidirectional", IO0_1: "bidirectional", IO0_2: "bidirectional", IO0_3: "bidirectional", IO0_4: "bidirectional", IO0_5: "bidirectional", IO0_6: "bidirectional", IO0_7: "bidirectional", "V_{SS}": "power_in", IO1_0: "bidirectional", IO1_1: "bidirectional", IO1_2: "bidirectional", IO1_3: "bidirectional", IO1_4: "bidirectional", IO1_5: "bidirectional", IO1_6: "bidirectional", IO1_7: "bidirectional", A0: "input", SCL: "input", SDA: "bidirectional", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCA9539xPW extends Component.withPins({
  "~{INT}": "1",
  "A1": "2",
  "~{RESET}": "3",
  "IO0_0": "4",
  "IO0_1": "5",
  "IO0_2": "6",
  "IO0_3": "7",
  "IO0_4": "8",
  "IO0_5": "9",
  "IO0_6": "10",
  "IO0_7": "11",
  "V_{SS}": "12",
  "IO1_0": "13",
  "IO1_1": "14",
  "IO1_2": "15",
  "IO1_3": "16",
  "IO1_4": "17",
  "IO1_5": "18",
  "IO1_6": "19",
  "IO1_7": "20",
  "A0": "21",
  "SCL": "22",
  "SDA": "23",
  "V_{DD}": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{INT}": "open_collector", A1: "input", "~{RESET}": "input", IO0_0: "bidirectional", IO0_1: "bidirectional", IO0_2: "bidirectional", IO0_3: "bidirectional", IO0_4: "bidirectional", IO0_5: "bidirectional", IO0_6: "bidirectional", IO0_7: "bidirectional", "V_{SS}": "power_in", IO1_0: "bidirectional", IO1_1: "bidirectional", IO1_2: "bidirectional", IO1_3: "bidirectional", IO1_4: "bidirectional", IO1_5: "bidirectional", IO1_6: "bidirectional", IO1_7: "bidirectional", A0: "input", SCL: "input", SDA: "bidirectional", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCA9544AD extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "~{INT0}": "4",
  "SD0": "5",
  "SC0": "6",
  "~{INT1}": "7",
  "SD1": "8",
  "SC1": "9",
  "VSS": "10",
  "~{INT2}": "11",
  "SD2": "12",
  "SC2": "13",
  "~{INT3}": "14",
  "SD3": "15",
  "SC3": "16",
  "~{INT}": "17",
  "SCL": "18",
  "SDA": "19",
  "VDD": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", "~{INT0}": "input", SD0: "bidirectional", SC0: "output", "~{INT1}": "input", SD1: "bidirectional", SC1: "output", VSS: "power_in", "~{INT2}": "input", SD2: "bidirectional", SC2: "output", "~{INT3}": "input", SD3: "bidirectional", SC3: "output", "~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCA9544APW extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "~{INT0}": "4",
  "SD0": "5",
  "SC0": "6",
  "~{INT1}": "7",
  "SD1": "8",
  "SC1": "9",
  "VSS": "10",
  "~{INT2}": "11",
  "SD2": "12",
  "SC2": "13",
  "~{INT3}": "14",
  "SD3": "15",
  "SC3": "16",
  "~{INT}": "17",
  "SCL": "18",
  "SDA": "19",
  "VDD": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", "~{INT0}": "input", SD0: "bidirectional", SC0: "output", "~{INT1}": "input", SD1: "bidirectional", SC1: "output", VSS: "power_in", "~{INT2}": "input", SD2: "bidirectional", SC2: "output", "~{INT3}": "input", SD3: "bidirectional", SC3: "output", "~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCA9547BS extends Component.withPins({
  "SD0": "1",
  "SC0": "2",
  "SD1": "3",
  "SC1": "4",
  "SD2": "5",
  "SC2": "6",
  "SD3": "7",
  "SC3": "8",
  "GND_9": "9",
  "SD4": "10",
  "SC4": "11",
  "SD5": "12",
  "SC5": "13",
  "SD6": "14",
  "SC6": "15",
  "SD7": "16",
  "SC7": "17",
  "A2": "18",
  "SCL": "19",
  "SDA": "20",
  "VCC": "21",
  "A0": "22",
  "A1": "23",
  "~{RESET}": "24",
  "GND_25": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SD0: "bidirectional", SC0: "output", SD1: "bidirectional", SC1: "output", SD2: "bidirectional", SC2: "output", SD3: "bidirectional", SC3: "output", GND_9: "power_in", SD4: "bidirectional", SC4: "output", SD5: "bidirectional", SC5: "output", SD6: "bidirectional", SC6: "output", SD7: "bidirectional", SC7: "output", A2: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", A0: "input", A1: "input", "~{RESET}": "input", GND_25: "passive", ...opts.pinTypes } });
  }
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
 */
export class PCA9548ADB extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "~{RESET}": "3",
  "SD0": "4",
  "SC0": "5",
  "SD1": "6",
  "SC1": "7",
  "SD2": "8",
  "SC2": "9",
  "SD3": "10",
  "SC3": "11",
  "GND": "12",
  "SD4": "13",
  "SC4": "14",
  "SD5": "15",
  "SC5": "16",
  "SD6": "17",
  "SC6": "18",
  "SD7": "19",
  "SC7": "20",
  "A2": "21",
  "SCL": "22",
  "SDA": "23",
  "VCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", "~{RESET}": "input", SD0: "bidirectional", SC0: "output", SD1: "bidirectional", SC1: "output", SD2: "bidirectional", SC2: "output", SD3: "bidirectional", SC3: "output", GND: "power_in", SD4: "bidirectional", SC4: "output", SD5: "bidirectional", SC5: "output", SD6: "bidirectional", SC6: "output", SD7: "bidirectional", SC7: "output", A2: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCA9547D extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "~{RESET}": "3",
  "SD0": "4",
  "SC0": "5",
  "SD1": "6",
  "SC1": "7",
  "SD2": "8",
  "SC2": "9",
  "SD3": "10",
  "SC3": "11",
  "GND": "12",
  "SD4": "13",
  "SC4": "14",
  "SD5": "15",
  "SC5": "16",
  "SD6": "17",
  "SC6": "18",
  "SD7": "19",
  "SC7": "20",
  "A2": "21",
  "SCL": "22",
  "SDA": "23",
  "VCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", "~{RESET}": "input", SD0: "bidirectional", SC0: "output", SD1: "bidirectional", SC1: "output", SD2: "bidirectional", SC2: "output", SD3: "bidirectional", SC3: "output", GND: "power_in", SD4: "bidirectional", SC4: "output", SD5: "bidirectional", SC5: "output", SD6: "bidirectional", SC6: "output", SD7: "bidirectional", SC7: "output", A2: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCA9547PW extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "~{RESET}": "3",
  "SD0": "4",
  "SC0": "5",
  "SD1": "6",
  "SC1": "7",
  "SD2": "8",
  "SC2": "9",
  "SD3": "10",
  "SC3": "11",
  "GND": "12",
  "SD4": "13",
  "SC4": "14",
  "SD5": "15",
  "SC5": "16",
  "SD6": "17",
  "SC6": "18",
  "SD7": "19",
  "SC7": "20",
  "A2": "21",
  "SCL": "22",
  "SDA": "23",
  "VCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", "~{RESET}": "input", SD0: "bidirectional", SC0: "output", SD1: "bidirectional", SC1: "output", SD2: "bidirectional", SC2: "output", SD3: "bidirectional", SC3: "output", GND: "power_in", SD4: "bidirectional", SC4: "output", SD5: "bidirectional", SC5: "output", SD6: "bidirectional", SC6: "output", SD7: "bidirectional", SC7: "output", A2: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCA9548ADW extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "~{RESET}": "3",
  "SD0": "4",
  "SC0": "5",
  "SD1": "6",
  "SC1": "7",
  "SD2": "8",
  "SC2": "9",
  "SD3": "10",
  "SC3": "11",
  "GND": "12",
  "SD4": "13",
  "SC4": "14",
  "SD5": "15",
  "SC5": "16",
  "SD6": "17",
  "SC6": "18",
  "SD7": "19",
  "SC7": "20",
  "A2": "21",
  "SCL": "22",
  "SDA": "23",
  "VCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", "~{RESET}": "input", SD0: "bidirectional", SC0: "output", SD1: "bidirectional", SC1: "output", SD2: "bidirectional", SC2: "output", SD3: "bidirectional", SC3: "output", GND: "power_in", SD4: "bidirectional", SC4: "output", SD5: "bidirectional", SC5: "output", SD6: "bidirectional", SC6: "output", SD7: "bidirectional", SC7: "output", A2: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TCA9548APWR extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "~{RESET}": "3",
  "SD0": "4",
  "SC0": "5",
  "SD1": "6",
  "SC1": "7",
  "SD2": "8",
  "SC2": "9",
  "SD3": "10",
  "SC3": "11",
  "GND": "12",
  "SD4": "13",
  "SC4": "14",
  "SD5": "15",
  "SC5": "16",
  "SD6": "17",
  "SC6": "18",
  "SD7": "19",
  "SC7": "20",
  "A2": "21",
  "SCL": "22",
  "SDA": "23",
  "VCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", "~{RESET}": "input", SD0: "bidirectional", SC0: "output", SD1: "bidirectional", SC1: "output", SD2: "bidirectional", SC2: "output", SD3: "bidirectional", SC3: "output", GND: "power_in", SD4: "bidirectional", SC4: "output", SD5: "bidirectional", SC5: "output", SD6: "bidirectional", SC6: "output", SD7: "bidirectional", SC7: "output", A2: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCA9548APW extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "~{RESET}": "3",
  "SD0": "4",
  "SC0": "5",
  "SD1": "6",
  "SC1": "7",
  "SD2": "8",
  "SC2": "9",
  "SD3": "10",
  "SC3": "11",
  "GND": "12",
  "SD4": "13",
  "SC4": "14",
  "SD5": "15",
  "SC5": "16",
  "SD6": "17",
  "SC6": "18",
  "SD7": "19",
  "SC7": "20",
  "A2": "21",
  "SCL": "22",
  "SDA": "23",
  "VCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", "~{RESET}": "input", SD0: "bidirectional", SC0: "output", SD1: "bidirectional", SC1: "output", SD2: "bidirectional", SC2: "output", SD3: "bidirectional", SC3: "output", GND: "power_in", SD4: "bidirectional", SC4: "output", SD5: "bidirectional", SC5: "output", SD6: "bidirectional", SC6: "output", SD7: "bidirectional", SC7: "output", A2: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TCA9548AMRGER extends Component.withPins({
  "SD0": "1",
  "SC0": "2",
  "SD1": "3",
  "SC1": "4",
  "SD2": "5",
  "SC2": "6",
  "SD3": "7",
  "SC3": "8",
  "GND": "9",
  "SD4": "10",
  "SC4": "11",
  "SD5": "12",
  "SC5": "13",
  "SD6": "14",
  "SC6": "15",
  "SD7": "16",
  "SC7": "17",
  "A2": "18",
  "SCL": "19",
  "SDA": "20",
  "VCC": "21",
  "A0": "22",
  "A1": "23",
  "~{RESET}": "24",
  "1EP": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SD0: "bidirectional", SC0: "output", SD1: "bidirectional", SC1: "output", SD2: "bidirectional", SC2: "output", SD3: "bidirectional", SC3: "output", GND: "power_in", SD4: "bidirectional", SC4: "output", SD5: "bidirectional", SC5: "output", SD6: "bidirectional", SC6: "output", SD7: "bidirectional", SC7: "output", A2: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", A0: "input", A1: "input", "~{RESET}": "input", "1EP": "no_connect", ...opts.pinTypes } });
  }
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
 */
export class PCA9548ARGE extends Component.withPins({
  "SD0": "1",
  "SC0": "2",
  "SD1": "3",
  "SC1": "4",
  "SD2": "5",
  "SC2": "6",
  "SD3": "7",
  "SC3": "8",
  "GND": "9",
  "SD4": "10",
  "SC4": "11",
  "SD5": "12",
  "SC5": "13",
  "SD6": "14",
  "SC6": "15",
  "SD7": "16",
  "SC7": "17",
  "A2": "18",
  "SCL": "19",
  "SDA": "20",
  "VCC": "21",
  "A0": "22",
  "A1": "23",
  "~{RESET}": "24",
  "1EP": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SD0: "bidirectional", SC0: "output", SD1: "bidirectional", SC1: "output", SD2: "bidirectional", SC2: "output", SD3: "bidirectional", SC3: "output", GND: "power_in", SD4: "bidirectional", SC4: "output", SD5: "bidirectional", SC5: "output", SD6: "bidirectional", SC6: "output", SD7: "bidirectional", SC7: "output", A2: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", A0: "input", A1: "input", "~{RESET}": "input", "1EP": "no_connect", ...opts.pinTypes } });
  }
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
 */
export class PCA9555D extends Component.withPins({
  "~{INT}": "1",
  "A1": "2",
  "A2": "3",
  "IO0_0": "4",
  "IO0_1": "5",
  "IO0_2": "6",
  "IO0_3": "7",
  "IO0_4": "8",
  "IO0_5": "9",
  "IO0_6": "10",
  "IO0_7": "11",
  "VSS": "12",
  "IO1_0": "13",
  "IO1_1": "14",
  "IO1_2": "15",
  "IO1_3": "16",
  "IO1_4": "17",
  "IO1_5": "18",
  "IO1_6": "19",
  "IO1_7": "20",
  "A0": "21",
  "SCL": "22",
  "SDA": "23",
  "VDD": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{INT}": "open_collector", A1: "input", A2: "input", IO0_0: "bidirectional", IO0_1: "bidirectional", IO0_2: "bidirectional", IO0_3: "bidirectional", IO0_4: "bidirectional", IO0_5: "bidirectional", IO0_6: "bidirectional", IO0_7: "bidirectional", VSS: "power_in", IO1_0: "bidirectional", IO1_1: "bidirectional", IO1_2: "bidirectional", IO1_3: "bidirectional", IO1_4: "bidirectional", IO1_5: "bidirectional", IO1_6: "bidirectional", IO1_7: "bidirectional", A0: "input", SCL: "input", SDA: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCA9555DB extends Component.withPins({
  "~{INT}": "1",
  "A1": "2",
  "A2": "3",
  "IO0_0": "4",
  "IO0_1": "5",
  "IO0_2": "6",
  "IO0_3": "7",
  "IO0_4": "8",
  "IO0_5": "9",
  "IO0_6": "10",
  "IO0_7": "11",
  "VSS": "12",
  "IO1_0": "13",
  "IO1_1": "14",
  "IO1_2": "15",
  "IO1_3": "16",
  "IO1_4": "17",
  "IO1_5": "18",
  "IO1_6": "19",
  "IO1_7": "20",
  "A0": "21",
  "SCL": "22",
  "SDA": "23",
  "VDD": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{INT}": "open_collector", A1: "input", A2: "input", IO0_0: "bidirectional", IO0_1: "bidirectional", IO0_2: "bidirectional", IO0_3: "bidirectional", IO0_4: "bidirectional", IO0_5: "bidirectional", IO0_6: "bidirectional", IO0_7: "bidirectional", VSS: "power_in", IO1_0: "bidirectional", IO1_1: "bidirectional", IO1_2: "bidirectional", IO1_3: "bidirectional", IO1_4: "bidirectional", IO1_5: "bidirectional", IO1_6: "bidirectional", IO1_7: "bidirectional", A0: "input", SCL: "input", SDA: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCA9555PW extends Component.withPins({
  "~{INT}": "1",
  "A1": "2",
  "A2": "3",
  "IO0_0": "4",
  "IO0_1": "5",
  "IO0_2": "6",
  "IO0_3": "7",
  "IO0_4": "8",
  "IO0_5": "9",
  "IO0_6": "10",
  "IO0_7": "11",
  "VSS": "12",
  "IO1_0": "13",
  "IO1_1": "14",
  "IO1_2": "15",
  "IO1_3": "16",
  "IO1_4": "17",
  "IO1_5": "18",
  "IO1_6": "19",
  "IO1_7": "20",
  "A0": "21",
  "SCL": "22",
  "SDA": "23",
  "VDD": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{INT}": "open_collector", A1: "input", A2: "input", IO0_0: "bidirectional", IO0_1: "bidirectional", IO0_2: "bidirectional", IO0_3: "bidirectional", IO0_4: "bidirectional", IO0_5: "bidirectional", IO0_6: "bidirectional", IO0_7: "bidirectional", VSS: "power_in", IO1_0: "bidirectional", IO1_1: "bidirectional", IO1_2: "bidirectional", IO1_3: "bidirectional", IO1_4: "bidirectional", IO1_5: "bidirectional", IO1_6: "bidirectional", IO1_7: "bidirectional", A0: "input", SCL: "input", SDA: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCA9557BS extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "IO0": "4",
  "IO1": "5",
  "VSS": "6",
  "IO2": "7",
  "IO3": "8",
  "IO4": "9",
  "IO5": "10",
  "IO6": "11",
  "IO7": "12",
  "~{RESET}": "13",
  "VDD": "14",
  "SCL": "15",
  "SDA": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", IO0: "bidirectional", IO1: "bidirectional", VSS: "power_in", IO2: "bidirectional", IO3: "bidirectional", IO4: "bidirectional", IO5: "bidirectional", IO6: "bidirectional", IO7: "bidirectional", "~{RESET}": "input", VDD: "power_in", SCL: "input", SDA: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class PCA9557D extends Component.withPins({
  "SCL": "1",
  "SDA": "2",
  "A0": "3",
  "A1": "4",
  "A2": "5",
  "IO0": "6",
  "IO1": "7",
  "VSS": "8",
  "IO2": "9",
  "IO3": "10",
  "IO4": "11",
  "IO5": "12",
  "IO6": "13",
  "IO7": "14",
  "~{RESET}": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCL: "input", SDA: "bidirectional", A0: "input", A1: "input", A2: "input", IO0: "bidirectional", IO1: "bidirectional", VSS: "power_in", IO2: "bidirectional", IO3: "bidirectional", IO4: "bidirectional", IO5: "bidirectional", IO6: "bidirectional", IO7: "bidirectional", "~{RESET}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCA9557PW extends Component.withPins({
  "SCL": "1",
  "SDA": "2",
  "A0": "3",
  "A1": "4",
  "A2": "5",
  "IO0": "6",
  "IO1": "7",
  "VSS": "8",
  "IO2": "9",
  "IO3": "10",
  "IO4": "11",
  "IO5": "12",
  "IO6": "13",
  "IO7": "14",
  "~{RESET}": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCL: "input", SDA: "bidirectional", A0: "input", A1: "input", A2: "input", IO0: "bidirectional", IO1: "bidirectional", VSS: "power_in", IO2: "bidirectional", IO3: "bidirectional", IO4: "bidirectional", IO5: "bidirectional", IO6: "bidirectional", IO7: "bidirectional", "~{RESET}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCA9847PW extends Component.withPins({
  "V_{DD1}": "1",
  "A0": "2",
  "~{RESET}": "3",
  "SD0": "4",
  "SC0": "5",
  "SD1": "6",
  "SC1": "7",
  "SD2": "8",
  "SC2": "9",
  "SD3": "10",
  "SC3": "11",
  "V_{SS}": "12",
  "SD4": "13",
  "SC4": "14",
  "SD5": "15",
  "SC5": "16",
  "SD6": "17",
  "SC6": "18",
  "SD7": "19",
  "SC7": "20",
  "A1": "21",
  "SCL": "22",
  "SDA": "23",
  "V_{DD2}": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD1}": "power_in", A0: "input", "~{RESET}": "input", SD0: "bidirectional", SC0: "output", SD1: "bidirectional", SC1: "output", SD2: "bidirectional", SC2: "output", SD3: "bidirectional", SC3: "output", "V_{SS}": "power_in", SD4: "bidirectional", SC4: "output", SD5: "bidirectional", SC5: "output", SD6: "bidirectional", SC6: "output", SD7: "bidirectional", SC7: "output", A1: "input", SCL: "input", SDA: "bidirectional", "V_{DD2}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCAL6408ABS extends Component.withPins({
  "~{RESET}": "1",
  "P0": "2",
  "P1": "3",
  "P2": "4",
  "P3": "5",
  "V_{SS}_6": "6",
  "P4": "7",
  "P5": "8",
  "P6": "9",
  "P7": "10",
  "~{INT}": "11",
  "SCL": "12",
  "SDA": "13",
  "V_{DD(P)}": "14",
  "V_{DD(I2C)}": "15",
  "ADDR": "16",
  "V_{SS}_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RESET}": "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", "V_{SS}_6": "power_in", P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", "~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", "V_{DD(P)}": "power_in", "V_{DD(I2C)}": "power_in", ADDR: "input", "V_{SS}_17": "passive", ...opts.pinTypes } });
  }
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
 */
export class PCAL6408AHK extends Component.withPins({
  "~{RESET}": "1",
  "P0": "2",
  "P1": "3",
  "P2": "4",
  "P3": "5",
  "V_{SS}": "6",
  "P4": "7",
  "P5": "8",
  "P6": "9",
  "P7": "10",
  "~{INT}": "11",
  "SCL": "12",
  "SDA": "13",
  "V_{DD(P)}": "14",
  "V_{DD(I2C)}": "15",
  "ADDR": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RESET}": "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", "V_{SS}": "power_in", P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", "~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", "V_{DD(P)}": "power_in", "V_{DD(I2C)}": "power_in", ADDR: "input", ...opts.pinTypes } });
  }
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
 */
export class PCAL6408APW extends Component.withPins({
  "V_{DD(I2C)}": "1",
  "ADDR": "2",
  "~{RESET}": "3",
  "P0": "4",
  "P1": "5",
  "P2": "6",
  "P3": "7",
  "V_{SS}": "8",
  "P4": "9",
  "P5": "10",
  "P6": "11",
  "P7": "12",
  "~{INT}": "13",
  "SCL": "14",
  "SDA": "15",
  "V_{DD(P)}": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD(I2C)}": "power_in", ADDR: "input", "~{RESET}": "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", "V_{SS}": "power_in", P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", "~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", "V_{DD(P)}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCAL6416AHF extends Component.withPins({
  "P0_0": "1",
  "P0_1": "2",
  "P0_2": "3",
  "P0_3": "4",
  "P0_4": "5",
  "P0_5": "6",
  "P0_6": "7",
  "P0_7": "8",
  "V_{SS}": "9",
  "P1_0": "10",
  "P1_1": "11",
  "P1_2": "12",
  "P1_3": "13",
  "P1_4": "14",
  "P1_5": "15",
  "P1_6": "16",
  "P1_7": "17",
  "ADDR": "18",
  "SCL": "19",
  "SDA": "20",
  "V_{DD(P)}": "21",
  "~{INT}": "22",
  "V_{DD(I2C-bus)}": "23",
  "~{RESET}": "24",
  "EP": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P0_0: "bidirectional", P0_1: "bidirectional", P0_2: "bidirectional", P0_3: "bidirectional", P0_4: "bidirectional", P0_5: "bidirectional", P0_6: "bidirectional", P0_7: "bidirectional", "V_{SS}": "power_in", P1_0: "bidirectional", P1_1: "bidirectional", P1_2: "bidirectional", P1_3: "bidirectional", P1_4: "bidirectional", P1_5: "bidirectional", P1_6: "bidirectional", P1_7: "bidirectional", ADDR: "input", SCL: "input", SDA: "bidirectional", "V_{DD(P)}": "power_in", "~{INT}": "open_collector", "V_{DD(I2C-bus)}": "power_in", "~{RESET}": "input", EP: "passive", ...opts.pinTypes } });
  }
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
 */
export class PCAL6416APW extends Component.withPins({
  "~{INT}": "1",
  "VDD_I2C": "2",
  "~{RESET}": "3",
  "P0_0": "4",
  "P0_1": "5",
  "P0_2": "6",
  "P0_3": "7",
  "P0_4": "8",
  "P0_5": "9",
  "P0_6": "10",
  "P0_7": "11",
  "VSS": "12",
  "P1_0": "13",
  "P1_1": "14",
  "P1_2": "15",
  "P1_3": "16",
  "P1_4": "17",
  "P1_5": "18",
  "P1_6": "19",
  "P1_7": "20",
  "ADDR": "21",
  "SCL": "22",
  "SDA": "23",
  "VDD_P": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{INT}": "open_collector", VDD_I2C: "power_in", "~{RESET}": "input", P0_0: "bidirectional", P0_1: "bidirectional", P0_2: "bidirectional", P0_3: "bidirectional", P0_4: "bidirectional", P0_5: "bidirectional", P0_6: "bidirectional", P0_7: "bidirectional", VSS: "power_in", P1_0: "bidirectional", P1_1: "bidirectional", P1_2: "bidirectional", P1_3: "bidirectional", P1_4: "bidirectional", P1_5: "bidirectional", P1_6: "bidirectional", P1_7: "bidirectional", ADDR: "input", SCL: "input", SDA: "bidirectional", VDD_P: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCAL6534EV extends Component.withPins({
  "V_{DD(I2C-bus)}": "A1",
  "SDA": "A2",
  "SCL": "A3",
  "ADDR": "A4",
  "~{RESET}": "A5",
  "V_{DD(P)}": "A6",
  "~{INT}": "B1",
  "P0_1": "B2",
  "P0_2": "B3",
  "P4_1": "B4",
  "P4_0": "B5",
  "V_{SS}": "B6",
  "P0_0": "C1",
  "P0_4": "C2",
  "P0_5": "C3",
  "P3_7": "C4",
  "P3_5": "C5",
  "P3_6": "C6",
  "P0_3": "D1",
  "P0_7": "D2",
  "P1_0": "D3",
  "P3_4": "D4",
  "P3_2": "D5",
  "P3_3": "D6",
  "P0_6": "E1",
  "P1_2": "E2",
  "P2_0": "E3",
  "P3_1": "E4",
  "P2_7": "E5",
  "P3_0": "E6",
  "P1_1": "F1",
  "P1_5": "F2",
  "P1_7": "F3",
  "P2_1": "F4",
  "P2_6": "F5",
  "P2_5": "F6",
  "P1_3": "G1",
  "P1_4": "G2",
  "P1_6": "G3",
  "P2_2": "G4",
  "P2_3": "G5",
  "P2_4": "G6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD(I2C-bus)}": "power_in", SDA: "bidirectional", SCL: "input", ADDR: "input", "~{RESET}": "input", "V_{DD(P)}": "power_in", "~{INT}": "open_collector", P0_1: "bidirectional", P0_2: "bidirectional", P4_1: "bidirectional", P4_0: "bidirectional", "V_{SS}": "power_in", P0_0: "bidirectional", P0_4: "bidirectional", P0_5: "bidirectional", P3_7: "bidirectional", P3_5: "bidirectional", P3_6: "bidirectional", P0_3: "bidirectional", P0_7: "bidirectional", P1_0: "bidirectional", P3_4: "bidirectional", P3_2: "bidirectional", P3_3: "bidirectional", P0_6: "bidirectional", P1_2: "bidirectional", P2_0: "bidirectional", P3_1: "bidirectional", P2_7: "bidirectional", P3_0: "bidirectional", P1_1: "bidirectional", P1_5: "bidirectional", P1_7: "bidirectional", P2_1: "bidirectional", P2_6: "bidirectional", P2_5: "bidirectional", P1_3: "bidirectional", P1_4: "bidirectional", P1_6: "bidirectional", P2_2: "bidirectional", P2_3: "bidirectional", P2_4: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class TCA9534 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "P0": "4",
  "P1": "5",
  "P2": "6",
  "P3": "7",
  "GND": "8",
  "P4": "9",
  "P5": "10",
  "P6": "11",
  "P7": "12",
  "~{INT}": "13",
  "SCL": "14",
  "SDA": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", GND: "power_in", P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", "~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCF8574AP extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "P0": "4",
  "P1": "5",
  "P2": "6",
  "P3": "7",
  "GND": "8",
  "P4": "9",
  "P5": "10",
  "P6": "11",
  "P7": "12",
  "~{INT}": "13",
  "SCL": "14",
  "SDA": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", GND: "power_in", P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", "~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCF8574AT extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "P0": "4",
  "P1": "5",
  "P2": "6",
  "P3": "7",
  "GND": "8",
  "P4": "9",
  "P5": "10",
  "P6": "11",
  "P7": "12",
  "~{INT}": "13",
  "SCL": "14",
  "SDA": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", GND: "power_in", P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", "~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCF8574TS extends Component.withPins({
  "~{INT}": "1",
  "SCL": "2",
  "NC_3": "3",
  "SDA": "4",
  "VDD": "5",
  "A0": "6",
  "A1": "7",
  "NC_8": "8",
  "A2": "9",
  "P0": "10",
  "P1": "11",
  "P2": "12",
  "NC_13": "13",
  "P3": "14",
  "VSS": "15",
  "P4": "16",
  "P5": "17",
  "NC_18": "18",
  "P6": "19",
  "P7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{INT}": "open_collector", SCL: "input", NC_3: "no_connect", SDA: "bidirectional", VDD: "power_in", A0: "input", A1: "input", NC_8: "no_connect", A2: "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", NC_13: "no_connect", P3: "bidirectional", VSS: "power_in", P4: "bidirectional", P5: "bidirectional", NC_18: "no_connect", P6: "bidirectional", P7: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class PCF8574ATS extends Component.withPins({
  "~{INT}": "1",
  "SCL": "2",
  "NC_3": "3",
  "SDA": "4",
  "VDD": "5",
  "A0": "6",
  "A1": "7",
  "NC_8": "8",
  "A2": "9",
  "P0": "10",
  "P1": "11",
  "P2": "12",
  "NC_13": "13",
  "P3": "14",
  "VSS": "15",
  "P4": "16",
  "P5": "17",
  "NC_18": "18",
  "P6": "19",
  "P7": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{INT}": "open_collector", SCL: "input", NC_3: "no_connect", SDA: "bidirectional", VDD: "power_in", A0: "input", A1: "input", NC_8: "no_connect", A2: "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", NC_13: "no_connect", P3: "bidirectional", VSS: "power_in", P4: "bidirectional", P5: "bidirectional", NC_18: "no_connect", P6: "bidirectional", P7: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class PCF8574P extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "P0": "4",
  "P1": "5",
  "P2": "6",
  "P3": "7",
  "GND": "8",
  "P4": "9",
  "P5": "10",
  "P6": "11",
  "P7": "12",
  "~{INT}": "13",
  "SCL": "14",
  "SDA": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", GND: "power_in", P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", "~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCF8574T extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "P0": "4",
  "P1": "5",
  "P2": "6",
  "P3": "7",
  "GND": "8",
  "P4": "9",
  "P5": "10",
  "P6": "11",
  "P7": "12",
  "~{INT}": "13",
  "SCL": "14",
  "SDA": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", GND: "power_in", P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", "~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCF8575DBR extends Component.withPins({
  "~{INT}": "1",
  "A1": "2",
  "A2": "3",
  "P0": "4",
  "P1": "5",
  "P2": "6",
  "P3": "7",
  "P4": "8",
  "P5": "9",
  "P6": "10",
  "P7": "11",
  "GND": "12",
  "P10": "13",
  "P11": "14",
  "P12": "15",
  "P13": "16",
  "P14": "17",
  "P15": "18",
  "P16": "19",
  "P17": "20",
  "A0": "21",
  "SCL": "22",
  "SDA": "23",
  "VCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{INT}": "open_collector", A1: "input", A2: "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", GND: "power_in", P10: "bidirectional", P11: "bidirectional", P12: "bidirectional", P13: "bidirectional", P14: "bidirectional", P15: "bidirectional", P16: "bidirectional", P17: "bidirectional", A0: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCF8584 extends Component.withPins({
  "CLK": "1",
  "SDA": "2",
  "SCL": "3",
  "~{IACK}": "4",
  "~{INT}": "5",
  "A0": "6",
  "D0": "7",
  "D1": "8",
  "D2": "9",
  "VSS": "10",
  "D3": "11",
  "D4": "12",
  "D5": "13",
  "D6": "14",
  "D7": "15",
  "~{RD}": "16",
  "~{CS}": "17",
  "~{WR}": "18",
  "~{RST}": "19",
  "VDD": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CLK: "input", SDA: "bidirectional", SCL: "bidirectional", "~{IACK}": "input", "~{INT}": "output", A0: "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", VSS: "power_in", D3: "tri_state", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", "~{RD}": "passive", "~{CS}": "input", "~{WR}": "input", "~{RST}": "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class PCF8591 extends Component.withPins({
  "AIN0": "1",
  "AIN1": "2",
  "AIN2": "3",
  "AIN3": "4",
  "A0": "5",
  "A1": "6",
  "A2": "7",
  "VSS": "8",
  "SDA": "9",
  "SCL": "10",
  "OSC": "11",
  "EXT": "12",
  "AGND": "13",
  "VREF": "14",
  "AOUT": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { AIN0: "passive", AIN1: "passive", AIN2: "passive", AIN3: "passive", A0: "input", A1: "input", A2: "input", VSS: "power_in", SDA: "bidirectional", SCL: "input", OSC: "bidirectional", EXT: "input", AGND: "power_out", VREF: "passive", AOUT: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class SC18IS604PW extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "~{INT}": "3",
  "~{RESET}": "4",
  "GPIO4": "5",
  "GPIO3": "6",
  "GPIO2": "7",
  "~{CS}": "8",
  "GPIO0": "9",
  "MOSI": "10",
  "SCLK": "11",
  "V_{DD}": "12",
  "V_{SS}": "13",
  "MISO": "14",
  "VREFP": "15",
  "GPIO1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "output", "~{INT}": "open_collector", "~{RESET}": "input", GPIO4: "input", GPIO3: "bidirectional", GPIO2: "bidirectional", "~{CS}": "input", GPIO0: "bidirectional", MOSI: "input", SCLK: "input", "V_{DD}": "power_in", "V_{SS}": "power_in", MISO: "output", VREFP: "input", GPIO1: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class SC18IS606PW extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "~{INT}": "3",
  "~{RESET}": "4",
  "A2": "5",
  "A1": "6",
  "A0": "7",
  "~{SS2}/GPIO2": "8",
  "~{SS0}/GPIO0": "9",
  "MOSI": "10",
  "SPICLK": "11",
  "V_{DD}": "12",
  "V_{SS}": "13",
  "MISO": "14",
  "VREFP": "15",
  "~{SS1}/GPIO1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", "~{INT}": "open_collector", "~{RESET}": "input", A2: "input", A1: "input", A0: "input", "~{SS2}/GPIO2": "bidirectional", "~{SS0}/GPIO0": "bidirectional", MOSI: "output", SPICLK: "output", "V_{DD}": "power_in", "V_{SS}": "power_in", MISO: "input", VREFP: "input", "~{SS1}/GPIO1": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class STMPE1600 extends Component.withPins({
  "GPIO_0": "1",
  "GPIO_1": "2",
  "GPIO_2": "3",
  "GPIO_3": "4",
  "GPIO_4": "5",
  "GPIO_5": "6",
  "GPIO_6": "7",
  "GPIO_7": "8",
  "GND": "9",
  "GPIO_8": "10",
  "GPIO_9": "11",
  "GPIO_10": "12",
  "GPIO_11": "13",
  "GPIO_12": "14",
  "GPIO_13": "15",
  "GPIO_14": "16",
  "GPIO_15": "17",
  "A0": "18",
  "SCL": "19",
  "SDA": "20",
  "VCC": "21",
  "INT": "22",
  "A1": "23",
  "A2": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GPIO_0: "bidirectional", GPIO_1: "bidirectional", GPIO_2: "bidirectional", GPIO_3: "bidirectional", GPIO_4: "bidirectional", GPIO_5: "bidirectional", GPIO_6: "bidirectional", GPIO_7: "bidirectional", GND: "power_in", GPIO_8: "bidirectional", GPIO_9: "bidirectional", GPIO_10: "bidirectional", GPIO_11: "bidirectional", GPIO_12: "bidirectional", GPIO_13: "bidirectional", GPIO_14: "bidirectional", GPIO_15: "bidirectional", A0: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", INT: "output", A1: "input", A2: "input", ...opts.pinTypes } });
  }
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
 */
export class TCA6408APW extends Component.withPins({
  "V_{CCI}": "1",
  "ADDR": "2",
  "~{RESET}": "3",
  "P0": "4",
  "P1": "5",
  "P2": "6",
  "P3": "7",
  "GND": "8",
  "P4": "9",
  "P5": "10",
  "P6": "11",
  "P7": "12",
  "~{INT}": "13",
  "SCL": "14",
  "SDA": "15",
  "V_{CCP}": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{CCI}": "power_in", ADDR: "input", "~{RESET}": "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", GND: "power_in", P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", "~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", "V_{CCP}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class TCA6408ARGT extends Component.withPins({
  "~{RESET}": "1",
  "P0": "2",
  "P1": "3",
  "P2": "4",
  "P3": "5",
  "GND": "6",
  "P4": "7",
  "P5": "8",
  "P6": "9",
  "P7": "10",
  "~{INT}": "11",
  "SCL": "12",
  "SDA": "13",
  "V_{CCP}": "14",
  "V_{CCI}": "15",
  "ADDR": "16",
  "EPAD": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RESET}": "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", GND: "power_in", P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", "~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", "V_{CCP}": "power_in", "V_{CCI}": "power_in", ADDR: "input", EPAD: "passive", ...opts.pinTypes } });
  }
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
 */
export class TCA6408ARSV extends Component.withPins({
  "~{RESET}": "1",
  "P0": "2",
  "P1": "3",
  "P2": "4",
  "P3": "5",
  "GND": "6",
  "P4": "7",
  "P5": "8",
  "P6": "9",
  "P7": "10",
  "~{INT}": "11",
  "SCL": "12",
  "SDA": "13",
  "V_{CCP}": "14",
  "V_{CCI}": "15",
  "ADDR": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RESET}": "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", GND: "power_in", P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", "~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", "V_{CCP}": "power_in", "V_{CCI}": "power_in", ADDR: "input", ...opts.pinTypes } });
  }
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
 */
export class TCA9535DBR extends Component.withPins({
  "~{INT}": "1",
  "A1": "2",
  "A2": "3",
  "P00": "4",
  "P01": "5",
  "P02": "6",
  "P03": "7",
  "P04": "8",
  "P05": "9",
  "P06": "10",
  "P07": "11",
  "GND": "12",
  "P10": "13",
  "P11": "14",
  "P12": "15",
  "P13": "16",
  "P14": "17",
  "P15": "18",
  "P16": "19",
  "P17": "20",
  "A0": "21",
  "SCL": "22",
  "SDA": "23",
  "VCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{INT}": "open_collector", A1: "input", A2: "input", P00: "bidirectional", P01: "bidirectional", P02: "bidirectional", P03: "bidirectional", P04: "bidirectional", P05: "bidirectional", P06: "bidirectional", P07: "bidirectional", GND: "power_in", P10: "bidirectional", P11: "bidirectional", P12: "bidirectional", P13: "bidirectional", P14: "bidirectional", P15: "bidirectional", P16: "bidirectional", P17: "bidirectional", A0: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TCA9535DBT extends Component.withPins({
  "~{INT}": "1",
  "A1": "2",
  "A2": "3",
  "P00": "4",
  "P01": "5",
  "P02": "6",
  "P03": "7",
  "P04": "8",
  "P05": "9",
  "P06": "10",
  "P07": "11",
  "GND": "12",
  "P10": "13",
  "P11": "14",
  "P12": "15",
  "P13": "16",
  "P14": "17",
  "P15": "18",
  "P16": "19",
  "P17": "20",
  "A0": "21",
  "SCL": "22",
  "SDA": "23",
  "VCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{INT}": "open_collector", A1: "input", A2: "input", P00: "bidirectional", P01: "bidirectional", P02: "bidirectional", P03: "bidirectional", P04: "bidirectional", P05: "bidirectional", P06: "bidirectional", P07: "bidirectional", GND: "power_in", P10: "bidirectional", P11: "bidirectional", P12: "bidirectional", P13: "bidirectional", P14: "bidirectional", P15: "bidirectional", P16: "bidirectional", P17: "bidirectional", A0: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TCA9535RGER extends Component.withPins({
  "P00": "1",
  "P01": "2",
  "P02": "3",
  "P03": "4",
  "P04": "5",
  "P05": "6",
  "P06": "7",
  "P07": "8",
  "GND": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "P17": "17",
  "A0": "18",
  "SCL": "19",
  "SDA": "20",
  "VCC": "21",
  "~{INT}": "22",
  "A1": "23",
  "A2": "24",
  "EPAD": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P00: "bidirectional", P01: "bidirectional", P02: "bidirectional", P03: "bidirectional", P04: "bidirectional", P05: "bidirectional", P06: "bidirectional", P07: "bidirectional", GND: "power_in", P10: "bidirectional", P11: "bidirectional", P12: "bidirectional", P13: "bidirectional", P14: "bidirectional", P15: "bidirectional", P16: "bidirectional", P17: "bidirectional", A0: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", "~{INT}": "open_collector", A1: "input", A2: "input", EPAD: "input", ...opts.pinTypes } });
  }
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
 */
export class TCA9535MRGER extends Component.withPins({
  "P00": "1",
  "P01": "2",
  "P02": "3",
  "P03": "4",
  "P04": "5",
  "P05": "6",
  "P06": "7",
  "P07": "8",
  "GND": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "P17": "17",
  "A0": "18",
  "SCL": "19",
  "SDA": "20",
  "VCC": "21",
  "~{INT}": "22",
  "A1": "23",
  "A2": "24",
  "EPAD": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P00: "bidirectional", P01: "bidirectional", P02: "bidirectional", P03: "bidirectional", P04: "bidirectional", P05: "bidirectional", P06: "bidirectional", P07: "bidirectional", GND: "power_in", P10: "bidirectional", P11: "bidirectional", P12: "bidirectional", P13: "bidirectional", P14: "bidirectional", P15: "bidirectional", P16: "bidirectional", P17: "bidirectional", A0: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", "~{INT}": "open_collector", A1: "input", A2: "input", EPAD: "input", ...opts.pinTypes } });
  }
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
 */
export class TCA9535PWR extends Component.withPins({
  "~{INT}": "1",
  "A1": "2",
  "A2": "3",
  "P00": "4",
  "P01": "5",
  "P02": "6",
  "P03": "7",
  "P04": "8",
  "P05": "9",
  "P06": "10",
  "P07": "11",
  "GND": "12",
  "P10": "13",
  "P11": "14",
  "P12": "15",
  "P13": "16",
  "P14": "17",
  "P15": "18",
  "P16": "19",
  "P17": "20",
  "A0": "21",
  "SCL": "22",
  "SDA": "23",
  "VCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{INT}": "open_collector", A1: "input", A2: "input", P00: "bidirectional", P01: "bidirectional", P02: "bidirectional", P03: "bidirectional", P04: "bidirectional", P05: "bidirectional", P06: "bidirectional", P07: "bidirectional", GND: "power_in", P10: "bidirectional", P11: "bidirectional", P12: "bidirectional", P13: "bidirectional", P14: "bidirectional", P15: "bidirectional", P16: "bidirectional", P17: "bidirectional", A0: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TCA9535RTWR extends Component.withPins({
  "P00": "1",
  "P01": "2",
  "P02": "3",
  "P03": "4",
  "P04": "5",
  "P05": "6",
  "P06": "7",
  "P07": "8",
  "GND": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "P17": "17",
  "A0": "18",
  "SCL": "19",
  "SDA": "20",
  "VCC": "21",
  "~{INT}": "22",
  "A1": "23",
  "A2": "24",
  "EPAD": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P00: "bidirectional", P01: "bidirectional", P02: "bidirectional", P03: "bidirectional", P04: "bidirectional", P05: "bidirectional", P06: "bidirectional", P07: "bidirectional", GND: "power_in", P10: "bidirectional", P11: "bidirectional", P12: "bidirectional", P13: "bidirectional", P14: "bidirectional", P15: "bidirectional", P16: "bidirectional", P17: "bidirectional", A0: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", "~{INT}": "open_collector", A1: "input", A2: "input", EPAD: "input", ...opts.pinTypes } });
  }
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
 */
export class TCA9544A extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "~{INT0}": "4",
  "SD0": "5",
  "SC0": "6",
  "~{INT1}": "7",
  "SD1": "8",
  "SC1": "9",
  "GND": "10",
  "~{INT2}": "11",
  "SD2": "12",
  "SC2": "13",
  "~{INT3}": "14",
  "SD3": "15",
  "SC3": "16",
  "~{INT}": "17",
  "SCL": "18",
  "SDA": "19",
  "VCC": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", "~{INT0}": "input", SD0: "bidirectional", SC0: "bidirectional", "~{INT1}": "input", SD1: "bidirectional", SC1: "bidirectional", GND: "power_in", "~{INT2}": "input", SD2: "bidirectional", SC2: "bidirectional", "~{INT3}": "input", SD3: "bidirectional", SC3: "bidirectional", "~{INT}": "open_collector", SCL: "bidirectional", SDA: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TCA9546AD extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "~{RESET}": "3",
  "SD0": "4",
  "SC0": "5",
  "SD1": "6",
  "SC1": "7",
  "GND": "8",
  "SD2": "9",
  "SC2": "10",
  "SD3": "11",
  "SC3": "12",
  "A2": "13",
  "SCL": "14",
  "SDA": "15",
  "VCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", "~{RESET}": "input", SD0: "bidirectional", SC0: "bidirectional", SD1: "bidirectional", SC1: "bidirectional", GND: "power_in", SD2: "bidirectional", SC2: "bidirectional", SD3: "bidirectional", SC3: "bidirectional", A2: "input", SCL: "bidirectional", SDA: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TCA9546APW extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "~{RESET}": "3",
  "SD0": "4",
  "SC0": "5",
  "SD1": "6",
  "SC1": "7",
  "GND": "8",
  "SD2": "9",
  "SC2": "10",
  "SD3": "11",
  "SC3": "12",
  "A2": "13",
  "SCL": "14",
  "SDA": "15",
  "VCC": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", "~{RESET}": "input", SD0: "bidirectional", SC0: "bidirectional", SD1: "bidirectional", SC1: "bidirectional", GND: "power_in", SD2: "bidirectional", SC2: "bidirectional", SD3: "bidirectional", SC3: "bidirectional", A2: "input", SCL: "bidirectional", SDA: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TCA9548ARGER extends Component.withPins({
  "SD0": "1",
  "SC0": "2",
  "SD1": "3",
  "SC1": "4",
  "SD2": "5",
  "SC2": "6",
  "SD3": "7",
  "SC3": "8",
  "GND": "9",
  "SD4": "10",
  "SC4": "11",
  "SD5": "12",
  "SC5": "13",
  "SD6": "14",
  "SC6": "15",
  "SD7": "16",
  "SC7": "17",
  "A2": "18",
  "SCL": "19",
  "SDA": "20",
  "VCC": "21",
  "A0": "22",
  "A1": "23",
  "~{RESET}": "24",
  "1EP": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SD0: "bidirectional", SC0: "output", SD1: "bidirectional", SC1: "output", SD2: "bidirectional", SC2: "output", SD3: "bidirectional", SC3: "output", GND: "power_in", SD4: "bidirectional", SC4: "output", SD5: "bidirectional", SC5: "output", SD6: "bidirectional", SC6: "output", SD7: "bidirectional", SC7: "output", A2: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", A0: "input", A1: "input", "~{RESET}": "input", "1EP": "no_connect", ...opts.pinTypes } });
  }
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
 */
export class TCA9554DB extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "P0": "4",
  "P1": "5",
  "P2": "6",
  "P3": "7",
  "GND": "8",
  "P4": "9",
  "P5": "10",
  "P6": "11",
  "P7": "12",
  "~{INT}": "13",
  "SCL": "14",
  "SDA": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", GND: "power_in", P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", "~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TCA9554DBQ extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "P0": "4",
  "P1": "5",
  "P2": "6",
  "P3": "7",
  "GND": "8",
  "P4": "9",
  "P5": "10",
  "P6": "11",
  "P7": "12",
  "~{INT}": "13",
  "SCL": "14",
  "SDA": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", GND: "power_in", P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", "~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TCA9554DW extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "P0": "4",
  "P1": "5",
  "P2": "6",
  "P3": "7",
  "GND": "8",
  "P4": "9",
  "P5": "10",
  "P6": "11",
  "P7": "12",
  "~{INT}": "13",
  "SCL": "14",
  "SDA": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", GND: "power_in", P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", "~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TCA9554PW extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "P0": "4",
  "P1": "5",
  "P2": "6",
  "P3": "7",
  "GND": "8",
  "P4": "9",
  "P5": "10",
  "P6": "11",
  "P7": "12",
  "~{INT}": "13",
  "SCL": "14",
  "SDA": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", GND: "power_in", P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", "~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TCA9555DBR extends Component.withPins({
  "~{INT}": "1",
  "A1": "2",
  "A2": "3",
  "P00": "4",
  "P01": "5",
  "P02": "6",
  "P03": "7",
  "P04": "8",
  "P05": "9",
  "P06": "10",
  "P07": "11",
  "GND": "12",
  "P10": "13",
  "P11": "14",
  "P12": "15",
  "P13": "16",
  "P14": "17",
  "P15": "18",
  "P16": "19",
  "P17": "20",
  "A0": "21",
  "SCL": "22",
  "SDA": "23",
  "VCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{INT}": "open_collector", A1: "input", A2: "input", P00: "bidirectional", P01: "bidirectional", P02: "bidirectional", P03: "bidirectional", P04: "bidirectional", P05: "bidirectional", P06: "bidirectional", P07: "bidirectional", GND: "power_in", P10: "bidirectional", P11: "bidirectional", P12: "bidirectional", P13: "bidirectional", P14: "bidirectional", P15: "bidirectional", P16: "bidirectional", P17: "bidirectional", A0: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TCA9555DBT extends Component.withPins({
  "~{INT}": "1",
  "A1": "2",
  "A2": "3",
  "P00": "4",
  "P01": "5",
  "P02": "6",
  "P03": "7",
  "P04": "8",
  "P05": "9",
  "P06": "10",
  "P07": "11",
  "GND": "12",
  "P10": "13",
  "P11": "14",
  "P12": "15",
  "P13": "16",
  "P14": "17",
  "P15": "18",
  "P16": "19",
  "P17": "20",
  "A0": "21",
  "SCL": "22",
  "SDA": "23",
  "VCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{INT}": "open_collector", A1: "input", A2: "input", P00: "bidirectional", P01: "bidirectional", P02: "bidirectional", P03: "bidirectional", P04: "bidirectional", P05: "bidirectional", P06: "bidirectional", P07: "bidirectional", GND: "power_in", P10: "bidirectional", P11: "bidirectional", P12: "bidirectional", P13: "bidirectional", P14: "bidirectional", P15: "bidirectional", P16: "bidirectional", P17: "bidirectional", A0: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TCA9555PWR extends Component.withPins({
  "~{INT}": "1",
  "A1": "2",
  "A2": "3",
  "P00": "4",
  "P01": "5",
  "P02": "6",
  "P03": "7",
  "P04": "8",
  "P05": "9",
  "P06": "10",
  "P07": "11",
  "GND": "12",
  "P10": "13",
  "P11": "14",
  "P12": "15",
  "P13": "16",
  "P14": "17",
  "P15": "18",
  "P16": "19",
  "P17": "20",
  "A0": "21",
  "SCL": "22",
  "SDA": "23",
  "VCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{INT}": "open_collector", A1: "input", A2: "input", P00: "bidirectional", P01: "bidirectional", P02: "bidirectional", P03: "bidirectional", P04: "bidirectional", P05: "bidirectional", P06: "bidirectional", P07: "bidirectional", GND: "power_in", P10: "bidirectional", P11: "bidirectional", P12: "bidirectional", P13: "bidirectional", P14: "bidirectional", P15: "bidirectional", P16: "bidirectional", P17: "bidirectional", A0: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TCA9555RGER extends Component.withPins({
  "P00": "1",
  "P01": "2",
  "P02": "3",
  "P03": "4",
  "P04": "5",
  "P05": "6",
  "P06": "7",
  "P07": "8",
  "GND": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "P17": "17",
  "A0": "18",
  "SCL": "19",
  "SDA": "20",
  "VCC": "21",
  "~{INT}": "22",
  "A1": "23",
  "A2": "24",
  "EPAD": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P00: "bidirectional", P01: "bidirectional", P02: "bidirectional", P03: "bidirectional", P04: "bidirectional", P05: "bidirectional", P06: "bidirectional", P07: "bidirectional", GND: "power_in", P10: "bidirectional", P11: "bidirectional", P12: "bidirectional", P13: "bidirectional", P14: "bidirectional", P15: "bidirectional", P16: "bidirectional", P17: "bidirectional", A0: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", "~{INT}": "open_collector", A1: "input", A2: "input", EPAD: "input", ...opts.pinTypes } });
  }
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
 */
export class TCA9555RTWR extends Component.withPins({
  "P00": "1",
  "P01": "2",
  "P02": "3",
  "P03": "4",
  "P04": "5",
  "P05": "6",
  "P06": "7",
  "P07": "8",
  "GND": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P15": "15",
  "P16": "16",
  "P17": "17",
  "A0": "18",
  "SCL": "19",
  "SDA": "20",
  "VCC": "21",
  "~{INT}": "22",
  "A1": "23",
  "A2": "24",
  "EPAD": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P00: "bidirectional", P01: "bidirectional", P02: "bidirectional", P03: "bidirectional", P04: "bidirectional", P05: "bidirectional", P06: "bidirectional", P07: "bidirectional", GND: "power_in", P10: "bidirectional", P11: "bidirectional", P12: "bidirectional", P13: "bidirectional", P14: "bidirectional", P15: "bidirectional", P16: "bidirectional", P17: "bidirectional", A0: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", "~{INT}": "open_collector", A1: "input", A2: "input", EPAD: "input", ...opts.pinTypes } });
  }
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
 */
export class TCAL6408PW extends Component.withPins({
  "V_{CCI}": "1",
  "ADDR": "2",
  "~{RESET}": "3",
  "P0": "4",
  "P1": "5",
  "P2": "6",
  "P3": "7",
  "GND": "8",
  "P4": "9",
  "P5": "10",
  "P6": "11",
  "P7": "12",
  "~{INT}": "13",
  "SCL": "14",
  "SDA": "15",
  "V_{CCP}": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{CCI}": "power_in", ADDR: "input", "~{RESET}": "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", GND: "power_in", P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", "~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", "V_{CCP}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class TCAL6408RSV extends Component.withPins({
  "~{RESET}": "1",
  "P0": "2",
  "P1": "3",
  "P2": "4",
  "P3": "5",
  "GND": "6",
  "P4": "7",
  "P5": "8",
  "P6": "9",
  "P7": "10",
  "~{INT}": "11",
  "SCL": "12",
  "SDA": "13",
  "V_{CCP}": "14",
  "V_{CCI}": "15",
  "ADDR": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RESET}": "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", GND: "power_in", P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", "~{INT}": "open_collector", SCL: "input", SDA: "bidirectional", "V_{CCP}": "power_in", "V_{CCI}": "power_in", ADDR: "input", ...opts.pinTypes } });
  }
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
 */
export class TPIC6595 extends Component.withPins({
  "PGND_1": "1",
  "VCC": "2",
  "SER_IN": "3",
  "DRAIN0": "4",
  "DRAIN1": "5",
  "DRAIN2": "6",
  "DRAIN3": "7",
  "~{SRCLR}": "8",
  "~{G}": "9",
  "PGND_10": "10",
  "PGND_11": "11",
  "RCLK": "12",
  "SRCK": "13",
  "DRAIN4": "14",
  "DRAIN5": "15",
  "DRAIN6": "16",
  "DRAIN7": "17",
  "SER_OUT": "18",
  "LGND": "19",
  "PGND_20": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PGND_1: "power_in", VCC: "power_in", SER_IN: "input", DRAIN0: "open_collector", DRAIN1: "open_collector", DRAIN2: "open_collector", DRAIN3: "open_collector", "~{SRCLR}": "input", "~{G}": "input", PGND_10: "passive", PGND_11: "passive", RCLK: "input", SRCK: "input", DRAIN4: "open_collector", DRAIN5: "open_collector", DRAIN6: "open_collector", DRAIN7: "open_collector", SER_OUT: "output", LGND: "power_in", PGND_20: "passive", ...opts.pinTypes } });
  }
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
 */
export class XRA1201IG24 extends Component.withPins({
  "~{INT}": "1",
  "A1": "2",
  "A2": "3",
  "P0": "4",
  "P1": "5",
  "P2": "6",
  "P3": "7",
  "P4": "8",
  "P5": "9",
  "P6": "10",
  "P7": "11",
  "GND": "12",
  "P8": "13",
  "P9": "14",
  "P10": "15",
  "P11": "16",
  "P12": "17",
  "P13": "18",
  "P14": "19",
  "P15": "20",
  "A0": "21",
  "SCL": "22",
  "SDA": "23",
  "VCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{INT}": "open_collector", A1: "input", A2: "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", GND: "power_in", P8: "bidirectional", P9: "bidirectional", P10: "bidirectional", P11: "bidirectional", P12: "bidirectional", P13: "bidirectional", P14: "bidirectional", P15: "bidirectional", A0: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class XRA1201IL24 extends Component.withPins({
  "~{INT}": "1",
  "A1": "2",
  "A2": "3",
  "P0": "4",
  "P1": "5",
  "P2": "6",
  "P3": "7",
  "P4": "8",
  "P5": "9",
  "P6": "10",
  "P7": "11",
  "GND": "12",
  "P8": "13",
  "P9": "14",
  "P10": "15",
  "P11": "16",
  "P12": "17",
  "P13": "18",
  "P14": "19",
  "P15": "20",
  "A0": "21",
  "SCL": "22",
  "SDA": "23",
  "VCC": "24",
  "EPAD": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{INT}": "open_collector", A1: "input", A2: "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", GND: "power_in", P8: "bidirectional", P9: "bidirectional", P10: "bidirectional", P11: "bidirectional", P12: "bidirectional", P13: "bidirectional", P14: "bidirectional", P15: "bidirectional", A0: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", EPAD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class XRA1201PIG24 extends Component.withPins({
  "~{INT}": "1",
  "A1": "2",
  "A2": "3",
  "P0": "4",
  "P1": "5",
  "P2": "6",
  "P3": "7",
  "P4": "8",
  "P5": "9",
  "P6": "10",
  "P7": "11",
  "GND": "12",
  "P8": "13",
  "P9": "14",
  "P10": "15",
  "P11": "16",
  "P12": "17",
  "P13": "18",
  "P14": "19",
  "P15": "20",
  "A0": "21",
  "SCL": "22",
  "SDA": "23",
  "VCC": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{INT}": "open_collector", A1: "input", A2: "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", GND: "power_in", P8: "bidirectional", P9: "bidirectional", P10: "bidirectional", P11: "bidirectional", P12: "bidirectional", P13: "bidirectional", P14: "bidirectional", P15: "bidirectional", A0: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class XRA1201PIL24 extends Component.withPins({
  "~{INT}": "1",
  "A1": "2",
  "A2": "3",
  "P0": "4",
  "P1": "5",
  "P2": "6",
  "P3": "7",
  "P4": "8",
  "P5": "9",
  "P6": "10",
  "P7": "11",
  "GND": "12",
  "P8": "13",
  "P9": "14",
  "P10": "15",
  "P11": "16",
  "P12": "17",
  "P13": "18",
  "P14": "19",
  "P15": "20",
  "A0": "21",
  "SCL": "22",
  "SDA": "23",
  "VCC": "24",
  "EPAD": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{INT}": "open_collector", A1: "input", A2: "input", P0: "bidirectional", P1: "bidirectional", P2: "bidirectional", P3: "bidirectional", P4: "bidirectional", P5: "bidirectional", P6: "bidirectional", P7: "bidirectional", GND: "power_in", P8: "bidirectional", P9: "bidirectional", P10: "bidirectional", P11: "bidirectional", P12: "bidirectional", P13: "bidirectional", P14: "bidirectional", P15: "bidirectional", A0: "input", SCL: "input", SDA: "bidirectional", VCC: "power_in", EPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_Expansion:XRA1201PIL24";
  override referencePrefix = "U";
}
