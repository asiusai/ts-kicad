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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADE7758 extends Component.withPins({
  /** Physical pin 1: APCF; output. */
  "APCF": "1",
  /** Physical pin 2: DGND; power_in. */
  "DGND": "2",
  /** Physical pin 3: DVDD; power_in. */
  "DVDD": "3",
  /** Physical pin 4: AVDD; power_in. */
  "AVDD": "4",
  /** Physical pin 5: IAP; input. */
  "IAP": "5",
  /** Physical pin 6: IAN; input. */
  "IAN": "6",
  /** Physical pin 7: IBP; input. */
  "IBP": "7",
  /** Physical pin 8: IBN; input. */
  "IBN": "8",
  /** Physical pin 9: ICP; input. */
  "ICP": "9",
  /** Physical pin 10: ICN; input. */
  "ICN": "10",
  /** Physical pin 11: AGND; power_in. */
  "AGND": "11",
  /** Physical pin 12: REFIN/OUT; input. */
  "REFIN/OUT": "12",
  /** Physical pin 13: VN; power_in. */
  "VN": "13",
  /** Physical pin 14: VCP; input. */
  "VCP": "14",
  /** Physical pin 15: VBP; input. */
  "VBP": "15",
  /** Physical pin 16: VAP; input. */
  "VAP": "16",
  /** Physical pin 17: VARCF; output. */
  "VARCF": "17",
  /** Physical pin 18: ~{IRQ}; open_collector. */
  "~{IRQ}": "18",
  /** Physical pin 19: CLKIN; input. */
  "CLKIN": "19",
  /** Physical pin 20: CLKOUT; output. */
  "CLKOUT": "20",
  /** Physical pin 21: ~{CS}; input. */
  "~{CS}": "21",
  /** Physical pin 22: DIN; input. */
  "DIN": "22",
  /** Physical pin 23: SCLK; input. */
  "SCLK": "23",
  /** Physical pin 24: DOUT; output. */
  "DOUT": "24",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADE7763xRS extends Component.withPins({
  /** Physical pin 1: ~{RESET}; input. */
  "~{RESET}": "1",
  /** Physical pin 2: DVDD; power_in. */
  "DVDD": "2",
  /** Physical pin 3: AVDD; power_in. */
  "AVDD": "3",
  /** Physical pin 4: V1P; input. */
  "V1P": "4",
  /** Physical pin 5: V1N; input. */
  "V1N": "5",
  /** Physical pin 6: V2N; input. */
  "V2N": "6",
  /** Physical pin 7: V2P; input. */
  "V2P": "7",
  /** Physical pin 8: AGND; power_in. */
  "AGND": "8",
  /** Physical pin 9: REFIN/OUT; input. */
  "REFIN/OUT": "9",
  /** Physical pin 10: DGND; power_in. */
  "DGND": "10",
  /** Physical pin 11: CF; output. */
  "CF": "11",
  /** Physical pin 12: ZX; output. */
  "ZX": "12",
  /** Physical pin 13: ~{SAG}; open_collector. */
  "~{SAG}": "13",
  /** Physical pin 14: ~{IRQ}; open_collector. */
  "~{IRQ}": "14",
  /** Physical pin 15: CLKIN; input. */
  "CLKIN": "15",
  /** Physical pin 16: CLKOUT; output. */
  "CLKOUT": "16",
  /** Physical pin 17: ~{CS}; input. */
  "~{CS}": "17",
  /** Physical pin 18: SCLK; input. */
  "SCLK": "18",
  /** Physical pin 19: DOUT; output. */
  "DOUT": "19",
  /** Physical pin 20: DIN; input. */
  "DIN": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADE7953xCP extends Component.withPins({
  /** Physical pin 1: ZX; output. */
  "ZX": "1",
  /** Physical pin 2: ~{RESET}; input. */
  "~{RESET}": "2",
  /** Physical pin 3: VINTD; power_out. */
  "VINTD": "3",
  /** Physical pin 4: DGND; power_in. */
  "DGND": "4",
  /** Physical pin 5: IAP; input. */
  "IAP": "5",
  /** Physical pin 6: IAN; input. */
  "IAN": "6",
  /** Physical pin 7: PULL_HIGH; input. */
  "PULL_HIGH_7": "7",
  /** Physical pin 8: PULL_HIGH; input. */
  "PULL_HIGH_8": "8",
  /** Physical pin 9: IBP; input. */
  "IBP": "9",
  /** Physical pin 10: IBN; input. */
  "IBN": "10",
  /** Physical pin 11: VN; input. */
  "VN": "11",
  /** Physical pin 12: VP; input. */
  "VP": "12",
  /** Physical pin 13: REF; input. */
  "REF": "13",
  /** Physical pin 14: PULL_LOW; input. */
  "PULL_LOW": "14",
  /** Physical pin 15: VINTA; power_out. */
  "VINTA": "15",
  /** Physical pin 16: AGND; power_in. */
  "AGND": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD": "17",
  /** Physical pin 18: CLKIN; input. */
  "CLKIN": "18",
  /** Physical pin 19: CLKOUT; output. */
  "CLKOUT": "19",
  /** Physical pin 20: ~{REVP}; output. */
  "~{REVP}": "20",
  /** Physical pin 21: ZX_I; output. */
  "ZX_I": "21",
  /** Physical pin 22: ~{IRQ}; open_collector. */
  "~{IRQ}": "22",
  /** Physical pin 23: CF1; output. */
  "CF1": "23",
  /** Physical pin 24: CF2; output. */
  "CF2": "24",
  /** Physical pin 25: SCLK; input. */
  "SCLK": "25",
  /** Physical pin 26: MISO/SDA/TX; bidirectional. */
  "MISO/SDA/TX": "26",
  /** Physical pin 27: MOSI/SCL/RX; input. */
  "MOSI/SCL/RX": "27",
  /** Physical pin 28: ~{CS}; input. */
  "~{CS}": "28",
  /** Physical pin 29: EP; passive. */
  "EP": "29",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AM2302 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: SDA; bidirectional. */
  "SDA": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class APDS_9960 extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: INT; open_collector. */
  "INT": "2",
  /** Physical pin 3: LDR; passive. */
  "LDR": "3",
  /** Physical pin 4: LED_K; passive. */
  "LED_K": "4",
  /** Physical pin 5: LED_A; passive. */
  "LED_A": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: SCL; input. */
  "SCL": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AS3935 extends Component.withPins({
  /** Physical pin 1: ACG; input. */
  "ACG": "1",
  /** Physical pin 2: IN-; input. */
  "IN-": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: Vdd; power_in. */
  "Vdd": "5",
  /** Physical pin 6: VReg; passive. */
  "VReg": "6",
  /** Physical pin 7: EN; input. */
  "EN": "7",
  /** Physical pin 8: CS; input. */
  "CS": "8",
  /** Physical pin 9: SI; input. */
  "SI": "9",
  /** Physical pin 10: IRQ; bidirectional. */
  "IRQ": "10",
  /** Physical pin 11: SCL; bidirectional. */
  "SCL": "11",
  /** Physical pin 12: MISO; output. */
  "MISO": "12",
  /** Physical pin 13: MOSI/SDA; bidirectional. */
  "MOSI/SDA": "13",
  /** Physical pin 15: AD0; input. */
  "AD0": "15",
  /** Physical pin 16: AD1; input. */
  "AD1": "16",
  /** Physical pin 17: GNDPAD; power_in. */
  "GNDPAD": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BL0937 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: IP; input. */
  "IP": "2",
  /** Physical pin 3: IN; input. */
  "IN": "3",
  /** Physical pin 4: VP; input. */
  "VP": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: CF; output. */
  "CF": "6",
  /** Physical pin 7: CF1; output. */
  "CF1": "7",
  /** Physical pin 8: SEL; input. */
  "SEL": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BME280 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: CSB; input. */
  "CSB": "2",
  /** Physical pin 3: SDI; bidirectional. */
  "SDI": "3",
  /** Physical pin 4: SCK; input. */
  "SCK": "4",
  /** Physical pin 5: SDO; bidirectional. */
  "SDO": "5",
  /** Physical pin 6: VDDIO; power_in. */
  "VDDIO": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BME680 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 2: CSB; input. */
  "CSB": "2",
  /** Physical pin 3: SDI; bidirectional. */
  "SDI": "3",
  /** Physical pin 4: SCK; input. */
  "SCK": "4",
  /** Physical pin 5: SDO; bidirectional. */
  "SDO": "5",
  /** Physical pin 6: VDDIO; power_in. */
  "VDDIO": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DHT11 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: DATA; bidirectional. */
  "DATA": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CHT11 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: DATA; bidirectional. */
  "DATA": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC2990 extends Component.withPins({
  /** Physical pin 1: V1; passive. */
  "V1": "1",
  /** Physical pin 2: V2; passive. */
  "V2": "2",
  /** Physical pin 3: V3; passive. */
  "V3": "3",
  /** Physical pin 4: V4; passive. */
  "V4": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: SCL; input. */
  "SCL": "7",
  /** Physical pin 8: ADR0; input. */
  "ADR0": "8",
  /** Physical pin 9: ADR1; input. */
  "ADR1": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX30102 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: PGND; power_in. */
  "PGND": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: VLED+; power_in. */
  "VLED+_9": "9",
  /** Physical pin 10: VLED+; passive. */
  "VLED+_10": "10",
  /** Physical pin 11: VDD; power_in. */
  "VDD": "11",
  /** Physical pin 12: GND; power_in. */
  "GND": "12",
  /** Physical pin 13: ~{INT}; output. */
  "~{INT}": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Sensor:MAX30102";
  override referencePrefix = "U";
}

/**
 * Generic radiation detector
 *
 * KiCad symbol: `Sensor:Nuclear-Radiation_Detector`. Reference prefix: `V`.
 * Keywords: nuclear ionising radiation sensor geiger mueller muller tube neutron counter ionization chamber.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Nuclear_Radiation_Detector extends Component.withPins({
  /** Physical pin 1: 1; passive. */
  "P1": "1",
  /** Physical pin 2: 2; passive. */
  "P2": "2",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class RPR_0521RS extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: LED_A; passive. */
  "LED_A": "4",
  /** Physical pin 5: LED_K; passive. */
  "LED_K": "5",
  /** Physical pin 6: LDR; passive. */
  "LDR": "6",
  /** Physical pin 7: INT; open_collector. */
  "INT": "7",
  /** Physical pin 8: SDA; bidirectional. */
  "SDA": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SHT1x extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: DATA; bidirectional. */
  "DATA": "2",
  /** Physical pin 3: SCK; input. */
  "SCK": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
}) {
  override schema = "Sensor:SHT1x";
  override referencePrefix = "U";
}

