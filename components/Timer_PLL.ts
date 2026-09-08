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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADF4002BCPZ extends Component.withPins({
  /** Physical pin 1: CPGND; power_in. */
  "CPGND": "1",
  /** Physical pin 2: AGND; power_in. */
  "AGND_2": "2",
  /** Physical pin 3: AGND; passive. */
  "AGND_3": "3",
  /** Physical pin 4: RFINB; input. */
  "RFINB": "4",
  /** Physical pin 5: RFINA; input. */
  "RFINA": "5",
  /** Physical pin 6: AVDD; passive. */
  "AVDD_6": "6",
  /** Physical pin 7: AVDD; power_in. */
  "AVDD_7": "7",
  /** Physical pin 8: REFIN; input. */
  "REFIN": "8",
  /** Physical pin 9: DGND; power_in. */
  "DGND_9": "9",
  /** Physical pin 10: DGND; passive. */
  "DGND_10": "10",
  /** Physical pin 11: CE; input. */
  "CE": "11",
  /** Physical pin 12: CLK; input. */
  "CLK": "12",
  /** Physical pin 13: DATA; input. */
  "DATA": "13",
  /** Physical pin 14: LE; input. */
  "LE": "14",
  /** Physical pin 15: MUXOUT; output. */
  "MUXOUT": "15",
  /** Physical pin 16: DVDD; power_in. */
  "DVDD_16": "16",
  /** Physical pin 17: DVDD; passive. */
  "DVDD_17": "17",
  /** Physical pin 18: VP; power_in. */
  "VP": "18",
  /** Physical pin 19: RSET; input. */
  "RSET": "19",
  /** Physical pin 20: CP; output. */
  "CP": "20",
  /** Physical pin 21: AGND; passive. */
  "AGND_21": "21",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADF4002BRUZ extends Component.withPins({
  /** Physical pin 1: RSET; input. */
  "RSET": "1",
  /** Physical pin 2: CP; output. */
  "CP": "2",
  /** Physical pin 3: CPGND; power_in. */
  "CPGND": "3",
  /** Physical pin 4: AGND; power_in. */
  "AGND": "4",
  /** Physical pin 5: RFINB; input. */
  "RFINB": "5",
  /** Physical pin 6: RFINA; input. */
  "RFINA": "6",
  /** Physical pin 7: AVDD; power_in. */
  "AVDD": "7",
  /** Physical pin 8: REFIN; input. */
  "REFIN": "8",
  /** Physical pin 9: DGND; power_in. */
  "DGND": "9",
  /** Physical pin 10: CE; input. */
  "CE": "10",
  /** Physical pin 11: CLK; input. */
  "CLK": "11",
  /** Physical pin 12: DATA; input. */
  "DATA": "12",
  /** Physical pin 13: LE; input. */
  "LE": "13",
  /** Physical pin 14: MUXOUT; output. */
  "MUXOUT": "14",
  /** Physical pin 15: DVDD; power_in. */
  "DVDD": "15",
  /** Physical pin 16: VP; power_in. */
  "VP": "16",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADF4158 extends Component.withPins({
  /** Physical pin 1: CPGND; power_in. */
  "CPGND": "1",
  /** Physical pin 2: AGND; power_in. */
  "AGND_2": "2",
  /** Physical pin 3: AGND; passive. */
  "AGND_3": "3",
  /** Physical pin 4: RFINB; input. */
  "RFINB": "4",
  /** Physical pin 5: RFINA; input. */
  "RFINA": "5",
  /** Physical pin 6: AVDD; power_in. */
  "AVDD_6": "6",
  /** Physical pin 7: AVDD; passive. */
  "AVDD_7": "7",
  /** Physical pin 8: AVDD; passive. */
  "AVDD_8": "8",
  /** Physical pin 9: REFIN; input. */
  "REFIN": "9",
  /** Physical pin 10: DGND; power_in. */
  "DGND": "10",
  /** Physical pin 11: SDGND; power_in. */
  "SDGND": "11",
  /** Physical pin 12: TXDATA; input. */
  "TXDATA": "12",
  /** Physical pin 13: CE; input. */
  "CE": "13",
  /** Physical pin 14: CLK; input. */
  "CLK": "14",
  /** Physical pin 15: DATA; input. */
  "DATA": "15",
  /** Physical pin 16: LE; input. */
  "LE": "16",
  /** Physical pin 17: MUXOUT; output. */
  "MUXOUT": "17",
  /** Physical pin 18: SDVDD; power_in. */
  "SDVDD": "18",
  /** Physical pin 19: DVDD; power_in. */
  "DVDD": "19",
  /** Physical pin 20: SW1; passive. */
  "SW1": "20",
  /** Physical pin 21: SW2; passive. */
  "SW2": "21",
  /** Physical pin 22: VP; power_in. */
  "VP": "22",
  /** Physical pin 23: RSET; passive. */
  "RSET": "23",
  /** Physical pin 24: CP; output. */
  "CP": "24",
  /** Physical pin 25: AGND; passive. */
  "AGND_25": "25",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADF4351 extends Component.withPins({
  /** Physical pin 1: CLK; input. */
  "CLK": "1",
  /** Physical pin 2: DATA; input. */
  "DATA": "2",
  /** Physical pin 3: LE; input. */
  "LE": "3",
  /** Physical pin 4: CE; input. */
  "CE": "4",
  /** Physical pin 5: SW; input. */
  "SW": "5",
  /** Physical pin 6: Vp; power_in. */
  "Vp": "6",
  /** Physical pin 7: CPout; input. */
  "CPout": "7",
  /** Physical pin 8: CPGND; power_in. */
  "CPGND": "8",
  /** Physical pin 9: AGND; power_in. */
  "AGND": "9",
  /** Physical pin 10: AVDD; power_in. */
  "AVDD": "10",
  /** Physical pin 11: AGNDVCO; power_in. */
  "AGNDVCO_11": "11",
  /** Physical pin 12: RF_OUT_A+; output. */
  "RF_OUT_A+": "12",
  /** Physical pin 13: RF_OUT_A-; output. */
  "RF_OUT_A-": "13",
  /** Physical pin 14: RF_OUT_B+; output. */
  "RF_OUT_B+": "14",
  /** Physical pin 15: RF_OUT_B-; output. */
  "RF_OUT_B-": "15",
  /** Physical pin 16: VVCO; power_in. */
  "VVCO_16": "16",
  /** Physical pin 17: VVCO; power_in. */
  "VVCO_17": "17",
  /** Physical pin 18: AGNDVCO; power_in. */
  "AGNDVCO_18": "18",
  /** Physical pin 19: TEMP; input. */
  "TEMP": "19",
  /** Physical pin 20: VTUNE; input. */
  "VTUNE": "20",
  /** Physical pin 21: AGNDVCO; power_in. */
  "AGNDVCO_21": "21",
  /** Physical pin 22: RSET; input. */
  "RSET": "22",
  /** Physical pin 23: VCOM; input. */
  "VCOM": "23",
  /** Physical pin 24: VREF; input. */
  "VREF": "24",
  /** Physical pin 25: LD; input. */
  "LD": "25",
  /** Physical pin 26: PDB_RF; input. */
  "PDB_RF": "26",
  /** Physical pin 27: DGND; power_in. */
  "DGND": "27",
  /** Physical pin 28: DVDD; power_in. */
  "DVDD": "28",
  /** Physical pin 29: REFIN; input. */
  "REFIN": "29",
  /** Physical pin 30: MUXOUT; output. */
  "MUXOUT": "30",
  /** Physical pin 31: SDGND; power_in. */
  "SDGND": "31",
  /** Physical pin 32: SDVDD; power_in. */
  "SDVDD": "32",
  /** Physical pin 33: EP; power_in. */
  "EP": "33",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ADF4350 extends Component.withPins({
  /** Physical pin 1: CLK; input. */
  "CLK": "1",
  /** Physical pin 2: DATA; input. */
  "DATA": "2",
  /** Physical pin 3: LE; input. */
  "LE": "3",
  /** Physical pin 4: CE; input. */
  "CE": "4",
  /** Physical pin 5: SW; input. */
  "SW": "5",
  /** Physical pin 6: Vp; power_in. */
  "Vp": "6",
  /** Physical pin 7: CPout; input. */
  "CPout": "7",
  /** Physical pin 8: CPGND; power_in. */
  "CPGND": "8",
  /** Physical pin 9: AGND; power_in. */
  "AGND": "9",
  /** Physical pin 10: AVDD; power_in. */
  "AVDD": "10",
  /** Physical pin 11: AGNDVCO; power_in. */
  "AGNDVCO_11": "11",
  /** Physical pin 12: RF_OUT_A+; output. */
  "RF_OUT_A+": "12",
  /** Physical pin 13: RF_OUT_A-; output. */
  "RF_OUT_A-": "13",
  /** Physical pin 14: RF_OUT_B+; output. */
  "RF_OUT_B+": "14",
  /** Physical pin 15: RF_OUT_B-; output. */
  "RF_OUT_B-": "15",
  /** Physical pin 16: VVCO; power_in. */
  "VVCO_16": "16",
  /** Physical pin 17: VVCO; power_in. */
  "VVCO_17": "17",
  /** Physical pin 18: AGNDVCO; power_in. */
  "AGNDVCO_18": "18",
  /** Physical pin 19: TEMP; input. */
  "TEMP": "19",
  /** Physical pin 20: VTUNE; input. */
  "VTUNE": "20",
  /** Physical pin 21: AGNDVCO; power_in. */
  "AGNDVCO_21": "21",
  /** Physical pin 22: RSET; input. */
  "RSET": "22",
  /** Physical pin 23: VCOM; input. */
  "VCOM": "23",
  /** Physical pin 24: VREF; input. */
  "VREF": "24",
  /** Physical pin 25: LD; input. */
  "LD": "25",
  /** Physical pin 26: PDB_RF; input. */
  "PDB_RF": "26",
  /** Physical pin 27: DGND; power_in. */
  "DGND": "27",
  /** Physical pin 28: DVDD; power_in. */
  "DVDD": "28",
  /** Physical pin 29: REFIN; input. */
  "REFIN": "29",
  /** Physical pin 30: MUXOUT; output. */
  "MUXOUT": "30",
  /** Physical pin 31: SDGND; power_in. */
  "SDGND": "31",
  /** Physical pin 32: SDVDD; power_in. */
  "SDVDD": "32",
  /** Physical pin 33: EP; power_in. */
  "EP": "33",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CDCVF2505 extends Component.withPins({
  /** Physical pin 1: CLKIN; input. */
  "CLKIN": "1",
  /** Physical pin 2: 1Y1; tri_state. */
  "1Y1": "2",
  /** Physical pin 3: 1Y0; tri_state. */
  "1Y0": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: 1Y2; tri_state. */
  "1Y2": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD": "6",
  /** Physical pin 7: 1Y3; tri_state. */
  "1Y3": "7",
  /** Physical pin 8: CLKOUT; tri_state. */
  "CLKOUT": "8",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class CS2000_CP extends Component.withPins({
  /** Physical pin 1: VD; power_in. */
  "VD": "1",
  /** Physical pin 2: GND; power_in. */
  "GND": "2",
  /** Physical pin 3: CLK_OUT; output. */
  "CLK_OUT": "3",
  /** Physical pin 4: AUX_OUT; output. */
  "AUX_OUT": "4",
  /** Physical pin 5: CLK_IN; input. */
  "CLK_IN": "5",
  /** Physical pin 6: XTO; output. */
  "XTO": "6",
  /** Physical pin 7: XTI/REF_CLK; input. */
  "XTI/REF_CLK": "7",
  /** Physical pin 8: AD0/~{CS}; input. */
  "AD0/~{CS}": "8",
  /** Physical pin 9: SCL/CCLK; input. */
  "SCL/CCLK": "9",
  /** Physical pin 10: SDA/CDIN; bidirectional. */
  "SDA/CDIN": "10",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ICS525_01R extends Component.withPins({
  /** Physical pin 1: R5; input. */
  "R5": "1",
  /** Physical pin 2: R6; input. */
  "R6": "2",
  /** Physical pin 3: S0; input. */
  "S0": "3",
  /** Physical pin 4: S1; input. */
  "S1": "4",
  /** Physical pin 5: S2; input. */
  "S2": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD_6": "6",
  /** Physical pin 7: X1/ICLK; input. */
  "X1/ICLK": "7",
  /** Physical pin 8: X2; output. */
  "X2": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: V0; input. */
  "V0": "10",
  /** Physical pin 11: V1; input. */
  "V1": "11",
  /** Physical pin 12: V2; input. */
  "V2": "12",
  /** Physical pin 13: V3; input. */
  "V3": "13",
  /** Physical pin 14: V4; input. */
  "V4": "14",
  /** Physical pin 15: V5; input. */
  "V5": "15",
  /** Physical pin 16: V6; input. */
  "V6": "16",
  /** Physical pin 17: V7; input. */
  "V7": "17",
  /** Physical pin 18: V8; input. */
  "V8": "18",
  /** Physical pin 19: ~{PD}; input. */
  "~{PD}": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: CLK; tri_state. */
  "CLK": "21",
  /** Physical pin 22: REF; tri_state. */
  "REF": "22",
  /** Physical pin 23: VDD; power_in. */
  "VDD_23": "23",
  /** Physical pin 24: R0; input. */
  "R0": "24",
  /** Physical pin 25: R1; input. */
  "R1": "25",
  /** Physical pin 26: R2; input. */
  "R2": "26",
  /** Physical pin 27: R3; input. */
  "R3": "27",
  /** Physical pin 28: R4; input. */
  "R4": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class ICS525R_02 extends Component.withPins({
  /** Physical pin 1: R5; input. */
  "R5": "1",
  /** Physical pin 2: R6; input. */
  "R6": "2",
  /** Physical pin 3: S0; input. */
  "S0": "3",
  /** Physical pin 4: S1; input. */
  "S1": "4",
  /** Physical pin 5: S2; input. */
  "S2": "5",
  /** Physical pin 6: VDD; power_in. */
  "VDD_6": "6",
  /** Physical pin 7: X1/ICLK; input. */
  "X1/ICLK": "7",
  /** Physical pin 8: X2; output. */
  "X2": "8",
  /** Physical pin 9: GND; power_in. */
  "GND_9": "9",
  /** Physical pin 10: V0; input. */
  "V0": "10",
  /** Physical pin 11: V1; input. */
  "V1": "11",
  /** Physical pin 12: V2; input. */
  "V2": "12",
  /** Physical pin 13: V3; input. */
  "V3": "13",
  /** Physical pin 14: V4; input. */
  "V4": "14",
  /** Physical pin 15: V5; input. */
  "V5": "15",
  /** Physical pin 16: V6; input. */
  "V6": "16",
  /** Physical pin 17: V7; input. */
  "V7": "17",
  /** Physical pin 18: V8; input. */
  "V8": "18",
  /** Physical pin 19: ~{PD}; input. */
  "~{PD}": "19",
  /** Physical pin 20: GND; passive. */
  "GND_20": "20",
  /** Physical pin 21: CLK; tri_state. */
  "CLK": "21",
  /** Physical pin 22: REF; tri_state. */
  "REF": "22",
  /** Physical pin 23: VDD; power_in. */
  "VDD_23": "23",
  /** Physical pin 24: R0; input. */
  "R0": "24",
  /** Physical pin 25: R1; input. */
  "R1": "25",
  /** Physical pin 26: R2; input. */
  "R2": "26",
  /** Physical pin 27: R3; input. */
  "R3": "27",
  /** Physical pin 28: R4; input. */
  "R4": "28",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si5342A_D extends Component.withPins({
  /** Physical pin 1: IN1; input. */
  "IN1": "1",
  /** Physical pin 2: IN1b; input. */
  "IN1b": "2",
  /** Physical pin 3: IN_SEL0; input. */
  "IN_SEL0": "3",
  /** Physical pin 4: X1; input. */
  "X1": "4",
  /** Physical pin 5: XA; input. */
  "XA": "5",
  /** Physical pin 6: XB; input. */
  "XB": "6",
  /** Physical pin 7: X2; input. */
  "X2": "7",
  /** Physical pin 8: VDDA; power_in. */
  "VDDA_8": "8",
  /** Physical pin 9: VDDA; passive. */
  "VDDA_9": "9",
  /** Physical pin 10: IN2; input. */
  "IN2": "10",
  /** Physical pin 11: IN2b; input. */
  "IN2b": "11",
  /** Physical pin 12: ~{OE}; input. */
  "~{OE}": "12",
  /** Physical pin 13: SDA/SDIO; bidirectional. */
  "SDA/SDIO": "13",
  /** Physical pin 14: SCLK; input. */
  "SCLK": "14",
  /** Physical pin 15: A1/SDO; bidirectional. */
  "A1/SDO": "15",
  /** Physical pin 16: A0/~{CS}; input. */
  "A0/~{CS}": "16",
  /** Physical pin 17: ~{RST}; input. */
  "~{RST}": "17",
  /** Physical pin 18: VDDO0; power_in. */
  "VDDO0": "18",
  /** Physical pin 19: OUT0b; output. */
  "OUT0b": "19",
  /** Physical pin 20: OUT0; output. */
  "OUT0": "20",
  /** Physical pin 21: VDD; power_in. */
  "VDD_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC": "22",
  /** Physical pin 23: VDDO1; power_in. */
  "VDDO1": "23",
  /** Physical pin 24: OUT1b; output. */
  "OUT1b": "24",
  /** Physical pin 25: OUT1; output. */
  "OUT1": "25",
  /** Physical pin 26: VDDS; power_in. */
  "VDDS_26": "26",
  /** Physical pin 27: ~{LOL}; output. */
  "~{LOL}": "27",
  /** Physical pin 28: ~{LOS_XAXB}; output. */
  "~{LOS_XAXB}": "28",
  /** Physical pin 29: VDDS; passive. */
  "VDDS_29": "29",
  /** Physical pin 30: ~{LOS0}; output. */
  "~{LOS0}": "30",
  /** Physical pin 31: ~{LOS1}; output. */
  "~{LOS1}": "31",
  /** Physical pin 32: VDD; passive. */
  "VDD_32": "32",
  /** Physical pin 33: ~{INTR}; output. */
  "~{INTR}": "33",
  /** Physical pin 34: VDDS; passive. */
  "VDDS_34": "34",
  /** Physical pin 35: ~{LOS2}; output. */
  "~{LOS2}": "35",
  /** Physical pin 36: ~{LOS3}; output. */
  "~{LOS3}": "36",
  /** Physical pin 37: IN_SEL1; input. */
  "IN_SEL1": "37",
  /** Physical pin 38: I2C_SEL; input. */
  "I2C_SEL": "38",
  /** Physical pin 39: VDD; passive. */
  "VDD_39": "39",
  /** Physical pin 40: VDD; passive. */
  "VDD_40": "40",
  /** Physical pin 41: IN3/FB_IN; input. */
  "IN3/FB_IN": "41",
  /** Physical pin 42: IN3b/FB_INb; input. */
  "IN3b/FB_INb": "42",
  /** Physical pin 43: IN0; input. */
  "IN0": "43",
  /** Physical pin 44: IN0b; input. */
  "IN0b": "44",
  /** Physical pin 45: GND; power_in. */
  "GND": "45",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si5342B_D extends Component.withPins({
  /** Physical pin 1: IN1; input. */
  "IN1": "1",
  /** Physical pin 2: IN1b; input. */
  "IN1b": "2",
  /** Physical pin 3: IN_SEL0; input. */
  "IN_SEL0": "3",
  /** Physical pin 4: X1; input. */
  "X1": "4",
  /** Physical pin 5: XA; input. */
  "XA": "5",
  /** Physical pin 6: XB; input. */
  "XB": "6",
  /** Physical pin 7: X2; input. */
  "X2": "7",
  /** Physical pin 8: VDDA; power_in. */
  "VDDA_8": "8",
  /** Physical pin 9: VDDA; passive. */
  "VDDA_9": "9",
  /** Physical pin 10: IN2; input. */
  "IN2": "10",
  /** Physical pin 11: IN2b; input. */
  "IN2b": "11",
  /** Physical pin 12: ~{OE}; input. */
  "~{OE}": "12",
  /** Physical pin 13: SDA/SDIO; bidirectional. */
  "SDA/SDIO": "13",
  /** Physical pin 14: SCLK; input. */
  "SCLK": "14",
  /** Physical pin 15: A1/SDO; bidirectional. */
  "A1/SDO": "15",
  /** Physical pin 16: A0/~{CS}; input. */
  "A0/~{CS}": "16",
  /** Physical pin 17: ~{RST}; input. */
  "~{RST}": "17",
  /** Physical pin 18: VDDO0; power_in. */
  "VDDO0": "18",
  /** Physical pin 19: OUT0b; output. */
  "OUT0b": "19",
  /** Physical pin 20: OUT0; output. */
  "OUT0": "20",
  /** Physical pin 21: VDD; power_in. */
  "VDD_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC": "22",
  /** Physical pin 23: VDDO1; power_in. */
  "VDDO1": "23",
  /** Physical pin 24: OUT1b; output. */
  "OUT1b": "24",
  /** Physical pin 25: OUT1; output. */
  "OUT1": "25",
  /** Physical pin 26: VDDS; power_in. */
  "VDDS_26": "26",
  /** Physical pin 27: ~{LOL}; output. */
  "~{LOL}": "27",
  /** Physical pin 28: ~{LOS_XAXB}; output. */
  "~{LOS_XAXB}": "28",
  /** Physical pin 29: VDDS; passive. */
  "VDDS_29": "29",
  /** Physical pin 30: ~{LOS0}; output. */
  "~{LOS0}": "30",
  /** Physical pin 31: ~{LOS1}; output. */
  "~{LOS1}": "31",
  /** Physical pin 32: VDD; passive. */
  "VDD_32": "32",
  /** Physical pin 33: ~{INTR}; output. */
  "~{INTR}": "33",
  /** Physical pin 34: VDDS; passive. */
  "VDDS_34": "34",
  /** Physical pin 35: ~{LOS2}; output. */
  "~{LOS2}": "35",
  /** Physical pin 36: ~{LOS3}; output. */
  "~{LOS3}": "36",
  /** Physical pin 37: IN_SEL1; input. */
  "IN_SEL1": "37",
  /** Physical pin 38: I2C_SEL; input. */
  "I2C_SEL": "38",
  /** Physical pin 39: VDD; passive. */
  "VDD_39": "39",
  /** Physical pin 40: VDD; passive. */
  "VDD_40": "40",
  /** Physical pin 41: IN3/FB_IN; input. */
  "IN3/FB_IN": "41",
  /** Physical pin 42: IN3b/FB_INb; input. */
  "IN3b/FB_INb": "42",
  /** Physical pin 43: IN0; input. */
  "IN0": "43",
  /** Physical pin 44: IN0b; input. */
  "IN0b": "44",
  /** Physical pin 45: GND; power_in. */
  "GND": "45",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si5342C_D extends Component.withPins({
  /** Physical pin 1: IN1; input. */
  "IN1": "1",
  /** Physical pin 2: IN1b; input. */
  "IN1b": "2",
  /** Physical pin 3: IN_SEL0; input. */
  "IN_SEL0": "3",
  /** Physical pin 4: X1; input. */
  "X1": "4",
  /** Physical pin 5: XA; input. */
  "XA": "5",
  /** Physical pin 6: XB; input. */
  "XB": "6",
  /** Physical pin 7: X2; input. */
  "X2": "7",
  /** Physical pin 8: VDDA; power_in. */
  "VDDA_8": "8",
  /** Physical pin 9: VDDA; passive. */
  "VDDA_9": "9",
  /** Physical pin 10: IN2; input. */
  "IN2": "10",
  /** Physical pin 11: IN2b; input. */
  "IN2b": "11",
  /** Physical pin 12: ~{OE}; input. */
  "~{OE}": "12",
  /** Physical pin 13: SDA/SDIO; bidirectional. */
  "SDA/SDIO": "13",
  /** Physical pin 14: SCLK; input. */
  "SCLK": "14",
  /** Physical pin 15: A1/SDO; bidirectional. */
  "A1/SDO": "15",
  /** Physical pin 16: A0/~{CS}; input. */
  "A0/~{CS}": "16",
  /** Physical pin 17: ~{RST}; input. */
  "~{RST}": "17",
  /** Physical pin 18: VDDO0; power_in. */
  "VDDO0": "18",
  /** Physical pin 19: OUT0b; output. */
  "OUT0b": "19",
  /** Physical pin 20: OUT0; output. */
  "OUT0": "20",
  /** Physical pin 21: VDD; power_in. */
  "VDD_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC": "22",
  /** Physical pin 23: VDDO1; power_in. */
  "VDDO1": "23",
  /** Physical pin 24: OUT1b; output. */
  "OUT1b": "24",
  /** Physical pin 25: OUT1; output. */
  "OUT1": "25",
  /** Physical pin 26: VDDS; power_in. */
  "VDDS_26": "26",
  /** Physical pin 27: ~{LOL}; output. */
  "~{LOL}": "27",
  /** Physical pin 28: ~{LOS_XAXB}; output. */
  "~{LOS_XAXB}": "28",
  /** Physical pin 29: VDDS; passive. */
  "VDDS_29": "29",
  /** Physical pin 30: ~{LOS0}; output. */
  "~{LOS0}": "30",
  /** Physical pin 31: ~{LOS1}; output. */
  "~{LOS1}": "31",
  /** Physical pin 32: VDD; passive. */
  "VDD_32": "32",
  /** Physical pin 33: ~{INTR}; output. */
  "~{INTR}": "33",
  /** Physical pin 34: VDDS; passive. */
  "VDDS_34": "34",
  /** Physical pin 35: ~{LOS2}; output. */
  "~{LOS2}": "35",
  /** Physical pin 36: ~{LOS3}; output. */
  "~{LOS3}": "36",
  /** Physical pin 37: IN_SEL1; input. */
  "IN_SEL1": "37",
  /** Physical pin 38: I2C_SEL; input. */
  "I2C_SEL": "38",
  /** Physical pin 39: VDD; passive. */
  "VDD_39": "39",
  /** Physical pin 40: VDD; passive. */
  "VDD_40": "40",
  /** Physical pin 41: IN3/FB_IN; input. */
  "IN3/FB_IN": "41",
  /** Physical pin 42: IN3b/FB_INb; input. */
  "IN3b/FB_INb": "42",
  /** Physical pin 43: IN0; input. */
  "IN0": "43",
  /** Physical pin 44: IN0b; input. */
  "IN0b": "44",
  /** Physical pin 45: GND; power_in. */
  "GND": "45",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si5342D_D extends Component.withPins({
  /** Physical pin 1: IN1; input. */
  "IN1": "1",
  /** Physical pin 2: IN1b; input. */
  "IN1b": "2",
  /** Physical pin 3: IN_SEL0; input. */
  "IN_SEL0": "3",
  /** Physical pin 4: X1; input. */
  "X1": "4",
  /** Physical pin 5: XA; input. */
  "XA": "5",
  /** Physical pin 6: XB; input. */
  "XB": "6",
  /** Physical pin 7: X2; input. */
  "X2": "7",
  /** Physical pin 8: VDDA; power_in. */
  "VDDA_8": "8",
  /** Physical pin 9: VDDA; passive. */
  "VDDA_9": "9",
  /** Physical pin 10: IN2; input. */
  "IN2": "10",
  /** Physical pin 11: IN2b; input. */
  "IN2b": "11",
  /** Physical pin 12: ~{OE}; input. */
  "~{OE}": "12",
  /** Physical pin 13: SDA/SDIO; bidirectional. */
  "SDA/SDIO": "13",
  /** Physical pin 14: SCLK; input. */
  "SCLK": "14",
  /** Physical pin 15: A1/SDO; bidirectional. */
  "A1/SDO": "15",
  /** Physical pin 16: A0/~{CS}; input. */
  "A0/~{CS}": "16",
  /** Physical pin 17: ~{RST}; input. */
  "~{RST}": "17",
  /** Physical pin 18: VDDO0; power_in. */
  "VDDO0": "18",
  /** Physical pin 19: OUT0b; output. */
  "OUT0b": "19",
  /** Physical pin 20: OUT0; output. */
  "OUT0": "20",
  /** Physical pin 21: VDD; power_in. */
  "VDD_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC": "22",
  /** Physical pin 23: VDDO1; power_in. */
  "VDDO1": "23",
  /** Physical pin 24: OUT1b; output. */
  "OUT1b": "24",
  /** Physical pin 25: OUT1; output. */
  "OUT1": "25",
  /** Physical pin 26: VDDS; power_in. */
  "VDDS_26": "26",
  /** Physical pin 27: ~{LOL}; output. */
  "~{LOL}": "27",
  /** Physical pin 28: ~{LOS_XAXB}; output. */
  "~{LOS_XAXB}": "28",
  /** Physical pin 29: VDDS; passive. */
  "VDDS_29": "29",
  /** Physical pin 30: ~{LOS0}; output. */
  "~{LOS0}": "30",
  /** Physical pin 31: ~{LOS1}; output. */
  "~{LOS1}": "31",
  /** Physical pin 32: VDD; passive. */
  "VDD_32": "32",
  /** Physical pin 33: ~{INTR}; output. */
  "~{INTR}": "33",
  /** Physical pin 34: VDDS; passive. */
  "VDDS_34": "34",
  /** Physical pin 35: ~{LOS2}; output. */
  "~{LOS2}": "35",
  /** Physical pin 36: ~{LOS3}; output. */
  "~{LOS3}": "36",
  /** Physical pin 37: IN_SEL1; input. */
  "IN_SEL1": "37",
  /** Physical pin 38: I2C_SEL; input. */
  "I2C_SEL": "38",
  /** Physical pin 39: VDD; passive. */
  "VDD_39": "39",
  /** Physical pin 40: VDD; passive. */
  "VDD_40": "40",
  /** Physical pin 41: IN3/FB_IN; input. */
  "IN3/FB_IN": "41",
  /** Physical pin 42: IN3b/FB_INb; input. */
  "IN3b/FB_INb": "42",
  /** Physical pin 43: IN0; input. */
  "IN0": "43",
  /** Physical pin 44: IN0b; input. */
  "IN0b": "44",
  /** Physical pin 45: GND; power_in. */
  "GND": "45",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si5344A_D extends Component.withPins({
  /** Physical pin 1: IN1; input. */
  "IN1": "1",
  /** Physical pin 2: IN1b; input. */
  "IN1b": "2",
  /** Physical pin 3: IN_SEL0; input. */
  "IN_SEL0": "3",
  /** Physical pin 4: X1; input. */
  "X1": "4",
  /** Physical pin 5: XA; input. */
  "XA": "5",
  /** Physical pin 6: XB; input. */
  "XB": "6",
  /** Physical pin 7: X2; input. */
  "X2": "7",
  /** Physical pin 8: VDDA; power_in. */
  "VDDA_8": "8",
  /** Physical pin 9: VDDA; passive. */
  "VDDA_9": "9",
  /** Physical pin 10: IN2; input. */
  "IN2": "10",
  /** Physical pin 11: IN2b; input. */
  "IN2b": "11",
  /** Physical pin 12: ~{OE}; input. */
  "~{OE}": "12",
  /** Physical pin 13: SDA/SDIO; bidirectional. */
  "SDA/SDIO": "13",
  /** Physical pin 14: SCLK; input. */
  "SCLK": "14",
  /** Physical pin 15: A1/SDO; bidirectional. */
  "A1/SDO": "15",
  /** Physical pin 16: A0/~{CS}; input. */
  "A0/~{CS}": "16",
  /** Physical pin 17: ~{RST}; input. */
  "~{RST}": "17",
  /** Physical pin 18: VDDO0; power_in. */
  "VDDO0": "18",
  /** Physical pin 19: OUT0b; output. */
  "OUT0b": "19",
  /** Physical pin 20: OUT0; output. */
  "OUT0": "20",
  /** Physical pin 21: VDD; power_in. */
  "VDD_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC": "22",
  /** Physical pin 23: VDDO1; power_in. */
  "VDDO1": "23",
  /** Physical pin 24: OUT1b; output. */
  "OUT1b": "24",
  /** Physical pin 25: OUT1; output. */
  "OUT1": "25",
  /** Physical pin 26: VDDS; power_in. */
  "VDDS": "26",
  /** Physical pin 27: ~{LOL}; output. */
  "~{LOL}": "27",
  /** Physical pin 28: ~{LOS_XAXB}; output. */
  "~{LOS_XAXB}": "28",
  /** Physical pin 29: VDDO2; power_in. */
  "VDDO2": "29",
  /** Physical pin 30: OUT2b; output. */
  "OUT2b": "30",
  /** Physical pin 31: OUT2; output. */
  "OUT2": "31",
  /** Physical pin 32: VDD; passive. */
  "VDD_32": "32",
  /** Physical pin 33: ~{INTR}; output. */
  "~{INTR}": "33",
  /** Physical pin 34: VDDO3; power_in. */
  "VDDO3": "34",
  /** Physical pin 35: OUT3b; output. */
  "OUT3b": "35",
  /** Physical pin 36: OUT3; output. */
  "OUT3": "36",
  /** Physical pin 37: IN_SEL1; input. */
  "IN_SEL1": "37",
  /** Physical pin 38: I2C_SEL; input. */
  "I2C_SEL": "38",
  /** Physical pin 39: VDD; passive. */
  "VDD_39": "39",
  /** Physical pin 40: VDD; passive. */
  "VDD_40": "40",
  /** Physical pin 41: IN3/FB_IN; input. */
  "IN3/FB_IN": "41",
  /** Physical pin 42: IN3b/FB_INb; input. */
  "IN3b/FB_INb": "42",
  /** Physical pin 43: IN0; input. */
  "IN0": "43",
  /** Physical pin 44: IN0b; input. */
  "IN0b": "44",
  /** Physical pin 45: GND; power_in. */
  "GND": "45",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si5344B_D extends Component.withPins({
  /** Physical pin 1: IN1; input. */
  "IN1": "1",
  /** Physical pin 2: IN1b; input. */
  "IN1b": "2",
  /** Physical pin 3: IN_SEL0; input. */
  "IN_SEL0": "3",
  /** Physical pin 4: X1; input. */
  "X1": "4",
  /** Physical pin 5: XA; input. */
  "XA": "5",
  /** Physical pin 6: XB; input. */
  "XB": "6",
  /** Physical pin 7: X2; input. */
  "X2": "7",
  /** Physical pin 8: VDDA; power_in. */
  "VDDA_8": "8",
  /** Physical pin 9: VDDA; passive. */
  "VDDA_9": "9",
  /** Physical pin 10: IN2; input. */
  "IN2": "10",
  /** Physical pin 11: IN2b; input. */
  "IN2b": "11",
  /** Physical pin 12: ~{OE}; input. */
  "~{OE}": "12",
  /** Physical pin 13: SDA/SDIO; bidirectional. */
  "SDA/SDIO": "13",
  /** Physical pin 14: SCLK; input. */
  "SCLK": "14",
  /** Physical pin 15: A1/SDO; bidirectional. */
  "A1/SDO": "15",
  /** Physical pin 16: A0/~{CS}; input. */
  "A0/~{CS}": "16",
  /** Physical pin 17: ~{RST}; input. */
  "~{RST}": "17",
  /** Physical pin 18: VDDO0; power_in. */
  "VDDO0": "18",
  /** Physical pin 19: OUT0b; output. */
  "OUT0b": "19",
  /** Physical pin 20: OUT0; output. */
  "OUT0": "20",
  /** Physical pin 21: VDD; power_in. */
  "VDD_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC": "22",
  /** Physical pin 23: VDDO1; power_in. */
  "VDDO1": "23",
  /** Physical pin 24: OUT1b; output. */
  "OUT1b": "24",
  /** Physical pin 25: OUT1; output. */
  "OUT1": "25",
  /** Physical pin 26: VDDS; power_in. */
  "VDDS": "26",
  /** Physical pin 27: ~{LOL}; output. */
  "~{LOL}": "27",
  /** Physical pin 28: ~{LOS_XAXB}; output. */
  "~{LOS_XAXB}": "28",
  /** Physical pin 29: VDDO2; power_in. */
  "VDDO2": "29",
  /** Physical pin 30: OUT2b; output. */
  "OUT2b": "30",
  /** Physical pin 31: OUT2; output. */
  "OUT2": "31",
  /** Physical pin 32: VDD; passive. */
  "VDD_32": "32",
  /** Physical pin 33: ~{INTR}; output. */
  "~{INTR}": "33",
  /** Physical pin 34: VDDO3; power_in. */
  "VDDO3": "34",
  /** Physical pin 35: OUT3b; output. */
  "OUT3b": "35",
  /** Physical pin 36: OUT3; output. */
  "OUT3": "36",
  /** Physical pin 37: IN_SEL1; input. */
  "IN_SEL1": "37",
  /** Physical pin 38: I2C_SEL; input. */
  "I2C_SEL": "38",
  /** Physical pin 39: VDD; passive. */
  "VDD_39": "39",
  /** Physical pin 40: VDD; passive. */
  "VDD_40": "40",
  /** Physical pin 41: IN3/FB_IN; input. */
  "IN3/FB_IN": "41",
  /** Physical pin 42: IN3b/FB_INb; input. */
  "IN3b/FB_INb": "42",
  /** Physical pin 43: IN0; input. */
  "IN0": "43",
  /** Physical pin 44: IN0b; input. */
  "IN0b": "44",
  /** Physical pin 45: GND; power_in. */
  "GND": "45",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si5344C_D extends Component.withPins({
  /** Physical pin 1: IN1; input. */
  "IN1": "1",
  /** Physical pin 2: IN1b; input. */
  "IN1b": "2",
  /** Physical pin 3: IN_SEL0; input. */
  "IN_SEL0": "3",
  /** Physical pin 4: X1; input. */
  "X1": "4",
  /** Physical pin 5: XA; input. */
  "XA": "5",
  /** Physical pin 6: XB; input. */
  "XB": "6",
  /** Physical pin 7: X2; input. */
  "X2": "7",
  /** Physical pin 8: VDDA; power_in. */
  "VDDA_8": "8",
  /** Physical pin 9: VDDA; passive. */
  "VDDA_9": "9",
  /** Physical pin 10: IN2; input. */
  "IN2": "10",
  /** Physical pin 11: IN2b; input. */
  "IN2b": "11",
  /** Physical pin 12: ~{OE}; input. */
  "~{OE}": "12",
  /** Physical pin 13: SDA/SDIO; bidirectional. */
  "SDA/SDIO": "13",
  /** Physical pin 14: SCLK; input. */
  "SCLK": "14",
  /** Physical pin 15: A1/SDO; bidirectional. */
  "A1/SDO": "15",
  /** Physical pin 16: A0/~{CS}; input. */
  "A0/~{CS}": "16",
  /** Physical pin 17: ~{RST}; input. */
  "~{RST}": "17",
  /** Physical pin 18: VDDO0; power_in. */
  "VDDO0": "18",
  /** Physical pin 19: OUT0b; output. */
  "OUT0b": "19",
  /** Physical pin 20: OUT0; output. */
  "OUT0": "20",
  /** Physical pin 21: VDD; power_in. */
  "VDD_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC": "22",
  /** Physical pin 23: VDDO1; power_in. */
  "VDDO1": "23",
  /** Physical pin 24: OUT1b; output. */
  "OUT1b": "24",
  /** Physical pin 25: OUT1; output. */
  "OUT1": "25",
  /** Physical pin 26: VDDS; power_in. */
  "VDDS": "26",
  /** Physical pin 27: ~{LOL}; output. */
  "~{LOL}": "27",
  /** Physical pin 28: ~{LOS_XAXB}; output. */
  "~{LOS_XAXB}": "28",
  /** Physical pin 29: VDDO2; power_in. */
  "VDDO2": "29",
  /** Physical pin 30: OUT2b; output. */
  "OUT2b": "30",
  /** Physical pin 31: OUT2; output. */
  "OUT2": "31",
  /** Physical pin 32: VDD; passive. */
  "VDD_32": "32",
  /** Physical pin 33: ~{INTR}; output. */
  "~{INTR}": "33",
  /** Physical pin 34: VDDO3; power_in. */
  "VDDO3": "34",
  /** Physical pin 35: OUT3b; output. */
  "OUT3b": "35",
  /** Physical pin 36: OUT3; output. */
  "OUT3": "36",
  /** Physical pin 37: IN_SEL1; input. */
  "IN_SEL1": "37",
  /** Physical pin 38: I2C_SEL; input. */
  "I2C_SEL": "38",
  /** Physical pin 39: VDD; passive. */
  "VDD_39": "39",
  /** Physical pin 40: VDD; passive. */
  "VDD_40": "40",
  /** Physical pin 41: IN3/FB_IN; input. */
  "IN3/FB_IN": "41",
  /** Physical pin 42: IN3b/FB_INb; input. */
  "IN3b/FB_INb": "42",
  /** Physical pin 43: IN0; input. */
  "IN0": "43",
  /** Physical pin 44: IN0b; input. */
  "IN0b": "44",
  /** Physical pin 45: GND; power_in. */
  "GND": "45",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si5344D_D extends Component.withPins({
  /** Physical pin 1: IN1; input. */
  "IN1": "1",
  /** Physical pin 2: IN1b; input. */
  "IN1b": "2",
  /** Physical pin 3: IN_SEL0; input. */
  "IN_SEL0": "3",
  /** Physical pin 4: X1; input. */
  "X1": "4",
  /** Physical pin 5: XA; input. */
  "XA": "5",
  /** Physical pin 6: XB; input. */
  "XB": "6",
  /** Physical pin 7: X2; input. */
  "X2": "7",
  /** Physical pin 8: VDDA; power_in. */
  "VDDA_8": "8",
  /** Physical pin 9: VDDA; passive. */
  "VDDA_9": "9",
  /** Physical pin 10: IN2; input. */
  "IN2": "10",
  /** Physical pin 11: IN2b; input. */
  "IN2b": "11",
  /** Physical pin 12: ~{OE}; input. */
  "~{OE}": "12",
  /** Physical pin 13: SDA/SDIO; bidirectional. */
  "SDA/SDIO": "13",
  /** Physical pin 14: SCLK; input. */
  "SCLK": "14",
  /** Physical pin 15: A1/SDO; bidirectional. */
  "A1/SDO": "15",
  /** Physical pin 16: A0/~{CS}; input. */
  "A0/~{CS}": "16",
  /** Physical pin 17: ~{RST}; input. */
  "~{RST}": "17",
  /** Physical pin 18: VDDO0; power_in. */
  "VDDO0": "18",
  /** Physical pin 19: OUT0b; output. */
  "OUT0b": "19",
  /** Physical pin 20: OUT0; output. */
  "OUT0": "20",
  /** Physical pin 21: VDD; power_in. */
  "VDD_21": "21",
  /** Physical pin 22: NC; no_connect. */
  "NC": "22",
  /** Physical pin 23: VDDO1; power_in. */
  "VDDO1": "23",
  /** Physical pin 24: OUT1b; output. */
  "OUT1b": "24",
  /** Physical pin 25: OUT1; output. */
  "OUT1": "25",
  /** Physical pin 26: VDDS; power_in. */
  "VDDS": "26",
  /** Physical pin 27: ~{LOL}; output. */
  "~{LOL}": "27",
  /** Physical pin 28: ~{LOS_XAXB}; output. */
  "~{LOS_XAXB}": "28",
  /** Physical pin 29: VDDO2; power_in. */
  "VDDO2": "29",
  /** Physical pin 30: OUT2b; output. */
  "OUT2b": "30",
  /** Physical pin 31: OUT2; output. */
  "OUT2": "31",
  /** Physical pin 32: VDD; passive. */
  "VDD_32": "32",
  /** Physical pin 33: ~{INTR}; output. */
  "~{INTR}": "33",
  /** Physical pin 34: VDDO3; power_in. */
  "VDDO3": "34",
  /** Physical pin 35: OUT3b; output. */
  "OUT3b": "35",
  /** Physical pin 36: OUT3; output. */
  "OUT3": "36",
  /** Physical pin 37: IN_SEL1; input. */
  "IN_SEL1": "37",
  /** Physical pin 38: I2C_SEL; input. */
  "I2C_SEL": "38",
  /** Physical pin 39: VDD; passive. */
  "VDD_39": "39",
  /** Physical pin 40: VDD; passive. */
  "VDD_40": "40",
  /** Physical pin 41: IN3/FB_IN; input. */
  "IN3/FB_IN": "41",
  /** Physical pin 42: IN3b/FB_INb; input. */
  "IN3b/FB_INb": "42",
  /** Physical pin 43: IN0; input. */
  "IN0": "43",
  /** Physical pin 44: IN0b; input. */
  "IN0b": "44",
  /** Physical pin 45: GND; power_in. */
  "GND": "45",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si5345A_D extends Component.withPins({
  /** Physical pin 1: IN1; input. */
  "IN1": "1",
  /** Physical pin 2: IN1b; input. */
  "IN1b": "2",
  /** Physical pin 3: IN_SEL0; input. */
  "IN_SEL0": "3",
  /** Physical pin 4: IN_SEL1; input. */
  "IN_SEL1": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: ~{RST}; input. */
  "~{RST}": "6",
  /** Physical pin 7: X1; input. */
  "X1": "7",
  /** Physical pin 8: XA; input. */
  "XA": "8",
  /** Physical pin 9: XB; input. */
  "XB": "9",
  /** Physical pin 10: X2; input. */
  "X2": "10",
  /** Physical pin 11: ~{OE}; input. */
  "~{OE}": "11",
  /** Physical pin 12: ~{INTR}; output. */
  "~{INTR}": "12",
  /** Physical pin 13: VDDA; power_in. */
  "VDDA": "13",
  /** Physical pin 14: IN2; input. */
  "IN2": "14",
  /** Physical pin 15: IN2b; input. */
  "IN2b": "15",
  /** Physical pin 16: SCLK; input. */
  "SCLK": "16",
  /** Physical pin 17: A1/SDO; bidirectional. */
  "A1/SDO": "17",
  /** Physical pin 18: SDA/SDIO; bidirectional. */
  "SDA/SDIO": "18",
  /** Physical pin 19: A0/~{CS}; input. */
  "A0/~{CS}": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: VDDO0; power_in. */
  "VDDO0": "22",
  /** Physical pin 23: OUT0b; output. */
  "OUT0b": "23",
  /** Physical pin 24: OUT0; output. */
  "OUT0": "24",
  /** Physical pin 25: FDEC; input. */
  "FDEC": "25",
  /** Physical pin 26: VDDO1; power_in. */
  "VDDO1": "26",
  /** Physical pin 27: OUT1b; output. */
  "OUT1b": "27",
  /** Physical pin 28: OUT1; output. */
  "OUT1": "28",
  /** Physical pin 29: VDDO2; power_in. */
  "VDDO2": "29",
  /** Physical pin 30: OUT2b; output. */
  "OUT2b": "30",
  /** Physical pin 31: OUT2; output. */
  "OUT2": "31",
  /** Physical pin 32: VDD; power_in. */
  "VDD_32": "32",
  /** Physical pin 33: VDDO3; power_in. */
  "VDDO3": "33",
  /** Physical pin 34: OUT3b; output. */
  "OUT3b": "34",
  /** Physical pin 35: OUT3; output. */
  "OUT3": "35",
  /** Physical pin 36: VDDO4; power_in. */
  "VDDO4": "36",
  /** Physical pin 37: OUT4b; output. */
  "OUT4b": "37",
  /** Physical pin 38: OUT4; output. */
  "OUT4": "38",
  /** Physical pin 39: I2C_SEL; input. */
  "I2C_SEL": "39",
  /** Physical pin 40: VDDO5; power_in. */
  "VDDO5": "40",
  /** Physical pin 41: OUT5b; output. */
  "OUT5b": "41",
  /** Physical pin 42: OUT5; output. */
  "OUT5": "42",
  /** Physical pin 43: VDDO6; power_in. */
  "VDDO6": "43",
  /** Physical pin 44: OUT6b; output. */
  "OUT6b": "44",
  /** Physical pin 45: OUT6; output. */
  "OUT6": "45",
  /** Physical pin 46: VDD; passive. */
  "VDD_46": "46",
  /** Physical pin 47: ~{LOL}; output. */
  "~{LOL}": "47",
  /** Physical pin 48: FINC; input. */
  "FINC": "48",
  /** Physical pin 49: VDDO7; power_in. */
  "VDDO7": "49",
  /** Physical pin 50: OUT7b; output. */
  "OUT7b": "50",
  /** Physical pin 51: OUT7; output. */
  "OUT7": "51",
  /** Physical pin 52: VDDO8; power_in. */
  "VDDO8": "52",
  /** Physical pin 53: OUT8b; output. */
  "OUT8b": "53",
  /** Physical pin 54: OUT8; output. */
  "OUT8": "54",
  /** Physical pin 55: NC; no_connect. */
  "NC_55": "55",
  /** Physical pin 56: NC; no_connect. */
  "NC_56": "56",
  /** Physical pin 57: VDDO9; power_in. */
  "VDDO9": "57",
  /** Physical pin 58: OUT9b; output. */
  "OUT9b": "58",
  /** Physical pin 59: OUT9; output. */
  "OUT9": "59",
  /** Physical pin 60: VDD; passive. */
  "VDD_60": "60",
  /** Physical pin 61: IN3/FB_IN; input. */
  "IN3/FB_IN": "61",
  /** Physical pin 62: IN3b/FB_INb; input. */
  "IN3b/FB_INb": "62",
  /** Physical pin 63: IN0; input. */
  "IN0": "63",
  /** Physical pin 64: IN0b; input. */
  "IN0b": "64",
  /** Physical pin 65: GND; power_in. */
  "GND": "65",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si5345B_D extends Component.withPins({
  /** Physical pin 1: IN1; input. */
  "IN1": "1",
  /** Physical pin 2: IN1b; input. */
  "IN1b": "2",
  /** Physical pin 3: IN_SEL0; input. */
  "IN_SEL0": "3",
  /** Physical pin 4: IN_SEL1; input. */
  "IN_SEL1": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: ~{RST}; input. */
  "~{RST}": "6",
  /** Physical pin 7: X1; input. */
  "X1": "7",
  /** Physical pin 8: XA; input. */
  "XA": "8",
  /** Physical pin 9: XB; input. */
  "XB": "9",
  /** Physical pin 10: X2; input. */
  "X2": "10",
  /** Physical pin 11: ~{OE}; input. */
  "~{OE}": "11",
  /** Physical pin 12: ~{INTR}; output. */
  "~{INTR}": "12",
  /** Physical pin 13: VDDA; power_in. */
  "VDDA": "13",
  /** Physical pin 14: IN2; input. */
  "IN2": "14",
  /** Physical pin 15: IN2b; input. */
  "IN2b": "15",
  /** Physical pin 16: SCLK; input. */
  "SCLK": "16",
  /** Physical pin 17: A1/SDO; bidirectional. */
  "A1/SDO": "17",
  /** Physical pin 18: SDA/SDIO; bidirectional. */
  "SDA/SDIO": "18",
  /** Physical pin 19: A0/~{CS}; input. */
  "A0/~{CS}": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: VDDO0; power_in. */
  "VDDO0": "22",
  /** Physical pin 23: OUT0b; output. */
  "OUT0b": "23",
  /** Physical pin 24: OUT0; output. */
  "OUT0": "24",
  /** Physical pin 25: FDEC; input. */
  "FDEC": "25",
  /** Physical pin 26: VDDO1; power_in. */
  "VDDO1": "26",
  /** Physical pin 27: OUT1b; output. */
  "OUT1b": "27",
  /** Physical pin 28: OUT1; output. */
  "OUT1": "28",
  /** Physical pin 29: VDDO2; power_in. */
  "VDDO2": "29",
  /** Physical pin 30: OUT2b; output. */
  "OUT2b": "30",
  /** Physical pin 31: OUT2; output. */
  "OUT2": "31",
  /** Physical pin 32: VDD; power_in. */
  "VDD_32": "32",
  /** Physical pin 33: VDDO3; power_in. */
  "VDDO3": "33",
  /** Physical pin 34: OUT3b; output. */
  "OUT3b": "34",
  /** Physical pin 35: OUT3; output. */
  "OUT3": "35",
  /** Physical pin 36: VDDO4; power_in. */
  "VDDO4": "36",
  /** Physical pin 37: OUT4b; output. */
  "OUT4b": "37",
  /** Physical pin 38: OUT4; output. */
  "OUT4": "38",
  /** Physical pin 39: I2C_SEL; input. */
  "I2C_SEL": "39",
  /** Physical pin 40: VDDO5; power_in. */
  "VDDO5": "40",
  /** Physical pin 41: OUT5b; output. */
  "OUT5b": "41",
  /** Physical pin 42: OUT5; output. */
  "OUT5": "42",
  /** Physical pin 43: VDDO6; power_in. */
  "VDDO6": "43",
  /** Physical pin 44: OUT6b; output. */
  "OUT6b": "44",
  /** Physical pin 45: OUT6; output. */
  "OUT6": "45",
  /** Physical pin 46: VDD; passive. */
  "VDD_46": "46",
  /** Physical pin 47: ~{LOL}; output. */
  "~{LOL}": "47",
  /** Physical pin 48: FINC; input. */
  "FINC": "48",
  /** Physical pin 49: VDDO7; power_in. */
  "VDDO7": "49",
  /** Physical pin 50: OUT7b; output. */
  "OUT7b": "50",
  /** Physical pin 51: OUT7; output. */
  "OUT7": "51",
  /** Physical pin 52: VDDO8; power_in. */
  "VDDO8": "52",
  /** Physical pin 53: OUT8b; output. */
  "OUT8b": "53",
  /** Physical pin 54: OUT8; output. */
  "OUT8": "54",
  /** Physical pin 55: NC; no_connect. */
  "NC_55": "55",
  /** Physical pin 56: NC; no_connect. */
  "NC_56": "56",
  /** Physical pin 57: VDDO9; power_in. */
  "VDDO9": "57",
  /** Physical pin 58: OUT9b; output. */
  "OUT9b": "58",
  /** Physical pin 59: OUT9; output. */
  "OUT9": "59",
  /** Physical pin 60: VDD; passive. */
  "VDD_60": "60",
  /** Physical pin 61: IN3/FB_IN; input. */
  "IN3/FB_IN": "61",
  /** Physical pin 62: IN3b/FB_INb; input. */
  "IN3b/FB_INb": "62",
  /** Physical pin 63: IN0; input. */
  "IN0": "63",
  /** Physical pin 64: IN0b; input. */
  "IN0b": "64",
  /** Physical pin 65: GND; power_in. */
  "GND": "65",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si5345C_D extends Component.withPins({
  /** Physical pin 1: IN1; input. */
  "IN1": "1",
  /** Physical pin 2: IN1b; input. */
  "IN1b": "2",
  /** Physical pin 3: IN_SEL0; input. */
  "IN_SEL0": "3",
  /** Physical pin 4: IN_SEL1; input. */
  "IN_SEL1": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: ~{RST}; input. */
  "~{RST}": "6",
  /** Physical pin 7: X1; input. */
  "X1": "7",
  /** Physical pin 8: XA; input. */
  "XA": "8",
  /** Physical pin 9: XB; input. */
  "XB": "9",
  /** Physical pin 10: X2; input. */
  "X2": "10",
  /** Physical pin 11: ~{OE}; input. */
  "~{OE}": "11",
  /** Physical pin 12: ~{INTR}; output. */
  "~{INTR}": "12",
  /** Physical pin 13: VDDA; power_in. */
  "VDDA": "13",
  /** Physical pin 14: IN2; input. */
  "IN2": "14",
  /** Physical pin 15: IN2b; input. */
  "IN2b": "15",
  /** Physical pin 16: SCLK; input. */
  "SCLK": "16",
  /** Physical pin 17: A1/SDO; bidirectional. */
  "A1/SDO": "17",
  /** Physical pin 18: SDA/SDIO; bidirectional. */
  "SDA/SDIO": "18",
  /** Physical pin 19: A0/~{CS}; input. */
  "A0/~{CS}": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: VDDO0; power_in. */
  "VDDO0": "22",
  /** Physical pin 23: OUT0b; output. */
  "OUT0b": "23",
  /** Physical pin 24: OUT0; output. */
  "OUT0": "24",
  /** Physical pin 25: FDEC; input. */
  "FDEC": "25",
  /** Physical pin 26: VDDO1; power_in. */
  "VDDO1": "26",
  /** Physical pin 27: OUT1b; output. */
  "OUT1b": "27",
  /** Physical pin 28: OUT1; output. */
  "OUT1": "28",
  /** Physical pin 29: VDDO2; power_in. */
  "VDDO2": "29",
  /** Physical pin 30: OUT2b; output. */
  "OUT2b": "30",
  /** Physical pin 31: OUT2; output. */
  "OUT2": "31",
  /** Physical pin 32: VDD; power_in. */
  "VDD_32": "32",
  /** Physical pin 33: VDDO3; power_in. */
  "VDDO3": "33",
  /** Physical pin 34: OUT3b; output. */
  "OUT3b": "34",
  /** Physical pin 35: OUT3; output. */
  "OUT3": "35",
  /** Physical pin 36: VDDO4; power_in. */
  "VDDO4": "36",
  /** Physical pin 37: OUT4b; output. */
  "OUT4b": "37",
  /** Physical pin 38: OUT4; output. */
  "OUT4": "38",
  /** Physical pin 39: I2C_SEL; input. */
  "I2C_SEL": "39",
  /** Physical pin 40: VDDO5; power_in. */
  "VDDO5": "40",
  /** Physical pin 41: OUT5b; output. */
  "OUT5b": "41",
  /** Physical pin 42: OUT5; output. */
  "OUT5": "42",
  /** Physical pin 43: VDDO6; power_in. */
  "VDDO6": "43",
  /** Physical pin 44: OUT6b; output. */
  "OUT6b": "44",
  /** Physical pin 45: OUT6; output. */
  "OUT6": "45",
  /** Physical pin 46: VDD; passive. */
  "VDD_46": "46",
  /** Physical pin 47: ~{LOL}; output. */
  "~{LOL}": "47",
  /** Physical pin 48: FINC; input. */
  "FINC": "48",
  /** Physical pin 49: VDDO7; power_in. */
  "VDDO7": "49",
  /** Physical pin 50: OUT7b; output. */
  "OUT7b": "50",
  /** Physical pin 51: OUT7; output. */
  "OUT7": "51",
  /** Physical pin 52: VDDO8; power_in. */
  "VDDO8": "52",
  /** Physical pin 53: OUT8b; output. */
  "OUT8b": "53",
  /** Physical pin 54: OUT8; output. */
  "OUT8": "54",
  /** Physical pin 55: NC; no_connect. */
  "NC_55": "55",
  /** Physical pin 56: NC; no_connect. */
  "NC_56": "56",
  /** Physical pin 57: VDDO9; power_in. */
  "VDDO9": "57",
  /** Physical pin 58: OUT9b; output. */
  "OUT9b": "58",
  /** Physical pin 59: OUT9; output. */
  "OUT9": "59",
  /** Physical pin 60: VDD; passive. */
  "VDD_60": "60",
  /** Physical pin 61: IN3/FB_IN; input. */
  "IN3/FB_IN": "61",
  /** Physical pin 62: IN3b/FB_INb; input. */
  "IN3b/FB_INb": "62",
  /** Physical pin 63: IN0; input. */
  "IN0": "63",
  /** Physical pin 64: IN0b; input. */
  "IN0b": "64",
  /** Physical pin 65: GND; power_in. */
  "GND": "65",
}) {
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
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class Si5345D_D extends Component.withPins({
  /** Physical pin 1: IN1; input. */
  "IN1": "1",
  /** Physical pin 2: IN1b; input. */
  "IN1b": "2",
  /** Physical pin 3: IN_SEL0; input. */
  "IN_SEL0": "3",
  /** Physical pin 4: IN_SEL1; input. */
  "IN_SEL1": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: ~{RST}; input. */
  "~{RST}": "6",
  /** Physical pin 7: X1; input. */
  "X1": "7",
  /** Physical pin 8: XA; input. */
  "XA": "8",
  /** Physical pin 9: XB; input. */
  "XB": "9",
  /** Physical pin 10: X2; input. */
  "X2": "10",
  /** Physical pin 11: ~{OE}; input. */
  "~{OE}": "11",
  /** Physical pin 12: ~{INTR}; output. */
  "~{INTR}": "12",
  /** Physical pin 13: VDDA; power_in. */
  "VDDA": "13",
  /** Physical pin 14: IN2; input. */
  "IN2": "14",
  /** Physical pin 15: IN2b; input. */
  "IN2b": "15",
  /** Physical pin 16: SCLK; input. */
  "SCLK": "16",
  /** Physical pin 17: A1/SDO; bidirectional. */
  "A1/SDO": "17",
  /** Physical pin 18: SDA/SDIO; bidirectional. */
  "SDA/SDIO": "18",
  /** Physical pin 19: A0/~{CS}; input. */
  "A0/~{CS}": "19",
  /** Physical pin 20: NC; no_connect. */
  "NC_20": "20",
  /** Physical pin 21: NC; no_connect. */
  "NC_21": "21",
  /** Physical pin 22: VDDO0; power_in. */
  "VDDO0": "22",
  /** Physical pin 23: OUT0b; output. */
  "OUT0b": "23",
  /** Physical pin 24: OUT0; output. */
  "OUT0": "24",
  /** Physical pin 25: FDEC; input. */
  "FDEC": "25",
  /** Physical pin 26: VDDO1; power_in. */
  "VDDO1": "26",
  /** Physical pin 27: OUT1b; output. */
  "OUT1b": "27",
  /** Physical pin 28: OUT1; output. */
  "OUT1": "28",
  /** Physical pin 29: VDDO2; power_in. */
  "VDDO2": "29",
  /** Physical pin 30: OUT2b; output. */
  "OUT2b": "30",
  /** Physical pin 31: OUT2; output. */
  "OUT2": "31",
  /** Physical pin 32: VDD; power_in. */
  "VDD_32": "32",
  /** Physical pin 33: VDDO3; power_in. */
  "VDDO3": "33",
  /** Physical pin 34: OUT3b; output. */
  "OUT3b": "34",
  /** Physical pin 35: OUT3; output. */
  "OUT3": "35",
  /** Physical pin 36: VDDO4; power_in. */
  "VDDO4": "36",
  /** Physical pin 37: OUT4b; output. */
  "OUT4b": "37",
  /** Physical pin 38: OUT4; output. */
  "OUT4": "38",
  /** Physical pin 39: I2C_SEL; input. */
  "I2C_SEL": "39",
  /** Physical pin 40: VDDO5; power_in. */
  "VDDO5": "40",
  /** Physical pin 41: OUT5b; output. */
  "OUT5b": "41",
  /** Physical pin 42: OUT5; output. */
  "OUT5": "42",
  /** Physical pin 43: VDDO6; power_in. */
  "VDDO6": "43",
  /** Physical pin 44: OUT6b; output. */
  "OUT6b": "44",
  /** Physical pin 45: OUT6; output. */
  "OUT6": "45",
  /** Physical pin 46: VDD; passive. */
  "VDD_46": "46",
  /** Physical pin 47: ~{LOL}; output. */
  "~{LOL}": "47",
  /** Physical pin 48: FINC; input. */
  "FINC": "48",
  /** Physical pin 49: VDDO7; power_in. */
  "VDDO7": "49",
  /** Physical pin 50: OUT7b; output. */
  "OUT7b": "50",
  /** Physical pin 51: OUT7; output. */
  "OUT7": "51",
  /** Physical pin 52: VDDO8; power_in. */
  "VDDO8": "52",
  /** Physical pin 53: OUT8b; output. */
  "OUT8b": "53",
  /** Physical pin 54: OUT8; output. */
  "OUT8": "54",
  /** Physical pin 55: NC; no_connect. */
  "NC_55": "55",
  /** Physical pin 56: NC; no_connect. */
  "NC_56": "56",
  /** Physical pin 57: VDDO9; power_in. */
  "VDDO9": "57",
  /** Physical pin 58: OUT9b; output. */
  "OUT9b": "58",
  /** Physical pin 59: OUT9; output. */
  "OUT9": "59",
  /** Physical pin 60: VDD; passive. */
  "VDD_60": "60",
  /** Physical pin 61: IN3/FB_IN; input. */
  "IN3/FB_IN": "61",
  /** Physical pin 62: IN3b/FB_INb; input. */
  "IN3b/FB_INb": "62",
  /** Physical pin 63: IN0; input. */
  "IN0": "63",
  /** Physical pin 64: IN0b; input. */
  "IN0b": "64",
  /** Physical pin 65: GND; power_in. */
  "GND": "65",
}) {
  override schema = "Timer_PLL:Si5345D-D";
  override referencePrefix = "U";
}

