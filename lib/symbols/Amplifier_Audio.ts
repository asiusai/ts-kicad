// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Stereo Headphone Amplifier, VCC = 1.8 .. 7.5V, DIP-16
 *
 * KiCad symbol: `Amplifier_Audio:CXA1034P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://archive.org/details/sony-semicon-ic-databook-1987-audio/page/97/mode/1up
 * Keywords: Sony Obsolete.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class CXA1034P extends Component.withPins({
  "EQ_OUT_(A)": "1",
  "EQ_IN_(A)": "2",
  "IN_(A)": "3",
  "GND_(2)": "4",
  "V_{REF}": "5",
  "IN_(B)": "6",
  "EQ_IN_(B)": "7",
  "EQ_OUT_(B)": "8",
  "VOL_IN": "9",
  "NF_(B)": "10",
  "OUT_(B)": "11",
  "V_{CC}": "12",
  "GND_(1)": "13",
  "OUT_(A)": "14",
  "NF_(A)": "15",
  "V_{REG}": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "EQ_OUT_(A)": "output", "EQ_IN_(A)": "input", "IN_(A)": "input", "GND_(2)": "power_in", "V_{REF}": "passive", "IN_(B)": "input", "EQ_IN_(B)": "input", "EQ_OUT_(B)": "output", VOL_IN: "input", "NF_(B)": "input", "OUT_(B)": "output", "V_{CC}": "power_in", "GND_(1)": "power_in", "OUT_(A)": "output", "NF_(A)": "input", "V_{REG}": "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:CXA1034P";
  override referencePrefix = "U";
}

/**
 * PowIRaudio Integrated Analog Input Class D Audio Amplifier, 160W/4ohm, 80V, PQFN-22
 *
 * KiCad symbol: `Amplifier_Audio:IR4301`. Reference prefix: `U`.
 * Footprint filters: Infineon*PQFN*4EP*6x5mm*P0.65mm*.
 * @see https://www.infineon.com/dgdl/ir4301.pdf?fileId=5546d462533600a4015355d5fc691819
 * Keywords: integrated class d amplifier.
 * Default footprint: Package_DFN_QFN:Infineon_PQFN-22-15-4EP_6x5mm_P0.65mm.
 */
export class IR4301 extends Component.withPins({
  "VAA": "1",
  "GND": "2",
  "IN+": "3",
  "IN-": "4",
  "COMP": "5",
  "CSD": "6",
  "VSS": "7",
  "VCC": "8",
  "COM_9": "9",
  "VN": "10",
  "VS": "11",
  "VP": "12",
  "VB": "13",
  "CSH": "14",
  "COM_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VAA: "power_in", GND: "power_in", "IN+": "input", "IN-": "input", COMP: "output", CSD: "passive", VSS: "power_in", VCC: "power_in", COM_9: "power_in", VN: "power_in", VS: "output", VP: "power_in", VB: "power_in", CSH: "passive", COM_15: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:IR4301";
  override referencePrefix = "U";
}

/**
 * PowIRaudio 2 Channel Integrated Analog Input Class D Audio Amplifier, 130W/4ohm, 80V, PQFN-44
 *
 * KiCad symbol: `Amplifier_Audio:IR4302`. Reference prefix: `U`.
 * Footprint filters: Infineon*PQFN*5EP*7x7mm*P0.5mm*.
 * @see https://www.infineon.com/dgdl/ir4302.pdf?fileId=5546d462533600a4015355d602a9181d
 * Keywords: integrated class d amplifier 2ch.
 * Default footprint: Package_DFN_QFN:Infineon_PQFN-44-31-5EP_7x7mm_P0.5mm.
 */
export class IR4302 extends Component.withPins({
  "CLIP": "1",
  "GND": "5",
  "VSS": "6",
  "VAA": "7",
  "IN+1": "8",
  "IN-1": "9",
  "COMP1": "10",
  "CSD": "11",
  "FAULT": "12",
  "NC_13": "13",
  "VCC": "14",
  "COM_15": "15",
  "CSH1": "16",
  "VB1": "17",
  "VS1_18": "18",
  "VP1": "19",
  "VS1_20": "20",
  "VN1": "21",
  "COM_28": "28",
  "NC_29": "29",
  "NC_30": "30",
  "COM_31": "31",
  "COMP2": "2",
  "IN-2": "3",
  "IN+2": "4",
  "VN2": "22",
  "VS2_23": "23",
  "VP2": "24",
  "VS2_25": "25",
  "VB2": "26",
  "CSH2": "27",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CLIP: "open_collector", GND: "power_in", VSS: "power_in", VAA: "power_in", "IN+1": "input", "IN-1": "input", COMP1: "output", CSD: "passive", FAULT: "open_collector", NC_13: "no_connect", VCC: "power_in", COM_15: "power_in", CSH1: "passive", VB1: "power_in", VS1_18: "output", VP1: "power_in", VS1_20: "passive", VN1: "power_in", COM_28: "passive", NC_29: "no_connect", NC_30: "no_connect", COM_31: "passive", COMP2: "output", "IN-2": "input", "IN+2": "input", VN2: "power_in", VS2_23: "output", VP2: "power_in", VS2_25: "passive", VB2: "power_in", CSH2: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:IR4302";
  override referencePrefix = "U";
}

/**
 * PowIRaudio Integrated Analog Input Class D Audio Amplifier, 90W/4ohm, 60V, PQFN-22
 *
 * KiCad symbol: `Amplifier_Audio:IR4311`. Reference prefix: `U`.
 * Footprint filters: Infineon*PQFN*4EP*6x5mm*P0.65mm*.
 * @see https://www.infineon.com/dgdl/ir4301.pdf?fileId=5546d462533600a4015355d5fc691819
 * Keywords: integrated class d amplifier.
 * Default footprint: Package_DFN_QFN:Infineon_PQFN-22-15-4EP_6x5mm_P0.65mm.
 */
export class IR4311 extends Component.withPins({
  "VAA": "1",
  "GND": "2",
  "IN+": "3",
  "IN-": "4",
  "COMP": "5",
  "CSD": "6",
  "VSS": "7",
  "VCC": "8",
  "COM_9": "9",
  "VN": "10",
  "VS": "11",
  "VP": "12",
  "VB": "13",
  "CSH": "14",
  "COM_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VAA: "power_in", GND: "power_in", "IN+": "input", "IN-": "input", COMP: "output", CSD: "passive", VSS: "power_in", VCC: "power_in", COM_9: "power_in", VN: "power_in", VS: "output", VP: "power_in", VB: "power_in", CSH: "passive", COM_15: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:IR4311";
  override referencePrefix = "U";
}

/**
 * PowIRaudio 2 Channel Integrated Analog Input Class D Audio Amplifier, 100W/4ohm, 60V, PQFN-44
 *
 * KiCad symbol: `Amplifier_Audio:IR4312`. Reference prefix: `U`.
 * Footprint filters: Infineon*PQFN*5EP*7x7mm*P0.5mm*.
 * @see https://www.infineon.com/dgdl/ir4302.pdf?fileId=5546d462533600a4015355d602a9181d
 * Keywords: integrated class d amplifier 2ch.
 * Default footprint: Package_DFN_QFN:Infineon_PQFN-44-31-5EP_7x7mm_P0.5mm.
 */
export class IR4312 extends Component.withPins({
  "CLIP": "1",
  "GND": "5",
  "VSS": "6",
  "VAA": "7",
  "IN+1": "8",
  "IN-1": "9",
  "COMP1": "10",
  "CSD": "11",
  "FAULT": "12",
  "NC_13": "13",
  "VCC": "14",
  "COM_15": "15",
  "CSH1": "16",
  "VB1": "17",
  "VS1_18": "18",
  "VP1": "19",
  "VS1_20": "20",
  "VN1": "21",
  "COM_28": "28",
  "NC_29": "29",
  "NC_30": "30",
  "COM_31": "31",
  "COMP2": "2",
  "IN-2": "3",
  "IN+2": "4",
  "VN2": "22",
  "VS2_23": "23",
  "VP2": "24",
  "VS2_25": "25",
  "VB2": "26",
  "CSH2": "27",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CLIP: "open_collector", GND: "power_in", VSS: "power_in", VAA: "power_in", "IN+1": "input", "IN-1": "input", COMP1: "output", CSD: "passive", FAULT: "open_collector", NC_13: "no_connect", VCC: "power_in", COM_15: "power_in", CSH1: "passive", VB1: "power_in", VS1_18: "output", VP1: "power_in", VS1_20: "passive", VN1: "power_in", COM_28: "passive", NC_29: "no_connect", NC_30: "no_connect", COM_31: "passive", COMP2: "output", "IN-2": "input", "IN+2": "input", VN2: "power_in", VS2_23: "output", VP2: "power_in", VS2_25: "passive", VB2: "power_in", CSH2: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:IR4312";
  override referencePrefix = "U";
}

/**
 * PowIRaudio Integrated Analog Input Class D Audio Amplifier, 35W/4ohm, 40V, PQFN-22
 *
 * KiCad symbol: `Amplifier_Audio:IR4321`. Reference prefix: `U`.
 * Footprint filters: Infineon*PQFN*4EP*6x5mm*P0.65mm*.
 * @see https://www.infineon.com/dgdl/ir4301.pdf?fileId=5546d462533600a4015355d5fc691819
 * Keywords: integrated class d amplifier.
 * Default footprint: Package_DFN_QFN:Infineon_PQFN-22-15-4EP_6x5mm_P0.65mm.
 */
export class IR4321 extends Component.withPins({
  "VAA": "1",
  "GND": "2",
  "IN+": "3",
  "IN-": "4",
  "COMP": "5",
  "CSD": "6",
  "VSS": "7",
  "VCC": "8",
  "COM_9": "9",
  "VN": "10",
  "VS": "11",
  "VP": "12",
  "VB": "13",
  "CSH": "14",
  "COM_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VAA: "power_in", GND: "power_in", "IN+": "input", "IN-": "input", COMP: "output", CSD: "passive", VSS: "power_in", VCC: "power_in", COM_9: "power_in", VN: "power_in", VS: "output", VP: "power_in", VB: "power_in", CSH: "passive", COM_15: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:IR4321";
  override referencePrefix = "U";
}

/**
 * PowIRaudio 2 Channel Integrated Analog Input Class D Audio Amplifier, 35W/4ohm, 40V, PQFN-44
 *
 * KiCad symbol: `Amplifier_Audio:IR4322`. Reference prefix: `U`.
 * Footprint filters: Infineon*PQFN*5EP*7x7mm*P0.5mm*.
 * @see https://www.infineon.com/dgdl/ir4302.pdf?fileId=5546d462533600a4015355d602a9181d
 * Keywords: integrated class d amplifier 2ch.
 * Default footprint: Package_DFN_QFN:Infineon_PQFN-44-31-5EP_7x7mm_P0.5mm.
 */
export class IR4322 extends Component.withPins({
  "CLIP": "1",
  "GND": "5",
  "VSS": "6",
  "VAA": "7",
  "IN+1": "8",
  "IN-1": "9",
  "COMP1": "10",
  "CSD": "11",
  "FAULT": "12",
  "NC_13": "13",
  "VCC": "14",
  "COM_15": "15",
  "CSH1": "16",
  "VB1": "17",
  "VS1_18": "18",
  "VP1": "19",
  "VS1_20": "20",
  "VN1": "21",
  "COM_28": "28",
  "NC_29": "29",
  "NC_30": "30",
  "COM_31": "31",
  "COMP2": "2",
  "IN-2": "3",
  "IN+2": "4",
  "VN2": "22",
  "VS2_23": "23",
  "VP2": "24",
  "VS2_25": "25",
  "VB2": "26",
  "CSH2": "27",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CLIP: "open_collector", GND: "power_in", VSS: "power_in", VAA: "power_in", "IN+1": "input", "IN-1": "input", COMP1: "output", CSD: "passive", FAULT: "open_collector", NC_13: "no_connect", VCC: "power_in", COM_15: "power_in", CSH1: "passive", VB1: "power_in", VS1_18: "output", VP1: "power_in", VS1_20: "passive", VN1: "power_in", COM_28: "passive", NC_29: "no_connect", NC_30: "no_connect", COM_31: "passive", COMP2: "output", "IN-2": "input", "IN+2": "input", VN2: "power_in", VS2_23: "output", VP2: "power_in", VS2_25: "passive", VB2: "power_in", CSH2: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:IR4322";
  override referencePrefix = "U";
}

/**
 * 2 CH Digital Audio Amplifier, PWM Modulator, ±100V, 0.5/0.6A, MLPQ-48
 *
 * KiCad symbol: `Amplifier_Audio:IRS2052M`. Reference prefix: `U`.
 * Footprint filters: Infineon*MLPQ*1EP*7x7mm*P0.5mm*.
 * @see https://www.infineon.com/dgdl/irs2052mpbf.pdf?fileId=5546d462533600a401535675d3b32788
 * Keywords: Gate Driver Class D 2ch.
 * Default footprint: Package_DFN_QFN:Infineon_MLPQ-48-1EP_7x7mm_P0.5mm_EP5.55x5.55mm.
 */
export class IRS2052M extends Component.withPins({
  "NC_1": "1",
  "NC_10": "10",
  "VS1": "11",
  "NC_12": "12",
  "NC_13": "13",
  "HO1": "14",
  "VB1": "15",
  "CSH1": "16",
  "LO1": "17",
  "COM_19": "19",
  "NC_24": "24",
  "NC_25": "25",
  "NC_27": "27",
  "NC_28": "28",
  "OTP": "29",
  "COM_30": "30",
  "VCC": "31",
  "DT": "32",
  "OCSET": "33",
  "VREF": "34",
  "NC_35": "35",
  "NC_36": "36",
  "NC_37": "37",
  "GND": "41",
  "VSS": "42",
  "VAA": "43",
  "IN1": "44",
  "COMP1": "45",
  "CLIP1": "46",
  "CSD": "47",
  "NC_48": "48",
  "COM_49": "49",
  "OTW": "2",
  "FAULT": "3",
  "CKO": "4",
  "X1B": "5",
  "X1A": "6",
  "X2B": "7",
  "X2A": "8",
  "XSL": "9",
  "VCC2": "18",
  "LO2": "20",
  "CSH2": "21",
  "VB2": "22",
  "HO2": "23",
  "VS2": "26",
  "CLIP2": "38",
  "COMP2": "39",
  "IN2": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_1: "no_connect", NC_10: "no_connect", VS1: "passive", NC_12: "no_connect", NC_13: "no_connect", HO1: "output", VB1: "power_in", CSH1: "passive", LO1: "output", COM_19: "passive", NC_24: "no_connect", NC_25: "no_connect", NC_27: "no_connect", NC_28: "no_connect", OTP: "passive", COM_30: "power_in", VCC: "power_in", DT: "passive", OCSET: "passive", VREF: "power_out", NC_35: "no_connect", NC_36: "no_connect", NC_37: "no_connect", GND: "power_in", VSS: "power_in", VAA: "power_in", IN1: "input", COMP1: "output", CLIP1: "open_collector", CSD: "passive", NC_48: "no_connect", COM_49: "passive", OTW: "open_collector", FAULT: "open_collector", CKO: "output", X1B: "output", X1A: "input", X2B: "output", X2A: "input", XSL: "input", VCC2: "power_in", LO2: "output", CSH2: "passive", VB2: "power_in", HO2: "output", VS2: "passive", CLIP2: "open_collector", COMP2: "output", IN2: "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:IRS2052M";
  override referencePrefix = "U";
}

/**
 * Protected Digital Audio Amplifier, PWM Modulator, ±100V, 1.0/1.2A, PDIP-16
 *
 * KiCad symbol: `Amplifier_Audio:IRS2092`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.infineon.com/dgdl/irs2092.pdf?fileId=5546d462533600a401535675f1be2790
 * Keywords: Gate Driver Class D.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class IRS2092 extends Component.withPins({
  "VAA": "1",
  "GND": "2",
  "IN-": "3",
  "COMP": "4",
  "CSD": "5",
  "VSS": "6",
  "VREF": "7",
  "OCSET": "8",
  "DT": "9",
  "COM": "10",
  "LO": "11",
  "VCC": "12",
  "VS": "13",
  "HO": "14",
  "VB": "15",
  "CSH": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VAA: "power_in", GND: "power_in", "IN-": "input", COMP: "output", CSD: "passive", VSS: "power_in", VREF: "power_out", OCSET: "passive", DT: "passive", COM: "power_in", LO: "output", VCC: "power_in", VS: "passive", HO: "output", VB: "power_in", CSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:IRS2092";
  override referencePrefix = "U";
}

/**
 * Protected Digital Audio Amplifier, PWM Modulator, ±100V, 1.0/1.2A, SOIC-16
 *
 * KiCad symbol: `Amplifier_Audio:IRS2092S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://www.infineon.com/dgdl/irs2092.pdf?fileId=5546d462533600a401535675f1be2790
 * Keywords: Gate Driver Class D.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class IRS2092S extends Component.withPins({
  "VAA": "1",
  "GND": "2",
  "IN-": "3",
  "COMP": "4",
  "CSD": "5",
  "VSS": "6",
  "VREF": "7",
  "OCSET": "8",
  "DT": "9",
  "COM": "10",
  "LO": "11",
  "VCC": "12",
  "VS": "13",
  "HO": "14",
  "VB": "15",
  "CSH": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VAA: "power_in", GND: "power_in", "IN-": "input", COMP: "output", CSD: "passive", VSS: "power_in", VREF: "power_out", OCSET: "passive", DT: "passive", COM: "power_in", LO: "output", VCC: "power_in", VS: "passive", HO: "output", VB: "power_in", CSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:IRS2092S";
  override referencePrefix = "U";
}

/**
 * 4 CH Digital Audio Amplifier, PWM Modulator, ±100V, 0.5/0.6A, MLPQ-48
 *
 * KiCad symbol: `Amplifier_Audio:IRS2093M`. Reference prefix: `U`.
 * Footprint filters: Infineon*MLPQ*1EP*7x7mm*P0.5mm*.
 * @see https://www.infineon.com/dgdl/irs2093mpbf.pdf?fileId=5546d462533600a401535675fb892793
 * Keywords: Gate Driver Class D 4ch.
 * Default footprint: Package_DFN_QFN:Infineon_MLPQ-48-1EP_7x7mm_P0.5mm_EP5.55x5.55mm.
 */
export class IRS2093M extends Component.withPins({
  "DS": "1",
  "NC_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "VS1": "11",
  "HO1": "12",
  "VB1": "13",
  "CSH1": "14",
  "LO1": "15",
  "NC_18": "18",
  "NC_19": "19",
  "COM_20": "20",
  "NC_31": "31",
  "COM_32": "32",
  "VCC": "33",
  "DT": "34",
  "OCSET": "35",
  "VREF": "36",
  "GND": "41",
  "VSS": "42",
  "VAA": "43",
  "IN1": "46",
  "COMP1": "47",
  "CSD": "48",
  "COM_49": "49",
  "CSH2": "7",
  "VB2": "8",
  "HO2": "9",
  "VS2": "10",
  "LO2": "16",
  "VCC2": "17",
  "IN2": "44",
  "COMP2": "45",
  "LO3": "22",
  "CSH3": "23",
  "VB3": "24",
  "HO3": "25",
  "VS3": "26",
  "COMP3": "37",
  "IN3": "38",
  "LO4": "21",
  "VS4": "27",
  "HO4": "28",
  "VB4": "29",
  "CSH4": "30",
  "COMP4": "39",
  "IN4": "40",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { DS: "input", NC_2: "no_connect", NC_3: "no_connect", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", VS1: "passive", HO1: "output", VB1: "power_in", CSH1: "passive", LO1: "output", NC_18: "no_connect", NC_19: "no_connect", COM_20: "passive", NC_31: "no_connect", COM_32: "power_in", VCC: "power_in", DT: "passive", OCSET: "passive", VREF: "power_out", GND: "power_in", VSS: "power_in", VAA: "power_in", IN1: "input", COMP1: "output", CSD: "passive", COM_49: "passive", CSH2: "passive", VB2: "power_in", HO2: "output", VS2: "passive", LO2: "output", VCC2: "power_in", IN2: "input", COMP2: "output", LO3: "output", CSH3: "passive", VB3: "power_in", HO3: "output", VS3: "passive", COMP3: "output", IN3: "input", LO4: "output", VS4: "passive", HO4: "output", VB4: "power_in", CSH4: "passive", COMP4: "output", IN4: "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:IRS2093M";
  override referencePrefix = "U";
}

/**
 * Protected Digital Audio Driver, ±100V, 1.0/1.2A, SOIC-16
 *
 * KiCad symbol: `Amplifier_Audio:IRS20957S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see http://www.infineon.com/dgdl/irs20957spbf.pdf?fileId=5546d462533600a401535676143e2799
 * Keywords: Gate Driver Class D.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class IRS20957S extends Component.withPins({
  "VDD": "1",
  "CSD": "2",
  "IN": "3",
  "VSS": "4",
  "NC_5": "5",
  "VREF": "6",
  "OCSET": "7",
  "DT": "8",
  "COM": "9",
  "LO": "10",
  "VCC": "11",
  "NC_12": "12",
  "VS": "13",
  "HO": "14",
  "VB": "15",
  "CSH": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", CSD: "passive", IN: "input", VSS: "power_in", NC_5: "no_connect", VREF: "power_out", OCSET: "passive", DT: "passive", COM: "power_in", LO: "output", VCC: "power_in", NC_12: "no_connect", VS: "passive", HO: "output", VB: "power_in", CSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:IRS20957S";
  override referencePrefix = "U";
}

/**
 * Class D Audio Driver, ±100V, 2.0/2.0A, SOIC-16
 *
 * KiCad symbol: `Amplifier_Audio:IRS20965S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/irs20965spbf.pdf?fileId=5546d462533600a4015356761d8b279b
 * Keywords: Gate Driver Class D.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class IRS20965S extends Component.withPins({
  "VDD": "1",
  "CSD": "2",
  "OC": "3",
  "HIN": "4",
  "LIN": "5",
  "VSS": "6",
  "VREF": "7",
  "OCSET": "8",
  "COM": "9",
  "LO": "10",
  "VCC": "11",
  "STP": "12",
  "VS": "13",
  "HO": "14",
  "VB": "15",
  "CSH": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VDD: "power_in", CSD: "passive", OC: "open_collector", HIN: "input", LIN: "input", VSS: "power_in", VREF: "power_out", OCSET: "passive", COM: "power_in", LO: "output", VCC: "power_in", STP: "input", VS: "passive", HO: "output", VB: "power_in", CSH: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:IRS20965S";
  override referencePrefix = "U";
}

/**
 * Class D Audio IC, PWM Modulator, ±200V, 0.5/0.6A, MLPQ-32
 *
 * KiCad symbol: `Amplifier_Audio:IRS2452AM`. Reference prefix: `U`.
 * Footprint filters: Infineon*MLPQ*1EP*7x7mm*P0.5mm*.
 * @see https://www.infineon.com/dgdl/Infineon-IRS2452AM-DS-v01_00-EN.pdf?fileId=5546d462584d1d4a01584ee4f1f00713
 * Keywords: Gate Driver Class D 2ch.
 * Default footprint: Package_DFN_QFN:Infineon_MLPQ-40-32-1EP_7x7mm_P0.5mm.
 */
export class IRS2452AM extends Component.withPins({
  "VSS": "4",
  "VAA": "5",
  "NC_6": "6",
  "GND": "7",
  "IN+1": "8",
  "IN-1": "9",
  "COMP1": "10",
  "CSD": "11",
  "BTL": "12",
  "CSH1": "13",
  "VB1": "14",
  "HO1": "15",
  "VS1": "16",
  "CSL1": "17",
  "LO1": "18",
  "NC_19": "19",
  "COM_20": "20",
  "NC_21": "21",
  "VCC": "22",
  "OTP": "23",
  "DT": "24",
  "A/B": "31",
  "COM_33": "33",
  "COMP2": "1",
  "IN-2": "2",
  "IN+2": "3",
  "LO2": "25",
  "CSL2": "26",
  "VS2": "27",
  "HO2": "28",
  "VB2": "29",
  "CSH2": "30",
  "CLK": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSS: "power_in", VAA: "power_in", NC_6: "no_connect", GND: "power_in", "IN+1": "input", "IN-1": "input", COMP1: "output", CSD: "passive", BTL: "input", CSH1: "passive", VB1: "power_in", HO1: "output", VS1: "passive", CSL1: "passive", LO1: "output", NC_19: "no_connect", COM_20: "power_in", NC_21: "no_connect", VCC: "power_in", OTP: "passive", DT: "passive", "A/B": "input", COM_33: "passive", COMP2: "output", "IN-2": "input", "IN+2": "input", LO2: "output", CSL2: "passive", VS2: "passive", HO2: "output", VB2: "power_in", CSH2: "passive", CLK: "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:IRS2452AM";
  override referencePrefix = "U";
}

/**
 * 1.2W, 2.7-5.5V, Audio Power Amplifier, Active-Low Standby, JEITA SOIC-8 (SOP-8)
 *
 * KiCad symbol: `Amplifier_Audio:IS31AP4991-GRLS2`. Reference prefix: `U`.
 * Footprint filters: JEITA?SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.issi.com/WW/pdf/31AP4991.pdf
 * Keywords: ultra low consumption distortion.
 * Default footprint: Package_SO:JEITA_SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class IS31AP4991_GRLS2 extends Component.withPins({
  "+": "1",
  "P2": "2",
  "-": "3",
  "GND": "4",
  "BYP": "5",
  "P6": "6",
  "~{SDB}": "7",
  "V+": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+": "input", P2: "output", "-": "input", GND: "power_in", BYP: "passive", P6: "output", "~{SDB}": "input", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:IS31AP4991-GRLS2";
  override referencePrefix = "U";
}

/**
 * 1.2W, 2.7-5.5V, Audio Power Amplifier, Active-Low Standby, MSOP-8
 *
 * KiCad symbol: `Amplifier_Audio:IS31AP4991-SLS2`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see http://www.issi.com/WW/pdf/31AP4991.pdf
 * Keywords: ultra low consumption distortion.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class IS31AP4991_SLS2 extends Component.withPins({
  "~{SDB}": "1",
  "BYP": "2",
  "+": "3",
  "-": "4",
  "P5": "5",
  "V+": "6",
  "GND": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{SDB}": "input", BYP: "passive", "+": "input", "-": "input", P5: "output", "V+": "power_in", GND: "power_in", P8: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:IS31AP4991-SLS2";
  override referencePrefix = "U";
}

/**
 * 20W Audio Power Amplifier, TO-220-5
 *
 * KiCad symbol: `Amplifier_Audio:LM1875`. Reference prefix: `U`.
 * Footprint filters: TO?220*StaggerOdd*.
 * @see http://www.ti.com/lit/ds/symlink/lm1875.pdf
 * Keywords: audio amplifier.
 * Default footprint: Package_TO_SOT_THT:TO-220-5_P3.4x3.7mm_StaggerOdd_Lead3.8mm_Vertical.
 */
export class LM1875 extends Component.withPins({
  "+": "1",
  "-": "2",
  "V-": "3",
  "P4": "4",
  "V+": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+": "input", "-": "input", "V-": "power_in", P4: "output", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:LM1875";
  override referencePrefix = "U";
}

/**
 * Overture Audio Power Amplifier Series Dual 20W Audio Power Amplifier with Mute and Standby Modes, TO-220-15
 *
 * KiCad symbol: `Amplifier_Audio:LM1876`. Reference prefix: `U`.
 * Footprint filters: TO?220*StaggerOdd*.
 * @see http://www.ti.com/lit/ds/symlink/lm1876.pdf
 * Keywords: audio amplifier 2ch.
 * Default footprint: Package_TO_SOT_THT:TO-220-15_P2.54x5.08mm_StaggerOdd_Lead4.58mm_Vertical.
 */
export class LM1876 extends Component.withPins({
  "V+_2": "2",
  "P3": "3",
  "V-": "4",
  "GND_5": "5",
  "MUTE_6": "6",
  "-_7": "7",
  "+_8": "8",
  "STBY_9": "9",
  "P1": "1",
  "GND_10": "10",
  "MUTE_11": "11",
  "-_12": "12",
  "+_13": "13",
  "STBY_14": "14",
  "V+_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V+_2": "power_in", P3: "output", "V-": "power_in", GND_5: "power_in", MUTE_6: "input", "-_7": "input", "+_8": "input", STBY_9: "input", P1: "output", GND_10: "power_in", MUTE_11: "input", "-_12": "input", "+_13": "input", STBY_14: "input", "V+_15": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:LM1876";
  override referencePrefix = "U";
}

/**
 * Dual Audio Power Amplifier, PDIP-14/SOIC-14
 *
 * KiCad symbol: `Amplifier_Audio:LM1877`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm1877.pdf
 * Keywords: audio amplifier 2ch.
 */
export class LM1877 extends Component.withPins({
  "BIAS": "1",
  "P2": "2",
  "+_6": "6",
  "-_7": "7",
  "-_8": "8",
  "+_9": "9",
  "P13": "13",
  "GND_3": "3",
  "GND_4": "4",
  "GND_5": "5",
  "GND_10": "10",
  "GND_11": "11",
  "GND_12": "12",
  "V+": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BIAS: "input", P2: "output", "+_6": "input", "-_7": "input", "-_8": "input", "+_9": "input", P13: "output", GND_3: "power_in", GND_4: "passive", GND_5: "passive", GND_10: "passive", GND_11: "passive", GND_12: "passive", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:LM1877";
  override referencePrefix = "U";
}

/**
 * Overture Audio Power Amplifier Series High-Performance 40W Audio Power Amplifier w/Mute, TO-220-11
 *
 * KiCad symbol: `Amplifier_Audio:LM2876`. Reference prefix: `U`.
 * Footprint filters: TO?220*StaggerOdd*.
 * @see http://www.ti.com/lit/ds/symlink/lm2876.pdf
 * Keywords: audio amplifier 2ch.
 * Default footprint: Package_TO_SOT_THT:TO-220-11_P3.4x5.08mm_StaggerOdd_Lead4.58mm_Vertical.
 */
export class LM2876 extends Component.withPins({
  "V+": "1",
  "NC_2": "2",
  "P3": "3",
  "V-": "4",
  "NC_5": "5",
  "NC_6": "6",
  "GND": "7",
  "MUTE": "8",
  "-": "9",
  "+": "10",
  "NC_11": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V+": "power_in", NC_2: "no_connect", P3: "output", "V-": "power_in", NC_5: "no_connect", NC_6: "no_connect", GND: "power_in", MUTE: "input", "-": "input", "+": "input", NC_11: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:LM2876";
  override referencePrefix = "U";
}

/**
 * 2.5W Audio Power Amplifier, PDIP-14
 *
 * KiCad symbol: `Amplifier_Audio:LM380N`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm380.pdf
 * Keywords: audio amplifier.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 */
export class LM380N extends Component.withPins({
  "BYPASS": "1",
  "+": "2",
  "GND_3": "3",
  "GND_4": "4",
  "GND_5": "5",
  "-": "6",
  "GND_7": "7",
  "P8": "8",
  "NC_9": "9",
  "GND_10": "10",
  "GND_11": "11",
  "GND_12": "12",
  "NC_13": "13",
  "VS": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BYPASS: "passive", "+": "input", GND_3: "power_in", GND_4: "passive", GND_5: "passive", "-": "input", GND_7: "power_in", P8: "output", NC_9: "no_connect", GND_10: "passive", GND_11: "passive", GND_12: "passive", NC_13: "no_connect", VS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:LM380N";
  override referencePrefix = "U";
}

/**
 * 2.5W Audio Power Amplifier, PDIP-8
 *
 * KiCad symbol: `Amplifier_Audio:LM380N-8`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm380.pdf
 * Keywords: audio amplifier.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class LM380N_8 extends Component.withPins({
  "NC": "1",
  "+": "2",
  "-": "3",
  "GND_4": "4",
  "GND_5": "5",
  "P6": "6",
  "VS": "7",
  "BYPASS": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", "+": "input", "-": "input", GND_4: "power_in", GND_5: "power_in", P6: "output", VS: "power_in", BYPASS: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:LM380N-8";
  override referencePrefix = "U";
}

/**
 * 5W Audio Power Amplifier, PDIP-14
 *
 * KiCad symbol: `Amplifier_Audio:LM384`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm384.pdf
 * Keywords: audio amplifier.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 */
export class LM384 extends Component.withPins({
  "BYPASS": "1",
  "+": "2",
  "GND_3": "3",
  "GND_4": "4",
  "GND_5": "5",
  "-": "6",
  "GND_7": "7",
  "P8": "8",
  "NC_9": "9",
  "GND_10": "10",
  "GND_11": "11",
  "GND_12": "12",
  "NC_13": "13",
  "VS": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BYPASS: "passive", "+": "input", GND_3: "power_in", GND_4: "passive", GND_5: "passive", "-": "input", GND_7: "power_in", P8: "output", NC_9: "no_connect", GND_10: "passive", GND_11: "passive", GND_12: "passive", NC_13: "no_connect", VS: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:LM384";
  override referencePrefix = "U";
}

/**
 * Low Voltage Audio Power Amplifier, DIP-8/SOIC-8/SSOP-8
 *
 * KiCad symbol: `Amplifier_Audio:LM386`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*, MSSOP*P0.65mm*, TSSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm386.pdf
 * Keywords: single Power opamp.
 */
export class LM386 extends Component.withPins({
  "GAIN_1": "1",
  "-": "2",
  "+": "3",
  "GND": "4",
  "P5": "5",
  "V+": "6",
  "BYPASS": "7",
  "GAIN_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GAIN_1: "input", "-": "input", "+": "input", GND: "power_in", P5: "output", "V+": "power_in", BYPASS: "input", GAIN_8: "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:LM386";
  override referencePrefix = "U";
}

/**
 * Overture Audio Power Amplifier Series High-Performance 68W Audio Power Amplifier w/Mute, TO-220-11
 *
 * KiCad symbol: `Amplifier_Audio:LM3886`. Reference prefix: `U`.
 * Footprint filters: TO?220*StaggerOdd*.
 * @see http://www.ti.com/lit/ds/symlink/lm3886.pdf
 * Keywords: audio amplifier.
 * Default footprint: Package_TO_SOT_THT:TO-220-11_P3.4x5.08mm_StaggerOdd_Lead4.58mm_Vertical.
 */
export class LM3886 extends Component.withPins({
  "V+_1": "1",
  "NC_2": "2",
  "P3": "3",
  "V-": "4",
  "V+_5": "5",
  "NC_6": "6",
  "GND": "7",
  "MUTE": "8",
  "-": "9",
  "+": "10",
  "NC_11": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V+_1": "power_in", NC_2: "no_connect", P3: "output", "V-": "power_in", "V+_5": "passive", NC_6: "no_connect", GND: "power_in", MUTE: "input", "-": "input", "+": "input", NC_11: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:LM3886";
  override referencePrefix = "U";
}

/**
 * Stereo 11W Audio Power Amplifier, TO-263-7
 *
 * KiCad symbol: `Amplifier_Audio:LM4752TS`. Reference prefix: `U`.
 * Footprint filters: TO?263*TabPin4*.
 * @see http://www.ti.com/lit/ds/symlink/lm4752.pdf
 * Keywords: audio amplifier 2ch.
 * Default footprint: Package_TO_SOT_SMD:TO-263-7_TabPin4.
 */
export class LM4752TS extends Component.withPins({
  "BIAS": "5",
  "+_6": "6",
  "P7": "7",
  "P1": "1",
  "+_2": "2",
  "V+": "3",
  "GND": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BIAS: "input", "+_6": "input", P7: "output", P1: "output", "+_2": "input", "V+": "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:LM4752TS";
  override referencePrefix = "U";
}

/**
 * Stereo 11W Audio Power Amplifier with Mute, TO-263-9
 *
 * KiCad symbol: `Amplifier_Audio:LM4755TS`. Reference prefix: `U`.
 * Footprint filters: TO?263*TabPin5*.
 * @see http://www.ti.com/lit/ds/symlink/lm4755.pdf
 * Keywords: audio amplifier 2ch.
 * Default footprint: Package_TO_SOT_SMD:TO-263-9_TabPin5.
 */
export class LM4755TS extends Component.withPins({
  "MUTE": "2",
  "BIAS": "6",
  "+_7": "7",
  "P8": "8",
  "NC": "9",
  "P1": "1",
  "+_3": "3",
  "V+": "4",
  "GND": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { MUTE: "input", BIAS: "input", "+_7": "input", P8: "output", NC: "no_connect", P1: "output", "+_3": "input", "V+": "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:LM4755TS";
  override referencePrefix = "U";
}

/**
 * Overture Audio Power Amplifier Series Dual 40W Audio Power Amplifier with Mute, TO-220-15
 *
 * KiCad symbol: `Amplifier_Audio:LM4766`. Reference prefix: `U`.
 * Footprint filters: TO?220*StaggerOdd*.
 * @see http://www.ti.com/lit/ds/symlink/lm4766.pdf
 * Keywords: audio amplifier 2ch.
 * Default footprint: Package_TO_SOT_THT:TO-220-15_P2.54x5.08mm_StaggerOdd_Lead4.58mm_Vertical.
 */
export class LM4766 extends Component.withPins({
  "V+_2": "2",
  "P3": "3",
  "V-": "4",
  "GND_5": "5",
  "MUTE_6": "6",
  "-_7": "7",
  "+_8": "8",
  "NC_9": "9",
  "P1": "1",
  "GND_10": "10",
  "MUTE_11": "11",
  "-_12": "12",
  "+_13": "13",
  "NC_14": "14",
  "V+_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V+_2": "power_in", P3: "output", "V-": "power_in", GND_5: "power_in", MUTE_6: "input", "-_7": "input", "+_8": "input", NC_9: "no_connect", P1: "output", GND_10: "power_in", MUTE_11: "input", "-_12": "input", "+_13": "input", NC_14: "no_connect", "V+_15": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:LM4766";
  override referencePrefix = "U";
}

/**
 * Boomer Dual 105mW Headphone Amplifier with Active-High Shutdown Mode, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Audio:LM4810`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm4810.pdf
 * Keywords: audio amplifier headphone.
 * Default footprint: Package_SO:TSSOP-8_3x3mm_P0.65mm.
 */
export class LM4810 extends Component.withPins({
  "VOUT1": "1",
  "VIN1": "2",
  "BYPASS": "3",
  "GND": "4",
  "SHDN": "5",
  "VIN2": "6",
  "VOUT2": "7",
  "VDD": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT1: "output", VIN1: "input", BYPASS: "passive", GND: "power_in", SHDN: "input", VIN2: "input", VOUT2: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:LM4810";
  override referencePrefix = "U";
}

/**
 * Boomer Dual 105mW Headphone Amplifier with Digital Volume Control and Shutdown Mode, VSSOP-10
 *
 * KiCad symbol: `Amplifier_Audio:LM4811`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm4811.pdf
 * Keywords: audio amplifier headphone 2ch.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 */
export class LM4811 extends Component.withPins({
  "VOUT1": "1",
  "VIN1": "2",
  "BYPASS": "3",
  "CLOCK": "4",
  "GND": "5",
  "UP/DN": "6",
  "SHDN": "7",
  "VIN2": "8",
  "VOUT2": "9",
  "VDD": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VOUT1: "output", VIN1: "input", BYPASS: "passive", CLOCK: "input", GND: "power_in", "UP/DN": "input", SHDN: "input", VIN2: "input", VOUT2: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:LM4811";
  override referencePrefix = "U";
}

/**
 * Boomer Audio Power Amplifier Series 7.5W Mono-BTL or 3.1W Stereo Audio Power Amplifier, TO-263-9
 *
 * KiCad symbol: `Amplifier_Audio:LM4950TS`. Reference prefix: `U`.
 * Footprint filters: TO?263*TabPin5*.
 * @see http://www.ti.com/lit/ds/symlink/lm4950.pdf
 * Keywords: Texas-Instruments.
 * Default footprint: Package_TO_SOT_SMD:TO-263-9_TabPin5.
 */
export class LM4950TS extends Component.withPins({
  "VINA": "1",
  "~{SHDN}": "2",
  "P3": "3",
  "BYP": "8",
  "P7": "7",
  "VINB": "9",
  "GND_4": "4",
  "GND_5": "5",
  "VDD": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VINA: "input", "~{SHDN}": "input", P3: "output", BYP: "passive", P7: "output", VINB: "input", GND_4: "power_in", GND_5: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:LM4950TS";
  override referencePrefix = "U";
}

/**
 * Boomer Audio Power Amplifier Series 7.5W Mono-BTL or 3.1W Stereo Audio Power Amplifier, TO-220-9 (Texas NEC0009A)
 *
 * KiCad symbol: `Amplifier_Audio:LM4950TA`. Reference prefix: `U`.
 * Footprint filters: *TO?220*P1.93x5.08mm?StaggerOdd*Vertical*.
 * @see http://www.ti.com/lit/ds/symlink/lm4950.pdf
 * Keywords: Obsolete Texas-Instruments.
 * Default footprint: Package_TO_SOT_THT:TO-220-9_P1.93x5.08mm_StaggerOdd_Lead3.378mm_Vertical.
 */
export class LM4950TA extends Component.withPins({
  "VINA": "1",
  "~{SHDN}": "2",
  "P3": "3",
  "BYP": "8",
  "P7": "7",
  "VINB": "9",
  "GND_4": "4",
  "GND_5": "5",
  "VDD": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VINA: "input", "~{SHDN}": "input", P3: "output", BYP: "passive", P7: "output", VINB: "input", GND_4: "power_in", GND_5: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:LM4950TA";
  override referencePrefix = "U";
}

/**
 * Boomer 2 Watt Audio Power Amplifier with Selectable Shutdown Logic Level, DSBGA-9
 *
 * KiCad symbol: `Amplifier_Audio:LM4990ITL`. Reference prefix: `U`.
 * Footprint filters: *DSBGA*1.4715x1.4715mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm4990.pdf
 * Keywords: audio amplifier class d.
 * Default footprint: Package_BGA:Texas_DSBGA-9_1.4715x1.4715mm_Layout3x3_P0.5mm.
 */
export class LM4990ITL extends Component.withPins({
  "-": "A1",
  "PA2": "A2",
  "+": "A3",
  "GND_B1": "B1",
  "GND_B2": "B2",
  "V+": "B3",
  "BYP": "C1",
  "PC2": "C2",
  "~{SHDN}": "C3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "-": "input", PA2: "output", "+": "input", GND_B1: "power_in", GND_B2: "passive", "V+": "power_in", BYP: "input", PC2: "output", "~{SHDN}": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:LM4990ITL";
  override referencePrefix = "U";
}

/**
 * Boomer 2 Watt Audio Power Amplifier with Selectable Shutdown Logic Level, WSON-10
 *
 * KiCad symbol: `Amplifier_Audio:LM4990LD`. Reference prefix: `U`.
 * Footprint filters: WSON*EP*4x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm4990.pdf
 * Keywords: audio amplifier class d.
 * Default footprint: Package_SON:WSON-10-1EP_4x3mm_P0.5mm_EP2.2x2mm.
 */
export class LM4990LD extends Component.withPins({
  "SHDN": "1",
  "BYP": "2",
  "SD": "3",
  "+": "4",
  "-": "5",
  "P6": "6",
  "NC": "7",
  "V+": "8",
  "GND": "9",
  "P10": "10",
  "P11": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SHDN: "input", BYP: "input", SD: "input", "+": "input", "-": "input", P6: "output", NC: "no_connect", "V+": "power_in", GND: "power_in", P10: "output", P11: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:LM4990LD";
  override referencePrefix = "U";
}

/**
 * Boomer 2 Watt Audio Power Amplifier with Selectable Shutdown Logic Level, MSOP-10
 *
 * KiCad symbol: `Amplifier_Audio:LM4990MH`. Reference prefix: `U`.
 * Footprint filters: MSOP*EP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm4990.pdf
 * Keywords: audio amplifier class d.
 * Default footprint: Package_SO:MSOP-10-1EP_3x3mm_P0.5mm_EP1.68x1.88mm.
 */
export class LM4990MH extends Component.withPins({
  "~{SHDN}": "1",
  "BYP": "2",
  "SD": "3",
  "+": "4",
  "-": "5",
  "P6": "6",
  "NC": "7",
  "V+": "8",
  "GND": "9",
  "P10": "10",
  "P11": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{SHDN}": "input", BYP: "input", SD: "input", "+": "input", "-": "input", P6: "output", NC: "no_connect", "V+": "power_in", GND: "power_in", P10: "output", P11: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:LM4990MH";
  override referencePrefix = "U";
}

/**
 * Boomer 2 Watt Audio Power Amplifier with Selectable Shutdown Logic Level, VSSOP-8
 *
 * KiCad symbol: `Amplifier_Audio:LM4990MM`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/lm4990.pdf
 * Keywords: audio amplifier class d.
 * Default footprint: Package_SO:TSSOP-8_3x3mm_P0.65mm.
 */
export class LM4990MM extends Component.withPins({
  "~{SHDN}": "1",
  "BYP": "2",
  "+": "3",
  "-": "4",
  "P5": "5",
  "V+": "6",
  "GND": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{SHDN}": "input", BYP: "input", "+": "input", "-": "input", P5: "output", "V+": "power_in", GND: "power_in", P8: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:LM4990MM";
  override referencePrefix = "U";
}

/**
 * High-Performance, High-Fidelity, High-Current Headphone Buffer, 250mA, TO-263
 *
 * KiCad symbol: `Amplifier_Audio:LME49600`. Reference prefix: `U`.
 * Footprint filters: TO?263*.
 * @see http://www.ti.com/lit/ds/symlink/lme49600.pdf
 * Keywords: audio buffer amplifier.
 * Default footprint: Package_TO_SOT_SMD:TO-263-5_TabPin3.
 */
export class LME49600 extends Component.withPins({
  "BW": "1",
  "IN": "2",
  "V-": "3",
  "P4": "4",
  "V+": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BW: "passive", IN: "input", "V-": "power_in", P4: "output", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:LME49600";
  override referencePrefix = "U";
}

/**
 * Filterless and High-Efficiency +4V to +18V Audio Amplifier with Analog Input, QFN-64
 *
 * KiCad symbol: `Amplifier_Audio:MA12040`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see https://www.infineon.com/dgdl/Infineon-MA12040-DS-v01_00-EN.pdf?fileId=5546d46264a8de7e0164b7467a3d617c
 * Keywords: integrated class d amplifier.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP5.45x5.45mm.
 */
export class MA12040 extends Component.withPins({
  "PVSS_1": "1",
  "PVSS_2": "2",
  "CF0AN": "3",
  "OUT0A_4": "4",
  "OUT0A_5": "5",
  "CF0AP": "6",
  "PVDD_7": "7",
  "PVDD_8": "8",
  "CF0BP": "9",
  "OUT0B_10": "10",
  "OUT0B_11": "11",
  "CF0BN": "12",
  "PVSS_13": "13",
  "PVSS_14": "14",
  "~{CLIP}": "15",
  "~{ERROR}": "16",
  "AVDD": "17",
  "CMSE": "18",
  "AVSS_19": "19",
  "CREF": "20",
  "IN0A": "21",
  "IN0B": "22",
  "IN1A": "23",
  "IN1B": "24",
  "AVSS_25": "25",
  "DVSS_26": "26",
  "SCL": "27",
  "AD0": "28",
  "AD1": "29",
  "SDA": "30",
  "CLKM/S": "31",
  "CLKIO": "32",
  "~{ENABLE}": "33",
  "~{MUTE}": "34",
  "PVSS_35": "35",
  "PVSS_36": "36",
  "CF1BN": "37",
  "OUT1B_38": "38",
  "OUT1B_39": "39",
  "CF1BP": "40",
  "PVDD_41": "41",
  "PVDD_42": "42",
  "CF1AP": "43",
  "OUT1A_44": "44",
  "OUT1A_45": "45",
  "CF1AN": "46",
  "PVSS_47": "47",
  "PVSS_48": "48",
  "NC_49": "49",
  "MSEL1": "50",
  "MSEL0": "51",
  "CGD1N": "52",
  "CGD1P": "53",
  "VGDC": "54",
  "DVDD": "55",
  "CDC": "56",
  "CFDCP": "57",
  "CFDCN": "58",
  "DVSS_59": "59",
  "CGD0P": "60",
  "CGD0N": "61",
  "CFGDP": "62",
  "CFGDN": "63",
  "NC_64": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PVSS_1: "power_in", PVSS_2: "passive", CF0AN: "passive", OUT0A_4: "output", OUT0A_5: "passive", CF0AP: "passive", PVDD_7: "power_in", PVDD_8: "passive", CF0BP: "passive", OUT0B_10: "output", OUT0B_11: "passive", CF0BN: "passive", PVSS_13: "passive", PVSS_14: "passive", "~{CLIP}": "output", "~{ERROR}": "output", AVDD: "power_in", CMSE: "passive", AVSS_19: "power_in", CREF: "passive", IN0A: "input", IN0B: "input", IN1A: "input", IN1B: "input", AVSS_25: "passive", DVSS_26: "power_in", SCL: "input", AD0: "input", AD1: "input", SDA: "bidirectional", "CLKM/S": "input", CLKIO: "bidirectional", "~{ENABLE}": "input", "~{MUTE}": "input", PVSS_35: "passive", PVSS_36: "passive", CF1BN: "passive", OUT1B_38: "output", OUT1B_39: "passive", CF1BP: "passive", PVDD_41: "power_in", PVDD_42: "passive", CF1AP: "passive", OUT1A_44: "output", OUT1A_45: "passive", CF1AN: "passive", PVSS_47: "passive", PVSS_48: "passive", NC_49: "passive", MSEL1: "input", MSEL0: "input", CGD1N: "passive", CGD1P: "passive", VGDC: "passive", DVDD: "power_in", CDC: "passive", CFDCP: "passive", CFDCN: "passive", DVSS_59: "passive", CGD0P: "passive", CGD0N: "passive", CFGDP: "passive", CFGDN: "passive", NC_64: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:MA12040";
  override referencePrefix = "U";
}

/**
 * Filterless and High-Efficiency +4V to +18V Audio Amplifier with I2S Digital Input, QFN-64
 *
 * KiCad symbol: `Amplifier_Audio:MA12040P`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see https://www.infineon.com/dgdl/Infineon-MA12040P-DS-v01_00-EN.pdf?fileId=5546d46264a8de7e0164b74ff0e561a2
 * Keywords: integrated class d amplifier.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP5.45x5.45mm.
 */
export class MA12040P extends Component.withPins({
  "PVSS_1": "1",
  "PVSS_2": "2",
  "CF0AN": "3",
  "OUT0A_4": "4",
  "OUT0A_5": "5",
  "CF0AP": "6",
  "PVDD_7": "7",
  "PVDD_8": "8",
  "CF0BP": "9",
  "OUT0B_10": "10",
  "OUT0B_11": "11",
  "CF0BN": "12",
  "PVSS_13": "13",
  "PVSS_14": "14",
  "~{CLIP}": "15",
  "~{ERROR}": "16",
  "AVDD": "17",
  "CMSE": "18",
  "AVSS_19": "19",
  "CREF": "20",
  "SCLK": "21",
  "WS": "22",
  "SD0": "23",
  "SD1": "24",
  "AVSS_25": "25",
  "DVSS_26": "26",
  "SCL": "27",
  "AD0": "28",
  "AD1": "29",
  "SDA": "30",
  "CLKM/S": "31",
  "CLK": "32",
  "~{ENABLE}": "33",
  "~{MUTE}": "34",
  "PVSS_35": "35",
  "PVSS_36": "36",
  "CF1BN": "37",
  "OUT1B_38": "38",
  "OUT1B_39": "39",
  "CF1BP": "40",
  "PVDD_41": "41",
  "PVDD_42": "42",
  "CF1AP": "43",
  "OUT1A_44": "44",
  "OUT1A_45": "45",
  "CF1AN": "46",
  "PVSS_47": "47",
  "PVSS_48": "48",
  "NC_49": "49",
  "MSEL1": "50",
  "MSEL0": "51",
  "CGD1N": "52",
  "CGD1P": "53",
  "VGDC": "54",
  "DVDD": "55",
  "CDC": "56",
  "CFDCP": "57",
  "CFDCN": "58",
  "DVSS_59": "59",
  "CGD0P": "60",
  "CGD0N": "61",
  "CFGDP": "62",
  "CFGDN": "63",
  "NC_64": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PVSS_1: "power_in", PVSS_2: "passive", CF0AN: "passive", OUT0A_4: "output", OUT0A_5: "passive", CF0AP: "passive", PVDD_7: "power_in", PVDD_8: "passive", CF0BP: "passive", OUT0B_10: "output", OUT0B_11: "passive", CF0BN: "passive", PVSS_13: "passive", PVSS_14: "passive", "~{CLIP}": "output", "~{ERROR}": "output", AVDD: "power_in", CMSE: "passive", AVSS_19: "power_in", CREF: "passive", SCLK: "input", WS: "input", SD0: "input", SD1: "input", AVSS_25: "passive", DVSS_26: "power_in", SCL: "input", AD0: "input", AD1: "input", SDA: "bidirectional", "CLKM/S": "input", CLK: "input", "~{ENABLE}": "input", "~{MUTE}": "input", PVSS_35: "passive", PVSS_36: "passive", CF1BN: "passive", OUT1B_38: "output", OUT1B_39: "passive", CF1BP: "passive", PVDD_41: "power_in", PVDD_42: "passive", CF1AP: "passive", OUT1A_44: "output", OUT1A_45: "passive", CF1AN: "passive", PVSS_47: "passive", PVSS_48: "passive", NC_49: "passive", MSEL1: "input", MSEL0: "input", CGD1N: "passive", CGD1P: "passive", VGDC: "passive", DVDD: "power_in", CDC: "passive", CFDCP: "passive", CFDCN: "passive", DVSS_59: "passive", CGD0P: "passive", CGD0N: "passive", CFGDP: "passive", CFGDN: "passive", NC_64: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:MA12040P";
  override referencePrefix = "U";
}

/**
 * Filterless and High-Efficiency +4V to +26V Audio Amplifier with Analog Input, QFN-64
 *
 * KiCad symbol: `Amplifier_Audio:MA12070`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see https://www.infineon.com/dgdl/Infineon-MA12070-DS-v01_00-EN.pdf?fileId=5546d46264a8de7e0164b750002861a5
 * Keywords: integrated class d amplifier.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP5.45x5.45mm.
 */
export class MA12070 extends Component.withPins({
  "PVSS_1": "1",
  "PVSS_2": "2",
  "CF0AN": "3",
  "OUT0A_4": "4",
  "OUT0A_5": "5",
  "CF0AP": "6",
  "PVDD_7": "7",
  "PVDD_8": "8",
  "CF0BP": "9",
  "OUT0B_10": "10",
  "OUT0B_11": "11",
  "CF0BN": "12",
  "PVSS_13": "13",
  "PVSS_14": "14",
  "~{CLIP}": "15",
  "~{ERROR}": "16",
  "AVDD": "17",
  "CMSE": "18",
  "AVSS_19": "19",
  "CREF": "20",
  "IN0A": "21",
  "IN0B": "22",
  "IN1A": "23",
  "IN1B": "24",
  "AVSS_25": "25",
  "DVSS_26": "26",
  "SCL": "27",
  "AD0": "28",
  "AD1": "29",
  "SDA": "30",
  "CLKM/S": "31",
  "CLKIO": "32",
  "~{ENABLE}": "33",
  "~{MUTE}": "34",
  "PVSS_35": "35",
  "PVSS_36": "36",
  "CF1BN": "37",
  "OUT1B_38": "38",
  "OUT1B_39": "39",
  "CF1BP": "40",
  "PVDD_41": "41",
  "PVDD_42": "42",
  "CF1AP": "43",
  "OUT1A_44": "44",
  "OUT1A_45": "45",
  "CF1AN": "46",
  "PVSS_47": "47",
  "PVSS_48": "48",
  "NC_49": "49",
  "MSEL1": "50",
  "MSEL0": "51",
  "CGD1N": "52",
  "CGD1P": "53",
  "VGDC": "54",
  "DVDD": "55",
  "CDC": "56",
  "CFDCP": "57",
  "CFDCN": "58",
  "DVSS_59": "59",
  "CGD0P": "60",
  "CGD0N": "61",
  "CFGDP": "62",
  "CFGDN": "63",
  "NC_64": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PVSS_1: "power_in", PVSS_2: "passive", CF0AN: "passive", OUT0A_4: "output", OUT0A_5: "passive", CF0AP: "passive", PVDD_7: "power_in", PVDD_8: "passive", CF0BP: "passive", OUT0B_10: "output", OUT0B_11: "passive", CF0BN: "passive", PVSS_13: "passive", PVSS_14: "passive", "~{CLIP}": "output", "~{ERROR}": "output", AVDD: "power_in", CMSE: "passive", AVSS_19: "power_in", CREF: "passive", IN0A: "input", IN0B: "input", IN1A: "input", IN1B: "input", AVSS_25: "passive", DVSS_26: "power_in", SCL: "input", AD0: "input", AD1: "input", SDA: "bidirectional", "CLKM/S": "input", CLKIO: "bidirectional", "~{ENABLE}": "input", "~{MUTE}": "input", PVSS_35: "passive", PVSS_36: "passive", CF1BN: "passive", OUT1B_38: "output", OUT1B_39: "passive", CF1BP: "passive", PVDD_41: "power_in", PVDD_42: "passive", CF1AP: "passive", OUT1A_44: "output", OUT1A_45: "passive", CF1AN: "passive", PVSS_47: "passive", PVSS_48: "passive", NC_49: "passive", MSEL1: "input", MSEL0: "input", CGD1N: "passive", CGD1P: "passive", VGDC: "passive", DVDD: "power_in", CDC: "passive", CFDCP: "passive", CFDCN: "passive", DVSS_59: "passive", CGD0P: "passive", CGD0N: "passive", CFGDP: "passive", CFGDN: "passive", NC_64: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:MA12070";
  override referencePrefix = "U";
}

/**
 * Filterless and High-Efficiency +4V to +26V Audio Amplifier with I2S Digital Input, QFN-64
 *
 * KiCad symbol: `Amplifier_Audio:MA12070P`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see https://www.infineon.com/dgdl/Infineon-MA12070P-DS-v01_00-EN.pdf?fileId=5546d46264a8de7e0164b761f2f261e4
 * Keywords: integrated class d amplifier.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP5.45x5.45mm.
 */
export class MA12070P extends Component.withPins({
  "PVSS_1": "1",
  "PVSS_2": "2",
  "CF0AN": "3",
  "OUT0A_4": "4",
  "OUT0A_5": "5",
  "CF0AP": "6",
  "PVDD_7": "7",
  "PVDD_8": "8",
  "CF0BP": "9",
  "OUT0B_10": "10",
  "OUT0B_11": "11",
  "CF0BN": "12",
  "PVSS_13": "13",
  "PVSS_14": "14",
  "~{CLIP}": "15",
  "~{ERROR}": "16",
  "AVDD": "17",
  "CMSE": "18",
  "AVSS_19": "19",
  "CREF": "20",
  "SCLK": "21",
  "WS": "22",
  "SD0": "23",
  "SD1": "24",
  "AVSS_25": "25",
  "DVSS_26": "26",
  "SCL": "27",
  "AD0": "28",
  "AD1": "29",
  "SDA": "30",
  "CLKM/S": "31",
  "CLK": "32",
  "~{ENABLE}": "33",
  "~{MUTE}": "34",
  "PVSS_35": "35",
  "PVSS_36": "36",
  "CF1BN": "37",
  "OUT1B_38": "38",
  "OUT1B_39": "39",
  "CF1BP": "40",
  "PVDD_41": "41",
  "PVDD_42": "42",
  "CF1AP": "43",
  "OUT1A_44": "44",
  "OUT1A_45": "45",
  "CF1AN": "46",
  "PVSS_47": "47",
  "PVSS_48": "48",
  "NC_49": "49",
  "MSEL1": "50",
  "MSEL0": "51",
  "CGD1N": "52",
  "CGD1P": "53",
  "VGDC": "54",
  "DVDD": "55",
  "CDC": "56",
  "CFDCP": "57",
  "CFDCN": "58",
  "DVSS_59": "59",
  "CGD0P": "60",
  "CGD0N": "61",
  "CFGDP": "62",
  "CFGDN": "63",
  "NC_64": "64",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PVSS_1: "power_in", PVSS_2: "passive", CF0AN: "passive", OUT0A_4: "output", OUT0A_5: "passive", CF0AP: "passive", PVDD_7: "power_in", PVDD_8: "passive", CF0BP: "passive", OUT0B_10: "output", OUT0B_11: "passive", CF0BN: "passive", PVSS_13: "passive", PVSS_14: "passive", "~{CLIP}": "output", "~{ERROR}": "output", AVDD: "power_in", CMSE: "passive", AVSS_19: "power_in", CREF: "passive", SCLK: "input", WS: "input", SD0: "input", SD1: "input", AVSS_25: "passive", DVSS_26: "power_in", SCL: "input", AD0: "input", AD1: "input", SDA: "bidirectional", "CLKM/S": "input", CLK: "input", "~{ENABLE}": "input", "~{MUTE}": "input", PVSS_35: "passive", PVSS_36: "passive", CF1BN: "passive", OUT1B_38: "output", OUT1B_39: "passive", CF1BP: "passive", PVDD_41: "power_in", PVDD_42: "passive", CF1AP: "passive", OUT1A_44: "output", OUT1A_45: "passive", CF1AN: "passive", PVSS_47: "passive", PVSS_48: "passive", NC_49: "passive", MSEL1: "input", MSEL0: "input", CGD1N: "passive", CGD1P: "passive", VGDC: "passive", DVDD: "power_in", CDC: "passive", CFDCP: "passive", CFDCN: "passive", DVSS_59: "passive", CGD0P: "passive", CGD0N: "passive", CFGDP: "passive", CFGDN: "passive", NC_64: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:MA12070P";
  override referencePrefix = "U";
}

/**
 * Stereo class D power amplifier, 1.3W, TQFN-24
 *
 * KiCad symbol: `Amplifier_Audio:MAX9701xTG`. Reference prefix: `U`.
 * Footprint filters: TQFN*1EP*4x4mm*P0.5mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX9701.pdf
 * Keywords: stereo power amplifier.
 * Default footprint: Package_DFN_QFN:TQFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm.
 */
export class MAX9701xTG extends Component.withPins({
  "~{SHDN}": "1",
  "SYNC": "2",
  "NC_3": "3",
  "OUTL+": "4",
  "PVDD_5": "5",
  "PGND_6": "6",
  "OUTL-": "7",
  "NC_8": "8",
  "GND_9": "9",
  "SYNC_OUT": "10",
  "NC_11": "11",
  "OUTR-": "12",
  "PGND_13": "13",
  "PVDD_14": "14",
  "OUTR+": "15",
  "NC_16": "16",
  "GAIN1": "17",
  "GAIN2": "18",
  "INR-": "19",
  "INR+": "20",
  "VDD": "21",
  "GND_22": "22",
  "INL+": "23",
  "INL-": "24",
  "GND_25": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{SHDN}": "input", SYNC: "input", NC_3: "no_connect", "OUTL+": "power_out", PVDD_5: "power_in", PGND_6: "power_in", "OUTL-": "power_out", NC_8: "no_connect", GND_9: "power_in", SYNC_OUT: "output", NC_11: "no_connect", "OUTR-": "power_out", PGND_13: "passive", PVDD_14: "power_in", "OUTR+": "power_out", NC_16: "no_connect", GAIN1: "input", GAIN2: "input", "INR-": "input", "INR+": "input", VDD: "power_in", GND_22: "passive", "INL+": "input", "INL-": "input", GND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:MAX9701xTG";
  override referencePrefix = "U";
}

/**
 * 2.8W, Low-EMI, Stereo, Filterless Class D Audio Amplifier, TQFN-16
 *
 * KiCad symbol: `Amplifier_Audio:MAX9715xTE+`. Reference prefix: `U`.
 * Footprint filters: TQFN*1EP*5x5mm*P0.8mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX9715.pdf
 * Keywords: Class-D Stereo.
 * Default footprint: Package_DFN_QFN:TQFN-16-1EP_5x5mm_P0.8mm_EP3.1x3.1mm.
 */
export class MAX9715xTE_ extends Component.withPins({
  "PGND_1": "1",
  "OUTL+": "2",
  "OUTL-": "3",
  "PVDD_4": "4",
  "NC": "5",
  "GAIN": "6",
  "GND": "7",
  "~{SHDN}": "8",
  "PVDD_9": "9",
  "OUTR-": "10",
  "OUTR+": "11",
  "PGND_12": "12",
  "BIAS": "13",
  "VDD": "14",
  "INR": "15",
  "INL": "16",
  "PAD": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PGND_1: "power_in", "OUTL+": "output", "OUTL-": "output", PVDD_4: "power_in", NC: "no_connect", GAIN: "input", GND: "power_in", "~{SHDN}": "input", PVDD_9: "passive", "OUTR-": "output", "OUTR+": "output", PGND_12: "passive", BIAS: "passive", VDD: "power_in", INR: "input", INL: "input", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:MAX9715xTE+";
  override referencePrefix = "U";
}

/**
 * Filterless Class-D / Class-AB Stereo Audio Amplifier with Volume Control, 20W, 4.5..14V input, -40..85°C, QFN-44
 *
 * KiCad symbol: `Amplifier_Audio:MAX9744`. Reference prefix: `U`.
 * Footprint filters: TQFN?44*1EP*7x7mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/MAX9744.pdf
 * Keywords: Maxim.
 * Default footprint: Package_DFN_QFN:TQFN-44-1EP_7x7mm_P0.5mm_EP4.7x4.7mm_ThermalVias.
 */
export class MAX9744 extends Component.withPins({
  "BOOTL+": "1",
  "OUTL+_2": "2",
  "OUTL+_3": "3",
  "PVDD_4": "4",
  "PVDD_5": "5",
  "VDD_6": "6",
  "GND_7": "7",
  "SDA/VOL": "8",
  "SCLK": "9",
  "VDD_10": "10",
  "GND_11": "11",
  "GND_12": "12",
  "ADDR1": "13",
  "ADDR2": "14",
  "GND_15": "15",
  "INL": "16",
  "FBL": "17",
  "FBR": "18",
  "INR": "19",
  "BIAS": "20",
  "VDD_21": "21",
  "~{SHND}": "22",
  "NC": "23",
  "MUTE": "24",
  "SYNC": "25",
  "SYNCOUT": "26",
  "GND_27": "27",
  "VDD_28": "28",
  "PVDD_29": "29",
  "PVDD_30": "30",
  "OUTR+_31": "31",
  "OUTR+_32": "32",
  "BOOTR+": "33",
  "PGND_34": "34",
  "PGND_35": "35",
  "OUTR-_36": "36",
  "OUTR-_37": "37",
  "BOOTR-": "38",
  "PGND_39": "39",
  "BOOTL-": "40",
  "OUTL-_41": "41",
  "OUTL-_42": "42",
  "PGND_43": "43",
  "PGND_44": "44",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "BOOTL+": "output", "OUTL+_2": "output", "OUTL+_3": "passive", PVDD_4: "power_in", PVDD_5: "passive", VDD_6: "power_in", GND_7: "power_in", "SDA/VOL": "input", SCLK: "input", VDD_10: "passive", GND_11: "passive", GND_12: "passive", ADDR1: "input", ADDR2: "input", GND_15: "passive", INL: "input", FBL: "input", FBR: "input", INR: "input", BIAS: "output", VDD_21: "passive", "~{SHND}": "input", NC: "no_connect", MUTE: "input", SYNC: "input", SYNCOUT: "output", GND_27: "passive", VDD_28: "passive", PVDD_29: "passive", PVDD_30: "passive", "OUTR+_31": "output", "OUTR+_32": "passive", "BOOTR+": "output", PGND_34: "power_in", PGND_35: "passive", "OUTR-_36": "output", "OUTR-_37": "output", "BOOTR-": "output", PGND_39: "passive", "BOOTL-": "output", "OUTL-_41": "output", "OUTL-_42": "passive", PGND_43: "passive", PGND_44: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:MAX9744";
  override referencePrefix = "U";
}

/**
 * Microphone Amplifier with AGC and Low-Noise Microphone Bias, TDFN-14
 *
 * KiCad symbol: `Amplifier_Audio:MAX9814`. Reference prefix: `U`.
 * Footprint filters: *DFN*EP*3x3mm*P0.4mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX9814.pdf
 * Keywords: audio microphone amplifier.
 * Default footprint: Package_DFN_QFN:DFN-14-1EP_3x3mm_P0.4mm_EP1.78x2.35mm.
 */
export class MAX9814 extends Component.withPins({
  "CT": "1",
  "~{SHDN}": "2",
  "CG": "3",
  "GND_4": "4",
  "VDD": "5",
  "MICOUT": "6",
  "GND_7": "7",
  "MICIN": "8",
  "A/R": "9",
  "GAIN": "10",
  "GND_11": "11",
  "BIAS": "12",
  "MICBIAS": "13",
  "TH": "14",
  "GND_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CT: "input", "~{SHDN}": "input", CG: "passive", GND_4: "passive", VDD: "power_in", MICOUT: "output", GND_7: "power_in", MICIN: "input", "A/R": "input", GAIN: "input", GND_11: "passive", BIAS: "passive", MICBIAS: "output", TH: "input", GND_15: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:MAX9814";
  override referencePrefix = "U";
}

/**
 * Stereo 3.7 W Class D Amplifier, TDFN-14
 *
 * KiCad symbol: `Amplifier_Audio:MAX98306xDT`. Reference prefix: `U`.
 * Footprint filters: TDFN*1EP*3x3mm*P0.4mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX98306.pdf
 * Keywords: Class-D stereo amplifier.
 * Default footprint: Package_DFN_QFN:TDFN-14-1EP_3x3mm_P0.4mm_EP1.78x2.35mm.
 */
export class MAX98306xDT extends Component.withPins({
  "PGND_1": "1",
  "~{SHDN}": "2",
  "INL+": "3",
  "INL-": "4",
  "GAIN": "5",
  "INR-": "6",
  "INR+": "7",
  "PGND_8": "8",
  "OUTR-": "9",
  "OUTR+": "10",
  "PVDD_11": "11",
  "PVDD_12": "12",
  "OUTL+": "13",
  "OUTL-": "14",
  "PGND_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PGND_1: "power_in", "~{SHDN}": "input", "INL+": "input", "INL-": "input", GAIN: "input", "INR-": "input", "INR+": "input", PGND_8: "passive", "OUTR-": "power_out", "OUTR+": "power_out", PVDD_11: "power_in", PVDD_12: "passive", "OUTL+": "power_out", "OUTL-": "power_out", PGND_15: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:MAX98306xDT";
  override referencePrefix = "U";
}

/**
 * 20V Digital Input Class-DG Amplifier with I/V Sense and Brownout Prevention, WLP-35
 *
 * KiCad symbol: `Amplifier_Audio:MAX98396EWB+`. Reference prefix: `U`.
 * Footprint filters: Maxim*WLCSP*2.998x2.168mm*Layout7x5*P0.4mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX98396.pdf
 * Keywords: digital audio amp i2s tdm class-dg.
 * Default footprint: Package_CSP:Maxim_WLCSP-35_2.998x2.168mm_Layout7x5_P0.4mm.
 */
export class MAX98396EWB_ extends Component.withPins({
  "PVDD_A1": "A1",
  "PVDD_A2": "A2",
  "~{RESET}": "A3",
  "AVDD": "A4",
  "IRQ": "A5",
  "I2C2": "A6",
  "ICC": "A7",
  "OUTN_B1": "B1",
  "OUTN_B2": "B2",
  "OUTNSNS": "B3",
  "DVDD": "B4",
  "DVDDIO": "B5",
  "ADDR": "B6",
  "I2C1": "B7",
  "PGND_C1": "C1",
  "PGND_C2": "C2",
  "PGND_C3": "C3",
  "AGND_C4": "C4",
  "DGND_C5": "C5",
  "DGND_C6": "C6",
  "DOUT": "C7",
  "OUTP_D1": "D1",
  "OUTP_D2": "D2",
  "OUTPSNS": "D3",
  "VBAT_D4": "D4",
  "AGND_D5": "D5",
  "LV_EN": "D6",
  "DIN": "D7",
  "PVDD_E1": "E1",
  "PVDD_E2": "E2",
  "VREFC": "E3",
  "VBAT_E4": "E4",
  "AGND_E5": "E5",
  "LRCLK": "E6",
  "BCLK": "E7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PVDD_A1: "power_in", PVDD_A2: "passive", "~{RESET}": "input", AVDD: "power_in", IRQ: "open_collector", I2C2: "bidirectional", ICC: "bidirectional", OUTN_B1: "output", OUTN_B2: "output", OUTNSNS: "output", DVDD: "power_in", DVDDIO: "power_in", ADDR: "input", I2C1: "bidirectional", PGND_C1: "power_in", PGND_C2: "passive", PGND_C3: "passive", AGND_C4: "power_in", DGND_C5: "power_in", DGND_C6: "passive", DOUT: "output", OUTP_D1: "output", OUTP_D2: "output", OUTPSNS: "output", VBAT_D4: "power_in", AGND_D5: "passive", LV_EN: "open_collector", DIN: "input", PVDD_E1: "passive", PVDD_E2: "passive", VREFC: "passive", VBAT_E4: "passive", AGND_E5: "passive", LRCLK: "input", BCLK: "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:MAX98396EWB+";
  override referencePrefix = "U";
}

/**
 * Stereo audio DAC with headphone amplifier, TQFN-28
 *
 * KiCad symbol: `Amplifier_Audio:MAX9850xTI`. Reference prefix: `U`.
 * Footprint filters: TQFN*1EP*5x5mm*P0.5mm*.
 * @see https://datasheets.maximintegrated.com/en/ds/MAX9850.pdf
 * Keywords: audio ampflifier stereo i2s.
 * Default footprint: Package_DFN_QFN:TQFN-28-1EP_5x5mm_P0.5mm_EP3.25x3.25mm_ThermalVias.
 */
export class MAX9850xTI extends Component.withPins({
  "LRCLK": "1",
  "BCLK": "2",
  "SDIN": "3",
  "DVDD": "4",
  "MCLK": "5",
  "DGND": "6",
  "ADD": "7",
  "GPIO": "8",
  "INR": "9",
  "INL": "10",
  "OUTR": "11",
  "OUTL": "12",
  "REF": "13",
  "AGND_14": "14",
  "NREG": "15",
  "PREG": "16",
  "AVDD": "17",
  "HPR": "18",
  "HPL": "19",
  "SVSS": "20",
  "HPS": "21",
  "PVSS": "22",
  "C1N": "23",
  "PGND": "24",
  "C1P": "25",
  "PVDD": "26",
  "SCL": "27",
  "SDA": "28",
  "AGND_29": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { LRCLK: "bidirectional", BCLK: "bidirectional", SDIN: "input", DVDD: "power_in", MCLK: "input", DGND: "power_in", ADD: "input", GPIO: "bidirectional", INR: "input", INL: "input", OUTR: "output", OUTL: "output", REF: "power_out", AGND_14: "power_in", NREG: "power_out", PREG: "power_out", AVDD: "power_in", HPR: "output", HPL: "output", SVSS: "power_in", HPS: "input", PVSS: "power_in", C1N: "passive", PGND: "power_in", C1P: "passive", PVDD: "power_in", SCL: "bidirectional", SDA: "bidirectional", AGND_29: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:MAX9850xTI";
  override referencePrefix = "U";
}

/**
 * High-Fidelity, Bipolar-Input, Audio Operational Amplifier, VSON-10
 *
 * KiCad symbol: `Amplifier_Audio:OPA1622`. Reference prefix: `U`.
 * Footprint filters: Texas*PVSON*.
 * @see http://www.ti.com/lit/ds/symlink/opa1622.pdf
 * Keywords: dual opamp audio.
 * Default footprint: Package_SON:Texas_S-PVSON-N10.
 */
export class OPA1622 extends Component.withPins({
  "+_1": "1",
  "EN": "8",
  "P9": "9",
  "-_10": "10",
  "+_5": "5",
  "-_6": "6",
  "P7": "7",
  "V+": "2",
  "GND": "3",
  "V-_4": "4",
  "V-_11": "11",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+_1": "input", EN: "input", P9: "output", "-_10": "input", "+_5": "input", "-_6": "input", P7: "output", "V+": "power_in", GND: "power_in", "V-_4": "power_in", "V-_11": "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:OPA1622";
  override referencePrefix = "U";
}

/**
 * Filterless Class-D Mono Audio Amplifier, 1.5W, TSOT-26
 *
 * KiCad symbol: `Amplifier_Audio:PAM8301`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/products_inactive_data/PAM8301.pdf
 * Keywords: audio amplifier class d.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class PAM8301 extends Component.withPins({
  "OUT-": "1",
  "GND": "2",
  "IN": "3",
  "~{SD}": "4",
  "VDD": "5",
  "OUT+": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "OUT-": "output", GND: "power_in", IN: "input", "~{SD}": "input", VDD: "power_in", "OUT+": "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:PAM8301";
  override referencePrefix = "U";
}

/**
 * 2.5W Filterless Class-D Mono Audio Amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Audio:PAM8302AAD`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.diodes.com/assets/Datasheets/PAM8302A.pdf
 * Keywords: audio amplifier class d.
 */
export class PAM8302AAD extends Component.withPins({
  "~{SD}": "1",
  "NC": "2",
  "IN+": "3",
  "IN-": "4",
  "OUT+": "5",
  "VDD": "6",
  "GND": "7",
  "OUT-": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{SD}": "input", NC: "no_connect", "IN+": "input", "IN-": "input", "OUT+": "output", VDD: "power_in", GND: "power_in", "OUT-": "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:PAM8302AAD";
  override referencePrefix = "U";
}

/**
 * 2.5W Filterless Class-D Mono Audio Amplifier, MSOP-8
 *
 * KiCad symbol: `Amplifier_Audio:PAM8302AAS`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.diodes.com/assets/Datasheets/PAM8302A.pdf
 * Keywords: audio amplifier class d.
 */
export class PAM8302AAS extends Component.withPins({
  "~{SD}": "1",
  "NC": "2",
  "IN+": "3",
  "IN-": "4",
  "OUT+": "5",
  "VDD": "6",
  "GND": "7",
  "OUT-": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{SD}": "input", NC: "no_connect", "IN+": "input", "IN-": "input", "OUT+": "output", VDD: "power_in", GND: "power_in", "OUT-": "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:PAM8302AAS";
  override referencePrefix = "U";
}

/**
 * 2.5W Filterless Class-D Mono Audio Amplifier, DFN-8
 *
 * KiCad symbol: `Amplifier_Audio:PAM8302AAY`. Reference prefix: `U`.
 * Footprint filters: DFN*EP*3x3mm*P0.65mm*.
 * @see https://www.diodes.com/assets/Datasheets/PAM8302A.pdf
 * Keywords: audio amplifier class d.
 * Default footprint: Package_DFN_QFN:DFN-8-1EP_3x3mm_P0.65mm_EP1.55x2.4mm.
 */
export class PAM8302AAY extends Component.withPins({
  "~{SD}": "1",
  "NC": "2",
  "IN+": "3",
  "IN-": "4",
  "OUT+": "5",
  "VDD": "6",
  "GND": "7",
  "OUT-": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{SD}": "input", NC: "no_connect", "IN+": "input", "IN-": "input", "OUT+": "output", VDD: "power_in", GND: "power_in", "OUT-": "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:PAM8302AAY";
  override referencePrefix = "U";
}

/**
 * 3W Filterless Class-D Stereo Audio Amplifier, SOIC-16
 *
 * KiCad symbol: `Amplifier_Audio:PAM8403D`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9x9.9mm*P1.27mm*.
 * @see https://www.diodes.com/assets/Datasheets/products_inactive_data/PAM8403.pdf
 * Keywords: class-D-amplifier switching-amplifier.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class PAM8403D extends Component.withPins({
  "LOUT+": "1",
  "PGND_2": "2",
  "LOUT-": "3",
  "PVDD_4": "4",
  "~{MUTE}": "5",
  "VDD": "6",
  "INL": "7",
  "VREF": "8",
  "NC": "9",
  "INR": "10",
  "GND": "11",
  "~{SHDN}": "12",
  "PVDD_13": "13",
  "ROUT-": "14",
  "PGND_15": "15",
  "ROUT+": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "LOUT+": "output", PGND_2: "power_in", "LOUT-": "output", PVDD_4: "power_in", "~{MUTE}": "input", VDD: "power_in", INL: "input", VREF: "input", NC: "no_connect", INR: "input", GND: "power_in", "~{SHDN}": "input", PVDD_13: "passive", "ROUT-": "output", PGND_15: "passive", "ROUT+": "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:PAM8403D";
  override referencePrefix = "U";
}

/**
 * 5W Filterless Class-D / Class-AB Stereo Audio Amplifier, SOIC-16
 *
 * KiCad symbol: `Amplifier_Audio:PAM8406D`. Reference prefix: `U`.
 * Footprint filters: *SO*3.9x9.9mm*P1.27mm*.
 * @see https://www.diodes.com/assets/Datasheets/PAM8406.pdf
 * Keywords: class-D-amplifier switching-amplifier class-AB-amplifier.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class PAM8406D extends Component.withPins({
  "+OUT_L": "1",
  "PGNDL": "2",
  "-OUT_L": "3",
  "PVDDL": "4",
  "~{MUTE}": "5",
  "VDD": "6",
  "INL": "7",
  "VREF": "8",
  "MODE": "9",
  "INR": "10",
  "GND": "11",
  "~{SHND}": "12",
  "PVDDR": "13",
  "-OUT_R": "14",
  "PGNDR": "15",
  "+OUT_R": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+OUT_L": "output", PGNDL: "power_in", "-OUT_L": "output", PVDDL: "power_in", "~{MUTE}": "input", VDD: "power_in", INL: "input", VREF: "passive", MODE: "input", INR: "input", GND: "power_in", "~{SHND}": "input", PVDDR: "power_in", "-OUT_R": "output", PGNDR: "power_in", "+OUT_R": "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:PAM8406D";
  override referencePrefix = "U";
}

/**
 * 60mW 2.5-5.5V differential stereo headphone amplifier with adjustable gain, QFN-16
 *
 * KiCad symbol: `Amplifier_Audio:PAM8908`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*3x3mm*P0.5mm*EP1.7x1.7mm*.
 * @see https://www.diodes.com/datasheet/download/PAM8908.pdf
 * Keywords: audio.
 * Default footprint: Package_DFN_QFN:QFN-16-1EP_3x3mm_P0.5mm_EP1.7x1.7mm.
 */
export class PAM8908 extends Component.withPins({
  "CAP-": "9",
  "INL-": "1",
  "INL+": "2",
  "INR+": "3",
  "INR-": "4",
  "OUTR": "5",
  "G0": "6",
  "G1": "7",
  "HPVSS": "8",
  "PGND": "10",
  "CAP+": "11",
  "HPVDD": "12",
  "EN": "13",
  "PVDD": "14",
  "SGND": "15",
  "OUTL": "16",
  "EPAD": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "CAP-": "passive", "INL-": "input", "INL+": "input", "INR+": "input", "INR-": "input", OUTR: "output", G0: "input", G1: "input", HPVSS: "power_out", PGND: "power_in", "CAP+": "passive", HPVDD: "power_out", EN: "input", PVDD: "power_in", SGND: "power_in", OUTL: "output", EPAD: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:PAM8908";
  override referencePrefix = "U";
}

/**
 * Self-Contained Audio Preamplifier, DIP-8
 *
 * KiCad symbol: `Amplifier_Audio:SSM2017P`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/obsolete-data-sheets/139484016SSM2017.pdf
 * Keywords: audio preamplifier.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 */
export class SSM2017P extends Component.withPins({
  "RG1": "1",
  "-": "2",
  "+": "3",
  "V-": "4",
  "REF": "5",
  "P6": "6",
  "V+": "7",
  "RG2": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { RG1: "input", "-": "input", "+": "input", "V-": "power_in", REF: "input", P6: "output", "V+": "power_in", RG2: "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:SSM2017P";
  override referencePrefix = "U";
}

/**
 * Trimless Voltage Controlled Amplifier, DIP-16
 *
 * KiCad symbol: `Amplifier_Audio:SSM2018`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/SSM2018.pdf
 * Keywords: audio VCA.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class SSM2018 extends Component.withPins({
  "COMP3": "9",
  "+I1-G": "1",
  "V+": "2",
  "-IG": "3",
  "-I1-G": "4",
  "COMP1": "5",
  "+IN": "6",
  "-IN": "7",
  "COMP2": "8",
  "V-": "10",
  "VC": "11",
  "MODE": "12",
  "GND": "13",
  "VG": "14",
  "BAL": "15",
  "V1-G": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { COMP3: "passive", "+I1-G": "output", "V+": "power_in", "-IG": "output", "-I1-G": "output", COMP1: "passive", "+IN": "input", "-IN": "input", COMP2: "passive", "V-": "power_in", VC: "input", MODE: "input", GND: "power_in", VG: "output", BAL: "input", "V1-G": "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:SSM2018";
  override referencePrefix = "U";
}

/**
 * Dynamic Range Pprocessor/Dual VCA, DIP-22
 *
 * KiCad symbol: `Amplifier_Audio:SSM2120`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/obsolete-data-sheets/105738070SSM2120.pdf
 * Keywords: audio VCA.
 * Default footprint: Package_DIP:DIP-22_W7.62mm.
 */
export class SSM2120 extends Component.withPins({
  "P4": "4",
  "+_5": "5",
  "CFT_6": "6",
  "-_7": "7",
  "IN_8": "8",
  "THRESH_1": "1",
  "LOGAV_2": "2",
  "CONOUT_3": "3",
  "RECIN_9": "9",
  "IN_16": "16",
  "-_17": "17",
  "CFT_18": "18",
  "+_19": "19",
  "P20": "20",
  "THRESH_12": "12",
  "LOGAV_13": "13",
  "CONOUT_14": "14",
  "RECIN_15": "15",
  "IREF": "10",
  "V-": "11",
  "V+": "21",
  "GND": "22",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P4: "output", "+_5": "input", CFT_6: "input", "-_7": "input", IN_8: "input", THRESH_1: "input", LOGAV_2: "input", CONOUT_3: "input", RECIN_9: "input", IN_16: "input", "-_17": "input", CFT_18: "input", "+_19": "input", P20: "output", THRESH_12: "input", LOGAV_13: "input", CONOUT_14: "input", RECIN_15: "input", IREF: "input", "V-": "power_in", "V+": "power_in", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:SSM2120";
  override referencePrefix = "U";
}

/**
 * Dynamic Range Pprocessor/Dual VCA, DIP-16
 *
 * KiCad symbol: `Amplifier_Audio:SSM2122`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/obsolete-data-sheets/105738070SSM2120.pdf
 * Keywords: audio VCA.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class SSM2122 extends Component.withPins({
  "P2": "2",
  "+_3": "3",
  "CFT_4": "4",
  "-_5": "5",
  "IN_6": "6",
  "IN_10": "10",
  "-_11": "11",
  "CFT_12": "12",
  "+_13": "13",
  "P14": "14",
  "GND_1": "1",
  "IREF": "7",
  "V-": "8",
  "GND_9": "9",
  "V+": "15",
  "GND_16": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P2: "output", "+_3": "input", CFT_4: "input", "-_5": "input", IN_6: "input", IN_10: "input", "-_11": "input", CFT_12: "input", "+_13": "input", P14: "output", GND_1: "power_in", IREF: "input", "V-": "power_in", GND_9: "passive", "V+": "power_in", GND_16: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:SSM2122";
  override referencePrefix = "U";
}

/**
 * Microphone Preamplifier with Variable Compression and Noise Gating, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Audio:SSM2165`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/obsolete-data-sheets/SSM2165.PDF
 * Keywords: audio microphone preamplifier.
 */
export class SSM2165 extends Component.withPins({
  "GND": "1",
  "VCAIN": "2",
  "BUFOUT": "3",
  "IN+": "4",
  "AVG": "5",
  "COMP": "6",
  "VOUT": "7",
  "V+": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VCAIN: "input", BUFOUT: "output", "IN+": "input", AVG: "passive", COMP: "passive", VOUT: "output", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:SSM2165";
  override referencePrefix = "U";
}

/**
 * Low Voltage Microphone Preamplifier with Variable Compression and Noise Gating, MSOP-10
 *
 * KiCad symbol: `Amplifier_Audio:SSM2167`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/SSM2167.pdf
 * Keywords: audio microphone amplifier.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class SSM2167 extends Component.withPins({
  "GND": "1",
  "VCAIN": "2",
  "~{SD}": "3",
  "BUFOUT": "4",
  "IN+": "5",
  "AVG": "6",
  "GATE": "7",
  "COMP": "8",
  "VOUT": "9",
  "V+": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", VCAIN: "input", "~{SD}": "input", BUFOUT: "output", "IN+": "input", AVG: "passive", GATE: "passive", COMP: "passive", VOUT: "output", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:SSM2167";
  override referencePrefix = "U";
}

/**
 * 1.5W BTL or 250mW SE 4MHz-bandwidth high performance amplifier, LFCSP-8
 *
 * KiCad symbol: `Amplifier_Audio:SSM2211CP`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*3x3mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/SSM2211.pdf
 * Keywords: audio amplifier.
 * Default footprint: Package_CSP:LFCSP-8-1EP_3x3mm_P0.5mm_EP1.45x1.74mm.
 */
export class SSM2211CP extends Component.withPins({
  "SHUTDOWN": "1",
  "BYPASS": "2",
  "IN+": "3",
  "IN-": "4",
  "VoutA": "5",
  "V+": "6",
  "V-_7": "7",
  "VoutB": "8",
  "V-_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SHUTDOWN: "input", BYPASS: "passive", "IN+": "input", "IN-": "input", VoutA: "output", "V+": "power_in", "V-_7": "power_in", VoutB: "output", "V-_9": "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:SSM2211CP";
  override referencePrefix = "U";
}

/**
 * 1.5W BTL or 250mW SE 4MHz-bandwidth high performance amplifier, SOIC-8
 *
 * KiCad symbol: `Amplifier_Audio:SSM2211S`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/SSM2211.pdf
 * Keywords: audio amplifier.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class SSM2211S extends Component.withPins({
  "SHUTDOWN": "1",
  "BYPASS": "2",
  "IN+": "3",
  "IN-": "4",
  "VoutA": "5",
  "V+": "6",
  "V-": "7",
  "VoutB": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SHUTDOWN: "input", BYPASS: "passive", "IN+": "input", "IN-": "input", VoutA: "output", "V+": "power_in", "V-": "power_in", VoutB: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:SSM2211S";
  override referencePrefix = "U";
}

/**
 * 2-Channel 5 Wmin Audio Frequency Power Amplifier, 4010, SIP-15
 *
 * KiCad symbol: `Amplifier_Audio:STK433_Sanyo`. Reference prefix: `U`.
 * Footprint filters: Sanyo*59.2x8.0mm*P2.54mm*.
 * @see http://datasheet.octopart.com/STK430-Sanyo-datasheet-107060.pdf
 * Keywords: audio amplifier 2ch.
 * Default footprint: Package_SIP:Sanyo_STK4xx-15_59.2x8.0mm_P2.54mm.
 */
export class STK433_Sanyo extends Component.withPins({
  "+_1": "1",
  "-_2": "2",
  "V-_3": "3",
  "V-_4": "4",
  "P5": "5",
  "P6": "6",
  "V+_7": "7",
  "P8": "8",
  "V+_9": "9",
  "P10": "10",
  "P11": "11",
  "V-_12": "12",
  "V-_13": "13",
  "-_14": "14",
  "+_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+_1": "input", "-_2": "input", "V-_3": "power_in", "V-_4": "power_in", P5: "output", P6: "passive", "V+_7": "power_in", P8: "power_in", "V+_9": "power_in", P10: "passive", P11: "output", "V-_12": "power_in", "V-_13": "power_in", "-_14": "input", "+_15": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:STK433_Sanyo";
  override referencePrefix = "U";
}

/**
 * 2-Channel 7 Wmin Audio Frequency Power Amplifier, 4010, SIP-15
 *
 * KiCad symbol: `Amplifier_Audio:STK435_Sanyo`. Reference prefix: `U`.
 * Footprint filters: Sanyo*59.2x8.0mm*P2.54mm*.
 * @see http://datasheet.octopart.com/STK430-Sanyo-datasheet-107060.pdf
 * Keywords: audio amplifier 2ch.
 * Default footprint: Package_SIP:Sanyo_STK4xx-15_59.2x8.0mm_P2.54mm.
 */
export class STK435_Sanyo extends Component.withPins({
  "+_1": "1",
  "-_2": "2",
  "V-_3": "3",
  "V-_4": "4",
  "P5": "5",
  "P6": "6",
  "V+_7": "7",
  "P8": "8",
  "V+_9": "9",
  "P10": "10",
  "P11": "11",
  "V-_12": "12",
  "V-_13": "13",
  "-_14": "14",
  "+_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+_1": "input", "-_2": "input", "V-_3": "power_in", "V-_4": "power_in", P5: "output", P6: "passive", "V+_7": "power_in", P8: "power_in", "V+_9": "power_in", P10: "passive", P11: "output", "V-_12": "power_in", "V-_13": "power_in", "-_14": "input", "+_15": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:STK435_Sanyo";
  override referencePrefix = "U";
}

/**
 * 2-Channel 10 Wmin Audio Frequency Power Amplifier, 4010, SIP-15
 *
 * KiCad symbol: `Amplifier_Audio:STK436_Sanyo`. Reference prefix: `U`.
 * Footprint filters: Sanyo*59.2x8.0mm*P2.54mm*.
 * @see http://datasheet.octopart.com/STK430-Sanyo-datasheet-107060.pdf
 * Keywords: audio amplifier 2ch.
 * Default footprint: Package_SIP:Sanyo_STK4xx-15_59.2x8.0mm_P2.54mm.
 */
export class STK436_Sanyo extends Component.withPins({
  "+_1": "1",
  "-_2": "2",
  "V-_3": "3",
  "V-_4": "4",
  "P5": "5",
  "P6": "6",
  "V+_7": "7",
  "P8": "8",
  "V+_9": "9",
  "P10": "10",
  "P11": "11",
  "V-_12": "12",
  "V-_13": "13",
  "-_14": "14",
  "+_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+_1": "input", "-_2": "input", "V-_3": "power_in", "V-_4": "power_in", P5: "output", P6: "passive", "V+_7": "power_in", P8: "power_in", "V+_9": "power_in", P10: "passive", P11: "output", "V-_12": "power_in", "V-_13": "power_in", "-_14": "input", "+_15": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:STK436_Sanyo";
  override referencePrefix = "U";
}

/**
 * 2-Channel 12 Wmin Audio Frequency Power Amplifier, 4010, SIP-15
 *
 * KiCad symbol: `Amplifier_Audio:STK437_Sanyo`. Reference prefix: `U`.
 * Footprint filters: Sanyo*78.0x8.0mm*P2.54mm*.
 * @see http://datasheet.octopart.com/STK430-Sanyo-datasheet-107060.pdf
 * Keywords: audio amplifier 2ch.
 * Default footprint: Package_SIP:Sanyo_STK4xx-15_78.0x8.0mm_P2.54mm.
 */
export class STK437_Sanyo extends Component.withPins({
  "+_1": "1",
  "-_2": "2",
  "V-_3": "3",
  "V-_4": "4",
  "P5": "5",
  "P6": "6",
  "V+_7": "7",
  "P8": "8",
  "V+_9": "9",
  "P10": "10",
  "P11": "11",
  "V-_12": "12",
  "V-_13": "13",
  "-_14": "14",
  "+_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+_1": "input", "-_2": "input", "V-_3": "power_in", "V-_4": "power_in", P5: "output", P6: "passive", "V+_7": "power_in", P8: "power_in", "V+_9": "power_in", P10: "passive", P11: "output", "V-_12": "power_in", "V-_13": "power_in", "-_14": "input", "+_15": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:STK437_Sanyo";
  override referencePrefix = "U";
}

/**
 * 2-Channel 16 Wmin Audio Frequency Power Amplifier, 4010, SIP-15
 *
 * KiCad symbol: `Amplifier_Audio:STK439_Sanyo`. Reference prefix: `U`.
 * Footprint filters: Sanyo*78.0x8.0mm*P2.54mm*.
 * @see http://datasheet.octopart.com/STK430-Sanyo-datasheet-107060.pdf
 * Keywords: audio amplifier 2ch.
 * Default footprint: Package_SIP:Sanyo_STK4xx-15_78.0x8.0mm_P2.54mm.
 */
export class STK439_Sanyo extends Component.withPins({
  "+_1": "1",
  "-_2": "2",
  "V-_3": "3",
  "V-_4": "4",
  "P5": "5",
  "P6": "6",
  "V+_7": "7",
  "P8": "8",
  "V+_9": "9",
  "P10": "10",
  "P11": "11",
  "V-_12": "12",
  "V-_13": "13",
  "-_14": "14",
  "+_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+_1": "input", "-_2": "input", "V-_3": "power_in", "V-_4": "power_in", P5: "output", P6: "passive", "V+_7": "power_in", P8: "power_in", "V+_9": "power_in", P10: "passive", P11: "output", "V-_12": "power_in", "V-_13": "power_in", "-_14": "input", "+_15": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:STK439_Sanyo";
  override referencePrefix = "U";
}

/**
 * 2-Channel 24 Wmin Audio Frequency Power Amplifier, 4010, SIP-15
 *
 * KiCad symbol: `Amplifier_Audio:STK441_Sanyo`. Reference prefix: `U`.
 * Footprint filters: Sanyo*78.0x8.0mm*P2.54mm*.
 * @see http://datasheet.octopart.com/STK430-Sanyo-datasheet-107060.pdf
 * Keywords: audio amplifier 2ch.
 * Default footprint: Package_SIP:Sanyo_STK4xx-15_78.0x8.0mm_P2.54mm.
 */
export class STK441_Sanyo extends Component.withPins({
  "+_1": "1",
  "-_2": "2",
  "V-_3": "3",
  "V-_4": "4",
  "P5": "5",
  "P6": "6",
  "V+_7": "7",
  "P8": "8",
  "V+_9": "9",
  "P10": "10",
  "P11": "11",
  "V-_12": "12",
  "V-_13": "13",
  "-_14": "14",
  "+_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+_1": "input", "-_2": "input", "V-_3": "power_in", "V-_4": "power_in", P5: "output", P6: "passive", "V+_7": "power_in", P8: "power_in", "V+_9": "power_in", P10: "passive", P11: "output", "V-_12": "power_in", "V-_13": "power_in", "-_14": "input", "+_15": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:STK441_Sanyo";
  override referencePrefix = "U";
}

/**
 * 2-Channel 28 Wmin Audio Frequency Power Amplifier, 4010, SIP-15
 *
 * KiCad symbol: `Amplifier_Audio:STK443_Sanyo`. Reference prefix: `U`.
 * Footprint filters: Sanyo*78.0x8.0mm*P2.54mm*.
 * @see http://datasheet.octopart.com/STK430-Sanyo-datasheet-107060.pdf
 * Keywords: audio amplifier 2ch.
 * Default footprint: Package_SIP:Sanyo_STK4xx-15_78.0x8.0mm_P2.54mm.
 */
export class STK443_Sanyo extends Component.withPins({
  "+_1": "1",
  "-_2": "2",
  "V-_3": "3",
  "V-_4": "4",
  "P5": "5",
  "P6": "6",
  "V+_7": "7",
  "P8": "8",
  "V+_9": "9",
  "P10": "10",
  "P11": "11",
  "V-_12": "12",
  "V-_13": "13",
  "-_14": "14",
  "+_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+_1": "input", "-_2": "input", "V-_3": "power_in", "V-_4": "power_in", P5: "output", P6: "passive", "V+_7": "power_in", P8: "power_in", "V+_9": "power_in", P10: "passive", P11: "output", "V-_12": "power_in", "V-_13": "power_in", "-_14": "input", "+_15": "input", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:STK443_Sanyo";
  override referencePrefix = "U";
}

/**
 * Class D Audio Driver With Precision Dead-Time Generator, 8V UVLO, ±750V, ±0.5A, SOIC-16
 *
 * KiCad symbol: `Amplifier_Audio:Si8241BB`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9*P1.27mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si824x.pdf
 * Keywords: class d gate driver.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class Si8241BB extends Component.withPins({
  "PWM": "1",
  "NC_2": "2",
  "VDDI_3": "3",
  "GNDI": "4",
  "DISABLE": "5",
  "DT": "6",
  "NC_7": "7",
  "VDDI_8": "8",
  "GNDB": "9",
  "VOB": "10",
  "VDDB": "11",
  "NC_12": "12",
  "NC_13": "13",
  "GNDA": "14",
  "VOA": "15",
  "VDDA": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PWM: "input", NC_2: "no_connect", VDDI_3: "power_in", GNDI: "power_in", DISABLE: "input", DT: "passive", NC_7: "no_connect", VDDI_8: "passive", GNDB: "power_in", VOB: "output", VDDB: "power_in", NC_12: "no_connect", NC_13: "no_connect", GNDA: "power_in", VOA: "output", VDDA: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:Si8241BB";
  override referencePrefix = "U";
}

/**
 * Class D Audio Driver With Precision Dead-Time Generator, 10V UVLO, ±750V, ±0.5A, SOIC-16
 *
 * KiCad symbol: `Amplifier_Audio:Si8241CB`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/NCD5702-D.PDF
 * Keywords: class d gate driver.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class Si8241CB extends Component.withPins({
  "PWM": "1",
  "NC_2": "2",
  "VDDI_3": "3",
  "GNDI": "4",
  "DISABLE": "5",
  "DT": "6",
  "NC_7": "7",
  "VDDI_8": "8",
  "GNDB": "9",
  "VOB": "10",
  "VDDB": "11",
  "NC_12": "12",
  "NC_13": "13",
  "GNDA": "14",
  "VOA": "15",
  "VDDA": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PWM: "input", NC_2: "no_connect", VDDI_3: "power_in", GNDI: "power_in", DISABLE: "input", DT: "passive", NC_7: "no_connect", VDDI_8: "passive", GNDB: "power_in", VOB: "output", VDDB: "power_in", NC_12: "no_connect", NC_13: "no_connect", GNDA: "power_in", VOA: "output", VDDA: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:Si8241CB";
  override referencePrefix = "U";
}

/**
 * Class D Audio Driver With Precision Dead-Time Generator, 8V UVLO, ±750V, ±4A, SOIC-16
 *
 * KiCad symbol: `Amplifier_Audio:Si8244BB`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/NCD5702-D.PDF
 * Keywords: class d gate driver.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class Si8244BB extends Component.withPins({
  "PWM": "1",
  "NC_2": "2",
  "VDDI_3": "3",
  "GNDI": "4",
  "DISABLE": "5",
  "DT": "6",
  "NC_7": "7",
  "VDDI_8": "8",
  "GNDB": "9",
  "VOB": "10",
  "VDDB": "11",
  "NC_12": "12",
  "NC_13": "13",
  "GNDA": "14",
  "VOA": "15",
  "VDDA": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PWM: "input", NC_2: "no_connect", VDDI_3: "power_in", GNDI: "power_in", DISABLE: "input", DT: "passive", NC_7: "no_connect", VDDI_8: "passive", GNDB: "power_in", VOB: "output", VDDB: "power_in", NC_12: "no_connect", NC_13: "no_connect", GNDA: "power_in", VOA: "output", VDDA: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:Si8244BB";
  override referencePrefix = "U";
}

/**
 * Class D Audio Driver With Precision Dead-Time Generator, 10V UVLO, ±750V, ±4A, SOIC-16
 *
 * KiCad symbol: `Amplifier_Audio:Si8244CB`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x9.9*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/NCD5702-D.PDF
 * Keywords: class d gate driver.
 * Default footprint: Package_SO:SOIC-16_3.9x9.9mm_P1.27mm.
 */
export class Si8244CB extends Component.withPins({
  "PWM": "1",
  "NC_2": "2",
  "VDDI_3": "3",
  "GNDI": "4",
  "DISABLE": "5",
  "DT": "6",
  "NC_7": "7",
  "VDDI_8": "8",
  "GNDB": "9",
  "VOB": "10",
  "VDDB": "11",
  "NC_12": "12",
  "NC_13": "13",
  "GNDA": "14",
  "VOA": "15",
  "VDDA": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { PWM: "input", NC_2: "no_connect", VDDI_3: "power_in", GNDI: "power_in", DISABLE: "input", DT: "passive", NC_7: "no_connect", VDDI_8: "passive", GNDB: "power_in", VOB: "output", VDDB: "power_in", NC_12: "no_connect", NC_13: "no_connect", GNDA: "power_in", VOA: "output", VDDA: "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:Si8244CB";
  override referencePrefix = "U";
}

/**
 * 23W Stereo, Inductor-Less, Digital Input, Closed-Loop Class-D Audio Amplifier, HTSSOP-28
 *
 * KiCad symbol: `Amplifier_Audio:TAS5805MPWP`. Reference prefix: `U`.
 * Footprint filters: *TSSOP*4.4x9.7mm*P0.65mm*EP3.4*x9.7*Mask3.1*x4.*.
 * @see https://www.ti.com/lit/ds/symlink/tas5805m.pdf
 * Keywords: I2S I2C DSP.
 * Default footprint: Package_SO:TSSOP-28-1EP_4.4x9.7mm_P0.65mm_EP3.4x9.7mm_Mask3.1x4.05mm_ThermalVias.
 */
export class TAS5805MPWP extends Component.withPins({
  "SDOUT": "9",
  "BST_A-": "22",
  "OUT_A-": "23",
  "BST_A+": "25",
  "DGND_1": "1",
  "DVDD": "2",
  "ADR/~{FAULT}": "3",
  "VR_DIG": "4",
  "DGND_5": "5",
  "LRCLK": "6",
  "SCLK": "7",
  "SDIN": "8",
  "SDA": "10",
  "SCL": "11",
  "~{PDN}": "12",
  "AVDD": "13",
  "AGND": "14",
  "PVDD_15": "15",
  "PVDD_16": "16",
  "OUT_B+": "17",
  "BST_B+": "18",
  "PGND_19": "19",
  "OUT_B-": "20",
  "BST_B-": "21",
  "PGND_24": "24",
  "OUT_A+": "26",
  "PVDD_27": "27",
  "PVDD_28": "28",
  "EP": "29",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SDOUT: "output", "BST_A-": "passive", "OUT_A-": "output", "BST_A+": "passive", DGND_1: "power_in", DVDD: "power_in", "ADR/~{FAULT}": "bidirectional", VR_DIG: "power_out", DGND_5: "passive", LRCLK: "input", SCLK: "input", SDIN: "input", SDA: "bidirectional", SCL: "input", "~{PDN}": "input", AVDD: "power_out", AGND: "power_in", PVDD_15: "power_in", PVDD_16: "passive", "OUT_B+": "output", "BST_B+": "passive", PGND_19: "power_in", "OUT_B-": "output", "BST_B-": "passive", PGND_24: "passive", "OUT_A+": "output", PVDD_27: "passive", PVDD_28: "passive", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TAS5805MPWP";
  override referencePrefix = "U";
}

/**
 * 38W Stereo, Inductor-Less, Digital Input, Closed-Loop Class-D Audio Amplifier with 192-kHz Extended Audio Processing, VQFN-32
 *
 * KiCad symbol: `Amplifier_Audio:TAS5825MRHB`. Reference prefix: `U`.
 * Footprint filters: *VQFN*5x5mm*P0.5mm*EP3.4*x3.4*.
 * @see https://www.ti.com/lit/ds/symlink/tas5825m.pdf
 * Keywords: I2S I2C DSP.
 * Default footprint: Package_DFN_QFN:Texas_RHB0032E_VQFN-32-1EP_5x5mm_P0.5mm_EP3.45x3.45mm_ThermalVias.
 */
export class TAS5825MRHB extends Component.withPins({
  "BST_A+": "1",
  "OUT_A+": "2",
  "PVDD_3": "3",
  "PVDD_4": "4",
  "DGND": "5",
  "DVDD": "6",
  "VR_DIG": "7",
  "ADR": "8",
  "GPIO0": "9",
  "GPIO1": "10",
  "GPIO2": "11",
  "LRCLK": "12",
  "SCLK": "13",
  "SDIN": "14",
  "SDA": "15",
  "SCL": "16",
  "~{PDN}": "17",
  "GVDD": "18",
  "AVDD": "19",
  "AGND": "20",
  "PVDD_21": "21",
  "PVDD_22": "22",
  "OUT_B+": "23",
  "BST_B+": "24",
  "PGND_25": "25",
  "PGND_26": "26",
  "OUT_B-": "27",
  "BST_B-": "28",
  "BST_A-": "29",
  "OUT_A-": "30",
  "PGND_31": "31",
  "PGND_32": "32",
  "EP": "33",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "BST_A+": "passive", "OUT_A+": "output", PVDD_3: "power_in", PVDD_4: "passive", DGND: "power_in", DVDD: "power_in", VR_DIG: "power_out", ADR: "passive", GPIO0: "bidirectional", GPIO1: "bidirectional", GPIO2: "bidirectional", LRCLK: "input", SCLK: "input", SDIN: "input", SDA: "bidirectional", SCL: "input", "~{PDN}": "input", GVDD: "power_out", AVDD: "power_out", AGND: "power_in", PVDD_21: "passive", PVDD_22: "passive", "OUT_B+": "output", "BST_B+": "passive", PGND_25: "power_in", PGND_26: "passive", "OUT_B-": "output", "BST_B-": "passive", "BST_A-": "passive", "OUT_A-": "output", PGND_31: "passive", PGND_32: "passive", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TAS5825MRHB";
  override referencePrefix = "U";
}

/**
 * Class-AB Stereo Headphone Driver, SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Amplifier_Audio:TDA1308`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, TSSOP*3x3mm*P0.65mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/TDA1308.pdf
 * Keywords: audio amplifier.
 */
export class TDA1308 extends Component.withPins({
  "P1": "1",
  "-_2": "2",
  "+_3": "3",
  "+_5": "5",
  "-_6": "6",
  "P7": "7",
  "VSS": "4",
  "V+": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "output", "-_2": "input", "+_3": "input", "+_5": "input", "-_6": "input", P7: "output", VSS: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TDA1308";
  override referencePrefix = "U";
}

/**
 * 10W Car Radio Audio Amplifier, TO-220-5
 *
 * KiCad symbol: `Amplifier_Audio:TDA2003`. Reference prefix: `U`.
 * Footprint filters: TO*220*StaggerOdd*.
 * @see http://www.st.com/resource/en/datasheet/cd00000123.pdf
 * Keywords: audio amplifier.
 * Default footprint: Package_TO_SOT_THT:TO-220-5_P3.4x3.7mm_StaggerOdd_Lead3.8mm_Vertical.
 */
export class TDA2003 extends Component.withPins({
  "+": "1",
  "-": "2",
  "GND": "3",
  "P4": "4",
  "V+": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+": "input", "-": "input", GND: "power_in", P4: "output", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TDA2003";
  override referencePrefix = "U";
}

/**
 * 20W Bridge/Stereo Amplifier for Car Radio, TO-220-11
 *
 * KiCad symbol: `Amplifier_Audio:TDA2005`. Reference prefix: `U`.
 * Footprint filters: TO?220*StaggerOdd*.
 * @see http://www.st.com/resource/en/datasheet/cd00000124.pdf
 * Keywords: audio amplifier.
 * Default footprint: Package_TO_SOT_THT:TO-220-11_P3.4x5.08mm_StaggerOdd_Lead4.58mm_Vertical.
 */
export class TDA2005 extends Component.withPins({
  "+_1": "1",
  "-_2": "2",
  "SVRR": "3",
  "P10": "10",
  "BOOT_11": "11",
  "-_4": "4",
  "+_5": "5",
  "BOOT_7": "7",
  "P8": "8",
  "GND": "6",
  "V+": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+_1": "input", "-_2": "input", SVRR: "passive", P10: "output", BOOT_11: "passive", "-_4": "input", "+_5": "input", BOOT_7: "passive", P8: "output", GND: "power_in", "V+": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TDA2005";
  override referencePrefix = "U";
}

/**
 * 14W Hi-Fi Audio Amplifier, TO-220-5
 *
 * KiCad symbol: `Amplifier_Audio:TDA2030`. Reference prefix: `U`.
 * Footprint filters: TO*220*StaggerOdd*.
 * @see http://www.st.com/resource/en/datasheet/cd00000128.pdf
 * Keywords: audio amplifier.
 * Default footprint: Package_TO_SOT_THT:TO-220-5_P3.4x3.7mm_StaggerOdd_Lead3.8mm_Vertical.
 */
export class TDA2030 extends Component.withPins({
  "+": "1",
  "-": "2",
  "-Vs": "3",
  "P4": "4",
  "+Vs": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+": "input", "-": "input", "-Vs": "power_in", P4: "output", "+Vs": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TDA2030";
  override referencePrefix = "U";
}

/**
 * 32W Hi-Fi Audio Amplifier, TO-220-5
 *
 * KiCad symbol: `Amplifier_Audio:TDA2050`. Reference prefix: `U`.
 * Footprint filters: TO*220*StaggerOdd*.
 * @see http://www.st.com/resource/en/datasheet/cd00000131.pdf
 * Keywords: audio amplifier.
 * Default footprint: Package_TO_SOT_THT:TO-220-5_P3.4x3.7mm_StaggerOdd_Lead3.8mm_Vertical.
 */
export class TDA2050 extends Component.withPins({
  "+": "1",
  "-": "2",
  "-Vs": "3",
  "P4": "4",
  "+Vs": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "+": "input", "-": "input", "-Vs": "power_in", P4: "output", "+Vs": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TDA2050";
  override referencePrefix = "U";
}

/**
 * 1W BTL mono audio amplifier with DC volume control, DIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Audio:TDA7052A`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x9mm*P1.27mm*, DIP*W7.62mm*.
 * @see http://www.nxp.com/docs/en/data-sheet/TDA7052A_AT.pdf
 * Keywords: audio amplifier.
 */
export class TDA7052A extends Component.withPins({
  "VP": "1",
  "+": "2",
  "GND_3": "3",
  "V": "4",
  "P5": "5",
  "GND_6": "6",
  "NC": "7",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VP: "power_in", "+": "input", GND_3: "power_in", V: "input", P5: "output", GND_6: "power_in", NC: "no_connect", P8: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TDA7052A";
  override referencePrefix = "U";
}

/**
 * 25W + 25W stereo amplifier with mute and standby, TO-220-8
 *
 * KiCad symbol: `Amplifier_Audio:TDA7264`. Reference prefix: `U`.
 * Footprint filters: TO?220*.
 * @see http://www.st.com/resource/en/datasheet/tda7264.pdf
 * Keywords: audio amplifier 2ch.
 * Default footprint: Package_TO_SOT_THT:TO-220-8_Vertical.
 */
export class TDA7264 extends Component.withPins({
  "P1": "1",
  "MUTE": "4",
  "GND": "7",
  "IN_8": "8",
  "P3": "3",
  "IN_6": "6",
  "V+": "2",
  "V-": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "output", MUTE: "input", GND: "power_in", IN_8: "input", P3: "output", IN_6: "input", "V+": "power_in", "V-": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TDA7264";
  override referencePrefix = "U";
}

/**
 * 25W +25W Stereo Amplifier with Mute & St-by, TO-220-11
 *
 * KiCad symbol: `Amplifier_Audio:TDA7265`. Reference prefix: `U`.
 * Footprint filters: TO?220*StaggerOdd*.
 * @see http://www.st.com/resource/en/datasheet/tda7265.pdf
 * Keywords: audio amplifier 2ch.
 * Default footprint: Package_TO_SOT_THT:TO-220-11_P3.4x5.08mm_StaggerOdd_Lead4.58mm_Vertical.
 */
export class TDA7265 extends Component.withPins({
  "P2": "2",
  "MUTE": "5",
  "GND": "9",
  "-_10": "10",
  "+_11": "11",
  "P4": "4",
  "+_7": "7",
  "-_8": "8",
  "V-_1": "1",
  "V+": "3",
  "V-_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P2: "output", MUTE: "input", GND: "power_in", "-_10": "input", "+_11": "input", P4: "output", "+_7": "input", "-_8": "input", "V-_1": "power_in", "V+": "power_in", "V-_6": "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TDA7265";
  override referencePrefix = "U";
}

/**
 * 30W + 30W Stereo Amplifier with Mute and Standby, TO-220-11
 *
 * KiCad symbol: `Amplifier_Audio:TDA7265B`. Reference prefix: `U`.
 * Footprint filters: TO?220*StaggerOdd*.
 * @see http://www.st.com/resource/en/datasheet/tda7265b.pdf
 * Keywords: audio amplifier 2ch.
 * Default footprint: Package_TO_SOT_THT:TO-220-11_P3.4x5.08mm_StaggerOdd_Lead4.58mm_Vertical.
 */
export class TDA7265B extends Component.withPins({
  "P2": "2",
  "MUTE": "5",
  "GND": "9",
  "-_10": "10",
  "+_11": "11",
  "P4": "4",
  "+_7": "7",
  "-_8": "8",
  "V-_1": "1",
  "V+": "3",
  "V-_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P2: "output", MUTE: "input", GND: "power_in", "-_10": "input", "+_11": "input", P4: "output", "+_7": "input", "-_8": "input", "V-_1": "power_in", "V+": "power_in", "V-_6": "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TDA7265B";
  override referencePrefix = "U";
}

/**
 * 7+7W Dual Bridge Amplifier, TO-220-15
 *
 * KiCad symbol: `Amplifier_Audio:TDA7266`. Reference prefix: `U`.
 * Footprint filters: TO?220*StaggerOdd*.
 * @see http://www.st.com/resource/en/datasheet/tda7266.pdf
 * Keywords: audio amplifier 2ch.
 * Default footprint: Package_TO_SOT_THT:TO-220-15_P2.54x5.08mm_StaggerOdd_Lead4.58mm_Vertical.
 */
export class TDA7266 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "+_4": "4",
  "NC_5": "5",
  "MUTE": "6",
  "STBY": "7",
  "NC_10": "10",
  "NC_11": "11",
  "+_12": "12",
  "P14": "14",
  "P15": "15",
  "V+_3": "3",
  "PG": "8",
  "SG": "9",
  "V+_13": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "output", P2: "output", "+_4": "input", NC_5: "no_connect", MUTE: "input", STBY: "input", NC_10: "no_connect", NC_11: "no_connect", "+_12": "input", P14: "output", P15: "output", "V+_3": "power_in", PG: "power_in", SG: "power_in", "V+_13": "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TDA7266";
  override referencePrefix = "U";
}

/**
 * 5W+5W Dual Bridge Amplifier, PowerSO-20
 *
 * KiCad symbol: `Amplifier_Audio:TDA7266D`. Reference prefix: `U`.
 * Footprint filters: HSOP*EP*11.0x15.9mm*P1.27mm*SlugDown*.
 * @see http://www.st.com/resource/en/datasheet/tda7266d.pdf
 * Keywords: audio amplifier 2ch.
 * Default footprint: Package_SO:HSOP-20-1EP_11.0x15.9mm_P1.27mm_SlugDown.
 */
export class TDA7266D extends Component.withPins({
  "P2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "P5": "5",
  "+_7": "7",
  "MUTE": "8",
  "STBY": "9",
  "NC_12": "12",
  "NC_17": "17",
  "NC_18": "18",
  "+_14": "14",
  "P16": "16",
  "P19": "19",
  "PG_1": "1",
  "V+_6": "6",
  "PG_10": "10",
  "PG_11": "11",
  "SG": "13",
  "V+_15": "15",
  "PG_20": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P2: "output", NC_3: "no_connect", NC_4: "no_connect", P5: "output", "+_7": "input", MUTE: "input", STBY: "input", NC_12: "no_connect", NC_17: "no_connect", NC_18: "no_connect", "+_14": "input", P16: "output", P19: "output", PG_1: "power_in", "V+_6": "power_in", PG_10: "passive", PG_11: "passive", SG: "power_in", "V+_15": "passive", PG_20: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TDA7266D";
  override referencePrefix = "U";
}

/**
 * 7W Mono Bridge Amplifier, TO-220-15
 *
 * KiCad symbol: `Amplifier_Audio:TDA7266M`. Reference prefix: `U`.
 * Footprint filters: TO?220*StaggerOdd*.
 * @see http://www.st.com/resource/en/datasheet/tda7266m.pdf
 * Keywords: audio amplifier.
 * Default footprint: Package_TO_SOT_THT:TO-220-15_P2.54x5.08mm_StaggerOdd_Lead4.58mm_Vertical.
 */
export class TDA7266M extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "V+_3": "3",
  "+": "4",
  "NC_5": "5",
  "MUTE": "6",
  "STBY": "7",
  "PG": "8",
  "SG": "9",
  "NC_10": "10",
  "NC_11": "11",
  "NC_12": "12",
  "V+_13": "13",
  "NC_14": "14",
  "NC_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "output", P2: "output", "V+_3": "power_in", "+": "input", NC_5: "no_connect", MUTE: "input", STBY: "input", PG: "power_in", SG: "power_in", NC_10: "no_connect", NC_11: "no_connect", NC_12: "no_connect", "V+_13": "passive", NC_14: "no_connect", NC_15: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TDA7266M";
  override referencePrefix = "U";
}

/**
 * 3W+3W Dual Bridge Amplifier, PowerSSO-24
 *
 * KiCad symbol: `Amplifier_Audio:TDA7266P`. Reference prefix: `U`.
 * Footprint filters: ST*PowerSSO*SlugDown*.
 * @see http://www.st.com/resource/en/datasheet/tda7266p.pdf
 * Keywords: audio amplifier 2ch.
 * Default footprint: Package_SO:ST_PowerSSO-24_SlugDown.
 */
export class TDA7266P extends Component.withPins({
  "NC_2": "2",
  "NC_3": "3",
  "NC_4": "4",
  "P5": "5",
  "P6": "6",
  "+_8": "8",
  "NC_9": "9",
  "MUTE": "10",
  "STBY": "11",
  "NC_12": "12",
  "NC_13": "13",
  "NC_15": "15",
  "NC_16": "16",
  "NC_21": "21",
  "NC_22": "22",
  "NC_23": "23",
  "+_17": "17",
  "P19": "19",
  "P20": "20",
  "PG_1": "1",
  "V+_7": "7",
  "SG": "14",
  "V+_18": "18",
  "PG_24": "24",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC_2: "no_connect", NC_3: "no_connect", NC_4: "no_connect", P5: "output", P6: "output", "+_8": "input", NC_9: "no_connect", MUTE: "input", STBY: "input", NC_12: "no_connect", NC_13: "no_connect", NC_15: "no_connect", NC_16: "no_connect", NC_21: "no_connect", NC_22: "no_connect", NC_23: "no_connect", "+_17": "input", P19: "output", P20: "output", PG_1: "power_in", "V+_7": "power_in", SG: "power_in", "V+_18": "passive", PG_24: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TDA7266P";
  override referencePrefix = "U";
}

/**
 * 14W+14W Stereo Amplifier with Mute & St-by, TO-220-11
 *
 * KiCad symbol: `Amplifier_Audio:TDA7269A`. Reference prefix: `U`.
 * Footprint filters: TO?220*StaggerOdd*.
 * @see http://www.st.com/resource/en/datasheet/tda7269a.pdf
 * Keywords: audio amplfier 2ch.
 * Default footprint: Package_TO_SOT_THT:TO-220-11_P3.4x5.08mm_StaggerOdd_Lead4.58mm_Vertical.
 */
export class TDA7269A extends Component.withPins({
  "P2": "2",
  "MUTE": "5",
  "GND": "9",
  "-_10": "10",
  "+_11": "11",
  "P4": "4",
  "+_7": "7",
  "-_8": "8",
  "V-_1": "1",
  "V+": "3",
  "V-_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P2: "output", MUTE: "input", GND: "power_in", "-_10": "input", "+_11": "input", P4: "output", "+_7": "input", "-_8": "input", "V-_1": "power_in", "V+": "power_in", "V-_6": "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TDA7269A";
  override referencePrefix = "U";
}

/**
 * 40W + 40W stereo amplifier with mute and standby, TO-220-11
 *
 * KiCad symbol: `Amplifier_Audio:TDA7292`. Reference prefix: `U`.
 * Footprint filters: TO?220*StaggerOdd*.
 * @see http://www.st.com/resource/en/datasheet/tda7292.pdf
 * Keywords: audio amplifier 2ch.
 * Default footprint: Package_TO_SOT_THT:TO-220-11_P3.4x5.08mm_StaggerOdd_Lead4.58mm_Vertical.
 */
export class TDA7292 extends Component.withPins({
  "P2": "2",
  "MUTE": "5",
  "GND": "9",
  "-_10": "10",
  "+_11": "11",
  "P4": "4",
  "+_7": "7",
  "-_8": "8",
  "V-_1": "1",
  "V+": "3",
  "V-_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P2: "output", MUTE: "input", GND: "power_in", "-_10": "input", "+_11": "input", P4: "output", "+_7": "input", "-_8": "input", "V-_1": "power_in", "V+": "power_in", "V-_6": "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TDA7292";
  override referencePrefix = "U";
}

/**
 * 120-volt, 100-watt, DMOS Audio Amplifier with Mute and Standby, TO-220-15
 *
 * KiCad symbol: `Amplifier_Audio:TDA7293`. Reference prefix: `U`.
 * Footprint filters: TO?220*StaggerOdd*.
 * @see http://www.st.com/resource/en/datasheet/tda7293.pdf
 * Keywords: audio amplifier.
 * Default footprint: Package_TO_SOT_THT:TO-220-15_P2.54x5.08mm_StaggerOdd_Lead4.58mm_Vertical.
 */
export class TDA7293 extends Component.withPins({
  "SGND": "1",
  "-": "2",
  "+": "3",
  "SIG_GND": "4",
  "NC_5": "5",
  "BOOT": "6",
  "+Vs_7": "7",
  "-Vs_8": "8",
  "STBY": "9",
  "MUTE": "10",
  "NC_11": "11",
  "NC_12": "12",
  "+Vs_13": "13",
  "P14": "14",
  "-Vs_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SGND: "power_in", "-": "input", "+": "input", SIG_GND: "power_in", NC_5: "no_connect", BOOT: "passive", "+Vs_7": "power_in", "-Vs_8": "power_in", STBY: "input", MUTE: "input", NC_11: "no_connect", NC_12: "no_connect", "+Vs_13": "power_in", P14: "output", "-Vs_15": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TDA7293";
  override referencePrefix = "U";
}

/**
 * 100V - 100W DMOS Audio Amplifier with Mute/St-by, TO-220-15
 *
 * KiCad symbol: `Amplifier_Audio:TDA7294`. Reference prefix: `U`.
 * Footprint filters: TO?220*StaggerOdd*.
 * @see http://www.st.com/resource/en/datasheet/tda7294.pdf
 * Keywords: audio amplifier.
 * Default footprint: Package_TO_SOT_THT:TO-220-15_P2.54x5.08mm_StaggerOdd_Lead4.58mm_Vertical.
 */
export class TDA7294 extends Component.withPins({
  "SGND": "1",
  "-": "2",
  "+": "3",
  "SIG_GND": "4",
  "NC_5": "5",
  "BOOT": "6",
  "+Vs_7": "7",
  "-Vs_8": "8",
  "STBY": "9",
  "MUTE": "10",
  "NC_11": "11",
  "NC_12": "12",
  "+Vs_13": "13",
  "P14": "14",
  "-Vs_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SGND: "power_in", "-": "input", "+": "input", SIG_GND: "power_in", NC_5: "no_connect", BOOT: "passive", "+Vs_7": "power_in", "-Vs_8": "power_in", STBY: "input", MUTE: "input", NC_11: "no_connect", NC_12: "no_connect", "+Vs_13": "power_in", P14: "output", "-Vs_15": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TDA7294";
  override referencePrefix = "U";
}

/**
 * 80V - 80W DMOS Audio Amplifier with Mute/St-by, TO-220-15
 *
 * KiCad symbol: `Amplifier_Audio:TDA7295`. Reference prefix: `U`.
 * Footprint filters: TO?220*StaggerOdd*.
 * @see http://www.st.com/resource/en/datasheet/tda7295.pdf
 * Keywords: audio amplifier.
 * Default footprint: Package_TO_SOT_THT:TO-220-15_P2.54x5.08mm_StaggerOdd_Lead4.58mm_Vertical.
 */
export class TDA7295 extends Component.withPins({
  "SGND": "1",
  "-": "2",
  "+": "3",
  "SIG_GND": "4",
  "NC_5": "5",
  "BOOT": "6",
  "+Vs_7": "7",
  "-Vs_8": "8",
  "STBY": "9",
  "MUTE": "10",
  "NC_11": "11",
  "NC_12": "12",
  "+Vs_13": "13",
  "P14": "14",
  "-Vs_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SGND: "power_in", "-": "input", "+": "input", SIG_GND: "power_in", NC_5: "no_connect", BOOT: "passive", "+Vs_7": "power_in", "-Vs_8": "power_in", STBY: "input", MUTE: "input", NC_11: "no_connect", NC_12: "no_connect", "+Vs_13": "power_in", P14: "output", "-Vs_15": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TDA7295";
  override referencePrefix = "U";
}

/**
 * 70V - 60W DMOS Audio Amplifier with Mute/St-by, TO-220-15
 *
 * KiCad symbol: `Amplifier_Audio:TDA7296`. Reference prefix: `U`.
 * Footprint filters: TO?220*StaggerOdd*.
 * @see http://www.st.com/resource/en/datasheet/tda7296.pdf
 * Keywords: audio amplifier.
 * Default footprint: Package_TO_SOT_THT:TO-220-15_P2.54x5.08mm_StaggerOdd_Lead4.58mm_Vertical.
 */
export class TDA7296 extends Component.withPins({
  "SGND": "1",
  "-": "2",
  "+": "3",
  "SIG_GND": "4",
  "NC_5": "5",
  "BOOT": "6",
  "+Vs_7": "7",
  "-Vs_8": "8",
  "STBY": "9",
  "MUTE": "10",
  "NC_11": "11",
  "NC_12": "12",
  "+Vs_13": "13",
  "P14": "14",
  "-Vs_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SGND: "power_in", "-": "input", "+": "input", SIG_GND: "power_in", NC_5: "no_connect", BOOT: "passive", "+Vs_7": "power_in", "-Vs_8": "power_in", STBY: "input", MUTE: "input", NC_11: "no_connect", NC_12: "no_connect", "+Vs_13": "power_in", P14: "output", "-Vs_15": "power_in", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TDA7296";
  override referencePrefix = "U";
}

/**
 * 15+15W Dual Bridge Amplifier, TO-220-15
 *
 * KiCad symbol: `Amplifier_Audio:TDA7297`. Reference prefix: `U`.
 * Footprint filters: TO?220*StaggerOdd*.
 * @see http://www.st.com/resource/en/datasheet/tda7297.pdf
 * Keywords: audio amplifier 2ch.
 * Default footprint: Package_TO_SOT_THT:TO-220-15_P2.54x5.08mm_StaggerOdd_Lead4.58mm_Vertical.
 */
export class TDA7297 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "+_4": "4",
  "NC_5": "5",
  "MUTE": "6",
  "STBY": "7",
  "NC_10": "10",
  "NC_11": "11",
  "+_12": "12",
  "P14": "14",
  "P15": "15",
  "V+_3": "3",
  "PG": "8",
  "SG": "9",
  "V+_13": "13",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "output", P2: "output", "+_4": "input", NC_5: "no_connect", MUTE: "input", STBY: "input", NC_10: "no_connect", NC_11: "no_connect", "+_12": "input", P14: "output", P15: "output", "V+_3": "power_in", PG: "power_in", SG: "power_in", "V+_13": "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TDA7297";
  override referencePrefix = "U";
}

/**
 * 5W+5W Amplifier with DC Volume Control, TO-220-15
 *
 * KiCad symbol: `Amplifier_Audio:TDA7496`. Reference prefix: `U`.
 * Footprint filters: TO?220*StaggerOdd*.
 * @see http://www.st.com/resource/en/datasheet/tda7297.pdf
 * Keywords: audio amplifier 2ch.
 * Default footprint: Package_TO_SOT_THT:TO-220-15_P2.54x5.08mm_StaggerOdd_Lead4.58mm_Vertical.
 */
export class TDA7496 extends Component.withPins({
  "V": "3",
  "O_4": "4",
  "+_5": "5",
  "NC": "6",
  "STBY": "9",
  "MUTE": "10",
  "P12": "12",
  "+_1": "1",
  "O_2": "2",
  "SVR": "7",
  "P14": "14",
  "SG": "8",
  "PG_11": "11",
  "V+": "13",
  "PG_15": "15",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { V: "input", O_4: "output", "+_5": "input", NC: "no_connect", STBY: "input", MUTE: "input", P12: "output", "+_1": "input", O_2: "output", SVR: "passive", P14: "output", SG: "power_in", PG_11: "power_in", "V+": "power_in", PG_15: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TDA7496";
  override referencePrefix = "U";
}

/**
 * Mono BTL class-D audio amplifier for portable applications with digital input, HVQFN-24
 *
 * KiCad symbol: `Amplifier_Audio:TFA9879HN`. Reference prefix: `U`.
 * Footprint filters: HVQFN*1EP*4x4mm*P0.5mm*.
 * @see https://www.nxp.com/docs/en/data-sheet/TFA9879.pdf
 * Keywords: Audio Amplifier Class D NXP Semiconductors.
 * Default footprint: Package_DFN_QFN:HVQFN-24-1EP_4x4mm_P0.5mm_EP2.6x2.6mm_ThermalVias.
 */
export class TFA9879HN extends Component.withPins({
  "SDA": "1",
  "SCL": "2",
  "TEST1": "3",
  "ADSEL2": "4",
  "TEST3": "5",
  "NC_6": "6",
  "VDDP_7": "7",
  "VDDP_8": "8",
  "OUTB": "9",
  "OUTA": "10",
  "GNDP_11": "11",
  "GNDP_12": "12",
  "STABA": "13",
  "NC_14": "14",
  "TEST2": "15",
  "ADSEL1": "16",
  "SDI2": "17",
  "SCK2": "18",
  "LRCK2": "19",
  "SDI1": "20",
  "SCK1": "21",
  "LRCK1": "22",
  "VDD": "23",
  "GNDD": "24",
  "EP": "25",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SDA: "bidirectional", SCL: "input", TEST1: "input", ADSEL2: "input", TEST3: "input", NC_6: "no_connect", VDDP_7: "passive", VDDP_8: "power_in", OUTB: "output", OUTA: "output", GNDP_11: "passive", GNDP_12: "power_in", STABA: "output", NC_14: "no_connect", TEST2: "input", ADSEL1: "input", SDI2: "input", SCK2: "input", LRCK2: "input", SDI1: "input", SCK1: "input", LRCK1: "input", VDD: "power_in", GNDD: "power_in", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TFA9879HN";
  override referencePrefix = "U";
}

/**
 * Low-Noise, High Performance Audio Preamplifier IC
 *
 * KiCad symbol: `Amplifier_Audio:THAT151xx08`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.thatcorp.com/datashts/THAT_1510-1512_Datasheet.pdf
 * Keywords: Audio Preamplifier.
 */
export class THAT151xx08 extends Component.withPins({
  "Rg1": "1",
  "-In": "2",
  "+In": "3",
  "V-": "4",
  "Ref": "5",
  "Out": "6",
  "V+": "7",
  "Rg2": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { Rg1: "passive", "-In": "input", "+In": "input", "V-": "power_in", Ref: "output", Out: "output", "V+": "power_in", Rg2: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:THAT151xx08";
  override referencePrefix = "U";
}

/**
 * Blackmer Pre-Trimmed IC Voltage Controlled Amplifiers, SIP-8
 *
 * KiCad symbol: `Amplifier_Audio:THAT2180`. Reference prefix: `U`.
 * Footprint filters: SIP*19x3mm*P2.54mm*.
 * @see http://www.thatcorp.com/datashts/THAT_2180-Series_Datasheet.pdf
 * Keywords: audio vca.
 * Default footprint: Package_SIP:SIP-8_19x3mm_P2.54mm.
 */
export class THAT2180 extends Component.withPins({
  "V-": "5",
  "GND": "6",
  "V+": "7",
  "-": "1",
  "E+": "2",
  "E-": "3",
  "SYM": "4",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V-": "power_in", GND: "power_in", "V+": "power_in", "-": "input", "E+": "input", "E-": "input", SYM: "input", P8: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:THAT2180";
  override referencePrefix = "U";
}

/**
 * Blackmer Trimmable IC Voltage Controlled Amplifiers, SIP-8/SOIC-8
 *
 * KiCad symbol: `Amplifier_Audio:THAT2181`. Reference prefix: `U`.
 * Footprint filters: SIP*19x3mm*P2.54mm*, SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.thatcorp.com/datashts/THAT_2181-Series_Datasheet.pdf
 * Keywords: audio vca.
 */
export class THAT2181 extends Component.withPins({
  "V-": "5",
  "GND": "6",
  "V+": "7",
  "-": "1",
  "E+": "2",
  "E-": "3",
  "SYM": "4",
  "P8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V-": "power_in", GND: "power_in", "V+": "power_in", "-": "input", "E+": "input", "E-": "input", SYM: "input", P8: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:THAT2181";
  override referencePrefix = "U";
}

/**
 * 175-W Stereo, 350-W Mono PurePath Ultra-HD Analog-Input Class-D Amplifier, HTSSOP-44
 *
 * KiCad symbol: `Amplifier_Audio:TPA3251`. Reference prefix: `U`.
 * Footprint filters: HTSSOP*6.1x14mm*P0.635mm*.
 * @see http://www.ti.com/lit/ds/symlink/tpa3251.pdf
 * Keywords: stereo class d amplifier.
 * Default footprint: Package_SO:HTSSOP-44_6.1x14mm_P0.635mm_TopEP4.14x7.01mm.
 */
export class TPA3251 extends Component.withPins({
  "GVDD_AB": "1",
  "VDD": "2",
  "INPUT_A": "5",
  "INPUT_B": "6",
  "OC_ADJ": "7",
  "FREQ_ADJ": "8",
  "OSC_IOM": "9",
  "OSC_IOP": "10",
  "DVDD": "11",
  "GND_12": "12",
  "GND_13": "13",
  "AVDD": "14",
  "C_START": "15",
  "VBG": "20",
  "GND_25": "25",
  "GND_26": "26",
  "GND_33": "33",
  "GND_34": "34",
  "OUT_B": "35",
  "PVDD_AB_36": "36",
  "PVDD_AB_37": "37",
  "PVDD_AB_38": "38",
  "OUT_A_39": "39",
  "OUT_A_40": "40",
  "GND_41": "41",
  "GND_42": "42",
  "BST_B": "43",
  "BST_A": "44",
  "M1": "3",
  "M2": "4",
  "INPUT_C": "16",
  "INPUT_D": "17",
  "~{RESET}": "18",
  "~{FAULT}": "19",
  "~{CLIP_OTW}": "21",
  "GVDD_CD": "22",
  "BST_D": "23",
  "BST_C": "24",
  "OUT_D_27": "27",
  "OUT_D_28": "28",
  "PVDD_CD_29": "29",
  "PVDD_CD_30": "30",
  "PVDD_CD_31": "31",
  "OUT_C": "32",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GVDD_AB: "power_in", VDD: "power_in", INPUT_A: "input", INPUT_B: "input", OC_ADJ: "passive", FREQ_ADJ: "passive", OSC_IOM: "bidirectional", OSC_IOP: "bidirectional", DVDD: "passive", GND_12: "power_in", GND_13: "passive", AVDD: "passive", C_START: "passive", VBG: "passive", GND_25: "passive", GND_26: "passive", GND_33: "passive", GND_34: "passive", OUT_B: "output", PVDD_AB_36: "power_in", PVDD_AB_37: "passive", PVDD_AB_38: "passive", OUT_A_39: "output", OUT_A_40: "passive", GND_41: "passive", GND_42: "passive", BST_B: "passive", BST_A: "passive", M1: "input", M2: "input", INPUT_C: "input", INPUT_D: "input", "~{RESET}": "input", "~{FAULT}": "open_collector", "~{CLIP_OTW}": "open_collector", GVDD_CD: "power_in", BST_D: "passive", BST_C: "passive", OUT_D_27: "output", OUT_D_28: "passive", PVDD_CD_29: "power_in", PVDD_CD_30: "passive", PVDD_CD_31: "passive", OUT_C: "output", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TPA3251";
  override referencePrefix = "U";
}

/**
 * 150-mW Stereo Audio Power Amplifier, HVSSOP
 *
 * KiCad symbol: `Amplifier_Audio:TPA6110A2DGN`. Reference prefix: `U`.
 * Footprint filters: HVSSOP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tpa6110a2.pdf
 * Keywords: audio amplifier headphone.
 * Default footprint: Package_SO:HVSSOP-8-1EP_3x3mm_P0.65mm_EP1.57x1.89mm.
 */
export class TPA6110A2DGN extends Component.withPins({
  "BYPASS": "1",
  "GND_2": "2",
  "SHDN": "3",
  "IN2-": "4",
  "VO2": "5",
  "VDD": "6",
  "VO1": "7",
  "IN1-": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BYPASS: "passive", GND_2: "power_in", SHDN: "input", "IN2-": "input", VO2: "output", VDD: "power_in", VO1: "output", "IN1-": "input", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TPA6110A2DGN";
  override referencePrefix = "U";
}

/**
 * 25mW, Stereo, DirectPath Audio Amplifier, WQFN-16
 *
 * KiCad symbol: `Amplifier_Audio:TPA6132A2RTE`. Reference prefix: `U`.
 * Footprint filters: WQFN*1EP*3x3mm*P0.5mm*.
 * @see https://www.ti.com/lit/ds/symlink/tpa6132a2.pdf
 * Keywords: DirectPath audio amplifier Stereo.
 * Default footprint: Package_DFN_QFN:WQFN-16-1EP_3x3mm_P0.5mm_EP1.6x1.6mm_ThermalVias.
 */
export class TPA6132A2RTE extends Component.withPins({
  "INL-": "1",
  "INL+": "2",
  "INR+": "3",
  "INR-": "4",
  "OUTR": "5",
  "G0": "6",
  "G1": "7",
  "HPVSS": "8",
  "CPN": "9",
  "PGND": "10",
  "CPP": "11",
  "HPVDD": "12",
  "EN": "13",
  "VDD": "14",
  "SGND": "15",
  "OUTL": "16",
  "EP": "17",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "INL-": "input", "INL+": "input", "INR+": "input", "INR-": "input", OUTR: "output", G0: "input", G1: "input", HPVSS: "power_in", CPN: "passive", PGND: "power_in", CPP: "passive", HPVDD: "power_in", EN: "input", VDD: "power_in", SGND: "power_in", OUTL: "output", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TPA6132A2RTE";
  override referencePrefix = "U";
}

/**
 * 1.25W, Mono, Differential Audio Amplifier, MSOP-8
 *
 * KiCad symbol: `Amplifier_Audio:TPA6203A1DGN`. Reference prefix: `U`.
 * Footprint filters: MSOP*1EP*3x3mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/tpa6203a1.pdf
 * Keywords: Differential audio amplifier Mono.
 * Default footprint: Package_SO:MSOP-8-1EP_3x3mm_P0.65mm_EP1.95x2.15mm_ThermalVias.
 */
export class TPA6203A1DGN extends Component.withPins({
  "~{SHUTDOWN}": "1",
  "BYPASS": "2",
  "IN+": "3",
  "IN-": "4",
  "V_{O+}": "5",
  "V_{DD}": "6",
  "GND_7": "7",
  "V_{O-}": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{SHUTDOWN}": "input", BYPASS: "input", "IN+": "input", "IN-": "input", "V_{O+}": "output", "V_{DD}": "power_in", GND_7: "power_in", "V_{O-}": "output", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TPA6203A1DGN";
  override referencePrefix = "U";
}

/**
 * 1.25W, Mono, Differential Audio Amplifier, VSON-8
 *
 * KiCad symbol: `Amplifier_Audio:TPA6203A1DRB`. Reference prefix: `U`.
 * Footprint filters: Texas*DRB*.
 * @see https://www.ti.com/lit/ds/symlink/tpa6203a1.pdf
 * Keywords: Differential audio amplifier Mono.
 * Default footprint: Package_DFN_QFN:Texas_DRB0008A.
 */
export class TPA6203A1DRB extends Component.withPins({
  "~{SHUTDOWN}": "1",
  "BYPASS": "2",
  "IN+": "3",
  "IN-": "4",
  "V_{O+}": "5",
  "V_{DD}": "6",
  "GND_7": "7",
  "V_{O-}": "8",
  "GND_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{SHUTDOWN}": "input", BYPASS: "input", "IN+": "input", "IN-": "input", "V_{O+}": "output", "V_{DD}": "power_in", GND_7: "power_in", "V_{O-}": "output", GND_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Amplifier_Audio:TPA6203A1DRB";
  override referencePrefix = "U";
}
