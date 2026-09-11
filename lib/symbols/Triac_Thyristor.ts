// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 8A RMS, 400-800V Off-State Voltage, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:TIC226`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://pdf.datasheetcatalog.com/datasheet/PowerInnovations/mXuqxvy.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class TIC226 extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:TIC226";
  override referencePrefix = "Q";
}

/**
 * 4A RMS, 500V Off-State Voltage, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BT136-500`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.micropik.com/PDF/BT136-600.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BT136_500 extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BT136-500";
  override referencePrefix = "Q";
}

/**
 * 4A RMS, 500V Off-State Voltage, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BT136-600`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.micropik.com/PDF/BT136-600.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BT136_600 extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BT136-600";
  override referencePrefix = "Q";
}

/**
 * 4A RMS, 800V Off-State Voltage, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BT136-800`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.micropik.com/PDF/BT136-600.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BT136_800 extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BT136-800";
  override referencePrefix = "Q";
}

/**
 * 12A RMS, 600V Off-State Voltage, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BT138-600`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://assets.nexperia.com/documents/data-sheet/BT138_SER_D_E.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BT138_600 extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BT138-600";
  override referencePrefix = "Q";
}

/**
 * 12A RMS, 800V Off-State Voltage, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BT138-800`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://assets.nexperia.com/documents/data-sheet/BT138_SER_D_E.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BT138_800 extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BT138-800";
  override referencePrefix = "Q";
}

/**
 * 16A RMS, 600V Off-State Voltage, 4Q Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BT139-600`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.rapidonline.com/pdf/47-3240.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BT139_600 extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BT139-600";
  override referencePrefix = "Q";
}

/**
 * 0.5A Ion, 200V Voff, Thyristors logic level, Silicon Controlled Rectifier (Thyristor), TO-92
 *
 * KiCad symbol: `Triac_Thyristor:BT169B`. Reference prefix: `Q`.
 * Footprint filters: TO?92*Inline*Narrow*.
 * @see https://media.digikey.com/pdf/Data%20Sheets/NXP%20PDFs/BT169_Series.pdf
 * Keywords: thyristor logic level.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BT169B extends Component.withPins({
  "A": "1",
  "G": "2",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", G: "input", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BT169B";
  override referencePrefix = "Q";
}

/**
 * 0.5A Ion, 400V Voff, Thyristors logic level, Silicon Controlled Rectifier (Thyristor), TO-92
 *
 * KiCad symbol: `Triac_Thyristor:BT169D`. Reference prefix: `Q`.
 * Footprint filters: TO?92*Inline*Narrow*.
 * @see https://media.digikey.com/pdf/Data%20Sheets/NXP%20PDFs/BT169_Series.pdf
 * Keywords: thyristor logic level.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BT169D extends Component.withPins({
  "A": "1",
  "G": "2",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", G: "input", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BT169D";
  override referencePrefix = "Q";
}

/**
 * 0.5A Ion, 600V Voff, Thyristors logic level, Silicon Controlled Rectifier (Thyristor), TO-92
 *
 * KiCad symbol: `Triac_Thyristor:BT169G`. Reference prefix: `Q`.
 * Footprint filters: TO?92*Inline*Narrow*.
 * @see https://media.digikey.com/pdf/Data%20Sheets/NXP%20PDFs/BT169_Series.pdf
 * Keywords: thyristor logic level.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BT169G extends Component.withPins({
  "A": "1",
  "G": "2",
  "K": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A: "passive", G: "input", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BT169G";
  override referencePrefix = "Q";
}

/**
 * 16A RMS, 600V Off-State Voltage, 50mA Sensitivity, Insulated, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BTA16-600B`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.st.com/resource/en/datasheet/bta16.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BTA16_600B extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BTA16-600B";
  override referencePrefix = "Q";
}

/**
 * 16A RMS, 600V Off-State Voltage, 50mA Sensitivity, Snubberless, Insulated, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BTA16-600BW`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.st.com/resource/en/datasheet/bta16.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BTA16_600BW extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BTA16-600BW";
  override referencePrefix = "Q";
}

/**
 * 16A RMS, 600V Off-State Voltage, 35mA Sensitivity, Insulated, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BTA16-600C`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.st.com/resource/en/datasheet/bta16.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BTA16_600C extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BTA16-600C";
  override referencePrefix = "Q";
}

/**
 * 16A RMS, 600V Off-State Voltage, 35mA Sensitivity, Snubberless, Insulated, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BTA16-600CW`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.st.com/resource/en/datasheet/bta16.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BTA16_600CW extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BTA16-600CW";
  override referencePrefix = "Q";
}

/**
 * 16A RMS, 600V Off-State Voltage, 10mA Sensitivity, Snubberless, Insulated, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BTA16-600SW`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.st.com/resource/en/datasheet/bta16.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BTA16_600SW extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BTA16-600SW";
  override referencePrefix = "Q";
}

/**
 * 16A RMS, 800V Off-State Voltage, 50mA Sensitivity, Insulated, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BTA16-800B`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.st.com/resource/en/datasheet/bta16.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BTA16_800B extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BTA16-800B";
  override referencePrefix = "Q";
}

/**
 * 16A RMS, 800V Off-State Voltage, 50mA Sensitivity, Snubberless, Insulated, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BTA16-800BW`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.st.com/resource/en/datasheet/bta16.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BTA16_800BW extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BTA16-800BW";
  override referencePrefix = "Q";
}

/**
 * 16A RMS, 800V Off-State Voltage, 35mA Sensitivity, Insulated, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BTA16-800C`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.st.com/resource/en/datasheet/bta16.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BTA16_800C extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BTA16-800C";
  override referencePrefix = "Q";
}

/**
 * 16A RMS, 800V Off-State Voltage, 35mA Sensitivity, Snubberless, Insulated, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BTA16-800CW`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.st.com/resource/en/datasheet/bta16.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BTA16_800CW extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BTA16-800CW";
  override referencePrefix = "Q";
}

/**
 * 16A RMS, 800V Off-State Voltage, 10mA Sensitivity, Snubberless, Insulated, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BTA16-800SW`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.st.com/resource/en/datasheet/bta16.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BTA16_800SW extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BTA16-800SW";
  override referencePrefix = "Q";
}

/**
 * 16A RMS, 600V Off-State Voltage, 50mA Sensitivity, Non-Insulated, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BTB16-600B`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.st.com/resource/en/datasheet/bta16.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BTB16_600B extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BTB16-600B";
  override referencePrefix = "Q";
}

/**
 * 16A RMS, 600V Off-State Voltage, 50mA Sensitivity, Snubberless, Non-Insulated, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BTB16-600BW`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.st.com/resource/en/datasheet/bta16.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BTB16_600BW extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BTB16-600BW";
  override referencePrefix = "Q";
}

/**
 * 16A RMS, 600V Off-State Voltage, 35mA Sensitivity, Non-Insulated, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BTB16-600C`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.st.com/resource/en/datasheet/bta16.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BTB16_600C extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BTB16-600C";
  override referencePrefix = "Q";
}

/**
 * 16A RMS, 600V Off-State Voltage, 35mA Sensitivity, Snubberless, Non-Insulated, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BTB16-600CW`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.st.com/resource/en/datasheet/bta16.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BTB16_600CW extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BTB16-600CW";
  override referencePrefix = "Q";
}

/**
 * 16A RMS, 600V Off-State Voltage, 10mA Sensitivity, Snubberless, Non-Insulated, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BTB16-600SW`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.st.com/resource/en/datasheet/bta16.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BTB16_600SW extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BTB16-600SW";
  override referencePrefix = "Q";
}

/**
 * 16A RMS, 800V Off-State Voltage, 50mA Sensitivity, Non-Insulated, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BTB16-800B`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.st.com/resource/en/datasheet/bta16.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BTB16_800B extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BTB16-800B";
  override referencePrefix = "Q";
}

/**
 * 16A RMS, 800V Off-State Voltage, 50mA Sensitivity, Snubberless, Non-Insulated, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BTB16-800BW`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.st.com/resource/en/datasheet/bta16.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BTB16_800BW extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BTB16-800BW";
  override referencePrefix = "Q";
}

/**
 * 16A RMS, 800V Off-State Voltage, 35mA Sensitivity, Non-Insulated, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BTB16-800C`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.st.com/resource/en/datasheet/bta16.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BTB16_800C extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BTB16-800C";
  override referencePrefix = "Q";
}

/**
 * 16A RMS, 800V Off-State Voltage, 35mA Sensitivity, Snubberless, Non-Insulated, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BTB16-800CW`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.st.com/resource/en/datasheet/bta16.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BTB16_800CW extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BTB16-800CW";
  override referencePrefix = "Q";
}

/**
 * 16A RMS, 800V Off-State Voltage, 10mA Sensitivity, Snubberless, Non-Insulated, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:BTB16-800SW`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.st.com/resource/en/datasheet/bta16.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BTB16_800SW extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:BTB16-800SW";
  override referencePrefix = "Q";
}

/**
 * 1A RMS, 600-800V Off-State Voltage, 1.55V On-State Voltage, Triac, SOT-223
 *
 * KiCad symbol: `Triac_Thyristor:CT401T`. Reference prefix: `Q`.
 * Footprint filters: SOT?223*.
 * @see https://www.jscj-elec.com/gallery//file/CT401T-600%20SOT-223-3LK%20V1.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_SMD:SOT-223.
 */
export class CT401T extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:CT401T";
  override referencePrefix = "Q";
}

/**
 * Triode for alternating current, anode1/anode2/gate
 *
 * KiCad symbol: `Triac_Thyristor:Generic_Triac_A1A2G`. Reference prefix: `D`.
 * Keywords: TRIAC.
 */
export class Generic_Triac_A1A2G extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:Generic_Triac_A1A2G";
  override referencePrefix = "D";
}

/**
 * Triode for alternating current, anode1/gate/anode2
 *
 * KiCad symbol: `Triac_Thyristor:Generic_Triac_A1GA2`. Reference prefix: `D`.
 * Keywords: TRIAC.
 */
export class Generic_Triac_A1GA2 extends Component.withPins({
  "A1": "1",
  "G": "2",
  "A2": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", G: "input", A2: "passive", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:Generic_Triac_A1GA2";
  override referencePrefix = "D";
}

/**
 * Triode for alternating current, anode2/anode1/gate
 *
 * KiCad symbol: `Triac_Thyristor:Generic_Triac_A2A1G`. Reference prefix: `D`.
 * Keywords: TRIAC.
 */
export class Generic_Triac_A2A1G extends Component.withPins({
  "A2": "1",
  "A1": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A2: "passive", A1: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:Generic_Triac_A2A1G";
  override referencePrefix = "D";
}

/**
 * Triode for alternating current, anode2/gate/anode1
 *
 * KiCad symbol: `Triac_Thyristor:Generic_Triac_A2GA1`. Reference prefix: `D`.
 * Keywords: TRIAC.
 */
export class Generic_Triac_A2GA1 extends Component.withPins({
  "A2": "1",
  "G": "2",
  "A1": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A2: "passive", G: "input", A1: "passive", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:Generic_Triac_A2GA1";
  override referencePrefix = "D";
}

/**
 * Triode for alternating current, gate/anode1/anode2
 *
 * KiCad symbol: `Triac_Thyristor:Generic_Triac_GA1A2`. Reference prefix: `D`.
 * Keywords: TRIAC.
 */
export class Generic_Triac_GA1A2 extends Component.withPins({
  "G": "1",
  "A1": "2",
  "A2": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", A1: "passive", A2: "passive", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:Generic_Triac_GA1A2";
  override referencePrefix = "D";
}

/**
 * Triode for alternating current, gate/anode2/anode1
 *
 * KiCad symbol: `Triac_Thyristor:Generic_Triac_GA2A1`. Reference prefix: `D`.
 * Keywords: TRIAC.
 */
export class Generic_Triac_GA2A1 extends Component.withPins({
  "G": "1",
  "A2": "2",
  "A1": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", A2: "passive", A1: "passive", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:Generic_Triac_GA2A1";
  override referencePrefix = "D";
}

/**
 * 5A Ion, 400-800V Voff, Silicon Controlled Rectifier (Thyristor), TO-220
 *
 * KiCad symbol: `Triac_Thyristor:TIC106`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://pdf.datasheetcatalog.com/datasheet/PowerInnovations/mXyzrtvs.pdf
 * Keywords: thyristor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class TIC106 extends Component.withPins({
  "K": "1",
  "A": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:TIC106";
  override referencePrefix = "Q";
}

/**
 * 8A Ion, 400-800V Voff, Silicon Controlled Rectifier (Thyristor), TO-220
 *
 * KiCad symbol: `Triac_Thyristor:TIC116`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.princeton.edu/~mae412/HANDOUTS/Datasheets/TIC116.pdf
 * Keywords: thyristor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class TIC116 extends Component.withPins({
  "K": "1",
  "A": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:TIC116";
  override referencePrefix = "Q";
}

/**
 * 12A Ion, 400-800V Voff, Silicon Controlled Rectifier (Thyristor), TO-220
 *
 * KiCad symbol: `Triac_Thyristor:TIC126`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://cdn-reichelt.de/documents/datenblatt/A400/TIC126.pdf
 * Keywords: thyristor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class TIC126 extends Component.withPins({
  "K": "1",
  "A": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:TIC126";
  override referencePrefix = "Q";
}

/**
 * 4A RMS, 400-700V Off-State Voltage, Sensitive Gate Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:TIC206`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.farnell.com/datasheets/56922.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class TIC206 extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:TIC206";
  override referencePrefix = "Q";
}

/**
 * 6A RMS, 400-800V Off-State Voltage, Triac, TO-220
 *
 * KiCad symbol: `Triac_Thyristor:TIC216`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.mouser.com/ds/2/54/tic216-37811.pdf
 * Keywords: Triac.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class TIC216 extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:TIC216";
  override referencePrefix = "Q";
}

/**
 * 1.25A Ion, 600 Voff, Silicon Controlled Rectifier (Thyristor), SOT-223
 *
 * KiCad symbol: `Triac_Thyristor:X0202MN`. Reference prefix: `Q`.
 * Footprint filters: SOT?223*.
 * @see https://www.st.com/resource/en/datasheet/x02.pdf
 * Keywords: thyristor.
 * Default footprint: Package_TO_SOT_SMD:SOT-223.
 */
export class X0202MN extends Component.withPins({
  "K": "1",
  "A_2": "2",
  "G": "3",
  "A_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A_2: "passive", G: "input", A_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:X0202MN";
  override referencePrefix = "Q";
}

/**
 * 1.25A Ion, 800 Voff, Silicon Controlled Rectifier (Thyristor), SOT-223
 *
 * KiCad symbol: `Triac_Thyristor:X0202NN`. Reference prefix: `Q`.
 * Footprint filters: SOT?223*.
 * @see https://www.st.com/resource/en/datasheet/x02.pdf
 * Keywords: thyristor.
 * Default footprint: Package_TO_SOT_SMD:SOT-223.
 */
export class X0202NN extends Component.withPins({
  "K": "1",
  "A_2": "2",
  "G": "3",
  "A_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { K: "passive", A_2: "passive", G: "input", A_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:X0202NN";
  override referencePrefix = "Q";
}

/**
 * 4Q Triac, 1A RMS, 600V VDRM, 3mA Igt, 7mA Ih, SOT-223
 *
 * KiCad symbol: `Triac_Thyristor:Z0103MN`. Reference prefix: `D`.
 * Footprint filters: SOT*223*.
 * @see http://www.st.com/resource/en/datasheet/z01.pdf
 * Keywords: 4Q Triac.
 * Default footprint: Package_TO_SOT_SMD:SOT-223.
 */
export class Z0103MN extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
  "A4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", A4: "passive", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:Z0103MN";
  override referencePrefix = "D";
}

/**
 * 4Q Triac, 1A RMS, 800V VDRM, 3mA Igt, 7mA Ih, SOT-223
 *
 * KiCad symbol: `Triac_Thyristor:Z0103NN`. Reference prefix: `D`.
 * Footprint filters: SOT*223*.
 * @see http://www.st.com/resource/en/datasheet/z01.pdf
 * Keywords: 4Q Triac.
 * Default footprint: Package_TO_SOT_SMD:SOT-223.
 */
export class Z0103NN extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
  "A4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", A4: "passive", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:Z0103NN";
  override referencePrefix = "D";
}

/**
 * 4Q Triac, 1A RMS, 600V VDRM, 5mA Igt, 10mA Ih, SOT-223
 *
 * KiCad symbol: `Triac_Thyristor:Z0107MN`. Reference prefix: `D`.
 * Footprint filters: SOT*223*.
 * @see http://www.st.com/resource/en/datasheet/z01.pdf
 * Keywords: 4Q Triac.
 * Default footprint: Package_TO_SOT_SMD:SOT-223.
 */
export class Z0107MN extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
  "A4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", A4: "passive", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:Z0107MN";
  override referencePrefix = "D";
}

/**
 * 4Q Triac, 1A RMS, 800V VDRM, 5mA Igt, 10mA Ih, SOT-223
 *
 * KiCad symbol: `Triac_Thyristor:Z0107NN`. Reference prefix: `D`.
 * Footprint filters: SOT*223*.
 * @see http://www.st.com/resource/en/datasheet/z01.pdf
 * Keywords: 4Q Triac.
 * Default footprint: Package_TO_SOT_SMD:SOT-223.
 */
export class Z0107NN extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
  "A4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", A4: "passive", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:Z0107NN";
  override referencePrefix = "D";
}

/**
 * 4Q Triac, 1A RMS, 600V VDRM, 10mA Igt, 10mA Ih, SOT-223
 *
 * KiCad symbol: `Triac_Thyristor:Z0109MN`. Reference prefix: `D`.
 * Footprint filters: SOT*223*.
 * @see http://www.st.com/resource/en/datasheet/z01.pdf
 * Keywords: 4Q Triac.
 * Default footprint: Package_TO_SOT_SMD:SOT-223.
 */
export class Z0109MN extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
  "A4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", A4: "passive", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:Z0109MN";
  override referencePrefix = "D";
}

/**
 * 4Q Triac, 1A RMS, 800V VDRM, 10mA Igt, 10mA Ih, SOT-223
 *
 * KiCad symbol: `Triac_Thyristor:Z0109NN`. Reference prefix: `D`.
 * Footprint filters: SOT*223*.
 * @see http://www.st.com/resource/en/datasheet/z01.pdf
 * Keywords: 4Q Triac.
 * Default footprint: Package_TO_SOT_SMD:SOT-223.
 */
export class Z0109NN extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
  "A4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", A4: "passive", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:Z0109NN";
  override referencePrefix = "D";
}

/**
 * 4Q Triac, 1A RMS, 600V VDRM, 25mA Igt, 25mA Ih, SOT-223
 *
 * KiCad symbol: `Triac_Thyristor:Z0110MN`. Reference prefix: `D`.
 * Footprint filters: SOT*223*.
 * @see http://www.st.com/resource/en/datasheet/z01.pdf
 * Keywords: 4Q Triac.
 * Default footprint: Package_TO_SOT_SMD:SOT-223.
 */
export class Z0110MN extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
  "A4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", A4: "passive", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:Z0110MN";
  override referencePrefix = "D";
}

/**
 * 4Q Triac, 1A RMS, 800V VDRM, 25mA Igt, 25mA Ih, SOT-223
 *
 * KiCad symbol: `Triac_Thyristor:Z0110NN`. Reference prefix: `D`.
 * Footprint filters: SOT*223*.
 * @see http://www.st.com/resource/en/datasheet/z01.pdf
 * Keywords: 4Q Triac.
 * Default footprint: Package_TO_SOT_SMD:SOT-223.
 */
export class Z0110NN extends Component.withPins({
  "A1": "1",
  "A2": "2",
  "G": "3",
  "A4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { A1: "passive", A2: "passive", G: "input", A4: "passive", ...opts.pinTypes } });
  }
  override schema = "Triac_Thyristor:Z0110NN";
  override referencePrefix = "D";
}
