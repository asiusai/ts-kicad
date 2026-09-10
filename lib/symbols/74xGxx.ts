// Generated from KiCad symbols by export_components.ts.
import { Component } from "ts-kicad";

/**
 * Single NAND Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G00`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, Texas?R-PDSO-G5?DCK*, Texas?R-PDSO-N5?DRL*, Texas?X2SON*0.8x0.8mm*P0.48mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74lvc1g00.pdf
 * Keywords: Single Gate NAND LVC CMOS.
 */
export class _74LVC1G00 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G00";
  override referencePrefix = "U";
}

/**
 * Single NAND Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AHC1G00`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate NAND LVC CMOS.
 */
export class _74AHC1G00 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AHC1G00";
  override referencePrefix = "U";
}

/**
 * Single NOR Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G02`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, Texas?R-PDSO-G5?DCK*, Texas?R-PDSO-N5?DRL*, Texas?X2SON*0.8x0.8mm*P0.48mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74lvc1g02.pdf
 * Keywords: Single Gate NOR LVC CMOS.
 */
export class _74LVC1G02 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G02";
  override referencePrefix = "U";
}

/**
 * Single NOR Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AHC1G02`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate NOR LVC CMOS.
 */
export class _74AHC1G02 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AHC1G02";
  override referencePrefix = "U";
}

/**
 * Single NOT Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G04`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, Texas?R-PDSO-G5?DCK*, Texas?R-PDSO-N5?DRL*, Texas?X2SON*0.8x0.8mm*P0.48mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74lvc1g04.pdf
 * Keywords: Single Gate NOT LVC CMOS.
 */
export class _74LVC1G04 extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G04";
  override referencePrefix = "U";
}

/**
 * Single NOT Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AHC1G04`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate NOT LVC CMOS.
 */
export class _74AHC1G04 extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AHC1G04";
  override referencePrefix = "U";
}

/**
 * Single AND Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G08`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, Texas?R-PDSO-G5?DCK*, Texas?R-PDSO-N5?DRL*, Texas?X2SON*0.8x0.8mm*P0.48mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74lvc1g08.pdf
 * Keywords: Single Gate AND LVC CMOS.
 */
export class _74LVC1G08 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G08";
  override referencePrefix = "U";
}

/**
 * Single AND Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AHC1G08`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate AND LVC CMOS.
 */
export class _74AHC1G08 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AHC1G08";
  override referencePrefix = "U";
}

/**
 * Single Buffer Gate Tri-State, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G125`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, Texas?R-PDSO-G5?DCK*, Texas?R-PDSO-N5?DRL*, Texas?X2SON*0.8x0.8mm*P0.48mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74lvc1g125.pdf
 * Keywords: Single Gate Buff Tri-State LVC CMOS.
 */
export class _74LVC1G125 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G125";
  override referencePrefix = "U";
}

/**
 * Single Buffer Gate Tri-State, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AHC1G125`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate Buff Tri-State LVC CMOS.
 */
export class _74AHC1G125 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AHC1G125";
  override referencePrefix = "U";
}

/**
 * Single Buffer Gate Tri-State, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G126`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate Buff Tri-State LVC CMOS.
 */
export class _74LVC1G126 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G126";
  override referencePrefix = "U";
}

/**
 * Single Buffer Gate Tri-State, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AHC1G126`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate Buff Tri-State LVC CMOS.
 */
export class _74AHC1G126 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AHC1G126";
  override referencePrefix = "U";
}

/**
 * Single Schmitt NOT Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G14`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, SOT?553*.
 * @see https://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate NOT Schmitt LVC CMOS.
 */
export class _74LVC1G14 extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G14";
  override referencePrefix = "U";
}

/**
 * Single Schmitt NOT Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AHC1G14`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, SOT?553*.
 * @see https://www.ti.com/lit/ds/symlink/sn74lvc1g14.pdf
 * Keywords: Single Gate NOT Schmitt LVC CMOS.
 */
export class _74AHC1G14 extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AHC1G14";
  override referencePrefix = "U";
}

/**
 * Single OR Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G32`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate OR LVC CMOS.
 */
export class _74LVC1G32 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G32";
  override referencePrefix = "U";
}

/**
 * Single OR Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AHC1G32`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate OR LVC CMOS.
 */
export class _74AHC1G32 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AHC1G32";
  override referencePrefix = "U";
}

/**
 * 10-stage divider and oscillator, SOT353-1
 *
 * KiCad symbol: `74xGxx:74AHC1G4210`. Reference prefix: `U`.
 * Footprint filters: SOT*353*.
 * @see https://assets.nexperia.com/documents/data-sheet/74AHC1G4210.pdf
 * Keywords: divider oscillator.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class _74AHC1G4210 extends Component.withPins({
  "X1": "1",
  "X2": "2",
  "GND": "3",
  "Q": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { X1: "input", X2: "input", GND: "power_in", Q: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AHC1G4210";
  override referencePrefix = "U";
}

/**
 * Single XOR Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G86`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate XOR LVC CMOS.
 */
export class _74LVC1G86 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G86";
  override referencePrefix = "U";
}

/**
 * Single XOR Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AHC1G86`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate XOR LVC CMOS.
 */
export class _74AHC1G86 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AHC1G86";
  override referencePrefix = "U";
}

/**
 * 74AHC1G04, Single NOT Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AHC1GU04`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate NOT LVC CMOS.
 */
export class _74AHC1GU04 extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AHC1GU04";
  override referencePrefix = "U";
}

/**
 * Dual NAND Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC2G00`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Gate NAND LVC CMOS.
 */
export class _74LVC2G00 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P7": "7",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P7: "output", P3: "output", P5: "input", P6: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC2G00";
  override referencePrefix = "U";
}

/**
 * Dual NAND Gate, High-speed Si-gate CMOS
 *
 * KiCad symbol: `74xGxx:74AHC2G00`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see https://assets.nexperia.com/documents/data-sheet/74AHC_AHCT2G00.pdf
 * Keywords: Dual Gate NAND LVC CMOS.
 */
export class _74AHC2G00 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P7": "7",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P7: "output", P3: "output", P5: "input", P6: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AHC2G00";
  override referencePrefix = "U";
}

/**
 * Single NAND Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AHCT1G00`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate NAND LVC CMOS.
 */
export class _74AHCT1G00 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AHCT1G00";
  override referencePrefix = "U";
}

/**
 * Single NOR Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AHCT1G02`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate NOR LVC CMOS.
 */
export class _74AHCT1G02 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AHCT1G02";
  override referencePrefix = "U";
}

/**
 * Single NOT Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AHCT1G04`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate NOT LVC CMOS.
 */
export class _74AHCT1G04 extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AHCT1G04";
  override referencePrefix = "U";
}

/**
 * Single AND Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AHCT1G08`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate AND LVC CMOS.
 */
export class _74AHCT1G08 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AHCT1G08";
  override referencePrefix = "U";
}

/**
 * Single Buffer Gate Tri-State, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AHCT1G125`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate Buff Tri-State LVC CMOS.
 */
export class _74AHCT1G125 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AHCT1G125";
  override referencePrefix = "U";
}

/**
 * Single Buffer Gate Tri-State, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AHCT1G126`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate Buff Tri-State LVC CMOS.
 */
export class _74AHCT1G126 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AHCT1G126";
  override referencePrefix = "U";
}

/**
 * Single Schmitt NOT Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AHCT1G14`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, SOT?553*.
 * @see https://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate NOT Schmitt LVC CMOS.
 */
export class _74AHCT1G14 extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AHCT1G14";
  override referencePrefix = "U";
}

/**
 * Single OR Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AHCT1G32`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate OR LVC CMOS.
 */
export class _74AHCT1G32 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AHCT1G32";
  override referencePrefix = "U";
}

/**
 * Single XOR Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AHCT1G86`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate XOR LVC CMOS.
 */
export class _74AHCT1G86 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AHCT1G86";
  override referencePrefix = "U";
}

/**
 * 74AHCT1G04, Single NOT Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AHCT1GU04`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate NOT LVC CMOS.
 */
export class _74AHCT1GU04 extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AHCT1GU04";
  override referencePrefix = "U";
}

/**
 * Dual NAND Gate, TTL input High-speed Si-gate CMOS
 *
 * KiCad symbol: `74xGxx:74AHCT2G00`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see https://assets.nexperia.com/documents/data-sheet/74AHC_AHCT2G00.pdf
 * Keywords: Dual Gate NAND LVC CMOS.
 */
export class _74AHCT2G00 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P7": "7",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P7: "output", P3: "output", P5: "input", P6: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AHCT2G00";
  override referencePrefix = "U";
}

/**
 * Single NAND Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC1G00`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate NAND LVC CMOS.
 */
export class _74AUC1G00 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC1G00";
  override referencePrefix = "U";
}

/**
 * Single NOR Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC1G02`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate NOR LVC CMOS.
 */
export class _74AUC1G02 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC1G02";
  override referencePrefix = "U";
}

/**
 * Single NOT Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC1G04`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate NOT LVC CMOS.
 */
export class _74AUC1G04 extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC1G04";
  override referencePrefix = "U";
}

/**
 * Single NOT Gate, Open Drain, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G06`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate NOT LVC CMOS Open Drain.
 */
export class _74LVC1G06 extends Component.withPins({
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P2: "input", GND: "power_in", P4: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G06";
  override referencePrefix = "U";
}

/**
 * Single NOT Gate, Open Drain, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC1G06`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate NOT LVC CMOS Open Drain.
 */
export class _74AUC1G06 extends Component.withPins({
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P2: "input", GND: "power_in", P4: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC1G06";
  override referencePrefix = "U";
}

/**
 * Single Buffer Gate, Open Drain, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G07`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, Texas?R-PDSO-G5?DCK*, Texas?R-PDSO-N5?DRL*, Texas?X2SON*0.8x0.8mm*P0.48mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74lvc1g07.pdf
 * Keywords: Single Gate Buff LVC CMOS Open Drain.
 */
export class _74LVC1G07 extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "free", P2: "input", GND: "power_in", P4: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G07";
  override referencePrefix = "U";
}

/**
 * Single Buffer Gate, Open Drain, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC1G07`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate Buff LVC CMOS Open Drain.
 */
export class _74AUC1G07 extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "free", P2: "input", GND: "power_in", P4: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC1G07";
  override referencePrefix = "U";
}

/**
 * Single AND Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC1G08`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate AND LVC CMOS.
 */
export class _74AUC1G08 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC1G08";
  override referencePrefix = "U";
}

/**
 * Single Buffer Gate Tri-State, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC1G125`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate Buff Tri-State LVC CMOS.
 */
export class _74AUC1G125 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC1G125";
  override referencePrefix = "U";
}

/**
 * Single Buffer Gate Tri-State, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC1G126`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate Buff Tri-State LVC CMOS.
 */
export class _74AUC1G126 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC1G126";
  override referencePrefix = "U";
}

/**
 * Single Schmitt NOT Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC1G14`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, SOT?553*.
 * @see https://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate NOT Schmitt LVC CMOS.
 */
export class _74AUC1G14 extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC1G14";
  override referencePrefix = "U";
}

/**
 * Single Schmitt Buffer Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G17`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, SOT?553*, Texas?R-PDSO-G5?DCK*, Texas?R-PDSO-N5?DRL*, Texas?X2SON*0.8x0.8mm*P0.48mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74lvc1g17.pdf
 * Keywords: Single Gate Buff Schmitt LVC CMOS.
 */
export class _74LVC1G17 extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G17";
  override referencePrefix = "U";
}

/**
 * Single Schmitt Buffer Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC1G17`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, SOT?553*, Texas?R-PDSO-G5?DCK*, Texas?R-PDSO-N5?DRL*, Texas?X2SON*0.8x0.8mm*P0.48mm*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate Buff Schmitt LVC CMOS.
 */
export class _74AUC1G17 extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC1G17";
  override referencePrefix = "U";
}

/**
 * Single Demultiplexer, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G18`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Demux LVC CMOS.
 */
export class _74LVC1G18 extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
  "GND": "2",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P3: "input", P4: "tri_state", P6: "tri_state", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G18";
  override referencePrefix = "U";
}

/**
 * Single Demultiplexer, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC1G18`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Demux LVC CMOS.
 */
export class _74AUC1G18 extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
  "GND": "2",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P3: "input", P4: "tri_state", P6: "tri_state", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC1G18";
  override referencePrefix = "U";
}

/**
 * 1 of 2 Decoder, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G19`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Decoder LVC CMOS.
 */
export class _74LVC1G19 extends Component.withPins({
  "A": "1",
  "GND": "2",
  "~{E}": "3",
  "Y1": "4",
  "VCC": "5",
  "Y0": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A: "input", GND: "power_in", "~{E}": "input", Y1: "output", VCC: "power_in", Y0: "output", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G19";
  override referencePrefix = "U";
}

/**
 * Single 1 of 2 Decoder, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC1G19`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Decoder LVC CMOS.
 */
export class _74AUC1G19 extends Component.withPins({
  "A": "1",
  "GND": "2",
  "~{E}": "3",
  "Y1": "4",
  "VCC": "5",
  "Y0": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A: "input", GND: "power_in", "~{E}": "input", Y1: "output", VCC: "power_in", Y0: "output", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC1G19";
  override referencePrefix = "U";
}

/**
 * Single Buffer/Driver Gate Tri-State, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G240`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate Buff/Drv Tri-State LVC CMOS.
 */
export class _74LVC1G240 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G240";
  override referencePrefix = "U";
}

/**
 * Single Buffer/Driver Gate Tri-State, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC1G240`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate Buff/Drv Tri-State LVC CMOS.
 */
export class _74AUC1G240 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC1G240";
  override referencePrefix = "U";
}

/**
 * Single OR Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC1G32`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate OR LVC CMOS.
 */
export class _74AUC1G32 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC1G32";
  override referencePrefix = "U";
}

/**
 * Single Bilateral Analog Switch, SOT-23-5/SC-70-5
 *
 * KiCad symbol: `74xGxx:74LVC1G66`. Reference prefix: `U`.
 * Footprint filters: SOT*, SC*.
 * @see http://www.ti.com/lit/ds/symlink/sn74lvc1g66.pdf
 * Keywords: Single Bilateral Analog Switch.
 */
export class _74LVC1G66 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P4": "4",
  "GND": "3",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "bidirectional", P2: "bidirectional", P4: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G66";
  override referencePrefix = "U";
}

/**
 * Single Bilateral Analog Switch, SOT-23-5/SC-70-5
 *
 * KiCad symbol: `74xGxx:74AUC1G66`. Reference prefix: `U`.
 * Footprint filters: SOT*, SC*.
 * @see http://www.ti.com/lit/ds/symlink/sn74auc1g66.pdf
 * Keywords: Single Bilateral Analog Switch.
 */
export class _74AUC1G66 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P4": "4",
  "GND": "3",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "bidirectional", P2: "bidirectional", P4: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC1G66";
  override referencePrefix = "U";
}

/**
 * Single D Flip-Flop, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC1G74`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single D Flip-Flop D CMOS.
 */
export class _74AUC1G74 extends Component.withPins({
  "C": "1",
  "D": "2",
  "~{Q}": "3",
  "GND": "4",
  "Q": "5",
  "~{CLR}": "6",
  "~{PRE}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "input", D: "input", "~{Q}": "output", GND: "power_in", Q: "output", "~{CLR}": "input", "~{PRE}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC1G74";
  override referencePrefix = "U";
}

/**
 * Single D Flip-Flop, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G79`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single D Flip-Flop D CMOS.
 */
export class _74LVC1G79 extends Component.withPins({
  "D": "1",
  "C": "2",
  "GND": "3",
  "Q": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "input", C: "input", GND: "power_in", Q: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G79";
  override referencePrefix = "U";
}

/**
 * Single D Flip-Flop, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC1G79`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single D Flip-Flop D CMOS.
 */
export class _74AUC1G79 extends Component.withPins({
  "D": "1",
  "C": "2",
  "GND": "3",
  "Q": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "input", C: "input", GND: "power_in", Q: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC1G79";
  override referencePrefix = "U";
}

/**
 * Single D Flip-Flop, Inverted Output, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G80`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single D Flip-Flop CMOS.
 */
export class _74LVC1G80 extends Component.withPins({
  "D": "1",
  "C": "2",
  "GND": "3",
  "~{Q}": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "input", C: "input", GND: "power_in", "~{Q}": "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G80";
  override referencePrefix = "U";
}

/**
 * Single D Flip-Flop, Inverted Output, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC1G80`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single D Flip-Flop CMOS.
 */
export class _74AUC1G80 extends Component.withPins({
  "D": "1",
  "C": "2",
  "GND": "3",
  "~{Q}": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "input", C: "input", GND: "power_in", "~{Q}": "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC1G80";
  override referencePrefix = "U";
}

/**
 * Single XOR Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC1G86`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate XOR LVC CMOS.
 */
export class _74AUC1G86 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC1G86";
  override referencePrefix = "U";
}

/**
 * 74AUC1G04, Single NOT Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC1GU04`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate NOT LVC CMOS.
 */
export class _74AUC1GU04 extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC1GU04";
  override referencePrefix = "U";
}

/**
 * Dual NAND Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC2G00`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Gate NAND LVC CMOS.
 */
export class _74AUC2G00 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P7": "7",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P7: "output", P3: "output", P5: "input", P6: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC2G00";
  override referencePrefix = "U";
}

/**
 * Dual NOR Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC2G02`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Gate NOR LVC CMOS.
 */
export class _74LVC2G02 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P7": "7",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P7: "output", P3: "output", P5: "input", P6: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC2G02";
  override referencePrefix = "U";
}

/**
 * Dual NOR Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC2G02`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Gate NOR LVC CMOS.
 */
export class _74AUC2G02 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P7": "7",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P7: "output", P3: "output", P5: "input", P6: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC2G02";
  override referencePrefix = "U";
}

/**
 * Dual NOT Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC2G04`. Reference prefix: `U`.
 * Footprint filters: SG-*, SOT*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Gate NOT LVC CMOS.
 */
export class _74LVC2G04 extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P3": "3",
  "P4": "4",
  "GND": "2",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P6: "output", P3: "input", P4: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC2G04";
  override referencePrefix = "U";
}

/**
 * Dual NOT Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC2G04`. Reference prefix: `U`.
 * Footprint filters: SG-*, SOT*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Gate NOT LVC CMOS.
 */
export class _74AUC2G04 extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P3": "3",
  "P4": "4",
  "GND": "2",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P6: "output", P3: "input", P4: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC2G04";
  override referencePrefix = "U";
}

/**
 * Dual NOT Gate, Open Drain, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC2G06`. Reference prefix: `U`.
 * Footprint filters: SG-*, SOT*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Gate NOT Open Drain LVC CMOS.
 */
export class _74LVC2G06 extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P3": "3",
  "P4": "4",
  "GND": "2",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P6: "open_collector", P3: "input", P4: "open_collector", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC2G06";
  override referencePrefix = "U";
}

/**
 * Dual NOT Gate, Open Drain, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC2G06`. Reference prefix: `U`.
 * Footprint filters: SG-*, SOT*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Gate NOT Open Drain LVC CMOS.
 */
export class _74AUC2G06 extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P3": "3",
  "P4": "4",
  "GND": "2",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P6: "open_collector", P3: "input", P4: "open_collector", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC2G06";
  override referencePrefix = "U";
}

/**
 * Dual Buffer, Open Drain, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC2G07`. Reference prefix: `U`.
 * Footprint filters: SG-*, SOT*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Gate Buffer Open Drain LVC CMOS.
 */
export class _74LVC2G07 extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P3": "3",
  "P4": "4",
  "GND": "2",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P6: "open_collector", P3: "input", P4: "open_collector", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC2G07";
  override referencePrefix = "U";
}

/**
 * Dual Buffer, Open Drain, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC2G07`. Reference prefix: `U`.
 * Footprint filters: SG-*, SOT*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Gate Buffer Open Drain LVC CMOS.
 */
export class _74AUC2G07 extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P3": "3",
  "P4": "4",
  "GND": "2",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P6: "open_collector", P3: "input", P4: "open_collector", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC2G07";
  override referencePrefix = "U";
}

/**
 * Dual AND Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC2G08`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Gate AND LVC CMOS.
 */
export class _74LVC2G08 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P7": "7",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P7: "output", P3: "output", P5: "input", P6: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC2G08";
  override referencePrefix = "U";
}

/**
 * Dual AND Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC2G08`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Gate AND LVC CMOS.
 */
export class _74AUC2G08 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P7": "7",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P7: "output", P3: "output", P5: "input", P6: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC2G08";
  override referencePrefix = "U";
}

/**
 * Dual Buffer Tri-State, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC2G125`. Reference prefix: `U`.
 * Footprint filters: VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Buff Tri-State LVC CMOS.
 */
export class _74LVC2G125 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P3": "3",
  "P5": "5",
  "P7": "7",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P6: "tri_state", P3: "tri_state", P5: "input", P7: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC2G125";
  override referencePrefix = "U";
}

/**
 * Dual Buffer Tri-State, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC2G125`. Reference prefix: `U`.
 * Footprint filters: VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Buff Tri-State LVC CMOS.
 */
export class _74AUC2G125 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P3": "3",
  "P5": "5",
  "P7": "7",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P6: "tri_state", P3: "tri_state", P5: "input", P7: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC2G125";
  override referencePrefix = "U";
}

/**
 * Dual Buffer Tri-State, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC2G126`. Reference prefix: `U`.
 * Footprint filters: VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Buff Tri-State LVC CMOS.
 */
export class _74LVC2G126 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P3": "3",
  "P5": "5",
  "P7": "7",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P6: "tri_state", P3: "tri_state", P5: "input", P7: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC2G126";
  override referencePrefix = "U";
}

/**
 * Dual Buffer Tri-State, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC2G126`. Reference prefix: `U`.
 * Footprint filters: VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Buff Tri-State LVC CMOS.
 */
export class _74AUC2G126 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P3": "3",
  "P5": "5",
  "P7": "7",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P6: "tri_state", P3: "tri_state", P5: "input", P7: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC2G126";
  override referencePrefix = "U";
}

/**
 * Dual Inverter Buffer Tri-State, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC2G240`. Reference prefix: `U`.
 * Footprint filters: VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Inv Buff Tri-State LVC CMOS.
 */
export class _74LVC2G240 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P3": "3",
  "P5": "5",
  "P7": "7",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P6: "tri_state", P3: "tri_state", P5: "input", P7: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC2G240";
  override referencePrefix = "U";
}

/**
 * Dual Inverter Buffer Tri-State, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC2G240`. Reference prefix: `U`.
 * Footprint filters: VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Inv Buff Tri-State LVC CMOS.
 */
export class _74AUC2G240 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P3": "3",
  "P5": "5",
  "P7": "7",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P6: "tri_state", P3: "tri_state", P5: "input", P7: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC2G240";
  override referencePrefix = "U";
}

/**
 * Dual Buffer Tri-State, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC2G241`. Reference prefix: `U`.
 * Footprint filters: VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Buff Tri-State LVC CMOS.
 */
export class _74LVC2G241 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P3": "3",
  "P5": "5",
  "P7": "7",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P6: "tri_state", P3: "tri_state", P5: "input", P7: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC2G241";
  override referencePrefix = "U";
}

/**
 * Dual Buffer Tri-State, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC2G241`. Reference prefix: `U`.
 * Footprint filters: VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Buff Tri-State LVC CMOS.
 */
export class _74AUC2G241 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P6": "6",
  "P3": "3",
  "P5": "5",
  "P7": "7",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P6: "tri_state", P3: "tri_state", P5: "input", P7: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC2G241";
  override referencePrefix = "U";
}

/**
 * Dual OR Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC2G32`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Gate OR LVC CMOS.
 */
export class _74LVC2G32 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P7": "7",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P7: "output", P3: "output", P5: "input", P6: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC2G32";
  override referencePrefix = "U";
}

/**
 * Dual OR Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC2G32`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Gate OR LVC CMOS.
 */
export class _74AUC2G32 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P7": "7",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P7: "output", P3: "output", P5: "input", P6: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC2G32";
  override referencePrefix = "U";
}

/**
 * Dual Buffer, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC2G34`. Reference prefix: `U`.
 * Footprint filters: SG-*, SOT*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Buffer LVC CMOS.
 */
export class _74LVC2G34 extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P3": "3",
  "P4": "4",
  "GND": "2",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P6: "output", P3: "input", P4: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC2G34";
  override referencePrefix = "U";
}

/**
 * Dual Buffer, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC2G34`. Reference prefix: `U`.
 * Footprint filters: SG-*, SOT*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Buffer LVC CMOS.
 */
export class _74AUC2G34 extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P3": "3",
  "P4": "4",
  "GND": "2",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P6: "output", P3: "input", P4: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC2G34";
  override referencePrefix = "U";
}

/**
 * 1 to 2 Analog Switch Mux/Demux, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC2G53`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Analog Switch 1 to 2 CMOS.
 */
export class _74LVC2G53 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "GND_3": "3",
  "GND_4": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "bidirectional", P2: "input", P5: "input", P6: "bidirectional", P7: "bidirectional", GND_3: "power_in", GND_4: "passive", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC2G53";
  override referencePrefix = "U";
}

/**
 * 1 to 2 Analog Switch Mux/Demux, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC2G53`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Analog Switch 1 to 2 CMOS.
 */
export class _74AUC2G53 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P5": "5",
  "P6": "6",
  "P7": "7",
  "GND_3": "3",
  "GND_4": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "bidirectional", P2: "input", P5: "input", P6: "bidirectional", P7: "bidirectional", GND_3: "power_in", GND_4: "passive", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC2G53";
  override referencePrefix = "U";
}

/**
 * Dual Analog Switch
 *
 * KiCad symbol: `74xGxx:74LVC2G66`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Analog Switch.
 */
export class _74LVC2G66 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P7": "7",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "tri_state", P7: "input", P3: "input", P5: "input", P6: "tri_state", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC2G66";
  override referencePrefix = "U";
}

/**
 * Dual Analog Switch
 *
 * KiCad symbol: `74xGxx:74AUC2G66`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Analog Switch.
 */
export class _74AUC2G66 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P7": "7",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "tri_state", P7: "input", P3: "input", P5: "input", P6: "tri_state", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC2G66";
  override referencePrefix = "U";
}

/**
 * Dual D Flip-Flop, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC2G79`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual D Flip-Flop D CMOS.
 */
export class _74LVC2G79 extends Component.withPins({
  "C_1": "1",
  "D_2": "2",
  "Q_7": "7",
  "Q_3": "3",
  "C_5": "5",
  "D_6": "6",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C_1: "input", D_2: "input", Q_7: "output", Q_3: "output", C_5: "input", D_6: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC2G79";
  override referencePrefix = "U";
}

/**
 * Dual D Flip-Flop, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC2G79`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual D Flip-Flop D CMOS.
 */
export class _74AUC2G79 extends Component.withPins({
  "C_1": "1",
  "D_2": "2",
  "Q_7": "7",
  "Q_3": "3",
  "C_5": "5",
  "D_6": "6",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C_1: "input", D_2: "input", Q_7: "output", Q_3: "output", C_5: "input", D_6: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC2G79";
  override referencePrefix = "U";
}

/**
 * Dual D Flip-Flop, Negative Output, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC2G80`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual D Flip-Flop Negative CMOS.
 */
export class _74LVC2G80 extends Component.withPins({
  "C_1": "1",
  "D_2": "2",
  "~{Q}_7": "7",
  "~{Q}_3": "3",
  "C_5": "5",
  "D_6": "6",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C_1: "input", D_2: "input", "~{Q}_7": "output", "~{Q}_3": "output", C_5: "input", D_6: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC2G80";
  override referencePrefix = "U";
}

/**
 * Dual D Flip-Flop, Negative Output, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC2G80`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual D Flip-Flop Negative CMOS.
 */
export class _74AUC2G80 extends Component.withPins({
  "C_1": "1",
  "D_2": "2",
  "~{Q}_7": "7",
  "~{Q}_3": "3",
  "C_5": "5",
  "D_6": "6",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C_1: "input", D_2: "input", "~{Q}_7": "output", "~{Q}_3": "output", C_5: "input", D_6: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC2G80";
  override referencePrefix = "U";
}

/**
 * Dual XOR Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC2G86`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Gate XOR LVC CMOS.
 */
export class _74LVC2G86 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P7": "7",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P7: "output", P3: "output", P5: "input", P6: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC2G86";
  override referencePrefix = "U";
}

/**
 * Dual XOR Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC2G86`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Gate XOR LVC CMOS.
 */
export class _74AUC2G86 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P7": "7",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P7: "output", P3: "output", P5: "input", P6: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC2G86";
  override referencePrefix = "U";
}

/**
 * 74AUC2G04, Dual NOT Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUC2GU04`. Reference prefix: `U`.
 * Footprint filters: SG-*, SOT*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Gate NOT LVC CMOS.
 */
export class _74AUC2GU04 extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P3": "3",
  "P4": "4",
  "GND": "2",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P6: "output", P3: "input", P4: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUC2GU04";
  override referencePrefix = "U";
}

/**
 * Single NAND Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUP1G00`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, Texas?R-PDSO-G5?DCK*, Texas?R-PDSO-N5?DRL*, Texas?X2SON*0.8x0.8mm*P0.48mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74aup1g00.pdf
 * Keywords: Single Gate NAND LVC CMOS.
 */
export class _74AUP1G00 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUP1G00";
  override referencePrefix = "U";
}

/**
 * Single NOR Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUP1G02`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, Texas?R-PDSO-G5?DCK*, Texas?R-PDSO-N5?DRL*, Texas?X2SON*0.8x0.8mm*P0.48mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74aup1g02.pdf
 * Keywords: Single Gate NOR LVC CMOS.
 */
export class _74AUP1G02 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUP1G02";
  override referencePrefix = "U";
}

/**
 * Single NOT Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUP1G04`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, Texas?R-PDSO-G5?DCK*, Texas?R-PDSO-N5?DRL*, Texas?X2SON*0.8x0.8mm*P0.48mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74aup1g04.pdf
 * Keywords: Single Gate NOT LVC CMOS.
 */
export class _74AUP1G04 extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUP1G04";
  override referencePrefix = "U";
}

/**
 * Single NOT Gate, Open Drain, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUP1G06`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate NOT LVC CMOS Open Drain.
 */
export class _74AUP1G06 extends Component.withPins({
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P2: "input", GND: "power_in", P4: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUP1G06";
  override referencePrefix = "U";
}

/**
 * Single Buffer Gate, Open Drain, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUP1G07`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, Texas?R-PDSO-G5?DCK*, Texas?R-PDSO-N5?DRL*, Texas?X2SON*0.8x0.8mm*P0.48mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74aup1g07
 * Keywords: Single Gate Buff LVC CMOS Open Drain.
 */
export class _74AUP1G07 extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "free", P2: "input", GND: "power_in", P4: "open_collector", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUP1G07";
  override referencePrefix = "U";
}

/**
 * Single AND Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUP1G08`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, Texas?R-PDSO-G5?DCK*, Texas?R-PDSO-N5?DRL*, Texas?X2SON*0.8x0.8mm*P0.48mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74aup1g08.pdf
 * Keywords: Single Gate AND LVC CMOS.
 */
export class _74AUP1G08 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUP1G08";
  override referencePrefix = "U";
}

/**
 * Single Buffer Gate Tri-State, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUP1G125`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate Buff Tri-State LVC CMOS.
 */
export class _74AUP1G125 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUP1G125";
  override referencePrefix = "U";
}

/**
 * Single Buffer Gate Tri-State, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUP1G126`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate Buff Tri-State LVC CMOS.
 */
export class _74AUP1G126 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUP1G126";
  override referencePrefix = "U";
}

/**
 * Single Schmitt NOT Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUP1G14`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, SOT?553*.
 * @see https://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate NOT Schmitt LVC CMOS.
 */
export class _74AUP1G14 extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUP1G14";
  override referencePrefix = "U";
}

/**
 * Single Schmitt Buffer Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUP1G17`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, SOT?553*, Texas?R-PDSO-G5?DCK*, Texas?R-PDSO-N5?DRL*, Texas?X2SON*0.8x0.8mm*P0.48mm*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate Buff Schmitt LVC CMOS.
 */
export class _74AUP1G17 extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUP1G17";
  override referencePrefix = "U";
}

/**
 * Single Buffer/Driver Gate Tri-State, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUP1G240`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate Buff/Drv Tri-State LVC CMOS.
 */
export class _74AUP1G240 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUP1G240";
  override referencePrefix = "U";
}

/**
 * Single OR Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUP1G32`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, Texas?R-PDSO-G5?DCK*, Texas?R-PDSO-N5?DRL*, Texas?X2SON*0.8x0.8mm*P0.48mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74aup1g32.pdf
 * Keywords: Single Gate OR LVC CMOS.
 */
export class _74AUP1G32 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUP1G32";
  override referencePrefix = "U";
}

/**
 * Single Buffer Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G34`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, Texas?R-PDSO-G5?DCK*, Texas?R-PDSO-N5?DRL*, Texas?X2SON*0.8x0.8mm*P0.48mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74lvc1g34.pdf
 * Keywords: Single Gate Buff LVC CMOS.
 */
export class _74LVC1G34 extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "free", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G34";
  override referencePrefix = "U";
}

/**
 * Single Buffer Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUP1G34`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, Texas?R-PDSO-G5?DCK*, Texas?R-PDSO-N5?DRL*, Texas?X2SON*0.8x0.8mm*P0.48mm*.
 * @see https://www.ti.com/lit/ds/symlink/sn74aup1g34.pdf
 * Keywords: Single Gate Buff LVC CMOS.
 */
export class _74AUP1G34 extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "free", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUP1G34";
  override referencePrefix = "U";
}

/**
 * Configurable Multi-Function Single Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G57`. Reference prefix: `U`.
 * Footprint filters: SOT*, SC*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Configurable Single Gate LVC CMOS.
 */
export class _74LVC1G57 extends Component.withPins({
  "IN1": "1",
  "GND": "2",
  "IN0": "3",
  "Y": "4",
  "VCC": "5",
  "IN2": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN1: "input", GND: "power_in", IN0: "input", Y: "output", VCC: "power_in", IN2: "input", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G57";
  override referencePrefix = "U";
}

/**
 * Configurable Multi-Function Single Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUP1G57`. Reference prefix: `U`.
 * Footprint filters: SOT*, SC*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Configurable Single Gate LVC CMOS.
 */
export class _74AUP1G57 extends Component.withPins({
  "IN1": "1",
  "GND": "2",
  "IN0": "3",
  "Y": "4",
  "VCC": "5",
  "IN2": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN1: "input", GND: "power_in", IN0: "input", Y: "output", VCC: "power_in", IN2: "input", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUP1G57";
  override referencePrefix = "U";
}

/**
 * Configurable Multi-Function Single Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G58`. Reference prefix: `U`.
 * Footprint filters: SOT*, SC*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Configurable Single Gate LVC CMOS.
 */
export class _74LVC1G58 extends Component.withPins({
  "IN1": "1",
  "GND": "2",
  "IN0": "3",
  "~{Y}": "4",
  "VCC": "5",
  "IN2": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN1: "input", GND: "power_in", IN0: "input", "~{Y}": "output", VCC: "power_in", IN2: "input", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G58";
  override referencePrefix = "U";
}

/**
 * 74LAUP1G58, Configurable Multi-Function Single Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUP1G58`. Reference prefix: `U`.
 * Footprint filters: SOT*, SC*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Configurable Single Gate LVC CMOS.
 */
export class _74AUP1G58 extends Component.withPins({
  "IN1": "1",
  "GND": "2",
  "IN0": "3",
  "~{Y}": "4",
  "VCC": "5",
  "IN2": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN1: "input", GND: "power_in", IN0: "input", "~{Y}": "output", VCC: "power_in", IN2: "input", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUP1G58";
  override referencePrefix = "U";
}

/**
 * Single D Flip-Flop, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUP1G74`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single D Flip-Flop D CMOS.
 */
export class _74AUP1G74 extends Component.withPins({
  "C": "1",
  "D": "2",
  "~{Q}": "3",
  "GND": "4",
  "Q": "5",
  "~{CLR}": "6",
  "~{PRE}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "input", D: "input", "~{Q}": "output", GND: "power_in", Q: "output", "~{CLR}": "input", "~{PRE}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUP1G74";
  override referencePrefix = "U";
}

/**
 * Single D Flip-Flop, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUP1G79`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single D Flip-Flop D CMOS.
 */
export class _74AUP1G79 extends Component.withPins({
  "D": "1",
  "C": "2",
  "GND": "3",
  "Q": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "input", C: "input", GND: "power_in", Q: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUP1G79";
  override referencePrefix = "U";
}

/**
 * Single D Flip-Flop, Inverted Output, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUP1G80`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single D Flip-Flop CMOS.
 */
export class _74AUP1G80 extends Component.withPins({
  "D": "1",
  "C": "2",
  "GND": "3",
  "~{Q}": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { D: "input", C: "input", GND: "power_in", "~{Q}": "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUP1G80";
  override referencePrefix = "U";
}

/**
 * Configurable Multi-Function Single Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUP1G97`. Reference prefix: `U`.
 * Footprint filters: SOT*, SC*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Configurable Single Gate LVC CMOS.
 */
export class _74AUP1G97 extends Component.withPins({
  "IN1": "1",
  "GND": "2",
  "IN0": "3",
  "Y": "4",
  "VCC": "5",
  "IN2": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN1: "input", GND: "power_in", IN0: "input", Y: "output", VCC: "power_in", IN2: "input", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUP1G97";
  override referencePrefix = "U";
}

/**
 * Configurable Multi-Function Single Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUP1G98`. Reference prefix: `U`.
 * Footprint filters: SOT*, SC*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Configurable Single Gate LVC CMOS.
 */
export class _74AUP1G98 extends Component.withPins({
  "IN1": "1",
  "GND": "2",
  "IN0": "3",
  "~{Y}": "4",
  "VCC": "5",
  "IN2": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN1: "input", GND: "power_in", IN0: "input", "~{Y}": "output", VCC: "power_in", IN2: "input", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUP1G98";
  override referencePrefix = "U";
}

/**
 * Configurable Multi-Function Single Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G99`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see https://www.ti.com/lit/gpn/sn74lvc1g99
 * Keywords: Configurable Single Gate LVC CMOS.
 */
export class _74LVC1G99 extends Component.withPins({
  "~{OE}": "1",
  "A": "2",
  "B": "3",
  "GND": "4",
  "C": "5",
  "D": "6",
  "Y": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{OE}": "input", A: "input", B: "input", GND: "power_in", C: "input", D: "input", Y: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G99";
  override referencePrefix = "U";
}

/**
 * Configurable Multi-Function Single Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUP1G99`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Configurable Single Gate LVC CMOS.
 */
export class _74AUP1G99 extends Component.withPins({
  "~{OE}": "1",
  "A": "2",
  "B": "3",
  "GND": "4",
  "C": "5",
  "D": "6",
  "Y": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{OE}": "input", A: "input", B: "input", GND: "power_in", C: "input", D: "input", Y: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUP1G99";
  override referencePrefix = "U";
}

/**
 * 74AUP1G04, Single NOT Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74AUP1GU04`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate NOT LVC CMOS.
 */
export class _74AUP1GU04 extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74AUP1GU04";
  override referencePrefix = "U";
}

/**
 * Single FET Bus Switch
 *
 * KiCad symbol: `74xGxx:74CBT1G125`. Reference prefix: `U`.
 * Footprint filters: SOT*, SC*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single FET Bus Switch.
 */
export class _74CBT1G125 extends Component.withPins({
  "~{OE}": "1",
  "A": "2",
  "GND": "3",
  "B": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{OE}": "input", A: "input", GND: "power_in", B: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74CBT1G125";
  override referencePrefix = "U";
}

/**
 * Single FET Bus Switch
 *
 * KiCad symbol: `74xGxx:74CB3T1G125`. Reference prefix: `U`.
 * Footprint filters: SOT*, SC*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single FET Bus Switch.
 */
export class _74CB3T1G125 extends Component.withPins({
  "~{OE}": "1",
  "A": "2",
  "GND": "3",
  "B": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{OE}": "input", A: "input", GND: "power_in", B: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74CB3T1G125";
  override referencePrefix = "U";
}

/**
 * Single FET Bus Switch
 *
 * KiCad symbol: `74xGxx:74CBT1G384`. Reference prefix: `U`.
 * Footprint filters: SOT*, SC*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single FET Bus Switch.
 */
export class _74CBT1G384 extends Component.withPins({
  "A": "1",
  "B": "2",
  "GND": "3",
  "~{OE}": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A: "input", B: "tri_state", GND: "power_in", "~{OE}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74CBT1G384";
  override referencePrefix = "U";
}

/**
 * Single FET Bus Switch
 *
 * KiCad symbol: `74xGxx:74CBTD1G125`. Reference prefix: `U`.
 * Footprint filters: SOT*, SC*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single FET Bus Switch.
 */
export class _74CBTD1G125 extends Component.withPins({
  "~{OE}": "1",
  "A": "2",
  "GND": "3",
  "B": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{OE}": "input", A: "input", GND: "power_in", B: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74CBTD1G125";
  override referencePrefix = "U";
}

/**
 * Single FET Bus Switch
 *
 * KiCad symbol: `74xGxx:74CBTD1G384`. Reference prefix: `U`.
 * Footprint filters: SOT*, SC*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single FET Bus Switch.
 */
export class _74CBTD1G384 extends Component.withPins({
  "A": "1",
  "B": "2",
  "GND": "3",
  "~{OE}": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A: "input", B: "tri_state", GND: "power_in", "~{OE}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74CBTD1G384";
  override referencePrefix = "U";
}

/**
 * Single FET Bus Switch
 *
 * KiCad symbol: `74xGxx:74CBTLV1G125`. Reference prefix: `U`.
 * Footprint filters: SOT*, SC*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single FET Bus Switch.
 */
export class _74CBTLV1G125 extends Component.withPins({
  "~{OE}": "1",
  "A": "2",
  "GND": "3",
  "B": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{OE}": "input", A: "input", GND: "power_in", B: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74CBTLV1G125";
  override referencePrefix = "U";
}

/**
 * Single AND-OR Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G0832`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate AND-OR LVC CMOS.
 */
export class _74LVC1G0832 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
  "P4": "4",
  "VCC": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "input", P4: "output", VCC: "power_in", P6: "input", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G0832";
  override referencePrefix = "U";
}

/**
 * Single NAND 3-Input Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G10`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate NAND triple LVC CMOS.
 */
export class _74LVC1G10 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
  "P4": "4",
  "VCC": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "input", P4: "output", VCC: "power_in", P6: "input", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G10";
  override referencePrefix = "U";
}

/**
 * Single AND 3-Input Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G11`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate AND triple LVC CMOS.
 */
export class _74LVC1G11 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
  "P4": "4",
  "VCC": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "input", P4: "output", VCC: "power_in", P6: "input", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G11";
  override referencePrefix = "U";
}

/**
 * Single Retriggerable Monostable Multivibrator, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G123`. Reference prefix: `U`.
 * Footprint filters: SSOP*2.95x2.8mm*P0.65*, VSSOP*2.3x2mm*P0.5mm*.
 * @see http://www.ti.com/lit/ds/symlink/sn74lvc1g123.pdf
 * Keywords: Single Mono Multivibrator CMOS.
 */
export class _74LVC1G123 extends Component.withPins({
  "~{A}": "1",
  "B": "2",
  "~{CLR}": "3",
  "Q": "5",
  "Cext": "6",
  "RCext": "7",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{A}": "input", B: "input", "~{CLR}": "input", Q: "output", Cext: "input", RCext: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G123";
  override referencePrefix = "U";
}

/**
 * 2 to 4 Decoder, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G139`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Decoder LVC CMOS.
 */
export class _74LVC1G139 extends Component.withPins({
  "A": "1",
  "B": "2",
  "Y3": "3",
  "GND": "4",
  "Y2": "5",
  "Y1": "6",
  "Y0": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A: "input", B: "input", Y3: "output", GND: "power_in", Y2: "output", Y1: "output", Y0: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G139";
  override referencePrefix = "U";
}

/**
 * Single D Flip-Flop, Asynchronous Clear, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G175`. Reference prefix: `U`.
 * Footprint filters: SOT*, SC*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single D Flip-Flop Clear CMOS.
 */
export class _74LVC1G175 extends Component.withPins({
  "C": "1",
  "GND": "2",
  "D": "3",
  "Q": "4",
  "VCC": "5",
  "~{CLR}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "input", GND: "power_in", D: "input", Q: "output", VCC: "power_in", "~{CLR}": "input", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G175";
  override referencePrefix = "U";
}

/**
 * Single NOR 3-Input Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G27`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate NOR triple LVC CMOS.
 */
export class _74LVC1G27 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
  "P4": "4",
  "VCC": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "input", P4: "output", VCC: "power_in", P6: "input", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G27";
  override referencePrefix = "U";
}

/**
 * 2 of 3 Decoder, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G29`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Decoder LVC CMOS.
 */
export class _74LVC1G29 extends Component.withPins({
  "~{G}": "1",
  "Y1": "2",
  "A2": "3",
  "GND": "4",
  "Y2": "5",
  "A1": "6",
  "Y0": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{G}": "input", Y1: "output", A2: "input", GND: "power_in", Y2: "output", A1: "input", Y0: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G29";
  override referencePrefix = "U";
}

/**
 * SPDT Analog Switch, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G3157`. Reference prefix: `U`.
 * Footprint filters: SOT*, SC*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: SPDT Analog Switch CMOS.
 */
export class _74LVC1G3157 extends Component.withPins({
  "P1": "1",
  "P3": "3",
  "P4": "4",
  "P6": "6",
  "GND": "2",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "bidirectional", P3: "bidirectional", P4: "bidirectional", P6: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G3157";
  override referencePrefix = "U";
}

/**
 * Single OR-AND Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G3208`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate OR-AND LVC CMOS.
 */
export class _74LVC1G3208 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
  "P4": "4",
  "VCC": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "input", P4: "output", VCC: "power_in", P6: "input", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G3208";
  override referencePrefix = "U";
}

/**
 * Single OR 3-Input Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G332`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate OR triple LVC CMOS.
 */
export class _74LVC1G332 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
  "P4": "4",
  "VCC": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "input", P4: "output", VCC: "power_in", P6: "input", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G332";
  override referencePrefix = "U";
}

/**
 * Single D Latch, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G373`. Reference prefix: `U`.
 * Footprint filters: SOT*, SC*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single D Latch CMOS.
 */
export class _74LVC1G373 extends Component.withPins({
  "LE": "1",
  "GND": "2",
  "D": "3",
  "Q": "4",
  "VCC": "5",
  "~{OE}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { LE: "input", GND: "power_in", D: "input", Q: "tri_state", VCC: "power_in", "~{OE}": "input", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G373";
  override referencePrefix = "U";
}

/**
 * Single D Flip-Flop Tri-State Output, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G374`. Reference prefix: `U`.
 * Footprint filters: SOT*, SC*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single D Flip-Flop Tri-State CMOS.
 */
export class _74LVC1G374 extends Component.withPins({
  "CLK": "1",
  "GND": "2",
  "D": "3",
  "Q": "4",
  "VCC": "5",
  "~{OE}": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { CLK: "input", GND: "power_in", D: "input", Q: "tri_state", VCC: "power_in", "~{OE}": "input", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G374";
  override referencePrefix = "U";
}

/**
 * Single NAND Gate Open Drain, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G38`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate NAND Open Drain LVC CMOS.
 */
export class _74LVC1G38 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G38";
  override referencePrefix = "U";
}

/**
 * Single XOR 3-Input Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G386`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate XOR triple LVC CMOS.
 */
export class _74LVC1G386 extends Component.withPins({
  "P1": "1",
  "GND": "2",
  "P3": "3",
  "P4": "4",
  "VCC": "5",
  "P6": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", GND: "power_in", P3: "input", P4: "output", VCC: "power_in", P6: "input", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G386";
  override referencePrefix = "U";
}

/**
 * Configurable Multi-Function Single Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G97`. Reference prefix: `U`.
 * Footprint filters: SOT*, SC*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Configurable Single Gate LVC CMOS.
 */
export class _74LVC1G97 extends Component.withPins({
  "IN1": "1",
  "GND": "2",
  "IN0": "3",
  "Y": "4",
  "VCC": "5",
  "IN2": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN1: "input", GND: "power_in", IN0: "input", Y: "output", VCC: "power_in", IN2: "input", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G97";
  override referencePrefix = "U";
}

/**
 * Configurable Multi-Function Single Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1G98`. Reference prefix: `U`.
 * Footprint filters: SOT*, SC*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Configurable Single Gate LVC CMOS.
 */
export class _74LVC1G98 extends Component.withPins({
  "IN1": "1",
  "GND": "2",
  "IN0": "3",
  "~{Y}": "4",
  "VCC": "5",
  "IN2": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { IN1: "input", GND: "power_in", IN0: "input", "~{Y}": "output", VCC: "power_in", IN2: "input", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1G98";
  override referencePrefix = "U";
}

/**
 * 74LVC1G04, Single NOT Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC1GU04`. Reference prefix: `U`.
 * Footprint filters: SOT*, SG-*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Gate NOT LVC CMOS.
 */
export class _74LVC1GU04 extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1GU04";
  override referencePrefix = "U";
}

/**
 * Single Inverter Gate, SOT-553
 *
 * KiCad symbol: `74xGxx:74LVC1GU04DRL`. Reference prefix: `U`.
 * Footprint filters: SOT*553*.
 * @see http://www.ti.com/lit/ds/symlink/sn74lvc1gu04.pdf
 * Keywords: inverter cmos.
 * Default footprint: Package_TO_SOT_SMD:SOT-553.
 */
export class _74LVC1GU04DRL extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC1GU04DRL";
  override referencePrefix = "U";
}

/**
 * Dual NOT Gate, Schmitt Triggered, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC2G14`. Reference prefix: `U`.
 * Footprint filters: SG-*, SOT*.
 * @see https://www.ti.com/lit/ds/symlink/sn74lvc2g14.pdf
 * Keywords: Dual Gate NOT Schmitt LVC CMOS.
 */
export class _74LVC2G14 extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P3": "3",
  "P4": "4",
  "GND": "2",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P6: "output", P3: "input", P4: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC2G14";
  override referencePrefix = "U";
}

/**
 * Single 2 to 1 Multiplexer, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC2G157`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single Mux CMOS.
 */
export class _74LVC2G157 extends Component.withPins({
  "A": "1",
  "B": "2",
  "~{Y}": "3",
  "GND": "4",
  "Y": "5",
  "~{A}/B": "6",
  "~{G}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { A: "input", B: "input", "~{Y}": "output", GND: "power_in", Y: "output", "~{A}/B": "input", "~{G}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC2G157";
  override referencePrefix = "U";
}

/**
 * Dual Buffer, Schmitt Triggered, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC2G17`. Reference prefix: `U`.
 * Footprint filters: SG-*, SOT*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Buffer Schmitt LVC CMOS.
 */
export class _74LVC2G17 extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P3": "3",
  "P4": "4",
  "GND": "2",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P6: "output", P3: "input", P4: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC2G17";
  override referencePrefix = "U";
}

/**
 * Dual NAND Gate, Open Drain, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC2G38`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Gate NAND Open Drain LVC CMOS.
 */
export class _74LVC2G38 extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "P7": "7",
  "P3": "3",
  "P5": "5",
  "P6": "6",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", P7: "open_collector", P3: "open_collector", P5: "input", P6: "input", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC2G38";
  override referencePrefix = "U";
}

/**
 * 74AUC1G74, Single D Flip-Flop, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC2G74`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Single D Flip-Flop D CMOS.
 */
export class _74LVC2G74 extends Component.withPins({
  "C": "1",
  "D": "2",
  "~{Q}": "3",
  "GND": "4",
  "Q": "5",
  "~{CLR}": "6",
  "~{PRE}": "7",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { C: "input", D: "input", "~{Q}": "output", GND: "power_in", Q: "output", "~{CLR}": "input", "~{PRE}": "input", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC2G74";
  override referencePrefix = "U";
}

/**
 * 74LVC2G04, Dual NOT Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC2GU04`. Reference prefix: `U`.
 * Footprint filters: SG-*, SOT*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Dual Gate NOT LVC CMOS.
 */
export class _74LVC2GU04 extends Component.withPins({
  "P1": "1",
  "P6": "6",
  "P3": "3",
  "P4": "4",
  "GND": "2",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P6: "output", P3: "input", P4: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC2GU04";
  override referencePrefix = "U";
}

/**
 * Triple NOT Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC3G04`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Triple Gate NOT LVC CMOS.
 */
export class _74LVC3G04 extends Component.withPins({
  "P1": "1",
  "P7": "7",
  "P2": "2",
  "P6": "6",
  "P3": "3",
  "P5": "5",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P7: "output", P2: "output", P6: "input", P3: "input", P5: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC3G04";
  override referencePrefix = "U";
}

/**
 * Triple NOT Gate, Open Drain, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC3G06`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Triple Gate NOT Open Drain LVC CMOS.
 */
export class _74LVC3G06 extends Component.withPins({
  "P1": "1",
  "P7": "7",
  "P2": "2",
  "P6": "6",
  "P3": "3",
  "P5": "5",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P7: "open_collector", P2: "open_collector", P6: "input", P3: "input", P5: "open_collector", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC3G06";
  override referencePrefix = "U";
}

/**
 * Triple Buffer, Open Drain, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC3G07`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Triple Buff Open Drain LVC CMOS.
 */
export class _74LVC3G07 extends Component.withPins({
  "P1": "1",
  "P7": "7",
  "P2": "2",
  "P6": "6",
  "P3": "3",
  "P5": "5",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P7: "open_collector", P2: "open_collector", P6: "input", P3: "input", P5: "open_collector", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC3G07";
  override referencePrefix = "U";
}

/**
 * Triple NOT Gate Schmitt, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC3G14`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see https://www.ti.com/lit/ds/symlink/sn74lvc3g14.pdf
 * Keywords: Triple NOT Schmitt LVC CMOS.
 */
export class _74LVC3G14 extends Component.withPins({
  "P1": "1",
  "P7": "7",
  "P2": "2",
  "P6": "6",
  "P3": "3",
  "P5": "5",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P7: "output", P2: "output", P6: "input", P3: "input", P5: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC3G14";
  override referencePrefix = "U";
}

/**
 * Triple Buffer Schmitt, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC3G17`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Triple Buf Schmitt LVC CMOS.
 */
export class _74LVC3G17 extends Component.withPins({
  "P1": "1",
  "P7": "7",
  "P2": "2",
  "P6": "6",
  "P3": "3",
  "P5": "5",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P7: "output", P2: "output", P6: "input", P3: "input", P5: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC3G17";
  override referencePrefix = "U";
}

/**
 * Triple Buffer, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC3G34`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Triple Buf LVC CMOS.
 */
export class _74LVC3G34 extends Component.withPins({
  "P1": "1",
  "P7": "7",
  "P2": "2",
  "P6": "6",
  "P3": "3",
  "P5": "5",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P7: "output", P2: "output", P6: "input", P3: "input", P5: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC3G34";
  override referencePrefix = "U";
}

/**
 * 74LVC3G04, Triple NOT Gate, Low-Voltage CMOS
 *
 * KiCad symbol: `74xGxx:74LVC3GU04`. Reference prefix: `U`.
 * Footprint filters: SSOP*, VSSOP*.
 * @see http://www.ti.com/lit/sg/scyt129e/scyt129e.pdf
 * Keywords: Triple Gate NOT LVC CMOS.
 */
export class _74LVC3GU04 extends Component.withPins({
  "P1": "1",
  "P7": "7",
  "P2": "2",
  "P6": "6",
  "P3": "3",
  "P5": "5",
  "GND": "4",
  "VCC": "8",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P7: "output", P2: "output", P6: "input", P3: "input", P5: "output", GND: "power_in", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:74LVC3GU04";
  override referencePrefix = "U";
}

/**
 * Dual schmitt inverter
 *
 * KiCad symbol: `74xGxx:Inverter_Schmitt_Dual`. Reference prefix: `U`.
 * Footprint filters: SOT?23*, SOT?363*, SC?70*.
 * Keywords: dual schmitt inverter.
 */
export class Inverter_Schmitt_Dual extends Component.withPins({
  "1A": "1",
  "GND": "2",
  "2A": "3",
  "2Y": "4",
  "V_{CC}": "5",
  "1Y": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1A": "input", GND: "power_in", "2A": "input", "2Y": "output", "V_{CC}": "power_in", "1Y": "output", ...opts.pinTypes } });
  }
  override schema = "74xGxx:Inverter_Schmitt_Dual";
  override referencePrefix = "U";
}

/**
 * High-Speed Logic Inverter, SOT-353
 *
 * KiCad symbol: `74xGxx:NC7SVU04P5X`. Reference prefix: `U`.
 * Footprint filters: SOT*353*SC*70*.
 * @see https://www.onsemi.com/pub/Collateral/NC7SVU04-D.pdf
 * Keywords: inverter.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class NC7SVU04P5X extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:NC7SVU04P5X";
  override referencePrefix = "U";
}

/**
 * TinyLogic UHS Buffer, Tri-State Output, SOT-23-5
 *
 * KiCad symbol: `74xGxx:NC7SZ125M5X`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.onsemi.com/pdf/datasheet/nc7sz125-d.pdf
 * Keywords: buffer three-state.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class NC7SZ125M5X extends Component.withPins({
  "~{OE}": "1",
  "A": "2",
  "GND": "3",
  "Y": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{OE}": "input", A: "input", GND: "power_in", Y: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:NC7SZ125M5X";
  override referencePrefix = "U";
}

/**
 * TinyLogic UHS Buffer, Tri-State Output, SOT-353
 *
 * KiCad symbol: `74xGxx:NC7SZ125P5X`. Reference prefix: `U`.
 * Footprint filters: SOT*353*.
 * @see https://www.onsemi.com/pdf/datasheet/nc7sz125-d.pdf
 * Keywords: buffer three-state.
 * Default footprint: Package_TO_SOT_SMD:SOT-353_SC-70-5.
 */
export class NC7SZ125P5X extends Component.withPins({
  "~{OE}": "1",
  "A": "2",
  "GND": "3",
  "Y": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "~{OE}": "input", A: "input", GND: "power_in", Y: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:NC7SZ125P5X";
  override referencePrefix = "U";
}

/**
 * Single NAND Gate, Low-Voltage CMOS, SOT-23
 *
 * KiCad symbol: `74xGxx:SN74LVC1G00DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/sn74lvc1g00.pdf
 * Keywords: Single Gate NAND LVC CMOS.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class SN74LVC1G00DBV extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:SN74LVC1G00DBV";
  override referencePrefix = "U";
}

/**
 * Single NAND Gate, Low-Voltage CMOS, SOT-353
 *
 * KiCad symbol: `74xGxx:SN74LVC1G00DCK`. Reference prefix: `U`.
 * Footprint filters: Texas?R?PDSO?G5?DCK*.
 * @see http://www.ti.com/lit/ds/symlink/sn74lvc1g00.pdf
 * Keywords: Single Gate NAND LVC CMOS.
 * Default footprint: Package_TO_SOT_SMD:Texas_R-PDSO-G5_DCK-5.
 */
export class SN74LVC1G00DCK extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:SN74LVC1G00DCK";
  override referencePrefix = "U";
}

/**
 * Single NAND Gate, Low-Voltage CMOS, SOT-553
 *
 * KiCad symbol: `74xGxx:SN74LVC1G00DRL`. Reference prefix: `U`.
 * Footprint filters: Texas?R?PDSO?N5?DRL*.
 * @see http://www.ti.com/lit/ds/symlink/sn74lvc1g00.pdf
 * Keywords: Single Gate NAND LVC CMOS.
 * Default footprint: Package_TO_SOT_SMD:Texas_R-PDSO-N5_DRL-5.
 */
export class SN74LVC1G00DRL extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:SN74LVC1G00DRL";
  override referencePrefix = "U";
}

/**
 * Single Buffer Gate Tri-State, Low-Voltage CMOS, SOT-23-5
 *
 * KiCad symbol: `74xGxx:SN74LVC1G125DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see http://www.ti.com/lit/ds/symlink/sn74lvc1g125.pdf
 * Keywords: Single Gate Buff Tri-State LVC CMOS.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class SN74LVC1G125DBV extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:SN74LVC1G125DBV";
  override referencePrefix = "U";
}

/**
 * Single Buffer Gate Tri-State, Low-Voltage CMOS, SOT-353
 *
 * KiCad symbol: `74xGxx:SN74LVC1G125DCK`. Reference prefix: `U`.
 * Footprint filters: Texas?R?PDSO?G5?DCK*.
 * @see http://www.ti.com/lit/ds/symlink/sn74lvc1g125.pdf
 * Keywords: Single Gate Buff Tri-State LVC CMOS.
 * Default footprint: Package_TO_SOT_SMD:Texas_R-PDSO-G5_DCK-5.
 */
export class SN74LVC1G125DCK extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:SN74LVC1G125DCK";
  override referencePrefix = "U";
}

/**
 * Single Buffer Gate Tri-State, Low-Voltage CMOS, SOT-553
 *
 * KiCad symbol: `74xGxx:SN74LVC1G125DRL`. Reference prefix: `U`.
 * Footprint filters: Texas?R?PDSO?N5?DRL*.
 * @see http://www.ti.com/lit/ds/symlink/sn74lvc1g125.pdf
 * Keywords: Single Gate Buff Tri-State LVC CMOS.
 * Default footprint: Package_TO_SOT_SMD:Texas_R-PDSO-N5_DRL-5.
 */
export class SN74LVC1G125DRL extends Component.withPins({
  "P1": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { P1: "input", P2: "input", GND: "power_in", P4: "tri_state", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:SN74LVC1G125DRL";
  override referencePrefix = "U";
}

/**
 * Single Schmitt NOT Gate, Low-Voltage CMOS, SOT-23
 *
 * KiCad symbol: `74xGxx:SN74LVC1G14DBV`. Reference prefix: `U`.
 * Footprint filters: SOT*23*.
 * @see https://www.ti.com/lit/ds/symlink/sn74lvc1g14.pdf
 * Keywords: Single Gate NOT Schmitt LVC CMOS.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-5.
 */
export class SN74LVC1G14DBV extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:SN74LVC1G14DBV";
  override referencePrefix = "U";
}

/**
 * Single Schmitt NOT Gate, Low-Voltage CMOS, SOT-553
 *
 * KiCad symbol: `74xGxx:SN74LVC1G14DRL`. Reference prefix: `U`.
 * Footprint filters: SOT*553*.
 * @see https://www.ti.com/lit/ds/symlink/sn74lvc1g14.pdf
 * Keywords: Single Gate NOT Schmitt LVC CMOS.
 * Default footprint: Package_TO_SOT_SMD:SOT-553.
 */
export class SN74LVC1G14DRL extends Component.withPins({
  "NC": "1",
  "P2": "2",
  "GND": "3",
  "P4": "4",
  "VCC": "5",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { NC: "no_connect", P2: "input", GND: "power_in", P4: "output", VCC: "power_in", ...opts.pinTypes } });
  }
  override schema = "74xGxx:SN74LVC1G14DRL";
  override referencePrefix = "U";
}

/**
 * Dual schmitt inverter, VCC from 1.65 to 5.5 V, SOT-23
 *
 * KiCad symbol: `74xGxx:SN74LVC2G14DBV`. Reference prefix: `U`.
 * Footprint filters: SOT?23*.
 * @see https://www.ti.com/lit/ds/symlink/sn74lvc2g14.pdf
 * Keywords: dual schmitt inverter.
 * Default footprint: Package_TO_SOT_SMD:SOT-23-6.
 */
export class SN74LVC2G14DBV extends Component.withPins({
  "1A": "1",
  "GND": "2",
  "2A": "3",
  "2Y": "4",
  "V_{CC}": "5",
  "1Y": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1A": "input", GND: "power_in", "2A": "input", "2Y": "output", "V_{CC}": "power_in", "1Y": "output", ...opts.pinTypes } });
  }
  override schema = "74xGxx:SN74LVC2G14DBV";
  override referencePrefix = "U";
}

/**
 * Dual schmitt inverter, VCC from 1.65 to 5.5 V, SOT-363
 *
 * KiCad symbol: `74xGxx:TC7PZ14FU`. Reference prefix: `U`.
 * Footprint filters: SOT?363*.
 * @see https://toshiba.semicon-storage.com/info/docget.jsp?did=14431&prodName=TC7PZ14FU
 * Keywords: dual schmitt inverter.
 * Default footprint: Package_TO_SOT_SMD:SOT-363_SC-70-6.
 */
export class TC7PZ14FU extends Component.withPins({
  "1A": "1",
  "GND": "2",
  "2A": "3",
  "2Y": "4",
  "V_{CC}": "5",
  "1Y": "6",
}) {
  constructor(opts: ConstructorParameters<typeof Component>[0] = {}) {
    super({ ...opts, pinTypes: { "1A": "input", GND: "power_in", "2A": "input", "2Y": "output", "V_{CC}": "power_in", "1Y": "output", ...opts.pinTypes } });
  }
  override schema = "74xGxx:TC7PZ14FU";
  override referencePrefix = "U";
}
