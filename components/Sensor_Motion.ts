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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADXL343 extends Component.withPins({
  /** Physical pin 1: Vdd_I/O; power_in. */
  "Vdd_I/O": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: RES; passive. */
  "RES_3": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: Vs; power_in. */
  "Vs": "6",
  /** Physical pin 7: ~{CS}; input. */
  "~{CS}": "7",
  /** Physical pin 8: INT1; output. */
  "INT1": "8",
  /** Physical pin 9: INT2; output. */
  "INT2": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC": "10",
  /** Physical pin 11: RES; passive. */
  "RES_11": "11",
  /** Physical pin 12: SDO/ADDR; bidirectional. */
  "SDO/ADDR": "12",
  /** Physical pin 13: SDA/SDI/SDIO; bidirectional. */
  "SDA/SDI/SDIO": "13",
  /** Physical pin 14: SCL/SCLK; input. */
  "SCL/SCLK": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADXL363 extends Component.withPins({
  /** Physical pin 1: V_{DD_I/O}; power_in. */
  "V_{DD_I/O}": "1",
  /** Physical pin 3: RES; passive. */
  "RES_3": "3",
  /** Physical pin 4: SCLK; input. */
  "SCLK": "4",
  /** Physical pin 5: ADC_IN; input. */
  "ADC_IN": "5",
  /** Physical pin 6: MOSI; input. */
  "MOSI": "6",
  /** Physical pin 7: MISO; output. */
  "MISO": "7",
  /** Physical pin 8: ~{CS}; input. */
  "~{CS}": "8",
  /** Physical pin 9: INT2; output. */
  "INT2": "9",
  /** Physical pin 10: RES; passive. */
  "RES_10": "10",
  /** Physical pin 11: INT1; output. */
  "INT1": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: V_{S}; power_in. */
  "V_{S}": "14",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BMF055 extends Component.withPins({
  /** Physical pin 1: PB03(ACC_GYRO_INT2); bidirectional. */
  "PB03(ACC_GYRO_INT2)": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: PB02; bidirectional. */
  "PB02": "4",
  /** Physical pin 5: PB01; bidirectional. */
  "PB01": "5",
  /** Physical pin 6: PB00; bidirectional. */
  "PB00": "6",
  /** Physical pin 7: (SWDIO)PA31; bidirectional. */
  "(SWDIO)PA31": "7",
  /** Physical pin 8: (SWCLK)PA30; bidirectional. */
  "(SWCLK)PA30": "8",
  /** Physical pin 9: CAP; bidirectional. */
  "CAP": "9",
  /** Physical pin 10: PA28; bidirectional. */
  "PA28": "10",
  /** Physical pin 11: ~{RESET}; input. */
  "~{RESET}": "11",
  /** Physical pin 12: (GYRO_CSB)PA27; bidirectional. */
  "(GYRO_CSB)PA27": "12",
  /** Physical pin 13: PB23(ACC_GYRO_INT1); bidirectional. */
  "PB23(ACC_GYRO_INT1)": "13",
  /** Physical pin 14: PA24; input. */
  "PA24": "14",
  /** Physical pin 15: PA23; bidirectional. */
  "PA23": "15",
  /** Physical pin 16: PA22; bidirectional. */
  "PA22": "16",
  /** Physical pin 17: PA21; bidirectional. */
  "PA21": "17",
  /** Physical pin 18: PA20; bidirectional. */
  "PA20": "18",
  /** Physical pin 19: PB17; bidirectional. */
  "PB17": "19",
  /** Physical pin 20: PB16; bidirectional. */
  "PB16": "20",
  /** Physical pin 21: (MISO)PA19; bidirectional. */
  "(MISO)PA19": "21",
  /** Physical pin 22: (ACC_MAG_CSB)PA18; bidirectional. */
  "(ACC_MAG_CSB)PA18": "22",
  /** Physical pin 23: (SCLK)PA17; bidirectional. */
  "(SCLK)PA17": "23",
  /** Physical pin 24: (MOSI)PA16; bidirectional. */
  "(MOSI)PA16": "24",
  /** Physical pin 25: GNDIO; power_in. */
  "GNDIO": "25",
  /** Physical pin 26: PA01; bidirectional. */
  "PA01": "26",
  /** Physical pin 27: PA00; bidirectional. */
  "PA00": "27",
  /** Physical pin 28: VDDIO; power_in. */
  "VDDIO": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BMI088 extends Component.withPins({
  /** Physical pin 1: INT2; bidirectional. */
  "INT2": "1",
  /** Physical pin 2: GNDA; passive. */
  "GNDA_2": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: GNDA; power_in. */
  "GNDA_4": "4",
  /** Physical pin 5: ~{CSB2}; input. */
  "~{CSB2}": "5",
  /** Physical pin 6: GNDIO; power_in. */
  "GNDIO": "6",
  /** Physical pin 7: PS; input. */
  "PS": "7",
  /** Physical pin 8: SCK/SCL; input. */
  "SCK/SCL": "8",
  /** Physical pin 9: SDI/SDA; bidirectional. */
  "SDI/SDA": "9",
  /** Physical pin 10: SDO2; output. */
  "SDO2": "10",
  /** Physical pin 11: VDDIO; power_in. */
  "VDDIO": "11",
  /** Physical pin 12: INT3; bidirectional. */
  "INT3": "12",
  /** Physical pin 13: INT4; bidirectional. */
  "INT4": "13",
  /** Physical pin 14: ~{CSB1}; input. */
  "~{CSB1}": "14",
  /** Physical pin 15: SDO1; output. */
  "SDO1": "15",
  /** Physical pin 16: INT1; bidirectional. */
  "INT1": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BMI160 extends Component.withPins({
  /** Physical pin 1: SDO; bidirectional. */
  "SDO": "1",
  /** Physical pin 2: ASDx; bidirectional. */
  "ASDx": "2",
  /** Physical pin 3: ASCx; output. */
  "ASCx": "3",
  /** Physical pin 4: INT1; bidirectional. */
  "INT1": "4",
  /** Physical pin 5: VDDIO; power_in. */
  "VDDIO": "5",
  /** Physical pin 6: GNDIO; power_in. */
  "GNDIO": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: INT2; bidirectional. */
  "INT2": "9",
  /** Physical pin 10: OCSB; bidirectional. */
  "OCSB": "10",
  /** Physical pin 11: OSDO; bidirectional. */
  "OSDO": "11",
  /** Physical pin 12: CSB; input. */
  "CSB": "12",
  /** Physical pin 13: SCx; input. */
  "SCx": "13",
  /** Physical pin 14: SDx; bidirectional. */
  "SDx": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BNO055 extends Component.withPins({
  /** Physical pin 1: PIN1; no_connect. */
  "PIN1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: ~{BOOT_LOAD_PIN}; input. */
  "~{BOOT_LOAD_PIN}": "4",
  /** Physical pin 5: PS1; input. */
  "PS1": "5",
  /** Physical pin 6: PS0; input. */
  "PS0": "6",
  /** Physical pin 7: PIN7; no_connect. */
  "PIN7": "7",
  /** Physical pin 8: PIN8; no_connect. */
  "PIN8": "8",
  /** Physical pin 9: CAP; passive. */
  "CAP": "9",
  /** Physical pin 10: BL_IND; output. */
  "BL_IND": "10",
  /** Physical pin 11: ~{RESET}; input. */
  "~{RESET}": "11",
  /** Physical pin 12: PIN12; no_connect. */
  "PIN12": "12",
  /** Physical pin 13: PIN13; no_connect. */
  "PIN13": "13",
  /** Physical pin 14: INT; output. */
  "INT": "14",
  /** Physical pin 15: PIN15; no_connect. */
  "PIN15": "15",
  /** Physical pin 16: PIN16; no_connect. */
  "PIN16": "16",
  /** Physical pin 17: COM3; input. */
  "COM3": "17",
  /** Physical pin 18: COM2; passive. */
  "COM2": "18",
  /** Physical pin 19: COM1; bidirectional. */
  "COM1": "19",
  /** Physical pin 20: COM0; bidirectional. */
  "COM0": "20",
  /** Physical pin 21: PIN21; no_connect. */
  "PIN21": "21",
  /** Physical pin 22: PIN22; no_connect. */
  "PIN22": "22",
  /** Physical pin 23: PIN23; no_connect. */
  "PIN23": "23",
  /** Physical pin 24: PIN24; no_connect. */
  "PIN24": "24",
  /** Physical pin 25: GNDIO; power_in. */
  "GNDIO": "25",
  /** Physical pin 26: XOUT32; output. */
  "XOUT32": "26",
  /** Physical pin 27: XIN32; input. */
  "XIN32": "27",
  /** Physical pin 28: VDDIO; power_in. */
  "VDDIO": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ICM_20602 extends Component.withPins({
  /** Physical pin 1: VDDIO; power_in. */
  "VDDIO": "1",
  /** Physical pin 2: SCL/SPC; input. */
  "SCL/SPC": "2",
  /** Physical pin 3: SDA/SDI; bidirectional. */
  "SDA/SDI": "3",
  /** Physical pin 4: SAO/SD0; bidirectional. */
  "SAO/SD0": "4",
  /** Physical pin 5: ~{CS}; input. */
  "~{CS}": "5",
  /** Physical pin 6: INT; output. */
  "INT": "6",
  /** Physical pin 7: RESV; no_connect. */
  "RESV": "7",
  /** Physical pin 8: FSYNC; input. */
  "FSYNC": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: REGOUT; passive. */
  "REGOUT": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ICM_20948 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: AUX_CL; output. */
  "AUX_CL": "7",
  /** Physical pin 8: VDDIO; power_in. */
  "VDDIO": "8",
  /** Physical pin 9: SDO/AD0; bidirectional. */
  "SDO/AD0": "9",
  /** Physical pin 10: REGOUT; passive. */
  "REGOUT": "10",
  /** Physical pin 11: FSYNC; input. */
  "FSYNC": "11",
  /** Physical pin 12: INT1; output. */
  "INT1": "12",
  /** Physical pin 13: VDD; power_in. */
  "VDD": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: GND; power_in. */
  "GND_18": "18",
  /** Physical pin 19: RESV; no_connect. */
  "RESV": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: AUX_DA; bidirectional. */
  "AUX_DA": "21",
  /** Physical pin 22: ~{CS}; input. */
  "~{CS}": "22",
  /** Physical pin 23: SCL/SCLK; input. */
  "SCL/SCLK": "23",
  /** Physical pin 24: SDA/SDI; bidirectional. */
  "SDA/SDI": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IIM_42652 extends Component.withPins({
  /** Physical pin 1: AP_SDO/AP_AD0; input. */
  "AP_SDO/AP_AD0": "1",
  /** Physical pin 2: RESV; no_connect. */
  "RESV_2": "2",
  /** Physical pin 3: RESV; no_connect. */
  "RESV_3": "3",
  /** Physical pin 4: INT1/INT; output. */
  "INT1/INT": "4",
  /** Physical pin 5: VDDIO; power_in. */
  "VDDIO": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: INT2/FSYNC/CLKIN; bidirectional. */
  "INT2/FSYNC/CLKIN": "9",
  /** Physical pin 10: RESV; no_connect. */
  "RESV_10": "10",
  /** Physical pin 11: RESV; no_connect. */
  "RESV_11": "11",
  /** Physical pin 12: AP_CS; input. */
  "AP_CS": "12",
  /** Physical pin 13: AP_SCL/AP_SCLK; input. */
  "AP_SCL/AP_SCLK": "13",
  /** Physical pin 14: AP_SDA/AP_SDIO/AP_SDI; bidirectional. */
  "AP_SDA/AP_SDIO/AP_SDI": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IIS3DWB extends Component.withPins({
  /** Physical pin 1: SDO; output. */
  "SDO": "1",
  /** Physical pin 2: GND; passive. */
  "GND_2": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: INT1; output. */
  "INT1": "4",
  /** Physical pin 5: VDD_IO; power_in. */
  "VDD_IO": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: INT2; output. */
  "INT2": "9",
  /** Physical pin 10: RES; no_connect. */
  "RES_10": "10",
  /** Physical pin 11: RES; no_connect. */
  "RES_11": "11",
  /** Physical pin 12: CS; input. */
  "CS": "12",
  /** Physical pin 13: SPC; input. */
  "SPC": "13",
  /** Physical pin 14: SDI; input. */
  "SDI": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IPS2200 extends Component.withPins({
  /** Physical pin 1: CSN_IRQN; bidirectional. */
  "CSN_IRQN": "1",
  /** Physical pin 2: RX1; input. */
  "RX1": "2",
  /** Physical pin 3: RX2; input. */
  "RX2": "3",
  /** Physical pin 4: RX3; input. */
  "RX3": "4",
  /** Physical pin 5: RX4; input. */
  "RX4": "5",
  /** Physical pin 6: TX1; bidirectional. */
  "TX1": "6",
  /** Physical pin 7: TX2; bidirectional. */
  "TX2": "7",
  /** Physical pin 8: VDDA; passive. */
  "VDDA": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD": "10",
  /** Physical pin 11: OUT1; output. */
  "OUT1": "11",
  /** Physical pin 12: OUT2; output. */
  "OUT2": "12",
  /** Physical pin 13: OUT3; output. */
  "OUT3": "13",
  /** Physical pin 14: OUT4; output. */
  "OUT4": "14",
  /** Physical pin 15: SCK_SCL; input. */
  "SCK_SCL": "15",
  /** Physical pin 16: SIO_SDA; bidirectional. */
  "SIO_SDA": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISM330DHCX extends Component.withPins({
  /** Physical pin 1: SDO/SA0; output. */
  "SDO/SA0": "1",
  /** Physical pin 2: SDx; bidirectional. */
  "SDx": "2",
  /** Physical pin 3: SCx; input. */
  "SCx": "3",
  /** Physical pin 4: INT1; output. */
  "INT1": "4",
  /** Physical pin 5: VDDIO; power_in. */
  "VDDIO": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: INT2; output. */
  "INT2": "9",
  /** Physical pin 10: OCS_AUX; passive. */
  "OCS_AUX": "10",
  /** Physical pin 11: SDO_AUX; passive. */
  "SDO_AUX": "11",
  /** Physical pin 12: CS; input. */
  "CS": "12",
  /** Physical pin 13: SCL; input. */
  "SCL": "13",
  /** Physical pin 14: SDA; bidirectional. */
  "SDA": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class KX022_1020 extends Component.withPins({
  /** Physical pin 1: SDO/ADDR; bidirectional. */
  "SDO/ADDR": "1",
  /** Physical pin 2: SDI/SDA; bidirectional. */
  "SDI/SDA": "2",
  /** Physical pin 3: IO_VDD; power_in. */
  "IO_VDD": "3",
  /** Physical pin 4: TRIG; input. */
  "TRIG": "4",
  /** Physical pin 5: INT1; output. */
  "INT1": "5",
  /** Physical pin 6: INT2; output. */
  "INT2": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: ~{CS}; input. */
  "~{CS}": "10",
  /** Physical pin 11: NC; passive. */
  "NC": "11",
  /** Physical pin 12: SCLK/SCL; input. */
  "SCLK/SCL": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class KX122_1042 extends Component.withPins({
  /** Physical pin 1: SDO/ADDR; bidirectional. */
  "SDO/ADDR": "1",
  /** Physical pin 2: SDI/SDA; bidirectional. */
  "SDI/SDA": "2",
  /** Physical pin 3: IO_VDD; power_in. */
  "IO_VDD": "3",
  /** Physical pin 4: TRIG; input. */
  "TRIG": "4",
  /** Physical pin 5: INT1; output. */
  "INT1": "5",
  /** Physical pin 6: INT2; output. */
  "INT2": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: ~{CS}; input. */
  "~{CS}": "10",
  /** Physical pin 11: NC; passive. */
  "NC": "11",
  /** Physical pin 12: SCLK/SCL; input. */
  "SCLK/SCL": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class KX222_1054 extends Component.withPins({
  /** Physical pin 1: SDO/ADDR; bidirectional. */
  "SDO/ADDR": "1",
  /** Physical pin 2: SDI/SDA; bidirectional. */
  "SDI/SDA": "2",
  /** Physical pin 3: IO_VDD; power_in. */
  "IO_VDD": "3",
  /** Physical pin 4: TRIG; input. */
  "TRIG": "4",
  /** Physical pin 5: INT1; output. */
  "INT1": "5",
  /** Physical pin 6: INT2; output. */
  "INT2": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: ~{CS}; input. */
  "~{CS}": "10",
  /** Physical pin 11: NC; passive. */
  "NC": "11",
  /** Physical pin 12: SCLK/SCL; input. */
  "SCLK/SCL": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class KXTJ3_1057 extends Component.withPins({
  /** Physical pin 1: ADDR; input. */
  "ADDR": "1",
  /** Physical pin 2: SDA; bidirectional. */
  "SDA": "2",
  /** Physical pin 3: IO_VDD; power_in. */
  "IO_VDD_3": "3",
  /** Physical pin 4: RES; passive. */
  "RES": "4",
  /** Physical pin 5: INT; output. */
  "INT": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: VDD; passive. */
  "VDD_10": "10",
  /** Physical pin 11: IO_VDD; passive. */
  "IO_VDD_11": "11",
  /** Physical pin 12: SCL; input. */
  "SCL": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class L3GD20 extends Component.withPins({
  /** Physical pin 1: VDDIO; power_in. */
  "VDDIO": "1",
  /** Physical pin 2: SCL/SPC; input. */
  "SCL/SPC": "2",
  /** Physical pin 3: SDA/SDI/SDO; bidirectional. */
  "SDA/SDI/SDO": "3",
  /** Physical pin 4: SDO/SA0; output. */
  "SDO/SA0": "4",
  /** Physical pin 5: CS; input. */
  "CS": "5",
  /** Physical pin 6: DRDY/INT2; output. */
  "DRDY/INT2": "6",
  /** Physical pin 7: INT1; output. */
  "INT1": "7",
  /** Physical pin 8: RES(GND); passive. */
  "RES(GND)_8": "8",
  /** Physical pin 9: RES(GND); passive. */
  "RES(GND)_9": "9",
  /** Physical pin 10: RES(GND); passive. */
  "RES(GND)_10": "10",
  /** Physical pin 11: RES(GND); passive. */
  "RES(GND)_11": "11",
  /** Physical pin 12: RES(GND); passive. */
  "RES(GND)_12": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
  /** Physical pin 14: RES(CAP); passive. */
  "RES(CAP)": "14",
  /** Physical pin 15: RES(VDD); passive. */
  "RES(VDD)": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LIS2HH12 extends Component.withPins({
  /** Physical pin 1: SCL/SPC; input. */
  "SCL/SPC": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: SA0/SDO; bidirectional. */
  "SA0/SDO": "3",
  /** Physical pin 4: SDA/SDI; bidirectional. */
  "SDA/SDI": "4",
  /** Physical pin 5: RES; passive. */
  "RES": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: Vdd; power_in. */
  "Vdd": "9",
  /** Physical pin 10: Vdd_IO; power_in. */
  "Vdd_IO": "10",
  /** Physical pin 11: INT2; output. */
  "INT2": "11",
  /** Physical pin 12: INT1; output. */
  "INT1": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LIS2DE12 extends Component.withPins({
  /** Physical pin 1: SCL/SPC; input. */
  "SCL/SPC": "1",
  /** Physical pin 2: ~{CS}; input. */
  "~{CS}": "2",
  /** Physical pin 3: SA0/SDO; bidirectional. */
  "SA0/SDO": "3",
  /** Physical pin 4: SDA/SDI; bidirectional. */
  "SDA/SDI": "4",
  /** Physical pin 5: RES; passive. */
  "RES": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: Vdd; power_in. */
  "Vdd": "9",
  /** Physical pin 10: Vdd_IO; power_in. */
  "Vdd_IO": "10",
  /** Physical pin 11: INT2; output. */
  "INT2": "11",
  /** Physical pin 12: INT1; output. */
  "INT1": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LIS2DH extends Component.withPins({
  /** Physical pin 1: SCL/SPC; input. */
  "SCL/SPC": "1",
  /** Physical pin 2: SDA/SDI; bidirectional. */
  "SDA/SDI": "2",
  /** Physical pin 3: SDO; output. */
  "SDO": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: INT2; output. */
  "INT2": "5",
  /** Physical pin 6: INT1; output. */
  "INT1": "6",
  /** Physical pin 7: Vdd_IO; power_in. */
  "Vdd_IO": "7",
  /** Physical pin 8: Vdd; power_in. */
  "Vdd": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LIS331HH extends Component.withPins({
  /** Physical pin 1: Vdd_IO; power_in. */
  "Vdd_IO": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: SCL/SPC; input. */
  "SCL/SPC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: SDA/SDI; bidirectional. */
  "SDA/SDI": "6",
  /** Physical pin 7: SA0/SDO; output. */
  "SA0/SDO": "7",
  /** Physical pin 8: ~{CS}; input. */
  "~{CS}": "8",
  /** Physical pin 9: INT2; output. */
  "INT2": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: INT1; output. */
  "INT1": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: Vdd; power_in. */
  "Vdd_14": "14",
  /** Physical pin 15: Vdd; passive. */
  "Vdd_15": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LIS3DH extends Component.withPins({
  /** Physical pin 1: VDD_IO; power_in. */
  "VDD_IO": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: SPC; input. */
  "SPC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: SDI; input. */
  "SDI": "6",
  /** Physical pin 7: SDO; output. */
  "SDO": "7",
  /** Physical pin 8: CS; input. */
  "CS": "8",
  /** Physical pin 9: INT2; output. */
  "INT2": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: INT1; output. */
  "INT1": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: ADC3; input. */
  "ADC3": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
  /** Physical pin 15: ADC2; input. */
  "ADC2": "15",
  /** Physical pin 16: ADC1; input. */
  "ADC1": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LSM303C extends Component.withPins({
  /** Physical pin 1: SCL/SPC; input. */
  "SCL/SPC": "1",
  /** Physical pin 2: CS_XL; input. */
  "CS_XL": "2",
  /** Physical pin 3: CS_MAG; input. */
  "CS_MAG": "3",
  /** Physical pin 4: SDA/SDI/SDO; bidirectional. */
  "SDA/SDI/SDO": "4",
  /** Physical pin 5: C1; passive. */
  "C1": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: INT_MAG; output. */
  "INT_MAG": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: VDD; power_in. */
  "VDD": "9",
  /** Physical pin 10: VDDIO; power_in. */
  "VDDIO": "10",
  /** Physical pin 11: DRDY_MAG; output. */
  "DRDY_MAG": "11",
  /** Physical pin 12: INT_XL; output. */
  "INT_XL": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LSM303D extends Component.withPins({
  /** Physical pin 1: VDDIO; power_in. */
  "VDDIO": "1",
  /** Physical pin 2: SETC; passive. */
  "SETC": "2",
  /** Physical pin 3: SETP; passive. */
  "SETP": "3",
  /** Physical pin 4: SCL/SPC; input. */
  "SCL/SPC": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: SDA/SDI/SDO; bidirectional. */
  "SDA/SDI/SDO": "6",
  /** Physical pin 7: SDO/SAO; output. */
  "SDO/SAO": "7",
  /** Physical pin 8: CS; input. */
  "CS": "8",
  /** Physical pin 9: INT2; output. */
  "INT2": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: INT1; output. */
  "INT1": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
  /** Physical pin 15: C1; passive. */
  "C1": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LSM303DLHC extends Component.withPins({
  /** Physical pin 1: VDDIO; power_in. */
  "VDDIO": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: INT2; output. */
  "INT2": "4",
  /** Physical pin 5: INT1; output. */
  "INT1": "5",
  /** Physical pin 6: C1; passive. */
  "C1": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC": "8",
  /** Physical pin 9: DRDY; output. */
  "DRDY": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: SETP; passive. */
  "SETP": "12",
  /** Physical pin 13: SETC; passive. */
  "SETC": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LSM6DS3 extends Component.withPins({
  /** Physical pin 1: SDO/SA0; bidirectional. */
  "SDO/SA0": "1",
  /** Physical pin 2: SDX; bidirectional. */
  "SDX": "2",
  /** Physical pin 3: SCX; input. */
  "SCX": "3",
  /** Physical pin 4: INT1; output. */
  "INT1": "4",
  /** Physical pin 5: VDDIO; power_in. */
  "VDDIO": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: INT2; output. */
  "INT2": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: CS; input. */
  "CS": "12",
  /** Physical pin 13: SCL; input. */
  "SCL": "13",
  /** Physical pin 14: SDA; bidirectional. */
  "SDA": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LSM6DSL extends Component.withPins({
  /** Physical pin 1: SDO/SA0; bidirectional. */
  "SDO/SA0": "1",
  /** Physical pin 2: SDX; bidirectional. */
  "SDX": "2",
  /** Physical pin 3: SCX; input. */
  "SCX": "3",
  /** Physical pin 4: INT1; output. */
  "INT1": "4",
  /** Physical pin 5: VDDIO; power_in. */
  "VDDIO": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: INT2; output. */
  "INT2": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: CS; input. */
  "CS": "12",
  /** Physical pin 13: SCL; input. */
  "SCL": "13",
  /** Physical pin 14: SDA; bidirectional. */
  "SDA": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LSM6DSM extends Component.withPins({
  /** Physical pin 1: SDO/SA0; bidirectional. */
  "SDO/SA0": "1",
  /** Physical pin 2: SDX; bidirectional. */
  "SDX": "2",
  /** Physical pin 3: SCX; input. */
  "SCX": "3",
  /** Physical pin 4: INT1; output. */
  "INT1": "4",
  /** Physical pin 5: VDDIO; power_in. */
  "VDDIO": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
  /** Physical pin 9: INT2; output. */
  "INT2": "9",
  /** Physical pin 10: OCS_Aux; passive. */
  "OCS_Aux": "10",
  /** Physical pin 11: SDO_Aux; bidirectional. */
  "SDO_Aux": "11",
  /** Physical pin 12: CS; input. */
  "CS": "12",
  /** Physical pin 13: SCL; input. */
  "SCL": "13",
  /** Physical pin 14: SDA; bidirectional. */
  "SDA": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LSM9DS1 extends Component.withPins({
  /** Physical pin 1: VDDIO; power_in. */
  "VDDIO_1": "1",
  /** Physical pin 2: SCL/SPC; input. */
  "SCL/SPC": "2",
  /** Physical pin 3: VDDIO; passive. */
  "VDDIO_3": "3",
  /** Physical pin 4: SDA/SDI/SDO; bidirectional. */
  "SDA/SDI/SDO": "4",
  /** Physical pin 5: SDO_A/G; output. */
  "SDO_A/G": "5",
  /** Physical pin 6: SDO_M; output. */
  "SDO_M": "6",
  /** Physical pin 7: CS_A/G; input. */
  "CS_A/G": "7",
  /** Physical pin 8: CS_M; input. */
  "CS_M": "8",
  /** Physical pin 9: DRDY_M; output. */
  "DRDY_M": "9",
  /** Physical pin 10: INT_M; output. */
  "INT_M": "10",
  /** Physical pin 11: INT1_A/G; output. */
  "INT1_A/G": "11",
  /** Physical pin 12: INT2_A/G; output. */
  "INT2_A/G": "12",
  /** Physical pin 13: DEN_A/G; input. */
  "DEN_A/G": "13",
  /** Physical pin 14: RES; bidirectional. */
  "RES_14": "14",
  /** Physical pin 15: RES; bidirectional. */
  "RES_15": "15",
  /** Physical pin 16: RES; bidirectional. */
  "RES_16": "16",
  /** Physical pin 17: RES; bidirectional. */
  "RES_17": "17",
  /** Physical pin 18: RES; bidirectional. */
  "RES_18": "18",
  /** Physical pin 19: GND; power_in. */
  "GND_19": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: CAP; passive. */
  "CAP": "21",
  /** Physical pin 22: VDD; power_in. */
  "VDD_22": "22",
  /** Physical pin 23: VDD; passive. */
  "VDD_23": "23",
  /** Physical pin 24: C1; passive. */
  "C1": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MMA8653FCR1 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: INT1; output. */
  "INT1": "3",
  /** Physical pin 4: BYP; input. */
  "BYP": "4",
  /** Physical pin 5: INT2; output. */
  "INT2": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: VDDIO; power_in. */
  "VDDIO": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: SDA; bidirectional. */
  "SDA": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MPU_6000 extends Component.withPins({
  /** Physical pin 1: CLKIN; input. */
  "CLKIN": "1",
  /** Physical pin 6: AUX_DA; bidirectional. */
  "AUX_DA": "6",
  /** Physical pin 7: AUX_CL; output. */
  "AUX_CL": "7",
  /** Physical pin 8: ~{CS}; input. */
  "~{CS}": "8",
  /** Physical pin 9: AD0/MISO; bidirectional. */
  "AD0/MISO": "9",
  /** Physical pin 10: REGOUT; passive. */
  "REGOUT": "10",
  /** Physical pin 11: FSYNC; input. */
  "FSYNC": "11",
  /** Physical pin 12: INT; output. */
  "INT": "12",
  /** Physical pin 13: VDD; power_in. */
  "VDD": "13",
  /** Physical pin 18: GND; power_in. */
  "GND": "18",
  /** Physical pin 20: CPOUT; passive. */
  "CPOUT": "20",
  /** Physical pin 23: SCL/SCLK; input. */
  "SCL/SCLK": "23",
  /** Physical pin 24: SDA/MOSI; bidirectional. */
  "SDA/MOSI": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MPU_6050 extends Component.withPins({
  /** Physical pin 1: CLKIN; input. */
  "CLKIN": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: AUX_DA; bidirectional. */
  "AUX_DA": "6",
  /** Physical pin 7: AUX_CL; output. */
  "AUX_CL": "7",
  /** Physical pin 8: VLOGIC; power_in. */
  "VLOGIC": "8",
  /** Physical pin 9: AD0; input. */
  "AD0": "9",
  /** Physical pin 10: REGOUT; passive. */
  "REGOUT": "10",
  /** Physical pin 11: FSYNC; input. */
  "FSYNC": "11",
  /** Physical pin 12: INT; output. */
  "INT": "12",
  /** Physical pin 13: VDD; power_in. */
  "VDD": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: GND; power_in. */
  "GND": "18",
  /** Physical pin 19: RESV; no_connect. */
  "RESV_19": "19",
  /** Physical pin 20: CPOUT; passive. */
  "CPOUT": "20",
  /** Physical pin 21: RESV; no_connect. */
  "RESV_21": "21",
  /** Physical pin 22: RESV; no_connect. */
  "RESV_22": "22",
  /** Physical pin 23: SCL; input. */
  "SCL": "23",
  /** Physical pin 24: SDA; bidirectional. */
  "SDA": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MPU_9150 extends Component.withPins({
  /** Physical pin 1: CLKIN; input. */
  "CLKIN": "1",
  /** Physical pin 3: VDD; power_in. */
  "VDD_3": "3",
  /** Physical pin 6: ES_DA; bidirectional. */
  "ES_DA": "6",
  /** Physical pin 7: ES_CL; output. */
  "ES_CL": "7",
  /** Physical pin 8: VLOGIC; power_in. */
  "VLOGIC": "8",
  /** Physical pin 9: AD0; input. */
  "AD0": "9",
  /** Physical pin 10: REGOUT; passive. */
  "REGOUT": "10",
  /** Physical pin 11: FSYNC; input. */
  "FSYNC": "11",
  /** Physical pin 12: INT; output. */
  "INT": "12",
  /** Physical pin 13: VDD; power_in. */
  "VDD_13": "13",
  /** Physical pin 15: GND; power_in. */
  "GND_15": "15",
  /** Physical pin 17: GND; passive. */
  "GND_17": "17",
  /** Physical pin 18: GND; passive. */
  "GND_18": "18",
  /** Physical pin 20: CPOUT; passive. */
  "CPOUT": "20",
  /** Physical pin 23: SCL; input. */
  "SCL": "23",
  /** Physical pin 24: SDA; bidirectional. */
  "SDA": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MPU_9250 extends Component.withPins({
  /** Physical pin 1: RESV_VDDIO; input. */
  "RESV_VDDIO": "1",
  /** Physical pin 7: AUX_CL; output. */
  "AUX_CL": "7",
  /** Physical pin 8: VDDIO; power_in. */
  "VDDIO": "8",
  /** Physical pin 9: AD0/MISO; bidirectional. */
  "AD0/MISO": "9",
  /** Physical pin 10: REGOUT; passive. */
  "REGOUT": "10",
  /** Physical pin 11: FSYNC; input. */
  "FSYNC": "11",
  /** Physical pin 12: INT; output. */
  "INT": "12",
  /** Physical pin 13: VDD; power_in. */
  "VDD": "13",
  /** Physical pin 18: GND; power_in. */
  "GND": "18",
  /** Physical pin 20: RESV_GND; power_in. */
  "RESV_GND": "20",
  /** Physical pin 21: AUX_DA; bidirectional. */
  "AUX_DA": "21",
  /** Physical pin 22: ~{CS}; input. */
  "~{CS}": "22",
  /** Physical pin 23: SCL/SCLK; input. */
  "SCL/SCLK": "23",
  /** Physical pin 24: SDA/MOSI; bidirectional. */
  "SDA/MOSI": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SC7A20 extends Component.withPins({
  /** Physical pin 1: SDO; bidirectional. */
  "SDO": "1",
  /** Physical pin 2: SDx; bidirectional. */
  "SDx": "2",
  /** Physical pin 3: VDDIO; power_in. */
  "VDDIO": "3",
  /** Physical pin 4: NC; passive. */
  "NC_4": "4",
  /** Physical pin 5: INT1; output. */
  "INT1": "5",
  /** Physical pin 6: INT2; output. */
  "INT2": "6",
  /** Physical pin 7: VDD; power_in. */
  "VDD": "7",
  /** Physical pin 8: GNDIO; power_in. */
  "GNDIO": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: ~{CS}; input. */
  "~{CS}": "10",
  /** Physical pin 11: NC; passive. */
  "NC_11": "11",
  /** Physical pin 12: SCx; input. */
  "SCx": "12",
}) {
  override schema = "Sensor_Motion:SC7A20";
  override referencePrefix = "U";
}

