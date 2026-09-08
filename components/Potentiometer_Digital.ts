// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Digital potentiometer, 256 position, single output, SPI interface, SOT-23-8
 *
 * KiCad symbol: `Potentiometer_Digital:AD5160`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5160.pdf
 * Keywords: digital potentiometer.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-8.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5160 extends Component.withPins({
  /** Physical pin 1: W; passive. */
  "W": "1",
  /** Physical pin 2: V_{DD}; power_in. */
  "V_{DD}": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: CLK; input. */
  "CLK": "4",
  /** Physical pin 5: SDI; input. */
  "SDI": "5",
  /** Physical pin 6: ~{CS}; input. */
  "~{CS}": "6",
  /** Physical pin 7: B; passive. */
  "B": "7",
  /** Physical pin 8: A; passive. */
  "A": "8",
}) {
  override schema = "Potentiometer_Digital:AD5160";
  override referencePrefix = "U";
}

/**
 * Digital potentiometer, 256 position, 4 output, I2C interface, TSSOP-20
 *
 * KiCad symbol: `Potentiometer_Digital:AD5254`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5253_5254.pdf
 * Keywords: digital potentiometer.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5254 extends Component.withPins({
  /** Physical pin 1: W0; passive. */
  "W0": "1",
  /** Physical pin 2: B0; passive. */
  "B0": "2",
  /** Physical pin 3: A0; passive. */
  "A0": "3",
  /** Physical pin 4: AD0; input. */
  "AD0": "4",
  /** Physical pin 5: ~{WP}; input. */
  "~{WP}": "5",
  /** Physical pin 6: W1; passive. */
  "W1": "6",
  /** Physical pin 7: B1; passive. */
  "B1": "7",
  /** Physical pin 8: A1; passive. */
  "A1": "8",
  /** Physical pin 9: SDA; bidirectional. */
  "SDA": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS": "10",
  /** Physical pin 11: A2; passive. */
  "A2": "11",
  /** Physical pin 12: B2; passive. */
  "B2": "12",
  /** Physical pin 13: W2; passive. */
  "W2": "13",
  /** Physical pin 14: SCL; input. */
  "SCL": "14",
  /** Physical pin 15: DGND; power_in. */
  "DGND": "15",
  /** Physical pin 16: AD1; input. */
  "AD1": "16",
  /** Physical pin 17: A3; passive. */
  "A3": "17",
  /** Physical pin 18: B3; passive. */
  "B3": "18",
  /** Physical pin 19: W3; passive. */
  "W3": "19",
  /** Physical pin 20: VDD; power_in. */
  "VDD": "20",
}) {
  override schema = "Potentiometer_Digital:AD5254";
  override referencePrefix = "U";
}

/**
 * Digital potentiometer, 64 position, 4 output, I2C interface, TSSOP-20
 *
 * KiCad symbol: `Potentiometer_Digital:AD5253`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5253_5254.pdf
 * Keywords: digital potentiometer.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5253 extends Component.withPins({
  /** Physical pin 1: W0; passive. */
  "W0": "1",
  /** Physical pin 2: B0; passive. */
  "B0": "2",
  /** Physical pin 3: A0; passive. */
  "A0": "3",
  /** Physical pin 4: AD0; input. */
  "AD0": "4",
  /** Physical pin 5: ~{WP}; input. */
  "~{WP}": "5",
  /** Physical pin 6: W1; passive. */
  "W1": "6",
  /** Physical pin 7: B1; passive. */
  "B1": "7",
  /** Physical pin 8: A1; passive. */
  "A1": "8",
  /** Physical pin 9: SDA; bidirectional. */
  "SDA": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS": "10",
  /** Physical pin 11: A2; passive. */
  "A2": "11",
  /** Physical pin 12: B2; passive. */
  "B2": "12",
  /** Physical pin 13: W2; passive. */
  "W2": "13",
  /** Physical pin 14: SCL; input. */
  "SCL": "14",
  /** Physical pin 15: DGND; power_in. */
  "DGND": "15",
  /** Physical pin 16: AD1; input. */
  "AD1": "16",
  /** Physical pin 17: A3; passive. */
  "A3": "17",
  /** Physical pin 18: B3; passive. */
  "B3": "18",
  /** Physical pin 19: W3; passive. */
  "W3": "19",
  /** Physical pin 20: VDD; power_in. */
  "VDD": "20",
}) {
  override schema = "Potentiometer_Digital:AD5253";
  override referencePrefix = "U";
}

/**
 * Digital potentiometer, 1024 position, 1% Resistor Tolerance, I2C interface, LFCSP-10
 *
 * KiCad symbol: `Potentiometer_Digital:AD5272BCP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5272_5274.pdf
 * Keywords: digital potentiometer.
 * Default footprint: Package_CSP:LFCSP-WD-10-1EP_3x3mm_P0.5mm_EP1.64x2.38mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5272BCP extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: W; passive. */
  "W": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS_4": "4",
  /** Physical pin 5: EXT_CAP; passive. */
  "EXT_CAP": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: SDA; bidirectional. */
  "SDA": "8",
  /** Physical pin 9: SCL; input. */
  "SCL": "9",
  /** Physical pin 10: ADDR; passive. */
  "ADDR": "10",
  /** Physical pin 11: VSS; passive. */
  "VSS_11": "11",
}) {
  override schema = "Potentiometer_Digital:AD5272BCP";
  override referencePrefix = "U";
}

/**
 * Digital potentiometer, 1024 position, 1% Resistor Tolerance, I2C interface, MSOP-10
 *
 * KiCad symbol: `Potentiometer_Digital:AD5272BRM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5272_5274.pdf
 * Keywords: digital potentiometer.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5272BRM extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: W; passive. */
  "W": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: EXT_CAP; passive. */
  "EXT_CAP": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: SDA; bidirectional. */
  "SDA": "8",
  /** Physical pin 9: SCL; input. */
  "SCL": "9",
  /** Physical pin 10: ADDR; passive. */
  "ADDR": "10",
}) {
  override schema = "Potentiometer_Digital:AD5272BRM";
  override referencePrefix = "U";
}

/**
 * Digital potentiometer, 256 position, 1% Resistor Tolerance, I2C interface, LFCSP-10
 *
 * KiCad symbol: `Potentiometer_Digital:AD5274BCP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5272_5274.pdf
 * Keywords: digital potentiometer.
 * Default footprint: Package_CSP:LFCSP-WD-10-1EP_3x3mm_P0.5mm_EP1.64x2.38mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5274BCP extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: W; passive. */
  "W": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS_4": "4",
  /** Physical pin 5: EXT_CAP; passive. */
  "EXT_CAP": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: SDA; bidirectional. */
  "SDA": "8",
  /** Physical pin 9: SCL; input. */
  "SCL": "9",
  /** Physical pin 10: ADDR; passive. */
  "ADDR": "10",
  /** Physical pin 11: VSS; passive. */
  "VSS_11": "11",
}) {
  override schema = "Potentiometer_Digital:AD5274BCP";
  override referencePrefix = "U";
}

/**
 * Digital potentiometer, 256 position, 1% Resistor Tolerance, I2C interface, MSOP-10
 *
 * KiCad symbol: `Potentiometer_Digital:AD5274BRM`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5272_5274.pdf
 * Keywords: digital potentiometer.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5274BRM extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: A; passive. */
  "A": "2",
  /** Physical pin 3: W; passive. */
  "W": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: EXT_CAP; passive. */
  "EXT_CAP": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: ~{RESET}; input. */
  "~{RESET}": "7",
  /** Physical pin 8: SDA; bidirectional. */
  "SDA": "8",
  /** Physical pin 9: SCL; input. */
  "SCL": "9",
  /** Physical pin 10: ADDR; passive. */
  "ADDR": "10",
}) {
  override schema = "Potentiometer_Digital:AD5274BRM";
  override referencePrefix = "U";
}

/**
 * Digital potentiometer, 256 position, single output, I2C interface
 *
 * KiCad symbol: `Potentiometer_Digital:AD5280`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5280_5282.pdf
 * Keywords: digital potentiometer.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5280 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: W; passive. */
  "W": "2",
  /** Physical pin 3: B; passive. */
  "B": "3",
  /** Physical pin 4: VDD; power_in. */
  "VDD": "4",
  /** Physical pin 5: ~{SHDN}; input. */
  "~{SHDN}": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: SDA; bidirectional. */
  "SDA": "7",
  /** Physical pin 8: AD0; input. */
  "AD0": "8",
  /** Physical pin 9: AD1; input. */
  "AD1": "9",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: VSS; power_in. */
  "VSS": "11",
  /** Physical pin 12: O2; output. */
  "O2": "12",
  /** Physical pin 13: VLOG; power_in. */
  "VLOG": "13",
  /** Physical pin 14: O1; output. */
  "O1": "14",
}) {
  override schema = "Potentiometer_Digital:AD5280";
  override referencePrefix = "U";
}

/**
 * Digital potentiometer, 256 position, dual output, I2C interface
 *
 * KiCad symbol: `Potentiometer_Digital:AD5282`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5280_5282.pdf
 * Keywords: digital potentiometer.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5282 extends Component.withPins({
  /** Physical pin 1: O1; output. */
  "O1": "1",
  /** Physical pin 2: A1; passive. */
  "A1": "2",
  /** Physical pin 3: W1; passive. */
  "W1": "3",
  /** Physical pin 4: B1; passive. */
  "B1": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: ~{SHDN}; input. */
  "~{SHDN}": "6",
  /** Physical pin 7: SCL; input. */
  "SCL": "7",
  /** Physical pin 8: SDA; bidirectional. */
  "SDA": "8",
  /** Physical pin 9: AD0; input. */
  "AD0": "9",
  /** Physical pin 10: AD1; input. */
  "AD1": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: VSS; power_in. */
  "VSS": "12",
  /** Physical pin 13: VLOG; power_in. */
  "VLOG": "13",
  /** Physical pin 14: B2; passive. */
  "B2": "14",
  /** Physical pin 15: W2; passive. */
  "W2": "15",
  /** Physical pin 16: A2; passive. */
  "A2": "16",
}) {
  override schema = "Potentiometer_Digital:AD5282";
  override referencePrefix = "U";
}

/**
 * Digital Potentiometer, 256 steps, SPI interface, +30V/±15V supply, MSOP-10
 *
 * KiCad symbol: `Potentiometer_Digital:AD5290`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5290.pdf
 * Keywords: analog-devices .
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5290 extends Component.withPins({
  /** Physical pin 1: A; passive. */
  "A": "1",
  /** Physical pin 2: B; passive. */
  "B": "2",
  /** Physical pin 3: V_{SS}; power_in. */
  "V_{SS}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: ~{CS}; input. */
  "~{CS}": "5",
  /** Physical pin 6: CLK; input. */
  "CLK": "6",
  /** Physical pin 7: SDI; input. */
  "SDI": "7",
  /** Physical pin 8: SDO; output. */
  "SDO": "8",
  /** Physical pin 9: V_{DD}; power_in. */
  "V_{DD}": "9",
  /** Physical pin 10: W; passive. */
  "W": "10",
}) {
  override schema = "Potentiometer_Digital:AD5290";
  override referencePrefix = "U";
}

/**
 * Digital potentiometer 1024 pos (SPI), TSSOP-14
 *
 * KiCad symbol: `Potentiometer_Digital:AD5293`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5293.pdf
 * Keywords: R POT.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5293 extends Component.withPins({
  /** Physical pin 1: ~{RST}; input. */
  "~{RST}": "1",
  /** Physical pin 2: Vss-; power_in. */
  "Vss-": "2",
  /** Physical pin 3: RH; passive. */
  "RH": "3",
  /** Physical pin 4: RW; passive. */
  "RW": "4",
  /** Physical pin 5: RL; passive. */
  "RL": "5",
  /** Physical pin 6: Vdd+; power_in. */
  "Vdd+": "6",
  /** Physical pin 7: EXT_CAP; passive. */
  "EXT_CAP": "7",
  /** Physical pin 8: Vlog; power_in. */
  "Vlog": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: SDI; input. */
  "SDI": "10",
  /** Physical pin 11: CLK; input. */
  "CLK": "11",
  /** Physical pin 12: ~{CS}; input. */
  "~{CS}": "12",
  /** Physical pin 13: SDO; output. */
  "SDO": "13",
  /** Physical pin 14: RDY; open_collector. */
  "RDY": "14",
}) {
  override schema = "Potentiometer_Digital:AD5293";
  override referencePrefix = "U";
}

/**
 * Dual Digital Potentiometer, Serial, 256 Steps, DIP-14
 *
 * KiCad symbol: `Potentiometer_Digital:DS1267_DIP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1267.pdf
 * Keywords: Dual Digital Potentiometer Maxim.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS1267_DIP extends Component.withPins({
  /** Physical pin 1: VB; power_in. */
  "VB": "1",
  /** Physical pin 2: H1; passive. */
  "H1": "2",
  /** Physical pin 3: L1; passive. */
  "L1": "3",
  /** Physical pin 4: W1; passive. */
  "W1": "4",
  /** Physical pin 5: ~{Reset}; input. */
  "~{Reset}": "5",
  /** Physical pin 6: CLK; input. */
  "CLK": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: DQ; input. */
  "DQ": "8",
  /** Physical pin 9: COUT; output. */
  "COUT": "9",
  /** Physical pin 10: L0; passive. */
  "L0": "10",
  /** Physical pin 11: H0; passive. */
  "H0": "11",
  /** Physical pin 12: W0; passive. */
  "W0": "12",
  /** Physical pin 13: SOUT; output. */
  "SOUT": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
}) {
  override schema = "Potentiometer_Digital:DS1267_DIP";
  override referencePrefix = "U";
}

/**
 * Dual Digital Potentiometer, Serial, 256 Steps, SOIC-16
 *
 * KiCad symbol: `Potentiometer_Digital:DS1267_SOIC`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1267.pdf
 * Keywords: Dual Digital Potentiometer Maxim.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS1267_SOIC extends Component.withPins({
  /** Physical pin 1: VB; power_in. */
  "VB": "1",
  /** Physical pin 3: H1; passive. */
  "H1": "3",
  /** Physical pin 4: L1; passive. */
  "L1": "4",
  /** Physical pin 5: W1; passive. */
  "W1": "5",
  /** Physical pin 6: ~{Reset}; input. */
  "~{Reset}": "6",
  /** Physical pin 7: CLK; input. */
  "CLK": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: DQ; input. */
  "DQ": "9",
  /** Physical pin 10: COUT; output. */
  "COUT": "10",
  /** Physical pin 11: L0; passive. */
  "L0": "11",
  /** Physical pin 12: H0; passive. */
  "H0": "12",
  /** Physical pin 13: W0; passive. */
  "W0": "13",
  /** Physical pin 14: SOUT; output. */
  "SOUT": "14",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
  override schema = "Potentiometer_Digital:DS1267_SOIC";
  override referencePrefix = "U";
}

/**
 * Dual Digital Potentiometer, Serial, 256 Steps, TSSOP-20
 *
 * KiCad symbol: `Potentiometer_Digital:DS1267_TSSOP`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1267.pdf
 * Keywords: Dual Digital Potentiometer Maxim.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS1267_TSSOP extends Component.withPins({
  /** Physical pin 1: VB; power_in. */
  "VB": "1",
  /** Physical pin 3: H1; passive. */
  "H1": "3",
  /** Physical pin 4: L1; passive. */
  "L1": "4",
  /** Physical pin 5: W1; passive. */
  "W1": "5",
  /** Physical pin 6: ~{Reset}; input. */
  "~{Reset}": "6",
  /** Physical pin 7: CLK; input. */
  "CLK": "7",
  /** Physical pin 10: GND; power_in. */
  "GND": "10",
  /** Physical pin 11: DQ; input. */
  "DQ": "11",
  /** Physical pin 13: COUT; output. */
  "COUT": "13",
  /** Physical pin 14: L0; passive. */
  "L0": "14",
  /** Physical pin 15: H0; passive. */
  "H0": "15",
  /** Physical pin 16: W0; passive. */
  "W0": "16",
  /** Physical pin 17: SOUT; output. */
  "SOUT": "17",
  /** Physical pin 20: VCC; power_in. */
  "VCC": "20",
}) {
  override schema = "Potentiometer_Digital:DS1267_TSSOP";
  override referencePrefix = "U";
}

/**
 * Dual Log Audio Digital Potentiometer, 64 positions, TSSOP-16
 *
 * KiCad symbol: `Potentiometer_Digital:DS1882E`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1882.pdf
 * Keywords: digital potentiometer.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS1882E extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: A2; input. */
  "A2": "2",
  /** Physical pin 3: A1; input. */
  "A1": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: A0; input. */
  "A0": "5",
  /** Physical pin 6: W0; passive. */
  "W0": "6",
  /** Physical pin 7: L0; passive. */
  "L0": "7",
  /** Physical pin 8: H0; passive. */
  "H0": "8",
  /** Physical pin 9: L1; passive. */
  "L1": "9",
  /** Physical pin 10: H1; passive. */
  "H1": "10",
  /** Physical pin 11: W1; passive. */
  "W1": "11",
  /** Physical pin 12: ~{CE}; input. */
  "~{CE}": "12",
  /** Physical pin 13: SDA; bidirectional. */
  "SDA": "13",
  /** Physical pin 14: SCL; input. */
  "SCL": "14",
  /** Physical pin 15: VCC; power_in. */
  "VCC": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD": "16",
}) {
  override schema = "Potentiometer_Digital:DS1882E";
  override referencePrefix = "U";
}

/**
 * Digital potentiometer, 128 position, single output, I2C interface, non-volatile with EEPROM
 *
 * KiCad symbol: `Potentiometer_Digital:DS3502`. Reference prefix: `U6`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/DS3502.pdf
 * Keywords: High-Voltage digital potentiometer Analog Maxim nonvolatile.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS3502 extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: VCC; power_in. */
  "VCC": "3",
  /** Physical pin 4: A1; input. */
  "A1": "4",
  /** Physical pin 5: A0; input. */
  "A0": "5",
  /** Physical pin 6: RH; passive. */
  "RH": "6",
  /** Physical pin 7: RW; passive. */
  "RW": "7",
  /** Physical pin 8: RL; passive. */
  "RL": "8",
  /** Physical pin 9: V+; power_in. */
  "V+": "9",
  /** Physical pin 10: SCL; input. */
  "SCL": "10",
}) {
  override schema = "Potentiometer_Digital:DS3502";
  override referencePrefix = "U6";
}

/**
 * Low-Drift Digital Potentiometer
 *
 * KiCad symbol: `Potentiometer_Digital:MAX5436`. Reference prefix: `U`.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX5436-MAX5439.pdf
 * Keywords: digital potentiometer resistor variable.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX5436 extends Component.withPins({
  /** Physical pin 1: SCLK; input. */
  "SCLK": "1",
  /** Physical pin 2: Din; input. */
  "Din": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: Gnd; power_in. */
  "Gnd": "4",
  /** Physical pin 5: V-; power_in. */
  "V-": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
  /** Physical pin 7: H; passive. */
  "H": "7",
  /** Physical pin 8: W; passive. */
  "W": "8",
  /** Physical pin 9: L; passive. */
  "L": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
}) {
  override schema = "Potentiometer_Digital:MAX5436";
  override referencePrefix = "U";
}

/**
 * Low-Drift Digital Potentiometer
 *
 * KiCad symbol: `Potentiometer_Digital:MAX5438`. Reference prefix: `U`.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX5436-MAX5439.pdf
 * Keywords: digital potentiometer resistor variable.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX5438 extends Component.withPins({
  /** Physical pin 1: SCLK; input. */
  "SCLK": "1",
  /** Physical pin 2: Din; input. */
  "Din": "2",
  /** Physical pin 3: CS; input. */
  "CS": "3",
  /** Physical pin 4: Gnd; power_in. */
  "Gnd": "4",
  /** Physical pin 5: V-; power_in. */
  "V-": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
  /** Physical pin 7: H; passive. */
  "H": "7",
  /** Physical pin 8: W; passive. */
  "W": "8",
  /** Physical pin 9: L; passive. */
  "L": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC": "10",
}) {
  override schema = "Potentiometer_Digital:MAX5438";
  override referencePrefix = "U";
}

/**
 * Low-Cost 64-Step Volatile Digital Potentiometer
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4011-xxxxMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21978c.pdf, MSOP-8
 * Keywords: Digital Pot Potentiometer Up Down.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4011_xxxxMS extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 4: W; passive. */
  "W": "4",
  /** Physical pin 5: ~{CS}; input. */
  "~{CS}": "5",
  /** Physical pin 6: B; passive. */
  "B": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: U/~{D}; input. */
  "U/~{D}": "8",
}) {
  override schema = "Potentiometer_Digital:MCP4011-xxxxMS";
  override referencePrefix = "U";
}

/**
 * Low-Cost 64-Step Volatile Digital Potentiometer
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4011-xxxxSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21978c.pdf, SOIC-8
 * Keywords: Digital Pot Potentiometer Up Down.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4011_xxxxSN extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 4: W; passive. */
  "W": "4",
  /** Physical pin 5: ~{CS}; input. */
  "~{CS}": "5",
  /** Physical pin 6: B; passive. */
  "B": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: U/~{D}; input. */
  "U/~{D}": "8",
}) {
  override schema = "Potentiometer_Digital:MCP4011-xxxxSN";
  override referencePrefix = "U";
}

/**
 * Low-Cost 64-Step Volatile Digital Potentiometer
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4012-xxxxCH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21978c.pdf, SOT-23-6
 * Keywords: Digital Pot Potentiometer Up Down.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4012_xxxxCH extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: U/~{D}; input. */
  "U/~{D}": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: W; passive. */
  "W": "5",
  /** Physical pin 6: A; passive. */
  "A": "6",
}) {
  override schema = "Potentiometer_Digital:MCP4012-xxxxCH";
  override referencePrefix = "U";
}

/**
 * Low-Cost 64-Step Volatile Digital Potentiometer
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4013-xxxxCH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21978c.pdf, SOT-23-6
 * Keywords: Digital Pot Potentiometer Up Down.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4013_xxxxCH extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: U/~{D}; input. */
  "U/~{D}": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: W; passive. */
  "W": "5",
  /** Physical pin 6: A; passive. */
  "A": "6",
}) {
  override schema = "Potentiometer_Digital:MCP4013-xxxxCH";
  override referencePrefix = "U";
}

/**
 * Low-Cost 64-Step Volatile Digital Potentiometer
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4014-xxxxOT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21978c.pdf, SOT-23-5
 * Keywords: Digital Pot Potentiometer Up Down.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4014_xxxxOT extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: U/~{D}; input. */
  "U/~{D}": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: W; passive. */
  "W": "5",
}) {
  override schema = "Potentiometer_Digital:MCP4014-xxxxOT";
  override referencePrefix = "U";
}

/**
 * Low-Cost 128-Step Volatile I2C Digital Potentiometer, SC-70-6
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4017-xxxxLT`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22147a.pdf
 * Keywords: TWI pot rheostat.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4017_xxxxLT extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: SCL; input. */
  "SCL": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: B; passive. */
  "B": "5",
  /** Physical pin 6: W; passive. */
  "W": "6",
}) {
  override schema = "Potentiometer_Digital:MCP4017-xxxxLT";
  override referencePrefix = "U";
}

/**
 * Low-Cost 128-Step Volatile I2C Digital Potentiometer, SC-70-6
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4018-xxxxLT`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22147a.pdf
 * Keywords: TWI pot.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4018_xxxxLT extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: SCL; input. */
  "SCL": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: W; passive. */
  "W": "5",
  /** Physical pin 6: A; passive. */
  "A": "6",
}) {
  override schema = "Potentiometer_Digital:MCP4018-xxxxLT";
  override referencePrefix = "U";
}

/**
 * Low-Cost 128-Step Volatile I2C Digital Potentiometer, SC-70-5
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4019-xxxxLT`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22147a.pdf
 * Keywords: TWI pot rheostat.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4019_xxxxLT extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: SCL; input. */
  "SCL": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: W; passive. */
  "W": "5",
}) {
  override schema = "Potentiometer_Digital:MCP4019-xxxxLT";
  override referencePrefix = "U";
}

/**
 * Low-Cost 64-Step Digital Potentiometer with WiperLock™ Technology, MSOP-8
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4021-xxxxMS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21945e.pdf
 * Keywords: Digital Pot Potentiometer Up Down.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4021_xxxxMS extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 4: W; passive. */
  "W": "4",
  /** Physical pin 5: ~{CS}; input. */
  "~{CS}": "5",
  /** Physical pin 6: B; passive. */
  "B": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: U/~{D}; input. */
  "U/~{D}": "8",
}) {
  override schema = "Potentiometer_Digital:MCP4021-xxxxMS";
  override referencePrefix = "U";
}

/**
 * Low-Cost 64-Step Digital Potentiometer with WiperLock™ Technology, SOIC-8
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4021-xxxxSN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21945e.pdf
 * Keywords: Digital Pot Potentiometer Up Down.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4021_xxxxSN extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: A; passive. */
  "A": "3",
  /** Physical pin 4: W; passive. */
  "W": "4",
  /** Physical pin 5: ~{CS}; input. */
  "~{CS}": "5",
  /** Physical pin 6: B; passive. */
  "B": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: U/~{D}; input. */
  "U/~{D}": "8",
}) {
  override schema = "Potentiometer_Digital:MCP4021-xxxxSN";
  override referencePrefix = "U";
}

/**
 * Low-Cost 64-Step Digital Potentiometer with WiperLock™ Technology, SOT-23-6
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4022-xxxxCH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21945e.pdf
 * Keywords: Digital Pot Potentiometer Up Down.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4022_xxxxCH extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: U/~{D}; input. */
  "U/~{D}": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: W; passive. */
  "W": "5",
  /** Physical pin 6: A; passive. */
  "A": "6",
}) {
  override schema = "Potentiometer_Digital:MCP4022-xxxxCH";
  override referencePrefix = "U";
}

/**
 * Low-Cost 64-Step Digital Potentiometer with WiperLock™ Technology, SOT-23-6
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4023-xxxxCH`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21945e.pdf
 * Keywords: Digital Pot Potentiometer Up Down.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4023_xxxxCH extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: U/~{D}; input. */
  "U/~{D}": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: W; passive. */
  "W": "5",
  /** Physical pin 6: A; passive. */
  "A": "6",
}) {
  override schema = "Potentiometer_Digital:MCP4023-xxxxCH";
  override referencePrefix = "U";
}

/**
 * Low-Cost 64-Step Digital Potentiometer with WiperLock™ Technology, SOT-23-5
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4024-xxxxOT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21945e.pdf
 * Keywords: Digital Pot Potentiometer Up Down.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4024_xxxxOT extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: VSS; power_in. */
  "VSS": "2",
  /** Physical pin 3: U/~{D}; input. */
  "U/~{D}": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: W; passive. */
  "W": "5",
}) {
  override schema = "Potentiometer_Digital:MCP4024-xxxxOT";
  override referencePrefix = "U";
}

/**
 * Single Digital Potentiometer, SPI interface, 256 taps, 10 kohm
 *
 * KiCad symbol: `Potentiometer_Digital:MCP41010`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11195c.pdf
 * Keywords: R POT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP41010 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SCK; passive. */
  "SCK": "2",
  /** Physical pin 3: SI; input. */
  "SI": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: PA0; passive. */
  "PA0": "5",
  /** Physical pin 6: PW0; passive. */
  "PW0": "6",
  /** Physical pin 7: PB0; passive. */
  "PB0": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Potentiometer_Digital:MCP41010";
  override referencePrefix = "U";
}

/**
 * Single Digital Potentiometer, SPI interface, 256 taps, 50 kohm
 *
 * KiCad symbol: `Potentiometer_Digital:MCP41050`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11195c.pdf
 * Keywords: R POT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP41050 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SCK; passive. */
  "SCK": "2",
  /** Physical pin 3: SI; input. */
  "SI": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: PA0; passive. */
  "PA0": "5",
  /** Physical pin 6: PW0; passive. */
  "PW0": "6",
  /** Physical pin 7: PB0; passive. */
  "PB0": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Potentiometer_Digital:MCP41050";
  override referencePrefix = "U";
}

/**
 * Single Digital Potentiometer, SPI interface, 256 taps, 100 kohm
 *
 * KiCad symbol: `Potentiometer_Digital:MCP41100`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11195c.pdf
 * Keywords: R POT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP41100 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SCK; passive. */
  "SCK": "2",
  /** Physical pin 3: SI; input. */
  "SI": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: PA0; passive. */
  "PA0": "5",
  /** Physical pin 6: PW0; passive. */
  "PW0": "6",
  /** Physical pin 7: PB0; passive. */
  "PB0": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Potentiometer_Digital:MCP41100";
  override referencePrefix = "U";
}

/**
 * Single Digital Potentiometer, SPI interface, 129 taps, 5/10/50/100 kohm, volatile memory
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4131-xxxx-P`. Reference prefix: `U`.
 * Footprint filters: DIP?8*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/22060b.pdf
 * Keywords: digipot RAM 7-bit 7bit.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4131_xxxx_P extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SCK; input. */
  "SCK": "2",
  /** Physical pin 3: SDI/SDO; bidirectional. */
  "SDI/SDO": "3",
  /** Physical pin 4: V_{SS}; power_in. */
  "V_{SS}": "4",
  /** Physical pin 5: P0A; passive. */
  "P0A": "5",
  /** Physical pin 6: P0W; passive. */
  "P0W": "6",
  /** Physical pin 7: P0B; passive. */
  "P0B": "7",
  /** Physical pin 8: V_{DD}; power_in. */
  "V_{DD}": "8",
}) {
  override schema = "Potentiometer_Digital:MCP4131-xxxx-P";
  override referencePrefix = "U";
}

/**
 * Single Digital Rheostat, SPI interface, 129 taps, 5/10/50/100 kohm, volatile memory
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4132-xxxx-P`. Reference prefix: `U`.
 * Footprint filters: DIP?8*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/22060b.pdf
 * Keywords: potentiometer digipot RAM 7-bit 7bit.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4132_xxxx_P extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SCK; input. */
  "SCK": "2",
  /** Physical pin 4: V_{SS}; power_in. */
  "V_{SS}": "4",
  /** Physical pin 8: V_{DD}; power_in. */
  "V_{DD}": "8",
  /** Physical pin 3: SDI; input. */
  "SDI": "3",
  /** Physical pin 5: P0W; passive. */
  "P0W": "5",
  /** Physical pin 6: P0B; passive. */
  "P0B": "6",
  /** Physical pin 7: SDO; output. */
  "SDO": "7",
}) {
  override schema = "Potentiometer_Digital:MCP4132-xxxx-P";
  override referencePrefix = "U";
}

/**
 * Single Digital Potentiometer, SPI interface, 129 taps, 5/10/50/100 kohm, non-volatile memory
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4141-xxxx-P`. Reference prefix: `U`.
 * Footprint filters: DIP?8*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/22059b.pdf
 * Keywords: digipot EE 7-bit 7bit.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4141_xxxx_P extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SCK; input. */
  "SCK": "2",
  /** Physical pin 3: SDI/SDO; bidirectional. */
  "SDI/SDO": "3",
  /** Physical pin 4: V_{SS}; power_in. */
  "V_{SS}": "4",
  /** Physical pin 5: P0A; passive. */
  "P0A": "5",
  /** Physical pin 6: P0W; passive. */
  "P0W": "6",
  /** Physical pin 7: P0B; passive. */
  "P0B": "7",
  /** Physical pin 8: V_{DD}; power_in. */
  "V_{DD}": "8",
}) {
  override schema = "Potentiometer_Digital:MCP4141-xxxx-P";
  override referencePrefix = "U";
}

/**
 * Single Digital Rheostat, SPI interface, 129 taps, 5/10/50/100 kohm, non-volatile memory
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4142-xxxx-P`. Reference prefix: `U`.
 * Footprint filters: DIP?8*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/22059b.pdf
 * Keywords: potentiometer digipot EE 7-bit 7bit.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4142_xxxx_P extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SCK; input. */
  "SCK": "2",
  /** Physical pin 4: V_{SS}; power_in. */
  "V_{SS}": "4",
  /** Physical pin 8: V_{DD}; power_in. */
  "V_{DD}": "8",
  /** Physical pin 3: SDI; input. */
  "SDI": "3",
  /** Physical pin 5: P0W; passive. */
  "P0W": "5",
  /** Physical pin 6: P0B; passive. */
  "P0B": "6",
  /** Physical pin 7: SDO; output. */
  "SDO": "7",
}) {
  override schema = "Potentiometer_Digital:MCP4142-xxxx-P";
  override referencePrefix = "U";
}

/**
 * Single Digital Potentiometer, SPI interface, 257 taps, 5/10/50/100 kohm, volatile memory
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4151-xxxx-P`. Reference prefix: `U`.
 * Footprint filters: DIP?8*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/22060b.pdf
 * Keywords: digipot RAM 8-bit 8bit.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4151_xxxx_P extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SCK; input. */
  "SCK": "2",
  /** Physical pin 3: SDI/SDO; bidirectional. */
  "SDI/SDO": "3",
  /** Physical pin 4: V_{SS}; power_in. */
  "V_{SS}": "4",
  /** Physical pin 5: P0A; passive. */
  "P0A": "5",
  /** Physical pin 6: P0W; passive. */
  "P0W": "6",
  /** Physical pin 7: P0B; passive. */
  "P0B": "7",
  /** Physical pin 8: V_{DD}; power_in. */
  "V_{DD}": "8",
}) {
  override schema = "Potentiometer_Digital:MCP4151-xxxx-P";
  override referencePrefix = "U";
}

/**
 * Single Digital Rheostat, SPI interface, 257 taps, 5/10/50/100 kohm, volatile memory
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4152-xxxx-P`. Reference prefix: `U`.
 * Footprint filters: DIP?8*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/22060b.pdf
 * Keywords: potentiometer digipot RAM 8-bit 8bit.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4152_xxxx_P extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SCK; input. */
  "SCK": "2",
  /** Physical pin 4: V_{SS}; power_in. */
  "V_{SS}": "4",
  /** Physical pin 8: V_{DD}; power_in. */
  "V_{DD}": "8",
  /** Physical pin 3: SDI; input. */
  "SDI": "3",
  /** Physical pin 5: P0W; passive. */
  "P0W": "5",
  /** Physical pin 6: P0B; passive. */
  "P0B": "6",
  /** Physical pin 7: SDO; output. */
  "SDO": "7",
}) {
  override schema = "Potentiometer_Digital:MCP4152-xxxx-P";
  override referencePrefix = "U";
}

/**
 * Single Digital Potentiometer, SPI interface, 257 taps, 5/10/50/100 kohm, non-volatile memory
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4161-xxxx-P`. Reference prefix: `U`.
 * Footprint filters: DIP?8*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/22059b.pdf
 * Keywords: digipot EE 8-bit 8bit.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4161_xxxx_P extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SCK; input. */
  "SCK": "2",
  /** Physical pin 3: SDI/SDO; bidirectional. */
  "SDI/SDO": "3",
  /** Physical pin 4: V_{SS}; power_in. */
  "V_{SS}": "4",
  /** Physical pin 5: P0A; passive. */
  "P0A": "5",
  /** Physical pin 6: P0W; passive. */
  "P0W": "6",
  /** Physical pin 7: P0B; passive. */
  "P0B": "7",
  /** Physical pin 8: V_{DD}; power_in. */
  "V_{DD}": "8",
}) {
  override schema = "Potentiometer_Digital:MCP4161-xxxx-P";
  override referencePrefix = "U";
}

/**
 * Single Digital Rheostat, SPI interface, 257 taps, 5/10/50/100 kohm, non-volatile memory
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4162-xxxx-P`. Reference prefix: `U`.
 * Footprint filters: DIP?8*W7.62mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/22059b.pdf
 * Keywords: potentiometer digipot EE 8-bit 8bit.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4162_xxxx_P extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SCK; input. */
  "SCK": "2",
  /** Physical pin 4: V_{SS}; power_in. */
  "V_{SS}": "4",
  /** Physical pin 8: V_{DD}; power_in. */
  "V_{DD}": "8",
  /** Physical pin 3: SDI; input. */
  "SDI": "3",
  /** Physical pin 5: P0W; passive. */
  "P0W": "5",
  /** Physical pin 6: P0B; passive. */
  "P0B": "6",
  /** Physical pin 7: SDO; output. */
  "SDO": "7",
}) {
  override schema = "Potentiometer_Digital:MCP4162-xxxx-P";
  override referencePrefix = "U";
}

/**
 * 10-bit single-channel digital potentiometer, I2C / SPI interface, MTP memory, VQFN-16
 *
 * KiCad symbol: `Potentiometer_Digital:MCP41U83x-xxxx-7N`. Reference prefix: `U`.
 * Footprint filters: *QFN*4x4mm?P0.65mm?EP2.6*x2.6*, *QFN*4x4mm?P0.65mm?EP2.7x2.7*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MCP41U83-Data-Sheet-DS20007000.pdf
 * Keywords: Microchip MCP41U83T-502E/7N MCP41U83T-103E/7N MCP41U83T-203E/7N MCP41U83T-503E/7N MCP41U83T-104E/7N.
 * Default footprint: Package_DFN_QFN:Texas_RSA_VQFN-16-1EP_4x4mm_P0.65mm_EP2.7x2.7mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP41U83x_xxxx_7N extends Component.withPins({
  /** Physical pin 1: SDO/A1; bidirectional. */
  "SDO/A1": "1",
  /** Physical pin 2: SCK/SCL; input. */
  "SCK/SCL": "2",
  /** Physical pin 3: SDI/SDA; bidirectional. */
  "SDI/SDA": "3",
  /** Physical pin 4: ~{CS}/A0; input. */
  "~{CS}/A0": "4",
  /** Physical pin 5: SPI2C; input. */
  "SPI2C": "5",
  /** Physical pin 6: DGND; power_in. */
  "DGND": "6",
  /** Physical pin 7: P0B; passive. */
  "P0B": "7",
  /** Physical pin 8: P0W; passive. */
  "P0W": "8",
  /** Physical pin 9: P0A; passive. */
  "P0A": "9",
  /** Physical pin 10: V_{SS}; power_in. */
  "V_{SS}": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: V_{DD}; power_in. */
  "V_{DD}": "16",
  /** Physical pin 17: EP; power_in. */
  "EP": "17",
}) {
  override schema = "Potentiometer_Digital:MCP41U83x-xxxx-7N";
  override referencePrefix = "U";
}

/**
 * 10-bit single-channel digital potentiometer, I2C / SPI interface, MTP memory, TSSOP-14
 *
 * KiCad symbol: `Potentiometer_Digital:MCP41U83x-xxxx-ST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm?P0.65mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/APID/ProductDocuments/DataSheets/MCP41U83-Data-Sheet-DS20007000.pdf
 * Keywords: Microchip MCP41U83T-502E/ST MCP41U83T-103E/ST MCP41U83T-203E/ST MCP41U83T-503E/ST MCP41U83T-104E/ST.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP41U83x_xxxx_ST extends Component.withPins({
  /** Physical pin 1: V_{DD}; power_in. */
  "V_{DD}": "1",
  /** Physical pin 2: SDO/A1; bidirectional. */
  "SDO/A1": "2",
  /** Physical pin 3: SCK/SCL; input. */
  "SCK/SCL": "3",
  /** Physical pin 4: SDI/SDA; bidirectional. */
  "SDI/SDA": "4",
  /** Physical pin 5: ~{CS}/A0; input. */
  "~{CS}/A0": "5",
  /** Physical pin 6: SPI2C; input. */
  "SPI2C": "6",
  /** Physical pin 7: DGND; power_in. */
  "DGND": "7",
  /** Physical pin 8: P0B; passive. */
  "P0B": "8",
  /** Physical pin 9: P0W; passive. */
  "P0W": "9",
  /** Physical pin 10: P0A; passive. */
  "P0A": "10",
  /** Physical pin 11: V_{SS}; power_in. */
  "V_{SS}": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
}) {
  override schema = "Potentiometer_Digital:MCP41U83x-xxxx-ST";
  override referencePrefix = "U";
}

/**
 * Dual Digital Potentiometer, SPI interface, 256 taps, 10 kohm
 *
 * KiCad symbol: `Potentiometer_Digital:MCP42010`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11195c.pdf
 * Keywords: R POT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP42010 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SCK; input. */
  "SCK": "2",
  /** Physical pin 3: SI; input. */
  "SI": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: PB1; passive. */
  "PB1": "5",
  /** Physical pin 6: PW1; passive. */
  "PW1": "6",
  /** Physical pin 7: PA1; passive. */
  "PA1": "7",
  /** Physical pin 8: PA0; passive. */
  "PA0": "8",
  /** Physical pin 9: PW0; passive. */
  "PW0": "9",
  /** Physical pin 10: PB0; passive. */
  "PB0": "10",
  /** Physical pin 11: ~{RS}; input. */
  "~{RS}": "11",
  /** Physical pin 12: ~{SHDN}; input. */
  "~{SHDN}": "12",
  /** Physical pin 13: SO; output. */
  "SO": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
}) {
  override schema = "Potentiometer_Digital:MCP42010";
  override referencePrefix = "U";
}

/**
 * Dual Digital Potentiometer, SPI interface, 256 taps, 50 kohm
 *
 * KiCad symbol: `Potentiometer_Digital:MCP42050`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11195c.pdf
 * Keywords: R POT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP42050 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SCK; input. */
  "SCK": "2",
  /** Physical pin 3: SI; input. */
  "SI": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: PB1; passive. */
  "PB1": "5",
  /** Physical pin 6: PW1; passive. */
  "PW1": "6",
  /** Physical pin 7: PA1; passive. */
  "PA1": "7",
  /** Physical pin 8: PA0; passive. */
  "PA0": "8",
  /** Physical pin 9: PW0; passive. */
  "PW0": "9",
  /** Physical pin 10: PB0; passive. */
  "PB0": "10",
  /** Physical pin 11: ~{RS}; input. */
  "~{RS}": "11",
  /** Physical pin 12: ~{SHDN}; input. */
  "~{SHDN}": "12",
  /** Physical pin 13: SO; output. */
  "SO": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
}) {
  override schema = "Potentiometer_Digital:MCP42050";
  override referencePrefix = "U";
}

/**
 * Dual Digital Potentiometer, SPI interface, 256 taps, 100 kohm
 *
 * KiCad symbol: `Potentiometer_Digital:MCP42100`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x8.7mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/11195c.pdf
 * Keywords: R POT.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP42100 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SCK; input. */
  "SCK": "2",
  /** Physical pin 3: SI; input. */
  "SI": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: PB1; passive. */
  "PB1": "5",
  /** Physical pin 6: PW1; passive. */
  "PW1": "6",
  /** Physical pin 7: PA1; passive. */
  "PA1": "7",
  /** Physical pin 8: PA0; passive. */
  "PA0": "8",
  /** Physical pin 9: PW0; passive. */
  "PW0": "9",
  /** Physical pin 10: PB0; passive. */
  "PB0": "10",
  /** Physical pin 11: ~{RS}; input. */
  "~{RS}": "11",
  /** Physical pin 12: ~{SHDN}; input. */
  "~{SHDN}": "12",
  /** Physical pin 13: SO; output. */
  "SO": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
}) {
  override schema = "Potentiometer_Digital:MCP42100";
  override referencePrefix = "U";
}

/**
 * Dual 8 Bit Digital Pot, SPI, Volatile Memory, QFN-16
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4251-xxxx-ML`. Reference prefix: `U`.
 * Footprint filters: QFN*4x4mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/22060b.pdf
 * Keywords: Digital Pot Potentiometer.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_4x4mm_P0.65mm_EP2.5x2.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4251_xxxx_ML extends Component.withPins({
  /** Physical pin 1: SCK; input. */
  "SCK": "1",
  /** Physical pin 2: SDI; input. */
  "SDI": "2",
  /** Physical pin 3: VSS; power_in. */
  "VSS_3": "3",
  /** Physical pin 4: VSS; passive. */
  "VSS_4": "4",
  /** Physical pin 5: P1B; passive. */
  "P1B": "5",
  /** Physical pin 6: P1W; passive. */
  "P1W": "6",
  /** Physical pin 7: P1A; passive. */
  "P1A": "7",
  /** Physical pin 8: P0A; passive. */
  "P0A": "8",
  /** Physical pin 9: P0W; passive. */
  "P0W": "9",
  /** Physical pin 10: P0B; passive. */
  "P0B": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC": "11",
  /** Physical pin 12: ~{WP}; input. */
  "~{WP}": "12",
  /** Physical pin 13: ~{SHDN}; input. */
  "~{SHDN}": "13",
  /** Physical pin 14: SDO; output. */
  "SDO": "14",
  /** Physical pin 15: VDD; power_in. */
  "VDD": "15",
  /** Physical pin 16: ~{CS}; input. */
  "~{CS}": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
  override schema = "Potentiometer_Digital:MCP4251-xxxx-ML";
  override referencePrefix = "U";
}

/**
 * Dual 8 Bit Digital Pot, SPI, Volatile Memory, PDIP-14
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4251-xxxx-P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/22060b.pdf
 * Keywords: Digital Pot Potentiometer.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4251_xxxx_P extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SCK; input. */
  "SCK": "2",
  /** Physical pin 3: SDI; input. */
  "SDI": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: P1B; passive. */
  "P1B": "5",
  /** Physical pin 6: P1W; passive. */
  "P1W": "6",
  /** Physical pin 7: P1A; passive. */
  "P1A": "7",
  /** Physical pin 8: P0A; passive. */
  "P0A": "8",
  /** Physical pin 9: P0W; passive. */
  "P0W": "9",
  /** Physical pin 10: P0B; passive. */
  "P0B": "10",
  /** Physical pin 11: ~{WP}; input. */
  "~{WP}": "11",
  /** Physical pin 12: ~{SHDN}; input. */
  "~{SHDN}": "12",
  /** Physical pin 13: SDO; output. */
  "SDO": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
}) {
  override schema = "Potentiometer_Digital:MCP4251-xxxx-P";
  override referencePrefix = "U";
}

/**
 * Dual 8 Bit Digital Pot, SPI, Volatile Memory, SOIC-14
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4251-xxxx-SL`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/22060b.pdf
 * Keywords: Digital Pot Potentiometer.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4251_xxxx_SL extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SCK; input. */
  "SCK": "2",
  /** Physical pin 3: SDI; input. */
  "SDI": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: P1B; passive. */
  "P1B": "5",
  /** Physical pin 6: P1W; passive. */
  "P1W": "6",
  /** Physical pin 7: P1A; passive. */
  "P1A": "7",
  /** Physical pin 8: P0A; passive. */
  "P0A": "8",
  /** Physical pin 9: P0W; passive. */
  "P0W": "9",
  /** Physical pin 10: P0B; passive. */
  "P0B": "10",
  /** Physical pin 11: ~{WP}; input. */
  "~{WP}": "11",
  /** Physical pin 12: ~{SHDN}; input. */
  "~{SHDN}": "12",
  /** Physical pin 13: SDO; output. */
  "SDO": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
}) {
  override schema = "Potentiometer_Digital:MCP4251-xxxx-SL";
  override referencePrefix = "U";
}

/**
 * Dual 8 Bit Digital Pot, SPI, Volatile Memory, TSSOP-14
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4251-xxxx-ST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/22060b.pdf
 * Keywords: Digital Pot Potentiometer.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4251_xxxx_ST extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SCK; input. */
  "SCK": "2",
  /** Physical pin 3: SDI; input. */
  "SDI": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: P1B; passive. */
  "P1B": "5",
  /** Physical pin 6: P1W; passive. */
  "P1W": "6",
  /** Physical pin 7: P1A; passive. */
  "P1A": "7",
  /** Physical pin 8: P0A; passive. */
  "P0A": "8",
  /** Physical pin 9: P0W; passive. */
  "P0W": "9",
  /** Physical pin 10: P0B; passive. */
  "P0B": "10",
  /** Physical pin 11: ~{WP}; input. */
  "~{WP}": "11",
  /** Physical pin 12: ~{SHDN}; input. */
  "~{SHDN}": "12",
  /** Physical pin 13: SDO; output. */
  "SDO": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
}) {
  override schema = "Potentiometer_Digital:MCP4251-xxxx-ST";
  override referencePrefix = "U";
}

/**
 * Quad 7 Bit Digital Potentiometer, I²C, Volatile Memory, TSSOP-20
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4431-xxxx-ST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/22267A_MCP4431.pdf
 * Keywords: Digital Pot Potentiometer DigiPot.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4431_xxxx_ST extends Component.withPins({
  /** Physical pin 11: P0A; passive. */
  "P0A": "11",
  /** Physical pin 12: P0W; passive. */
  "P0W": "12",
  /** Physical pin 13: P0B; passive. */
  "P0B": "13",
  /** Physical pin 8: P1B; passive. */
  "P1B": "8",
  /** Physical pin 9: P1W; passive. */
  "P1W": "9",
  /** Physical pin 10: P1A; passive. */
  "P1A": "10",
  /** Physical pin 18: P2B; passive. */
  "P2B": "18",
  /** Physical pin 19: P2W; passive. */
  "P2W": "19",
  /** Physical pin 20: P2A; passive. */
  "P2A": "20",
  /** Physical pin 1: P3A; passive. */
  "P3A": "1",
  /** Physical pin 2: P3W; passive. */
  "P3W": "2",
  /** Physical pin 3: P3B; passive. */
  "P3B": "3",
  /** Physical pin 4: HVC/A0; input. */
  "HVC/A0": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 14: NC; no_connect. */
  "NC": "14",
  /** Physical pin 15: ~{RESET}; input. */
  "~{RESET}": "15",
  /** Physical pin 16: A1; input. */
  "A1": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD": "17",
}) {
  override schema = "Potentiometer_Digital:MCP4431-xxxx-ST";
  override referencePrefix = "U";
}

/**
 * Quad 7 Bit Digital Potentiometer, I²C, Nonvolatile Memory, TSSOP-20
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4441-xxxx-ST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/22267A_MCP4431.pdf
 * Keywords: Digital Pot Potentiometer DigiPot.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4441_xxxx_ST extends Component.withPins({
  /** Physical pin 11: P0A; passive. */
  "P0A": "11",
  /** Physical pin 12: P0W; passive. */
  "P0W": "12",
  /** Physical pin 13: P0B; passive. */
  "P0B": "13",
  /** Physical pin 8: P1B; passive. */
  "P1B": "8",
  /** Physical pin 9: P1W; passive. */
  "P1W": "9",
  /** Physical pin 10: P1A; passive. */
  "P1A": "10",
  /** Physical pin 18: P2B; passive. */
  "P2B": "18",
  /** Physical pin 19: P2W; passive. */
  "P2W": "19",
  /** Physical pin 20: P2A; passive. */
  "P2A": "20",
  /** Physical pin 1: P3A; passive. */
  "P3A": "1",
  /** Physical pin 2: P3W; passive. */
  "P3W": "2",
  /** Physical pin 3: P3B; passive. */
  "P3B": "3",
  /** Physical pin 4: HVC/A0; input. */
  "HVC/A0": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 14: NC; no_connect. */
  "NC": "14",
  /** Physical pin 15: ~{RESET}; input. */
  "~{RESET}": "15",
  /** Physical pin 16: A1; input. */
  "A1": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD": "17",
}) {
  override schema = "Potentiometer_Digital:MCP4441-xxxx-ST";
  override referencePrefix = "U";
}

/**
 * Quad 8 Bit Digital Potentiometer, I²C, Volatile Memory, TSSOP-20
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4451-xxxx-ST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/22267A_MCP4431.pdf
 * Keywords: Digital Pot Potentiometer DigiPot.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4451_xxxx_ST extends Component.withPins({
  /** Physical pin 11: P0A; passive. */
  "P0A": "11",
  /** Physical pin 12: P0W; passive. */
  "P0W": "12",
  /** Physical pin 13: P0B; passive. */
  "P0B": "13",
  /** Physical pin 8: P1B; passive. */
  "P1B": "8",
  /** Physical pin 9: P1W; passive. */
  "P1W": "9",
  /** Physical pin 10: P1A; passive. */
  "P1A": "10",
  /** Physical pin 18: P2B; passive. */
  "P2B": "18",
  /** Physical pin 19: P2W; passive. */
  "P2W": "19",
  /** Physical pin 20: P2A; passive. */
  "P2A": "20",
  /** Physical pin 1: P3A; passive. */
  "P3A": "1",
  /** Physical pin 2: P3W; passive. */
  "P3W": "2",
  /** Physical pin 3: P3B; passive. */
  "P3B": "3",
  /** Physical pin 4: HVC/A0; input. */
  "HVC/A0": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 14: NC; no_connect. */
  "NC": "14",
  /** Physical pin 15: ~{RESET}; input. */
  "~{RESET}": "15",
  /** Physical pin 16: A1; input. */
  "A1": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD": "17",
}) {
  override schema = "Potentiometer_Digital:MCP4451-xxxx-ST";
  override referencePrefix = "U";
}

/**
 * Quad 8 Bit Digital Potentiometer, I²C, Nonvolatile Memory, TSSOP-20
 *
 * KiCad symbol: `Potentiometer_Digital:MCP4461-xxxx-ST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x6.5mm*P0.65mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/22267A_MCP4431.pdf
 * Keywords: Digital Pot Potentiometer DigiPot.
 * Default footprint: Package_SO:TSSOP-20_4.4x6.5mm_P0.65mm.
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP4461_xxxx_ST extends Component.withPins({
  /** Physical pin 11: P0A; passive. */
  "P0A": "11",
  /** Physical pin 12: P0W; passive. */
  "P0W": "12",
  /** Physical pin 13: P0B; passive. */
  "P0B": "13",
  /** Physical pin 8: P1B; passive. */
  "P1B": "8",
  /** Physical pin 9: P1W; passive. */
  "P1W": "9",
  /** Physical pin 10: P1A; passive. */
  "P1A": "10",
  /** Physical pin 18: P2B; passive. */
  "P2B": "18",
  /** Physical pin 19: P2W; passive. */
  "P2W": "19",
  /** Physical pin 20: P2A; passive. */
  "P2A": "20",
  /** Physical pin 1: P3A; passive. */
  "P3A": "1",
  /** Physical pin 2: P3W; passive. */
  "P3W": "2",
  /** Physical pin 3: P3B; passive. */
  "P3B": "3",
  /** Physical pin 4: HVC/A0; input. */
  "HVC/A0": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 14: NC; no_connect. */
  "NC": "14",
  /** Physical pin 15: ~{RESET}; input. */
  "~{RESET}": "15",
  /** Physical pin 16: A1; input. */
  "A1": "16",
  /** Physical pin 17: VDD; power_in. */
  "VDD": "17",
}) {
  override schema = "Potentiometer_Digital:MCP4461-xxxx-ST";
  override referencePrefix = "U";
}

/**
 * 7/8-bit single +36V (±18V) digital pot, I2C serial interface, volatile memory, QFN-20
 *
 * KiCad symbol: `Potentiometer_Digital:MCP45HV51-MQ`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005304A.pdf
 * Keywords: I2C Potentiometer pot digital.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_5x5mm_P0.65mm_EP3.35x3.35mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP45HV51_MQ extends Component.withPins({
  /** Physical pin 1: VL; power_in. */
  "VL": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: A1; input. */
  "A1": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: A0; input. */
  "A0": "5",
  /** Physical pin 6: ~{WLAT}; input. */
  "~{WLAT}": "6",
  /** Physical pin 7: ~{SHDN}; input. */
  "~{SHDN}": "7",
  /** Physical pin 8: NC; passive. */
  "NC_8": "8",
  /** Physical pin 9: NC; passive. */
  "NC_9": "9",
  /** Physical pin 10: NC; passive. */
  "NC_10": "10",
  /** Physical pin 11: DGND; power_in. */
  "DGND": "11",
  /** Physical pin 12: V-; power_in. */
  "V-": "12",
  /** Physical pin 13: P0B; passive. */
  "P0B": "13",
  /** Physical pin 14: P0W; passive. */
  "P0W": "14",
  /** Physical pin 15: P0A; passive. */
  "P0A": "15",
  /** Physical pin 16: V+; power_in. */
  "V+": "16",
  /** Physical pin 17: NC; passive. */
  "NC_17": "17",
  /** Physical pin 18: NC; passive. */
  "NC_18": "18",
  /** Physical pin 19: NC; passive. */
  "NC_19": "19",
  /** Physical pin 20: NC; passive. */
  "NC_20": "20",
  /** Physical pin 21: EP; power_in. */
  "EP": "21",
}) {
  override schema = "Potentiometer_Digital:MCP45HV51-MQ";
  override referencePrefix = "U";
}

/**
 * 7/8-bit single +36V (±18V) digital pot, I2C serial interface, volatile memory, QFN-20
 *
 * KiCad symbol: `Potentiometer_Digital:MCP45HV31-MQ`. Reference prefix: `U`.
 * Footprint filters: QFN*5x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005304A.pdf
 * Keywords: I2C Potentiometer pot digital.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_5x5mm_P0.65mm_EP3.35x3.35mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP45HV31_MQ extends Component.withPins({
  /** Physical pin 1: VL; power_in. */
  "VL": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: A1; input. */
  "A1": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: A0; input. */
  "A0": "5",
  /** Physical pin 6: ~{WLAT}; input. */
  "~{WLAT}": "6",
  /** Physical pin 7: ~{SHDN}; input. */
  "~{SHDN}": "7",
  /** Physical pin 8: NC; passive. */
  "NC_8": "8",
  /** Physical pin 9: NC; passive. */
  "NC_9": "9",
  /** Physical pin 10: NC; passive. */
  "NC_10": "10",
  /** Physical pin 11: DGND; power_in. */
  "DGND": "11",
  /** Physical pin 12: V-; power_in. */
  "V-": "12",
  /** Physical pin 13: P0B; passive. */
  "P0B": "13",
  /** Physical pin 14: P0W; passive. */
  "P0W": "14",
  /** Physical pin 15: P0A; passive. */
  "P0A": "15",
  /** Physical pin 16: V+; power_in. */
  "V+": "16",
  /** Physical pin 17: NC; passive. */
  "NC_17": "17",
  /** Physical pin 18: NC; passive. */
  "NC_18": "18",
  /** Physical pin 19: NC; passive. */
  "NC_19": "19",
  /** Physical pin 20: NC; passive. */
  "NC_20": "20",
  /** Physical pin 21: EP; power_in. */
  "EP": "21",
}) {
  override schema = "Potentiometer_Digital:MCP45HV31-MQ";
  override referencePrefix = "U";
}

/**
 * 7/8-bit single +36V (±18V) digital pot, I2C serial interface, volatile memory, TSSOP-14
 *
 * KiCad symbol: `Potentiometer_Digital:MCP45HV51-ST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005304A.pdf
 * Keywords: I2C Potentiometer pot digital.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP45HV51_ST extends Component.withPins({
  /** Physical pin 1: VL; power_in. */
  "VL": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: A1; input. */
  "A1": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: A0; input. */
  "A0": "5",
  /** Physical pin 6: ~{WLAT}; input. */
  "~{WLAT}": "6",
  /** Physical pin 7: NC; passive. */
  "NC": "7",
  /** Physical pin 8: ~{SHDN}; input. */
  "~{SHDN}": "8",
  /** Physical pin 9: DGND; power_in. */
  "DGND": "9",
  /** Physical pin 10: V-; power_in. */
  "V-": "10",
  /** Physical pin 11: P0B; passive. */
  "P0B": "11",
  /** Physical pin 12: P0W; passive. */
  "P0W": "12",
  /** Physical pin 13: P0A; passive. */
  "P0A": "13",
  /** Physical pin 14: V+; power_in. */
  "V+": "14",
}) {
  override schema = "Potentiometer_Digital:MCP45HV51-ST";
  override referencePrefix = "U";
}

/**
 * 7/8-bit single +36V (±18V) digital pot, I2C serial interface, volatile memory, TSSOP-14
 *
 * KiCad symbol: `Potentiometer_Digital:MCP45HV31-ST`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005304A.pdf
 * Keywords: I2C Potentiometer pot digital.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MCP45HV31_ST extends Component.withPins({
  /** Physical pin 1: VL; power_in. */
  "VL": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: A1; input. */
  "A1": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: A0; input. */
  "A0": "5",
  /** Physical pin 6: ~{WLAT}; input. */
  "~{WLAT}": "6",
  /** Physical pin 7: NC; passive. */
  "NC": "7",
  /** Physical pin 8: ~{SHDN}; input. */
  "~{SHDN}": "8",
  /** Physical pin 9: DGND; power_in. */
  "DGND": "9",
  /** Physical pin 10: V-; power_in. */
  "V-": "10",
  /** Physical pin 11: P0B; passive. */
  "P0B": "11",
  /** Physical pin 12: P0W; passive. */
  "P0W": "12",
  /** Physical pin 13: P0A; passive. */
  "P0A": "13",
  /** Physical pin 14: V+; power_in. */
  "V+": "14",
}) {
  override schema = "Potentiometer_Digital:MCP45HV31-ST";
  override referencePrefix = "U";
}

/**
 * 128-TAPS Single-Channel Digital Potentiometer, I2C Interface, SC-70-6
 *
 * KiCad symbol: `Potentiometer_Digital:TPL0401A-10-Q1`. Reference prefix: `U`.
 * Footprint filters: Texas*R*PDSO*G*.
 * @see http://www.ti.com/lit/ds/symlink/tpl0401a-10-q1.pdf
 * Keywords: Digital Pot Potentiometer I2C.
 * Default footprint: Package_TO_SOT_SMD:Texas_R-PDSO-G6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPL0401A_10_Q1 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: SCL; input. */
  "SCL": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: W; passive. */
  "W": "5",
  /** Physical pin 6: H; passive. */
  "H": "6",
}) {
  override schema = "Potentiometer_Digital:TPL0401A-10-Q1";
  override referencePrefix = "U";
}

/**
 * 128-TAPS Single-Channel Digital Potentiometer, I2C Interface, SC-70-6
 *
 * KiCad symbol: `Potentiometer_Digital:TPL0401B-10-Q1`. Reference prefix: `U`.
 * Footprint filters: Texas*R*PDSO*G*.
 * @see http://www.ti.com/lit/ds/symlink/tpl0401a-10-q1.pdf
 * Keywords: Digital Pot Potentiometer I2C.
 * Default footprint: Package_TO_SOT_SMD:Texas_R-PDSO-G6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPL0401B_10_Q1 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: SCL; input. */
  "SCL": "3",
  /** Physical pin 4: SDA; bidirectional. */
  "SDA": "4",
  /** Physical pin 5: W; passive. */
  "W": "5",
  /** Physical pin 6: H; passive. */
  "H": "6",
}) {
  override schema = "Potentiometer_Digital:TPL0401B-10-Q1";
  override referencePrefix = "U";
}

/**
 * 100k Digital Potentiometer, 1024 steps, TSSOP-14
 *
 * KiCad symbol: `Potentiometer_Digital:X9118`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/x911/x9118.pdf
 * Keywords: digital potentiometer.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class X9118 extends Component.withPins({
  /** Physical pin 1: V+; passive. */
  "V+": "1",
  /** Physical pin 3: A0; input. */
  "A0": "3",
  /** Physical pin 4: SCL; input. */
  "SCL": "4",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 8: V-; passive. */
  "V-": "8",
  /** Physical pin 9: A1; input. */
  "A1": "9",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
  /** Physical pin 5: ~{WP}; input. */
  "~{WP}": "5",
  /** Physical pin 11: RW0; passive. */
  "RW0": "11",
  /** Physical pin 12: RH0; passive. */
  "RH0": "12",
  /** Physical pin 13: RL0; passive. */
  "RL0": "13",
}) {
  override schema = "Potentiometer_Digital:X9118";
  override referencePrefix = "U";
}

/**
 * Quad 100k Digital Potentiometer, 256 steps, TSSOP-24/SOIC-24
 *
 * KiCad symbol: `Potentiometer_Digital:X9250`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x15.4mm*P1.27mm*, TSSOP*4.4x7.8mm*P0.65mm*.
 * @see https://www.intersil.com/content/dam/Intersil/documents/x925/x9250.pdf
 * Keywords: potentiometer resistor variable digital.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class X9250 extends Component.withPins({
  /** Physical pin 2: A0; input. */
  "A0": "2",
  /** Physical pin 6: V+; passive. */
  "V+": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 11: ~{CS}; input. */
  "~{CS}": "11",
  /** Physical pin 13: SIN; input. */
  "SIN": "13",
  /** Physical pin 14: A1; input. */
  "A1": "14",
  /** Physical pin 18: VSS; power_in. */
  "VSS": "18",
  /** Physical pin 19: V-; passive. */
  "V-": "19",
  /** Physical pin 23: SCL; input. */
  "SCL": "23",
  /** Physical pin 24: ~{HOLD}; input. */
  "~{HOLD}": "24",
  /** Physical pin 1: SOUT; output. */
  "SOUT": "1",
  /** Physical pin 3: RW3; passive. */
  "RW3": "3",
  /** Physical pin 4: RH3; passive. */
  "RH3": "4",
  /** Physical pin 5: RL3; passive. */
  "RL3": "5",
  /** Physical pin 8: RL0; passive. */
  "RL0": "8",
  /** Physical pin 9: RH0; passive. */
  "RH0": "9",
  /** Physical pin 10: RW0; passive. */
  "RW0": "10",
  /** Physical pin 12: ~{WP}; input. */
  "~{WP}": "12",
  /** Physical pin 15: RL1; passive. */
  "RL1": "15",
  /** Physical pin 16: RH1; passive. */
  "RH1": "16",
  /** Physical pin 17: RW1; passive. */
  "RW1": "17",
  /** Physical pin 20: RW2; passive. */
  "RW2": "20",
  /** Physical pin 21: RH2; passive. */
  "RH2": "21",
  /** Physical pin 22: RL2; passive. */
  "RL2": "22",
}) {
  override schema = "Potentiometer_Digital:X9250";
  override referencePrefix = "U";
}

/**
 * Quad 50k Digital Potentiometer, 256 steps, TSSOP-24/SOIC-24
 *
 * KiCad symbol: `Potentiometer_Digital:X9258`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x15.4mm*P1.27mm*, TSSOP*4.4x7.8mm*P0.65mm*.
 * @see http://www.intersil.com/content/dam/intersil/documents/x925/x9258.pdf
 * Keywords: potentiometer resistor variable digital.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class X9258 extends Component.withPins({
  /** Physical pin 2: A0; input. */
  "A0": "2",
  /** Physical pin 6: V+; passive. */
  "V+": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 11: A2; input. */
  "A2": "11",
  /** Physical pin 13: SDA; bidirectional. */
  "SDA": "13",
  /** Physical pin 14: A1; input. */
  "A1": "14",
  /** Physical pin 18: VSS; power_in. */
  "VSS": "18",
  /** Physical pin 19: V-; passive. */
  "V-": "19",
  /** Physical pin 23: SCL; input. */
  "SCL": "23",
  /** Physical pin 24: A3; input. */
  "A3": "24",
  /** Physical pin 3: RW3; passive. */
  "RW3": "3",
  /** Physical pin 4: RH3; passive. */
  "RH3": "4",
  /** Physical pin 5: RL3; passive. */
  "RL3": "5",
  /** Physical pin 8: RL0; passive. */
  "RL0": "8",
  /** Physical pin 9: RH0; passive. */
  "RH0": "9",
  /** Physical pin 10: RW0; passive. */
  "RW0": "10",
  /** Physical pin 12: ~{WP}; input. */
  "~{WP}": "12",
  /** Physical pin 15: RL1; passive. */
  "RL1": "15",
  /** Physical pin 16: RH1; passive. */
  "RH1": "16",
  /** Physical pin 17: RW1; passive. */
  "RW1": "17",
  /** Physical pin 20: RW2; passive. */
  "RW2": "20",
  /** Physical pin 21: RH2; passive. */
  "RH2": "21",
  /** Physical pin 22: RL2; passive. */
  "RL2": "22",
}) {
  override schema = "Potentiometer_Digital:X9258";
  override referencePrefix = "U";
}

