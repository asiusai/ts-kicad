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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XTR111AxDGQ extends Component.withPins({
  /** Physical pin 1: VSP; power_in. */
  "VSP": "1",
  /** Physical pin 2: IS; output. */
  "IS": "2",
  /** Physical pin 3: VG; output. */
  "VG": "3",
  /** Physical pin 4: REGS; input. */
  "REGS": "4",
  /** Physical pin 5: REGF; output. */
  "REGF": "5",
  /** Physical pin 6: VIN; input. */
  "VIN": "6",
  /** Physical pin 7: SET; passive. */
  "SET": "7",
  /** Physical pin 8: ~{EF}; open_collector. */
  "~{EF}": "8",
  /** Physical pin 9: OD; input. */
  "OD": "9",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XTR115U extends Component.withPins({
  /** Physical pin 1: VREF; output. */
  "VREF": "1",
  /** Physical pin 2: IIN; input. */
  "IIN": "2",
  /** Physical pin 3: IRET; input. */
  "IRET": "3",
  /** Physical pin 4: IO; passive. */
  "IO": "4",
  /** Physical pin 5: E; passive. */
  "E": "5",
  /** Physical pin 6: B; output. */
  "B": "6",
  /** Physical pin 7: V+; output. */
  "V+": "7",
  /** Physical pin 8: VREG; output. */
  "VREG": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class XTR116U extends Component.withPins({
  /** Physical pin 1: VREF; output. */
  "VREF": "1",
  /** Physical pin 2: IIN; input. */
  "IIN": "2",
  /** Physical pin 3: IRET; input. */
  "IRET": "3",
  /** Physical pin 4: IO; passive. */
  "IO": "4",
  /** Physical pin 5: E; passive. */
  "E": "5",
  /** Physical pin 6: B; output. */
  "B": "6",
  /** Physical pin 7: V+; output. */
  "V+": "7",
  /** Physical pin 8: VREG; output. */
  "VREG": "8",
}) {
  override schema = "Interface_CurrentLoop:XTR116U";
  override referencePrefix = "U";
}

