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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS2401P extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: DQ; bidirectional. */
  "DQ": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DS2401Z extends Component.withPins({
  /** Physical pin 1: DQ; bidirectional. */
  "DQ": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
}) {
  override schema = "Memory_UniqueID:DS2401Z";
  override referencePrefix = "U";
}

