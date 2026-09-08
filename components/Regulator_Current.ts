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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HV100K5_G extends Component.withPins({
  /** Physical pin 1: VPP; power_in. */
  "VPP": "1",
  /** Physical pin 2: VNN; power_in. */
  "VNN": "2",
  /** Physical pin 3: GATE; output. */
  "GATE": "3",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HV101K5_G extends Component.withPins({
  /** Physical pin 1: VPP; power_in. */
  "VPP": "1",
  /** Physical pin 2: VNN; power_in. */
  "VNN": "2",
  /** Physical pin 3: GATE; output. */
  "GATE": "3",
}) {
  override schema = "Regulator_Current:HV101K5-G";
  override referencePrefix = "U";
}

