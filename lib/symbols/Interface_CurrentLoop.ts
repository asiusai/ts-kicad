// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 0-20mA/4-20mA Current Loop Transmitter, Precision Voltage-To-Current, MSOP-10
 *
 * KiCad symbol: `Interface_CurrentLoop:XTR111AxDGQ`. Reference prefix: `U`.
 * Footprint filters: MSOP*1EP*3x3mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/xtr111.pdf
 * Keywords: 0-20mA 4-20mA Current Loop Transmitter Voltage To Current.
 * Default footprint: Package_SO:MSOP-10-1EP_3x3mm_P0.5mm_EP2.2x3.1mm_Mask1.83x1.89mm_ThermalVias.
 */
export class XTR111AxDGQ extends Component.withPins({
  "VSP": "1",
  "IS": "2",
  "VG": "3",
  "REGS": "4",
  "REGF": "5",
  "VIN": "6",
  "SET": "7",
  "~{EF}": "8",
  "OD": "9",
  "GND_10": "10",
  "GND_11": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSP: "power_in", IS: "output", VG: "output", REGS: "input", REGF: "output", VIN: "input", SET: "passive", "~{EF}": "open_collector", OD: "input", GND_10: "power_in", GND_11: "passive", ...opts.pinTypes } });
  }
  override schema = "Interface_CurrentLoop:XTR111AxDGQ";
  override referencePrefix = "U";
}

/**
 * 4-20mA Current Loop Transmitter, VREF 2.5V, SO-8
 *
 * KiCad symbol: `Interface_CurrentLoop:XTR115U`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/xtr115.pdf
 * Keywords: 4-20mA Current Loop Transmitter.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class XTR115U extends Component.withPins({
  "VREF": "1",
  "IIN": "2",
  "IRET": "3",
  "IO": "4",
  "E": "5",
  "B": "6",
  "V+": "7",
  "VREG": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VREF: "output", IIN: "input", IRET: "input", IO: "passive", E: "passive", B: "output", "V+": "output", VREG: "output", ...opts.pinTypes } });
  }
  override schema = "Interface_CurrentLoop:XTR115U";
  override referencePrefix = "U";
}

/**
 * 4-20mA Current Loop Transmitter, VREF 4.096V, SO-8
 *
 * KiCad symbol: `Interface_CurrentLoop:XTR116U`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/xtr115.pdf
 * Keywords: 4-20mA Current Loop Transmitter.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class XTR116U extends Component.withPins({
  "VREF": "1",
  "IIN": "2",
  "IRET": "3",
  "IO": "4",
  "E": "5",
  "B": "6",
  "V+": "7",
  "VREG": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VREF: "output", IIN: "input", IRET: "input", IO: "passive", E: "passive", B: "output", "V+": "output", VREG: "output", ...opts.pinTypes } });
  }
  override schema = "Interface_CurrentLoop:XTR116U";
  override referencePrefix = "U";
}
