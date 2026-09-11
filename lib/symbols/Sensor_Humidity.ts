// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Relative Humidity and Temperature Sensor with I2C Interface
 *
 * KiCad symbol: `Sensor_Humidity:ENS210`. Reference prefix: `U`.
 * Footprint filters: AMS?QFN*EP*2x2mm*P0.95mm*.
 * @see http://ams.com/eng/Products/Environmental-Sensors/Relative-Humidity-and-Temperature-Sensors/ENS210
 * Keywords: relative humidity temperature i2c pre-calibrated.
 * Default footprint: Package_DFN_QFN:AMS_QFN-4-1EP_2x2mm_P0.95mm_EP0.7x1.6mm.
 */
export class ENS210 extends Component.withPins({
  "VDD": "1",
  "SCL": "2",
  "SDA": "3",
  "GND_4": "4",
  "GND_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", SCL: "input", SDA: "bidirectional", GND_4: "power_in", GND_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Humidity:ENS210";
  override referencePrefix = "U";
}

/**
 * Relative Humidity and Temperature Sensor, I2C Interface, 1.62..5.5V supply, DFN-6
 *
 * KiCad symbol: `Sensor_Humidity:GXHTC3`. Reference prefix: `U`.
 * Footprint filters: *DFN*2x2mm*P0.5mm*0.7x1.6mm*.
 * @see http://www.junmintech.com/UploadFiles/Product/20211129145204_37021.pdf
 * Keywords: GXCAS pre-calibrated.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_2x2mm_P0.5mm_EP0.7x1.6mm.
 */
export class GXHTC3 extends Component.withPins({
  "VDD": "1",
  "NC_2": "2",
  "SCL": "3",
  "SDA": "4",
  "NC_5": "5",
  "GND": "6",
  "EPAD": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", NC_2: "no_connect", SCL: "bidirectional", SDA: "bidirectional", NC_5: "no_connect", GND: "power_in", EPAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Humidity:GXHTC3";
  override referencePrefix = "U";
}

/**
 * Low Power,High Accuracy Digital Humidity Sensor with Temperature Sensor
 *
 * KiCad symbol: `Sensor_Humidity:HDC1080`. Reference prefix: `U`.
 * Footprint filters: Package*SON:Texas*PWSON*N6*.
 * @see http://www.ti.com/lit/ds/symlink/hdc1080.pdf
 * Keywords: Temperature Humidity Sensor.
 * Default footprint: Package_SON:Texas_PWSON-N6.
 */
export class HDC1080 extends Component.withPins({
  "SDA": "1",
  "GND": "2",
  "NC_3": "3",
  "NC_4": "4",
  "VCC": "5",
  "SCL": "6",
  "DAP": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", GND: "power_in", NC_3: "no_connect", NC_4: "no_connect", VCC: "power_in", SCL: "input", DAP: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Humidity:HDC1080";
  override referencePrefix = "U";
}

/**
 * Low Power Humidity and Temperature Sensor
 *
 * KiCad symbol: `Sensor_Humidity:HDC2080`. Reference prefix: `U`.
 * Footprint filters: Sensor*Humidity:Texas*S*PWSON*N6*HDC2080*.
 * @see http://www.ti.com/lit/ds/symlink/hdc2080.pdf
 * Keywords: Temperature Humidity Sensor.
 * Default footprint: Sensor_Humidity:Texas_S-PWSON-N6-HDC2080.
 */
export class HDC2080 extends Component.withPins({
  "SDA": "1",
  "GND": "2",
  "ADDR": "3",
  "DRDY": "4",
  "VDD": "5",
  "SCL": "6",
  "EP": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", GND: "power_in", ADDR: "input", DRDY: "output", VDD: "power_in", SCL: "input", EP: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Humidity:HDC2080";
  override referencePrefix = "U";
}

/**
 * I²C humidity and temperature sensor, ±2%RH, ±0.2°C, DFN-8
 *
 * KiCad symbol: `Sensor_Humidity:SHT31-DIS`. Reference prefix: `U`.
 * Footprint filters: Sensirion*DFN*1EP*2.5x2.5mm*P0.5mm*.
 * @see https://www.sensirion.com/fileadmin/user_upload/customers/sensirion/Dokumente/2_Humidity_Sensors/Datasheets/Sensirion_Humidity_Sensors_SHT3x_Datasheet_digital.pdf
 * Keywords: digital temperature humidity i2c.
 * Default footprint: Sensor_Humidity:Sensirion_DFN-8-1EP_2.5x2.5mm_P0.5mm_EP1.1x1.7mm.
 */
export class SHT31_DIS extends Component.withPins({
  "SDA": "1",
  "ADDR": "2",
  "ALERT": "3",
  "SCL": "4",
  "VDD": "5",
  "~{RESET}": "6",
  "R": "7",
  "VSS_8": "8",
  "VSS_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", ADDR: "input", ALERT: "output", SCL: "input", VDD: "power_in", "~{RESET}": "input", R: "passive", VSS_8: "power_in", VSS_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Humidity:SHT31-DIS";
  override referencePrefix = "U";
}

/**
 * I²C humidity and temperature sensor, ±2%RH, ±0.2°C, DFN-8
 *
 * KiCad symbol: `Sensor_Humidity:SHT30-DIS`. Reference prefix: `U`.
 * Footprint filters: Sensirion*DFN*1EP*2.5x2.5mm*P0.5mm*.
 * @see https://www.sensirion.com/fileadmin/user_upload/customers/sensirion/Dokumente/2_Humidity_Sensors/Datasheets/Sensirion_Humidity_Sensors_SHT3x_Datasheet_digital.pdf
 * Keywords: digital temperature humidity i2c.
 * Default footprint: Sensor_Humidity:Sensirion_DFN-8-1EP_2.5x2.5mm_P0.5mm_EP1.1x1.7mm.
 */
export class SHT30_DIS extends Component.withPins({
  "SDA": "1",
  "ADDR": "2",
  "ALERT": "3",
  "SCL": "4",
  "VDD": "5",
  "~{RESET}": "6",
  "R": "7",
  "VSS_8": "8",
  "VSS_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", ADDR: "input", ALERT: "output", SCL: "input", VDD: "power_in", "~{RESET}": "input", R: "passive", VSS_8: "power_in", VSS_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Humidity:SHT30-DIS";
  override referencePrefix = "U";
}

/**
 * I²C humidity and temperature sensor, ±3%RH, ±0.3°C, AEQ-100, DFN-8
 *
 * KiCad symbol: `Sensor_Humidity:SHT30A-DIS`. Reference prefix: `U`.
 * Footprint filters: Sensirion*DFN*1EP*2.5x2.5mm*P0.5mm*.
 * @see https://www.sensirion.com/fileadmin/user_upload/customers/sensirion/Dokumente/2_Humidity_Sensors/Datasheets/Sensirion_Humidity_Sensors_SHT3xA_Datasheet.pdf
 * Keywords: digital temperature humidity automotive i2c.
 * Default footprint: Sensor_Humidity:Sensirion_DFN-8-1EP_2.5x2.5mm_P0.5mm_EP1.1x1.7mm.
 */
export class SHT30A_DIS extends Component.withPins({
  "SDA": "1",
  "ADDR": "2",
  "ALERT": "3",
  "SCL": "4",
  "VDD": "5",
  "~{RESET}": "6",
  "R": "7",
  "VSS_8": "8",
  "VSS_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", ADDR: "input", ALERT: "output", SCL: "input", VDD: "power_in", "~{RESET}": "input", R: "passive", VSS_8: "power_in", VSS_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Humidity:SHT30A-DIS";
  override referencePrefix = "U";
}

/**
 * I²C humidity and temperature sensor, ±2%RH, ±0.3°C, AEQ-100, DFN-8
 *
 * KiCad symbol: `Sensor_Humidity:SHT31A-DIS`. Reference prefix: `U`.
 * Footprint filters: Sensirion*DFN*1EP*2.5x2.5mm*P0.5mm*.
 * @see https://www.sensirion.com/fileadmin/user_upload/customers/sensirion/Dokumente/2_Humidity_Sensors/Datasheets/Sensirion_Humidity_Sensors_SHT3xA_Datasheet.pdf
 * Keywords: digital temperature humidity automotive i2c.
 * Default footprint: Sensor_Humidity:Sensirion_DFN-8-1EP_2.5x2.5mm_P0.5mm_EP1.1x1.7mm.
 */
export class SHT31A_DIS extends Component.withPins({
  "SDA": "1",
  "ADDR": "2",
  "ALERT": "3",
  "SCL": "4",
  "VDD": "5",
  "~{RESET}": "6",
  "R": "7",
  "VSS_8": "8",
  "VSS_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", ADDR: "input", ALERT: "output", SCL: "input", VDD: "power_in", "~{RESET}": "input", R: "passive", VSS_8: "power_in", VSS_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Humidity:SHT31A-DIS";
  override referencePrefix = "U";
}

/**
 * I²C humidity and temperature sensor, ±1.5%RH, ±0.1°C, DFN-8
 *
 * KiCad symbol: `Sensor_Humidity:SHT35-DIS`. Reference prefix: `U`.
 * Footprint filters: Sensirion*DFN*1EP*2.5x2.5mm*P0.5mm*.
 * @see https://www.sensirion.com/fileadmin/user_upload/customers/sensirion/Dokumente/2_Humidity_Sensors/Datasheets/Sensirion_Humidity_Sensors_SHT3x_Datasheet_digital.pdf
 * Keywords: digital temperature humidity i2c.
 * Default footprint: Sensor_Humidity:Sensirion_DFN-8-1EP_2.5x2.5mm_P0.5mm_EP1.1x1.7mm.
 */
export class SHT35_DIS extends Component.withPins({
  "SDA": "1",
  "ADDR": "2",
  "ALERT": "3",
  "SCL": "4",
  "VDD": "5",
  "~{RESET}": "6",
  "R": "7",
  "VSS_8": "8",
  "VSS_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", ADDR: "input", ALERT: "output", SCL: "input", VDD: "power_in", "~{RESET}": "input", R: "passive", VSS_8: "power_in", VSS_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Humidity:SHT35-DIS";
  override referencePrefix = "U";
}

/**
 * I²C humidity and temperature sensor, ±1.5%RH, ±0.2°C, AEQ-100, DFN-8
 *
 * KiCad symbol: `Sensor_Humidity:SHT35A-DIS`. Reference prefix: `U`.
 * Footprint filters: Sensirion*DFN*1EP*2.5x2.5mm*P0.5mm*.
 * @see https://www.sensirion.com/fileadmin/user_upload/customers/sensirion/Dokumente/2_Humidity_Sensors/Datasheets/Sensirion_Humidity_Sensors_SHT3xA_Datasheet.pdf
 * Keywords: digital temperature humidity automotive i2c.
 * Default footprint: Sensor_Humidity:Sensirion_DFN-8-1EP_2.5x2.5mm_P0.5mm_EP1.1x1.7mm.
 */
export class SHT35A_DIS extends Component.withPins({
  "SDA": "1",
  "ADDR": "2",
  "ALERT": "3",
  "SCL": "4",
  "VDD": "5",
  "~{RESET}": "6",
  "R": "7",
  "VSS_8": "8",
  "VSS_9": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", ADDR: "input", ALERT: "output", SCL: "input", VDD: "power_in", "~{RESET}": "input", R: "passive", VSS_8: "power_in", VSS_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Humidity:SHT35A-DIS";
  override referencePrefix = "U";
}

/**
 * Digital Humidity and Temperature Sensor, ±1%RH, ±0.1°C, I2C, 1.08-3.6V, 16bit, DFN-4
 *
 * KiCad symbol: `Sensor_Humidity:SHT4x`. Reference prefix: `U`.
 * Footprint filters: Sensirion?DFN*1.5x1.5mm*P0.8mm*SHT4x*.
 * @see https://sensirion.com/media/documents/33FD6951/624C4357/Datasheet_SHT4x.pdf
 * Keywords: Sensirion environment environmental measurement digital SHT40 SHT41 SHT45.
 * Default footprint: Sensor_Humidity:Sensirion_DFN-4_1.5x1.5mm_P0.8mm_SHT4x_NoCentralPad.
 */
export class SHT4x extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "VDD": "3",
  "VSS": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", VDD: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Humidity:SHT4x";
  override referencePrefix = "U";
}

/**
 * Humidity and Temperature Sensor, ±3%RH, ±0.3°C, I2C, 1.62-1.98V, DFN-4
 *
 * KiCad symbol: `Sensor_Humidity:SHTC1`. Reference prefix: `U`.
 * Footprint filters: Sensirion*DFN*1EP*2x2mm*P1mm*EP0.7x1.6mm*.
 * @see https://www.sensirion.com/fileadmin/user_upload/customers/sensirion/Dokumente/0_Datasheets/Humidity/Sensirion_Humidity_Sensors_SHTC1_Datasheet.pdf
 * Keywords: Sensirion environment environmental measurement digital.
 * Default footprint: Sensor_Humidity:Sensirion_DFN-4-1EP_2x2mm_P1mm_EP0.7x1.6mm.
 */
export class SHTC1 extends Component.withPins({
  "VDD": "1",
  "SCL": "2",
  "SDA": "3",
  "VSS": "4",
  "NC": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", SCL: "input", SDA: "bidirectional", VSS: "power_in", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Humidity:SHTC1";
  override referencePrefix = "U";
}

/**
 * Humidity and Temperature Sensor, ±2%RH, ±0.2°C, I2C, 1.62-3.6V, DFN-4
 *
 * KiCad symbol: `Sensor_Humidity:SHTC3`. Reference prefix: `U`.
 * Footprint filters: Sensirion*DFN*1EP*2x2mm*P1mm*EP0.7x1.6mm*.
 * @see https://www.sensirion.com/fileadmin/user_upload/customers/sensirion/Dokumente/0_Datasheets/Humidity/Sensirion_Humidity_Sensors_SHTC3_Datasheet.pdf
 * Keywords: Sensirion environment environmental measurement digital.
 * Default footprint: Sensor_Humidity:Sensirion_DFN-4-1EP_2x2mm_P1mm_EP0.7x1.6mm.
 */
export class SHTC3 extends Component.withPins({
  "VDD": "1",
  "SCL": "2",
  "SDA": "3",
  "VSS": "4",
  "NC": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", SCL: "input", SDA: "bidirectional", VSS: "power_in", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Humidity:SHTC3";
  override referencePrefix = "U";
}

/**
 * I2C Humidity and Temperature Sensor, DFN-6
 *
 * KiCad symbol: `Sensor_Humidity:Si7020-A20`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P1mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si7020-A20.pdf
 * Keywords: I2C Humidity Temperature Sensor.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_3x3mm_P1mm_EP1.5x2.4mm.
 */
export class Si7020_A20 extends Component.withPins({
  "SDA": "1",
  "GND": "2",
  "NC_3": "3",
  "NC_4": "4",
  "VDD": "5",
  "SCL": "6",
  "PAD": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", GND: "power_in", NC_3: "no_connect", NC_4: "no_connect", VDD: "power_in", SCL: "input", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Humidity:Si7020-A20";
  override referencePrefix = "U";
}

/**
 * I2C Humidity and Temperature Sensor, DFN-6
 *
 * KiCad symbol: `Sensor_Humidity:Si7021-A20`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P1mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si7021-A20.pdf
 * Keywords: I2C Humidity Temperature Sensor.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_3x3mm_P1mm_EP1.5x2.4mm.
 */
export class Si7021_A20 extends Component.withPins({
  "SDA": "1",
  "GND": "2",
  "NC_3": "3",
  "NC_4": "4",
  "VDD": "5",
  "SCL": "6",
  "PAD": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", GND: "power_in", NC_3: "no_connect", NC_4: "no_connect", VDD: "power_in", SCL: "input", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Humidity:Si7021-A20";
  override referencePrefix = "U";
}
