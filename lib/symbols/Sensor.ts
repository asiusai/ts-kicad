// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Poly Phase Multifunction Energy Metering, SO-24
 *
 * KiCad symbol: `Sensor:ADE7758`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x15.4mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADE7758.pdf
 * Keywords: Energy Metering.
 * Default footprint: Package_SO:SOIC-24W_7.5x15.4mm_P1.27mm.
 */
export class ADE7758 extends Component.withPins({
  "APCF": "1",
  "DGND": "2",
  "DVDD": "3",
  "AVDD": "4",
  "IAP": "5",
  "IAN": "6",
  "IBP": "7",
  "IBN": "8",
  "ICP": "9",
  "ICN": "10",
  "AGND": "11",
  "REFIN/OUT": "12",
  "VN": "13",
  "VCP": "14",
  "VBP": "15",
  "VAP": "16",
  "VARCF": "17",
  "~{IRQ}": "18",
  "CLKIN": "19",
  "CLKOUT": "20",
  "~{CS}": "21",
  "DIN": "22",
  "SCLK": "23",
  "DOUT": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { APCF: "output", DGND: "power_in", DVDD: "power_in", AVDD: "power_in", IAP: "input", IAN: "input", IBP: "input", IBN: "input", ICP: "input", ICN: "input", AGND: "power_in", "REFIN/OUT": "input", VN: "power_in", VCP: "input", VBP: "input", VAP: "input", VARCF: "output", "~{IRQ}": "open_collector", CLKIN: "input", CLKOUT: "output", "~{CS}": "input", DIN: "input", SCLK: "input", DOUT: "output", ...opts.pinTypes } });
  }
  override schema = "Sensor:ADE7758";
  override referencePrefix = "U";
}

/**
 * Single-Phase Active and Apparent Energy Metering, SSOP-20
 *
 * KiCad symbol: `Sensor:ADE7763xRS`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x7.2mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADE7763.pdf
 * Keywords: Energy Metering.
 * Default footprint: Package_SO:SSOP-20_5.3x7.2mm_P0.65mm.
 */
export class ADE7763xRS extends Component.withPins({
  "~{RESET}": "1",
  "DVDD": "2",
  "AVDD": "3",
  "V1P": "4",
  "V1N": "5",
  "V2N": "6",
  "V2P": "7",
  "AGND": "8",
  "REFIN/OUT": "9",
  "DGND": "10",
  "CF": "11",
  "ZX": "12",
  "~{SAG}": "13",
  "~{IRQ}": "14",
  "CLKIN": "15",
  "CLKOUT": "16",
  "~{CS}": "17",
  "SCLK": "18",
  "DOUT": "19",
  "DIN": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RESET}": "input", DVDD: "power_in", AVDD: "power_in", V1P: "input", V1N: "input", V2N: "input", V2P: "input", AGND: "power_in", "REFIN/OUT": "input", DGND: "power_in", CF: "output", ZX: "output", "~{SAG}": "open_collector", "~{IRQ}": "open_collector", CLKIN: "input", CLKOUT: "output", "~{CS}": "input", SCLK: "input", DOUT: "output", DIN: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor:ADE7763xRS";
  override referencePrefix = "U";
}

/**
 * Single Phase Multifunction Energy Metering with Neutral Current Measurement, LFCSP-28
 *
 * KiCad symbol: `Sensor:ADE7953xCP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*5x5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADE7953.pdf
 * Keywords: Energy Metering.
 * Default footprint: Package_CSP:LFCSP-28-1EP_5x5mm_P0.5mm_EP3.14x3.14mm.
 */
export class ADE7953xCP extends Component.withPins({
  "ZX": "1",
  "~{RESET}": "2",
  "VINTD": "3",
  "DGND": "4",
  "IAP": "5",
  "IAN": "6",
  "PULL_HIGH_7": "7",
  "PULL_HIGH_8": "8",
  "IBP": "9",
  "IBN": "10",
  "VN": "11",
  "VP": "12",
  "REF": "13",
  "PULL_LOW": "14",
  "VINTA": "15",
  "AGND": "16",
  "VDD": "17",
  "CLKIN": "18",
  "CLKOUT": "19",
  "~{REVP}": "20",
  "ZX_I": "21",
  "~{IRQ}": "22",
  "CF1": "23",
  "CF2": "24",
  "SCLK": "25",
  "MISO/SDA/TX": "26",
  "MOSI/SCL/RX": "27",
  "~{CS}": "28",
  "EP": "29",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ZX: "output", "~{RESET}": "input", VINTD: "power_out", DGND: "power_in", IAP: "input", IAN: "input", PULL_HIGH_7: "input", PULL_HIGH_8: "input", IBP: "input", IBN: "input", VN: "input", VP: "input", REF: "input", PULL_LOW: "input", VINTA: "power_out", AGND: "power_in", VDD: "power_in", CLKIN: "input", CLKOUT: "output", "~{REVP}": "output", ZX_I: "output", "~{IRQ}": "open_collector", CF1: "output", CF2: "output", SCLK: "input", "MISO/SDA/TX": "bidirectional", "MOSI/SCL/RX": "input", "~{CS}": "input", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor:ADE7953xCP";
  override referencePrefix = "U";
}

/**
 * 3.3 to 5.0V, Temperature and humidity module,  DHT22, AM2302
 *
 * KiCad symbol: `Sensor:AM2302`. Reference prefix: `U`.
 * Footprint filters: ASAIR*AM2302*P2.54mm*.
 * @see http://akizukidenshi.com/download/ds/aosong/AM2302.pdf
 * Keywords: digital sensor.
 * Default footprint: Sensor:ASAIR_AM2302_P2.54mm_Vertical.
 */
export class AM2302 extends Component.withPins({
  "VDD": "1",
  "SDA": "2",
  "GND_3": "3",
  "GND_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", SDA: "bidirectional", GND_3: "power_in", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor:AM2302";
  override referencePrefix = "U";
}

/**
 * Digital Proximity, Ambient Light, RGB and Gesture Sensor
 *
 * KiCad symbol: `Sensor:APDS-9960`. Reference prefix: `U`.
 * Footprint filters: Avago?APDS?9960*.
 * @see https://docs.broadcom.com/doc/AV02-4191EN
 * Keywords: sensor gesture light rgb.
 * Default footprint: Sensor:Avago_APDS-9960.
 */
export class APDS_9960 extends Component.withPins({
  "SDA": "1",
  "INT": "2",
  "LDR": "3",
  "LED_K": "4",
  "LED_A": "5",
  "GND": "6",
  "SCL": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", INT: "open_collector", LDR: "passive", LED_K: "passive", LED_A: "passive", GND: "power_in", SCL: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor:APDS-9960";
  override referencePrefix = "U";
}

/**
 * Programmable fully integrated Lightning Sensor IC
 *
 * KiCad symbol: `Sensor:AS3935`. Reference prefix: `U`.
 * Footprint filters: *MLPQ*16*1EP*4x4mm*P0.65mm*.
 * @see https://www.embeddedadventures.com/datasheets/AS3935_Datasheet_EN_v2.pdf
 * Keywords: lightning sensor.
 * Default footprint: Package_DFN_QFN:MLPQ-16-1EP_4x4mm_P0.65mm_EP2.8x2.8mm.
 */
export class AS3935 extends Component.withPins({
  "ACG": "1",
  "IN-": "2",
  "IN+": "3",
  "GND": "4",
  "Vdd": "5",
  "VReg": "6",
  "EN": "7",
  "CS": "8",
  "SI": "9",
  "IRQ": "10",
  "SCL": "11",
  "MISO": "12",
  "MOSI/SDA": "13",
  "AD0": "15",
  "AD1": "16",
  "GNDPAD": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ACG: "input", "IN-": "input", "IN+": "input", GND: "power_in", Vdd: "power_in", VReg: "passive", EN: "input", CS: "input", SI: "input", IRQ: "bidirectional", SCL: "bidirectional", MISO: "output", "MOSI/SDA": "bidirectional", AD0: "input", AD1: "input", GNDPAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor:AS3935";
  override referencePrefix = "U";
}

/**
 * Single Phase Energy Meter IC with Integrated Oscillator, JEITA SOIC-8 (SOP-8)
 *
 * KiCad symbol: `Sensor:BL0937`. Reference prefix: `U`.
 * Footprint filters: JEITA?SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.belling.com.cn/media/file_object/bel_product/BL0937/datasheet/BL0937_V1.02_en.pdf
 * Keywords: current sensor.
 * Default footprint: Package_SO:JEITA_SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class BL0937 extends Component.withPins({
  "VDD": "1",
  "IP": "2",
  "IN": "3",
  "VP": "4",
  "GND": "5",
  "CF": "6",
  "CF1": "7",
  "SEL": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", IP: "input", IN: "input", VP: "input", GND: "power_in", CF: "output", CF1: "output", SEL: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor:BL0937";
  override referencePrefix = "U";
}

/**
 * 3-in-1 sensor, humidity, pressure, temperature, I2C and SPI interface, 1.71-3.6V, LGA-8
 *
 * KiCad symbol: `Sensor:BME280`. Reference prefix: `U`.
 * Footprint filters: *LGA*2.5x2.5mm*P0.65mm*Clockwise*.
 * @see https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bme280-ds002.pdf
 * Keywords: Bosch pressure humidity temperature environment environmental measurement digital.
 * Default footprint: Package_LGA:Bosch_LGA-8_2.5x2.5mm_P0.65mm_ClockwisePinNumbering.
 */
export class BME280 extends Component.withPins({
  "GND_1": "1",
  "CSB": "2",
  "SDI": "3",
  "SCK": "4",
  "SDO": "5",
  "VDDIO": "6",
  "GND_7": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", CSB: "input", SDI: "bidirectional", SCK: "input", SDO: "bidirectional", VDDIO: "power_in", GND_7: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor:BME280";
  override referencePrefix = "U";
}

/**
 * 4-in-1 sensor, gas, humidity, pressure, temperature, I2C and SPI interface, 1.71-3.6V, LGA-8
 *
 * KiCad symbol: `Sensor:BME680`. Reference prefix: `U`.
 * Footprint filters: *LGA*3x3mm*P0.8mm*Clockwise*.
 * @see https://ae-bst.resource.bosch.com/media/_tech/media/datasheets/BST-BME680-DS001.pdf
 * Keywords: Bosch gas pressure humidity temperature environment environmental measurement digital.
 * Default footprint: Package_LGA:Bosch_LGA-8_3x3mm_P0.8mm_ClockwisePinNumbering.
 */
export class BME680 extends Component.withPins({
  "GND_1": "1",
  "CSB": "2",
  "SDI": "3",
  "SCK": "4",
  "SDO": "5",
  "VDDIO": "6",
  "GND_7": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", CSB: "input", SDI: "bidirectional", SCK: "input", SDO: "bidirectional", VDDIO: "power_in", GND_7: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor:BME680";
  override referencePrefix = "U";
}

/**
 * 3.3V to 5.5V, temperature and humidity module, DHT11
 *
 * KiCad symbol: `Sensor:DHT11`. Reference prefix: `U`.
 * Footprint filters: Aosong*DHT11*5.5x12.0*P2.54mm*.
 * @see http://akizukidenshi.com/download/ds/aosong/DHT11.pdf
 * Keywords: digital sensor.
 * Default footprint: Sensor:Aosong_DHT11_5.5x12.0_P2.54mm.
 */
export class DHT11 extends Component.withPins({
  "VDD": "1",
  "DATA": "2",
  "NC": "3",
  "GND": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", DATA: "bidirectional", NC: "no_connect", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor:DHT11";
  override referencePrefix = "U";
}

/**
 * Temperature and humidity module
 *
 * KiCad symbol: `Sensor:CHT11`. Reference prefix: `U`.
 * Footprint filters: Aosong*DHT11*5.5x12.0*P2.54mm*.
 * @see http://aosong.com/en/products-21.html
 * Keywords: Digital temperature humidity sensor.
 * Default footprint: Sensor:Aosong_DHT11_5.5x12.0_P2.54mm.
 */
export class CHT11 extends Component.withPins({
  "VDD": "1",
  "DATA": "2",
  "NC": "3",
  "GND": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", DATA: "bidirectional", NC: "no_connect", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor:CHT11";
  override referencePrefix = "U";
}

/**
 * Temperature Voltage and Current Monitor, I2C Interface, MSOP-10
 *
 * KiCad symbol: `Sensor:LTC2990`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ltc2990.pdf
 * Keywords: Temperature Voltage Current Monitor I2C AFE.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class LTC2990 extends Component.withPins({
  "V1": "1",
  "V2": "2",
  "V3": "3",
  "V4": "4",
  "GND": "5",
  "SDA": "6",
  "SCL": "7",
  "ADR0": "8",
  "ADR1": "9",
  "VCC": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { V1: "passive", V2: "passive", V3: "passive", V4: "passive", GND: "power_in", SDA: "bidirectional", SCL: "input", ADR0: "input", ADR1: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor:LTC2990";
  override referencePrefix = "U";
}

/**
 * Heart Rate Sensor, 14-OLGA
 *
 * KiCad symbol: `Sensor:MAX30102`. Reference prefix: `U`.
 * Footprint filters: Maxim*OLGA*3.3x5.6mm*P0.8mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX30102.pdf
 * Keywords: Heart Rate.
 * Default footprint: OptoDevice:Maxim_OLGA-14_3.3x5.6mm_P0.8mm.
 */
export class MAX30102 extends Component.withPins({
  "NC_1": "1",
  "SCL": "2",
  "SDA": "3",
  "PGND": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
  "VLED+_9": "9",
  "VLED+_10": "10",
  "VDD": "11",
  "GND": "12",
  "~{INT}": "13",
  "NC_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", SCL: "input", SDA: "bidirectional", PGND: "power_in", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", "VLED+_9": "power_in", "VLED+_10": "passive", VDD: "power_in", GND: "power_in", "~{INT}": "output", NC_14: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor:MAX30102";
  override referencePrefix = "U";
}

/**
 * Generic radiation detector
 *
 * KiCad symbol: `Sensor:Nuclear-Radiation_Detector`. Reference prefix: `V`.
 * Keywords: nuclear ionising radiation sensor geiger mueller muller tube neutron counter ionization chamber.
 */
export class Nuclear_Radiation_Detector extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor:Nuclear-Radiation_Detector";
  override referencePrefix = "V";
}

/**
 * Digital Proximity and Ambient Light Sensor
 *
 * KiCad symbol: `Sensor:RPR-0521RS`. Reference prefix: `U`.
 * Footprint filters: Rohm?RPR?0521*.
 * @see https://fscdn.rohm.com/en/products/databook/datasheet/opto/optical_sensor/opto_module/rpr-0521rs-e.pdf
 * Keywords: sensor light.
 * Default footprint: Sensor:Rohm_RPR-0521RS.
 */
export class RPR_0521RS extends Component.withPins({
  "VDD": "1",
  "SCL": "2",
  "GND": "3",
  "LED_A": "4",
  "LED_K": "5",
  "LDR": "6",
  "INT": "7",
  "SDA": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", SCL: "input", GND: "power_in", LED_A: "passive", LED_K: "passive", LDR: "passive", INT: "open_collector", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor:RPR-0521RS";
  override referencePrefix = "U";
}

/**
 * Temperature and humidity module
 *
 * KiCad symbol: `Sensor:SHT1x`. Reference prefix: `U`.
 * Footprint filters: SHT1x*.
 * @see https://www.sensirion.com/fileadmin/user_upload/customers/sensirion/Dokumente/0_Datasheets/Humidity/Sensirion_Humidity_Sensors_SHT1x_Datasheet.pdf
 * Keywords: digital temperature humidity sensor.
 * Default footprint: Sensor:SHT1x.
 */
export class SHT1x extends Component.withPins({
  "GND": "1",
  "DATA": "2",
  "SCK": "3",
  "VDD": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", DATA: "bidirectional", SCK: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor:SHT1x";
  override referencePrefix = "U";
}
