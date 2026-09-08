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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ATM90E26_YU extends Component.withPins({
  /** Physical pin 1: MMD1; input. */
  "MMD1": "1",
  /** Physical pin 2: DGND; power_in. */
  "DGND_2": "2",
  /** Physical pin 3: DVDD; power_in. */
  "DVDD": "3",
  /** Physical pin 4: ~{Reset}; input. */
  "~{Reset}": "4",
  /** Physical pin 5: AVDD; power_in. */
  "AVDD": "5",
  /** Physical pin 6: AGND; power_in. */
  "AGND_6": "6",
  /** Physical pin 7: I2P; input. */
  "I2P": "7",
  /** Physical pin 8: I2N; input. */
  "I2N": "8",
  /** Physical pin 9: DGND; passive. */
  "DGND_9": "9",
  /** Physical pin 10: I1P; input. */
  "I1P": "10",
  /** Physical pin 11: I1N; input. */
  "I1N": "11",
  /** Physical pin 12: USEL; input. */
  "USEL": "12",
  /** Physical pin 13: Vref; output. */
  "Vref": "13",
  /** Physical pin 14: AGND; passive. */
  "AGND_14": "14",
  /** Physical pin 15: VN; input. */
  "VN": "15",
  /** Physical pin 16: VP; input. */
  "VP": "16",
  /** Physical pin 17: WarnOut; output. */
  "WarnOut": "17",
  /** Physical pin 18: CF1; output. */
  "CF1": "18",
  /** Physical pin 19: CF2; output. */
  "CF2": "19",
  /** Physical pin 20: IRQ; output. */
  "IRQ": "20",
  /** Physical pin 21: ZX; output. */
  "ZX": "21",
  /** Physical pin 22: OSCI; input. */
  "OSCI": "22",
  /** Physical pin 23: OSCO; output. */
  "OSCO": "23",
  /** Physical pin 24: ~{CS}; input. */
  "~{CS}": "24",
  /** Physical pin 25: SCLK; input. */
  "SCLK": "25",
  /** Physical pin 26: SDO/UTX; output. */
  "SDO/UTX": "26",
  /** Physical pin 27: SDI/URX; input. */
  "SDI/URX": "27",
  /** Physical pin 28: MMD0; input. */
  "MMD0": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class INA219AxD extends Component.withPins({
  /** Physical pin 1: A1; input. */
  "A1": "1",
  /** Physical pin 2: A0; input. */
  "A0": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: VS; power_in. */
  "VS": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: IN-; input. */
  "IN-": "7",
  /** Physical pin 8: IN+; input. */
  "IN+": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class INA219AxDCN extends Component.withPins({
  /** Physical pin 1: IN+; input. */
  "IN+": "1",
  /** Physical pin 2: IN-; input. */
  "IN-": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: VS; power_in. */
  "VS": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: A0; input. */
  "A0": "7",
  /** Physical pin 8: A1; input. */
  "A1": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class INA219BxD extends Component.withPins({
  /** Physical pin 1: A1; input. */
  "A1": "1",
  /** Physical pin 2: A0; input. */
  "A0": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: VS; power_in. */
  "VS": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: IN-; input. */
  "IN-": "7",
  /** Physical pin 8: IN+; input. */
  "IN+": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class INA219BxDCN extends Component.withPins({
  /** Physical pin 1: IN+; input. */
  "IN+": "1",
  /** Physical pin 2: IN-; input. */
  "IN-": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: VS; power_in. */
  "VS": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: A0; input. */
  "A0": "7",
  /** Physical pin 8: A1; input. */
  "A1": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class INA226 extends Component.withPins({
  /** Physical pin 1: A1; input. */
  "A1": "1",
  /** Physical pin 2: A0; input. */
  "A0": "2",
  /** Physical pin 3: ~{Alert}; open_collector. */
  "~{Alert}": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: VS; power_in. */
  "VS": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: Vbus; input. */
  "Vbus": "8",
  /** Physical pin 9: Vin-; input. */
  "Vin-": "9",
  /** Physical pin 10: Vin+; input. */
  "Vin+": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class INA228 extends Component.withPins({
  /** Physical pin 1: A1; input. */
  "A1": "1",
  /** Physical pin 2: A0; input. */
  "A0": "2",
  /** Physical pin 3: ~{Alert}; open_collector. */
  "~{Alert}": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: VS; power_in. */
  "VS": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: Vbus; input. */
  "Vbus": "8",
  /** Physical pin 9: Vin-; input. */
  "Vin-": "9",
  /** Physical pin 10: Vin+; input. */
  "Vin+": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class INA229 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: MOSI; input. */
  "MOSI": "2",
  /** Physical pin 3: ~{ALERT}; open_collector. */
  "~{ALERT}": "3",
  /** Physical pin 4: MISO; tri_state. */
  "MISO": "4",
  /** Physical pin 5: SCLK; input. */
  "SCLK": "5",
  /** Physical pin 6: VS; power_in. */
  "VS": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: VBUS; input. */
  "VBUS": "8",
  /** Physical pin 9: IN-; input. */
  "IN-": "9",
  /** Physical pin 10: IN+; input. */
  "IN+": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class INA233 extends Component.withPins({
  /** Physical pin 1: A1; input. */
  "A1": "1",
  /** Physical pin 2: A0; input. */
  "A0": "2",
  /** Physical pin 3: ~{Alert}; open_collector. */
  "~{Alert}": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: VS; power_in. */
  "VS": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: Vbus; input. */
  "Vbus": "8",
  /** Physical pin 9: Vin-; input. */
  "Vin-": "9",
  /** Physical pin 10: Vin+; input. */
  "Vin+": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class INA234AxYBJ extends Component.withPins({
  /** Physical pin A1: ~{ALERT}; open_collector. */
  "~{ALERT}": "A1",
  /** Physical pin A2: IN+; input. */
  "IN+": "A2",
  /** Physical pin B1: A0; input. */
  "A0": "B1",
  /** Physical pin B2: IN-; input. */
  "IN-": "B2",
  /** Physical pin C1: SDA; bidirectional. */
  "SDA": "C1",
  /** Physical pin C2: GND; power_in. */
  "GND": "C2",
  /** Physical pin D1: SCL; input. */
  "SCL": "D1",
  /** Physical pin D2: VS; power_in. */
  "VS": "D2",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class INA237 extends Component.withPins({
  /** Physical pin 1: A1; input. */
  "A1": "1",
  /** Physical pin 2: A0; input. */
  "A0": "2",
  /** Physical pin 3: ~{Alert}; open_collector. */
  "~{Alert}": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: VS; power_in. */
  "VS": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: Vbus; input. */
  "Vbus": "8",
  /** Physical pin 9: Vin-; input. */
  "Vin-": "9",
  /** Physical pin 10: Vin+; input. */
  "Vin+": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class INA238 extends Component.withPins({
  /** Physical pin 1: A1; input. */
  "A1": "1",
  /** Physical pin 2: A0; input. */
  "A0": "2",
  /** Physical pin 3: ~{Alert}; open_collector. */
  "~{Alert}": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: VS; power_in. */
  "VS": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: Vbus; input. */
  "Vbus": "8",
  /** Physical pin 9: Vin-; input. */
  "Vin-": "9",
  /** Physical pin 10: Vin+; input. */
  "Vin+": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class INA260 extends Component.withPins({
  /** Physical pin 1: IN+; passive. */
  "IN+_1": "1",
  /** Physical pin 2: IN+; passive. */
  "IN+_2": "2",
  /** Physical pin 3: IN+; passive. */
  "IN+_3": "3",
  /** Physical pin 4: A1; input. */
  "A1": "4",
  /** Physical pin 5: A0; input. */
  "A0": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: ALERT; open_collector. */
  "ALERT": "7",
  /** Physical pin 8: SDA; bidirectional. */
  "SDA": "8",
  /** Physical pin 9: SCL; input. */
  "SCL": "9",
  /** Physical pin 10: VS; power_in. */
  "VS": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: VBUS; passive. */
  "VBUS": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC": "13",
  /** Physical pin 14: IN-; passive. */
  "IN-_14": "14",
  /** Physical pin 15: IN-; passive. */
  "IN-_15": "15",
  /** Physical pin 16: IN-; passive. */
  "IN-_16": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC4151xMS extends Component.withPins({
  /** Physical pin 1: SENSE+; input. */
  "SENSE+": "1",
  /** Physical pin 2: VIN; power_in. */
  "VIN": "2",
  /** Physical pin 3: ADR1; input. */
  "ADR1": "3",
  /** Physical pin 4: ADR0; input. */
  "ADR0": "4",
  /** Physical pin 5: ADIN; input. */
  "ADIN": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: ~{SHDN}; input. */
  "~{SHDN}": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: SENSE-; input. */
  "SENSE-": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP39F521 extends Component.withPins({
  /** Physical pin 1: EVENT; output. */
  "EVENT": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: COMMON_B; passive. */
  "COMMON_B": "4",
  /** Physical pin 5: COMMON_A; passive. */
  "COMMON_A": "5",
  /** Physical pin 6: OSCI; input. */
  "OSCI": "6",
  /** Physical pin 7: OSCO; passive. */
  "OSCO": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: ~{RESET}; input. */
  "~{RESET}": "10",
  /** Physical pin 11: AVDD; power_in. */
  "AVDD": "11",
  /** Physical pin 12: A0; input. */
  "A0": "12",
  /** Physical pin 13: SCL; input. */
  "SCL": "13",
  /** Physical pin 14: SDA; bidirectional. */
  "SDA": "14",
  /** Physical pin 15: A1; input. */
  "A1": "15",
  /** Physical pin 16: I1+; input. */
  "I1+": "16",
  /** Physical pin 17: I1-; input. */
  "I1-": "17",
  /** Physical pin 18: V1-; input. */
  "V1-": "18",
  /** Physical pin 19: V1+; input. */
  "V1+": "19",
  /** Physical pin 20: AN_IN; input. */
  "AN_IN": "20",
  /** Physical pin 21: AGND; power_in. */
  "AGND": "21",
  /** Physical pin 22: ZCD; output. */
  "ZCD": "22",
  /** Physical pin 23: REFIN+/OUT; bidirectional. */
  "REFIN+/OUT": "23",
  /** Physical pin 24: DGND; power_in. */
  "DGND_24": "24",
  /** Physical pin 25: DVDD; power_in. */
  "DVDD": "25",
  /** Physical pin 26: ~{MCLR}; input. */
  "~{MCLR}": "26",
  /** Physical pin 27: DGND; passive. */
  "DGND_27": "27",
  /** Physical pin 28: ~{DR}; output. */
  "~{DR}": "28",
  /** Physical pin 29: DGND; passive. */
  "DGND_29": "29",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1931x_xJ6CX extends Component.withPins({
  /** Physical pin A1: GND; passive. */
  "GND_A1": "A1",
  /** Physical pin A2: SENSE1-; input. */
  "SENSE1-": "A2",
  /** Physical pin A3: SENSE1+; input. */
  "SENSE1+": "A3",
  /** Physical pin A4: V_{DD}; power_in. */
  "V_{DD}": "A4",
  /** Physical pin B1: GND; passive. */
  "GND_B1": "B1",
  /** Physical pin B2: V_{DD}IO; input. */
  "V_{DD}IO": "B2",
  /** Physical pin B3: ~{PWRDN}; input. */
  "~{PWRDN}": "B3",
  /** Physical pin B4: GND; power_in. */
  "GND_B4": "B4",
  /** Physical pin C1: GND; passive. */
  "GND_C1": "C1",
  /** Physical pin C2: ADDRSEL; passive. */
  "ADDRSEL": "C2",
  /** Physical pin C3: SLOW; input. */
  "SLOW": "C3",
  /** Physical pin C4: SCL; input. */
  "SCL": "C4",
  /** Physical pin D1: GND; passive. */
  "GND_D1": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: SDA; bidirectional. */
  "SDA": "D4",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1932x_xJ6CX extends Component.withPins({
  /** Physical pin A1: SENSE2+; input. */
  "SENSE2+": "A1",
  /** Physical pin A2: SENSE1-; input. */
  "SENSE1-": "A2",
  /** Physical pin A3: SENSE1+; input. */
  "SENSE1+": "A3",
  /** Physical pin A4: V_{DD}; power_in. */
  "V_{DD}": "A4",
  /** Physical pin B1: SENSE2-; input. */
  "SENSE2-": "B1",
  /** Physical pin B2: V_{DD}IO; input. */
  "V_{DD}IO": "B2",
  /** Physical pin B3: ~{PWRDN}; input. */
  "~{PWRDN}": "B3",
  /** Physical pin B4: GND; power_in. */
  "GND_B4": "B4",
  /** Physical pin C1: GND; passive. */
  "GND_C1": "C1",
  /** Physical pin C2: ADDRSEL; passive. */
  "ADDRSEL": "C2",
  /** Physical pin C3: SLOW; input. */
  "SLOW": "C3",
  /** Physical pin C4: SCL; input. */
  "SCL": "C4",
  /** Physical pin D1: GND; passive. */
  "GND_D1": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: SDA; bidirectional. */
  "SDA": "D4",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1932x_xJQ extends Component.withPins({
  /** Physical pin 1: SLOW; input. */
  "SLOW": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: ADDRSEL; passive. */
  "ADDRSEL": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: SENSE1+; input. */
  "SENSE1+": "11",
  /** Physical pin 12: SENSE1-; input. */
  "SENSE1-": "12",
  /** Physical pin 13: SENSE2+; input. */
  "SENSE2+": "13",
  /** Physical pin 14: SENSE2-; input. */
  "SENSE2-": "14",
  /** Physical pin 15: V_{DD}IO; input. */
  "V_{DD}IO": "15",
  /** Physical pin 16: ~{PWRDN}; input. */
  "~{PWRDN}": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1933x_xJ6CX extends Component.withPins({
  /** Physical pin A1: SENSE2+; input. */
  "SENSE2+": "A1",
  /** Physical pin A2: SENSE1-; input. */
  "SENSE1-": "A2",
  /** Physical pin A3: SENSE1+; input. */
  "SENSE1+": "A3",
  /** Physical pin A4: V_{DD}; power_in. */
  "V_{DD}": "A4",
  /** Physical pin B1: SENSE2-; input. */
  "SENSE2-": "B1",
  /** Physical pin B2: V_{DD}IO; input. */
  "V_{DD}IO": "B2",
  /** Physical pin B3: ~{PWRDN}; input. */
  "~{PWRDN}": "B3",
  /** Physical pin B4: GND; power_in. */
  "GND_B4": "B4",
  /** Physical pin C1: SENSE3-; input. */
  "SENSE3-": "C1",
  /** Physical pin C2: ADDRSEL; passive. */
  "ADDRSEL": "C2",
  /** Physical pin C3: SLOW; input. */
  "SLOW": "C3",
  /** Physical pin C4: SCL; input. */
  "SCL": "C4",
  /** Physical pin D1: SENSE3+; input. */
  "SENSE3+": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: SDA; bidirectional. */
  "SDA": "D4",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1933x_xJQ extends Component.withPins({
  /** Physical pin 1: SLOW; input. */
  "SLOW": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: ADDRSEL; passive. */
  "ADDRSEL": "6",
  /** Physical pin 7: SENSE3-; input. */
  "SENSE3-": "7",
  /** Physical pin 8: SENSE3+; input. */
  "SENSE3+": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: SENSE1+; input. */
  "SENSE1+": "11",
  /** Physical pin 12: SENSE1-; input. */
  "SENSE1-": "12",
  /** Physical pin 13: SENSE2+; input. */
  "SENSE2+": "13",
  /** Physical pin 14: SENSE2-; input. */
  "SENSE2-": "14",
  /** Physical pin 15: V_{DD}IO; input. */
  "V_{DD}IO": "15",
  /** Physical pin 16: ~{PWRDN}; input. */
  "~{PWRDN}": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1934x_xJ6CX extends Component.withPins({
  /** Physical pin A1: SENSE2+; input. */
  "SENSE2+": "A1",
  /** Physical pin A2: SENSE1-; input. */
  "SENSE1-": "A2",
  /** Physical pin A3: SENSE1+; input. */
  "SENSE1+": "A3",
  /** Physical pin A4: V_{DD}; power_in. */
  "V_{DD}": "A4",
  /** Physical pin B1: SENSE2-; input. */
  "SENSE2-": "B1",
  /** Physical pin B2: V_{DD}IO; input. */
  "V_{DD}IO": "B2",
  /** Physical pin B3: ~{PWRDN}; input. */
  "~{PWRDN}": "B3",
  /** Physical pin B4: GND; power_in. */
  "GND": "B4",
  /** Physical pin C1: SENSE3-; input. */
  "SENSE3-": "C1",
  /** Physical pin C2: ADDRSEL; passive. */
  "ADDRSEL": "C2",
  /** Physical pin C3: SLOW; input. */
  "SLOW": "C3",
  /** Physical pin C4: SCL; input. */
  "SCL": "C4",
  /** Physical pin D1: SENSE3+; input. */
  "SENSE3+": "D1",
  /** Physical pin D2: SENSE4-; input. */
  "SENSE4-": "D2",
  /** Physical pin D3: SENSE4+; input. */
  "SENSE4+": "D3",
  /** Physical pin D4: SDA; bidirectional. */
  "SDA": "D4",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1934x_xJQ extends Component.withPins({
  /** Physical pin 1: SLOW; input. */
  "SLOW": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: ADDRSEL; passive. */
  "ADDRSEL": "6",
  /** Physical pin 7: SENSE3-; input. */
  "SENSE3-": "7",
  /** Physical pin 8: SENSE3+; input. */
  "SENSE3+": "8",
  /** Physical pin 9: SENSE4-; input. */
  "SENSE4-": "9",
  /** Physical pin 10: SENSE4+; input. */
  "SENSE4+": "10",
  /** Physical pin 11: SENSE1+; input. */
  "SENSE1+": "11",
  /** Physical pin 12: SENSE1-; input. */
  "SENSE1-": "12",
  /** Physical pin 13: SENSE2+; input. */
  "SENSE2+": "13",
  /** Physical pin 14: SENSE2-; input. */
  "SENSE2-": "14",
  /** Physical pin 15: V_{DD}IO; input. */
  "V_{DD}IO": "15",
  /** Physical pin 16: ~{PWRDN}; input. */
  "~{PWRDN}": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1951x_1x_4MX extends Component.withPins({
  /** Physical pin 1: SLOW; input. */
  "SLOW": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: ADDRSEL; passive. */
  "ADDRSEL": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: SENSE1+; input. */
  "SENSE1+": "11",
  /** Physical pin 12: SENSE1-; input. */
  "SENSE1-": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: GPIO; bidirectional. */
  "GPIO": "15",
  /** Physical pin 16: ~{PWRDN}; input. */
  "~{PWRDN}": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1941x_1x_4MX extends Component.withPins({
  /** Physical pin 1: SLOW; input. */
  "SLOW": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: ADDRSEL; passive. */
  "ADDRSEL": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: SENSE1+; input. */
  "SENSE1+": "11",
  /** Physical pin 12: SENSE1-; input. */
  "SENSE1-": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: GND; passive. */
  "GND_14": "14",
  /** Physical pin 15: GPIO; bidirectional. */
  "GPIO": "15",
  /** Physical pin 16: ~{PWRDN}; input. */
  "~{PWRDN}": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1951x_1x_J6CX extends Component.withPins({
  /** Physical pin A1: GND; passive. */
  "GND_A1": "A1",
  /** Physical pin A2: SENSE1-; input. */
  "SENSE1-": "A2",
  /** Physical pin A3: SENSE1+; input. */
  "SENSE1+": "A3",
  /** Physical pin A4: V_{DD}; power_in. */
  "V_{DD}": "A4",
  /** Physical pin B1: GND; passive. */
  "GND_B1": "B1",
  /** Physical pin B2: GPIO; bidirectional. */
  "GPIO": "B2",
  /** Physical pin B3: ~{PWRDN}; input. */
  "~{PWRDN}": "B3",
  /** Physical pin B4: GND; power_in. */
  "GND_B4": "B4",
  /** Physical pin C1: GND; passive. */
  "GND_C1": "C1",
  /** Physical pin C2: ADDRSEL; passive. */
  "ADDRSEL": "C2",
  /** Physical pin C3: SLOW; input. */
  "SLOW": "C3",
  /** Physical pin C4: SCL; input. */
  "SCL": "C4",
  /** Physical pin D1: GND; passive. */
  "GND_D1": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: SDA; bidirectional. */
  "SDA": "D4",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1941x_1x_J6CX extends Component.withPins({
  /** Physical pin A1: GND; passive. */
  "GND_A1": "A1",
  /** Physical pin A2: SENSE1-; input. */
  "SENSE1-": "A2",
  /** Physical pin A3: SENSE1+; input. */
  "SENSE1+": "A3",
  /** Physical pin A4: V_{DD}; power_in. */
  "V_{DD}": "A4",
  /** Physical pin B1: GND; passive. */
  "GND_B1": "B1",
  /** Physical pin B2: GPIO; bidirectional. */
  "GPIO": "B2",
  /** Physical pin B3: ~{PWRDN}; input. */
  "~{PWRDN}": "B3",
  /** Physical pin B4: GND; power_in. */
  "GND_B4": "B4",
  /** Physical pin C1: GND; passive. */
  "GND_C1": "C1",
  /** Physical pin C2: ADDRSEL; passive. */
  "ADDRSEL": "C2",
  /** Physical pin C3: SLOW; input. */
  "SLOW": "C3",
  /** Physical pin C4: SCL; input. */
  "SCL": "C4",
  /** Physical pin D1: GND; passive. */
  "GND_D1": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: SDA; bidirectional. */
  "SDA": "D4",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1951x_2x_4MX extends Component.withPins({
  /** Physical pin 1: SLOW; input. */
  "SLOW": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: ADDRSEL; passive. */
  "ADDRSEL": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: SENSE1+; input. */
  "SENSE1+": "11",
  /** Physical pin 12: SENSE1-; input. */
  "SENSE1-": "12",
  /** Physical pin 13: V_{BUS1+}; input. */
  "V_{BUS1+}": "13",
  /** Physical pin 14: V_{BUS1-}; input. */
  "V_{BUS1-}": "14",
  /** Physical pin 15: GPIO; bidirectional. */
  "GPIO": "15",
  /** Physical pin 16: ~{PWRDN}; input. */
  "~{PWRDN}": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1941x_2x_4MX extends Component.withPins({
  /** Physical pin 1: SLOW; input. */
  "SLOW": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: ADDRSEL; passive. */
  "ADDRSEL": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: SENSE1+; input. */
  "SENSE1+": "11",
  /** Physical pin 12: SENSE1-; input. */
  "SENSE1-": "12",
  /** Physical pin 13: V_{BUS1+}; input. */
  "V_{BUS1+}": "13",
  /** Physical pin 14: V_{BUS1-}; input. */
  "V_{BUS1-}": "14",
  /** Physical pin 15: GPIO; bidirectional. */
  "GPIO": "15",
  /** Physical pin 16: ~{PWRDN}; input. */
  "~{PWRDN}": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1951x_2x_J6CX extends Component.withPins({
  /** Physical pin A1: V_{BUS1+}; input. */
  "V_{BUS1+}": "A1",
  /** Physical pin A2: SENSE1-; input. */
  "SENSE1-": "A2",
  /** Physical pin A3: SENSE1+; input. */
  "SENSE1+": "A3",
  /** Physical pin A4: V_{DD}; power_in. */
  "V_{DD}": "A4",
  /** Physical pin B1: V_{BUS1-}; input. */
  "V_{BUS1-}": "B1",
  /** Physical pin B2: GPIO; bidirectional. */
  "GPIO": "B2",
  /** Physical pin B3: ~{PWRDN}; input. */
  "~{PWRDN}": "B3",
  /** Physical pin B4: GND; power_in. */
  "GND_B4": "B4",
  /** Physical pin C1: GND; passive. */
  "GND_C1": "C1",
  /** Physical pin C2: ADDRSEL; passive. */
  "ADDRSEL": "C2",
  /** Physical pin C3: SLOW; input. */
  "SLOW": "C3",
  /** Physical pin C4: SCL; input. */
  "SCL": "C4",
  /** Physical pin D1: GND; passive. */
  "GND_D1": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: SDA; bidirectional. */
  "SDA": "D4",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1941x_2x_J6CX extends Component.withPins({
  /** Physical pin A1: V_{BUS1+}; input. */
  "V_{BUS1+}": "A1",
  /** Physical pin A2: SENSE1-; input. */
  "SENSE1-": "A2",
  /** Physical pin A3: SENSE1+; input. */
  "SENSE1+": "A3",
  /** Physical pin A4: V_{DD}; power_in. */
  "V_{DD}": "A4",
  /** Physical pin B1: V_{BUS1-}; input. */
  "V_{BUS1-}": "B1",
  /** Physical pin B2: GPIO; bidirectional. */
  "GPIO": "B2",
  /** Physical pin B3: ~{PWRDN}; input. */
  "~{PWRDN}": "B3",
  /** Physical pin B4: GND; power_in. */
  "GND_B4": "B4",
  /** Physical pin C1: GND; passive. */
  "GND_C1": "C1",
  /** Physical pin C2: ADDRSEL; passive. */
  "ADDRSEL": "C2",
  /** Physical pin C3: SLOW; input. */
  "SLOW": "C3",
  /** Physical pin C4: SCL; input. */
  "SCL": "C4",
  /** Physical pin D1: GND; passive. */
  "GND_D1": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: SDA; bidirectional. */
  "SDA": "D4",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1952x_1x_4MX extends Component.withPins({
  /** Physical pin 1: SLOW; input. */
  "SLOW": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: ADDRSEL; passive. */
  "ADDRSEL": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: SENSE1+; input. */
  "SENSE1+": "11",
  /** Physical pin 12: SENSE1-; input. */
  "SENSE1-": "12",
  /** Physical pin 13: SENSE2+; input. */
  "SENSE2+": "13",
  /** Physical pin 14: SENSE2-; input. */
  "SENSE2-": "14",
  /** Physical pin 15: GPIO; bidirectional. */
  "GPIO": "15",
  /** Physical pin 16: ~{PWRDN}; input. */
  "~{PWRDN}": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1942x_1x_4MX extends Component.withPins({
  /** Physical pin 1: SLOW; input. */
  "SLOW": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: ADDRSEL; passive. */
  "ADDRSEL": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: SENSE1+; input. */
  "SENSE1+": "11",
  /** Physical pin 12: SENSE1-; input. */
  "SENSE1-": "12",
  /** Physical pin 13: SENSE2+; input. */
  "SENSE2+": "13",
  /** Physical pin 14: SENSE2-; input. */
  "SENSE2-": "14",
  /** Physical pin 15: GPIO; bidirectional. */
  "GPIO": "15",
  /** Physical pin 16: ~{PWRDN}; input. */
  "~{PWRDN}": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1952x_1x_J6CX extends Component.withPins({
  /** Physical pin A1: SENSE2+; input. */
  "SENSE2+": "A1",
  /** Physical pin A2: SENSE1-; input. */
  "SENSE1-": "A2",
  /** Physical pin A3: SENSE1+; input. */
  "SENSE1+": "A3",
  /** Physical pin A4: V_{DD}; power_in. */
  "V_{DD}": "A4",
  /** Physical pin B1: SENSE2-; input. */
  "SENSE2-": "B1",
  /** Physical pin B2: GPIO; bidirectional. */
  "GPIO": "B2",
  /** Physical pin B3: ~{PWRDN}; input. */
  "~{PWRDN}": "B3",
  /** Physical pin B4: GND; power_in. */
  "GND_B4": "B4",
  /** Physical pin C1: GND; passive. */
  "GND_C1": "C1",
  /** Physical pin C2: ADDRSEL; passive. */
  "ADDRSEL": "C2",
  /** Physical pin C3: SLOW; input. */
  "SLOW": "C3",
  /** Physical pin C4: SCL; input. */
  "SCL": "C4",
  /** Physical pin D1: GND; passive. */
  "GND_D1": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: SDA; bidirectional. */
  "SDA": "D4",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1942x_1x_J6CX extends Component.withPins({
  /** Physical pin A1: SENSE2+; input. */
  "SENSE2+": "A1",
  /** Physical pin A2: SENSE1-; input. */
  "SENSE1-": "A2",
  /** Physical pin A3: SENSE1+; input. */
  "SENSE1+": "A3",
  /** Physical pin A4: V_{DD}; power_in. */
  "V_{DD}": "A4",
  /** Physical pin B1: SENSE2-; input. */
  "SENSE2-": "B1",
  /** Physical pin B2: GPIO; bidirectional. */
  "GPIO": "B2",
  /** Physical pin B3: ~{PWRDN}; input. */
  "~{PWRDN}": "B3",
  /** Physical pin B4: GND; power_in. */
  "GND_B4": "B4",
  /** Physical pin C1: GND; passive. */
  "GND_C1": "C1",
  /** Physical pin C2: ADDRSEL; passive. */
  "ADDRSEL": "C2",
  /** Physical pin C3: SLOW; input. */
  "SLOW": "C3",
  /** Physical pin C4: SCL; input. */
  "SCL": "C4",
  /** Physical pin D1: GND; passive. */
  "GND_D1": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: SDA; bidirectional. */
  "SDA": "D4",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1952x_2x_4MX extends Component.withPins({
  /** Physical pin 1: SLOW; input. */
  "SLOW": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: ADDRSEL; passive. */
  "ADDRSEL": "6",
  /** Physical pin 7: V_{BUS2-}; input. */
  "V_{BUS2-}": "7",
  /** Physical pin 8: V_{BUS2+}; input. */
  "V_{BUS2+}": "8",
  /** Physical pin 9: SENSE2-; input. */
  "SENSE2-": "9",
  /** Physical pin 10: SENSE2+; input. */
  "SENSE2+": "10",
  /** Physical pin 11: SENSE1+; input. */
  "SENSE1+": "11",
  /** Physical pin 12: SENSE1-; input. */
  "SENSE1-": "12",
  /** Physical pin 13: V_{BUS1+}; input. */
  "V_{BUS1+}": "13",
  /** Physical pin 14: V_{BUS1-}; input. */
  "V_{BUS1-}": "14",
  /** Physical pin 15: GPIO; bidirectional. */
  "GPIO": "15",
  /** Physical pin 16: ~{PWRDN}; input. */
  "~{PWRDN}": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1942x_2x_4MX extends Component.withPins({
  /** Physical pin 1: SLOW; input. */
  "SLOW": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: ADDRSEL; passive. */
  "ADDRSEL": "6",
  /** Physical pin 7: V_{BUS2-}; input. */
  "V_{BUS2-}": "7",
  /** Physical pin 8: V_{BUS2+}; input. */
  "V_{BUS2+}": "8",
  /** Physical pin 9: SENSE2-; input. */
  "SENSE2-": "9",
  /** Physical pin 10: SENSE2+; input. */
  "SENSE2+": "10",
  /** Physical pin 11: SENSE1+; input. */
  "SENSE1+": "11",
  /** Physical pin 12: SENSE1-; input. */
  "SENSE1-": "12",
  /** Physical pin 13: V_{BUS1+}; input. */
  "V_{BUS1+}": "13",
  /** Physical pin 14: V_{BUS1-}; input. */
  "V_{BUS1-}": "14",
  /** Physical pin 15: GPIO; bidirectional. */
  "GPIO": "15",
  /** Physical pin 16: ~{PWRDN}; input. */
  "~{PWRDN}": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1952x_2x_J6CX extends Component.withPins({
  /** Physical pin A1: V_{BUS1+}; input. */
  "V_{BUS1+}": "A1",
  /** Physical pin A2: SENSE1-; input. */
  "SENSE1-": "A2",
  /** Physical pin A3: SENSE1+; input. */
  "SENSE1+": "A3",
  /** Physical pin A4: V_{DD}; power_in. */
  "V_{DD}": "A4",
  /** Physical pin B1: V_{BUS1-}; input. */
  "V_{BUS1-}": "B1",
  /** Physical pin B2: GPIO; bidirectional. */
  "GPIO": "B2",
  /** Physical pin B3: ~{PWRDN}; input. */
  "~{PWRDN}": "B3",
  /** Physical pin B4: GND; power_in. */
  "GND": "B4",
  /** Physical pin C1: V_{BUS2-}; input. */
  "V_{BUS2-}": "C1",
  /** Physical pin C2: ADDRSEL; passive. */
  "ADDRSEL": "C2",
  /** Physical pin C3: SLOW; input. */
  "SLOW": "C3",
  /** Physical pin C4: SCL; input. */
  "SCL": "C4",
  /** Physical pin D1: V_{BUS2+}; input. */
  "V_{BUS2+}": "D1",
  /** Physical pin D2: SENSE2-; input. */
  "SENSE2-": "D2",
  /** Physical pin D3: SENSE2+; input. */
  "SENSE2+": "D3",
  /** Physical pin D4: SDA; bidirectional. */
  "SDA": "D4",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1942x_2x_J6CX extends Component.withPins({
  /** Physical pin A1: V_{BUS1+}; input. */
  "V_{BUS1+}": "A1",
  /** Physical pin A2: SENSE1-; input. */
  "SENSE1-": "A2",
  /** Physical pin A3: SENSE1+; input. */
  "SENSE1+": "A3",
  /** Physical pin A4: V_{DD}; power_in. */
  "V_{DD}": "A4",
  /** Physical pin B1: V_{BUS1-}; input. */
  "V_{BUS1-}": "B1",
  /** Physical pin B2: GPIO; bidirectional. */
  "GPIO": "B2",
  /** Physical pin B3: ~{PWRDN}; input. */
  "~{PWRDN}": "B3",
  /** Physical pin B4: GND; power_in. */
  "GND": "B4",
  /** Physical pin C1: V_{BUS2-}; input. */
  "V_{BUS2-}": "C1",
  /** Physical pin C2: ADDRSEL; passive. */
  "ADDRSEL": "C2",
  /** Physical pin C3: SLOW; input. */
  "SLOW": "C3",
  /** Physical pin C4: SCL; input. */
  "SCL": "C4",
  /** Physical pin D1: V_{BUS2+}; input. */
  "V_{BUS2+}": "D1",
  /** Physical pin D2: SENSE2-; input. */
  "SENSE2-": "D2",
  /** Physical pin D3: SENSE2+; input. */
  "SENSE2+": "D3",
  /** Physical pin D4: SDA; bidirectional. */
  "SDA": "D4",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1953x_x4MX extends Component.withPins({
  /** Physical pin 1: SLOW; input. */
  "SLOW": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: ADDRSEL; passive. */
  "ADDRSEL": "6",
  /** Physical pin 7: SENSE3-; input. */
  "SENSE3-": "7",
  /** Physical pin 8: SENSE3+; input. */
  "SENSE3+": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: SENSE1+; input. */
  "SENSE1+": "11",
  /** Physical pin 12: SENSE1-; input. */
  "SENSE1-": "12",
  /** Physical pin 13: SENSE2+; input. */
  "SENSE2+": "13",
  /** Physical pin 14: SENSE2-; input. */
  "SENSE2-": "14",
  /** Physical pin 15: GPIO; bidirectional. */
  "GPIO": "15",
  /** Physical pin 16: ~{PWRDN}; input. */
  "~{PWRDN}": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1943x_x4MX extends Component.withPins({
  /** Physical pin 1: SLOW; input. */
  "SLOW": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: ADDRSEL; passive. */
  "ADDRSEL": "6",
  /** Physical pin 7: SENSE3-; input. */
  "SENSE3-": "7",
  /** Physical pin 8: SENSE3+; input. */
  "SENSE3+": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: SENSE1+; input. */
  "SENSE1+": "11",
  /** Physical pin 12: SENSE1-; input. */
  "SENSE1-": "12",
  /** Physical pin 13: SENSE2+; input. */
  "SENSE2+": "13",
  /** Physical pin 14: SENSE2-; input. */
  "SENSE2-": "14",
  /** Physical pin 15: GPIO; bidirectional. */
  "GPIO": "15",
  /** Physical pin 16: ~{PWRDN}; input. */
  "~{PWRDN}": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1953x_xJ6CX extends Component.withPins({
  /** Physical pin A1: SENSE2+; input. */
  "SENSE2+": "A1",
  /** Physical pin A2: SENSE1-; input. */
  "SENSE1-": "A2",
  /** Physical pin A3: SENSE1+; input. */
  "SENSE1+": "A3",
  /** Physical pin A4: V_{DD}; power_in. */
  "V_{DD}": "A4",
  /** Physical pin B1: SENSE2-; input. */
  "SENSE2-": "B1",
  /** Physical pin B2: GPIO; bidirectional. */
  "GPIO": "B2",
  /** Physical pin B3: ~{PWRDN}; input. */
  "~{PWRDN}": "B3",
  /** Physical pin B4: GND; power_in. */
  "GND_B4": "B4",
  /** Physical pin C1: SENSE3-; input. */
  "SENSE3-": "C1",
  /** Physical pin C2: ADDRSEL; passive. */
  "ADDRSEL": "C2",
  /** Physical pin C3: SLOW; input. */
  "SLOW": "C3",
  /** Physical pin C4: SCL; input. */
  "SCL": "C4",
  /** Physical pin D1: SENSE3+; input. */
  "SENSE3+": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: SDA; bidirectional. */
  "SDA": "D4",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1943x_xJ6CX extends Component.withPins({
  /** Physical pin A1: SENSE2+; input. */
  "SENSE2+": "A1",
  /** Physical pin A2: SENSE1-; input. */
  "SENSE1-": "A2",
  /** Physical pin A3: SENSE1+; input. */
  "SENSE1+": "A3",
  /** Physical pin A4: V_{DD}; power_in. */
  "V_{DD}": "A4",
  /** Physical pin B1: SENSE2-; input. */
  "SENSE2-": "B1",
  /** Physical pin B2: GPIO; bidirectional. */
  "GPIO": "B2",
  /** Physical pin B3: ~{PWRDN}; input. */
  "~{PWRDN}": "B3",
  /** Physical pin B4: GND; power_in. */
  "GND_B4": "B4",
  /** Physical pin C1: SENSE3-; input. */
  "SENSE3-": "C1",
  /** Physical pin C2: ADDRSEL; passive. */
  "ADDRSEL": "C2",
  /** Physical pin C3: SLOW; input. */
  "SLOW": "C3",
  /** Physical pin C4: SCL; input. */
  "SCL": "C4",
  /** Physical pin D1: SENSE3+; input. */
  "SENSE3+": "D1",
  /** Physical pin D2: GND; passive. */
  "GND_D2": "D2",
  /** Physical pin D3: GND; passive. */
  "GND_D3": "D3",
  /** Physical pin D4: SDA; bidirectional. */
  "SDA": "D4",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1954x_x4MX extends Component.withPins({
  /** Physical pin 1: SLOW; input. */
  "SLOW": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: ADDRSEL; passive. */
  "ADDRSEL": "6",
  /** Physical pin 7: SENSE3-; input. */
  "SENSE3-": "7",
  /** Physical pin 8: SENSE3+; input. */
  "SENSE3+": "8",
  /** Physical pin 9: SENSE4-; input. */
  "SENSE4-": "9",
  /** Physical pin 10: SENSE4+; input. */
  "SENSE4+": "10",
  /** Physical pin 11: SENSE1+; input. */
  "SENSE1+": "11",
  /** Physical pin 12: SENSE1-; input. */
  "SENSE1-": "12",
  /** Physical pin 13: SENSE2+; input. */
  "SENSE2+": "13",
  /** Physical pin 14: SENSE2-; input. */
  "SENSE2-": "14",
  /** Physical pin 15: GPIO; bidirectional. */
  "GPIO": "15",
  /** Physical pin 16: ~{PWRDN}; input. */
  "~{PWRDN}": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1944x_x4MX extends Component.withPins({
  /** Physical pin 1: SLOW; input. */
  "SLOW": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: ADDRSEL; passive. */
  "ADDRSEL": "6",
  /** Physical pin 7: SENSE3-; input. */
  "SENSE3-": "7",
  /** Physical pin 8: SENSE3+; input. */
  "SENSE3+": "8",
  /** Physical pin 9: SENSE4-; input. */
  "SENSE4-": "9",
  /** Physical pin 10: SENSE4+; input. */
  "SENSE4+": "10",
  /** Physical pin 11: SENSE1+; input. */
  "SENSE1+": "11",
  /** Physical pin 12: SENSE1-; input. */
  "SENSE1-": "12",
  /** Physical pin 13: SENSE2+; input. */
  "SENSE2+": "13",
  /** Physical pin 14: SENSE2-; input. */
  "SENSE2-": "14",
  /** Physical pin 15: GPIO; bidirectional. */
  "GPIO": "15",
  /** Physical pin 16: ~{PWRDN}; input. */
  "~{PWRDN}": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1954x_xJ6CX extends Component.withPins({
  /** Physical pin A1: SENSE2+; input. */
  "SENSE2+": "A1",
  /** Physical pin A2: SENSE1-; input. */
  "SENSE1-": "A2",
  /** Physical pin A3: SENSE1+; input. */
  "SENSE1+": "A3",
  /** Physical pin A4: V_{DD}; power_in. */
  "V_{DD}": "A4",
  /** Physical pin B1: SENSE2-; input. */
  "SENSE2-": "B1",
  /** Physical pin B2: GPIO; bidirectional. */
  "GPIO": "B2",
  /** Physical pin B3: ~{PWRDN}; input. */
  "~{PWRDN}": "B3",
  /** Physical pin B4: GND; power_in. */
  "GND": "B4",
  /** Physical pin C1: SENSE3-; input. */
  "SENSE3-": "C1",
  /** Physical pin C2: ADDRSEL; passive. */
  "ADDRSEL": "C2",
  /** Physical pin C3: SLOW; input. */
  "SLOW": "C3",
  /** Physical pin C4: SCL; input. */
  "SCL": "C4",
  /** Physical pin D1: SENSE3+; input. */
  "SENSE3+": "D1",
  /** Physical pin D2: SENSE4-; input. */
  "SENSE4-": "D2",
  /** Physical pin D3: SENSE4+; input. */
  "SENSE4+": "D3",
  /** Physical pin D4: SDA; bidirectional. */
  "SDA": "D4",
}) {
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
 * Units: 0.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAC1944x_xJ6CX extends Component.withPins({
  /** Physical pin A1: SENSE2+; input. */
  "SENSE2+": "A1",
  /** Physical pin A2: SENSE1-; input. */
  "SENSE1-": "A2",
  /** Physical pin A3: SENSE1+; input. */
  "SENSE1+": "A3",
  /** Physical pin A4: V_{DD}; power_in. */
  "V_{DD}": "A4",
  /** Physical pin B1: SENSE2-; input. */
  "SENSE2-": "B1",
  /** Physical pin B2: GPIO; bidirectional. */
  "GPIO": "B2",
  /** Physical pin B3: ~{PWRDN}; input. */
  "~{PWRDN}": "B3",
  /** Physical pin B4: GND; power_in. */
  "GND": "B4",
  /** Physical pin C1: SENSE3-; input. */
  "SENSE3-": "C1",
  /** Physical pin C2: ADDRSEL; passive. */
  "ADDRSEL": "C2",
  /** Physical pin C3: SLOW; input. */
  "SLOW": "C3",
  /** Physical pin C4: SCL; input. */
  "SCL": "C4",
  /** Physical pin D1: SENSE3+; input. */
  "SENSE3+": "D1",
  /** Physical pin D2: SENSE4-; input. */
  "SENSE4-": "D2",
  /** Physical pin D3: SENSE4+; input. */
  "SENSE4+": "D3",
  /** Physical pin D4: SDA; bidirectional. */
  "SDA": "D4",
}) {
  override schema = "Sensor_Energy:PAC1944x-xJ6CX";
  override referencePrefix = "U";
}

