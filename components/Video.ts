// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Low Cost RGB to NTSC/PAL Encoder with Luma Trap Port
 *
 * KiCad symbol: `Video:AD725`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD725.pdf
 * Keywords: Video.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD725 extends Component.withPins({
  /** Physical pin 1: NTSC/PAL; input. */
  "NTSC/PAL": "1",
  /** Physical pin 2: AGND; power_in. */
  "AGND": "2",
  /** Physical pin 3: 4FSC_CLK; input. */
  "4FSC_CLK": "3",
  /** Physical pin 4: AVCC; power_in. */
  "AVCC": "4",
  /** Physical pin 5: CE; power_in. */
  "CE": "5",
  /** Physical pin 6: RED; input. */
  "RED": "6",
  /** Physical pin 7: GREEN; input. */
  "GREEN": "7",
  /** Physical pin 8: BLUE; input. */
  "BLUE": "8",
  /** Physical pin 9: CHROM_OUT; output. */
  "CHROM_OUT": "9",
  /** Physical pin 10: CVBS_OUT; output. */
  "CVBS_OUT": "10",
  /** Physical pin 11: LUM_OUT; output. */
  "LUM_OUT": "11",
  /** Physical pin 12: TRAP; input. */
  "TRAP": "12",
  /** Physical pin 13: DGND; power_in. */
  "DGND": "13",
  /** Physical pin 14: DVCC; power_in. */
  "DVCC": "14",
  /** Physical pin 15: VSYNC; input. */
  "VSYNC": "15",
  /** Physical pin 16: HSYNC; input. */
  "HSYNC": "16",
}) {
  override schema = "Video:AD725";
  override referencePrefix = "U";
}

/**
 * Video DAC (32 MHz), SOIC/TSSOP-28
 *
 * KiCad symbol: `Video:AD9708AR`. Reference prefix: `U`.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD9708.pdf
 * Keywords: DAC CNA VIDEO.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD9708AR extends Component.withPins({
  /** Physical pin 1: DB7; input. */
  "DB7": "1",
  /** Physical pin 2: DB6; input. */
  "DB6": "2",
  /** Physical pin 3: DB5; input. */
  "DB5": "3",
  /** Physical pin 4: DB4; input. */
  "DB4": "4",
  /** Physical pin 5: DB3; input. */
  "DB3": "5",
  /** Physical pin 6: DB2; input. */
  "DB2": "6",
  /** Physical pin 7: DB1; input. */
  "DB1": "7",
  /** Physical pin 8: DB0; input. */
  "DB0": "8",
  /** Physical pin 15: SLEEP; input. */
  "SLEEP": "15",
  /** Physical pin 16: REFLO; power_in. */
  "REFLO": "16",
  /** Physical pin 17: REFIO; bidirectional. */
  "REFIO": "17",
  /** Physical pin 18: FS_ADJ; output. */
  "FS_ADJ": "18",
  /** Physical pin 19: COMP1; bidirectional. */
  "COMP1": "19",
  /** Physical pin 20: ACOM; power_in. */
  "ACOM": "20",
  /** Physical pin 21: IOUTB; output. */
  "IOUTB": "21",
  /** Physical pin 22: IOUTA; output. */
  "IOUTA": "22",
  /** Physical pin 23: COMP2; bidirectional. */
  "COMP2": "23",
  /** Physical pin 24: AVDD; power_in. */
  "AVDD": "24",
  /** Physical pin 26: DCOM; power_in. */
  "DCOM": "26",
  /** Physical pin 27: DVDD; power_in. */
  "DVDD": "27",
  /** Physical pin 28: Clock; input. */
  "Clock": "28",
}) {
  override schema = "Video:AD9708AR";
  override referencePrefix = "U";
}

/**
 * CCD Signal Processor, 20MHz 10bits, CSPBGA-64
 *
 * KiCad symbol: `Video:AD9891`. Reference prefix: `U`.
 * Footprint filters: BGA*9.0x9.0mm*Layout10x10*P0.8mm*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD9891_9895.pdf
 * Keywords: CCD Signal Processor.
 * Default footprint: Package_BGA:BGA-64_9.0x9.0mm_Layout10x10_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD9891 extends Component.withPins({
  /** Physical pin A1: VD; bidirectional. */
  "VD": "A1",
  /** Physical pin A2: DVDD; power_in. */
  "DVDD": "A2",
  /** Physical pin A3: MSHUT; output. */
  "MSHUT": "A3",
  /** Physical pin A4: SDI; input. */
  "SDI": "A4",
  /** Physical pin A5: REFT; output. */
  "REFT": "A5",
  /** Physical pin A6: REFB; output. */
  "REFB": "A6",
  /** Physical pin A7: BYP3; output. */
  "BYP3": "A7",
  /** Physical pin A8: CDD-IN; input. */
  "CDD-IN": "A8",
  /** Physical pin A9: BYP1; output. */
  "BYP1": "A9",
  /** Physical pin A10: AVDD1; power_in. */
  "AVDD1": "A10",
  /** Physical pin B1: HD; bidirectional. */
  "HD": "B1",
  /** Physical pin B2: DVSS; power_in. */
  "DVSS": "B2",
  /** Physical pin B3: STROBE; output. */
  "STROBE": "B3",
  /** Physical pin B4: SCK; input. */
  "SCK": "B4",
  /** Physical pin B5: SL; input. */
  "SL": "B5",
  /** Physical pin B6: AVSS2; power_in. */
  "AVSS2": "B6",
  /** Physical pin B7: AVDD2; power_in. */
  "AVDD2": "B7",
  /** Physical pin B8: BYP2; output. */
  "BYP2": "B8",
  /** Physical pin B9: AVSS1; power_in. */
  "AVSS1": "B9",
  /** Physical pin B10: TCVDD; power_in. */
  "TCVDD": "B10",
  /** Physical pin C1: SYNC; input. */
  "SYNC": "C1",
  /** Physical pin C2: LD/FD; output. */
  "LD/FD": "C2",
  /** Physical pin C9: TCVSS; power_in. */
  "TCVSS": "C9",
  /** Physical pin C10: CLI; input. */
  "CLI": "C10",
  /** Physical pin D1: DCLK; output. */
  "DCLK": "D1",
  /** Physical pin D2: PBLK/CLPOB; output. */
  "PBLK/CLPOB": "D2",
  /** Physical pin D9: RG; output. */
  "RG": "D9",
  /** Physical pin D10: CLO; output. */
  "CLO": "D10",
  /** Physical pin E9: RGVSS; power_in. */
  "RGVSS": "E9",
  /** Physical pin E10: RGVDD; power_in. */
  "RGVDD": "E10",
  /** Physical pin F1: D1; output. */
  "D1": "F1",
  /** Physical pin F2: D0/SD0; output. */
  "D0/SD0": "F2",
  /** Physical pin F9: H4; output. */
  "H4": "F9",
  /** Physical pin F10: H3; output. */
  "H3": "F10",
  /** Physical pin G1: D3; output. */
  "D3": "G1",
  /** Physical pin G2: D2; output. */
  "D2": "G2",
  /** Physical pin G9: HVSS; power_in. */
  "HVSS": "G9",
  /** Physical pin G10: HVDD; power_in. */
  "HVDD": "G10",
  /** Physical pin H1: D5; output. */
  "D5": "H1",
  /** Physical pin H2: D4; output. */
  "D4": "H2",
  /** Physical pin H9: H2; output. */
  "H2": "H9",
  /** Physical pin H10: H1; output. */
  "H1": "H10",
  /** Physical pin J1: D7; output. */
  "D7": "J1",
  /** Physical pin J2: D6; output. */
  "D6": "J2",
  /** Physical pin J3: VSUB; output. */
  "VSUB": "J3",
  /** Physical pin J4: SUBCK; output. */
  "SUBCK": "J4",
  /** Physical pin J5: V2; output. */
  "V2": "J5",
  /** Physical pin J6: V4; output. */
  "V4": "J6",
  /** Physical pin J7: VSG2/V6; output. */
  "VSG2/V6": "J7",
  /** Physical pin J8: VSG4/V8; output. */
  "VSG4/V8": "J8",
  /** Physical pin J9: VSG6; output. */
  "VSG6": "J9",
  /** Physical pin J10: VSG8; output. */
  "VSG8": "J10",
  /** Physical pin K1: D9; input. */
  "D9": "K1",
  /** Physical pin K2: D8; output. */
  "D8": "K2",
  /** Physical pin K3: DRVDD; power_out. */
  "DRVDD": "K3",
  /** Physical pin K4: DRVSS; power_out. */
  "DRVSS": "K4",
  /** Physical pin K5: V1; output. */
  "V1": "K5",
  /** Physical pin K6: V3; output. */
  "V3": "K6",
  /** Physical pin K7: VSG1/V5; output. */
  "VSG1/V5": "K7",
  /** Physical pin K8: VSG3/V7; output. */
  "VSG3/V7": "K8",
  /** Physical pin K9: VSG5; output. */
  "VSG5": "K9",
  /** Physical pin K10: VSG7; output. */
  "VSG7": "K10",
}) {
  override schema = "Video:AD9891";
  override referencePrefix = "U";
}

/**
 * CCD Signal Processor, 30MHz 12bits, CSPBGA-64
 *
 * KiCad symbol: `Video:AD9895`. Reference prefix: `U`.
 * Footprint filters: BGA*9.0x9.0mm*Layout10x10*P0.8mm*.
 * @see https://www.analog.com/static/imported-files/data_sheets/AD9891_9895.pdf
 * Keywords: CCD Signal Processor.
 * Default footprint: Package_BGA:BGA-64_9.0x9.0mm_Layout10x10_P0.8mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD9895 extends Component.withPins({
  /** Physical pin A1: VD; bidirectional. */
  "VD": "A1",
  /** Physical pin A2: DVDD; power_in. */
  "DVDD": "A2",
  /** Physical pin A3: MSHUT; output. */
  "MSHUT": "A3",
  /** Physical pin A4: SDI; input. */
  "SDI": "A4",
  /** Physical pin A5: REFT; output. */
  "REFT": "A5",
  /** Physical pin A6: REFB; output. */
  "REFB": "A6",
  /** Physical pin A7: BYP3; output. */
  "BYP3": "A7",
  /** Physical pin A8: CDD-IN; input. */
  "CDD-IN": "A8",
  /** Physical pin A9: BYP1; output. */
  "BYP1": "A9",
  /** Physical pin A10: AVDD1; power_in. */
  "AVDD1": "A10",
  /** Physical pin B1: HD; bidirectional. */
  "HD": "B1",
  /** Physical pin B2: DVSS; power_in. */
  "DVSS": "B2",
  /** Physical pin B3: STROBE; output. */
  "STROBE": "B3",
  /** Physical pin B4: SCK; input. */
  "SCK": "B4",
  /** Physical pin B5: SL; input. */
  "SL": "B5",
  /** Physical pin B6: AVSS2; power_in. */
  "AVSS2": "B6",
  /** Physical pin B7: AVDD2; power_in. */
  "AVDD2": "B7",
  /** Physical pin B8: BYP2; output. */
  "BYP2": "B8",
  /** Physical pin B9: AVSS1; power_in. */
  "AVSS1": "B9",
  /** Physical pin B10: TCVDD; power_in. */
  "TCVDD": "B10",
  /** Physical pin C1: SYNC; input. */
  "SYNC": "C1",
  /** Physical pin C2: LD/FD; output. */
  "LD/FD": "C2",
  /** Physical pin C9: TCVSS; power_in. */
  "TCVSS": "C9",
  /** Physical pin C10: CLI; input. */
  "CLI": "C10",
  /** Physical pin D1: DCLK; output. */
  "DCLK": "D1",
  /** Physical pin D2: PBLK/CLPOB; output. */
  "PBLK/CLPOB": "D2",
  /** Physical pin D9: RG; output. */
  "RG": "D9",
  /** Physical pin D10: CLO; output. */
  "CLO": "D10",
  /** Physical pin E1: D1; output. */
  "D1": "E1",
  /** Physical pin E2: D0; output. */
  "D0": "E2",
  /** Physical pin E9: RGVSS; power_in. */
  "RGVSS": "E9",
  /** Physical pin E10: RGVDD; power_in. */
  "RGVDD": "E10",
  /** Physical pin F1: D3; output. */
  "D3": "F1",
  /** Physical pin F2: D2/SD0; output. */
  "D2/SD0": "F2",
  /** Physical pin F9: H4; output. */
  "H4": "F9",
  /** Physical pin F10: H3; output. */
  "H3": "F10",
  /** Physical pin G1: D5; output. */
  "D5": "G1",
  /** Physical pin G2: D4; output. */
  "D4": "G2",
  /** Physical pin G9: HVSS; power_in. */
  "HVSS": "G9",
  /** Physical pin G10: HVDD; power_in. */
  "HVDD": "G10",
  /** Physical pin H1: D7; output. */
  "D7": "H1",
  /** Physical pin H2: D6; output. */
  "D6": "H2",
  /** Physical pin H9: H2; output. */
  "H2": "H9",
  /** Physical pin H10: H1; output. */
  "H1": "H10",
  /** Physical pin J1: D9; output. */
  "D9": "J1",
  /** Physical pin J2: D8; output. */
  "D8": "J2",
  /** Physical pin J3: VSUB; output. */
  "VSUB": "J3",
  /** Physical pin J4: SUBCK; output. */
  "SUBCK": "J4",
  /** Physical pin J5: V2; output. */
  "V2": "J5",
  /** Physical pin J6: V4; output. */
  "V4": "J6",
  /** Physical pin J7: VSG2/V6; output. */
  "VSG2/V6": "J7",
  /** Physical pin J8: VSG4/V8; output. */
  "VSG4/V8": "J8",
  /** Physical pin J9: VSG6; output. */
  "VSG6": "J9",
  /** Physical pin J10: VSG8; output. */
  "VSG8": "J10",
  /** Physical pin K1: D11; input. */
  "D11": "K1",
  /** Physical pin K2: D10; output. */
  "D10": "K2",
  /** Physical pin K3: DRVDD; power_out. */
  "DRVDD": "K3",
  /** Physical pin K4: DRVSS; power_out. */
  "DRVSS": "K4",
  /** Physical pin K5: V1; output. */
  "V1": "K5",
  /** Physical pin K6: V3; output. */
  "V3": "K6",
  /** Physical pin K7: VSG1/V5; output. */
  "VSG1/V5": "K7",
  /** Physical pin K8: VSG3/V7; output. */
  "VSG3/V7": "K8",
  /** Physical pin K9: VSG5; output. */
  "VSG5": "K9",
  /** Physical pin K10: VSG7; output. */
  "VSG7": "K10",
}) {
  override schema = "Video:AD9895";
  override referencePrefix = "U";
}

/**
 * High Performance 10-Bit Display Interface 140/170MSPS, LQFP-80
 *
 * KiCad symbol: `Video:AD9984AKST`. Reference prefix: `U`.
 * Footprint filters: *LQFP*14x14mm*P0.65mm*.
 * @see http://www.analog.com/media/en/technical-documentation/data-sheets/AD9984A.pdf
 * Keywords: 10bit video display interface.
 * Default footprint: Package_QFP:LQFP-80_14x14mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD9984AKST extends Component.withPins({
  /** Physical pin 1: VD; power_in. */
  "VD_1": "1",
  /** Physical pin 2: B_AIN0; input. */
  "B_AIN0": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: B_AIN1; input. */
  "B_AIN1": "4",
  /** Physical pin 5: VD; passive. */
  "VD_5": "5",
  /** Physical pin 6: G_AIN0; input. */
  "G_AIN0": "6",
  /** Physical pin 7: GND; passive. */
  "GND_7": "7",
  /** Physical pin 8: SOGIN0; input. */
  "SOGIN0": "8",
  /** Physical pin 9: VD; passive. */
  "VD_9": "9",
  /** Physical pin 10: G_AIN1; input. */
  "G_AIN1": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: SOGIN1; input. */
  "SOGIN1": "12",
  /** Physical pin 13: VD; passive. */
  "VD_13": "13",
  /** Physical pin 14: R_AIN0; input. */
  "R_AIN0": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: R_AIN1; input. */
  "R_AIN1": "16",
  /** Physical pin 17: PWR_DN; input. */
  "PWR_DN": "17",
  /** Physical pin 18: REF_LO; input. */
  "REF_LO": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC": "19",
  /** Physical pin 20: REF_HI; input. */
  "REF_HI": "20",
  /** Physical pin 21: O/E_FIELD; output. */
  "O/E_FIELD": "21",
  /** Physical pin 22: VSOUT/A0; bidirectional. */
  "VSOUT/A0": "22",
  /** Physical pin 23: HSOUT; output. */
  "HSOUT": "23",
  /** Physical pin 24: SOGOUT; output. */
  "SOGOUT": "24",
  /** Physical pin 25: DATACK; output. */
  "DATACK": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD_26": "26",
  /** Physical pin 27: GND; passive. */
  "GND_27": "27",
  /** Physical pin 28: RED_9; output. */
  "RED_9": "28",
  /** Physical pin 29: RED_8; output. */
  "RED_8": "29",
  /** Physical pin 30: RED_7; output. */
  "RED_7": "30",
  /** Physical pin 31: RED_6; output. */
  "RED_6": "31",
  /** Physical pin 32: RED_5; output. */
  "RED_5": "32",
  /** Physical pin 33: RED_4; output. */
  "RED_4": "33",
  /** Physical pin 34: RED_3; output. */
  "RED_3": "34",
  /** Physical pin 35: RED_2; output. */
  "RED_2": "35",
  /** Physical pin 36: RED_1; output. */
  "RED_1": "36",
  /** Physical pin 37: RED_0; output. */
  "RED_0": "37",
  /** Physical pin 38: VDD; passive. */
  "VDD_38": "38",
  /** Physical pin 39: GND; passive. */
  "GND_39": "39",
  /** Physical pin 40: GND; passive. */
  "GND_40": "40",
  /** Physical pin 41: DAV_DD; power_in. */
  "DAV_DD": "41",
  /** Physical pin 42: GREEN_9; output. */
  "GREEN_9": "42",
  /** Physical pin 43: GREEN_8; output. */
  "GREEN_8": "43",
  /** Physical pin 44: GREEN_7; output. */
  "GREEN_7": "44",
  /** Physical pin 45: GREEN_6; output. */
  "GREEN_6": "45",
  /** Physical pin 46: GREEN_5; output. */
  "GREEN_5": "46",
  /** Physical pin 47: GREEN_4; output. */
  "GREEN_4": "47",
  /** Physical pin 48: GREEN_3; output. */
  "GREEN_3": "48",
  /** Physical pin 49: GREEN_2; output. */
  "GREEN_2": "49",
  /** Physical pin 50: GREEN_1; output. */
  "GREEN_1": "50",
  /** Physical pin 51: GREEN_0; output. */
  "GREEN_0": "51",
  /** Physical pin 52: VDD; passive. */
  "VDD_52": "52",
  /** Physical pin 53: GND; passive. */
  "GND_53": "53",
  /** Physical pin 54: BLUE_9; output. */
  "BLUE_9": "54",
  /** Physical pin 55: BLUE_8; output. */
  "BLUE_8": "55",
  /** Physical pin 56: BLUE_7; output. */
  "BLUE_7": "56",
  /** Physical pin 57: BLUE_6; output. */
  "BLUE_6": "57",
  /** Physical pin 58: BLUE_5; output. */
  "BLUE_5": "58",
  /** Physical pin 59: BLUE_4; output. */
  "BLUE_4": "59",
  /** Physical pin 60: BLUE_3; output. */
  "BLUE_3": "60",
  /** Physical pin 61: BLUE_2; output. */
  "BLUE_2": "61",
  /** Physical pin 62: BLUE_1; output. */
  "BLUE_1": "62",
  /** Physical pin 63: BLUE_0; output. */
  "BLUE_0": "63",
  /** Physical pin 64: VDD; passive. */
  "VDD_64": "64",
  /** Physical pin 65: GND; passive. */
  "GND_65": "65",
  /** Physical pin 66: SDA; bidirectional. */
  "SDA": "66",
  /** Physical pin 67: SCL; input. */
  "SCL": "67",
  /** Physical pin 68: HSYNC1; input. */
  "HSYNC1": "68",
  /** Physical pin 69: VSYNC1; input. */
  "VSYNC1": "69",
  /** Physical pin 70: HSYNC0; input. */
  "HSYNC0": "70",
  /** Physical pin 71: VSYNC0; input. */
  "VSYNC0": "71",
  /** Physical pin 72: EXTCK/COAST; input. */
  "EXTCK/COAST": "72",
  /** Physical pin 73: CLAMP; input. */
  "CLAMP": "73",
  /** Physical pin 74: PV_D; power_in. */
  "PV_D_74": "74",
  /** Physical pin 75: GND; passive. */
  "GND_75": "75",
  /** Physical pin 76: PV_D; passive. */
  "PV_D_76": "76",
  /** Physical pin 77: GND; passive. */
  "GND_77": "77",
  /** Physical pin 78: FILT; input. */
  "FILT": "78",
  /** Physical pin 79: PV_D; passive. */
  "PV_D_79": "79",
  /** Physical pin 80: GND; passive. */
  "GND_80": "80",
}) {
  override schema = "Video:AD9984AKST";
  override referencePrefix = "U";
}

/**
 * Ultralow Power, Video Filter, Power-Down, SOT-363
 *
 * KiCad symbol: `Video:ADA4430-1YKSZ`. Reference prefix: `U`.
 * Footprint filters: SOT?363*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4430-1.pdf
 * Keywords: Video Filter.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4430_1YKSZ extends Component.withPins({
  /** Physical pin 1: V_{IN}; input. */
  "V_{IN}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: SAG; input. */
  "SAG": "3",
  /** Physical pin 4: V_{OUT}; output. */
  "V_{OUT}": "4",
  /** Physical pin 5: ~{DIS}; input. */
  "~{DIS}": "5",
  /** Physical pin 6: V_{S}; power_in. */
  "V_{S}": "6",
}) {
  override schema = "Video:ADA4430-1YKSZ";
  override referencePrefix = "U";
}

/**
 * Ultralow Power, Video Filter, Power-Down, SOT-23
 *
 * KiCad symbol: `Video:ADA4430-1WYRTZ`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADA4430-1.pdf
 * Keywords: Video Filter.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADA4430_1WYRTZ extends Component.withPins({
  /** Physical pin 1: V_{IN}; input. */
  "V_{IN}": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: SAG; input. */
  "SAG": "3",
  /** Physical pin 4: V_{OUT}; output. */
  "V_{OUT}": "4",
  /** Physical pin 5: ~{DIS}; input. */
  "~{DIS}": "5",
  /** Physical pin 6: V_{S}; power_in. */
  "V_{S}": "6",
}) {
  override schema = "Video:ADA4430-1WYRTZ";
  override referencePrefix = "U";
}

/**
 * 10-Bit, 4x Oversampled SDTV Video Decoder with Deinterlacer, LFCSP-32
 *
 * KiCad symbol: `Video:ADV7280xCP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*5x5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADV7280.PDF
 * Keywords: video decoder.
 * Default footprint: Package_CSP:LFCSP-32-1EP_5x5mm_P0.5mm_EP3.6x3.6mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADV7280xCP extends Component.withPins({
  /** Physical pin 1: DGND; power_in. */
  "DGND_1": "1",
  /** Physical pin 2: DVDDIO; power_in. */
  "DVDDIO": "2",
  /** Physical pin 3: DVDD; power_in. */
  "DVDD_3": "3",
  /** Physical pin 4: DGND; passive. */
  "DGND_4": "4",
  /** Physical pin 5: P7; output. */
  "P7": "5",
  /** Physical pin 6: P6; output. */
  "P6": "6",
  /** Physical pin 7: P5; output. */
  "P5": "7",
  /** Physical pin 8: P4; output. */
  "P4": "8",
  /** Physical pin 9: P3; output. */
  "P3": "9",
  /** Physical pin 10: P2; output. */
  "P2": "10",
  /** Physical pin 11: P1; output. */
  "P1": "11",
  /** Physical pin 12: P0; output. */
  "P0": "12",
  /** Physical pin 13: DVDD; power_in. */
  "DVDD_13": "13",
  /** Physical pin 14: XTALP; output. */
  "XTALP": "14",
  /** Physical pin 15: XTALN; input. */
  "XTALN": "15",
  /** Physical pin 16: PVDD; power_in. */
  "PVDD": "16",
  /** Physical pin 17: AIN1; input. */
  "AIN1": "17",
  /** Physical pin 18: AIN2; input. */
  "AIN2_18": "18",
  /** Physical pin 19: VREFP; output. */
  "VREFP": "19",
  /** Physical pin 20: VREFN; output. */
  "VREFN": "20",
  /** Physical pin 21: AVDD; power_in. */
  "AVDD": "21",
  /** Physical pin 22: AIN2; input. */
  "AIN2_22": "22",
  /** Physical pin 23: AIN3; input. */
  "AIN3": "23",
  /** Physical pin 24: ~INTRQ; output. */
  "~INTRQ": "24",
  /** Physical pin 25: ~RESET; input. */
  "~RESET": "25",
  /** Physical pin 26: ALSB; input. */
  "ALSB": "26",
  /** Physical pin 27: SDATA; bidirectional. */
  "SDATA": "27",
  /** Physical pin 28: SCLK; input. */
  "SCLK": "28",
  /** Physical pin 29: VS/FIELD/SFL; output. */
  "VS/FIELD/SFL": "29",
  /** Physical pin 30: HS; output. */
  "HS": "30",
  /** Physical pin 31: ~PWRDWN; input. */
  "~PWRDWN": "31",
  /** Physical pin 32: LLC; output. */
  "LLC": "32",
  /** Physical pin 33: DGND; passive. */
  "DGND_33": "33",
}) {
  override schema = "Video:ADV7280xCP";
  override referencePrefix = "U";
}

/**
 * 10-Bit SD/HD Video Encoder, Macrovision Antitaping, LFCSP-32
 *
 * KiCad symbol: `Video:ADV7390BCPZ`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*5x5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADV7390_7391_7392_7393.pdf
 * Keywords: Video Encoder.
 * Default footprint: Package_CSP:LFCSP-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADV7390BCPZ extends Component.withPins({
  /** Physical pin 1: V_{DD_IO}; power_in. */
  "V_{DD_IO}": "1",
  /** Physical pin 2: P2; input. */
  "P2": "2",
  /** Physical pin 3: P3; input. */
  "P3": "3",
  /** Physical pin 4: P4; input. */
  "P4": "4",
  /** Physical pin 5: V_{DD}; power_in. */
  "V_{DD}_5": "5",
  /** Physical pin 6: DGND; power_in. */
  "DGND_6": "6",
  /** Physical pin 7: P5; input. */
  "P5": "7",
  /** Physical pin 8: P6; input. */
  "P6": "8",
  /** Physical pin 9: P7; input. */
  "P7": "9",
  /** Physical pin 10: ALSB; input. */
  "ALSB": "10",
  /** Physical pin 11: SDA; bidirectional. */
  "SDA": "11",
  /** Physical pin 12: SCL; input. */
  "SCL": "12",
  /** Physical pin 13: CLKIN; input. */
  "CLKIN": "13",
  /** Physical pin 14: ~{RESET}; input. */
  "~{RESET}": "14",
  /** Physical pin 15: PGND; power_in. */
  "PGND": "15",
  /** Physical pin 16: EXT_LF; passive. */
  "EXT_LF": "16",
  /** Physical pin 17: P_{VDD}; power_in. */
  "P_{VDD}": "17",
  /** Physical pin 18: AGND; power_in. */
  "AGND_18": "18",
  /** Physical pin 19: V_{AA}; power_in. */
  "V_{AA}": "19",
  /** Physical pin 20: DAC3; output. */
  "DAC3": "20",
  /** Physical pin 21: DAC2; output. */
  "DAC2": "21",
  /** Physical pin 22: DAC1; output. */
  "DAC1": "22",
  /** Physical pin 23: COMP; output. */
  "COMP": "23",
  /** Physical pin 24: R_{SET}; input. */
  "R_{SET}": "24",
  /** Physical pin 25: SFL; input. */
  "SFL": "25",
  /** Physical pin 26: ~{VSYNC}; bidirectional. */
  "~{VSYNC}": "26",
  /** Physical pin 27: ~{HSYNC}; bidirectional. */
  "~{HSYNC}": "27",
  /** Physical pin 28: V_{DD}; passive. */
  "V_{DD}_28": "28",
  /** Physical pin 29: DGND; passive. */
  "DGND_29": "29",
  /** Physical pin 30: P0; input. */
  "P0": "30",
  /** Physical pin 31: P1; input. */
  "P1": "31",
  /** Physical pin 32: GND_IO; power_in. */
  "GND_IO": "32",
  /** Physical pin 33: AGND; passive. */
  "AGND_33": "33",
}) {
  override schema = "Video:ADV7390BCPZ";
  override referencePrefix = "U";
}

/**
 * 10-Bit SD/HD Video Encoder, LFCSP-32
 *
 * KiCad symbol: `Video:ADV7391BCPZ`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*5x5mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADV7390_7391_7392_7393.pdf
 * Keywords: Video Encoder.
 * Default footprint: Package_CSP:LFCSP-32-1EP_5x5mm_P0.5mm_EP3.1x3.1mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADV7391BCPZ extends Component.withPins({
  /** Physical pin 1: V_{DD_IO}; power_in. */
  "V_{DD_IO}": "1",
  /** Physical pin 2: P2; input. */
  "P2": "2",
  /** Physical pin 3: P3; input. */
  "P3": "3",
  /** Physical pin 4: P4; input. */
  "P4": "4",
  /** Physical pin 5: V_{DD}; power_in. */
  "V_{DD}_5": "5",
  /** Physical pin 6: DGND; power_in. */
  "DGND_6": "6",
  /** Physical pin 7: P5; input. */
  "P5": "7",
  /** Physical pin 8: P6; input. */
  "P6": "8",
  /** Physical pin 9: P7; input. */
  "P7": "9",
  /** Physical pin 10: ALSB; input. */
  "ALSB": "10",
  /** Physical pin 11: SDA; bidirectional. */
  "SDA": "11",
  /** Physical pin 12: SCL; input. */
  "SCL": "12",
  /** Physical pin 13: CLKIN; input. */
  "CLKIN": "13",
  /** Physical pin 14: ~{RESET}; input. */
  "~{RESET}": "14",
  /** Physical pin 15: PGND; power_in. */
  "PGND": "15",
  /** Physical pin 16: EXT_LF; passive. */
  "EXT_LF": "16",
  /** Physical pin 17: P_{VDD}; power_in. */
  "P_{VDD}": "17",
  /** Physical pin 18: AGND; power_in. */
  "AGND_18": "18",
  /** Physical pin 19: V_{AA}; power_in. */
  "V_{AA}": "19",
  /** Physical pin 20: DAC3; output. */
  "DAC3": "20",
  /** Physical pin 21: DAC2; output. */
  "DAC2": "21",
  /** Physical pin 22: DAC1; output. */
  "DAC1": "22",
  /** Physical pin 23: COMP; output. */
  "COMP": "23",
  /** Physical pin 24: R_{SET}; input. */
  "R_{SET}": "24",
  /** Physical pin 25: SFL; input. */
  "SFL": "25",
  /** Physical pin 26: ~{VSYNC}; bidirectional. */
  "~{VSYNC}": "26",
  /** Physical pin 27: ~{HSYNC}; bidirectional. */
  "~{HSYNC}": "27",
  /** Physical pin 28: V_{DD}; passive. */
  "V_{DD}_28": "28",
  /** Physical pin 29: DGND; passive. */
  "DGND_29": "29",
  /** Physical pin 30: P0; input. */
  "P0": "30",
  /** Physical pin 31: P1; input. */
  "P1": "31",
  /** Physical pin 32: GND_IO; power_in. */
  "GND_IO": "32",
  /** Physical pin 33: AGND; passive. */
  "AGND_33": "33",
}) {
  override schema = "Video:ADV7391BCPZ";
  override referencePrefix = "U";
}

/**
 * Video Genlock PLL
 *
 * KiCad symbol: `Video:AV9173`. Reference prefix: `U`.
 * @see http://www.ibselectronics.com/ibsstore/datasheet/Others/AV9173-01CN08.pdf
 * Keywords: video pll.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AV9173 extends Component.withPins({
  /** Physical pin 1: FSIGIN; input. */
  "FSIGIN": "1",
  /** Physical pin 2: FREFIN; input. */
  "FREFIN": "2",
  /** Physical pin 3: GND; input. */
  "GND": "3",
  /** Physical pin 4: FS0; input. */
  "FS0": "4",
  /** Physical pin 5: OE; input. */
  "OE": "5",
  /** Physical pin 6: CKKOUT; tri_state. */
  "CKKOUT": "6",
  /** Physical pin 7: VCC; input. */
  "VCC": "7",
  /** Physical pin 8: CLK/2; tri_state. */
  "CLK/2": "8",
}) {
  override schema = "Video:AV9173";
  override referencePrefix = "U";
}

/**
 * CX7930
 *
 * KiCad symbol: `Video:CX7930`. Reference prefix: `U`.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CX7930 extends Component.withPins({
  /** Physical pin 1: VRI; input. */
  "VRI": "1",
  /** Physical pin 2: OFLD1; output. */
  "OFLD1": "2",
  /** Physical pin 3: OBF; output. */
  "OBF": "3",
  /** Physical pin 4: OSYNC; output. */
  "OSYNC": "4",
  /** Physical pin 5: OFLD; output. */
  "OFLD": "5",
  /** Physical pin 6: OBLK; output. */
  "OBLK": "6",
  /** Physical pin 7: OLALT; output. */
  "OLALT": "7",
  /** Physical pin 8: OHD; output. */
  "OHD": "8",
  /** Physical pin 9: 4FSCO; output. */
  "4FSCO": "9",
  /** Physical pin 10: 4FSCI; input. */
  "4FSCI": "10",
  /** Physical pin 12: OVD; output. */
  "OVD": "12",
  /** Physical pin 14: VSS; input. */
  "VSS": "14",
  /** Physical pin 15: LALTRI; input. */
  "LALTRI": "15",
  /** Physical pin 16: TEST; input. */
  "TEST": "16",
  /** Physical pin 19: OSC; output. */
  "OSC": "19",
  /** Physical pin 20: EXT; input. */
  "EXT": "20",
  /** Physical pin 21: MODE1; input. */
  "MODE1": "21",
  /** Physical pin 22: MODE2; input. */
  "MODE2": "22",
  /** Physical pin 23: HRI; input. */
  "HRI": "23",
  /** Physical pin 24: HCOMO; output. */
  "HCOMO": "24",
  /** Physical pin 25: CLOUT; output. */
  "CLOUT": "25",
  /** Physical pin 26: CLIN; input. */
  "CLIN": "26",
  /** Physical pin 27: OFH; output. */
  "OFH": "27",
  /** Physical pin 28: VDD; input. */
  "VDD": "28",
}) {
  override schema = "Video:CX7930";
  override referencePrefix = "U";
}

/**
 * Analog RGB to composite video encoder, compatible with NTSC/PAL systems, built-in 75 ohms output drivers, built-in audio buffer, DIP-24
 *
 * KiCad symbol: `Video:CXA1145P`. Reference prefix: `U`.
 * Footprint filters: DIP*W10.16mm*.
 * @see https://wiki.console5.com/tw/images/f/fb/CXA1145PM.pdf
 * Keywords: Sony CVBS Obsolete.
 * Default footprint: Package_DIP:DIP-24_W10.16mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CXA1145P extends Component.withPins({
  /** Physical pin 1: GND_1; power_in. */
  "GND_1": "1",
  /** Physical pin 2: R_IN; input. */
  "R_IN": "2",
  /** Physical pin 3: G_IN; input. */
  "G_IN": "3",
  /** Physical pin 4: B_IN; input. */
  "B_IN": "4",
  /** Physical pin 5: XO_OUT; output. */
  "XO_OUT": "5",
  /** Physical pin 6: XO_IN; input. */
  "XO_IN": "6",
  /** Physical pin 7: NTSC/~{PAL}_IN; input. */
  "NTSC/~{PAL}_IN": "7",
  /** Physical pin 8: AUDIO_IN; input. */
  "AUDIO_IN": "8",
  /** Physical pin 9: AUDIO_OUT; output. */
  "AUDIO_OUT": "9",
  /** Physical pin 10: C_SYNC_IN; input. */
  "C_SYNC_IN": "10",
  /** Physical pin 11: C_SYNC_OUT; output. */
  "C_SYNC_OUT": "11",
  /** Physical pin 12: V_{CC}_1; power_in. */
  "V_{CC}_1": "12",
  /** Physical pin 13: I_REF; input. */
  "I_REF": "13",
  /** Physical pin 14: V_REF; output. */
  "V_REF": "14",
  /** Physical pin 15: C_OUT; output. */
  "C_OUT": "15",
  /** Physical pin 16: Y_OUT; output. */
  "Y_OUT": "16",
  /** Physical pin 17: C_IN; input. */
  "C_IN": "17",
  /** Physical pin 18: Y_IN; input. */
  "Y_IN": "18",
  /** Physical pin 19: V_{CC}_2; power_in. */
  "V_{CC}_2": "19",
  /** Physical pin 20: C_VIDEO_OUT; output. */
  "C_VIDEO_OUT": "20",
  /** Physical pin 21: B_OUT; output. */
  "B_OUT": "21",
  /** Physical pin 22: G_OUT; output. */
  "G_OUT": "22",
  /** Physical pin 23: R_OUT; output. */
  "R_OUT": "23",
  /** Physical pin 24: GND_2; power_in. */
  "GND_2": "24",
}) {
  override schema = "Video:CXA1145P";
  override referencePrefix = "U";
}

/**
 * 6-channel Vertical Clock Driver for CCD Image Sensor, SSOP-20
 *
 * KiCad symbol: `Video:CXD3400N`. Reference prefix: `U`.
 * Footprint filters: SSOP*.
 * @see https://www.bndhep.net/Electronics/Data/CXD3400N.pdf
 * Keywords: CCD Clock Driver.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CXD3400N extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: XSHT; input. */
  "XSHT": "2",
  /** Physical pin 3: XV3; input. */
  "XV3": "3",
  /** Physical pin 4: XSG3B; input. */
  "XSG3B": "4",
  /** Physical pin 5: XSG3A; input. */
  "XSG3A": "5",
  /** Physical pin 6: XV1; input. */
  "XV1": "6",
  /** Physical pin 7: XSG1B; input. */
  "XSG1B": "7",
  /** Physical pin 8: XSG1A; input. */
  "XSG1A": "8",
  /** Physical pin 9: XV4; input. */
  "XV4": "9",
  /** Physical pin 10: XV2; input. */
  "XV2": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: V2; output. */
  "V2": "12",
  /** Physical pin 13: V4; output. */
  "V4": "13",
  /** Physical pin 14: V1A; output. */
  "V1A": "14",
  /** Physical pin 15: VH; power_in. */
  "VH": "15",
  /** Physical pin 16: V1B; output. */
  "V1B": "16",
  /** Physical pin 17: V3A; output. */
  "V3A": "17",
  /** Physical pin 18: VL; power_in. */
  "VL": "18",
  /** Physical pin 19: V3B; output. */
  "V3B": "19",
  /** Physical pin 20: SHT; output. */
  "SHT": "20",
}) {
  override schema = "Video:CXD3400N";
  override referencePrefix = "U";
}

/**
 * Advanced CRT Controller (ACRTC), DIP-64
 *
 * KiCad symbol: `Video:HD63484P`. Reference prefix: `U`.
 * Footprint filters: DIP*W22.86mm*.
 * @see https://www.alldatasheet.com/datasheet-pdf/view/144378/HITACHI/HD63484.html
 * Keywords: Hitachi DMA CMOS Obsolete.
 * Default footprint: Package_DIP:DIP-64_W22.86mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HD63484P extends Component.withPins({
  /** Physical pin 1: ~{CUD1}; output. */
  "~{CUD1}": "1",
  /** Physical pin 2: ~{CUD2}; output. */
  "~{CUD2}": "2",
  /** Physical pin 3: R/~{W}; input. */
  "R/~{W}": "3",
  /** Physical pin 4: ~{CS}; input. */
  "~{CS}": "4",
  /** Physical pin 5: RS; input. */
  "RS": "5",
  /** Physical pin 6: ~{RES}; input. */
  "~{RES}": "6",
  /** Physical pin 7: ~{DONE}; bidirectional. */
  "~{DONE}": "7",
  /** Physical pin 8: ~{DREQ}; output. */
  "~{DREQ}": "8",
  /** Physical pin 9: ~{DACK}; input. */
  "~{DACK}": "9",
  /** Physical pin 10: ~{DTACK}; tri_state. */
  "~{DTACK}": "10",
  /** Physical pin 11: ~{IRQ}; open_collector. */
  "~{IRQ}": "11",
  /** Physical pin 12: ~{HSYNC}; output. */
  "~{HSYNC}": "12",
  /** Physical pin 13: ~{VSYNC}; output. */
  "~{VSYNC}": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC_14": "14",
  /** Physical pin 15: ~{EXTSYNC}; bidirectional. */
  "~{EXTSYNC}": "15",
  /** Physical pin 16: VSS; power_in. */
  "VSS_16": "16",
  /** Physical pin 17: D0; bidirectional. */
  "D0": "17",
  /** Physical pin 18: D1; bidirectional. */
  "D1": "18",
  /** Physical pin 19: D2; bidirectional. */
  "D2": "19",
  /** Physical pin 20: D3; bidirectional. */
  "D3": "20",
  /** Physical pin 21: D4; bidirectional. */
  "D4": "21",
  /** Physical pin 22: D5; bidirectional. */
  "D5": "22",
  /** Physical pin 23: D6; bidirectional. */
  "D6": "23",
  /** Physical pin 24: D7; bidirectional. */
  "D7": "24",
  /** Physical pin 25: D8; bidirectional. */
  "D8": "25",
  /** Physical pin 26: D9; bidirectional. */
  "D9": "26",
  /** Physical pin 27: D10; bidirectional. */
  "D10": "27",
  /** Physical pin 28: D11; bidirectional. */
  "D11": "28",
  /** Physical pin 29: D12; bidirectional. */
  "D12": "29",
  /** Physical pin 30: D13; bidirectional. */
  "D13": "30",
  /** Physical pin 31: D14; bidirectional. */
  "D14": "31",
  /** Physical pin 32: D15; bidirectional. */
  "D15": "32",
  /** Physical pin 33: RA4; output. */
  "RA4": "33",
  /** Physical pin 34: MA19/RA3; output. */
  "MA19/RA3": "34",
  /** Physical pin 35: MA18/RA2; output. */
  "MA18/RA2": "35",
  /** Physical pin 36: MA17/RA1; output. */
  "MA17/RA1": "36",
  /** Physical pin 37: MA16/RA0; output. */
  "MA16/RA0": "37",
  /** Physical pin 38: MAD15; bidirectional. */
  "MAD15": "38",
  /** Physical pin 39: MAD14; bidirectional. */
  "MAD14": "39",
  /** Physical pin 40: MAD13; bidirectional. */
  "MAD13": "40",
  /** Physical pin 41: MAD12; bidirectional. */
  "MAD12": "41",
  /** Physical pin 42: MAD11; bidirectional. */
  "MAD11": "42",
  /** Physical pin 43: MAD10; bidirectional. */
  "MAD10": "43",
  /** Physical pin 44: MAD9; bidirectional. */
  "MAD9": "44",
  /** Physical pin 45: MAD8; bidirectional. */
  "MAD8": "45",
  /** Physical pin 46: MAD7; bidirectional. */
  "MAD7": "46",
  /** Physical pin 47: MAD6; bidirectional. */
  "MAD6": "47",
  /** Physical pin 48: MAD5; bidirectional. */
  "MAD5": "48",
  /** Physical pin 49: VCC; passive. */
  "VCC_49": "49",
  /** Physical pin 50: 2CLK; input. */
  "2CLK": "50",
  /** Physical pin 51: VSS; passive. */
  "VSS_51": "51",
  /** Physical pin 52: MCYC; output. */
  "MCYC": "52",
  /** Physical pin 53: ~{AS}; output. */
  "~{AS}": "53",
  /** Physical pin 54: ~{DRAW}; output. */
  "~{DRAW}": "54",
  /** Physical pin 55: MRD; output. */
  "MRD": "55",
  /** Physical pin 56: CHR; output. */
  "CHR": "56",
  /** Physical pin 57: MAD4; bidirectional. */
  "MAD4": "57",
  /** Physical pin 58: MAD3; bidirectional. */
  "MAD3": "58",
  /** Physical pin 59: MAD2; bidirectional. */
  "MAD2": "59",
  /** Physical pin 60: MAD1; bidirectional. */
  "MAD1": "60",
  /** Physical pin 61: MAD0; bidirectional. */
  "MAD0": "61",
  /** Physical pin 62: ~{DISP2}; output. */
  "~{DISP2}": "62",
  /** Physical pin 63: ~{DISP1}; output. */
  "~{DISP1}": "63",
  /** Physical pin 64: LPSTB; input. */
  "LPSTB": "64",
}) {
  override schema = "Video:HD63484P";
  override referencePrefix = "U";
}

/**
 * HD63484_PLCC
 *
 * KiCad symbol: `Video:HD63484_PLCC`. Reference prefix: `U`.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class HD63484_PLCC extends Component.withPins({
  /** Physical pin 1: VCC; input. */
  "VCC_1": "1",
  /** Physical pin 2: CUD1; output. */
  "CUD1": "2",
  /** Physical pin 3: CUD2; output. */
  "CUD2": "3",
  /** Physical pin 4: R/W; input. */
  "R/W": "4",
  /** Physical pin 5: CS; input. */
  "CS": "5",
  /** Physical pin 6: RS; input. */
  "RS": "6",
  /** Physical pin 7: RESET; input. */
  "RESET": "7",
  /** Physical pin 8: DONE; input. */
  "DONE": "8",
  /** Physical pin 9: DREQ; output. */
  "DREQ": "9",
  /** Physical pin 10: DACK; input. */
  "DACK": "10",
  /** Physical pin 11: DTACK; output. */
  "DTACK": "11",
  /** Physical pin 12: IRQ; output. */
  "IRQ": "12",
  /** Physical pin 13: HSYNC; output. */
  "HSYNC": "13",
  /** Physical pin 14: VSYNC; output. */
  "VSYNC": "14",
  /** Physical pin 15: VCC; input. */
  "VCC_15": "15",
  /** Physical pin 16: EXTSYNC; input. */
  "EXTSYNC": "16",
  /** Physical pin 17: GND; input. */
  "GND_17": "17",
  /** Physical pin 18: GND; input. */
  "GND_18": "18",
  /** Physical pin 19: D0; tri_state. */
  "D0": "19",
  /** Physical pin 20: D1; tri_state. */
  "D1": "20",
  /** Physical pin 21: D2; tri_state. */
  "D2": "21",
  /** Physical pin 22: D3; tri_state. */
  "D3": "22",
  /** Physical pin 23: D4; tri_state. */
  "D4": "23",
  /** Physical pin 24: D5; tri_state. */
  "D5": "24",
  /** Physical pin 25: D6; tri_state. */
  "D6": "25",
  /** Physical pin 26: D7; tri_state. */
  "D7": "26",
  /** Physical pin 27: D8; tri_state. */
  "D8": "27",
  /** Physical pin 28: D9; tri_state. */
  "D9": "28",
  /** Physical pin 29: D10; tri_state. */
  "D10": "29",
  /** Physical pin 30: D11; tri_state. */
  "D11": "30",
  /** Physical pin 31: D12; tri_state. */
  "D12": "31",
  /** Physical pin 32: D13; tri_state. */
  "D13": "32",
  /** Physical pin 33: D14; tri_state. */
  "D14": "33",
  /** Physical pin 34: D15; tri_state. */
  "D15": "34",
  /** Physical pin 35: GND; input. */
  "GND_35": "35",
  /** Physical pin 36: RA4; output. */
  "RA4": "36",
  /** Physical pin 37: MA19/RA3; output. */
  "MA19/RA3": "37",
  /** Physical pin 38: MA18/RA2; output. */
  "MA18/RA2": "38",
  /** Physical pin 39: MA17/RA1; output. */
  "MA17/RA1": "39",
  /** Physical pin 40: MA16/RA0; output. */
  "MA16/RA0": "40",
  /** Physical pin 41: MAD15; tri_state. */
  "MAD15": "41",
  /** Physical pin 42: MAD14; tri_state. */
  "MAD14": "42",
  /** Physical pin 43: MAD13; tri_state. */
  "MAD13": "43",
  /** Physical pin 44: MAD12; tri_state. */
  "MAD12": "44",
  /** Physical pin 45: MAD11; tri_state. */
  "MAD11": "45",
  /** Physical pin 46: MAD10; tri_state. */
  "MAD10": "46",
  /** Physical pin 47: MAD9; tri_state. */
  "MAD9": "47",
  /** Physical pin 48: MAD8; tri_state. */
  "MAD8": "48",
  /** Physical pin 49: MAD7; tri_state. */
  "MAD7": "49",
  /** Physical pin 50: MAD6; tri_state. */
  "MAD6": "50",
  /** Physical pin 51: MAD5; tri_state. */
  "MAD5": "51",
  /** Physical pin 52: VCC; input. */
  "VCC_52": "52",
  /** Physical pin 53: 2CLK; input. */
  "2CLK": "53",
  /** Physical pin 54: GND; input. */
  "GND_54": "54",
  /** Physical pin 55: GND; input. */
  "GND_55": "55",
  /** Physical pin 56: MCYC; output. */
  "MCYC": "56",
  /** Physical pin 57: AS; output. */
  "AS": "57",
  /** Physical pin 58: DRAW; output. */
  "DRAW": "58",
  /** Physical pin 59: MRD; output. */
  "MRD": "59",
  /** Physical pin 60: CHR; output. */
  "CHR": "60",
  /** Physical pin 61: MAD4; tri_state. */
  "MAD4": "61",
  /** Physical pin 62: MAD3; tri_state. */
  "MAD3": "62",
  /** Physical pin 63: MAD2; tri_state. */
  "MAD2": "63",
  /** Physical pin 64: MAD1; tri_state. */
  "MAD1": "64",
  /** Physical pin 65: MAD0; tri_state. */
  "MAD0": "65",
  /** Physical pin 66: DISP2; output. */
  "DISP2": "66",
  /** Physical pin 67: DISP1; output. */
  "DISP1": "67",
  /** Physical pin 68: LPSTB; input. */
  "LPSTB": "68",
}) {
  override schema = "Video:HD63484_PLCC";
  override referencePrefix = "U";
}

/**
 * Diagonal 8mm B/W Progressive Scan CCD Image Sensor with Square Pixel, CERDIP-22
 *
 * KiCad symbol: `Video:ICX415AQ`. Reference prefix: `U`.
 * Keywords: CCD B/W Image Sensor.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ICX415AQ extends Component.withPins({
  /** Physical pin 3: V3; input. */
  "V3": "3",
  /** Physical pin 4: V2; input. */
  "V2": "4",
  /** Physical pin 5: V1; input. */
  "V1": "5",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 9: VOUT; output. */
  "VOUT": "9",
  /** Physical pin 10: CGG; input. */
  "CGG": "10",
  /** Physical pin 12: VDD; power_in. */
  "VDD": "12",
  /** Physical pin 13: RG; input. */
  "RG": "13",
  /** Physical pin 14: VL; power_in. */
  "VL": "14",
  /** Physical pin 15: SUB; input. */
  "SUB": "15",
  /** Physical pin 16: H1; input. */
  "H1": "16",
  /** Physical pin 17: H2; input. */
  "H2": "17",
  /** Physical pin 20: CSUB; input. */
  "CSUB": "20",
  /** Physical pin 21: SUBCIR; power_in. */
  "SUBCIR": "21",
}) {
  override schema = "Video:ICX415AQ";
  override referencePrefix = "U";
}

/**
 * Sync Separator for HD and SD Video, SOIC-8
 *
 * KiCad symbol: `Video:ISL59885`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.renesas.com/us/en/document/dst/isl59885-datasheet?r=533081
 * Keywords: video sync separator csync hsync vsync.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ISL59885 extends Component.withPins({
  /** Physical pin 1: CSYNC; output. */
  "CSYNC": "1",
  /** Physical pin 2: CVBS; input. */
  "CVBS": "2",
  /** Physical pin 3: VSYNC; output. */
  "VSYNC": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: ~{HD}; output. */
  "~{HD}": "5",
  /** Physical pin 6: CSET; passive. */
  "CSET": "6",
  /** Physical pin 7: HSYNC; output. */
  "HSYNC": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
  override schema = "Video:ISL59885";
  override referencePrefix = "U";
}

/**
 * Video Sync Separator, composite sync and vertical sync outputs, DIP-8 / SOIC-8
 *
 * KiCad symbol: `Video:LM1881`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9x4.9mm*P1.27mm*, DIP?8?W7.62mm*.
 * @see https://www.ti.com/lit/ds/symlink/lm1881.pdf
 * Keywords: National-Semiconductor Texas-Instruments NTSC PAL SECAM composite-video CVBS LM1881MX/NOPB LM1881N.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM1881 extends Component.withPins({
  /** Physical pin 1: CSOUT; output. */
  "CSOUT": "1",
  /** Physical pin 2: CVIN; input. */
  "CVIN": "2",
  /** Physical pin 3: VSOUT; output. */
  "VSOUT": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: BPOUT; output. */
  "BPOUT": "5",
  /** Physical pin 6: RSET; input. */
  "RSET": "6",
  /** Physical pin 7: OEOUT; output. */
  "OEOUT": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
}) {
  override schema = "Video:LM1881";
  override referencePrefix = "U";
}

/**
 * 8-Channel CMOS RF Video Multiplexer
 *
 * KiCad symbol: `Video:MAX310`. Reference prefix: `U`.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX310-MAX311.pdf
 * Keywords: video rf.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX310 extends Component.withPins({
  /** Physical pin 1: S1; input. */
  "S1": "1",
  /** Physical pin 2: S2; input. */
  "S2": "2",
  /** Physical pin 3: S3; input. */
  "S3": "3",
  /** Physical pin 4: S4; input. */
  "S4": "4",
  /** Physical pin 5: S5; input. */
  "S5": "5",
  /** Physical pin 6: S6; input. */
  "S6": "6",
  /** Physical pin 7: S7; input. */
  "S7": "7",
  /** Physical pin 8: S8; input. */
  "S8": "8",
  /** Physical pin 9: V-; input. */
  "V-": "9",
  /** Physical pin 10: OUT; input. */
  "OUT": "10",
  /** Physical pin 11: V+; input. */
  "V+": "11",
  /** Physical pin 12: EN; input. */
  "EN": "12",
  /** Physical pin 13: A0; input. */
  "A0": "13",
  /** Physical pin 14: A1; input. */
  "A1": "14",
  /** Physical pin 15: A2; input. */
  "A2": "15",
  /** Physical pin 16: GND; input. */
  "GND": "16",
}) {
  override schema = "Video:MAX310";
  override referencePrefix = "U";
}

/**
 * 8-Channel CMOS RF Video Multiplexer
 *
 * KiCad symbol: `Video:MAX311`. Reference prefix: `U`.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX310-MAX311.pdf
 * Keywords: video rf.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX311 extends Component.withPins({
  /** Physical pin 1: S1A; input. */
  "S1A": "1",
  /** Physical pin 2: S2A; input. */
  "S2A": "2",
  /** Physical pin 3: S3A; input. */
  "S3A": "3",
  /** Physical pin 4: S4A; input. */
  "S4A": "4",
  /** Physical pin 5: S1B; input. */
  "S1B": "5",
  /** Physical pin 6: S2B; input. */
  "S2B": "6",
  /** Physical pin 7: S3B; input. */
  "S3B": "7",
  /** Physical pin 8: S4B; input. */
  "S4B": "8",
  /** Physical pin 9: V-; input. */
  "V-": "9",
  /** Physical pin 10: OUTB; input. */
  "OUTB": "10",
  /** Physical pin 11: V+; input. */
  "V+": "11",
  /** Physical pin 12: EN; input. */
  "EN": "12",
  /** Physical pin 13: A0; input. */
  "A0": "13",
  /** Physical pin 14: A1; input. */
  "A1": "14",
  /** Physical pin 15: GND; input. */
  "GND": "15",
  /** Physical pin 16: OUTA; output. */
  "OUTA": "16",
}) {
  override schema = "Video:MAX311";
  override referencePrefix = "U";
}

/**
 * MB88303P
 *
 * KiCad symbol: `Video:MB88303P`. Reference prefix: `U`.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MB88303P extends Component.withPins({
  /** Physical pin 1: RESET; input. */
  "RESET": "1",
  /** Physical pin 5: VOW; output. */
  "VOW": "5",
  /** Physical pin 6: VOB; output. */
  "VOB": "6",
  /** Physical pin 7: VSYNC; input. */
  "VSYNC": "7",
  /** Physical pin 8: HSYNC; input. */
  "HSYNC": "8",
  /** Physical pin 9: EX/RC; input. */
  "EX/RC": "9",
  /** Physical pin 10: X/R; output. */
  "X/R": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: LDI; input. */
  "LDI": "12",
  /** Physical pin 13: ADM; input. */
  "ADM": "13",
  /** Physical pin 14: DA0; input. */
  "DA0": "14",
  /** Physical pin 15: DA1; input. */
  "DA1": "15",
  /** Physical pin 16: DA2; input. */
  "DA2": "16",
  /** Physical pin 17: DA3; input. */
  "DA3": "17",
  /** Physical pin 18: DA4; input. */
  "DA4": "18",
  /** Physical pin 19: DA5; input. */
  "DA5": "19",
  /** Physical pin 20: DA6; input. */
  "DA6": "20",
  /** Physical pin 21: DA7; input. */
  "DA7": "21",
  /** Physical pin 22: VCC; power_in. */
  "VCC": "22",
}) {
  override schema = "Video:MB88303P";
  override referencePrefix = "U";
}

/**
 * S178
 *
 * KiCad symbol: `Video:S178`. Reference prefix: `U`.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class S178 extends Component.withPins({
  /** Physical pin 1: +VCC; input. */
  "+VCC": "1",
  /** Physical pin 2: 2.9; input. */
  "2.9": "2",
  /** Physical pin 3: 2.8; input. */
  "2.8": "3",
  /** Physical pin 4: 2.7; input. */
  "2.7": "4",
  /** Physical pin 5: 2.6; input. */
  "2.6": "5",
  /** Physical pin 6: 2.5; input. */
  "2.5": "6",
  /** Physical pin 7: 2.4; input. */
  "2.4": "7",
  /** Physical pin 8: 2.3; input. */
  "2.3": "8",
  /** Physical pin 9: 2.2; input. */
  "2.2": "9",
  /** Physical pin 10: 2.1; input. */
  "2.1": "10",
  /** Physical pin 11: 2.0; input. */
  "2.0": "11",
  /** Physical pin 12: VR; input. */
  "VR": "12",
  /** Physical pin 13: SV; input. */
  "SV": "13",
  /** Physical pin 15: -VCC; input. */
  "-VCC": "15",
  /** Physical pin 16: H2; output. */
  "H2": "16",
  /** Physical pin 17: CP; input. */
  "CP": "17",
  /** Physical pin 18: V; input. */
  "V": "18",
  /** Physical pin 19: SH; input. */
  "SH": "19",
  /** Physical pin 20: HD; output. */
  "HD": "20",
  /** Physical pin 21: CS; output. */
  "CS": "21",
  /** Physical pin 22: CLAMP; output. */
  "CLAMP": "22",
  /** Physical pin 23: N.C; input. */
  "N.C": "23",
  /** Physical pin 24: N.B; input. */
  "N.B": "24",
  /** Physical pin 25: N.A; input. */
  "N.A": "25",
  /** Physical pin 26: SUP; output. */
  "SUP_26": "26",
  /** Physical pin 27: VD; output. */
  "VD": "27",
  /** Physical pin 28: SUP; output. */
  "SUP_28": "28",
}) {
  override schema = "Video:S178";
  override referencePrefix = "U";
}

/**
 * Digital Video Encoder, Obsolete
 *
 * KiCad symbol: `Video:SAA7182`. Reference prefix: `U`.
 * @see http://rcl-radio.ru/wp-content/uploads/2014/11/SAA7182.pdf
 * Keywords: Video Encoder.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SAA7182 extends Component.withPins({
  /** Physical pin 1: ~RESN~; input. */
  "~RESN~": "1",
  /** Physical pin 3: VSS; power_in. */
  "VSS_3": "3",
  /** Physical pin 4: SA; input. */
  "SA": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD_5": "5",
  /** Physical pin 6: OVL2; input. */
  "OVL2": "6",
  /** Physical pin 7: OVL1; input. */
  "OVL1": "7",
  /** Physical pin 8: OVL0; input. */
  "OVL0": "8",
  /** Physical pin 9: KEY; input. */
  "KEY": "9",
  /** Physical pin 10: DP0; input. */
  "DP0": "10",
  /** Physical pin 11: DP1; input. */
  "DP1": "11",
  /** Physical pin 12: DP2; input. */
  "DP2": "12",
  /** Physical pin 13: DP3; input. */
  "DP3": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD_14": "14",
  /** Physical pin 15: VSS; power_in. */
  "VSS_15": "15",
  /** Physical pin 16: DP4; input. */
  "DP4": "16",
  /** Physical pin 17: DP5; input. */
  "DP5": "17",
  /** Physical pin 18: DP6; input. */
  "DP6": "18",
  /** Physical pin 19: DP7; input. */
  "DP7": "19",
  /** Physical pin 20: TTXRQ; output. */
  "TTXRQ": "20",
  /** Physical pin 21: TTX; input. */
  "TTX": "21",
  /** Physical pin 22: VDD; power_in. */
  "VDD_22": "22",
  /** Physical pin 24: VSS; power_in. */
  "VSS_24": "24",
  /** Physical pin 25: MP7; input. */
  "MP7": "25",
  /** Physical pin 26: MP6; input. */
  "MP6": "26",
  /** Physical pin 27: MP5; input. */
  "MP5": "27",
  /** Physical pin 28: MP4; input. */
  "MP4": "28",
  /** Physical pin 29: VDD; power_in. */
  "VDD_29": "29",
  /** Physical pin 30: VSS; power_in. */
  "VSS_30": "30",
  /** Physical pin 31: MP3; input. */
  "MP3": "31",
  /** Physical pin 32: MP2; input. */
  "MP2": "32",
  /** Physical pin 33: MP1; input. */
  "MP1": "33",
  /** Physical pin 34: MP0; input. */
  "MP0": "34",
  /** Physical pin 35: RCV1; bidirectional. */
  "RCV1": "35",
  /** Physical pin 36: RCV2; bidirectional. */
  "RCV2": "36",
  /** Physical pin 38: VDD; power_in. */
  "VDD_38": "38",
  /** Physical pin 39: VSS; power_in. */
  "VSS_39": "39",
  /** Physical pin 41: VDD; power_in. */
  "VDD_41": "41",
  /** Physical pin 42: VSS; power_in. */
  "VSS_42": "42",
  /** Physical pin 44: XTALI; input. */
  "XTALI": "44",
  /** Physical pin 45: XTAL; output. */
  "XTAL": "45",
  /** Physical pin 47: CREF; bidirectional. */
  "CREF": "47",
  /** Physical pin 48: LCC; bidirectional. */
  "LCC": "48",
  /** Physical pin 49: VDD; power_in. */
  "VDD_49": "49",
  /** Physical pin 50: CDIR; input. */
  "CDIR": "50",
  /** Physical pin 51: VSS; power_in. */
  "VSS_51": "51",
  /** Physical pin 52: VREFL; passive. */
  "VREFL_52": "52",
  /** Physical pin 53: VREFH; passive. */
  "VREFH_53": "53",
  /** Physical pin 54: VDDA; power_in. */
  "VDDA_54": "54",
  /** Physical pin 55: B; output. */
  "B": "55",
  /** Physical pin 57: VDDA; power_in. */
  "VDDA_57": "57",
  /** Physical pin 58: G; output. */
  "G": "58",
  /** Physical pin 60: VDDA; power_in. */
  "VDDA_60": "60",
  /** Physical pin 61: R; output. */
  "R": "61",
  /** Physical pin 63: CUR; input. */
  "CUR_63": "63",
  /** Physical pin 64: VDDA; power_in. */
  "VDDA_64": "64",
  /** Physical pin 67: VSSA; power_in. */
  "VSSA": "67",
  /** Physical pin 68: CUR; input. */
  "CUR_68": "68",
  /** Physical pin 69: C; output. */
  "C": "69",
  /** Physical pin 70: VDDA; power_in. */
  "VDDA_70": "70",
  /** Physical pin 71: Y; output. */
  "Y": "71",
  /** Physical pin 72: VDDA; power_in. */
  "VDDA_72": "72",
  /** Physical pin 73: CVBS; output. */
  "CVBS": "73",
  /** Physical pin 74: VDDA; power_in. */
  "VDDA_74": "74",
  /** Physical pin 75: VREFH; passive. */
  "VREFH_75": "75",
  /** Physical pin 76: VREFL; passive. */
  "VREFL_76": "76",
  /** Physical pin 77: AP; input. */
  "AP": "77",
  /** Physical pin 78: SP; input. */
  "SP": "78",
  /** Physical pin 79: VSS; power_in. */
  "VSS_79": "79",
  /** Physical pin 80: VDD; power_in. */
  "VDD_80": "80",
  /** Physical pin 81: VSS; power_in. */
  "VSS_81": "81",
  /** Physical pin 82: VDD; power_in. */
  "VDD_82": "82",
  /** Physical pin 83: SCL; input. */
  "SCL": "83",
  /** Physical pin 84: SDA; bidirectional. */
  "SDA": "84",
}) {
  override schema = "Video:SAA7182";
  override referencePrefix = "U";
}

/**
 * SI582
 *
 * KiCad symbol: `Video:SI582`. Reference prefix: `U`.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SI582 extends Component.withPins({
  /** Physical pin 1: OFS; input. */
  "OFS": "1",
  /** Physical pin 2: IN-; input. */
  "IN-": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 6: OUT; input. */
  "OUT": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: DIS; input. */
  "DIS": "8",
}) {
  override schema = "Video:SI582";
  override referencePrefix = "U";
}

/**
 * TDA1950
 *
 * KiCad symbol: `Video:TDA1950`. Reference prefix: `U`.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA1950 extends Component.withPins({
  /** Physical pin 1: GND; input. */
  "GND": "1",
  /** Physical pin 2: HD; output. */
  "HD": "2",
  /** Physical pin 3: FLYH; input. */
  "FLYH": "3",
  /** Physical pin 4: SANDCASTLE; output. */
  "SANDCASTLE": "4",
  /** Physical pin 5: VR; input. */
  "VR": "5",
  /** Physical pin 6: SW; output. */
  "SW": "6",
  /** Physical pin 7: MUTE; output. */
  "MUTE": "7",
  /** Physical pin 8: NIVSEP; input. */
  "NIVSEP": "8",
  /** Physical pin 9: CS; output. */
  "CS": "9",
  /** Physical pin 10: NIVV; output. */
  "NIVV": "10",
  /** Physical pin 11: VIDEO; input. */
  "VIDEO": "11",
  /** Physical pin 12: NIVH; output. */
  "NIVH": "12",
  /** Physical pin 13: PHCMP; output. */
  "PHCMP": "13",
  /** Physical pin 14: C; output. */
  "C": "14",
  /** Physical pin 16: R; output. */
  "R": "16",
  /** Physical pin 17: PHASE; input. */
  "PHASE": "17",
  /** Physical pin 18: FLYV; input. */
  "FLYV": "18",
}) {
  override schema = "Video:TDA1950";
  override referencePrefix = "U";
}

/**
 * TDA1950F
 *
 * KiCad symbol: `Video:TDA1950F`. Reference prefix: `U`.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA1950F extends Component.withPins({
  /** Physical pin 1: GND; input. */
  "GND": "1",
  /** Physical pin 2: HD; output. */
  "HD": "2",
  /** Physical pin 3: FLYH; input. */
  "FLYH": "3",
  /** Physical pin 4: SANDCASTLE; output. */
  "SANDCASTLE": "4",
  /** Physical pin 5: VR; input. */
  "VR": "5",
  /** Physical pin 6: SW; output. */
  "SW": "6",
  /** Physical pin 7: MUTE; output. */
  "MUTE": "7",
  /** Physical pin 8: NIVSEP; input. */
  "NIVSEP": "8",
  /** Physical pin 9: CS; output. */
  "CS": "9",
  /** Physical pin 10: NIVV; output. */
  "NIVV": "10",
  /** Physical pin 11: VIDEO; input. */
  "VIDEO": "11",
  /** Physical pin 12: NIVH; output. */
  "NIVH": "12",
  /** Physical pin 13: PHCMP; output. */
  "PHCMP": "13",
  /** Physical pin 14: C; output. */
  "C": "14",
  /** Physical pin 16: R; output. */
  "R": "16",
  /** Physical pin 17: PHASE; input. */
  "PHASE": "17",
  /** Physical pin 18: FLYV; input. */
  "FLYV": "18",
}) {
  override schema = "Video:TDA1950F";
  override referencePrefix = "U";
}

/**
 * TDA2593
 *
 * KiCad symbol: `Video:TDA2593`. Reference prefix: `U`.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA2593 extends Component.withPins({
  /** Physical pin 1: VCC; input. */
  "VCC": "1",
  /** Physical pin 2: V0; input. */
  "V0": "2",
  /** Physical pin 3: HD; output. */
  "HD": "3",
  /** Physical pin 4: PD; input. */
  "PD": "4",
  /** Physical pin 5: unnamed; input. */
  "P5": "5",
  /** Physical pin 6: FW; input. */
  "FW": "6",
  /** Physical pin 7: SANDC; output. */
  "SANDC": "7",
  /** Physical pin 8: VD; output. */
  "VD": "8",
  /** Physical pin 9: VIDEO; input. */
  "VIDEO": "9",
  /** Physical pin 10: NS; input. */
  "NS": "10",
  /** Physical pin 11: VCR; input. */
  "VCR": "11",
  /** Physical pin 12: F; input. */
  "F_12": "12",
  /** Physical pin 13: F; input. */
  "F_13": "13",
  /** Physical pin 14: C; input. */
  "C": "14",
  /** Physical pin 15: R; input. */
  "R": "15",
  /** Physical pin 16: GND; input. */
  "GND": "16",
}) {
  override schema = "Video:TDA2593";
  override referencePrefix = "U";
}

/**
 * TDA7260
 *
 * KiCad symbol: `Video:TDA7260`. Reference prefix: `U`.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA7260 extends Component.withPins({
  /** Physical pin 1: SI; output. */
  "SI": "1",
  /** Physical pin 2: I-; input. */
  "I-": "2",
  /** Physical pin 3: I+; input. */
  "I+": "3",
  /** Physical pin 4: S0; output. */
  "S0": "4",
  /** Physical pin 5: E-; input. */
  "E-": "5",
  /** Physical pin 6: E+; input. */
  "E+": "6",
  /** Physical pin 7: LIM; output. */
  "LIM": "7",
  /** Physical pin 8: GNDA; power_in. */
  "GNDA": "8",
  /** Physical pin 9: +10; output. */
  "+10": "9",
  /** Physical pin 10: CD; input. */
  "CD": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: G4; output. */
  "G4": "12",
  /** Physical pin 13: POMPE2; input. */
  "POMPE2": "13",
  /** Physical pin 14: G3; output. */
  "G3": "14",
  /** Physical pin 15: G2; output. */
  "G2": "15",
  /** Physical pin 16: POMPE1; input. */
  "POMPE1": "16",
  /** Physical pin 17: G1; output. */
  "G1": "17",
  /** Physical pin 18: CL; input. */
  "CL": "18",
  /** Physical pin 19: VP+; input. */
  "VP+": "19",
  /** Physical pin 20: MUTE; input. */
  "MUTE": "20",
}) {
  override schema = "Video:TDA7260";
  override referencePrefix = "U";
}

/**
 * PAL/NTSC Encoder, RGB or Y/Y-R/Y-B Inputs, DIP/SOIC-20
 *
 * KiCad symbol: `Video:TDA8501`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SOIC*.
 * @see https://assets.nexperia.com/documents/data-sheet/TDA8501.pdf
 * Keywords: Video Encoder.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA8501 extends Component.withPins({
  /** Physical pin 1: -R.Y; input. */
  "-R.Y": "1",
  /** Physical pin 2: MCTR; input. */
  "MCTR": "2",
  /** Physical pin 3: -B.Y; input. */
  "-B.Y": "3",
  /** Physical pin 4: H/2; bidirectional. */
  "H/2": "4",
  /** Physical pin 5: Y; input. */
  "Y": "5",
  /** Physical pin 6: UOFF; output. */
  "UOFF": "6",
  /** Physical pin 7: R; input. */
  "R": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: G; input. */
  "G": "9",
  /** Physical pin 10: VSS; power_in. */
  "VSS": "10",
  /** Physical pin 11: B; input. */
  "B": "11",
  /** Physical pin 12: VOFF; output. */
  "VOFF": "12",
  /** Physical pin 13: VREF; passive. */
  "VREF": "13",
  /** Physical pin 14: C/OUT; output. */
  "C/OUT": "14",
  /** Physical pin 15: FLT; passive. */
  "FLT": "15",
  /** Physical pin 16: CVBS; output. */
  "CVBS": "16",
  /** Physical pin 17: NTSC/PAL; input. */
  "NTSC/PAL": "17",
  /** Physical pin 18: NOTCH; input. */
  "NOTCH": "18",
  /** Physical pin 19: Y/OUT; output. */
  "Y/OUT": "19",
  /** Physical pin 20: Y+SIN; input. */
  "Y+SIN": "20",
  /** Physical pin 21: B/ADJ; passive. */
  "B/ADJ": "21",
  /** Physical pin 22: Y+SOUT; output. */
  "Y+SOUT": "22",
  /** Physical pin 23: OSC; output. */
  "OSC": "23",
  /** Physical pin 24: CS; input. */
  "CS": "24",
}) {
  override schema = "Video:TDA8501";
  override referencePrefix = "U";
}

/**
 * 8bit Video DAC (32 MHz), DIP-16
 *
 * KiCad symbol: `Video:TDA8702`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SOIC*.
 * @see https://pdf.datasheet.live/0463ecba/semiconductors.philips.com/TDA8702T_C2.pdf
 * Keywords: DAC CNA VIDEO.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA8702 extends Component.withPins({
  /** Physical pin 1: VREF; bidirectional. */
  "VREF": "1",
  /** Physical pin 2: AGND; power_in. */
  "AGND": "2",
  /** Physical pin 3: DB2; input. */
  "DB2": "3",
  /** Physical pin 4: DB3; input. */
  "DB3": "4",
  /** Physical pin 5: CLK; input. */
  "CLK": "5",
  /** Physical pin 6: DGND; power_in. */
  "DGND": "6",
  /** Physical pin 7: DB7; input. */
  "DB7": "7",
  /** Physical pin 8: DB6; input. */
  "DB6": "8",
  /** Physical pin 9: DB5; input. */
  "DB5": "9",
  /** Physical pin 10: DB4; input. */
  "DB4": "10",
  /** Physical pin 11: DB1; input. */
  "DB1": "11",
  /** Physical pin 12: DB0; input. */
  "DB0": "12",
  /** Physical pin 13: VCCD; power_in. */
  "VCCD": "13",
  /** Physical pin 14: VOUT; output. */
  "VOUT": "14",
  /** Physical pin 15: ~VOUT~; output. */
  "~VOUT~": "15",
  /** Physical pin 16: VCCA; power_in. */
  "VCCA": "16",
}) {
  override schema = "Video:TDA8702";
  override referencePrefix = "U";
}

/**
 * 8bit Video DAC (32 MHz), SOIC-16
 *
 * KiCad symbol: `Video:TDA8702T`. Reference prefix: `U`.
 * Footprint filters: DIP*, PDIP*, SO*, SOIC*.
 * @see https://pdf.datasheet.live/0463ecba/semiconductors.philips.com/TDA8702T_C2.pdf
 * Keywords: DAC CNA VIDEO.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA8702T extends Component.withPins({
  /** Physical pin 1: VREF; bidirectional. */
  "VREF": "1",
  /** Physical pin 2: AGND; power_in. */
  "AGND": "2",
  /** Physical pin 3: DB2; input. */
  "DB2": "3",
  /** Physical pin 4: DB3; input. */
  "DB3": "4",
  /** Physical pin 5: CLK; input. */
  "CLK": "5",
  /** Physical pin 6: DGND; power_in. */
  "DGND": "6",
  /** Physical pin 7: DB7; input. */
  "DB7": "7",
  /** Physical pin 8: DB6; input. */
  "DB6": "8",
  /** Physical pin 9: DB5; input. */
  "DB5": "9",
  /** Physical pin 10: DB4; input. */
  "DB4": "10",
  /** Physical pin 11: DB1; input. */
  "DB1": "11",
  /** Physical pin 12: DB0; input. */
  "DB0": "12",
  /** Physical pin 13: VCCD; power_in. */
  "VCCD": "13",
  /** Physical pin 14: VOUT; output. */
  "VOUT": "14",
  /** Physical pin 15: ~VOUT~; output. */
  "~VOUT~": "15",
  /** Physical pin 16: VCCA; power_in. */
  "VCCA": "16",
}) {
  override schema = "Video:TDA8702T";
  override referencePrefix = "U";
}

/**
 * Triple 8bit Video DAC, QFP-44
 *
 * KiCad symbol: `Video:TDA8772`. Reference prefix: `U`.
 * Footprint filters: QFP*.
 * @see http://www.pa0qy.nl/pdf/TDA8772.PDF
 * Keywords: Video DAC Colour 8bit.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA8772 extends Component.withPins({
  /** Physical pin 1: R7; input. */
  "R7": "1",
  /** Physical pin 2: R6; input. */
  "R6": "2",
  /** Physical pin 3: R5; input. */
  "R5": "3",
  /** Physical pin 4: R4; input. */
  "R4": "4",
  /** Physical pin 5: R3; input. */
  "R3": "5",
  /** Physical pin 6: R2; input. */
  "R2": "6",
  /** Physical pin 7: R1; input. */
  "R1": "7",
  /** Physical pin 8: R0; input. */
  "R0": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: VCC; power_in. */
  "VCC_10": "10",
  /** Physical pin 11: SYNC; input. */
  "SYNC": "11",
  /** Physical pin 12: BLANK; input. */
  "BLANK": "12",
  /** Physical pin 13: G7; input. */
  "G7": "13",
  /** Physical pin 14: G6; input. */
  "G6": "14",
  /** Physical pin 15: G5; input. */
  "G5": "15",
  /** Physical pin 16: G4; input. */
  "G4": "16",
  /** Physical pin 17: G3; input. */
  "G3": "17",
  /** Physical pin 18: G2; input. */
  "G2": "18",
  /** Physical pin 19: G1; input. */
  "G1": "19",
  /** Physical pin 20: G0; input. */
  "G0": "20",
  /** Physical pin 21: CLKR; input. */
  "CLKR": "21",
  /** Physical pin 22: CLKG; input. */
  "CLKG": "22",
  /** Physical pin 23: CLKB; input. */
  "CLKB": "23",
  /** Physical pin 24: B7; input. */
  "B7": "24",
  /** Physical pin 25: B6; input. */
  "B6": "25",
  /** Physical pin 26: B5; input. */
  "B5": "26",
  /** Physical pin 27: B4; input. */
  "B4": "27",
  /** Physical pin 28: B3; input. */
  "B3": "28",
  /** Physical pin 29: B2; input. */
  "B2": "29",
  /** Physical pin 30: B1; input. */
  "B1": "30",
  /** Physical pin 31: B0; input. */
  "B0": "31",
  /** Physical pin 32: VCC; power_in. */
  "VCC_32": "32",
  /** Physical pin 33: GND; power_in. */
  "GND_33": "33",
  /** Physical pin 34: VRD; input. */
  "VRD": "34",
  /** Physical pin 35: VCCA; power_in. */
  "VCCA_35": "35",
  /** Physical pin 36: BLU; output. */
  "BLU": "36",
  /** Physical pin 37: GNDA; power_in. */
  "GNDA_37": "37",
  /** Physical pin 38: IRFA; passive. */
  "IRFA": "38",
  /** Physical pin 39: VCCA; power_in. */
  "VCCA_39": "39",
  /** Physical pin 40: GRE; output. */
  "GRE": "40",
  /** Physical pin 41: IRFB; passive. */
  "IRFB": "41",
  /** Physical pin 42: GNDA; power_in. */
  "GNDA_42": "42",
  /** Physical pin 43: VCCA; power_in. */
  "VCCA_43": "43",
  /** Physical pin 44: RED; output. */
  "RED": "44",
}) {
  override schema = "Video:TDA8772";
  override referencePrefix = "U";
}

/**
 * TDA9500
 *
 * KiCad symbol: `Video:TDA9500`. Reference prefix: `U`.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA9500 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 3: SH; output. */
  "SH": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: SANDC; output. */
  "SANDC": "5",
  /** Physical pin 6: VIN; power_in. */
  "VIN": "6",
  /** Physical pin 7: CS; output. */
  "CS": "7",
  /** Physical pin 8: TOPV; output. */
  "TOPV": "8",
  /** Physical pin 9: unnamed; passive. */
  "P9": "9",
  /** Physical pin 10: unnamed; passive. */
  "P10": "10",
  /** Physical pin 11: FW; input. */
  "FW": "11",
  /** Physical pin 12: unnamed; passive. */
  "P12": "12",
  /** Physical pin 13: unnamed; passive. */
  "P13": "13",
  /** Physical pin 14: COM; passive. */
  "COM": "14",
  /** Physical pin 15: C; input. */
  "C": "15",
  /** Physical pin 16: R; input. */
  "R": "16",
}) {
  override schema = "Video:TDA9500";
  override referencePrefix = "U";
}

/**
 * TDA9503
 *
 * KiCad symbol: `Video:TDA9503`. Reference prefix: `U`.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA9503 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 3: SH; output. */
  "SH": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: SANDC; output. */
  "SANDC": "5",
  /** Physical pin 6: VIN; power_in. */
  "VIN": "6",
  /** Physical pin 7: CS; output. */
  "CS": "7",
  /** Physical pin 8: TOPV; output. */
  "TOPV": "8",
  /** Physical pin 9: unnamed; passive. */
  "P9": "9",
  /** Physical pin 10: unnamed; passive. */
  "P10": "10",
  /** Physical pin 11: FW; input. */
  "FW": "11",
  /** Physical pin 12: unnamed; passive. */
  "P12": "12",
  /** Physical pin 13: unnamed; passive. */
  "P13": "13",
  /** Physical pin 14: COM; passive. */
  "COM": "14",
  /** Physical pin 15: C; input. */
  "C": "15",
  /** Physical pin 16: R; input. */
  "R": "16",
}) {
  override schema = "Video:TDA9503";
  override referencePrefix = "U";
}

/**
 * TDA9513
 *
 * KiCad symbol: `Video:TDA9513`. Reference prefix: `U`.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA9513 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 3: SH; output. */
  "SH": "3",
  /** Physical pin 4: VCC; power_in. */
  "VCC": "4",
  /** Physical pin 5: SANDC; output. */
  "SANDC": "5",
  /** Physical pin 6: VIN; power_in. */
  "VIN": "6",
  /** Physical pin 7: CS; output. */
  "CS": "7",
  /** Physical pin 8: TOPV; output. */
  "TOPV": "8",
  /** Physical pin 9: unnamed; passive. */
  "P9": "9",
  /** Physical pin 10: unnamed; passive. */
  "P10": "10",
  /** Physical pin 11: FW; input. */
  "FW": "11",
  /** Physical pin 12: unnamed; passive. */
  "P12": "12",
  /** Physical pin 13: unnamed; passive. */
  "P13": "13",
  /** Physical pin 14: COM; passive. */
  "COM": "14",
  /** Physical pin 15: C; input. */
  "C": "15",
  /** Physical pin 16: R; input. */
  "R": "16",
}) {
  override schema = "Video:TDA9513";
  override referencePrefix = "U";
}

/**
 * Video switching circuite for TV, DIP-8
 *
 * KiCad symbol: `Video:TEA2014`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://pdf1.alldatasheet.com/datasheet-pdf/view/123244/STMICROELECTRONICS/TEA2014.html
 * Keywords: Video switching circuite for TV.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TEA2014 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VO; output. */
  "VO": "2",
  /** Physical pin 3: IVI; input. */
  "IVI": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC": "4",
  /** Physical pin 5: 2/1; input. */
  "2/1": "5",
  /** Physical pin 6: SVO; output. */
  "SVO": "6",
  /** Physical pin 7: VCC; power_in. */
  "VCC": "7",
  /** Physical pin 8: EVI; input. */
  "EVI": "8",
}) {
  override schema = "Video:TEA2014";
  override referencePrefix = "U";
}

/**
 * TEA5115
 *
 * KiCad symbol: `Video:TEA5115`. Reference prefix: `U`.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TEA5115 extends Component.withPins({
  /** Physical pin 1: ES2; input. */
  "ES2": "1",
  /** Physical pin 2: EV2; input. */
  "EV2": "2",
  /** Physical pin 3: SEL1/2; input. */
  "SEL1/2": "3",
  /** Physical pin 4: VOUT; output. */
  "VOUT": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: BOUT; output. */
  "BOUT": "6",
  /** Physical pin 7: VSP; input. */
  "VSP": "7",
  /** Physical pin 8: EB2; input. */
  "EB2": "8",
  /** Physical pin 9: EFB2; input. */
  "EFB2": "9",
  /** Physical pin 10: EB1; input. */
  "EB1": "10",
  /** Physical pin 11: EFB1; input. */
  "EFB1": "11",
  /** Physical pin 12: ER1; input. */
  "ER1": "12",
  /** Physical pin 13: FBOUT; output. */
  "FBOUT": "13",
  /** Physical pin 14: ROUT; output. */
  "ROUT": "14",
  /** Physical pin 15: SYOUT; output. */
  "SYOUT": "15",
  /** Physical pin 16: ER2; input. */
  "ER2": "16",
  /** Physical pin 17: ES1; input. */
  "ES1": "17",
  /** Physical pin 18: EV1; input. */
  "EV1": "18",
}) {
  override schema = "Video:TEA5115";
  override referencePrefix = "U";
}

/**
 * Digital Visual Interface Compliant PanelBus Digital Transmitter, TQFP-64
 *
 * KiCad symbol: `Video:TFP410PAP`. Reference prefix: `U`.
 * Footprint filters: *TQFP*1EP?10x10mm?P0.5mm*Mask5x5mm*.
 * @see http://www.ti.com/lit/ds/symlink/tfp410.pdf
 * Keywords: DVI Encoder Driver I2C.
 * Default footprint: Package_QFP:Texas_TQFP-64-1EP_10x10mm_P0.5mm_EP8x8mm_Mask5x5mm_ThermalVias.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TFP410PAP extends Component.withPins({
  /** Physical pin 1: DVDD; power_in. */
  "DVDD_1": "1",
  /** Physical pin 2: DE; input. */
  "DE": "2",
  /** Physical pin 3: VREF; input. */
  "VREF": "3",
  /** Physical pin 4: HSYNC; input. */
  "HSYNC": "4",
  /** Physical pin 5: VSYNC; input. */
  "VSYNC": "5",
  /** Physical pin 6: CTL3/A3/DK3; input. */
  "CTL3/A3/DK3": "6",
  /** Physical pin 7: CTL2/A2/DK2; input. */
  "CTL2/A2/DK2": "7",
  /** Physical pin 8: CTL1/A1/DK1; input. */
  "CTL1/A1/DK1": "8",
  /** Physical pin 9: EDGE/HTPLG; input. */
  "EDGE/HTPLG": "9",
  /** Physical pin 10: ~PD; input. */
  "~PD": "10",
  /** Physical pin 11: MSEN/PO1; output. */
  "MSEN/PO1": "11",
  /** Physical pin 12: DVDD; passive. */
  "DVDD_12": "12",
  /** Physical pin 13: ISEL/~RST; input. */
  "ISEL/~RST": "13",
  /** Physical pin 14: DSEL/SDA; bidirectional. */
  "DSEL/SDA": "14",
  /** Physical pin 15: BSEL/SCL; input. */
  "BSEL/SCL": "15",
  /** Physical pin 16: DGND; power_in. */
  "DGND_16": "16",
  /** Physical pin 17: PGND; power_in. */
  "PGND": "17",
  /** Physical pin 18: PVDD; power_in. */
  "PVDD": "18",
  /** Physical pin 19: TFADJ; input. */
  "TFADJ": "19",
  /** Physical pin 20: TGND; power_in. */
  "TGND_20": "20",
  /** Physical pin 21: TXC-; output. */
  "TXC-": "21",
  /** Physical pin 22: TXC+; output. */
  "TXC+": "22",
  /** Physical pin 23: TVDD; power_in. */
  "TVDD_23": "23",
  /** Physical pin 24: TX0-; output. */
  "TX0-": "24",
  /** Physical pin 25: TX0+; output. */
  "TX0+": "25",
  /** Physical pin 26: TGND; passive. */
  "TGND_26": "26",
  /** Physical pin 27: TX1-; output. */
  "TX1-": "27",
  /** Physical pin 28: TX1+; output. */
  "TX1+": "28",
  /** Physical pin 29: TVDD; passive. */
  "TVDD_29": "29",
  /** Physical pin 30: TX2-; output. */
  "TX2-": "30",
  /** Physical pin 31: TX2+; output. */
  "TX2+": "31",
  /** Physical pin 32: TGND; passive. */
  "TGND_32": "32",
  /** Physical pin 33: DVDD; passive. */
  "DVDD_33": "33",
  /** Physical pin 34: RESERVED; input. */
  "RESERVED": "34",
  /** Physical pin 35: DKEN; input. */
  "DKEN": "35",
  /** Physical pin 36: DATA23; input. */
  "DATA23": "36",
  /** Physical pin 37: DATA22; input. */
  "DATA22": "37",
  /** Physical pin 38: DATA21; input. */
  "DATA21": "38",
  /** Physical pin 39: DATA20; input. */
  "DATA20": "39",
  /** Physical pin 40: DATA19; input. */
  "DATA19": "40",
  /** Physical pin 41: DATA18; input. */
  "DATA18": "41",
  /** Physical pin 42: DATA17; input. */
  "DATA17": "42",
  /** Physical pin 43: DATA16; input. */
  "DATA16": "43",
  /** Physical pin 44: DATA15; input. */
  "DATA15": "44",
  /** Physical pin 45: DATA14; input. */
  "DATA14": "45",
  /** Physical pin 46: DATA13; input. */
  "DATA13": "46",
  /** Physical pin 47: DATA12; input. */
  "DATA12": "47",
  /** Physical pin 48: DGND; passive. */
  "DGND_48": "48",
  /** Physical pin 49: NC; no_connect. */
  "NC": "49",
  /** Physical pin 50: DATA11; input. */
  "DATA11": "50",
  /** Physical pin 51: DATA10; input. */
  "DATA10": "51",
  /** Physical pin 52: DATA9; input. */
  "DATA9": "52",
  /** Physical pin 53: DATA8; input. */
  "DATA8": "53",
  /** Physical pin 54: DATA7; input. */
  "DATA7": "54",
  /** Physical pin 55: DATA6; input. */
  "DATA6": "55",
  /** Physical pin 56: IDCK-; input. */
  "IDCK-": "56",
  /** Physical pin 57: IDCK+; input. */
  "IDCK+": "57",
  /** Physical pin 58: DATA5; input. */
  "DATA5": "58",
  /** Physical pin 59: DATA4; input. */
  "DATA4": "59",
  /** Physical pin 60: DATA3; input. */
  "DATA3": "60",
  /** Physical pin 61: DATA2; input. */
  "DATA2": "61",
  /** Physical pin 62: DATA1; input. */
  "DATA1": "62",
  /** Physical pin 63: DATA0; input. */
  "DATA0": "63",
  /** Physical pin 64: DGND; passive. */
  "DGND_64": "64",
  /** Physical pin 65: EP; power_in. */
  "EP": "65",
}) {
  override schema = "Video:TFP410PAP";
  override referencePrefix = "U";
}

