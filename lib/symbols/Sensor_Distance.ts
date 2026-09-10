// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 5m distance ranging ToF sensor, 3x3 zones, LGA-12
 *
 * KiCad symbol: `Sensor_Distance:TMF8820`. Reference prefix: `U`.
 * Footprint filters: AMS*OLGA12*.
 * @see https://ams.com/documents/20143/6015057/TMF882X_DS000693_8-00.pdf
 * Keywords: TMF882x ToF.
 * Default footprint: Sensor_Distance:AMS_OLGA12.
 */
export class TMF8820 extends Component.withPins({
  "VDD_1": "1",
  "GND_2": "2",
  "GPIO0": "3",
  "INT": "4",
  "SCL": "5",
  "SDA": "6",
  "VDD_7": "7",
  "GND_8": "8",
  "EN": "9",
  "GPIO1": "10",
  "GND_11": "11",
  "VDD_12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", GND_2: "power_in", GPIO0: "tri_state", INT: "open_collector", SCL: "input", SDA: "bidirectional", VDD_7: "passive", GND_8: "passive", EN: "input", GPIO1: "tri_state", GND_11: "passive", VDD_12: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Distance:TMF8820";
  override referencePrefix = "U";
}

/**
 * 5m distance ranging ToF sensor, 3x3, 4x4, 3x6 zones, LGA-12
 *
 * KiCad symbol: `Sensor_Distance:TMF8821`. Reference prefix: `U`.
 * Footprint filters: AMS*OLGA12*.
 * @see https://ams.com/documents/20143/6015057/TMF882X_DS000693_8-00.pdf
 * Keywords: TMF882x ToF.
 * Default footprint: Sensor_Distance:AMS_OLGA12.
 */
export class TMF8821 extends Component.withPins({
  "VDD_1": "1",
  "GND_2": "2",
  "GPIO0": "3",
  "INT": "4",
  "SCL": "5",
  "SDA": "6",
  "VDD_7": "7",
  "GND_8": "8",
  "EN": "9",
  "GPIO1": "10",
  "GND_11": "11",
  "VDD_12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", GND_2: "power_in", GPIO0: "tri_state", INT: "open_collector", SCL: "input", SDA: "bidirectional", VDD_7: "passive", GND_8: "passive", EN: "input", GPIO1: "tri_state", GND_11: "passive", VDD_12: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Distance:TMF8821";
  override referencePrefix = "U";
}

/**
 * 5m distance ranging ToF sensor, 3x3, 4x4, 3x6, 8x8 zones, LGA-12
 *
 * KiCad symbol: `Sensor_Distance:TMF8828`. Reference prefix: `U`.
 * Footprint filters: AMS*OLGA12*.
 * @see https://ams.com/documents/20143/6015057/TMF882X_DS000693_8-00.pdf
 * Keywords: TMF882x ToF.
 * Default footprint: Sensor_Distance:AMS_OLGA12.
 */
export class TMF8828 extends Component.withPins({
  "VDD_1": "1",
  "GND_2": "2",
  "GPIO0": "3",
  "INT": "4",
  "SCL": "5",
  "SDA": "6",
  "VDD_7": "7",
  "GND_8": "8",
  "EN": "9",
  "GPIO1": "10",
  "GND_11": "11",
  "VDD_12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD_1: "power_in", GND_2: "power_in", GPIO0: "tri_state", INT: "open_collector", SCL: "input", SDA: "bidirectional", VDD_7: "passive", GND_8: "passive", EN: "input", GPIO1: "tri_state", GND_11: "passive", VDD_12: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Distance:TMF8828";
  override referencePrefix = "U";
}

/**
 * 4m distance ranging ToF sensor, Optical LGA12
 *
 * KiCad symbol: `Sensor_Distance:VL53L1CXV0FY1`. Reference prefix: `U`.
 * Footprint filters: ST*VL53L1x*.
 * @see https://www.st.com/resource/en/datasheet/vl53l1x.pdf
 * Keywords: VL53L1x ToF.
 * Default footprint: Sensor_Distance:ST_VL53L1x.
 */
export class VL53L1CXV0FY1 extends Component.withPins({
  "AVDDVCSEL": "1",
  "AVSSVCSEL": "2",
  "GND_3": "3",
  "GND_4": "4",
  "XSHUT": "5",
  "GND_6": "6",
  "GPIO1": "7",
  "DNC": "8",
  "SDA": "9",
  "SCL": "10",
  "AVDD": "11",
  "GND_12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AVDDVCSEL: "power_in", AVSSVCSEL: "power_in", GND_3: "power_in", GND_4: "passive", XSHUT: "input", GND_6: "passive", GPIO1: "open_collector", DNC: "no_connect", SDA: "bidirectional", SCL: "input", AVDD: "power_in", GND_12: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Distance:VL53L1CXV0FY1";
  override referencePrefix = "U";
}

/**
 * 2m distance ranging ToF sensor, Optical LGA12
 *
 * KiCad symbol: `Sensor_Distance:VL53L0CXV0DH1`. Reference prefix: `U`.
 * Footprint filters: ST*VL53L1x*.
 * @see https://www.st.com/resource/en/datasheet/vl53l0x.pdf
 * Keywords: VL53L0x ToF.
 * Default footprint: Sensor_Distance:ST_VL53L1x.
 */
export class VL53L0CXV0DH1 extends Component.withPins({
  "AVDDVCSEL": "1",
  "AVSSVCSEL": "2",
  "GND_3": "3",
  "GND_4": "4",
  "XSHUT": "5",
  "GND_6": "6",
  "GPIO1": "7",
  "DNC": "8",
  "SDA": "9",
  "SCL": "10",
  "AVDD": "11",
  "GND_12": "12",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { AVDDVCSEL: "power_in", AVSSVCSEL: "power_in", GND_3: "power_in", GND_4: "passive", XSHUT: "input", GND_6: "passive", GPIO1: "open_collector", DNC: "no_connect", SDA: "bidirectional", SCL: "input", AVDD: "power_in", GND_12: "passive", ...opts.pinTypes } });
  }
  override schema = "Sensor_Distance:VL53L0CXV0DH1";
  override referencePrefix = "U";
}
