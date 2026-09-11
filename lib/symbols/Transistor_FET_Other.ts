// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Self-Protected Low Side Driver with Temperature and Current Limit, SOT−223
 *
 * KiCad symbol: `Transistor_FET_Other:BSP75N`. Reference prefix: `Q`.
 * Footprint filters: SOT?223*.
 * @see https://www.infineon.com/dgdl/Infineon-BSP75N-DS-v01_04-en.pdf?fileId=db3a30431ed1d7b2011f471f5a0256d1
 * Keywords: MOSFET ESD Overcurrent Obsolete.
 * Default footprint: Package_TO_SOT_SMD:SOT-223.
 */
export class BSP75N extends Component.withPins({
  "IN": "1",
  "DRAIN": "2",
  "SOURCE_3": "3",
  "SOURCE_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "input", DRAIN: "passive", SOURCE_3: "passive", SOURCE_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET_Other:BSP75N";
  override referencePrefix = "Q";
}

/**
 * Self-Protected Low Side Driver with Temperature and Current Limit, 42 V Vds, 1.4 A Id, 200 mOhm Rds, SOT-223
 *
 * KiCad symbol: `Transistor_FET_Other:BSP76`. Reference prefix: `Q`.
 * Footprint filters: SOT?223*.
 * @see https://www.infineon.com/dgdl/Infineon-BSP76-DS-v01_03-en.pdf?fileId=db3a3043271faefd01274d00e2695d45
 * Keywords: MOSFET ESD Overcurrent LowSideSwitch automotive.
 * Default footprint: Package_TO_SOT_SMD:SOT-223-3_TabPin2.
 */
export class BSP76 extends Component.withPins({
  "IN": "1",
  "DRAIN": "2",
  "SOURCE_3": "3",
  "SOURCE_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "input", DRAIN: "passive", SOURCE_3: "passive", SOURCE_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET_Other:BSP76";
  override referencePrefix = "Q";
}

/**
 * 60V, 0.2A, 1ohm Rds, Self-Protected High Side Driver with Temperature and Current Limit, SOT−223
 *
 * KiCad symbol: `Transistor_FET_Other:BTS4140N`. Reference prefix: `Q`.
 * Footprint filters: SOT?223*.
 * @see https://www.infineon.com/dgdl/Infineon-BTS4140N-DS-v01_01-EN.pdf?fileId=5546d46259d9a4bf015a852aac8b7785
 * Keywords: MOSFET ESD Overcurrent.
 * Default footprint: Package_TO_SOT_SMD:SOT-223.
 */
export class BTS4140N extends Component.withPins({
  "IN": "1",
  "V_{bb}_2": "2",
  "OUT": "3",
  "V_{bb}_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { IN: "input", "V_{bb}_2": "passive", OUT: "passive", "V_{bb}_4": "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET_Other:BTS4140N";
  override referencePrefix = "Q";
}

/**
 * 150mA Ids, 400 Vds, Depletion-mode N-channel MOSFET, TO-92
 *
 * KiCad symbol: `Transistor_FET_Other:DN2540N3-G`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/DN2540%20B060313.pdf
 * Keywords: N-Channel Depletion-Mode MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class DN2540N3_G extends Component.withPins({
  "S": "1",
  "G": "2",
  "D": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { S: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET_Other:DN2540N3-G";
  override referencePrefix = "Q";
}

/**
 * 150mA Ids, 400 Vds, Depletion-mode N-channel MOSFET, TO-220
 *
 * KiCad symbol: `Transistor_FET_Other:DN2540N5-G`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/DN2540%20B060313.pdf
 * Keywords: N-Channel Depletion-Mode MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class DN2540N5_G extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET_Other:DN2540N5-G";
  override referencePrefix = "Q";
}

/**
 * 150mA Ids, 400 Vds, Depletion-mode N-channel MOSFET, SOT-89
 *
 * KiCad symbol: `Transistor_FET_Other:DN2540N8-G`. Reference prefix: `Q`.
 * Footprint filters: SOT?89*.
 * @see https://ww1.microchip.com/downloads/en/DeviceDoc/DN2540%20B060313.pdf
 * Keywords: N-Channel Depletion-Mode MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class DN2540N8_G extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET_Other:DN2540N8-G";
  override referencePrefix = "Q";
}

/**
 * Self-Protected Low Side Driver with Temperature and Current Limit, SOT−223
 *
 * KiCad symbol: `Transistor_FET_Other:NCV8402xST`. Reference prefix: `Q`.
 * Footprint filters: SOT?223*.
 * @see https://www.onsemi.com/pub/Collateral/NCV8402-D.PDF
 * Keywords: MOSFET ESD Overcurrent NCV8402STT1G-obsolete NCV8402STT3G-obsolete NCV8402ASTT1G NCV8402ASTT3G.
 * Default footprint: Package_TO_SOT_SMD:SOT-223.
 */
export class NCV8402xST extends Component.withPins({
  "G": "1",
  "D_2": "2",
  "S": "3",
  "D_4": "4",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", D_2: "passive", S: "passive", D_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET_Other:NCV8402xST";
  override referencePrefix = "Q";
}

/**
 * Depletion-mode N-channel MOSFET, drain/gate/source
 *
 * KiCad symbol: `Transistor_FET_Other:Q_NMOS_Depletion_DGS`. Reference prefix: `Q`.
 * Keywords: NMOS.
 */
export class Q_NMOS_Depletion_DGS extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET_Other:Q_NMOS_Depletion_DGS";
  override referencePrefix = "Q";
}

/**
 * Depletion-mode N-channel MOSFET drain/source/gate
 *
 * KiCad symbol: `Transistor_FET_Other:Q_NMOS_Depletion_DSG`. Reference prefix: `Q`.
 * Keywords: NMOS.
 */
export class Q_NMOS_Depletion_DSG extends Component.withPins({
  "D": "1",
  "S": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { D: "passive", S: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET_Other:Q_NMOS_Depletion_DSG";
  override referencePrefix = "Q";
}

/**
 * Depletion-mode N-channel MOSFET gate/drain/source
 *
 * KiCad symbol: `Transistor_FET_Other:Q_NMOS_Depletion_GDS`. Reference prefix: `Q`.
 * Keywords: NMOS.
 */
export class Q_NMOS_Depletion_GDS extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET_Other:Q_NMOS_Depletion_GDS";
  override referencePrefix = "Q";
}

/**
 * Depletion-mode N-channel MOSFET gate/source/drain
 *
 * KiCad symbol: `Transistor_FET_Other:Q_NMOS_Depletion_GSD`. Reference prefix: `Q`.
 * Keywords: NMOS.
 */
export class Q_NMOS_Depletion_GSD extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET_Other:Q_NMOS_Depletion_GSD";
  override referencePrefix = "Q";
}

/**
 * Depletion-mode N-channel MOSFET source/drain/gate
 *
 * KiCad symbol: `Transistor_FET_Other:Q_NMOS_Depletion_SDG`. Reference prefix: `Q`.
 * Keywords: NMOS.
 */
export class Q_NMOS_Depletion_SDG extends Component.withPins({
  "S": "1",
  "D": "2",
  "G": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { S: "passive", D: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET_Other:Q_NMOS_Depletion_SDG";
  override referencePrefix = "Q";
}

/**
 * Depletion-mode N-channel MOSFET source/gate/drain
 *
 * KiCad symbol: `Transistor_FET_Other:Q_NMOS_Depletion_SGD`. Reference prefix: `Q`.
 * Keywords: NMOS.
 */
export class Q_NMOS_Depletion_SGD extends Component.withPins({
  "S": "1",
  "G": "2",
  "D": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { S: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET_Other:Q_NMOS_Depletion_SGD";
  override referencePrefix = "Q";
}

/**
 * 6A Ids, 100 Vds, 70mOhm@10V N-channel MOSFET, SOT-89-3
 *
 * KiCad symbol: `Transistor_FET_Other:SP010N70T8`. Reference prefix: `Q`.
 * Footprint filters: SOT?89*.
 * @see https://www.siliup.com/upload/pdf/202205/SP010N70T8.pdf
 * Keywords: N-Channel Depletion-Mode MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class SP010N70T8 extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET_Other:SP010N70T8";
  override referencePrefix = "Q";
}

/**
 * Fully autoprotected Power MOSFET, OMNIFET, 35A Ilim, 70V Vclamp, 0.028 ohms Rds(on), diagnostic/fault feedback, TO-220
 *
 * KiCad symbol: `Transistor_FET_Other:VNP35N07xx-E`. Reference prefix: `Q`.
 * Footprint filters: *TO*220*Vertical*.
 * @see https://www.st.com/resource/en/datasheet/vnp35n07-e.pdf
 * Keywords: N-Channel VIPower ESD VNP35N07-E.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class VNP35N07xx_E extends Component.withPins({
  "INPUT": "1",
  "DRAIN": "2",
  "SOURCE": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { INPUT: "bidirectional", DRAIN: "passive", SOURCE: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET_Other:VNP35N07xx-E";
  override referencePrefix = "Q";
}

/**
 * Fully autoprotected Power MOSFET, OMNIFET, 35A Ilim, 70V Vclamp, 0.028 ohms Rds(on), diagnostic/fault feedback, TO-263-2 (D2PAK)
 *
 * KiCad symbol: `Transistor_FET_Other:VNB35N07xx-E`. Reference prefix: `Q`.
 * Footprint filters: *TO*263*.
 * @see https://www.st.com/resource/en/datasheet/vnp35n07-e.pdf
 * Keywords: N-Channel VIPower ESD VNB35N07-E.
 * Default footprint: Package_TO_SOT_SMD:TO-263-2.
 */
export class VNB35N07xx_E extends Component.withPins({
  "INPUT": "1",
  "DRAIN": "2",
  "SOURCE": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { INPUT: "bidirectional", DRAIN: "passive", SOURCE: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET_Other:VNB35N07xx-E";
  override referencePrefix = "Q";
}

/**
 * 10A Id, 70V Vds, N-Channel Power MOSFET, fully autoprotected, TO-220
 *
 * KiCad symbol: `Transistor_FET_Other:VNP10N07`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.st.com/resource/en/datasheet/vnp10n07.pdf
 * Keywords: N-Channel Power MOSFET OMNIFET.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class VNP10N07 extends Component.withPins({
  "INPUT": "1",
  "DRAIN": "2",
  "SOURCE": "3",
}) {
  constructor(refOrOpts: string | ConstructorParameters<typeof Component>[0] = {}, options: ConstructorParameters<typeof Component>[0] = {}) {
    const opts = typeof refOrOpts === 'string' ? { ...options, ref: refOrOpts } : refOrOpts;
    super({ ...opts, pinTypes: { INPUT: "bidirectional", DRAIN: "passive", SOURCE: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET_Other:VNP10N07";
  override referencePrefix = "Q";
}
