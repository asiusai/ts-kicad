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
 */
export class LV25_P extends Component.withPins({
  "HV+": "1",
  "HV-": "3",
  "M": "4",
  "V+": "5",
  "V-": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "HV+": "input", "HV-": "input", M: "output", "V+": "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Sensor_Voltage:LV25-P";
  override referencePrefix = "U";
}
