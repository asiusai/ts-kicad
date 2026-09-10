// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * ARM Cortex-M0+ MCU, 32MHz, 256KB Flash, 24KB RAM, 1.65-3.6V, 37 GPIO, LQFP-48
 *
 * KiCad symbol: `MCU_Renesas_Synergy_S1:R7FS12878xA01CFL`. Reference prefix: `U`.
 * Footprint filters: LQFP*7x7mm*P0.5mm*.
 * @see https://www.renesas.com/us/en/doc/products/renesas-synergy/doc/r01ds0309eu0100-synergy-s128.pdf
 * Keywords: 32-bit ARM Cortex-M0+ MCU Microcontroller.
 * Default footprint: Package_QFP:LQFP-48_7x7mm_P0.5mm.
 */
export class R7FS12878xA01CFL extends Component.withPins({
  "P400": "1",
  "P401": "2",
  "VCL": "3",
  "P215/XCIN": "4",
  "P214/XCOUT": "5",
  "VSS_6": "6",
  "P213/XTAL": "7",
  "P212/EXTAL": "8",
  "VCC_9": "9",
  "P409": "10",
  "P408": "11",
  "P407": "12",
  "VSS_USB": "13",
  "USB_DM/P915": "14",
  "USB_DP/P914": "15",
  "VCC_USB": "16",
  "VCC_USB_LDO": "17",
  "P206": "18",
  "RES": "19",
  "P201/MD": "20",
  "P200": "21",
  "P302": "22",
  "P301": "23",
  "SWCLK/P300": "24",
  "SWDIO/P108": "25",
  "P109": "26",
  "P110": "27",
  "P111": "28",
  "P112": "29",
  "VCC_30": "30",
  "VSS_31": "31",
  "P104": "32",
  "P103": "33",
  "P102": "34",
  "P101": "35",
  "P100": "36",
  "P500": "37",
  "P015": "38",
  "P014": "39",
  "P013": "40",
  "P012": "41",
  "AVCC0": "42",
  "AVSS0": "43",
  "P011/VREFL0": "44",
  "P010/VREFH0": "45",
  "P002": "46",
  "P001": "47",
  "P000": "48",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P400: "bidirectional", P401: "bidirectional", VCL: "passive", "P215/XCIN": "bidirectional", "P214/XCOUT": "bidirectional", VSS_6: "power_in", "P213/XTAL": "bidirectional", "P212/EXTAL": "bidirectional", VCC_9: "power_in", P409: "bidirectional", P408: "bidirectional", P407: "bidirectional", VSS_USB: "power_in", "USB_DM/P915": "bidirectional", "USB_DP/P914": "bidirectional", VCC_USB: "power_in", VCC_USB_LDO: "power_in", P206: "bidirectional", RES: "input", "P201/MD": "bidirectional", P200: "bidirectional", P302: "bidirectional", P301: "bidirectional", "SWCLK/P300": "bidirectional", "SWDIO/P108": "bidirectional", P109: "bidirectional", P110: "bidirectional", P111: "bidirectional", P112: "bidirectional", VCC_30: "power_in", VSS_31: "passive", P104: "bidirectional", P103: "bidirectional", P102: "bidirectional", P101: "bidirectional", P100: "bidirectional", P500: "bidirectional", P015: "bidirectional", P014: "bidirectional", P013: "bidirectional", P012: "bidirectional", AVCC0: "power_in", AVSS0: "power_in", "P011/VREFL0": "bidirectional", "P010/VREFH0": "bidirectional", P002: "bidirectional", P001: "bidirectional", P000: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Renesas_Synergy_S1:R7FS12878xA01CFL";
  override referencePrefix = "U";
}
