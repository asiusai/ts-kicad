// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Low Power 165MHz HDMI Receiver, LQFP-64
 *
 * KiCad symbol: `Interface_HDMI:ADV7611`. Reference prefix: `U`.
 * Footprint filters: LQFP*1EP*10x10mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/adv7611.pdf
 * Keywords: hdmi.
 * Default footprint: Package_QFP:LQFP-64-1EP_10x10mm_P0.5mm_EP5x5mm.
 */
export class ADV7611 extends Component.withPins({
  "HPA_A/INT2": "1",
  "CVDD_2": "2",
  "RXA_C-": "3",
  "RXA_C+": "4",
  "TVDD_5": "5",
  "RXA_0-": "6",
  "RXA_0+": "7",
  "TVDD_8": "8",
  "RXA_1-": "9",
  "RXA_1+": "10",
  "TVDD_11": "11",
  "RXA_2-": "12",
  "RXA_2+": "13",
  "CVDD_14": "14",
  "P23": "15",
  "P22": "16",
  "P21": "17",
  "P20": "18",
  "P19": "19",
  "P18": "20",
  "P17": "21",
  "P16": "22",
  "DVDDIO_23": "23",
  "DVDD_24": "24",
  "LLC": "25",
  "P15": "26",
  "P14": "27",
  "P13": "28",
  "P12": "29",
  "P11": "30",
  "P10": "31",
  "P9": "32",
  "P8": "33",
  "DVDDIO_34": "34",
  "P7": "35",
  "P6": "36",
  "P5": "37",
  "P4": "38",
  "P3": "39",
  "DVDD_40": "40",
  "P2": "41",
  "P1": "42",
  "P0": "43",
  "DVDDIO_44": "44",
  "DE": "45",
  "HS": "46",
  "VS/FIELD/ALSB": "47",
  "AP": "48",
  "SCLK/INT2": "49",
  "LRCLK": "50",
  "MCLK/INT2": "51",
  "DVDD_52": "52",
  "SCL": "53",
  "SDA": "54",
  "INT1": "55",
  "~{RESET}": "56",
  "PVDD": "57",
  "XTALP": "58",
  "XTALN": "59",
  "DVDD_60": "60",
  "CEC": "61",
  "DDCA_SCL": "62",
  "DDCA_SDA": "63",
  "RXA_5V": "64",
  "GND": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "HPA_A/INT2": "bidirectional", CVDD_2: "power_in", "RXA_C-": "input", "RXA_C+": "input", TVDD_5: "power_in", "RXA_0-": "input", "RXA_0+": "input", TVDD_8: "power_in", "RXA_1-": "input", "RXA_1+": "input", TVDD_11: "power_in", "RXA_2-": "input", "RXA_2+": "input", CVDD_14: "power_in", P23: "output", P22: "output", P21: "output", P20: "output", P19: "output", P18: "output", P17: "output", P16: "output", DVDDIO_23: "power_in", DVDD_24: "power_in", LLC: "output", P15: "output", P14: "output", P13: "output", P12: "output", P11: "output", P10: "output", P9: "output", P8: "output", DVDDIO_34: "power_in", P7: "output", P6: "output", P5: "output", P4: "output", P3: "output", DVDD_40: "power_in", P2: "output", P1: "output", P0: "output", DVDDIO_44: "power_in", DE: "output", HS: "output", "VS/FIELD/ALSB": "bidirectional", AP: "output", "SCLK/INT2": "output", LRCLK: "output", "MCLK/INT2": "output", DVDD_52: "power_in", SCL: "input", SDA: "bidirectional", INT1: "output", "~{RESET}": "input", PVDD: "power_in", XTALP: "input", XTALN: "input", DVDD_60: "power_in", CEC: "bidirectional", DDCA_SCL: "input", DDCA_SDA: "bidirectional", RXA_5V: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Interface_HDMI:ADV7611";
  override referencePrefix = "U";
}

/**
 * HDMI Receiver Port Protection and Interface Device, TSSOP-38
 *
 * KiCad symbol: `Interface_HDMI:TPD12S520DBT`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x9.7mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tpd12s520.pdf
 * Keywords: hdmi.
 * Default footprint: Package_SO:TSSOP-38_4.4x9.7mm_P0.5mm.
 */
export class TPD12S520DBT extends Component.withPins({
  "5V_SUPPLY": "1",
  "LV_SUPPLY": "2",
  "GND_3": "3",
  "TMDS_D2+_4": "4",
  "TMDS_GND_5": "5",
  "TMDS_D2-_6": "6",
  "TMDS_D1+_7": "7",
  "TMDS_GND_8": "8",
  "TMDS_D1-_9": "9",
  "TMDS_D0+_10": "10",
  "TMDS_GND_11": "11",
  "TMDS_D0-_12": "12",
  "TMDS_CK+_13": "13",
  "TMDS_GND_14": "14",
  "TMDS_CK-_15": "15",
  "CE_REMOTE_IN": "16",
  "DDC_CLK_IN": "17",
  "DDC_DAT_IN": "18",
  "HOTPLUG_DET_IN": "19",
  "HOTPLUG_DET_OUT": "20",
  "DDC_DAT_OUT": "21",
  "DDC_CLK_OUT": "22",
  "CE_REMOTE_OUT": "23",
  "TMDS_CK-_24": "24",
  "TMDS_GND_25": "25",
  "TMDS_CK+_26": "26",
  "TMDS_D0-_27": "27",
  "TMDS_GND_28": "28",
  "TMDS_D0+_29": "29",
  "TMDS_D1-_30": "30",
  "TMDS_GND_31": "31",
  "TMDS_D1+_32": "32",
  "TMDS_D2-_33": "33",
  "TMDS_GND_34": "34",
  "TMDS_D2+_35": "35",
  "GND_36": "36",
  "ESD_BYP": "37",
  "NC": "38",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "5V_SUPPLY": "power_in", LV_SUPPLY: "power_in", GND_3: "power_in", "TMDS_D2+_4": "passive", TMDS_GND_5: "passive", "TMDS_D2-_6": "passive", "TMDS_D1+_7": "passive", TMDS_GND_8: "passive", "TMDS_D1-_9": "passive", "TMDS_D0+_10": "passive", TMDS_GND_11: "passive", "TMDS_D0-_12": "passive", "TMDS_CK+_13": "passive", TMDS_GND_14: "passive", "TMDS_CK-_15": "passive", CE_REMOTE_IN: "bidirectional", DDC_CLK_IN: "bidirectional", DDC_DAT_IN: "bidirectional", HOTPLUG_DET_IN: "bidirectional", HOTPLUG_DET_OUT: "bidirectional", DDC_DAT_OUT: "bidirectional", DDC_CLK_OUT: "bidirectional", CE_REMOTE_OUT: "bidirectional", "TMDS_CK-_24": "passive", TMDS_GND_25: "passive", "TMDS_CK+_26": "passive", "TMDS_D0-_27": "passive", TMDS_GND_28: "passive", "TMDS_D0+_29": "passive", "TMDS_D1-_30": "passive", TMDS_GND_31: "passive", "TMDS_D1+_32": "passive", "TMDS_D2-_33": "passive", TMDS_GND_34: "passive", "TMDS_D2+_35": "passive", GND_36: "passive", ESD_BYP: "passive", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Interface_HDMI:TPD12S520DBT";
  override referencePrefix = "U";
}
