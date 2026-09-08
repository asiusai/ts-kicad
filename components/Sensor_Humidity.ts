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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ENS210 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class GXHTC3 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: SCL; bidirectional. */
  "SCL": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: EPAD; passive. */
  "EPAD": "7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HDC1080 extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: VCC; power_in. */
  "VCC": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: DAP; no_connect. */
  "DAP": "7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HDC2080 extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: ADDR; input. */
  "ADDR": "3",
  /** Physical pin 4: DRDY; output. */
  "DRDY": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: EP; no_connect. */
  "EP": "7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SHT31_DIS extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: ADDR; input. */
  "ADDR": "2",
  /** Physical pin 3: ALERT; output. */
  "ALERT": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: ~{RESET}; input. */
  "~{RESET}": "6",
  /** Physical pin 7: R; passive. */
  "R": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS_8": "8",
  /** Physical pin 9: VSS; passive. */
  "VSS_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SHT30_DIS extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: ADDR; input. */
  "ADDR": "2",
  /** Physical pin 3: ALERT; output. */
  "ALERT": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: ~{RESET}; input. */
  "~{RESET}": "6",
  /** Physical pin 7: R; passive. */
  "R": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS_8": "8",
  /** Physical pin 9: VSS; passive. */
  "VSS_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SHT30A_DIS extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: ADDR; input. */
  "ADDR": "2",
  /** Physical pin 3: ALERT; output. */
  "ALERT": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: ~{RESET}; input. */
  "~{RESET}": "6",
  /** Physical pin 7: R; passive. */
  "R": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS_8": "8",
  /** Physical pin 9: VSS; passive. */
  "VSS_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SHT31A_DIS extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: ADDR; input. */
  "ADDR": "2",
  /** Physical pin 3: ALERT; output. */
  "ALERT": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: ~{RESET}; input. */
  "~{RESET}": "6",
  /** Physical pin 7: R; passive. */
  "R": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS_8": "8",
  /** Physical pin 9: VSS; passive. */
  "VSS_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SHT35_DIS extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: ADDR; input. */
  "ADDR": "2",
  /** Physical pin 3: ALERT; output. */
  "ALERT": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: ~{RESET}; input. */
  "~{RESET}": "6",
  /** Physical pin 7: R; passive. */
  "R": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS_8": "8",
  /** Physical pin 9: VSS; passive. */
  "VSS_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SHT35A_DIS extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: ADDR; input. */
  "ADDR": "2",
  /** Physical pin 3: ALERT; output. */
  "ALERT": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: ~{RESET}; input. */
  "~{RESET}": "6",
  /** Physical pin 7: R; passive. */
  "R": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS_8": "8",
  /** Physical pin 9: VSS; passive. */
  "VSS_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SHT4x extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: VDD; power_in. */
  "VDD": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SHTC1 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SHTC3 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si7020_A20 extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: PAD; passive. */
  "PAD": "7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si7021_A20 extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: PAD; passive. */
  "PAD": "7",
}) {
  override schema = "Sensor_Humidity:Si7021-A20";
  override referencePrefix = "U";
}

