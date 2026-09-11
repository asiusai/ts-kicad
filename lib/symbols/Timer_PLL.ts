// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 400MHz Bandwidth Frequency Synthesizer, LFCSP-20
 *
 * KiCad symbol: `Timer_PLL:ADF4002BCPZ`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*4x4mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADF4002.pdf
 * Keywords: Analog Devices PFD.
 * Default footprint: Package_CSP:LFCSP-20-1EP_4x4mm_P0.5mm_EP2.1x2.1mm.
 */
export class ADF4002BCPZ extends Component.withPins({
  "CPGND": "1",
  "AGND_2": "2",
  "AGND_3": "3",
  "RFINB": "4",
  "RFINA": "5",
  "AVDD_6": "6",
  "AVDD_7": "7",
  "REFIN": "8",
  "DGND_9": "9",
  "DGND_10": "10",
  "CE": "11",
  "CLK": "12",
  "DATA": "13",
  "LE": "14",
  "MUXOUT": "15",
  "DVDD_16": "16",
  "DVDD_17": "17",
  "VP": "18",
  "RSET": "19",
  "CP": "20",
  "AGND_21": "21",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CPGND: "power_in", AGND_2: "power_in", AGND_3: "passive", RFINB: "input", RFINA: "input", AVDD_6: "passive", AVDD_7: "power_in", REFIN: "input", DGND_9: "power_in", DGND_10: "passive", CE: "input", CLK: "input", DATA: "input", LE: "input", MUXOUT: "output", DVDD_16: "power_in", DVDD_17: "passive", VP: "power_in", RSET: "input", CP: "output", AGND_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Timer_PLL:ADF4002BCPZ";
  override referencePrefix = "U";
}

/**
 * 400MHz Bandwidth Frequency Synthesizer, TSSOP-16
 *
 * KiCad symbol: `Timer_PLL:ADF4002BRUZ`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADF4002.pdf
 * Keywords: Analog Devices PFD.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 */
export class ADF4002BRUZ extends Component.withPins({
  "RSET": "1",
  "CP": "2",
  "CPGND": "3",
  "AGND": "4",
  "RFINB": "5",
  "RFINA": "6",
  "AVDD": "7",
  "REFIN": "8",
  "DGND": "9",
  "CE": "10",
  "CLK": "11",
  "DATA": "12",
  "LE": "13",
  "MUXOUT": "14",
  "DVDD": "15",
  "VP": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RSET: "input", CP: "output", CPGND: "power_in", AGND: "power_in", RFINB: "input", RFINA: "input", AVDD: "power_in", REFIN: "input", DGND: "power_in", CE: "input", CLK: "input", DATA: "input", LE: "input", MUXOUT: "output", DVDD: "power_in", VP: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_PLL:ADF4002BRUZ";
  override referencePrefix = "U";
}

/**
 * 0.5-6.1GHz fractional-N PLL, LFCSP-24
 *
 * KiCad symbol: `Timer_PLL:ADF4158`. Reference prefix: `U`.
 * Footprint filters: LFCSP*1EP*4x4mm*P0.5mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADF4158.pdf
 * Keywords: fractional-N PLL.
 * Default footprint: Package_CSP:LFCSP-24-1EP_4x4mm_P0.5mm_EP2.5x2.5mm.
 */
export class ADF4158 extends Component.withPins({
  "CPGND": "1",
  "AGND_2": "2",
  "AGND_3": "3",
  "RFINB": "4",
  "RFINA": "5",
  "AVDD_6": "6",
  "AVDD_7": "7",
  "AVDD_8": "8",
  "REFIN": "9",
  "DGND": "10",
  "SDGND": "11",
  "TXDATA": "12",
  "CE": "13",
  "CLK": "14",
  "DATA": "15",
  "LE": "16",
  "MUXOUT": "17",
  "SDVDD": "18",
  "DVDD": "19",
  "SW1": "20",
  "SW2": "21",
  "VP": "22",
  "RSET": "23",
  "CP": "24",
  "AGND_25": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CPGND: "power_in", AGND_2: "power_in", AGND_3: "passive", RFINB: "input", RFINA: "input", AVDD_6: "power_in", AVDD_7: "passive", AVDD_8: "passive", REFIN: "input", DGND: "power_in", SDGND: "power_in", TXDATA: "input", CE: "input", CLK: "input", DATA: "input", LE: "input", MUXOUT: "output", SDVDD: "power_in", DVDD: "power_in", SW1: "passive", SW2: "passive", VP: "power_in", RSET: "passive", CP: "output", AGND_25: "passive", ...opts.pinTypes } });
  }
  override schema = "Timer_PLL:ADF4158";
  override referencePrefix = "U";
}

/**
 * 35-4400MHz fractional-N PLL, LFCSP-32
 *
 * KiCad symbol: `Timer_PLL:ADF4351`. Reference prefix: `U`.
 * Footprint filters: LFCSP*32*1EP*5x5mm*P0.5mm*EP3.25x3.25mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADF4351.pdf
 * Keywords: fractional-N PLL.
 * Default footprint: Package_CSP:LFCSP-32-1EP_5x5mm_P0.5mm_EP3.25x3.25mm.
 */
export class ADF4351 extends Component.withPins({
  "CLK": "1",
  "DATA": "2",
  "LE": "3",
  "CE": "4",
  "SW": "5",
  "Vp": "6",
  "CPout": "7",
  "CPGND": "8",
  "AGND": "9",
  "AVDD": "10",
  "AGNDVCO_11": "11",
  "RF_OUT_A+": "12",
  "RF_OUT_A-": "13",
  "RF_OUT_B+": "14",
  "RF_OUT_B-": "15",
  "VVCO_16": "16",
  "VVCO_17": "17",
  "AGNDVCO_18": "18",
  "TEMP": "19",
  "VTUNE": "20",
  "AGNDVCO_21": "21",
  "RSET": "22",
  "VCOM": "23",
  "VREF": "24",
  "LD": "25",
  "PDB_RF": "26",
  "DGND": "27",
  "DVDD": "28",
  "REFIN": "29",
  "MUXOUT": "30",
  "SDGND": "31",
  "SDVDD": "32",
  "EP": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CLK: "input", DATA: "input", LE: "input", CE: "input", SW: "input", Vp: "power_in", CPout: "input", CPGND: "power_in", AGND: "power_in", AVDD: "power_in", AGNDVCO_11: "power_in", "RF_OUT_A+": "output", "RF_OUT_A-": "output", "RF_OUT_B+": "output", "RF_OUT_B-": "output", VVCO_16: "power_in", VVCO_17: "power_in", AGNDVCO_18: "power_in", TEMP: "input", VTUNE: "input", AGNDVCO_21: "power_in", RSET: "input", VCOM: "input", VREF: "input", LD: "input", PDB_RF: "input", DGND: "power_in", DVDD: "power_in", REFIN: "input", MUXOUT: "output", SDGND: "power_in", SDVDD: "power_in", EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_PLL:ADF4351";
  override referencePrefix = "U";
}

/**
 * 137.5-4400MHz fractional-N PLL, LFCSP-32
 *
 * KiCad symbol: `Timer_PLL:ADF4350`. Reference prefix: `U`.
 * Footprint filters: LFCSP*32*1EP*5x5mm*P0.5mm*EP3.25x3.25mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ADF4350.pdf
 * Keywords: fractional-N PLL.
 * Default footprint: Package_CSP:LFCSP-32-1EP_5x5mm_P0.5mm_EP3.25x3.25mm.
 */
export class ADF4350 extends Component.withPins({
  "CLK": "1",
  "DATA": "2",
  "LE": "3",
  "CE": "4",
  "SW": "5",
  "Vp": "6",
  "CPout": "7",
  "CPGND": "8",
  "AGND": "9",
  "AVDD": "10",
  "AGNDVCO_11": "11",
  "RF_OUT_A+": "12",
  "RF_OUT_A-": "13",
  "RF_OUT_B+": "14",
  "RF_OUT_B-": "15",
  "VVCO_16": "16",
  "VVCO_17": "17",
  "AGNDVCO_18": "18",
  "TEMP": "19",
  "VTUNE": "20",
  "AGNDVCO_21": "21",
  "RSET": "22",
  "VCOM": "23",
  "VREF": "24",
  "LD": "25",
  "PDB_RF": "26",
  "DGND": "27",
  "DVDD": "28",
  "REFIN": "29",
  "MUXOUT": "30",
  "SDGND": "31",
  "SDVDD": "32",
  "EP": "33",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CLK: "input", DATA: "input", LE: "input", CE: "input", SW: "input", Vp: "power_in", CPout: "input", CPGND: "power_in", AGND: "power_in", AVDD: "power_in", AGNDVCO_11: "power_in", "RF_OUT_A+": "output", "RF_OUT_A-": "output", "RF_OUT_B+": "output", "RF_OUT_B-": "output", VVCO_16: "power_in", VVCO_17: "power_in", AGNDVCO_18: "power_in", TEMP: "input", VTUNE: "input", AGNDVCO_21: "power_in", RSET: "input", VCOM: "input", VREF: "input", LD: "input", PDB_RF: "input", DGND: "power_in", DVDD: "power_in", REFIN: "input", MUXOUT: "output", SDGND: "power_in", SDVDD: "power_in", EP: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_PLL:ADF4350";
  override referencePrefix = "U";
}

/**
 * Clock Phase-Lock Loop Clock Driver, 24-200MHz, 3.3V, SOIC-8/TSSOP-8
 *
 * KiCad symbol: `Timer_PLL:CDCVF2505`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*, TSSOP*4.4x3mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/cdcvf2505.pdf
 * Keywords: pll clock driver.
 */
export class CDCVF2505 extends Component.withPins({
  "CLKIN": "1",
  "1Y1": "2",
  "1Y0": "3",
  "GND": "4",
  "1Y2": "5",
  "VDD": "6",
  "1Y3": "7",
  "CLKOUT": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CLKIN: "input", "1Y1": "tri_state", "1Y0": "tri_state", GND: "power_in", "1Y2": "tri_state", VDD: "power_in", "1Y3": "tri_state", CLKOUT: "tri_state", ...opts.pinTypes } });
  }
  override schema = "Timer_PLL:CDCVF2505";
  override referencePrefix = "U";
}

/**
 * Fractional-N Clock Synthesizer & Clock Multiplier, MSOP-10
 *
 * KiCad symbol: `Timer_PLL:CS2000-CP`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.5mm*.
 * @see https://statics.cirrus.com/pubs/proDatasheet/CS2000-CP_F3.pdf
 * Keywords: Clock Synthesizer Multiplier.
 * Default footprint: Package_SO:MSOP-10_3x3mm_P0.5mm.
 */
export class CS2000_CP extends Component.withPins({
  "VD": "1",
  "GND": "2",
  "CLK_OUT": "3",
  "AUX_OUT": "4",
  "CLK_IN": "5",
  "XTO": "6",
  "XTI/REF_CLK": "7",
  "AD0/~{CS}": "8",
  "SCL/CCLK": "9",
  "SDA/CDIN": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VD: "power_in", GND: "power_in", CLK_OUT: "output", AUX_OUT: "output", CLK_IN: "input", XTO: "output", "XTI/REF_CLK": "input", "AD0/~{CS}": "input", "SCL/CCLK": "input", "SDA/CDIN": "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Timer_PLL:CS2000-CP";
  override referencePrefix = "U";
}

/**
 * User configurable clock up to 160 MHz, SSOP-28
 *
 * KiCad symbol: `Timer_PLL:ICS525-01R`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x9.9mm*P0.635mm*.
 * @see https://www.idt.com/document/dst/525-01-02-datasheet
 * Keywords: Configurable clock.
 * Default footprint: Package_SO:SSOP-28_3.9x9.9mm_P0.635mm.
 */
export class ICS525_01R extends Component.withPins({
  "R5": "1",
  "R6": "2",
  "S0": "3",
  "S1": "4",
  "S2": "5",
  "VDD_6": "6",
  "X1/ICLK": "7",
  "X2": "8",
  "GND_9": "9",
  "V0": "10",
  "V1": "11",
  "V2": "12",
  "V3": "13",
  "V4": "14",
  "V5": "15",
  "V6": "16",
  "V7": "17",
  "V8": "18",
  "~{PD}": "19",
  "GND_20": "20",
  "CLK": "21",
  "REF": "22",
  "VDD_23": "23",
  "R0": "24",
  "R1": "25",
  "R2": "26",
  "R3": "27",
  "R4": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R5: "input", R6: "input", S0: "input", S1: "input", S2: "input", VDD_6: "power_in", "X1/ICLK": "input", X2: "output", GND_9: "power_in", V0: "input", V1: "input", V2: "input", V3: "input", V4: "input", V5: "input", V6: "input", V7: "input", V8: "input", "~{PD}": "input", GND_20: "passive", CLK: "tri_state", REF: "tri_state", VDD_23: "power_in", R0: "input", R1: "input", R2: "input", R3: "input", R4: "input", ...opts.pinTypes } });
  }
  override schema = "Timer_PLL:ICS525-01R";
  override referencePrefix = "U";
}

/**
 * User configurable clock up to 200 MHz, SSOP-28
 *
 * KiCad symbol: `Timer_PLL:ICS525R-02`. Reference prefix: `U`.
 * Footprint filters: SSOP*3.9x9.9mm*P0.635mm*.
 * @see https://www.idt.com/document/dst/525-01-02-datasheet
 * Keywords: Configurable clock.
 * Default footprint: Package_SO:SSOP-28_3.9x9.9mm_P0.635mm.
 */
export class ICS525R_02 extends Component.withPins({
  "R5": "1",
  "R6": "2",
  "S0": "3",
  "S1": "4",
  "S2": "5",
  "VDD_6": "6",
  "X1/ICLK": "7",
  "X2": "8",
  "GND_9": "9",
  "V0": "10",
  "V1": "11",
  "V2": "12",
  "V3": "13",
  "V4": "14",
  "V5": "15",
  "V6": "16",
  "V7": "17",
  "V8": "18",
  "~{PD}": "19",
  "GND_20": "20",
  "CLK": "21",
  "REF": "22",
  "VDD_23": "23",
  "R0": "24",
  "R1": "25",
  "R2": "26",
  "R3": "27",
  "R4": "28",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R5: "input", R6: "input", S0: "input", S1: "input", S2: "input", VDD_6: "power_in", "X1/ICLK": "input", X2: "output", GND_9: "power_in", V0: "input", V1: "input", V2: "input", V3: "input", V4: "input", V5: "input", V6: "input", V7: "input", V8: "input", "~{PD}": "input", GND_20: "passive", CLK: "tri_state", REF: "tri_state", VDD_23: "power_in", R0: "input", R1: "input", R2: "input", R3: "input", R4: "input", ...opts.pinTypes } });
  }
  override schema = "Timer_PLL:ICS525R-02";
  override referencePrefix = "U";
}

/**
 * Jitter Attenuator/Clock Multiplier, 2 channel, Fractional, 0.001-1028 MHz, QFN-44
 *
 * KiCad symbol: `Timer_PLL:Si5342A-D`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si5345-44-42-D-DataSheet.pdf
 * Keywords: Clock Jitter Attenuator Multiplier.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_7x7mm_P0.5mm_EP5.2x5.2mm.
 */
export class Si5342A_D extends Component.withPins({
  "IN1": "1",
  "IN1b": "2",
  "IN_SEL0": "3",
  "X1": "4",
  "XA": "5",
  "XB": "6",
  "X2": "7",
  "VDDA_8": "8",
  "VDDA_9": "9",
  "IN2": "10",
  "IN2b": "11",
  "~{OE}": "12",
  "SDA/SDIO": "13",
  "SCLK": "14",
  "A1/SDO": "15",
  "A0/~{CS}": "16",
  "~{RST}": "17",
  "VDDO0": "18",
  "OUT0b": "19",
  "OUT0": "20",
  "VDD_21": "21",
  "NC": "22",
  "VDDO1": "23",
  "OUT1b": "24",
  "OUT1": "25",
  "VDDS_26": "26",
  "~{LOL}": "27",
  "~{LOS_XAXB}": "28",
  "VDDS_29": "29",
  "~{LOS0}": "30",
  "~{LOS1}": "31",
  "VDD_32": "32",
  "~{INTR}": "33",
  "VDDS_34": "34",
  "~{LOS2}": "35",
  "~{LOS3}": "36",
  "IN_SEL1": "37",
  "I2C_SEL": "38",
  "VDD_39": "39",
  "VDD_40": "40",
  "IN3/FB_IN": "41",
  "IN3b/FB_INb": "42",
  "IN0": "43",
  "IN0b": "44",
  "GND": "45",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN1: "input", IN1b: "input", IN_SEL0: "input", X1: "input", XA: "input", XB: "input", X2: "input", VDDA_8: "power_in", VDDA_9: "passive", IN2: "input", IN2b: "input", "~{OE}": "input", "SDA/SDIO": "bidirectional", SCLK: "input", "A1/SDO": "bidirectional", "A0/~{CS}": "input", "~{RST}": "input", VDDO0: "power_in", OUT0b: "output", OUT0: "output", VDD_21: "power_in", NC: "no_connect", VDDO1: "power_in", OUT1b: "output", OUT1: "output", VDDS_26: "power_in", "~{LOL}": "output", "~{LOS_XAXB}": "output", VDDS_29: "passive", "~{LOS0}": "output", "~{LOS1}": "output", VDD_32: "passive", "~{INTR}": "output", VDDS_34: "passive", "~{LOS2}": "output", "~{LOS3}": "output", IN_SEL1: "input", I2C_SEL: "input", VDD_39: "passive", VDD_40: "passive", "IN3/FB_IN": "input", "IN3b/FB_INb": "input", IN0: "input", IN0b: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_PLL:Si5342A-D";
  override referencePrefix = "U";
}

/**
 * Jitter Attenuator/Clock Multiplier, 2 channel, Fractional, 0.001-350 MHz, QFN-44
 *
 * KiCad symbol: `Timer_PLL:Si5342B-D`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si5345-44-42-D-DataSheet.pdf
 * Keywords: Clock Jitter Attenuator Multiplier.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_7x7mm_P0.5mm_EP5.2x5.2mm.
 */
export class Si5342B_D extends Component.withPins({
  "IN1": "1",
  "IN1b": "2",
  "IN_SEL0": "3",
  "X1": "4",
  "XA": "5",
  "XB": "6",
  "X2": "7",
  "VDDA_8": "8",
  "VDDA_9": "9",
  "IN2": "10",
  "IN2b": "11",
  "~{OE}": "12",
  "SDA/SDIO": "13",
  "SCLK": "14",
  "A1/SDO": "15",
  "A0/~{CS}": "16",
  "~{RST}": "17",
  "VDDO0": "18",
  "OUT0b": "19",
  "OUT0": "20",
  "VDD_21": "21",
  "NC": "22",
  "VDDO1": "23",
  "OUT1b": "24",
  "OUT1": "25",
  "VDDS_26": "26",
  "~{LOL}": "27",
  "~{LOS_XAXB}": "28",
  "VDDS_29": "29",
  "~{LOS0}": "30",
  "~{LOS1}": "31",
  "VDD_32": "32",
  "~{INTR}": "33",
  "VDDS_34": "34",
  "~{LOS2}": "35",
  "~{LOS3}": "36",
  "IN_SEL1": "37",
  "I2C_SEL": "38",
  "VDD_39": "39",
  "VDD_40": "40",
  "IN3/FB_IN": "41",
  "IN3b/FB_INb": "42",
  "IN0": "43",
  "IN0b": "44",
  "GND": "45",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN1: "input", IN1b: "input", IN_SEL0: "input", X1: "input", XA: "input", XB: "input", X2: "input", VDDA_8: "power_in", VDDA_9: "passive", IN2: "input", IN2b: "input", "~{OE}": "input", "SDA/SDIO": "bidirectional", SCLK: "input", "A1/SDO": "bidirectional", "A0/~{CS}": "input", "~{RST}": "input", VDDO0: "power_in", OUT0b: "output", OUT0: "output", VDD_21: "power_in", NC: "no_connect", VDDO1: "power_in", OUT1b: "output", OUT1: "output", VDDS_26: "power_in", "~{LOL}": "output", "~{LOS_XAXB}": "output", VDDS_29: "passive", "~{LOS0}": "output", "~{LOS1}": "output", VDD_32: "passive", "~{INTR}": "output", VDDS_34: "passive", "~{LOS2}": "output", "~{LOS3}": "output", IN_SEL1: "input", I2C_SEL: "input", VDD_39: "passive", VDD_40: "passive", "IN3/FB_IN": "input", "IN3b/FB_INb": "input", IN0: "input", IN0b: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_PLL:Si5342B-D";
  override referencePrefix = "U";
}

/**
 * Jitter Attenuator/Clock Multiplier, 2 channel, Integer, 0.001-1028 MHz, QFN-44
 *
 * KiCad symbol: `Timer_PLL:Si5342C-D`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si5345-44-42-D-DataSheet.pdf
 * Keywords: Clock Jitter Attenuator Multiplier.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_7x7mm_P0.5mm_EP5.2x5.2mm.
 */
export class Si5342C_D extends Component.withPins({
  "IN1": "1",
  "IN1b": "2",
  "IN_SEL0": "3",
  "X1": "4",
  "XA": "5",
  "XB": "6",
  "X2": "7",
  "VDDA_8": "8",
  "VDDA_9": "9",
  "IN2": "10",
  "IN2b": "11",
  "~{OE}": "12",
  "SDA/SDIO": "13",
  "SCLK": "14",
  "A1/SDO": "15",
  "A0/~{CS}": "16",
  "~{RST}": "17",
  "VDDO0": "18",
  "OUT0b": "19",
  "OUT0": "20",
  "VDD_21": "21",
  "NC": "22",
  "VDDO1": "23",
  "OUT1b": "24",
  "OUT1": "25",
  "VDDS_26": "26",
  "~{LOL}": "27",
  "~{LOS_XAXB}": "28",
  "VDDS_29": "29",
  "~{LOS0}": "30",
  "~{LOS1}": "31",
  "VDD_32": "32",
  "~{INTR}": "33",
  "VDDS_34": "34",
  "~{LOS2}": "35",
  "~{LOS3}": "36",
  "IN_SEL1": "37",
  "I2C_SEL": "38",
  "VDD_39": "39",
  "VDD_40": "40",
  "IN3/FB_IN": "41",
  "IN3b/FB_INb": "42",
  "IN0": "43",
  "IN0b": "44",
  "GND": "45",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN1: "input", IN1b: "input", IN_SEL0: "input", X1: "input", XA: "input", XB: "input", X2: "input", VDDA_8: "power_in", VDDA_9: "passive", IN2: "input", IN2b: "input", "~{OE}": "input", "SDA/SDIO": "bidirectional", SCLK: "input", "A1/SDO": "bidirectional", "A0/~{CS}": "input", "~{RST}": "input", VDDO0: "power_in", OUT0b: "output", OUT0: "output", VDD_21: "power_in", NC: "no_connect", VDDO1: "power_in", OUT1b: "output", OUT1: "output", VDDS_26: "power_in", "~{LOL}": "output", "~{LOS_XAXB}": "output", VDDS_29: "passive", "~{LOS0}": "output", "~{LOS1}": "output", VDD_32: "passive", "~{INTR}": "output", VDDS_34: "passive", "~{LOS2}": "output", "~{LOS3}": "output", IN_SEL1: "input", I2C_SEL: "input", VDD_39: "passive", VDD_40: "passive", "IN3/FB_IN": "input", "IN3b/FB_INb": "input", IN0: "input", IN0b: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_PLL:Si5342C-D";
  override referencePrefix = "U";
}

/**
 * Jitter Attenuator/Clock Multiplier, 2 channel, Integer, 0.001-350 MHz, QFN-44
 *
 * KiCad symbol: `Timer_PLL:Si5342D-D`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si5345-44-42-D-DataSheet.pdf
 * Keywords: Clock Jitter Attenuator Multiplier.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_7x7mm_P0.5mm_EP5.2x5.2mm.
 */
export class Si5342D_D extends Component.withPins({
  "IN1": "1",
  "IN1b": "2",
  "IN_SEL0": "3",
  "X1": "4",
  "XA": "5",
  "XB": "6",
  "X2": "7",
  "VDDA_8": "8",
  "VDDA_9": "9",
  "IN2": "10",
  "IN2b": "11",
  "~{OE}": "12",
  "SDA/SDIO": "13",
  "SCLK": "14",
  "A1/SDO": "15",
  "A0/~{CS}": "16",
  "~{RST}": "17",
  "VDDO0": "18",
  "OUT0b": "19",
  "OUT0": "20",
  "VDD_21": "21",
  "NC": "22",
  "VDDO1": "23",
  "OUT1b": "24",
  "OUT1": "25",
  "VDDS_26": "26",
  "~{LOL}": "27",
  "~{LOS_XAXB}": "28",
  "VDDS_29": "29",
  "~{LOS0}": "30",
  "~{LOS1}": "31",
  "VDD_32": "32",
  "~{INTR}": "33",
  "VDDS_34": "34",
  "~{LOS2}": "35",
  "~{LOS3}": "36",
  "IN_SEL1": "37",
  "I2C_SEL": "38",
  "VDD_39": "39",
  "VDD_40": "40",
  "IN3/FB_IN": "41",
  "IN3b/FB_INb": "42",
  "IN0": "43",
  "IN0b": "44",
  "GND": "45",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN1: "input", IN1b: "input", IN_SEL0: "input", X1: "input", XA: "input", XB: "input", X2: "input", VDDA_8: "power_in", VDDA_9: "passive", IN2: "input", IN2b: "input", "~{OE}": "input", "SDA/SDIO": "bidirectional", SCLK: "input", "A1/SDO": "bidirectional", "A0/~{CS}": "input", "~{RST}": "input", VDDO0: "power_in", OUT0b: "output", OUT0: "output", VDD_21: "power_in", NC: "no_connect", VDDO1: "power_in", OUT1b: "output", OUT1: "output", VDDS_26: "power_in", "~{LOL}": "output", "~{LOS_XAXB}": "output", VDDS_29: "passive", "~{LOS0}": "output", "~{LOS1}": "output", VDD_32: "passive", "~{INTR}": "output", VDDS_34: "passive", "~{LOS2}": "output", "~{LOS3}": "output", IN_SEL1: "input", I2C_SEL: "input", VDD_39: "passive", VDD_40: "passive", "IN3/FB_IN": "input", "IN3b/FB_INb": "input", IN0: "input", IN0b: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_PLL:Si5342D-D";
  override referencePrefix = "U";
}

/**
 * Jitter Attenuator/Clock Multiplier, 4 channel, Fractional, 0.001-1028 MHz, QFN-44
 *
 * KiCad symbol: `Timer_PLL:Si5344A-D`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si5345-44-42-D-DataSheet.pdf
 * Keywords: Clock Jitter Attenuator Multiplier.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_7x7mm_P0.5mm_EP5.2x5.2mm.
 */
export class Si5344A_D extends Component.withPins({
  "IN1": "1",
  "IN1b": "2",
  "IN_SEL0": "3",
  "X1": "4",
  "XA": "5",
  "XB": "6",
  "X2": "7",
  "VDDA_8": "8",
  "VDDA_9": "9",
  "IN2": "10",
  "IN2b": "11",
  "~{OE}": "12",
  "SDA/SDIO": "13",
  "SCLK": "14",
  "A1/SDO": "15",
  "A0/~{CS}": "16",
  "~{RST}": "17",
  "VDDO0": "18",
  "OUT0b": "19",
  "OUT0": "20",
  "VDD_21": "21",
  "NC": "22",
  "VDDO1": "23",
  "OUT1b": "24",
  "OUT1": "25",
  "VDDS": "26",
  "~{LOL}": "27",
  "~{LOS_XAXB}": "28",
  "VDDO2": "29",
  "OUT2b": "30",
  "OUT2": "31",
  "VDD_32": "32",
  "~{INTR}": "33",
  "VDDO3": "34",
  "OUT3b": "35",
  "OUT3": "36",
  "IN_SEL1": "37",
  "I2C_SEL": "38",
  "VDD_39": "39",
  "VDD_40": "40",
  "IN3/FB_IN": "41",
  "IN3b/FB_INb": "42",
  "IN0": "43",
  "IN0b": "44",
  "GND": "45",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN1: "input", IN1b: "input", IN_SEL0: "input", X1: "input", XA: "input", XB: "input", X2: "input", VDDA_8: "power_in", VDDA_9: "passive", IN2: "input", IN2b: "input", "~{OE}": "input", "SDA/SDIO": "bidirectional", SCLK: "input", "A1/SDO": "bidirectional", "A0/~{CS}": "input", "~{RST}": "input", VDDO0: "power_in", OUT0b: "output", OUT0: "output", VDD_21: "power_in", NC: "no_connect", VDDO1: "power_in", OUT1b: "output", OUT1: "output", VDDS: "power_in", "~{LOL}": "output", "~{LOS_XAXB}": "output", VDDO2: "power_in", OUT2b: "output", OUT2: "output", VDD_32: "passive", "~{INTR}": "output", VDDO3: "power_in", OUT3b: "output", OUT3: "output", IN_SEL1: "input", I2C_SEL: "input", VDD_39: "passive", VDD_40: "passive", "IN3/FB_IN": "input", "IN3b/FB_INb": "input", IN0: "input", IN0b: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_PLL:Si5344A-D";
  override referencePrefix = "U";
}

/**
 * Jitter Attenuator/Clock Multiplier, 4 channel, Fractional, 0.001-350 MHz, QFN-44
 *
 * KiCad symbol: `Timer_PLL:Si5344B-D`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si5345-44-42-D-DataSheet.pdf
 * Keywords: Clock Jitter Attenuator Multiplier.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_7x7mm_P0.5mm_EP5.2x5.2mm.
 */
export class Si5344B_D extends Component.withPins({
  "IN1": "1",
  "IN1b": "2",
  "IN_SEL0": "3",
  "X1": "4",
  "XA": "5",
  "XB": "6",
  "X2": "7",
  "VDDA_8": "8",
  "VDDA_9": "9",
  "IN2": "10",
  "IN2b": "11",
  "~{OE}": "12",
  "SDA/SDIO": "13",
  "SCLK": "14",
  "A1/SDO": "15",
  "A0/~{CS}": "16",
  "~{RST}": "17",
  "VDDO0": "18",
  "OUT0b": "19",
  "OUT0": "20",
  "VDD_21": "21",
  "NC": "22",
  "VDDO1": "23",
  "OUT1b": "24",
  "OUT1": "25",
  "VDDS": "26",
  "~{LOL}": "27",
  "~{LOS_XAXB}": "28",
  "VDDO2": "29",
  "OUT2b": "30",
  "OUT2": "31",
  "VDD_32": "32",
  "~{INTR}": "33",
  "VDDO3": "34",
  "OUT3b": "35",
  "OUT3": "36",
  "IN_SEL1": "37",
  "I2C_SEL": "38",
  "VDD_39": "39",
  "VDD_40": "40",
  "IN3/FB_IN": "41",
  "IN3b/FB_INb": "42",
  "IN0": "43",
  "IN0b": "44",
  "GND": "45",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN1: "input", IN1b: "input", IN_SEL0: "input", X1: "input", XA: "input", XB: "input", X2: "input", VDDA_8: "power_in", VDDA_9: "passive", IN2: "input", IN2b: "input", "~{OE}": "input", "SDA/SDIO": "bidirectional", SCLK: "input", "A1/SDO": "bidirectional", "A0/~{CS}": "input", "~{RST}": "input", VDDO0: "power_in", OUT0b: "output", OUT0: "output", VDD_21: "power_in", NC: "no_connect", VDDO1: "power_in", OUT1b: "output", OUT1: "output", VDDS: "power_in", "~{LOL}": "output", "~{LOS_XAXB}": "output", VDDO2: "power_in", OUT2b: "output", OUT2: "output", VDD_32: "passive", "~{INTR}": "output", VDDO3: "power_in", OUT3b: "output", OUT3: "output", IN_SEL1: "input", I2C_SEL: "input", VDD_39: "passive", VDD_40: "passive", "IN3/FB_IN": "input", "IN3b/FB_INb": "input", IN0: "input", IN0b: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_PLL:Si5344B-D";
  override referencePrefix = "U";
}

/**
 * Jitter Attenuator/Clock Multiplier, 4 channel, Integer, 0.001-1028 MHz, QFN-44
 *
 * KiCad symbol: `Timer_PLL:Si5344C-D`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si5345-44-42-D-DataSheet.pdf
 * Keywords: Clock Jitter Attenuator Multiplier.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_7x7mm_P0.5mm_EP5.2x5.2mm.
 */
export class Si5344C_D extends Component.withPins({
  "IN1": "1",
  "IN1b": "2",
  "IN_SEL0": "3",
  "X1": "4",
  "XA": "5",
  "XB": "6",
  "X2": "7",
  "VDDA_8": "8",
  "VDDA_9": "9",
  "IN2": "10",
  "IN2b": "11",
  "~{OE}": "12",
  "SDA/SDIO": "13",
  "SCLK": "14",
  "A1/SDO": "15",
  "A0/~{CS}": "16",
  "~{RST}": "17",
  "VDDO0": "18",
  "OUT0b": "19",
  "OUT0": "20",
  "VDD_21": "21",
  "NC": "22",
  "VDDO1": "23",
  "OUT1b": "24",
  "OUT1": "25",
  "VDDS": "26",
  "~{LOL}": "27",
  "~{LOS_XAXB}": "28",
  "VDDO2": "29",
  "OUT2b": "30",
  "OUT2": "31",
  "VDD_32": "32",
  "~{INTR}": "33",
  "VDDO3": "34",
  "OUT3b": "35",
  "OUT3": "36",
  "IN_SEL1": "37",
  "I2C_SEL": "38",
  "VDD_39": "39",
  "VDD_40": "40",
  "IN3/FB_IN": "41",
  "IN3b/FB_INb": "42",
  "IN0": "43",
  "IN0b": "44",
  "GND": "45",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN1: "input", IN1b: "input", IN_SEL0: "input", X1: "input", XA: "input", XB: "input", X2: "input", VDDA_8: "power_in", VDDA_9: "passive", IN2: "input", IN2b: "input", "~{OE}": "input", "SDA/SDIO": "bidirectional", SCLK: "input", "A1/SDO": "bidirectional", "A0/~{CS}": "input", "~{RST}": "input", VDDO0: "power_in", OUT0b: "output", OUT0: "output", VDD_21: "power_in", NC: "no_connect", VDDO1: "power_in", OUT1b: "output", OUT1: "output", VDDS: "power_in", "~{LOL}": "output", "~{LOS_XAXB}": "output", VDDO2: "power_in", OUT2b: "output", OUT2: "output", VDD_32: "passive", "~{INTR}": "output", VDDO3: "power_in", OUT3b: "output", OUT3: "output", IN_SEL1: "input", I2C_SEL: "input", VDD_39: "passive", VDD_40: "passive", "IN3/FB_IN": "input", "IN3b/FB_INb": "input", IN0: "input", IN0b: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_PLL:Si5344C-D";
  override referencePrefix = "U";
}

/**
 * Jitter Attenuator/Clock Multiplier, 4 channel, Integer, 0.001-350 MHz, QFN-44
 *
 * KiCad symbol: `Timer_PLL:Si5344D-D`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*7x7mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si5345-44-42-D-DataSheet.pdf
 * Keywords: Clock Jitter Attenuator Multiplier.
 * Default footprint: Package_DFN_QFN:QFN-44-1EP_7x7mm_P0.5mm_EP5.2x5.2mm.
 */
export class Si5344D_D extends Component.withPins({
  "IN1": "1",
  "IN1b": "2",
  "IN_SEL0": "3",
  "X1": "4",
  "XA": "5",
  "XB": "6",
  "X2": "7",
  "VDDA_8": "8",
  "VDDA_9": "9",
  "IN2": "10",
  "IN2b": "11",
  "~{OE}": "12",
  "SDA/SDIO": "13",
  "SCLK": "14",
  "A1/SDO": "15",
  "A0/~{CS}": "16",
  "~{RST}": "17",
  "VDDO0": "18",
  "OUT0b": "19",
  "OUT0": "20",
  "VDD_21": "21",
  "NC": "22",
  "VDDO1": "23",
  "OUT1b": "24",
  "OUT1": "25",
  "VDDS": "26",
  "~{LOL}": "27",
  "~{LOS_XAXB}": "28",
  "VDDO2": "29",
  "OUT2b": "30",
  "OUT2": "31",
  "VDD_32": "32",
  "~{INTR}": "33",
  "VDDO3": "34",
  "OUT3b": "35",
  "OUT3": "36",
  "IN_SEL1": "37",
  "I2C_SEL": "38",
  "VDD_39": "39",
  "VDD_40": "40",
  "IN3/FB_IN": "41",
  "IN3b/FB_INb": "42",
  "IN0": "43",
  "IN0b": "44",
  "GND": "45",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN1: "input", IN1b: "input", IN_SEL0: "input", X1: "input", XA: "input", XB: "input", X2: "input", VDDA_8: "power_in", VDDA_9: "passive", IN2: "input", IN2b: "input", "~{OE}": "input", "SDA/SDIO": "bidirectional", SCLK: "input", "A1/SDO": "bidirectional", "A0/~{CS}": "input", "~{RST}": "input", VDDO0: "power_in", OUT0b: "output", OUT0: "output", VDD_21: "power_in", NC: "no_connect", VDDO1: "power_in", OUT1b: "output", OUT1: "output", VDDS: "power_in", "~{LOL}": "output", "~{LOS_XAXB}": "output", VDDO2: "power_in", OUT2b: "output", OUT2: "output", VDD_32: "passive", "~{INTR}": "output", VDDO3: "power_in", OUT3b: "output", OUT3: "output", IN_SEL1: "input", I2C_SEL: "input", VDD_39: "passive", VDD_40: "passive", "IN3/FB_IN": "input", "IN3b/FB_INb": "input", IN0: "input", IN0b: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_PLL:Si5344D-D";
  override referencePrefix = "U";
}

/**
 * Jitter Attenuator/Clock Multiplier, 10-channel, Fractional, 0.001-1028 MHz, QFN-64
 *
 * KiCad symbol: `Timer_PLL:Si5345A-D`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si5345-44-42-D-DataSheet.pdf
 * Keywords: Clock Jitter Attenuator Multiplier.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP5.2x5.2mm.
 */
export class Si5345A_D extends Component.withPins({
  "IN1": "1",
  "IN1b": "2",
  "IN_SEL0": "3",
  "IN_SEL1": "4",
  "NC_5": "5",
  "~{RST}": "6",
  "X1": "7",
  "XA": "8",
  "XB": "9",
  "X2": "10",
  "~{OE}": "11",
  "~{INTR}": "12",
  "VDDA": "13",
  "IN2": "14",
  "IN2b": "15",
  "SCLK": "16",
  "A1/SDO": "17",
  "SDA/SDIO": "18",
  "A0/~{CS}": "19",
  "NC_20": "20",
  "NC_21": "21",
  "VDDO0": "22",
  "OUT0b": "23",
  "OUT0": "24",
  "FDEC": "25",
  "VDDO1": "26",
  "OUT1b": "27",
  "OUT1": "28",
  "VDDO2": "29",
  "OUT2b": "30",
  "OUT2": "31",
  "VDD_32": "32",
  "VDDO3": "33",
  "OUT3b": "34",
  "OUT3": "35",
  "VDDO4": "36",
  "OUT4b": "37",
  "OUT4": "38",
  "I2C_SEL": "39",
  "VDDO5": "40",
  "OUT5b": "41",
  "OUT5": "42",
  "VDDO6": "43",
  "OUT6b": "44",
  "OUT6": "45",
  "VDD_46": "46",
  "~{LOL}": "47",
  "FINC": "48",
  "VDDO7": "49",
  "OUT7b": "50",
  "OUT7": "51",
  "VDDO8": "52",
  "OUT8b": "53",
  "OUT8": "54",
  "NC_55": "55",
  "NC_56": "56",
  "VDDO9": "57",
  "OUT9b": "58",
  "OUT9": "59",
  "VDD_60": "60",
  "IN3/FB_IN": "61",
  "IN3b/FB_INb": "62",
  "IN0": "63",
  "IN0b": "64",
  "GND": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN1: "input", IN1b: "input", IN_SEL0: "input", IN_SEL1: "input", NC_5: "no_connect", "~{RST}": "input", X1: "input", XA: "input", XB: "input", X2: "input", "~{OE}": "input", "~{INTR}": "output", VDDA: "power_in", IN2: "input", IN2b: "input", SCLK: "input", "A1/SDO": "bidirectional", "SDA/SDIO": "bidirectional", "A0/~{CS}": "input", NC_20: "no_connect", NC_21: "no_connect", VDDO0: "power_in", OUT0b: "output", OUT0: "output", FDEC: "input", VDDO1: "power_in", OUT1b: "output", OUT1: "output", VDDO2: "power_in", OUT2b: "output", OUT2: "output", VDD_32: "power_in", VDDO3: "power_in", OUT3b: "output", OUT3: "output", VDDO4: "power_in", OUT4b: "output", OUT4: "output", I2C_SEL: "input", VDDO5: "power_in", OUT5b: "output", OUT5: "output", VDDO6: "power_in", OUT6b: "output", OUT6: "output", VDD_46: "passive", "~{LOL}": "output", FINC: "input", VDDO7: "power_in", OUT7b: "output", OUT7: "output", VDDO8: "power_in", OUT8b: "output", OUT8: "output", NC_55: "no_connect", NC_56: "no_connect", VDDO9: "power_in", OUT9b: "output", OUT9: "output", VDD_60: "passive", "IN3/FB_IN": "input", "IN3b/FB_INb": "input", IN0: "input", IN0b: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_PLL:Si5345A-D";
  override referencePrefix = "U";
}

/**
 * Jitter Attenuator/Clock Multiplier, 10-channel, Fractional, 0.001-350 MHz, QFN-64
 *
 * KiCad symbol: `Timer_PLL:Si5345B-D`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si5345-44-42-D-DataSheet.pdf
 * Keywords: Clock Jitter Attenuator Multiplier.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP5.2x5.2mm.
 */
export class Si5345B_D extends Component.withPins({
  "IN1": "1",
  "IN1b": "2",
  "IN_SEL0": "3",
  "IN_SEL1": "4",
  "NC_5": "5",
  "~{RST}": "6",
  "X1": "7",
  "XA": "8",
  "XB": "9",
  "X2": "10",
  "~{OE}": "11",
  "~{INTR}": "12",
  "VDDA": "13",
  "IN2": "14",
  "IN2b": "15",
  "SCLK": "16",
  "A1/SDO": "17",
  "SDA/SDIO": "18",
  "A0/~{CS}": "19",
  "NC_20": "20",
  "NC_21": "21",
  "VDDO0": "22",
  "OUT0b": "23",
  "OUT0": "24",
  "FDEC": "25",
  "VDDO1": "26",
  "OUT1b": "27",
  "OUT1": "28",
  "VDDO2": "29",
  "OUT2b": "30",
  "OUT2": "31",
  "VDD_32": "32",
  "VDDO3": "33",
  "OUT3b": "34",
  "OUT3": "35",
  "VDDO4": "36",
  "OUT4b": "37",
  "OUT4": "38",
  "I2C_SEL": "39",
  "VDDO5": "40",
  "OUT5b": "41",
  "OUT5": "42",
  "VDDO6": "43",
  "OUT6b": "44",
  "OUT6": "45",
  "VDD_46": "46",
  "~{LOL}": "47",
  "FINC": "48",
  "VDDO7": "49",
  "OUT7b": "50",
  "OUT7": "51",
  "VDDO8": "52",
  "OUT8b": "53",
  "OUT8": "54",
  "NC_55": "55",
  "NC_56": "56",
  "VDDO9": "57",
  "OUT9b": "58",
  "OUT9": "59",
  "VDD_60": "60",
  "IN3/FB_IN": "61",
  "IN3b/FB_INb": "62",
  "IN0": "63",
  "IN0b": "64",
  "GND": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN1: "input", IN1b: "input", IN_SEL0: "input", IN_SEL1: "input", NC_5: "no_connect", "~{RST}": "input", X1: "input", XA: "input", XB: "input", X2: "input", "~{OE}": "input", "~{INTR}": "output", VDDA: "power_in", IN2: "input", IN2b: "input", SCLK: "input", "A1/SDO": "bidirectional", "SDA/SDIO": "bidirectional", "A0/~{CS}": "input", NC_20: "no_connect", NC_21: "no_connect", VDDO0: "power_in", OUT0b: "output", OUT0: "output", FDEC: "input", VDDO1: "power_in", OUT1b: "output", OUT1: "output", VDDO2: "power_in", OUT2b: "output", OUT2: "output", VDD_32: "power_in", VDDO3: "power_in", OUT3b: "output", OUT3: "output", VDDO4: "power_in", OUT4b: "output", OUT4: "output", I2C_SEL: "input", VDDO5: "power_in", OUT5b: "output", OUT5: "output", VDDO6: "power_in", OUT6b: "output", OUT6: "output", VDD_46: "passive", "~{LOL}": "output", FINC: "input", VDDO7: "power_in", OUT7b: "output", OUT7: "output", VDDO8: "power_in", OUT8b: "output", OUT8: "output", NC_55: "no_connect", NC_56: "no_connect", VDDO9: "power_in", OUT9b: "output", OUT9: "output", VDD_60: "passive", "IN3/FB_IN": "input", "IN3b/FB_INb": "input", IN0: "input", IN0b: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_PLL:Si5345B-D";
  override referencePrefix = "U";
}

/**
 * Jitter Attenuator/Clock Multiplier, 10-channel, Integer, 0.001-1028 MHz, QFN-64
 *
 * KiCad symbol: `Timer_PLL:Si5345C-D`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si5345-44-42-D-DataSheet.pdf
 * Keywords: Clock Jitter Attenuator Multiplier.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP5.2x5.2mm.
 */
export class Si5345C_D extends Component.withPins({
  "IN1": "1",
  "IN1b": "2",
  "IN_SEL0": "3",
  "IN_SEL1": "4",
  "NC_5": "5",
  "~{RST}": "6",
  "X1": "7",
  "XA": "8",
  "XB": "9",
  "X2": "10",
  "~{OE}": "11",
  "~{INTR}": "12",
  "VDDA": "13",
  "IN2": "14",
  "IN2b": "15",
  "SCLK": "16",
  "A1/SDO": "17",
  "SDA/SDIO": "18",
  "A0/~{CS}": "19",
  "NC_20": "20",
  "NC_21": "21",
  "VDDO0": "22",
  "OUT0b": "23",
  "OUT0": "24",
  "FDEC": "25",
  "VDDO1": "26",
  "OUT1b": "27",
  "OUT1": "28",
  "VDDO2": "29",
  "OUT2b": "30",
  "OUT2": "31",
  "VDD_32": "32",
  "VDDO3": "33",
  "OUT3b": "34",
  "OUT3": "35",
  "VDDO4": "36",
  "OUT4b": "37",
  "OUT4": "38",
  "I2C_SEL": "39",
  "VDDO5": "40",
  "OUT5b": "41",
  "OUT5": "42",
  "VDDO6": "43",
  "OUT6b": "44",
  "OUT6": "45",
  "VDD_46": "46",
  "~{LOL}": "47",
  "FINC": "48",
  "VDDO7": "49",
  "OUT7b": "50",
  "OUT7": "51",
  "VDDO8": "52",
  "OUT8b": "53",
  "OUT8": "54",
  "NC_55": "55",
  "NC_56": "56",
  "VDDO9": "57",
  "OUT9b": "58",
  "OUT9": "59",
  "VDD_60": "60",
  "IN3/FB_IN": "61",
  "IN3b/FB_INb": "62",
  "IN0": "63",
  "IN0b": "64",
  "GND": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN1: "input", IN1b: "input", IN_SEL0: "input", IN_SEL1: "input", NC_5: "no_connect", "~{RST}": "input", X1: "input", XA: "input", XB: "input", X2: "input", "~{OE}": "input", "~{INTR}": "output", VDDA: "power_in", IN2: "input", IN2b: "input", SCLK: "input", "A1/SDO": "bidirectional", "SDA/SDIO": "bidirectional", "A0/~{CS}": "input", NC_20: "no_connect", NC_21: "no_connect", VDDO0: "power_in", OUT0b: "output", OUT0: "output", FDEC: "input", VDDO1: "power_in", OUT1b: "output", OUT1: "output", VDDO2: "power_in", OUT2b: "output", OUT2: "output", VDD_32: "power_in", VDDO3: "power_in", OUT3b: "output", OUT3: "output", VDDO4: "power_in", OUT4b: "output", OUT4: "output", I2C_SEL: "input", VDDO5: "power_in", OUT5b: "output", OUT5: "output", VDDO6: "power_in", OUT6b: "output", OUT6: "output", VDD_46: "passive", "~{LOL}": "output", FINC: "input", VDDO7: "power_in", OUT7b: "output", OUT7: "output", VDDO8: "power_in", OUT8b: "output", OUT8: "output", NC_55: "no_connect", NC_56: "no_connect", VDDO9: "power_in", OUT9b: "output", OUT9: "output", VDD_60: "passive", "IN3/FB_IN": "input", "IN3b/FB_INb": "input", IN0: "input", IN0b: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_PLL:Si5345C-D";
  override referencePrefix = "U";
}

/**
 * Jitter Attenuator/Clock Multiplier, 10-channel, Integer, 0.001-350 MHz, QFN-64
 *
 * KiCad symbol: `Timer_PLL:Si5345D-D`. Reference prefix: `U`.
 * Footprint filters: QFN*1EP*9x9mm*P0.5mm*.
 * @see https://www.silabs.com/documents/public/data-sheets/Si5345-44-42-D-DataSheet.pdf
 * Keywords: Clock Jitter Attenuator Multiplier.
 * Default footprint: Package_DFN_QFN:QFN-64-1EP_9x9mm_P0.5mm_EP5.2x5.2mm.
 */
export class Si5345D_D extends Component.withPins({
  "IN1": "1",
  "IN1b": "2",
  "IN_SEL0": "3",
  "IN_SEL1": "4",
  "NC_5": "5",
  "~{RST}": "6",
  "X1": "7",
  "XA": "8",
  "XB": "9",
  "X2": "10",
  "~{OE}": "11",
  "~{INTR}": "12",
  "VDDA": "13",
  "IN2": "14",
  "IN2b": "15",
  "SCLK": "16",
  "A1/SDO": "17",
  "SDA/SDIO": "18",
  "A0/~{CS}": "19",
  "NC_20": "20",
  "NC_21": "21",
  "VDDO0": "22",
  "OUT0b": "23",
  "OUT0": "24",
  "FDEC": "25",
  "VDDO1": "26",
  "OUT1b": "27",
  "OUT1": "28",
  "VDDO2": "29",
  "OUT2b": "30",
  "OUT2": "31",
  "VDD_32": "32",
  "VDDO3": "33",
  "OUT3b": "34",
  "OUT3": "35",
  "VDDO4": "36",
  "OUT4b": "37",
  "OUT4": "38",
  "I2C_SEL": "39",
  "VDDO5": "40",
  "OUT5b": "41",
  "OUT5": "42",
  "VDDO6": "43",
  "OUT6b": "44",
  "OUT6": "45",
  "VDD_46": "46",
  "~{LOL}": "47",
  "FINC": "48",
  "VDDO7": "49",
  "OUT7b": "50",
  "OUT7": "51",
  "VDDO8": "52",
  "OUT8b": "53",
  "OUT8": "54",
  "NC_55": "55",
  "NC_56": "56",
  "VDDO9": "57",
  "OUT9b": "58",
  "OUT9": "59",
  "VDD_60": "60",
  "IN3/FB_IN": "61",
  "IN3b/FB_INb": "62",
  "IN0": "63",
  "IN0b": "64",
  "GND": "65",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN1: "input", IN1b: "input", IN_SEL0: "input", IN_SEL1: "input", NC_5: "no_connect", "~{RST}": "input", X1: "input", XA: "input", XB: "input", X2: "input", "~{OE}": "input", "~{INTR}": "output", VDDA: "power_in", IN2: "input", IN2b: "input", SCLK: "input", "A1/SDO": "bidirectional", "SDA/SDIO": "bidirectional", "A0/~{CS}": "input", NC_20: "no_connect", NC_21: "no_connect", VDDO0: "power_in", OUT0b: "output", OUT0: "output", FDEC: "input", VDDO1: "power_in", OUT1b: "output", OUT1: "output", VDDO2: "power_in", OUT2b: "output", OUT2: "output", VDD_32: "power_in", VDDO3: "power_in", OUT3b: "output", OUT3: "output", VDDO4: "power_in", OUT4b: "output", OUT4: "output", I2C_SEL: "input", VDDO5: "power_in", OUT5b: "output", OUT5: "output", VDDO6: "power_in", OUT6b: "output", OUT6: "output", VDD_46: "passive", "~{LOL}": "output", FINC: "input", VDDO7: "power_in", OUT7b: "output", OUT7: "output", VDDO8: "power_in", OUT8b: "output", OUT8: "output", NC_55: "no_connect", NC_56: "no_connect", VDDO9: "power_in", OUT9b: "output", OUT9: "output", VDD_60: "passive", "IN3/FB_IN": "input", "IN3b/FB_INb": "input", IN0: "input", IN0b: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "Timer_PLL:Si5345D-D";
  override referencePrefix = "U";
}
