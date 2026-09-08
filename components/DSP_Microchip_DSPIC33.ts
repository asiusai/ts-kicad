// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * High-Performance, 16-bit Digital Signal Controller, 40MIPS, 256k Flash, 30k SRAM, TQFP-100
 *
 * KiCad symbol: `DSP_Microchip_DSPIC33:DSPIC33EP256MU810-xPT`. Reference prefix: `U`.
 * Footprint filters: TQFP*14x14mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/70616g.pdf
 * Keywords: 16-bit Digital Signal Controller Microchip dsPIC.
 * Default footprint: Package_QFP:TQFP-100_14x14mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DSPIC33EP256MU810_xPT extends Component.withPins({
  /** Physical pin 1: RG15; bidirectional. */
  "RG15": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: PWM3H/RE5; bidirectional. */
  "PWM3H/RE5": "3",
  /** Physical pin 4: PWM4L/RE6; bidirectional. */
  "PWM4L/RE6": "4",
  /** Physical pin 5: PWM4H/RE7; bidirectional. */
  "PWM4H/RE7": "5",
  /** Physical pin 6: RC1/PWM5L/AN16; bidirectional. */
  "RC1/PWM5L/AN16": "6",
  /** Physical pin 7: RC2/PWM5H/AN17; bidirectional. */
  "RC2/PWM5H/AN17": "7",
  /** Physical pin 8: RC3/PWM6L/AN18; bidirectional. */
  "RC3/PWM6L/AN18": "8",
  /** Physical pin 9: RC4/PWM6H/AN19; bidirectional. */
  "RC4/PWM6H/AN19": "9",
  /** Physical pin 10: SCK2/PMA5/RG6; bidirectional. */
  "SCK2/PMA5/RG6": "10",
  /** Physical pin 11: SDI2/PMA4/RG7; bidirectional. */
  "SDI2/PMA4/RG7": "11",
  /** Physical pin 12: SDO2/PMA3/RG8; bidirectional. */
  "SDO2/PMA3/RG8": "12",
  /** Physical pin 13: ~{MCLR}; input. */
  "~{MCLR}": "13",
  /** Physical pin 14: PMA2/RG9; bidirectional. */
  "PMA2/RG9": "14",
  /** Physical pin 15: VSS; power_in. */
  "VSS_15": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD_16": "16",
  /** Physical pin 17: RA0/TMS; bidirectional. */
  "RA0/TMS": "17",
  /** Physical pin 18: AN20/RE8; bidirectional. */
  "AN20/RE8": "18",
  /** Physical pin 19: AN21/RE9; bidirectional. */
  "AN21/RE9": "19",
  /** Physical pin 20: RB5/AN5; bidirectional. */
  "RB5/AN5": "20",
  /** Physical pin 21: RB4/AN4; bidirectional. */
  "RB4/AN4": "21",
  /** Physical pin 22: RB3/AN3; bidirectional. */
  "RB3/AN3": "22",
  /** Physical pin 23: RB2/AN2; bidirectional. */
  "RB2/AN2": "23",
  /** Physical pin 24: RB1/AN1/PGEC3; bidirectional. */
  "RB1/AN1/PGEC3": "24",
  /** Physical pin 25: RB0/AN0/PGED3; bidirectional. */
  "RB0/AN0/PGED3": "25",
  /** Physical pin 26: RB6/AN6/PGEC1; bidirectional. */
  "RB6/AN6/PGEC1": "26",
  /** Physical pin 27: RB7/AN7/PGED1; bidirectional. */
  "RB7/AN7/PGED1": "27",
  /** Physical pin 28: RA9/VREF-; bidirectional. */
  "RA9/VREF-": "28",
  /** Physical pin 29: RA10/VREF+; bidirectional. */
  "RA10/VREF+": "29",
  /** Physical pin 30: AVDD; power_in. */
  "AVDD": "30",
  /** Physical pin 31: AVSS; power_in. */
  "AVSS": "31",
  /** Physical pin 32: RB8/PMA6/AN8; bidirectional. */
  "RB8/PMA6/AN8": "32",
  /** Physical pin 33: RB9/PMA7/AN9; bidirectional. */
  "RB9/PMA7/AN9": "33",
  /** Physical pin 34: RB10/PMA13/AN10; bidirectional. */
  "RB10/PMA13/AN10": "34",
  /** Physical pin 35: RB11/PMA12/AN11; bidirectional. */
  "RB11/PMA12/AN11": "35",
  /** Physical pin 36: VSS; passive. */
  "VSS_36": "36",
  /** Physical pin 37: VDD; power_in. */
  "VDD_37": "37",
  /** Physical pin 38: RA1/TCK; bidirectional. */
  "RA1/TCK": "38",
  /** Physical pin 39: RF13; bidirectional. */
  "RF13": "39",
  /** Physical pin 40: RF12; bidirectional. */
  "RF12": "40",
  /** Physical pin 41: RB12/PMA11/AN12; bidirectional. */
  "RB12/PMA11/AN12": "41",
  /** Physical pin 42: RB13/PMA10/AN13; bidirectional. */
  "RB13/PMA10/AN13": "42",
  /** Physical pin 43: RB14/PMA1/AN14; bidirectional. */
  "RB14/PMA1/AN14": "43",
  /** Physical pin 44: RB15/PMA0/AN15; bidirectional. */
  "RB15/PMA0/AN15": "44",
  /** Physical pin 45: VSS; passive. */
  "VSS_45": "45",
  /** Physical pin 46: VDD; power_in. */
  "VDD_46": "46",
  /** Physical pin 47: RD14; bidirectional. */
  "RD14": "47",
  /** Physical pin 48: RD15; bidirectional. */
  "RD15": "48",
  /** Physical pin 49: SDA2/PMA9/RF4; bidirectional. */
  "SDA2/PMA9/RF4": "49",
  /** Physical pin 50: SCL2/PMA8/RF5; bidirectional. */
  "SCL2/PMA8/RF5": "50",
  /** Physical pin 51: RF3; bidirectional. */
  "RF3": "51",
  /** Physical pin 52: RF2; bidirectional. */
  "RF2": "52",
  /** Physical pin 53: RF8; bidirectional. */
  "RF8": "53",
  /** Physical pin 54: VBUS; bidirectional. */
  "VBUS": "54",
  /** Physical pin 55: VUSB3V3; bidirectional. */
  "VUSB3V3": "55",
  /** Physical pin 56: D-/RG3; bidirectional. */
  "D-/RG3": "56",
  /** Physical pin 57: D+/RG2; bidirectional. */
  "D+/RG2": "57",
  /** Physical pin 58: RA2/ASCL2; bidirectional. */
  "RA2/ASCL2": "58",
  /** Physical pin 59: RA3/ASDA2; bidirectional. */
  "RA3/ASDA2": "59",
  /** Physical pin 60: RA4/TDI; bidirectional. */
  "RA4/TDI": "60",
  /** Physical pin 61: RA5/TDO; bidirectional. */
  "RA5/TDO": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: RC12/OSC1; bidirectional. */
  "RC12/OSC1": "63",
  /** Physical pin 64: RC15/CLKO/OSC2; bidirectional. */
  "RC15/CLKO/OSC2": "64",
  /** Physical pin 65: VSS; passive. */
  "VSS_65": "65",
  /** Physical pin 66: RA14; bidirectional. */
  "RA14": "66",
  /** Physical pin 67: RA15; bidirectional. */
  "RA15": "67",
  /** Physical pin 68: RTCC/RD8; bidirectional. */
  "RTCC/RD8": "68",
  /** Physical pin 69: ASDA1/RD9; bidirectional. */
  "ASDA1/RD9": "69",
  /** Physical pin 70: ASCL1/RD10; bidirectional. */
  "ASCL1/RD10": "70",
  /** Physical pin 71: RD11; bidirectional. */
  "RD11": "71",
  /** Physical pin 72: INT0/RD0; bidirectional. */
  "INT0/RD0": "72",
  /** Physical pin 73: RC13/SOSCI/PGED2; bidirectional. */
  "RC13/SOSCI/PGED2": "73",
  /** Physical pin 74: RC14/T1CK/SOSCO/PGEC2; bidirectional. */
  "RC14/T1CK/SOSCO/PGEC2": "74",
  /** Physical pin 75: VSS; passive. */
  "VSS_75": "75",
  /** Physical pin 76: RD1; bidirectional. */
  "RD1": "76",
  /** Physical pin 77: DPH/RD2; bidirectional. */
  "DPH/RD2": "77",
  /** Physical pin 78: PMBE/RD3; bidirectional. */
  "PMBE/RD3": "78",
  /** Physical pin 79: RD12; bidirectional. */
  "RD12": "79",
  /** Physical pin 80: RD13; bidirectional. */
  "RD13": "80",
  /** Physical pin 81: PMWR/RD4; bidirectional. */
  "PMWR/RD4": "81",
  /** Physical pin 82: PMRD/RD5; bidirectional. */
  "PMRD/RD5": "82",
  /** Physical pin 83: RD6; bidirectional. */
  "RD6": "83",
  /** Physical pin 84: RD7; bidirectional. */
  "RD7": "84",
  /** Physical pin 85: VCAP; passive. */
  "VCAP": "85",
  /** Physical pin 86: VDD; power_in. */
  "VDD_86": "86",
  /** Physical pin 87: RF0; bidirectional. */
  "RF0": "87",
  /** Physical pin 88: RF1; bidirectional. */
  "RF1": "88",
  /** Physical pin 89: RG1; bidirectional. */
  "RG1": "89",
  /** Physical pin 90: RG0; bidirectional. */
  "RG0": "90",
  /** Physical pin 91: RA6/AN22; bidirectional. */
  "RA6/AN22": "91",
  /** Physical pin 92: RA7/AN23; bidirectional. */
  "RA7/AN23": "92",
  /** Physical pin 93: AN24/PWM1L/RE0; bidirectional. */
  "AN24/PWM1L/RE0": "93",
  /** Physical pin 94: AN25/PWM1H/RE1; bidirectional. */
  "AN25/PWM1H/RE1": "94",
  /** Physical pin 95: RG14; bidirectional. */
  "RG14": "95",
  /** Physical pin 96: RG12; bidirectional. */
  "RG12": "96",
  /** Physical pin 97: RG13; bidirectional. */
  "RG13": "97",
  /** Physical pin 98: AN26/PWM2L/PMD2/RE2; bidirectional. */
  "AN26/PWM2L/PMD2/RE2": "98",
  /** Physical pin 99: AN27/PWM2H/PMD3/RE3; bidirectional. */
  "AN27/PWM2H/PMD3/RE3": "99",
  /** Physical pin 100: AN28/PWM3L/PMD4/RE4; bidirectional. */
  "AN28/PWM3L/PMD4/RE4": "100",
}) {
  override schema = "DSP_Microchip_DSPIC33:DSPIC33EP256MU810-xPT";
  override referencePrefix = "U";
}

/**
 * 40MIPS, 128k Flash, 8k SRAM
 *
 * KiCad symbol: `DSP_Microchip_DSPIC33:DSPIC33FJ128GP204`. Reference prefix: `U`.
 * Footprint filters: QFN?44*1EP*8x8mm*P0.65mm*, TQFP?44*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/70292G.pdf
 * Keywords: 16-bit Digital Signal Controller Microchip dsPIC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DSPIC33FJ128GP204 extends Component.withPins({
  /** Physical pin 1: SDA1/RP9/CN21/PMD3/RB9; bidirectional. */
  "SDA1/RP9/CN21/PMD3/RB9": "1",
  /** Physical pin 2: RP22/CN18/PMA1/RC6; bidirectional. */
  "RP22/CN18/PMA1/RC6": "2",
  /** Physical pin 3: RP23/CN17/PMA0/RC7; bidirectional. */
  "RP23/CN17/PMA0/RC7": "3",
  /** Physical pin 4: RP24/CN20/PMA5/RC8; bidirectional. */
  "RP24/CN20/PMA5/RC8": "4",
  /** Physical pin 5: RP25/CN19/PMA6/RC9; bidirectional. */
  "RP25/CN19/PMA6/RC9": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS_6": "6",
  /** Physical pin 7: VCAP; power_in. */
  "VCAP": "7",
  /** Physical pin 8: PGED2/EMCD2/RP10/CN16/PMD2/RB10; bidirectional. */
  "PGED2/EMCD2/RP10/CN16/PMD2/RB10": "8",
  /** Physical pin 9: PGEC2/RP11/CN15/PMD1/RB11; bidirectional. */
  "PGEC2/RP11/CN15/PMD1/RB11": "9",
  /** Physical pin 10: AN12/RP12/CN14/PMD0/RB12; bidirectional. */
  "AN12/RP12/CN14/PMD0/RB12": "10",
  /** Physical pin 11: AN11/RP13/CN13/PMRD/RB13; bidirectional. */
  "AN11/RP13/CN13/PMRD/RB13": "11",
  /** Physical pin 12: TMS/PMA10/RA10; bidirectional. */
  "TMS/PMA10/RA10": "12",
  /** Physical pin 13: TCK/PMA7/RA7; bidirectional. */
  "TCK/PMA7/RA7": "13",
  /** Physical pin 14: AN10/RTCC/RP14/CN12/PMWR/RB14; bidirectional. */
  "AN10/RTCC/RP14/CN12/PMWR/RB14": "14",
  /** Physical pin 15: AN9/RP15/CN11/PMCS1/RB15; bidirectional. */
  "AN9/RP15/CN11/PMCS1/RB15": "15",
  /** Physical pin 16: AVSS; power_in. */
  "AVSS": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: ~{MCLR}; input. */
  "~{MCLR}": "18",
  /** Physical pin 19: AN0/VREF+/CN2/RA0; bidirectional. */
  "AN0/VREF+/CN2/RA0": "19",
  /** Physical pin 20: AN1/VREF-/CN3/RA1; bidirectional. */
  "AN1/VREF-/CN3/RA1": "20",
  /** Physical pin 21: PGED1/AN2/C2IN-/RP0/CN4/RB0; bidirectional. */
  "PGED1/AN2/C2IN-/RP0/CN4/RB0": "21",
  /** Physical pin 22: PGEC1/AN3/C2IN+/RP1/CN5/RB1; bidirectional. */
  "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "22",
  /** Physical pin 23: AN4/C1IN-/RP2/CN6/RB2; bidirectional. */
  "AN4/C1IN-/RP2/CN6/RB2": "23",
  /** Physical pin 24: AN5/C1IN+/RP3/CN7/RB3; bidirectional. */
  "AN5/C1IN+/RP3/CN7/RB3": "24",
  /** Physical pin 25: AN6/RP16/CN8/RC0; bidirectional. */
  "AN6/RP16/CN8/RC0": "25",
  /** Physical pin 26: AN7/RP17/CN9/RC1; bidirectional. */
  "AN7/RP17/CN9/RC1": "26",
  /** Physical pin 27: AN8/CVREF/RP18/PMA2/CN10/RC2; bidirectional. */
  "AN8/CVREF/RP18/PMA2/CN10/RC2": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: VSS; power_in. */
  "VSS_29": "29",
  /** Physical pin 30: OSC1/CLKI/CN30/RA2; input. */
  "OSC1/CLKI/CN30/RA2": "30",
  /** Physical pin 31: OSC2/CLKO/CN29/RA3; input. */
  "OSC2/CLKO/CN29/RA3": "31",
  /** Physical pin 32: TDO/PMA8/RA8; input. */
  "TDO/PMA8/RA8": "32",
  /** Physical pin 33: SOSCI/RP4/CN1/RB4; input. */
  "SOSCI/RP4/CN1/RB4": "33",
  /** Physical pin 34: SOSCO/T1CK/CN0/RA4; input. */
  "SOSCO/T1CK/CN0/RA4": "34",
  /** Physical pin 35: TDI/PMA9/RA9; input. */
  "TDI/PMA9/RA9": "35",
  /** Physical pin 36: RP19/CN28/PMBE/RC3; input. */
  "RP19/CN28/PMBE/RC3": "36",
  /** Physical pin 37: RP20/CN25/PMA4/RC4; input. */
  "RP20/CN25/PMA4/RC4": "37",
  /** Physical pin 38: RP21/CN26/PMA3/RC5; input. */
  "RP21/CN26/PMA3/RC5": "38",
  /** Physical pin 39: VSS; power_in. */
  "VSS_39": "39",
  /** Physical pin 40: VDD; power_in. */
  "VDD_40": "40",
  /** Physical pin 41: PGED3/ASDA1/RP5/CN27/PMD7/RB5; input. */
  "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "41",
  /** Physical pin 42: PGEC3/ASCL1/RP6/CN24/PMD6/RB6; input. */
  "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "42",
  /** Physical pin 43: INT0/RP7/CN23/PMD5/RB7; input. */
  "INT0/RP7/CN23/PMD5/RB7": "43",
  /** Physical pin 44: SCL1/RP8/CN22/PMD4/RB8; input. */
  "SCL1/RP8/CN22/PMD4/RB8": "44",
}) {
  override schema = "DSP_Microchip_DSPIC33:DSPIC33FJ128GP204";
  override referencePrefix = "U";
}

/**
 * 40MIPS, 128k Flash, 16k SRAM, ECAN, Audio DAC
 *
 * KiCad symbol: `DSP_Microchip_DSPIC33:DSPIC33FJ128GP804`. Reference prefix: `U`.
 * Footprint filters: QFN?44*1EP*8x8mm*P0.65mm*, TQFP?44*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/70292G.pdf
 * Keywords: 16-bit Digital Signal Controller Microchip dsPIC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DSPIC33FJ128GP804 extends Component.withPins({
  /** Physical pin 1: SDA1/RP9/CN21/PMD3/RB9; bidirectional. */
  "SDA1/RP9/CN21/PMD3/RB9": "1",
  /** Physical pin 2: RP22/CN18/PMA1/RC6; bidirectional. */
  "RP22/CN18/PMA1/RC6": "2",
  /** Physical pin 3: RP23/CN17/PMA0/RC7; bidirectional. */
  "RP23/CN17/PMA0/RC7": "3",
  /** Physical pin 4: RP24/CN20/PMA5/RC8; bidirectional. */
  "RP24/CN20/PMA5/RC8": "4",
  /** Physical pin 5: RP25/CN19/PMA6/RC9; bidirectional. */
  "RP25/CN19/PMA6/RC9": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS_6": "6",
  /** Physical pin 7: VCAP; power_in. */
  "VCAP": "7",
  /** Physical pin 8: PGED2/EMCD2/RP10/CN16/PMD2/RB10; bidirectional. */
  "PGED2/EMCD2/RP10/CN16/PMD2/RB10": "8",
  /** Physical pin 9: PGEC2/RP11/CN15/PMD1/RB11; bidirectional. */
  "PGEC2/RP11/CN15/PMD1/RB11": "9",
  /** Physical pin 10: AN12/DAC1RP/RP12/CN14/PMD0/RB12; bidirectional. */
  "AN12/DAC1RP/RP12/CN14/PMD0/RB12": "10",
  /** Physical pin 11: AN11/DAC1RN/RP13/CN13/PMRD/RB13; bidirectional. */
  "AN11/DAC1RN/RP13/CN13/PMRD/RB13": "11",
  /** Physical pin 12: TMS/PMA10/RA10; bidirectional. */
  "TMS/PMA10/RA10": "12",
  /** Physical pin 13: TCK/PMA7/RA7; bidirectional. */
  "TCK/PMA7/RA7": "13",
  /** Physical pin 14: AN10/DAC1LP/RTCC/RP14/CN12/PMWR/RB14; bidirectional. */
  "AN10/DAC1LP/RTCC/RP14/CN12/PMWR/RB14": "14",
  /** Physical pin 15: AN9/DAC1LN/RP15/CN11/PMCS1/RB15; bidirectional. */
  "AN9/DAC1LN/RP15/CN11/PMCS1/RB15": "15",
  /** Physical pin 16: AVSS; power_in. */
  "AVSS": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: ~{MCLR}; input. */
  "~{MCLR}": "18",
  /** Physical pin 19: AN0/VREF+/CN2/RA0; bidirectional. */
  "AN0/VREF+/CN2/RA0": "19",
  /** Physical pin 20: AN1/VREF-/CN3/RA1; bidirectional. */
  "AN1/VREF-/CN3/RA1": "20",
  /** Physical pin 21: PGED1/AN2/C2IN-/RP0/CN4/RB0; bidirectional. */
  "PGED1/AN2/C2IN-/RP0/CN4/RB0": "21",
  /** Physical pin 22: PGEC1/AN3/C2IN+/RP1/CN5/RB1; bidirectional. */
  "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "22",
  /** Physical pin 23: AN4/C1IN-/RP2/CN6/RB2; bidirectional. */
  "AN4/C1IN-/RP2/CN6/RB2": "23",
  /** Physical pin 24: AN5/C1IN+/RP3/CN7/RB3; bidirectional. */
  "AN5/C1IN+/RP3/CN7/RB3": "24",
  /** Physical pin 25: AN6/DAC1RM/RP16/CN8/RC0; bidirectional. */
  "AN6/DAC1RM/RP16/CN8/RC0": "25",
  /** Physical pin 26: AN7/DAC1LM/RP17/CN9/RC1; bidirectional. */
  "AN7/DAC1LM/RP17/CN9/RC1": "26",
  /** Physical pin 27: AN8/CVREF/RP18/PMA2/CN10/RC2; bidirectional. */
  "AN8/CVREF/RP18/PMA2/CN10/RC2": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: VSS; power_in. */
  "VSS_29": "29",
  /** Physical pin 30: OSC1/CLKI/CN30/RA2; input. */
  "OSC1/CLKI/CN30/RA2": "30",
  /** Physical pin 31: OSC2/CLKO/CN29/RA3; input. */
  "OSC2/CLKO/CN29/RA3": "31",
  /** Physical pin 32: TDO/PMA8/RA8; input. */
  "TDO/PMA8/RA8": "32",
  /** Physical pin 33: SOSCI/RP4/CN1/RB4; input. */
  "SOSCI/RP4/CN1/RB4": "33",
  /** Physical pin 34: SOSCO/T1CK/CN0/RA4; input. */
  "SOSCO/T1CK/CN0/RA4": "34",
  /** Physical pin 35: TDI/PMA9/RA9; input. */
  "TDI/PMA9/RA9": "35",
  /** Physical pin 36: RP19/CN28/PMBE/RC3; input. */
  "RP19/CN28/PMBE/RC3": "36",
  /** Physical pin 37: RP20/CN25/PMA4/RC4; input. */
  "RP20/CN25/PMA4/RC4": "37",
  /** Physical pin 38: RP21/CN26/PMA3/RC5; input. */
  "RP21/CN26/PMA3/RC5": "38",
  /** Physical pin 39: VSS; power_in. */
  "VSS_39": "39",
  /** Physical pin 40: VDD; power_in. */
  "VDD_40": "40",
  /** Physical pin 41: PGED3/ASDA1/RP5/CN27/PMD7/RB5; input. */
  "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "41",
  /** Physical pin 42: PGEC3/ASCL1/RP6/CN24/PMD6/RB6; input. */
  "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "42",
  /** Physical pin 43: INT0/RP7/CN23/PMD5/RB7; input. */
  "INT0/RP7/CN23/PMD5/RB7": "43",
  /** Physical pin 44: SCL1/RP8/CN22/PMD4/RB8; input. */
  "SCL1/RP8/CN22/PMD4/RB8": "44",
}) {
  override schema = "DSP_Microchip_DSPIC33:DSPIC33FJ128GP804";
  override referencePrefix = "U";
}

/**
 * 40MIPS, 128k Flash, 8k SRAM
 *
 * KiCad symbol: `DSP_Microchip_DSPIC33:DSPIC33FJ128MC204`. Reference prefix: `U`.
 * Footprint filters: QFN?44*1EP*8x8mm*P0.65mm*, TQFP?44*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/70291G.pdf
 * Keywords: 16-bit Digital Signal Controller Microchip dsPIC Motor Control.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DSPIC33FJ128MC204 extends Component.withPins({
  /** Physical pin 1: SDA1/RP9/CN21/PMD3/RB9; bidirectional. */
  "SDA1/RP9/CN21/PMD3/RB9": "1",
  /** Physical pin 2: PWM2H1/RP22/CN18/PMA1/RC6; bidirectional. */
  "PWM2H1/RP22/CN18/PMA1/RC6": "2",
  /** Physical pin 3: PWM2L1/RP23/CN17/PMA0/RC7; bidirectional. */
  "PWM2L1/RP23/CN17/PMA0/RC7": "3",
  /** Physical pin 4: RP24/CN20/PMA5/RC8; bidirectional. */
  "RP24/CN20/PMA5/RC8": "4",
  /** Physical pin 5: RP25/CN19/PMA6/RC9; bidirectional. */
  "RP25/CN19/PMA6/RC9": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS_6": "6",
  /** Physical pin 7: VCAP; power_in. */
  "VCAP": "7",
  /** Physical pin 8: PGED2/PWM1H3/RP10/CN16/PMD2/RB10; bidirectional. */
  "PGED2/PWM1H3/RP10/CN16/PMD2/RB10": "8",
  /** Physical pin 9: PGEC2/PWM1L3/RP11/CN15/PMD1/RB11; bidirectional. */
  "PGEC2/PWM1L3/RP11/CN15/PMD1/RB11": "9",
  /** Physical pin 10: PWM1H2/RP12/CN14/PMD0/RB12; bidirectional. */
  "PWM1H2/RP12/CN14/PMD0/RB12": "10",
  /** Physical pin 11: PWM1L2/RP13/CN13/PMRD/RB13; bidirectional. */
  "PWM1L2/RP13/CN13/PMRD/RB13": "11",
  /** Physical pin 12: TMS/PMA10/RA10; bidirectional. */
  "TMS/PMA10/RA10": "12",
  /** Physical pin 13: TCK/PMA7/RA7; bidirectional. */
  "TCK/PMA7/RA7": "13",
  /** Physical pin 14: PWM1H1/RTCC/RP14/CN12/PMWR/RB14; bidirectional. */
  "PWM1H1/RTCC/RP14/CN12/PMWR/RB14": "14",
  /** Physical pin 15: PWM1L/RP15/CN11/PMCS1/RB15; bidirectional. */
  "PWM1L/RP15/CN11/PMCS1/RB15": "15",
  /** Physical pin 16: AVSS; power_in. */
  "AVSS": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: ~{MCLR}; input. */
  "~{MCLR}": "18",
  /** Physical pin 19: AN0/VREF+/CN2/RA0; bidirectional. */
  "AN0/VREF+/CN2/RA0": "19",
  /** Physical pin 20: AN1/VREF-/CN3/RA1; bidirectional. */
  "AN1/VREF-/CN3/RA1": "20",
  /** Physical pin 21: PGED1/AN2/C2IN-/RP0/CN4/RB0; bidirectional. */
  "PGED1/AN2/C2IN-/RP0/CN4/RB0": "21",
  /** Physical pin 22: PGEC1/AN3/C2IN+/RP1/CN5/RB1; bidirectional. */
  "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "22",
  /** Physical pin 23: AN4/C1IN-/RP2/CN6/RB2; bidirectional. */
  "AN4/C1IN-/RP2/CN6/RB2": "23",
  /** Physical pin 24: AN5/C1IN+/RP3/CN7/RB3; bidirectional. */
  "AN5/C1IN+/RP3/CN7/RB3": "24",
  /** Physical pin 25: AN6/RP16/CN8/RC0; bidirectional. */
  "AN6/RP16/CN8/RC0": "25",
  /** Physical pin 26: AN7/RP17/CN9/RC1; bidirectional. */
  "AN7/RP17/CN9/RC1": "26",
  /** Physical pin 27: AN8/CVREF/RP18/PMA2/CN10/RC2; bidirectional. */
  "AN8/CVREF/RP18/PMA2/CN10/RC2": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: VSS; power_in. */
  "VSS_29": "29",
  /** Physical pin 30: OSC1/CLKI/CN30/RA2; input. */
  "OSC1/CLKI/CN30/RA2": "30",
  /** Physical pin 31: OSC2/CLKO/CN29/RA3; input. */
  "OSC2/CLKO/CN29/RA3": "31",
  /** Physical pin 32: TDO/PMA8/RA8; input. */
  "TDO/PMA8/RA8": "32",
  /** Physical pin 33: SOSCI/RP4/CN1/RB4; input. */
  "SOSCI/RP4/CN1/RB4": "33",
  /** Physical pin 34: SOSCO/T1CK/CN0/RA4; input. */
  "SOSCO/T1CK/CN0/RA4": "34",
  /** Physical pin 35: TDI/PMA9/RA9; input. */
  "TDI/PMA9/RA9": "35",
  /** Physical pin 36: RP19/CN28/PMBE/RC3; input. */
  "RP19/CN28/PMBE/RC3": "36",
  /** Physical pin 37: RP20/CN25/PMA4/RC4; input. */
  "RP20/CN25/PMA4/RC4": "37",
  /** Physical pin 38: RP21/CN26/PMA3/RC5; input. */
  "RP21/CN26/PMA3/RC5": "38",
  /** Physical pin 39: VSS; power_in. */
  "VSS_39": "39",
  /** Physical pin 40: VDD; power_in. */
  "VDD_40": "40",
  /** Physical pin 41: PGED3/ASDA1/RP5/CN27/PMD7/RB5; input. */
  "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "41",
  /** Physical pin 42: PGEC3/ASCL1/RP6/CN24/PMD6/RB6; input. */
  "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "42",
  /** Physical pin 43: INT0/RP7/CN23/PMD5/RB7; input. */
  "INT0/RP7/CN23/PMD5/RB7": "43",
  /** Physical pin 44: SCL1/RP8/CN22/PMD4/RB8; input. */
  "SCL1/RP8/CN22/PMD4/RB8": "44",
}) {
  override schema = "DSP_Microchip_DSPIC33:DSPIC33FJ128MC204";
  override referencePrefix = "U";
}

/**
 * High-Performance, 16-bit Digital Signal Controller, 40MIPS, 256k Flash, 30k SRAM, TQFP-100
 *
 * KiCad symbol: `DSP_Microchip_DSPIC33:DSPIC33FJ256MC710A`. Reference prefix: `U`.
 * Footprint filters: TQFP*12x12mm*P0.4mm*, TQFP*14x14mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/70594C.pdf
 * Keywords: 16-bit Digital Signal Controller Microchip dsPIC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DSPIC33FJ256MC710A extends Component.withPins({
  /** Physical pin 1: RG15; bidirectional. */
  "RG15": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: PWM3H/RE5; bidirectional. */
  "PWM3H/RE5": "3",
  /** Physical pin 4: PWM4L/RE6; bidirectional. */
  "PWM4L/RE6": "4",
  /** Physical pin 5: PWM4H/RE7; bidirectional. */
  "PWM4H/RE7": "5",
  /** Physical pin 6: AN16/T2CK/T7CK/RC1; bidirectional. */
  "AN16/T2CK/T7CK/RC1": "6",
  /** Physical pin 7: AN17/T3CK/T6CK/RC2; bidirectional. */
  "AN17/T3CK/T6CK/RC2": "7",
  /** Physical pin 8: AN18/T4CK/T9CK/RC3; bidirectional. */
  "AN18/T4CK/T9CK/RC3": "8",
  /** Physical pin 9: AN19/T5CK/T8CK/RC4; bidirectional. */
  "AN19/T5CK/T8CK/RC4": "9",
  /** Physical pin 10: SCK2/CN8/RG6; bidirectional. */
  "SCK2/CN8/RG6": "10",
  /** Physical pin 11: SDI2/CN9/RG7; bidirectional. */
  "SDI2/CN9/RG7": "11",
  /** Physical pin 12: SDO2/CN10/RG8; bidirectional. */
  "SDO2/CN10/RG8": "12",
  /** Physical pin 13: ~{MCLR}; input. */
  "~{MCLR}": "13",
  /** Physical pin 14: ~{SS2}/CN11/RG9; bidirectional. */
  "~{SS2}/CN11/RG9": "14",
  /** Physical pin 15: VSS; passive. */
  "VSS_15": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD_16": "16",
  /** Physical pin 17: TMS/RA0; bidirectional. */
  "TMS/RA0": "17",
  /** Physical pin 18: AN20/~{FLTA}/INT1/RE8; bidirectional. */
  "AN20/~{FLTA}/INT1/RE8": "18",
  /** Physical pin 19: AN21/~{FLTB}/INT2/RE9; bidirectional. */
  "AN21/~{FLTB}/INT2/RE9": "19",
  /** Physical pin 20: AN5/QEB/CN7/RB5; bidirectional. */
  "AN5/QEB/CN7/RB5": "20",
  /** Physical pin 21: AN4/QEA/CN6/RB4; bidirectional. */
  "AN4/QEA/CN6/RB4": "21",
  /** Physical pin 22: AN3/INDX/CN5/RB3; bidirectional. */
  "AN3/INDX/CN5/RB3": "22",
  /** Physical pin 23: AN2/~{SS1}/CN4/RB2; bidirectional. */
  "AN2/~{SS1}/CN4/RB2": "23",
  /** Physical pin 24: PGEC3/AN1/CN3/RB1; bidirectional. */
  "PGEC3/AN1/CN3/RB1": "24",
  /** Physical pin 25: PGED3/AN0/CN2/RB0; bidirectional. */
  "PGED3/AN0/CN2/RB0": "25",
  /** Physical pin 26: PGEC1/AN6/OCFA/RB6; bidirectional. */
  "PGEC1/AN6/OCFA/RB6": "26",
  /** Physical pin 27: PGED1/AN7/RB7; bidirectional. */
  "PGED1/AN7/RB7": "27",
  /** Physical pin 28: VREF-/RA9; bidirectional. */
  "VREF-/RA9": "28",
  /** Physical pin 29: VREF+/RA10; bidirectional. */
  "VREF+/RA10": "29",
  /** Physical pin 30: AVDD; power_in. */
  "AVDD": "30",
  /** Physical pin 31: AVSS; power_in. */
  "AVSS": "31",
  /** Physical pin 32: AN8/RB8; bidirectional. */
  "AN8/RB8": "32",
  /** Physical pin 33: AN9/RB9; bidirectional. */
  "AN9/RB9": "33",
  /** Physical pin 34: AN10/RB10; bidirectional. */
  "AN10/RB10": "34",
  /** Physical pin 35: AN11/RB11; bidirectional. */
  "AN11/RB11": "35",
  /** Physical pin 36: VSS; passive. */
  "VSS_36": "36",
  /** Physical pin 37: VDD; power_in. */
  "VDD_37": "37",
  /** Physical pin 38: TCK/RA1; bidirectional. */
  "TCK/RA1": "38",
  /** Physical pin 39: ~{U2RTS}/RF13; bidirectional. */
  "~{U2RTS}/RF13": "39",
  /** Physical pin 40: ~{U2CTS}/RF12; bidirectional. */
  "~{U2CTS}/RF12": "40",
  /** Physical pin 41: AN12/RB12; bidirectional. */
  "AN12/RB12": "41",
  /** Physical pin 42: AN13/RB13; bidirectional. */
  "AN13/RB13": "42",
  /** Physical pin 43: AN14/RB14; bidirectional. */
  "AN14/RB14": "43",
  /** Physical pin 44: AN15/OCFB/CN12/RB15; bidirectional. */
  "AN15/OCFB/CN12/RB15": "44",
  /** Physical pin 45: VSS; passive. */
  "VSS_45": "45",
  /** Physical pin 46: VDD; power_in. */
  "VDD_46": "46",
  /** Physical pin 47: IC7/~{U1CTS}/CN20/RD14; bidirectional. */
  "IC7/~{U1CTS}/CN20/RD14": "47",
  /** Physical pin 48: IC8/~{U1RTS}/CN21/RD15; bidirectional. */
  "IC8/~{U1RTS}/CN21/RD15": "48",
  /** Physical pin 49: U2RX/CN17/RF4; bidirectional. */
  "U2RX/CN17/RF4": "49",
  /** Physical pin 50: U2TX/CN18/RF5; bidirectional. */
  "U2TX/CN18/RF5": "50",
  /** Physical pin 51: U1TX/RF3; bidirectional. */
  "U1TX/RF3": "51",
  /** Physical pin 52: U1RX/RF2; bidirectional. */
  "U1RX/RF2": "52",
  /** Physical pin 53: SDO1/RF8; bidirectional. */
  "SDO1/RF8": "53",
  /** Physical pin 54: SDI1/RF7; bidirectional. */
  "SDI1/RF7": "54",
  /** Physical pin 55: SCK1/INT0/RF6; bidirectional. */
  "SCK1/INT0/RF6": "55",
  /** Physical pin 56: SDA1/RG3; bidirectional. */
  "SDA1/RG3": "56",
  /** Physical pin 57: SCL1/RG2; bidirectional. */
  "SCL1/RG2": "57",
  /** Physical pin 58: SCL2/RA2; bidirectional. */
  "SCL2/RA2": "58",
  /** Physical pin 59: SDA2/RA3; bidirectional. */
  "SDA2/RA3": "59",
  /** Physical pin 60: TDI/RA4; bidirectional. */
  "TDI/RA4": "60",
  /** Physical pin 61: TDO/RA5; bidirectional. */
  "TDO/RA5": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: OSC1/CLKIN/RC12; bidirectional. */
  "OSC1/CLKIN/RC12": "63",
  /** Physical pin 64: OSC2/CLKO/RC15; bidirectional. */
  "OSC2/CLKO/RC15": "64",
  /** Physical pin 65: VSS; passive. */
  "VSS_65": "65",
  /** Physical pin 66: INT3/RA14; bidirectional. */
  "INT3/RA14": "66",
  /** Physical pin 67: INT4/RA15; bidirectional. */
  "INT4/RA15": "67",
  /** Physical pin 68: IC1/RD8; bidirectional. */
  "IC1/RD8": "68",
  /** Physical pin 69: IC2/RD9; bidirectional. */
  "IC2/RD9": "69",
  /** Physical pin 70: IC3/RD10; bidirectional. */
  "IC3/RD10": "70",
  /** Physical pin 71: IC4/RD11; bidirectional. */
  "IC4/RD11": "71",
  /** Physical pin 72: OC1/RD0; bidirectional. */
  "OC1/RD0": "72",
  /** Physical pin 73: PGED2/SOSCI/CN1/RC13; bidirectional. */
  "PGED2/SOSCI/CN1/RC13": "73",
  /** Physical pin 74: PGEC2/SOSCO/T1CK/CN0/RC14; bidirectional. */
  "PGEC2/SOSCO/T1CK/CN0/RC14": "74",
  /** Physical pin 75: VSS; power_in. */
  "VSS_75": "75",
  /** Physical pin 76: OC2/RD1; bidirectional. */
  "OC2/RD1": "76",
  /** Physical pin 77: OC3/RD2; bidirectional. */
  "OC3/RD2": "77",
  /** Physical pin 78: OC4/RD3; bidirectional. */
  "OC4/RD3": "78",
  /** Physical pin 79: IC5/RD12; bidirectional. */
  "IC5/RD12": "79",
  /** Physical pin 80: IC6/CN19/RD13; bidirectional. */
  "IC6/CN19/RD13": "80",
  /** Physical pin 81: OC5/CN13/RD4; bidirectional. */
  "OC5/CN13/RD4": "81",
  /** Physical pin 82: OC6/CN14/RD5; bidirectional. */
  "OC6/CN14/RD5": "82",
  /** Physical pin 83: OC7/CN15/RD6; bidirectional. */
  "OC7/CN15/RD6": "83",
  /** Physical pin 84: OC8/UPDN/CN16/RD7; bidirectional. */
  "OC8/UPDN/CN16/RD7": "84",
  /** Physical pin 85: VCAP; passive. */
  "VCAP": "85",
  /** Physical pin 86: VDD; power_in. */
  "VDD_86": "86",
  /** Physical pin 87: C1RX/RF0; bidirectional. */
  "C1RX/RF0": "87",
  /** Physical pin 88: C1TX/RF1; bidirectional. */
  "C1TX/RF1": "88",
  /** Physical pin 89: C2TX/RG1; bidirectional. */
  "C2TX/RG1": "89",
  /** Physical pin 90: C2RX/RG0; bidirectional. */
  "C2RX/RG0": "90",
  /** Physical pin 91: AN22/CN22/RA6; bidirectional. */
  "AN22/CN22/RA6": "91",
  /** Physical pin 92: AN23/CN23/RA7; bidirectional. */
  "AN23/CN23/RA7": "92",
  /** Physical pin 93: PWM1L/RE0; bidirectional. */
  "PWM1L/RE0": "93",
  /** Physical pin 94: PWM1H/RE1; bidirectional. */
  "PWM1H/RE1": "94",
  /** Physical pin 95: RG14; bidirectional. */
  "RG14": "95",
  /** Physical pin 96: RG12; bidirectional. */
  "RG12": "96",
  /** Physical pin 97: RG13; bidirectional. */
  "RG13": "97",
  /** Physical pin 98: PWM2L/RE2; bidirectional. */
  "PWM2L/RE2": "98",
  /** Physical pin 99: PWM2H/RE3; bidirectional. */
  "PWM2H/RE3": "99",
  /** Physical pin 100: PWM3L/RE4; bidirectional. */
  "PWM3L/RE4": "100",
}) {
  override schema = "DSP_Microchip_DSPIC33:DSPIC33FJ256MC710A";
  override referencePrefix = "U";
}

/**
 * High-Performance, 16-bit Digital Signal Controller, 40MIPS, 128k Flash, 8k SRAM, TQFP-100
 *
 * KiCad symbol: `DSP_Microchip_DSPIC33:DSPIC33FJ128MC510A`. Reference prefix: `U`.
 * Footprint filters: TQFP*12x12mm*P0.4mm*, TQFP*14x14mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/70594C.pdf
 * Keywords: 16-bit Digital Signal Controller Microchip dsPIC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DSPIC33FJ128MC510A extends Component.withPins({
  /** Physical pin 1: RG15; bidirectional. */
  "RG15": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: PWM3H/RE5; bidirectional. */
  "PWM3H/RE5": "3",
  /** Physical pin 4: PWM4L/RE6; bidirectional. */
  "PWM4L/RE6": "4",
  /** Physical pin 5: PWM4H/RE7; bidirectional. */
  "PWM4H/RE7": "5",
  /** Physical pin 6: AN16/T2CK/T7CK/RC1; bidirectional. */
  "AN16/T2CK/T7CK/RC1": "6",
  /** Physical pin 7: AN17/T3CK/T6CK/RC2; bidirectional. */
  "AN17/T3CK/T6CK/RC2": "7",
  /** Physical pin 8: AN18/T4CK/T9CK/RC3; bidirectional. */
  "AN18/T4CK/T9CK/RC3": "8",
  /** Physical pin 9: AN19/T5CK/T8CK/RC4; bidirectional. */
  "AN19/T5CK/T8CK/RC4": "9",
  /** Physical pin 10: SCK2/CN8/RG6; bidirectional. */
  "SCK2/CN8/RG6": "10",
  /** Physical pin 11: SDI2/CN9/RG7; bidirectional. */
  "SDI2/CN9/RG7": "11",
  /** Physical pin 12: SDO2/CN10/RG8; bidirectional. */
  "SDO2/CN10/RG8": "12",
  /** Physical pin 13: ~{MCLR}; input. */
  "~{MCLR}": "13",
  /** Physical pin 14: ~{SS2}/CN11/RG9; bidirectional. */
  "~{SS2}/CN11/RG9": "14",
  /** Physical pin 15: VSS; passive. */
  "VSS_15": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD_16": "16",
  /** Physical pin 17: TMS/RA0; bidirectional. */
  "TMS/RA0": "17",
  /** Physical pin 18: AN20/~{FLTA}/INT1/RE8; bidirectional. */
  "AN20/~{FLTA}/INT1/RE8": "18",
  /** Physical pin 19: AN21/~{FLTB}/INT2/RE9; bidirectional. */
  "AN21/~{FLTB}/INT2/RE9": "19",
  /** Physical pin 20: AN5/QEB/CN7/RB5; bidirectional. */
  "AN5/QEB/CN7/RB5": "20",
  /** Physical pin 21: AN4/QEA/CN6/RB4; bidirectional. */
  "AN4/QEA/CN6/RB4": "21",
  /** Physical pin 22: AN3/INDX/CN5/RB3; bidirectional. */
  "AN3/INDX/CN5/RB3": "22",
  /** Physical pin 23: AN2/~{SS1}/CN4/RB2; bidirectional. */
  "AN2/~{SS1}/CN4/RB2": "23",
  /** Physical pin 24: PGEC3/AN1/CN3/RB1; bidirectional. */
  "PGEC3/AN1/CN3/RB1": "24",
  /** Physical pin 25: PGED3/AN0/CN2/RB0; bidirectional. */
  "PGED3/AN0/CN2/RB0": "25",
  /** Physical pin 26: PGEC1/AN6/OCFA/RB6; bidirectional. */
  "PGEC1/AN6/OCFA/RB6": "26",
  /** Physical pin 27: PGED1/AN7/RB7; bidirectional. */
  "PGED1/AN7/RB7": "27",
  /** Physical pin 28: VREF-/RA9; bidirectional. */
  "VREF-/RA9": "28",
  /** Physical pin 29: VREF+/RA10; bidirectional. */
  "VREF+/RA10": "29",
  /** Physical pin 30: AVDD; power_in. */
  "AVDD": "30",
  /** Physical pin 31: AVSS; power_in. */
  "AVSS": "31",
  /** Physical pin 32: AN8/RB8; bidirectional. */
  "AN8/RB8": "32",
  /** Physical pin 33: AN9/RB9; bidirectional. */
  "AN9/RB9": "33",
  /** Physical pin 34: AN10/RB10; bidirectional. */
  "AN10/RB10": "34",
  /** Physical pin 35: AN11/RB11; bidirectional. */
  "AN11/RB11": "35",
  /** Physical pin 36: VSS; passive. */
  "VSS_36": "36",
  /** Physical pin 37: VDD; power_in. */
  "VDD_37": "37",
  /** Physical pin 38: TCK/RA1; bidirectional. */
  "TCK/RA1": "38",
  /** Physical pin 39: ~{U2RTS}/RF13; bidirectional. */
  "~{U2RTS}/RF13": "39",
  /** Physical pin 40: ~{U2CTS}/RF12; bidirectional. */
  "~{U2CTS}/RF12": "40",
  /** Physical pin 41: AN12/RB12; bidirectional. */
  "AN12/RB12": "41",
  /** Physical pin 42: AN13/RB13; bidirectional. */
  "AN13/RB13": "42",
  /** Physical pin 43: AN14/RB14; bidirectional. */
  "AN14/RB14": "43",
  /** Physical pin 44: AN15/OCFB/CN12/RB15; bidirectional. */
  "AN15/OCFB/CN12/RB15": "44",
  /** Physical pin 45: VSS; passive. */
  "VSS_45": "45",
  /** Physical pin 46: VDD; power_in. */
  "VDD_46": "46",
  /** Physical pin 47: IC7/~{U1CTS}/CN20/RD14; bidirectional. */
  "IC7/~{U1CTS}/CN20/RD14": "47",
  /** Physical pin 48: IC8/~{U1RTS}/CN21/RD15; bidirectional. */
  "IC8/~{U1RTS}/CN21/RD15": "48",
  /** Physical pin 49: U2RX/CN17/RF4; bidirectional. */
  "U2RX/CN17/RF4": "49",
  /** Physical pin 50: U2TX/CN18/RF5; bidirectional. */
  "U2TX/CN18/RF5": "50",
  /** Physical pin 51: U1TX/RF3; bidirectional. */
  "U1TX/RF3": "51",
  /** Physical pin 52: U1RX/RF2; bidirectional. */
  "U1RX/RF2": "52",
  /** Physical pin 53: SDO1/RF8; bidirectional. */
  "SDO1/RF8": "53",
  /** Physical pin 54: SDI1/RF7; bidirectional. */
  "SDI1/RF7": "54",
  /** Physical pin 55: SCK1/INT0/RF6; bidirectional. */
  "SCK1/INT0/RF6": "55",
  /** Physical pin 56: SDA1/RG3; bidirectional. */
  "SDA1/RG3": "56",
  /** Physical pin 57: SCL1/RG2; bidirectional. */
  "SCL1/RG2": "57",
  /** Physical pin 58: SCL2/RA2; bidirectional. */
  "SCL2/RA2": "58",
  /** Physical pin 59: SDA2/RA3; bidirectional. */
  "SDA2/RA3": "59",
  /** Physical pin 60: TDI/RA4; bidirectional. */
  "TDI/RA4": "60",
  /** Physical pin 61: TDO/RA5; bidirectional. */
  "TDO/RA5": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: OSC1/CLKIN/RC12; bidirectional. */
  "OSC1/CLKIN/RC12": "63",
  /** Physical pin 64: OSC2/CLKO/RC15; bidirectional. */
  "OSC2/CLKO/RC15": "64",
  /** Physical pin 65: VSS; passive. */
  "VSS_65": "65",
  /** Physical pin 66: INT3/RA14; bidirectional. */
  "INT3/RA14": "66",
  /** Physical pin 67: INT4/RA15; bidirectional. */
  "INT4/RA15": "67",
  /** Physical pin 68: IC1/RD8; bidirectional. */
  "IC1/RD8": "68",
  /** Physical pin 69: IC2/RD9; bidirectional. */
  "IC2/RD9": "69",
  /** Physical pin 70: IC3/RD10; bidirectional. */
  "IC3/RD10": "70",
  /** Physical pin 71: IC4/RD11; bidirectional. */
  "IC4/RD11": "71",
  /** Physical pin 72: OC1/RD0; bidirectional. */
  "OC1/RD0": "72",
  /** Physical pin 73: PGED2/SOSCI/CN1/RC13; bidirectional. */
  "PGED2/SOSCI/CN1/RC13": "73",
  /** Physical pin 74: PGEC2/SOSCO/T1CK/CN0/RC14; bidirectional. */
  "PGEC2/SOSCO/T1CK/CN0/RC14": "74",
  /** Physical pin 75: VSS; power_in. */
  "VSS_75": "75",
  /** Physical pin 76: OC2/RD1; bidirectional. */
  "OC2/RD1": "76",
  /** Physical pin 77: OC3/RD2; bidirectional. */
  "OC3/RD2": "77",
  /** Physical pin 78: OC4/RD3; bidirectional. */
  "OC4/RD3": "78",
  /** Physical pin 79: IC5/RD12; bidirectional. */
  "IC5/RD12": "79",
  /** Physical pin 80: IC6/CN19/RD13; bidirectional. */
  "IC6/CN19/RD13": "80",
  /** Physical pin 81: OC5/CN13/RD4; bidirectional. */
  "OC5/CN13/RD4": "81",
  /** Physical pin 82: OC6/CN14/RD5; bidirectional. */
  "OC6/CN14/RD5": "82",
  /** Physical pin 83: OC7/CN15/RD6; bidirectional. */
  "OC7/CN15/RD6": "83",
  /** Physical pin 84: OC8/UPDN/CN16/RD7; bidirectional. */
  "OC8/UPDN/CN16/RD7": "84",
  /** Physical pin 85: VCAP; passive. */
  "VCAP": "85",
  /** Physical pin 86: VDD; power_in. */
  "VDD_86": "86",
  /** Physical pin 87: C1RX/RF0; bidirectional. */
  "C1RX/RF0": "87",
  /** Physical pin 88: C1TX/RF1; bidirectional. */
  "C1TX/RF1": "88",
  /** Physical pin 89: C2TX/RG1; bidirectional. */
  "C2TX/RG1": "89",
  /** Physical pin 90: C2RX/RG0; bidirectional. */
  "C2RX/RG0": "90",
  /** Physical pin 91: AN22/CN22/RA6; bidirectional. */
  "AN22/CN22/RA6": "91",
  /** Physical pin 92: AN23/CN23/RA7; bidirectional. */
  "AN23/CN23/RA7": "92",
  /** Physical pin 93: PWM1L/RE0; bidirectional. */
  "PWM1L/RE0": "93",
  /** Physical pin 94: PWM1H/RE1; bidirectional. */
  "PWM1H/RE1": "94",
  /** Physical pin 95: RG14; bidirectional. */
  "RG14": "95",
  /** Physical pin 96: RG12; bidirectional. */
  "RG12": "96",
  /** Physical pin 97: RG13; bidirectional. */
  "RG13": "97",
  /** Physical pin 98: PWM2L/RE2; bidirectional. */
  "PWM2L/RE2": "98",
  /** Physical pin 99: PWM2H/RE3; bidirectional. */
  "PWM2H/RE3": "99",
  /** Physical pin 100: PWM3L/RE4; bidirectional. */
  "PWM3L/RE4": "100",
}) {
  override schema = "DSP_Microchip_DSPIC33:DSPIC33FJ128MC510A";
  override referencePrefix = "U";
}

/**
 * High-Performance, 16-bit Digital Signal Controller,40MIPS, 128k Flash, 16k SRAM, TQFP-100
 *
 * KiCad symbol: `DSP_Microchip_DSPIC33:DSPIC33FJ128MC710A`. Reference prefix: `U`.
 * Footprint filters: TQFP*12x12mm*P0.4mm*, TQFP*14x14mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/70594C.pdf
 * Keywords: 16-bit Digital Signal Controller Microchip dsPIC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DSPIC33FJ128MC710A extends Component.withPins({
  /** Physical pin 1: RG15; bidirectional. */
  "RG15": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: PWM3H/RE5; bidirectional. */
  "PWM3H/RE5": "3",
  /** Physical pin 4: PWM4L/RE6; bidirectional. */
  "PWM4L/RE6": "4",
  /** Physical pin 5: PWM4H/RE7; bidirectional. */
  "PWM4H/RE7": "5",
  /** Physical pin 6: AN16/T2CK/T7CK/RC1; bidirectional. */
  "AN16/T2CK/T7CK/RC1": "6",
  /** Physical pin 7: AN17/T3CK/T6CK/RC2; bidirectional. */
  "AN17/T3CK/T6CK/RC2": "7",
  /** Physical pin 8: AN18/T4CK/T9CK/RC3; bidirectional. */
  "AN18/T4CK/T9CK/RC3": "8",
  /** Physical pin 9: AN19/T5CK/T8CK/RC4; bidirectional. */
  "AN19/T5CK/T8CK/RC4": "9",
  /** Physical pin 10: SCK2/CN8/RG6; bidirectional. */
  "SCK2/CN8/RG6": "10",
  /** Physical pin 11: SDI2/CN9/RG7; bidirectional. */
  "SDI2/CN9/RG7": "11",
  /** Physical pin 12: SDO2/CN10/RG8; bidirectional. */
  "SDO2/CN10/RG8": "12",
  /** Physical pin 13: ~{MCLR}; input. */
  "~{MCLR}": "13",
  /** Physical pin 14: ~{SS2}/CN11/RG9; bidirectional. */
  "~{SS2}/CN11/RG9": "14",
  /** Physical pin 15: VSS; passive. */
  "VSS_15": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD_16": "16",
  /** Physical pin 17: TMS/RA0; bidirectional. */
  "TMS/RA0": "17",
  /** Physical pin 18: AN20/~{FLTA}/INT1/RE8; bidirectional. */
  "AN20/~{FLTA}/INT1/RE8": "18",
  /** Physical pin 19: AN21/~{FLTB}/INT2/RE9; bidirectional. */
  "AN21/~{FLTB}/INT2/RE9": "19",
  /** Physical pin 20: AN5/QEB/CN7/RB5; bidirectional. */
  "AN5/QEB/CN7/RB5": "20",
  /** Physical pin 21: AN4/QEA/CN6/RB4; bidirectional. */
  "AN4/QEA/CN6/RB4": "21",
  /** Physical pin 22: AN3/INDX/CN5/RB3; bidirectional. */
  "AN3/INDX/CN5/RB3": "22",
  /** Physical pin 23: AN2/~{SS1}/CN4/RB2; bidirectional. */
  "AN2/~{SS1}/CN4/RB2": "23",
  /** Physical pin 24: PGEC3/AN1/CN3/RB1; bidirectional. */
  "PGEC3/AN1/CN3/RB1": "24",
  /** Physical pin 25: PGED3/AN0/CN2/RB0; bidirectional. */
  "PGED3/AN0/CN2/RB0": "25",
  /** Physical pin 26: PGEC1/AN6/OCFA/RB6; bidirectional. */
  "PGEC1/AN6/OCFA/RB6": "26",
  /** Physical pin 27: PGED1/AN7/RB7; bidirectional. */
  "PGED1/AN7/RB7": "27",
  /** Physical pin 28: VREF-/RA9; bidirectional. */
  "VREF-/RA9": "28",
  /** Physical pin 29: VREF+/RA10; bidirectional. */
  "VREF+/RA10": "29",
  /** Physical pin 30: AVDD; power_in. */
  "AVDD": "30",
  /** Physical pin 31: AVSS; power_in. */
  "AVSS": "31",
  /** Physical pin 32: AN8/RB8; bidirectional. */
  "AN8/RB8": "32",
  /** Physical pin 33: AN9/RB9; bidirectional. */
  "AN9/RB9": "33",
  /** Physical pin 34: AN10/RB10; bidirectional. */
  "AN10/RB10": "34",
  /** Physical pin 35: AN11/RB11; bidirectional. */
  "AN11/RB11": "35",
  /** Physical pin 36: VSS; passive. */
  "VSS_36": "36",
  /** Physical pin 37: VDD; power_in. */
  "VDD_37": "37",
  /** Physical pin 38: TCK/RA1; bidirectional. */
  "TCK/RA1": "38",
  /** Physical pin 39: ~{U2RTS}/RF13; bidirectional. */
  "~{U2RTS}/RF13": "39",
  /** Physical pin 40: ~{U2CTS}/RF12; bidirectional. */
  "~{U2CTS}/RF12": "40",
  /** Physical pin 41: AN12/RB12; bidirectional. */
  "AN12/RB12": "41",
  /** Physical pin 42: AN13/RB13; bidirectional. */
  "AN13/RB13": "42",
  /** Physical pin 43: AN14/RB14; bidirectional. */
  "AN14/RB14": "43",
  /** Physical pin 44: AN15/OCFB/CN12/RB15; bidirectional. */
  "AN15/OCFB/CN12/RB15": "44",
  /** Physical pin 45: VSS; passive. */
  "VSS_45": "45",
  /** Physical pin 46: VDD; power_in. */
  "VDD_46": "46",
  /** Physical pin 47: IC7/~{U1CTS}/CN20/RD14; bidirectional. */
  "IC7/~{U1CTS}/CN20/RD14": "47",
  /** Physical pin 48: IC8/~{U1RTS}/CN21/RD15; bidirectional. */
  "IC8/~{U1RTS}/CN21/RD15": "48",
  /** Physical pin 49: U2RX/CN17/RF4; bidirectional. */
  "U2RX/CN17/RF4": "49",
  /** Physical pin 50: U2TX/CN18/RF5; bidirectional. */
  "U2TX/CN18/RF5": "50",
  /** Physical pin 51: U1TX/RF3; bidirectional. */
  "U1TX/RF3": "51",
  /** Physical pin 52: U1RX/RF2; bidirectional. */
  "U1RX/RF2": "52",
  /** Physical pin 53: SDO1/RF8; bidirectional. */
  "SDO1/RF8": "53",
  /** Physical pin 54: SDI1/RF7; bidirectional. */
  "SDI1/RF7": "54",
  /** Physical pin 55: SCK1/INT0/RF6; bidirectional. */
  "SCK1/INT0/RF6": "55",
  /** Physical pin 56: SDA1/RG3; bidirectional. */
  "SDA1/RG3": "56",
  /** Physical pin 57: SCL1/RG2; bidirectional. */
  "SCL1/RG2": "57",
  /** Physical pin 58: SCL2/RA2; bidirectional. */
  "SCL2/RA2": "58",
  /** Physical pin 59: SDA2/RA3; bidirectional. */
  "SDA2/RA3": "59",
  /** Physical pin 60: TDI/RA4; bidirectional. */
  "TDI/RA4": "60",
  /** Physical pin 61: TDO/RA5; bidirectional. */
  "TDO/RA5": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: OSC1/CLKIN/RC12; bidirectional. */
  "OSC1/CLKIN/RC12": "63",
  /** Physical pin 64: OSC2/CLKO/RC15; bidirectional. */
  "OSC2/CLKO/RC15": "64",
  /** Physical pin 65: VSS; passive. */
  "VSS_65": "65",
  /** Physical pin 66: INT3/RA14; bidirectional. */
  "INT3/RA14": "66",
  /** Physical pin 67: INT4/RA15; bidirectional. */
  "INT4/RA15": "67",
  /** Physical pin 68: IC1/RD8; bidirectional. */
  "IC1/RD8": "68",
  /** Physical pin 69: IC2/RD9; bidirectional. */
  "IC2/RD9": "69",
  /** Physical pin 70: IC3/RD10; bidirectional. */
  "IC3/RD10": "70",
  /** Physical pin 71: IC4/RD11; bidirectional. */
  "IC4/RD11": "71",
  /** Physical pin 72: OC1/RD0; bidirectional. */
  "OC1/RD0": "72",
  /** Physical pin 73: PGED2/SOSCI/CN1/RC13; bidirectional. */
  "PGED2/SOSCI/CN1/RC13": "73",
  /** Physical pin 74: PGEC2/SOSCO/T1CK/CN0/RC14; bidirectional. */
  "PGEC2/SOSCO/T1CK/CN0/RC14": "74",
  /** Physical pin 75: VSS; power_in. */
  "VSS_75": "75",
  /** Physical pin 76: OC2/RD1; bidirectional. */
  "OC2/RD1": "76",
  /** Physical pin 77: OC3/RD2; bidirectional. */
  "OC3/RD2": "77",
  /** Physical pin 78: OC4/RD3; bidirectional. */
  "OC4/RD3": "78",
  /** Physical pin 79: IC5/RD12; bidirectional. */
  "IC5/RD12": "79",
  /** Physical pin 80: IC6/CN19/RD13; bidirectional. */
  "IC6/CN19/RD13": "80",
  /** Physical pin 81: OC5/CN13/RD4; bidirectional. */
  "OC5/CN13/RD4": "81",
  /** Physical pin 82: OC6/CN14/RD5; bidirectional. */
  "OC6/CN14/RD5": "82",
  /** Physical pin 83: OC7/CN15/RD6; bidirectional. */
  "OC7/CN15/RD6": "83",
  /** Physical pin 84: OC8/UPDN/CN16/RD7; bidirectional. */
  "OC8/UPDN/CN16/RD7": "84",
  /** Physical pin 85: VCAP; passive. */
  "VCAP": "85",
  /** Physical pin 86: VDD; power_in. */
  "VDD_86": "86",
  /** Physical pin 87: C1RX/RF0; bidirectional. */
  "C1RX/RF0": "87",
  /** Physical pin 88: C1TX/RF1; bidirectional. */
  "C1TX/RF1": "88",
  /** Physical pin 89: C2TX/RG1; bidirectional. */
  "C2TX/RG1": "89",
  /** Physical pin 90: C2RX/RG0; bidirectional. */
  "C2RX/RG0": "90",
  /** Physical pin 91: AN22/CN22/RA6; bidirectional. */
  "AN22/CN22/RA6": "91",
  /** Physical pin 92: AN23/CN23/RA7; bidirectional. */
  "AN23/CN23/RA7": "92",
  /** Physical pin 93: PWM1L/RE0; bidirectional. */
  "PWM1L/RE0": "93",
  /** Physical pin 94: PWM1H/RE1; bidirectional. */
  "PWM1H/RE1": "94",
  /** Physical pin 95: RG14; bidirectional. */
  "RG14": "95",
  /** Physical pin 96: RG12; bidirectional. */
  "RG12": "96",
  /** Physical pin 97: RG13; bidirectional. */
  "RG13": "97",
  /** Physical pin 98: PWM2L/RE2; bidirectional. */
  "PWM2L/RE2": "98",
  /** Physical pin 99: PWM2H/RE3; bidirectional. */
  "PWM2H/RE3": "99",
  /** Physical pin 100: PWM3L/RE4; bidirectional. */
  "PWM3L/RE4": "100",
}) {
  override schema = "DSP_Microchip_DSPIC33:DSPIC33FJ128MC710A";
  override referencePrefix = "U";
}

/**
 * 40MIPS, 128k Flash, 16k SRAM, ECAN, 16-bit DAC
 *
 * KiCad symbol: `DSP_Microchip_DSPIC33:DSPIC33FJ128MC804`. Reference prefix: `U`.
 * Footprint filters: QFN?44*1EP*8x8mm*P0.65mm*, TQFP?44*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/70291G.pdf
 * Keywords: 16-bit Digital Signal Controller Microchip dsPIC Motor Control.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DSPIC33FJ128MC804 extends Component.withPins({
  /** Physical pin 1: SDA1/RP9/CN21/PMD3/RB9; bidirectional. */
  "SDA1/RP9/CN21/PMD3/RB9": "1",
  /** Physical pin 2: PWM2H1/RP22/CN18/PMA1/RC6; bidirectional. */
  "PWM2H1/RP22/CN18/PMA1/RC6": "2",
  /** Physical pin 3: PWM2L1/RP23/CN17/PMA0/RC7; bidirectional. */
  "PWM2L1/RP23/CN17/PMA0/RC7": "3",
  /** Physical pin 4: RP24/CN20/PMA5/RC8; bidirectional. */
  "RP24/CN20/PMA5/RC8": "4",
  /** Physical pin 5: RP25/CN19/PMA6/RC9; bidirectional. */
  "RP25/CN19/PMA6/RC9": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS_6": "6",
  /** Physical pin 7: VCAP; power_in. */
  "VCAP": "7",
  /** Physical pin 8: PGED2/PWM1H3/RP10/CN16/PMD2/RB10; bidirectional. */
  "PGED2/PWM1H3/RP10/CN16/PMD2/RB10": "8",
  /** Physical pin 9: PGEC2/PWM1L3/RP11/CN15/PMD1/RB11; bidirectional. */
  "PGEC2/PWM1L3/RP11/CN15/PMD1/RB11": "9",
  /** Physical pin 10: PWM1H2/DAC1RP/RP12/CN14/PMD0/RB12; bidirectional. */
  "PWM1H2/DAC1RP/RP12/CN14/PMD0/RB12": "10",
  /** Physical pin 11: PWM1L2/DAC1RN/RP13/CN13/PMRD/RB13; bidirectional. */
  "PWM1L2/DAC1RN/RP13/CN13/PMRD/RB13": "11",
  /** Physical pin 12: TMS/PMA10/RA10; bidirectional. */
  "TMS/PMA10/RA10": "12",
  /** Physical pin 13: TCK/PMA7/RA7; bidirectional. */
  "TCK/PMA7/RA7": "13",
  /** Physical pin 14: PWM1H1/DAC1LP/RTCC/RP14/CN12/PMWR/RB14; bidirectional. */
  "PWM1H1/DAC1LP/RTCC/RP14/CN12/PMWR/RB14": "14",
  /** Physical pin 15: PWM1L/DAC1LN/RP15/CN11/PMCS1/RB15; bidirectional. */
  "PWM1L/DAC1LN/RP15/CN11/PMCS1/RB15": "15",
  /** Physical pin 16: AVSS; power_in. */
  "AVSS": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: ~{MCLR}; input. */
  "~{MCLR}": "18",
  /** Physical pin 19: AN0/VREF+/CN2/RA0; bidirectional. */
  "AN0/VREF+/CN2/RA0": "19",
  /** Physical pin 20: AN1/VREF-/CN3/RA1; bidirectional. */
  "AN1/VREF-/CN3/RA1": "20",
  /** Physical pin 21: PGED1/AN2/C2IN-/RP0/CN4/RB0; bidirectional. */
  "PGED1/AN2/C2IN-/RP0/CN4/RB0": "21",
  /** Physical pin 22: PGEC1/AN3/C2IN+/RP1/CN5/RB1; bidirectional. */
  "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "22",
  /** Physical pin 23: AN4/C1IN-/RP2/CN6/RB2; bidirectional. */
  "AN4/C1IN-/RP2/CN6/RB2": "23",
  /** Physical pin 24: AN5/C1IN+/RP3/CN7/RB3; bidirectional. */
  "AN5/C1IN+/RP3/CN7/RB3": "24",
  /** Physical pin 25: AN6/DAC1RM/RP16/CN8/RC0; bidirectional. */
  "AN6/DAC1RM/RP16/CN8/RC0": "25",
  /** Physical pin 26: AN7/DAC1LM/RP17/CN9/RC1; bidirectional. */
  "AN7/DAC1LM/RP17/CN9/RC1": "26",
  /** Physical pin 27: AN8/CVREF/RP18/PMA2/CN10/RC2; bidirectional. */
  "AN8/CVREF/RP18/PMA2/CN10/RC2": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: VSS; power_in. */
  "VSS_29": "29",
  /** Physical pin 30: OSC1/CLKI/CN30/RA2; input. */
  "OSC1/CLKI/CN30/RA2": "30",
  /** Physical pin 31: OSC2/CLKO/CN29/RA3; input. */
  "OSC2/CLKO/CN29/RA3": "31",
  /** Physical pin 32: TDO/PMA8/RA8; input. */
  "TDO/PMA8/RA8": "32",
  /** Physical pin 33: SOSCI/RP4/CN1/RB4; input. */
  "SOSCI/RP4/CN1/RB4": "33",
  /** Physical pin 34: SOSCO/T1CK/CN0/RA4; input. */
  "SOSCO/T1CK/CN0/RA4": "34",
  /** Physical pin 35: TDI/PMA9/RA9; input. */
  "TDI/PMA9/RA9": "35",
  /** Physical pin 36: RP19/CN28/PMBE/RC3; input. */
  "RP19/CN28/PMBE/RC3": "36",
  /** Physical pin 37: RP20/CN25/PMA4/RC4; input. */
  "RP20/CN25/PMA4/RC4": "37",
  /** Physical pin 38: RP21/CN26/PMA3/RC5; input. */
  "RP21/CN26/PMA3/RC5": "38",
  /** Physical pin 39: VSS; power_in. */
  "VSS_39": "39",
  /** Physical pin 40: VDD; power_in. */
  "VDD_40": "40",
  /** Physical pin 41: PGED3/ASDA1/RP5/CN27/PMD7/RB5; input. */
  "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "41",
  /** Physical pin 42: PGEC3/ASCL1/RP6/CN24/PMD6/RB6; input. */
  "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "42",
  /** Physical pin 43: INT0/RP7/CN23/PMD5/RB7; input. */
  "INT0/RP7/CN23/PMD5/RB7": "43",
  /** Physical pin 44: SCL1/RP8/CN22/PMD4/RB8; input. */
  "SCL1/RP8/CN22/PMD4/RB8": "44",
}) {
  override schema = "DSP_Microchip_DSPIC33:DSPIC33FJ128MC804";
  override referencePrefix = "U";
}

/**
 * High-Performance, 16-bit Digital Signal Controller, 40MIPS, 256k Flash, 16k SRAM, TQFP-100
 *
 * KiCad symbol: `DSP_Microchip_DSPIC33:DSPIC33FJ256MC510A`. Reference prefix: `U`.
 * Footprint filters: TQFP*12x12mm*P0.4mm*, TQFP*14x14mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/70594C.pdf
 * Keywords: 16-bit Digital Signal Controller Microchip dsPIC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DSPIC33FJ256MC510A extends Component.withPins({
  /** Physical pin 1: RG15; bidirectional. */
  "RG15": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: PWM3H/RE5; bidirectional. */
  "PWM3H/RE5": "3",
  /** Physical pin 4: PWM4L/RE6; bidirectional. */
  "PWM4L/RE6": "4",
  /** Physical pin 5: PWM4H/RE7; bidirectional. */
  "PWM4H/RE7": "5",
  /** Physical pin 6: AN16/T2CK/T7CK/RC1; bidirectional. */
  "AN16/T2CK/T7CK/RC1": "6",
  /** Physical pin 7: AN17/T3CK/T6CK/RC2; bidirectional. */
  "AN17/T3CK/T6CK/RC2": "7",
  /** Physical pin 8: AN18/T4CK/T9CK/RC3; bidirectional. */
  "AN18/T4CK/T9CK/RC3": "8",
  /** Physical pin 9: AN19/T5CK/T8CK/RC4; bidirectional. */
  "AN19/T5CK/T8CK/RC4": "9",
  /** Physical pin 10: SCK2/CN8/RG6; bidirectional. */
  "SCK2/CN8/RG6": "10",
  /** Physical pin 11: SDI2/CN9/RG7; bidirectional. */
  "SDI2/CN9/RG7": "11",
  /** Physical pin 12: SDO2/CN10/RG8; bidirectional. */
  "SDO2/CN10/RG8": "12",
  /** Physical pin 13: ~{MCLR}; input. */
  "~{MCLR}": "13",
  /** Physical pin 14: ~{SS2}/CN11/RG9; bidirectional. */
  "~{SS2}/CN11/RG9": "14",
  /** Physical pin 15: VSS; passive. */
  "VSS_15": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD_16": "16",
  /** Physical pin 17: TMS/RA0; bidirectional. */
  "TMS/RA0": "17",
  /** Physical pin 18: AN20/~{FLTA}/INT1/RE8; bidirectional. */
  "AN20/~{FLTA}/INT1/RE8": "18",
  /** Physical pin 19: AN21/~{FLTB}/INT2/RE9; bidirectional. */
  "AN21/~{FLTB}/INT2/RE9": "19",
  /** Physical pin 20: AN5/QEB/CN7/RB5; bidirectional. */
  "AN5/QEB/CN7/RB5": "20",
  /** Physical pin 21: AN4/QEA/CN6/RB4; bidirectional. */
  "AN4/QEA/CN6/RB4": "21",
  /** Physical pin 22: AN3/INDX/CN5/RB3; bidirectional. */
  "AN3/INDX/CN5/RB3": "22",
  /** Physical pin 23: AN2/~{SS1}/CN4/RB2; bidirectional. */
  "AN2/~{SS1}/CN4/RB2": "23",
  /** Physical pin 24: PGEC3/AN1/CN3/RB1; bidirectional. */
  "PGEC3/AN1/CN3/RB1": "24",
  /** Physical pin 25: PGED3/AN0/CN2/RB0; bidirectional. */
  "PGED3/AN0/CN2/RB0": "25",
  /** Physical pin 26: PGEC1/AN6/OCFA/RB6; bidirectional. */
  "PGEC1/AN6/OCFA/RB6": "26",
  /** Physical pin 27: PGED1/AN7/RB7; bidirectional. */
  "PGED1/AN7/RB7": "27",
  /** Physical pin 28: VREF-/RA9; bidirectional. */
  "VREF-/RA9": "28",
  /** Physical pin 29: VREF+/RA10; bidirectional. */
  "VREF+/RA10": "29",
  /** Physical pin 30: AVDD; power_in. */
  "AVDD": "30",
  /** Physical pin 31: AVSS; power_in. */
  "AVSS": "31",
  /** Physical pin 32: AN8/RB8; bidirectional. */
  "AN8/RB8": "32",
  /** Physical pin 33: AN9/RB9; bidirectional. */
  "AN9/RB9": "33",
  /** Physical pin 34: AN10/RB10; bidirectional. */
  "AN10/RB10": "34",
  /** Physical pin 35: AN11/RB11; bidirectional. */
  "AN11/RB11": "35",
  /** Physical pin 36: VSS; passive. */
  "VSS_36": "36",
  /** Physical pin 37: VDD; power_in. */
  "VDD_37": "37",
  /** Physical pin 38: TCK/RA1; bidirectional. */
  "TCK/RA1": "38",
  /** Physical pin 39: ~{U2RTS}/RF13; bidirectional. */
  "~{U2RTS}/RF13": "39",
  /** Physical pin 40: ~{U2CTS}/RF12; bidirectional. */
  "~{U2CTS}/RF12": "40",
  /** Physical pin 41: AN12/RB12; bidirectional. */
  "AN12/RB12": "41",
  /** Physical pin 42: AN13/RB13; bidirectional. */
  "AN13/RB13": "42",
  /** Physical pin 43: AN14/RB14; bidirectional. */
  "AN14/RB14": "43",
  /** Physical pin 44: AN15/OCFB/CN12/RB15; bidirectional. */
  "AN15/OCFB/CN12/RB15": "44",
  /** Physical pin 45: VSS; passive. */
  "VSS_45": "45",
  /** Physical pin 46: VDD; power_in. */
  "VDD_46": "46",
  /** Physical pin 47: IC7/~{U1CTS}/CN20/RD14; bidirectional. */
  "IC7/~{U1CTS}/CN20/RD14": "47",
  /** Physical pin 48: IC8/~{U1RTS}/CN21/RD15; bidirectional. */
  "IC8/~{U1RTS}/CN21/RD15": "48",
  /** Physical pin 49: U2RX/CN17/RF4; bidirectional. */
  "U2RX/CN17/RF4": "49",
  /** Physical pin 50: U2TX/CN18/RF5; bidirectional. */
  "U2TX/CN18/RF5": "50",
  /** Physical pin 51: U1TX/RF3; bidirectional. */
  "U1TX/RF3": "51",
  /** Physical pin 52: U1RX/RF2; bidirectional. */
  "U1RX/RF2": "52",
  /** Physical pin 53: SDO1/RF8; bidirectional. */
  "SDO1/RF8": "53",
  /** Physical pin 54: SDI1/RF7; bidirectional. */
  "SDI1/RF7": "54",
  /** Physical pin 55: SCK1/INT0/RF6; bidirectional. */
  "SCK1/INT0/RF6": "55",
  /** Physical pin 56: SDA1/RG3; bidirectional. */
  "SDA1/RG3": "56",
  /** Physical pin 57: SCL1/RG2; bidirectional. */
  "SCL1/RG2": "57",
  /** Physical pin 58: SCL2/RA2; bidirectional. */
  "SCL2/RA2": "58",
  /** Physical pin 59: SDA2/RA3; bidirectional. */
  "SDA2/RA3": "59",
  /** Physical pin 60: TDI/RA4; bidirectional. */
  "TDI/RA4": "60",
  /** Physical pin 61: TDO/RA5; bidirectional. */
  "TDO/RA5": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: OSC1/CLKIN/RC12; bidirectional. */
  "OSC1/CLKIN/RC12": "63",
  /** Physical pin 64: OSC2/CLKO/RC15; bidirectional. */
  "OSC2/CLKO/RC15": "64",
  /** Physical pin 65: VSS; passive. */
  "VSS_65": "65",
  /** Physical pin 66: INT3/RA14; bidirectional. */
  "INT3/RA14": "66",
  /** Physical pin 67: INT4/RA15; bidirectional. */
  "INT4/RA15": "67",
  /** Physical pin 68: IC1/RD8; bidirectional. */
  "IC1/RD8": "68",
  /** Physical pin 69: IC2/RD9; bidirectional. */
  "IC2/RD9": "69",
  /** Physical pin 70: IC3/RD10; bidirectional. */
  "IC3/RD10": "70",
  /** Physical pin 71: IC4/RD11; bidirectional. */
  "IC4/RD11": "71",
  /** Physical pin 72: OC1/RD0; bidirectional. */
  "OC1/RD0": "72",
  /** Physical pin 73: PGED2/SOSCI/CN1/RC13; bidirectional. */
  "PGED2/SOSCI/CN1/RC13": "73",
  /** Physical pin 74: PGEC2/SOSCO/T1CK/CN0/RC14; bidirectional. */
  "PGEC2/SOSCO/T1CK/CN0/RC14": "74",
  /** Physical pin 75: VSS; power_in. */
  "VSS_75": "75",
  /** Physical pin 76: OC2/RD1; bidirectional. */
  "OC2/RD1": "76",
  /** Physical pin 77: OC3/RD2; bidirectional. */
  "OC3/RD2": "77",
  /** Physical pin 78: OC4/RD3; bidirectional. */
  "OC4/RD3": "78",
  /** Physical pin 79: IC5/RD12; bidirectional. */
  "IC5/RD12": "79",
  /** Physical pin 80: IC6/CN19/RD13; bidirectional. */
  "IC6/CN19/RD13": "80",
  /** Physical pin 81: OC5/CN13/RD4; bidirectional. */
  "OC5/CN13/RD4": "81",
  /** Physical pin 82: OC6/CN14/RD5; bidirectional. */
  "OC6/CN14/RD5": "82",
  /** Physical pin 83: OC7/CN15/RD6; bidirectional. */
  "OC7/CN15/RD6": "83",
  /** Physical pin 84: OC8/UPDN/CN16/RD7; bidirectional. */
  "OC8/UPDN/CN16/RD7": "84",
  /** Physical pin 85: VCAP; passive. */
  "VCAP": "85",
  /** Physical pin 86: VDD; power_in. */
  "VDD_86": "86",
  /** Physical pin 87: C1RX/RF0; bidirectional. */
  "C1RX/RF0": "87",
  /** Physical pin 88: C1TX/RF1; bidirectional. */
  "C1TX/RF1": "88",
  /** Physical pin 89: C2TX/RG1; bidirectional. */
  "C2TX/RG1": "89",
  /** Physical pin 90: C2RX/RG0; bidirectional. */
  "C2RX/RG0": "90",
  /** Physical pin 91: AN22/CN22/RA6; bidirectional. */
  "AN22/CN22/RA6": "91",
  /** Physical pin 92: AN23/CN23/RA7; bidirectional. */
  "AN23/CN23/RA7": "92",
  /** Physical pin 93: PWM1L/RE0; bidirectional. */
  "PWM1L/RE0": "93",
  /** Physical pin 94: PWM1H/RE1; bidirectional. */
  "PWM1H/RE1": "94",
  /** Physical pin 95: RG14; bidirectional. */
  "RG14": "95",
  /** Physical pin 96: RG12; bidirectional. */
  "RG12": "96",
  /** Physical pin 97: RG13; bidirectional. */
  "RG13": "97",
  /** Physical pin 98: PWM2L/RE2; bidirectional. */
  "PWM2L/RE2": "98",
  /** Physical pin 99: PWM2H/RE3; bidirectional. */
  "PWM2H/RE3": "99",
  /** Physical pin 100: PWM3L/RE4; bidirectional. */
  "PWM3L/RE4": "100",
}) {
  override schema = "DSP_Microchip_DSPIC33:DSPIC33FJ256MC510A";
  override referencePrefix = "U";
}

/**
 * 40MIPS, 32k Flash, 4k SRAM
 *
 * KiCad symbol: `DSP_Microchip_DSPIC33:DSPIC33FJ32GP304`. Reference prefix: `U`.
 * Footprint filters: QFN?44*1EP*8x8mm*P0.65mm*, TQFP?44*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/70292G.pdf
 * Keywords: 16-bit Digital Signal Controller Microchip dsPIC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DSPIC33FJ32GP304 extends Component.withPins({
  /** Physical pin 1: SDA1/RP9/CN21/PMD3/RB9; bidirectional. */
  "SDA1/RP9/CN21/PMD3/RB9": "1",
  /** Physical pin 2: RP22/CN18/PMA1/RC6; bidirectional. */
  "RP22/CN18/PMA1/RC6": "2",
  /** Physical pin 3: RP23/CN17/PMA0/RC7; bidirectional. */
  "RP23/CN17/PMA0/RC7": "3",
  /** Physical pin 4: RP24/CN20/PMA5/RC8; bidirectional. */
  "RP24/CN20/PMA5/RC8": "4",
  /** Physical pin 5: RP25/CN19/PMA6/RC9; bidirectional. */
  "RP25/CN19/PMA6/RC9": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS_6": "6",
  /** Physical pin 7: VCAP; power_in. */
  "VCAP": "7",
  /** Physical pin 8: PGED2/EMCD2/RP10/CN16/PMD2/RB10; bidirectional. */
  "PGED2/EMCD2/RP10/CN16/PMD2/RB10": "8",
  /** Physical pin 9: PGEC2/RP11/CN15/PMD1/RB11; bidirectional. */
  "PGEC2/RP11/CN15/PMD1/RB11": "9",
  /** Physical pin 10: AN12/RP12/CN14/PMD0/RB12; bidirectional. */
  "AN12/RP12/CN14/PMD0/RB12": "10",
  /** Physical pin 11: AN11/RP13/CN13/PMRD/RB13; bidirectional. */
  "AN11/RP13/CN13/PMRD/RB13": "11",
  /** Physical pin 12: TMS/PMA10/RA10; bidirectional. */
  "TMS/PMA10/RA10": "12",
  /** Physical pin 13: TCK/PMA7/RA7; bidirectional. */
  "TCK/PMA7/RA7": "13",
  /** Physical pin 14: AN10/RTCC/RP14/CN12/PMWR/RB14; bidirectional. */
  "AN10/RTCC/RP14/CN12/PMWR/RB14": "14",
  /** Physical pin 15: AN9/RP15/CN11/PMCS1/RB15; bidirectional. */
  "AN9/RP15/CN11/PMCS1/RB15": "15",
  /** Physical pin 16: AVSS; power_in. */
  "AVSS": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: ~{MCLR}; input. */
  "~{MCLR}": "18",
  /** Physical pin 19: AN0/VREF+/CN2/RA0; bidirectional. */
  "AN0/VREF+/CN2/RA0": "19",
  /** Physical pin 20: AN1/VREF-/CN3/RA1; bidirectional. */
  "AN1/VREF-/CN3/RA1": "20",
  /** Physical pin 21: PGED1/AN2/C2IN-/RP0/CN4/RB0; bidirectional. */
  "PGED1/AN2/C2IN-/RP0/CN4/RB0": "21",
  /** Physical pin 22: PGEC1/AN3/C2IN+/RP1/CN5/RB1; bidirectional. */
  "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "22",
  /** Physical pin 23: AN4/C1IN-/RP2/CN6/RB2; bidirectional. */
  "AN4/C1IN-/RP2/CN6/RB2": "23",
  /** Physical pin 24: AN5/C1IN+/RP3/CN7/RB3; bidirectional. */
  "AN5/C1IN+/RP3/CN7/RB3": "24",
  /** Physical pin 25: AN6/RP16/CN8/RC0; bidirectional. */
  "AN6/RP16/CN8/RC0": "25",
  /** Physical pin 26: AN7/RP17/CN9/RC1; bidirectional. */
  "AN7/RP17/CN9/RC1": "26",
  /** Physical pin 27: AN8/CVREF/RP18/PMA2/CN10/RC2; bidirectional. */
  "AN8/CVREF/RP18/PMA2/CN10/RC2": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: VSS; power_in. */
  "VSS_29": "29",
  /** Physical pin 30: OSC1/CLKI/CN30/RA2; input. */
  "OSC1/CLKI/CN30/RA2": "30",
  /** Physical pin 31: OSC2/CLKO/CN29/RA3; input. */
  "OSC2/CLKO/CN29/RA3": "31",
  /** Physical pin 32: TDO/PMA8/RA8; input. */
  "TDO/PMA8/RA8": "32",
  /** Physical pin 33: SOSCI/RP4/CN1/RB4; input. */
  "SOSCI/RP4/CN1/RB4": "33",
  /** Physical pin 34: SOSCO/T1CK/CN0/RA4; input. */
  "SOSCO/T1CK/CN0/RA4": "34",
  /** Physical pin 35: TDI/PMA9/RA9; input. */
  "TDI/PMA9/RA9": "35",
  /** Physical pin 36: RP19/CN28/PMBE/RC3; input. */
  "RP19/CN28/PMBE/RC3": "36",
  /** Physical pin 37: RP20/CN25/PMA4/RC4; input. */
  "RP20/CN25/PMA4/RC4": "37",
  /** Physical pin 38: RP21/CN26/PMA3/RC5; input. */
  "RP21/CN26/PMA3/RC5": "38",
  /** Physical pin 39: VSS; power_in. */
  "VSS_39": "39",
  /** Physical pin 40: VDD; power_in. */
  "VDD_40": "40",
  /** Physical pin 41: PGED3/ASDA1/RP5/CN27/PMD7/RB5; input. */
  "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "41",
  /** Physical pin 42: PGEC3/ASCL1/RP6/CN24/PMD6/RB6; input. */
  "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "42",
  /** Physical pin 43: INT0/RP7/CN23/PMD5/RB7; input. */
  "INT0/RP7/CN23/PMD5/RB7": "43",
  /** Physical pin 44: SCL1/RP8/CN22/PMD4/RB8; input. */
  "SCL1/RP8/CN22/PMD4/RB8": "44",
}) {
  override schema = "DSP_Microchip_DSPIC33:DSPIC33FJ32GP304";
  override referencePrefix = "U";
}

/**
 * 40MIPS, 32k Flash, 8k SRAM
 *
 * KiCad symbol: `DSP_Microchip_DSPIC33:DSPIC33FJ32MC304`. Reference prefix: `U`.
 * Footprint filters: QFN?44*1EP*8x8mm*P0.65mm*, TQFP?44*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/70291G.pdf
 * Keywords: 16-bit Digital Signal Controller Microchip dsPIC Motor Control.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DSPIC33FJ32MC304 extends Component.withPins({
  /** Physical pin 1: SDA1/RP9/CN21/PMD3/RB9; bidirectional. */
  "SDA1/RP9/CN21/PMD3/RB9": "1",
  /** Physical pin 2: PWM2H1/RP22/CN18/PMA1/RC6; bidirectional. */
  "PWM2H1/RP22/CN18/PMA1/RC6": "2",
  /** Physical pin 3: PWM2L1/RP23/CN17/PMA0/RC7; bidirectional. */
  "PWM2L1/RP23/CN17/PMA0/RC7": "3",
  /** Physical pin 4: RP24/CN20/PMA5/RC8; bidirectional. */
  "RP24/CN20/PMA5/RC8": "4",
  /** Physical pin 5: RP25/CN19/PMA6/RC9; bidirectional. */
  "RP25/CN19/PMA6/RC9": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS_6": "6",
  /** Physical pin 7: VCAP; power_in. */
  "VCAP": "7",
  /** Physical pin 8: PGED2/PWM1H3/RP10/CN16/PMD2/RB10; bidirectional. */
  "PGED2/PWM1H3/RP10/CN16/PMD2/RB10": "8",
  /** Physical pin 9: PGEC2/PWM1L3/RP11/CN15/PMD1/RB11; bidirectional. */
  "PGEC2/PWM1L3/RP11/CN15/PMD1/RB11": "9",
  /** Physical pin 10: PWM1H2/RP12/CN14/PMD0/RB12; bidirectional. */
  "PWM1H2/RP12/CN14/PMD0/RB12": "10",
  /** Physical pin 11: PWM1L2/RP13/CN13/PMRD/RB13; bidirectional. */
  "PWM1L2/RP13/CN13/PMRD/RB13": "11",
  /** Physical pin 12: TMS/PMA10/RA10; bidirectional. */
  "TMS/PMA10/RA10": "12",
  /** Physical pin 13: TCK/PMA7/RA7; bidirectional. */
  "TCK/PMA7/RA7": "13",
  /** Physical pin 14: PWM1H1/RTCC/RP14/CN12/PMWR/RB14; bidirectional. */
  "PWM1H1/RTCC/RP14/CN12/PMWR/RB14": "14",
  /** Physical pin 15: PWM1L/RP15/CN11/PMCS1/RB15; bidirectional. */
  "PWM1L/RP15/CN11/PMCS1/RB15": "15",
  /** Physical pin 16: AVSS; power_in. */
  "AVSS": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: ~{MCLR}; input. */
  "~{MCLR}": "18",
  /** Physical pin 19: AN0/VREF+/CN2/RA0; bidirectional. */
  "AN0/VREF+/CN2/RA0": "19",
  /** Physical pin 20: AN1/VREF-/CN3/RA1; bidirectional. */
  "AN1/VREF-/CN3/RA1": "20",
  /** Physical pin 21: PGED1/AN2/C2IN-/RP0/CN4/RB0; bidirectional. */
  "PGED1/AN2/C2IN-/RP0/CN4/RB0": "21",
  /** Physical pin 22: PGEC1/AN3/C2IN+/RP1/CN5/RB1; bidirectional. */
  "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "22",
  /** Physical pin 23: AN4/C1IN-/RP2/CN6/RB2; bidirectional. */
  "AN4/C1IN-/RP2/CN6/RB2": "23",
  /** Physical pin 24: AN5/C1IN+/RP3/CN7/RB3; bidirectional. */
  "AN5/C1IN+/RP3/CN7/RB3": "24",
  /** Physical pin 25: AN6/RP16/CN8/RC0; bidirectional. */
  "AN6/RP16/CN8/RC0": "25",
  /** Physical pin 26: AN7/RP17/CN9/RC1; bidirectional. */
  "AN7/RP17/CN9/RC1": "26",
  /** Physical pin 27: AN8/CVREF/RP18/PMA2/CN10/RC2; bidirectional. */
  "AN8/CVREF/RP18/PMA2/CN10/RC2": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: VSS; power_in. */
  "VSS_29": "29",
  /** Physical pin 30: OSC1/CLKI/CN30/RA2; input. */
  "OSC1/CLKI/CN30/RA2": "30",
  /** Physical pin 31: OSC2/CLKO/CN29/RA3; input. */
  "OSC2/CLKO/CN29/RA3": "31",
  /** Physical pin 32: TDO/PMA8/RA8; input. */
  "TDO/PMA8/RA8": "32",
  /** Physical pin 33: SOSCI/RP4/CN1/RB4; input. */
  "SOSCI/RP4/CN1/RB4": "33",
  /** Physical pin 34: SOSCO/T1CK/CN0/RA4; input. */
  "SOSCO/T1CK/CN0/RA4": "34",
  /** Physical pin 35: TDI/PMA9/RA9; input. */
  "TDI/PMA9/RA9": "35",
  /** Physical pin 36: RP19/CN28/PMBE/RC3; input. */
  "RP19/CN28/PMBE/RC3": "36",
  /** Physical pin 37: RP20/CN25/PMA4/RC4; input. */
  "RP20/CN25/PMA4/RC4": "37",
  /** Physical pin 38: RP21/CN26/PMA3/RC5; input. */
  "RP21/CN26/PMA3/RC5": "38",
  /** Physical pin 39: VSS; power_in. */
  "VSS_39": "39",
  /** Physical pin 40: VDD; power_in. */
  "VDD_40": "40",
  /** Physical pin 41: PGED3/ASDA1/RP5/CN27/PMD7/RB5; input. */
  "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "41",
  /** Physical pin 42: PGEC3/ASCL1/RP6/CN24/PMD6/RB6; input. */
  "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "42",
  /** Physical pin 43: INT0/RP7/CN23/PMD5/RB7; input. */
  "INT0/RP7/CN23/PMD5/RB7": "43",
  /** Physical pin 44: SCL1/RP8/CN22/PMD4/RB8; input. */
  "SCL1/RP8/CN22/PMD4/RB8": "44",
}) {
  override schema = "DSP_Microchip_DSPIC33:DSPIC33FJ32MC304";
  override referencePrefix = "U";
}

/**
 * 40MIPS, 64k Flash, 8k SRAM
 *
 * KiCad symbol: `DSP_Microchip_DSPIC33:DSPIC33FJ64GP204`. Reference prefix: `U`.
 * Footprint filters: QFN?44*1EP*8x8mm*P0.65mm*, TQFP?44*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/70292G.pdf
 * Keywords: 16-bit Digital Signal Controller Microchip dsPIC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DSPIC33FJ64GP204 extends Component.withPins({
  /** Physical pin 1: SDA1/RP9/CN21/PMD3/RB9; bidirectional. */
  "SDA1/RP9/CN21/PMD3/RB9": "1",
  /** Physical pin 2: RP22/CN18/PMA1/RC6; bidirectional. */
  "RP22/CN18/PMA1/RC6": "2",
  /** Physical pin 3: RP23/CN17/PMA0/RC7; bidirectional. */
  "RP23/CN17/PMA0/RC7": "3",
  /** Physical pin 4: RP24/CN20/PMA5/RC8; bidirectional. */
  "RP24/CN20/PMA5/RC8": "4",
  /** Physical pin 5: RP25/CN19/PMA6/RC9; bidirectional. */
  "RP25/CN19/PMA6/RC9": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS_6": "6",
  /** Physical pin 7: VCAP; power_in. */
  "VCAP": "7",
  /** Physical pin 8: PGED2/EMCD2/RP10/CN16/PMD2/RB10; bidirectional. */
  "PGED2/EMCD2/RP10/CN16/PMD2/RB10": "8",
  /** Physical pin 9: PGEC2/RP11/CN15/PMD1/RB11; bidirectional. */
  "PGEC2/RP11/CN15/PMD1/RB11": "9",
  /** Physical pin 10: AN12/RP12/CN14/PMD0/RB12; bidirectional. */
  "AN12/RP12/CN14/PMD0/RB12": "10",
  /** Physical pin 11: AN11/RP13/CN13/PMRD/RB13; bidirectional. */
  "AN11/RP13/CN13/PMRD/RB13": "11",
  /** Physical pin 12: TMS/PMA10/RA10; bidirectional. */
  "TMS/PMA10/RA10": "12",
  /** Physical pin 13: TCK/PMA7/RA7; bidirectional. */
  "TCK/PMA7/RA7": "13",
  /** Physical pin 14: AN10/RTCC/RP14/CN12/PMWR/RB14; bidirectional. */
  "AN10/RTCC/RP14/CN12/PMWR/RB14": "14",
  /** Physical pin 15: AN9/RP15/CN11/PMCS1/RB15; bidirectional. */
  "AN9/RP15/CN11/PMCS1/RB15": "15",
  /** Physical pin 16: AVSS; power_in. */
  "AVSS": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: ~{MCLR}; input. */
  "~{MCLR}": "18",
  /** Physical pin 19: AN0/VREF+/CN2/RA0; bidirectional. */
  "AN0/VREF+/CN2/RA0": "19",
  /** Physical pin 20: AN1/VREF-/CN3/RA1; bidirectional. */
  "AN1/VREF-/CN3/RA1": "20",
  /** Physical pin 21: PGED1/AN2/C2IN-/RP0/CN4/RB0; bidirectional. */
  "PGED1/AN2/C2IN-/RP0/CN4/RB0": "21",
  /** Physical pin 22: PGEC1/AN3/C2IN+/RP1/CN5/RB1; bidirectional. */
  "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "22",
  /** Physical pin 23: AN4/C1IN-/RP2/CN6/RB2; bidirectional. */
  "AN4/C1IN-/RP2/CN6/RB2": "23",
  /** Physical pin 24: AN5/C1IN+/RP3/CN7/RB3; bidirectional. */
  "AN5/C1IN+/RP3/CN7/RB3": "24",
  /** Physical pin 25: AN6/RP16/CN8/RC0; bidirectional. */
  "AN6/RP16/CN8/RC0": "25",
  /** Physical pin 26: AN7/RP17/CN9/RC1; bidirectional. */
  "AN7/RP17/CN9/RC1": "26",
  /** Physical pin 27: AN8/CVREF/RP18/PMA2/CN10/RC2; bidirectional. */
  "AN8/CVREF/RP18/PMA2/CN10/RC2": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: VSS; power_in. */
  "VSS_29": "29",
  /** Physical pin 30: OSC1/CLKI/CN30/RA2; input. */
  "OSC1/CLKI/CN30/RA2": "30",
  /** Physical pin 31: OSC2/CLKO/CN29/RA3; input. */
  "OSC2/CLKO/CN29/RA3": "31",
  /** Physical pin 32: TDO/PMA8/RA8; input. */
  "TDO/PMA8/RA8": "32",
  /** Physical pin 33: SOSCI/RP4/CN1/RB4; input. */
  "SOSCI/RP4/CN1/RB4": "33",
  /** Physical pin 34: SOSCO/T1CK/CN0/RA4; input. */
  "SOSCO/T1CK/CN0/RA4": "34",
  /** Physical pin 35: TDI/PMA9/RA9; input. */
  "TDI/PMA9/RA9": "35",
  /** Physical pin 36: RP19/CN28/PMBE/RC3; input. */
  "RP19/CN28/PMBE/RC3": "36",
  /** Physical pin 37: RP20/CN25/PMA4/RC4; input. */
  "RP20/CN25/PMA4/RC4": "37",
  /** Physical pin 38: RP21/CN26/PMA3/RC5; input. */
  "RP21/CN26/PMA3/RC5": "38",
  /** Physical pin 39: VSS; power_in. */
  "VSS_39": "39",
  /** Physical pin 40: VDD; power_in. */
  "VDD_40": "40",
  /** Physical pin 41: PGED3/ASDA1/RP5/CN27/PMD7/RB5; input. */
  "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "41",
  /** Physical pin 42: PGEC3/ASCL1/RP6/CN24/PMD6/RB6; input. */
  "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "42",
  /** Physical pin 43: INT0/RP7/CN23/PMD5/RB7; input. */
  "INT0/RP7/CN23/PMD5/RB7": "43",
  /** Physical pin 44: SCL1/RP8/CN22/PMD4/RB8; input. */
  "SCL1/RP8/CN22/PMD4/RB8": "44",
}) {
  override schema = "DSP_Microchip_DSPIC33:DSPIC33FJ64GP204";
  override referencePrefix = "U";
}

/**
 * 40MIPS, 64k Flash, 16k SRAM, QFN-64
 *
 * KiCad symbol: `DSP_Microchip_DSPIC33:DSPIC33FJ64GP306A-IMR`. Reference prefix: `U`.
 * Footprint filters: QFN*9x9mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/70593d.pdf
 * Keywords: 16-bit Digital Signal Controller Microchip dsPIC.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP5.4x5.4mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DSPIC33FJ64GP306A_IMR extends Component.withPins({
  /** Physical pin 1: COFS/RG15; bidirectional. */
  "COFS/RG15": "1",
  /** Physical pin 2: AN16/T2CK/T7CK/RC1; bidirectional. */
  "AN16/T2CK/T7CK/RC1": "2",
  /** Physical pin 3: AN17/T3CK/T6CK/RC2; bidirectional. */
  "AN17/T3CK/T6CK/RC2": "3",
  /** Physical pin 4: SCK2/CN8/RG6; bidirectional. */
  "SCK2/CN8/RG6": "4",
  /** Physical pin 5: SDI2/CN9/RG7; bidirectional. */
  "SDI2/CN9/RG7": "5",
  /** Physical pin 6: SDO2/CN10/RG8; bidirectional. */
  "SDO2/CN10/RG8": "6",
  /** Physical pin 7: ~{MCLR}; input. */
  "~{MCLR}": "7",
  /** Physical pin 8: ~{SS2}/CN11/RG9; bidirectional. */
  "~{SS2}/CN11/RG9": "8",
  /** Physical pin 9: VSS; power_in. */
  "VSS_9": "9",
  /** Physical pin 10: VDD; power_in. */
  "VDD_10": "10",
  /** Physical pin 11: AN5/IC8/CN7/RB5; input. */
  "AN5/IC8/CN7/RB5": "11",
  /** Physical pin 12: AN4/IC7/CN6/RB4; input. */
  "AN4/IC7/CN6/RB4": "12",
  /** Physical pin 13: AN3/CN5/RB3; bidirectional. */
  "AN3/CN5/RB3": "13",
  /** Physical pin 14: AN2/~{SS1}/CN4/RB2; bidirectional. */
  "AN2/~{SS1}/CN4/RB2": "14",
  /** Physical pin 15: PGEC3/AN1/Vref-/CN3/RB1; bidirectional. */
  "PGEC3/AN1/Vref-/CN3/RB1": "15",
  /** Physical pin 16: PGED3/AN0/Vref+/CN2/RB0; bidirectional. */
  "PGED3/AN0/Vref+/CN2/RB0": "16",
  /** Physical pin 17: PGEC1/AN6/OCFA/RB6; input. */
  "PGEC1/AN6/OCFA/RB6": "17",
  /** Physical pin 18: PGED1/AN7/RB7; input. */
  "PGED1/AN7/RB7": "18",
  /** Physical pin 19: AVDD; power_in. */
  "AVDD": "19",
  /** Physical pin 20: AVSS; power_in. */
  "AVSS": "20",
  /** Physical pin 21: ~{U2CTS}/AN8/RB8; input. */
  "~{U2CTS}/AN8/RB8": "21",
  /** Physical pin 22: AN9/RB9; bidirectional. */
  "AN9/RB9": "22",
  /** Physical pin 23: TMS/AN10/RB10; bidirectional. */
  "TMS/AN10/RB10": "23",
  /** Physical pin 24: TDO/AN11/RB11; bidirectional. */
  "TDO/AN11/RB11": "24",
  /** Physical pin 25: VSS; power_in. */
  "VSS_25": "25",
  /** Physical pin 26: VDD; power_in. */
  "VDD_26": "26",
  /** Physical pin 27: TCK/AN12/RB12; bidirectional. */
  "TCK/AN12/RB12": "27",
  /** Physical pin 28: TDI/AN13/RB13; bidirectional. */
  "TDI/AN13/RB13": "28",
  /** Physical pin 29: ~{U2RTS}/AN14/RB14; bidirectional. */
  "~{U2RTS}/AN14/RB14": "29",
  /** Physical pin 30: AN15/OCFB/CN12/RB15; bidirectional. */
  "AN15/OCFB/CN12/RB15": "30",
  /** Physical pin 31: U2RX/SDA2/CN17/RF4; bidirectional. */
  "U2RX/SDA2/CN17/RF4": "31",
  /** Physical pin 32: U2TX/SCL2/CN18/RF5; bidirectional. */
  "U2TX/SCL2/CN18/RF5": "32",
  /** Physical pin 33: U1TX/SDO1/RF3; bidirectional. */
  "U1TX/SDO1/RF3": "33",
  /** Physical pin 34: U1RX/SDI1/RF2; bidirectional. */
  "U1RX/SDI1/RF2": "34",
  /** Physical pin 35: ~{U1RTS}/SCK1/INT0/RF6; bidirectional. */
  "~{U1RTS}/SCK1/INT0/RF6": "35",
  /** Physical pin 36: SDA1/RG3; bidirectional. */
  "SDA1/RG3": "36",
  /** Physical pin 37: SCL1/RG2; bidirectional. */
  "SCL1/RG2": "37",
  /** Physical pin 38: VDD; power_in. */
  "VDD_38": "38",
  /** Physical pin 39: OSC1/CLKIN/RC12; bidirectional. */
  "OSC1/CLKIN/RC12": "39",
  /** Physical pin 40: OSC2/CLKO/RC15; bidirectional. */
  "OSC2/CLKO/RC15": "40",
  /** Physical pin 41: VSS; power_in. */
  "VSS_41": "41",
  /** Physical pin 42: IC1/INT1/RD8; bidirectional. */
  "IC1/INT1/RD8": "42",
  /** Physical pin 43: IC2/~{U1CTS}/INT2/RD9; bidirectional. */
  "IC2/~{U1CTS}/INT2/RD9": "43",
  /** Physical pin 44: IC3/INT3/RD10; bidirectional. */
  "IC3/INT3/RD10": "44",
  /** Physical pin 45: IC4/INT4/RD11; bidirectional. */
  "IC4/INT4/RD11": "45",
  /** Physical pin 46: OC1/RD0; bidirectional. */
  "OC1/RD0": "46",
  /** Physical pin 47: PGED2/SOSCI/T4CK/CN1/RC13; bidirectional. */
  "PGED2/SOSCI/T4CK/CN1/RC13": "47",
  /** Physical pin 48: PGEC2/SOSCO/T1CK/CN0/RC14; bidirectional. */
  "PGEC2/SOSCO/T1CK/CN0/RC14": "48",
  /** Physical pin 49: OC2/RD1; bidirectional. */
  "OC2/RD1": "49",
  /** Physical pin 50: OC3/RD2; bidirectional. */
  "OC3/RD2": "50",
  /** Physical pin 51: OC4/RD3; bidirectional. */
  "OC4/RD3": "51",
  /** Physical pin 52: OC5/IC5/CN13/RD4; bidirectional. */
  "OC5/IC5/CN13/RD4": "52",
  /** Physical pin 53: OC6/IC6/CN14/RD5; bidirectional. */
  "OC6/IC6/CN14/RD5": "53",
  /** Physical pin 54: OC7/CN15/RD6; bidirectional. */
  "OC7/CN15/RD6": "54",
  /** Physical pin 55: OC8/CN16/RD7; bidirectional. */
  "OC8/CN16/RD7": "55",
  /** Physical pin 56: VCAP; power_in. */
  "VCAP": "56",
  /** Physical pin 57: VDD; power_in. */
  "VDD_57": "57",
  /** Physical pin 58: RF0; bidirectional. */
  "RF0": "58",
  /** Physical pin 59: RF1; bidirectional. */
  "RF1": "59",
  /** Physical pin 60: RG1; bidirectional. */
  "RG1": "60",
  /** Physical pin 61: RG0; bidirectional. */
  "RG0": "61",
  /** Physical pin 62: CSCK/RG14; bidirectional. */
  "CSCK/RG14": "62",
  /** Physical pin 63: CSDI/RG12; bidirectional. */
  "CSDI/RG12": "63",
  /** Physical pin 64: CSDO/RG13; bidirectional. */
  "CSDO/RG13": "64",
  /** Physical pin 65: EP; power_in. */
  "EP": "65",
}) {
  override schema = "DSP_Microchip_DSPIC33:DSPIC33FJ64GP306A-IMR";
  override referencePrefix = "U";
}

/**
 * 40MIPS, 64k Flash, 16k SRAM, ECAN, Audio DAC
 *
 * KiCad symbol: `DSP_Microchip_DSPIC33:DSPIC33FJ64GP804`. Reference prefix: `U`.
 * Footprint filters: QFN?44*1EP*8x8mm*P0.65mm*, TQFP?44*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/70292G.pdf
 * Keywords: 16-bit Digital Signal Controller Microchip dsPIC33.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DSPIC33FJ64GP804 extends Component.withPins({
  /** Physical pin 1: SDA1/RP9/CN21/PMD3/RB9; bidirectional. */
  "SDA1/RP9/CN21/PMD3/RB9": "1",
  /** Physical pin 2: RP22/CN18/PMA1/RC6; bidirectional. */
  "RP22/CN18/PMA1/RC6": "2",
  /** Physical pin 3: RP23/CN17/PMA0/RC7; bidirectional. */
  "RP23/CN17/PMA0/RC7": "3",
  /** Physical pin 4: RP24/CN20/PMA5/RC8; bidirectional. */
  "RP24/CN20/PMA5/RC8": "4",
  /** Physical pin 5: RP25/CN19/PMA6/RC9; bidirectional. */
  "RP25/CN19/PMA6/RC9": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS_6": "6",
  /** Physical pin 7: VCAP; power_in. */
  "VCAP": "7",
  /** Physical pin 8: PGED2/EMCD2/RP10/CN16/PMD2/RB10; bidirectional. */
  "PGED2/EMCD2/RP10/CN16/PMD2/RB10": "8",
  /** Physical pin 9: PGEC2/RP11/CN15/PMD1/RB11; bidirectional. */
  "PGEC2/RP11/CN15/PMD1/RB11": "9",
  /** Physical pin 10: AN12/DAC1RP/RP12/CN14/PMD0/RB12; bidirectional. */
  "AN12/DAC1RP/RP12/CN14/PMD0/RB12": "10",
  /** Physical pin 11: AN11/DAC1RN/RP13/CN13/PMRD/RB13; bidirectional. */
  "AN11/DAC1RN/RP13/CN13/PMRD/RB13": "11",
  /** Physical pin 12: TMS/PMA10/RA10; bidirectional. */
  "TMS/PMA10/RA10": "12",
  /** Physical pin 13: TCK/PMA7/RA7; bidirectional. */
  "TCK/PMA7/RA7": "13",
  /** Physical pin 14: AN10/DAC1LP/RTCC/RP14/CN12/PMWR/RB14; bidirectional. */
  "AN10/DAC1LP/RTCC/RP14/CN12/PMWR/RB14": "14",
  /** Physical pin 15: AN9/DAC1LN/RP15/CN11/PMCS1/RB15; bidirectional. */
  "AN9/DAC1LN/RP15/CN11/PMCS1/RB15": "15",
  /** Physical pin 16: AVSS; power_in. */
  "AVSS": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: ~{MCLR}; input. */
  "~{MCLR}": "18",
  /** Physical pin 19: AN0/VREF+/CN2/RA0; bidirectional. */
  "AN0/VREF+/CN2/RA0": "19",
  /** Physical pin 20: AN1/VREF-/CN3/RA1; bidirectional. */
  "AN1/VREF-/CN3/RA1": "20",
  /** Physical pin 21: PGED1/AN2/C2IN-/RP0/CN4/RB0; bidirectional. */
  "PGED1/AN2/C2IN-/RP0/CN4/RB0": "21",
  /** Physical pin 22: PGEC1/AN3/C2IN+/RP1/CN5/RB1; bidirectional. */
  "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "22",
  /** Physical pin 23: AN4/C1IN-/RP2/CN6/RB2; bidirectional. */
  "AN4/C1IN-/RP2/CN6/RB2": "23",
  /** Physical pin 24: AN5/C1IN+/RP3/CN7/RB3; bidirectional. */
  "AN5/C1IN+/RP3/CN7/RB3": "24",
  /** Physical pin 25: AN6/DAC1RM/RP16/CN8/RC0; bidirectional. */
  "AN6/DAC1RM/RP16/CN8/RC0": "25",
  /** Physical pin 26: AN7/DAC1LM/RP17/CN9/RC1; bidirectional. */
  "AN7/DAC1LM/RP17/CN9/RC1": "26",
  /** Physical pin 27: AN8/CVREF/RP18/PMA2/CN10/RC2; bidirectional. */
  "AN8/CVREF/RP18/PMA2/CN10/RC2": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: VSS; power_in. */
  "VSS_29": "29",
  /** Physical pin 30: OSC1/CLKI/CN30/RA2; input. */
  "OSC1/CLKI/CN30/RA2": "30",
  /** Physical pin 31: OSC2/CLKO/CN29/RA3; input. */
  "OSC2/CLKO/CN29/RA3": "31",
  /** Physical pin 32: TDO/PMA8/RA8; input. */
  "TDO/PMA8/RA8": "32",
  /** Physical pin 33: SOSCI/RP4/CN1/RB4; input. */
  "SOSCI/RP4/CN1/RB4": "33",
  /** Physical pin 34: SOSCO/T1CK/CN0/RA4; input. */
  "SOSCO/T1CK/CN0/RA4": "34",
  /** Physical pin 35: TDI/PMA9/RA9; input. */
  "TDI/PMA9/RA9": "35",
  /** Physical pin 36: RP19/CN28/PMBE/RC3; input. */
  "RP19/CN28/PMBE/RC3": "36",
  /** Physical pin 37: RP20/CN25/PMA4/RC4; input. */
  "RP20/CN25/PMA4/RC4": "37",
  /** Physical pin 38: RP21/CN26/PMA3/RC5; input. */
  "RP21/CN26/PMA3/RC5": "38",
  /** Physical pin 39: VSS; power_in. */
  "VSS_39": "39",
  /** Physical pin 40: VDD; power_in. */
  "VDD_40": "40",
  /** Physical pin 41: PGED3/ASDA1/RP5/CN27/PMD7/RB5; input. */
  "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "41",
  /** Physical pin 42: PGEC3/ASCL1/RP6/CN24/PMD6/RB6; input. */
  "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "42",
  /** Physical pin 43: INT0/RP7/CN23/PMD5/RB7; input. */
  "INT0/RP7/CN23/PMD5/RB7": "43",
  /** Physical pin 44: SCL1/RP8/CN22/PMD4/RB8; input. */
  "SCL1/RP8/CN22/PMD4/RB8": "44",
}) {
  override schema = "DSP_Microchip_DSPIC33:DSPIC33FJ64GP804";
  override referencePrefix = "U";
}

/**
 * 40MIPS, 64k Flash, 8k SRAM
 *
 * KiCad symbol: `DSP_Microchip_DSPIC33:DSPIC33FJ64MC204`. Reference prefix: `U`.
 * Footprint filters: QFN?44*1EP*8x8mm*P0.65mm*, TQFP?44*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/70291G.pdf
 * Keywords: 16-bit Digital Signal Controller Microchip dsPIC Motor Control.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DSPIC33FJ64MC204 extends Component.withPins({
  /** Physical pin 1: SDA1/RP9/CN21/PMD3/RB9; bidirectional. */
  "SDA1/RP9/CN21/PMD3/RB9": "1",
  /** Physical pin 2: PWM2H1/RP22/CN18/PMA1/RC6; bidirectional. */
  "PWM2H1/RP22/CN18/PMA1/RC6": "2",
  /** Physical pin 3: PWM2L1/RP23/CN17/PMA0/RC7; bidirectional. */
  "PWM2L1/RP23/CN17/PMA0/RC7": "3",
  /** Physical pin 4: RP24/CN20/PMA5/RC8; bidirectional. */
  "RP24/CN20/PMA5/RC8": "4",
  /** Physical pin 5: RP25/CN19/PMA6/RC9; bidirectional. */
  "RP25/CN19/PMA6/RC9": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS_6": "6",
  /** Physical pin 7: VCAP; power_in. */
  "VCAP": "7",
  /** Physical pin 8: PGED2/PWM1H3/RP10/CN16/PMD2/RB10; bidirectional. */
  "PGED2/PWM1H3/RP10/CN16/PMD2/RB10": "8",
  /** Physical pin 9: PGEC2/PWM1L3/RP11/CN15/PMD1/RB11; bidirectional. */
  "PGEC2/PWM1L3/RP11/CN15/PMD1/RB11": "9",
  /** Physical pin 10: PWM1H2/RP12/CN14/PMD0/RB12; bidirectional. */
  "PWM1H2/RP12/CN14/PMD0/RB12": "10",
  /** Physical pin 11: PWM1L2/RP13/CN13/PMRD/RB13; bidirectional. */
  "PWM1L2/RP13/CN13/PMRD/RB13": "11",
  /** Physical pin 12: TMS/PMA10/RA10; bidirectional. */
  "TMS/PMA10/RA10": "12",
  /** Physical pin 13: TCK/PMA7/RA7; bidirectional. */
  "TCK/PMA7/RA7": "13",
  /** Physical pin 14: PWM1H1/RTCC/RP14/CN12/PMWR/RB14; bidirectional. */
  "PWM1H1/RTCC/RP14/CN12/PMWR/RB14": "14",
  /** Physical pin 15: PWM1L/RP15/CN11/PMCS1/RB15; bidirectional. */
  "PWM1L/RP15/CN11/PMCS1/RB15": "15",
  /** Physical pin 16: AVSS; power_in. */
  "AVSS": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: ~{MCLR}; input. */
  "~{MCLR}": "18",
  /** Physical pin 19: AN0/VREF+/CN2/RA0; bidirectional. */
  "AN0/VREF+/CN2/RA0": "19",
  /** Physical pin 20: AN1/VREF-/CN3/RA1; bidirectional. */
  "AN1/VREF-/CN3/RA1": "20",
  /** Physical pin 21: PGED1/AN2/C2IN-/RP0/CN4/RB0; bidirectional. */
  "PGED1/AN2/C2IN-/RP0/CN4/RB0": "21",
  /** Physical pin 22: PGEC1/AN3/C2IN+/RP1/CN5/RB1; bidirectional. */
  "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "22",
  /** Physical pin 23: AN4/C1IN-/RP2/CN6/RB2; bidirectional. */
  "AN4/C1IN-/RP2/CN6/RB2": "23",
  /** Physical pin 24: AN5/C1IN+/RP3/CN7/RB3; bidirectional. */
  "AN5/C1IN+/RP3/CN7/RB3": "24",
  /** Physical pin 25: AN6/RP16/CN8/RC0; bidirectional. */
  "AN6/RP16/CN8/RC0": "25",
  /** Physical pin 26: AN7/RP17/CN9/RC1; bidirectional. */
  "AN7/RP17/CN9/RC1": "26",
  /** Physical pin 27: AN8/CVREF/RP18/PMA2/CN10/RC2; bidirectional. */
  "AN8/CVREF/RP18/PMA2/CN10/RC2": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: VSS; power_in. */
  "VSS_29": "29",
  /** Physical pin 30: OSC1/CLKI/CN30/RA2; input. */
  "OSC1/CLKI/CN30/RA2": "30",
  /** Physical pin 31: OSC2/CLKO/CN29/RA3; input. */
  "OSC2/CLKO/CN29/RA3": "31",
  /** Physical pin 32: TDO/PMA8/RA8; input. */
  "TDO/PMA8/RA8": "32",
  /** Physical pin 33: SOSCI/RP4/CN1/RB4; input. */
  "SOSCI/RP4/CN1/RB4": "33",
  /** Physical pin 34: SOSCO/T1CK/CN0/RA4; input. */
  "SOSCO/T1CK/CN0/RA4": "34",
  /** Physical pin 35: TDI/PMA9/RA9; input. */
  "TDI/PMA9/RA9": "35",
  /** Physical pin 36: RP19/CN28/PMBE/RC3; input. */
  "RP19/CN28/PMBE/RC3": "36",
  /** Physical pin 37: RP20/CN25/PMA4/RC4; input. */
  "RP20/CN25/PMA4/RC4": "37",
  /** Physical pin 38: RP21/CN26/PMA3/RC5; input. */
  "RP21/CN26/PMA3/RC5": "38",
  /** Physical pin 39: VSS; power_in. */
  "VSS_39": "39",
  /** Physical pin 40: VDD; power_in. */
  "VDD_40": "40",
  /** Physical pin 41: PGED3/ASDA1/RP5/CN27/PMD7/RB5; input. */
  "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "41",
  /** Physical pin 42: PGEC3/ASCL1/RP6/CN24/PMD6/RB6; input. */
  "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "42",
  /** Physical pin 43: INT0/RP7/CN23/PMD5/RB7; input. */
  "INT0/RP7/CN23/PMD5/RB7": "43",
  /** Physical pin 44: SCL1/RP8/CN22/PMD4/RB8; input. */
  "SCL1/RP8/CN22/PMD4/RB8": "44",
}) {
  override schema = "DSP_Microchip_DSPIC33:DSPIC33FJ64MC204";
  override referencePrefix = "U";
}

/**
 * High-Performance, 16-bit Digital Signal Controller, 40MIPS, 64k Flash, 8k SRAM, TQFP-100
 *
 * KiCad symbol: `DSP_Microchip_DSPIC33:DSPIC33FJ64MC510A`. Reference prefix: `U`.
 * Footprint filters: TQFP*12x12mm*P0.4mm*, TQFP*14x14mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/70594C.pdf
 * Keywords: 16-bit Digital Signal Controller Microchip dsPIC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DSPIC33FJ64MC510A extends Component.withPins({
  /** Physical pin 1: RG15; bidirectional. */
  "RG15": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: PWM3H/RE5; bidirectional. */
  "PWM3H/RE5": "3",
  /** Physical pin 4: PWM4L/RE6; bidirectional. */
  "PWM4L/RE6": "4",
  /** Physical pin 5: PWM4H/RE7; bidirectional. */
  "PWM4H/RE7": "5",
  /** Physical pin 6: AN16/T2CK/T7CK/RC1; bidirectional. */
  "AN16/T2CK/T7CK/RC1": "6",
  /** Physical pin 7: AN17/T3CK/T6CK/RC2; bidirectional. */
  "AN17/T3CK/T6CK/RC2": "7",
  /** Physical pin 8: AN18/T4CK/T9CK/RC3; bidirectional. */
  "AN18/T4CK/T9CK/RC3": "8",
  /** Physical pin 9: AN19/T5CK/T8CK/RC4; bidirectional. */
  "AN19/T5CK/T8CK/RC4": "9",
  /** Physical pin 10: SCK2/CN8/RG6; bidirectional. */
  "SCK2/CN8/RG6": "10",
  /** Physical pin 11: SDI2/CN9/RG7; bidirectional. */
  "SDI2/CN9/RG7": "11",
  /** Physical pin 12: SDO2/CN10/RG8; bidirectional. */
  "SDO2/CN10/RG8": "12",
  /** Physical pin 13: ~{MCLR}; input. */
  "~{MCLR}": "13",
  /** Physical pin 14: ~{SS2}/CN11/RG9; bidirectional. */
  "~{SS2}/CN11/RG9": "14",
  /** Physical pin 15: VSS; passive. */
  "VSS_15": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD_16": "16",
  /** Physical pin 17: TMS/RA0; bidirectional. */
  "TMS/RA0": "17",
  /** Physical pin 18: AN20/~{FLTA}/INT1/RE8; bidirectional. */
  "AN20/~{FLTA}/INT1/RE8": "18",
  /** Physical pin 19: AN21/~{FLTB}/INT2/RE9; bidirectional. */
  "AN21/~{FLTB}/INT2/RE9": "19",
  /** Physical pin 20: AN5/QEB/CN7/RB5; bidirectional. */
  "AN5/QEB/CN7/RB5": "20",
  /** Physical pin 21: AN4/QEA/CN6/RB4; bidirectional. */
  "AN4/QEA/CN6/RB4": "21",
  /** Physical pin 22: AN3/INDX/CN5/RB3; bidirectional. */
  "AN3/INDX/CN5/RB3": "22",
  /** Physical pin 23: AN2/~{SS1}/CN4/RB2; bidirectional. */
  "AN2/~{SS1}/CN4/RB2": "23",
  /** Physical pin 24: PGEC3/AN1/CN3/RB1; bidirectional. */
  "PGEC3/AN1/CN3/RB1": "24",
  /** Physical pin 25: PGED3/AN0/CN2/RB0; bidirectional. */
  "PGED3/AN0/CN2/RB0": "25",
  /** Physical pin 26: PGEC1/AN6/OCFA/RB6; bidirectional. */
  "PGEC1/AN6/OCFA/RB6": "26",
  /** Physical pin 27: PGED1/AN7/RB7; bidirectional. */
  "PGED1/AN7/RB7": "27",
  /** Physical pin 28: VREF-/RA9; bidirectional. */
  "VREF-/RA9": "28",
  /** Physical pin 29: VREF+/RA10; bidirectional. */
  "VREF+/RA10": "29",
  /** Physical pin 30: AVDD; power_in. */
  "AVDD": "30",
  /** Physical pin 31: AVSS; power_in. */
  "AVSS": "31",
  /** Physical pin 32: AN8/RB8; bidirectional. */
  "AN8/RB8": "32",
  /** Physical pin 33: AN9/RB9; bidirectional. */
  "AN9/RB9": "33",
  /** Physical pin 34: AN10/RB10; bidirectional. */
  "AN10/RB10": "34",
  /** Physical pin 35: AN11/RB11; bidirectional. */
  "AN11/RB11": "35",
  /** Physical pin 36: VSS; passive. */
  "VSS_36": "36",
  /** Physical pin 37: VDD; power_in. */
  "VDD_37": "37",
  /** Physical pin 38: TCK/RA1; bidirectional. */
  "TCK/RA1": "38",
  /** Physical pin 39: ~{U2RTS}/RF13; bidirectional. */
  "~{U2RTS}/RF13": "39",
  /** Physical pin 40: ~{U2CTS}/RF12; bidirectional. */
  "~{U2CTS}/RF12": "40",
  /** Physical pin 41: AN12/RB12; bidirectional. */
  "AN12/RB12": "41",
  /** Physical pin 42: AN13/RB13; bidirectional. */
  "AN13/RB13": "42",
  /** Physical pin 43: AN14/RB14; bidirectional. */
  "AN14/RB14": "43",
  /** Physical pin 44: AN15/OCFB/CN12/RB15; bidirectional. */
  "AN15/OCFB/CN12/RB15": "44",
  /** Physical pin 45: VSS; passive. */
  "VSS_45": "45",
  /** Physical pin 46: VDD; power_in. */
  "VDD_46": "46",
  /** Physical pin 47: IC7/~{U1CTS}/CN20/RD14; bidirectional. */
  "IC7/~{U1CTS}/CN20/RD14": "47",
  /** Physical pin 48: IC8/~{U1RTS}/CN21/RD15; bidirectional. */
  "IC8/~{U1RTS}/CN21/RD15": "48",
  /** Physical pin 49: U2RX/CN17/RF4; bidirectional. */
  "U2RX/CN17/RF4": "49",
  /** Physical pin 50: U2TX/CN18/RF5; bidirectional. */
  "U2TX/CN18/RF5": "50",
  /** Physical pin 51: U1TX/RF3; bidirectional. */
  "U1TX/RF3": "51",
  /** Physical pin 52: U1RX/RF2; bidirectional. */
  "U1RX/RF2": "52",
  /** Physical pin 53: SDO1/RF8; bidirectional. */
  "SDO1/RF8": "53",
  /** Physical pin 54: SDI1/RF7; bidirectional. */
  "SDI1/RF7": "54",
  /** Physical pin 55: SCK1/INT0/RF6; bidirectional. */
  "SCK1/INT0/RF6": "55",
  /** Physical pin 56: SDA1/RG3; bidirectional. */
  "SDA1/RG3": "56",
  /** Physical pin 57: SCL1/RG2; bidirectional. */
  "SCL1/RG2": "57",
  /** Physical pin 58: SCL2/RA2; bidirectional. */
  "SCL2/RA2": "58",
  /** Physical pin 59: SDA2/RA3; bidirectional. */
  "SDA2/RA3": "59",
  /** Physical pin 60: TDI/RA4; bidirectional. */
  "TDI/RA4": "60",
  /** Physical pin 61: TDO/RA5; bidirectional. */
  "TDO/RA5": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: OSC1/CLKIN/RC12; bidirectional. */
  "OSC1/CLKIN/RC12": "63",
  /** Physical pin 64: OSC2/CLKO/RC15; bidirectional. */
  "OSC2/CLKO/RC15": "64",
  /** Physical pin 65: VSS; passive. */
  "VSS_65": "65",
  /** Physical pin 66: INT3/RA14; bidirectional. */
  "INT3/RA14": "66",
  /** Physical pin 67: INT4/RA15; bidirectional. */
  "INT4/RA15": "67",
  /** Physical pin 68: IC1/RD8; bidirectional. */
  "IC1/RD8": "68",
  /** Physical pin 69: IC2/RD9; bidirectional. */
  "IC2/RD9": "69",
  /** Physical pin 70: IC3/RD10; bidirectional. */
  "IC3/RD10": "70",
  /** Physical pin 71: IC4/RD11; bidirectional. */
  "IC4/RD11": "71",
  /** Physical pin 72: OC1/RD0; bidirectional. */
  "OC1/RD0": "72",
  /** Physical pin 73: PGED2/SOSCI/CN1/RC13; bidirectional. */
  "PGED2/SOSCI/CN1/RC13": "73",
  /** Physical pin 74: PGEC2/SOSCO/T1CK/CN0/RC14; bidirectional. */
  "PGEC2/SOSCO/T1CK/CN0/RC14": "74",
  /** Physical pin 75: VSS; power_in. */
  "VSS_75": "75",
  /** Physical pin 76: OC2/RD1; bidirectional. */
  "OC2/RD1": "76",
  /** Physical pin 77: OC3/RD2; bidirectional. */
  "OC3/RD2": "77",
  /** Physical pin 78: OC4/RD3; bidirectional. */
  "OC4/RD3": "78",
  /** Physical pin 79: IC5/RD12; bidirectional. */
  "IC5/RD12": "79",
  /** Physical pin 80: IC6/CN19/RD13; bidirectional. */
  "IC6/CN19/RD13": "80",
  /** Physical pin 81: OC5/CN13/RD4; bidirectional. */
  "OC5/CN13/RD4": "81",
  /** Physical pin 82: OC6/CN14/RD5; bidirectional. */
  "OC6/CN14/RD5": "82",
  /** Physical pin 83: OC7/CN15/RD6; bidirectional. */
  "OC7/CN15/RD6": "83",
  /** Physical pin 84: OC8/UPDN/CN16/RD7; bidirectional. */
  "OC8/UPDN/CN16/RD7": "84",
  /** Physical pin 85: VCAP; passive. */
  "VCAP": "85",
  /** Physical pin 86: VDD; power_in. */
  "VDD_86": "86",
  /** Physical pin 87: C1RX/RF0; bidirectional. */
  "C1RX/RF0": "87",
  /** Physical pin 88: C1TX/RF1; bidirectional. */
  "C1TX/RF1": "88",
  /** Physical pin 89: C2TX/RG1; bidirectional. */
  "C2TX/RG1": "89",
  /** Physical pin 90: C2RX/RG0; bidirectional. */
  "C2RX/RG0": "90",
  /** Physical pin 91: AN22/CN22/RA6; bidirectional. */
  "AN22/CN22/RA6": "91",
  /** Physical pin 92: AN23/CN23/RA7; bidirectional. */
  "AN23/CN23/RA7": "92",
  /** Physical pin 93: PWM1L/RE0; bidirectional. */
  "PWM1L/RE0": "93",
  /** Physical pin 94: PWM1H/RE1; bidirectional. */
  "PWM1H/RE1": "94",
  /** Physical pin 95: RG14; bidirectional. */
  "RG14": "95",
  /** Physical pin 96: RG12; bidirectional. */
  "RG12": "96",
  /** Physical pin 97: RG13; bidirectional. */
  "RG13": "97",
  /** Physical pin 98: PWM2L/RE2; bidirectional. */
  "PWM2L/RE2": "98",
  /** Physical pin 99: PWM2H/RE3; bidirectional. */
  "PWM2H/RE3": "99",
  /** Physical pin 100: PWM3L/RE4; bidirectional. */
  "PWM3L/RE4": "100",
}) {
  override schema = "DSP_Microchip_DSPIC33:DSPIC33FJ64MC510A";
  override referencePrefix = "U";
}

/**
 * High-Performance, 16-bit Digital Signal Controller, 40MIPS, 64k Flash, 16k SRAM, TQFP-100
 *
 * KiCad symbol: `DSP_Microchip_DSPIC33:DSPIC33FJ64MC710A`. Reference prefix: `U`.
 * Footprint filters: TQFP*12x12mm*P0.4mm*, TQFP*14x14mm*P0.5mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/70594C.pdf
 * Keywords: 16-bit Digital Signal Controller Microchip dsPIC.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DSPIC33FJ64MC710A extends Component.withPins({
  /** Physical pin 1: RG15; bidirectional. */
  "RG15": "1",
  /** Physical pin 2: VDD; power_in. */
  "VDD_2": "2",
  /** Physical pin 3: PWM3H/RE5; bidirectional. */
  "PWM3H/RE5": "3",
  /** Physical pin 4: PWM4L/RE6; bidirectional. */
  "PWM4L/RE6": "4",
  /** Physical pin 5: PWM4H/RE7; bidirectional. */
  "PWM4H/RE7": "5",
  /** Physical pin 6: AN16/T2CK/T7CK/RC1; bidirectional. */
  "AN16/T2CK/T7CK/RC1": "6",
  /** Physical pin 7: AN17/T3CK/T6CK/RC2; bidirectional. */
  "AN17/T3CK/T6CK/RC2": "7",
  /** Physical pin 8: AN18/T4CK/T9CK/RC3; bidirectional. */
  "AN18/T4CK/T9CK/RC3": "8",
  /** Physical pin 9: AN19/T5CK/T8CK/RC4; bidirectional. */
  "AN19/T5CK/T8CK/RC4": "9",
  /** Physical pin 10: SCK2/CN8/RG6; bidirectional. */
  "SCK2/CN8/RG6": "10",
  /** Physical pin 11: SDI2/CN9/RG7; bidirectional. */
  "SDI2/CN9/RG7": "11",
  /** Physical pin 12: SDO2/CN10/RG8; bidirectional. */
  "SDO2/CN10/RG8": "12",
  /** Physical pin 13: ~{MCLR}; input. */
  "~{MCLR}": "13",
  /** Physical pin 14: ~{SS2}/CN11/RG9; bidirectional. */
  "~{SS2}/CN11/RG9": "14",
  /** Physical pin 15: VSS; passive. */
  "VSS_15": "15",
  /** Physical pin 16: VDD; power_in. */
  "VDD_16": "16",
  /** Physical pin 17: TMS/RA0; bidirectional. */
  "TMS/RA0": "17",
  /** Physical pin 18: AN20/~{FLTA}/INT1/RE8; bidirectional. */
  "AN20/~{FLTA}/INT1/RE8": "18",
  /** Physical pin 19: AN21/~{FLTB}/INT2/RE9; bidirectional. */
  "AN21/~{FLTB}/INT2/RE9": "19",
  /** Physical pin 20: AN5/QEB/CN7/RB5; bidirectional. */
  "AN5/QEB/CN7/RB5": "20",
  /** Physical pin 21: AN4/QEA/CN6/RB4; bidirectional. */
  "AN4/QEA/CN6/RB4": "21",
  /** Physical pin 22: AN3/INDX/CN5/RB3; bidirectional. */
  "AN3/INDX/CN5/RB3": "22",
  /** Physical pin 23: AN2/~{SS1}/CN4/RB2; bidirectional. */
  "AN2/~{SS1}/CN4/RB2": "23",
  /** Physical pin 24: PGEC3/AN1/CN3/RB1; bidirectional. */
  "PGEC3/AN1/CN3/RB1": "24",
  /** Physical pin 25: PGED3/AN0/CN2/RB0; bidirectional. */
  "PGED3/AN0/CN2/RB0": "25",
  /** Physical pin 26: PGEC1/AN6/OCFA/RB6; bidirectional. */
  "PGEC1/AN6/OCFA/RB6": "26",
  /** Physical pin 27: PGED1/AN7/RB7; bidirectional. */
  "PGED1/AN7/RB7": "27",
  /** Physical pin 28: VREF-/RA9; bidirectional. */
  "VREF-/RA9": "28",
  /** Physical pin 29: VREF+/RA10; bidirectional. */
  "VREF+/RA10": "29",
  /** Physical pin 30: AVDD; power_in. */
  "AVDD": "30",
  /** Physical pin 31: AVSS; power_in. */
  "AVSS": "31",
  /** Physical pin 32: AN8/RB8; bidirectional. */
  "AN8/RB8": "32",
  /** Physical pin 33: AN9/RB9; bidirectional. */
  "AN9/RB9": "33",
  /** Physical pin 34: AN10/RB10; bidirectional. */
  "AN10/RB10": "34",
  /** Physical pin 35: AN11/RB11; bidirectional. */
  "AN11/RB11": "35",
  /** Physical pin 36: VSS; passive. */
  "VSS_36": "36",
  /** Physical pin 37: VDD; power_in. */
  "VDD_37": "37",
  /** Physical pin 38: TCK/RA1; bidirectional. */
  "TCK/RA1": "38",
  /** Physical pin 39: ~{U2RTS}/RF13; bidirectional. */
  "~{U2RTS}/RF13": "39",
  /** Physical pin 40: ~{U2CTS}/RF12; bidirectional. */
  "~{U2CTS}/RF12": "40",
  /** Physical pin 41: AN12/RB12; bidirectional. */
  "AN12/RB12": "41",
  /** Physical pin 42: AN13/RB13; bidirectional. */
  "AN13/RB13": "42",
  /** Physical pin 43: AN14/RB14; bidirectional. */
  "AN14/RB14": "43",
  /** Physical pin 44: AN15/OCFB/CN12/RB15; bidirectional. */
  "AN15/OCFB/CN12/RB15": "44",
  /** Physical pin 45: VSS; passive. */
  "VSS_45": "45",
  /** Physical pin 46: VDD; power_in. */
  "VDD_46": "46",
  /** Physical pin 47: IC7/~{U1CTS}/CN20/RD14; bidirectional. */
  "IC7/~{U1CTS}/CN20/RD14": "47",
  /** Physical pin 48: IC8/~{U1RTS}/CN21/RD15; bidirectional. */
  "IC8/~{U1RTS}/CN21/RD15": "48",
  /** Physical pin 49: U2RX/CN17/RF4; bidirectional. */
  "U2RX/CN17/RF4": "49",
  /** Physical pin 50: U2TX/CN18/RF5; bidirectional. */
  "U2TX/CN18/RF5": "50",
  /** Physical pin 51: U1TX/RF3; bidirectional. */
  "U1TX/RF3": "51",
  /** Physical pin 52: U1RX/RF2; bidirectional. */
  "U1RX/RF2": "52",
  /** Physical pin 53: SDO1/RF8; bidirectional. */
  "SDO1/RF8": "53",
  /** Physical pin 54: SDI1/RF7; bidirectional. */
  "SDI1/RF7": "54",
  /** Physical pin 55: SCK1/INT0/RF6; bidirectional. */
  "SCK1/INT0/RF6": "55",
  /** Physical pin 56: SDA1/RG3; bidirectional. */
  "SDA1/RG3": "56",
  /** Physical pin 57: SCL1/RG2; bidirectional. */
  "SCL1/RG2": "57",
  /** Physical pin 58: SCL2/RA2; bidirectional. */
  "SCL2/RA2": "58",
  /** Physical pin 59: SDA2/RA3; bidirectional. */
  "SDA2/RA3": "59",
  /** Physical pin 60: TDI/RA4; bidirectional. */
  "TDI/RA4": "60",
  /** Physical pin 61: TDO/RA5; bidirectional. */
  "TDO/RA5": "61",
  /** Physical pin 62: VDD; power_in. */
  "VDD_62": "62",
  /** Physical pin 63: OSC1/CLKIN/RC12; bidirectional. */
  "OSC1/CLKIN/RC12": "63",
  /** Physical pin 64: OSC2/CLKO/RC15; bidirectional. */
  "OSC2/CLKO/RC15": "64",
  /** Physical pin 65: VSS; passive. */
  "VSS_65": "65",
  /** Physical pin 66: INT3/RA14; bidirectional. */
  "INT3/RA14": "66",
  /** Physical pin 67: INT4/RA15; bidirectional. */
  "INT4/RA15": "67",
  /** Physical pin 68: IC1/RD8; bidirectional. */
  "IC1/RD8": "68",
  /** Physical pin 69: IC2/RD9; bidirectional. */
  "IC2/RD9": "69",
  /** Physical pin 70: IC3/RD10; bidirectional. */
  "IC3/RD10": "70",
  /** Physical pin 71: IC4/RD11; bidirectional. */
  "IC4/RD11": "71",
  /** Physical pin 72: OC1/RD0; bidirectional. */
  "OC1/RD0": "72",
  /** Physical pin 73: PGED2/SOSCI/CN1/RC13; bidirectional. */
  "PGED2/SOSCI/CN1/RC13": "73",
  /** Physical pin 74: PGEC2/SOSCO/T1CK/CN0/RC14; bidirectional. */
  "PGEC2/SOSCO/T1CK/CN0/RC14": "74",
  /** Physical pin 75: VSS; power_in. */
  "VSS_75": "75",
  /** Physical pin 76: OC2/RD1; bidirectional. */
  "OC2/RD1": "76",
  /** Physical pin 77: OC3/RD2; bidirectional. */
  "OC3/RD2": "77",
  /** Physical pin 78: OC4/RD3; bidirectional. */
  "OC4/RD3": "78",
  /** Physical pin 79: IC5/RD12; bidirectional. */
  "IC5/RD12": "79",
  /** Physical pin 80: IC6/CN19/RD13; bidirectional. */
  "IC6/CN19/RD13": "80",
  /** Physical pin 81: OC5/CN13/RD4; bidirectional. */
  "OC5/CN13/RD4": "81",
  /** Physical pin 82: OC6/CN14/RD5; bidirectional. */
  "OC6/CN14/RD5": "82",
  /** Physical pin 83: OC7/CN15/RD6; bidirectional. */
  "OC7/CN15/RD6": "83",
  /** Physical pin 84: OC8/UPDN/CN16/RD7; bidirectional. */
  "OC8/UPDN/CN16/RD7": "84",
  /** Physical pin 85: VCAP; passive. */
  "VCAP": "85",
  /** Physical pin 86: VDD; power_in. */
  "VDD_86": "86",
  /** Physical pin 87: C1RX/RF0; bidirectional. */
  "C1RX/RF0": "87",
  /** Physical pin 88: C1TX/RF1; bidirectional. */
  "C1TX/RF1": "88",
  /** Physical pin 89: C2TX/RG1; bidirectional. */
  "C2TX/RG1": "89",
  /** Physical pin 90: C2RX/RG0; bidirectional. */
  "C2RX/RG0": "90",
  /** Physical pin 91: AN22/CN22/RA6; bidirectional. */
  "AN22/CN22/RA6": "91",
  /** Physical pin 92: AN23/CN23/RA7; bidirectional. */
  "AN23/CN23/RA7": "92",
  /** Physical pin 93: PWM1L/RE0; bidirectional. */
  "PWM1L/RE0": "93",
  /** Physical pin 94: PWM1H/RE1; bidirectional. */
  "PWM1H/RE1": "94",
  /** Physical pin 95: RG14; bidirectional. */
  "RG14": "95",
  /** Physical pin 96: RG12; bidirectional. */
  "RG12": "96",
  /** Physical pin 97: RG13; bidirectional. */
  "RG13": "97",
  /** Physical pin 98: PWM2L/RE2; bidirectional. */
  "PWM2L/RE2": "98",
  /** Physical pin 99: PWM2H/RE3; bidirectional. */
  "PWM2H/RE3": "99",
  /** Physical pin 100: PWM3L/RE4; bidirectional. */
  "PWM3L/RE4": "100",
}) {
  override schema = "DSP_Microchip_DSPIC33:DSPIC33FJ64MC710A";
  override referencePrefix = "U";
}

/**
 * 40 MIPS, 64k Flash, 16k SRAM, DIP-28
 *
 * KiCad symbol: `DSP_Microchip_DSPIC33:DSPIC33FJ64MC802-xSP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/70291G.pdf
 * Keywords: 16-bit Digital Signal Controller Microchip dsPIC.
 * Default footprint: Package_DIP:DIP-28_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DSPIC33FJ64MC802_xSP extends Component.withPins({
  /** Physical pin 1: ~{MCLR}; input. */
  "~{MCLR}": "1",
  /** Physical pin 2: AN0/VREF+/CN2/RA0; bidirectional. */
  "AN0/VREF+/CN2/RA0": "2",
  /** Physical pin 3: AN1/VREF-/CN3/RA1; bidirectional. */
  "AN1/VREF-/CN3/RA1": "3",
  /** Physical pin 4: PGED1/AN2/C2IN-/RP0/CN4/RB0; bidirectional. */
  "PGED1/AN2/C2IN-/RP0/CN4/RB0": "4",
  /** Physical pin 5: PGEC1/AN3/C2IN+/RP1/CN5/RB1; bidirectional. */
  "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "5",
  /** Physical pin 6: AN4/C1IN-/RP2/CN6/RB2; bidirectional. */
  "AN4/C1IN-/RP2/CN6/RB2": "6",
  /** Physical pin 7: AN5/C1IN+/RP3/CN7/RB3; bidirectional. */
  "AN5/C1IN+/RP3/CN7/RB3": "7",
  /** Physical pin 8: VSS; power_in. */
  "VSS_8": "8",
  /** Physical pin 9: OSC1/CLKI/CN30/RA2; bidirectional. */
  "OSC1/CLKI/CN30/RA2": "9",
  /** Physical pin 10: OSC2/CLKO/CN29/PMA0/RA3; bidirectional. */
  "OSC2/CLKO/CN29/PMA0/RA3": "10",
  /** Physical pin 11: SOSCI/RP4/CN1/PMBE/RB4; bidirectional. */
  "SOSCI/RP4/CN1/PMBE/RB4": "11",
  /** Physical pin 12: SOSCO/T1CK/CN0/PMA1/RA4; bidirectional. */
  "SOSCO/T1CK/CN0/PMA1/RA4": "12",
  /** Physical pin 13: VDD; power_in. */
  "VDD": "13",
  /** Physical pin 14: PGED3/ASDA1/RP5/CN27/PMD7/RB5; bidirectional. */
  "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "14",
  /** Physical pin 15: PGEC3/ASCL1/RP6/CN24/PMD6/RB6; bidirectional. */
  "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "15",
  /** Physical pin 16: INT0/RP7/CN23/PMD5/RB7; bidirectional. */
  "INT0/RP7/CN23/PMD5/RB7": "16",
  /** Physical pin 17: TCK/PWM2H1/SCL1/RP8/CN22/PMD4/RB8; bidirectional. */
  "TCK/PWM2H1/SCL1/RP8/CN22/PMD4/RB8": "17",
  /** Physical pin 18: TDO/PWM2L1/SDA1/RP9/CN21/PMD3/RB9; bidirectional. */
  "TDO/PWM2L1/SDA1/RP9/CN21/PMD3/RB9": "18",
  /** Physical pin 19: VSS; passive. */
  "VSS_19": "19",
  /** Physical pin 20: VCAP; passive. */
  "VCAP": "20",
  /** Physical pin 21: PGED2/TDI/PWM1H3/RP10/CN16/PMD2/RB10; bidirectional. */
  "PGED2/TDI/PWM1H3/RP10/CN16/PMD2/RB10": "21",
  /** Physical pin 22: PGEC2/TMS/PWM1L3/RP11/CN15/PMD1/RB11; bidirectional. */
  "PGEC2/TMS/PWM1L3/RP11/CN15/PMD1/RB11": "22",
  /** Physical pin 23: PWM1H2/RP12/CN14/PMD0/RB12; bidirectional. */
  "PWM1H2/RP12/CN14/PMD0/RB12": "23",
  /** Physical pin 24: PWM1L2/RP13/CN13/PMRD/RB13; bidirectional. */
  "PWM1L2/RP13/CN13/PMRD/RB13": "24",
  /** Physical pin 25: PWM1H1/RTCC/RP14/CN12/PMWR/RB14; bidirectional. */
  "PWM1H1/RTCC/RP14/CN12/PMWR/RB14": "25",
  /** Physical pin 26: PWM1L1/RP15/CN11/PMCS1/RB15; bidirectional. */
  "PWM1L1/RP15/CN11/PMCS1/RB15": "26",
  /** Physical pin 27: AVSS; power_in. */
  "AVSS": "27",
  /** Physical pin 28: AVDD; power_in. */
  "AVDD": "28",
}) {
  override schema = "DSP_Microchip_DSPIC33:DSPIC33FJ64MC802-xSP";
  override referencePrefix = "U";
}

/**
 * 40MIPS, 64k Flash, 16k SRAM, ECAN, 16-bit DAC
 *
 * KiCad symbol: `DSP_Microchip_DSPIC33:DSPIC33FJ64MC804`. Reference prefix: `U`.
 * Footprint filters: QFN?44*1EP*8x8mm*P0.65mm*, TQFP?44*10x10mm*P0.8mm*.
 * @see http://ww1.microchip.com/downloads/en/DeviceDoc/70291G.pdf
 * Keywords: 16-bit Digital Signal Controller Microchip dsPIC Motor Control.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class DSPIC33FJ64MC804 extends Component.withPins({
  /** Physical pin 1: SDA1/RP9/CN21/PMD3/RB9; bidirectional. */
  "SDA1/RP9/CN21/PMD3/RB9": "1",
  /** Physical pin 2: PWM2H1/RP22/CN18/PMA1/RC6; bidirectional. */
  "PWM2H1/RP22/CN18/PMA1/RC6": "2",
  /** Physical pin 3: PWM2L1/RP23/CN17/PMA0/RC7; bidirectional. */
  "PWM2L1/RP23/CN17/PMA0/RC7": "3",
  /** Physical pin 4: RP24/CN20/PMA5/RC8; bidirectional. */
  "RP24/CN20/PMA5/RC8": "4",
  /** Physical pin 5: RP25/CN19/PMA6/RC9; bidirectional. */
  "RP25/CN19/PMA6/RC9": "5",
  /** Physical pin 6: VSS; power_in. */
  "VSS_6": "6",
  /** Physical pin 7: VCAP; power_in. */
  "VCAP": "7",
  /** Physical pin 8: PGED2/PWM1H3/RP10/CN16/PMD2/RB10; bidirectional. */
  "PGED2/PWM1H3/RP10/CN16/PMD2/RB10": "8",
  /** Physical pin 9: PGEC2/PWM1L3/RP11/CN15/PMD1/RB11; bidirectional. */
  "PGEC2/PWM1L3/RP11/CN15/PMD1/RB11": "9",
  /** Physical pin 10: PWM1H2/DAC1RP/RP12/CN14/PMD0/RB12; bidirectional. */
  "PWM1H2/DAC1RP/RP12/CN14/PMD0/RB12": "10",
  /** Physical pin 11: PWM1L2/DAC1RN/RP13/CN13/PMRD/RB13; bidirectional. */
  "PWM1L2/DAC1RN/RP13/CN13/PMRD/RB13": "11",
  /** Physical pin 12: TMS/PMA10/RA10; bidirectional. */
  "TMS/PMA10/RA10": "12",
  /** Physical pin 13: TCK/PMA7/RA7; bidirectional. */
  "TCK/PMA7/RA7": "13",
  /** Physical pin 14: PWM1H1/DAC1LP/RTCC/RP14/CN12/PMWR/RB14; bidirectional. */
  "PWM1H1/DAC1LP/RTCC/RP14/CN12/PMWR/RB14": "14",
  /** Physical pin 15: PWM1L/DAC1LN/RP15/CN11/PMCS1/RB15; bidirectional. */
  "PWM1L/DAC1LN/RP15/CN11/PMCS1/RB15": "15",
  /** Physical pin 16: AVSS; power_in. */
  "AVSS": "16",
  /** Physical pin 17: AVDD; power_in. */
  "AVDD": "17",
  /** Physical pin 18: ~{MCLR}; input. */
  "~{MCLR}": "18",
  /** Physical pin 19: AN0/VREF+/CN2/RA0; bidirectional. */
  "AN0/VREF+/CN2/RA0": "19",
  /** Physical pin 20: AN1/VREF-/CN3/RA1; bidirectional. */
  "AN1/VREF-/CN3/RA1": "20",
  /** Physical pin 21: PGED1/AN2/C2IN-/RP0/CN4/RB0; bidirectional. */
  "PGED1/AN2/C2IN-/RP0/CN4/RB0": "21",
  /** Physical pin 22: PGEC1/AN3/C2IN+/RP1/CN5/RB1; bidirectional. */
  "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "22",
  /** Physical pin 23: AN4/C1IN-/RP2/CN6/RB2; bidirectional. */
  "AN4/C1IN-/RP2/CN6/RB2": "23",
  /** Physical pin 24: AN5/C1IN+/RP3/CN7/RB3; bidirectional. */
  "AN5/C1IN+/RP3/CN7/RB3": "24",
  /** Physical pin 25: AN6/DAC1RM/RP16/CN8/RC0; bidirectional. */
  "AN6/DAC1RM/RP16/CN8/RC0": "25",
  /** Physical pin 26: AN7/DAC1LM/RP17/CN9/RC1; bidirectional. */
  "AN7/DAC1LM/RP17/CN9/RC1": "26",
  /** Physical pin 27: AN8/CVREF/RP18/PMA2/CN10/RC2; bidirectional. */
  "AN8/CVREF/RP18/PMA2/CN10/RC2": "27",
  /** Physical pin 28: VDD; power_in. */
  "VDD_28": "28",
  /** Physical pin 29: VSS; power_in. */
  "VSS_29": "29",
  /** Physical pin 30: OSC1/CLKI/CN30/RA2; input. */
  "OSC1/CLKI/CN30/RA2": "30",
  /** Physical pin 31: OSC2/CLKO/CN29/RA3; input. */
  "OSC2/CLKO/CN29/RA3": "31",
  /** Physical pin 32: TDO/PMA8/RA8; input. */
  "TDO/PMA8/RA8": "32",
  /** Physical pin 33: SOSCI/RP4/CN1/RB4; input. */
  "SOSCI/RP4/CN1/RB4": "33",
  /** Physical pin 34: SOSCO/T1CK/CN0/RA4; input. */
  "SOSCO/T1CK/CN0/RA4": "34",
  /** Physical pin 35: TDI/PMA9/RA9; input. */
  "TDI/PMA9/RA9": "35",
  /** Physical pin 36: RP19/CN28/PMBE/RC3; input. */
  "RP19/CN28/PMBE/RC3": "36",
  /** Physical pin 37: RP20/CN25/PMA4/RC4; input. */
  "RP20/CN25/PMA4/RC4": "37",
  /** Physical pin 38: RP21/CN26/PMA3/RC5; input. */
  "RP21/CN26/PMA3/RC5": "38",
  /** Physical pin 39: VSS; power_in. */
  "VSS_39": "39",
  /** Physical pin 40: VDD; power_in. */
  "VDD_40": "40",
  /** Physical pin 41: PGED3/ASDA1/RP5/CN27/PMD7/RB5; input. */
  "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "41",
  /** Physical pin 42: PGEC3/ASCL1/RP6/CN24/PMD6/RB6; input. */
  "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "42",
  /** Physical pin 43: INT0/RP7/CN23/PMD5/RB7; input. */
  "INT0/RP7/CN23/PMD5/RB7": "43",
  /** Physical pin 44: SCL1/RP8/CN22/PMD4/RB8; input. */
  "SCL1/RP8/CN22/PMD4/RB8": "44",
}) {
  override schema = "DSP_Microchip_DSPIC33:DSPIC33FJ64MC804";
  override referencePrefix = "U";
}

