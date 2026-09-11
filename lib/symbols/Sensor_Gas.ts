// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * S8 Residential, CO2 sensor, 400-2000 PPM, 1kHz PWM output, Modbus, THT
 *
 * KiCad symbol: `Sensor_Gas:004-0-0013`. Reference prefix: `U`.
 * Footprint filters: Senseair*S8*.
 * @see https://rmtplusstoragesenseair.blob.core.windows.net/docs/publicerat/PSP107.pdf
 * Keywords: Senseair co2 gas sensor pwm modbus.
 */
export class _004_0_0013 extends Component.withPins({
  "G+": "1",
  "G0": "2",
  "ALARM_OC": "3",
  "PWM_1KHZ": "4",
  "BCAL_IN": "5",
  "UART_R/T": "6",
  "UART_TXD": "7",
  "UART_RXD": "8",
  "DVCC_OUT": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "G+": "power_in", G0: "power_in", ALARM_OC: "open_collector", PWM_1KHZ: "output", BCAL_IN: "input", "UART_R/T": "output", UART_TXD: "output", UART_RXD: "input", DVCC_OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Sensor_Gas:004-0-0013";
  override referencePrefix = "U";
}

/**
 * S8 Commercial, CO2 sensor, 400-2000 PPM, 1kHz PWM output, Modbus, THT
 *
 * KiCad symbol: `Sensor_Gas:004-0-0010`. Reference prefix: `U`.
 * Footprint filters: Senseair*S8*.
 * @see https://rmtplusstoragesenseair.blob.core.windows.net/docs/publicerat/PSP103.pdf
 * Keywords: Senseair co2 gas sensor pwm modbus.
 */
export class _004_0_0010 extends Component.withPins({
  "G+": "1",
  "G0": "2",
  "ALARM_OC": "3",
  "PWM_1KHZ": "4",
  "BCAL_IN": "5",
  "UART_R/T": "6",
  "UART_TXD": "7",
  "UART_RXD": "8",
  "DVCC_OUT": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "G+": "power_in", G0: "power_in", ALARM_OC: "open_collector", PWM_1KHZ: "output", BCAL_IN: "input", "UART_R/T": "output", UART_TXD: "output", UART_RXD: "input", DVCC_OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Sensor_Gas:004-0-0010";
  override referencePrefix = "U";
}

/**
 * S8 2%, CO2 sensor, 0.04-2% by volume, 1kHz PWM output, Modbus, THT
 *
 * KiCad symbol: `Sensor_Gas:004-0-0050`. Reference prefix: `U`.
 * Footprint filters: Senseair*S8*.
 * @see https://rmtplusstoragesenseair.blob.core.windows.net/docs/publicerat/PSP108.pdf
 * Keywords: Senseair co2 gas sensor pwm modbus.
 */
export class _004_0_0050 extends Component.withPins({
  "G+": "1",
  "G0": "2",
  "ALARM_OC": "3",
  "PWM_1KHZ": "4",
  "BCAL_IN": "5",
  "UART_R/T": "6",
  "UART_TXD": "7",
  "UART_RXD": "8",
  "DVCC_OUT": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "G+": "power_in", G0: "power_in", ALARM_OC: "open_collector", PWM_1KHZ: "output", BCAL_IN: "input", "UART_R/T": "output", UART_TXD: "output", UART_RXD: "input", DVCC_OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Sensor_Gas:004-0-0050";
  override referencePrefix = "U";
}

/**
 * S8 LP, CO2 sensor, 400-2000 PPM, 1kHz PWM output, Modbus, THT
 *
 * KiCad symbol: `Sensor_Gas:004-0-0053`. Reference prefix: `U`.
 * Footprint filters: Senseair*S8*.
 * @see https://rmtplusstoragesenseair.blob.core.windows.net/docs/publicerat/PSP126.pdf
 * Keywords: Senseair co2 gas sensor pwm modbus.
 */
export class _004_0_0053 extends Component.withPins({
  "G+": "1",
  "G0": "2",
  "ALARM_OC": "3",
  "PWM_1KHZ": "4",
  "BCAL_IN": "5",
  "UART_R/T": "6",
  "UART_TXD": "7",
  "UART_RXD": "8",
  "DVCC_OUT": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "G+": "power_in", G0: "power_in", ALARM_OC: "open_collector", PWM_1KHZ: "output", BCAL_IN: "input", "UART_R/T": "output", UART_TXD: "output", UART_RXD: "input", DVCC_OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Sensor_Gas:004-0-0053";
  override referencePrefix = "U";
}

/**
 * S8 5%, CO2 sensor, 0.04-5% by volume, 1kHz PWM output, Modbus, THT
 *
 * KiCad symbol: `Sensor_Gas:004-0-0071`. Reference prefix: `U`.
 * Footprint filters: Senseair*S8*.
 * @see https://rmtplusstoragesenseair.blob.core.windows.net/docs/publicerat/PSP0113.pdf
 * Keywords: Senseair co2 gas sensor pwm modbus.
 */
export class _004_0_0071 extends Component.withPins({
  "G+": "1",
  "G0": "2",
  "ALARM_OC": "3",
  "PWM_1KHZ": "4",
  "BCAL_IN": "5",
  "UART_R/T": "6",
  "UART_TXD": "7",
  "UART_RXD": "8",
  "DVCC_OUT": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "G+": "power_in", G0: "power_in", ALARM_OC: "open_collector", PWM_1KHZ: "output", BCAL_IN: "input", "UART_R/T": "output", UART_TXD: "output", UART_RXD: "input", DVCC_OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Sensor_Gas:004-0-0071";
  override referencePrefix = "U";
}

/**
 * S8 Commercial, CO2 sensor, 400-2000 PPM, 1kHz PWM output, Modbus, THT
 *
 * KiCad symbol: `Sensor_Gas:004-0-0075`. Reference prefix: `U`.
 * Footprint filters: Senseair*S8*.
 * @see https://rmtplusstoragesenseair.blob.core.windows.net/docs/publicerat/PSP103.pdf
 * Keywords: Senseair co2 gas sensor pwm modbus.
 */
export class _004_0_0075 extends Component.withPins({
  "G+": "1",
  "G0": "2",
  "ALARM_OC": "3",
  "PWM_1KHZ": "4",
  "BCAL_IN": "5",
  "UART_R/T": "6",
  "UART_TXD": "7",
  "UART_RXD": "8",
  "DVCC_OUT": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "G+": "power_in", G0: "power_in", ALARM_OC: "open_collector", PWM_1KHZ: "output", BCAL_IN: "input", "UART_R/T": "output", UART_TXD: "output", UART_RXD: "input", DVCC_OUT: "power_out", ...opts.pinTypes } });
  }
  override schema = "Sensor_Gas:004-0-0075";
  override referencePrefix = "U";
}

/**
 * SPEC Sensors electrochemical H2S gas sensor
 *
 * KiCad symbol: `Sensor_Gas:3SP-H2S-50_110-304`. Reference prefix: `U`.
 * Footprint filters: SPEC*110*10Pin*.
 * @see https://www.spec-sensors.com/wp-content/uploads/2016/10/3SP_H2S_50-C-Package-110-304.pdf
 * Keywords: H2S sensor.
 * Default footprint: Sensor:SPEC_110-xxx_SMD-10Pin_20x20mm_P4.0mm.
 */
export class _3SP_H2S_50_110_304 extends Component.withPins({
  "Working_1": "1",
  "Reference": "5",
  "Counter": "6",
  "Working_10": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Working_1: "output", Reference: "passive", Counter: "input", Working_10: "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Gas:3SP-H2S-50_110-304";
  override referencePrefix = "U";
}

/**
 * Ultra-low power digital gas sensor for monitoring indoor air quality
 *
 * KiCad symbol: `Sensor_Gas:CCS811`. Reference prefix: `U`.
 * Footprint filters: AMS?LGA*EP*2.7x4mm*P0.6mm*.
 * @see https://www.sciosense.com/wp-content/uploads/documents/SC-001232-DS-3-CCS811B-Datasheet-Revision-2.pdf
 * Keywords: metal oxide gas sensor MOX volatile organix comounds VOC I2C.
 * Default footprint: Package_LGA:AMS_LGA-10-1EP_2.7x4mm_P0.6mm.
 */
export class CCS811 extends Component.withPins({
  "ADDR": "1",
  "~{RESET}": "2",
  "~{INT}": "3",
  "PWM": "4",
  "Sense": "5",
  "VDD": "6",
  "~{WAKE}": "7",
  "AUX": "8",
  "SDA": "9",
  "SCL": "10",
  "GND": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ADDR: "input", "~{RESET}": "input", "~{INT}": "output", PWM: "output", Sense: "bidirectional", VDD: "power_in", "~{WAKE}": "input", AUX: "input", SDA: "bidirectional", SCL: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Gas:CCS811";
  override referencePrefix = "U";
}

/**
 * MEMS Combustible Gas Sensor
 *
 * KiCad symbol: `Sensor_Gas:GM-402B`. Reference prefix: `U`.
 * Footprint filters: Winson?GM?402B*.
 * @see https://www.winsen-sensor.com/d/files/me2/mems--gm-402b--manual-v1_1.pdf
 * Keywords: gas sensor.
 * Default footprint: Sensor:Winson_GM-402B_5x5mm_P1.27mm.
 */
export class GM_402B extends Component.withPins({
  "Rh1": "1",
  "NC_2": "2",
  "Rh2": "3",
  "NC_4": "4",
  "Rs1": "5",
  "NC_6": "6",
  "Rs2": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Rh1: "passive", NC_2: "no_connect", Rh2: "passive", NC_4: "no_connect", Rs1: "passive", NC_6: "no_connect", Rs2: "passive", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Gas:GM-402B";
  override referencePrefix = "U";
}

/**
 * SST LuminOX Luminescence-based O2 sensor
 *
 * KiCad symbol: `Sensor_Gas:LuminOX_LOX-O2`. Reference prefix: `U`.
 * Footprint filters: LuminOX?LOX?O2*.
 * @see https://sstsensing.com/wp-content/uploads/2021/08/DS0030rev15_LuminOx.pdf
 * Keywords: O2 sensor.
 * Default footprint: Sensor:LuminOX_LOX-O2.
 */
export class LuminOX_LOX_O2 extends Component.withPins({
  "Vs": "1",
  "GND": "2",
  "TXD": "3",
  "RXD": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vs: "power_in", GND: "power_in", TXD: "output", RXD: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Gas:LuminOX_LOX-O2";
  override referencePrefix = "U";
}

/**
 * Semiconductor Sensor for Flammable Gas
 *
 * KiCad symbol: `Sensor_Gas:MQ-6`. Reference prefix: `U`.
 * Footprint filters: *MQ*6*.
 * @see https://www.winsen-sensor.com/d/files/semiconductor/mq-6.pdf
 * Keywords: flammable gas sensor LPG.
 * Default footprint: Sensor:MQ-6.
 */
export class MQ_6 extends Component.withPins({
  "B1": "1",
  "VH+": "2",
  "B2": "3",
  "A2": "4",
  "VH-": "5",
  "A1": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { B1: "passive", "VH+": "power_in", B2: "passive", A2: "passive", "VH-": "power_in", A1: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Gas:MQ-6";
  override referencePrefix = "U";
}

/**
 * Compact MOS CO sensor
 *
 * KiCad symbol: `Sensor_Gas:MiCS-5524`. Reference prefix: `U`.
 * Footprint filters: Sensortech?MiCS?5x7mm*P1.25mm*.
 * @see https://www.sgxsensortech.com/content/uploads/2014/07/1084_Datasheet-MiCS-5524-rev-8.pdf
 * Keywords: CO sensor.
 * Default footprint: Sensor:Sensortech_MiCS_5x7mm_P1.25mm.
 */
export class MiCS_5524 extends Component.withPins({
  "NC_A": "A",
  "NC_B": "B",
  "Rh1": "C",
  "Rs1": "D",
  "NC_E": "E",
  "Rh2": "F",
  "Rs2": "G",
  "NC_H": "H",
  "NC_J": "J",
  "NC_K": "K",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_A: "no_connect", NC_B: "no_connect", Rh1: "output", Rs1: "output", NC_E: "no_connect", Rh2: "input", Rs2: "input", NC_H: "no_connect", NC_J: "no_connect", NC_K: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Gas:MiCS-5524";
  override referencePrefix = "U";
}

/**
 * Photoacoustic CO2 sensor, 40 000 ppm, I2C, 2.4-5.5 V, Base accuracy  400 - 2000 ppm
 *
 * KiCad symbol: `Sensor_Gas:SCD40-D-R2`. Reference prefix: `U`.
 * Footprint filters: Sensirion*SCD4?*.
 * @see https://sensirion.com/media/documents/E0F04247/631EF271/CD_DS_SCD40_SCD41_Datasheet_D1.pdf
 * Keywords: CO2 sensor I2C.
 * Default footprint: Sensor:Sensirion_SCD4x-1EP_10.1x10.1mm_P1.25mm_EP4.8x4.8mm.
 */
export class SCD40_D_R2 extends Component.withPins({
  "GND_6": "6",
  "VDD_7": "7",
  "SCL": "9",
  "SDA": "10",
  "VDD_19": "19",
  "GND_20": "20",
  "GND_21": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_6: "power_in", VDD_7: "power_in", SCL: "input", SDA: "bidirectional", VDD_19: "passive", GND_20: "passive", GND_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Gas:SCD40-D-R2";
  override referencePrefix = "U";
}

/**
 * Photoacoustic CO2 sensor, 40 000 ppm, I2C, 2.4-5.5 V, High accuracy  400 - 5000 ppm
 *
 * KiCad symbol: `Sensor_Gas:SCD41-D-R2`. Reference prefix: `U`.
 * Footprint filters: Sensirion*SCD4?*.
 * @see https://sensirion.com/media/documents/E0F04247/631EF271/CD_DS_SCD40_SCD41_Datasheet_D1.pdf
 * Keywords: CO2 sensor I2C.
 * Default footprint: Sensor:Sensirion_SCD4x-1EP_10.1x10.1mm_P1.25mm_EP4.8x4.8mm.
 */
export class SCD41_D_R2 extends Component.withPins({
  "GND_6": "6",
  "VDD_7": "7",
  "SCL": "9",
  "SDA": "10",
  "VDD_19": "19",
  "GND_20": "20",
  "GND_21": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_6: "power_in", VDD_7: "power_in", SCL: "input", SDA: "bidirectional", VDD_19: "passive", GND_20: "passive", GND_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Gas:SCD41-D-R2";
  override referencePrefix = "U";
}

/**
 * Figaro Carbon Monoxide sensor
 *
 * KiCad symbol: `Sensor_Gas:TGS-5141`. Reference prefix: `U`.
 * Footprint filters: TGS?5141*.
 * @see https://figarosensor.com/product/docs/tgs5141-p00_product%20infomation%28fusa%29_rev07.pdf
 * Keywords: CO sensor.
 * Default footprint: Sensor:TGS-5141.
 */
export class TGS_5141 extends Component.withPins({
  "Working": "1",
  "Counter": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Working: "passive", Counter: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Gas:TGS-5141";
  override referencePrefix = "U";
}
