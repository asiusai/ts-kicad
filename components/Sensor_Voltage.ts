// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * LEM Voltage transducer LV 25-P
 *
 * KiCad symbol: `Sensor_Voltage:LV25-P`. Reference prefix: `U`.
 * Footprint filters: LEM?LV25?P*.
 * @see https://www.lem.com/sites/default/files/products_datasheets/lv_25-p.pdf
 * Keywords: Voltage transducer.
 * Default footprint: Sensor_Voltage:LEM_LV25-P.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LV25_P extends Component.withPins({
  /** Physical pin 1: HV+; input. */
  "HV+": "1",
  /** Physical pin 3: HV-; input. */
  "HV-": "3",
  /** Physical pin 4: M; output. */
  "M": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
  /** Physical pin 6: V-; power_in. */
  "V-": "6",
}) {
  override schema = "Sensor_Voltage:LV25-P";
  override referencePrefix = "U";
}

