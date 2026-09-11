// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Monostable
 *
 * KiCad symbol: `4xxx:4538`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see https://assets.nexperia.com/documents/data-sheet/HEF4538B.pdf
 * Keywords: CMOS.
 */
export class _4538 extends Component.withPins({
  "Cx_1": "1",
  "RxCx_2": "2",
  "R_3": "3",
  "Clk+_4": "4",
  "Clk-_5": "5",
  "Q_6": "6",
  "~{Q}_7": "7",
  "~{Q}_9": "9",
  "Q_10": "10",
  "Clk-_11": "11",
  "Clk+_12": "12",
  "R_13": "13",
  "RxCx_14": "14",
  "Cx_15": "15",
  "VSS": "8",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Cx_1: "input", RxCx_2: "input", R_3: "input", "Clk+_4": "input", "Clk-_5": "input", Q_6: "output", "~{Q}_7": "output", "~{Q}_9": "output", Q_10: "output", "Clk-_11": "input", "Clk+_12": "input", R_13: "input", RxCx_14: "input", Cx_15: "input", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4538";
  override referencePrefix = "U";
}

/**
 * Monostable
 *
 * KiCad symbol: `4xxx:14528`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see https://www.onsemi.com/pub/Collateral/MC14528B-D.PDF
 * Keywords: CMOS.
 */
export class _14528 extends Component.withPins({
  "Cx_1": "1",
  "RxCx_2": "2",
  "R_3": "3",
  "Clk+_4": "4",
  "Clk-_5": "5",
  "Q_6": "6",
  "~{Q}_7": "7",
  "~{Q}_9": "9",
  "Q_10": "10",
  "Clk-_11": "11",
  "Clk+_12": "12",
  "R_13": "13",
  "RxCx_14": "14",
  "Cx_15": "15",
  "VSS": "8",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Cx_1: "input", RxCx_2: "input", R_3: "input", "Clk+_4": "input", "Clk-_5": "input", Q_6: "output", "~{Q}_7": "output", "~{Q}_9": "output", Q_10: "output", "Clk-_11": "input", "Clk+_12": "input", R_13: "input", RxCx_14: "input", Cx_15: "input", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:14528";
  override referencePrefix = "U";
}

/**
 * Dual 4 to 1 Multiplexer
 *
 * KiCad symbol: `4xxx:14529`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.alldatasheet.com/datasheet-pdf/pdf/97272/HITACHI/HD14529B.html
 * Keywords: CMOS MUX MUX4.
 */
export class _14529 extends Component.withPins({
  "STX": "1",
  "X0": "2",
  "X1": "3",
  "X2": "4",
  "X3": "5",
  "A": "6",
  "B": "7",
  "VSS": "8",
  "Z": "9",
  "W": "10",
  "Y3": "11",
  "Y2": "12",
  "Y1": "13",
  "Y0": "14",
  "STY": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { STX: "input", X0: "input", X1: "input", X2: "input", X3: "input", A: "input", B: "input", VSS: "power_in", Z: "tri_state", W: "tri_state", Y3: "input", Y2: "input", Y1: "input", Y0: "input", STY: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:14529";
  override referencePrefix = "U";
}

/**
 * Monostable
 *
 * KiCad symbol: `4xxx:14538`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see https://www.onsemi.com/pub/Collateral/MC14538B-D.PDF
 * Keywords: CMOS.
 */
export class _14538 extends Component.withPins({
  "Cx_1": "1",
  "RxCx_2": "2",
  "R_3": "3",
  "Clk+_4": "4",
  "Clk-_5": "5",
  "Q_6": "6",
  "~{Q}_7": "7",
  "~{Q}_9": "9",
  "Q_10": "10",
  "Clk-_11": "11",
  "Clk+_12": "12",
  "R_13": "13",
  "RxCx_14": "14",
  "Cx_15": "15",
  "VSS": "8",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Cx_1: "input", RxCx_2: "input", R_3: "input", "Clk+_4": "input", "Clk-_5": "input", Q_6: "output", "~{Q}_7": "output", "~{Q}_9": "output", Q_10: "output", "Clk-_11": "input", "Clk+_12": "input", R_13: "input", RxCx_14: "input", Cx_15: "input", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:14538";
  override referencePrefix = "U";
}

/**
 * Quad Nor 2 inputs
 *
 * KiCad symbol: `4xxx:4001`. Reference prefix: `U`.
 * Footprint filters: DIP?14*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4000bms-01bms-02bms-25bms.pdf
 * Keywords: CMOS Nor2.
 */
export class _4001 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "VSS": "7",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "output", P4: "output", P5: "input", P6: "input", P8: "input", P9: "input", P10: "output", P11: "output", P12: "input", P13: "input", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4001";
  override referencePrefix = "U";
}

/**
 * Dual  4 input NOR gate
 *
 * KiCad symbol: `4xxx:4002`. Reference prefix: `U`.
 * Footprint filters: DIP?14*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4000bms-01bms-02bms-25bms.pdf
 * Keywords: CMOS Nor4.
 */
export class _4002 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "VSS": "7",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", P2: "input", P3: "input", P4: "input", P5: "input", P9: "input", P10: "input", P11: "input", P12: "input", P13: "output", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4002";
  override referencePrefix = "U";
}

/**
 * Hex Buffer Inverter
 *
 * KiCad symbol: `4xxx:4009`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.sycelectronica.com.ar/semiconductores/CD4009.pdf
 * Keywords: CMOS INV BUFFER high sink, VCC and VDD sep. VDD>VI>VCC!.
 */
export class _4009 extends Component.withPins({
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P15": "15",
  "VCC": "1",
  "VSS": "8",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P2: "output", P3: "input", P4: "output", P5: "input", P6: "output", P7: "input", P9: "input", P10: "output", P11: "input", P12: "output", P14: "input", P15: "output", VCC: "power_in", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4009";
  override referencePrefix = "U";
}

/**
 * Hex Buffer
 *
 * KiCad symbol: `4xxx:4010`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.ti.com/lit/ds/symlink/cd4010b-q1.pdf
 * Keywords: CMOS BUFFER high sink, VCC and VDD sep. VDD>VI>VCC!.
 */
export class _4010 extends Component.withPins({
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P15": "15",
  "VCC": "1",
  "VSS": "8",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P2: "output", P3: "input", P4: "output", P5: "input", P6: "output", P7: "input", P9: "input", P10: "output", P11: "input", P12: "output", P14: "input", P15: "output", VCC: "power_in", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4010";
  override referencePrefix = "U";
}

/**
 * Hex Schmitt trigger inverter
 *
 * KiCad symbol: `4xxx:40106`. Reference prefix: `U`.
 * Footprint filters: DIP?14*.
 * @see https://assets.nexperia.com/documents/data-sheet/HEF40106B.pdf
 * Keywords: CMOS.
 */
export class _40106 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "VSS": "7",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "output", P3: "input", P4: "output", P5: "input", P6: "output", P8: "output", P9: "input", P10: "output", P11: "input", P12: "output", P13: "input", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:40106";
  override referencePrefix = "U";
}

/**
 * Quad Nand 2 inputs
 *
 * KiCad symbol: `4xxx:4011`. Reference prefix: `U`.
 * Footprint filters: DIP?14*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4011bms-12bms-23bms.pdf
 * Keywords: CMOS Nand2.
 */
export class _4011 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "VSS": "7",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "output", P4: "output", P5: "input", P6: "input", P8: "input", P9: "input", P10: "output", P11: "output", P12: "input", P13: "input", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4011";
  override referencePrefix = "U";
}

/**
 * Dual 4 inputs Nand
 *
 * KiCad symbol: `4xxx:4012`. Reference prefix: `U`.
 * Footprint filters: DIP?14*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4011bms-12bms-23bms.pdf
 * Keywords: CMOS Nand4.
 */
export class _4012 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "VSS": "7",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", P2: "input", P3: "input", P4: "input", P5: "input", P9: "input", P10: "input", P11: "input", P12: "input", P13: "output", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4012";
  override referencePrefix = "U";
}

/**
 * Dual D  FlipFlop, Set & reset
 *
 * KiCad symbol: `4xxx:4013`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.onsemi.com/pub/Collateral/MC14013B-D.PDF
 * Keywords: CMOS DFF.
 */
export class _4013 extends Component.withPins({
  "Q_1": "1",
  "~{Q}_2": "2",
  "C_3": "3",
  "R_4": "4",
  "D_5": "5",
  "S_6": "6",
  "S_8": "8",
  "D_9": "9",
  "R_10": "10",
  "C_11": "11",
  "~{Q}_12": "12",
  "Q_13": "13",
  "VSS": "7",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Q_1: "output", "~{Q}_2": "output", C_3: "input", R_4: "input", D_5: "input", S_6: "input", S_8: "input", D_9: "input", R_10: "input", C_11: "input", "~{Q}_12": "output", Q_13: "output", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4013";
  override referencePrefix = "U";
}

/**
 * Quad Analog Switches
 *
 * KiCad symbol: `4xxx:4016`. Reference prefix: `U`.
 * Footprint filters: DIP?14*.
 * @see http://www.ti.com/lit/ds/symlink/cd4016b.pdf
 * Keywords: CMOS SWITCH.
 */
export class _4016 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P13": "13",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "VSS": "7",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P13: "input", P3: "passive", P4: "passive", P5: "input", P6: "input", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "input", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4016";
  override referencePrefix = "U";
}

/**
 * Johnson Counter ( 10 outputs )
 *
 * KiCad symbol: `4xxx:4017`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4017bms-22bms.pdf
 * Keywords: CNT CNT10.
 */
export class _4017 extends Component.withPins({
  "Q5": "1",
  "Q1": "2",
  "Q0": "3",
  "Q2": "4",
  "Q6": "5",
  "Q7": "6",
  "Q3": "7",
  "VSS": "8",
  "Q8": "9",
  "Q4": "10",
  "Q9": "11",
  "Cout": "12",
  "CKEN": "13",
  "CLK": "14",
  "Reset": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Q5: "output", Q1: "output", Q0: "output", Q2: "output", Q6: "output", Q7: "output", Q3: "output", VSS: "power_in", Q8: "output", Q4: "output", Q9: "output", Cout: "output", CKEN: "input", CLK: "input", Reset: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4017";
  override referencePrefix = "U";
}

/**
 * Binary counter 14 stages (asynchronous)
 *
 * KiCad symbol: `4xxx:4020`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4020bms-24bms-40bms.pdf
 * Keywords: CMOS CNT CNT14.
 */
export class _4020 extends Component.withPins({
  "Q11": "1",
  "Q12": "2",
  "Q13": "3",
  "Q5": "4",
  "Q4": "5",
  "Q6": "6",
  "Q3": "7",
  "VSS": "8",
  "Q0": "9",
  "CLK": "10",
  "Reset": "11",
  "Q8": "12",
  "Q7": "13",
  "Q9": "14",
  "Q10": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Q11: "output", Q12: "output", Q13: "output", Q5: "output", Q4: "output", Q6: "output", Q3: "output", VSS: "power_in", Q0: "output", CLK: "input", Reset: "input", Q8: "output", Q7: "output", Q9: "output", Q10: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4020";
  override referencePrefix = "U";
}

/**
 * 8-bit static shift register
 *
 * KiCad symbol: `4xxx:4021`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*, SOIC*5.3x10.2mm*P1.27mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/HEF4021B.pdf
 * Keywords: shift register SR PISO.
 */
export class _4021 extends Component.withPins({
  "D7": "1",
  "Q5": "2",
  "Q7": "3",
  "D3": "4",
  "D2": "5",
  "D1": "6",
  "D0": "7",
  "VSS": "8",
  "PL": "9",
  "CP": "10",
  "DS": "11",
  "Q6": "12",
  "D4": "13",
  "D5": "14",
  "D6": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D7: "input", Q5: "output", Q7: "output", D3: "input", D2: "input", D1: "input", D0: "input", VSS: "power_in", PL: "input", CP: "input", DS: "input", Q6: "output", D4: "input", D5: "input", D6: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4021";
  override referencePrefix = "U";
}

/**
 * Johnson Counter (8 states)
 *
 * KiCad symbol: `4xxx:4022`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4017bms-22bms.pdf
 * Keywords: CMOS CNT CNT8.
 */
export class _4022 extends Component.withPins({
  "Q1": "1",
  "Q0": "2",
  "Q2": "3",
  "Q5": "4",
  "Q6": "5",
  "NC_6": "6",
  "Q3": "7",
  "VSS": "8",
  "NC_9": "9",
  "Q7": "10",
  "Q4": "11",
  "Cout": "12",
  "CKEN": "13",
  "CLK": "14",
  "Reset": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Q1: "output", Q0: "output", Q2: "output", Q5: "output", Q6: "output", NC_6: "no_connect", Q3: "output", VSS: "power_in", NC_9: "no_connect", Q7: "output", Q4: "output", Cout: "output", CKEN: "input", CLK: "input", Reset: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4022";
  override referencePrefix = "U";
}

/**
 * Triple Nand 3 inputs
 *
 * KiCad symbol: `4xxx:4023`. Reference prefix: `U`.
 * Footprint filters: DIP?14*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4011bms-12bms-23bms.pdf
 * Keywords: CMOS Nand3.
 */
export class _4023 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P8": "8",
  "P9": "9",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "VSS": "7",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P8: "input", P9: "output", P3: "input", P4: "input", P5: "input", P6: "output", P10: "output", P11: "input", P12: "input", P13: "input", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4023";
  override referencePrefix = "U";
}

/**
 * Triple Nor 3 inputs
 *
 * KiCad symbol: `4xxx:4025`. Reference prefix: `U`.
 * Footprint filters: DIP?14*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4000bms-01bms-02bms-25bms.pdf
 * Keywords: CMOS Nor3.
 */
export class _4025 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P8": "8",
  "P9": "9",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "VSS": "7",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P8: "input", P9: "output", P3: "input", P4: "input", P5: "input", P6: "output", P10: "output", P11: "input", P12: "input", P13: "input", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4025";
  override referencePrefix = "U";
}

/**
 * Dual JK FlipFlop, set & reset
 *
 * KiCad symbol: `4xxx:4027`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4027bms.pdf
 * Keywords: CMOS JK JKFF.
 */
export class _4027 extends Component.withPins({
  "Q_1": "1",
  "~{Q}_2": "2",
  "C_3": "3",
  "R_4": "4",
  "K_5": "5",
  "J_6": "6",
  "S_7": "7",
  "S_9": "9",
  "J_10": "10",
  "K_11": "11",
  "R_12": "12",
  "C_13": "13",
  "~{Q}_14": "14",
  "Q_15": "15",
  "VSS": "8",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Q_1: "output", "~{Q}_2": "output", C_3: "input", R_4: "input", K_5: "input", J_6: "input", S_7: "input", S_9: "input", J_10: "input", K_11: "input", R_12: "input", C_13: "input", "~{Q}_14": "output", Q_15: "output", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4027";
  override referencePrefix = "U";
}

/**
 * Decoder 4 to 10 lines
 *
 * KiCad symbol: `4xxx:4028`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4028bms.pdf
 * Keywords: CMOS DECOD DECOD10.
 */
export class _4028 extends Component.withPins({
  "S4": "1",
  "S2": "2",
  "S0": "3",
  "S7": "4",
  "S9": "5",
  "S5": "6",
  "S6": "7",
  "VSS": "8",
  "S8": "9",
  "A": "10",
  "D": "11",
  "C": "12",
  "B": "13",
  "S1": "14",
  "S3": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { S4: "output", S2: "output", S0: "output", S7: "output", S9: "output", S5: "output", S6: "output", VSS: "power_in", S8: "output", A: "input", D: "input", C: "input", B: "input", S1: "output", S3: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4028";
  override referencePrefix = "U";
}

/**
 * Up/Down Counter
 *
 * KiCad symbol: `4xxx:4029`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4029bms.pdf
 * Keywords: CMOS COUNTER.
 */
export class _4029 extends Component.withPins({
  "PE": "1",
  "Q4": "2",
  "J4": "3",
  "J1": "4",
  "Cin": "5",
  "Q1": "6",
  "Cout": "7",
  "VSS": "8",
  "B/D": "9",
  "U/D": "10",
  "Q2": "11",
  "J2": "12",
  "J3": "13",
  "Q3": "14",
  "CK": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE: "input", Q4: "output", J4: "input", J1: "input", Cin: "input", Q1: "output", Cout: "output", VSS: "power_in", "B/D": "input", "U/D": "input", Q2: "output", J2: "input", J3: "input", Q3: "output", CK: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4029";
  override referencePrefix = "U";
}

/**
 * Binary Counter 12 stages (Asynchronous)
 *
 * KiCad symbol: `4xxx:4040`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4020bms-24bms-40bms.pdf
 * Keywords: CMOS CNT CNT12.
 */
export class _4040 extends Component.withPins({
  "Q11": "1",
  "Q5": "2",
  "Q4": "3",
  "Q6": "4",
  "Q3": "5",
  "Q2": "6",
  "Q1": "7",
  "VSS": "8",
  "Q0": "9",
  "CLK": "10",
  "Reset": "11",
  "Q8": "12",
  "Q7": "13",
  "Q9": "14",
  "Q10": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Q11: "output", Q5: "output", Q4: "output", Q6: "output", Q3: "output", Q2: "output", Q1: "output", VSS: "power_in", Q0: "output", CLK: "input", Reset: "input", Q8: "output", Q7: "output", Q9: "output", Q10: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4040";
  override referencePrefix = "U";
}

/**
 * Phase Comp & VCO
 *
 * KiCad symbol: `4xxx:4046`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see https://assets.nexperia.com/documents/data-sheet/HEF4046B.pdf
 * Keywords: CMOS PLL.
 */
export class _4046 extends Component.withPins({
  "PCP": "1",
  "PC1": "2",
  "RefIn": "3",
  "FOUT": "4",
  "Inh": "5",
  "C1": "6",
  "C2": "7",
  "VSS": "8",
  "VCOin": "9",
  "SFout": "10",
  "R1": "11",
  "R2": "12",
  "PC2": "13",
  "SigIn": "14",
  "ZOUT": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PCP: "output", PC1: "output", RefIn: "input", FOUT: "output", Inh: "input", C1: "input", C2: "input", VSS: "power_in", VCOin: "input", SFout: "output", R1: "input", R2: "input", PC2: "tri_state", SigIn: "input", ZOUT: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4046";
  override referencePrefix = "U";
}

/**
 * Monostable/Astable Multivibrator
 *
 * KiCad symbol: `4xxx:4047`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/cd4047b.pdf
 * Keywords: CMOS monostable astable multivibrator.
 */
export class _4047 extends Component.withPins({
  "C": "1",
  "R": "2",
  "RC_COMMON": "3",
  "~{ASTABLE}": "4",
  "ASTABLE": "5",
  "-TRIGGER": "6",
  "VSS": "7",
  "+TRIGGER": "8",
  "EXT_RESET": "9",
  "Q": "10",
  "~{Q}": "11",
  "RETRIGGER": "12",
  "OSC_OUT": "13",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { C: "input", R: "input", RC_COMMON: "input", "~{ASTABLE}": "input", ASTABLE: "input", "-TRIGGER": "input", VSS: "power_in", "+TRIGGER": "input", EXT_RESET: "input", Q: "output", "~{Q}": "output", RETRIGGER: "input", OSC_OUT: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4047";
  override referencePrefix = "U";
}

/**
 * Hex Buffer Inverter
 *
 * KiCad symbol: `4xxx:4049`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.intersil.com/content/dam/intersil/documents/cd40/cd4049ubms.pdf
 * Keywords: CMOS BUFFER.
 */
export class _4049 extends Component.withPins({
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P15": "15",
  "VCC": "1",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P2: "output", P3: "input", P4: "output", P5: "input", P6: "output", P7: "input", P9: "input", P10: "output", P11: "input", P12: "output", P14: "input", P15: "output", VCC: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4049";
  override referencePrefix = "U";
}

/**
 * Hex Buffer
 *
 * KiCad symbol: `4xxx:4050`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.intersil.com/content/dam/intersil/documents/cd40/cd4050bms.pdf
 * Keywords: CMOS BUFFER.
 */
export class _4050 extends Component.withPins({
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P14": "14",
  "P15": "15",
  "VCC": "1",
  "VSS": "8",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P2: "output", P3: "input", P4: "output", P5: "input", P6: "output", P7: "input", P9: "input", P10: "output", P11: "input", P12: "output", P14: "input", P15: "output", VCC: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4050";
  override referencePrefix = "U";
}

/**
 * Analog Multiplexer 8 to 1 lins
 *
 * KiCad symbol: `4xxx:4051`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4051bms-52bms-53bms.pdf
 * Keywords: CMOS MUX MUX8.
 */
export class _4051 extends Component.withPins({
  "X4": "1",
  "X6": "2",
  "X": "3",
  "X7": "4",
  "X5": "5",
  "Inh": "6",
  "VEE": "7",
  "VSS": "8",
  "C": "9",
  "B": "10",
  "A": "11",
  "X3": "12",
  "X0": "13",
  "X1": "14",
  "X2": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { X4: "passive", X6: "passive", X: "passive", X7: "passive", X5: "passive", Inh: "input", VEE: "power_in", VSS: "power_in", C: "input", B: "input", A: "input", X3: "passive", X0: "passive", X1: "passive", X2: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4051";
  override referencePrefix = "U";
}

/**
 * Dual Analog Multiplexer 4 to 1 line
 *
 * KiCad symbol: `4xxx:4052`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4051bms-52bms-53bms.pdf
 * Keywords: CMOS MUX MUX4.
 */
export class _4052 extends Component.withPins({
  "Y0": "1",
  "Y2": "2",
  "Y": "3",
  "Y3": "4",
  "Y1": "5",
  "Inh": "6",
  "VEE": "7",
  "VSS": "8",
  "B": "9",
  "A": "10",
  "X3": "11",
  "X0": "12",
  "X": "13",
  "X1": "14",
  "X2": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Y0: "passive", Y2: "passive", Y: "passive", Y3: "passive", Y1: "passive", Inh: "input", VEE: "power_in", VSS: "power_in", B: "input", A: "input", X3: "passive", X0: "passive", X: "passive", X1: "passive", X2: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4052";
  override referencePrefix = "U";
}

/**
 * Triple analog Multiplexer 2 to 1 line
 *
 * KiCad symbol: `4xxx:4053`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4051bms-52bms-53bms.pdf
 * Keywords: CMOS MUX MUX2.
 */
export class _4053 extends Component.withPins({
  "Y1": "1",
  "Y0": "2",
  "Z1": "3",
  "Z": "4",
  "Z0": "5",
  "Inh": "6",
  "VEE": "7",
  "VSS": "8",
  "C": "9",
  "B": "10",
  "A": "11",
  "X0": "12",
  "X1": "13",
  "X": "14",
  "Y": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Y1: "passive", Y0: "passive", Z1: "passive", Z: "passive", Z0: "passive", Inh: "input", VEE: "power_in", VSS: "power_in", C: "input", B: "input", A: "input", X0: "passive", X1: "passive", X: "passive", Y: "passive", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4053";
  override referencePrefix = "U";
}

/**
 * BCD to 7-Segment Decoder/Driver, Strobed-Latch Function
 *
 * KiCad symbol: `4xxx:4056`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/cd4056b.pdf
 * Keywords: CMOS LCD 7-segment decoder driver.
 */
export class _4056 extends Component.withPins({
  "STROBE": "1",
  "2^2": "2",
  "2^1": "3",
  "2^3": "4",
  "2^0": "5",
  "FREQ.IN": "6",
  "VEE": "7",
  "VSS": "8",
  "a": "9",
  "b": "10",
  "c": "11",
  "d": "12",
  "e": "13",
  "g": "14",
  "f": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { STROBE: "input", "2^2": "input", "2^1": "input", "2^3": "input", "2^0": "input", "FREQ.IN": "input", VEE: "power_in", VSS: "power_in", a: "output", b: "output", c: "output", d: "output", e: "output", g: "output", f: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4056";
  override referencePrefix = "U";
}

/**
 * Binary counter (14-stages) and oscillator
 *
 * KiCad symbol: `4xxx:4060`. Reference prefix: `U`.
 * Footprint filters: DIP?16*7.62*, TSSOP*16*4.4x5*, SOIC*16*3.9x9.9*.
 * @see https://www.st.com/resource/en/datasheet/m74hc4060.pdf
 * Keywords: binary counter oscillator.
 */
export class _4060 extends Component.withPins({
  "Q12": "1",
  "Q13": "2",
  "Q14": "3",
  "Q6": "4",
  "Q5": "5",
  "Q7": "6",
  "Q4": "7",
  "VSS": "8",
  "~{Φ0}": "9",
  "Φ0": "10",
  "~{Φ1}": "11",
  "CLR": "12",
  "Q9": "13",
  "Q8": "14",
  "Q10": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Q12: "output", Q13: "output", Q14: "output", Q6: "output", Q5: "output", Q7: "output", Q4: "output", VSS: "power_in", "~{Φ0}": "input", "Φ0": "input", "~{Φ1}": "input", CLR: "input", Q9: "output", Q8: "output", Q10: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4060";
  override referencePrefix = "U";
}

/**
 * Quad Analog Switches
 *
 * KiCad symbol: `4xxx:4066`. Reference prefix: `U`.
 * Footprint filters: DIP?14*.
 * @see http://www.ti.com/lit/ds/symlink/cd4066b.pdf
 * Keywords: CMOS SWITCH.
 */
export class _4066 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P13": "13",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "VSS": "7",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P13: "input", P3: "passive", P4: "passive", P5: "input", P6: "input", P8: "passive", P9: "passive", P10: "passive", P11: "passive", P12: "input", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4066";
  override referencePrefix = "U";
}

/**
 * Hex inverter
 *
 * KiCad symbol: `4xxx:4069`. Reference prefix: `U`.
 * Footprint filters: DIP?14*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4069ubms.pdf
 * Keywords: CMOS NOT.
 */
export class _4069 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "VSS": "7",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "output", P3: "input", P4: "output", P5: "input", P6: "output", P8: "output", P9: "input", P10: "output", P11: "input", P12: "output", P13: "input", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4069";
  override referencePrefix = "U";
}

/**
 * Quad Xor 2 inputs
 *
 * KiCad symbol: `4xxx:4070`. Reference prefix: `U`.
 * Footprint filters: DIP?14*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4070bms-77bms.pdf
 * Keywords: CMOS XOR2.
 */
export class _4070 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "VSS": "7",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "output", P4: "output", P5: "input", P6: "input", P8: "input", P9: "input", P10: "output", P11: "output", P12: "input", P13: "input", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4070";
  override referencePrefix = "U";
}

/**
 * Quad Or 2 inputs
 *
 * KiCad symbol: `4xxx:4071`. Reference prefix: `U`.
 * Footprint filters: DIP?14*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4071bms-72bms-75bms.pdf
 * Keywords: CMOS OR2.
 */
export class _4071 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "VSS": "7",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "output", P4: "output", P5: "input", P6: "input", P8: "input", P9: "input", P10: "output", P11: "output", P12: "input", P13: "input", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4071";
  override referencePrefix = "U";
}

/**
 * Dual 4 input OR gate
 *
 * KiCad symbol: `4xxx:4072`. Reference prefix: `U`.
 * Footprint filters: DIP?14*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4071bms-72bms-75bms.pdf
 * Keywords: CMOS OR4.
 */
export class _4072 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "VSS": "7",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "output", P2: "input", P3: "input", P4: "input", P5: "input", P9: "input", P10: "input", P11: "input", P12: "input", P13: "output", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4072";
  override referencePrefix = "U";
}

/**
 * Triple And 3 inputs
 *
 * KiCad symbol: `4xxx:4073`. Reference prefix: `U`.
 * Footprint filters: DIP?14*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4073bms-81bms-82bms.pdf
 * Keywords: CMOS And3.
 */
export class _4073 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P8": "8",
  "P9": "9",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "VSS": "7",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P8: "input", P9: "output", P3: "input", P4: "input", P5: "input", P6: "output", P10: "output", P11: "input", P12: "input", P13: "input", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4073";
  override referencePrefix = "U";
}

/**
 * Triple Or 3 inputs
 *
 * KiCad symbol: `4xxx:4075`. Reference prefix: `U`.
 * Footprint filters: DIP?14*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4071bms-72bms-75bms.pdf
 * Keywords: CMOS Or3.
 */
export class _4075 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P8": "8",
  "P9": "9",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "VSS": "7",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P8: "input", P9: "output", P3: "input", P4: "input", P5: "input", P6: "output", P10: "output", P11: "input", P12: "input", P13: "input", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4075";
  override referencePrefix = "U";
}

/**
 * Quad Xnor 2 inputs
 *
 * KiCad symbol: `4xxx:4077`. Reference prefix: `U`.
 * Footprint filters: DIP?14*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4076bms.pdf
 * Keywords: CMOS XOR XNOR XNOR2.
 */
export class _4077 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "VSS": "7",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "output", P4: "output", P5: "input", P6: "input", P8: "input", P9: "input", P10: "output", P11: "output", P12: "input", P13: "input", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4077";
  override referencePrefix = "U";
}

/**
 * Quad And 2 inputs
 *
 * KiCad symbol: `4xxx:4081`. Reference prefix: `U`.
 * Footprint filters: DIP?14*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd40/cd4073bms-81bms-82bms.pdf
 * Keywords: CMOS And2.
 */
export class _4081 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "VSS": "7",
  "VDD": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "output", P4: "output", P5: "input", P6: "input", P8: "input", P9: "input", P10: "output", P11: "output", P12: "input", P13: "input", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4081";
  override referencePrefix = "U";
}

/**
 * Dual Monostable Multivibrator
 *
 * KiCad symbol: `4xxx:4098`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/cd4098b.pdf
 * Keywords: CMOS monostable multivibrator.
 */
export class _4098 extends Component.withPins({
  "Cx1": "1",
  "Rx1_Cx1": "2",
  "~{Reset1}": "3",
  "+TR1": "4",
  "-TR1": "5",
  "Q1": "6",
  "~{Q1}": "7",
  "~{Q2}": "9",
  "Q2": "10",
  "-TR2": "11",
  "+TR2": "12",
  "~{Reset2}": "13",
  "Rx2_Cx2": "14",
  "Cx2": "15",
  "VSS": "8",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Cx1: "input", Rx1_Cx1: "input", "~{Reset1}": "input", "+TR1": "input", "-TR1": "input", Q1: "output", "~{Q1}": "output", "~{Q2}": "output", Q2: "output", "-TR2": "input", "+TR2": "input", "~{Reset2}": "input", Rx2_Cx2: "input", Cx2: "input", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4098";
  override referencePrefix = "U";
}

/**
 * CMOS Hex Voltage-Level Shifter for TTL-to-CMOS or CMOS-to-CMOS, DIP-16/SOIC-16/TSSOP-16
 *
 * KiCad symbol: `4xxx:4504`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/cd4504b.pdf
 * Keywords: Level-shifter.
 */
export class _4504 extends Component.withPins({
  "VCC": "1",
  "Aout": "2",
  "Ain": "3",
  "Bout": "4",
  "Bin": "5",
  "Cout": "6",
  "Cin": "7",
  "VSS": "8",
  "Din": "9",
  "Dout": "10",
  "Ein": "11",
  "Eout": "12",
  "Select": "13",
  "Fin": "14",
  "Fout": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", Aout: "output", Ain: "input", Bout: "output", Bin: "input", Cout: "output", Cin: "input", VSS: "power_in", Din: "input", Dout: "output", Ein: "input", Eout: "output", Select: "input", Fin: "input", Fout: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4504";
  override referencePrefix = "U";
}

/**
 * 4 bits programmable counter
 *
 * KiCad symbol: `4xxx:4510`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://pdf.datasheetcatalog.com/datasheets/150/109581_DS.pdf
 * Keywords: CMOS CNT CNT4.
 */
export class _4510 extends Component.withPins({
  "PE": "1",
  "Q4": "2",
  "A4": "3",
  "A1": "4",
  "CI": "5",
  "Q1": "6",
  "CO": "7",
  "VSS": "8",
  "RST": "9",
  "U/D": "10",
  "Q2": "11",
  "A2": "12",
  "A3": "13",
  "Q3": "14",
  "CLK": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { PE: "input", Q4: "output", A4: "input", A1: "input", CI: "input", Q1: "output", CO: "output", VSS: "power_in", RST: "input", "U/D": "input", Q2: "output", A2: "input", A3: "input", Q3: "output", CLK: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4510";
  override referencePrefix = "U";
}

/**
 * Dual BCD Up-Counter
 *
 * KiCad symbol: `4xxx:4518`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd45/cd4518bms-20bms.pdf
 * Keywords: CMOS.
 */
export class _4518 extends Component.withPins({
  "CK_1": "1",
  "Enable_2": "2",
  "Q1_3": "3",
  "Q2_4": "4",
  "Q3_5": "5",
  "Q4_6": "6",
  "Reset_7": "7",
  "CK_9": "9",
  "Enable_10": "10",
  "Q1_11": "11",
  "Q2_12": "12",
  "Q3_13": "13",
  "Q4_14": "14",
  "Reset_15": "15",
  "VSS": "8",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CK_1: "input", Enable_2: "input", Q1_3: "output", Q2_4: "output", Q3_5: "output", Q4_6: "output", Reset_7: "input", CK_9: "input", Enable_10: "input", Q1_11: "output", Q2_12: "output", Q3_13: "output", Q4_14: "output", Reset_15: "input", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4518";
  override referencePrefix = "U";
}

/**
 * Dual Binary Up-Counter
 *
 * KiCad symbol: `4xxx:4520`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://www.intersil.com/content/dam/Intersil/documents/cd45/cd4518bms-20bms.pdf
 * Keywords: CMOS.
 */
export class _4520 extends Component.withPins({
  "CK_1": "1",
  "Enable_2": "2",
  "Q1_3": "3",
  "Q2_4": "4",
  "Q3_5": "5",
  "Q4_6": "6",
  "Reset_7": "7",
  "CK_9": "9",
  "Enable_10": "10",
  "Q1_11": "11",
  "Q2_12": "12",
  "Q3_13": "13",
  "Q4_14": "14",
  "Reset_15": "15",
  "VSS": "8",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CK_1: "input", Enable_2: "input", Q1_3: "output", Q2_4: "output", Q3_5: "output", Q4_6: "output", Reset_7: "input", CK_9: "input", Enable_10: "input", Q1_11: "output", Q2_12: "output", Q3_13: "output", Q4_14: "output", Reset_15: "input", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4520";
  override referencePrefix = "U";
}

/**
 * Monostable
 *
 * KiCad symbol: `4xxx:4528`. Reference prefix: `U`.
 * Footprint filters: DIP?16*.
 * @see http://datasheet.octopart.com/CD4528BCN-Fairchild-datasheet-143503.pdf
 * Keywords: CMOS.
 */
export class _4528 extends Component.withPins({
  "Cx_1": "1",
  "RxCx_2": "2",
  "R_3": "3",
  "Clk+_4": "4",
  "Clk-_5": "5",
  "Q_6": "6",
  "~{Q}_7": "7",
  "~{Q}_9": "9",
  "Q_10": "10",
  "Clk-_11": "11",
  "Clk+_12": "12",
  "R_13": "13",
  "RxCx_14": "14",
  "Cx_15": "15",
  "VSS": "8",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { Cx_1: "input", RxCx_2: "input", R_3: "input", "Clk+_4": "input", "Clk-_5": "input", Q_6: "output", "~{Q}_7": "output", "~{Q}_9": "output", Q_10: "output", "Clk-_11": "input", "Clk+_12": "input", R_13: "input", RxCx_14: "input", Cx_15: "input", VSS: "power_in", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4528";
  override referencePrefix = "U";
}

/**
 * BCD to 7-segment latch/decoder/driver
 *
 * KiCad symbol: `4xxx:4543`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*, SOIC*3.9x9.9mm*P1.27mm*, TSSOP*4.4x5mm*P0.65mm*.
 * @see http://www.ti.com/lit/ds/symlink/cd4543b.pdf
 * Keywords: CMOS 7-segment latch decoder driver.
 */
export class _4543 extends Component.withPins({
  "~{LE}": "1",
  "D2": "2",
  "D1": "3",
  "D3": "4",
  "D0": "5",
  "PH": "6",
  "BL": "7",
  "VSS": "8",
  "Qa": "9",
  "Qb": "10",
  "Qc": "11",
  "Qd": "12",
  "Qe": "13",
  "Qg": "14",
  "Qf": "15",
  "VDD": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{LE}": "input", D2: "input", D1: "input", D3: "input", D0: "input", PH: "input", BL: "input", VSS: "power_in", Qa: "output", Qb: "output", Qc: "output", Qd: "output", Qe: "output", Qg: "output", Qf: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:4543";
  override referencePrefix = "U";
}

/**
 * 20V, CMOS Decade Counter/Divider, 7 Segment Decoder, Ripple Blanking, Lamp Test, 100mW/Output, DIP-16
 *
 * KiCad symbol: `4xxx:CD4033B`. Reference prefix: `U`.
 * Footprint filters: DIP*W7.62mm*.
 * @see https://www.ti.com/lit/ds/symlink/cd4033b.pdf
 * Keywords: schmitt triggered.
 * Default footprint: Package_DIP:DIP-16_W7.62mm.
 */
export class CD4033B extends Component.withPins({
  "CLOCK": "1",
  "CLOCK_INHIBIT": "2",
  "RIPPLE_BLANKING_IN": "3",
  "RIPPLE_BLANKING_OUT": "4",
  "CARRY_OUT": "5",
  "f": "6",
  "g": "7",
  "V_{SS}": "8",
  "d": "9",
  "a": "10",
  "e": "11",
  "b": "12",
  "c": "13",
  "LAMP_TEST": "14",
  "RESET": "15",
  "V_{DD}": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CLOCK: "input", CLOCK_INHIBIT: "input", RIPPLE_BLANKING_IN: "input", RIPPLE_BLANKING_OUT: "output", CARRY_OUT: "output", f: "output", g: "output", "V_{SS}": "power_in", d: "output", a: "output", e: "output", b: "output", c: "output", LAMP_TEST: "input", RESET: "input", "V_{DD}": "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:CD4033B";
  override referencePrefix = "U";
}

/**
 * Quad 2-Input NAND Schmitt Trigger, SOIC-14
 *
 * KiCad symbol: `4xxx:HEF4093B`. Reference prefix: `U`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/HEF4093B.pdf
 * Keywords: NAND2.
 */
export class HEF4093B extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "P9": "9",
  "P10": "10",
  "P11": "11",
  "P12": "12",
  "P13": "13",
  "GND": "7",
  "VCC": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P3: "output", P4: "output", P5: "input", P6: "input", P8: "input", P9: "input", P10: "output", P11: "output", P12: "input", P13: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "4xxx:HEF4093B";
  override referencePrefix = "U";
}

/**
 * 8-bit serial-in parallel-out shift register, 3..15V
 *
 * KiCad symbol: `4xxx:HEF4094B`. Reference prefix: `U`.
 * Footprint filters: SOIC*16*3.9x9.9mm*P1.27mm*, TSSOP*16*4.4x5mm*P0.65mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/HEF4094B.pdf
 * Keywords: shift-store store logic shift-and-store 8-stage.
 */
export class HEF4094B extends Component.withPins({
  "QP1": "5",
  "QP2": "6",
  "QP3": "7",
  "V_{SS}": "8",
  "QS1": "9",
  "QS2": "10",
  "QP7": "11",
  "QP6": "12",
  "QP5": "13",
  "QP4": "14",
  "OE": "15",
  "V_{DD}": "16",
  "STR": "1",
  "D": "2",
  "CP": "3",
  "QP0": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { QP1: "tri_state", QP2: "tri_state", QP3: "tri_state", "V_{SS}": "power_in", QS1: "output", QS2: "output", QP7: "tri_state", QP6: "tri_state", QP5: "tri_state", QP4: "tri_state", OE: "input", "V_{DD}": "power_in", STR: "input", D: "input", CP: "input", QP0: "tri_state", ...opts.pinTypes } });
  }
  override schema = "4xxx:HEF4094B";
  override referencePrefix = "U";
}
