// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * NPN transistor, emitter/base/collector
 *
 * KiCad symbol: `Transistor_BJT:Q_NPN_EBC`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_NPN_EBC extends Component.withPins({
  "E": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", B: "input", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_NPN_EBC";
  override referencePrefix = "Q";
}

/**
 * 800mA Ic, 50V Vce, NPN Transistor, TO-39
 *
 * KiCad symbol: `Transistor_BJT:2N2219`. Reference prefix: `Q`.
 * Footprint filters: TO?39*.
 * @see http://www.onsemi.com/pub_link/Collateral/2N2219-D.PDF
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-39-3.
 */
export class _2N2219 extends Component.withPins({
  "E": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", B: "input", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:2N2219";
  override referencePrefix = "Q";
}

/**
 * Unijunction Transistor, TO-18
 *
 * KiCad symbol: `Transistor_BJT:2N2646`. Reference prefix: `Q`.
 * Footprint filters: TO?18*.
 * @see http://www.bucek.name/pdf/2n2646,2647.pdf
 * Keywords: UJT.
 * Default footprint: Package_TO_SOT_THT:TO-18-3.
 */
export class _2N2646 extends Component.withPins({
  "B2": "1",
  "E": "2",
  "B1": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B2: "passive", E: "input", B1: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:2N2646";
  override referencePrefix = "Q";
}

/**
 * Unijunction Transistor, TO-18
 *
 * KiCad symbol: `Transistor_BJT:2N2647`. Reference prefix: `Q`.
 * Footprint filters: TO?18*.
 * @see http://www.bucek.name/pdf/2n2646,2647.pdf
 * Keywords: UJT.
 * Default footprint: Package_TO_SOT_THT:TO-18-3.
 */
export class _2N2647 extends Component.withPins({
  "B2": "1",
  "E": "2",
  "B1": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B2: "passive", E: "input", B1: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:2N2647";
  override referencePrefix = "Q";
}

/**
 * NPN transistor, base/emitter/collector
 *
 * KiCad symbol: `Transistor_BJT:Q_NPN_BEC`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_NPN_BEC extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_NPN_BEC";
  override referencePrefix = "Q";
}

/**
 * 15A Ic, 60V Vce, Power NPN Transistor, TO-3
 *
 * KiCad symbol: `Transistor_BJT:2N3055`. Reference prefix: `Q`.
 * Footprint filters: TO?3*.
 * @see http://www.onsemi.com/pub_link/Collateral/2N3055-D.PDF
 * Keywords: power NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-3.
 */
export class _2N3055 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:2N3055";
  override referencePrefix = "Q";
}

/**
 * 0.2A Ic, 40V Vce, Small Signal NPN Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:2N3904`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://www.onsemi.com/pub/Collateral/2N3903-D.PDF
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class _2N3904 extends Component.withPins({
  "E": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", B: "input", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:2N3904";
  override referencePrefix = "Q";
}

/**
 * PNP transistor, emitter/base/collector
 *
 * KiCad symbol: `Transistor_BJT:Q_PNP_EBC`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_PNP_EBC extends Component.withPins({
  "E": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", B: "input", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_PNP_EBC";
  override referencePrefix = "Q";
}

/**
 * -0.2A Ic, -40V Vce, Small Signal PNP Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:2N3905`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://www.nteinc.com/specs/original/2N3905_06.pdf
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class _2N3905 extends Component.withPins({
  "E": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", B: "input", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:2N3905";
  override referencePrefix = "Q";
}

/**
 * -0.2A Ic, -40V Vce, Small Signal PNP Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:2N3906`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://www.onsemi.com/pub/Collateral/2N3906-D.PDF
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class _2N3906 extends Component.withPins({
  "E": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", B: "input", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:2N3906";
  override referencePrefix = "Q";
}

/**
 * PNP transistor, emitter/collector/base
 *
 * KiCad symbol: `Transistor_BJT:Q_PNP_ECB`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_PNP_ECB extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_PNP_ECB";
  override referencePrefix = "Q";
}

/**
 * -0.15A Ic, -50V Vce, Low Noise Audio PNP Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:2SA1015`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see http://www.datasheetcatalog.org/datasheet/toshiba/905.pdf
 * Keywords: Low Noise Audio PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class _2SA1015 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:2SA1015";
  override referencePrefix = "Q";
}

/**
 * -1A Ic, -100V Vce, High Voltage Power PNP Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:2SB631`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see http://pdf.datasheetcatalog.com/datasheet/sanyo/ds_pdf_e/2SB631.pdf
 * Keywords: High Voltage Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class _2SB631 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:2SB631";
  override referencePrefix = "Q";
}

/**
 * PNP transistor, base/collector/emitter
 *
 * KiCad symbol: `Transistor_BJT:Q_PNP_BCE`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_PNP_BCE extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_PNP_BCE";
  override referencePrefix = "Q";
}

/**
 * -12A Ic, -140V Vce, Silicon Power PNP Transistors, TO-3PB
 *
 * KiCad symbol: `Transistor_BJT:2SB817`. Reference prefix: `Q`.
 * Footprint filters: TO?3PB*.
 * @see http://skory.gylcomp.hu/alkatresz/2SB817.pdf
 * Keywords: Power PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-3PB-3_Vertical.
 */
export class _2SB817 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:2SB817";
  override referencePrefix = "Q";
}

/**
 * NPN transistor, emitter/collector/base
 *
 * KiCad symbol: `Transistor_BJT:Q_NPN_ECB`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_NPN_ECB extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_NPN_ECB";
  override referencePrefix = "Q";
}

/**
 * 0.15A Ic, 50V Vce, Low Noise Audio NPN Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:2SC1815`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://media.digikey.com/pdf/Data%20Sheets/Toshiba%20PDFs/2SC1815.pdf
 * Keywords: Low Noise Audio NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class _2SC1815 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:2SC1815";
  override referencePrefix = "Q";
}

/**
 * 50mA Ic, 160V Vce, Audio High Voltage NPN Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:2SC1941`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see http://rtellason.com/transdata/2sc1941.pdf
 * Keywords: Audio High Voltage NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class _2SC1941 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:2SC1941";
  override referencePrefix = "Q";
}

/**
 * 6A Ic, 80V Vce, Silicon 27MHz RF Power NPN Transistors, TO-220
 *
 * KiCad symbol: `Transistor_BJT:2SC1945`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://rtellason.com/transdata/2sc1945.pdf
 * Keywords: RF Power NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class _2SC1945 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:2SC1945";
  override referencePrefix = "Q";
}

/**
 * 0.3A Ic, 20V Vce, NPN Transistor, For Muting and Switching, SOT-323
 *
 * KiCad symbol: `Transistor_BJT:2SC4213`. Reference prefix: `Q`.
 * Footprint filters: SOT?323*.
 * @see https://toshiba.semicon-storage.com/info/docget.jsp?did=19305&prodName=2SC4213
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class _2SC4213 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:2SC4213";
  override referencePrefix = "Q";
}

/**
 * NPN transistor, base/collector/emitter
 *
 * KiCad symbol: `Transistor_BJT:Q_NPN_BCE`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_NPN_BCE extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_NPN_BCE";
  override referencePrefix = "Q";
}

/**
 * 12A Ic, 140V Vce, Silicon Power NPN Transistors, TO-3PB
 *
 * KiCad symbol: `Transistor_BJT:2SD1047`. Reference prefix: `Q`.
 * Footprint filters: TO?3PB*.
 * @see http://www.st.com/resource/en/datasheet/2sd1047.pdf
 * Keywords: Power NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-3PB-3_Vertical.
 */
export class _2SD1047 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:2SD1047";
  override referencePrefix = "Q";
}

/**
 * 1A Ic, 100V Vce, High Voltage Power NPN Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:2SD600`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see http://pdf.datasheetcatalog.com/datasheet/sanyo/ds_pdf_e/2SB631.pdf
 * Keywords: High Voltage Power Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class _2SD600 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:2SD600";
  override referencePrefix = "Q";
}

/**
 * 4 Matched PNP Transistors, hfe=75, SOIC-14
 *
 * KiCad symbol: `Transistor_BJT:320S14-U`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x8.7mm*P1.27mm*.
 * @see https://www.thatcorp.com/datashts/THAT_300-Series_Datasheet.pdf
 * Keywords: dual pair pnp matched transistors.
 * Default footprint: Package_SO:SOIC-14_3.9x8.7mm_P1.27mm.
 */
export class _320S14_U extends Component.withPins({
  "P4": "4",
  "P11": "11",
  "P1": "1",
  "P2": "2",
  "P3": "3",
  "P12": "12",
  "P13": "13",
  "P14": "14",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "P8": "8",
  "P9": "9",
  "P10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P4: "passive", P11: "passive", P1: "passive", P2: "input", P3: "passive", P12: "passive", P13: "input", P14: "passive", P5: "passive", P6: "input", P7: "passive", P8: "passive", P9: "input", P10: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:320S14-U";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 50V Vce, Low Noise General Purpose NPN Transistor, TO-18
 *
 * KiCad symbol: `Transistor_BJT:BC107`. Reference prefix: `Q`.
 * Footprint filters: TO?18*.
 * @see http://www.b-kainka.de/Daten/Transistor/BC108.pdf
 * Keywords: NPN low noise transistor.
 * Default footprint: Package_TO_SOT_THT:TO-18-3.
 */
export class BC107 extends Component.withPins({
  "E": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", B: "input", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC107";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 30V Vce, Low Noise General Purpose NPN Transistor, TO-18
 *
 * KiCad symbol: `Transistor_BJT:BC108`. Reference prefix: `Q`.
 * Footprint filters: TO?18*.
 * @see http://www.b-kainka.de/Daten/Transistor/BC108.pdf
 * Keywords: NPN low noise transistor.
 * Default footprint: Package_TO_SOT_THT:TO-18-3.
 */
export class BC108 extends Component.withPins({
  "E": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", B: "input", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC108";
  override referencePrefix = "Q";
}

/**
 * 0.2A Ic, 25V Vce, Low Noise General Purpose NPN Transistor, TO-18
 *
 * KiCad symbol: `Transistor_BJT:BC109`. Reference prefix: `Q`.
 * Footprint filters: TO?18*.
 * @see http://www.farnell.com/datasheets/296634.pdf
 * Keywords: NPN low noise transistor.
 * Default footprint: Package_TO_SOT_THT:TO-18-3.
 */
export class BC109 extends Component.withPins({
  "E": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", B: "input", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC109";
  override referencePrefix = "Q";
}

/**
 * 1A Ic, 40V Vce, NPN Transistor, TO-39
 *
 * KiCad symbol: `Transistor_BJT:BC140`. Reference prefix: `Q`.
 * Footprint filters: TO?39*.
 * @see http://www.farnell.com/datasheets/296634.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-39-3.
 */
export class BC140 extends Component.withPins({
  "E": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", B: "input", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC140";
  override referencePrefix = "Q";
}

/**
 * 1A Ic, 60V Vce, NPN Transistor, TO-39
 *
 * KiCad symbol: `Transistor_BJT:BC141`. Reference prefix: `Q`.
 * Footprint filters: TO?39*.
 * @see http://www.farnell.com/datasheets/296634.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-39-3.
 */
export class BC141 extends Component.withPins({
  "E": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", B: "input", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC141";
  override referencePrefix = "Q";
}

/**
 * 1A Ic, 40V Vce, Power PNP Transistor, TO-39
 *
 * KiCad symbol: `Transistor_BJT:BC160`. Reference prefix: `Q`.
 * Footprint filters: TO?39*.
 * @see http://www.farnell.com/datasheets/1697389.pdf
 * Keywords: power PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-39-3.
 */
export class BC160 extends Component.withPins({
  "E": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", B: "input", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC160";
  override referencePrefix = "Q";
}

/**
 * 1A Ic, 60V Vce, Power PNP Transistor, TO-39
 *
 * KiCad symbol: `Transistor_BJT:BC161`. Reference prefix: `Q`.
 * Footprint filters: TO?39*.
 * @see http://www.farnell.com/datasheets/1697389.pdf
 * Keywords: power PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-39-3.
 */
export class BC161 extends Component.withPins({
  "E": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", B: "input", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC161";
  override referencePrefix = "Q";
}

/**
 * PNP transistor, collector/base/emitter
 *
 * KiCad symbol: `Transistor_BJT:Q_PNP_CBE`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_PNP_CBE extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_PNP_CBE";
  override referencePrefix = "Q";
}

/**
 * 0.3A Ic, 50V Vce, PNP Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC212`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://media.digikey.com/pdf/Data%20Sheets/Fairchild%20PDFs/BC212.pdf
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC212 extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC212";
  override referencePrefix = "Q";
}

/**
 * NPN transistor, collector/base/emitter
 *
 * KiCad symbol: `Transistor_BJT:Q_NPN_CBE`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_NPN_CBE extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_NPN_CBE";
  override referencePrefix = "Q";
}

/**
 * 100mA Ic, 50V Vce, Epitaxial Silicon NPN Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC237`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see http://www.onsemi.com/pub_link/Collateral/BC237-D.PDF
 * Keywords: Epitaxial Silicon NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC237 extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC237";
  override referencePrefix = "Q";
}

/**
 * NPN transistor, collector/emitter/base
 *
 * KiCad symbol: `Transistor_BJT:Q_NPN_CEB`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_NPN_CEB extends Component.withPins({
  "C": "1",
  "E": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", E: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_NPN_CEB";
  override referencePrefix = "Q";
}

/**
 * 50mA Ic, 40V Vce, RF Signal NPN Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC240`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://www.onsemi.com/pub/Collateral/BF420-D.PDF
 * Keywords: RF NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC240 extends Component.withPins({
  "C": "1",
  "E": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", E: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC240";
  override referencePrefix = "Q";
}

/**
 * 100mA Ic, 45V Vce, Epitaxial Silicon PNP Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC307`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see http://www.onsemi.com/pub_link/Collateral/BC307-D.PDF
 * Keywords: Epitaxial Silicon PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC307 extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC307";
  override referencePrefix = "Q";
}

/**
 * 0.8A Ic, 45V Vce, PNP Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC327`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see http://www.onsemi.com/pub_link/Collateral/BC327-D.PDF
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC327 extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC327";
  override referencePrefix = "Q";
}

/**
 * 0.8A Ic, 25V Vce, PNP Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC328`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see http://www.redrok.com/PNP_BC327_-45V_-800mA_0.625W_Hfe100_TO-92.pdf
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC328 extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC328";
  override referencePrefix = "Q";
}

/**
 * 0.8A Ic, 45V Vce, NPN Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC337`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://diotec.com/tl_files/diotec/files/pdf/datasheets/bc337.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC337 extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC337";
  override referencePrefix = "Q";
}

/**
 * 0.8A Ic, 25V Vce, NPN Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC338`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see http://diotec.com/tl_files/diotec/files/pdf/datasheets/bc337
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC338 extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC338";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 30V Vce, Small Signal NPN Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC413`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see http://www.cdil.com/datasheets/bc413_14_b_c.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC413 extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC413";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 30V Vce, Small Signal NPN Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC413B`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see http://www.cdil.com/datasheets/bc413_14_b_c.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC413B extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC413B";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 30V Vce, Small Signal NPN Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC413C`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see http://www.cdil.com/datasheets/bc413_14_b_c.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC413C extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC413C";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 45V Vce, Small Signal NPN Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC414`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see http://www.cdil.com/datasheets/bc413_14_b_c.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC414 extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC414";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 45V Vce, Small Signal NPN Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC414B`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see http://www.cdil.com/datasheets/bc413_14_b_c.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC414B extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC414B";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 45V Vce, Small Signal NPN Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC414C`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see http://www.cdil.com/datasheets/bc413_14_b_c.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC414C extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC414C";
  override referencePrefix = "Q";
}

/**
 * PNP Darlington transistor, collector/base/emitter
 *
 * KiCad symbol: `Transistor_BJT:Q_PNP_Darlington_CBE`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_PNP_Darlington_CBE extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_PNP_Darlington_CBE";
  override referencePrefix = "Q";
}

/**
 * 1A Ic, 30V Vce, Darlington PNP Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC516`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://www.onsemi.com/pub/Collateral/BC516-D.PDF
 * Keywords: PNP Darlington Darl Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC516 extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC516";
  override referencePrefix = "Q";
}

/**
 * NPN Darlington transistor, collector/base/emitter
 *
 * KiCad symbol: `Transistor_BJT:Q_NPN_Darlington_CBE`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_NPN_Darlington_CBE extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_NPN_Darlington_CBE";
  override referencePrefix = "Q";
}

/**
 * 1A Ic, 30V Vce, Darlington NPN Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC517`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://www.onsemi.com/pub/Collateral/BC517-D74Z-D.PDF
 * Keywords: NPN Darlington Darl Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC517 extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC517";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 65V Vce, Small Signal NPN Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC546`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://www.onsemi.com/pub/Collateral/BC550-D.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC546 extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC546";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 45V Vce, Small Signal NPN Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC547`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://www.onsemi.com/pub/Collateral/BC550-D.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC547 extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC547";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 30V Vce, Small Signal NPN Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC548`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://www.onsemi.com/pub/Collateral/BC550-D.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC548 extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC548";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 30V Vce, Small Signal NPN Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC549`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://www.onsemi.com/pub/Collateral/BC550-D.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC549 extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC549";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 45V Vce, Small Signal NPN Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC550`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://www.onsemi.com/pub/Collateral/BC550-D.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC550 extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC550";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 65V Vce, PNP Small Signal Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC556`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://www.onsemi.com/pub/Collateral/BC556BTA-D.pdf
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC556 extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC556";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 45V Vce, PNP Small Signal Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC557`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://www.onsemi.com/pub/Collateral/BC556BTA-D.pdf
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC557 extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC557";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 30V Vce, PNP Small Signal Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC558`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://www.onsemi.com/pub/Collateral/BC556BTA-D.pdf
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC558 extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC558";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 30V Vce, PNP Small Signal Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC559`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://www.onsemi.com/pub/Collateral/BC556BTA-D.pdf
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC559 extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC559";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 45V Vce, PNP Small Signal Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC560`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://www.onsemi.com/pub/Collateral/BC556BTA-D.pdf
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC560 extends Component.withPins({
  "C": "1",
  "B": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", B: "input", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC560";
  override referencePrefix = "Q";
}

/**
 * 1A Ic, 45V Vce, PNP Medium Power Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:BC636`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://www.onsemi.com/pub/Collateral/BC636-D.pdf
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BC636 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC636";
  override referencePrefix = "Q";
}

/**
 * PNP transistor, base/emitter/collector
 *
 * KiCad symbol: `Transistor_BJT:Q_PNP_BEC`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_PNP_BEC extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_PNP_BEC";
  override referencePrefix = "Q";
}

/**
 * 0.8A Ic, 45V Vce, PNP Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:BC807`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.onsemi.com/pub/Collateral/BC808-D.pdf
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BC807 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC807";
  override referencePrefix = "Q";
}

/**
 * 0.8A Ic, 45V Vce, PNP Transistor, SOT-323
 *
 * KiCad symbol: `Transistor_BJT:BC807W`. Reference prefix: `Q`.
 * Footprint filters: SOT?323*.
 * @see https://www.onsemi.com/pub/Collateral/BC808-D.pdf
 * Keywords: PNP transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class BC807W extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC807W";
  override referencePrefix = "Q";
}

/**
 * 0.8A Ic, 25V Vce, PNP Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:BC808`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.onsemi.com/pub/Collateral/BC808-D.pdf
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BC808 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC808";
  override referencePrefix = "Q";
}

/**
 * 0.8A Ic, 25V Vce, PNP Transistor, SOT-323
 *
 * KiCad symbol: `Transistor_BJT:BC808W`. Reference prefix: `Q`.
 * Footprint filters: SOT?323*.
 * @see https://www.onsemi.com/pub/Collateral/BC808-D.pdf
 * Keywords: PNP transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class BC808W extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC808W";
  override referencePrefix = "Q";
}

/**
 * 0.8A Ic, 45V Vce, NPN Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:BC817`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.onsemi.com/pub/Collateral/BC818-D.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BC817 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC817";
  override referencePrefix = "Q";
}

/**
 * 0.8A Ic, 45V Vce, NPN Transistor, SOT-323
 *
 * KiCad symbol: `Transistor_BJT:BC817W`. Reference prefix: `Q`.
 * Footprint filters: SOT?323*.
 * @see https://www.onsemi.com/pub/Collateral/BC818-D.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class BC817W extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC817W";
  override referencePrefix = "Q";
}

/**
 * 0.8A Ic, 25V Vce, NPN Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:BC818`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.onsemi.com/pub/Collateral/BC818-D.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BC818 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC818";
  override referencePrefix = "Q";
}

/**
 * 0.8A Ic, 25V Vce, NPN Transistor, SOT-323
 *
 * KiCad symbol: `Transistor_BJT:BC818W`. Reference prefix: `Q`.
 * Footprint filters: SOT?323*.
 * @see https://www.onsemi.com/pub/Collateral/BC818-D.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class BC818W extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC818W";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 65V Vce, NPN Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:BC846`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://assets.nexperia.com/documents/data-sheet/BC846_SER.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BC846 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC846";
  override referencePrefix = "Q";
}

/**
 * Dual NPN transistor, 6 pin package
 *
 * KiCad symbol: `Transistor_BJT:Q_Dual_NPN_NPN_E1B1C2E2B2C1`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_Dual_NPN_NPN_E1B1C2E2B2C1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_Dual_NPN_NPN_E1B1C2E2B2C1";
  override referencePrefix = "Q";
}

/**
 * 100mA IC, 65V Vce, Dual NPN/NPN Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:BC846BDW1`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see http://www.onsemi.com/pub_link/Collateral/BC846BDW1T1-D.PDF
 * Keywords: NPN/NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BC846BDW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC846BDW1";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 65V Vce, NPN Transistor, DFN1006-3
 *
 * KiCad symbol: `Transistor_BJT:BC846BLP4`. Reference prefix: `Q`.
 * Footprint filters: Diodes*DFN1006*.
 * @see https://www.diodes.com/datasheet/download/BC846BLP4.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_DFN_QFN:Diodes_DFN1006-3.
 */
export class BC846BLP4 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC846BLP4";
  override referencePrefix = "Q";
}

/**
 * Dual NPN/PNP transistor, 6 pin package
 *
 * KiCad symbol: `Transistor_BJT:Q_Dual_NPN_PNP_E1B1C2E2B2C1`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_Dual_NPN_PNP_E1B1C2E2B2C1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_Dual_NPN_PNP_E1B1C2E2B2C1";
  override referencePrefix = "Q";
}

/**
 * 100mA IC, 65V Vce, Dual NPN/PNP Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:BC846BPDW1`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see http://www.onsemi.com/pub_link/Collateral/BC846BPDW1T1-D.PDF
 * Keywords: NPN/PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BC846BPDW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC846BPDW1";
  override referencePrefix = "Q";
}

/**
 * 100mA IC, 65V Vce, Dual NPN/PNP Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:BC846BPN`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see https://assets.nexperia.com/documents/data-sheet/BC846BPN.pdf
 * Keywords: NPN/PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BC846BPN extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC846BPN";
  override referencePrefix = "Q";
}

/**
 * 100mA IC, 65V Vce, Dual NPN/NPN Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:BC846BS`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see https://assets.nexperia.com/documents/data-sheet/BC846BS.pdf
 * Keywords: NPN/NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BC846BS extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC846BS";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 45V Vce, NPN Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:BC847`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.infineon.com/dgdl/Infineon-BC847SERIES_BC848SERIES_BC849SERIES_BC850SERIES-DS-v01_01-en.pdf?fileId=db3a304314dca389011541d4630a1657
 * Keywords: NPN Small Signal Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BC847 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC847";
  override referencePrefix = "Q";
}

/**
 * 100mA IC, 45V Vce, Dual NPN/NPN Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:BC847BDW1`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see http://www.onsemi.com/pub_link/Collateral/BC846BDW1T1-D.PDF
 * Keywords: NPN/NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BC847BDW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC847BDW1";
  override referencePrefix = "Q";
}

/**
 * 100mA IC, 45V Vce, Dual NPN/PNP Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:BC847BPDW1`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see http://www.onsemi.com/pub_link/Collateral/BC846BPDW1T1-D.PDF
 * Keywords: NPN/PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BC847BPDW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC847BPDW1";
  override referencePrefix = "Q";
}

/**
 * 100mA IC, 45V Vce, Dual NPN/PNP Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:BC847BPN`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see https://assets.nexperia.com/documents/data-sheet/BC847BPN.pdf
 * Keywords: NPN/PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BC847BPN extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC847BPN";
  override referencePrefix = "Q";
}

/**
 * 100mA IC, 45V Vce, Dual NPN/NPN Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:BC847BS`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see https://assets.nexperia.com/documents/data-sheet/BC847BS.pdf
 * Keywords: NPN/NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BC847BS extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC847BS";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 45V Vce, NPN Transistor, SOT-323
 *
 * KiCad symbol: `Transistor_BJT:BC847W`. Reference prefix: `Q`.
 * Footprint filters: SOT?323*.
 * @see http://www.infineon.com/dgdl/Infineon-BC847SERIES_BC848SERIES_BC849SERIES_BC850SERIES-DS-v01_01-en.pdf?fileId=db3a304314dca389011541d4630a1657
 * Keywords: NPN Small Signal Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class BC847W extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC847W";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 30V Vce, NPN Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:BC848`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.infineon.com/dgdl/Infineon-BC847SERIES_BC848SERIES_BC849SERIES_BC850SERIES-DS-v01_01-en.pdf?fileId=db3a304314dca389011541d4630a1657
 * Keywords: NPN Small Signal Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BC848 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC848";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 30V Vce, NPN Transistor, SOT-323
 *
 * KiCad symbol: `Transistor_BJT:BC848W`. Reference prefix: `Q`.
 * Footprint filters: SOT?323*.
 * @see http://www.infineon.com/dgdl/Infineon-BC847SERIES_BC848SERIES_BC849SERIES_BC850SERIES-DS-v01_01-en.pdf?fileId=db3a304314dca389011541d4630a1657
 * Keywords: NPN Small Signal Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class BC848W extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC848W";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 30V Vce, NPN Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:BC849`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.infineon.com/dgdl/Infineon-BC847SERIES_BC848SERIES_BC849SERIES_BC850SERIES-DS-v01_01-en.pdf?fileId=db3a304314dca389011541d4630a1657
 * Keywords: NPN Small Signal Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BC849 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC849";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 30V Vce, NPN Transistor, SOT-323
 *
 * KiCad symbol: `Transistor_BJT:BC849W`. Reference prefix: `Q`.
 * Footprint filters: SOT?323*.
 * @see http://www.infineon.com/dgdl/Infineon-BC847SERIES_BC848SERIES_BC849SERIES_BC850SERIES-DS-v01_01-en.pdf?fileId=db3a304314dca389011541d4630a1657
 * Keywords: NPN Small Signal Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class BC849W extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC849W";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 45V Vce, NPN Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:BC850`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.infineon.com/dgdl/Infineon-BC847SERIES_BC848SERIES_BC849SERIES_BC850SERIES-DS-v01_01-en.pdf?fileId=db3a304314dca389011541d4630a1657
 * Keywords: NPN Small Signal Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BC850 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC850";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 45V Vce, NPN Transistor, SOT-323
 *
 * KiCad symbol: `Transistor_BJT:BC850W`. Reference prefix: `Q`.
 * Footprint filters: SOT?323*.
 * @see http://www.infineon.com/dgdl/Infineon-BC847SERIES_BC848SERIES_BC849SERIES_BC850SERIES-DS-v01_01-en.pdf?fileId=db3a304314dca389011541d4630a1657
 * Keywords: NPN Small Signal Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class BC850W extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC850W";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 65V Vce, PNP Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:BC856`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.onsemi.com/pub/Collateral/BC860-D.pdf
 * Keywords: PNP transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BC856 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC856";
  override referencePrefix = "Q";
}

/**
 * Dual PNP transistor, 6 pin package
 *
 * KiCad symbol: `Transistor_BJT:Q_Dual_PNP_PNP_E1B1C2E2B2C1`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_Dual_PNP_PNP_E1B1C2E2B2C1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_Dual_PNP_PNP_E1B1C2E2B2C1";
  override referencePrefix = "Q";
}

/**
 * 100mA IC, 65V Vce, Dual PNP/PNP Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:BC856BDW1`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see http://www.onsemi.com/pub_link/Collateral/BC856BDW1T1-D.PDF
 * Keywords: PNP/PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BC856BDW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC856BDW1";
  override referencePrefix = "Q";
}

/**
 * 100mA IC, 65V Vce, Dual PNP/PNP Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:BC856BS`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see https://assets.nexperia.com/documents/data-sheet/BC856BS.pdf
 * Keywords: PNP/PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BC856BS extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC856BS";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 65V Vce, PNP Transistor, SOT-323
 *
 * KiCad symbol: `Transistor_BJT:BC856W`. Reference prefix: `Q`.
 * Footprint filters: SOT?323*.
 * @see https://www.onsemi.com/pub/Collateral/BC860-D.pdf
 * Keywords: PNP transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class BC856W extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC856W";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 45V Vce, PNP Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:BC857`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.onsemi.com/pub/Collateral/BC860-D.pdf
 * Keywords: PNP transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BC857 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC857";
  override referencePrefix = "Q";
}

/**
 * 100mA IC, 45V Vce, Dual PNP/PNP Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:BC857BDW1`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see http://www.onsemi.com/pub_link/Collateral/BC856BDW1T1-D.PDF
 * Keywords: PNP/PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BC857BDW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC857BDW1";
  override referencePrefix = "Q";
}

/**
 * 100mA IC, 45V Vce, Dual PNP/PNP Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:BC857BS`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see https://assets.nexperia.com/documents/data-sheet/BC857BS.pdf
 * Keywords: PNP/PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BC857BS extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC857BS";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 45V Vce, PNP Small Signal Transistor, SOT-323
 *
 * KiCad symbol: `Transistor_BJT:BC857W`. Reference prefix: `Q`.
 * Footprint filters: SOT?323*.
 * @see http://www.infineon.com/dgdl/Infineon-BC857SERIES_BC858SERIES_BC859SERIES_BC860SERIES-DS-v01_01-en.pdf?fileId=db3a304314dca389011541da0e3a1661
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class BC857W extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC857W";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 30V Vce, PNP Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:BC858`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.onsemi.com/pub/Collateral/BC860-D.pdf
 * Keywords: PNP transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BC858 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC858";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 30V Vce, PNP Small Signal Transistor, SOT-323
 *
 * KiCad symbol: `Transistor_BJT:BC858W`. Reference prefix: `Q`.
 * Footprint filters: SOT?323*.
 * @see http://www.infineon.com/dgdl/Infineon-BC857SERIES_BC858SERIES_BC859SERIES_BC860SERIES-DS-v01_01-en.pdf?fileId=db3a304314dca389011541da0e3a1661
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class BC858W extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC858W";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 30V Vce, PNP Small Signal Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:BC859`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.infineon.com/dgdl/Infineon-BC857SERIES_BC858SERIES_BC859SERIES_BC860SERIES-DS-v01_01-en.pdf?fileId=db3a304314dca389011541da0e3a1661
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BC859 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC859";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 30V Vce, PNP Small Signal Transistor, SOT-323
 *
 * KiCad symbol: `Transistor_BJT:BC859W`. Reference prefix: `Q`.
 * Footprint filters: SOT?323*.
 * @see http://www.infineon.com/dgdl/Infineon-BC857SERIES_BC858SERIES_BC859SERIES_BC860SERIES-DS-v01_01-en.pdf?fileId=db3a304314dca389011541da0e3a1661
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class BC859W extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC859W";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 45V Vce, PNP Small Signal Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:BC860`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.infineon.com/dgdl/Infineon-BC857SERIES_BC858SERIES_BC859SERIES_BC860SERIES-DS-v01_01-en.pdf?fileId=db3a304314dca389011541da0e3a1661
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BC860 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC860";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 45V Vce, PNP Small Signal Transistor, SOT-323
 *
 * KiCad symbol: `Transistor_BJT:BC860W`. Reference prefix: `Q`.
 * Footprint filters: SOT?323*.
 * @see http://www.infineon.com/dgdl/Infineon-BC857SERIES_BC858SERIES_BC859SERIES_BC860SERIES-DS-v01_01-en.pdf?fileId=db3a304314dca389011541da0e3a1661
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class BC860W extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BC860W";
  override referencePrefix = "Q";
}

/**
 * 1A Ic, 45V Vce, PNP Medium Power Transistor, SOT-223
 *
 * KiCad symbol: `Transistor_BJT:BCP51`. Reference prefix: `Q`.
 * Footprint filters: SOT?223*.
 * @see https://www.onsemi.com/pub/Collateral/BCP51-D.pdf
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-223-3_TabPin2.
 */
export class BCP51 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BCP51";
  override referencePrefix = "Q";
}

/**
 * PNP transistor, base/collector/emitter, collector connected to mounting plane
 *
 * KiCad symbol: `Transistor_BJT:Q_PNP_BCEC`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_PNP_BCEC extends Component.withPins({
  "B": "1",
  "C_2": "2",
  "E": "3",
  "C_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C_2: "passive", E: "passive", C_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_PNP_BCEC";
  override referencePrefix = "Q";
}

/**
 * 1A Ic, 80V Vce, PNP Medium Power Transistor, SOT-223
 *
 * KiCad symbol: `Transistor_BJT:BCP53`. Reference prefix: `Q`.
 * Footprint filters: SOT?223*.
 * @see http://www.onsemi.com/pub_link/Collateral/BCP53T1-D.PDF
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-223-3_TabPin2.
 */
export class BCP53 extends Component.withPins({
  "B": "1",
  "C_2": "2",
  "E": "3",
  "C_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C_2: "passive", E: "passive", C_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BCP53";
  override referencePrefix = "Q";
}

/**
 * NPN transistor, base/collector/emitter, collector connected to mounting plane
 *
 * KiCad symbol: `Transistor_BJT:Q_NPN_BCEC`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_NPN_BCEC extends Component.withPins({
  "B": "1",
  "C_2": "2",
  "E": "3",
  "C_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C_2: "passive", E: "passive", C_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_NPN_BCEC";
  override referencePrefix = "Q";
}

/**
 * 1A Ic, 80V Vce, NPN Medium Power Transistor, SOT-223
 *
 * KiCad symbol: `Transistor_BJT:BCP56`. Reference prefix: `Q`.
 * Footprint filters: SOT?223*.
 * @see https://www.nxp.com/docs/en/data-sheet/BCP56_BCX56_BC56PA.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-223-3_TabPin2.
 */
export class BCP56 extends Component.withPins({
  "B": "1",
  "C_2": "2",
  "E": "3",
  "C_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C_2: "passive", E: "passive", C_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BCP56";
  override referencePrefix = "Q";
}

/**
 * NPN Darlington transistor, base/collector/emitter
 *
 * KiCad symbol: `Transistor_BJT:Q_NPN_Darlington_BCE`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_NPN_Darlington_BCE extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_NPN_Darlington_BCE";
  override referencePrefix = "Q";
}

/**
 * NPN Darlington transistor, 30Vce, 500mA, SOT-89
 *
 * KiCad symbol: `Transistor_BJT:BCV29`. Reference prefix: `Q`.
 * Footprint filters: SOT?89*.
 * @see https://assets.nexperia.com/documents/data-sheet/BCV29_49.pdf
 * Keywords: transistor NPN Darlington.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class BCV29 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BCV29";
  override referencePrefix = "Q";
}

/**
 * NPN Darlington transistor, 60Vce, 500mA, SOT-89
 *
 * KiCad symbol: `Transistor_BJT:BCV49`. Reference prefix: `Q`.
 * Footprint filters: SOT?89*.
 * @see https://assets.nexperia.com/documents/data-sheet/BCV29_49.pdf
 * Keywords: transistor NPN Darlington.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class BCV49 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BCV49";
  override referencePrefix = "Q";
}

/**
 * Double NPN transistors, current mirror configuration
 *
 * KiCad symbol: `Transistor_BJT:Q_Dual_NPN_C2C1E1E2`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_Dual_NPN_C2C1E1E2 extends Component.withPins({
  "C2": "1",
  "C1": "2",
  "E1": "3",
  "E2": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C2: "passive", C1: "passive", E1: "passive", E2: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_Dual_NPN_C2C1E1E2";
  override referencePrefix = "Q";
}

/**
 * 100mA IC, 30V Vce, Double NPN Transistors, Current mirror configuration, SOT-143
 *
 * KiCad symbol: `Transistor_BJT:BCV61`. Reference prefix: `Q`.
 * Footprint filters: SOT?143*.
 * @see https://assets.nexperia.com/documents/data-sheet/BCV61.pdf
 * Keywords: Transistor Double NPN.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 */
export class BCV61 extends Component.withPins({
  "C2": "1",
  "C1": "2",
  "E1": "3",
  "E2": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C2: "passive", C1: "passive", E1: "passive", E2: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BCV61";
  override referencePrefix = "Q";
}

/**
 * Double PNP transistors, current mirror configuration
 *
 * KiCad symbol: `Transistor_BJT:Q_Dual_PNP_C2C1E1E2`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_Dual_PNP_C2C1E1E2 extends Component.withPins({
  "C2": "1",
  "C1": "2",
  "E1": "3",
  "E2": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C2: "passive", C1: "passive", E1: "passive", E2: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_Dual_PNP_C2C1E1E2";
  override referencePrefix = "Q";
}

/**
 * 100mA IC, 30V Vce, Double PNP Transistors, Current mirror configuration, SOT-143
 *
 * KiCad symbol: `Transistor_BJT:BCV62`. Reference prefix: `Q`.
 * Footprint filters: SOT?143*.
 * @see https://assets.nexperia.com/documents/data-sheet/BCV62.pdf
 * Keywords: Transistor Double PNP.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 */
export class BCV62 extends Component.withPins({
  "C2": "1",
  "C1": "2",
  "E1": "3",
  "E2": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C2: "passive", C1: "passive", E1: "passive", E2: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BCV62";
  override referencePrefix = "Q";
}

/**
 * 1A Ic, 45V Vce, PNP Medium Power Transistor, SOT-89
 *
 * KiCad symbol: `Transistor_BJT:BCX51`. Reference prefix: `Q`.
 * Footprint filters: SOT?89*.
 * @see http://www.infineon.com/dgdl/bcx51_bcx52_bcx53.pdf
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class BCX51 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BCX51";
  override referencePrefix = "Q";
}

/**
 * 1A Ic, 60V Vce, PNP Medium Power Transistor, SOT-89
 *
 * KiCad symbol: `Transistor_BJT:BCX52`. Reference prefix: `Q`.
 * Footprint filters: SOT?89*.
 * @see http://www.infineon.com/dgdl/bcx51_bcx52_bcx53.pdf
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class BCX52 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BCX52";
  override referencePrefix = "Q";
}

/**
 * 1A Ic, 80V Vce, PNP Medium Power Transistor, SOT-89
 *
 * KiCad symbol: `Transistor_BJT:BCX53`. Reference prefix: `Q`.
 * Footprint filters: SOT?89*.
 * @see http://www.infineon.com/dgdl/bcx51_bcx52_bcx53.pdf
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class BCX53 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BCX53";
  override referencePrefix = "Q";
}

/**
 * 1A Ic, 80V Vce, NPN Medium Power Transistor, SOT-89
 *
 * KiCad symbol: `Transistor_BJT:BCX56`. Reference prefix: `Q`.
 * Footprint filters: SOT?89*.
 * @see https://www.nxp.com/docs/en/data-sheet/BCP56_BCX56_BC56PA.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class BCX56 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BCX56";
  override referencePrefix = "Q";
}

/**
 * 1.5A Ic, 45V Vce, Low Voltage Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BD135`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see http://www.st.com/internet/com/TECHNICAL_RESOURCES/TECHNICAL_LITERATURE/DATASHEET/CD00001225.pdf
 * Keywords: Low Voltage Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BD135 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD135";
  override referencePrefix = "Q";
}

/**
 * 1.5A Ic, 45V Vce, Low Voltage Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BD136`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see http://www.st.com/internet/com/TECHNICAL_RESOURCES/TECHNICAL_LITERATURE/DATASHEET/CD00001225.pdf
 * Keywords: Low Voltage Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BD136 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD136";
  override referencePrefix = "Q";
}

/**
 * 1.5A Ic, 60V Vce, Low Voltage Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BD137`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see http://www.st.com/internet/com/TECHNICAL_RESOURCES/TECHNICAL_LITERATURE/DATASHEET/CD00001225.pdf
 * Keywords: Low Voltage Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BD137 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD137";
  override referencePrefix = "Q";
}

/**
 * 1.5A Ic, 60V Vce, Low Voltage Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BD138`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see http://www.st.com/internet/com/TECHNICAL_RESOURCES/TECHNICAL_LITERATURE/DATASHEET/CD00001225.pdf
 * Keywords: Low Voltage Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BD138 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD138";
  override referencePrefix = "Q";
}

/**
 * 1.5A Ic, 80V Vce, Low Voltage Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BD139`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see http://www.st.com/internet/com/TECHNICAL_RESOURCES/TECHNICAL_LITERATURE/DATASHEET/CD00001225.pdf
 * Keywords: Low Voltage Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BD139 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD139";
  override referencePrefix = "Q";
}

/**
 * 1.5A Ic, 80V Vce, Low Voltage Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BD140`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see http://www.st.com/internet/com/TECHNICAL_RESOURCES/TECHNICAL_LITERATURE/DATASHEET/CD00001225.pdf
 * Keywords: Low Voltage Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BD140 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD140";
  override referencePrefix = "Q";
}

/**
 * 2A Ic, 45V Vce, Low Voltage Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BD233`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see https://media.digikey.com/pdf/Data%20Sheets/Micro%20Commercial%20PDFs/BD233,235,237.pdf
 * Keywords: Low Voltage Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BD233 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD233";
  override referencePrefix = "Q";
}

/**
 * 2A Ic, 45V Vce, Low Voltage Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BD234`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see http://www.electronica-pt.com/datasheets/bd/BD234.pdf
 * Keywords: Low Voltage Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BD234 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD234";
  override referencePrefix = "Q";
}

/**
 * 2A Ic, 60V Vce, Low Voltage Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BD235`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see https://media.digikey.com/pdf/Data%20Sheets/Micro%20Commercial%20PDFs/BD233,235,237.pdf
 * Keywords: Low Voltage Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BD235 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD235";
  override referencePrefix = "Q";
}

/**
 * 60V Vce, 2A, Low Voltage Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BD236`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see http://www.electronica-pt.com/datasheets/bd/BD234.pdf
 * Keywords: Low Voltage Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BD236 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD236";
  override referencePrefix = "Q";
}

/**
 * 2A Ic, 80V Vce, Low Voltage Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BD237`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see https://media.digikey.com/pdf/Data%20Sheets/Micro%20Commercial%20PDFs/BD233,235,237.pdf
 * Keywords: Low Voltage Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BD237 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD237";
  override referencePrefix = "Q";
}

/**
 * 2A Ic, 80V Vce, Low Voltage Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BD238`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see http://www.electronica-pt.com/datasheets/bd/BD234.pdf
 * Keywords: Low Voltage Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BD238 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD238";
  override referencePrefix = "Q";
}

/**
 * 25A Ic, 55V Vce, Silicon Power NPN Transistors, SOT-93/TO247
 *
 * KiCad symbol: `Transistor_BJT:BD249`. Reference prefix: `Q`.
 * Footprint filters: TO?218*, TO?247*.
 * @see http://www.mospec.com.tw/pdf/power/BD249.pdf
 * Keywords: Power NPN Transistor.
 */
export class BD249 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD249";
  override referencePrefix = "Q";
}

/**
 * 25A Ic, 70V Vce, Silicon Power NPN Transistors, SOT-93/TO247
 *
 * KiCad symbol: `Transistor_BJT:BD249A`. Reference prefix: `Q`.
 * Footprint filters: TO?218*, TO?247*.
 * @see http://www.mospec.com.tw/pdf/power/BD249.pdf
 * Keywords: Power NPN Transistor.
 */
export class BD249A extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD249A";
  override referencePrefix = "Q";
}

/**
 * 25A Ic, 90V Vce, Silicon Power NPN Transistors, SOT-93/TO247
 *
 * KiCad symbol: `Transistor_BJT:BD249B`. Reference prefix: `Q`.
 * Footprint filters: TO?218*, TO?247*.
 * @see http://www.mospec.com.tw/pdf/power/BD249.pdf
 * Keywords: Power NPN Transistor.
 */
export class BD249B extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD249B";
  override referencePrefix = "Q";
}

/**
 * 25A Ic, 115V Vce, Silicon Power NPN Transistors, SOT-93/TO247
 *
 * KiCad symbol: `Transistor_BJT:BD249C`. Reference prefix: `Q`.
 * Footprint filters: TO?218*, TO?247*.
 * @see http://www.mospec.com.tw/pdf/power/BD249.pdf
 * Keywords: Power NPN Transistor.
 */
export class BD249C extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD249C";
  override referencePrefix = "Q";
}

/**
 * 25A Ic, 55V Vce, Silicon Power PNP Transistors, SOT-93/TO247
 *
 * KiCad symbol: `Transistor_BJT:BD250`. Reference prefix: `Q`.
 * Footprint filters: TO?218*, TO?247*.
 * @see http://www.mospec.com.tw/pdf/power/BD249.pdf
 * Keywords: Power PNP Transistor.
 */
export class BD250 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD250";
  override referencePrefix = "Q";
}

/**
 * 25A Ic, 70V Vce, Silicon Power PNP Transistors, SOT-93/TO247
 *
 * KiCad symbol: `Transistor_BJT:BD250A`. Reference prefix: `Q`.
 * Footprint filters: TO?218*, TO?247*.
 * @see http://www.mospec.com.tw/pdf/power/BD249.pdf
 * Keywords: Power PNP Transistor.
 */
export class BD250A extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD250A";
  override referencePrefix = "Q";
}

/**
 * 25A Ic, 90V Vce, Silicon Power PNP Transistors, SOT-93/TO247
 *
 * KiCad symbol: `Transistor_BJT:BD250B`. Reference prefix: `Q`.
 * Footprint filters: TO?218*, TO?247*.
 * @see http://www.mospec.com.tw/pdf/power/BD249.pdf
 * Keywords: Power PNP Transistor.
 */
export class BD250B extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD250B";
  override referencePrefix = "Q";
}

/**
 * 25A Ic, 115V Vce, Silicon Power PNP Transistors, SOT-93/TO247
 *
 * KiCad symbol: `Transistor_BJT:BD250C`. Reference prefix: `Q`.
 * Footprint filters: TO?218*, TO?247*.
 * @see http://www.mospec.com.tw/pdf/power/BD249.pdf
 * Keywords: Power PNP Transistor.
 */
export class BD250C extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD250C";
  override referencePrefix = "Q";
}

/**
 * 4A Ic, 22V Vce, Power NPN Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BD433`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see http://www.cdil.com/datasheets/bd433_42.pdf
 * Keywords: Power NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BD433 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD433";
  override referencePrefix = "Q";
}

/**
 * 4A Ic, 22V Vce, Power PNP Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BD434`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see http://www.cdil.com/datasheets/bd433_42.pdf
 * Keywords: Power PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BD434 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD434";
  override referencePrefix = "Q";
}

/**
 * 4A Ic, 32V Vce, Power NPN Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BD435`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see http://www.cdil.com/datasheets/bd433_42.pdf
 * Keywords: Power NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BD435 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD435";
  override referencePrefix = "Q";
}

/**
 * 4A Ic, 32V Vce, Power PNP Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BD436`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see http://www.cdil.com/datasheets/bd433_42.pdf
 * Keywords: Power PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BD436 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD436";
  override referencePrefix = "Q";
}

/**
 * 4A Ic, 45V Vce, Power NPN Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BD437`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see http://www.cdil.com/datasheets/bd433_42.pdf
 * Keywords: Power NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BD437 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD437";
  override referencePrefix = "Q";
}

/**
 * 4A Ic, 45V Vce, Power PNP Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BD438`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see http://www.cdil.com/datasheets/bd433_42.pdf
 * Keywords: Power PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BD438 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD438";
  override referencePrefix = "Q";
}

/**
 * 4A Ic, 60V Vce, Power NPN Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BD439`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see http://www.cdil.com/datasheets/bd433_42.pdf
 * Keywords: Power NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BD439 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD439";
  override referencePrefix = "Q";
}

/**
 * 4A Ic, 60V Vce, Power PNP Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BD440`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see http://www.cdil.com/datasheets/bd433_42.pdf
 * Keywords: Power PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BD440 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD440";
  override referencePrefix = "Q";
}

/**
 * 4A Ic, 80V Vce, Power NPN Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BD441`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see http://www.cdil.com/datasheets/bd433_42.pdf
 * Keywords: Power NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BD441 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD441";
  override referencePrefix = "Q";
}

/**
 * 4A Ic, 80V Vce, Power PNP Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BD442`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see http://www.cdil.com/datasheets/bd433_42.pdf
 * Keywords: Power PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BD442 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD442";
  override referencePrefix = "Q";
}

/**
 * 15A, Silicon Power NPN Transistors, TO-220
 *
 * KiCad symbol: `Transistor_BJT:BD909`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.st.com/internet/com/TECHNICAL_RESOURCES/TECHNICAL_LITERATURE/DATASHEET/CD00001277.pdf
 * Keywords: Power NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BD909 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD909";
  override referencePrefix = "Q";
}

/**
 * 15A, Silicon Power PNP Transistors, TO-220
 *
 * KiCad symbol: `Transistor_BJT:BD910`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.st.com/internet/com/TECHNICAL_RESOURCES/TECHNICAL_LITERATURE/DATASHEET/CD00001277.pdf
 * Keywords: Power PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BD910 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD910";
  override referencePrefix = "Q";
}

/**
 * 15A, Silicon Power NPN Transistors, TO-220
 *
 * KiCad symbol: `Transistor_BJT:BD911`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.st.com/internet/com/TECHNICAL_RESOURCES/TECHNICAL_LITERATURE/DATASHEET/CD00001277.pdf
 * Keywords: Power NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BD911 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD911";
  override referencePrefix = "Q";
}

/**
 * BD910, 15A, Silicon Power PNP Transistors, TO-220
 *
 * KiCad symbol: `Transistor_BJT:BD912`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.st.com/internet/com/TECHNICAL_RESOURCES/TECHNICAL_LITERATURE/DATASHEET/CD00001277.pdf
 * Keywords: Power PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BD912 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BD912";
  override referencePrefix = "Q";
}

/**
 * 12A Ic, 45V Vce, Power Darlington NPN Transistor, TO-220
 *
 * KiCad symbol: `Transistor_BJT:BDW93`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.onsemi.com/pub/Collateral/BDW93C-D.pdf
 * Keywords: Darlington NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BDW93 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BDW93";
  override referencePrefix = "Q";
}

/**
 * 12A Ic, 60V Vce, Power Darlington NPN Transistor, TO-220
 *
 * KiCad symbol: `Transistor_BJT:BDW93A`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.onsemi.com/pub/Collateral/BDW93C-D.pdf
 * Keywords: Darlington NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BDW93A extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BDW93A";
  override referencePrefix = "Q";
}

/**
 * 12A Ic, 80V Vce, Power Darlington NPN Transistor, TO-220
 *
 * KiCad symbol: `Transistor_BJT:BDW93B`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.onsemi.com/pub/Collateral/BDW93C-D.pdf
 * Keywords: Darlington NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BDW93B extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BDW93B";
  override referencePrefix = "Q";
}

/**
 * 12A Ic, 100V Vce, Power Darlington NPN Transistor, TO-220
 *
 * KiCad symbol: `Transistor_BJT:BDW93C`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.onsemi.com/pub/Collateral/BDW93C-D.pdf
 * Keywords: Darlington NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BDW93C extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BDW93C";
  override referencePrefix = "Q";
}

/**
 * PNP Darlington transistor, base/collector/emitter
 *
 * KiCad symbol: `Transistor_BJT:Q_PNP_Darlington_BCE`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_PNP_Darlington_BCE extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_PNP_Darlington_BCE";
  override referencePrefix = "Q";
}

/**
 * 12A Ic, 45V Vce, Power Darlington PNP Transistor, TO-220
 *
 * KiCad symbol: `Transistor_BJT:BDW94`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.bourns.com/data/global/pdfs/bdw94.pdf
 * Keywords: Darlington PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BDW94 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BDW94";
  override referencePrefix = "Q";
}

/**
 * 12A Ic, 60V Vce, Power Darlington PNP Transistor, TO-220
 *
 * KiCad symbol: `Transistor_BJT:BDW94A`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.bourns.com/data/global/pdfs/bdw94.pdf
 * Keywords: Darlington PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BDW94A extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BDW94A";
  override referencePrefix = "Q";
}

/**
 * 12A Ic, 80V Vce, Power Darlington PNP Transistor, TO-220
 *
 * KiCad symbol: `Transistor_BJT:BDW94B`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.bourns.com/data/global/pdfs/bdw94.pdf
 * Keywords: Darlington PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BDW94B extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BDW94B";
  override referencePrefix = "Q";
}

/**
 * 12A Ic, 100V Vce, Power Darlington PNP Transistor, TO-220
 *
 * KiCad symbol: `Transistor_BJT:BDW94C`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.bourns.com/data/global/pdfs/bdw94.pdf
 * Keywords: Darlington PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BDW94C extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BDW94C";
  override referencePrefix = "Q";
}

/**
 * 50mA Ic, 25V Vce, NPN Radio Frequency Transistor, TO-220
 *
 * KiCad symbol: `Transistor_BJT:BF199`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see http://www.micropik.com/PDF/BF199.pdf
 * Keywords: RF NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BF199 extends Component.withPins({
  "C": "1",
  "E": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", E: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BF199";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 160V Vce, High Voltage NPN Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BF457`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see https://www.pcpaudio.com/pcpfiles/transistores/BF457-8-9.pdf
 * Keywords: NPN HV High Voltage Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BF457 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BF457";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 250V Vce, High Voltage NPN Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BF458`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see https://www.pcpaudio.com/pcpfiles/transistores/BF457-8-9.pdf
 * Keywords: NPN HV High Voltage Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BF458 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BF458";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 300V Vce, High Voltage NPN Transistor, TO-126
 *
 * KiCad symbol: `Transistor_BJT:BF459`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see https://www.pcpaudio.com/pcpfiles/transistores/BF457-8-9.pdf
 * Keywords: NPN HV High Voltage Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class BF459 extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BF459";
  override referencePrefix = "Q";
}

/**
 * 0.025A Ic, 15V Vce, 5GHz Wideband NPN Transistor, SOT-323
 *
 * KiCad symbol: `Transistor_BJT:BFR92`. Reference prefix: `Q`.
 * Footprint filters: SOT?323*.
 * @see https://assets.nexperia.com/documents/data-sheet/BFR92A_N.pdf
 * Keywords: RF 5GHz NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class BFR92 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BFR92";
  override referencePrefix = "Q";
}

/**
 * 0.025A Ic, 15V Vce, 5GHz Wideband PNP Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:BFT92`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://assets.nexperia.com/documents/data-sheet/BFT92_CNV.pdf
 * Keywords: RF 5GHz NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BFT92 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BFT92";
  override referencePrefix = "Q";
}

/**
 * 5A Ic, 400V Vce, Silicon Power NPN Transistors, TO-220
 *
 * KiCad symbol: `Transistor_BJT:BUT11`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.onsemi.com/pub/Collateral/BUT11A-D.pdf
 * Keywords: High Voltage Power NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BUT11 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BUT11";
  override referencePrefix = "Q";
}

/**
 * 5A Ic, 450V Vce, Silicon Power NPN Transistors, TO-220
 *
 * KiCad symbol: `Transistor_BJT:BUT11A`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.onsemi.com/pub/Collateral/BUT11A-D.pdf
 * Keywords: High Voltage Power NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BUT11A extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:BUT11A";
  override referencePrefix = "Q";
}

/**
 * Dual PNP transistor, 6 pin package
 *
 * KiCad symbol: `Transistor_BJT:Q_Dual_PNP_PNP_C1B1B2C2E2E1`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_Dual_PNP_PNP_C1B1B2C2E2E1 extends Component.withPins({
  "C1": "1",
  "B1": "2",
  "E1": "6",
  "B2": "3",
  "C2": "4",
  "E2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C1: "passive", B1: "input", E1: "passive", B2: "input", C2: "passive", E2: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_Dual_PNP_PNP_C1B1B2C2E2E1";
  override referencePrefix = "Q";
}

/**
 * Dual PNP transistor, 6 pin package
 *
 * KiCad symbol: `Transistor_BJT:DMMT5401`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/ds30437.pdf
 * Keywords: transistor PNP.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class DMMT5401 extends Component.withPins({
  "C1": "1",
  "B1": "2",
  "E1": "6",
  "B2": "3",
  "C2": "4",
  "E2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C1: "passive", B1: "input", E1: "passive", B2: "input", C2: "passive", E2: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DMMT5401";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 1k/NONE, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA113T`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA113T extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA113T";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 1k/10k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA113Z`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA113Z extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA113Z";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 10k/10k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA114E`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA114E extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA114E";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 0k/10k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA114G`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA114G extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA114G";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 10k/NONE, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA114T`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA114T extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA114T";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 10k/4.7k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA114W`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA114W extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA114W";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 10k/47k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA114Y`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA114Y extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA114Y";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 100k/100k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA115E`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA115E extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA115E";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 0k/100k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA115G`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA115G extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA115G";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 100k/NONE, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA115T`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA115T extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA115T";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 100k/10k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA115U`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA115U extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA115U";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 2k2/2k2, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA123E`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA123E extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA123E";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 2k2/47k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA123J`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA123J extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA123J";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 2k2/10k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA123Y`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA123Y extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA123Y";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 22k/22k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA124E`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA124E extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA124E";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 0k/22k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA124G`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA124G extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA124G";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 22k/NONE, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA124T`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA124T extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA124T";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 22k/47k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA124X`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA124X extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA124X";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 200k/NONE, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA125T`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA125T extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA125T";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 4k7/4k7, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA143E`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA143E extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA143E";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 4k7/NONE, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA143T`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA143T extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA143T";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 4k7/10k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA143X`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA143X extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA143X";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 4k7/22k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA143Y`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA143Y extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA143Y";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 4k7/47k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA143Z`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA143Z extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA143Z";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 47k/47k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA144E`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA144E extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA144E";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 0k/47k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA144G`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA144G extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA144G";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 47k/NONE, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA144T`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA144T extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA144T";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 47k/10k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA144V`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA144V extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA144V";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 47k/22k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA144W`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA144W extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA144W";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 2k7/1k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA1D3R`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA1D3R extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA1D3R";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 10k/47k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTA214Y`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTA214Y extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTA214Y";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 1k/1k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTB113E`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTB113E extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTB113E";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 1k/10k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTB113Z`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTB113Z extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTB113Z";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 10k/10k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTB114E`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTB114E extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTB114E";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 0k/10k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTB114G`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTB114G extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTB114G";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 10k/NONE, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTB114T`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTB114T extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTB114T";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 0k22/4k7, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTB122J`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTB122J extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTB122J";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 2k2/2k2, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTB123E`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTB123E extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTB123E";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 2k2/NONE, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTB123T`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTB123T extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTB123T";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 2k2/10k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTB123Y`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTB123Y extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTB123Y";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 3k3/10k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTB133H`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTB133H extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTB133H";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 4k7/NONE, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTB143T`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTB143T extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTB143T";
  override referencePrefix = "Q";
}

/**
 * Digital PNP Transistor, 6k8/NONE, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTB163T`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital PNP Transistor.
 */
export class DTB163T extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTB163T";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 1k/NONE, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC113T`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC113T extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC113T";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 1k/10k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC113Z`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC113Z extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC113Z";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 10k/10k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC114E`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC114E extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC114E";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 0k/10k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC114G`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC114G extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC114G";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 10k/NONE, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC114T`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC114T extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC114T";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 10k/4k7, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC114W`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC114W extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC114W";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 10k/47k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC114Y`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC114Y extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC114Y";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 100k/100k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC115E`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC115E extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC115E";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 0k/100k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC115G`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC115G extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC115G";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 100k/NONE, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC115T`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC115T extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC115T";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 100k/10k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC115U`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC115U extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC115U";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 2k2/2k2, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC123E`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC123E extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC123E";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 2k2/47k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC123J`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC123J extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC123J";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 2k2/10k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC123Y`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC123Y extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC123Y";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 22k/22k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC124E`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC124E extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC124E";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 0k/22k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC124G`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC124G extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC124G";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 22k/NONE, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC124T`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC124T extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC124T";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 22k/47k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC124X`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC124X extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC124X";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 200k/NONE, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC125T`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC125T extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC125T";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 4k7/4k7, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC143E`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC143E extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC143E";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 4k7/NONE, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC143T`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC143T extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC143T";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 4k7/10k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC143X`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC143X extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC143X";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 4k7/22k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC143Y`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC143Y extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC143Y";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 4k7/47k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC143Z`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC143Z extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC143Z";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 47k/47k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC144E`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC144E extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC144E";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 0k/47k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC144G`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC144G extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC144G";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 47k/NONE, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC144T`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC144T extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC144T";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 47k/10k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC144V`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC144V extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC144V";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 47k/22k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC144W`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC144W extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC144W";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 2k7/1k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC1D3R`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC1D3R extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC1D3R";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 10k/47k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTC214Y`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTC214Y extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTC214Y";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 1k/1k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTD113E`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTD113E extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTD113E";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 1k/10k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTD113Z`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTD113Z extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTD113Z";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 10k/10k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTD114E`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTD114E extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTD114E";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 0k/10k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTD114G`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTD114G extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTD114G";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 10k/NONE, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTD114T`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTD114T extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTD114T";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 0k22/4k7, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTD122J`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTD122J extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTD122J";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 2k2/2k2, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTD123E`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTD123E extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTD123E";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 2k2/NONE, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTD123T`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTD123T extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTD123T";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 2k2/10k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTD123Y`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTD123Y extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTD123Y";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 3k3/10k, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTD133H`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTD133H extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTD133H";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 4k7/NONE, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTD143T`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTD143T extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTD143T";
  override referencePrefix = "Q";
}

/**
 * Digital NPN Transistor, 6k8/NONE, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:DTD163T`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*, SC?59*.
 * Keywords: ROHM Digital NPN Transistor.
 */
export class DTD163T extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:DTD163T";
  override referencePrefix = "Q";
}

/**
 * Dual NPN bias resistor transistor without a base-emitter resistor, 6 pin package
 *
 * KiCad symbol: `Transistor_BJT:Q_Dual_NPN_NPN_BRT_No_R2_E1B1C2E2B2C1`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_Dual_NPN_NPN_BRT_No_R2_E1B1C2E2B2C1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_Dual_NPN_NPN_BRT_No_R2_E1B1C2E2B2C1";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 50V Vce, Dual NPN Input Resistor Transistors, SOT-563
 *
 * KiCad symbol: `Transistor_BJT:EMH3`. Reference prefix: `Q`.
 * Footprint filters: SOT?563*.
 * @see http://rohmfs.rohm.com/en/products/databook/datasheet/discrete/transistor/digital/emh3t2r-e.pdf
 * Keywords: Dual NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-563.
 */
export class EMH3 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:EMH3";
  override referencePrefix = "Q";
}

/**
 * 600mA IC, 40V Vce, Dual NPN/NPN Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:FFB2222A`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see https://www.onsemi.com/pub/Collateral/MMPQ2222A-D.pdf
 * Keywords: NPN/NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class FFB2222A extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:FFB2222A";
  override referencePrefix = "Q";
}

/**
 * 500mA IC, 30V Vce, Dual NPN/PNP Transistors, SC-70-6
 *
 * KiCad symbol: `Transistor_BJT:FFB2227A`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see http://www.onsemi.com/pub/Collateral/FMB2227A-D.PDF
 * Keywords: NPN/PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class FFB2227A extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:FFB2227A";
  override referencePrefix = "Q";
}

/**
 * 200mA IC, 40V Vce, Dual NPN/NPN Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:FFB3904`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see https://www.onsemi.com/pub/Collateral/MMPQ3904-D.pdf
 * Keywords: NPN/NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class FFB3904 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:FFB3904";
  override referencePrefix = "Q";
}

/**
 * 200mA IC, 40V Vce, Dual PNP/PNP Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:FFB3906`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see https://www.onsemi.com/pub/Collateral/MMPQ3906-D.pdf
 * Keywords: PNP/PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class FFB3906 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:FFB3906";
  override referencePrefix = "Q";
}

/**
 * 200mA IC, 40V Vce, Dual NPN/PNP Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:FFB3946`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see http://www.onsemi.com/pub/Collateral/FMB3946-D.pdf
 * Keywords: NPN/PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class FFB3946 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:FFB3946";
  override referencePrefix = "Q";
}

/**
 * 200mA IC, 160V Vce, Dual NPN/NPN Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:FFB5551`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see https://www.onsemi.com/pub/Collateral/FFB5551-D.PDF
 * Keywords: NPN/NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class FFB5551 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:FFB5551";
  override referencePrefix = "Q";
}

/**
 * Dual NPN/PNP transistor, 6 pin package
 *
 * KiCad symbol: `Transistor_BJT:Q_Dual_NPN_PNP_B1E2B2C2E1C1`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_Dual_NPN_PNP_B1E2B2C2E1C1 extends Component.withPins({
  "B1": "1",
  "E1": "5",
  "C1": "6",
  "E2": "2",
  "B2": "3",
  "C2": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B1: "input", E1: "passive", C1: "passive", E2: "passive", B2: "input", C2: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_Dual_NPN_PNP_B1E2B2C2E1C1";
  override referencePrefix = "Q";
}

/**
 * 500mA IC, 30V Vce, Dual NPN/PNP Transistors, SuperSOT-6
 *
 * KiCad symbol: `Transistor_BJT:FMB2227A`. Reference prefix: `Q`.
 * Footprint filters: SuperSOT*.
 * @see http://www.onsemi.com/pub/Collateral/FMB2227A-D.PDF
 * Keywords: NPN/PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SuperSOT-6.
 */
export class FMB2227A extends Component.withPins({
  "B1": "1",
  "E1": "5",
  "C1": "6",
  "E2": "2",
  "B2": "3",
  "C2": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B1: "input", E1: "passive", C1: "passive", E2: "passive", B2: "input", C2: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:FMB2227A";
  override referencePrefix = "Q";
}

/**
 * 200mA IC, 40V Vce, Dual NPN/PNP Transistors, SuperSOT-6
 *
 * KiCad symbol: `Transistor_BJT:FMB3946`. Reference prefix: `Q`.
 * Footprint filters: SuperSOT*.
 * @see http://www.onsemi.com/pub/Collateral/FMB3946-D.pdf
 * Keywords: NPN/PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SuperSOT-6.
 */
export class FMB3946 extends Component.withPins({
  "B1": "1",
  "E1": "5",
  "C1": "6",
  "E2": "2",
  "B2": "3",
  "C2": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B1: "input", E1: "passive", C1: "passive", E2: "passive", B2: "input", C2: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:FMB3946";
  override referencePrefix = "Q";
}

/**
 * Dual NPN bias resistor transistor without a base-emitter resistor, 6 pin package
 *
 * KiCad symbol: `Transistor_BJT:Q_Dual_NPN_NPN_BRT_No_R2_C1B2E2C2B1E1`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_Dual_NPN_NPN_BRT_No_R2_C1B2E2C2B1E1 extends Component.withPins({
  "C1": "1",
  "B1": "5",
  "E1": "6",
  "B2": "2",
  "E2": "3",
  "C2": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C1: "passive", B1: "input", E1: "passive", B2: "input", E2: "passive", C2: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_Dual_NPN_NPN_BRT_No_R2_C1B2E2C2B1E1";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 50V Vce, Dual NPN Input Resistor Transistors, SOT-457
 *
 * KiCad symbol: `Transistor_BJT:IMH3A`. Reference prefix: `Q`.
 * Footprint filters: ROHM*SOT?457*.
 * @see http://rohmfs.rohm.com/en/products/databook/datasheet/discrete/transistor/digital/emh3t2r-e.pdf
 * Keywords: Dual NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:ROHM_SOT-457_ClockwisePinNumbering.
 */
export class IMH3A extends Component.withPins({
  "C1": "1",
  "B1": "5",
  "E1": "6",
  "B2": "2",
  "E2": "3",
  "C2": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C1: "passive", B1: "input", E1: "passive", B2: "input", E2: "passive", C2: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:IMH3A";
  override referencePrefix = "Q";
}

/**
 * Epitaxial Planar NPN Transistor, SOT-89
 *
 * KiCad symbol: `Transistor_BJT:KTD1624`. Reference prefix: `Q`.
 * Footprint filters: SOT?89*.
 * @see http://www2.kec.co.kr/data/databook/pdf/KTD/Eng/KTD1624.pdf
 * Keywords: Switching NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-89-3.
 */
export class KTD1624 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:KTD1624";
  override referencePrefix = "Q";
}

/**
 * 20mA Ic, 40V Vce, Precision Dual Monolithic Low Noise, Low Offset Transistor, TO-78
 *
 * KiCad symbol: `Transistor_BJT:MAT02`. Reference prefix: `Q`.
 * Footprint filters: TO?78*.
 * @see http://www.elenota.pl/datasheet_download/93431/MAT02
 * Keywords: Precision Dual Monolithic Transistor Low Noise EOL.
 * Default footprint: Package_TO_SOT_THT:TO-78-6.
 */
export class MAT02 extends Component.withPins({
  "C_1": "1",
  "B_2": "2",
  "E_3": "3",
  "E_4": "4",
  "B_5": "5",
  "C_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C_1: "passive", B_2: "input", E_3: "passive", E_4: "passive", B_5: "input", C_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MAT02";
  override referencePrefix = "Q";
}

/**
 * 600mA IC, 40V Vce, Dual NPN/NPN Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MBT2222ADW1T1`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see http://www.onsemi.com/pub_link/Collateral/MBT2222ADW1T1-D.PDF
 * Keywords: NPN/NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MBT2222ADW1T1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MBT2222ADW1T1";
  override referencePrefix = "Q";
}

/**
 * 200mA IC, 40V Vce, Dual NPN/NPN Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MBT3904DW1`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see http://www.onsemi.com/pub_link/Collateral/MBT3904DW1T1-D.PDF
 * Keywords: NPN/NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MBT3904DW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MBT3904DW1";
  override referencePrefix = "Q";
}

/**
 * 200mA IC, 40V Vce, Dual PNP/PNP Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MBT3906DW1`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see http://www.onsemi.com/pub_link/Collateral/MBT3906DW1T1-D.PDF
 * Keywords: PNP/PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MBT3906DW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MBT3906DW1";
  override referencePrefix = "Q";
}

/**
 * 200mA IC, 40V Vce, Dual NPN/PNP Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MBT3946DW1T1`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see http://www.onsemi.com/pub_link/Collateral/MBT3946DW1T1-D.PDF
 * Keywords: NPN/PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MBT3946DW1T1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MBT3946DW1T1";
  override referencePrefix = "Q";
}

/**
 * -15A Ic, -60V Vce, Power PNP Transistor, TO-3
 *
 * KiCad symbol: `Transistor_BJT:MJ2955`. Reference prefix: `Q`.
 * Footprint filters: TO?3*.
 * @see http://www.onsemi.com/pub_link/Collateral/2N3055-D.PDF
 * Keywords: power PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-3.
 */
export class MJ2955 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MJ2955";
  override referencePrefix = "Q";
}

/**
 * 1.5A Ic, 400V Vce, Silicon Switching Power NPN Transistor, TO-225
 *
 * KiCad symbol: `Transistor_BJT:MJE13003`. Reference prefix: `Q`.
 * Footprint filters: TO?126*.
 * @see http://www.onsemi.com/pub_link/Collateral/MJE13003-D.PDF
 * Keywords: Switching Power High Voltage NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-126-3_Vertical.
 */
export class MJE13003 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MJE13003";
  override referencePrefix = "Q";
}

/**
 * 4A Ic, 400V Vce, Silicon Switching Power NPN Transistors, TO-220
 *
 * KiCad symbol: `Transistor_BJT:MJE13005G`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.onsemi.com/pub_link/Collateral/MJE13005-D.PDF
 * Keywords: Switching Power NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class MJE13005G extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MJE13005G";
  override referencePrefix = "Q";
}

/**
 * 8A Ic, 400V Vce, Silicon Switching Power NPN Transistors, TO-220
 *
 * KiCad symbol: `Transistor_BJT:MJE13007G`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.onsemi.com/pub_link/Collateral/MJE13007-D.PDF
 * Keywords: Switching Power NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class MJE13007G extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MJE13007G";
  override referencePrefix = "Q";
}

/**
 * 12A Ic, 400V Vce, Silicon Switching Power NPN Transistors, TO-220
 *
 * KiCad symbol: `Transistor_BJT:MJE13009G`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.onsemi.com/pub_link/Collateral/MJE13009-D.PDF
 * Keywords: Switching Power NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class MJE13009G extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MJE13009G";
  override referencePrefix = "Q";
}

/**
 * 600mA Ic, 40V Vce, NPN Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:MMBT2222A`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://assets.nexperia.com/documents/data-sheet/MMBT2222A.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MMBT2222A extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MMBT2222A";
  override referencePrefix = "Q";
}

/**
 * 0.2A Ic, 40V Vce, Small Signal NPN Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:MMBT3904`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.onsemi.com/pdf/datasheet/pzt3904-d.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MMBT3904 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MMBT3904";
  override referencePrefix = "Q";
}

/**
 * -0.2A Ic, -40V Vce, Small Signal PNP Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:MMBT3906`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.onsemi.com/pdf/datasheet/pzt3906-d.pdf
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MMBT3906 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MMBT3906";
  override referencePrefix = "Q";
}

/**
 * 0.6A Ic, 140V Vce, NPN Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:MMBT5550L`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see www.onsemi.com/pub/Collateral/MMBT5550LT1-D.PDF
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MMBT5550L extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MMBT5550L";
  override referencePrefix = "Q";
}

/**
 * 0.6A Ic, 160V Vce, NPN Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:MMBT5551L`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see www.onsemi.com/pub/Collateral/MMBT5550LT1-D.PDF
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MMBT5551L extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MMBT5551L";
  override referencePrefix = "Q";
}

/**
 * 0.5A Ic, 80V Vce, general purpose NPN
 *
 * KiCad symbol: `Transistor_BJT:MMBTA06`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://diotec.com/request/datasheet/mmbta06.pdf
 * Keywords: SMD.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MMBTA06 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MMBTA06";
  override referencePrefix = "Q";
}

/**
 * 0.5A Ic, 300V Vce, NPN High Voltage Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:MMBTA42`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.onsemi.com/pub/Collateral/MMBTA42LT1-D.PDF
 * Keywords: NPN High Voltage Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MMBTA42 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MMBTA42";
  override referencePrefix = "Q";
}

/**
 * 0.3A Ic, 400V Vce, NPN High Voltage Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:MMBTA44`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://diotec.com/request/datasheet/mmbta42.pdf
 * Keywords: SMD.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MMBTA44 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MMBTA44";
  override referencePrefix = "Q";
}

/**
 * 0.5A Ic, 80V Vce, general purpose PNP
 *
 * KiCad symbol: `Transistor_BJT:MMBTA56`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://diotec.com/request/datasheet/mmbta56.pdf
 * Keywords: SMD.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MMBTA56 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MMBTA56";
  override referencePrefix = "Q";
}

/**
 * 0.5A Ic, 300V Vce, PNP High Voltage Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:MMBTA92`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.onsemi.com/pub/Collateral/MMBTA92LT1-D.PDF
 * Keywords: PNP High Voltage Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MMBTA92 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MMBTA92";
  override referencePrefix = "Q";
}

/**
 * 0.3A Ic, 400V Vce, PNP High Voltage Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:MMBTA94`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://diotec.com/request/datasheet/mmbta92.pdf
 * Keywords: PNP.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MMBTA94 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MMBTA94";
  override referencePrefix = "Q";
}

/**
 * 600mA IC, 40V Vce, Dual NPN/NPN Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MMDT2222A`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see http://www.diodes.com/_files/datasheets/ds30125.pdf
 * Keywords: NPN/NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MMDT2222A extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MMDT2222A";
  override referencePrefix = "Q";
}

/**
 * 200mA IC, 40V Vce, Dual NPN/NPN Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MMDT3904`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see http://www.diodes.com/_files/datasheets/ds30088.pdf
 * Keywords: NPN/NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MMDT3904 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MMDT3904";
  override referencePrefix = "Q";
}

/**
 * 200mA IC, 40V Vce, Dual PNP/PNP Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MMDT3906`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see http://www.diodes.com/_files/datasheets/ds30124.pdf
 * Keywords: PNP/PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MMDT3906 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MMDT3906";
  override referencePrefix = "Q";
}

/**
 * 200mA IC, 40V Vce, Dual NPN/PNP Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MMDT3946`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see http://www.diodes.com/_files/datasheets/ds30123.pdf
 * Keywords: NPN/PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MMDT3946 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MMDT3946";
  override referencePrefix = "Q";
}

/**
 * 200mA IC, 160V Vce, Dual PNP/PNP Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MMDT5401`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see http://www.diodes.com/_files/datasheets/ds30169.pdf
 * Keywords: PNP/PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MMDT5401 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MMDT5401";
  override referencePrefix = "Q";
}

/**
 * 200mA IC, 160V Vce, Dual NPN/NPN Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MMDT5551`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see http://www.diodes.com/_files/datasheets/ds30172.pdf
 * Keywords: NPN/NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MMDT5551 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MMDT5551";
  override referencePrefix = "Q";
}

/**
 * Dual NPN transistor, 6 pin package
 *
 * KiCad symbol: `Transistor_BJT:Q_Dual_NPN_NPN_B1E2B2C2E1C1`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_Dual_NPN_NPN_B1E2B2C2E1C1 extends Component.withPins({
  "B1": "1",
  "E1": "5",
  "C1": "6",
  "E2": "2",
  "B2": "3",
  "C2": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B1: "input", E1: "passive", C1: "passive", E2: "passive", B2: "input", C2: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_Dual_NPN_NPN_B1E2B2C2E1C1";
  override referencePrefix = "Q";
}

/**
 * 500mA IC, 80V Vce, Dual NPN transistor, SC-74
 *
 * KiCad symbol: `Transistor_BJT:MMDTA06`. Reference prefix: `Q`.
 * Footprint filters: SC?74*.
 * @see https://www.diodes.com/assets/Datasheets/MMDTA06.pdf
 * Keywords: dual transistor NPN.
 * Default footprint: Package_TO_SOT_SMD:SC-74-6_1.55x2.9mm_P0.95mm.
 */
export class MMDTA06 extends Component.withPins({
  "B1": "1",
  "E1": "5",
  "C1": "6",
  "E2": "2",
  "B2": "3",
  "C2": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B1: "input", E1: "passive", C1: "passive", E2: "passive", B2: "input", C2: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MMDTA06";
  override referencePrefix = "Q";
}

/**
 * 0.5A Ic, 300V Vce, NPN High Voltage Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:MPSA42`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see http://www.onsemi.com/pub_link/Collateral/MPSA42-D.PDF
 * Keywords: NPN High Voltage Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class MPSA42 extends Component.withPins({
  "E": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", B: "input", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MPSA42";
  override referencePrefix = "Q";
}

/**
 * 0.5A Ic, 300V Vce, PNP High Voltage Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:MPSA92`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see http://www.onsemi.com/pub_link/Collateral/MPSA92-D.PDF
 * Keywords: PNP High Voltage Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class MPSA92 extends Component.withPins({
  "E": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", B: "input", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MPSA92";
  override referencePrefix = "Q";
}

/**
 * Dual PNP bias resistor transistor, 6 pin package
 *
 * KiCad symbol: `Transistor_BJT:Q_Dual_PNP_PNP_BRT_E1B1C2E2B2C1`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_Dual_PNP_PNP_BRT_E1B1C2E2B2C1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_Dual_PNP_PNP_BRT_E1B1C2E2B2C1";
  override referencePrefix = "Q";
}

/**
 * Dual PNP Bias Resistor Transistors, Ic 100mA, Vce 50V, Vin(fwd) 40V, R1 = 10kohms, R2 = 10kohms, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MUN5111DW1`. Reference prefix: `Q`.
 * Footprint filters: SOT*363*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/dta114ed-d.pdf
 * Keywords: BRT Digital Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MUN5111DW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MUN5111DW1";
  override referencePrefix = "Q";
}

/**
 * Dual PNP Bias Resistor Transistors, Ic 100mA, Vce 50V, Vin(fwd) 40V, R1 = 22kohms, R2 = 22kohms, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MUN5112DW1`. Reference prefix: `Q`.
 * Footprint filters: SOT*363*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/dta124ed-d.pdf
 * Keywords: BRT Digital Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MUN5112DW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MUN5112DW1";
  override referencePrefix = "Q";
}

/**
 * Dual PNP Bias Resistor Transistors, Ic 100mA, Vce 50V, Vin(fwd) 40V, R1 = 47kohms, R2 = 47kohms, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MUN5113DW1`. Reference prefix: `Q`.
 * Footprint filters: SOT*363*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/dta144ed-d.pdf
 * Keywords: BRT Digital Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MUN5113DW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MUN5113DW1";
  override referencePrefix = "Q";
}

/**
 * Dual PNP Bias Resistor Transistors, Ic 100mA, Vce 50V, Vin(fwd) 40V, R1 = 10kohms, R2 = 47kohms, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MUN5114DW1`. Reference prefix: `Q`.
 * Footprint filters: SOT*363*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/dta114yd-d.pdf
 * Keywords: BRT Digital Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MUN5114DW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MUN5114DW1";
  override referencePrefix = "Q";
}

/**
 * Dual NPN bias resistor transistor, 6 pin package
 *
 * KiCad symbol: `Transistor_BJT:Q_Dual_NPN_NPN_BRT_E1B1C2E2B2C1`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_Dual_NPN_NPN_BRT_E1B1C2E2B2C1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_Dual_NPN_NPN_BRT_E1B1C2E2B2C1";
  override referencePrefix = "Q";
}

/**
 * Dual NPN Bias Resistor Transistors, Ic 100mA, Vce 50V, Vin(fwd) 40V, R1 = 10kohms, R2 = 10kohms, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MUN5211DW1`. Reference prefix: `Q`.
 * Footprint filters: SOT*363*.
 * @see http://www.onsemi.com/pub/Collateral/DTC114ED-D.PDF
 * Keywords: BRT Digital Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MUN5211DW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MUN5211DW1";
  override referencePrefix = "Q";
}

/**
 * Dual NPN Bias Resistor Transistors, Ic 100mA, Vce 50V, Vin(fwd) 40V, R1 = 22kohms, R2 = 22kohms, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MUN5212DW1`. Reference prefix: `Q`.
 * Footprint filters: SOT*363*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/dtc124ed-d.pdf
 * Keywords: BRT Digital Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MUN5212DW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MUN5212DW1";
  override referencePrefix = "Q";
}

/**
 * Dual NPN Bias Resistor Transistors, Ic 100mA, Vce 50V, Vin(fwd) 40V, R1 = 47kohms, R2 = 47kohms, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MUN5213DW1`. Reference prefix: `Q`.
 * Footprint filters: SOT*363*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/dtc144ed-d.pdf
 * Keywords: BRT Digital Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MUN5213DW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MUN5213DW1";
  override referencePrefix = "Q";
}

/**
 * Dual NPN Bias Resistor Transistors, Ic 100mA, Vce 50V, Vin(fwd) 40V, R1 = 10kohms, R2 = 47kohms, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MUN5214DW1`. Reference prefix: `Q`.
 * Footprint filters: SOT*363*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/dtc114yd-d.pdf
 * Keywords: BRT Digital Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MUN5214DW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MUN5214DW1";
  override referencePrefix = "Q";
}

/**
 * Dual NPN/PNP bias resistor transistor, 6 pin package
 *
 * KiCad symbol: `Transistor_BJT:Q_Dual_NPN_PNP_BRT_E1B1C2E2B2C1`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_Dual_NPN_PNP_BRT_E1B1C2E2B2C1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_Dual_NPN_PNP_BRT_E1B1C2E2B2C1";
  override referencePrefix = "Q";
}

/**
 * Complementary Bias Resistor Transistors, Ic 100mA, Vce 50V, Vin(fwd) 40V, R1 = 10kohms, R2 = 10kohms, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MUN5311DW1`. Reference prefix: `Q`.
 * Footprint filters: SOT*363*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/dtc114ep-d.pdf
 * Keywords: BRT Digital Transistor NPN PNP.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MUN5311DW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MUN5311DW1";
  override referencePrefix = "Q";
}

/**
 * Complementary Bias Resistor Transistors, Ic 100mA, Vce 50V, Vin(fwd) 40V, R1 = 22kohms, R2 = 22kohms, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MUN5312DW1`. Reference prefix: `Q`.
 * Footprint filters: SOT*363*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/dtc124ep-d.pdf
 * Keywords: BRT Digital Transistor NPN PNP.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MUN5312DW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MUN5312DW1";
  override referencePrefix = "Q";
}

/**
 * Complementary Bias Resistor Transistors, Ic 100mA, Vce 50V, Vin(fwd) 40V, R1 = 47kohms, R2 = 47kohms, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MUN5313DW1`. Reference prefix: `Q`.
 * Footprint filters: SOT*363*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/dtc144ep-d.pdf
 * Keywords: BRT Digital Transistor NPN PNP.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MUN5313DW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MUN5313DW1";
  override referencePrefix = "Q";
}

/**
 * Complementary Bias Resistor Transistors, Ic 100mA, Vce 50V, Vin(fwd) 40V, R1 = 10kohms, R2 = 47kohms, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MUN5314DW1`. Reference prefix: `Q`.
 * Footprint filters: SOT*363*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/dtc114yp-d.pdf
 * Keywords: BRT Digital Transistor NPN PNP.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MUN5314DW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MUN5314DW1";
  override referencePrefix = "Q";
}

/**
 * Complementary Bias Resistor Transistors, Ic 100mA, Vce 50V, Vin(fwd) 10V, R1 = 1kohms, R2 = 1kohms, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MUN5330DW1`. Reference prefix: `Q`.
 * Footprint filters: SOT*363*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/dtc113ep-d.pdf
 * Keywords: BRT Digital Transistor NPN PNP.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MUN5330DW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MUN5330DW1";
  override referencePrefix = "Q";
}

/**
 * Complementary Bias Resistor Transistors, Ic 100mA, Vce 50V, Vin(fwd) 12V, R1 = 2.2kohms, R2 = 2.2kohms, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MUN5331DW1`. Reference prefix: `Q`.
 * Footprint filters: SOT*363*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/dtc123ep-d.pdf
 * Keywords: BRT Digital Transistor NPN PNP.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MUN5331DW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MUN5331DW1";
  override referencePrefix = "Q";
}

/**
 * Complementary Bias Resistor Transistors, Ic 100mA, Vce 50V, Vin(fwd) 30V, R1 = 4.7kohms, R2 = 4.7kohms, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MUN5332DW1`. Reference prefix: `Q`.
 * Footprint filters: SOT*363*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/dtc143ep-d.pdf
 * Keywords: BRT Digital Transistor NPN PNP.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MUN5332DW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MUN5332DW1";
  override referencePrefix = "Q";
}

/**
 * Complementary Bias Resistor Transistors, Ic 100mA, Vce 50V, Vin(fwd) 30V, R1 = 4.7kohms, R2 = 47kohms, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MUN5333DW1`. Reference prefix: `Q`.
 * Footprint filters: SOT*363*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/dtc143zp-d.pdf
 * Keywords: BRT Digital Transistor NPN PNP.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MUN5333DW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MUN5333DW1";
  override referencePrefix = "Q";
}

/**
 * Complementary Bias Resistor Transistors, Ic 100mA, Vce 50V, Vin(fwd) 40V, R1 = 22kohms, R2 = 47kohms, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MUN5334DW1`. Reference prefix: `Q`.
 * Footprint filters: SOT*363*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/dtc124xp-d.pdf
 * Keywords: BRT Digital Transistor NPN PNP.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MUN5334DW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MUN5334DW1";
  override referencePrefix = "Q";
}

/**
 * Complementary Bias Resistor Transistors, Ic 100mA, Vce 50V, Vin(fwd) 12V, R1 = 2.2kohms, R2 = 47kohms, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MUN5335DW1`. Reference prefix: `Q`.
 * Footprint filters: SOT*363*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/dtc123jp-d.pdf
 * Keywords: BRT Digital Transistor NPN PNP.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MUN5335DW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MUN5335DW1";
  override referencePrefix = "Q";
}

/**
 * Complementary Bias Resistor Transistors, Ic 100mA, Vce 50V, Vin(fwd) 40V, R1 = 100kohms, R2 = 100kohms, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:MUN5336DW1`. Reference prefix: `Q`.
 * Footprint filters: SOT*363*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/dtc115ep-d.pdf
 * Keywords: BRT Digital Transistor NPN PNP.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class MUN5336DW1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:MUN5336DW1";
  override referencePrefix = "Q";
}

/**
 * -5.7A Ic, -12V Vce, Small Signal PNP Transistor, SOT-223
 *
 * KiCad symbol: `Transistor_BJT:PBSS301PZ`. Reference prefix: `Q`.
 * Footprint filters: SOT?223*.
 * @see https://assets.nexperia.com/documents/data-sheet/PBSS301PZ.pdf
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-223-3_TabPin2.
 */
export class PBSS301PZ extends Component.withPins({
  "B": "1",
  "C_2": "2",
  "E": "3",
  "C_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C_2: "passive", E: "passive", C_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:PBSS301PZ";
  override referencePrefix = "Q";
}

/**
 * 600mA Ic, 40V Vce, NPN Transistor, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:PMBT2222A`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://assets.nexperia.com/documents/data-sheet/PMBT2222A.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class PMBT2222A extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:PMBT2222A";
  override referencePrefix = "Q";
}

/**
 * 600mA IC, 40V Vce, Dual NPN/NPN Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:PMBT2222AYS`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see https://assets.nexperia.com/documents/data-sheet/PMBT2222AYS.pdf
 * Keywords: NPN/NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class PMBT2222AYS extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:PMBT2222AYS";
  override referencePrefix = "Q";
}

/**
 * 200mA IC, 40V Vce, Dual NPN/NPN Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:PMBT3904YS`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see https://assets.nexperia.com/documents/data-sheet/PMBT3904YS.pdf
 * Keywords: NPN/NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class PMBT3904YS extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:PMBT3904YS";
  override referencePrefix = "Q";
}

/**
 * 200mA IC, 40V Vce, Dual PNP/PNP Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:PMBT3906YS`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see https://assets.nexperia.com/documents/data-sheet/PMBT3906YS.pdf
 * Keywords: PNP/PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class PMBT3906YS extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:PMBT3906YS";
  override referencePrefix = "Q";
}

/**
 * 200mA IC, 40V Vce, Dual NPN/PNP Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:PMBT3946YPN`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see https://assets.nexperia.com/documents/data-sheet/PMBT3946YPN.pdf
 * Keywords: NPN/PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class PMBT3946YPN extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:PMBT3946YPN";
  override referencePrefix = "Q";
}

/**
 * 1A Ic, 40V Vce, NPN Transistor, General Purpose Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:PN2222A`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://www.onsemi.com/pub/Collateral/PN2222-D.PDF
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class PN2222A extends Component.withPins({
  "E": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", B: "input", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:PN2222A";
  override referencePrefix = "Q";
}

/**
 * 100mA IC, 40V Vce, Dual PNP/PNP Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:PUMT1`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see https://assets.nexperia.com/documents/data-sheet/PUMT1.pdf
 * Keywords: PNP/PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class PUMT1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:PUMT1";
  override referencePrefix = "Q";
}

/**
 * 100mA IC, 40V Vce, Dual NPN/NPN Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:PUMX1`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see https://assets.nexperia.com/documents/data-sheet/PUMX1.pdf
 * Keywords: NPN/NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class PUMX1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:PUMX1";
  override referencePrefix = "Q";
}

/**
 * 1A Ic, 40V Vce, NPN Transistor, General Purpose Transistor, SOT-223
 *
 * KiCad symbol: `Transistor_BJT:PZT2222A`. Reference prefix: `Q`.
 * Footprint filters: SOT?223*.
 * @see https://www.onsemi.com/pub/Collateral/PN2222-D.PDF
 * Keywords: NPN General Puprose Transistor SMD.
 * Default footprint: Package_TO_SOT_SMD:SOT-223-3_TabPin2.
 */
export class PZT2222A extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:PZT2222A";
  override referencePrefix = "Q";
}

/**
 * 0.2A Ic, 40V Vce, Small Signal NPN Transistor, SOT-223
 *
 * KiCad symbol: `Transistor_BJT:PZT3904`. Reference prefix: `Q`.
 * Footprint filters: SOT?223*.
 * @see https://www.onsemi.com/pdf/datasheet/pzt3904-d.pdf
 * Keywords: NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-223-3_TabPin2.
 */
export class PZT3904 extends Component.withPins({
  "B": "1",
  "C_2": "2",
  "E": "3",
  "C_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C_2: "passive", E: "passive", C_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:PZT3904";
  override referencePrefix = "Q";
}

/**
 * -0.2A Ic, -40V Vce, Small Signal PNP Transistor, SOT-223
 *
 * KiCad symbol: `Transistor_BJT:PZT3906`. Reference prefix: `Q`.
 * Footprint filters: SOT?223*.
 * @see https://www.onsemi.com/pdf/datasheet/pzt3906-d.pdf
 * Keywords: PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-223-3_TabPin2.
 */
export class PZT3906 extends Component.withPins({
  "B": "1",
  "C_2": "2",
  "E": "3",
  "C_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C_2: "passive", E: "passive", C_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:PZT3906";
  override referencePrefix = "Q";
}

/**
 * 0.5A Ic, 300V Vce, NPN High Voltage Transistor, SOT-223
 *
 * KiCad symbol: `Transistor_BJT:PZTA42`. Reference prefix: `Q`.
 * Footprint filters: SOT?223*.
 * @see https://www.onsemi.com/pub/Collateral/PZTA42T1-D.PDF
 * Keywords: NPN High Voltage Transistor SMD.
 * Default footprint: Package_TO_SOT_SMD:SOT-223-3_TabPin2.
 */
export class PZTA42 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:PZTA42";
  override referencePrefix = "Q";
}

/**
 * 0.5A Ic, 300V Vce, PNP High Voltage Transistor, SOT-223
 *
 * KiCad symbol: `Transistor_BJT:PZTA92`. Reference prefix: `Q`.
 * Footprint filters: SOT?223*.
 * @see https://www.onsemi.com/pub/Collateral/PZTA92T1-D.PDF
 * Keywords: PNP High Voltage Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-223-3_TabPin2.
 */
export class PZTA92 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:PZTA92";
  override referencePrefix = "Q";
}

/**
 * Dual NPN transistor, 6 pin package
 *
 * KiCad symbol: `Transistor_BJT:Q_Dual_NPN_NPN_C1E1C2E2B2B1`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_Dual_NPN_NPN_C1E1C2E2B2B1 extends Component.withPins({
  "C1": "1",
  "E1": "2",
  "B1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C1: "passive", E1: "passive", B1: "input", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_Dual_NPN_NPN_C1E1C2E2B2B1";
  override referencePrefix = "Q";
}

/**
 * Dual PNP/NPN bias resistor transistor, 6 pin package
 *
 * KiCad symbol: `Transistor_BJT:Q_Dual_PNP_NPN_BRT_E1B1C2E2B2C1`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_Dual_PNP_NPN_BRT_E1B1C2E2B2C1 extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_Dual_PNP_NPN_BRT_E1B1C2E2B2C1";
  override referencePrefix = "Q";
}

/**
 * Dual PNP transistor, 6 pin package
 *
 * KiCad symbol: `Transistor_BJT:Q_Dual_PNP_PNP_C1E1C2E2B2B1`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_Dual_PNP_PNP_C1E1C2E2B2B1 extends Component.withPins({
  "C1": "1",
  "E1": "2",
  "B1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C1: "passive", E1: "passive", B1: "input", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_Dual_PNP_PNP_C1E1C2E2B2B1";
  override referencePrefix = "Q";
}

/**
 * NPN bias resistor transistor, base/emitter/collector
 *
 * KiCad symbol: `Transistor_BJT:Q_NPN_BRT_BEC`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_NPN_BRT_BEC extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_NPN_BRT_BEC";
  override referencePrefix = "Q";
}

/**
 * NPN transistor, emitter/collector/base
 *
 * KiCad symbol: `Transistor_BJT:Q_NPN_BRT_ECB`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_NPN_BRT_ECB extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_NPN_BRT_ECB";
  override referencePrefix = "Q";
}

/**
 * NPN Darlington transistor, base/collector/emitter, collector connected to mounting plane
 *
 * KiCad symbol: `Transistor_BJT:Q_NPN_Darlington_BCEC`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_NPN_Darlington_BCEC extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
  "C2": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", C2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_NPN_Darlington_BCEC";
  override referencePrefix = "Q";
}

/**
 * NPN Darlington transistor, base/emitter/collector
 *
 * KiCad symbol: `Transistor_BJT:Q_NPN_Darlington_BEC`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_NPN_Darlington_BEC extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_NPN_Darlington_BEC";
  override referencePrefix = "Q";
}

/**
 * NPN Darlington transistor, collector/emitter/base
 *
 * KiCad symbol: `Transistor_BJT:Q_NPN_Darlington_CEB`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_NPN_Darlington_CEB extends Component.withPins({
  "C": "1",
  "E": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", E: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_NPN_Darlington_CEB";
  override referencePrefix = "Q";
}

/**
 * NPN Darlington transistor, emitter/base/collector
 *
 * KiCad symbol: `Transistor_BJT:Q_NPN_Darlington_EBC`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_NPN_Darlington_EBC extends Component.withPins({
  "E": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", B: "input", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_NPN_Darlington_EBC";
  override referencePrefix = "Q";
}

/**
 * NPN Darlington transistor, emitter/collector/base
 *
 * KiCad symbol: `Transistor_BJT:Q_NPN_Darlington_ECB`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_NPN_Darlington_ECB extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_NPN_Darlington_ECB";
  override referencePrefix = "Q";
}

/**
 * NPN Darlington transistor, emitter/collector/base, collector connected to mounting plane
 *
 * KiCad symbol: `Transistor_BJT:Q_NPN_Darlington_ECBC`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_NPN_Darlington_ECBC extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
  "C2": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", C2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_NPN_Darlington_ECBC";
  override referencePrefix = "Q";
}

/**
 * NPN transistor, emitter/collector/base, collector connected to mounting plane
 *
 * KiCad symbol: `Transistor_BJT:Q_NPN_ECBC`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_NPN_ECBC extends Component.withPins({
  "E": "1",
  "C_2": "2",
  "B": "3",
  "C_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C_2: "passive", B: "input", C_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_NPN_ECBC";
  override referencePrefix = "Q";
}

/**
 * PNP transistor, all/cathodes/are/beautiful
 *
 * KiCad symbol: `Transistor_BJT:Q_PNP_ACAB`. Reference prefix: `Q`.
 * Keywords: BJT ACAB.
 */
export class Q_PNP_ACAB extends Component.withPins({
  "A_1": "1",
  "C": "2",
  "A_3": "3",
  "B": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A_1: "passive", C: "passive", A_3: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_PNP_ACAB";
  override referencePrefix = "Q";
}

/**
 * PNP bias resistor transistor, base/emitter/collector
 *
 * KiCad symbol: `Transistor_BJT:Q_PNP_BRT_BEC`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_PNP_BRT_BEC extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_PNP_BRT_BEC";
  override referencePrefix = "Q";
}

/**
 * PNP bias resistor transistor, emitter/collector/base
 *
 * KiCad symbol: `Transistor_BJT:Q_PNP_BRT_ECB`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_PNP_BRT_ECB extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_PNP_BRT_ECB";
  override referencePrefix = "Q";
}

/**
 * PNP transistor, collector/emitter/base
 *
 * KiCad symbol: `Transistor_BJT:Q_PNP_CEB`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_PNP_CEB extends Component.withPins({
  "C": "1",
  "E": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", E: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_PNP_CEB";
  override referencePrefix = "Q";
}

/**
 * PNP Darlington transistor, base/collector/emitter, collector connected to mounting plane
 *
 * KiCad symbol: `Transistor_BJT:Q_PNP_Darlington_BCEC`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_PNP_Darlington_BCEC extends Component.withPins({
  "B": "1",
  "C_2": "2",
  "E": "3",
  "C_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C_2: "passive", E: "passive", C_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_PNP_Darlington_BCEC";
  override referencePrefix = "Q";
}

/**
 * PNP Darlington transistor, base/emitter/collector
 *
 * KiCad symbol: `Transistor_BJT:Q_PNP_Darlington_BEC`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_PNP_Darlington_BEC extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_PNP_Darlington_BEC";
  override referencePrefix = "Q";
}

/**
 * PNP Darlington transistor, collector/emitter/base
 *
 * KiCad symbol: `Transistor_BJT:Q_PNP_Darlington_CEB`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_PNP_Darlington_CEB extends Component.withPins({
  "C": "1",
  "E": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "passive", E: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_PNP_Darlington_CEB";
  override referencePrefix = "Q";
}

/**
 * PNP Darlington transistor, emitter/base/collector
 *
 * KiCad symbol: `Transistor_BJT:Q_PNP_Darlington_EBC`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_PNP_Darlington_EBC extends Component.withPins({
  "E": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", B: "input", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_PNP_Darlington_EBC";
  override referencePrefix = "Q";
}

/**
 * PNP Darlington transistor, emitter/collector/base
 *
 * KiCad symbol: `Transistor_BJT:Q_PNP_Darlington_ECB`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_PNP_Darlington_ECB extends Component.withPins({
  "E": "1",
  "C": "2",
  "B": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C: "passive", B: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_PNP_Darlington_ECB";
  override referencePrefix = "Q";
}

/**
 * PNP Darlington transistor, emitter/collector/base, collector connected to mounting plane
 *
 * KiCad symbol: `Transistor_BJT:Q_PNP_Darlington_ECBC`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_PNP_Darlington_ECBC extends Component.withPins({
  "E": "1",
  "C_2": "2",
  "B": "3",
  "C_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C_2: "passive", B: "input", C_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_PNP_Darlington_ECBC";
  override referencePrefix = "Q";
}

/**
 * PNP transistor, emitter/collector/base, collector connected to mounting plane
 *
 * KiCad symbol: `Transistor_BJT:Q_PNP_ECBC`. Reference prefix: `Q`.
 * Keywords: BJT.
 */
export class Q_PNP_ECBC extends Component.withPins({
  "E": "1",
  "C_2": "2",
  "B": "3",
  "C_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", C_2: "passive", B: "input", C_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:Q_PNP_ECBC";
  override referencePrefix = "Q";
}

/**
 * 0.7A Ic, 20V Vce, Low Voltage High Current NPN Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:S8050`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see http://www.unisonic.com.tw/datasheet/S8050.pdf
 * Keywords: S8050 NPN Low Voltage High Current Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class S8050 extends Component.withPins({
  "E": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", B: "input", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:S8050";
  override referencePrefix = "Q";
}

/**
 * 0.7A Ic, 20V Vce, Low Voltage High Current PNP Transistor, TO-92
 *
 * KiCad symbol: `Transistor_BJT:S8550`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see http://www.unisonic.com.tw/datasheet/S8550.pdf
 * Keywords: S8550 PNP Low Voltage High Current Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class S8550 extends Component.withPins({
  "E": "1",
  "B": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E: "passive", B: "input", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:S8550";
  override referencePrefix = "Q";
}

/**
 * General Purpose NPN Transistor, 1.5A Ic, 25V Vce, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:SS8050`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.secosgmbh.com/datasheet/products/SSMPTransistor/SOT-23/SS8050.pdf
 * Keywords: SS8050 NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class SS8050 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:SS8050";
  override referencePrefix = "Q";
}

/**
 * General Purpose PNP Transistor, 1.5A Ic, 25V Vce, SOT-23
 *
 * KiCad symbol: `Transistor_BJT:SS8550`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.secosgmbh.com/datasheet/products/SSMPTransistor/SOT-23/SS8550.pdf
 * Keywords: SS8550 PNP Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class SS8550 extends Component.withPins({
  "B": "1",
  "E": "2",
  "C": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", E: "passive", C: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:SS8550";
  override referencePrefix = "Q";
}

/**
 * Audio Dual Matched NPN transistor, DIP-8/SOIC-8
 *
 * KiCad symbol: `Transistor_BJT:SSM2210`. Reference prefix: `Q`.
 * Footprint filters: SOIC*8*3.9x4.9mm*P1.27mm*, DIP*8*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/obsolete-data-sheets/SSM2210.pdf
 * Keywords: audio npn dual.
 */
export class SSM2210 extends Component.withPins({
  "C1": "1",
  "B1": "2",
  "E1": "3",
  "E2": "6",
  "B2": "7",
  "C2": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C1: "passive", B1: "input", E1: "passive", E2: "passive", B2: "input", C2: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:SSM2210";
  override referencePrefix = "Q";
}

/**
 * Audio Dual Matched PNP transistor, DIP-8/SOIC-8
 *
 * KiCad symbol: `Transistor_BJT:SSM2220`. Reference prefix: `Q`.
 * Footprint filters: SOIC*8*3.9x4.9mm*P1.27mm*, DIP*8*W7.62mm*.
 * @see https://www.analog.com/media/en/technical-documentation/data-sheets/SSM2220.pdf
 * Keywords: audio pnp dual.
 */
export class SSM2220 extends Component.withPins({
  "C1": "1",
  "B1": "2",
  "E1": "3",
  "E2": "6",
  "B2": "7",
  "C2": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C1: "passive", B1: "input", E1: "passive", E2: "passive", B2: "input", C2: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:SSM2220";
  override referencePrefix = "Q";
}

/**
 * 5A Ic, 60V Vce, Silicon Darlington Power NPN Transistor, TO-220
 *
 * KiCad symbol: `Transistor_BJT:TIP120`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.onsemi.com/pub/Collateral/TIP120-D.PDF
 * Keywords: Darlington Power NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class TIP120 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:TIP120";
  override referencePrefix = "Q";
}

/**
 * 5A Ic, 80V Vce, Silicon Darlington Power NPN Transistor, TO-220
 *
 * KiCad symbol: `Transistor_BJT:TIP121`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.onsemi.com/pub/Collateral/TIP120-D.PDF
 * Keywords: Darlington Power NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class TIP121 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:TIP121";
  override referencePrefix = "Q";
}

/**
 * 5A Ic, 100V Vce, Silicon Darlington Power NPN Transistor, TO-220
 *
 * KiCad symbol: `Transistor_BJT:TIP122`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.onsemi.com/pub/Collateral/TIP120-D.PDF
 * Keywords: Darlington Power NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class TIP122 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:TIP122";
  override referencePrefix = "Q";
}

/**
 * 5A Ic, 60V Vce, Silicon Darlington Power PNP Transistor, TO-220
 *
 * KiCad symbol: `Transistor_BJT:TIP125`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.onsemi.com/pub/Collateral/TIP120-D.PDF
 * Keywords: Darlington Power PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class TIP125 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:TIP125";
  override referencePrefix = "Q";
}

/**
 * 5A Ic, 80V Vce, Silicon Darlington Power PNP Transistor, TO-220
 *
 * KiCad symbol: `Transistor_BJT:TIP126`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.onsemi.com/pub/Collateral/TIP120-D.PDF
 * Keywords: Darlington Power PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class TIP126 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:TIP126";
  override referencePrefix = "Q";
}

/**
 * 5A Ic, 100V Vce, Silicon Darlington Power PNP Transistor, TO-220
 *
 * KiCad symbol: `Transistor_BJT:TIP127`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.onsemi.com/pub/Collateral/TIP120-D.PDF
 * Keywords: Darlington Power PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class TIP127 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:TIP127";
  override referencePrefix = "Q";
}

/**
 * -15A Ic, -60V Vce, Power PNP Transistor, TO-218
 *
 * KiCad symbol: `Transistor_BJT:TIP2955`. Reference prefix: `Q`.
 * Footprint filters: TO?218*.
 * @see http://www.onsemi.com/pub_link/Collateral/TIP3055-D.PDF
 * Keywords: power PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-218-3_Vertical.
 */
export class TIP2955 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:TIP2955";
  override referencePrefix = "Q";
}

/**
 * -15A Ic, -60V Vce, Power PNP Transistor, TO-247
 *
 * KiCad symbol: `Transistor_BJT:TIP2955G`. Reference prefix: `Q`.
 * Footprint filters: TO?247*.
 * @see http://www.onsemi.com/pub_link/Collateral/TIP3055-D.PDF
 * Keywords: power PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-247-3_Vertical.
 */
export class TIP2955G extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:TIP2955G";
  override referencePrefix = "Q";
}

/**
 * 15A Ic, 60V Vce, Power NPN Transistor, TO-218
 *
 * KiCad symbol: `Transistor_BJT:TIP3055`. Reference prefix: `Q`.
 * Footprint filters: TO?218*.
 * @see http://www.onsemi.com/pub_link/Collateral/TIP3055-D.PDF
 * Keywords: power NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-218-3_Vertical.
 */
export class TIP3055 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:TIP3055";
  override referencePrefix = "Q";
}

/**
 * 15A Ic, 60V Vce, Power NPN Transistor, TO-247
 *
 * KiCad symbol: `Transistor_BJT:TIP3055G`. Reference prefix: `Q`.
 * Footprint filters: TO?247*.
 * @see http://www.onsemi.com/pub_link/Collateral/TIP3055-D.PDF
 * Keywords: power NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-247-3_Vertical.
 */
export class TIP3055G extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:TIP3055G";
  override referencePrefix = "Q";
}

/**
 * 6A Ic, 40V Vce, Power NPN Transistor, TO-220
 *
 * KiCad symbol: `Transistor_BJT:TIP41`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.centralsemi.com/get_document.php?cmp=1&mergetype=pd&mergepath=pd&pdf_id=tip41.PDF
 * Keywords: power NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class TIP41 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:TIP41";
  override referencePrefix = "Q";
}

/**
 * 6A Ic, 60V Vce, Power NPN Transistor, TO-220
 *
 * KiCad symbol: `Transistor_BJT:TIP41A`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.centralsemi.com/get_document.php?cmp=1&mergetype=pd&mergepath=pd&pdf_id=tip41.PDF
 * Keywords: power NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class TIP41A extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:TIP41A";
  override referencePrefix = "Q";
}

/**
 * 6A Ic, 80V Vce, Power NPN Transistor, TO-220
 *
 * KiCad symbol: `Transistor_BJT:TIP41B`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.centralsemi.com/get_document.php?cmp=1&mergetype=pd&mergepath=pd&pdf_id=tip41.PDF
 * Keywords: power NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class TIP41B extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:TIP41B";
  override referencePrefix = "Q";
}

/**
 * 6A Ic, 100V Vce, Power NPN Transistor, TO-220
 *
 * KiCad symbol: `Transistor_BJT:TIP41C`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.centralsemi.com/get_document.php?cmp=1&mergetype=pd&mergepath=pd&pdf_id=tip41.PDF
 * Keywords: power NPN Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class TIP41C extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:TIP41C";
  override referencePrefix = "Q";
}

/**
 * -6A Ic, -40V Vce, Power PNP Transistor, TO-220
 *
 * KiCad symbol: `Transistor_BJT:TIP42`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.centralsemi.com/get_document.php?cmp=1&mergetype=pd&mergepath=pd&pdf_id=TIP42.PDF
 * Keywords: power PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class TIP42 extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:TIP42";
  override referencePrefix = "Q";
}

/**
 * -6A Ic, -60V Vce, Power PNP Transistor, TO-220
 *
 * KiCad symbol: `Transistor_BJT:TIP42A`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.centralsemi.com/get_document.php?cmp=1&mergetype=pd&mergepath=pd&pdf_id=TIP42.PDF
 * Keywords: power PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class TIP42A extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:TIP42A";
  override referencePrefix = "Q";
}

/**
 * -6A Ic, -80V Vce, Power PNP Transistor, TO-220
 *
 * KiCad symbol: `Transistor_BJT:TIP42B`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.centralsemi.com/get_document.php?cmp=1&mergetype=pd&mergepath=pd&pdf_id=TIP42.PDF
 * Keywords: power PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class TIP42B extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:TIP42B";
  override referencePrefix = "Q";
}

/**
 * -6A Ic, -100V Vce, Power PNP Transistor, TO-220
 *
 * KiCad symbol: `Transistor_BJT:TIP42C`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.centralsemi.com/get_document.php?cmp=1&mergetype=pd&mergepath=pd&pdf_id=TIP42.PDF
 * Keywords: power PNP Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class TIP42C extends Component.withPins({
  "B": "1",
  "C": "2",
  "E": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { B: "input", C: "passive", E: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:TIP42C";
  override referencePrefix = "Q";
}

/**
 * 0.1A Ic, 50V Vce, Dual NPN Input Resistor Transistors, SOT-363
 *
 * KiCad symbol: `Transistor_BJT:UMH3N`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see http://rohmfs.rohm.com/en/products/databook/datasheet/discrete/transistor/digital/emh3t2r-e.pdf
 * Keywords: Dual NPN Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class UMH3N extends Component.withPins({
  "E1": "1",
  "B1": "2",
  "C1": "6",
  "C2": "3",
  "E2": "4",
  "B2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { E1: "passive", B1: "input", C1: "passive", C2: "passive", E2: "passive", B2: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_BJT:UMH3N";
  override referencePrefix = "Q";
}
