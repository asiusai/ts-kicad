// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * ARM Cortex-M4 SimpleLink High-Performance Sub-1GHz Wireless MCU, 48MHz, 352KB Flash, 80KB SRAM, 8KB Cache SRAM, 1.8-3.6V, 30 GPIO, VQFN-48
 *
 * KiCad symbol: `MCU_Texas_SimpleLink:CC1312R1F3RGZ`. Reference prefix: `U`.
 * Footprint filters: VQFN*1EP*7x7mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/cc1312r.pdf
 * Keywords: 32-bit ARM Cortex-M4 MCU Microcontroller.
 * Default footprint: Package_DFN_QFN:VQFN-48-1EP_7x7mm_P0.5mm_EP5.15x5.15mm.
 */
export class CC1312R1F3RGZ extends Component.withPins({
  "RF_P": "1",
  "RF_N": "2",
  "RX_TX": "3",
  "X32K_Q1": "4",
  "X32K_Q2": "5",
  "DIO_1": "6",
  "DIO_2": "7",
  "DIO_3": "8",
  "DIO_4": "9",
  "DIO_5": "10",
  "DIO_6": "11",
  "DIO_7": "12",
  "VDDS2": "13",
  "DIO_8": "14",
  "DIO_9": "15",
  "DIO_10": "16",
  "DIO_11": "17",
  "DIO_12": "18",
  "DIO_13": "19",
  "DIO_14": "20",
  "DIO_15": "21",
  "VDDS3": "22",
  "DCOUPL": "23",
  "JTAG_TMSC": "24",
  "JTAG_TCKC": "25",
  "DIO_16/JTAG_TDO": "26",
  "DIO_17/JTAG_TDI": "27",
  "DIO_18": "28",
  "DIO_19": "29",
  "DIO_20": "30",
  "DIO_21": "31",
  "DIO_22": "32",
  "DCDC_SW": "33",
  "VDDS_DCDC": "34",
  "~{RESET}": "35",
  "DIO_23": "36",
  "DIO_24": "37",
  "DIO_25": "38",
  "DIO_26": "39",
  "DIO_27": "40",
  "DIO_28": "41",
  "DIO_29": "42",
  "DIO_30": "43",
  "VDDS": "44",
  "VDDR": "45",
  "X48M_N": "46",
  "X48M_P": "47",
  "VDDR_RF": "48",
  "GND": "49",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RF_P: "passive", RF_N: "passive", RX_TX: "passive", X32K_Q1: "input", X32K_Q2: "input", DIO_1: "bidirectional", DIO_2: "bidirectional", DIO_3: "bidirectional", DIO_4: "bidirectional", DIO_5: "bidirectional", DIO_6: "bidirectional", DIO_7: "bidirectional", VDDS2: "power_in", DIO_8: "bidirectional", DIO_9: "bidirectional", DIO_10: "bidirectional", DIO_11: "bidirectional", DIO_12: "bidirectional", DIO_13: "bidirectional", DIO_14: "bidirectional", DIO_15: "bidirectional", VDDS3: "power_in", DCOUPL: "power_out", JTAG_TMSC: "bidirectional", JTAG_TCKC: "input", "DIO_16/JTAG_TDO": "bidirectional", "DIO_17/JTAG_TDI": "bidirectional", DIO_18: "bidirectional", DIO_19: "bidirectional", DIO_20: "bidirectional", DIO_21: "bidirectional", DIO_22: "bidirectional", DCDC_SW: "power_out", VDDS_DCDC: "power_in", "~{RESET}": "input", DIO_23: "bidirectional", DIO_24: "bidirectional", DIO_25: "bidirectional", DIO_26: "bidirectional", DIO_27: "bidirectional", DIO_28: "bidirectional", DIO_29: "bidirectional", DIO_30: "bidirectional", VDDS: "power_in", VDDR: "power_in", X48M_N: "input", X48M_P: "input", VDDR_RF: "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Texas_SimpleLink:CC1312R1F3RGZ";
  override referencePrefix = "U";
}
