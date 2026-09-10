// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Silicon Serial Number, TSOC-6
 *
 * KiCad symbol: `Memory_UniqueID:DS2401P`. Reference prefix: `U`.
 * Footprint filters: TSOC*.
 * @see http://pdfserv.maximintegrated.com/en/ds/DS2401.pdf
 * Keywords: OneWire 1-Wire 1Wire Maxim Dallas ID.
 * Default footprint: Package_SO_J-Lead:TSOC-6_3.76x3.94mm_P1.27mm.
 */
export class DS2401P extends Component.withPins({
  "GND": "1",
  "DQ": "2",
  "NC_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", DQ: "bidirectional", NC_3: "no_connect", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Memory_UniqueID:DS2401P";
  override referencePrefix = "U";
}

/**
 * Silicon Serial Number, SOT-223
 *
 * KiCad symbol: `Memory_UniqueID:DS2401Z`. Reference prefix: `U`.
 * Footprint filters: SOT?223*.
 * @see http://pdfserv.maximintegrated.com/en/ds/DS2401.pdf
 * Keywords: OneWire 1-Wire 1Wire Maxim Dallas ID.
 * Default footprint: Package_TO_SOT_SMD:SOT-223.
 */
export class DS2401Z extends Component.withPins({
  "DQ": "1",
  "GND_2": "2",
  "NC": "3",
  "GND_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DQ: "bidirectional", GND_2: "power_in", NC: "no_connect", GND_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Memory_UniqueID:DS2401Z";
  override referencePrefix = "U";
}
