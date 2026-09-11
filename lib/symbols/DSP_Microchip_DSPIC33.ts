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
 */
export class DSPIC33EP256MU810_xPT extends Component.withPins({
  "RG15": "1",
  "VDD_2": "2",
  "PWM3H/RE5": "3",
  "PWM4L/RE6": "4",
  "PWM4H/RE7": "5",
  "RC1/PWM5L/AN16": "6",
  "RC2/PWM5H/AN17": "7",
  "RC3/PWM6L/AN18": "8",
  "RC4/PWM6H/AN19": "9",
  "SCK2/PMA5/RG6": "10",
  "SDI2/PMA4/RG7": "11",
  "SDO2/PMA3/RG8": "12",
  "~{MCLR}": "13",
  "PMA2/RG9": "14",
  "VSS_15": "15",
  "VDD_16": "16",
  "RA0/TMS": "17",
  "AN20/RE8": "18",
  "AN21/RE9": "19",
  "RB5/AN5": "20",
  "RB4/AN4": "21",
  "RB3/AN3": "22",
  "RB2/AN2": "23",
  "RB1/AN1/PGEC3": "24",
  "RB0/AN0/PGED3": "25",
  "RB6/AN6/PGEC1": "26",
  "RB7/AN7/PGED1": "27",
  "RA9/VREF-": "28",
  "RA10/VREF+": "29",
  "AVDD": "30",
  "AVSS": "31",
  "RB8/PMA6/AN8": "32",
  "RB9/PMA7/AN9": "33",
  "RB10/PMA13/AN10": "34",
  "RB11/PMA12/AN11": "35",
  "VSS_36": "36",
  "VDD_37": "37",
  "RA1/TCK": "38",
  "RF13": "39",
  "RF12": "40",
  "RB12/PMA11/AN12": "41",
  "RB13/PMA10/AN13": "42",
  "RB14/PMA1/AN14": "43",
  "RB15/PMA0/AN15": "44",
  "VSS_45": "45",
  "VDD_46": "46",
  "RD14": "47",
  "RD15": "48",
  "SDA2/PMA9/RF4": "49",
  "SCL2/PMA8/RF5": "50",
  "RF3": "51",
  "RF2": "52",
  "RF8": "53",
  "VBUS": "54",
  "VUSB3V3": "55",
  "D-/RG3": "56",
  "D+/RG2": "57",
  "RA2/ASCL2": "58",
  "RA3/ASDA2": "59",
  "RA4/TDI": "60",
  "RA5/TDO": "61",
  "VDD_62": "62",
  "RC12/OSC1": "63",
  "RC15/CLKO/OSC2": "64",
  "VSS_65": "65",
  "RA14": "66",
  "RA15": "67",
  "RTCC/RD8": "68",
  "ASDA1/RD9": "69",
  "ASCL1/RD10": "70",
  "RD11": "71",
  "INT0/RD0": "72",
  "RC13/SOSCI/PGED2": "73",
  "RC14/T1CK/SOSCO/PGEC2": "74",
  "VSS_75": "75",
  "RD1": "76",
  "DPH/RD2": "77",
  "PMBE/RD3": "78",
  "RD12": "79",
  "RD13": "80",
  "PMWR/RD4": "81",
  "PMRD/RD5": "82",
  "RD6": "83",
  "RD7": "84",
  "VCAP": "85",
  "VDD_86": "86",
  "RF0": "87",
  "RF1": "88",
  "RG1": "89",
  "RG0": "90",
  "RA6/AN22": "91",
  "RA7/AN23": "92",
  "AN24/PWM1L/RE0": "93",
  "AN25/PWM1H/RE1": "94",
  "RG14": "95",
  "RG12": "96",
  "RG13": "97",
  "AN26/PWM2L/PMD2/RE2": "98",
  "AN27/PWM2H/PMD3/RE3": "99",
  "AN28/PWM3L/PMD4/RE4": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RG15: "bidirectional", VDD_2: "power_in", "PWM3H/RE5": "bidirectional", "PWM4L/RE6": "bidirectional", "PWM4H/RE7": "bidirectional", "RC1/PWM5L/AN16": "bidirectional", "RC2/PWM5H/AN17": "bidirectional", "RC3/PWM6L/AN18": "bidirectional", "RC4/PWM6H/AN19": "bidirectional", "SCK2/PMA5/RG6": "bidirectional", "SDI2/PMA4/RG7": "bidirectional", "SDO2/PMA3/RG8": "bidirectional", "~{MCLR}": "input", "PMA2/RG9": "bidirectional", VSS_15: "power_in", VDD_16: "power_in", "RA0/TMS": "bidirectional", "AN20/RE8": "bidirectional", "AN21/RE9": "bidirectional", "RB5/AN5": "bidirectional", "RB4/AN4": "bidirectional", "RB3/AN3": "bidirectional", "RB2/AN2": "bidirectional", "RB1/AN1/PGEC3": "bidirectional", "RB0/AN0/PGED3": "bidirectional", "RB6/AN6/PGEC1": "bidirectional", "RB7/AN7/PGED1": "bidirectional", "RA9/VREF-": "bidirectional", "RA10/VREF+": "bidirectional", AVDD: "power_in", AVSS: "power_in", "RB8/PMA6/AN8": "bidirectional", "RB9/PMA7/AN9": "bidirectional", "RB10/PMA13/AN10": "bidirectional", "RB11/PMA12/AN11": "bidirectional", VSS_36: "passive", VDD_37: "power_in", "RA1/TCK": "bidirectional", RF13: "bidirectional", RF12: "bidirectional", "RB12/PMA11/AN12": "bidirectional", "RB13/PMA10/AN13": "bidirectional", "RB14/PMA1/AN14": "bidirectional", "RB15/PMA0/AN15": "bidirectional", VSS_45: "passive", VDD_46: "power_in", RD14: "bidirectional", RD15: "bidirectional", "SDA2/PMA9/RF4": "bidirectional", "SCL2/PMA8/RF5": "bidirectional", RF3: "bidirectional", RF2: "bidirectional", RF8: "bidirectional", VBUS: "bidirectional", VUSB3V3: "bidirectional", "D-/RG3": "bidirectional", "D+/RG2": "bidirectional", "RA2/ASCL2": "bidirectional", "RA3/ASDA2": "bidirectional", "RA4/TDI": "bidirectional", "RA5/TDO": "bidirectional", VDD_62: "power_in", "RC12/OSC1": "bidirectional", "RC15/CLKO/OSC2": "bidirectional", VSS_65: "passive", RA14: "bidirectional", RA15: "bidirectional", "RTCC/RD8": "bidirectional", "ASDA1/RD9": "bidirectional", "ASCL1/RD10": "bidirectional", RD11: "bidirectional", "INT0/RD0": "bidirectional", "RC13/SOSCI/PGED2": "bidirectional", "RC14/T1CK/SOSCO/PGEC2": "bidirectional", VSS_75: "passive", RD1: "bidirectional", "DPH/RD2": "bidirectional", "PMBE/RD3": "bidirectional", RD12: "bidirectional", RD13: "bidirectional", "PMWR/RD4": "bidirectional", "PMRD/RD5": "bidirectional", RD6: "bidirectional", RD7: "bidirectional", VCAP: "passive", VDD_86: "power_in", RF0: "bidirectional", RF1: "bidirectional", RG1: "bidirectional", RG0: "bidirectional", "RA6/AN22": "bidirectional", "RA7/AN23": "bidirectional", "AN24/PWM1L/RE0": "bidirectional", "AN25/PWM1H/RE1": "bidirectional", RG14: "bidirectional", RG12: "bidirectional", RG13: "bidirectional", "AN26/PWM2L/PMD2/RE2": "bidirectional", "AN27/PWM2H/PMD3/RE3": "bidirectional", "AN28/PWM3L/PMD4/RE4": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class DSPIC33FJ128GP204 extends Component.withPins({
  "SDA1/RP9/CN21/PMD3/RB9": "1",
  "RP22/CN18/PMA1/RC6": "2",
  "RP23/CN17/PMA0/RC7": "3",
  "RP24/CN20/PMA5/RC8": "4",
  "RP25/CN19/PMA6/RC9": "5",
  "VSS_6": "6",
  "VCAP": "7",
  "PGED2/EMCD2/RP10/CN16/PMD2/RB10": "8",
  "PGEC2/RP11/CN15/PMD1/RB11": "9",
  "AN12/RP12/CN14/PMD0/RB12": "10",
  "AN11/RP13/CN13/PMRD/RB13": "11",
  "TMS/PMA10/RA10": "12",
  "TCK/PMA7/RA7": "13",
  "AN10/RTCC/RP14/CN12/PMWR/RB14": "14",
  "AN9/RP15/CN11/PMCS1/RB15": "15",
  "AVSS": "16",
  "AVDD": "17",
  "~{MCLR}": "18",
  "AN0/VREF+/CN2/RA0": "19",
  "AN1/VREF-/CN3/RA1": "20",
  "PGED1/AN2/C2IN-/RP0/CN4/RB0": "21",
  "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "22",
  "AN4/C1IN-/RP2/CN6/RB2": "23",
  "AN5/C1IN+/RP3/CN7/RB3": "24",
  "AN6/RP16/CN8/RC0": "25",
  "AN7/RP17/CN9/RC1": "26",
  "AN8/CVREF/RP18/PMA2/CN10/RC2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI/CN30/RA2": "30",
  "OSC2/CLKO/CN29/RA3": "31",
  "TDO/PMA8/RA8": "32",
  "SOSCI/RP4/CN1/RB4": "33",
  "SOSCO/T1CK/CN0/RA4": "34",
  "TDI/PMA9/RA9": "35",
  "RP19/CN28/PMBE/RC3": "36",
  "RP20/CN25/PMA4/RC4": "37",
  "RP21/CN26/PMA3/RC5": "38",
  "VSS_39": "39",
  "VDD_40": "40",
  "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "41",
  "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "42",
  "INT0/RP7/CN23/PMD5/RB7": "43",
  "SCL1/RP8/CN22/PMD4/RB8": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SDA1/RP9/CN21/PMD3/RB9": "bidirectional", "RP22/CN18/PMA1/RC6": "bidirectional", "RP23/CN17/PMA0/RC7": "bidirectional", "RP24/CN20/PMA5/RC8": "bidirectional", "RP25/CN19/PMA6/RC9": "bidirectional", VSS_6: "power_in", VCAP: "power_in", "PGED2/EMCD2/RP10/CN16/PMD2/RB10": "bidirectional", "PGEC2/RP11/CN15/PMD1/RB11": "bidirectional", "AN12/RP12/CN14/PMD0/RB12": "bidirectional", "AN11/RP13/CN13/PMRD/RB13": "bidirectional", "TMS/PMA10/RA10": "bidirectional", "TCK/PMA7/RA7": "bidirectional", "AN10/RTCC/RP14/CN12/PMWR/RB14": "bidirectional", "AN9/RP15/CN11/PMCS1/RB15": "bidirectional", AVSS: "power_in", AVDD: "power_in", "~{MCLR}": "input", "AN0/VREF+/CN2/RA0": "bidirectional", "AN1/VREF-/CN3/RA1": "bidirectional", "PGED1/AN2/C2IN-/RP0/CN4/RB0": "bidirectional", "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "bidirectional", "AN4/C1IN-/RP2/CN6/RB2": "bidirectional", "AN5/C1IN+/RP3/CN7/RB3": "bidirectional", "AN6/RP16/CN8/RC0": "bidirectional", "AN7/RP17/CN9/RC1": "bidirectional", "AN8/CVREF/RP18/PMA2/CN10/RC2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI/CN30/RA2": "input", "OSC2/CLKO/CN29/RA3": "input", "TDO/PMA8/RA8": "input", "SOSCI/RP4/CN1/RB4": "input", "SOSCO/T1CK/CN0/RA4": "input", "TDI/PMA9/RA9": "input", "RP19/CN28/PMBE/RC3": "input", "RP20/CN25/PMA4/RC4": "input", "RP21/CN26/PMA3/RC5": "input", VSS_39: "power_in", VDD_40: "power_in", "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "input", "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "input", "INT0/RP7/CN23/PMD5/RB7": "input", "SCL1/RP8/CN22/PMD4/RB8": "input", ...opts.pinTypes } });
  }
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
 */
export class DSPIC33FJ128GP804 extends Component.withPins({
  "SDA1/RP9/CN21/PMD3/RB9": "1",
  "RP22/CN18/PMA1/RC6": "2",
  "RP23/CN17/PMA0/RC7": "3",
  "RP24/CN20/PMA5/RC8": "4",
  "RP25/CN19/PMA6/RC9": "5",
  "VSS_6": "6",
  "VCAP": "7",
  "PGED2/EMCD2/RP10/CN16/PMD2/RB10": "8",
  "PGEC2/RP11/CN15/PMD1/RB11": "9",
  "AN12/DAC1RP/RP12/CN14/PMD0/RB12": "10",
  "AN11/DAC1RN/RP13/CN13/PMRD/RB13": "11",
  "TMS/PMA10/RA10": "12",
  "TCK/PMA7/RA7": "13",
  "AN10/DAC1LP/RTCC/RP14/CN12/PMWR/RB14": "14",
  "AN9/DAC1LN/RP15/CN11/PMCS1/RB15": "15",
  "AVSS": "16",
  "AVDD": "17",
  "~{MCLR}": "18",
  "AN0/VREF+/CN2/RA0": "19",
  "AN1/VREF-/CN3/RA1": "20",
  "PGED1/AN2/C2IN-/RP0/CN4/RB0": "21",
  "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "22",
  "AN4/C1IN-/RP2/CN6/RB2": "23",
  "AN5/C1IN+/RP3/CN7/RB3": "24",
  "AN6/DAC1RM/RP16/CN8/RC0": "25",
  "AN7/DAC1LM/RP17/CN9/RC1": "26",
  "AN8/CVREF/RP18/PMA2/CN10/RC2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI/CN30/RA2": "30",
  "OSC2/CLKO/CN29/RA3": "31",
  "TDO/PMA8/RA8": "32",
  "SOSCI/RP4/CN1/RB4": "33",
  "SOSCO/T1CK/CN0/RA4": "34",
  "TDI/PMA9/RA9": "35",
  "RP19/CN28/PMBE/RC3": "36",
  "RP20/CN25/PMA4/RC4": "37",
  "RP21/CN26/PMA3/RC5": "38",
  "VSS_39": "39",
  "VDD_40": "40",
  "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "41",
  "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "42",
  "INT0/RP7/CN23/PMD5/RB7": "43",
  "SCL1/RP8/CN22/PMD4/RB8": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SDA1/RP9/CN21/PMD3/RB9": "bidirectional", "RP22/CN18/PMA1/RC6": "bidirectional", "RP23/CN17/PMA0/RC7": "bidirectional", "RP24/CN20/PMA5/RC8": "bidirectional", "RP25/CN19/PMA6/RC9": "bidirectional", VSS_6: "power_in", VCAP: "power_in", "PGED2/EMCD2/RP10/CN16/PMD2/RB10": "bidirectional", "PGEC2/RP11/CN15/PMD1/RB11": "bidirectional", "AN12/DAC1RP/RP12/CN14/PMD0/RB12": "bidirectional", "AN11/DAC1RN/RP13/CN13/PMRD/RB13": "bidirectional", "TMS/PMA10/RA10": "bidirectional", "TCK/PMA7/RA7": "bidirectional", "AN10/DAC1LP/RTCC/RP14/CN12/PMWR/RB14": "bidirectional", "AN9/DAC1LN/RP15/CN11/PMCS1/RB15": "bidirectional", AVSS: "power_in", AVDD: "power_in", "~{MCLR}": "input", "AN0/VREF+/CN2/RA0": "bidirectional", "AN1/VREF-/CN3/RA1": "bidirectional", "PGED1/AN2/C2IN-/RP0/CN4/RB0": "bidirectional", "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "bidirectional", "AN4/C1IN-/RP2/CN6/RB2": "bidirectional", "AN5/C1IN+/RP3/CN7/RB3": "bidirectional", "AN6/DAC1RM/RP16/CN8/RC0": "bidirectional", "AN7/DAC1LM/RP17/CN9/RC1": "bidirectional", "AN8/CVREF/RP18/PMA2/CN10/RC2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI/CN30/RA2": "input", "OSC2/CLKO/CN29/RA3": "input", "TDO/PMA8/RA8": "input", "SOSCI/RP4/CN1/RB4": "input", "SOSCO/T1CK/CN0/RA4": "input", "TDI/PMA9/RA9": "input", "RP19/CN28/PMBE/RC3": "input", "RP20/CN25/PMA4/RC4": "input", "RP21/CN26/PMA3/RC5": "input", VSS_39: "power_in", VDD_40: "power_in", "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "input", "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "input", "INT0/RP7/CN23/PMD5/RB7": "input", "SCL1/RP8/CN22/PMD4/RB8": "input", ...opts.pinTypes } });
  }
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
 */
export class DSPIC33FJ128MC204 extends Component.withPins({
  "SDA1/RP9/CN21/PMD3/RB9": "1",
  "PWM2H1/RP22/CN18/PMA1/RC6": "2",
  "PWM2L1/RP23/CN17/PMA0/RC7": "3",
  "RP24/CN20/PMA5/RC8": "4",
  "RP25/CN19/PMA6/RC9": "5",
  "VSS_6": "6",
  "VCAP": "7",
  "PGED2/PWM1H3/RP10/CN16/PMD2/RB10": "8",
  "PGEC2/PWM1L3/RP11/CN15/PMD1/RB11": "9",
  "PWM1H2/RP12/CN14/PMD0/RB12": "10",
  "PWM1L2/RP13/CN13/PMRD/RB13": "11",
  "TMS/PMA10/RA10": "12",
  "TCK/PMA7/RA7": "13",
  "PWM1H1/RTCC/RP14/CN12/PMWR/RB14": "14",
  "PWM1L/RP15/CN11/PMCS1/RB15": "15",
  "AVSS": "16",
  "AVDD": "17",
  "~{MCLR}": "18",
  "AN0/VREF+/CN2/RA0": "19",
  "AN1/VREF-/CN3/RA1": "20",
  "PGED1/AN2/C2IN-/RP0/CN4/RB0": "21",
  "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "22",
  "AN4/C1IN-/RP2/CN6/RB2": "23",
  "AN5/C1IN+/RP3/CN7/RB3": "24",
  "AN6/RP16/CN8/RC0": "25",
  "AN7/RP17/CN9/RC1": "26",
  "AN8/CVREF/RP18/PMA2/CN10/RC2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI/CN30/RA2": "30",
  "OSC2/CLKO/CN29/RA3": "31",
  "TDO/PMA8/RA8": "32",
  "SOSCI/RP4/CN1/RB4": "33",
  "SOSCO/T1CK/CN0/RA4": "34",
  "TDI/PMA9/RA9": "35",
  "RP19/CN28/PMBE/RC3": "36",
  "RP20/CN25/PMA4/RC4": "37",
  "RP21/CN26/PMA3/RC5": "38",
  "VSS_39": "39",
  "VDD_40": "40",
  "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "41",
  "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "42",
  "INT0/RP7/CN23/PMD5/RB7": "43",
  "SCL1/RP8/CN22/PMD4/RB8": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SDA1/RP9/CN21/PMD3/RB9": "bidirectional", "PWM2H1/RP22/CN18/PMA1/RC6": "bidirectional", "PWM2L1/RP23/CN17/PMA0/RC7": "bidirectional", "RP24/CN20/PMA5/RC8": "bidirectional", "RP25/CN19/PMA6/RC9": "bidirectional", VSS_6: "power_in", VCAP: "power_in", "PGED2/PWM1H3/RP10/CN16/PMD2/RB10": "bidirectional", "PGEC2/PWM1L3/RP11/CN15/PMD1/RB11": "bidirectional", "PWM1H2/RP12/CN14/PMD0/RB12": "bidirectional", "PWM1L2/RP13/CN13/PMRD/RB13": "bidirectional", "TMS/PMA10/RA10": "bidirectional", "TCK/PMA7/RA7": "bidirectional", "PWM1H1/RTCC/RP14/CN12/PMWR/RB14": "bidirectional", "PWM1L/RP15/CN11/PMCS1/RB15": "bidirectional", AVSS: "power_in", AVDD: "power_in", "~{MCLR}": "input", "AN0/VREF+/CN2/RA0": "bidirectional", "AN1/VREF-/CN3/RA1": "bidirectional", "PGED1/AN2/C2IN-/RP0/CN4/RB0": "bidirectional", "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "bidirectional", "AN4/C1IN-/RP2/CN6/RB2": "bidirectional", "AN5/C1IN+/RP3/CN7/RB3": "bidirectional", "AN6/RP16/CN8/RC0": "bidirectional", "AN7/RP17/CN9/RC1": "bidirectional", "AN8/CVREF/RP18/PMA2/CN10/RC2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI/CN30/RA2": "input", "OSC2/CLKO/CN29/RA3": "input", "TDO/PMA8/RA8": "input", "SOSCI/RP4/CN1/RB4": "input", "SOSCO/T1CK/CN0/RA4": "input", "TDI/PMA9/RA9": "input", "RP19/CN28/PMBE/RC3": "input", "RP20/CN25/PMA4/RC4": "input", "RP21/CN26/PMA3/RC5": "input", VSS_39: "power_in", VDD_40: "power_in", "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "input", "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "input", "INT0/RP7/CN23/PMD5/RB7": "input", "SCL1/RP8/CN22/PMD4/RB8": "input", ...opts.pinTypes } });
  }
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
 */
export class DSPIC33FJ256MC710A extends Component.withPins({
  "RG15": "1",
  "VDD_2": "2",
  "PWM3H/RE5": "3",
  "PWM4L/RE6": "4",
  "PWM4H/RE7": "5",
  "AN16/T2CK/T7CK/RC1": "6",
  "AN17/T3CK/T6CK/RC2": "7",
  "AN18/T4CK/T9CK/RC3": "8",
  "AN19/T5CK/T8CK/RC4": "9",
  "SCK2/CN8/RG6": "10",
  "SDI2/CN9/RG7": "11",
  "SDO2/CN10/RG8": "12",
  "~{MCLR}": "13",
  "~{SS2}/CN11/RG9": "14",
  "VSS_15": "15",
  "VDD_16": "16",
  "TMS/RA0": "17",
  "AN20/~{FLTA}/INT1/RE8": "18",
  "AN21/~{FLTB}/INT2/RE9": "19",
  "AN5/QEB/CN7/RB5": "20",
  "AN4/QEA/CN6/RB4": "21",
  "AN3/INDX/CN5/RB3": "22",
  "AN2/~{SS1}/CN4/RB2": "23",
  "PGEC3/AN1/CN3/RB1": "24",
  "PGED3/AN0/CN2/RB0": "25",
  "PGEC1/AN6/OCFA/RB6": "26",
  "PGED1/AN7/RB7": "27",
  "VREF-/RA9": "28",
  "VREF+/RA10": "29",
  "AVDD": "30",
  "AVSS": "31",
  "AN8/RB8": "32",
  "AN9/RB9": "33",
  "AN10/RB10": "34",
  "AN11/RB11": "35",
  "VSS_36": "36",
  "VDD_37": "37",
  "TCK/RA1": "38",
  "~{U2RTS}/RF13": "39",
  "~{U2CTS}/RF12": "40",
  "AN12/RB12": "41",
  "AN13/RB13": "42",
  "AN14/RB14": "43",
  "AN15/OCFB/CN12/RB15": "44",
  "VSS_45": "45",
  "VDD_46": "46",
  "IC7/~{U1CTS}/CN20/RD14": "47",
  "IC8/~{U1RTS}/CN21/RD15": "48",
  "U2RX/CN17/RF4": "49",
  "U2TX/CN18/RF5": "50",
  "U1TX/RF3": "51",
  "U1RX/RF2": "52",
  "SDO1/RF8": "53",
  "SDI1/RF7": "54",
  "SCK1/INT0/RF6": "55",
  "SDA1/RG3": "56",
  "SCL1/RG2": "57",
  "SCL2/RA2": "58",
  "SDA2/RA3": "59",
  "TDI/RA4": "60",
  "TDO/RA5": "61",
  "VDD_62": "62",
  "OSC1/CLKIN/RC12": "63",
  "OSC2/CLKO/RC15": "64",
  "VSS_65": "65",
  "INT3/RA14": "66",
  "INT4/RA15": "67",
  "IC1/RD8": "68",
  "IC2/RD9": "69",
  "IC3/RD10": "70",
  "IC4/RD11": "71",
  "OC1/RD0": "72",
  "PGED2/SOSCI/CN1/RC13": "73",
  "PGEC2/SOSCO/T1CK/CN0/RC14": "74",
  "VSS_75": "75",
  "OC2/RD1": "76",
  "OC3/RD2": "77",
  "OC4/RD3": "78",
  "IC5/RD12": "79",
  "IC6/CN19/RD13": "80",
  "OC5/CN13/RD4": "81",
  "OC6/CN14/RD5": "82",
  "OC7/CN15/RD6": "83",
  "OC8/UPDN/CN16/RD7": "84",
  "VCAP": "85",
  "VDD_86": "86",
  "C1RX/RF0": "87",
  "C1TX/RF1": "88",
  "C2TX/RG1": "89",
  "C2RX/RG0": "90",
  "AN22/CN22/RA6": "91",
  "AN23/CN23/RA7": "92",
  "PWM1L/RE0": "93",
  "PWM1H/RE1": "94",
  "RG14": "95",
  "RG12": "96",
  "RG13": "97",
  "PWM2L/RE2": "98",
  "PWM2H/RE3": "99",
  "PWM3L/RE4": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RG15: "bidirectional", VDD_2: "power_in", "PWM3H/RE5": "bidirectional", "PWM4L/RE6": "bidirectional", "PWM4H/RE7": "bidirectional", "AN16/T2CK/T7CK/RC1": "bidirectional", "AN17/T3CK/T6CK/RC2": "bidirectional", "AN18/T4CK/T9CK/RC3": "bidirectional", "AN19/T5CK/T8CK/RC4": "bidirectional", "SCK2/CN8/RG6": "bidirectional", "SDI2/CN9/RG7": "bidirectional", "SDO2/CN10/RG8": "bidirectional", "~{MCLR}": "input", "~{SS2}/CN11/RG9": "bidirectional", VSS_15: "passive", VDD_16: "power_in", "TMS/RA0": "bidirectional", "AN20/~{FLTA}/INT1/RE8": "bidirectional", "AN21/~{FLTB}/INT2/RE9": "bidirectional", "AN5/QEB/CN7/RB5": "bidirectional", "AN4/QEA/CN6/RB4": "bidirectional", "AN3/INDX/CN5/RB3": "bidirectional", "AN2/~{SS1}/CN4/RB2": "bidirectional", "PGEC3/AN1/CN3/RB1": "bidirectional", "PGED3/AN0/CN2/RB0": "bidirectional", "PGEC1/AN6/OCFA/RB6": "bidirectional", "PGED1/AN7/RB7": "bidirectional", "VREF-/RA9": "bidirectional", "VREF+/RA10": "bidirectional", AVDD: "power_in", AVSS: "power_in", "AN8/RB8": "bidirectional", "AN9/RB9": "bidirectional", "AN10/RB10": "bidirectional", "AN11/RB11": "bidirectional", VSS_36: "passive", VDD_37: "power_in", "TCK/RA1": "bidirectional", "~{U2RTS}/RF13": "bidirectional", "~{U2CTS}/RF12": "bidirectional", "AN12/RB12": "bidirectional", "AN13/RB13": "bidirectional", "AN14/RB14": "bidirectional", "AN15/OCFB/CN12/RB15": "bidirectional", VSS_45: "passive", VDD_46: "power_in", "IC7/~{U1CTS}/CN20/RD14": "bidirectional", "IC8/~{U1RTS}/CN21/RD15": "bidirectional", "U2RX/CN17/RF4": "bidirectional", "U2TX/CN18/RF5": "bidirectional", "U1TX/RF3": "bidirectional", "U1RX/RF2": "bidirectional", "SDO1/RF8": "bidirectional", "SDI1/RF7": "bidirectional", "SCK1/INT0/RF6": "bidirectional", "SDA1/RG3": "bidirectional", "SCL1/RG2": "bidirectional", "SCL2/RA2": "bidirectional", "SDA2/RA3": "bidirectional", "TDI/RA4": "bidirectional", "TDO/RA5": "bidirectional", VDD_62: "power_in", "OSC1/CLKIN/RC12": "bidirectional", "OSC2/CLKO/RC15": "bidirectional", VSS_65: "passive", "INT3/RA14": "bidirectional", "INT4/RA15": "bidirectional", "IC1/RD8": "bidirectional", "IC2/RD9": "bidirectional", "IC3/RD10": "bidirectional", "IC4/RD11": "bidirectional", "OC1/RD0": "bidirectional", "PGED2/SOSCI/CN1/RC13": "bidirectional", "PGEC2/SOSCO/T1CK/CN0/RC14": "bidirectional", VSS_75: "power_in", "OC2/RD1": "bidirectional", "OC3/RD2": "bidirectional", "OC4/RD3": "bidirectional", "IC5/RD12": "bidirectional", "IC6/CN19/RD13": "bidirectional", "OC5/CN13/RD4": "bidirectional", "OC6/CN14/RD5": "bidirectional", "OC7/CN15/RD6": "bidirectional", "OC8/UPDN/CN16/RD7": "bidirectional", VCAP: "passive", VDD_86: "power_in", "C1RX/RF0": "bidirectional", "C1TX/RF1": "bidirectional", "C2TX/RG1": "bidirectional", "C2RX/RG0": "bidirectional", "AN22/CN22/RA6": "bidirectional", "AN23/CN23/RA7": "bidirectional", "PWM1L/RE0": "bidirectional", "PWM1H/RE1": "bidirectional", RG14: "bidirectional", RG12: "bidirectional", RG13: "bidirectional", "PWM2L/RE2": "bidirectional", "PWM2H/RE3": "bidirectional", "PWM3L/RE4": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class DSPIC33FJ128MC510A extends Component.withPins({
  "RG15": "1",
  "VDD_2": "2",
  "PWM3H/RE5": "3",
  "PWM4L/RE6": "4",
  "PWM4H/RE7": "5",
  "AN16/T2CK/T7CK/RC1": "6",
  "AN17/T3CK/T6CK/RC2": "7",
  "AN18/T4CK/T9CK/RC3": "8",
  "AN19/T5CK/T8CK/RC4": "9",
  "SCK2/CN8/RG6": "10",
  "SDI2/CN9/RG7": "11",
  "SDO2/CN10/RG8": "12",
  "~{MCLR}": "13",
  "~{SS2}/CN11/RG9": "14",
  "VSS_15": "15",
  "VDD_16": "16",
  "TMS/RA0": "17",
  "AN20/~{FLTA}/INT1/RE8": "18",
  "AN21/~{FLTB}/INT2/RE9": "19",
  "AN5/QEB/CN7/RB5": "20",
  "AN4/QEA/CN6/RB4": "21",
  "AN3/INDX/CN5/RB3": "22",
  "AN2/~{SS1}/CN4/RB2": "23",
  "PGEC3/AN1/CN3/RB1": "24",
  "PGED3/AN0/CN2/RB0": "25",
  "PGEC1/AN6/OCFA/RB6": "26",
  "PGED1/AN7/RB7": "27",
  "VREF-/RA9": "28",
  "VREF+/RA10": "29",
  "AVDD": "30",
  "AVSS": "31",
  "AN8/RB8": "32",
  "AN9/RB9": "33",
  "AN10/RB10": "34",
  "AN11/RB11": "35",
  "VSS_36": "36",
  "VDD_37": "37",
  "TCK/RA1": "38",
  "~{U2RTS}/RF13": "39",
  "~{U2CTS}/RF12": "40",
  "AN12/RB12": "41",
  "AN13/RB13": "42",
  "AN14/RB14": "43",
  "AN15/OCFB/CN12/RB15": "44",
  "VSS_45": "45",
  "VDD_46": "46",
  "IC7/~{U1CTS}/CN20/RD14": "47",
  "IC8/~{U1RTS}/CN21/RD15": "48",
  "U2RX/CN17/RF4": "49",
  "U2TX/CN18/RF5": "50",
  "U1TX/RF3": "51",
  "U1RX/RF2": "52",
  "SDO1/RF8": "53",
  "SDI1/RF7": "54",
  "SCK1/INT0/RF6": "55",
  "SDA1/RG3": "56",
  "SCL1/RG2": "57",
  "SCL2/RA2": "58",
  "SDA2/RA3": "59",
  "TDI/RA4": "60",
  "TDO/RA5": "61",
  "VDD_62": "62",
  "OSC1/CLKIN/RC12": "63",
  "OSC2/CLKO/RC15": "64",
  "VSS_65": "65",
  "INT3/RA14": "66",
  "INT4/RA15": "67",
  "IC1/RD8": "68",
  "IC2/RD9": "69",
  "IC3/RD10": "70",
  "IC4/RD11": "71",
  "OC1/RD0": "72",
  "PGED2/SOSCI/CN1/RC13": "73",
  "PGEC2/SOSCO/T1CK/CN0/RC14": "74",
  "VSS_75": "75",
  "OC2/RD1": "76",
  "OC3/RD2": "77",
  "OC4/RD3": "78",
  "IC5/RD12": "79",
  "IC6/CN19/RD13": "80",
  "OC5/CN13/RD4": "81",
  "OC6/CN14/RD5": "82",
  "OC7/CN15/RD6": "83",
  "OC8/UPDN/CN16/RD7": "84",
  "VCAP": "85",
  "VDD_86": "86",
  "C1RX/RF0": "87",
  "C1TX/RF1": "88",
  "C2TX/RG1": "89",
  "C2RX/RG0": "90",
  "AN22/CN22/RA6": "91",
  "AN23/CN23/RA7": "92",
  "PWM1L/RE0": "93",
  "PWM1H/RE1": "94",
  "RG14": "95",
  "RG12": "96",
  "RG13": "97",
  "PWM2L/RE2": "98",
  "PWM2H/RE3": "99",
  "PWM3L/RE4": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RG15: "bidirectional", VDD_2: "power_in", "PWM3H/RE5": "bidirectional", "PWM4L/RE6": "bidirectional", "PWM4H/RE7": "bidirectional", "AN16/T2CK/T7CK/RC1": "bidirectional", "AN17/T3CK/T6CK/RC2": "bidirectional", "AN18/T4CK/T9CK/RC3": "bidirectional", "AN19/T5CK/T8CK/RC4": "bidirectional", "SCK2/CN8/RG6": "bidirectional", "SDI2/CN9/RG7": "bidirectional", "SDO2/CN10/RG8": "bidirectional", "~{MCLR}": "input", "~{SS2}/CN11/RG9": "bidirectional", VSS_15: "passive", VDD_16: "power_in", "TMS/RA0": "bidirectional", "AN20/~{FLTA}/INT1/RE8": "bidirectional", "AN21/~{FLTB}/INT2/RE9": "bidirectional", "AN5/QEB/CN7/RB5": "bidirectional", "AN4/QEA/CN6/RB4": "bidirectional", "AN3/INDX/CN5/RB3": "bidirectional", "AN2/~{SS1}/CN4/RB2": "bidirectional", "PGEC3/AN1/CN3/RB1": "bidirectional", "PGED3/AN0/CN2/RB0": "bidirectional", "PGEC1/AN6/OCFA/RB6": "bidirectional", "PGED1/AN7/RB7": "bidirectional", "VREF-/RA9": "bidirectional", "VREF+/RA10": "bidirectional", AVDD: "power_in", AVSS: "power_in", "AN8/RB8": "bidirectional", "AN9/RB9": "bidirectional", "AN10/RB10": "bidirectional", "AN11/RB11": "bidirectional", VSS_36: "passive", VDD_37: "power_in", "TCK/RA1": "bidirectional", "~{U2RTS}/RF13": "bidirectional", "~{U2CTS}/RF12": "bidirectional", "AN12/RB12": "bidirectional", "AN13/RB13": "bidirectional", "AN14/RB14": "bidirectional", "AN15/OCFB/CN12/RB15": "bidirectional", VSS_45: "passive", VDD_46: "power_in", "IC7/~{U1CTS}/CN20/RD14": "bidirectional", "IC8/~{U1RTS}/CN21/RD15": "bidirectional", "U2RX/CN17/RF4": "bidirectional", "U2TX/CN18/RF5": "bidirectional", "U1TX/RF3": "bidirectional", "U1RX/RF2": "bidirectional", "SDO1/RF8": "bidirectional", "SDI1/RF7": "bidirectional", "SCK1/INT0/RF6": "bidirectional", "SDA1/RG3": "bidirectional", "SCL1/RG2": "bidirectional", "SCL2/RA2": "bidirectional", "SDA2/RA3": "bidirectional", "TDI/RA4": "bidirectional", "TDO/RA5": "bidirectional", VDD_62: "power_in", "OSC1/CLKIN/RC12": "bidirectional", "OSC2/CLKO/RC15": "bidirectional", VSS_65: "passive", "INT3/RA14": "bidirectional", "INT4/RA15": "bidirectional", "IC1/RD8": "bidirectional", "IC2/RD9": "bidirectional", "IC3/RD10": "bidirectional", "IC4/RD11": "bidirectional", "OC1/RD0": "bidirectional", "PGED2/SOSCI/CN1/RC13": "bidirectional", "PGEC2/SOSCO/T1CK/CN0/RC14": "bidirectional", VSS_75: "power_in", "OC2/RD1": "bidirectional", "OC3/RD2": "bidirectional", "OC4/RD3": "bidirectional", "IC5/RD12": "bidirectional", "IC6/CN19/RD13": "bidirectional", "OC5/CN13/RD4": "bidirectional", "OC6/CN14/RD5": "bidirectional", "OC7/CN15/RD6": "bidirectional", "OC8/UPDN/CN16/RD7": "bidirectional", VCAP: "passive", VDD_86: "power_in", "C1RX/RF0": "bidirectional", "C1TX/RF1": "bidirectional", "C2TX/RG1": "bidirectional", "C2RX/RG0": "bidirectional", "AN22/CN22/RA6": "bidirectional", "AN23/CN23/RA7": "bidirectional", "PWM1L/RE0": "bidirectional", "PWM1H/RE1": "bidirectional", RG14: "bidirectional", RG12: "bidirectional", RG13: "bidirectional", "PWM2L/RE2": "bidirectional", "PWM2H/RE3": "bidirectional", "PWM3L/RE4": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class DSPIC33FJ128MC710A extends Component.withPins({
  "RG15": "1",
  "VDD_2": "2",
  "PWM3H/RE5": "3",
  "PWM4L/RE6": "4",
  "PWM4H/RE7": "5",
  "AN16/T2CK/T7CK/RC1": "6",
  "AN17/T3CK/T6CK/RC2": "7",
  "AN18/T4CK/T9CK/RC3": "8",
  "AN19/T5CK/T8CK/RC4": "9",
  "SCK2/CN8/RG6": "10",
  "SDI2/CN9/RG7": "11",
  "SDO2/CN10/RG8": "12",
  "~{MCLR}": "13",
  "~{SS2}/CN11/RG9": "14",
  "VSS_15": "15",
  "VDD_16": "16",
  "TMS/RA0": "17",
  "AN20/~{FLTA}/INT1/RE8": "18",
  "AN21/~{FLTB}/INT2/RE9": "19",
  "AN5/QEB/CN7/RB5": "20",
  "AN4/QEA/CN6/RB4": "21",
  "AN3/INDX/CN5/RB3": "22",
  "AN2/~{SS1}/CN4/RB2": "23",
  "PGEC3/AN1/CN3/RB1": "24",
  "PGED3/AN0/CN2/RB0": "25",
  "PGEC1/AN6/OCFA/RB6": "26",
  "PGED1/AN7/RB7": "27",
  "VREF-/RA9": "28",
  "VREF+/RA10": "29",
  "AVDD": "30",
  "AVSS": "31",
  "AN8/RB8": "32",
  "AN9/RB9": "33",
  "AN10/RB10": "34",
  "AN11/RB11": "35",
  "VSS_36": "36",
  "VDD_37": "37",
  "TCK/RA1": "38",
  "~{U2RTS}/RF13": "39",
  "~{U2CTS}/RF12": "40",
  "AN12/RB12": "41",
  "AN13/RB13": "42",
  "AN14/RB14": "43",
  "AN15/OCFB/CN12/RB15": "44",
  "VSS_45": "45",
  "VDD_46": "46",
  "IC7/~{U1CTS}/CN20/RD14": "47",
  "IC8/~{U1RTS}/CN21/RD15": "48",
  "U2RX/CN17/RF4": "49",
  "U2TX/CN18/RF5": "50",
  "U1TX/RF3": "51",
  "U1RX/RF2": "52",
  "SDO1/RF8": "53",
  "SDI1/RF7": "54",
  "SCK1/INT0/RF6": "55",
  "SDA1/RG3": "56",
  "SCL1/RG2": "57",
  "SCL2/RA2": "58",
  "SDA2/RA3": "59",
  "TDI/RA4": "60",
  "TDO/RA5": "61",
  "VDD_62": "62",
  "OSC1/CLKIN/RC12": "63",
  "OSC2/CLKO/RC15": "64",
  "VSS_65": "65",
  "INT3/RA14": "66",
  "INT4/RA15": "67",
  "IC1/RD8": "68",
  "IC2/RD9": "69",
  "IC3/RD10": "70",
  "IC4/RD11": "71",
  "OC1/RD0": "72",
  "PGED2/SOSCI/CN1/RC13": "73",
  "PGEC2/SOSCO/T1CK/CN0/RC14": "74",
  "VSS_75": "75",
  "OC2/RD1": "76",
  "OC3/RD2": "77",
  "OC4/RD3": "78",
  "IC5/RD12": "79",
  "IC6/CN19/RD13": "80",
  "OC5/CN13/RD4": "81",
  "OC6/CN14/RD5": "82",
  "OC7/CN15/RD6": "83",
  "OC8/UPDN/CN16/RD7": "84",
  "VCAP": "85",
  "VDD_86": "86",
  "C1RX/RF0": "87",
  "C1TX/RF1": "88",
  "C2TX/RG1": "89",
  "C2RX/RG0": "90",
  "AN22/CN22/RA6": "91",
  "AN23/CN23/RA7": "92",
  "PWM1L/RE0": "93",
  "PWM1H/RE1": "94",
  "RG14": "95",
  "RG12": "96",
  "RG13": "97",
  "PWM2L/RE2": "98",
  "PWM2H/RE3": "99",
  "PWM3L/RE4": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RG15: "bidirectional", VDD_2: "power_in", "PWM3H/RE5": "bidirectional", "PWM4L/RE6": "bidirectional", "PWM4H/RE7": "bidirectional", "AN16/T2CK/T7CK/RC1": "bidirectional", "AN17/T3CK/T6CK/RC2": "bidirectional", "AN18/T4CK/T9CK/RC3": "bidirectional", "AN19/T5CK/T8CK/RC4": "bidirectional", "SCK2/CN8/RG6": "bidirectional", "SDI2/CN9/RG7": "bidirectional", "SDO2/CN10/RG8": "bidirectional", "~{MCLR}": "input", "~{SS2}/CN11/RG9": "bidirectional", VSS_15: "passive", VDD_16: "power_in", "TMS/RA0": "bidirectional", "AN20/~{FLTA}/INT1/RE8": "bidirectional", "AN21/~{FLTB}/INT2/RE9": "bidirectional", "AN5/QEB/CN7/RB5": "bidirectional", "AN4/QEA/CN6/RB4": "bidirectional", "AN3/INDX/CN5/RB3": "bidirectional", "AN2/~{SS1}/CN4/RB2": "bidirectional", "PGEC3/AN1/CN3/RB1": "bidirectional", "PGED3/AN0/CN2/RB0": "bidirectional", "PGEC1/AN6/OCFA/RB6": "bidirectional", "PGED1/AN7/RB7": "bidirectional", "VREF-/RA9": "bidirectional", "VREF+/RA10": "bidirectional", AVDD: "power_in", AVSS: "power_in", "AN8/RB8": "bidirectional", "AN9/RB9": "bidirectional", "AN10/RB10": "bidirectional", "AN11/RB11": "bidirectional", VSS_36: "passive", VDD_37: "power_in", "TCK/RA1": "bidirectional", "~{U2RTS}/RF13": "bidirectional", "~{U2CTS}/RF12": "bidirectional", "AN12/RB12": "bidirectional", "AN13/RB13": "bidirectional", "AN14/RB14": "bidirectional", "AN15/OCFB/CN12/RB15": "bidirectional", VSS_45: "passive", VDD_46: "power_in", "IC7/~{U1CTS}/CN20/RD14": "bidirectional", "IC8/~{U1RTS}/CN21/RD15": "bidirectional", "U2RX/CN17/RF4": "bidirectional", "U2TX/CN18/RF5": "bidirectional", "U1TX/RF3": "bidirectional", "U1RX/RF2": "bidirectional", "SDO1/RF8": "bidirectional", "SDI1/RF7": "bidirectional", "SCK1/INT0/RF6": "bidirectional", "SDA1/RG3": "bidirectional", "SCL1/RG2": "bidirectional", "SCL2/RA2": "bidirectional", "SDA2/RA3": "bidirectional", "TDI/RA4": "bidirectional", "TDO/RA5": "bidirectional", VDD_62: "power_in", "OSC1/CLKIN/RC12": "bidirectional", "OSC2/CLKO/RC15": "bidirectional", VSS_65: "passive", "INT3/RA14": "bidirectional", "INT4/RA15": "bidirectional", "IC1/RD8": "bidirectional", "IC2/RD9": "bidirectional", "IC3/RD10": "bidirectional", "IC4/RD11": "bidirectional", "OC1/RD0": "bidirectional", "PGED2/SOSCI/CN1/RC13": "bidirectional", "PGEC2/SOSCO/T1CK/CN0/RC14": "bidirectional", VSS_75: "power_in", "OC2/RD1": "bidirectional", "OC3/RD2": "bidirectional", "OC4/RD3": "bidirectional", "IC5/RD12": "bidirectional", "IC6/CN19/RD13": "bidirectional", "OC5/CN13/RD4": "bidirectional", "OC6/CN14/RD5": "bidirectional", "OC7/CN15/RD6": "bidirectional", "OC8/UPDN/CN16/RD7": "bidirectional", VCAP: "passive", VDD_86: "power_in", "C1RX/RF0": "bidirectional", "C1TX/RF1": "bidirectional", "C2TX/RG1": "bidirectional", "C2RX/RG0": "bidirectional", "AN22/CN22/RA6": "bidirectional", "AN23/CN23/RA7": "bidirectional", "PWM1L/RE0": "bidirectional", "PWM1H/RE1": "bidirectional", RG14: "bidirectional", RG12: "bidirectional", RG13: "bidirectional", "PWM2L/RE2": "bidirectional", "PWM2H/RE3": "bidirectional", "PWM3L/RE4": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class DSPIC33FJ128MC804 extends Component.withPins({
  "SDA1/RP9/CN21/PMD3/RB9": "1",
  "PWM2H1/RP22/CN18/PMA1/RC6": "2",
  "PWM2L1/RP23/CN17/PMA0/RC7": "3",
  "RP24/CN20/PMA5/RC8": "4",
  "RP25/CN19/PMA6/RC9": "5",
  "VSS_6": "6",
  "VCAP": "7",
  "PGED2/PWM1H3/RP10/CN16/PMD2/RB10": "8",
  "PGEC2/PWM1L3/RP11/CN15/PMD1/RB11": "9",
  "PWM1H2/DAC1RP/RP12/CN14/PMD0/RB12": "10",
  "PWM1L2/DAC1RN/RP13/CN13/PMRD/RB13": "11",
  "TMS/PMA10/RA10": "12",
  "TCK/PMA7/RA7": "13",
  "PWM1H1/DAC1LP/RTCC/RP14/CN12/PMWR/RB14": "14",
  "PWM1L/DAC1LN/RP15/CN11/PMCS1/RB15": "15",
  "AVSS": "16",
  "AVDD": "17",
  "~{MCLR}": "18",
  "AN0/VREF+/CN2/RA0": "19",
  "AN1/VREF-/CN3/RA1": "20",
  "PGED1/AN2/C2IN-/RP0/CN4/RB0": "21",
  "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "22",
  "AN4/C1IN-/RP2/CN6/RB2": "23",
  "AN5/C1IN+/RP3/CN7/RB3": "24",
  "AN6/DAC1RM/RP16/CN8/RC0": "25",
  "AN7/DAC1LM/RP17/CN9/RC1": "26",
  "AN8/CVREF/RP18/PMA2/CN10/RC2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI/CN30/RA2": "30",
  "OSC2/CLKO/CN29/RA3": "31",
  "TDO/PMA8/RA8": "32",
  "SOSCI/RP4/CN1/RB4": "33",
  "SOSCO/T1CK/CN0/RA4": "34",
  "TDI/PMA9/RA9": "35",
  "RP19/CN28/PMBE/RC3": "36",
  "RP20/CN25/PMA4/RC4": "37",
  "RP21/CN26/PMA3/RC5": "38",
  "VSS_39": "39",
  "VDD_40": "40",
  "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "41",
  "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "42",
  "INT0/RP7/CN23/PMD5/RB7": "43",
  "SCL1/RP8/CN22/PMD4/RB8": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SDA1/RP9/CN21/PMD3/RB9": "bidirectional", "PWM2H1/RP22/CN18/PMA1/RC6": "bidirectional", "PWM2L1/RP23/CN17/PMA0/RC7": "bidirectional", "RP24/CN20/PMA5/RC8": "bidirectional", "RP25/CN19/PMA6/RC9": "bidirectional", VSS_6: "power_in", VCAP: "power_in", "PGED2/PWM1H3/RP10/CN16/PMD2/RB10": "bidirectional", "PGEC2/PWM1L3/RP11/CN15/PMD1/RB11": "bidirectional", "PWM1H2/DAC1RP/RP12/CN14/PMD0/RB12": "bidirectional", "PWM1L2/DAC1RN/RP13/CN13/PMRD/RB13": "bidirectional", "TMS/PMA10/RA10": "bidirectional", "TCK/PMA7/RA7": "bidirectional", "PWM1H1/DAC1LP/RTCC/RP14/CN12/PMWR/RB14": "bidirectional", "PWM1L/DAC1LN/RP15/CN11/PMCS1/RB15": "bidirectional", AVSS: "power_in", AVDD: "power_in", "~{MCLR}": "input", "AN0/VREF+/CN2/RA0": "bidirectional", "AN1/VREF-/CN3/RA1": "bidirectional", "PGED1/AN2/C2IN-/RP0/CN4/RB0": "bidirectional", "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "bidirectional", "AN4/C1IN-/RP2/CN6/RB2": "bidirectional", "AN5/C1IN+/RP3/CN7/RB3": "bidirectional", "AN6/DAC1RM/RP16/CN8/RC0": "bidirectional", "AN7/DAC1LM/RP17/CN9/RC1": "bidirectional", "AN8/CVREF/RP18/PMA2/CN10/RC2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI/CN30/RA2": "input", "OSC2/CLKO/CN29/RA3": "input", "TDO/PMA8/RA8": "input", "SOSCI/RP4/CN1/RB4": "input", "SOSCO/T1CK/CN0/RA4": "input", "TDI/PMA9/RA9": "input", "RP19/CN28/PMBE/RC3": "input", "RP20/CN25/PMA4/RC4": "input", "RP21/CN26/PMA3/RC5": "input", VSS_39: "power_in", VDD_40: "power_in", "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "input", "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "input", "INT0/RP7/CN23/PMD5/RB7": "input", "SCL1/RP8/CN22/PMD4/RB8": "input", ...opts.pinTypes } });
  }
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
 */
export class DSPIC33FJ256MC510A extends Component.withPins({
  "RG15": "1",
  "VDD_2": "2",
  "PWM3H/RE5": "3",
  "PWM4L/RE6": "4",
  "PWM4H/RE7": "5",
  "AN16/T2CK/T7CK/RC1": "6",
  "AN17/T3CK/T6CK/RC2": "7",
  "AN18/T4CK/T9CK/RC3": "8",
  "AN19/T5CK/T8CK/RC4": "9",
  "SCK2/CN8/RG6": "10",
  "SDI2/CN9/RG7": "11",
  "SDO2/CN10/RG8": "12",
  "~{MCLR}": "13",
  "~{SS2}/CN11/RG9": "14",
  "VSS_15": "15",
  "VDD_16": "16",
  "TMS/RA0": "17",
  "AN20/~{FLTA}/INT1/RE8": "18",
  "AN21/~{FLTB}/INT2/RE9": "19",
  "AN5/QEB/CN7/RB5": "20",
  "AN4/QEA/CN6/RB4": "21",
  "AN3/INDX/CN5/RB3": "22",
  "AN2/~{SS1}/CN4/RB2": "23",
  "PGEC3/AN1/CN3/RB1": "24",
  "PGED3/AN0/CN2/RB0": "25",
  "PGEC1/AN6/OCFA/RB6": "26",
  "PGED1/AN7/RB7": "27",
  "VREF-/RA9": "28",
  "VREF+/RA10": "29",
  "AVDD": "30",
  "AVSS": "31",
  "AN8/RB8": "32",
  "AN9/RB9": "33",
  "AN10/RB10": "34",
  "AN11/RB11": "35",
  "VSS_36": "36",
  "VDD_37": "37",
  "TCK/RA1": "38",
  "~{U2RTS}/RF13": "39",
  "~{U2CTS}/RF12": "40",
  "AN12/RB12": "41",
  "AN13/RB13": "42",
  "AN14/RB14": "43",
  "AN15/OCFB/CN12/RB15": "44",
  "VSS_45": "45",
  "VDD_46": "46",
  "IC7/~{U1CTS}/CN20/RD14": "47",
  "IC8/~{U1RTS}/CN21/RD15": "48",
  "U2RX/CN17/RF4": "49",
  "U2TX/CN18/RF5": "50",
  "U1TX/RF3": "51",
  "U1RX/RF2": "52",
  "SDO1/RF8": "53",
  "SDI1/RF7": "54",
  "SCK1/INT0/RF6": "55",
  "SDA1/RG3": "56",
  "SCL1/RG2": "57",
  "SCL2/RA2": "58",
  "SDA2/RA3": "59",
  "TDI/RA4": "60",
  "TDO/RA5": "61",
  "VDD_62": "62",
  "OSC1/CLKIN/RC12": "63",
  "OSC2/CLKO/RC15": "64",
  "VSS_65": "65",
  "INT3/RA14": "66",
  "INT4/RA15": "67",
  "IC1/RD8": "68",
  "IC2/RD9": "69",
  "IC3/RD10": "70",
  "IC4/RD11": "71",
  "OC1/RD0": "72",
  "PGED2/SOSCI/CN1/RC13": "73",
  "PGEC2/SOSCO/T1CK/CN0/RC14": "74",
  "VSS_75": "75",
  "OC2/RD1": "76",
  "OC3/RD2": "77",
  "OC4/RD3": "78",
  "IC5/RD12": "79",
  "IC6/CN19/RD13": "80",
  "OC5/CN13/RD4": "81",
  "OC6/CN14/RD5": "82",
  "OC7/CN15/RD6": "83",
  "OC8/UPDN/CN16/RD7": "84",
  "VCAP": "85",
  "VDD_86": "86",
  "C1RX/RF0": "87",
  "C1TX/RF1": "88",
  "C2TX/RG1": "89",
  "C2RX/RG0": "90",
  "AN22/CN22/RA6": "91",
  "AN23/CN23/RA7": "92",
  "PWM1L/RE0": "93",
  "PWM1H/RE1": "94",
  "RG14": "95",
  "RG12": "96",
  "RG13": "97",
  "PWM2L/RE2": "98",
  "PWM2H/RE3": "99",
  "PWM3L/RE4": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RG15: "bidirectional", VDD_2: "power_in", "PWM3H/RE5": "bidirectional", "PWM4L/RE6": "bidirectional", "PWM4H/RE7": "bidirectional", "AN16/T2CK/T7CK/RC1": "bidirectional", "AN17/T3CK/T6CK/RC2": "bidirectional", "AN18/T4CK/T9CK/RC3": "bidirectional", "AN19/T5CK/T8CK/RC4": "bidirectional", "SCK2/CN8/RG6": "bidirectional", "SDI2/CN9/RG7": "bidirectional", "SDO2/CN10/RG8": "bidirectional", "~{MCLR}": "input", "~{SS2}/CN11/RG9": "bidirectional", VSS_15: "passive", VDD_16: "power_in", "TMS/RA0": "bidirectional", "AN20/~{FLTA}/INT1/RE8": "bidirectional", "AN21/~{FLTB}/INT2/RE9": "bidirectional", "AN5/QEB/CN7/RB5": "bidirectional", "AN4/QEA/CN6/RB4": "bidirectional", "AN3/INDX/CN5/RB3": "bidirectional", "AN2/~{SS1}/CN4/RB2": "bidirectional", "PGEC3/AN1/CN3/RB1": "bidirectional", "PGED3/AN0/CN2/RB0": "bidirectional", "PGEC1/AN6/OCFA/RB6": "bidirectional", "PGED1/AN7/RB7": "bidirectional", "VREF-/RA9": "bidirectional", "VREF+/RA10": "bidirectional", AVDD: "power_in", AVSS: "power_in", "AN8/RB8": "bidirectional", "AN9/RB9": "bidirectional", "AN10/RB10": "bidirectional", "AN11/RB11": "bidirectional", VSS_36: "passive", VDD_37: "power_in", "TCK/RA1": "bidirectional", "~{U2RTS}/RF13": "bidirectional", "~{U2CTS}/RF12": "bidirectional", "AN12/RB12": "bidirectional", "AN13/RB13": "bidirectional", "AN14/RB14": "bidirectional", "AN15/OCFB/CN12/RB15": "bidirectional", VSS_45: "passive", VDD_46: "power_in", "IC7/~{U1CTS}/CN20/RD14": "bidirectional", "IC8/~{U1RTS}/CN21/RD15": "bidirectional", "U2RX/CN17/RF4": "bidirectional", "U2TX/CN18/RF5": "bidirectional", "U1TX/RF3": "bidirectional", "U1RX/RF2": "bidirectional", "SDO1/RF8": "bidirectional", "SDI1/RF7": "bidirectional", "SCK1/INT0/RF6": "bidirectional", "SDA1/RG3": "bidirectional", "SCL1/RG2": "bidirectional", "SCL2/RA2": "bidirectional", "SDA2/RA3": "bidirectional", "TDI/RA4": "bidirectional", "TDO/RA5": "bidirectional", VDD_62: "power_in", "OSC1/CLKIN/RC12": "bidirectional", "OSC2/CLKO/RC15": "bidirectional", VSS_65: "passive", "INT3/RA14": "bidirectional", "INT4/RA15": "bidirectional", "IC1/RD8": "bidirectional", "IC2/RD9": "bidirectional", "IC3/RD10": "bidirectional", "IC4/RD11": "bidirectional", "OC1/RD0": "bidirectional", "PGED2/SOSCI/CN1/RC13": "bidirectional", "PGEC2/SOSCO/T1CK/CN0/RC14": "bidirectional", VSS_75: "power_in", "OC2/RD1": "bidirectional", "OC3/RD2": "bidirectional", "OC4/RD3": "bidirectional", "IC5/RD12": "bidirectional", "IC6/CN19/RD13": "bidirectional", "OC5/CN13/RD4": "bidirectional", "OC6/CN14/RD5": "bidirectional", "OC7/CN15/RD6": "bidirectional", "OC8/UPDN/CN16/RD7": "bidirectional", VCAP: "passive", VDD_86: "power_in", "C1RX/RF0": "bidirectional", "C1TX/RF1": "bidirectional", "C2TX/RG1": "bidirectional", "C2RX/RG0": "bidirectional", "AN22/CN22/RA6": "bidirectional", "AN23/CN23/RA7": "bidirectional", "PWM1L/RE0": "bidirectional", "PWM1H/RE1": "bidirectional", RG14: "bidirectional", RG12: "bidirectional", RG13: "bidirectional", "PWM2L/RE2": "bidirectional", "PWM2H/RE3": "bidirectional", "PWM3L/RE4": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class DSPIC33FJ32GP304 extends Component.withPins({
  "SDA1/RP9/CN21/PMD3/RB9": "1",
  "RP22/CN18/PMA1/RC6": "2",
  "RP23/CN17/PMA0/RC7": "3",
  "RP24/CN20/PMA5/RC8": "4",
  "RP25/CN19/PMA6/RC9": "5",
  "VSS_6": "6",
  "VCAP": "7",
  "PGED2/EMCD2/RP10/CN16/PMD2/RB10": "8",
  "PGEC2/RP11/CN15/PMD1/RB11": "9",
  "AN12/RP12/CN14/PMD0/RB12": "10",
  "AN11/RP13/CN13/PMRD/RB13": "11",
  "TMS/PMA10/RA10": "12",
  "TCK/PMA7/RA7": "13",
  "AN10/RTCC/RP14/CN12/PMWR/RB14": "14",
  "AN9/RP15/CN11/PMCS1/RB15": "15",
  "AVSS": "16",
  "AVDD": "17",
  "~{MCLR}": "18",
  "AN0/VREF+/CN2/RA0": "19",
  "AN1/VREF-/CN3/RA1": "20",
  "PGED1/AN2/C2IN-/RP0/CN4/RB0": "21",
  "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "22",
  "AN4/C1IN-/RP2/CN6/RB2": "23",
  "AN5/C1IN+/RP3/CN7/RB3": "24",
  "AN6/RP16/CN8/RC0": "25",
  "AN7/RP17/CN9/RC1": "26",
  "AN8/CVREF/RP18/PMA2/CN10/RC2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI/CN30/RA2": "30",
  "OSC2/CLKO/CN29/RA3": "31",
  "TDO/PMA8/RA8": "32",
  "SOSCI/RP4/CN1/RB4": "33",
  "SOSCO/T1CK/CN0/RA4": "34",
  "TDI/PMA9/RA9": "35",
  "RP19/CN28/PMBE/RC3": "36",
  "RP20/CN25/PMA4/RC4": "37",
  "RP21/CN26/PMA3/RC5": "38",
  "VSS_39": "39",
  "VDD_40": "40",
  "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "41",
  "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "42",
  "INT0/RP7/CN23/PMD5/RB7": "43",
  "SCL1/RP8/CN22/PMD4/RB8": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SDA1/RP9/CN21/PMD3/RB9": "bidirectional", "RP22/CN18/PMA1/RC6": "bidirectional", "RP23/CN17/PMA0/RC7": "bidirectional", "RP24/CN20/PMA5/RC8": "bidirectional", "RP25/CN19/PMA6/RC9": "bidirectional", VSS_6: "power_in", VCAP: "power_in", "PGED2/EMCD2/RP10/CN16/PMD2/RB10": "bidirectional", "PGEC2/RP11/CN15/PMD1/RB11": "bidirectional", "AN12/RP12/CN14/PMD0/RB12": "bidirectional", "AN11/RP13/CN13/PMRD/RB13": "bidirectional", "TMS/PMA10/RA10": "bidirectional", "TCK/PMA7/RA7": "bidirectional", "AN10/RTCC/RP14/CN12/PMWR/RB14": "bidirectional", "AN9/RP15/CN11/PMCS1/RB15": "bidirectional", AVSS: "power_in", AVDD: "power_in", "~{MCLR}": "input", "AN0/VREF+/CN2/RA0": "bidirectional", "AN1/VREF-/CN3/RA1": "bidirectional", "PGED1/AN2/C2IN-/RP0/CN4/RB0": "bidirectional", "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "bidirectional", "AN4/C1IN-/RP2/CN6/RB2": "bidirectional", "AN5/C1IN+/RP3/CN7/RB3": "bidirectional", "AN6/RP16/CN8/RC0": "bidirectional", "AN7/RP17/CN9/RC1": "bidirectional", "AN8/CVREF/RP18/PMA2/CN10/RC2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI/CN30/RA2": "input", "OSC2/CLKO/CN29/RA3": "input", "TDO/PMA8/RA8": "input", "SOSCI/RP4/CN1/RB4": "input", "SOSCO/T1CK/CN0/RA4": "input", "TDI/PMA9/RA9": "input", "RP19/CN28/PMBE/RC3": "input", "RP20/CN25/PMA4/RC4": "input", "RP21/CN26/PMA3/RC5": "input", VSS_39: "power_in", VDD_40: "power_in", "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "input", "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "input", "INT0/RP7/CN23/PMD5/RB7": "input", "SCL1/RP8/CN22/PMD4/RB8": "input", ...opts.pinTypes } });
  }
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
 */
export class DSPIC33FJ32MC304 extends Component.withPins({
  "SDA1/RP9/CN21/PMD3/RB9": "1",
  "PWM2H1/RP22/CN18/PMA1/RC6": "2",
  "PWM2L1/RP23/CN17/PMA0/RC7": "3",
  "RP24/CN20/PMA5/RC8": "4",
  "RP25/CN19/PMA6/RC9": "5",
  "VSS_6": "6",
  "VCAP": "7",
  "PGED2/PWM1H3/RP10/CN16/PMD2/RB10": "8",
  "PGEC2/PWM1L3/RP11/CN15/PMD1/RB11": "9",
  "PWM1H2/RP12/CN14/PMD0/RB12": "10",
  "PWM1L2/RP13/CN13/PMRD/RB13": "11",
  "TMS/PMA10/RA10": "12",
  "TCK/PMA7/RA7": "13",
  "PWM1H1/RTCC/RP14/CN12/PMWR/RB14": "14",
  "PWM1L/RP15/CN11/PMCS1/RB15": "15",
  "AVSS": "16",
  "AVDD": "17",
  "~{MCLR}": "18",
  "AN0/VREF+/CN2/RA0": "19",
  "AN1/VREF-/CN3/RA1": "20",
  "PGED1/AN2/C2IN-/RP0/CN4/RB0": "21",
  "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "22",
  "AN4/C1IN-/RP2/CN6/RB2": "23",
  "AN5/C1IN+/RP3/CN7/RB3": "24",
  "AN6/RP16/CN8/RC0": "25",
  "AN7/RP17/CN9/RC1": "26",
  "AN8/CVREF/RP18/PMA2/CN10/RC2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI/CN30/RA2": "30",
  "OSC2/CLKO/CN29/RA3": "31",
  "TDO/PMA8/RA8": "32",
  "SOSCI/RP4/CN1/RB4": "33",
  "SOSCO/T1CK/CN0/RA4": "34",
  "TDI/PMA9/RA9": "35",
  "RP19/CN28/PMBE/RC3": "36",
  "RP20/CN25/PMA4/RC4": "37",
  "RP21/CN26/PMA3/RC5": "38",
  "VSS_39": "39",
  "VDD_40": "40",
  "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "41",
  "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "42",
  "INT0/RP7/CN23/PMD5/RB7": "43",
  "SCL1/RP8/CN22/PMD4/RB8": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SDA1/RP9/CN21/PMD3/RB9": "bidirectional", "PWM2H1/RP22/CN18/PMA1/RC6": "bidirectional", "PWM2L1/RP23/CN17/PMA0/RC7": "bidirectional", "RP24/CN20/PMA5/RC8": "bidirectional", "RP25/CN19/PMA6/RC9": "bidirectional", VSS_6: "power_in", VCAP: "power_in", "PGED2/PWM1H3/RP10/CN16/PMD2/RB10": "bidirectional", "PGEC2/PWM1L3/RP11/CN15/PMD1/RB11": "bidirectional", "PWM1H2/RP12/CN14/PMD0/RB12": "bidirectional", "PWM1L2/RP13/CN13/PMRD/RB13": "bidirectional", "TMS/PMA10/RA10": "bidirectional", "TCK/PMA7/RA7": "bidirectional", "PWM1H1/RTCC/RP14/CN12/PMWR/RB14": "bidirectional", "PWM1L/RP15/CN11/PMCS1/RB15": "bidirectional", AVSS: "power_in", AVDD: "power_in", "~{MCLR}": "input", "AN0/VREF+/CN2/RA0": "bidirectional", "AN1/VREF-/CN3/RA1": "bidirectional", "PGED1/AN2/C2IN-/RP0/CN4/RB0": "bidirectional", "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "bidirectional", "AN4/C1IN-/RP2/CN6/RB2": "bidirectional", "AN5/C1IN+/RP3/CN7/RB3": "bidirectional", "AN6/RP16/CN8/RC0": "bidirectional", "AN7/RP17/CN9/RC1": "bidirectional", "AN8/CVREF/RP18/PMA2/CN10/RC2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI/CN30/RA2": "input", "OSC2/CLKO/CN29/RA3": "input", "TDO/PMA8/RA8": "input", "SOSCI/RP4/CN1/RB4": "input", "SOSCO/T1CK/CN0/RA4": "input", "TDI/PMA9/RA9": "input", "RP19/CN28/PMBE/RC3": "input", "RP20/CN25/PMA4/RC4": "input", "RP21/CN26/PMA3/RC5": "input", VSS_39: "power_in", VDD_40: "power_in", "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "input", "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "input", "INT0/RP7/CN23/PMD5/RB7": "input", "SCL1/RP8/CN22/PMD4/RB8": "input", ...opts.pinTypes } });
  }
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
 */
export class DSPIC33FJ64GP204 extends Component.withPins({
  "SDA1/RP9/CN21/PMD3/RB9": "1",
  "RP22/CN18/PMA1/RC6": "2",
  "RP23/CN17/PMA0/RC7": "3",
  "RP24/CN20/PMA5/RC8": "4",
  "RP25/CN19/PMA6/RC9": "5",
  "VSS_6": "6",
  "VCAP": "7",
  "PGED2/EMCD2/RP10/CN16/PMD2/RB10": "8",
  "PGEC2/RP11/CN15/PMD1/RB11": "9",
  "AN12/RP12/CN14/PMD0/RB12": "10",
  "AN11/RP13/CN13/PMRD/RB13": "11",
  "TMS/PMA10/RA10": "12",
  "TCK/PMA7/RA7": "13",
  "AN10/RTCC/RP14/CN12/PMWR/RB14": "14",
  "AN9/RP15/CN11/PMCS1/RB15": "15",
  "AVSS": "16",
  "AVDD": "17",
  "~{MCLR}": "18",
  "AN0/VREF+/CN2/RA0": "19",
  "AN1/VREF-/CN3/RA1": "20",
  "PGED1/AN2/C2IN-/RP0/CN4/RB0": "21",
  "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "22",
  "AN4/C1IN-/RP2/CN6/RB2": "23",
  "AN5/C1IN+/RP3/CN7/RB3": "24",
  "AN6/RP16/CN8/RC0": "25",
  "AN7/RP17/CN9/RC1": "26",
  "AN8/CVREF/RP18/PMA2/CN10/RC2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI/CN30/RA2": "30",
  "OSC2/CLKO/CN29/RA3": "31",
  "TDO/PMA8/RA8": "32",
  "SOSCI/RP4/CN1/RB4": "33",
  "SOSCO/T1CK/CN0/RA4": "34",
  "TDI/PMA9/RA9": "35",
  "RP19/CN28/PMBE/RC3": "36",
  "RP20/CN25/PMA4/RC4": "37",
  "RP21/CN26/PMA3/RC5": "38",
  "VSS_39": "39",
  "VDD_40": "40",
  "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "41",
  "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "42",
  "INT0/RP7/CN23/PMD5/RB7": "43",
  "SCL1/RP8/CN22/PMD4/RB8": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SDA1/RP9/CN21/PMD3/RB9": "bidirectional", "RP22/CN18/PMA1/RC6": "bidirectional", "RP23/CN17/PMA0/RC7": "bidirectional", "RP24/CN20/PMA5/RC8": "bidirectional", "RP25/CN19/PMA6/RC9": "bidirectional", VSS_6: "power_in", VCAP: "power_in", "PGED2/EMCD2/RP10/CN16/PMD2/RB10": "bidirectional", "PGEC2/RP11/CN15/PMD1/RB11": "bidirectional", "AN12/RP12/CN14/PMD0/RB12": "bidirectional", "AN11/RP13/CN13/PMRD/RB13": "bidirectional", "TMS/PMA10/RA10": "bidirectional", "TCK/PMA7/RA7": "bidirectional", "AN10/RTCC/RP14/CN12/PMWR/RB14": "bidirectional", "AN9/RP15/CN11/PMCS1/RB15": "bidirectional", AVSS: "power_in", AVDD: "power_in", "~{MCLR}": "input", "AN0/VREF+/CN2/RA0": "bidirectional", "AN1/VREF-/CN3/RA1": "bidirectional", "PGED1/AN2/C2IN-/RP0/CN4/RB0": "bidirectional", "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "bidirectional", "AN4/C1IN-/RP2/CN6/RB2": "bidirectional", "AN5/C1IN+/RP3/CN7/RB3": "bidirectional", "AN6/RP16/CN8/RC0": "bidirectional", "AN7/RP17/CN9/RC1": "bidirectional", "AN8/CVREF/RP18/PMA2/CN10/RC2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI/CN30/RA2": "input", "OSC2/CLKO/CN29/RA3": "input", "TDO/PMA8/RA8": "input", "SOSCI/RP4/CN1/RB4": "input", "SOSCO/T1CK/CN0/RA4": "input", "TDI/PMA9/RA9": "input", "RP19/CN28/PMBE/RC3": "input", "RP20/CN25/PMA4/RC4": "input", "RP21/CN26/PMA3/RC5": "input", VSS_39: "power_in", VDD_40: "power_in", "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "input", "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "input", "INT0/RP7/CN23/PMD5/RB7": "input", "SCL1/RP8/CN22/PMD4/RB8": "input", ...opts.pinTypes } });
  }
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
 */
export class DSPIC33FJ64GP306A_IMR extends Component.withPins({
  "COFS/RG15": "1",
  "AN16/T2CK/T7CK/RC1": "2",
  "AN17/T3CK/T6CK/RC2": "3",
  "SCK2/CN8/RG6": "4",
  "SDI2/CN9/RG7": "5",
  "SDO2/CN10/RG8": "6",
  "~{MCLR}": "7",
  "~{SS2}/CN11/RG9": "8",
  "VSS_9": "9",
  "VDD_10": "10",
  "AN5/IC8/CN7/RB5": "11",
  "AN4/IC7/CN6/RB4": "12",
  "AN3/CN5/RB3": "13",
  "AN2/~{SS1}/CN4/RB2": "14",
  "PGEC3/AN1/Vref-/CN3/RB1": "15",
  "PGED3/AN0/Vref+/CN2/RB0": "16",
  "PGEC1/AN6/OCFA/RB6": "17",
  "PGED1/AN7/RB7": "18",
  "AVDD": "19",
  "AVSS": "20",
  "~{U2CTS}/AN8/RB8": "21",
  "AN9/RB9": "22",
  "TMS/AN10/RB10": "23",
  "TDO/AN11/RB11": "24",
  "VSS_25": "25",
  "VDD_26": "26",
  "TCK/AN12/RB12": "27",
  "TDI/AN13/RB13": "28",
  "~{U2RTS}/AN14/RB14": "29",
  "AN15/OCFB/CN12/RB15": "30",
  "U2RX/SDA2/CN17/RF4": "31",
  "U2TX/SCL2/CN18/RF5": "32",
  "U1TX/SDO1/RF3": "33",
  "U1RX/SDI1/RF2": "34",
  "~{U1RTS}/SCK1/INT0/RF6": "35",
  "SDA1/RG3": "36",
  "SCL1/RG2": "37",
  "VDD_38": "38",
  "OSC1/CLKIN/RC12": "39",
  "OSC2/CLKO/RC15": "40",
  "VSS_41": "41",
  "IC1/INT1/RD8": "42",
  "IC2/~{U1CTS}/INT2/RD9": "43",
  "IC3/INT3/RD10": "44",
  "IC4/INT4/RD11": "45",
  "OC1/RD0": "46",
  "PGED2/SOSCI/T4CK/CN1/RC13": "47",
  "PGEC2/SOSCO/T1CK/CN0/RC14": "48",
  "OC2/RD1": "49",
  "OC3/RD2": "50",
  "OC4/RD3": "51",
  "OC5/IC5/CN13/RD4": "52",
  "OC6/IC6/CN14/RD5": "53",
  "OC7/CN15/RD6": "54",
  "OC8/CN16/RD7": "55",
  "VCAP": "56",
  "VDD_57": "57",
  "RF0": "58",
  "RF1": "59",
  "RG1": "60",
  "RG0": "61",
  "CSCK/RG14": "62",
  "CSDI/RG12": "63",
  "CSDO/RG13": "64",
  "EP": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "COFS/RG15": "bidirectional", "AN16/T2CK/T7CK/RC1": "bidirectional", "AN17/T3CK/T6CK/RC2": "bidirectional", "SCK2/CN8/RG6": "bidirectional", "SDI2/CN9/RG7": "bidirectional", "SDO2/CN10/RG8": "bidirectional", "~{MCLR}": "input", "~{SS2}/CN11/RG9": "bidirectional", VSS_9: "power_in", VDD_10: "power_in", "AN5/IC8/CN7/RB5": "input", "AN4/IC7/CN6/RB4": "input", "AN3/CN5/RB3": "bidirectional", "AN2/~{SS1}/CN4/RB2": "bidirectional", "PGEC3/AN1/Vref-/CN3/RB1": "bidirectional", "PGED3/AN0/Vref+/CN2/RB0": "bidirectional", "PGEC1/AN6/OCFA/RB6": "input", "PGED1/AN7/RB7": "input", AVDD: "power_in", AVSS: "power_in", "~{U2CTS}/AN8/RB8": "input", "AN9/RB9": "bidirectional", "TMS/AN10/RB10": "bidirectional", "TDO/AN11/RB11": "bidirectional", VSS_25: "power_in", VDD_26: "power_in", "TCK/AN12/RB12": "bidirectional", "TDI/AN13/RB13": "bidirectional", "~{U2RTS}/AN14/RB14": "bidirectional", "AN15/OCFB/CN12/RB15": "bidirectional", "U2RX/SDA2/CN17/RF4": "bidirectional", "U2TX/SCL2/CN18/RF5": "bidirectional", "U1TX/SDO1/RF3": "bidirectional", "U1RX/SDI1/RF2": "bidirectional", "~{U1RTS}/SCK1/INT0/RF6": "bidirectional", "SDA1/RG3": "bidirectional", "SCL1/RG2": "bidirectional", VDD_38: "power_in", "OSC1/CLKIN/RC12": "bidirectional", "OSC2/CLKO/RC15": "bidirectional", VSS_41: "power_in", "IC1/INT1/RD8": "bidirectional", "IC2/~{U1CTS}/INT2/RD9": "bidirectional", "IC3/INT3/RD10": "bidirectional", "IC4/INT4/RD11": "bidirectional", "OC1/RD0": "bidirectional", "PGED2/SOSCI/T4CK/CN1/RC13": "bidirectional", "PGEC2/SOSCO/T1CK/CN0/RC14": "bidirectional", "OC2/RD1": "bidirectional", "OC3/RD2": "bidirectional", "OC4/RD3": "bidirectional", "OC5/IC5/CN13/RD4": "bidirectional", "OC6/IC6/CN14/RD5": "bidirectional", "OC7/CN15/RD6": "bidirectional", "OC8/CN16/RD7": "bidirectional", VCAP: "power_in", VDD_57: "power_in", RF0: "bidirectional", RF1: "bidirectional", RG1: "bidirectional", RG0: "bidirectional", "CSCK/RG14": "bidirectional", "CSDI/RG12": "bidirectional", "CSDO/RG13": "bidirectional", EP: "power_in", ...opts.pinTypes } });
  }
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
 */
export class DSPIC33FJ64GP804 extends Component.withPins({
  "SDA1/RP9/CN21/PMD3/RB9": "1",
  "RP22/CN18/PMA1/RC6": "2",
  "RP23/CN17/PMA0/RC7": "3",
  "RP24/CN20/PMA5/RC8": "4",
  "RP25/CN19/PMA6/RC9": "5",
  "VSS_6": "6",
  "VCAP": "7",
  "PGED2/EMCD2/RP10/CN16/PMD2/RB10": "8",
  "PGEC2/RP11/CN15/PMD1/RB11": "9",
  "AN12/DAC1RP/RP12/CN14/PMD0/RB12": "10",
  "AN11/DAC1RN/RP13/CN13/PMRD/RB13": "11",
  "TMS/PMA10/RA10": "12",
  "TCK/PMA7/RA7": "13",
  "AN10/DAC1LP/RTCC/RP14/CN12/PMWR/RB14": "14",
  "AN9/DAC1LN/RP15/CN11/PMCS1/RB15": "15",
  "AVSS": "16",
  "AVDD": "17",
  "~{MCLR}": "18",
  "AN0/VREF+/CN2/RA0": "19",
  "AN1/VREF-/CN3/RA1": "20",
  "PGED1/AN2/C2IN-/RP0/CN4/RB0": "21",
  "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "22",
  "AN4/C1IN-/RP2/CN6/RB2": "23",
  "AN5/C1IN+/RP3/CN7/RB3": "24",
  "AN6/DAC1RM/RP16/CN8/RC0": "25",
  "AN7/DAC1LM/RP17/CN9/RC1": "26",
  "AN8/CVREF/RP18/PMA2/CN10/RC2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI/CN30/RA2": "30",
  "OSC2/CLKO/CN29/RA3": "31",
  "TDO/PMA8/RA8": "32",
  "SOSCI/RP4/CN1/RB4": "33",
  "SOSCO/T1CK/CN0/RA4": "34",
  "TDI/PMA9/RA9": "35",
  "RP19/CN28/PMBE/RC3": "36",
  "RP20/CN25/PMA4/RC4": "37",
  "RP21/CN26/PMA3/RC5": "38",
  "VSS_39": "39",
  "VDD_40": "40",
  "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "41",
  "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "42",
  "INT0/RP7/CN23/PMD5/RB7": "43",
  "SCL1/RP8/CN22/PMD4/RB8": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SDA1/RP9/CN21/PMD3/RB9": "bidirectional", "RP22/CN18/PMA1/RC6": "bidirectional", "RP23/CN17/PMA0/RC7": "bidirectional", "RP24/CN20/PMA5/RC8": "bidirectional", "RP25/CN19/PMA6/RC9": "bidirectional", VSS_6: "power_in", VCAP: "power_in", "PGED2/EMCD2/RP10/CN16/PMD2/RB10": "bidirectional", "PGEC2/RP11/CN15/PMD1/RB11": "bidirectional", "AN12/DAC1RP/RP12/CN14/PMD0/RB12": "bidirectional", "AN11/DAC1RN/RP13/CN13/PMRD/RB13": "bidirectional", "TMS/PMA10/RA10": "bidirectional", "TCK/PMA7/RA7": "bidirectional", "AN10/DAC1LP/RTCC/RP14/CN12/PMWR/RB14": "bidirectional", "AN9/DAC1LN/RP15/CN11/PMCS1/RB15": "bidirectional", AVSS: "power_in", AVDD: "power_in", "~{MCLR}": "input", "AN0/VREF+/CN2/RA0": "bidirectional", "AN1/VREF-/CN3/RA1": "bidirectional", "PGED1/AN2/C2IN-/RP0/CN4/RB0": "bidirectional", "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "bidirectional", "AN4/C1IN-/RP2/CN6/RB2": "bidirectional", "AN5/C1IN+/RP3/CN7/RB3": "bidirectional", "AN6/DAC1RM/RP16/CN8/RC0": "bidirectional", "AN7/DAC1LM/RP17/CN9/RC1": "bidirectional", "AN8/CVREF/RP18/PMA2/CN10/RC2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI/CN30/RA2": "input", "OSC2/CLKO/CN29/RA3": "input", "TDO/PMA8/RA8": "input", "SOSCI/RP4/CN1/RB4": "input", "SOSCO/T1CK/CN0/RA4": "input", "TDI/PMA9/RA9": "input", "RP19/CN28/PMBE/RC3": "input", "RP20/CN25/PMA4/RC4": "input", "RP21/CN26/PMA3/RC5": "input", VSS_39: "power_in", VDD_40: "power_in", "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "input", "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "input", "INT0/RP7/CN23/PMD5/RB7": "input", "SCL1/RP8/CN22/PMD4/RB8": "input", ...opts.pinTypes } });
  }
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
 */
export class DSPIC33FJ64MC204 extends Component.withPins({
  "SDA1/RP9/CN21/PMD3/RB9": "1",
  "PWM2H1/RP22/CN18/PMA1/RC6": "2",
  "PWM2L1/RP23/CN17/PMA0/RC7": "3",
  "RP24/CN20/PMA5/RC8": "4",
  "RP25/CN19/PMA6/RC9": "5",
  "VSS_6": "6",
  "VCAP": "7",
  "PGED2/PWM1H3/RP10/CN16/PMD2/RB10": "8",
  "PGEC2/PWM1L3/RP11/CN15/PMD1/RB11": "9",
  "PWM1H2/RP12/CN14/PMD0/RB12": "10",
  "PWM1L2/RP13/CN13/PMRD/RB13": "11",
  "TMS/PMA10/RA10": "12",
  "TCK/PMA7/RA7": "13",
  "PWM1H1/RTCC/RP14/CN12/PMWR/RB14": "14",
  "PWM1L/RP15/CN11/PMCS1/RB15": "15",
  "AVSS": "16",
  "AVDD": "17",
  "~{MCLR}": "18",
  "AN0/VREF+/CN2/RA0": "19",
  "AN1/VREF-/CN3/RA1": "20",
  "PGED1/AN2/C2IN-/RP0/CN4/RB0": "21",
  "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "22",
  "AN4/C1IN-/RP2/CN6/RB2": "23",
  "AN5/C1IN+/RP3/CN7/RB3": "24",
  "AN6/RP16/CN8/RC0": "25",
  "AN7/RP17/CN9/RC1": "26",
  "AN8/CVREF/RP18/PMA2/CN10/RC2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI/CN30/RA2": "30",
  "OSC2/CLKO/CN29/RA3": "31",
  "TDO/PMA8/RA8": "32",
  "SOSCI/RP4/CN1/RB4": "33",
  "SOSCO/T1CK/CN0/RA4": "34",
  "TDI/PMA9/RA9": "35",
  "RP19/CN28/PMBE/RC3": "36",
  "RP20/CN25/PMA4/RC4": "37",
  "RP21/CN26/PMA3/RC5": "38",
  "VSS_39": "39",
  "VDD_40": "40",
  "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "41",
  "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "42",
  "INT0/RP7/CN23/PMD5/RB7": "43",
  "SCL1/RP8/CN22/PMD4/RB8": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SDA1/RP9/CN21/PMD3/RB9": "bidirectional", "PWM2H1/RP22/CN18/PMA1/RC6": "bidirectional", "PWM2L1/RP23/CN17/PMA0/RC7": "bidirectional", "RP24/CN20/PMA5/RC8": "bidirectional", "RP25/CN19/PMA6/RC9": "bidirectional", VSS_6: "power_in", VCAP: "power_in", "PGED2/PWM1H3/RP10/CN16/PMD2/RB10": "bidirectional", "PGEC2/PWM1L3/RP11/CN15/PMD1/RB11": "bidirectional", "PWM1H2/RP12/CN14/PMD0/RB12": "bidirectional", "PWM1L2/RP13/CN13/PMRD/RB13": "bidirectional", "TMS/PMA10/RA10": "bidirectional", "TCK/PMA7/RA7": "bidirectional", "PWM1H1/RTCC/RP14/CN12/PMWR/RB14": "bidirectional", "PWM1L/RP15/CN11/PMCS1/RB15": "bidirectional", AVSS: "power_in", AVDD: "power_in", "~{MCLR}": "input", "AN0/VREF+/CN2/RA0": "bidirectional", "AN1/VREF-/CN3/RA1": "bidirectional", "PGED1/AN2/C2IN-/RP0/CN4/RB0": "bidirectional", "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "bidirectional", "AN4/C1IN-/RP2/CN6/RB2": "bidirectional", "AN5/C1IN+/RP3/CN7/RB3": "bidirectional", "AN6/RP16/CN8/RC0": "bidirectional", "AN7/RP17/CN9/RC1": "bidirectional", "AN8/CVREF/RP18/PMA2/CN10/RC2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI/CN30/RA2": "input", "OSC2/CLKO/CN29/RA3": "input", "TDO/PMA8/RA8": "input", "SOSCI/RP4/CN1/RB4": "input", "SOSCO/T1CK/CN0/RA4": "input", "TDI/PMA9/RA9": "input", "RP19/CN28/PMBE/RC3": "input", "RP20/CN25/PMA4/RC4": "input", "RP21/CN26/PMA3/RC5": "input", VSS_39: "power_in", VDD_40: "power_in", "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "input", "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "input", "INT0/RP7/CN23/PMD5/RB7": "input", "SCL1/RP8/CN22/PMD4/RB8": "input", ...opts.pinTypes } });
  }
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
 */
export class DSPIC33FJ64MC510A extends Component.withPins({
  "RG15": "1",
  "VDD_2": "2",
  "PWM3H/RE5": "3",
  "PWM4L/RE6": "4",
  "PWM4H/RE7": "5",
  "AN16/T2CK/T7CK/RC1": "6",
  "AN17/T3CK/T6CK/RC2": "7",
  "AN18/T4CK/T9CK/RC3": "8",
  "AN19/T5CK/T8CK/RC4": "9",
  "SCK2/CN8/RG6": "10",
  "SDI2/CN9/RG7": "11",
  "SDO2/CN10/RG8": "12",
  "~{MCLR}": "13",
  "~{SS2}/CN11/RG9": "14",
  "VSS_15": "15",
  "VDD_16": "16",
  "TMS/RA0": "17",
  "AN20/~{FLTA}/INT1/RE8": "18",
  "AN21/~{FLTB}/INT2/RE9": "19",
  "AN5/QEB/CN7/RB5": "20",
  "AN4/QEA/CN6/RB4": "21",
  "AN3/INDX/CN5/RB3": "22",
  "AN2/~{SS1}/CN4/RB2": "23",
  "PGEC3/AN1/CN3/RB1": "24",
  "PGED3/AN0/CN2/RB0": "25",
  "PGEC1/AN6/OCFA/RB6": "26",
  "PGED1/AN7/RB7": "27",
  "VREF-/RA9": "28",
  "VREF+/RA10": "29",
  "AVDD": "30",
  "AVSS": "31",
  "AN8/RB8": "32",
  "AN9/RB9": "33",
  "AN10/RB10": "34",
  "AN11/RB11": "35",
  "VSS_36": "36",
  "VDD_37": "37",
  "TCK/RA1": "38",
  "~{U2RTS}/RF13": "39",
  "~{U2CTS}/RF12": "40",
  "AN12/RB12": "41",
  "AN13/RB13": "42",
  "AN14/RB14": "43",
  "AN15/OCFB/CN12/RB15": "44",
  "VSS_45": "45",
  "VDD_46": "46",
  "IC7/~{U1CTS}/CN20/RD14": "47",
  "IC8/~{U1RTS}/CN21/RD15": "48",
  "U2RX/CN17/RF4": "49",
  "U2TX/CN18/RF5": "50",
  "U1TX/RF3": "51",
  "U1RX/RF2": "52",
  "SDO1/RF8": "53",
  "SDI1/RF7": "54",
  "SCK1/INT0/RF6": "55",
  "SDA1/RG3": "56",
  "SCL1/RG2": "57",
  "SCL2/RA2": "58",
  "SDA2/RA3": "59",
  "TDI/RA4": "60",
  "TDO/RA5": "61",
  "VDD_62": "62",
  "OSC1/CLKIN/RC12": "63",
  "OSC2/CLKO/RC15": "64",
  "VSS_65": "65",
  "INT3/RA14": "66",
  "INT4/RA15": "67",
  "IC1/RD8": "68",
  "IC2/RD9": "69",
  "IC3/RD10": "70",
  "IC4/RD11": "71",
  "OC1/RD0": "72",
  "PGED2/SOSCI/CN1/RC13": "73",
  "PGEC2/SOSCO/T1CK/CN0/RC14": "74",
  "VSS_75": "75",
  "OC2/RD1": "76",
  "OC3/RD2": "77",
  "OC4/RD3": "78",
  "IC5/RD12": "79",
  "IC6/CN19/RD13": "80",
  "OC5/CN13/RD4": "81",
  "OC6/CN14/RD5": "82",
  "OC7/CN15/RD6": "83",
  "OC8/UPDN/CN16/RD7": "84",
  "VCAP": "85",
  "VDD_86": "86",
  "C1RX/RF0": "87",
  "C1TX/RF1": "88",
  "C2TX/RG1": "89",
  "C2RX/RG0": "90",
  "AN22/CN22/RA6": "91",
  "AN23/CN23/RA7": "92",
  "PWM1L/RE0": "93",
  "PWM1H/RE1": "94",
  "RG14": "95",
  "RG12": "96",
  "RG13": "97",
  "PWM2L/RE2": "98",
  "PWM2H/RE3": "99",
  "PWM3L/RE4": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RG15: "bidirectional", VDD_2: "power_in", "PWM3H/RE5": "bidirectional", "PWM4L/RE6": "bidirectional", "PWM4H/RE7": "bidirectional", "AN16/T2CK/T7CK/RC1": "bidirectional", "AN17/T3CK/T6CK/RC2": "bidirectional", "AN18/T4CK/T9CK/RC3": "bidirectional", "AN19/T5CK/T8CK/RC4": "bidirectional", "SCK2/CN8/RG6": "bidirectional", "SDI2/CN9/RG7": "bidirectional", "SDO2/CN10/RG8": "bidirectional", "~{MCLR}": "input", "~{SS2}/CN11/RG9": "bidirectional", VSS_15: "passive", VDD_16: "power_in", "TMS/RA0": "bidirectional", "AN20/~{FLTA}/INT1/RE8": "bidirectional", "AN21/~{FLTB}/INT2/RE9": "bidirectional", "AN5/QEB/CN7/RB5": "bidirectional", "AN4/QEA/CN6/RB4": "bidirectional", "AN3/INDX/CN5/RB3": "bidirectional", "AN2/~{SS1}/CN4/RB2": "bidirectional", "PGEC3/AN1/CN3/RB1": "bidirectional", "PGED3/AN0/CN2/RB0": "bidirectional", "PGEC1/AN6/OCFA/RB6": "bidirectional", "PGED1/AN7/RB7": "bidirectional", "VREF-/RA9": "bidirectional", "VREF+/RA10": "bidirectional", AVDD: "power_in", AVSS: "power_in", "AN8/RB8": "bidirectional", "AN9/RB9": "bidirectional", "AN10/RB10": "bidirectional", "AN11/RB11": "bidirectional", VSS_36: "passive", VDD_37: "power_in", "TCK/RA1": "bidirectional", "~{U2RTS}/RF13": "bidirectional", "~{U2CTS}/RF12": "bidirectional", "AN12/RB12": "bidirectional", "AN13/RB13": "bidirectional", "AN14/RB14": "bidirectional", "AN15/OCFB/CN12/RB15": "bidirectional", VSS_45: "passive", VDD_46: "power_in", "IC7/~{U1CTS}/CN20/RD14": "bidirectional", "IC8/~{U1RTS}/CN21/RD15": "bidirectional", "U2RX/CN17/RF4": "bidirectional", "U2TX/CN18/RF5": "bidirectional", "U1TX/RF3": "bidirectional", "U1RX/RF2": "bidirectional", "SDO1/RF8": "bidirectional", "SDI1/RF7": "bidirectional", "SCK1/INT0/RF6": "bidirectional", "SDA1/RG3": "bidirectional", "SCL1/RG2": "bidirectional", "SCL2/RA2": "bidirectional", "SDA2/RA3": "bidirectional", "TDI/RA4": "bidirectional", "TDO/RA5": "bidirectional", VDD_62: "power_in", "OSC1/CLKIN/RC12": "bidirectional", "OSC2/CLKO/RC15": "bidirectional", VSS_65: "passive", "INT3/RA14": "bidirectional", "INT4/RA15": "bidirectional", "IC1/RD8": "bidirectional", "IC2/RD9": "bidirectional", "IC3/RD10": "bidirectional", "IC4/RD11": "bidirectional", "OC1/RD0": "bidirectional", "PGED2/SOSCI/CN1/RC13": "bidirectional", "PGEC2/SOSCO/T1CK/CN0/RC14": "bidirectional", VSS_75: "power_in", "OC2/RD1": "bidirectional", "OC3/RD2": "bidirectional", "OC4/RD3": "bidirectional", "IC5/RD12": "bidirectional", "IC6/CN19/RD13": "bidirectional", "OC5/CN13/RD4": "bidirectional", "OC6/CN14/RD5": "bidirectional", "OC7/CN15/RD6": "bidirectional", "OC8/UPDN/CN16/RD7": "bidirectional", VCAP: "passive", VDD_86: "power_in", "C1RX/RF0": "bidirectional", "C1TX/RF1": "bidirectional", "C2TX/RG1": "bidirectional", "C2RX/RG0": "bidirectional", "AN22/CN22/RA6": "bidirectional", "AN23/CN23/RA7": "bidirectional", "PWM1L/RE0": "bidirectional", "PWM1H/RE1": "bidirectional", RG14: "bidirectional", RG12: "bidirectional", RG13: "bidirectional", "PWM2L/RE2": "bidirectional", "PWM2H/RE3": "bidirectional", "PWM3L/RE4": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class DSPIC33FJ64MC710A extends Component.withPins({
  "RG15": "1",
  "VDD_2": "2",
  "PWM3H/RE5": "3",
  "PWM4L/RE6": "4",
  "PWM4H/RE7": "5",
  "AN16/T2CK/T7CK/RC1": "6",
  "AN17/T3CK/T6CK/RC2": "7",
  "AN18/T4CK/T9CK/RC3": "8",
  "AN19/T5CK/T8CK/RC4": "9",
  "SCK2/CN8/RG6": "10",
  "SDI2/CN9/RG7": "11",
  "SDO2/CN10/RG8": "12",
  "~{MCLR}": "13",
  "~{SS2}/CN11/RG9": "14",
  "VSS_15": "15",
  "VDD_16": "16",
  "TMS/RA0": "17",
  "AN20/~{FLTA}/INT1/RE8": "18",
  "AN21/~{FLTB}/INT2/RE9": "19",
  "AN5/QEB/CN7/RB5": "20",
  "AN4/QEA/CN6/RB4": "21",
  "AN3/INDX/CN5/RB3": "22",
  "AN2/~{SS1}/CN4/RB2": "23",
  "PGEC3/AN1/CN3/RB1": "24",
  "PGED3/AN0/CN2/RB0": "25",
  "PGEC1/AN6/OCFA/RB6": "26",
  "PGED1/AN7/RB7": "27",
  "VREF-/RA9": "28",
  "VREF+/RA10": "29",
  "AVDD": "30",
  "AVSS": "31",
  "AN8/RB8": "32",
  "AN9/RB9": "33",
  "AN10/RB10": "34",
  "AN11/RB11": "35",
  "VSS_36": "36",
  "VDD_37": "37",
  "TCK/RA1": "38",
  "~{U2RTS}/RF13": "39",
  "~{U2CTS}/RF12": "40",
  "AN12/RB12": "41",
  "AN13/RB13": "42",
  "AN14/RB14": "43",
  "AN15/OCFB/CN12/RB15": "44",
  "VSS_45": "45",
  "VDD_46": "46",
  "IC7/~{U1CTS}/CN20/RD14": "47",
  "IC8/~{U1RTS}/CN21/RD15": "48",
  "U2RX/CN17/RF4": "49",
  "U2TX/CN18/RF5": "50",
  "U1TX/RF3": "51",
  "U1RX/RF2": "52",
  "SDO1/RF8": "53",
  "SDI1/RF7": "54",
  "SCK1/INT0/RF6": "55",
  "SDA1/RG3": "56",
  "SCL1/RG2": "57",
  "SCL2/RA2": "58",
  "SDA2/RA3": "59",
  "TDI/RA4": "60",
  "TDO/RA5": "61",
  "VDD_62": "62",
  "OSC1/CLKIN/RC12": "63",
  "OSC2/CLKO/RC15": "64",
  "VSS_65": "65",
  "INT3/RA14": "66",
  "INT4/RA15": "67",
  "IC1/RD8": "68",
  "IC2/RD9": "69",
  "IC3/RD10": "70",
  "IC4/RD11": "71",
  "OC1/RD0": "72",
  "PGED2/SOSCI/CN1/RC13": "73",
  "PGEC2/SOSCO/T1CK/CN0/RC14": "74",
  "VSS_75": "75",
  "OC2/RD1": "76",
  "OC3/RD2": "77",
  "OC4/RD3": "78",
  "IC5/RD12": "79",
  "IC6/CN19/RD13": "80",
  "OC5/CN13/RD4": "81",
  "OC6/CN14/RD5": "82",
  "OC7/CN15/RD6": "83",
  "OC8/UPDN/CN16/RD7": "84",
  "VCAP": "85",
  "VDD_86": "86",
  "C1RX/RF0": "87",
  "C1TX/RF1": "88",
  "C2TX/RG1": "89",
  "C2RX/RG0": "90",
  "AN22/CN22/RA6": "91",
  "AN23/CN23/RA7": "92",
  "PWM1L/RE0": "93",
  "PWM1H/RE1": "94",
  "RG14": "95",
  "RG12": "96",
  "RG13": "97",
  "PWM2L/RE2": "98",
  "PWM2H/RE3": "99",
  "PWM3L/RE4": "100",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RG15: "bidirectional", VDD_2: "power_in", "PWM3H/RE5": "bidirectional", "PWM4L/RE6": "bidirectional", "PWM4H/RE7": "bidirectional", "AN16/T2CK/T7CK/RC1": "bidirectional", "AN17/T3CK/T6CK/RC2": "bidirectional", "AN18/T4CK/T9CK/RC3": "bidirectional", "AN19/T5CK/T8CK/RC4": "bidirectional", "SCK2/CN8/RG6": "bidirectional", "SDI2/CN9/RG7": "bidirectional", "SDO2/CN10/RG8": "bidirectional", "~{MCLR}": "input", "~{SS2}/CN11/RG9": "bidirectional", VSS_15: "passive", VDD_16: "power_in", "TMS/RA0": "bidirectional", "AN20/~{FLTA}/INT1/RE8": "bidirectional", "AN21/~{FLTB}/INT2/RE9": "bidirectional", "AN5/QEB/CN7/RB5": "bidirectional", "AN4/QEA/CN6/RB4": "bidirectional", "AN3/INDX/CN5/RB3": "bidirectional", "AN2/~{SS1}/CN4/RB2": "bidirectional", "PGEC3/AN1/CN3/RB1": "bidirectional", "PGED3/AN0/CN2/RB0": "bidirectional", "PGEC1/AN6/OCFA/RB6": "bidirectional", "PGED1/AN7/RB7": "bidirectional", "VREF-/RA9": "bidirectional", "VREF+/RA10": "bidirectional", AVDD: "power_in", AVSS: "power_in", "AN8/RB8": "bidirectional", "AN9/RB9": "bidirectional", "AN10/RB10": "bidirectional", "AN11/RB11": "bidirectional", VSS_36: "passive", VDD_37: "power_in", "TCK/RA1": "bidirectional", "~{U2RTS}/RF13": "bidirectional", "~{U2CTS}/RF12": "bidirectional", "AN12/RB12": "bidirectional", "AN13/RB13": "bidirectional", "AN14/RB14": "bidirectional", "AN15/OCFB/CN12/RB15": "bidirectional", VSS_45: "passive", VDD_46: "power_in", "IC7/~{U1CTS}/CN20/RD14": "bidirectional", "IC8/~{U1RTS}/CN21/RD15": "bidirectional", "U2RX/CN17/RF4": "bidirectional", "U2TX/CN18/RF5": "bidirectional", "U1TX/RF3": "bidirectional", "U1RX/RF2": "bidirectional", "SDO1/RF8": "bidirectional", "SDI1/RF7": "bidirectional", "SCK1/INT0/RF6": "bidirectional", "SDA1/RG3": "bidirectional", "SCL1/RG2": "bidirectional", "SCL2/RA2": "bidirectional", "SDA2/RA3": "bidirectional", "TDI/RA4": "bidirectional", "TDO/RA5": "bidirectional", VDD_62: "power_in", "OSC1/CLKIN/RC12": "bidirectional", "OSC2/CLKO/RC15": "bidirectional", VSS_65: "passive", "INT3/RA14": "bidirectional", "INT4/RA15": "bidirectional", "IC1/RD8": "bidirectional", "IC2/RD9": "bidirectional", "IC3/RD10": "bidirectional", "IC4/RD11": "bidirectional", "OC1/RD0": "bidirectional", "PGED2/SOSCI/CN1/RC13": "bidirectional", "PGEC2/SOSCO/T1CK/CN0/RC14": "bidirectional", VSS_75: "power_in", "OC2/RD1": "bidirectional", "OC3/RD2": "bidirectional", "OC4/RD3": "bidirectional", "IC5/RD12": "bidirectional", "IC6/CN19/RD13": "bidirectional", "OC5/CN13/RD4": "bidirectional", "OC6/CN14/RD5": "bidirectional", "OC7/CN15/RD6": "bidirectional", "OC8/UPDN/CN16/RD7": "bidirectional", VCAP: "passive", VDD_86: "power_in", "C1RX/RF0": "bidirectional", "C1TX/RF1": "bidirectional", "C2TX/RG1": "bidirectional", "C2RX/RG0": "bidirectional", "AN22/CN22/RA6": "bidirectional", "AN23/CN23/RA7": "bidirectional", "PWM1L/RE0": "bidirectional", "PWM1H/RE1": "bidirectional", RG14: "bidirectional", RG12: "bidirectional", RG13: "bidirectional", "PWM2L/RE2": "bidirectional", "PWM2H/RE3": "bidirectional", "PWM3L/RE4": "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class DSPIC33FJ64MC802_xSP extends Component.withPins({
  "~{MCLR}": "1",
  "AN0/VREF+/CN2/RA0": "2",
  "AN1/VREF-/CN3/RA1": "3",
  "PGED1/AN2/C2IN-/RP0/CN4/RB0": "4",
  "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "5",
  "AN4/C1IN-/RP2/CN6/RB2": "6",
  "AN5/C1IN+/RP3/CN7/RB3": "7",
  "VSS_8": "8",
  "OSC1/CLKI/CN30/RA2": "9",
  "OSC2/CLKO/CN29/PMA0/RA3": "10",
  "SOSCI/RP4/CN1/PMBE/RB4": "11",
  "SOSCO/T1CK/CN0/PMA1/RA4": "12",
  "VDD": "13",
  "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "14",
  "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "15",
  "INT0/RP7/CN23/PMD5/RB7": "16",
  "TCK/PWM2H1/SCL1/RP8/CN22/PMD4/RB8": "17",
  "TDO/PWM2L1/SDA1/RP9/CN21/PMD3/RB9": "18",
  "VSS_19": "19",
  "VCAP": "20",
  "PGED2/TDI/PWM1H3/RP10/CN16/PMD2/RB10": "21",
  "PGEC2/TMS/PWM1L3/RP11/CN15/PMD1/RB11": "22",
  "PWM1H2/RP12/CN14/PMD0/RB12": "23",
  "PWM1L2/RP13/CN13/PMRD/RB13": "24",
  "PWM1H1/RTCC/RP14/CN12/PMWR/RB14": "25",
  "PWM1L1/RP15/CN11/PMCS1/RB15": "26",
  "AVSS": "27",
  "AVDD": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{MCLR}": "input", "AN0/VREF+/CN2/RA0": "bidirectional", "AN1/VREF-/CN3/RA1": "bidirectional", "PGED1/AN2/C2IN-/RP0/CN4/RB0": "bidirectional", "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "bidirectional", "AN4/C1IN-/RP2/CN6/RB2": "bidirectional", "AN5/C1IN+/RP3/CN7/RB3": "bidirectional", VSS_8: "power_in", "OSC1/CLKI/CN30/RA2": "bidirectional", "OSC2/CLKO/CN29/PMA0/RA3": "bidirectional", "SOSCI/RP4/CN1/PMBE/RB4": "bidirectional", "SOSCO/T1CK/CN0/PMA1/RA4": "bidirectional", VDD: "power_in", "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "bidirectional", "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "bidirectional", "INT0/RP7/CN23/PMD5/RB7": "bidirectional", "TCK/PWM2H1/SCL1/RP8/CN22/PMD4/RB8": "bidirectional", "TDO/PWM2L1/SDA1/RP9/CN21/PMD3/RB9": "bidirectional", VSS_19: "passive", VCAP: "passive", "PGED2/TDI/PWM1H3/RP10/CN16/PMD2/RB10": "bidirectional", "PGEC2/TMS/PWM1L3/RP11/CN15/PMD1/RB11": "bidirectional", "PWM1H2/RP12/CN14/PMD0/RB12": "bidirectional", "PWM1L2/RP13/CN13/PMRD/RB13": "bidirectional", "PWM1H1/RTCC/RP14/CN12/PMWR/RB14": "bidirectional", "PWM1L1/RP15/CN11/PMCS1/RB15": "bidirectional", AVSS: "power_in", AVDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class DSPIC33FJ64MC804 extends Component.withPins({
  "SDA1/RP9/CN21/PMD3/RB9": "1",
  "PWM2H1/RP22/CN18/PMA1/RC6": "2",
  "PWM2L1/RP23/CN17/PMA0/RC7": "3",
  "RP24/CN20/PMA5/RC8": "4",
  "RP25/CN19/PMA6/RC9": "5",
  "VSS_6": "6",
  "VCAP": "7",
  "PGED2/PWM1H3/RP10/CN16/PMD2/RB10": "8",
  "PGEC2/PWM1L3/RP11/CN15/PMD1/RB11": "9",
  "PWM1H2/DAC1RP/RP12/CN14/PMD0/RB12": "10",
  "PWM1L2/DAC1RN/RP13/CN13/PMRD/RB13": "11",
  "TMS/PMA10/RA10": "12",
  "TCK/PMA7/RA7": "13",
  "PWM1H1/DAC1LP/RTCC/RP14/CN12/PMWR/RB14": "14",
  "PWM1L/DAC1LN/RP15/CN11/PMCS1/RB15": "15",
  "AVSS": "16",
  "AVDD": "17",
  "~{MCLR}": "18",
  "AN0/VREF+/CN2/RA0": "19",
  "AN1/VREF-/CN3/RA1": "20",
  "PGED1/AN2/C2IN-/RP0/CN4/RB0": "21",
  "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "22",
  "AN4/C1IN-/RP2/CN6/RB2": "23",
  "AN5/C1IN+/RP3/CN7/RB3": "24",
  "AN6/DAC1RM/RP16/CN8/RC0": "25",
  "AN7/DAC1LM/RP17/CN9/RC1": "26",
  "AN8/CVREF/RP18/PMA2/CN10/RC2": "27",
  "VDD_28": "28",
  "VSS_29": "29",
  "OSC1/CLKI/CN30/RA2": "30",
  "OSC2/CLKO/CN29/RA3": "31",
  "TDO/PMA8/RA8": "32",
  "SOSCI/RP4/CN1/RB4": "33",
  "SOSCO/T1CK/CN0/RA4": "34",
  "TDI/PMA9/RA9": "35",
  "RP19/CN28/PMBE/RC3": "36",
  "RP20/CN25/PMA4/RC4": "37",
  "RP21/CN26/PMA3/RC5": "38",
  "VSS_39": "39",
  "VDD_40": "40",
  "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "41",
  "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "42",
  "INT0/RP7/CN23/PMD5/RB7": "43",
  "SCL1/RP8/CN22/PMD4/RB8": "44",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "SDA1/RP9/CN21/PMD3/RB9": "bidirectional", "PWM2H1/RP22/CN18/PMA1/RC6": "bidirectional", "PWM2L1/RP23/CN17/PMA0/RC7": "bidirectional", "RP24/CN20/PMA5/RC8": "bidirectional", "RP25/CN19/PMA6/RC9": "bidirectional", VSS_6: "power_in", VCAP: "power_in", "PGED2/PWM1H3/RP10/CN16/PMD2/RB10": "bidirectional", "PGEC2/PWM1L3/RP11/CN15/PMD1/RB11": "bidirectional", "PWM1H2/DAC1RP/RP12/CN14/PMD0/RB12": "bidirectional", "PWM1L2/DAC1RN/RP13/CN13/PMRD/RB13": "bidirectional", "TMS/PMA10/RA10": "bidirectional", "TCK/PMA7/RA7": "bidirectional", "PWM1H1/DAC1LP/RTCC/RP14/CN12/PMWR/RB14": "bidirectional", "PWM1L/DAC1LN/RP15/CN11/PMCS1/RB15": "bidirectional", AVSS: "power_in", AVDD: "power_in", "~{MCLR}": "input", "AN0/VREF+/CN2/RA0": "bidirectional", "AN1/VREF-/CN3/RA1": "bidirectional", "PGED1/AN2/C2IN-/RP0/CN4/RB0": "bidirectional", "PGEC1/AN3/C2IN+/RP1/CN5/RB1": "bidirectional", "AN4/C1IN-/RP2/CN6/RB2": "bidirectional", "AN5/C1IN+/RP3/CN7/RB3": "bidirectional", "AN6/DAC1RM/RP16/CN8/RC0": "bidirectional", "AN7/DAC1LM/RP17/CN9/RC1": "bidirectional", "AN8/CVREF/RP18/PMA2/CN10/RC2": "bidirectional", VDD_28: "power_in", VSS_29: "power_in", "OSC1/CLKI/CN30/RA2": "input", "OSC2/CLKO/CN29/RA3": "input", "TDO/PMA8/RA8": "input", "SOSCI/RP4/CN1/RB4": "input", "SOSCO/T1CK/CN0/RA4": "input", "TDI/PMA9/RA9": "input", "RP19/CN28/PMBE/RC3": "input", "RP20/CN25/PMA4/RC4": "input", "RP21/CN26/PMA3/RC5": "input", VSS_39: "power_in", VDD_40: "power_in", "PGED3/ASDA1/RP5/CN27/PMD7/RB5": "input", "PGEC3/ASCL1/RP6/CN24/PMD6/RB6": "input", "INT0/RP7/CN23/PMD5/RB7": "input", "SCL1/RP8/CN22/PMD4/RB8": "input", ...opts.pinTypes } });
  }
  override schema = "DSP_Microchip_DSPIC33:DSPIC33FJ64MC804";
  override referencePrefix = "U";
}
