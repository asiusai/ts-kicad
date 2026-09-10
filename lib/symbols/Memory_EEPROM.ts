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
 */
export class _24AA02_OT extends Component.withPins({
  "SCL": "1",
  "V_{SS}": "2",
  "SDA": "3",
  "V_{CC}": "4",
  "WP": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SCL: "input", "V_{SS}": "power_in", SDA: "bidirectional", "V_{CC}": "power_in", WP: "input", ...opts.pinTypes } });
  }
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
 */
export class _24AA025E_OT extends Component.withPins({
  "SCL": "1",
  "V_{SS}": "2",
  "SDA": "3",
  "A1": "4",
  "A0": "5",
  "V_{CC}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SCL: "input", "V_{SS}": "power_in", SDA: "bidirectional", A1: "input", A0: "input", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class _24AA025E_SN extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "V_{SS}": "4",
  "SDA": "5",
  "SCL": "6",
  "NC": "7",
  "V_{CC}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", "V_{SS}": "power_in", SDA: "bidirectional", SCL: "input", NC: "no_connect", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class _24AA02E_OT extends Component.withPins({
  "SCL": "1",
  "V_{SS}": "2",
  "SDA": "3",
  "V_{CC}": "4",
  "NC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SCL: "input", "V_{SS}": "power_in", SDA: "bidirectional", "V_{CC}": "power_in", NC: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class _24AA02E_SN extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "V_{SS}": "4",
  "SDA": "5",
  "SCL": "6",
  "NC_7": "7",
  "V_{CC}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", NC_3: "no_connect", "V_{SS}": "power_in", SDA: "bidirectional", SCL: "input", NC_7: "no_connect", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT24CS01_MAHM extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND_4": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND_4: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class _24C02Cx_x_MNY extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND_4": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND_4: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class AT24CS01_SSHM extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _24C02Cx_x_SN extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _24LC16 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _24LC00 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _24LC01 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _24LC02 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _24LC04 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _24LC08 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _24LC1025 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _24LC128 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _24LC256 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _24LC32 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _24LC512 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _24LC64 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _25CSM04xxSN extends Component.withPins({
  "~{CS}": "1",
  "SO": "2",
  "~{WP}": "3",
  "V_{SS}": "4",
  "SI": "5",
  "SCK": "6",
  "~{HOLD}": "7",
  "V_{CC}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", SO: "tri_state", "~{WP}": "input", "V_{SS}": "power_in", SI: "input", SCK: "input", "~{HOLD}": "input", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class _25CSM04xxMF extends Component.withPins({
  "~{CS}": "1",
  "SO": "2",
  "~{WP}": "3",
  "V_{SS}": "4",
  "SI": "5",
  "SCK": "6",
  "~{HOLD}": "7",
  "V_{CC}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", SO: "tri_state", "~{WP}": "input", "V_{SS}": "power_in", SI: "input", SCK: "input", "~{HOLD}": "input", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class _25LCxxx extends Component.withPins({
  "~{CS}": "1",
  "MISO": "2",
  "~{WP}": "3",
  "GND": "4",
  "MOSI": "5",
  "SCK": "6",
  "~{HOLD}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", MISO: "tri_state", "~{WP}": "input", GND: "power_in", MOSI: "input", SCK: "input", "~{HOLD}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _25LCxxx_MC extends Component.withPins({
  "~{CS}": "1",
  "MISO": "2",
  "~{WP}": "3",
  "GND_4": "4",
  "MOSI": "5",
  "SCK": "6",
  "~{HOLD}": "7",
  "VCC": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", MISO: "tri_state", "~{WP}": "input", GND_4: "power_in", MOSI: "input", SCK: "input", "~{HOLD}": "input", VCC: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class _25LCxxx_MF extends Component.withPins({
  "~{CS}": "1",
  "MISO": "2",
  "~{WP}": "3",
  "GND_4": "4",
  "MOSI": "5",
  "SCK": "6",
  "~{HOLD}": "7",
  "VCC": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", MISO: "tri_state", "~{WP}": "input", GND_4: "power_in", MOSI: "input", SCK: "input", "~{HOLD}": "input", VCC: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class _28C256 extends Component.withPins({
  "A14": "1",
  "A12": "2",
  "A7": "3",
  "A6": "4",
  "A5": "5",
  "A4": "6",
  "A3": "7",
  "A2": "8",
  "A1": "9",
  "A0": "10",
  "D0": "11",
  "D1": "12",
  "D2": "13",
  "GND": "14",
  "D3": "15",
  "D4": "16",
  "D5": "17",
  "D6": "18",
  "D7": "19",
  "~{CS}": "20",
  "A10": "21",
  "~{OE}": "22",
  "A11": "23",
  "A9": "24",
  "A8": "25",
  "A13": "26",
  "~{WE}": "27",
  "VCC": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", GND: "power_in", D3: "tri_state", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", "~{CS}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _93AAxxA extends Component.withPins({
  "CS": "1",
  "SCLK": "2",
  "DI": "3",
  "DO": "4",
  "GND": "5",
  "NC_6": "6",
  "NC_7": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CS: "input", SCLK: "input", DI: "input", DO: "tri_state", GND: "power_in", NC_6: "no_connect", NC_7: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _93AAxxAT_xOT extends Component.withPins({
  "DO": "1",
  "Vss": "2",
  "DI": "3",
  "CLK": "4",
  "CS": "5",
  "Vcc": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DO: "tri_state", Vss: "power_in", DI: "input", CLK: "input", CS: "input", Vcc: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _93AAxxB extends Component.withPins({
  "CS": "1",
  "SCLK": "2",
  "DI": "3",
  "DO": "4",
  "GND": "5",
  "NC_6": "6",
  "NC_7": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CS: "input", SCLK: "input", DI: "input", DO: "tri_state", GND: "power_in", NC_6: "no_connect", NC_7: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _93AAxxBT_xOT extends Component.withPins({
  "DO": "1",
  "Vss": "2",
  "DI": "3",
  "CLK": "4",
  "CS": "5",
  "Vcc": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DO: "tri_state", Vss: "power_in", DI: "input", CLK: "input", CS: "input", Vcc: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _93AAxxC extends Component.withPins({
  "CS": "1",
  "SCLK": "2",
  "DI": "3",
  "DO": "4",
  "GND": "5",
  "ORG": "6",
  "NC": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CS: "input", SCLK: "input", DI: "input", DO: "tri_state", GND: "power_in", ORG: "input", NC: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _93CxxA extends Component.withPins({
  "CS": "1",
  "SCLK": "2",
  "DI": "3",
  "DO": "4",
  "GND": "5",
  "NC_6": "6",
  "NC_7": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CS: "input", SCLK: "input", DI: "input", DO: "tri_state", GND: "power_in", NC_6: "no_connect", NC_7: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _93CxxB extends Component.withPins({
  "CS": "1",
  "SCLK": "2",
  "DI": "3",
  "DO": "4",
  "GND": "5",
  "NC_6": "6",
  "NC_7": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CS: "input", SCLK: "input", DI: "input", DO: "tri_state", GND: "power_in", NC_6: "no_connect", NC_7: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _93CxxC extends Component.withPins({
  "CS": "1",
  "SCLK": "2",
  "DI": "3",
  "DO": "4",
  "GND": "5",
  "ORG": "6",
  "NC": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CS: "input", SCLK: "input", DI: "input", DO: "tri_state", GND: "power_in", ORG: "input", NC: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _93LCxxA extends Component.withPins({
  "CS": "1",
  "SCLK": "2",
  "DI": "3",
  "DO": "4",
  "GND": "5",
  "NC_6": "6",
  "NC_7": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CS: "input", SCLK: "input", DI: "input", DO: "tri_state", GND: "power_in", NC_6: "no_connect", NC_7: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _93LCxxAxxOT extends Component.withPins({
  "DO": "1",
  "GND": "2",
  "DI": "3",
  "CLK": "4",
  "CS": "5",
  "VCC": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DO: "tri_state", GND: "power_in", DI: "input", CLK: "input", CS: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _93LCxxB extends Component.withPins({
  "CS": "1",
  "SCLK": "2",
  "DI": "3",
  "DO": "4",
  "GND": "5",
  "NC_6": "6",
  "NC_7": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CS: "input", SCLK: "input", DI: "input", DO: "tri_state", GND: "power_in", NC_6: "no_connect", NC_7: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _93LCxxBxxOT extends Component.withPins({
  "DO": "1",
  "GND": "2",
  "DI": "3",
  "CLK": "4",
  "CS": "5",
  "VCC": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DO: "tri_state", GND: "power_in", DI: "input", CLK: "input", CS: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class _93LCxxC extends Component.withPins({
  "CS": "1",
  "SCLK": "2",
  "DI": "3",
  "DO": "4",
  "GND": "5",
  "ORG": "6",
  "NC": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CS: "input", SCLK: "input", DI: "input", DO: "tri_state", GND: "power_in", ORG: "input", NC: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT24CS01_STUM extends Component.withPins({
  "SCL": "1",
  "GND": "2",
  "SDA": "3",
  "VCC": "4",
  "WP": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SCL: "input", GND: "power_in", SDA: "bidirectional", VCC: "power_in", WP: "input", ...opts.pinTypes } });
  }
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
 */
export class AT24CS01_XHM extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT24CS02_MAHM extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND_4": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND_4: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class AT24CS02_SSHM extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT24CS02_STUM extends Component.withPins({
  "SCL": "1",
  "GND": "2",
  "SDA": "3",
  "VCC": "4",
  "WP": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SCL: "input", GND: "power_in", SDA: "bidirectional", VCC: "power_in", WP: "input", ...opts.pinTypes } });
  }
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
 */
export class AT24CS02_XHM extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT24CS04_MAHM extends Component.withPins({
  "NC_1": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
  "NC_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", NC_9: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class AT24CS04_SSHM extends Component.withPins({
  "NC": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT24CS04_STUM extends Component.withPins({
  "SCL": "1",
  "GND": "2",
  "SDA": "3",
  "VCC": "4",
  "WP": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SCL: "input", GND: "power_in", SDA: "bidirectional", VCC: "power_in", WP: "input", ...opts.pinTypes } });
  }
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
 */
export class AT24CS04_XHM extends Component.withPins({
  "NC": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT24CS08_MAHM extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
  "NC_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", NC_9: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class AT24CS08_SSHM extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT24CS08_STUM extends Component.withPins({
  "SCL": "1",
  "GND": "2",
  "SDA": "3",
  "VCC": "4",
  "WP": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SCL: "input", GND: "power_in", SDA: "bidirectional", VCC: "power_in", WP: "input", ...opts.pinTypes } });
  }
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
 */
export class AT24CS08_XHM extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT24CS16_MAHM extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
  "NC_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", NC_3: "no_connect", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", NC_9: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class AT24CS16_SSHM extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", NC_3: "no_connect", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT24CS16_STUM extends Component.withPins({
  "SCL": "1",
  "GND": "2",
  "SDA": "3",
  "VCC": "4",
  "WP": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SCL: "input", GND: "power_in", SDA: "bidirectional", VCC: "power_in", WP: "input", ...opts.pinTypes } });
  }
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
 */
export class AT24CS16_XHM extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", NC_3: "no_connect", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT24CS32_MAHM extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND_4": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND_4: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class AT24CS32_SSHM extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT24CS32_STUM extends Component.withPins({
  "SCL": "1",
  "GND": "2",
  "SDA": "3",
  "VCC": "4",
  "WP": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SCL: "input", GND: "power_in", SDA: "bidirectional", VCC: "power_in", WP: "input", ...opts.pinTypes } });
  }
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
 */
export class AT24CS32_XHM extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT24CS64_MAHM extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND_4": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND_4: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class AT24CS64_SSHM extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT24CS64_XHM extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT25xxx extends Component.withPins({
  "~{CS}": "1",
  "MISO": "2",
  "~{WP}": "3",
  "GND": "4",
  "MOSI": "5",
  "SCK": "6",
  "~{HOLD}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", MISO: "tri_state", "~{WP}": "input", GND: "power_in", MOSI: "input", SCK: "input", "~{HOLD}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class AT25xxx_MA extends Component.withPins({
  "~{CS}": "1",
  "MISO": "2",
  "~{WP}": "3",
  "GND_4": "4",
  "MOSI": "5",
  "SCK": "6",
  "~{HOLD}": "7",
  "VCC": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", MISO: "tri_state", "~{WP}": "input", GND_4: "power_in", MOSI: "input", SCK: "input", "~{HOLD}": "input", VCC: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class BR25Sxxx extends Component.withPins({
  "~{CS}": "1",
  "MISO": "2",
  "~{WP}": "3",
  "GND": "4",
  "MOSI": "5",
  "SCK": "6",
  "~{HOLD}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", MISO: "tri_state", "~{WP}": "input", GND: "power_in", MOSI: "input", SCK: "input", "~{HOLD}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class BR25xxx_NUX extends Component.withPins({
  "~{CS}": "1",
  "MISO": "2",
  "~{WP}": "3",
  "GND_4": "4",
  "MOSI": "5",
  "SCK": "6",
  "~{HOLD}": "7",
  "VCC": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", MISO: "tri_state", "~{WP}": "input", GND_4: "power_in", MOSI: "input", SCK: "input", "~{HOLD}": "input", VCC: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class CAT24C128 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class CAT24C256 extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class CAT24M01L extends Component.withPins({
  "NC": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class CAT24M01W extends Component.withPins({
  "NC": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class CAT24M01X extends Component.withPins({
  "NC": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class CAT24M01Y extends Component.withPins({
  "NC": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class CAT250xxx extends Component.withPins({
  "~{CS}": "1",
  "MISO": "2",
  "~{WP}": "3",
  "GND": "4",
  "MOSI": "5",
  "SCK": "6",
  "~{HOLD}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", MISO: "tri_state", "~{WP}": "input", GND: "power_in", MOSI: "input", SCK: "input", "~{HOLD}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class CAT250xxx_HU4 extends Component.withPins({
  "~{CS}": "1",
  "MISO": "2",
  "~{WP}": "3",
  "GND_4": "4",
  "MOSI": "5",
  "SCK": "6",
  "~{HOLD}": "7",
  "VCC": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", MISO: "tri_state", "~{WP}": "input", GND_4: "power_in", MOSI: "input", SCK: "input", "~{HOLD}": "input", VCC: "power_in", GND_9: "passive", ...opts.pinTypes } });
  }
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
 */
export class DS2431 extends Component.withPins({
  "GND": "1",
  "IO": "2",
  "NC": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IO: "bidirectional", NC: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class DS2431P extends Component.withPins({
  "GND": "1",
  "IO": "2",
  "NC_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IO: "bidirectional", NC_3: "no_connect", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class DS2431Q extends Component.withPins({
  "NC_1": "1",
  "IO": "2",
  "GND_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "GND_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", IO: "bidirectional", GND_3: "power_in", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", GND_7: "passive", ...opts.pinTypes } });
  }
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
 */
export class DS28E07 extends Component.withPins({
  "GND": "1",
  "IO": "2",
  "NC": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IO: "bidirectional", NC: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class DS28E07P extends Component.withPins({
  "GND": "1",
  "IO": "2",
  "NC_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IO: "bidirectional", NC_3: "no_connect", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class DS28E07Q extends Component.withPins({
  "NC_1": "1",
  "IO": "2",
  "GND_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "GND_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", IO: "bidirectional", GND_3: "power_in", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", GND_7: "passive", ...opts.pinTypes } });
  }
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
 */
export class KM28C64A extends Component.withPins({
  "NC_1": "1",
  "A12": "2",
  "A7": "3",
  "A6": "4",
  "A5": "5",
  "A4": "6",
  "A3": "7",
  "A2": "8",
  "A1": "9",
  "A0": "10",
  "I/O0": "11",
  "I/O1": "12",
  "I/O2": "13",
  "GND": "14",
  "I/O3": "15",
  "I/O4": "16",
  "I/O5": "17",
  "I/O6": "18",
  "I/O7": "19",
  "~{CE}": "20",
  "A10": "21",
  "~{OE}": "22",
  "A11": "23",
  "A9": "24",
  "A8": "25",
  "NC_26": "26",
  "~{WE}": "27",
  "VCC": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", GND: "power_in", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CE}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", NC_26: "no_connect", "~{WE}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class KM28C65A extends Component.withPins({
  "RDY/~{BSY}": "1",
  "A12": "2",
  "A7": "3",
  "A6": "4",
  "A5": "5",
  "A4": "6",
  "A3": "7",
  "A2": "8",
  "A1": "9",
  "A0": "10",
  "I/O0": "11",
  "I/O1": "12",
  "I/O2": "13",
  "GND": "14",
  "I/O3": "15",
  "I/O4": "16",
  "I/O5": "17",
  "I/O6": "18",
  "I/O7": "19",
  "~{CE}": "20",
  "A10": "21",
  "~{OE}": "22",
  "A11": "23",
  "A9": "24",
  "A8": "25",
  "NC": "26",
  "~{WE}": "27",
  "VCC": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "RDY/~{BSY}": "output", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", "I/O0": "tri_state", "I/O1": "tri_state", "I/O2": "tri_state", GND: "power_in", "I/O3": "tri_state", "I/O4": "tri_state", "I/O5": "tri_state", "I/O6": "tri_state", "I/O7": "tri_state", "~{CE}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", NC: "no_connect", "~{WE}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class M24C02_WDW extends Component.withPins({
  "E0": "1",
  "E1": "2",
  "E2": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "~{WC}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E0: "input", E1: "input", E2: "input", VSS: "power_in", SDA: "bidirectional", SCL: "input", "~{WC}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class M24C01_FDW extends Component.withPins({
  "E0": "1",
  "E1": "2",
  "E2": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "~{WC}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E0: "input", E1: "input", E2: "input", VSS: "power_in", SDA: "bidirectional", SCL: "input", "~{WC}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class M24C02_WMN extends Component.withPins({
  "E0": "1",
  "E1": "2",
  "E2": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "~{WC}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E0: "input", E1: "input", E2: "input", VSS: "power_in", SDA: "bidirectional", SCL: "input", "~{WC}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class M24C01_FMN extends Component.withPins({
  "E0": "1",
  "E1": "2",
  "E2": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "~{WC}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E0: "input", E1: "input", E2: "input", VSS: "power_in", SDA: "bidirectional", SCL: "input", "~{WC}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class M24C01_RDW extends Component.withPins({
  "E0": "1",
  "E1": "2",
  "E2": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "~{WC}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E0: "input", E1: "input", E2: "input", VSS: "power_in", SDA: "bidirectional", SCL: "input", "~{WC}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class M24C01_RMN extends Component.withPins({
  "E0": "1",
  "E1": "2",
  "E2": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "~{WC}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E0: "input", E1: "input", E2: "input", VSS: "power_in", SDA: "bidirectional", SCL: "input", "~{WC}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class M24C01_WDW extends Component.withPins({
  "E0": "1",
  "E1": "2",
  "E2": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "~{WC}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E0: "input", E1: "input", E2: "input", VSS: "power_in", SDA: "bidirectional", SCL: "input", "~{WC}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class M24C01_WMN extends Component.withPins({
  "E0": "1",
  "E1": "2",
  "E2": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "~{WC}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E0: "input", E1: "input", E2: "input", VSS: "power_in", SDA: "bidirectional", SCL: "input", "~{WC}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class M24C02_FDW extends Component.withPins({
  "E0": "1",
  "E1": "2",
  "E2": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "~{WC}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E0: "input", E1: "input", E2: "input", VSS: "power_in", SDA: "bidirectional", SCL: "input", "~{WC}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class M24C02_FMN extends Component.withPins({
  "E0": "1",
  "E1": "2",
  "E2": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "~{WC}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E0: "input", E1: "input", E2: "input", VSS: "power_in", SDA: "bidirectional", SCL: "input", "~{WC}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class M24C02_RDW extends Component.withPins({
  "E0": "1",
  "E1": "2",
  "E2": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "~{WC}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E0: "input", E1: "input", E2: "input", VSS: "power_in", SDA: "bidirectional", SCL: "input", "~{WC}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class M24C02_RMN extends Component.withPins({
  "E0": "1",
  "E1": "2",
  "E2": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "~{WC}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E0: "input", E1: "input", E2: "input", VSS: "power_in", SDA: "bidirectional", SCL: "input", "~{WC}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class M95256_WMN6P extends Component.withPins({
  "~{S}": "1",
  "Q": "2",
  "~{W}": "3",
  "VSS": "4",
  "D": "5",
  "C": "6",
  "~{HOLD}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{S}": "input", Q: "output", "~{W}": "input", VSS: "power_in", D: "input", C: "input", "~{HOLD}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class M95512_Axxx_MF extends Component.withPins({
  "~{S}": "1",
  "Q": "2",
  "~{W}": "3",
  "VSS": "4",
  "D": "5",
  "C": "6",
  "~{HOLD}": "7",
  "VCC": "8",
  "EP": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{S}": "input", Q: "output", "~{W}": "input", VSS: "power_in", D: "input", C: "input", "~{HOLD}": "input", VCC: "power_in", EP: "passive", ...opts.pinTypes } });
  }
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
 */
export class TMS4C1050N extends Component.withPins({
  "WE": "1",
  "RSTW": "2",
  "SWCLK": "3",
  "D0": "4",
  "D1": "5",
  "D2": "6",
  "D3": "7",
  "GND": "8",
  "Q3": "9",
  "Q2": "10",
  "Q1": "11",
  "Q0": "12",
  "SRCLK": "13",
  "RSTR": "14",
  "RE/OE": "15",
  "VCC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { WE: "input", RSTW: "input", SWCLK: "input", D0: "input", D1: "input", D2: "input", D3: "input", GND: "power_in", Q3: "tri_state", Q2: "tri_state", Q1: "tri_state", Q0: "tri_state", SRCLK: "input", RSTR: "input", "RE/OE": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_EEPROM:TMS4C1050N";
  override referencePrefix = "U";
}
