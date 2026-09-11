// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * MIPS MCU, 120MHz, 1MB Flash, 256KB RAM, 2.3-3.6V, USB, TQFP-100
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MK1024GPD100-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*12x12mm*P0.4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC32MK_GP_MC_Familly_Datasheet_60001402G.pdf
 * Keywords: 32-bit MIPS MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-100_12x12mm_P0.4mm.
 */
export class PIC32MK1024GPD100_xPT extends Component.withPins({
  "RG15": "1",
  "VDD_2": "2",
  "RA7/TCK": "3",
  "RB14/VBUSON1": "4",
  "RB15": "5",
  "RD1": "6",
  "RD2": "7",
  "RD3": "8",
  "RD4": "9",
  "RG6/VBUSON2": "10",
  "RG7": "11",
  "RG8": "12",
  "~{MCLR}": "13",
  "RG9": "14",
  "VSS_15": "15",
  "VDD_16": "16",
  "RG10": "17",
  "RE8": "18",
  "RE9": "19",
  "RA12": "20",
  "RA11": "21",
  "RA0": "22",
  "RA1": "23",
  "PGD3/RB0": "24",
  "PGC3/RB1": "25",
  "PGC1/RB2": "26",
  "PGD1/RB3": "27",
  "RF9": "28",
  "RF10": "29",
  "AVDD": "30",
  "AVSS": "31",
  "RC0": "32",
  "RC1": "33",
  "RC2": "34",
  "RC11": "35",
  "VSS_36": "36",
  "VDD_37": "37",
  "RG11": "38",
  "RF13": "39",
  "RF12": "40",
  "RE12": "41",
  "RE13": "42",
  "RE14": "43",
  "RE15": "44",
  "VSS_45": "45",
  "VDD_46": "46",
  "RD14": "47",
  "RD15": "48",
  "RA8/TDI": "49",
  "RB4": "50",
  "RA4": "51",
  "RE0": "52",
  "RE1": "53",
  "VBUS1": "54",
  "VUSB3V3": "55",
  "D1-": "56",
  "D1+": "57",
  "VBUS2": "58",
  "D2-": "59",
  "D2+": "60",
  "RF5": "61",
  "VDD_62": "62",
  "RC12/OSCI/CLKI": "63",
  "RC15/OSCO/CLKO": "64",
  "VSS_65": "65",
  "RA14": "66",
  "RA15": "67",
  "VBAT": "68",
  "PGD2/RB5": "69",
  "PGC2/RB6": "70",
  "RC10": "71",
  "RB7": "72",
  "RC13/SOSCI": "73",
  "SOSCO/RB8": "74",
  "VSS_75": "75",
  "TMS/RB9": "76",
  "RC6": "77",
  "RC7": "78",
  "RD12": "79",
  "RD13": "80",
  "RC8": "81",
  "RD5": "82",
  "RD6": "83",
  "RC9": "84",
  "VSS_85": "85",
  "VDD_86": "86",
  "RF0": "87",
  "RF1": "88",
  "RG1": "89",
  "RG0": "90",
  "TRCLK/RF6": "91",
  "TRD3/RF7": "92",
  "RB10": "93",
  "RB11": "94",
  "RG14/TRD2": "95",
  "RG12": "96",
  "RG13/TRD0": "97",
  "RB12": "98",
  "RB13": "99",
  "RA10/TDO": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RG15: "bidirectional", VDD_2: "power_in", "RA7/TCK": "bidirectional", "RB14/VBUSON1": "bidirectional", RB15: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RD4: "bidirectional", "RG6/VBUSON2": "bidirectional", RG7: "bidirectional", RG8: "bidirectional", "~{MCLR}": "input", RG9: "bidirectional", VSS_15: "power_in", VDD_16: "power_in", RG10: "bidirectional", RE8: "bidirectional", RE9: "bidirectional", RA12: "bidirectional", RA11: "bidirectional", RA0: "bidirectional", RA1: "bidirectional", "PGD3/RB0": "bidirectional", "PGC3/RB1": "bidirectional", "PGC1/RB2": "bidirectional", "PGD1/RB3": "bidirectional", RF9: "bidirectional", RF10: "bidirectional", AVDD: "power_in", AVSS: "power_in", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC11: "bidirectional", VSS_36: "passive", VDD_37: "power_in", RG11: "bidirectional", RF13: "bidirectional", RF12: "bidirectional", RE12: "bidirectional", RE13: "bidirectional", RE14: "bidirectional", RE15: "bidirectional", VSS_45: "passive", VDD_46: "power_in", RD14: "bidirectional", RD15: "bidirectional", "RA8/TDI": "bidirectional", RB4: "bidirectional", RA4: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", VBUS1: "input", VUSB3V3: "power_in", "D1-": "bidirectional", "D1+": "bidirectional", VBUS2: "input", "D2-": "bidirectional", "D2+": "bidirectional", RF5: "bidirectional", VDD_62: "power_in", "RC12/OSCI/CLKI": "bidirectional", "RC15/OSCO/CLKO": "bidirectional", VSS_65: "passive", RA14: "bidirectional", RA15: "bidirectional", VBAT: "power_in", "PGD2/RB5": "bidirectional", "PGC2/RB6": "bidirectional", RC10: "bidirectional", RB7: "bidirectional", "RC13/SOSCI": "bidirectional", "SOSCO/RB8": "bidirectional", VSS_75: "passive", "TMS/RB9": "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RD12: "bidirectional", RD13: "bidirectional", RC8: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RC9: "bidirectional", VSS_85: "passive", VDD_86: "power_in", RF0: "bidirectional", RF1: "bidirectional", RG1: "bidirectional", RG0: "bidirectional", "TRCLK/RF6": "bidirectional", "TRD3/RF7": "bidirectional", RB10: "bidirectional", RB11: "bidirectional", "RG14/TRD2": "bidirectional", RG12: "bidirectional", "RG13/TRD0": "bidirectional", RB12: "bidirectional", RB13: "bidirectional", "RA10/TDO": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC32:PIC32MK1024GPD100-xPT";
  override referencePrefix = "U";
}

/**
 * MIPS MCU, 120MHz, 1MB Flash, 256KB RAM, 2.3-3.6V, USB, TQFP-100
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MK1024GPE100-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*12x12mm*P0.4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC32MK_GP_MC_Familly_Datasheet_60001402G.pdf
 * Keywords: 32-bit MIPS MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-100_12x12mm_P0.4mm.
 */
export class PIC32MK1024GPE100_xPT extends Component.withPins({
  "RG15": "1",
  "VDD_2": "2",
  "RA7/TCK": "3",
  "RB14/VBUSON1": "4",
  "RB15": "5",
  "RD1": "6",
  "RD2": "7",
  "RD3": "8",
  "RD4": "9",
  "RG6/VBUSON2": "10",
  "RG7": "11",
  "RG8": "12",
  "~{MCLR}": "13",
  "RG9": "14",
  "VSS_15": "15",
  "VDD_16": "16",
  "RG10": "17",
  "RE8": "18",
  "RE9": "19",
  "RA12": "20",
  "RA11": "21",
  "RA0": "22",
  "RA1": "23",
  "PGD3/RB0": "24",
  "PGC3/RB1": "25",
  "PGC1/RB2": "26",
  "PGD1/RB3": "27",
  "RF9": "28",
  "RF10": "29",
  "AVDD": "30",
  "AVSS": "31",
  "RC0": "32",
  "RC1": "33",
  "RC2": "34",
  "RC11": "35",
  "VSS_36": "36",
  "VDD_37": "37",
  "RG11": "38",
  "RF13": "39",
  "RF12": "40",
  "RE12": "41",
  "RE13": "42",
  "RE14": "43",
  "RE15": "44",
  "VSS_45": "45",
  "VDD_46": "46",
  "RD14": "47",
  "RD15": "48",
  "RA8/TDI": "49",
  "RB4": "50",
  "RA4": "51",
  "RE0": "52",
  "RE1": "53",
  "VBUS1": "54",
  "VUSB3V3": "55",
  "D1-": "56",
  "D1+": "57",
  "VBUS2": "58",
  "D2-": "59",
  "D2+": "60",
  "RF5": "61",
  "VDD_62": "62",
  "RC12/OSCI/CLKI": "63",
  "RC15/OSCO/CLKO": "64",
  "VSS_65": "65",
  "RA14": "66",
  "RA15": "67",
  "VBAT": "68",
  "PGD2/RB5": "69",
  "PGC2/RB6": "70",
  "RC10": "71",
  "RB7": "72",
  "RC13/SOSCI": "73",
  "SOSCO/RB8": "74",
  "VSS_75": "75",
  "TMS/RB9": "76",
  "RC6": "77",
  "RC7": "78",
  "RD12": "79",
  "RD13": "80",
  "RC8": "81",
  "RD5": "82",
  "RD6": "83",
  "RC9": "84",
  "VSS_85": "85",
  "VDD_86": "86",
  "RF0": "87",
  "RF1": "88",
  "RG1": "89",
  "RG0": "90",
  "TRCLK/RF6": "91",
  "TRD3/RF7": "92",
  "RB10": "93",
  "RB11": "94",
  "RG14/TRD2": "95",
  "RG12": "96",
  "RG13/TRD0": "97",
  "RB12": "98",
  "RB13": "99",
  "RA10/TDO": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RG15: "bidirectional", VDD_2: "power_in", "RA7/TCK": "bidirectional", "RB14/VBUSON1": "bidirectional", RB15: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RD4: "bidirectional", "RG6/VBUSON2": "bidirectional", RG7: "bidirectional", RG8: "bidirectional", "~{MCLR}": "input", RG9: "bidirectional", VSS_15: "power_in", VDD_16: "power_in", RG10: "bidirectional", RE8: "bidirectional", RE9: "bidirectional", RA12: "bidirectional", RA11: "bidirectional", RA0: "bidirectional", RA1: "bidirectional", "PGD3/RB0": "bidirectional", "PGC3/RB1": "bidirectional", "PGC1/RB2": "bidirectional", "PGD1/RB3": "bidirectional", RF9: "bidirectional", RF10: "bidirectional", AVDD: "power_in", AVSS: "power_in", RC0: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC11: "bidirectional", VSS_36: "passive", VDD_37: "power_in", RG11: "bidirectional", RF13: "bidirectional", RF12: "bidirectional", RE12: "bidirectional", RE13: "bidirectional", RE14: "bidirectional", RE15: "bidirectional", VSS_45: "passive", VDD_46: "power_in", RD14: "bidirectional", RD15: "bidirectional", "RA8/TDI": "bidirectional", RB4: "bidirectional", RA4: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", VBUS1: "input", VUSB3V3: "power_in", "D1-": "bidirectional", "D1+": "bidirectional", VBUS2: "input", "D2-": "bidirectional", "D2+": "bidirectional", RF5: "bidirectional", VDD_62: "power_in", "RC12/OSCI/CLKI": "bidirectional", "RC15/OSCO/CLKO": "bidirectional", VSS_65: "passive", RA14: "bidirectional", RA15: "bidirectional", VBAT: "power_in", "PGD2/RB5": "bidirectional", "PGC2/RB6": "bidirectional", RC10: "bidirectional", RB7: "bidirectional", "RC13/SOSCI": "bidirectional", "SOSCO/RB8": "bidirectional", VSS_75: "passive", "TMS/RB9": "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RD12: "bidirectional", RD13: "bidirectional", RC8: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RC9: "bidirectional", VSS_85: "passive", VDD_86: "power_in", RF0: "bidirectional", RF1: "bidirectional", RG1: "bidirectional", RG0: "bidirectional", "TRCLK/RF6": "bidirectional", "TRD3/RF7": "bidirectional", RB10: "bidirectional", RB11: "bidirectional", "RG14/TRD2": "bidirectional", RG12: "bidirectional", "RG13/TRD0": "bidirectional", RB12: "bidirectional", RB13: "bidirectional", "RA10/TDO": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC32:PIC32MK1024GPE100-xPT";
  override referencePrefix = "U";
}

/**
 * 32-Bit Flash MCU, 25MHz, 64KB Flash, 8KB RAM, QFN-28
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MM0064GPL028x-ML`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*6x6mm*P0.65mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/PIC32MM0064GPL036-Family-Data-Sheet-DS60001324C.pdf
 * Keywords: FLASH-Based 32-Bit CMOS Microcontroller.
 * Default footprint: Package_DFN_QFN:QFN-28-1EP_6x6mm_P0.65mm_EP4.25x4.25mm.
 */
export class PIC32MM0064GPL028x_ML extends Component.withPins({
  "RBO": "1",
  "RB1": "2",
  "RB2": "3",
  "RB3": "4",
  "VSS": "5",
  "RA2": "6",
  "RA3": "7",
  "RB4": "8",
  "RA4": "9",
  "VDD": "10",
  "RB5": "11",
  "RB6": "12",
  "RB7": "13",
  "RB8": "14",
  "RB9": "15",
  "RC9": "16",
  "VCAP": "17",
  "RB10": "18",
  "RB11": "19",
  "RB12": "20",
  "RB13": "21",
  "RB14": "22",
  "RB15": "23",
  "AVSS": "24",
  "AVDD": "25",
  "~{MCLR}": "26",
  "RA0": "27",
  "RA1": "28",
  "EP": "29",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RBO: "bidirectional", RB1: "bidirectional", RB2: "bidirectional", RB3: "bidirectional", VSS: "power_in", RA2: "bidirectional", RA3: "bidirectional", RB4: "bidirectional", RA4: "bidirectional", VDD: "power_in", RB5: "bidirectional", RB6: "bidirectional", RB7: "bidirectional", RB8: "bidirectional", RB9: "bidirectional", RC9: "bidirectional", VCAP: "power_out", RB10: "bidirectional", RB11: "bidirectional", RB12: "bidirectional", RB13: "bidirectional", RB14: "bidirectional", RB15: "bidirectional", AVSS: "power_in", AVDD: "power_in", "~{MCLR}": "input", RA0: "bidirectional", RA1: "bidirectional", EP: "passive", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC32:PIC32MM0064GPL028x-ML";
  override referencePrefix = "U";
}

/**
 * 32-bit Microcontrollers (16KB Flash and 4KB SRAM TQFP-44) with Audio and Graphics Interfaces, USB, and Advanced Analog
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX110F016D-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001168F.pdf
 * Keywords: Microchip PIC32 Microcontroller MIPS.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC32MX110F016D_IPT extends Component.withPins({
  "RB9": "1",
  "RC6": "2",
  "RC7": "3",
  "RC8": "4",
  "RC9": "5",
  "VSS_6": "6",
  "VCAP": "7",
  "RB10": "8",
  "RB11": "9",
  "RB12": "10",
  "RB13": "11",
  "RA10": "12",
  "RA7": "13",
  "RB14": "14",
  "RB15": "15",
  "AVSS": "16",
  "AVDD": "17",
  "~{MCLR}": "18",
  "RA0": "19",
  "RA1": "20",
  "RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "RB3": "24",
  "RC0": "25",
  "RC1": "26",
  "RC2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "RA2": "30",
  "RA3": "31",
  "RA8": "32",
  "RB4": "33",
  "RA4": "34",
  "RA9": "35",
  "RC3": "36",
  "RC4": "37",
  "RC5": "38",
  "VSS_39": "39",
  "VDD_40": "40",
  "RB5": "41",
  "RB6": "42",
  "RB7": "43",
  "RB8": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RB9: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RC8: "bidirectional", RC9: "bidirectional", VSS_6: "power_in", VCAP: "power_in", RB10: "bidirectional", RB11: "bidirectional", RB12: "bidirectional", RB13: "bidirectional", RA10: "bidirectional", RA7: "bidirectional", RB14: "bidirectional", RB15: "bidirectional", AVSS: "power_in", AVDD: "power_in", "~{MCLR}": "input", RA0: "input", RA1: "input", RB0: "input", RB1: "input", RB2: "input", RB3: "input", RC0: "input", RC1: "input", RC2: "input", VDD_28: "power_in", VSS_29: "passive", RA2: "input", RA3: "input", RA8: "input", RB4: "input", RA4: "input", RA9: "input", RC3: "input", RC4: "input", RC5: "input", VSS_39: "passive", VDD_40: "passive", RB5: "input", RB6: "input", RB7: "input", RB8: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC32:PIC32MX110F016D-IPT";
  override referencePrefix = "U";
}

/**
 * 32-bit Microcontrollers (32KB Flash and 8KB SRAM TQFP-44) with Audio and Graphics Interfaces, USB, and Advanced Analog
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX120F032D-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001168F.pdf
 * Keywords: Microchip PIC32 Microcontroller MIPS.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC32MX120F032D_IPT extends Component.withPins({
  "RB9": "1",
  "RC6": "2",
  "RC7": "3",
  "RC8": "4",
  "RC9": "5",
  "VSS_6": "6",
  "VCAP": "7",
  "RB10": "8",
  "RB11": "9",
  "RB12": "10",
  "RB13": "11",
  "RA10": "12",
  "RA7": "13",
  "RB14": "14",
  "RB15": "15",
  "AVSS": "16",
  "AVDD": "17",
  "~{MCLR}": "18",
  "RA0": "19",
  "RA1": "20",
  "RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "RB3": "24",
  "RC0": "25",
  "RC1": "26",
  "RC2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "RA2": "30",
  "RA3": "31",
  "RA8": "32",
  "RB4": "33",
  "RA4": "34",
  "RA9": "35",
  "RC3": "36",
  "RC4": "37",
  "RC5": "38",
  "VSS_39": "39",
  "VDD_40": "40",
  "RB5": "41",
  "RB6": "42",
  "RB7": "43",
  "RB8": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RB9: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RC8: "bidirectional", RC9: "bidirectional", VSS_6: "power_in", VCAP: "power_in", RB10: "bidirectional", RB11: "bidirectional", RB12: "bidirectional", RB13: "bidirectional", RA10: "bidirectional", RA7: "bidirectional", RB14: "bidirectional", RB15: "bidirectional", AVSS: "power_in", AVDD: "power_in", "~{MCLR}": "input", RA0: "input", RA1: "input", RB0: "input", RB1: "input", RB2: "input", RB3: "input", RC0: "input", RC1: "input", RC2: "input", VDD_28: "power_in", VSS_29: "passive", RA2: "input", RA3: "input", RA8: "input", RB4: "input", RA4: "input", RA9: "input", RC3: "input", RC4: "input", RC5: "input", VSS_39: "passive", VDD_40: "passive", RB5: "input", RB6: "input", RB7: "input", RB8: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC32:PIC32MX120F032D-IPT";
  override referencePrefix = "U";
}

/**
 * 32-bit Microcontrollers (64KB Flash and 16KB SRAM TQFP-44) with Audio and Graphics Interfaces, USB, and Advanced Analog
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX130F064D-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001168F.pdf
 * Keywords: Microchip PIC32 Microcontroller MIPS.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC32MX130F064D_IPT extends Component.withPins({
  "RB9": "1",
  "RC6": "2",
  "RC7": "3",
  "RC8": "4",
  "RC9": "5",
  "VSS_6": "6",
  "VCAP": "7",
  "RB10": "8",
  "RB11": "9",
  "RB12": "10",
  "RB13": "11",
  "RA10": "12",
  "RA7": "13",
  "RB14": "14",
  "RB15": "15",
  "AVSS": "16",
  "AVDD": "17",
  "~{MCLR}": "18",
  "RA0": "19",
  "RA1": "20",
  "RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "RB3": "24",
  "RC0": "25",
  "RC1": "26",
  "RC2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "RA2": "30",
  "RA3": "31",
  "RA8": "32",
  "RB4": "33",
  "RA4": "34",
  "RA9": "35",
  "RC3": "36",
  "RC4": "37",
  "RC5": "38",
  "VSS_39": "39",
  "VDD_40": "40",
  "RB5": "41",
  "RB6": "42",
  "RB7": "43",
  "RB8": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RB9: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RC8: "bidirectional", RC9: "bidirectional", VSS_6: "power_in", VCAP: "power_in", RB10: "bidirectional", RB11: "bidirectional", RB12: "bidirectional", RB13: "bidirectional", RA10: "bidirectional", RA7: "bidirectional", RB14: "bidirectional", RB15: "bidirectional", AVSS: "power_in", AVDD: "power_in", "~{MCLR}": "input", RA0: "input", RA1: "input", RB0: "input", RB1: "input", RB2: "input", RB3: "input", RC0: "input", RC1: "input", RC2: "input", VDD_28: "power_in", VSS_29: "passive", RA2: "input", RA3: "input", RA8: "input", RB4: "input", RA4: "input", RA9: "input", RC3: "input", RC4: "input", RC5: "input", VSS_39: "passive", VDD_40: "passive", RB5: "input", RB6: "input", RB7: "input", RB8: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC32:PIC32MX130F064D-IPT";
  override referencePrefix = "U";
}

/**
 * 32-bit Microcontrollers (128KB Flash and 32KB SRAM TQFP-44) with Audio and Graphics Interfaces, USB, and Advanced Analog
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX150F128D-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001168F.pdf
 * Keywords: Microchip PIC32 Microcontroller MIPS.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC32MX150F128D_IPT extends Component.withPins({
  "RB9": "1",
  "RC6": "2",
  "RC7": "3",
  "RC8": "4",
  "RC9": "5",
  "VSS_6": "6",
  "VCAP": "7",
  "RB10": "8",
  "RB11": "9",
  "RB12": "10",
  "RB13": "11",
  "RA10": "12",
  "RA7": "13",
  "RB14": "14",
  "RB15": "15",
  "AVSS": "16",
  "AVDD": "17",
  "~{MCLR}": "18",
  "RA0": "19",
  "RA1": "20",
  "RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "RB3": "24",
  "RC0": "25",
  "RC1": "26",
  "RC2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "RA2": "30",
  "RA3": "31",
  "RA8": "32",
  "RB4": "33",
  "RA4": "34",
  "RA9": "35",
  "RC3": "36",
  "RC4": "37",
  "RC5": "38",
  "VSS_39": "39",
  "VDD_40": "40",
  "RB5": "41",
  "RB6": "42",
  "RB7": "43",
  "RB8": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RB9: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RC8: "bidirectional", RC9: "bidirectional", VSS_6: "power_in", VCAP: "power_in", RB10: "bidirectional", RB11: "bidirectional", RB12: "bidirectional", RB13: "bidirectional", RA10: "bidirectional", RA7: "bidirectional", RB14: "bidirectional", RB15: "bidirectional", AVSS: "power_in", AVDD: "power_in", "~{MCLR}": "input", RA0: "input", RA1: "input", RB0: "input", RB1: "input", RB2: "input", RB3: "input", RC0: "input", RC1: "input", RC2: "input", VDD_28: "power_in", VSS_29: "passive", RA2: "input", RA3: "input", RA8: "input", RB4: "input", RA4: "input", RA9: "input", RC3: "input", RC4: "input", RC5: "input", VSS_39: "passive", VDD_40: "passive", RB5: "input", RB6: "input", RB7: "input", RB8: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC32:PIC32MX150F128D-IPT";
  override referencePrefix = "U";
}

/**
 * 32-bit Microcontrollers (256KB Flash and 64KB SRAM TQFP-44) with Audio and Graphics Interfaces, USB, and Advanced Analog
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX170F256D-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001168F.pdf
 * Keywords: Microchip PIC32 Microcontroller MIPS.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC32MX170F256D_IPT extends Component.withPins({
  "RB9": "1",
  "RC6": "2",
  "RC7": "3",
  "RC8": "4",
  "RC9": "5",
  "VSS_6": "6",
  "VCAP": "7",
  "RB10": "8",
  "RB11": "9",
  "RB12": "10",
  "RB13": "11",
  "RA10": "12",
  "RA7": "13",
  "RB14": "14",
  "RB15": "15",
  "AVSS": "16",
  "AVDD": "17",
  "~{MCLR}": "18",
  "RA0": "19",
  "RA1": "20",
  "RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "RB3": "24",
  "RC0": "25",
  "RC1": "26",
  "RC2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "RA2": "30",
  "RA3": "31",
  "RA8": "32",
  "RB4": "33",
  "RA4": "34",
  "RA9": "35",
  "RC3": "36",
  "RC4": "37",
  "RC5": "38",
  "VSS_39": "39",
  "VDD_40": "40",
  "RB5": "41",
  "RB6": "42",
  "RB7": "43",
  "RB8": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RB9: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RC8: "bidirectional", RC9: "bidirectional", VSS_6: "power_in", VCAP: "power_in", RB10: "bidirectional", RB11: "bidirectional", RB12: "bidirectional", RB13: "bidirectional", RA10: "bidirectional", RA7: "bidirectional", RB14: "bidirectional", RB15: "bidirectional", AVSS: "power_in", AVDD: "power_in", "~{MCLR}": "input", RA0: "input", RA1: "input", RB0: "input", RB1: "input", RB2: "input", RB3: "input", RC0: "input", RC1: "input", RC2: "input", VDD_28: "power_in", VSS_29: "passive", RA2: "input", RA3: "input", RA8: "input", RB4: "input", RA4: "input", RA9: "input", RC3: "input", RC4: "input", RC5: "input", VSS_39: "passive", VDD_40: "passive", RB5: "input", RB6: "input", RB7: "input", RB8: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC32:PIC32MX170F256D-IPT";
  override referencePrefix = "U";
}

/**
 * 32-bit Microcontrollers (16KB Flash and 4KB SRAM TQFP-44) with Audio and Graphics Interfaces, USB, and Advanced Analog
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX210F016D-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001168F.pdf
 * Keywords: Microchip PIC32 Microcontroller MIPS.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC32MX210F016D_IPT extends Component.withPins({
  "RB9": "1",
  "RC6": "2",
  "RC7": "3",
  "RC8": "4",
  "RC9": "5",
  "VSS_6": "6",
  "VCAP": "7",
  "RB10": "8",
  "RB11": "9",
  "VUSB3V3": "10",
  "RB13": "11",
  "RA10": "12",
  "RA7": "13",
  "RB14": "14",
  "RB15": "15",
  "AVSS": "16",
  "AVDD": "17",
  "~{MCLR}": "18",
  "RA0": "19",
  "RA1": "20",
  "RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "RB3": "24",
  "RC0": "25",
  "RC1": "26",
  "RC2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "RA2": "30",
  "RA3": "31",
  "RA8": "32",
  "RB4": "33",
  "RA4": "34",
  "RA9": "35",
  "RC3": "36",
  "RC4": "37",
  "RC5": "38",
  "VSS_39": "39",
  "VDD_40": "40",
  "RB5": "41",
  "VBUS": "42",
  "RB7": "43",
  "RB8": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RB9: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RC8: "bidirectional", RC9: "bidirectional", VSS_6: "power_in", VCAP: "power_in", RB10: "bidirectional", RB11: "bidirectional", VUSB3V3: "bidirectional", RB13: "bidirectional", RA10: "bidirectional", RA7: "bidirectional", RB14: "bidirectional", RB15: "bidirectional", AVSS: "power_in", AVDD: "power_in", "~{MCLR}": "input", RA0: "input", RA1: "input", RB0: "input", RB1: "input", RB2: "input", RB3: "input", RC0: "input", RC1: "input", RC2: "input", VDD_28: "power_in", VSS_29: "passive", RA2: "input", RA3: "input", RA8: "input", RB4: "input", RA4: "input", RA9: "input", RC3: "input", RC4: "input", RC5: "input", VSS_39: "passive", VDD_40: "passive", RB5: "input", VBUS: "input", RB7: "input", RB8: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC32:PIC32MX210F016D-IPT";
  override referencePrefix = "U";
}

/**
 * 32-bit Microcontrollers (32KB Flash and 8KB SRAM TQFP-44) with Audio and Graphics Interfaces, USB, and Advanced Analog
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX220F032D-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001168F.pdf
 * Keywords: Microchip PIC32 Microcontroller MIPS.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC32MX220F032D_IPT extends Component.withPins({
  "RB9": "1",
  "RC6": "2",
  "RC7": "3",
  "RC8": "4",
  "RC9": "5",
  "VSS_6": "6",
  "VCAP": "7",
  "RB10": "8",
  "RB11": "9",
  "VUSB3V3": "10",
  "RB13": "11",
  "RA10": "12",
  "RA7": "13",
  "RB14": "14",
  "RB15": "15",
  "AVSS": "16",
  "AVDD": "17",
  "~{MCLR}": "18",
  "RA0": "19",
  "RA1": "20",
  "RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "RB3": "24",
  "RC0": "25",
  "RC1": "26",
  "RC2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "RA2": "30",
  "RA3": "31",
  "RA8": "32",
  "RB4": "33",
  "RA4": "34",
  "RA9": "35",
  "RC3": "36",
  "RC4": "37",
  "RC5": "38",
  "VSS_39": "39",
  "VDD_40": "40",
  "RB5": "41",
  "VBUS": "42",
  "RB7": "43",
  "RB8": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RB9: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RC8: "bidirectional", RC9: "bidirectional", VSS_6: "power_in", VCAP: "power_in", RB10: "bidirectional", RB11: "bidirectional", VUSB3V3: "bidirectional", RB13: "bidirectional", RA10: "bidirectional", RA7: "bidirectional", RB14: "bidirectional", RB15: "bidirectional", AVSS: "power_in", AVDD: "power_in", "~{MCLR}": "input", RA0: "input", RA1: "input", RB0: "input", RB1: "input", RB2: "input", RB3: "input", RC0: "input", RC1: "input", RC2: "input", VDD_28: "power_in", VSS_29: "passive", RA2: "input", RA3: "input", RA8: "input", RB4: "input", RA4: "input", RA9: "input", RC3: "input", RC4: "input", RC5: "input", VSS_39: "passive", VDD_40: "passive", RB5: "input", VBUS: "input", RB7: "input", RB8: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC32:PIC32MX220F032D-IPT";
  override referencePrefix = "U";
}

/**
 * 32-bit Microcontrollers (64KB Flash and 16KB SRAM TQFP-44) with Audio and Graphics Interfaces, USB, and Advanced Analog
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX230F064D-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001168F.pdf
 * Keywords: Microchip PIC32 Microcontroller MIPS.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC32MX230F064D_IPT extends Component.withPins({
  "RB9": "1",
  "RC6": "2",
  "RC7": "3",
  "RC8": "4",
  "RC9": "5",
  "VSS_6": "6",
  "VCAP": "7",
  "RB10": "8",
  "RB11": "9",
  "VUSB3V3": "10",
  "RB13": "11",
  "RA10": "12",
  "RA7": "13",
  "RB14": "14",
  "RB15": "15",
  "AVSS": "16",
  "AVDD": "17",
  "~{MCLR}": "18",
  "RA0": "19",
  "RA1": "20",
  "RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "RB3": "24",
  "RC0": "25",
  "RC1": "26",
  "RC2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "RA2": "30",
  "RA3": "31",
  "RA8": "32",
  "RB4": "33",
  "RA4": "34",
  "RA9": "35",
  "RC3": "36",
  "RC4": "37",
  "RC5": "38",
  "VSS_39": "39",
  "VDD_40": "40",
  "RB5": "41",
  "VBUS": "42",
  "RB7": "43",
  "RB8": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RB9: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RC8: "bidirectional", RC9: "bidirectional", VSS_6: "power_in", VCAP: "power_in", RB10: "bidirectional", RB11: "bidirectional", VUSB3V3: "bidirectional", RB13: "bidirectional", RA10: "bidirectional", RA7: "bidirectional", RB14: "bidirectional", RB15: "bidirectional", AVSS: "power_in", AVDD: "power_in", "~{MCLR}": "input", RA0: "input", RA1: "input", RB0: "input", RB1: "input", RB2: "input", RB3: "input", RC0: "input", RC1: "input", RC2: "input", VDD_28: "power_in", VSS_29: "passive", RA2: "input", RA3: "input", RA8: "input", RB4: "input", RA4: "input", RA9: "input", RC3: "input", RC4: "input", RC5: "input", VSS_39: "passive", VDD_40: "passive", RB5: "input", VBUS: "input", RB7: "input", RB8: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC32:PIC32MX230F064D-IPT";
  override referencePrefix = "U";
}

/**
 * 32-bit Microcontrollers (128KB Flash and 32KB SRAM TQFP-44) with Audio and Graphics Interfaces, USB, and Advanced Analog
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX250F128D-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001168F.pdf
 * Keywords: Microchip PIC32 Microcontroller MIPS.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC32MX250F128D_IPT extends Component.withPins({
  "RB9": "1",
  "RC6": "2",
  "RC7": "3",
  "RC8": "4",
  "RC9": "5",
  "VSS_6": "6",
  "VCAP": "7",
  "RB10": "8",
  "RB11": "9",
  "VUSB3V3": "10",
  "RB13": "11",
  "RA10": "12",
  "RA7": "13",
  "RB14": "14",
  "RB15": "15",
  "AVSS": "16",
  "AVDD": "17",
  "~{MCLR}": "18",
  "RA0": "19",
  "RA1": "20",
  "RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "RB3": "24",
  "RC0": "25",
  "RC1": "26",
  "RC2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "RA2": "30",
  "RA3": "31",
  "RA8": "32",
  "RB4": "33",
  "RA4": "34",
  "RA9": "35",
  "RC3": "36",
  "RC4": "37",
  "RC5": "38",
  "VSS_39": "39",
  "VDD_40": "40",
  "RB5": "41",
  "VBUS": "42",
  "RB7": "43",
  "RB8": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RB9: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RC8: "bidirectional", RC9: "bidirectional", VSS_6: "power_in", VCAP: "power_in", RB10: "bidirectional", RB11: "bidirectional", VUSB3V3: "bidirectional", RB13: "bidirectional", RA10: "bidirectional", RA7: "bidirectional", RB14: "bidirectional", RB15: "bidirectional", AVSS: "power_in", AVDD: "power_in", "~{MCLR}": "input", RA0: "input", RA1: "input", RB0: "input", RB1: "input", RB2: "input", RB3: "input", RC0: "input", RC1: "input", RC2: "input", VDD_28: "power_in", VSS_29: "passive", RA2: "input", RA3: "input", RA8: "input", RB4: "input", RA4: "input", RA9: "input", RC3: "input", RC4: "input", RC5: "input", VSS_39: "passive", VDD_40: "passive", RB5: "input", VBUS: "input", RB7: "input", RB8: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC32:PIC32MX250F128D-IPT";
  override referencePrefix = "U";
}

/**
 * 32-bit Microcontrollers (256KB Flash and 64KB SRAM TQFP-44) with Audio and Graphics Interfaces, USB, and Advanced Analog
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX270F256D-IPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001168F.pdf
 * Keywords: Microchip PIC32 Microcontroller MIPS.
 * Default footprint: Package_QFP:TQFP-44_10x10mm_P0.8mm.
 */
export class PIC32MX270F256D_IPT extends Component.withPins({
  "RB9": "1",
  "RC6": "2",
  "RC7": "3",
  "RC8": "4",
  "RC9": "5",
  "VSS_6": "6",
  "VCAP": "7",
  "RB10": "8",
  "RB11": "9",
  "VUSB3V3": "10",
  "RB13": "11",
  "RA10": "12",
  "RA7": "13",
  "RB14": "14",
  "RB15": "15",
  "AVSS": "16",
  "AVDD": "17",
  "~{MCLR}": "18",
  "RA0": "19",
  "RA1": "20",
  "RB0": "21",
  "RB1": "22",
  "RB2": "23",
  "RB3": "24",
  "RC0": "25",
  "RC1": "26",
  "RC2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "RA2": "30",
  "RA3": "31",
  "RA8": "32",
  "RB4": "33",
  "RA4": "34",
  "RA9": "35",
  "RC3": "36",
  "RC4": "37",
  "RC5": "38",
  "VSS_39": "39",
  "VDD_40": "40",
  "RB5": "41",
  "VBUS": "42",
  "RB7": "43",
  "RB8": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RB9: "bidirectional", RC6: "bidirectional", RC7: "bidirectional", RC8: "bidirectional", RC9: "bidirectional", VSS_6: "power_in", VCAP: "power_in", RB10: "bidirectional", RB11: "bidirectional", VUSB3V3: "bidirectional", RB13: "bidirectional", RA10: "bidirectional", RA7: "bidirectional", RB14: "bidirectional", RB15: "bidirectional", AVSS: "power_in", AVDD: "power_in", "~{MCLR}": "input", RA0: "input", RA1: "input", RB0: "input", RB1: "input", RB2: "input", RB3: "input", RC0: "input", RC1: "input", RC2: "input", VDD_28: "power_in", VSS_29: "passive", RA2: "input", RA3: "input", RA8: "input", RB4: "input", RA4: "input", RA9: "input", RC3: "input", RC4: "input", RC5: "input", VSS_39: "passive", VDD_40: "passive", RB5: "input", VBUS: "input", RB7: "input", RB8: "input", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC32:PIC32MX270F256D-IPT";
  override referencePrefix = "U";
}

/**
 * 32-bit Microcontrollers (64KB Flash and 16KB SRAM TQFP-64 QFN-64) USB, CAN and Ethernet
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX575F256H`. Reference prefix: `U`.
 * Footprint filters: Package*QFP:QFP*10x10mm*P0.5mm*, Package*DFN*QFN:QFN*1EP*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/61156G.pdf
 * Keywords: Microchip PIC32 Microcontroller MIPS.
 */
export class PIC32MX575F256H extends Component.withPins({
  "RE5": "1",
  "RE6": "2",
  "RE7": "3",
  "RG6": "4",
  "RG7": "5",
  "RG8": "6",
  "~{MCLR}": "7",
  "RG9": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "RB5": "11",
  "RB4": "12",
  "RB3": "13",
  "RB2": "14",
  "RB1": "15",
  "RB0": "16",
  "RB6": "17",
  "RB7": "18",
  "AVDD": "19",
  "AVSS": "20",
  "RB8": "21",
  "RB9": "22",
  "RB10": "23",
  "RB11": "24",
  "VSS_25": "25",
  "VDD_26": "26",
  "RB12": "27",
  "RB13": "28",
  "RB14": "29",
  "RB15": "30",
  "RF4": "31",
  "RF5": "32",
  "RF3": "33",
  "VBUS": "34",
  "VUSB": "35",
  "RG3": "36",
  "RG2": "37",
  "VDD_38": "38",
  "RC12": "39",
  "RC15": "40",
  "VSS_41": "41",
  "RD8": "42",
  "RD9": "43",
  "RD10": "44",
  "RD11": "45",
  "RD0": "46",
  "RC13": "47",
  "RC14": "48",
  "RD1": "49",
  "RD2": "50",
  "RD3": "51",
  "RD4": "52",
  "RD5": "53",
  "RD6": "54",
  "RD7": "55",
  "VCAP": "56",
  "VDD_57": "57",
  "RF0": "58",
  "RF1": "59",
  "RE0": "60",
  "RE1": "61",
  "RE2": "62",
  "RE3": "63",
  "RE4": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RE5: "bidirectional", RE6: "bidirectional", RE7: "bidirectional", RG6: "bidirectional", RG7: "bidirectional", RG8: "bidirectional", "~{MCLR}": "input", RG9: "bidirectional", VSS_9: "power_in", VDD_10: "power_in", RB5: "bidirectional", RB4: "bidirectional", RB3: "bidirectional", RB2: "bidirectional", RB1: "bidirectional", RB0: "bidirectional", RB6: "bidirectional", RB7: "bidirectional", AVDD: "power_in", AVSS: "power_in", RB8: "bidirectional", RB9: "bidirectional", RB10: "bidirectional", RB11: "bidirectional", VSS_25: "passive", VDD_26: "passive", RB12: "bidirectional", RB13: "bidirectional", RB14: "bidirectional", RB15: "bidirectional", RF4: "bidirectional", RF5: "bidirectional", RF3: "bidirectional", VBUS: "input", VUSB: "power_in", RG3: "bidirectional", RG2: "bidirectional", VDD_38: "passive", RC12: "bidirectional", RC15: "bidirectional", VSS_41: "passive", RD8: "bidirectional", RD9: "bidirectional", RD10: "bidirectional", RD11: "bidirectional", RD0: "bidirectional", RC13: "bidirectional", RC14: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VCAP: "power_out", VDD_57: "passive", RF0: "bidirectional", RF1: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", RE3: "bidirectional", RE4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC32:PIC32MX575F256H";
  override referencePrefix = "U";
}

/**
 * 32-bit Microcontrollers (64KB Flash and 16KB SRAM TQFP-64 QFN-64) USB, CAN and Ethernet
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX575F512H`. Reference prefix: `U`.
 * Footprint filters: Package*QFP:QFP*10x10mm*P0.5mm*, Package*DFN*QFN:QFN*1EP*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/61156G.pdf
 * Keywords: Microchip PIC32 Microcontroller MIPS.
 */
export class PIC32MX575F512H extends Component.withPins({
  "RE5": "1",
  "RE6": "2",
  "RE7": "3",
  "RG6": "4",
  "RG7": "5",
  "RG8": "6",
  "~{MCLR}": "7",
  "RG9": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "RB5": "11",
  "RB4": "12",
  "RB3": "13",
  "RB2": "14",
  "RB1": "15",
  "RB0": "16",
  "RB6": "17",
  "RB7": "18",
  "AVDD": "19",
  "AVSS": "20",
  "RB8": "21",
  "RB9": "22",
  "RB10": "23",
  "RB11": "24",
  "VSS_25": "25",
  "VDD_26": "26",
  "RB12": "27",
  "RB13": "28",
  "RB14": "29",
  "RB15": "30",
  "RF4": "31",
  "RF5": "32",
  "RF3": "33",
  "VBUS": "34",
  "VUSB": "35",
  "RG3": "36",
  "RG2": "37",
  "VDD_38": "38",
  "RC12": "39",
  "RC15": "40",
  "VSS_41": "41",
  "RD8": "42",
  "RD9": "43",
  "RD10": "44",
  "RD11": "45",
  "RD0": "46",
  "RC13": "47",
  "RC14": "48",
  "RD1": "49",
  "RD2": "50",
  "RD3": "51",
  "RD4": "52",
  "RD5": "53",
  "RD6": "54",
  "RD7": "55",
  "VCAP": "56",
  "VDD_57": "57",
  "RF0": "58",
  "RF1": "59",
  "RE0": "60",
  "RE1": "61",
  "RE2": "62",
  "RE3": "63",
  "RE4": "64",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RE5: "bidirectional", RE6: "bidirectional", RE7: "bidirectional", RG6: "bidirectional", RG7: "bidirectional", RG8: "bidirectional", "~{MCLR}": "input", RG9: "bidirectional", VSS_9: "power_in", VDD_10: "power_in", RB5: "bidirectional", RB4: "bidirectional", RB3: "bidirectional", RB2: "bidirectional", RB1: "bidirectional", RB0: "bidirectional", RB6: "bidirectional", RB7: "bidirectional", AVDD: "power_in", AVSS: "power_in", RB8: "bidirectional", RB9: "bidirectional", RB10: "bidirectional", RB11: "bidirectional", VSS_25: "passive", VDD_26: "passive", RB12: "bidirectional", RB13: "bidirectional", RB14: "bidirectional", RB15: "bidirectional", RF4: "bidirectional", RF5: "bidirectional", RF3: "bidirectional", VBUS: "input", VUSB: "power_in", RG3: "bidirectional", RG2: "bidirectional", VDD_38: "passive", RC12: "bidirectional", RC15: "bidirectional", VSS_41: "passive", RD8: "bidirectional", RD9: "bidirectional", RD10: "bidirectional", RD11: "bidirectional", RD0: "bidirectional", RC13: "bidirectional", RC14: "bidirectional", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VCAP: "power_out", VDD_57: "passive", RF0: "bidirectional", RF1: "bidirectional", RE0: "bidirectional", RE1: "bidirectional", RE2: "bidirectional", RE3: "bidirectional", RE4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC32:PIC32MX575F512H";
  override referencePrefix = "U";
}

/**
 * MIPS MCU, 80MHz, 512KB Flash, 12KB Boot Flash, 128KB RAM, 2.3-3.6V, USB, CAN, Ethernet, TQFP-100
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX795F512L-80x-PF`. Reference prefix: `U`.
 * Footprint filters: TQFP*14x14mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001156J.pdf
 * Keywords: 32-bit MIPS MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-100_14x14mm_P0.5mm.
 */
export class PIC32MX795F512L_80x_PF extends Component.withPins({
  "RG15": "1",
  "VDD_2": "2",
  "RE5": "3",
  "RE6": "4",
  "RE7": "5",
  "RC1": "6",
  "RC2": "7",
  "RC3": "8",
  "RC4": "9",
  "RG6": "10",
  "RG7": "11",
  "RG8": "12",
  "~{MCLR}": "13",
  "RG9": "14",
  "VSS_15": "15",
  "VDD_16": "16",
  "RA0/TMS": "17",
  "RE8": "18",
  "RE9": "19",
  "RB5": "20",
  "RB4": "21",
  "RB3": "22",
  "RB2": "23",
  "PGEC1/RB1": "24",
  "PGED1/RB0": "25",
  "PGEC2/RB6": "26",
  "PGED2/RB7": "27",
  "RA9": "28",
  "RA10": "29",
  "AVDD": "30",
  "AVSS": "31",
  "RB8": "32",
  "RB9": "33",
  "RB10": "34",
  "RB11": "35",
  "VSS_36": "36",
  "VDD_37": "37",
  "RA1/TCK": "38",
  "RF13": "39",
  "RF12": "40",
  "RB12": "41",
  "RB13": "42",
  "RB14": "43",
  "RB15": "44",
  "VSS_45": "45",
  "VDD_46": "46",
  "RD14": "47",
  "RD15": "48",
  "RF4": "49",
  "RF5": "50",
  "RF3": "51",
  "RF2": "52",
  "RF8": "53",
  "VBUS": "54",
  "VUSB3V3": "55",
  "RG3/D-": "56",
  "RG2/D+": "57",
  "RA2": "58",
  "RA3": "59",
  "RA4/TDI": "60",
  "RA5/TDO": "61",
  "VDD_62": "62",
  "RC12/OSC1/CLK": "63",
  "RC15/OSC2/CLKO": "64",
  "VSS_65": "65",
  "RA14": "66",
  "RA15": "67",
  "RD8": "68",
  "RD9": "69",
  "RD10": "70",
  "RD11": "71",
  "RD0": "72",
  "RC13/SOSCI": "73",
  "RC14/SOSCO": "74",
  "VSS_75": "75",
  "RD1": "76",
  "RD2": "77",
  "RD3": "78",
  "RD12": "79",
  "RD13": "80",
  "RD4": "81",
  "RD5": "82",
  "RD6": "83",
  "RD7": "84",
  "VCAP/VDDCORE": "85",
  "VDD_86": "86",
  "RF0": "87",
  "RF1": "88",
  "RG1": "89",
  "RG0": "90",
  "RA6/TRCLK": "91",
  "RA7/TRD3": "92",
  "RE0": "93",
  "RE1": "94",
  "RG14/TRD2": "95",
  "RG12/TRD1": "96",
  "RG13/TRD0": "97",
  "RE2": "98",
  "RE3": "99",
  "RE4": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RG15: "bidirectional", VDD_2: "power_in", RE5: "bidirectional", RE6: "bidirectional", RE7: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RG6: "bidirectional", RG7: "bidirectional", RG8: "bidirectional", "~{MCLR}": "input", RG9: "bidirectional", VSS_15: "power_in", VDD_16: "power_in", "RA0/TMS": "bidirectional", RE8: "bidirectional", RE9: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RB3: "bidirectional", RB2: "bidirectional", "PGEC1/RB1": "bidirectional", "PGED1/RB0": "bidirectional", "PGEC2/RB6": "bidirectional", "PGED2/RB7": "bidirectional", RA9: "bidirectional", RA10: "bidirectional", AVDD: "power_in", AVSS: "power_in", RB8: "bidirectional", RB9: "bidirectional", RB10: "bidirectional", RB11: "bidirectional", VSS_36: "passive", VDD_37: "power_in", "RA1/TCK": "bidirectional", RF13: "bidirectional", RF12: "bidirectional", RB12: "bidirectional", RB13: "bidirectional", RB14: "bidirectional", RB15: "bidirectional", VSS_45: "passive", VDD_46: "power_in", RD14: "bidirectional", RD15: "bidirectional", RF4: "bidirectional", RF5: "bidirectional", RF3: "bidirectional", RF2: "bidirectional", RF8: "bidirectional", VBUS: "input", VUSB3V3: "power_in", "RG3/D-": "bidirectional", "RG2/D+": "bidirectional", RA2: "bidirectional", RA3: "bidirectional", "RA4/TDI": "bidirectional", "RA5/TDO": "bidirectional", VDD_62: "power_in", "RC12/OSC1/CLK": "bidirectional", "RC15/OSC2/CLKO": "bidirectional", VSS_65: "passive", RA14: "bidirectional", RA15: "bidirectional", RD8: "bidirectional", RD9: "bidirectional", RD10: "bidirectional", RD11: "bidirectional", RD0: "bidirectional", "RC13/SOSCI": "bidirectional", "RC14/SOSCO": "bidirectional", VSS_75: "passive", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RD12: "bidirectional", RD13: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", "VCAP/VDDCORE": "power_out", VDD_86: "power_in", RF0: "bidirectional", RF1: "bidirectional", RG1: "bidirectional", RG0: "bidirectional", "RA6/TRCLK": "bidirectional", "RA7/TRD3": "bidirectional", RE0: "bidirectional", RE1: "bidirectional", "RG14/TRD2": "bidirectional", "RG12/TRD1": "bidirectional", "RG13/TRD0": "bidirectional", RE2: "bidirectional", RE3: "bidirectional", RE4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC32:PIC32MX795F512L-80x-PF";
  override referencePrefix = "U";
}

/**
 * MIPS MCU, 80MHz, 512KB Flash, 12KB Boot Flash, 128KB RAM, 2.3-3.6V, USB, CAN, Ethernet, TQFP-100
 *
 * KiCad symbol: `MCU_Microchip_PIC32:PIC32MX795F512L-80x-PT`. Reference prefix: `U`.
 * Footprint filters: TQFP*12x12mm*P0.4mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/60001156J.pdf
 * Keywords: 32-bit MIPS MCU Microcontroller.
 * Default footprint: Package_QFP:TQFP-100_12x12mm_P0.4mm.
 */
export class PIC32MX795F512L_80x_PT extends Component.withPins({
  "RG15": "1",
  "VDD_2": "2",
  "RE5": "3",
  "RE6": "4",
  "RE7": "5",
  "RC1": "6",
  "RC2": "7",
  "RC3": "8",
  "RC4": "9",
  "RG6": "10",
  "RG7": "11",
  "RG8": "12",
  "~{MCLR}": "13",
  "RG9": "14",
  "VSS_15": "15",
  "VDD_16": "16",
  "RA0/TMS": "17",
  "RE8": "18",
  "RE9": "19",
  "RB5": "20",
  "RB4": "21",
  "RB3": "22",
  "RB2": "23",
  "PGEC1/RB1": "24",
  "PGED1/RB0": "25",
  "PGEC2/RB6": "26",
  "PGED2/RB7": "27",
  "RA9": "28",
  "RA10": "29",
  "AVDD": "30",
  "AVSS": "31",
  "RB8": "32",
  "RB9": "33",
  "RB10": "34",
  "RB11": "35",
  "VSS_36": "36",
  "VDD_37": "37",
  "RA1//TCK": "38",
  "RF13": "39",
  "RF12": "40",
  "RB12": "41",
  "RB13": "42",
  "RB14": "43",
  "RB15": "44",
  "VSS_45": "45",
  "VDD_46": "46",
  "RD14": "47",
  "RD15": "48",
  "RF4": "49",
  "RF5": "50",
  "RF3": "51",
  "RF2": "52",
  "RF8": "53",
  "VBUS": "54",
  "VUSB3V3": "55",
  "RG3/D-": "56",
  "RG2/D+": "57",
  "RA2": "58",
  "RA3": "59",
  "RA4/TDI": "60",
  "RA5/TDO": "61",
  "VDD_62": "62",
  "RC12/OSC1/CLK": "63",
  "RC15/OSC2/CLKO": "64",
  "VSS_65": "65",
  "RA14": "66",
  "RA15": "67",
  "RD8": "68",
  "RD9": "69",
  "RD10": "70",
  "RD11": "71",
  "RD0": "72",
  "RC13/SOSCI": "73",
  "RC14/SOSCO": "74",
  "VSS_75": "75",
  "RD1": "76",
  "RD2": "77",
  "RD3": "78",
  "RD12": "79",
  "RD13": "80",
  "RD4": "81",
  "RD5": "82",
  "RD6": "83",
  "RD7": "84",
  "VCAP/VDDCORE": "85",
  "VDD_86": "86",
  "RF0": "87",
  "RF1": "88",
  "RG1": "89",
  "RG0": "90",
  "RA6/TRCLK": "91",
  "RA7/TRD3": "92",
  "RE0": "93",
  "RE1": "94",
  "RG14/TRD2": "95",
  "RG12/TRD1": "96",
  "RG13/TRD0": "97",
  "RE2": "98",
  "RE3": "99",
  "RE4": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RG15: "bidirectional", VDD_2: "power_in", RE5: "bidirectional", RE6: "bidirectional", RE7: "bidirectional", RC1: "bidirectional", RC2: "bidirectional", RC3: "bidirectional", RC4: "bidirectional", RG6: "bidirectional", RG7: "bidirectional", RG8: "bidirectional", "~{MCLR}": "input", RG9: "bidirectional", VSS_15: "power_in", VDD_16: "power_in", "RA0/TMS": "bidirectional", RE8: "bidirectional", RE9: "bidirectional", RB5: "bidirectional", RB4: "bidirectional", RB3: "bidirectional", RB2: "bidirectional", "PGEC1/RB1": "bidirectional", "PGED1/RB0": "bidirectional", "PGEC2/RB6": "bidirectional", "PGED2/RB7": "bidirectional", RA9: "bidirectional", RA10: "bidirectional", AVDD: "power_in", AVSS: "power_in", RB8: "bidirectional", RB9: "bidirectional", RB10: "bidirectional", RB11: "bidirectional", VSS_36: "passive", VDD_37: "power_in", "RA1//TCK": "bidirectional", RF13: "bidirectional", RF12: "bidirectional", RB12: "bidirectional", RB13: "bidirectional", RB14: "bidirectional", RB15: "bidirectional", VSS_45: "passive", VDD_46: "power_in", RD14: "bidirectional", RD15: "bidirectional", RF4: "bidirectional", RF5: "bidirectional", RF3: "bidirectional", RF2: "bidirectional", RF8: "bidirectional", VBUS: "input", VUSB3V3: "power_in", "RG3/D-": "bidirectional", "RG2/D+": "bidirectional", RA2: "bidirectional", RA3: "bidirectional", "RA4/TDI": "bidirectional", "RA5/TDO": "bidirectional", VDD_62: "power_in", "RC12/OSC1/CLK": "bidirectional", "RC15/OSC2/CLKO": "bidirectional", VSS_65: "passive", RA14: "bidirectional", RA15: "bidirectional", RD8: "bidirectional", RD9: "bidirectional", RD10: "bidirectional", RD11: "bidirectional", RD0: "bidirectional", "RC13/SOSCI": "bidirectional", "RC14/SOSCO": "bidirectional", VSS_75: "passive", RD1: "bidirectional", RD2: "bidirectional", RD3: "bidirectional", RD12: "bidirectional", RD13: "bidirectional", RD4: "bidirectional", RD5: "bidirectional", RD6: "bidirectional", RD7: "bidirectional", "VCAP/VDDCORE": "power_out", VDD_86: "power_in", RF0: "bidirectional", RF1: "bidirectional", RG1: "bidirectional", RG0: "bidirectional", "RA6/TRCLK": "bidirectional", "RA7/TRD3": "bidirectional", RE0: "bidirectional", RE1: "bidirectional", "RG14/TRD2": "bidirectional", "RG12/TRD1": "bidirectional", "RG13/TRD0": "bidirectional", RE2: "bidirectional", RE3: "bidirectional", RE4: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "MCU_Microchip_PIC32:PIC32MX795F512L-80x-PT";
  override referencePrefix = "U";
}
