// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * ARM,M33,SubGHz Radio,+20dBm,1MB,Flash,288KRAM,Z-Wave,QFN-40
 *
 * KiCad symbol: `MCU_Trident:T32CZ20B20GQ40`. Reference prefix: `U`.
 * Footprint filters: *QFN*5x5mm*P0.4mm*EP3.3*.
 * @see https://tridentiot.com/wp-content/uploads/2024/11/DS-ZW-0001-01-T32CZ20-Datasheet.pdf
 * Keywords: Trident IoT Z-Wave ARM MCU CM33 Radio 900MHz SoC CPU.
 * Default footprint: Package_DFN_QFN:VQFN-40-1EP_5x5mm_P0.4mm_EP3.3x3.3mm.
 */
export class T32CZ20B20GQ40 extends Component.withPins({
  "DVSS": "1",
  "DCDC_FB": "2",
  "LDO1OUT": "3",
  "VDD_PA": "4",
  "VSS_RFA": "5",
  "RFO": "6",
  "RFIP": "7",
  "RFIN": "8",
  "VSS_RFB": "9",
  "VDD_ANA": "10",
  "VDD_PLL": "11",
  "XI32M": "12",
  "XO32M": "13",
  "GP31": "14",
  "GP30": "15",
  "GP29": "16",
  "GP28": "17",
  "GP23": "18",
  "GP22": "19",
  "GP21": "20",
  "GP20": "21",
  "GP17_U0TX": "22",
  "GP16_U0RX": "23",
  "GP15": "24",
  "GP14": "25",
  "GP11_SWDIO": "26",
  "GP10_SWCLK": "27",
  "GP09": "28",
  "GP08": "29",
  "GP07": "30",
  "GP06": "31",
  "GP05": "32",
  "GP04": "33",
  "GP01": "34",
  "GP00": "35",
  "RST_N": "36",
  "VDD_IO": "37",
  "VDD_DIG": "38",
  "VBAT": "39",
  "DCDC_LX": "40",
  "PAD": "41",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DVSS: "power_in", DCDC_FB: "passive", LDO1OUT: "passive", VDD_PA: "power_in", VSS_RFA: "power_in", RFO: "bidirectional", RFIP: "bidirectional", RFIN: "bidirectional", VSS_RFB: "power_in", VDD_ANA: "power_in", VDD_PLL: "power_in", XI32M: "input", XO32M: "output", GP31: "bidirectional", GP30: "bidirectional", GP29: "bidirectional", GP28: "bidirectional", GP23: "bidirectional", GP22: "bidirectional", GP21: "bidirectional", GP20: "bidirectional", GP17_U0TX: "bidirectional", GP16_U0RX: "bidirectional", GP15: "bidirectional", GP14: "bidirectional", GP11_SWDIO: "bidirectional", GP10_SWCLK: "bidirectional", GP09: "bidirectional", GP08: "bidirectional", GP07: "bidirectional", GP06: "bidirectional", GP05: "bidirectional", GP04: "bidirectional", GP01: "bidirectional", GP00: "bidirectional", RST_N: "input", VDD_IO: "power_in", VDD_DIG: "power_in", VBAT: "power_in", DCDC_LX: "passive", PAD: "power_in", ...opts.pinTypes } });
  }
  override schema = "MCU_Trident:T32CZ20B20GQ40";
  override referencePrefix = "U";
}
