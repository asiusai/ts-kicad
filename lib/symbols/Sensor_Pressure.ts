// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Gauge pressure sensor, 0 to 15PSI, 5V supply, 0.2% accuracy, integrated signal conditioning, excellent media compatibility
 *
 * KiCad symbol: `Sensor_Pressure:40PC015G`. Reference prefix: `U`.
 * @see http://www.honeywellscportal.com//index.php?ci_id=138832
 * Keywords: gage gauge pressure sensor.
 */
export class _40PC015G extends Component.withPins({
  "Vcc": "1",
  "GND": "2",
  "Vout": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcc: "power_in", GND: "power_in", Vout: "output", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Pressure:40PC015G";
  override referencePrefix = "U";
}

/**
 * Gauge pressure sensor, 0 to 100PSI, 5V supply, 0.2% accuracy, integrated signal conditioning, excellent media compatibility
 *
 * KiCad symbol: `Sensor_Pressure:40PC100G`. Reference prefix: `U`.
 * @see http://www.honeywellscportal.com//index.php?ci_id=138832
 * Keywords: gage gauge pressure sensor.
 */
export class _40PC100G extends Component.withPins({
  "Vcc": "1",
  "GND": "2",
  "Vout": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcc: "power_in", GND: "power_in", Vout: "output", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Pressure:40PC100G";
  override referencePrefix = "U";
}

/**
 * Gauge pressure sensor, 0 to 150PSI, 5V supply, 0.2% accuracy, integrated signal conditioning, excellent media compatibility
 *
 * KiCad symbol: `Sensor_Pressure:40PC150G`. Reference prefix: `U`.
 * @see http://www.honeywellscportal.com//index.php?ci_id=138832
 * Keywords: gage gauge pressure sensor.
 */
export class _40PC150G extends Component.withPins({
  "Vcc": "1",
  "GND": "2",
  "Vout": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcc: "power_in", GND: "power_in", Vout: "output", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Pressure:40PC150G";
  override referencePrefix = "U";
}

/**
 * Gauge pressure sensor, 0 to 250PSI, 5V supply, 0.2% accuracy, integrated signal conditioning, excellent media compatibility
 *
 * KiCad symbol: `Sensor_Pressure:40PC250G`. Reference prefix: `U`.
 * @see http://www.honeywellscportal.com//index.php?ci_id=138832
 * Keywords: gage gauge pressure sensor.
 */
export class _40PC250G extends Component.withPins({
  "Vcc": "1",
  "GND": "2",
  "Vout": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vcc: "power_in", GND: "power_in", Vout: "output", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class ABPxxxxxxxxx0 extends Component.withPins({
  "GND": "1",
  "SDA": "5",
  "SCL": "6",
  "VCC": "2",
  "INT": "3",
  "NC": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", SDA: "bidirectional", SCL: "bidirectional", VCC: "power_in", INT: "output", NC: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class ABPxxxxxxxxxA extends Component.withPins({
  "GND": "1",
  "NC_2": "2",
  "V_{out}": "3",
  "NC_4": "4",
  "NC_5": "5",
  "VCC": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", NC_2: "no_connect", "V_{out}": "output", NC_4: "no_connect", NC_5: "no_connect", VCC: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ABPxxxxxxxxxS extends Component.withPins({
  "GND": "1",
  "MISO": "5",
  "SCLK": "6",
  "VCC": "2",
  "~{CS}": "3",
  "NC": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", MISO: "bidirectional", SCLK: "input", VCC: "power_in", "~{CS}": "input", NC: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class BMP280 extends Component.withPins({
  "GND_1": "1",
  "CSB": "2",
  "SDI": "3",
  "SCK": "4",
  "SDO": "5",
  "VDDIO": "6",
  "GND_7": "7",
  "VDD": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND_1: "power_in", CSB: "input", SDI: "bidirectional", SCK: "input", SDO: "bidirectional", VDDIO: "power_in", GND_7: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ILPS28QSW extends Component.withPins({
  "SDA": "1",
  "AH1/QVAR1": "2",
  "SCL": "3",
  "AH2/QVAR2": "4",
  "GND": "5",
  "VDD": "6",
  "PAD2LID": "7",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SDA: "bidirectional", "AH1/QVAR1": "input", SCL: "input", "AH2/QVAR2": "input", GND: "power_in", VDD: "power_in", PAD2LID: "passive", ...opts.pinTypes } });
  }
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
 */
export class LPS22DF extends Component.withPins({
  "Vdd_IO": "1",
  "SCL": "2",
  "GND_3": "3",
  "SDA": "4",
  "SA0": "5",
  "~{CS}": "6",
  "INT_DRDY": "7",
  "GND_IO": "8",
  "GND_9": "9",
  "VDD": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vdd_IO: "power_in", SCL: "input", GND_3: "passive", SDA: "bidirectional", SA0: "input", "~{CS}": "input", INT_DRDY: "output", GND_IO: "power_in", GND_9: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LPS25HB extends Component.withPins({
  "Vdd_IO": "1",
  "SCL": "2",
  "GND_3": "3",
  "SDA": "4",
  "SA0": "5",
  "~{CS}": "6",
  "INT_DRDY": "7",
  "GND_8": "8",
  "GND_9": "9",
  "VDD": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vdd_IO: "power_in", SCL: "input", GND_3: "passive", SDA: "bidirectional", SA0: "input", "~{CS}": "input", INT_DRDY: "output", GND_8: "power_in", GND_9: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LPS22HB extends Component.withPins({
  "Vdd_IO": "1",
  "SCL": "2",
  "GND_3": "3",
  "SDA": "4",
  "SA0": "5",
  "~{CS}": "6",
  "INT_DRDY": "7",
  "GND_8": "8",
  "GND_9": "9",
  "VDD": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vdd_IO: "power_in", SCL: "input", GND_3: "passive", SDA: "bidirectional", SA0: "input", "~{CS}": "input", INT_DRDY: "output", GND_8: "power_in", GND_9: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LPS22HH extends Component.withPins({
  "Vdd_IO": "1",
  "SCL": "2",
  "GND_3": "3",
  "SDA": "4",
  "SA0": "5",
  "~{CS}": "6",
  "INT_DRDY": "7",
  "GND_8": "8",
  "GND_9": "9",
  "VDD": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vdd_IO: "power_in", SCL: "input", GND_3: "passive", SDA: "bidirectional", SA0: "input", "~{CS}": "input", INT_DRDY: "output", GND_8: "power_in", GND_9: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MPL115A1 extends Component.withPins({
  "VDD": "1",
  "CAP": "2",
  "GND": "3",
  "~{SHDN}": "4",
  "~{CS}": "5",
  "DOUT": "6",
  "DIN": "7",
  "SCLK": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", CAP: "passive", GND: "power_in", "~{SHDN}": "input", "~{CS}": "input", DOUT: "output", DIN: "input", SCLK: "input", ...opts.pinTypes } });
  }
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
 */
export class MPL3115A2 extends Component.withPins({
  "VDD": "1",
  "CAP": "2",
  "GND": "3",
  "VDDIO": "4",
  "INT2": "5",
  "INT1": "6",
  "SDL": "7",
  "SCL": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", CAP: "passive", GND: "power_in", VDDIO: "power_in", INT2: "open_collector", INT1: "open_collector", SDL: "bidirectional", SCL: "input", ...opts.pinTypes } });
  }
  override schema = "Sensor_Pressure:MPL3115A2";
  override referencePrefix = "U";
}

/**
 * Absolute pressure sensor, 15 to 115kPa, analog output, integrated signal conditioning, temperature compensated, SO package
 *
 * KiCad symbol: `Sensor_Pressure:MPXA6115A`. Reference prefix: `U`.
 * @see https://www.nxp.com/docs/en/data-sheet/MPXA6115A.pdf
 * Keywords: absolute pressure sensor.
 */
export class MPXA6115A extends Component.withPins({
  "NC_1": "1",
  "Vcc": "2",
  "GND": "3",
  "Vout": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", Vcc: "power_in", GND: "power_in", Vout: "output", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Pressure:MPXA6115A";
  override referencePrefix = "U";
}

/**
 * Absolute pressure sensor, 15 to 115kPa, analog output, integrated signal conditioning, temperature compensated, media resistant gel, SO package
 *
 * KiCad symbol: `Sensor_Pressure:MPXAZ6115A`. Reference prefix: `U`.
 * @see https://www.nxp.com/docs/en/data-sheet/MPXA6115A.pdf
 * Keywords: absolute pressure sensor.
 */
export class MPXAZ6115A extends Component.withPins({
  "NC_1": "1",
  "Vcc": "2",
  "GND": "3",
  "Vout": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", Vcc: "power_in", GND: "power_in", Vout: "output", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Pressure:MPXAZ6115A";
  override referencePrefix = "U";
}

/**
 * Absolute pressure sensor, 15 to 115kPa, analog output, integrated signal conditioning, temperature compensated, SSO package
 *
 * KiCad symbol: `Sensor_Pressure:MPXH6115A`. Reference prefix: `U`.
 * @see https://www.nxp.com/docs/en/data-sheet/MPXA6115A.pdf
 * Keywords: absolute pressure sensor.
 */
export class MPXH6115A extends Component.withPins({
  "NC_1": "1",
  "Vcc": "2",
  "GND": "3",
  "Vout": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", Vcc: "power_in", GND: "power_in", Vout: "output", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Sensor_Pressure:MPXH6115A";
  override referencePrefix = "U";
}

/**
 * Absolute pressure sensor, 15 to 115kPa, analog output, integrated signal conditioning, temperature compensated, media resistant gel, SSO package
 *
 * KiCad symbol: `Sensor_Pressure:MPXHZ6115A`. Reference prefix: `U`.
 * @see https://www.nxp.com/docs/en/data-sheet/MPXA6115A.pdf
 * Keywords: absolute pressure sensor.
 */
export class MPXHZ6115A extends Component.withPins({
  "NC_1": "1",
  "Vcc": "2",
  "GND": "3",
  "Vout": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "NC_8": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", Vcc: "power_in", GND: "power_in", Vout: "output", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", NC_8: "no_connect", ...opts.pinTypes } });
  }
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
 */
export class MS5525DSO extends Component.withPins({
  "SIN-_1": "1",
  "SOUT-_2": "2",
  "SIN-_3": "3",
  "SOUT-_4": "4",
  "SDO": "5",
  "SDI/SDA": "6",
  "SCLK/SCL": "7",
  "CSB": "8",
  "SUPPLY-": "9",
  "PS": "10",
  "SUPPLY+_11": "11",
  "SOUT+_12": "12",
  "SUPPLY+_13": "13",
  "SOUT+_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SIN-_1": "passive", "SOUT-_2": "passive", "SIN-_3": "passive", "SOUT-_4": "passive", SDO: "output", "SDI/SDA": "input", "SCLK/SCL": "input", CSB: "input", "SUPPLY-": "power_in", PS: "input", "SUPPLY+_11": "passive", "SOUT+_12": "passive", "SUPPLY+_13": "power_in", "SOUT+_14": "passive", ...opts.pinTypes } });
  }
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
 */
export class MS5607_02BA extends Component.withPins({
  "VDD": "1",
  "PS": "2",
  "GND": "3",
  "CSB_4": "4",
  "CSB_5": "5",
  "SDO": "6",
  "SDI/SDA": "7",
  "SCLK": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", PS: "input", GND: "power_in", CSB_4: "input", CSB_5: "input", SDO: "output", "SDI/SDA": "bidirectional", SCLK: "input", ...opts.pinTypes } });
  }
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
 */
export class MS5611_01BA extends Component.withPins({
  "VDD": "1",
  "PS": "2",
  "GND": "3",
  "CSB_4": "4",
  "CSB_5": "5",
  "SDO": "6",
  "SDI/SDA": "7",
  "SCLK": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", PS: "input", GND: "power_in", CSB_4: "input", CSB_5: "input", SDO: "output", "SDI/SDA": "bidirectional", SCLK: "input", ...opts.pinTypes } });
  }
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
 */
export class MS5837_xxBA extends Component.withPins({
  "GND": "1",
  "VDD": "2",
  "SCL": "3",
  "SDA": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", VDD: "power_in", SCL: "passive", SDA: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class WSEN_PADS_2511020213301 extends Component.withPins({
  "Vdd_IO": "1",
  "SCL": "2",
  "GND_3": "3",
  "SDA": "4",
  "SA0": "5",
  "~{CS}": "6",
  "INT_DRDY": "7",
  "GND_8": "8",
  "GND_9": "9",
  "VDD": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Vdd_IO: "power_in", SCL: "input", GND_3: "passive", SDA: "bidirectional", SA0: "input", "~{CS}": "input", INT_DRDY: "output", GND_8: "power_in", GND_9: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class XGZP6859D extends Component.withPins({
  "NC_1": "1",
  "NC_3": "3",
  "SDA": "4",
  "SCL": "5",
  "VDD": "2",
  "GND": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_3: "no_connect", SDA: "bidirectional", SCL: "input", VDD: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class XGZP6897D extends Component.withPins({
  "NC_1": "1",
  "NC_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "VDD": "2",
  "SDA": "6",
  "SCL": "7",
  "GND": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_3: "no_connect", NC_4: "no_connect", NC_5: "no_connect", VDD: "power_in", SDA: "bidirectional", SCL: "passive", GND: "power_in", ...opts.pinTypes } });
  }
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
 */
export class XGZP6899D extends Component.withPins({
  "NC_1": "1",
  "NC_5": "5",
  "NC_7": "7",
  "NC_8": "8",
  "GND": "2",
  "SCL": "3",
  "SDA": "4",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_5: "no_connect", NC_7: "no_connect", NC_8: "no_connect", GND: "power_in", SCL: "passive", SDA: "bidirectional", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Pressure:XGZP6899D";
  override referencePrefix = "U";
}
