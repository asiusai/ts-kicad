// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Versatile Link Fiber Optic Transmitter
 *
 * KiCad symbol: `Fiber_Optic:AFBR-1624Z`. Reference prefix: `J`.
 * Footprint filters: Broadcom*AFBR*16xxZ*.
 * @see https://docs.broadcom.com/docs/AV02-4369EN
 * Keywords: Fiber optic transmitter.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AFBR_1624Z extends Component.withPins({
  /** Physical pin 1: VCCT; power_in. */
  "VCCT": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 3: VEET; power_in. */
  "VEET": "3",
  /** Physical pin 4: Data_in; input. */
  "Data_in": "4",
  /** Physical pin 5: HP; passive. */
  "HP_5": "5",
  /** Physical pin 8: HP; passive. */
  "HP_8": "8",
}) {
  override schema = "Fiber_Optic:AFBR-1624Z";
  override referencePrefix = "J";
}

/**
 * Versatile Link Fiber Optic Receiver
 *
 * KiCad symbol: `Fiber_Optic:AFBR-2624Z`. Reference prefix: `J`.
 * Footprint filters: Broadcom*AFBR*16xxZ*.
 * @see https://docs.broadcom.com/docs/AV02-4369EN
 * Keywords: fiber optic receiver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AFBR_2624Z extends Component.withPins({
  /** Physical pin 1: Data_Out; output. */
  "Data_Out": "1",
  /** Physical pin 2: VEER; power_in. */
  "VEER": "2",
  /** Physical pin 3: VCCR; power_in. */
  "VCCR": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC": "4",
  /** Physical pin 5: HP; passive. */
  "HP_5": "5",
  /** Physical pin 8: HP; passive. */
  "HP_8": "8",
}) {
  override schema = "Fiber_Optic:AFBR-2624Z";
  override referencePrefix = "J";
}

