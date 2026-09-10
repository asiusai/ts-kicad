// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Versatile Link Fiber Optic Transmitter
 *
 * KiCad symbol: `Fiber_Optic:AFBR-1624Z`. Reference prefix: `J`.
 * Footprint filters: Broadcom*AFBR*16xxZ*.
 * @see https://docs.broadcom.com/docs/AV02-4369EN
 * Keywords: Fiber optic transmitter.
 */
export class AFBR_1624Z extends Component.withPins({
  "VCCT": "1",
  "NC": "2",
  "VEET": "3",
  "Data_in": "4",
  "HP_5": "5",
  "HP_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCCT: "power_in", NC: "no_connect", VEET: "power_in", Data_in: "input", HP_5: "passive", HP_8: "passive", ...opts.pinTypes } });
  }
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
 */
export class AFBR_2624Z extends Component.withPins({
  "Data_Out": "1",
  "VEER": "2",
  "VCCR": "3",
  "NC": "4",
  "HP_5": "5",
  "HP_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Data_Out: "output", VEER: "power_in", VCCR: "power_in", NC: "no_connect", HP_5: "passive", HP_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Fiber_Optic:AFBR-2624Z";
  override referencePrefix = "J";
}
