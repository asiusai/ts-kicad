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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TMF8820 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: GPIO0; tri_state. */
  "GPIO0": "3",
  /** Physical pin 4: INT; open_collector. */
  "INT": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: VDD; passive. */
  "VDD_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: EN; input. */
  "EN": "9",
  /** Physical pin 10: GPIO1; tri_state. */
  "GPIO1": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: VDD; passive. */
  "VDD_12": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TMF8821 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: GPIO0; tri_state. */
  "GPIO0": "3",
  /** Physical pin 4: INT; open_collector. */
  "INT": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: VDD; passive. */
  "VDD_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: EN; input. */
  "EN": "9",
  /** Physical pin 10: GPIO1; tri_state. */
  "GPIO1": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: VDD; passive. */
  "VDD_12": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TMF8828 extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD_1": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: GPIO0; tri_state. */
  "GPIO0": "3",
  /** Physical pin 4: INT; open_collector. */
  "INT": "4",
  /** Physical pin 5: SCL; input. */
  "SCL": "5",
  /** Physical pin 6: SDA; bidirectional. */
  "SDA": "6",
  /** Physical pin 7: VDD; passive. */
  "VDD_7": "7",
  /** Physical pin 8: GND; passive. */
  "GND_8": "8",
  /** Physical pin 9: EN; input. */
  "EN": "9",
  /** Physical pin 10: GPIO1; tri_state. */
  "GPIO1": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: VDD; passive. */
  "VDD_12": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class VL53L1CXV0FY1 extends Component.withPins({
  /** Physical pin 1: AVDDVCSEL; power_in. */
  "AVDDVCSEL": "1",
  /** Physical pin 2: AVSSVCSEL; power_in. */
  "AVSSVCSEL": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: XSHUT; input. */
  "XSHUT": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GPIO1; open_collector. */
  "GPIO1": "7",
  /** Physical pin 8: DNC; no_connect. */
  "DNC": "8",
  /** Physical pin 9: SDA; bidirectional. */
  "SDA": "9",
  /** Physical pin 10: SCL; input. */
  "SCL": "10",
  /** Physical pin 11: AVDD; power_in. */
  "AVDD": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class VL53L0CXV0DH1 extends Component.withPins({
  /** Physical pin 1: AVDDVCSEL; power_in. */
  "AVDDVCSEL": "1",
  /** Physical pin 2: AVSSVCSEL; power_in. */
  "AVSSVCSEL": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: XSHUT; input. */
  "XSHUT": "5",
  /** Physical pin 6: GND; passive. */
  "GND_6": "6",
  /** Physical pin 7: GPIO1; open_collector. */
  "GPIO1": "7",
  /** Physical pin 8: DNC; no_connect. */
  "DNC": "8",
  /** Physical pin 9: SDA; bidirectional. */
  "SDA": "9",
  /** Physical pin 10: SCL; input. */
  "SCL": "10",
  /** Physical pin 11: AVDD; power_in. */
  "AVDD": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
}) {
  override schema = "Sensor_Distance:VL53L0CXV0DH1";
  override referencePrefix = "U";
}

