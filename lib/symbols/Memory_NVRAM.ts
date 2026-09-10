// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 4kbit I2C serial EERAM, SRAM with EEPROM backup, 2.7-3.6V, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Memory_NVRAM:47L04`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005371C.pdf
 * Keywords: 4kb 3V I2C serial EERAM SRAM EEPROM.
 */
export class _47L04 extends Component.withPins({
  "VCAP": "1",
  "A1": "2",
  "A2": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "HS": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCAP: "power_in", A1: "input", A2: "input", VSS: "power_in", SDA: "bidirectional", SCL: "input", HS: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:47L04";
  override referencePrefix = "U";
}

/**
 * 4kbit I2C serial EERAM, SRAM with EEPROM backup, 4.5-5.5V, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Memory_NVRAM:47C04`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005371C.pdf
 * Keywords: 4kb 5V I2C serial EERAM SRAM EEPROM.
 */
export class _47C04 extends Component.withPins({
  "VCAP": "1",
  "A1": "2",
  "A2": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "HS": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCAP: "power_in", A1: "input", A2: "input", VSS: "power_in", SDA: "bidirectional", SCL: "input", HS: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:47C04";
  override referencePrefix = "U";
}

/**
 * 16kbit I2C serial EERAM, SRAM with EEPROM backup, 4.5-5.5V, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Memory_NVRAM:47C16`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005371C.pdf
 * Keywords: 16kb 5V I2C serial EERAM SRAM EEPROM.
 */
export class _47C16 extends Component.withPins({
  "VCAP": "1",
  "A1": "2",
  "A2": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "HS": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCAP: "power_in", A1: "input", A2: "input", VSS: "power_in", SDA: "bidirectional", SCL: "input", HS: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:47C16";
  override referencePrefix = "U";
}

/**
 * 16kbit I2C serial EERAM, SRAM with EEPROM backup, 2.7-3.6V, DIP-8/SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Memory_NVRAM:47L16`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005371C.pdf
 * Keywords: 16kb 3V I2C serial EERAM SRAM EEPROM.
 */
export class _47L16 extends Component.withPins({
  "VCAP": "1",
  "A1": "2",
  "A2": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "HS": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCAP: "power_in", A1: "input", A2: "input", VSS: "power_in", SDA: "bidirectional", SCL: "input", HS: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:47L16";
  override referencePrefix = "U";
}

/**
 * 256-Kbit (32K x 8-bit) nvSRAM, single 3V +20% to –10% operation, 25/45ns, SSOP-48
 *
 * KiCad symbol: `Memory_NVRAM:CY14B256LA-SP`. Reference prefix: `U`.
 * Footprint filters: *SSOP*7.*15.*P0.635mm*.
 * @see https://www.infineon.com/dgdl/Infineon-CY14B256LA_256-Kbit_(32_K_8)_nvSRAM-DataSheet-v13_00-EN.pdf?fileId=8ac78c8c7d0d8da4017d0ebd9bf63054
 * Keywords: SRAM Static MEMORY 256Kbit Nonvolatile Non-Volatile.
 * Default footprint: Package_SO:SSOP-48_7.5x15.9mm_P0.635mm.
 */
export class CY14B256LA_SP extends Component.withPins({
  "VSS_13": "13",
  "VCC_25": "25",
  "VSS_36": "36",
  "VCC_48": "48",
  "VCAP": "1",
  "NC_2": "2",
  "A14": "3",
  "A12": "4",
  "A7": "5",
  "A6": "6",
  "A5": "7",
  "NC_8": "8",
  "A4": "9",
  "NC_10": "10",
  "NC_11": "11",
  "NC_12": "12",
  "NC_14": "14",
  "NC_15": "15",
  "DQ0": "16",
  "A3": "17",
  "A2": "18",
  "A1": "19",
  "A0": "20",
  "DQ1": "21",
  "DQ2": "22",
  "NC_23": "23",
  "NC_24": "24",
  "DQ3": "26",
  "DQ4": "27",
  "DQ5": "28",
  "DQ7": "29",
  "~{CE}": "30",
  "A10": "31",
  "~{OE}": "32",
  "DQ6": "33",
  "NC_34": "34",
  "NC_35": "35",
  "NC_37": "37",
  "NC_38": "38",
  "NC_39": "39",
  "A11": "40",
  "NC_41": "41",
  "A9": "42",
  "A8": "43",
  "A13": "44",
  "~{WE}": "45",
  "~{HSB}": "46",
  "NC_47": "47",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS_13: "power_in", VCC_25: "power_in", VSS_36: "passive", VCC_48: "passive", VCAP: "power_in", NC_2: "no_connect", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", NC_8: "no_connect", A4: "input", NC_10: "no_connect", NC_11: "no_connect", NC_12: "no_connect", NC_14: "no_connect", NC_15: "no_connect", DQ0: "tri_state", A3: "input", A2: "input", A1: "input", A0: "input", DQ1: "tri_state", DQ2: "tri_state", NC_23: "no_connect", NC_24: "no_connect", DQ3: "tri_state", DQ4: "tri_state", DQ5: "tri_state", DQ7: "tri_state", "~{CE}": "input", A10: "input", "~{OE}": "input", DQ6: "tri_state", NC_34: "no_connect", NC_35: "no_connect", NC_37: "no_connect", NC_38: "no_connect", NC_39: "no_connect", A11: "input", NC_41: "no_connect", A9: "input", A8: "input", A13: "input", "~{WE}": "input", "~{HSB}": "bidirectional", NC_47: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:CY14B256LA-SP";
  override referencePrefix = "U";
}

/**
 * 256-Kbit (32K x 8-bit) AutoStore nvSRAM, single 5V +/-10% operation, 20/25/35/45ns, DIP-32/SOIC-32/LCC-32
 *
 * KiCad symbol: `Memory_NVRAM:STK14C88`. Reference prefix: `U`.
 * Footprint filters: *DIP*W15.*, *DIP*W7.*, *SO*7.*20.*P1.27mm*, *LCC*11.*14.*P1.27mm*.
 * @see https://www.farnell.com/datasheets/5333.pdf
 * Keywords: EEPROM SRAM Static MEMORY CMOS 256Kbit Nonvolatile Non-Volatile Obsolete.
 */
export class STK14C88 extends Component.withPins({
  "VSS": "16",
  "VCC": "32",
  "VCAP": "1",
  "A14": "2",
  "A12": "3",
  "A7": "4",
  "A6": "5",
  "A5": "6",
  "A4": "7",
  "A3": "8",
  "NC_9": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "DQ0": "13",
  "DQ1": "14",
  "DQ2": "15",
  "DQ3": "17",
  "DQ4": "18",
  "DQ5": "19",
  "DQ6": "20",
  "DQ7": "21",
  "~{E}/~{CE}": "22",
  "A10": "23",
  "NC_24": "24",
  "~{G}/~{OE}": "25",
  "A11": "26",
  "A9": "27",
  "A8": "28",
  "A13": "29",
  "~{W}/~{WE}": "30",
  "~{HSB}": "31",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", VCC: "power_in", VCAP: "power_in", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", NC_9: "no_connect", A2: "input", A1: "input", A0: "input", DQ0: "tri_state", DQ1: "tri_state", DQ2: "tri_state", DQ3: "tri_state", DQ4: "tri_state", DQ5: "tri_state", DQ6: "tri_state", DQ7: "tri_state", "~{E}/~{CE}": "input", A10: "input", NC_24: "no_connect", "~{G}/~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{W}/~{WE}": "input", "~{HSB}": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:STK14C88";
  override referencePrefix = "U";
}

/**
 * 256-Kbit (32K x 8-bit) nvSRAM, single 5V +/-10% operation, 25/45ns, SOIC-32
 *
 * KiCad symbol: `Memory_NVRAM:CY14E256LA-SZ`. Reference prefix: `U`.
 * Footprint filters: *SOIC*7.*20.*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-CY14E256LA_256-Kbit_(32_K_8)_nvSRAM-DataSheet-v12_00-EN.pdf?fileId=8ac78c8c7d0d8da4017d0ebf920b33f5
 * Keywords: SRAM Static MEMORY 256Kbit Nonvolatile Non-Volatile Obsolete.
 * Default footprint: Package_SO:SOIC-32_7.518x20.777mm_P1.27mm.
 */
export class CY14E256LA_SZ extends Component.withPins({
  "VSS": "16",
  "VCC": "32",
  "VCAP": "1",
  "A14": "2",
  "A12": "3",
  "A7": "4",
  "A6": "5",
  "A5": "6",
  "A4": "7",
  "A3": "8",
  "NC_9": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "DQ0": "13",
  "DQ1": "14",
  "DQ2": "15",
  "DQ3": "17",
  "DQ4": "18",
  "DQ5": "19",
  "DQ6": "20",
  "DQ7": "21",
  "~{E}/~{CE}": "22",
  "A10": "23",
  "NC_24": "24",
  "~{G}/~{OE}": "25",
  "A11": "26",
  "A9": "27",
  "A8": "28",
  "A13": "29",
  "~{W}/~{WE}": "30",
  "~{HSB}": "31",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", VCC: "power_in", VCAP: "power_in", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", NC_9: "no_connect", A2: "input", A1: "input", A0: "input", DQ0: "tri_state", DQ1: "tri_state", DQ2: "tri_state", DQ3: "tri_state", DQ4: "tri_state", DQ5: "tri_state", DQ6: "tri_state", DQ7: "tri_state", "~{E}/~{CE}": "input", A10: "input", NC_24: "no_connect", "~{G}/~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{W}/~{WE}": "input", "~{HSB}": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:CY14E256LA-SZ";
  override referencePrefix = "U";
}

/**
 * 256-Kbit (32K x 8-bit) nvSRAM, single 3V +20% to –10% operation, 25/45ns, SOIC-32
 *
 * KiCad symbol: `Memory_NVRAM:CY14B256LA-SZ`. Reference prefix: `U`.
 * Footprint filters: *SOIC*7.*20.*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-CY14B256LA_256-Kbit_(32_K_8)_nvSRAM-DataSheet-v13_00-EN.pdf?fileId=8ac78c8c7d0d8da4017d0ebd9bf63054
 * Keywords: SRAM Static MEMORY 256Kbit Nonvolatile Non-Volatile Obsolete.
 * Default footprint: Package_SO:SOIC-32_7.518x20.777mm_P1.27mm.
 */
export class CY14B256LA_SZ extends Component.withPins({
  "VSS": "16",
  "VCC": "32",
  "VCAP": "1",
  "A14": "2",
  "A12": "3",
  "A7": "4",
  "A6": "5",
  "A5": "6",
  "A4": "7",
  "A3": "8",
  "NC_9": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "DQ0": "13",
  "DQ1": "14",
  "DQ2": "15",
  "DQ3": "17",
  "DQ4": "18",
  "DQ5": "19",
  "DQ6": "20",
  "DQ7": "21",
  "~{E}/~{CE}": "22",
  "A10": "23",
  "NC_24": "24",
  "~{G}/~{OE}": "25",
  "A11": "26",
  "A9": "27",
  "A8": "28",
  "A13": "29",
  "~{W}/~{WE}": "30",
  "~{HSB}": "31",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", VCC: "power_in", VCAP: "power_in", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", NC_9: "no_connect", A2: "input", A1: "input", A0: "input", DQ0: "tri_state", DQ1: "tri_state", DQ2: "tri_state", DQ3: "tri_state", DQ4: "tri_state", DQ5: "tri_state", DQ6: "tri_state", DQ7: "tri_state", "~{E}/~{CE}": "input", A10: "input", NC_24: "no_connect", "~{G}/~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{W}/~{WE}": "input", "~{HSB}": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:CY14B256LA-SZ";
  override referencePrefix = "U";
}

/**
 * 256-Kbit (32K x 8-bit) nvSRAM, single 5V +/-10% operation, 25/45ns, TSOP-II-44
 *
 * KiCad symbol: `Memory_NVRAM:CY14E256LA-ZS`. Reference prefix: `U`.
 * Footprint filters: *TSOP?I*10.1*18*P0.8mm*.
 * @see https://www.infineon.com/dgdl/Infineon-CY14E256LA_256-Kbit_(32_K_8)_nvSRAM-DataSheet-v12_00-EN.pdf?fileId=8ac78c8c7d0d8da4017d0ebf920b33f5
 * Keywords: SRAM Static MEMORY 256Kbit Nonvolatile Non-Volatile Obsolete.
 * Default footprint: Package_SO:TSOP-II-44_10.16x18.41mm_P0.8mm.
 */
export class CY14E256LA_ZS extends Component.withPins({
  "VCC_11": "11",
  "VSS_12": "12",
  "VCC_33": "33",
  "VSS_34": "34",
  "NC_1": "1",
  "NC_2": "2",
  "A0": "3",
  "A1": "4",
  "A2": "5",
  "A3": "6",
  "A4": "7",
  "~{CE}": "8",
  "DQ0": "9",
  "DQ1": "10",
  "DQ2": "13",
  "DQ3": "14",
  "~{WE}": "15",
  "A5": "16",
  "A6": "17",
  "A7": "18",
  "A8": "19",
  "A9": "20",
  "NC_21": "21",
  "NC_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "A10": "25",
  "A11": "26",
  "A12": "27",
  "A13": "28",
  "A14": "29",
  "VCAP": "30",
  "DQ4": "31",
  "DQ5": "32",
  "DQ6": "35",
  "DQ7": "36",
  "~{OE}": "37",
  "NC_38": "38",
  "NC_39": "39",
  "NC_40": "40",
  "NC_41": "41",
  "NC_42": "42",
  "NC_43": "43",
  "~{HSB}": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC_11: "power_in", VSS_12: "power_in", VCC_33: "passive", VSS_34: "passive", NC_1: "no_connect", NC_2: "no_connect", A0: "input", A1: "input", A2: "input", A3: "input", A4: "input", "~{CE}": "input", DQ0: "tri_state", DQ1: "tri_state", DQ2: "tri_state", DQ3: "tri_state", "~{WE}": "input", A5: "input", A6: "input", A7: "input", A8: "input", A9: "input", NC_21: "no_connect", NC_22: "no_connect", NC_23: "no_connect", NC_24: "no_connect", A10: "input", A11: "input", A12: "input", A13: "input", A14: "input", VCAP: "power_in", DQ4: "tri_state", DQ5: "tri_state", DQ6: "tri_state", DQ7: "tri_state", "~{OE}": "input", NC_38: "no_connect", NC_39: "no_connect", NC_40: "no_connect", NC_41: "no_connect", NC_42: "no_connect", NC_43: "no_connect", "~{HSB}": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:CY14E256LA-ZS";
  override referencePrefix = "U";
}

/**
 * 256-Kbit (32K x 8-bit) nvSRAM, single 3V +20% to –10% operation, 25/45ns, TSOP-II-44
 *
 * KiCad symbol: `Memory_NVRAM:CY14B256LA-ZS`. Reference prefix: `U`.
 * Footprint filters: *TSOP?I*10.1*18*P0.8mm*.
 * @see https://www.infineon.com/dgdl/Infineon-CY14B256LA_256-Kbit_(32_K_8)_nvSRAM-DataSheet-v13_00-EN.pdf?fileId=8ac78c8c7d0d8da4017d0ebd9bf63054
 * Keywords: SRAM Static MEMORY 256Kbit Nonvolatile Non-Volatile.
 * Default footprint: Package_SO:TSOP-II-44_10.16x18.41mm_P0.8mm.
 */
export class CY14B256LA_ZS extends Component.withPins({
  "VCC_11": "11",
  "VSS_12": "12",
  "VCC_33": "33",
  "VSS_34": "34",
  "NC_1": "1",
  "NC_2": "2",
  "A0": "3",
  "A1": "4",
  "A2": "5",
  "A3": "6",
  "A4": "7",
  "~{CE}": "8",
  "DQ0": "9",
  "DQ1": "10",
  "DQ2": "13",
  "DQ3": "14",
  "~{WE}": "15",
  "A5": "16",
  "A6": "17",
  "A7": "18",
  "A8": "19",
  "A9": "20",
  "NC_21": "21",
  "NC_22": "22",
  "NC_23": "23",
  "NC_24": "24",
  "A10": "25",
  "A11": "26",
  "A12": "27",
  "A13": "28",
  "A14": "29",
  "VCAP": "30",
  "DQ4": "31",
  "DQ5": "32",
  "DQ6": "35",
  "DQ7": "36",
  "~{OE}": "37",
  "NC_38": "38",
  "NC_39": "39",
  "NC_40": "40",
  "NC_41": "41",
  "NC_42": "42",
  "NC_43": "43",
  "~{HSB}": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC_11: "power_in", VSS_12: "power_in", VCC_33: "passive", VSS_34: "passive", NC_1: "no_connect", NC_2: "no_connect", A0: "input", A1: "input", A2: "input", A3: "input", A4: "input", "~{CE}": "input", DQ0: "tri_state", DQ1: "tri_state", DQ2: "tri_state", DQ3: "tri_state", "~{WE}": "input", A5: "input", A6: "input", A7: "input", A8: "input", A9: "input", NC_21: "no_connect", NC_22: "no_connect", NC_23: "no_connect", NC_24: "no_connect", A10: "input", A11: "input", A12: "input", A13: "input", A14: "input", VCAP: "power_in", DQ4: "tri_state", DQ5: "tri_state", DQ6: "tri_state", DQ7: "tri_state", "~{OE}": "input", NC_38: "no_connect", NC_39: "no_connect", NC_40: "no_connect", NC_41: "no_connect", NC_42: "no_connect", NC_43: "no_connect", "~{HSB}": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:CY14B256LA-ZS";
  override referencePrefix = "U";
}

/**
 * 256-Kbit (32K x 8-bit) nvSRAM, core VCC = 2.7V to 3.6V, I/O VCCQ = 1.65V to 1.95V, 35ns, TFBGA-48
 *
 * KiCad symbol: `Memory_NVRAM:CY14U256LA-BA`. Reference prefix: `U`.
 * Footprint filters: *BGA*6*10mm*Layout6x8*P0.75mm*.
 * @see https://www.infineon.com/dgdl/Infineon-CY14U256LA_256-Kbit_(32_K_8)_nvSRAM-DataSheet-v03_00-EN.pdf?fileId=8ac78c8c7d0d8da4017d0ec0a9c33546
 * Keywords: SRAM Static MEMORY 256Kbit Nonvolatile Non-Volatile.
 * Default footprint: Package_BGA:Infineon_TFBGA-48_6x10mm_Layout6x8_P0.75mm.
 */
export class CY14U256LA_BA extends Component.withPins({
  "VCC_A6": "A6",
  "VCC_C2": "C2",
  "VSS_D1": "D1",
  "VSS_E4": "E4",
  "NC_A1": "A1",
  "~{OE}": "A2",
  "A0": "A3",
  "A1": "A4",
  "A2": "A5",
  "NC_B1": "B1",
  "NC_B2": "B2",
  "A3": "B3",
  "A4": "B4",
  "~{CE}": "B5",
  "NC_B6": "B6",
  "DQ0": "C1",
  "A5": "C3",
  "A6": "C4",
  "NC_C5": "C5",
  "DQ4": "C6",
  "DQ1": "D2",
  "NC_D3": "D3",
  "A7": "D4",
  "DQ5": "D5",
  "VCCQ_D6": "D6",
  "VCCQ_E1": "E1",
  "DQ2": "E2",
  "VCAP": "E3",
  "DQ6": "E5",
  "VSS_E6": "E6",
  "DQ3": "F1",
  "NC_F2": "F2",
  "A14": "F3",
  "VSS_F4": "F4",
  "NC_F5": "F5",
  "DQ7": "F6",
  "NC_G1": "G1",
  "~{HSB}": "G2",
  "A12": "G3",
  "A13": "G4",
  "~{WE}": "G5",
  "NC_G6": "G6",
  "NC_H1": "H1",
  "A8": "H2",
  "A9": "H3",
  "A10": "H4",
  "A11": "H5",
  "NC_H6": "H6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC_A6: "power_in", VCC_C2: "passive", VSS_D1: "power_in", VSS_E4: "passive", NC_A1: "no_connect", "~{OE}": "input", A0: "input", A1: "input", A2: "input", NC_B1: "no_connect", NC_B2: "no_connect", A3: "input", A4: "input", "~{CE}": "input", NC_B6: "no_connect", DQ0: "tri_state", A5: "input", A6: "input", NC_C5: "no_connect", DQ4: "tri_state", DQ1: "tri_state", NC_D3: "no_connect", A7: "input", DQ5: "tri_state", VCCQ_D6: "power_in", VCCQ_E1: "passive", DQ2: "tri_state", VCAP: "power_in", DQ6: "tri_state", VSS_E6: "passive", DQ3: "tri_state", NC_F2: "no_connect", A14: "input", VSS_F4: "passive", NC_F5: "no_connect", DQ7: "tri_state", NC_G1: "no_connect", "~{HSB}": "bidirectional", A12: "input", A13: "input", "~{WE}": "input", NC_G6: "no_connect", NC_H1: "no_connect", A8: "input", A9: "input", A10: "input", A11: "input", NC_H6: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:CY14U256LA-BA";
  override referencePrefix = "U";
}

/**
 * 256-Kbit (32K x 8-bit) nvSRAM, core VCC = 3.0V to 3.6V, I/O VCCQ = 1.65V to 1.95V, 35ns, TFBGA-48
 *
 * KiCad symbol: `Memory_NVRAM:CY14V256LA-BA`. Reference prefix: `U`.
 * Footprint filters: *BGA*6*10mm*Layout6x8*P0.75mm*.
 * @see https://www.infineon.com/dgdl/Infineon-CY14V256LA_256-Kbit_(32_K_x_8)_nvSRAM-DataSheet-v06_00-EN.pdf?fileId=8ac78c8c7d0d8da4017d0ec03c9034c2
 * Keywords: SRAM Static MEMORY 256Kbit Nonvolatile Non-Volatile.
 * Default footprint: Package_BGA:Infineon_TFBGA-48_6x10mm_Layout6x8_P0.75mm.
 */
export class CY14V256LA_BA extends Component.withPins({
  "VCC_A6": "A6",
  "VCC_C2": "C2",
  "VSS_D1": "D1",
  "VSS_E4": "E4",
  "NC_A1": "A1",
  "~{OE}": "A2",
  "A0": "A3",
  "A1": "A4",
  "A2": "A5",
  "NC_B1": "B1",
  "NC_B2": "B2",
  "A3": "B3",
  "A4": "B4",
  "~{CE}": "B5",
  "NC_B6": "B6",
  "DQ0": "C1",
  "A5": "C3",
  "A6": "C4",
  "NC_C5": "C5",
  "DQ4": "C6",
  "DQ1": "D2",
  "NC_D3": "D3",
  "A7": "D4",
  "DQ5": "D5",
  "VCCQ_D6": "D6",
  "VCCQ_E1": "E1",
  "DQ2": "E2",
  "VCAP": "E3",
  "DQ6": "E5",
  "VSS_E6": "E6",
  "DQ3": "F1",
  "NC_F2": "F2",
  "A14": "F3",
  "VSS_F4": "F4",
  "NC_F5": "F5",
  "DQ7": "F6",
  "NC_G1": "G1",
  "~{HSB}": "G2",
  "A12": "G3",
  "A13": "G4",
  "~{WE}": "G5",
  "NC_G6": "G6",
  "NC_H1": "H1",
  "A8": "H2",
  "A9": "H3",
  "A10": "H4",
  "A11": "H5",
  "NC_H6": "H6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC_A6: "power_in", VCC_C2: "passive", VSS_D1: "power_in", VSS_E4: "passive", NC_A1: "no_connect", "~{OE}": "input", A0: "input", A1: "input", A2: "input", NC_B1: "no_connect", NC_B2: "no_connect", A3: "input", A4: "input", "~{CE}": "input", NC_B6: "no_connect", DQ0: "tri_state", A5: "input", A6: "input", NC_C5: "no_connect", DQ4: "tri_state", DQ1: "tri_state", NC_D3: "no_connect", A7: "input", DQ5: "tri_state", VCCQ_D6: "power_in", VCCQ_E1: "passive", DQ2: "tri_state", VCAP: "power_in", DQ6: "tri_state", VSS_E6: "passive", DQ3: "tri_state", NC_F2: "no_connect", A14: "input", VSS_F4: "passive", NC_F5: "no_connect", DQ7: "tri_state", NC_G1: "no_connect", "~{HSB}": "bidirectional", A12: "input", A13: "input", "~{WE}": "input", NC_G6: "no_connect", NC_H1: "no_connect", A8: "input", A9: "input", A10: "input", A11: "input", NC_H6: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:CY14V256LA-BA";
  override referencePrefix = "U";
}

/**
 * 64Kb FRAM nonvolatile memory, SOIC-28
 *
 * KiCad symbol: `Memory_NVRAM:FM16W08-SG`. Reference prefix: `U`.
 * Footprint filters: SOIC?28*7.5x17.9mm*P1.27mm*.
 * @see http://www.cypress.com/file/41731/download
 * Keywords: FRAM 5V Parallel.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class FM16W08_SG extends Component.withPins({
  "A12": "2",
  "A7": "3",
  "A6": "4",
  "A5": "5",
  "A4": "6",
  "A3": "7",
  "A2": "8",
  "A1": "9",
  "A0": "10",
  "DQ0": "11",
  "DQ1": "12",
  "DQ2": "13",
  "VSS": "14",
  "DQ3": "15",
  "DQ4": "16",
  "DQ5": "17",
  "DQ6": "18",
  "DQ7": "19",
  "~{CE}": "20",
  "A10": "21",
  "~{OE}": "22",
  "A11": "23",
  "A9": "24",
  "A8": "25",
  "~{WE}": "27",
  "VDD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", DQ0: "bidirectional", DQ1: "bidirectional", DQ2: "bidirectional", VSS: "power_in", DQ3: "bidirectional", DQ4: "bidirectional", DQ5: "bidirectional", DQ6: "bidirectional", DQ7: "bidirectional", "~{CE}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", "~{WE}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:FM16W08-SG";
  override referencePrefix = "U";
}

/**
 * 64Kb FRAM nonvolatile memory, SOIC-28
 *
 * KiCad symbol: `Memory_NVRAM:FM1608B-SG`. Reference prefix: `U`.
 * Footprint filters: SOIC?28*7.5x17.9mm*P1.27mm*.
 * @see http://www.cypress.com/file/41731/download
 * Keywords: FRAM 5V Parallel.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class FM1608B_SG extends Component.withPins({
  "A12": "2",
  "A7": "3",
  "A6": "4",
  "A5": "5",
  "A4": "6",
  "A3": "7",
  "A2": "8",
  "A1": "9",
  "A0": "10",
  "DQ0": "11",
  "DQ1": "12",
  "DQ2": "13",
  "VSS": "14",
  "DQ3": "15",
  "DQ4": "16",
  "DQ5": "17",
  "DQ6": "18",
  "DQ7": "19",
  "~{CE}": "20",
  "A10": "21",
  "~{OE}": "22",
  "A11": "23",
  "A9": "24",
  "A8": "25",
  "~{WE}": "27",
  "VDD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", DQ0: "bidirectional", DQ1: "bidirectional", DQ2: "bidirectional", VSS: "power_in", DQ3: "bidirectional", DQ4: "bidirectional", DQ5: "bidirectional", DQ6: "bidirectional", DQ7: "bidirectional", "~{CE}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", "~{WE}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:FM1608B-SG";
  override referencePrefix = "U";
}

/**
 * 256k FRAM nonvolatile memory, SOIC-28
 *
 * KiCad symbol: `Memory_NVRAM:FM18W08-SG`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see http://www.cypress.com/file/136521/download
 * Keywords: FRAM 5V Parallel.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class FM18W08_SG extends Component.withPins({
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
  "DQ0": "11",
  "DQ1": "12",
  "DQ2": "13",
  "VSS": "14",
  "DQ3": "15",
  "DQ4": "16",
  "DQ5": "17",
  "DQ6": "18",
  "DQ7": "19",
  "~{CE}": "20",
  "A10": "21",
  "~{OE}": "22",
  "A11": "23",
  "A9": "24",
  "A8": "25",
  "A13": "26",
  "~{WE}": "27",
  "VDD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", DQ0: "bidirectional", DQ1: "bidirectional", DQ2: "bidirectional", VSS: "power_in", DQ3: "bidirectional", DQ4: "bidirectional", DQ5: "bidirectional", DQ6: "bidirectional", DQ7: "bidirectional", "~{CE}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:FM18W08-SG";
  override referencePrefix = "U";
}

/**
 * 256k FRAM nonvolatile memory, SOIC-28
 *
 * KiCad symbol: `Memory_NVRAM:FM1808B-SG`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x17.9mm*P1.27mm*.
 * @see http://www.cypress.com/file/136521/download
 * Keywords: FRAM 5V Parallel.
 * Default footprint: Package_SO:SOIC-28W_7.5x17.9mm_P1.27mm.
 */
export class FM1808B_SG extends Component.withPins({
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
  "DQ0": "11",
  "DQ1": "12",
  "DQ2": "13",
  "VSS": "14",
  "DQ3": "15",
  "DQ4": "16",
  "DQ5": "17",
  "DQ6": "18",
  "DQ7": "19",
  "~{CE}": "20",
  "A10": "21",
  "~{OE}": "22",
  "A11": "23",
  "A9": "24",
  "A8": "25",
  "A13": "26",
  "~{WE}": "27",
  "VDD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", A2: "input", A1: "input", A0: "input", DQ0: "bidirectional", DQ1: "bidirectional", DQ2: "bidirectional", VSS: "power_in", DQ3: "bidirectional", DQ4: "bidirectional", DQ5: "bidirectional", DQ6: "bidirectional", DQ7: "bidirectional", "~{CE}": "input", A10: "input", "~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{WE}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:FM1808B-SG";
  override referencePrefix = "U";
}

/**
 * 64Kb serial FRAM nonvolatile Memory, SOIC-8
 *
 * KiCad symbol: `Memory_NVRAM:FM24C64B`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.cypress.com/file/41651/download
 * Keywords: FRAM I2C Serial 5V FRAM NVRAM.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class FM24C64B extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VDD": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", VSS: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:FM24C64B";
  override referencePrefix = "U";
}

/**
 * 64Kb serial FRAM nonvolatile Memory, SOIC-8
 *
 * KiCad symbol: `Memory_NVRAM:FM24C64C`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.cypress.com/file/41651/download
 * Keywords: FRAM I2C Serial 5V FRAM NVRAM.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class FM24C64C extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VDD": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", VSS: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:FM24C64C";
  override referencePrefix = "U";
}

/**
 * 16Kb serial FRAM nonvolatile Memory, SOIC-8
 *
 * KiCad symbol: `Memory_NVRAM:FM24CL16B`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/Infineon-FM24CL16B_16-Kbit_(2_K_8)_Serial_(I2C)_F-RAM-DataSheet-v13_00-EN.pdf?fileId=8ac78c8c7d0d8da4017d0ec99cb241e9
 * Keywords: FRAM I2C Serial 3.6V FRAM NVRAM.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class FM24CL16B extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "VSS": "4",
  "SDA": "5",
  "SCL": "6",
  "WP": "7",
  "VDD": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "no_connect", P2: "no_connect", P3: "no_connect", VSS: "power_in", SDA: "bidirectional", SCL: "input", WP: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:FM24CL16B";
  override referencePrefix = "U";
}

/**
 * FRAM memory with SPI interface, SOIC-8 SON-8
 *
 * KiCad symbol: `Memory_NVRAM:MB85RS16`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x5.05mm*P1.27mm*, *SON*2x3mm*P0.50mm*.
 * @see http://www.fujitsu.com/downloads/MICRO/fsa/pdf/products/memory/fram/MB85RS16-DS501-00014-6v0-E.pdf
 * Keywords: FRAM SPI 3.3V.
 */
export class MB85RS16 extends Component.withPins({
  "~{CS}": "1",
  "SO": "2",
  "~{WP}": "3",
  "GND": "4",
  "SI": "5",
  "SCK": "6",
  "~{HOLD}": "7",
  "VDD": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", SO: "output", "~{WP}": "input", GND: "power_in", SI: "input", SCK: "input", "~{HOLD}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:MB85RS16";
  override referencePrefix = "U";
}

/**
 * FRAM memory with SPI interface, SOIC-8 SON-8
 *
 * KiCad symbol: `Memory_NVRAM:MB85RS128B`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x5.05mm*P1.27mm*, *SON*2x3mm*P0.50mm*.
 * @see http://www.fujitsu.com/downloads/MICRO/fsa/pdf/products/memory/fram/MB85RS16-DS501-00014-6v0-E.pdf
 * Keywords: FRAM SPI 3.3V.
 */
export class MB85RS128B extends Component.withPins({
  "~{CS}": "1",
  "SO": "2",
  "~{WP}": "3",
  "GND": "4",
  "SI": "5",
  "SCK": "6",
  "~{HOLD}": "7",
  "VDD": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", SO: "output", "~{WP}": "input", GND: "power_in", SI: "input", SCK: "input", "~{HOLD}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:MB85RS128B";
  override referencePrefix = "U";
}

/**
 * FRAM memory with SPI interface, SOIC-8 SON-8
 *
 * KiCad symbol: `Memory_NVRAM:MB85RS1MT`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x5.05mm*P1.27mm*, *SON*2x3mm*P0.50mm*.
 * @see http://www.fujitsu.com/downloads/MICRO/fsa/pdf/products/memory/fram/MB85RS16-DS501-00014-6v0-E.pdf
 * Keywords: FRAM SPI 3.3V.
 */
export class MB85RS1MT extends Component.withPins({
  "~{CS}": "1",
  "SO": "2",
  "~{WP}": "3",
  "GND": "4",
  "SI": "5",
  "SCK": "6",
  "~{HOLD}": "7",
  "VDD": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", SO: "output", "~{WP}": "input", GND: "power_in", SI: "input", SCK: "input", "~{HOLD}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:MB85RS1MT";
  override referencePrefix = "U";
}

/**
 * FRAM memory with SPI interface, SOIC-8 SON-8
 *
 * KiCad symbol: `Memory_NVRAM:MB85RS256B`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x5.05mm*P1.27mm*, *SON*2x3mm*P0.50mm*.
 * @see http://www.fujitsu.com/downloads/MICRO/fsa/pdf/products/memory/fram/MB85RS16-DS501-00014-6v0-E.pdf
 * Keywords: FRAM SPI 3.3V.
 */
export class MB85RS256B extends Component.withPins({
  "~{CS}": "1",
  "SO": "2",
  "~{WP}": "3",
  "GND": "4",
  "SI": "5",
  "SCK": "6",
  "~{HOLD}": "7",
  "VDD": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", SO: "output", "~{WP}": "input", GND: "power_in", SI: "input", SCK: "input", "~{HOLD}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:MB85RS256B";
  override referencePrefix = "U";
}

/**
 * FeRAM memory with SPI interface, 2Mbit (256K x 8), 1.8V to 3.6V supply, DIP-8 / SOIC-8 (SOP-8, 208 mil)
 *
 * KiCad symbol: `Memory_NVRAM:MB85RS2MT`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x5.3mm*P1.27mm*, DIP?8?W7.62mm*.
 * @see https://www.mouser.com/datasheet/2/1113/MB85RS2MT_DS501_00023_5v0_E-2515390.pdf
 * Keywords: FRAM Ferroelectric-RAM 3.3V 2-Mbit MB85RS2MTPH MB85RS2MTPF Fujitsu Obsolete.
 */
export class MB85RS2MT extends Component.withPins({
  "~{CS}": "1",
  "SO": "2",
  "~{WP}": "3",
  "GND": "4",
  "SI": "5",
  "SCK": "6",
  "~{HOLD}": "7",
  "VDD": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", SO: "output", "~{WP}": "input", GND: "power_in", SI: "input", SCK: "input", "~{HOLD}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:MB85RS2MT";
  override referencePrefix = "U";
}

/**
 * FeRAM memory with SPI interface, 2Mbit (256K x 8), 1.7V to 3.6V supply, SOIC-8 (SOP-8, 150 mil)
 *
 * KiCad symbol: `Memory_NVRAM:MB85RS2MTAPNF`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9x4.9*P1.27mm*.
 * @see https://www.mouser.com/datasheet/2/1113/MB85RS2MTA_DS6v0_E-3538530.pdf
 * Keywords: FRAM Ferroelectric-RAM 3.3V 2-Mbit RAMXEED.
 * Default footprint: Package_SO:SOP-8_3.9x4.9mm_P1.27mm.
 */
export class MB85RS2MTAPNF extends Component.withPins({
  "~{CS}": "1",
  "SO": "2",
  "~{WP}": "3",
  "GND": "4",
  "SI": "5",
  "SCK": "6",
  "~{HOLD}": "7",
  "VDD": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", SO: "output", "~{WP}": "input", GND: "power_in", SI: "input", SCK: "input", "~{HOLD}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:MB85RS2MTAPNF";
  override referencePrefix = "U";
}

/**
 * FRAM memory with SPI interface, SOIC-8 SON-8
 *
 * KiCad symbol: `Memory_NVRAM:MB85RS512T`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x5.05mm*P1.27mm*, *SON*2x3mm*P0.50mm*.
 * @see http://www.fujitsu.com/downloads/MICRO/fsa/pdf/products/memory/fram/MB85RS16-DS501-00014-6v0-E.pdf
 * Keywords: FRAM SPI 3.3V.
 */
export class MB85RS512T extends Component.withPins({
  "~{CS}": "1",
  "SO": "2",
  "~{WP}": "3",
  "GND": "4",
  "SI": "5",
  "SCK": "6",
  "~{HOLD}": "7",
  "VDD": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", SO: "output", "~{WP}": "input", GND: "power_in", SI: "input", SCK: "input", "~{HOLD}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:MB85RS512T";
  override referencePrefix = "U";
}

/**
 * FRAM memory with SPI interface, SOIC-8 SON-8
 *
 * KiCad symbol: `Memory_NVRAM:MB85RS64`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x5.05mm*P1.27mm*, *SON*2x3mm*P0.50mm*.
 * @see http://www.fujitsu.com/downloads/MICRO/fme/fram/datasheet-MB85RS64.pdf
 * Keywords: FRAM SPI 3.3V.
 */
export class MB85RS64 extends Component.withPins({
  "~{CS}": "1",
  "SO": "2",
  "~{WP}": "3",
  "GND": "4",
  "SI": "5",
  "SCK": "6",
  "~{HOLD}": "7",
  "VDD": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", SO: "output", "~{WP}": "input", GND: "power_in", SI: "input", SCK: "input", "~{HOLD}": "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:MB85RS64";
  override referencePrefix = "U";
}

/**
 * 4Mb MRAM memory with SPI interface, DFN-8
 *
 * KiCad symbol: `Memory_NVRAM:MR20H40`. Reference prefix: `U`.
 * Footprint filters: DFN*6x5mm*P1.27mm*.
 * @see https://www.everspin.com/file/217/download
 * Keywords: MRAM SPI EEPROM 3.3V.
 */
export class MR20H40 extends Component.withPins({
  "~{CS}": "1",
  "SO": "2",
  "~{WP}": "3",
  "VSS": "4",
  "SI": "5",
  "SCK": "6",
  "~{HOLD}": "7",
  "VDD": "8",
  "PAD": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", SO: "output", "~{WP}": "input", VSS: "power_in", SI: "input", SCK: "input", "~{HOLD}": "input", VDD: "power_in", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:MR20H40";
  override referencePrefix = "U";
}

/**
 * 4Mb MRAM memory with SPI interface, DFN-8
 *
 * KiCad symbol: `Memory_NVRAM:MR25H40`. Reference prefix: `U`.
 * Footprint filters: DFN*6x5mm*P1.27mm*.
 * @see https://www.everspin.com/file/217/download
 * Keywords: MRAM SPI EEPROM 3.3V.
 */
export class MR25H40 extends Component.withPins({
  "~{CS}": "1",
  "SO": "2",
  "~{WP}": "3",
  "VSS": "4",
  "SI": "5",
  "SCK": "6",
  "~{HOLD}": "7",
  "VDD": "8",
  "PAD": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CS}": "input", SO: "output", "~{WP}": "input", VSS: "power_in", SI: "input", SCK: "input", "~{HOLD}": "input", VDD: "power_in", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:MR25H40";
  override referencePrefix = "U";
}

/**
 * 256-Kbit (32K x 8-bit) AutoStore nvSRAM, single 3.3V +/-0.3V operation, 35/45ns, DIP-32/SOIC-32
 *
 * KiCad symbol: `Memory_NVRAM:STK14C88-3`. Reference prefix: `U`.
 * Footprint filters: *DIP*W15.*, *SO*7.*20.*P1.27mm*.
 * @see https://www.mouser.com/ds/2/100/STK14C88-3_001-50592-356490.pdf
 * Keywords: EEPROM SRAM Static MEMORY CMOS 256Kbit Nonvolatile Non-Volatile Obsolete.
 */
export class STK14C88_3 extends Component.withPins({
  "VSS": "16",
  "VCC": "32",
  "VCAP": "1",
  "A14": "2",
  "A12": "3",
  "A7": "4",
  "A6": "5",
  "A5": "6",
  "A4": "7",
  "A3": "8",
  "NC_9": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "DQ0": "13",
  "DQ1": "14",
  "DQ2": "15",
  "DQ3": "17",
  "DQ4": "18",
  "DQ5": "19",
  "DQ6": "20",
  "DQ7": "21",
  "~{E}/~{CE}": "22",
  "A10": "23",
  "NC_24": "24",
  "~{G}/~{OE}": "25",
  "A11": "26",
  "A9": "27",
  "A8": "28",
  "A13": "29",
  "~{W}/~{WE}": "30",
  "~{HSB}": "31",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", VCC: "power_in", VCAP: "power_in", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", NC_9: "no_connect", A2: "input", A1: "input", A0: "input", DQ0: "tri_state", DQ1: "tri_state", DQ2: "tri_state", DQ3: "tri_state", DQ4: "tri_state", DQ5: "tri_state", DQ6: "tri_state", DQ7: "tri_state", "~{E}/~{CE}": "input", A10: "input", NC_24: "no_connect", "~{G}/~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{W}/~{WE}": "input", "~{HSB}": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:STK14C88-3";
  override referencePrefix = "U";
}

/**
 * 256-Kbit (32K x 8-bit) nvSRAM, single 5V +/-10% operation, 35ns, DIP-32
 *
 * KiCad symbol: `Memory_NVRAM:STK14C88C`. Reference prefix: `U`.
 * Footprint filters: *DIP*W7.*.
 * @see https://www.infineon.com/dgdl/Infineon-STK14C88C_256-Kbit_(32K_x_8)_nvSRAM-DataSheet-v02_00-EN.pdf?fileId=8ac78c8c7d0d8da4017d0ee81f447111
 * Keywords: EEPROM SRAM Static MEMORY CMOS 256Kbit Nonvolatile Non-Volatile Obsolete.
 * Default footprint: Package_DIP:DIP-32_W7.62mm.
 */
export class STK14C88C extends Component.withPins({
  "VSS": "16",
  "VCC": "32",
  "VCAP": "1",
  "A14": "2",
  "A12": "3",
  "A7": "4",
  "A6": "5",
  "A5": "6",
  "A4": "7",
  "A3": "8",
  "NC_9": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "DQ0": "13",
  "DQ1": "14",
  "DQ2": "15",
  "DQ3": "17",
  "DQ4": "18",
  "DQ5": "19",
  "DQ6": "20",
  "DQ7": "21",
  "~{E}/~{CE}": "22",
  "A10": "23",
  "NC_24": "24",
  "~{G}/~{OE}": "25",
  "A11": "26",
  "A9": "27",
  "A8": "28",
  "A13": "29",
  "~{W}/~{WE}": "30",
  "~{HSB}": "31",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", VCC: "power_in", VCAP: "power_in", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", NC_9: "no_connect", A2: "input", A1: "input", A0: "input", DQ0: "tri_state", DQ1: "tri_state", DQ2: "tri_state", DQ3: "tri_state", DQ4: "tri_state", DQ5: "tri_state", DQ6: "tri_state", DQ7: "tri_state", "~{E}/~{CE}": "input", A10: "input", NC_24: "no_connect", "~{G}/~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{W}/~{WE}": "input", "~{HSB}": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:STK14C88C";
  override referencePrefix = "U";
}

/**
 * 256-Kbit (32K x 8-bit) nvSRAM, single 3.0V +20%/-10% (industrial) / single 3.3V +/-0.3V (military), 35ns, DIP-32
 *
 * KiCad symbol: `Memory_NVRAM:STK14C88C-3`. Reference prefix: `U`.
 * Footprint filters: *DIP*W7.*.
 * @see https://www.infineon.com/dgdl/Infineon-STK14C88C-35C35M-DataSheet-v02_00-EN.pdf?fileId=8ac78c8c7d0d8da4017d0ee829987116
 * Keywords: SRAM Static MEMORY CMOS 256Kbit Nonvolatile Non-Volatile Obsolete.
 * Default footprint: Package_DIP:DIP-32_W7.62mm.
 */
export class STK14C88C_3 extends Component.withPins({
  "VSS": "16",
  "VCC": "32",
  "VCAP": "1",
  "A14": "2",
  "A12": "3",
  "A7": "4",
  "A6": "5",
  "A5": "6",
  "A4": "7",
  "A3": "8",
  "NC_9": "9",
  "A2": "10",
  "A1": "11",
  "A0": "12",
  "DQ0": "13",
  "DQ1": "14",
  "DQ2": "15",
  "DQ3": "17",
  "DQ4": "18",
  "DQ5": "19",
  "DQ6": "20",
  "DQ7": "21",
  "~{E}/~{CE}": "22",
  "A10": "23",
  "NC_24": "24",
  "~{G}/~{OE}": "25",
  "A11": "26",
  "A9": "27",
  "A8": "28",
  "A13": "29",
  "~{W}/~{WE}": "30",
  "~{HSB}": "31",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", VCC: "power_in", VCAP: "power_in", A14: "input", A12: "input", A7: "input", A6: "input", A5: "input", A4: "input", A3: "input", NC_9: "no_connect", A2: "input", A1: "input", A0: "input", DQ0: "tri_state", DQ1: "tri_state", DQ2: "tri_state", DQ3: "tri_state", DQ4: "tri_state", DQ5: "tri_state", DQ6: "tri_state", DQ7: "tri_state", "~{E}/~{CE}": "input", A10: "input", NC_24: "no_connect", "~{G}/~{OE}": "input", A11: "input", A9: "input", A8: "input", A13: "input", "~{W}/~{WE}": "input", "~{HSB}": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Memory_NVRAM:STK14C88C-3";
  override referencePrefix = "U";
}
