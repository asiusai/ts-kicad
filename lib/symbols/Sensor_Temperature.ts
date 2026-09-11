// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Precision Thermocouple Amplifiers with Cold Junction Compensation, J-Type Thermocouple, 0 to 50C, MSOP-8
 *
 * KiCad symbol: `Sensor_Temperature:AD8494`. Reference prefix: `U`.
 * Footprint filters: MSOP*8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad8494_8495_8496_8497.pdf
 * Keywords: Thermocouple Amp.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class AD8494 extends Component.withPins({
  "-IN": "1",
  "REF": "2",
  "-Vs": "3",
  "NC": "4",
  "SENSE": "5",
  "P6": "6",
  "+Vs": "7",
  "+IN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-IN": "input", REF: "input", "-Vs": "power_in", NC: "no_connect", SENSE: "passive", P6: "output", "+Vs": "power_in", "+IN": "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:AD8494";
  override referencePrefix = "U";
}

/**
 * Precision Thermocouple Amplifiers with Cold Junction Compensation, K-Type Thermocouple, 0 to 50C, MSOP-8
 *
 * KiCad symbol: `Sensor_Temperature:AD8495`. Reference prefix: `U`.
 * Footprint filters: MSOP*8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad8494_8495_8496_8497.pdf
 * Keywords: Thermocouple Amp.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class AD8495 extends Component.withPins({
  "-IN": "1",
  "REF": "2",
  "-Vs": "3",
  "NC": "4",
  "SENSE": "5",
  "P6": "6",
  "+Vs": "7",
  "+IN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-IN": "input", REF: "input", "-Vs": "power_in", NC: "no_connect", SENSE: "passive", P6: "output", "+Vs": "power_in", "+IN": "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:AD8495";
  override referencePrefix = "U";
}

/**
 * Precision Thermocouple Amplifiers with Cold Junction Compensation, J-Type Thermocouple, 25 to 100C, MSOP-8
 *
 * KiCad symbol: `Sensor_Temperature:AD8496`. Reference prefix: `U`.
 * Footprint filters: MSOP*8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad8494_8495_8496_8497.pdf
 * Keywords: Thermocouple Amp.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class AD8496 extends Component.withPins({
  "-IN": "1",
  "REF": "2",
  "-Vs": "3",
  "NC": "4",
  "SENSE": "5",
  "P6": "6",
  "+Vs": "7",
  "+IN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-IN": "input", REF: "input", "-Vs": "power_in", NC: "no_connect", SENSE: "passive", P6: "output", "+Vs": "power_in", "+IN": "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:AD8496";
  override referencePrefix = "U";
}

/**
 * Precision Thermocouple Amplifiers with Cold Junction Compensation, K-Type Thermocouple, 25 to 100C, MSOP-8
 *
 * KiCad symbol: `Sensor_Temperature:AD8497`. Reference prefix: `U`.
 * Footprint filters: MSOP*8*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad8494_8495_8496_8497.pdf
 * Keywords: Thermocouple Amp.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class AD8497 extends Component.withPins({
  "-IN": "1",
  "REF": "2",
  "-Vs": "3",
  "NC": "4",
  "SENSE": "5",
  "P6": "6",
  "+Vs": "7",
  "+IN": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "-IN": "input", REF: "input", "-Vs": "power_in", NC: "no_connect", SENSE: "passive", P6: "output", "+Vs": "power_in", "+IN": "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:AD8497";
  override referencePrefix = "U";
}

/**
 * Analog Output Temperature Sensor
 *
 * KiCad symbol: `Sensor_Temperature:BD1020HFV`. Reference prefix: `U`.
 * Footprint filters: HVSOF5*.
 * @see http://rohmfs.rohm.com/en/products/databook/datasheet/ic/sensor/temperature/bd1020hfv-e.pdf
 * Keywords: Temperature sensor.
 * Default footprint: Package_TO_SOT_SMD:HVSOF5.
 */
export class BD1020HFV extends Component.withPins({
  "NC": "1",
  "PG": "2",
  "OUT": "3",
  "VDD": "4",
  "GND": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", PG: "passive", OUT: "output", VDD: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:BD1020HFV";
  override referencePrefix = "U";
}

/**
 * 1-Wire Digital Thermometer and Thermostat, DIP-8
 *
 * KiCad symbol: `Sensor_Temperature:DS1621`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1621.pdf
 * Keywords: OneWire 1-Wire 1Wire Maxim Dallas.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class DS1621 extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "T_{OUT}": "3",
  "GND": "4",
  "A2": "5",
  "A1": "6",
  "A0": "7",
  "V_{DD}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", "T_{OUT}": "output", GND: "power_in", A2: "input", A1: "input", A0: "input", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:DS1621";
  override referencePrefix = "U";
}

/**
 * 1-Wire Digital Thermometer and Thermostat, SOIC-8 (150 mil)
 *
 * KiCad symbol: `Sensor_Temperature:DS1621S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1621.pdf
 * Keywords: OneWire 1-Wire 1Wire Maxim Dallas.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DS1621S extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "T_{OUT}": "3",
  "GND": "4",
  "A2": "5",
  "A1": "6",
  "A0": "7",
  "V_{DD}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", "T_{OUT}": "output", GND: "power_in", A2: "input", A1: "input", A0: "input", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:DS1621S";
  override referencePrefix = "U";
}

/**
 * 1-Wire Digital Thermometer and Thermostat, SOIC-8 (208 mil)
 *
 * KiCad symbol: `Sensor_Temperature:DS1621V`. Reference prefix: `U`.
 * Footprint filters: *SOIC*5.3x5.3mm*P1.27mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/DS1621.pdf
 * Keywords: OneWire 1-Wire 1Wire Maxim Dallas.
 * Default footprint: Package_SO:SOIC-8_5.3x5.3mm_P1.27mm.
 */
export class DS1621V extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "T_{OUT}": "3",
  "GND": "4",
  "A2": "5",
  "A1": "6",
  "A0": "7",
  "V_{DD}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", "T_{OUT}": "output", GND: "power_in", A2: "input", A1: "input", A0: "input", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:DS1621V";
  override referencePrefix = "U";
}

/**
 * Nonvolatile Trimmer Potentiometer, DIP-8
 *
 * KiCad symbol: `Sensor_Temperature:DS1804`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/DS1804.pdf
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class DS1804 extends Component.withPins({
  "~{INC}": "1",
  "U/~{D}": "2",
  "H": "3",
  "GND": "4",
  "W": "5",
  "L": "6",
  "~{CS}": "7",
  "V_{CC}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{INC}": "input", "U/~{D}": "input", H: "passive", GND: "power_in", W: "passive", L: "passive", "~{CS}": "input", "V_{CC}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:DS1804";
  override referencePrefix = "U";
}

/**
 * 1-Wire Ambient Temperature Sensor TO-92
 *
 * KiCad symbol: `Sensor_Temperature:MAX31820`. Reference prefix: `U`.
 * Footprint filters: TO*92*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX31820.pdf
 * Keywords: OneWire 1-Wire 1Wire Maxim Dallas.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class MAX31820 extends Component.withPins({
  "GND": "1",
  "DQ": "2",
  "V_{DD}": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", DQ: "bidirectional", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MAX31820";
  override referencePrefix = "U";
}

/**
 * Programmable Digital Thermostat and Thermometer TO-92
 *
 * KiCad symbol: `Sensor_Temperature:DS1821C`. Reference prefix: `U`.
 * Footprint filters: TO*92*.
 * @see http://datasheets.maximintegrated.com/en/ds/DS1821.pdf
 * Keywords: OneWire 1Wire Maxim Dallas.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class DS1821C extends Component.withPins({
  "GND": "1",
  "DQ": "2",
  "V_{DD}": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", DQ: "bidirectional", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:DS1821C";
  override referencePrefix = "U";
}

/**
 * Econo 1-Wire Digital Thermometer TO-92
 *
 * KiCad symbol: `Sensor_Temperature:DS1822`. Reference prefix: `U`.
 * Footprint filters: TO*92*.
 * @see http://datasheets.maximintegrated.com/en/ds/DS1822.pdf
 * Keywords: OneWire 1Wire Dallas Maxim.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class DS1822 extends Component.withPins({
  "GND": "1",
  "DQ": "2",
  "V_{DD}": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", DQ: "bidirectional", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:DS1822";
  override referencePrefix = "U";
}

/**
 * 1-Wire, Parasite-Power, Ambient Temperature Sensor TO-92
 *
 * KiCad symbol: `Sensor_Temperature:MAX31820PAR`. Reference prefix: `U`.
 * Footprint filters: TO*92*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX31820PAR.pdf
 * Keywords: OneWire 1-Wire 1Wire Maxim Dallas.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class MAX31820PAR extends Component.withPins({
  "GND": "1",
  "DQ": "2",
  "NC": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", DQ: "bidirectional", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MAX31820PAR";
  override referencePrefix = "U";
}

/**
 * Econo 1-Wire Parasite-Power Digital Thermometer TO-92
 *
 * KiCad symbol: `Sensor_Temperature:DS1822-PAR`. Reference prefix: `U`.
 * Footprint filters: TO*92*.
 * @see http://datasheets.maximintegrated.com/en/ds/DS1822-PAR.pdf
 * Keywords: OneWire 1Wire Maxim Dallas.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class DS1822_PAR extends Component.withPins({
  "GND": "1",
  "DQ": "2",
  "NC": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", DQ: "bidirectional", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:DS1822-PAR";
  override referencePrefix = "U";
}

/**
 * Econo 1-Wire Digital Thermometer SOIC-8
 *
 * KiCad symbol: `Sensor_Temperature:DS1822Z`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/DS1822.pdf
 * Keywords: OneWire 1-Wire 1Wire Maxim Dallas.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DS1822Z extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "V_{DD}": "3",
  "DQ": "4",
  "GND": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", "V_{DD}": "power_in", DQ: "bidirectional", GND: "power_in", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:DS1822Z";
  override referencePrefix = "U";
}

/**
 * 1-Wire Digital Temperature Sensor with 1Kb Lockable EEPROM MSOP-8
 *
 * KiCad symbol: `Sensor_Temperature:MAX31826`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX31826.pdf
 * Keywords: 1Wire OneWire Maxim Dallas.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class MAX31826 extends Component.withPins({
  "V_{DD}": "1",
  "DQ": "2",
  "NC": "3",
  "GND": "4",
  "AD0": "5",
  "AD1": "6",
  "AD2": "7",
  "AD3": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", DQ: "bidirectional", NC: "no_connect", GND: "power_in", AD0: "input", AD1: "input", AD2: "input", AD3: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MAX31826";
  override referencePrefix = "U";
}

/**
 * Programmable Resolution 1-Wire Digital Thermometer With 4-Bit ID MSOP-8
 *
 * KiCad symbol: `Sensor_Temperature:DS1825`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/DS1825.pdf
 * Keywords: 1Wire OneWire Maxim Dallas.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class DS1825 extends Component.withPins({
  "V_{DD}": "1",
  "DQ": "2",
  "NC": "3",
  "GND": "4",
  "AD0": "5",
  "AD1": "6",
  "AD2": "7",
  "AD3": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", DQ: "bidirectional", NC: "no_connect", GND: "power_in", AD0: "input", AD1: "input", AD2: "input", AD3: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:DS1825";
  override referencePrefix = "U";
}

/**
 * Programmable Resolution 1-Wire Digital Thermometer TO-92
 *
 * KiCad symbol: `Sensor_Temperature:DS18B20`. Reference prefix: `U`.
 * Footprint filters: TO*92*.
 * @see http://datasheets.maximintegrated.com/en/ds/DS18B20.pdf
 * Keywords: OneWire 1Wire Dallas Maxim.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class DS18B20 extends Component.withPins({
  "GND": "1",
  "DQ": "2",
  "V_{DD}": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", DQ: "bidirectional", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:DS18B20";
  override referencePrefix = "U";
}

/**
 * 1-Wire Parasite-Power Digital Thermometer TO-92
 *
 * KiCad symbol: `Sensor_Temperature:DS18B20-PAR`. Reference prefix: `U`.
 * Footprint filters: TO*92*.
 * @see http://datasheets.maximintegrated.com/en/ds/DS18B20-PAR.pdf
 * Keywords: OneWire 1Wire Maxim Dallas.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class DS18B20_PAR extends Component.withPins({
  "GND": "1",
  "DQ": "2",
  "NC": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", DQ: "bidirectional", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:DS18B20-PAR";
  override referencePrefix = "U";
}

/**
 * Programmable Resolution 1-Wire Digital Thermometer MSOP-8
 *
 * KiCad symbol: `Sensor_Temperature:DS18B20U`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/DS18B20.pdf
 * Keywords: OneWire 1-Wire 1Wire Maxim Dallas.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class DS18B20U extends Component.withPins({
  "DQ": "1",
  "NC_2": "2",
  "NC_3": "3",
  "GND": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "V_{DD}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DQ: "bidirectional", NC_2: "no_connect", NC_3: "no_connect", GND: "power_in", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:DS18B20U";
  override referencePrefix = "U";
}

/**
 * Programmable Resolution 1-Wire Digital Thermometer SOIC-8
 *
 * KiCad symbol: `Sensor_Temperature:DS18B20Z`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/DS18B20.pdf
 * Keywords: OneWire 1Wire Maxim Dallas.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DS18B20Z extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "V_{DD}": "3",
  "DQ": "4",
  "GND": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", "V_{DD}": "power_in", DQ: "bidirectional", GND: "power_in", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:DS18B20Z";
  override referencePrefix = "U";
}

/**
 * High-Precision 1-Wire Digital Thermometer TO-92
 *
 * KiCad symbol: `Sensor_Temperature:DS18S20`. Reference prefix: `U`.
 * Footprint filters: TO*92*.
 * @see http://datasheets.maximintegrated.com/en/ds/DS18S20.pdf
 * Keywords: OneWire 1Wire Maxim Dallas.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class DS18S20 extends Component.withPins({
  "GND": "1",
  "DQ": "2",
  "V_{DD}": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", DQ: "bidirectional", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:DS18S20";
  override referencePrefix = "U";
}

/**
 * 1-Wire Parasite-Power Digital Thermometer TO-92
 *
 * KiCad symbol: `Sensor_Temperature:DS18S20-PAR`. Reference prefix: `U`.
 * Footprint filters: TO*92*.
 * @see http://datasheets.maximintegrated.com/en/ds/DS18S20-PAR.pdf
 * Keywords: OneWire 1Wire Maxim Dallas.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class DS18S20_PAR extends Component.withPins({
  "GND": "1",
  "DQ": "2",
  "NC": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", DQ: "bidirectional", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:DS18S20-PAR";
  override referencePrefix = "U";
}

/**
 * High-Precision 1-Wire Digital Thermometer SOIC-8
 *
 * KiCad symbol: `Sensor_Temperature:DS18S20Z`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/DS18S20.pdf
 * Keywords: OneWire 1Wire Dallas Maxim.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DS18S20Z extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "V_{DD}": "3",
  "DQ": "4",
  "GND": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", "V_{DD}": "power_in", DQ: "bidirectional", GND: "power_in", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:DS18S20Z";
  override referencePrefix = "U";
}

/**
 * 1-Wire Digital Thermometer with Sequence Detect and PIO
 *
 * KiCad symbol: `Sensor_Temperature:DS28EA00`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/DS28EA00.pdf
 * Keywords: 1Wire OneWire Maxim Dallas.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class DS28EA00 extends Component.withPins({
  "IO": "1",
  "NC_2": "2",
  "NC_3": "3",
  "GND": "4",
  "NC_5": "5",
  "PIOA": "6",
  "PIOB": "7",
  "V_{DD}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IO: "bidirectional", NC_2: "no_connect", NC_3: "no_connect", GND: "power_in", NC_5: "no_connect", PIOA: "bidirectional", PIOB: "bidirectional", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:DS28EA00";
  override referencePrefix = "U";
}

/**
 * KTY81 series silicon temperature sensors
 *
 * KiCad symbol: `Sensor_Temperature:KTY81`. Reference prefix: `TH`.
 * Footprint filters: SOD?70*.
 * @see https://www.nxp.com/docs/en/data-sheet/KTY81_SER.pdf
 * Keywords: silicon temperature sensors.
 */
export class KTY81 extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:KTY81";
  override referencePrefix = "TH";
}

/**
 * KTY10/KT100 series silicon temperature sensors
 *
 * KiCad symbol: `Sensor_Temperature:KT100`. Reference prefix: `TH`.
 * Footprint filters: SOD?70*.
 * @see http://www.b-kainka.de/Daten/Sensor/kty10.pdf
 * Keywords: silicon temperature sensors.
 */
export class KT100 extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:KT100";
  override referencePrefix = "TH";
}

/**
 * KTY10/KT100 series silicon temperature sensors
 *
 * KiCad symbol: `Sensor_Temperature:KTY10`. Reference prefix: `TH`.
 * Footprint filters: SOD?70*.
 * @see http://www.b-kainka.de/Daten/Sensor/kty10.pdf
 * Keywords: silicon temperature sensors.
 */
export class KTY10 extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:KTY10";
  override referencePrefix = "TH";
}

/**
 * KTY82 series silicon temperature sensors, SOT-23
 *
 * KiCad symbol: `Sensor_Temperature:KTY82`. Reference prefix: `TH`.
 * Footprint filters: SOT?23*.
 * @see https://www.nxp.com/docs/en/data-sheet/KTY82_SER.pdf
 * Keywords: silicon temperature sensors.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class KTY82 extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:KTY82";
  override referencePrefix = "TH";
}

/**
 * KTY83 series silicon temperature sensors, polarized, SOD68
 *
 * KiCad symbol: `Sensor_Temperature:KTY83`. Reference prefix: `TH`.
 * Footprint filters: *DO?34*SOD68*.
 * @see https://www.nxp.com/docs/en/data-sheet/KTY83_SER.pdf
 * Keywords: silicon temperature sensors diode.
 * Default footprint: Diode_THT:D_DO-34_SOD68_P7.62mm_Horizontal.
 */
export class KTY83 extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:KTY83";
  override referencePrefix = "TH";
}

/**
 * KTY84 series silicon temperature sensors, polarized, SOD68
 *
 * KiCad symbol: `Sensor_Temperature:KTY84`. Reference prefix: `TH`.
 * Footprint filters: *DO?34*SOD68*.
 * @see https://www.nxp.com/docs/en/data-sheet/KTY84_SER.pdf
 * Keywords: silicon temperature sensor diode.
 * Default footprint: Diode_THT:D_DO-34_SOD68_P7.62mm_Horizontal.
 */
export class KTY84 extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:KTY84";
  override referencePrefix = "TH";
}

/**
 * KTY85 series silicon temperature sensors, polarized, SOD80
 *
 * KiCad symbol: `Sensor_Temperature:KTY85`. Reference prefix: `TH`.
 * Footprint filters: SOD80*.
 * @see http://www.nxp.com/documents/other/SC17_GENERAL_TEMP_1996_3.pdf
 * Keywords: silicon temperature sensor diode.
 * Default footprint: Diode_SMD:D_MiniMELF.
 */
export class KTY85 extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:KTY85";
  override referencePrefix = "TH";
}

/**
 * Precision Temperature Sensor, Accuracy at 30°C ±1.5°C to ±4°C Maximum, SC70
 *
 * KiCad symbol: `Sensor_Temperature:LM20BIM7`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see http://www.ti.com/lit/ds/symlink/lm20.pdf
 * Keywords: temperature sensor thermistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class LM20BIM7 extends Component.withPins({
  "NC": "1",
  "GND/DIE": "2",
  "VO": "3",
  "V+": "4",
  "GND": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", "GND/DIE": "passive", VO: "output", "V+": "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:LM20BIM7";
  override referencePrefix = "U";
}

/**
 * Precision Temperature Sensor, Accuracy at 30°C ±4°C to ±5°C Maximum, SC70
 *
 * KiCad symbol: `Sensor_Temperature:LM20CIM7`. Reference prefix: `U`.
 * Footprint filters: SOT?353*.
 * @see http://www.ti.com/lit/ds/symlink/lm20.pdf
 * Keywords: temperature sensor thermistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class LM20CIM7 extends Component.withPins({
  "NC": "1",
  "GND/DIE": "2",
  "VO": "3",
  "V+": "4",
  "GND": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", "GND/DIE": "passive", VO: "output", "V+": "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:LM20CIM7";
  override referencePrefix = "U";
}

/**
 * Precision centigrade temperature sensor, SOIC-8
 *
 * KiCad symbol: `Sensor_Temperature:LM35-D`. Reference prefix: `U`.
 * Footprint filters: SOIC*.
 * @see http://www.ti.com/lit/ds/symlink/lm35.pdf
 * Keywords: temperature sensor thermistor.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LM35_D extends Component.withPins({
  "V_{OUT}": "1",
  "NC_2": "2",
  "NC_3": "3",
  "GND": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "+V_{S}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{OUT}": "output", NC_2: "no_connect", NC_3: "no_connect", GND: "power_in", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", "+V_{S}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:LM35-D";
  override referencePrefix = "U";
}

/**
 * Precision centigrade temperature sensor, TO-92
 *
 * KiCad symbol: `Sensor_Temperature:LM35-LP`. Reference prefix: `U`.
 * Footprint filters: TO?92*.
 * @see http://www.ti.com/lit/ds/symlink/lm35.pdf
 * Keywords: temperature sensor thermistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class LM35_LP extends Component.withPins({
  "+V_{S}": "1",
  "V_{OUT}": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+V_{S}": "power_in", "V_{OUT}": "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:LM35-LP";
  override referencePrefix = "U";
}

/**
 * Precision centigrade temperature sensor, TO-220
 *
 * KiCad symbol: `Sensor_Temperature:LM35-NEB`. Reference prefix: `U`.
 * Footprint filters: TO?220*.
 * @see http://www.ti.com/lit/ds/symlink/lm35.pdf
 * Keywords: temperature sensor thermistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class LM35_NEB extends Component.withPins({
  "+V_{S}": "1",
  "GND": "2",
  "V_{OUT}": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+V_{S}": "power_in", GND: "power_in", "V_{OUT}": "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:LM35-NEB";
  override referencePrefix = "U";
}

/**
 * 11 to 14 Bit digital temperature sensor with 2 wire interface, SOT23-6
 *
 * KiCad symbol: `Sensor_Temperature:LM73`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm73.pdf
 * Keywords: digital temperature sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class LM73 extends Component.withPins({
  "ADDR": "1",
  "GND": "2",
  "V_{DD}": "3",
  "SMBCLK": "4",
  "~{ALERT}": "5",
  "SMBDAT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ADDR: "input", GND: "power_in", "V_{DD}": "power_in", SMBCLK: "input", "~{ALERT}": "output", SMBDAT: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:LM73";
  override referencePrefix = "U";
}

/**
 * 11 to 14 Bit digital temperature sensor with 2 wire interface, SOT23-6
 *
 * KiCad symbol: `Sensor_Temperature:LM73-1`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/lm73.pdf
 * Keywords: digital temperature sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class LM73_1 extends Component.withPins({
  "ADDR": "1",
  "GND": "2",
  "V_{DD}": "3",
  "SMBCLK": "4",
  "~{ALERT}": "5",
  "SMBDAT": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { ADDR: "input", GND: "power_in", "V_{DD}": "power_in", SMBCLK: "input", "~{ALERT}": "output", SMBDAT: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:LM73-1";
  override referencePrefix = "U";
}

/**
 * 12-Bit plus sign digital temperature sensor with SPI/Microwire, SOIC-8
 *
 * KiCad symbol: `Sensor_Temperature:LM74CIM`. Reference prefix: `U`.
 * Footprint filters: SOIC?8*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/lm74.pdf
 * Keywords: Temperature sensor.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LM74CIM extends Component.withPins({
  "SI/O": "1",
  "SC": "2",
  "NC_3": "3",
  "GND": "4",
  "NC_5": "5",
  "NC_6": "6",
  "~{CS}": "7",
  "V^{+}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SI/O": "bidirectional", SC: "input", NC_3: "no_connect", GND: "power_in", NC_5: "no_connect", NC_6: "no_connect", "~{CS}": "input", "V^{+}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:LM74CIM";
  override referencePrefix = "U";
}

/**
 * 12-Bit plus sign digital temperature sensor with SPI/Microwire, DSBGA-5
 *
 * KiCad symbol: `Sensor_Temperature:LM74CITP`. Reference prefix: `U`.
 * Footprint filters: *DSBGA*1.5855x1.6365*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/lm74.pdf
 * Keywords: Temperature sensor.
 * Default footprint: Package_BGA:Texas_DSBGA-5_1.5855x1.6365mm_Layout3x2_P0.5mm.
 */
export class LM74CITP extends Component.withPins({
  "SI/O": "A1",
  "SC": "A2",
  "GND": "A3",
  "V^{+}": "B1",
  "~{CS}": "B3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SI/O": "bidirectional", SC: "input", GND: "power_in", "V^{+}": "power_in", "~{CS}": "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:LM74CITP";
  override referencePrefix = "U";
}

/**
 * Digital Temperature Sensor & Thermal Watchdog, SOIC-8 and VSSOP-8
 *
 * KiCad symbol: `Sensor_Temperature:LM75C`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, VSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm75b.pdf
 * Keywords: Temperature sensor.
 */
export class LM75C extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "O.S.": "3",
  "GND": "4",
  "A2": "5",
  "A1": "6",
  "A0": "7",
  "+Vs": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", "O.S.": "open_collector", GND: "power_in", A2: "input", A1: "input", A0: "input", "+Vs": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:LM75C";
  override referencePrefix = "U";
}

/**
 * Digital Temperature Sensor & Thermal Watchdog with LP on I2C and bus fault timeout, SOIC-8 and VSSOP-8
 *
 * KiCad symbol: `Sensor_Temperature:LM75B`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, VSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm75b.pdf
 * Keywords: Temperature sensor.
 */
export class LM75B extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "O.S.": "3",
  "GND": "4",
  "A2": "5",
  "A1": "6",
  "A0": "7",
  "+Vs": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", "O.S.": "open_collector", GND: "power_in", A2: "input", A1: "input", A0: "input", "+Vs": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:LM75B";
  override referencePrefix = "U";
}

/**
 * Digital Temperature Sensor and Thermal Window Comparator With Two-Wire (I2C) Interface, SOIC-8
 *
 * KiCad symbol: `Sensor_Temperature:LM92CIM`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/lm92.pdf
 * Keywords: temperature sensor.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class LM92CIM extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "T_CRIT_A": "3",
  "GND": "4",
  "INT": "5",
  "A1": "6",
  "A0": "7",
  "+Vs": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", T_CRIT_A: "open_collector", GND: "power_in", INT: "open_collector", A1: "input", A0: "input", "+Vs": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:LM92CIM";
  override referencePrefix = "U";
}

/**
 * Analog, selectable coefficient -5.5/-8.2/-10.9/-13.6mV/°C, ±2C accuracy, 1.5-5.5V supply, -50C to +150C, SOT-323
 *
 * KiCad symbol: `Sensor_Temperature:LM94021`. Reference prefix: `U`.
 * Footprint filters: Texas?R?PDSO?G5?DCK*.
 * @see https://www.ti.com/lit/ds/symlink/lm94021-q1.pdf
 * Keywords: thermistor texas ti gain temperature sensor.
 * Default footprint: Package_TO_SOT_SMD:Texas_R-PDSO-G5_DCK-5.
 */
export class LM94021 extends Component.withPins({
  "GS0": "1",
  "GND": "2",
  "OUT": "3",
  "V_{DD}": "4",
  "GS1": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GS0: "input", GND: "power_in", OUT: "output", "V_{DD}": "power_in", GS1: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:LM94021";
  override referencePrefix = "U";
}

/**
 * 0.5°C Accurate 2-Pin Digital Output Temperature Sensor With Pulse Count Interface. DQX (WSON-2) package
 *
 * KiCad symbol: `Sensor_Temperature:LMT01DQX`. Reference prefix: `U`.
 * Footprint filters: Texas?DQX*.
 * @see https://www.ti.com/lit/ds/symlink/lmt01.pdf
 * Keywords: Digital Temperature Pulse Count .
 * Default footprint: Package_SON:Texas_DQX002A.
 */
export class LMT01DQX extends Component.withPins({
  "VP": "1",
  "VN": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VP: "bidirectional", VN: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:LMT01DQX";
  override referencePrefix = "U";
}

/**
 * 0.5°C Accurate 2-Pin Digital Output Temperature Sensor With Pulse Count Interface. TO-92-2 package
 *
 * KiCad symbol: `Sensor_Temperature:LMT01LPG`. Reference prefix: `U`.
 * Footprint filters: TO?92*.
 * @see https://www.ti.com/lit/ds/symlink/lmt01.pdf
 * Keywords: Digital Temperature Pulse Count .
 * Default footprint: Package_TO_SOT_THT:TO-92-2.
 */
export class LMT01LPG extends Component.withPins({
  "VN": "1",
  "VP": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VN: "bidirectional", VP: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:LMT01LPG";
  override referencePrefix = "U";
}

/**
 * Analog temperature sensor, NTC, 0.4C accuracy, -5.5mV/C, -50C to +150C, 1.5 to 5.5V, SC-70-5
 *
 * KiCad symbol: `Sensor_Temperature:LMT84DCK`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://www.ti.com/lit/ds/symlink/lmt84.pdf
 * Keywords: temperature sensor thermistor ntc.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class LMT84DCK extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "OUT": "3",
  "V_{DD}": "4",
  "GND_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "power_in", OUT: "output", "V_{DD}": "power_in", GND_5: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:LMT84DCK";
  override referencePrefix = "U";
}

/**
 * Analog temperature sensor, NTC, 0.3C accuracy, -8.2mV/C, -50C to +150C, 1.8 to 5.5V, SC-70-5
 *
 * KiCad symbol: `Sensor_Temperature:LMT85DCK`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://www.ti.com/lit/ds/symlink/lmt85-q1.pdf
 * Keywords: temperature sensor thermistor ntc.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class LMT85DCK extends Component.withPins({
  "V_{DD}_1": "1",
  "GND_2": "2",
  "OUT": "3",
  "V_{DD}_4": "4",
  "GND_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}_1": "power_in", GND_2: "power_in", OUT: "output", "V_{DD}_4": "power_in", GND_5: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:LMT85DCK";
  override referencePrefix = "U";
}

/**
 * Analog temperature sensor, NTC, 0.25C accuracy, -10.9mV/C, -50C to +150C, 2.2 to 5.5V, SC-70-5
 *
 * KiCad symbol: `Sensor_Temperature:LMT86DCK`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://www.ti.com/lit/ds/symlink/lmt86-q1.pdf
 * Keywords: temperature sensor thermistor ntc.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class LMT86DCK extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "OUT": "3",
  "V_{DD}_4": "4",
  "V_{DD}_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "power_in", OUT: "output", "V_{DD}_4": "power_in", "V_{DD}_5": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:LMT86DCK";
  override referencePrefix = "U";
}

/**
 * Analog temperature sensor, NTC, 0.3C accuracy, -13.6mV/C, -50C to +150C, 2.7 to 5.5V, SC-70-5
 *
 * KiCad symbol: `Sensor_Temperature:LMT87DCK`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://www.ti.com/lit/ds/symlink/lmt87-q1.pdf
 * Keywords: temperature sensor thermistor ntc.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class LMT87DCK extends Component.withPins({
  "V_{DD}_1": "1",
  "GND": "2",
  "OUT": "3",
  "V_{DD}_4": "4",
  "V_{DD}_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}_1": "power_in", GND: "power_in", OUT: "output", "V_{DD}_4": "power_in", "V_{DD}_5": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:LMT87DCK";
  override referencePrefix = "U";
}

/**
 * Multi-Sensor Temperature Measurement System, High Accuracy, LQFP-48 (7x7mm)
 *
 * KiCad symbol: `Sensor_Temperature:LTC2983`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/2983fc.pdf
 * Keywords: Flexible Temperature Measurement RTD NTC Cold Junction Termocouple.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class LTC2983 extends Component.withPins({
  "GND_1": "1",
  "V_{DD}_2": "2",
  "GND_3": "3",
  "V_{DD}_4": "4",
  "GND_5": "5",
  "V_{DD}_6": "6",
  "GND_7": "7",
  "V_{DD}_8": "8",
  "GND_9": "9",
  "NC": "10",
  "V_{REF_BYP}": "11",
  "GND_12": "12",
  "V_{REFOUT}": "13",
  "V_{REFP}": "14",
  "GND_15": "15",
  "CH1": "16",
  "CH2": "17",
  "CH3": "18",
  "CH4": "19",
  "CH5": "20",
  "CH6": "21",
  "CH7": "22",
  "CH8": "23",
  "CH9": "24",
  "CH10": "25",
  "CH11": "26",
  "CH12": "27",
  "CH13": "28",
  "CH14": "29",
  "CH15": "30",
  "CH16": "31",
  "CH17": "32",
  "CH18": "33",
  "CH19": "34",
  "CH20": "35",
  "COM": "36",
  "INTERRUPT": "37",
  "SCK": "38",
  "SDO": "39",
  "SDI": "40",
  "~{CS}": "41",
  "~{RESET}": "42",
  "LDO": "43",
  "GND_44": "44",
  "V_{DD}_45": "45",
  "Q3": "46",
  "Q2": "47",
  "Q1": "48",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", "V_{DD}_2": "power_in", GND_3: "power_in", "V_{DD}_4": "power_in", GND_5: "power_in", "V_{DD}_6": "power_in", GND_7: "power_in", "V_{DD}_8": "power_in", GND_9: "power_in", NC: "no_connect", "V_{REF_BYP}": "passive", GND_12: "power_in", "V_{REFOUT}": "passive", "V_{REFP}": "passive", GND_15: "power_in", CH1: "passive", CH2: "passive", CH3: "passive", CH4: "passive", CH5: "passive", CH6: "passive", CH7: "passive", CH8: "passive", CH9: "passive", CH10: "passive", CH11: "passive", CH12: "passive", CH13: "passive", CH14: "passive", CH15: "passive", CH16: "passive", CH17: "passive", CH18: "passive", CH19: "passive", CH20: "passive", COM: "passive", INTERRUPT: "output", SCK: "input", SDO: "tri_state", SDI: "input", "~{CS}": "input", "~{RESET}": "input", LDO: "passive", GND_44: "power_in", "V_{DD}_45": "power_in", Q3: "passive", Q2: "passive", Q1: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:LTC2983";
  override referencePrefix = "U";
}

/**
 * Cold Junction K-type Thermocouple Interface, SPI, SOIC-8
 *
 * KiCad symbol: `Sensor_Temperature:MAX31855KASA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX31855.pdf
 * Keywords: Maxim.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MAX31855KASA extends Component.withPins({
  "GND": "1",
  "T-": "2",
  "T+": "3",
  "V_{CC}": "4",
  "SCK": "5",
  "~{CS}": "6",
  "SO": "7",
  "NC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", "T-": "passive", "T+": "passive", "V_{CC}": "power_in", SCK: "input", "~{CS}": "input", SO: "tri_state", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MAX31855KASA";
  override referencePrefix = "U";
}

/**
 * Cold Junction E-type Thermocouple Interface, SPI, SOIC-8
 *
 * KiCad symbol: `Sensor_Temperature:MAX31855EASA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX31855.pdf
 * Keywords: Maxim.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MAX31855EASA extends Component.withPins({
  "GND": "1",
  "T-": "2",
  "T+": "3",
  "V_{CC}": "4",
  "SCK": "5",
  "~{CS}": "6",
  "SO": "7",
  "NC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", "T-": "passive", "T+": "passive", "V_{CC}": "power_in", SCK: "input", "~{CS}": "input", SO: "tri_state", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MAX31855EASA";
  override referencePrefix = "U";
}

/**
 * Cold Junction J-type Thermocouple Interface, SPI, SOIC-8
 *
 * KiCad symbol: `Sensor_Temperature:MAX31855JASA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX31855.pdf
 * Keywords: Maxim.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MAX31855JASA extends Component.withPins({
  "GND": "1",
  "T-": "2",
  "T+": "3",
  "V_{CC}": "4",
  "SCK": "5",
  "~{CS}": "6",
  "SO": "7",
  "NC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", "T-": "passive", "T+": "passive", "V_{CC}": "power_in", SCK: "input", "~{CS}": "input", SO: "tri_state", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MAX31855JASA";
  override referencePrefix = "U";
}

/**
 * Cold Junction N-type Thermocouple Interface, SPI, SOIC-8
 *
 * KiCad symbol: `Sensor_Temperature:MAX31855NASA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX31855.pdf
 * Keywords: Maxim.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MAX31855NASA extends Component.withPins({
  "GND": "1",
  "T-": "2",
  "T+": "3",
  "V_{CC}": "4",
  "SCK": "5",
  "~{CS}": "6",
  "SO": "7",
  "NC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", "T-": "passive", "T+": "passive", "V_{CC}": "power_in", SCK: "input", "~{CS}": "input", SO: "tri_state", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MAX31855NASA";
  override referencePrefix = "U";
}

/**
 * Cold Junction R-type Thermocouple Interface, SPI, SOIC-8
 *
 * KiCad symbol: `Sensor_Temperature:MAX31855RASA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX31855.pdf
 * Keywords: Maxim.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MAX31855RASA extends Component.withPins({
  "GND": "1",
  "T-": "2",
  "T+": "3",
  "V_{CC}": "4",
  "SCK": "5",
  "~{CS}": "6",
  "SO": "7",
  "NC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", "T-": "passive", "T+": "passive", "V_{CC}": "power_in", SCK: "input", "~{CS}": "input", SO: "tri_state", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MAX31855RASA";
  override referencePrefix = "U";
}

/**
 * Cold Junction S-type Thermocouple Interface, SPI, SOIC-8
 *
 * KiCad symbol: `Sensor_Temperature:MAX31855SASA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX31855.pdf
 * Keywords: Maxim.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MAX31855SASA extends Component.withPins({
  "GND": "1",
  "T-": "2",
  "T+": "3",
  "V_{CC}": "4",
  "SCK": "5",
  "~{CS}": "6",
  "SO": "7",
  "NC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", "T-": "passive", "T+": "passive", "V_{CC}": "power_in", SCK: "input", "~{CS}": "input", SO: "tri_state", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MAX31855SASA";
  override referencePrefix = "U";
}

/**
 * Cold Junction T-type Thermocouple Interface, SPI, SOIC-8
 *
 * KiCad symbol: `Sensor_Temperature:MAX31855TASA`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://datasheets.maximintegrated.com/en/ds/MAX31855.pdf
 * Keywords: Maxim.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class MAX31855TASA extends Component.withPins({
  "GND": "1",
  "T-": "2",
  "T+": "3",
  "V_{CC}": "4",
  "SCK": "5",
  "~{CS}": "6",
  "SO": "7",
  "NC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", "T-": "passive", "T+": "passive", "V_{CC}": "power_in", SCK: "input", "~{CS}": "input", SO: "tri_state", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MAX31855TASA";
  override referencePrefix = "U";
}

/**
 * Precision Thermocouple to Digital Converter with Linearization, TSSOP-14
 *
 * KiCad symbol: `Sensor_Temperature:MAX31856`. Reference prefix: `U`.
 * Footprint filters: TSSOP*14*4.4x5mm*P0.65mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX31856.pdf
 * Keywords: Thermocouple converter serial.
 * Default footprint: Package_SO:TSSOP-14_4.4x5mm_P0.65mm.
 */
export class MAX31856 extends Component.withPins({
  "AGND": "1",
  "BIAS": "2",
  "T-": "3",
  "T+": "4",
  "AVDD": "5",
  "DNC": "6",
  "~{DRDY}": "7",
  "DVDD": "8",
  "~{CS}": "9",
  "SCK": "10",
  "SDO": "11",
  "SDI": "12",
  "~{FAULT}": "13",
  "DGND": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { AGND: "power_in", BIAS: "input", "T-": "input", "T+": "input", AVDD: "power_in", DNC: "no_connect", "~{DRDY}": "output", DVDD: "power_in", "~{CS}": "input", SCK: "input", SDO: "output", SDI: "input", "~{FAULT}": "output", DGND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MAX31856";
  override referencePrefix = "U";
}

/**
 * RTD-to-Digital Converter, SSOP-20
 *
 * KiCad symbol: `Sensor_Temperature:MAX31865xAP`. Reference prefix: `U`.
 * Footprint filters: SSOP*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX31865.pdf
 * Keywords: RTD SPI Temperature.
 * Default footprint: Package_SO:SSOP-20_5.3x7.2mm_P0.65mm.
 */
export class MAX31865xAP extends Component.withPins({
  "~{DRDY}": "1",
  "DVDD": "2",
  "VDD": "3",
  "BIAS": "4",
  "REFIN+": "5",
  "REFIN-": "6",
  "ISENSOR": "7",
  "FORCE+": "8",
  "FORCE2": "9",
  "RTDIN+": "10",
  "RTDIN-": "11",
  "FORCE-": "12",
  "GND_13": "13",
  "SDI": "14",
  "SCLK": "15",
  "~{CS}": "16",
  "SDO": "17",
  "DGND": "18",
  "GND_19": "19",
  "NC": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{DRDY}": "output", DVDD: "power_in", VDD: "power_in", BIAS: "power_out", "REFIN+": "input", "REFIN-": "input", ISENSOR: "passive", "FORCE+": "passive", FORCE2: "input", "RTDIN+": "input", "RTDIN-": "input", "FORCE-": "power_out", GND_13: "power_in", SDI: "input", SCLK: "input", "~{CS}": "input", SDO: "tri_state", DGND: "power_in", GND_19: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MAX31865xAP";
  override referencePrefix = "U";
}

/**
 * RTD-to-Digital Converter, TQFN-20
 *
 * KiCad symbol: `Sensor_Temperature:MAX31865xTP`. Reference prefix: `U`.
 * Footprint filters: TQFN*1EP*5x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX31865.pdf
 * Keywords: RTD SPI Temperature.
 * Default footprint: Package_DFN_QFN:TQFN-20-1EP_5x5mm_P0.65mm_EP3.25x3.25mm.
 */
export class MAX31865xTP extends Component.withPins({
  "BIAS": "1",
  "REFIN+": "2",
  "REFIN-": "3",
  "ISENSOR": "4",
  "FORCE+": "5",
  "FORCE2": "6",
  "RTDIN+": "7",
  "RTDIN-": "8",
  "FORCE-": "9",
  "GND_10": "10",
  "SDI": "11",
  "SCLK": "12",
  "~{CS}": "13",
  "SDO": "14",
  "DGND": "15",
  "GND_16": "16",
  "NC": "17",
  "~{DRDY}": "18",
  "DVDD": "19",
  "VDD": "20",
  "GND_21": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BIAS: "power_out", "REFIN+": "input", "REFIN-": "input", ISENSOR: "passive", "FORCE+": "passive", FORCE2: "input", "RTDIN+": "input", "RTDIN-": "input", "FORCE-": "power_out", GND_10: "power_in", SDI: "input", SCLK: "input", "~{CS}": "input", SDO: "tri_state", DGND: "power_in", GND_16: "passive", NC: "no_connect", "~{DRDY}": "output", DVDD: "power_in", VDD: "power_in", GND_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MAX31865xTP";
  override referencePrefix = "U";
}

/**
 * Remote and Local Temperature Sensor, SSOP-16
 *
 * KiCad symbol: `Sensor_Temperature:MAX6654`. Reference prefix: `U`.
 * Footprint filters: *SOP*3.9x4.9mm*P0.635mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX6654.pdf
 * Keywords: I2C SMBus Serial.
 * Default footprint: Package_SO:SSOP-16_3.9x4.9mm_P0.635mm.
 */
export class MAX6654 extends Component.withPins({
  "NC_1": "1",
  "Vcc": "2",
  "DXP": "3",
  "DXN": "4",
  "NC_5": "5",
  "ADD1": "6",
  "GND_7": "7",
  "GND_8": "8",
  "NC_9": "9",
  "ADD0": "10",
  "~{ALERT}": "11",
  "SMBDATA": "12",
  "NC_13": "13",
  "SMBCLK": "14",
  "~{STBY}": "15",
  "NC_16": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", Vcc: "power_in", DXP: "input", DXN: "input", NC_5: "no_connect", ADD1: "input", GND_7: "power_in", GND_8: "passive", NC_9: "no_connect", ADD0: "input", "~{ALERT}": "open_collector", SMBDATA: "bidirectional", NC_13: "no_connect", SMBCLK: "input", "~{STBY}": "input", NC_16: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MAX6654";
  override referencePrefix = "U";
}

/**
 * Temperature Switch with Selectable Hysteresis, Open-Drain, Active-Low Output (Hot Option), SOT-23-5
 *
 * KiCad symbol: `Sensor_Temperature:MCP9501`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20002268B.pdf
 * Keywords: Temperature Switch sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MCP9501 extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "Hyst": "3",
  "VDD": "4",
  "Out": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "power_in", Hyst: "input", VDD: "power_in", Out: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MCP9501";
  override referencePrefix = "U";
}

/**
 * Temperature Switch with Selectable Hysteresis, Push-Pull, Active-High Output (Hot Option), SOT-23-5
 *
 * KiCad symbol: `Sensor_Temperature:MCP9502`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20002268B.pdf
 * Keywords: Temperature Switch sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MCP9502 extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "Hyst": "3",
  "VDD": "4",
  "Out": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "power_in", Hyst: "input", VDD: "power_in", Out: "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MCP9502";
  override referencePrefix = "U";
}

/**
 * Temperature Switch with Selectable Hysteresis, Open-Drain, Active-Low Output (Cold Option), SOT-23-5
 *
 * KiCad symbol: `Sensor_Temperature:MCP9503`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20002268B.pdf
 * Keywords: Temperature Switch sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MCP9503 extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "Hyst": "3",
  "VDD": "4",
  "Out": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "power_in", Hyst: "input", VDD: "power_in", Out: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MCP9503";
  override referencePrefix = "U";
}

/**
 * Temperature Switch with Selectable Hysteresis, Push-Pull, Active-High Output (Cold Option), SOT-23-5
 *
 * KiCad symbol: `Sensor_Temperature:MCP9504`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20002268B.pdf
 * Keywords: Temperature Switch sensor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MCP9504 extends Component.withPins({
  "GND_1": "1",
  "GND_2": "2",
  "Hyst": "3",
  "VDD": "4",
  "Out": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", GND_2: "power_in", Hyst: "input", VDD: "power_in", Out: "output", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MCP9504";
  override referencePrefix = "U";
}

/**
 * Thermocouple EMF to Temperature Converter, VQFN-20
 *
 * KiCad symbol: `Sensor_Temperature:MCP96xx01x-x-MX`. Reference prefix: `U`.
 * Footprint filters: *QFN*5x5mm?P0.65mm?EP3.35x3.35mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/MSLD/ProductDocuments/MCP960X-Data-Sheet-20005426.pdf
 * Keywords: I2C MCP9601-E/MX MCP9601T-E/MX MCP96L01-E/MX MCP96L01T-E/MX MCP96RL01-E/MX MCP96RL01T-E/MX.
 * Default footprint: Package_DFN_QFN:QFN-20-1EP_5x5mm_P0.65mm_EP3.35x3.35mm.
 */
export class MCP96xx01x_x_MX extends Component.withPins({
  "V_{IN}+": "2",
  "V_{IN}-": "4",
  "V_{SENSE}": "6",
  "SC_Alert": "7",
  "V_{DD}": "8",
  "OC_Alert": "9",
  "Alert_1": "11",
  "Alert_2": "12",
  "Alert_3": "14",
  "Alert_4": "15",
  "ADDR": "16",
  "SCL": "19",
  "SDA": "20",
  "GND": "[1,3,5,10,13,17,18,21]",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{IN}+": "input", "V_{IN}-": "input", "V_{SENSE}": "input", SC_Alert: "output", "V_{DD}": "power_in", OC_Alert: "output", Alert_1: "output", Alert_2: "output", Alert_3: "output", Alert_4: "output", ADDR: "input", SCL: "input", SDA: "bidirectional", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MCP96xx01x-x-MX";
  override referencePrefix = "U";
}

/**
 * Low power, analog thermistor temperature sensor, ±2C accuracy, -40C to +125C, in SC-70-5
 *
 * KiCad symbol: `Sensor_Temperature:MCP9700Ax-ELT`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20001942G.pdf
 * Keywords: temperature sensor thermistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class MCP9700Ax_ELT extends Component.withPins({
  "NC_1": "1",
  "GND": "2",
  "V_{OUT}": "3",
  "V_{DD}": "4",
  "NC_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", GND: "power_in", "V_{OUT}": "output", "V_{DD}": "power_in", NC_5: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MCP9700Ax-ELT";
  override referencePrefix = "U";
}

/**
 * Low power, analog thermistor temperature sensor, ±4C accuracy, -40C to +150C, in SOT-23-3
 *
 * KiCad symbol: `Sensor_Temperature:MCP9700x-HTT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/20001942g.pdf
 * Keywords: temperature sensor thermistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MCP9700x_HTT extends Component.withPins({
  "V_{DD}": "1",
  "V_{OUT}": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", "V_{OUT}": "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MCP9700x-HTT";
  override referencePrefix = "U";
}

/**
 * Low power, analog thermistor temperature sensor, ±2C accuracy, -40C to +125C, in SOT-23-3
 *
 * KiCad symbol: `Sensor_Temperature:MCP9700Ax-ETT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/20001942g.pdf
 * Keywords: temperature sensor thermistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MCP9700Ax_ETT extends Component.withPins({
  "V_{DD}": "1",
  "V_{OUT}": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", "V_{OUT}": "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MCP9700Ax-ETT";
  override referencePrefix = "U";
}

/**
 * Low power, analog thermistor temperature sensor, ±2C accuracy, -40C to +150C, in SC-70-5
 *
 * KiCad symbol: `Sensor_Temperature:MCP9700Ax-HLT`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/20001942g.pdf
 * Keywords: temperature sensor thermistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class MCP9700Ax_HLT extends Component.withPins({
  "NC_1": "1",
  "GND": "2",
  "V_{OUT}": "3",
  "V_{DD}": "4",
  "NC_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", GND: "power_in", "V_{OUT}": "output", "V_{DD}": "power_in", NC_5: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MCP9700Ax-HLT";
  override referencePrefix = "U";
}

/**
 * Low power, analog thermistor temperature sensor, ±2C accuracy, -40C to +150C, in SOT-23-3
 *
 * KiCad symbol: `Sensor_Temperature:MCP9700Ax-HTT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/20001942g.pdf
 * Keywords: temperature sensor thermistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MCP9700Ax_HTT extends Component.withPins({
  "V_{DD}": "1",
  "V_{OUT}": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", "V_{OUT}": "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MCP9700Ax-HTT";
  override referencePrefix = "U";
}

/**
 * Low power, analog thermistor temperature sensor, ±4C accuracy, -40C to +125C, in SC-70-5
 *
 * KiCad symbol: `Sensor_Temperature:MCP9700x-ELT`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/20001942g.pdf
 * Keywords: temperature sensor thermistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class MCP9700x_ELT extends Component.withPins({
  "NC_1": "1",
  "GND": "2",
  "V_{OUT}": "3",
  "V_{DD}": "4",
  "NC_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", GND: "power_in", "V_{OUT}": "output", "V_{DD}": "power_in", NC_5: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MCP9700x-ELT";
  override referencePrefix = "U";
}

/**
 * Low power, analog thermistor temperature sensor, ±4C accuracy, -40C to +125C, in SOT-23-3
 *
 * KiCad symbol: `Sensor_Temperature:MCP9700x-ETT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/20001942g.pdf
 * Keywords: temperature sensor thermistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MCP9700x_ETT extends Component.withPins({
  "V_{DD}": "1",
  "V_{OUT}": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", "V_{OUT}": "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MCP9700x-ETT";
  override referencePrefix = "U";
}

/**
 * Low power, analog thermistor temperature sensor, ±4C accuracy, -40C to +150C, in SC-70-5
 *
 * KiCad symbol: `Sensor_Temperature:MCP9700x-HLT`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/20001942g.pdf
 * Keywords: temperature sensor thermistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class MCP9700x_HLT extends Component.withPins({
  "NC_1": "1",
  "GND": "2",
  "V_{OUT}": "3",
  "V_{DD}": "4",
  "NC_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", GND: "power_in", "V_{OUT}": "output", "V_{DD}": "power_in", NC_5: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MCP9700x-HLT";
  override referencePrefix = "U";
}

/**
 * 2-Wire High-Accuracy Temperature Sensor, No Serial Bus time-out, SOT-23-5
 *
 * KiCad symbol: `Sensor_Temperature:MCP9800Ax-xOT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/21909d.pdf
 * Keywords: I2C Temperature Sensor No Serial Bus time-out.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MCP9800Ax_xOT extends Component.withPins({
  "V_{DD}": "1",
  "GND": "2",
  "ALERT": "3",
  "SCLK": "4",
  "SDA": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", GND: "power_in", ALERT: "output", SCLK: "input", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MCP9800Ax-xOT";
  override referencePrefix = "U";
}

/**
 * 2-Wire High-Accuracy Temperature Sensor, Serial Bus time-out 35 ms, SOT-23-5
 *
 * KiCad symbol: `Sensor_Temperature:MCP9802Ax-xOT`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/21909d.pdf
 * Keywords: I2C Temperature Sensor Serial Bus time-out.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class MCP9802Ax_xOT extends Component.withPins({
  "V_{DD}": "1",
  "GND": "2",
  "ALERT": "3",
  "SCLK": "4",
  "SDA": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", GND: "power_in", ALERT: "output", SCLK: "input", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MCP9802Ax-xOT";
  override referencePrefix = "U";
}

/**
 * ±0.25°C (±1°C) Typical (Maximum), Digital Temperature Sensor, DFN-8
 *
 * KiCad symbol: `Sensor_Temperature:MCP9804_DFN`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22203b.pdf
 * Keywords: temperature sensor I2C.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class MCP9804_DFN extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "Alert": "3",
  "GND": "4",
  "A2": "5",
  "A1": "6",
  "A0": "7",
  "V_{DD}": "8",
  "EP/GND": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", Alert: "output", GND: "power_in", A2: "input", A1: "input", A0: "input", "V_{DD}": "power_in", "EP/GND": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MCP9804_DFN";
  override referencePrefix = "U";
}

/**
 * ±0.25°C (±1°C) Typical (Maximum), Digital Temperature Sensor, MSOP-8
 *
 * KiCad symbol: `Sensor_Temperature:MCP9804_MSOP`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22203b.pdf
 * Keywords: temperature sensor I2C.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class MCP9804_MSOP extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "Alert": "3",
  "GND": "4",
  "A2": "5",
  "A1": "6",
  "A0": "7",
  "V_{DD}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", Alert: "output", GND: "power_in", A2: "input", A1: "input", A0: "input", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MCP9804_MSOP";
  override referencePrefix = "U";
}

/**
 * ±0.25°C (±0.5°C) Typical (Maximum), Digital Temperature Sensor, DFN-8
 *
 * KiCad symbol: `Sensor_Temperature:MCP9808_DFN`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/MCP9808-0.5C-Maximum-Accuracy-Digital-Temperature-Sensor-Data-Sheet-DS20005095B.pdf
 * Keywords: temperature sensor I2C.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.7x1.4mm.
 */
export class MCP9808_DFN extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "Alert": "3",
  "GND": "4",
  "A2": "5",
  "A1": "6",
  "A0": "7",
  "V_{DD}": "8",
  "EP/GND": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", Alert: "output", GND: "power_in", A2: "input", A1: "input", A0: "input", "V_{DD}": "power_in", "EP/GND": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MCP9808_DFN";
  override referencePrefix = "U";
}

/**
 * ±0.25°C (±0.5°C) Typical (Maximum), Digital Temperature Sensor, MSOP-8
 *
 * KiCad symbol: `Sensor_Temperature:MCP9808_MSOP`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/22203b.pdf
 * Keywords: temperature sensor I2C.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class MCP9808_MSOP extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "Alert": "3",
  "GND": "4",
  "A2": "5",
  "A1": "6",
  "A0": "7",
  "V_{DD}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", Alert: "output", GND: "power_in", A2: "input", A1: "input", A0: "input", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MCP9808_MSOP";
  override referencePrefix = "U";
}

/**
 * ±1°C Accurate, 1.8V Digital Temperature Sensor, I²C, DFN-8
 *
 * KiCad symbol: `Sensor_Temperature:MCP9844x-xMN`. Reference prefix: `U`.
 * Footprint filters: DFN*3x2mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/20005192B.pdf
 * Keywords: I2C TWI.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x2mm_P0.5mm_EP1.36x1.46mm.
 */
export class MCP9844x_xMN extends Component.withPins({
  "A0": "1",
  "A1": "2",
  "A2": "3",
  "GND": "4",
  "SDA": "5",
  "SCL": "6",
  "Event": "7",
  "V_{DD}": "8",
  "EP/GND": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A0: "input", A1: "input", A2: "input", GND: "power_in", SDA: "bidirectional", SCL: "input", Event: "open_collector", "V_{DD}": "power_in", "EP/GND": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:MCP9844x-xMN";
  override referencePrefix = "U";
}

/**
 * NXP I2C-bus Fm+ digital temperature sensor and thermal watchdog, SO-8
 *
 * KiCad symbol: `Sensor_Temperature:PCT2075D`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCT2075.pdf
 * Keywords: temperature sensor I2C single channel.
 * Default footprint: Package_SO:SO-8_3.9x4.9mm_P1.27mm.
 */
export class PCT2075D extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "OS": "3",
  "GND": "4",
  "A2": "5",
  "A1": "6",
  "A0": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", OS: "open_collector", GND: "power_in", A2: "input", A1: "input", A0: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:PCT2075D";
  override referencePrefix = "U";
}

/**
 * NXP I2C-bus Fm+ digital temperature sensor and thermal watchdog, TSSOP-8
 *
 * KiCad symbol: `Sensor_Temperature:PCT2075DP`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/PCT2075.pdf
 * Keywords: temperature sensor I2C single channel.
 * Default footprint: Package_SO:TSSOP-8_3x3mm_P0.65mm.
 */
export class PCT2075DP extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "OS": "3",
  "GND": "4",
  "A2": "5",
  "A1": "6",
  "A0": "7",
  "VCC": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", OS: "open_collector", GND: "power_in", A2: "input", A1: "input", A0: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:PCT2075DP";
  override referencePrefix = "U";
}

/**
 * PT100 platinum temperature sensor (RTD)
 *
 * KiCad symbol: `Sensor_Temperature:PT100`. Reference prefix: `TH`.
 * Footprint filters: TO?92*, PIN?ARRAY*, bornier*, Terminal?Block*, SOD70*, R*1206*, R*0805*.
 * @see https://www.heraeus.com/media/media/group/doc_group/products_1/hst/sot_to/de_15/to_92_d.pdf
 * Keywords: platinum temperature sensor RTD.
 */
export class PT100 extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:PT100";
  override referencePrefix = "TH";
}

/**
 * PT1000 platinum temperature sensor (RTD)
 *
 * KiCad symbol: `Sensor_Temperature:PT1000`. Reference prefix: `TH`.
 * Footprint filters: TO?92*, PIN?ARRAY*, bornier*, Terminal?Block*, SOD70*, R*1206*, R*0805*.
 * @see https://www.heraeus.com/media/media/group/doc_group/products_1/hst/sot_to/de_15/to_92_d.pdf
 * Keywords: platinum temperature sensor RTD.
 */
export class PT1000 extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:PT1000";
  override referencePrefix = "TH";
}

/**
 * PT500 platinum temperature sensor (RTD)
 *
 * KiCad symbol: `Sensor_Temperature:PT500`. Reference prefix: `TH`.
 * Footprint filters: TO?92*, PIN?ARRAY*, bornier*, Terminal?Block*, SOD70*, R*1206*, R*0805*.
 * @see https://www.heraeus.com/media/media/group/doc_group/products_1/hst/sot_to/de_15/to_92_d.pdf
 * Keywords: platinum temperature sensor RTD.
 */
export class PT500 extends Component.withPins({
  "P1": "1",
  "P2": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:PT500";
  override referencePrefix = "TH";
}

/**
 * I2C Temperature Sensor, ±1.0ºC, DFN-6
 *
 * KiCad symbol: `Sensor_Temperature:Si7050-A20`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P1mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si7050-1-3-4-5-A20.pdf
 * Keywords: I2C Temperature Sensor.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_3x3mm_P1mm_EP1.65x2.55mm.
 */
export class Si7050_A20 extends Component.withPins({
  "SDA": "1",
  "GND": "2",
  "NC_3": "3",
  "NC_4": "4",
  "VDD": "5",
  "SCL": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", GND: "power_in", NC_3: "no_connect", NC_4: "no_connect", VDD: "power_in", SCL: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:Si7050-A20";
  override referencePrefix = "U";
}

/**
 * I2C Temperature Sensor, ±0.1ºC, DFN-6
 *
 * KiCad symbol: `Sensor_Temperature:Si7051-A20`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P1mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si7050-1-3-4-5-A20.pdf
 * Keywords: I2C Temperature Sensor.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_3x3mm_P1mm_EP1.65x2.55mm.
 */
export class Si7051_A20 extends Component.withPins({
  "SDA": "1",
  "GND": "2",
  "NC_3": "3",
  "NC_4": "4",
  "VDD": "5",
  "SCL": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", GND: "power_in", NC_3: "no_connect", NC_4: "no_connect", VDD: "power_in", SCL: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:Si7051-A20";
  override referencePrefix = "U";
}

/**
 * I2C Temperature Sensor, ±0.3ºC, DFN-6
 *
 * KiCad symbol: `Sensor_Temperature:Si7053-A20`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P1mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si7050-1-3-4-5-A20.pdf
 * Keywords: I2C Temperature Sensor.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_3x3mm_P1mm_EP1.65x2.55mm.
 */
export class Si7053_A20 extends Component.withPins({
  "SDA": "1",
  "GND": "2",
  "NC_3": "3",
  "NC_4": "4",
  "VDD": "5",
  "SCL": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", GND: "power_in", NC_3: "no_connect", NC_4: "no_connect", VDD: "power_in", SCL: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:Si7053-A20";
  override referencePrefix = "U";
}

/**
 * I2C Temperature Sensor, ±0.4ºC, DFN-6
 *
 * KiCad symbol: `Sensor_Temperature:Si7054-A20`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P1mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si7050-1-3-4-5-A20.pdf
 * Keywords: I2C Temperature Sensor.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_3x3mm_P1mm_EP1.65x2.55mm.
 */
export class Si7054_A20 extends Component.withPins({
  "SDA": "1",
  "GND": "2",
  "NC_3": "3",
  "NC_4": "4",
  "VDD": "5",
  "SCL": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", GND: "power_in", NC_3: "no_connect", NC_4: "no_connect", VDD: "power_in", SCL: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:Si7054-A20";
  override referencePrefix = "U";
}

/**
 * I2C Temperature Sensor, ±0.5ºC, DFN-6
 *
 * KiCad symbol: `Sensor_Temperature:Si7055-A20`. Reference prefix: `U`.
 * Footprint filters: DFN*1EP*3x3mm*P1mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si7050-1-3-4-5-A20.pdf
 * Keywords: I2C Temperature Sensor.
 * Default footprint: Package_DFN_QFN:DFN-6-1EP_3x3mm_P1mm_EP1.65x2.55mm.
 */
export class Si7055_A20 extends Component.withPins({
  "SDA": "1",
  "GND": "2",
  "NC_3": "3",
  "NC_4": "4",
  "VDD": "5",
  "SCL": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", GND: "power_in", NC_3: "no_connect", NC_4: "no_connect", VDD: "power_in", SCL: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:Si7055-A20";
  override referencePrefix = "U";
}

/**
 * Precision Temperature-to-Voltage Converter, 10mV/ºC, -40ºC to +125ºC, ±2.0ºC (max), 2.5V to 5.5V, SOT-23
 *
 * KiCad symbol: `Sensor_Temperature:TC1047AxNB`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21498D.pdf
 * Keywords: temperature sensor analog.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class TC1047AxNB extends Component.withPins({
  "V_{DD}": "1",
  "V_{OUT}": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", "V_{OUT}": "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TC1047AxNB";
  override referencePrefix = "U";
}

/**
 * Precision Temperature-to-Voltage Converter, 10mV/ºC, -40ºC to +125ºC, ±2.0ºC (max), 2.7V to 4.4V, SOT-23
 *
 * KiCad symbol: `Sensor_Temperature:TC1047xNB`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/21498D.pdf
 * Keywords: temperature sensor analog.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class TC1047xNB extends Component.withPins({
  "V_{DD}": "1",
  "V_{OUT}": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{DD}": "power_in", "V_{OUT}": "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TC1047xNB";
  override referencePrefix = "U";
}

/**
 * Temperature Sensor with I2C/SMBus Interface, SOT-23-6
 *
 * KiCad symbol: `Sensor_Temperature:TMP100`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/gpn/tmp100
 * Keywords: temperature sensor i2c smbus.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class TMP100 extends Component.withPins({
  "SCL": "1",
  "GND": "2",
  "ADD1": "3",
  "V+": "4",
  "ADD0": "5",
  "SDA": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCL: "input", GND: "power_in", ADD1: "input", "V+": "power_in", ADD0: "input", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TMP100";
  override referencePrefix = "U";
}

/**
 * Digital Temperature Sensor with I2C/SMBus Interface, ±2°C, one-shot conversion, alert, SOT-23-6
 *
 * KiCad symbol: `Sensor_Temperature:TMP101`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/tmp101.pdf
 * Keywords: digital temperature sensor i2c smbus.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class TMP101 extends Component.withPins({
  "SCL": "1",
  "GND": "2",
  "ALERT": "3",
  "V+": "4",
  "ADD0": "5",
  "SDA": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCL: "input", GND: "power_in", ALERT: "open_collector", "V+": "power_in", ADD0: "input", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TMP101";
  override referencePrefix = "U";
}

/**
 * Digital Temperature Sensor, ±3°C, low-Power, SMBus, 12 bit, Two-Wire Serial Interface, SOT-563
 *
 * KiCad symbol: `Sensor_Temperature:TMP102xxDRL`. Reference prefix: `U`.
 * Footprint filters: SOT?563*.
 * @see https://www.ti.com/lit/ds/symlink/tmp102.pdf
 * Keywords: digital temperature sensor i2c smbus.
 * Default footprint: Package_TO_SOT_SMD:SOT-563.
 */
export class TMP102xxDRL extends Component.withPins({
  "SCL": "1",
  "GND": "2",
  "ALERT": "3",
  "ADD0": "4",
  "V+": "5",
  "SDA": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCL: "input", GND: "power_in", ALERT: "open_collector", ADD0: "input", "V+": "power_in", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TMP102xxDRL";
  override referencePrefix = "U";
}

/**
 * I2C-bus digital temperature sensor and thermal watchdog, SO-8
 *
 * KiCad symbol: `Sensor_Temperature:TMP1075D`. Reference prefix: `U`.
 * Footprint filters: SO*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/gpn/tmp1075
 * Keywords: temperature sensor I2C single channel.
 * Default footprint: Package_SO:SO-8_3.9x4.9mm_P1.27mm.
 */
export class TMP1075D extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "ALERT": "3",
  "GND": "4",
  "A2": "5",
  "A1": "6",
  "A0": "7",
  "V+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", ALERT: "open_collector", GND: "power_in", A2: "input", A1: "input", A0: "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TMP1075D";
  override referencePrefix = "U";
}

/**
 * I2C-bus digital temperature sensor and thermal watchdog, VSSOP-8
 *
 * KiCad symbol: `Sensor_Temperature:TMP1075DGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/gpn/tmp1075
 * Keywords: temperature sensor I2C single channel.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class TMP1075DGK extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "ALERT": "3",
  "GND": "4",
  "A2": "5",
  "A1": "6",
  "A0": "7",
  "V+": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", ALERT: "open_collector", GND: "power_in", A2: "input", A1: "input", A0: "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TMP1075DGK";
  override referencePrefix = "U";
}

/**
 * I2C-bus digital temperature sensor and thermal watchdog, WSON-8
 *
 * KiCad symbol: `Sensor_Temperature:TMP1075DSG`. Reference prefix: `U`.
 * Footprint filters: *WSON*1EP*2x2mm*P0.5mm*.
 * @see https://www.ti.com/lit/gpn/tmp1075
 * Keywords: temperature sensor I2C single channel.
 * Default footprint: Package_SON:Texas_DSG0008A_WSON-8-1EP_2x2mm_P0.5mm_EP0.9x1.6mm_ThermalVias.
 */
export class TMP1075DSG extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "ALERT": "3",
  "GND": "4",
  "A2": "5",
  "A1": "6",
  "A0": "7",
  "V+": "8",
  "EP": "9",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", ALERT: "open_collector", GND: "power_in", A2: "input", A1: "input", A0: "input", "V+": "power_in", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TMP1075DSG";
  override referencePrefix = "U";
}

/**
 * Digital Temperature Sensor with I2C/SMBus Interface, +/-1° C accurate, address pin, X2SON
 *
 * KiCad symbol: `Sensor_Temperature:TMP110D`. Reference prefix: `U`.
 * Footprint filters: Texas?X2SON*0.8x0.8mm*P0.48mm*.
 * @see https://www.ti.com/lit/ds/symlink/tmp110.pdf
 * Keywords: digital temperature sensor i2c smbus.
 * Default footprint: Package_SON:Texas_X2SON-5_0.8x0.8mm_P0.48mm.
 */
export class TMP110D extends Component.withPins({
  "GND": "1",
  "SCL": "2",
  "ADD0": "3",
  "SDA": "4",
  "V+": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", SCL: "input", ADD0: "input", SDA: "bidirectional", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TMP110D";
  override referencePrefix = "U";
}

/**
 * Digital Temperature Sensor with I2C/SMBus/Two-wire Interface, 12 bits, ±1°C, one-shot conversion, alert, nist traceable, SOT-563
 *
 * KiCad symbol: `Sensor_Temperature:TMP112xxDRL`. Reference prefix: `U`.
 * Footprint filters: SOT?563*.
 * @see https://www.ti.com/lit/ds/symlink/tmp112.pdf
 * Keywords: digital temperature sensor i2c smbus two-wire nist.
 * Default footprint: Package_TO_SOT_SMD:SOT-563.
 */
export class TMP112xxDRL extends Component.withPins({
  "SCL": "1",
  "GND": "2",
  "ALERT": "3",
  "ADD0": "4",
  "V+": "5",
  "SDA": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCL: "input", GND: "power_in", ALERT: "open_collector", ADD0: "input", "V+": "power_in", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TMP112xxDRL";
  override referencePrefix = "U";
}

/**
 * Ultra-Small 0.76x0.76x0.15mm, 1.08..1.98V Supply, High Accuracy I2C 16-bit Digital Temperature Sensor, BGA-4
 *
 * KiCad symbol: `Sensor_Temperature:TMP114`. Reference prefix: `U`.
 * Footprint filters: *Texas*PicoStar*.
 * @see https://www.ti.com/lit/ds/symlink/tmp114.pdf
 * Keywords: thermometer monitor i2c texas.
 * Default footprint: Package_BGA:Texas_PicoStar_BGA-4_0.758x0.758mm_Layout2x2_P0.4mm.
 */
export class TMP114 extends Component.withPins({
  "V+": "A1",
  "GND": "A2",
  "SDA": "B1",
  "SCL": "B2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V+": "power_in", GND: "power_in", SDA: "bidirectional", SCL: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TMP114";
  override referencePrefix = "U";
}

/**
 * Digital Temperature Sensor with I2C/SMBus Interface, 16 bits, ±0.3°C,  one-shot conversion, alert, nist traceable, EEPROM, WSON
 *
 * KiCad symbol: `Sensor_Temperature:TMP116xxDRV`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP?2x2mm?P0.65mm?EP1x1.6mm*.
 * @see https://www.ti.com/lit/ds/symlink/tmp116.pdf
 * Keywords: digital temperature sensor i2c smbus nist.
 * Default footprint: Package_SON:WSON-6-1EP_2x2mm_P0.65mm_EP1x1.6mm.
 */
export class TMP116xxDRV extends Component.withPins({
  "SCL": "1",
  "GND": "2",
  "ALERT": "3",
  "ADD0": "4",
  "V+": "5",
  "SDA": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCL: "input", GND: "power_in", ALERT: "open_collector", ADD0: "input", "V+": "power_in", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TMP116xxDRV";
  override referencePrefix = "U";
}

/**
 * Digital Temperature Sensor with I2C/SMBus Interface, 16 bits, ±0.3°C, one-shot conversion, alert, nist traceable, EEPROM, WSON
 *
 * KiCad symbol: `Sensor_Temperature:TMP117xxDRV`. Reference prefix: `U`.
 * Footprint filters: WSON*1EP?2x2mm?P0.65mm?EP1x1.6mm*.
 * @see https://www.ti.com/lit/ds/symlink/tmp117.pdf
 * Keywords: digital temperature sensor i2c smbus nist.
 * Default footprint: Package_SON:WSON-6-1EP_2x2mm_P0.65mm_EP1x1.6mm.
 */
export class TMP117xxDRV extends Component.withPins({
  "SCL": "1",
  "GND": "2",
  "ALERT": "3",
  "ADD0": "4",
  "V+": "5",
  "SDA": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SCL: "input", GND: "power_in", ALERT: "open_collector", ADD0: "input", "V+": "power_in", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TMP117xxDRV";
  override referencePrefix = "U";
}

/**
 * Digital Temperature Sensor with I2C/SMBus Interface, 16 bits, ±0.3°C, one-shot conversion, alert, nist traceable, EEPROM, DSBGA
 *
 * KiCad symbol: `Sensor_Temperature:TMP117xxYBG`. Reference prefix: `U`.
 * Footprint filters: Texas?DSBGA?6?0.95x1.488mm?Layout2x3?P0.4mm*.
 * @see https://www.ti.com/lit/ds/symlink/tmp117.pdf
 * Keywords: digital temperature sensor i2c smbus.
 * Default footprint: Package_BGA:Texas_DSBGA-6_0.95x1.488mm_Layout2x3_P0.4mm.
 */
export class TMP117xxYBG extends Component.withPins({
  "SDA": "A1",
  "SCL": "A2",
  "V+": "B1",
  "GND": "B2",
  "ADD0": "C1",
  "ALERT": "C2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", "V+": "power_in", GND: "power_in", ADD0: "input", ALERT: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TMP117xxYBG";
  override referencePrefix = "U";
}

/**
 * Ultra-High Accuracy, Low-Power, Digital Temperature Sensor With SMBus and I2C-Compatible Interface, DSBGA-6
 *
 * KiCad symbol: `Sensor_Temperature:TMP119AIYBGR`. Reference prefix: `U`.
 * Footprint filters: Texas?DSBGA?6?0.95x1.488mm?Layout2x3?P0.4mm*.
 * @see https://www.ti.com/lit/ds/symlink/tmp119.pdf
 * Keywords: digital temperature sensor i2c smbus.
 * Default footprint: Package_BGA:Texas_DSBGA-6_0.95x1.488mm_Layout2x3_P0.4mm.
 */
export class TMP119AIYBGR extends Component.withPins({
  "SDA": "A1",
  "SCL": "A2",
  "V+": "B1",
  "GND": "B2",
  "ADD0": "C1",
  "ALERT": "C2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", "V+": "power_in", GND: "power_in", ADD0: "input", ALERT: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TMP119AIYBGR";
  override referencePrefix = "U";
}

/**
 * 1-Wire digital temperature sensor and thermal watchdog with EEPROM, VSSOP-8
 *
 * KiCad symbol: `Sensor_Temperature:TMP1826DGK`. Reference prefix: `U`.
 * Footprint filters: VSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tmp1826.pdf
 * Keywords: temperature sensor 1-Wire EEPROM.
 * Default footprint: Package_SO:VSSOP-8_3x3mm_P0.65mm.
 */
export class TMP1826DGK extends Component.withPins({
  "V+": "1",
  "SDQ": "2",
  "ADDR": "3",
  "GND": "4",
  "IO3": "5",
  "IO0": "6",
  "IO1": "7",
  "~{ALERT}": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V+": "power_in", SDQ: "bidirectional", ADDR: "input", GND: "power_in", IO3: "open_collector", IO0: "open_collector", IO1: "open_collector", "~{ALERT}": "open_collector", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TMP1826DGK";
  override referencePrefix = "U";
}

/**
 * Analog thermistor temperature sensor, ±2.5C accuracy, -55C to +130C, SC-70-5
 *
 * KiCad symbol: `Sensor_Temperature:TMP20AIDCK`. Reference prefix: `U`.
 * Footprint filters: *SC?70*.
 * @see http://www.ti.com/lit/ds/symlink/tmp20.pdf
 * Keywords: temperature sensor thermistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class TMP20AIDCK extends Component.withPins({
  "NC": "1",
  "GND_2": "2",
  "V_{OUT}": "3",
  "V_{DD}": "4",
  "GND_5": "5",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC: "no_connect", GND_2: "power_in", "V_{OUT}": "output", "V_{DD}": "power_in", GND_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TMP20AIDCK";
  override referencePrefix = "U";
}

/**
 * Analog thermistor temperature sensor, ±2.5C accuracy, -55C to +130C, SOT-563-6
 *
 * KiCad symbol: `Sensor_Temperature:TMP20AIDRL`. Reference prefix: `U`.
 * Footprint filters: SOT?563*.
 * @see http://www.ti.com/lit/ds/symlink/tmp20.pdf
 * Keywords: temperature sensor thermistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-563.
 */
export class TMP20AIDRL extends Component.withPins({
  "NC_1": "1",
  "GND_2": "2",
  "V_{OUT}": "3",
  "V_{DD}": "4",
  "NC_5": "5",
  "GND_6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", GND_2: "power_in", "V_{OUT}": "output", "V_{DD}": "power_in", NC_5: "no_connect", GND_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TMP20AIDRL";
  override referencePrefix = "U";
}

/**
 * Low Voltage Temperature Sensor, SOIC-8
 *
 * KiCad symbol: `Sensor_Temperature:TMP36xS`. Reference prefix: `U`.
 * Footprint filters: SOIC?8*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/TMP35_36_37.pdf
 * Keywords: Temperature Sensor SOIC-8.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class TMP36xS extends Component.withPins({
  "V_{OUT}": "1",
  "GND": "4",
  "~{SHUTDOWN}": "5",
  "+Vs": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V_{OUT}": "output", GND: "power_in", "~{SHUTDOWN}": "input", "+Vs": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TMP36xS";
  override referencePrefix = "U";
}

/**
 * - Remote and Local TEMPERATURE SENSOR
 *
 * KiCad symbol: `Sensor_Temperature:TMP411`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, VSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com.cn/cn/lit/ds/symlink/tmp411.pdf
 * Keywords: Temperature sensor remote local i2c.
 */
export class TMP411 extends Component.withPins({
  "V+": "1",
  "D+": "2",
  "D-": "3",
  "~{THERM}": "4",
  "GND": "5",
  "~{ALERT}": "6",
  "SDA": "7",
  "SCL": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V+": "power_in", "D+": "passive", "D-": "passive", "~{THERM}": "open_collector", GND: "power_in", "~{ALERT}": "open_collector", SDA: "bidirectional", SCL: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TMP411";
  override referencePrefix = "U";
}

/**
 * Texas Instruments High-Accuracy Remote and Local Temperature Sensor with Pin-Programmable Bus Address, WQFN-10
 *
 * KiCad symbol: `Sensor_Temperature:TMP461xxRUN`. Reference prefix: `U`.
 * Footprint filters: Texas*RUN0010A*.
 * @see https://www.ti.com/lit/ds/symlink/tmp461.pdf
 * Keywords: Temperature sensor remote I2C TI.
 * Default footprint: Package_DFN_QFN:Texas_RUN0010A_WQFN-10_2x2mm_P0.5mm.
 */
export class TMP461xxRUN extends Component.withPins({
  "V+": "1",
  "D+": "2",
  "D-": "3",
  "~{THERM}": "4",
  "A0": "5",
  "GND": "6",
  "~{ALERT/THERM2}": "7",
  "SDA": "8",
  "SCL": "9",
  "A1": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V+": "power_in", "D+": "passive", "D-": "passive", "~{THERM}": "open_collector", A0: "passive", GND: "power_in", "~{ALERT/THERM2}": "open_collector", SDA: "bidirectional", SCL: "input", A1: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TMP461xxRUN";
  override referencePrefix = "U";
}

/**
 * Texas Instruments 5-Channel (4-Remote and 1-Local), High-Accuracy Temperature Sensor with Pin-Programmable Bus Address, VQFN-16
 *
 * KiCad symbol: `Sensor_Temperature:TMP464xxRGT`. Reference prefix: `U`.
 * Footprint filters: *QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/tmp464.pdf
 * Keywords: Temperature sensor remote I2C TI.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.68x1.68mm.
 */
export class TMP464xxRGT extends Component.withPins({
  "NC_1": "1",
  "NC_2": "2",
  "D4+": "3",
  "D3+": "4",
  "D2+": "5",
  "D1+": "6",
  "D-": "7",
  "GND_8": "8",
  "ADD": "9",
  "~{THERM}": "10",
  "~{THERM2}": "11",
  "SDA": "12",
  "SCL": "13",
  "V+": "14",
  "NC_15": "15",
  "NC_16": "16",
  "GND_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_2: "no_connect", "D4+": "passive", "D3+": "passive", "D2+": "passive", "D1+": "passive", "D-": "passive", GND_8: "power_in", ADD: "passive", "~{THERM}": "open_collector", "~{THERM2}": "open_collector", SDA: "bidirectional", SCL: "input", "V+": "power_in", NC_15: "no_connect", NC_16: "no_connect", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TMP464xxRGT";
  override referencePrefix = "U";
}

/**
 * Texas Instruments 9-Channel (8-Remote and 1-Local), High-Accuracy Temperature Sensor with Pin-Programmable Bus Address, VQFN-16
 *
 * KiCad symbol: `Sensor_Temperature:TMP468xxRGT`. Reference prefix: `U`.
 * Footprint filters: *QFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/tmp468.pdf
 * Keywords: Temperature sensor remote I2C TI.
 * Default footprint: Package_DFN_QFN:VQFN-16-1EP_3x3mm_P0.5mm_EP1.68x1.68mm.
 */
export class TMP468xxRGT extends Component.withPins({
  "D6+": "1",
  "D5+": "2",
  "D4+": "3",
  "D3+": "4",
  "D2+": "5",
  "D1+": "6",
  "D-": "7",
  "GND_8": "8",
  "ADD": "9",
  "~{THERM}": "10",
  "~{THERM2}": "11",
  "SDA": "12",
  "SCL": "13",
  "V+": "14",
  "D8+": "15",
  "D7+": "16",
  "GND_17": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "D6+": "passive", "D5+": "passive", "D4+": "passive", "D3+": "passive", "D2+": "passive", "D1+": "passive", "D-": "passive", GND_8: "power_in", ADD: "passive", "~{THERM}": "open_collector", "~{THERM2}": "open_collector", SDA: "bidirectional", SCL: "input", "V+": "power_in", "D8+": "passive", "D7+": "passive", GND_17: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TMP468xxRGT";
  override referencePrefix = "U";
}

/**
 * Digital temperature sensor, range -50 ... +150 °C, 0.5 K accuracy, SO-8
 *
 * KiCad symbol: `Sensor_Temperature:TSIC206-SO8`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://shop.bb-sensors.com/out/media/Datasheet_Digital_Semiconductor_temperatur_sensor_TSIC.pdf
 * Keywords: temperature digital.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class TSIC206_SO8 extends Component.withPins({
  "V+": "1",
  "Signal": "2",
  "NC_3": "3",
  "GND": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V+": "power_in", Signal: "output", NC_3: "no_connect", GND: "power_in", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TSIC206-SO8";
  override referencePrefix = "U";
}

/**
 * Digital temperature sensor, range -50 ... +150 °C, 0.5 K accuracy, TO-92
 *
 * KiCad symbol: `Sensor_Temperature:TSIC206-TO92`. Reference prefix: `U`.
 * Footprint filters: TO?92*.
 * @see https://shop.bb-sensors.com/out/media/Datasheet_Digital_Semiconductor_temperatur_sensor_TSIC.pdf
 * Keywords: temperature digital.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class TSIC206_TO92 extends Component.withPins({
  "V+": "1",
  "Signal": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V+": "power_in", Signal: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TSIC206-TO92";
  override referencePrefix = "U";
}

/**
 * Digital temperature sensor, range -50 ... +150 °C, 0.3 K accuracy, SO-8
 *
 * KiCad symbol: `Sensor_Temperature:TSIC306-SO8`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://shop.bb-sensors.com/out/media/Datasheet_Digital_Semiconductor_temperatur_sensor_TSIC.pdf
 * Keywords: temperature digital.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class TSIC306_SO8 extends Component.withPins({
  "V+": "1",
  "Signal": "2",
  "NC_3": "3",
  "GND": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V+": "power_in", Signal: "output", NC_3: "no_connect", GND: "power_in", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TSIC306-SO8";
  override referencePrefix = "U";
}

/**
 * Digital temperature sensor, range -50 ... +150 °C, 0.3 K accuracy, TO-92
 *
 * KiCad symbol: `Sensor_Temperature:TSIC306-TO92`. Reference prefix: `U`.
 * Footprint filters: TO?92*.
 * @see https://shop.bb-sensors.com/out/media/Datasheet_Digital_Semiconductor_temperatur_sensor_TSIC.pdf
 * Keywords: temperature digital.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class TSIC306_TO92 extends Component.withPins({
  "V+": "1",
  "Signal": "2",
  "GND": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "V+": "power_in", Signal: "output", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Temperature:TSIC306-TO92";
  override referencePrefix = "U";
}
