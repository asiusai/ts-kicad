// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Temperature logger, VQFN-24
 *
 * KiCad symbol: `MCU_NXP_NTAG:NHS3100`. Reference prefix: `U`.
 * Footprint filters: HVQFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/NHS3100.pdf
 * Keywords: NFC Cortex-M0.
 * Default footprint: Package_DFN_QFN:HVQFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class NHS3100 extends Component.withPins({
  /** Physical pin 1: P0/WAKEUP; bidirectional. */
  "P0/WAKEUP": "1",
  /** Physical pin 2: P1/CLKOUT; bidirectional. */
  "P1/CLKOUT": "2",
  /** Physical pin 3: P2/SSEL; bidirectional. */
  "P2/SSEL": "3",
  /** Physical pin 4: P6/SCLK; bidirectional. */
  "P6/SCLK": "4",
  /** Physical pin 5: P8/MISO; bidirectional. */
  "P8/MISO": "5",
  /** Physical pin 6: P9/MOSI; bidirectional. */
  "P9/MOSI": "6",
  /** Physical pin 7: VDDBAT; power_in. */
  "VDDBAT": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS_8": "8",
  /** Physical pin 9: ~{RESET}; input. */
  "~{RESET}": "9",
  /** Physical pin 10: reserved; no_connect. */
  "reserved": "10",
  /** Physical pin 11: P4/SCL; bidirectional. */
  "P4/SCL": "11",
  /** Physical pin 12: P5/SDA; bidirectional. */
  "P5/SDA": "12",
  /** Physical pin 13: P7/CT16B_M1; bidirectional. */
  "P7/CT16B_M1": "13",
  /** Physical pin 14: P3/CT16B_M0; bidirectional. */
  "P3/CT16B_M0": "14",
  /** Physical pin 15: P10/SWCLK; bidirectional. */
  "P10/SWCLK": "15",
  /** Physical pin 16: P11/SWDIO; bidirectional. */
  "P11/SWDIO": "16",
  /** Physical pin 17: VSS; passive. */
  "VSS_17": "17",
  /** Physical pin 18: VSS; passive. */
  "VSS_18": "18",
  /** Physical pin 19: LB; passive. */
  "LB": "19",
  /** Physical pin 20: LA; passive. */
  "LA": "20",
  /** Physical pin 21: VSS; passive. */
  "VSS_21": "21",
  /** Physical pin 22: VSS; passive. */
  "VSS_22": "22",
  /** Physical pin 23: VSS; passive. */
  "VSS_23": "23",
  /** Physical pin 24: VSS; passive. */
  "VSS_24": "24",
  /** Physical pin 25: VSS; passive. */
  "VSS_25": "25",
}) {
  override schema = "MCU_NXP_NTAG:NHS3100";
  override referencePrefix = "U";
}

