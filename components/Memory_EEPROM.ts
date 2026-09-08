// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * I2C Serial EEPROM, 2Kb, SOT-23
 *
 * KiCad symbol: `Memory_EEPROM:24AA02-OT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21709J.pdf
 * Keywords: I2C Serial EEPROM.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _24AA02_OT extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: V_{CC}; power_in. */
  "V_{CC}": "4",
  /** Physical pin 5: WP; input. */
  "WP": "5",
}) {
  override schema = "Memory_EEPROM:24AA02-OT";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM with EUI-48 or EUI-64, 2Kb, SOT-23-6
 *
 * KiCad symbol: `Memory_EEPROM:24AA025E-OT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MPD/ProductDocuments/DataSheets/2-Kbit-I2C-Serial-EEPROMs-+EUI-48-or-EUI-64-Node-20002124.pdf
 * Keywords: Microchip.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _24AA025E_OT extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: A1; input. */
  "A1": "4",
  /** Physical pin 5: A0; input. */
  "A0": "5",
  /** Physical pin 6: V_{CC}; power_in. */
  "V_{CC}": "6",
}) {
  override schema = "Memory_EEPROM:24AA025E-OT";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM with EUI-48 or EUI-64, 2Kb, SOIC-8
 *
 * KiCad symbol: `Memory_EEPROM:24AA025E-SN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MPD/ProductDocuments/DataSheets/2-Kbit-I2C-Serial-EEPROMs-+EUI-48-or-EUI-64-Node-20002124.pdf
 * Keywords: Microchip.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _24AA025E_SN extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: V_{SS}; power_in. */
  "V_{SS}": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: V_{CC}; power_in. */
  "V_{CC}": "8",
}) {
  override schema = "Memory_EEPROM:24AA025E-SN";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM with EUI-48 or EUI-64, 2Kb, SOT-23-5
 *
 * KiCad symbol: `Memory_EEPROM:24AA02E-OT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MPD/ProductDocuments/DataSheets/2-Kbit-I2C-Serial-EEPROMs-+EUI-48-or-EUI-64-Node-20002124.pdf
 * Keywords: Microchip.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _24AA02E_OT extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: V_{SS}; power_in. */
  "V_{SS}": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: V_{CC}; power_in. */
  "V_{CC}": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
}) {
  override schema = "Memory_EEPROM:24AA02E-OT";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM with EUI-48 or EUI-64, 2Kb, SOIC-8
 *
 * KiCad symbol: `Memory_EEPROM:24AA02E-SN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MPD/ProductDocuments/DataSheets/2-Kbit-I2C-Serial-EEPROMs-+EUI-48-or-EUI-64-Node-20002124.pdf
 * Keywords: Microchip.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _24AA02E_SN extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: V_{SS}; power_in. */
  "V_{SS}": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: V_{CC}; power_in. */
  "V_{CC}": "8",
}) {
  override schema = "Memory_EEPROM:24AA02E-SN";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 1Kb (128x8) with Unique Serial Number, UDFN8
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS01-MAHM`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8815-SEEPROM-AT24CS01-02-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.3x1.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS01_MAHM extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Memory_EEPROM:AT24CS01-MAHM";
  override referencePrefix = "U";
}

/**
 * 2-Kbit (256 x 8-bit) I2C Serial EEPROM, chip address inputs (A0, A1, A2), write-protect pin (WP), 4.5..5.5V supply, WDFN-8 (WSON-8, Microchip's  8-Lead TDFN)
 *
 * KiCad symbol: `Memory_EEPROM:24C02Cx-x-MNY`. Reference prefix: `U`.
 * Footprint filters: *DFN*3x2mm*P0.5mm*EP1.3*x1.4*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MPD/ProductDocuments/DataSheets/2-Kbit-5.0V-I2C-Serial-EEPROM-Data-Sheet-DS20001202.pdf
 * Keywords: 2-wire CMOS nonvolatile-memory electrically-erasable-PROM 24C02CT-I/MNY 24C02CT-E/MNY.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.36x1.46mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _24C02Cx_x_MNY extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Memory_EEPROM:24C02Cx-x-MNY";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 1Kb (128x8) with Unique Serial Number, SO8
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS01-SSHM`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8815-SEEPROM-AT24CS01-02-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS01_SSHM extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:AT24CS01-SSHM";
  override referencePrefix = "U";
}

/**
 * 2-Kbit (256 x 8-bit) I2C Serial EEPROM, chip address inputs (A0, A1, A2), write-protect pin (WP), 4.5..5.5V supply, SOIC-8
 *
 * KiCad symbol: `Memory_EEPROM:24C02Cx-x-SN`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9x4.9mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MPD/ProductDocuments/DataSheets/2-Kbit-5.0V-I2C-Serial-EEPROM-Data-Sheet-DS20001202.pdf
 * Keywords: 2-wire CMOS nonvolatile-memory electrically-erasable-PROM 24C02C/SN 24C02C-E/SN 24C02C-I/SN  24C02CT-I/SN 24C02CT-E/SN.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _24C02Cx_x_SN extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:24C02Cx-x-SN";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 16Kb, DIP-8/SOIC-8/TSSOP-8/DFN-8
 *
 * KiCad symbol: `Memory_EEPROM:24LC16`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*, TSSOP*4.4x3mm*P0.65mm*, DFN*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21703d.pdf
 * Keywords: I2C Serial EEPROM.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _24LC16 extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:24LC16";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 128 Bits, DIP-8/SOIC-8/TSSOP-8/DFN-8
 *
 * KiCad symbol: `Memory_EEPROM:24LC00`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*, TSSOP*4.4x3mm*P0.65mm*, DFN*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21178G.pdf
 * Keywords: I2C Serial EEPROM.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _24LC00 extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:24LC00";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 1Kb, DIP-8/SOIC-8/TSSOP-8/DFN-8
 *
 * KiCad symbol: `Memory_EEPROM:24LC01`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*, TSSOP*4.4x3mm*P0.65mm*, DFN*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21711J.pdf
 * Keywords: I2C Serial EEPROM.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _24LC01 extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:24LC01";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 2Kb, DIP-8/SOIC-8/TSSOP-8/DFN-8
 *
 * KiCad symbol: `Memory_EEPROM:24LC02`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*, TSSOP*4.4x3mm*P0.65mm*, DFN*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21709c.pdf
 * Keywords: I2C Serial EEPROM.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _24LC02 extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:24LC02";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 4Kb, DIP-8/SOIC-8/TSSOP-8/DFN-8
 *
 * KiCad symbol: `Memory_EEPROM:24LC04`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*, TSSOP*4.4x3mm*P0.65mm*, DFN*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21708K.pdf
 * Keywords: I2C Serial EEPROM.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _24LC04 extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:24LC04";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 8Kb, DIP-8/SOIC-8/TSSOP-8/DFN-8
 *
 * KiCad symbol: `Memory_EEPROM:24LC08`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*, TSSOP*4.4x3mm*P0.65mm*, DFN*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21710J.pdf
 * Keywords: I2C Serial EEPROM.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _24LC08 extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:24LC08";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 1024Kb, DIP-8/SOIC-8/TSSOP-8/DFN-8
 *
 * KiCad symbol: `Memory_EEPROM:24LC1025`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*, TSSOP*4.4x3mm*P0.65mm*, DFN*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21941B.pdf
 * Keywords: I2C Serial EEPROM.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _24LC1025 extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:24LC1025";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 128Kb, DIP-8/SOIC-8/TSSOP-8/DFN-8
 *
 * KiCad symbol: `Memory_EEPROM:24LC128`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*, TSSOP*4.4x3mm*P0.65mm*, DFN*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21191s.pdf
 * Keywords: I2C Serial EEPROM.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _24LC128 extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:24LC128";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 256Kb, DIP-8/SOIC-8/TSSOP-8/DFN-8
 *
 * KiCad symbol: `Memory_EEPROM:24LC256`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*, TSSOP*4.4x3mm*P0.65mm*, DFN*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/21203m.pdf
 * Keywords: I2C Serial EEPROM.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _24LC256 extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:24LC256";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 32Kb, DIP-8/SOIC-8/TSSOP-8/DFN-8
 *
 * KiCad symbol: `Memory_EEPROM:24LC32`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*, TSSOP*4.4x3mm*P0.65mm*, DFN*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21072G.pdf
 * Keywords: I2C Serial EEPROM.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _24LC32 extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:24LC32";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 512Kb, DIP-8/SOIC-8/TSSOP-8/DFN-8
 *
 * KiCad symbol: `Memory_EEPROM:24LC512`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*, TSSOP*4.4x3mm*P0.65mm*, DFN*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21754M.pdf
 * Keywords: I2C Serial EEPROM.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _24LC512 extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:24LC512";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 64Kb, DIP-8/SOIC-8/TSSOP-8/DFN-8
 *
 * KiCad symbol: `Memory_EEPROM:24LC64`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*, TSSOP*4.4x3mm*P0.65mm*, DFN*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21189f.pdf
 * Keywords: I2C Serial EEPROM.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _24LC64 extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:24LC64";
  override referencePrefix = "U";
}

/**
 * 4Mbit SPI Serial EEPROM, SOIC-8
 *
 * KiCad symbol: `Memory_EEPROM:25CSM04xxSN`. Reference prefix: `U3`.
 * Footprint filters: SOIC*3.9x4.9mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MPD/ProductDocuments/DataSheets/25CSM04-4-Mbit-SPI-Serial-EEPROM-With-128-Bit-Serial-Number-and-Enhanced-Write-Protection-20005817C.pdf
 * Keywords: EEPROM memory SPI serial.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _25CSM04xxSN extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SO; tri_state. */
  "SO": "2",
  /** Physical pin 3: ~{WP}; input. */
  "~{WP}": "3",
  /** Physical pin 4: V_{SS}; power_in. */
  "V_{SS}": "4",
  /** Physical pin 5: SI; input. */
  "SI": "5",
  /** Physical pin 6: SCK; input. */
  "SCK": "6",
  /** Physical pin 7: ~{HOLD}; input. */
  "~{HOLD}": "7",
  /** Physical pin 8: V_{CC}; power_in. */
  "V_{CC}": "8",
}) {
  override schema = "Memory_EEPROM:25CSM04xxSN";
  override referencePrefix = "U3";
}

/**
 * 4Mbit SPI Serial EEPROM, WDFN-8
 *
 * KiCad symbol: `Memory_EEPROM:25CSM04xxMF`. Reference prefix: `U3`.
 * Footprint filters: WDFN*1EP*6x5mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MPD/ProductDocuments/DataSheets/25CSM04-4-Mbit-SPI-Serial-EEPROM-With-128-Bit-Serial-Number-and-Enhanced-Write-Protection-20005817C.pdf
 * Keywords: EEPROM memory SPI serial.
 * Default footprint: Package_DFN_QFN:WDFN-8-1EP_6x5mm_P1.27mm_EP3.4x4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _25CSM04xxMF extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: SO; tri_state. */
  "SO": "2",
  /** Physical pin 3: ~{WP}; input. */
  "~{WP}": "3",
  /** Physical pin 4: V_{SS}; power_in. */
  "V_{SS}": "4",
  /** Physical pin 5: SI; input. */
  "SI": "5",
  /** Physical pin 6: SCK; input. */
  "SCK": "6",
  /** Physical pin 7: ~{HOLD}; input. */
  "~{HOLD}": "7",
  /** Physical pin 8: V_{CC}; power_in. */
  "V_{CC}": "8",
}) {
  override schema = "Memory_EEPROM:25CSM04xxMF";
  override referencePrefix = "U3";
}

/**
 * SPI Serial EEPROM, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Memory_EEPROM:25LCxxx`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21832H.pdf
 * Keywords: EEPROM memory SPI serial.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _25LCxxx extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: MISO; tri_state. */
  "MISO": "2",
  /** Physical pin 3: ~{WP}; input. */
  "~{WP}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: MOSI; input. */
  "MOSI": "5",
  /** Physical pin 6: SCK; input. */
  "SCK": "6",
  /** Physical pin 7: ~{HOLD}; input. */
  "~{HOLD}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:25LCxxx";
  override referencePrefix = "U";
}

/**
 * SPI Serial EEPROM, DFN8
 *
 * KiCad symbol: `Memory_EEPROM:25LCxxx-MC`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21832H.pdf
 * Keywords: EEPROM memory SPI serial.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.75x1.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _25LCxxx_MC extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: MISO; tri_state. */
  "MISO": "2",
  /** Physical pin 3: ~{WP}; input. */
  "~{WP}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: MOSI; input. */
  "MOSI": "5",
  /** Physical pin 6: SCK; input. */
  "SCK": "6",
  /** Physical pin 7: ~{HOLD}; input. */
  "~{HOLD}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Memory_EEPROM:25LCxxx-MC";
  override referencePrefix = "U";
}

/**
 * SPI Serial EEPROM, DFN-8
 *
 * KiCad symbol: `Memory_EEPROM:25LCxxx-MF`. Reference prefix: `U`.
 * Footprint filters: WFDFPN*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/25LC512-512-Kbit-SPI-Bus-Serial-EEPROM-20002065D.pdf
 * Keywords: EEPROM memory SPI serial.
 * Default footprint: Package_DFN_QFN:WFDFPN-8-1EP_3x2mm_P0.5mm_EP1.25x1.35mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _25LCxxx_MF extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: MISO; tri_state. */
  "MISO": "2",
  /** Physical pin 3: ~{WP}; input. */
  "~{WP}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: MOSI; input. */
  "MOSI": "5",
  /** Physical pin 6: SCK; input. */
  "SCK": "6",
  /** Physical pin 7: ~{HOLD}; input. */
  "~{HOLD}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Memory_EEPROM:25LCxxx-MF";
  override referencePrefix = "U";
}

/**
 * Paged Parallel EEPROM 256Kb (32K x 8), DIP-28/SOIC-28
 *
 * KiCad symbol: `Memory_EEPROM:28C256`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*, SOIC*7.5x17.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/doc0006.pdf
 * Keywords: Parallel EEPROM 256Kb.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _28C256 extends Component.withPins({
  /** Physical pin 1: A14; input. */
  "A14": "1",
  /** Physical pin 2: A12; input. */
  "A12": "2",
  /** Physical pin 3: A7; input. */
  "A7": "3",
  /** Physical pin 4: A6; input. */
  "A6": "4",
  /** Physical pin 5: A5; input. */
  "A5": "5",
  /** Physical pin 6: A4; input. */
  "A4": "6",
  /** Physical pin 7: A3; input. */
  "A3": "7",
  /** Physical pin 8: A2; input. */
  "A2": "8",
  /** Physical pin 9: A1; input. */
  "A1": "9",
  /** Physical pin 10: A0; input. */
  "A0": "10",
  /** Physical pin 11: D0; tri_state. */
  "D0": "11",
  /** Physical pin 12: D1; tri_state. */
  "D1": "12",
  /** Physical pin 13: D2; tri_state. */
  "D2": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: D3; tri_state. */
  "D3": "15",
  /** Physical pin 16: D4; tri_state. */
  "D4": "16",
  /** Physical pin 17: D5; tri_state. */
  "D5": "17",
  /** Physical pin 18: D6; tri_state. */
  "D6": "18",
  /** Physical pin 19: D7; tri_state. */
  "D7": "19",
  /** Physical pin 20: ~{CS}; input. */
  "~{CS}": "20",
  /** Physical pin 21: A10; input. */
  "A10": "21",
  /** Physical pin 22: ~{OE}; input. */
  "~{OE}": "22",
  /** Physical pin 23: A11; input. */
  "A11": "23",
  /** Physical pin 24: A9; input. */
  "A9": "24",
  /** Physical pin 25: A8; input. */
  "A8": "25",
  /** Physical pin 26: A13; input. */
  "A13": "26",
  /** Physical pin 27: ~{WE}; input. */
  "~{WE}": "27",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
}) {
  override schema = "Memory_EEPROM:28C256";
  override referencePrefix = "U";
}

/**
 * Serial EEPROM, 93 Series, 1.8V, DIP-8/SOIC-8
 *
 * KiCad symbol: `Memory_EEPROM:93AAxxA`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001749K.pdf
 * Keywords: EEPROM memory Microwire.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _93AAxxA extends Component.withPins({
  /** Physical pin 1: CS; input. */
  "CS": "1",
  /** Physical pin 2: SCLK; input. */
  "SCLK": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: DO; tri_state. */
  "DO": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:93AAxxA";
  override referencePrefix = "U";
}

/**
 * Serial EEPROM, 93 Series, 8-bit word, 1.8V, SOT-23-6
 *
 * KiCad symbol: `Memory_EEPROM:93AAxxAT-xOT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001749K.pdf
 * Keywords: EEPROM memory Microwire.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _93AAxxAT_xOT extends Component.withPins({
  /** Physical pin 1: DO; tri_state. */
  "DO": "1",
  /** Physical pin 2: Vss; power_in. */
  "Vss": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: CLK; input. */
  "CLK": "4",
  /** Physical pin 5: CS; input. */
  "CS": "5",
  /** Physical pin 6: Vcc; power_in. */
  "Vcc": "6",
}) {
  override schema = "Memory_EEPROM:93AAxxAT-xOT";
  override referencePrefix = "U";
}

/**
 * Serial EEPROM, 93 Series, 1.8V, DIP-8/SOIC-8
 *
 * KiCad symbol: `Memory_EEPROM:93AAxxB`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001749K.pdf
 * Keywords: EEPROM memory Microwire.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _93AAxxB extends Component.withPins({
  /** Physical pin 1: CS; input. */
  "CS": "1",
  /** Physical pin 2: SCLK; input. */
  "SCLK": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: DO; tri_state. */
  "DO": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:93AAxxB";
  override referencePrefix = "U";
}

/**
 * Serial EEPROM, 93 Series, 16-bit word, 1.8V, SOT-23
 *
 * KiCad symbol: `Memory_EEPROM:93AAxxBT-xOT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001749K.pdf
 * Keywords: EEPROM memory Microwire.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _93AAxxBT_xOT extends Component.withPins({
  /** Physical pin 1: DO; tri_state. */
  "DO": "1",
  /** Physical pin 2: Vss; power_in. */
  "Vss": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: CLK; input. */
  "CLK": "4",
  /** Physical pin 5: CS; input. */
  "CS": "5",
  /** Physical pin 6: Vcc; power_in. */
  "Vcc": "6",
}) {
  override schema = "Memory_EEPROM:93AAxxBT-xOT";
  override referencePrefix = "U";
}

/**
 * Serial EEPROM, 93 Series, with ORG Pin, 1.8V, DIP-8/SOIC-8
 *
 * KiCad symbol: `Memory_EEPROM:93AAxxC`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001749K.pdf
 * Keywords: EEPROM memory Microwire.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _93AAxxC extends Component.withPins({
  /** Physical pin 1: CS; input. */
  "CS": "1",
  /** Physical pin 2: SCLK; input. */
  "SCLK": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: DO; tri_state. */
  "DO": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: ORG; input. */
  "ORG": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:93AAxxC";
  override referencePrefix = "U";
}

/**
 * Serial EEPROM, 93 Series, 5.0V, DIP-8/SOIC-8
 *
 * KiCad symbol: `Memory_EEPROM:93CxxA`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001749K.pdf
 * Keywords: EEPROM memory Microwire.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _93CxxA extends Component.withPins({
  /** Physical pin 1: CS; input. */
  "CS": "1",
  /** Physical pin 2: SCLK; input. */
  "SCLK": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: DO; tri_state. */
  "DO": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:93CxxA";
  override referencePrefix = "U";
}

/**
 * Serial EEPROM, 93 Series, 5.0V, DIP-8/SOIC-8
 *
 * KiCad symbol: `Memory_EEPROM:93CxxB`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001749K.pdf
 * Keywords: EEPROM memory Microwire.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _93CxxB extends Component.withPins({
  /** Physical pin 1: CS; input. */
  "CS": "1",
  /** Physical pin 2: SCLK; input. */
  "SCLK": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: DO; tri_state. */
  "DO": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:93CxxB";
  override referencePrefix = "U";
}

/**
 * Serial EEPROM, 93 Series, with ORG Pin, 5.0V, DIP-8/SOIC-8
 *
 * KiCad symbol: `Memory_EEPROM:93CxxC`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001749K.pdf
 * Keywords: EEPROM memory Microwire.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _93CxxC extends Component.withPins({
  /** Physical pin 1: CS; input. */
  "CS": "1",
  /** Physical pin 2: SCLK; input. */
  "SCLK": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: DO; tri_state. */
  "DO": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: ORG; input. */
  "ORG": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:93CxxC";
  override referencePrefix = "U";
}

/**
 * Serial EEPROM, 93 Series, 2.5V, DIP-8/SOIC-8
 *
 * KiCad symbol: `Memory_EEPROM:93LCxxA`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001749K.pdf
 * Keywords: EEPROM memory Microwire.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _93LCxxA extends Component.withPins({
  /** Physical pin 1: CS; input. */
  "CS": "1",
  /** Physical pin 2: SCLK; input. */
  "SCLK": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: DO; tri_state. */
  "DO": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:93LCxxA";
  override referencePrefix = "U";
}

/**
 * Serial EEPROM, 93 Series, 2.5V, SOT-23-6
 *
 * KiCad symbol: `Memory_EEPROM:93LCxxAxxOT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001749K.pdf
 * Keywords: EEPROM memory Microwire.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _93LCxxAxxOT extends Component.withPins({
  /** Physical pin 1: DO; tri_state. */
  "DO": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: CLK; input. */
  "CLK": "4",
  /** Physical pin 5: CS; input. */
  "CS": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
}) {
  override schema = "Memory_EEPROM:93LCxxAxxOT";
  override referencePrefix = "U";
}

/**
 * Serial EEPROM, 93 Series, 2.5V, DIP-8/SOIC-8
 *
 * KiCad symbol: `Memory_EEPROM:93LCxxB`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001749K.pdf
 * Keywords: EEPROM memory Microwire.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _93LCxxB extends Component.withPins({
  /** Physical pin 1: CS; input. */
  "CS": "1",
  /** Physical pin 2: SCLK; input. */
  "SCLK": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: DO; tri_state. */
  "DO": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:93LCxxB";
  override referencePrefix = "U";
}

/**
 * Serial EEPROM, 93 Series, 2.5V, SOT-23-6
 *
 * KiCad symbol: `Memory_EEPROM:93LCxxBxxOT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001749K.pdf
 * Keywords: 1K Microwire Serial EEPROM.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _93LCxxBxxOT extends Component.withPins({
  /** Physical pin 1: DO; tri_state. */
  "DO": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: CLK; input. */
  "CLK": "4",
  /** Physical pin 5: CS; input. */
  "CS": "5",
  /** Physical pin 6: VCC; power_in. */
  "VCC": "6",
}) {
  override schema = "Memory_EEPROM:93LCxxBxxOT";
  override referencePrefix = "U";
}

/**
 * Serial EEPROM, 93 Series, with ORG Pin, 2.5V, DIP-8/SOIC-8
 *
 * KiCad symbol: `Memory_EEPROM:93LCxxC`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001749K.pdf
 * Keywords: EEPROM memory Microwire.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class _93LCxxC extends Component.withPins({
  /** Physical pin 1: CS; input. */
  "CS": "1",
  /** Physical pin 2: SCLK; input. */
  "SCLK": "2",
  /** Physical pin 3: DI; input. */
  "DI": "3",
  /** Physical pin 4: DO; tri_state. */
  "DO": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: ORG; input. */
  "ORG": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:93LCxxC";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 1Kb (128x8) with Unique Serial Number, SOT-23-5
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS01-STUM`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8815-SEEPROM-AT24CS01-02-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS01_STUM extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: WP; input. */
  "WP": "5",
}) {
  override schema = "Memory_EEPROM:AT24CS01-STUM";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 1Kb (128x8) with Unique Serial Number, TSSOP8
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS01-XHM`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8815-SEEPROM-AT24CS01-02-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS01_XHM extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:AT24CS01-XHM";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 2Kb (256x8) with Unique Serial Number, UDFN8
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS02-MAHM`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8815-SEEPROM-AT24CS01-02-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.3x1.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS02_MAHM extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Memory_EEPROM:AT24CS02-MAHM";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 2Kb (256x8) with Unique Serial Number, SO8
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS02-SSHM`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8815-SEEPROM-AT24CS01-02-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS02_SSHM extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:AT24CS02-SSHM";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 2Kb (256x8) with Unique Serial Number, SOT-23-5
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS02-STUM`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8815-SEEPROM-AT24CS01-02-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS02_STUM extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: WP; input. */
  "WP": "5",
}) {
  override schema = "Memory_EEPROM:AT24CS02-STUM";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 2Kb (256x8) with Unique Serial Number, TSSOP8
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS02-XHM`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8815-SEEPROM-AT24CS01-02-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS02_XHM extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:AT24CS02-XHM";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 4Kb (512x8) with Unique Serial Number, UDFN8
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS04-MAHM`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8766-SEEPROM-AT24CS04-08-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.3x1.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS04_MAHM extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
}) {
  override schema = "Memory_EEPROM:AT24CS04-MAHM";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 4Kb (512x8) with Unique Serial Number, SO8
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS04-SSHM`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8766-SEEPROM-AT24CS04-08-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS04_SSHM extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:AT24CS04-SSHM";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 4Kb (512x8) with Unique Serial Number, SOT-23-5
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS04-STUM`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8766-SEEPROM-AT24CS04-08-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS04_STUM extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: WP; input. */
  "WP": "5",
}) {
  override schema = "Memory_EEPROM:AT24CS04-STUM";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 4Kb (512x8) with Unique Serial Number, TSSOP8
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS04-XHM`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8766-SEEPROM-AT24CS04-08-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS04_XHM extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:AT24CS04-XHM";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 8Kb (1024x8) with Unique Serial Number, UDFN8
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS08-MAHM`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8766-SEEPROM-AT24CS04-08-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.3x1.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS08_MAHM extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
}) {
  override schema = "Memory_EEPROM:AT24CS08-MAHM";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 8Kb (1024x8) with Unique Serial Number, SO8
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS08-SSHM`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8766-SEEPROM-AT24CS04-08-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS08_SSHM extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:AT24CS08-SSHM";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 8Kb (1024x8) with Unique Serial Number, SOT-23-5
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS08-STUM`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8766-SEEPROM-AT24CS04-08-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS08_STUM extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: WP; input. */
  "WP": "5",
}) {
  override schema = "Memory_EEPROM:AT24CS08-STUM";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 8Kb (1024x8) with Unique Serial Number, TSSOP8
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS08-XHM`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8766-SEEPROM-AT24CS04-08-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS08_XHM extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:AT24CS08-XHM";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 16Kb (2048x8) with Unique Serial Number, UDFN8
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS16-MAHM`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8859-SEEPROM-AT24CS16-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.3x1.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS16_MAHM extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
}) {
  override schema = "Memory_EEPROM:AT24CS16-MAHM";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 16Kb (2048x8) with Unique Serial Number, SO8
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS16-SSHM`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8859-SEEPROM-AT24CS16-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS16_SSHM extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:AT24CS16-SSHM";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 16Kb (2048x8) with Unique Serial Number, SOT-23-5
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS16-STUM`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8859-SEEPROM-AT24CS16-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS16_STUM extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: WP; input. */
  "WP": "5",
}) {
  override schema = "Memory_EEPROM:AT24CS16-STUM";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 16Kb (2048x8) with Unique Serial Number, TSSOP8
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS16-XHM`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8859-SEEPROM-AT24CS16-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS16_XHM extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:AT24CS16-XHM";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 32Kb (4096x8) with Unique Serial Number, UDFN8
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS32-MAHM`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8869-SEEPROM-AT24CS32-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.3x1.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS32_MAHM extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Memory_EEPROM:AT24CS32-MAHM";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 32Kb (4096x8) with Unique Serial Number, SO8
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS32-SSHM`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8869-SEEPROM-AT24CS32-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS32_SSHM extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:AT24CS32-SSHM";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 32Kb (4096x8) with Unique Serial Number, SOT-23-5
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS32-STUM`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8869-SEEPROM-AT24CS32-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS32_STUM extends Component.withPins({
  /** Physical pin 1: SCL; input. */
  "SCL": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: SDA; bidirectional. */
  "SDA": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: WP; input. */
  "WP": "5",
}) {
  override schema = "Memory_EEPROM:AT24CS32-STUM";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 32Kb (4096x8) with Unique Serial Number, TSSOP8
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS32-XHM`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8869-SEEPROM-AT24CS32-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS32_XHM extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:AT24CS32-XHM";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 64Kb (8192x8) with Unique Serial Number, UDFN8
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS64-MAHM`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8870-SEEPROM-AT24CS64-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.3x1.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS64_MAHM extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Memory_EEPROM:AT24CS64-MAHM";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 64Kb (8192x8) with Unique Serial Number, SO8
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS64-SSHM`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8870-SEEPROM-AT24CS64-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS64_SSHM extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:AT24CS64-SSHM";
  override referencePrefix = "U";
}

/**
 * I2C Serial EEPROM, 64Kb (8192x8) with Unique Serial Number, TSSOP8
 *
 * KiCad symbol: `Memory_EEPROM:AT24CS64-XHM`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8870-SEEPROM-AT24CS64-Datasheet.pdf
 * Keywords: I2C Serial EEPROM Nonvolatile Memory.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT24CS64_XHM extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:AT24CS64-XHM";
  override referencePrefix = "U";
}

/**
 * Microchip SPI Serial EEPROM, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Memory_EEPROM:AT25xxx`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8707-SEEPROM-AT25010B-020B-040B-Datasheet.pdf
 * Keywords: EEPROM memory SPI serial.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT25xxx extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: MISO; tri_state. */
  "MISO": "2",
  /** Physical pin 3: ~{WP}; input. */
  "~{WP}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: MOSI; input. */
  "MOSI": "5",
  /** Physical pin 6: SCK; input. */
  "SCK": "6",
  /** Physical pin 7: ~{HOLD}; input. */
  "~{HOLD}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:AT25xxx";
  override referencePrefix = "U";
}

/**
 * Microchip SPI Serial EEPROM, DFN8
 *
 * KiCad symbol: `Memory_EEPROM:AT25xxx-MA`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-8707-SEEPROM-AT25010B-020B-040B-Datasheet.pdf
 * Keywords: EEPROM memory SPI serial.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.75x1.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AT25xxx_MA extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: MISO; tri_state. */
  "MISO": "2",
  /** Physical pin 3: ~{WP}; input. */
  "~{WP}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: MOSI; input. */
  "MOSI": "5",
  /** Physical pin 6: SCK; input. */
  "SCK": "6",
  /** Physical pin 7: ~{HOLD}; input. */
  "~{HOLD}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Memory_EEPROM:AT25xxx-MA";
  override referencePrefix = "U";
}

/**
 * ROHM Semiconductor SPI Serial EEPROM, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Memory_EEPROM:BR25Sxxx`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see http://www.rohm.com/web/global/products/-/product/BR25G128F-3
 * Keywords: EEPROM memory SPI serial.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BR25Sxxx extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: MISO; tri_state. */
  "MISO": "2",
  /** Physical pin 3: ~{WP}; input. */
  "~{WP}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: MOSI; input. */
  "MOSI": "5",
  /** Physical pin 6: SCK; input. */
  "SCK": "6",
  /** Physical pin 7: ~{HOLD}; input. */
  "~{HOLD}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:BR25Sxxx";
  override referencePrefix = "U";
}

/**
 * ROHM Semiconductor SPI Serial EEPROM, DFN8
 *
 * KiCad symbol: `Memory_EEPROM:BR25xxx-NUX`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*.
 * @see http://www.rohm.com/web/global/products/-/product/BR25G128F-3
 * Keywords: EEPROM memory SPI serial.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.75x1.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class BR25xxx_NUX extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: MISO; tri_state. */
  "MISO": "2",
  /** Physical pin 3: ~{WP}; input. */
  "~{WP}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: MOSI; input. */
  "MOSI": "5",
  /** Physical pin 6: SCK; input. */
  "SCK": "6",
  /** Physical pin 7: ~{HOLD}; input. */
  "~{HOLD}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Memory_EEPROM:BR25xxx-NUX";
  override referencePrefix = "U";
}

/**
 * 128 kb CMOS Serial EEPROM, SOIC-8/TSSOP-8/DFN-8
 *
 * KiCad symbol: `Memory_EEPROM:CAT24C128`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*, TSSOP*4.4x3mm*P0.65mm*, DFN*3x2mm*P0.5mm*.
 * @see https://www.onsemi.com/pub/Collateral/CAT24C128-D.PDF
 * Keywords: I2C EEPROM Serial 128kb.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAT24C128 extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:CAT24C128";
  override referencePrefix = "U";
}

/**
 * 256 kb CMOS Serial EEPROM, DIP-8/SOIC-8/TSSOP-8/DFN-8
 *
 * KiCad symbol: `Memory_EEPROM:CAT24C256`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*, TSSOP*4.4x3mm*P0.65mm*, DFN*3x2mm*P0.5mm*.
 * @see https://www.onsemi.cn/PowerSolutions/document/CAT24C256-D.PDF
 * Keywords: I2C EEPROM Serial 256kb.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAT24C256 extends Component.withPins({
  /** Physical pin 1: A0; input. */
  "A0": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:CAT24C256";
  override referencePrefix = "U";
}

/**
 * 1 Mb I2C CMOS Serial EEPROM, DIP-8
 *
 * KiCad symbol: `Memory_EEPROM:CAT24M01L`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.onsemi.com/pub/Collateral/CAT24M01-D.PDF
 * Keywords: EEPROM 1Mb I2C.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAT24M01L extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:CAT24M01L";
  override referencePrefix = "U";
}

/**
 * 1 Mb I2C CMOS Serial EEPROM, SOIC-8 (150 mil)
 *
 * KiCad symbol: `Memory_EEPROM:CAT24M01W`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/CAT24M01-D.PDF
 * Keywords: EEPROM 1Mb I2C.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAT24M01W extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:CAT24M01W";
  override referencePrefix = "U";
}

/**
 * 1 Mb I2C CMOS Serial EEPROM, SOIC-8 (208 mil)
 *
 * KiCad symbol: `Memory_EEPROM:CAT24M01X`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x5.3mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/CAT24M01-D.PDF
 * Keywords: EEPROM 1Mb I2C.
 * Default footprint: Package_SO:SOIC-8_5.3x5.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAT24M01X extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:CAT24M01X";
  override referencePrefix = "U";
}

/**
 * 1 Mb I2C CMOS Serial EEPROM, TSSOP-8
 *
 * KiCad symbol: `Memory_EEPROM:CAT24M01Y`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see https://www.onsemi.com/pub/Collateral/CAT24M01-D.PDF
 * Keywords: EEPROM 1Mb I2C.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAT24M01Y extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: A1; input. */
  "A1": "2",
  /** Physical pin 3: A2; input. */
  "A2": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: WP; input. */
  "WP": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:CAT24M01Y";
  override referencePrefix = "U";
}

/**
 * ON Semiconductor SPI Serial EEPROM, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Memory_EEPROM:CAT250xxx`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see http://www.onsemi.com/PowerSolutions/product.do?id=CAT25040
 * Keywords: EEPROM memory SPI serial.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAT250xxx extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: MISO; tri_state. */
  "MISO": "2",
  /** Physical pin 3: ~{WP}; input. */
  "~{WP}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: MOSI; input. */
  "MOSI": "5",
  /** Physical pin 6: SCK; input. */
  "SCK": "6",
  /** Physical pin 7: ~{HOLD}; input. */
  "~{HOLD}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:CAT250xxx";
  override referencePrefix = "U";
}

/**
 * ON Semiconductor SPI Serial EEPROM, DFN8
 *
 * KiCad symbol: `Memory_EEPROM:CAT250xxx-HU4`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*.
 * @see http://www.onsemi.com/PowerSolutions/product.do?id=CAT25040
 * Keywords: EEPROM memory SPI serial.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.75x1.45mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CAT250xxx_HU4 extends Component.withPins({
  /** Physical pin 1: ~{CS}; input. */
  "~{CS}": "1",
  /** Physical pin 2: MISO; tri_state. */
  "MISO": "2",
  /** Physical pin 3: ~{WP}; input. */
  "~{WP}": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: MOSI; input. */
  "MOSI": "5",
  /** Physical pin 6: SCK; input. */
  "SCK": "6",
  /** Physical pin 7: ~{HOLD}; input. */
  "~{HOLD}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Memory_EEPROM:CAT250xxx-HU4";
  override referencePrefix = "U";
}

/**
 * 1024-bit, 1-Wire® EEPROM chip, TO-92
 *
 * KiCad symbol: `Memory_EEPROM:DS2431`. Reference prefix: `U`.
 * Footprint filters: TO?92*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/DS2431.pdf
 * Keywords: 1kb EEPROM memory.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS2431 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IO; bidirectional. */
  "IO": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC": "3",
}) {
  override schema = "Memory_EEPROM:DS2431";
  override referencePrefix = "U";
}

/**
 * 1024-bit, 1-Wire® EEPROM chip, TSOC-6
 *
 * KiCad symbol: `Memory_EEPROM:DS2431P`. Reference prefix: `U`.
 * Footprint filters: TSOC*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/DS2431.pdf
 * Keywords: 1kb EEPROM memory.
 * Default footprint: Package_SO_J-Lead:TSOC-6_3.76x3.94mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS2431P extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IO; bidirectional. */
  "IO": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
}) {
  override schema = "Memory_EEPROM:DS2431P";
  override referencePrefix = "U";
}

/**
 * 1024-bit, 1-Wire® EEPROM chip, TDFN
 *
 * KiCad symbol: `Memory_EEPROM:DS2431Q`. Reference prefix: `U`.
 * Footprint filters: *DFN*3x3mm?P0.95mm?EP1.5x2.3mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/DS2431.pdf
 * Keywords: 1kb EEPROM memory.
 * Default footprint: Package_DFN_QFN:Maxim_TDFN-6-1EP_3x3mm_P0.95mm_EP1.5x2.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS2431Q extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: IO; bidirectional. */
  "IO": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
}) {
  override schema = "Memory_EEPROM:DS2431Q";
  override referencePrefix = "U";
}

/**
 * 1024-bit, 1-Wire® EEPROM chip, TO-92
 *
 * KiCad symbol: `Memory_EEPROM:DS28E07`. Reference prefix: `U`.
 * Footprint filters: TO?92*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/DS28E07.pdf
 * Keywords: 1kb EEPROM memory.
 * Default footprint: Package_TO_SOT_THT:TO-92.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS28E07 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IO; bidirectional. */
  "IO": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC": "3",
}) {
  override schema = "Memory_EEPROM:DS28E07";
  override referencePrefix = "U";
}

/**
 * 1024-bit, 1-Wire® EEPROM chip, TSOC-6
 *
 * KiCad symbol: `Memory_EEPROM:DS28E07P`. Reference prefix: `U`.
 * Footprint filters: TSOC*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/DS28E07.pdf
 * Keywords: 1kb EEPROM memory.
 * Default footprint: Package_SO_J-Lead:TSOC-6_3.76x3.94mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS28E07P extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IO; bidirectional. */
  "IO": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
}) {
  override schema = "Memory_EEPROM:DS28E07P";
  override referencePrefix = "U";
}

/**
 * 1024-bit, 1-Wire® EEPROM chip, TDFN
 *
 * KiCad symbol: `Memory_EEPROM:DS28E07Q`. Reference prefix: `U`.
 * Footprint filters: Maxim*TDFN?6*1EP*3x3mm*P0.95mm*EP1.5x2.3mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/DS28E07.pdf
 * Keywords: 1kb EEPROM memory.
 * Default footprint: Package_DFN_QFN:Maxim_TDFN-6-1EP_3x3mm_P0.95mm_EP1.5x2.3mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS28E07Q extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: IO; bidirectional. */
  "IO": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
}) {
  override schema = "Memory_EEPROM:DS28E07Q";
  override referencePrefix = "U";
}

/**
 * EEPROM 8K x 8, 5V, Not  in Production, DIP-28
 *
 * KiCad symbol: `Memory_EEPROM:KM28C64A`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://tvsat.com.pl/PDF/K/km28c64_sam.pdf
 * Keywords: samsung.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class KM28C64A extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 2: A12; input. */
  "A12": "2",
  /** Physical pin 3: A7; input. */
  "A7": "3",
  /** Physical pin 4: A6; input. */
  "A6": "4",
  /** Physical pin 5: A5; input. */
  "A5": "5",
  /** Physical pin 6: A4; input. */
  "A4": "6",
  /** Physical pin 7: A3; input. */
  "A3": "7",
  /** Physical pin 8: A2; input. */
  "A2": "8",
  /** Physical pin 9: A1; input. */
  "A1": "9",
  /** Physical pin 10: A0; input. */
  "A0": "10",
  /** Physical pin 11: I/O0; tri_state. */
  "I/O0": "11",
  /** Physical pin 12: I/O1; tri_state. */
  "I/O1": "12",
  /** Physical pin 13: I/O2; tri_state. */
  "I/O2": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: I/O3; tri_state. */
  "I/O3": "15",
  /** Physical pin 16: I/O4; tri_state. */
  "I/O4": "16",
  /** Physical pin 17: I/O5; tri_state. */
  "I/O5": "17",
  /** Physical pin 18: I/O6; tri_state. */
  "I/O6": "18",
  /** Physical pin 19: I/O7; tri_state. */
  "I/O7": "19",
  /** Physical pin 20: ~{CE}; input. */
  "~{CE}": "20",
  /** Physical pin 21: A10; input. */
  "A10": "21",
  /** Physical pin 22: ~{OE}; input. */
  "~{OE}": "22",
  /** Physical pin 23: A11; input. */
  "A11": "23",
  /** Physical pin 24: A9; input. */
  "A9": "24",
  /** Physical pin 25: A8; input. */
  "A8": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC_26": "26",
  /** Physical pin 27: ~{WE}; input. */
  "~{WE}": "27",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
}) {
  override schema = "Memory_EEPROM:KM28C64A";
  override referencePrefix = "U";
}

/**
 * EEPROM 8K x 8, 5V, Not  in Production, DIP-28
 *
 * KiCad symbol: `Memory_EEPROM:KM28C65A`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see https://tvsat.com.pl/PDF/K/km28c64_sam.pdf
 * Keywords: samsung.
 * Default footprint: Package_DIP:DIP-28_W15.24mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class KM28C65A extends Component.withPins({
  /** Physical pin 1: RDY/~{BSY}; output. */
  "RDY/~{BSY}": "1",
  /** Physical pin 2: A12; input. */
  "A12": "2",
  /** Physical pin 3: A7; input. */
  "A7": "3",
  /** Physical pin 4: A6; input. */
  "A6": "4",
  /** Physical pin 5: A5; input. */
  "A5": "5",
  /** Physical pin 6: A4; input. */
  "A4": "6",
  /** Physical pin 7: A3; input. */
  "A3": "7",
  /** Physical pin 8: A2; input. */
  "A2": "8",
  /** Physical pin 9: A1; input. */
  "A1": "9",
  /** Physical pin 10: A0; input. */
  "A0": "10",
  /** Physical pin 11: I/O0; tri_state. */
  "I/O0": "11",
  /** Physical pin 12: I/O1; tri_state. */
  "I/O1": "12",
  /** Physical pin 13: I/O2; tri_state. */
  "I/O2": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: I/O3; tri_state. */
  "I/O3": "15",
  /** Physical pin 16: I/O4; tri_state. */
  "I/O4": "16",
  /** Physical pin 17: I/O5; tri_state. */
  "I/O5": "17",
  /** Physical pin 18: I/O6; tri_state. */
  "I/O6": "18",
  /** Physical pin 19: I/O7; tri_state. */
  "I/O7": "19",
  /** Physical pin 20: ~{CE}; input. */
  "~{CE}": "20",
  /** Physical pin 21: A10; input. */
  "A10": "21",
  /** Physical pin 22: ~{OE}; input. */
  "~{OE}": "22",
  /** Physical pin 23: A11; input. */
  "A11": "23",
  /** Physical pin 24: A9; input. */
  "A9": "24",
  /** Physical pin 25: A8; input. */
  "A8": "25",
  /** Physical pin 26: NC; no_connect. */
  "NC": "26",
  /** Physical pin 27: ~{WE}; input. */
  "~{WE}": "27",
  /** Physical pin 28: VCC; power_in. */
  "VCC": "28",
}) {
  override schema = "Memory_EEPROM:KM28C65A";
  override referencePrefix = "U";
}

/**
 * 2Kb (256x8) I2C Serial EEPROM, 2.5-5.5V, TSSOP-8
 *
 * KiCad symbol: `Memory_EEPROM:M24C02-WDW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see http://www.st.com/content/ccc/resource/technical/document/datasheet/b0/d8/50/40/5a/85/49/6f/DM00071904.pdf/files/DM00071904.pdf/jcr:content/translations/en.DM00071904.pdf
 * Keywords: Nonvolatile Non-Volatile Memory ROM ST.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M24C02_WDW extends Component.withPins({
  /** Physical pin 1: E0; input. */
  "E0": "1",
  /** Physical pin 2: E1; input. */
  "E1": "2",
  /** Physical pin 3: E2; input. */
  "E2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: ~{WC}; input. */
  "~{WC}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:M24C02-WDW";
  override referencePrefix = "U";
}

/**
 * 1Kb (128x8) I2C Serial EEPROM, 1.6-5.5V, TSSOP-8
 *
 * KiCad symbol: `Memory_EEPROM:M24C01-FDW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see http://www.st.com/content/ccc/resource/technical/document/datasheet/b0/d8/50/40/5a/85/49/6f/DM00071904.pdf/files/DM00071904.pdf/jcr:content/translations/en.DM00071904.pdf
 * Keywords: Nonvolatile Non-Volatile Memory ROM ST.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M24C01_FDW extends Component.withPins({
  /** Physical pin 1: E0; input. */
  "E0": "1",
  /** Physical pin 2: E1; input. */
  "E1": "2",
  /** Physical pin 3: E2; input. */
  "E2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: ~{WC}; input. */
  "~{WC}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:M24C01-FDW";
  override referencePrefix = "U";
}

/**
 * 2Kb (256x8) I2C Serial EEPROM, 2.5-5.5V, SOIC-8
 *
 * KiCad symbol: `Memory_EEPROM:M24C02-WMN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.st.com/content/ccc/resource/technical/document/datasheet/b0/d8/50/40/5a/85/49/6f/DM00071904.pdf/files/DM00071904.pdf/jcr:content/translations/en.DM00071904.pdf
 * Keywords: Nonvolatile Non-Volatile Memory ROM ST.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M24C02_WMN extends Component.withPins({
  /** Physical pin 1: E0; input. */
  "E0": "1",
  /** Physical pin 2: E1; input. */
  "E1": "2",
  /** Physical pin 3: E2; input. */
  "E2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: ~{WC}; input. */
  "~{WC}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:M24C02-WMN";
  override referencePrefix = "U";
}

/**
 * 1Kb (128x8) I2C Serial EEPROM, 1.6-5.5V, SOIC-8
 *
 * KiCad symbol: `Memory_EEPROM:M24C01-FMN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.st.com/content/ccc/resource/technical/document/datasheet/b0/d8/50/40/5a/85/49/6f/DM00071904.pdf/files/DM00071904.pdf/jcr:content/translations/en.DM00071904.pdf
 * Keywords: Nonvolatile Non-Volatile Memory ROM ST.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M24C01_FMN extends Component.withPins({
  /** Physical pin 1: E0; input. */
  "E0": "1",
  /** Physical pin 2: E1; input. */
  "E1": "2",
  /** Physical pin 3: E2; input. */
  "E2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: ~{WC}; input. */
  "~{WC}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:M24C01-FMN";
  override referencePrefix = "U";
}

/**
 * 1Kb (128x8) I2C Serial EEPROM, 1.8-5.5V, TSSOP-8
 *
 * KiCad symbol: `Memory_EEPROM:M24C01-RDW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see http://www.st.com/content/ccc/resource/technical/document/datasheet/b0/d8/50/40/5a/85/49/6f/DM00071904.pdf/files/DM00071904.pdf/jcr:content/translations/en.DM00071904.pdf
 * Keywords: Nonvolatile Non-Volatile Memory ROM ST.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M24C01_RDW extends Component.withPins({
  /** Physical pin 1: E0; input. */
  "E0": "1",
  /** Physical pin 2: E1; input. */
  "E1": "2",
  /** Physical pin 3: E2; input. */
  "E2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: ~{WC}; input. */
  "~{WC}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:M24C01-RDW";
  override referencePrefix = "U";
}

/**
 * 1Kb (128x8) I2C Serial EEPROM, 1.8-5.5V, SOIC-8
 *
 * KiCad symbol: `Memory_EEPROM:M24C01-RMN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.st.com/content/ccc/resource/technical/document/datasheet/b0/d8/50/40/5a/85/49/6f/DM00071904.pdf/files/DM00071904.pdf/jcr:content/translations/en.DM00071904.pdf
 * Keywords: Nonvolatile Non-Volatile Memory ROM ST.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M24C01_RMN extends Component.withPins({
  /** Physical pin 1: E0; input. */
  "E0": "1",
  /** Physical pin 2: E1; input. */
  "E1": "2",
  /** Physical pin 3: E2; input. */
  "E2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: ~{WC}; input. */
  "~{WC}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:M24C01-RMN";
  override referencePrefix = "U";
}

/**
 * 1Kb (128x8) I2C Serial EEPROM, 2.5-5.5V, TSSOP-8
 *
 * KiCad symbol: `Memory_EEPROM:M24C01-WDW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see http://www.st.com/content/ccc/resource/technical/document/datasheet/b0/d8/50/40/5a/85/49/6f/DM00071904.pdf/files/DM00071904.pdf/jcr:content/translations/en.DM00071904.pdf
 * Keywords: Nonvolatile Non-Volatile Memory ROM ST.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M24C01_WDW extends Component.withPins({
  /** Physical pin 1: E0; input. */
  "E0": "1",
  /** Physical pin 2: E1; input. */
  "E1": "2",
  /** Physical pin 3: E2; input. */
  "E2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: ~{WC}; input. */
  "~{WC}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:M24C01-WDW";
  override referencePrefix = "U";
}

/**
 * 1Kb (128x8) I2C Serial EEPROM, 2.5-5.5V, SOIC-8
 *
 * KiCad symbol: `Memory_EEPROM:M24C01-WMN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.st.com/content/ccc/resource/technical/document/datasheet/b0/d8/50/40/5a/85/49/6f/DM00071904.pdf/files/DM00071904.pdf/jcr:content/translations/en.DM00071904.pdf
 * Keywords: Nonvolatile Non-Volatile Memory ROM ST.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M24C01_WMN extends Component.withPins({
  /** Physical pin 1: E0; input. */
  "E0": "1",
  /** Physical pin 2: E1; input. */
  "E1": "2",
  /** Physical pin 3: E2; input. */
  "E2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: ~{WC}; input. */
  "~{WC}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:M24C01-WMN";
  override referencePrefix = "U";
}

/**
 * 2Kb (256x8) I2C Serial EEPROM, 1.6-5.5V, TSSOP-8
 *
 * KiCad symbol: `Memory_EEPROM:M24C02-FDW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see http://www.st.com/content/ccc/resource/technical/document/datasheet/b0/d8/50/40/5a/85/49/6f/DM00071904.pdf/files/DM00071904.pdf/jcr:content/translations/en.DM00071904.pdf
 * Keywords: Nonvolatile Non-Volatile Memory ROM ST.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M24C02_FDW extends Component.withPins({
  /** Physical pin 1: E0; input. */
  "E0": "1",
  /** Physical pin 2: E1; input. */
  "E1": "2",
  /** Physical pin 3: E2; input. */
  "E2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: ~{WC}; input. */
  "~{WC}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:M24C02-FDW";
  override referencePrefix = "U";
}

/**
 * 2Kb (256x8) I2C Serial EEPROM, 1.6-5.5V, SOIC-8
 *
 * KiCad symbol: `Memory_EEPROM:M24C02-FMN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.st.com/content/ccc/resource/technical/document/datasheet/b0/d8/50/40/5a/85/49/6f/DM00071904.pdf/files/DM00071904.pdf/jcr:content/translations/en.DM00071904.pdf
 * Keywords: Nonvolatile Non-Volatile Memory ROM ST.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M24C02_FMN extends Component.withPins({
  /** Physical pin 1: E0; input. */
  "E0": "1",
  /** Physical pin 2: E1; input. */
  "E1": "2",
  /** Physical pin 3: E2; input. */
  "E2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: ~{WC}; input. */
  "~{WC}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:M24C02-FMN";
  override referencePrefix = "U";
}

/**
 * 2Kb (256x8) I2C Serial EEPROM, 1.8-5.5V, TSSOP-8
 *
 * KiCad symbol: `Memory_EEPROM:M24C02-RDW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x3mm*P0.65mm*.
 * @see http://www.st.com/content/ccc/resource/technical/document/datasheet/b0/d8/50/40/5a/85/49/6f/DM00071904.pdf/files/DM00071904.pdf/jcr:content/translations/en.DM00071904.pdf
 * Keywords: Nonvolatile Non-Volatile Memory ROM ST.
 * Default footprint: Package_SO:TSSOP-8_4.4x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M24C02_RDW extends Component.withPins({
  /** Physical pin 1: E0; input. */
  "E0": "1",
  /** Physical pin 2: E1; input. */
  "E1": "2",
  /** Physical pin 3: E2; input. */
  "E2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: ~{WC}; input. */
  "~{WC}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:M24C02-RDW";
  override referencePrefix = "U";
}

/**
 * 2Kb (256x8) I2C Serial EEPROM, 1.8-5.5V, SOIC-8
 *
 * KiCad symbol: `Memory_EEPROM:M24C02-RMN`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.st.com/content/ccc/resource/technical/document/datasheet/b0/d8/50/40/5a/85/49/6f/DM00071904.pdf/files/DM00071904.pdf/jcr:content/translations/en.DM00071904.pdf
 * Keywords: Nonvolatile Non-Volatile Memory ROM ST.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M24C02_RMN extends Component.withPins({
  /** Physical pin 1: E0; input. */
  "E0": "1",
  /** Physical pin 2: E1; input. */
  "E1": "2",
  /** Physical pin 3: E2; input. */
  "E2": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: SDA; bidirectional. */
  "SDA": "5",
  /** Physical pin 6: SCL; input. */
  "SCL": "6",
  /** Physical pin 7: ~{WC}; input. */
  "~{WC}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:M24C02-RMN";
  override referencePrefix = "U";
}

/**
 * SPI EEPROM, 256Kb (32K x 8), No Identification Page, 2.5 to 5.5V, SO8
 *
 * KiCad symbol: `Memory_EEPROM:M95256-WMN6P`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.st.com/content/ccc/resource/technical/document/datasheet/9d/75/f0/3e/76/00/4c/0b/CD00103810.pdf/files/CD00103810.pdf/jcr:content/translations/en.CD00103810.pdf
 * Keywords: SPI EEPROM.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M95256_WMN6P extends Component.withPins({
  /** Physical pin 1: ~{S}; input. */
  "~{S}": "1",
  /** Physical pin 2: Q; output. */
  "Q": "2",
  /** Physical pin 3: ~{W}; input. */
  "~{W}": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: D; input. */
  "D": "5",
  /** Physical pin 6: C; input. */
  "C": "6",
  /** Physical pin 7: ~{HOLD}; input. */
  "~{HOLD}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Memory_EEPROM:M95256-WMN6P";
  override referencePrefix = "U";
}

/**
 * Automotive 512-Kbit serial SPI bus EEPROMs with high-speed clock, DFN-8
 *
 * KiCad symbol: `Memory_EEPROM:M95512-Axxx-MF`. Reference prefix: `U`.
 * Footprint filters: *DF?N*3x2mm*P0.5mm*.
 * @see https://www.st.com/resource/en/datasheet/m95512-a125.pdf
 * Keywords: SPI EEPROM.
 * Default footprint: Package_DFN_QFN:WFDFPN-8-1EP_3x2mm_P0.5mm_EP1.25x1.35mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class M95512_Axxx_MF extends Component.withPins({
  /** Physical pin 1: ~{S}; input. */
  "~{S}": "1",
  /** Physical pin 2: Q; output. */
  "Q": "2",
  /** Physical pin 3: ~{W}; input. */
  "~{W}": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: D; input. */
  "D": "5",
  /** Physical pin 6: C; input. */
  "C": "6",
  /** Physical pin 7: ~{HOLD}; input. */
  "~{HOLD}": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: EP; passive. */
  "EP": "9",
}) {
  override schema = "Memory_EEPROM:M95512-Axxx-MF";
  override referencePrefix = "U";
}

/**
 * Field Memory, 262264 x 4 bit, [Obsolete 1992-01]
 *
 * KiCad symbol: `Memory_EEPROM:TMS4C1050N`. Reference prefix: `U`.
 * Footprint filters: DIP*.
 * @see http://www.datasheets360.com/pdf/3640170882560205603
 * Keywords: Field Memory.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TMS4C1050N extends Component.withPins({
  /** Physical pin 1: WE; input. */
  "WE": "1",
  /** Physical pin 2: RSTW; input. */
  "RSTW": "2",
  /** Physical pin 3: SWCLK; input. */
  "SWCLK": "3",
  /** Physical pin 4: D0; input. */
  "D0": "4",
  /** Physical pin 5: D1; input. */
  "D1": "5",
  /** Physical pin 6: D2; input. */
  "D2": "6",
  /** Physical pin 7: D3; input. */
  "D3": "7",
  /** Physical pin 8: GND; power_in. */
  "GND": "8",
  /** Physical pin 9: Q3; tri_state. */
  "Q3": "9",
  /** Physical pin 10: Q2; tri_state. */
  "Q2": "10",
  /** Physical pin 11: Q1; tri_state. */
  "Q1": "11",
  /** Physical pin 12: Q0; tri_state. */
  "Q0": "12",
  /** Physical pin 13: SRCLK; input. */
  "SRCLK": "13",
  /** Physical pin 14: RSTR; input. */
  "RSTR": "14",
  /** Physical pin 15: RE/OE; input. */
  "RE/OE": "15",
  /** Physical pin 16: VCC; power_in. */
  "VCC": "16",
}) {
  override schema = "Memory_EEPROM:TMS4C1050N";
  override referencePrefix = "U";
}

