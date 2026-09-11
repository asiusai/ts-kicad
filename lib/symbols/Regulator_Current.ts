// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Hot-Swap Current Limiter Controller, SOT223
 *
 * KiCad symbol: `Regulator_Current:HV100K5-G`. Reference prefix: `U`.
 * Footprint filters: SOT?223*TabPin2*.
 * @see http://ww1.microchip.com/downloads/en/devicedoc/hv100%20b060513.pdf
 * Keywords: Hot-Swap Current Limiter.
 * Default footprint: Package_TO_SOT_SMD:SOT-223-3_TabPin2.
 */
export class HV100K5_G extends Component.withPins({
  "VPP": "1",
  "VNN": "2",
  "GATE": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VPP: "power_in", VNN: "power_in", GATE: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Current:HV100K5-G";
  override referencePrefix = "U";
}

/**
 * Hot-Swap Current Limiter Controller, SOT223
 *
 * KiCad symbol: `Regulator_Current:HV101K5-G`. Reference prefix: `U`.
 * Footprint filters: SOT?223*TabPin2*.
 * @see http://www.supertex.com/pdf/datasheets/HV100.pdf
 * Keywords: Hot-Swap Current Limiter.
 * Default footprint: Package_TO_SOT_SMD:SOT-223-3_TabPin2.
 */
export class HV101K5_G extends Component.withPins({
  "VPP": "1",
  "VNN": "2",
  "GATE": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VPP: "power_in", VNN: "power_in", GATE: "output", ...opts.pinTypes } });
  }
  override schema = "Regulator_Current:HV101K5-G";
  override referencePrefix = "U";
}
