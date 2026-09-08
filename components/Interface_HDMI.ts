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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADV7611 extends Component.withPins({
  /** Physical pin 1: HPA_A/INT2; bidirectional. */
  "HPA_A/INT2": "1",
  /** Physical pin 2: CVDD; power_in. */
  "CVDD_2": "2",
  /** Physical pin 3: RXA_C-; input. */
  "RXA_C-": "3",
  /** Physical pin 4: RXA_C+; input. */
  "RXA_C+": "4",
  /** Physical pin 5: TVDD; power_in. */
  "TVDD_5": "5",
  /** Physical pin 6: RXA_0-; input. */
  "RXA_0-": "6",
  /** Physical pin 7: RXA_0+; input. */
  "RXA_0+": "7",
  /** Physical pin 8: TVDD; power_in. */
  "TVDD_8": "8",
  /** Physical pin 9: RXA_1-; input. */
  "RXA_1-": "9",
  /** Physical pin 10: RXA_1+; input. */
  "RXA_1+": "10",
  /** Physical pin 11: TVDD; power_in. */
  "TVDD_11": "11",
  /** Physical pin 12: RXA_2-; input. */
  "RXA_2-": "12",
  /** Physical pin 13: RXA_2+; input. */
  "RXA_2+": "13",
  /** Physical pin 14: CVDD; power_in. */
  "CVDD_14": "14",
  /** Physical pin 15: P23; output. */
  "P23": "15",
  /** Physical pin 16: P22; output. */
  "P22": "16",
  /** Physical pin 17: P21; output. */
  "P21": "17",
  /** Physical pin 18: P20; output. */
  "P20": "18",
  /** Physical pin 19: P19; output. */
  "P19": "19",
  /** Physical pin 20: P18; output. */
  "P18": "20",
  /** Physical pin 21: P17; output. */
  "P17": "21",
  /** Physical pin 22: P16; output. */
  "P16": "22",
  /** Physical pin 23: DVDDIO; power_in. */
  "DVDDIO_23": "23",
  /** Physical pin 24: DVDD; power_in. */
  "DVDD_24": "24",
  /** Physical pin 25: LLC; output. */
  "LLC": "25",
  /** Physical pin 26: P15; output. */
  "P15": "26",
  /** Physical pin 27: P14; output. */
  "P14": "27",
  /** Physical pin 28: P13; output. */
  "P13": "28",
  /** Physical pin 29: P12; output. */
  "P12": "29",
  /** Physical pin 30: P11; output. */
  "P11": "30",
  /** Physical pin 31: P10; output. */
  "P10": "31",
  /** Physical pin 32: P9; output. */
  "P9": "32",
  /** Physical pin 33: P8; output. */
  "P8": "33",
  /** Physical pin 34: DVDDIO; power_in. */
  "DVDDIO_34": "34",
  /** Physical pin 35: P7; output. */
  "P7": "35",
  /** Physical pin 36: P6; output. */
  "P6": "36",
  /** Physical pin 37: P5; output. */
  "P5": "37",
  /** Physical pin 38: P4; output. */
  "P4": "38",
  /** Physical pin 39: P3; output. */
  "P3": "39",
  /** Physical pin 40: DVDD; power_in. */
  "DVDD_40": "40",
  /** Physical pin 41: P2; output. */
  "P2": "41",
  /** Physical pin 42: P1; output. */
  "P1": "42",
  /** Physical pin 43: P0; output. */
  "P0": "43",
  /** Physical pin 44: DVDDIO; power_in. */
  "DVDDIO_44": "44",
  /** Physical pin 45: DE; output. */
  "DE": "45",
  /** Physical pin 46: HS; output. */
  "HS": "46",
  /** Physical pin 47: VS/FIELD/ALSB; bidirectional. */
  "VS/FIELD/ALSB": "47",
  /** Physical pin 48: AP; output. */
  "AP": "48",
  /** Physical pin 49: SCLK/INT2; output. */
  "SCLK/INT2": "49",
  /** Physical pin 50: LRCLK; output. */
  "LRCLK": "50",
  /** Physical pin 51: MCLK/INT2; output. */
  "MCLK/INT2": "51",
  /** Physical pin 52: DVDD; power_in. */
  "DVDD_52": "52",
  /** Physical pin 53: SCL; input. */
  "SCL": "53",
  /** Physical pin 54: SDA; bidirectional. */
  "SDA": "54",
  /** Physical pin 55: INT1; output. */
  "INT1": "55",
  /** Physical pin 56: ~{RESET}; input. */
  "~{RESET}": "56",
  /** Physical pin 57: PVDD; power_in. */
  "PVDD": "57",
  /** Physical pin 58: XTALP; input. */
  "XTALP": "58",
  /** Physical pin 59: XTALN; input. */
  "XTALN": "59",
  /** Physical pin 60: DVDD; power_in. */
  "DVDD_60": "60",
  /** Physical pin 61: CEC; bidirectional. */
  "CEC": "61",
  /** Physical pin 62: DDCA_SCL; input. */
  "DDCA_SCL": "62",
  /** Physical pin 63: DDCA_SDA; bidirectional. */
  "DDCA_SDA": "63",
  /** Physical pin 64: RXA_5V; input. */
  "RXA_5V": "64",
  /** Physical pin 65: GND; power_in. */
  "GND": "65",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPD12S520DBT extends Component.withPins({
  /** Physical pin 1: 5V_SUPPLY; power_in. */
  "5V_SUPPLY": "1",
  /** Physical pin 2: LV_SUPPLY; power_in. */
  "LV_SUPPLY": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: TMDS_D2+; passive. */
  "TMDS_D2+_4": "4",
  /** Physical pin 5: TMDS_GND; passive. */
  "TMDS_GND_5": "5",
  /** Physical pin 6: TMDS_D2-; passive. */
  "TMDS_D2-_6": "6",
  /** Physical pin 7: TMDS_D1+; passive. */
  "TMDS_D1+_7": "7",
  /** Physical pin 8: TMDS_GND; passive. */
  "TMDS_GND_8": "8",
  /** Physical pin 9: TMDS_D1-; passive. */
  "TMDS_D1-_9": "9",
  /** Physical pin 10: TMDS_D0+; passive. */
  "TMDS_D0+_10": "10",
  /** Physical pin 11: TMDS_GND; passive. */
  "TMDS_GND_11": "11",
  /** Physical pin 12: TMDS_D0-; passive. */
  "TMDS_D0-_12": "12",
  /** Physical pin 13: TMDS_CK+; passive. */
  "TMDS_CK+_13": "13",
  /** Physical pin 14: TMDS_GND; passive. */
  "TMDS_GND_14": "14",
  /** Physical pin 15: TMDS_CK-; passive. */
  "TMDS_CK-_15": "15",
  /** Physical pin 16: CE_REMOTE_IN; bidirectional. */
  "CE_REMOTE_IN": "16",
  /** Physical pin 17: DDC_CLK_IN; bidirectional. */
  "DDC_CLK_IN": "17",
  /** Physical pin 18: DDC_DAT_IN; bidirectional. */
  "DDC_DAT_IN": "18",
  /** Physical pin 19: HOTPLUG_DET_IN; bidirectional. */
  "HOTPLUG_DET_IN": "19",
  /** Physical pin 20: HOTPLUG_DET_OUT; bidirectional. */
  "HOTPLUG_DET_OUT": "20",
  /** Physical pin 21: DDC_DAT_OUT; bidirectional. */
  "DDC_DAT_OUT": "21",
  /** Physical pin 22: DDC_CLK_OUT; bidirectional. */
  "DDC_CLK_OUT": "22",
  /** Physical pin 23: CE_REMOTE_OUT; bidirectional. */
  "CE_REMOTE_OUT": "23",
  /** Physical pin 24: TMDS_CK-; passive. */
  "TMDS_CK-_24": "24",
  /** Physical pin 25: TMDS_GND; passive. */
  "TMDS_GND_25": "25",
  /** Physical pin 26: TMDS_CK+; passive. */
  "TMDS_CK+_26": "26",
  /** Physical pin 27: TMDS_D0-; passive. */
  "TMDS_D0-_27": "27",
  /** Physical pin 28: TMDS_GND; passive. */
  "TMDS_GND_28": "28",
  /** Physical pin 29: TMDS_D0+; passive. */
  "TMDS_D0+_29": "29",
  /** Physical pin 30: TMDS_D1-; passive. */
  "TMDS_D1-_30": "30",
  /** Physical pin 31: TMDS_GND; passive. */
  "TMDS_GND_31": "31",
  /** Physical pin 32: TMDS_D1+; passive. */
  "TMDS_D1+_32": "32",
  /** Physical pin 33: TMDS_D2-; passive. */
  "TMDS_D2-_33": "33",
  /** Physical pin 34: TMDS_GND; passive. */
  "TMDS_GND_34": "34",
  /** Physical pin 35: TMDS_D2+; passive. */
  "TMDS_D2+_35": "35",
  /** Physical pin 36: GND; passive. */
  "GND_36": "36",
  /** Physical pin 37: ESD_BYP; passive. */
  "ESD_BYP": "37",
  /** Physical pin 38: NC; no_connect. */
  "NC": "38",
}) {
  override schema = "Interface_HDMI:TPD12S520DBT";
  override referencePrefix = "U";
}

