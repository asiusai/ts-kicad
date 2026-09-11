// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * RGB LED with integrated controller, 5mm Package
 *
 * KiCad symbol: `LED:APA-106-F5`. Reference prefix: `D`.
 * Footprint filters: LED*D5.0mm*RGB*.
 * @see https://cdn.sparkfun.com/datasheets/Components/LED/COM-12877.pdf
 * Keywords: RGB LED addressable 8bit pwm 5bit greyscale.
 * Default footprint: LED_THT:LED_D5.0mm-4_RGB.
 */
export class APA_106_F5 extends Component.withPins({
  "DO": "1",
  "GND": "2",
  "VDD": "3",
  "DI": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DO: "output", GND: "power_in", VDD: "power_in", DI: "input", ...opts.pinTypes } });
  }
  override schema = "LED:APA-106-F5";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller
 *
 * KiCad symbol: `LED:APA102`. Reference prefix: `D`.
 * Footprint filters: LED*RGB*5050*.
 * @see http://www.led-color.com/upload/201506/APA102%20LED.pdf
 * Keywords: RGB LED addressable 8bit pwm 5bit greyscale.
 * Default footprint: LED_SMD:LED_RGB_5050-6.
 */
export class APA102 extends Component.withPins({
  "DI": "1",
  "CI": "2",
  "GND": "3",
  "VCC": "4",
  "CO": "5",
  "DO": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DI: "input", CI: "input", GND: "power_in", VCC: "power_in", CO: "output", DO: "output", ...opts.pinTypes } });
  }
  override schema = "LED:APA102";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller
 *
 * KiCad symbol: `LED:APA102-2020`. Reference prefix: `D`.
 * Footprint filters: LED*APA102*.
 * @see http://www.led-color.com/upload/201604/APA102-2020%20SMD%20LED.pdf
 * Keywords: RGB LED addressable 8bit pwm 5bit greyscale.
 * Default footprint: LED_SMD:LED-APA102-2020.
 */
export class APA102_2020 extends Component.withPins({
  "VDD": "1",
  "CKO": "2",
  "SDO": "3",
  "SDI": "4",
  "CKI": "5",
  "GND": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", CKO: "output", SDO: "output", SDI: "input", CKI: "input", GND: "power_in", ...opts.pinTypes } });
  }
  override schema = "LED:APA102-2020";
  override referencePrefix = "D";
}

/**
 * LED RGB, Common Anode, SMD, 3.0x1.5mm, Horizontal
 *
 * KiCad symbol: `LED:APFA3010`. Reference prefix: `D`.
 * Footprint filters: *Kingbright*APFA3010*3x1.5mm*Horizontal*.
 * @see http://www.kingbrightusa.com/images/catalog/SPEC/APFA3010LSEEZGKQBKC.pdf
 * Keywords: LED RGB SMD Kingbright APFA3010 Horizontal.
 * Default footprint: LED_SMD:LED_Kingbright_APFA3010_3x1.5mm_Horizontal.
 */
export class APFA3010 extends Component.withPins({
  "R": "1",
  "A": "2",
  "G": "3",
  "B": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { R: "input", A: "power_in", G: "input", B: "input", ...opts.pinTypes } });
  }
  override schema = "LED:APFA3010";
  override referencePrefix = "D";
}

/**
 * Tricolor Black Surface LED, Common Anode Pin 1, PLCC-4
 *
 * KiCad symbol: `LED:ASMB-MTB0-0A3A2`. Reference prefix: `D`.
 * Footprint filters: *Avago*PLCC4*3.2x2.8mm*.
 * @see https://docs.broadcom.com/docs/AV02-4186EN
 * Keywords: led rgb diode.
 * Default footprint: LED_SMD:LED_Avago_PLCC4_3.2x2.8mm_CW.
 */
export class ASMB_MTB0_0A3A2 extends Component.withPins({
  "A": "1",
  "BK": "2",
  "GK": "3",
  "RK": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", BK: "passive", GK: "passive", RK: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:ASMB-MTB0-0A3A2";
  override referencePrefix = "D";
}

/**
 * Tricolor Black Surface LED, Common Anode Pin 4, PLCC-4
 *
 * KiCad symbol: `LED:ASMB-MTB1-0A3A2`. Reference prefix: `D`.
 * Footprint filters: *Avago*PLCC4*3.2x2.8mm*.
 * @see https://docs.broadcom.com/docs/AV02-4194EN
 * Keywords: led rgb diode.
 * Default footprint: LED_SMD:LED_Avago_PLCC4_3.2x2.8mm_CW.
 */
export class ASMB_MTB1_0A3A2 extends Component.withPins({
  "RK": "1",
  "GK": "2",
  "BK": "3",
  "A": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { RK: "passive", GK: "passive", BK: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:ASMB-MTB1-0A3A2";
  override referencePrefix = "D";
}

/**
 * Triple LED RVB (Avago Technology)
 *
 * KiCad symbol: `LED:ASMT-YTC2-0AA02`. Reference prefix: `D`.
 * Footprint filters: LED?Avago?PLCC6?3x2.8mm*.
 * @see http://www.avagotech.com/docs/AV02-2589EN
 * Keywords: LED RGB.
 * Default footprint: LED_SMD:LED_Avago_PLCC6_3x2.8mm.
 */
export class ASMT_YTC2_0AA02 extends Component.withPins({
  "KB": "1",
  "KG": "2",
  "KR": "3",
  "AR": "4",
  "AG": "5",
  "AB": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { KB: "passive", KG: "passive", KR: "passive", AR: "passive", AG: "passive", AB: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:ASMT-YTC2-0AA02";
  override referencePrefix = "D";
}

/**
 * Triple LED RVB (Avago Technology)
 *
 * KiCad symbol: `LED:ASMT-YTB7-0AA02`. Reference prefix: `D`.
 * Footprint filters: LED?Avago?PLCC6?3x2.8mm*.
 * @see https://docs.broadcom.com/docs/AV02-3793EN
 * Keywords: LED RGB.
 * Default footprint: LED_SMD:LED_Avago_PLCC6_3x2.8mm.
 */
export class ASMT_YTB7_0AA02 extends Component.withPins({
  "KB": "1",
  "KG": "2",
  "KR": "3",
  "AR": "4",
  "AG": "5",
  "AB": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { KB: "passive", KG: "passive", KR: "passive", AR: "passive", AG: "passive", AB: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:ASMT-YTB7-0AA02";
  override referencePrefix = "D";
}

/**
 * Cree PLCC6 3 in 1 SMD LED, PLCC-6
 *
 * KiCad symbol: `LED:CLS6B-FKW`. Reference prefix: `D`.
 * Footprint filters: LED*Cree*PLCC*4.7x1.5mm*.
 * @see https://www.cree.com/led-components/media/documents/CLS6B-FKW.pdf
 * Keywords: LED RGB.
 * Default footprint: LED_SMD:LED_Cree-PLCC6_4.7x1.5mm.
 */
export class CLS6B_FKW extends Component.withPins({
  "AB": "1",
  "KB": "2",
  "AR": "3",
  "KR_4": "4",
  "AG": "5",
  "KR_6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { AB: "passive", KB: "passive", AR: "passive", KR_4: "passive", AG: "passive", KR_6: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:CLS6B-FKW";
  override referencePrefix = "D";
}

/**
 * Cree PLCC4 3 in 1 SMD LED
 *
 * KiCad symbol: `LED:CLV1L-FKB`. Reference prefix: `D`.
 * Footprint filters: *Cree*PLCC4*3.2x2.8mm*.
 * @see http://www.cree.com/led-components/media/documents/CLV1L-FKB-1238.pdf
 * Keywords: led rgb diode.
 * Default footprint: LED_SMD:LED_Cree-PLCC4_3.2x2.8mm_CCW.
 */
export class CLV1L_FKB extends Component.withPins({
  "A": "1",
  "RK": "2",
  "GK": "3",
  "BK": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", RK: "passive", GK: "passive", BK: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:CLV1L-FKB";
  override referencePrefix = "D";
}

/**
 * RGB LED, PLCC-6
 *
 * KiCad symbol: `LED:CLX6F-FKC`. Reference prefix: `D`.
 * Footprint filters: LED?RGB?PLCC*.
 * @see https://assets.cree-led.com/a/ds/h/HB-CLX6F-FKC.pdf
 * Keywords: LED RGB.
 * Default footprint: LED_SMD:LED_RGB_PLCC-6.
 */
export class CLX6F_FKC extends Component.withPins({
  "KB": "1",
  "KG": "2",
  "KR": "3",
  "AR": "4",
  "AG": "5",
  "AB": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { KB: "passive", KG: "passive", KR: "passive", AR: "passive", AG: "passive", AB: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:CLX6F-FKC";
  override referencePrefix = "D";
}

/**
 * 940nm IR-LED, 5mm
 *
 * KiCad symbol: `LED:LD271`. Reference prefix: `D`.
 * Footprint filters: LED*5.0mm*IRGrey*.
 * @see http://www.alliedelec.com/m/d/40788c34903a719969df15f1fbea1056.pdf
 * Keywords: IR LED.
 * Default footprint: LED_THT:LED_D5.0mm_IRGrey.
 */
export class LD271 extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:LD271";
  override referencePrefix = "D";
}

/**
 * 950nm IR-LED, 5mm
 *
 * KiCad symbol: `LED:CQY99`. Reference prefix: `D`.
 * Footprint filters: LED*5.0mm*IRGrey*.
 * @see https://www.prtice.info/IMG/pdf/CQY99.pdf
 * Keywords: IR LED.
 * Default footprint: LED_THT:LED_D5.0mm_IRGrey.
 */
export class CQY99 extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:CQY99";
  override referencePrefix = "D";
}

/**
 * 10-element LED arrays, high efficient red
 *
 * KiCad symbol: `LED:HDSP-4830`. Reference prefix: `BAR`.
 * Footprint filters: HDSP?48*.
 * @see https://docs.broadcom.com/docs/AV02-1798EN
 * Keywords: display LED array.
 * Default footprint: Display:HDSP-4830.
 */
export class HDSP_4830 extends Component.withPins({
  "A_1": "1",
  "K_20": "20",
  "A_2": "2",
  "K_19": "19",
  "A_3": "3",
  "K_18": "18",
  "A_4": "4",
  "K_17": "17",
  "A_5": "5",
  "K_16": "16",
  "A_6": "6",
  "K_15": "15",
  "A_7": "7",
  "K_14": "14",
  "A_8": "8",
  "K_13": "13",
  "A_9": "9",
  "K_12": "12",
  "A_10": "10",
  "K_11": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", K_20: "passive", A_2: "passive", K_19: "passive", A_3: "passive", K_18: "passive", A_4: "passive", K_17: "passive", A_5: "passive", K_16: "passive", A_6: "passive", K_15: "passive", A_7: "passive", K_14: "passive", A_8: "passive", K_13: "passive", A_9: "passive", K_12: "passive", A_10: "passive", K_11: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:HDSP-4830";
  override referencePrefix = "BAR";
}

/**
 * BAR GRAPH 10 segment block, high efficiency red
 *
 * KiCad symbol: `LED:HDSP-4830_2`. Reference prefix: `BAR`.
 * Footprint filters: HDSP?48*.
 * @see https://docs.broadcom.com/docs/AV02-1798EN
 * Keywords: display LED array.
 * Default footprint: Display:HDSP-4830.
 */
export class HDSP_4830_2 extends Component.withPins({
  "A_1": "1",
  "A_2": "2",
  "A_3": "3",
  "A_4": "4",
  "A_5": "5",
  "A_6": "6",
  "A_7": "7",
  "A_8": "8",
  "A_9": "9",
  "A_10": "10",
  "K_11": "11",
  "K_12": "12",
  "K_13": "13",
  "K_14": "14",
  "K_15": "15",
  "K_16": "16",
  "K_17": "17",
  "K_18": "18",
  "K_19": "19",
  "K_20": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", A_2: "passive", A_3: "passive", A_4: "passive", A_5: "passive", A_6: "passive", A_7: "passive", A_8: "passive", A_9: "passive", A_10: "passive", K_11: "passive", K_12: "passive", K_13: "passive", K_14: "passive", K_15: "passive", K_16: "passive", K_17: "passive", K_18: "passive", K_19: "passive", K_20: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:HDSP-4830_2";
  override referencePrefix = "BAR";
}

/**
 * 10-element LED arrays, Mix of high efficient red, yellow and green
 *
 * KiCad symbol: `LED:HDSP-4832`. Reference prefix: `BAR`.
 * Footprint filters: HDSP?48*.
 * @see https://docs.broadcom.com/docs/AV02-1798EN
 * Keywords: display LED array.
 * Default footprint: Display:HDSP-4832.
 */
export class HDSP_4832 extends Component.withPins({
  "A_1": "1",
  "K_20": "20",
  "A_2": "2",
  "K_19": "19",
  "A_3": "3",
  "K_18": "18",
  "A_4": "4",
  "K_17": "17",
  "A_5": "5",
  "K_16": "16",
  "A_6": "6",
  "K_15": "15",
  "A_7": "7",
  "K_14": "14",
  "A_8": "8",
  "K_13": "13",
  "A_9": "9",
  "K_12": "12",
  "A_10": "10",
  "K_11": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", K_20: "passive", A_2: "passive", K_19: "passive", A_3: "passive", K_18: "passive", A_4: "passive", K_17: "passive", A_5: "passive", K_16: "passive", A_6: "passive", K_15: "passive", A_7: "passive", K_14: "passive", A_8: "passive", K_13: "passive", A_9: "passive", K_12: "passive", A_10: "passive", K_11: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:HDSP-4832";
  override referencePrefix = "BAR";
}

/**
 * BAR GRAPH 10 segment block, Mix of high efficiency red, yellow and green
 *
 * KiCad symbol: `LED:HDSP-4832_2`. Reference prefix: `BAR`.
 * Footprint filters: HDSP?48*.
 * @see https://docs.broadcom.com/docs/AV02-1798EN
 * Keywords: display LED array.
 * Default footprint: Display:HDSP-4832.
 */
export class HDSP_4832_2 extends Component.withPins({
  "A_1": "1",
  "A_2": "2",
  "A_3": "3",
  "A_4": "4",
  "A_5": "5",
  "A_6": "6",
  "A_7": "7",
  "A_8": "8",
  "A_9": "9",
  "A_10": "10",
  "K_11": "11",
  "K_12": "12",
  "K_13": "13",
  "K_14": "14",
  "K_15": "15",
  "K_16": "16",
  "K_17": "17",
  "K_18": "18",
  "K_19": "19",
  "K_20": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", A_2: "passive", A_3: "passive", A_4: "passive", A_5: "passive", A_6: "passive", A_7: "passive", A_8: "passive", A_9: "passive", A_10: "passive", K_11: "passive", K_12: "passive", K_13: "passive", K_14: "passive", K_15: "passive", K_16: "passive", K_17: "passive", K_18: "passive", K_19: "passive", K_20: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:HDSP-4832_2";
  override referencePrefix = "BAR";
}

/**
 * 10-element LED arrays, Mix of high efficient red, yellow and green
 *
 * KiCad symbol: `LED:HDSP-4836`. Reference prefix: `BAR`.
 * Footprint filters: HDSP?48*.
 * @see https://docs.broadcom.com/docs/AV02-1798EN
 * Keywords: display LED array.
 * Default footprint: Display:HDSP-4836.
 */
export class HDSP_4836 extends Component.withPins({
  "A_1": "1",
  "K_20": "20",
  "A_2": "2",
  "K_19": "19",
  "A_3": "3",
  "K_18": "18",
  "A_4": "4",
  "K_17": "17",
  "A_5": "5",
  "K_16": "16",
  "A_6": "6",
  "K_15": "15",
  "A_7": "7",
  "K_14": "14",
  "A_8": "8",
  "K_13": "13",
  "A_9": "9",
  "K_12": "12",
  "A_10": "10",
  "K_11": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", K_20: "passive", A_2: "passive", K_19: "passive", A_3: "passive", K_18: "passive", A_4: "passive", K_17: "passive", A_5: "passive", K_16: "passive", A_6: "passive", K_15: "passive", A_7: "passive", K_14: "passive", A_8: "passive", K_13: "passive", A_9: "passive", K_12: "passive", A_10: "passive", K_11: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:HDSP-4836";
  override referencePrefix = "BAR";
}

/**
 * BAR GRAPH 10 segment block, Mix of high efficiency red, yellow and green
 *
 * KiCad symbol: `LED:HDSP-4836_2`. Reference prefix: `BAR`.
 * Footprint filters: HDSP?48*.
 * @see https://docs.broadcom.com/docs/AV02-1798EN
 * Keywords: display LED array.
 * Default footprint: Display:HDSP-4836.
 */
export class HDSP_4836_2 extends Component.withPins({
  "A_1": "1",
  "A_2": "2",
  "A_3": "3",
  "A_4": "4",
  "A_5": "5",
  "A_6": "6",
  "A_7": "7",
  "A_8": "8",
  "A_9": "9",
  "A_10": "10",
  "K_11": "11",
  "K_12": "12",
  "K_13": "13",
  "K_14": "14",
  "K_15": "15",
  "K_16": "16",
  "K_17": "17",
  "K_18": "18",
  "K_19": "19",
  "K_20": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", A_2: "passive", A_3: "passive", A_4: "passive", A_5: "passive", A_6: "passive", A_7: "passive", A_8: "passive", A_9: "passive", A_10: "passive", K_11: "passive", K_12: "passive", K_13: "passive", K_14: "passive", K_15: "passive", K_16: "passive", K_17: "passive", K_18: "passive", K_19: "passive", K_20: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:HDSP-4836_2";
  override referencePrefix = "BAR";
}

/**
 * 10-element LED arrays, Yellow
 *
 * KiCad symbol: `LED:HDSP-4840`. Reference prefix: `BAR`.
 * Footprint filters: HDSP?48*.
 * @see https://docs.broadcom.com/docs/AV02-1798EN
 * Keywords: display LED array.
 * Default footprint: Display:HDSP-4840.
 */
export class HDSP_4840 extends Component.withPins({
  "A_1": "1",
  "K_20": "20",
  "A_2": "2",
  "K_19": "19",
  "A_3": "3",
  "K_18": "18",
  "A_4": "4",
  "K_17": "17",
  "A_5": "5",
  "K_16": "16",
  "A_6": "6",
  "K_15": "15",
  "A_7": "7",
  "K_14": "14",
  "A_8": "8",
  "K_13": "13",
  "A_9": "9",
  "K_12": "12",
  "A_10": "10",
  "K_11": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", K_20: "passive", A_2: "passive", K_19: "passive", A_3: "passive", K_18: "passive", A_4: "passive", K_17: "passive", A_5: "passive", K_16: "passive", A_6: "passive", K_15: "passive", A_7: "passive", K_14: "passive", A_8: "passive", K_13: "passive", A_9: "passive", K_12: "passive", A_10: "passive", K_11: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:HDSP-4840";
  override referencePrefix = "BAR";
}

/**
 * BAR GRAPH 10 segment block, yellow
 *
 * KiCad symbol: `LED:HDSP-4840_2`. Reference prefix: `BAR`.
 * Footprint filters: HDSP?48*.
 * @see https://docs.broadcom.com/docs/AV02-1798EN
 * Keywords: display LED array.
 * Default footprint: Display:HDSP-4840.
 */
export class HDSP_4840_2 extends Component.withPins({
  "A_1": "1",
  "A_2": "2",
  "A_3": "3",
  "A_4": "4",
  "A_5": "5",
  "A_6": "6",
  "A_7": "7",
  "A_8": "8",
  "A_9": "9",
  "A_10": "10",
  "K_11": "11",
  "K_12": "12",
  "K_13": "13",
  "K_14": "14",
  "K_15": "15",
  "K_16": "16",
  "K_17": "17",
  "K_18": "18",
  "K_19": "19",
  "K_20": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", A_2: "passive", A_3: "passive", A_4: "passive", A_5: "passive", A_6: "passive", A_7: "passive", A_8: "passive", A_9: "passive", A_10: "passive", K_11: "passive", K_12: "passive", K_13: "passive", K_14: "passive", K_15: "passive", K_16: "passive", K_17: "passive", K_18: "passive", K_19: "passive", K_20: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:HDSP-4840_2";
  override referencePrefix = "BAR";
}

/**
 * 10-element LED arrays, Green
 *
 * KiCad symbol: `LED:HDSP-4850`. Reference prefix: `BAR`.
 * Footprint filters: HDSP?48*.
 * @see https://docs.broadcom.com/docs/AV02-1798EN
 * Keywords: display LED array.
 * Default footprint: Display:HDSP-4850.
 */
export class HDSP_4850 extends Component.withPins({
  "A_1": "1",
  "K_20": "20",
  "A_2": "2",
  "K_19": "19",
  "A_3": "3",
  "K_18": "18",
  "A_4": "4",
  "K_17": "17",
  "A_5": "5",
  "K_16": "16",
  "A_6": "6",
  "K_15": "15",
  "A_7": "7",
  "K_14": "14",
  "A_8": "8",
  "K_13": "13",
  "A_9": "9",
  "K_12": "12",
  "A_10": "10",
  "K_11": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", K_20: "passive", A_2: "passive", K_19: "passive", A_3: "passive", K_18: "passive", A_4: "passive", K_17: "passive", A_5: "passive", K_16: "passive", A_6: "passive", K_15: "passive", A_7: "passive", K_14: "passive", A_8: "passive", K_13: "passive", A_9: "passive", K_12: "passive", A_10: "passive", K_11: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:HDSP-4850";
  override referencePrefix = "BAR";
}

/**
 * BAR GRAPH 10 segment block, green
 *
 * KiCad symbol: `LED:HDSP-4850_2`. Reference prefix: `BAR`.
 * Footprint filters: HDSP?48*.
 * @see https://docs.broadcom.com/docs/AV02-1798EN
 * Keywords: display LED array.
 * Default footprint: Display:HDSP-4850.
 */
export class HDSP_4850_2 extends Component.withPins({
  "A_1": "1",
  "A_2": "2",
  "A_3": "3",
  "A_4": "4",
  "A_5": "5",
  "A_6": "6",
  "A_7": "7",
  "A_8": "8",
  "A_9": "9",
  "A_10": "10",
  "K_11": "11",
  "K_12": "12",
  "K_13": "13",
  "K_14": "14",
  "K_15": "15",
  "K_16": "16",
  "K_17": "17",
  "K_18": "18",
  "K_19": "19",
  "K_20": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", A_2: "passive", A_3: "passive", A_4: "passive", A_5: "passive", A_6: "passive", A_7: "passive", A_8: "passive", A_9: "passive", A_10: "passive", K_11: "passive", K_12: "passive", K_13: "passive", K_14: "passive", K_15: "passive", K_16: "passive", K_17: "passive", K_18: "passive", K_19: "passive", K_20: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:HDSP-4850_2";
  override referencePrefix = "BAR";
}

/**
 * 10-element LED arrays, AIGaAs Red
 *
 * KiCad symbol: `LED:HLCP-J100`. Reference prefix: `BAR`.
 * Footprint filters: HLCP*J100*.
 * @see https://docs.broadcom.com/docs/AV02-1798EN
 * Keywords: display LED array.
 * Default footprint: Display:HLCP-J100.
 */
export class HLCP_J100 extends Component.withPins({
  "A_1": "1",
  "K_20": "20",
  "A_2": "2",
  "K_19": "19",
  "A_3": "3",
  "K_18": "18",
  "A_4": "4",
  "K_17": "17",
  "A_5": "5",
  "K_16": "16",
  "A_6": "6",
  "K_15": "15",
  "A_7": "7",
  "K_14": "14",
  "A_8": "8",
  "K_13": "13",
  "A_9": "9",
  "K_12": "12",
  "A_10": "10",
  "K_11": "11",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", K_20: "passive", A_2: "passive", K_19: "passive", A_3: "passive", K_18: "passive", A_4: "passive", K_17: "passive", A_5: "passive", K_16: "passive", A_6: "passive", K_15: "passive", A_7: "passive", K_14: "passive", A_8: "passive", K_13: "passive", A_9: "passive", K_12: "passive", A_10: "passive", K_11: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:HLCP-J100";
  override referencePrefix = "BAR";
}

/**
 * BAR GRAPH 10 segment block, AlGaAs red
 *
 * KiCad symbol: `LED:HLCP-J100_2`. Reference prefix: `BAR`.
 * Footprint filters: HLCP?J100*.
 * @see https://docs.broadcom.com/docs/AV02-1798EN
 * Keywords: display LED array.
 * Default footprint: Display:HLCP-J100.
 */
export class HLCP_J100_2 extends Component.withPins({
  "A_1": "1",
  "A_2": "2",
  "A_3": "3",
  "A_4": "4",
  "A_5": "5",
  "A_6": "6",
  "A_7": "7",
  "A_8": "8",
  "A_9": "9",
  "A_10": "10",
  "K_11": "11",
  "K_12": "12",
  "K_13": "13",
  "K_14": "14",
  "K_15": "15",
  "K_16": "16",
  "K_17": "17",
  "K_18": "18",
  "K_19": "19",
  "K_20": "20",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A_1: "passive", A_2: "passive", A_3: "passive", A_4: "passive", A_5: "passive", A_6: "passive", A_7: "passive", A_8: "passive", A_9: "passive", A_10: "passive", K_11: "passive", K_12: "passive", K_13: "passive", K_14: "passive", K_15: "passive", K_16: "passive", K_17: "passive", K_18: "passive", K_19: "passive", K_20: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:HLCP-J100_2";
  override referencePrefix = "BAR";
}

/**
 * Infrared LED , 3mm LED package
 *
 * KiCad symbol: `LED:SFH4356P`. Reference prefix: `D`.
 * Footprint filters: LED*3.0mm*IRBlack*.
 * @see http://www.osram-os.com/Graphics/XPic5/00181708_0.pdf
 * Keywords: opto IR LED.
 * Default footprint: LED_THT:LED_D3.0mm_IRBlack.
 */
export class SFH4356P extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:SFH4356P";
  override referencePrefix = "D";
}

/**
 * Infrared LED , 3mm LED package
 *
 * KiCad symbol: `LED:IR204A`. Reference prefix: `D`.
 * Footprint filters: LED*3.0mm*IRBlack*.
 * @see http://www.everlight.com/file/ProductFile/IR204-A.pdf
 * Keywords: opto IR LED.
 * Default footprint: LED_THT:LED_D3.0mm_IRBlack.
 */
export class IR204A extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:IR204A";
  override referencePrefix = "D";
}

/**
 * 940nm, 20 deg, Infrared LED, 1206
 *
 * KiCad symbol: `LED:IR26-21C_L110_TR8`. Reference prefix: `D`.
 * Footprint filters: LED*1206*3216Metric*.
 * @see http://www.everlight.com/file/ProductFile/IR26-21C-L110-TR8.pdf
 * Keywords: IR LED.
 * Default footprint: LED_SMD:LED_1206_3216Metric.
 */
export class IR26_21C_L110_TR8 extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:IR26-21C_L110_TR8";
  override referencePrefix = "D";
}

/**
 * 850nm High Power Infrared Emitter, Side-Emitter package
 *
 * KiCad symbol: `LED:IRL81A`. Reference prefix: `D`.
 * Footprint filters: LED*SideEmitter*Rectangular*W4.5mm*H1.6mm*.
 * @see http://www.osram-os.com/Graphics/XPic0/00203825_0.pdf
 * Keywords: IR LED.
 * Default footprint: LED_THT:LED_SideEmitter_Rectangular_W4.5mm_H1.6mm.
 */
export class IRL81A extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:IRL81A";
  override referencePrefix = "D";
}

/**
 * Inolux RGB LED, PLCC-6
 *
 * KiCad symbol: `LED:Inolux_IN-P55TATRGB`. Reference prefix: `D`.
 * Footprint filters: LED*Inolux*PLCC6*5.0x5.5mm*.
 * @see https://www.inolux-corp.com/datasheet/SMDLED/RGB%20Top%20View/IN-P55TATRGB.pdf
 * Keywords: LED RGB.
 * Default footprint: LED_SMD:LED_Inolux_IN-P55TATRGB_PLCC6_5.0x5.5mm_P1.8mm.
 */
export class Inolux_IN_P55TATRGB extends Component.withPins({
  "KB": "1",
  "KR": "2",
  "KG": "3",
  "AG": "4",
  "AR": "5",
  "AB": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { KB: "passive", KR: "passive", KG: "passive", AG: "passive", AR: "passive", AB: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:Inolux_IN-P55TATRGB";
  override referencePrefix = "D";
}

/**
 * 5050 RGB LED 4-Pin with integrated IC
 *
 * KiCad symbol: `LED:Inolux_IN-PI554FCH`. Reference prefix: `D`.
 * Footprint filters: LED*IN-PI554FCH*PLCC*5.0x5.0mm*P3.2mm*.
 * @see http://www.inolux-corp.com/datasheet/SMDLED/Addressable%20LED/IN-PI554FCH.pdf
 * Keywords: RGB LED NeoPixel addressable.
 * Default footprint: LED_SMD:LED_Inolux_IN-PI554FCH_PLCC4_5.0x5.0mm_P3.2mm.
 */
export class Inolux_IN_PI554FCH extends Component.withPins({
  "VSS": "1",
  "DIN": "2",
  "VDD": "3",
  "DO": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", DIN: "input", VDD: "power_in", DO: "output", ...opts.pinTypes } });
  }
  override schema = "LED:Inolux_IN-PI554FCH";
  override referencePrefix = "D";
}

/**
 * 5050 RGB LED 6-Pin with integrated IC
 *
 * KiCad symbol: `LED:Inolux_IN-PI556FCH`. Reference prefix: `D`.
 * Footprint filters: LED*WS2812*PLCC*5.0x5.0mm*P1.6mm*.
 * @see http://www.inolux-corp.com/datasheet/SMDLED/Addressable%20LED/IN-PI556FCH.pdf
 * Keywords: RGB LED NeoPixel addressable.
 * Default footprint: LED_SMD:LED_WS2812_PLCC6_5.0x5.0mm_P1.6mm.
 */
export class Inolux_IN_PI556FCH extends Component.withPins({
  "DO": "1",
  "DIN": "2",
  "VDD": "3",
  "NC": "4",
  "VCC": "5",
  "VSS": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DO: "output", DIN: "input", VDD: "power_in", NC: "no_connect", VCC: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "LED:Inolux_IN-PI556FCH";
  override referencePrefix = "D";
}

/**
 * 950nm IR-LED, 5mm
 *
 * KiCad symbol: `LED:LD274`. Reference prefix: `D`.
 * Footprint filters: LED*5.0mm*IRGrey*.
 * @see http://pdf.datasheetcatalog.com/datasheet/siemens/LD274.pdf
 * Keywords: IR LED.
 * Default footprint: LED_THT:LED_D5.0mm_IRGrey.
 */
export class LD274 extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:LD274";
  override referencePrefix = "D";
}

/**
 * XLamp® XHP50 LED, 12V, 4 LEDs in series, high density
 *
 * KiCad symbol: `LED:LED_Cree_XHP50_12V_HighDensity`. Reference prefix: `D`.
 * Footprint filters: LED?Cree?XHP50?12V*.
 * @see https://downloads.cree-led.com/files/ds/x/XLamp-XHP50.3.pdf
 * Keywords: led diode.
 * Default footprint: LED_SMD:LED_Cree-XHP50_12V_HighDensity.
 */
export class LED_Cree_XHP50_12V_HighDensity extends Component.withPins({
  "K": "1",
  "A": "2",
  "PAD": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:LED_Cree_XHP50_12V_HighDensity";
  override referencePrefix = "D";
}

/**
 * XLamp® XHP50 LED, 12V, all 4 LEDs in series, high intensity
 *
 * KiCad symbol: `LED:LED_Cree_XHP50_12V_HighIntensity`. Reference prefix: `D`.
 * Footprint filters: LED?Cree?XHP50?12V*.
 * @see https://downloads.cree-led.com/files/ds/x/XLamp-XHP50.3.pdf
 * Keywords: led diode.
 * Default footprint: LED_SMD:LED_Cree-XHP50_12V_HighIntensity.
 */
export class LED_Cree_XHP50_12V_HighIntensity extends Component.withPins({
  "K": "1",
  "A": "2",
  "PAD": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:LED_Cree_XHP50_12V_HighIntensity";
  override referencePrefix = "D";
}

/**
 * XLamp® XHP50 LED, 3V, 4 LEDs in parallel, high density
 *
 * KiCad symbol: `LED:LED_Cree_XHP50_3V_HighDensity`. Reference prefix: `D`.
 * Footprint filters: LED?Cree?XHP50?3V*.
 * @see https://downloads.cree-led.com/files/ds/x/XLamp-XHP50.3.pdf
 * Keywords: led diode.
 * Default footprint: LED_SMD:LED_Cree-XHP50_3V_HighDensity.
 */
export class LED_Cree_XHP50_3V_HighDensity extends Component.withPins({
  "K": "1",
  "A": "2",
  "PAD": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:LED_Cree_XHP50_3V_HighDensity";
  override referencePrefix = "D";
}

/**
 * XLamp® XHP50 LED, 3V, 4 LEDs in parallel, high intensity
 *
 * KiCad symbol: `LED:LED_Cree_XHP50_3V_HighIntensity`. Reference prefix: `D`.
 * Footprint filters: LED?Cree?XHP50?3V*.
 * @see https://downloads.cree-led.com/files/ds/x/XLamp-XHP50.3.pdf
 * Keywords: led diode.
 * Default footprint: LED_SMD:LED_Cree-XHP50_3V_HighIntensity.
 */
export class LED_Cree_XHP50_3V_HighIntensity extends Component.withPins({
  "K": "1",
  "A": "2",
  "PAD": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:LED_Cree_XHP50_3V_HighIntensity";
  override referencePrefix = "D";
}

/**
 * XLamp® XHP50 LED, 6V, 2x2 serial LEDs in parallel, high density
 *
 * KiCad symbol: `LED:LED_Cree_XHP50_6V_HighDensity`. Reference prefix: `D`.
 * Footprint filters: LED?Cree?XHP50?6V*.
 * @see https://downloads.cree-led.com/files/ds/x/XLamp-XHP50.3.pdf
 * Keywords: led diode.
 * Default footprint: LED_SMD:LED_Cree-XHP50_6V_HighDensity.
 */
export class LED_Cree_XHP50_6V_HighDensity extends Component.withPins({
  "K": "1",
  "A": "2",
  "PAD": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:LED_Cree_XHP50_6V_HighDensity";
  override referencePrefix = "D";
}

/**
 * XLamp® XHP50 LED, 6V, 2x2 serial LEDs in parallel, high intensity
 *
 * KiCad symbol: `LED:LED_Cree_XHP50_6V_HighIntensity`. Reference prefix: `D`.
 * Footprint filters: LED?Cree?XHP50?6V*.
 * @see https://downloads.cree-led.com/files/ds/x/XLamp-XHP50.3.pdf
 * Keywords: led diode.
 * Default footprint: LED_SMD:LED_Cree-XHP50_6V_HighIntensity.
 */
export class LED_Cree_XHP50_6V_HighIntensity extends Component.withPins({
  "K": "1",
  "A": "2",
  "PAD": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:LED_Cree_XHP50_6V_HighIntensity";
  override referencePrefix = "D";
}

/**
 * XLamp® XHP70 LED, 12V footprint (all 4 LEDs in series)
 *
 * KiCad symbol: `LED:LED_Cree_XHP70_12V`. Reference prefix: `D`.
 * Footprint filters: LED?Cree?XHP70?12V*.
 * @see http://www.cree.com/%7E/media/Files/Cree/LED%20Components%20and%20Modules/XLamp/Data%20and%20Binning/ds%20XHP70.pdf
 * Keywords: led diode.
 * Default footprint: LED_SMD:LED_Cree-XHP70_12V.
 */
export class LED_Cree_XHP70_12V extends Component.withPins({
  "K": "1",
  "A": "2",
  "PAD": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:LED_Cree_XHP70_12V";
  override referencePrefix = "D";
}

/**
 * XLamp® XHP70 LED, 6V footprint (2x2 serial LEDs in parallel)
 *
 * KiCad symbol: `LED:LED_Cree_XHP70_6V`. Reference prefix: `D`.
 * Footprint filters: LED?Cree?XHP70?6V*.
 * @see http://www.cree.com/%7E/media/Files/Cree/LED%20Components%20and%20Modules/XLamp/Data%20and%20Binning/ds%20XHP70.pdf
 * Keywords: led diode.
 * Default footprint: LED_SMD:LED_Cree-XHP70_6V.
 */
export class LED_Cree_XHP70_6V extends Component.withPins({
  "K": "1",
  "A": "2",
  "PAD": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", PAD: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:LED_Cree_XHP70_6V";
  override referencePrefix = "D";
}

/**
 * LED dual red/green, 4-pin, down-facing
 *
 * KiCad symbol: `LED:LTST-C235KGKRKT`. Reference prefix: `D`.
 * Footprint filters: *LTST*C235K*.
 * @see https://optoelectronics.liteon.com/upload/download/DS22-2009-0219/LTST-C235KGKRKT.pdf
 * Keywords: diode bicolor down-facing reverse.
 * Default footprint: LED_SMD:LED_LiteOn_LTST-C235KGKRKT.
 */
export class LTST_C235KGKRKT extends Component.withPins({
  "K2": "1",
  "A2": "2",
  "A1": "3",
  "K1": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K2: "input", A2: "input", A1: "input", K1: "input", ...opts.pinTypes } });
  }
  override schema = "LED:LTST-C235KGKRKT";
  override referencePrefix = "D";
}

/**
 * 5x5mm RGB LED with integrated controller
 *
 * KiCad symbol: `LED:LiteOn_LTST-E563C`. Reference prefix: `D`.
 * Footprint filters: LED*LiteOn*LTST?E563C*PLCC4*5.0x5.0mm*P3.2mm*.
 * @see https://optoelectronics.liteon.com/upload/download/DS35-2018-0092/LTST-E563CHEGBW-AW.PDF
 * Keywords: RGB LED addressable 5050.
 * Default footprint: LED_SMD:LED_LiteOn_LTST-E563C_PLCC4_5.0x5.0mm_P3.2mm.
 */
export class LiteOn_LTST_E563C extends Component.withPins({
  "VSS": "1",
  "DIN": "2",
  "DOUT": "3",
  "VDD": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", DIN: "input", DOUT: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "LED:LiteOn_LTST-E563C";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller, 5mm/8mm LED package
 *
 * KiCad symbol: `LED:NeoPixel_THT`. Reference prefix: `D`.
 * Footprint filters: LED*D5.0mm*, LED*D8.0mm*.
 * @see https://www.adafruit.com/product/1938
 * Keywords: RGB LED NeoPixel addressable.
 */
export class NeoPixel_THT extends Component.withPins({
  "DOUT": "1",
  "GND": "2",
  "VDD": "3",
  "DIN": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DOUT: "output", GND: "power_in", VDD: "power_in", DIN: "input", ...opts.pinTypes } });
  }
  override schema = "LED:NeoPixel_THT";
  override referencePrefix = "D";
}

/**
 * Cree PLCC6 3 in 1 SMD LED with zener protection, PLCC-6
 *
 * KiCad symbol: `LED:QLS6A-FKW`. Reference prefix: `D`.
 * Footprint filters: LED*Cree*PLCC*4.7x1.5mm*.
 * @see https://www.cree.com/led-components/media/documents/1381-QLS6AFKW.pdf
 * Keywords: LED RGB.
 * Default footprint: LED_SMD:LED_Cree-PLCC6_4.7x1.5mm.
 */
export class QLS6A_FKW extends Component.withPins({
  "AB": "1",
  "KB": "2",
  "AR": "3",
  "KR_4": "4",
  "AG": "5",
  "KR_6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { AB: "passive", KB: "passive", AR: "passive", KR_4: "passive", AG: "passive", KR_6: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:QLS6A-FKW";
  override referencePrefix = "D";
}

/**
 * Cree PLCC6 3 in 1 SMD LED, PLCC-6
 *
 * KiCad symbol: `LED:QLS6B-FKW`. Reference prefix: `D`.
 * Footprint filters: LED*Cree*PLCC*4.7x1.5mm*.
 * @see https://www.cree.com/led-components/media/documents/1397-QLS6BFKW.pdf
 * Keywords: LED RGB.
 * Default footprint: LED_SMD:LED_Cree-PLCC6_4.7x1.5mm.
 */
export class QLS6B_FKW extends Component.withPins({
  "AB": "1",
  "KB": "2",
  "AR": "3",
  "KR_4": "4",
  "AG": "5",
  "KR_6": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { AB: "passive", KB: "passive", AR: "passive", KR_4: "passive", AG: "passive", KR_6: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:QLS6B-FKW";
  override referencePrefix = "D";
}

/**
 * Infrared LED , 3mm LED package
 *
 * KiCad symbol: `LED:SFH4346`. Reference prefix: `D`.
 * Footprint filters: LED*3.0mm*IRBlack*.
 * @see http://cdn-reichelt.de/documents/datenblatt/A500/SFH4346.pdf
 * Keywords: opto IR LED.
 * Default footprint: LED_THT:LED_D3.0mm_IRBlack.
 */
export class SFH4346 extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:SFH4346";
  override referencePrefix = "D";
}

/**
 * High-Power IR LED 940nm
 *
 * KiCad symbol: `LED:SFH4546`. Reference prefix: `D`.
 * Footprint filters: LED*5.0mm*IRGrey*.
 * @see http://www.osram-os.com/Graphics/XPic1/00101982_0.pdf
 * Keywords: IR LED.
 * Default footprint: LED_THT:LED_D5.0mm_IRGrey.
 */
export class SFH4546 extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:SFH4546";
  override referencePrefix = "D";
}

/**
 * 950nm High-Power IR-LED, 5mm
 *
 * KiCad symbol: `LED:SFH4550`. Reference prefix: `D`.
 * Footprint filters: LED*5.0mm*IRGrey*.
 * @see http://www.osram-os.com/Graphics/XPic3/00116140_0.pdf
 * Keywords: IR LED.
 * Default footprint: LED_THT:LED_D5.0mm_IRGrey.
 */
export class SFH4550 extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:SFH4550";
  override referencePrefix = "D";
}

/**
 * GaAlAs Infrared LED, TO-18 package
 *
 * KiCad symbol: `LED:SFH460`. Reference prefix: `D`.
 * Footprint filters: TO?18*Window*.
 * @see http://www.osram-os.com/Graphics/XPic6/00029609_0.pdf/SFh%20460.pdf
 * Keywords: opto IR LED.
 * Default footprint: Package_TO_SOT_THT:TO-18-2_Window.
 */
export class SFH460 extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:SFH460";
  override referencePrefix = "D";
}

/**
 * GaAlAs Infrared LED (880 nm), TO-18 package
 *
 * KiCad symbol: `LED:SFH482`. Reference prefix: `D`.
 * Footprint filters: TO?18*Window*.
 * @see http://www.osram-os.com/Graphics/XPic2/00182155_0.pdf/SFH%20482%20E7800,%20Lead%20(Pb)%20Free%20Product%20-%20RoHS%20Compliant.pdf
 * Keywords: opto IR LED.
 * Default footprint: Package_TO_SOT_THT:TO-18-2_Window.
 */
export class SFH482 extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:SFH482";
  override referencePrefix = "D";
}

/**
 * GaAlAs Infrared LED (880 nm), TO-18 package
 *
 * KiCad symbol: `LED:SFH480`. Reference prefix: `D`.
 * Footprint filters: TO?18*Window*.
 * @see http://www.osram-os.com/Graphics/XPic1/00083613_0.pdf
 * Keywords: IR LED Opto.
 * Default footprint: Package_TO_SOT_THT:TO-18-2_Window.
 */
export class SFH480 extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:SFH480";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller
 *
 * KiCad symbol: `LED:SK6805`. Reference prefix: `D`.
 * Footprint filters: LED*SK6805*PLCC*2.4x2.7mm*P1.3mm*.
 * @see https://cdn-shop.adafruit.com/product-files/3484/3484_Datasheet.pdf
 * Keywords: RGB LED NeoPixel Nano addressable.
 * Default footprint: LED_SMD:LED_SK6805_PLCC4_2.4x2.7mm_P1.3mm.
 */
export class SK6805 extends Component.withPins({
  "DOUT": "1",
  "VSS": "2",
  "DIN": "3",
  "VDD": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DOUT: "output", VSS: "power_in", DIN: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "LED:SK6805";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller
 *
 * KiCad symbol: `LED:SK6812`. Reference prefix: `D`.
 * Footprint filters: LED*SK6812*PLCC*5.0x5.0mm*P3.2mm*.
 * @see https://cdn-shop.adafruit.com/product-files/1138/SK6812+LED+datasheet+.pdf
 * Keywords: RGB LED NeoPixel addressable.
 * Default footprint: LED_SMD:LED_SK6812_PLCC4_5.0x5.0mm_P3.2mm.
 */
export class SK6812 extends Component.withPins({
  "VSS": "1",
  "DIN": "2",
  "VDD": "3",
  "DOUT": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", DIN: "input", VDD: "power_in", DOUT: "output", ...opts.pinTypes } });
  }
  override schema = "LED:SK6812";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller
 *
 * KiCad symbol: `LED:SK6812MINI`. Reference prefix: `D`.
 * Footprint filters: LED*SK6812MINI*PLCC*3.5x3.5mm*P1.75mm*.
 * @see https://cdn-shop.adafruit.com/product-files/2686/SK6812MINI_REV.01-1-2.pdf
 * Keywords: RGB LED NeoPixel Mini addressable.
 * Default footprint: LED_SMD:LED_SK6812MINI_PLCC4_3.5x3.5mm_P1.75mm.
 */
export class SK6812MINI extends Component.withPins({
  "DOUT": "1",
  "VSS": "2",
  "DIN": "3",
  "VDD": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DOUT: "output", VSS: "power_in", DIN: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "LED:SK6812MINI";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller
 *
 * KiCad symbol: `LED:SK6812MINI-E`. Reference prefix: `D`.
 * Footprint filters: LED?SK6812MINI?E?3.2x2.8mm?P1.5mm*.
 * @see https://www.lcsc.com/datasheet/C5149201.pdf
 * Keywords: RGB LED NeoPixel addressable.
 * Default footprint: LED_SMD:LED_SK6812MINI-E_3.2x2.8mm_P1.5mm_ReverseMount.
 */
export class SK6812MINI_E extends Component.withPins({
  "VSS": "1",
  "DIN": "2",
  "VDD": "3",
  "DOUT": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VSS: "power_in", DIN: "input", VDD: "power_in", DOUT: "output", ...opts.pinTypes } });
  }
  override schema = "LED:SK6812MINI-E";
  override referencePrefix = "D";
}

/**
 * High Brightness Tri-Color LED, RGB, 3.5x2.8mm
 *
 * KiCad symbol: `LED:SMLVN6RGB`. Reference prefix: `D`.
 * Footprint filters: LED*ROHM*SMLVN6*.
 * @see https://www.rohm.com/datasheet/SMLVN6RGB1U
 * Keywords: LED RGB Diode.
 * Default footprint: LED_SMD:LED_ROHM_SMLVN6.
 */
export class SMLVN6RGB extends Component.withPins({
  "BA": "1",
  "RA": "2",
  "GA": "3",
  "GK": "4",
  "RK": "5",
  "BK": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { BA: "passive", RA: "passive", GA: "passive", GK: "passive", RK: "passive", BK: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:SMLVN6RGB";
  override referencePrefix = "D";
}

/**
 * Infrared LED , 3mm LED package
 *
 * KiCad symbol: `LED:TSAL4400`. Reference prefix: `D`.
 * Footprint filters: LED*3.0mm*IRBlack*.
 * @see http://www.vishay.com/docs/81006/tsal4400.pdf
 * Keywords: opto IR LED.
 * Default footprint: LED_THT:LED_D3.0mm_IRBlack.
 */
export class TSAL4400 extends Component.withPins({
  "K": "1",
  "A": "2",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", ...opts.pinTypes } });
  }
  override schema = "LED:TSAL4400";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller
 *
 * KiCad symbol: `LED:WS2812S`. Reference prefix: `D`.
 * Footprint filters: LED*WS2812*PLCC*5.0x5.0mm*P1.6mm*.
 * @see http://www.world-semi.com/DownLoadFile/115
 * Keywords: RGB LED addressable.
 * Default footprint: LED_SMD:LED_WS2812_PLCC6_5.0x5.0mm_P1.6mm.
 */
export class WS2812S extends Component.withPins({
  "DOUT": "1",
  "DIN": "2",
  "VCC": "3",
  "NC": "4",
  "VDD": "5",
  "VSS": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DOUT: "output", DIN: "input", VCC: "power_in", NC: "no_connect", VDD: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "LED:WS2812S";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller
 *
 * KiCad symbol: `LED:WS2812`. Reference prefix: `D`.
 * Footprint filters: LED*WS2812*PLCC*5.0x5.0mm*P1.6mm*.
 * @see https://cdn-shop.adafruit.com/datasheets/WS2812.pdf
 * Keywords: RGB LED NeoPixel addressable.
 * Default footprint: LED_SMD:LED_WS2812_PLCC6_5.0x5.0mm_P1.6mm.
 */
export class WS2812 extends Component.withPins({
  "DOUT": "1",
  "DIN": "2",
  "VCC": "3",
  "NC": "4",
  "VDD": "5",
  "VSS": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DOUT: "output", DIN: "input", VCC: "power_in", NC: "no_connect", VDD: "power_in", VSS: "power_in", ...opts.pinTypes } });
  }
  override schema = "LED:WS2812";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller
 *
 * KiCad symbol: `LED:WS2812B`. Reference prefix: `D`.
 * Footprint filters: LED*WS2812*PLCC*5.0x5.0mm*P3.2mm*.
 * @see https://cdn-shop.adafruit.com/datasheets/WS2812B.pdf
 * Keywords: RGB LED NeoPixel addressable.
 * Default footprint: LED_SMD:LED_WS2812B_PLCC4_5.0x5.0mm_P3.2mm.
 */
export class WS2812B extends Component.withPins({
  "VDD": "1",
  "DOUT": "2",
  "VSS": "3",
  "DIN": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VDD: "power_in", DOUT: "output", VSS: "power_in", DIN: "input", ...opts.pinTypes } });
  }
  override schema = "LED:WS2812B";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller, 2.0 x 2.0 mm, 12 mA
 *
 * KiCad symbol: `LED:WS2812B-2020`. Reference prefix: `D`.
 * Footprint filters: LED*WS2812*-2020_PLCC4*.
 * @see https://cdn-shop.adafruit.com/product-files/4684/4684_WS2812B-2020_V1.3_EN.pdf
 * Keywords: RGB LED NeoPixel Nano addressable.
 * Default footprint: LED_SMD:LED_WS2812B-2020_PLCC4_2.0x2.0mm.
 */
export class WS2812B_2020 extends Component.withPins({
  "DOUT": "1",
  "VSS": "2",
  "DIN": "3",
  "VDD": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DOUT: "output", VSS: "power_in", DIN: "input", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "LED:WS2812B-2020";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller
 *
 * KiCad symbol: `LED:WS2813`. Reference prefix: `D`.
 * Footprint filters: LED*WS2812*PLCC*5.0x5.0mm*P1.6mm*.
 * @see http://www.normandled.com/upload/201605/WS2813%20LED%20Datasheet.pdf
 * Keywords: RGB LED addressable.
 * Default footprint: LED_SMD:LED_WS2812_PLCC6_5.0x5.0mm_P1.6mm.
 */
export class WS2813 extends Component.withPins({
  "VCC": "1",
  "VDD": "2",
  "DOUT": "3",
  "DIN": "4",
  "GND": "5",
  "BIN": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { VCC: "power_in", VDD: "power_in", DOUT: "output", DIN: "input", GND: "power_in", BIN: "input", ...opts.pinTypes } });
  }
  override schema = "LED:WS2813";
  override referencePrefix = "D";
}

/**
 * RGB LED with integrated controller
 *
 * KiCad symbol: `LED:WS2822S`. Reference prefix: `D`.
 * Footprint filters: LED*WS2812*PLCC*5.0x5.0mm*P1.6mm*.
 * @see http://akizukidenshi.com/download/ds/worldsemi/WS2822S.pdf
 * Keywords: RGB LED addressable.
 * Default footprint: LED_SMD:LED_WS2812_PLCC6_5.0x5.0mm_P1.6mm.
 */
export class WS2822S extends Component.withPins({
  "DAI": "1",
  "ADRI": "2",
  "VCC": "3",
  "GND": "4",
  "ADRO": "5",
  "VDD": "6",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { DAI: "input", ADRI: "input", VCC: "power_in", GND: "power_in", ADRO: "output", VDD: "power_in", ...opts.pinTypes } });
  }
  override schema = "LED:WS2822S";
  override referencePrefix = "D";
}
