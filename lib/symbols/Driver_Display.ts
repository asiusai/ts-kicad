// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Sega VDP / Yamaha YM7101 with integrated Sega PSG / SN76496 (die-shrunk version / Revision A, Yamaha FC1001), PQFP-128
 *
 * KiCad symbol: `Driver_Display:315-5313A`. Reference prefix: `U`.
 * Footprint filters: *PQFP*28x28mm*P0.8*.
 * @see https://consolemods.org/wiki/images/6/6b/PAL_Mega_Drive_Model_1_Service_Manual.pdf#page=54
 * Keywords: Video-Display-Processor SN76489A Obsolete.
 * Default footprint: Package_QFP:PQFP-128_28x28mm_P0.8mm.
 */
export class _315_5313A extends Component.withPins({
  "SD0": "1",
  "SD1": "2",
  "SD2": "3",
  "SD3": "4",
  "SD4": "5",
  "SD5": "6",
  "SD6": "7",
  "SD7": "8",
  "~{SE1}": "9",
  "~{SE0}": "10",
  "SC": "11",
  "~{RAS1}": "12",
  "~{CAS1}": "13",
  "~{WE1}": "14",
  "~{WE0}": "15",
  "~{OE1}": "16",
  "GND_17": "17",
  "RD0": "18",
  "RD1": "19",
  "RD2": "20",
  "RD3": "21",
  "RD4": "22",
  "RD5": "23",
  "RD6": "24",
  "RD7": "25",
  "AGC": "26",
  "R": "27",
  "G": "28",
  "B": "29",
  "AVC": "30",
  "AD0": "31",
  "AD1": "32",
  "AD2": "33",
  "AD3": "34",
  "AD4": "35",
  "AD5": "36",
  "AD6": "37",
  "AD7": "38",
  "~{YS}": "39",
  "SPA/B": "40",
  "~{VSYNC}": "41",
  "~{CSYNC}": "42",
  "~{HSYNC}": "43",
  "~{HL}": "44",
  "SEL0": "45",
  "~{PAL}": "46",
  "~{RESET}": "47",
  "SEL1": "48",
  "CLK1": "49",
  "SBCR": "50",
  "CLK0": "51",
  "MCK": "52",
  "EDCK": "53",
  "VDD_54": "54",
  "CD0": "55",
  "CD1": "56",
  "CD2": "57",
  "CD3": "58",
  "CD4": "59",
  "CD5": "60",
  "CD6": "61",
  "CD7": "62",
  "CD8": "63",
  "CD9": "64",
  "CD10": "65",
  "CD11": "66",
  "CD12": "67",
  "CD13": "68",
  "CD14": "69",
  "CD15": "70",
  "CA0": "71",
  "CA1": "72",
  "CA2": "73",
  "CA3": "74",
  "CA4": "75",
  "CA5": "76",
  "CA6": "77",
  "CA7": "78",
  "CA8": "79",
  "CA9": "80",
  "CA10": "81",
  "CA11": "82",
  "CA12": "83",
  "CA13": "84",
  "CA14": "85",
  "CA15": "86",
  "CA16": "87",
  "CA17": "88",
  "CA18": "89",
  "CA19": "90",
  "CA20": "91",
  "CA21": "92",
  "CA22": "93",
  "AYS": "94",
  "SOUND": "95",
  "AGS": "96",
  "GND_97": "97",
  "~{INT}": "98",
  "~{BR}": "99",
  "~{BGAK}": "100",
  "~{BG}": "101",
  "~{MREQ}": "102",
  "~{INTAK}": "103",
  "~{IPL1}": "104",
  "~{IPL2}": "105",
  "~{IORQ}": "106",
  "~{RD}": "107",
  "~{WR}": "108",
  "~{M1}": "109",
  "~{AS}": "110",
  "~{UDS}": "111",
  "~{LDS}": "112",
  "R/~{W}": "113",
  "~{DTAK}": "114",
  "~{UWR}": "115",
  "~{LWR}": "116",
  "~{OE0}": "117",
  "~{CAS0}": "118",
  "~{RAS0}": "119",
  "RA0": "120",
  "RA1": "121",
  "RA2": "122",
  "RA3": "123",
  "RA4": "124",
  "RA5": "125",
  "RA6": "126",
  "RA7": "127",
  "VDD_128": "128",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { SD0: "input", SD1: "input", SD2: "input", SD3: "input", SD4: "input", SD5: "input", SD6: "input", SD7: "input", "~{SE1}": "output", "~{SE0}": "output", SC: "output", "~{RAS1}": "output", "~{CAS1}": "output", "~{WE1}": "output", "~{WE0}": "output", "~{OE1}": "output", GND_17: "power_in", RD0: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", AGC: "power_in", R: "output", G: "output", B: "output", AVC: "power_in", AD0: "bidirectional", AD1: "bidirectional", AD2: "bidirectional", AD3: "bidirectional", AD4: "bidirectional", AD5: "bidirectional", AD6: "bidirectional", AD7: "bidirectional", "~{YS}": "output", "SPA/B": "bidirectional", "~{VSYNC}": "output", "~{CSYNC}": "bidirectional", "~{HSYNC}": "bidirectional", "~{HL}": "input", SEL0: "input", "~{PAL}": "input", "~{RESET}": "input", SEL1: "input", CLK1: "bidirectional", SBCR: "output", CLK0: "output", MCK: "input", EDCK: "bidirectional", VDD_54: "passive", CD0: "bidirectional", CD1: "bidirectional", CD2: "bidirectional", CD3: "bidirectional", CD4: "bidirectional", CD5: "bidirectional", CD6: "bidirectional", CD7: "bidirectional", CD8: "bidirectional", CD9: "bidirectional", CD10: "bidirectional", CD11: "bidirectional", CD12: "bidirectional", CD13: "bidirectional", CD14: "bidirectional", CD15: "bidirectional", CA0: "bidirectional", CA1: "bidirectional", CA2: "bidirectional", CA3: "bidirectional", CA4: "bidirectional", CA5: "bidirectional", CA6: "bidirectional", CA7: "bidirectional", CA8: "bidirectional", CA9: "bidirectional", CA10: "bidirectional", CA11: "bidirectional", CA12: "bidirectional", CA13: "bidirectional", CA14: "bidirectional", CA15: "bidirectional", CA16: "bidirectional", CA17: "bidirectional", CA18: "bidirectional", CA19: "bidirectional", CA20: "bidirectional", CA21: "bidirectional", CA22: "bidirectional", AYS: "power_in", SOUND: "output", AGS: "power_in", GND_97: "passive", "~{INT}": "output", "~{BR}": "output", "~{BGAK}": "bidirectional", "~{BG}": "input", "~{MREQ}": "input", "~{INTAK}": "input", "~{IPL1}": "output", "~{IPL2}": "output", "~{IORQ}": "input", "~{RD}": "input", "~{WR}": "input", "~{M1}": "input", "~{AS}": "input", "~{UDS}": "input", "~{LDS}": "input", "R/~{W}": "input", "~{DTAK}": "bidirectional", "~{UWR}": "output", "~{LWR}": "output", "~{OE0}": "output", "~{CAS0}": "output", "~{RAS0}": "output", RA0: "output", RA1: "output", RA2: "output", RA3: "output", RA4: "output", RA5: "output", RA6: "output", RA7: "output", VDD_128: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Display:315-5313A";
  override referencePrefix = "U";
}

/**
 * Graphics Display Controller, PDIP-40
 *
 * KiCad symbol: `Driver_Display:82720`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * Keywords: Graphics Controller.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class _82720 extends Component.withPins({
  "2xWCLK": "1",
  "~{DBIN}": "2",
  "HSYNC": "3",
  "VSYNC": "4",
  "BLANK": "5",
  "(ALE)~{RAS}": "6",
  "DREQ": "7",
  "~{DACK}": "8",
  "~{RD}": "9",
  "~{WR}": "10",
  "A0": "11",
  "DB0": "12",
  "DB1": "13",
  "DB2": "14",
  "DB3": "15",
  "DB4": "16",
  "DB5": "17",
  "DB6": "18",
  "DB7": "19",
  "GND": "20",
  "LPEN": "21",
  "AD0": "22",
  "AD1": "23",
  "AD2": "24",
  "AD3": "25",
  "AD4": "26",
  "AD5": "27",
  "AD6": "28",
  "AD7": "29",
  "AD8": "30",
  "AD9": "31",
  "AD10": "32",
  "AD14_33": "33",
  "AD12": "34",
  "AD13": "35",
  "AD14_36": "36",
  "AD15": "37",
  "A16": "38",
  "A17": "39",
  "VCC": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "2xWCLK": "input", "~{DBIN}": "input", HSYNC: "output", VSYNC: "bidirectional", BLANK: "output", "(ALE)~{RAS}": "output", DREQ: "output", "~{DACK}": "input", "~{RD}": "input", "~{WR}": "input", A0: "input", DB0: "bidirectional", DB1: "bidirectional", DB2: "bidirectional", DB3: "bidirectional", DB4: "bidirectional", DB5: "bidirectional", DB6: "bidirectional", DB7: "bidirectional", GND: "power_in", LPEN: "input", AD0: "bidirectional", AD1: "bidirectional", AD2: "bidirectional", AD3: "bidirectional", AD4: "bidirectional", AD5: "bidirectional", AD6: "bidirectional", AD7: "bidirectional", AD8: "bidirectional", AD9: "bidirectional", AD10: "bidirectional", AD14_33: "bidirectional", AD12: "bidirectional", AD13: "bidirectional", AD14_36: "bidirectional", AD15: "bidirectional", A16: "output", A17: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "Driver_Display:82720";
  override referencePrefix = "U";
}

/**
 * Single-supply, 12bit, 4 ch, touch screen driver, 2.2 - 5.25 VDD, -40 to +85 C, QSPI, SPI, 3-wire serial interface, SSOP-16
 *
 * KiCad symbol: `Driver_Display:ADS7843E`. Reference prefix: `U`.
 * Footprint filters: *SSOP*3.9x4.9mm*P0.635mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads7843.pdf
 * Keywords: Single-supply, 12bit, 4 ch, touch screen driver, 2.2 - 5.25 VDD, -40 to +85 C, QSPI, SPI, 3-wire serial interface, SSOP-16.
 * Default footprint: Package_SO:SSOP-16_3.9x4.9mm_P0.635mm.
 */
export class ADS7843E extends Component.withPins({
  "+VCC_1": "1",
  "X+": "2",
  "Y+": "3",
  "X-": "4",
  "Y-": "5",
  "GND": "6",
  "IN3": "7",
  "IN4": "8",
  "VREF": "9",
  "+VCC_10": "10",
  "~{PENIRQ}": "11",
  "DOUT": "12",
  "BUSY": "13",
  "DIN": "14",
  "~{CS}": "15",
  "DCLK": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+VCC_1": "passive", "X+": "input", "Y+": "input", "X-": "input", "Y-": "input", GND: "power_in", IN3: "input", IN4: "input", VREF: "input", "+VCC_10": "power_in", "~{PENIRQ}": "open_collector", DOUT: "output", BUSY: "output", DIN: "input", "~{CS}": "input", DCLK: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_Display:ADS7843E";
  override referencePrefix = "U";
}

/**
 * Single-supply, 12bit, 4 ch, touch screen driver, 2.2 - 5.25 VDD, -40 to +85 C, QSPI, SPI, 3-wire serial interface, SSOP-16
 *
 * KiCad symbol: `Driver_Display:ADS7843E-2K5`. Reference prefix: `U`.
 * Footprint filters: *SSOP*3.9x4.9mm*P0.635mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads7843.pdf
 * Keywords: Single-supply, 12bit, 4 ch, touch screen driver, 2.2 - 5.25 VDD, -40 to +85 C, QSPI, SPI, 3-wire serial interface, SSOP-16.
 * Default footprint: Package_SO:SSOP-16_3.9x4.9mm_P0.635mm.
 */
export class ADS7843E_2K5 extends Component.withPins({
  "+VCC_1": "1",
  "X+": "2",
  "Y+": "3",
  "X-": "4",
  "Y-": "5",
  "GND": "6",
  "IN3": "7",
  "IN4": "8",
  "VREF": "9",
  "+VCC_10": "10",
  "~{PENIRQ}": "11",
  "DOUT": "12",
  "BUSY": "13",
  "DIN": "14",
  "~{CS}": "15",
  "DCLK": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+VCC_1": "passive", "X+": "input", "Y+": "input", "X-": "input", "Y-": "input", GND: "power_in", IN3: "input", IN4: "input", VREF: "input", "+VCC_10": "power_in", "~{PENIRQ}": "open_collector", DOUT: "output", BUSY: "output", DIN: "input", "~{CS}": "input", DCLK: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_Display:ADS7843E-2K5";
  override referencePrefix = "U";
}

/**
 * Single-supply, 12bit, 4 ch, touch screen driver, 2.2 - 5.25 VDD, -40 to +85 C, QSPI, SPI, 3-wire serial interface, SSOP-16
 *
 * KiCad symbol: `Driver_Display:ADS7843EG4`. Reference prefix: `U`.
 * Footprint filters: *SSOP*3.9x4.9mm*P0.635mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads7843.pdf
 * Keywords: Single-supply, 12bit, 4 ch, touch screen driver, 2.2 - 5.25 VDD, -40 to +85 C, QSPI, SPI, 3-wire serial interface, SSOP-16.
 * Default footprint: Package_SO:SSOP-16_3.9x4.9mm_P0.635mm.
 */
export class ADS7843EG4 extends Component.withPins({
  "+VCC_1": "1",
  "X+": "2",
  "Y+": "3",
  "X-": "4",
  "Y-": "5",
  "GND": "6",
  "IN3": "7",
  "IN4": "8",
  "VREF": "9",
  "+VCC_10": "10",
  "~{PENIRQ}": "11",
  "DOUT": "12",
  "BUSY": "13",
  "DIN": "14",
  "~{CS}": "15",
  "DCLK": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+VCC_1": "passive", "X+": "input", "Y+": "input", "X-": "input", "Y-": "input", GND: "power_in", IN3: "input", IN4: "input", VREF: "input", "+VCC_10": "power_in", "~{PENIRQ}": "open_collector", DOUT: "output", BUSY: "output", DIN: "input", "~{CS}": "input", DCLK: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_Display:ADS7843EG4";
  override referencePrefix = "U";
}

/**
 * Single-supply, 12bit, 4 ch, touch screen driver, 2.2 - 5.25 VDD, -40 to +125 C, QSPI, SPI, 3-wire serial interface, SSOP-16
 *
 * KiCad symbol: `Driver_Display:ADS7843IDBQRQ1`. Reference prefix: `U`.
 * Footprint filters: *SSOP*3.9x4.9mm*P0.635mm*.
 * @see http://www.ti.com/lit/ds/symlink/ads7843-q1.pdf
 * Keywords: Single-supply, 12bit, 4 ch, touch screen driver, 2.2 - 5.25 VDD, -40 to +125 C, QSPI, SPI, 3-wire serial interface, SSOP-16.
 * Default footprint: Package_SO:SSOP-16_3.9x4.9mm_P0.635mm.
 */
export class ADS7843IDBQRQ1 extends Component.withPins({
  "+VCC_1": "1",
  "X+": "2",
  "Y+": "3",
  "X-": "4",
  "Y-": "5",
  "GND": "6",
  "IN3": "7",
  "IN4": "8",
  "VREF": "9",
  "+VCC_10": "10",
  "~{PENIRQ}": "11",
  "DOUT": "12",
  "BUSY": "13",
  "DIN": "14",
  "~{CS}": "15",
  "DCLK": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "+VCC_1": "passive", "X+": "input", "Y+": "input", "X-": "input", "Y-": "input", GND: "power_in", IN3: "input", IN4: "input", VREF: "input", "+VCC_10": "power_in", "~{PENIRQ}": "open_collector", DOUT: "output", BUSY: "output", DIN: "input", "~{CS}": "input", DCLK: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_Display:ADS7843IDBQRQ1";
  override referencePrefix = "U";
}

/**
 * 32-Segment CMOS LCD Driver, CMOS and TTL-compatible inputs, VDD +3.0V to +8.5V, PLCC-44
 *
 * KiCad symbol: `Driver_Display:AY0438X-L`. Reference prefix: `U`.
 * Footprint filters: PLCC*.
 * @see http://www.farnell.com/datasheets/43336.pdf
 * Keywords: driver display.
 * Default footprint: Package_LCC:PLCC-44.
 */
export class AY0438X_L extends Component.withPins({
  "VDD": "1",
  "LOAD": "2",
  "SEG_32": "3",
  "SEG_31": "4",
  "SEG_30": "5",
  "NC_6": "6",
  "SEG_29": "7",
  "SEG_28": "8",
  "SEG_27": "9",
  "SEG_26": "10",
  "SEG_25": "11",
  "SEG_24": "12",
  "SEG_23": "13",
  "SEG_22": "14",
  "SEG_21": "15",
  "SEG_20": "16",
  "SEG_19": "17",
  "SEG_18": "18",
  "SEG_17": "19",
  "SEG_16": "20",
  "SEG_15": "21",
  "SEG_14": "22",
  "SEG_13": "23",
  "SEG_12": "24",
  "SEG_11": "25",
  "SEG_10": "26",
  "SEG_9": "27",
  "NC_28": "28",
  "NC_29": "29",
  "SEG_8": "30",
  "SEG_7": "31",
  "SEG_6": "32",
  "BP": "33",
  "LCD0": "34",
  "SEG_5": "35",
  "SEG_4": "36",
  "DATA_IN": "37",
  "DATA_OUT": "38",
  "NC_39": "39",
  "VSS": "40",
  "SEG_3": "41",
  "SEG_2": "42",
  "SEG_1": "43",
  "CLOCK": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", LOAD: "input", SEG_32: "output", SEG_31: "output", SEG_30: "output", NC_6: "no_connect", SEG_29: "output", SEG_28: "output", SEG_27: "output", SEG_26: "output", SEG_25: "output", SEG_24: "output", SEG_23: "output", SEG_22: "output", SEG_21: "output", SEG_20: "output", SEG_19: "output", SEG_18: "output", SEG_17: "output", SEG_16: "output", SEG_15: "output", SEG_14: "output", SEG_13: "output", SEG_12: "output", SEG_11: "output", SEG_10: "output", SEG_9: "output", NC_28: "no_connect", NC_29: "no_connect", SEG_8: "output", SEG_7: "output", SEG_6: "output", BP: "output", LCD0: "input", SEG_5: "output", SEG_4: "output", DATA_IN: "input", DATA_OUT: "output", NC_39: "no_connect", VSS: "power_in", SEG_3: "output", SEG_2: "output", SEG_1: "output", CLOCK: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_Display:AY0438X-L";
  override referencePrefix = "U";
}

/**
 * 32-Segment CMOS LCD Driver, CMOS and TTL-compatible inputs, VDD +3.0V to +8.5V, DIP-40
 *
 * KiCad symbol: `Driver_Display:AY0438X-P`. Reference prefix: `U`.
 * Footprint filters: DIP*W15.24mm*.
 * @see http://www.farnell.com/datasheets/43336.pdf
 * Keywords: driver display.
 * Default footprint: Package_DIP:DIP-40_W15.24mm.
 */
export class AY0438X_P extends Component.withPins({
  "VDD": "1",
  "LOAD": "2",
  "SEG_32": "3",
  "SEG_31": "4",
  "SEG_30": "5",
  "SEG_29": "6",
  "SEG_28": "7",
  "SEG_27": "8",
  "SEG_26": "9",
  "SEG_25": "10",
  "SEG_24": "11",
  "SEG_23": "12",
  "SEG_22": "13",
  "SEG_21": "14",
  "SEG_20": "15",
  "SEG_19": "16",
  "SEG_18": "17",
  "SEG_17": "18",
  "SEG_16": "19",
  "SEG_15": "20",
  "SEG_14": "21",
  "SEG_13": "22",
  "SEG_12": "23",
  "SEG_11": "24",
  "SEG_10": "25",
  "SEG_9": "26",
  "SEG_8": "27",
  "SEG_7": "28",
  "SEG_6": "29",
  "BP": "30",
  "LCD0": "31",
  "SEG_5": "32",
  "SEG_4": "33",
  "DATA_IN": "34",
  "DATA_OUT": "35",
  "VSS": "36",
  "SEG_3": "37",
  "SEG_2": "38",
  "SEG_1": "39",
  "CLOCK": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", LOAD: "input", SEG_32: "output", SEG_31: "output", SEG_30: "output", SEG_29: "output", SEG_28: "output", SEG_27: "output", SEG_26: "output", SEG_25: "output", SEG_24: "output", SEG_23: "output", SEG_22: "output", SEG_21: "output", SEG_20: "output", SEG_19: "output", SEG_18: "output", SEG_17: "output", SEG_16: "output", SEG_15: "output", SEG_14: "output", SEG_13: "output", SEG_12: "output", SEG_11: "output", SEG_10: "output", SEG_9: "output", SEG_8: "output", SEG_7: "output", SEG_6: "output", BP: "output", LCD0: "input", SEG_5: "output", SEG_4: "output", DATA_IN: "input", DATA_OUT: "output", VSS: "power_in", SEG_3: "output", SEG_2: "output", SEG_1: "output", CLOCK: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_Display:AY0438X-P";
  override referencePrefix = "U";
}

/**
 * ILI9341 controller, SPI TFT LCD Display, 9-pin breakout PCB, 4-pin SD card interface, 5V/3.3V
 *
 * KiCad symbol: `Driver_Display:CR2013-MI2120`. Reference prefix: `U`.
 * Footprint filters: *CR2013*MI2120*.
 * @see http://pan.baidu.com/s/11Y990
 * Keywords: driver display.
 * Default footprint: Display:CR2013-MI2120.
 */
export class CR2013_MI2120 extends Component.withPins({
  "VCC": "1",
  "GND": "2",
  "~{CS}": "3",
  "RESET": "4",
  "D/~{C}": "5",
  "MOSI": "6",
  "SCK": "7",
  "LED": "8",
  "MISO": "9",
  "SD_CS": "10",
  "SD_MOSI": "11",
  "SD_MISO": "12",
  "SD_SCK": "13",
  "FLASH_CD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", GND: "power_in", "~{CS}": "input", RESET: "input", "D/~{C}": "input", MOSI: "input", SCK: "input", LED: "input", MISO: "output", SD_CS: "input", SD_MOSI: "input", SD_MISO: "output", SD_SCK: "input", FLASH_CD: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_Display:CR2013-MI2120";
  override referencePrefix = "U";
}

/**
 * Dot Matrix LCD controller / driver LSI display, 8x2 characters, 9920-bit CGROM (240 character fonts), 80 x 8-bit display data RAM, PQFP-80 (Hitachi FP-80B)
 *
 * KiCad symbol: `Driver_Display:HD44780UxxxFS`. Reference prefix: `U`.
 * Footprint filters: Hitachi?FP80B?PQFP*14x20mm?P0.8mm*.
 * @see https://cdn.sparkfun.com/assets/9/5/f/7/b/HD44780.pdf
 * Keywords: Hitachi LCD-II HD44780UA00FS HD44780UA02FS.
 * Default footprint: Package_QFP:Hitachi_FP80B_PQFP-80_14x20mm_P0.8mm.
 */
export class HD44780UxxxFS extends Component.withPins({
  "GND": "23",
  "OSC1": "24",
  "OSC2": "25",
  "V1": "26",
  "V2": "27",
  "V3": "28",
  "V4": "29",
  "V5": "30",
  "V_{CC}": "33",
  "RS": "36",
  "R/~{W}": "37",
  "E": "38",
  "DB0": "39",
  "DB1": "40",
  "DB2": "41",
  "DB3": "42",
  "DB4": "43",
  "DB5": "44",
  "DB6": "45",
  "DB7": "46",
  "COM1": "47",
  "COM2": "48",
  "COM3": "49",
  "COM4": "50",
  "COM5": "51",
  "COM6": "52",
  "COM7": "53",
  "COM8": "54",
  "COM9": "55",
  "COM10": "56",
  "COM11": "57",
  "COM12": "58",
  "COM13": "59",
  "COM14": "60",
  "COM15": "61",
  "COM16": "62",
  "SEG5": "18",
  "SEG4": "19",
  "SEG3": "20",
  "SEG2": "21",
  "SEG1": "22",
  "SEG10": "13",
  "SEG9": "14",
  "SEG8": "15",
  "SEG7": "16",
  "SEG6": "17",
  "SEG15": "8",
  "SEG14": "9",
  "SEG13": "10",
  "SEG12": "11",
  "SEG11": "12",
  "SEG20": "3",
  "SEG19": "4",
  "SEG18": "5",
  "SEG17": "6",
  "SEG16": "7",
  "SEG22": "1",
  "SEG21": "2",
  "SEG25": "78",
  "SEG24": "79",
  "SEG23": "80",
  "SEG30": "73",
  "SEG29": "74",
  "SEG28": "75",
  "SEG27": "76",
  "SEG26": "77",
  "SEG35": "68",
  "SEG34": "69",
  "SEG33": "70",
  "SEG32": "71",
  "SEG31": "72",
  "SEG40": "63",
  "SEG39": "64",
  "SEG38": "65",
  "SEG37": "66",
  "SEG36": "67",
  "CL1": "31",
  "CL2": "32",
  "M": "34",
  "D": "35",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { GND: "power_in", OSC1: "input", OSC2: "output", V1: "input", V2: "input", V3: "input", V4: "input", V5: "input", "V_{CC}": "power_in", RS: "input", "R/~{W}": "input", E: "input", DB0: "bidirectional", DB1: "bidirectional", DB2: "bidirectional", DB3: "bidirectional", DB4: "bidirectional", DB5: "bidirectional", DB6: "bidirectional", DB7: "bidirectional", COM1: "output", COM2: "output", COM3: "output", COM4: "output", COM5: "output", COM6: "output", COM7: "output", COM8: "output", COM9: "output", COM10: "output", COM11: "output", COM12: "output", COM13: "output", COM14: "output", COM15: "output", COM16: "output", SEG5: "output", SEG4: "output", SEG3: "output", SEG2: "output", SEG1: "output", SEG10: "output", SEG9: "output", SEG8: "output", SEG7: "output", SEG6: "output", SEG15: "output", SEG14: "output", SEG13: "output", SEG12: "output", SEG11: "output", SEG20: "output", SEG19: "output", SEG18: "output", SEG17: "output", SEG16: "output", SEG22: "output", SEG21: "output", SEG25: "output", SEG24: "output", SEG23: "output", SEG30: "output", SEG29: "output", SEG28: "output", SEG27: "output", SEG26: "output", SEG35: "output", SEG34: "output", SEG33: "output", SEG32: "output", SEG31: "output", SEG40: "output", SEG39: "output", SEG38: "output", SEG37: "output", SEG36: "output", CL1: "output", CL2: "output", M: "output", D: "output", ...opts.pinTypes } });
  }
  override schema = "Driver_Display:HD44780UxxxFS";
  override referencePrefix = "U";
}

/**
 * 32-Channel, Serial to Parallel Converter w/ Open Drain Outputs, PQFP-44
 *
 * KiCad symbol: `Driver_Display:HV5622PG`. Reference prefix: `U`.
 * Footprint filters: *PQFP*10x10mm*P0.8mm*.
 * @see https://ww1.microchip.com/downloads/aemDocuments/documents/OTH/ProductDocuments/DataSheets/20005854A.pdf
 * Keywords: level-shifter 32-bit-shift-register.
 * Default footprint: Package_QFP:PQFP-44_10x10mm_P0.8mm.
 */
export class HV5622PG extends Component.withPins({
  "HVOUT8": "15",
  "HVOUT7": "16",
  "HVOUT6": "17",
  "HVOUT5": "18",
  "HVOUT4": "19",
  "HVOUT3": "20",
  "HVOUT2": "21",
  "HVOUT1": "22",
  "DATA_OUT": "23",
  "NC_24": "24",
  "NC_25": "25",
  "NC_26": "26",
  "~{POL}": "27",
  "CLK": "28",
  "VSS": "29",
  "VDD": "30",
  "~{LE}": "31",
  "DATA_IN": "32",
  "~{BL}": "33",
  "NC_34": "34",
  "HVOUT16": "7",
  "HVOUT15": "8",
  "HVOUT14": "9",
  "HVOUT13": "10",
  "HVOUT12": "11",
  "HVOUT11": "12",
  "HVOUT10": "13",
  "HVOUT9": "14",
  "HVOUT22": "1",
  "HVOUT21": "2",
  "HVOUT20": "3",
  "HVOUT19": "4",
  "HVOUT18": "5",
  "HVOUT17": "6",
  "HVOUT24": "43",
  "HVOUT23": "44",
  "HVOUT32": "35",
  "HVOUT31": "36",
  "HVOUT30": "37",
  "HVOUT29": "38",
  "HVOUT28": "39",
  "HVOUT27": "40",
  "HVOUT26": "41",
  "HVOUT25": "42",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { HVOUT8: "open_collector", HVOUT7: "open_collector", HVOUT6: "open_collector", HVOUT5: "open_collector", HVOUT4: "open_collector", HVOUT3: "open_collector", HVOUT2: "open_collector", HVOUT1: "open_collector", DATA_OUT: "output", NC_24: "no_connect", NC_25: "no_connect", NC_26: "no_connect", "~{POL}": "input", CLK: "input", VSS: "power_in", VDD: "power_in", "~{LE}": "input", DATA_IN: "input", "~{BL}": "input", NC_34: "no_connect", HVOUT16: "open_collector", HVOUT15: "open_collector", HVOUT14: "open_collector", HVOUT13: "open_collector", HVOUT12: "open_collector", HVOUT11: "open_collector", HVOUT10: "open_collector", HVOUT9: "open_collector", HVOUT22: "open_collector", HVOUT21: "open_collector", HVOUT20: "open_collector", HVOUT19: "open_collector", HVOUT18: "open_collector", HVOUT17: "open_collector", HVOUT24: "open_collector", HVOUT23: "open_collector", HVOUT32: "open_collector", HVOUT31: "open_collector", HVOUT30: "open_collector", HVOUT29: "open_collector", HVOUT28: "open_collector", HVOUT27: "open_collector", HVOUT26: "open_collector", HVOUT25: "open_collector", ...opts.pinTypes } });
  }
  override schema = "Driver_Display:HV5622PG";
  override referencePrefix = "U";
}

/**
 * 12-bit, 4-wire touchscreen controller, 1.2 - 3.6V single supply, I2C interface, TSSOP-16
 *
 * KiCad symbol: `Driver_Display:TSC2007xPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm?P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tsc2007.pdf
 * Keywords: Texas-Instruments TSC2007IPW.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class TSC2007xPW extends Component.withPins({
  "VDD/REF": "1",
  "X+": "2",
  "Y+": "3",
  "X-": "4",
  "Y-": "5",
  "GND": "6",
  "NC_7": "7",
  "NC_8": "8",
  "NC_9": "9",
  "~{PENIRQ}": "10",
  "SDA": "11",
  "SCL": "12",
  "A1": "13",
  "A0": "14",
  "NC_15": "15",
  "AUX": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "VDD/REF": "power_in", "X+": "input", "Y+": "input", "X-": "input", "Y-": "input", GND: "power_in", NC_7: "no_connect", NC_8: "no_connect", NC_9: "no_connect", "~{PENIRQ}": "open_collector", SDA: "bidirectional", SCL: "bidirectional", A1: "input", A0: "input", NC_15: "no_connect", AUX: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_Display:TSC2007xPW";
  override referencePrefix = "U";
}

/**
 * 12-bit, 4-wire touchscreen controller, 1.2 - 3.6V single supply, I2C interface, UFBGA-12 (Texas DSBGA / YZG)
 *
 * KiCad symbol: `Driver_Display:TSC2007xYZG`. Reference prefix: `U`.
 * Footprint filters: *BGA*2.11x1.61mm?Layout4x3?P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/tsc2007.pdf
 * Keywords: Texas-Instruments TSC2007IYZG.
 * Default footprint: Package_BGA:Texas_DSBGA-12_2.11x1.61mm_Layout4x3_P0.5mm.
 */
export class TSC2007xYZG extends Component.withPins({
  "AUX": "A1",
  "VDD/REF": "A2",
  "X+": "A3",
  "~{PENIRQ}": "B1",
  "A0": "B2",
  "Y+": "B3",
  "SDA": "C1",
  "A1": "C2",
  "X-": "C3",
  "SCL": "D1",
  "GND": "D2",
  "Y-": "D3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { AUX: "input", "VDD/REF": "power_in", "X+": "input", "~{PENIRQ}": "open_collector", A0: "input", "Y+": "input", SDA: "bidirectional", A1: "input", "X-": "input", SCL: "bidirectional", GND: "power_in", "Y-": "input", ...opts.pinTypes } });
  }
  override schema = "Driver_Display:TSC2007xYZG";
  override referencePrefix = "U";
}

/**
 * Single-supply, 12bit, 4 ch, touch screen driver, 2.2 - 5.25 VDD, -40 to +85 C, QSPI, SPI, 3-wire serial interface, QFN-16
 *
 * KiCad symbol: `Driver_Display:XPT2046QF`. Reference prefix: `U`.
 * Footprint filters: *QFN*1EP*4x4mm*P0.65mm*.
 * @see http://www.xptek.cn/uploadfile/download/201707171401161883.pdf
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_4x4mm_P0.65mm_EP2.1x2.1mm.
 */
export class XPT2046QF extends Component.withPins({
  "BUSY": "1",
  "DIN": "2",
  "~{CS}": "3",
  "DCLK": "4",
  "VCC": "5",
  "XP": "6",
  "YP": "7",
  "XN": "8",
  "YN": "9",
  "GND": "10",
  "VBAT": "11",
  "AUX": "12",
  "VREF": "13",
  "IOVDD": "14",
  "~{PENIRQ}": "15",
  "DOUT": "16",
  "NC": "17",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BUSY: "output", DIN: "input", "~{CS}": "input", DCLK: "input", VCC: "power_in", XP: "input", YP: "input", XN: "input", YN: "input", GND: "power_in", VBAT: "power_in", AUX: "input", VREF: "bidirectional", IOVDD: "power_in", "~{PENIRQ}": "open_collector", DOUT: "output", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Driver_Display:XPT2046QF";
  override referencePrefix = "U";
}

/**
 * Single-supply, 12bit, 4 ch, touch screen driver, 2.2 - 5.25 VDD, -40 to +85 C, QSPI, SPI, 3-wire serial interface, TSSOP-16
 *
 * KiCad symbol: `Driver_Display:XPT2046TS`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.xptek.cn/uploadfile/download/201707171401161883.pdf
 * Keywords: Single-supply, 12bit, 4 ch, touch screen driver, 2.2 - 5.25 VDD, -40 to +85 C, QSPI, SPI, 3-wire serial interface, TSSOP-16.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class XPT2046TS extends Component.withPins({
  "VCC": "1",
  "XP": "2",
  "YP": "3",
  "XN": "4",
  "YN": "5",
  "GND": "6",
  "VBAT": "7",
  "IN": "8",
  "VREF": "9",
  "IOVDD": "10",
  "~{PENIRQ}": "11",
  "DOUT": "12",
  "BUSY": "13",
  "DIN": "14",
  "~{CS}": "15",
  "DCLK": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", XP: "input", YP: "input", XN: "input", YN: "input", GND: "power_in", VBAT: "power_in", IN: "input", VREF: "bidirectional", IOVDD: "power_in", "~{PENIRQ}": "open_collector", DOUT: "output", BUSY: "output", DIN: "input", "~{CS}": "input", DCLK: "input", ...opts.pinTypes } });
  }
  override schema = "Driver_Display:XPT2046TS";
  override referencePrefix = "U";
}
