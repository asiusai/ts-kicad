// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Single Digit 7-segment RGB LED Display, 1-inch digit height, common anode
 *
 * KiCad symbol: `Display_Character:AD-121F2`. Reference prefix: `D`.
 * Footprint filters: AD*121F2*.
 * @see http://usasyck.com/products/AD-121F2_cat_e.pdf
 * Keywords: display RGB LED digit 7-segment.
 * Default footprint: Display_7Segment:AD-121F2.
 */
export class AD_121F2 extends Component.withPins({
  "e-green": "1",
  "d-blue": "2",
  "d-green": "3",
  "d-red": "4",
  "c-blue": "5",
  "c-red": "6",
  "e-blue": "9",
  "e-red": "10",
  "c-green": "11",
  "f-green": "13",
  "f-red": "14",
  "g-green": "15",
  "b-green": "16",
  "anode": "17",
  "f-blue": "18",
  "g-blue": "19",
  "g-red": "20",
  "a-blue": "21",
  "a-green": "22",
  "a-red": "23",
  "b-blue": "24",
  "b-red": "25",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "e-green": "passive", "d-blue": "passive", "d-green": "passive", "d-red": "passive", "c-blue": "passive", "c-red": "passive", "e-blue": "passive", "e-red": "passive", "c-green": "passive", "f-green": "passive", "f-red": "passive", "g-green": "passive", "b-green": "passive", anode: "passive", "f-blue": "passive", "g-blue": "passive", "g-red": "passive", "a-blue": "passive", "a-green": "passive", "a-red": "passive", "b-blue": "passive", "b-red": "passive", ...opts.pinTypes } });
  }
  override schema = "Display_Character:AD-121F2";
  override referencePrefix = "D";
}

/**
 * 4 digit 7 segment Green LED, common anode
 *
 * KiCad symbol: `Display_Character:CA56-12CGKWA`. Reference prefix: `U`.
 * Footprint filters: *CA56*12CGKWA*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/CA56-12CGKWA(Ver.9A).pdf
 * Keywords: display LED.
 * Default footprint: Display_7Segment:CA56-12CGKWA.
 */
export class CA56_12CGKWA extends Component.withPins({
  "e": "1",
  "d": "2",
  "DPX": "3",
  "c": "4",
  "g": "5",
  "CA4": "6",
  "b": "7",
  "CA3": "8",
  "CA2": "9",
  "f": "10",
  "a": "11",
  "CA1": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { e: "input", d: "input", DPX: "input", c: "input", g: "input", CA4: "input", b: "input", CA3: "input", CA2: "input", f: "input", a: "input", CA1: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:CA56-12CGKWA";
  override referencePrefix = "U";
}

/**
 * 4 digit 7 segment high efficiency red LED, common anode
 *
 * KiCad symbol: `Display_Character:CA56-12EWA`. Reference prefix: `U`.
 * Footprint filters: *CA56*12EWA*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/CA56-12EWA.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:CA56-12EWA.
 */
export class CA56_12EWA extends Component.withPins({
  "e": "1",
  "d": "2",
  "DPX": "3",
  "c": "4",
  "g": "5",
  "CA4": "6",
  "b": "7",
  "CA3": "8",
  "CA2": "9",
  "f": "10",
  "a": "11",
  "CA1": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { e: "input", d: "input", DPX: "input", c: "input", g: "input", CA4: "input", b: "input", CA3: "input", CA2: "input", f: "input", a: "input", CA1: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:CA56-12EWA";
  override referencePrefix = "U";
}

/**
 * 4 digit 7 segment super bright orange LED, common anode
 *
 * KiCad symbol: `Display_Character:CA56-12SEKWA`. Reference prefix: `U`.
 * Footprint filters: *CA56*12SEKWA*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/CA56-12SEKWA(Ver.7A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:CA56-12SEKWA.
 */
export class CA56_12SEKWA extends Component.withPins({
  "e": "1",
  "d": "2",
  "DPX": "3",
  "c": "4",
  "g": "5",
  "CA4": "6",
  "b": "7",
  "CA3": "8",
  "CA2": "9",
  "f": "10",
  "a": "11",
  "CA1": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { e: "input", d: "input", DPX: "input", c: "input", g: "input", CA4: "input", b: "input", CA3: "input", CA2: "input", f: "input", a: "input", CA1: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:CA56-12SEKWA";
  override referencePrefix = "U";
}

/**
 * 4 digit 7 segment super bright red LED, common anode
 *
 * KiCad symbol: `Display_Character:CA56-12SRWA`. Reference prefix: `U`.
 * Footprint filters: *CA56*12SRWA*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/CA56-12SRWA.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:CA56-12SRWA.
 */
export class CA56_12SRWA extends Component.withPins({
  "e": "1",
  "d": "2",
  "DPX": "3",
  "c": "4",
  "g": "5",
  "CA4": "6",
  "b": "7",
  "CA3": "8",
  "CA2": "9",
  "f": "10",
  "a": "11",
  "CA1": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { e: "input", d: "input", DPX: "input", c: "input", g: "input", CA4: "input", b: "input", CA3: "input", CA2: "input", f: "input", a: "input", CA1: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:CA56-12SRWA";
  override referencePrefix = "U";
}

/**
 * 4 digit 7 segment hyper red LED, common anode
 *
 * KiCad symbol: `Display_Character:CA56-12SURKWA`. Reference prefix: `U`.
 * Footprint filters: *CA56*12SURKWA*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/CA56-12SURKWA(Ver.8A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:CA56-12SURKWA.
 */
export class CA56_12SURKWA extends Component.withPins({
  "e": "1",
  "d": "2",
  "DPX": "3",
  "c": "4",
  "g": "5",
  "CA4": "6",
  "b": "7",
  "CA3": "8",
  "CA2": "9",
  "f": "10",
  "a": "11",
  "CA1": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { e: "input", d: "input", DPX: "input", c: "input", g: "input", CA4: "input", b: "input", CA3: "input", CA2: "input", f: "input", a: "input", CA1: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:CA56-12SURKWA";
  override referencePrefix = "U";
}

/**
 * 4 digit 7 segment super bright yellow LED, common anode
 *
 * KiCad symbol: `Display_Character:CA56-12SYKWA`. Reference prefix: `U`.
 * Footprint filters: *CA56*12SYKWA*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/CA56-12SYKWA(Ver.6A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:CA56-12SYKWA.
 */
export class CA56_12SYKWA extends Component.withPins({
  "e": "1",
  "d": "2",
  "DPX": "3",
  "c": "4",
  "g": "5",
  "CA4": "6",
  "b": "7",
  "CA3": "8",
  "CA2": "9",
  "f": "10",
  "a": "11",
  "CA1": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { e: "input", d: "input", DPX: "input", c: "input", g: "input", CA4: "input", b: "input", CA3: "input", CA2: "input", f: "input", a: "input", CA1: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:CA56-12SYKWA";
  override referencePrefix = "U";
}

/**
 * 4 digit 7 segment green LED, common cathode
 *
 * KiCad symbol: `Display_Character:CC56-12CGKWA`. Reference prefix: `U`.
 * Footprint filters: *CA56*12CGKWA*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/CC56-12CGKWA(Ver.8A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:CA56-12CGKWA.
 */
export class CC56_12CGKWA extends Component.withPins({
  "e": "1",
  "d": "2",
  "DPX": "3",
  "c": "4",
  "g": "5",
  "CC4": "6",
  "b": "7",
  "CC3": "8",
  "CC2": "9",
  "f": "10",
  "a": "11",
  "CC1": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { e: "input", d: "input", DPX: "input", c: "input", g: "input", CC4: "input", b: "input", CC3: "input", CC2: "input", f: "input", a: "input", CC1: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:CC56-12CGKWA";
  override referencePrefix = "U";
}

/**
 * 4 digit 7 segment high efficiency red LED, common cathode
 *
 * KiCad symbol: `Display_Character:CC56-12EWA`. Reference prefix: `U`.
 * Footprint filters: *CA56*12EWA*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/CA56-12EWA.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:CA56-12EWA.
 */
export class CC56_12EWA extends Component.withPins({
  "e": "1",
  "d": "2",
  "DPX": "3",
  "c": "4",
  "g": "5",
  "CC4": "6",
  "b": "7",
  "CC3": "8",
  "CC2": "9",
  "f": "10",
  "a": "11",
  "CC1": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { e: "input", d: "input", DPX: "input", c: "input", g: "input", CC4: "input", b: "input", CC3: "input", CC2: "input", f: "input", a: "input", CC1: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:CC56-12EWA";
  override referencePrefix = "U";
}

/**
 * 4 digit 7 segment green LED, common cathode
 *
 * KiCad symbol: `Display_Character:CC56-12GWA`. Reference prefix: `U`.
 * Footprint filters: CC56?12GWA*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/CC56-12GWA.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:CC56-12GWA.
 */
export class CC56_12GWA extends Component.withPins({
  "e": "1",
  "d": "2",
  "DPX": "3",
  "c": "4",
  "g": "5",
  "CC4": "6",
  "b": "7",
  "CC3": "8",
  "CC2": "9",
  "f": "10",
  "a": "11",
  "CC1": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { e: "input", d: "input", DPX: "input", c: "input", g: "input", CC4: "input", b: "input", CC3: "input", CC2: "input", f: "input", a: "input", CC1: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:CC56-12GWA";
  override referencePrefix = "U";
}

/**
 * 4 digit 7 segment super bright orange LED, common cathode
 *
 * KiCad symbol: `Display_Character:CC56-12SEKWA`. Reference prefix: `U`.
 * Footprint filters: *CA56*12SEKWA*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/CC56-12SEKWA(Ver.7A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:CA56-12SEKWA.
 */
export class CC56_12SEKWA extends Component.withPins({
  "e": "1",
  "d": "2",
  "DPX": "3",
  "c": "4",
  "g": "5",
  "CC4": "6",
  "b": "7",
  "CC3": "8",
  "CC2": "9",
  "f": "10",
  "a": "11",
  "CC1": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { e: "input", d: "input", DPX: "input", c: "input", g: "input", CC4: "input", b: "input", CC3: "input", CC2: "input", f: "input", a: "input", CC1: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:CC56-12SEKWA";
  override referencePrefix = "U";
}

/**
 * 4 digit 7 segment super bright red LED, common cathode
 *
 * KiCad symbol: `Display_Character:CC56-12SRWA`. Reference prefix: `U`.
 * Footprint filters: *CA56*12SRWA*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/CC56-12SRWA.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:CA56-12SRWA.
 */
export class CC56_12SRWA extends Component.withPins({
  "e": "1",
  "d": "2",
  "DPX": "3",
  "c": "4",
  "g": "5",
  "CC4": "6",
  "b": "7",
  "CC3": "8",
  "CC2": "9",
  "f": "10",
  "a": "11",
  "CC1": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { e: "input", d: "input", DPX: "input", c: "input", g: "input", CC4: "input", b: "input", CC3: "input", CC2: "input", f: "input", a: "input", CC1: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:CC56-12SRWA";
  override referencePrefix = "U";
}

/**
 * 4 digit 7 segment hyper red LED, common cathode
 *
 * KiCad symbol: `Display_Character:CC56-12SURKWA`. Reference prefix: `U`.
 * Footprint filters: *CA56*12SURKWA*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/CC56-12SURKWA(Ver.7A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:CA56-12SURKWA.
 */
export class CC56_12SURKWA extends Component.withPins({
  "e": "1",
  "d": "2",
  "DPX": "3",
  "c": "4",
  "g": "5",
  "CC4": "6",
  "b": "7",
  "CC3": "8",
  "CC2": "9",
  "f": "10",
  "a": "11",
  "CC1": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { e: "input", d: "input", DPX: "input", c: "input", g: "input", CC4: "input", b: "input", CC3: "input", CC2: "input", f: "input", a: "input", CC1: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:CC56-12SURKWA";
  override referencePrefix = "U";
}

/**
 * 4 digit 7 segment super bright yellow LED, common cathode
 *
 * KiCad symbol: `Display_Character:CC56-12SYKWA`. Reference prefix: `U`.
 * Footprint filters: *CA56*12SYKWA*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/CC56-12SYKWA(Ver.6A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:CA56-12SYKWA.
 */
export class CC56_12SYKWA extends Component.withPins({
  "e": "1",
  "d": "2",
  "DPX": "3",
  "c": "4",
  "g": "5",
  "CC4": "6",
  "b": "7",
  "CC3": "8",
  "CC2": "9",
  "f": "10",
  "a": "11",
  "CC1": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { e: "input", d: "input", DPX: "input", c: "input", g: "input", CC4: "input", b: "input", CC3: "input", CC2: "input", f: "input", a: "input", CC1: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:CC56-12SYKWA";
  override referencePrefix = "U";
}

/**
 * 4 digit 7 segment  yellow LED, common cathode
 *
 * KiCad symbol: `Display_Character:CC56-12YWA`. Reference prefix: `U`.
 * Footprint filters: CC56?12YWA*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/CC56-12YWA.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:CC56-12YWA.
 */
export class CC56_12YWA extends Component.withPins({
  "e": "1",
  "d": "2",
  "DPX": "3",
  "c": "4",
  "g": "5",
  "CC4": "6",
  "b": "7",
  "CC3": "8",
  "CC2": "9",
  "f": "10",
  "a": "11",
  "CC1": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { e: "input", d: "input", DPX: "input", c: "input", g: "input", CC4: "input", b: "input", CC3: "input", CC2: "input", f: "input", a: "input", CC1: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:CC56-12YWA";
  override referencePrefix = "U";
}

/**
 * One digit 7 segment ultra bright red LED, low current, common cathode
 *
 * KiCad symbol: `Display_Character:D168K`. Reference prefix: `U`.
 * Footprint filters: D1X8K*.
 * @see https://ia800903.us.archive.org/24/items/CTKD1x8K/Cromatek%20D168K.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:D1X8K.
 */
export class D168K extends Component.withPins({
  "E": "1",
  "D": "2",
  "CC_3": "3",
  "C": "4",
  "DP": "5",
  "B": "6",
  "A": "7",
  "CC_8": "8",
  "F": "9",
  "G": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { E: "input", D: "input", CC_3: "input", C: "input", DP: "input", B: "input", A: "input", CC_8: "input", F: "input", G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:D168K";
  override referencePrefix = "U";
}

/**
 * One digit 7 segment yellowish-green LED, low current, common cathode
 *
 * KiCad symbol: `Display_Character:D148K`. Reference prefix: `U`.
 * Footprint filters: D1X8K*.
 * @see https://ia800903.us.archive.org/24/items/CTKD1x8K/Cromatek%20D168K.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:D1X8K.
 */
export class D148K extends Component.withPins({
  "E": "1",
  "D": "2",
  "CC_3": "3",
  "C": "4",
  "DP": "5",
  "B": "6",
  "A": "7",
  "CC_8": "8",
  "F": "9",
  "G": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { E: "input", D: "input", CC_3: "input", C: "input", DP: "input", B: "input", A: "input", CC_8: "input", F: "input", G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:D148K";
  override referencePrefix = "U";
}

/**
 * One digit 7 segment orangish-red LED, low current, common cathode
 *
 * KiCad symbol: `Display_Character:D198K`. Reference prefix: `U`.
 * Footprint filters: D1X8K*.
 * @see https://ia800903.us.archive.org/24/items/CTKD1x8K/Cromatek%20D168K.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:D1X8K.
 */
export class D198K extends Component.withPins({
  "E": "1",
  "D": "2",
  "CC_3": "3",
  "C": "4",
  "DP": "5",
  "B": "6",
  "A": "7",
  "CC_8": "8",
  "F": "9",
  "G": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { E: "input", D: "input", CC_3: "input", C: "input", DP: "input", B: "input", A: "input", CC_8: "input", F: "input", G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:D198K";
  override referencePrefix = "U";
}

/**
 * One digit 7 segment ultra bright blue LED, low current, common cathode
 *
 * KiCad symbol: `Display_Character:D1X8K-14BL`. Reference prefix: `U`.
 * Footprint filters: D1X8K*.
 * @see https://ia800903.us.archive.org/24/items/CTKD1x8K/Cromatek%20D168K.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:D1X8K.
 */
export class D1X8K_14BL extends Component.withPins({
  "E": "1",
  "D": "2",
  "CC_3": "3",
  "C": "4",
  "DP": "5",
  "B": "6",
  "A": "7",
  "CC_8": "8",
  "F": "9",
  "G": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { E: "input", D: "input", CC_3: "input", C: "input", DP: "input", B: "input", A: "input", CC_8: "input", F: "input", G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:D1X8K-14BL";
  override referencePrefix = "U";
}

/**
 * Double 7 segment green LED common anode
 *
 * KiCad symbol: `Display_Character:DA04-11CGKWA`. Reference prefix: `U`.
 * Footprint filters: *DA04*11*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/DA04-11CGKWA(Ver.6A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:DA04-11CGKWA.
 */
export class DA04_11CGKWA extends Component.withPins({
  "DIG1_C": "1",
  "DIG1_E": "2",
  "DIG1_D": "3",
  "DIG1_CA": "4",
  "DIG2_CA": "5",
  "DIG2_D": "6",
  "DIG2_E": "7",
  "DIG2_C": "8",
  "DIG2_G": "9",
  "DIG2_A": "10",
  "DIG2_F": "11",
  "DIG2_B": "12",
  "DIG1_B": "13",
  "DIG1_F": "14",
  "DIG1_A": "15",
  "DIG1_G": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG1_C: "input", DIG1_E: "input", DIG1_D: "input", DIG1_CA: "input", DIG2_CA: "input", DIG2_D: "input", DIG2_E: "input", DIG2_C: "input", DIG2_G: "input", DIG2_A: "input", DIG2_F: "input", DIG2_B: "input", DIG1_B: "input", DIG1_F: "input", DIG1_A: "input", DIG1_G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DA04-11CGKWA";
  override referencePrefix = "U";
}

/**
 * Double 7 segment hyper red LED common anode
 *
 * KiCad symbol: `Display_Character:DA04-11SURKWA`. Reference prefix: `U`.
 * Footprint filters: *DA04*11*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/DA04-11SURKWA(Ver.10A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:DA04-11SURKWA.
 */
export class DA04_11SURKWA extends Component.withPins({
  "DIG1_C": "1",
  "DIG1_E": "2",
  "DIG1_D": "3",
  "DIG1_CA": "4",
  "DIG2_CA": "5",
  "DIG2_D": "6",
  "DIG2_E": "7",
  "DIG2_C": "8",
  "DIG2_G": "9",
  "DIG2_A": "10",
  "DIG2_F": "11",
  "DIG2_B": "12",
  "DIG1_B": "13",
  "DIG1_F": "14",
  "DIG1_A": "15",
  "DIG1_G": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG1_C: "input", DIG1_E: "input", DIG1_D: "input", DIG1_CA: "input", DIG2_CA: "input", DIG2_D: "input", DIG2_E: "input", DIG2_C: "input", DIG2_G: "input", DIG2_A: "input", DIG2_F: "input", DIG2_B: "input", DIG1_B: "input", DIG1_F: "input", DIG1_A: "input", DIG1_G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DA04-11SURKWA";
  override referencePrefix = "U";
}

/**
 * Double 7 segment high efficient red LED common anode
 *
 * KiCad symbol: `Display_Character:DA04-11EWA`. Reference prefix: `U`.
 * Footprint filters: *DA04*11*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/DA04-11EWA.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:DA04-11SURKWA.
 */
export class DA04_11EWA extends Component.withPins({
  "DIG1_C": "1",
  "DIG1_E": "2",
  "DIG1_D": "3",
  "DIG1_CA": "4",
  "DIG2_CA": "5",
  "DIG2_D": "6",
  "DIG2_E": "7",
  "DIG2_C": "8",
  "DIG2_G": "9",
  "DIG2_A": "10",
  "DIG2_F": "11",
  "DIG2_B": "12",
  "DIG1_B": "13",
  "DIG1_F": "14",
  "DIG1_A": "15",
  "DIG1_G": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG1_C: "input", DIG1_E: "input", DIG1_D: "input", DIG1_CA: "input", DIG2_CA: "input", DIG2_D: "input", DIG2_E: "input", DIG2_C: "input", DIG2_G: "input", DIG2_A: "input", DIG2_F: "input", DIG2_B: "input", DIG1_B: "input", DIG1_F: "input", DIG1_A: "input", DIG1_G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DA04-11EWA";
  override referencePrefix = "U";
}

/**
 * Double 7 segment green LED common anode
 *
 * KiCad symbol: `Display_Character:DA04-11GWA`. Reference prefix: `U`.
 * Footprint filters: *DA04*11*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/DA04-11GWA.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:DA04-11CGKWA.
 */
export class DA04_11GWA extends Component.withPins({
  "DIG1_C": "1",
  "DIG1_E": "2",
  "DIG1_D": "3",
  "DIG1_CA": "4",
  "DIG2_CA": "5",
  "DIG2_D": "6",
  "DIG2_E": "7",
  "DIG2_C": "8",
  "DIG2_G": "9",
  "DIG2_A": "10",
  "DIG2_F": "11",
  "DIG2_B": "12",
  "DIG1_B": "13",
  "DIG1_F": "14",
  "DIG1_A": "15",
  "DIG1_G": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG1_C: "input", DIG1_E: "input", DIG1_D: "input", DIG1_CA: "input", DIG2_CA: "input", DIG2_D: "input", DIG2_E: "input", DIG2_C: "input", DIG2_G: "input", DIG2_A: "input", DIG2_F: "input", DIG2_B: "input", DIG1_B: "input", DIG1_F: "input", DIG1_A: "input", DIG1_G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DA04-11GWA";
  override referencePrefix = "U";
}

/**
 * Double 7 segment super bright orange LED common anode
 *
 * KiCad symbol: `Display_Character:DA04-11SEKWA`. Reference prefix: `U`.
 * Footprint filters: *DA04*11*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/DA04-11SEKWA(Ver.9A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:DA04-11SEKWA.
 */
export class DA04_11SEKWA extends Component.withPins({
  "DIG1_C": "1",
  "DIG1_E": "2",
  "DIG1_D": "3",
  "DIG1_CA": "4",
  "DIG2_CA": "5",
  "DIG2_D": "6",
  "DIG2_E": "7",
  "DIG2_C": "8",
  "DIG2_G": "9",
  "DIG2_A": "10",
  "DIG2_F": "11",
  "DIG2_B": "12",
  "DIG1_B": "13",
  "DIG1_F": "14",
  "DIG1_A": "15",
  "DIG1_G": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG1_C: "input", DIG1_E: "input", DIG1_D: "input", DIG1_CA: "input", DIG2_CA: "input", DIG2_D: "input", DIG2_E: "input", DIG2_C: "input", DIG2_G: "input", DIG2_A: "input", DIG2_F: "input", DIG2_B: "input", DIG1_B: "input", DIG1_F: "input", DIG1_A: "input", DIG1_G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DA04-11SEKWA";
  override referencePrefix = "U";
}

/**
 * Double 7 segment super bright red LED common anode
 *
 * KiCad symbol: `Display_Character:DA04-11SRWA`. Reference prefix: `U`.
 * Footprint filters: *DA04*11*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/DA04-11SRWA.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:DA04-11SURKWA.
 */
export class DA04_11SRWA extends Component.withPins({
  "DIG1_C": "1",
  "DIG1_E": "2",
  "DIG1_D": "3",
  "DIG1_CA": "4",
  "DIG2_CA": "5",
  "DIG2_D": "6",
  "DIG2_E": "7",
  "DIG2_C": "8",
  "DIG2_G": "9",
  "DIG2_A": "10",
  "DIG2_F": "11",
  "DIG2_B": "12",
  "DIG1_B": "13",
  "DIG1_F": "14",
  "DIG1_A": "15",
  "DIG1_G": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG1_C: "input", DIG1_E: "input", DIG1_D: "input", DIG1_CA: "input", DIG2_CA: "input", DIG2_D: "input", DIG2_E: "input", DIG2_C: "input", DIG2_G: "input", DIG2_A: "input", DIG2_F: "input", DIG2_B: "input", DIG1_B: "input", DIG1_F: "input", DIG1_A: "input", DIG1_G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DA04-11SRWA";
  override referencePrefix = "U";
}

/**
 * Double 7 segment super bright yellow LED common anode
 *
 * KiCad symbol: `Display_Character:DA04-11SYKWA`. Reference prefix: `U`.
 * Footprint filters: *DA04*11*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/DA04-11SYKWA(Ver.6A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:DA04-11SYKWA.
 */
export class DA04_11SYKWA extends Component.withPins({
  "DIG1_C": "1",
  "DIG1_E": "2",
  "DIG1_D": "3",
  "DIG1_CA": "4",
  "DIG2_CA": "5",
  "DIG2_D": "6",
  "DIG2_E": "7",
  "DIG2_C": "8",
  "DIG2_G": "9",
  "DIG2_A": "10",
  "DIG2_F": "11",
  "DIG2_B": "12",
  "DIG1_B": "13",
  "DIG1_F": "14",
  "DIG1_A": "15",
  "DIG1_G": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG1_C: "input", DIG1_E: "input", DIG1_D: "input", DIG1_CA: "input", DIG2_CA: "input", DIG2_D: "input", DIG2_E: "input", DIG2_C: "input", DIG2_G: "input", DIG2_A: "input", DIG2_F: "input", DIG2_B: "input", DIG1_B: "input", DIG1_F: "input", DIG1_A: "input", DIG1_G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DA04-11SYKWA";
  override referencePrefix = "U";
}

/**
 * Double digit 7 segment green LED common anode
 *
 * KiCad symbol: `Display_Character:DA56-11CGKWA`. Reference prefix: `U`.
 * Footprint filters: *DA56*11*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/DA56-11CGKWA(Ver.16A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:DA56-11CGKWA.
 */
export class DA56_11CGKWA extends Component.withPins({
  "DIG1_E": "1",
  "DIG1_D": "2",
  "DIG1_C": "3",
  "DP1": "4",
  "DIG2_E": "5",
  "DIG2_D": "6",
  "DIG2_G": "7",
  "DIG2_C": "8",
  "DP2": "9",
  "DIG2_B": "10",
  "DIG2_A": "11",
  "DIG2_F": "12",
  "DIG2_CA": "13",
  "DIG1_CA": "14",
  "DIG1_B": "15",
  "DIG1_A": "16",
  "DIG1_G": "17",
  "DIG1_F": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG1_E: "input", DIG1_D: "input", DIG1_C: "input", DP1: "input", DIG2_E: "input", DIG2_D: "input", DIG2_G: "input", DIG2_C: "input", DP2: "input", DIG2_B: "input", DIG2_A: "input", DIG2_F: "input", DIG2_CA: "input", DIG1_CA: "input", DIG1_B: "input", DIG1_A: "input", DIG1_G: "input", DIG1_F: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DA56-11CGKWA";
  override referencePrefix = "U";
}

/**
 * Double digit 7 segment hyper red LED common anode
 *
 * KiCad symbol: `Display_Character:DA56-11SURKWA`. Reference prefix: `U`.
 * Footprint filters: *DA56*11*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/DA56-11SURKWA(Ver.11A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:DA56-11SURKWA.
 */
export class DA56_11SURKWA extends Component.withPins({
  "DIG1_E": "1",
  "DIG1_D": "2",
  "DIG1_C": "3",
  "DP1": "4",
  "DIG2_E": "5",
  "DIG2_D": "6",
  "DIG2_G": "7",
  "DIG2_C": "8",
  "DP2": "9",
  "DIG2_B": "10",
  "DIG2_A": "11",
  "DIG2_F": "12",
  "DIG2_CA": "13",
  "DIG1_CA": "14",
  "DIG1_B": "15",
  "DIG1_A": "16",
  "DIG1_G": "17",
  "DIG1_F": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG1_E: "input", DIG1_D: "input", DIG1_C: "input", DP1: "input", DIG2_E: "input", DIG2_D: "input", DIG2_G: "input", DIG2_C: "input", DP2: "input", DIG2_B: "input", DIG2_A: "input", DIG2_F: "input", DIG2_CA: "input", DIG1_CA: "input", DIG1_B: "input", DIG1_A: "input", DIG1_G: "input", DIG1_F: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DA56-11SURKWA";
  override referencePrefix = "U";
}

/**
 * Double digit 7 segment high efficient red LED common anode
 *
 * KiCad symbol: `Display_Character:DA56-11EWA`. Reference prefix: `U`.
 * Footprint filters: *DA56*11*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/DA56-11EWA.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:DA56-11SURKWA.
 */
export class DA56_11EWA extends Component.withPins({
  "DIG1_E": "1",
  "DIG1_D": "2",
  "DIG1_C": "3",
  "DP1": "4",
  "DIG2_E": "5",
  "DIG2_D": "6",
  "DIG2_G": "7",
  "DIG2_C": "8",
  "DP2": "9",
  "DIG2_B": "10",
  "DIG2_A": "11",
  "DIG2_F": "12",
  "DIG2_CA": "13",
  "DIG1_CA": "14",
  "DIG1_B": "15",
  "DIG1_A": "16",
  "DIG1_G": "17",
  "DIG1_F": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG1_E: "input", DIG1_D: "input", DIG1_C: "input", DP1: "input", DIG2_E: "input", DIG2_D: "input", DIG2_G: "input", DIG2_C: "input", DP2: "input", DIG2_B: "input", DIG2_A: "input", DIG2_F: "input", DIG2_CA: "input", DIG1_CA: "input", DIG1_B: "input", DIG1_A: "input", DIG1_G: "input", DIG1_F: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DA56-11EWA";
  override referencePrefix = "U";
}

/**
 * Double digit 7 segment green LED common anode
 *
 * KiCad symbol: `Display_Character:DA56-11GWA`. Reference prefix: `U`.
 * Footprint filters: *DA56*11*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/DA56-11GWA.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:DA56-11CGKWA.
 */
export class DA56_11GWA extends Component.withPins({
  "DIG1_E": "1",
  "DIG1_D": "2",
  "DIG1_C": "3",
  "DP1": "4",
  "DIG2_E": "5",
  "DIG2_D": "6",
  "DIG2_G": "7",
  "DIG2_C": "8",
  "DP2": "9",
  "DIG2_B": "10",
  "DIG2_A": "11",
  "DIG2_F": "12",
  "DIG2_CA": "13",
  "DIG1_CA": "14",
  "DIG1_B": "15",
  "DIG1_A": "16",
  "DIG1_G": "17",
  "DIG1_F": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG1_E: "input", DIG1_D: "input", DIG1_C: "input", DP1: "input", DIG2_E: "input", DIG2_D: "input", DIG2_G: "input", DIG2_C: "input", DP2: "input", DIG2_B: "input", DIG2_A: "input", DIG2_F: "input", DIG2_CA: "input", DIG1_CA: "input", DIG1_B: "input", DIG1_A: "input", DIG1_G: "input", DIG1_F: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DA56-11GWA";
  override referencePrefix = "U";
}

/**
 * Double digit 7 segment super bright orange LED common anode
 *
 * KiCad symbol: `Display_Character:DA56-11SEKWA`. Reference prefix: `U`.
 * Footprint filters: *DA56*11*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/DA56-11SEKWA(Ver.9A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:DA56-11SEKWA.
 */
export class DA56_11SEKWA extends Component.withPins({
  "DIG1_E": "1",
  "DIG1_D": "2",
  "DIG1_C": "3",
  "DP1": "4",
  "DIG2_E": "5",
  "DIG2_D": "6",
  "DIG2_G": "7",
  "DIG2_C": "8",
  "DP2": "9",
  "DIG2_B": "10",
  "DIG2_A": "11",
  "DIG2_F": "12",
  "DIG2_CA": "13",
  "DIG1_CA": "14",
  "DIG1_B": "15",
  "DIG1_A": "16",
  "DIG1_G": "17",
  "DIG1_F": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG1_E: "input", DIG1_D: "input", DIG1_C: "input", DP1: "input", DIG2_E: "input", DIG2_D: "input", DIG2_G: "input", DIG2_C: "input", DP2: "input", DIG2_B: "input", DIG2_A: "input", DIG2_F: "input", DIG2_CA: "input", DIG1_CA: "input", DIG1_B: "input", DIG1_A: "input", DIG1_G: "input", DIG1_F: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DA56-11SEKWA";
  override referencePrefix = "U";
}

/**
 * Double digit 7 segment super bright red LED common anode
 *
 * KiCad symbol: `Display_Character:DA56-11SRWA`. Reference prefix: `U`.
 * Footprint filters: *DA56*11*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/DA56-11SRWA.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:DA56-11SURKWA.
 */
export class DA56_11SRWA extends Component.withPins({
  "DIG1_E": "1",
  "DIG1_D": "2",
  "DIG1_C": "3",
  "DP1": "4",
  "DIG2_E": "5",
  "DIG2_D": "6",
  "DIG2_G": "7",
  "DIG2_C": "8",
  "DP2": "9",
  "DIG2_B": "10",
  "DIG2_A": "11",
  "DIG2_F": "12",
  "DIG2_CA": "13",
  "DIG1_CA": "14",
  "DIG1_B": "15",
  "DIG1_A": "16",
  "DIG1_G": "17",
  "DIG1_F": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG1_E: "input", DIG1_D: "input", DIG1_C: "input", DP1: "input", DIG2_E: "input", DIG2_D: "input", DIG2_G: "input", DIG2_C: "input", DP2: "input", DIG2_B: "input", DIG2_A: "input", DIG2_F: "input", DIG2_CA: "input", DIG1_CA: "input", DIG1_B: "input", DIG1_A: "input", DIG1_G: "input", DIG1_F: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DA56-11SRWA";
  override referencePrefix = "U";
}

/**
 * Double digit 7 segment super bright yellow LED common anode
 *
 * KiCad symbol: `Display_Character:DA56-11SYKWA`. Reference prefix: `U`.
 * Footprint filters: *DA56*11*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/DA56-11SYKWA(Ver.11A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:DA56-11SYKWA.
 */
export class DA56_11SYKWA extends Component.withPins({
  "DIG1_E": "1",
  "DIG1_D": "2",
  "DIG1_C": "3",
  "DP1": "4",
  "DIG2_E": "5",
  "DIG2_D": "6",
  "DIG2_G": "7",
  "DIG2_C": "8",
  "DP2": "9",
  "DIG2_B": "10",
  "DIG2_A": "11",
  "DIG2_F": "12",
  "DIG2_CA": "13",
  "DIG1_CA": "14",
  "DIG1_B": "15",
  "DIG1_A": "16",
  "DIG1_G": "17",
  "DIG1_F": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG1_E: "input", DIG1_D: "input", DIG1_C: "input", DP1: "input", DIG2_E: "input", DIG2_D: "input", DIG2_G: "input", DIG2_C: "input", DP2: "input", DIG2_B: "input", DIG2_A: "input", DIG2_F: "input", DIG2_CA: "input", DIG1_CA: "input", DIG1_B: "input", DIG1_A: "input", DIG1_G: "input", DIG1_F: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DA56-11SYKWA";
  override referencePrefix = "U";
}

/**
 * Double digit 7 segment super bright yellow LED common anode
 *
 * KiCad symbol: `Display_Character:DA56-11YWA`. Reference prefix: `U`.
 * Footprint filters: *DA56*11*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/DA56-11YWA.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:DA56-11SYKWA.
 */
export class DA56_11YWA extends Component.withPins({
  "DIG1_E": "1",
  "DIG1_D": "2",
  "DIG1_C": "3",
  "DP1": "4",
  "DIG2_E": "5",
  "DIG2_D": "6",
  "DIG2_G": "7",
  "DIG2_C": "8",
  "DP2": "9",
  "DIG2_B": "10",
  "DIG2_A": "11",
  "DIG2_F": "12",
  "DIG2_CA": "13",
  "DIG1_CA": "14",
  "DIG1_B": "15",
  "DIG1_A": "16",
  "DIG1_G": "17",
  "DIG1_F": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG1_E: "input", DIG1_D: "input", DIG1_C: "input", DP1: "input", DIG2_E: "input", DIG2_D: "input", DIG2_G: "input", DIG2_C: "input", DP2: "input", DIG2_B: "input", DIG2_A: "input", DIG2_F: "input", DIG2_CA: "input", DIG1_CA: "input", DIG1_B: "input", DIG1_A: "input", DIG1_G: "input", DIG1_F: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DA56-11YWA";
  override referencePrefix = "U";
}

/**
 * Double digit 7 segment green LED common cathode
 *
 * KiCad symbol: `Display_Character:DC56-11CGKWA`. Reference prefix: `U`.
 * Footprint filters: *DA56*11*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/DC56-11CGKWA(Ver.7A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:DA56-11CGKWA.
 */
export class DC56_11CGKWA extends Component.withPins({
  "DIG1_E": "1",
  "DIG1_D": "2",
  "DIG1_C": "3",
  "DP1": "4",
  "DIG2_E": "5",
  "DIG2_D": "6",
  "DIG2_G": "7",
  "DIG2_C": "8",
  "DP2": "9",
  "DIG2_B": "10",
  "DIG2_A": "11",
  "DIG2_F": "12",
  "DIG2_CC": "13",
  "DIG1_CC": "14",
  "DIG1_B": "15",
  "DIG1_A": "16",
  "DIG1_G": "17",
  "DIG1_F": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG1_E: "input", DIG1_D: "input", DIG1_C: "input", DP1: "input", DIG2_E: "input", DIG2_D: "input", DIG2_G: "input", DIG2_C: "input", DP2: "input", DIG2_B: "input", DIG2_A: "input", DIG2_F: "input", DIG2_CC: "input", DIG1_CC: "input", DIG1_B: "input", DIG1_A: "input", DIG1_G: "input", DIG1_F: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DC56-11CGKWA";
  override referencePrefix = "U";
}

/**
 * Double digit 7 segment hyper red LED common cathode
 *
 * KiCad symbol: `Display_Character:DC56-11SURKWA`. Reference prefix: `U`.
 * Footprint filters: *DA56*11*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/DC56-11SURKWA(Ver.8A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:DA56-11SURKWA.
 */
export class DC56_11SURKWA extends Component.withPins({
  "DIG1_E": "1",
  "DIG1_D": "2",
  "DIG1_C": "3",
  "DP1": "4",
  "DIG2_E": "5",
  "DIG2_D": "6",
  "DIG2_G": "7",
  "DIG2_C": "8",
  "DP2": "9",
  "DIG2_B": "10",
  "DIG2_A": "11",
  "DIG2_F": "12",
  "DIG2_CC": "13",
  "DIG1_CC": "14",
  "DIG1_B": "15",
  "DIG1_A": "16",
  "DIG1_G": "17",
  "DIG1_F": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG1_E: "input", DIG1_D: "input", DIG1_C: "input", DP1: "input", DIG2_E: "input", DIG2_D: "input", DIG2_G: "input", DIG2_C: "input", DP2: "input", DIG2_B: "input", DIG2_A: "input", DIG2_F: "input", DIG2_CC: "input", DIG1_CC: "input", DIG1_B: "input", DIG1_A: "input", DIG1_G: "input", DIG1_F: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DC56-11SURKWA";
  override referencePrefix = "U";
}

/**
 * Double digit 7 segment super bright red LED common cathode
 *
 * KiCad symbol: `Display_Character:DC56-11EWA`. Reference prefix: `U`.
 * Footprint filters: *DA56*11*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/DC56-11EWA.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:DA56-11SURKWA.
 */
export class DC56_11EWA extends Component.withPins({
  "DIG1_E": "1",
  "DIG1_D": "2",
  "DIG1_C": "3",
  "DP1": "4",
  "DIG2_E": "5",
  "DIG2_D": "6",
  "DIG2_G": "7",
  "DIG2_C": "8",
  "DP2": "9",
  "DIG2_B": "10",
  "DIG2_A": "11",
  "DIG2_F": "12",
  "DIG2_CC": "13",
  "DIG1_CC": "14",
  "DIG1_B": "15",
  "DIG1_A": "16",
  "DIG1_G": "17",
  "DIG1_F": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG1_E: "input", DIG1_D: "input", DIG1_C: "input", DP1: "input", DIG2_E: "input", DIG2_D: "input", DIG2_G: "input", DIG2_C: "input", DP2: "input", DIG2_B: "input", DIG2_A: "input", DIG2_F: "input", DIG2_CC: "input", DIG1_CC: "input", DIG1_B: "input", DIG1_A: "input", DIG1_G: "input", DIG1_F: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DC56-11EWA";
  override referencePrefix = "U";
}

/**
 * Double digit 7 segment green LED common cathode
 *
 * KiCad symbol: `Display_Character:DC56-11GWA`. Reference prefix: `U`.
 * Footprint filters: *DA56*11*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/DC56-11GWA.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:DA56-11CGKWA.
 */
export class DC56_11GWA extends Component.withPins({
  "DIG1_E": "1",
  "DIG1_D": "2",
  "DIG1_C": "3",
  "DP1": "4",
  "DIG2_E": "5",
  "DIG2_D": "6",
  "DIG2_G": "7",
  "DIG2_C": "8",
  "DP2": "9",
  "DIG2_B": "10",
  "DIG2_A": "11",
  "DIG2_F": "12",
  "DIG2_CC": "13",
  "DIG1_CC": "14",
  "DIG1_B": "15",
  "DIG1_A": "16",
  "DIG1_G": "17",
  "DIG1_F": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG1_E: "input", DIG1_D: "input", DIG1_C: "input", DP1: "input", DIG2_E: "input", DIG2_D: "input", DIG2_G: "input", DIG2_C: "input", DP2: "input", DIG2_B: "input", DIG2_A: "input", DIG2_F: "input", DIG2_CC: "input", DIG1_CC: "input", DIG1_B: "input", DIG1_A: "input", DIG1_G: "input", DIG1_F: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DC56-11GWA";
  override referencePrefix = "U";
}

/**
 * Double digit 7 segment super bright orange LED common cathode
 *
 * KiCad symbol: `Display_Character:DC56-11SEKWA`. Reference prefix: `U`.
 * Footprint filters: *DA56*11*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/DA56-11SEKWA(Ver.9A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:DA56-11SEKWA.
 */
export class DC56_11SEKWA extends Component.withPins({
  "DIG1_E": "1",
  "DIG1_D": "2",
  "DIG1_C": "3",
  "DP1": "4",
  "DIG2_E": "5",
  "DIG2_D": "6",
  "DIG2_G": "7",
  "DIG2_C": "8",
  "DP2": "9",
  "DIG2_B": "10",
  "DIG2_A": "11",
  "DIG2_F": "12",
  "DIG2_CC": "13",
  "DIG1_CC": "14",
  "DIG1_B": "15",
  "DIG1_A": "16",
  "DIG1_G": "17",
  "DIG1_F": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG1_E: "input", DIG1_D: "input", DIG1_C: "input", DP1: "input", DIG2_E: "input", DIG2_D: "input", DIG2_G: "input", DIG2_C: "input", DP2: "input", DIG2_B: "input", DIG2_A: "input", DIG2_F: "input", DIG2_CC: "input", DIG1_CC: "input", DIG1_B: "input", DIG1_A: "input", DIG1_G: "input", DIG1_F: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DC56-11SEKWA";
  override referencePrefix = "U";
}

/**
 * Double digit 7 segment super bright red LED common cathode
 *
 * KiCad symbol: `Display_Character:DC56-11SRWA`. Reference prefix: `U`.
 * Footprint filters: *DA56*11*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/DC56-11SRWA.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:DA56-11SURKWA.
 */
export class DC56_11SRWA extends Component.withPins({
  "DIG1_E": "1",
  "DIG1_D": "2",
  "DIG1_C": "3",
  "DP1": "4",
  "DIG2_E": "5",
  "DIG2_D": "6",
  "DIG2_G": "7",
  "DIG2_C": "8",
  "DP2": "9",
  "DIG2_B": "10",
  "DIG2_A": "11",
  "DIG2_F": "12",
  "DIG2_CC": "13",
  "DIG1_CC": "14",
  "DIG1_B": "15",
  "DIG1_A": "16",
  "DIG1_G": "17",
  "DIG1_F": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG1_E: "input", DIG1_D: "input", DIG1_C: "input", DP1: "input", DIG2_E: "input", DIG2_D: "input", DIG2_G: "input", DIG2_C: "input", DP2: "input", DIG2_B: "input", DIG2_A: "input", DIG2_F: "input", DIG2_CC: "input", DIG1_CC: "input", DIG1_B: "input", DIG1_A: "input", DIG1_G: "input", DIG1_F: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DC56-11SRWA";
  override referencePrefix = "U";
}

/**
 * Double digit 7 segment super bright yellow LED common cathode
 *
 * KiCad symbol: `Display_Character:DC56-11SYKWA`. Reference prefix: `U`.
 * Footprint filters: *DA56*11*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/DC56-11SYKWA(Ver.7A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:DA56-11SYKWA.
 */
export class DC56_11SYKWA extends Component.withPins({
  "DIG1_E": "1",
  "DIG1_D": "2",
  "DIG1_C": "3",
  "DP1": "4",
  "DIG2_E": "5",
  "DIG2_D": "6",
  "DIG2_G": "7",
  "DIG2_C": "8",
  "DP2": "9",
  "DIG2_B": "10",
  "DIG2_A": "11",
  "DIG2_F": "12",
  "DIG2_CC": "13",
  "DIG1_CC": "14",
  "DIG1_B": "15",
  "DIG1_A": "16",
  "DIG1_G": "17",
  "DIG1_F": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG1_E: "input", DIG1_D: "input", DIG1_C: "input", DP1: "input", DIG2_E: "input", DIG2_D: "input", DIG2_G: "input", DIG2_C: "input", DP2: "input", DIG2_B: "input", DIG2_A: "input", DIG2_F: "input", DIG2_CC: "input", DIG1_CC: "input", DIG1_B: "input", DIG1_A: "input", DIG1_G: "input", DIG1_F: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DC56-11SYKWA";
  override referencePrefix = "U";
}

/**
 * Double digit 7 segment yellow LED common cathode
 *
 * KiCad symbol: `Display_Character:DC56-11YWA`. Reference prefix: `U`.
 * Footprint filters: *DA56*11*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/DC56-11YWA.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:DA56-11SYKWA.
 */
export class DC56_11YWA extends Component.withPins({
  "DIG1_E": "1",
  "DIG1_D": "2",
  "DIG1_C": "3",
  "DP1": "4",
  "DIG2_E": "5",
  "DIG2_D": "6",
  "DIG2_G": "7",
  "DIG2_C": "8",
  "DP2": "9",
  "DIG2_B": "10",
  "DIG2_A": "11",
  "DIG2_F": "12",
  "DIG2_CC": "13",
  "DIG1_CC": "14",
  "DIG1_B": "15",
  "DIG1_A": "16",
  "DIG1_G": "17",
  "DIG1_F": "18",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DIG1_E: "input", DIG1_D: "input", DIG1_C: "input", DP1: "input", DIG2_E: "input", DIG2_D: "input", DIG2_G: "input", DIG2_C: "input", DP2: "input", DIG2_B: "input", DIG2_A: "input", DIG2_F: "input", DIG2_CC: "input", DIG1_CC: "input", DIG1_B: "input", DIG1_A: "input", DIG1_G: "input", DIG1_F: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DC56-11YWA";
  override referencePrefix = "U";
}

/**
 * 3 and half digit 7 segment transmissive standard LCD with LO BAT, pin length 7.5mm, -20°C to +70°C, 3V-5V VDD
 *
 * KiCad symbol: `Display_Character:DE113-XX-XX`. Reference prefix: `U`.
 * Footprint filters: *DE*113*.
 * @see http://www.display-elektronik.de/filter/DE113-MS-20_75.pdf
 * Keywords: display LCD 7-segment.
 * Default footprint: Display_7Segment:DE113-XX-XX.
 */
export class DE113_XX_XX extends Component.withPins({
  "BP_1": "1",
  "-": "2",
  "K": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "DP1": "8",
  "1E": "9",
  "1D": "10",
  "1C": "11",
  "DP2": "12",
  "2E": "13",
  "2D": "14",
  "2C": "15",
  "DP3": "16",
  "3E": "17",
  "3D": "18",
  "3C": "19",
  "3B": "20",
  "3A": "21",
  "3F": "22",
  "3G": "23",
  "2B": "24",
  "2A": "25",
  "2F": "26",
  "2G": "27",
  "COL": "28",
  "1B": "29",
  "1A": "30",
  "1F": "31",
  "1G": "32",
  "NC_33": "33",
  "NC_34": "34",
  "NC_35": "35",
  "NC_36": "36",
  "NC_37": "37",
  "LO_BAT": "38",
  ":": "39",
  "BP_40": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BP_1: "input", "-": "input", K: "input", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", DP1: "input", "1E": "input", "1D": "input", "1C": "input", DP2: "input", "2E": "input", "2D": "input", "2C": "input", DP3: "input", "3E": "input", "3D": "input", "3C": "input", "3B": "input", "3A": "input", "3F": "input", "3G": "input", "2B": "input", "2A": "input", "2F": "input", "2G": "input", COL: "input", "1B": "input", "1A": "input", "1F": "input", "1G": "input", NC_33: "no_connect", NC_34: "no_connect", NC_35: "no_connect", NC_36: "no_connect", NC_37: "no_connect", LO_BAT: "input", ":": "input", BP_40: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DE113-XX-XX";
  override referencePrefix = "U";
}

/**
 * 3 and half digit 7 segment reflective standard LCD with ~~ and BAT, pin length 6.35mm, -20°C to +70°C, 3V-5V VDD
 *
 * KiCad symbol: `Display_Character:DE114-RS-20`. Reference prefix: `U`.
 * Footprint filters: *DE*114*RS*20*.
 * @see http://www.display-elektronik.de/filter/DE114-RS-20_635.pdf
 * Keywords: display LCD 7-segment.
 * Default footprint: Display_7Segment:DE114-RS-20.
 */
export class DE114_RS_20 extends Component.withPins({
  "BP": "1",
  "-": "2",
  "K": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "DP1": "8",
  "1E": "9",
  "1D": "10",
  "1C": "11",
  "DP2": "12",
  "2E": "13",
  "2D": "14",
  "2C": "15",
  "DP3": "16",
  "3E": "17",
  "3D": "18",
  "3C": "19",
  "3B": "20",
  "3A": "21",
  "3F": "22",
  "3G": "23",
  "2B": "24",
  "2A": "25",
  "2F": "26",
  "2G": "27",
  "COL": "28",
  "1B": "29",
  "1A": "30",
  "1F": "31",
  "1G": "32",
  "NC_33": "33",
  "NC_34": "34",
  "NC_35": "35",
  "NC_36": "36",
  "P37": "37",
  "P38": "38",
  ":": "39",
  "BAT": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BP: "input", "-": "input", K: "input", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", DP1: "input", "1E": "input", "1D": "input", "1C": "input", DP2: "input", "2E": "input", "2D": "input", "2C": "input", DP3: "input", "3E": "input", "3D": "input", "3C": "input", "3B": "input", "3A": "input", "3F": "input", "3G": "input", "2B": "input", "2A": "input", "2F": "input", "2G": "input", COL: "input", "1B": "input", "1A": "input", "1F": "input", "1G": "input", NC_33: "no_connect", NC_34: "no_connect", NC_35: "no_connect", NC_36: "no_connect", P37: "input", P38: "input", ":": "input", BAT: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DE114-RS-20";
  override referencePrefix = "U";
}

/**
 * 6 digit 7 segment reflective standard LCD, pin length 6.35mm, -20°C to +70°C, 3V-5V VDD
 *
 * KiCad symbol: `Display_Character:DE122-XX-XX`. Reference prefix: `U`.
 * Footprint filters: DE122?XX?XX*.
 * @see http://www.display-elektronik.de/filter/DE122-RS-20_635.pdf
 * Keywords: display LCD 7-segment.
 * Default footprint: Display_7Segment:DE122-XX-XX.
 */
export class DE122_XX_XX extends Component.withPins({
  "3G": "41",
  "COL1": "42",
  "2B": "43",
  "2A": "44",
  "2F": "45",
  "2G": "46",
  "1B": "47",
  "1A": "48",
  "1F": "49",
  "1G": "50",
  "BP": "1",
  "1E": "2",
  "1D": "3",
  "1C": "4",
  "DP1": "5",
  "2E": "6",
  "2D": "7",
  "2C": "8",
  "DP2": "9",
  "3E": "10",
  "3D": "11",
  "3C": "12",
  "DP3": "13",
  "4E": "14",
  "4D": "15",
  "4C": "16",
  "DP4": "17",
  "5E": "18",
  "5D": "19",
  "5C": "20",
  "DP5": "21",
  "6E": "22",
  "6D": "23",
  "6C": "24",
  "6B": "25",
  "6A": "26",
  "6F": "27",
  "6G": "28",
  "5B": "29",
  "5A": "30",
  "5F": "31",
  "5G": "32",
  "COL2": "33",
  "4B": "34",
  "4A": "35",
  "4F": "36",
  "4G": "37",
  "3B": "38",
  "3A": "39",
  "3F": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "3G": "input", COL1: "input", "2B": "input", "2A": "input", "2F": "input", "2G": "input", "1B": "input", "1A": "input", "1F": "input", "1G": "input", BP: "input", "1E": "input", "1D": "input", "1C": "input", DP1: "input", "2E": "input", "2D": "input", "2C": "input", DP2: "input", "3E": "input", "3D": "input", "3C": "input", DP3: "input", "4E": "input", "4D": "input", "4C": "input", DP4: "input", "5E": "input", "5D": "input", "5C": "input", DP5: "input", "6E": "input", "6D": "input", "6C": "input", "6B": "input", "6A": "input", "6F": "input", "6G": "input", "5B": "input", "5A": "input", "5F": "input", "5G": "input", COL2: "input", "4B": "input", "4A": "input", "4F": "input", "4G": "input", "3B": "input", "3A": "input", "3F": "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DE122-XX-XX";
  override referencePrefix = "U";
}

/**
 * 3 and half digit 7 segment reflective standard LCD with arrow, pin length 7.5mm, -20°C to +70°C, 3V-5V VDD
 *
 * KiCad symbol: `Display_Character:DE170-XX-XX`. Reference prefix: `U`.
 * Footprint filters: DE170?XX?XX*.
 * @see http://www.display-elektronik.de/filter/DE170-RS-20_75.pdf
 * Keywords: display LCD 7-segment.
 * Default footprint: Display_7Segment:DE170-XX-XX.
 */
export class DE170_XX_XX extends Component.withPins({
  "BP_1": "1",
  "-": "2",
  "K": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "NC_7": "7",
  "DP1": "8",
  "1E": "9",
  "1D": "10",
  "1C": "11",
  "DP2": "12",
  "2E": "13",
  "2D": "14",
  "2C": "15",
  "DP3": "16",
  "3E": "17",
  "3D": "18",
  "3C": "19",
  "3B": "20",
  "3A": "21",
  "3F": "22",
  "3G": "23",
  "2B": "24",
  "2A": "25",
  "2F": "26",
  "2G": "27",
  "COL": "28",
  "1B": "29",
  "1A": "30",
  "1F": "31",
  "1G": "32",
  "NC_33": "33",
  "NC_34": "34",
  "NC_35": "35",
  "NC_36": "36",
  "NC_37": "37",
  "P38": "38",
  ":": "39",
  "BP_40": "40",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BP_1: "input", "-": "input", K: "input", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", NC_7: "no_connect", DP1: "input", "1E": "input", "1D": "input", "1C": "input", DP2: "input", "2E": "input", "2D": "input", "2C": "input", DP3: "input", "3E": "input", "3D": "input", "3C": "input", "3B": "input", "3A": "input", "3F": "input", "3G": "input", "2B": "input", "2A": "input", "2F": "input", "2G": "input", COL: "input", "1B": "input", "1A": "input", "1F": "input", "1G": "input", NC_33: "no_connect", NC_34: "no_connect", NC_35: "no_connect", NC_36: "no_connect", NC_37: "no_connect", P38: "input", ":": "input", BP_40: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DE170-XX-XX";
  override referencePrefix = "U";
}

/**
 * .160", 4-Digit 16-Segment plus decimal alphanumeric intelligent display with Memory/Decoder/Driver
 *
 * KiCad symbol: `Display_Character:DL1416`. Reference prefix: `U`.
 * Footprint filters: DL1416*.
 * @see https://partstack.com/resources/pdf/images/VipMasterIC/IC/INFN/INFNS19899/INFNS19899-1.pdf
 * Keywords: Alphanumeric 16-segment display.
 * Default footprint: Display:DL1416.
 */
export class DL1416 extends Component.withPins({
  "D5": "1",
  "D4": "2",
  "D0": "3",
  "D1": "4",
  "D2": "5",
  "D3": "6",
  "~{CE}": "7",
  "~{WR}": "8",
  "~{CU}": "9",
  "A0": "10",
  "A1": "11",
  "Unused_12": "12",
  "Unused_13": "13",
  "Unused_14": "14",
  "Unused_15": "15",
  "Unused_16": "16",
  "Unused_17": "17",
  "V+": "18",
  "V-": "19",
  "D6": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D5: "input", D4: "input", D0: "input", D1: "input", D2: "input", D3: "input", "~{CE}": "input", "~{WR}": "input", "~{CU}": "input", A0: "input", A1: "input", Unused_12: "no_connect", Unused_13: "no_connect", Unused_14: "no_connect", Unused_15: "no_connect", Unused_16: "no_connect", Unused_17: "no_connect", "V+": "power_in", "V-": "power_in", D6: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:DL1416";
  override referencePrefix = "U";
}

/**
 * 3 Lines, 12 character alpha numeric LCD, transreflective STN and FSTN Gray, I2C, single or dual power
 *
 * KiCad symbol: `Display_Character:EA_T123X-I2C`. Reference prefix: `U`.
 * Footprint filters: EA?T123X?I2C*.
 * @see http://www.lcd-module.de/pdf/doma/t123-i2c.pdf
 * Keywords: display LCD 7-segment.
 * Default footprint: Display:EA_T123X-I2C.
 */
export class EA_T123X_I2C extends Component.withPins({
  "VSS": "1",
  "VDD": "2",
  "VLCD": "3",
  "V0": "4",
  "SDA": "5",
  "SCL": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", VDD: "power_in", VLCD: "input", V0: "power_in", SDA: "bidirectional", SCL: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:EA_T123X-I2C";
  override referencePrefix = "U";
}

/**
 * Double 7 segment brilliant yellow green LED common anode
 *
 * KiCad symbol: `Display_Character:ELD-426SYGWA`. Reference prefix: `U`.
 * Footprint filters: *ELD*426*.
 * @see http://www.everlight.com/file/ProductFile/D426SYGWA-S530-E2.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:ELD_426XXXX.
 */
export class ELD_426SYGWA extends Component.withPins({
  "d": "1",
  "DP": "2",
  "e": "3",
  "c": "4",
  "CA_D2": "5",
  "b": "6",
  "a": "7",
  "f": "8",
  "g": "9",
  "CA_D1": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { d: "input", DP: "input", e: "input", c: "input", CA_D2: "input", b: "input", a: "input", f: "input", g: "input", CA_D1: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:ELD-426SYGWA";
  override referencePrefix = "U";
}

/**
 * Double 7 segment Blue LED common anode SMD mount
 *
 * KiCad symbol: `Display_Character:HDSM-441B`. Reference prefix: `U`.
 * Footprint filters: *HDSM*441B*.
 * @see https://docs.broadcom.com/docs/AV02-1589EN
 * Keywords: display LED 7-segment.
 * Default footprint: Display:HDSM-441B_HDSM-443B.
 */
export class HDSM_441B extends Component.withPins({
  "G": "1",
  "DP": "2",
  "A": "3",
  "F": "4",
  "CA_DIG2": "5",
  "D": "6",
  "E": "7",
  "C": "8",
  "B": "9",
  "CA_DIG1": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", DP: "input", A: "input", F: "input", CA_DIG2: "input", D: "input", E: "input", C: "input", B: "input", CA_DIG1: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:HDSM-441B";
  override referencePrefix = "U";
}

/**
 * Double 7 segment Blue LED common cathode SMD mount
 *
 * KiCad symbol: `Display_Character:HDSM-443B`. Reference prefix: `U`.
 * Footprint filters: *HDSM*441B*.
 * @see https://docs.broadcom.com/docs/AV02-1589EN
 * Keywords: display LED 7-segment.
 * Default footprint: Display:HDSM-441B_HDSM-443B.
 */
export class HDSM_443B extends Component.withPins({
  "G": "1",
  "DP": "2",
  "A": "3",
  "F": "4",
  "CC_DIG2": "5",
  "D": "6",
  "E": "7",
  "C": "8",
  "B": "9",
  "CC_DIG1": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", DP: "input", A: "input", F: "input", CC_DIG2: "input", D: "input", E: "input", C: "input", B: "input", CC_DIG1: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:HDSM-443B";
  override referencePrefix = "U";
}

/**
 * Double 7 segment Blue LED common anode SMD mount
 *
 * KiCad symbol: `Display_Character:HDSM-541B`. Reference prefix: `U`.
 * Footprint filters: HDSM?441B?HDSM?443B*.
 * @see https://docs.broadcom.com/docs/AV02-1588EN
 * Keywords: display LED 7-segment.
 * Default footprint: Display:HDSM-441B_HDSM-443B.
 */
export class HDSM_541B extends Component.withPins({
  "G": "1",
  "DP": "2",
  "A": "3",
  "F": "4",
  "CA_DIG2": "5",
  "D": "6",
  "E": "7",
  "C": "8",
  "B": "9",
  "CA_DIG1": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", DP: "input", A: "input", F: "input", CA_DIG2: "input", D: "input", E: "input", C: "input", B: "input", CA_DIG1: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:HDSM-541B";
  override referencePrefix = "U";
}

/**
 * Double 7 segment Blue LED common cathode SMD mount
 *
 * KiCad symbol: `Display_Character:HDSM-543B`. Reference prefix: `U`.
 * Footprint filters: HDSM?541B?HDSM?543B*.
 * @see https://docs.broadcom.com/docs/AV02-1588EN
 * Keywords: display LED 7-segment.
 * Default footprint: Display:HDSM-541B_HDSM-543B.
 */
export class HDSM_543B extends Component.withPins({
  "G": "1",
  "DP": "2",
  "A": "3",
  "F": "4",
  "CC_DIG2": "5",
  "D": "6",
  "E": "7",
  "C": "8",
  "B": "9",
  "CC_DIG1": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", DP: "input", A: "input", F: "input", CC_DIG2: "input", D: "input", E: "input", C: "input", B: "input", CC_DIG1: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:HDSM-543B";
  override referencePrefix = "U";
}

/**
 * One digit 7 segment yellow, common anode
 *
 * KiCad symbol: `Display_Character:HDSP-7401`. Reference prefix: `U`.
 * Footprint filters: HDSP?7401*.
 * @see https://docs.broadcom.com/docs/AV02-2553EN
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:HDSP-7401.
 */
export class HDSP_7401 extends Component.withPins({
  "CA_1": "1",
  "F": "2",
  "G": "3",
  "E": "4",
  "D": "5",
  "CA_6": "6",
  "DP": "7",
  "C": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CA_1: "input", F: "input", G: "input", E: "input", D: "input", CA_6: "input", DP: "input", C: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:HDSP-7401";
  override referencePrefix = "U";
}

/**
 * One digit 7 segment yellow, common cathode
 *
 * KiCad symbol: `Display_Character:HDSP-7403`. Reference prefix: `U`.
 * Footprint filters: HDSP?7401*.
 * @see https://docs.broadcom.com/docs/AV02-2553EN
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:HDSP-7401.
 */
export class HDSP_7403 extends Component.withPins({
  "CC_1": "1",
  "F": "2",
  "G": "3",
  "E": "4",
  "D": "5",
  "CC_6": "6",
  "DP": "7",
  "C": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC_1: "input", F: "input", G: "input", E: "input", D: "input", CC_6: "input", DP: "input", C: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:HDSP-7403";
  override referencePrefix = "U";
}

/**
 * One digit 7 segment red, common anode
 *
 * KiCad symbol: `Display_Character:HDSP-A151`. Reference prefix: `U`.
 * Footprint filters: HDSP?A151*.
 * @see https://docs.broadcom.com/docs/AV02-2553EN
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:HDSP-A151.
 */
export class HDSP_A151 extends Component.withPins({
  "CA_1": "1",
  "F": "2",
  "G": "3",
  "E": "4",
  "D": "5",
  "CA_6": "6",
  "DP": "7",
  "C": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CA_1: "input", F: "input", G: "input", E: "input", D: "input", CA_6: "input", DP: "input", C: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:HDSP-A151";
  override referencePrefix = "U";
}

/**
 * One digit 7 segment high efficiency red, common anode
 *
 * KiCad symbol: `Display_Character:HDSP-7501`. Reference prefix: `U`.
 * Footprint filters: HDSP?A151*.
 * @see https://docs.broadcom.com/docs/AV02-2553EN
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:HDSP-A151.
 */
export class HDSP_7501 extends Component.withPins({
  "CA_1": "1",
  "F": "2",
  "G": "3",
  "E": "4",
  "D": "5",
  "CA_6": "6",
  "DP": "7",
  "C": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CA_1: "input", F: "input", G: "input", E: "input", D: "input", CA_6: "input", DP: "input", C: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:HDSP-7501";
  override referencePrefix = "U";
}

/**
 * One digit 7 segment red, common cathode
 *
 * KiCad symbol: `Display_Character:HDSP-A153`. Reference prefix: `U`.
 * Footprint filters: HDSP?A151*.
 * @see https://docs.broadcom.com/docs/AV02-2553EN
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:HDSP-A151.
 */
export class HDSP_A153 extends Component.withPins({
  "CC_1": "1",
  "F": "2",
  "G": "3",
  "E": "4",
  "D": "5",
  "CC_6": "6",
  "DP": "7",
  "C": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC_1: "input", F: "input", G: "input", E: "input", D: "input", CC_6: "input", DP: "input", C: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:HDSP-A153";
  override referencePrefix = "U";
}

/**
 * One digit 7 segment high efficiency red, common cathode
 *
 * KiCad symbol: `Display_Character:HDSP-7503`. Reference prefix: `U`.
 * Footprint filters: HDSP?A151*.
 * @see https://docs.broadcom.com/docs/AV02-2553EN
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:HDSP-A151.
 */
export class HDSP_7503 extends Component.withPins({
  "CC_1": "1",
  "F": "2",
  "G": "3",
  "E": "4",
  "D": "5",
  "CC_6": "6",
  "DP": "7",
  "C": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC_1: "input", F: "input", G: "input", E: "input", D: "input", CC_6: "input", DP: "input", C: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:HDSP-7503";
  override referencePrefix = "U";
}

/**
 * +-1 overflow 7 segment high efficiency red, common anode
 *
 * KiCad symbol: `Display_Character:HDSP-7507`. Reference prefix: `U`.
 * Footprint filters: HDSP?7507*.
 * @see https://docs.broadcom.com/docs/AV02-2553EN
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:HDSP-7507.
 */
export class HDSP_7507 extends Component.withPins({
  "CA_1": "1",
  "P": "2",
  "M": "3",
  "NC_4": "4",
  "NC_5": "5",
  "CA_6": "6",
  "DP": "7",
  "C": "8",
  "B": "9",
  "NC_10": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CA_1: "input", P: "input", M: "input", NC_4: "no_connect", NC_5: "no_connect", CA_6: "input", DP: "input", C: "input", B: "input", NC_10: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Display_Character:HDSP-7507";
  override referencePrefix = "U";
}

/**
 * +-1 overflow 7 segment high efficiency red, common cathode
 *
 * KiCad symbol: `Display_Character:HDSP-7508`. Reference prefix: `U`.
 * Footprint filters: HDSP?7507*.
 * @see https://docs.broadcom.com/docs/AV02-2553EN
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:HDSP-7507.
 */
export class HDSP_7508 extends Component.withPins({
  "CC_1": "1",
  "P": "2",
  "M": "3",
  "NC_4": "4",
  "NC_5": "5",
  "CC_6": "6",
  "DP": "7",
  "C": "8",
  "B": "9",
  "NC_10": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC_1: "input", P: "input", M: "input", NC_4: "no_connect", NC_5: "no_connect", CC_6: "input", DP: "input", C: "input", B: "input", NC_10: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Display_Character:HDSP-7508";
  override referencePrefix = "U";
}

/**
 * One digit 7 segment green, common anode
 *
 * KiCad symbol: `Display_Character:HDSP-7801`. Reference prefix: `U`.
 * Footprint filters: HDSP?7801*.
 * @see https://docs.broadcom.com/docs/AV02-2553EN
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:HDSP-7801.
 */
export class HDSP_7801 extends Component.withPins({
  "CA_1": "1",
  "F": "2",
  "G": "3",
  "E": "4",
  "D": "5",
  "CA_6": "6",
  "DP": "7",
  "C": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CA_1: "input", F: "input", G: "input", E: "input", D: "input", CA_6: "input", DP: "input", C: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:HDSP-7801";
  override referencePrefix = "U";
}

/**
 * One digit 7 segment green, common cathode
 *
 * KiCad symbol: `Display_Character:HDSP-7803`. Reference prefix: `U`.
 * Footprint filters: HDSP?7801*.
 * @see https://docs.broadcom.com/docs/AV02-2553EN
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:HDSP-7801.
 */
export class HDSP_7803 extends Component.withPins({
  "CC_1": "1",
  "F": "2",
  "G": "3",
  "E": "4",
  "D": "5",
  "CC_6": "6",
  "DP": "7",
  "C": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC_1: "input", F: "input", G: "input", E: "input", D: "input", CC_6: "input", DP: "input", C: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:HDSP-7803";
  override referencePrefix = "U";
}

/**
 * +-1 overflow 7 segment green, common anode
 *
 * KiCad symbol: `Display_Character:HDSP-7807`. Reference prefix: `U`.
 * Footprint filters: HDSP?7807*.
 * @see https://docs.broadcom.com/docs/AV02-2553EN
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:HDSP-7807.
 */
export class HDSP_7807 extends Component.withPins({
  "CA_1": "1",
  "P": "2",
  "M": "3",
  "NC_4": "4",
  "NC_5": "5",
  "CA_6": "6",
  "DP": "7",
  "C": "8",
  "B": "9",
  "NC_10": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CA_1: "input", P: "input", M: "input", NC_4: "no_connect", NC_5: "no_connect", CA_6: "input", DP: "input", C: "input", B: "input", NC_10: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Display_Character:HDSP-7807";
  override referencePrefix = "U";
}

/**
 * +-1 overflow 7 segment green, common cathode
 *
 * KiCad symbol: `Display_Character:HDSP-7808`. Reference prefix: `U`.
 * Footprint filters: HDSP?7807*.
 * @see https://docs.broadcom.com/docs/AV02-2553EN
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:HDSP-7807.
 */
export class HDSP_7808 extends Component.withPins({
  "CC_1": "1",
  "P": "2",
  "M": "3",
  "NC_4": "4",
  "NC_5": "5",
  "CC_6": "6",
  "DP": "7",
  "C": "8",
  "B": "9",
  "NC_10": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC_1: "input", P: "input", M: "input", NC_4: "no_connect", NC_5: "no_connect", CC_6: "input", DP: "input", C: "input", B: "input", NC_10: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Display_Character:HDSP-7808";
  override referencePrefix = "U";
}

/**
 * One digit 7 segment orange, common anode
 *
 * KiCad symbol: `Display_Character:HDSP-A401`. Reference prefix: `U`.
 * Footprint filters: HDSP?A401*.
 * @see https://docs.broadcom.com/docs/AV02-2553EN
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:HDSP-A401.
 */
export class HDSP_A401 extends Component.withPins({
  "CA_1": "1",
  "F": "2",
  "G": "3",
  "E": "4",
  "D": "5",
  "CA_6": "6",
  "DP": "7",
  "C": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CA_1: "input", F: "input", G: "input", E: "input", D: "input", CA_6: "input", DP: "input", C: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:HDSP-A401";
  override referencePrefix = "U";
}

/**
 * One digit 7 segment orange, common cathode
 *
 * KiCad symbol: `Display_Character:HDSP-A403`. Reference prefix: `U`.
 * Footprint filters: HDSP?A401*.
 * @see https://docs.broadcom.com/docs/AV02-2553EN
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:HDSP-A401.
 */
export class HDSP_A403 extends Component.withPins({
  "CC_1": "1",
  "F": "2",
  "G": "3",
  "E": "4",
  "D": "5",
  "CC_6": "6",
  "DP": "7",
  "C": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC_1: "input", F: "input", G: "input", E: "input", D: "input", CC_6: "input", DP: "input", C: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:HDSP-A403";
  override referencePrefix = "U";
}

/**
 * LCD 16x2 Alphanumeric 16pin Blue/Yellow/Green Backlight, 8bit parallel, 5V VDD
 *
 * KiCad symbol: `Display_Character:HY1602E`. Reference prefix: `DS`.
 * Footprint filters: *HY1602E*.
 * @see http://www.icbank.com/data/ICBShop/board/HY1602E.pdf
 * Keywords: display LCD 7-segment.
 * Default footprint: Display:HY1602E.
 */
export class HY1602E extends Component.withPins({
  "LEDK": "1",
  "LEDA": "2",
  "VSS": "3",
  "VDD": "4",
  "Vo": "5",
  "RS": "6",
  "R/~{W}": "7",
  "E": "8",
  "DB0": "9",
  "DB1": "10",
  "DB2": "11",
  "DB3": "12",
  "DB4": "13",
  "DB5": "14",
  "DB6": "15",
  "DB7": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { LEDK: "passive", LEDA: "passive", VSS: "power_in", VDD: "power_in", Vo: "input", RS: "input", "R/~{W}": "input", E: "input", DB0: "bidirectional", DB1: "bidirectional", DB2: "bidirectional", DB3: "bidirectional", DB4: "bidirectional", DB5: "bidirectional", DB6: "bidirectional", DB7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Display_Character:HY1602E";
  override referencePrefix = "DS";
}

/**
 * One digit 7 segment hyper red LED, common anode
 *
 * KiCad symbol: `Display_Character:KCSA02-105`. Reference prefix: `U`.
 * Footprint filters: *KCSC02*105*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/KCSA02-105(Ver.10A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:KCSC02-105.
 */
export class KCSA02_105 extends Component.withPins({
  "E": "1",
  "D": "2",
  "CA_3": "3",
  "C": "4",
  "DP": "5",
  "B": "6",
  "A": "7",
  "CA_8": "8",
  "F": "9",
  "G": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { E: "input", D: "input", CA_3: "input", C: "input", DP: "input", B: "input", A: "input", CA_8: "input", F: "input", G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:KCSA02-105";
  override referencePrefix = "U";
}

/**
 * One digit 7 segment super bright orange LED, common anode
 *
 * KiCad symbol: `Display_Character:KCSA02-106`. Reference prefix: `U`.
 * Footprint filters: KCSC02?106*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/KCSA02-106(Ver.11A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:KCSC02-106.
 */
export class KCSA02_106 extends Component.withPins({
  "E": "1",
  "D": "2",
  "CA_3": "3",
  "C": "4",
  "DP": "5",
  "B": "6",
  "A": "7",
  "CA_8": "8",
  "F": "9",
  "G": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { E: "input", D: "input", CA_3: "input", C: "input", DP: "input", B: "input", A: "input", CA_8: "input", F: "input", G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:KCSA02-106";
  override referencePrefix = "U";
}

/**
 * One digit 7 segment super bright orange LED, common anode
 *
 * KiCad symbol: `Display_Character:KCSA02-107`. Reference prefix: `U`.
 * Footprint filters: KCSC02?107*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/KCSA02-107(Ver.10A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:KCSC02-107.
 */
export class KCSA02_107 extends Component.withPins({
  "E": "1",
  "D": "2",
  "CA_3": "3",
  "C": "4",
  "DP": "5",
  "B": "6",
  "A": "7",
  "CA_8": "8",
  "F": "9",
  "G": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { E: "input", D: "input", CA_3: "input", C: "input", DP: "input", B: "input", A: "input", CA_8: "input", F: "input", G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:KCSA02-107";
  override referencePrefix = "U";
}

/**
 * One digit 7 segment green LED, common anode
 *
 * KiCad symbol: `Display_Character:KCSA02-123`. Reference prefix: `U`.
 * Footprint filters: KCSC02?123*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/KCSA02-123(Ver.9A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:KCSC02-123.
 */
export class KCSA02_123 extends Component.withPins({
  "E": "1",
  "D": "2",
  "CA_3": "3",
  "C": "4",
  "DP": "5",
  "B": "6",
  "A": "7",
  "CA_8": "8",
  "F": "9",
  "G": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { E: "input", D: "input", CA_3: "input", C: "input", DP: "input", B: "input", A: "input", CA_8: "input", F: "input", G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:KCSA02-123";
  override referencePrefix = "U";
}

/**
 * One digit 7 segment blue LED, common anode
 *
 * KiCad symbol: `Display_Character:KCSA02-136`. Reference prefix: `U`.
 * Footprint filters: KCSC02?136*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/KCSA02-136(Ver.7B).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:KCSC02-136.
 */
export class KCSA02_136 extends Component.withPins({
  "E": "1",
  "D": "2",
  "CA_3": "3",
  "C": "4",
  "DP": "5",
  "B": "6",
  "A": "7",
  "CA_8": "8",
  "F": "9",
  "G": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { E: "input", D: "input", CA_3: "input", C: "input", DP: "input", B: "input", A: "input", CA_8: "input", F: "input", G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:KCSA02-136";
  override referencePrefix = "U";
}

/**
 * One digit 7 segment hyper red LED, common cathode
 *
 * KiCad symbol: `Display_Character:KCSC02-105`. Reference prefix: `U`.
 * Footprint filters: *KCSC02*105*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/KCSC02-105(Ver.9A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:KCSC02-105.
 */
export class KCSC02_105 extends Component.withPins({
  "E": "1",
  "D": "2",
  "CC_3": "3",
  "C": "4",
  "DP": "5",
  "B": "6",
  "A": "7",
  "CC_8": "8",
  "F": "9",
  "G": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { E: "input", D: "input", CC_3: "input", C: "input", DP: "input", B: "input", A: "input", CC_8: "input", F: "input", G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:KCSC02-105";
  override referencePrefix = "U";
}

/**
 * One digit 7 segment super bright orange LED, common cathode
 *
 * KiCad symbol: `Display_Character:KCSC02-106`. Reference prefix: `U`.
 * Footprint filters: KCSC02?106*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/KCSC02-106(Ver.10A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:KCSC02-106.
 */
export class KCSC02_106 extends Component.withPins({
  "E": "1",
  "D": "2",
  "CC_3": "3",
  "C": "4",
  "DP": "5",
  "B": "6",
  "A": "7",
  "CC_8": "8",
  "F": "9",
  "G": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { E: "input", D: "input", CC_3: "input", C: "input", DP: "input", B: "input", A: "input", CC_8: "input", F: "input", G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:KCSC02-106";
  override referencePrefix = "U";
}

/**
 * One digit 7 segment super bright orange LED, common cathode
 *
 * KiCad symbol: `Display_Character:KCSC02-107`. Reference prefix: `U`.
 * Footprint filters: KCSC02?107*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/KCSC02-106(Ver.10A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:KCSC02-107.
 */
export class KCSC02_107 extends Component.withPins({
  "E": "1",
  "D": "2",
  "CC_3": "3",
  "C": "4",
  "DP": "5",
  "B": "6",
  "A": "7",
  "CC_8": "8",
  "F": "9",
  "G": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { E: "input", D: "input", CC_3: "input", C: "input", DP: "input", B: "input", A: "input", CC_8: "input", F: "input", G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:KCSC02-107";
  override referencePrefix = "U";
}

/**
 * One digit 7 segment green LED, common cathode
 *
 * KiCad symbol: `Display_Character:KCSC02-123`. Reference prefix: `U`.
 * Footprint filters: KCSC02?123*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/KCSC02-123(Ver.10A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:KCSC02-123.
 */
export class KCSC02_123 extends Component.withPins({
  "E": "1",
  "D": "2",
  "CC_3": "3",
  "C": "4",
  "DP": "5",
  "B": "6",
  "A": "7",
  "CC_8": "8",
  "F": "9",
  "G": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { E: "input", D: "input", CC_3: "input", C: "input", DP: "input", B: "input", A: "input", CC_8: "input", F: "input", G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:KCSC02-123";
  override referencePrefix = "U";
}

/**
 * One digit 7 segment blue LED, common cathode
 *
 * KiCad symbol: `Display_Character:KCSC02-136`. Reference prefix: `U`.
 * Footprint filters: KCSC02?136*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/KCSC02-136(Ver.6B).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:KCSC02-136.
 */
export class KCSC02_136 extends Component.withPins({
  "E": "1",
  "D": "2",
  "CC_3": "3",
  "C": "4",
  "DP": "5",
  "B": "6",
  "A": "7",
  "CC_8": "8",
  "F": "9",
  "G": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { E: "input", D: "input", CC_3: "input", C: "input", DP: "input", B: "input", A: "input", CC_8: "input", F: "input", G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:KCSC02-136";
  override referencePrefix = "U";
}

/**
 * LCD 12x2, 8 bit parallel bus, 3V or 5V VDD
 *
 * KiCad symbol: `Display_Character:LCD-016N002L`. Reference prefix: `U`.
 * Footprint filters: *LCD*016N002L*.
 * @see http://www.vishay.com/docs/37299/37299.pdf
 * Keywords: display LCD dot-matrix.
 * Default footprint: Display:LCD-016N002L.
 */
export class LCD_016N002L extends Component.withPins({
  "VSS": "1",
  "VDD": "2",
  "VO": "3",
  "RS": "4",
  "R/~{W}": "5",
  "E": "6",
  "DB0": "7",
  "DB1": "8",
  "DB2": "9",
  "DB3": "10",
  "DB4": "11",
  "DB5": "12",
  "DB6": "13",
  "DB7": "14",
  "A/VEE": "15",
  "K": "16",
  "PA1": "A1",
  "PA2": "A2",
  "PK1": "K1",
  "PK2": "K2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", VDD: "power_in", VO: "input", RS: "input", "R/~{W}": "input", E: "input", DB0: "bidirectional", DB1: "bidirectional", DB2: "bidirectional", DB3: "bidirectional", DB4: "bidirectional", DB5: "bidirectional", DB6: "bidirectional", DB7: "bidirectional", "A/VEE": "power_in", K: "power_in", PA1: "power_in", PA2: "power_in", PK1: "power_in", PK2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Display_Character:LCD-016N002L";
  override referencePrefix = "U";
}

/**
 * 2 Lines, 12 character reflective LCD
 *
 * KiCad symbol: `Display_Character:LM16255K`. Reference prefix: `U`.
 * Footprint filters: *LM16255*.
 * @see http://pdf.datasheetcatalog.com/datasheet/Sharp/mXvtrzw.pdf
 * Keywords: display LCD dot-matrix.
 * Default footprint: Display:LM16255.
 */
export class LM16255K extends Component.withPins({
  "VSS": "1",
  "VDD": "2",
  "VO": "3",
  "RS": "4",
  "R/W": "5",
  "E": "6",
  "DB0": "7",
  "DB1": "8",
  "DB2": "9",
  "DB3": "10",
  "DB4": "11",
  "DB5": "12",
  "DB6": "13",
  "DB7": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", VDD: "power_in", VO: "power_in", RS: "input", "R/W": "input", E: "input", DB0: "bidirectional", DB1: "bidirectional", DB2: "bidirectional", DB3: "bidirectional", DB4: "bidirectional", DB5: "bidirectional", DB6: "bidirectional", DB7: "bidirectional", ...opts.pinTypes } });
  }
  override schema = "Display_Character:LM16255K";
  override referencePrefix = "U";
}

/**
 * 4 digit 7 segment green, common anode
 *
 * KiCad symbol: `Display_Character:LTC-4627JG`. Reference prefix: `U`.
 * Footprint filters: LTC?4627J*.
 * @see http://optoelectronics.liteon.com/upload/download/DS30-2001-393/C4627JG.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:LTC-4627Jx.
 */
export class LTC_4627JG extends Component.withPins({
  "CA1": "1",
  "CA2": "2",
  "D": "3",
  "CAL": "4",
  "E": "5",
  "CA3": "6",
  "DP": "7",
  "CA4": "8",
  "NC": "9",
  "F": "11",
  "C": "13",
  "A": "14",
  "G": "15",
  "B": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CA1: "input", CA2: "input", D: "input", CAL: "input", E: "input", CA3: "input", DP: "input", CA4: "input", NC: "no_connect", F: "input", C: "input", A: "input", G: "input", B: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:LTC-4627JG";
  override referencePrefix = "U";
}

/**
 * 4 digit 7 segment hyper red, common anode
 *
 * KiCad symbol: `Display_Character:LTC-4627JD`. Reference prefix: `U`.
 * Footprint filters: LTC?4627J*.
 * @see http://optoelectronics.liteon.com/upload/download/DS30-2001-093/LTC-4627JD.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:LTC-4627Jx.
 */
export class LTC_4627JD extends Component.withPins({
  "CA1": "1",
  "CA2": "2",
  "D": "3",
  "CAL": "4",
  "E": "5",
  "CA3": "6",
  "DP": "7",
  "CA4": "8",
  "NC": "9",
  "F": "11",
  "C": "13",
  "A": "14",
  "G": "15",
  "B": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CA1: "input", CA2: "input", D: "input", CAL: "input", E: "input", CA3: "input", DP: "input", CA4: "input", NC: "no_connect", F: "input", C: "input", A: "input", G: "input", B: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:LTC-4627JD";
  override referencePrefix = "U";
}

/**
 * 4 digit 7 segment hyper red, common anode
 *
 * KiCad symbol: `Display_Character:LTC-4627JD-01`. Reference prefix: `U`.
 * Footprint filters: LTC?4627J*.
 * @see http://optoelectronics.liteon.com/upload/download/DS30-2008-0116/LTC-4627JD-01.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:LTC-4627Jx.
 */
export class LTC_4627JD_01 extends Component.withPins({
  "CA1": "1",
  "CA2": "2",
  "D": "3",
  "CAL": "4",
  "E": "5",
  "CA3": "6",
  "DP": "7",
  "CA4": "8",
  "NC": "9",
  "F": "11",
  "C": "13",
  "A": "14",
  "G": "15",
  "B": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CA1: "input", CA2: "input", D: "input", CAL: "input", E: "input", CA3: "input", DP: "input", CA4: "input", NC: "no_connect", F: "input", C: "input", A: "input", G: "input", B: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:LTC-4627JD-01";
  override referencePrefix = "U";
}

/**
 * 4 digit 7 segment yellow orange, common anode
 *
 * KiCad symbol: `Display_Character:LTC-4627JF`. Reference prefix: `U`.
 * Footprint filters: LTC?4627J*.
 * @see http://optoelectronics.liteon.com/upload/download/DS30-2000-192/C4627JF.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:LTC-4627Jx.
 */
export class LTC_4627JF extends Component.withPins({
  "CA1": "1",
  "CA2": "2",
  "D": "3",
  "CAL": "4",
  "E": "5",
  "CA3": "6",
  "DP": "7",
  "CA4": "8",
  "NC": "9",
  "F": "11",
  "C": "13",
  "A": "14",
  "G": "15",
  "B": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CA1: "input", CA2: "input", D: "input", CAL: "input", E: "input", CA3: "input", DP: "input", CA4: "input", NC: "no_connect", F: "input", C: "input", A: "input", G: "input", B: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:LTC-4627JF";
  override referencePrefix = "U";
}

/**
 * 4 digit 7 segment super red, common anode
 *
 * KiCad symbol: `Display_Character:LTC-4627JR`. Reference prefix: `U`.
 * Footprint filters: LTC?4627J*.
 * @see http://optoelectronics.liteon.com/upload/download/DS30-2000-185/LTC-4627JR.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:LTC-4627Jx.
 */
export class LTC_4627JR extends Component.withPins({
  "CA1": "1",
  "CA2": "2",
  "D": "3",
  "CAL": "4",
  "E": "5",
  "CA3": "6",
  "DP": "7",
  "CA4": "8",
  "NC": "9",
  "F": "11",
  "C": "13",
  "A": "14",
  "G": "15",
  "B": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CA1: "input", CA2: "input", D: "input", CAL: "input", E: "input", CA3: "input", DP: "input", CA4: "input", NC: "no_connect", F: "input", C: "input", A: "input", G: "input", B: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:LTC-4627JR";
  override referencePrefix = "U";
}

/**
 * 4 digit 7 segment yellow, common anode
 *
 * KiCad symbol: `Display_Character:LTC-4627JS`. Reference prefix: `U`.
 * Footprint filters: LTC?4627J*.
 * @see http://optoelectronics.liteon.com/upload/download/DS30-2000-186/LTC-4627JS.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:LTC-4627Jx.
 */
export class LTC_4627JS extends Component.withPins({
  "CA1": "1",
  "CA2": "2",
  "D": "3",
  "CAL": "4",
  "E": "5",
  "CA3": "6",
  "DP": "7",
  "CA4": "8",
  "NC": "9",
  "F": "11",
  "C": "13",
  "A": "14",
  "G": "15",
  "B": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CA1: "input", CA2: "input", D: "input", CAL: "input", E: "input", CA3: "input", DP: "input", CA4: "input", NC: "no_connect", F: "input", C: "input", A: "input", G: "input", B: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:LTC-4627JS";
  override referencePrefix = "U";
}

/**
 * DISPLAY 7 SEGMENTS common A.
 *
 * KiCad symbol: `Display_Character:LTS-6960HR`. Reference prefix: `AFF`.
 * Footprint filters: 7SegmentLED?LTS6760?LTS6780*.
 * @see https://datasheet.octopart.com/LTS-6960HR-Lite-On-datasheet-11803242.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:7SegmentLED_LTS6760_LTS6780.
 */
export class LTS_6960HR extends Component.withPins({
  "e": "1",
  "d": "2",
  "C.A._3": "3",
  "c": "4",
  "DP": "5",
  "b": "6",
  "a": "7",
  "C.A._8": "8",
  "f": "9",
  "g": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { e: "passive", d: "passive", "C.A._3": "passive", c: "passive", DP: "passive", b: "passive", a: "passive", "C.A._8": "passive", f: "passive", g: "passive", ...opts.pinTypes } });
  }
  override schema = "Display_Character:LTS-6960HR";
  override referencePrefix = "AFF";
}

/**
 * DISPLAY 7 SEGMENTS common K, high efficient red
 *
 * KiCad symbol: `Display_Character:LTS-6980HR`. Reference prefix: `AFF`.
 * Footprint filters: 7SegmentLED?LTS6760?LTS6780*.
 * @see http://datasheet.octopart.com/LTS-6960HR-Lite-On-datasheet-11803242.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:7SegmentLED_LTS6760_LTS6780.
 */
export class LTS_6980HR extends Component.withPins({
  "e": "1",
  "d": "2",
  "C.K._3": "3",
  "c": "4",
  "DP": "5",
  "b": "6",
  "a": "7",
  "C.K._8": "8",
  "f": "9",
  "g": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { e: "passive", d: "passive", "C.K._3": "passive", c: "passive", DP: "passive", b: "passive", a: "passive", "C.K._8": "passive", f: "passive", g: "passive", ...opts.pinTypes } });
  }
  override schema = "Display_Character:LTS-6980HR";
  override referencePrefix = "AFF";
}

/**
 * Single digit 7 segment high efficient green LED common anode right hand decimal
 *
 * KiCad symbol: `Display_Character:MAN3410A`. Reference prefix: `U`.
 * Footprint filters: *MAN3410A*.
 * @see https://www.digchip.com/datasheets/parts/datasheet/161/MAN3640A-pdf.php
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:MAN3410A.
 */
export class MAN3410A extends Component.withPins({
  "A": "1",
  "F": "2",
  "CA_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "E": "7",
  "D": "8",
  "D.P.": "9",
  "C": "10",
  "G": "11",
  "NC_12": "12",
  "B": "13",
  "CA_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "input", F: "input", CA_3: "input", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", E: "input", D: "input", "D.P.": "input", C: "input", G: "input", NC_12: "no_connect", B: "input", CA_14: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:MAN3410A";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment high efficient green LED common anode left hand decimal
 *
 * KiCad symbol: `Display_Character:MAN3420A`. Reference prefix: `U`.
 * Footprint filters: *MAN3420A*.
 * @see https://www.digchip.com/datasheets/parts/datasheet/161/MAN3640A-pdf.php
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:MAN3420A.
 */
export class MAN3420A extends Component.withPins({
  "A": "1",
  "F": "2",
  "CA_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "D.P.": "6",
  "E": "7",
  "D": "8",
  "NC_9": "9",
  "C": "10",
  "G": "11",
  "NC_12": "12",
  "B": "13",
  "CA_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "input", F: "input", CA_3: "input", NC_4: "no_connect", NC_5: "no_connect", "D.P.": "input", E: "input", D: "input", NC_9: "no_connect", C: "input", G: "input", NC_12: "no_connect", B: "input", CA_14: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:MAN3420A";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment high efficient green LED common anode right hand decimal
 *
 * KiCad symbol: `Display_Character:MAN3440A`. Reference prefix: `U`.
 * Footprint filters: MAN3410A*.
 * @see https://www.digchip.com/datasheets/parts/datasheet/161/MAN3640A-pdf.php
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:MAN3410A.
 */
export class MAN3440A extends Component.withPins({
  "F": "1",
  "G": "2",
  "NC_3": "3",
  "CC_4": "4",
  "NC_5": "5",
  "E": "6",
  "D": "7",
  "C": "8",
  "D.P.": "9",
  "NC_10": "10",
  "NC_11": "11",
  "CC_12": "12",
  "B": "13",
  "A": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { F: "input", G: "input", NC_3: "no_connect", CC_4: "input", NC_5: "no_connect", E: "input", D: "input", C: "input", "D.P.": "input", NC_10: "no_connect", NC_11: "no_connect", CC_12: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:MAN3440A";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment orange LED common anode right hand decimal
 *
 * KiCad symbol: `Display_Character:MAN3610A`. Reference prefix: `U`.
 * Footprint filters: *MAN3610A*.
 * @see https://www.digchip.com/datasheets/parts/datasheet/161/MAN3640A-pdf.php
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:MAN3610A.
 */
export class MAN3610A extends Component.withPins({
  "A": "1",
  "F": "2",
  "CA_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "E": "7",
  "D": "8",
  "D.P.": "9",
  "C": "10",
  "G": "11",
  "NC_12": "12",
  "B": "13",
  "CA_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "input", F: "input", CA_3: "input", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", E: "input", D: "input", "D.P.": "input", C: "input", G: "input", NC_12: "no_connect", B: "input", CA_14: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:MAN3610A";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment orange LED common anode left hand decimal
 *
 * KiCad symbol: `Display_Character:MAN3620A`. Reference prefix: `U`.
 * Footprint filters: *MAN3620A*.
 * @see https://www.digchip.com/datasheets/parts/datasheet/161/MAN3640A-pdf.php
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:MAN3620A.
 */
export class MAN3620A extends Component.withPins({
  "A": "1",
  "F": "2",
  "CA_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "D.P.": "6",
  "E": "7",
  "D": "8",
  "NC_9": "9",
  "C": "10",
  "G": "11",
  "NC_12": "12",
  "B": "13",
  "CA_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "input", F: "input", CA_3: "input", NC_4: "no_connect", NC_5: "no_connect", "D.P.": "input", E: "input", D: "input", NC_9: "no_connect", C: "input", G: "input", NC_12: "no_connect", B: "input", CA_14: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:MAN3620A";
  override referencePrefix = "U";
}

/**
 * Overflow 7 segment orange LED common anode
 *
 * KiCad symbol: `Display_Character:MAN3630A`. Reference prefix: `U`.
 * Footprint filters: *MAN3630A*.
 * @see https://www.digchip.com/datasheets/parts/datasheet/161/MAN3640A-pdf.php
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:MAN3630A.
 */
export class MAN3630A extends Component.withPins({
  "CA_CD_1": "1",
  "NC_2": "2",
  "CA_CD_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "D": "7",
  "C": "8",
  "NC_9": "9",
  "B": "10",
  "A": "11",
  "NC_12": "12",
  "NC_13": "13",
  "CA_AB": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CA_CD_1: "input", NC_2: "no_connect", CA_CD_3: "input", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", D: "input", C: "input", NC_9: "no_connect", B: "input", A: "input", NC_12: "no_connect", NC_13: "no_connect", CA_AB: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:MAN3630A";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment orange LED common anode right hand decimal
 *
 * KiCad symbol: `Display_Character:MAN3640A`. Reference prefix: `U`.
 * Footprint filters: MAN3610A*.
 * @see https://www.digchip.com/datasheets/parts/datasheet/161/MAN3640A-pdf.php
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:MAN3610A.
 */
export class MAN3640A extends Component.withPins({
  "F": "1",
  "G": "2",
  "NC_3": "3",
  "CC_4": "4",
  "NC_5": "5",
  "E": "6",
  "D": "7",
  "C": "8",
  "D.P.": "9",
  "NC_10": "10",
  "NC_11": "11",
  "CC_12": "12",
  "B": "13",
  "A": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { F: "input", G: "input", NC_3: "no_connect", CC_4: "input", NC_5: "no_connect", E: "input", D: "input", C: "input", "D.P.": "input", NC_10: "no_connect", NC_11: "no_connect", CC_12: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:MAN3640A";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment yellow LED common anode right hand decimal
 *
 * KiCad symbol: `Display_Character:MAN3810A`. Reference prefix: `U`.
 * Footprint filters: *MAN3810A*.
 * @see https://www.digchip.com/datasheets/parts/datasheet/161/MAN3640A-pdf.php
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:MAN3810A.
 */
export class MAN3810A extends Component.withPins({
  "A": "1",
  "F": "2",
  "CA_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "E": "7",
  "D": "8",
  "D.P.": "9",
  "C": "10",
  "G": "11",
  "NC_12": "12",
  "B": "13",
  "CA_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "input", F: "input", CA_3: "input", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", E: "input", D: "input", "D.P.": "input", C: "input", G: "input", NC_12: "no_connect", B: "input", CA_14: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:MAN3810A";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment yellow LED common anode left hand decimal
 *
 * KiCad symbol: `Display_Character:MAN3820A`. Reference prefix: `U`.
 * Footprint filters: *MAN3820A*.
 * @see https://www.digchip.com/datasheets/parts/datasheet/161/MAN3640A-pdf.php
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:MAN3820A.
 */
export class MAN3820A extends Component.withPins({
  "A": "1",
  "F": "2",
  "CA_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "D.P.": "6",
  "E": "7",
  "D": "8",
  "NC_9": "9",
  "C": "10",
  "G": "11",
  "NC_12": "12",
  "B": "13",
  "CA_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "input", F: "input", CA_3: "input", NC_4: "no_connect", NC_5: "no_connect", "D.P.": "input", E: "input", D: "input", NC_9: "no_connect", C: "input", G: "input", NC_12: "no_connect", B: "input", CA_14: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:MAN3820A";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment yellow LED common anode right hand decimal
 *
 * KiCad symbol: `Display_Character:MAN3840A`. Reference prefix: `U`.
 * Footprint filters: MAN3810A*.
 * @see https://www.digchip.com/datasheets/parts/datasheet/161/MAN3640A-pdf.php
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:MAN3810A.
 */
export class MAN3840A extends Component.withPins({
  "F": "1",
  "G": "2",
  "NC_3": "3",
  "CC_4": "4",
  "NC_5": "5",
  "E": "6",
  "D": "7",
  "C": "8",
  "D.P.": "9",
  "NC_10": "10",
  "NC_11": "11",
  "CC_12": "12",
  "B": "13",
  "A": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { F: "input", G: "input", NC_3: "no_connect", CC_4: "input", NC_5: "no_connect", E: "input", D: "input", C: "input", "D.P.": "input", NC_10: "no_connect", NC_11: "no_connect", CC_12: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:MAN3840A";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment red LED common anode right hand decimal
 *
 * KiCad symbol: `Display_Character:MAN71A`. Reference prefix: `U`.
 * Footprint filters: *MAN71A*.
 * @see https://www.digchip.com/datasheets/parts/datasheet/161/MAN3640A-pdf.php
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:MAN71A.
 */
export class MAN71A extends Component.withPins({
  "A": "1",
  "F": "2",
  "CA_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "E": "7",
  "D": "8",
  "D.P.": "9",
  "C": "10",
  "G": "11",
  "NC_12": "12",
  "B": "13",
  "CA_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "input", F: "input", CA_3: "input", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", E: "input", D: "input", "D.P.": "input", C: "input", G: "input", NC_12: "no_connect", B: "input", CA_14: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:MAN71A";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment red LED common anode left hand decimal
 *
 * KiCad symbol: `Display_Character:MAN72A`. Reference prefix: `U`.
 * Footprint filters: MAN72A*.
 * @see https://www.digchip.com/datasheets/parts/datasheet/161/MAN3640A-pdf.php
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:MAN72A.
 */
export class MAN72A extends Component.withPins({
  "A": "1",
  "F": "2",
  "CA_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "D.P.": "6",
  "E": "7",
  "D": "8",
  "NC_9": "9",
  "C": "10",
  "G": "11",
  "NC_12": "12",
  "B": "13",
  "CA_14": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "input", F: "input", CA_3: "input", NC_4: "no_connect", NC_5: "no_connect", "D.P.": "input", E: "input", D: "input", NC_9: "no_connect", C: "input", G: "input", NC_12: "no_connect", B: "input", CA_14: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:MAN72A";
  override referencePrefix = "U";
}

/**
 * Overflow 7 segment red LED common anode
 *
 * KiCad symbol: `Display_Character:MAN73A`. Reference prefix: `U`.
 * Footprint filters: *MAN73A*.
 * @see https://www.digchip.com/datasheets/parts/datasheet/161/MAN3640A-pdf.php
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:MAN73A.
 */
export class MAN73A extends Component.withPins({
  "CA_CD_1": "1",
  "NC_2": "2",
  "CA_CD_3": "3",
  "NC_4": "4",
  "NC_5": "5",
  "NC_6": "6",
  "D": "7",
  "C": "8",
  "NC_9": "9",
  "B": "10",
  "A": "11",
  "NC_12": "12",
  "NC_13": "13",
  "CA_AB": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CA_CD_1: "input", NC_2: "no_connect", CA_CD_3: "input", NC_4: "no_connect", NC_5: "no_connect", NC_6: "no_connect", D: "input", C: "input", NC_9: "no_connect", B: "input", A: "input", NC_12: "no_connect", NC_13: "no_connect", CA_AB: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:MAN73A";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment red LED common anode right hand decimal
 *
 * KiCad symbol: `Display_Character:MAN74A`. Reference prefix: `U`.
 * Footprint filters: MAN71A*.
 * @see https://www.digchip.com/datasheets/parts/datasheet/161/MAN3640A-pdf.php
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:MAN71A.
 */
export class MAN74A extends Component.withPins({
  "F": "1",
  "G": "2",
  "NC_3": "3",
  "CC_4": "4",
  "NC_5": "5",
  "E": "6",
  "D": "7",
  "C": "8",
  "D.P.": "9",
  "NC_10": "10",
  "NC_11": "11",
  "CC_12": "12",
  "B": "13",
  "A": "14",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { F: "input", G: "input", NC_3: "no_connect", CC_4: "input", NC_5: "no_connect", E: "input", D: "input", C: "input", "D.P.": "input", NC_10: "no_connect", NC_11: "no_connect", CC_12: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:MAN74A";
  override referencePrefix = "U";
}

/**
 * LCD 20x4 Alphanumeric 16pin Blue/White/Green Backlight, 8bit parallel, 3.3V VDD
 *
 * KiCad symbol: `Display_Character:NHD-0420H1Z`. Reference prefix: `U`.
 * Footprint filters: NHD*0420H1Z*.
 * @see http://www.newhavendisplay.com/specs/NHD-0420H1Z-FSW-GBW-33V3.pdf
 * Keywords: display LCD 20x4.
 * Default footprint: Display:NHD-0420H1Z.
 */
export class NHD_0420H1Z extends Component.withPins({
  "VSS": "1",
  "VDD": "2",
  "VO": "3",
  "RS": "4",
  "R/W": "5",
  "E": "6",
  "DB0": "7",
  "DB1": "8",
  "DB2": "9",
  "DB3": "10",
  "DB4": "11",
  "DB5": "12",
  "DB6": "13",
  "DB7": "14",
  "A": "15",
  "K": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", VDD: "power_in", VO: "power_in", RS: "input", "R/W": "input", E: "input", DB0: "bidirectional", DB1: "bidirectional", DB2: "bidirectional", DB3: "bidirectional", DB4: "bidirectional", DB5: "bidirectional", DB6: "bidirectional", DB7: "bidirectional", A: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Display_Character:NHD-0420H1Z";
  override referencePrefix = "U";
}

/**
 * LCD 20x2 Alphanumeric 10pin Blue/White/Green Backlight, i2c, 3.3V VDD
 *
 * KiCad symbol: `Display_Character:NHD-C0220BIZ`. Reference prefix: `U`.
 * Footprint filters: NHD*C0220BiZ*.
 * @see http://www.newhavendisplay.com/specs/NHD-C0220BiZ-FSW-FBW-3V3M.pdf
 * Keywords: display LCD 20x2.
 * Default footprint: Display:NHD-C0220BiZ.
 */
export class NHD_C0220BIZ extends Component.withPins({
  "~{RST}": "1",
  "SCL": "2",
  "SDA": "3",
  "VSS": "4",
  "VDD": "5",
  "VOUT": "6",
  "C1+": "7",
  "C1-": "8",
  "A": "9",
  "K": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RST}": "input", SCL: "input", SDA: "bidirectional", VSS: "power_in", VDD: "power_in", VOUT: "passive", "C1+": "passive", "C1-": "passive", A: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Display_Character:NHD-C0220BIZ";
  override referencePrefix = "U";
}

/**
 * 2x20 character LCD module with common anode RGB backlight, I2C, 3.3V
 *
 * KiCad symbol: `Display_Character:NHD-C0220BIZ-FSRGB`. Reference prefix: `U`.
 * Footprint filters: NHD?C0220BiZ?FSRGB*.
 * @see https://newhavendisplay.com/content/specs/NHD-C0220BiZ-FSRGB-FBW-3VM.pdf
 * Keywords: lcd rgb character st736i i2c 2-wire twi.
 * Default footprint: Display:NHD-C0220BiZ-FSRGB.
 */
export class NHD_C0220BIZ_FSRGB extends Component.withPins({
  "~{RST}": "1",
  "SCL": "2",
  "SDA": "3",
  "V_{SS}": "4",
  "V_{DD}": "5",
  "V_{out}": "6",
  "C1+": "7",
  "C1-": "8",
  "LED+": "9",
  "(B)LED-": "10",
  "(G)LED-": "11",
  "(R)LED-": "12",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { "~{RST}": "input", SCL: "input", SDA: "bidirectional", "V_{SS}": "power_in", "V_{DD}": "power_in", "V_{out}": "passive", "C1+": "passive", "C1-": "passive", "LED+": "passive", "(B)LED-": "passive", "(G)LED-": "passive", "(R)LED-": "passive", ...opts.pinTypes } });
  }
  override schema = "Display_Character:NHD-C0220BIZ-FSRGB";
  override referencePrefix = "U";
}

/**
 * LCD 16x2 Alphanumeric gray backlight, 3 or 5V VDD
 *
 * KiCad symbol: `Display_Character:RC1602A`. Reference prefix: `U`.
 * Footprint filters: *RC1602A*.
 * @see http://www.raystar-optronics.com/down.php?ProID=18
 * Keywords: display LCD dot-matrix.
 * Default footprint: Display:RC1602A.
 */
export class RC1602A extends Component.withPins({
  "VSS": "1",
  "VDD": "2",
  "VO": "3",
  "RS": "4",
  "R/W": "5",
  "E": "6",
  "DB0": "7",
  "DB1": "8",
  "DB2": "9",
  "DB3": "10",
  "DB4": "11",
  "DB5": "12",
  "DB6": "13",
  "DB7": "14",
  "A/VEE": "15",
  "K": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", VDD: "power_in", VO: "power_in", RS: "input", "R/W": "input", E: "input", DB0: "bidirectional", DB1: "bidirectional", DB2: "bidirectional", DB3: "bidirectional", DB4: "bidirectional", DB5: "bidirectional", DB6: "bidirectional", DB7: "bidirectional", "A/VEE": "power_in", K: "power_in", ...opts.pinTypes } });
  }
  override schema = "Display_Character:RC1602A";
  override referencePrefix = "U";
}

/**
 * LCD 16x2 Alphanumeric 16pin Gray Backlight
 *
 * KiCad symbol: `Display_Character:RC1602A-GHW-ESX`. Reference prefix: `U`.
 * Footprint filters: RC1602A*.
 * @see http://www.raystar-optronics.com/down.php?ProID=18
 * Keywords: display LCD dot-matrix.
 * Default footprint: Display:RC1602A.
 */
export class RC1602A_GHW_ESX extends Component.withPins({
  "VSS": "1",
  "VDD": "2",
  "Vo": "3",
  "RS": "4",
  "R/~{W}": "5",
  "~{E}": "6",
  "DB0": "7",
  "DB1": "8",
  "DB2": "9",
  "DB3": "10",
  "DB4": "11",
  "DB5": "12",
  "DB6": "13",
  "DB7": "14",
  "A/VEE": "15",
  "K_16": "16",
  "A": "A1",
  "K_K1": "K1",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", VDD: "power_in", Vo: "input", RS: "input", "R/~{W}": "input", "~{E}": "input", DB0: "bidirectional", DB1: "bidirectional", DB2: "bidirectional", DB3: "bidirectional", DB4: "bidirectional", DB5: "bidirectional", DB6: "bidirectional", DB7: "bidirectional", "A/VEE": "passive", K_16: "passive", A: "passive", K_K1: "passive", ...opts.pinTypes } });
  }
  override schema = "Display_Character:RC1602A-GHW-ESX";
  override referencePrefix = "U";
}

/**
 * Super Bright Red Single-digit Numeric Display with white white diffused lens, common anode
 *
 * KiCad symbol: `Display_Character:SA15-11SRWA`. Reference prefix: `U`.
 * Footprint filters: SA15?11*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/SA15-11SRWA.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:SA15-11xxx.
 */
export class SA15_11SRWA extends Component.withPins({
  "CA_1": "1",
  "E": "2",
  "D": "3",
  "C": "4",
  "CA_5": "5",
  "B": "6",
  "A": "7",
  "DP": "8",
  "F": "9",
  "G": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CA_1: "input", E: "input", D: "input", C: "input", CA_5: "input", B: "input", A: "input", DP: "input", F: "input", G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:SA15-11SRWA";
  override referencePrefix = "U";
}

/**
 * High Efficiency Red Single-digit Numeric Display with white white diffused lens, common anode
 *
 * KiCad symbol: `Display_Character:SA15-11EWA`. Reference prefix: `U`.
 * Footprint filters: SA15?11*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/SA15-11EWA.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:SA15-11xxx.
 */
export class SA15_11EWA extends Component.withPins({
  "CA_1": "1",
  "E": "2",
  "D": "3",
  "C": "4",
  "CA_5": "5",
  "B": "6",
  "A": "7",
  "DP": "8",
  "F": "9",
  "G": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CA_1: "input", E: "input", D: "input", C: "input", CA_5: "input", B: "input", A: "input", DP: "input", F: "input", G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:SA15-11EWA";
  override referencePrefix = "U";
}

/**
 * Green Single-digit Numeric Display with white white diffused lens, common anode
 *
 * KiCad symbol: `Display_Character:SA15-11GWA`. Reference prefix: `U`.
 * Footprint filters: SA15?11*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/SA15-11GWA.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:SA15-11xxx.
 */
export class SA15_11GWA extends Component.withPins({
  "CA_1": "1",
  "E": "2",
  "D": "3",
  "C": "4",
  "CA_5": "5",
  "B": "6",
  "A": "7",
  "DP": "8",
  "F": "9",
  "G": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CA_1: "input", E: "input", D: "input", C: "input", CA_5: "input", B: "input", A: "input", DP: "input", F: "input", G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:SA15-11GWA";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment display, high efficiency red, common anode
 *
 * KiCad symbol: `Display_Character:SA39-11EWA`. Reference prefix: `U`.
 * Footprint filters: S?39?1*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/sa39-11ewa.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:Sx39-1xxxxx.
 */
export class SA39_11EWA extends Component.withPins({
  "G": "1",
  "F": "2",
  "CA_3": "3",
  "E": "4",
  "D": "5",
  "DP": "6",
  "C": "7",
  "CA_8": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", F: "input", CA_3: "input", E: "input", D: "input", DP: "input", C: "input", CA_8: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:SA39-11EWA";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment display, green, common anode
 *
 * KiCad symbol: `Display_Character:SA39-11GWA`. Reference prefix: `U`.
 * Footprint filters: S?39?1*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/sa39-11gwa.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:Sx39-1xxxxx.
 */
export class SA39_11GWA extends Component.withPins({
  "G": "1",
  "F": "2",
  "CA_3": "3",
  "E": "4",
  "D": "5",
  "DP": "6",
  "C": "7",
  "CA_8": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", F: "input", CA_3: "input", E: "input", D: "input", DP: "input", C: "input", CA_8: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:SA39-11GWA";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment display, super bright red, common anode
 *
 * KiCad symbol: `Display_Character:SA39-11SRWA`. Reference prefix: `U`.
 * Footprint filters: S?39?1*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/sa39-11srwa.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:Sx39-1xxxxx.
 */
export class SA39_11SRWA extends Component.withPins({
  "G": "1",
  "F": "2",
  "CA_3": "3",
  "E": "4",
  "D": "5",
  "DP": "6",
  "C": "7",
  "CA_8": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", F: "input", CA_3: "input", E: "input", D: "input", DP: "input", C: "input", CA_8: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:SA39-11SRWA";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment display, yellow, common anode
 *
 * KiCad symbol: `Display_Character:SA39-11YWA`. Reference prefix: `U`.
 * Footprint filters: S?39?1*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/sa39-11ywa.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:Sx39-1xxxxx.
 */
export class SA39_11YWA extends Component.withPins({
  "G": "1",
  "F": "2",
  "CA_3": "3",
  "E": "4",
  "D": "5",
  "DP": "6",
  "C": "7",
  "CA_8": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", F: "input", CA_3: "input", E: "input", D: "input", DP: "input", C: "input", CA_8: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:SA39-11YWA";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment display, high efficiency red, common anode
 *
 * KiCad symbol: `Display_Character:SA39-12EWA`. Reference prefix: `U`.
 * Footprint filters: S?39?1*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/sa39-12ewa.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:Sx39-1xxxxx.
 */
export class SA39_12EWA extends Component.withPins({
  "CA_1": "1",
  "F": "2",
  "G": "3",
  "E": "4",
  "D": "5",
  "CA_6": "6",
  "DP": "7",
  "C": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CA_1: "input", F: "input", G: "input", E: "input", D: "input", CA_6: "input", DP: "input", C: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:SA39-12EWA";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment display, green, common anode
 *
 * KiCad symbol: `Display_Character:SA39-12GWA`. Reference prefix: `U`.
 * Footprint filters: S?39?1*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/sa39-12gwa.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:Sx39-1xxxxx.
 */
export class SA39_12GWA extends Component.withPins({
  "CA_1": "1",
  "F": "2",
  "G": "3",
  "E": "4",
  "D": "5",
  "CA_6": "6",
  "DP": "7",
  "C": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CA_1: "input", F: "input", G: "input", E: "input", D: "input", CA_6: "input", DP: "input", C: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:SA39-12GWA";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment display, super bright red, common anode
 *
 * KiCad symbol: `Display_Character:SA39-12SRWA`. Reference prefix: `U`.
 * Footprint filters: S?39?1*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/sa39-12srwa.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:Sx39-1xxxxx.
 */
export class SA39_12SRWA extends Component.withPins({
  "CA_1": "1",
  "F": "2",
  "G": "3",
  "E": "4",
  "D": "5",
  "CA_6": "6",
  "DP": "7",
  "C": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CA_1: "input", F: "input", G: "input", E: "input", D: "input", CA_6: "input", DP: "input", C: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:SA39-12SRWA";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment display, yellow, common anode
 *
 * KiCad symbol: `Display_Character:SA39-12YWA`. Reference prefix: `U`.
 * Footprint filters: S?39?1*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/sa39-12ywa.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:Sx39-1xxxxx.
 */
export class SA39_12YWA extends Component.withPins({
  "CA_1": "1",
  "F": "2",
  "G": "3",
  "E": "4",
  "D": "5",
  "CA_6": "6",
  "DP": "7",
  "C": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CA_1: "input", F: "input", G: "input", E: "input", D: "input", CA_6: "input", DP: "input", C: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:SA39-12YWA";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment hyper red and green LED display, common cathode
 *
 * KiCad symbol: `Display_Character:SBC18-11SURKCGKWA`. Reference prefix: `U`.
 * Footprint filters: *SBC18*11*.
 * @see http://www.kingbright.com/attachments/file/psearch/000/00/00/SBC18-11SURKCGKWA(Ver.6A).pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:SBC18-11SURKCGKWA.
 */
export class SBC18_11SURKCGKWA extends Component.withPins({
  "CC_1": "1",
  "E": "2",
  "D": "3",
  "C": "4",
  "CC_5": "5",
  "B": "6",
  "A": "7",
  "DP": "8",
  "F": "9",
  "G": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC_1: "input", E: "input", D: "input", C: "input", CC_5: "input", B: "input", A: "input", DP: "input", F: "input", G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:SBC18-11SURKCGKWA";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment hyper red and green LED display, common cathode
 *
 * KiCad symbol: `Display_Character:SBC18-11EGWA`. Reference prefix: `U`.
 * Footprint filters: *SBC18*11*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/SBC18-11EGWA.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:SBC18-11SURKCGKWA.
 */
export class SBC18_11EGWA extends Component.withPins({
  "CC_1": "1",
  "E": "2",
  "D": "3",
  "C": "4",
  "CC_5": "5",
  "B": "6",
  "A": "7",
  "DP": "8",
  "F": "9",
  "G": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC_1: "input", E: "input", D: "input", C: "input", CC_5: "input", B: "input", A: "input", DP: "input", F: "input", G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:SBC18-11EGWA";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment display, high efficiency red, common cathode
 *
 * KiCad symbol: `Display_Character:SC39-11EWA`. Reference prefix: `U`.
 * Footprint filters: S?39?1*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/sc39-11ewa.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:Sx39-1xxxxx.
 */
export class SC39_11EWA extends Component.withPins({
  "G": "1",
  "F": "2",
  "CC_3": "3",
  "E": "4",
  "D": "5",
  "DP": "6",
  "C": "7",
  "CC_8": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", F: "input", CC_3: "input", E: "input", D: "input", DP: "input", C: "input", CC_8: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:SC39-11EWA";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment display, green, common cathode
 *
 * KiCad symbol: `Display_Character:SC39-11GWA`. Reference prefix: `U`.
 * Footprint filters: S?39?1*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/sc39-11gwa.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:Sx39-1xxxxx.
 */
export class SC39_11GWA extends Component.withPins({
  "G": "1",
  "F": "2",
  "CC_3": "3",
  "E": "4",
  "D": "5",
  "DP": "6",
  "C": "7",
  "CC_8": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", F: "input", CC_3: "input", E: "input", D: "input", DP: "input", C: "input", CC_8: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:SC39-11GWA";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment display, super bright red, common cathode
 *
 * KiCad symbol: `Display_Character:SC39-11SRWA`. Reference prefix: `U`.
 * Footprint filters: S?39?1*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/sc39-11srwa.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:Sx39-1xxxxx.
 */
export class SC39_11SRWA extends Component.withPins({
  "G": "1",
  "F": "2",
  "CC_3": "3",
  "E": "4",
  "D": "5",
  "DP": "6",
  "C": "7",
  "CC_8": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", F: "input", CC_3: "input", E: "input", D: "input", DP: "input", C: "input", CC_8: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:SC39-11SRWA";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment display, yellow, common cathode
 *
 * KiCad symbol: `Display_Character:SC39-11YWA`. Reference prefix: `U`.
 * Footprint filters: S?39?1*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/sc39-11ywa.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:Sx39-1xxxxx.
 */
export class SC39_11YWA extends Component.withPins({
  "G": "1",
  "F": "2",
  "CC_3": "3",
  "E": "4",
  "D": "5",
  "DP": "6",
  "C": "7",
  "CC_8": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", F: "input", CC_3: "input", E: "input", D: "input", DP: "input", C: "input", CC_8: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:SC39-11YWA";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment display, high efficiency red, common cathode
 *
 * KiCad symbol: `Display_Character:SC39-12EWA`. Reference prefix: `U`.
 * Footprint filters: S?39?1*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/sc39-12ewa.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:Sx39-1xxxxx.
 */
export class SC39_12EWA extends Component.withPins({
  "CC_1": "1",
  "F": "2",
  "G": "3",
  "E": "4",
  "D": "5",
  "CC_6": "6",
  "DP": "7",
  "C": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC_1: "input", F: "input", G: "input", E: "input", D: "input", CC_6: "input", DP: "input", C: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:SC39-12EWA";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment display, green, common cathode
 *
 * KiCad symbol: `Display_Character:SC39-12GWA`. Reference prefix: `U`.
 * Footprint filters: S?39?1*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/sc39-12gwa.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:Sx39-1xxxxx.
 */
export class SC39_12GWA extends Component.withPins({
  "CC_1": "1",
  "F": "2",
  "G": "3",
  "E": "4",
  "D": "5",
  "CC_6": "6",
  "DP": "7",
  "C": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC_1: "input", F: "input", G: "input", E: "input", D: "input", CC_6: "input", DP: "input", C: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:SC39-12GWA";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment display, super bright red, common cathode
 *
 * KiCad symbol: `Display_Character:SC39-12SRWA`. Reference prefix: `U`.
 * Footprint filters: S?39?1*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/sc39-12srwa.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:Sx39-1xxxxx.
 */
export class SC39_12SRWA extends Component.withPins({
  "CC_1": "1",
  "F": "2",
  "G": "3",
  "E": "4",
  "D": "5",
  "CC_6": "6",
  "DP": "7",
  "C": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC_1: "input", F: "input", G: "input", E: "input", D: "input", CC_6: "input", DP: "input", C: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:SC39-12SRWA";
  override referencePrefix = "U";
}

/**
 * Single digit 7 segment display, yellow, common cathode
 *
 * KiCad symbol: `Display_Character:SC39-12YWA`. Reference prefix: `U`.
 * Footprint filters: S?39?1*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/sc39-12ywa.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:Sx39-1xxxxx.
 */
export class SC39_12YWA extends Component.withPins({
  "CC_1": "1",
  "F": "2",
  "G": "3",
  "E": "4",
  "D": "5",
  "CC_6": "6",
  "DP": "7",
  "C": "8",
  "B": "9",
  "A": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { CC_1: "input", F: "input", G: "input", E: "input", D: "input", CC_6: "input", DP: "input", C: "input", B: "input", A: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:SC39-12YWA";
  override referencePrefix = "U";
}

/**
 * One digit 7 segment blue LED, common cathode
 *
 * KiCad symbol: `Display_Character:SM420561N`. Reference prefix: `U`.
 * Footprint filters: 7SegmentLED?LTS6760?LTS6780*.
 * @see https://datasheet.lcsc.com/szlcsc/Wuxi-ARK-Tech-Elec-SM420561N_C141367.pdf
 * Keywords: display LED 7-segment.
 * Default footprint: Display_7Segment:7SegmentLED_LTS6760_LTS6780.
 */
export class SM420561N extends Component.withPins({
  "E": "1",
  "D": "2",
  "CC_3": "3",
  "C": "4",
  "DP": "5",
  "B": "6",
  "A": "7",
  "CC_8": "8",
  "F": "9",
  "G": "10",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { E: "input", D: "input", CC_3: "input", C: "input", DP: "input", B: "input", A: "input", CC_8: "input", F: "input", G: "input", ...opts.pinTypes } });
  }
  override schema = "Display_Character:SM420561N";
  override referencePrefix = "U";
}

/**
 * LCD 16x2 Alphanumeric , 8 bit parallel bus, 5V VDD
 *
 * KiCad symbol: `Display_Character:WC1602A`. Reference prefix: `DS`.
 * Footprint filters: *WC*1602A*.
 * @see http://www.wincomlcd.com/pdf/WC1602A-SFYLYHTC06.pdf
 * Keywords: display LCD dot-matrix.
 * Default footprint: Display:WC1602A.
 */
export class WC1602A extends Component.withPins({
  "VSS": "1",
  "VDD": "2",
  "VO": "3",
  "RS": "4",
  "R/W": "5",
  "E": "6",
  "D0": "7",
  "D1": "8",
  "D2": "9",
  "D3": "10",
  "D4": "11",
  "D5": "12",
  "D6": "13",
  "D7": "14",
  "LED(+)": "15",
  "LED(-)": "16",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", VDD: "power_in", VO: "input", RS: "input", "R/W": "input", E: "input", D0: "input", D1: "input", D2: "input", D3: "input", D4: "input", D5: "input", D6: "input", D7: "input", "LED(+)": "power_in", "LED(-)": "power_in", ...opts.pinTypes } });
  }
  override schema = "Display_Character:WC1602A";
  override referencePrefix = "DS";
}
