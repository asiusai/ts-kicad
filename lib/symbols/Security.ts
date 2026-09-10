// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 32K AES serial EEPROM, SOIC-8
 *
 * KiCad symbol: `Security:ATAES132A-SH`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/ATAES132A-Data-Sheet-40002023A.pdf
 * Keywords: cryptographic security AES SPI.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class ATAES132A_SH extends Component.withPins({
  "~{CS}": "1",
  "SO": "2",
  "NC_3": "3",
  "VSS": "4",
  "SI/SDA": "5",
  "SCK": "6",
  "NC_7": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", SO: "output", NC_3: "no_connect", VSS: "power_in", "SI/SDA": "bidirectional", SCK: "input", NC_7: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Security:ATAES132A-SH";
  override referencePrefix = "U";
}

/**
 * Cryptographic Co-Processor with Secure Hardware-based 16 Key Storage, ECDSA and ECDH support, I2C, UDFN-8
 *
 * KiCad symbol: `Security:ATECC608A-MAHDA`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/ATECC608A-CryptoAuthentication-Device-Summary-Data-Sheet-DS40001977B.pdf
 * Keywords: Cryptographic coprocessor.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.3x1.5mm.
 */
export class ATECC608A_MAHDA extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "NC_7": "7",
  "VCC": "8",
  "EP": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", NC_3: "no_connect", GND: "power_in", SDA: "bidirectional", SCL: "input", NC_7: "no_connect", VCC: "power_in", EP: "input", ...opts.pinTypes } });
  }
  override schema = "Security:ATECC608A-MAHDA";
  override referencePrefix = "U";
}

/**
 * Cryptographic Co-Processor with Secure Hardware-based 16 Key Storage, ECDSA and ECDH support, I2C, UDFN-8
 *
 * KiCad symbol: `Security:ATECC508A-MAHDA`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/20005928A.pdf
 * Keywords: Cryptographic coprocessor.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.3x1.5mm.
 */
export class ATECC508A_MAHDA extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "NC_7": "7",
  "VCC": "8",
  "EP": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", NC_3: "no_connect", GND: "power_in", SDA: "bidirectional", SCL: "input", NC_7: "no_connect", VCC: "power_in", EP: "input", ...opts.pinTypes } });
  }
  override schema = "Security:ATECC508A-MAHDA";
  override referencePrefix = "U";
}

/**
 * Cryptographic Co-Processor with Secure Hardware-based 16 Key Storage, ECDSA and ECDH support, I2C, SOIC-8
 *
 * KiCad symbol: `Security:ATECC608A-SSHDA`. Reference prefix: `U`.
 * Footprint filters: SOIC*8*3.9x4.9mm*P1.27mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/ATECC608A-CryptoAuthentication-Device-Summary-Data-Sheet-DS40001977B.pdf
 * Keywords: Cryptographic coprocessor.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class ATECC608A_SSHDA extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "NC_7": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", NC_3: "no_connect", GND: "power_in", SDA: "bidirectional", SCL: "input", NC_7: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Security:ATECC608A-SSHDA";
  override referencePrefix = "U";
}

/**
 * Cryptographic Co-Processor with Secure Hardware-based 16 Key Storage, ECDSA and ECDH support, I2C, SOIC-8
 *
 * KiCad symbol: `Security:ATECC508A-SSHDA`. Reference prefix: `U`.
 * Footprint filters: SOIC*8*3.9x4.9mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/20005928A.pdf
 * Keywords: Cryptographic coprocessor.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class ATECC508A_SSHDA extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "NC_7": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", NC_3: "no_connect", GND: "power_in", SDA: "bidirectional", SCL: "input", NC_7: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Security:ATECC508A-SSHDA";
  override referencePrefix = "U";
}

/**
 * Cryptographic Co-Processor with Secure Hardware-based 16 Key Storage, ECDSA and ECDH support, I2C, UDFN-8
 *
 * KiCad symbol: `Security:ATECC608B-MAHDA`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/SCBU/ProductDocuments/DataSheets/ATECC608B-CryptoAuthentication-Device-Summary-Data-Sheet-DS40002239B.pdf
 * Keywords: Cryptographic coprocessor.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.3x1.5mm.
 */
export class ATECC608B_MAHDA extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "NC_7": "7",
  "VCC": "8",
  "EP": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", NC_3: "no_connect", GND: "power_in", SDA: "bidirectional", SCL: "input", NC_7: "no_connect", VCC: "power_in", EP: "input", ...opts.pinTypes } });
  }
  override schema = "Security:ATECC608B-MAHDA";
  override referencePrefix = "U";
}

/**
 * Cryptographic Co-Processor with Secure Hardware-based 16 Key Storage, ECDSA and ECDH support, I2C, SOIC-8
 *
 * KiCad symbol: `Security:ATECC608B-SSHDA`. Reference prefix: `U`.
 * Footprint filters: SOIC*8*3.9x4.9mm*P1.27mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/SCBU/ProductDocuments/DataSheets/ATECC608B-CryptoAuthentication-Device-Summary-Data-Sheet-DS40002239B.pdf
 * Keywords: Cryptographic coprocessor.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class ATECC608B_SSHDA extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "NC_3": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "NC_7": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", NC_3: "no_connect", GND: "power_in", SDA: "bidirectional", SCL: "input", NC_7: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Security:ATECC608B-SSHDA";
  override referencePrefix = "U";
}
