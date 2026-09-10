// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 100mW, Blue Laser Diode (450nm), TO-56
 *
 * KiCad symbol: `Diode_Laser:PLT5_450B`. Reference prefix: `LD`.
 * Footprint filters: LaserDiode*TO56*.
 * @see https://look.ams-osram.com/m/711b74151583f43/original/PLT5-450B.pdf
 * Keywords: opto laserdiode.
 * Default footprint: OptoDevice:LaserDiode_TO56-3.
 */
export class PLT5_450B extends Component.withPins({
  "A": "1",
  "NC": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A: "passive", NC: "no_connect", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Diode_Laser:PLT5_450B";
  override referencePrefix = "LD";
}

/**
 * Green Laser Diode (520nm), TO-38
 *
 * KiCad symbol: `Diode_Laser:PL520`. Reference prefix: `LD`.
 * Footprint filters: LaserDiode*TO38ICut*.
 * @see http://www.osram-os.com/Graphics/XPic7/00234693_0.pdf/PL%20520.pdf
 * Keywords: opto laserdiode.
 * Default footprint: OptoDevice:LaserDiode_TO38ICut-3.
 */
export class PL520 extends Component.withPins({
  "A": "1",
  "NC": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A: "passive", NC: "no_connect", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Diode_Laser:PL520";
  override referencePrefix = "LD";
}

/**
 * 60mW, Cyan Laser Diode (488nm), TO-56
 *
 * KiCad symbol: `Diode_Laser:PLT5_488`. Reference prefix: `LD`.
 * Footprint filters: LaserDiode*TO56*.
 * @see https://look.ams-osram.com/m/451ee5087173918f/original/PLT5-488.pdf
 * Keywords: opto laserdiode.
 * Default footprint: OptoDevice:LaserDiode_TO56-3.
 */
export class PLT5_488 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P3: "passive", ...opts.pinTypes } });
  }
  override schema = "Diode_Laser:PLT5_488";
  override referencePrefix = "LD";
}

/**
 * 10mW, Green Laser Diode (515nm), TO-56
 *
 * KiCad symbol: `Diode_Laser:PLT5_510`. Reference prefix: `LD`.
 * Footprint filters: LaserDiode*TO56*.
 * @see https://look.ams-osram.com/m/2562f8ca3a03a793/original/PLT5-510.pdf
 * Keywords: opto laserdiode.
 * Default footprint: OptoDevice:LaserDiode_TO56-3.
 */
export class PLT5_510 extends Component.withPins({
  "A": "1",
  "NC": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A: "passive", NC: "no_connect", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Diode_Laser:PLT5_510";
  override referencePrefix = "LD";
}

/**
 * Pulsed Laser Diode in Plastic Package 25W Peak Power
 *
 * KiCad symbol: `Diode_Laser:SPL_PL90`. Reference prefix: `LD`.
 * Footprint filters: LED*5.0mm*.
 * @see https://look.ams-osram.com/m/2e6f6e5edf55ddfe/original/SPL-PL90.pdf
 * Keywords: opto laserdiode.
 * Default footprint: LED_THT:LED_D5.0mm.
 */
export class SPL_PL90 extends Component.withPins({
  "C": "1",
  "A": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "Diode_Laser:SPL_PL90";
  override referencePrefix = "LD";
}
