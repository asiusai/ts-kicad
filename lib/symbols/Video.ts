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
 */
export class AD725 extends Component.withPins({
  "NTSC/PAL": "1",
  "AGND": "2",
  "4FSC_CLK": "3",
  "AVCC": "4",
  "CE": "5",
  "RED": "6",
  "GREEN": "7",
  "BLUE": "8",
  "CHROM_OUT": "9",
  "CVBS_OUT": "10",
  "LUM_OUT": "11",
  "TRAP": "12",
  "DGND": "13",
  "DVCC": "14",
  "VSYNC": "15",
  "HSYNC": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "NTSC/PAL": "input", AGND: "power_in", "4FSC_CLK": "input", AVCC: "power_in", CE: "power_in", RED: "input", GREEN: "input", BLUE: "input", CHROM_OUT: "output", CVBS_OUT: "output", LUM_OUT: "output", TRAP: "input", DGND: "power_in", DVCC: "power_in", VSYNC: "input", HSYNC: "input", ...opts.pinTypes } });
  }
  override schema = "Video:AD725";
  override referencePrefix = "U";
}

/**
 * Video DAC (32 MHz), SOIC/TSSOP-28
 *
 * KiCad symbol: `Video:AD9708AR`. Reference prefix: `U`.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD9708.pdf
 * Keywords: DAC CNA VIDEO.
 */
export class AD9708AR extends Component.withPins({
  "DB7": "1",
  "DB6": "2",
  "DB5": "3",
  "DB4": "4",
  "DB3": "5",
  "DB2": "6",
  "DB1": "7",
  "DB0": "8",
  "SLEEP": "15",
  "REFLO": "16",
  "REFIO": "17",
  "FS_ADJ": "18",
  "COMP1": "19",
  "ACOM": "20",
  "IOUTB": "21",
  "IOUTA": "22",
  "COMP2": "23",
  "AVDD": "24",
  "DCOM": "26",
  "DVDD": "27",
  "Clock": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DB7: "input", DB6: "input", DB5: "input", DB4: "input", DB3: "input", DB2: "input", DB1: "input", DB0: "input", SLEEP: "input", REFLO: "power_in", REFIO: "bidirectional", FS_ADJ: "output", COMP1: "bidirectional", ACOM: "power_in", IOUTB: "output", IOUTA: "output", COMP2: "bidirectional", AVDD: "power_in", DCOM: "power_in", DVDD: "power_in", Clock: "input", ...opts.pinTypes } });
  }
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
 */
export class AD9891 extends Component.withPins({
  "VD": "A1",
  "DVDD": "A2",
  "MSHUT": "A3",
  "SDI": "A4",
  "REFT": "A5",
  "REFB": "A6",
  "BYP3": "A7",
  "CDD-IN": "A8",
  "BYP1": "A9",
  "AVDD1": "A10",
  "HD": "B1",
  "DVSS": "B2",
  "STROBE": "B3",
  "SCK": "B4",
  "SL": "B5",
  "AVSS2": "B6",
  "AVDD2": "B7",
  "BYP2": "B8",
  "AVSS1": "B9",
  "TCVDD": "B10",
  "SYNC": "C1",
  "LD/FD": "C2",
  "TCVSS": "C9",
  "CLI": "C10",
  "DCLK": "D1",
  "PBLK/CLPOB": "D2",
  "RG": "D9",
  "CLO": "D10",
  "RGVSS": "E9",
  "RGVDD": "E10",
  "D1": "F1",
  "D0/SD0": "F2",
  "H4": "F9",
  "H3": "F10",
  "D3": "G1",
  "D2": "G2",
  "HVSS": "G9",
  "HVDD": "G10",
  "D5": "H1",
  "D4": "H2",
  "H2": "H9",
  "H1": "H10",
  "D7": "J1",
  "D6": "J2",
  "VSUB": "J3",
  "SUBCK": "J4",
  "V2": "J5",
  "V4": "J6",
  "VSG2/V6": "J7",
  "VSG4/V8": "J8",
  "VSG6": "J9",
  "VSG8": "J10",
  "D9": "K1",
  "D8": "K2",
  "DRVDD": "K3",
  "DRVSS": "K4",
  "V1": "K5",
  "V3": "K6",
  "VSG1/V5": "K7",
  "VSG3/V7": "K8",
  "VSG5": "K9",
  "VSG7": "K10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VD: "bidirectional", DVDD: "power_in", MSHUT: "output", SDI: "input", REFT: "output", REFB: "output", BYP3: "output", "CDD-IN": "input", BYP1: "output", AVDD1: "power_in", HD: "bidirectional", DVSS: "power_in", STROBE: "output", SCK: "input", SL: "input", AVSS2: "power_in", AVDD2: "power_in", BYP2: "output", AVSS1: "power_in", TCVDD: "power_in", SYNC: "input", "LD/FD": "output", TCVSS: "power_in", CLI: "input", DCLK: "output", "PBLK/CLPOB": "output", RG: "output", CLO: "output", RGVSS: "power_in", RGVDD: "power_in", D1: "output", "D0/SD0": "output", H4: "output", H3: "output", D3: "output", D2: "output", HVSS: "power_in", HVDD: "power_in", D5: "output", D4: "output", H2: "output", H1: "output", D7: "output", D6: "output", VSUB: "output", SUBCK: "output", V2: "output", V4: "output", "VSG2/V6": "output", "VSG4/V8": "output", VSG6: "output", VSG8: "output", D9: "input", D8: "output", DRVDD: "power_out", DRVSS: "power_out", V1: "output", V3: "output", "VSG1/V5": "output", "VSG3/V7": "output", VSG5: "output", VSG7: "output", ...opts.pinTypes } });
  }
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
 */
export class AD9895 extends Component.withPins({
  "VD": "A1",
  "DVDD": "A2",
  "MSHUT": "A3",
  "SDI": "A4",
  "REFT": "A5",
  "REFB": "A6",
  "BYP3": "A7",
  "CDD-IN": "A8",
  "BYP1": "A9",
  "AVDD1": "A10",
  "HD": "B1",
  "DVSS": "B2",
  "STROBE": "B3",
  "SCK": "B4",
  "SL": "B5",
  "AVSS2": "B6",
  "AVDD2": "B7",
  "BYP2": "B8",
  "AVSS1": "B9",
  "TCVDD": "B10",
  "SYNC": "C1",
  "LD/FD": "C2",
  "TCVSS": "C9",
  "CLI": "C10",
  "DCLK": "D1",
  "PBLK/CLPOB": "D2",
  "RG": "D9",
  "CLO": "D10",
  "D1": "E1",
  "D0": "E2",
  "RGVSS": "E9",
  "RGVDD": "E10",
  "D3": "F1",
  "D2/SD0": "F2",
  "H4": "F9",
  "H3": "F10",
  "D5": "G1",
  "D4": "G2",
  "HVSS": "G9",
  "HVDD": "G10",
  "D7": "H1",
  "D6": "H2",
  "H2": "H9",
  "H1": "H10",
  "D9": "J1",
  "D8": "J2",
  "VSUB": "J3",
  "SUBCK": "J4",
  "V2": "J5",
  "V4": "J6",
  "VSG2/V6": "J7",
  "VSG4/V8": "J8",
  "VSG6": "J9",
  "VSG8": "J10",
  "D11": "K1",
  "D10": "K2",
  "DRVDD": "K3",
  "DRVSS": "K4",
  "V1": "K5",
  "V3": "K6",
  "VSG1/V5": "K7",
  "VSG3/V7": "K8",
  "VSG5": "K9",
  "VSG7": "K10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VD: "bidirectional", DVDD: "power_in", MSHUT: "output", SDI: "input", REFT: "output", REFB: "output", BYP3: "output", "CDD-IN": "input", BYP1: "output", AVDD1: "power_in", HD: "bidirectional", DVSS: "power_in", STROBE: "output", SCK: "input", SL: "input", AVSS2: "power_in", AVDD2: "power_in", BYP2: "output", AVSS1: "power_in", TCVDD: "power_in", SYNC: "input", "LD/FD": "output", TCVSS: "power_in", CLI: "input", DCLK: "output", "PBLK/CLPOB": "output", RG: "output", CLO: "output", D1: "output", D0: "output", RGVSS: "power_in", RGVDD: "power_in", D3: "output", "D2/SD0": "output", H4: "output", H3: "output", D5: "output", D4: "output", HVSS: "power_in", HVDD: "power_in", D7: "output", D6: "output", H2: "output", H1: "output", D9: "output", D8: "output", VSUB: "output", SUBCK: "output", V2: "output", V4: "output", "VSG2/V6": "output", "VSG4/V8": "output", VSG6: "output", VSG8: "output", D11: "input", D10: "output", DRVDD: "power_out", DRVSS: "power_out", V1: "output", V3: "output", "VSG1/V5": "output", "VSG3/V7": "output", VSG5: "output", VSG7: "output", ...opts.pinTypes } });
  }
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
 */
export class AD9984AKST extends Component.withPins({
  "VD_1": "1",
  "B_AIN0": "2",
  "GND_3": "3",
  "B_AIN1": "4",
  "VD_5": "5",
  "G_AIN0": "6",
  "GND_7": "7",
  "SOGIN0": "8",
  "VD_9": "9",
  "G_AIN1": "10",
  "GND_11": "11",
  "SOGIN1": "12",
  "VD_13": "13",
  "R_AIN0": "14",
  "GND_15": "15",
  "R_AIN1": "16",
  "PWR_DN": "17",
  "REF_LO": "18",
  "NC": "19",
  "REF_HI": "20",
  "O/E_FIELD": "21",
  "VSOUT/A0": "22",
  "HSOUT": "23",
  "SOGOUT": "24",
  "DATACK": "25",
  "VDD_26": "26",
  "GND_27": "27",
  "RED_9": "28",
  "RED_8": "29",
  "RED_7": "30",
  "RED_6": "31",
  "RED_5": "32",
  "RED_4": "33",
  "RED_3": "34",
  "RED_2": "35",
  "RED_1": "36",
  "RED_0": "37",
  "VDD_38": "38",
  "GND_39": "39",
  "GND_40": "40",
  "DAV_DD": "41",
  "GREEN_9": "42",
  "GREEN_8": "43",
  "GREEN_7": "44",
  "GREEN_6": "45",
  "GREEN_5": "46",
  "GREEN_4": "47",
  "GREEN_3": "48",
  "GREEN_2": "49",
  "GREEN_1": "50",
  "GREEN_0": "51",
  "VDD_52": "52",
  "GND_53": "53",
  "BLUE_9": "54",
  "BLUE_8": "55",
  "BLUE_7": "56",
  "BLUE_6": "57",
  "BLUE_5": "58",
  "BLUE_4": "59",
  "BLUE_3": "60",
  "BLUE_2": "61",
  "BLUE_1": "62",
  "BLUE_0": "63",
  "VDD_64": "64",
  "GND_65": "65",
  "SDA": "66",
  "SCL": "67",
  "HSYNC1": "68",
  "VSYNC1": "69",
  "HSYNC0": "70",
  "VSYNC0": "71",
  "EXTCK/COAST": "72",
  "CLAMP": "73",
  "PV_D_74": "74",
  "GND_75": "75",
  "PV_D_76": "76",
  "GND_77": "77",
  "FILT": "78",
  "PV_D_79": "79",
  "GND_80": "80",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VD_1: "power_in", B_AIN0: "input", GND_3: "power_in", B_AIN1: "input", VD_5: "passive", G_AIN0: "input", GND_7: "passive", SOGIN0: "input", VD_9: "passive", G_AIN1: "input", GND_11: "passive", SOGIN1: "input", VD_13: "passive", R_AIN0: "input", GND_15: "passive", R_AIN1: "input", PWR_DN: "input", REF_LO: "input", NC: "no_connect", REF_HI: "input", "O/E_FIELD": "output", "VSOUT/A0": "bidirectional", HSOUT: "output", SOGOUT: "output", DATACK: "output", VDD_26: "power_in", GND_27: "passive", RED_9: "output", RED_8: "output", RED_7: "output", RED_6: "output", RED_5: "output", RED_4: "output", RED_3: "output", RED_2: "output", RED_1: "output", RED_0: "output", VDD_38: "passive", GND_39: "passive", GND_40: "passive", DAV_DD: "power_in", GREEN_9: "output", GREEN_8: "output", GREEN_7: "output", GREEN_6: "output", GREEN_5: "output", GREEN_4: "output", GREEN_3: "output", GREEN_2: "output", GREEN_1: "output", GREEN_0: "output", VDD_52: "passive", GND_53: "passive", BLUE_9: "output", BLUE_8: "output", BLUE_7: "output", BLUE_6: "output", BLUE_5: "output", BLUE_4: "output", BLUE_3: "output", BLUE_2: "output", BLUE_1: "output", BLUE_0: "output", VDD_64: "passive", GND_65: "passive", SDA: "bidirectional", SCL: "input", HSYNC1: "input", VSYNC1: "input", HSYNC0: "input", VSYNC0: "input", "EXTCK/COAST": "input", CLAMP: "input", PV_D_74: "power_in", GND_75: "passive", PV_D_76: "passive", GND_77: "passive", FILT: "input", PV_D_79: "passive", GND_80: "passive", ...opts.pinTypes } });
  }
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
 */
export class ADA4430_1YKSZ extends Component.withPins({
  "V_{IN}": "1",
  "GND": "2",
  "SAG": "3",
  "V_{OUT}": "4",
  "~{DIS}": "5",
  "V_{S}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{IN}": "input", GND: "power_in", SAG: "input", "V_{OUT}": "output", "~{DIS}": "input", "V_{S}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADA4430_1WYRTZ extends Component.withPins({
  "V_{IN}": "1",
  "GND": "2",
  "SAG": "3",
  "V_{OUT}": "4",
  "~{DIS}": "5",
  "V_{S}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{IN}": "input", GND: "power_in", SAG: "input", "V_{OUT}": "output", "~{DIS}": "input", "V_{S}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class ADV7280xCP extends Component.withPins({
  "DGND_1": "1",
  "DVDDIO": "2",
  "DVDD_3": "3",
  "DGND_4": "4",
  "P7": "5",
  "P6": "6",
  "P5": "7",
  "P4": "8",
  "P3": "9",
  "P2": "10",
  "P1": "11",
  "P0": "12",
  "DVDD_13": "13",
  "XTALP": "14",
  "XTALN": "15",
  "PVDD": "16",
  "AIN1": "17",
  "AIN2_18": "18",
  "VREFP": "19",
  "VREFN": "20",
  "AVDD": "21",
  "AIN2_22": "22",
  "AIN3": "23",
  "~INTRQ": "24",
  "~RESET": "25",
  "ALSB": "26",
  "SDATA": "27",
  "SCLK": "28",
  "VS/FIELD/SFL": "29",
  "HS": "30",
  "~PWRDWN": "31",
  "LLC": "32",
  "DGND_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DGND_1: "power_in", DVDDIO: "power_in", DVDD_3: "power_in", DGND_4: "passive", P7: "output", P6: "output", P5: "output", P4: "output", P3: "output", P2: "output", P1: "output", P0: "output", DVDD_13: "power_in", XTALP: "output", XTALN: "input", PVDD: "power_in", AIN1: "input", AIN2_18: "input", VREFP: "output", VREFN: "output", AVDD: "power_in", AIN2_22: "input", AIN3: "input", "~INTRQ": "output", "~RESET": "input", ALSB: "input", SDATA: "bidirectional", SCLK: "input", "VS/FIELD/SFL": "output", HS: "output", "~PWRDWN": "input", LLC: "output", DGND_33: "passive", ...opts.pinTypes } });
  }
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
 */
export class ADV7390BCPZ extends Component.withPins({
  "V_{DD_IO}": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "V_{DD}_5": "5",
  "DGND_6": "6",
  "P5": "7",
  "P6": "8",
  "P7": "9",
  "ALSB": "10",
  "SDA": "11",
  "SCL": "12",
  "CLKIN": "13",
  "~{RESET}": "14",
  "PGND": "15",
  "EXT_LF": "16",
  "P_{VDD}": "17",
  "AGND_18": "18",
  "V_{AA}": "19",
  "DAC3": "20",
  "DAC2": "21",
  "DAC1": "22",
  "COMP": "23",
  "R_{SET}": "24",
  "SFL": "25",
  "~{VSYNC}": "26",
  "~{HSYNC}": "27",
  "V_{DD}_28": "28",
  "DGND_29": "29",
  "P0": "30",
  "P1": "31",
  "GND_IO": "32",
  "AGND_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD_IO}": "power_in", P2: "input", P3: "input", P4: "input", "V_{DD}_5": "power_in", DGND_6: "power_in", P5: "input", P6: "input", P7: "input", ALSB: "input", SDA: "bidirectional", SCL: "input", CLKIN: "input", "~{RESET}": "input", PGND: "power_in", EXT_LF: "passive", "P_{VDD}": "power_in", AGND_18: "power_in", "V_{AA}": "power_in", DAC3: "output", DAC2: "output", DAC1: "output", COMP: "output", "R_{SET}": "input", SFL: "input", "~{VSYNC}": "bidirectional", "~{HSYNC}": "bidirectional", "V_{DD}_28": "passive", DGND_29: "passive", P0: "input", P1: "input", GND_IO: "power_in", AGND_33: "passive", ...opts.pinTypes } });
  }
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
 */
export class ADV7391BCPZ extends Component.withPins({
  "V_{DD_IO}": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "V_{DD}_5": "5",
  "DGND_6": "6",
  "P5": "7",
  "P6": "8",
  "P7": "9",
  "ALSB": "10",
  "SDA": "11",
  "SCL": "12",
  "CLKIN": "13",
  "~{RESET}": "14",
  "PGND": "15",
  "EXT_LF": "16",
  "P_{VDD}": "17",
  "AGND_18": "18",
  "V_{AA}": "19",
  "DAC3": "20",
  "DAC2": "21",
  "DAC1": "22",
  "COMP": "23",
  "R_{SET}": "24",
  "SFL": "25",
  "~{VSYNC}": "26",
  "~{HSYNC}": "27",
  "V_{DD}_28": "28",
  "DGND_29": "29",
  "P0": "30",
  "P1": "31",
  "GND_IO": "32",
  "AGND_33": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V_{DD_IO}": "power_in", P2: "input", P3: "input", P4: "input", "V_{DD}_5": "power_in", DGND_6: "power_in", P5: "input", P6: "input", P7: "input", ALSB: "input", SDA: "bidirectional", SCL: "input", CLKIN: "input", "~{RESET}": "input", PGND: "power_in", EXT_LF: "passive", "P_{VDD}": "power_in", AGND_18: "power_in", "V_{AA}": "power_in", DAC3: "output", DAC2: "output", DAC1: "output", COMP: "output", "R_{SET}": "input", SFL: "input", "~{VSYNC}": "bidirectional", "~{HSYNC}": "bidirectional", "V_{DD}_28": "passive", DGND_29: "passive", P0: "input", P1: "input", GND_IO: "power_in", AGND_33: "passive", ...opts.pinTypes } });
  }
  override schema = "Video:ADV7391BCPZ";
  override referencePrefix = "U";
}

/**
 * Video Genlock PLL
 *
 * KiCad symbol: `Video:AV9173`. Reference prefix: `U`.
 * @see http://www.ibselectronics.com/ibsstore/datasheet/Others/AV9173-01CN08.pdf
 * Keywords: video pll.
 */
export class AV9173 extends Component.withPins({
  "FSIGIN": "1",
  "FREFIN": "2",
  "GND": "3",
  "FS0": "4",
  "OE": "5",
  "CKKOUT": "6",
  "VCC": "7",
  "CLK/2": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { FSIGIN: "input", FREFIN: "input", GND: "input", FS0: "input", OE: "input", CKKOUT: "tri_state", VCC: "input", "CLK/2": "tri_state", ...opts.pinTypes } });
  }
  override schema = "Video:AV9173";
  override referencePrefix = "U";
}

/**
 * CX7930
 *
 * KiCad symbol: `Video:CX7930`. Reference prefix: `U`.
 */
export class CX7930 extends Component.withPins({
  "VRI": "1",
  "OFLD1": "2",
  "OBF": "3",
  "OSYNC": "4",
  "OFLD": "5",
  "OBLK": "6",
  "OLALT": "7",
  "OHD": "8",
  "4FSCO": "9",
  "4FSCI": "10",
  "OVD": "12",
  "VSS": "14",
  "LALTRI": "15",
  "TEST": "16",
  "OSC": "19",
  "EXT": "20",
  "MODE1": "21",
  "MODE2": "22",
  "HRI": "23",
  "HCOMO": "24",
  "CLOUT": "25",
  "CLIN": "26",
  "OFH": "27",
  "VDD": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VRI: "input", OFLD1: "output", OBF: "output", OSYNC: "output", OFLD: "output", OBLK: "output", OLALT: "output", OHD: "output", "4FSCO": "output", "4FSCI": "input", OVD: "output", VSS: "input", LALTRI: "input", TEST: "input", OSC: "output", EXT: "input", MODE1: "input", MODE2: "input", HRI: "input", HCOMO: "output", CLOUT: "output", CLIN: "input", OFH: "output", VDD: "input", ...opts.pinTypes } });
  }
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
 */
export class CXA1145P extends Component.withPins({
  "GND_1": "1",
  "R_IN": "2",
  "G_IN": "3",
  "B_IN": "4",
  "XO_OUT": "5",
  "XO_IN": "6",
  "NTSC/~{PAL}_IN": "7",
  "AUDIO_IN": "8",
  "AUDIO_OUT": "9",
  "C_SYNC_IN": "10",
  "C_SYNC_OUT": "11",
  "V_{CC}_1": "12",
  "I_REF": "13",
  "V_REF": "14",
  "C_OUT": "15",
  "Y_OUT": "16",
  "C_IN": "17",
  "Y_IN": "18",
  "V_{CC}_2": "19",
  "C_VIDEO_OUT": "20",
  "B_OUT": "21",
  "G_OUT": "22",
  "R_OUT": "23",
  "GND_2": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND_1: "power_in", R_IN: "input", G_IN: "input", B_IN: "input", XO_OUT: "output", XO_IN: "input", "NTSC/~{PAL}_IN": "input", AUDIO_IN: "input", AUDIO_OUT: "output", C_SYNC_IN: "input", C_SYNC_OUT: "output", "V_{CC}_1": "power_in", I_REF: "input", V_REF: "output", C_OUT: "output", Y_OUT: "output", C_IN: "input", Y_IN: "input", "V_{CC}_2": "power_in", C_VIDEO_OUT: "output", B_OUT: "output", G_OUT: "output", R_OUT: "output", GND_2: "power_in", ...opts.pinTypes } });
  }
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
 */
export class CXD3400N extends Component.withPins({
  "VDD": "1",
  "XSHT": "2",
  "XV3": "3",
  "XSG3B": "4",
  "XSG3A": "5",
  "XV1": "6",
  "XSG1B": "7",
  "XSG1A": "8",
  "XV4": "9",
  "XV2": "10",
  "GND": "11",
  "V2": "12",
  "V4": "13",
  "V1A": "14",
  "VH": "15",
  "V1B": "16",
  "V3A": "17",
  "VL": "18",
  "V3B": "19",
  "SHT": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", XSHT: "input", XV3: "input", XSG3B: "input", XSG3A: "input", XV1: "input", XSG1B: "input", XSG1A: "input", XV4: "input", XV2: "input", GND: "power_in", V2: "output", V4: "output", V1A: "output", VH: "power_in", V1B: "output", V3A: "output", VL: "power_in", V3B: "output", SHT: "output", ...opts.pinTypes } });
  }
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
 */
export class HD63484P extends Component.withPins({
  "~{CUD1}": "1",
  "~{CUD2}": "2",
  "R/~{W}": "3",
  "~{CS}": "4",
  "RS": "5",
  "~{RES}": "6",
  "~{DONE}": "7",
  "~{DREQ}": "8",
  "~{DACK}": "9",
  "~{DTACK}": "10",
  "~{IRQ}": "11",
  "~{HSYNC}": "12",
  "~{VSYNC}": "13",
  "VCC_14": "14",
  "~{EXTSYNC}": "15",
  "VSS_16": "16",
  "D0": "17",
  "D1": "18",
  "D2": "19",
  "D3": "20",
  "D4": "21",
  "D5": "22",
  "D6": "23",
  "D7": "24",
  "D8": "25",
  "D9": "26",
  "D10": "27",
  "D11": "28",
  "D12": "29",
  "D13": "30",
  "D14": "31",
  "D15": "32",
  "RA4": "33",
  "MA19/RA3": "34",
  "MA18/RA2": "35",
  "MA17/RA1": "36",
  "MA16/RA0": "37",
  "MAD15": "38",
  "MAD14": "39",
  "MAD13": "40",
  "MAD12": "41",
  "MAD11": "42",
  "MAD10": "43",
  "MAD9": "44",
  "MAD8": "45",
  "MAD7": "46",
  "MAD6": "47",
  "MAD5": "48",
  "VCC_49": "49",
  "2CLK": "50",
  "VSS_51": "51",
  "MCYC": "52",
  "~{AS}": "53",
  "~{DRAW}": "54",
  "MRD": "55",
  "CHR": "56",
  "MAD4": "57",
  "MAD3": "58",
  "MAD2": "59",
  "MAD1": "60",
  "MAD0": "61",
  "~{DISP2}": "62",
  "~{DISP1}": "63",
  "LPSTB": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{CUD1}": "output", "~{CUD2}": "output", "R/~{W}": "input", "~{CS}": "input", RS: "input", "~{RES}": "input", "~{DONE}": "bidirectional", "~{DREQ}": "output", "~{DACK}": "input", "~{DTACK}": "tri_state", "~{IRQ}": "open_collector", "~{HSYNC}": "output", "~{VSYNC}": "output", VCC_14: "power_in", "~{EXTSYNC}": "bidirectional", VSS_16: "power_in", D0: "bidirectional", D1: "bidirectional", D2: "bidirectional", D3: "bidirectional", D4: "bidirectional", D5: "bidirectional", D6: "bidirectional", D7: "bidirectional", D8: "bidirectional", D9: "bidirectional", D10: "bidirectional", D11: "bidirectional", D12: "bidirectional", D13: "bidirectional", D14: "bidirectional", D15: "bidirectional", RA4: "output", "MA19/RA3": "output", "MA18/RA2": "output", "MA17/RA1": "output", "MA16/RA0": "output", MAD15: "bidirectional", MAD14: "bidirectional", MAD13: "bidirectional", MAD12: "bidirectional", MAD11: "bidirectional", MAD10: "bidirectional", MAD9: "bidirectional", MAD8: "bidirectional", MAD7: "bidirectional", MAD6: "bidirectional", MAD5: "bidirectional", VCC_49: "passive", "2CLK": "input", VSS_51: "passive", MCYC: "output", "~{AS}": "output", "~{DRAW}": "output", MRD: "output", CHR: "output", MAD4: "bidirectional", MAD3: "bidirectional", MAD2: "bidirectional", MAD1: "bidirectional", MAD0: "bidirectional", "~{DISP2}": "output", "~{DISP1}": "output", LPSTB: "input", ...opts.pinTypes } });
  }
  override schema = "Video:HD63484P";
  override referencePrefix = "U";
}

/**
 * HD63484_PLCC
 *
 * KiCad symbol: `Video:HD63484_PLCC`. Reference prefix: `U`.
 */
export class HD63484_PLCC extends Component.withPins({
  "VCC_1": "1",
  "CUD1": "2",
  "CUD2": "3",
  "R/W": "4",
  "CS": "5",
  "RS": "6",
  "RESET": "7",
  "DONE": "8",
  "DREQ": "9",
  "DACK": "10",
  "DTACK": "11",
  "IRQ": "12",
  "HSYNC": "13",
  "VSYNC": "14",
  "VCC_15": "15",
  "EXTSYNC": "16",
  "GND_17": "17",
  "GND_18": "18",
  "D0": "19",
  "D1": "20",
  "D2": "21",
  "D3": "22",
  "D4": "23",
  "D5": "24",
  "D6": "25",
  "D7": "26",
  "D8": "27",
  "D9": "28",
  "D10": "29",
  "D11": "30",
  "D12": "31",
  "D13": "32",
  "D14": "33",
  "D15": "34",
  "GND_35": "35",
  "RA4": "36",
  "MA19/RA3": "37",
  "MA18/RA2": "38",
  "MA17/RA1": "39",
  "MA16/RA0": "40",
  "MAD15": "41",
  "MAD14": "42",
  "MAD13": "43",
  "MAD12": "44",
  "MAD11": "45",
  "MAD10": "46",
  "MAD9": "47",
  "MAD8": "48",
  "MAD7": "49",
  "MAD6": "50",
  "MAD5": "51",
  "VCC_52": "52",
  "2CLK": "53",
  "GND_54": "54",
  "GND_55": "55",
  "MCYC": "56",
  "AS": "57",
  "DRAW": "58",
  "MRD": "59",
  "CHR": "60",
  "MAD4": "61",
  "MAD3": "62",
  "MAD2": "63",
  "MAD1": "64",
  "MAD0": "65",
  "DISP2": "66",
  "DISP1": "67",
  "LPSTB": "68",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC_1: "input", CUD1: "output", CUD2: "output", "R/W": "input", CS: "input", RS: "input", RESET: "input", DONE: "input", DREQ: "output", DACK: "input", DTACK: "output", IRQ: "output", HSYNC: "output", VSYNC: "output", VCC_15: "input", EXTSYNC: "input", GND_17: "input", GND_18: "input", D0: "tri_state", D1: "tri_state", D2: "tri_state", D3: "tri_state", D4: "tri_state", D5: "tri_state", D6: "tri_state", D7: "tri_state", D8: "tri_state", D9: "tri_state", D10: "tri_state", D11: "tri_state", D12: "tri_state", D13: "tri_state", D14: "tri_state", D15: "tri_state", GND_35: "input", RA4: "output", "MA19/RA3": "output", "MA18/RA2": "output", "MA17/RA1": "output", "MA16/RA0": "output", MAD15: "tri_state", MAD14: "tri_state", MAD13: "tri_state", MAD12: "tri_state", MAD11: "tri_state", MAD10: "tri_state", MAD9: "tri_state", MAD8: "tri_state", MAD7: "tri_state", MAD6: "tri_state", MAD5: "tri_state", VCC_52: "input", "2CLK": "input", GND_54: "input", GND_55: "input", MCYC: "output", AS: "output", DRAW: "output", MRD: "output", CHR: "output", MAD4: "tri_state", MAD3: "tri_state", MAD2: "tri_state", MAD1: "tri_state", MAD0: "tri_state", DISP2: "output", DISP1: "output", LPSTB: "input", ...opts.pinTypes } });
  }
  override schema = "Video:HD63484_PLCC";
  override referencePrefix = "U";
}

/**
 * Diagonal 8mm B/W Progressive Scan CCD Image Sensor with Square Pixel, CERDIP-22
 *
 * KiCad symbol: `Video:ICX415AQ`. Reference prefix: `U`.
 * Keywords: CCD B/W Image Sensor.
 */
export class ICX415AQ extends Component.withPins({
  "V3": "3",
  "V2": "4",
  "V1": "5",
  "GND": "7",
  "VOUT": "9",
  "CGG": "10",
  "VDD": "12",
  "RG": "13",
  "VL": "14",
  "SUB": "15",
  "H1": "16",
  "H2": "17",
  "CSUB": "20",
  "SUBCIR": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { V3: "input", V2: "input", V1: "input", GND: "power_in", VOUT: "output", CGG: "input", VDD: "power_in", RG: "input", VL: "power_in", SUB: "input", H1: "input", H2: "input", CSUB: "input", SUBCIR: "power_in", ...opts.pinTypes } });
  }
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
 */
export class ISL59885 extends Component.withPins({
  "CSYNC": "1",
  "CVBS": "2",
  "VSYNC": "3",
  "GND": "4",
  "~{HD}": "5",
  "CSET": "6",
  "HSYNC": "7",
  "VDD": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CSYNC: "output", CVBS: "input", VSYNC: "output", GND: "power_in", "~{HD}": "output", CSET: "passive", HSYNC: "output", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LM1881 extends Component.withPins({
  "CSOUT": "1",
  "CVIN": "2",
  "VSOUT": "3",
  "GND": "4",
  "BPOUT": "5",
  "RSET": "6",
  "OEOUT": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CSOUT: "output", CVIN: "input", VSOUT: "output", GND: "power_in", BPOUT: "output", RSET: "input", OEOUT: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Video:LM1881";
  override referencePrefix = "U";
}

/**
 * 8-Channel CMOS RF Video Multiplexer
 *
 * KiCad symbol: `Video:MAX310`. Reference prefix: `U`.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX310-MAX311.pdf
 * Keywords: video rf.
 */
export class MAX310 extends Component.withPins({
  "S1": "1",
  "S2": "2",
  "S3": "3",
  "S4": "4",
  "S5": "5",
  "S6": "6",
  "S7": "7",
  "S8": "8",
  "V-": "9",
  "OUT": "10",
  "V+": "11",
  "EN": "12",
  "A0": "13",
  "A1": "14",
  "A2": "15",
  "GND": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "input", S2: "input", S3: "input", S4: "input", S5: "input", S6: "input", S7: "input", S8: "input", "V-": "input", OUT: "input", "V+": "input", EN: "input", A0: "input", A1: "input", A2: "input", GND: "input", ...opts.pinTypes } });
  }
  override schema = "Video:MAX310";
  override referencePrefix = "U";
}

/**
 * 8-Channel CMOS RF Video Multiplexer
 *
 * KiCad symbol: `Video:MAX311`. Reference prefix: `U`.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX310-MAX311.pdf
 * Keywords: video rf.
 */
export class MAX311 extends Component.withPins({
  "S1A": "1",
  "S2A": "2",
  "S3A": "3",
  "S4A": "4",
  "S1B": "5",
  "S2B": "6",
  "S3B": "7",
  "S4B": "8",
  "V-": "9",
  "OUTB": "10",
  "V+": "11",
  "EN": "12",
  "A0": "13",
  "A1": "14",
  "GND": "15",
  "OUTA": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1A: "input", S2A: "input", S3A: "input", S4A: "input", S1B: "input", S2B: "input", S3B: "input", S4B: "input", "V-": "input", OUTB: "input", "V+": "input", EN: "input", A0: "input", A1: "input", GND: "input", OUTA: "output", ...opts.pinTypes } });
  }
  override schema = "Video:MAX311";
  override referencePrefix = "U";
}

/**
 * MB88303P
 *
 * KiCad symbol: `Video:MB88303P`. Reference prefix: `U`.
 */
export class MB88303P extends Component.withPins({
  "RESET": "1",
  "VOW": "5",
  "VOB": "6",
  "VSYNC": "7",
  "HSYNC": "8",
  "EX/RC": "9",
  "X/R": "10",
  "GND": "11",
  "LDI": "12",
  "ADM": "13",
  "DA0": "14",
  "DA1": "15",
  "DA2": "16",
  "DA3": "17",
  "DA4": "18",
  "DA5": "19",
  "DA6": "20",
  "DA7": "21",
  "VCC": "22",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RESET: "input", VOW: "output", VOB: "output", VSYNC: "input", HSYNC: "input", "EX/RC": "input", "X/R": "output", GND: "power_in", LDI: "input", ADM: "input", DA0: "input", DA1: "input", DA2: "input", DA3: "input", DA4: "input", DA5: "input", DA6: "input", DA7: "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Video:MB88303P";
  override referencePrefix = "U";
}

/**
 * S178
 *
 * KiCad symbol: `Video:S178`. Reference prefix: `U`.
 */
export class S178 extends Component.withPins({
  "+VCC": "1",
  "2.9": "2",
  "2.8": "3",
  "2.7": "4",
  "2.6": "5",
  "2.5": "6",
  "2.4": "7",
  "2.3": "8",
  "2.2": "9",
  "2.1": "10",
  "2.0": "11",
  "VR": "12",
  "SV": "13",
  "-VCC": "15",
  "H2": "16",
  "CP": "17",
  "V": "18",
  "SH": "19",
  "HD": "20",
  "CS": "21",
  "CLAMP": "22",
  "N.C": "23",
  "N.B": "24",
  "N.A": "25",
  "SUP_26": "26",
  "VD": "27",
  "SUP_28": "28",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+VCC": "input", "2.9": "input", "2.8": "input", "2.7": "input", "2.6": "input", "2.5": "input", "2.4": "input", "2.3": "input", "2.2": "input", "2.1": "input", "2.0": "input", VR: "input", SV: "input", "-VCC": "input", H2: "output", CP: "input", V: "input", SH: "input", HD: "output", CS: "output", CLAMP: "output", "N.C": "input", "N.B": "input", "N.A": "input", SUP_26: "output", VD: "output", SUP_28: "output", ...opts.pinTypes } });
  }
  override schema = "Video:S178";
  override referencePrefix = "U";
}

/**
 * Digital Video Encoder, Obsolete
 *
 * KiCad symbol: `Video:SAA7182`. Reference prefix: `U`.
 * @see http://rcl-radio.ru/wp-content/uploads/2014/11/SAA7182.pdf
 * Keywords: Video Encoder.
 */
export class SAA7182 extends Component.withPins({
  "~RESN~": "1",
  "VSS_3": "3",
  "SA": "4",
  "VDD_5": "5",
  "OVL2": "6",
  "OVL1": "7",
  "OVL0": "8",
  "KEY": "9",
  "DP0": "10",
  "DP1": "11",
  "DP2": "12",
  "DP3": "13",
  "VDD_14": "14",
  "VSS_15": "15",
  "DP4": "16",
  "DP5": "17",
  "DP6": "18",
  "DP7": "19",
  "TTXRQ": "20",
  "TTX": "21",
  "VDD_22": "22",
  "VSS_24": "24",
  "MP7": "25",
  "MP6": "26",
  "MP5": "27",
  "MP4": "28",
  "VDD_29": "29",
  "VSS_30": "30",
  "MP3": "31",
  "MP2": "32",
  "MP1": "33",
  "MP0": "34",
  "RCV1": "35",
  "RCV2": "36",
  "VDD_38": "38",
  "VSS_39": "39",
  "VDD_41": "41",
  "VSS_42": "42",
  "XTALI": "44",
  "XTAL": "45",
  "CREF": "47",
  "LCC": "48",
  "VDD_49": "49",
  "CDIR": "50",
  "VSS_51": "51",
  "VREFL_52": "52",
  "VREFH_53": "53",
  "VDDA_54": "54",
  "B": "55",
  "VDDA_57": "57",
  "G": "58",
  "VDDA_60": "60",
  "R": "61",
  "CUR_63": "63",
  "VDDA_64": "64",
  "VSSA": "67",
  "CUR_68": "68",
  "C": "69",
  "VDDA_70": "70",
  "Y": "71",
  "VDDA_72": "72",
  "CVBS": "73",
  "VDDA_74": "74",
  "VREFH_75": "75",
  "VREFL_76": "76",
  "AP": "77",
  "SP": "78",
  "VSS_79": "79",
  "VDD_80": "80",
  "VSS_81": "81",
  "VDD_82": "82",
  "SCL": "83",
  "SDA": "84",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~RESN~": "input", VSS_3: "power_in", SA: "input", VDD_5: "power_in", OVL2: "input", OVL1: "input", OVL0: "input", KEY: "input", DP0: "input", DP1: "input", DP2: "input", DP3: "input", VDD_14: "power_in", VSS_15: "power_in", DP4: "input", DP5: "input", DP6: "input", DP7: "input", TTXRQ: "output", TTX: "input", VDD_22: "power_in", VSS_24: "power_in", MP7: "input", MP6: "input", MP5: "input", MP4: "input", VDD_29: "power_in", VSS_30: "power_in", MP3: "input", MP2: "input", MP1: "input", MP0: "input", RCV1: "bidirectional", RCV2: "bidirectional", VDD_38: "power_in", VSS_39: "power_in", VDD_41: "power_in", VSS_42: "power_in", XTALI: "input", XTAL: "output", CREF: "bidirectional", LCC: "bidirectional", VDD_49: "power_in", CDIR: "input", VSS_51: "power_in", VREFL_52: "passive", VREFH_53: "passive", VDDA_54: "power_in", B: "output", VDDA_57: "power_in", G: "output", VDDA_60: "power_in", R: "output", CUR_63: "input", VDDA_64: "power_in", VSSA: "power_in", CUR_68: "input", C: "output", VDDA_70: "power_in", Y: "output", VDDA_72: "power_in", CVBS: "output", VDDA_74: "power_in", VREFH_75: "passive", VREFL_76: "passive", AP: "input", SP: "input", VSS_79: "power_in", VDD_80: "power_in", VSS_81: "power_in", VDD_82: "power_in", SCL: "input", SDA: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Video:SAA7182";
  override referencePrefix = "U";
}

/**
 * SI582
 *
 * KiCad symbol: `Video:SI582`. Reference prefix: `U`.
 */
export class SI582 extends Component.withPins({
  "OFS": "1",
  "IN-": "2",
  "IN+": "3",
  "V-": "4",
  "OUT": "6",
  "V+": "7",
  "DIS": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { OFS: "input", "IN-": "input", "IN+": "input", "V-": "power_in", OUT: "input", "V+": "power_in", DIS: "input", ...opts.pinTypes } });
  }
  override schema = "Video:SI582";
  override referencePrefix = "U";
}

/**
 * TDA1950
 *
 * KiCad symbol: `Video:TDA1950`. Reference prefix: `U`.
 */
export class TDA1950 extends Component.withPins({
  "GND": "1",
  "HD": "2",
  "FLYH": "3",
  "SANDCASTLE": "4",
  "VR": "5",
  "SW": "6",
  "MUTE": "7",
  "NIVSEP": "8",
  "CS": "9",
  "NIVV": "10",
  "VIDEO": "11",
  "NIVH": "12",
  "PHCMP": "13",
  "C": "14",
  "R": "16",
  "PHASE": "17",
  "FLYV": "18",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "input", HD: "output", FLYH: "input", SANDCASTLE: "output", VR: "input", SW: "output", MUTE: "output", NIVSEP: "input", CS: "output", NIVV: "output", VIDEO: "input", NIVH: "output", PHCMP: "output", C: "output", R: "output", PHASE: "input", FLYV: "input", ...opts.pinTypes } });
  }
  override schema = "Video:TDA1950";
  override referencePrefix = "U";
}

/**
 * TDA1950F
 *
 * KiCad symbol: `Video:TDA1950F`. Reference prefix: `U`.
 */
export class TDA1950F extends Component.withPins({
  "GND": "1",
  "HD": "2",
  "FLYH": "3",
  "SANDCASTLE": "4",
  "VR": "5",
  "SW": "6",
  "MUTE": "7",
  "NIVSEP": "8",
  "CS": "9",
  "NIVV": "10",
  "VIDEO": "11",
  "NIVH": "12",
  "PHCMP": "13",
  "C": "14",
  "R": "16",
  "PHASE": "17",
  "FLYV": "18",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "input", HD: "output", FLYH: "input", SANDCASTLE: "output", VR: "input", SW: "output", MUTE: "output", NIVSEP: "input", CS: "output", NIVV: "output", VIDEO: "input", NIVH: "output", PHCMP: "output", C: "output", R: "output", PHASE: "input", FLYV: "input", ...opts.pinTypes } });
  }
  override schema = "Video:TDA1950F";
  override referencePrefix = "U";
}

/**
 * TDA2593
 *
 * KiCad symbol: `Video:TDA2593`. Reference prefix: `U`.
 */
export class TDA2593 extends Component.withPins({
  "VCC": "1",
  "V0": "2",
  "HD": "3",
  "PD": "4",
  "P5": "5",
  "FW": "6",
  "SANDC": "7",
  "VD": "8",
  "VIDEO": "9",
  "NS": "10",
  "VCR": "11",
  "F_12": "12",
  "F_13": "13",
  "C": "14",
  "R": "15",
  "GND": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VCC: "input", V0: "input", HD: "output", PD: "input", P5: "input", FW: "input", SANDC: "output", VD: "output", VIDEO: "input", NS: "input", VCR: "input", F_12: "input", F_13: "input", C: "input", R: "input", GND: "input", ...opts.pinTypes } });
  }
  override schema = "Video:TDA2593";
  override referencePrefix = "U";
}

/**
 * TDA7260
 *
 * KiCad symbol: `Video:TDA7260`. Reference prefix: `U`.
 */
export class TDA7260 extends Component.withPins({
  "SI": "1",
  "I-": "2",
  "I+": "3",
  "S0": "4",
  "E-": "5",
  "E+": "6",
  "LIM": "7",
  "GNDA": "8",
  "+10": "9",
  "CD": "10",
  "GND": "11",
  "G4": "12",
  "POMPE2": "13",
  "G3": "14",
  "G2": "15",
  "POMPE1": "16",
  "G1": "17",
  "CL": "18",
  "VP+": "19",
  "MUTE": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SI: "output", "I-": "input", "I+": "input", S0: "output", "E-": "input", "E+": "input", LIM: "output", GNDA: "power_in", "+10": "output", CD: "input", GND: "power_in", G4: "output", POMPE2: "input", G3: "output", G2: "output", POMPE1: "input", G1: "output", CL: "input", "VP+": "input", MUTE: "input", ...opts.pinTypes } });
  }
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
 */
export class TDA8501 extends Component.withPins({
  "-R.Y": "1",
  "MCTR": "2",
  "-B.Y": "3",
  "H/2": "4",
  "Y": "5",
  "UOFF": "6",
  "R": "7",
  "VCC": "8",
  "G": "9",
  "VSS": "10",
  "B": "11",
  "VOFF": "12",
  "VREF": "13",
  "C/OUT": "14",
  "FLT": "15",
  "CVBS": "16",
  "NTSC/PAL": "17",
  "NOTCH": "18",
  "Y/OUT": "19",
  "Y+SIN": "20",
  "B/ADJ": "21",
  "Y+SOUT": "22",
  "OSC": "23",
  "CS": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "-R.Y": "input", MCTR: "input", "-B.Y": "input", "H/2": "bidirectional", Y: "input", UOFF: "output", R: "input", VCC: "power_in", G: "input", VSS: "power_in", B: "input", VOFF: "output", VREF: "passive", "C/OUT": "output", FLT: "passive", CVBS: "output", "NTSC/PAL": "input", NOTCH: "input", "Y/OUT": "output", "Y+SIN": "input", "B/ADJ": "passive", "Y+SOUT": "output", OSC: "output", CS: "input", ...opts.pinTypes } });
  }
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
 */
export class TDA8702 extends Component.withPins({
  "VREF": "1",
  "AGND": "2",
  "DB2": "3",
  "DB3": "4",
  "CLK": "5",
  "DGND": "6",
  "DB7": "7",
  "DB6": "8",
  "DB5": "9",
  "DB4": "10",
  "DB1": "11",
  "DB0": "12",
  "VCCD": "13",
  "VOUT": "14",
  "~VOUT~": "15",
  "VCCA": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VREF: "bidirectional", AGND: "power_in", DB2: "input", DB3: "input", CLK: "input", DGND: "power_in", DB7: "input", DB6: "input", DB5: "input", DB4: "input", DB1: "input", DB0: "input", VCCD: "power_in", VOUT: "output", "~VOUT~": "output", VCCA: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TDA8702T extends Component.withPins({
  "VREF": "1",
  "AGND": "2",
  "DB2": "3",
  "DB3": "4",
  "CLK": "5",
  "DGND": "6",
  "DB7": "7",
  "DB6": "8",
  "DB5": "9",
  "DB4": "10",
  "DB1": "11",
  "DB0": "12",
  "VCCD": "13",
  "VOUT": "14",
  "~VOUT~": "15",
  "VCCA": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VREF: "bidirectional", AGND: "power_in", DB2: "input", DB3: "input", CLK: "input", DGND: "power_in", DB7: "input", DB6: "input", DB5: "input", DB4: "input", DB1: "input", DB0: "input", VCCD: "power_in", VOUT: "output", "~VOUT~": "output", VCCA: "power_in", ...opts.pinTypes } });
  }
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
 */
export class TDA8772 extends Component.withPins({
  "R7": "1",
  "R6": "2",
  "R5": "3",
  "R4": "4",
  "R3": "5",
  "R2": "6",
  "R1": "7",
  "R0": "8",
  "GND_9": "9",
  "VCC_10": "10",
  "SYNC": "11",
  "BLANK": "12",
  "G7": "13",
  "G6": "14",
  "G5": "15",
  "G4": "16",
  "G3": "17",
  "G2": "18",
  "G1": "19",
  "G0": "20",
  "CLKR": "21",
  "CLKG": "22",
  "CLKB": "23",
  "B7": "24",
  "B6": "25",
  "B5": "26",
  "B4": "27",
  "B3": "28",
  "B2": "29",
  "B1": "30",
  "B0": "31",
  "VCC_32": "32",
  "GND_33": "33",
  "VRD": "34",
  "VCCA_35": "35",
  "BLU": "36",
  "GNDA_37": "37",
  "IRFA": "38",
  "VCCA_39": "39",
  "GRE": "40",
  "IRFB": "41",
  "GNDA_42": "42",
  "VCCA_43": "43",
  "RED": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { R7: "input", R6: "input", R5: "input", R4: "input", R3: "input", R2: "input", R1: "input", R0: "input", GND_9: "power_in", VCC_10: "power_in", SYNC: "input", BLANK: "input", G7: "input", G6: "input", G5: "input", G4: "input", G3: "input", G2: "input", G1: "input", G0: "input", CLKR: "input", CLKG: "input", CLKB: "input", B7: "input", B6: "input", B5: "input", B4: "input", B3: "input", B2: "input", B1: "input", B0: "input", VCC_32: "power_in", GND_33: "power_in", VRD: "input", VCCA_35: "power_in", BLU: "output", GNDA_37: "power_in", IRFA: "passive", VCCA_39: "power_in", GRE: "output", IRFB: "passive", GNDA_42: "power_in", VCCA_43: "power_in", RED: "output", ...opts.pinTypes } });
  }
  override schema = "Video:TDA8772";
  override referencePrefix = "U";
}

/**
 * TDA9500
 *
 * KiCad symbol: `Video:TDA9500`. Reference prefix: `U`.
 */
export class TDA9500 extends Component.withPins({
  "GND": "1",
  "SH": "3",
  "VCC": "4",
  "SANDC": "5",
  "VIN": "6",
  "CS": "7",
  "TOPV": "8",
  "P9": "9",
  "P10": "10",
  "FW": "11",
  "P12": "12",
  "P13": "13",
  "COM": "14",
  "C": "15",
  "R": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", SH: "output", VCC: "power_in", SANDC: "output", VIN: "power_in", CS: "output", TOPV: "output", P9: "passive", P10: "passive", FW: "input", P12: "passive", P13: "passive", COM: "passive", C: "input", R: "input", ...opts.pinTypes } });
  }
  override schema = "Video:TDA9500";
  override referencePrefix = "U";
}

/**
 * TDA9503
 *
 * KiCad symbol: `Video:TDA9503`. Reference prefix: `U`.
 */
export class TDA9503 extends Component.withPins({
  "GND": "1",
  "SH": "3",
  "VCC": "4",
  "SANDC": "5",
  "VIN": "6",
  "CS": "7",
  "TOPV": "8",
  "P9": "9",
  "P10": "10",
  "FW": "11",
  "P12": "12",
  "P13": "13",
  "COM": "14",
  "C": "15",
  "R": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", SH: "output", VCC: "power_in", SANDC: "output", VIN: "power_in", CS: "output", TOPV: "output", P9: "passive", P10: "passive", FW: "input", P12: "passive", P13: "passive", COM: "passive", C: "input", R: "input", ...opts.pinTypes } });
  }
  override schema = "Video:TDA9503";
  override referencePrefix = "U";
}

/**
 * TDA9513
 *
 * KiCad symbol: `Video:TDA9513`. Reference prefix: `U`.
 */
export class TDA9513 extends Component.withPins({
  "GND": "1",
  "SH": "3",
  "VCC": "4",
  "SANDC": "5",
  "VIN": "6",
  "CS": "7",
  "TOPV": "8",
  "P9": "9",
  "P10": "10",
  "FW": "11",
  "P12": "12",
  "P13": "13",
  "COM": "14",
  "C": "15",
  "R": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", SH: "output", VCC: "power_in", SANDC: "output", VIN: "power_in", CS: "output", TOPV: "output", P9: "passive", P10: "passive", FW: "input", P12: "passive", P13: "passive", COM: "passive", C: "input", R: "input", ...opts.pinTypes } });
  }
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
 */
export class TEA2014 extends Component.withPins({
  "GND": "1",
  "VO": "2",
  "IVI": "3",
  "NC": "4",
  "2/1": "5",
  "SVO": "6",
  "VCC": "7",
  "EVI": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VO: "output", IVI: "input", NC: "no_connect", "2/1": "input", SVO: "output", VCC: "power_in", EVI: "input", ...opts.pinTypes } });
  }
  override schema = "Video:TEA2014";
  override referencePrefix = "U";
}

/**
 * TEA5115
 *
 * KiCad symbol: `Video:TEA5115`. Reference prefix: `U`.
 */
export class TEA5115 extends Component.withPins({
  "ES2": "1",
  "EV2": "2",
  "SEL1/2": "3",
  "VOUT": "4",
  "GND": "5",
  "BOUT": "6",
  "VSP": "7",
  "EB2": "8",
  "EFB2": "9",
  "EB1": "10",
  "EFB1": "11",
  "ER1": "12",
  "FBOUT": "13",
  "ROUT": "14",
  "SYOUT": "15",
  "ER2": "16",
  "ES1": "17",
  "EV1": "18",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { ES2: "input", EV2: "input", "SEL1/2": "input", VOUT: "output", GND: "power_in", BOUT: "output", VSP: "input", EB2: "input", EFB2: "input", EB1: "input", EFB1: "input", ER1: "input", FBOUT: "output", ROUT: "output", SYOUT: "output", ER2: "input", ES1: "input", EV1: "input", ...opts.pinTypes } });
  }
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
 */
export class TFP410PAP extends Component.withPins({
  "DVDD_1": "1",
  "DE": "2",
  "VREF": "3",
  "HSYNC": "4",
  "VSYNC": "5",
  "CTL3/A3/DK3": "6",
  "CTL2/A2/DK2": "7",
  "CTL1/A1/DK1": "8",
  "EDGE/HTPLG": "9",
  "~PD": "10",
  "MSEN/PO1": "11",
  "DVDD_12": "12",
  "ISEL/~RST": "13",
  "DSEL/SDA": "14",
  "BSEL/SCL": "15",
  "DGND_16": "16",
  "PGND": "17",
  "PVDD": "18",
  "TFADJ": "19",
  "TGND_20": "20",
  "TXC-": "21",
  "TXC+": "22",
  "TVDD_23": "23",
  "TX0-": "24",
  "TX0+": "25",
  "TGND_26": "26",
  "TX1-": "27",
  "TX1+": "28",
  "TVDD_29": "29",
  "TX2-": "30",
  "TX2+": "31",
  "TGND_32": "32",
  "DVDD_33": "33",
  "RESERVED": "34",
  "DKEN": "35",
  "DATA23": "36",
  "DATA22": "37",
  "DATA21": "38",
  "DATA20": "39",
  "DATA19": "40",
  "DATA18": "41",
  "DATA17": "42",
  "DATA16": "43",
  "DATA15": "44",
  "DATA14": "45",
  "DATA13": "46",
  "DATA12": "47",
  "DGND_48": "48",
  "NC": "49",
  "DATA11": "50",
  "DATA10": "51",
  "DATA9": "52",
  "DATA8": "53",
  "DATA7": "54",
  "DATA6": "55",
  "IDCK-": "56",
  "IDCK+": "57",
  "DATA5": "58",
  "DATA4": "59",
  "DATA3": "60",
  "DATA2": "61",
  "DATA1": "62",
  "DATA0": "63",
  "DGND_64": "64",
  "EP": "65",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DVDD_1: "power_in", DE: "input", VREF: "input", HSYNC: "input", VSYNC: "input", "CTL3/A3/DK3": "input", "CTL2/A2/DK2": "input", "CTL1/A1/DK1": "input", "EDGE/HTPLG": "input", "~PD": "input", "MSEN/PO1": "output", DVDD_12: "passive", "ISEL/~RST": "input", "DSEL/SDA": "bidirectional", "BSEL/SCL": "input", DGND_16: "power_in", PGND: "power_in", PVDD: "power_in", TFADJ: "input", TGND_20: "power_in", "TXC-": "output", "TXC+": "output", TVDD_23: "power_in", "TX0-": "output", "TX0+": "output", TGND_26: "passive", "TX1-": "output", "TX1+": "output", TVDD_29: "passive", "TX2-": "output", "TX2+": "output", TGND_32: "passive", DVDD_33: "passive", RESERVED: "input", DKEN: "input", DATA23: "input", DATA22: "input", DATA21: "input", DATA20: "input", DATA19: "input", DATA18: "input", DATA17: "input", DATA16: "input", DATA15: "input", DATA14: "input", DATA13: "input", DATA12: "input", DGND_48: "passive", NC: "no_connect", DATA11: "input", DATA10: "input", DATA9: "input", DATA8: "input", DATA7: "input", DATA6: "input", "IDCK-": "input", "IDCK+": "input", DATA5: "input", DATA4: "input", DATA3: "input", DATA2: "input", DATA1: "input", DATA0: "input", DGND_64: "passive", EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "Video:TFP410PAP";
  override referencePrefix = "U";
}
