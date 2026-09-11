// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 3-Axis MEMS Accelerometer, 2/4/8/16g range, I2C/SPI, LGA-14
 *
 * KiCad symbol: `Sensor_Motion:ADXL343`. Reference prefix: `U`.
 * Footprint filters: *LGA*3x5mm*P0.8mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADXL343.pdf
 * Keywords: 3-axis accelerometer i2c spi mems.
 * Default footprint: Package_LGA:LGA-14_3x5mm_P0.8mm_LayoutBorder1x6y.
 */
export class ADXL343 extends Component.withPins({
  "Vdd_I/O": "1",
  "GND_2": "2",
  "RES_3": "3",
  "GND_4": "4",
  "GND_5": "5",
  "Vs": "6",
  "~{CS}": "7",
  "INT1": "8",
  "INT2": "9",
  "NC": "10",
  "RES_11": "11",
  "SDO/ADDR": "12",
  "SDA/SDI/SDIO": "13",
  "SCL/SCLK": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "Vdd_I/O": "power_in", GND_2: "power_in", RES_3: "passive", GND_4: "passive", GND_5: "passive", Vs: "power_in", "~{CS}": "input", INT1: "output", INT2: "output", NC: "no_connect", RES_11: "passive", "SDO/ADDR": "bidirectional", "SDA/SDI/SDIO": "bidirectional", "SCL/SCLK": "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:ADXL343";
  override referencePrefix = "U";
}

/**
 * Micropower 3-Axis Accelerometer, Thermometer, 2/4/8g range, SPI, LGA-16
 *
 * KiCad symbol: `Sensor_Motion:ADXL363`. Reference prefix: `U`.
 * Footprint filters: *LGA?16*3.25x3mm*P0.5mm*LayoutBorder3x5y*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADXL363.pdf
 * Keywords: 3-axis accelerometer spi mems thermometer.
 * Default footprint: Sensor_Motion:Analog_LGA-16_3.25x3mm_P0.5mm_LayoutBorder3x5y.
 */
export class ADXL363 extends Component.withPins({
  "V_{DD_I/O}": "1",
  "RES_3": "3",
  "SCLK": "4",
  "ADC_IN": "5",
  "MOSI": "6",
  "MISO": "7",
  "~{CS}": "8",
  "INT2": "9",
  "RES_10": "10",
  "INT1": "11",
  "GND_12": "12",
  "GND_13": "13",
  "V_{S}": "14",
  "GND_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD_I/O}": "power_in", RES_3: "passive", SCLK: "input", ADC_IN: "input", MOSI: "input", MISO: "output", "~{CS}": "input", INT2: "output", RES_10: "passive", INT1: "output", GND_12: "power_in", GND_13: "passive", "V_{S}": "power_in", GND_16: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:ADXL363";
  override referencePrefix = "U";
}

/**
 * Custom programmable 9-axis motion sensor
 *
 * KiCad symbol: `Sensor_Motion:BMF055`. Reference prefix: `U`.
 * Footprint filters: LGA*5.2x3.8mm*P0.5mm*.
 * @see https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bmf055-ds000.pdf
 * Keywords: 9-axis motion sensor IMU SAMD20 ARM Cortex-M0+.
 * Default footprint: Package_LGA:LGA-28_5.2x3.8mm_P0.5mm.
 */
export class BMF055 extends Component.withPins({
  "PB03(ACC_GYRO_INT2)": "1",
  "GND": "2",
  "VDD": "3",
  "PB02": "4",
  "PB01": "5",
  "PB00": "6",
  "(SWDIO)PA31": "7",
  "(SWCLK)PA30": "8",
  "CAP": "9",
  "PA28": "10",
  "~{RESET}": "11",
  "(GYRO_CSB)PA27": "12",
  "PB23(ACC_GYRO_INT1)": "13",
  "PA24": "14",
  "PA23": "15",
  "PA22": "16",
  "PA21": "17",
  "PA20": "18",
  "PB17": "19",
  "PB16": "20",
  "(MISO)PA19": "21",
  "(ACC_MAG_CSB)PA18": "22",
  "(SCLK)PA17": "23",
  "(MOSI)PA16": "24",
  "GNDIO": "25",
  "PA01": "26",
  "PA00": "27",
  "VDDIO": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "PB03(ACC_GYRO_INT2)": "bidirectional", GND: "power_in", VDD: "power_in", PB02: "bidirectional", PB01: "bidirectional", PB00: "bidirectional", "(SWDIO)PA31": "bidirectional", "(SWCLK)PA30": "bidirectional", CAP: "bidirectional", PA28: "bidirectional", "~{RESET}": "input", "(GYRO_CSB)PA27": "bidirectional", "PB23(ACC_GYRO_INT1)": "bidirectional", PA24: "input", PA23: "bidirectional", PA22: "bidirectional", PA21: "bidirectional", PA20: "bidirectional", PB17: "bidirectional", PB16: "bidirectional", "(MISO)PA19": "bidirectional", "(ACC_MAG_CSB)PA18": "bidirectional", "(SCLK)PA17": "bidirectional", "(MOSI)PA16": "bidirectional", GNDIO: "power_in", PA01: "bidirectional", PA00: "bidirectional", VDDIO: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:BMF055";
  override referencePrefix = "U";
}

/**
 * Accelerometer, Gyroscope, 6-Axis Sensor, I2C / SPI interface, LGA-16
 *
 * KiCad symbol: `Sensor_Motion:BMI088`. Reference prefix: `U`.
 * Footprint filters: Bosch*LGA*4.5x3mm?P0.5mm*ClockwisePinNumbering*.
 * @see https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bmi088-ds001.pdf
 * Keywords: Bosch-Sensortec inertial-measurement-unit IMU.
 * Default footprint: Package_LGA:Bosch_LGA-16_4.5x3mm_P0.5mm_LayoutBorder7x1y_ClockwisePinNumbering.
 */
export class BMI088 extends Component.withPins({
  "INT2": "1",
  "GNDA_2": "2",
  "VDD": "3",
  "GNDA_4": "4",
  "~{CSB2}": "5",
  "GNDIO": "6",
  "PS": "7",
  "SCK/SCL": "8",
  "SDI/SDA": "9",
  "SDO2": "10",
  "VDDIO": "11",
  "INT3": "12",
  "INT4": "13",
  "~{CSB1}": "14",
  "SDO1": "15",
  "INT1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { INT2: "bidirectional", GNDA_2: "passive", VDD: "power_in", GNDA_4: "power_in", "~{CSB2}": "input", GNDIO: "power_in", PS: "input", "SCK/SCL": "input", "SDI/SDA": "bidirectional", SDO2: "output", VDDIO: "power_in", INT3: "bidirectional", INT4: "bidirectional", "~{CSB1}": "input", SDO1: "output", INT1: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:BMI088";
  override referencePrefix = "U";
}

/**
 * Small, low power inertial measurement unit, LGA-14
 *
 * KiCad symbol: `Sensor_Motion:BMI160`. Reference prefix: `U`.
 * Footprint filters: Bosch*LGA*3x2.5mm*P0.5mm*.
 * @see https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bmi160-ds000.pdf
 * Keywords: Bosh IMU small low power inertial measurement unit.
 * Default footprint: Package_LGA:Bosch_LGA-14_3x2.5mm_P0.5mm.
 */
export class BMI160 extends Component.withPins({
  "SDO": "1",
  "ASDx": "2",
  "ASCx": "3",
  "INT1": "4",
  "VDDIO": "5",
  "GNDIO": "6",
  "GND": "7",
  "VDD": "8",
  "INT2": "9",
  "OCSB": "10",
  "OSDO": "11",
  "CSB": "12",
  "SCx": "13",
  "SDx": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDO: "bidirectional", ASDx: "bidirectional", ASCx: "output", INT1: "bidirectional", VDDIO: "power_in", GNDIO: "power_in", GND: "power_in", VDD: "power_in", INT2: "bidirectional", OCSB: "bidirectional", OSDO: "bidirectional", CSB: "input", SCx: "input", SDx: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:BMI160";
  override referencePrefix = "U";
}

/**
 * Intelligent 9-axis absolute orientation sensor, LGA-28
 *
 * KiCad symbol: `Sensor_Motion:BNO055`. Reference prefix: `U`.
 * Footprint filters: LGA*5.2x3.8mm*P0.5mm*.
 * @see https://www.bosch-sensortec.com/media/boschsensortec/downloads/datasheets/bst-bno055-ds000.pdf
 * Keywords: IMU Fusion I2C UART.
 * Default footprint: Package_LGA:LGA-28_5.2x3.8mm_P0.5mm.
 */
export class BNO055 extends Component.withPins({
  "PIN1": "1",
  "GND": "2",
  "VDD": "3",
  "~{BOOT_LOAD_PIN}": "4",
  "PS1": "5",
  "PS0": "6",
  "PIN7": "7",
  "PIN8": "8",
  "CAP": "9",
  "BL_IND": "10",
  "~{RESET}": "11",
  "PIN12": "12",
  "PIN13": "13",
  "INT": "14",
  "PIN15": "15",
  "PIN16": "16",
  "COM3": "17",
  "COM2": "18",
  "COM1": "19",
  "COM0": "20",
  "PIN21": "21",
  "PIN22": "22",
  "PIN23": "23",
  "PIN24": "24",
  "GNDIO": "25",
  "XOUT32": "26",
  "XIN32": "27",
  "VDDIO": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PIN1: "no_connect", GND: "power_in", VDD: "power_in", "~{BOOT_LOAD_PIN}": "input", PS1: "input", PS0: "input", PIN7: "no_connect", PIN8: "no_connect", CAP: "passive", BL_IND: "output", "~{RESET}": "input", PIN12: "no_connect", PIN13: "no_connect", INT: "output", PIN15: "no_connect", PIN16: "no_connect", COM3: "input", COM2: "passive", COM1: "bidirectional", COM0: "bidirectional", PIN21: "no_connect", PIN22: "no_connect", PIN23: "no_connect", PIN24: "no_connect", GNDIO: "power_in", XOUT32: "output", XIN32: "input", VDDIO: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:BNO055";
  override referencePrefix = "U";
}

/**
 * High performance 6-Axis MEMS motion tracking, SPI/I2C interface, LGA-16
 *
 * KiCad symbol: `Sensor_Motion:ICM-20602`. Reference prefix: `U`.
 * Footprint filters: LGA*3x3mm*P0.5mm*.
 * @see http://www.invensense.com/wp-content/uploads/2016/10/DS-000176-ICM-20602-v1.0.pdf
 * Keywords: accelerometer gyro mems motion.
 * Default footprint: Package_LGA:LGA-16_3x3mm_P0.5mm_LayoutBorder3x5y.
 */
export class ICM_20602 extends Component.withPins({
  "VDDIO": "1",
  "SCL/SPC": "2",
  "SDA/SDI": "3",
  "SAO/SD0": "4",
  "~{CS}": "5",
  "INT": "6",
  "RESV": "7",
  "FSYNC": "8",
  "GND_9": "9",
  "GND_10": "10",
  "GND_11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "REGOUT": "14",
  "GND_15": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDIO: "power_in", "SCL/SPC": "input", "SDA/SDI": "bidirectional", "SAO/SD0": "bidirectional", "~{CS}": "input", INT: "output", RESV: "no_connect", FSYNC: "input", GND_9: "power_in", GND_10: "passive", GND_11: "passive", GND_12: "passive", GND_13: "passive", REGOUT: "passive", GND_15: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:ICM-20602";
  override referencePrefix = "U";
}

/**
 * InvenSense 9-Axis Motion Sensor, Accelerometer, Gyroscope, Compass, I2C/SPI, QFN-24
 *
 * KiCad symbol: `Sensor_Motion:ICM-20948`. Reference prefix: `U`.
 * Footprint filters: InvenSense?QFN*3x3mm*P0.4mm*.
 * @see http://www.invensense.com/wp-content/uploads/2016/06/DS-000189-ICM-20948-v1.3.pdf
 * Keywords: mems magnetometer.
 * Default footprint: Sensor_Motion:InvenSense_QFN-24_3x3mm_P0.4mm.
 */
export class ICM_20948 extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "AUX_CL": "7",
  "VDDIO": "8",
  "SDO/AD0": "9",
  "REGOUT": "10",
  "FSYNC": "11",
  "INT1": "12",
  "VDD": "13",
  "NC_14": "14",
  "NC_15": "15",
  "NC_16": "16",
  "NC_17": "17",
  "GND_18": "18",
  "RESV": "19",
  "GND_20": "20",
  "AUX_DA": "21",
  "~{CS}": "22",
  "SCL/SCLK": "23",
  "SDA/SDI": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", NC_3: "no_connect", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", AUX_CL: "output", VDDIO: "power_in", "SDO/AD0": "bidirectional", REGOUT: "passive", FSYNC: "input", INT1: "output", VDD: "power_in", NC_14: "no_connect", NC_15: "no_connect", NC_16: "no_connect", NC_17: "no_connect", GND_18: "power_in", RESV: "no_connect", GND_20: "passive", AUX_DA: "bidirectional", "~{CS}": "input", "SCL/SCLK": "input", "SDA/SDI": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:ICM-20948";
  override referencePrefix = "U";
}

/**
 * 6-axis MEMS gyroscope/accelerometer, I2C/I3C/SPI interface, 1.71 to 3.3V, LGA-14
 *
 * KiCad symbol: `Sensor_Motion:IIM-42652`. Reference prefix: `U`.
 * Footprint filters: *LGA*3x2.5mm*P0.5mm*.
 * @see https://invensense.tdk.com/wp-content/uploads/2021/01/ds-000440_iim-42652-datasheet.pdf
 * Keywords: IMU 6-Axis.
 * Default footprint: Package_LGA:Bosch_LGA-14_3x2.5mm_P0.5mm.
 */
export class IIM_42652 extends Component.withPins({
  "AP_SDO/AP_AD0": "1",
  "RESV_2": "2",
  "RESV_3": "3",
  "INT1/INT": "4",
  "VDDIO": "5",
  "GND_6": "6",
  "GND_7": "7",
  "VDD": "8",
  "INT2/FSYNC/CLKIN": "9",
  "RESV_10": "10",
  "RESV_11": "11",
  "AP_CS": "12",
  "AP_SCL/AP_SCLK": "13",
  "AP_SDA/AP_SDIO/AP_SDI": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "AP_SDO/AP_AD0": "input", RESV_2: "no_connect", RESV_3: "no_connect", "INT1/INT": "output", VDDIO: "power_in", GND_6: "power_in", GND_7: "passive", VDD: "power_in", "INT2/FSYNC/CLKIN": "bidirectional", RESV_10: "no_connect", RESV_11: "no_connect", AP_CS: "input", "AP_SCL/AP_SCLK": "input", "AP_SDA/AP_SDIO/AP_SDI": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:IIM-42652";
  override referencePrefix = "U";
}

/**
 * Ultra-wide bandwidth, low-noise, 3-axis digital vibration sensor
 *
 * KiCad symbol: `Sensor_Motion:IIS3DWB`. Reference prefix: `U`.
 * Footprint filters: *LGA-14*3x2.5mm*P0.5mm*LayoutBorder3x4y*.
 * @see https://www.st.com/resource/en/datasheet/iis3dwb.pdf
 * Keywords: low-noise vibration sensor.
 * Default footprint: Package_LGA:LGA-14_3x2.5mm_P0.5mm_LayoutBorder3x4y.
 */
export class IIS3DWB extends Component.withPins({
  "SDO": "1",
  "GND_2": "2",
  "GND_3": "3",
  "INT1": "4",
  "VDD_IO": "5",
  "GND_6": "6",
  "GND_7": "7",
  "VDD": "8",
  "INT2": "9",
  "RES_10": "10",
  "RES_11": "11",
  "CS": "12",
  "SPC": "13",
  "SDI": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDO: "output", GND_2: "passive", GND_3: "passive", INT1: "output", VDD_IO: "power_in", GND_6: "power_in", GND_7: "passive", VDD: "power_in", INT2: "output", RES_10: "no_connect", RES_11: "no_connect", CS: "input", SPC: "input", SDI: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:IIS3DWB";
  override referencePrefix = "U";
}

/**
 * Inductive Position Sensor, TSSOP-16
 *
 * KiCad symbol: `Sensor_Motion:IPS2200`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.renesas.com/us/en/document/dst/ips2200-datasheet
 * Keywords: inductive position sensor.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class IPS2200 extends Component.withPins({
  "CSN_IRQN": "1",
  "RX1": "2",
  "RX2": "3",
  "RX3": "4",
  "RX4": "5",
  "TX1": "6",
  "TX2": "7",
  "VDDA": "8",
  "GND": "9",
  "VDD": "10",
  "OUT1": "11",
  "OUT2": "12",
  "OUT3": "13",
  "OUT4": "14",
  "SCK_SCL": "15",
  "SIO_SDA": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CSN_IRQN: "bidirectional", RX1: "input", RX2: "input", RX3: "input", RX4: "input", TX1: "bidirectional", TX2: "bidirectional", VDDA: "passive", GND: "power_in", VDD: "power_in", OUT1: "output", OUT2: "output", OUT3: "output", OUT4: "output", SCK_SCL: "input", SIO_SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:IPS2200";
  override referencePrefix = "U";
}

/**
 * iNEMO inertial module with embedded Machine Learning Core: always-on 3D accelerometer and 3D gyroscope with digital output for industrial applications, LGA-14
 *
 * KiCad symbol: `Sensor_Motion:ISM330DHCX`. Reference prefix: `U`.
 * Footprint filters: *LGA*3x2.5mm*P0.5mm*LayoutBorder3x4y*.
 * @see https://www.st.com/resource/en/datasheet/ism330dhcx.pdf
 * Keywords: ST iNEMO IMU.
 * Default footprint: Package_LGA:LGA-14_3x2.5mm_P0.5mm_LayoutBorder3x4y.
 */
export class ISM330DHCX extends Component.withPins({
  "SDO/SA0": "1",
  "SDx": "2",
  "SCx": "3",
  "INT1": "4",
  "VDDIO": "5",
  "GND_6": "6",
  "GND_7": "7",
  "VDD": "8",
  "INT2": "9",
  "OCS_AUX": "10",
  "SDO_AUX": "11",
  "CS": "12",
  "SCL": "13",
  "SDA": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SDO/SA0": "output", SDx: "bidirectional", SCx: "input", INT1: "output", VDDIO: "power_in", GND_6: "power_in", GND_7: "passive", VDD: "power_in", INT2: "output", OCS_AUX: "passive", SDO_AUX: "passive", CS: "input", SCL: "input", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:ISM330DHCX";
  override referencePrefix = "U";
}

/**
 * 3-Axis Accelerometer, 2/4/8g range, 256 byte buffer, I2C/SPI interface, LGA-12
 *
 * KiCad symbol: `Sensor_Motion:KX022-1020`. Reference prefix: `U`.
 * Footprint filters: LGA?12*2x2mm*P0.5mm*.
 * @see https://kionixfs.azureedge.net/en/datasheet/KX022-1020%20Specifications%20Rev%2012.0.pdf
 * Keywords: 3-axis accelerometer spi i2c mems.
 * Default footprint: Package_LGA:LGA-12_2x2mm_P0.5mm.
 */
export class KX022_1020 extends Component.withPins({
  "SDO/ADDR": "1",
  "SDI/SDA": "2",
  "IO_VDD": "3",
  "TRIG": "4",
  "INT1": "5",
  "INT2": "6",
  "VDD": "7",
  "GND": "9",
  "~{CS}": "10",
  "NC": "11",
  "SCLK/SCL": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SDO/ADDR": "bidirectional", "SDI/SDA": "bidirectional", IO_VDD: "power_in", TRIG: "input", INT1: "output", INT2: "output", VDD: "power_in", GND: "power_in", "~{CS}": "input", NC: "passive", "SCLK/SCL": "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:KX022-1020";
  override referencePrefix = "U";
}

/**
 * 3-Axis Accelerometer, 2/4/8g range, 2048 byte buffer, I2C/SPI interface, LGA-12
 *
 * KiCad symbol: `Sensor_Motion:KX122-1042`. Reference prefix: `U`.
 * Footprint filters: LGA*2x2mm*P0.5mm*.
 * @see http://kionixfs.kionix.com/en/datasheet/KX112-1042-Specifications-Rev-6.0.pdf
 * Keywords: 3-axis accelerometer spi i2c mems.
 * Default footprint: Package_LGA:LGA-12_2x2mm_P0.5mm.
 */
export class KX122_1042 extends Component.withPins({
  "SDO/ADDR": "1",
  "SDI/SDA": "2",
  "IO_VDD": "3",
  "TRIG": "4",
  "INT1": "5",
  "INT2": "6",
  "VDD": "7",
  "GND": "9",
  "~{CS}": "10",
  "NC": "11",
  "SCLK/SCL": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SDO/ADDR": "bidirectional", "SDI/SDA": "bidirectional", IO_VDD: "power_in", TRIG: "input", INT1: "output", INT2: "output", VDD: "power_in", GND: "power_in", "~{CS}": "input", NC: "passive", "SCLK/SCL": "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:KX122-1042";
  override referencePrefix = "U";
}

/**
 * 3-Axis Accelerometer, 8/16/32g range, 2048 byte buffer, I2C/SPI interface, LGA-12
 *
 * KiCad symbol: `Sensor_Motion:KX222-1054`. Reference prefix: `U`.
 * Footprint filters: LGA*2x2mm*P0.5mm*.
 * @see http://kionixfs.kionix.com/en/datasheet/KX222-1054-Specifications-Rev-2.0.pdf
 * Keywords: 3-axis accelerometer spi i2c mems.
 * Default footprint: Package_LGA:LGA-12_2x2mm_P0.5mm.
 */
export class KX222_1054 extends Component.withPins({
  "SDO/ADDR": "1",
  "SDI/SDA": "2",
  "IO_VDD": "3",
  "TRIG": "4",
  "INT1": "5",
  "INT2": "6",
  "VDD": "7",
  "GND": "9",
  "~{CS}": "10",
  "NC": "11",
  "SCLK/SCL": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SDO/ADDR": "bidirectional", "SDI/SDA": "bidirectional", IO_VDD: "power_in", TRIG: "input", INT1: "output", INT2: "output", VDD: "power_in", GND: "power_in", "~{CS}": "input", NC: "passive", "SCLK/SCL": "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:KX222-1054";
  override referencePrefix = "U";
}

/**
 * ±2g / 4g / 8g / 16g Tri-Axis Digital Accelerometer, I2C, 1.71-3.6V, LGA-12
 *
 * KiCad symbol: `Sensor_Motion:KXTJ3-1057`. Reference prefix: `U`.
 * Footprint filters: Kionix*LGA*2x2mm*P0.5mm*.
 * @see https://kionixfs.azureedge.net/en/datasheet/KXTJ3-1057-Specifications-Rev-5.0.pdf
 * Keywords: accelerometer tri-axis i2c.
 * Default footprint: Package_LGA:Kionix_LGA-12_2x2mm_P0.5mm_LayoutBorder2x4y.
 */
export class KXTJ3_1057 extends Component.withPins({
  "ADDR": "1",
  "SDA": "2",
  "IO_VDD_3": "3",
  "RES": "4",
  "INT": "5",
  "GND_6": "6",
  "VDD_7": "7",
  "GND_8": "8",
  "GND_9": "9",
  "VDD_10": "10",
  "IO_VDD_11": "11",
  "SCL": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ADDR: "input", SDA: "bidirectional", IO_VDD_3: "power_in", RES: "passive", INT: "output", GND_6: "power_in", VDD_7: "power_in", GND_8: "passive", GND_9: "passive", VDD_10: "passive", IO_VDD_11: "passive", SCL: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:KXTJ3-1057";
  override referencePrefix = "U";
}

/**
 * [Not recommended for new designs] 16-bit 3 Axis Digital MEMS Gyroscope, LGA-16
 *
 * KiCad symbol: `Sensor_Motion:L3GD20`. Reference prefix: `U`.
 * Footprint filters: LGA*4x4mm*P0.65mm*LayoutBorder4x4y*.
 * @see http://www.st.com/st-web-ui/static/active/en/resource/technical/document/datasheet/DM00036465.pdf
 * Keywords: 3-Axis MEMS Gyroscope.
 * Default footprint: Package_LGA:LGA-16_4x4mm_P0.65mm_LayoutBorder4x4y.
 */
export class L3GD20 extends Component.withPins({
  "VDDIO": "1",
  "SCL/SPC": "2",
  "SDA/SDI/SDO": "3",
  "SDO/SA0": "4",
  "CS": "5",
  "DRDY/INT2": "6",
  "INT1": "7",
  "RES(GND)_8": "8",
  "RES(GND)_9": "9",
  "RES(GND)_10": "10",
  "RES(GND)_11": "11",
  "RES(GND)_12": "12",
  "GND": "13",
  "RES(CAP)": "14",
  "RES(VDD)": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDIO: "power_in", "SCL/SPC": "input", "SDA/SDI/SDO": "bidirectional", "SDO/SA0": "output", CS: "input", "DRDY/INT2": "output", INT1: "output", "RES(GND)_8": "passive", "RES(GND)_9": "passive", "RES(GND)_10": "passive", "RES(GND)_11": "passive", "RES(GND)_12": "passive", GND: "power_in", "RES(CAP)": "passive", "RES(VDD)": "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:L3GD20";
  override referencePrefix = "U";
}

/**
 * 3-Axis Accelerometer, 2/4/8g range, I2C/SPI interface
 *
 * KiCad symbol: `Sensor_Motion:LIS2HH12`. Reference prefix: `U`.
 * Footprint filters: LGA*2x2mm*P0.5mm*.
 * @see www.st.com/resource/en/datasheet/lis2hh12.pdf
 * Keywords: 3-axis accelerometer spi mems.
 * Default footprint: Package_LGA:LGA-12_2x2mm_P0.5mm.
 */
export class LIS2HH12 extends Component.withPins({
  "SCL/SPC": "1",
  "~{CS}": "2",
  "SA0/SDO": "3",
  "SDA/SDI": "4",
  "RES": "5",
  "GND_6": "6",
  "GND_7": "7",
  "GND_8": "8",
  "Vdd": "9",
  "Vdd_IO": "10",
  "INT2": "11",
  "INT1": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SCL/SPC": "input", "~{CS}": "input", "SA0/SDO": "bidirectional", "SDA/SDI": "bidirectional", RES: "passive", GND_6: "power_in", GND_7: "passive", GND_8: "passive", Vdd: "power_in", Vdd_IO: "power_in", INT2: "output", INT1: "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:LIS2HH12";
  override referencePrefix = "U";
}

/**
 * 3-Axis Accelerometer, 2/4/8/16g range, I2C/SPI interface
 *
 * KiCad symbol: `Sensor_Motion:LIS2DE12`. Reference prefix: `U`.
 * Footprint filters: LGA*2x2mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/lis2DE12.pdf
 * Keywords: 3-axis accelerometer spi mems.
 * Default footprint: Package_LGA:LGA-12_2x2mm_P0.5mm.
 */
export class LIS2DE12 extends Component.withPins({
  "SCL/SPC": "1",
  "~{CS}": "2",
  "SA0/SDO": "3",
  "SDA/SDI": "4",
  "RES": "5",
  "GND_6": "6",
  "GND_7": "7",
  "GND_8": "8",
  "Vdd": "9",
  "Vdd_IO": "10",
  "INT2": "11",
  "INT1": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SCL/SPC": "input", "~{CS}": "input", "SA0/SDO": "bidirectional", "SDA/SDI": "bidirectional", RES: "passive", GND_6: "power_in", GND_7: "passive", GND_8: "passive", Vdd: "power_in", Vdd_IO: "power_in", INT2: "output", INT1: "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:LIS2DE12";
  override referencePrefix = "U";
}

/**
 * 3-Axis Accelerometer, 2/4/8/16g range, I2C/SPI interface, LGA-14
 *
 * KiCad symbol: `Sensor_Motion:LIS2DH`. Reference prefix: `U`.
 * Footprint filters: LGA*2x2mm*P0.35mm*LayoutBorder3x4y*.
 * @see http://www.st.com/web/en/resource/technical/document/datasheet/DM00042751.pdf
 * Keywords: 3-axis accelerometer spi mems LGA-14.
 * Default footprint: Package_LGA:LGA-14_2x2mm_P0.35mm_LayoutBorder3x4y.
 */
export class LIS2DH extends Component.withPins({
  "SCL/SPC": "1",
  "SDA/SDI": "2",
  "SDO": "3",
  "~{CS}": "4",
  "INT2": "5",
  "INT1": "6",
  "Vdd_IO": "7",
  "Vdd": "8",
  "GND_9": "9",
  "GND_10": "10",
  "GND_11": "11",
  "GND_12": "12",
  "GND_13": "13",
  "GND_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SCL/SPC": "input", "SDA/SDI": "bidirectional", SDO: "output", "~{CS}": "input", INT2: "output", INT1: "output", Vdd_IO: "power_in", Vdd: "power_in", GND_9: "power_in", GND_10: "passive", GND_11: "passive", GND_12: "passive", GND_13: "passive", GND_14: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:LIS2DH";
  override referencePrefix = "U";
}

/**
 * 3-Axis Accelerometer, 6/12/24g range, 1000Hz, I2C and SPI interface
 *
 * KiCad symbol: `Sensor_Motion:LIS331HH`. Reference prefix: `U`.
 * Footprint filters: LGA*3x3mm*P0.5mm*LayoutBorder3x5y*.
 * @see https://media.digikey.com/pdf/Data%20Sheets/ST%20Microelectronics%20PDFS/LIS331HH.pdf
 * Keywords: 3-axis accelerometer spi i2c mems.
 * Default footprint: Package_LGA:LGA-16_3x3mm_P0.5mm_LayoutBorder3x5y.
 */
export class LIS331HH extends Component.withPins({
  "Vdd_IO": "1",
  "NC_2": "2",
  "NC_3": "3",
  "SCL/SPC": "4",
  "GND_5": "5",
  "SDA/SDI": "6",
  "SA0/SDO": "7",
  "~{CS}": "8",
  "INT2": "9",
  "GND_10": "10",
  "INT1": "11",
  "GND_12": "12",
  "GND_13": "13",
  "Vdd_14": "14",
  "Vdd_15": "15",
  "GND_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vdd_IO: "power_in", NC_2: "no_connect", NC_3: "no_connect", "SCL/SPC": "input", GND_5: "power_in", "SDA/SDI": "bidirectional", "SA0/SDO": "output", "~{CS}": "input", INT2: "output", GND_10: "passive", INT1: "output", GND_12: "passive", GND_13: "passive", Vdd_14: "power_in", Vdd_15: "passive", GND_16: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:LIS331HH";
  override referencePrefix = "U";
}

/**
 * 3-Axis Accelerometer, 2/4/8/16g range, I2C/SPI interface, LGA-16
 *
 * KiCad symbol: `Sensor_Motion:LIS3DH`. Reference prefix: `U`.
 * Footprint filters: LGA*3x3mm*P0.5mm*LayoutBorder3x5y*.
 * @see https://www.st.com/resource/en/datasheet/cd00274221.pdf
 * Keywords: 3-axis accelerometer i2c spi mems.
 * Default footprint: Package_LGA:LGA-16_3x3mm_P0.5mm_LayoutBorder3x5y.
 */
export class LIS3DH extends Component.withPins({
  "VDD_IO": "1",
  "NC_2": "2",
  "NC_3": "3",
  "SPC": "4",
  "GND_5": "5",
  "SDI": "6",
  "SDO": "7",
  "CS": "8",
  "INT2": "9",
  "GND_10": "10",
  "INT1": "11",
  "GND_12": "12",
  "ADC3": "13",
  "VDD": "14",
  "ADC2": "15",
  "ADC1": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD_IO: "power_in", NC_2: "no_connect", NC_3: "no_connect", SPC: "input", GND_5: "power_in", SDI: "input", SDO: "output", CS: "input", INT2: "output", GND_10: "passive", INT1: "output", GND_12: "passive", ADC3: "input", VDD: "power_in", ADC2: "input", ADC1: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:LIS3DH";
  override referencePrefix = "U";
}

/**
 * I2C/SPI, 3D Accelerometer and 3D Magnetometer
 *
 * KiCad symbol: `Sensor_Motion:LSM303C`. Reference prefix: `U`.
 * Footprint filters: LGA*2x2mm*P0.5mm*.
 * @see www.st.com/resource/en/datasheet/lsm303c.pdf
 * Keywords: Accelerometer Magnetometer MEMS.
 * Default footprint: Package_LGA:LGA-12_2x2mm_P0.5mm.
 */
export class LSM303C extends Component.withPins({
  "SCL/SPC": "1",
  "CS_XL": "2",
  "CS_MAG": "3",
  "SDA/SDI/SDO": "4",
  "C1": "5",
  "GND_6": "6",
  "INT_MAG": "7",
  "GND_8": "8",
  "VDD": "9",
  "VDDIO": "10",
  "DRDY_MAG": "11",
  "INT_XL": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SCL/SPC": "input", CS_XL: "input", CS_MAG: "input", "SDA/SDI/SDO": "bidirectional", C1: "passive", GND_6: "power_in", INT_MAG: "output", GND_8: "passive", VDD: "power_in", VDDIO: "power_in", DRDY_MAG: "output", INT_XL: "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:LSM303C";
  override referencePrefix = "U";
}

/**
 * [not recommended for new designs] I2C/SPI, 3D Accelerometer and 3D Magnetometer
 *
 * KiCad symbol: `Sensor_Motion:LSM303D`. Reference prefix: `U`.
 * Footprint filters: LGA*.
 * @see http://www.st.com/web/en/resource/technical/document/datasheet/DM00057547.pdf
 * Keywords: Accelerometer Magnetometer MEMS.
 * Default footprint: Package_LGA:LGA-16_3x3mm_P0.5mm.
 */
export class LSM303D extends Component.withPins({
  "VDDIO": "1",
  "SETC": "2",
  "SETP": "3",
  "SCL/SPC": "4",
  "GND_5": "5",
  "SDA/SDI/SDO": "6",
  "SDO/SAO": "7",
  "CS": "8",
  "INT2": "9",
  "GND_10": "10",
  "INT1": "11",
  "GND_12": "12",
  "GND_13": "13",
  "VDD": "14",
  "C1": "15",
  "GND_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDIO: "power_in", SETC: "passive", SETP: "passive", "SCL/SPC": "input", GND_5: "power_in", "SDA/SDI/SDO": "bidirectional", "SDO/SAO": "output", CS: "input", INT2: "output", GND_10: "passive", INT1: "output", GND_12: "passive", GND_13: "passive", VDD: "power_in", C1: "passive", GND_16: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:LSM303D";
  override referencePrefix = "U";
}

/**
 * [not recommended for new designs] I2C, 3D Accelerometer and 3D Magnetometer
 *
 * KiCad symbol: `Sensor_Motion:LSM303DLHC`. Reference prefix: `U`.
 * Footprint filters: LGA*3x5mm*P0.8mm*LayoutBorder1x6y*.
 * @see http://www.st.com/web/en/resource/technical/document/datasheet/DM00027543.pdf
 * Keywords: Accelerometer Magnetometer MEMS.
 * Default footprint: Package_LGA:LGA-14_3x5mm_P0.8mm_LayoutBorder1x6y.
 */
export class LSM303DLHC extends Component.withPins({
  "VDDIO": "1",
  "SCL": "2",
  "SDA": "3",
  "INT2": "4",
  "INT1": "5",
  "C1": "6",
  "GND_7": "7",
  "NC": "8",
  "DRDY": "9",
  "GND_10": "10",
  "GND_11": "11",
  "SETP": "12",
  "SETC": "13",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDIO: "power_in", SCL: "input", SDA: "bidirectional", INT2: "output", INT1: "output", C1: "passive", GND_7: "power_in", NC: "no_connect", DRDY: "output", GND_10: "passive", GND_11: "passive", SETP: "passive", SETC: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:LSM303DLHC";
  override referencePrefix = "U";
}

/**
 * I2C/SPI, iNEMO inertial module: always-on 3D accelerometer and 3D gyroscope
 *
 * KiCad symbol: `Sensor_Motion:LSM6DS3`. Reference prefix: `U`.
 * Footprint filters: LGA*3x2.5mm*P0.5mm*LayoutBorder3x4y*.
 * @see https://www.st.com/resource/en/datasheet/lsm6ds3tr-c.pdf
 * Keywords: Accelerometer Gyroscope MEMS.
 * Default footprint: Package_LGA:LGA-14_3x2.5mm_P0.5mm_LayoutBorder3x4y.
 */
export class LSM6DS3 extends Component.withPins({
  "SDO/SA0": "1",
  "SDX": "2",
  "SCX": "3",
  "INT1": "4",
  "VDDIO": "5",
  "GND_6": "6",
  "GND_7": "7",
  "VDD": "8",
  "INT2": "9",
  "NC_10": "10",
  "NC_11": "11",
  "CS": "12",
  "SCL": "13",
  "SDA": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SDO/SA0": "bidirectional", SDX: "bidirectional", SCX: "input", INT1: "output", VDDIO: "power_in", GND_6: "power_in", GND_7: "passive", VDD: "power_in", INT2: "output", NC_10: "no_connect", NC_11: "no_connect", CS: "input", SCL: "input", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:LSM6DS3";
  override referencePrefix = "U";
}

/**
 * I2C/SPI, iNEMO inertial module: always-on 3D accelerometer and 3D gyroscope, 1.71V to 3.6V VCC
 *
 * KiCad symbol: `Sensor_Motion:LSM6DSL`. Reference prefix: `U`.
 * Footprint filters: LGA*3x2.5mm*P0.5mm*LayoutBorder3x4y*.
 * @see https://www.st.com/resource/en/datasheet/lsm6dsl.pdf
 * Keywords: Accelerometer Gyroscope MEMS.
 * Default footprint: Package_LGA:LGA-14_3x2.5mm_P0.5mm_LayoutBorder3x4y.
 */
export class LSM6DSL extends Component.withPins({
  "SDO/SA0": "1",
  "SDX": "2",
  "SCX": "3",
  "INT1": "4",
  "VDDIO": "5",
  "GND_6": "6",
  "GND_7": "7",
  "VDD": "8",
  "INT2": "9",
  "NC_10": "10",
  "NC_11": "11",
  "CS": "12",
  "SCL": "13",
  "SDA": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SDO/SA0": "bidirectional", SDX: "bidirectional", SCX: "input", INT1: "output", VDDIO: "power_in", GND_6: "power_in", GND_7: "passive", VDD: "power_in", INT2: "output", NC_10: "no_connect", NC_11: "no_connect", CS: "input", SCL: "input", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:LSM6DSL";
  override referencePrefix = "U";
}

/**
 * I2C/SPI, iNEMO inertial module: always-on 3D accelerometer and 3D gyroscope, with auxiliary SPI, 1.71V to 3.6V VCC
 *
 * KiCad symbol: `Sensor_Motion:LSM6DSM`. Reference prefix: `U`.
 * Footprint filters: LGA*3x2.5mm*P0.5mm*LayoutBorder3x4y*.
 * @see https://www.st.com/resource/en/datasheet/lsm6dsm.pdf
 * Keywords: Accelerometer Gyroscope MEMS.
 * Default footprint: Package_LGA:LGA-14_3x2.5mm_P0.5mm_LayoutBorder3x4y.
 */
export class LSM6DSM extends Component.withPins({
  "SDO/SA0": "1",
  "SDX": "2",
  "SCX": "3",
  "INT1": "4",
  "VDDIO": "5",
  "GND_6": "6",
  "GND_7": "7",
  "VDD": "8",
  "INT2": "9",
  "OCS_Aux": "10",
  "SDO_Aux": "11",
  "CS": "12",
  "SCL": "13",
  "SDA": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SDO/SA0": "bidirectional", SDX: "bidirectional", SCX: "input", INT1: "output", VDDIO: "power_in", GND_6: "power_in", GND_7: "passive", VDD: "power_in", INT2: "output", OCS_Aux: "passive", SDO_Aux: "bidirectional", CS: "input", SCL: "input", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:LSM6DSM";
  override referencePrefix = "U";
}

/**
 * I2C SPI 9 axis IMU accelerometer gyroscope magnetometer
 *
 * KiCad symbol: `Sensor_Motion:LSM9DS1`. Reference prefix: `U`.
 * Footprint filters: LGA*3x3.5mm*P0.43mm*.
 * @see https://www.digikey.com/htmldatasheets/production/1639232/0/0/1/LSM9DS1-Datasheet.pdf
 * Keywords: I2C SPI IMU accelerometer gyroscope magnetometer.
 * Default footprint: Package_LGA:LGA-24L_3x3.5mm_P0.43mm.
 */
export class LSM9DS1 extends Component.withPins({
  "VDDIO_1": "1",
  "SCL/SPC": "2",
  "VDDIO_3": "3",
  "SDA/SDI/SDO": "4",
  "SDO_A/G": "5",
  "SDO_M": "6",
  "CS_A/G": "7",
  "CS_M": "8",
  "DRDY_M": "9",
  "INT_M": "10",
  "INT1_A/G": "11",
  "INT2_A/G": "12",
  "DEN_A/G": "13",
  "RES_14": "14",
  "RES_15": "15",
  "RES_16": "16",
  "RES_17": "17",
  "RES_18": "18",
  "GND_19": "19",
  "GND_20": "20",
  "CAP": "21",
  "VDD_22": "22",
  "VDD_23": "23",
  "C1": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDDIO_1: "power_in", "SCL/SPC": "input", VDDIO_3: "passive", "SDA/SDI/SDO": "bidirectional", "SDO_A/G": "output", SDO_M: "output", "CS_A/G": "input", CS_M: "input", DRDY_M: "output", INT_M: "output", "INT1_A/G": "output", "INT2_A/G": "output", "DEN_A/G": "input", RES_14: "bidirectional", RES_15: "bidirectional", RES_16: "bidirectional", RES_17: "bidirectional", RES_18: "bidirectional", GND_19: "power_in", GND_20: "passive", CAP: "passive", VDD_22: "power_in", VDD_23: "passive", C1: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:LSM9DS1";
  override referencePrefix = "U";
}

/**
 * 3-Axis 10-bit Digital Accelerometer with I2C interface
 *
 * KiCad symbol: `Sensor_Motion:MMA8653FCR1`. Reference prefix: `U`.
 * Footprint filters: DFN*2x2mm*P0.4mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MMA8653FC.pdf
 * Keywords: Accelerometer I2C.
 * Default footprint: Package_DFN_QFN:DFN-10_2x2mm_P0.4mm.
 */
export class MMA8653FCR1 extends Component.withPins({
  "VDD": "1",
  "SCL": "2",
  "INT1": "3",
  "BYP": "4",
  "INT2": "5",
  "GND_6": "6",
  "GND_7": "7",
  "VDDIO": "8",
  "GND_9": "9",
  "SDA": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", SCL: "input", INT1: "output", BYP: "input", INT2: "output", GND_6: "power_in", GND_7: "passive", VDDIO: "power_in", GND_9: "passive", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:MMA8653FCR1";
  override referencePrefix = "U";
}

/**
 * InvenSense 6-Axis Motion Sensor, Gyroscope, Accelerometer, I2C/SPI
 *
 * KiCad symbol: `Sensor_Motion:MPU-6000`. Reference prefix: `U`.
 * Footprint filters: *QFN?24*4x4mm*P0.5mm*.
 * @see https://invensense.tdk.com/wp-content/uploads/2015/02/MPU-6000-Datasheet1.pdf
 * Keywords: mems.
 * Default footprint: Sensor_Motion:InvenSense_QFN-24_4x4mm_P0.5mm.
 */
export class MPU_6000 extends Component.withPins({
  "CLKIN": "1",
  "AUX_DA": "6",
  "AUX_CL": "7",
  "~{CS}": "8",
  "AD0/MISO": "9",
  "REGOUT": "10",
  "FSYNC": "11",
  "INT": "12",
  "VDD": "13",
  "GND": "18",
  "CPOUT": "20",
  "SCL/SCLK": "23",
  "SDA/MOSI": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CLKIN: "input", AUX_DA: "bidirectional", AUX_CL: "output", "~{CS}": "input", "AD0/MISO": "bidirectional", REGOUT: "passive", FSYNC: "input", INT: "output", VDD: "power_in", GND: "power_in", CPOUT: "passive", "SCL/SCLK": "input", "SDA/MOSI": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:MPU-6000";
  override referencePrefix = "U";
}

/**
 * InvenSense 6-Axis Motion Sensor, Gyroscope, Accelerometer, I2C
 *
 * KiCad symbol: `Sensor_Motion:MPU-6050`. Reference prefix: `U`.
 * Footprint filters: *QFN*4x4mm*P0.5mm*.
 * @see https://invensense.tdk.com/wp-content/uploads/2015/02/MPU-6000-Datasheet1.pdf
 * Keywords: mems.
 * Default footprint: Sensor_Motion:InvenSense_QFN-24_4x4mm_P0.5mm.
 */
export class MPU_6050 extends Component.withPins({
  "CLKIN": "1",
  "NC_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "AUX_DA": "6",
  "AUX_CL": "7",
  "VLOGIC": "8",
  "AD0": "9",
  "REGOUT": "10",
  "FSYNC": "11",
  "INT": "12",
  "VDD": "13",
  "NC_14": "14",
  "NC_15": "15",
  "NC_16": "16",
  "NC_17": "17",
  "GND": "18",
  "RESV_19": "19",
  "CPOUT": "20",
  "RESV_21": "21",
  "RESV_22": "22",
  "SCL": "23",
  "SDA": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CLKIN: "input", NC_2: "no_connect", NC_3: "no_connect", NC_4: "no_connect", NC_5: "no_connect", AUX_DA: "bidirectional", AUX_CL: "output", VLOGIC: "power_in", AD0: "input", REGOUT: "passive", FSYNC: "input", INT: "output", VDD: "power_in", NC_14: "no_connect", NC_15: "no_connect", NC_16: "no_connect", NC_17: "no_connect", GND: "power_in", RESV_19: "no_connect", CPOUT: "passive", RESV_21: "no_connect", RESV_22: "no_connect", SCL: "input", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:MPU-6050";
  override referencePrefix = "U";
}

/**
 * InvenSense 9-Axis Motion Sensor, Accelerometer, Gyroscope, Compass, I2C
 *
 * KiCad symbol: `Sensor_Motion:MPU-9150`. Reference prefix: `U`.
 * Footprint filters: *QFN?24*4x4mm*P0.5mm*.
 * @see https://www.invensense.com/wp-content/uploads/2015/02/MPU-9150-Datasheet.pdf
 * Keywords: mems magnetometer accelerometer gyroscope.
 * Default footprint: Sensor_Motion:InvenSense_QFN-24_4x4mm_P0.5mm.
 */
export class MPU_9150 extends Component.withPins({
  "CLKIN": "1",
  "VDD_3": "3",
  "ES_DA": "6",
  "ES_CL": "7",
  "VLOGIC": "8",
  "AD0": "9",
  "REGOUT": "10",
  "FSYNC": "11",
  "INT": "12",
  "VDD_13": "13",
  "GND_15": "15",
  "GND_17": "17",
  "GND_18": "18",
  "CPOUT": "20",
  "SCL": "23",
  "SDA": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CLKIN: "input", VDD_3: "power_in", ES_DA: "bidirectional", ES_CL: "output", VLOGIC: "power_in", AD0: "input", REGOUT: "passive", FSYNC: "input", INT: "output", VDD_13: "power_in", GND_15: "power_in", GND_17: "passive", GND_18: "passive", CPOUT: "passive", SCL: "input", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:MPU-9150";
  override referencePrefix = "U";
}

/**
 * InvenSense 9-Axis Motion Sensor, Accelerometer, Gyroscope, Compass, I2C/SPI
 *
 * KiCad symbol: `Sensor_Motion:MPU-9250`. Reference prefix: `U`.
 * Footprint filters: *QFN?24*3x3mm*P0.4mm*.
 * @see https://invensense.tdk.com/wp-content/uploads/2015/02/PS-MPU-9250A-01-v1.1.pdf
 * Keywords: mems magnetometer.
 * Default footprint: Sensor_Motion:InvenSense_QFN-24_3x3mm_P0.4mm.
 */
export class MPU_9250 extends Component.withPins({
  "RESV_VDDIO": "1",
  "AUX_CL": "7",
  "VDDIO": "8",
  "AD0/MISO": "9",
  "REGOUT": "10",
  "FSYNC": "11",
  "INT": "12",
  "VDD": "13",
  "GND": "18",
  "RESV_GND": "20",
  "AUX_DA": "21",
  "~{CS}": "22",
  "SCL/SCLK": "23",
  "SDA/MOSI": "24",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RESV_VDDIO: "input", AUX_CL: "output", VDDIO: "power_in", "AD0/MISO": "bidirectional", REGOUT: "passive", FSYNC: "input", INT: "output", VDD: "power_in", GND: "power_in", RESV_GND: "power_in", AUX_DA: "bidirectional", "~{CS}": "input", "SCL/SCLK": "input", "SDA/MOSI": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:MPU-9250";
  override referencePrefix = "U";
}

/**
 * 3-Axis Accelerometer, 2/4/8g/16g range, I2C/SPI interface, LGA-12
 *
 * KiCad symbol: `Sensor_Motion:SC7A20`. Reference prefix: `U`.
 * Footprint filters: LGA?12*2x2mm*P0.5mm*.
 * @see https://www.silan.com.cn/en/product/details/47.html
 * Keywords: 3-axis accelerometer spi i2c mems.
 * Default footprint: Package_LGA:LGA-12_2x2mm_P0.5mm.
 */
export class SC7A20 extends Component.withPins({
  "SDO": "1",
  "SDx": "2",
  "VDDIO": "3",
  "NC_4": "4",
  "INT1": "5",
  "INT2": "6",
  "VDD": "7",
  "GNDIO": "8",
  "GND": "9",
  "~{CS}": "10",
  "NC_11": "11",
  "SCx": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDO: "bidirectional", SDx: "bidirectional", VDDIO: "power_in", NC_4: "passive", INT1: "output", INT2: "output", VDD: "power_in", GNDIO: "power_in", GND: "power_in", "~{CS}": "input", NC_11: "passive", SCx: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Motion:SC7A20";
  override referencePrefix = "U";
}
