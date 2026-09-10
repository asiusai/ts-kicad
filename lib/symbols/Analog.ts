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
 */
export class AD5593R extends Component.withPins({
  "~{RESET}": "1",
  "A0": "2",
  "V_{DD}": "3",
  "IO0": "4",
  "IO1": "5",
  "IO2": "6",
  "IO3": "7",
  "V_{REF}": "8",
  "V_{LOGIC}": "9",
  "IO4": "10",
  "IO5": "11",
  "IO6": "12",
  "IO7": "13",
  "GND": "14",
  "SDA": "15",
  "SCL": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{RESET}": "input", A0: "input", "V_{DD}": "power_in", IO0: "bidirectional", IO1: "bidirectional", IO2: "bidirectional", IO3: "bidirectional", "V_{REF}": "passive", "V_{LOGIC}": "power_in", IO4: "bidirectional", IO5: "bidirectional", IO6: "bidirectional", IO7: "bidirectional", GND: "power_in", SDA: "bidirectional", SCL: "input", ...opts.pinTypes } });
  }
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
 */
export class AD630ARZ extends Component.withPins({
  "R_{in}A": "1",
  "CHA+": "2",
  "DIFF_OFF_ADJ1": "3",
  "DIFF_OFF_ADJ2": "4",
  "CM_OFF_ADJ1": "5",
  "CM_OFF_ADJ2": "6",
  "B/~{A}": "7",
  "-V_{S}": "8",
  "SEL_B": "9",
  "SEL_A": "10",
  "+V_{S}": "11",
  "COMP": "12",
  "V_{OUT}": "13",
  "R_{B}": "14",
  "R_{F}": "15",
  "R_{A}": "16",
  "R_{in}B": "17",
  "CHB+": "18",
  "CHB-": "19",
  "CHA-": "20",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "R_{in}A": "input", "CHA+": "input", DIFF_OFF_ADJ1: "passive", DIFF_OFF_ADJ2: "passive", CM_OFF_ADJ1: "passive", CM_OFF_ADJ2: "passive", "B/~{A}": "open_collector", "-V_{S}": "power_in", SEL_B: "input", SEL_A: "input", "+V_{S}": "power_in", COMP: "passive", "V_{OUT}": "output", "R_{B}": "output", "R_{F}": "output", "R_{A}": "output", "R_{in}B": "input", "CHB+": "input", "CHB-": "input", "CHA-": "input", ...opts.pinTypes } });
  }
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
 */
export class AD637xQ extends Component.withPins({
  "BUFF_IN": "1",
  "NIC_2": "2",
  "COM": "3",
  "OUTPUT_OFFSET": "4",
  "CS": "5",
  "DEN_INPUT": "6",
  "dB_OUTPUT": "7",
  "C_{AV}": "8",
  "RMS_OUT": "9",
  "-V_{S}": "10",
  "+V_{S}": "11",
  "NIC_12": "12",
  "V_{IN}": "13",
  "BUFF_OUT": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BUFF_IN: "input", NIC_2: "no_connect", COM: "power_in", OUTPUT_OFFSET: "input", CS: "input", DEN_INPUT: "input", dB_OUTPUT: "passive", "C_{AV}": "passive", RMS_OUT: "output", "-V_{S}": "power_in", "+V_{S}": "power_in", NIC_12: "no_connect", "V_{IN}": "input", BUFF_OUT: "output", ...opts.pinTypes } });
  }
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
 */
export class AD637xRZ extends Component.withPins({
  "BUFF_IN": "1",
  "NIC_2": "2",
  "COM": "3",
  "OUTPUT_OFFSET": "4",
  "CS": "5",
  "DEN_INPUT": "6",
  "dB_OUTPUT": "7",
  "NIC_8": "8",
  "NIC_9": "9",
  "C_{AV}": "10",
  "RMS_OUT": "11",
  "-V_{S}": "12",
  "+V_{S}": "13",
  "NIC_14": "14",
  "V_{IN}": "15",
  "BUFF_OUT": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { BUFF_IN: "input", NIC_2: "no_connect", COM: "power_in", OUTPUT_OFFSET: "input", CS: "input", DEN_INPUT: "input", dB_OUTPUT: "passive", NIC_8: "no_connect", NIC_9: "no_connect", "C_{AV}": "passive", RMS_OUT: "output", "-V_{S}": "power_in", "+V_{S}": "power_in", NIC_14: "no_connect", "V_{IN}": "input", BUFF_OUT: "output", ...opts.pinTypes } });
  }
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
 */
export class AD654JN extends Component.withPins({
  "F_{OUT}": "1",
  "COM": "2",
  "R_{T}": "3",
  "+V_{IN}": "4",
  "-V_{S}": "5",
  "C_{T}1": "6",
  "C_{T}2": "7",
  "+V_{S}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "F_{OUT}": "open_collector", COM: "power_in", "R_{T}": "input", "+V_{IN}": "input", "-V_{S}": "power_in", "C_{T}1": "passive", "C_{T}2": "passive", "+V_{S}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class AD654JR extends Component.withPins({
  "F_{OUT}": "1",
  "COM": "2",
  "R_{T}": "3",
  "+V_{IN}": "4",
  "-V_{S}": "5",
  "C_{T}1": "6",
  "C_{T}2": "7",
  "+V_{S}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "F_{OUT}": "open_collector", COM: "power_in", "R_{T}": "input", "+V_{IN}": "input", "-V_{S}": "power_in", "C_{T}1": "passive", "C_{T}2": "passive", "+V_{S}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class LF398H extends Component.withPins({
  "V^{+}": "1",
  "Adj": "2",
  "I": "3",
  "V^{-}": "4",
  "P5": "5",
  "C_{h}": "6",
  "T": "7",
  "Hold": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V^{+}": "passive", Adj: "passive", I: "input", "V^{-}": "passive", P5: "output", "C_{h}": "passive", T: "passive", Hold: "input", ...opts.pinTypes } });
  }
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
 */
export class LF398_DIP8 extends Component.withPins({
  "V^{+}": "1",
  "Adj": "2",
  "I": "3",
  "V^{-}": "4",
  "P5": "5",
  "C_{h}": "6",
  "T": "7",
  "Hold": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V^{+}": "passive", Adj: "passive", I: "input", "V^{-}": "passive", P5: "output", "C_{h}": "passive", T: "passive", Hold: "input", ...opts.pinTypes } });
  }
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
 */
export class LF398_SOIC14 extends Component.withPins({
  "I": "1",
  "NC_2": "2",
  "V^{-}": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "P7": "7",
  "C_{h}": "8",
  "NC_9": "9",
  "T": "10",
  "Hold": "11",
  "V^{+}": "12",
  "NC_13": "13",
  "Adj": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { I: "input", NC_2: "no_connect", "V^{-}": "passive", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", P7: "output", "C_{h}": "passive", NC_9: "no_connect", T: "passive", Hold: "input", "V^{+}": "passive", NC_13: "no_connect", Adj: "passive", ...opts.pinTypes } });
  }
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
 */
export class LF398_SOIC8 extends Component.withPins({
  "V^{+}": "1",
  "Adj": "2",
  "I": "3",
  "V^{-}": "4",
  "P5": "5",
  "C_{h}": "6",
  "T": "7",
  "Hold": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "V^{+}": "passive", Adj: "passive", I: "input", "V^{-}": "passive", P5: "output", "C_{h}": "passive", T: "passive", Hold: "input", ...opts.pinTypes } });
  }
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
 */
export class LM331N extends Component.withPins({
  "IOUT": "1",
  "IREF": "2",
  "FOUT": "3",
  "GND": "4",
  "RC": "5",
  "THRESH": "6",
  "COMPIN": "7",
  "VS": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IOUT: "output", IREF: "output", FOUT: "open_collector", GND: "power_in", RC: "input", THRESH: "input", COMPIN: "input", VS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LM231N extends Component.withPins({
  "IOUT": "1",
  "IREF": "2",
  "FOUT": "3",
  "GND": "4",
  "RC": "5",
  "THRESH": "6",
  "COMPIN": "7",
  "VS": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IOUT: "output", IREF: "output", FOUT: "open_collector", GND: "power_in", RC: "input", THRESH: "input", COMPIN: "input", VS: "power_in", ...opts.pinTypes } });
  }
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
 */
export class LTC1966 extends Component.withPins({
  "GND": "1",
  "IN1": "2",
  "IN2": "3",
  "OUT_RTN": "6",
  "V_{SS}": "4",
  "V_{OUT}": "5",
  "V_{DD}": "7",
  "~{ENABLE}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN1: "input", IN2: "input", OUT_RTN: "input", "V_{SS}": "power_in", "V_{OUT}": "output", "V_{DD}": "power_in", "~{ENABLE}": "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC1967 extends Component.withPins({
  "GND": "1",
  "IN1": "2",
  "IN2": "3",
  "OUT_RTN": "6",
  "NC": "4",
  "V_{OUT}": "5",
  "V^{+}": "7",
  "~{ENABLE}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN1: "input", IN2: "input", OUT_RTN: "input", NC: "no_connect", "V_{OUT}": "output", "V^{+}": "power_in", "~{ENABLE}": "passive", ...opts.pinTypes } });
  }
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
 */
export class LTC1968 extends Component.withPins({
  "GND": "1",
  "IN1": "2",
  "IN2": "3",
  "OUT_RTN": "6",
  "NC": "4",
  "V_{OUT}": "5",
  "V^{+}": "7",
  "~{ENABLE}": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { GND: "power_in", IN1: "input", IN2: "input", OUT_RTN: "input", NC: "no_connect", "V_{OUT}": "output", "V^{+}": "power_in", "~{ENABLE}": "passive", ...opts.pinTypes } });
  }
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
 */
export class MLX90314xDF extends Component.withPins({
  "IO1": "1",
  "IO2": "2",
  "TSTB": "3",
  "FLT": "4",
  "OFC": "5",
  "VBN": "6",
  "VBP": "7",
  "TMP": "8",
  "V_{DD}": "9",
  "FET": "10",
  "V_{DD1}": "11",
  "VMO": "12",
  "CMO": "13",
  "CMN": "14",
  "GND": "15",
  "COMS": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IO1: "bidirectional", IO2: "bidirectional", TSTB: "input", FLT: "passive", OFC: "output", VBN: "input", VBP: "input", TMP: "input", "V_{DD}": "power_in", FET: "output", "V_{DD1}": "power_in", VMO: "output", CMO: "output", CMN: "input", GND: "power_in", COMS: "bidirectional", ...opts.pinTypes } });
  }
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
 */
export class MLX90320xFR extends Component.withPins({
  "INM": "1",
  "ANAGND": "2",
  "INP": "3",
  "SUB": "4",
  "TMP": "5",
  "DIGGND": "6",
  "TEST1": "7",
  "TESTOUT": "8",
  "TESTIN1": "9",
  "TESTIN2": "10",
  "FLT": "11",
  "OUT": "12",
  "TEST2": "13",
  "VDD": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { INM: "input", ANAGND: "power_in", INP: "input", SUB: "power_in", TMP: "passive", DIGGND: "power_in", TEST1: "passive", TESTOUT: "passive", TESTIN1: "passive", TESTIN2: "passive", FLT: "output", OUT: "bidirectional", TEST2: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
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
 */
export class MPY634KP extends Component.withPins({
  "X_{1}": "1",
  "X_{2}": "2",
  "NC_3": "3",
  "SF": "4",
  "NC_5": "5",
  "Y_{1}": "6",
  "Y_{2}": "7",
  "-V_{S}": "8",
  "NC_9": "9",
  "Z_{2}": "10",
  "Z_{1}": "11",
  "V_{O}": "12",
  "NC_13": "13",
  "+V_{S}": "14",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "X_{1}": "input", "X_{2}": "input", NC_3: "no_connect", SF: "passive", NC_5: "no_connect", "Y_{1}": "input", "Y_{2}": "input", "-V_{S}": "power_in", NC_9: "no_connect", "Z_{2}": "input", "Z_{1}": "input", "V_{O}": "output", NC_13: "no_connect", "+V_{S}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class MPY634KU extends Component.withPins({
  "X_{1}": "1",
  "X_{2}": "2",
  "NC_3": "3",
  "SF": "4",
  "NC_5": "5",
  "Y_{1}": "6",
  "Y_{2}": "7",
  "NC_8": "8",
  "NC_9": "9",
  "-V_{S}": "10",
  "NC_11": "11",
  "Z_{2}": "12",
  "Z_{1}": "13",
  "V_{O}": "14",
  "NC_15": "15",
  "+V_{S}": "16",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "X_{1}": "input", "X_{2}": "input", NC_3: "no_connect", SF: "passive", NC_5: "no_connect", "Y_{1}": "input", "Y_{2}": "input", NC_8: "no_connect", NC_9: "no_connect", "-V_{S}": "power_in", NC_11: "no_connect", "Z_{2}": "input", "Z_{1}": "input", "V_{O}": "output", NC_15: "no_connect", "+V_{S}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class PGA112 extends Component.withPins({
  "AV_{DD}": "1",
  "CH1": "2",
  "CH0/V_{CAL}": "3",
  "V_{REF}": "4",
  "V_{OUT}": "5",
  "GND": "6",
  "SCLK": "7",
  "DIO": "8",
  "~{CS}": "9",
  "DV_{DD}": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "AV_{DD}": "power_in", CH1: "input", "CH0/V_{CAL}": "input", "V_{REF}": "input", "V_{OUT}": "output", GND: "power_in", SCLK: "input", DIO: "bidirectional", "~{CS}": "input", "DV_{DD}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class PGA113 extends Component.withPins({
  "AV_{DD}": "1",
  "CH1": "2",
  "CH0/V_{CAL}": "3",
  "V_{REF}": "4",
  "V_{OUT}": "5",
  "GND": "6",
  "SCLK": "7",
  "DIO": "8",
  "~{CS}": "9",
  "DV_{DD}": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "AV_{DD}": "power_in", CH1: "input", "CH0/V_{CAL}": "input", "V_{REF}": "input", "V_{OUT}": "output", GND: "power_in", SCLK: "input", DIO: "bidirectional", "~{CS}": "input", "DV_{DD}": "power_in", ...opts.pinTypes } });
  }
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
 */
export class PGA281AxPW extends Component.withPins({
  "VSOP": "11",
  "VSON": "12",
  "VSP": "13",
  "INP": "14",
  "INN": "15",
  "VSN": "16",
  "DVDD": "1",
  "EF": "2",
  "G4": "3",
  "G3": "4",
  "G2": "5",
  "G1": "6",
  "G0": "7",
  "VON": "8",
  "VOP": "9",
  "VOCM": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { VSOP: "power_in", VSON: "power_in", VSP: "power_in", INP: "input", INN: "input", VSN: "power_in", DVDD: "power_in", EF: "output", G4: "input", G3: "input", G2: "input", G1: "input", G0: "input", VON: "output", VOP: "output", VOCM: "input", ...opts.pinTypes } });
  }
  override schema = "Analog:PGA281AxPW";
  override referencePrefix = "U";
}
