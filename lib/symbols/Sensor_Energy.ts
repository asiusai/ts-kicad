// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * High precision energy metering device for single-phase two-wire and single-phase three-wire, SSOP-28
 *
 * KiCad symbol: `Sensor_Energy:ATM90E26-YU`. Reference prefix: `U`.
 * Footprint filters: SSOP*28*5.3x10.2mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/Atmel-46002-SE-M90E26-Datasheet.pdf
 * Keywords: energy metering sensor.
 * Default footprint: Package_SO:SSOP-28_5.3x10.2mm_P0.65mm.
 */
export class ATM90E26_YU extends Component.withPins({
  "MMD1": "1",
  "DGND_2": "2",
  "DVDD": "3",
  "~{Reset}": "4",
  "AVDD": "5",
  "AGND_6": "6",
  "I2P": "7",
  "I2N": "8",
  "DGND_9": "9",
  "I1P": "10",
  "I1N": "11",
  "USEL": "12",
  "Vref": "13",
  "AGND_14": "14",
  "VN": "15",
  "VP": "16",
  "WarnOut": "17",
  "CF1": "18",
  "CF2": "19",
  "IRQ": "20",
  "ZX": "21",
  "OSCI": "22",
  "OSCO": "23",
  "~{CS}": "24",
  "SCLK": "25",
  "SDO/UTX": "26",
  "SDI/URX": "27",
  "MMD0": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { MMD1: "input", DGND_2: "power_in", DVDD: "power_in", "~{Reset}": "input", AVDD: "power_in", AGND_6: "power_in", I2P: "input", I2N: "input", DGND_9: "passive", I1P: "input", I1N: "input", USEL: "input", Vref: "output", AGND_14: "passive", VN: "input", VP: "input", WarnOut: "output", CF1: "output", CF2: "output", IRQ: "output", ZX: "output", OSCI: "input", OSCO: "output", "~{CS}": "input", SCLK: "input", "SDO/UTX": "output", "SDI/URX": "input", MMD0: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:ATM90E26-YU";
  override referencePrefix = "U";
}

/**
 * Zero-Drift, Bidirectional Current/Power Monitor (0-26V) With I2C Interface, SOIC-8
 *
 * KiCad symbol: `Sensor_Energy:INA219AxD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ina219.pdf
 * Keywords: ADC I2C 16-Bit Oversampling Current Shunt.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class INA219AxD extends Component.withPins({
  "A1": "1",
  "A0": "2",
  "SDA": "3",
  "SCL": "4",
  "VS": "5",
  "GND": "6",
  "IN-": "7",
  "IN+": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A1: "input", A0: "input", SDA: "bidirectional", SCL: "input", VS: "power_in", GND: "power_in", "IN-": "input", "IN+": "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:INA219AxD";
  override referencePrefix = "U";
}

/**
 * Zero-Drift, Bidirectional Current/Power Monitor (0-26V) With I2C Interface, SOT-23-8
 *
 * KiCad symbol: `Sensor_Energy:INA219AxDCN`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ina219.pdf
 * Keywords: ADC I2C 16-Bit Oversampling Current Shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 */
export class INA219AxDCN extends Component.withPins({
  "IN+": "1",
  "IN-": "2",
  "GND": "3",
  "VS": "4",
  "SCL": "5",
  "SDA": "6",
  "A0": "7",
  "A1": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "IN+": "input", "IN-": "input", GND: "power_in", VS: "power_in", SCL: "input", SDA: "bidirectional", A0: "input", A1: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:INA219AxDCN";
  override referencePrefix = "U";
}

/**
 * Zero-Drift, HighAccuracy, Bidirectional Current/Power Monitor (0-26V) With I2C Interface, SOIC-8
 *
 * KiCad symbol: `Sensor_Energy:INA219BxD`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/ina219.pdf
 * Keywords: ADC I2C 16-Bit Oversampling Current Shunt.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class INA219BxD extends Component.withPins({
  "A1": "1",
  "A0": "2",
  "SDA": "3",
  "SCL": "4",
  "VS": "5",
  "GND": "6",
  "IN-": "7",
  "IN+": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A1: "input", A0: "input", SDA: "bidirectional", SCL: "input", VS: "power_in", GND: "power_in", "IN-": "input", "IN+": "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:INA219BxD";
  override referencePrefix = "U";
}

/**
 * Zero-Drift, HighAccuracy, Bidirectional Current/Power Monitor (0-26V) With I2C Interface, SOT-23-8
 *
 * KiCad symbol: `Sensor_Energy:INA219BxDCN`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/ina219.pdf
 * Keywords: ADC I2C 16-Bit Oversampling Current Shunt.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 */
export class INA219BxDCN extends Component.withPins({
  "IN+": "1",
  "IN-": "2",
  "GND": "3",
  "VS": "4",
  "SCL": "5",
  "SDA": "6",
  "A0": "7",
  "A1": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "IN+": "input", "IN-": "input", GND: "power_in", VS: "power_in", SCL: "input", SDA: "bidirectional", A0: "input", A1: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:INA219BxDCN";
  override referencePrefix = "U";
}

/**
 * High-Side or Low-Side Measurement, Bi-Directional Current and Power Monitor (0-36V) with I2C Compatible Interface, TSSOP-10 (Texas DGS0010A / VSSOP)
 *
 * KiCad symbol: `Sensor_Energy:INA226`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*3x3mm?P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/ina226.pdf
 * Keywords: ADC I2C 16-Bit Oversampling Current Shunt.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 */
export class INA226 extends Component.withPins({
  "A1": "1",
  "A0": "2",
  "~{Alert}": "3",
  "SDA": "4",
  "SCL": "5",
  "VS": "6",
  "GND": "7",
  "Vbus": "8",
  "Vin-": "9",
  "Vin+": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A1: "input", A0: "input", "~{Alert}": "open_collector", SDA: "bidirectional", SCL: "input", VS: "power_in", GND: "power_in", Vbus: "input", "Vin-": "input", "Vin+": "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:INA226";
  override referencePrefix = "U";
}

/**
 * High-Side or Low-Side Measurement, Bi-Directional Current and Power Monitor (0-85V) with I2C, SMBus-, and PMBus-Compatible Interface, TSSOP-10 (Texas DGS0010A / VSSOP)
 *
 * KiCad symbol: `Sensor_Energy:INA228`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*3x3mm?P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina228.pdf
 * Keywords: ADC I2C 20-Bit Oversampling Current Shunt.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 */
export class INA228 extends Component.withPins({
  "A1": "1",
  "A0": "2",
  "~{Alert}": "3",
  "SDA": "4",
  "SCL": "5",
  "VS": "6",
  "GND": "7",
  "Vbus": "8",
  "Vin-": "9",
  "Vin+": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A1: "input", A0: "input", "~{Alert}": "open_collector", SDA: "bidirectional", SCL: "input", VS: "power_in", GND: "power_in", Vbus: "input", "Vin-": "input", "Vin+": "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:INA228";
  override referencePrefix = "U";
}

/**
 * 85V, 20-bit, Ultra-Precise Power/Energy/Charge Monitor, SPI Interface, TSSOP-10 (Texas DGS0010A / VSSOP)
 *
 * KiCad symbol: `Sensor_Energy:INA229`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*3x3mm?P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina229.pdf
 * Keywords: ADC Current-Monitor High-Side Low-Side bidirectional.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 */
export class INA229 extends Component.withPins({
  "~{CS}": "1",
  "MOSI": "2",
  "~{ALERT}": "3",
  "MISO": "4",
  "SCLK": "5",
  "VS": "6",
  "GND": "7",
  "VBUS": "8",
  "IN-": "9",
  "IN+": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", MOSI: "input", "~{ALERT}": "open_collector", MISO: "tri_state", SCLK: "input", VS: "power_in", GND: "power_in", VBUS: "input", "IN-": "input", "IN+": "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:INA229";
  override referencePrefix = "U";
}

/**
 * High-Side or Low-Side Measurement, Bi-Directional Current and Power Monitor (0-36V) with I2C, SMBus-, and PMBus-Compatible Interface, TSSOP-10 (Texas DGS0010A / VSSOP)
 *
 * KiCad symbol: `Sensor_Energy:INA233`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*3x3mm?P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina233.pdf
 * Keywords: ADC I2C 16-Bit Oversampling Current Shunt.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 */
export class INA233 extends Component.withPins({
  "A1": "1",
  "A0": "2",
  "~{Alert}": "3",
  "SDA": "4",
  "SCL": "5",
  "VS": "6",
  "GND": "7",
  "Vbus": "8",
  "Vin-": "9",
  "Vin+": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A1: "input", A0: "input", "~{Alert}": "open_collector", SDA: "bidirectional", SCL: "input", VS: "power_in", GND: "power_in", Vbus: "input", "Vin-": "input", "Vin+": "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:INA233";
  override referencePrefix = "U";
}

/**
 * Bidirectional Current/Voltage/Power Monitor (0-28V) With I2C Interface, DSBGA-8
 *
 * KiCad symbol: `Sensor_Energy:INA234AxYBJ`. Reference prefix: `U`.
 * Footprint filters: *DSBGA*0.705x1.468mm*P0.4mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina234.pdf
 * Keywords: ADC I2C 12-Bit Current Voltage Power Shunt.
 * Default footprint: Package_BGA:Texas_DSBGA-8_0.705x1.468mm_Layout2x4_P0.4mm.
 */
export class INA234AxYBJ extends Component.withPins({
  "~{ALERT}": "A1",
  "IN+": "A2",
  "A0": "B1",
  "IN-": "B2",
  "SDA": "C1",
  "GND": "C2",
  "SCL": "D1",
  "VS": "D2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{ALERT}": "open_collector", "IN+": "input", A0: "input", "IN-": "input", SDA: "bidirectional", GND: "power_in", SCL: "input", VS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:INA234AxYBJ";
  override referencePrefix = "U";
}

/**
 * High-Side or Low-Side Measurement, Bi-Directional Current and Power Monitor (0-85V) with I2C, SMBus-, and PMBus-Compatible Interface, TSSOP-10 (Texas DGS0010A / VSSOP)
 *
 * KiCad symbol: `Sensor_Energy:INA237`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*3x3mm?P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina237.pdf
 * Keywords: ADC I2C 16-Bit Oversampling Current Shunt.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 */
export class INA237 extends Component.withPins({
  "A1": "1",
  "A0": "2",
  "~{Alert}": "3",
  "SDA": "4",
  "SCL": "5",
  "VS": "6",
  "GND": "7",
  "Vbus": "8",
  "Vin-": "9",
  "Vin+": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A1: "input", A0: "input", "~{Alert}": "open_collector", SDA: "bidirectional", SCL: "input", VS: "power_in", GND: "power_in", Vbus: "input", "Vin-": "input", "Vin+": "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:INA237";
  override referencePrefix = "U";
}

/**
 * High-Side or Low-Side Measurement, Bi-Directional Current and Power Monitor (0-85V) with I2C, SMBus-, and PMBus-Compatible Interface, TSSOP-10 (Texas DGS0010A / VSSOP)
 *
 * KiCad symbol: `Sensor_Energy:INA238`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*3x3mm?P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/ina238.pdf
 * Keywords: ADC I2C 16-Bit Oversampling Current Shunt.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 */
export class INA238 extends Component.withPins({
  "A1": "1",
  "A0": "2",
  "~{Alert}": "3",
  "SDA": "4",
  "SCL": "5",
  "VS": "6",
  "GND": "7",
  "Vbus": "8",
  "Vin-": "9",
  "Vin+": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A1: "input", A0: "input", "~{Alert}": "open_collector", SDA: "bidirectional", SCL: "input", VS: "power_in", GND: "power_in", Vbus: "input", "Vin-": "input", "Vin+": "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:INA238";
  override referencePrefix = "U";
}

/**
 * Current/power/voltage monitor with Integrated 2mΩ Shunt Resistor, 2.7V - 5.5V, I2C, TSSOP-16
 *
 * KiCad symbol: `Sensor_Energy:INA260`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/ina260.pdf
 * Keywords: Current/power/voltage monitor.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class INA260 extends Component.withPins({
  "IN+_1": "1",
  "IN+_2": "2",
  "IN+_3": "3",
  "A1": "4",
  "A0": "5",
  "GND_6": "6",
  "ALERT": "7",
  "SDA": "8",
  "SCL": "9",
  "VS": "10",
  "GND_11": "11",
  "VBUS": "12",
  "NC": "13",
  "IN-_14": "14",
  "IN-_15": "15",
  "IN-_16": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "IN+_1": "passive", "IN+_2": "passive", "IN+_3": "passive", A1: "input", A0: "input", GND_6: "power_in", ALERT: "open_collector", SDA: "bidirectional", SCL: "input", VS: "power_in", GND_11: "passive", VBUS: "passive", NC: "no_connect", "IN-_14": "passive", "IN-_15": "passive", "IN-_16": "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:INA260";
  override referencePrefix = "U";
}

/**
 * High Voltage I2C Current and Voltage Monitor, MSOP-10
 *
 * KiCad symbol: `Sensor_Energy:LTC4151xMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/4151ff.pdf
 * Keywords: I2C Current Monitor.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class LTC4151xMS extends Component.withPins({
  "SENSE+": "1",
  "VIN": "2",
  "ADR1": "3",
  "ADR0": "4",
  "ADIN": "5",
  "SCL": "6",
  "SDA": "7",
  "~{SHDN}": "8",
  "GND": "9",
  "SENSE-": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SENSE+": "input", VIN: "power_in", ADR1: "input", ADR0: "input", ADIN: "input", SCL: "input", SDA: "bidirectional", "~{SHDN}": "input", GND: "power_in", "SENSE-": "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:LTC4151xMS";
  override referencePrefix = "U";
}

/**
 * Power Monitor, Calculation and Energy Accumulation, I2C, 16-bit, QFN-28
 *
 * KiCad symbol: `Sensor_Energy:MCP39F521`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*5x5mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005442A.pdf
 * Keywords: i2c power monitor.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_5x5mm_P0.5mm_EP3.35x3.35mm.
 */
export class MCP39F521 extends Component.withPins({
  "EVENT": "1",
  "NC_2": "2",
  "NC_3": "3",
  "COMMON_B": "4",
  "COMMON_A": "5",
  "OSCI": "6",
  "OSCO": "7",
  "NC_8": "8",
  "NC_9": "9",
  "~{RESET}": "10",
  "AVDD": "11",
  "A0": "12",
  "SCL": "13",
  "SDA": "14",
  "A1": "15",
  "I1+": "16",
  "I1-": "17",
  "V1-": "18",
  "V1+": "19",
  "AN_IN": "20",
  "AGND": "21",
  "ZCD": "22",
  "REFIN+/OUT": "23",
  "DGND_24": "24",
  "DVDD": "25",
  "~{MCLR}": "26",
  "DGND_27": "27",
  "~{DR}": "28",
  "DGND_29": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { EVENT: "output", NC_2: "no_connect", NC_3: "no_connect", COMMON_B: "passive", COMMON_A: "passive", OSCI: "input", OSCO: "passive", NC_8: "no_connect", NC_9: "no_connect", "~{RESET}": "input", AVDD: "power_in", A0: "input", SCL: "input", SDA: "bidirectional", A1: "input", "I1+": "input", "I1-": "input", "V1-": "input", "V1+": "input", AN_IN: "input", AGND: "power_in", ZCD: "output", "REFIN+/OUT": "bidirectional", DGND_24: "power_in", DVDD: "power_in", "~{MCLR}": "input", DGND_27: "passive", "~{DR}": "output", DGND_29: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:MCP39F521";
  override referencePrefix = "U";
}

/**
 * One Channel High-side Power Monitor, 32V, I2C, WLCSP-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1931x-xJ6CX`. Reference prefix: `U`.
 * Footprint filters: WLCSP*2.225x2.17mm*Layout4x4*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC1931-Family-Data-Sheet-DS20005850E.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_CSP:WLCSP-16_2.225x2.17mm_Layout4x4_P0.5mm.
 */
export class PAC1931x_xJ6CX extends Component.withPins({
  "GND_A1": "A1",
  "SENSE1-": "A2",
  "SENSE1+": "A3",
  "V_{DD}": "A4",
  "GND_B1": "B1",
  "V_{DD}IO": "B2",
  "~{PWRDN}": "B3",
  "GND_B4": "B4",
  "GND_C1": "C1",
  "ADDRSEL": "C2",
  "SLOW": "C3",
  "SCL": "C4",
  "GND_D1": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "SDA": "D4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_A1: "passive", "SENSE1-": "input", "SENSE1+": "input", "V_{DD}": "power_in", GND_B1: "passive", "V_{DD}IO": "input", "~{PWRDN}": "input", GND_B4: "power_in", GND_C1: "passive", ADDRSEL: "passive", SLOW: "input", SCL: "input", GND_D1: "passive", GND_D2: "passive", GND_D3: "passive", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1931x-xJ6CX";
  override referencePrefix = "U";
}

/**
 * Two Channel High-side Power Monitor, 32V, I2C, WLCSP-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1932x-xJ6CX`. Reference prefix: `U`.
 * Footprint filters: WLCSP*2.225x2.17mm*Layout4x4*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC1931-Family-Data-Sheet-DS20005850E.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_CSP:WLCSP-16_2.225x2.17mm_Layout4x4_P0.5mm.
 */
export class PAC1932x_xJ6CX extends Component.withPins({
  "SENSE2+": "A1",
  "SENSE1-": "A2",
  "SENSE1+": "A3",
  "V_{DD}": "A4",
  "SENSE2-": "B1",
  "V_{DD}IO": "B2",
  "~{PWRDN}": "B3",
  "GND_B4": "B4",
  "GND_C1": "C1",
  "ADDRSEL": "C2",
  "SLOW": "C3",
  "SCL": "C4",
  "GND_D1": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "SDA": "D4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SENSE2+": "input", "SENSE1-": "input", "SENSE1+": "input", "V_{DD}": "power_in", "SENSE2-": "input", "V_{DD}IO": "input", "~{PWRDN}": "input", GND_B4: "power_in", GND_C1: "passive", ADDRSEL: "passive", SLOW: "input", SCL: "input", GND_D1: "passive", GND_D2: "passive", GND_D3: "passive", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1932x-xJ6CX";
  override referencePrefix = "U";
}

/**
 * Two Channel High-side Power Monitor, 32V, I2C, UQFN-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1932x-xJQ`. Reference prefix: `U`.
 * Footprint filters: UQFN*1EP*4x4mm*P0.65mm*EP2.6x2.6mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC1931-Family-Data-Sheet-DS20005850E.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_DFN_QFN:UQFN-16-1EP_4x4mm_P0.65mm_EP2.6x2.6mm.
 */
export class PAC1932x_xJQ extends Component.withPins({
  "SLOW": "1",
  "V_{DD}": "2",
  "GND_3": "3",
  "SCL": "4",
  "SDA": "5",
  "ADDRSEL": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "GND_10": "10",
  "SENSE1+": "11",
  "SENSE1-": "12",
  "SENSE2+": "13",
  "SENSE2-": "14",
  "V_{DD}IO": "15",
  "~{PWRDN}": "16",
  "EP": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SLOW: "input", "V_{DD}": "power_in", GND_3: "power_in", SCL: "input", SDA: "bidirectional", ADDRSEL: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", GND_10: "passive", "SENSE1+": "input", "SENSE1-": "input", "SENSE2+": "input", "SENSE2-": "input", "V_{DD}IO": "input", "~{PWRDN}": "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1932x-xJQ";
  override referencePrefix = "U";
}

/**
 * Three Channel High-side Power Monitor, 32V, I2C, WLCSP-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1933x-xJ6CX`. Reference prefix: `U`.
 * Footprint filters: WLCSP*2.225x2.17mm*Layout4x4*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC1931-Family-Data-Sheet-DS20005850E.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_CSP:WLCSP-16_2.225x2.17mm_Layout4x4_P0.5mm.
 */
export class PAC1933x_xJ6CX extends Component.withPins({
  "SENSE2+": "A1",
  "SENSE1-": "A2",
  "SENSE1+": "A3",
  "V_{DD}": "A4",
  "SENSE2-": "B1",
  "V_{DD}IO": "B2",
  "~{PWRDN}": "B3",
  "GND_B4": "B4",
  "SENSE3-": "C1",
  "ADDRSEL": "C2",
  "SLOW": "C3",
  "SCL": "C4",
  "SENSE3+": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "SDA": "D4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SENSE2+": "input", "SENSE1-": "input", "SENSE1+": "input", "V_{DD}": "power_in", "SENSE2-": "input", "V_{DD}IO": "input", "~{PWRDN}": "input", GND_B4: "power_in", "SENSE3-": "input", ADDRSEL: "passive", SLOW: "input", SCL: "input", "SENSE3+": "input", GND_D2: "passive", GND_D3: "passive", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1933x-xJ6CX";
  override referencePrefix = "U";
}

/**
 * Three Channel High-side Power Monitor, 32V, I2C, UQFN-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1933x-xJQ`. Reference prefix: `U`.
 * Footprint filters: UQFN*1EP*4x4mm*P0.65mm*EP2.6x2.6mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC1931-Family-Data-Sheet-DS20005850E.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_DFN_QFN:UQFN-16-1EP_4x4mm_P0.65mm_EP2.6x2.6mm.
 */
export class PAC1933x_xJQ extends Component.withPins({
  "SLOW": "1",
  "V_{DD}": "2",
  "GND_3": "3",
  "SCL": "4",
  "SDA": "5",
  "ADDRSEL": "6",
  "SENSE3-": "7",
  "SENSE3+": "8",
  "GND_9": "9",
  "GND_10": "10",
  "SENSE1+": "11",
  "SENSE1-": "12",
  "SENSE2+": "13",
  "SENSE2-": "14",
  "V_{DD}IO": "15",
  "~{PWRDN}": "16",
  "EP": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SLOW: "input", "V_{DD}": "power_in", GND_3: "power_in", SCL: "input", SDA: "bidirectional", ADDRSEL: "passive", "SENSE3-": "input", "SENSE3+": "input", GND_9: "passive", GND_10: "passive", "SENSE1+": "input", "SENSE1-": "input", "SENSE2+": "input", "SENSE2-": "input", "V_{DD}IO": "input", "~{PWRDN}": "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1933x-xJQ";
  override referencePrefix = "U";
}

/**
 * Four Channel High-side Power Monitor, 32V, I2C, WLCSP-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1934x-xJ6CX`. Reference prefix: `U`.
 * Footprint filters: WLCSP*2.225x2.17mm*Layout4x4*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC1931-Family-Data-Sheet-DS20005850E.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_CSP:WLCSP-16_2.225x2.17mm_Layout4x4_P0.5mm.
 */
export class PAC1934x_xJ6CX extends Component.withPins({
  "SENSE2+": "A1",
  "SENSE1-": "A2",
  "SENSE1+": "A3",
  "V_{DD}": "A4",
  "SENSE2-": "B1",
  "V_{DD}IO": "B2",
  "~{PWRDN}": "B3",
  "GND": "B4",
  "SENSE3-": "C1",
  "ADDRSEL": "C2",
  "SLOW": "C3",
  "SCL": "C4",
  "SENSE3+": "D1",
  "SENSE4-": "D2",
  "SENSE4+": "D3",
  "SDA": "D4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SENSE2+": "input", "SENSE1-": "input", "SENSE1+": "input", "V_{DD}": "power_in", "SENSE2-": "input", "V_{DD}IO": "input", "~{PWRDN}": "input", GND: "power_in", "SENSE3-": "input", ADDRSEL: "passive", SLOW: "input", SCL: "input", "SENSE3+": "input", "SENSE4-": "input", "SENSE4+": "input", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1934x-xJ6CX";
  override referencePrefix = "U";
}

/**
 * Four Channel High-side Power Monitor, 32V, I2C, UQFN-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1934x-xJQ`. Reference prefix: `U`.
 * Footprint filters: UQFN*1EP*4x4mm*P0.65mm*EP2.6x2.6mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC1931-Family-Data-Sheet-DS20005850E.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_DFN_QFN:UQFN-16-1EP_4x4mm_P0.65mm_EP2.6x2.6mm.
 */
export class PAC1934x_xJQ extends Component.withPins({
  "SLOW": "1",
  "V_{DD}": "2",
  "GND": "3",
  "SCL": "4",
  "SDA": "5",
  "ADDRSEL": "6",
  "SENSE3-": "7",
  "SENSE3+": "8",
  "SENSE4-": "9",
  "SENSE4+": "10",
  "SENSE1+": "11",
  "SENSE1-": "12",
  "SENSE2+": "13",
  "SENSE2-": "14",
  "V_{DD}IO": "15",
  "~{PWRDN}": "16",
  "EP": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SLOW: "input", "V_{DD}": "power_in", GND: "power_in", SCL: "input", SDA: "bidirectional", ADDRSEL: "passive", "SENSE3-": "input", "SENSE3+": "input", "SENSE4-": "input", "SENSE4+": "input", "SENSE1+": "input", "SENSE1-": "input", "SENSE2+": "input", "SENSE2-": "input", "V_{DD}IO": "input", "~{PWRDN}": "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1934x-xJQ";
  override referencePrefix = "U";
}

/**
 * One Channel High-side Power Monitor, 32V, I2C, VQFN-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1951x-1x-4MX`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*EP1.1x1.1mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC195X-Data-Sheet-20006539.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.1x1.1mm.
 */
export class PAC1951x_1x_4MX extends Component.withPins({
  "SLOW": "1",
  "V_{DD}": "2",
  "GND_3": "3",
  "SCL": "4",
  "SDA": "5",
  "ADDRSEL": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "GND_10": "10",
  "SENSE1+": "11",
  "SENSE1-": "12",
  "GND_13": "13",
  "GND_14": "14",
  "GPIO": "15",
  "~{PWRDN}": "16",
  "EP": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SLOW: "input", "V_{DD}": "power_in", GND_3: "power_in", SCL: "input", SDA: "bidirectional", ADDRSEL: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", GND_10: "passive", "SENSE1+": "input", "SENSE1-": "input", GND_13: "passive", GND_14: "passive", GPIO: "bidirectional", "~{PWRDN}": "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1951x-1x-4MX";
  override referencePrefix = "U";
}

/**
 * One Channel High-side Power Monitor, 9V, I2C, VQFN-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1941x-1x-4MX`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*EP1.1x1.1mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC194X-Data-Sheet-20006543.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.1x1.1mm.
 */
export class PAC1941x_1x_4MX extends Component.withPins({
  "SLOW": "1",
  "V_{DD}": "2",
  "GND_3": "3",
  "SCL": "4",
  "SDA": "5",
  "ADDRSEL": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "GND_10": "10",
  "SENSE1+": "11",
  "SENSE1-": "12",
  "GND_13": "13",
  "GND_14": "14",
  "GPIO": "15",
  "~{PWRDN}": "16",
  "EP": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SLOW: "input", "V_{DD}": "power_in", GND_3: "power_in", SCL: "input", SDA: "bidirectional", ADDRSEL: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", GND_10: "passive", "SENSE1+": "input", "SENSE1-": "input", GND_13: "passive", GND_14: "passive", GPIO: "bidirectional", "~{PWRDN}": "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1941x-1x-4MX";
  override referencePrefix = "U";
}

/**
 * One Channel High-side Power Monitor, 32V, I2C, WLCSP-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1951x-1x-J6CX`. Reference prefix: `U`.
 * Footprint filters: WLCSP*2.225x2.17mm*Layout4x4*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC195X-Data-Sheet-20006539.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_CSP:WLCSP-16_2.225x2.17mm_Layout4x4_P0.5mm.
 */
export class PAC1951x_1x_J6CX extends Component.withPins({
  "GND_A1": "A1",
  "SENSE1-": "A2",
  "SENSE1+": "A3",
  "V_{DD}": "A4",
  "GND_B1": "B1",
  "GPIO": "B2",
  "~{PWRDN}": "B3",
  "GND_B4": "B4",
  "GND_C1": "C1",
  "ADDRSEL": "C2",
  "SLOW": "C3",
  "SCL": "C4",
  "GND_D1": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "SDA": "D4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_A1: "passive", "SENSE1-": "input", "SENSE1+": "input", "V_{DD}": "power_in", GND_B1: "passive", GPIO: "bidirectional", "~{PWRDN}": "input", GND_B4: "power_in", GND_C1: "passive", ADDRSEL: "passive", SLOW: "input", SCL: "input", GND_D1: "passive", GND_D2: "passive", GND_D3: "passive", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1951x-1x-J6CX";
  override referencePrefix = "U";
}

/**
 * One Channel High-side Power Monitor, 9V, I2C, WLCSP-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1941x-1x-J6CX`. Reference prefix: `U`.
 * Footprint filters: WLCSP*2.225x2.17mm*Layout4x4*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC194X-Data-Sheet-20006543.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_CSP:WLCSP-16_2.225x2.17mm_Layout4x4_P0.5mm.
 */
export class PAC1941x_1x_J6CX extends Component.withPins({
  "GND_A1": "A1",
  "SENSE1-": "A2",
  "SENSE1+": "A3",
  "V_{DD}": "A4",
  "GND_B1": "B1",
  "GPIO": "B2",
  "~{PWRDN}": "B3",
  "GND_B4": "B4",
  "GND_C1": "C1",
  "ADDRSEL": "C2",
  "SLOW": "C3",
  "SCL": "C4",
  "GND_D1": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "SDA": "D4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_A1: "passive", "SENSE1-": "input", "SENSE1+": "input", "V_{DD}": "power_in", GND_B1: "passive", GPIO: "bidirectional", "~{PWRDN}": "input", GND_B4: "power_in", GND_C1: "passive", ADDRSEL: "passive", SLOW: "input", SCL: "input", GND_D1: "passive", GND_D2: "passive", GND_D3: "passive", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1941x-1x-J6CX";
  override referencePrefix = "U";
}

/**
 * One Channel Low-side Power Monitor, 32V, I2C, VQFN-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1951x-2x-4MX`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*EP1.1x1.1mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC195X-Data-Sheet-20006539.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.1x1.1mm.
 */
export class PAC1951x_2x_4MX extends Component.withPins({
  "SLOW": "1",
  "V_{DD}": "2",
  "GND_3": "3",
  "SCL": "4",
  "SDA": "5",
  "ADDRSEL": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "GND_10": "10",
  "SENSE1+": "11",
  "SENSE1-": "12",
  "V_{BUS1+}": "13",
  "V_{BUS1-}": "14",
  "GPIO": "15",
  "~{PWRDN}": "16",
  "EP": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SLOW: "input", "V_{DD}": "power_in", GND_3: "power_in", SCL: "input", SDA: "bidirectional", ADDRSEL: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", GND_10: "passive", "SENSE1+": "input", "SENSE1-": "input", "V_{BUS1+}": "input", "V_{BUS1-}": "input", GPIO: "bidirectional", "~{PWRDN}": "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1951x-2x-4MX";
  override referencePrefix = "U";
}

/**
 * One Channel Low-side Power Monitor, 9V, I2C, VQFN-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1941x-2x-4MX`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*EP1.1x1.1mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC194X-Data-Sheet-20006543.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.1x1.1mm.
 */
export class PAC1941x_2x_4MX extends Component.withPins({
  "SLOW": "1",
  "V_{DD}": "2",
  "GND_3": "3",
  "SCL": "4",
  "SDA": "5",
  "ADDRSEL": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "GND_10": "10",
  "SENSE1+": "11",
  "SENSE1-": "12",
  "V_{BUS1+}": "13",
  "V_{BUS1-}": "14",
  "GPIO": "15",
  "~{PWRDN}": "16",
  "EP": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SLOW: "input", "V_{DD}": "power_in", GND_3: "power_in", SCL: "input", SDA: "bidirectional", ADDRSEL: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", GND_10: "passive", "SENSE1+": "input", "SENSE1-": "input", "V_{BUS1+}": "input", "V_{BUS1-}": "input", GPIO: "bidirectional", "~{PWRDN}": "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1941x-2x-4MX";
  override referencePrefix = "U";
}

/**
 * One Channel Low-side Power Monitor, 32V, I2C, WLCSP-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1951x-2x-J6CX`. Reference prefix: `U`.
 * Footprint filters: WLCSP*2.225x2.17mm*Layout4x4*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC195X-Data-Sheet-20006539.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_CSP:WLCSP-16_2.225x2.17mm_Layout4x4_P0.5mm.
 */
export class PAC1951x_2x_J6CX extends Component.withPins({
  "V_{BUS1+}": "A1",
  "SENSE1-": "A2",
  "SENSE1+": "A3",
  "V_{DD}": "A4",
  "V_{BUS1-}": "B1",
  "GPIO": "B2",
  "~{PWRDN}": "B3",
  "GND_B4": "B4",
  "GND_C1": "C1",
  "ADDRSEL": "C2",
  "SLOW": "C3",
  "SCL": "C4",
  "GND_D1": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "SDA": "D4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{BUS1+}": "input", "SENSE1-": "input", "SENSE1+": "input", "V_{DD}": "power_in", "V_{BUS1-}": "input", GPIO: "bidirectional", "~{PWRDN}": "input", GND_B4: "power_in", GND_C1: "passive", ADDRSEL: "passive", SLOW: "input", SCL: "input", GND_D1: "passive", GND_D2: "passive", GND_D3: "passive", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1951x-2x-J6CX";
  override referencePrefix = "U";
}

/**
 * One Channel Low-side Power Monitor, 9V, I2C, WLCSP-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1941x-2x-J6CX`. Reference prefix: `U`.
 * Footprint filters: WLCSP*2.225x2.17mm*Layout4x4*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC194X-Data-Sheet-20006543.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_CSP:WLCSP-16_2.225x2.17mm_Layout4x4_P0.5mm.
 */
export class PAC1941x_2x_J6CX extends Component.withPins({
  "V_{BUS1+}": "A1",
  "SENSE1-": "A2",
  "SENSE1+": "A3",
  "V_{DD}": "A4",
  "V_{BUS1-}": "B1",
  "GPIO": "B2",
  "~{PWRDN}": "B3",
  "GND_B4": "B4",
  "GND_C1": "C1",
  "ADDRSEL": "C2",
  "SLOW": "C3",
  "SCL": "C4",
  "GND_D1": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "SDA": "D4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{BUS1+}": "input", "SENSE1-": "input", "SENSE1+": "input", "V_{DD}": "power_in", "V_{BUS1-}": "input", GPIO: "bidirectional", "~{PWRDN}": "input", GND_B4: "power_in", GND_C1: "passive", ADDRSEL: "passive", SLOW: "input", SCL: "input", GND_D1: "passive", GND_D2: "passive", GND_D3: "passive", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1941x-2x-J6CX";
  override referencePrefix = "U";
}

/**
 * Two Channel High-side Power Monitor, 32V, I2C, VQFN-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1952x-1x-4MX`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*EP1.1x1.1mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC195X-Data-Sheet-20006539.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.1x1.1mm.
 */
export class PAC1952x_1x_4MX extends Component.withPins({
  "SLOW": "1",
  "V_{DD}": "2",
  "GND_3": "3",
  "SCL": "4",
  "SDA": "5",
  "ADDRSEL": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "GND_10": "10",
  "SENSE1+": "11",
  "SENSE1-": "12",
  "SENSE2+": "13",
  "SENSE2-": "14",
  "GPIO": "15",
  "~{PWRDN}": "16",
  "EP": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SLOW: "input", "V_{DD}": "power_in", GND_3: "power_in", SCL: "input", SDA: "bidirectional", ADDRSEL: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", GND_10: "passive", "SENSE1+": "input", "SENSE1-": "input", "SENSE2+": "input", "SENSE2-": "input", GPIO: "bidirectional", "~{PWRDN}": "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1952x-1x-4MX";
  override referencePrefix = "U";
}

/**
 * Two Channel High-side Power Monitor, 9V, I2C, VQFN-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1942x-1x-4MX`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*EP1.1x1.1mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC194X-Data-Sheet-20006543.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.1x1.1mm.
 */
export class PAC1942x_1x_4MX extends Component.withPins({
  "SLOW": "1",
  "V_{DD}": "2",
  "GND_3": "3",
  "SCL": "4",
  "SDA": "5",
  "ADDRSEL": "6",
  "GND_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "GND_10": "10",
  "SENSE1+": "11",
  "SENSE1-": "12",
  "SENSE2+": "13",
  "SENSE2-": "14",
  "GPIO": "15",
  "~{PWRDN}": "16",
  "EP": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SLOW: "input", "V_{DD}": "power_in", GND_3: "power_in", SCL: "input", SDA: "bidirectional", ADDRSEL: "passive", GND_7: "passive", GND_8: "passive", GND_9: "passive", GND_10: "passive", "SENSE1+": "input", "SENSE1-": "input", "SENSE2+": "input", "SENSE2-": "input", GPIO: "bidirectional", "~{PWRDN}": "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1942x-1x-4MX";
  override referencePrefix = "U";
}

/**
 * Two Channel High-side Power Monitor, 32V, I2C, WLCSP-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1952x-1x-J6CX`. Reference prefix: `U`.
 * Footprint filters: WLCSP*2.225x2.17mm*Layout4x4*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC195X-Data-Sheet-20006539.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_CSP:WLCSP-16_2.225x2.17mm_Layout4x4_P0.5mm.
 */
export class PAC1952x_1x_J6CX extends Component.withPins({
  "SENSE2+": "A1",
  "SENSE1-": "A2",
  "SENSE1+": "A3",
  "V_{DD}": "A4",
  "SENSE2-": "B1",
  "GPIO": "B2",
  "~{PWRDN}": "B3",
  "GND_B4": "B4",
  "GND_C1": "C1",
  "ADDRSEL": "C2",
  "SLOW": "C3",
  "SCL": "C4",
  "GND_D1": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "SDA": "D4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SENSE2+": "input", "SENSE1-": "input", "SENSE1+": "input", "V_{DD}": "power_in", "SENSE2-": "input", GPIO: "bidirectional", "~{PWRDN}": "input", GND_B4: "power_in", GND_C1: "passive", ADDRSEL: "passive", SLOW: "input", SCL: "input", GND_D1: "passive", GND_D2: "passive", GND_D3: "passive", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1952x-1x-J6CX";
  override referencePrefix = "U";
}

/**
 * Two Channel High-side Power Monitor, 9V, I2C, WLCSP-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1942x-1x-J6CX`. Reference prefix: `U`.
 * Footprint filters: WLCSP*2.225x2.17mm*Layout4x4*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC194X-Data-Sheet-20006543.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_CSP:WLCSP-16_2.225x2.17mm_Layout4x4_P0.5mm.
 */
export class PAC1942x_1x_J6CX extends Component.withPins({
  "SENSE2+": "A1",
  "SENSE1-": "A2",
  "SENSE1+": "A3",
  "V_{DD}": "A4",
  "SENSE2-": "B1",
  "GPIO": "B2",
  "~{PWRDN}": "B3",
  "GND_B4": "B4",
  "GND_C1": "C1",
  "ADDRSEL": "C2",
  "SLOW": "C3",
  "SCL": "C4",
  "GND_D1": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "SDA": "D4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SENSE2+": "input", "SENSE1-": "input", "SENSE1+": "input", "V_{DD}": "power_in", "SENSE2-": "input", GPIO: "bidirectional", "~{PWRDN}": "input", GND_B4: "power_in", GND_C1: "passive", ADDRSEL: "passive", SLOW: "input", SCL: "input", GND_D1: "passive", GND_D2: "passive", GND_D3: "passive", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1942x-1x-J6CX";
  override referencePrefix = "U";
}

/**
 * Two Channel Low-side Power Monitor, 32V, I2C, VQFN-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1952x-2x-4MX`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*EP1.1x1.1mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC195X-Data-Sheet-20006539.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.1x1.1mm.
 */
export class PAC1952x_2x_4MX extends Component.withPins({
  "SLOW": "1",
  "V_{DD}": "2",
  "GND": "3",
  "SCL": "4",
  "SDA": "5",
  "ADDRSEL": "6",
  "V_{BUS2-}": "7",
  "V_{BUS2+}": "8",
  "SENSE2-": "9",
  "SENSE2+": "10",
  "SENSE1+": "11",
  "SENSE1-": "12",
  "V_{BUS1+}": "13",
  "V_{BUS1-}": "14",
  "GPIO": "15",
  "~{PWRDN}": "16",
  "EP": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SLOW: "input", "V_{DD}": "power_in", GND: "power_in", SCL: "input", SDA: "bidirectional", ADDRSEL: "passive", "V_{BUS2-}": "input", "V_{BUS2+}": "input", "SENSE2-": "input", "SENSE2+": "input", "SENSE1+": "input", "SENSE1-": "input", "V_{BUS1+}": "input", "V_{BUS1-}": "input", GPIO: "bidirectional", "~{PWRDN}": "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1952x-2x-4MX";
  override referencePrefix = "U";
}

/**
 * Two Channel Low-side Power Monitor, 9V, I2C, VQFN-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1942x-2x-4MX`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*EP1.1x1.1mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC194X-Data-Sheet-20006543.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.1x1.1mm.
 */
export class PAC1942x_2x_4MX extends Component.withPins({
  "SLOW": "1",
  "V_{DD}": "2",
  "GND": "3",
  "SCL": "4",
  "SDA": "5",
  "ADDRSEL": "6",
  "V_{BUS2-}": "7",
  "V_{BUS2+}": "8",
  "SENSE2-": "9",
  "SENSE2+": "10",
  "SENSE1+": "11",
  "SENSE1-": "12",
  "V_{BUS1+}": "13",
  "V_{BUS1-}": "14",
  "GPIO": "15",
  "~{PWRDN}": "16",
  "EP": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SLOW: "input", "V_{DD}": "power_in", GND: "power_in", SCL: "input", SDA: "bidirectional", ADDRSEL: "passive", "V_{BUS2-}": "input", "V_{BUS2+}": "input", "SENSE2-": "input", "SENSE2+": "input", "SENSE1+": "input", "SENSE1-": "input", "V_{BUS1+}": "input", "V_{BUS1-}": "input", GPIO: "bidirectional", "~{PWRDN}": "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1942x-2x-4MX";
  override referencePrefix = "U";
}

/**
 * Two Channel Low-side Power Monitor, 32V, I2C, WLCSP-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1952x-2x-J6CX`. Reference prefix: `U`.
 * Footprint filters: WLCSP*2.225x2.17mm*Layout4x4*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC195X-Data-Sheet-20006539.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_CSP:WLCSP-16_2.225x2.17mm_Layout4x4_P0.5mm.
 */
export class PAC1952x_2x_J6CX extends Component.withPins({
  "V_{BUS1+}": "A1",
  "SENSE1-": "A2",
  "SENSE1+": "A3",
  "V_{DD}": "A4",
  "V_{BUS1-}": "B1",
  "GPIO": "B2",
  "~{PWRDN}": "B3",
  "GND": "B4",
  "V_{BUS2-}": "C1",
  "ADDRSEL": "C2",
  "SLOW": "C3",
  "SCL": "C4",
  "V_{BUS2+}": "D1",
  "SENSE2-": "D2",
  "SENSE2+": "D3",
  "SDA": "D4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{BUS1+}": "input", "SENSE1-": "input", "SENSE1+": "input", "V_{DD}": "power_in", "V_{BUS1-}": "input", GPIO: "bidirectional", "~{PWRDN}": "input", GND: "power_in", "V_{BUS2-}": "input", ADDRSEL: "passive", SLOW: "input", SCL: "input", "V_{BUS2+}": "input", "SENSE2-": "input", "SENSE2+": "input", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1952x-2x-J6CX";
  override referencePrefix = "U";
}

/**
 * Two Channel Low-side Power Monitor, 9V, I2C, WLCSP-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1942x-2x-J6CX`. Reference prefix: `U`.
 * Footprint filters: WLCSP*2.225x2.17mm*Layout4x4*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC194X-Data-Sheet-20006543.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_CSP:WLCSP-16_2.225x2.17mm_Layout4x4_P0.5mm.
 */
export class PAC1942x_2x_J6CX extends Component.withPins({
  "V_{BUS1+}": "A1",
  "SENSE1-": "A2",
  "SENSE1+": "A3",
  "V_{DD}": "A4",
  "V_{BUS1-}": "B1",
  "GPIO": "B2",
  "~{PWRDN}": "B3",
  "GND": "B4",
  "V_{BUS2-}": "C1",
  "ADDRSEL": "C2",
  "SLOW": "C3",
  "SCL": "C4",
  "V_{BUS2+}": "D1",
  "SENSE2-": "D2",
  "SENSE2+": "D3",
  "SDA": "D4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{BUS1+}": "input", "SENSE1-": "input", "SENSE1+": "input", "V_{DD}": "power_in", "V_{BUS1-}": "input", GPIO: "bidirectional", "~{PWRDN}": "input", GND: "power_in", "V_{BUS2-}": "input", ADDRSEL: "passive", SLOW: "input", SCL: "input", "V_{BUS2+}": "input", "SENSE2-": "input", "SENSE2+": "input", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1942x-2x-J6CX";
  override referencePrefix = "U";
}

/**
 * Three Channel High-Side Power Monitor, 32V, I2C, VQFN-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1953x-x4MX`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*EP1.1x1.1mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC195X-Data-Sheet-20006539.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.1x1.1mm.
 */
export class PAC1953x_x4MX extends Component.withPins({
  "SLOW": "1",
  "V_{DD}": "2",
  "GND_3": "3",
  "SCL": "4",
  "SDA": "5",
  "ADDRSEL": "6",
  "SENSE3-": "7",
  "SENSE3+": "8",
  "GND_9": "9",
  "GND_10": "10",
  "SENSE1+": "11",
  "SENSE1-": "12",
  "SENSE2+": "13",
  "SENSE2-": "14",
  "GPIO": "15",
  "~{PWRDN}": "16",
  "EP": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SLOW: "input", "V_{DD}": "power_in", GND_3: "power_in", SCL: "input", SDA: "bidirectional", ADDRSEL: "passive", "SENSE3-": "input", "SENSE3+": "input", GND_9: "passive", GND_10: "passive", "SENSE1+": "input", "SENSE1-": "input", "SENSE2+": "input", "SENSE2-": "input", GPIO: "bidirectional", "~{PWRDN}": "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1953x-x4MX";
  override referencePrefix = "U";
}

/**
 * Three Channel High-Side Power Monitor, 9V, I2C, VQFN-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1943x-x4MX`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*EP1.1x1.1mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC194X-Data-Sheet-20006543.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.1x1.1mm.
 */
export class PAC1943x_x4MX extends Component.withPins({
  "SLOW": "1",
  "V_{DD}": "2",
  "GND_3": "3",
  "SCL": "4",
  "SDA": "5",
  "ADDRSEL": "6",
  "SENSE3-": "7",
  "SENSE3+": "8",
  "GND_9": "9",
  "GND_10": "10",
  "SENSE1+": "11",
  "SENSE1-": "12",
  "SENSE2+": "13",
  "SENSE2-": "14",
  "GPIO": "15",
  "~{PWRDN}": "16",
  "EP": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SLOW: "input", "V_{DD}": "power_in", GND_3: "power_in", SCL: "input", SDA: "bidirectional", ADDRSEL: "passive", "SENSE3-": "input", "SENSE3+": "input", GND_9: "passive", GND_10: "passive", "SENSE1+": "input", "SENSE1-": "input", "SENSE2+": "input", "SENSE2-": "input", GPIO: "bidirectional", "~{PWRDN}": "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1943x-x4MX";
  override referencePrefix = "U";
}

/**
 * Three Channel High-Side Power Monitor, 32V, I2C, WLCSP-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1953x-xJ6CX`. Reference prefix: `U`.
 * Footprint filters: WLCSP*2.225x2.17mm*Layout4x4*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC195X-Data-Sheet-20006539.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_CSP:WLCSP-16_2.225x2.17mm_Layout4x4_P0.5mm.
 */
export class PAC1953x_xJ6CX extends Component.withPins({
  "SENSE2+": "A1",
  "SENSE1-": "A2",
  "SENSE1+": "A3",
  "V_{DD}": "A4",
  "SENSE2-": "B1",
  "GPIO": "B2",
  "~{PWRDN}": "B3",
  "GND_B4": "B4",
  "SENSE3-": "C1",
  "ADDRSEL": "C2",
  "SLOW": "C3",
  "SCL": "C4",
  "SENSE3+": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "SDA": "D4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SENSE2+": "input", "SENSE1-": "input", "SENSE1+": "input", "V_{DD}": "power_in", "SENSE2-": "input", GPIO: "bidirectional", "~{PWRDN}": "input", GND_B4: "power_in", "SENSE3-": "input", ADDRSEL: "passive", SLOW: "input", SCL: "input", "SENSE3+": "input", GND_D2: "passive", GND_D3: "passive", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1953x-xJ6CX";
  override referencePrefix = "U";
}

/**
 * Three Channel High-Side Power Monitor, 9V, I2C, WLCSP-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1943x-xJ6CX`. Reference prefix: `U`.
 * Footprint filters: WLCSP*2.225x2.17mm*Layout4x4*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC194X-Data-Sheet-20006543.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_CSP:WLCSP-16_2.225x2.17mm_Layout4x4_P0.5mm.
 */
export class PAC1943x_xJ6CX extends Component.withPins({
  "SENSE2+": "A1",
  "SENSE1-": "A2",
  "SENSE1+": "A3",
  "V_{DD}": "A4",
  "SENSE2-": "B1",
  "GPIO": "B2",
  "~{PWRDN}": "B3",
  "GND_B4": "B4",
  "SENSE3-": "C1",
  "ADDRSEL": "C2",
  "SLOW": "C3",
  "SCL": "C4",
  "SENSE3+": "D1",
  "GND_D2": "D2",
  "GND_D3": "D3",
  "SDA": "D4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SENSE2+": "input", "SENSE1-": "input", "SENSE1+": "input", "V_{DD}": "power_in", "SENSE2-": "input", GPIO: "bidirectional", "~{PWRDN}": "input", GND_B4: "power_in", "SENSE3-": "input", ADDRSEL: "passive", SLOW: "input", SCL: "input", "SENSE3+": "input", GND_D2: "passive", GND_D3: "passive", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1943x-xJ6CX";
  override referencePrefix = "U";
}

/**
 * Four Channel High-side Power Monitor, 32V, I2C, VQFN-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1954x-x4MX`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*EP1.1x1.1mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC195X-Data-Sheet-20006539.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.1x1.1mm.
 */
export class PAC1954x_x4MX extends Component.withPins({
  "SLOW": "1",
  "V_{DD}": "2",
  "GND": "3",
  "SCL": "4",
  "SDA": "5",
  "ADDRSEL": "6",
  "SENSE3-": "7",
  "SENSE3+": "8",
  "SENSE4-": "9",
  "SENSE4+": "10",
  "SENSE1+": "11",
  "SENSE1-": "12",
  "SENSE2+": "13",
  "SENSE2-": "14",
  "GPIO": "15",
  "~{PWRDN}": "16",
  "EP": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SLOW: "input", "V_{DD}": "power_in", GND: "power_in", SCL: "input", SDA: "bidirectional", ADDRSEL: "passive", "SENSE3-": "input", "SENSE3+": "input", "SENSE4-": "input", "SENSE4+": "input", "SENSE1+": "input", "SENSE1-": "input", "SENSE2+": "input", "SENSE2-": "input", GPIO: "bidirectional", "~{PWRDN}": "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1954x-x4MX";
  override referencePrefix = "U";
}

/**
 * Four Channel High-side Power Monitor, 9V, I2C, VQFN-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1944x-x4MX`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*3x3mm*P0.5mm*EP1.1x1.1mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC194X-Data-Sheet-20006543.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.1x1.1mm.
 */
export class PAC1944x_x4MX extends Component.withPins({
  "SLOW": "1",
  "V_{DD}": "2",
  "GND": "3",
  "SCL": "4",
  "SDA": "5",
  "ADDRSEL": "6",
  "SENSE3-": "7",
  "SENSE3+": "8",
  "SENSE4-": "9",
  "SENSE4+": "10",
  "SENSE1+": "11",
  "SENSE1-": "12",
  "SENSE2+": "13",
  "SENSE2-": "14",
  "GPIO": "15",
  "~{PWRDN}": "16",
  "EP": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SLOW: "input", "V_{DD}": "power_in", GND: "power_in", SCL: "input", SDA: "bidirectional", ADDRSEL: "passive", "SENSE3-": "input", "SENSE3+": "input", "SENSE4-": "input", "SENSE4+": "input", "SENSE1+": "input", "SENSE1-": "input", "SENSE2+": "input", "SENSE2-": "input", GPIO: "bidirectional", "~{PWRDN}": "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1944x-x4MX";
  override referencePrefix = "U";
}

/**
 * Four Channel High-side Power Monitor, 32V, I2C, WLCSP-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1954x-xJ6CX`. Reference prefix: `U`.
 * Footprint filters: WLCSP*2.225x2.17mm*Layout4x4*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC195X-Data-Sheet-20006539.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_CSP:WLCSP-16_2.225x2.17mm_Layout4x4_P0.5mm.
 */
export class PAC1954x_xJ6CX extends Component.withPins({
  "SENSE2+": "A1",
  "SENSE1-": "A2",
  "SENSE1+": "A3",
  "V_{DD}": "A4",
  "SENSE2-": "B1",
  "GPIO": "B2",
  "~{PWRDN}": "B3",
  "GND": "B4",
  "SENSE3-": "C1",
  "ADDRSEL": "C2",
  "SLOW": "C3",
  "SCL": "C4",
  "SENSE3+": "D1",
  "SENSE4-": "D2",
  "SENSE4+": "D3",
  "SDA": "D4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SENSE2+": "input", "SENSE1-": "input", "SENSE1+": "input", "V_{DD}": "power_in", "SENSE2-": "input", GPIO: "bidirectional", "~{PWRDN}": "input", GND: "power_in", "SENSE3-": "input", ADDRSEL: "passive", SLOW: "input", SCL: "input", "SENSE3+": "input", "SENSE4-": "input", "SENSE4+": "input", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1954x-xJ6CX";
  override referencePrefix = "U";
}

/**
 * Four Channel High-side Power Monitor, 9V, I2C, WLCSP-16
 *
 * KiCad symbol: `Sensor_Energy:PAC1944x-xJ6CX`. Reference prefix: `U`.
 * Footprint filters: WLCSP*2.225x2.17mm*Layout4x4*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/PAC194X-Data-Sheet-20006543.pdf
 * Keywords: Power Monitor I2C.
 * Default footprint: Package_CSP:WLCSP-16_2.225x2.17mm_Layout4x4_P0.5mm.
 */
export class PAC1944x_xJ6CX extends Component.withPins({
  "SENSE2+": "A1",
  "SENSE1-": "A2",
  "SENSE1+": "A3",
  "V_{DD}": "A4",
  "SENSE2-": "B1",
  "GPIO": "B2",
  "~{PWRDN}": "B3",
  "GND": "B4",
  "SENSE3-": "C1",
  "ADDRSEL": "C2",
  "SLOW": "C3",
  "SCL": "C4",
  "SENSE3+": "D1",
  "SENSE4-": "D2",
  "SENSE4+": "D3",
  "SDA": "D4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "SENSE2+": "input", "SENSE1-": "input", "SENSE1+": "input", "V_{DD}": "power_in", "SENSE2-": "input", GPIO: "bidirectional", "~{PWRDN}": "input", GND: "power_in", "SENSE3-": "input", ADDRSEL: "passive", SLOW: "input", SCL: "input", "SENSE3+": "input", "SENSE4-": "input", "SENSE4+": "input", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Energy:PAC1944x-xJ6CX";
  override referencePrefix = "U";
}
