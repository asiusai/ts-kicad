// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Gauge pressure sensor, 0 to 15PSI, 5V supply, 0.2% accuracy, integrated signal conditioning, excellent media compatibility
 *
 * KiCad symbol: `Sensor_Pressure:40PC015G`. Reference prefix: `U`.
 * @see http://www.honeywellscportal.com//index.php?ci_id=138832
 * Keywords: gage gauge pressure sensor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _40PC015G extends Component.withPins({
  /** Physical pin 1: Vcc; power_in. */
  "Vcc": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; output. */
  "Vout": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
}) {
  override schema = "Sensor_Pressure:40PC015G";
  override referencePrefix = "U";
}

/**
 * Gauge pressure sensor, 0 to 100PSI, 5V supply, 0.2% accuracy, integrated signal conditioning, excellent media compatibility
 *
 * KiCad symbol: `Sensor_Pressure:40PC100G`. Reference prefix: `U`.
 * @see http://www.honeywellscportal.com//index.php?ci_id=138832
 * Keywords: gage gauge pressure sensor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _40PC100G extends Component.withPins({
  /** Physical pin 1: Vcc; power_in. */
  "Vcc": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; output. */
  "Vout": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
}) {
  override schema = "Sensor_Pressure:40PC100G";
  override referencePrefix = "U";
}

/**
 * Gauge pressure sensor, 0 to 150PSI, 5V supply, 0.2% accuracy, integrated signal conditioning, excellent media compatibility
 *
 * KiCad symbol: `Sensor_Pressure:40PC150G`. Reference prefix: `U`.
 * @see http://www.honeywellscportal.com//index.php?ci_id=138832
 * Keywords: gage gauge pressure sensor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _40PC150G extends Component.withPins({
  /** Physical pin 1: Vcc; power_in. */
  "Vcc": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; output. */
  "Vout": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
}) {
  override schema = "Sensor_Pressure:40PC150G";
  override referencePrefix = "U";
}

/**
 * Gauge pressure sensor, 0 to 250PSI, 5V supply, 0.2% accuracy, integrated signal conditioning, excellent media compatibility
 *
 * KiCad symbol: `Sensor_Pressure:40PC250G`. Reference prefix: `U`.
 * @see http://www.honeywellscportal.com//index.php?ci_id=138832
 * Keywords: gage gauge pressure sensor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _40PC250G extends Component.withPins({
  /** Physical pin 1: Vcc; power_in. */
  "Vcc": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: Vout; output. */
  "Vout": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
}) {
  override schema = "Sensor_Pressure:40PC250G";
  override referencePrefix = "U";
}

/**
 * Basic Board Mount Absolute Pressure Sensor, 60 mbar to 10 bar, 6 kPa to 1 MPa, 1 psi to 150 psi, I2C digital output, DIP-6 package
 *
 * KiCad symbol: `Sensor_Pressure:ABPxxxxxxxxx0`. Reference prefix: `U`.
 * Footprint filters: Honeywell?ABP*.
 * @see https://prod-edam.honeywell.com/content/dam/honeywell-edam/sps/siot/en-us/products/sensors/pressure-sensors/board-mount-pressure-sensors/basic-abp-series/documents/sps-siot-basic-board-mount-pressure-abp-series-datasheet-32305128-ciid-155789.pdf?download=false
 * Keywords: Honeywell.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ABPxxxxxxxxx0 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; bidirectional. */
  "SCL": "6",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: INT; output. */
  "INT": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC": "4",
}) {
  override schema = "Sensor_Pressure:ABPxxxxxxxxx0";
  override referencePrefix = "U";
}

/**
 * Basic Board Mount Absolute Pressure Sensor, 60 mbar to 10 bar, 6 kPa to 1 MPa, 1 psi to 150 psi, analog output, DIP-6 package
 *
 * KiCad symbol: `Sensor_Pressure:ABPxxxxxxxxxA`. Reference prefix: `U`.
 * Footprint filters: Honeywell?ABP*.
 * @see https://prod-edam.honeywell.com/content/dam/honeywell-edam/sps/siot/en-us/products/sensors/pressure-sensors/board-mount-pressure-sensors/basic-abp-series/documents/sps-siot-basic-board-mount-pressure-abp-series-datasheet-32305128-ciid-155789.pdf?download=false
 * Keywords: Honeywell.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ABPxxxxxxxxxA extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: V_{out}; output. */
  "V_{out}": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
}) {
  override schema = "Sensor_Pressure:ABPxxxxxxxxxA";
  override referencePrefix = "U";
}

/**
 * Basic Board Mount Absolute Pressure Sensor, 60 mbar to 10 bar, 6 kPa to 1 MPa, 1 psi to 150 psi, SPI digital output, DIP-6 package
 *
 * KiCad symbol: `Sensor_Pressure:ABPxxxxxxxxxS`. Reference prefix: `U`.
 * Footprint filters: Honeywell?ABP*.
 * @see https://prod-edam.honeywell.com/content/dam/honeywell-edam/sps/siot/en-us/products/sensors/pressure-sensors/board-mount-pressure-sensors/basic-abp-series/documents/sps-siot-basic-board-mount-pressure-abp-series-datasheet-32305128-ciid-155789.pdf?download=false
 * Keywords: Honeywell.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ABPxxxxxxxxxS extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 5: MISO; bidirectional. */
  "MISO": "5",
  /** Physical pin 6: SCLK; input. */
  "SCLK": "6",
  /** Physical pin 2: VCC; power_in. */
  "VCC": "2",
  /** Physical pin 3: ~{CS}; input. */
  "~{CS}": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC": "4",
}) {
  override schema = "Sensor_Pressure:ABPxxxxxxxxxS";
  override referencePrefix = "U";
}

/**
 * Absolute Barometric Pressure Sensor, LGA-8
 *
 * KiCad symbol: `Sensor_Pressure:BMP280`. Reference prefix: `U`.
 * Footprint filters: Bosch*LGA*2x2.5mm*P0.65mm*.
 * @see https://ae-bst.resource.bosch.com/media/_tech/media/datasheets/BST-BMP280-DS001.pdf
 * Keywords: I2C, SPI, pressure, temperature, sensor.
 * Default footprint: Package_LGA:Bosch_LGA-8_2x2.5mm_P0.65mm_ClockwisePinNumbering.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BMP280 extends Component.withPins({
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
  override schema = "Sensor_Pressure:BMP280";
  override referencePrefix = "U";
}

/**
 * Dual full-scale (mode 1: 260..1260 hPa; mode 2: 260..4060 hPa), absolute digital output barometer with Qvar detection in a water-resistant package, 1.7..3.6V supply voltage, LGA-7
 *
 * KiCad symbol: `Sensor_Pressure:ILPS28QSW`. Reference prefix: `U`.
 * Footprint filters: *LGA*2.8x2.8mm*P1.15mm*.
 * @see https://www.st.com/resource/en/datasheet/ilps28qsw.pdf
 * Keywords: pressure-sensor I2C MIPI-I3C.
 * Default footprint: Package_LGA:ST_CCLGA-7L_2.8x2.8mm_P1.15mm_H1.95mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ILPS28QSW extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: AH1/QVAR1; input. */
  "AH1/QVAR1": "2",
  /** Physical pin 3: SCL; input. */
  "SCL": "3",
  /** Physical pin 4: AH2/QVAR2; input. */
  "AH2/QVAR2": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: PAD2LID; passive. */
  "PAD2LID": "7",
}) {
  override schema = "Sensor_Pressure:ILPS28QSW";
  override referencePrefix = "U";
}

/**
 * MEMS absolute pressure sensor, 260-1260 hPa, 1-200Hz ODR, 24bit, I2C/I3C/SPI interface, 2x2mm ST_HLGA-10L
 *
 * KiCad symbol: `Sensor_Pressure:LPS22DF`. Reference prefix: `U`.
 * Footprint filters: ST?HLGA*2x2mm*P0.5mm*LayoutBorder3x2y*.
 * @see https://www.st.com/resource/en/datasheet/lps22df.pdf
 * Keywords: digital barometer.
 * Default footprint: Package_LGA:ST_HLGA-10_2x2mm_P0.5mm_LayoutBorder3x2y.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LPS22DF extends Component.withPins({
  /** Physical pin 1: Vdd_IO; power_in. */
  "Vdd_IO": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SA0; input. */
  "SA0": "5",
  /** Physical pin 6: ~{CS}; input. */
  "~{CS}": "6",
  /** Physical pin 7: INT_DRDY; output. */
  "INT_DRDY": "7",
  /** Physical pin 8: GND_IO; power_in. */
  "GND_IO": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD": "10",
}) {
  override schema = "Sensor_Pressure:LPS22DF";
  override referencePrefix = "U";
}

/**
 * MEMS nano pressure sensor, 260-1260 hPa, absolute digital output baromeeter, 24 bit, SPI, I2C, 0.01 hPa noise rms, ST_HLGA-10L
 *
 * KiCad symbol: `Sensor_Pressure:LPS25HB`. Reference prefix: `U`.
 * Footprint filters: ST?HLGA*2.5x2.5mm*P0.6mm*LayoutBorder3x2y*.
 * @see https://www.st.com/resource/en/datasheet/lps25hb.pdf
 * Keywords: mems absolute baromeeter spi i2c pressure.
 * Default footprint: Package_LGA:ST_HLGA-10_2.5x2.5mm_P0.6mm_LayoutBorder3x2y.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LPS25HB extends Component.withPins({
  /** Physical pin 1: Vdd_IO; power_in. */
  "Vdd_IO": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SA0; input. */
  "SA0": "5",
  /** Physical pin 6: ~{CS}; input. */
  "~{CS}": "6",
  /** Physical pin 7: INT_DRDY; output. */
  "INT_DRDY": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD": "10",
}) {
  override schema = "Sensor_Pressure:LPS25HB";
  override referencePrefix = "U";
}

/**
 * MEMS nano pressure sensor, 260-1260 hPa, absolute digital output baromeeter, 24 bit, SPI, I2C, 0.0075 hPa noise rms, ST_HLGA-10L
 *
 * KiCad symbol: `Sensor_Pressure:LPS22HB`. Reference prefix: `U`.
 * Footprint filters: ST?HLGA*2x2mm*P0.5mm*LayoutBorder3x2y*.
 * @see https://www.st.com/resource/en/datasheet/lps22hb.pdf
 * Keywords: mems absolute baromeeter spi i2c pressure.
 * Default footprint: Package_LGA:ST_HLGA-10_2x2mm_P0.5mm_LayoutBorder3x2y.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LPS22HB extends Component.withPins({
  /** Physical pin 1: Vdd_IO; power_in. */
  "Vdd_IO": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SA0; input. */
  "SA0": "5",
  /** Physical pin 6: ~{CS}; input. */
  "~{CS}": "6",
  /** Physical pin 7: INT_DRDY; output. */
  "INT_DRDY": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD": "10",
}) {
  override schema = "Sensor_Pressure:LPS22HB";
  override referencePrefix = "U";
}

/**
 * MEMS nano pressure sensor, 260-1260 hPa, absolute digital output baromeeter, 24 bit, SPI, I2C, I3C, 0.65 Pa noise rms, ST_HLGA-10L
 *
 * KiCad symbol: `Sensor_Pressure:LPS22HH`. Reference prefix: `U`.
 * Footprint filters: ST?HLGA*2x2mm*P0.5mm*LayoutBorder3x2y*.
 * @see https://www.st.com/resource/en/datasheet/lps22hh.pdf
 * Keywords: mems absolute baromeeter spi i2c i3c pressure.
 * Default footprint: Package_LGA:ST_HLGA-10_2x2mm_P0.5mm_LayoutBorder3x2y.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LPS22HH extends Component.withPins({
  /** Physical pin 1: Vdd_IO; power_in. */
  "Vdd_IO": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SA0; input. */
  "SA0": "5",
  /** Physical pin 6: ~{CS}; input. */
  "~{CS}": "6",
  /** Physical pin 7: INT_DRDY; output. */
  "INT_DRDY": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD": "10",
}) {
  override schema = "Sensor_Pressure:LPS22HH";
  override referencePrefix = "U";
}

/**
 * SPI Digital Barometer
 *
 * KiCad symbol: `Sensor_Pressure:MPL115A1`. Reference prefix: `U`.
 * Footprint filters: NXP*LGA*3x5mm*P1.25mm*H1.2mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MPL115A1.pdf
 * Keywords: spi barometer thermometer mems.
 * Default footprint: Package_LGA:NXP_LGA-8_3x5mm_P1.25mm_H1.2mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MPL115A1 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: CAP; passive. */
  "CAP": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: ~{SHDN}; input. */
  "~{SHDN}": "4",
  /** Physical pin 5: ~{CS}; input. */
  "~{CS}": "5",
  /** Physical pin 6: DOUT; output. */
  "DOUT": "6",
  /** Physical pin 7: DIN; input. */
  "DIN": "7",
  /** Physical pin 8: SCLK; input. */
  "SCLK": "8",
}) {
  override schema = "Sensor_Pressure:MPL115A1";
  override referencePrefix = "U";
}

/**
 * I2C precision pressure sensor with altimetry, LGA-8
 *
 * KiCad symbol: `Sensor_Pressure:MPL3115A2`. Reference prefix: `U`.
 * Footprint filters: NXP*LGA*3x5mm*P1.25mm*H1.1mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/MPL3115A2.pdf
 * Keywords: pressure sensor altimetry.
 * Default footprint: Package_LGA:NXP_LGA-8_3x5mm_P1.25mm_H1.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MPL3115A2 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: CAP; passive. */
  "CAP": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: VDDIO; power_in. */
  "VDDIO": "4",
  /** Physical pin 5: INT2; open_collector. */
  "INT2": "5",
  /** Physical pin 6: INT1; open_collector. */
  "INT1": "6",
  /** Physical pin 7: SDL; bidirectional. */
  "SDL": "7",
  /** Physical pin 8: SCL; input. */
  "SCL": "8",
}) {
  override schema = "Sensor_Pressure:MPL3115A2";
  override referencePrefix = "U";
}

/**
 * Absolute pressure sensor, 15 to 115kPa, analog output, integrated signal conditioning, temperature compensated, SO package
 *
 * KiCad symbol: `Sensor_Pressure:MPXA6115A`. Reference prefix: `U`.
 * @see https://www.nxp.com/docs/en/data-sheet/MPXA6115A.pdf
 * Keywords: absolute pressure sensor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MPXA6115A extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: Vcc; power_in. */
  "Vcc": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: Vout; output. */
  "Vout": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Sensor_Pressure:MPXA6115A";
  override referencePrefix = "U";
}

/**
 * Absolute pressure sensor, 15 to 115kPa, analog output, integrated signal conditioning, temperature compensated, media resistant gel, SO package
 *
 * KiCad symbol: `Sensor_Pressure:MPXAZ6115A`. Reference prefix: `U`.
 * @see https://www.nxp.com/docs/en/data-sheet/MPXA6115A.pdf
 * Keywords: absolute pressure sensor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MPXAZ6115A extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: Vcc; power_in. */
  "Vcc": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: Vout; output. */
  "Vout": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Sensor_Pressure:MPXAZ6115A";
  override referencePrefix = "U";
}

/**
 * Absolute pressure sensor, 15 to 115kPa, analog output, integrated signal conditioning, temperature compensated, SSO package
 *
 * KiCad symbol: `Sensor_Pressure:MPXH6115A`. Reference prefix: `U`.
 * @see https://www.nxp.com/docs/en/data-sheet/MPXA6115A.pdf
 * Keywords: absolute pressure sensor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MPXH6115A extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: Vcc; power_in. */
  "Vcc": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: Vout; output. */
  "Vout": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Sensor_Pressure:MPXH6115A";
  override referencePrefix = "U";
}

/**
 * Absolute pressure sensor, 15 to 115kPa, analog output, integrated signal conditioning, temperature compensated, media resistant gel, SSO package
 *
 * KiCad symbol: `Sensor_Pressure:MPXHZ6115A`. Reference prefix: `U`.
 * @see https://www.nxp.com/docs/en/data-sheet/MPXA6115A.pdf
 * Keywords: absolute pressure sensor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MPXHZ6115A extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: Vcc; power_in. */
  "Vcc": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: Vout; output. */
  "Vout": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
}) {
  override schema = "Sensor_Pressure:MPXHZ6115A";
  override referencePrefix = "U";
}

/**
 * Integrated Digital Pressure Sensor
 *
 * KiCad symbol: `Sensor_Pressure:MS5525DSO`. Reference prefix: `U`.
 * Footprint filters: TE?MS5525DSO*DB*, TE?MS5525DSO*SB*, TE?MS5525DSO*ST*, TE?MS5525DSO*DH*, TE?MS5525DSO*FT*, TE?MS5525DSO*FB*.
 * @see https://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=MS5525DSO&DocType=DS&DocLang=English
 * Keywords: 24bit low-power I2C SPI.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MS5525DSO extends Component.withPins({
  /** Physical pin 1: SIN-; passive. */
  "SIN-_1": "1",
  /** Physical pin 2: SOUT-; passive. */
  "SOUT-_2": "2",
  /** Physical pin 3: SIN-; passive. */
  "SIN-_3": "3",
  /** Physical pin 4: SOUT-; passive. */
  "SOUT-_4": "4",
  /** Physical pin 5: SDO; output. */
  "SDO": "5",
  /** Physical pin 6: SDI/SDA; input. */
  "SDI/SDA": "6",
  /** Physical pin 7: SCLK/SCL; input. */
  "SCLK/SCL": "7",
  /** Physical pin 8: CSB; input. */
  "CSB": "8",
  /** Physical pin 9: SUPPLY-; power_in. */
  "SUPPLY-": "9",
  /** Physical pin 10: PS; input. */
  "PS": "10",
  /** Physical pin 11: SUPPLY+; passive. */
  "SUPPLY+_11": "11",
  /** Physical pin 12: SOUT+; passive. */
  "SOUT+_12": "12",
  /** Physical pin 13: SUPPLY+; power_in. */
  "SUPPLY+_13": "13",
  /** Physical pin 14: SOUT+; passive. */
  "SOUT+_14": "14",
}) {
  override schema = "Sensor_Pressure:MS5525DSO";
  override referencePrefix = "U";
}

/**
 * Barometric pressure sensor, 20cm resolution, 10 to 1200 mbar, I2C and SPI interface up to 20MHz, LGA-8
 *
 * KiCad symbol: `Sensor_Pressure:MS5607-02BA`. Reference prefix: `U`.
 * Footprint filters: LGA*3x5mm*P1.25mm*.
 * @see https://www.te.com/commerce/DocumentDelivery/DDEController?Action=showdoc&DocId=Data+Sheet%7FMS5607-02BA03%7FB2%7Fpdf%7FEnglish%7FENG_DS_MS5607-02BA03_B2.pdf%7FCAT-BLPS0035
 * Keywords: pressure SPI I2C.
 * Default footprint: Package_LGA:LGA-8_3x5mm_P1.25mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MS5607_02BA extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: PS; input. */
  "PS": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: CSB; input. */
  "CSB_4": "4",
  /** Physical pin 5: CSB; input. */
  "CSB_5": "5",
  /** Physical pin 6: SDO; output. */
  "SDO": "6",
  /** Physical pin 7: SDI/SDA; bidirectional. */
  "SDI/SDA": "7",
  /** Physical pin 8: SCLK; input. */
  "SCLK": "8",
}) {
  override schema = "Sensor_Pressure:MS5607-02BA";
  override referencePrefix = "U";
}

/**
 * Barometric pressure sensor, 10cm resolution, 10 to 1200 mbar, I2C and SPI interface up to 20MHz, LGA-8
 *
 * KiCad symbol: `Sensor_Pressure:MS5611-01BA`. Reference prefix: `U`.
 * Footprint filters: LGA*3x5mm*P1.25mm*.
 * @see https://www.te.com/commerce/DocumentDelivery/DDEController?Action=srchrtrv&DocNm=MS5611-01BA03&DocType=Data+Sheet&DocLang=English
 * Keywords: pressure SPI I2C.
 * Default footprint: Package_LGA:LGA-8_3x5mm_P1.25mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MS5611_01BA extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: PS; input. */
  "PS": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: CSB; input. */
  "CSB_4": "4",
  /** Physical pin 5: CSB; input. */
  "CSB_5": "5",
  /** Physical pin 6: SDO; output. */
  "SDO": "6",
  /** Physical pin 7: SDI/SDA; bidirectional. */
  "SDI/SDA": "7",
  /** Physical pin 8: SCLK; input. */
  "SCLK": "8",
}) {
  override schema = "Sensor_Pressure:MS5611-01BA";
  override referencePrefix = "U";
}

/**
 * Ultra-small, gel-filled, pressure sensor with stainless steel cap
 *
 * KiCad symbol: `Sensor_Pressure:MS5837-xxBA`. Reference prefix: `U`.
 * Footprint filters: TE_MS5837*BA*.
 * @see https://www.te.com/commerce/DocumentDelivery/DDEController?Action=showdoc&DocId=Data+Sheet%7FMS5837-30BA%7FB1%7Fpdf%7FEnglish%7FENG_DS_MS5837-30BA_B1.pdf%7FCAT-BLPS0017
 * Keywords: pressure sensor.
 * Default footprint: Sensor_Pressure:TE_MS5837-xxBA.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MS5837_xxBA extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 3: SCL; passive. */
  "SCL": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
}) {
  override schema = "Sensor_Pressure:MS5837-xxBA";
  override referencePrefix = "U";
}

/**
 * MEMS nano pressure sensor, 260-1260 hPa, absolute digital output baromeeter, 24 bit, SPI, I2C, 0.75 Pa noise rms, ST_HLGA-10L
 *
 * KiCad symbol: `Sensor_Pressure:WSEN-PADS_2511020213301`. Reference prefix: `U`.
 * Footprint filters: ST?HLGA*2x2mm*P0.5mm*LayoutBorder3x2y*.
 * @see https://www.we-online.com/components/products/manual/2511020213301_WSEN-PADS%202511020213301%20Manual_rev2.2.pdf
 * Keywords: mems absolute baromeeter.
 * Default footprint: Package_LGA:ST_HLGA-10_2x2mm_P0.5mm_LayoutBorder3x2y.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class WSEN_PADS_2511020213301 extends Component.withPins({
  /** Physical pin 1: Vdd_IO; power_in. */
  "Vdd_IO": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: GND; passive. */
  "GND_3": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SA0; input. */
  "SA0": "5",
  /** Physical pin 6: ~{CS}; input. */
  "~{CS}": "6",
  /** Physical pin 7: INT_DRDY; output. */
  "INT_DRDY": "7",
  /** Physical pin 8: GND; power_in. */
  "GND_8": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD": "10",
}) {
  override schema = "Sensor_Pressure:WSEN-PADS_2511020213301";
  override referencePrefix = "U";
}

/**
 * I2C pressure sensor, 24-bit, 2.5..5.5V supply
 *
 * KiCad symbol: `Sensor_Pressure:XGZP6859D`. Reference prefix: `U`.
 * Footprint filters: *CFSensor?XGZP6859*.
 * @see https://cfsensor.com/wp-content/uploads/2025/02/XGZP6859D-Pressure-Sensor-V2.8.pdf
 * Keywords: cfsensor sencoch.
 * Default footprint: Sensor_Pressure:CFSensor_XGZP6859D_7x7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XGZP6859D extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
}) {
  override schema = "Sensor_Pressure:XGZP6859D";
  override referencePrefix = "U";
}

/**
 * i2c differential digital, 2.5Vdc-5.5Vdc
 *
 * KiCad symbol: `Sensor_Pressure:XGZP6897D`. Reference prefix: `U`.
 * Footprint filters: *CFSensor?XGZP6897*.
 * @see https://cfsensor.com/wp-content/uploads/2022/11/XGZP6897D-Pressure-Sensor-V2.7.pdf
 * Keywords: differential i2c.
 * Default footprint: Sensor_Pressure:CFSensor_XGZP6897x.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XGZP6897D extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: SCL; passive. */
  "SCL": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
}) {
  override schema = "Sensor_Pressure:XGZP6897D";
  override referencePrefix = "U";
}

/**
 * i2c differential digital, 2.5Vdc-5.5Vdc
 *
 * KiCad symbol: `Sensor_Pressure:XGZP6899D`. Reference prefix: `U`.
 * Footprint filters: *CFSensor?XGZP6899*.
 * @see https://cfsensor.com/wp-content/uploads/2022/11/XGZP6899D-Pressure-Sensor-V2.8.pdf
 * Keywords: differential i2c.
 * Default footprint: Sensor_Pressure:CFSensor_XGZP6899x.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XGZP6899D extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: SCL; passive. */
  "SCL": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
  override schema = "Sensor_Pressure:XGZP6899D";
  override referencePrefix = "U";
}

