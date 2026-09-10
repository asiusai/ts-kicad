// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * 12A Id, 30V Vds, 10mOhm, N-Channel GaN MOSFET, DFN-6
 *
 * KiCad symbol: `Transistor_FET:12N03M`. Reference prefix: `Q`.
 * Footprint filters: *UDFN2020*Type?F*.
 * @see https://www.lcsc.com/datasheet/lcsc_datasheet_2504101957_HL-12N03M_C42461023.pdf
 * Keywords: NFET transistor.
 * Default footprint: Package_DFN_QFN:Diodes_UDFN2020-6_Type-F.
 */
export class _12N03M extends Component.withPins({
  "D_1": "1",
  "D_2": "2",
  "G": "3",
  "S_4": "4",
  "D_5": "5",
  "D_6": "6",
  "D_7": "7",
  "S_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D_1: "passive", D_2: "passive", G: "input", S_4: "passive", D_5: "passive", D_6: "passive", D_7: "passive", S_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:12N03M";
  override referencePrefix = "Q";
}

/**
 * 50mA Id, 30V Vgs, N-Channel FET Transistor, TO-92
 *
 * KiCad symbol: `Transistor_FET:BF244A`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://media.digikey.com/pdf/Data%20Sheets/Fairchild%20PDFs/BF244x.pdf
 * Keywords: N-Channel FET Transistor Low Voltage.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BF244A extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BF244A";
  override referencePrefix = "Q";
}

/**
 * 20mA Id, 25V Vgs, N-Channel JFET Transistor, TO-92
 *
 * KiCad symbol: `Transistor_FET:2N3819`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://my.centralsemi.com/datasheets/2N3819.PDF
 * Keywords: N-Channel JFET Transistor.
 * Default footprint: Package_TO_SOT_THT:TO-92.
 */
export class _2N3819 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:2N3819";
  override referencePrefix = "Q";
}

/**
 * 0.2A Id, 200V Vds, N-Channel MOSFET, 2.6V Logic Level, TO-92
 *
 * KiCad symbol: `Transistor_FET:2N7000`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://www.vishay.com/docs/70226/70226.pdf
 * Keywords: N-Channel MOSFET Logic-Level.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class _2N7000 extends Component.withPins({
  "S": "1",
  "G": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:2N7000";
  override referencePrefix = "Q";
}

/**
 * N-MOSFET transistor, gate/source/drain
 *
 * KiCad symbol: `Transistor_FET:Q_NMOS_GSD`. Reference prefix: `Q`.
 * Keywords: transistor NMOS N-MOS N-MOSFET.
 */
export class Q_NMOS_GSD extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_NMOS_GSD";
  override referencePrefix = "Q";
}

/**
 * 0.115A Id, 60V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:2N7002`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.onsemi.com/pub/Collateral/NDS7002A-D.PDF
 * Keywords: N-Channel Switching MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class _2N7002 extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:2N7002";
  override referencePrefix = "Q";
}

/**
 * 0.24A Id, 60V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:2N7002E`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ds30376.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class _2N7002E extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:2N7002E";
  override referencePrefix = "Q";
}

/**
 * 0.21A Id, 60V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:2N7002H`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/2N7002H.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class _2N7002H extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:2N7002H";
  override referencePrefix = "Q";
}

/**
 * 0.38A Id, 60V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:2N7002K`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/ds30896.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class _2N7002K extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:2N7002K";
  override referencePrefix = "Q";
}

/**
 * 30V Vds, 0.1A Id, 2Ω Rds(on) @ 4.5V, N-Channel MOSFET, SOT-523
 *
 * KiCad symbol: `Transistor_FET:2SK3019`. Reference prefix: `Q`.
 * Footprint filters: SOT?523*.
 * @see https://www.mccsemi.com/pdf/Products/2SK3019(SOT-523).pdf
 * Keywords: MCC Micro-Commercial-Components.
 * Default footprint: Package_TO_SOT_SMD:SOT-523.
 */
export class _2SK3019 extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:2SK3019";
  override referencePrefix = "Q";
}

/**
 * 30mA Id, 15V Vds, N-Channel Dual Gate MOSFET, SOT-143/343
 *
 * KiCad symbol: `Transistor_FET:3SK263`. Reference prefix: `Q`.
 * Footprint filters: SOT?143*.
 * @see http://www.onsemi.com/pub_link/Collateral/EN4423-D.PDF
 * Keywords: N-Channel MOSFET Dual Gate.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 */
export class _3SK263 extends Component.withPins({
  "D": "1",
  "S": "2",
  "G1": "3",
  "G2": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", S: "passive", G1: "passive", G2: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:3SK263";
  override referencePrefix = "Q";
}

/**
 * 30V Vds, 5.7A Id, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:AO3400A`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.aosmd.com/pdfs/datasheet/AO3400A.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class AO3400A extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:AO3400A";
  override referencePrefix = "Q";
}

/**
 * -0.18A Id, -60V Vds, P-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:TP0610T`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.vishay.com/docs/70209/70209.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class TP0610T extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:TP0610T";
  override referencePrefix = "Q";
}

/**
 * -4.0A Id, -30V Vds, P-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:AO3401A`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.aosmd.com/pdfs/datasheet/AO3401A.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class AO3401A extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:AO3401A";
  override referencePrefix = "Q";
}

/**
 * 7.5A Id, 20V Vds, Dual N-Channel MOSFET, 18mOhm Ron, SO-8
 *
 * KiCad symbol: `Transistor_FET:FDS6890A`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/FDS6890A-D.PDF
 * Keywords: Dual N-Channel MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class FDS6890A extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "passive", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "passive", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDS6890A";
  override referencePrefix = "Q";
}

/**
 * 7.7A Id, 30V Vds, Dual N-Channel MOSFET, 21mOhm Ron, SO-8
 *
 * KiCad symbol: `Transistor_FET:AO4842`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://aosmd.com/sites/default/files/res/data_sheets/AO4842.pdf
 * Keywords: Dual N-Channel MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class AO4842 extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "passive", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "passive", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:AO4842";
  override referencePrefix = "Q";
}

/**
 * 4A Id, 100V Vds, Dual N-Channel MOSFET, 68mOhm Ron, SO-8
 *
 * KiCad symbol: `Transistor_FET:AO4892`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://aosmd.com/sites/default/files/res/datasheets/AO4892.pdf
 * Keywords: NMOS Alpha-Omega.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class AO4892 extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "passive", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "passive", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:AO4892";
  override referencePrefix = "Q";
}

/**
 * -85A Id, -20V Vds, P-Channel MOSFET, DFN-8
 *
 * KiCad symbol: `Transistor_FET:AON6411`. Reference prefix: `Q`.
 * Footprint filters: AO*DFN*8*1EP*5.55x5.2mm*P1.27mm*EP4.12x4.6mm*.
 * @see http://www.aosmd.com/res/data_sheets/AON6411.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_DFN_QFN:AO_DFN-8-1EP_5.55x5.2mm_P1.27mm_EP4.12x4.6mm.
 */
export class AON6411 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:AON6411";
  override referencePrefix = "Q";
}

/**
 * 50mA Id, 30V Vgs, N-Channel FET Transistor, TO-92
 *
 * KiCad symbol: `Transistor_FET:BF244B`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://media.digikey.com/pdf/Data%20Sheets/Fairchild%20PDFs/BF244x.pdf
 * Keywords: N-Channel FET Transistor Low Voltage.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BF244B extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BF244B";
  override referencePrefix = "Q";
}

/**
 * 10mA Id, 30V Vgs, N-Channel FET Transistor, TO-92
 *
 * KiCad symbol: `Transistor_FET:BF244C`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://media.digikey.com/pdf/Data%20Sheets/Fairchild%20PDFs/BF244x.pdf
 * Keywords: N-Channel FET Transistor Low Voltage.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BF244C extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BF244C";
  override referencePrefix = "Q";
}

/**
 * 50mA Id, 30V Vgs, N-Channel FET Transistor, TO-92
 *
 * KiCad symbol: `Transistor_FET:BF245A`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://www.onsemi.com/pub/Collateral/BF245A-D.PDF
 * Keywords: N-Channel FET Transistor Low Voltage.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BF245A extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BF245A";
  override referencePrefix = "Q";
}

/**
 * 10mA Id, 30V Vgs, N-Channel FET Transistor, TO-92
 *
 * KiCad symbol: `Transistor_FET:BF245B`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://www.onsemi.com/pub/Collateral/BF245A-D.PDF
 * Keywords: N-Channel FET Transistor Low Voltage.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BF245B extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BF245B";
  override referencePrefix = "Q";
}

/**
 * 10mA Id, 30V Vgs, N-Channel FET Transistor, TO-92
 *
 * KiCad symbol: `Transistor_FET:BF245C`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://www.onsemi.com/pub/Collateral/BF245A-D.PDF
 * Keywords: N-Channel FET Transistor Low Voltage.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BF245C extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BF245C";
  override referencePrefix = "Q";
}

/**
 * 5mA Idss, 30V Vgs, N-Channel JFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:BF545A`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.nxp.com/docs/en/data-sheet/BF545A_BF545B_BF545C.pdf
 * Keywords: N-Channel FET Transistor Low Voltage.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BF545A extends Component.withPins({
  "S": "1",
  "D": "2",
  "G": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S: "passive", D: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BF545A";
  override referencePrefix = "Q";
}

/**
 * 15mA Idss, 30V Vgs, N-Channel JFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:BF545B`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.nxp.com/docs/en/data-sheet/BF545A_BF545B_BF545C.pdf
 * Keywords: N-Channel FET Transistor Low Voltage.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BF545B extends Component.withPins({
  "S": "1",
  "D": "2",
  "G": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S: "passive", D: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BF545B";
  override referencePrefix = "Q";
}

/**
 * 25mA Idss, 30V Vgs, N-Channel JFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:BF545C`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.nxp.com/docs/en/data-sheet/BF545A_BF545B_BF545C.pdf
 * Keywords: N-Channel FET Transistor Low Voltage.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BF545C extends Component.withPins({
  "S": "1",
  "D": "2",
  "G": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S: "passive", D: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BF545C";
  override referencePrefix = "Q";
}

/**
 * VHF N-channel dual-gate MOS-FET, SOT-143
 *
 * KiCad symbol: `Transistor_FET:BF994S`. Reference prefix: `Q`.
 * Footprint filters: SOT*143*.
 * @see https://www.nxp.com/docs/en/data-sheet/BF994S.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-143.
 */
export class BF994S extends Component.withPins({
  "S": "1",
  "D": "2",
  "G2": "3",
  "G1": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S: "passive", D: "passive", G2: "input", G1: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BF994S";
  override referencePrefix = "Q";
}

/**
 * 0.25A Id, 200V Vds, N-Channel MOSFET, TO-92
 *
 * KiCad symbol: `Transistor_FET:BS107`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see http://www.onsemi.com/pub_link/Collateral/BS107-D.PDF
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BS107 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BS107";
  override referencePrefix = "Q";
}

/**
 * 0.25A Id, 200V Vds, N-Channel MOSFET, TO-92
 *
 * KiCad symbol: `Transistor_FET:BS108`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see http://www.redrok.com/MOSFET_BS108_200V_250mA_8O_Vth1.5_TO-92.PDF
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BS108 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BS108";
  override referencePrefix = "Q";
}

/**
 * 0.5A Id, 60V Vds, N-Channel MOSFET, TO-92
 *
 * KiCad symbol: `Transistor_FET:BS170`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see https://www.onsemi.com/pub/Collateral/BS170-D.PDF
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BS170 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BS170";
  override referencePrefix = "Q";
}

/**
 * 0.15A Id, 60V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:BS170F`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/BS170F.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BS170F extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BS170F";
  override referencePrefix = "Q";
}

/**
 * -0.18A Id, -45V Vds, P-Channel MOSFET, TO-92
 *
 * KiCad symbol: `Transistor_FET:BS250`. Reference prefix: `Q`.
 * Footprint filters: TO?92*.
 * @see http://www.vishay.com/docs/70209/70209.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-92_Inline.
 */
export class BS250 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BS250";
  override referencePrefix = "Q";
}

/**
 * 0.25A Id, 60V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:BS870`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ds11302.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BS870 extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BS870";
  override referencePrefix = "Q";
}

/**
 * 180A Id, 25V Vds, 0.8mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:BSB008NE2LX`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/Infineon-BSB008NE2LX-DS-v02_00-EN.pdf?fileId=db3a30432e564707012e5745ca7d000e
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class BSB008NE2LX extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSB008NE2LX";
  override referencePrefix = "Q";
}

/**
 * 170A Id, 25V Vds, 1.2mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:BSB012NE2LXI`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/Infineon-BSB012NE2LXI-DS-v02_01-EN.pdf?fileId=db3a30433f764301013f805e3eb247c1
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class BSB012NE2LXI extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSB012NE2LXI";
  override referencePrefix = "Q";
}

/**
 * 163A Id, 25V Vds, 1.3mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:BSB013NE2LXI`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/Infineon-BSB013NE2LXI-DS-v02_04-en.pdf?fileId=db3a30432e398416012e47a158802577
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class BSB013NE2LXI extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSB013NE2LXI";
  override referencePrefix = "Q";
}

/**
 * 180A Id, 40V Vds, 1.4mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:BSB014N04LX3`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/Infineon-BSB014N04LX3G-DS-v02_03-en.pdf?fileId=db3a304320d39d590121a02c6c737a9b
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class BSB014N04LX3 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSB014N04LX3";
  override referencePrefix = "Q";
}

/**
 * 180A Id, 40V Vds, 1.5mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:BSB015N04NX3`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/Infineon-BSB015N04NX3G-DS-v02_04-en.pdf?fileId=db3a304320d39d590121a03bbfcd7aac
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class BSB015N04NX3 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSB015N04NX3";
  override referencePrefix = "Q";
}

/**
 * 90A Id, 60V Vds, 2.8mOhm Rds, N-Channel MOSFET, DirectFET MN
 *
 * KiCad symbol: `Transistor_FET:BSB028N06NN3`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MN*.
 * @see https://www.infineon.com/dgdl/Infineon-BSB028N06NN3-DS-v02_00-en.pdf?fileId=db3a30432e25b009012e29fda4e23838
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MN.
 */
export class BSB028N06NN3 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSB028N06NN3";
  override referencePrefix = "Q";
}

/**
 * 90A Id, 80V Vds, 4.4mOhm Rds, N-Channel MOSFET, DirectFET MN
 *
 * KiCad symbol: `Transistor_FET:BSB044N08NN3`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MN*.
 * @see https://www.infineon.com/dgdl/Infineon-BSB044N08NN3_G-DS-v02_00-en.pdf?fileId=db3a30435819ae2e012e385cde7b70d4
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MN.
 */
export class BSB044N08NN3 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSB044N08NN3";
  override referencePrefix = "Q";
}

/**
 * 83A Id, 100V Vds, 5.1mOhm Rds, N-Channel MOSFET, DirectFET MN
 *
 * KiCad symbol: `Transistor_FET:BSB056N10NN3`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MN*.
 * @see https://www.infineon.com/dgdl/Infineon-BSB056N10NN3_G-DS-v02_05-en.pdf?fileId=db3a30442e152e91012e390b9a631459
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MN.
 */
export class BSB056N10NN3 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSB056N10NN3";
  override referencePrefix = "Q";
}

/**
 * 50A Id, 80V Vds, 10.4mOhm Rds, N-Channel MOSFET, DirectFET MP
 *
 * KiCad symbol: `Transistor_FET:BSB104N08NP3`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MP*.
 * @see https://www.infineon.com/dgdl/Infineon-BSB104N08NP3_G-DS-v02_01-en.pdf?fileId=db3a304341e0aed00141efc548ca1b2b
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MP.
 */
export class BSB104N08NP3 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSB104N08NP3";
  override referencePrefix = "Q";
}

/**
 * 45A Id, 150V Vds, 16.5mOhm Rds, N-Channel MOSFET, DirectFET MZ
 *
 * KiCad symbol: `Transistor_FET:BSB165N15NZ3`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MZ*.
 * @see https://www.infineon.com/dgdl/Infineon-BSB165N15NZ3-DS-v02_02-en.pdf?fileId=db3a30432e779412012e7b04a1353843
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MZ.
 */
export class BSB165N15NZ3 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSB165N15NZ3";
  override referencePrefix = "Q";
}

/**
 * 30A Id, 150V Vds, 28mOhm Rds, N-Channel MOSFET, DirectFET MZ
 *
 * KiCad symbol: `Transistor_FET:BSB280N15NZ3`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MZ*.
 * @see https://www.infineon.com/dgdl/Infineon-BSB280N15NZ3-DS-v02_05-en.pdf?fileId=db3a30432e779412012e7b0b544c3852
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MZ.
 */
export class BSB280N15NZ3 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSB280N15NZ3";
  override referencePrefix = "Q";
}

/**
 * N-MOSFET transistor, source (pins 1-3)/gate/drain (pin 5), SO-8/SO-8F/SO-8FL/SON-8/PowerPAK-8/TDSON-8/VSON-8
 *
 * KiCad symbol: `Transistor_FET:Q_NMOS_SSSGD_AvalancheRated`. Reference prefix: `Q`.
 * Keywords: transistor NMOS N-MOS N-MOSFET.
 */
export class Q_NMOS_SSSGD_AvalancheRated extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_NMOS_SSSGD_AvalancheRated";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 80V Vds, OptiMOS N-Channel Power MOSFET, 2.6mOhm Ron, Qg (typ) 74.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC026N08NS5`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC026N08NS5-DS-v02_01-EN.pdf?fileId=5546d4624ad04ef9014ae2eace7629e0
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC026N08NS5 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC026N08NS5";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 60V Vds, OptiMOS N-Channel Power MOSFET, 2.8mOhm Ron, Qg (typ) 31.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC028N06LS3`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC028N06LS3-DS-v02_02-en.pdf?fileId=db3a30431ddc9372011ebafa4c607f8c
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC028N06LS3 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC028N06LS3";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 80V Vds, OptiMOS N-Channel Power MOSFET, 3.0mOhm Ron, Qg (typ) 61.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC030N08NS5`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC030N08NS5-DS-v02_02-EN.pdf?fileId=5546d4624ad04ef9014aed52f4210acf
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC030N08NS5 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC030N08NS5";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 100V Vds, OptiMOS N-Channel Power MOSFET, 3.5mOhm Ron, Qg (typ) 70.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC035N10NS5`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC035N10NS5-DS-v02_00-EN.pdf?fileId=5546d4624ad04ef9014ae8b5f3bc1b6f
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC035N10NS5 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC035N10NS5";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 80V Vds, OptiMOS N-Channel Power MOSFET, 3.7mOhm Ron, Qg (typ) 46.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC037N08NS5`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC037N08NS5-DS-v02_00-EN.pdf?fileId=5546d4624ad04ef9014ae9ad3b8e1c33
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC037N08NS5 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC037N08NS5";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 80V Vds, OptiMOS N-Channel Power MOSFET, 4.0mOhm Ron, Qg (typ) 43.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC040N08NS5`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC040N08NS5-DS-v02_00-EN.pdf?fileId=5546d4624ad04ef9014ae3065a7e2a05
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC040N08NS5 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC040N08NS5";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 100V Vds, OptiMOS N-Channel Power MOSFET, 4.0mOhm Ron, Qg (typ) 58.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC040N10NS5`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC040N10NS5-DS-v02_01-EN.pdf?fileId=5546d4624a0bf290014a0fbcee2e6b38
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC040N10NS5 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC040N10NS5";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 100V Vds, OptiMOS N-Channel Power MOSFET, 4.6mOhm Ron, Qg (typ) 63.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC046N10NS3G`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC046N10NS3-DS-v02_00-en.pdf?fileId=db3a304332fc1ee7013316f966a4713c
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC046N10NS3G extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC046N10NS3G";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 80V Vds, OptiMOS N-Channel Power MOSFET, 4.7mOhm Ron, Qg (typ) 52.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC047N08NS3G`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC047N08NS3G-DS-v02_07-en.pdf?fileId=db3a30431add1d95011ae7e8dacf5611
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC047N08NS3G extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC047N08NS3G";
  override referencePrefix = "Q";
}

/**
 * 95A Id, 80V Vds, OptiMOS N-Channel Power MOSFET, 5.2mOhm Ron, Qg (typ) 32.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC052N08NS5`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC052N08NS5-DS-v02_00-EN.pdf?fileId=5546d4624ad04ef9014ae38fc94f2b40
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC052N08NS5 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC052N08NS5";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 80V Vds, OptiMOS N-Channel Power MOSFET, 5.7mOhm Ron, Qg (typ) 42.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC057N08NS3G`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC057N08NS3G-DS-v02_04-en.pdf?fileId=db3a30431add1d95011ae803c9345616
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC057N08NS3G extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC057N08NS3G";
  override referencePrefix = "Q";
}

/**
 * 90A Id, 100V Vds, OptiMOS N-Channel Power MOSFET, 6.0mOhm Ron, Qg (typ) 51.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC060N10NS3G`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC060N10NS3-DS-v02_04-en.pdf?fileId=db3a30431ce5fb52011d1aab7f90133a
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC060N10NS3G extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC060N10NS3G";
  override referencePrefix = "Q";
}

/**
 * 82A Id, 80V Vds, OptiMOS N-Channel Power MOSFET, 6.1mOhm Ron, Qg (typ) 27.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC061N08NS5`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC061N08NS5-DS-v02_00-EN.pdf?fileId=5546d4624ad04ef9014ae3ab1bb62b69
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC061N08NS5 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC061N08NS5";
  override referencePrefix = "Q";
}

/**
 * 90A Id, 100V Vds, OptiMOS N-Channel Power MOSFET, 7.0mOhm Ron, Qg (typ) 42.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC070N10NS3G`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC070N10NS3-DS-v02_01-en.pdf?fileId=db3a304327b89750012824712c6c6f2f
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC070N10NS3G extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC070N10NS3G";
  override referencePrefix = "Q";
}

/**
 * 80A Id, 100V Vds, OptiMOS N-Channel Power MOSFET, 7.0mOhm Ron, Qg (typ) 30.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC070N10NS5`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC070N10NS5-DS-v02_01-EN.pdf?fileId=5546d4624a0bf290014a0fc62d9d6b3c
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC070N10NS5 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC070N10NS5";
  override referencePrefix = "Q";
}

/**
 * 74A Id, 80V Vds, OptiMOS N-Channel Power MOSFET, 7.2mOhm Ron, Qg (typ) 24.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC072N08NS5`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC072N08NS5-DS-v02_00-EN.pdf?fileId=5546d4624ad04ef9014ae3d8e8192c7c
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC072N08NS5 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC072N08NS5";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 100V Vds, OptiMOS N-Channel Power MOSFET, 7.9mOhm Ron, Qg (typ) 66.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC079N10NSG`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC079N10NS-DS-v01_06-en.pdf?fileId=db3a3043163797a601167b174f951147
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC079N10NSG extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC079N10NSG";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 100V Vds, OptiMOS N-Channel Power MOSFET, 8.2mOhm Ron, Qg (typ) 78.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC082N10LSG`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC082N10LS-DS-v01_07-en.pdf?fileId=db3a3043163797a6011647faad240719
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC082N10LSG extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC082N10LSG";
  override referencePrefix = "Q";
}

/**
 * 60A Id, 100V Vds, OptiMOS N-Channel Power MOSFET, 9.8mOhm Ron, Qg (typ) 22.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC098N10NS5`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC098N10NS5-DS-v02_00-EN.pdf?fileId=5546d4624ad04ef9014ae95ab4221bfd
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC098N10NS5 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC098N10NS5";
  override referencePrefix = "Q";
}

/**
 * 90A Id, 100V Vds, OptiMOS N-Channel Power MOSFET, 10.0mOhm Ron, Qg (typ) 33.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC100N10NSFG`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC100N10NSF-DS-v02_08-en.pdf?fileId=db3a30431b3e89eb011b49a75b607b57
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC100N10NSFG extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC100N10NSFG";
  override referencePrefix = "Q";
}

/**
 * 90A Id, 100V Vds, OptiMOS N-Channel Power MOSFET, 10.5mOhm Ron, Qg (typ) 40.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC105N10LSFG`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC105N10LSF-DS-v02_09-en.pdf?fileId=db3a30431b3e89eb011b499b2aa07b26
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC105N10LSFG extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC105N10LSFG";
  override referencePrefix = "Q";
}

/**
 * 63A Id, 100V Vds, OptiMOS N-Channel Power MOSFET, 10.9mOhm Ron, Qg (typ) 26.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC109N10NS3G`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC109N10NS3-DS-v02_00-en.pdf?fileId=db3a304327b897500128247bdae36f3f
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC109N10NS3G extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC109N10NS3G";
  override referencePrefix = "Q";
}

/**
 * 49A Id, 80V Vds, OptiMOS N-Channel Power MOSFET, 11.7mOhm Ron, Qg (typ) 15.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC117N08NS5`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC117N08NS5-DS-v02_00-EN.pdf?fileId=5546d4624ad04ef9014ae97632721c1b
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC117N08NS5 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC117N08NS5";
  override referencePrefix = "Q";
}

/**
 * 71A Id, 100V Vds, OptiMOS N-Channel Power MOSFET, 11.8mOhm Ron, Qg (typ) 42.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC118N10NSG`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC118N10NS-DS-v01_08-en.pdf?fileId=db3a3043163797a6011647fdc2d4071c
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC118N10NSG extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC118N10NSG";
  override referencePrefix = "Q";
}

/**
 * 55A Id, 80V Vds, OptiMOS N-Channel Power MOSFET, 12.3mOhm Ron, Qg (typ) 19.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC123N08NS3G`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC123N08NS3G-DS-v02_05-en.pdf?fileId=db3a30431add1d95011ae80eb8555625
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC123N08NS3G extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC123N08NS3G";
  override referencePrefix = "Q";
}

/**
 * 71A Id, 100V Vds, OptiMOS N-Channel Power MOSFET, 12.3mOhm Ron, Qg (typ) 51.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC123N10LSG`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC123N10LS-DS-v02_08-en.pdf?fileId=db3a30431b3e89eb011b4626974b7df5
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC123N10LSG extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC123N10LSG";
  override referencePrefix = "Q";
}

/**
 * 16A Id, 300V Vds, OptiMOS N-Channel Power MOSFET, 130mOhm Ron, Qg (typ) 30.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC13DN30NSFD`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see https://www.infineon.com/dgdl/Infineon-BSC13DN30NSFD-DS-v02_01-EN.pdf?fileId=5546d46259b0420a0159d5c940fc0d9a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC13DN30NSFD extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC13DN30NSFD";
  override referencePrefix = "Q";
}

/**
 * 63A Id, 100V Vds, OptiMOS N-Channel Power MOSFET, 15.9mOhm Ron, Qg (typ) 26.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC159N10LSFG`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC159N10LSF-DS-v02_09-en.pdf?fileId=db3a30431b3e89eb011b499f85d47b36
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC159N10LSFG extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC159N10LSFG";
  override referencePrefix = "Q";
}

/**
 * 42A Id, 100V Vds, OptiMOS N-Channel Power MOSFET, 16.0mOhm Ron, Qg (typ) 19.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC160N10NS3G`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC160N10NS3-DS-v02_04-en.pdf?fileId=db3a30432239cccd01226040189a7f47
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC160N10NS3G extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC160N10NS3G";
  override referencePrefix = "Q";
}

/**
 * 45A Id, 100V Vds, OptiMOS N-Channel Power MOSFET, 19.6mOhm Ron, Qg (typ) 25.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC196N10NSG`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC196N10NS-DS-v01_07-en.pdf?fileId=db3a3043163797a601164800549d071f
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC196N10NSG extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC196N10NSG";
  override referencePrefix = "Q";
}

/**
 * 40A Id, 100V Vds, OptiMOS N-Channel Power MOSFET, 25.2mOhm Ron, Qg (typ) 13.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC252N10NSFG`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC252N10NSF-DS-v02_08-en.pdf?fileId=db3a30431b3e89eb011b498909e97b17
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC252N10NSFG extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC252N10NSFG";
  override referencePrefix = "Q";
}

/**
 * 40A Id, 100V Vds, OptiMOS N-Channel Power MOSFET, 26.5mOhm Ron, Qg (typ) 16.0nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC265N10LSFG`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC265N10LSFG-DS-v02_08-en.pdf?fileId=db3a30431b3e89eb011b49a375207b46
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC265N10LSFG extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC265N10LSFG";
  override referencePrefix = "Q";
}

/**
 * 23A Id, 80V Vds, OptiMOS N-Channel Power MOSFET, 34.0mOhm Ron, Qg (typ) 6.8nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC340N08NS3G`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC340N08NS3G-DS-v02_06-en.pdf?fileId=db3a30431add1d95011ae81c21f2563a
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC340N08NS3G extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC340N08NS3G";
  override referencePrefix = "Q";
}

/**
 * 18A Id, 100V Vds, OptiMOS N-Channel Power MOSFET, 44.0mOhm Ron, Qg (typ) 8.1nC, PG-TDSON-8
 *
 * KiCad symbol: `Transistor_FET:BSC440N10NS3G`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.infineon.com/dgdl/Infineon-BSC440N10NS3-DS-v02_04-en.pdf?fileId=db3a30432239cccd0122604520d47f56
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class BSC440N10NS3G extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSC440N10NS3G";
  override referencePrefix = "Q";
}

/**
 * -0.53/+0.95A Id, -20/+20V Vds, P/N-Channel MOSFET, SOT-363, Infineon
 *
 * KiCad symbol: `Transistor_FET:BSD235C`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see https://www.infineon.com/dgdl/Infineon-BSD235C-DS-v02_04-EN.pdf?fileId=db3a30433580b371013585a2d0d53326
 * Keywords: OptiMOS MOSFET complementary nmos pmos enhanced avalanche AEC Q101 super logic infineon.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BSD235C extends Component.withPins({
  "SN": "1",
  "GN": "2",
  "DN": "6",
  "DP": "3",
  "SP": "4",
  "GP": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SN: "passive", GN: "input", DN: "passive", DP: "passive", SP: "passive", GP: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSD235C";
  override referencePrefix = "Q";
}

/**
 * 1.2A Id, 20V Vds, Dual N-Channel MOSFET, 175mOhm Ron, SC-70-6
 *
 * KiCad symbol: `Transistor_FET:FDG1024NZ`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see https://www.onsemi.com/pub/Collateral/FDG1024NZ-D.pdf
 * Keywords: Dual N-Channel MOSFET Logic Level.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class FDG1024NZ extends Component.withPins({
  "S_1": "1",
  "G_2": "2",
  "D_6": "6",
  "D_3": "3",
  "S_4": "4",
  "G_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", G_2: "passive", D_6: "passive", D_3: "passive", S_4: "passive", G_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDG1024NZ";
  override referencePrefix = "Q";
}

/**
 * 0.88A Id, 20V Vds, Dual N-Channel MOSFET, 560mOhm Ron at 1.8V Vgs (ultra logic level), SOT-363
 *
 * KiCad symbol: `Transistor_FET:BSD840N`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see https://www.infineon.com/dgdl/BSD840N_Rev2%204.pdf?fileId=db3a30431b0626df011b12b4486c7c02
 * Keywords: nfet pair.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class BSD840N extends Component.withPins({
  "S_1": "1",
  "G_2": "2",
  "D_6": "6",
  "D_3": "3",
  "S_4": "4",
  "G_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", G_2: "passive", D_6: "passive", D_3: "passive", S_4: "passive", G_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSD840N";
  override referencePrefix = "Q";
}

/**
 * 75A Id, 25V Vds, 3mOhm Rds, N-Channel MOSFET, DirectFET SQ
 *
 * KiCad symbol: `Transistor_FET:BSF030NE2LQ`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*SQ*.
 * @see https://www.infineon.com/dgdl/Infineon-BSF030NE2LQ-DS-v02_03-en.pdf?fileId=db3a30432e398416012e47a8f0792588
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_SQ.
 */
export class BSF030NE2LQ extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSF030NE2LQ";
  override referencePrefix = "Q";
}

/**
 * 69A Id, 25V Vds, 3.5mOhm Rds, N-Channel MOSFET, DirectFET SQ
 *
 * KiCad symbol: `Transistor_FET:BSF035NE2LQ`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*SQ*.
 * @see https://www.infineon.com/dgdl/Infineon-BSF035NE2LQ-DS-v01_03-en.pdf?fileId=db3a30433f764301013f7fe8a925463c
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_SQ.
 */
export class BSF035NE2LQ extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSF035NE2LQ";
  override referencePrefix = "Q";
}

/**
 * 15A Id, 75V Vds, 45mOhm Rds, N-Channel MOSFET, DirectFET ST
 *
 * KiCad symbol: `Transistor_FET:BSF450NE7NH3`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*ST*.
 * @see https://www.infineon.com/dgdl/Infineon-BSF450NE7NH3-DS-v02_02-EN.pdf?fileId=db3a30433a047ba0013a687e2ae403da
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_ST.
 */
export class BSF450NE7NH3 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSF450NE7NH3";
  override referencePrefix = "Q";
}

/**
 * 0.5A Id, 50V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:BSN20`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ds31898.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BSN20 extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSN20";
  override referencePrefix = "Q";
}

/**
 * 0.35A Id, 240V Vds, N-Channel MOSFET, SOT-223
 *
 * KiCad symbol: `Transistor_FET:BSP129`. Reference prefix: `Q`.
 * Footprint filters: SOT?223*.
 * @see https://www.infineon.com/dgdl/Infineon-BSP129-DS-v01_42-en.pdf?fileId=db3a30433c1a8752013c1fc296d2395f
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-223-3_TabPin2.
 */
export class BSP129 extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSP129";
  override referencePrefix = "Q";
}

/**
 * 0.35A Id, 240V Vds, N-Channel Enhancement Mode MOSFET, SOT-223
 *
 * KiCad symbol: `Transistor_FET:BSP89`. Reference prefix: `Q`.
 * Footprint filters: SOT?223*.
 * @see https://www.infineon.com/dgdl/Infineon-BSP89-DS-v02_02-en.pdf?fileId=db3a30433b47825b013b4b8a07f90d55
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-223-3_TabPin2.
 */
export class BSP89 extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSP89";
  override referencePrefix = "Q";
}

/**
 * 50mA min, 40V, 25mOhm max, 4-10V Vgs(off), N-Channel JFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:BSR56`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.nxp.com/docs/en/data-sheet/BSR56_57_58.pdf
 * Keywords: N-Channel FET Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BSR56 extends Component.withPins({
  "D": "1",
  "S": "2",
  "G": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", S: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSR56";
  override referencePrefix = "Q";
}

/**
 * 20mA min, 40V, 40mOhm max, 2-6V Vgs(off), N-Channel JFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:BSR57`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.nxp.com/docs/en/data-sheet/BSR56_57_58.pdf
 * Keywords: N-Channel FET Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BSR57 extends Component.withPins({
  "D": "1",
  "S": "2",
  "G": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", S: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSR57";
  override referencePrefix = "Q";
}

/**
 * 80mA min, 40V, 60mOhm max, 0.8-4V Vgs(off), N-Channel JFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:BSR58`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.nxp.com/docs/en/data-sheet/BSR56_57_58.pdf
 * Keywords: N-Channel FET Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BSR58 extends Component.withPins({
  "D": "1",
  "S": "2",
  "G": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", S: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSR58";
  override referencePrefix = "Q";
}

/**
 * 0.17A Id, 100V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:BSS123`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ds30366.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BSS123 extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSS123";
  override referencePrefix = "Q";
}

/**
 * 0.07A Id, 600V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:BSS127S`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/BSS127.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BSS127S extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSS127S";
  override referencePrefix = "Q";
}

/**
 * 50V Vds, 0.22A Id, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:BSS138`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.onsemi.com/pub/Collateral/BSS138-D.PDF
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BSS138 extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSS138";
  override referencePrefix = "Q";
}

/**
 * 20V Vds, 1.5A Id, N-Channel MOSFET, SOT-323
 *
 * KiCad symbol: `Transistor_FET:BSS214NW`. Reference prefix: `Q`.
 * Footprint filters: SOT?323*.
 * @see https://www.infineon.com/dgdl/Infineon-BSS214NW-DS-v02_02-en.pdf?fileId=db3a30431b3e89eb011b695aebc01bde
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class BSS214NW extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSS214NW";
  override referencePrefix = "Q";
}

/**
 * -0.33A Id, -60V Vds, P-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:BSS83P`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.farnell.com/datasheets/1835997.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BSS83P extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSS83P";
  override referencePrefix = "Q";
}

/**
 * -0.13A Id, -50V Vds, P-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:BSS84`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://assets.nexperia.com/documents/data-sheet/BSS84.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class BSS84 extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BSS84";
  override referencePrefix = "Q";
}

/**
 * 7A Id, 55V Vds, N-Channel Enhancement Mode MOSFET, SOT-223
 *
 * KiCad symbol: `Transistor_FET:BUK7880-55A`. Reference prefix: `Q`.
 * Footprint filters: SOT?223*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK7880-55A.pdf
 * Keywords: n-channel n channel mosfet enhancement mode.
 * Default footprint: Package_TO_SOT_SMD:SOT-223-3_TabPin2.
 */
export class BUK7880_55A extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK7880-55A";
  override referencePrefix = "Q";
}

/**
 * 17A Id, 60V Vds, N-Channel TrenchMOS MOSFET, 46mOhm Ron, 6nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK9M53-60EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9M53-60E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK9M53_60EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9M53-60EX";
  override referencePrefix = "Q";
}

/**
 * 56A Id, 40V Vds, N-Channel TrenchMOS MOSFET, 10mOhm Ron, 19.5nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK7M10-40EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK7M10-40E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK7M10_40EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK7M10-40EX";
  override referencePrefix = "Q";
}

/**
 * 48A Id, 40V Vds, N-Channel TrenchMOS MOSFET, 12mOhm Ron, 15.8nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK7M12-40EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK7M12-40E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK7M12_40EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK7M12-40EX";
  override referencePrefix = "Q";
}

/**
 * 53A Id, 60V Vds, N-Channel TrenchMOS MOSFET, 12mOhm Ron, 24.8nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK7M12-60EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK7M12-60E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK7M12_60EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK7M12-60EX";
  override referencePrefix = "Q";
}

/**
 * 42.9A Id, 60V Vds, N-Channel TrenchMOS MOSFET, 15mOhm Ron, 19.4nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK7M15-60EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK7M15-60E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK7M15_60EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK7M15-60EX";
  override referencePrefix = "Q";
}

/**
 * 43A Id, 80V Vds, N-Channel TrenchMOS MOSFET, 17mOhm Ron, 29.6nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK7M17-80EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK7M17-80E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK7M17_80EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK7M17-80EX";
  override referencePrefix = "Q";
}

/**
 * 35.8A Id, 60V Vds, N-Channel TrenchMOS MOSFET, 19mOhm Ron, 17.3nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK7M19-60EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK7M19-60E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK7M19_60EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK7M19-60EX";
  override referencePrefix = "Q";
}

/**
 * 33A Id, 40V Vds, N-Channel TrenchMOS MOSFET, 21mOhm Ron, 10.7nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK7M21-40EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK7M21-40E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK7M21_40EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK7M21-40EX";
  override referencePrefix = "Q";
}

/**
 * 37A Id, 80V Vds, N-Channel TrenchMOS MOSFET, 22mOhm Ron, 23.9nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK7M22-80EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK7M22-80E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK7M22_80EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK7M22-80EX";
  override referencePrefix = "Q";
}

/**
 * 30A Id, 80V Vds, N-Channel TrenchMOS MOSFET, 27mOhm Ron, 19.5nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK7M27-80EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK7M27-80E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK7M27_80EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK7M27-80EX";
  override referencePrefix = "Q";
}

/**
 * 24A Id, 60V Vds, N-Channel TrenchMOS MOSFET, 33mOhm Ron, 10.9nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK7M33-60EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK7M33-60E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK7M33_60EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK7M33-60EX";
  override referencePrefix = "Q";
}

/**
 * 20A Id, 60V Vds, N-Channel TrenchMOS MOSFET, 42mOhm Ron, 9nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK7M42-60EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK7M42-60E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK7M42_60EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK7M42-60EX";
  override referencePrefix = "Q";
}

/**
 * 19A Id, 40V Vds, N-Channel TrenchMOS MOSFET, 45mOhm Ron, 6.2nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK7M45-40EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK7M45-40E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK7M45_40EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK7M45-40EX";
  override referencePrefix = "Q";
}

/**
 * 14A Id, 60V Vds, N-Channel TrenchMOS MOSFET, 67mOhm Ron, 6.7nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK7M67-60EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK7M67-60E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK7M67_60EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK7M67-60EX";
  override referencePrefix = "Q";
}

/**
 * 70A Id, 40V Vds, N-Channel TrenchMOS MOSFET, 6.3mOhm Ron, 28.1nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK7M6R3-40EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK7M6R3-40E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK7M6R3_40EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK7M6R3-40EX";
  override referencePrefix = "Q";
}

/**
 * 69A Id, 40V Vds, N-Channel TrenchMOS MOSFET, 8mOhm Ron, 23.8nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK7M8R0-40EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK7M8R0-40E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK7M8R0_40EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK7M8R0-40EX";
  override referencePrefix = "Q";
}

/**
 * 60A Id, 60V Vds, N-Channel TrenchMOS MOSFET, 9.9mOhm Ron, 30.1nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK7M9R9-60EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK7M9R9-60E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK7M9R9_60EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK7M9R9-60EX";
  override referencePrefix = "Q";
}

/**
 * 12A Id, 55V Vds, RdsOn 25mOhm, N-Channel Enhancement Mode MOSFET, SOT-223
 *
 * KiCad symbol: `Transistor_FET:BUK9832-55A`. Reference prefix: `Q`.
 * Footprint filters: SOT?223*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9832-55A.pdf
 * Keywords: n-channel n channel mosfet enhancement mode.
 * Default footprint: Package_TO_SOT_SMD:SOT-223-3_TabPin2.
 */
export class BUK9832_55A extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9832-55A";
  override referencePrefix = "Q";
}

/**
 * 54A Id, 30V Vds, N-Channel TrenchMOS MOSFET, 7.8mOhm Ron, 12.2nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK9M10-30EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9M10-30E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK9M10_30EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9M10-30EX";
  override referencePrefix = "Q";
}

/**
 * 53A Id, 40V Vds, N-Channel TrenchMOS MOSFET, 9mOhm Ron, 13.4nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK9M11-40EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9M11-40E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK9M11_40EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9M11-40EX";
  override referencePrefix = "Q";
}

/**
 * 54A Id, 60V Vds, N-Channel TrenchMOS MOSFET, 11mOhm Ron, - Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK9M12-60EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9M12-60E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK9M12_60EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9M12-60EX";
  override referencePrefix = "Q";
}

/**
 * 11.5A Id, 100V Vds, N-Channel TrenchMOS MOSFET, 119mOhm Ron, 8.8nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK9M120-100EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9M120-100E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK9M120_100EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9M120-100EX";
  override referencePrefix = "Q";
}

/**
 * 44A Id, 40V Vds, N-Channel TrenchMOS MOSFET, 11mOhm Ron, 11.3nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK9M14-40EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9M14-40E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK9M14_40EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9M14-40EX";
  override referencePrefix = "Q";
}

/**
 * 47A Id, 60V Vds, N-Channel TrenchMOS MOSFET, 13mOhm Ron, 17nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK9M15-60EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9M15-60E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK9M15_60EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9M15-60EX";
  override referencePrefix = "Q";
}

/**
 * 9.3A Id, 100V Vds, N-Channel TrenchMOS MOSFET, 150mOhm Ron, 7.4nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK9M156-100EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9M156-100E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK9M156_100EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9M156-100EX";
  override referencePrefix = "Q";
}

/**
 * 37A Id, 30V Vds, N-Channel TrenchMOS MOSFET, 14mOhm Ron, 8nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK9M17-30EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9M17-30E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK9M17_30EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9M17-30EX";
  override referencePrefix = "Q";
}

/**
 * 38A Id, 60V Vds, N-Channel TrenchMOS MOSFET, 17mOhm Ron, 13.8nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK9M19-60EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9M19-60E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK9M19_60EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9M19-60EX";
  override referencePrefix = "Q";
}

/**
 * 37A Id, 80V Vds, N-Channel TrenchMOS MOSFET, 20mOhm Ron, 20nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK9M23-80EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9M23-80E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK9M23_80EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9M23-80EX";
  override referencePrefix = "Q";
}

/**
 * 30A Id, 40V Vds, N-Channel TrenchMOS MOSFET, 20mOhm Ron, 7.7nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK9M24-40EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9M24-40E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK9M24_40EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9M24-40EX";
  override referencePrefix = "Q";
}

/**
 * 32A Id, 60V Vds, N-Channel TrenchMOS MOSFET, 21mOhm Ron, 12.4nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK9M24-60EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9M24-60E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK9M24_60EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9M24-60EX";
  override referencePrefix = "Q";
}

/**
 * 33A Id, 80V Vds, N-Channel TrenchMOS MOSFET, 25mOhm Ron, 16.7nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK9M28-80EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9M28-80E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK9M28_80EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9M28-80EX";
  override referencePrefix = "Q";
}

/**
 * 29A Id, 100V Vds, N-Channel TrenchMOS MOSFET, 34mOhm Ron, 24.7nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK9M34-100EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9M34-100E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK9M34_100EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9M34-100EX";
  override referencePrefix = "Q";
}

/**
 * 26A Id, 80V Vds, N-Channel TrenchMOS MOSFET, 31mOhm Ron, 13.5nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK9M35-80EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9M35-80E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK9M35_80EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9M35-80EX";
  override referencePrefix = "Q";
}

/**
 * 22A Id, 60V Vds, N-Channel TrenchMOS MOSFET, 37mOhm Ron, 8.3nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK9M42-60EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9M42-60E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK9M42_60EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9M42-60EX";
  override referencePrefix = "Q";
}

/**
 * 25A Id, 100V Vds, N-Channel TrenchMOS MOSFET, 43mOhm Ron, 20.2nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK9M43-100EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9M43-100E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK9M43_100EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9M43-100EX";
  override referencePrefix = "Q";
}

/**
 * 17.6A Id, 40V Vds, N-Channel TrenchMOS MOSFET, 40mOhm Ron, 4.5nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK9M52-40EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9M52-40E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK9M52_40EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9M52-40EX";
  override referencePrefix = "Q";
}

/**
 * 70A Id, 30V Vds, N-Channel TrenchMOS MOSFET, 4.1mOhm Ron, 22.5nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK9M5R2-30EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9M5R2-30E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK9M5R2_30EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9M5R2-30EX";
  override referencePrefix = "Q";
}

/**
 * 70A Id, 30V Vds, N-Channel TrenchMOS MOSFET, 5.3mOhm Ron, 18nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK9M6R6-30EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9M6R6-30E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK9M6R6_30EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9M6R6-30EX";
  override referencePrefix = "Q";
}

/**
 * 70A Id, 40V Vds, N-Channel TrenchMOS MOSFET, 5.8mOhm Ron, 19.7nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK9M7R2-40EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9M7R2-40E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK9M7R2_40EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9M7R2-40EX";
  override referencePrefix = "Q";
}

/**
 * 12.8A Id, 60V Vds, N-Channel TrenchMOS MOSFET, 73mOhm Ron, 4.4nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK9M85-60EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9M85-60E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK9M85_60EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9M85-60EX";
  override referencePrefix = "Q";
}

/**
 * 64A Id, 40V Vds, N-Channel TrenchMOS MOSFET, 7.3mOhm Ron, 16.2nC Qqd, -55 to 175 °C, LFPAK33
 *
 * KiCad symbol: `Transistor_FET:BUK9M9R1-40EX`. Reference prefix: `Q`.
 * Footprint filters: LFPAK33*.
 * @see https://assets.nexperia.com/documents/data-sheet/BUK9M9R1-40E.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:LFPAK33.
 */
export class BUK9M9R1_40EX extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUK9M9R1-40EX";
  override referencePrefix = "Q";
}

/**
 * 30A Id, 50V Vds, N-Channel Power MOSFET, TO-220
 *
 * KiCad symbol: `Transistor_FET:BUZ11`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://media.digikey.com/pdf/Data%20Sheets/Fairchild%20PDFs/BUZ11.pdf
 * Keywords: N-Channel Power MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BUZ11 extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUZ11";
  override referencePrefix = "Q";
}

/**
 * 14.1A Id, 500V Vds, CoolMOS N-Channel Power MOSFET, 380mOhm Ron, 24.8nC Qg (typ), TO-252-2
 *
 * KiCad symbol: `Transistor_FET:IPD50R380CE`. Reference prefix: `Q`.
 * Footprint filters: TO?252*.
 * @see https://www.infineon.com/dgdl/Infineon-IPD50R380CE-DS-v02_01-en.pdf?fileId=db3a30433ecb86d4013ed0a2ef580f38
 * Keywords: CoolMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TO-252-2.
 */
export class IPD50R380CE extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IPD50R380CE";
  override referencePrefix = "Q";
}

/**
 * 14.5A Id, 200V Vds, SIPMOS Power Transistor, N-Channel MOSFET, 0.2 ohms Rds, normal level (Vgs(th) = 2.1 .. 3.0 .. 4.0V), TO-220
 *
 * KiCad symbol: `Transistor_FET:BUZ31`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.mouser.com/ds/2/196/Buz31%20H_%20Rev%202.5-57290.pdf
 * Keywords: Obsolete avalanche-rated Infineon-BUZ31H-halogen-free Siemens-C67078-S.1304-A2.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BUZ31 extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUZ31";
  override referencePrefix = "Q";
}

/**
 * 14.5A Id, 200V Vds, SIPMOS Power Transistor, N-Channel MOSFET, 0.2 ohms Rds, normal level (Vgs(th) = 2.1 .. 3.0 .. 4.0V), TO-262
 *
 * KiCad symbol: `Transistor_FET:BUZ31H3046`. Reference prefix: `Q`.
 * Footprint filters: TO?262*.
 * @see https://www.infineon.com/dgdl/Infineon-BUZ31H3046-DS-v02_00-en.pdf?fileId=db3a30433b47825b013b852143eb396e
 * Keywords: Obsolete Infineon avalanche-rated halogen-free.
 * Default footprint: Package_TO_SOT_THT:TO-262-3_Vertical.
 */
export class BUZ31H3046 extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUZ31H3046";
  override referencePrefix = "Q";
}

/**
 * 13.5A Id, 200V Vds, SIPMOS Power Transistor, N-Channel MOSFET, 0.2 ohms Rds, logic level (Vgs(th) = 1.2 .. 1.6 .. 2.0V), TO-220
 *
 * KiCad symbol: `Transistor_FET:BUZ31L`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.mouser.com/datasheet/2/196/Infineon-BUZ31LH-DS-v02_04-en-522762.pdf
 * Keywords: Obsolete avalanche-rated Infineon-BUZ31LH-halogen-free Siemens-C67078-S1322-A2.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class BUZ31L extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:BUZ31L";
  override referencePrefix = "Q";
}

/**
 * 36A Id, 900V Vds, 65mOhm, N-Channel SiC MOSFET, TO-247
 *
 * KiCad symbol: `Transistor_FET:C3M0065090D`. Reference prefix: `Q`.
 * Footprint filters: TO?247*.
 * @see https://www.wolfspeed.com/media/downloads/176/C3M0065090D.pdf
 * Keywords: N-Channel SiC MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-247-3_Vertical.
 */
export class C3M0065090D extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:C3M0065090D";
  override referencePrefix = "Q";
}

/**
 * 90A Id, 1200V Vds, 25mOhm, N-Channel SiC MOSFET, TO-247
 *
 * KiCad symbol: `Transistor_FET:C2M0025120D`. Reference prefix: `Q`.
 * Footprint filters: TO?247*.
 * @see https://www.wolfspeed.com/media/downloads/161/C2M0025120D.pdf
 * Keywords: N-Channel SiC MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-247-3_Vertical.
 */
export class C2M0025120D extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:C2M0025120D";
  override referencePrefix = "Q";
}

/**
 * 60A Id, 1200V Vds, 40mOhm, N-Channel SiC MOSFET, TO-247
 *
 * KiCad symbol: `Transistor_FET:C2M0040120D`. Reference prefix: `Q`.
 * Footprint filters: TO?247*.
 * @see https://www.wolfspeed.com/media/downloads/165/C2M0040120D.pdf
 * Keywords: N-Channel SiC MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-247-3_Vertical.
 */
export class C2M0040120D extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:C2M0040120D";
  override referencePrefix = "Q";
}

/**
 * 72A Id, 1700V Vds, 45mOhm, N-Channel SiC MOSFET, TO-247
 *
 * KiCad symbol: `Transistor_FET:C2M0045170D`. Reference prefix: `Q`.
 * Footprint filters: TO?247*.
 * @see https://www.wolfspeed.com/media/downloads/960/C2M0045170D.000.pdf
 * Keywords: N-Channel SiC MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-247-3_Vertical.
 */
export class C2M0045170D extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:C2M0045170D";
  override referencePrefix = "Q";
}

/**
 * 36A Id, 1200V Vds, 80mOhm, N-Channel SiC MOSFET, TO-247
 *
 * KiCad symbol: `Transistor_FET:C2M0080120D`. Reference prefix: `Q`.
 * Footprint filters: TO?247*.
 * @see https://www.wolfspeed.com/media/downloads/167/C2M0080120D.pdf
 * Keywords: N-Channel SiC MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-247-3_Vertical.
 */
export class C2M0080120D extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:C2M0080120D";
  override referencePrefix = "Q";
}

/**
 * 19A Id, 1200V Vds, 160mOhm, N-Channel SiC MOSFET, TO-247
 *
 * KiCad symbol: `Transistor_FET:C2M0160120D`. Reference prefix: `Q`.
 * Footprint filters: TO?247*.
 * @see https://www.wolfspeed.com/media/downloads/169/C2M0160120D.pdf
 * Keywords: N-Channel SiC MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-247-3_Vertical.
 */
export class C2M0160120D extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:C2M0160120D";
  override referencePrefix = "Q";
}

/**
 * 10A Id, 1200V Vds, 280mOhm, N-Channel SiC MOSFET, TO-247
 *
 * KiCad symbol: `Transistor_FET:C2M0280120D`. Reference prefix: `Q`.
 * Footprint filters: TO?247*.
 * @see https://www.wolfspeed.com/media/downloads/171/C2M0280120D.pdf
 * Keywords: N-Channel SiC MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-247-3_Vertical.
 */
export class C2M0280120D extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:C2M0280120D";
  override referencePrefix = "Q";
}

/**
 * 5A Id, 1700V Vds, 1000mOhm, N-Channel SiC MOSFET, TO-247
 *
 * KiCad symbol: `Transistor_FET:C2M1000170D`. Reference prefix: `Q`.
 * Footprint filters: TO?247*.
 * @see https://www.wolfspeed.com/media/downloads/173/C2M1000170D.pdf
 * Keywords: N-Channel SiC MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-247-3_Vertical.
 */
export class C2M1000170D extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:C2M1000170D";
  override referencePrefix = "Q";
}

/**
 * 35A Id, 900V Vds, 65mOhm, N-Channel SiC MOSFET, TO-263-7
 *
 * KiCad symbol: `Transistor_FET:C3M0065090J`. Reference prefix: `Q`.
 * Footprint filters: TO?263*TabPin8*.
 * @see https://www.wolfspeed.com/media/downloads/145/C3M0065090J.pdf
 * Keywords: N-Channel SiC MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-7_TabPin8.
 */
export class C3M0065090J extends Component.withPins({
  "G": "1",
  "DS": "2",
  "S_3": "3",
  "S_4": "4",
  "S_5": "5",
  "S_6": "6",
  "S_7": "7",
  "D": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", DS: "passive", S_3: "passive", S_4: "passive", S_5: "passive", S_6: "passive", S_7: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:C3M0065090J";
  override referencePrefix = "Q";
}

/**
 * 5.3A Id, 1700V Vds, 1000mOhm, N-Channel SiC MOSFET, TO-263-7
 *
 * KiCad symbol: `Transistor_FET:C2M1000170J`. Reference prefix: `Q`.
 * Footprint filters: TO?263*TabPin8*.
 * @see https://www.wolfspeed.com/media/downloads/820/C2M1000170J.pdf
 * Keywords: N-Channel SiC MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-7_TabPin8.
 */
export class C2M1000170J extends Component.withPins({
  "G": "1",
  "DS": "2",
  "S_3": "3",
  "S_4": "4",
  "S_5": "5",
  "S_6": "6",
  "S_7": "7",
  "D": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", DS: "passive", S_3: "passive", S_4: "passive", S_5: "passive", S_6: "passive", S_7: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:C2M1000170J";
  override referencePrefix = "Q";
}

/**
 * 63A Id, 900V Vds, 30mOhm, N-Channel SiC MOSFET, TO-247-4
 *
 * KiCad symbol: `Transistor_FET:C3M0030090K`. Reference prefix: `Q`.
 * Footprint filters: TO?247*.
 * @see https://www.wolfspeed.com/media/downloads/1185/C3M0030090K.pdf
 * Keywords: N-Channel SiC MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-247-4_Vertical.
 */
export class C3M0030090K extends Component.withPins({
  "D": "1",
  "S": "2",
  "DS": "3",
  "G": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", S: "passive", DS: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:C3M0030090K";
  override referencePrefix = "Q";
}

/**
 * 35A Id, 1000V Vds, 65mOhm, N-Channel SiC MOSFET, TO-263-7
 *
 * KiCad symbol: `Transistor_FET:C3M0065100J`. Reference prefix: `Q`.
 * Footprint filters: TO?263*TabPin8*.
 * @see https://www.wolfspeed.com/media/downloads/958/C3M0065100J.pdf
 * Keywords: N-Channel SiC MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-7_TabPin8.
 */
export class C3M0065100J extends Component.withPins({
  "G": "1",
  "DS": "2",
  "S_3": "3",
  "S_4": "4",
  "S_5": "5",
  "S_6": "6",
  "S_7": "7",
  "D": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", DS: "passive", S_3: "passive", S_4: "passive", S_5: "passive", S_6: "passive", S_7: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:C3M0065100J";
  override referencePrefix = "Q";
}

/**
 * 35A Id, 1000V Vds, 65mOhm, N-Channel SiC MOSFET, TO-247-4
 *
 * KiCad symbol: `Transistor_FET:C3M0065100K`. Reference prefix: `Q`.
 * Footprint filters: TO?247*.
 * @see https://www.wolfspeed.com/media/downloads/961/C3M0065100K.pdf
 * Keywords: N-Channel SiC MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-247-4_Vertical.
 */
export class C3M0065100K extends Component.withPins({
  "D": "1",
  "S": "2",
  "DS": "3",
  "G": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", S: "passive", DS: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:C3M0065100K";
  override referencePrefix = "Q";
}

/**
 * 30A Id, 1200V Vds, 75mOhm, N-Channel SiC MOSFET, TO-263-7
 *
 * KiCad symbol: `Transistor_FET:C3M0075120J`. Reference prefix: `Q`.
 * Footprint filters: TO?263*TabPin8*.
 * @see https://www.wolfspeed.com/media/downloads/997/C3M0075120J.pdf
 * Keywords: N-Channel SiC MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-7_TabPin8.
 */
export class C3M0075120J extends Component.withPins({
  "G": "1",
  "DS": "2",
  "S_3": "3",
  "S_4": "4",
  "S_5": "5",
  "S_6": "6",
  "S_7": "7",
  "D": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", DS: "passive", S_3: "passive", S_4: "passive", S_5: "passive", S_6: "passive", S_7: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:C3M0075120J";
  override referencePrefix = "Q";
}

/**
 * 30A Id, 1200V Vds, 75mOhm, N-Channel SiC MOSFET, TO-247-4
 *
 * KiCad symbol: `Transistor_FET:C3M0075120K`. Reference prefix: `Q`.
 * Footprint filters: TO?247*.
 * @see https://www.wolfspeed.com/media/downloads/959/c3m0075120k.pdf
 * Keywords: N-Channel SiC MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-247-4_Vertical.
 */
export class C3M0075120K extends Component.withPins({
  "D": "1",
  "S": "2",
  "DS": "3",
  "G": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", S: "passive", DS: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:C3M0075120K";
  override referencePrefix = "Q";
}

/**
 * 23A Id, 900V Vds, 120mOhm, N-Channel SiC MOSFET, TO-247
 *
 * KiCad symbol: `Transistor_FET:C3M0120090D`. Reference prefix: `Q`.
 * Footprint filters: TO?247*.
 * @see https://www.wolfspeed.com/media/downloads/824/C3M0120090D.pdf
 * Keywords: N-Channel SiC MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-247-3_Vertical.
 */
export class C3M0120090D extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:C3M0120090D";
  override referencePrefix = "Q";
}

/**
 * 22A Id, 900V Vds, 120mOhm, N-Channel SiC MOSFET, TO-263-7
 *
 * KiCad symbol: `Transistor_FET:C3M0120090J`. Reference prefix: `Q`.
 * Footprint filters: TO?263*TabPin8*.
 * @see https://www.wolfspeed.com/media/downloads/834/C3M0120090J.pdf
 * Keywords: N-Channel SiC MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-7_TabPin8.
 */
export class C3M0120090J extends Component.withPins({
  "G": "1",
  "DS": "2",
  "S_3": "3",
  "S_4": "4",
  "S_5": "5",
  "S_6": "6",
  "S_7": "7",
  "D": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", DS: "passive", S_3: "passive", S_4: "passive", S_5: "passive", S_6: "passive", S_7: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:C3M0120090J";
  override referencePrefix = "Q";
}

/**
 * 22A Id, 1000V Vds, 120mOhm, N-Channel SiC MOSFET, TO-263-7
 *
 * KiCad symbol: `Transistor_FET:C3M0120100J`. Reference prefix: `Q`.
 * Footprint filters: TO?263*TabPin8*.
 * @see https://www.wolfspeed.com/media/downloads/957/C3M0120100J.pdf
 * Keywords: N-Channel SiC MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-7_TabPin8.
 */
export class C3M0120100J extends Component.withPins({
  "G": "1",
  "DS": "2",
  "S_3": "3",
  "S_4": "4",
  "S_5": "5",
  "S_6": "6",
  "S_7": "7",
  "D": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", DS: "passive", S_3: "passive", S_4: "passive", S_5: "passive", S_6: "passive", S_7: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:C3M0120100J";
  override referencePrefix = "Q";
}

/**
 * 22A Id, 1000V Vds, 120mOhm, N-Channel SiC MOSFET, TO-247-4
 *
 * KiCad symbol: `Transistor_FET:C3M0120100K`. Reference prefix: `Q`.
 * Footprint filters: TO?247*.
 * @see https://www.wolfspeed.com/media/downloads/962/C3M0120100K.pdf
 * Keywords: N-Channel SiC MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-247-4_Vertical.
 */
export class C3M0120100K extends Component.withPins({
  "D": "1",
  "S": "2",
  "DS": "3",
  "G": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", S: "passive", DS: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:C3M0120100K";
  override referencePrefix = "Q";
}

/**
 * 11.5A Id, 900V Vds, 280mOhm, N-Channel SiC MOSFET, TO-247
 *
 * KiCad symbol: `Transistor_FET:C3M0280090D`. Reference prefix: `Q`.
 * Footprint filters: TO?247*.
 * @see https://www.wolfspeed.com/media/downloads/825/C3M0280090D.pdf
 * Keywords: N-Channel SiC MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-247-3_Vertical.
 */
export class C3M0280090D extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:C3M0280090D";
  override referencePrefix = "Q";
}

/**
 * 11.5A Id, 900V Vds, 280mOhm, N-Channel SiC MOSFET, TO-263-7
 *
 * KiCad symbol: `Transistor_FET:C3M0280090J`. Reference prefix: `Q`.
 * Footprint filters: TO?263*TabPin8*.
 * @see https://www.wolfspeed.com/media/downloads/835/C3M0280090J.pdf
 * Keywords: N-Channel SiC MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-7_TabPin8.
 */
export class C3M0280090J extends Component.withPins({
  "G": "1",
  "DS": "2",
  "S_3": "3",
  "S_4": "4",
  "S_5": "5",
  "S_6": "6",
  "S_7": "7",
  "D": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", DS: "passive", S_3: "passive", S_4: "passive", S_5: "passive", S_6: "passive", S_7: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:C3M0280090J";
  override referencePrefix = "Q";
}

/**
 * 3.6A Id, 12V Vds, N-Channel MOSFET, 76mOhm Ron,max @ 4.5Vgs, 0.91nC Qg,typ @ 4.5Vgs, PicoStar 0.73x0.64mm max, 0.69x0.60mm nom
 *
 * KiCad symbol: `Transistor_FET:CSD13380F3`. Reference prefix: `Q`.
 * Footprint filters: *PicoStar*DFN?3*.
 * @see https://www.ti.com/lit/ds/symlink/csd13380f3.pdf
 * Keywords: Texas NMOS single.
 * Default footprint: Package_DFN_QFN:Texas_PicoStar_DFN-3_0.69x0.60mm.
 */
export class CSD13380F3 extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD13380F3";
  override referencePrefix = "Q";
}

/**
 * 5A Id, 25V Vds, NexFET N-Channel Power MOSFET, 19mOhm Ron, SON-6
 *
 * KiCad symbol: `Transistor_FET:CSD16301Q2`. Reference prefix: `Q`.
 * Footprint filters: Texas*DQK*.
 * @see http://www.ti.com/lit/ds/symlink/csd16301q2.pdf
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_SON:Texas_DQK.
 */
export class CSD16301Q2 extends Component.withPins({
  "D_1": "1",
  "D_2": "2",
  "G": "3",
  "S_4": "4",
  "D_5": "5",
  "D_6": "6",
  "S_7": "7",
  "D_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D_1: "passive", D_2: "passive", G: "passive", S_4: "passive", D_5: "passive", D_6: "passive", S_7: "passive", D_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD16301Q2";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 25V Vds, NexFET N-Channel Power MOSFET, 2.6mOhm Ron, 14nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD16321Q5`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd16321q5
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD16321Q5 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD16321Q5";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 25V Vds, NexFET N-Channel Power MOSFET, 5.8mOhm Ron, Qg (typ) 6.8nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD16322Q5`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd16322q5
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD16322Q5 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD16322Q5";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 25V Vds, NexFET N-Channel Power MOSFET, 2.2mOhm Ron, 18nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD16325Q5`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd16325q5
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD16325Q5 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD16325Q5";
  override referencePrefix = "Q";
}

/**
 * 60A Id, 25V Vds, NexFET N-Channel Power MOSFET, 3.4mOhm Ron, Qg Typ 6.2nC, VSON-8 3.3x3.3mm
 *
 * KiCad symbol: `Transistor_FET:CSD16327Q3`. Reference prefix: `Q`.
 * Footprint filters: VSON*3.3x3.3mm*P0.65mm*NexFET*.
 * @see https://www.ti.com/lit/ds/symlink/csd16327q3.pdf
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_SON:VSON-8_3.3x3.3mm_P0.65mm_NexFET.
 */
export class CSD16327Q3 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD16327Q3";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 25V Vds, NexFET N-Channel Power MOSFET, 5.5mOhm Ron, Qg (typ) 6.5nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD16342Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd16342q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD16342Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD16342Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 25V Vds, NexFET N-Channel Power MOSFET, 1.6mOhm Ron, 21nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD16401Q5`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd16401q5
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD16401Q5 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD16401Q5";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 25V Vds, NexFET N-Channel Power MOSFET, 2.8mOhm Ron, Qg (typ) 13.3nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD16403Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd16403q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD16403Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD16403Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 25V Vds, NexFET N-Channel Power MOSFET, 5.1mOhm Ron, Qg (typ) 6.5nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD16404Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd16404q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD16404Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD16404Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 25V Vds, NexFET N-Channel Power MOSFET, 2.4mOhm Ron, Qg (typ) 13.3nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD16407Q5`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd16407q5
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD16407Q5 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD16407Q5";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 25V Vds, NexFET N-Channel Power MOSFET, 4.5mOhm Ron, Qg (typ) 6.7nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD16408Q5`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd16408q5
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD16408Q5 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD16408Q5";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 25V Vds, NexFET N-Channel Power MOSFET, 8.5mOhm Ron, Qg (typ) 3.9nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD16410Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd16410q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD16410Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD16410Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 25V Vds, NexFET N-Channel Power MOSFET, 11mOhm Ron, Qg (typ) 2.9nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD16412Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd16412q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD16412Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD16412Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 25V Vds, NexFET N-Channel Power MOSFET, 3.9mOhm Ron, 9nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD16413Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd16413q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD16413Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD16413Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 25V Vds, NexFET N-Channel Power MOSFET, 1.9mOhm Ron, Qg (typ) 16.6nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD16414Q5`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd16414q5
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD16414Q5 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD16414Q5";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 25V Vds, NexFET N-Channel Power MOSFET, 1.15mOhm Ron, 21nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD16415Q5`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd16415q5
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD16415Q5 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD16415Q5";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 25V Vds, NexFET N-Channel Power MOSFET, 0.59mOhm Ron, 95nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD16570Q5B`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd16570q5b
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD16570Q5B extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD16570Q5B";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 3mOhm Ron, 19nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17301Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17301q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17301Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17301Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 9mOhm Ron, Qg (typ) 5.4nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17302Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17302q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17302Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17302Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 2.6mOhm Ron, 18nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17303Q5`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17303q5
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17303Q5 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17303Q5";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 2.8mOhm Ron, Qg (typ) 14.1nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17305Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17305q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17305Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17305Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 4.2mOhm Ron, Qg (typ) 11.8nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17306Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17306q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17306Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17306Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 12.1mOhm Ron, 4nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17307Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17307q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17307Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17307Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 5.9mOhm Ron, Qg (typ) 8.9nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17310Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17310q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17310Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17310Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 2.3mOhm Ron, 24nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17311Q5`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17311q5
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17311Q5 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17311Q5";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 1.7mOhm Ron, 28nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17312Q5`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17312q5
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17312Q5 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17312Q5";
  override referencePrefix = "Q";
}

/**
 * 5A Id, 30V Vds, NexFET N-Channel Power MOSFET, 24mOhm Ron, SON-6
 *
 * KiCad symbol: `Transistor_FET:CSD17313Q2`. Reference prefix: `Q`.
 * Footprint filters: Texas*DQK*.
 * @see http://www.ti.com/lit/ds/symlink/csd17313q2.pdf
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_SON:Texas_DQK.
 */
export class CSD17313Q2 extends Component.withPins({
  "D_1": "1",
  "D_2": "2",
  "G": "3",
  "S_4": "4",
  "D_5": "5",
  "D_6": "6",
  "S_7": "7",
  "D_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D_1: "passive", D_2: "passive", G: "passive", S_4: "passive", D_5: "passive", D_6: "passive", S_7: "passive", D_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17313Q2";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 12.4mOhm Ron, Qg (typ) 3.6nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17322Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17322q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17322Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17322Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 15.5mOhm Ron, Qg (typ) 2.8nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17327Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17327q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17327Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17327Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 2.9mOhm Ron, Qg (typ) 13.2nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17501Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17501q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17501Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17501Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 3.5mOhm Ron, 10nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17505Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17505q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17505Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17505Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 4mOhm Ron, Qg (typ) 8.3nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17506Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17506q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17506Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17506Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 10.8mOhm Ron, Qg (typ) 2.8nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17507Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17507q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17507Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17507Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 5.2mOhm Ron, Qg (typ) 6.4nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17510Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17510q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17510Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17510Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 8.1mOhm Ron, Qg (typ) 3.6nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17522Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17522q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17522Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17522Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 10.8mOhm Ron, Qg (typ) 2.8nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17527Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17527q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17527Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17527Q5A";
  override referencePrefix = "Q";
}

/**
 * 48A Id, 30V Vds, NexFET N-Channel Power MOSFET, 8.8mOhm Ron, 6nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17551Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17551q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17551Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17551Q5A";
  override referencePrefix = "Q";
}

/**
 * 60A Id, 30V Vds, NexFET N-Channel Power MOSFET, 6.2mOhm Ron, 9nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17552Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17552q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17552Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17552Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 3.1mOhm Ron, Qg (typ) 17.5nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17553Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17553q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17553Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17553Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 2.7mOhm Ron, 23nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17555Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17555q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17555Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17555Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 1.4mOhm Ron, Qg (typ) 28.5nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17556Q5B`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17556q5b
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17556Q5B extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17556Q5B";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 1.15mOhm Ron, 39nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17559Q5`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17559q5
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17559Q5 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17559Q5";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 0.69mOhm Ron, 93nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17570Q5B`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17570q5b
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17570Q5B extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17570Q5B";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 1mOhm Ron, 49nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17573Q5B`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17573q5b
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17573Q5B extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17573Q5B";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 30V Vds, NexFET N-Channel Power MOSFET, 2mOhm Ron, 25nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17576Q5B`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17576q5b
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17576Q5B extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17576Q5B";
  override referencePrefix = "Q";
}

/**
 * 35A Id, 30V Vds, NexFET N-Channel Power MOSFET, 4.0mOhm Ron, Qg Typ 12nC, VSON-8 3.3x3.3mm
 *
 * KiCad symbol: `Transistor_FET:CSD17577Q3A`. Reference prefix: `Q`.
 * Footprint filters: VSON*3.3x3.3mm*P0.65mm*NexFET*.
 * @see https://www.ti.com/lit/ds/symlink/csd17577q3a.pdf
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_SON:VSON-8_3.3x3.3mm_P0.65mm_NexFET.
 */
export class CSD17577Q3A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17577Q3A";
  override referencePrefix = "Q";
}

/**
 * 60A Id, 30V Vds, NexFET N-Channel Power MOSFET, 4.2mOhm Ron, 13nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17577Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17577q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17577Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17577Q5A";
  override referencePrefix = "Q";
}

/**
 * 25A Id, 30V Vds, NexFET N-Channel Power MOSFET, 6.9mOhm Ron, Qg (typ) 7.9nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17578Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17578q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17578Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17578Q5A";
  override referencePrefix = "Q";
}

/**
 * 25A Id, 30V Vds, NexFET N-Channel Power MOSFET, 9.7mOhm Ron, Qg (typ) 5.4nC, SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD17579Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd17579q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD17579Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17579Q5A";
  override referencePrefix = "Q";
}

/**
 * 60A Id, 30V Vds, NexFET N-Channel Power MOSFET, 3.2mOhm Ron, Qg Typ 20nC, VSON-8 3.3x3.3mm
 *
 * KiCad symbol: `Transistor_FET:CSD17581Q3A`. Reference prefix: `Q`.
 * Footprint filters: VSON*3.3x3.3mm*P0.65mm*NexFET*.
 * @see https://www.ti.com/lit/ds/symlink/csd17581q3a.pdf
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_SON:VSON-8_3.3x3.3mm_P0.65mm_NexFET.
 */
export class CSD17581Q3A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD17581Q3A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 40V Vds, NexFET N-Channel Power MOSFET, 3.2mOhm Ron, 42nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD18501Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd18501q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD18501Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD18501Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 40V Vds, NexFET N-Channel Power MOSFET, 2.3mOhm Ron, 52nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD18502Q5B`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd18502q5b
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD18502Q5B extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD18502Q5B";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 40V Vds, NexFET N-Channel Power MOSFET, 4.3mOhm Ron, 26nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD18503Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd18503q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD18503Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD18503Q5A";
  override referencePrefix = "Q";
}

/**
 * 50A Id, 40V Vds, NexFET N-Channel Power MOSFET, 6.6mOhm Ron, 16nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD18504Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd18504q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD18504Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD18504Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 40V Vds, NexFET N-Channel Power MOSFET, 1.2mOhm Ron, 150nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD18509Q5B`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd18509q5b
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD18509Q5B extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD18509Q5B";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 60V Vds, NexFET N-Channel Power MOSFET, 4.6mOhm Ron, 36nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD18531Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd18531q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD18531Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD18531Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 60V Vds, NexFET N-Channel Power MOSFET, 3.4mOhm Ron, 49nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD18532NQ5B`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd18532nq5b
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD18532NQ5B extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD18532NQ5B";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 60V Vds, NexFET N-Channel Power MOSFET, 3.2mOhm Ron, 44nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD18532Q5B`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd18532q5b
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD18532Q5B extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD18532Q5B";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 60V Vds, NexFET N-Channel Power MOSFET, 5.9mOhm Ron, 29nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD18533Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd18533q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD18533Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD18533Q5A";
  override referencePrefix = "Q";
}

/**
 * 50A Id, 60V Vds, NexFET N-Channel Power MOSFET, 9.8mOhm Ron, 17nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD18534Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd18534q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD18534Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD18534Q5A";
  override referencePrefix = "Q";
}

/**
 * 50A Id, 60V Vds, NexFET N-Channel Power MOSFET, 13mOhm Ron, 14nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD18537NQ5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd18537nq5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD18537NQ5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD18537NQ5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 60V Vds, NexFET N-Channel Power MOSFET, 2.2mOhm Ron, 41nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD18540Q5B`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd18540q5b
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD18540Q5B extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD18540Q5B";
  override referencePrefix = "Q";
}

/**
 * 35A Id, 60V Vds, NexFET N-Channel Power MOSFET, 8.1mOhm Ron, Qg Typ 11.1nC, VSON-8 3.3x3.3mm
 *
 * KiCad symbol: `Transistor_FET:CSD18543Q3A`. Reference prefix: `Q`.
 * Footprint filters: VSON*3.3x3.3mm*P0.65mm*NexFET*.
 * @see https://www.ti.com/lit/ds/symlink/csd18543q3a.pdf
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_SON:VSON-8_3.3x3.3mm_P0.65mm_NexFET.
 */
export class CSD18543Q3A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD18543Q3A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 60V Vds, NexFET N-Channel Power MOSFET, 6.8mOhm Ron, 15nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD18563Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd18563q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD18563Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD18563Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 80V Vds, NexFET N-Channel Power MOSFET, 4.1mOhm Ron, 48nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD19502Q5B`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd19502q5b
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD19502Q5B extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD19502Q5B";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 100V Vds, NexFET N-Channel Power MOSFET, 6.4mOhm Ron, 37nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD19531Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd19531q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD19531Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD19531Q5A";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 100V Vds, NexFET N-Channel Power MOSFET, 4.9mOhm Ron, 48nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD19532Q5B`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd19532q5b
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD19532Q5B extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD19532Q5B";
  override referencePrefix = "Q";
}

/**
 * 100A Id, 100V Vds, NexFET N-Channel Power MOSFET, 9.5mOhm Ron, 27nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD19533Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd19533q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD19533Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD19533Q5A";
  override referencePrefix = "Q";
}

/**
 * 50A Id, 100V Vds, NexFET N-Channel Power MOSFET, 15.1mOhm Ron, 17nC Qg(typ), SON8 5x6mm
 *
 * KiCad symbol: `Transistor_FET:CSD19534Q5A`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see http://www.ti.com/lit/gpn/csd19534q5a
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class CSD19534Q5A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD19534Q5A";
  override referencePrefix = "Q";
}

/**
 * 50A Id, 100V Vds, NexFET N-Channel Power MOSFET, 13mOhm Ron, Qg Typ 16.0nC, VSON8 3.3x3.3mm
 *
 * KiCad symbol: `Transistor_FET:CSD19537Q3`. Reference prefix: `Q`.
 * Footprint filters: VSON*3.3x3.3mm*P0.65mm*NexFET*.
 * @see http://www.ti.com/lit/ds/symlink/csd19537q3.pdf
 * Keywords: NexFET Power MOSFET N-MOS.
 * Default footprint: Package_SON:VSON-8_3.3x3.3mm_P0.65mm_NexFET.
 */
export class CSD19537Q3 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD19537Q3";
  override referencePrefix = "Q";
}

/**
 * 4.6A Id, 100V Vds, NexFET N-Channel Power MOSFET, 49mOhm Ron, SON-6
 *
 * KiCad symbol: `Transistor_FET:CSD19538Q2`. Reference prefix: `Q`.
 * Footprint filters: Texas*DQK*.
 * @see https://www.ti.com/lit/ds/symlink/csd19538q2.pdf
 * Keywords: Texas-Instruments N-MOS.
 * Default footprint: Package_SON:Texas_DQK.
 */
export class CSD19538Q2 extends Component.withPins({
  "D_1": "1",
  "D_2": "2",
  "G": "3",
  "S_4": "4",
  "D_5": "5",
  "D_6": "6",
  "S_7": "7",
  "D_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D_1: "passive", D_2: "passive", G: "passive", S_4: "passive", D_5: "passive", D_6: "passive", S_7: "passive", D_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD19538Q2";
  override referencePrefix = "Q";
}

/**
 * -5A Id, -20V Vds, NexFET P-Channel Power MOSFET, 39mOhm Ron, SON-6
 *
 * KiCad symbol: `Transistor_FET:CSD25302Q2`. Reference prefix: `Q`.
 * Footprint filters: Texas*DQK*.
 * @see https://www.ti.com/lit/ds/slps234b/slps234b.pdf
 * Keywords: NexFET Power MOSFET P-MOS.
 * Default footprint: Package_SON:Texas_DQK.
 */
export class CSD25302Q2 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "G": "3",
  "D_4": "4",
  "S_5": "5",
  "S_6": "6",
  "D_7": "7",
  "S_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", G: "passive", D_4: "passive", S_5: "passive", S_6: "passive", D_7: "passive", S_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD25302Q2";
  override referencePrefix = "Q";
}

/**
 * -76A Id, -20V Vds, NexFET P-Channel Power MOSFET, 7.7mOhm Ron, Qg (typ) 7.5 nC, VSON-8 3.3x3.3mm
 *
 * KiCad symbol: `Transistor_FET:CSD25402Q3A`. Reference prefix: `U`.
 * Footprint filters: VSON*3.3x3.3mm*P0.65mm*NexFET*.
 * @see https://www.ti.com/lit/ds/symlink/csd25402q3a.pdf
 * Keywords: P-MOS PMOS single.
 * Default footprint: Package_SON:VSON-8_3.3x3.3mm_P0.65mm_NexFET.
 */
export class CSD25402Q3A extends Component.withPins({
  "D_1": "1",
  "D_2": "2",
  "D_3": "3",
  "G": "4",
  "S": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D_1: "passive", D_2: "passive", D_3: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD25402Q3A";
  override referencePrefix = "U";
}

/**
 * -1.7A Id, -20V Vds, P-Channel MOSFET, 159mOhm Ron,max @ 4.5Vgs, 0.70nC Qg,typ @ 4.5Vgs, PicoStar 0.73x0.64mm max, 0.69x0.60mm nom
 *
 * KiCad symbol: `Transistor_FET:CSD25480F3`. Reference prefix: `Q`.
 * Footprint filters: *PicoStar*DFN?3*.
 * @see https://www.ti.com/lit/ds/symlink/csd25480f3.pdf
 * Keywords: Texas PMOS single.
 * Default footprint: Package_DFN_QFN:Texas_PicoStar_DFN-3_0.69x0.60mm.
 */
export class CSD25480F3 extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:CSD25480F3";
  override referencePrefix = "Q";
}

/**
 * Dual NMOS PMOS transistor, 6 pin package
 *
 * KiCad symbol: `Transistor_FET:Q_Dual_NMOS_PMOS_G1S2G2D2S1D1`. Reference prefix: `Q`.
 * @see ~
 * Keywords: Complementary Pair N-MOS N-MOSFET P-MOS P-MOSFET.
 */
export class Q_Dual_NMOS_PMOS_G1S2G2D2S1D1 extends Component.withPins({
  "G_1": "1",
  "S_5": "5",
  "D_6": "6",
  "S_2": "2",
  "G_3": "3",
  "D_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G_1: "input", S_5: "passive", D_6: "passive", S_2: "passive", G_3: "input", D_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_Dual_NMOS_PMOS_G1S2G2D2S1D1";
  override referencePrefix = "Q";
}

/**
 * 4.6A/-3.2A Id, 20V Vds, Complementary pair enhancement mode P-Channel and N-Channel MOSFET, TSOT-23-6
 *
 * KiCad symbol: `Transistor_FET:DMC2053UVT`. Reference prefix: `Q`.
 * Footprint filters: TSOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/DMC2053UVT.pdf
 * Keywords: complementary mosfet.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class DMC2053UVT extends Component.withPins({
  "G_1": "1",
  "S_5": "5",
  "D_6": "6",
  "S_2": "2",
  "G_3": "3",
  "D_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G_1: "input", S_5: "passive", D_6: "passive", S_2: "passive", G_3: "input", D_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMC2053UVT";
  override referencePrefix = "Q";
}

/**
 * 3.4A/-2.7A Id, 30V Vds, Complementary pair enhancement mode P-Channel and N-Channel MOSFET, TSOT-23-6
 *
 * KiCad symbol: `Transistor_FET:DMC3071LVT`. Reference prefix: `Q`.
 * Footprint filters: TSOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/DMC3071LVT.pdf
 * Keywords: complementary mosfet.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class DMC3071LVT extends Component.withPins({
  "G_1": "1",
  "S_5": "5",
  "D_6": "6",
  "S_2": "2",
  "G_3": "3",
  "D_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G_1: "input", S_5: "passive", D_6: "passive", S_2: "passive", G_3: "input", D_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMC3071LVT";
  override referencePrefix = "Q";
}

/**
 * 20V Vds, 0.63 Id, N-Channel MOSFET with ESD protection, SOT-523
 *
 * KiCad symbol: `Transistor_FET:DMG1012T`. Reference prefix: `Q`.
 * Footprint filters: SOT?523*.
 * @see https://www.diodes.com/assets/Datasheets/ds31783.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-523.
 */
export class DMG1012T extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMG1012T";
  override referencePrefix = "Q";
}

/**
 * -3A Id, -20V Vds, P-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMG2301L`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/DMG2301L.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMG2301L extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMG2301L";
  override referencePrefix = "Q";
}

/**
 * 4.2A Id, 20V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMG2302U`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/DMG2302U.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMG2302U extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMG2302U";
  override referencePrefix = "Q";
}

/**
 * 4A Id, 30V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMG3402L`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/DMG3402L.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMG3402L extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMG3402L";
  override referencePrefix = "Q";
}

/**
 * 5.8A Id, 30V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMG3404L`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/DMG3404L.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMG3404L extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMG3404L";
  override referencePrefix = "Q";
}

/**
 * 3.6A Id, 30V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMG3406L`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/DMG3406L.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMG3406L extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMG3406L";
  override referencePrefix = "Q";
}

/**
 * 4.2A Id, 20V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMG3414U`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ds31739.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMG3414U extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMG3414U";
  override referencePrefix = "Q";
}

/**
 * 4A Id, 30V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMG3418L`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/DMG3418L.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMG3418L extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMG3418L";
  override referencePrefix = "Q";
}

/**
 * 4.2A Id, 20V Vds, Common-Drain, Dual Half Bridge N-Channel MOSFET, 28mOhm Ron, SOT-23-6
 *
 * KiCad symbol: `Transistor_FET:DMG9926UDM`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/ds31770.pdf
 * Keywords: Dual Half Bridge N-Channel MOSFET Logic Level Common Drain.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class DMG9926UDM extends Component.withPins({
  "D1": "1",
  "S1/D2_2": "2",
  "S2": "3",
  "G2": "4",
  "S1/D2_5": "5",
  "G1": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D1: "passive", "S1/D2_2": "passive", S2: "passive", G2: "input", "S1/D2_5": "passive", G1: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMG9926UDM";
  override referencePrefix = "Q";
}

/**
 * 1.6A Id, 100V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN10H220L`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/DMN10H220L.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN10H220L extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN10H220L";
  override referencePrefix = "Q";
}

/**
 * 0.7A Id, 100V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN10H700S`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/DMN10H700S.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN10H700S extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN10H700S";
  override referencePrefix = "Q";
}

/**
 * 1A Id, 130V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN13H750S`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/DMN13H750S.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN13H750S extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN13H750S";
  override referencePrefix = "Q";
}

/**
 * 20V Vds, 6A Id, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN2040U`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/DMN2040U.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN2040U extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN2040U";
  override referencePrefix = "Q";
}

/**
 * 6.4A Id, 20V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN2041L`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/products_inactive_data/DMN2041L.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN2041L extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN2041L";
  override referencePrefix = "Q";
}

/**
 * 5.9A Id, 20V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN2050L`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ds31502.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN2050L extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN2050L";
  override referencePrefix = "Q";
}

/**
 * 4A Id, 20V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN2056U`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/DMN2056U.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN2056U extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN2056U";
  override referencePrefix = "Q";
}

/**
 * 4.6A Id, 20V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN2058U`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/DMN2058U.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN2058U extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN2058U";
  override referencePrefix = "Q";
}

/**
 * 4.2A Id, 20V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN2075U`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/DMN2075U.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN2075U extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN2075U";
  override referencePrefix = "Q";
}

/**
 * 2A Id, 20V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN2230U`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ds31180.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN2230U extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN2230U";
  override referencePrefix = "Q";
}

/**
 * 0.27A Id, 240V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN24H11DS`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/DMN24H11DS.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN24H11DS extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN24H11DS";
  override referencePrefix = "Q";
}

/**
 * 0.48A Id, 240V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN24H3D5L`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/DMN24H3D5L.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN24H3D5L extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN24H3D5L";
  override referencePrefix = "Q";
}

/**
 * 17.6A Id, 30V Vds, N-Channel Power MOSFET, 4.4mOhm Ron, 86nC Qg (typ), PowerDI3333-8
 *
 * KiCad symbol: `Transistor_FET:DMN3008SFG`. Reference prefix: `Q`.
 * Footprint filters: Diodes*PowerDI3333*.
 * @see https://www.diodes.com/assets/Datasheets/DMN3008SFG.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_SON:Diodes_PowerDI3333-8.
 */
export class DMN3008SFG extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN3008SFG";
  override referencePrefix = "Q";
}

/**
 * 6.9A Id, 30V Vds, N-Channel MOSFET, SOT-23-6
 *
 * KiCad symbol: `Transistor_FET:DMN3033LDM`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/ds31345.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class DMN3033LDM extends Component.withPins({
  "D_1": "1",
  "D_2": "2",
  "G": "3",
  "S": "4",
  "D_5": "5",
  "D_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D_1: "passive", D_2: "passive", G: "input", S: "passive", D_5: "passive", D_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN3033LDM";
  override referencePrefix = "Q";
}

/**
 * 5.8A Id, 30V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN3042L`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/DMN3042L.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN3042L extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN3042L";
  override referencePrefix = "Q";
}

/**
 * 5.8A Id, 30V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN3051L`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ds31347.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN3051L extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN3051L";
  override referencePrefix = "Q";
}

/**
 * 0.25A Id, 300V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN30H4D0L`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/DMN30H4D0L.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN30H4D0L extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN30H4D0L";
  override referencePrefix = "Q";
}

/**
 * 3.3A Id, 30V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN3110S`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/DMN3110S.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN3110S extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN3110S";
  override referencePrefix = "Q";
}

/**
 * 3.8A Id, 30V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN3150L`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ds31126.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN3150L extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN3150L";
  override referencePrefix = "Q";
}

/**
 * Common Source Dual 400mA Id, 30V Vds, N-Channel MOSFET, 1.5Ohm Ron, SOT-353
 *
 * KiCad symbol: `Transistor_FET:DMN32D2LDF`. Reference prefix: `Q`.
 * Footprint filters: SOT?353*.
 * @see https://www.diodes.com/assets/Datasheets/ds31238.pdf
 * Keywords: N-FET.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class DMN32D2LDF extends Component.withPins({
  "G1": "1",
  "S": "2",
  "G2": "3",
  "D2": "4",
  "D1": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G1: "input", S: "passive", G2: "input", D2: "passive", D1: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN32D2LDF";
  override referencePrefix = "Q";
}

/**
 * 2A Id, 30V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN3300U`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ds31181.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN3300U extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN3300U";
  override referencePrefix = "Q";
}

/**
 * 5.8A Id, 30V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN3404L`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ds31787.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN3404L extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN3404L";
  override referencePrefix = "Q";
}

/**
 * 2.5A Id, 60V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN6075S`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/DMN6075S.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN6075S extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN6075S";
  override referencePrefix = "Q";
}

/**
 * 600V Vds, 80mA Id, N-Channel MOSFET with ESD protection, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN60H080DS`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/DMN60H080DS.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN60H080DS extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN60H080DS";
  override referencePrefix = "Q";
}

/**
 * 2.3A Id, 60V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN6140L`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/DMN6140L.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN6140L extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN6140L";
  override referencePrefix = "Q";
}

/**
 * 60V Vds, 0.470A Id, N-Channel MOSFET for switching inductive loads , SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN61D8LQ`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/DMN61D8LQ.pdf
 * Keywords: N-Channel MOSFET relay logic-level.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN61D8LQ extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN61D8LQ";
  override referencePrefix = "Q";
}

/**
 * 0.21A Id, 60V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN67D7L`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/DMN67D7L.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN67D7L extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN67D7L";
  override referencePrefix = "Q";
}

/**
 * 0.21A Id, 60V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMN67D8L`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/DMN67D8L.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMN67D8L extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMN67D8L";
  override referencePrefix = "Q";
}

/**
 * -12A Id, -30V Vds, P-Channel Power MOSFET, 9.5mOhm Ron, 33.7nC Qg (typ), PowerDI3333-8
 *
 * KiCad symbol: `Transistor_FET:DMP3013SFV`. Reference prefix: `Q`.
 * Footprint filters: Diodes*PowerDI3333*.
 * @see https://www.diodes.com/assets/Datasheets/DMP3013SFV.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_SON:Diodes_PowerDI3333-8.
 */
export class DMP3013SFV extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMP3013SFV";
  override referencePrefix = "Q";
}

/**
 * P-MOSFET transistor, gate/source/drain
 *
 * KiCad symbol: `Transistor_FET:Q_PMOS_GSD`. Reference prefix: `Q`.
 * Keywords: transistor PMOS P-MOS P-MOSFET.
 */
export class Q_PMOS_GSD extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_PMOS_GSD";
  override referencePrefix = "Q";
}

/**
 * -3.8A Id, -30V Vds, P-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:DMP3099L`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/DMP3099L.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class DMP3099L extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMP3099L";
  override referencePrefix = "Q";
}

/**
 * -9A Id, -20V Vds, Dual HEXFET P-Channel MOSFET, SO-8
 *
 * KiCad symbol: `Transistor_FET:IRF7324`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.infineon.com/dgdl/irf7324pbf.pdf?fileId=5546d462533600a4015355f5f0861b4b
 * Keywords: Dual HEXFET P-Channel MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class IRF7324 extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "input", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "input", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF7324";
  override referencePrefix = "Q";
}

/**
 * -11.3A Id, -60V Vds, P-Channel Power MOSFET, 55mOhm Ron, 11.9nC Qg (typ), SO-8
 *
 * KiCad symbol: `Transistor_FET:DMP6050SSD`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.diodes.com/assets/Datasheets/DMP6050SSD.pdf
 * Keywords: Dual PMOS P-MOS.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class DMP6050SSD extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "input", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "input", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMP6050SSD";
  override referencePrefix = "Q";
}

/**
 * 60A Id, 60V Vds, N-Channel Enhancement Mode MOSFET, 7.5mOhm Ron, 50.4nC Qg(typ), PowerDI-3333-8
 *
 * KiCad symbol: `Transistor_FET:DMT6008LFG`. Reference prefix: `Q`.
 * Footprint filters: Diodes*PowerDI3333*.
 * @see https://www.diodes.com/assets/Datasheets/DMT6008LFG.pdf
 * Keywords: Power MOSFET N-MOS.
 * Default footprint: Package_SON:Diodes_PowerDI3333-8.
 */
export class DMT6008LFG extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:DMT6008LFG";
  override referencePrefix = "Q";
}

/**
 * 60 V E-mode GaN transistor, RdsOn 45 mOhm, 1.7A Id, EPC_BGA-4_0.9x0.9mm
 *
 * KiCad symbol: `Transistor_FET:EPC2035`. Reference prefix: `Q`.
 * Footprint filters: EPC?BGA*0.9x0.9mm?Layout2x2?P0.45mm*.
 * @see https://epc-co.com/epc/Portals/0/epc/documents/datasheets/EPC2035_datasheet.pdf
 * Keywords: hemt enhancement.
 * Default footprint: Package_BGA:EPC_BGA-4_0.9x0.9mm_Layout2x2_P0.45mm.
 */
export class EPC2035 extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "D": "3",
  "S_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", D: "passive", S_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:EPC2035";
  override referencePrefix = "Q";
}

/**
 * 100 V E-mode GaN transistor, RdsOn 73 mOhm, 1.7A Id, EPC_BGA-4_0.9x0.9mm
 *
 * KiCad symbol: `Transistor_FET:EPC2036`. Reference prefix: `Q`.
 * Footprint filters: EPC?BGA*0.9x0.9mm?Layout2x2?P0.45mm*.
 * @see https://epc-co.com/epc/Portals/0/epc/documents/datasheets/EPC2036_datasheet.pdf
 * Keywords: hemt enhancement.
 * Default footprint: Package_BGA:EPC_BGA-4_0.9x0.9mm_Layout2x2_P0.45mm.
 */
export class EPC2036 extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "D": "3",
  "S_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", D: "passive", S_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:EPC2036";
  override referencePrefix = "Q";
}

/**
 * 100 V E-mode GaN transistor, RdsOn 550 mOhm, 1.7A Id, EPC_BGA-4_0.9x0.9mm
 *
 * KiCad symbol: `Transistor_FET:EPC2037`. Reference prefix: `Q`.
 * Footprint filters: EPC?BGA*0.9x0.9mm?Layout2x2?P0.45mm*.
 * @see https://epc-co.com/epc/Portals/0/epc/documents/datasheets/EPC2037_datasheet.pdf
 * Keywords: hemt enhancement.
 * Default footprint: Package_BGA:EPC_BGA-4_0.9x0.9mm_Layout2x2_P0.45mm.
 */
export class EPC2037 extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "D": "3",
  "S_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", D: "passive", S_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:EPC2037";
  override referencePrefix = "Q";
}

/**
 * 100 V E-mode GaN transistor, RdsOn 3.3 Ohm, 0.5A Id, Integrated Reverse Gate Clamp Diode, EPC_BGA-4_0.9x0.9mm
 *
 * KiCad symbol: `Transistor_FET:EPC2038`. Reference prefix: `Q`.
 * Footprint filters: EPC?BGA*0.9x0.9mm?Layout2x2?P0.45mm*.
 * @see https://epc-co.com/epc/Portals/0/epc/documents/datasheets/EPC2038_datasheet.pdf
 * Keywords: hemt enhancement.
 * Default footprint: Package_BGA:EPC_BGA-4_0.9x0.9mm_Layout2x2_P0.45mm.
 */
export class EPC2038 extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "D": "3",
  "S_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", D: "passive", S_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:EPC2038";
  override referencePrefix = "Q";
}

/**
 * 80 V E-mode GaN transistor, RdsOn 80 mOhm, 1.7A Id, EPC_BGA-4_0.9x0.9mm
 *
 * KiCad symbol: `Transistor_FET:EPC2203`. Reference prefix: `Q`.
 * Footprint filters: EPC?BGA*0.9x0.9mm?Layout2x2?P0.45mm*.
 * @see https://epc-co.com/epc/Portals/0/epc/documents/datasheets/EPC2203_datasheet.pdf
 * Keywords: hemt enhancement.
 * Default footprint: Package_BGA:EPC_BGA-4_0.9x0.9mm_Layout2x2_P0.45mm.
 */
export class EPC2203 extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "D": "3",
  "S_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", D: "passive", S_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:EPC2203";
  override referencePrefix = "Q";
}

/**
 * 65 V E-mode GaN transistor, RdsOn 3.3 Ohm, 0.5A Id, Integrated Reverse Gate Clamp Diode, EPC_BGA-4_0.9x0.9mm
 *
 * KiCad symbol: `Transistor_FET:EPC2219`. Reference prefix: `Q`.
 * Footprint filters: EPC?BGA*0.9x0.9mm?Layout2x2?P0.45mm*.
 * @see https://epc-co.com/epc/Portals/0/epc/documents/datasheets/EPC2219_datasheet.pdf
 * Keywords: hemt enhancement.
 * Default footprint: Package_BGA:EPC_BGA-4_0.9x0.9mm_Layout2x2_P0.45mm.
 */
export class EPC2219 extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "D": "3",
  "S_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", D: "passive", S_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:EPC2219";
  override referencePrefix = "Q";
}

/**
 * 1.4A Id, 150V Vds, N-Channel MOSFET, 425mOhm Ron, SuperSOT-6
 *
 * KiCad symbol: `Transistor_FET:FDC2512`. Reference prefix: `Q`.
 * Footprint filters: SuperSOT*.
 * @see https://www.onsemi.com/pub/Collateral/FDC2512-D.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SuperSOT-6.
 */
export class FDC2512 extends Component.withPins({
  "D_1": "1",
  "D_2": "2",
  "G": "3",
  "S": "4",
  "D_5": "5",
  "D_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D_1: "passive", D_2: "passive", G: "passive", S: "passive", D_5: "passive", D_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDC2512";
  override referencePrefix = "Q";
}

/**
 * -2.3A, 20V Vds, Integrated load switch, P-Channel MOSFET driven by small N-Channel MOSFET, TSOT-23-6
 *
 * KiCad symbol: `Transistor_FET:FDC6330L`. Reference prefix: `Q`.
 * Footprint filters: TSOT?23*.
 * @see https://www.onsemi.com/pub/Collateral/FDC6330L-D.PDF
 * Keywords: complementary mosfet.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class FDC6330L extends Component.withPins({
  "S1": "1",
  "D2_2": "2",
  "D2_3": "3",
  "S2": "4",
  "G1": "5",
  "D1": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", D2_2: "passive", D2_3: "passive", S2: "passive", G1: "passive", D1: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDC6330L";
  override referencePrefix = "Q";
}

/**
 * 2.3A Id, 150V Vds, N-Channel MOSFET, 144mOhm Ron, SuperSOT-6
 *
 * KiCad symbol: `Transistor_FET:FDC86244`. Reference prefix: `Q`.
 * Footprint filters: SuperSOT*.
 * @see https://www.onsemi.com/pub/Collateral/FDC86244-D.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SuperSOT-6.
 */
export class FDC86244 extends Component.withPins({
  "D_1": "1",
  "D_2": "2",
  "G": "3",
  "S": "4",
  "D_5": "5",
  "D_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D_1: "passive", D_2: "passive", G: "passive", S: "passive", D_5: "passive", D_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDC86244";
  override referencePrefix = "Q";
}

/**
 * 0.7A Id, 20V Vds, Dual N-Channel MOSFET, 300mOhm Ron, SC-70-6
 *
 * KiCad symbol: `Transistor_FET:FDG6335N`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see http://www.gneic.com/product/datasheet/FDG6335N-1122853.pdf
 * Keywords: Dual N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class FDG6335N extends Component.withPins({
  "S_1": "1",
  "G_2": "2",
  "D_6": "6",
  "D_3": "3",
  "S_4": "4",
  "G_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", G_2: "passive", D_6: "passive", D_3: "passive", S_4: "passive", G_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDG6335N";
  override referencePrefix = "Q";
}

/**
 * 7A Id, 40V Vds, Dual N-Channel MOSFET, 20mOhm Ron, Power33 Package
 *
 * KiCad symbol: `Transistor_FET:FDMC8032L`. Reference prefix: `Q`.
 * Footprint filters: Fairchild*DualPower33*3x3mm*.
 * @see https://www.onsemi.com/pub/Collateral/FDMC8032L-D.PDF
 * Keywords: Dual N-Channel MOSFET.
 * Default footprint: Package_SON:Fairchild_DualPower33-6_3x3mm.
 */
export class FDMC8032L extends Component.withPins({
  "G1": "1",
  "S1": "2",
  "D1": "5",
  "S2": "3",
  "G2": "4",
  "D2": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G1: "passive", S1: "passive", D1: "passive", S2: "passive", G2: "passive", D2: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDMC8032L";
  override referencePrefix = "Q";
}

/**
 * 55A Id, 30V Vds, N-Channel PowerTrench MOSFET, 0.65mOhm Ron, 285nC Qgmax, -55 to 150 °C, 5x6mm SON8
 *
 * KiCad symbol: `Transistor_FET:FDMS8050`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see https://www.onsemi.com/pub/Collateral/FDMS8050-D.pdf
 * Keywords: powertrench MOSFET fairchild.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class FDMS8050 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDMS8050";
  override referencePrefix = "Q";
}

/**
 * 55A Id, 30V Vds, N-Channel PowerTrench MOSFET, 0.65mOhm Ron, 285nC Qgmax, -55 to 175 °C, 5x6mm SON8
 *
 * KiCad symbol: `Transistor_FET:FDMS8050ET30`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see https://www.onsemi.com/pub/Collateral/FDMS8050ET30-D.pdf
 * Keywords: powertrench MOSFET fairchild.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class FDMS8050ET30 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDMS8050ET30";
  override referencePrefix = "Q";
}

/**
 * 47A Id, 40V Vds, N-Channel PowerTrench MOSFET, 0.85mOhm Ron, 242nC Qgmax, -55 to 150 °C, 5x6mm SON8
 *
 * KiCad symbol: `Transistor_FET:FDMS8350L`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see https://www.onsemi.com/pub/Collateral/FDMS8350L-D.pdf
 * Keywords: powertrench MOSFET fairchild.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class FDMS8350L extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDMS8350L";
  override referencePrefix = "Q";
}

/**
 * 49A Id, 40V Vds, N-Channel PowerTrench MOSFET, 0.85mOhm Ron, 242nC Qgmax, -55 to 175 °C, 5x6mm SON8
 *
 * KiCad symbol: `Transistor_FET:FDMS8350LET40`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see https://www.onsemi.com/pub/Collateral/FDMS8350LET40-D.pdf
 * Keywords: powertrench-MOSFET MOSFET fairchild.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class FDMS8350LET40 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDMS8350LET40";
  override referencePrefix = "Q";
}

/**
 * 16A Id, 100V Vds, N-Channel PowerTrench MOSFET, 4.85mOhm Ron, 62nC Qgmax, -55 to 150 °C, 5x6mm SON8
 *
 * KiCad symbol: `Transistor_FET:FDMS86150`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see https://www.onsemi.com/pub/Collateral/FDMS86150ET100-D.pdf
 * Keywords: powertrench MOSFET fairchild.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class FDMS86150 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDMS86150";
  override referencePrefix = "Q";
}

/**
 * 16A Id, 100V Vds, N-Channel PowerTrench MOSFET, 4.85mOhm Ron, 62nC Qgmax, -55 to 175 °C, 5x6mm SON8
 *
 * KiCad symbol: `Transistor_FET:FDMS86150ET100`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see https://www.mouser.fr/datasheet/2/308/FDMS86150ET100-D-1807744.pdf
 * Keywords: powertrench-MOSFET MOSFET fairchild.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class FDMS86150ET100 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDMS86150ET100";
  override referencePrefix = "Q";
}

/**
 * 14A Id, 100V Vds, N-Channel PowerTrench MOSFET, 6mOhm Ron, 50nC Qgmax, -55 to 150 °C, 5x6mm SON8
 *
 * KiCad symbol: `Transistor_FET:FDMS86152`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see https://www.mouser.fr/datasheet/2/308/FDMS86152-D-1808412.pdf
 * Keywords: powertrench MOSFET fairchild.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class FDMS86152 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDMS86152";
  override referencePrefix = "Q";
}

/**
 * 13.5A Id, 120V Vds, N-Channel Shielded Gate PowerTrench MOSFET, 7.2mOhm Ron, 64nC Qgmax, -55 to 150 °C, 5x6mm SON8
 *
 * KiCad symbol: `Transistor_FET:FDMS86202`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see https://www.mouser.fr/datasheet/2/308/FDMS86202-D-1808220.pdf
 * Keywords: shielded-gate-powertrench MOSFET fairchild.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class FDMS86202 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDMS86202";
  override referencePrefix = "Q";
}

/**
 * 13.5A Id, 120V Vds, N-Channel Shielded Gate PowerTrench MOSFET, 7.2mOhm Ron, 64nC Qgmax, -55 to 175 °C, 5x6mm SON8
 *
 * KiCad symbol: `Transistor_FET:FDMS86202ET120`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see https://www.onsemi.com/pub/Collateral/FDMS86202ET120-D.pdf
 * Keywords: shielded-gate-powertrench MOSFET fairchild.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class FDMS86202ET120 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDMS86202ET120";
  override referencePrefix = "Q";
}

/**
 * 10A Id, 150V Vds, N-Channel Shielded Gate PowerTrench MOSFET, 12.4mOhm Ron, 63nC Qgmax, -55 to 150 °C, 5x6mm SON8
 *
 * KiCad symbol: `Transistor_FET:FDMS86255`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see https://www.onsemi.com/pub/Collateral/FDMS86255-D.pdf
 * Keywords: shielded-gate-powertrench-MOSFET MOSFET fairchild.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class FDMS86255 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDMS86255";
  override referencePrefix = "Q";
}

/**
 * 10A Id, 150V Vds, N-Channel Shielded Gate PowerTrench MOSFET, 12.4mOhm Ron, 63nC Qgmax, -55 to 175 °C, 5x6mm SON8
 *
 * KiCad symbol: `Transistor_FET:FDMS86255ET150`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see https://www.onsemi.com/pub/Collateral/FDMS86255ET150-D.pdf
 * Keywords: shielded-gate-powertrench MOSFET fairchild.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class FDMS86255ET150 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDMS86255ET150";
  override referencePrefix = "Q";
}

/**
 * 25A Id, 80V Vds, N-Channel PowerTrench MOSFET, 2.4mOhm Ron, 155nC Qgmax, -55 to 150 °C, 5x6mm SON8
 *
 * KiCad symbol: `Transistor_FET:FDMS86350`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see https://www.onsemi.com/pub/Collateral/FDMS86350-D.PDF
 * Keywords: powertrench MOSFET fairchild.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class FDMS86350 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDMS86350";
  override referencePrefix = "Q";
}

/**
 * 25A Id, 80V Vds, N-Channel PowerTrench MOSFET, 2.4mOhm Ron, 155nC Qgmax, -55 to 175 °C, 5x6mm SON8
 *
 * KiCad symbol: `Transistor_FET:FDMS86350ET80`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see https://www.onsemi.com/pub/Collateral/FDMS86350ET80-D.pdf
 * Keywords: powertrench MOSFET fairchild.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class FDMS86350ET80 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDMS86350ET80";
  override referencePrefix = "Q";
}

/**
 * 32A Id, 60V Vds, N-Channel PowerTrench MOSFET, 1.65mOhm Ron, 154nC Qgmax, -55 to 150 °C, 5x6mm SON8
 *
 * KiCad symbol: `Transistor_FET:FDMS86550`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see https://www.onsemi.com/pub/Collateral/FDMS86550-D.pdf
 * Keywords: powertrench MOSFET fairchild.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class FDMS86550 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDMS86550";
  override referencePrefix = "Q";
}

/**
 * 32A Id, 60V Vds, N-Channel PowerTrench MOSFET, 1.65mOhm Ron, 154nC Qgmax, -55 to 175 °C, 5x6mm SON8
 *
 * KiCad symbol: `Transistor_FET:FDMS86550ET60`. Reference prefix: `Q`.
 * Footprint filters: TDSON*.
 * @see https://www.onsemi.com/pub/Collateral/FDMS86550ET60-D.pdf
 * Keywords: powertrench MOSFET fairchild.
 * Default footprint: Package_TO_SOT_SMD:TDSON-8-1.
 */
export class FDMS86550ET60 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDMS86550ET60";
  override referencePrefix = "Q";
}

/**
 * 43A Id, 60V Vds, PowerTrench N-Channel Power MOSFET, 6.9mOhm Ron, Qg (typ) 7.9nC 8x8mm MLP
 *
 * KiCad symbol: `Transistor_FET:FDMT80060DC`. Reference prefix: `Q`.
 * Footprint filters: PQFN*8x8*.
 * @see https://www.onsemi.com/pub/Collateral/FDMT80060DC-D.pdf
 * Keywords: PowerTrench Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:PQFN_8x8.
 */
export class FDMT80060DC extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "passive", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDMT80060DC";
  override referencePrefix = "Q";
}

/**
 * 24A Id, 100V Vds, N-Channel Dual Cool PowerTrench MOSFET, 2.95mOhm Ron, 111nC Qgmax, -55 to 150 °C, 8x8mm MLP
 *
 * KiCad symbol: `Transistor_FET:FDMT800100DC`. Reference prefix: `Q`.
 * Footprint filters: PQFN*8x8*.
 * @see https://www.onsemi.com/pub/Collateral/FDMT800100DC-D.pdf
 * Keywords: dual-cool-powertrench MOSFET fairchild.
 * Default footprint: Package_TO_SOT_SMD:PQFN_8x8.
 */
export class FDMT800100DC extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "passive", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDMT800100DC";
  override referencePrefix = "Q";
}

/**
 * 20A Id, 120V Vds, N-Channel Dual cool 88 PowerTrench MOSFET, 4.2mOhm Ron, 107nC Qgmax, -55 to 150 °C, 8x8mm MLP
 *
 * KiCad symbol: `Transistor_FET:FDMT800120DC`. Reference prefix: `Q`.
 * Footprint filters: PQFN*8x8*.
 * @see https://www.onsemi.com/pub/Collateral/FDMT800120DC-D.pdf
 * Keywords: dual-cool-powertrench MOSFET fairchild.
 * Default footprint: Package_TO_SOT_SMD:PQFN_8x8.
 */
export class FDMT800120DC extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "passive", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDMT800120DC";
  override referencePrefix = "Q";
}

/**
 * 15A Id, 150V Vds, N-Channel Dual cool PowerTrench MOSFET, 6.5mOhm Ron, 108nC Qgmax, -55 to 150 °C, 8x8mm MLP
 *
 * KiCad symbol: `Transistor_FET:FDMT800150DC`. Reference prefix: `Q`.
 * Footprint filters: PQFN*8x8*.
 * @see https://www.onsemi.com/pub/Collateral/FDMT800150DC-D.pdf
 * Keywords: dual-cool-powertrench MOSFET fairchild.
 * Default footprint: Package_TO_SOT_SMD:PQFN_8x8.
 */
export class FDMT800150DC extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "passive", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDMT800150DC";
  override referencePrefix = "Q";
}

/**
 * 13A Id, 150V Vds, N-Channel Dual Cool PowerTrench MOSFET, 9.0mOhm Ron, 83nC Qgmax, -55 to 150 °C, 8x8mm MLP
 *
 * KiCad symbol: `Transistor_FET:FDMT800152DC`. Reference prefix: `Q`.
 * Footprint filters: PQFN*8x8*.
 * @see https://www.onsemi.com/pub/Collateral/FDMT800152DC-D.pdf
 * Keywords: dual-cool-powertrench MOSFET fairchild.
 * Default footprint: Package_TO_SOT_SMD:PQFN_8x8.
 */
export class FDMT800152DC extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "passive", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDMT800152DC";
  override referencePrefix = "Q";
}

/**
 * 36A Id, 80V Vds, N-Channel Dual Cool PowerTrench MOSFET, 1.35mOhm Ron, 273nC Qgmax, -55 to 150 °C, 8x8mm MLP
 *
 * KiCad symbol: `Transistor_FET:FDMT80080DC`. Reference prefix: `Q`.
 * Footprint filters: PQFN*8x8*.
 * @see https://www.onsemi.com/pub/Collateral/FDMT80080DC-D.pdf
 * Keywords: dual-cool-powertrench MOSFET fairchild.
 * Default footprint: Package_TO_SOT_SMD:PQFN_8x8.
 */
export class FDMT80080DC extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "passive", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDMT80080DC";
  override referencePrefix = "Q";
}

/**
 * -2A Id, -20V Vds, P-Channel MOSFET, 70mOhm Ron, SOT-23
 *
 * KiCad symbol: `Transistor_FET:FDN340P`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.onsemi.com/pub/Collateral/FDN340P-D.PDF
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class FDN340P extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDN340P";
  override referencePrefix = "Q";
}

/**
 * 14A Id, 30V Vds, HEXFET N-Channel MOSFET, SO-8
 *
 * KiCad symbol: `Transistor_FET:IRF8721PBF-1`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.irf.com/product-info/datasheets/data/irf8721pbf-1.pdf
 * Keywords: HEXFET N-Channel MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class IRF8721PBF_1 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D_5": "5",
  "D_6": "6",
  "D_7": "7",
  "D_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D_5: "passive", D_6: "passive", D_7: "passive", D_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF8721PBF-1";
  override referencePrefix = "Q";
}

/**
 * 3.0A Id, 250V Vds, N-Channel MOSFET, 117mOhm Ron, SOIC-8
 *
 * KiCad symbol: `Transistor_FET:FDS2734`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub/Collateral/FDS2734-D.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class FDS2734 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D_5": "5",
  "D_6": "6",
  "D_7": "7",
  "D_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D_5: "passive", D_6: "passive", D_7: "passive", D_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDS2734";
  override referencePrefix = "Q";
}

/**
 * 4A/-3A Id, 30V/-30 Vdss, Dual N and P-Channel MOSFET, HEXFET, 0.050 / 0.10 ohms Rds(on), SOIC-8
 *
 * KiCad symbol: `Transistor_FET:IRF7309PBF`. Reference prefix: `Q`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/irf7309pbf.pdf?fileId=5546d462533600a4015355f224631b14
 * Keywords: N-Channel.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class IRF7309PBF extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "input", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "input", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF7309PBF";
  override referencePrefix = "Q";
}

/**
 * 4.5A Id, 60V Vds, Dual N and P Channel MOSFET, 55mOhm Ron, 10V Vgs, SO8L
 *
 * KiCad symbol: `Transistor_FET:FDS4559`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/FDS4559-D.PDF
 * Keywords: Dual N-Channel P-Channel MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class FDS4559 extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "input", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "input", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDS4559";
  override referencePrefix = "Q";
}

/**
 * 6.1A Id, 40V Vds, Dual N and P Channel MOSFET, 26mOhm Ron, 10V Vgs, SO8L
 *
 * KiCad symbol: `Transistor_FET:FDS4897AC`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/FDS4897AC-D.pdf
 * Keywords: Dual N-Channel P-Channel MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class FDS4897AC extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "input", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "input", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDS4897AC";
  override referencePrefix = "Q";
}

/**
 * 6.2A Id, 40V Vds, Dual N and P Channel MOSFET, 29mOhm Ron, 10V Vgs, SO8L
 *
 * KiCad symbol: `Transistor_FET:FDS4897C`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/FDS4897C-D.pdf
 * Keywords: Dual N-Channel P-Channel MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class FDS4897C extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "input", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "input", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDS4897C";
  override referencePrefix = "Q";
}

/**
 * 6.5A Id, 30V Vds, N-Channel MOSFET, 38mOhm Ron, SOIC-8
 *
 * KiCad symbol: `Transistor_FET:FDS6630A`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub/Collateral/FDS6630A-D.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class FDS6630A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D_5": "5",
  "D_6": "6",
  "D_7": "7",
  "D_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D_5: "passive", D_6: "passive", D_7: "passive", D_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDS6630A";
  override referencePrefix = "Q";
}

/**
 * 7.5A Id, 20V Vds, Dual N-Channel MOSFET PWM Optimized, 18mOhm Ron, SO-8
 *
 * KiCad symbol: `Transistor_FET:FDS6892A`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/FDS6892A-D.pdf
 * Keywords: Dual N-Channel MOSFET Low Gate Charge.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class FDS6892A extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "passive", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "passive", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDS6892A";
  override referencePrefix = "Q";
}

/**
 * 9.4A Id, 20V Vds, Dual N-Channel MOSFET, 14mOhm Ron, SO-8
 *
 * KiCad symbol: `Transistor_FET:FDS6898A`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/FDS6898A-D.PDF
 * Keywords: Dual N-Channel MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class FDS6898A extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "passive", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "passive", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDS6898A";
  override referencePrefix = "Q";
}

/**
 * 5.5A Id, 30V Vds, Dual N-Channel Logic Level MOSFET, 40mOhm Ron, SO-8
 *
 * KiCad symbol: `Transistor_FET:FDS6930A`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub/Collateral/FDS6930A-D.PDF
 * Keywords: Dual N-Channel MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class FDS6930A extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "passive", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "passive", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDS6930A";
  override referencePrefix = "Q";
}

/**
 * 5.5A Id, 30V Vds, Dual N-Channel Logic Level MOSFET, 38mOhm Ron, SO-8
 *
 * KiCad symbol: `Transistor_FET:FDS6930B`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.onsemi.com/pub/Collateral/FDS6930B-D.PDF
 * Keywords: Dual N-Channel MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class FDS6930B extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "passive", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "passive", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDS6930B";
  override referencePrefix = "Q";
}

/**
 * 7A Id, 35V Vds, Dual N and P Channel MOSFET, 24mOhm Ron, 10V Vgs, SO8L
 *
 * KiCad symbol: `Transistor_FET:FDS8960C`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.mouser.fr/datasheet/2/308/FDS8960C-D-1808807.pdf
 * Keywords: Dual N-Channel P-Channel MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class FDS8960C extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "input", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "input", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDS8960C";
  override referencePrefix = "Q";
}

/**
 * -6.7A Id, -20V Vds, P-Channel HEXFET Power MOSFET, SO-8
 *
 * KiCad symbol: `Transistor_FET:IRF7404`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.infineon.com/dgdl/irf7404.pdf?fileId=5546d462533600a4015355fa2b5b1b9e
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class IRF7404 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D_5": "5",
  "D_6": "6",
  "D_7": "7",
  "D_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D_5: "passive", D_6: "passive", D_7: "passive", D_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF7404";
  override referencePrefix = "Q";
}

/**
 * -5.3A Id, -30V Vds, P-Channel MOSFET, 50mOhm Ron, SO-8
 *
 * KiCad symbol: `Transistor_FET:FDS9435A`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/FDS9435A-D.PDF
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class FDS9435A extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D_5": "5",
  "D_6": "6",
  "D_7": "7",
  "D_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D_5: "passive", D_6: "passive", D_7: "passive", D_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDS9435A";
  override referencePrefix = "Q";
}

/**
 * 6.5A Id, 20V Vds, Dual N-Channel MOSFET, 30mOhm Ron, SO-8
 *
 * KiCad symbol: `Transistor_FET:FDS9926A`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/FDS9926A-D.pdf
 * Keywords: Dual N-Channel MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class FDS9926A extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "passive", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "passive", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDS9926A";
  override referencePrefix = "Q";
}

/**
 * 6.5A Id, 20V Vds, Dual N and P Channel MOSFET, 30mOhm Ron, 4.5V Vgs, SO8L
 *
 * KiCad symbol: `Transistor_FET:FDS9934C`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/FDS9934C-D.pdf
 * Keywords: Dual N-Channel P-Channel MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class FDS9934C extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "input", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "input", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FDS9934C";
  override referencePrefix = "Q";
}

/**
 * -23A Id, -100V Vds, 117mOhm Rds, P-Channel HEXFET Power MOSFET, TO-220
 *
 * KiCad symbol: `Transistor_FET:IRF9540N`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.irf.com/product-info/datasheets/data/irf9540n.pdf
 * Keywords: P-Channel MOSFET HEXFET.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class IRF9540N extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF9540N";
  override referencePrefix = "Q";
}

/**
 * -27A Id, -60V Vds, QFET P-Channel MOSFET, TO-220
 *
 * KiCad symbol: `Transistor_FET:FQP27P06`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.onsemi.com/pub/Collateral/FQP27P06-D.PDF
 * Keywords: QFET P-Channel MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class FQP27P06 extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:FQP27P06";
  override referencePrefix = "Q";
}

/**
 * Bottom-side cooled 650 V E-mode GaN transistor, 7.5A Id, GaN_PX
 *
 * KiCad symbol: `Transistor_FET:GS66502B`. Reference prefix: `Q`.
 * Footprint filters: GaN?Systems?GaNPX*5x6.6mm*Drain2.93x0.6mm*.
 * @see https://gansystems.com/wp-content/uploads/2020/04/GS66502B-DS-Rev-200402.pdf
 * Keywords: gan hemt bottom-side-cooled enhancement-mode.
 * Default footprint: Transistor_Power:GaN_Systems_GaNPX-3_5x6.6mm_Drain2.93x0.6mm.
 */
export class GS66502B extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:GS66502B";
  override referencePrefix = "Q";
}

/**
 * Bottom-side cooled 650 V E-mode GaN transistor, 15A Id, GaN_PX
 *
 * KiCad symbol: `Transistor_FET:GS66504B`. Reference prefix: `Q`.
 * Footprint filters: GaN?Systems?GaNPX*5x6.6mm*Drain3.76x0.6mm*.
 * @see https://gansystems.com/wp-content/uploads/2020/04/GS66504B-DS-Rev-200402.pdf
 * Keywords: gan hemt bottom-side-cooled enhancement-mode.
 * Default footprint: Transistor_Power:GaN_Systems_GaNPX-3_5x6.6mm_Drain3.76x0.6mm.
 */
export class GS66504B extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:GS66504B";
  override referencePrefix = "Q";
}

/**
 * Bottom-side cooled 650 V E-mode GaN transistor, 30A Id, GaN_PX
 *
 * KiCad symbol: `Transistor_FET:GS66508B`. Reference prefix: `Q`.
 * Footprint filters: GaN?Systems?GaNPX*7x8.4mm*.
 * @see https://gansystems.com/wp-content/uploads/2020/04/GS66508B-DS-Rev-200402.pdf
 * Keywords: gan hemt bottom side cooled 650v enhancement mode 30a Id.
 * Default footprint: Transistor_Power:GaN_Systems_GaNPX-4_7x8.4mm.
 */
export class GS66508B extends Component.withPins({
  "D": "1",
  "S": "2",
  "G": "3",
  "SS": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", S: "passive", G: "input", SS: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:GS66508B";
  override referencePrefix = "Q";
}

/**
 * Ultra Low Noise: 0.35 nV/√Hz Typical, Dual Matched N-Channel JFET, TO-78-8
 *
 * KiCad symbol: `Transistor_FET:IF3602`. Reference prefix: `Q`.
 * Footprint filters: TO?78?8*.
 * @see https://www.interfet.com/jfet-datasheets/jfet-if3602-interfet.pdf
 * Keywords: ultra low noise dual matched n-channel jfet.
 * Default footprint: Package_TO_SOT_THT:TO-78-8.
 */
export class IF3602 extends Component.withPins({
  "S1": "1",
  "D1": "2",
  "G1": "3",
  "S2": "5",
  "D2": "6",
  "G2": "7",
  "NC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", D1: "passive", G1: "input", S2: "passive", D2: "passive", G2: "input", NC: "no_connect", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IF3602";
  override referencePrefix = "Q";
}

/**
 * 15A Id, 600V Vds, 70mOhm, N-Channel GaN MOSFET, LSON-8
 *
 * KiCad symbol: `Transistor_FET:IGLD60R070D1`. Reference prefix: `Q`.
 * Footprint filters: Infineon*PG*LSON*1*.
 * @see https://www.infineon.com/dgdl/Infineon-IGLD60R070D1-DataSheet-v02_00-EN.pdf?fileId=5546d46265f064ff016685f03f056511
 * Keywords: N-Channel GaN MOSFET.
 * Default footprint: Package_SON:Infineon_PG-LSON-8-1.
 */
export class IGLD60R070D1 extends Component.withPins({
  "D_1": "1",
  "D_2": "2",
  "D_3": "3",
  "D_4": "4",
  "S_5": "5",
  "S_6": "6",
  "SS": "7",
  "G": "8",
  "S_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D_1: "passive", D_2: "passive", D_3: "passive", D_4: "passive", S_5: "passive", S_6: "passive", SS: "passive", G: "input", S_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IGLD60R070D1";
  override referencePrefix = "Q";
}

/**
 * 10A Id, 600V Vds, 190mOhm, N-Channel GaN MOSFET, LSON-8
 *
 * KiCad symbol: `Transistor_FET:IGLD60R190D1`. Reference prefix: `Q`.
 * Footprint filters: Infineon*PG*LSON*1*.
 * @see https://www.infineon.com/dgdl/Infineon-IGLD60R190D1-DataSheet-v02_00-EN.pdf?fileId=5546d46269e1c019016a6d78ff5e2aba
 * Keywords: N-Channel GaN MOSFET.
 * Default footprint: Package_SON:Infineon_PG-LSON-8-1.
 */
export class IGLD60R190D1 extends Component.withPins({
  "D_1": "1",
  "D_2": "2",
  "D_3": "3",
  "D_4": "4",
  "S_5": "5",
  "S_6": "6",
  "SS": "7",
  "G": "8",
  "S_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D_1: "passive", D_2: "passive", D_3: "passive", D_4: "passive", S_5: "passive", S_6: "passive", SS: "passive", G: "input", S_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IGLD60R190D1";
  override referencePrefix = "Q";
}

/**
 * 31A Id, 600V Vds, 70mOhm, N-Channel GaN MOSFET, PD-DSO-20-85
 *
 * KiCad symbol: `Transistor_FET:IGO60R070D1`. Reference prefix: `Q`.
 * Footprint filters: Infineon*PG*DSO*85*.
 * @see https://www.infineon.com/dgdl/Infineon-IGO60R070D1-DataSheet-v02_01-EN.pdf?fileId=5546d46265f064ff016685f053216514
 * Keywords: N-Channel GaN MOSFET.
 * Default footprint: Package_SO:Infineon_PG-DSO-20-85.
 */
export class IGO60R070D1 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "S_4": "4",
  "S_5": "5",
  "S_6": "6",
  "S_7": "7",
  "SS": "8",
  "G_9": "9",
  "G_10": "10",
  "D_13": "13",
  "D_14": "14",
  "D_15": "15",
  "D_16": "16",
  "D_17": "17",
  "D_18": "18",
  "S_21": "21",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", S_4: "passive", S_5: "passive", S_6: "passive", S_7: "passive", SS: "passive", G_9: "input", G_10: "input", D_13: "passive", D_14: "passive", D_15: "passive", D_16: "passive", D_17: "passive", D_18: "passive", S_21: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IGO60R070D1";
  override referencePrefix = "Q";
}

/**
 * 31A Id, 600V Vds, 70mOhm, N-Channel GaN MOSFET, PD-DSO-20-87
 *
 * KiCad symbol: `Transistor_FET:IGOT60R070D1`. Reference prefix: `Q`.
 * Footprint filters: Infineon*PG*DSO*87*.
 * @see https://www.infineon.com/dgdl/Infineon-IGOT60R070D1-DataSheet-v02_11-EN.pdf?fileId=5546d46265f064ff016685fa65066523
 * Keywords: N-Channel GaN MOSFET.
 * Default footprint: Package_SO:Infineon_PG-DSO-20-87.
 */
export class IGOT60R070D1 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "S_4": "4",
  "S_5": "5",
  "S_6": "6",
  "S_7": "7",
  "SS": "8",
  "G_9": "9",
  "G_10": "10",
  "D_13": "13",
  "D_14": "14",
  "D_15": "15",
  "D_16": "16",
  "D_17": "17",
  "D_18": "18",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", S_4: "passive", S_5: "passive", S_6: "passive", S_7: "passive", SS: "passive", G_9: "input", G_10: "input", D_13: "passive", D_14: "passive", D_15: "passive", D_16: "passive", D_17: "passive", D_18: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IGOT60R070D1";
  override referencePrefix = "Q";
}

/**
 * 31A Id, 600V Vds, 70mOhm, N-Channel GaN MOSFET, HSOF-8
 *
 * KiCad symbol: `Transistor_FET:IGT60R070D1`. Reference prefix: `Q`.
 * Footprint filters: Infineon*PG*HSOF*3*.
 * @see https://www.infineon.com/dgdl/Infineon-IGT60R070D1-DataSheet-v02_01-EN.pdf?fileId=5546d46265f064ff016686028dd56526
 * Keywords: N-Channel GaN MOSFET.
 * Default footprint: Package_TO_SOT_SMD:Infineon_PG-HSOF-8-3_ThermalVias.
 */
export class IGT60R070D1 extends Component.withPins({
  "S": "1",
  "SS": "2",
  "G": "3",
  "D": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S: "passive", SS: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IGT60R070D1";
  override referencePrefix = "Q";
}

/**
 * 31A Id, 400V Vds, 70mOhm, N-Channel GaN MOSFET, HSOF-8
 *
 * KiCad symbol: `Transistor_FET:IGT40R070D1_E8220`. Reference prefix: `Q`.
 * Footprint filters: Infineon*PG*HSOF*3*.
 * @see https://www.infineon.com/dgdl/Infineon-IGT40R070D1%20E8220-DataSheet-v02_00-EN.pdf?fileId=5546d4626afcd350016b269dd8f34ec4
 * Keywords: N-Channel GaN MOSFET.
 * Default footprint: Package_TO_SOT_SMD:Infineon_PG-HSOF-8-3_ThermalVias.
 */
export class IGT40R070D1_E8220 extends Component.withPins({
  "S": "1",
  "SS": "2",
  "G": "3",
  "D": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S: "passive", SS: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IGT40R070D1_E8220";
  override referencePrefix = "Q";
}

/**
 * 12.5A Id, 600V Vds, 190mOhm, N-Channel GaN MOSFET, HSOF-8
 *
 * KiCad symbol: `Transistor_FET:IGT60R190D1S`. Reference prefix: `Q`.
 * Footprint filters: Infineon*PG*HSOF*3*.
 * @see https://www.infineon.com/dgdl/Infineon-IGT60R190D1S-DataSheet-v03_01-EN.pdf?fileId=5546d46265f064ff016685fa29796520
 * Keywords: N-Channel GaN MOSFET.
 * Default footprint: Package_TO_SOT_SMD:Infineon_PG-HSOF-8-3_ThermalVias.
 */
export class IGT60R190D1S extends Component.withPins({
  "S": "1",
  "SS": "2",
  "G": "3",
  "D": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S: "passive", SS: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IGT60R190D1S";
  override referencePrefix = "Q";
}

/**
 * 180A Id, 100V Vds, OptiMOS-T2 N-Channel Power MOSFET, 2.5mOhm Ron, Qg (typ) 156nC, TO-263-6
 *
 * KiCad symbol: `Transistor_FET:IPB180N10S4-02`. Reference prefix: `Q`.
 * Footprint filters: TO?263?6*.
 * @see https://www.infineon.com/dgdl/Infineon-IPB180N10S4_02-DS-v01_00-en.pdf?fileId=db3a30433d1d0bbe013d2129cf8a2f88
 * Keywords: OptiMOS-T2 Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TO-263-6.
 */
export class IPB180N10S4_02 extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "S_3": "3",
  "D": "4",
  "S_5": "5",
  "S_6": "6",
  "S_7": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "passive", S_2: "passive", S_3: "passive", D: "passive", S_5: "passive", S_6: "passive", S_7: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IPB180N10S4-02";
  override referencePrefix = "Q";
}

/**
 * 1.7A Id, 500V Vds, CoolMOS N-Channel Power MOSFET, 3Ohm Ron, 4.3nC Qg (typ), TO-252-2
 *
 * KiCad symbol: `Transistor_FET:IPD50R3K0CE`. Reference prefix: `Q`.
 * Footprint filters: TO?252*.
 * @see https://www.infineon.com/dgdl/IPx50R3K0CE_2_0.pdf?folderId=db3a3043163797a6011637d4bae7003b&fileId=db3a304339dcf4b10139e7e9ff592ce4
 * Keywords: CoolMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:TO-252-2.
 */
export class IPD50R3K0CE extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IPD50R3K0CE";
  override referencePrefix = "Q";
}

/**
 * 47A Id, 600V Vds, 50mOhm, N-Channel MOSFET, CoolMOS G7, PG-HDSOP-10-1 (DDPAK)
 *
 * KiCad symbol: `Transistor_FET:IPDD60R050G7`. Reference prefix: `Q`.
 * Footprint filters: Infineon*PG*HDSOP*.
 * @see https://www.infineon.com/dgdl/Infineon-IPDD60R050G7-DS-v02_00-EN.pdf?fileId=5546d4626102d35a0161707eb2f97810
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:Infineon_PG-HDSOP-10-1.
 */
export class IPDD60R050G7 extends Component.withPins({
  "G": "1",
  "DS": "2",
  "PS_3": "3",
  "PS_4": "4",
  "PS_5": "5",
  "D_6": "6",
  "D_7": "7",
  "D_8": "8",
  "D_9": "9",
  "D_10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", DS: "passive", PS_3: "passive", PS_4: "passive", PS_5: "passive", D_6: "passive", D_7: "passive", D_8: "passive", D_9: "passive", D_10: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IPDD60R050G7";
  override referencePrefix = "Q";
}

/**
 * 29A Id, 600V Vds, 80mOhm, N-Channel MOSFET, CoolMOS G7, PG-HDSOP-10-1 (DDPAK)
 *
 * KiCad symbol: `Transistor_FET:IPDD60R080G7`. Reference prefix: `Q`.
 * Footprint filters: Infineon*PG*HDSOP*.
 * @see https://www.infineon.com/dgdl/Infineon-IPDD60R080G7-DS-v02_00-EN.pdf?fileId=5546d4626102d35a016170882f757a07
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:Infineon_PG-HDSOP-10-1.
 */
export class IPDD60R080G7 extends Component.withPins({
  "G": "1",
  "DS": "2",
  "PS_3": "3",
  "PS_4": "4",
  "PS_5": "5",
  "D_6": "6",
  "D_7": "7",
  "D_8": "8",
  "D_9": "9",
  "D_10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", DS: "passive", PS_3: "passive", PS_4: "passive", PS_5: "passive", D_6: "passive", D_7: "passive", D_8: "passive", D_9: "passive", D_10: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IPDD60R080G7";
  override referencePrefix = "Q";
}

/**
 * 23A Id, 600V Vds, 102mOhm, N-Channel MOSFET, CoolMOS G7, PG-HDSOP-10-1 (DDPAK)
 *
 * KiCad symbol: `Transistor_FET:IPDD60R102G7`. Reference prefix: `Q`.
 * Footprint filters: Infineon*PG*HDSOP*.
 * @see https://www.infineon.com/dgdl/Infineon-IPDD60R102G7-DS-v02_00-EN.pdf?fileId=5546d4626102d35a01617087ee7379ed
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:Infineon_PG-HDSOP-10-1.
 */
export class IPDD60R102G7 extends Component.withPins({
  "G": "1",
  "DS": "2",
  "PS_3": "3",
  "PS_4": "4",
  "PS_5": "5",
  "D_6": "6",
  "D_7": "7",
  "D_8": "8",
  "D_9": "9",
  "D_10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", DS: "passive", PS_3: "passive", PS_4: "passive", PS_5: "passive", D_6: "passive", D_7: "passive", D_8: "passive", D_9: "passive", D_10: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IPDD60R102G7";
  override referencePrefix = "Q";
}

/**
 * 20A Id, 600V Vds, 125mOhm, N-Channel MOSFET, CoolMOS G7, PG-HDSOP-10-1 (DDPAK)
 *
 * KiCad symbol: `Transistor_FET:IPDD60R125G7`. Reference prefix: `Q`.
 * Footprint filters: Infineon*PG*HDSOP*.
 * @see https://www.infineon.com/dgdl/Infineon-IPDD60R125G7-DS-v02_00-EN.pdf?fileId=5546d4626102d35a0161706cba27778f
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:Infineon_PG-HDSOP-10-1.
 */
export class IPDD60R125G7 extends Component.withPins({
  "G": "1",
  "DS": "2",
  "PS_3": "3",
  "PS_4": "4",
  "PS_5": "5",
  "D_6": "6",
  "D_7": "7",
  "D_8": "8",
  "D_9": "9",
  "D_10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", DS: "passive", PS_3: "passive", PS_4: "passive", PS_5: "passive", D_6: "passive", D_7: "passive", D_8: "passive", D_9: "passive", D_10: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IPDD60R125G7";
  override referencePrefix = "Q";
}

/**
 * 16A Id, 600V Vds, 150mOhm, N-Channel MOSFET, CoolMOS G7, PG-HDSOP-10-1 (DDPAK)
 *
 * KiCad symbol: `Transistor_FET:IPDD60R150G7`. Reference prefix: `Q`.
 * Footprint filters: Infineon*PG*HDSOP*.
 * @see https://www.infineon.com/dgdl/Infineon-IPDD60R150G7-DS-v02_00-EN.pdf?fileId=5546d4626102d35a016170806aa57863
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:Infineon_PG-HDSOP-10-1.
 */
export class IPDD60R150G7 extends Component.withPins({
  "G": "1",
  "DS": "2",
  "PS_3": "3",
  "PS_4": "4",
  "PS_5": "5",
  "D_6": "6",
  "D_7": "7",
  "D_8": "8",
  "D_9": "9",
  "D_10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", DS: "passive", PS_3: "passive", PS_4: "passive", PS_5: "passive", D_6: "passive", D_7: "passive", D_8: "passive", D_9: "passive", D_10: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IPDD60R150G7";
  override referencePrefix = "Q";
}

/**
 * 13A Id, 600V Vds, 190mOhm, N-Channel MOSFET, CoolMOS G7, PG-HDSOP-10-1 (DDPAK)
 *
 * KiCad symbol: `Transistor_FET:IPDD60R190G7`. Reference prefix: `Q`.
 * Footprint filters: Infineon*PG*HDSOP*.
 * @see https://www.infineon.com/dgdl/Infineon-IPDD60R190G7-DS-v02_00-EN.pdf?fileId=5546d4626102d35a01617087dc0f79ea
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:Infineon_PG-HDSOP-10-1.
 */
export class IPDD60R190G7 extends Component.withPins({
  "G": "1",
  "DS": "2",
  "PS_3": "3",
  "PS_4": "4",
  "PS_5": "5",
  "D_6": "6",
  "D_7": "7",
  "D_8": "8",
  "D_9": "9",
  "D_10": "10",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", DS: "passive", PS_3: "passive", PS_4: "passive", PS_5: "passive", D_6: "passive", D_7: "passive", D_8: "passive", D_9: "passive", D_10: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IPDD60R190G7";
  override referencePrefix = "Q";
}

/**
 * 45A Id, 60V Vds, Single N-Channel Power MOSFET, 6mOhm Ron, TO-220
 *
 * KiCad symbol: `Transistor_FET:IPP060N06N`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.infineon.com/dgdl/Infineon-IPP060N06N-DS-v02_02-en.pdf?fileId=db3a30433727a44301372c06d9d7498a
 * Keywords: N-Channel Power MOSFET Infineon.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class IPP060N06N extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IPP060N06N";
  override referencePrefix = "Q";
}

/**
 * 300A Id, 80V Vds, OptiMOS N-Channel Power MOSFET, 1.2mOhm Ron, Qg (typ) 178.0nC, PG-HSOF-8
 *
 * KiCad symbol: `Transistor_FET:IPT012N08N5`. Reference prefix: `Q`.
 * Footprint filters: Infineon*PG*HSOF*.
 * @see http://www.infineon.com/dgdl/Infineon-IPT012N08N5-DS-v02_01-EN.pdf?fileId=5546d4624a75e5f1014aca59127a1eb9
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:Infineon_PG-HSOF-8-1.
 */
export class IPT012N08N5 extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IPT012N08N5";
  override referencePrefix = "Q";
}

/**
 * 300A Id, 100V Vds, OptiMOS N-Channel Power MOSFET, 1.5mOhm Ron, Qg (typ) 169.0nC, PG-HSOF-8
 *
 * KiCad symbol: `Transistor_FET:IPT015N10N5`. Reference prefix: `Q`.
 * Footprint filters: Infineon*PG*HSOF*.
 * @see http://www.infineon.com/dgdl/Infineon-IPT015N10N5-DS-v02_01-EN.pdf?fileId=5546d4624a75e5f1014ac94680661aff
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:Infineon_PG-HSOF-8-1.
 */
export class IPT015N10N5 extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IPT015N10N5";
  override referencePrefix = "Q";
}

/**
 * 300A Id, 100V Vds, OptiMOS N-Channel Power MOSFET, 2.0mOhm Ron, Qg (typ) 156.0nC, PG-HSOF-8
 *
 * KiCad symbol: `Transistor_FET:IPT020N10N3`. Reference prefix: `Q`.
 * Footprint filters: Infineon*PG*HSOF*.
 * @see http://www.infineon.com/dgdl/Infineon-IPT020N10N3-DS-v02_00-en.pdf?fileId=db3a30433e9d5d11013e9e58035b0158
 * Keywords: OptiMOS Power MOSFET N-MOS.
 * Default footprint: Package_TO_SOT_SMD:Infineon_PG-HSOF-8-1.
 */
export class IPT020N10N3 extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IPT020N10N3";
  override referencePrefix = "Q";
}

/**
 * N-MOSFET transistor, gate/driver source/source/drain
 *
 * KiCad symbol: `Transistor_FET:Q_NMOS_GSSD`. Reference prefix: `Q`.
 * Keywords: transistor NMOS N-MOS N-MOSFET.
 */
export class Q_NMOS_GSSD extends Component.withPins({
  "G": "1",
  "DS": "2",
  "S": "3",
  "D": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", DS: "passive", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_NMOS_GSSD";
  override referencePrefix = "Q";
}

/**
 * 48A Id, 650V Vds, 55mOhm, N-Channel MOSFET, CoolMOS CM8, PG-HDSOP-8-2
 *
 * KiCad symbol: `Transistor_FET:IPT60R055CM8`. Reference prefix: `Q`.
 * Footprint filters: Infineon*PG*HSOF*.
 * @see https://www.infineon.com/assets/row/public/documents/24/49/infineon-ipt60r055cm8-datasheet-en.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:Infineon_PG-HSOF-8-2.
 */
export class IPT60R055CM8 extends Component.withPins({
  "G": "1",
  "DS": "2",
  "S": "3",
  "D": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", DS: "passive", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IPT60R055CM8";
  override referencePrefix = "Q";
}

/**
 * 110A Id, 55V Vds, Single N-Channel HEXFET Power MOSFET, 8mOhm Ron, TO-220AB
 *
 * KiCad symbol: `Transistor_FET:IRF3205`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.irf.com/product-info/datasheets/data/irf3205.pdf
 * Keywords: Single N-Channel HEXFET Power MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class IRF3205 extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF3205";
  override referencePrefix = "Q";
}

/**
 * 159A Id, 40V Vds, 1.85mOhm Rds, N-Channel MOSFET, DirectFET MF
 *
 * KiCad symbol: `Transistor_FET:IRF40DM229`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MF*.
 * @see https://www.infineon.com/dgdl/Infineon-IRF40DM229-DS-v02_00-EN.pdf?fileId=5546d462557e6e890155a15c899160ea
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MF.
 */
export class IRF40DM229 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF40DM229";
  override referencePrefix = "Q";
}

/**
 * -74A Id, -55V Vds, Single P-Channel HEXFET Power MOSFET, 20mOhm Ron, TO-220AB
 *
 * KiCad symbol: `Transistor_FET:IRF4905`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.infineon.com/dgdl/irf4905.pdf?fileId=5546d462533600a4015355e32165197c
 * Keywords: Single P-Channel HEXFET Power MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class IRF4905 extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF4905";
  override referencePrefix = "Q";
}

/**
 * 33A Id, 100V Vds, HEXFET N-Channel MOSFET, TO-220
 *
 * KiCad symbol: `Transistor_FET:IRF540N`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.irf.com/product-info/datasheets/data/irf540n.pdf
 * Keywords: HEXFET N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class IRF540N extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF540N";
  override referencePrefix = "Q";
}

/**
 * 130A Id, 60V Vds, 2.9mOhm Rds, N-Channel MOSFET, DirectFET ME
 *
 * KiCad symbol: `Transistor_FET:IRF60DM206`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*ME*.
 * @see https://www.infineon.com/dgdl/irf60dm206.pdf?fileId=5546d462533600a4015355e433aa19ca
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_ME.
 */
export class IRF60DM206 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF60DM206";
  override referencePrefix = "Q";
}

/**
 * 150A Id, 40V Vds, 3.4mOhm Rds, N-Channel MOSFET, DirectFET MT
 *
 * KiCad symbol: `Transistor_FET:IRF6613`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MT*.
 * @see https://www.infineon.com/dgdl/irf6613pbf.pdf?fileId=5546d462533600a4015355e82b9b1a0d
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MT.
 */
export class IRF6613 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6613";
  override referencePrefix = "Q";
}

/**
 * 12.7A Id, 40V Vds, 8.3mOhm Rds, N-Channel MOSFET, DirectFET ST
 *
 * KiCad symbol: `Transistor_FET:IRF6614`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*ST*.
 * @see https://www.infineon.com/dgdl/irf6614pbf.pdf?fileId=5546d462533600a4015355e8346c1a0f
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_ST.
 */
export class IRF6614 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6614";
  override referencePrefix = "Q";
}

/**
 * 19A Id, 40V Vds, 5mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:IRF6616`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/irf6616pbf.pdf?fileId=5546d462533600a4015355e843461a13
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class IRF6616 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6616";
  override referencePrefix = "Q";
}

/**
 * 55A Id, 30V Vds, 8.1mOhm Rds, N-Channel MOSFET, DirectFET ST
 *
 * KiCad symbol: `Transistor_FET:IRF6617`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*ST*.
 * @see https://www.infineon.com/dgdl/irf6617pbf.pdf?fileId=5546d462533600a4015355e853f21a17
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_ST.
 */
export class IRF6617 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6617";
  override referencePrefix = "Q";
}

/**
 * 170A Id, 30V Vds, 2.2mOhm Rds, N-Channel MOSFET, DirectFET MT
 *
 * KiCad symbol: `Transistor_FET:IRF6618`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MT*.
 * @see https://www.infineon.com/dgdl/irf6618pbf.pdf?fileId=5546d462533600a4015355e862c21a1b
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MT.
 */
export class IRF6618 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6618";
  override referencePrefix = "Q";
}

/**
 * 150A Id, 20V Vds, 2.7mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:IRF6620`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/irf6620pbf.pdf?fileId=5546d462533600a4015355e8831d1a23
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class IRF6620 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6620";
  override referencePrefix = "Q";
}

/**
 * 12A Id, 30V Vds, 9.1mOhm Rds, N-Channel MOSFET, DirectFET SQ
 *
 * KiCad symbol: `Transistor_FET:IRF6621`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*SQ*.
 * @see https://www.infineon.com/dgdl/irf6621pbf.pdf?fileId=5546d462533600a4015355e8923b1a27
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_SQ.
 */
export class IRF6621 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6621";
  override referencePrefix = "Q";
}

/**
 * 15A Id, 25V Vds, 6.3mOhm Rds, N-Channel MOSFET, DirectFET SQ
 *
 * KiCad symbol: `Transistor_FET:IRF6622`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*SQ*.
 * @see https://www.infineon.com/dgdl/irf6622pbf.pdf?fileId=5546d462533600a4015355e89a3a1a29
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_SQ.
 */
export class IRF6622 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6622";
  override referencePrefix = "Q";
}

/**
 * 55A Id, 20V Vds, 5.7mOhm Rds, N-Channel MOSFET, DirectFET ST
 *
 * KiCad symbol: `Transistor_FET:IRF6623`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*ST*.
 * @see https://www.infineon.com/dgdl/irf6623pbf.pdf?fileId=5546d462533600a4015355e8aa811a2d
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_ST.
 */
export class IRF6623 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6623";
  override referencePrefix = "Q";
}

/**
 * 27A Id, 25V Vds, 2.5mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:IRF6628`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/irf6628pbf.pdf?fileId=5546d462533600a4015355e8c0d71a33
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class IRF6628 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6628";
  override referencePrefix = "Q";
}

/**
 * 13A Id, 30V Vds, 7.8mOhm Rds, N-Channel MOSFET, DirectFET SQ
 *
 * KiCad symbol: `Transistor_FET:IRF6631`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*SQ*.
 * @see https://www.infineon.com/dgdl/irf6631pbf.pdf?fileId=5546d462533600a4015355e8d0561a37
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_SQ.
 */
export class IRF6631 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6631";
  override referencePrefix = "Q";
}

/**
 * 32A Id, 30V Vds, 1.8mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:IRF6635`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/irf6635pbf.pdf?fileId=5546d462533600a4015355e8e7ab1a3d
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class IRF6635 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6635";
  override referencePrefix = "Q";
}

/**
 * 18A Id, 20V Vds, 4.5mOhm Rds, N-Channel MOSFET, DirectFET ST
 *
 * KiCad symbol: `Transistor_FET:IRF6636`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*ST*.
 * @see https://www.infineon.com/dgdl/irf6636pbf.pdf?fileId=5546d462533600a4015355e8f7b31a41
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_ST.
 */
export class IRF6636 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6636";
  override referencePrefix = "Q";
}

/**
 * 14A Id, 30V Vds, 7.7mOhm Rds, N-Channel MOSFET, DirectFET MP
 *
 * KiCad symbol: `Transistor_FET:IRF6637`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MP*.
 * @see https://www.infineon.com/dgdl/irf6637pbf.pdf?fileId=5546d462533600a4015355ec1fab1a45
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MP.
 */
export class IRF6637 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6637";
  override referencePrefix = "Q";
}

/**
 * 26A Id, 200V Vds, 59.9mOhm Rds, N-Channel MOSFET, DirectFET MZ
 *
 * KiCad symbol: `Transistor_FET:IRF6641`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MZ*.
 * @see https://www.infineon.com/dgdl/irf6641pbf.pdf?fileId=5546d462533600a4015355ec30311a49
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MZ.
 */
export class IRF6641 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6641";
  override referencePrefix = "Q";
}

/**
 * 35A Id, 150V Vds, 34.5mOhm Rds, N-Channel MOSFET, DirectFET MZ
 *
 * KiCad symbol: `Transistor_FET:IRF6643`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MZ*.
 * @see https://www.infineon.com/dgdl/irf6643pbf.pdf?fileId=5546d462533600a4015355ec388f1a4b
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MZ.
 */
export class IRF6643 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6643";
  override referencePrefix = "Q";
}

/**
 * 57A Id, 100V Vds, 13mOhm Rds, N-Channel MOSFET, DirectFET MN
 *
 * KiCad symbol: `Transistor_FET:IRF6644`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MN*.
 * @see https://www.infineon.com/dgdl/Infineon-IRF6644-DS-v01_01-EN.pdf?fileId=5546d462533600a4015355ec47ac1a4f
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MN.
 */
export class IRF6644 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6644";
  override referencePrefix = "Q";
}

/**
 * 12A Id, 80V Vds, 9.5mOhm Rds, N-Channel MOSFET, DirectFET MN
 *
 * KiCad symbol: `Transistor_FET:IRF6646`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MN*.
 * @see https://www.infineon.com/dgdl/irf6646pbf.pdf?fileId=5546d462533600a4015355ec5f071a55
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MN.
 */
export class IRF6646 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6646";
  override referencePrefix = "Q";
}

/**
 * 86A Id, 60V Vds, 7mOhm Rds, N-Channel MOSFET, DirectFET MN
 *
 * KiCad symbol: `Transistor_FET:IRF6648`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MN*.
 * @see https://www.infineon.com/dgdl/Infineon-IRF6648-DS-v01_02-EN.pdf?fileId=5546d462533600a4015355ec6e561a59
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MN.
 */
export class IRF6648 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6648";
  override referencePrefix = "Q";
}

/**
 * 4.2A Id, 100V Vds, 62mOhm Rds, N-Channel MOSFET, DirectFET SH
 *
 * KiCad symbol: `Transistor_FET:IRF6655`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*SH*.
 * @see https://www.infineon.com/dgdl/irf6655pbf.pdf?fileId=5546d462533600a4015355ec76961a5b
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_SH.
 */
export class IRF6655 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6655";
  override referencePrefix = "Q";
}

/**
 * 8.3A Id, 100V Vds, 22mOhm Rds, N-Channel MOSFET, DirectFET MN
 *
 * KiCad symbol: `Transistor_FET:IRF6662`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MN*.
 * @see https://www.infineon.com/dgdl/irf6662pbf.pdf?fileId=5546d462533600a4015355ec7edc1a5d
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MN.
 */
export class IRF6662 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6662";
  override referencePrefix = "Q";
}

/**
 * 19A Id, 100V Vds, 62mOhm Rds, N-Channel MOSFET, DirectFET SH
 *
 * KiCad symbol: `Transistor_FET:IRF6665`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*SH*.
 * @see https://www.infineon.com/dgdl/irf6665pbf.pdf?fileId=5546d462533600a4015355ec8dcb1a62
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_SH.
 */
export class IRF6665 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6665";
  override referencePrefix = "Q";
}

/**
 * 55A Id, 80V Vds, 15mOhm Rds, N-Channel MOSFET, DirectFET MN
 *
 * KiCad symbol: `Transistor_FET:IRF6668`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MN*.
 * @see https://www.infineon.com/dgdl/irf6668pbf.pdf?fileId=5546d462533600a4015355ec96b91a64
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MN.
 */
export class IRF6668 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6668";
  override referencePrefix = "Q";
}

/**
 * 13.4A Id, 60V Vds, 11mOhm Rds, N-Channel MOSFET, DirectFET MZ
 *
 * KiCad symbol: `Transistor_FET:IRF6674`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MZ*.
 * @see https://www.infineon.com/dgdl/irf6674pbf.pdf?fileId=5546d462533600a4015355ec9f0d1a66
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MZ.
 */
export class IRF6674 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6674";
  override referencePrefix = "Q";
}

/**
 * 12A Id, 25V Vds, 5.9mOhm Rds, N-Channel MOSFET, DirectFET S1
 *
 * KiCad symbol: `Transistor_FET:IRF6710S2`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*S1*.
 * @see https://www.infineon.com/dgdl/irf6710s2pbf.pdf?fileId=5546d462533600a4015355ece3db1a78
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_S1.
 */
export class IRF6710S2 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6710S2";
  override referencePrefix = "Q";
}

/**
 * 19A Id, 25V Vds, 3.8mOhm Rds, N-Channel MOSFET, DirectFET SQ
 *
 * KiCad symbol: `Transistor_FET:IRF6711S`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*SQ*.
 * @see https://www.infineon.com/dgdl/irf6711spbf.pdf?fileId=5546d462533600a4015355ecec0b1a7a
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_SQ.
 */
export class IRF6711S extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6711S";
  override referencePrefix = "Q";
}

/**
 * 17A Id, 25V Vds, 4.9mOhm Rds, N-Channel MOSFET, DirectFET SQ
 *
 * KiCad symbol: `Transistor_FET:IRF6712S`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*SQ*.
 * @see https://www.infineon.com/dgdl/irf6712spbf.pdf?fileId=5546d462533600a4015355ecf4331a7c
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_SQ.
 */
export class IRF6712S extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6712S";
  override referencePrefix = "Q";
}

/**
 * 22A Id, 25V Vds, 3mOhm Rds, N-Channel MOSFET, DirectFET SQ
 *
 * KiCad symbol: `Transistor_FET:IRF6713S`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*SQ*.
 * @see https://www.infineon.com/dgdl/irf6713spbf.pdf?fileId=5546d462533600a4015355ecfc5c1a7e
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_SQ.
 */
export class IRF6713S extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6713S";
  override referencePrefix = "Q";
}

/**
 * 29A Id, 25V Vds, 2.1mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:IRF6714M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/irf6714mpbf.pdf?fileId=5546d462533600a4015355ed04be1a80
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class IRF6714M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6714M";
  override referencePrefix = "Q";
}

/**
 * 34A Id, 25V Vds, 1.6mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:IRF6715M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/irf6715mpbf.pdf?fileId=5546d462533600a4015355ed0d221a82
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class IRF6715M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6715M";
  override referencePrefix = "Q";
}

/**
 * 39A Id, 25V Vds, 1.6mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:IRF6716M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/irf6716mpbf.pdf?fileId=5546d462533600a4015355ed15241a84
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class IRF6716M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6716M";
  override referencePrefix = "Q";
}

/**
 * 38A Id, 25V Vds, 1.25mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:IRF6717M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/irf6717mpbf.pdf?fileId=5546d462533600a4015355ed1d801a86
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class IRF6717M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6717M";
  override referencePrefix = "Q";
}

/**
 * 61A Id, 25V Vds, 0.7mOhm Rds, N-Channel MOSFET, DirectFET L6
 *
 * KiCad symbol: `Transistor_FET:IRF6718L2`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*L6*.
 * @see https://www.infineon.com/dgdl/irf6718l2pbf.pdf?fileId=5546d462533600a4015355ed25bd1a88
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_L6.
 */
export class IRF6718L2 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6718L2";
  override referencePrefix = "Q";
}

/**
 * 14A Id, 30V Vds, 7.3mOhm Rds, N-Channel MOSFET, DirectFET SQ
 *
 * KiCad symbol: `Transistor_FET:IRF6721S`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*SQ*.
 * @see https://www.infineon.com/dgdl/irf6721spbf.pdf?fileId=5546d462533600a4015355ed33b51a8c
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_SQ.
 */
export class IRF6721S extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6721S";
  override referencePrefix = "Q";
}

/**
 * 13A Id, 30V Vds, 7.7mOhm Rds, N-Channel MOSFET, DirectFET MP
 *
 * KiCad symbol: `Transistor_FET:IRF6722M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MP*.
 * @see https://www.infineon.com/dgdl/irf6722mpbf.pdf?fileId=5546d462533600a4015355ed3c661a8e
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MP.
 */
export class IRF6722M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6722M";
  override referencePrefix = "Q";
}

/**
 * 27A Id, 30V Vds, 2.5mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:IRF6724M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/irf6724mpbf.pdf?fileId=5546d462533600a4015355ed51a01a94
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class IRF6724M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6724M";
  override referencePrefix = "Q";
}

/**
 * 28A Id, 30V Vds, 2.2mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:IRF6725M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/irf6725mpbf.pdf?fileId=5546d462533600a4015355ed59ca1a96
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class IRF6725M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6725M";
  override referencePrefix = "Q";
}

/**
 * 32A Id, 30V Vds, 1.7mOhm Rds, N-Channel MOSFET, DirectFET MT
 *
 * KiCad symbol: `Transistor_FET:IRF6726M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MT*.
 * @see https://www.infineon.com/dgdl/irf6726mpbf.pdf?fileId=5546d462533600a4015355ed61db1a98
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MT.
 */
export class IRF6726M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6726M";
  override referencePrefix = "Q";
}

/**
 * 32A Id, 30V Vds, 1.7mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:IRF6727M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/irf6727mpbf.pdf?fileId=5546d462533600a4015355ed6a331a9a
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class IRF6727M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6727M";
  override referencePrefix = "Q";
}

/**
 * 23A Id, 30V Vds, 2.5mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:IRF6728M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/irf6728mpbf.pdf?fileId=5546d462533600a4015355ed73701a9c
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class IRF6728M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6728M";
  override referencePrefix = "Q";
}

/**
 * 28A Id, 150V Vds, 56mOhm Rds, N-Channel MOSFET, DirectFET MZ
 *
 * KiCad symbol: `Transistor_FET:IRF6775M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MZ*.
 * @see https://www.infineon.com/dgdl/irf6775mpbf.pdf?fileId=5546d462533600a4015355ed84751aa0
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MZ.
 */
export class IRF6775M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6775M";
  override referencePrefix = "Q";
}

/**
 * 19A Id, 200V Vds, 100mOhm Rds, N-Channel MOSFET, DirectFET MZ
 *
 * KiCad symbol: `Transistor_FET:IRF6785`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MZ*.
 * @see https://www.infineon.com/dgdl/irf6785mpbf.pdf?fileId=5546d462533600a4015355ed8cc31aa2
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MZ.
 */
export class IRF6785 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6785";
  override referencePrefix = "Q";
}

/**
 * 32A Id, 25V Vds, 1.8mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:IRF6795M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/irf6795mpbf.pdf?fileId=5546d462533600a4015355ed99cd1aa6
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class IRF6795M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6795M";
  override referencePrefix = "Q";
}

/**
 * 36A Id, 25V Vds, 1.4mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:IRF6797M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/irf6797mpbf.pdf?fileId=5546d462533600a4015355eda2091aa9
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class IRF6797M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6797M";
  override referencePrefix = "Q";
}

/**
 * 37A Id, 25V Vds, 1.3mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:IRF6798M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/irf6798mpbf.pdf?fileId=5546d462533600a4015355edaa4b1aab
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class IRF6798M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6798M";
  override referencePrefix = "Q";
}

/**
 * 16A Id, 25V Vds, 4.2mOhm Rds, Dual N-Channel MOSFET, DirectFET SA
 *
 * KiCad symbol: `Transistor_FET:IRF6802SD`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*SA*.
 * @see https://www.infineon.com/dgdl/irf6802sdpbf.pdf?fileId=5546d462533600a4015355f0a3021ab2
 * Keywords: Dual N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_SA.
 */
export class IRF6802SD extends Component.withPins({
  "D": "1",
  "G1": "2",
  "S1": "3",
  "G2": "4",
  "S2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G1: "input", S1: "passive", G2: "input", S2: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6802SD";
  override referencePrefix = "Q";
}

/**
 * 16A Id, 25V Vds, 5.2mOhm Rds, N-Channel MOSFET, DirectFET S1
 *
 * KiCad symbol: `Transistor_FET:IRF6810S`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*S1*.
 * @see https://www.infineon.com/dgdl/irf6810spbf.pdf?fileId=5546d462533600a4015355f0ab331ab4
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_S1.
 */
export class IRF6810S extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6810S";
  override referencePrefix = "Q";
}

/**
 * 19A Id, 25V Vds, 3.7mOhm Rds, N-Channel MOSFET, DirectFET SQ
 *
 * KiCad symbol: `Transistor_FET:IRF6811S`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*SQ*.
 * @see https://www.infineon.com/dgdl/irf6811spbf.pdf?fileId=5546d462533600a4015355f0b3661ab6
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_SQ.
 */
export class IRF6811S extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6811S";
  override referencePrefix = "Q";
}

/**
 * 28A Id, 25V Vds, 1.7mOhm Rds, N-Channel MOSFET, DirectFET S3C
 *
 * KiCad symbol: `Transistor_FET:IRF6892S`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*S3C*.
 * @see https://www.infineon.com/dgdl/irf6892spbf.pdf?fileId=5546d462533600a4015355f0bb961ab8
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_S3C.
 */
export class IRF6892S extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6892S";
  override referencePrefix = "Q";
}

/**
 * 29A Id, 25V Vds, 1.6mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:IRF6893M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/irf6893mpbf.pdf?fileId=5546d462533600a4015355f0c3de1aba
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class IRF6893M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6893M";
  override referencePrefix = "Q";
}

/**
 * 37A Id, 25V Vds, 1.3mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:IRF6894M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/Infineon-IRF6894M-DS-v02_00-EN.pdf?fileId=5546d462533600a4015355f0cc041abc
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class IRF6894M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6894M";
  override referencePrefix = "Q";
}

/**
 * 35A Id, 25V Vds, 1.1mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:IRF6898M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/irf6898mpbf.pdf?fileId=5546d462533600a4015355f0d4611abe
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class IRF6898M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF6898M";
  override referencePrefix = "Q";
}

/**
 * 93A Id, 100V Vds, 6.5mOhm Rds, N-Channel MOSFET, DirectFET MN
 *
 * KiCad symbol: `Transistor_FET:IRF7171M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MN*.
 * @see https://www.infineon.com/dgdl/irf7171mpbf.pdf?fileId=5546d462533600a4015355f1326f1ad6
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MN.
 */
export class IRF7171M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF7171M";
  override referencePrefix = "Q";
}

/**
 * 6.6A Id, 20V Vdss, Dual N-Channel MOSFET, HEXFET, 0.029 ohms Rds(on), SOIC-8
 *
 * KiCad symbol: `Transistor_FET:IRF7311PBF`. Reference prefix: `Q`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/irf7311pbf.pdf?fileId=5546d462533600a4015355f551ed1b22
 * Keywords: fully-avalanche-rated.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class IRF7311PBF extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "passive", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "passive", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF7311PBF";
  override referencePrefix = "Q";
}

/**
 * 4.7A Id, 55V Vdss, Dual N-Channel MOSFET, HEXFET, 0.050 ohms Rds(on), SOIC-8
 *
 * KiCad symbol: `Transistor_FET:IRF7341PBF`. Reference prefix: `Q`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/irf7341pbf.pdf?fileId=5546d462533600a4015355f64f031b63
 * Keywords: fully-avalanche-rated.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class IRF7341PBF extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "passive", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "passive", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF7341PBF";
  override referencePrefix = "Q";
}

/**
 * 4A Id, 55V Vds, Dual HEXFET N- and P-channel MOSFET, SO-8
 *
 * KiCad symbol: `Transistor_FET:IRF7343PBF`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/irf7343pbf.pdf?fileId=5546d462533600a4015355f68c1a1b73
 * Keywords: Dual HEXFET N-Channel P-Channel MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class IRF7343PBF extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "input", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "input", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF7343PBF";
  override referencePrefix = "Q";
}

/**
 * 10A Id, 400V Vds, N-Channel Power MOSFET, 500mOhm Rds, TO-220AB
 *
 * KiCad symbol: `Transistor_FET:IRF740`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.vishay.com/docs/91054/91054.pdf
 * Keywords: N Channel.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class IRF740 extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF740";
  override referencePrefix = "Q";
}

/**
 * 9.7A Id, 30V Vds, N-Channel HEXFET Power MOSFET, SO-8
 *
 * KiCad symbol: `Transistor_FET:IRF7403`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.infineon.com/dgdl/irf7403pbf.pdf?fileId=5546d462533600a4015355fa23541b9c
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class IRF7403 extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D_5": "5",
  "D_6": "6",
  "D_7": "7",
  "D_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D_5: "passive", D_6: "passive", D_7: "passive", D_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF7403";
  override referencePrefix = "Q";
}

/**
 * 330A Id, 40V Vds, 1.2mOhm Rds, N-Channel MOSFET, DirectFET ME
 *
 * KiCad symbol: `Transistor_FET:IRF7480M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*ME*.
 * @see https://www.infineon.com/dgdl/Infineon-IRF7480M-DS-v01_02-EN.pdf?fileId=5546d462533600a4015355ff8fa41c30
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_ME.
 */
export class IRF7480M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF7480M";
  override referencePrefix = "Q";
}

/**
 * 135A Id, 40V Vds, 2.3mOhm Rds, N-Channel MOSFET, DirectFET MF
 *
 * KiCad symbol: `Transistor_FET:IRF7483M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MF*.
 * @see https://www.infineon.com/dgdl/irf7483mpbf.pdf?fileId=5546d462533600a4015355ff98011c32
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MF.
 */
export class IRF7483M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF7483M";
  override referencePrefix = "Q";
}

/**
 * 209A Id, 40V Vds, 1.25mOhm Rds, N-Channel MOSFET, DirectFET ME
 *
 * KiCad symbol: `Transistor_FET:IRF7486M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*ME*.
 * @see https://www.infineon.com/dgdl/Infineon-IRL7486M-DS-v01_00-EN.pdf?fileId=5546d46258fc0bc10158fec7a83a0629
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_ME.
 */
export class IRF7486M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF7486M";
  override referencePrefix = "Q";
}

/**
 * 114A Id, 60V Vds, 3.6mOhm Rds, N-Channel MOSFET, DirectFET ME
 *
 * KiCad symbol: `Transistor_FET:IRF7580M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*ME*.
 * @see https://www.infineon.com/dgdl/irf7580mpbf.pdf?fileId=5546d462533600a401535603855c1c72
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_ME.
 */
export class IRF7580M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF7580M";
  override referencePrefix = "Q";
}

/**
 * -3.6A Id, -30V Vds, HexFET P-MOS Power MOSFET, Ronon 0.09R, Micro8
 *
 * KiCad symbol: `Transistor_FET:IRF7606PBF`. Reference prefix: `Q`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see http://www.irf.com/product-info/datasheets/data/irf7606pbf.pdf
 * Keywords: HexFET Power MOSFET P-MOS.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class IRF7606PBF extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D_5": "5",
  "D_6": "6",
  "D_7": "7",
  "D_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D_5: "passive", D_6: "passive", D_7: "passive", D_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF7606PBF";
  override referencePrefix = "Q";
}

/**
 * 5.2A Id, 20V Vds, HexFET N-MOS Power MOSFET, Ronon 0.03R, Micro8
 *
 * KiCad symbol: `Transistor_FET:IRF7607PBF`. Reference prefix: `Q`.
 * Footprint filters: MSOP*3x3mm*P0.65mm*.
 * @see http://www.irf.com/product-info/datasheets/data/irf7607pbf.pdf
 * Keywords: HexFET Power MOSFET N-MOS.
 * Default footprint: Package_SO:MSOP-8_3x3mm_P0.65mm.
 */
export class IRF7607PBF extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D_5": "5",
  "D_6": "6",
  "D_7": "7",
  "D_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D_5: "passive", D_6: "passive", D_7: "passive", D_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF7607PBF";
  override referencePrefix = "Q";
}

/**
 * 14.4A Id, 100V Vds, 62mOhm Rds, N-Channel MOSFET, DirectFET SB
 *
 * KiCad symbol: `Transistor_FET:IRF7665S2`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*SB*.
 * @see https://www.infineon.com/dgdl/irf7665s2pbf.pdf?fileId=5546d462533600a401535603d3ba1c86
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_SB.
 */
export class IRF7665S2 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF7665S2";
  override referencePrefix = "Q";
}

/**
 * 270A Id, 40V Vds, 1.0mOhm Rds, N-Channel MOSFET, DirectFET L8
 *
 * KiCad symbol: `Transistor_FET:IRF7739L1`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*L8*.
 * @see https://www.infineon.com/dgdl/irf7739l1pbf.pdf?fileId=5546d462533600a40153560423d91c9a
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_L8.
 */
export class IRF7739L1 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF7739L1";
  override referencePrefix = "Q";
}

/**
 * 104A Id, 60V Vds, 2.2mOhm Rds, N-Channel MOSFET, DirectFET L6
 *
 * KiCad symbol: `Transistor_FET:IRF7748L1`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*L6*.
 * @see https://www.infineon.com/dgdl/irf7748l1pbf.pdf?fileId=5546d462533600a40153560434c11c9e
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_L6.
 */
export class IRF7748L1 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF7748L1";
  override referencePrefix = "Q";
}

/**
 * 160A Id, 75V Vds, 2.3mOhm Rds, N-Channel MOSFET, DirectFET L8
 *
 * KiCad symbol: `Transistor_FET:IRF7759L2`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*L8*.
 * @see https://www.infineon.com/dgdl/irf7759l2pbf.pdf?fileId=5546d462533600a40153560478171cb0
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_L8.
 */
export class IRF7759L2 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF7759L2";
  override referencePrefix = "Q";
}

/**
 * 88A Id, 100V Vds, 3.5mOhm Rds, N-Channel MOSFET, DirectFET L8
 *
 * KiCad symbol: `Transistor_FET:IRF7769L1`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*L8*.
 * @see https://www.infineon.com/dgdl/Infineon-IRF7769L1-DS-v02_00-EN.pdf?fileId=5546d462533600a4015356079bd91cb4
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_L8.
 */
export class IRF7769L1 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF7769L1";
  override referencePrefix = "Q";
}

/**
 * 67A Id, 150V Vds, 11mOhm Rds, N-Channel MOSFET, DirectFET L8
 *
 * KiCad symbol: `Transistor_FET:IRF7779L2`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*L8*.
 * @see https://www.infineon.com/dgdl/irf7779l2pbf.pdf?fileId=5546d462533600a401535607ac011cb8
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_L8.
 */
export class IRF7779L2 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF7779L2";
  override referencePrefix = "Q";
}

/**
 * 89A Id, 75V Vds, 5.7mOhm Rds, N-Channel MOSFET, DirectFET ME
 *
 * KiCad symbol: `Transistor_FET:IRF7780M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*ME*.
 * @see https://www.infineon.com/dgdl/irf7780mpbf.pdf?fileId=5546d462533600a401535607b41f1cba
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_ME.
 */
export class IRF7780M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF7780M";
  override referencePrefix = "Q";
}

/**
 * 35A Id, 250V Vds, 38mOhm Rds, N-Channel MOSFET, DirectFET L8
 *
 * KiCad symbol: `Transistor_FET:IRF7799L2`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*L8*.
 * @see https://www.infineon.com/dgdl/irf7799l2pbf.pdf?fileId=5546d462533600a401535607bc471cbc
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_L8.
 */
export class IRF7799L2 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF7799L2";
  override referencePrefix = "Q";
}

/**
 * 198A Id, 40V Vds, 1.4mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:IRF7946`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/irf7946pbf.pdf?fileId=5546d462533600a40153560cc0a41d43
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class IRF7946 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF7946";
  override referencePrefix = "Q";
}

/**
 * 34A Id, 30V Vds, 1.5mOhm Rds, N-Channel MOSFET, DirectFET MT
 *
 * KiCad symbol: `Transistor_FET:IRF8301M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MT*.
 * @see https://www.infineon.com/dgdl/irf8301mpbf.pdf?fileId=5546d462533600a40153560d0e7a1d58
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MT.
 */
export class IRF8301M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF8301M";
  override referencePrefix = "Q";
}

/**
 * 31A Id, 30V Vds, 1.8mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:IRF8302M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/irf8302mpbf.pdf?fileId=5546d462533600a40153560d16e41d5b
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class IRF8302M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF8302M";
  override referencePrefix = "Q";
}

/**
 * 28A Id, 30V Vds, 2.2mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:IRF8304M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/irf8304mpbf.pdf?fileId=5546d462533600a40153560d20db1d5d
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class IRF8304M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF8304M";
  override referencePrefix = "Q";
}

/**
 * 23A Id, 30V Vds, 2.5mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:IRF8306M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/irf8306mpbf.pdf?fileId=5546d462533600a40153560d29371d5f
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class IRF8306M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF8306M";
  override referencePrefix = "Q";
}

/**
 * 27A Id, 30V Vds, 2.5mOhm Rds, N-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:IRF8308M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/irf8308mpbf.pdf?fileId=5546d462533600a40153560d319d1d61
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class IRF8308M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF8308M";
  override referencePrefix = "Q";
}

/**
 * 13A Id, 30V Vds, 7.3mOhm Rds, N-Channel MOSFET, DirectFET SQ
 *
 * KiCad symbol: `Transistor_FET:IRF8327S`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*SQ*.
 * @see https://www.infineon.com/dgdl/irf8327spbf.pdf?fileId=5546d462533600a40153560d40c41d65
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_SQ.
 */
export class IRF8327S extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF8327S";
  override referencePrefix = "Q";
}

/**
 * N-MOSFET transistor, gate/drain/source
 *
 * KiCad symbol: `Transistor_FET:Q_NMOS_GDS`. Reference prefix: `Q`.
 * Keywords: transistor NMOS N-MOS N-MOSFET.
 */
export class Q_NMOS_GDS extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_NMOS_GDS";
  override referencePrefix = "Q";
}

/**
 * N-Channel MOSFET, 8A Id, 500V Vds, 850mΩ Rds, TO-220
 *
 * KiCad symbol: `Transistor_FET:IRF840A`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.vishay.com/docs/91065/91065.pdf
 * Keywords: Vishay Siliconix avalanche-rated.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class IRF840A extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF840A";
  override referencePrefix = "Q";
}

/**
 * -22A Id, -30V Vds, 2.9mOhm Rds, P-Channel MOSFET, DirectFET MX
 *
 * KiCad symbol: `Transistor_FET:IRF9383M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MX*.
 * @see https://www.infineon.com/dgdl/irf9383mpbf.pdf?fileId=5546d462533600a40153561169a11dab
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_DirectFET:DirectFET_MX.
 */
export class IRF9383M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRF9383M";
  override referencePrefix = "Q";
}

/**
 * 8.7A Id, 150V Vds, 80mOhm Rds, Dual Half Bridge N-Channel MOSFET, TO-220-5
 *
 * KiCad symbol: `Transistor_FET:IRFI4019H`. Reference prefix: `Q`.
 * Footprint filters: TO?220F*P3.4x2.06mm*StaggerEven*Lead1.86mm*.
 * @see https://www.infineon.com/dgdl/irfi4019h-117p.pdf?fileId=5546d462533600a401535623d74d1f6f
 * Keywords: Dual N-Channel MOSFET Half-Bridge.
 * Default footprint: Package_TO_SOT_THT:TO-220F-5_P3.4x2.06mm_StaggerEven_Lead1.86mm_Vertical.
 */
export class IRFI4019H extends Component.withPins({
  "S2": "1",
  "G2": "2",
  "S1/D2": "3",
  "G1": "4",
  "D1": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S2: "passive", G2: "input", "S1/D2": "passive", G1: "input", D1: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRFI4019H";
  override referencePrefix = "Q";
}

/**
 * 9.1A Id, 200V Vds, 80mOhm Rds, Dual Half Bridge N-Channel MOSFET, TO-220-5
 *
 * KiCad symbol: `Transistor_FET:IRFI4020H`. Reference prefix: `Q`.
 * Footprint filters: TO?220F*P3.4x2.06mm*StaggerEven*Lead1.86mm*.
 * @see https://www.infineon.com/dgdl/irfi4020h-117p.pdf?fileId=5546d462533600a401535623e7271f73
 * Keywords: Dual N-Channel MOSFET Half-Bridge.
 * Default footprint: Package_TO_SOT_THT:TO-220F-5_P3.4x2.06mm_StaggerEven_Lead1.86mm_Vertical.
 */
export class IRFI4020H extends Component.withPins({
  "S2": "1",
  "G2": "2",
  "S1/D2": "3",
  "G1": "4",
  "D1": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S2: "passive", G2: "input", "S1/D2": "passive", G1: "input", D1: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRFI4020H";
  override referencePrefix = "Q";
}

/**
 * 11A Id, 100V Vds, 58mOhm Rds, Dual Half Bridge N-Channel MOSFET, TO-220-5
 *
 * KiCad symbol: `Transistor_FET:IRFI4212H`. Reference prefix: `Q`.
 * Footprint filters: TO?220F*P3.4x2.06mm*StaggerEven*Lead1.86mm*.
 * @see https://www.infineon.com/dgdl/irfi4212h-117p.pdf?fileId=5546d462533600a401535623fc841f7a
 * Keywords: Dual N-Channel MOSFET Half-Bridge.
 * Default footprint: Package_TO_SOT_THT:TO-220F-5_P3.4x2.06mm_StaggerEven_Lead1.86mm_Vertical.
 */
export class IRFI4212H extends Component.withPins({
  "S2": "1",
  "G2": "2",
  "S1/D2": "3",
  "G1": "4",
  "D1": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S2: "passive", G2: "input", "S1/D2": "passive", G1: "input", D1: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRFI4212H";
  override referencePrefix = "Q";
}

/**
 * 195A Id, 100V Vds, N-Channel Power MOSFET, TO-247
 *
 * KiCad symbol: `Transistor_FET:IRFP4468PbF`. Reference prefix: `Q`.
 * Footprint filters: TO?247*.
 * @see https://www.infineon.com/dgdl/irfp4468pbf.pdf?fileId=5546d462533600a40153562c73472019
 * Keywords: N-Channel Power MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-247-3_Vertical.
 */
export class IRFP4468PbF extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRFP4468PbF";
  override referencePrefix = "Q";
}

/**
 * 130A Id, 200V Vds, N-Channel Power MOSFET, TO-247
 *
 * KiCad symbol: `Transistor_FET:IRFP4668PbF`. Reference prefix: `Q`.
 * Footprint filters: TO?247*.
 * @see https://www.infineon.com/dgdl/irfp4668pbf.pdf?fileId=5546d462533600a40153562c8528201d
 * Keywords: N-Channel Power MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-247-3_Vertical.
 */
export class IRFP4668PbF extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRFP4668PbF";
  override referencePrefix = "Q";
}

/**
 * 14A Id, 800V Vds, N-Channel MOSFET, 375mOhm Ron, D2PAK
 *
 * KiCad symbol: `Transistor_FET:STB15N80K5`. Reference prefix: `Q`.
 * Footprint filters: TO?263*.
 * @see https://www.st.com/resource/en/datasheet/stb15n80k5.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-2.
 */
export class STB15N80K5 extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "passive", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:STB15N80K5";
  override referencePrefix = "Q";
}

/**
 * 99A Id, 150V Vds, 10.3mOhm Rds, N-Channel HEXFET Power MOSFET, D2PAK
 *
 * KiCad symbol: `Transistor_FET:IRFS4115`. Reference prefix: `Q`.
 * Footprint filters: TO?263*.
 * @see https://www.infineon.com/dgdl/irfs4115pbf.pdf?fileId=5546d462533600a401535636e5d2218f
 * Keywords: N-Channel HEXFET MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-2.
 */
export class IRFS4115 extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "passive", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRFS4115";
  override referencePrefix = "Q";
}

/**
 * 72A Id, 200V Vds, 18.6mOhm Rds, N-Channel MOSFET, 18.6mOhm Ron, D2PAK
 *
 * KiCad symbol: `Transistor_FET:IRFS4127`. Reference prefix: `Q`.
 * Footprint filters: TO?263*.
 * @see https://www.infineon.com/dgdl/irfs4127pbf.pdf?fileId=5546d462533600a401535636ee7b2192
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-2.
 */
export class IRFS4127 extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "passive", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRFS4127";
  override referencePrefix = "Q";
}

/**
 * 130A Id, 200V Vds, 22mOhm Rds, N-Channel MOSFET, D2PAK
 *
 * KiCad symbol: `Transistor_FET:IRFS4227`. Reference prefix: `Q`.
 * Footprint filters: TO?263*.
 * @see https://www.infineon.com/dgdl/irfs4227pbf.pdf?fileId=5546d462533600a401535639ef64219b
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-2.
 */
export class IRFS4227 extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "passive", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRFS4227";
  override referencePrefix = "Q";
}

/**
 * 91A Id, 250V Vds, 42mOhm Rds, N-Channel MOSFET, D2PAK
 *
 * KiCad symbol: `Transistor_FET:IRFS4229`. Reference prefix: `Q`.
 * Footprint filters: TO?263*.
 * @see https://www.infineon.com/dgdl/irfs4229pbf.pdf?fileId=5546d462533600a401535639fdc421a1
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-2.
 */
export class IRFS4229 extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "passive", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRFS4229";
  override referencePrefix = "Q";
}

/**
 * 120A Id, 100V Vds, 4.8mOhm Rds, N-Channel HEXFET Power MOSFET, D2PAK
 *
 * KiCad symbol: `Transistor_FET:IRFS4310Z`. Reference prefix: `Q`.
 * Footprint filters: TO?263*.
 * @see https://www.infineon.com/dgdl/irfb4310zpbf.pdf?fileId=5546d462533600a4015356161b4d1e2d
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-2.
 */
export class IRFS4310Z extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "passive", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRFS4310Z";
  override referencePrefix = "Q";
}

/**
 * 85A Id, 150V Vds, 12mOhm Rds, N-Channel HEXFET Power MOSFET, D2PAK
 *
 * KiCad symbol: `Transistor_FET:IRFS4321`. Reference prefix: `Q`.
 * Footprint filters: TO?263*.
 * @see https://www.infineon.com/dgdl/irfs4321pbf.pdf?fileId=5546d462533600a40153563a20dd21ad
 * Keywords: N-Channel MOSFET HEXFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-2.
 */
export class IRFS4321 extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "passive", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRFS4321";
  override referencePrefix = "Q";
}

/**
 * -5.8A Id, -30V Vds, 40mOhm Rds, P-Channel HEXFET Power MOSFET, TSOP-6
 *
 * KiCad symbol: `Transistor_FET:IRFTS9342PBF`. Reference prefix: `Q`.
 * Footprint filters: TSOP*1.65x3.05mm*P0.95mm*.
 * @see https://www.infineon.com/dgdl/irfts9342pbf.pdf?fileId=5546d462533600a40153563aeabc21f3
 * Keywords: P-Channel MOSFET HEXFET.
 * Default footprint: Package_SO:TSOP-6_1.65x3.05mm_P0.95mm.
 */
export class IRFTS9342PBF extends Component.withPins({
  "D_1": "1",
  "D_2": "2",
  "G": "3",
  "S": "4",
  "D_5": "5",
  "D_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D_1: "passive", D_2: "passive", G: "input", S: "passive", D_5: "passive", D_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRFTS9342PBF";
  override referencePrefix = "Q";
}

/**
 * 38A Id, 20V Vds, 0.75mOhm Rds, N-Channel HEXFET Power MOSFET, DirectFET MD
 *
 * KiCad symbol: `Transistor_FET:IRL6283M`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*MD*.
 * @see https://www.infineon.com/dgdl/irl6283mpbf.pdf?fileId=5546d462533600a40153565fe9452573
 * Keywords: N-Channel HEXFET MOSFET IRFET.
 * Default footprint: Package_DirectFET:DirectFET_MD.
 */
export class IRL6283M extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRL6283M";
  override referencePrefix = "Q";
}

/**
 * 15A Id, 20V Vds, 4.9mOhm Rds, Dual N-Channel HEXFET Power MOSFET, DirectFET SA
 *
 * KiCad symbol: `Transistor_FET:IRL6297SD`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*SA*.
 * @see https://www.infineon.com/dgdl/irl6297sdpbf.pdf?fileId=5546d462533600a40153565ff22f2575
 * Keywords: Dual N-Channel HEXFET MOSFET Logic-Level.
 * Default footprint: Package_DirectFET:DirectFET_SA.
 */
export class IRL6297SD extends Component.withPins({
  "D": "1",
  "G1": "2",
  "S1": "3",
  "G2": "4",
  "S2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G1: "input", S1: "passive", G2: "input", S2: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRL6297SD";
  override referencePrefix = "Q";
}

/**
 * 375A Id, 40V Vds, 0.45mOhm Rds, N-Channel HEXFET Power MOSFET, DirectFET L8
 *
 * KiCad symbol: `Transistor_FET:IRL7472L1`. Reference prefix: `Q`.
 * Footprint filters: DirectFET*L8*.
 * @see https://www.infineon.com/dgdl/Infineon-IRL7472L1-DS-v02_00-EN.pdf?fileId=5546d46254e133b401555d17178250d8
 * Keywords: N-Channel HEXFET MOSFET Logic-Level IRFET.
 * Default footprint: Package_DirectFET:DirectFET_L8.
 */
export class IRL7472L1 extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRL7472L1";
  override referencePrefix = "Q";
}

/**
 * 62A Id, 30V Vds, 8.7 mOhm Rds, N-Channel HEXFET Power MOSFET, TO-220
 *
 * KiCad symbol: `Transistor_FET:IRLB8721PBF`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.infineon.com/dgdl/irlb8721pbf.pdf?fileId=5546d462533600a40153566056732591
 * Keywords: N-Channel HEXFET MOSFET Logic-Level.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class IRLB8721PBF extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRLB8721PBF";
  override referencePrefix = "Q";
}

/**
 * 30A Id, 55V Vds, 22mOhm Rds, N-Channel HEXFET Power MOSFET, TO-220AB
 *
 * KiCad symbol: `Transistor_FET:IRLIZ44N`. Reference prefix: `Q`.
 * Footprint filters: TO?220F*.
 * @see http://www.irf.com/product-info/datasheets/data/irliz44n.pdf
 * Keywords: N-Channel HEXFET MOSFET Logic-Level.
 * Default footprint: Package_TO_SOT_THT:TO-220F-3_Vertical.
 */
export class IRLIZ44N extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRLIZ44N";
  override referencePrefix = "Q";
}

/**
 * 5.3A Id, 30V Vds, 27mOhm Rds, N-Channel HEXFET Power MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:IRLML0030`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.infineon.com/dgdl/irlml0030pbf.pdf?fileId=5546d462533600a401535664773825df
 * Keywords: N-Channel HEXFET MOSFET Logic-Level.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class IRLML0030 extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRLML0030";
  override referencePrefix = "Q";
}

/**
 * 1.2A Id, 60V Vds, 480mOhm Rds, N-Channel HEXFET Power MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:IRLML2060`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.infineon.com/dgdl/irlml2060pbf.pdf?fileId=5546d462533600a401535664b7fb25ee
 * Keywords: N-Channel HEXFET MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class IRLML2060 extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRLML2060";
  override referencePrefix = "Q";
}

/**
 * -3.0A Id, -30V Vds, 98mOhm Rds, P-Channel HEXFET Power MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:IRLML5203`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.infineon.com/dgdl/irlml5203pbf.pdf?fileId=5546d462533600a40153566868da261d
 * Keywords: P-Channel HEXFET MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class IRLML5203 extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRLML5203";
  override referencePrefix = "Q";
}

/**
 * 6.3A Id, 20V Vds, 21mOhm Rds, N-Channel StrongIRFET Power MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:IRLML6244`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.infineon.com/dgdl/Infineon-IRLML6244-DataSheet-v01_01-EN.pdf?fileId=5546d462533600a4015356686fed261f
 * Keywords: N-Channel StrongIRFET MOSFET Load switch.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class IRLML6244 extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRLML6244";
  override referencePrefix = "Q";
}

/**
 * -4.3A Id, -12V Vds, 50mOhm Rds, P-Channel HEXFET Power MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:IRLML6401`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.infineon.com/dgdl/irlml6401pbf.pdf?fileId=5546d462533600a401535668b96d2634
 * Keywords: P-Channel HEXFET MOSFET Logic-Level.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class IRLML6401 extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRLML6401";
  override referencePrefix = "Q";
}

/**
 * -3.7A Id, -20V Vds, 65mOhm Rds, P-Channel HEXFET Power MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:IRLML6402`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.infineon.com/dgdl/irlml6402pbf.pdf?fileId=5546d462533600a401535668d5c2263c
 * Keywords: P-Channel HEXFET MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class IRLML6402 extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRLML6402";
  override referencePrefix = "Q";
}

/**
 * -3.6A Id, -30V Vds, 64mOhm Rds, P-Channel HEXFET Power MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:IRLML9301`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.infineon.com/dgdl/irlml9301pbf.pdf?fileId=5546d462533600a401535668e5e42640
 * Keywords: P-Channel HEXFET MOSFET Logic-Level.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class IRLML9301 extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRLML9301";
  override referencePrefix = "Q";
}

/**
 * 17A Id, 60V Vds, N-Channel Power MOSFET, TO-220AB
 *
 * KiCad symbol: `Transistor_FET:IRLZ24`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see https://www.vishay.com/docs/91326/sihlz24.pdf
 * Keywords: N-Channel Power MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class IRLZ24 extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRLZ24";
  override referencePrefix = "Q";
}

/**
 * 30A Id, 55V Vds, 35mOhm Rds, N-Channel HEXFET Power MOSFET, TO-220AB
 *
 * KiCad symbol: `Transistor_FET:IRLZ34N`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.infineon.com/dgdl/irlz34npbf.pdf?fileId=5546d462533600a40153567206892720
 * Keywords: N-Channel HEXFET MOSFET Logic-Level.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class IRLZ34N extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRLZ34N";
  override referencePrefix = "Q";
}

/**
 * 47A Id, 55V Vds, 22mOhm Rds Single N-Channel HEXFET Power MOSFET, TO-220AB
 *
 * KiCad symbol: `Transistor_FET:IRLZ44N`. Reference prefix: `Q`.
 * Footprint filters: TO?220*.
 * @see http://www.irf.com/product-info/datasheets/data/irlz44n.pdf
 * Keywords: N-Channel HEXFET MOSFET Logic-Level.
 * Default footprint: Package_TO_SOT_THT:TO-220-3_Vertical.
 */
export class IRLZ44N extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:IRLZ44N";
  override referencePrefix = "Q";
}

/**
 * Ultra-Low-Noise, Low-Gate-Current, Audio, N-Channel JFET, SOT-23-5
 *
 * KiCad symbol: `Transistor_FET:JFE150DBV`. Reference prefix: `Q`.
 * Footprint filters: SOT?23?5*.
 * @see https://www.ti.com/lit/ds/symlink/jfe150.pdf
 * Keywords: low noise n-channel jfet.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class JFE150DBV extends Component.withPins({
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "VCH": "1",
  "VCL": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P3: "input", P4: "passive", P5: "passive", VCH: "passive", VCL: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:JFE150DBV";
  override referencePrefix = "Q";
}

/**
 * Ultra-Low-Noise, Low-Gate-Current, Audio, N-Channel JFET, SC-70-5
 *
 * KiCad symbol: `Transistor_FET:JFE150DCK`. Reference prefix: `Q`.
 * Footprint filters: *SC?70?5*.
 * @see https://www.ti.com/lit/ds/symlink/jfe150.pdf
 * Keywords: low noise n-channel jfet.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class JFE150DCK extends Component.withPins({
  "P3": "3",
  "P4": "4",
  "P5": "5",
  "VCH": "1",
  "VCL": "2",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P3: "input", P4: "passive", P5: "passive", VCH: "passive", VCL: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:JFE150DCK";
  override referencePrefix = "Q";
}

/**
 * Ultra-Low Noise, Matched, Dual, Low-Gate Current, Discrete, Audio, N‑Channel JFET, SOIC-8
 *
 * KiCad symbol: `Transistor_FET:JFE2140D`. Reference prefix: `Q`.
 * Footprint filters: SOIC?8*3.9x4.9mm*P1.27mm*.
 * @see https://www.ti.com/lit/ds/symlink/jfe2140.pdf
 * Keywords: low noise n-channel dual matched jfet.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class JFE2140D extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P4": "4",
  "P5": "5",
  "P6": "6",
  "P8": "8",
  "VCH": "3",
  "VCL": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "passive", P2: "passive", P4: "input", P5: "passive", P6: "passive", P8: "input", VCH: "passive", VCL: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:JFE2140D";
  override referencePrefix = "Q";
}

/**
 * 0.5A Id, 60V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:MMBF170`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.diodes.com/assets/Datasheets/ds30104.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MMBF170 extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:MMBF170";
  override referencePrefix = "Q";
}

/**
 * 50mA min, 30V, 30mOhm max, 4-10V Vgs(off), N-Channel JFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:MMBF4391`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.onsemi.com/pub/Collateral/MMBF4391LT1-D.PDF
 * Keywords: N-Channel FET Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MMBF4391 extends Component.withPins({
  "D": "1",
  "S": "2",
  "G": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", S: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:MMBF4391";
  override referencePrefix = "Q";
}

/**
 * 25mA min, 30V, 60mOhm max, 2-5V Vgs(off), N-Channel JFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:MMBF4392`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.onsemi.com/pub/Collateral/MMBF4391LT1-D.PDF
 * Keywords: N-Channel FET Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MMBF4392 extends Component.withPins({
  "D": "1",
  "S": "2",
  "G": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", S: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:MMBF4392";
  override referencePrefix = "Q";
}

/**
 * 5mA min, 30V, 100mOhm max, 0.5-3V Vgs(off), N-Channel JFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:MMBF4393`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.onsemi.com/pub/Collateral/MMBF4391LT1-D.PDF
 * Keywords: N-Channel FET Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MMBF4393 extends Component.withPins({
  "D": "1",
  "S": "2",
  "G": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", S: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:MMBF4393";
  override referencePrefix = "Q";
}

/**
 * 20mA min, 35V, 30mOhm max, 3-10V Vgs(off), N-Channel JFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:MMBFJ111`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.onsemi.com/pub/Collateral/MMBFJ113-D.PDF
 * Keywords: N-Channel FET Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MMBFJ111 extends Component.withPins({
  "D": "1",
  "S": "2",
  "G": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", S: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:MMBFJ111";
  override referencePrefix = "Q";
}

/**
 * 5mA min, 35V, 50mOhm max, 1-5V Vgs(off), N-Channel JFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:MMBFJ112`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.onsemi.com/pub/Collateral/MMBFJ113-D.PDF
 * Keywords: N-Channel FET Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MMBFJ112 extends Component.withPins({
  "D": "1",
  "S": "2",
  "G": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", S: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:MMBFJ112";
  override referencePrefix = "Q";
}

/**
 * 2mA min, 35V, 100mOhm max, 0.5-3V Vgs(off), N-Channel JFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:MMBFJ113`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://www.onsemi.com/pub/Collateral/MMBFJ113-D.PDF
 * Keywords: N-Channel FET Transistor.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class MMBFJ113 extends Component.withPins({
  "D": "1",
  "S": "2",
  "G": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", S: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:MMBFJ113";
  override referencePrefix = "Q";
}

/**
 * 4A Id, 60V Vds, N-Channel Logic Level Enhancement Mode MOSFET, SOT-223
 *
 * KiCad symbol: `Transistor_FET:NDT3055L`. Reference prefix: `Q`.
 * Footprint filters: SOT?223*.
 * @see https://www.onsemi.com/pdf/datasheet/ndt3055l-d.pdf
 * Keywords: n channel fet.
 * Default footprint: Package_TO_SOT_SMD:SOT-223-3_TabPin2.
 */
export class NDT3055L extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:NDT3055L";
  override referencePrefix = "Q";
}

/**
 * 33A Id, 60V Vds, N-Channel Power MOSFET, 15.6mOhm Ron, -55 to 175 °C, SO-8FL
 *
 * KiCad symbol: `Transistor_FET:NTMFS016N06CT1G`. Reference prefix: `Q`.
 * Footprint filters: ONSemi_SO*8FL_488AA*.
 * @see https://www.onsemi.com/download/data-sheet/pdf/NTMFS016N06C-D.pdf
 * Keywords: transistor NMOS N-MOS N-MOSFET.
 * Default footprint: Package_SO:ONSemi_SO-8FL_488AA.
 */
export class NTMFS016N06CT1G extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:NTMFS016N06CT1G";
  override referencePrefix = "Q";
}

/**
 * -3.7A Id, -8V Vds, P-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:NTR2101P`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.onsemi.com/pub/Collateral/NTR2101P-D.PDF
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class NTR2101P extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:NTR2101P";
  override referencePrefix = "Q";
}

/**
 * 26A Id, 600V Vds, 56mOhm, N-Channel GaN MOSFET, DFN-8
 *
 * KiCad symbol: `Transistor_FET:PGA26E07BA`. Reference prefix: `Q`.
 * Footprint filters: Panasonic*HSON*8x8mm*P2.00mm*.
 * @see https://industrial.panasonic.com/content/data/SC/ds/ds4/PGA26E07BA_E.pdf
 * Keywords: N-Channel GaN MOSFET.
 * Default footprint: Package_DFN_QFN:Panasonic_HSON-8_8x8mm_P2.00mm.
 */
export class PGA26E07BA extends Component.withPins({
  "D_1": "1",
  "D_2": "2",
  "D_3": "3",
  "D_4": "4",
  "S2_5": "5",
  "S2_6": "6",
  "S1": "7",
  "G": "8",
  "S2_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D_1: "passive", D_2: "passive", D_3: "passive", D_4: "passive", S2_5: "passive", S2_6: "passive", S1: "passive", G: "input", S2_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:PGA26E07BA";
  override referencePrefix = "Q";
}

/**
 * 13A Id, 600V Vds, 140mOhm, N-Channel GaN MOSFET, DFN-8
 *
 * KiCad symbol: `Transistor_FET:PGA26E19BA`. Reference prefix: `Q`.
 * Footprint filters: Panasonic*HSON*8x8mm*P2.00mm*.
 * @see https://industrial.panasonic.com/content/data/SC/ds/ds4/PGA26E19BA_E.pdf
 * Keywords: N-Channel GaN MOSFET.
 * Default footprint: Package_DFN_QFN:Panasonic_HSON-8_8x8mm_P2.00mm.
 */
export class PGA26E19BA extends Component.withPins({
  "D_1": "1",
  "D_2": "2",
  "D_3": "3",
  "D_4": "4",
  "S2_5": "5",
  "S2_6": "6",
  "S1": "7",
  "G": "8",
  "S2_9": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D_1: "passive", D_2: "passive", D_3: "passive", D_4: "passive", S2_5: "passive", S2_6: "passive", S1: "passive", G: "input", S2_9: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:PGA26E19BA";
  override referencePrefix = "Q";
}

/**
 * Nexperia 20 / 20 V, 800 / 550 mA N/P-channel Trench MOSFET, SOT-666
 *
 * KiCad symbol: `Transistor_FET:PMDT290UCE`. Reference prefix: `Q`.
 * Footprint filters: SOT?666*.
 * @see https://assets.nexperia.com/documents/data-sheet/PMDT290UCE.pdf
 * Keywords: Trench MOSFET complementary nmos pmos nexperia.
 * Default footprint: Package_TO_SOT_SMD:SOT-666.
 */
export class PMDT290UCE extends Component.withPins({
  "SN": "1",
  "GN": "2",
  "DN": "6",
  "DP": "3",
  "SP": "4",
  "GP": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { SN: "passive", GN: "input", DN: "passive", DP: "passive", SP: "passive", GP: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:PMDT290UCE";
  override referencePrefix = "Q";
}

/**
 * -4.1A Id, -20V Vds, P-Channel Power MOSFET, 48mOhm Ron, TSOP-6
 *
 * KiCad symbol: `Transistor_FET:PMN48XP`. Reference prefix: `Q`.
 * Footprint filters: TSOP*1.65x3.05mm*P0.95mm*.
 * @see https://assets.nexperia.com/documents/data-sheet/PMN48XP.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_SO:TSOP-6_1.65x3.05mm_P0.95mm.
 */
export class PMN48XP extends Component.withPins({
  "D_1": "1",
  "D_2": "2",
  "G": "3",
  "S": "4",
  "D_5": "5",
  "D_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D_1: "passive", D_2: "passive", G: "passive", S: "passive", D_5: "passive", D_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:PMN48XP";
  override referencePrefix = "Q";
}

/**
 * 100A, 60V Vds, N-Channel MOSFET, 5.2mOhm Ron, LFPAK56
 *
 * KiCad symbol: `Transistor_FET:PSMN5R2-60YL`. Reference prefix: `Q`.
 * Footprint filters: LFPAK56*.
 * @see https://assets.nexperia.com/documents/data-sheet/PSMN5R2-60YL.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:LFPAK56.
 */
export class PSMN5R2_60YL extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:PSMN5R2-60YL";
  override referencePrefix = "Q";
}

/**
 * 35A Id, 60V Vds, N-Channel Power MOSFET, 18mOhm Ron, 19.3nC Qg (typ), TO252
 *
 * KiCad symbol: `Transistor_FET:QM6006D`. Reference prefix: `Q`.
 * Footprint filters: TO?252*.
 * @see http://www.jaolen.com/images/pdf/QM6006D.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-252-2.
 */
export class QM6006D extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:QM6006D";
  override referencePrefix = "Q";
}

/**
 * -35A Id, -60V Vds, P-Channel Power MOSFET, 25mOhm Ron, 25.0nC Qg (typ), TO252
 *
 * KiCad symbol: `Transistor_FET:QM6015D`. Reference prefix: `Q`.
 * Footprint filters: TO?252*.
 * @see http://www.jaolen.com/images/pdf/QM6015D.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-252-2.
 */
export class QM6015D extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "passive", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:QM6015D";
  override referencePrefix = "Q";
}

/**
 * Dual NMOS transistor, 6 pin package
 *
 * KiCad symbol: `Transistor_FET:Q_Dual_NMOS_G1S2G2D2S1D1`. Reference prefix: `Q`.
 * Keywords: transistor NMOS N-MOS N-MOSFET.
 */
export class Q_Dual_NMOS_G1S2G2D2S1D1 extends Component.withPins({
  "G_1": "1",
  "S_5": "5",
  "D_6": "6",
  "S_2": "2",
  "G_3": "3",
  "D_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G_1: "input", S_5: "passive", D_6: "passive", S_2: "passive", G_3: "input", D_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_Dual_NMOS_G1S2G2D2S1D1";
  override referencePrefix = "Q";
}

/**
 * Dual NMOS transistor, 6 pin package
 *
 * KiCad symbol: `Transistor_FET:Q_Dual_NMOS_S1G1D2S2G2D1`. Reference prefix: `Q`.
 * Keywords: transistor NMOS N-MOS N-MOSFET.
 */
export class Q_Dual_NMOS_S1G1D2S2G2D1 extends Component.withPins({
  "S_1": "1",
  "G_2": "2",
  "D_6": "6",
  "D_3": "3",
  "S_4": "4",
  "G_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", G_2: "input", D_6: "passive", D_3: "passive", S_4: "passive", G_5: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_Dual_NMOS_S1G1D2S2G2D1";
  override referencePrefix = "Q";
}

/**
 * Dual NMOS transistor, 6 pin package
 *
 * KiCad symbol: `Transistor_FET:Q_Dual_NMOS_S1G1S2G2D2D1`. Reference prefix: `Q`.
 * Keywords: transistor NMOS N-MOS N-MOSFET.
 */
export class Q_Dual_NMOS_S1G1S2G2D2D1 extends Component.withPins({
  "S_1": "1",
  "G_2": "2",
  "D_6": "6",
  "S_3": "3",
  "G_4": "4",
  "D_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", G_2: "input", D_6: "passive", S_3: "passive", G_4: "input", D_5: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_Dual_NMOS_S1G1S2G2D2D1";
  override referencePrefix = "Q";
}

/**
 * Dual NMOS transistor, 8 pin package
 *
 * KiCad symbol: `Transistor_FET:Q_Dual_NMOS_S1G1S2G2D2D2D1D1`. Reference prefix: `Q`.
 * Keywords: transistor NMOS N-MOS N-MOSFET.
 */
export class Q_Dual_NMOS_S1G1S2G2D2D2D1D1 extends Component.withPins({
  "S_1": "1",
  "G_2": "2",
  "D_7": "7",
  "D_8": "8",
  "S_3": "3",
  "G_4": "4",
  "D_5": "5",
  "D_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", G_2: "input", D_7: "passive", D_8: "passive", S_3: "passive", G_4: "input", D_5: "passive", D_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_Dual_NMOS_S1G1S2G2D2D2D1D1";
  override referencePrefix = "Q";
}

/**
 * Dual PMOS transistor, 6 pin package
 *
 * KiCad symbol: `Transistor_FET:Q_Dual_PMOS_G1S2G2D2S1D1`. Reference prefix: `Q`.
 * Keywords: transistor PMOS P-MOS P-MOSFET.
 */
export class Q_Dual_PMOS_G1S2G2D2S1D1 extends Component.withPins({
  "G_1": "1",
  "S_5": "5",
  "D_6": "6",
  "S_2": "2",
  "G_3": "3",
  "D_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G_1: "input", S_5: "passive", D_6: "passive", S_2: "passive", G_3: "input", D_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_Dual_PMOS_G1S2G2D2S1D1";
  override referencePrefix = "Q";
}

/**
 * Dual PMOS transistor, 6 pin package
 *
 * KiCad symbol: `Transistor_FET:Q_Dual_PMOS_S1G1D2S2G2D1`. Reference prefix: `Q`.
 * Keywords: transistor PMOS P-MOS P-MOSFET.
 */
export class Q_Dual_PMOS_S1G1D2S2G2D1 extends Component.withPins({
  "S_1": "1",
  "G_2": "2",
  "D_6": "6",
  "D_3": "3",
  "S_4": "4",
  "G_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", G_2: "input", D_6: "passive", D_3: "passive", S_4: "passive", G_5: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_Dual_PMOS_S1G1D2S2G2D1";
  override referencePrefix = "Q";
}

/**
 * Dual PMOS transistor, 8 pin package
 *
 * KiCad symbol: `Transistor_FET:Q_Dual_PMOS_S1G1S2G2D2D2D1D1`. Reference prefix: `Q`.
 * Keywords: transistor PMOS P-MOS P-MOSFET.
 */
export class Q_Dual_PMOS_S1G1S2G2D2D2D1D1 extends Component.withPins({
  "S_1": "1",
  "G_2": "2",
  "D_7": "7",
  "D_8": "8",
  "S_3": "3",
  "G_4": "4",
  "D_5": "5",
  "D_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", G_2: "input", D_7: "passive", D_8: "passive", S_3: "passive", G_4: "input", D_5: "passive", D_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_Dual_PMOS_S1G1S2G2D2D2D1D1";
  override referencePrefix = "Q";
}

/**
 * N-MOSFET transistor, drain/gate/source
 *
 * KiCad symbol: `Transistor_FET:Q_NMOS_DGS`. Reference prefix: `Q`.
 * Keywords: transistor NMOS N-MOS N-MOSFET.
 */
export class Q_NMOS_DGS extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_NMOS_DGS";
  override referencePrefix = "Q";
}

/**
 * N-MOSFET transistor, drain/source/gate
 *
 * KiCad symbol: `Transistor_FET:Q_NMOS_DSG`. Reference prefix: `Q`.
 * Keywords: transistor NMOS N-MOS N-MOSFET.
 */
export class Q_NMOS_DSG extends Component.withPins({
  "D": "1",
  "S": "2",
  "G": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", S: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_NMOS_DSG";
  override referencePrefix = "Q";
}

/**
 * N-MOSFET transistor, gate/drain/source, drain connected to mounting plane
 *
 * KiCad symbol: `Transistor_FET:Q_NMOS_GDSD`. Reference prefix: `Q`.
 * Keywords: transistor NMOS N-MOS N-MOSFET.
 */
export class Q_NMOS_GDSD extends Component.withPins({
  "G": "1",
  "D_2": "2",
  "S": "3",
  "D_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D_2: "passive", S: "passive", D_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_NMOS_GDSD";
  override referencePrefix = "Q";
}

/**
 * N-MOSFET transistor, source/drain/gate, drain connected to mounting plane
 *
 * KiCad symbol: `Transistor_FET:Q_NMOS_SDGD`. Reference prefix: `Q`.
 * Keywords: transistor NMOS N-MOS N-MOSFET.
 */
export class Q_NMOS_SDGD extends Component.withPins({
  "S": "1",
  "D_2": "2",
  "G": "3",
  "D_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S: "passive", D_2: "passive", G: "input", D_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_NMOS_SDGD";
  override referencePrefix = "Q";
}

/**
 * N-MOSFET transistor, source/gate/drain
 *
 * KiCad symbol: `Transistor_FET:Q_NMOS_SGD`. Reference prefix: `Q`.
 * Keywords: transistor NMOS N-MOS N-MOSFET.
 */
export class Q_NMOS_SGD extends Component.withPins({
  "S": "1",
  "G": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_NMOS_SGD";
  override referencePrefix = "Q";
}

/**
 * P-MOSFET transistor, drain/gate/source
 *
 * KiCad symbol: `Transistor_FET:Q_PMOS_DGS`. Reference prefix: `Q`.
 * Keywords: transistor PMOS P-MOS P-MOSFET.
 */
export class Q_PMOS_DGS extends Component.withPins({
  "D": "1",
  "G": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "input", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_PMOS_DGS";
  override referencePrefix = "Q";
}

/**
 * P-MOSFET transistor, drain/source/gate
 *
 * KiCad symbol: `Transistor_FET:Q_PMOS_DSG`. Reference prefix: `Q`.
 * Keywords: transistor PMOS P-MOS P-MOSFET.
 */
export class Q_PMOS_DSG extends Component.withPins({
  "D": "1",
  "S": "2",
  "G": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", S: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_PMOS_DSG";
  override referencePrefix = "Q";
}

/**
 * P-MOSFET transistor, gate/drain/source
 *
 * KiCad symbol: `Transistor_FET:Q_PMOS_GDS`. Reference prefix: `Q`.
 * Keywords: transistor PMOS P-MOS P-MOSFET.
 */
export class Q_PMOS_GDS extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_PMOS_GDS";
  override referencePrefix = "Q";
}

/**
 * P-MOSFET transistor, gate/drain/source, drain connected to mounting plane
 *
 * KiCad symbol: `Transistor_FET:Q_PMOS_GDSD`. Reference prefix: `Q`.
 * Keywords: transistor PMOS P-MOS P-MOSFET.
 */
export class Q_PMOS_GDSD extends Component.withPins({
  "G": "1",
  "D_2": "2",
  "S": "3",
  "D_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D_2: "passive", S: "passive", D_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_PMOS_GDSD";
  override referencePrefix = "Q";
}

/**
 * P-MOSFET transistor, source/drain/gate
 *
 * KiCad symbol: `Transistor_FET:Q_PMOS_SDG`. Reference prefix: `Q`.
 * Keywords: transistor PMOS P-MOS P-MOSFET.
 */
export class Q_PMOS_SDG extends Component.withPins({
  "S": "1",
  "D": "2",
  "G": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S: "passive", D: "passive", G: "input", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_PMOS_SDG";
  override referencePrefix = "Q";
}

/**
 * P-MOSFET transistor, source/drain/gate, drain connected to mounting plane
 *
 * KiCad symbol: `Transistor_FET:Q_PMOS_SDGD`. Reference prefix: `Q`.
 * Keywords: transistor PMOS P-MOS P-MOSFET.
 */
export class Q_PMOS_SDGD extends Component.withPins({
  "S": "1",
  "D_2": "2",
  "G": "3",
  "D_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S: "passive", D_2: "passive", G: "input", D_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_PMOS_SDGD";
  override referencePrefix = "Q";
}

/**
 * P-MOSFET transistor, source/gate/drain
 *
 * KiCad symbol: `Transistor_FET:Q_PMOS_SGD`. Reference prefix: `Q`.
 * Keywords: transistor PMOS P-MOS P-MOSFET.
 */
export class Q_PMOS_SGD extends Component.withPins({
  "S": "1",
  "G": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Q_PMOS_SGD";
  override referencePrefix = "Q";
}

/**
 * 8A Id, 30V Vds, 16.5 mOhm RdsOn, N-Channel Small-Signal MOSFET, TSOT-23-6
 *
 * KiCad symbol: `Transistor_FET:RQ6E080AJ`. Reference prefix: `Q`.
 * Footprint filters: TSOT?23*.
 * @see https://fscdn.rohm.com/en/products/databook/datasheet/discrete/transistor/mosfet/rq6e080ajtcr-e.pdf
 * Keywords: N-Channel MOSFET Low-Threshold sot-457t sc-95 tsmt6.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class RQ6E080AJ extends Component.withPins({
  "D_1": "1",
  "D_2": "2",
  "G": "3",
  "S": "4",
  "D_5": "5",
  "D_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D_1: "passive", D_2: "passive", G: "input", S: "passive", D_5: "passive", D_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:RQ6E080AJ";
  override referencePrefix = "Q";
}

/**
 * 9A Id, 500V Vds, N-Channel Power MOSFET, 650mOhm Ron, 22nC Qg (typ), TO252
 *
 * KiCad symbol: `Transistor_FET:RS9N50D`. Reference prefix: `Q`.
 * Footprint filters: TO?252*.
 * @see https://www.denovocn.com/sites/default/files/RS9N50D.pdf
 * Keywords: NFET high voltage.
 * Default footprint: Package_TO_SOT_SMD:TO-252-2.
 */
export class RS9N50D extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:RS9N50D";
  override referencePrefix = "Q";
}

/**
 * 3A Id, 80V Vds, 131 mOhm RdsOn, N-Channel Small-Signal MOSFET, Body and ESD Diode, TSOT-23-6
 *
 * KiCad symbol: `Transistor_FET:RSQ030N08HZG`. Reference prefix: `Q`.
 * Footprint filters: TSOT?23*.
 * @see https://fscdn.rohm.com/en/products/databook/datasheet/discrete/transistor/mosfet/rsq030n08hzgtr-e.pdf
 * Keywords: nchan low threshold sot 457t sc 95 tsmt6.
 * Default footprint: Package_TO_SOT_SMD:TSOT-23-6.
 */
export class RSQ030N08HZG extends Component.withPins({
  "D_1": "1",
  "D_2": "2",
  "G": "3",
  "S": "4",
  "D_5": "5",
  "D_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D_1: "passive", D_2: "passive", G: "input", S: "passive", D_5: "passive", D_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:RSQ030N08HZG";
  override referencePrefix = "Q";
}

/**
 * Silicon carbide Power MOSFET 650 V, 55 mΩ typ., 40 A, ST_PowerFLAT_HV-5
 *
 * KiCad symbol: `Transistor_FET:SCTL35N65G2V`. Reference prefix: `Q`.
 * Footprint filters: ST?PowerFLAT?HV*8x8mm*.
 * @see https://www.st.com/resource/en/datasheet/sctl35n65g2v.pdf
 * Keywords: N-Channel SiC MOSFET.
 * Default footprint: Package_SON:ST_PowerFLAT_HV-5_8x8mm.
 */
export class SCTL35N65G2V extends Component.withPins({
  "G": "1",
  "DS": "2",
  "S_3": "3",
  "S_4": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", DS: "passive", S_3: "passive", S_4: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SCTL35N65G2V";
  override referencePrefix = "Q";
}

/**
 * 650V, 49mΩ typ., 25A Id, enhancement mode PowerGaN transistor, ST_PowerFLAT_HV-8
 *
 * KiCad symbol: `Transistor_FET:SGT65R65AL`. Reference prefix: `Q`.
 * Footprint filters: ST?PowerFLAT?HV*5x6mm*.
 * @see https://www.st.com/resource/en/datasheet/sgt65r65al.pdf
 * Keywords: gan hemt bottom-side-cooled e-mode kelvin.
 * Default footprint: Package_SON:ST_PowerFLAT_HV-8_5x6mm.
 */
export class SGT65R65AL extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "KS": "3",
  "G": "4",
  "D_5": "5",
  "D_6": "6",
  "D_7": "7",
  "D_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", KS: "passive", G: "input", D_5: "passive", D_6: "passive", D_7: "passive", D_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SGT65R65AL";
  override referencePrefix = "Q";
}

/**
 * 0.75A Id, 20Vds, 250mOhm@4.5V Rdson N-Channel MOSFET, DFN1006-3L
 *
 * KiCad symbol: `Transistor_FET:SP2002KNC`. Reference prefix: `Q`.
 * Footprint filters: *DFN1006*.
 * @see https://www.siliup.com/upload/pdf/202310/SP2002KNC.pdf
 * Keywords: transistor NMOS N-MOS N-MOSFET.
 * Default footprint: Package_DFN_QFN:Diodes_DFN1006-3.
 */
export class SP2002KNC extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SP2002KNC";
  override referencePrefix = "Q";
}

/**
 * -60A Id, -20V Vds, 1.9 mOhm Ron, PowerPAK-8
 *
 * KiCad symbol: `Transistor_FET:Si7141DP`. Reference prefix: `Q`.
 * Footprint filters: PowerPAK*SO*Single*.
 * @see https://www.vishay.com/docs/65596/si7141dp.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_SO:PowerPAK_SO-8_Single.
 */
export class Si7141DP extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Si7141DP";
  override referencePrefix = "Q";
}

/**
 * -60A Id, -40V Vds, 7 mOhm Ron, PowerPAK SO-8L
 *
 * KiCad symbol: `Transistor_FET:SQJ409EP`. Reference prefix: `Q`.
 * Footprint filters: PowerPAK*SO*8L*Single*.
 * @see https://www.vishay.com/docs/77707/sqj409ep.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_SO:PowerPAK_SO-8L_Single.
 */
export class SQJ409EP extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SQJ409EP";
  override referencePrefix = "Q";
}

/**
 * 602A Id, 60V Vds, N-Channel TrenchFET MOSFET, 0.85mOhm Ron, 42nC Qqd, -55 to 175 °C, LFPAK88
 *
 * KiCad symbol: `Transistor_FET:SQJQ160E`. Reference prefix: `Q`.
 * Footprint filters: LFPAK88*.
 * @see https://www.vishay.com/docs/63059/sqjq160e.pdf
 * Keywords: Power MOSFET N-MOS Automotive AEC-Q101 PowerPAK 8x8L.
 * Default footprint: Package_TO_SOT_SMD:LFPAK88.
 */
export class SQJQ160E extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "S_3": "3",
  "S_4": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", S_3: "passive", S_4: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SQJQ160E";
  override referencePrefix = "Q";
}

/**
 * 200A Id, 40V Vds, N-Channel TrenchFET MOSFET, 1.5mOhm Ron, 13nC Qqd, -55 to 175 °C, LFPAK88
 *
 * KiCad symbol: `Transistor_FET:SQJQ100E`. Reference prefix: `Q`.
 * Footprint filters: LFPAK88*.
 * @see https://www.vishay.com/docs/71828/sqjq100e.pdf
 * Keywords: Power MOSFET N-MOS Automotive AEC-Q101 PowerPAK 8x8L.
 * Default footprint: Package_TO_SOT_SMD:LFPAK88.
 */
export class SQJQ100E extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "S_3": "3",
  "S_4": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", S_3: "passive", S_4: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SQJQ100E";
  override referencePrefix = "Q";
}

/**
 * 200A Id, 40V Vds, N-Channel TrenchFET MOSFET, 1.5mOhm Ron, 20nC Qqd, -55 to 175 °C, LFPAK88
 *
 * KiCad symbol: `Transistor_FET:SQJQ100EL`. Reference prefix: `Q`.
 * Footprint filters: LFPAK88*.
 * @see https://www.vishay.com/docs/68443/sqjq100el.pdf
 * Keywords: Power MOSFET N-MOS Automotive AEC-Q101 Logic-Level PowerPAK 8x8L.
 * Default footprint: Package_TO_SOT_SMD:LFPAK88.
 */
export class SQJQ100EL extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "S_3": "3",
  "S_4": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", S_3: "passive", S_4: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SQJQ100EL";
  override referencePrefix = "Q";
}

/**
 * 296A Id, 100V Vds, N-Channel TrenchFET MOSFET, 2.53mOhm Ron, 37nC Qqd, -55 to 175 °C, LFPAK88
 *
 * KiCad symbol: `Transistor_FET:SQJQ112E`. Reference prefix: `Q`.
 * Footprint filters: LFPAK88*.
 * @see https://www.vishay.com/docs/79384/sqjq112e.pdf
 * Keywords: Power MOSFET N-MOS Automotive AEC-Q101 PowerPAK 8x8L.
 * Default footprint: Package_TO_SOT_SMD:LFPAK88.
 */
export class SQJQ112E extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "S_3": "3",
  "S_4": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", S_3: "passive", S_4: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SQJQ112E";
  override referencePrefix = "Q";
}

/**
 * 136A Id, 100V Vds, N-Channel TrenchFET MOSFET, 6.2mOhm Ron, 14nC Qqd, -55 to 175 °C, LFPAK88
 *
 * KiCad symbol: `Transistor_FET:SQJQ114EL`. Reference prefix: `Q`.
 * Footprint filters: LFPAK88*.
 * @see https://www.vishay.com/docs/62161/sqjq114el.pdf
 * Keywords: Power MOSFET N-MOS Automotive AEC-Q101 Logic-Level PowerPAK 8x8L.
 * Default footprint: Package_TO_SOT_SMD:LFPAK88.
 */
export class SQJQ114EL extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "S_3": "3",
  "S_4": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", S_3: "passive", S_4: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SQJQ114EL";
  override referencePrefix = "Q";
}

/**
 * 61A Id, 100V Vds, N-Channel TrenchFET MOSFET, 10.3mOhm Ron, 12nC Qqd, -55 to 175 °C, LFPAK88
 *
 * KiCad symbol: `Transistor_FET:SQJQ116EL`. Reference prefix: `Q`.
 * Footprint filters: LFPAK88*.
 * @see https://www.vishay.com/docs/62252/sqjq116el.pdf
 * Keywords: Power MOSFET N-MOS Automotive AEC-Q101 Logic-Level PowerPAK 8x8L.
 * Default footprint: Package_TO_SOT_SMD:LFPAK88.
 */
export class SQJQ116EL extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "S_3": "3",
  "S_4": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", S_3: "passive", S_4: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SQJQ116EL";
  override referencePrefix = "Q";
}

/**
 * 445A Id, 30V Vds, N-Channel TrenchFET MOSFET, 0.7mOhm Ron, 56nC Qqd, -55 to 175 °C, LFPAK88
 *
 * KiCad symbol: `Transistor_FET:SQJQ130EL`. Reference prefix: `Q`.
 * Footprint filters: LFPAK88*.
 * @see https://www.vishay.com/docs/78005/sqjq130el.pdf
 * Keywords: Power MOSFET N-MOS Automotive AEC-Q101 Logic-Level PowerPAK 8x8L.
 * Default footprint: Package_TO_SOT_SMD:LFPAK88.
 */
export class SQJQ130EL extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "S_3": "3",
  "S_4": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", S_3: "passive", S_4: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SQJQ130EL";
  override referencePrefix = "Q";
}

/**
 * -280A Id, 30V Vds, P-Channel MOSFET, 1.4mOhm Ron, 82nC Qgd, -55 to 175 °C, LFPAK88
 *
 * KiCad symbol: `Transistor_FET:SQJQ131EL`. Reference prefix: `Q`.
 * Footprint filters: LFPAK88*.
 * @see https://www.vishay.com/docs/77936/sqjq131el.pdf
 * Keywords: Power MOSFET P-MOS Automotive AEC-Q101 PowerPAK 8x8L.
 * Default footprint: Package_TO_SOT_SMD:LFPAK88.
 */
export class SQJQ131EL extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "S_3": "3",
  "S_4": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", S_3: "passive", S_4: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SQJQ131EL";
  override referencePrefix = "Q";
}

/**
 * 701A Id, 40V Vds, N-Channel TrenchFET MOSFET, 0.53mOhm Ron, 41nC Qqd, -55 to 175 °C, LFPAK88
 *
 * KiCad symbol: `Transistor_FET:SQJQ140E`. Reference prefix: `Q`.
 * Footprint filters: LFPAK88*.
 * @see https://www.vishay.com/docs/79764/sqjq140e.pdf
 * Keywords: Power MOSFET N-MOS Automotive AEC-Q101 PowerPAK 8x8L.
 * Default footprint: Package_TO_SOT_SMD:LFPAK88.
 */
export class SQJQ140E extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "S_3": "3",
  "S_4": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", S_3: "passive", S_4: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SQJQ140E";
  override referencePrefix = "Q";
}

/**
 * 345A Id, 40V Vds, N-Channel TrenchFET MOSFET, 1.24mOhm Ron, 20.1nC Qqd, -55 to 175 °C, LFPAK88
 *
 * KiCad symbol: `Transistor_FET:SQJQ142E`. Reference prefix: `Q`.
 * Footprint filters: LFPAK88*.
 * @see https://www.vishay.com/docs/77320/sqjq142e.pdf
 * Keywords: Power MOSFET N-MOS Automotive AEC-Q101 PowerPAK 8x8L.
 * Default footprint: Package_TO_SOT_SMD:LFPAK88.
 */
export class SQJQ142E extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "S_3": "3",
  "S_4": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", S_3: "passive", S_4: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SQJQ142E";
  override referencePrefix = "Q";
}

/**
 * 575A Id, 40V Vds, N-Channel TrenchFET MOSFET, 0.9mOhm Ron, 25nC Qqd, -55 to 175 °C, LFPAK88
 *
 * KiCad symbol: `Transistor_FET:SQJQ144AE`. Reference prefix: `Q`.
 * Footprint filters: LFPAK88*.
 * @see https://www.vishay.com/docs/77170/sqjq144ae.pdf
 * Keywords: Power MOSFET N-MOS Automotive AEC-Q101 PowerPAK 8x8L.
 * Default footprint: Package_TO_SOT_SMD:LFPAK88.
 */
export class SQJQ144AE extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "S_3": "3",
  "S_4": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", S_3: "passive", S_4: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SQJQ144AE";
  override referencePrefix = "Q";
}

/**
 * 487A Id, 40V Vds, N-Channel TrenchFET MOSFET, 0.7mOhm Ron, 33nC Qqd, -55 to 175 °C, LFPAK88
 *
 * KiCad symbol: `Transistor_FET:SQJQ146E`. Reference prefix: `Q`.
 * Footprint filters: LFPAK88*.
 * @see https://www.vishay.com/docs/62374/sqjq146e.pdf
 * Keywords: Power MOSFET N-MOS Automotive AEC-Q101 PowerPAK 8x8L.
 * Default footprint: Package_TO_SOT_SMD:LFPAK88.
 */
export class SQJQ146E extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "S_3": "3",
  "S_4": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", S_3: "passive", S_4: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SQJQ146E";
  override referencePrefix = "Q";
}

/**
 * 375A Id, 40V Vds, N-Channel TrenchFET MOSFET, 1.6mOhm Ron, 24nC Qqd, -55 to 175 °C, LFPAK88
 *
 * KiCad symbol: `Transistor_FET:SQJQ148E`. Reference prefix: `Q`.
 * Footprint filters: LFPAK88*.
 * @see https://www.vishay.com/docs/77269/sqjq148e.pdf
 * Keywords: Power MOSFET N-MOS Automotive AEC-Q101 PowerPAK 8x8L LFPAK88.
 * Default footprint: Package_TO_SOT_SMD:LFPAK88.
 */
export class SQJQ148E extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "S_3": "3",
  "S_4": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", S_3: "passive", S_4: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SQJQ148E";
  override referencePrefix = "Q";
}

/**
 * 233A Id, 40V Vds, N-Channel TrenchFET MOSFET, 1.9mOhm Ron, 17nC Qqd, -55 to 175 °C, LFPAK88
 *
 * KiCad symbol: `Transistor_FET:SQJQ150E`. Reference prefix: `Q`.
 * Footprint filters: LFPAK88*.
 * @see https://www.vishay.com/docs/77649/sqjq150e.pdf
 * Keywords: Power MOSFET N-MOS Automotive AEC-Q101 PowerPAK 8x8L.
 * Default footprint: Package_TO_SOT_SMD:LFPAK88.
 */
export class SQJQ150E extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "S_3": "3",
  "S_4": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", S_3: "passive", S_4: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SQJQ150E";
  override referencePrefix = "Q";
}

/**
 * 461A Id, 60V Vds, N-Channel TrenchFET MOSFET, 1.1mOhm Ron, 31nC Qqd, -55 to 175 °C, LFPAK88
 *
 * KiCad symbol: `Transistor_FET:SQJQ160EL`. Reference prefix: `Q`.
 * Footprint filters: LFPAK88*.
 * @see https://www.vishay.com/docs/62138/sqjq160el.pdf
 * Keywords: Power MOSFET N-MOS Automotive AEC-Q101 Logic-Level PowerPAK 8x8L.
 * Default footprint: Package_TO_SOT_SMD:LFPAK88.
 */
export class SQJQ160EL extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "S_3": "3",
  "S_4": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", S_3: "passive", S_4: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SQJQ160EL";
  override referencePrefix = "Q";
}

/**
 * 430A Id, 80V Vds, N-Channel TrenchFET MOSFET, 1.4mOhm Ron, 36nC Qqd, -55 to 175 °C, LFPAK88
 *
 * KiCad symbol: `Transistor_FET:SQJQ184E`. Reference prefix: `Q`.
 * Footprint filters: LFPAK88*.
 * @see https://www.vishay.com/docs/77102/sqjq184e.pdf
 * Keywords: Power MOSFET N-MOS Automotive AEC-Q101 PowerPAK 8x8L.
 * Default footprint: Package_TO_SOT_SMD:LFPAK88.
 */
export class SQJQ184E extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "S_3": "3",
  "S_4": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", S_3: "passive", S_4: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SQJQ184E";
  override referencePrefix = "Q";
}

/**
 * 245A Id, 80V Vds, N-Channel TrenchFET MOSFET, 2.3mOhm Ron, 26nC Qqd, -55 to 175 °C, LFPAK88
 *
 * KiCad symbol: `Transistor_FET:SQJQ186E`. Reference prefix: `Q`.
 * Footprint filters: LFPAK88*.
 * @see https://www.vishay.com/docs/62006/sqjq186e.pdf
 * Keywords: Power MOSFET N-MOS Automotive AEC-Q101 PowerPAK 8x8L.
 * Default footprint: Package_TO_SOT_SMD:LFPAK88.
 */
export class SQJQ186E extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "S_3": "3",
  "S_4": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", S_3: "passive", S_4: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SQJQ186E";
  override referencePrefix = "Q";
}

/**
 * 200A Id, 40V Vds, N-Channel TrenchFET MOSFET, 2mOhm Ron, 29nC Qqd, -55 to 175 °C, LFPAK88
 *
 * KiCad symbol: `Transistor_FET:SQJQ402E`. Reference prefix: `Q`.
 * Footprint filters: LFPAK88*.
 * @see https://www.vishay.com/docs/62748/sqjq402e.pdf
 * Keywords: Power MOSFET N-MOS Automotive AEC-Q101 Logic-Level PowerPAK 8x8L.
 * Default footprint: Package_TO_SOT_SMD:LFPAK88.
 */
export class SQJQ402E extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "S_3": "3",
  "S_4": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", S_3: "passive", S_4: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SQJQ402E";
  override referencePrefix = "Q";
}

/**
 * 200A Id, 40V Vds, N-Channel TrenchFET MOSFET, 1.72mOhm Ron, 27nC Qqd, -55 to 175 °C, LFPAK88
 *
 * KiCad symbol: `Transistor_FET:SQJQ404E`. Reference prefix: `Q`.
 * Footprint filters: LFPAK88*.
 * @see https://www.vishay.com/docs/76570/sqjq404e.pdf
 * Keywords: Power MOSFET N-MOS Automotive AEC-Q101 PowerPAK 8x8L.
 * Default footprint: Package_TO_SOT_SMD:LFPAK88.
 */
export class SQJQ404E extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "S_3": "3",
  "S_4": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", S_3: "passive", S_4: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SQJQ404E";
  override referencePrefix = "Q";
}

/**
 * 135A Id, 100V Vds, N-Channel TrenchFET MOSFET, 4mOhm Ron, 20nC Qqd, -55 to 175 °C, LFPAK88
 *
 * KiCad symbol: `Transistor_FET:SQJQ410EL`. Reference prefix: `Q`.
 * Footprint filters: LFPAK88*.
 * @see https://www.vishay.com/docs/76643/sqjq410el.pdf
 * Keywords: Power MOSFET N-MOS Automotive AEC-Q101 Logic-Level PowerPAK 8x8L.
 * Default footprint: Package_TO_SOT_SMD:LFPAK88.
 */
export class SQJQ410EL extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "S_3": "3",
  "S_4": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", S_3: "passive", S_4: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SQJQ410EL";
  override referencePrefix = "Q";
}

/**
 * 200A Id, 60V Vds, N-Channel TrenchFET MOSFET, 1.9mOhm Ron, 14nC Qqd, -55 to 175 °C, LFPAK88
 *
 * KiCad symbol: `Transistor_FET:SQJQ466E`. Reference prefix: `Q`.
 * Footprint filters: LFPAK88*.
 * @see https://www.vishay.com/docs/75138/sqjq466e.pdf
 * Keywords: Power MOSFET N-MOS Automotive AEC-Q101 PowerPAK 8x8L.
 * Default footprint: Package_TO_SOT_SMD:LFPAK88.
 */
export class SQJQ466E extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "S_3": "3",
  "S_4": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", S_3: "passive", S_4: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SQJQ466E";
  override referencePrefix = "Q";
}

/**
 * 150A Id, 80V Vds, N-Channel TrenchFET MOSFET, 3mOhm Ron, 21nC Qqd, -55 to 175 °C, LFPAK88
 *
 * KiCad symbol: `Transistor_FET:SQJQ480E`. Reference prefix: `Q`.
 * Footprint filters: LFPAK88*.
 * @see https://www.vishay.com/docs/76718/sqjq480e.pdf
 * Keywords: Power MOSFET N-MOS Automotive AEC-Q101 PowerPAK 8x8L.
 * Default footprint: Package_TO_SOT_SMD:LFPAK88.
 */
export class SQJQ480E extends Component.withPins({
  "G": "1",
  "S_2": "2",
  "S_3": "3",
  "S_4": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S_2: "passive", S_3: "passive", S_4: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SQJQ480E";
  override referencePrefix = "Q";
}

/**
 * 24A Id, 650V Vds, N-Channel MDmesh M2 MOSFET, 140mOhm Ron, D2PAK
 *
 * KiCad symbol: `Transistor_FET:STB33N65M2`. Reference prefix: `Q`.
 * Footprint filters: TO?263*.
 * @see https://www.st.com/resource/en/datasheet/stb33n65m2.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-2.
 */
export class STB33N65M2 extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "passive", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:STB33N65M2";
  override referencePrefix = "Q";
}

/**
 * 34A Id, 600V Vds, N-Channel MDmesh M2 MOSFET, 78mOhm Ron, D2PAK
 *
 * KiCad symbol: `Transistor_FET:STB40N60M2`. Reference prefix: `Q`.
 * Footprint filters: TO?263*.
 * @see https://www.st.com/resource/en/datasheet/stp40n60m2.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-263-2.
 */
export class STB40N60M2 extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "passive", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:STB40N60M2";
  override referencePrefix = "Q";
}

/**
 * 5.4A Id, 400V Vds, N-Channel MOSFET, 1Ohm Ron, DPAK
 *
 * KiCad symbol: `Transistor_FET:STD7NK40Z`. Reference prefix: `Q`.
 * Footprint filters: TO?252*.
 * @see https://www.st.com/resource/en/datasheet/std7nk40zt4.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-252-2.
 */
export class STD7NK40Z extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "passive", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:STD7NK40Z";
  override referencePrefix = "Q";
}

/**
 * PowerMesh II MOSFET, N-Channel, 600V Vds, 0.098Ω Rds(on), 40A Id, SOT-227 (minibloc, ISOTOP)
 *
 * KiCad symbol: `Transistor_FET:STE40NC60`. Reference prefix: `Q`.
 * Footprint filters: *SOT*227*.
 * @see https://www.st.com/resource/en/datasheet/ste40nc60.pdf
 * Keywords: STMicroelectronics avalanche-tested power-mosfet.
 * Default footprint: Package_TO_SOT_THT:SOT-227.
 */
export class STE40NC60 extends Component.withPins({
  "S_1": "1",
  "G": "2",
  "D": "3",
  "S_4": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", G: "input", D: "passive", S_4: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:STE40NC60";
  override referencePrefix = "Q";
}

/**
 * 2A Id, 60V Vds, Dual N-Channel MOSFET, 180mOhm Ron, SO-8
 *
 * KiCad symbol: `Transistor_FET:STS2DNE60`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.st.com/resource/en/datasheet/CD00001537.pdf
 * Keywords: Dual N-Channel MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class STS2DNE60 extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "passive", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "passive", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:STS2DNE60";
  override referencePrefix = "Q";
}

/**
 * -19A Id, -60V Vds, TrenchFET P-Channel Power MOSFET, 60mOhm Ron, 40nC Qg, -55 to 150 °C, TO-252-2
 *
 * KiCad symbol: `Transistor_FET:SUD19P06-60`. Reference prefix: `Q`.
 * Footprint filters: TO?252*.
 * @see https://www.vishay.com/docs/69253/sud19p06.pdf
 * Keywords: TrenchFET P-Channel Power MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-252-2.
 */
export class SUD19P06_60 extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SUD19P06-60";
  override referencePrefix = "Q";
}

/**
 * -8.4A Id, -60V Vds, TrenchFET P-Channel Power MOSFET, 155mOhm Ron, 19nC Qg, -55 to 150 °C, TO-252-2
 *
 * KiCad symbol: `Transistor_FET:SUD08P06-155L`. Reference prefix: `Q`.
 * Footprint filters: TO?252*.
 * @see https://www.vishay.com/docs/62843/sud08p06-155l-ge3.pdf
 * Keywords: TrenchFET P-Channel Power MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-252-2.
 */
export class SUD08P06_155L extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SUD08P06-155L";
  override referencePrefix = "Q";
}

/**
 * -8.8A Id, -100V Vds, TrenchFET P-Channel Power MOSFET, 195mOhm Ron, 34.8nC Qg, -55 to 150 °C, TO-252-2
 *
 * KiCad symbol: `Transistor_FET:SUD09P10-195`. Reference prefix: `Q`.
 * Footprint filters: TO?252*.
 * @see https://www.vishay.com/docs/65903/SUD09P10.pdf
 * Keywords: TrenchFET P-Channel Power MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-252-2.
 */
export class SUD09P10_195 extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SUD09P10-195";
  override referencePrefix = "Q";
}

/**
 * -45A Id, -30V Vds, TrenchFET P-Channel Power MOSFET, 8.7mOhm Ron, 90nC Qg, -55 to 150 °C, TO-252-2
 *
 * KiCad symbol: `Transistor_FET:SUD45P03-09`. Reference prefix: `Q`.
 * Footprint filters: TO?252*.
 * @see https://www.vishay.com/docs/65595/sud45p03.pdf
 * Keywords: TrenchFET P-Channel Power MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-252-2.
 */
export class SUD45P03_09 extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SUD45P03-09";
  override referencePrefix = "Q";
}

/**
 * -50A Id, -40V Vds, TrenchFET P-Channel Power MOSFET, 8.1mOhm Ron, 159nC Qg, -55 to 150 °C, TO-252-2
 *
 * KiCad symbol: `Transistor_FET:SUD50P04-08`. Reference prefix: `Q`.
 * Footprint filters: TO?252*.
 * @see https://www.vishay.com/docs/65594/sud50p04-08.pdf
 * Keywords: TrenchFET P-Channel Power MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-252-2.
 */
export class SUD50P04_08 extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SUD50P04-08";
  override referencePrefix = "Q";
}

/**
 * -50A Id, -60V Vds, TrenchFET P-Channel Power MOSFET, 15mOhm Ron, 165nC Qg, -55 to 150 °C, TO-252-2
 *
 * KiCad symbol: `Transistor_FET:SUD50P06-15`. Reference prefix: `Q`.
 * Footprint filters: TO?252*.
 * @see https://www.vishay.com/docs/68940/sud50p06.pdf
 * Keywords: TrenchFET P-Channel Power MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-252-2.
 */
export class SUD50P06_15 extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SUD50P06-15";
  override referencePrefix = "Q";
}

/**
 * -50A Id, -80V Vds, TrenchFET P-Channel Power MOSFET, 25.2mOhm Ron, 160nC Qg, -55 to 175 °C, TO-252-2
 *
 * KiCad symbol: `Transistor_FET:SUD50P08-25L`. Reference prefix: `Q`.
 * Footprint filters: TO?252*.
 * @see https://www.vishay.com/docs/73443/sud50p08.pdf
 * Keywords: TrenchFET P-Channel Power MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-252-2.
 */
export class SUD50P08_25L extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SUD50P08-25L";
  override referencePrefix = "Q";
}

/**
 * -37A Id, -100V Vds, TrenchFET P-Channel Power MOSFET, 43mOhm Ron, 160nC Qg, -55 to 150 °C, TO-252-2
 *
 * KiCad symbol: `Transistor_FET:SUD50P10-43L`. Reference prefix: `Q`.
 * Footprint filters: TO?252*.
 * @see https://www.vishay.com/docs/62504/sud50p10-43l-ge3.pdf
 * Keywords: TrenchFET P-Channel Power MOSFET.
 * Default footprint: Package_TO_SOT_SMD:TO-252-2.
 */
export class SUD50P10_43L extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SUD50P10-43L";
  override referencePrefix = "Q";
}

/**
 * 30V Vds, 1.4A Id, N-Channel MOSFET, SC-70
 *
 * KiCad symbol: `Transistor_FET:Si1308EDL`. Reference prefix: `Q`.
 * Footprint filters: SOT?323*.
 * @see https://www.vishay.com/docs/63399/si1308edl.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-323_SC-70.
 */
export class Si1308EDL extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Si1308EDL";
  override referencePrefix = "Q";
}

/**
 * 12V Vds, TrenchFET N-Channel Power MOSFET, SC-70-6
 *
 * KiCad symbol: `Transistor_FET:Si1442DH`. Reference prefix: `Q`.
 * Footprint filters: SOT?363*.
 * @see http://www.vishay.com/docs/63772/si1442dh.pdf
 * Keywords: TrenchFET N-Channel Power MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class Si1442DH extends Component.withPins({
  "D_1": "1",
  "D_2": "2",
  "G": "3",
  "S": "4",
  "D_5": "5",
  "D_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D_1: "passive", D_2: "passive", G: "input", S: "passive", D_5: "passive", D_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Si1442DH";
  override referencePrefix = "Q";
}

/**
 * -4.4A Id, -40V Vds, P-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:Si2319CDS`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.vishay.com/docs/66709/si2319cd.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class Si2319CDS extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Si2319CDS";
  override referencePrefix = "Q";
}

/**
 * -3.6A Id, -30V Vds, P-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:Si2371EDS`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.vishay.com/docs/63924/si2371eds.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class Si2371EDS extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Si2371EDS";
  override referencePrefix = "Q";
}

/**
 * 30V Vds, 6.3A Id, N-Channel MOSFET, TSOP-6
 *
 * KiCad symbol: `Transistor_FET:Si3456DDV`. Reference prefix: `Q`.
 * Footprint filters: TSOP*1.65x3.05mm*P0.95mm*.
 * @see https://www.vishay.com/docs/69075/si3456ddv.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_SO:TSOP-6_1.65x3.05mm_P0.95mm.
 */
export class Si3456DDV extends Component.withPins({
  "D_1": "1",
  "D_2": "2",
  "G": "3",
  "S": "4",
  "D_5": "5",
  "D_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D_1: "passive", D_2: "passive", G: "input", S: "passive", D_5: "passive", D_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Si3456DDV";
  override referencePrefix = "Q";
}

/**
 * 19.3A Id, 30V Vds, TrenchFET N-Channel Power MOSFET, SO-8
 *
 * KiCad symbol: `Transistor_FET:Si4162DY`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see http://www.vishay.com/docs/68967/si4162dy.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class Si4162DY extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D_5": "5",
  "D_6": "6",
  "D_7": "7",
  "D_8": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D_5: "passive", D_6: "passive", D_7: "passive", D_8: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Si4162DY";
  override referencePrefix = "Q";
}

/**
 * 3.9A Id, 30V Vds, Dual N and P Channel MOSFET, 65mOhm Ron, 10V Vgs, SO8L
 *
 * KiCad symbol: `Transistor_FET:Si4532DY`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/SI4532DY-D.PDF
 * Keywords: Dual N-Channel P-Channel MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class Si4532DY extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "input", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "input", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Si4532DY";
  override referencePrefix = "Q";
}

/**
 * Dual N and P Channel MOSFET, 6A Id, 30V Vds, 28mOhm Ron, 10V Vgs, SO8L
 *
 * KiCad symbol: `Transistor_FET:Si4542DY`. Reference prefix: `Q`.
 * Footprint filters: SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.onsemi.com/pub/Collateral/SI4542DY-D.PDF
 * Keywords: Dual N-Channel P-Channel MOSFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class Si4542DY extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "input", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "input", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Si4542DY";
  override referencePrefix = "Q";
}

/**
 * 30A Id, 30V Vds, 2.4mOhm Ron, PowerPAK-8
 *
 * KiCad symbol: `Transistor_FET:Si7336ADP`. Reference prefix: `Q`.
 * Footprint filters: PowerPAK*SO*Single*.
 * @see https://www.vishay.com/docs/73152/si7336adp.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_SO:PowerPAK_SO-8_Single.
 */
export class Si7336ADP extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Si7336ADP";
  override referencePrefix = "Q";
}

/**
 * 5.3A Id, 200V Vds, 80mOhm Ron, PowerPAK-8
 *
 * KiCad symbol: `Transistor_FET:Si7450DP`. Reference prefix: `Q`.
 * Footprint filters: PowerPAK*SO*Single*.
 * @see https://www.vishay.com/docs/71432/si7450dp.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_SO:PowerPAK_SO-8_Single.
 */
export class Si7450DP extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Si7450DP";
  override referencePrefix = "Q";
}

/**
 * -35A Id, -30V Vds, 0.0123 Ohm Ron, PowerPAK-8
 *
 * KiCad symbol: `Transistor_FET:Si7617DN`. Reference prefix: `Q`.
 * Footprint filters: Vishay*PowerPAK*1212*Single*.
 * @see https://www.vishay.com/docs/65164/si7617dn.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_SO:Vishay_PowerPAK_1212-8_Single.
 */
export class Si7617DN extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Si7617DN";
  override referencePrefix = "Q";
}

/**
 * Dual N-Channel MOSFET, 8A Id, 60V Vds, 0.029 ohms Rds(on), SOIC-8
 *
 * KiCad symbol: `Transistor_FET:Si9634DY`. Reference prefix: `Q`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.vishay.com/docs/62114/si9634dy.pdf
 * Keywords: Vishay Siliconix TrenchFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class Si9634DY extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "passive", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "passive", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Si9634DY";
  override referencePrefix = "Q";
}

/**
 * Dual N-Channel MOSFET, 5.3A Id, 60V Vds, 0.058 ohms Rds(on), SOIC-8
 *
 * KiCad symbol: `Transistor_FET:Si9945BDY`. Reference prefix: `Q`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.vishay.com/docs/64737/si9945bdy.pdf
 * Keywords: Vishay Siliconix TrenchFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class Si9945BDY extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "passive", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "passive", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Si9945BDY";
  override referencePrefix = "Q";
}

/**
 * Dual P-Channel MOSFET, ±2.6A Id, -60V Vds, 0.17 ohms Rds(on), SOIC-8
 *
 * KiCad symbol: `Transistor_FET:Si9948AEY`. Reference prefix: `Q`.
 * Footprint filters: *SOIC*3.9x4.9mm*P1.27mm*.
 * @see https://www.mouser.com/datasheet/2/427/si9948ae-1765388.pdf
 * Keywords: Vishay Siliconix TrenchFET.
 * Default footprint: Package_SO:SOIC-8_3.9x4.9mm_P1.27mm.
 */
export class Si9948AEY extends Component.withPins({
  "S1": "1",
  "G1": "2",
  "D1_7": "7",
  "D1_8": "8",
  "S2": "3",
  "G2": "4",
  "D2_5": "5",
  "D2_6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S1: "passive", G1: "input", D1_7: "passive", D1_8: "passive", S2: "passive", G2: "input", D2_5: "passive", D2_6: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:Si9948AEY";
  override referencePrefix = "Q";
}

/**
 * -10A Id, -30V Vds, P-Channel MOSFET
 *
 * KiCad symbol: `Transistor_FET:SiA453EDJ`. Reference prefix: `Q`.
 * Footprint filters: Vishay*PowerPAK*SC70*Single*.
 * @see http://www.vishay.com/docs/62864/sia453edj.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:Vishay_PowerPAK_SC70-6L_Single.
 */
export class SiA453EDJ extends Component.withPins({
  "D": "1",
  "G": "3",
  "S": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SiA453EDJ";
  override referencePrefix = "Q";
}

/**
 * -12A Id, -30V Vds, P-Channel MOSFET, PowerPAK SC70-6
 *
 * KiCad symbol: `Transistor_FET:SiA449DJ`. Reference prefix: `Q`.
 * Footprint filters: Vishay*PowerPAK*SC70*Single*.
 * @see http://www.vishay.com/docs/62644/sia449dj.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:Vishay_PowerPAK_SC70-6L_Single.
 */
export class SiA449DJ extends Component.withPins({
  "D": "1",
  "G": "3",
  "S": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SiA449DJ";
  override referencePrefix = "Q";
}

/**
 * 12A Id, 30V Vds, N-Channel MOSFET, Rds 18mΩ PowerPAK, SC70-6
 *
 * KiCad symbol: `Transistor_FET:SiA462DJ`. Reference prefix: `U`.
 * Footprint filters: Vishay*PowerPAK*SC70*Single*.
 * @see https://www.vishay.com/docs/63269/sia462dj.pdf
 * Keywords: NMOS NFET Vishay.
 * Default footprint: Package_TO_SOT_SMD:Vishay_PowerPAK_SC70-6L_Single.
 */
export class SiA462DJ extends Component.withPins({
  "D": "1",
  "G": "3",
  "S": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "passive", G: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SiA462DJ";
  override referencePrefix = "U";
}

/**
 * 60A Id, 125V Vds N-Channel MOSFET, 9.6mOhm Ron, 19.4 nC Qg(typ), PowerPAK-8
 *
 * KiCad symbol: `Transistor_FET:SiR696DP`. Reference prefix: `Q`.
 * Footprint filters: PowerPAK*SO*Single*.
 * @see https://www.vishay.com/docs/65689/sir696dp.pdf
 * Keywords: NMOS NFET Vishay.
 * Default footprint: Package_SO:PowerPAK_SO-8_Single.
 */
export class SiR696DP extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SiR696DP";
  override referencePrefix = "Q";
}

/**
 * -35A Id, -20V Vds, P-Channel MOSFET, PowerPAK 1212-8 Single
 *
 * KiCad symbol: `Transistor_FET:SiS415DNT`. Reference prefix: `Q`.
 * Footprint filters: Vishay*PowerPAK*1212*Single*.
 * @see https://www.vishay.com/docs/63684/sis415dnt.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_SO:Vishay_PowerPAK_1212-8_Single.
 */
export class SiS415DNT extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SiS415DNT";
  override referencePrefix = "Q";
}

/**
 * -35A Id, -40V Vds, P-Channel MOSFET, PowerPAK 1212-8 Single
 *
 * KiCad symbol: `Transistor_FET:SiS443DN`. Reference prefix: `Q`.
 * Footprint filters: Vishay*PowerPAK*1212*Single*.
 * @see https://www.vishay.com/docs/63253/sis443dn.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_SO:Vishay_PowerPAK_1212-8_Single.
 */
export class SiS443DN extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SiS443DN";
  override referencePrefix = "Q";
}

/**
 * 35A Id, 20V Vds, N-Channel MOSFET, PowerPAK 1212-8 Single
 *
 * KiCad symbol: `Transistor_FET:SiS454DN`. Reference prefix: `Q`.
 * Footprint filters: Vishay*PowerPAK*1212*Single*.
 * @see https://www.vishay.com/docs/66707/sis454dn.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_SO:Vishay_PowerPAK_1212-8_Single.
 */
export class SiS454DN extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SiS454DN";
  override referencePrefix = "Q";
}

/**
 * -50A Id, -30V Vds, P-Channel MOSFET, PowerPAK 1212-8 Single
 *
 * KiCad symbol: `Transistor_FET:SiSS27DN`. Reference prefix: `Q`.
 * Footprint filters: Vishay*PowerPAK*1212*Single*.
 * @see http://www.vishay.com/docs/62847/siss27dn.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_SO:Vishay_PowerPAK_1212-8_Single.
 */
export class SiSS27DN extends Component.withPins({
  "S_1": "1",
  "S_2": "2",
  "S_3": "3",
  "G": "4",
  "D": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S_1: "passive", S_2: "passive", S_3: "passive", G: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:SiSS27DN";
  override referencePrefix = "Q";
}

/**
 * 60V Vds, 0.2A Id, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:T2N7002AK`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://toshiba.semicon-storage.com/info/docget.jsp?did=29712&prodName=T2N7002AK
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class T2N7002AK extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:T2N7002AK";
  override referencePrefix = "Q";
}

/**
 * -0.18A Id, -60V Vds, P-Channel MOSFET, TO-92
 *
 * KiCad symbol: `Transistor_FET:TP0610L`. Reference prefix: `Q`.
 * Footprint filters: TO?92L*.
 * @see http://www.vishay.com/docs/70209/70209.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-92L_Inline.
 */
export class TP0610L extends Component.withPins({
  "S": "1",
  "G": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:TP0610L";
  override referencePrefix = "Q";
}

/**
 * -2.8A Id, -20V Vds, P-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:TSM2301ACX`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://services.taiwansemi.com/storage/resources/datasheet/TSM2301A_C15.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class TSM2301ACX extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:TSM2301ACX";
  override referencePrefix = "Q";
}

/**
 * 3.9A Id, 20V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:TSM2302CX`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see https://services.taiwansemi.com/storage/resources/datasheet/TSM2302CX_F2406.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class TSM2302CX extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:TSM2302CX";
  override referencePrefix = "Q";
}

/**
 * 0.15A Id, 60V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:VN10LF`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/VN10LF.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class VN10LF extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:VN10LF";
  override referencePrefix = "Q";
}

/**
 * -0.18A Id, -60V Vds, P-Channel MOSFET, TO-92
 *
 * KiCad symbol: `Transistor_FET:VP0610L`. Reference prefix: `Q`.
 * Footprint filters: TO?92L*.
 * @see http://www.vishay.com/docs/70209/70209.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_TO_SOT_THT:TO-92L_Inline.
 */
export class VP0610L extends Component.withPins({
  "S": "1",
  "G": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { S: "passive", G: "input", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:VP0610L";
  override referencePrefix = "Q";
}

/**
 * -0.18A Id, -60V Vds, P-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:VP0610T`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.vishay.com/docs/70209/70209.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class VP0610T extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:VP0610T";
  override referencePrefix = "Q";
}

/**
 * 0.15A Id, 60V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:ZVN3306F`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ZVN3306F.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ZVN3306F extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:ZVN3306F";
  override referencePrefix = "Q";
}

/**
 * 0.1A Id, 100V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:ZVN3310F`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ZVN3310F.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ZVN3310F extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:ZVN3310F";
  override referencePrefix = "Q";
}

/**
 * 0.06A Id, 200V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:ZVN3320F`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ZVN3320F.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ZVN3320F extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:ZVN3320F";
  override referencePrefix = "Q";
}

/**
 * 0.2A Id, 60V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:ZVN4106F`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ZVN4106F.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ZVN4106F extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:ZVN4106F";
  override referencePrefix = "Q";
}

/**
 * 1.7A Id, 20V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:ZXM61N02F`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ZXM61N02F.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ZXM61N02F extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:ZXM61N02F";
  override referencePrefix = "Q";
}

/**
 * 1.4A Id, 30V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:ZXM61N03F`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ZXM61N03F.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ZXM61N03F extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:ZXM61N03F";
  override referencePrefix = "Q";
}

/**
 * 0.76A Id, 100V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:ZXMN10A07F`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ZXMN10A07F.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ZXMN10A07F extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:ZXMN10A07F";
  override referencePrefix = "Q";
}

/**
 * 2.2A Id, 20V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:ZXMN2A01F`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ZXMN2A01F.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ZXMN2A01F extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:ZXMN2A01F";
  override referencePrefix = "Q";
}

/**
 * 4.1A Id, 20V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:ZXMN2A14F`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ZXMN2A14F.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ZXMN2A14F extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:ZXMN2A14F";
  override referencePrefix = "Q";
}

/**
 * 2.4A Id, 20V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:ZXMN2B01F`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ZXMN2B01F.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ZXMN2B01F extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:ZXMN2B01F";
  override referencePrefix = "Q";
}

/**
 * 4.3A Id, 20V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:ZXMN2B14FH`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ZXMN2B14FH.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ZXMN2B14FH extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:ZXMN2B14FH";
  override referencePrefix = "Q";
}

/**
 * 4.9A Id, 20V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:ZXMN2F30FH`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ZXMN2F30FH.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ZXMN2F30FH extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:ZXMN2F30FH";
  override referencePrefix = "Q";
}

/**
 * 4A Id, 20V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:ZXMN2F34FH`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ZXMN2F34FH.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ZXMN2F34FH extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:ZXMN2F34FH";
  override referencePrefix = "Q";
}

/**
 * 2A Id, 30V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:ZXMN3A01F`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ZXMN3A01F.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ZXMN3A01F extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:ZXMN3A01F";
  override referencePrefix = "Q";
}

/**
 * 3.2A Id, 30V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:ZXMN3A14F`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ZXMN3A14F.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ZXMN3A14F extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:ZXMN3A14F";
  override referencePrefix = "Q";
}

/**
 * 2A Id, 30V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:ZXMN3B01F`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ZXMN3B01F.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ZXMN3B01F extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:ZXMN3B01F";
  override referencePrefix = "Q";
}

/**
 * 3.5A Id, 30V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:ZXMN3B14F`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ZXMN3B14F.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ZXMN3B14F extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:ZXMN3B14F";
  override referencePrefix = "Q";
}

/**
 * 4.6A Id, 30V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:ZXMN3F30FH`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ZXMN3F30FH.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ZXMN3F30FH extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:ZXMN3F30FH";
  override referencePrefix = "Q";
}

/**
 * 1.4A Id, 60V Vds, N-Channel MOSFET, SOT-23
 *
 * KiCad symbol: `Transistor_FET:ZXMN6A07F`. Reference prefix: `Q`.
 * Footprint filters: SOT?23*.
 * @see http://www.diodes.com/assets/Datasheets/ZXMN6A07F.pdf
 * Keywords: N-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-23.
 */
export class ZXMN6A07F extends Component.withPins({
  "G": "1",
  "S": "2",
  "D": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", S: "passive", D: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:ZXMN6A07F";
  override referencePrefix = "Q";
}

/**
 * -6.4A Id, -40V Vds, P-Channel MOSFET, SOT-223
 *
 * KiCad symbol: `Transistor_FET:ZXMP4A16G`. Reference prefix: `Q`.
 * Footprint filters: SOT?223*.
 * @see https://www.diodes.com/assets/Datasheets/ZXMP4A16G.pdf
 * Keywords: P-Channel MOSFET.
 * Default footprint: Package_TO_SOT_SMD:SOT-223-3_TabPin2.
 */
export class ZXMP4A16G extends Component.withPins({
  "G": "1",
  "D": "2",
  "S": "3",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", D: "passive", S: "passive", ...opts.pinTypes } });
  }
  override schema = "Transistor_FET:ZXMP4A16G";
  override referencePrefix = "Q";
}
