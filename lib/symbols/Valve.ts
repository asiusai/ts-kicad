// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * triple diode triode
 *
 * KiCad symbol: `Valve:EABC80`. Reference prefix: `U`.
 * Footprint filters: VALVE*NOVAL*P*.
 * @see https://frank.pocnet.net/sheets/082/e/EABC80.pdf
 * Keywords: diode triode valve.
 * Default footprint: Valve:Valve_Noval_P.
 */
export class EABC80 extends Component.withPins({
  "A2_2": "2",
  "K_3": "3",
  "A1": "1",
  "A3": "6",
  "K_7": "7",
  "G": "8",
  "A2_9": "9",
  "F1": "4",
  "F2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A2_2: "output", K_3: "input", A1: "input", A3: "output", K_7: "input", G: "input", A2_9: "output", F1: "input", F2: "input", ...opts.pinTypes } });
  }
  override schema = "Valve:EABC80";
  override referencePrefix = "U";
}

/**
 * triple diode triode
 *
 * KiCad symbol: `Valve:6AK8`. Reference prefix: `U`.
 * Footprint filters: VALVE*NOVAL*P*.
 * @see https://frank.pocnet.net/sheets/082/e/EABC80.pdf
 * Keywords: diode triode valve.
 * Default footprint: Valve:Valve_Noval_P.
 */
export class _6AK8 extends Component.withPins({
  "A2_2": "2",
  "K_3": "3",
  "A1": "1",
  "A3": "6",
  "K_7": "7",
  "G": "8",
  "A2_9": "9",
  "F1": "4",
  "F2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A2_2: "output", K_3: "input", A1: "input", A3: "output", K_7: "input", G: "input", A2_9: "output", F1: "input", F2: "input", ...opts.pinTypes } });
  }
  override schema = "Valve:6AK8";
  override referencePrefix = "U";
}

/**
 * triple diode triode
 *
 * KiCad symbol: `Valve:9AK8`. Reference prefix: `U`.
 * Footprint filters: VALVE*NOVAL*P*.
 * @see https://frank.pocnet.net/sheets/082/e/EABC80.pdf
 * Keywords: diode triode valve.
 * Default footprint: Valve:Valve_Noval_P.
 */
export class _9AK8 extends Component.withPins({
  "A2_2": "2",
  "K_3": "3",
  "A1": "1",
  "A3": "6",
  "K_7": "7",
  "G": "8",
  "A2_9": "9",
  "F1": "4",
  "F2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A2_2: "output", K_3: "input", A1: "input", A3: "output", K_7: "input", G: "input", A2_9: "output", F1: "input", F2: "input", ...opts.pinTypes } });
  }
  override schema = "Valve:9AK8";
  override referencePrefix = "U";
}

/**
 * Subminiature Pentode
 *
 * KiCad symbol: `Valve:CK6418`. Reference prefix: `U`.
 * Footprint filters: VALVE*MINI*PENTODE*LINEAR*.
 * @see https://frank.pocnet.net/sheets/127/6/6418.pdf
 * Keywords: subminiature pentode valve.
 * Default footprint: Valve:Valve_Mini_Pentode_Linear.
 */
export class CK6418 extends Component.withPins({
  "F+,G3_3": "3",
  "P": "1",
  "G2": "2",
  "G1": "4",
  "F+,G3_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "F+,G3_3": "power_in", P: "output", G2: "input", G1: "input", "F+,G3_5": "power_in", ...opts.pinTypes } });
  }
  override schema = "Valve:CK6418";
  override referencePrefix = "U";
}

/**
 * Subminiature Pentode
 *
 * KiCad symbol: `Valve:CK548DX`. Reference prefix: `U`.
 * Footprint filters: VALVE*MINI*PENTODE*LINEAR*.
 * Keywords: subminiature pentode valve.
 * Default footprint: Valve:Valve_Mini_Pentode_Linear.
 */
export class CK548DX extends Component.withPins({
  "F+,G3_3": "3",
  "P": "1",
  "G2": "2",
  "G1": "4",
  "F+,G3_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "F+,G3_3": "power_in", P: "output", G2: "input", G1: "input", "F+,G3_5": "power_in", ...opts.pinTypes } });
  }
  override schema = "Valve:CK548DX";
  override referencePrefix = "U";
}

/**
 * single triode
 *
 * KiCad symbol: `Valve:EC92`. Reference prefix: `U`.
 * Footprint filters: VALVE*MINI*P*.
 * @see http://www.r-type.org/pdfs/ec92.pdf
 * Keywords: triode valve.
 * Default footprint: Valve:Valve_Mini_P.
 */
export class EC92 extends Component.withPins({
  "A": "1",
  "G": "6",
  "K": "7",
  "F1": "3",
  "F2": "4",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A: "output", G: "input", K: "bidirectional", F1: "power_in", F2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Valve:EC92";
  override referencePrefix = "U";
}

/**
 * double triode
 *
 * KiCad symbol: `Valve:ECC81`. Reference prefix: `U`.
 * Footprint filters: VALVE*NOVAL*P*.
 * @see http://www.r-type.org/pdfs/ecc81.pdf
 * Keywords: triode valve.
 * Default footprint: Valve:Valve_Noval_P.
 */
export class ECC81 extends Component.withPins({
  "A_6": "6",
  "G_7": "7",
  "K_8": "8",
  "A_1": "1",
  "G_2": "2",
  "K_3": "3",
  "F1_4": "4",
  "F1_5": "5",
  "F2": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A_6: "output", G_7: "input", K_8: "bidirectional", A_1: "output", G_2: "input", K_3: "bidirectional", F1_4: "power_in", F1_5: "power_in", F2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Valve:ECC81";
  override referencePrefix = "U";
}

/**
 * double triode
 *
 * KiCad symbol: `Valve:ECC83`. Reference prefix: `U`.
 * Footprint filters: VALVE*NOVAL*P*.
 * @see http://www.r-type.org/pdfs/ecc83.pdf
 * Keywords: triode valve.
 * Default footprint: Valve:Valve_Noval_P.
 */
export class ECC83 extends Component.withPins({
  "A_6": "6",
  "G_7": "7",
  "K_8": "8",
  "A_1": "1",
  "G_2": "2",
  "K_3": "3",
  "F1_4": "4",
  "F1_5": "5",
  "F2": "9",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A_6: "output", G_7: "input", K_8: "bidirectional", A_1: "output", G_2: "input", K_3: "bidirectional", F1_4: "power_in", F1_5: "power_in", F2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Valve:ECC83";
  override referencePrefix = "U";
}

/**
 * double triode, low-noise
 *
 * KiCad symbol: `Valve:ECC88`. Reference prefix: `U`.
 * Footprint filters: VALVE*NOVAL*P*.
 * @see http://www.r-type.org/pdfs/ecc88.pdf
 * Keywords: triode valve.
 * Default footprint: Valve:Valve_Noval_P.
 */
export class ECC88 extends Component.withPins({
  "A_1": "1",
  "G_2": "2",
  "K_3": "3",
  "A_6": "6",
  "G_7": "7",
  "K_8": "8",
  "F1": "4",
  "F2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A_1: "output", G_2: "input", K_3: "bidirectional", A_6: "output", G_7: "input", K_8: "bidirectional", F1: "power_in", F2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Valve:ECC88";
  override referencePrefix = "U";
}

/**
 * triode heptode
 *
 * KiCad symbol: `Valve:ECH81`. Reference prefix: `U`.
 * Footprint filters: VALVE*NOVAL*P*.
 * @see http://www.r-type.org/pdfs/ech81.pdf
 * Keywords: triode heptode valve.
 * Default footprint: Valve:Valve_Noval_P.
 */
export class ECH81 extends Component.withPins({
  "K": "3",
  "A_8": "8",
  "G": "9",
  "K_G5": "",
  "G2_G4": "1",
  "G1": "2",
  "A_6": "6",
  "G3": "7",
  "F1": "4",
  "F2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { K: "bidirectional", A_8: "output", G: "input", K_G5: "bidirectional", G2_G4: "input", G1: "input", A_6: "output", G3: "input", F1: "power_in", F2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Valve:ECH81";
  override referencePrefix = "U";
}

/**
 * triode pentode
 *
 * KiCad symbol: `Valve:ECL82`. Reference prefix: `U`.
 * Footprint filters: Valve*Noval*P*.
 * @see http://www.r-type.org/pdfs/ecl82.pdf
 * Keywords: triode pentode valve.
 * Default footprint: Valve:Valve_Noval_P.
 */
export class ECL82 extends Component.withPins({
  "G": "1",
  "K": "8",
  "A_9": "9",
  "K_G3": "2",
  "G1": "3",
  "A_6": "6",
  "G2": "7",
  "F1": "4",
  "F2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", K: "bidirectional", A_9: "output", K_G3: "bidirectional", G1: "input", A_6: "output", G2: "input", F1: "power_in", F2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Valve:ECL82";
  override referencePrefix = "U";
}

/**
 * triode pentode
 *
 * KiCad symbol: `Valve:ECL86`. Reference prefix: `U`.
 * Footprint filters: Valve*Noval*P*.
 * @see http://www.r-type.org/pdfs/ecl86.pdf
 * Keywords: triode pentode valve.
 * Default footprint: Valve:Valve_Noval_P.
 */
export class ECL86 extends Component.withPins({
  "G": "1",
  "K": "2",
  "A_9": "9",
  "G2": "3",
  "A_6": "6",
  "K_G3": "7",
  "G1": "8",
  "F1": "4",
  "F2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G: "input", K: "bidirectional", A_9: "output", G2: "input", A_6: "output", K_G3: "bidirectional", G1: "input", F1: "power_in", F2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Valve:ECL86";
  override referencePrefix = "U";
}

/**
 * pentode
 *
 * KiCad symbol: `Valve:EF80`. Reference prefix: `U`.
 * Footprint filters: VALVE*NOVAL*P*.
 * @see http://www.r-type.org/pdfs/ef80.pdf
 * Keywords: pentode valve.
 * Default footprint: Valve:Valve_Noval_P.
 */
export class EF80 extends Component.withPins({
  "G1": "2",
  "F1_3": "3",
  "S": "6",
  "A": "7",
  "G2": "8",
  "G3": "9",
  "F1_4": "4",
  "F2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G1: "input", F1_3: "power_in", S: "input", A: "output", G2: "input", G3: "input", F1_4: "power_in", F2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Valve:EF80";
  override referencePrefix = "U";
}

/**
 * pentode
 *
 * KiCad symbol: `Valve:EF83`. Reference prefix: `U`.
 * Footprint filters: VALVE*NOVAL*P*.
 * @see http://www.r-type.org/pdfs/ef83.pdf
 * Keywords: pentode valve.
 * Default footprint: Valve:Valve_Noval_P.
 */
export class EF83 extends Component.withPins({
  "G2": "1",
  "K": "3",
  "A": "6",
  "S": "7",
  "G3": "8",
  "G1": "9",
  "F1": "4",
  "F2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G2: "input", K: "bidirectional", A: "output", S: "input", G3: "input", G1: "input", F1: "power_in", F2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Valve:EF83";
  override referencePrefix = "U";
}

/**
 * pentode
 *
 * KiCad symbol: `Valve:EF85`. Reference prefix: `U`.
 * Footprint filters: VALVE*NOVAL*P*.
 * Keywords: pentode valve.
 * Default footprint: Valve:Valve_Noval_P.
 */
export class EF85 extends Component.withPins({
  "G1": "2",
  "F1_3": "3",
  "S": "6",
  "A": "7",
  "G2": "8",
  "G3": "9",
  "F1_4": "4",
  "F2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G1: "input", F1_3: "power_in", S: "input", A: "output", G2: "input", G3: "input", F1_4: "power_in", F2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Valve:EF85";
  override referencePrefix = "U";
}

/**
 * pentode
 *
 * KiCad symbol: `Valve:EF86`. Reference prefix: `U`.
 * Footprint filters: VALVE*NOVAL*P*.
 * Keywords: pentode valve.
 * Default footprint: Valve:Valve_Noval_P.
 */
export class EF86 extends Component.withPins({
  "G2": "1",
  "K": "3",
  "A": "6",
  "S": "7",
  "G3": "8",
  "G1": "9",
  "F1": "4",
  "F2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G2: "input", K: "bidirectional", A: "output", S: "input", G3: "input", G1: "input", F1: "power_in", F2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Valve:EF86";
  override referencePrefix = "U";
}

/**
 * pentode, 25W
 *
 * KiCad symbol: `Valve:EL34`. Reference prefix: `U`.
 * Footprint filters: VALVE*OCTAL*.
 * @see http://www.r-type.org/pdfs/el34.pdf
 * Keywords: pentode valve.
 * Default footprint: Valve:Valve_Octal.
 */
export class EL34 extends Component.withPins({
  "G3": "1",
  "A": "3",
  "G2": "4",
  "G1": "5",
  "F1_8": "8",
  "F1_2": "2",
  "F2": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G3: "input", A: "output", G2: "input", G1: "input", F1_8: "power_in", F1_2: "power_in", F2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Valve:EL34";
  override referencePrefix = "U";
}

/**
 * pentode, 12W
 *
 * KiCad symbol: `Valve:EL84`. Reference prefix: `U`.
 * Footprint filters: VALVE*NOVAL*P*.
 * @see http://www.r-type.org/pdfs/el84.pdf
 * Keywords: pentode valve.
 * Default footprint: Valve:Valve_Noval_P.
 */
export class EL84 extends Component.withPins({
  "G1": "2",
  "K_G3": "3",
  "A": "7",
  "G2": "9",
  "F1": "4",
  "F2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { G1: "input", K_G3: "bidirectional", A: "output", G2: "input", F1: "power_in", F2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Valve:EL84";
  override referencePrefix = "U";
}

/**
 * indicator tube "magic eye"
 *
 * KiCad symbol: `Valve:EM84`. Reference prefix: `U`.
 * Footprint filters: VALVE*NOVAL*P*.
 * @see http://www.r-type.org/pdfs/em84.pdf
 * Keywords: indicator tube valve magic eye.
 * Default footprint: Valve:Valve_Noval_P.
 */
export class EM84 extends Component.withPins({
  "K": "2",
  "L": "6",
  "ST": "7",
  "F1_": "",
  "G": "1",
  "A": "9",
  "F1_4": "4",
  "F2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { K: "bidirectional", L: "output", ST: "input", F1_: "power_in", G: "input", A: "output", F1_4: "power_in", F2: "power_in", ...opts.pinTypes } });
  }
  override schema = "Valve:EM84";
  override referencePrefix = "U";
}

/**
 * Subminiature Pentode
 *
 * KiCad symbol: `Valve:JAN6418`. Reference prefix: `U`.
 * Footprint filters: VALVE*MINI*PENTODE*LINEAR*.
 * @see https://frank.pocnet.net/sheets/127/6/6418.pdf
 * Keywords: subminiature pentode valve.
 * Default footprint: Valve:Valve_Mini_Pentode_Linear.
 */
export class JAN6418 extends Component.withPins({
  "F+,G3_3": "3",
  "P": "1",
  "G2": "2",
  "G1": "4",
  "F+,G3_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "F+,G3_3": "power_in", P: "output", G2: "input", G1: "input", "F+,G3_5": "power_in", ...opts.pinTypes } });
  }
  override schema = "Valve:JAN6418";
  override referencePrefix = "U";
}

/**
 * Subminiature Pentode
 *
 * KiCad symbol: `Valve:NOS-6418`. Reference prefix: `U`.
 * Footprint filters: VALVE*MINI*PENTODE*LINEAR*.
 * @see https://frank.pocnet.net/sheets/127/6/6418.pdf
 * Keywords: subminiature pentode valve.
 * Default footprint: Valve:Valve_Mini_Pentode_Linear.
 */
export class NOS_6418 extends Component.withPins({
  "F+,G3_3": "3",
  "P": "1",
  "G2": "2",
  "G1": "4",
  "F+,G3_5": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "F+,G3_3": "power_in", P: "output", G2: "input", G1: "input", "F+,G3_5": "power_in", ...opts.pinTypes } });
  }
  override schema = "Valve:NOS-6418";
  override referencePrefix = "U";
}

/**
 * triple diode triode
 *
 * KiCad symbol: `Valve:PABC80`. Reference prefix: `U`.
 * Footprint filters: VALVE*NOVAL*P*.
 * @see https://frank.pocnet.net/sheets/082/e/EABC80.pdf
 * Keywords: diode triode valve.
 * Default footprint: Valve:Valve_Noval_P.
 */
export class PABC80 extends Component.withPins({
  "A2_2": "2",
  "K_3": "3",
  "A1": "1",
  "A3": "6",
  "K_7": "7",
  "G": "8",
  "A2_9": "9",
  "F1": "4",
  "F2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A2_2: "output", K_3: "input", A1: "input", A3: "output", K_7: "input", G: "input", A2_9: "output", F1: "input", F2: "input", ...opts.pinTypes } });
  }
  override schema = "Valve:PABC80";
  override referencePrefix = "U";
}

/**
 * STABI
 *
 * KiCad symbol: `Valve:STABI`. Reference prefix: `U`.
 * Footprint filters: VALVE*GLIMM*.
 * Default footprint: Valve:Valve_Glimm.
 */
export class STABI extends Component.withPins({
  "A": "3",
  "K": "7",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A: "passive", K: "passive", ...opts.pinTypes } });
  }
  override schema = "Valve:STABI";
  override referencePrefix = "U";
}

/**
 * triple diode triode
 *
 * KiCad symbol: `Valve:UABC80`. Reference prefix: `U`.
 * Footprint filters: VALVE*NOVAL*P*.
 * @see https://frank.pocnet.net/sheets/082/e/EABC80.pdf
 * Keywords: diode triode valve.
 * Default footprint: Valve:Valve_Noval_P.
 */
export class UABC80 extends Component.withPins({
  "A2_2": "2",
  "K_3": "3",
  "A1": "1",
  "A3": "6",
  "K_7": "7",
  "G": "8",
  "A2_9": "9",
  "F1": "4",
  "F2": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A2_2: "output", K_3: "input", A1: "input", A3: "output", K_7: "input", G: "input", A2_9: "output", F1: "input", F2: "input", ...opts.pinTypes } });
  }
  override schema = "Valve:UABC80";
  override referencePrefix = "U";
}
