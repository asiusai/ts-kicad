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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CXA1034P extends Component.withPins({
  /** Physical pin 1: EQ_OUT_(A); output. */
  "EQ_OUT_(A)": "1",
  /** Physical pin 2: EQ_IN_(A); input. */
  "EQ_IN_(A)": "2",
  /** Physical pin 3: IN_(A); input. */
  "IN_(A)": "3",
  /** Physical pin 4: GND_(2); power_in. */
  "GND_(2)": "4",
  /** Physical pin 5: V_{REF}; passive. */
  "V_{REF}": "5",
  /** Physical pin 6: IN_(B); input. */
  "IN_(B)": "6",
  /** Physical pin 7: EQ_IN_(B); input. */
  "EQ_IN_(B)": "7",
  /** Physical pin 8: EQ_OUT_(B); output. */
  "EQ_OUT_(B)": "8",
  /** Physical pin 9: VOL_IN; input. */
  "VOL_IN": "9",
  /** Physical pin 10: NF_(B); input. */
  "NF_(B)": "10",
  /** Physical pin 11: OUT_(B); output. */
  "OUT_(B)": "11",
  /** Physical pin 12: V_{CC}; power_in. */
  "V_{CC}": "12",
  /** Physical pin 13: GND_(1); power_in. */
  "GND_(1)": "13",
  /** Physical pin 14: OUT_(A); output. */
  "OUT_(A)": "14",
  /** Physical pin 15: NF_(A); input. */
  "NF_(A)": "15",
  /** Physical pin 16: V_{REG}; passive. */
  "V_{REG}": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR4301 extends Component.withPins({
  /** Physical pin 1: VAA; power_in. */
  "VAA": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: IN-; input. */
  "IN-": "4",
  /** Physical pin 5: COMP; output. */
  "COMP": "5",
  /** Physical pin 6: CSD; passive. */
  "CSD": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: COM; power_in. */
  "COM_9": "9",
  /** Physical pin 10: VN; power_in. */
  "VN": "10",
  /** Physical pin 11: VS; output. */
  "VS": "11",
  /** Physical pin 12: VP; power_in. */
  "VP": "12",
  /** Physical pin 13: VB; power_in. */
  "VB": "13",
  /** Physical pin 14: CSH; passive. */
  "CSH": "14",
  /** Physical pin 15: COM; passive. */
  "COM_15": "15",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR4302 extends Component.withPins({
  /** Physical pin 1: CLIP; open_collector. */
  "CLIP": "1",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS": "6",
  /** Physical pin 7: VAA; power_in. */
  "VAA": "7",
  /** Physical pin 8: IN+1; input. */
  "IN+1": "8",
  /** Physical pin 9: IN-1; input. */
  "IN-1": "9",
  /** Physical pin 10: COMP1; output. */
  "COMP1": "10",
  /** Physical pin 11: CSD; passive. */
  "CSD": "11",
  /** Physical pin 12: FAULT; open_collector. */
  "FAULT": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
  /** Physical pin 15: COM; power_in. */
  "COM_15": "15",
  /** Physical pin 16: CSH1; passive. */
  "CSH1": "16",
  /** Physical pin 17: VB1; power_in. */
  "VB1": "17",
  /** Physical pin 18: VS1; output. */
  "VS1_18": "18",
  /** Physical pin 19: VP1; power_in. */
  "VP1": "19",
  /** Physical pin 20: VS1; passive. */
  "VS1_20": "20",
  /** Physical pin 21: VN1; power_in. */
  "VN1": "21",
  /** Physical pin 28: COM; passive. */
  "COM_28": "28",
  /** Physical pin 29: NC; no_connect. */
  "NC_29": "29",
  /** Physical pin 30: NC; no_connect. */
  "NC_30": "30",
  /** Physical pin 31: COM; passive. */
  "COM_31": "31",
  /** Physical pin 2: COMP2; output. */
  "COMP2": "2",
  /** Physical pin 3: IN-2; input. */
  "IN-2": "3",
  /** Physical pin 4: IN+2; input. */
  "IN+2": "4",
  /** Physical pin 22: VN2; power_in. */
  "VN2": "22",
  /** Physical pin 23: VS2; output. */
  "VS2_23": "23",
  /** Physical pin 24: VP2; power_in. */
  "VP2": "24",
  /** Physical pin 25: VS2; passive. */
  "VS2_25": "25",
  /** Physical pin 26: VB2; power_in. */
  "VB2": "26",
  /** Physical pin 27: CSH2; passive. */
  "CSH2": "27",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR4311 extends Component.withPins({
  /** Physical pin 1: VAA; power_in. */
  "VAA": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: IN-; input. */
  "IN-": "4",
  /** Physical pin 5: COMP; output. */
  "COMP": "5",
  /** Physical pin 6: CSD; passive. */
  "CSD": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: COM; power_in. */
  "COM_9": "9",
  /** Physical pin 10: VN; power_in. */
  "VN": "10",
  /** Physical pin 11: VS; output. */
  "VS": "11",
  /** Physical pin 12: VP; power_in. */
  "VP": "12",
  /** Physical pin 13: VB; power_in. */
  "VB": "13",
  /** Physical pin 14: CSH; passive. */
  "CSH": "14",
  /** Physical pin 15: COM; passive. */
  "COM_15": "15",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR4312 extends Component.withPins({
  /** Physical pin 1: CLIP; open_collector. */
  "CLIP": "1",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS": "6",
  /** Physical pin 7: VAA; power_in. */
  "VAA": "7",
  /** Physical pin 8: IN+1; input. */
  "IN+1": "8",
  /** Physical pin 9: IN-1; input. */
  "IN-1": "9",
  /** Physical pin 10: COMP1; output. */
  "COMP1": "10",
  /** Physical pin 11: CSD; passive. */
  "CSD": "11",
  /** Physical pin 12: FAULT; open_collector. */
  "FAULT": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
  /** Physical pin 15: COM; power_in. */
  "COM_15": "15",
  /** Physical pin 16: CSH1; passive. */
  "CSH1": "16",
  /** Physical pin 17: VB1; power_in. */
  "VB1": "17",
  /** Physical pin 18: VS1; output. */
  "VS1_18": "18",
  /** Physical pin 19: VP1; power_in. */
  "VP1": "19",
  /** Physical pin 20: VS1; passive. */
  "VS1_20": "20",
  /** Physical pin 21: VN1; power_in. */
  "VN1": "21",
  /** Physical pin 28: COM; passive. */
  "COM_28": "28",
  /** Physical pin 29: NC; no_connect. */
  "NC_29": "29",
  /** Physical pin 30: NC; no_connect. */
  "NC_30": "30",
  /** Physical pin 31: COM; passive. */
  "COM_31": "31",
  /** Physical pin 2: COMP2; output. */
  "COMP2": "2",
  /** Physical pin 3: IN-2; input. */
  "IN-2": "3",
  /** Physical pin 4: IN+2; input. */
  "IN+2": "4",
  /** Physical pin 22: VN2; power_in. */
  "VN2": "22",
  /** Physical pin 23: VS2; output. */
  "VS2_23": "23",
  /** Physical pin 24: VP2; power_in. */
  "VP2": "24",
  /** Physical pin 25: VS2; passive. */
  "VS2_25": "25",
  /** Physical pin 26: VB2; power_in. */
  "VB2": "26",
  /** Physical pin 27: CSH2; passive. */
  "CSH2": "27",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR4321 extends Component.withPins({
  /** Physical pin 1: VAA; power_in. */
  "VAA": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: IN-; input. */
  "IN-": "4",
  /** Physical pin 5: COMP; output. */
  "COMP": "5",
  /** Physical pin 6: CSD; passive. */
  "CSD": "6",
  /** Physical pin 7: VSS; power_in. */
  "VSS": "7",
  /** Physical pin 8: VCC; power_in. */
  "VCC": "8",
  /** Physical pin 9: COM; power_in. */
  "COM_9": "9",
  /** Physical pin 10: VN; power_in. */
  "VN": "10",
  /** Physical pin 11: VS; output. */
  "VS": "11",
  /** Physical pin 12: VP; power_in. */
  "VP": "12",
  /** Physical pin 13: VB; power_in. */
  "VB": "13",
  /** Physical pin 14: CSH; passive. */
  "CSH": "14",
  /** Physical pin 15: COM; passive. */
  "COM_15": "15",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IR4322 extends Component.withPins({
  /** Physical pin 1: CLIP; open_collector. */
  "CLIP": "1",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS": "6",
  /** Physical pin 7: VAA; power_in. */
  "VAA": "7",
  /** Physical pin 8: IN+1; input. */
  "IN+1": "8",
  /** Physical pin 9: IN-1; input. */
  "IN-1": "9",
  /** Physical pin 10: COMP1; output. */
  "COMP1": "10",
  /** Physical pin 11: CSD; passive. */
  "CSD": "11",
  /** Physical pin 12: FAULT; open_collector. */
  "FAULT": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VCC; power_in. */
  "VCC": "14",
  /** Physical pin 15: COM; power_in. */
  "COM_15": "15",
  /** Physical pin 16: CSH1; passive. */
  "CSH1": "16",
  /** Physical pin 17: VB1; power_in. */
  "VB1": "17",
  /** Physical pin 18: VS1; output. */
  "VS1_18": "18",
  /** Physical pin 19: VP1; power_in. */
  "VP1": "19",
  /** Physical pin 20: VS1; passive. */
  "VS1_20": "20",
  /** Physical pin 21: VN1; power_in. */
  "VN1": "21",
  /** Physical pin 28: COM; passive. */
  "COM_28": "28",
  /** Physical pin 29: NC; no_connect. */
  "NC_29": "29",
  /** Physical pin 30: NC; no_connect. */
  "NC_30": "30",
  /** Physical pin 31: COM; passive. */
  "COM_31": "31",
  /** Physical pin 2: COMP2; output. */
  "COMP2": "2",
  /** Physical pin 3: IN-2; input. */
  "IN-2": "3",
  /** Physical pin 4: IN+2; input. */
  "IN+2": "4",
  /** Physical pin 22: VN2; power_in. */
  "VN2": "22",
  /** Physical pin 23: VS2; output. */
  "VS2_23": "23",
  /** Physical pin 24: VP2; power_in. */
  "VP2": "24",
  /** Physical pin 25: VS2; passive. */
  "VS2_25": "25",
  /** Physical pin 26: VB2; power_in. */
  "VB2": "26",
  /** Physical pin 27: CSH2; passive. */
  "CSH2": "27",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2052M extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC_1": "1",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: VS1; passive. */
  "VS1": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: HO1; output. */
  "HO1": "14",
  /** Physical pin 15: VB1; power_in. */
  "VB1": "15",
  /** Physical pin 16: CSH1; passive. */
  "CSH1": "16",
  /** Physical pin 17: LO1; output. */
  "LO1": "17",
  /** Physical pin 19: COM; passive. */
  "COM_19": "19",
  /** Physical pin 24: NC; no_connect. */
  "NC_24": "24",
  /** Physical pin 25: NC; no_connect. */
  "NC_25": "25",
  /** Physical pin 27: NC; no_connect. */
  "NC_27": "27",
  /** Physical pin 28: NC; no_connect. */
  "NC_28": "28",
  /** Physical pin 29: OTP; passive. */
  "OTP": "29",
  /** Physical pin 30: COM; power_in. */
  "COM_30": "30",
  /** Physical pin 31: VCC; power_in. */
  "VCC": "31",
  /** Physical pin 32: DT; passive. */
  "DT": "32",
  /** Physical pin 33: OCSET; passive. */
  "OCSET": "33",
  /** Physical pin 34: VREF; power_out. */
  "VREF": "34",
  /** Physical pin 35: NC; no_connect. */
  "NC_35": "35",
  /** Physical pin 36: NC; no_connect. */
  "NC_36": "36",
  /** Physical pin 37: NC; no_connect. */
  "NC_37": "37",
  /** Physical pin 41: GND; power_in. */
  "GND": "41",
  /** Physical pin 42: VSS; power_in. */
  "VSS": "42",
  /** Physical pin 43: VAA; power_in. */
  "VAA": "43",
  /** Physical pin 44: IN1; input. */
  "IN1": "44",
  /** Physical pin 45: COMP1; output. */
  "COMP1": "45",
  /** Physical pin 46: CLIP1; open_collector. */
  "CLIP1": "46",
  /** Physical pin 47: CSD; passive. */
  "CSD": "47",
  /** Physical pin 48: NC; no_connect. */
  "NC_48": "48",
  /** Physical pin 49: COM; passive. */
  "COM_49": "49",
  /** Physical pin 2: OTW; open_collector. */
  "OTW": "2",
  /** Physical pin 3: FAULT; open_collector. */
  "FAULT": "3",
  /** Physical pin 4: CKO; output. */
  "CKO": "4",
  /** Physical pin 5: X1B; output. */
  "X1B": "5",
  /** Physical pin 6: X1A; input. */
  "X1A": "6",
  /** Physical pin 7: X2B; output. */
  "X2B": "7",
  /** Physical pin 8: X2A; input. */
  "X2A": "8",
  /** Physical pin 9: XSL; input. */
  "XSL": "9",
  /** Physical pin 18: VCC2; power_in. */
  "VCC2": "18",
  /** Physical pin 20: LO2; output. */
  "LO2": "20",
  /** Physical pin 21: CSH2; passive. */
  "CSH2": "21",
  /** Physical pin 22: VB2; power_in. */
  "VB2": "22",
  /** Physical pin 23: HO2; output. */
  "HO2": "23",
  /** Physical pin 26: VS2; passive. */
  "VS2": "26",
  /** Physical pin 38: CLIP2; open_collector. */
  "CLIP2": "38",
  /** Physical pin 39: COMP2; output. */
  "COMP2": "39",
  /** Physical pin 40: IN2; input. */
  "IN2": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2092 extends Component.withPins({
  /** Physical pin 1: VAA; power_in. */
  "VAA": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: IN-; input. */
  "IN-": "3",
  /** Physical pin 4: COMP; output. */
  "COMP": "4",
  /** Physical pin 5: CSD; passive. */
  "CSD": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS": "6",
  /** Physical pin 7: VREF; power_out. */
  "VREF": "7",
  /** Physical pin 8: OCSET; passive. */
  "OCSET": "8",
  /** Physical pin 9: DT; passive. */
  "DT": "9",
  /** Physical pin 10: COM; power_in. */
  "COM": "10",
  /** Physical pin 11: LO; output. */
  "LO": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: VS; passive. */
  "VS": "13",
  /** Physical pin 14: HO; output. */
  "HO": "14",
  /** Physical pin 15: VB; power_in. */
  "VB": "15",
  /** Physical pin 16: CSH; passive. */
  "CSH": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2092S extends Component.withPins({
  /** Physical pin 1: VAA; power_in. */
  "VAA": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: IN-; input. */
  "IN-": "3",
  /** Physical pin 4: COMP; output. */
  "COMP": "4",
  /** Physical pin 5: CSD; passive. */
  "CSD": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS": "6",
  /** Physical pin 7: VREF; power_out. */
  "VREF": "7",
  /** Physical pin 8: OCSET; passive. */
  "OCSET": "8",
  /** Physical pin 9: DT; passive. */
  "DT": "9",
  /** Physical pin 10: COM; power_in. */
  "COM": "10",
  /** Physical pin 11: LO; output. */
  "LO": "11",
  /** Physical pin 12: VCC; power_in. */
  "VCC": "12",
  /** Physical pin 13: VS; passive. */
  "VS": "13",
  /** Physical pin 14: HO; output. */
  "HO": "14",
  /** Physical pin 15: VB; power_in. */
  "VB": "15",
  /** Physical pin 16: CSH; passive. */
  "CSH": "16",
}) {
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
 * Units: 4.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2093M extends Component.withPins({
  /** Physical pin 1: DS; input. */
  "DS": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 11: VS1; passive. */
  "VS1": "11",
  /** Physical pin 12: HO1; output. */
  "HO1": "12",
  /** Physical pin 13: VB1; power_in. */
  "VB1": "13",
  /** Physical pin 14: CSH1; passive. */
  "CSH1": "14",
  /** Physical pin 15: LO1; output. */
  "LO1": "15",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: COM; passive. */
  "COM_20": "20",
  /** Physical pin 31: NC; no_connect. */
  "NC_31": "31",
  /** Physical pin 32: COM; power_in. */
  "COM_32": "32",
  /** Physical pin 33: VCC; power_in. */
  "VCC": "33",
  /** Physical pin 34: DT; passive. */
  "DT": "34",
  /** Physical pin 35: OCSET; passive. */
  "OCSET": "35",
  /** Physical pin 36: VREF; power_out. */
  "VREF": "36",
  /** Physical pin 41: GND; power_in. */
  "GND": "41",
  /** Physical pin 42: VSS; power_in. */
  "VSS": "42",
  /** Physical pin 43: VAA; power_in. */
  "VAA": "43",
  /** Physical pin 46: IN1; input. */
  "IN1": "46",
  /** Physical pin 47: COMP1; output. */
  "COMP1": "47",
  /** Physical pin 48: CSD; passive. */
  "CSD": "48",
  /** Physical pin 49: COM; passive. */
  "COM_49": "49",
  /** Physical pin 7: CSH2; passive. */
  "CSH2": "7",
  /** Physical pin 8: VB2; power_in. */
  "VB2": "8",
  /** Physical pin 9: HO2; output. */
  "HO2": "9",
  /** Physical pin 10: VS2; passive. */
  "VS2": "10",
  /** Physical pin 16: LO2; output. */
  "LO2": "16",
  /** Physical pin 17: VCC2; power_in. */
  "VCC2": "17",
  /** Physical pin 44: IN2; input. */
  "IN2": "44",
  /** Physical pin 45: COMP2; output. */
  "COMP2": "45",
  /** Physical pin 22: LO3; output. */
  "LO3": "22",
  /** Physical pin 23: CSH3; passive. */
  "CSH3": "23",
  /** Physical pin 24: VB3; power_in. */
  "VB3": "24",
  /** Physical pin 25: HO3; output. */
  "HO3": "25",
  /** Physical pin 26: VS3; passive. */
  "VS3": "26",
  /** Physical pin 37: COMP3; output. */
  "COMP3": "37",
  /** Physical pin 38: IN3; input. */
  "IN3": "38",
  /** Physical pin 21: LO4; output. */
  "LO4": "21",
  /** Physical pin 27: VS4; passive. */
  "VS4": "27",
  /** Physical pin 28: HO4; output. */
  "HO4": "28",
  /** Physical pin 29: VB4; power_in. */
  "VB4": "29",
  /** Physical pin 30: CSH4; passive. */
  "CSH4": "30",
  /** Physical pin 39: COMP4; output. */
  "COMP4": "39",
  /** Physical pin 40: IN4; input. */
  "IN4": "40",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS20957S extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: CSD; passive. */
  "CSD": "2",
  /** Physical pin 3: IN; input. */
  "IN": "3",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: VREF; power_out. */
  "VREF": "6",
  /** Physical pin 7: OCSET; passive. */
  "OCSET": "7",
  /** Physical pin 8: DT; passive. */
  "DT": "8",
  /** Physical pin 9: COM; power_in. */
  "COM": "9",
  /** Physical pin 10: LO; output. */
  "LO": "10",
  /** Physical pin 11: VCC; power_in. */
  "VCC": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: VS; passive. */
  "VS": "13",
  /** Physical pin 14: HO; output. */
  "HO": "14",
  /** Physical pin 15: VB; power_in. */
  "VB": "15",
  /** Physical pin 16: CSH; passive. */
  "CSH": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS20965S extends Component.withPins({
  /** Physical pin 1: VDD; power_in. */
  "VDD": "1",
  /** Physical pin 2: CSD; passive. */
  "CSD": "2",
  /** Physical pin 3: OC; open_collector. */
  "OC": "3",
  /** Physical pin 4: HIN; input. */
  "HIN": "4",
  /** Physical pin 5: LIN; input. */
  "LIN": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS": "6",
  /** Physical pin 7: VREF; power_out. */
  "VREF": "7",
  /** Physical pin 8: OCSET; passive. */
  "OCSET": "8",
  /** Physical pin 9: COM; power_in. */
  "COM": "9",
  /** Physical pin 10: LO; output. */
  "LO": "10",
  /** Physical pin 11: VCC; power_in. */
  "VCC": "11",
  /** Physical pin 12: STP; input. */
  "STP": "12",
  /** Physical pin 13: VS; passive. */
  "VS": "13",
  /** Physical pin 14: HO; output. */
  "HO": "14",
  /** Physical pin 15: VB; power_in. */
  "VB": "15",
  /** Physical pin 16: CSH; passive. */
  "CSH": "16",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IRS2452AM extends Component.withPins({
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 5: VAA; power_in. */
  "VAA": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: IN+1; input. */
  "IN+1": "8",
  /** Physical pin 9: IN-1; input. */
  "IN-1": "9",
  /** Physical pin 10: COMP1; output. */
  "COMP1": "10",
  /** Physical pin 11: CSD; passive. */
  "CSD": "11",
  /** Physical pin 12: BTL; input. */
  "BTL": "12",
  /** Physical pin 13: CSH1; passive. */
  "CSH1": "13",
  /** Physical pin 14: VB1; power_in. */
  "VB1": "14",
  /** Physical pin 15: HO1; output. */
  "HO1": "15",
  /** Physical pin 16: VS1; passive. */
  "VS1": "16",
  /** Physical pin 17: CSL1; passive. */
  "CSL1": "17",
  /** Physical pin 18: LO1; output. */
  "LO1": "18",
  /** Physical pin 19: NC; no_connect. */
  "NC_19": "19",
  /** Physical pin 20: COM; power_in. */
  "COM_20": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: VCC; power_in. */
  "VCC": "22",
  /** Physical pin 23: OTP; passive. */
  "OTP": "23",
  /** Physical pin 24: DT; passive. */
  "DT": "24",
  /** Physical pin 31: A/B; input. */
  "A/B": "31",
  /** Physical pin 33: COM; passive. */
  "COM_33": "33",
  /** Physical pin 1: COMP2; output. */
  "COMP2": "1",
  /** Physical pin 2: IN-2; input. */
  "IN-2": "2",
  /** Physical pin 3: IN+2; input. */
  "IN+2": "3",
  /** Physical pin 25: LO2; output. */
  "LO2": "25",
  /** Physical pin 26: CSL2; passive. */
  "CSL2": "26",
  /** Physical pin 27: VS2; passive. */
  "VS2": "27",
  /** Physical pin 28: HO2; output. */
  "HO2": "28",
  /** Physical pin 29: VB2; power_in. */
  "VB2": "29",
  /** Physical pin 30: CSH2; passive. */
  "CSH2": "30",
  /** Physical pin 32: CLK; input. */
  "CLK": "32",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS31AP4991_GRLS2 extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 2: unnamed; output. */
  "P2": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: BYP; passive. */
  "BYP": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: ~{SDB}; input. */
  "~{SDB}": "7",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class IS31AP4991_SLS2 extends Component.withPins({
  /** Physical pin 1: ~{SDB}; input. */
  "~{SDB}": "1",
  /** Physical pin 2: BYP; passive. */
  "BYP": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM1875 extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: V-; power_in. */
  "V-": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM1876 extends Component.withPins({
  /** Physical pin 2: V+; power_in. */
  "V+_2": "2",
  /** Physical pin 3: unnamed; output. */
  "P3": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: MUTE; input. */
  "MUTE_6": "6",
  /** Physical pin 7: -; input. */
  "-_7": "7",
  /** Physical pin 8: +; input. */
  "+_8": "8",
  /** Physical pin 9: STBY; input. */
  "STBY_9": "9",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: MUTE; input. */
  "MUTE_11": "11",
  /** Physical pin 12: -; input. */
  "-_12": "12",
  /** Physical pin 13: +; input. */
  "+_13": "13",
  /** Physical pin 14: STBY; input. */
  "STBY_14": "14",
  /** Physical pin 15: V+; power_in. */
  "V+_15": "15",
}) {
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
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM1877 extends Component.withPins({
  /** Physical pin 1: BIAS; input. */
  "BIAS": "1",
  /** Physical pin 2: unnamed; output. */
  "P2": "2",
  /** Physical pin 6: +; input. */
  "+_6": "6",
  /** Physical pin 7: -; input. */
  "-_7": "7",
  /** Physical pin 8: -; input. */
  "-_8": "8",
  /** Physical pin 9: +; input. */
  "+_9": "9",
  /** Physical pin 13: unnamed; output. */
  "P13": "13",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 14: V+; power_in. */
  "V+": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM2876 extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: unnamed; output. */
  "P3": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: MUTE; input. */
  "MUTE": "8",
  /** Physical pin 9: -; input. */
  "-": "9",
  /** Physical pin 10: +; input. */
  "+": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM380N extends Component.withPins({
  /** Physical pin 1: BYPASS; passive. */
  "BYPASS": "1",
  /** Physical pin 2: +; input. */
  "+": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: -; input. */
  "-": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VS; power_in. */
  "VS": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM380N_8 extends Component.withPins({
  /** Physical pin 1: NC; no_connect. */
  "NC": "1",
  /** Physical pin 2: +; input. */
  "+": "2",
  /** Physical pin 3: -; input. */
  "-": "3",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: VS; power_in. */
  "VS": "7",
  /** Physical pin 8: BYPASS; passive. */
  "BYPASS": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM384 extends Component.withPins({
  /** Physical pin 1: BYPASS; passive. */
  "BYPASS": "1",
  /** Physical pin 2: +; input. */
  "+": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: -; input. */
  "-": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: GND; passive. */
  "GND_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: VS; power_in. */
  "VS": "14",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM386 extends Component.withPins({
  /** Physical pin 1: GAIN; input. */
  "GAIN_1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
  /** Physical pin 7: BYPASS; input. */
  "BYPASS": "7",
  /** Physical pin 8: GAIN; input. */
  "GAIN_8": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM3886 extends Component.withPins({
  /** Physical pin 1: V+; power_in. */
  "V+_1": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: unnamed; output. */
  "P3": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: V+; passive. */
  "V+_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: MUTE; input. */
  "MUTE": "8",
  /** Physical pin 9: -; input. */
  "-": "9",
  /** Physical pin 10: +; input. */
  "+": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
}) {
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
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM4752TS extends Component.withPins({
  /** Physical pin 5: BIAS; input. */
  "BIAS": "5",
  /** Physical pin 6: +; input. */
  "+_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: +; input. */
  "+_2": "2",
  /** Physical pin 3: V+; power_in. */
  "V+": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
}) {
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
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM4755TS extends Component.withPins({
  /** Physical pin 2: MUTE; input. */
  "MUTE": "2",
  /** Physical pin 6: BIAS; input. */
  "BIAS": "6",
  /** Physical pin 7: +; input. */
  "+_7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC": "9",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 4: V+; power_in. */
  "V+": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM4766 extends Component.withPins({
  /** Physical pin 2: V+; power_in. */
  "V+_2": "2",
  /** Physical pin 3: unnamed; output. */
  "P3": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: GND; power_in. */
  "GND_5": "5",
  /** Physical pin 6: MUTE; input. */
  "MUTE_6": "6",
  /** Physical pin 7: -; input. */
  "-_7": "7",
  /** Physical pin 8: +; input. */
  "+_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 10: GND; power_in. */
  "GND_10": "10",
  /** Physical pin 11: MUTE; input. */
  "MUTE_11": "11",
  /** Physical pin 12: -; input. */
  "-_12": "12",
  /** Physical pin 13: +; input. */
  "+_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: V+; power_in. */
  "V+_15": "15",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM4810 extends Component.withPins({
  /** Physical pin 1: VOUT1; output. */
  "VOUT1": "1",
  /** Physical pin 2: VIN1; input. */
  "VIN1": "2",
  /** Physical pin 3: BYPASS; passive. */
  "BYPASS": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: SHDN; input. */
  "SHDN": "5",
  /** Physical pin 6: VIN2; input. */
  "VIN2": "6",
  /** Physical pin 7: VOUT2; output. */
  "VOUT2": "7",
  /** Physical pin 8: VDD; power_in. */
  "VDD": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM4811 extends Component.withPins({
  /** Physical pin 1: VOUT1; output. */
  "VOUT1": "1",
  /** Physical pin 2: VIN1; input. */
  "VIN1": "2",
  /** Physical pin 3: BYPASS; passive. */
  "BYPASS": "3",
  /** Physical pin 4: CLOCK; input. */
  "CLOCK": "4",
  /** Physical pin 5: GND; power_in. */
  "GND": "5",
  /** Physical pin 6: UP/DN; input. */
  "UP/DN": "6",
  /** Physical pin 7: SHDN; input. */
  "SHDN": "7",
  /** Physical pin 8: VIN2; input. */
  "VIN2": "8",
  /** Physical pin 9: VOUT2; output. */
  "VOUT2": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD": "10",
}) {
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
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM4950TS extends Component.withPins({
  /** Physical pin 1: VINA; input. */
  "VINA": "1",
  /** Physical pin 2: ~{SHDN}; input. */
  "~{SHDN}": "2",
  /** Physical pin 3: unnamed; output. */
  "P3": "3",
  /** Physical pin 8: BYP; passive. */
  "BYP": "8",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 9: VINB; input. */
  "VINB": "9",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
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
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM4950TA extends Component.withPins({
  /** Physical pin 1: VINA; input. */
  "VINA": "1",
  /** Physical pin 2: ~{SHDN}; input. */
  "~{SHDN}": "2",
  /** Physical pin 3: unnamed; output. */
  "P3": "3",
  /** Physical pin 8: BYP; passive. */
  "BYP": "8",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 9: VINB; input. */
  "VINB": "9",
  /** Physical pin 4: GND; power_in. */
  "GND_4": "4",
  /** Physical pin 5: GND; passive. */
  "GND_5": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM4990ITL extends Component.withPins({
  /** Physical pin A1: -; input. */
  "-": "A1",
  /** Physical pin A2: unnamed; output. */
  "PA2": "A2",
  /** Physical pin A3: +; input. */
  "+": "A3",
  /** Physical pin B1: GND; power_in. */
  "GND_B1": "B1",
  /** Physical pin B2: GND; passive. */
  "GND_B2": "B2",
  /** Physical pin B3: V+; power_in. */
  "V+": "B3",
  /** Physical pin C1: BYP; input. */
  "BYP": "C1",
  /** Physical pin C2: unnamed; output. */
  "PC2": "C2",
  /** Physical pin C3: ~{SHDN}; input. */
  "~{SHDN}": "C3",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM4990LD extends Component.withPins({
  /** Physical pin 1: SHDN; input. */
  "SHDN": "1",
  /** Physical pin 2: BYP; input. */
  "BYP": "2",
  /** Physical pin 3: SD; input. */
  "SD": "3",
  /** Physical pin 4: +; input. */
  "+": "4",
  /** Physical pin 5: -; input. */
  "-": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: unnamed; output. */
  "P10": "10",
  /** Physical pin 11: unnamed; power_in. */
  "P11": "11",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM4990MH extends Component.withPins({
  /** Physical pin 1: ~{SHDN}; input. */
  "~{SHDN}": "1",
  /** Physical pin 2: BYP; input. */
  "BYP": "2",
  /** Physical pin 3: SD; input. */
  "SD": "3",
  /** Physical pin 4: +; input. */
  "+": "4",
  /** Physical pin 5: -; input. */
  "-": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: unnamed; output. */
  "P10": "10",
  /** Physical pin 11: unnamed; power_in. */
  "P11": "11",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM4990MM extends Component.withPins({
  /** Physical pin 1: ~{SHDN}; input. */
  "~{SHDN}": "1",
  /** Physical pin 2: BYP; input. */
  "BYP": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: -; input. */
  "-": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LME49600 extends Component.withPins({
  /** Physical pin 1: BW; passive. */
  "BW": "1",
  /** Physical pin 2: IN; input. */
  "IN": "2",
  /** Physical pin 3: V-; power_in. */
  "V-": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MA12040 extends Component.withPins({
  /** Physical pin 1: PVSS; power_in. */
  "PVSS_1": "1",
  /** Physical pin 2: PVSS; passive. */
  "PVSS_2": "2",
  /** Physical pin 3: CF0AN; passive. */
  "CF0AN": "3",
  /** Physical pin 4: OUT0A; output. */
  "OUT0A_4": "4",
  /** Physical pin 5: OUT0A; passive. */
  "OUT0A_5": "5",
  /** Physical pin 6: CF0AP; passive. */
  "CF0AP": "6",
  /** Physical pin 7: PVDD; power_in. */
  "PVDD_7": "7",
  /** Physical pin 8: PVDD; passive. */
  "PVDD_8": "8",
  /** Physical pin 9: CF0BP; passive. */
  "CF0BP": "9",
  /** Physical pin 10: OUT0B; output. */
  "OUT0B_10": "10",
  /** Physical pin 11: OUT0B; passive. */
  "OUT0B_11": "11",
  /** Physical pin 12: CF0BN; passive. */
  "CF0BN": "12",
  /** Physical pin 13: PVSS; passive. */
  "PVSS_13": "13",
  /** Physical pin 14: PVSS; passive. */
  "PVSS_14": "14",
  /** Physical pin 15: ~{CLIP}; output. */
  "~{CLIP}": "15",
  /** Physical pin 16: ~{ERROR}; output. */
  "~{ERROR}": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: CMSE; passive. */
  "CMSE": "18",
  /** Physical pin 19: AVSS; power_in. */
  "AVSS_19": "19",
  /** Physical pin 20: CREF; passive. */
  "CREF": "20",
  /** Physical pin 21: IN0A; input. */
  "IN0A": "21",
  /** Physical pin 22: IN0B; input. */
  "IN0B": "22",
  /** Physical pin 23: IN1A; input. */
  "IN1A": "23",
  /** Physical pin 24: IN1B; input. */
  "IN1B": "24",
  /** Physical pin 25: AVSS; passive. */
  "AVSS_25": "25",
  /** Physical pin 26: DVSS; power_in. */
  "DVSS_26": "26",
  /** Physical pin 27: SCL; input. */
  "SCL": "27",
  /** Physical pin 28: AD0; input. */
  "AD0": "28",
  /** Physical pin 29: AD1; input. */
  "AD1": "29",
  /** Physical pin 30: SDA; bidirectional. */
  "SDA": "30",
  /** Physical pin 31: CLKM/S; input. */
  "CLKM/S": "31",
  /** Physical pin 32: CLKIO; bidirectional. */
  "CLKIO": "32",
  /** Physical pin 33: ~{ENABLE}; input. */
  "~{ENABLE}": "33",
  /** Physical pin 34: ~{MUTE}; input. */
  "~{MUTE}": "34",
  /** Physical pin 35: PVSS; passive. */
  "PVSS_35": "35",
  /** Physical pin 36: PVSS; passive. */
  "PVSS_36": "36",
  /** Physical pin 37: CF1BN; passive. */
  "CF1BN": "37",
  /** Physical pin 38: OUT1B; output. */
  "OUT1B_38": "38",
  /** Physical pin 39: OUT1B; passive. */
  "OUT1B_39": "39",
  /** Physical pin 40: CF1BP; passive. */
  "CF1BP": "40",
  /** Physical pin 41: PVDD; power_in. */
  "PVDD_41": "41",
  /** Physical pin 42: PVDD; passive. */
  "PVDD_42": "42",
  /** Physical pin 43: CF1AP; passive. */
  "CF1AP": "43",
  /** Physical pin 44: OUT1A; output. */
  "OUT1A_44": "44",
  /** Physical pin 45: OUT1A; passive. */
  "OUT1A_45": "45",
  /** Physical pin 46: CF1AN; passive. */
  "CF1AN": "46",
  /** Physical pin 47: PVSS; passive. */
  "PVSS_47": "47",
  /** Physical pin 48: PVSS; passive. */
  "PVSS_48": "48",
  /** Physical pin 49: NC; passive. */
  "NC_49": "49",
  /** Physical pin 50: MSEL1; input. */
  "MSEL1": "50",
  /** Physical pin 51: MSEL0; input. */
  "MSEL0": "51",
  /** Physical pin 52: CGD1N; passive. */
  "CGD1N": "52",
  /** Physical pin 53: CGD1P; passive. */
  "CGD1P": "53",
  /** Physical pin 54: VGDC; passive. */
  "VGDC": "54",
  /** Physical pin 55: DVDD; power_in. */
  "DVDD": "55",
  /** Physical pin 56: CDC; passive. */
  "CDC": "56",
  /** Physical pin 57: CFDCP; passive. */
  "CFDCP": "57",
  /** Physical pin 58: CFDCN; passive. */
  "CFDCN": "58",
  /** Physical pin 59: DVSS; passive. */
  "DVSS_59": "59",
  /** Physical pin 60: CGD0P; passive. */
  "CGD0P": "60",
  /** Physical pin 61: CGD0N; passive. */
  "CGD0N": "61",
  /** Physical pin 62: CFGDP; passive. */
  "CFGDP": "62",
  /** Physical pin 63: CFGDN; passive. */
  "CFGDN": "63",
  /** Physical pin 64: NC; passive. */
  "NC_64": "64",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MA12040P extends Component.withPins({
  /** Physical pin 1: PVSS; power_in. */
  "PVSS_1": "1",
  /** Physical pin 2: PVSS; passive. */
  "PVSS_2": "2",
  /** Physical pin 3: CF0AN; passive. */
  "CF0AN": "3",
  /** Physical pin 4: OUT0A; output. */
  "OUT0A_4": "4",
  /** Physical pin 5: OUT0A; passive. */
  "OUT0A_5": "5",
  /** Physical pin 6: CF0AP; passive. */
  "CF0AP": "6",
  /** Physical pin 7: PVDD; power_in. */
  "PVDD_7": "7",
  /** Physical pin 8: PVDD; passive. */
  "PVDD_8": "8",
  /** Physical pin 9: CF0BP; passive. */
  "CF0BP": "9",
  /** Physical pin 10: OUT0B; output. */
  "OUT0B_10": "10",
  /** Physical pin 11: OUT0B; passive. */
  "OUT0B_11": "11",
  /** Physical pin 12: CF0BN; passive. */
  "CF0BN": "12",
  /** Physical pin 13: PVSS; passive. */
  "PVSS_13": "13",
  /** Physical pin 14: PVSS; passive. */
  "PVSS_14": "14",
  /** Physical pin 15: ~{CLIP}; output. */
  "~{CLIP}": "15",
  /** Physical pin 16: ~{ERROR}; output. */
  "~{ERROR}": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: CMSE; passive. */
  "CMSE": "18",
  /** Physical pin 19: AVSS; power_in. */
  "AVSS_19": "19",
  /** Physical pin 20: CREF; passive. */
  "CREF": "20",
  /** Physical pin 21: SCLK; input. */
  "SCLK": "21",
  /** Physical pin 22: WS; input. */
  "WS": "22",
  /** Physical pin 23: SD0; input. */
  "SD0": "23",
  /** Physical pin 24: SD1; input. */
  "SD1": "24",
  /** Physical pin 25: AVSS; passive. */
  "AVSS_25": "25",
  /** Physical pin 26: DVSS; power_in. */
  "DVSS_26": "26",
  /** Physical pin 27: SCL; input. */
  "SCL": "27",
  /** Physical pin 28: AD0; input. */
  "AD0": "28",
  /** Physical pin 29: AD1; input. */
  "AD1": "29",
  /** Physical pin 30: SDA; bidirectional. */
  "SDA": "30",
  /** Physical pin 31: CLKM/S; input. */
  "CLKM/S": "31",
  /** Physical pin 32: CLK; input. */
  "CLK": "32",
  /** Physical pin 33: ~{ENABLE}; input. */
  "~{ENABLE}": "33",
  /** Physical pin 34: ~{MUTE}; input. */
  "~{MUTE}": "34",
  /** Physical pin 35: PVSS; passive. */
  "PVSS_35": "35",
  /** Physical pin 36: PVSS; passive. */
  "PVSS_36": "36",
  /** Physical pin 37: CF1BN; passive. */
  "CF1BN": "37",
  /** Physical pin 38: OUT1B; output. */
  "OUT1B_38": "38",
  /** Physical pin 39: OUT1B; passive. */
  "OUT1B_39": "39",
  /** Physical pin 40: CF1BP; passive. */
  "CF1BP": "40",
  /** Physical pin 41: PVDD; power_in. */
  "PVDD_41": "41",
  /** Physical pin 42: PVDD; passive. */
  "PVDD_42": "42",
  /** Physical pin 43: CF1AP; passive. */
  "CF1AP": "43",
  /** Physical pin 44: OUT1A; output. */
  "OUT1A_44": "44",
  /** Physical pin 45: OUT1A; passive. */
  "OUT1A_45": "45",
  /** Physical pin 46: CF1AN; passive. */
  "CF1AN": "46",
  /** Physical pin 47: PVSS; passive. */
  "PVSS_47": "47",
  /** Physical pin 48: PVSS; passive. */
  "PVSS_48": "48",
  /** Physical pin 49: NC; passive. */
  "NC_49": "49",
  /** Physical pin 50: MSEL1; input. */
  "MSEL1": "50",
  /** Physical pin 51: MSEL0; input. */
  "MSEL0": "51",
  /** Physical pin 52: CGD1N; passive. */
  "CGD1N": "52",
  /** Physical pin 53: CGD1P; passive. */
  "CGD1P": "53",
  /** Physical pin 54: VGDC; passive. */
  "VGDC": "54",
  /** Physical pin 55: DVDD; power_in. */
  "DVDD": "55",
  /** Physical pin 56: CDC; passive. */
  "CDC": "56",
  /** Physical pin 57: CFDCP; passive. */
  "CFDCP": "57",
  /** Physical pin 58: CFDCN; passive. */
  "CFDCN": "58",
  /** Physical pin 59: DVSS; passive. */
  "DVSS_59": "59",
  /** Physical pin 60: CGD0P; passive. */
  "CGD0P": "60",
  /** Physical pin 61: CGD0N; passive. */
  "CGD0N": "61",
  /** Physical pin 62: CFGDP; passive. */
  "CFGDP": "62",
  /** Physical pin 63: CFGDN; passive. */
  "CFGDN": "63",
  /** Physical pin 64: NC; passive. */
  "NC_64": "64",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MA12070 extends Component.withPins({
  /** Physical pin 1: PVSS; power_in. */
  "PVSS_1": "1",
  /** Physical pin 2: PVSS; passive. */
  "PVSS_2": "2",
  /** Physical pin 3: CF0AN; passive. */
  "CF0AN": "3",
  /** Physical pin 4: OUT0A; output. */
  "OUT0A_4": "4",
  /** Physical pin 5: OUT0A; passive. */
  "OUT0A_5": "5",
  /** Physical pin 6: CF0AP; passive. */
  "CF0AP": "6",
  /** Physical pin 7: PVDD; power_in. */
  "PVDD_7": "7",
  /** Physical pin 8: PVDD; passive. */
  "PVDD_8": "8",
  /** Physical pin 9: CF0BP; passive. */
  "CF0BP": "9",
  /** Physical pin 10: OUT0B; output. */
  "OUT0B_10": "10",
  /** Physical pin 11: OUT0B; passive. */
  "OUT0B_11": "11",
  /** Physical pin 12: CF0BN; passive. */
  "CF0BN": "12",
  /** Physical pin 13: PVSS; passive. */
  "PVSS_13": "13",
  /** Physical pin 14: PVSS; passive. */
  "PVSS_14": "14",
  /** Physical pin 15: ~{CLIP}; output. */
  "~{CLIP}": "15",
  /** Physical pin 16: ~{ERROR}; output. */
  "~{ERROR}": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: CMSE; passive. */
  "CMSE": "18",
  /** Physical pin 19: AVSS; power_in. */
  "AVSS_19": "19",
  /** Physical pin 20: CREF; passive. */
  "CREF": "20",
  /** Physical pin 21: IN0A; input. */
  "IN0A": "21",
  /** Physical pin 22: IN0B; input. */
  "IN0B": "22",
  /** Physical pin 23: IN1A; input. */
  "IN1A": "23",
  /** Physical pin 24: IN1B; input. */
  "IN1B": "24",
  /** Physical pin 25: AVSS; passive. */
  "AVSS_25": "25",
  /** Physical pin 26: DVSS; power_in. */
  "DVSS_26": "26",
  /** Physical pin 27: SCL; input. */
  "SCL": "27",
  /** Physical pin 28: AD0; input. */
  "AD0": "28",
  /** Physical pin 29: AD1; input. */
  "AD1": "29",
  /** Physical pin 30: SDA; bidirectional. */
  "SDA": "30",
  /** Physical pin 31: CLKM/S; input. */
  "CLKM/S": "31",
  /** Physical pin 32: CLKIO; bidirectional. */
  "CLKIO": "32",
  /** Physical pin 33: ~{ENABLE}; input. */
  "~{ENABLE}": "33",
  /** Physical pin 34: ~{MUTE}; input. */
  "~{MUTE}": "34",
  /** Physical pin 35: PVSS; passive. */
  "PVSS_35": "35",
  /** Physical pin 36: PVSS; passive. */
  "PVSS_36": "36",
  /** Physical pin 37: CF1BN; passive. */
  "CF1BN": "37",
  /** Physical pin 38: OUT1B; output. */
  "OUT1B_38": "38",
  /** Physical pin 39: OUT1B; passive. */
  "OUT1B_39": "39",
  /** Physical pin 40: CF1BP; passive. */
  "CF1BP": "40",
  /** Physical pin 41: PVDD; power_in. */
  "PVDD_41": "41",
  /** Physical pin 42: PVDD; passive. */
  "PVDD_42": "42",
  /** Physical pin 43: CF1AP; passive. */
  "CF1AP": "43",
  /** Physical pin 44: OUT1A; output. */
  "OUT1A_44": "44",
  /** Physical pin 45: OUT1A; passive. */
  "OUT1A_45": "45",
  /** Physical pin 46: CF1AN; passive. */
  "CF1AN": "46",
  /** Physical pin 47: PVSS; passive. */
  "PVSS_47": "47",
  /** Physical pin 48: PVSS; passive. */
  "PVSS_48": "48",
  /** Physical pin 49: NC; passive. */
  "NC_49": "49",
  /** Physical pin 50: MSEL1; input. */
  "MSEL1": "50",
  /** Physical pin 51: MSEL0; input. */
  "MSEL0": "51",
  /** Physical pin 52: CGD1N; passive. */
  "CGD1N": "52",
  /** Physical pin 53: CGD1P; passive. */
  "CGD1P": "53",
  /** Physical pin 54: VGDC; passive. */
  "VGDC": "54",
  /** Physical pin 55: DVDD; power_in. */
  "DVDD": "55",
  /** Physical pin 56: CDC; passive. */
  "CDC": "56",
  /** Physical pin 57: CFDCP; passive. */
  "CFDCP": "57",
  /** Physical pin 58: CFDCN; passive. */
  "CFDCN": "58",
  /** Physical pin 59: DVSS; passive. */
  "DVSS_59": "59",
  /** Physical pin 60: CGD0P; passive. */
  "CGD0P": "60",
  /** Physical pin 61: CGD0N; passive. */
  "CGD0N": "61",
  /** Physical pin 62: CFGDP; passive. */
  "CFGDP": "62",
  /** Physical pin 63: CFGDN; passive. */
  "CFGDN": "63",
  /** Physical pin 64: NC; passive. */
  "NC_64": "64",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MA12070P extends Component.withPins({
  /** Physical pin 1: PVSS; power_in. */
  "PVSS_1": "1",
  /** Physical pin 2: PVSS; passive. */
  "PVSS_2": "2",
  /** Physical pin 3: CF0AN; passive. */
  "CF0AN": "3",
  /** Physical pin 4: OUT0A; output. */
  "OUT0A_4": "4",
  /** Physical pin 5: OUT0A; passive. */
  "OUT0A_5": "5",
  /** Physical pin 6: CF0AP; passive. */
  "CF0AP": "6",
  /** Physical pin 7: PVDD; power_in. */
  "PVDD_7": "7",
  /** Physical pin 8: PVDD; passive. */
  "PVDD_8": "8",
  /** Physical pin 9: CF0BP; passive. */
  "CF0BP": "9",
  /** Physical pin 10: OUT0B; output. */
  "OUT0B_10": "10",
  /** Physical pin 11: OUT0B; passive. */
  "OUT0B_11": "11",
  /** Physical pin 12: CF0BN; passive. */
  "CF0BN": "12",
  /** Physical pin 13: PVSS; passive. */
  "PVSS_13": "13",
  /** Physical pin 14: PVSS; passive. */
  "PVSS_14": "14",
  /** Physical pin 15: ~{CLIP}; output. */
  "~{CLIP}": "15",
  /** Physical pin 16: ~{ERROR}; output. */
  "~{ERROR}": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: CMSE; passive. */
  "CMSE": "18",
  /** Physical pin 19: AVSS; power_in. */
  "AVSS_19": "19",
  /** Physical pin 20: CREF; passive. */
  "CREF": "20",
  /** Physical pin 21: SCLK; input. */
  "SCLK": "21",
  /** Physical pin 22: WS; input. */
  "WS": "22",
  /** Physical pin 23: SD0; input. */
  "SD0": "23",
  /** Physical pin 24: SD1; input. */
  "SD1": "24",
  /** Physical pin 25: AVSS; passive. */
  "AVSS_25": "25",
  /** Physical pin 26: DVSS; power_in. */
  "DVSS_26": "26",
  /** Physical pin 27: SCL; input. */
  "SCL": "27",
  /** Physical pin 28: AD0; input. */
  "AD0": "28",
  /** Physical pin 29: AD1; input. */
  "AD1": "29",
  /** Physical pin 30: SDA; bidirectional. */
  "SDA": "30",
  /** Physical pin 31: CLKM/S; input. */
  "CLKM/S": "31",
  /** Physical pin 32: CLK; input. */
  "CLK": "32",
  /** Physical pin 33: ~{ENABLE}; input. */
  "~{ENABLE}": "33",
  /** Physical pin 34: ~{MUTE}; input. */
  "~{MUTE}": "34",
  /** Physical pin 35: PVSS; passive. */
  "PVSS_35": "35",
  /** Physical pin 36: PVSS; passive. */
  "PVSS_36": "36",
  /** Physical pin 37: CF1BN; passive. */
  "CF1BN": "37",
  /** Physical pin 38: OUT1B; output. */
  "OUT1B_38": "38",
  /** Physical pin 39: OUT1B; passive. */
  "OUT1B_39": "39",
  /** Physical pin 40: CF1BP; passive. */
  "CF1BP": "40",
  /** Physical pin 41: PVDD; power_in. */
  "PVDD_41": "41",
  /** Physical pin 42: PVDD; passive. */
  "PVDD_42": "42",
  /** Physical pin 43: CF1AP; passive. */
  "CF1AP": "43",
  /** Physical pin 44: OUT1A; output. */
  "OUT1A_44": "44",
  /** Physical pin 45: OUT1A; passive. */
  "OUT1A_45": "45",
  /** Physical pin 46: CF1AN; passive. */
  "CF1AN": "46",
  /** Physical pin 47: PVSS; passive. */
  "PVSS_47": "47",
  /** Physical pin 48: PVSS; passive. */
  "PVSS_48": "48",
  /** Physical pin 49: NC; passive. */
  "NC_49": "49",
  /** Physical pin 50: MSEL1; input. */
  "MSEL1": "50",
  /** Physical pin 51: MSEL0; input. */
  "MSEL0": "51",
  /** Physical pin 52: CGD1N; passive. */
  "CGD1N": "52",
  /** Physical pin 53: CGD1P; passive. */
  "CGD1P": "53",
  /** Physical pin 54: VGDC; passive. */
  "VGDC": "54",
  /** Physical pin 55: DVDD; power_in. */
  "DVDD": "55",
  /** Physical pin 56: CDC; passive. */
  "CDC": "56",
  /** Physical pin 57: CFDCP; passive. */
  "CFDCP": "57",
  /** Physical pin 58: CFDCN; passive. */
  "CFDCN": "58",
  /** Physical pin 59: DVSS; passive. */
  "DVSS_59": "59",
  /** Physical pin 60: CGD0P; passive. */
  "CGD0P": "60",
  /** Physical pin 61: CGD0N; passive. */
  "CGD0N": "61",
  /** Physical pin 62: CFGDP; passive. */
  "CFGDP": "62",
  /** Physical pin 63: CFGDN; passive. */
  "CFGDN": "63",
  /** Physical pin 64: NC; passive. */
  "NC_64": "64",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX9701xTG extends Component.withPins({
  /** Physical pin 1: ~{SHDN}; input. */
  "~{SHDN}": "1",
  /** Physical pin 2: SYNC; input. */
  "SYNC": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: OUTL+; power_out. */
  "OUTL+": "4",
  /** Physical pin 5: PVDD; power_in. */
  "PVDD_5": "5",
  /** Physical pin 6: PGND; power_in. */
  "PGND_6": "6",
  /** Physical pin 7: OUTL-; power_out. */
  "OUTL-": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: SYNC_OUT; output. */
  "SYNC_OUT": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: OUTR-; power_out. */
  "OUTR-": "12",
  /** Physical pin 13: PGND; passive. */
  "PGND_13": "13",
  /** Physical pin 14: PVDD; power_in. */
  "PVDD_14": "14",
  /** Physical pin 15: OUTR+; power_out. */
  "OUTR+": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 17: GAIN1; input. */
  "GAIN1": "17",
  /** Physical pin 18: GAIN2; input. */
  "GAIN2": "18",
  /** Physical pin 19: INR-; input. */
  "INR-": "19",
  /** Physical pin 20: INR+; input. */
  "INR+": "20",
  /** Physical pin 21: VDD; power_in. */
  "VDD": "21",
  /** Physical pin 22: GND; passive. */
  "GND_22": "22",
  /** Physical pin 23: INL+; input. */
  "INL+": "23",
  /** Physical pin 24: INL-; input. */
  "INL-": "24",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX9715xTE_ extends Component.withPins({
  /** Physical pin 1: PGND; power_in. */
  "PGND_1": "1",
  /** Physical pin 2: OUTL+; output. */
  "OUTL+": "2",
  /** Physical pin 3: OUTL-; output. */
  "OUTL-": "3",
  /** Physical pin 4: PVDD; power_in. */
  "PVDD_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC": "5",
  /** Physical pin 6: GAIN; input. */
  "GAIN": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: ~{SHDN}; input. */
  "~{SHDN}": "8",
  /** Physical pin 9: PVDD; passive. */
  "PVDD_9": "9",
  /** Physical pin 10: OUTR-; output. */
  "OUTR-": "10",
  /** Physical pin 11: OUTR+; output. */
  "OUTR+": "11",
  /** Physical pin 12: PGND; passive. */
  "PGND_12": "12",
  /** Physical pin 13: BIAS; passive. */
  "BIAS": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
  /** Physical pin 15: INR; input. */
  "INR": "15",
  /** Physical pin 16: INL; input. */
  "INL": "16",
  /** Physical pin 17: PAD; passive. */
  "PAD": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX9744 extends Component.withPins({
  /** Physical pin 1: BOOTL+; output. */
  "BOOTL+": "1",
  /** Physical pin 2: OUTL+; output. */
  "OUTL+_2": "2",
  /** Physical pin 3: OUTL+; passive. */
  "OUTL+_3": "3",
  /** Physical pin 4: PVDD; power_in. */
  "PVDD_4": "4",
  /** Physical pin 5: PVDD; passive. */
  "PVDD_5": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD_6": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: SDA/VOL; input. */
  "SDA/VOL": "8",
  /** Physical pin 9: SCLK; input. */
  "SCLK": "9",
  /** Physical pin 10: VDD; passive. */
  "VDD_10": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: GND; passive. */
  "GND_12": "12",
  /** Physical pin 13: ADDR1; input. */
  "ADDR1": "13",
  /** Physical pin 14: ADDR2; input. */
  "ADDR2": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
  /** Physical pin 16: INL; input. */
  "INL": "16",
  /** Physical pin 17: FBL; input. */
  "FBL": "17",
  /** Physical pin 18: FBR; input. */
  "FBR": "18",
  /** Physical pin 19: INR; input. */
  "INR": "19",
  /** Physical pin 20: BIAS; output. */
  "BIAS": "20",
  /** Physical pin 21: VDD; passive. */
  "VDD_21": "21",
  /** Physical pin 22: ~{SHND}; input. */
  "~{SHND}": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC": "23",
  /** Physical pin 24: MUTE; input. */
  "MUTE": "24",
  /** Physical pin 25: SYNC; input. */
  "SYNC": "25",
  /** Physical pin 26: SYNCOUT; output. */
  "SYNCOUT": "26",
  /** Physical pin 27: GND; passive. */
  "GND_27": "27",
  /** Physical pin 28: VDD; passive. */
  "VDD_28": "28",
  /** Physical pin 29: PVDD; passive. */
  "PVDD_29": "29",
  /** Physical pin 30: PVDD; passive. */
  "PVDD_30": "30",
  /** Physical pin 31: OUTR+; output. */
  "OUTR+_31": "31",
  /** Physical pin 32: OUTR+; passive. */
  "OUTR+_32": "32",
  /** Physical pin 33: BOOTR+; output. */
  "BOOTR+": "33",
  /** Physical pin 34: PGND; power_in. */
  "PGND_34": "34",
  /** Physical pin 35: PGND; passive. */
  "PGND_35": "35",
  /** Physical pin 36: OUTR-; output. */
  "OUTR-_36": "36",
  /** Physical pin 37: OUTR-; output. */
  "OUTR-_37": "37",
  /** Physical pin 38: BOOTR-; output. */
  "BOOTR-": "38",
  /** Physical pin 39: PGND; passive. */
  "PGND_39": "39",
  /** Physical pin 40: BOOTL-; output. */
  "BOOTL-": "40",
  /** Physical pin 41: OUTL-; output. */
  "OUTL-_41": "41",
  /** Physical pin 42: OUTL-; passive. */
  "OUTL-_42": "42",
  /** Physical pin 43: PGND; passive. */
  "PGND_43": "43",
  /** Physical pin 44: PGND; passive. */
  "PGND_44": "44",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX9814 extends Component.withPins({
  /** Physical pin 1: CT; input. */
  "CT": "1",
  /** Physical pin 2: ~{SHDN}; input. */
  "~{SHDN}": "2",
  /** Physical pin 3: CG; passive. */
  "CG": "3",
  /** Physical pin 4: GND; passive. */
  "GND_4": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: MICOUT; output. */
  "MICOUT": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: MICIN; input. */
  "MICIN": "8",
  /** Physical pin 9: A/R; input. */
  "A/R": "9",
  /** Physical pin 10: GAIN; input. */
  "GAIN": "10",
  /** Physical pin 11: GND; passive. */
  "GND_11": "11",
  /** Physical pin 12: BIAS; passive. */
  "BIAS": "12",
  /** Physical pin 13: MICBIAS; output. */
  "MICBIAS": "13",
  /** Physical pin 14: TH; input. */
  "TH": "14",
  /** Physical pin 15: GND; passive. */
  "GND_15": "15",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX98306xDT extends Component.withPins({
  /** Physical pin 1: PGND; power_in. */
  "PGND_1": "1",
  /** Physical pin 2: ~{SHDN}; input. */
  "~{SHDN}": "2",
  /** Physical pin 3: INL+; input. */
  "INL+": "3",
  /** Physical pin 4: INL-; input. */
  "INL-": "4",
  /** Physical pin 5: GAIN; input. */
  "GAIN": "5",
  /** Physical pin 6: INR-; input. */
  "INR-": "6",
  /** Physical pin 7: INR+; input. */
  "INR+": "7",
  /** Physical pin 8: PGND; passive. */
  "PGND_8": "8",
  /** Physical pin 9: OUTR-; power_out. */
  "OUTR-": "9",
  /** Physical pin 10: OUTR+; power_out. */
  "OUTR+": "10",
  /** Physical pin 11: PVDD; power_in. */
  "PVDD_11": "11",
  /** Physical pin 12: PVDD; passive. */
  "PVDD_12": "12",
  /** Physical pin 13: OUTL+; power_out. */
  "OUTL+": "13",
  /** Physical pin 14: OUTL-; power_out. */
  "OUTL-": "14",
  /** Physical pin 15: PGND; passive. */
  "PGND_15": "15",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX98396EWB_ extends Component.withPins({
  /** Physical pin A1: PVDD; power_in. */
  "PVDD_A1": "A1",
  /** Physical pin A2: PVDD; passive. */
  "PVDD_A2": "A2",
  /** Physical pin A3: ~{RESET}; input. */
  "~{RESET}": "A3",
  /** Physical pin A4: AVDD; power_in. */
  "AVDD": "A4",
  /** Physical pin A5: IRQ; open_collector. */
  "IRQ": "A5",
  /** Physical pin A6: I2C2; bidirectional. */
  "I2C2": "A6",
  /** Physical pin A7: ICC; bidirectional. */
  "ICC": "A7",
  /** Physical pin B1: OUTN; output. */
  "OUTN_B1": "B1",
  /** Physical pin B2: OUTN; output. */
  "OUTN_B2": "B2",
  /** Physical pin B3: OUTNSNS; output. */
  "OUTNSNS": "B3",
  /** Physical pin B4: DVDD; power_in. */
  "DVDD": "B4",
  /** Physical pin B5: DVDDIO; power_in. */
  "DVDDIO": "B5",
  /** Physical pin B6: ADDR; input. */
  "ADDR": "B6",
  /** Physical pin B7: I2C1; bidirectional. */
  "I2C1": "B7",
  /** Physical pin C1: PGND; power_in. */
  "PGND_C1": "C1",
  /** Physical pin C2: PGND; passive. */
  "PGND_C2": "C2",
  /** Physical pin C3: PGND; passive. */
  "PGND_C3": "C3",
  /** Physical pin C4: AGND; power_in. */
  "AGND_C4": "C4",
  /** Physical pin C5: DGND; power_in. */
  "DGND_C5": "C5",
  /** Physical pin C6: DGND; passive. */
  "DGND_C6": "C6",
  /** Physical pin C7: DOUT; output. */
  "DOUT": "C7",
  /** Physical pin D1: OUTP; output. */
  "OUTP_D1": "D1",
  /** Physical pin D2: OUTP; output. */
  "OUTP_D2": "D2",
  /** Physical pin D3: OUTPSNS; output. */
  "OUTPSNS": "D3",
  /** Physical pin D4: VBAT; power_in. */
  "VBAT_D4": "D4",
  /** Physical pin D5: AGND; passive. */
  "AGND_D5": "D5",
  /** Physical pin D6: LV_EN; open_collector. */
  "LV_EN": "D6",
  /** Physical pin D7: DIN; input. */
  "DIN": "D7",
  /** Physical pin E1: PVDD; passive. */
  "PVDD_E1": "E1",
  /** Physical pin E2: PVDD; passive. */
  "PVDD_E2": "E2",
  /** Physical pin E3: VREFC; passive. */
  "VREFC": "E3",
  /** Physical pin E4: VBAT; passive. */
  "VBAT_E4": "E4",
  /** Physical pin E5: AGND; passive. */
  "AGND_E5": "E5",
  /** Physical pin E6: LRCLK; input. */
  "LRCLK": "E6",
  /** Physical pin E7: BCLK; input. */
  "BCLK": "E7",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MAX9850xTI extends Component.withPins({
  /** Physical pin 1: LRCLK; bidirectional. */
  "LRCLK": "1",
  /** Physical pin 2: BCLK; bidirectional. */
  "BCLK": "2",
  /** Physical pin 3: SDIN; input. */
  "SDIN": "3",
  /** Physical pin 4: DVDD; power_in. */
  "DVDD": "4",
  /** Physical pin 5: MCLK; input. */
  "MCLK": "5",
  /** Physical pin 6: DGND; power_in. */
  "DGND": "6",
  /** Physical pin 7: ADD; input. */
  "ADD": "7",
  /** Physical pin 8: GPIO; bidirectional. */
  "GPIO": "8",
  /** Physical pin 9: INR; input. */
  "INR": "9",
  /** Physical pin 10: INL; input. */
  "INL": "10",
  /** Physical pin 11: OUTR; output. */
  "OUTR": "11",
  /** Physical pin 12: OUTL; output. */
  "OUTL": "12",
  /** Physical pin 13: REF; power_out. */
  "REF": "13",
  /** Physical pin 14: AGND; power_in. */
  "AGND_14": "14",
  /** Physical pin 15: NREG; power_out. */
  "NREG": "15",
  /** Physical pin 16: PREG; power_out. */
  "PREG": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: HPR; output. */
  "HPR": "18",
  /** Physical pin 19: HPL; output. */
  "HPL": "19",
  /** Physical pin 20: SVSS; power_in. */
  "SVSS": "20",
  /** Physical pin 21: HPS; input. */
  "HPS": "21",
  /** Physical pin 22: PVSS; power_in. */
  "PVSS": "22",
  /** Physical pin 23: C1N; passive. */
  "C1N": "23",
  /** Physical pin 24: PGND; power_in. */
  "PGND": "24",
  /** Physical pin 25: C1P; passive. */
  "C1P": "25",
  /** Physical pin 26: PVDD; power_in. */
  "PVDD": "26",
  /** Physical pin 27: SCL; bidirectional. */
  "SCL": "27",
  /** Physical pin 28: SDA; bidirectional. */
  "SDA": "28",
  /** Physical pin 29: AGND; passive. */
  "AGND_29": "29",
}) {
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
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class OPA1622 extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+_1": "1",
  /** Physical pin 8: EN; input. */
  "EN": "8",
  /** Physical pin 9: unnamed; output. */
  "P9": "9",
  /** Physical pin 10: -; input. */
  "-_10": "10",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: V-; power_in. */
  "V-_4": "4",
  /** Physical pin 11: V-; passive. */
  "V-_11": "11",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAM8301 extends Component.withPins({
  /** Physical pin 1: OUT-; output. */
  "OUT-": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: IN; input. */
  "IN": "3",
  /** Physical pin 4: ~{SD}; input. */
  "~{SD}": "4",
  /** Physical pin 5: VDD; power_in. */
  "VDD": "5",
  /** Physical pin 6: OUT+; output. */
  "OUT+": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAM8302AAD extends Component.withPins({
  /** Physical pin 1: ~{SD}; input. */
  "~{SD}": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: IN-; input. */
  "IN-": "4",
  /** Physical pin 5: OUT+; output. */
  "OUT+": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OUT-; output. */
  "OUT-": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAM8302AAS extends Component.withPins({
  /** Physical pin 1: ~{SD}; input. */
  "~{SD}": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: IN-; input. */
  "IN-": "4",
  /** Physical pin 5: OUT+; output. */
  "OUT+": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OUT-; output. */
  "OUT-": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAM8302AAY extends Component.withPins({
  /** Physical pin 1: ~{SD}; input. */
  "~{SD}": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: IN-; input. */
  "IN-": "4",
  /** Physical pin 5: OUT+; output. */
  "OUT+": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: OUT-; output. */
  "OUT-": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAM8403D extends Component.withPins({
  /** Physical pin 1: LOUT+; output. */
  "LOUT+": "1",
  /** Physical pin 2: PGND; power_in. */
  "PGND_2": "2",
  /** Physical pin 3: LOUT-; output. */
  "LOUT-": "3",
  /** Physical pin 4: PVDD; power_in. */
  "PVDD_4": "4",
  /** Physical pin 5: ~{MUTE}; input. */
  "~{MUTE}": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: INL; input. */
  "INL": "7",
  /** Physical pin 8: VREF; input. */
  "VREF": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC": "9",
  /** Physical pin 10: INR; input. */
  "INR": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: ~{SHDN}; input. */
  "~{SHDN}": "12",
  /** Physical pin 13: PVDD; passive. */
  "PVDD_13": "13",
  /** Physical pin 14: ROUT-; output. */
  "ROUT-": "14",
  /** Physical pin 15: PGND; passive. */
  "PGND_15": "15",
  /** Physical pin 16: ROUT+; output. */
  "ROUT+": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAM8406D extends Component.withPins({
  /** Physical pin 1: +OUT_L; output. */
  "+OUT_L": "1",
  /** Physical pin 2: PGNDL; power_in. */
  "PGNDL": "2",
  /** Physical pin 3: -OUT_L; output. */
  "-OUT_L": "3",
  /** Physical pin 4: PVDDL; power_in. */
  "PVDDL": "4",
  /** Physical pin 5: ~{MUTE}; input. */
  "~{MUTE}": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: INL; input. */
  "INL": "7",
  /** Physical pin 8: VREF; passive. */
  "VREF": "8",
  /** Physical pin 9: MODE; input. */
  "MODE": "9",
  /** Physical pin 10: INR; input. */
  "INR": "10",
  /** Physical pin 11: GND; power_in. */
  "GND": "11",
  /** Physical pin 12: ~{SHND}; input. */
  "~{SHND}": "12",
  /** Physical pin 13: PVDDR; power_in. */
  "PVDDR": "13",
  /** Physical pin 14: -OUT_R; output. */
  "-OUT_R": "14",
  /** Physical pin 15: PGNDR; power_in. */
  "PGNDR": "15",
  /** Physical pin 16: +OUT_R; output. */
  "+OUT_R": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PAM8908 extends Component.withPins({
  /** Physical pin 9: CAP-; passive. */
  "CAP-": "9",
  /** Physical pin 1: INL-; input. */
  "INL-": "1",
  /** Physical pin 2: INL+; input. */
  "INL+": "2",
  /** Physical pin 3: INR+; input. */
  "INR+": "3",
  /** Physical pin 4: INR-; input. */
  "INR-": "4",
  /** Physical pin 5: OUTR; output. */
  "OUTR": "5",
  /** Physical pin 6: G0; input. */
  "G0": "6",
  /** Physical pin 7: G1; input. */
  "G1": "7",
  /** Physical pin 8: HPVSS; power_out. */
  "HPVSS": "8",
  /** Physical pin 10: PGND; power_in. */
  "PGND": "10",
  /** Physical pin 11: CAP+; passive. */
  "CAP+": "11",
  /** Physical pin 12: HPVDD; power_out. */
  "HPVDD": "12",
  /** Physical pin 13: EN; input. */
  "EN": "13",
  /** Physical pin 14: PVDD; power_in. */
  "PVDD": "14",
  /** Physical pin 15: SGND; power_in. */
  "SGND": "15",
  /** Physical pin 16: OUTL; output. */
  "OUTL": "16",
  /** Physical pin 17: EPAD; passive. */
  "EPAD": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SSM2017P extends Component.withPins({
  /** Physical pin 1: RG1; input. */
  "RG1": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: REF; input. */
  "REF": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: RG2; input. */
  "RG2": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SSM2018 extends Component.withPins({
  /** Physical pin 9: COMP3; passive. */
  "COMP3": "9",
  /** Physical pin 1: +I1-G; output. */
  "+I1-G": "1",
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 3: -IG; output. */
  "-IG": "3",
  /** Physical pin 4: -I1-G; output. */
  "-I1-G": "4",
  /** Physical pin 5: COMP1; passive. */
  "COMP1": "5",
  /** Physical pin 6: +IN; input. */
  "+IN": "6",
  /** Physical pin 7: -IN; input. */
  "-IN": "7",
  /** Physical pin 8: COMP2; passive. */
  "COMP2": "8",
  /** Physical pin 10: V-; power_in. */
  "V-": "10",
  /** Physical pin 11: VC; input. */
  "VC": "11",
  /** Physical pin 12: MODE; input. */
  "MODE": "12",
  /** Physical pin 13: GND; power_in. */
  "GND": "13",
  /** Physical pin 14: VG; output. */
  "VG": "14",
  /** Physical pin 15: BAL; input. */
  "BAL": "15",
  /** Physical pin 16: V1-G; output. */
  "V1-G": "16",
}) {
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
 * Units: 5.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SSM2120 extends Component.withPins({
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: CFT; input. */
  "CFT_6": "6",
  /** Physical pin 7: -; input. */
  "-_7": "7",
  /** Physical pin 8: IN; input. */
  "IN_8": "8",
  /** Physical pin 1: THRESH; input. */
  "THRESH_1": "1",
  /** Physical pin 2: LOGAV; input. */
  "LOGAV_2": "2",
  /** Physical pin 3: CONOUT; input. */
  "CONOUT_3": "3",
  /** Physical pin 9: RECIN; input. */
  "RECIN_9": "9",
  /** Physical pin 16: IN; input. */
  "IN_16": "16",
  /** Physical pin 17: -; input. */
  "-_17": "17",
  /** Physical pin 18: CFT; input. */
  "CFT_18": "18",
  /** Physical pin 19: +; input. */
  "+_19": "19",
  /** Physical pin 20: unnamed; output. */
  "P20": "20",
  /** Physical pin 12: THRESH; input. */
  "THRESH_12": "12",
  /** Physical pin 13: LOGAV; input. */
  "LOGAV_13": "13",
  /** Physical pin 14: CONOUT; input. */
  "CONOUT_14": "14",
  /** Physical pin 15: RECIN; input. */
  "RECIN_15": "15",
  /** Physical pin 10: IREF; input. */
  "IREF": "10",
  /** Physical pin 11: V-; power_in. */
  "V-": "11",
  /** Physical pin 21: V+; power_in. */
  "V+": "21",
  /** Physical pin 22: GND; power_in. */
  "GND": "22",
}) {
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
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SSM2122 extends Component.withPins({
  /** Physical pin 2: unnamed; output. */
  "P2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 4: CFT; input. */
  "CFT_4": "4",
  /** Physical pin 5: -; input. */
  "-_5": "5",
  /** Physical pin 6: IN; input. */
  "IN_6": "6",
  /** Physical pin 10: IN; input. */
  "IN_10": "10",
  /** Physical pin 11: -; input. */
  "-_11": "11",
  /** Physical pin 12: CFT; input. */
  "CFT_12": "12",
  /** Physical pin 13: +; input. */
  "+_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 1: GND; power_in. */
  "GND_1": "1",
  /** Physical pin 7: IREF; input. */
  "IREF": "7",
  /** Physical pin 8: V-; power_in. */
  "V-": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
  /** Physical pin 15: V+; power_in. */
  "V+": "15",
  /** Physical pin 16: GND; passive. */
  "GND_16": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SSM2165 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VCAIN; input. */
  "VCAIN": "2",
  /** Physical pin 3: BUFOUT; output. */
  "BUFOUT": "3",
  /** Physical pin 4: IN+; input. */
  "IN+": "4",
  /** Physical pin 5: AVG; passive. */
  "AVG": "5",
  /** Physical pin 6: COMP; passive. */
  "COMP": "6",
  /** Physical pin 7: VOUT; output. */
  "VOUT": "7",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SSM2167 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: VCAIN; input. */
  "VCAIN": "2",
  /** Physical pin 3: ~{SD}; input. */
  "~{SD}": "3",
  /** Physical pin 4: BUFOUT; output. */
  "BUFOUT": "4",
  /** Physical pin 5: IN+; input. */
  "IN+": "5",
  /** Physical pin 6: AVG; passive. */
  "AVG": "6",
  /** Physical pin 7: GATE; passive. */
  "GATE": "7",
  /** Physical pin 8: COMP; passive. */
  "COMP": "8",
  /** Physical pin 9: VOUT; output. */
  "VOUT": "9",
  /** Physical pin 10: V+; power_in. */
  "V+": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SSM2211CP extends Component.withPins({
  /** Physical pin 1: SHUTDOWN; input. */
  "SHUTDOWN": "1",
  /** Physical pin 2: BYPASS; passive. */
  "BYPASS": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: IN-; input. */
  "IN-": "4",
  /** Physical pin 5: VoutA; output. */
  "VoutA": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
  /** Physical pin 7: V-; power_in. */
  "V-_7": "7",
  /** Physical pin 8: VoutB; output. */
  "VoutB": "8",
  /** Physical pin 9: V-; passive. */
  "V-_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class SSM2211S extends Component.withPins({
  /** Physical pin 1: SHUTDOWN; input. */
  "SHUTDOWN": "1",
  /** Physical pin 2: BYPASS; passive. */
  "BYPASS": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: IN-; input. */
  "IN-": "4",
  /** Physical pin 5: VoutA; output. */
  "VoutA": "5",
  /** Physical pin 6: V+; power_in. */
  "V+": "6",
  /** Physical pin 7: V-; power_in. */
  "V-": "7",
  /** Physical pin 8: VoutB; output. */
  "VoutB": "8",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STK433_Sanyo extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+_1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: V-; power_in. */
  "V-_3": "3",
  /** Physical pin 4: V-; power_in. */
  "V-_4": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 6: unnamed; passive. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+_7": "7",
  /** Physical pin 8: unnamed; power_in. */
  "P8": "8",
  /** Physical pin 9: V+; power_in. */
  "V+_9": "9",
  /** Physical pin 10: unnamed; passive. */
  "P10": "10",
  /** Physical pin 11: unnamed; output. */
  "P11": "11",
  /** Physical pin 12: V-; power_in. */
  "V-_12": "12",
  /** Physical pin 13: V-; power_in. */
  "V-_13": "13",
  /** Physical pin 14: -; input. */
  "-_14": "14",
  /** Physical pin 15: +; input. */
  "+_15": "15",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STK435_Sanyo extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+_1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: V-; power_in. */
  "V-_3": "3",
  /** Physical pin 4: V-; power_in. */
  "V-_4": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 6: unnamed; passive. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+_7": "7",
  /** Physical pin 8: unnamed; power_in. */
  "P8": "8",
  /** Physical pin 9: V+; power_in. */
  "V+_9": "9",
  /** Physical pin 10: unnamed; passive. */
  "P10": "10",
  /** Physical pin 11: unnamed; output. */
  "P11": "11",
  /** Physical pin 12: V-; power_in. */
  "V-_12": "12",
  /** Physical pin 13: V-; power_in. */
  "V-_13": "13",
  /** Physical pin 14: -; input. */
  "-_14": "14",
  /** Physical pin 15: +; input. */
  "+_15": "15",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STK436_Sanyo extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+_1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: V-; power_in. */
  "V-_3": "3",
  /** Physical pin 4: V-; power_in. */
  "V-_4": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 6: unnamed; passive. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+_7": "7",
  /** Physical pin 8: unnamed; power_in. */
  "P8": "8",
  /** Physical pin 9: V+; power_in. */
  "V+_9": "9",
  /** Physical pin 10: unnamed; passive. */
  "P10": "10",
  /** Physical pin 11: unnamed; output. */
  "P11": "11",
  /** Physical pin 12: V-; power_in. */
  "V-_12": "12",
  /** Physical pin 13: V-; power_in. */
  "V-_13": "13",
  /** Physical pin 14: -; input. */
  "-_14": "14",
  /** Physical pin 15: +; input. */
  "+_15": "15",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STK437_Sanyo extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+_1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: V-; power_in. */
  "V-_3": "3",
  /** Physical pin 4: V-; power_in. */
  "V-_4": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 6: unnamed; passive. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+_7": "7",
  /** Physical pin 8: unnamed; power_in. */
  "P8": "8",
  /** Physical pin 9: V+; power_in. */
  "V+_9": "9",
  /** Physical pin 10: unnamed; passive. */
  "P10": "10",
  /** Physical pin 11: unnamed; output. */
  "P11": "11",
  /** Physical pin 12: V-; power_in. */
  "V-_12": "12",
  /** Physical pin 13: V-; power_in. */
  "V-_13": "13",
  /** Physical pin 14: -; input. */
  "-_14": "14",
  /** Physical pin 15: +; input. */
  "+_15": "15",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STK439_Sanyo extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+_1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: V-; power_in. */
  "V-_3": "3",
  /** Physical pin 4: V-; power_in. */
  "V-_4": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 6: unnamed; passive. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+_7": "7",
  /** Physical pin 8: unnamed; power_in. */
  "P8": "8",
  /** Physical pin 9: V+; power_in. */
  "V+_9": "9",
  /** Physical pin 10: unnamed; passive. */
  "P10": "10",
  /** Physical pin 11: unnamed; output. */
  "P11": "11",
  /** Physical pin 12: V-; power_in. */
  "V-_12": "12",
  /** Physical pin 13: V-; power_in. */
  "V-_13": "13",
  /** Physical pin 14: -; input. */
  "-_14": "14",
  /** Physical pin 15: +; input. */
  "+_15": "15",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STK441_Sanyo extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+_1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: V-; power_in. */
  "V-_3": "3",
  /** Physical pin 4: V-; power_in. */
  "V-_4": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 6: unnamed; passive. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+_7": "7",
  /** Physical pin 8: unnamed; power_in. */
  "P8": "8",
  /** Physical pin 9: V+; power_in. */
  "V+_9": "9",
  /** Physical pin 10: unnamed; passive. */
  "P10": "10",
  /** Physical pin 11: unnamed; output. */
  "P11": "11",
  /** Physical pin 12: V-; power_in. */
  "V-_12": "12",
  /** Physical pin 13: V-; power_in. */
  "V-_13": "13",
  /** Physical pin 14: -; input. */
  "-_14": "14",
  /** Physical pin 15: +; input. */
  "+_15": "15",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class STK443_Sanyo extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+_1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: V-; power_in. */
  "V-_3": "3",
  /** Physical pin 4: V-; power_in. */
  "V-_4": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 6: unnamed; passive. */
  "P6": "6",
  /** Physical pin 7: V+; power_in. */
  "V+_7": "7",
  /** Physical pin 8: unnamed; power_in. */
  "P8": "8",
  /** Physical pin 9: V+; power_in. */
  "V+_9": "9",
  /** Physical pin 10: unnamed; passive. */
  "P10": "10",
  /** Physical pin 11: unnamed; output. */
  "P11": "11",
  /** Physical pin 12: V-; power_in. */
  "V-_12": "12",
  /** Physical pin 13: V-; power_in. */
  "V-_13": "13",
  /** Physical pin 14: -; input. */
  "-_14": "14",
  /** Physical pin 15: +; input. */
  "+_15": "15",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si8241BB extends Component.withPins({
  /** Physical pin 1: PWM; input. */
  "PWM": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: VDDI; power_in. */
  "VDDI_3": "3",
  /** Physical pin 4: GNDI; power_in. */
  "GNDI": "4",
  /** Physical pin 5: DISABLE; input. */
  "DISABLE": "5",
  /** Physical pin 6: DT; passive. */
  "DT": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: VDDI; passive. */
  "VDDI_8": "8",
  /** Physical pin 9: GNDB; power_in. */
  "GNDB": "9",
  /** Physical pin 10: VOB; output. */
  "VOB": "10",
  /** Physical pin 11: VDDB; power_in. */
  "VDDB": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: GNDA; power_in. */
  "GNDA": "14",
  /** Physical pin 15: VOA; output. */
  "VOA": "15",
  /** Physical pin 16: VDDA; power_in. */
  "VDDA": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si8241CB extends Component.withPins({
  /** Physical pin 1: PWM; input. */
  "PWM": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: VDDI; power_in. */
  "VDDI_3": "3",
  /** Physical pin 4: GNDI; power_in. */
  "GNDI": "4",
  /** Physical pin 5: DISABLE; input. */
  "DISABLE": "5",
  /** Physical pin 6: DT; passive. */
  "DT": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: VDDI; passive. */
  "VDDI_8": "8",
  /** Physical pin 9: GNDB; power_in. */
  "GNDB": "9",
  /** Physical pin 10: VOB; output. */
  "VOB": "10",
  /** Physical pin 11: VDDB; power_in. */
  "VDDB": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: GNDA; power_in. */
  "GNDA": "14",
  /** Physical pin 15: VOA; output. */
  "VOA": "15",
  /** Physical pin 16: VDDA; power_in. */
  "VDDA": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si8244BB extends Component.withPins({
  /** Physical pin 1: PWM; input. */
  "PWM": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: VDDI; power_in. */
  "VDDI_3": "3",
  /** Physical pin 4: GNDI; power_in. */
  "GNDI": "4",
  /** Physical pin 5: DISABLE; input. */
  "DISABLE": "5",
  /** Physical pin 6: DT; passive. */
  "DT": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: VDDI; passive. */
  "VDDI_8": "8",
  /** Physical pin 9: GNDB; power_in. */
  "GNDB": "9",
  /** Physical pin 10: VOB; output. */
  "VOB": "10",
  /** Physical pin 11: VDDB; power_in. */
  "VDDB": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: GNDA; power_in. */
  "GNDA": "14",
  /** Physical pin 15: VOA; output. */
  "VOA": "15",
  /** Physical pin 16: VDDA; power_in. */
  "VDDA": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si8244CB extends Component.withPins({
  /** Physical pin 1: PWM; input. */
  "PWM": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: VDDI; power_in. */
  "VDDI_3": "3",
  /** Physical pin 4: GNDI; power_in. */
  "GNDI": "4",
  /** Physical pin 5: DISABLE; input. */
  "DISABLE": "5",
  /** Physical pin 6: DT; passive. */
  "DT": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC_7": "7",
  /** Physical pin 8: VDDI; passive. */
  "VDDI_8": "8",
  /** Physical pin 9: GNDB; power_in. */
  "GNDB": "9",
  /** Physical pin 10: VOB; output. */
  "VOB": "10",
  /** Physical pin 11: VDDB; power_in. */
  "VDDB": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: GNDA; power_in. */
  "GNDA": "14",
  /** Physical pin 15: VOA; output. */
  "VOA": "15",
  /** Physical pin 16: VDDA; power_in. */
  "VDDA": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TAS5805MPWP extends Component.withPins({
  /** Physical pin 9: SDOUT; output. */
  "SDOUT": "9",
  /** Physical pin 22: BST_A-; passive. */
  "BST_A-": "22",
  /** Physical pin 23: OUT_A-; output. */
  "OUT_A-": "23",
  /** Physical pin 25: BST_A+; passive. */
  "BST_A+": "25",
  /** Physical pin 1: DGND; power_in. */
  "DGND_1": "1",
  /** Physical pin 2: DVDD; power_in. */
  "DVDD": "2",
  /** Physical pin 3: ADR/~{FAULT}; bidirectional. */
  "ADR/~{FAULT}": "3",
  /** Physical pin 4: VR_DIG; power_out. */
  "VR_DIG": "4",
  /** Physical pin 5: DGND; passive. */
  "DGND_5": "5",
  /** Physical pin 6: LRCLK; input. */
  "LRCLK": "6",
  /** Physical pin 7: SCLK; input. */
  "SCLK": "7",
  /** Physical pin 8: SDIN; input. */
  "SDIN": "8",
  /** Physical pin 10: SDA; bidirectional. */
  "SDA": "10",
  /** Physical pin 11: SCL; input. */
  "SCL": "11",
  /** Physical pin 12: ~{PDN}; input. */
  "~{PDN}": "12",
  /** Physical pin 13: AVDD; power_out. */
  "AVDD": "13",
  /** Physical pin 14: AGND; power_in. */
  "AGND": "14",
  /** Physical pin 15: PVDD; power_in. */
  "PVDD_15": "15",
  /** Physical pin 16: PVDD; passive. */
  "PVDD_16": "16",
  /** Physical pin 17: OUT_B+; output. */
  "OUT_B+": "17",
  /** Physical pin 18: BST_B+; passive. */
  "BST_B+": "18",
  /** Physical pin 19: PGND; power_in. */
  "PGND_19": "19",
  /** Physical pin 20: OUT_B-; output. */
  "OUT_B-": "20",
  /** Physical pin 21: BST_B-; passive. */
  "BST_B-": "21",
  /** Physical pin 24: PGND; passive. */
  "PGND_24": "24",
  /** Physical pin 26: OUT_A+; output. */
  "OUT_A+": "26",
  /** Physical pin 27: PVDD; passive. */
  "PVDD_27": "27",
  /** Physical pin 28: PVDD; passive. */
  "PVDD_28": "28",
  /** Physical pin 29: EP; passive. */
  "EP": "29",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TAS5825MRHB extends Component.withPins({
  /** Physical pin 1: BST_A+; passive. */
  "BST_A+": "1",
  /** Physical pin 2: OUT_A+; output. */
  "OUT_A+": "2",
  /** Physical pin 3: PVDD; power_in. */
  "PVDD_3": "3",
  /** Physical pin 4: PVDD; passive. */
  "PVDD_4": "4",
  /** Physical pin 5: DGND; power_in. */
  "DGND": "5",
  /** Physical pin 6: DVDD; power_in. */
  "DVDD": "6",
  /** Physical pin 7: VR_DIG; power_out. */
  "VR_DIG": "7",
  /** Physical pin 8: ADR; passive. */
  "ADR": "8",
  /** Physical pin 9: GPIO0; bidirectional. */
  "GPIO0": "9",
  /** Physical pin 10: GPIO1; bidirectional. */
  "GPIO1": "10",
  /** Physical pin 11: GPIO2; bidirectional. */
  "GPIO2": "11",
  /** Physical pin 12: LRCLK; input. */
  "LRCLK": "12",
  /** Physical pin 13: SCLK; input. */
  "SCLK": "13",
  /** Physical pin 14: SDIN; input. */
  "SDIN": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: SCL; input. */
  "SCL": "16",
  /** Physical pin 17: ~{PDN}; input. */
  "~{PDN}": "17",
  /** Physical pin 18: GVDD; power_out. */
  "GVDD": "18",
  /** Physical pin 19: AVDD; power_out. */
  "AVDD": "19",
  /** Physical pin 20: AGND; power_in. */
  "AGND": "20",
  /** Physical pin 21: PVDD; passive. */
  "PVDD_21": "21",
  /** Physical pin 22: PVDD; passive. */
  "PVDD_22": "22",
  /** Physical pin 23: OUT_B+; output. */
  "OUT_B+": "23",
  /** Physical pin 24: BST_B+; passive. */
  "BST_B+": "24",
  /** Physical pin 25: PGND; power_in. */
  "PGND_25": "25",
  /** Physical pin 26: PGND; passive. */
  "PGND_26": "26",
  /** Physical pin 27: OUT_B-; output. */
  "OUT_B-": "27",
  /** Physical pin 28: BST_B-; passive. */
  "BST_B-": "28",
  /** Physical pin 29: BST_A-; passive. */
  "BST_A-": "29",
  /** Physical pin 30: OUT_A-; output. */
  "OUT_A-": "30",
  /** Physical pin 31: PGND; passive. */
  "PGND_31": "31",
  /** Physical pin 32: PGND; passive. */
  "PGND_32": "32",
  /** Physical pin 33: EP; passive. */
  "EP": "33",
}) {
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
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA1308 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: +; input. */
  "+_3": "3",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: -; input. */
  "-_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 4: VSS; power_in. */
  "VSS": "4",
  /** Physical pin 8: V+; power_in. */
  "V+": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA2003 extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: GND; power_in. */
  "GND": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: V+; power_in. */
  "V+": "5",
}) {
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
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA2005 extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+_1": "1",
  /** Physical pin 2: -; input. */
  "-_2": "2",
  /** Physical pin 3: SVRR; passive. */
  "SVRR": "3",
  /** Physical pin 10: unnamed; output. */
  "P10": "10",
  /** Physical pin 11: BOOT; passive. */
  "BOOT_11": "11",
  /** Physical pin 4: -; input. */
  "-_4": "4",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 7: BOOT; passive. */
  "BOOT_7": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 9: V+; power_in. */
  "V+": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA2030 extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: -Vs; power_in. */
  "-Vs": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: +Vs; power_in. */
  "+Vs": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA2050 extends Component.withPins({
  /** Physical pin 1: +; input. */
  "+": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: -Vs; power_in. */
  "-Vs": "3",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 5: +Vs; power_in. */
  "+Vs": "5",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA7052A extends Component.withPins({
  /** Physical pin 1: VP; power_in. */
  "VP": "1",
  /** Physical pin 2: +; input. */
  "+": "2",
  /** Physical pin 3: GND; power_in. */
  "GND_3": "3",
  /** Physical pin 4: V; input. */
  "V": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 6: GND; power_in. */
  "GND_6": "6",
  /** Physical pin 7: NC; no_connect. */
  "NC": "7",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
}) {
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
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA7264 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 4: MUTE; input. */
  "MUTE": "4",
  /** Physical pin 7: GND; power_in. */
  "GND": "7",
  /** Physical pin 8: IN; input. */
  "IN_8": "8",
  /** Physical pin 3: unnamed; output. */
  "P3": "3",
  /** Physical pin 6: IN; input. */
  "IN_6": "6",
  /** Physical pin 2: V+; power_in. */
  "V+": "2",
  /** Physical pin 5: V-; power_in. */
  "V-": "5",
}) {
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
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA7265 extends Component.withPins({
  /** Physical pin 2: unnamed; output. */
  "P2": "2",
  /** Physical pin 5: MUTE; input. */
  "MUTE": "5",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: -; input. */
  "-_10": "10",
  /** Physical pin 11: +; input. */
  "+_11": "11",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 7: +; input. */
  "+_7": "7",
  /** Physical pin 8: -; input. */
  "-_8": "8",
  /** Physical pin 1: V-; power_in. */
  "V-_1": "1",
  /** Physical pin 3: V+; power_in. */
  "V+": "3",
  /** Physical pin 6: V-; passive. */
  "V-_6": "6",
}) {
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
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA7265B extends Component.withPins({
  /** Physical pin 2: unnamed; output. */
  "P2": "2",
  /** Physical pin 5: MUTE; input. */
  "MUTE": "5",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: -; input. */
  "-_10": "10",
  /** Physical pin 11: +; input. */
  "+_11": "11",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 7: +; input. */
  "+_7": "7",
  /** Physical pin 8: -; input. */
  "-_8": "8",
  /** Physical pin 1: V-; power_in. */
  "V-_1": "1",
  /** Physical pin 3: V+; power_in. */
  "V+": "3",
  /** Physical pin 6: V-; passive. */
  "V-_6": "6",
}) {
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
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA7266 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: unnamed; output. */
  "P2": "2",
  /** Physical pin 4: +; input. */
  "+_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: MUTE; input. */
  "MUTE": "6",
  /** Physical pin 7: STBY; input. */
  "STBY": "7",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 15: unnamed; output. */
  "P15": "15",
  /** Physical pin 3: V+; power_in. */
  "V+_3": "3",
  /** Physical pin 8: PG; power_in. */
  "PG": "8",
  /** Physical pin 9: SG; power_in. */
  "SG": "9",
  /** Physical pin 13: V+; passive. */
  "V+_13": "13",
}) {
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
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA7266D extends Component.withPins({
  /** Physical pin 2: unnamed; output. */
  "P2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 7: +; input. */
  "+_7": "7",
  /** Physical pin 8: MUTE; input. */
  "MUTE": "8",
  /** Physical pin 9: STBY; input. */
  "STBY": "9",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 17: NC; no_connect. */
  "NC_17": "17",
  /** Physical pin 18: NC; no_connect. */
  "NC_18": "18",
  /** Physical pin 14: +; input. */
  "+_14": "14",
  /** Physical pin 16: unnamed; output. */
  "P16": "16",
  /** Physical pin 19: unnamed; output. */
  "P19": "19",
  /** Physical pin 1: PG; power_in. */
  "PG_1": "1",
  /** Physical pin 6: V+; power_in. */
  "V+_6": "6",
  /** Physical pin 10: PG; passive. */
  "PG_10": "10",
  /** Physical pin 11: PG; passive. */
  "PG_11": "11",
  /** Physical pin 13: SG; power_in. */
  "SG": "13",
  /** Physical pin 15: V+; passive. */
  "V+_15": "15",
  /** Physical pin 20: PG; passive. */
  "PG_20": "20",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA7266M extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: unnamed; output. */
  "P2": "2",
  /** Physical pin 3: V+; power_in. */
  "V+_3": "3",
  /** Physical pin 4: +; input. */
  "+": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: MUTE; input. */
  "MUTE": "6",
  /** Physical pin 7: STBY; input. */
  "STBY": "7",
  /** Physical pin 8: PG; power_in. */
  "PG": "8",
  /** Physical pin 9: SG; power_in. */
  "SG": "9",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: V+; passive. */
  "V+_13": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
}) {
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
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA7266P extends Component.withPins({
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 6: unnamed; output. */
  "P6": "6",
  /** Physical pin 8: +; input. */
  "+_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: MUTE; input. */
  "MUTE": "10",
  /** Physical pin 11: STBY; input. */
  "STBY": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: NC; no_connect. */
  "NC_16": "16",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC_22": "22",
  /** Physical pin 23: NC; no_connect. */
  "NC_23": "23",
  /** Physical pin 17: +; input. */
  "+_17": "17",
  /** Physical pin 19: unnamed; output. */
  "P19": "19",
  /** Physical pin 20: unnamed; output. */
  "P20": "20",
  /** Physical pin 1: PG; power_in. */
  "PG_1": "1",
  /** Physical pin 7: V+; power_in. */
  "V+_7": "7",
  /** Physical pin 14: SG; power_in. */
  "SG": "14",
  /** Physical pin 18: V+; passive. */
  "V+_18": "18",
  /** Physical pin 24: PG; passive. */
  "PG_24": "24",
}) {
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
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA7269A extends Component.withPins({
  /** Physical pin 2: unnamed; output. */
  "P2": "2",
  /** Physical pin 5: MUTE; input. */
  "MUTE": "5",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: -; input. */
  "-_10": "10",
  /** Physical pin 11: +; input. */
  "+_11": "11",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 7: +; input. */
  "+_7": "7",
  /** Physical pin 8: -; input. */
  "-_8": "8",
  /** Physical pin 1: V-; power_in. */
  "V-_1": "1",
  /** Physical pin 3: V+; power_in. */
  "V+": "3",
  /** Physical pin 6: V-; passive. */
  "V-_6": "6",
}) {
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
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA7292 extends Component.withPins({
  /** Physical pin 2: unnamed; output. */
  "P2": "2",
  /** Physical pin 5: MUTE; input. */
  "MUTE": "5",
  /** Physical pin 9: GND; power_in. */
  "GND": "9",
  /** Physical pin 10: -; input. */
  "-_10": "10",
  /** Physical pin 11: +; input. */
  "+_11": "11",
  /** Physical pin 4: unnamed; output. */
  "P4": "4",
  /** Physical pin 7: +; input. */
  "+_7": "7",
  /** Physical pin 8: -; input. */
  "-_8": "8",
  /** Physical pin 1: V-; power_in. */
  "V-_1": "1",
  /** Physical pin 3: V+; power_in. */
  "V+": "3",
  /** Physical pin 6: V-; passive. */
  "V-_6": "6",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA7293 extends Component.withPins({
  /** Physical pin 1: SGND; power_in. */
  "SGND": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: SIG_GND; power_in. */
  "SIG_GND": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: BOOT; passive. */
  "BOOT": "6",
  /** Physical pin 7: +Vs; power_in. */
  "+Vs_7": "7",
  /** Physical pin 8: -Vs; power_in. */
  "-Vs_8": "8",
  /** Physical pin 9: STBY; input. */
  "STBY": "9",
  /** Physical pin 10: MUTE; input. */
  "MUTE": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: +Vs; power_in. */
  "+Vs_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 15: -Vs; power_in. */
  "-Vs_15": "15",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA7294 extends Component.withPins({
  /** Physical pin 1: SGND; power_in. */
  "SGND": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: SIG_GND; power_in. */
  "SIG_GND": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: BOOT; passive. */
  "BOOT": "6",
  /** Physical pin 7: +Vs; power_in. */
  "+Vs_7": "7",
  /** Physical pin 8: -Vs; power_in. */
  "-Vs_8": "8",
  /** Physical pin 9: STBY; input. */
  "STBY": "9",
  /** Physical pin 10: MUTE; input. */
  "MUTE": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: +Vs; power_in. */
  "+Vs_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 15: -Vs; power_in. */
  "-Vs_15": "15",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA7295 extends Component.withPins({
  /** Physical pin 1: SGND; power_in. */
  "SGND": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: SIG_GND; power_in. */
  "SIG_GND": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: BOOT; passive. */
  "BOOT": "6",
  /** Physical pin 7: +Vs; power_in. */
  "+Vs_7": "7",
  /** Physical pin 8: -Vs; power_in. */
  "-Vs_8": "8",
  /** Physical pin 9: STBY; input. */
  "STBY": "9",
  /** Physical pin 10: MUTE; input. */
  "MUTE": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: +Vs; power_in. */
  "+Vs_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 15: -Vs; power_in. */
  "-Vs_15": "15",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA7296 extends Component.withPins({
  /** Physical pin 1: SGND; power_in. */
  "SGND": "1",
  /** Physical pin 2: -; input. */
  "-": "2",
  /** Physical pin 3: +; input. */
  "+": "3",
  /** Physical pin 4: SIG_GND; power_in. */
  "SIG_GND": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: BOOT; passive. */
  "BOOT": "6",
  /** Physical pin 7: +Vs; power_in. */
  "+Vs_7": "7",
  /** Physical pin 8: -Vs; power_in. */
  "-Vs_8": "8",
  /** Physical pin 9: STBY; input. */
  "STBY": "9",
  /** Physical pin 10: MUTE; input. */
  "MUTE": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: NC; no_connect. */
  "NC_12": "12",
  /** Physical pin 13: +Vs; power_in. */
  "+Vs_13": "13",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 15: -Vs; power_in. */
  "-Vs_15": "15",
}) {
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
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA7297 extends Component.withPins({
  /** Physical pin 1: unnamed; output. */
  "P1": "1",
  /** Physical pin 2: unnamed; output. */
  "P2": "2",
  /** Physical pin 4: +; input. */
  "+_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: MUTE; input. */
  "MUTE": "6",
  /** Physical pin 7: STBY; input. */
  "STBY": "7",
  /** Physical pin 10: NC; no_connect. */
  "NC_10": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: +; input. */
  "+_12": "12",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 15: unnamed; output. */
  "P15": "15",
  /** Physical pin 3: V+; power_in. */
  "V+_3": "3",
  /** Physical pin 8: PG; power_in. */
  "PG": "8",
  /** Physical pin 9: SG; power_in. */
  "SG": "9",
  /** Physical pin 13: V+; passive. */
  "V+_13": "13",
}) {
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
 * Units: 3.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TDA7496 extends Component.withPins({
  /** Physical pin 3: V; input. */
  "V": "3",
  /** Physical pin 4: O; output. */
  "O_4": "4",
  /** Physical pin 5: +; input. */
  "+_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC": "6",
  /** Physical pin 9: STBY; input. */
  "STBY": "9",
  /** Physical pin 10: MUTE; input. */
  "MUTE": "10",
  /** Physical pin 12: unnamed; output. */
  "P12": "12",
  /** Physical pin 1: +; input. */
  "+_1": "1",
  /** Physical pin 2: O; output. */
  "O_2": "2",
  /** Physical pin 7: SVR; passive. */
  "SVR": "7",
  /** Physical pin 14: unnamed; output. */
  "P14": "14",
  /** Physical pin 8: SG; power_in. */
  "SG": "8",
  /** Physical pin 11: PG; power_in. */
  "PG_11": "11",
  /** Physical pin 13: V+; power_in. */
  "V+": "13",
  /** Physical pin 15: PG; passive. */
  "PG_15": "15",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TFA9879HN extends Component.withPins({
  /** Physical pin 1: SDA; bidirectional. */
  "SDA": "1",
  /** Physical pin 2: SCL; input. */
  "SCL": "2",
  /** Physical pin 3: TEST1; input. */
  "TEST1": "3",
  /** Physical pin 4: ADSEL2; input. */
  "ADSEL2": "4",
  /** Physical pin 5: TEST3; input. */
  "TEST3": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: VDDP; passive. */
  "VDDP_7": "7",
  /** Physical pin 8: VDDP; power_in. */
  "VDDP_8": "8",
  /** Physical pin 9: OUTB; output. */
  "OUTB": "9",
  /** Physical pin 10: OUTA; output. */
  "OUTA": "10",
  /** Physical pin 11: GNDP; passive. */
  "GNDP_11": "11",
  /** Physical pin 12: GNDP; power_in. */
  "GNDP_12": "12",
  /** Physical pin 13: STABA; output. */
  "STABA": "13",
  /** Physical pin 14: NC; no_connect. */
  "NC_14": "14",
  /** Physical pin 15: TEST2; input. */
  "TEST2": "15",
  /** Physical pin 16: ADSEL1; input. */
  "ADSEL1": "16",
  /** Physical pin 17: SDI2; input. */
  "SDI2": "17",
  /** Physical pin 18: SCK2; input. */
  "SCK2": "18",
  /** Physical pin 19: LRCK2; input. */
  "LRCK2": "19",
  /** Physical pin 20: SDI1; input. */
  "SDI1": "20",
  /** Physical pin 21: SCK1; input. */
  "SCK1": "21",
  /** Physical pin 22: LRCK1; input. */
  "LRCK1": "22",
  /** Physical pin 23: VDD; power_in. */
  "VDD": "23",
  /** Physical pin 24: GNDD; power_in. */
  "GNDD": "24",
  /** Physical pin 25: EP; passive. */
  "EP": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THAT151xx08 extends Component.withPins({
  /** Physical pin 1: Rg1; passive. */
  "Rg1": "1",
  /** Physical pin 2: -In; input. */
  "-In": "2",
  /** Physical pin 3: +In; input. */
  "+In": "3",
  /** Physical pin 4: V-; power_in. */
  "V-": "4",
  /** Physical pin 5: Ref; output. */
  "Ref": "5",
  /** Physical pin 6: Out; output. */
  "Out": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 8: Rg2; passive. */
  "Rg2": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THAT2180 extends Component.withPins({
  /** Physical pin 5: V-; power_in. */
  "V-": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 1: -; input. */
  "-": "1",
  /** Physical pin 2: E+; input. */
  "E+": "2",
  /** Physical pin 3: E-; input. */
  "E-": "3",
  /** Physical pin 4: SYM; input. */
  "SYM": "4",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class THAT2181 extends Component.withPins({
  /** Physical pin 5: V-; power_in. */
  "V-": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: V+; power_in. */
  "V+": "7",
  /** Physical pin 1: -; input. */
  "-": "1",
  /** Physical pin 2: E+; input. */
  "E+": "2",
  /** Physical pin 3: E-; input. */
  "E-": "3",
  /** Physical pin 4: SYM; input. */
  "SYM": "4",
  /** Physical pin 8: unnamed; output. */
  "P8": "8",
}) {
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
 * Units: 2.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPA3251 extends Component.withPins({
  /** Physical pin 1: GVDD_AB; power_in. */
  "GVDD_AB": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD": "2",
  /** Physical pin 5: INPUT_A; input. */
  "INPUT_A": "5",
  /** Physical pin 6: INPUT_B; input. */
  "INPUT_B": "6",
  /** Physical pin 7: OC_ADJ; passive. */
  "OC_ADJ": "7",
  /** Physical pin 8: FREQ_ADJ; passive. */
  "FREQ_ADJ": "8",
  /** Physical pin 9: OSC_IOM; bidirectional. */
  "OSC_IOM": "9",
  /** Physical pin 10: OSC_IOP; bidirectional. */
  "OSC_IOP": "10",
  /** Physical pin 11: DVDD; passive. */
  "DVDD": "11",
  /** Physical pin 12: GND; power_in. */
  "GND_12": "12",
  /** Physical pin 13: GND; passive. */
  "GND_13": "13",
  /** Physical pin 14: AVDD; passive. */
  "AVDD": "14",
  /** Physical pin 15: C_START; passive. */
  "C_START": "15",
  /** Physical pin 20: VBG; passive. */
  "VBG": "20",
  /** Physical pin 25: GND; passive. */
  "GND_25": "25",
  /** Physical pin 26: GND; passive. */
  "GND_26": "26",
  /** Physical pin 33: GND; passive. */
  "GND_33": "33",
  /** Physical pin 34: GND; passive. */
  "GND_34": "34",
  /** Physical pin 35: OUT_B; output. */
  "OUT_B": "35",
  /** Physical pin 36: PVDD_AB; power_in. */
  "PVDD_AB_36": "36",
  /** Physical pin 37: PVDD_AB; passive. */
  "PVDD_AB_37": "37",
  /** Physical pin 38: PVDD_AB; passive. */
  "PVDD_AB_38": "38",
  /** Physical pin 39: OUT_A; output. */
  "OUT_A_39": "39",
  /** Physical pin 40: OUT_A; passive. */
  "OUT_A_40": "40",
  /** Physical pin 41: GND; passive. */
  "GND_41": "41",
  /** Physical pin 42: GND; passive. */
  "GND_42": "42",
  /** Physical pin 43: BST_B; passive. */
  "BST_B": "43",
  /** Physical pin 44: BST_A; passive. */
  "BST_A": "44",
  /** Physical pin 3: M1; input. */
  "M1": "3",
  /** Physical pin 4: M2; input. */
  "M2": "4",
  /** Physical pin 16: INPUT_C; input. */
  "INPUT_C": "16",
  /** Physical pin 17: INPUT_D; input. */
  "INPUT_D": "17",
  /** Physical pin 18: ~{RESET}; input. */
  "~{RESET}": "18",
  /** Physical pin 19: ~{FAULT}; open_collector. */
  "~{FAULT}": "19",
  /** Physical pin 21: ~{CLIP_OTW}; open_collector. */
  "~{CLIP_OTW}": "21",
  /** Physical pin 22: GVDD_CD; power_in. */
  "GVDD_CD": "22",
  /** Physical pin 23: BST_D; passive. */
  "BST_D": "23",
  /** Physical pin 24: BST_C; passive. */
  "BST_C": "24",
  /** Physical pin 27: OUT_D; output. */
  "OUT_D_27": "27",
  /** Physical pin 28: OUT_D; passive. */
  "OUT_D_28": "28",
  /** Physical pin 29: PVDD_CD; power_in. */
  "PVDD_CD_29": "29",
  /** Physical pin 30: PVDD_CD; passive. */
  "PVDD_CD_30": "30",
  /** Physical pin 31: PVDD_CD; passive. */
  "PVDD_CD_31": "31",
  /** Physical pin 32: OUT_C; output. */
  "OUT_C": "32",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPA6110A2DGN extends Component.withPins({
  /** Physical pin 1: BYPASS; passive. */
  "BYPASS": "1",
  /** Physical pin 2: GND; power_in. */
  "GND_2": "2",
  /** Physical pin 3: SHDN; input. */
  "SHDN": "3",
  /** Physical pin 4: IN2-; input. */
  "IN2-": "4",
  /** Physical pin 5: VO2; output. */
  "VO2": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: VO1; output. */
  "VO1": "7",
  /** Physical pin 8: IN1-; input. */
  "IN1-": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPA6132A2RTE extends Component.withPins({
  /** Physical pin 1: INL-; input. */
  "INL-": "1",
  /** Physical pin 2: INL+; input. */
  "INL+": "2",
  /** Physical pin 3: INR+; input. */
  "INR+": "3",
  /** Physical pin 4: INR-; input. */
  "INR-": "4",
  /** Physical pin 5: OUTR; output. */
  "OUTR": "5",
  /** Physical pin 6: G0; input. */
  "G0": "6",
  /** Physical pin 7: G1; input. */
  "G1": "7",
  /** Physical pin 8: HPVSS; power_in. */
  "HPVSS": "8",
  /** Physical pin 9: CPN; passive. */
  "CPN": "9",
  /** Physical pin 10: PGND; power_in. */
  "PGND": "10",
  /** Physical pin 11: CPP; passive. */
  "CPP": "11",
  /** Physical pin 12: HPVDD; power_in. */
  "HPVDD": "12",
  /** Physical pin 13: EN; input. */
  "EN": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
  /** Physical pin 15: SGND; power_in. */
  "SGND": "15",
  /** Physical pin 16: OUTL; output. */
  "OUTL": "16",
  /** Physical pin 17: EP; passive. */
  "EP": "17",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPA6203A1DGN extends Component.withPins({
  /** Physical pin 1: ~{SHUTDOWN}; input. */
  "~{SHUTDOWN}": "1",
  /** Physical pin 2: BYPASS; input. */
  "BYPASS": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: IN-; input. */
  "IN-": "4",
  /** Physical pin 5: V_{O+}; output. */
  "V_{O+}": "5",
  /** Physical pin 6: V_{DD}; power_in. */
  "V_{DD}": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: V_{O-}; output. */
  "V_{O-}": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class TPA6203A1DRB extends Component.withPins({
  /** Physical pin 1: ~{SHUTDOWN}; input. */
  "~{SHUTDOWN}": "1",
  /** Physical pin 2: BYPASS; input. */
  "BYPASS": "2",
  /** Physical pin 3: IN+; input. */
  "IN+": "3",
  /** Physical pin 4: IN-; input. */
  "IN-": "4",
  /** Physical pin 5: V_{O+}; output. */
  "V_{O+}": "5",
  /** Physical pin 6: V_{DD}; power_in. */
  "V_{DD}": "6",
  /** Physical pin 7: GND; power_in. */
  "GND_7": "7",
  /** Physical pin 8: V_{O-}; output. */
  "V_{O-}": "8",
  /** Physical pin 9: GND; passive. */
  "GND_9": "9",
}) {
  override schema = "Amplifier_Audio:TPA6203A1DRB";
  override referencePrefix = "U";
}

