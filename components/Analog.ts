// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 8-channel 12bits configurable ADC/DAC/GPIO Internal Reference, I2C interface Integrated temperature sensor,Single Supply, TSSOP-16
 *
 * KiCad symbol: `Analog:AD5593R`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD5593R.pdf
 * Keywords: 8channel 12bit ADC DAC GPIO I2C Temperature.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD5593R extends Component.withPins({
  /** Physical pin 1: ~{RESET}; input. */
  "~{RESET}": "1",
  /** Physical pin 2: A0; input. */
  "A0": "2",
  /** Physical pin 3: V_{DD}; power_in. */
  "V_{DD}": "3",
  /** Physical pin 4: IO0; bidirectional. */
  "IO0": "4",
  /** Physical pin 5: IO1; bidirectional. */
  "IO1": "5",
  /** Physical pin 6: IO2; bidirectional. */
  "IO2": "6",
  /** Physical pin 7: IO3; bidirectional. */
  "IO3": "7",
  /** Physical pin 8: V_{REF}; passive. */
  "V_{REF}": "8",
  /** Physical pin 9: V_{LOGIC}; power_in. */
  "V_{LOGIC}": "9",
  /** Physical pin 10: IO4; bidirectional. */
  "IO4": "10",
  /** Physical pin 11: IO5; bidirectional. */
  "IO5": "11",
  /** Physical pin 12: IO6; bidirectional. */
  "IO6": "12",
  /** Physical pin 13: IO7; bidirectional. */
  "IO7": "13",
  /** Physical pin 14: GND; power_in. */
  "GND": "14",
  /** Physical pin 15: SDA; bidirectional. */
  "SDA": "15",
  /** Physical pin 16: SCL; input. */
  "SCL": "16",
}) {
  override schema = "Analog:AD5593R";
  override referencePrefix = "U";
}

/**
 * High precision Balanced Modulator/Demodulator, 2 MHz, SOIC-20W
 *
 * KiCad symbol: `Analog:AD630ARZ`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x12.8mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/ad630.pdf
 * Keywords: modulator demodulator.
 * Default footprint: Package_SO:SOIC-20W_7.5x12.8mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD630ARZ extends Component.withPins({
  /** Physical pin 1: R_{in}A; input. */
  "R_{in}A": "1",
  /** Physical pin 2: CHA+; input. */
  "CHA+": "2",
  /** Physical pin 3: DIFF_OFF_ADJ1; passive. */
  "DIFF_OFF_ADJ1": "3",
  /** Physical pin 4: DIFF_OFF_ADJ2; passive. */
  "DIFF_OFF_ADJ2": "4",
  /** Physical pin 5: CM_OFF_ADJ1; passive. */
  "CM_OFF_ADJ1": "5",
  /** Physical pin 6: CM_OFF_ADJ2; passive. */
  "CM_OFF_ADJ2": "6",
  /** Physical pin 7: B/~{A}; open_collector. */
  "B/~{A}": "7",
  /** Physical pin 8: -V_{S}; power_in. */
  "-V_{S}": "8",
  /** Physical pin 9: SEL_B; input. */
  "SEL_B": "9",
  /** Physical pin 10: SEL_A; input. */
  "SEL_A": "10",
  /** Physical pin 11: +V_{S}; power_in. */
  "+V_{S}": "11",
  /** Physical pin 12: COMP; passive. */
  "COMP": "12",
  /** Physical pin 13: V_{OUT}; output. */
  "V_{OUT}": "13",
  /** Physical pin 14: R_{B}; output. */
  "R_{B}": "14",
  /** Physical pin 15: R_{F}; output. */
  "R_{F}": "15",
  /** Physical pin 16: R_{A}; output. */
  "R_{A}": "16",
  /** Physical pin 17: R_{in}B; input. */
  "R_{in}B": "17",
  /** Physical pin 18: CHB+; input. */
  "CHB+": "18",
  /** Physical pin 19: CHB-; input. */
  "CHB-": "19",
  /** Physical pin 20: CHA-; input. */
  "CHA-": "20",
}) {
  override schema = "Analog:AD630ARZ";
  override referencePrefix = "U";
}

/**
 * High Precision, Wideband RMS-to-DC Converter, DIP-14
 *
 * KiCad symbol: `Analog:AD637xQ`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD637.pdf
 * Keywords: rms-to-dc.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD637xQ extends Component.withPins({
  /** Physical pin 1: BUFF_IN; input. */
  "BUFF_IN": "1",
  /** Physical pin 2: NIC; no_connect. */
  "NIC_2": "2",
  /** Physical pin 3: COM; power_in. */
  "COM": "3",
  /** Physical pin 4: OUTPUT_OFFSET; input. */
  "OUTPUT_OFFSET": "4",
  /** Physical pin 5: CS; input. */
  "CS": "5",
  /** Physical pin 6: DEN_INPUT; input. */
  "DEN_INPUT": "6",
  /** Physical pin 7: dB_OUTPUT; passive. */
  "dB_OUTPUT": "7",
  /** Physical pin 8: C_{AV}; passive. */
  "C_{AV}": "8",
  /** Physical pin 9: RMS_OUT; output. */
  "RMS_OUT": "9",
  /** Physical pin 10: -V_{S}; power_in. */
  "-V_{S}": "10",
  /** Physical pin 11: +V_{S}; power_in. */
  "+V_{S}": "11",
  /** Physical pin 12: NIC; no_connect. */
  "NIC_12": "12",
  /** Physical pin 13: V_{IN}; input. */
  "V_{IN}": "13",
  /** Physical pin 14: BUFF_OUT; output. */
  "BUFF_OUT": "14",
}) {
  override schema = "Analog:AD637xQ";
  override referencePrefix = "U";
}

/**
 * High Precision, Wideband RMS-to-DC Converter, SOIC-16
 *
 * KiCad symbol: `Analog:AD637xRZ`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD637.pdf
 * Keywords: rms-to-dc.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD637xRZ extends Component.withPins({
  /** Physical pin 1: BUFF_IN; input. */
  "BUFF_IN": "1",
  /** Physical pin 2: NIC; no_connect. */
  "NIC_2": "2",
  /** Physical pin 3: COM; power_in. */
  "COM": "3",
  /** Physical pin 4: OUTPUT_OFFSET; input. */
  "OUTPUT_OFFSET": "4",
  /** Physical pin 5: CS; input. */
  "CS": "5",
  /** Physical pin 6: DEN_INPUT; input. */
  "DEN_INPUT": "6",
  /** Physical pin 7: dB_OUTPUT; passive. */
  "dB_OUTPUT": "7",
  /** Physical pin 8: NIC; no_connect. */
  "NIC_8": "8",
  /** Physical pin 9: NIC; no_connect. */
  "NIC_9": "9",
  /** Physical pin 10: C_{AV}; passive. */
  "C_{AV}": "10",
  /** Physical pin 11: RMS_OUT; output. */
  "RMS_OUT": "11",
  /** Physical pin 12: -V_{S}; power_in. */
  "-V_{S}": "12",
  /** Physical pin 13: +V_{S}; power_in. */
  "+V_{S}": "13",
  /** Physical pin 14: NIC; no_connect. */
  "NIC_14": "14",
  /** Physical pin 15: V_{IN}; input. */
  "V_{IN}": "15",
  /** Physical pin 16: BUFF_OUT; output. */
  "BUFF_OUT": "16",
}) {
  override schema = "Analog:AD637xRZ";
  override referencePrefix = "U";
}

/**
 * Low Cost Monolithic Voltage-to-Frequency Converter, DIP-8
 *
 * KiCad symbol: `Analog:AD654JN`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD654.pdf
 * Keywords: v-to-f v-f.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD654JN extends Component.withPins({
  /** Physical pin 1: F_{OUT}; open_collector. */
  "F_{OUT}": "1",
  /** Physical pin 2: COM; power_in. */
  "COM": "2",
  /** Physical pin 3: R_{T}; input. */
  "R_{T}": "3",
  /** Physical pin 4: +V_{IN}; input. */
  "+V_{IN}": "4",
  /** Physical pin 5: -V_{S}; power_in. */
  "-V_{S}": "5",
  /** Physical pin 6: C_{T}1; passive. */
  "C_{T}1": "6",
  /** Physical pin 7: C_{T}2; passive. */
  "C_{T}2": "7",
  /** Physical pin 8: +V_{S}; power_in. */
  "+V_{S}": "8",
}) {
  override schema = "Analog:AD654JN";
  override referencePrefix = "U";
}

/**
 * Low Cost Monolithic Voltage-to-Frequency Converter, SOIC-8
 *
 * KiCad symbol: `Analog:AD654JR`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/AD654.pdf
 * Keywords: v-to-f v-f.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class AD654JR extends Component.withPins({
  /** Physical pin 1: F_{OUT}; open_collector. */
  "F_{OUT}": "1",
  /** Physical pin 2: COM; power_in. */
  "COM": "2",
  /** Physical pin 3: R_{T}; input. */
  "R_{T}": "3",
  /** Physical pin 4: +V_{IN}; input. */
  "+V_{IN}": "4",
  /** Physical pin 5: -V_{S}; power_in. */
  "-V_{S}": "5",
  /** Physical pin 6: C_{T}1; passive. */
  "C_{T}1": "6",
  /** Physical pin 7: C_{T}2; passive. */
  "C_{T}2": "7",
  /** Physical pin 8: +V_{S}; power_in. */
  "+V_{S}": "8",
}) {
  override schema = "Analog:AD654JR";
  override referencePrefix = "U";
}

/**
 * Sample And Hold Unity Gain Follower, TO-99-8
 *
 * KiCad symbol: `Analog:LF398H`. Reference prefix: `U`.
 * Footprint filters: *TO*99*.
 * @see http://www.ti.com/lit/ds/symlink/lf398-n.pdf
 * Keywords: sample hold buffer unity gain.
 * Default footprint: Package_TO_SOT_THT:TO-99-8.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LF398H extends Component.withPins({
  /** Physical pin 1: V^{+}; passive. */
  "V^{+}": "1",
  /** Physical pin 2: Adj; passive. */
  "Adj": "2",
  /** Physical pin 3: I; input. */
  "I": "3",
  /** Physical pin 4: V^{-}; passive. */
  "V^{-}": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 6: C_{h}; passive. */
  "C_{h}": "6",
  /** Physical pin 7: T; passive. */
  "T": "7",
  /** Physical pin 8: Hold; input. */
  "Hold": "8",
}) {
  override schema = "Analog:LF398H";
  override referencePrefix = "U";
}

/**
 * Sample And Hold Unity Gain Follower, DIP-8
 *
 * KiCad symbol: `Analog:LF398_DIP8`. Reference prefix: `U`.
 * Footprint filters: *DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/lf398-n.pdf
 * Keywords: sample hold buffer unity gain.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LF398_DIP8 extends Component.withPins({
  /** Physical pin 1: V^{+}; passive. */
  "V^{+}": "1",
  /** Physical pin 2: Adj; passive. */
  "Adj": "2",
  /** Physical pin 3: I; input. */
  "I": "3",
  /** Physical pin 4: V^{-}; passive. */
  "V^{-}": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 6: C_{h}; passive. */
  "C_{h}": "6",
  /** Physical pin 7: T; passive. */
  "T": "7",
  /** Physical pin 8: Hold; input. */
  "Hold": "8",
}) {
  override schema = "Analog:LF398_DIP8";
  override referencePrefix = "U";
}

/**
 * Sample And Hold Unity Gain Follower, SOIC-14
 *
 * KiCad symbol: `Analog:LF398_SOIC14`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x8.7mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/lf398-n.pdf
 * Keywords: sample hold buffer unity gain.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LF398_SOIC14 extends Component.withPins({
  /** Physical pin 1: I; input. */
  "I": "1",
  /** Physical pin 2: NC; no_connect. */
  "NC_2": "2",
  /** Physical pin 3: V^{-}; passive. */
  "V^{-}": "3",
  /** Physical pin 4: NC; no_connect. */
  "NC_4": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: NC; no_connect. */
  "NC_6": "6",
  /** Physical pin 7: unnamed; output. */
  "P7": "7",
  /** Physical pin 8: C_{h}; passive. */
  "C_{h}": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: T; passive. */
  "T": "10",
  /** Physical pin 11: Hold; input. */
  "Hold": "11",
  /** Physical pin 12: V^{+}; passive. */
  "V^{+}": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: Adj; passive. */
  "Adj": "14",
}) {
  override schema = "Analog:LF398_SOIC14";
  override referencePrefix = "U";
}

/**
 * Sample And Hold Unity Gain Follower, SOIC-8
 *
 * KiCad symbol: `Analog:LF398_SOIC8`. Reference prefix: `U`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/lt0398s8.pdf
 * Keywords: sample hold buffer unity gain.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LF398_SOIC8 extends Component.withPins({
  /** Physical pin 1: V^{+}; passive. */
  "V^{+}": "1",
  /** Physical pin 2: Adj; passive. */
  "Adj": "2",
  /** Physical pin 3: I; input. */
  "I": "3",
  /** Physical pin 4: V^{-}; passive. */
  "V^{-}": "4",
  /** Physical pin 5: unnamed; output. */
  "P5": "5",
  /** Physical pin 6: C_{h}; passive. */
  "C_{h}": "6",
  /** Physical pin 7: T; passive. */
  "T": "7",
  /** Physical pin 8: Hold; input. */
  "Hold": "8",
}) {
  override schema = "Analog:LF398_SOIC8";
  override referencePrefix = "U";
}

/**
 * Precision Voltage-to-Frequency Converter, 1 Hz - 100 kHz, 0.9..1.1 kHz/V Gain, PDIP-8
 *
 * KiCad symbol: `Analog:LM331N`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.ti.com/lit/gpn/lm331
 * Keywords: v-to-f v-f.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM331N extends Component.withPins({
  /** Physical pin 1: IOUT; output. */
  "IOUT": "1",
  /** Physical pin 2: IREF; output. */
  "IREF": "2",
  /** Physical pin 3: FOUT; open_collector. */
  "FOUT": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: RC; input. */
  "RC": "5",
  /** Physical pin 6: THRESH; input. */
  "THRESH": "6",
  /** Physical pin 7: COMPIN; input. */
  "COMPIN": "7",
  /** Physical pin 8: VS; power_in. */
  "VS": "8",
}) {
  override schema = "Analog:LM331N";
  override referencePrefix = "U";
}

/**
 * Precision Voltage-to-Frequency Converter, 1 Hz - 100 kHz, 0.95..1.05 kHz/V Gain, PDIP-8
 *
 * KiCad symbol: `Analog:LM231N`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.ti.com/lit/gpn/lm331
 * Keywords: v-to-f v-f.
 * Default footprint: Package_DIP:DIP-8_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LM231N extends Component.withPins({
  /** Physical pin 1: IOUT; output. */
  "IOUT": "1",
  /** Physical pin 2: IREF; output. */
  "IREF": "2",
  /** Physical pin 3: FOUT; open_collector. */
  "FOUT": "3",
  /** Physical pin 4: GND; power_in. */
  "GND": "4",
  /** Physical pin 5: RC; input. */
  "RC": "5",
  /** Physical pin 6: THRESH; input. */
  "THRESH": "6",
  /** Physical pin 7: COMPIN; input. */
  "COMPIN": "7",
  /** Physical pin 8: VS; power_in. */
  "VS": "8",
}) {
  override schema = "Analog:LM231N";
  override referencePrefix = "U";
}

/**
 * Precision Micropower True RMS-to-DC Converter, MSOP-8
 *
 * KiCad symbol: `Analog:LTC1966`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1966fb.pdf
 * Keywords: rms-to-dc converter.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1966 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN1; input. */
  "IN1": "2",
  /** Physical pin 3: IN2; input. */
  "IN2": "3",
  /** Physical pin 6: OUT_RTN; input. */
  "OUT_RTN": "6",
  /** Physical pin 4: V_{SS}; power_in. */
  "V_{SS}": "4",
  /** Physical pin 5: V_{OUT}; output. */
  "V_{OUT}": "5",
  /** Physical pin 7: V_{DD}; power_in. */
  "V_{DD}": "7",
  /** Physical pin 8: ~{ENABLE}; passive. */
  "~{ENABLE}": "8",
}) {
  override schema = "Analog:LTC1966";
  override referencePrefix = "U";
}

/**
 * Precision Extended Bandwidth True RMS-to-DC Converter, MSOP-8
 *
 * KiCad symbol: `Analog:LTC1967`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1967f.pdf
 * Keywords: rms-to-dc converter.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1967 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN1; input. */
  "IN1": "2",
  /** Physical pin 3: IN2; input. */
  "IN2": "3",
  /** Physical pin 6: OUT_RTN; input. */
  "OUT_RTN": "6",
  /** Physical pin 4: NC; no_connect. */
  "NC": "4",
  /** Physical pin 5: V_{OUT}; output. */
  "V_{OUT}": "5",
  /** Physical pin 7: V^{+}; power_in. */
  "V^{+}": "7",
  /** Physical pin 8: ~{ENABLE}; passive. */
  "~{ENABLE}": "8",
}) {
  override schema = "Analog:LTC1967";
  override referencePrefix = "U";
}

/**
 * Precision Wide Bandwidth True RMS-to-DC Converter, MSOP-8
 *
 * KiCad symbol: `Analog:LTC1968`. Reference prefix: `U`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/1968f.pdf
 * Keywords: rms-to-dc converter.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class LTC1968 extends Component.withPins({
  /** Physical pin 1: GND; power_in. */
  "GND": "1",
  /** Physical pin 2: IN1; input. */
  "IN1": "2",
  /** Physical pin 3: IN2; input. */
  "IN2": "3",
  /** Physical pin 6: OUT_RTN; input. */
  "OUT_RTN": "6",
  /** Physical pin 4: NC; no_connect. */
  "NC": "4",
  /** Physical pin 5: V_{OUT}; output. */
  "V_{OUT}": "5",
  /** Physical pin 7: V^{+}; power_in. */
  "V^{+}": "7",
  /** Physical pin 8: ~{ENABLE}; passive. */
  "~{ENABLE}": "8",
}) {
  override schema = "Analog:LTC1968";
  override referencePrefix = "U";
}

/**
 * Programmable Sensor Interface (Signal Conditioner), SOIC-16W
 *
 * KiCad symbol: `Analog:MLX90314xDF`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see https://media.digikey.com/pdf/Data%20Sheets/Melexis%20PDFs/MLX90314_Rev008.pdf
 * Keywords: sensor signal conditioning.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MLX90314xDF extends Component.withPins({
  /** Physical pin 1: IO1; bidirectional. */
  "IO1": "1",
  /** Physical pin 2: IO2; bidirectional. */
  "IO2": "2",
  /** Physical pin 3: TSTB; input. */
  "TSTB": "3",
  /** Physical pin 4: FLT; passive. */
  "FLT": "4",
  /** Physical pin 5: OFC; output. */
  "OFC": "5",
  /** Physical pin 6: VBN; input. */
  "VBN": "6",
  /** Physical pin 7: VBP; input. */
  "VBP": "7",
  /** Physical pin 8: TMP; input. */
  "TMP": "8",
  /** Physical pin 9: V_{DD}; power_in. */
  "V_{DD}": "9",
  /** Physical pin 10: FET; output. */
  "FET": "10",
  /** Physical pin 11: V_{DD1}; power_in. */
  "V_{DD1}": "11",
  /** Physical pin 12: VMO; output. */
  "VMO": "12",
  /** Physical pin 13: CMO; output. */
  "CMO": "13",
  /** Physical pin 14: CMN; input. */
  "CMN": "14",
  /** Physical pin 15: GND; power_in. */
  "GND": "15",
  /** Physical pin 16: COMS; bidirectional. */
  "COMS": "16",
}) {
  override schema = "Analog:MLX90314xDF";
  override referencePrefix = "U";
}

/**
 * Programmable Automotive Sensor Interface (Signal Conditioner), SSOP-14
 *
 * KiCad symbol: `Analog:MLX90320xFR`. Reference prefix: `U`.
 * Footprint filters: SSOP*5.3x6.2mm*P0.65mm*.
 * @see https://www.mouser.com/datasheet/2/734/MLX90320-Datasheet-Melexis-953341.pdf
 * Keywords: sensor signal conditioning.
 * Default footprint: Package_SO:SSOP-14_5.3x6.2mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MLX90320xFR extends Component.withPins({
  /** Physical pin 1: INM; input. */
  "INM": "1",
  /** Physical pin 2: ANAGND; power_in. */
  "ANAGND": "2",
  /** Physical pin 3: INP; input. */
  "INP": "3",
  /** Physical pin 4: SUB; power_in. */
  "SUB": "4",
  /** Physical pin 5: TMP; passive. */
  "TMP": "5",
  /** Physical pin 6: DIGGND; power_in. */
  "DIGGND": "6",
  /** Physical pin 7: TEST1; passive. */
  "TEST1": "7",
  /** Physical pin 8: TESTOUT; passive. */
  "TESTOUT": "8",
  /** Physical pin 9: TESTIN1; passive. */
  "TESTIN1": "9",
  /** Physical pin 10: TESTIN2; passive. */
  "TESTIN2": "10",
  /** Physical pin 11: FLT; output. */
  "FLT": "11",
  /** Physical pin 12: OUT; bidirectional. */
  "OUT": "12",
  /** Physical pin 13: TEST2; passive. */
  "TEST2": "13",
  /** Physical pin 14: VDD; power_in. */
  "VDD": "14",
}) {
  override schema = "Analog:MLX90320xFR";
  override referencePrefix = "U";
}

/**
 * Wide Bandwidth Precision Analog Multiplier, DIP-14
 *
 * KiCad symbol: `Analog:MPY634KP`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see http://www.ti.com/lit/ds/symlink/mpy634.pdf
 * Keywords: analog multiplier.
 * Default footprint: Package_DIP:DIP-14_W7.62mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MPY634KP extends Component.withPins({
  /** Physical pin 1: X_{1}; input. */
  "X_{1}": "1",
  /** Physical pin 2: X_{2}; input. */
  "X_{2}": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: SF; passive. */
  "SF": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: Y_{1}; input. */
  "Y_{1}": "6",
  /** Physical pin 7: Y_{2}; input. */
  "Y_{2}": "7",
  /** Physical pin 8: -V_{S}; power_in. */
  "-V_{S}": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: Z_{2}; input. */
  "Z_{2}": "10",
  /** Physical pin 11: Z_{1}; input. */
  "Z_{1}": "11",
  /** Physical pin 12: V_{O}; output. */
  "V_{O}": "12",
  /** Physical pin 13: NC; no_connect. */
  "NC_13": "13",
  /** Physical pin 14: +V_{S}; power_in. */
  "+V_{S}": "14",
}) {
  override schema = "Analog:MPY634KP";
  override referencePrefix = "U";
}

/**
 * Wide Bandwidth Precision Analog Multiplier, SOIC-16W
 *
 * KiCad symbol: `Analog:MPY634KU`. Reference prefix: `U`.
 * Footprint filters: SOIC*7.5x10.3mm*P1.27mm*.
 * @see http://www.ti.com/lit/ds/symlink/mpy634.pdf
 * Keywords: analog multiplier.
 * Default footprint: Package_SO:SOIC-16W_7.5x10.3mm_P1.27mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class MPY634KU extends Component.withPins({
  /** Physical pin 1: X_{1}; input. */
  "X_{1}": "1",
  /** Physical pin 2: X_{2}; input. */
  "X_{2}": "2",
  /** Physical pin 3: NC; no_connect. */
  "NC_3": "3",
  /** Physical pin 4: SF; passive. */
  "SF": "4",
  /** Physical pin 5: NC; no_connect. */
  "NC_5": "5",
  /** Physical pin 6: Y_{1}; input. */
  "Y_{1}": "6",
  /** Physical pin 7: Y_{2}; input. */
  "Y_{2}": "7",
  /** Physical pin 8: NC; no_connect. */
  "NC_8": "8",
  /** Physical pin 9: NC; no_connect. */
  "NC_9": "9",
  /** Physical pin 10: -V_{S}; power_in. */
  "-V_{S}": "10",
  /** Physical pin 11: NC; no_connect. */
  "NC_11": "11",
  /** Physical pin 12: Z_{2}; input. */
  "Z_{2}": "12",
  /** Physical pin 13: Z_{1}; input. */
  "Z_{1}": "13",
  /** Physical pin 14: V_{O}; output. */
  "V_{O}": "14",
  /** Physical pin 15: NC; no_connect. */
  "NC_15": "15",
  /** Physical pin 16: +V_{S}; power_in. */
  "+V_{S}": "16",
}) {
  override schema = "Analog:MPY634KU";
  override referencePrefix = "U";
}

/**
 * Zero-Drift Programmable Gain Amplifier With Mux, x1/x2/x4/x8/x16/x32/x64/x128 gains, VSSOP-10
 *
 * KiCad symbol: `Analog:PGA112`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/sbos424c/sbos424c.pdf
 * Keywords: PGA SPI.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PGA112 extends Component.withPins({
  /** Physical pin 1: AV_{DD}; power_in. */
  "AV_{DD}": "1",
  /** Physical pin 2: CH1; input. */
  "CH1": "2",
  /** Physical pin 3: CH0/V_{CAL}; input. */
  "CH0/V_{CAL}": "3",
  /** Physical pin 4: V_{REF}; input. */
  "V_{REF}": "4",
  /** Physical pin 5: V_{OUT}; output. */
  "V_{OUT}": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: SCLK; input. */
  "SCLK": "7",
  /** Physical pin 8: DIO; bidirectional. */
  "DIO": "8",
  /** Physical pin 9: ~{CS}; input. */
  "~{CS}": "9",
  /** Physical pin 10: DV_{DD}; power_in. */
  "DV_{DD}": "10",
}) {
  override schema = "Analog:PGA112";
  override referencePrefix = "U";
}

/**
 * Zero-Drift Programmable Gain Amplifier With Mux, x1/x2/x5/x10/x20/x50/x100/x200 gains, VSSOP-10
 *
 * KiCad symbol: `Analog:PGA113`. Reference prefix: `U`.
 * Footprint filters: TSSOP*3x3mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/sbos424c/sbos424c.pdf
 * Keywords: PGA SPI.
 * Default footprint: Package_SO:TSSOP-10_3x3mm_P0.5mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PGA113 extends Component.withPins({
  /** Physical pin 1: AV_{DD}; power_in. */
  "AV_{DD}": "1",
  /** Physical pin 2: CH1; input. */
  "CH1": "2",
  /** Physical pin 3: CH0/V_{CAL}; input. */
  "CH0/V_{CAL}": "3",
  /** Physical pin 4: V_{REF}; input. */
  "V_{REF}": "4",
  /** Physical pin 5: V_{OUT}; output. */
  "V_{OUT}": "5",
  /** Physical pin 6: GND; power_in. */
  "GND": "6",
  /** Physical pin 7: SCLK; input. */
  "SCLK": "7",
  /** Physical pin 8: DIO; bidirectional. */
  "DIO": "8",
  /** Physical pin 9: ~{CS}; input. */
  "~{CS}": "9",
  /** Physical pin 10: DV_{DD}; power_in. */
  "DV_{DD}": "10",
}) {
  override schema = "Analog:PGA113";
  override referencePrefix = "U";
}

/**
 * Zero-Drift Programmable Gain Amplifier, 1/8...128 gain, 1V/V or 1,125V/V scaling factor, TSSOP-16
 *
 * KiCad symbol: `Analog:PGA281AxPW`. Reference prefix: `U`.
 * Footprint filters: TSSOP*4.4x5mm*P0.65mm*.
 * @see https://www.ti.com/lit/ds/symlink/pga281.pdf
 * Keywords: PGA.
 * Default footprint: Package_SO:TSSOP-16_4.4x5mm_P0.65mm.
 * Units: 1.
 * Included in BOM: yes.
 * Placed on board: yes.
 */
export class PGA281AxPW extends Component.withPins({
  /** Physical pin 11: VSOP; power_in. */
  "VSOP": "11",
  /** Physical pin 12: VSON; power_in. */
  "VSON": "12",
  /** Physical pin 13: VSP; power_in. */
  "VSP": "13",
  /** Physical pin 14: INP; input. */
  "INP": "14",
  /** Physical pin 15: INN; input. */
  "INN": "15",
  /** Physical pin 16: VSN; power_in. */
  "VSN": "16",
  /** Physical pin 1: DVDD; power_in. */
  "DVDD": "1",
  /** Physical pin 2: EF; output. */
  "EF": "2",
  /** Physical pin 3: G4; input. */
  "G4": "3",
  /** Physical pin 4: G3; input. */
  "G3": "4",
  /** Physical pin 5: G2; input. */
  "G2": "5",
  /** Physical pin 6: G1; input. */
  "G1": "6",
  /** Physical pin 7: G0; input. */
  "G0": "7",
  /** Physical pin 8: VON; output. */
  "VON": "8",
  /** Physical pin 9: VOP; output. */
  "VOP": "9",
  /** Physical pin 10: VOCM; input. */
  "VOCM": "10",
}) {
  override schema = "Analog:PGA281AxPW";
  override referencePrefix = "U";
}

