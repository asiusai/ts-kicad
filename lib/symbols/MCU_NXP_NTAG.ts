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
 */
export class NHS3100 extends Component.withPins({
  "P0/WAKEUP": "1",
  "P1/CLKOUT": "2",
  "P2/SSEL": "3",
  "P6/SCLK": "4",
  "P8/MISO": "5",
  "P9/MOSI": "6",
  "VDDBAT": "7",
  "VSS_8": "8",
  "~{RESET}": "9",
  "reserved": "10",
  "P4/SCL": "11",
  "P5/SDA": "12",
  "P7/CT16B_M1": "13",
  "P3/CT16B_M0": "14",
  "P10/SWCLK": "15",
  "P11/SWDIO": "16",
  "VSS_17": "17",
  "VSS_18": "18",
  "LB": "19",
  "LA": "20",
  "VSS_21": "21",
  "VSS_22": "22",
  "VSS_23": "23",
  "VSS_24": "24",
  "VSS_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "P0/WAKEUP": "bidirectional", "P1/CLKOUT": "bidirectional", "P2/SSEL": "bidirectional", "P6/SCLK": "bidirectional", "P8/MISO": "bidirectional", "P9/MOSI": "bidirectional", VDDBAT: "power_in", VSS_8: "power_in", "~{RESET}": "input", reserved: "no_connect", "P4/SCL": "bidirectional", "P5/SDA": "bidirectional", "P7/CT16B_M1": "bidirectional", "P3/CT16B_M0": "bidirectional", "P10/SWCLK": "bidirectional", "P11/SWDIO": "bidirectional", VSS_17: "passive", VSS_18: "passive", LB: "passive", LA: "passive", VSS_21: "passive", VSS_22: "passive", VSS_23: "passive", VSS_24: "passive", VSS_25: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_NXP_NTAG:NHS3100";
  override referencePrefix = "U";
}
